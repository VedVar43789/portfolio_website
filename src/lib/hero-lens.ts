/**
 * Chromatic "dreamy" lens for the hero portrait, ported from the NOVAIR reference.
 *
 * Around the pointer (a soft gaussian lens) the portrait is smeared outwards and split into a
 * red, green and blue spectrum. The portrait already has a transparent background, so the image
 * itself is the cutout and nothing behind the person is ever sampled. A transparent canvas sits
 * right above the <img>, eases in on hover, trails the pointer and eases out when it leaves.
 */

const EFFECT = { size: 0.52, strength: 140, opacity: 0.8 };

// Pointer area (share of the image box) that counts as hovering the person.
const HOVER_AREA = { left: 0.24, right: 0.79, top: 0, bottom: 1 };

const VERTEX = `#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
    v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);
    gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_media;
uniform vec2 u_box;
uniform vec2 u_drawn;
uniform vec2 u_offset;
uniform vec2 u_mouse;
uniform float u_hover;
uniform float u_size;
uniform float u_strength;
uniform float u_opacity;

vec3 spectrum(float p) {
    return 2.6 * vec3(
        smoothstep(0.54, 0.24, p),
        smoothstep(0.38, 0.0, abs(p - 0.5)),
        smoothstep(0.47, 0.82, p)
    );
}

vec4 sampleMedia(vec2 t) {
    vec4 s = texture(u_media, clamp(t, 0.0, 1.0));
    return vec4(s.rgb * s.a, s.a);
}

vec2 toAspect(vec2 uv, float aspect) {
    return (uv * 2.0 - 1.0) * vec2(aspect, 1.0) / max(aspect, 1.0);
}

void main() {
    vec2 t = v_uv;
    vec2 b = (t * u_drawn + u_offset) / u_box;
    float aspect = u_box.x / u_box.y;

    vec2 relM = toAspect(b, aspect) - toAspect(u_mouse, aspect);
    float sigma = max(u_size * 0.5, 0.02);
    float fall = exp(-dot(relM, relM) / (2.0 * sigma * sigma));

    float weight = u_hover * smoothstep(0.02, 0.35, fall) * u_opacity;
    if (weight < 0.002) {
        fragColor = vec4(0.0);
        return;
    }

    vec2 dispBox = relM * fall * u_hover * u_strength / 1600.0;
    vec2 disp = dispBox * u_box / u_drawn;

    vec3 color = vec3(0.0);
    vec3 total = vec3(0.0);
    float alpha = 0.0;
    float taps = 0.0;

    for (int j = 0; j < 34; j++) {
        float i = float(j) * 0.03;
        if (i >= 1.0) break;
        vec4 s = sampleMedia(t + disp * i);
        vec3 w = spectrum(i);
        color += s.rgb * w;
        total += w;
        alpha += s.a;
        taps += 1.0;
    }

    color /= max(total, vec3(1e-4));
    alpha = min(alpha / max(taps, 1.0), 1.0);

    fragColor = vec4(clamp(color, 0.0, 1.0) * weight, alpha * weight);
}`;

type Uniform =
  | "u_media"
  | "u_box"
  | "u_drawn"
  | "u_offset"
  | "u_mouse"
  | "u_hover"
  | "u_size"
  | "u_strength"
  | "u_opacity";

interface Renderer {
  canvas: HTMLCanvasElement;
  gl: WebGL2RenderingContext;
  program: WebGLProgram;
  vao: WebGLVertexArrayObject;
  uniforms: Record<Uniform, WebGLUniformLocation | null>;
}

interface Frame {
  box: [number, number];
  drawn: [number, number];
  offset: [number, number];
  mouse: [number, number];
  hover: number;
}

const compile = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createRenderer = (width: number, height: number): Renderer | null => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const gl = canvas.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: true,
  });
  if (!gl) return null;

  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;

  const vao = gl.createVertexArray();
  const buffer = gl.createBuffer();
  if (!vao || !buffer) return null;

  gl.bindVertexArray(vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(null);

  const names: Uniform[] = [
    "u_media",
    "u_box",
    "u_drawn",
    "u_offset",
    "u_mouse",
    "u_hover",
    "u_size",
    "u_strength",
    "u_opacity",
  ];
  const uniforms = Object.fromEntries(names.map((name) => [name, gl.getUniformLocation(program, name)])) as Record<
    Uniform,
    WebGLUniformLocation | null
  >;

  return { canvas, gl, program, vao, uniforms };
};

/**
 * Adds the lens to the hero portrait. Returns a cleanup function, or a no-op when WebGL 2 is not available.
 * `root` receives the pointer; `image` is the portrait <img> (its parent must be positioned).
 */
export const attachHeroLens = (root: HTMLElement, image: HTMLImageElement): (() => void) => {
  const width = Math.min(image.naturalWidth, 1200);
  const height = Math.round((image.naturalHeight / image.naturalWidth) * width);
  const renderer = createRenderer(width, height);
  if (!renderer || !image.parentElement) return () => undefined;

  const { gl, canvas: shared, uniforms } = renderer;

  const texture = gl.createTexture();
  if (!texture) return () => undefined;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const overlay = document.createElement("canvas");
  overlay.width = width;
  overlay.height = height;
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none;visibility:hidden;";
  const context = overlay.getContext("2d");
  if (!context) return () => undefined;
  image.insertAdjacentElement("afterend", overlay);

  const state = { hovering: false, ease: 0, mouse: [0.5, 0.5] as [number, number], frame: 0, last: 0 };
  let pointer: { x: number; y: number } | null = null;

  const frameFor = (): Frame | null => {
    const boxWidth = overlay.offsetWidth;
    const boxHeight = overlay.offsetHeight;
    if (!boxWidth || !boxHeight) return null;
    const scale = Math.min(boxWidth / width, boxHeight / height);
    const drawnWidth = width * scale;
    const drawnHeight = height * scale;
    return {
      box: [boxWidth, boxHeight],
      drawn: [drawnWidth, drawnHeight],
      offset: [(boxWidth - drawnWidth) / 2, (boxHeight - drawnHeight) / 2],
      mouse: state.mouse,
      hover: state.ease,
    };
  };

  const draw = () => {
    const frame = frameFor();
    if (!frame || gl.isContextLost()) return;

    const boost = Math.min(2, Math.max(1, 800 / Math.max(frame.box[0], frame.box[1])));

    gl.viewport(0, 0, width, height);
    gl.disable(gl.BLEND);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(renderer.program);
    gl.bindVertexArray(renderer.vao);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.uniform1i(uniforms.u_media, 0);
    gl.uniform2f(uniforms.u_box, Math.max(1, frame.box[0]), Math.max(1, frame.box[1]));
    gl.uniform2f(uniforms.u_drawn, Math.max(1, frame.drawn[0]), Math.max(1, frame.drawn[1]));
    gl.uniform2f(uniforms.u_offset, frame.offset[0], frame.offset[1]);
    gl.uniform2f(uniforms.u_mouse, frame.mouse[0], frame.mouse[1]);
    gl.uniform1f(uniforms.u_hover, frame.hover);
    gl.uniform1f(uniforms.u_size, EFFECT.size);
    gl.uniform1f(uniforms.u_strength, EFFECT.strength * boost);
    gl.uniform1f(uniforms.u_opacity, EFFECT.opacity);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);

    context.clearRect(0, 0, width, height);
    context.drawImage(shared, 0, shared.height - height, width, height, 0, 0, width, height);
  };

  const tick = (now: number) => {
    const delta = state.last ? now - state.last : 1000 / 60;
    state.last = now;
    const steps = Math.min((delta / 1000) * 60, 3);

    let moved = false;
    const rect = overlay.getBoundingClientRect();

    if (state.hovering && pointer && rect.width > 0 && rect.height > 0) {
      const targetX = (pointer.x - rect.left) / rect.width;
      const targetY = (pointer.y - rect.top) / rect.height;

      if (state.ease < 0.02) {
        state.mouse = [targetX, targetY];
      } else {
        const follow = 1 - Math.pow(0.8, steps);
        const nextX = state.mouse[0] + (targetX - state.mouse[0]) * follow;
        const nextY = state.mouse[1] + (targetY - state.mouse[1]) * follow;
        moved = Math.abs(nextX - state.mouse[0]) + Math.abs(nextY - state.mouse[1]) > 0.00005;
        state.mouse = [nextX, nextY];
      }
    }

    const goal = state.hovering ? 1 : 0;
    const previous = state.ease;
    state.ease += (goal - state.ease) * (1 - Math.pow(0.85, steps));

    if (!state.hovering && state.ease < 0.004) {
      state.ease = 0;
      context.clearRect(0, 0, width, height);
      overlay.style.visibility = "hidden";
      state.frame = 0;
      state.last = 0;
      return;
    }

    if (moved || Math.abs(state.ease - previous) > 0.0005) draw();
    state.frame = window.requestAnimationFrame(tick);
  };

  const start = () => {
    if (state.frame) return;
    state.last = 0;
    state.frame = window.requestAnimationFrame(tick);
  };

  const insideLens = (x: number, y: number) => {
    const rect = overlay.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return false;
    const u = (x - rect.left) / rect.width;
    const v = (y - rect.top) / rect.height;
    return u >= HOVER_AREA.left && u <= HOVER_AREA.right && v >= HOVER_AREA.top && v <= HOVER_AREA.bottom;
  };

  const handleMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    pointer = { x: event.clientX, y: event.clientY };
    const next = insideLens(pointer.x, pointer.y);
    if (next && !state.hovering) overlay.style.visibility = "visible";
    state.hovering = next;
    if (next || state.ease > 0) start();
  };

  const handleLeave = () => {
    pointer = null;
    state.hovering = false;
    start();
  };

  root.addEventListener("pointermove", handleMove, { passive: true });
  root.addEventListener("pointerleave", handleLeave);
  window.addEventListener("blur", handleLeave);

  return () => {
    window.cancelAnimationFrame(state.frame);
    root.removeEventListener("pointermove", handleMove);
    root.removeEventListener("pointerleave", handleLeave);
    window.removeEventListener("blur", handleLeave);
    overlay.remove();
    gl.deleteTexture(texture);
  };
};
