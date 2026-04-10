import { ref as C, watch as P, computed as T, onMounted as ve, nextTick as _e, unref as R, getCurrentScope as et, onScopeDispose as tt, getCurrentInstance as Ee, defineComponent as nt, watchEffect as ot, createElementBlock as b, openBlock as S, createElementVNode as z, withModifiers as x, renderSlot as _, Fragment as E, renderList as X, normalizeStyle as L, normalizeClass as I, createTextVNode as xe, toDisplayString as Pe, createCommentVNode as Ce } from "vue";
const st = (t) => {
  const o = C(0), s = C(0);
  let n;
  function u(p) {
    n = new ResizeObserver(([i]) => {
      const f = i?.contentRect;
      f && ([o.value, s.value] = [f.width, f.height]);
    }), n.observe(p);
  }
  return P(t, (p) => {
    if (p) {
      u(p);
      return;
    }
    n?.disconnect();
  }), {
    width: o,
    height: s
  };
}, te = function(t) {
  return `${t}`.trim().padStart(2, "0");
};
function g(t) {
  const o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || o === "[object Number]" || typeof t == "string" || o === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
function j(t, o) {
  return t instanceof Date ? new t.constructor(o) : new Date(o);
}
function rt(t, o) {
  const s = g(t);
  return isNaN(o) ? j(t, NaN) : (o && s.setDate(s.getDate() + o), s);
}
function Xe(t, o) {
  const s = +g(t);
  return j(t, s + o);
}
const it = 6048e5, at = 6e4, ut = 36e5;
function lt(t, o) {
  return Xe(t, o * ut);
}
let ct = {};
function he() {
  return ct;
}
function N(t, o) {
  const s = he(), n = o?.weekStartsOn ?? o?.locale?.options?.weekStartsOn ?? s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, u = g(t), p = u.getDay(), i = (p < n ? 7 : 0) + p - n;
  return u.setDate(u.getDate() - i), u.setHours(0, 0, 0, 0), u;
}
function pe(t) {
  const o = g(t);
  return o.setHours(0, 0, 0, 0), o;
}
function dt(t, o) {
  return Xe(t, o * at);
}
function pt(t, o) {
  const s = o * 7;
  return rt(t, s);
}
function ft(t, o) {
  const s = g(t.start), n = g(t.end);
  let u = +s > +n;
  const p = u ? +s : +n, i = u ? n : s;
  i.setHours(0, 0, 0, 0);
  let f = 1;
  const c = [];
  for (; +i <= p; )
    c.push(g(i)), i.setDate(i.getDate() + f), i.setHours(0, 0, 0, 0);
  return u ? c.reverse() : c;
}
function vt(t, o) {
  const s = g(t.start), n = g(t.end);
  let u = +s > +n;
  const p = u ? +s : +n;
  let i = u ? n : s;
  i.setMinutes(0, 0, 0);
  let f = 1;
  const c = [];
  for (; +i <= p; )
    c.push(g(i)), i = lt(i, f);
  return u ? c.reverse() : c;
}
function ht(t) {
  const o = g(t);
  return o.setSeconds(0, 0), o;
}
function $e(t, o) {
  const s = ht(g(t.start)), n = g(t.end);
  let u = +s > +n;
  const p = u ? +s : +n;
  let i = u ? n : s, f = 1;
  const c = [];
  for (; +i <= p; )
    c.push(g(i)), i = dt(i, f);
  return u ? c.reverse() : c;
}
function wt(t, o) {
  const s = g(t.start), n = g(t.end);
  let u = +s > +n;
  const p = u ? +s : +n, i = u ? n : s;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let f = 1;
  const c = [];
  for (; +i <= p; )
    c.push(g(i)), i.setMonth(i.getMonth() + f);
  return u ? c.reverse() : c;
}
function mt(t, o) {
  const s = g(t.start), n = g(t.end);
  let u = +s > +n;
  const p = N(u ? n : s, o), i = N(u ? s : n, o);
  p.setHours(15), i.setHours(15);
  const f = +i.getTime();
  let c = p, d = o?.step ?? 1;
  if (!d) return [];
  d < 0 && (d = -d, u = !u);
  const h = [];
  for (; +c <= f; )
    c.setHours(0), h.push(g(c)), c = pt(c, d), c.setHours(15);
  return u ? h.reverse() : h;
}
function yt(t) {
  const o = g(t);
  return o.setDate(1), o.setHours(0, 0, 0, 0), o;
}
function fe(t) {
  const o = g(t), s = j(t, 0);
  return s.setFullYear(o.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s;
}
function gt(t, o) {
  const s = g(t.start), n = g(t.end);
  let u = +s > +n;
  const p = u ? +s : +n, i = u ? n : s;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let f = 1;
  const c = [];
  for (; +i <= p; )
    c.push(g(i)), i.setFullYear(i.getFullYear() + f);
  return u ? c.reverse() : c;
}
function kt(t, o) {
  const s = g(t), n = s.getFullYear(), u = he(), p = o?.firstWeekContainsDate ?? o?.locale?.options?.firstWeekContainsDate ?? u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1, i = j(t, 0);
  i.setFullYear(n + 1, 0, p), i.setHours(0, 0, 0, 0);
  const f = N(i, o), c = j(t, 0);
  c.setFullYear(n, 0, p), c.setHours(0, 0, 0, 0);
  const d = N(c, o);
  return s.getTime() >= f.getTime() ? n + 1 : s.getTime() >= d.getTime() ? n : n - 1;
}
function Dt(t, o) {
  const s = he(), n = o?.firstWeekContainsDate ?? o?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, u = kt(t, o), p = j(t, 0);
  return p.setFullYear(u, 0, n), p.setHours(0, 0, 0, 0), N(p, o);
}
function Mt(t, o) {
  const s = g(t), n = +N(s, o) - +Dt(s, o);
  return Math.round(n / it) + 1;
}
const Z = {
  ms: 1,
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  days: 1e3 * 60 * 60 * 24,
  weeks: 1e3 * 60 * 60 * 24 * 7,
  months: 1e3 * 60 * 60 * 24 * 7 * 4,
  years: 1e3 * 60 * 60 * 24 * 7 * 4 * 12
}, We = (t) => Object.keys(Z).indexOf(t), bt = (t, o, s, n, u, p) => {
  const i = C(s.value), f = C(n.value), c = T(() => (u.value?.length ? u.value : [
    // #region default-scales
    {
      // every 100ms, 1 second, 2 seconds, 5 seconds or 10 seconds
      // NOTE: .1 seconds is used here instead of 100ms, so the first ms that would align with the gridline
      // (that provides the label) is shown when only the next occuring ms are within the viewport
      unit: "seconds",
      steps: [0.1, 1, 2, 5, 10]
    },
    {
      // every 15 seconds, 30 seconds, 1 minute, 2 minutes, etc.
      unit: "minutes",
      steps: [0.25, 0.5, 1, 2, 5, 10]
    },
    {
      // every 15 minutes, 30 minutes, 1 hour, 2 hours, etc.
      unit: "hours",
      steps: [0.25, 0.5, 1, 2, 4, 6, 12]
    },
    {
      // every day
      unit: "days",
      steps: [1]
    },
    {
      // every week
      unit: "weeks",
      steps: [1]
    },
    {
      // every month, every other month
      unit: "months",
      steps: [1, 2]
    },
    {
      // every year, 5 years, 10 years, etc.
      unit: "years",
      steps: [1, 5, 10, 25, 50, 100, 250, 500, 1e3]
    }
    // #endregion default-scales
  ]).toSorted((v, w) => We(v.unit) - We(w.unit)).flatMap((v) => v.steps.toSorted((w, k) => w - k).map((w) => ({ unit: v.unit, step: w }))));
  P(s, () => {
    i.value = s.value;
  }), P(n, () => {
    f.value = n.value;
  });
  const d = T(() => {
    let [v] = c.value;
    for (const [w, k] of c.value.entries()) {
      const D = i.value / (Z[k.unit] * (k.step ?? 1));
      if (D >= 1 && D <= f.value) {
        v = k;
        break;
      }
      if (D < 1) {
        v = c.value[w - 1] ?? k;
        break;
      }
      D >= 1 && w === c.value.length - 1 && (v = k);
    }
    return {
      unit: v.unit,
      step: v.step ?? 1
    };
  });
  function h(v) {
    switch (d.value.unit) {
      case "years":
        return v.getFullYear() % d.value.step === 0;
      case "months":
        return v.getMonth() % d.value.step === 0;
      case "weeks":
        return Mt(v, { weekStartsOn: p.value }) % d.value.step === 0;
      case "days":
        return v.getDate() % d.value.step === 0;
      case "hours":
        return v.getHours() % d.value.step === 0;
      case "minutes":
        return v.getMinutes() % d.value.step === 0;
      case "seconds":
        return v.getSeconds() % d.value.step === 0;
      case "ms":
        return v.getMilliseconds() % d.value.step === 0;
    }
  }
  const m = T(() => {
    const v = [], w = t.value, k = o.value;
    let D = [];
    switch (d.value.unit) {
      case "ms":
        D = Array.from({ length: k - w }, (O, V) => new Date(w + V));
        break;
      case "seconds":
        D = $e({ start: w, end: k }).flatMap((O) => {
          const V = [];
          for (let $ = 0; $ < 60; $++)
            V.push(new Date(O.valueOf() + $ * Z.seconds));
          return V;
        });
        break;
      case "minutes":
        D = $e({ start: w, end: k });
        break;
      case "hours":
        D = vt({ start: w, end: k });
        break;
      case "days":
        D = ft({ start: w, end: k });
        break;
      case "weeks":
        D = mt({ start: w, end: k }, { weekStartsOn: p.value });
        break;
      case "months":
        D = wt({ start: w, end: k });
        break;
      case "years":
        D = gt({ start: w, end: k });
        break;
    }
    for (const O of D)
      if (!(d.value.step > 1 && !h(O)) && (v.push(O.valueOf()), d.value.step < 1))
        for (let V = 1; V < 1 / d.value.step; V++)
          v.push(O.valueOf() + V * d.value.step * Z[d.value.unit]);
    return v;
  });
  return {
    scale: d,
    baseDividers: Z,
    visibleTimestamps: m
  };
};
function we(t) {
  return et() ? (tt(t), !0) : !1;
}
function ne(t) {
  return typeof t == "function" ? t() : R(t);
}
const St = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ot = (t) => t != null, Tt = Object.prototype.toString, Vt = (t) => Tt.call(t) === "[object Object]", xt = () => {
};
function Pt(t) {
  return Ee();
}
function Ct(t, o = !0, s) {
  Pt() ? ve(t, s) : o ? t() : _e(t);
}
const me = St ? window : void 0;
function B(t) {
  var o;
  const s = ne(t);
  return (o = s?.$el) != null ? o : s;
}
function Ie(...t) {
  let o, s, n, u;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([s, n, u] = t, o = me) : [o, s, n, u] = t, !o)
    return xt;
  Array.isArray(s) || (s = [s]), Array.isArray(n) || (n = [n]);
  const p = [], i = () => {
    p.forEach((h) => h()), p.length = 0;
  }, f = (h, m, v, w) => (h.addEventListener(m, v, w), () => h.removeEventListener(m, v, w)), c = P(
    () => [B(o), ne(u)],
    ([h, m]) => {
      if (i(), !h)
        return;
      const v = Vt(m) ? { ...m } : m;
      p.push(
        ...s.flatMap((w) => n.map((k) => f(h, w, k, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    c(), i();
  };
  return we(d), d;
}
function $t() {
  const t = C(!1), o = Ee();
  return o && ve(() => {
    t.value = !0;
  }, o), t;
}
function Le(t) {
  const o = $t();
  return T(() => (o.value, !!t()));
}
function Wt(t, o, s = {}) {
  const { window: n = me, ...u } = s;
  let p;
  const i = Le(() => n && "MutationObserver" in n), f = () => {
    p && (p.disconnect(), p = void 0);
  }, c = T(() => {
    const v = ne(t), w = (Array.isArray(v) ? v : [v]).map(B).filter(Ot);
    return new Set(w);
  }), d = P(
    () => c.value,
    (v) => {
      f(), i.value && v.size && (p = new MutationObserver(o), v.forEach((w) => p.observe(w, u)));
    },
    { immediate: !0, flush: "post" }
  ), h = () => p?.takeRecords(), m = () => {
    d(), f();
  };
  return we(m), {
    isSupported: i,
    stop: m,
    takeRecords: h
  };
}
function It(t, o, s = {}) {
  const { window: n = me, ...u } = s;
  let p;
  const i = Le(() => n && "ResizeObserver" in n), f = () => {
    p && (p.disconnect(), p = void 0);
  }, c = T(() => {
    const m = ne(t);
    return Array.isArray(m) ? m.map((v) => B(v)) : [B(m)];
  }), d = P(
    c,
    (m) => {
      if (f(), i.value && n) {
        p = new ResizeObserver(o);
        for (const v of m)
          v && p.observe(v, u);
      }
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), d();
  };
  return we(h), {
    isSupported: i,
    stop: h
  };
}
function _t(t, o = {}) {
  const {
    reset: s = !0,
    windowResize: n = !0,
    windowScroll: u = !0,
    immediate: p = !0,
    updateTiming: i = "sync"
  } = o, f = C(0), c = C(0), d = C(0), h = C(0), m = C(0), v = C(0), w = C(0), k = C(0);
  function D() {
    const V = B(t);
    if (!V) {
      s && (f.value = 0, c.value = 0, d.value = 0, h.value = 0, m.value = 0, v.value = 0, w.value = 0, k.value = 0);
      return;
    }
    const $ = V.getBoundingClientRect();
    f.value = $.height, c.value = $.bottom, d.value = $.left, h.value = $.right, m.value = $.top, v.value = $.width, w.value = $.x, k.value = $.y;
  }
  function O() {
    i === "sync" ? D() : i === "next-frame" && requestAnimationFrame(() => D());
  }
  return It(t, O), P(() => B(t), (V) => !V && O()), Wt(t, O, {
    attributeFilter: ["style", "class"]
  }), u && Ie("scroll", O, { capture: !0, passive: !0 }), n && Ie("resize", O, { passive: !0 }), Ct(() => {
    p && O();
  }), {
    height: f,
    bottom: c,
    left: d,
    right: h,
    top: m,
    width: v,
    x: w,
    y: k,
    update: O
  };
}
function Ye(t, o) {
  return Math.hypot(o.clientX - t.clientX, o.clientY - t.clientY);
}
function Et({ viewportStart: t, viewportEnd: o }) {
  let s = null, n = null, u = null, p = null, i = null;
  function f(h) {
    if (h.touches.length < 2) {
      const [m] = Array.from(h.touches);
      s = m?.clientX || null;
    }
  }
  function c(h) {
    d.initialTouchList = h.touches;
    const [m, v] = Array.from(h.touches);
    d.initialTouchViewportStart = t.value, d.initialTouchViewportEnd = o.value, d.initialPinchDistance = m && v ? Ye(m, v) : null;
  }
  const d = {
    get lastTouchX() {
      return s;
    },
    set lastTouchX(h) {
      s = h;
    },
    get initialTouchList() {
      return n;
    },
    set initialTouchList(h) {
      n = h;
    },
    get initialTouchViewportStart() {
      return u;
    },
    set initialTouchViewportStart(h) {
      u = h;
    },
    get initialTouchViewportEnd() {
      return p;
    },
    set initialTouchViewportEnd(h) {
      p = h;
    },
    get initialPinchDistance() {
      return i;
    },
    set initialPinchDistance(h) {
      i = h;
    }
  };
  return {
    setLastTouchX: f,
    setInitialTouchList: c,
    state: d
  };
}
const Xt = { class: "timeline-wrapper" }, Lt = { class: "timestamps" }, Yt = ["onClick"], Nt = { class: "group-items" }, Ht = ["onClick", "onPointermove", "onPointerdown", "onPointerup", "onContextmenu"], Ft = ["onClick", "onPointermove", "onPointerdown", "onPointerup", "onContextmenu"], At = {
  key: 0,
  class: "backgrounds"
}, Rt = ["onClick", "onPointermove", "onPointerdown", "onPointerup", "onContextmenu"], jt = {
  key: 1,
  class: "markers"
}, Bt = /* @__PURE__ */ nt({
  __name: "Timeline",
  props: {
    groups: { default: () => [] },
    items: { default: () => [] },
    markers: { default: () => [] },
    groupSelectable: { type: Boolean, default: !1 },
    viewportMin: { default: void 0 },
    viewportMax: { default: void 0 },
    minViewportDuration: { default: 1e3 },
    maxViewportDuration: { default: void 0 },
    initialViewportStart: { default: void 0 },
    initialViewportEnd: { default: void 0 },
    renderTimestampLabel: { type: Function, default: (t, o) => {
      const s = new Date(t);
      let n = "";
      return (!["hours", "minutes", "seconds", "ms"].includes(o.unit) || pe(s).valueOf() === t) && (n += `${s.toLocaleString("default", {
        month: o.unit !== "years" && (yt(s).valueOf() === t || o.unit === "days" || pe(s).valueOf() === t && !(o.unit === "months" && o.step === 0.25)) ? "short" : void 0,
        year: fe(s).valueOf() === t ? "numeric" : void 0,
        era: fe(s).valueOf() === t && fe(s).getFullYear() <= 0 ? "short" : void 0,
        day: o.unit !== "years" && !(o.unit === "months" && o.step >= 1) && pe(s).valueOf() === t ? "numeric" : void 0
      })} `), ["hours", "minutes", "seconds", "ms"].includes(o.unit) && (n += `${te(s.getHours())}:${te(s.getMinutes())}${s.getSeconds() > 0 ? `:${te(s.getSeconds())}` : ""}${s.getMilliseconds() > 0 ? `.${te(s.getMilliseconds())}` : ""}`), n;
    } },
    fixedLabels: { type: Boolean, default: !1 },
    minTimestampWidth: { default: 100 },
    maxZoomSpeed: { default: 60 },
    activeItems: { default: () => [] },
    maxOffsetOutsideViewport: { default: 50 },
    scales: { default: () => [] },
    weekStartsOn: { default: 0 }
  },
  emits: ["pointermove", "pointerdown", "pointerup", "wheel", "click", "clickGroup", "contextmenu", "touchmove", "touchstart", "touchend", "mousemoveTimeline", "mouseleaveTimeline", "changeViewport", "changeScale"],
  setup(t, { expose: o, emit: s }) {
    const n = t, u = s;
    o({
      setViewport: F,
      onWheel: Me,
      clearCache: re
    });
    const p = C(null), { width: i } = st(p), f = C(0), c = C(1e4), d = T(() => c.value - f.value), h = T(() => i.value / d.value);
    P([f, c], ([e, l]) => {
      u("changeViewport", { start: e, end: l });
    }), P(() => n.items, (e) => {
      e.some((l) => l.id === void 0) && console.warn("[vue-timeline-chart] Deprecation warning: some items are missing an `id` property. This will be required in the next major version.");
    }, { immediate: !0 }), P(() => n.markers, (e) => {
      e.some((l) => l.id === void 0) && console.warn("[vue-timeline-chart] Deprecation warning: some markers are missing an `id` property. This will be required in the next major version.");
    }, { immediate: !0 }), ot(() => {
      try {
        De();
      } catch (e) {
        console.error(e);
      }
    });
    const { left: m } = _t(p);
    function v() {
      return n.items?.reduce((e, l) => l.start < e ? l.start : e, 1 / 0);
    }
    function w() {
      return n.items?.reduce((e, l) => l.end !== void 0 && l.end > e || l.start > e ? l.end ?? l.start : e, -1 / 0);
    }
    function k() {
      F(
        n.initialViewportStart ?? n.viewportMin ?? v() ?? 0,
        n.initialViewportEnd ?? n.viewportMax ?? w() ?? 1e4
      );
    }
    P([() => n.viewportMin, () => n.viewportMax], () => {
      F(f.value, c.value);
    }), P([() => n.initialViewportStart, () => n.initialViewportEnd], () => {
      F(n.initialViewportStart, n.initialViewportEnd);
    });
    const D = T(() => n.items.filter((e) => e.start < c.value && (e.end ?? e.start) > f.value).sort((e, l) => e.start - l.start) || []), O = T(() => n.markers.filter((e) => e.start < c.value && e.start > f.value).sort((e, l) => e.start - l.start) || []), V = T(() => O.value.filter((e) => !e.group)), $ = T(() => D.value.filter((e) => e.type === "background" && !e.group)), oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
    function re() {
      oe.clear(), se.clear();
    }
    P([f, c, i], () => {
      re();
    }), P(D, () => {
      oe.clear();
    }), P(O, () => {
      se.clear();
    }), ve(() => {
      k(), _e(() => {
        re();
      });
    });
    function Ne(e) {
      return {
        "--_left": `${ke(e.start, e.end)}px`,
        "--_width": e.end !== void 0 ? `${Re(e.start, e.end)}px` : void 0,
        ...e.cssVariables
      };
    }
    function H(e, l = !1) {
      const r = l ? se : oe, a = r.get(e.id ?? `${e.start}${e.type}${e.end || ""}`);
      if (a)
        return a;
      const y = Ne(e);
      return r.set(e.id ?? `${e.start}${e.type}${e.end || ""}`, y), y;
    }
    const He = T(() => i.value / n.minTimestampWidth), { visibleTimestamps: ye, scale: G } = bt(f, c, d, He, T(() => n.scales), T(() => n.weekStartsOn)), Fe = T(() => ye.value.map((e) => ke(e)));
    P(G, (e, l) => {
      e.step === l?.step && e.unit === l?.unit || u("changeScale", e);
    }, { immediate: !0 });
    function Ae(e) {
      return {
        "is-second": e % 1e3 === 0,
        "is-minute": e % 6e4 === 0,
        "is-hour": e % 36e5 === 0,
        "is-day": e % 864e5 === 0
      };
    }
    const q = T(() => n.maxOffsetOutsideViewport / i.value * d.value), ge = T(() => i.value + 2 * (q.value / d.value) * i.value);
    function ke(e, l) {
      if (l !== void 0 && e < f.value - q.value && (l - e) / d.value * i.value > ge.value) {
        const M = -q.value / d.value * i.value, A = c.value + q.value;
        if (l > A)
          return M;
        const Se = (A - l) / d.value * i.value;
        return M - Se;
      }
      return (e - f.value) / d.value * i.value;
    }
    function Re(e, l) {
      const a = (l - e) / d.value * i.value;
      return Math.min(a, ge.value);
    }
    function ie(e, l) {
      const r = e / i.value * d.value;
      e > 0 && c.value === n.viewportMax || e < 0 && f.value === n.viewportMin || (F(f.value + r, c.value + r), l.type === "wheel" && ue(l));
    }
    function De() {
      if (n.initialViewportStart !== void 0 && n.initialViewportEnd !== void 0 && n.initialViewportStart >= n.initialViewportEnd)
        throw new Error("[vue-timeline-chart] Invalid props: initialViewportStart must be smaller than initialViewportEnd");
      if (n.viewportMin !== void 0 && n.viewportMax !== void 0 && n.viewportMin >= n.viewportMax)
        throw new Error("[vue-timeline-chart] Invalid props: viewportMin must be smaller than viewportMax");
    }
    function F(e, l) {
      if (e === void 0 && l === void 0) {
        console.warn("[vue-timeline-chart] setViewport: both start and end are undefined. No viewport will be set.");
        return;
      }
      let r = e === void 0 ? f.value : n.viewportMin !== void 0 ? Math.max(e, n.viewportMin) : e, a = l === void 0 ? c.value : n.viewportMax !== void 0 ? Math.min(l, n.viewportMax) : l;
      const y = a - r;
      if (n.minViewportDuration !== void 0 && y < n.minViewportDuration) {
        const M = n.minViewportDuration - y;
        r -= M * 0.5, a += M * 0.5;
      } else if (n.maxViewportDuration !== void 0 && y > n.maxViewportDuration) {
        const M = n.maxViewportDuration - y;
        r -= M * 0.5, a += M * 0.5;
      }
      f.value = Math.round(r), c.value = Math.round(a);
    }
    function Me(e) {
      if (De(), u("wheel", e), e.deltaY === 0 && e.preventDefault(), e.shiftKey) {
        e.preventDefault();
        const y = e.deltaY === 0 && e.deltaX !== 0 ? e.deltaX : e.deltaY;
        ie(y * (e.deltaMode === 0 ? 1 : 18), e);
        return;
      }
      if (e.deltaX !== 0) {
        ie(e.deltaX * (e.deltaMode === 0 ? 1 : 18), e);
        return;
      }
      if (!(e.metaKey || e.ctrlKey))
        return;
      e.preventDefault();
      const l = (e.clientX - m.value) / i.value, r = n.maxZoomSpeed ? Math.max(-n.maxZoomSpeed, Math.min(n.maxZoomSpeed, e.deltaY * (e.deltaMode === 0 ? 1 : 10))) : e.deltaY * (e.deltaMode === 0 ? 1 : 10), a = Math.round(-d.value * 0.01 * r);
      je(a, l, e);
    }
    function je(e, l = 0.5, r) {
      e > 0 ? e = d.value - e < n.minViewportDuration ? d.value - n.minViewportDuration : e : n.maxViewportDuration && (e = d.value - e > n.maxViewportDuration ? -(n.maxViewportDuration - d.value) : e);
      const a = e * l, y = e - a, M = f.value + a, A = c.value - y;
      if (M >= A) {
        console.error(`Rounding issue probably occured while zooming.

Setting different values for minViewportDuration and maxViewportDuration might help.`);
        return;
      }
      F(M, A), ue(r);
    }
    function Y(e) {
      let l;
      "touches" in e ? l = Array.from(e.touches).reduce((y, M) => y + M.clientX, 0) / e.touches.length : l = e.clientX;
      const r = (l - m.value) / i.value;
      return f.value + d.value * r;
    }
    const { state: W, setLastTouchX: ae, setInitialTouchList: be } = Et({ viewportStart: f, viewportEnd: c });
    function Be(e) {
      if (e.touches.length === 2 && W.initialPinchDistance !== null && W.initialTouchViewportStart !== null && W.initialTouchViewportEnd !== null) {
        const [l, r] = [...e.touches].sort((ce, de) => ce.clientX - de.clientX), [a, y] = [l, r].map(
          (ce) => [...W.initialTouchList].find((de) => de.identifier === ce.identifier)
        ), A = Ye(l, r) / W.initialPinchDistance, le = (a.screenX + y.screenX) / 2, Ke = -((l.screenX + r.screenX) / 2 - le) / h.value, Ue = (le - m.value) / i.value, Oe = W.initialTouchViewportEnd - W.initialTouchViewportStart, Te = Oe / A, Je = Te - Oe, Ve = W.initialTouchViewportStart - Je * Ue + Ke, Qe = Ve + Te;
        F(Ve, Qe);
      } else if (e.touches.length === 1) {
        const [l] = e.touches;
        if (W.lastTouchX === null)
          W.lastTouchX = l.clientX;
        else {
          const r = W.lastTouchX - l.clientX;
          ie(r, e), ae(e);
        }
      }
      u("touchmove", { time: Y(e), event: e });
    }
    function Ge(e) {
      be(e), ae(e), u("touchstart", { time: Y(e), event: e });
    }
    function ze(e) {
      ae(e), be(e), u("touchend", { event: e });
    }
    function K(e, l = null) {
      u("pointerdown", { time: Y(e), event: e, item: l });
    }
    function U(e, l = null) {
      u("pointermove", { time: Y(e), event: e, item: l });
    }
    function J(e, l = null) {
      u("pointerup", { time: Y(e), event: e, item: l });
    }
    function Q(e, l = null) {
      u("click", { time: Y(e), event: e, item: l });
    }
    function Ze(e) {
      n.groupSelectable && u("clickGroup", { id: e });
    }
    function ee(e, l = null) {
      u("contextmenu", { time: Y(e), event: e, item: l });
    }
    function ue(e) {
      u("mousemoveTimeline", { time: Y(e), event: e });
    }
    function qe(e) {
      u("mouseleaveTimeline", { event: e });
    }
    return (e, l) => (S(), b("div", Xt, [
      z("div", {
        ref_key: "timelineEl",
        ref: p,
        class: "timeline",
        onWheel: Me,
        onClick: Q,
        onTouchmove: Be,
        onTouchstart: Ge,
        onTouchend: ze,
        onPointermove: U,
        onPointerdown: K,
        onPointerup: J,
        onContextmenu: x(ee, ["prevent"]),
        onMousemove: ue,
        onMouseleave: qe
      }, [
        z("div", Lt, [
          _(e.$slots, "timestamps-before", { scale: R(G) }, void 0, !0),
          (S(!0), b(E, null, X(R(ye), (r, a) => (S(), b("div", {
            key: r,
            class: I(["timestamp", Ae(r)]),
            style: L({ "--_left": `${Fe.value[a]}px` })
          }, [
            _(e.$slots, "timestamp", {
              timestamp: r,
              scale: R(G)
            }, () => [
              xe(Pe(e.renderTimestampLabel(r, R(G))), 1)
            ], !0)
          ], 6))), 128)),
          _(e.$slots, "timestamps-after", { scale: R(G) }, void 0, !0),
          (S(!0), b(E, null, X(O.value.filter((r) => r.group === "_timestamps"), (r) => (S(), b("div", {
            key: r.id ?? `${r.start}${r.type}`,
            style: L(H(r)),
            class: I([r.type, r.className])
          }, [
            _(e.$slots, "marker", { item: r }, void 0, !0)
          ], 6))), 128)),
          (S(!0), b(E, null, X(D.value.filter((r) => r.group === "_timestamps" && r.type === "marker"), (r) => (S(), b("div", {
            key: r.id ?? `${r.start}${r.type}`,
            style: L(H(r)),
            class: I([r.type, r.className])
          }, [
            _(e.$slots, "marker", { item: r }, void 0, !0)
          ], 6))), 128))
        ]),
        z("div", {
          class: I(["groups", n.groupSelectable && "selectable"])
        }, [
          (S(!0), b(E, null, X(e.groups, (r) => (S(), b("div", {
            key: r.id,
            class: I(["group", r.className]),
            style: L(r.cssVariables),
            onClick: (a) => Ze(r.id)
          }, [
            z("div", {
              class: I(["group-label", { fixed: e.fixedLabels }])
            }, [
              _(e.$slots, "group-label", { group: r }, () => [
                xe(Pe(r.label), 1)
              ], !0)
            ], 2),
            z("div", Nt, [
              _(e.$slots, `items-${r.id}`, {
                group: r,
                itemsInViewport: D.value.filter((a) => a.group === r.id),
                viewportStart: f.value,
                viewportEnd: c.value
              }, () => [
                (S(!0), b(E, null, X(D.value.filter((a) => a.group === r.id && a.type !== "background"), (a, y) => (S(), b("div", {
                  key: a.id ?? y,
                  style: L(H(a)),
                  class: I(["item", a.type, a.className, { active: e.activeItems.includes(a.id) }]),
                  onClick: x((M) => Q(M, a), ["stop"]),
                  onPointermove: x((M) => U(M, a), ["stop"]),
                  onPointerdown: x((M) => K(M, a), ["stop"]),
                  onPointerup: x((M) => J(M, a), ["stop"]),
                  onContextmenu: x((M) => ee(M, a), ["prevent", "stop"])
                }, [
                  _(e.$slots, "item", { item: a }, void 0, !0)
                ], 46, Ht))), 128))
              ], !0)
            ]),
            (S(!0), b(E, null, X(D.value.filter((a) => a.group === r.id && a.type === "background"), (a) => (S(), b("div", {
              key: a.id ?? `${a.start}${a.type}${a.end || ""}`,
              style: L(H(a)),
              class: I([a.type, a.className]),
              onClick: x((y) => Q(y, a), ["stop"]),
              onPointermove: x((y) => U(y, a), ["stop"]),
              onPointerdown: x((y) => K(y, a), ["stop"]),
              onPointerup: x((y) => J(y, a), ["stop"]),
              onContextmenu: x((y) => ee(y, a), ["prevent", "stop"])
            }, null, 46, Ft))), 128)),
            (S(!0), b(E, null, X(O.value.filter((a) => a.group === r.id), (a) => (S(), b("div", {
              key: a.id ?? `${a.start}${a.type}`,
              style: L(H(a, !0)),
              class: I([a.type, a.className])
            }, [
              _(e.$slots, "marker", { item: a }, void 0, !0)
            ], 6))), 128))
          ], 14, Yt))), 128)),
          $.value.length > 0 ? (S(), b("div", At, [
            (S(!0), b(E, null, X($.value, (r) => (S(), b("div", {
              key: r.id ?? `${r.start}${r.type}${r.end || ""}`,
              style: L(H(r)),
              class: I([r.type, r.className]),
              onClick: x((a) => Q(a, r), ["stop"]),
              onPointermove: x((a) => U(a, r), ["stop"]),
              onPointerdown: x((a) => K(a, r), ["stop"]),
              onPointerup: x((a) => J(a, r), ["stop"]),
              onContextmenu: x((a) => ee(a, r), ["prevent", "stop"])
            }, null, 46, Rt))), 128))
          ])) : Ce("", !0),
          V.value.length > 0 ? (S(), b("div", jt, [
            (S(!0), b(E, null, X(V.value, (r) => (S(), b("div", {
              key: r.id ?? `${r.start}${r.type}`,
              style: L(H(r, !0)),
              class: I([r.type, r.className])
            }, [
              _(e.$slots, "marker", { item: r }, void 0, !0)
            ], 6))), 128))
          ])) : Ce("", !0)
        ], 2)
      ], 544)
    ]));
  }
}), Gt = (t, o) => {
  const s = t.__vccOpts || t;
  for (const [n, u] of o)
    s[n] = u;
  return s;
}, qt = /* @__PURE__ */ Gt(Bt, [["__scopeId", "data-v-3249607b"]]);
export {
  qt as Timeline
};
