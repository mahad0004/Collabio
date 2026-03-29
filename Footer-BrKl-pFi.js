import {
    d as o,
    r as d,
    j as s,
    L as e,
    g as c,
    i as r,
    e as h,
    f as m
} from "./index-DpApWwGv.js";

function p() {
    const t = new Date().getFullYear(),
        i = o(),
        n = i.pathname.includes("/class/");
    return d.useEffect(() => {
        if (!n) return;
        window.disqus_config = function() {
            window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? (this.page.url = "https://duckmath.org" + i.pathname, this.page.identifier = "dev-" + i.pathname.replace(/\W+/g, "-")) : (this.page.url = window.location.href, this.page.identifier = i.pathname.replace(/\W+/g, "-"))
        };
        const l = document;
        if (l.getElementById("disqus-script")) window.DISQUS && window.DISQUS.reset({
            reload: !0,
            config: window.disqus_config
        });
        else {
            const a = l.createElement("script");
            a.src = "https://duckmath.disqus.com/embed.js", a.id = "disqus-script", a.setAttribute("data-timestamp", +new Date), (l.head || l.body).appendChild(a)
        }
        return () => {
            const a = document.getElementById("disqus_thread");
            a && (a.innerHTML = "")
        }
    }, [i.pathname, n]), s.jsxs("footer", {
        className: "ducky-footer",
        children: [n && s.jsx("div", {
            className: "disqus-wrapper",
            children: s.jsx("div", {
                id: "disqus_thread"
            })
        }), s.jsxs("div", {
            className: "footer-container",
            children: [s.jsxs("div", {
                className: "footer-content",
                children: [s.jsxs("div", {
                    className: "footer-section footer-brand-section",
                    children: [s.jsxs("div", {
                        className: "brand-header",
                        children: [s.jsx(e, {
                            to: "/",
                            children: s.jsx("img", {
                                src: "/imgs/freezenova-mascot.webp",
                                alt: "FreezeNova",
                                className: "footer-logo"
                            })
                        }), s.jsxs("div", {
                            className: "brand-text",
                            children: [s.jsx(e, {
                                to: "/",
                                children: s.jsx("h1", {
                                    className: "brand-title",
                                    children: c(!1)
                                })
                            }), s.jsx("p", {
                                className: "brand-subtitle",
                                children: r() ? "Free Unblocked Games Online" : "Level Up Your Math Skills"
                            })]
                        })]
                    }), s.jsx("p", {
                        className: "brand-description",
                        children: r() ? `${c(!0)} hosts 250+ browser games, updates daily, and features leaderboards, coins, a seasonal battlepass, and multiple integrations so you can play from the school chromebook.` : `Master math through fun problems and challenges. Compete, learn,
              and earn rewards while becoming a math champion! 🦆✨`
                    }), s.jsxs("div", {
                        className: "social-links",
                        children: [s.jsx("a", {
                            href: "https://www.tiktok.com/@freezenova",
                            className: "social-btn",
                            "aria-label": "TikTok",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: s.jsx("img", {
                                src: "/imgs/black_social_icons/tiktok.svg",
                                alt: "TikTok"
                            })
                        }), s.jsx("a", {
                            href: "/join-chad.html",
                            className: "social-btn",
                            "aria-label": "The Duck Pond",
                            target: "_blank",
                            children: s.jsx("img", {
                                src: "/imgs/black_social_icons/duckpond.svg",
                                alt: "Duck Pond"
                            })
                        }), s.jsx("a", {
                            href: "https://www.instagram.com/freezenova.games/reels/",
                            className: "social-btn",
                            "aria-label": "The Duck Pond",
                            target: "_blank",
                            children: s.jsx("img", {
                                src: "/imgs/black_social_icons/instagram.svg",
                                alt: "Instagram"
                            })
                        }), s.jsx("a", {
                            href: "https://www.youtube.com/@freezenova",
                            className: "social-btn",
                            "aria-label": "YouTube",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: s.jsx("img", {
                                src: "/imgs/black_social_icons/youtube.svg",
                                alt: "YouTube"
                            })
                        }), s.jsx("a", {
                            href: "https://www.linkedin.com/company/freezenova",
                            className: "social-btn",
                            "aria-label": "LinkedIn",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: s.jsx("img", {
                                src: "/imgs/black_social_icons/linkedin.svg",
                                alt: "LinkedIn"
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "footer-section",
                    children: [s.jsx("h4", {
                        className: "section-title",
                        children: "Pages"
                    }), s.jsxs("ul", {
                        className: "footer-links",
                        children: [s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "🏠"
                                }), " Home"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/about",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "ℹ️"
                                }), " About"]
                            })
                        }), !h() && !m() && s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/blog",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "📝"
                                }), " Blog"]
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "footer-section",
                    children: [s.jsx("h4", {
                        className: "section-title",
                        children: "Features"
                    }), s.jsxs("ul", {
                        className: "footer-links",
                        children: [s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/leaderboard",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "🏆"
                                }), " Leaderboard"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/streak",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "🔥"
                                }), " Streak"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/profile",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "👤"
                                }), " Profile"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/settings",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "⚙️"
                                }), " Settings"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/upload",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "📤"
                                }), " Upload"]
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "footer-section",
                    children: [s.jsx("h4", {
                        className: "section-title",
                        children: "Support"
                    }), s.jsxs("ul", {
                        className: "footer-links",
                        children: [s.jsx("li", {
                            children: s.jsxs("a", {
                                href: "mailto:contact@freezenova.com",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "📧"
                                }), " Contact Us"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs("a", {
                                href: "/join-chad.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "💬"
                                }), " The Duck Pond"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/links",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "🔗"
                                }), " Links"]
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "footer-section",
                    children: [s.jsx("h4", {
                        className: "section-title",
                        children: "Legal"
                    }), s.jsxs("ul", {
                        className: "footer-links",
                        children: [s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/terms",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "📜"
                                }), " Terms of Service"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/privacy",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "🔒"
                                }), " Privacy Policy"]
                            })
                        }), s.jsx("li", {
                            children: s.jsxs(e, {
                                to: "/takedown",
                                children: [s.jsx("span", {
                                    className: "link-icon",
                                    children: "⚖️"
                                }), " DMCA Takedown"]
                            })
                        })]
                    })]
                })]
            }), s.jsxs("div", {
                className: "footer-bottom",
                children: [s.jsx("div", {
                    className: "footer-divider"
                }), s.jsxs("div", {
                    className: "footer-bottom-content",
                    children: [s.jsxs("p", {
                        className: "copyright",
                        children: ["© ", t, " ", c(!1), ". All rights reserved."]
                    }), s.jsx("p", {
                        className: "production-credit"
                    }), s.jsx("a", {
                        href: "mailto:contact@freezenova.com",
                        className: "contact-email",
                        children: "contact@freezenova.com"
                    })]
                })]
            })]
        }), s.jsx("div", {
            className: "crystal-decoration crystal-1"
        }), s.jsx("div", {
            className: "crystal-decoration crystal-2"
        }), s.jsx("div", {
            className: "crystal-decoration crystal-3"
        })]
    })
}
export {
    p as
    default
};