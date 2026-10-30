import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as gsapWithCSS } from "../_libs/gsap+gsap__react+react.mjs";
import { n as ScrollTrigger } from "../_libs/gsap.mjs";
import { n as prefersReducedMotion, r as setLenis, t as isFinePointer } from "./lenis-pJXNcTR0.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D6TkTJBb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-x7c1hheL.css";
/** Smooth wheel scrolling (desktop) kept in sync with ScrollTrigger. Touch devices keep native scrolling. */
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		const refresh = () => ScrollTrigger.refresh();
		document.fonts?.ready.then(refresh).catch(() => void 0);
		window.addEventListener("load", refresh);
		if (prefersReducedMotion()) return () => window.removeEventListener("load", refresh);
		const lenis = new Lenis({
			lerp: .09,
			smoothWheel: true,
			wheelMultiplier: .95,
			anchors: { offset: -80 }
		});
		setLenis(lenis);
		const unsubscribe = lenis.on("scroll", ScrollTrigger.update);
		const tick = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(tick);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			window.removeEventListener("load", refresh);
			unsubscribe();
			gsapWithCSS.ticker.remove(tick);
			lenis.destroy();
			setLenis(null);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* A soft orchid follower that grows into a label ("Open", "Photo") over elements
* marked with data-cursor. Only active with a mouse; the native cursor stays visible.
*/
function Cursor() {
	const rootRef = (0, import_react.useRef)(null);
	const dotRef = (0, import_react.useRef)(null);
	const labelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		const dot = dotRef.current;
		const label = labelRef.current;
		if (!root || !dot || !label || !isFinePointer()) return;
		const duration = prefersReducedMotion() ? .01 : .55;
		const moveX = gsapWithCSS.quickTo(root, "x", {
			duration,
			ease: "expo.out"
		});
		const moveY = gsapWithCSS.quickTo(root, "y", {
			duration,
			ease: "expo.out"
		});
		let visible = false;
		let activeLabel = "";
		const show = () => {
			if (visible) return;
			visible = true;
			gsapWithCSS.to(root, {
				autoAlpha: 1,
				duration: .3
			});
		};
		const setActive = (text) => {
			if (text === activeLabel) return;
			activeLabel = text;
			if (text) {
				label.textContent = text;
				gsapWithCSS.to(dot, {
					scale: 1,
					duration: .5,
					ease: "expo.out"
				});
				gsapWithCSS.to(label, {
					autoAlpha: 1,
					duration: .3,
					delay: .08
				});
			} else {
				gsapWithCSS.to(label, {
					autoAlpha: 0,
					duration: .15
				});
				gsapWithCSS.to(dot, {
					scale: .14,
					duration: .5,
					ease: "expo.out"
				});
			}
		};
		const handleMove = (event) => {
			if (event.pointerType !== "mouse") return;
			show();
			moveX(event.clientX);
			moveY(event.clientY);
			setActive((event.target instanceof Element ? event.target.closest("[data-cursor]") : null)?.dataset.cursor ?? "");
		};
		const handleLeave = () => {
			visible = false;
			gsapWithCSS.to(root, {
				autoAlpha: 0,
				duration: .3
			});
		};
		const handleDown = () => {
			gsapWithCSS.to(dot, {
				scale: activeLabel ? .9 : .1,
				duration: .2
			});
		};
		const handleUp = () => {
			gsapWithCSS.to(dot, {
				scale: activeLabel ? 1 : .14,
				duration: .4,
				ease: "expo.out"
			});
		};
		gsapWithCSS.set(dot, { scale: .14 });
		window.addEventListener("pointermove", handleMove, { passive: true });
		window.addEventListener("pointerdown", handleDown, { passive: true });
		window.addEventListener("pointerup", handleUp, { passive: true });
		document.documentElement.addEventListener("pointerleave", handleLeave);
		return () => {
			window.removeEventListener("pointermove", handleMove);
			window.removeEventListener("pointerdown", handleDown);
			window.removeEventListener("pointerup", handleUp);
			document.documentElement.removeEventListener("pointerleave", handleLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: rootRef,
		className: "pointer-events-none fixed left-0 top-0 z-[150] hidden opacity-0 [@media(hover:hover)_and_(pointer:fine)]:block",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dotRef,
			className: "flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-flare text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref: labelRef,
				className: "eyebrow font-medium opacity-0",
				children: "View"
			})
		})
	});
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vedant | AI Systems Engineer" },
			{
				name: "description",
				content: "Vedant, AI Systems Engineer building agentic AI and full-stack systems. Data Science & Finance @ UC San Diego."
			},
			{
				name: "author",
				content: "Vedant"
			},
			{
				property: "og:title",
				content: "Vedant | AI Systems Engineer"
			},
			{
				property: "og:description",
				content: "Agentic AI, multi-agent systems, and production full-stack engineering."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		],
		scripts: [{ children: "document.documentElement.classList.add('js')" }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SmoothScroll, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": "true"
			})
		] })
	});
}
var $$splitComponentImporter = () => import("./routes-B7-AY3sR.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Vedant | AI Systems Engineer" },
		{
			name: "description",
			content: "Vedant Vardhaan, AI Systems Engineer building agentic AI and full-stack systems. Data Science @ UC San Diego."
		},
		{
			property: "og:title",
			content: "Vedant | AI Systems Engineer"
		},
		{
			property: "og:description",
			content: "Agentic AI, multi-agent systems, and production full-stack engineering."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
