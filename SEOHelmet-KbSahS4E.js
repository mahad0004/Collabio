import {
    a,
    aB as f,
    aC as h,
    i as x,
    g as y,
    j as t,
    aD as S
} from "./index-DpApWwGv.js";

function C({
    seo: r,
    regular: l,
    structuredData: o,
    canonical: c,
    noIndex: d = !1
}) {
    const m = a(f),
        n = a(h),
        e = x() ? r || {} : l || {};
    m && n && (e.title = n);
    const g = (e == null ? void 0 : e.title) || `${y(!0)}`,
        w = (e == null ? void 0 : e.description) || "Study hard and learn faster! With Quizlet Clone, you can study for your classes and get better grades! All with a fun and engaging interface!",
        p = (e == null ? void 0 : e.keywords) || "school site studying pratice quizlet",
        s = (e == null ? void 0 : e.image) || "/imgs/og_image.png",
        i = c || (typeof window < "u" ? (() => {
            const u = window.location.hostname.includes("duckmaths") ? "d2gve52fz9syn8.cloudfront.net" : window.location.hostname;
            return `${window.location.protocol}//${u}${window.location.pathname.toLowerCase()}`
        })() : "");
    return t.jsxs(S, {
        children: [t.jsx("title", {
            children: g
        }), t.jsx("meta", {
            name: "description",
            content: w
        }), t.jsx("meta", {
            name: "keywords",
            content: p
        }), t.jsx("meta", {
            property: "og:image",
            content: s
        }), t.jsx("meta", {
            name: "twitter:image",
            content: s
        }), t.jsx("meta", {
            name: "robots",
            content: d ? "noindex, nofollow" : "index, follow"
        }), i && t.jsx("link", {
            rel: "canonical",
            href: i
        }), o && t.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(o)
        })]
    })
}
export {
    C as S
};