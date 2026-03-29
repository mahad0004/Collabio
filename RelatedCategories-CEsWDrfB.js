import {
    j as e,
    i as S,
    L as z,
    h as E,
    r as b,
    t as C,
    aw as B,
    ae as W,
    a9 as X,
    ax as Z,
    a as J,
    ay as ee,
    v as w,
    az as te,
    w as se,
    ac as N,
    g as H,
    ah as R,
    ad as O
} from "./index-DpApWwGv.js";
import {
    u as q
} from "./useApps-DUHCSiey.js";
import {
    u as ae
} from "./useCurUser-Dn6qWQUf.js";

function ne({
    children: t,
    isOpen: s,
    onClose: n,
    title: a = "Menu"
}) {
    return e.jsxs(e.Fragment, {
        children: [s && e.jsx("div", {
            className: "sidebar-backdrop",
            onClick: n
        }), e.jsxs("div", {
            className: `sidebar ${s?"sidebar--open":""}`,
            "data-testid": "left-sidebar",
            children: [e.jsxs("div", {
                className: "sidebar-header",
                children: [e.jsx("button", {
                    className: "sidebar-back-button",
                    onClick: n,
                    "aria-label": "Close sidebar",
                    children: e.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: e.jsx("path", {
                            d: "M15 18L9 12L15 6",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }), e.jsx("h2", {
                    className: "sidebar-title",
                    children: a
                })]
            }), e.jsx("div", {
                className: "sidebar-content",
                children: t
            })]
        })]
    })
}
const re = ({
    icon: t,
    label: s,
    color: n,
    path: a,
    newTab: i
}) => {
    const o = e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
            className: "account-sidebar-item-icon",
            children: t
        }), e.jsx("span", {
            className: "account-sidebar-item-label",
            children: s
        }), e.jsx("div", {
            className: "account-sidebar-item-arrow",
            children: e.jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: e.jsx("path", {
                    d: "M9 18l6-6-6-6"
                })
            })
        })]
    });
    return i ? e.jsx("a", {
        className: "account-sidebar-item",
        href: a,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
            "--item-color": n
        },
        children: o
    }) : e.jsx(z, {
        className: "account-sidebar-item",
        to: a,
        style: {
            "--item-color": n
        },
        children: o
    })
};

function oe() {
    const t = [{
        icon: e.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [e.jsx("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }), e.jsx("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            })]
        }),
        label: "Profile",
        color: "#3fb683",
        path: "/profile"
    }, {
        icon: e.jsx("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: e.jsx("path", {
                d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
            })
        }),
        label: "Streak",
        color: "#ffa726",
        path: "/streak"
    }, {
        icon: e.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [e.jsx("path", {
                d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
            }), e.jsx("path", {
                d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
            }), e.jsx("path", {
                d: "M4 22h16"
            }), e.jsx("path", {
                d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
            }), e.jsx("path", {
                d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
            }), e.jsx("path", {
                d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
            })]
        }),
        label: "Leaderboard",
        color: "#ffb300",
        path: "/leaderboard"
    }, {
        icon: e.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [e.jsx("circle", {
                cx: "9",
                cy: "21",
                r: "1"
            }), e.jsx("circle", {
                cx: "20",
                cy: "21",
                r: "1"
            }), e.jsx("path", {
                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            })]
        }),
        label: S() ? "Item Shop" : "Cache",
        color: "#9c27b0",
        path: "/cache"
    }, {
        icon: e.jsx("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: e.jsx("path", {
                d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
            })
        }),
        label: "Links",
        color: "#d84d0dff",
        path: "/links"
    }, {
        icon: e.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [e.jsx("path", {
                d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            }), e.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            })]
        }),
        label: "Settings",
        color: "#9caf9c",
        path: "/settings"
    }, {
        icon: e.jsx("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: e.jsx("path", {
                d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
            })
        }),
        label: (S(), "The Duck Pond"),
        color: "#5865F2",
        path: "/join-chad.html",
        newTab: !0
    }];
    return e.jsx("div", {
        className: "account-sidebar-items",
        children: e.jsx("div", {
            className: "account-sidebar-list",
            children: t.map((s, n) => e.jsx(re, {
                icon: s.icon,
                label: s.label,
                color: s.color,
                path: s.path,
                newTab: s.newTab
            }, n))
        })
    })
}
const me = "test_app_frame",
    ie = "app_icon_",
    Q = ({
        link: t,
        title: s,
        icon: n,
        id: a,
        size: i = "1x1",
        videoUrl: o
    }) => {
        const h = n || B,
            c = i,
            m = E(),
            r = b.useRef(null),
            [d, l] = b.useState(!1),
            g = f => {
                f.preventDefault(), X.capture("app_icon_clicked", {
                    app_id: a
                }), t ? window.open(t, "_blank") : Z(m, s)
            },
            p = () => {
                l(!0)
            },
            j = () => {
                l(!1), r.current && o && (r.current.pause(), r.current.currentTime = 0)
            },
            k = () => ({
                "1x1": "col-span-1 row-span-1",
                "2x2": "col-span-2 row-span-2",
                "3x3": "col-span-3 row-span-3"
            })[c] || "col-span-1 row-span-1";
        return e.jsx("a", {
            "data-testid": `${ie}${s}`,
            href: t ? ? C(s) ? ? void 0,
            id: a,
            className: `app-icon-card ${k()}`,
            onClick: g,
            onMouseEnter: p,
            onMouseLeave: j,
            children: e.jsxs("div", {
                className: "app-icon-container",
                children: [e.jsxs("div", {
                    className: "app-icon-image-wrapper",
                    children: [e.jsx("img", {
                        loading: "lazy",
                        src: h,
                        alt: s,
                        className: "app-icon-image",
                        onError: f => {
                            const $ = f.target;
                            $.src = B
                        }
                    }), d && o && e.jsx("video", {
                        ref: r,
                        src: o,
                        className: `app-icon-video ${d?"show-video":""}`,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        autoPlay: !0
                    })]
                }), e.jsx("div", {
                    className: "app-icon-overlay",
                    children: e.jsx("h3", {
                        className: "new-app-icon-title",
                        children: W(s)
                    })
                })]
            })
        })
    };

function V() {
    return J(ee) || []
}
const D = ({
    qualifier: t,
    apps: s,
    loading: n
}) => e.jsxs("div", {
    className: "apps-list-container",
    children: [e.jsx("h2", {
        className: "apps-list-header",
        children: `${t} ${S()?"Games":"Classes"}`
    }), n ? e.jsx("div", {
        className: "apps-list-loading",
        children: e.jsx("div", {
            className: "loading-spinner"
        })
    }) : e.jsx("div", {
        className: "apps-list-scroll",
        children: e.jsx("ul", {
            className: "apps-list-list",
            children: s.map((a, i) => e.jsx("li", {
                children: e.jsx(Q, {
                    size: "1x1",
                    title: a.title,
                    icon: a.icon,
                    id: String(a.id),
                    videoUrl: a.video_link
                })
            }, `${a.id}-${a.updated_at}-${i}`))
        })
    })]
});

function le() {
    const t = q(),
        s = V(),
        n = ae(),
        [a, i] = b.useState(""),
        [o, h] = b.useState(""),
        [c, m] = b.useState(""),
        [r, d] = b.useState([]),
        [l, g] = b.useState([]),
        [p, j] = b.useState(!0),
        [k, f] = b.useState(!0),
        $ = ["Desktop", "Mobile", "Tablet"],
        M = a !== "" || o !== "" || c !== "",
        P = b.useMemo(() => !(t != null && t.length) || !M ? [] : t.filter(u => {
            var v, L, G;
            if (u.is_listed === !1) return !1;
            const x = a === "" || u.title.toLowerCase().includes(a.toLowerCase()) || ((v = u.desc) == null ? void 0 : v.toLowerCase().includes(a.toLowerCase())) || !1,
                A = o === "" || ((L = u.categories) == null ? void 0 : L.split(" ").some(T => T.trim() === o)),
                y = c === "" || ((G = u.devices) == null ? void 0 : G.split(",").some(T => T.trim() === c));
            return x && A && y
        }).sort((u, x) => W(u.title).toLowerCase().includes(a.toLowerCase()) ? -1 : (W(x.title).toLowerCase().includes(a.toLowerCase()), 1)), [t, a, o, c, M]);
    return b.useEffect(() => {
        (async () => {
            if (!t) {
                j(!1);
                return
            }
            try {
                j(!0);
                const x = await te();
                if (console.log(x), x && x.length > 0) {
                    const A = x.map(y => {
                        const v = t.find(L => L.id === y.app_id);
                        return v && v.is_listed !== !1 ? v : null
                    }).filter(y => y !== null);
                    d(A)
                }
            } catch (x) {
                console.error("Error fetching top games:", x)
            } finally {
                j(!1)
            }
        })()
    }, [t]), b.useEffect(() => {
        (async () => {
            if (!(n != null && n.userId) || !t) {
                f(!1);
                return
            }
            try {
                f(!0);
                const x = await se(n.userId);
                if (x && x.length > 0) {
                    const A = x.map(y => {
                        const v = t.find(L => L.id === y.app_id);
                        return v && v.is_listed !== !1 ? { ...v,
                            updated_at: y.updated_at
                        } : null
                    }).filter(y => y !== null);
                    g(A)
                }
            } catch (x) {
                console.error("Error fetching recent games:", x)
            } finally {
                f(!1)
            }
        })()
    }, [n == null ? void 0 : n.userId, t]), t != null && t.length ? e.jsxs("div", {
        className: "search-sidebar",
        "data-testid": "search-sidebar",
        children: [e.jsx("div", {
            className: "search-sidebar-header",
            children: e.jsxs("div", {
                className: "search-bar-wrapper",
                children: [e.jsx("div", {
                    className: "search-bar-icon",
                    children: e.jsxs("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [e.jsx("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }), e.jsx("path", {
                            d: "m21 21-4.35-4.35"
                        })]
                    })
                }), e.jsx("input", {
                    type: "text",
                    className: "search-bar-input",
                    placeholder: "What are you playing today?",
                    value: a,
                    onChange: u => i(u.target.value),
                    "data-testid": "search-input"
                }), a && e.jsx("button", {
                    className: "search-bar-clear",
                    onClick: () => i(""),
                    "aria-label": "Clear search",
                    "data-testid": "search-clear-button",
                    children: e.jsxs("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [e.jsx("line", {
                            x1: "18",
                            y1: "6",
                            x2: "6",
                            y2: "18"
                        }), e.jsx("line", {
                            x1: "6",
                            y1: "6",
                            x2: "18",
                            y2: "18"
                        })]
                    })
                })]
            })
        }), e.jsx("div", {
            className: "category-filters",
            children: e.jsx("div", {
                className: "category-filters-scroll",
                children: s.map(u => e.jsx("button", {
                    className: `category-filter-btn ${o===u.category_slug?"active":""}`,
                    onClick: () => h(u.category_slug),
                    "data-testid": `category-filter-${u.category_slug}`,
                    children: w(u.category_slug)
                }, u.category_slug))
            })
        }), $.length > 0 && e.jsx("div", {
            className: "category-filters",
            children: e.jsx("div", {
                className: "category-filters-scroll",
                children: $.map(u => e.jsx("button", {
                    className: `category-filter-btn ${c===u?"active":""}`,
                    onClick: () => m(u),
                    children: u
                }, u))
            })
        }), M ? e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "search-results-info",
                children: [e.jsxs("span", {
                    className: "results-count",
                    children: [P.length, " ", S() ? "games" : "flashcards"]
                }), e.jsx("button", {
                    className: "clear-filters-btn",
                    onClick: () => {
                        i(""), h(""), m("")
                    },
                    children: "Clear filters"
                })]
            }), e.jsx("div", {
                className: "search-apps-grid",
                "data-testid": "search-results-grid",
                children: P.length > 0 ? P.map(u => e.jsx(Q, {
                    title: u.title,
                    icon: u.icon,
                    id: String(u.id),
                    size: "1x1",
                    videoUrl: u.video_link
                }, u.id)) : e.jsxs("div", {
                    className: "no-results",
                    children: [e.jsxs("svg", {
                        width: "48",
                        height: "48",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [e.jsx("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }), e.jsx("path", {
                            d: "m21 21-4.35-4.35"
                        }), e.jsx("line", {
                            x1: "11",
                            y1: "8",
                            x2: "11",
                            y2: "14"
                        }), e.jsx("line", {
                            x1: "8",
                            y1: "11",
                            x2: "14",
                            y2: "11"
                        })]
                    }), e.jsx("p", {
                        children: "No games found"
                    }), e.jsx("span", {
                        children: "Try adjusting your search or filters"
                    })]
                })
            })]
        }) : e.jsxs(e.Fragment, {
            children: [r.length > 0 && e.jsx(D, {
                qualifier: "Top",
                apps: r,
                loading: p
            }), l.length > 0 && e.jsx(D, {
                qualifier: "Recent",
                apps: l,
                loading: k
            })]
        })]
    }) : e.jsx("div", {
        className: "search-sidebar",
        children: e.jsx("div", {
            className: "search-sidebar-loading",
            children: "Loading apps..."
        })
    })
}
const ge = ({
        size: t = "1x1"
    }) => {
        const s = E(),
            [n, a] = b.useState(!1),
            [i, o] = b.useState("Menu"),
            [h, c] = b.useState(null),
            m = () => {
                s("/")
            },
            r = () => {
                o("Search"), a(!0), c(e.jsx(le, {}))
            },
            d = () => {
                o("Account"), a(!0), c(e.jsx(oe, {}))
            },
            l = () => {
                a(!1)
            },
            g = t === "2x1";
        return e.jsxs(e.Fragment, {
            children: [e.jsx("li", {
                className: `pill-grid-item col-span-1 row-span-1 ${g?"md:col-span-2 md:row-span-1":""}`,
                children: e.jsxs("div", {
                    className: "pill-container",
                    children: [e.jsx("div", {
                        className: "pill-section pill-section--logo",
                        onClick: m,
                        role: "button",
                        tabIndex: 0,
                        onKeyPress: p => {
                            (p.key === "Enter" || p.key === " ") && m()
                        },
                        "aria-label": "Home",
                        children: e.jsxs("div", {
                            className: "pill-logo",
                            children: [e.jsx("img", {
                                src: "/imgs/freezenova-logo.png",
                                alt: "FreezeNova",
                                className: "pill-logo-goose",
                                "aria-hidden": "true"
                            }), e.jsx("img", {
                                src: "/imgs/freezenova-logo.png",
                                alt: "FreezeNova",
                                className: "pill-wordmark"
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "pill-bottom-row",
                        children: [e.jsx("div", {
                            className: "pill-section pill-section--account",
                            onClick: d,
                            role: "button",
                            tabIndex: 0,
                            onKeyPress: p => {
                                (p.key === "Enter" || p.key === " ") && d()
                            },
                            "aria-label": "Account",
                            children: e.jsxs("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [e.jsx("path", {
                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                }), e.jsx("circle", {
                                    cx: "12",
                                    cy: "7",
                                    r: "4"
                                })]
                            })
                        }), e.jsx("div", {
                            className: "pill-section pill-section--search",
                            onClick: r,
                            role: "button",
                            tabIndex: 0,
                            onKeyPress: p => {
                                (p.key === "Enter" || p.key === " ") && r()
                            },
                            "aria-label": "Search",
                            "data-testid": "search-icon-button",
                            children: e.jsxs("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [e.jsx("circle", {
                                    cx: "11",
                                    cy: "11",
                                    r: "8"
                                }), e.jsx("path", {
                                    d: "m21 21-4.35-4.35"
                                })]
                            })
                        })]
                    })]
                })
            }), e.jsx(ne, {
                isOpen: n,
                onClose: l,
                title: i,
                children: h
            })]
        })
    },
    pe = ({
        children: t
    }) => e.jsx("div", {
        className: "relative bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300",
        children: e.jsx("div", {
            className: "pt-6 px-4 pb-6",
            children: e.jsx("ul", {
                className: "game-grid",
                children: t
            })
        })
    });

function I() {
    if (typeof window > "u") return "";
    const t = window.location.protocol,
        s = window.location.hostname,
        n = window.location.port ? `:${window.location.port}` : "";
    return `${t}//${s}${n}`
}

function F(t) {
    return `/${t.toLowerCase()}`
}

function _(t, s, n) {
    if (!s || s.length === 0) return [];
    let a;
    return t ? a = s.filter(i => {
        var o;
        return (o = i.categories) == null ? void 0 : o.toLowerCase().includes(t.toLowerCase())
    }) : a = [...s], a.sort((i, o) => (o.upvotes || 0) - (i.upvotes || 0)).slice(0, n)
}

function fe(t, s, n) {
    if (s !== void 0) {
        const a = n.filter(r => {
                var d, l;
                return ((d = r.devices) == null ? void 0 : d.includes("Mobile")) || ((l = r.devices) == null ? void 0 : l.includes("Tablet"))
            }),
            i = _(s, n, 5),
            o = _(s, a, 5),
            h = N(s),
            c = i.map((r, d) => `${d+1}. [${w(r.title)}](${C(r.title)})`).join(`
`),
            m = o.map((r, d) => `${d+1}. [${w(r.title)}](${C(r.title)})`).join(`
`);
        return `### What are the best free ${h} Games online?

${c}

### What are the most popular ${h} Games for the mobile phone or tablet?

${m}`
    } else if (t) {
        const a = w(t.title),
            i = H(!1);
        return `### How can I play ${a} for free?

You can play ${a} for free on ${i}. No downloads or registration required!

### Can I play ${a} on mobile devices and desktop?

${a} can be played on your computer and mobile devices like phones and tablets. Works on all modern browsers!`
    } else return console.error("No app or category name provided for generateFaq"), ""
}

function ce() {
    return typeof window > "u" ? "" : window.location.href
}

function U(t, s) {
    const n = I();
    return {
        "@type": "WebSite",
        "@id": `${n}/#website`,
        name: t,
        url: n,
        description: s || "Play free online games - unblocked games at school! No downloads, no login required. Start playing now!",
        inLanguage: "en"
    }
}

function xe(t, s, n, a = 20) {
    const i = I(),
        o = ce(),
        h = _(void 0, t, a);
    return {
        "@context": "https://schema.org",
        "@graph": [{
            "@type": "WebPage",
            "@id": `${o}#WebPage`,
            url: o,
            name: s,
            description: n,
            inLanguage: "en",
            image: h.slice(0, 3).filter(c => c.icon).map(c => ({
                "@type": "ImageObject",
                url: c.icon,
                width: "500",
                height: "500"
            })),
            mainEntity: {
                "@type": "ItemList",
                name: "Games",
                numberOfItems: Math.min(h.length, a),
                itemListElement: h.slice(0, a).map((c, m) => ({
                    "@type": "ListItem",
                    position: m + 1,
                    name: w(c.title),
                    url: `${i}${C(c.title)}`
                }))
            },
            isPartOf: U(s.split(" - ")[0], n)
        }]
    }
}

function K(t) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: t.map((s, n) => ({
            "@type": "ListItem",
            position: n + 1,
            item: {
                "@type": "Thing",
                "@id": s.url,
                name: s.name
            }
        }))
    }
}

function Y(t, s, n, a) {
    const i = [];
    if (s !== void 0) {
        const o = n.filter(d => {
                var l, g;
                return ((l = d.devices) == null ? void 0 : l.includes("Mobile")) || ((g = d.devices) == null ? void 0 : g.includes("Tablet"))
            }),
            h = _(s, n, 5),
            c = N(s),
            m = h.map((d, l) => `${l+1}. ${w(d.title)}`).join(", "),
            r = o.map((d, l) => `${l+1}. ${w(d.title)}`).join(", ");
        i.push({
            "@type": "Question",
            name: `What are the best free ${c} Games online?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: `The best free ${c} games online are: ${m}. All of these games can be played for free on our website with no downloads required.`
            }
        }), i.push({
            "@type": "Question",
            name: `What are the most popular ${c} Games for the mobile phone or tablet?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: `The most popular ${c} games for mobile phones and tablets are: ${r}. These games work perfectly on all devices including phones, tablets, and desktop computers.`
            }
        })
    } else if (t) {
        const o = w(t.title),
            h = H(!1);
        i.push({
            "@type": "Question",
            name: `How can I play ${o} for free?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: `You can play ${o} for free on ${h}. No downloads or registration required! Simply visit our website and start playing instantly.`
            }
        }), i.push({
            "@type": "Question",
            name: `Can I play ${o} on mobile devices and desktop?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: `Yes, ${o} can be played on your computer and mobile devices like phones and tablets. Works on all modern browsers including Chrome, Firefox, Safari, and Edge.`
            }
        })
    } else return null;
    return {
        "@type": "FAQPage",
        "@id": s ? `${a}${F(s)}#FAQPage` : `${a}${C(t.title)}#FAQPage`,
        mainEntity: i
    }
}

function be(t, s, n, a) {
    var p;
    if (!n) return console.error("Category slug is required for game page schema"), {
        "@context": "https://schema.org",
        "@graph": []
    };
    const i = I(),
        o = `${i}${C(t.title)}`,
        h = w(t.title),
        c = `${h} - Play Online for Free! | ${s}`,
        m = t.desc || `Play ${h} on ${s}! Free online game with no downloads. Start playing now!`,
        r = N(n),
        d = [{
            name: s,
            url: i
        }, {
            name: r,
            url: `${i}${F(n)}`
        }, {
            name: h,
            url: o
        }],
        l = [{
            "@type": "ItemPage",
            "@id": `${o}#ItemPage`,
            url: o,
            name: c,
            description: m,
            inLanguage: "en",
            breadcrumb: K(d),
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: t.icon,
                thumbnailUrl: t.icon,
                image: t.icon,
                contentUrl: t.icon,
                width: "500",
                height: "500"
            },
            image: {
                "@type": "ImageObject",
                url: t.icon,
                thumbnailUrl: t.icon,
                image: t.icon,
                contentUrl: t.icon,
                width: "500",
                height: "500"
            },
            mainEntity: {
                "@type": ["VideoGame", "WebApplication"],
                name: h,
                description: m,
                url: o,
                image: {
                    "@type": "ImageObject",
                    url: t.icon,
                    thumbnailUrl: t.icon,
                    image: t.icon,
                    contentUrl: t.icon,
                    width: "500",
                    height: "500"
                },
                operatingSystem: "Web Browser",
                gamePlatform: s,
                availableOnDevice: ["Mobile", "Tablet", "Desktop"],
                genre: ((p = t.categories) == null ? void 0 : p.split("|").map(j => j.trim())) || [],
                ...t.upvotes && t.downvotes ? {
                    aggregateRating: {
                        "@type": "AggregateRating",
                        worstRating: 1,
                        bestRating: 5,
                        ratingValue: R(t).rating,
                        ratingCount: R(t).totalVotes
                    }
                } : {},
                offers: {
                    "@type": "Offer",
                    price: 0,
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock"
                },
                screenshot: {
                    "@type": "ImageObject",
                    url: t.icon,
                    thumbnailUrl: t.icon,
                    image: t.icon,
                    contentUrl: t.icon,
                    width: "500",
                    height: "500"
                },
                potentialAction: {
                    "@type": "PlayAction",
                    target: o,
                    name: h
                }
            },
            isPartOf: U(s, `${s} is a free online games platform. Play unblocked games at school!`)
        }],
        g = Y(t, void 0, a, i);
    return g && l.push(g), {
        "@context": "https://schema.org",
        "@graph": l
    }
}

function je(t, s, n, a = 5) {
    const i = I(),
        o = `${i}${F(t)}`,
        h = N(t),
        c = `${h} Games - Play Free Online | ${n}`,
        m = `Play the best ${h.toLowerCase()} games online for free at ${n}! No downloads, instant play.`,
        r = [{
            "@type": "CollectionPage",
            "@id": `${o}#CollectionPage`,
            url: o,
            name: c,
            description: m,
            inLanguage: "en",
            breadcrumb: K([{
                name: n,
                url: i
            }, {
                name: h,
                url: o
            }]),
            mainEntity: {
                "@type": "ItemList",
                name: `${h} Games`,
                numberOfItems: Math.min(s.length, a),
                itemListElement: s.slice(0, a).map((l, g) => ({
                    "@type": "ListItem",
                    position: g + 1,
                    item: {
                        "@type": "VideoGame",
                        name: w(l.title),
                        url: `${i}${C(l.title)}`,
                        image: l.icon
                    }
                }))
            },
            isPartOf: U(n, m)
        }],
        d = Y(void 0, t, s, i);
    return d && r.push(d), {
        "@context": "https://schema.org",
        "@graph": r
    }
}

function ye({
    app: t,
    category: s,
    limit: n = 10
}) {
    const a = q(),
        i = V(),
        o = E();

    function h(r) {
        return [...i].filter(d => r.includes(d.category_slug))
    }
    const c = b.useMemo(() => {
            if (!a || a.length === 0) return [];
            let r = [];
            if (t) {
                const l = t.categories ? t.categories.split(" ").filter(g => g.trim() !== "") : [];
                r = h(l)
            } else if (s) {
                const l = s.toUpperCase(),
                    g = a.filter(j => {
                        var f;
                        return (j.categories ? (f = j.categories.split(" ")) == null ? void 0 : f.map($ => $.trim().toUpperCase()) : []).includes(l)
                    }),
                    p = new Set;
                g.forEach(j => {
                    (j.categories ? j.categories.split(" ").filter(f => f.trim() !== "") : []).forEach(f => {
                        f.toUpperCase() !== l && p.add(f)
                    })
                }), r = h(Array.from(p))
            } else r = i;
            return r.map(l => {
                const g = a.filter(p => (p.categories ? p.categories.split(" ").map(k => k.trim()) : []).includes(l.category_slug)).length;
                return { ...l,
                    count: g
                }
            }).sort((l, g) => g.count - l.count).slice(0, n)
        }, [a, t, s, n, i]),
        m = r => {
            o(O(r))
        };
    return !a || a.length === 0 || !i || i.length === 0 || c.length === 0 ? null : e.jsx(e.Fragment, {
        children: c == null ? void 0 : c.map(r => {
            var d;
            return e.jsx(z, {
                className: "related-category-card col-span-2 row-span-1",
                to: O(r.category_slug),
                role: "button",
                tabIndex: 0,
                "data-testid": `related-category-${r.category_slug}`,
                onKeyPress: l => {
                    (l.key === "Enter" || l.key === " ") && m(r.category_slug)
                },
                children: e.jsxs("div", {
                    className: "related-category-container",
                    children: [r.icon_url && e.jsx("div", {
                        className: "related-category-icon",
                        children: r.icon_url ? e.jsx("img", {
                            src: r.icon_url,
                            alt: N(r.category_slug) || "",
                            className: "related-category-icon-image"
                        }) : null
                    }), e.jsx("div", {
                        className: "related-category-content",
                        children: e.jsx("h3", {
                            className: "related-category-name",
                            children: `${(d=N(r.category_slug))==null?void 0:d.toUpperCase()} ${S()?"GAMES":"FLASHCARDS"}`
                        })
                    })]
                })
            }, r.category_slug)
        })
    })
}
export {
    Q as A, pe as G, ge as P, ye as R, je as a, fe as b, be as c, me as d, xe as g, V as u
};