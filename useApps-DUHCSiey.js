import {
    a as i,
    aA as s,
    f as u,
    r as a
} from "./index-DpApWwGv.js";

function o() {
    const r = i(s),
        t = u();
    return a.useMemo(() => r ? r.filter(e => e.limit_platform ? e.limit_platform.includes("maddox") ? !1 : e.limit_platform.includes("freezenova") ? t : e.limit_platform.includes("duckmath") ? !t : !0 : !0) : [], [r, t])
}
export {
    o as u
};