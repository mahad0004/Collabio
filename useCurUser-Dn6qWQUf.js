import {
    a as o,
    p as S,
    o as b,
    U as f
} from "./index-DpApWwGv.js";

function g() {
    const t = o(S),
        e = o(b),
        n = t == null ? void 0 : t.time_spent,
        a = t == null ? void 0 : t.apps_played,
        c = e == null ? void 0 : e.current_streak,
        s = e == null ? void 0 : e.longest_streak,
        r = t == null ? void 0 : t.user_id,
        _ = t == null ? void 0 : t.created_at,
        d = t == null ? void 0 : t.icon,
        i = t == null ? void 0 : t.username,
        p = t == null ? void 0 : t.user_about,
        m = t == null ? void 0 : t.badges,
        l = t == null ? void 0 : t.where_from;
    return new f({
        userId: r,
        icon: d,
        username: i,
        createdAt: _,
        timeSpent: n,
        appsPlayed: a,
        currentStreak: c,
        highestStreak: s,
        userAbout: p,
        badges: m,
        whereFrom: l
    })
}
export {
    g as u
};