import {
    r as v,
    a as G,
    b as D,
    j as s,
    t as o,
    i as w,
    g as u,
    f,
    e as P
} from "./index-DpApWwGv.js";
import {
    g as $,
    G as C,
    P as j,
    A as W,
    R as q
} from "./RelatedCategories-CEsWDrfB.js";
import {
    B as H
} from "./BottomMarkdown-RFkoojV3.js";
import {
    L as I
} from "./LoadMainGrid-DwgFxON2.js";
import {
    S as T
} from "./SEOHelmet-KbSahS4E.js";
import {
    u as L
} from "./useApps-DUHCSiey.js";
import "./useCurUser-Dn6qWQUf.js";
import "./Icon-BDLoYOwk.js";

function O() {
    const [t, h] = v.useState(!1);
    return v.useEffect(() => {
        const r = () => {
            h(window.innerWidth < 800)
        };
        return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
    }, []), t
}
const V = () => {
    var p;
    let t = L();
    const h = (p = G(D)) == null ? void 0 : p.Apps,
        r = O();
    if (t = t == null ? void 0 : t.filter(a => a.is_listed !== !1), h || !(t != null && t.length)) return s.jsx(I, {});
    const b = (a => {
            if (!a || a.length === 0) return [];
            const c = [...a.map(e => ({ ...e,
                    upvotes: (e.upvotes || 0) + (e.is_featured ? 1e5 : 0) + (e.game_score || 0)
                }))].sort((e, S) => (S.upvotes || 0) - (e.upvotes || 0)),
                x = c.slice(0, 3).map(e => ({ ...e,
                    size: r ? "2x2" : "3x3"
                })),
                A = c.slice(3, 9).map(e => ({ ...e,
                    size: r ? "1x1" : "2x2"
                })),
                n = [...x, ...A],
                m = c.slice(9).map(e => ({ ...e,
                    size: "1x1"
                })),
                y = Math.min(100, c.length),
                d = [],
                g = new Set;
            g.add(0);
            const M = Math.floor((y - 1) / (n.length - 1));
            for (let e = 1; e < n.length; e++) g.add(e * M);
            let i = 0,
                l = 0;
            for (let e = 0; e < y; e++) g.has(e) && i < n.length ? (d.push(n[i]), i++) : l < m.length && (d.push(m[l]), l++);
            for (; i < n.length;) d.push(n[i]), i++;
            for (; l < m.length;) d.push(m[l]), l++;
            return d
        })(t || []),
        k = `##### About DuckMath
  
  # Unblocked Games

DuckMath hosts a curated library of actually working unblocked games in school with fast loads and minimal friction. Play instantly with no downloads or logins. Join 150,000 daily active awesome users today.

### Featured games you can play here

- [Steal A Brainrot](${o("steal-brainrot-heist")})
- [Run 3](${o("run-3-freezenova")})
- [Backflip Challenge](${o("backflip-challenge")})
- [99 Nights Forest Survival](${o("99-nights-forest-survival")})
- [Highway Traffic](${o("highway-traffic")})
- [Stickman Gta City](${o("stickman-gta-city")})
- [Drift King](${o("drift-king")})

Browse the [New](/new) page or explore the homepage to discover more.

### Popular categories

- **[Roblox](/roblox)**
- **[Multiplayer](/multiplayer)**
- **[2D](/2d)**
- **[Flash](/flash)**
- **[Horror](/horror)**
- **[Platformer](/platformer)**
- **[Puzzle](/puzzle)**
- **[Fighting](/fighting)**
- **[Sports](/sports)**
- **[Driving](/driving)**

### What is DuckMath?

DuckMath is a simple, fast, student run unblocked games website. We prioritize stable, lightweight embeds, helpful controls info, and quick links so you can get into a game and have fun. Our goal is to make it easy for students to find and play unblocked games at school.`,
        z = `##### About DuckMath.Cloud
  
# Unblocked Games on the Cloud

DuckMath.Cloud is the cloud-powered home of fun, fast, and reliable unblocked games for school. Jump straight into gameplay with quick loads, zero accounts, and smooth performance anywhere. Thousands of students play on DuckMath.Cloud every day.

### Popular games on DuckMath.Cloud

- [Steal A Brainrot Heist](${o("steal-brainrot-heist")})
- [99 Nights In The Forest](${o("99-nights-in-the-forest")})
- [Duckcraft](${o("eagle-duckcraft")})
- [Ragdoll Archers](${o("ragdoll-archers")})
- [Grow A Garden](${o("grow-a-garden")})
- [Race Survival Arena King](${o("race-survival-arena-king")})

Check out the [New](/new) page or scroll the homepage to find the latest and most played games.

### Game categories players enjoy

- **[Roblox](/roblox)**
- **[Multiplayer](/multiplayer)**
- **[Horror](/horror)**
- **[Puzzle](/puzzle)**
- **[Platformer](/platformer)**
- **[Sports](/sports)**
- **[Driving](/driving)**

### What is DuckMath.Cloud?

DuckMath.Cloud is the cloud version of DuckMath, built for speed, accessibility, and fun. It's a community unblocked games site focused on working games, clean layouts, and instant play. Whether you want a quick break or a full session, DuckMath.Cloud makes unblocked gaming simple and enjoyable.`,
        F = `##### About FreezeNova

![FreezeNova](/imgs/fn/freezenova-main-banner.webp)

# What is FreezeNova?

FreezeNova SRL is an indie game studio dedicated to providing top-notch gaming experiences. We believe that everyone should have access to high-quality entertainment for free. Our mission drives us to continually develop and publish fun and engaging games for Android, iOS, Chromebooks, and Windows.

### Featured games on FreezeNova

- [Steal Brainrot Heist](${o("steal-brainrot-heist")})
- [Ragdoll Archers](${o("ragdoll-archers")})
- [Grow A Garden](${o("grow-a-garden")})
- [99 Nights In The Forest](${o("99-nights-in-the-forest")})
- [Race Survival Arena King](${o("race-survival-arena-king")})
- [Duckcraft](${o("eagle-duckcraft")})

Browse the [New](/new) page or explore the homepage to discover more.

### Popular categories

- **[Driving](/driving)**
- **[Multiplayer](/multiplayer)**
- **[Puzzle](/puzzle)**
- **[Platformer](/platformer)**
- **[Horror](/horror)**
- **[Fighting](/fighting)**
- **[Sports](/sports)**

---

## Diverse Game Portfolio

One of FreezeNova's most popular games is **Masked Forces**, a browser-based multiplayer action game. Upon its initial release in 2016, Masked Forces captivated millions of online players and was published by many gaming websites and stores, including **Steam** and **Xbox**. The game's popularity led to the creation of a successful series of sequels, further solidifying its place in the online gaming trends.

While FreezeNova first gained publicity with a multiplayer action game, we've continued to create and offer fun games in diverse genres and operating systems.

---

![FreezeNova.com](/imgs/fn/freezenova-pixel-banner.webp)

## FreezeNova.com: Premium Online Games

As a result of persistent inquiries and the support of our precious community, we happened to create a gaming website that offers only premium online games: **FreezeNova.com**. Here, you can play the best free online games without any signup processes or downloading. Load the game in seconds and play it right on your browser.

---

## Why Choose FreezeNova?

If you're wondering why FreezeNova.com is a unique platform to play free online games, here are the reasons:

### Handpicked Premium Games

Web gamers' biggest complaint was the difficulty of finding high-quality games among a sea of poor-quality titles. Most platforms offer thousands of games, but very few are truly worth playing, leading to wasted time and effort. As we shaped FreezeNova.com based on feedback from our community, we decided to **prioritize quality over quantity**. To ensure our games are up-to-date, smooth, and fun, we diligently handpick and test each one on various devices. We promise our users that you won't waste a single click on FreezeNova.com.

### Detailed Guidelines

Most gamers at least once found themselves desperately seeking tips, tricks, and cheat codes in forums. FreezeNova.com provides comprehensive information about games, how-to-play guides, and even stories on the page. This saves our players' time, helping them grasp the basics quickly with easy-to-understand but detailed game descriptions. If you're curious, you may even learn backstage stories from the developers, as well as fun facts about online games. Just scroll down on the game page to access a well-crafted guide on that game.

### Regular Updates

FreezeNova.com is a living platform with continuous growth and updates. We regularly update our content and games each week. We recommend you bookmark this site so you can play fresh and fun online games that your gaming buddies haven't discovered yet.

### Seamless Gaming

Last but not least, regarding browser games, a platform's most important strength is **seamless gaming**. FreezeNova.com uses the latest technology to offer fast-loading, hiccup-free, delay-free online games with steady frame rates. To further enhance this, we provide technical support to our users to maintain a hassle-free play session. Leave a comment about your problem, and we'll do our best to solve the issue for you. Please do not hesitate to reach out via e-mail if you have any problems or inquiries.

### Where to Start?

If you don't know where to start, here is a favorite game for each taste:

- **Creative Games** — If you need a peaceful game where you let your imagination run wild, your next stop definitely should be ClassiCube.
- **Action Games** — In case you're looking for fast-paced adventures, ArmedForces.io offers exciting challenges with its realistic 3D environment and many online players.
- **Casual Games** — Not an avid gamer but want to have some fun time and relax? Why don't you go on a bakery journey where you merge cakes and explore new recipes along the way?
- **Simulator Games** — From drifting to flying a plane or racing in "Highway Traffic," we have the best simulator games to immerse you.
- **2 Player Games** — There are 2 players but only one device? We got you; play Football King with your friend and end the misery of playing in turns.

---

![FreezeNova The Mascot](/imgs/fn/freezenova-the-mascot-banner.webp)

## FreezeNova The Mascot

![FreezeNova Mascot](/imgs/freezenova-mascot.webp)

Ever wondered who's the coolest guy at our gaming studio? It's none other than **FreezeNova**, our mascot! He's not just cool because everything he touches turns into ice; he's an awesome friend who loves games just like you.

FreezeNova comes from a faraway planet where everything is about playing games! One day, his planet was in big trouble because of falling asteroids. FreezeNova had to win a big game to save it. And when he did, he got superpowers! Now, he can make anything turn into ice just by touching it, but sometimes he's a bit clumsy. Imagine you're sliding on an ice floor at the office because FreezeNova sneezed and froze the ground under you!

---

## Sneak Peek into Our Office

At our gaming studio, FreezeNova kicks off the morning with a prank: he turns our freshly brewed coffee into a solid ice block! (He thinks it's the funniest thing ever. Meanwhile, the rest of us spend the day grumpy without our morning drink. No coffee, yes coding headaches...)

He loves to help us think of new games, and he does this by making funny ice shapes that give us ideas. He's not great at testing games, though; he keeps freezing the computer screens and blames the developers for missing bugs!

---

## Learn Gaming from The Best

Yes, FreezeNova is quite a character, and if you want to meet with him, the mascot, you can do so right here on our website. You can chat with him in the comment section under each game. Got a question about a game level, or just want to say hi? Leave a comment, and FreezeNova might just respond with a cool tip or a fun fact!

So, every time you play one of our games, remember that you're not just having fun; you're also part of FreezeNova's big adventure!`,
        N = w() ? $(t, `${u(!1)} - Free Unblocked Games Online`, "Play hundreds of unblocked games free online! No downloads needed. Access your favorite games at school with our collection of unblocked games.", 20) : null;
    return s.jsxs("div", {
        children: [s.jsx(T, {
            seo: f() ? {
                title: "FreezeNova – Free Online Games ▶️",
                description: "Play the best free online games on FreezeNova! No downloads, no signups. Handpicked premium browser games for every taste. Play instantly on any device.",
                keywords: "free online games, browser games, play games online, FreezeNova, no download games"
            } : {
                title: `${u(!1)} Unblocked Games`,
                description: "Play hundreds of unblocked games free online! No downloads needed. Access your favorite games at school with our collection of unblocked games.",
                keywords: "unblocked games, free games, school games, online games, play games"
            },
            regular: f() ? {
                title: `${u(!1)} – Free Online Games ▶️`,
                description: `Play the best free online games on ${u(!1)}. Handpicked premium browser games, no downloads required.`,
                keywords: `free online games, browser games, ${u(!1)}, play games online`
            } : {
                title: `${u(!1)}`,
                description: "Browse our collection of study flashcard sets. Learn smarter with spaced repetition and interactive study tools.",
                keywords: "flashcards, study sets, learning, education, quizlet"
            },
            structuredData: N || void 0
        }), s.jsxs(C, {
            children: [s.jsx(j, {
                size: "1x1"
            }), b.map(a => s.jsx(W, {
                title: a.title,
                icon: a.icon,
                id: String(a.id),
                size: a.size,
                videoUrl: a.video_link
            }, a.id)), s.jsx(q, {})]
        }), w() && s.jsx("div", {
            className: "px-4 pb-8",
            children: s.jsx(H, {
                content: f() ? F : P() ? z : k
            })
        })]
    })
};
export {
    V as
    default
};