!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        function n() {
            this.constructor = t
        }

        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        im(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    function n(t, e, n) {
        if (n || 2 === arguments.length) for (var i, r = 0, o = e.length; o > r; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
        return t.concat(i || e)
    }

    function i(t, e) {
        var n = e.browser, i = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge?\/([\d.]+)/),
            a = /micromessenger/i.test(t);
        i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, n.version = o[1], n.newEdge = +o[1].split(".")[0] > 18), a && (n.weChat = !0), e.canvasSupported = !!document.createElement("canvas").getContext, e.svgSupported = "undefined" != typeof SVGRect, e.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge, e.pointerEventsSupported = "onpointerdown" in window && (n.edge || n.ie && +n.version >= 11), e.domSupported = "undefined" != typeof document;
        var s = document.documentElement.style;
        e.transform3dSupported = (n.ie && "transition" in s || n.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || "MozPerspective" in s) && !("OTransition" in s), e.transformSupported = e.transform3dSupported || n.ie && +n.version >= 9
    }

    function r(t, e) {
        _m[t] = e
    }

    function o() {
        return xm++
    }

    function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        "undefined" != typeof console && console.error.apply(console, t)
    }

    function s(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, n = hm.call(t);
        if ("[object Array]" === n) {
            if (!X(t)) {
                e = [];
                for (var i = 0, r = t.length; r > i; i++) e[i] = s(t[i])
            }
        } else if (um[n]) {
            if (!X(t)) {
                var o = t.constructor;
                if (o.from) e = o.from(t); else {
                    e = new o(t.length);
                    for (var i = 0, r = t.length; r > i; i++) e[i] = s(t[i])
                }
            }
        } else if (!lm[n] && !X(t) && !L(t)) {
            e = {};
            for (var a in t) t.hasOwnProperty(a) && a !== mm && (e[a] = s(t[a]))
        }
        return e
    }

    function l(t, e, n) {
        if (!k(e) || !k(t)) return n ? s(e) : t;
        for (var i in e) if (e.hasOwnProperty(i) && i !== mm) {
            var r = t[i], o = e[i];
            !k(o) || !k(r) || M(o) || M(r) || L(o) || L(r) || A(o) || A(r) || X(o) || X(r) ? !n && i in t || (t[i] = s(e[i])) : l(r, o, n)
        }
        return t
    }

    function u(t, e) {
        for (var n = t[0], i = 1, r = t.length; r > i; i++) n = l(n, t[i], e);
        return n
    }

    function h(t, e) {
        if (Object.assign) Object.assign(t, e); else for (var n in e) e.hasOwnProperty(n) && n !== mm && (t[n] = e[n]);
        return t
    }

    function c(t, e, n) {
        for (var i = b(e), r = 0; r < i.length; r++) {
            var o = i[r];
            (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
        }
        return t
    }

    function p(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n
        }
        return -1
    }

    function f(t, e) {
        function n() {
        }

        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
        t.prototype.constructor = t, t.superClass = e
    }

    function d(t, e, n) {
        if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, Object.getOwnPropertyNames) for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
            var o = i[r];
            "constructor" !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
        } else c(t, e, n)
    }

    function g(t) {
        return t ? "string" == typeof t ? !1 : "number" == typeof t.length : !1
    }

    function y(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === pm) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t); else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
    }

    function v(t, e, n) {
        if (!t) return [];
        if (!e) return V(t);
        if (t.map && t.map === gm) return t.map(e, n);
        for (var i = [], r = 0, o = t.length; o > r; r++) i.push(e.call(n, t[r], r, t));
        return i
    }

    function m(t, e, n, i) {
        if (t && e) {
            for (var r = 0, o = t.length; o > r; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function _(t, e, n) {
        if (!t) return [];
        if (!e) return V(t);
        if (t.filter && t.filter === fm) return t.filter(e, n);
        for (var i = [], r = 0, o = t.length; o > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
        return i
    }

    function x(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i]
    }

    function b(t) {
        if (!t) return [];
        if (Object.keys) return Object.keys(t);
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e
    }

    function w(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return function () {
            return t.apply(e, n.concat(dm.call(arguments)))
        }
    }

    function S(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return function () {
            return t.apply(this, e.concat(dm.call(arguments)))
        }
    }

    function M(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === hm.call(t)
    }

    function T(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "string" == typeof t
    }

    function I(t) {
        return "[object String]" === hm.call(t)
    }

    function D(t) {
        return "number" == typeof t
    }

    function k(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" === e
    }

    function A(t) {
        return !!lm[hm.call(t)]
    }

    function P(t) {
        return !!um[hm.call(t)]
    }

    function L(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function O(t) {
        return null != t.colorStops
    }

    function R(t) {
        return null != t.image
    }

    function z(t) {
        return "[object RegExp]" === hm.call(t)
    }

    function E(t) {
        return t !== t
    }

    function N() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0, i = t.length; i > n; n++) if (null != t[n]) return t[n]
    }

    function B(t, e) {
        return null != t ? t : e
    }

    function F(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function V(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return dm.apply(t, e)
    }

    function H(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function G(t, e) {
        if (!t) throw new Error(e)
    }

    function W(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function U(t) {
        t[Sm] = !0
    }

    function X(t) {
        return t[Sm]
    }

    function Y(t) {
        return new Mm(t)
    }

    function j(t, e) {
        for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
        for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i];
        return n
    }

    function q(t, e) {
        var n;
        if (Object.create) n = Object.create(t); else {
            var i = function () {
            };
            i.prototype = t, n = new i
        }
        return e && h(n, e), n
    }

    function Z(t, e) {
        return t.hasOwnProperty(e)
    }

    function K() {
    }

    function $(t, e) {
        return null == t && (t = 0), null == e && (e = 0), [t, e]
    }

    function J(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function Q(t) {
        return [t[0], t[1]]
    }

    function te(t, e, n) {
        return t[0] = e, t[1] = n, t
    }

    function ee(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function ne(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }

    function ie(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function re(t) {
        return Math.sqrt(oe(t))
    }

    function oe(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function ae(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }

    function se(t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }

    function le(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function ue(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function he(t, e) {
        var n = re(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function ce(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function pe(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function fe(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function de(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
    }

    function ge(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function ye(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function ve(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    function me(t, e, n, i, r, o) {
        var a = i + "-" + r, s = t.length;
        if (o.hasOwnProperty(a)) return o[a];
        if (1 === e) {
            var l = Math.round(Math.log((1 << s) - 1 & ~r) / Rm);
            return t[n][l]
        }
        for (var u = i | 1 << n, h = n + 1; i & 1 << h;) h++;
        for (var c = 0, p = 0, f = 0; s > p; p++) {
            var d = 1 << p;
            d & r || (c += (f % 2 ? -1 : 1) * t[n][p] * me(t, e - 1, h, u, r | d, o), f++)
        }
        return o[a] = c, c
    }

    function _e(t, e) {
        var n = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
            i = {}, r = me(n, 8, 0, 0, 0, i);
        if (0 !== r) {
            for (var o = [], a = 0; 8 > a; a++) for (var s = 0; 8 > s; s++) null == o[s] && (o[s] = 0), o[s] += ((a + s) % 2 ? -1 : 1) * me(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i) / r * e[a];
            return function (t, e, n) {
                var i = e * o[6] + n * o[7] + 1;
                t[0] = (e * o[0] + n * o[1] + o[2]) / i, t[1] = (e * o[3] + n * o[4] + o[5]) / i
            }
        }
    }

    function xe(t, e, n, i, r) {
        return be(Em, e, i, r, !0) && be(t, n, Em[0], Em[1])
    }

    function be(t, e, n, i, r) {
        if (e.getBoundingClientRect && sm.domSupported && !Me(e)) {
            var o = e[zm] || (e[zm] = {}), a = we(e, o), s = Se(a, o, r);
            if (s) return s(t, n, i), !0
        }
        return !1
    }

    function we(t, e) {
        var n = e.markers;
        if (n) return n;
        n = e.markers = [];
        for (var i = ["left", "right"], r = ["top", "bottom"], o = 0; 4 > o; o++) {
            var a = document.createElement("div"), s = a.style, l = o % 2, u = (o >> 1) % 2;
            s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(a), n.push(a)
        }
        return n
    }

    function Se(t, e, n) {
        for (var i = n ? "invTrans" : "trans", r = e[i], o = e.srcCoords, a = [], s = [], l = !0, u = 0; 4 > u; u++) {
            var h = t[u].getBoundingClientRect(), c = 2 * u, p = h.left, f = h.top;
            a.push(p, f), l = l && o && p === o[c] && f === o[c + 1], s.push(t[u].offsetLeft, t[u].offsetTop)
        }
        return l && r ? r : (e.srcCoords = a, e[i] = n ? _e(s, a) : _e(a, s))
    }

    function Me(t) {
        return "CANVAS" === t.nodeName.toUpperCase()
    }

    function Te(t, e, n, i) {
        return n = n || {}, i || !sm.canvasSupported ? Ce(t, e, n) : sm.browser.firefox && sm.browser.version < "39" && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : Ce(t, e, n), n
    }

    function Ce(t, e, n) {
        if (sm.domSupported && t.getBoundingClientRect) {
            var i = e.clientX, r = e.clientY;
            if (Me(t)) {
                var o = t.getBoundingClientRect();
                return n.zrX = i - o.left, void (n.zrY = r - o.top)
            }
            if (be(Fm, t, i, r)) return n.zrX = Fm[0], void (n.zrY = Fm[1])
        }
        n.zrX = n.zrY = 0
    }

    function Ie(t) {
        return t || window.event
    }

    function De(t, e, n) {
        if (e = Ie(e), null != e.zrX) return e;
        var i = e.type, r = i && i.indexOf("touch") >= 0;
        if (r) {
            var o = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
            o && Te(t, o, e, n)
        } else {
            Te(t, e, e, n);
            var a = ke(e);
            e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3
        }
        var s = e.button;
        return null == e.which && void 0 !== s && Bm.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }

    function ke(t) {
        var e = t.wheelDelta;
        if (e) return e;
        var n = t.deltaX, i = t.deltaY;
        if (null == n || null == i) return e;
        var r = Math.abs(0 !== i ? i : n), o = i > 0 ? -1 : 0 > i ? 1 : n > 0 ? -1 : 1;
        return 3 * r * o
    }

    function Ae(t, e, n, i) {
        Nm ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n)
    }

    function Pe(t, e, n, i) {
        Nm ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n)
    }

    function Le(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function Oe(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function Re(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: ze
        }
    }

    function ze() {
        Vm(this.event)
    }

    function Ee(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i = t, r = void 0, o = !1; i;) {
                if (i.ignoreClip && (o = !0), !o) {
                    var a = i.getClipPath();
                    if (a && !a.contain(e, n)) return !1;
                    i.silent && (r = !0)
                }
                var s = i.__hostTarget;
                i = s ? s : i.parent
            }
            return r ? Wm : !0
        }
        return !1
    }

    function Ne(t, e, n) {
        var i = t.painter;
        return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight()
    }

    function Be(t) {
        for (var e = 0; t >= Zm;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function Fe(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
            Ve(t, e, r)
        } else for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function Ve(t, e, n) {
        for (n--; n > e;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function He(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var o, a = t[i], s = e, l = i; l > s;) o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;
            var u = i - s;
            switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0;) t[s + u] = t[s + u - 1], u--
            }
            t[s] = a
        }
    }

    function Ge(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) > 0) {
            for (s = i - r; s > l && o(t, e[n + r + l]) > 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), a += r, l += r
        } else {
            for (s = r + 1; s > l && o(t, e[n + r - l]) <= 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u
        }
        for (a++; l > a;) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) > 0 ? a = h + 1 : l = h
        }
        return l
    }

    function We(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && o(t, e[n + r - l]) < 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u
        } else {
            for (s = i - r; s > l && o(t, e[n + r + l]) >= 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), a += r, l += r
        }
        for (a++; l > a;) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) < 0 ? l = h : a = h + 1
        }
        return l
    }

    function Ue(t, e) {
        function n(t, e) {
            l[c] = t, u[c] = e, c += 1
        }

        function i() {
            for (; c > 1;) {
                var t = c - 2;
                if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--; else if (u[t] > u[t + 1]) break;
                o(t)
            }
        }

        function r() {
            for (; c > 1;) {
                var t = c - 2;
                t > 0 && u[t - 1] < u[t + 1] && t--, o(t)
            }
        }

        function o(n) {
            var i = l[n], r = u[n], o = l[n + 1], h = u[n + 1];
            u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
            var p = We(t[o], t, i, r, 0, e);
            i += p, r -= p, 0 !== r && (h = Ge(t[i + r - 1], t, o, h, h - 1, e), 0 !== h && (h >= r ? a(i, r, o, h) : s(i, r, o, h)))
        }

        function a(n, i, r, o) {
            var a = 0;
            for (a = 0; i > a; a++) p[a] = t[n + a];
            var s = 0, l = r, u = n;
            if (t[u++] = t[l++], 0 !== --o) {
                if (1 === i) {
                    for (a = 0; o > a; a++) t[u + a] = t[l + a];
                    return void (t[u + o] = p[s])
                }
                for (var c, f, d, g = h; ;) {
                    c = 0, f = 0, d = !1;
                    do if (e(t[l], p[s]) < 0) {
                        if (t[u++] = t[l++], f++, c = 0, 0 === --o) {
                            d = !0;
                            break
                        }
                    } else if (t[u++] = p[s++], c++, f = 0, 1 === --i) {
                        d = !0;
                        break
                    } while (g > (c | f));
                    if (d) break;
                    do {
                        if (c = We(t[l], p, s, i, 0, e), 0 !== c) {
                            for (a = 0; c > a; a++) t[u + a] = p[s + a];
                            if (u += c, s += c, i -= c, 1 >= i) {
                                d = !0;
                                break
                            }
                        }
                        if (t[u++] = t[l++], 0 === --o) {
                            d = !0;
                            break
                        }
                        if (f = Ge(p[s], t, l, o, 0, e), 0 !== f) {
                            for (a = 0; f > a; a++) t[u + a] = t[l + a];
                            if (u += f, l += f, o -= f, 0 === o) {
                                d = !0;
                                break
                            }
                        }
                        if (t[u++] = p[s++], 1 === --i) {
                            d = !0;
                            break
                        }
                        g--
                    } while (c >= Km || f >= Km);
                    if (d) break;
                    0 > g && (g = 0), g += 2
                }
                if (h = g, 1 > h && (h = 1), 1 === i) {
                    for (a = 0; o > a; a++) t[u + a] = t[l + a];
                    t[u + o] = p[s]
                } else {
                    if (0 === i) throw new Error;
                    for (a = 0; i > a; a++) t[u + a] = p[s + a]
                }
            } else for (a = 0; i > a; a++) t[u + a] = p[s + a]
        }

        function s(n, i, r, o) {
            var a = 0;
            for (a = 0; o > a; a++) p[a] = t[r + a];
            var s = n + i - 1, l = o - 1, u = r + o - 1, c = 0, f = 0;
            if (t[u--] = t[s--], 0 !== --i) {
                if (1 === o) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[f + a] = t[c + a];
                    return void (t[u] = p[l])
                }
                for (var d = h; ;) {
                    var g = 0, y = 0, v = !1;
                    do if (e(p[l], t[s]) < 0) {
                        if (t[u--] = t[s--], g++, y = 0, 0 === --i) {
                            v = !0;
                            break
                        }
                    } else if (t[u--] = p[l--], y++, g = 0, 1 === --o) {
                        v = !0;
                        break
                    } while (d > (g | y));
                    if (v) break;
                    do {
                        if (g = i - We(p[l], t, n, i, i - 1, e), 0 !== g) {
                            for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, a = g - 1; a >= 0; a--) t[f + a] = t[c + a];
                            if (0 === i) {
                                v = !0;
                                break
                            }
                        }
                        if (t[u--] = p[l--], 1 === --o) {
                            v = !0;
                            break
                        }
                        if (y = o - Ge(t[s], p, 0, o, o - 1, e), 0 !== y) {
                            for (u -= y, l -= y, o -= y, f = u + 1, c = l + 1, a = 0; y > a; a++) t[f + a] = p[c + a];
                            if (1 >= o) {
                                v = !0;
                                break
                            }
                        }
                        if (t[u--] = t[s--], 0 === --i) {
                            v = !0;
                            break
                        }
                        d--
                    } while (g >= Km || y >= Km);
                    if (v) break;
                    0 > d && (d = 0), d += 2
                }
                if (h = d, 1 > h && (h = 1), 1 === o) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[f + a] = t[c + a];
                    t[u] = p[l]
                } else {
                    if (0 === o) throw new Error;
                    for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a]
                }
            } else for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a]
        }

        var l, u, h = Km, c = 0, p = [];
        return l = [], u = [], {mergeRuns: i, forceMergeRuns: r, pushRun: n}
    }

    function Xe(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(2 > r)) {
            var o = 0;
            if (Zm > r) return o = Fe(t, n, i, e), void He(t, n, i, n + o, e);
            var a = Ue(t, e), s = Be(r);
            do {
                if (o = Fe(t, n, i, e), s > o) {
                    var l = r;
                    l > s && (l = s), He(t, n, n + l, n + o, e), o = l
                }
                a.pushRun(n, o), a.mergeRuns(), r -= o, n += o
            } while (0 !== r);
            a.forceMergeRuns()
        }
    }

    function Ye() {
        t_ || (t_ = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
    }

    function je(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function qe(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
    }

    function Ze(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
    }

    function Ke(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t
    }

    function $e(t) {
        var e = t;
        return qe(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
    }

    function Je(t) {
        var e = t;
        return Ke(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
    }

    function Qe(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function tn(t, e, n) {
        return t + (e - t) * n
    }

    function en(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function nn(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function rn(t, e) {
        h_ && nn(h_, e), h_ = u_.put(t, h_ || e.slice())
    }

    function on(t, e) {
        if (t) {
            e = e || [];
            var n = u_.get(t);
            if (n) return nn(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in l_) return nn(e, l_[i]), rn(t, e), e;
            var r = i.length;
            if ("#" !== i.charAt(0)) {
                var o = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== o && a + 1 === r) {
                    var s = i.substr(0, o), l = i.substr(o + 1, a - (o + 1)).split(","), u = 1;
                    switch (s) {
                        case"rgba":
                            if (4 !== l.length) return 3 === l.length ? en(e, +l[0], +l[1], +l[2], 1) : en(e, 0, 0, 0, 1);
                            u = Je(l.pop());
                        case"rgb":
                            return 3 !== l.length ? void en(e, 0, 0, 0, 1) : (en(e, $e(l[0]), $e(l[1]), $e(l[2]), u), rn(t, e), e);
                        case"hsla":
                            return 4 !== l.length ? void en(e, 0, 0, 0, 1) : (l[3] = Je(l[3]), an(l, e), rn(t, e), e);
                        case"hsl":
                            return 3 !== l.length ? void en(e, 0, 0, 0, 1) : (an(l, e), rn(t, e), e);
                        default:
                            return
                    }
                }
                en(e, 0, 0, 0, 1)
            } else {
                if (4 === r || 5 === r) {
                    var h = parseInt(i.slice(1, 4), 16);
                    return h >= 0 && 4095 >= h ? (en(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 5 === r ? parseInt(i.slice(4), 16) / 15 : 1), rn(t, e), e) : void en(e, 0, 0, 0, 1)
                }
                if (7 === r || 9 === r) {
                    var h = parseInt(i.slice(1, 7), 16);
                    return h >= 0 && 16777215 >= h ? (en(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 9 === r ? parseInt(i.slice(7), 16) / 255 : 1), rn(t, e), e) : void en(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function an(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = Je(t[1]), r = Je(t[2]),
            o = .5 >= r ? r * (i + 1) : r + i - r * i, a = 2 * r - o;
        return e = e || [], en(e, qe(255 * Qe(a, o, n + 1 / 3)), qe(255 * Qe(a, o, n)), qe(255 * Qe(a, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function sn(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(i, r, o), s = Math.max(i, r, o),
                l = s - a, u = (s + a) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = .5 > u ? l / (s + a) : l / (2 - s - a);
                var h = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, p = ((s - o) / 6 + l / 2) / l;
                i === s ? e = p - c : r === s ? e = 1 / 3 + h - p : o === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, n, u];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function ln(t, e) {
        var n = on(t);
        if (n) {
            for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : n[i] < 0 && (n[i] = 0);
            return dn(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function un(t) {
        var e = on(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
    }

    function hn(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = e[r], s = e[o], l = i - r;
            return n[0] = qe(tn(a[0], s[0], l)), n[1] = qe(tn(a[1], s[1], l)), n[2] = qe(tn(a[2], s[2], l)), n[3] = Ke(tn(a[3], s[3], l)), n
        }
    }

    function cn(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = on(e[r]), s = on(e[o]), l = i - r,
                u = dn([qe(tn(a[0], s[0], l)), qe(tn(a[1], s[1], l)), qe(tn(a[2], s[2], l)), Ke(tn(a[3], s[3], l))], "rgba");
            return n ? {color: u, leftIndex: r, rightIndex: o, value: i} : u
        }
    }

    function pn(t, e, n, i) {
        var r = on(t);
        return t ? (r = sn(r), null != e && (r[0] = Ze(e)), null != n && (r[1] = Je(n)), null != i && (r[2] = Je(i)), dn(an(r), "rgba")) : void 0
    }

    function fn(t, e) {
        var n = on(t);
        return n && null != e ? (n[3] = Ke(e), dn(n, "rgba")) : void 0
    }

    function dn(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    function gn(t, e) {
        var n = on(t);
        return n ? (.299 * n[0] + .587 * n[1] + .114 * n[2]) * n[3] / 255 + (1 - n[3]) * e : 0
    }

    function yn() {
        var t = Math.round(255 * Math.random()), e = Math.round(255 * Math.random()),
            n = Math.round(255 * Math.random());
        return "rgb(" + t + "," + e + "," + n + ")"
    }

    function vn(t, e, n) {
        return (e - t) * n + t
    }

    function mn(t, e, n) {
        return n > .5 ? e : t
    }

    function _n(t, e, n, i) {
        for (var r = e.length, o = 0; r > o; o++) t[o] = vn(e[o], n[o], i)
    }

    function xn(t, e, n, i) {
        for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
            t[a] || (t[a] = []);
            for (var s = 0; o > s; s++) t[a][s] = vn(e[a][s], n[a][s], i)
        }
    }

    function bn(t, e, n, i) {
        for (var r = e.length, o = 0; r > o; o++) t[o] = e[o] + n[o] * i;
        return t
    }

    function wn(t, e, n, i) {
        for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
            t[a] || (t[a] = []);
            for (var s = 0; o > s; s++) t[a][s] = e[a][s] + n[a][s] * i
        }
        return t
    }

    function Sn(t, e, n) {
        var i = t, r = e;
        if (i.push && r.push) {
            var o = i.length, a = r.length;
            if (o !== a) {
                var s = o > a;
                if (s) i.length = a; else for (var l = o; a > l; l++) i.push(1 === n ? r[l] : d_.call(r[l]))
            }
            for (var u = i[0] && i[0].length, l = 0; l < i.length; l++) if (1 === n) isNaN(i[l]) && (i[l] = r[l]); else for (var h = 0; u > h; h++) isNaN(i[l][h]) && (i[l][h] = r[l][h])
        }
    }

    function Mn(t, e) {
        var n = t.length;
        if (n !== e.length) return !1;
        for (var i = 0; n > i; i++) if (t[i] !== e[i]) return !1;
        return !0
    }

    function Tn(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Cn(t, e, n, i, r, o, a, s) {
        for (var l = e.length, u = 0; l > u; u++) t[u] = Tn(e[u], n[u], i[u], r[u], o, a, s)
    }

    function In(t, e, n, i, r, o, a, s) {
        for (var l = e.length, u = e[0].length, h = 0; l > h; h++) {
            t[h] || (t[1] = []);
            for (var c = 0; u > c; c++) t[h][c] = Tn(e[h][c], n[h][c], i[h][c], r[h][c], o, a, s)
        }
    }

    function Dn(t) {
        if (g(t)) {
            var e = t.length;
            if (g(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(d_.call(t[i]));
                return n
            }
            return d_.call(t)
        }
        return t
    }

    function kn(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function An(t) {
        return g(t && t[0]) ? 2 : 1
    }

    function Pn(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function Ln(t) {
        t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
            t.touching = !1, t.touchTimer = null
        }, 700)
    }

    function On(t) {
        t && (t.zrByTouch = !0)
    }

    function Rn(t, e) {
        return De(t.dom, new M_(t, e), !0)
    }

    function zn(t, e) {
        for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot);) n = n.parentNode;
        return i
    }

    function En(t, e) {
        var n = e.domHandlers;
        sm.pointerEventsSupported ? y(b_.pointer, function (i) {
            Bn(e, i, function (e) {
                n[i].call(t, e)
            })
        }) : (sm.touchEventsSupported && y(b_.touch, function (i) {
            Bn(e, i, function (r) {
                n[i].call(t, r), Ln(e)
            })
        }), y(b_.mouse, function (i) {
            Bn(e, i, function (r) {
                r = Ie(r), e.touching || n[i].call(t, r)
            })
        }))
    }

    function Nn(t, e) {
        function n(n) {
            function i(i) {
                i = Ie(i), zn(t, i.target) || (i = Rn(t, i), e.domHandlers[n].call(t, i))
            }

            Bn(e, n, i, {capture: !0})
        }

        sm.pointerEventsSupported ? y(w_.pointer, n) : sm.touchEventsSupported || y(w_.mouse, n)
    }

    function Bn(t, e, n, i) {
        t.mounted[e] = n, t.listenerOpts[e] = i, Ae(t.domTarget, e, n, i)
    }

    function Fn(t) {
        var e = t.mounted;
        for (var n in e) e.hasOwnProperty(n) && Pe(t.domTarget, n, e[n], t.listenerOpts[n]);
        t.mounted = {}
    }

    function Vn() {
        return [1, 0, 0, 1, 0, 0]
    }

    function Hn(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function Gn(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function Wn(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], o = e[0] * n[2] + e[2] * n[3],
            a = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
    }

    function Un(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function Xn(t, e, n) {
        var i = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], u = Math.sin(n), h = Math.cos(n);
        return t[0] = i * h + a * u, t[1] = -i * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t
    }

    function Yn(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function jn(t, e) {
        var n = e[0], i = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = n * a - o * i;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null
    }

    function qn(t) {
        var e = Vn();
        return Gn(e, t), e
    }

    function Zn(t) {
        return t > F_ || -F_ > t
    }

    function Kn(t, e) {
        return A_ || (A_ = bm().getContext("2d")), P_ !== e && (P_ = A_.font = e || ix), A_.measureText(t)
    }

    function $n(t, e) {
        e = e || ix;
        var n = nx[e];
        n || (n = nx[e] = new s_(500));
        var i = n.get(t);
        return null == i && (i = rx.measureText(t, e).width, n.put(t, i)), i
    }

    function Jn(t, e, n, i) {
        var r = $n(t, e), o = ni(e), a = ti(0, r, n), s = ei(0, o, i), l = new ex(a, s, r, o);
        return l
    }

    function Qn(t, e, n, i) {
        var r = ((t || "") + "").split("\n"), o = r.length;
        if (1 === o) return Jn(r[0], e, n, i);
        for (var a = new ex(0, 0, 0, 0), s = 0; s < r.length; s++) {
            var l = Jn(r[s], e, n, i);
            0 === s ? a.copy(l) : a.union(l)
        }
        return a
    }

    function ti(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function ei(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function ni(t) {
        return $n("国", t)
    }

    function ii(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function ri(t, e, n) {
        var i = e.position || "inside", r = null != e.distance ? e.distance : 5, o = n.height, a = n.width, s = o / 2,
            l = n.x, u = n.y, h = "left", c = "top";
        if (i instanceof Array) l += ii(i[0], n.width), u += ii(i[1], n.height), h = null, c = null; else switch (i) {
            case"left":
                l -= r, u += s, h = "right", c = "middle";
                break;
            case"right":
                l += r + a, u += s, c = "middle";
                break;
            case"top":
                l += a / 2, u -= r, h = "center", c = "bottom";
                break;
            case"bottom":
                l += a / 2, u += o + r, h = "center";
                break;
            case"inside":
                l += a / 2, u += s, h = "center", c = "middle";
                break;
            case"insideLeft":
                l += r, u += s, c = "middle";
                break;
            case"insideRight":
                l += a - r, u += s, h = "right", c = "middle";
                break;
            case"insideTop":
                l += a / 2, u += r, h = "center";
                break;
            case"insideBottom":
                l += a / 2, u += o - r, h = "center", c = "bottom";
                break;
            case"insideTopLeft":
                l += r, u += r;
                break;
            case"insideTopRight":
                l += a - r, u += r, h = "right";
                break;
            case"insideBottomLeft":
                l += r, u += o - r, c = "bottom";
                break;
            case"insideBottomRight":
                l += a - r, u += o - r, h = "right", c = "bottom"
        }
        return t = t || {}, t.x = l, t.y = u, t.align = h, t.verticalAlign = c, t
    }

    function oi(t, e, n, i, r) {
        n = n || {};
        var o = [];
        ui(t, "", t, e, n, i, o, r);
        var a = o.length, s = !1, l = n.done, u = n.aborted, h = function () {
            s = !0, a--, 0 >= a && (s ? l && l() : u && u())
        }, c = function () {
            a--, 0 >= a && (s ? l && l() : u && u())
        };
        a || l && l(), o.length > 0 && n.during && o[0].during(function (t, e) {
            n.during(e)
        });
        for (var p = 0; p < o.length; p++) {
            var f = o[p];
            h && f.done(h), c && f.aborted(c), f.start(n.easing, n.force)
        }
        return o
    }

    function ai(t, e, n) {
        for (var i = 0; n > i; i++) t[i] = e[i]
    }

    function si(t) {
        return g(t[0])
    }

    function li(t, e, n) {
        if (g(e[n])) if (g(t[n]) || (t[n] = []), P(e[n])) {
            var i = e[n].length;
            t[n].length !== i && (t[n] = new e[n].constructor(i), ai(t[n], e[n], i))
        } else {
            var r = e[n], o = t[n], a = r.length;
            if (si(r)) for (var s = r[0].length, l = 0; a > l; l++) o[l] ? ai(o[l], r[l], s) : o[l] = Array.prototype.slice.call(r[l]); else ai(o, r, a);
            o.length = r.length
        } else t[n] = e[n]
    }

    function ui(t, e, n, i, r, o, a, s) {
        for (var l = [], u = [], h = b(i), c = r.duration, f = r.delay, d = r.additive, y = r.setToFinal, v = !k(o), m = 0; m < h.length; m++) {
            var _ = h[m];
            if (null != n[_] && null != i[_] && (v || o[_])) if (k(i[_]) && !g(i[_])) {
                if (e) {
                    s || (n[_] = i[_], t.updateDuringAnimation(e));
                    continue
                }
                ui(t, _, n[_], i[_], r, o && o[_], a, s)
            } else l.push(_), u.push(_); else s || (n[_] = i[_], t.updateDuringAnimation(e), u.push(_))
        }
        var x = l.length;
        if (x > 0 || r.force && !a.length) {
            for (var w = t.animators, S = [], M = 0; M < w.length; M++) w[M].targetName === e && S.push(w[M]);
            if (!d && S.length) for (var M = 0; M < S.length; M++) {
                var T = S[M].stopTracks(u);
                if (T) {
                    var C = p(w, S[M]);
                    w.splice(C, 1)
                }
            }
            var I = void 0, D = void 0, A = void 0;
            if (s) {
                D = {}, y && (I = {});
                for (var M = 0; x > M; M++) {
                    var _ = l[M];
                    D[_] = n[_], y ? I[_] = i[_] : n[_] = i[_]
                }
            } else if (y) {
                A = {};
                for (var M = 0; x > M; M++) {
                    var _ = l[M];
                    A[_] = Dn(n[_]), li(n, i, _)
                }
            }
            var P = new v_(n, !1, d ? S : null);
            P.targetName = e, r.scope && (P.scope = r.scope), y && I && P.whenWithKeys(0, I, l), A && P.whenWithKeys(0, A, l), P.whenWithKeys(null == c ? 500 : c, s ? D : i, l).delay(f || 0), t.addAnimator(P, e), a.push(P)
        }
    }

    function hi(t) {
        delete dx[t]
    }

    function ci(t) {
        if (!t) return !1;
        if ("string" == typeof t) return gn(t, 1) < O_;
        if (t.colorStops) {
            for (var e = t.colorStops, n = 0, i = e.length, r = 0; i > r; r++) n += gn(e[r].color, 1);
            return n /= i, O_ > n
        }
        return !1
    }

    function pi(t, e) {
        var n = new gx(o(), t, e);
        return dx[n.id] = n, n
    }

    function fi(t) {
        t.dispose()
    }

    function di() {
        for (var t in dx) dx.hasOwnProperty(t) && dx[t].dispose();
        dx = {}
    }

    function gi(t) {
        return dx[t]
    }

    function yi(t, e) {
        fx[t] = e
    }

    function vi(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }

    function mi(t, e, n, i) {
        var r = e[0], o = e[1], a = n[0], s = n[1], l = o - r, u = s - a;
        if (0 === l) return 0 === u ? a : (a + s) / 2;
        if (i) if (l > 0) {
            if (r >= t) return a;
            if (t >= o) return s
        } else {
            if (t >= r) return a;
            if (o >= t) return s
        } else {
            if (t === r) return a;
            if (t === o) return s
        }
        return (t - r) / l * u + a
    }

    function _i(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? vi(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
    }

    function xi(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), _x), t = (+t).toFixed(e), n ? t : +t
    }

    function bi(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function wi(t) {
        if (t = +t, isNaN(t)) return 0;
        if (t > 1e-14) for (var e = 1, n = 0; 15 > n; n++, e *= 10) if (Math.round(t * e) / e === t) return n;
        return Si(t)
    }

    function Si(t) {
        var e = t.toString().toLowerCase(), n = e.indexOf("e"), i = n > 0 ? +e.slice(n + 1) : 0,
            r = n > 0 ? n : e.length, o = e.indexOf("."), a = 0 > o ? 0 : r - 1 - o;
        return Math.max(0, a - i)
    }

    function Mi(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            o = Math.round(n(Math.abs(e[1] - e[0])) / i), a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20
    }

    function Ti(t, e, n) {
        if (!t[e]) return 0;
        var i = m(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), o = v(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), a = 100 * r, s = v(o, function (t) {
            return Math.floor(t)
        }), l = m(s, function (t, e) {
            return t + e
        }, 0), u = v(o, function (t, e) {
            return t - s[e]
        }); a > l;) {
            for (var h = Number.NEGATIVE_INFINITY, c = null, p = 0, f = u.length; f > p; ++p) u[p] > h && (h = u[p], c = p);
            ++s[c], u[c] = 0, ++l
        }
        return s[e] / r
    }

    function Ci(t, e) {
        var n = Math.max(wi(t), wi(e)), i = t + e;
        return n > _x ? i : xi(i, n)
    }

    function Ii(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function Di(t) {
        return t > -mx && mx > t
    }

    function ki(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = bx.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0)
        }
        return new Date(null == t ? 0 / 0 : Math.round(t))
    }

    function Ai(t) {
        return Math.pow(10, Pi(t))
    }

    function Pi(t) {
        if (0 === t) return 0;
        var e = Math.floor(Math.log(t) / Math.LN10);
        return t / Math.pow(10, e) >= 10 && e++, e
    }

    function Li(t, e) {
        var n, i = Pi(t), r = Math.pow(10, i), o = t / r;
        return n = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
    }

    function Oi(t, e) {
        var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], o = n - i;
        return o ? r + o * (t[i] - r) : r
    }

    function Ri(t) {
        function e(t, n, i) {
            return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
        }

        t.sort(function (t, n) {
            return e(t, n, 0) ? -1 : 1
        });
        for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
            for (var o = t[r].interval, a = t[r].close, s = 0; 2 > s; s++) o[s] <= n && (o[s] = n, a[s] = s ? 1 : 1 - i), n = o[s], i = a[s];
            o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }

    function zi(t) {
        var e = parseFloat(t);
        return e == t && (0 !== e || "string" != typeof t || t.indexOf("x") <= 0) ? e : 0 / 0
    }

    function Ei(t) {
        return !isNaN(zi(t))
    }

    function Ni() {
        return Math.round(9 * Math.random())
    }

    function Bi(t, e) {
        return 0 === e ? t : Bi(e, t % e)
    }

    function Fi(t, e) {
        return null == t ? e : null == e ? t : t * e / Bi(t, e)
    }

    function Vi(t) {
        throw new Error(t)
    }

    function Hi(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function Gi(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; r > i; i++) {
                var o = n[i];
                !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o])
            }
        }
    }

    function Wi(t) {
        return !k(t) || M(t) || t instanceof Date ? t : t.value
    }

    function Ui(t) {
        return k(t) && !(t instanceof Array)
    }

    function Xi(t, e, n) {
        var i = "normalMerge" === n, r = "replaceMerge" === n, o = "replaceAll" === n;
        t = t || [], e = (e || []).slice();
        var a = Y();
        y(e, function (t, n) {
            return k(t) ? void 0 : void (e[n] = null)
        });
        var s = Yi(t, a, n);
        return (i || r) && ji(s, t, a, e), i && qi(s, e), i || r ? Zi(s, e, r) : o && Ki(s, e), $i(s), s
    }

    function Yi(t, e, n) {
        var i = [];
        if ("replaceAll" === n) return i;
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o && null != o.id && e.set(o.id, r), i.push({
                existing: "replaceMerge" === n || nr(o) ? null : o,
                newOption: null,
                keyInfo: null,
                brandNew: null
            })
        }
        return i
    }

    function ji(t, e, n, i) {
        y(i, function (r, o) {
            if (r && null != r.id) {
                var a = Qi(r.id), s = n.get(a);
                if (null != s) {
                    var l = t[s];
                    G(!l.newOption, 'Duplicated option on id "' + a + '".'), l.newOption = r, l.existing = e[s], i[o] = null
                }
            }
        })
    }

    function qi(t, e) {
        y(e, function (n, i) {
            if (n && null != n.name) for (var r = 0; r < t.length; r++) {
                var o = t[r].existing;
                if (!t[r].newOption && o && (null == o.id || null == n.id) && !nr(n) && !nr(o) && Ji("name", o, n)) return t[r].newOption = n, void (e[i] = null)
            }
        })
    }

    function Zi(t, e, n) {
        y(e, function (e) {
            if (e) {
                for (var i, r = 0; (i = t[r]) && (i.newOption || nr(i.existing) || i.existing && null != e.id && !Ji("id", e, i.existing));) r++;
                i ? (i.newOption = e, i.brandNew = n) : t.push({
                    newOption: e,
                    brandNew: n,
                    existing: null,
                    keyInfo: null
                }), r++
            }
        })
    }

    function Ki(t, e) {
        y(e, function (e) {
            t.push({newOption: e, brandNew: !0, existing: null, keyInfo: null})
        })
    }

    function $i(t) {
        var e = Y();
        y(t, function (t) {
            var n = t.existing;
            n && e.set(n.id, t)
        }), y(t, function (t) {
            var n = t.newOption;
            G(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
        }), y(t, function (t, n) {
            var i = t.existing, r = t.newOption, o = t.keyInfo;
            if (k(r)) {
                if (o.name = null != r.name ? Qi(r.name) : i ? i.name : Sx + n, i) o.id = Qi(i.id); else if (null != r.id) o.id = Qi(r.id); else {
                    var a = 0;
                    do o.id = "\x00" + o.name + "\x00" + a++; while (e.get(o.id))
                }
                e.set(o.id, t)
            }
        })
    }

    function Ji(t, e, n) {
        var i = tr(e[t], null), r = tr(n[t], null);
        return null != i && null != r && i === r
    }

    function Qi(t) {
        return tr(t, "")
    }

    function tr(t, e) {
        if (null == t) return e;
        var n = typeof t;
        return "string" === n ? t : "number" === n || I(t) ? t + "" : e
    }

    function er(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Sx))
    }

    function nr(t) {
        return t && null != t.id && 0 === Qi(t.id).indexOf(Mx)
    }

    function ir(t, e, n) {
        y(t, function (t) {
            var i = t.newOption;
            k(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = rr(e, i, t.existing, n))
        })
    }

    function rr(t, e, n, i) {
        var r = e.type ? e.type : n ? n.subType : i.determineSubType(t, e);
        return r
    }

    function or(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? M(e.dataIndex) ? v(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? M(e.name) ? v(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function ar() {
        var t = "__ec_inner_" + Cx++;
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function sr(t, e, n) {
        var i = lr(e, n), r = i.mainTypeSpecified, o = i.queryOptionMap, a = i.others, s = a,
            l = n ? n.defaultMainType : null;
        return !r && l && o.set(l, {}), o.each(function (e, i) {
            var r = ur(t, i, e, {
                useDefault: l === i,
                enableAll: n && null != n.enableAll ? n.enableAll : !0,
                enableNone: n && null != n.enableNone ? n.enableNone : !0
            });
            s[i + "Models"] = r.models, s[i + "Model"] = r.models[0]
        }), s
    }

    function lr(t, e) {
        var n;
        if (C(t)) {
            var i = {};
            i[t + "Index"] = 0, n = i
        } else n = t;
        var r = Y(), o = {}, a = !1;
        return y(n, function (t, n) {
            if ("dataIndex" === n || "dataIndexInside" === n) return void (o[n] = t);
            var i = n.match(/^(\w+)(Index|Id|Name)$/) || [], s = i[1], l = (i[2] || "").toLowerCase();
            if (s && l && !(e && e.includeMainTypes && p(e.includeMainTypes, s) < 0)) {
                a = a || !!s;
                var u = r.get(s) || r.set(s, {});
                u[l] = t
            }
        }), {mainTypeSpecified: a, queryOptionMap: r, others: o}
    }

    function ur(t, e, n, i) {
        i = i || Ix;
        var r = n.index, o = n.id, a = n.name, s = {models: null, specified: null != r || null != o || null != a};
        if (!s.specified) {
            var l = void 0;
            return s.models = i.useDefault && (l = t.getComponent(e)) ? [l] : [], s
        }
        return "none" === r || r === !1 ? (G(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : ("all" === r && (G(i.enableAll, '`"all"` is not a valid value on index option.'), r = o = a = null), s.models = t.queryComponents({
            mainType: e,
            index: r,
            id: o,
            name: a
        }), s)
    }

    function hr(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }

    function cr(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function pr(t) {
        return "auto" === t ? sm.domSupported ? "html" : "richText" : t || "html"
    }

    function fr(t, e) {
        var n = Y(), i = [];
        return y(t, function (t) {
            var r = e(t);
            (n.get(r) || (i.push(r), n.set(r, []))).push(t)
        }), {keys: i, buckets: n}
    }

    function dr(t, e, n, i, r) {
        var o = null == e || "auto" === e;
        if (null == i) return i;
        if ("number" == typeof i) {
            var a = vn(n || 0, i, r);
            return xi(a, o ? Math.max(wi(n || 0), wi(i)) : e)
        }
        if ("string" == typeof i) return 1 > r ? n : i;
        for (var s = [], l = n, u = i, h = Math.max(l ? l.length : 0, u.length), c = 0; h > c; ++c) {
            var p = t.getDimensionInfo(c);
            if (p && "ordinal" === p.type) s[c] = (1 > r && l ? l : u)[c]; else {
                var f = l && l[c] ? l[c] : 0, d = u[c], a = vn(f, d, r);
                s[c] = xi(a, o ? Math.max(wi(f), wi(d)) : e)
            }
        }
        return s
    }

    function gr(t) {
        var e = {main: "", sub: ""};
        if (t) {
            var n = t.split(Dx);
            e.main = n[0] || "", e.sub = n[1] || ""
        }
        return e
    }

    function yr(t) {
        G(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function vr(t) {
        return !(!t || !t[Ax])
    }

    function mr(t) {
        t.$constructor = t, t.extend = function (t) {
            function e() {
                for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                if (t.$constructor) t.$constructor.apply(this, arguments); else {
                    if (_r(i)) {
                        var a = q(e.prototype, new (i.bind.apply(i, n([void 0], r))));
                        return a
                    }
                    i.apply(this, arguments)
                }
            }

            var i = this;
            return e[Ax] = !0, h(e.prototype, t), e.extend = this.extend, e.superCall = wr, e.superApply = Sr, f(e, this), e.superClass = i, e
        }
    }

    function _r(t) {
        return "function" == typeof t && /^class\s/.test(Function.prototype.toString.call(t))
    }

    function xr(t, e) {
        t.extend = e.extend
    }

    function br(t) {
        var e = ["__\x00is_clz", Px++].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function wr(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return this.superClass.prototype[e].apply(t, n)
    }

    function Sr(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function Mr(t) {
        function e(t) {
            var e = n[t.main];
            return e && e[kx] || (e = n[t.main] = {}, e[kx] = !0), e
        }

        var n = {};
        t.registerClass = function (t) {
            var i = t.type || t.prototype.type;
            if (i) {
                yr(i), t.prototype.type = i;
                var r = gr(i);
                if (r.sub) {
                    if (r.sub !== kx) {
                        var o = e(r);
                        o[r.sub] = t
                    }
                } else n[r.main] = t
            }
            return t
        }, t.getClass = function (t, e, i) {
            var r = n[t];
            if (r && r[kx] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " is used but not imported." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            var e = gr(t), i = [], r = n[e.main];
            return r && r[kx] ? y(r, function (t, e) {
                e !== kx && i.push(t)
            }) : i.push(r), i
        }, t.hasClass = function (t) {
            var e = gr(t);
            return !!n[e.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return y(n, function (e, n) {
                t.push(n)
            }), t
        }, t.hasSubTypes = function (t) {
            var e = gr(t), i = n[e.main];
            return i && i[kx]
        }
    }

    function Tr(t, e) {
        for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0]);
        return e = e || !1, function (n, i, r) {
            for (var o = {}, a = 0; a < t.length; a++) {
                var s = t[a][1];
                if (!(i && p(i, s) >= 0 || r && p(r, s) < 0)) {
                    var l = n.getShallow(s, e);
                    null != l && (o[t[a][0]] = l)
                }
            }
            return o
        }
    }

    function Cr(t) {
        if ("string" == typeof t) {
            var e = zx.get(t);
            return e && e.image
        }
        return t
    }

    function Ir(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var o = zx.get(t), a = {hostEl: n, cb: i, cbPayload: r};
                return o ? (e = o.image, !kr(e) && o.pending.push(a)) : (e = new Image, e.onload = e.onerror = Dr, zx.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [a]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Dr() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function kr(t) {
        return t && t.width && t.height
    }

    function Ar(t, e, n, i, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = Pr(e, n, i, r);
        for (var a = 0, s = o.length; s > a; a++) o[a] = Lr(o[a], r);
        return o.join("\n")
    }

    function Pr(t, e, n, i) {
        i = i || {};
        var r = h({}, i);
        r.font = e, n = B(n, "..."), r.maxIterations = B(i.maxIterations, 2);
        var o = r.minChar = B(i.minChar, 0);
        r.cnCharWidth = $n("国", e);
        var a = r.ascCharWidth = $n("a", e);
        r.placeholder = B(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; o > l && s >= a; l++) s -= a;
        var u = $n(n, e);
        return u > s && (n = "", u = 0), s = t - u, r.ellipsis = n, r.ellipsisWidth = u, r.contentWidth = s, r.containerWidth = t, r
    }

    function Lr(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var o = $n(t, i);
        if (n >= o) return t;
        for (var a = 0; ; a++) {
            if (r >= o || a >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === a ? Or(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
            t = t.substr(0, s), o = $n(t, i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function Or(t, e, n, i) {
        for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
            var s = t.charCodeAt(o);
            r += s >= 0 && 127 >= s ? n : i
        }
        return o
    }

    function Rr(t, e) {
        null != t && (t += "");
        var n, i = e.overflow, r = e.padding, o = e.font, a = "truncate" === i, s = ni(o), l = B(e.lineHeight, s),
            u = "truncate" === e.lineOverflow, h = e.width;
        n = null != h && "break" === i || "breakAll" === i ? t ? Fr(t, e.font, h, "breakAll" === i, 0).lines : [] : t ? t.split("\n") : [];
        var c = n.length * l, p = B(e.height, c);
        if (c > p && u) {
            var f = Math.floor(p / l);
            n = n.slice(0, f)
        }
        var d = p, g = h;
        if (r && (d += r[0] + r[2], null != g && (g += r[1] + r[3])), t && a && null != g) for (var y = Pr(h, o, e.ellipsis, {
            minChar: e.truncateMinChar,
            placeholder: e.placeholder
        }), v = 0; v < n.length; v++) n[v] = Lr(n[v], y);
        if (null == h) {
            for (var m = 0, v = 0; v < n.length; v++) m = Math.max($n(n[v], o), m);
            h = m
        }
        return {lines: n, height: p, outerHeight: d, lineHeight: l, calculatedLineHeight: s, contentHeight: c, width: h}
    }

    function zr(t, e) {
        function n(t, e, n) {
            t.width = e, t.lineHeight = n, p += n, f = Math.max(f, e)
        }

        var i = new Fx;
        if (null != t && (t += ""), !t) return i;
        for (var r, o = e.width, a = e.height, s = e.overflow, l = "break" !== s && "breakAll" !== s || null == o ? null : {
            width: o,
            accumWidth: 0,
            breakAll: "breakAll" === s
        }, u = Ex.lastIndex = 0; null != (r = Ex.exec(t));) {
            var h = r.index;
            h > u && Er(i, t.substring(u, h), e, l), Er(i, r[2], e, l, r[1]), u = Ex.lastIndex
        }
        u < t.length && Er(i, t.substring(u, t.length), e, l);
        var c = [], p = 0, f = 0, d = e.padding, g = "truncate" === s, y = "truncate" === e.lineOverflow;
        t:for (var v = 0; v < i.lines.length; v++) {
            for (var m = i.lines[v], _ = 0, x = 0, b = 0; b < m.tokens.length; b++) {
                var w = m.tokens[b], S = w.styleName && e.rich[w.styleName] || {}, M = w.textPadding = S.padding,
                    T = M ? M[1] + M[3] : 0, C = w.font = S.font || e.font;
                w.contentHeight = ni(C);
                var I = B(S.height, w.contentHeight);
                if (w.innerHeight = I, M && (I += M[0] + M[2]), w.height = I, w.lineHeight = F(S.lineHeight, e.lineHeight, I), w.align = S && S.align || e.align, w.verticalAlign = S && S.verticalAlign || "middle", y && null != a && p + w.lineHeight > a) {
                    b > 0 ? (m.tokens = m.tokens.slice(0, b), n(m, x, _), i.lines = i.lines.slice(0, v + 1)) : i.lines = i.lines.slice(0, v);
                    break t
                }
                var D = S.width, k = null == D || "auto" === D;
                if ("string" == typeof D && "%" === D.charAt(D.length - 1)) w.percentWidth = D, c.push(w), w.contentWidth = $n(w.text, C); else {
                    if (k) {
                        var A = S.backgroundColor, P = A && A.image;
                        P && (P = Cr(P), kr(P) && (w.width = Math.max(w.width, P.width * I / P.height)))
                    }
                    var L = g && null != o ? o - x : null;
                    null != L && L < w.width ? !k || T > L ? (w.text = "", w.width = w.contentWidth = 0) : (w.text = Ar(w.text, L - T, C, e.ellipsis, {minChar: e.truncateMinChar}), w.width = w.contentWidth = $n(w.text, C)) : w.contentWidth = $n(w.text, C)
                }
                w.width += T, x += w.width, S && (_ = Math.max(_, w.lineHeight))
            }
            n(m, x, _)
        }
        i.outerWidth = i.width = B(o, f), i.outerHeight = i.height = B(a, p), i.contentHeight = p, i.contentWidth = f, d && (i.outerWidth += d[1] + d[3], i.outerHeight += d[0] + d[2]);
        for (var v = 0; v < c.length; v++) {
            var w = c[v], O = w.percentWidth;
            w.width = parseInt(O, 10) / 100 * i.width
        }
        return i
    }

    function Er(t, e, n, i, r) {
        var o, a, s = "" === e, l = r && n.rich[r] || {}, u = t.lines, h = l.font || n.font, c = !1;
        if (i) {
            var p = l.padding, f = p ? p[1] + p[3] : 0;
            if (null != l.width && "auto" !== l.width) {
                var d = ii(l.width, i.width) + f;
                u.length > 0 && d + i.accumWidth > i.width && (o = e.split("\n"), c = !0), i.accumWidth = d
            } else {
                var g = Fr(e, h, i.width, i.breakAll, i.accumWidth);
                i.accumWidth = g.accumWidth + f, a = g.linesWidths, o = g.lines
            }
        } else o = e.split("\n");
        for (var y = 0; y < o.length; y++) {
            var v = o[y], m = new Nx;
            if (m.styleName = r, m.text = v, m.isLineHolder = !v && !s, m.width = "number" == typeof l.width ? l.width : a ? a[y] : $n(v, h), y || c) u.push(new Bx([m])); else {
                var _ = (u[u.length - 1] || (u[0] = new Bx)).tokens, x = _.length;
                1 === x && _[0].isLineHolder ? _[0] = m : (v || !x || s) && _.push(m)
            }
        }
    }

    function Nr(t) {
        var e = t.charCodeAt(0);
        return e >= 33 && 255 >= e
    }

    function Br(t) {
        return Nr(t) ? Vx[t] ? !0 : !1 : !0
    }

    function Fr(t, e, n, i, r) {
        for (var o = [], a = [], s = "", l = "", u = 0, h = 0, c = 0; c < t.length; c++) {
            var p = t.charAt(c);
            if ("\n" !== p) {
                var f = $n(p, e), d = i ? !1 : !Br(p);
                (o.length ? h + f > n : r + h + f > n) ? h ? (s || l) && (d ? (s || (s = l, l = "", u = 0, h = u), o.push(s), a.push(h - u), l += p, u += f, s = "", h = u) : (l && (s += l, h += u, l = "", u = 0), o.push(s), a.push(h), s = p, h = f)) : d ? (o.push(l), a.push(u), l = p, u = f) : (o.push(p), a.push(f)) : (h += f, d ? (l += p, u += f) : (l && (s += l, l = "", u = 0), s += p))
            } else l && (s += l, h += u), o.push(s), a.push(h), s = "", l = "", u = 0, h = 0
        }
        return o.length || s || (s = t, l = "", u = 0), l && (s += l), s && (o.push(s), a.push(h)), 1 === o.length && (h += r), {
            accumWidth: h,
            lines: o,
            linesWidths: a
        }
    }

    function Vr(t, e, n) {
        return jx.copy(t.getBoundingRect()), t.transform && jx.applyTransform(t.transform), qx.width = e, qx.height = n, !jx.intersect(qx)
    }

    function Hr(t) {
        return t > -$x && $x > t
    }

    function Gr(t) {
        return t > $x || -$x > t
    }

    function Wr(t, e, n, i, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
    }

    function Ur(t, e, n, i, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
    }

    function Xr(t, e, n, i, r, o) {
        var a = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), u = t - r, h = s * s - 3 * a * l,
            c = s * l - 9 * a * u, p = l * l - 3 * s * u, f = 0;
        if (Hr(h) && Hr(c)) if (Hr(s)) o[0] = 0; else {
            var d = -l / s;
            d >= 0 && 1 >= d && (o[f++] = d)
        } else {
            var g = c * c - 4 * h * p;
            if (Hr(g)) {
                var y = c / h, d = -s / a + y, v = -y / 2;
                d >= 0 && 1 >= d && (o[f++] = d), v >= 0 && 1 >= v && (o[f++] = v)
            } else if (g > 0) {
                var m = Kx(g), _ = h * s + 1.5 * a * (-c + m), x = h * s + 1.5 * a * (-c - m);
                _ = 0 > _ ? -Zx(-_, tb) : Zx(_, tb), x = 0 > x ? -Zx(-x, tb) : Zx(x, tb);
                var d = (-s - (_ + x)) / (3 * a);
                d >= 0 && 1 >= d && (o[f++] = d)
            } else {
                var b = (2 * h * s - 3 * a * c) / (2 * Kx(h * h * h)), w = Math.acos(b) / 3, S = Kx(h), M = Math.cos(w),
                    d = (-s - 2 * S * M) / (3 * a), v = (-s + S * (M + Qx * Math.sin(w))) / (3 * a),
                    T = (-s + S * (M - Qx * Math.sin(w))) / (3 * a);
                d >= 0 && 1 >= d && (o[f++] = d), v >= 0 && 1 >= v && (o[f++] = v), T >= 0 && 1 >= T && (o[f++] = T)
            }
        }
        return f
    }

    function Yr(t, e, n, i, r) {
        var o = 6 * n - 12 * e + 6 * t, a = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (Hr(a)) {
            if (Gr(o)) {
                var u = -s / o;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = o * o - 4 * a * s;
            if (Hr(h)) r[0] = -o / (2 * a); else if (h > 0) {
                var c = Kx(h), u = (-o + c) / (2 * a), p = (-o - c) / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p)
            }
        }
        return l
    }

    function jr(t, e, n, i, r, o) {
        var a = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, u = (s - a) * r + a, h = (l - s) * r + s,
            c = (h - u) * r + u;
        o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i
    }

    function qr(t, e, n, i, r, o, a, s, l, u, h) {
        var c, p, f, d, g, y = .005, v = 1 / 0;
        eb[0] = l, eb[1] = u;
        for (var m = 0; 1 > m; m += .05) nb[0] = Wr(t, n, r, a, m), nb[1] = Wr(e, i, o, s, m), d = km(eb, nb), v > d && (c = m, v = d);
        v = 1 / 0;
        for (var _ = 0; 32 > _ && !(Jx > y); _++) p = c - y, f = c + y, nb[0] = Wr(t, n, r, a, p), nb[1] = Wr(e, i, o, s, p), d = km(nb, eb), p >= 0 && v > d ? (c = p, v = d) : (ib[0] = Wr(t, n, r, a, f), ib[1] = Wr(e, i, o, s, f), g = km(ib, eb), 1 >= f && v > g ? (c = f, v = g) : y *= .5);
        return h && (h[0] = Wr(t, n, r, a, c), h[1] = Wr(e, i, o, s, c)), Kx(v)
    }

    function Zr(t, e, n, i, r, o, a, s, l) {
        for (var u = t, h = e, c = 0, p = 1 / l, f = 1; l >= f; f++) {
            var d = f * p, g = Wr(t, n, r, a, d), y = Wr(e, i, o, s, d), v = g - u, m = y - h;
            c += Math.sqrt(v * v + m * m), u = g, h = y
        }
        return c
    }

    function Kr(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function $r(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function Jr(t, e, n, i, r) {
        var o = t - 2 * e + n, a = 2 * (e - t), s = t - i, l = 0;
        if (Hr(o)) {
            if (Gr(a)) {
                var u = -s / a;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = a * a - 4 * o * s;
            if (Hr(h)) {
                var u = -a / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u)
            } else if (h > 0) {
                var c = Kx(h), u = (-a + c) / (2 * o), p = (-a - c) / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p)
            }
        }
        return l
    }

    function Qr(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function to(t, e, n, i, r) {
        var o = (e - t) * i + t, a = (n - e) * i + e, s = (a - o) * i + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n
    }

    function eo(t, e, n, i, r, o, a, s, l) {
        var u, h = .005, c = 1 / 0;
        eb[0] = a, eb[1] = s;
        for (var p = 0; 1 > p; p += .05) {
            nb[0] = Kr(t, n, r, p), nb[1] = Kr(e, i, o, p);
            var f = km(eb, nb);
            c > f && (u = p, c = f)
        }
        c = 1 / 0;
        for (var d = 0; 32 > d && !(Jx > h); d++) {
            var g = u - h, y = u + h;
            nb[0] = Kr(t, n, r, g), nb[1] = Kr(e, i, o, g);
            var f = km(nb, eb);
            if (g >= 0 && c > f) u = g, c = f; else {
                ib[0] = Kr(t, n, r, y), ib[1] = Kr(e, i, o, y);
                var v = km(ib, eb);
                1 >= y && c > v ? (u = y, c = v) : h *= .5
            }
        }
        return l && (l[0] = Kr(t, n, r, u), l[1] = Kr(e, i, o, u)), Kx(c)
    }

    function no(t, e, n, i, r, o, a) {
        for (var s = t, l = e, u = 0, h = 1 / a, c = 1; a >= c; c++) {
            var p = c * h, f = Kr(t, n, r, p), d = Kr(e, i, o, p), g = f - s, y = d - l;
            u += Math.sqrt(g * g + y * y), s = f, l = d
        }
        return u
    }

    function io(t, e, n) {
        if (0 !== t.length) {
            for (var i = t[0], r = i[0], o = i[0], a = i[1], s = i[1], l = 1; l < t.length; l++) i = t[l], r = rb(r, i[0]), o = ob(o, i[0]), a = rb(a, i[1]), s = ob(s, i[1]);
            e[0] = r, e[1] = a, n[0] = o, n[1] = s
        }
    }

    function ro(t, e, n, i, r, o) {
        r[0] = rb(t, n), r[1] = rb(e, i), o[0] = ob(t, n), o[1] = ob(e, i)
    }

    function oo(t, e, n, i, r, o, a, s, l, u) {
        var h = Yr, c = Wr, p = h(t, n, r, a, pb);
        l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
        for (var f = 0; p > f; f++) {
            var d = c(t, n, r, a, pb[f]);
            l[0] = rb(d, l[0]), u[0] = ob(d, u[0])
        }
        p = h(e, i, o, s, fb);
        for (var f = 0; p > f; f++) {
            var g = c(e, i, o, s, fb[f]);
            l[1] = rb(g, l[1]), u[1] = ob(g, u[1])
        }
        l[0] = rb(t, l[0]), u[0] = ob(t, u[0]), l[0] = rb(a, l[0]), u[0] = ob(a, u[0]), l[1] = rb(e, l[1]), u[1] = ob(e, u[1]), l[1] = rb(s, l[1]), u[1] = ob(s, u[1])
    }

    function ao(t, e, n, i, r, o, a, s) {
        var l = Qr, u = Kr, h = ob(rb(l(t, n, r), 1), 0), c = ob(rb(l(e, i, o), 1), 0), p = u(t, n, r, h),
            f = u(e, i, o, c);
        a[0] = rb(t, r, p), a[1] = rb(e, o, f), s[0] = ob(t, r, p), s[1] = ob(e, o, f)
    }

    function so(t, e, n, i, r, o, a, s, l) {
        var u = ye, h = ve, c = Math.abs(r - o);
        if (1e-4 > c % lb && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);
        if (ub[0] = sb(r) * n + t, ub[1] = ab(r) * i + e, hb[0] = sb(o) * n + t, hb[1] = ab(o) * i + e, u(s, ub, hb), h(l, ub, hb), r %= lb, 0 > r && (r += lb), o %= lb, 0 > o && (o += lb), r > o && !a ? o += lb : o > r && a && (r += lb), a) {
            var p = o;
            o = r, r = p
        }
        for (var f = 0; o > f; f += Math.PI / 2) f > r && (cb[0] = sb(f) * n + t, cb[1] = ab(f) * i + e, u(s, cb, s), h(l, cb, l))
    }

    function lo(t) {
        var e = Math.round(t / Ib * 1e8) / 1e8;
        return e % 2 * Ib
    }

    function uo(t, e) {
        var n = lo(t[0]);
        0 > n && (n += Db);
        var i = n - t[0], r = t[1];
        r += i, !e && r - n >= Db ? r = n + Db : e && n - r >= Db ? r = n - Db : !e && n > r ? r = n + (Db - lo(n - r)) : e && r > n && (r = n - (Db - lo(r - n))), t[0] = n, t[1] = r
    }

    function ho(t, e, n, i, r, o, a) {
        if (0 === r) return !1;
        var s = r, l = 0, u = t;
        if (a > e + s && a > i + s || e - s > a && i - s > a || o > t + s && o > n + s || t - s > o && n - s > o) return !1;
        if (t === n) return Math.abs(o - t) <= s / 2;
        l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
        var h = l * o - a + u, c = h * h / (l * l + 1);
        return s / 2 * s / 2 >= c
    }

    function co(t, e, n, i, r, o, a, s, l, u, h) {
        if (0 === l) return !1;
        var c = l;
        if (h > e + c && h > i + c && h > o + c && h > s + c || e - c > h && i - c > h && o - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > a + c || t - c > u && n - c > u && r - c > u && a - c > u) return !1;
        var p = qr(t, e, n, i, r, o, a, s, u, h, null);
        return c / 2 >= p
    }

    function po(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        if (l > e + u && l > i + u && l > o + u || e - u > l && i - u > l && o - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
        var h = eo(t, e, n, i, r, o, s, l, null);
        return u / 2 >= h
    }

    function fo(t) {
        return t %= Lb, 0 > t && (t += Lb), t
    }

    function go(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        s -= t, l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > n || n > h + u) return !1;
        if (Math.abs(i - r) % Ob < 1e-4) return !0;
        if (o) {
            var c = i;
            i = fo(r), r = fo(c)
        } else i = fo(i), r = fo(r);
        i > r && (r += Ob);
        var p = Math.atan2(l, s);
        return 0 > p && (p += Ob), p >= i && r >= p || p + Ob >= i && r >= p + Ob
    }

    function yo(t, e, n, i, r, o) {
        if (o > e && o > i || e > o && i > o) return 0;
        if (i === e) return 0;
        var a = (o - e) / (i - e), s = e > i ? 1 : -1;
        (1 === a || 0 === a) && (s = e > i ? .5 : -.5);
        var l = a * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? s : 0
    }

    function vo(t, e) {
        return Math.abs(t - e) < Eb
    }

    function mo() {
        var t = Bb[0];
        Bb[0] = Bb[1], Bb[1] = t
    }

    function _o(t, e, n, i, r, o, a, s, l, u) {
        if (u > e && u > i && u > o && u > s || e > u && i > u && o > u && s > u) return 0;
        var h = Xr(e, i, o, s, u, Nb);
        if (0 === h) return 0;
        for (var c = 0, p = -1, f = void 0, d = void 0, g = 0; h > g; g++) {
            var y = Nb[g], v = 0 === y || 1 === y ? .5 : 1, m = Wr(t, n, r, a, y);
            l > m || (0 > p && (p = Yr(e, i, o, s, Bb), Bb[1] < Bb[0] && p > 1 && mo(), f = Wr(e, i, o, s, Bb[0]), p > 1 && (d = Wr(e, i, o, s, Bb[1]))), c += 2 === p ? y < Bb[0] ? e > f ? v : -v : y < Bb[1] ? f > d ? v : -v : d > s ? v : -v : y < Bb[0] ? e > f ? v : -v : f > s ? v : -v)
        }
        return c
    }

    function xo(t, e, n, i, r, o, a, s) {
        if (s > e && s > i && s > o || e > s && i > s && o > s) return 0;
        var l = Jr(e, i, o, s, Nb);
        if (0 === l) return 0;
        var u = Qr(e, i, o);
        if (u >= 0 && 1 >= u) {
            for (var h = 0, c = Kr(e, i, o, u), p = 0; l > p; p++) {
                var f = 0 === Nb[p] || 1 === Nb[p] ? .5 : 1, d = Kr(t, n, r, Nb[p]);
                a > d || (h += Nb[p] < u ? e > c ? f : -f : c > o ? f : -f)
            }
            return h
        }
        var f = 0 === Nb[0] || 1 === Nb[0] ? .5 : 1, d = Kr(t, n, r, Nb[0]);
        return a > d ? 0 : e > o ? f : -f
    }

    function bo(t, e, n, i, r, o, a, s) {
        if (s -= e, s > n || -n > s) return 0;
        var l = Math.sqrt(n * n - s * s);
        Nb[0] = -l, Nb[1] = l;
        var u = Math.abs(i - r);
        if (1e-4 > u) return 0;
        if (u >= zb - 1e-4) {
            i = 0, r = zb;
            var h = o ? 1 : -1;
            return a >= Nb[0] + t && a <= Nb[1] + t ? h : 0
        }
        if (i > r) {
            var c = i;
            i = r, r = c
        }
        0 > i && (i += zb, r += zb);
        for (var p = 0, f = 0; 2 > f; f++) {
            var d = Nb[f];
            if (d + t > a) {
                var g = Math.atan2(s, d), h = o ? 1 : -1;
                0 > g && (g = zb + g), (g >= i && r >= g || g + zb >= i && r >= g + zb) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), p += h)
            }
        }
        return p
    }

    function wo(t, e, n, i, r) {
        for (var o, a, s = t.data, l = t.len(), u = 0, h = 0, c = 0, p = 0, f = 0, d = 0; l > d;) {
            var g = s[d++], y = 1 === d;
            switch (g === Rb.M && d > 1 && (n || (u += yo(h, c, p, f, i, r))), y && (h = s[d], c = s[d + 1], p = h, f = c), g) {
                case Rb.M:
                    p = s[d++], f = s[d++], h = p, c = f;
                    break;
                case Rb.L:
                    if (n) {
                        if (ho(h, c, s[d], s[d + 1], e, i, r)) return !0
                    } else u += yo(h, c, s[d], s[d + 1], i, r) || 0;
                    h = s[d++], c = s[d++];
                    break;
                case Rb.C:
                    if (n) {
                        if (co(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0
                    } else u += _o(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
                    h = s[d++], c = s[d++];
                    break;
                case Rb.Q:
                    if (n) {
                        if (po(h, c, s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0
                    } else u += xo(h, c, s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
                    h = s[d++], c = s[d++];
                    break;
                case Rb.A:
                    var v = s[d++], m = s[d++], _ = s[d++], x = s[d++], b = s[d++], w = s[d++];
                    d += 1;
                    var S = !!(1 - s[d++]);
                    o = Math.cos(b) * _ + v, a = Math.sin(b) * x + m, y ? (p = o, f = a) : u += yo(h, c, o, a, i, r);
                    var M = (i - v) * x / _ + v;
                    if (n) {
                        if (go(v, m, x, b, b + w, S, e, M, r)) return !0
                    } else u += bo(v, m, x, b, b + w, S, M, r);
                    h = Math.cos(b + w) * _ + v, c = Math.sin(b + w) * x + m;
                    break;
                case Rb.R:
                    p = h = s[d++], f = c = s[d++];
                    var T = s[d++], C = s[d++];
                    if (o = p + T, a = f + C, n) {
                        if (ho(p, f, o, f, e, i, r) || ho(o, f, o, a, e, i, r) || ho(o, a, p, a, e, i, r) || ho(p, a, p, f, e, i, r)) return !0
                    } else u += yo(o, f, o, a, i, r), u += yo(p, a, p, f, i, r);
                    break;
                case Rb.Z:
                    if (n) {
                        if (ho(h, c, p, f, e, i, r)) return !0
                    } else u += yo(h, c, p, f, i, r);
                    h = p, c = f
            }
        }
        return n || vo(c, f) || (u += yo(h, c, p, f, i, r) || 0), 0 !== u
    }

    function So(t, e, n) {
        return wo(t, 0, !1, e, n)
    }

    function Mo(t, e, n, i) {
        return wo(t, e, !0, n, i)
    }

    function To(t) {
        return !!(t && "string" != typeof t && t.width && t.height)
    }

    function Co(t, e) {
        var n, i, r, o, a = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
        0 > l && (a += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = o = h : h instanceof Array ? 1 === h.length ? n = i = r = o = h[0] : 2 === h.length ? (n = r = h[0], i = o = h[1]) : 3 === h.length ? (n = h[0], i = o = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], o = h[3]) : n = i = r = o = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + o > u && (c = n + o, n *= u / c, o *= u / c), t.moveTo(a + n, s), t.lineTo(a + l - i, s), 0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(a + l, s + u - r), 0 !== r && t.arc(a + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(a + o, s + u), 0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI), t.lineTo(a, s + n), 0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }

    function Io(t, e, n) {
        if (e) {
            var i = e.x1, r = e.x2, o = e.y1, a = e.y2;
            t.x1 = i, t.x2 = r, t.y1 = o, t.y2 = a;
            var s = n && n.lineWidth;
            return s ? (qb(2 * i) === qb(2 * r) && (t.x1 = t.x2 = ko(i, s, !0)), qb(2 * o) === qb(2 * a) && (t.y1 = t.y2 = ko(o, s, !0)), t) : t
        }
    }

    function Do(t, e, n) {
        if (e) {
            var i = e.x, r = e.y, o = e.width, a = e.height;
            t.x = i, t.y = r, t.width = o, t.height = a;
            var s = n && n.lineWidth;
            return s ? (t.x = ko(i, s, !0), t.y = ko(r, s, !0), t.width = Math.max(ko(i + o, s, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(ko(r + a, s, !1) - t.y, 0 === a ? 0 : 1), t) : t
        }
    }

    function ko(t, e, n) {
        if (!e) return t;
        var i = qb(2 * t);
        return (i + qb(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function Ao(t) {
        return Po(t), y(t.rich, Po), t
    }

    function Po(t) {
        if (t) {
            t.font = ew.makeFont(t);
            var e = t.align;
            "middle" === e && (e = "center"), t.align = null == e || nw[e] ? e : "left";
            var n = t.verticalAlign;
            "center" === n && (n = "middle"), t.verticalAlign = null == n || iw[n] ? n : "top";
            var i = t.padding;
            i && (t.padding = H(t.padding))
        }
    }

    function Lo(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Oo(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Ro(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function zo(t) {
        var e = t.text;
        return null != e && (e += ""), e
    }

    function Eo(t) {
        return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor)
    }

    function No(t) {
        return null != t && "none" !== t
    }

    function Bo(t) {
        if ("string" != typeof t) return t;
        var e = bw.get(t);
        return e || (e = ln(t, -.1), bw.put(t, e)), e
    }

    function Fo(t, e, n) {
        t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e), t.hoverState = n
    }

    function Vo(t) {
        Fo(t, "emphasis", cw)
    }

    function Ho(t) {
        t.hoverState === cw && Fo(t, "normal", uw)
    }

    function Go(t) {
        Fo(t, "blur", hw)
    }

    function Wo(t) {
        t.hoverState === hw && Fo(t, "normal", uw)
    }

    function Uo(t) {
        t.selected = !0
    }

    function Xo(t) {
        t.selected = !1
    }

    function Yo(t, e, n) {
        e(t, n)
    }

    function jo(t, e, n) {
        Yo(t, e, n), t.isGroup && t.traverse(function (t) {
            Yo(t, e, n)
        })
    }

    function qo(t, e) {
        switch (e) {
            case"emphasis":
                t.hoverState = cw;
                break;
            case"normal":
                t.hoverState = uw;
                break;
            case"blur":
                t.hoverState = hw;
                break;
            case"select":
                t.selected = !0
        }
    }

    function Zo(t, e, n, i) {
        for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
            var s = e[a], l = r[s];
            o[s] = null == l ? i && i[s] : l
        }
        for (var a = 0; a < t.animators.length; a++) {
            var u = t.animators[a];
            u.__fromStateTransition && u.__fromStateTransition.indexOf(n) < 0 && "style" === u.targetName && u.saveFinalToTarget(o, e)
        }
        return o
    }

    function Ko(t, e, n, i) {
        var r = n && p(n, "select") >= 0, o = !1;
        if (t instanceof Gb) {
            var a = lw(t), s = r ? a.selectFill || a.normalFill : a.normalFill,
                l = r ? a.selectStroke || a.normalStroke : a.normalStroke;
            if (No(s) || No(l)) {
                i = i || {};
                var u = i.style || {};
                "inherit" === u.fill ? (o = !0, i = h({}, i), u = h({}, u), u.fill = s) : !No(u.fill) && No(s) ? (o = !0, i = h({}, i), u = h({}, u), u.fill = Bo(s)) : !No(u.stroke) && No(l) && (o || (i = h({}, i), u = h({}, u)), u.stroke = Bo(l)), i.style = u
            }
        }
        if (i && null == i.z2) {
            o || (i = h({}, i));
            var c = t.z2EmphasisLift;
            i.z2 = t.z2 + (null != c ? c : dw)
        }
        return i
    }

    function $o(t, e, n) {
        if (n && null == n.z2) {
            n = h({}, n);
            var i = t.z2SelectLift;
            n.z2 = t.z2 + (null != i ? i : gw)
        }
        return n
    }

    function Jo(t, e, n) {
        var i = p(t.currentStates, e) >= 0, r = t.style.opacity, o = i ? null : Zo(t, ["opacity"], e, {opacity: 1});
        n = n || {};
        var a = n.style || {};
        return null == a.opacity && (n = h({}, n), a = h({opacity: i ? r : .1 * o.opacity}, a), n.style = a), n
    }

    function Qo(t, e) {
        var n = this.states[t];
        if (this.style) {
            if ("emphasis" === t) return Ko(this, t, e, n);
            if ("blur" === t) return Jo(this, t, n);
            if ("select" === t) return $o(this, t, n)
        }
        return n
    }

    function ta(t) {
        t.stateProxy = Qo;
        var e = t.getTextContent(), n = t.getTextGuideLine();
        e && (e.stateProxy = Qo), n && (n.stateProxy = Qo)
    }

    function ea(t, e) {
        !ua(t, e) && !t.__highByOuter && jo(t, Vo)
    }

    function na(t, e) {
        !ua(t, e) && !t.__highByOuter && jo(t, Ho)
    }

    function ia(t, e) {
        t.__highByOuter |= 1 << (e || 0), jo(t, Vo)
    }

    function ra(t, e) {
        !(t.__highByOuter &= ~(1 << (e || 0))) && jo(t, Ho)
    }

    function oa(t) {
        jo(t, Go)
    }

    function aa(t) {
        jo(t, Wo)
    }

    function sa(t) {
        jo(t, Uo)
    }

    function la(t) {
        jo(t, Xo)
    }

    function ua(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch
    }

    function ha(t) {
        var e = t.getModel();
        e.eachComponent(function (e, n) {
            var i = "series" === e ? t.getViewOfSeriesModel(n) : t.getViewOfComponentModel(n);
            i.group.traverse(function (t) {
                Wo(t)
            })
        })
    }

    function ca(t, e, n, i) {
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = t.getItemGraphicEl(e[n]);
                i && aa(i)
            }
        }

        var o = i.getModel();
        if (n = n || "coordinateSystem", null != t && e && "none" !== e) {
            var a = o.getSeriesByIndex(t), s = a.coordinateSystem;
            s && s.master && (s = s.master);
            var l = [];
            o.eachSeries(function (t) {
                var o = a === t, u = t.coordinateSystem;
                u && u.master && (u = u.master);
                var h = u && s ? u === s : o;
                if (!("series" === n && !o || "coordinateSystem" === n && !h || "series" === e && o)) {
                    var c = i.getViewOfSeriesModel(t);
                    if (c.group.traverse(function (t) {
                        Go(t)
                    }), g(e)) r(t.getData(), e); else if (k(e)) for (var p = b(e), f = 0; f < p.length; f++) r(t.getData(p[f]), e[p[f]]);
                    l.push(t)
                }
            }), o.eachComponent(function (t, e) {
                if ("series" !== t) {
                    var n = i.getViewOfComponentModel(e);
                    n && n.blurSeries && n.blurSeries(l, o)
                }
            })
        }
    }

    function pa(t, e, n) {
        if (null != t && null != e) {
            var i = n.getModel().getComponent(t, e);
            if (i) {
                var r = n.getViewOfComponentModel(i);
                r && r.focusBlurEnabled && r.group.traverse(function (t) {
                    Go(t)
                })
            }
        }
    }

    function fa(t, e, n) {
        var i = t.seriesIndex, r = t.getData(e.dataType), o = or(r, e);
        o = (M(o) ? o[0] : o) || 0;
        var a = r.getItemGraphicEl(o);
        if (!a) for (var s = r.count(), l = 0; !a && s > l;) a = r.getItemGraphicEl(l++);
        if (a) {
            var u = rw(a);
            ca(i, u.focus, u.blurScope, n)
        } else {
            var h = t.get(["emphasis", "focus"]), c = t.get(["emphasis", "blurScope"]);
            null != h && ca(i, h, c, n)
        }
    }

    function da(t, e, n, i) {
        var r = {focusSelf: !1, dispatchers: null};
        if (null == t || "series" === t || null == e || null == n) return r;
        var o = i.getModel().getComponent(t, e);
        if (!o) return r;
        var a = i.getViewOfComponentModel(o);
        if (!a || !a.findHighDownDispatchers) return r;
        for (var s, l = a.findHighDownDispatchers(n), u = 0; u < l.length; u++) if ("self" === rw(l[u]).focus) {
            s = !0;
            break
        }
        return {focusSelf: s, dispatchers: l}
    }

    function ga(t, e, n) {
        var i = rw(t), r = da(i.componentMainType, i.componentIndex, i.componentHighDownName, n), o = r.dispatchers,
            a = r.focusSelf;
        o ? (a && pa(i.componentMainType, i.componentIndex, n), y(o, function (t) {
            return ea(t, e)
        })) : (ca(i.seriesIndex, i.focus, i.blurScope, n), "self" === i.focus && pa(i.componentMainType, i.componentIndex, n), ea(t, e))
    }

    function ya(t, e, n) {
        ha(n);
        var i = rw(t), r = da(i.componentMainType, i.componentIndex, i.componentHighDownName, n).dispatchers;
        r ? y(r, function (t) {
            return na(t, e)
        }) : na(t, e)
    }

    function va(t, e) {
        if (Ca(e)) {
            var n = e.dataType, i = t.getData(n), r = or(i, e);
            M(r) || (r = [r]), t[e.type === xw ? "toggleSelect" : e.type === mw ? "select" : "unselect"](r, n)
        }
    }

    function ma(t) {
        var e = t.getAllData();
        y(e, function (e) {
            var n = e.data, i = e.type;
            n.eachItemGraphicEl(function (e, n) {
                t.isSelected(n, i) ? sa(e) : la(e)
            })
        })
    }

    function _a(t) {
        var e = [];
        return t.eachSeries(function (t) {
            var n = t.getAllData();
            y(n, function (n) {
                var i = (n.data, n.type), r = t.getSelectedDataIndices();
                if (r.length > 0) {
                    var o = {dataIndex: r, seriesIndex: t.seriesIndex};
                    null != i && (o.dataType = i), e.push(o)
                }
            })
        }), e
    }

    function xa(t, e, n) {
        Sa(t, !0), jo(t, ta), ba(t, e, n)
    }

    function ba(t, e, n) {
        var i = rw(t);
        null != e ? (i.focus = e, i.blurScope = n) : i.focus && (i.focus = null)
    }

    function wa(t, e, n, i) {
        n = n || "itemStyle";
        for (var r = 0; r < ww.length; r++) {
            var o = ww[r], a = e.getModel([o, n]), s = t.ensureState(o);
            s.style = i ? i(a) : a[Sw[n]]()
        }
    }

    function Sa(t, e) {
        var n = e === !1, i = t;
        t.highDownSilentOnTouch && (i.__highDownSilentOnTouch = t.highDownSilentOnTouch), (!n || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !n)
    }

    function Ma(t) {
        return !(!t || !t.__highDownDispatcher)
    }

    function Ta(t) {
        var e = sw[t];
        return null == e && 32 >= aw && (e = sw[t] = aw++), e
    }

    function Ca(t) {
        var e = t.type;
        return e === mw || e === _w || e === xw
    }

    function Ia(t) {
        var e = t.type;
        return e === yw || e === vw
    }

    function Da(t) {
        var e = lw(t);
        e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
        var n = t.states.select || {};
        e.selectFill = n.style && n.style.fill || null, e.selectStroke = n.style && n.style.stroke || null
    }

    function ka(t, e) {
        if (e) {
            var n, i, r, o, a, s, l = t.data, u = t.len(), h = Mw.M, c = Mw.C, p = Mw.L, f = Mw.R, d = Mw.A, g = Mw.Q;
            for (r = 0, o = 0; u > r;) {
                switch (n = l[r++], o = r, i = 0, n) {
                    case h:
                        i = 1;
                        break;
                    case p:
                        i = 1;
                        break;
                    case c:
                        i = 3;
                        break;
                    case g:
                        i = 2;
                        break;
                    case d:
                        var y = e[4], v = e[5], m = Cw(e[0] * e[0] + e[1] * e[1]), _ = Cw(e[2] * e[2] + e[3] * e[3]),
                            x = Iw(-e[1] / _, e[0] / m);
                        l[r] *= m, l[r++] += y, l[r] *= _, l[r++] += v, l[r++] *= m, l[r++] *= _, l[r++] += x, l[r++] += x, r += 2, o = r;
                        break;
                    case f:
                        s[0] = l[r++], s[1] = l[r++], ge(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], s[1] += l[r++], ge(s, s, e), l[o++] = s[0], l[o++] = s[1]
                }
                for (a = 0; i > a; a++) {
                    var b = Tw[a];
                    b[0] = l[r++], b[1] = l[r++], ge(b, b, e), l[o++] = b[0], l[o++] = b[1]
                }
            }
            t.increaseVersion()
        }
    }

    function Aa(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }

    function Pa(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Aa(t) * Aa(e))
    }

    function La(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Pa(t, e))
    }

    function Oa(t, e, n, i, r, o, a, s, l, u, h) {
        var c = l * (Pw / 180), p = Aw(c) * (t - n) / 2 + kw(c) * (e - i) / 2,
            f = -1 * kw(c) * (t - n) / 2 + Aw(c) * (e - i) / 2, d = p * p / (a * a) + f * f / (s * s);
        d > 1 && (a *= Dw(d), s *= Dw(d));
        var g = (r === o ? -1 : 1) * Dw((a * a * s * s - a * a * f * f - s * s * p * p) / (a * a * f * f + s * s * p * p)) || 0,
            y = g * a * f / s, v = g * -s * p / a, m = (t + n) / 2 + Aw(c) * y - kw(c) * v,
            _ = (e + i) / 2 + kw(c) * y + Aw(c) * v, x = La([1, 0], [(p - y) / a, (f - v) / s]),
            b = [(p - y) / a, (f - v) / s], w = [(-1 * p - y) / a, (-1 * f - v) / s], S = La(b, w);
        if (Pa(b, w) <= -1 && (S = Pw), Pa(b, w) >= 1 && (S = 0), 0 > S) {
            var M = Math.round(S / Pw * 1e6) / 1e6;
            S = 2 * Pw + M % 2 * Pw
        }
        h.addData(u, m, _, a, s, x, S, c, o)
    }

    function Ra(t) {
        var e = new Pb;
        if (!t) return e;
        var n, i = 0, r = 0, o = i, a = r, s = Pb.CMD, l = t.match(Lw);
        if (!l) return e;
        for (var u = 0; u < l.length; u++) {
            for (var h = l[u], c = h.charAt(0), p = void 0, f = h.match(Ow) || [], d = f.length, g = 0; d > g; g++) f[g] = parseFloat(f[g]);
            for (var y = 0; d > y;) {
                var v = void 0, m = void 0, _ = void 0, x = void 0, b = void 0, w = void 0, S = void 0, M = i, T = r,
                    C = void 0, I = void 0;
                switch (c) {
                    case"l":
                        i += f[y++], r += f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case"L":
                        i = f[y++], r = f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case"m":
                        i += f[y++], r += f[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "l";
                        break;
                    case"M":
                        i = f[y++], r = f[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "L";
                        break;
                    case"h":
                        i += f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case"H":
                        i = f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case"v":
                        r += f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case"V":
                        r = f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case"C":
                        p = s.C, e.addData(p, f[y++], f[y++], f[y++], f[y++], f[y++], f[y++]), i = f[y - 2], r = f[y - 1];
                        break;
                    case"c":
                        p = s.C, e.addData(p, f[y++] + i, f[y++] + r, f[y++] + i, f[y++] + r, f[y++] + i, f[y++] + r), i += f[y - 2], r += f[y - 1];
                        break;
                    case"S":
                        v = i, m = r, C = e.len(), I = e.data, n === s.C && (v += i - I[C - 4], m += r - I[C - 3]), p = s.C, M = f[y++], T = f[y++], i = f[y++], r = f[y++], e.addData(p, v, m, M, T, i, r);
                        break;
                    case"s":
                        v = i, m = r, C = e.len(), I = e.data, n === s.C && (v += i - I[C - 4], m += r - I[C - 3]), p = s.C, M = i + f[y++], T = r + f[y++], i += f[y++], r += f[y++], e.addData(p, v, m, M, T, i, r);
                        break;
                    case"Q":
                        M = f[y++], T = f[y++], i = f[y++], r = f[y++], p = s.Q, e.addData(p, M, T, i, r);
                        break;
                    case"q":
                        M = f[y++] + i, T = f[y++] + r, i += f[y++], r += f[y++], p = s.Q, e.addData(p, M, T, i, r);
                        break;
                    case"T":
                        v = i, m = r, C = e.len(), I = e.data, n === s.Q && (v += i - I[C - 4], m += r - I[C - 3]), i = f[y++], r = f[y++], p = s.Q, e.addData(p, v, m, i, r);
                        break;
                    case"t":
                        v = i, m = r, C = e.len(), I = e.data, n === s.Q && (v += i - I[C - 4], m += r - I[C - 3]), i += f[y++], r += f[y++], p = s.Q, e.addData(p, v, m, i, r);
                        break;
                    case"A":
                        _ = f[y++], x = f[y++], b = f[y++], w = f[y++], S = f[y++], M = i, T = r, i = f[y++], r = f[y++], p = s.A, Oa(M, T, i, r, w, S, _, x, b, p, e);
                        break;
                    case"a":
                        _ = f[y++], x = f[y++], b = f[y++], w = f[y++], S = f[y++], M = i, T = r, i += f[y++], r += f[y++], p = s.A, Oa(M, T, i, r, w, S, _, x, b, p, e)
                }
            }
            ("z" === c || "Z" === c) && (p = s.Z, e.addData(p), i = o, r = a), n = p
        }
        return e.toStatic(), e
    }

    function za(t) {
        return null != t.setData
    }

    function Ea(t, e) {
        var n = Ra(t), i = h({}, e);
        return i.buildPath = function (t) {
            if (za(t)) {
                t.setData(n.data);
                var e = t.getContext();
                e && t.rebuildPath(e, 1)
            } else {
                var e = t;
                n.rebuildPath(e, 1)
            }
        }, i.applyTransform = function (t) {
            ka(n, t), this.dirtyShape()
        }, i
    }

    function Na(t, e) {
        return new Rw(Ea(t, e))
    }

    function Ba(t, n) {
        var i = Ea(t, n), r = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.applyTransform = i.applyTransform, n.buildPath = i.buildPath, n
            }

            return e(n, t), n
        }(Rw);
        return r
    }

    function Fa(t, e) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
            var o = t[r];
            n.push(o.getUpdatedPathProxy(!0))
        }
        var a = new Gb(e);
        return a.createPathProxy(), a.buildPath = function (t) {
            if (za(t)) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e, 1)
            }
        }, a
    }

    function Va(t, e, n, i, r, o, a, s) {
        var l = n - t, u = i - e, h = a - r, c = s - o, p = c * l - h * u;
        return Zw > p * p ? void 0 : (p = (h * (e - o) - c * (t - r)) / p, [t + p * l, e + p * u])
    }

    function Ha(t, e, n, i, r, o, a) {
        var s = t - n, l = e - i, u = (a ? o : -o) / Yw(s * s + l * l), h = u * l, c = -u * s, p = t + h, f = e + c,
            d = n + h, g = i + c, y = (p + d) / 2, v = (f + g) / 2, m = d - p, _ = g - f, x = m * m + _ * _, b = r - o,
            w = p * g - d * f, S = (0 > _ ? -1 : 1) * Yw(jw(0, b * b * x - w * w)), M = (w * _ - m * S) / x,
            T = (-w * m - _ * S) / x, C = (w * _ + m * S) / x, I = (-w * m + _ * S) / x, D = M - y, k = T - v,
            A = C - y, P = I - v;
        return D * D + k * k > A * A + P * P && (M = C, T = I), {
            cx: M,
            cy: T,
            x01: -h,
            y01: -c,
            x11: M * (r / b - 1),
            y11: T * (r / b - 1)
        }
    }

    function Ga(t, e) {
        var n = jw(e.r, 0), i = jw(e.r0 || 0, 0), r = n > 0, o = i > 0;
        if (r || o) {
            if (r || (n = i, i = 0), i > n) {
                var a = n;
                n = i, i = a
            }
            var s, l = !!e.clockwise, u = e.startAngle, h = e.endAngle;
            if (u === h) s = 0; else {
                var c = [u, h];
                uo(c, !l), s = Xw(c[0] - c[1])
            }
            var p = e.cx, f = e.cy, d = e.cornerRadius || 0, g = e.innerCornerRadius || 0;
            if (n > Zw) if (s > Vw - Zw) t.moveTo(p + n * Gw(u), f + n * Hw(u)), t.arc(p, f, n, u, h, !l), i > Zw && (t.moveTo(p + i * Gw(h), f + i * Hw(h)), t.arc(p, f, i, h, u, l));
            else {
                var y = Xw(n - i) / 2, v = qw(y, d), m = qw(y, g), _ = m, x = v, b = n * Gw(u), w = n * Hw(u),
                    S = i * Gw(h), M = i * Hw(h), T = void 0, C = void 0, I = void 0, D = void 0;
                if ((v > Zw || m > Zw) && (T = n * Gw(h), C = n * Hw(h), I = i * Gw(u), D = i * Hw(u), Fw > s)) {
                    var k = Va(b, w, I, D, T, C, S, M);
                    if (k) {
                        var A = b - k[0], P = w - k[1], L = T - k[0], O = C - k[1],
                            R = 1 / Hw(Ww((A * L + P * O) / (Yw(A * A + P * P) * Yw(L * L + O * O))) / 2),
                            z = Yw(k[0] * k[0] + k[1] * k[1]);
                        _ = qw(m, (i - z) / (R - 1)), x = qw(v, (n - z) / (R + 1))
                    }
                }
                if (s > Zw) if (x > Zw) {
                    var E = Ha(I, D, b, w, n, x, l), N = Ha(T, C, S, M, n, x, l);
                    t.moveTo(p + E.cx + E.x01, f + E.cy + E.y01), v > x ? t.arc(p + E.cx, f + E.cy, x, Uw(E.y01, E.x01), Uw(N.y01, N.x01), !l) : (t.arc(p + E.cx, f + E.cy, x, Uw(E.y01, E.x01), Uw(E.y11, E.x11), !l), t.arc(p, f, n, Uw(E.cy + E.y11, E.cx + E.x11), Uw(N.cy + N.y11, N.cx + N.x11), !l), t.arc(p + N.cx, f + N.cy, x, Uw(N.y11, N.x11), Uw(N.y01, N.x01), !l))
                } else t.moveTo(p + b, f + w), t.arc(p, f, n, u, h, !l); else t.moveTo(p + b, f + w);
                if (i > Zw && s > Zw) if (_ > Zw) {
                    var E = Ha(S, M, T, C, i, -_, l), N = Ha(b, w, I, D, i, -_, l);
                    t.lineTo(p + E.cx + E.x01, f + E.cy + E.y01), m > _ ? t.arc(p + E.cx, f + E.cy, _, Uw(E.y01, E.x01), Uw(N.y01, N.x01), !l) : (t.arc(p + E.cx, f + E.cy, _, Uw(E.y01, E.x01), Uw(E.y11, E.x11), !l), t.arc(p, f, i, Uw(E.cy + E.y11, E.cx + E.x11), Uw(N.cy + N.y11, N.cx + N.x11), l), t.arc(p + N.cx, f + N.cy, _, Uw(N.y11, N.x11), Uw(N.y01, N.x01), !l))
                } else t.lineTo(p + S, f + M), t.arc(p, f, i, h, u, l); else t.lineTo(p + S, f + M)
            } else t.moveTo(p, f);
            t.closePath()
        }
    }

    function Wa(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Ua(t, e) {
        for (var n = t.length, i = [], r = 0, o = 1; n > o; o++) r += ce(t[o - 1], t[o]);
        var a = r / 2;
        a = n > a ? n : a;
        for (var o = 0; a > o; o++) {
            var s = o / (a - 1) * (e ? n : n - 1), l = Math.floor(s), u = s - l, h = void 0, c = t[l % n], p = void 0,
                f = void 0;
            e ? (h = t[(l - 1 + n) % n], p = t[(l + 1) % n], f = t[(l + 2) % n]) : (h = t[0 === l ? l : l - 1], p = t[l > n - 2 ? n - 1 : l + 1], f = t[l > n - 3 ? n - 1 : l + 2]);
            var d = u * u, g = u * d;
            i.push([Wa(h[0], c[0], p[0], f[0], u, d, g), Wa(h[1], c[1], p[1], f[1], u, d, g)])
        }
        return i
    }

    function Xa(t, e, n, i) {
        var r, o, a, s, l = [], u = [], h = [], c = [];
        if (i) {
            a = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
            for (var p = 0, f = t.length; f > p; p++) ye(a, a, t[p]), ve(s, s, t[p]);
            ye(a, a, i[0]), ve(s, s, i[1])
        }
        for (var p = 0, f = t.length; f > p; p++) {
            var d = t[p];
            if (n) r = t[p ? p - 1 : f - 1], o = t[(p + 1) % f]; else {
                if (0 === p || p === f - 1) {
                    l.push(Q(t[p]));
                    continue
                }
                r = t[p - 1], o = t[p + 1]
            }
            ie(u, o, r), ue(u, u, e);
            var g = ce(d, r), y = ce(d, o), v = g + y;
            0 !== v && (g /= v, y /= v), ue(h, u, -g), ue(c, u, y);
            var m = ee([], d, h), _ = ee([], d, c);
            i && (ve(m, m, a), ye(m, m, s), ve(_, _, a), ye(_, _, s)), l.push(m), l.push(_)
        }
        return n && l.push(l.shift()), l
    }

    function Ya(t, e, n) {
        var i = e.smooth, r = e.points;
        if (r && r.length >= 2) {
            if (i && "spline" !== i) {
                var o = Xa(r, i, n, e.smoothConstraint);
                t.moveTo(r[0][0], r[0][1]);
                for (var a = r.length, s = 0; (n ? a : a - 1) > s; s++) {
                    var l = o[2 * s], u = o[2 * s + 1], h = r[(s + 1) % a];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
                }
            } else {
                "spline" === i && (r = Ua(r, n)), t.moveTo(r[0][0], r[0][1]);
                for (var s = 1, c = r.length; c > s; s++) t.lineTo(r[s][0], r[s][1])
            }
            n && t.closePath()
        }
    }

    function ja(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? Ur : Wr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Ur : Wr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? $r : Kr)(t.x1, t.cpx1, t.x2, e), (n ? $r : Kr)(t.y1, t.cpy1, t.y2, e)]
    }

    function qa(t, e, n, i, r) {
        var o;
        if (e && e.ecModel) {
            var a = e.ecModel.getUpdatePayload();
            o = a && a.animation
        }
        var s = e && e.isAnimationEnabled(), l = "update" === t;
        if (s) {
            var u = void 0, h = void 0, c = void 0;
            i ? (u = B(i.duration, 200), h = B(i.easing, "cubicOut"), c = 0) : (u = e.getShallow(l ? "animationDurationUpdate" : "animationDuration"), h = e.getShallow(l ? "animationEasingUpdate" : "animationEasing"), c = e.getShallow(l ? "animationDelayUpdate" : "animationDelay")), o && (null != o.duration && (u = o.duration), null != o.easing && (h = o.easing), null != o.delay && (c = o.delay)), "function" == typeof c && (c = c(n, r)), "function" == typeof u && (u = u(n));
            var p = {duration: u || 0, delay: c, easing: h};
            return p
        }
        return null
    }

    function Za(t, e, n, i, r, o, a) {
        var s, l = !1;
        "function" == typeof r ? (a = o, o = r, r = null) : k(r) && (o = r.cb, a = r.during, l = r.isFrom, s = r.removeOpt, r = r.dataIndex);
        var u = "remove" === t;
        u || e.stopAnimation("remove");
        var h = qa(t, i, r, u ? s || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null);
        if (h && h.duration > 0) {
            var c = h.duration, p = h.delay, f = h.easing, d = {
                duration: c,
                delay: p || 0,
                easing: f,
                done: o,
                force: !!o || !!a,
                setToFinal: !u,
                scope: t,
                during: a
            };
            l ? e.animateFrom(n, d) : e.animateTo(n, d)
        } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o()
    }

    function Ka(t, e, n, i, r, o) {
        Za("update", t, e, n, i, r, o)
    }

    function $a(t, e, n, i, r, o) {
        Za("init", t, e, n, i, r, o)
    }

    function Ja(t) {
        if (!t.__zr) return !0;
        for (var e = 0; e < t.animators.length; e++) {
            var n = t.animators[e];
            if ("remove" === n.scope) return !0
        }
        return !1
    }

    function Qa(t, e, n, i, r, o) {
        Ja(t) || Za("remove", t, e, n, i, r, o)
    }

    function ts(t, e, n, i) {
        t.removeTextContent(), t.removeTextGuideLine(), Qa(t, {style: {opacity: 0}}, e, n, i)
    }

    function es(t, e, n) {
        function i() {
            t.parent && t.parent.remove(t)
        }

        t.isGroup ? t.traverse(function (t) {
            t.isGroup || ts(t, e, n, i)
        }) : ts(t, e, n, i)
    }

    function ns(t) {
        SS(t).oldStyle = t.style
    }

    function is(t) {
        return Gb.extend(t)
    }

    function rs(t, e) {
        return IS(t, e)
    }

    function os(t, e) {
        CS[t] = e
    }

    function as(t) {
        return CS.hasOwnProperty(t) ? CS[t] : void 0
    }

    function ss(t, e, n, i) {
        var r = Na(t, e);
        return n && ("center" === i && (n = us(n, r.getBoundingRect())), hs(r, n)), r
    }

    function ls(t, e, n) {
        var i = new jb({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === n) {
                    var r = {width: t.width, height: t.height};
                    i.setStyle(us(e, r))
                }
            }
        });
        return i
    }

    function us(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        r <= t.width ? n = t.height : (r = t.width, n = r / i);
        var o = t.x + t.width / 2, a = t.y + t.height / 2;
        return {x: o - r / 2, y: a - n / 2, width: r, height: n}
    }

    function hs(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect(), i = n.calculateTransform(e);
            t.applyTransform(i)
        }
    }

    function cs(t) {
        return Io(t.shape, t.shape, t.style), t
    }

    function ps(t) {
        return Do(t.shape, t.shape, t.style), t
    }

    function fs(t, e) {
        for (var n = Hn([]); t && t !== e;) Wn(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function ds(t, e, n) {
        return e && !g(e) && (e = U_.getLocalTransform(e)), n && (e = jn([], e)), ge([], t, e)
    }

    function gs(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return o = ds(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
    }

    function ys(t) {
        return !t.isGroup
    }

    function vs(t) {
        return null != t.shape
    }

    function ms(t, e, n) {
        function i(t) {
            var e = {};
            return t.traverse(function (t) {
                ys(t) && t.anid && (e[t.anid] = t)
            }), e
        }

        function r(t) {
            var e = {x: t.x, y: t.y, rotation: t.rotation};
            return vs(t) && (e.shape = h({}, t.shape)), e
        }

        if (t && e) {
            var o = i(t);
            e.traverse(function (t) {
                if (ys(t) && t.anid) {
                    var e = o[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), Ka(t, i, n, rw(t).dataIndex)
                    }
                }
            })
        }
    }

    function _s(t, e) {
        return v(t, function (t) {
            var n = t[0];
            n = MS(n, e.x), n = TS(n, e.x + e.width);
            var i = t[1];
            return i = MS(i, e.y), i = TS(i, e.y + e.height), [n, i]
        })
    }

    function xs(t, e) {
        var n = MS(t.x, e.x), i = TS(t.x + t.width, e.x + e.width), r = MS(t.y, e.y),
            o = TS(t.y + t.height, e.y + e.height);
        return i >= n && o >= r ? {x: n, y: r, width: i - n, height: o - r} : void 0
    }

    function bs(t, e, n) {
        var i = h({rectHover: !0}, e), r = i.style = {strokeNoScale: !0};
        return n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (r.image = t.slice(8), c(r, n), new jb(i)) : ss(t.replace("path://", ""), i, n, "center") : void 0
    }

    function ws(t, e, n, i, r) {
        for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
            var s = r[o];
            if (Ss(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
            a = s
        }
    }

    function Ss(t, e, n, i, r, o, a, s) {
        var l = n - t, u = i - e, h = a - r, c = s - o, p = Ms(h, c, l, u);
        if (Ts(p)) return !1;
        var f = t - r, d = e - o, g = Ms(f, d, l, u) / p;
        if (0 > g || g > 1) return !1;
        var y = Ms(f, d, h, c) / p;
        return 0 > y || y > 1 ? !1 : !0
    }

    function Ms(t, e, n, i) {
        return t * i - n * e
    }

    function Ts(t) {
        return 1e-6 >= t && t >= -1e-6
    }

    function Cs(t) {
        var e = t.itemTooltipOption, n = t.componentModel, i = t.itemName, r = C(e) ? {formatter: e} : e,
            o = n.mainType, a = n.componentIndex, s = {componentType: o, name: i, $vars: ["name"]};
        s[o + "Index"] = a;
        var l = t.formatterParamsExtra;
        l && y(b(l), function (t) {
            Z(s, t) || (s[t] = l[t], s.$vars.push(t))
        });
        var u = rw(t.el);
        u.componentMainType = o, u.componentIndex = a, u.tooltipConfig = {
            name: i,
            option: c({content: i, formatterParams: s}, r)
        }
    }

    function Is(t, e) {
        for (var n = 0; n < pw.length; n++) {
            var i = pw[n], r = e[i], o = t.ensureState(i);
            o.style = o.style || {}, o.style.text = r
        }
        var a = t.currentStates.slice();
        t.clearStates(!0), t.setStyle({text: e.normal}), t.useStates(a, !0)
    }

    function Ds(t, e, n) {
        var i, r = t.labelFetcher, o = t.labelDataIndex, a = t.labelDimIndex, s = e.normal;
        r && (i = r.getFormattedLabel(o, "normal", null, a, s && s.get("formatter"), null != n ? {interpolatedValue: n} : null)), null == i && (i = T(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText);
        for (var l = {normal: i}, u = 0; u < pw.length; u++) {
            var h = pw[u], c = e[h];
            l[h] = B(r ? r.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null, i)
        }
        return l
    }

    function ks(t, e, n, i) {
        n = n || PS;
        for (var r = t instanceof ew, o = !1, a = 0; a < fw.length; a++) {
            var s = e[fw[a]];
            if (s && s.getShallow("show")) {
                o = !0;
                break
            }
        }
        var l = r ? t : t.getTextContent();
        if (o) {
            r || (l || (l = new ew, t.setTextContent(l)), t.stateProxy && (l.stateProxy = t.stateProxy));
            var u = Ds(n, e), h = e.normal, c = !!h.getShallow("show"), p = Ps(h, i && i.normal, n, !1, !r);
            p.text = u.normal, r || t.setTextConfig(Ls(h, n, !1));
            for (var a = 0; a < pw.length; a++) {
                var f = pw[a], s = e[f];
                if (s) {
                    var d = l.ensureState(f), g = !!B(s.getShallow("show"), c);
                    if (g !== c && (d.ignore = !g), d.style = Ps(s, i && i[f], n, !0, !r), d.style.text = u[f], !r) {
                        var y = t.ensureState(f);
                        y.textConfig = Ls(s, n, !0)
                    }
                }
            }
            l.silent = !!h.getShallow("silent"), null != l.style.x && (p.x = l.style.x), null != l.style.y && (p.y = l.style.y), l.ignore = !c, l.useStyle(p), l.dirty(), n.enableTextSetter && (zS(l).setLabelText = function (t) {
                var i = Ds(n, e, t);
                Is(l, i)
            })
        } else l && (l.ignore = !0);
        t.dirty()
    }

    function As(t, e) {
        e = e || "label";
        for (var n = {normal: t.getModel(e)}, i = 0; i < pw.length; i++) {
            var r = pw[i];
            n[r] = t.getModel([r, e])
        }
        return n
    }

    function Ps(t, e, n, i, r) {
        var o = {};
        return Os(o, t, n, i, r), e && h(o, e), o
    }

    function Ls(t, e, n) {
        e = e || {};
        var i, r = {}, o = t.getShallow("rotate"), a = B(t.getShallow("distance"), n ? null : 5),
            s = t.getShallow("offset");
        return i = t.getShallow("position") || (n ? null : "inside"), "outside" === i && (i = e.defaultOutsidePosition || "top"), null != i && (r.position = i), null != s && (r.offset = s), null != o && (o *= Math.PI / 180, r.rotation = o), null != a && (r.distance = a), r.outsideFill = "inherit" === t.get("color") ? e.inheritColor || null : "auto", r
    }

    function Os(t, e, n, i, r) {
        n = n || PS;
        var o, a = e.ecModel, s = a && a.option.textStyle, l = Rs(e);
        if (l) {
            o = {};
            for (var u in l) if (l.hasOwnProperty(u)) {
                var h = e.getModel(["rich", u]);
                zs(o[u] = {}, h, s, n, i, r, !1, !0)
            }
        }
        o && (t.rich = o);
        var c = e.get("overflow");
        c && (t.overflow = c);
        var p = e.get("minMargin");
        null != p && (t.margin = p), zs(t, e, s, n, i, r, !0, !1)
    }

    function Rs(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || PS).rich;
            if (n) {
                e = e || {};
                for (var i = b(n), r = 0; r < i.length; r++) {
                    var o = i[r];
                    e[o] = 1
                }
            }
            t = t.parentModel
        }
        return e
    }

    function zs(t, e, n, i, r, o, a, s) {
        n = !r && n || PS;
        var l = i && i.inheritColor, u = e.getShallow("color"), h = e.getShallow("textBorderColor"),
            c = B(e.getShallow("opacity"), n.opacity);
        ("inherit" === u || "auto" === u) && (u = l ? l : null), ("inherit" === h || "auto" === h) && (h = l ? l : null), o || (u = u || n.color, h = h || n.textBorderColor), null != u && (t.fill = u), null != h && (t.stroke = h);
        var p = B(e.getShallow("textBorderWidth"), n.textBorderWidth);
        null != p && (t.lineWidth = p);
        var f = B(e.getShallow("textBorderType"), n.textBorderType);
        null != f && (t.lineDash = f);
        var d = B(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
        null != d && (t.lineDashOffset = d), r || null != c || s || (c = i && i.defaultOpacity), null != c && (t.opacity = c), r || o || null == t.fill && i.inheritColor && (t.fill = i.inheritColor);
        for (var g = 0; g < LS.length; g++) {
            var y = LS[g], v = B(e.getShallow(y), n[y]);
            null != v && (t[y] = v)
        }
        for (var g = 0; g < OS.length; g++) {
            var y = OS[g], v = e.getShallow(y);
            null != v && (t[y] = v)
        }
        if (null == t.verticalAlign) {
            var m = e.getShallow("baseline");
            null != m && (t.verticalAlign = m)
        }
        if (!a || !i.disableBox) {
            for (var g = 0; g < RS.length; g++) {
                var y = RS[g], v = e.getShallow(y);
                null != v && (t[y] = v)
            }
            var _ = e.getShallow("borderType");
            null != _ && (t.borderDash = _), "auto" !== t.backgroundColor && "inherit" !== t.backgroundColor || !l || (t.backgroundColor = l), "auto" !== t.borderColor && "inherit" !== t.borderColor || !l || (t.borderColor = l)
        }
    }

    function Es(t, e) {
        var n = e && e.getModel("textStyle");
        return W([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function Ns(t, e, n, i, r) {
        function o(i) {
            var o = dr(n, a.precision, l, u, i);
            a.interpolatedValue = 1 === i ? null : o;
            var h = Ds({labelDataIndex: e, labelFetcher: r, defaultText: s ? s(o) : o + ""}, a.statesModels, o);
            Is(t, h)
        }

        var a = zS(t);
        if (a.valueAnimation && a.prevValue !== a.value) {
            var s = a.defaultInterpolatedText, l = B(a.interpolatedValue, a.prevValue), u = a.value;
            t.percent = 0, (null == a.prevValue ? $a : Ka)(t, {percent: 1}, i, e, null, o)
        }
    }

    function Bs(t) {
        return [t || "", YS++].join("_")
    }

    function Fs(t) {
        var e = {};
        t.registerSubTypeDefaulter = function (t, n) {
            var i = gr(t);
            e[i.main] = n
        }, t.determineSubType = function (n, i) {
            var r = i.type;
            if (!r) {
                var o = gr(n).main;
                t.hasSubTypes(n) && e[o] && (r = e[o](i))
            }
            return r
        }
    }

    function Vs(t, e) {
        function n(t) {
            var n = {}, o = [];
            return y(t, function (a) {
                var s = i(n, a), l = s.originalDeps = e(a), u = r(l, t);
                s.entryCount = u.length, 0 === s.entryCount && o.push(a), y(u, function (t) {
                    p(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    p(e.successor, t) < 0 && e.successor.push(a)
                })
            }), {graph: n, noEntryList: o}
        }

        function i(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var n = [];
            return y(t, function (t) {
                p(e, t) >= 0 && n.push(t)
            }), n
        }

        t.topologicalTravel = function (t, e, i, r) {
            function o(t) {
                l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
            }

            function a(t) {
                h[t] = !0, o(t)
            }

            if (t.length) {
                var s = n(e), l = s.graph, u = s.noEntryList, h = {};
                for (y(t, function (t) {
                    h[t] = !0
                }); u.length;) {
                    var c = u.pop(), p = l[c], f = !!h[c];
                    f && (i.call(r, c, p.originalDeps.slice()), delete h[c]), y(p.successor, f ? a : o)
                }
                y(h, function () {
                    var t = "";
                    throw new Error(t)
                })
            }
        }
    }

    function Hs(t, e) {
        return l(l({}, t, !0), e, !0)
    }

    function Gs(t, e) {
        t = t.toUpperCase(), QS[t] = new XS(e), JS[t] = e
    }

    function Ws(t) {
        if (C(t)) {
            var e = JS[t.toUpperCase()] || {};
            return t === ZS || t === KS ? s(e) : l(s(e), s(JS[$S]), !1)
        }
        return l(s(t), s(JS[$S]), !1)
    }

    function Us(t) {
        return QS[t]
    }

    function Xs() {
        return QS[$S]
    }

    function Ys(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function js(t) {
        switch (t) {
            case"half-year":
            case"quarter":
                return "month";
            case"week":
            case"half-week":
                return "day";
            case"half-day":
            case"quarter-day":
                return "hour";
            default:
                return t
        }
    }

    function qs(t) {
        return t === js(t)
    }

    function Zs(t) {
        switch (t) {
            case"year":
            case"month":
                return "day";
            case"millisecond":
                return "millisecond";
            default:
                return "second"
        }
    }

    function Ks(t, e, n, i) {
        var r = ki(t), o = r[tl(n)](), a = r[el(n)]() + 1, s = Math.floor((a - 1) / 4) + 1, l = r[nl(n)](),
            u = r["get" + (n ? "UTC" : "") + "Day"](), h = r[il(n)](), c = (h - 1) % 12 + 1, p = r[rl(n)](),
            f = r[ol(n)](), d = r[al(n)](), g = i instanceof XS ? i : Us(i || tM) || Xs(), y = g.getModel("time"),
            v = y.get("month"), m = y.get("monthAbbr"), _ = y.get("dayOfWeek"), x = y.get("dayOfWeekAbbr");
        return (e || "").replace(/{yyyy}/g, o + "").replace(/{yy}/g, o % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, v[a - 1]).replace(/{MMM}/g, m[a - 1]).replace(/{MM}/g, Ys(a, 2)).replace(/{M}/g, a + "").replace(/{dd}/g, Ys(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, _[u]).replace(/{ee}/g, x[u]).replace(/{e}/g, u + "").replace(/{HH}/g, Ys(h, 2)).replace(/{H}/g, h + "").replace(/{hh}/g, Ys(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, Ys(p, 2)).replace(/{m}/g, p + "").replace(/{ss}/g, Ys(f, 2)).replace(/{s}/g, f + "").replace(/{SSS}/g, Ys(d, 3)).replace(/{S}/g, d + "")
    }

    function $s(t, e, n, i, r) {
        var o = null;
        if ("string" == typeof n) o = n; else if ("function" == typeof n) o = n(t.value, e, {level: t.level}); else {
            var a = h({}, aM);
            if (t.level > 0) for (var s = 0; s < uM.length; ++s) a[uM[s]] = "{primary|" + a[uM[s]] + "}";
            var l = n ? n.inherit === !1 ? n : c(n, a) : a, u = Js(t.value, r);
            if (l[u]) o = l[u]; else if (l.inherit) {
                for (var p = hM.indexOf(u), s = p - 1; s >= 0; --s) if (l[u]) {
                    o = l[u];
                    break
                }
                o = o || a.none
            }
            if (M(o)) {
                var f = null == t.level ? 0 : t.level >= 0 ? t.level : o.length + t.level;
                f = Math.min(f, o.length - 1), o = o[f]
            }
        }
        return Ks(new Date(t.value), o, r, i)
    }

    function Js(t, e) {
        var n = ki(t), i = n[el(e)]() + 1, r = n[nl(e)](), o = n[il(e)](), a = n[rl(e)](), s = n[ol(e)](),
            l = n[al(e)](), u = 0 === l, h = u && 0 === s, c = h && 0 === a, p = c && 0 === o, f = p && 1 === r,
            d = f && 1 === i;
        return d ? "year" : f ? "month" : p ? "day" : c ? "hour" : h ? "minute" : u ? "second" : "millisecond"
    }

    function Qs(t, e, n) {
        var i = "number" == typeof t ? ki(t) : t;
        switch (e = e || Js(t, n)) {
            case"year":
                return i[tl(n)]();
            case"half-year":
                return i[el(n)]() >= 6 ? 1 : 0;
            case"quarter":
                return Math.floor((i[el(n)]() + 1) / 4);
            case"month":
                return i[el(n)]();
            case"day":
                return i[nl(n)]();
            case"half-day":
                return i[il(n)]() / 24;
            case"hour":
                return i[il(n)]();
            case"minute":
                return i[rl(n)]();
            case"second":
                return i[ol(n)]();
            case"millisecond":
                return i[al(n)]()
        }
    }

    function tl(t) {
        return t ? "getUTCFullYear" : "getFullYear"
    }

    function el(t) {
        return t ? "getUTCMonth" : "getMonth"
    }

    function nl(t) {
        return t ? "getUTCDate" : "getDate"
    }

    function il(t) {
        return t ? "getUTCHours" : "getHours"
    }

    function rl(t) {
        return t ? "getUTCMinutes" : "getMinutes"
    }

    function ol(t) {
        return t ? "getUTCSeconds" : "getSeconds"
    }

    function al(t) {
        return t ? "getUTCMilliseconds" : "getMilliseconds"
    }

    function sl(t) {
        return t ? "setUTCFullYear" : "setFullYear"
    }

    function ll(t) {
        return t ? "setUTCMonth" : "setMonth"
    }

    function ul(t) {
        return t ? "setUTCDate" : "setDate"
    }

    function hl(t) {
        return t ? "setUTCHours" : "setHours"
    }

    function cl(t) {
        return t ? "setUTCMinutes" : "setMinutes"
    }

    function pl(t) {
        return t ? "setUTCSeconds" : "setSeconds"
    }

    function fl(t) {
        return t ? "setUTCMilliseconds" : "setMilliseconds"
    }

    function dl(t, e, n, i, r, o, a, s) {
        var l = new ew({
            style: {
                text: t,
                font: e,
                align: n,
                verticalAlign: i,
                padding: r,
                rich: o,
                overflow: a ? "truncate" : null,
                lineHeight: s
            }
        });
        return l.getBoundingRect()
    }

    function gl(t) {
        if (!Ei(t)) return C(t) ? t : "-";
        var e = (t + "").split(".");
        return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "")
    }

    function yl(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function vl(t) {
        return null == t ? "" : (t + "").replace(pM, function (t, e) {
            return fM[e]
        })
    }

    function ml(t, e, n) {
        function i(t) {
            return t && W(t) ? t : "-"
        }

        function r(t) {
            return !(null == t || isNaN(t) || !isFinite(t))
        }

        var o = "{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}", a = "time" === e, s = t instanceof Date;
        if (a || s) {
            var l = a ? ki(t) : t;
            if (!isNaN(+l)) return Ks(l, o, n);
            if (s) return "-"
        }
        if ("ordinal" === e) return I(t) ? i(t) : D(t) && r(t) ? t + "" : "-";
        var u = zi(t);
        return r(u) ? gl(u) : I(t) ? i(t) : "boolean" == typeof t ? t + "" : "-"
    }

    function _l(t, e, n) {
        M(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var a = dM[o];
            t = t.replace(gM(a), gM(a, 0))
        }
        for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(gM(dM[l], s), n ? vl(u) : u)
        }
        return t
    }

    function xl(t, e) {
        var n = C(t) ? {color: t, extraCssText: e} : t || {}, i = n.color, r = n.type;
        e = n.extraCssText;
        var o = n.renderMode || "html";
        if (!i) return "";
        if ("html" === o) return "subItem" === r ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + vl(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + vl(i) + ";" + (e || "") + '"></span>';
        var a = n.markerId || "markerX";
        return {
            renderMode: o,
            content: "{" + a + "|}  ",
            style: "subItem" === r ? {width: 4, height: 4, borderRadius: 2, backgroundColor: i} : {
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: i
            }
        }
    }

    function bl(t, e, n) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var i = ki(e), r = n ? "UTC" : "", o = i["get" + r + "FullYear"](), a = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), u = i["get" + r + "Minutes"](),
            h = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", Ys(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100 + "").replace("dd", Ys(s, 2)).replace("d", s).replace("hh", Ys(l, 2)).replace("h", l).replace("mm", Ys(u, 2)).replace("m", u).replace("ss", Ys(h, 2)).replace("s", h).replace("SSS", Ys(c, 3))
    }

    function wl(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function Sl(t, e) {
        return e = e || "transparent", C(t) ? t : k(t) ? t.colorStops && (t.colorStops[0] || {}).color || e : e
    }

    function Ml(t, e) {
        if ("_blank" === e || "blank" === e) {
            var n = window.open();
            n.opener = null, n.location.href = t
        } else window.open(t, e)
    }

    function Tl(t, e, n, i, r) {
        var o = 0, a = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, u) {
            var h, c, p = l.getBoundingRect(), f = e.childAt(u + 1), d = f && f.getBoundingRect();
            if ("horizontal" === t) {
                var g = p.width + (d ? -d.x + p.x : 0);
                h = o + g, h > i || l.newline ? (o = 0, h = g, a += s + n, s = p.height) : s = Math.max(s, p.height)
            } else {
                var y = p.height + (d ? -d.y + p.y : 0);
                c = a + y, c > r || l.newline ? (o += s + n, a = 0, c = y, s = p.width) : s = Math.max(s, p.width)
            }
            l.newline || (l.x = o, l.y = a, l.markRedraw(), "horizontal" === t ? o = h + n : a = c + n)
        })
    }

    function Cl(t, e, n) {
        n = cM(n || 0);
        var i = e.width, r = e.height, o = _i(t.left, i), a = _i(t.top, r), s = _i(t.right, i), l = _i(t.bottom, r),
            u = _i(t.width, i), h = _i(t.height, r), c = n[2] + n[0], p = n[1] + n[3], f = t.aspect;
        switch (isNaN(u) && (u = i - s - p - o), isNaN(h) && (h = r - l - c - a), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - p), isNaN(a) && (a = r - l - h - c), t.left || t.right) {
            case"center":
                o = i / 2 - u / 2 - n[3];
                break;
            case"right":
                o = i - u - p
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                a = r / 2 - h / 2 - n[0];
                break;
            case"bottom":
                a = r - h - c
        }
        o = o || 0, a = a || 0, isNaN(u) && (u = i - p - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));
        var d = new ex(o + n[3], a + n[0], u, h);
        return d.margin = n, d
    }

    function Il(t) {
        var e = t.layoutMode || t.constructor.layoutMode;
        return k(e) ? e : e ? {type: e} : null
    }

    function Dl(t, e, n) {
        function i(n, i) {
            var a = {}, l = 0, u = {}, h = 0, c = 2;
            if (yM(n, function (e) {
                u[e] = t[e]
            }), yM(n, function (t) {
                r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++
            }), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;
            if (h !== c && l) {
                if (l >= c) return a;
                for (var p = 0; p < n.length; p++) {
                    var f = n[p];
                    if (!r(a, f) && r(t, f)) {
                        a[f] = t[f];
                        break
                    }
                }
                return a
            }
            return u
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function o(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function a(t, e, n) {
            yM(t, function (t) {
                e[t] = n[t]
            })
        }

        var s = n && n.ignoreSize;
        !M(s) && (s = [s, s]);
        var l = i(mM[0], 0), u = i(mM[1], 1);
        a(mM[0], t, l), a(mM[1], t, u)
    }

    function kl(t) {
        return Al({}, t)
    }

    function Al(t, e) {
        return e && t && yM(vM, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    function Pl(t) {
        var e = [];
        return y(bM.getClassesByMainType(t), function (t) {
            e = e.concat(t.dependencies || t.prototype.dependencies || [])
        }), e = v(e, function (t) {
            return gr(t).main
        }), "dataset" !== t && p(e, "dataset") <= 0 && e.unshift("dataset"), e
    }

    function Ll(t) {
        NM(t).datasetMap = Y()
    }

    function Ol(t, e, n) {
        function i(t, e, n) {
            for (var i = 0; n > i; i++) t.push(e + i)
        }

        function r(t) {
            var e = t.dimsDef;
            return e ? e.length : 1
        }

        var o = {}, a = zl(e);
        if (!a || !t) return o;
        var s, l, u = [], h = [], c = e.ecModel, p = NM(c).datasetMap, f = a.uid + "_" + n.seriesLayoutBy;
        t = t.slice(), y(t, function (e, n) {
            var i = k(e) ? e : t[n] = {name: e};
            "ordinal" === i.type && null == s && (s = n, l = r(i)), o[i.name] = []
        });
        var d = p.get(f) || p.set(f, {categoryWayDim: l, valueWayDim: 0});
        return y(t, function (t, e) {
            var n = t.name, a = r(t);
            if (null == s) {
                var l = d.valueWayDim;
                i(o[n], l, a), i(h, l, a), d.valueWayDim += a
            } else if (s === e) i(o[n], 0, a), i(u, 0, a); else {
                var l = d.categoryWayDim;
                i(o[n], l, a), i(h, l, a), d.categoryWayDim += a
            }
        }), u.length && (o.itemName = u), h.length && (o.seriesName = h), o
    }

    function Rl(t, e, n) {
        var i = {}, r = zl(t);
        if (!r) return i;
        var o, a = e.sourceFormat, s = e.dimensionsDefine;
        (a === AM || a === PM) && y(s, function (t, e) {
            "name" === (k(t) ? t.name : t) && (o = e)
        });
        var l = function () {
            function t(t) {
                return null != t.v && null != t.n
            }

            for (var i = {}, r = {}, l = [], u = 0, h = Math.min(5, n); h > u; u++) {
                var c = Bl(e.data, a, e.seriesLayoutBy, s, e.startIndex, u);
                l.push(c);
                var p = c === EM.Not;
                if (p && null == i.v && u !== o && (i.v = u), (null == i.n || i.n === i.v || !p && l[i.n] === EM.Not) && (i.n = u), t(i) && l[i.n] !== EM.Not) return i;
                p || (c === EM.Might && null == r.v && u !== o && (r.v = u), (null == r.n || r.n === r.v) && (r.n = u))
            }
            return t(i) ? i : t(r) ? r : null
        }();
        if (l) {
            i.value = [l.v];
            var u = null != o ? o : l.n;
            i.itemName = [u], i.seriesName = [u]
        }
        return i
    }

    function zl(t) {
        var e = t.get("data", !0);
        return e ? void 0 : ur(t.ecModel, "dataset", {
            index: t.get("datasetIndex", !0),
            id: t.get("datasetId", !0)
        }, Ix).models[0]
    }

    function El(t) {
        return t.get("transform", !0) || t.get("fromTransformResult", !0) ? ur(t.ecModel, "dataset", {
            index: t.get("fromDatasetIndex", !0),
            id: t.get("fromDatasetId", !0)
        }, Ix).models : []
    }

    function Nl(t, e) {
        return Bl(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function Bl(t, e, n, i, r, o) {
        function a(t) {
            var e = C(t);
            return null != t && isFinite(t) && "" !== t ? e ? EM.Might : EM.Not : e && "-" !== t ? EM.Must : void 0
        }

        var s, l = 5;
        if (P(t)) return EM.Not;
        var u, h;
        if (i) {
            var c = i[o];
            k(c) ? (u = c.name, h = c.type) : C(c) && (u = c)
        }
        if (null != h) return "ordinal" === h ? EM.Must : EM.Not;
        if (e === kM) {
            var p = t;
            if (n === zM) {
                for (var f = p[o], d = 0; d < (f || []).length && l > d; d++) if (null != (s = a(f[r + d]))) return s
            } else for (var d = 0; d < p.length && l > d; d++) {
                var g = p[r + d];
                if (g && null != (s = a(g[o]))) return s
            }
        } else if (e === AM) {
            var y = t;
            if (!u) return EM.Not;
            for (var d = 0; d < y.length && l > d; d++) {
                var v = y[d];
                if (v && null != (s = a(v[u]))) return s
            }
        } else if (e === PM) {
            var m = t;
            if (!u) return EM.Not;
            var f = m[u];
            if (!f || P(f)) return EM.Not;
            for (var d = 0; d < f.length && l > d; d++) if (null != (s = a(f[d]))) return s
        } else if (e === DM) for (var _ = t, d = 0; d < _.length && l > d; d++) {
            var v = _[d], x = Wi(v);
            if (!M(x)) return EM.Not;
            if (null != (s = a(x[o]))) return s
        }
        return EM.Not
    }

    function Fl(t, e, n) {
        var i = BM.get(e);
        if (!i) return n;
        var r = i(t);
        return r ? n.concat(r) : n
    }

    function Vl(t, e) {
        for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
        return t[n - 1]
    }

    function Hl(t, e, n, i, r, o, a) {
        o = o || t;
        var s = e(o), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
        if (u.hasOwnProperty(r)) return u[r];
        var h = null != a && i ? Vl(i, a) : n;
        if (h = h || n, h && h.length) {
            var c = h[l];
            return r && (u[r] = c), s.paletteIdx = (l + 1) % h.length, c
        }
    }

    function Gl(t, e) {
        e(t).paletteIdx = 0, e(t).paletteNameMap = {}
    }

    function Wl(t, e) {
        if (e) {
            var n = e.seriesIndex, i = e.seriesId, r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }

    function Ul(t, e) {
        var n = t.color && !t.colorLayer;
        y(e, function (e, i) {
            "colorLayer" === i && n || bM.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? l(t[i], e, !1) : s(e) : null == t[i] && (t[i] = e))
        })
    }

    function Xl(t, e, n) {
        if (M(e)) {
            var i = Y();
            return y(e, function (t) {
                if (null != t) {
                    var e = tr(t, null);
                    null != e && i.set(t, !0)
                }
            }), _(n, function (e) {
                return e && i.get(e[t])
            })
        }
        var r = tr(e, null);
        return _(n, function (e) {
            return e && null != r && e[t] === r
        })
    }

    function Yl(t, e) {
        return e.hasOwnProperty("subType") ? _(t, function (t) {
            return t && t.subType === e.subType
        }) : t
    }

    function jl(t) {
        var e = Y();
        return t && y(Hi(t.replaceMerge), function (t) {
            e.set(t, !0)
        }), {replaceMergeMainTypeMap: e}
    }

    function ql(t, e, n) {
        function i(t) {
            y(e, function (e) {
                e(t, n)
            })
        }

        var r, o, a = [], s = t.baseOption, l = t.timeline, u = t.options, h = t.media, c = !!t.media,
            p = !!(u || l || s && s.timeline);
        return s ? (o = s, o.timeline || (o.timeline = l)) : ((p || c) && (t.options = t.media = null), o = t), c && M(h) && y(h, function (t) {
            t && t.option && (t.query ? a.push(t) : r || (r = t))
        }), i(o), y(u, function (t) {
            return i(t)
        }), y(a, function (t) {
            return i(t.option)
        }), {baseOption: o, timelineOptions: u || [], mediaDefault: r, mediaList: a}
    }

    function Zl(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return y(t, function (t, e) {
            var n = e.match(tT);
            if (n && n[1] && n[2]) {
                var o = n[1], a = n[2].toLowerCase();
                Kl(i[a], t, o) || (r = !1)
            }
        }), r
    }

    function Kl(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? e >= t : t === e
    }

    function $l(t, e) {
        return t.join(",") === e.join(",")
    }

    function Jl(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = rT.length; i > n; n++) {
            var r = rT[n], o = e.normal, a = e.emphasis;
            o && o[r] && (t[r] = t[r] || {}, t[r].normal ? l(t[r].normal, o[r]) : t[r].normal = o[r], o[r] = null), a && a[r] && (t[r] = t[r] || {}, t[r].emphasis ? l(t[r].emphasis, a[r]) : t[r].emphasis = a[r], a[r] = null)
        }
    }

    function Ql(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, c(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r, r.focus && (t.emphasis.focus = r.focus), r.blurScope && (t.emphasis.blurScope = r.blurScope))
        }
    }

    function tu(t) {
        Ql(t, "itemStyle"), Ql(t, "lineStyle"), Ql(t, "areaStyle"), Ql(t, "label"), Ql(t, "labelLine"), Ql(t, "upperLabel"), Ql(t, "edgeLabel")
    }

    function eu(t, e) {
        var n = iT(t) && t[e], i = iT(n) && n.textStyle;
        if (i) for (var r = 0, o = Tx.length; o > r; r++) {
            var a = Tx[r];
            i.hasOwnProperty(a) && (n[a] = i[a])
        }
    }

    function nu(t) {
        t && (tu(t), eu(t, "label"), t.emphasis && eu(t.emphasis, "label"))
    }

    function iu(t) {
        if (iT(t)) {
            Jl(t), tu(t), eu(t, "label"), eu(t, "upperLabel"), eu(t, "edgeLabel"), t.emphasis && (eu(t.emphasis, "label"), eu(t.emphasis, "upperLabel"), eu(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (Jl(e), nu(e));
            var n = t.markLine;
            n && (Jl(n), nu(n));
            var i = t.markArea;
            i && nu(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var o = t.links || t.edges;
                if (o && !P(o)) for (var a = 0; a < o.length; a++) nu(o[a]);
                y(t.categories, function (t) {
                    tu(t)
                })
            }
            if (r && !P(r)) for (var a = 0; a < r.length; a++) nu(r[a]);
            if (e = t.markPoint, e && e.data) for (var s = e.data, a = 0; a < s.length; a++) nu(s[a]);
            if (n = t.markLine, n && n.data) for (var l = n.data, a = 0; a < l.length; a++) M(l[a]) ? (nu(l[a][0]), nu(l[a][1])) : nu(l[a]);
            "gauge" === t.type ? (eu(t, "axisLabel"), eu(t, "title"), eu(t, "detail")) : "treemap" === t.type ? (Ql(t.breadcrumb, "itemStyle"), y(t.levels, function (t) {
                tu(t)
            })) : "tree" === t.type && tu(t.leaves)
        }
    }

    function ru(t) {
        return M(t) ? t : t ? [t] : []
    }

    function ou(t) {
        return (M(t) ? t[0] : t) || {}
    }

    function au(t, e) {
        nT(ru(t.series), function (t) {
            iT(t) && iu(t)
        });
        var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), nT(n, function (e) {
            nT(ru(t[e]), function (t) {
                t && (eu(t, "axisLabel"), eu(t.axisPointer, "label"))
            })
        }), nT(ru(t.parallel), function (t) {
            var e = t && t.parallelAxisDefault;
            eu(e, "axisLabel"), eu(e && e.axisPointer, "label")
        }), nT(ru(t.calendar), function (t) {
            Ql(t, "itemStyle"), eu(t, "dayLabel"), eu(t, "monthLabel"), eu(t, "yearLabel")
        }), nT(ru(t.radar), function (t) {
            eu(t, "name"), t.name && null == t.axisName && (t.axisName = t.name, delete t.name), null != t.nameGap && null == t.axisNameGap && (t.axisNameGap = t.nameGap, delete t.nameGap)
        }), nT(ru(t.geo), function (t) {
            iT(t) && (nu(t), nT(ru(t.regions), function (t) {
                nu(t)
            }))
        }), nT(ru(t.timeline), function (t) {
            nu(t), Ql(t, "label"), Ql(t, "itemStyle"), Ql(t, "controlStyle", !0);
            var e = t.data;
            M(e) && y(e, function (t) {
                k(t) && (Ql(t, "label"), Ql(t, "itemStyle"))
            })
        }), nT(ru(t.toolbox), function (t) {
            Ql(t, "iconStyle"), nT(t.feature, function (t) {
                Ql(t, "iconStyle")
            })
        }), eu(ou(t.axisPointer), "label"), eu(ou(t.tooltip).axisPointer, "label")
    }

    function su(t, e) {
        for (var n = e.split(","), i = t, r = 0; r < n.length && (i = i && i[n[r]], null != i); r++) ;
        return i
    }

    function lu(t, e, n, i) {
        for (var r, o = e.split(","), a = t, s = 0; s < o.length - 1; s++) r = o[s], null == a[r] && (a[r] = {}), a = a[r];
        (i || null == a[o[s]]) && (a[o[s]] = n)
    }

    function uu(t) {
        t && y(oT, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function hu(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0; n < sT.length; n++) {
            var i = sT[n][1], r = sT[n][0];
            null != e[i] && (e[r] = e[i])
        }
    }

    function cu(t) {
        t && "edge" === t.alignTo && null != t.margin && null == t.edgeDistance && (t.edgeDistance = t.margin)
    }

    function pu(t) {
        t && t.downplay && !t.blur && (t.blur = t.downplay)
    }

    function fu(t) {
        t && null != t.focusNodeAdjacency && (t.emphasis = t.emphasis || {}, null == t.emphasis.focus && (t.emphasis.focus = "adjacency"))
    }

    function du(t, e) {
        if (t) for (var n = 0; n < t.length; n++) e(t[n]), t[n] && du(t[n].children, e)
    }

    function gu(t, e) {
        au(t, e), t.series = Hi(t.series), y(t.series, function (t) {
            if (k(t)) {
                var e = t.type;
                if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow); else if ("pie" === e || "gauge" === e) {
                    null != t.clockWise && (t.clockwise = t.clockWise), cu(t.label);
                    var n = t.data;
                    if (n && !P(n)) for (var i = 0; i < n.length; i++) cu(n[i]);
                    null != t.hoverOffset && (t.emphasis = t.emphasis || {}, (t.emphasis.scaleSize = null) && (t.emphasis.scaleSize = t.hoverOffset))
                } else if ("gauge" === e) {
                    var r = su(t, "pointer.color");
                    null != r && lu(t, "itemStyle.color", r)
                } else if ("bar" === e) {
                    hu(t), hu(t.backgroundStyle), hu(t.emphasis);
                    var n = t.data;
                    if (n && !P(n)) for (var i = 0; i < n.length; i++) "object" == typeof n[i] && (hu(n[i]), hu(n[i] && n[i].emphasis))
                } else if ("sunburst" === e) {
                    var o = t.highlightPolicy;
                    o && (t.emphasis = t.emphasis || {}, t.emphasis.focus || (t.emphasis.focus = o)), pu(t), du(t.data, pu)
                } else "graph" === e || "sankey" === e ? fu(t) : "map" === e && (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation && c(t, t.mapLocation));
                null != t.hoverAnimation && (t.emphasis = t.emphasis || {}, t.emphasis && null == t.emphasis.scale && (t.emphasis.scale = t.hoverAnimation)), uu(t)
            }
        }), t.dataRange && (t.visualMap = t.dataRange), y(aT, function (e) {
            var n = t[e];
            n && (M(n) || (n = [n]), y(n, function (t) {
                uu(t)
            }))
        })
    }

    function yu(t) {
        var e = Y();
        t.eachSeries(function (t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []), r = t.getData(), o = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
            }
        }), e.each(vu)
    }

    function vu(t) {
        y(t, function (e, n) {
            var i = [], r = [0 / 0, 0 / 0], o = [e.stackResultDimension, e.stackedOverDimension], a = e.data,
                s = e.isStackedByIndex;
            a.modify(o, function (o, l, u) {
                var h = a.get(e.stackedDimension, u);
                if (isNaN(h)) return r;
                var c, p;
                s ? p = a.getRawIndex(u) : c = a.get(e.stackedByDimension, u);
                for (var f = 0 / 0, d = n - 1; d >= 0; d--) {
                    var g = t[d];
                    if (s || (p = g.data.rawIndexOf(g.stackedByDimension, c)), p >= 0) {
                        var y = g.data.getByRawIndex(g.stackResultDimension, p);
                        if (h >= 0 && y > 0 || 0 >= h && 0 > y) {
                            h = Ci(h, y), f = y;
                            break
                        }
                    }
                }
                return i[0] = h, i[1] = f, i
            })
        })
    }

    function mu(t) {
        return t instanceof lT
    }

    function _u(t, e, n) {
        n = n || wu(t);
        var i = e.seriesLayoutBy, r = Su(t, n, i, e.sourceHeader, e.dimensions), o = new lT({
            data: t,
            sourceFormat: n,
            seriesLayoutBy: i,
            dimensionsDefine: r.dimensionsDefine,
            startIndex: r.startIndex,
            dimensionsDetectedCount: r.dimensionsDetectedCount,
            metaRawOption: s(e)
        });
        return o
    }

    function xu(t) {
        return new lT({data: t, sourceFormat: P(t) ? LM : DM})
    }

    function bu(t) {
        return new lT({
            data: t.data,
            sourceFormat: t.sourceFormat,
            seriesLayoutBy: t.seriesLayoutBy,
            dimensionsDefine: s(t.dimensionsDefine),
            startIndex: t.startIndex,
            dimensionsDetectedCount: t.dimensionsDetectedCount
        })
    }

    function wu(t) {
        var e = OM;
        if (P(t)) e = LM; else if (M(t)) {
            0 === t.length && (e = kM);
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                if (null != r) {
                    if (M(r)) {
                        e = kM;
                        break
                    }
                    if (k(r)) {
                        e = AM;
                        break
                    }
                }
            }
        } else if (k(t)) for (var o in t) if (Z(t, o) && g(t[o])) {
            e = PM;
            break
        }
        return e
    }

    function Su(t, e, n, i, r) {
        var o, a;
        if (!t) return {dimensionsDefine: Tu(r), startIndex: a, dimensionsDetectedCount: o};
        if (e === kM) {
            var s = t;
            "auto" === i || null == i ? Cu(function (t) {
                null != t && "-" !== t && (C(t) ? null == a && (a = 1) : a = 0)
            }, n, s, 10) : a = D(i) ? i : i ? 1 : 0, r || 1 !== a || (r = [], Cu(function (t, e) {
                r[e] = null != t ? t + "" : ""
            }, n, s, 1 / 0)), o = r ? r.length : n === zM ? s.length : s[0] ? s[0].length : null
        } else if (e === AM) r || (r = Mu(t)); else if (e === PM) r || (r = [], y(t, function (t, e) {
            r.push(e)
        })); else if (e === DM) {
            var l = Wi(t[0]);
            o = M(l) && l.length || 1
        }
        return {startIndex: a, dimensionsDefine: Tu(r), dimensionsDetectedCount: o}
    }

    function Mu(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]);) ;
        if (e) {
            var i = [];
            return y(e, function (t, e) {
                i.push(e)
            }), i
        }
    }

    function Tu(t) {
        if (t) {
            var e = Y();
            return v(t, function (t) {
                t = k(t) ? t : {name: t};
                var n = {name: t.name, displayName: t.displayName, type: t.type};
                if (null == n.name) return n;
                n.name += "", null == n.displayName && (n.displayName = n.name);
                var i = e.get(n.name);
                return i ? n.name += "-" + i.count++ : e.set(n.name, {count: 1}), n
            })
        }
    }

    function Cu(t, e, n, i) {
        if (e === zM) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r); else for (var o = n[0] || [], r = 0; r < o.length && i > r; r++) t(o[r], r)
    }

    function Iu(t) {
        var e = t.sourceFormat;
        return e === AM || e === PM
    }

    function Du(t, e) {
        var n = cT[Pu(t, e)];
        return n
    }

    function ku(t, e) {
        var n = fT[Pu(t, e)];
        return n
    }

    function Au(t) {
        var e = gT[t];
        return e
    }

    function Pu(t, e) {
        return t === kM ? t + "_" + e : t
    }

    function Lu(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r = t.getStore(), o = r.getSource().sourceFormat;
                if (null != n) {
                    var a = t.getDimensionIndex(n), s = r.getDimensionProperty(a);
                    return Au(o)(i, a, s)
                }
                var l = i;
                return o === DM && (l = Wi(i)), l
            }
        }
    }

    function Ou(t) {
        var e, n;
        return k(t) ? t.type && (n = t) : e = t, {markupText: e, markupFragment: n}
    }

    function Ru(t) {
        return new mT(t)
    }

    function zu(t, e) {
        var n = e && e.type;
        return "ordinal" === n ? t : ("time" === n && "number" != typeof t && null != t && "-" !== t && (t = +ki(t)), null == t || "" === t ? 0 / 0 : +t)
    }

    function Eu(t, e) {
        var n = new wT, i = t.data, r = n.sourceFormat = t.sourceFormat, o = t.startIndex, a = "";
        t.seriesLayoutBy !== RM && Vi(a);
        var s = [], l = {}, u = t.dimensionsDefine;
        if (u) y(u, function (t, e) {
            var n = t.name, i = {index: e, name: n, displayName: t.displayName};
            if (s.push(i), null != n) {
                var r = "";
                Z(l, n) && Vi(r), l[n] = i
            }
        }); else for (var h = 0; h < t.dimensionsDetectedCount; h++) s.push({index: h});
        var c = Du(r, RM);
        e.__isBuiltIn && (n.getRawDataItem = function (t) {
            return c(i, o, s, t)
        }, n.getRawData = wm(Nu, null, t)), n.cloneRawData = wm(Bu, null, t);
        var p = ku(r, RM);
        n.count = wm(p, null, i, o, s);
        var f = Au(r);
        n.retrieveValue = function (t, e) {
            var n = c(i, o, s, t);
            return d(n, e)
        };
        var d = n.retrieveValueFromItem = function (t, e) {
            if (null != t) {
                var n = s[e];
                return n ? f(t, e, n.name) : void 0
            }
        };
        return n.getDimensionInfo = wm(Fu, null, s, l), n.cloneAllDimensionInfo = wm(Vu, null, s), n
    }

    function Nu(t) {
        var e = t.sourceFormat;
        if (!Uu(e)) {
            var n = "";
            Vi(n)
        }
        return t.data
    }

    function Bu(t) {
        var e = t.sourceFormat, n = t.data;
        if (!Uu(e)) {
            var i = "";
            Vi(i)
        }
        if (e === kM) {
            for (var r = [], o = 0, a = n.length; a > o; o++) r.push(n[o].slice());
            return r
        }
        if (e === AM) {
            for (var r = [], o = 0, a = n.length; a > o; o++) r.push(h({}, n[o]));
            return r
        }
    }

    function Fu(t, e, n) {
        return null != n ? "number" == typeof n || !isNaN(n) && !Z(e, n) ? t[n] : Z(e, n) ? e[n] : void 0 : void 0
    }

    function Vu(t) {
        return s(t)
    }

    function Hu(t) {
        t = s(t);
        var e = t.type, n = "";
        e || Vi(n);
        var i = e.split(":");
        2 !== i.length && Vi(n);
        var r = !1;
        "echarts" === i[0] && (e = i[1], r = !0), t.__isBuiltIn = r, ST.set(e, t)
    }

    function Gu(t, e, n) {
        var i = Hi(t), r = i.length, o = "";
        r || Vi(o);
        for (var a = 0, s = r; s > a; a++) {
            var l = i[a];
            e = Wu(l, e, n, 1 === r ? null : a), a !== s - 1 && (e.length = Math.max(e.length, 1))
        }
        return e
    }

    function Wu(t, e) {
        var n = "";
        e.length || Vi(n), k(t) || Vi(n);
        var i = t.type, r = ST.get(i);
        r || Vi(n);
        var o = v(e, function (t) {
            return Eu(t, r)
        }), a = Hi(r.transform({upstream: o[0], upstreamList: o, config: s(t.config)}));
        return v(a, function (t, n) {
            var i = "";
            k(t) || Vi(i), t.data || Vi(i);
            var r = wu(t.data);
            Uu(r) || Vi(i);
            var o, a = e[0];
            if (a && 0 === n && !t.dimensions) {
                var s = a.startIndex;
                s && (t.data = a.data.slice(0, s).concat(t.data)), o = {
                    seriesLayoutBy: RM,
                    sourceHeader: s,
                    dimensions: a.metaRawOption.dimensions
                }
            } else o = {seriesLayoutBy: RM, sourceHeader: 0, dimensions: t.dimensions};
            return _u(t.data, o, null)
        })
    }

    function Uu(t) {
        return t === kM || t === AM
    }

    function Xu(t) {
        return t > 65535 ? TT : CT
    }

    function Yu() {
        return [1 / 0, -1 / 0]
    }

    function ju(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function qu(t, e, n, i, r) {
        var o = kT[n || "float"];
        if (r) {
            var a = t[e], s = a && a.length;
            if (s !== i) {
                for (var l = new o(i), u = 0; s > u; u++) l[u] = a[u];
                t[e] = l
            }
        } else t[e] = new o(i)
    }

    function Zu(t) {
        var e = t.option.transform;
        e && U(t.option.transform)
    }

    function Ku(t) {
        return "series" === t.mainType
    }

    function $u(t) {
        throw new Error(t)
    }

    function Ju(t, e) {
        var n = t.color || "#6e7079", i = t.fontSize || 12, r = t.fontWeight || "400", o = t.color || "#464646",
            a = t.fontSize || 14, s = t.fontWeight || "900";
        return "html" === e ? {
            nameStyle: "font-size:" + vl(i + "") + "px;color:" + vl(n) + ";font-weight:" + vl(r + ""),
            valueStyle: "font-size:" + vl(a + "") + "px;color:" + vl(o) + ";font-weight:" + vl(s + "")
        } : {nameStyle: {fontSize: i, fill: n, fontWeight: r}, valueStyle: {fontSize: a, fill: o, fontWeight: s}}
    }

    function Qu(t, e) {
        return e.type = t, e
    }

    function th(t) {
        return Z(zT, t.type) && zT[t.type]
    }

    function eh(t, e, n, i) {
        var r = [], o = e.blocks || [];
        G(!o || M(o)), o = o || [];
        var a = t.orderMode;
        if (e.sortBlocks && a) {
            o = o.slice();
            var s = {valueAsc: "asc", valueDesc: "desc"};
            if (Z(s, a)) {
                var l = new bT(s[a], null);
                o.sort(function (t, e) {
                    return l.evaluate(t.sortParam, e.sortParam)
                })
            } else "seriesDesc" === a && o.reverse()
        }
        var u = ih(e);
        return y(o, function (e, n) {
            var o = th(e).build(t, e, n > 0 ? u.html : 0, i);
            null != o && r.push(o)
        }), r.length ? "richText" === t.renderMode ? r.join(u.richText) : rh(r.join(""), n) : void 0
    }

    function nh(t, e, n, i, r, o) {
        if (t) {
            var a = th(t);
            a.planLayout(t);
            var s = {useUTC: r, renderMode: n, orderMode: i, markupStyleCreator: e};
            return a.build(s, t, 0, o)
        }
    }

    function ih(t) {
        var e = t.__gapLevelBetweenSubBlocks;
        return {html: OT[e], richText: RT[e]}
    }

    function rh(t, e) {
        var n = '<div style="clear:both"></div>', i = "margin: " + e + "px 0 0";
        return '<div style="' + i + ";" + LT + ';">' + t + n + "</div>"
    }

    function oh(t, e, n) {
        var i = e ? "margin-left:2px" : "";
        return '<span style="' + n + ";" + i + '">' + vl(t) + "</span>"
    }

    function ah(t, e, n, i) {
        var r = n ? "10px" : "20px", o = e ? "float:right;margin-left:" + r : "";
        return '<span style="' + o + ";" + i + '">' + v(t, function (t) {
            return vl(t)
        }).join("&nbsp;&nbsp;") + "</span>"
    }

    function sh(t, e, n) {
        return t.markupStyleCreator.wrapRichTextStyle(e, n)
    }

    function lh(t, e, n, i, r) {
        var o = [r], a = i ? 10 : 20;
        return n && o.push({
            padding: [0, 0, 0, a],
            align: "right"
        }), t.markupStyleCreator.wrapRichTextStyle(e.join("  "), o)
    }

    function uh(t, e) {
        var n = t.getData().getItemVisual(e, "style"), i = n[t.visualDrawType];
        return Sl(i)
    }

    function hh(t, e) {
        var n = t.get("padding");
        return null != n ? n : "richText" === e ? [8, 10] : 10
    }

    function ch(t) {
        var e, n, i, r, o = t.series, a = t.dataIndex, s = t.multipleSeries, l = o.getData(),
            u = l.mapDimensionsAll("defaultedTooltip"), h = u.length, c = o.getRawValue(a), p = M(c), f = uh(o, a);
        if (h > 1 || p && !h) {
            var d = ph(c, o, a, u, f);
            e = d.inlineValues, n = d.inlineValueTypes, i = d.blocks, r = d.inlineValues[0]
        } else if (h) {
            var g = l.getDimensionInfo(u[0]);
            r = e = Lu(l, a, u[0]), n = g.type
        } else r = e = p ? c[0] : c;
        var y = er(o), v = y && o.name || "", m = l.getName(a), _ = s ? v : m;
        return Qu("section", {
            header: v,
            noHeader: s || !y,
            sortParam: r,
            blocks: [Qu("nameValue", {
                markerType: "item",
                markerColor: f,
                name: _,
                noName: !W(_),
                value: e,
                valueType: n
            })].concat(i || [])
        })
    }

    function ph(t, e, n, i, r) {
        function o(t, e) {
            var n = a.getDimensionInfo(e);
            n && n.otherDims.tooltip !== !1 && (s ? h.push(Qu("nameValue", {
                markerType: "subItem",
                markerColor: r,
                name: n.displayName,
                value: t,
                valueType: n.type
            })) : (l.push(t), u.push(n.type)))
        }

        var a = e.getData(), s = m(t, function (t, e, n) {
            var i = a.getDimensionInfo(n);
            return t = t || i && i.tooltip !== !1 && null != i.displayName
        }, !1), l = [], u = [], h = [];
        return i.length ? y(i, function (t) {
            o(Lu(a, n, t), t)
        }) : y(t, o), {inlineValues: l, inlineValueTypes: u, blocks: h}
    }

    function fh(t, e) {
        return t.getName(e) || t.getId(e)
    }

    function dh(t) {
        var e = t.name;
        er(t) || (t.name = gh(t) || e)
    }

    function gh(t) {
        var e = t.getRawData(), n = e.mapDimensionsAll("seriesName"), i = [];
        return y(n, function (t) {
            var n = e.getDimensionInfo(t);
            n.displayName && i.push(n.displayName)
        }), i.join(" ")
    }

    function yh(t) {
        return t.model.getRawData().count()
    }

    function vh(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), mh
    }

    function mh(t, e) {
        e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function _h(t, e) {
        y(j(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function (n) {
            t.wrapMethod(n, S(xh, e))
        })
    }

    function xh(t, e) {
        var n = bh(t);
        return n && n.setOutputEnd((e || this).count()), e
    }

    function bh(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }

    function wh() {
        var t = ar();
        return function (e) {
            var n = t(e), i = e.pipelineContext, r = !!n.large, o = !!n.progressiveRender,
                a = n.large = !(!i || !i.large), s = n.progressiveRender = !(!i || !i.progressiveRender);
            return !(r === a && o === s) && "reset"
        }
    }

    function Sh(t, e, n) {
        t && ("emphasis" === e ? ia : ra)(t, n)
    }

    function Mh(t, e, n) {
        var i = or(t, e), r = e && null != e.highlightKey ? Ta(e.highlightKey) : null;
        null != i ? y(Hi(i), function (e) {
            Sh(t.getItemGraphicEl(e), n, r)
        }) : t.eachItemGraphicEl(function (t) {
            Sh(t, n, r)
        })
    }

    function Th(t) {
        return GT(t.model)
    }

    function Ch(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = t.view,
            s = r && HT(r).updateMethod, l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
        return "render" !== l && a[l](e, n, i, r), XT[l]
    }

    function Ih(t, e, n) {
        function i() {
            h = (new Date).getTime(), c = null, t.apply(a, s || [])
        }

        var r, o, a, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var p = function () {
            for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p];
            r = (new Date).getTime(), a = this, s = t;
            var f = l || e, d = l || n;
            l = null, o = r - (d ? u : h) - f, clearTimeout(c), d ? c = setTimeout(i, f) : o >= 0 ? i() : c = setTimeout(i, -o), u = r
        };
        return p.clear = function () {
            c && (clearTimeout(c), c = null)
        }, p.debounceNextCall = function (t) {
            l = t
        }, p
    }

    function Dh(t, e, n, i) {
        var r = t[e];
        if (r) {
            var o = r[YT] || r, a = r[qT], s = r[jT];
            if (s !== n || a !== i) {
                if (null == n || !i) return t[e] = o;
                r = t[e] = Ih(o, n, "debounce" === i), r[YT] = o, r[qT] = i, r[jT] = n
            }
            return r
        }
    }

    function kh(t, e) {
        var n = t.visualStyleMapper || KT[e];
        return n ? n : (console.warn("Unkown style type '" + e + "'."), KT.itemStyle)
    }

    function Ah(t, e) {
        var n = t.visualDrawType || $T[e];
        return n ? n : (console.warn("Unkown style type '" + e + "'."), "fill")
    }

    function Ph(t, e) {
        e = e || {}, c(e, {
            text: "loading",
            textColor: "#000",
            fontSize: 12,
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "sans-serif",
            maskColor: "rgba(255, 255, 255, 0.8)",
            showSpinner: !0,
            color: "#5470c6",
            spinnerRadius: 10,
            lineWidth: 5,
            zlevel: 0
        });
        var n = new cx, i = new $b({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4});
        n.add(i);
        var r = new ew({
            style: {
                text: e.text,
                fill: e.textColor,
                fontSize: e.fontSize,
                fontWeight: e.fontWeight,
                fontStyle: e.fontStyle,
                fontFamily: e.fontFamily
            }, zlevel: e.zlevel, z: 10001
        }), o = new $b({
            style: {fill: "none"},
            textContent: r,
            textConfig: {position: "right", distance: 10},
            zlevel: e.zlevel,
            z: 10001
        });
        n.add(o);
        var a;
        return e.showSpinner && (a = new cS({
            shape: {startAngle: -nC / 2, endAngle: -nC / 2 + .1, r: e.spinnerRadius},
            style: {stroke: e.color, lineCap: "round", lineWidth: e.lineWidth},
            zlevel: e.zlevel,
            z: 10001
        }), a.animateShape(!0).when(1e3, {endAngle: 3 * nC / 2}).start("circularInOut"), a.animateShape(!0).when(1e3, {startAngle: 3 * nC / 2}).delay(300).start("circularInOut"), n.add(a)), n.resize = function () {
            var n = r.getBoundingRect().width, s = e.showSpinner ? e.spinnerRadius : 0,
                l = (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 - (e.showSpinner && n ? 0 : 5 + n / 2) + (e.showSpinner ? 0 : n / 2) + (n ? 0 : s),
                u = t.getHeight() / 2;
            e.showSpinner && a.setShape({cx: l, cy: u}), o.setShape({
                x: l - s,
                y: u - s,
                width: 2 * s,
                height: 2 * s
            }), i.setShape({x: 0, y: 0, width: t.getWidth(), height: t.getHeight()})
        }, n.resize(), n
    }

    function Lh(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function Oh(t) {
        return t.overallProgress && Rh
    }

    function Rh() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function zh() {
        this.agent && this.agent.dirty()
    }

    function Eh(t) {
        return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null
    }

    function Nh(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Hi(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? v(e, function (t, e) {
            return Bh(e)
        }) : rC
    }

    function Bh(t) {
        return function (e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o); else r && r.progress && r.progress(e, i)
        }
    }

    function Fh(t) {
        return t.data.count()
    }

    function Vh(t) {
        UT = null;
        try {
            t(oC, aC)
        } catch (e) {
        }
        return UT
    }

    function Hh(t, e) {
        for (var n in e.prototype) t[n] = K
    }

    function Gh(t, e, n) {
        switch (n) {
            case"color":
                var i = t.getItemVisual(e, "style");
                return i[t.getVisual("drawType")];
            case"opacity":
                return t.getItemVisual(e, "style").opacity;
            case"symbol":
            case"symbolSize":
            case"liftZ":
                return t.getItemVisual(e, n)
        }
    }

    function Wh(t, e) {
        switch (e) {
            case"color":
                var n = t.getVisual("style");
                return n[t.getVisual("drawType")];
            case"opacity":
                return t.getVisual("style").opacity;
            case"symbol":
            case"symbolSize":
            case"liftZ":
                return t.getVisual(e)
        }
    }

    function Uh(t, e) {
        function n(e, n) {
            var i = [];
            return e.eachComponent({mainType: "series", subType: t, query: n}, function (t) {
                i.push(t.seriesIndex)
            }), i
        }

        y([[t + "ToggleSelect", "toggleSelect"], [t + "Select", "select"], [t + "UnSelect", "unselect"]], function (t) {
            e(t[0], function (e, i, r) {
                e = h({}, e), r.dispatchAction(h(e, {type: t[1], seriesIndex: n(i, e)}))
            })
        })
    }

    function Xh(t, e, n, i, r) {
        var o = t + e;
        n.isSilent(o) || i.eachComponent({mainType: "series", subType: "pie"}, function (t) {
            for (var e = t.seriesIndex, i = r.selected, a = 0; a < i.length; a++) if (i[a].seriesIndex === e) {
                var s = t.getData(), l = or(s, r.fromActionPayload);
                n.trigger(o, {
                    type: o,
                    seriesId: t.id,
                    name: s.getName(M(l) ? l[0] : l),
                    selected: h({}, t.option.selectedMap)
                })
            }
        })
    }

    function Yh(t, e, n) {
        t.on("selectchanged", function (t) {
            var i = n.getModel();
            t.isFromClick ? (Xh("map", "selectchanged", e, i, t), Xh("pie", "selectchanged", e, i, t)) : "select" === t.fromAction ? (Xh("map", "selected", e, i, t), Xh("pie", "selected", e, i, t)) : "unselect" === t.fromAction && (Xh("map", "unselected", e, i, t), Xh("pie", "unselected", e, i, t))
        })
    }

    function jh(t, e, n) {
        for (var i; t && (!e(t) || (i = t, !n));) t = t.__hostTarget || t.parent;
        return i
    }

    function qh(t, e) {
        if ("image" !== this.type) {
            var n = this.style;
            this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff", n.lineWidth = 2) : "line" === this.shape.symbolType ? n.stroke = t : n.fill = t, this.markRedraw()
        }
    }

    function Zh(t, e, n, i, r, o, a) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? ls(t.slice(8), new ex(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? ss(t.slice(7), {}, new ex(e, n, i, r), a ? "center" : "cover") : new DC({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = qh, o && l.setColor(o), l
    }

    function Kh(t) {
        return M(t) || (t = [+t, +t]), [t[0] || 0, t[1] || 0]
    }

    function $h(t, e) {
        return null != t ? (M(t) || (t = [t, t]), [_i(t[0], e[0]) || 0, _i(B(t[1], t[0]), e[1]) || 0]) : void 0
    }

    function Jh(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, o = null == e.y ? 0 : e.y,
            a = null == e.y2 ? 0 : e.y2;
        e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, a = a * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a;
        var s = t.createLinearGradient(i, o, r, a);
        return s
    }

    function Qh(t, e, n) {
        var i = n.width, r = n.height, o = Math.min(i, r), a = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        e.global || (a = a * i + n.x, s = s * r + n.y, l *= o);
        var u = t.createRadialGradient(a, s, 0, a, s, l);
        return u
    }

    function tc(t, e, n) {
        for (var i = "radial" === e.type ? Qh(t, e, n) : Jh(t, e, n), r = e.colorStops, o = 0; o < r.length; o++) i.addColorStop(r[o].offset, r[o].color);
        return i
    }

    function ec(t, e) {
        if (t === e || !t && !e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
        return !1
    }

    function nc(t, e) {
        return t && "solid" !== t && e > 0 ? (e = e || 1, "dashed" === t ? [4 * e, 2 * e] : "dotted" === t ? [e] : D(t) ? [t] : M(t) ? t : null) : null
    }

    function ic(t) {
        var e = t.stroke;
        return !(null == e || "none" === e || !(t.lineWidth > 0))
    }

    function rc(t) {
        return "string" == typeof t && "none" !== t
    }

    function oc(t) {
        var e = t.fill;
        return null != e && "none" !== e
    }

    function ac(t, e) {
        if (null != e.fillOpacity && 1 !== e.fillOpacity) {
            var n = t.globalAlpha;
            t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = n
        } else t.fill()
    }

    function sc(t, e) {
        if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
            var n = t.globalAlpha;
            t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = n
        } else t.stroke()
    }

    function lc(t, e, n) {
        var i = Ir(e.image, e.__image, n);
        if (kr(i)) {
            var r = t.createPattern(i, e.repeat || "repeat");
            if ("function" == typeof DOMMatrix && r.setTransform) {
                var o = new DOMMatrix;
                o.rotateSelf(0, 0, (e.rotation || 0) / Math.PI * 180), o.scaleSelf(e.scaleX || 1, e.scaleY || 1), o.translateSelf(e.x || 0, e.y || 0), r.setTransform(o)
            }
            return r
        }
    }

    function uc(t, e, n, i) {
        var r = ic(n), o = oc(n), a = n.strokePercent, s = 1 > a, l = !e.path;
        e.silent && !s || !l || e.createPathProxy();
        var u = e.path || kC;
        if (!i) {
            var h = n.fill, c = n.stroke, p = o && !!h.colorStops, f = r && !!c.colorStops, d = o && !!h.image,
                g = r && !!c.image, y = void 0, m = void 0, _ = void 0, x = void 0, b = void 0;
            (p || f) && (b = e.getBoundingRect()), p && (y = e.__dirty ? tc(t, h, b) : e.__canvasFillGradient, e.__canvasFillGradient = y), f && (m = e.__dirty ? tc(t, c, b) : e.__canvasStrokeGradient, e.__canvasStrokeGradient = m), d && (_ = e.__dirty || !e.__canvasFillPattern ? lc(t, h, e) : e.__canvasFillPattern, e.__canvasFillPattern = _), g && (x = e.__dirty || !e.__canvasStrokePattern ? lc(t, c, e) : e.__canvasStrokePattern, e.__canvasStrokePattern = _), p ? t.fillStyle = y : d && (_ ? t.fillStyle = _ : o = !1), f ? t.strokeStyle = m : g && (x ? t.strokeStyle = x : r = !1)
        }
        var w = n.lineDash && n.lineWidth > 0 && nc(n.lineDash, n.lineWidth), S = n.lineDashOffset, M = !!t.setLineDash,
            T = e.getGlobalScale();
        if (u.setScale(T[0], T[1], e.segmentIgnoreThreshold), w) {
            var C = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
            C && 1 !== C && (w = v(w, function (t) {
                return t / C
            }), S /= C)
        }
        var I = !0;
        (l || e.__dirty & Qm || w && !M && r) && (u.setDPR(t.dpr), s ? u.setContext(null) : (u.setContext(t), I = !1), u.reset(), w && !M && (u.setLineDash(w), u.setLineDashOffset(S)), e.buildPath(u, e.shape, i), u.toStatic(), e.pathUpdated()), I && u.rebuildPath(t, s ? a : 1), w && M && (t.setLineDash(w), t.lineDashOffset = S), i || (n.strokeFirst ? (r && sc(t, n), o && ac(t, n)) : (o && ac(t, n), r && sc(t, n))), w && M && t.setLineDash([])
    }

    function hc(t, e, n) {
        var i = e.__image = Ir(n.image, e.__image, e, e.onload);
        if (i && kr(i)) {
            var r = n.x || 0, o = n.y || 0, a = e.getWidth(), s = e.getHeight(), l = i.width / i.height;
            if (null == a && null != s ? a = s * l : null == s && null != a ? s = a / l : null == a && null == s && (a = i.width, s = i.height), n.sWidth && n.sHeight) {
                var u = n.sx || 0, h = n.sy || 0;
                t.drawImage(i, u, h, n.sWidth, n.sHeight, r, o, a, s)
            } else if (n.sx && n.sy) {
                var u = n.sx, h = n.sy, c = a - u, p = s - h;
                t.drawImage(i, u, h, c, p, r, o, a, s)
            } else t.drawImage(i, r, o, a, s)
        }
    }

    function cc(t, e, n) {
        var i = n.text;
        if (null != i && (i += ""), i) {
            t.font = n.font || ix, t.textAlign = n.textAlign, t.textBaseline = n.textBaseline;
            var r = void 0;
            if (t.setLineDash) {
                var o = n.lineDash && n.lineWidth > 0 && nc(n.lineDash, n.lineWidth), a = n.lineDashOffset;
                if (o) {
                    var s = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
                    s && 1 !== s && (o = v(o, function (t) {
                        return t / s
                    }), a /= s), t.setLineDash(o), t.lineDashOffset = a, r = !0
                }
            }
            n.strokeFirst ? (ic(n) && t.strokeText(i, n.x, n.y), oc(n) && t.fillText(i, n.x, n.y)) : (oc(n) && t.fillText(i, n.x, n.y), ic(n) && t.strokeText(i, n.x, n.y)), r && t.setLineDash([])
        }
    }

    function pc(t, e, n, i, r) {
        var o = !1;
        if (!i && (n = n || {}, e === n)) return !1;
        if (i || e.opacity !== n.opacity) {
            o || (_c(t, r), o = !0);
            var a = Math.max(Math.min(e.opacity, 1), 0);
            t.globalAlpha = isNaN(a) ? Gx.opacity : a
        }
        (i || e.blend !== n.blend) && (o || (_c(t, r), o = !0), t.globalCompositeOperation = e.blend || Gx.blend);
        for (var s = 0; s < AC.length; s++) {
            var l = AC[s];
            (i || e[l] !== n[l]) && (o || (_c(t, r), o = !0), t[l] = t.dpr * (e[l] || 0))
        }
        return (i || e.shadowColor !== n.shadowColor) && (o || (_c(t, r), o = !0), t.shadowColor = e.shadowColor || Gx.shadowColor), o
    }

    function fc(t, e, n, i, r) {
        var o = xc(e, r.inHover), a = i ? null : n && xc(n, r.inHover) || {};
        if (o === a) return !1;
        var s = pc(t, o, a, i, r);
        if ((i || o.fill !== a.fill) && (s || (_c(t, r), s = !0), rc(o.fill) && (t.fillStyle = o.fill)), (i || o.stroke !== a.stroke) && (s || (_c(t, r), s = !0), rc(o.stroke) && (t.strokeStyle = o.stroke)), (i || o.opacity !== a.opacity) && (s || (_c(t, r), s = !0), t.globalAlpha = null == o.opacity ? 1 : o.opacity), e.hasStroke()) {
            var l = o.lineWidth, u = l / (o.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            t.lineWidth !== u && (s || (_c(t, r), s = !0), t.lineWidth = u)
        }
        for (var h = 0; h < PC.length; h++) {
            var c = PC[h], p = c[0];
            (i || o[p] !== a[p]) && (s || (_c(t, r), s = !0), t[p] = o[p] || c[1])
        }
        return s
    }

    function dc(t, e, n, i, r) {
        return pc(t, xc(e, r.inHover), n && xc(n, r.inHover), i, r)
    }

    function gc(t, e) {
        var n = e.transform, i = t.dpr || 1;
        n ? t.setTransform(i * n[0], i * n[1], i * n[2], i * n[3], i * n[4], i * n[5]) : t.setTransform(i, 0, 0, i, 0, 0)
    }

    function yc(t, e, n) {
        for (var i = !1, r = 0; r < t.length; r++) {
            var o = t[r];
            i = i || o.isZeroArea(), gc(e, o), e.beginPath(), o.buildPath(e, o.shape), e.clip()
        }
        n.allClipped = i
    }

    function vc(t, e) {
        return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : t || e ? !0 : !1
    }

    function mc(t) {
        var e = oc(t), n = ic(t);
        return !(t.lineDash || !(+e ^ +n) || e && "string" != typeof t.fill || n && "string" != typeof t.stroke || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1)
    }

    function _c(t, e) {
        e.batchFill && t.fill(), e.batchStroke && t.stroke(), e.batchFill = "", e.batchStroke = ""
    }

    function xc(t, e) {
        return e ? t.__hoverStyle || t.style : t.style
    }

    function bc(t, e) {
        wc(t, e, {inHover: !1, viewWidth: 0, viewHeight: 0}, !0)
    }

    function wc(t, e, n, i) {
        var r = e.transform;
        if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) return e.__dirty &= ~$m, void (e.__isRendered = !1);
        var o = e.__clipPaths, a = n.prevElClipPaths, s = !1, l = !1;
        if ((!a || ec(o, a)) && (a && a.length && (_c(t, n), t.restore(), l = s = !0, n.prevElClipPaths = null, n.allClipped = !1, n.prevEl = null), o && o.length && (_c(t, n), t.save(), yc(o, t, n), s = !0), n.prevElClipPaths = o), n.allClipped) return void (e.__isRendered = !1);
        e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
        var u = n.prevEl;
        u || (l = s = !0);
        var h = e instanceof Gb && e.autoBatch && mc(e.style);
        s || vc(r, u.transform) ? (_c(t, n), gc(t, e)) : h || _c(t, n);
        var c = xc(e, n.inHover);
        e instanceof Gb ? (n.lastDrawType !== LC && (l = !0, n.lastDrawType = LC), fc(t, e, u, l, n), h && (n.batchFill || n.batchStroke) || t.beginPath(), uc(t, e, c, h), h && (n.batchFill = c.fill || "", n.batchStroke = c.stroke || "")) : e instanceof Ub ? (n.lastDrawType !== RC && (l = !0, n.lastDrawType = RC), fc(t, e, u, l, n), cc(t, e, c)) : e instanceof jb ? (n.lastDrawType !== OC && (l = !0, n.lastDrawType = OC), dc(t, e, u, l, n), hc(t, e, c)) : e instanceof wS && (n.lastDrawType !== zC && (l = !0, n.lastDrawType = zC), Sc(t, e, n)), h && i && _c(t, n), e.innerAfterBrush(), e.afterBrush && e.afterBrush(), n.prevEl = e, e.__dirty = 0, e.__isRendered = !0
    }

    function Sc(t, e, n) {
        var i = e.getDisplayables(), r = e.getTemporalDisplayables();
        t.save();
        var o, a, s = {
            prevElClipPaths: null,
            prevEl: null,
            allClipped: !1,
            viewWidth: n.viewWidth,
            viewHeight: n.viewHeight,
            inHover: n.inHover
        };
        for (o = e.getCursor(), a = i.length; a > o; o++) {
            var l = i[o];
            l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), wc(t, l, s, o === a - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), s.prevEl = l
        }
        for (var u = 0, h = r.length; h > u; u++) {
            var l = r[u];
            l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), wc(t, l, s, u === h - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), s.prevEl = l
        }
        e.clearTemporalDisplayables(), e.notClear = !0, t.restore()
    }

    function Mc(t, e) {
        function n(t) {
            function e() {
                for (var t = 1, e = 0, n = m.length; n > e; ++e) t = Fi(t, m[e]);
                for (var i = 1, e = 0, n = v.length; n > e; ++e) i = Fi(i, v[e].length);
                t *= i;
                var r = _ * m.length * v.length;
                return {
                    width: Math.max(1, Math.min(t, s.maxTileWidth)),
                    height: Math.max(1, Math.min(r, s.maxTileHeight))
                }
            }

            function n() {
                function t(t, e, n, a, l) {
                    var u = o ? 1 : i, h = Zh(l, t * u, e * u, n * u, a * u, s.color, s.symbolKeepAspect);
                    o ? b.appendChild(r.painter.paintOne(h)) : bc(d, h)
                }

                d && (d.clearRect(0, 0, x.width, x.height), s.backgroundColor && (d.fillStyle = s.backgroundColor, d.fillRect(0, 0, x.width, x.height)));
                for (var e = 0, n = 0; n < y.length; ++n) e += y[n];
                if (!(0 >= e)) for (var a = -_, l = 0, u = 0, h = 0; a < w.height;) {
                    if (l % 2 === 0) {
                        for (var c = u / 2 % v.length, p = 0, f = 0, m = 0; p < 2 * w.width;) {
                            for (var S = 0, n = 0; n < g[h].length; ++n) S += g[h][n];
                            if (0 >= S) break;
                            if (f % 2 === 0) {
                                var M = .5 * (1 - s.symbolSize), T = p + g[h][f] * M, C = a + y[l] * M,
                                    I = g[h][f] * s.symbolSize, D = y[l] * s.symbolSize, k = m / 2 % v[c].length;
                                t(T, C, I, D, v[c][k])
                            }
                            p += g[h][f], ++m, ++f, f === g[h].length && (f = 0)
                        }
                        ++h, h === g.length && (h = 0)
                    }
                    a += y[l], ++u, ++l, l === y.length && (l = 0)
                }
            }

            for (var a = [i], l = !0, u = 0; u < BC.length; ++u) {
                var h = s[BC[u]], c = typeof h;
                if (null != h && !M(h) && "string" !== c && "number" !== c && "boolean" !== c) {
                    l = !1;
                    break
                }
                a.push(h)
            }
            var p;
            if (l) {
                p = a.join(",") + (o ? "-svg" : "");
                var f = NC.get(p);
                f && (o ? t.svgElement = f : t.image = f)
            }
            var d, g = Cc(s.dashArrayX), y = Ic(s.dashArrayY), v = Tc(s.symbol), m = Dc(g), _ = kc(y), x = !o && bm(),
                b = o && r.painter.createSVGElement("g"), w = e();
            x && (x.width = w.width * i, x.height = w.height * i, d = x.getContext("2d")), n(), l && NC.put(p, x || b), t.image = x, t.svgElement = b, t.svgWidth = w.width, t.svgHeight = w.height
        }

        if ("none" === t) return null;
        var i = e.getDevicePixelRatio(), r = e.getZr(), o = "svg" === r.painter.type;
        t.dirty && EC["delete"](t);
        var a = EC.get(t);
        if (a) return a;
        var s = c(t, {
            symbol: "rect",
            symbolSize: 1,
            symbolKeepAspect: !0,
            color: "rgba(0, 0, 0, 0.2)",
            backgroundColor: null,
            dashArrayX: 5,
            dashArrayY: 5,
            rotation: 0,
            maxTileWidth: 512,
            maxTileHeight: 512
        });
        "none" === s.backgroundColor && (s.backgroundColor = null);
        var l = {repeat: "repeat"};
        return n(l), l.rotation = s.rotation, l.scaleX = l.scaleY = o ? 1 : 1 / i, EC.set(t, l), t.dirty = !1, l
    }

    function Tc(t) {
        if (!t || 0 === t.length) return [["rect"]];
        if ("string" == typeof t) return [[t]];
        for (var e = !0, n = 0; n < t.length; ++n) if ("string" != typeof t[n]) {
            e = !1;
            break
        }
        if (e) return Tc([t]);
        for (var i = [], n = 0; n < t.length; ++n) i.push("string" == typeof t[n] ? [t[n]] : t[n]);
        return i
    }

    function Cc(t) {
        if (!t || 0 === t.length) return [[0, 0]];
        if ("number" == typeof t) {
            var e = Math.ceil(t);
            return [[e, e]]
        }
        for (var n = !0, i = 0; i < t.length; ++i) if ("number" != typeof t[i]) {
            n = !1;
            break
        }
        if (n) return Cc([t]);
        for (var r = [], i = 0; i < t.length; ++i) if ("number" == typeof t[i]) {
            var e = Math.ceil(t[i]);
            r.push([e, e])
        } else {
            var e = v(t[i], function (t) {
                return Math.ceil(t)
            });
            r.push(e.length % 2 === 1 ? e.concat(e) : e)
        }
        return r
    }

    function Ic(t) {
        if (!t || "object" == typeof t && 0 === t.length) return [0, 0];
        if ("number" == typeof t) {
            var e = Math.ceil(t);
            return [e, e]
        }
        var n = v(t, function (t) {
            return Math.ceil(t)
        });
        return t.length % 2 ? n.concat(n) : n
    }

    function Dc(t) {
        return v(t, function (t) {
            return kc(t)
        })
    }

    function kc(t) {
        for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
        return t.length % 2 === 1 ? 2 * e : e
    }

    function Ac(t, e) {
        t.eachRawSeries(function (n) {
            if (!t.isSeriesFiltered(n)) {
                var i = n.getData();
                i.hasItemVisual() && i.each(function (t) {
                    var n = i.getItemVisual(t, "decal");
                    if (n) {
                        var r = i.ensureUniqueItemVisual(t, "style");
                        r.decal = Mc(n, e)
                    }
                });
                var r = i.getVisual("decal");
                if (r) {
                    var o = i.getVisual("style");
                    o.decal = Mc(r, e)
                }
            }
        })
    }

    function Pc(t) {
        if (C(t)) {
            var e = new DOMParser;
            t = e.parseFromString(t, "text/xml")
        }
        var n = t;
        for (9 === n.nodeType && (n = n.firstChild); "svg" !== n.nodeName.toLowerCase() || 1 !== n.nodeType;) n = n.nextSibling;
        return n
    }

    function Lc(t, e) {
        var n = t.getAttribute("gradientUnits");
        "userSpaceOnUse" === n && (e.global = !0)
    }

    function Oc(t, e) {
        for (var n = t.firstChild; n;) {
            if (1 === n.nodeType && "stop" === n.nodeName.toLocaleLowerCase()) {
                var i = n.getAttribute("offset"), r = void 0;
                r = i && i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var o = {};
                Gc(n, o, o);
                var a = o.stopColor || n.getAttribute("stop-color") || "#000000";
                e.colorStops.push({offset: r, color: a})
            }
            n = n.nextSibling
        }
    }

    function Rc(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), c(e.__inheritedStyle, t.__inheritedStyle))
    }

    function zc(t) {
        for (var e = Vc(t), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]), o = parseFloat(e[i + 1]);
            n.push([r, o])
        }
        return n
    }

    function Ec(t, e, n, i, r) {
        var o = e, a = o.__inheritedStyle = o.__inheritedStyle || {}, s = {};
        1 === t.nodeType && (Hc(t, e), Gc(t, a, s), i || Wc(t, a, s)), o.style = o.style || {}, null != a.fill && (o.style.fill = Bc(o, "fill", a.fill, n)), null != a.stroke && (o.style.stroke = Bc(o, "stroke", a.stroke, n)), y(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            null != a[t] && (o.style[t] = parseFloat(a[t]))
        }), y(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign"], function (t) {
            null != a[t] && (o.style[t] = a[t])
        }), r && (o.__selfStyle = s), a.lineDash && (o.style.lineDash = v(Vc(a.lineDash), function (t) {
            return parseFloat(t)
        })), ("hidden" === a.visibility || "collapse" === a.visibility) && (o.invisible = !0), "none" === a.display && (o.ignore = !0)
    }

    function Nc(t, e) {
        var n = e.__selfStyle;
        if (n) {
            var i = n.textBaseline, r = i;
            i && "auto" !== i ? "baseline" === i ? r = "alphabetic" : "before-edge" === i || "text-before-edge" === i ? r = "top" : "after-edge" === i || "text-after-edge" === i ? r = "bottom" : ("central" === i || "mathematical" === i) && (r = "middle") : r = "alphabetic", t.style.textBaseline = r
        }
        var o = e.__inheritedStyle;
        if (o) {
            var a = o.textAlign, s = a;
            a && ("middle" === a && (s = "center"), t.style.textAlign = s)
        }
    }

    function Bc(t, e, n, i) {
        var r = n && n.match(XC);
        if (r) {
            var o = W(r[1]);
            return void i.push([t, e, o])
        }
        return "none" === n && (n = null), n
    }

    function Fc(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i[0].style[i[1]] = t[i[2]]
        }
    }

    function Vc(t) {
        return t.match(YC) || []
    }

    function Hc(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            n = n.replace(/,/g, " ");
            var i = [], r = null;
            n.replace(jC, function (t, e, n) {
                return i.push(e, n), ""
            });
            for (var o = i.length - 1; o > 0; o -= 2) {
                var a = i[o], s = i[o - 1], l = Vc(a);
                switch (r = r || Vn(), s) {
                    case"translate":
                        Un(r, r, [parseFloat(l[0]), parseFloat(l[1] || "0")]);
                        break;
                    case"scale":
                        Yn(r, r, [parseFloat(l[0]), parseFloat(l[1] || l[0])]);
                        break;
                    case"rotate":
                        Xn(r, r, -parseFloat(l[0]) * qC);
                        break;
                    case"skewX":
                        var u = Math.tan(parseFloat(l[0]) * qC);
                        Wn(r, [1, 0, u, 1, 0, 0], r);
                        break;
                    case"skewY":
                        var h = Math.tan(parseFloat(l[0]) * qC);
                        Wn(r, [1, h, 0, 1, 0, 0], r);
                        break;
                    case"matrix":
                        r[0] = parseFloat(l[0]), r[1] = parseFloat(l[1]), r[2] = parseFloat(l[2]), r[3] = parseFloat(l[3]), r[4] = parseFloat(l[4]), r[5] = parseFloat(l[5])
                }
            }
            e.setLocalTransform(r)
        }
    }

    function Gc(t, e, n) {
        var i = t.getAttribute("style");
        if (i) {
            ZC.lastIndex = 0;
            for (var r; null != (r = ZC.exec(i));) {
                var o = r[1], a = Z(FC, o) ? FC[o] : null;
                a && (e[a] = r[2]);
                var s = Z(HC, o) ? HC[o] : null;
                s && (n[s] = r[2])
            }
        }
    }

    function Wc(t, e, n) {
        for (var i = 0; i < VC.length; i++) {
            var r = VC[i], o = t.getAttribute(r);
            null != o && (e[FC[r]] = o)
        }
        for (var i = 0; i < GC.length; i++) {
            var r = GC[i], o = t.getAttribute(r);
            null != o && (n[HC[r]] = o)
        }
    }

    function Uc(t, e) {
        var n = e.width / t.width, i = e.height / t.height, r = Math.min(n, i);
        return {
            scale: r,
            x: -(t.x + t.width / 2) * r + (e.x + e.width / 2),
            y: -(t.y + t.height / 2) * r + (e.y + e.height / 2)
        }
    }

    function Xc(t, e) {
        var n = new WC;
        return n.parse(t, e)
    }

    function Yc(t, e) {
        return Math.abs(t - e) < KC
    }

    function jc(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var o = 1; o < t.length; o++) {
            var a = t[o];
            i += yo(r[0], r[1], a[0], a[1], e, n), r = a
        }
        var s = t[0];
        return Yc(r[0], s[0]) && Yc(r[1], s[1]) || (i += yo(r[0], r[1], s[0], s[1], e, n)), 0 !== i
    }

    function qc(t) {
        t.silent = !1, t.isGroup && t.traverse(function (t) {
            t.silent = !1
        })
    }

    function Zc(t) {
        var e = [], n = Y();
        return y(t, function (t) {
            if (null == t.namedFrom) {
                var i = new tI(t.name, t.el);
                e.push(i), n.set(t.name, i)
            }
        }), {regions: e, regionsMap: n}
    }

    function Kc(t) {
        if (!t.UTF8Encoding) return t;
        var e = t, n = e.UTF8Scale;
        null == n && (n = 1024);
        for (var i = e.features, r = 0; r < i.length; r++) {
            var o = i[r], a = o.geometry;
            if ("Polygon" === a.type) for (var s = a.coordinates, l = 0; l < s.length; l++) s[l] = $c(s[l], a.encodeOffsets[l], n); else if ("MultiPolygon" === a.type) for (var s = a.coordinates, l = 0; l < s.length; l++) for (var u = s[l], h = 0; h < u.length; h++) u[h] = $c(u[h], a.encodeOffsets[l][h], n)
        }
        return e.UTF8Encoding = !1, e
    }

    function $c(t, e, n) {
        for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
            var s = t.charCodeAt(a) - 64, l = t.charCodeAt(a + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += o, r = s, o = l, i.push([s / n, l / n])
        }
        return i
    }

    function Jc(t, e) {
        return t = Kc(t), v(_(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var n = t.properties, i = t.geometry, r = [];
            if ("Polygon" === i.type) {
                var o = i.coordinates;
                r.push({type: "polygon", exterior: o[0], interiors: o.slice(1)})
            }
            if ("MultiPolygon" === i.type) {
                var o = i.coordinates;
                y(o, function (t) {
                    t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
                })
            }
            var a = new QC(n[e || "name"], r, n.cp);
            return a.properties = n, a
        })
    }

    function Qc(t, e) {
        if ("china" === t) {
            for (var n = 0; n < e.length; n++) if (e[n].name === rI) return;
            e.push(new QC(rI, v(oI, function (t) {
                return {type: "polygon", exterior: t}
            }), iI))
        }
    }

    function tp(t, e) {
        if ("china" === t) {
            var n = lI[e.name];
            if (n) {
                var i = e.getCenter();
                i[0] += n[0] / 10.5, i[1] += -n[1] / 14, e.setCenter(i)
            }
        }
    }

    function ep(t, e) {
        if ("world" === t) {
            var n = uI[e.name];
            if (n) {
                var i = [n[0], n[1]];
                e.setCenter(i)
            }
        }
    }

    function np(t, e) {
        "china" === t && "台湾" === e.name && e.geometries.push({type: "polygon", exterior: hI[0]})
    }

    function ip(t) {
        for (var e, n = 0; n < t.length; n++) {
            var i = t[n].getBoundingRect();
            e = e || i.clone(), e.union(i)
        }
        return e
    }

    function rp(t) {
        return C(t) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(t) : new Function("return (" + t + ");")() : t
    }

    function op(t) {
        return function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.isDisposed() ? void 0 : sp(this, t, e)
        }
    }

    function ap(t) {
        return function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return sp(this, t, e)
        }
    }

    function sp(t, e, n) {
        return n[0] = n[0] && n[0].toLowerCase(), Om.prototype[e].apply(t, n)
    }

    function lp(t, e, n) {
        var i = pp(t);
        if (i) return i;
        var r = new cD(t, e, n);
        return r.id = "ec_" + SD++, bD[r.id] = r, hr(t, TD, r.id), lD(r), gI.trigger("afterinit", r), r
    }

    function up(t) {
        if (M(t)) {
            var e = t;
            t = null, y(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + MD++, y(e, function (e) {
                e.group = t
            })
        }
        return wD[t] = !0, t
    }

    function hp(t) {
        wD[t] = !1
    }

    function cp(t) {
        "string" == typeof t ? t = bD[t] : t instanceof cD || (t = pp(t)), t instanceof cD && !t.isDisposed() && t.dispose()
    }

    function pp(t) {
        return bD[cr(t, TD)]
    }

    function fp(t) {
        return bD[t]
    }

    function dp(t, e) {
        _D[t] = e
    }

    function gp(t) {
        p(vD, t) < 0 && vD.push(t)
    }

    function yp(t, e) {
        Tp(yD, t, e, SI)
    }

    function vp(t) {
        _p("afterinit", t)
    }

    function mp(t) {
        _p("afterupdate", t)
    }

    function _p(t, e) {
        gI.on(t, e)
    }

    function xp(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = k(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, gD[e] || (G(FI.test(i) && FI.test(e)), dD[i] || (dD[i] = {
            action: n,
            actionInfo: t
        }), gD[e] = i)
    }

    function bp(t, e) {
        QM.register(t, e)
    }

    function wp(t) {
        var e = QM.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
    }

    function Sp(t, e) {
        Tp(mD, t, e, TI, "layout")
    }

    function Mp(t, e) {
        Tp(mD, t, e, DI, "visual")
    }

    function Tp(t, e, n, i, r) {
        if ((T(e) || k(e)) && (n = e, e = i), !(p(ID, n) >= 0)) {
            ID.push(n);
            var o = iC.wrapStageHandler(n, r);
            o.__prio = e, o.__raw = n, t.push(o)
        }
    }

    function Cp(t, e) {
        xD[t] = e
    }

    function Ip(t) {
        r("createCanvas", t)
    }

    function Dp(t, e, n) {
        dI.registerMap(t, e, n)
    }

    function kp(t) {
        return dI.getMapForUser(t)
    }

    function Ap(t) {
        return null == t ? 0 : t.length || 1
    }

    function Pp(t) {
        return t
    }

    function Lp(t, e) {
        var n = {}, i = n.encode = {}, r = Y(), o = [], a = [], s = {};
        y(t.dimensions, function (e) {
            var n = t.getDimensionInfo(e), l = n.coordDim;
            if (l) {
                var u = n.coordDimIndex;
                Op(i, l)[u] = e, n.isExtraCoord || (r.set(l, 1), zp(n.type) && (o[0] = e), Op(s, l)[u] = t.getDimensionIndex(n.name)), n.defaultTooltip && a.push(e)
            }
            IM.each(function (t, e) {
                var r = Op(i, e), o = n.otherDims[e];
                null != o && o !== !1 && (r[o] = n.name)
            })
        });
        var l = [], u = {};
        r.each(function (t, e) {
            var n = i[e];
            u[e] = n[0], l = l.concat(n)
        }), n.dataDimsOnCoord = l, n.dataDimIndicesOnCoord = v(l, function (e) {
            return t.getDimensionInfo(e).storeDimIndex
        }), n.encodeFirstDimNotExtra = u;
        var h = i.label;
        h && h.length && (o = h.slice());
        var c = i.tooltip;
        return c && c.length ? a = c.slice() : a.length || (a = o.slice()), i.defaultedLabel = o, i.defaultedTooltip = a, n.userOutput = new BD(s, e), n
    }

    function Op(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e]
    }

    function Rp(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function zp(t) {
        return !("ordinal" === t || "time" === t)
    }

    function Ep(t) {
        return t instanceof GD
    }

    function Np(t) {
        for (var e = Y(), n = 0; n < (t || []).length; n++) {
            var i = t[n], r = k(i) ? i.name : i;
            null != r && null == e.get(r) && e.set(r, n)
        }
        return e
    }

    function Bp(t) {
        var e = VD(t);
        return e.dimNameMap || (e.dimNameMap = Np(t.dimensionsDefine))
    }

    function Fp(t) {
        return t > 30
    }

    function Vp(t, e) {
        return Hp(t, e).dimensions
    }

    function Hp(t, e) {
        function n(t) {
            var e = m[t];
            if (0 > e) {
                var n = a[t], i = k(n) ? n : {name: n}, r = new FD, o = i.name;
                null != o && null != d.get(o) && (r.name = r.displayName = o), null != i.type && (r.type = i.type), null != i.displayName && (r.displayName = i.displayName);
                var s = l.length;
                return m[t] = s, r.storeDimIndex = t, l.push(r), r
            }
            return l[e]
        }

        function i(t, e, n) {
            null != IM.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, s.set(e, !0))
        }

        function r(t) {
            null == t.name && (t.name = t.coordDim)
        }

        mu(t) || (t = xu(t)), e = e || {};
        var o = e.coordDimensions || [], a = e.dimensionsDefine || t.dimensionsDefine || [], s = Y(), l = [],
            u = Wp(t, o, a, e.dimensionsCount), p = e.canOmitUnusedDimensions && Fp(u), f = a === t.dimensionsDefine,
            d = f ? Bp(t) : Np(a), g = e.encodeDefine;
        !g && e.encodeDefaulter && (g = e.encodeDefaulter(t, u));
        for (var v = Y(g), m = new IT(u), _ = 0; _ < m.length; _++) m[_] = -1;
        if (!p) for (var _ = 0; u > _; _++) n(_);
        v.each(function (t, e) {
            var r = Hi(t).slice();
            if (1 === r.length && !C(r[0]) && r[0] < 0) return void v.set(e, !1);
            var o = v.set(e, []);
            y(r, function (t, r) {
                var a = C(t) ? d.get(t) : t;
                null != a && u > a && (o[r] = a, i(n(a), e, r))
            })
        });
        var x = 0;
        y(o, function (t) {
            var e, r, o, a;
            if (C(t)) e = t, a = {}; else {
                a = t, e = a.name;
                var s = a.ordinalMeta;
                a.ordinalMeta = null, a = h({}, a), a.ordinalMeta = s, r = a.dimsDef, o = a.otherDims, a.name = a.coordDim = a.coordDimIndex = a.dimsDef = a.otherDims = null
            }
            var l = v.get(e);
            if (l !== !1) {
                if (l = Hi(l), !l.length) for (var p = 0; p < (r && r.length || 1); p++) {
                    for (; u > x && null != n(x).coordDim;) x++;
                    u > x && l.push(x++)
                }
                y(l, function (t, s) {
                    var l = n(t);
                    if (f && null != a.type && (l.type = a.type), i(c(l, a), e, s), null == l.name && r) {
                        var u = r[s];
                        !k(u) && (u = {name: u}), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
                    }
                    o && c(l.otherDims, o)
                })
            }
        });
        var b = e.generateCoord, w = e.generateCoordCount, S = null != w;
        w = b ? w || 1 : 0;
        var M = b || "value";
        if (p) y(l, function (t) {
            r(t)
        }), l.sort(function (t, e) {
            return t.storeDimIndex - e.storeDimIndex
        }); else for (var T = 0; u > T; T++) {
            var I = n(T), D = I.coordDim;
            null == D && (I.coordDim = Up(M, s, S), I.coordDimIndex = 0, (!b || 0 >= w) && (I.isExtraCoord = !0), w--), r(I), null != I.type || Nl(t, T) !== EM.Must && (!I.isExtraCoord || null == I.otherDims.itemName && null == I.otherDims.seriesName) || (I.type = "ordinal")
        }
        return Gp(l), new GD({source: t, dimensions: l, fullDimensionCount: u, dimensionOmitted: p})
    }

    function Gp(t) {
        for (var e = Y(), n = 0; n < t.length; n++) {
            var i = t[n], r = i.name, o = e.get(r) || 0;
            o > 0 && (i.name = r + (o - 1)), o++, e.set(r, o)
        }
    }

    function Wp(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectedCount || 1, e.length, n.length, i || 0);
        return y(e, function (t) {
            var e;
            k(t) && (e = t.dimsDef) && (r = Math.max(r, e.length))
        }), r
    }

    function Up(t, e, n) {
        var i = e.data;
        if (n || i.hasOwnProperty(t)) {
            for (var r = 0; i.hasOwnProperty(t + r);) r++;
            t += r
        }
        return e.set(t, !0), t
    }

    function Xp(t) {
        var e = t.get("coordinateSystem"), n = new $D(e), i = JD[e];
        return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
    }

    function Yp(t) {
        return "category" === t.get("type")
    }

    function jp(t, e, n) {
        n = n || {};
        var i, r, o, a = n.byIndex, s = n.stackedCoordDimension;
        qp(e) ? i = e : (r = e.schema, i = r.dimensions, o = e.store);
        var l, u, h, c, p = !(!t || !t.get("stack"));
        if (y(i, function (t, e) {
            C(t) && (i[e] = t = {name: t}), p && !t.isExtraCoord && (a || l || !t.ordinalMeta || (l = t), u || "ordinal" === t.type || "time" === t.type || s && s !== t.coordDim || (u = t))
        }), !u || a || l || (a = !0), u) {
            h = "__\x00ecstackresult_" + t.id, c = "__\x00ecstackedover_" + t.id, l && (l.createInvertedIndices = !0);
            var f = u.coordDim, d = u.type, g = 0;
            y(i, function (t) {
                t.coordDim === f && g++
            });
            var v = {
                name: h,
                coordDim: f,
                coordDimIndex: g,
                type: d,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: i.length
            }, m = {
                name: c,
                coordDim: c,
                coordDimIndex: g + 1,
                type: d,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: i.length + 1
            };
            r ? (o && (v.storeDimIndex = o.ensureCalculationDimension(c, d), m.storeDimIndex = o.ensureCalculationDimension(h, d)), r.appendCalculationDimension(v), r.appendCalculationDimension(m)) : (i.push(v), i.push(m))
        }
        return {
            stackedDimension: u && u.name,
            stackedByDimension: l && l.name,
            isStackedByIndex: a,
            stackedOverDimension: c,
            stackResultDimension: h
        }
    }

    function qp(t) {
        return !Ep(t.schema)
    }

    function Zp(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function Kp(t, e) {
        return Zp(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function $p(t, e) {
        var n, i = t.get("coordinateSystem"), r = QM.get(i);
        return e && e.coordSysDims && (n = v(e.coordSysDims, function (t) {
            var n = {name: t}, i = e.axisMap.get(t);
            if (i) {
                var r = i.get("type");
                n.type = Rp(r)
            }
            return n
        })), n || (n = r && (r.getDimensionsInfo ? r.getDimensionsInfo() : r.dimensions.slice()) || ["x", "y"]), n
    }

    function Jp(t, e, n) {
        var i, r;
        return n && y(t, function (t, o) {
            var a = t.coordDim, s = n.categoryAxisMap.get(a);
            s && (null == i && (i = o), t.ordinalMeta = s.getOrdinalMeta(), e && (t.createInvertedIndices = !0)), null != t.otherDims.itemName && (r = !0)
        }), r || null == i || (t[i].otherDims.itemName = 0), i
    }

    function Qp(t, e, n) {
        n = n || {};
        var i, r = e.getSourceManager(), o = !1;
        t ? (o = !0, i = xu(t)) : (i = r.getSource(), o = i.sourceFormat === DM);
        var a = Xp(e), s = $p(e, a), l = n.useEncodeDefaulter, u = T(l) ? l : l ? S(Ol, s, e) : null, h = {
                coordDimensions: s,
                generateCoord: n.generateCoord,
                encodeDefine: e.getEncode(),
                encodeDefaulter: u,
                canOmitUnusedDimensions: !o
            }, c = Hp(i, h), p = Jp(c.dimensions, n.createInvertedIndices, a), f = o ? null : r.getSharedDataStore(c),
            d = jp(e, {schema: c, store: f}), g = new KD(c, e);
        g.setCalculationInfo(d);
        var y = null != p && tf(i) ? function (t, e, n, i) {
            return i === p ? n : this.defaultDimValueGetter(t, e, n, i)
        } : null;
        return g.hasItemOption = !1, g.initData(o ? i : f, null, y), g
    }

    function tf(t) {
        if (t.sourceFormat === DM) {
            var e = ef(t.data || []);
            return null != e && !M(Wi(e))
        }
    }

    function ef(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function nf(t) {
        return k(t) && null != t.value ? t.value : t + ""
    }

    function rf(t, e, n, i) {
        var r = {}, o = t[1] - t[0], a = r.interval = Li(o / e, !0);
        null != n && n > a && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
        var s = r.intervalPrecision = of(a),
            l = r.niceTickExtent = [nk(Math.ceil(t[0] / a) * a, s), nk(Math.floor(t[1] / a) * a, s)];
        return sf(l, t), r
    }

    function of(t) {
        return wi(t) + 2
    }

    function af(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function sf(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), af(t, 0, e), af(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function lf(t, e) {
        return t >= e[0] && t <= e[1]
    }

    function uf(t, e) {
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }

    function hf(t, e) {
        return t * (e[1] - e[0]) + e[0]
    }

    function cf(t) {
        return t.get("stack") || ak + t.seriesIndex
    }

    function pf(t) {
        return t.dim + t.index
    }

    function ff(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function (t) {
            mf(t) && !_f(t) && n.push(t)
        }), n
    }

    function df(t) {
        var e = {};
        y(t, function (t) {
            var n = t.coordinateSystem, i = n.getBaseAxis();
            if ("time" === i.type || "value" === i.type) for (var r = t.getData(), o = i.dim + "_" + i.index, a = r.getDimensionIndex(r.mapDimension(i.dim)), s = r.getStore(), l = 0, u = s.count(); u > l; ++l) {
                var h = s.get(a, l);
                e[o] ? e[o].push(h) : e[o] = [h]
            }
        });
        var n = {};
        for (var i in e) if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (r) {
                r.sort(function (t, e) {
                    return t - e
                });
                for (var o = null, a = 1; a < r.length; ++a) {
                    var s = r[a] - r[a - 1];
                    s > 0 && (o = null === o ? s : Math.min(o, s))
                }
                n[i] = o
            }
        }
        return n
    }

    function gf(t) {
        var e = df(t), n = [];
        return y(t, function (t) {
            var i, r = t.coordinateSystem, o = r.getBaseAxis(), a = o.getExtent();
            if ("category" === o.type) i = o.getBandWidth(); else if ("value" === o.type || "time" === o.type) {
                var s = o.dim + "_" + o.index, l = e[s], u = Math.abs(a[1] - a[0]), h = o.scale.getExtent(),
                    c = Math.abs(h[1] - h[0]);
                i = l ? u / c * l : u
            } else {
                var p = t.getData();
                i = Math.abs(a[1] - a[0]) / p.count()
            }
            var f = _i(t.get("barWidth"), i), d = _i(t.get("barMaxWidth"), i), g = _i(t.get("barMinWidth") || 1, i),
                y = t.get("barGap"), v = t.get("barCategoryGap");
            n.push({
                bandWidth: i,
                barWidth: f,
                barMaxWidth: d,
                barMinWidth: g,
                barGap: y,
                barCategoryGap: v,
                axisKey: pf(o),
                stackId: cf(t)
            })
        }), yf(n)
    }

    function yf(t) {
        var e = {};
        y(t, function (t) {
            var n = t.axisKey, i = t.bandWidth, r = e[n] || {
                bandWidth: i,
                remainedWidth: i,
                autoWidthCount: 0,
                categoryGap: null,
                gap: "20%",
                stacks: {}
            }, o = r.stacks;
            e[n] = r;
            var a = t.stackId;
            o[a] || r.autoWidthCount++, o[a] = o[a] || {width: 0, maxWidth: 0};
            var s = t.barWidth;
            s && !o[a].width && (o[a].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (o[a].maxWidth = l);
            var u = t.barMinWidth;
            u && (o[a].minWidth = u);
            var h = t.barGap;
            null != h && (r.gap = h);
            var c = t.barCategoryGap;
            null != c && (r.categoryGap = c)
        });
        var n = {};
        return y(e, function (t, e) {
            n[e] = {};
            var i = t.stacks, r = t.bandWidth, o = t.categoryGap;
            if (null == o) {
                var a = b(i).length;
                o = Math.max(35 - 4 * a, 15) + "%"
            }
            var s = _i(o, r), l = _i(t.gap, 1), u = t.remainedWidth, h = t.autoWidthCount,
                c = (u - s) / (h + (h - 1) * l);
            c = Math.max(c, 0), y(i, function (t) {
                var e = t.maxWidth, n = t.minWidth;
                if (t.width) {
                    var i = t.width;
                    e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, u -= i + l * i, h--
                } else {
                    var i = c;
                    e && i > e && (i = Math.min(e, u)), n && n > i && (i = n), i !== c && (t.width = i, u -= i + l * i, h--)
                }
            }), c = (u - s) / (h + (h - 1) * l), c = Math.max(c, 0);
            var p, f = 0;
            y(i, function (t) {
                t.width || (t.width = c), p = t, f += t.width * (1 + l)
            }), p && (f -= p.width * l);
            var d = -f / 2;
            y(i, function (t, i) {
                n[e][i] = n[e][i] || {bandWidth: r, offset: d, width: t.width}, d += t.width * (1 + l)
            })
        }), n
    }

    function vf(t, e, n) {
        if (t && e) {
            var i = t[pf(e)];
            return null != i && null != n ? i[cf(n)] : i
        }
    }

    function mf(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function _f(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function xf(t, e) {
        return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0))
    }

    function bf(t, e, n, i) {
        var r = ki(e), o = ki(n), a = function (t) {
            return Qs(r, t, i) === Qs(o, t, i)
        }, s = function () {
            return a("year")
        }, l = function () {
            return s() && a("month")
        }, u = function () {
            return l() && a("day")
        }, h = function () {
            return u() && a("hour")
        }, c = function () {
            return h() && a("minute")
        }, p = function () {
            return c() && a("second")
        }, f = function () {
            return p() && a("millisecond")
        };
        switch (t) {
            case"year":
                return s();
            case"month":
                return l();
            case"day":
                return u();
            case"hour":
                return h();
            case"minute":
                return c();
            case"second":
                return p();
            case"millisecond":
                return f()
        }
    }

    function wf(t) {
        return t /= rM, t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1
    }

    function Sf(t) {
        var e = 30 * rM;
        return t /= e, t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1
    }

    function Mf(t) {
        return t /= iM, t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1
    }

    function Tf(t, e) {
        return t /= e ? nM : eM, t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1
    }

    function Cf(t) {
        return Li(t, !0)
    }

    function If(t, e, n) {
        var i = new Date(t);
        switch (js(e)) {
            case"year":
            case"month":
                i[ll(n)](0);
            case"day":
                i[ul(n)](1);
            case"hour":
                i[hl(n)](0);
            case"minute":
                i[cl(n)](0);
            case"second":
                i[pl(n)](0), i[fl(n)](0)
        }
        return i.getTime()
    }

    function Df(t, e, n, i) {
        function r(t, e, n, r, o, a, s) {
            for (var l = new Date(e), u = e, h = l[r](); n > u && u <= i[1];) s.push({value: u}), h += t, l[o](h), u = l.getTime();
            s.push({value: u, notAdd: !0})
        }

        function o(t, o, a) {
            var s = [], l = !o.length;
            if (!bf(js(t), i[0], i[1], n)) {
                l && (o = [{value: If(new Date(i[0]), t, n)}, {value: i[1]}]);
                for (var u = 0; u < o.length - 1; u++) {
                    var h = o[u].value, c = o[u + 1].value;
                    if (h !== c) {
                        var p = void 0, f = void 0, d = void 0, g = !1;
                        switch (t) {
                            case"year":
                                p = Math.max(1, Math.round(e / rM / 365)), f = tl(n), d = sl(n);
                                break;
                            case"half-year":
                            case"quarter":
                            case"month":
                                p = Sf(e), f = el(n), d = ll(n);
                                break;
                            case"week":
                            case"half-week":
                            case"day":
                                p = wf(e, 31), f = nl(n), d = ul(n), g = !0;
                                break;
                            case"half-day":
                            case"quarter-day":
                            case"hour":
                                p = Mf(e), f = il(n), d = hl(n);
                                break;
                            case"minute":
                                p = Tf(e, !0), f = rl(n), d = cl(n);
                                break;
                            case"second":
                                p = Tf(e, !1), f = ol(n), d = pl(n);
                                break;
                            case"millisecond":
                                p = Cf(e), f = al(n), d = fl(n)
                        }
                        r(p, h, c, f, d, g, s), "year" === t && a.length > 1 && 0 === u && a.unshift({value: a[0].value - p})
                    }
                }
                for (var u = 0; u < s.length; u++) a.push(s[u]);
                return s
            }
        }

        for (var a = 1e4, s = hM, l = 0, u = [], h = [], c = 0, p = 0, f = 0; f < s.length && l++ < a; ++f) {
            var d = js(s[f]);
            if (qs(s[f])) {
                o(s[f], u[u.length - 1] || [], h);
                var g = s[f + 1] ? js(s[f + 1]) : null;
                if (d !== g) {
                    if (h.length) {
                        p = c, h.sort(function (t, e) {
                            return t.value - e.value
                        });
                        for (var y = [], m = 0; m < h.length; ++m) {
                            var x = h[m].value;
                            (0 === m || h[m - 1].value !== x) && (y.push(h[m]), x >= i[0] && x <= i[1] && c++)
                        }
                        var b = (i[1] - i[0]) / e;
                        if (c > 1.5 * b && p > b / 1.5) break;
                        if (u.push(y), c > b || t === s[f]) break
                    }
                    h = []
                }
            }
        }
        for (var w = _(v(u, function (t) {
            return _(t, function (t) {
                return t.value >= i[0] && t.value <= i[1] && !t.notAdd
            })
        }), function (t) {
            return t.length > 0
        }), S = [], M = w.length - 1, f = 0; f < w.length; ++f) for (var T = w[f], C = 0; C < T.length; ++C) S.push({
            value: T[C].value,
            level: M - f
        });
        S.sort(function (t, e) {
            return t.value - e.value
        });
        for (var I = [], f = 0; f < S.length; ++f) (0 === f || S[f].value !== S[f - 1].value) && I.push(S[f]);
        return I
    }

    function kf(t, e) {
        return dk(t, wi(e))
    }

    function Af(t, e, n) {
        var i = t.rawExtentInfo;
        return i ? i : (i = new bk(t, e, n), t.rawExtentInfo = i, i)
    }

    function Pf(t, e) {
        return null == e ? null : E(e) ? 0 / 0 : t.parse(e)
    }

    function Lf(t, e) {
        var n = t.type, i = Af(t, e, t.getExtent()).calculate();
        t.setBlank(i.isBlank);
        var r = i.min, o = i.max, a = e.ecModel;
        if (a && "time" === n) {
            var s = ff("bar", a), l = !1;
            if (y(s, function (t) {
                l = l || t.getBaseAxis() === e.axis
            }), l) {
                var u = gf(s), h = Of(r, o, e, u);
                r = h.min, o = h.max
            }
        }
        return {extent: [r, o], fixMin: i.minFixed, fixMax: i.maxFixed}
    }

    function Of(t, e, n, i) {
        var r = n.axis.getExtent(), o = r[1] - r[0], a = vf(i, n.axis);
        if (void 0 === a) return {min: t, max: e};
        var s = 1 / 0;
        y(a, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        y(a, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var u = s + l, h = e - t, c = 1 - (s + l) / o, p = h / c - h;
        return e += p * (l / u), t -= p * (s / u), {min: t, max: e}
    }

    function Rf(t, e) {
        var n = e, i = Lf(t, n), r = i.extent, o = n.get("splitNumber");
        t instanceof _k && (t.base = n.get("logBase"));
        var a = t.type;
        t.setExtent(r[0], r[1]), t.niceExtent({
            splitNumber: o,
            fixMin: i.fixMin,
            fixMax: i.fixMax,
            minInterval: "interval" === a || "time" === a ? n.get("minInterval") : null,
            maxInterval: "interval" === a || "time" === a ? n.get("maxInterval") : null
        });
        var s = n.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function zf(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new ik({
                    ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
                    extent: [1 / 0, -1 / 0]
                });
            case"time":
                return new hk({locale: t.ecModel.getLocaleModel(), useUTC: t.ecModel.get("useUTC")});
            default:
                return new (QD.getClass(e) || ok)
        }
    }

    function Ef(t) {
        var e = t.scale.getExtent(), n = e[0], i = e[1];
        return !(n > 0 && i > 0 || 0 > n && 0 > i)
    }

    function Nf(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "time" === t.scale.type ? function (e) {
            return function (n, i) {
                return t.scale.getFormattedLabel(n, i, e)
            }
        }(e) : "string" == typeof e ? function (e) {
            return function (n) {
                var i = t.scale.getLabel(n), r = e.replace("{value}", null != i ? i : "");
                return r
            }
        }(e) : "function" == typeof e ? function (e) {
            return function (i, r) {
                return null != n && (r = i.value - n), e(Bf(t, i), r, null != i.level ? {level: i.level} : null)
            }
        }(e) : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function Bf(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e.value
    }

    function Ff(t) {
        var e = t.model, n = t.scale;
        if (e.get(["axisLabel", "show"]) && !n.isBlank()) {
            var i, r, o = n.getExtent();
            n instanceof ik ? r = n.count() : (i = n.getTicks(), r = i.length);
            var a, s = t.getLabelModel(), l = Nf(t), u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var h = 0; r > h; h += u) {
                var c = i ? i[h] : {value: o[0] + h}, p = l(c, h), f = s.getTextRect(p),
                    d = Vf(f, s.get("rotate") || 0);
                a ? a.union(d) : a = d
            }
            return a
        }
    }

    function Vf(t, e) {
        var n = e * Math.PI / 180, i = t.width, r = t.height, o = i * Math.abs(Math.cos(n)) + Math.abs(r * Math.sin(n)),
            a = i * Math.abs(Math.sin(n)) + Math.abs(r * Math.cos(n)), s = new ex(t.x, t.y, o, a);
        return s
    }

    function Hf(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function Gf(t) {
        return "category" === t.type && 0 === Hf(t.getLabelModel())
    }

    function Wf(t, e) {
        var n = {};
        return y(t.mapDimensionsAll(e), function (e) {
            n[Kp(t, e)] = !0
        }), b(n)
    }

    function Uf(t) {
        return Qp(null, t)
    }

    function Xf(t, e) {
        var n = e;
        e instanceof XS || (n = new XS(e));
        var i = zf(n);
        return i.setExtent(t[0], t[1]), Rf(i, n), i
    }

    function Yf(t) {
        d(t, Mk)
    }

    function jf(t, e) {
        return e = e || {}, Ps(t, null, null, "normal" !== e.state)
    }

    function qf(t) {
        return M(t) ? void y(t, function (t) {
            qf(t)
        }) : void (p(Ik, t) >= 0 || (Ik.push(t), T(t) && (t = {install: t}), t.install(Dk)))
    }

    function Zf(t) {
        return "category" === t.type ? $f(t) : td(t)
    }

    function Kf(t, e) {
        return "category" === t.type ? Qf(t, e) : {
            ticks: v(t.scale.getTicks(), function (t) {
                return t.value
            })
        }
    }

    function $f(t) {
        var e = t.getLabelModel(), n = Jf(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: n.labelCategoryInterval} : n
    }

    function Jf(t, e) {
        var n = ed(t, "labels"), i = Hf(e), r = nd(n, i);
        if (r) return r;
        var o, a;
        return T(i) ? o = ld(t, i) : (a = "auto" === i ? rd(t) : i, o = sd(t, a)), id(n, i, {
            labels: o,
            labelCategoryInterval: a
        })
    }

    function Qf(t, e) {
        var n = ed(t, "ticks"), i = Hf(e), r = nd(n, i);
        if (r) return r;
        var o, a;
        if ((!e.get("show") || t.scale.isBlank()) && (o = []), T(i)) o = ld(t, i, !0); else if ("auto" === i) {
            var s = Jf(t, t.getLabelModel());
            a = s.labelCategoryInterval, o = v(s.labels, function (t) {
                return t.tickValue
            })
        } else a = i, o = sd(t, a, !0);
        return id(n, i, {ticks: o, tickCategoryInterval: a})
    }

    function td(t) {
        var e = t.scale.getTicks(), n = Nf(t);
        return {
            labels: v(e, function (e, i) {
                return {level: e.level, formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e.value}
            })
        }
    }

    function ed(t, e) {
        return Rk(t)[e] || (Rk(t)[e] = [])
    }

    function nd(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
    }

    function id(t, e, n) {
        return t.push({key: e, value: n}), n
    }

    function rd(t) {
        var e = Rk(t).autoInterval;
        return null != e ? e : Rk(t).autoInterval = t.calculateCategoryInterval()
    }

    function od(t) {
        var e = ad(t), n = Nf(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, o = r.getExtent(),
            a = r.count();
        if (o[1] - o[0] < 1) return 0;
        var s = 1;
        a > 40 && (s = Math.max(1, Math.floor(a / 40)));
        for (var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), p = 0, f = 0; l <= o[1]; l += s) {
            var d = 0, g = 0, y = Qn(n({value: l}), e.font, "center", "top");
            d = 1.3 * y.width, g = 1.3 * y.height, p = Math.max(p, d, 7), f = Math.max(f, g, 7)
        }
        var v = p / h, m = f / c;
        isNaN(v) && (v = 1 / 0), isNaN(m) && (m = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(v, m))), x = Rk(t.model), b = t.getExtent(), w = x.lastAutoInterval,
            S = x.lastTickCount;
        return null != w && null != S && Math.abs(w - _) <= 1 && Math.abs(S - a) <= 1 && w > _ && x.axisExtent0 === b[0] && x.axisExtent1 === b[1] ? _ = w : (x.lastTickCount = a, x.lastAutoInterval = _, x.axisExtent0 = b[0], x.axisExtent1 = b[1]), _
    }

    function ad(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function sd(t, e, n) {
        function i(t) {
            var e = {value: t};
            l.push(n ? t : {formattedLabel: r(e), rawLabel: o.getLabel(e), tickValue: t})
        }

        var r = Nf(t), o = t.scale, a = o.getExtent(), s = t.getLabelModel(), l = [], u = Math.max((e || 0) + 1, 1),
            h = a[0], c = o.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var p = Gf(t), f = s.get("showMinLabel") || p, d = s.get("showMaxLabel") || p;
        f && h !== a[0] && i(a[0]);
        for (var g = h; g <= a[1]; g += u) i(g);
        return d && g - u !== a[1] && i(a[1]), l
    }

    function ld(t, e, n) {
        var i = t.scale, r = Nf(t), o = [];
        return y(i.getTicks(), function (t) {
            var a = i.getLabel(t), s = t.value;
            e(t.value, a) && o.push(n ? s : {formattedLabel: r(t), rawLabel: a, tickValue: s})
        }), o
    }

    function ud(t, e) {
        var n = t[1] - t[0], i = e, r = n / i / 2;
        t[0] += r, t[1] -= r
    }

    function hd(t, e, n, i) {
        function r(t, e) {
            return t = xi(t), e = xi(e), p ? t > e : e > t
        }

        var o = e.length;
        if (t.onBand && !n && o) {
            var a, s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0], a = e[1] = {coord: l[0]}; else {
                var u = e[o - 1].tickValue - e[0].tickValue, h = (e[o - 1].coord - e[0].coord) / u;
                y(e, function (t) {
                    t.coord -= h / 2
                });
                var c = t.scale.getExtent();
                s = 1 + c[1] - e[o - 1].tickValue, a = {coord: e[o - 1].coord + h * s}, e.push(a)
            }
            var p = l[0] > l[1];
            r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({coord: l[0]}), r(l[1], a.coord) && (i ? a.coord = l[1] : e.pop()), i && r(a.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function cd(t) {
        var e = bM.extend(t);
        return bM.registerClass(e), e
    }

    function pd(t) {
        var e = VT.extend(t);
        return VT.registerClass(e), e
    }

    function fd(t) {
        var e = FT.extend(t);
        return FT.registerClass(e), e
    }

    function dd(t) {
        var e = WT.extend(t);
        return WT.registerClass(e), e
    }

    function gd(t, e, n, i, r) {
        var o = n.width, a = n.height;
        switch (t) {
            case"top":
                i.set(n.x + o / 2, n.y - e), r.set(0, -1);
                break;
            case"bottom":
                i.set(n.x + o / 2, n.y + a + e), r.set(0, 1);
                break;
            case"left":
                i.set(n.x - e, n.y + a / 2), r.set(-1, 0);
                break;
            case"right":
                i.set(n.x + o + e, n.y + a / 2), r.set(1, 0)
        }
    }

    function yd(t, e, n, i, r, o, a, s, l) {
        a -= t, s -= e;
        var u = Math.sqrt(a * a + s * s);
        a /= u, s /= u;
        var h = a * n + t, c = s * n + e;
        if (Math.abs(i - r) % Nk < 1e-4) return l[0] = h, l[1] = c, u - n;
        if (o) {
            var p = i;
            i = fo(r), r = fo(p)
        } else i = fo(i), r = fo(r);
        i > r && (r += Nk);
        var f = Math.atan2(s, a);
        if (0 > f && (f += Nk), f >= i && r >= f || f + Nk >= i && r >= f + Nk) return l[0] = h, l[1] = c, u - n;
        var d = n * Math.cos(i) + t, g = n * Math.sin(i) + e, y = n * Math.cos(r) + t, v = n * Math.sin(r) + e,
            m = (d - a) * (d - a) + (g - s) * (g - s), _ = (y - a) * (y - a) + (v - s) * (v - s);
        return _ > m ? (l[0] = d, l[1] = g, Math.sqrt(m)) : (l[0] = y, l[1] = v, Math.sqrt(_))
    }

    function vd(t, e, n, i, r, o, a, s) {
        var l = r - t, u = o - e, h = n - t, c = i - e, p = Math.sqrt(h * h + c * c);
        h /= p, c /= p;
        var f = l * h + u * c, d = f / p;
        s && (d = Math.min(Math.max(d, 0), 1)), d *= p;
        var g = a[0] = t + d * h, y = a[1] = e + d * c;
        return Math.sqrt((g - r) * (g - r) + (y - o) * (y - o))
    }

    function md(t, e, n, i, r, o, a) {
        0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i);
        var s = t + n, l = e + i, u = a[0] = Math.min(Math.max(r, t), s), h = a[1] = Math.min(Math.max(o, e), l);
        return Math.sqrt((u - r) * (u - r) + (h - o) * (h - o))
    }

    function _d(t, e, n) {
        var i = md(e.x, e.y, e.width, e.height, t.x, t.y, Vk);
        return n.set(Vk[0], Vk[1]), i
    }

    function xd(t, e, n) {
        for (var i, r, o = 0, a = 0, s = 0, l = 0, u = 1 / 0, h = e.data, c = t.x, p = t.y, f = 0; f < h.length;) {
            var d = h[f++];
            1 === f && (o = h[f], a = h[f + 1], s = o, l = a);
            var g = u;
            switch (d) {
                case Bk.M:
                    s = h[f++], l = h[f++], o = s, a = l;
                    break;
                case Bk.L:
                    g = vd(o, a, h[f], h[f + 1], c, p, Vk, !0), o = h[f++], a = h[f++];
                    break;
                case Bk.C:
                    g = qr(o, a, h[f++], h[f++], h[f++], h[f++], h[f], h[f + 1], c, p, Vk), o = h[f++], a = h[f++];
                    break;
                case Bk.Q:
                    g = eo(o, a, h[f++], h[f++], h[f], h[f + 1], c, p, Vk), o = h[f++], a = h[f++];
                    break;
                case Bk.A:
                    var y = h[f++], v = h[f++], m = h[f++], _ = h[f++], x = h[f++], b = h[f++];
                    f += 1;
                    var w = !!(1 - h[f++]);
                    i = Math.cos(x) * m + y, r = Math.sin(x) * _ + v, 1 >= f && (s = i, l = r);
                    var S = (c - y) * _ / m + y;
                    g = yd(y, v, _, x, x + b, w, S, p, Vk), o = Math.cos(x + b) * m + y, a = Math.sin(x + b) * _ + v;
                    break;
                case Bk.R:
                    s = o = h[f++], l = a = h[f++];
                    var M = h[f++], T = h[f++];
                    g = md(s, l, M, T, c, p, Vk);
                    break;
                case Bk.Z:
                    g = vd(o, a, s, l, c, p, Vk, !0), o = s, a = l
            }
            u > g && (u = g, n.set(Vk[0], Vk[1]))
        }
        return u
    }

    function bd(t, e) {
        if (t) {
            var n = t.getTextGuideLine(), i = t.getTextContent();
            if (i && n) {
                var r = t.textGuideLineConfig || {}, o = [[0, 0], [0, 0], [0, 0]], a = r.candidates || Fk,
                    s = i.getBoundingRect().clone();
                s.applyTransform(i.getComputedTransform());
                var l = 1 / 0, u = r.anchor, h = t.getComputedTransform(), c = h && jn([], h),
                    p = e.get("length2") || 0;
                u && Wk.copy(u);
                for (var f = 0; f < a.length; f++) {
                    var d = a[f];
                    gd(d, 0, s, Hk, Uk), Y_.scaleAndAdd(Gk, Hk, Uk, p), Gk.transform(c);
                    var g = t.getBoundingRect(),
                        y = u ? u.distance(Gk) : t instanceof Gb ? xd(Gk, t.path, Wk) : _d(Gk, g, Wk);
                    l > y && (l = y, Gk.transform(h), Wk.transform(h), Wk.toArray(o[0]), Gk.toArray(o[1]), Hk.toArray(o[2]))
                }
                wd(o, e.get("minTurnAngle")), n.setShape({points: o})
            }
        }
    }

    function wd(t, e) {
        if (180 >= e && e > 0) {
            e = e / 180 * Math.PI, Hk.fromArray(t[0]), Gk.fromArray(t[1]), Wk.fromArray(t[2]), Y_.sub(Uk, Hk, Gk), Y_.sub(Xk, Wk, Gk);
            var n = Uk.len(), i = Xk.len();
            if (!(.001 > n || .001 > i)) {
                Uk.scale(1 / n), Xk.scale(1 / i);
                var r = Uk.dot(Xk), o = Math.cos(e);
                if (r > o) {
                    var a = vd(Gk.x, Gk.y, Wk.x, Wk.y, Hk.x, Hk.y, Yk, !1);
                    jk.fromArray(Yk), jk.scaleAndAdd(Xk, a / Math.tan(Math.PI - e));
                    var s = Wk.x !== Gk.x ? (jk.x - Gk.x) / (Wk.x - Gk.x) : (jk.y - Gk.y) / (Wk.y - Gk.y);
                    if (isNaN(s)) return;
                    0 > s ? Y_.copy(jk, Gk) : s > 1 && Y_.copy(jk, Wk), jk.toArray(t[1])
                }
            }
        }
    }

    function Sd(t, e, n) {
        if (180 >= n && n > 0) {
            n = n / 180 * Math.PI, Hk.fromArray(t[0]), Gk.fromArray(t[1]), Wk.fromArray(t[2]), Y_.sub(Uk, Gk, Hk), Y_.sub(Xk, Wk, Gk);
            var i = Uk.len(), r = Xk.len();
            if (!(.001 > i || .001 > r)) {
                Uk.scale(1 / i), Xk.scale(1 / r);
                var o = Uk.dot(e), a = Math.cos(n);
                if (a > o) {
                    var s = vd(Gk.x, Gk.y, Wk.x, Wk.y, Hk.x, Hk.y, Yk, !1);
                    jk.fromArray(Yk);
                    var l = Math.PI / 2, u = Math.acos(Xk.dot(e)), h = l + u - n;
                    if (h >= l) Y_.copy(jk, Wk); else {
                        jk.scaleAndAdd(Xk, s / Math.tan(Math.PI / 2 - h));
                        var c = Wk.x !== Gk.x ? (jk.x - Gk.x) / (Wk.x - Gk.x) : (jk.y - Gk.y) / (Wk.y - Gk.y);
                        if (isNaN(c)) return;
                        0 > c ? Y_.copy(jk, Gk) : c > 1 && Y_.copy(jk, Wk)
                    }
                    jk.toArray(t[1])
                }
            }
        }
    }

    function Md(t, e, n, i) {
        var r = "normal" === n, o = r ? t : t.ensureState(n);
        o.ignore = e;
        var a = i.get("smooth");
        a && a === !0 && (a = .3), o.shape = o.shape || {}, a > 0 && (o.shape.smooth = a);
        var s = i.getModel("lineStyle").getLineStyle();
        r ? t.useStyle(s) : o.style = s
    }

    function Td(t, e) {
        var n = e.smooth, i = e.points;
        if (i) if (t.moveTo(i[0][0], i[0][1]), n > 0 && i.length >= 3) {
            var r = Dm(i[0], i[1]), o = Dm(i[1], i[2]);
            if (!r || !o) return t.lineTo(i[1][0], i[1][1]), void t.lineTo(i[2][0], i[2][1]);
            var a = Math.min(r, o) * n, s = de([], i[1], i[0], a / r), l = de([], i[1], i[2], a / o),
                u = de([], s, l, .5);
            t.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), t.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1])
        } else for (var h = 1; h < i.length; h++) t.lineTo(i[h][0], i[h][1])
    }

    function Cd(t, e, n) {
        var i = t.getTextGuideLine(), r = t.getTextContent();
        if (!r) return void (i && t.removeTextGuideLine());
        for (var o = e.normal, a = o.get("show"), s = r.ignore, l = 0; l < fw.length; l++) {
            var u = fw[l], h = e[u], p = "normal" === u;
            if (h) {
                var f = h.get("show"), d = p ? s : B(r.states[u] && r.states[u].ignore, s);
                if (d || !B(f, a)) {
                    var g = p ? i : i && i.states.normal;
                    g && (g.ignore = !0);
                    continue
                }
                i || (i = new iS, t.setTextGuideLine(i), p || !s && a || Md(i, !0, "normal", e.normal), t.stateProxy && (i.stateProxy = t.stateProxy)), Md(i, !1, u, h)
            }
        }
        if (i) {
            c(i.style, n), i.style.fill = null;
            var y = o.get("showAbove"), v = t.textGuideLineConfig = t.textGuideLineConfig || {};
            v.showAbove = y || !1, i.buildPath = Td
        }
    }

    function Id(t, e) {
        e = e || "labelLine";
        for (var n = {normal: t.getModel(e)}, i = 0; i < pw.length; i++) {
            var r = pw[i];
            n[r] = t.getModel([r, e])
        }
        return n
    }

    function Dd(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            if (!i.defaultAttr.ignore) {
                var r = i.label, o = r.getComputedTransform(), a = r.getBoundingRect(),
                    s = !o || o[1] < 1e-5 && o[2] < 1e-5, l = r.style.margin || 0, u = a.clone();
                u.applyTransform(o), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
                var h = s ? new xS(a, o) : null;
                e.push({
                    label: r,
                    labelLine: i.labelLine,
                    rect: u,
                    localRect: a,
                    obb: h,
                    priority: i.priority,
                    defaultAttr: i.defaultAttr,
                    layoutOption: i.computedLayoutOption,
                    axisAligned: s,
                    transform: o
                })
            }
        }
        return e
    }

    function kd(t, e, n, i, r, o) {
        function a() {
            b = S.rect[e] - i, w = r - M.rect[e] - M.rect[n]
        }

        function s(t, e, n) {
            if (0 > t) {
                var i = Math.min(e, -t);
                if (i > 0) {
                    l(i * n, 0, c);
                    var r = i + t;
                    0 > r && u(-r * n, 1)
                } else u(-t * n, 1)
            }
        }

        function l(n, i, r) {
            0 !== n && (d = !0);
            for (var o = i; r > o; o++) {
                var a = t[o], s = a.rect;
                s[e] += n, a.label[e] += n
            }
        }

        function u(i, r) {
            for (var o = [], a = 0, s = 1; c > s; s++) {
                var u = t[s - 1].rect, h = Math.max(t[s].rect[e] - u[e] - u[n], 0);
                o.push(h), a += h
            }
            if (a) {
                var p = Math.min(Math.abs(i) / a, r);
                if (i > 0) for (var s = 0; c - 1 > s; s++) {
                    var f = o[s] * p;
                    l(f, 0, s + 1)
                } else for (var s = c - 1; s > 0; s--) {
                    var f = o[s - 1] * p;
                    l(-f, s, c)
                }
            }
        }

        function h(t) {
            var e = 0 > t ? -1 : 1;
            t = Math.abs(t);
            for (var n = Math.ceil(t / (c - 1)), i = 0; c - 1 > i; i++) if (e > 0 ? l(n, 0, i + 1) : l(-n, c - i - 1, c), t -= n, 0 >= t) return
        }

        var c = t.length;
        if (!(2 > c)) {
            t.sort(function (t, n) {
                return t.rect[e] - n.rect[e]
            });
            for (var p, f = 0, d = !1, g = [], y = 0, v = 0; c > v; v++) {
                var m = t[v], _ = m.rect;
                p = _[e] - f, 0 > p && (_[e] -= p, m.label[e] -= p, d = !0);
                var x = Math.max(-p, 0);
                g.push(x), y += x, f = _[e] + _[n]
            }
            y > 0 && o && l(-y / c, 0, c);
            var b, w, S = t[0], M = t[c - 1];
            return a(), 0 > b && u(-b, .8), 0 > w && u(w, .8), a(), s(b, w, 1), s(w, b, -1), a(), 0 > b && h(-b), 0 > w && h(w), d
        }
    }

    function Ad(t, e, n, i) {
        return kd(t, "x", "width", e, n, i)
    }

    function Pd(t, e, n, i) {
        return kd(t, "y", "height", e, n, i)
    }

    function Ld(t) {
        function e(t) {
            if (!t.ignore) {
                var e = t.ensureState("emphasis");
                null == e.ignore && (e.ignore = !1)
            }
            t.ignore = !0
        }

        var n = [];
        t.sort(function (t, e) {
            return e.priority - t.priority
        });
        for (var i = new ex(0, 0, 0, 0), r = 0; r < t.length; r++) {
            var o = t[r], a = o.axisAligned, s = o.localRect, l = o.transform, u = o.label, h = o.labelLine;
            i.copy(o.rect), i.width -= .1, i.height -= .1, i.x += .05, i.y += .05;
            for (var c = o.obb, p = !1, f = 0; f < n.length; f++) {
                var d = n[f];
                if (i.intersect(d.rect)) {
                    if (a && d.axisAligned) {
                        p = !0;
                        break
                    }
                    if (d.obb || (d.obb = new xS(d.localRect, d.transform)), c || (c = new xS(s, l)), c.intersect(d.obb)) {
                        p = !0;
                        break
                    }
                }
            }
            p ? (e(u), h && e(h)) : (u.attr("ignore", o.defaultAttr.ignore), h && h.attr("ignore", o.defaultAttr.labelGuideIgnore), n.push(o))
        }
    }

    function Od(t) {
        if (t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
            return e
        }
    }

    function Rd(t, e) {
        var n = t.label, i = e && e.getTextGuideLine();
        return {
            dataIndex: t.dataIndex,
            dataType: t.dataType,
            seriesIndex: t.seriesModel.seriesIndex,
            text: t.label.style.text,
            rect: t.hostRect,
            labelRect: t.rect,
            align: n.style.align,
            verticalAlign: n.style.verticalAlign,
            labelLinePoints: Od(i && i.shape.points)
        }
    }

    function zd(t, e, n) {
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            null != e[r] && (t[r] = e[r])
        }
    }

    function Ed(t) {
        t.registerUpdateLifecycle("series:beforeupdate", function (t, e) {
            var n = tA(e).labelManager;
            n || (n = tA(e).labelManager = new Qk), n.clearLabels()
        }), t.registerUpdateLifecycle("series:layoutlabels", function (t, e, n) {
            var i = tA(e).labelManager;
            n.updatedSeries.forEach(function (t) {
                i.addLabelsOfSeries(e.getViewOfSeriesModel(t))
            }), i.updateLayoutConfig(e), i.layout(e), i.processLabelsOverall()
        })
    }

    function Nd() {
        return !1
    }

    function Bd(t, e, n) {
        var i = bm(), r = e.getWidth(), o = e.getHeight(), a = i.style;
        return a && (a.position = "absolute", a.left = "0", a.top = "0", a.width = r + "px", a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, i
    }

    function Fd(t) {
        return parseInt(t, 10)
    }

    function Vd(t) {
        return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
    }

    function Hd(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    function Gd(t) {
        t.registerPainter("canvas", aA)
    }

    function Wd(t) {
        t.registerComponentModel(sA), t.registerComponentView(lA)
    }

    function Ud(t, e) {
        var n = t.mapDimensionsAll("defaultedLabel"), i = n.length;
        if (1 === i) {
            var r = Lu(t, e, n[0]);
            return null != r ? r + "" : null
        }
        if (i) {
            for (var o = [], a = 0; a < n.length; a++) o.push(Lu(t, e, n[a]));
            return o.join(" ")
        }
    }

    function Xd(t, e) {
        var n = t.mapDimensionsAll("defaultedLabel");
        if (!M(e)) return e + "";
        for (var i = [], r = 0; r < n.length; r++) {
            var o = t.getDimensionIndex(n[r]);
            o >= 0 && i.push(e[o])
        }
        return i.join(" ")
    }

    function Yd(t, e) {
        this.parent.drift(t, e)
    }

    function jd(t, e, n, i) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"))
    }

    function qd(t) {
        return null == t || k(t) || (t = {isIgnore: t}), t || {}
    }

    function Zd(t) {
        var e = t.hostModel, n = e.getModel("emphasis");
        return {
            emphasisItemStyle: n.getModel("itemStyle").getItemStyle(),
            blurItemStyle: e.getModel(["blur", "itemStyle"]).getItemStyle(),
            selectItemStyle: e.getModel(["select", "itemStyle"]).getItemStyle(),
            focus: n.get("focus"),
            blurScope: n.get("blurScope"),
            hoverScale: n.get("scale"),
            labelStatesModels: As(e),
            cursorStyle: e.get("cursor")
        }
    }

    function Kd(t, e, n) {
        var i = t.getBaseAxis(), r = t.getOtherAxis(i), o = $d(r, n), a = i.dim, s = r.dim, l = e.mapDimension(s),
            u = e.mapDimension(a), h = "x" === s || "radius" === s ? 1 : 0, c = v(t.dimensions, function (t) {
                return e.mapDimension(t)
            }), p = !1, f = e.getCalculationInfo("stackResultDimension");
        return Zp(e, c[0]) && (p = !0, c[0] = f), Zp(e, c[1]) && (p = !0, c[1] = f), {
            dataDimsForPoint: c,
            valueStart: o,
            valueAxisDim: s,
            baseAxisDim: a,
            stacked: !!p,
            valueDim: l,
            baseDim: u,
            baseDataOffset: h,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }

    function $d(t, e) {
        var n = 0, i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
    }

    function Jd(t, e, n, i) {
        var r = 0 / 0;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
        var o = t.baseDataOffset, a = [];
        return a[o] = n.get(t.baseDim, i), a[1 - o] = r, e.dataToPoint(a)
    }

    function Qd(t) {
        return M(t) ? pA ? new Float32Array(t) : t : new fA(t)
    }

    function tg(t, e) {
        var n = [];
        return e.diff(t).add(function (t) {
            n.push({cmd: "+", idx: t})
        }).update(function (t, e) {
            n.push({cmd: "=", idx: e, idx1: t})
        }).remove(function (t) {
            n.push({cmd: "-", idx: t})
        }).execute(), n
    }

    function eg(t, e, n, i, r, o, a) {
        for (var s = tg(t, e), l = [], u = [], h = [], c = [], p = [], f = [], d = [], g = Kd(r, e, a), y = t.getLayout("points") || [], v = e.getLayout("points") || [], m = 0; m < s.length; m++) {
            var _ = s[m], x = !0, b = void 0, w = void 0;
            switch (_.cmd) {
                case"=":
                    b = 2 * _.idx, w = 2 * _.idx1;
                    var S = y[b], M = y[b + 1], T = v[w], C = v[w + 1];
                    (isNaN(S) || isNaN(M)) && (S = T, M = C), l.push(S, M), u.push(T, C), h.push(n[b], n[b + 1]), c.push(i[w], i[w + 1]), d.push(e.getRawIndex(_.idx1));
                    break;
                case"+":
                    var I = _.idx, D = g.dataDimsForPoint, k = r.dataToPoint([e.get(D[0], I), e.get(D[1], I)]);
                    w = 2 * I, l.push(k[0], k[1]), u.push(v[w], v[w + 1]);
                    var A = Jd(g, r, e, I);
                    h.push(A[0], A[1]), c.push(i[w], i[w + 1]), d.push(e.getRawIndex(I));
                    break;
                case"-":
                    x = !1
            }
            x && (p.push(_), f.push(f.length))
        }
        f.sort(function (t, e) {
            return d[t] - d[e]
        });
        for (var P = l.length, L = Qd(P), O = Qd(P), R = Qd(P), z = Qd(P), E = [], m = 0; m < f.length; m++) {
            var N = f[m], B = 2 * m, F = 2 * N;
            L[B] = l[F], L[B + 1] = l[F + 1], O[B] = u[F], O[B + 1] = u[F + 1], R[B] = h[F], R[B + 1] = h[F + 1], z[B] = c[F], z[B + 1] = c[F + 1], E[m] = p[N]
        }
        return {current: L, next: O, stackedOnCurrent: R, stackedOnNext: z, status: E}
    }

    function ng(t, e) {
        return isNaN(t) || isNaN(e)
    }

    function ig(t, e, n, i, r, o, a, s, l) {
        for (var u, h, c, p, f, d, g = n, y = 0; i > y; y++) {
            var v = e[2 * g], m = e[2 * g + 1];
            if (g >= r || 0 > g) break;
            if (ng(v, m)) {
                if (l) {
                    g += o;
                    continue
                }
                break
            }
            if (g === n) t[o > 0 ? "moveTo" : "lineTo"](v, m), c = v, p = m; else {
                var _ = v - u, x = m - h;
                if (.5 > _ * _ + x * x) {
                    g += o;
                    continue
                }
                if (a > 0) {
                    for (var b = g + o, w = e[2 * b], S = e[2 * b + 1]; w === v && S === m && i > y;) y++, b += o, g += o, w = e[2 * b], S = e[2 * b + 1], v = e[2 * g], m = e[2 * g + 1], _ = v - u, x = m - h;
                    var M = y + 1;
                    if (l) for (; ng(w, S) && i > M;) M++, b += o, w = e[2 * b], S = e[2 * b + 1];
                    var T = .5, C = 0, I = 0, D = void 0, k = void 0;
                    if (M >= i || ng(w, S)) f = v, d = m; else {
                        C = w - u, I = S - h;
                        var A = v - u, P = w - v, L = m - h, O = S - m, R = void 0, z = void 0;
                        "x" === s ? (R = Math.abs(A), z = Math.abs(P), f = v - R * a, d = m, D = v + R * a, k = m) : "y" === s ? (R = Math.abs(L), z = Math.abs(O), f = v, d = m - R * a, D = v, k = m + R * a) : (R = Math.sqrt(A * A + L * L), z = Math.sqrt(P * P + O * O), T = z / (z + R), f = v - C * a * (1 - T), d = m - I * a * (1 - T), D = v + C * a * T, k = m + I * a * T, D = dA(D, gA(w, v)), k = dA(k, gA(S, m)), D = gA(D, dA(w, v)), k = gA(k, dA(S, m)), C = D - v, I = k - m, f = v - C * R / z, d = m - I * R / z, f = dA(f, gA(u, v)), d = dA(d, gA(h, m)), f = gA(f, dA(u, v)), d = gA(d, dA(h, m)), C = v - f, I = m - d, D = v + C * z / R, k = m + I * z / R)
                    }
                    t.bezierCurveTo(c, p, f, d, v, m), c = D, p = k
                } else t.lineTo(v, m)
            }
            u = v, h = m, g += o
        }
        return y
    }

    function rg(t, e, n, i, r) {
        var o = t.getArea(), a = o.x, s = o.y, l = o.width, u = o.height, h = n.get(["lineStyle", "width"]) || 2;
        a -= h / 2, s -= h / 2, l += h, u += h, a = Math.floor(a), l = Math.round(l);
        var c = new $b({shape: {x: a, y: s, width: l, height: u}});
        if (e) {
            var p = t.getBaseAxis(), f = p.isHorizontal(), d = p.inverse;
            f ? (d && (c.shape.x += l), c.shape.width = 0) : (d || (c.shape.y += u), c.shape.height = 0);
            var g = "function" == typeof r ? function (t) {
                r(t, c)
            } : null;
            $a(c, {shape: {width: l, height: u, x: a, y: s}}, n, null, i, g)
        }
        return c
    }

    function og(t, e, n) {
        var i = t.getArea(), r = xi(i.r0, 1), o = xi(i.r, 1), a = new $w({
            shape: {
                cx: xi(t.cx, 1),
                cy: xi(t.cy, 1),
                r0: r,
                r: o,
                startAngle: i.startAngle,
                endAngle: i.endAngle,
                clockwise: i.clockwise
            }
        });
        if (e) {
            var s = "angle" === t.getBaseAxis().dim;
            s ? a.shape.endAngle = i.startAngle : a.shape.r = r, $a(a, {shape: {endAngle: i.endAngle, r: o}}, n)
        }
        return a
    }

    function ag(t, e) {
        return t.type === e
    }

    function sg(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return;
            return !0
        }
    }

    function lg(t) {
        for (var e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0, o = 0; o < t.length;) {
            var a = t[o++], s = t[o++];
            isNaN(a) || (e = Math.min(a, e), i = Math.max(a, i)), isNaN(s) || (n = Math.min(s, n), r = Math.max(s, r))
        }
        return [[e, n], [i, r]]
    }

    function ug(t, e) {
        var n = lg(t), i = n[0], r = n[1], o = lg(e), a = o[0], s = o[1];
        return Math.max(Math.abs(i[0] - a[0]), Math.abs(i[1] - a[1]), Math.abs(r[0] - s[0]), Math.abs(r[1] - s[1]))
    }

    function hg(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }

    function cg(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = e.count(), r = Qd(2 * i), o = 0; i > o; o++) {
            var a = Jd(n, t, e, o);
            r[2 * o] = a[0], r[2 * o + 1] = a[1]
        }
        return r
    }

    function pg(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, o = [], a = 0, s = [], l = [], u = []; a < t.length - 2; a += 2) switch (u[0] = t[a + 2], u[1] = t[a + 3], l[0] = t[a], l[1] = t[a + 1], o.push(l[0], l[1]), n) {
            case"end":
                s[r] = u[r], s[1 - r] = l[1 - r], o.push(s[0], s[1]);
                break;
            case"middle":
                var h = (l[r] + u[r]) / 2, c = [];
                s[r] = c[r] = h, s[1 - r] = l[1 - r], c[1 - r] = u[1 - r], o.push(s[0], s[1]), o.push(c[0], c[1]);
                break;
            default:
                s[r] = l[r], s[1 - r] = u[1 - r], o.push(s[0], s[1])
        }
        return o.push(t[a++], t[a++]), o
    }

    function fg(t, e) {
        function n(t, e, n) {
            var i = t.coord, r = (n - i) / (e.coord - i), o = cn(r, [t.color, e.color]);
            return {coord: n, color: o}
        }

        for (var i, r, o = [], a = t.length, s = 0; a > s; s++) {
            var l = t[s], u = l.coord;
            if (0 > u) i = l; else {
                if (u > e) {
                    r ? o.push(n(r, l, e)) : i && o.push(n(i, l, 0), n(i, l, e));
                    break
                }
                i && (o.push(n(i, l, 0)), i = null), o.push(l), r = l
            }
        }
        return o
    }

    function dg(t, e, n) {
        var i = t.getVisual("visualMeta");
        if (i && i.length && t.count() && "cartesian2d" === e.type) {
            for (var r, o, a = i.length - 1; a >= 0; a--) {
                var s = t.getDimensionInfo(i[a].dimension);
                if (r = s && s.coordDim, "x" === r || "y" === r) {
                    o = i[a];
                    break
                }
            }
            if (o) {
                var l = e.getAxis(r), u = v(o.stops, function (t) {
                    return {coord: l.toGlobalCoord(l.dataToCoord(t.value)), color: t.color}
                }), h = u.length, c = o.outerColors.slice();
                h && u[0].coord > u[h - 1].coord && (u.reverse(), c.reverse());
                var p = fg(u, "x" === r ? n.getWidth() : n.getHeight()), f = p.length;
                if (!f && h) return u[0].coord < 0 ? c[1] ? c[1] : u[h - 1].color : c[0] ? c[0] : u[0].color;
                var d = 10, g = p[0].coord - d, m = p[f - 1].coord + d, _ = m - g;
                if (.001 > _) return "transparent";
                y(p, function (t) {
                    t.offset = (t.coord - g) / _
                }), p.push({
                    offset: f ? p[f - 1].offset : .5,
                    color: c[1] || "transparent"
                }), p.unshift({offset: f ? p[0].offset : .5, color: c[0] || "transparent"});
                var x = new dS(0, 0, 0, 0, p, !0);
                return x[r] = g, x[r + "2"] = m, x
            }
        }
    }

    function gg(t, e, n) {
        var i = t.get("showAllSymbol"), r = "auto" === i;
        if (!i || r) {
            var o = n.getAxesByScale("ordinal")[0];
            if (o && (!r || !yg(o, e))) {
                var a = e.mapDimension(o.dim), s = {};
                return y(o.getViewLabels(), function (t) {
                    var e = o.scale.getRawOrdinalNumber(t.tickValue);
                    s[e] = 1
                }), function (t) {
                    return !s.hasOwnProperty(e.get(a, t))
                }
            }
        }
    }

    function yg(t, e) {
        var n = t.getExtent(), i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; r > a; a += o) if (1.5 * hA.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0
    }

    function vg(t, e) {
        return isNaN(t) || isNaN(e)
    }

    function mg(t) {
        for (var e = t.length / 2; e > 0 && vg(t[2 * e - 2], t[2 * e - 1]); e--) ;
        return e - 1
    }

    function _g(t, e) {
        return [t[2 * e], t[2 * e + 1]]
    }

    function xg(t, e, n) {
        for (var i, r, o = t.length / 2, a = "x" === n ? 0 : 1, s = 0, l = -1, u = 0; o > u; u++) if (r = t[2 * u + a], !isNaN(r) && !isNaN(t[2 * u + 1 - a])) if (0 !== u) {
            if (e >= i && r >= e || i >= e && e >= r) {
                l = u;
                break
            }
            s = u, i = r
        } else i = r;
        return {range: [s, l], t: (e - i) / (r - i)}
    }

    function bg(t) {
        if (t.get(["endLabel", "show"])) return !0;
        for (var e = 0; e < pw.length; e++) if (t.get([pw[e], "endLabel", "show"])) return !0;
        return !1
    }

    function wg(t, e, n, i) {
        if (ag(e, "cartesian2d")) {
            var r = i.getModel("endLabel"), o = r.get("valueAnimation"), a = i.getData(), s = {lastFrameIndex: 0},
                l = bg(i) ? function (n, i) {
                    t._endLabelOnDuring(n, i, a, s, o, r, e)
                } : null, u = e.getBaseAxis().isHorizontal(), h = rg(e, n, i, function () {
                    var e = t._endLabel;
                    e && n && null != s.originalX && e.attr({x: s.originalX, y: s.originalY})
                }, l);
            if (!i.get("clip", !0)) {
                var c = h.shape, p = Math.max(c.width, c.height);
                u ? (c.y -= p, c.height += 2 * p) : (c.x -= p, c.width += 2 * p)
            }
            return l && l(1, h), h
        }
        return og(e, n, i)
    }

    function Sg(t, e) {
        var n = e.getBaseAxis(), i = n.isHorizontal(), r = n.inverse, o = i ? r ? "right" : "left" : "center",
            a = i ? "middle" : r ? "top" : "bottom";
        return {normal: {align: t.get("align") || o, verticalAlign: t.get("verticalAlign") || a}}
    }

    function Mg(t, e) {
        return {
            seriesType: t, plan: wh(), reset: function (t) {
                var n = t.getData(), i = t.coordinateSystem, r = t.pipelineContext, o = e || r.large;
                if (i) {
                    var a = v(i.dimensions, function (t) {
                        return n.mapDimension(t)
                    }).slice(0, 2), s = a.length, l = n.getCalculationInfo("stackResultDimension");
                    Zp(n, a[0]) && (a[0] = l), Zp(n, a[1]) && (a[1] = l);
                    var u = n.getStore(), h = n.getDimensionIndex(a[0]), c = n.getDimensionIndex(a[1]);
                    return s && {
                        progress: function (t, e) {
                            for (var n = t.end - t.start, r = o && Qd(n * s), a = [], l = [], p = t.start, f = 0; p < t.end; p++) {
                                var d = void 0;
                                if (1 === s) {
                                    var g = u.get(h, p);
                                    d = i.dataToPoint(g, null, l)
                                } else a[0] = u.get(h, p), a[1] = u.get(c, p), d = i.dataToPoint(a, null, l);
                                o ? (r[f++] = d[0], r[f++] = d[1]) : e.setItemLayout(p, d.slice())
                            }
                            o && e.setLayout("points", r)
                        }
                    }
                }
            }
        }
    }

    function Tg(t) {
        return {
            seriesType: t, reset: function (t, e, n) {
                var i = t.getData(), r = t.get("sampling"), o = t.coordinateSystem, a = i.count();
                if (a > 10 && "cartesian2d" === o.type && r) {
                    var s = o.getBaseAxis(), l = o.getOtherAxis(s), u = s.getExtent(), h = n.getDevicePixelRatio(),
                        c = Math.abs(u[1] - u[0]) * (h || 1), p = Math.round(a / c);
                    if (p > 1) {
                        "lttb" === r && t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / p));
                        var f = void 0;
                        "string" == typeof r ? f = bA[r] : "function" == typeof r && (f = r), f && t.setData(i.downSample(i.mapDimension(l.dim), 1 / p, f, wA))
                    }
                }
            }
        }
    }

    function Cg(t) {
        t.registerChartView(xA), t.registerSeriesModel(uA), t.registerLayout(Mg("line", !0)), t.registerVisual({
            seriesType: "line",
            reset: function (t) {
                var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
                n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n)
            }
        }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, Tg("line"))
    }

    function Ig(t, e) {
        return Cl(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
    }

    function Dg(t, e) {
        var n = Ig(t, e), i = t.get("center"), r = t.get("radius");
        M(r) || (r = [0, r]), M(i) || (i = [i, i]);
        var o = _i(n.width, e.getWidth()), a = _i(n.height, e.getHeight()), s = Math.min(o, a), l = _i(i[0], o) + n.x,
            u = _i(i[1], a) + n.y, h = _i(r[0], s / 2), c = _i(r[1], s / 2);
        return {cx: l, cy: u, r0: h, r: c}
    }

    function kg(t, e, n) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), i = e.mapDimension("value"), r = Ig(t, n), o = Dg(t, n), a = o.cx, s = o.cy, l = o.r,
                u = o.r0, h = -t.get("startAngle") * MA, c = t.get("minAngle") * MA, p = 0;
            e.each(i, function (t) {
                !isNaN(t) && p++
            });
            var f = e.getSum(i), d = Math.PI / (f || p) * 2, g = t.get("clockwise"), y = t.get("roseType"),
                v = t.get("stillShowZeroSum"), m = e.getDataExtent(i);
            m[0] = 0;
            var _ = SA, x = 0, b = h, w = g ? 1 : -1;
            if (e.setLayout({viewRect: r, r: l}), e.each(i, function (t, n) {
                var i;
                if (isNaN(t)) return void e.setItemLayout(n, {
                    angle: 0 / 0,
                    startAngle: 0 / 0,
                    endAngle: 0 / 0,
                    clockwise: g,
                    cx: a,
                    cy: s,
                    r0: u,
                    r: y ? 0 / 0 : l
                });
                i = "area" !== y ? 0 === f && v ? d : t * d : SA / p, c > i ? (i = c, _ -= c) : x += t;
                var r = b + w * i;
                e.setItemLayout(n, {
                    angle: i,
                    startAngle: b,
                    endAngle: r,
                    clockwise: g,
                    cx: a,
                    cy: s,
                    r0: u,
                    r: y ? mi(t, m, [u, l]) : l
                }), b = r
            }), SA > _ && p) if (.001 >= _) {
                var S = SA / p;
                e.each(i, function (t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = S, i.startAngle = h + w * n * S, i.endAngle = h + w * (n + 1) * S
                    }
                })
            } else d = _ / x, b = h, e.each(i, function (t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n), r = i.angle === c ? c : t * d;
                    i.startAngle = b, i.endAngle = b + w * r, b += w * r
                }
            })
        })
    }

    function Ag(t) {
        return {
            seriesType: t, reset: function (t, e) {
                var n = e.findComponents({mainType: "legend"});
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function (t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    }

    function Pg(t, e, n, i, r, o, a, s, l, u) {
        function h(t) {
            for (var o = t.rB, a = o * o, s = 0; s < t.list.length; s++) {
                var l = t.list[s], u = Math.abs(l.label.y - n), h = i + l.len, c = h * h,
                    p = Math.sqrt((1 - Math.abs(u * u / a)) * c);
                l.label.x = e + (p + l.len2) * r
            }
        }

        function c(t) {
            for (var o = {list: [], maxY: 0}, a = {
                list: [],
                maxY: 0
            }, s = 0; s < t.length; s++) if ("none" === t[s].labelAlignTo) {
                var l = t[s], u = l.label.y > n ? a : o, c = Math.abs(l.label.y - n);
                if (c > u.maxY) {
                    var p = l.label.x - e - l.len2 * r, f = i + l.len,
                        d = Math.abs(p) < f ? Math.sqrt(c * c / (1 - p * p / f / f)) : f;
                    u.rB = d, u.maxY = c
                }
                u.list.push(l)
            }
            h(o), h(a)
        }

        if (!(t.length < 2)) {
            for (var p = t.length, f = 0; p > f; f++) if ("outer" === t[f].position && "labelLine" === t[f].labelAlignTo) {
                var d = t[f].label.x - u;
                t[f].linePoints[1][0] += d, t[f].label.x = u
            }
            Pd(t, l, l + a) && c(t)
        }
    }

    function Lg(t, e, n, i, r, o, a, s) {
        for (var l = [], u = [], h = Number.MAX_VALUE, c = -Number.MAX_VALUE, p = 0; p < t.length; p++) {
            var f = t[p].label;
            Og(t[p]) || (f.x < e ? (h = Math.min(h, f.x), l.push(t[p])) : (c = Math.max(c, f.x), u.push(t[p])))
        }
        Pg(u, e, n, i, 1, r, o, a, s, c), Pg(l, e, n, i, -1, r, o, a, s, h);
        for (var p = 0; p < t.length; p++) {
            var d = t[p], f = d.label;
            if (!Og(d)) {
                var g = d.linePoints;
                if (g) {
                    var y = "edge" === d.labelAlignTo, v = d.rect.width, m = void 0;
                    m = y ? f.x < e ? g[2][0] - d.labelDistance - a - d.edgeDistance : a + r - d.edgeDistance - g[2][0] - d.labelDistance : f.x < e ? f.x - a - d.bleedMargin : a + r - f.x - d.bleedMargin, m < d.rect.width && (d.label.style.width = m, "edge" === d.labelAlignTo && (v = m));
                    var _ = g[1][0] - g[2][0];
                    y ? g[2][0] = f.x < e ? a + d.edgeDistance + v + d.labelDistance : a + r - d.edgeDistance - v - d.labelDistance : (g[2][0] = f.x < e ? f.x + d.labelDistance : f.x - d.labelDistance, g[1][0] = g[2][0] + _), g[1][1] = g[2][1] = f.y
                }
            }
        }
    }

    function Og(t) {
        return "center" === t.position
    }

    function Rg(t) {
        function e(t) {
            t.ignore = !0
        }

        function n(t) {
            if (!t.ignore) return !0;
            for (var e in t.states) if (t.states[e].ignore === !1) return !0;
            return !1
        }

        var i, r, o = t.getData(), a = [], s = !1, l = (t.get("minShowLabelAngle") || 0) * TA,
            u = o.getLayout("viewRect"), h = o.getLayout("r"), c = u.width, p = u.x, f = u.y, d = u.height;
        o.each(function (t) {
            var u = o.getItemGraphicEl(t), f = u.shape, d = u.getTextContent(), g = u.getTextGuideLine(),
                v = o.getItemModel(t), m = v.getModel("label"),
                _ = m.get("position") || v.get(["emphasis", "label", "position"]), x = m.get("distanceToLabelLine"),
                b = m.get("alignTo"), w = _i(m.get("edgeDistance"), c), S = m.get("bleedMargin"),
                M = v.getModel("labelLine"), T = M.get("length");
            T = _i(T, c);
            var C = M.get("length2");
            if (C = _i(C, c), Math.abs(f.endAngle - f.startAngle) < l) return y(d.states, e), void (d.ignore = !0);
            if (n(d)) {
                var I, D, k, A, P = (f.startAngle + f.endAngle) / 2, L = Math.cos(P), O = Math.sin(P);
                i = f.cx, r = f.cy;
                var R = "inside" === _ || "inner" === _;
                if ("center" === _) I = f.cx, D = f.cy, A = "center"; else {
                    var z = (R ? (f.r + f.r0) / 2 * L : f.r * L) + i, E = (R ? (f.r + f.r0) / 2 * O : f.r * O) + r;
                    if (I = z + 3 * L, D = E + 3 * O, !R) {
                        var N = z + L * (T + h - f.r), B = E + O * (T + h - f.r), F = N + (0 > L ? -1 : 1) * C, V = B;
                        I = "edge" === b ? 0 > L ? p + w : p + c - w : F + (0 > L ? -x : x), D = V, k = [[z, E], [N, B], [F, V]]
                    }
                    A = R ? "center" : "edge" === b ? L > 0 ? "right" : "left" : L > 0 ? "left" : "right"
                }
                var H, G = m.get("rotate");
                if ("number" == typeof G) H = G * (Math.PI / 180); else if ("center" === _) H = 0; else {
                    var W = 0 > L ? -P + Math.PI : -P;
                    "radial" === G || G === !0 ? H = W : "tangential" === G && "outside" !== _ && "outer" !== _ ? (H = W + Math.PI / 2, H > Math.PI / 2 && (H -= Math.PI)) : H = 0
                }
                if (s = !!H, d.x = I, d.y = D, d.rotation = H, d.setStyle({verticalAlign: "middle"}), R) {
                    d.setStyle({align: A});
                    var U = d.states.select;
                    U && (U.x += d.x, U.y += d.y)
                } else {
                    var X = d.getBoundingRect().clone();
                    X.applyTransform(d.getComputedTransform());
                    var Y = (d.style.margin || 0) + 2.1;
                    X.y -= Y / 2, X.height += Y, a.push({
                        label: d,
                        labelLine: g,
                        position: _,
                        len: T,
                        len2: C,
                        minTurnAngle: M.get("minTurnAngle"),
                        maxSurfaceAngle: M.get("maxSurfaceAngle"),
                        surfaceNormal: new Y_(L, O),
                        linePoints: k,
                        textAlign: A,
                        labelDistance: x,
                        labelAlignTo: b,
                        edgeDistance: w,
                        bleedMargin: S,
                        rect: X
                    })
                }
                u.setTextConfig({inside: R})
            }
        }), !s && t.get("avoidLabelOverlap") && Lg(a, i, r, h, c, d, p, f);
        for (var g = 0; g < a.length; g++) {
            var v = a[g], m = v.label, _ = v.labelLine, x = isNaN(m.x) || isNaN(m.y);
            if (m) {
                m.setStyle({align: v.textAlign}), x && (y(m.states, e), m.ignore = !0);
                var b = m.states.select;
                b && (b.x += m.x, b.y += m.y)
            }
            if (_) {
                var w = v.linePoints;
                x || !w ? (y(_.states, e), _.ignore = !0) : (wd(w, v.minTurnAngle), Sd(w, v.surfaceNormal, v.maxSurfaceAngle), _.setShape({points: w}), m.__hostTarget.textGuideLineConfig = {anchor: new Y_(w[0][0], w[0][1])})
            }
        }
    }

    function zg(t, e, n) {
        var i = t.get("borderRadius");
        return null == i ? n ? {
            innerCornerRadius: 0,
            cornerRadius: 0
        } : null : (M(i) || (i = [i, i]), {innerCornerRadius: ii(i[0], e.r0), cornerRadius: ii(i[1], e.r)})
    }

    function Eg(t, e, n) {
        e = M(e) && {coordDimensions: e} || h({encodeDefine: t.getEncode()}, e);
        var i = t.getSource(), r = Hp(i, e).dimensions, o = new KD(r, t);
        return o.initData(i, n), o
    }

    function Ng(t) {
        return {
            seriesType: t, reset: function (t) {
                var e = t.getData();
                e.filterSelf(function (t) {
                    var n = e.mapDimension("value"), i = e.get(n, t);
                    return "number" == typeof i && !isNaN(i) && 0 > i ? !1 : !0
                })
            }
        }
    }

    function Bg(t) {
        t.registerChartView(IA), t.registerSeriesModel(kA), Uh("pie", t.registerAction), t.registerLayout(S(kg, "pie")), t.registerProcessor(Ag("pie")), t.registerProcessor(Ng("pie"))
    }

    function Fg(t, e, n) {
        var i = new $b({shape: {x: t.x - 10, y: t.y - 10, width: 0, height: t.height + 20}});
        return $a(i, {shape: {x: t.x - 50, width: t.width + 100, height: t.height + 20}}, e, n), i
    }

    function Vg(t) {
        t.eachSeriesByType("themeRiver", function (t) {
            var e = t.getData(), n = t.coordinateSystem, i = {}, r = n.getRect();
            i.rect = r;
            var o = t.get("boundaryGap"), a = n.getAxis();
            if (i.boundaryGap = o, "horizontal" === a.orient) {
                o[0] = _i(o[0], r.height), o[1] = _i(o[1], r.height);
                var s = r.height - o[0] - o[1];
                Hg(e, t, s)
            } else {
                o[0] = _i(o[0], r.width), o[1] = _i(o[1], r.width);
                var l = r.width - o[0] - o[1];
                Hg(e, t, l)
            }
            e.setLayout("layoutInfo", i)
        })
    }

    function Hg(t, e, n) {
        if (t.count()) for (var i, r = e.coordinateSystem, o = e.getLayerSeries(), a = t.mapDimension("single"), s = t.mapDimension("value"), l = v(o, function (e) {
            return v(e.indices, function (e) {
                var n = r.dataToPoint(t.get(a, e));
                return n[1] = t.get(s, e), n
            })
        }), u = Gg(l), h = u.y0, c = n / u.max, p = o.length, f = o[0].indices.length, d = 0; f > d; ++d) {
            i = h[d] * c, t.setItemLayout(o[0].indices[d], {layerIndex: 0, x: l[0][d][0], y0: i, y: l[0][d][1] * c});
            for (var g = 1; p > g; ++g) i += l[g - 1][d][1] * c, t.setItemLayout(o[g].indices[d], {
                layerIndex: g,
                x: l[g][d][0],
                y0: i,
                y: l[g][d][1] * c
            })
        }
    }

    function Gg(t) {
        for (var e = t.length, n = t[0].length, i = [], r = [], o = 0, a = 0; n > a; ++a) {
            for (var s = 0, l = 0; e > l; ++l) s += t[l][a][1];
            s > o && (o = s), i.push(s)
        }
        for (var u = 0; n > u; ++u) r[u] = (o - i[u]) / 2;
        o = 0;
        for (var h = 0; n > h; ++h) {
            var c = i[h] + r[h];
            c > o && (o = c)
        }
        return {y0: r, max: o}
    }

    function Wg(t) {
        t.registerChartView(AA), t.registerSeriesModel(LA), t.registerLayout(Vg), t.registerProcessor(Ag("themeRiver"))
    }

    function Ug(t, n, i, r) {
        y(HA, function (o, a) {
            var s = l(l({}, VA[a], !0), r, !0), u = function (t) {
                function i() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.type = n + "Axis." + a, e
                }

                return e(i, t), i.prototype.mergeDefaultAndTheme = function (t, e) {
                    var n = Il(this), i = n ? kl(t) : {}, r = e.getTheme();
                    l(t, r.get(a + "Axis")), l(t, this.getDefaultOption()), t.type = Xg(t), n && Dl(t, i, n)
                }, i.prototype.optionUpdated = function () {
                    var t = this.option;
                    "category" === t.type && (this.__ordinalMeta = ek.createByAxisModel(this))
                }, i.prototype.getCategories = function (t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
                }, i.prototype.getOrdinalMeta = function () {
                    return this.__ordinalMeta
                }, i.type = n + "Axis." + a, i.defaultOption = s, i
            }(i);
            t.registerComponentModel(u)
        }), t.registerSubTypeDefaulter(n + "Axis", Xg)
    }

    function Xg(t) {
        return t.type || (t.data ? "category" : "value")
    }

    function Yg(t) {
        return "interval" === t.type || "time" === t.type
    }

    function jg(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, o = {}, a = r.getAxesOnZeroOf()[0], s = r.position,
            l = a ? "onZero" : s, u = r.dim, h = i.getRect(), c = [h.x, h.x + h.width, h.y, h.y + h.height],
            p = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            d = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (a) {
            var g = a.toGlobalCoord(a.dataToCoord(0));
            d[p.onZero] = Math.max(Math.min(g, d[1]), d[0])
        }
        o.position = ["y" === u ? d[p[l]] : c[0], "x" === u ? d[p[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var y = {top: -1, bottom: 1, left: -1, right: 1};
        o.labelDirection = o.tickDirection = o.nameDirection = y[s], o.labelOffset = a ? d[p[s]] - d[p.onZero] : 0, e.get(["axisTick", "inside"]) && (o.tickDirection = -o.tickDirection), N(n.labelInside, e.get(["axisLabel", "inside"])) && (o.labelDirection = -o.labelDirection);
        var v = e.get(["axisLabel", "rotate"]);
        return o.labelRotate = "top" === l ? -v : v, o.z2 = 1, o
    }

    function qg(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Zg(t) {
        var e = {xAxisModel: null, yAxisModel: null};
        return y(e, function (n, i) {
            var r = i.replace(/Model$/, ""), o = t.getReferringComponents(r, Ix).models[0];
            e[i] = o
        }), e
    }

    function Kg(t, e) {
        return t.getCoordSysModel() === e
    }

    function $g(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index
        }

        n.getAxesOnZeroOf = function () {
            return o ? [o] : []
        };
        var o, a = t[e], s = n.model, l = s.get(["axisLine", "onZero"]), u = s.get(["axisLine", "onZeroAxisIndex"]);
        if (l) {
            if (null != u) Jg(a[u]) && (o = a[u]); else for (var h in a) if (a.hasOwnProperty(h) && Jg(a[h]) && !i[r(a[h])]) {
                o = a[h];
                break
            }
            o && (i[r(o)] = !0)
        }
    }

    function Jg(t) {
        return t && "category" !== t.type && "time" !== t.type && Ef(t)
    }

    function Qg(t, e) {
        var n = t.getExtent(), i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return i - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return i - t + e
        }
    }

    function ty(t, e, n, i) {
        var r, o, a = Ii(n - t), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return Di(a - jA / 2) ? (o = l ? "bottom" : "top", r = "center") : Di(a - 1.5 * jA) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = 1.5 * jA > a && a > jA / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: a,
            textAlign: r,
            textVerticalAlign: o
        }
    }

    function ey(t, e, n) {
        if (!Gf(t.axis)) {
            var i = t.get(["axisLabel", "showMinLabel"]), r = t.get(["axisLabel", "showMaxLabel"]);
            e = e || [], n = n || [];
            var o = e[0], a = e[1], s = e[e.length - 1], l = e[e.length - 2], u = n[0], h = n[1], c = n[n.length - 1],
                p = n[n.length - 2];
            i === !1 ? (ny(o), ny(u)) : iy(o, a) && (i ? (ny(a), ny(h)) : (ny(o), ny(u))), r === !1 ? (ny(s), ny(c)) : iy(l, s) && (r ? (ny(l), ny(p)) : (ny(s), ny(c)))
        }
    }

    function ny(t) {
        t && (t.ignore = !0)
    }

    function iy(t, e) {
        var n = t && t.getBoundingRect().clone(), i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = Hn([]);
            return Xn(r, r, -t.rotation), n.applyTransform(Wn([], r, t.getLocalTransform())), i.applyTransform(Wn([], r, e.getLocalTransform())), n.intersect(i)
        }
    }

    function ry(t) {
        return "middle" === t || "center" === t
    }

    function oy(t, e, n, i, r) {
        for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
            var u = t[l].coord;
            a[0] = u, a[1] = 0, s[0] = u, s[1] = n, e && (ge(a, a, e), ge(s, s, e));
            var h = new aS({
                subPixelOptimize: !0,
                shape: {x1: a[0], y1: a[1], x2: s[0], y2: s[1]},
                style: i,
                z2: 2,
                autoBatch: !0,
                silent: !0
            });
            h.anid = r + "_" + t[l].tickValue, o.push(h)
        }
        return o
    }

    function ay(t, e, n, i) {
        var r = n.axis, o = n.getModel("axisTick"), a = o.get("show");
        if ("auto" === a && i.handleAutoShown && (a = i.handleAutoShown("axisTick")), a && !r.scale.isBlank()) {
            for (var s = o.getModel("lineStyle"), l = i.tickDirection * o.get("length"), u = r.getTicksCoords(), h = oy(u, e.transform, l, c(s.getLineStyle(), {stroke: n.get(["axisLine", "lineStyle", "color"])}), "ticks"), p = 0; p < h.length; p++) t.add(h[p]);
            return h
        }
    }

    function sy(t, e, n, i) {
        var r = n.axis, o = n.getModel("minorTick");
        if (o.get("show") && !r.scale.isBlank()) {
            var a = r.getMinorTicksCoords();
            if (a.length) for (var s = o.getModel("lineStyle"), l = i * o.get("length"), u = c(s.getLineStyle(), c(n.getModel("axisTick").getLineStyle(), {stroke: n.get(["axisLine", "lineStyle", "color"])})), h = 0; h < a.length; h++) for (var p = oy(a[h], e.transform, l, u, "minorticks_" + h), f = 0; f < p.length; f++) t.add(p[f])
        }
    }

    function ly(t, e, n, i) {
        var r = n.axis, o = N(i.axisLabelShow, n.get(["axisLabel", "show"]));
        if (o && !r.scale.isBlank()) {
            var a = n.getModel("axisLabel"), s = a.get("margin"), l = r.getViewLabels(),
                u = (N(i.labelRotate, a.get("rotate")) || 0) * jA / 180,
                h = qA.innerTextLayout(i.rotation, u, i.labelDirection), c = n.getCategories && n.getCategories(!0),
                p = [], f = qA.isLabelSilent(n), d = n.get("triggerEvent");
            return y(l, function (o, l) {
                var u = "ordinal" === r.scale.type ? r.scale.getRawOrdinalNumber(o.tickValue) : o.tickValue,
                    g = o.formattedLabel, y = o.rawLabel, v = a;
                if (c && c[u]) {
                    var m = c[u];
                    k(m) && m.textStyle && (v = new XS(m.textStyle, a, n.ecModel))
                }
                var _ = v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]), x = r.dataToCoord(u),
                    b = new ew({
                        x: x,
                        y: i.labelOffset + i.labelDirection * s,
                        rotation: h.rotation,
                        silent: f,
                        z2: 10 + (o.level || 0),
                        style: Ps(v, {
                            text: g,
                            align: v.getShallow("align", !0) || h.textAlign,
                            verticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
                            fill: "function" == typeof _ ? _("category" === r.type ? y : "value" === r.type ? u + "" : u, l) : _
                        })
                    });
                if (b.anid = "label_" + u, d) {
                    var w = qA.makeAxisEventDataBase(n);
                    w.targetType = "axisLabel", w.value = y, rw(b).eventData = w
                }
                e.add(b), b.updateTransform(), p.push(b), t.add(b), b.decomposeTransform()
            }), p
        }
    }

    function uy(t, e) {
        var n = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return hy(n, t, e), n.seriesInvolved && py(n, t), n
    }

    function hy(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], a = [];
        y(n.getCoordinateSystems(), function (n) {
            function s(i, s, l) {
                var h = l.model.getModel("axisPointer", r), p = h.get("show");
                if (p && ("auto" !== p || i || my(h))) {
                    null == s && (s = h.get("triggerTooltip")), h = i ? cy(l, c, r, e, i, s) : h;
                    var f = h.get("snap"), d = _y(l.model), g = s || f || "category" === l.type, y = t.axesInfo[d] = {
                        key: d,
                        axis: l,
                        coordSys: n,
                        axisPointerModel: h,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: my(h),
                        seriesModels: [],
                        linkGroup: null
                    };
                    u[d] = y, t.seriesInvolved = t.seriesInvolved || g;
                    var v = fy(o, l);
                    if (null != v) {
                        var m = a[v] || (a[v] = {axesInfo: {}});
                        m.axesInfo[d] = y, m.mapper = o[v].mapper, y.linkGroup = m
                    }
                }
            }

            if (n.axisPointerEnabled) {
                var l = _y(n.model), u = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = n;
                var h = n.model, c = h.getModel("tooltip", i);
                if (y(n.getAxes(), S(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
                    var p = "axis" === c.get("trigger"), f = "cross" === c.get(["axisPointer", "type"]),
                        d = n.getTooltipAxes(c.get(["axisPointer", "axis"]));
                    (p || f) && y(d.baseAxes, S(s, f ? "cross" : !0, p)), f && y(d.otherAxes, S(s, "cross", !1))
                }
            }
        })
    }

    function cy(t, e, n, i, r, o) {
        var a = e.getModel("axisPointer"),
            l = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"],
            u = {};
        y(l, function (t) {
            u[t] = s(a.get(t))
        }), u.snap = "category" !== t.type && !!o, "cross" === a.get("type") && (u.type = "line");
        var h = u.label || (u.label = {});
        if (null == h.show && (h.show = !1), "cross" === r) {
            var p = a.get(["label", "show"]);
            if (h.show = null != p ? p : !0, !o) {
                var f = u.lineStyle = a.get("crossStyle");
                f && c(h, f.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new XS(u, n, i))
    }

    function py(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), r = e.get(["tooltip", "show"], !0);
            n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get(["axisPointer", "show"], !0) !== !1 && y(t.coordSysAxesInfo[_y(n.model)], function (t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        })
    }

    function fy(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var o = t[r] || {};
            if (dy(o[i + "AxisId"], n.id) || dy(o[i + "AxisIndex"], n.componentIndex) || dy(o[i + "AxisName"], n.name)) return r
        }
    }

    function dy(t, e) {
        return "all" === t || M(t) && p(t, e) >= 0 || t === e
    }

    function gy(t) {
        var e = yy(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, o = n.get("status"), a = n.get("value");
            null != a && (a = i.parse(a));
            var s = my(n);
            null == o && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function yy(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[_y(t)]
    }

    function vy(t) {
        var e = yy(t);
        return e && e.axisPointerModel
    }

    function my(t) {
        return !!t.get(["handle", "show"])
    }

    function _y(t) {
        return t.type + "||" + t.id
    }

    function xy(t, e, n, i) {
        var r = n.axis;
        if (!r.scale.isBlank()) {
            var o = n.getModel("splitArea"), a = o.getModel("areaStyle"), s = a.get("color"),
                l = i.coordinateSystem.getRect(), u = r.getTicksCoords({tickModel: o, clamp: !0});
            if (u.length) {
                var h = s.length, p = JA(t).splitAreaColors, f = Y(), d = 0;
                if (p) for (var g = 0; g < u.length; g++) {
                    var y = p.get(u[g].tickValue);
                    if (null != y) {
                        d = (y + (h - 1) * g) % h;
                        break
                    }
                }
                var v = r.toGlobalCoord(u[0].coord), m = a.getAreaStyle();
                s = M(s) ? s : [s];
                for (var g = 1; g < u.length; g++) {
                    var _ = r.toGlobalCoord(u[g].coord), x = void 0, b = void 0, w = void 0, S = void 0;
                    r.isHorizontal() ? (x = v, b = l.y, w = _ - x, S = l.height, v = x + w) : (x = l.x, b = v, w = l.width, S = _ - b, v = b + S);
                    var T = u[g - 1].tickValue;
                    null != T && f.set(T, d), e.add(new $b({
                        anid: null != T ? "area_" + T : null,
                        shape: {x: x, y: b, width: w, height: S},
                        style: c({fill: s[d]}, m),
                        autoBatch: !0,
                        silent: !0
                    })), d = (d + 1) % h
                }
                JA(t).splitAreaColors = f
            }
        }
    }

    function by(t) {
        JA(t).splitAreaColors = null
    }

    function wy(t) {
        t.registerComponentView(oP), t.registerComponentModel(OA), t.registerCoordinateSystem("cartesian2d", YA), Ug(t, "x", RA, aP), Ug(t, "y", RA, aP), t.registerComponentView(iP), t.registerComponentView(rP), t.registerPreprocessor(function (t) {
            t.xAxis && t.yAxis && !t.grid && (t.grid = {})
        })
    }

    function Sy(t) {
        t.registerComponentModel(sP), t.registerComponentView(lP)
    }

    function My(t, e) {
        var n = cM(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        return i.fill = e.get("backgroundColor"), t = new $b({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            }, style: i, silent: !0, z2: -1
        })
    }

    function Ty(t, e, n, i, r, o) {
        function a(t, e) {
            "auto" === t.lineWidth && (t.lineWidth = e.lineWidth > 0 ? 2 : 0), pP(t, function (n, i) {
                "inherit" === t[i] && (t[i] = e[i])
            })
        }

        var s = e.getModel("itemStyle"), l = s.getItemStyle(), u = 0 === t.lastIndexOf("empty", 0) ? "fill" : "stroke";
        l.decal = i.decal, "inherit" === l.fill && (l.fill = i[r]), "inherit" === l.stroke && (l.stroke = i[u]), "inherit" === l.opacity && (l.opacity = ("fill" === r ? i : n).opacity), a(l, i);
        var h = e.getModel("lineStyle"), c = h.getLineStyle();
        if (a(c, n), "auto" === l.fill && (l.fill = i.fill), "auto" === l.stroke && (l.stroke = i.fill), "auto" === c.stroke && (c.stroke = i.fill), !o) {
            var p = e.get("inactiveBorderWidth"), f = l[u];
            l.lineWidth = "auto" === p ? i.lineWidth > 0 && f ? 2 : 0 : l.lineWidth, l.fill = e.get("inactiveColor"), l.stroke = e.get("inactiveBorderColor"), c.stroke = h.get("inactiveColor"), c.lineWidth = h.get("inactiveWidth")
        }
        return {itemStyle: l, lineStyle: c}
    }

    function Cy(t) {
        var e = t.icon || "roundRect", n = Zh(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill, t.symbolKeepAspect);
        return n.setStyle(t.itemStyle), n.rotation = (t.iconRotate || 0) * Math.PI / 180, n.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), e.indexOf("empty") > -1 && (n.style.stroke = n.style.fill, n.style.fill = "#fff", n.style.lineWidth = 2), n
    }

    function Iy(t, e, n, i) {
        Ay(t, e, n, i), n.dispatchAction({type: "legendToggleSelect", name: null != t ? t : e}), ky(t, e, n, i)
    }

    function Dy(t) {
        for (var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length; r > i && !(e = n[i].states.emphasis);) i++;
        return e && e.hoverLayer
    }

    function ky(t, e, n, i) {
        Dy(n) || n.dispatchAction({type: "highlight", seriesName: t, name: e, excludeSeriesId: i})
    }

    function Ay(t, e, n, i) {
        Dy(n) || n.dispatchAction({type: "downplay", seriesName: t, name: e, excludeSeriesId: i})
    }

    function Py(t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0
        })
    }

    function Ly(t, e, n) {
        var i, r = {}, o = "toggleSelected" === t;
        return n.eachComponent("legend", function (n) {
            o && null != i ? n[i ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? n[t]() : (n[t](e.name), i = n.isSelected(e.name));
            var a = n.getData();
            y(a, function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var i = n.isSelected(e);
                    r[e] = r.hasOwnProperty(e) ? r[e] && i : i
                }
            })
        }), "allSelect" === t || "inverseSelect" === t ? {selected: r} : {name: e.name, selected: r}
    }

    function Oy(t) {
        t.registerAction("legendToggleSelect", "legendselectchanged", S(Ly, "toggleSelected")), t.registerAction("legendAllSelect", "legendselectall", S(Ly, "allSelect")), t.registerAction("legendInverseSelect", "legendinverseselect", S(Ly, "inverseSelect")), t.registerAction("legendSelect", "legendselected", S(Ly, "select")), t.registerAction("legendUnSelect", "legendunselected", S(Ly, "unSelect"))
    }

    function Ry(t) {
        t.registerComponentModel(hP), t.registerComponentView(dP), t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, Py), t.registerSubTypeDefaulter("legend", function () {
            return "plain"
        }), Oy(t)
    }

    function zy(t, e, n) {
        var i = t.getOrient(), r = [1, 1];
        r[i.index] = 0, Dl(e, n, {type: "box", ignoreSize: !!r})
    }

    function Ey(t) {
        t.registerAction("legendScroll", "legendscroll", function (t, e) {
            var n = t.scrollDataIndex;
            null != n && e.eachComponent({mainType: "legend", subType: "scroll", query: t}, function (t) {
                t.setScrollDataIndex(n)
            })
        })
    }

    function Ny(t) {
        qf(Ry), t.registerComponentModel(gP), t.registerComponentView(_P), Ey(t)
    }

    function By(t, e, n, i) {
        Fy(xP(n).lastProp, i) || (xP(n).lastProp = i, e ? Ka(n, i, t) : (n.stopAnimation(), n.attr(i)))
    }

    function Fy(t, e) {
        if (k(t) && k(e)) {
            var n = !0;
            return y(e, function (e, i) {
                n = n && Fy(t[i], e)
            }), !!n
        }
        return t === e
    }

    function Vy(t, e) {
        t[e.get(["label", "show"]) ? "show" : "hide"]()
    }

    function Hy(t) {
        return {x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0}
    }

    function Gy(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
        })
    }

    function Wy(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
    }

    function Uy(t, e, n, i, r) {
        var o = n.get("value"), a = Yy(o, e.axis, e.ecModel, n.get("seriesDataIndices"), {
                precision: n.get(["label", "precision"]),
                formatter: n.get(["label", "formatter"])
            }), s = n.getModel("label"), l = cM(s.get("padding") || 0), u = s.getFont(), h = Qn(a, u), c = r.position,
            p = h.width + l[1] + l[3], f = h.height + l[0] + l[2], d = r.align;
        "right" === d && (c[0] -= p), "center" === d && (c[0] -= p / 2);
        var g = r.verticalAlign;
        "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Xy(c, p, f, i);
        var y = s.get("backgroundColor");
        y && "auto" !== y || (y = e.get(["axisLine", "lineStyle", "color"])), t.label = {
            x: c[0],
            y: c[1],
            style: Ps(s, {text: a, font: u, fill: s.getTextColor(), padding: l, backgroundColor: y}),
            z2: 10
        }
    }

    function Xy(t, e, n, i) {
        var r = i.getWidth(), o = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function Yy(t, e, n, i, r) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel({value: t}, {precision: r.precision}), a = r.formatter;
        if (a) {
            var s = {value: Bf(e, {value: t}), axisDimension: e.dim, axisIndex: e.index, seriesData: []};
            y(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r)
            }), C(a) ? o = a.replace("{value}", o) : T(a) && (o = a(s))
        }
        return o
    }

    function jy(t, e, n) {
        var i = Vn();
        return Xn(i, i, n.rotation), Un(i, i, n.position), ds([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    }

    function qy(t, e, n, i, r, o) {
        var a = qA.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get(["label", "margin"]), Uy(e, i, r, o, {
            position: jy(i.axis, t, n),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign
        })
    }

    function Zy(t, e, n) {
        return n = n || 0, {x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n]}
    }

    function Ky(t, e, n) {
        return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
    }

    function $y(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
    }

    function Jy(t) {
        return "x" === t.dim ? 0 : 1
    }

    function Qy(t, e, n) {
        if (!sm.node) {
            var i = e.getZr();
            IP(i).records || (IP(i).records = {}), tv(i, e);
            var r = IP(i).records[t] || (IP(i).records[t] = {});
            r.handler = n
        }
    }

    function tv(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = rv(e);
                DP(IP(t).records, function (t) {
                    t && i(t, n, r.dispatchAction)
                }), ev(r.pendings, e)
            })
        }

        IP(t).initialized || (IP(t).initialized = !0, n("click", S(iv, "click")), n("mousemove", S(iv, "mousemove")), n("globalout", nv))
    }

    function ev(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
    }

    function nv(t, e, n) {
        t.handler("leave", null, n)
    }

    function iv(t, e, n, i) {
        e.handler(t, n, i)
    }

    function rv(t) {
        var e = {showTip: [], hideTip: []}, n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
        };
        return {dispatchAction: n, pendings: e}
    }

    function ov(t, e) {
        if (!sm.node) {
            var n = e.getZr(), i = (IP(n).records || {})[t];
            i && (IP(n).records[t] = null)
        }
    }

    function av(t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {point: []};
        var o = n.getData(), a = or(o, t);
        if (null == a || 0 > a || M(a)) return {point: []};
        var s = o.getItemGraphicEl(a), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(a) || []; else if (l && l.dataToPoint) if (t.isStacked) {
            var u = l.getBaseAxis(), h = l.getOtherAxis(u), c = h.dim, p = u.dim,
                f = "x" === c || "radius" === c ? 1 : 0, d = o.mapDimension(p), g = [];
            g[f] = o.get(d, a), g[1 - f] = o.get(o.getCalculationInfo("stackResultDimension"), a), i = l.dataToPoint(g) || []
        } else i = l.dataToPoint(o.getValues(v(l.dimensions, function (t) {
            return o.mapDimension(t)
        }), a)) || []; else if (s) {
            var y = s.getBoundingRect().clone();
            y.applyTransform(s.transform), i = [y.x + y.width / 2, y.y + y.height / 2]
        }
        return {point: i, el: s}
    }

    function sv(t, e, n) {
        var i = t.currTrigger, r = [t.x, t.y], o = t, a = t.dispatchAction || wm(n.dispatchAction, n),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            vv(r) && (r = av({seriesIndex: o.seriesIndex, dataIndex: o.dataIndex}, e).point);
            var l = vv(r), u = o.axesInfo, h = s.axesInfo, c = "leave" === i || vv(r), p = {}, f = {},
                d = {list: [], map: {}}, g = {showPointer: S(hv, f), showTooltip: S(cv, d)};
            y(s.coordSysMap, function (t, e) {
                var n = l || t.containPoint(r);
                y(s.coordSysAxesInfo[e], function (t) {
                    var e = t.axis, i = gv(u, t);
                    if (!c && n && (!u || i)) {
                        var o = i && i.value;
                        null != o || l || (o = e.pointToData(r)), null != o && lv(t, o, g, !1, p)
                    }
                })
            });
            var v = {};
            return y(h, function (t, e) {
                var n = t.linkGroup;
                n && !f[e] && y(n.axesInfo, function (e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var o = r.value;
                        n.mapper && (o = t.axis.scale.parse(n.mapper(o, yv(e), yv(t)))), v[t.key] = o
                    }
                })
            }), y(v, function (t, e) {
                lv(h[e], t, g, !0, p)
            }), pv(f, h, p), fv(d, r, t, a), dv(h, a, n), p
        }
    }

    function lv(t, e, n, i, r) {
        var o = t.axis;
        if (!o.scale.isBlank() && o.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var a = uv(e, t), s = a.payloadBatch, l = a.snapToValue;
            s[0] && null == r.seriesIndex && h(r, s[0]), !i && t.snap && o.containData(l) && null != l && (e = l), n.showPointer(t, e, s), n.showTooltip(t, a, l)
        }
    }

    function uv(t, e) {
        var n = e.axis, i = n.dim, r = t, o = [], a = Number.MAX_VALUE, s = -1;
        return y(e.seriesModels, function (e) {
            var l, u, h = e.getData().mapDimensionsAll(i);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(h, t, n);
                u = c.dataIndices, l = c.nestestValue
            } else {
                if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
                l = e.getData().get(h[0], u[0])
            }
            if (null != l && isFinite(l)) {
                var p = t - l, f = Math.abs(p);
                a >= f && ((a > f || p >= 0 && 0 > s) && (a = f, s = p, r = l, o.length = 0), y(u, function (t) {
                    o.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: o, snapToValue: r}
    }

    function hv(t, e, n, i) {
        t[e.key] = {value: n, payloadBatch: i}
    }

    function cv(t, e, n, i) {
        var r = n.payloadBatch, o = e.axis, a = o.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = _y(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: o.dim,
                axisIndex: a.componentIndex,
                axisType: a.type,
                axisId: a.id,
                value: i,
                valueLabelOpt: {precision: s.get(["label", "precision"]), formatter: s.get(["label", "formatter"])},
                seriesDataIndices: r.slice()
            })
        }
    }

    function pv(t, e, n) {
        var i = n.axesInfo = [];
        y(e, function (e, n) {
            var r = e.axisPointerModel.option, o = t[n];
            o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function fv(t, e, n, i) {
        if (vv(e) || !t.list.length) return void i({type: "hideTip"});
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        i({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: n.tooltipOption,
            position: n.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
        })
    }

    function dv(t, e, n) {
        var i = n.getZr(), r = "axisPointerLastHighlights", o = AP(i)[r] || {}, a = AP(i)[r] = {};
        y(t, function (t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && y(e.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                a[e] = t
            })
        });
        var s = [], l = [];
        y(o, function (t, e) {
            !a[e] && l.push(t)
        }), y(a, function (t, e) {
            !o[e] && s.push(t)
        }), l.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            notBlur: !0,
            batch: l
        }), s.length && n.dispatchAction({type: "highlight", escapeConnect: !0, notBlur: !0, batch: s})
    }

    function gv(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
        }
    }

    function yv(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
    }

    function vv(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function mv(t) {
        $A.registerAxisPointerClass("CartesianAxisPointer", MP), t.registerComponentModel(CP), t.registerComponentView(kP), t.registerPreprocessor(function (t) {
            if (t) {
                (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
                var e = t.axisPointer.link;
                e && !M(e) && (t.axisPointer.link = [e])
            }
        }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
            t.getComponent("axisPointer").coordSysAxesInfo = uy(t, e)
        }), t.registerAction({type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer"}, sv)
    }

    function _v(t) {
        var e = t.get("confine");
        return null != e ? !!e : "richText" === t.get("renderMode")
    }

    function xv(t) {
        if (sm.domSupported) for (var e = document.documentElement.style, n = 0, i = t.length; i > n; n++) if (t[n] in e) return t[n]
    }

    function bv(t, e) {
        if (!t) return e;
        e = yl(e, !0);
        var n = t.indexOf(e);
        return t = -1 === n ? e : "-" + t.slice(0, n) + "-" + e, t.toLowerCase()
    }

    function wv(t, e) {
        var n = t.currentStyle || document.defaultView && document.defaultView.getComputedStyle(t);
        return n ? e ? n[e] : n : null
    }

    function Sv(t) {
        return t = "left" === t ? "right" : "right" === t ? "left" : "top" === t ? "bottom" : "top"
    }

    function Mv(t, e, n) {
        if (!C(n) || "inside" === n) return "";
        var i = t.get("backgroundColor"), r = t.get("borderWidth");
        e = Sl(e);
        var o, a = Sv(n), s = Math.max(1.5 * Math.round(r), 6), l = "", u = zP + ":";
        p(["left", "right"], a) > -1 ? (l += "top:50%", u += "translateY(-50%) rotate(" + (o = "left" === a ? -225 : -45) + "deg)") : (l += "left:50%", u += "translateX(-50%) rotate(" + (o = "top" === a ? 225 : 45) + "deg)");
        var h = o * Math.PI / 180, c = s + r, f = c * Math.abs(Math.cos(h)) + c * Math.abs(Math.sin(h)),
            d = Math.round(100 * ((f - Math.SQRT2 * r) / 2 + Math.SQRT2 * r - (f - c) / 2)) / 100;
        l += ";" + a + ":-" + d + "px";
        var g = e + " solid " + r + "px;",
            y = ["position:absolute;width:" + s + "px;height:" + s + "px;", l + ";" + u + ";", "border-bottom:" + g, "border-right:" + g, "background-color:" + i + ";"];
        return '<div style="' + y.join("") + '"></div>'
    }

    function Tv(t, e) {
        var n = "cubic-bezier(0.23,1,0.32,1)", i = " " + t / 2 + "s " + n, r = "opacity" + i + ",visibility" + i;
        return e || (i = " " + t + "s " + n, r += sm.transformSupported ? "," + zP + i : ",left" + i + ",top" + i), RP + ":" + r
    }

    function Cv(t, e, n) {
        var i = t.toFixed(0) + "px", r = e.toFixed(0) + "px";
        if (!sm.transformSupported) return n ? "top:" + r + ";left:" + i + ";" : [["top", r], ["left", i]];
        var o = sm.transform3dSupported, a = "translate" + (o ? "3d" : "") + "(" + i + "," + r + (o ? ",0" : "") + ")";
        return n ? "top:0;left:0;" + zP + ":" + a + ";" : [["top", 0], ["left", 0], [LP, a]]
    }

    function Iv(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px");
        var r = t.get("textShadowColor"), o = t.get("textShadowBlur") || 0, a = t.get("textShadowOffsetX") || 0,
            s = t.get("textShadowOffsetY") || 0;
        return r && o && e.push("text-shadow:" + a + "px " + s + "px " + o + "px " + r), y(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
        }), e.join(";")
    }

    function Dv(t, e, n) {
        var i = [], r = t.get("transitionDuration"), o = t.get("backgroundColor"), a = t.get("shadowBlur"),
            s = t.get("shadowColor"), l = t.get("shadowOffsetX"), u = t.get("shadowOffsetY"),
            h = t.getModel("textStyle"), c = hh(t, "html"), p = l + "px " + u + "px " + a + "px " + s;
        return i.push("box-shadow:" + p), e && r && i.push(Tv(r, n)), o && (sm.canvasSupported ? i.push("background-color:" + o) : (i.push("background-color:#" + un(o)), i.push("filter:alpha(opacity=70)"))), y(["width", "color", "radius"], function (e) {
            var n = "border-" + e, r = yl(n), o = t.get(r);
            null != o && i.push(n + ":" + o + ("color" === e ? "" : "px"))
        }), i.push(Iv(h)), null != c && i.push("padding:" + cM(c).join("px ") + "px"), i.join(";") + ";"
    }

    function kv(t, e, n, i, r) {
        var o = e && e.painter;
        if (n) {
            var a = o && o.getViewportRoot();
            a && xe(t, a, document.body, i, r)
        } else {
            t[0] = i, t[1] = r;
            var s = o && o.getViewportRootOffset();
            s && (t[0] += s.offsetLeft, t[1] += s.offsetTop)
        }
        t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight()
    }

    function Av(t) {
        return Math.max(0, t)
    }

    function Pv(t) {
        var e = Av(t.shadowBlur || 0), n = Av(t.shadowOffsetX || 0), i = Av(t.shadowOffsetY || 0);
        return {left: Av(e - n), right: Av(e + n), top: Av(e - i), bottom: Av(e + i)}
    }

    function Lv(t, e, n, i) {
        t[0] = n, t[1] = i, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight()
    }

    function Ov(t, e, n) {
        var i, r = e.ecModel;
        n ? (i = new XS(n, r, r), i = new XS(e.option, i, r)) : i = e;
        for (var o = t.length - 1; o >= 0; o--) {
            var a = t[o];
            a && (a instanceof XS && (a = a.get("tooltip", !0)), C(a) && (a = {formatter: a}), a && (i = new XS(a, i, r)))
        }
        return i
    }

    function Rv(t, e) {
        return t.dispatchAction || wm(e.dispatchAction, e)
    }

    function zv(t, e, n, i, r, o, a) {
        var s = n.getSize(), l = s[0], u = s[1];
        return null != o && (t + l + o + 2 > i ? t -= l + o : t += o), null != a && (e + u + a > r ? e -= u + a : e += a), [t, e]
    }

    function Ev(t, e, n, i, r) {
        var o = n.getSize(), a = o[0], s = o[1];
        return t = Math.min(t + a, i) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function Nv(t, e, n, i) {
        var r = n[0], o = n[1], a = Math.ceil(Math.SQRT2 * i) + 8, s = 0, l = 0, u = e.width, h = e.height;
        switch (t) {
            case"inside":
                s = e.x + u / 2 - r / 2, l = e.y + h / 2 - o / 2;
                break;
            case"top":
                s = e.x + u / 2 - r / 2, l = e.y - o - a;
                break;
            case"bottom":
                s = e.x + u / 2 - r / 2, l = e.y + h + a;
                break;
            case"left":
                s = e.x - r - a, l = e.y + h / 2 - o / 2;
                break;
            case"right":
                s = e.x + u + a, l = e.y + h / 2 - o / 2
        }
        return [s, l]
    }

    function Bv(t) {
        return "center" === t || "middle" === t
    }

    function Fv(t, e, n) {
        var i = lr(t).queryOptionMap, r = i.keys()[0];
        if (r && "series" !== r) {
            var o = ur(e, r, i.get(r), {useDefault: !1, enableAll: !1, enableNone: !1}), a = o.models[0];
            if (a) {
                var s, l = n.getViewOfComponentModel(a);
                return l.group.traverse(function (e) {
                    var n = rw(e).tooltipConfig;
                    return n && n.name === t.name ? (s = e, !0) : void 0
                }), s ? {componentMainType: r, componentIndex: a.componentIndex, el: s} : void 0
            }
        }
    }

    function Vv(t) {
        qf(mv), t.registerComponentModel(PP), t.registerComponentView(WP), t.registerAction({
            type: "showTip",
            event: "showTip",
            update: "tooltip:manuallyShowTip"
        }, function () {
        }), t.registerAction({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
        })
    }

    function Hv(t, e) {
        if (!t) return !1;
        for (var n = M(t) ? t : [t], i = 0; i < n.length; i++) if (n[i] && n[i][e]) return !0;
        return !1
    }

    function Gv(t) {
        Gi(t, "label", ["show"])
    }

    function Wv(t) {
        return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
    }

    function Uv(t) {
        return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
    }

    function Xv(t, e, n, i, r, o) {
        var a = [], s = Zp(e, i), l = s ? e.getCalculationInfo("stackResultDimension") : i, u = Kv(e, l, t),
            h = e.indicesOfNearest(l, u)[0];
        a[r] = e.get(n, h), a[o] = e.get(l, h);
        var c = e.get(i, h), p = wi(e.get(i, h));
        return p = Math.min(p, 20), p >= 0 && (a[o] = +a[o].toFixed(p)), [a, c]
    }

    function Yv(t, e) {
        var n = t.getData(), i = t.coordinateSystem;
        if (e && !Uv(e) && !M(e.coord) && i) {
            var r = i.dimensions, o = jv(e, n, i, t);
            if (e = s(e), e.type && jP[e.type] && o.baseAxis && o.valueAxis) {
                var a = p(r, o.baseAxis.dim), l = p(r, o.valueAxis.dim),
                    u = jP[e.type](n, o.baseDataDim, o.valueDataDim, a, l);
                e.coord = u[0], e.value = u[1]
            } else {
                for (var h = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], c = 0; 2 > c; c++) jP[h[c]] && (h[c] = Kv(n, n.mapDimension(r[c]), h[c]));
                e.coord = h
            }
        }
        return e
    }

    function jv(t, e, n, i) {
        var r = {};
        return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = n.getAxis(qv(i, r.valueDataDim)), r.baseAxis = n.getOtherAxis(r.valueAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim)) : (r.baseAxis = i.getBaseAxis(), r.valueAxis = n.getOtherAxis(r.baseAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim), r.valueDataDim = e.mapDimension(r.valueAxis.dim)), r
    }

    function qv(t, e) {
        var n = t.getData().getDimensionInfo(e);
        return n && n.coordDim
    }

    function Zv(t, e) {
        return t && t.containData && e.coord && !Wv(e) ? t.containData(e.coord) : !0
    }

    function Kv(t, e, n) {
        if ("average" === n) {
            var i = 0, r = 0;
            return t.each(e, function (t) {
                isNaN(t) || (i += t, r++)
            }), i / r
        }
        return "median" === n ? t.getMedian(e) : t.getDataExtent(e)["max" === n ? 1 : 0]
    }

    function $v(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function Jv(t, e, n) {
        var i = 1 - t;
        return $v(e[i]) && $v(n[i])
    }

    function Qv(t, e) {
        var n = e.coord[0], i = e.coord[1];
        return ag(t, "cartesian2d") && n && i && (Jv(1, n, i, t) || Jv(0, n, i, t)) ? !0 : Zv(t, {
            coord: n,
            x: e.x0,
            y: e.y0
        }) || Zv(t, {coord: i, x: e.x1, y: e.y1})
    }

    function tm(t, e, n, i, r) {
        var o, a = i.coordinateSystem, s = t.getItemModel(e), l = _i(s.get(n[0]), r.getWidth()),
            u = _i(s.get(n[1]), r.getHeight());
        if (isNaN(l) || isNaN(u)) {
            if (i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(n, e)); else {
                var h = t.get(n[0], e), c = t.get(n[1], e), p = [h, c];
                a.clampData && a.clampData(p, p), o = a.dataToPoint(p, !0)
            }
            if (ag(a, "cartesian2d")) {
                var f = a.getAxis("x"), d = a.getAxis("y"), h = t.get(n[0], e), c = t.get(n[1], e);
                $v(h) ? o[0] = f.toGlobalCoord(f.getExtent()["x0" === n[0] ? 0 : 1]) : $v(c) && (o[1] = d.toGlobalCoord(d.getExtent()["y0" === n[1] ? 0 : 1]))
            }
            isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u)
        } else o = [l, u];
        return o
    }

    function em(t, e, n) {
        var i, r, o = ["x0", "y0", "x1", "y1"];
        if (t) {
            var a = v(t && t.dimensions, function (t) {
                var n = e.getData(), i = n.getDimensionInfo(n.mapDimension(t)) || {};
                return h(h({}, i), {name: t, ordinalMeta: null})
            });
            r = v(o, function (t, e) {
                return {name: t, type: a[e % 2].type}
            }), i = new KD(r, n)
        } else r = [{name: "value", type: "float"}], i = new KD(r, n);
        var s = v(n.get("data"), S($P, e, t, n));
        t && (s = _(s, S(Qv, t)));
        var l = t ? function (t, e, n, i) {
            var o = t.coord[Math.floor(i / 2)][i % 2];
            return zu(o, r[i])
        } : function (t, e, n, i) {
            return zu(t.value, r[i])
        };
        return i.initData(s, null, l), i.hasItemOption = !0, i
    }

    function nm(t) {
        t.registerComponentModel(YP), t.registerComponentView(QP), t.registerPreprocessor(function (t) {
            Hv(t.series, "markArea") && (t.markArea = t.markArea || {})
        })
    }

    var im = function (t, e) {
        return (im = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, rm = function () {
        return rm = Object.assign || function (t) {
            for (var e, n = 1, i = arguments.length; i > n; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }, rm.apply(this, arguments)
    }, om = function () {
        function t() {
            this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1
        }

        return t
    }(), am = function () {
        function t() {
            this.browser = new om, this.node = !1, this.wxa = !1, this.worker = !1, this.canvasSupported = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1
        }

        return t
    }(), sm = new am;
    "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? (sm.wxa = !0, sm.canvasSupported = !0, sm.touchEventsSupported = !0) : "undefined" == typeof document && "undefined" != typeof self ? (sm.worker = !0, sm.canvasSupported = !0) : "undefined" == typeof navigator ? (sm.node = !0, sm.canvasSupported = !0, sm.svgSupported = !0) : i(navigator.userAgent, sm);
    var lm = {
            "[object Function]": !0,
            "[object RegExp]": !0,
            "[object Date]": !0,
            "[object Error]": !0,
            "[object CanvasGradient]": !0,
            "[object CanvasPattern]": !0,
            "[object Image]": !0,
            "[object Canvas]": !0
        }, um = {
            "[object Int8Array]": !0,
            "[object Uint8Array]": !0,
            "[object Uint8ClampedArray]": !0,
            "[object Int16Array]": !0,
            "[object Uint16Array]": !0,
            "[object Int32Array]": !0,
            "[object Uint32Array]": !0,
            "[object Float32Array]": !0,
            "[object Float64Array]": !0
        }, hm = Object.prototype.toString, cm = Array.prototype, pm = cm.forEach, fm = cm.filter, dm = cm.slice,
        gm = cm.map, ym = function () {
        }.constructor, vm = ym ? ym.prototype : null, mm = "__proto__", _m = {}, xm = 2311, bm = function () {
            return _m.createCanvas()
        };
    _m.createCanvas = function () {
        return document.createElement("canvas")
    };
    var wm = vm && T(vm.bind) ? vm.call.bind(vm.bind) : w, Sm = "__ec_primitive__", Mm = function () {
            function t(e) {
                function n(t, e) {
                    i ? r.set(t, e) : r.set(e, t)
                }

                this.data = {};
                var i = M(e);
                this.data = {};
                var r = this;
                e instanceof t ? e.each(n) : e && y(e, n)
            }

            return t.prototype.get = function (t) {
                return this.data.hasOwnProperty(t) ? this.data[t] : null
            }, t.prototype.set = function (t, e) {
                return this.data[t] = e
            }, t.prototype.each = function (t, e) {
                for (var n in this.data) this.data.hasOwnProperty(n) && t.call(e, this.data[n], n)
            }, t.prototype.keys = function () {
                return b(this.data)
            }, t.prototype.removeKey = function (t) {
                delete this.data[t]
            }, t
        }(), Tm = (Object.freeze || Object)({
            $override: r,
            guid: o,
            logError: a,
            clone: s,
            merge: l,
            mergeAll: u,
            extend: h,
            defaults: c,
            createCanvas: bm,
            indexOf: p,
            inherits: f,
            mixin: d,
            isArrayLike: g,
            each: y,
            map: v,
            reduce: m,
            filter: _,
            find: x,
            keys: b,
            bind: wm,
            curry: S,
            isArray: M,
            isFunction: T,
            isString: C,
            isStringSafe: I,
            isNumber: D,
            isObject: k,
            isBuiltInObject: A,
            isTypedArray: P,
            isDom: L,
            isGradientObject: O,
            isImagePatternObject: R,
            isRegExp: z,
            eqNaN: E,
            retrieve: N,
            retrieve2: B,
            retrieve3: F,
            slice: V,
            normalizeCssArray: H,
            assert: G,
            trim: W,
            setAsPrimitive: U,
            isPrimitive: X,
            HashMap: Mm,
            createHashMap: Y,
            concatArray: j,
            createObject: q,
            hasOwn: Z,
            noop: K
        }), Cm = re, Im = oe, Dm = ce, km = pe, Am = (Object.freeze || Object)({
            create: $,
            copy: J,
            clone: Q,
            set: te,
            add: ee,
            scaleAndAdd: ne,
            sub: ie,
            len: re,
            length: Cm,
            lenSquare: oe,
            lengthSquare: Im,
            mul: ae,
            div: se,
            dot: le,
            scale: ue,
            normalize: he,
            distance: ce,
            dist: Dm,
            distanceSquare: pe,
            distSquare: km,
            negate: fe,
            lerp: de,
            applyTransform: ge,
            min: ye,
            max: ve
        }), Pm = function () {
            function t(t, e) {
                this.target = t, this.topTarget = e && e.topTarget
            }

            return t
        }(), Lm = function () {
            function t(t) {
                this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this)
            }

            return t.prototype._dragStart = function (t) {
                for (var e = t.target; e && !e.draggable;) e = e.parent;
                e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Pm(e, t), "dragstart", t.event))
            }, t.prototype._drag = function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var n = t.offsetX, i = t.offsetY, r = n - this._x, o = i - this._y;
                    this._x = n, this._y = i, e.drift(r, o, t), this.handler.dispatchToElement(new Pm(e, t), "drag", t.event);
                    var a = this.handler.findHover(n, i, e).target, s = this._dropTarget;
                    this._dropTarget = a, e !== a && (s && a !== s && this.handler.dispatchToElement(new Pm(s, t), "dragleave", t.event), a && a !== s && this.handler.dispatchToElement(new Pm(a, t), "dragenter", t.event))
                }
            }, t.prototype._dragEnd = function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.handler.dispatchToElement(new Pm(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Pm(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }, t
        }(), Om = function () {
            function t(t) {
                t && (this._$eventProcessor = t)
            }

            return t.prototype.on = function (t, e, n, i) {
                this._$handlers || (this._$handlers = {});
                var r = this._$handlers;
                if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
                var o = this._$eventProcessor;
                null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)), r[t] || (r[t] = []);
                for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
                var s = {h: n, query: e, ctx: i || this, callAtLast: n.zrEventfulCallAtLast}, l = r[t].length - 1,
                    u = r[t][l];
                return u && u.callAtLast ? r[t].splice(l, 0, s) : r[t].push(s), this
            }, t.prototype.isSilent = function (t) {
                var e = this._$handlers;
                return !e || !e[t] || !e[t].length
            }, t.prototype.off = function (t, e) {
                var n = this._$handlers;
                if (!n) return this;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (n[t]) {
                        for (var i = [], r = 0, o = n[t].length; o > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                        n[t] = i
                    }
                    n[t] && 0 === n[t].length && delete n[t]
                } else delete n[t];
                return this
            }, t.prototype.trigger = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (!this._$handlers) return this;
                var i = this._$handlers[t], r = this._$eventProcessor;
                if (i) for (var o = e.length, a = i.length, s = 0; a > s; s++) {
                    var l = i[s];
                    if (!r || !r.filter || null == l.query || r.filter(t, l.query)) switch (o) {
                        case 0:
                            l.h.call(l.ctx);
                            break;
                        case 1:
                            l.h.call(l.ctx, e[0]);
                            break;
                        case 2:
                            l.h.call(l.ctx, e[0], e[1]);
                            break;
                        default:
                            l.h.apply(l.ctx, e)
                    }
                }
                return r && r.afterTrigger && r.afterTrigger(t), this
            }, t.prototype.triggerWithContext = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (!this._$handlers) return this;
                var i = this._$handlers[t], r = this._$eventProcessor;
                if (i) for (var o = e.length, a = e[o - 1], s = i.length, l = 0; s > l; l++) {
                    var u = i[l];
                    if (!r || !r.filter || null == u.query || r.filter(t, u.query)) switch (o) {
                        case 0:
                            u.h.call(a);
                            break;
                        case 1:
                            u.h.call(a, e[0]);
                            break;
                        case 2:
                            u.h.call(a, e[0], e[1]);
                            break;
                        default:
                            u.h.apply(a, e.slice(1, o - 1))
                    }
                }
                return r && r.afterTrigger && r.afterTrigger(t), this
            }, t
        }(), Rm = Math.log(2), zm = "___zrEVENTSAVED", Em = [],
        Nm = "undefined" != typeof window && !!window.addEventListener,
        Bm = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Fm = [], Vm = Nm ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, Hm = function () {
            function t() {
                this._track = []
            }

            return t.prototype.recognize = function (t, e, n) {
                return this._doTrack(t, e, n), this._recognize(t)
            }, t.prototype.clear = function () {
                return this._track.length = 0, this
            }, t.prototype._doTrack = function (t, e, n) {
                var i = t.touches;
                if (i) {
                    for (var r = {points: [], touches: [], target: e, event: t}, o = 0, a = i.length; a > o; o++) {
                        var s = i[o], l = Te(n, s, {});
                        r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                    }
                    this._track.push(r)
                }
            }, t.prototype._recognize = function (t) {
                for (var e in Gm) if (Gm.hasOwnProperty(e)) {
                    var n = Gm[e](this._track, t);
                    if (n) return n
                }
            }, t
        }(), Gm = {
            pinch: function (t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                    if (r && r.length > 1 && i && i.length > 1) {
                        var o = Le(i) / Le(r);
                        !isFinite(o) && (o = 1), e.pinchScale = o;
                        var a = Oe(i);
                        return e.pinchX = a[0], e.pinchY = a[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        }, Wm = "silent", Um = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.handler = null, e
            }

            return e(n, t), n.prototype.dispose = function () {
            }, n.prototype.setCursor = function () {
            }, n
        }(Om), Xm = function () {
            function t(t, e) {
                this.x = t, this.y = e
            }

            return t
        }(), Ym = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        jm = function (t) {
            function n(e, n, i, r) {
                var o = t.call(this) || this;
                return o._hovered = new Xm(0, 0), o.storage = e, o.painter = n, o.painterRoot = r, i = i || new Um, o.proxy = null, o.setHandlerProxy(i), o._draggingMgr = new Lm(o), o
            }

            return e(n, t), n.prototype.setHandlerProxy = function (t) {
                this.proxy && this.proxy.dispose(), t && (y(Ym, function (e) {
                    t.on && t.on(e, this[e], this)
                }, this), t.handler = this), this.proxy = t
            }, n.prototype.mousemove = function (t) {
                var e = t.zrX, n = t.zrY, i = Ne(this, e, n), r = this._hovered, o = r.target;
                o && !o.__zr && (r = this.findHover(r.x, r.y), o = r.target);
                var a = this._hovered = i ? new Xm(e, n) : this.findHover(e, n), s = a.target, l = this.proxy;
                l.setCursor && l.setCursor(s ? s.cursor : "default"), o && s !== o && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(a, "mousemove", t), s && s !== o && this.dispatchToElement(a, "mouseover", t)
            }, n.prototype.mouseout = function (t) {
                var e = t.zrEventControl;
                "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && this.trigger("globalout", {
                    type: "globalout",
                    event: t
                })
            }, n.prototype.resize = function () {
                this._hovered = new Xm(0, 0)
            }, n.prototype.dispatch = function (t, e) {
                var n = this[t];
                n && n.call(this, e)
            }, n.prototype.dispose = function () {
                this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null
            }, n.prototype.setCursorStyle = function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }, n.prototype.dispatchToElement = function (t, e, n) {
                t = t || {};
                var i = t.target;
                if (!i || !i.silent) {
                    for (var r = "on" + e, o = Re(e, t, n); i && (i[r] && (o.cancelBubble = !!i[r].call(i, o)), i.trigger(e, o), i = i.__hostTarget ? i.__hostTarget : i.parent, !o.cancelBubble);) ;
                    o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function (t) {
                        "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
                    }))
                }
            }, n.prototype.findHover = function (t, e, n) {
                for (var i = this.storage.getDisplayList(), r = new Xm(t, e), o = i.length - 1; o >= 0; o--) {
                    var a = void 0;
                    if (i[o] !== n && !i[o].ignore && (a = Ee(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), a !== Wm)) {
                        r.target = i[o];
                        break
                    }
                }
                return r
            }, n.prototype.processGesture = function (t, e) {
                this._gestureMgr || (this._gestureMgr = new Hm);
                var n = this._gestureMgr;
                "start" === e && n.clear();
                var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
                if ("end" === e && n.clear(), i) {
                    var r = i.type;
                    t.gestureEvent = r;
                    var o = new Xm;
                    o.target = i.target, this.dispatchToElement(o, r, i.event)
                }
            }, n
        }(Om);
    y(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        jm.prototype[t] = function (e) {
            var n, i, r = e.zrX, o = e.zrY, a = Ne(this, r, o);
            if ("mouseup" === t && a || (n = this.findHover(r, o), i = n.target), "mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Dm(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    });
    var qm, Zm = 32, Km = 7, $m = 1, Jm = 2, Qm = 4, t_ = !1, e_ = function () {
        function t() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = je
        }

        return t.prototype.traverse = function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        }, t.prototype.getDisplayList = function (t, e) {
            e = e || !1;
            var n = this._displayList;
            return (t || !n.length) && this.updateDisplayList(e), n
        }, t.prototype.updateDisplayList = function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, sm.canvasSupported && Xe(n, je)
        }, t.prototype._updateAndAddDisplayable = function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var i = t.getClipPath();
                if (t.ignoreClip) e = null; else if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, o = t; r;) r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.getClipPath()
                }
                if (t.childrenRef) {
                    for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty |= $m), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = 0
                } else {
                    var u = t;
                    e && e.length ? u.__clipPaths = e : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []), isNaN(u.z) && (Ye(), u.z = 0), isNaN(u.z2) && (Ye(), u.z2 = 0), isNaN(u.zlevel) && (Ye(), u.zlevel = 0), this._displayList[this._displayListLen++] = u
                }
                var h = t.getDecalElement && t.getDecalElement();
                h && this._updateAndAddDisplayable(h, e, n);
                var c = t.getTextGuideLine();
                c && this._updateAndAddDisplayable(c, e, n);
                var p = t.getTextContent();
                p && this._updateAndAddDisplayable(p, e, n)
            }
        }, t.prototype.addRoot = function (t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t)
        }, t.prototype.delRoot = function (t) {
            if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]); else {
                var i = p(this._roots, t);
                i >= 0 && this._roots.splice(i, 1)
            }
        }, t.prototype.delAllRoots = function () {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        }, t.prototype.getRoots = function () {
            return this._roots
        }, t.prototype.dispose = function () {
            this._displayList = null, this._roots = null
        }, t
    }();
    qm = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
        return setTimeout(t, 16)
    };
    var n_ = qm, i_ = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
        }, elasticOut: function (t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
        }, elasticInOut: function (t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - i_.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return .5 > t ? .5 * i_.bounceIn(2 * t) : .5 * i_.bounceOut(2 * t - 1) + .5
        }
    }, r_ = function () {
        function t(t) {
            this._initialized = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
        }

        return t.prototype.step = function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
            var n = (t - this._startTime - this._pausedTime) / this._life;
            0 > n && (n = 0), n = Math.min(n, 1);
            var i = this.easing, r = "string" == typeof i ? i_[i] : i, o = "function" == typeof r ? r(n) : n;
            if (this.onframe && this.onframe(o), 1 === n) {
                if (!this.loop) return !0;
                this._restart(t), this.onrestart && this.onrestart()
            }
            return !1
        }, t.prototype._restart = function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0
        }, t.prototype.pause = function () {
            this._paused = !0
        }, t.prototype.resume = function () {
            this._paused = !1
        }, t
    }(), o_ = function () {
        function t(t) {
            this.value = t
        }

        return t
    }(), a_ = function () {
        function t() {
            this._len = 0
        }

        return t.prototype.insert = function (t) {
            var e = new o_(t);
            return this.insertEntry(e), e
        }, t.prototype.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, t.prototype.remove = function (t) {
            var e = t.prev, n = t.next;
            e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, t.prototype.len = function () {
            return this._len
        }, t.prototype.clear = function () {
            this.head = this.tail = null, this._len = 0
        }, t
    }(), s_ = function () {
        function t(t) {
            this._list = new a_, this._maxSize = 10, this._map = {}, this._maxSize = t
        }

        return t.prototype.put = function (t, e) {
            var n = this._list, i = this._map, r = null;
            if (null == i[t]) {
                var o = n.len(), a = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var s = n.head;
                    n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
                }
                a ? a.value = e : a = new o_(e), a.key = t, n.insertEntry(a), i[t] = a
            }
            return r
        }, t.prototype.get = function (t) {
            var e = this._map[t], n = this._list;
            return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
        }, t.prototype.clear = function () {
            this._list.clear(), this._map = {}
        }, t.prototype.len = function () {
            return this._list.len()
        }, t
    }(), l_ = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, u_ = new s_(20), h_ = null, c_ = hn, p_ = cn, f_ = (Object.freeze || Object)({
        parse: on,
        lift: ln,
        toHex: un,
        fastLerp: hn,
        fastMapToColor: c_,
        lerp: cn,
        mapToColor: p_,
        modifyHSL: pn,
        modifyAlpha: fn,
        stringify: dn,
        lum: gn,
        random: yn
    }), d_ = Array.prototype.slice, g_ = [0, 0, 0, 0], y_ = function () {
        function t(t) {
            this.keyframes = [], this.maxTime = 0, this.arrDim = 0, this.interpolable = !0, this._needsSort = !1, this._isAllValueEqual = !0, this._lastFrame = 0, this._lastFramePercent = 0, this.propName = t
        }

        return t.prototype.isFinished = function () {
            return this._finished
        }, t.prototype.setFinished = function () {
            this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished()
        }, t.prototype.needsAnimate = function () {
            return !this._isAllValueEqual && this.keyframes.length >= 2 && this.interpolable && this.maxTime > 0
        }, t.prototype.getAdditiveTrack = function () {
            return this._additiveTrack
        }, t.prototype.addKeyframe = function (t, e) {
            t >= this.maxTime ? this.maxTime = t : this._needsSort = !0;
            var n = this.keyframes, i = n.length;
            if (this.interpolable) if (g(e)) {
                var r = An(e);
                if (i > 0 && this.arrDim !== r) return void (this.interpolable = !1);
                if (1 === r && "number" != typeof e[0] || 2 === r && "number" != typeof e[0][0]) return void (this.interpolable = !1);
                if (i > 0) {
                    var o = n[i - 1];
                    this._isAllValueEqual && (1 === r ? Mn(e, o.value) || (this._isAllValueEqual = !1) : this._isAllValueEqual = !1)
                }
                this.arrDim = r
            } else {
                if (this.arrDim > 0) return void (this.interpolable = !1);
                if ("string" == typeof e) {
                    var a = on(e);
                    a ? (e = a, this.isValueColor = !0) : this.interpolable = !1
                } else if ("number" != typeof e || isNaN(e)) return void (this.interpolable = !1);
                if (this._isAllValueEqual && i > 0) {
                    var o = n[i - 1];
                    this.isValueColor && !Mn(o.value, e) ? this._isAllValueEqual = !1 : o.value !== e && (this._isAllValueEqual = !1)
                }
            }
            var s = {time: t, value: e, percent: 0};
            return this.keyframes.push(s), s
        }, t.prototype.prepare = function (t) {
            var e = this.keyframes;
            this._needsSort && e.sort(function (t, e) {
                return t.time - e.time
            });
            for (var n = this.arrDim, i = e.length, r = e[i - 1], o = 0; i > o; o++) e[o].percent = e[o].time / this.maxTime, n > 0 && o !== i - 1 && Sn(e[o].value, r.value, n);
            if (t && this.needsAnimate() && t.needsAnimate() && n === t.arrDim && this.isValueColor === t.isValueColor && !t._finished) {
                this._additiveTrack = t;
                for (var a = e[0].value, o = 0; i > o; o++) 0 === n ? e[o].additiveValue = this.isValueColor ? bn([], e[o].value, a, -1) : e[o].value - a : 1 === n ? e[o].additiveValue = bn([], e[o].value, a, -1) : 2 === n && (e[o].additiveValue = wn([], e[o].value, a, -1))
            }
        }, t.prototype.step = function (t, e) {
            if (!this._finished) {
                this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                var n, i = null != this._additiveTrack, r = i ? "additiveValue" : "value", o = this.keyframes,
                    a = this.keyframes.length, s = this.propName, l = this.arrDim, u = this.isValueColor;
                if (0 > e) n = 0; else if (e < this._lastFramePercent) {
                    var h = Math.min(this._lastFrame + 1, a - 1);
                    for (n = h; n >= 0 && !(o[n].percent <= e); n--) ;
                    n = Math.min(n, a - 2)
                } else {
                    for (n = this._lastFrame; a > n && !(o[n].percent > e); n++) ;
                    n = Math.min(n - 1, a - 2)
                }
                var c = o[n + 1], p = o[n];
                if (p && c) {
                    this._lastFrame = n, this._lastFramePercent = e;
                    var f = c.percent - p.percent;
                    if (0 !== f) {
                        var d = (e - p.percent) / f, g = i ? this._additiveValue : u ? g_ : t[s];
                        if ((l > 0 || u) && !g && (g = this._additiveValue = []), this.useSpline) {
                            var y = o[n][r], v = o[0 === n ? n : n - 1][r], m = o[n > a - 2 ? a - 1 : n + 1][r],
                                _ = o[n > a - 3 ? a - 1 : n + 2][r];
                            if (l > 0) 1 === l ? Cn(g, v, y, m, _, d, d * d, d * d * d) : In(g, v, y, m, _, d, d * d, d * d * d); else if (u) Cn(g, v, y, m, _, d, d * d, d * d * d), i || (t[s] = kn(g)); else {
                                var x = void 0;
                                x = this.interpolable ? Tn(v, y, m, _, d, d * d, d * d * d) : m, i ? this._additiveValue = x : t[s] = x
                            }
                        } else if (l > 0) 1 === l ? _n(g, p[r], c[r], d) : xn(g, p[r], c[r], d); else if (u) _n(g, p[r], c[r], d), i || (t[s] = kn(g)); else {
                            var x = void 0;
                            x = this.interpolable ? vn(p[r], c[r], d) : mn(p[r], c[r], d), i ? this._additiveValue = x : t[s] = x
                        }
                        i && this._addToTarget(t)
                    }
                }
            }
        }, t.prototype._addToTarget = function (t) {
            var e = this.arrDim, n = this.propName, i = this._additiveValue;
            0 === e ? this.isValueColor ? (on(t[n], g_), bn(g_, g_, i, 1), t[n] = kn(g_)) : t[n] = t[n] + i : 1 === e ? bn(t[n], t[n], i, 1) : 2 === e && wn(t[n], t[n], i, 1)
        }, t
    }(), v_ = function () {
        function t(t, e, n) {
            return this._tracks = {}, this._trackKeys = [], this._delay = 0, this._maxTime = 0, this._paused = !1, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n ? void a("Can' use additive animation on looped animation.") : void (this._additiveAnimators = n)
        }

        return t.prototype.getTarget = function () {
            return this._target
        }, t.prototype.changeTarget = function (t) {
            this._target = t
        }, t.prototype.when = function (t, e) {
            return this.whenWithKeys(t, e, b(e))
        }, t.prototype.whenWithKeys = function (t, e, n) {
            for (var i = this._tracks, r = 0; r < n.length; r++) {
                var o = n[r], a = i[o];
                if (!a) {
                    a = i[o] = new y_(o);
                    var s = void 0, l = this._getAdditiveTrack(o);
                    if (l) {
                        var u = l.keyframes[l.keyframes.length - 1];
                        s = u && u.value, l.isValueColor && s && (s = kn(s))
                    } else s = this._target[o];
                    if (null == s) continue;
                    0 !== t && a.addKeyframe(0, Dn(s)), this._trackKeys.push(o)
                }
                a.addKeyframe(t, Dn(e[o]))
            }
            return this._maxTime = Math.max(this._maxTime, t), this
        }, t.prototype.pause = function () {
            this._clip.pause(), this._paused = !0
        }, t.prototype.resume = function () {
            this._clip.resume(), this._paused = !1
        }, t.prototype.isPaused = function () {
            return !!this._paused
        }, t.prototype._doneCallback = function () {
            this._setTracksFinished(), this._clip = null;
            var t = this._doneCbs;
            if (t) for (var e = t.length, n = 0; e > n; n++) t[n].call(this)
        }, t.prototype._abortedCallback = function () {
            this._setTracksFinished();
            var t = this.animation, e = this._abortedCbs;
            if (t && t.removeClip(this._clip), this._clip = null, e) for (var n = 0; n < e.length; n++) e[n].call(this)
        }, t.prototype._setTracksFinished = function () {
            for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++) t[e[n]].setFinished()
        }, t.prototype._getAdditiveTrack = function (t) {
            var e, n = this._additiveAnimators;
            if (n) for (var i = 0; i < n.length; i++) {
                var r = n[i].getTrack(t);
                r && (e = r)
            }
            return e
        }, t.prototype.start = function (t, e) {
            if (!(this._started > 0)) {
                this._started = 1;
                for (var n = this, i = [], r = 0; r < this._trackKeys.length; r++) {
                    var o = this._trackKeys[r], a = this._tracks[o], s = this._getAdditiveTrack(o), l = a.keyframes;
                    if (a.prepare(s), a.needsAnimate()) i.push(a); else if (!a.interpolable) {
                        var u = l[l.length - 1];
                        u && (n._target[a.propName] = u.value)
                    }
                }
                if (i.length || e) {
                    var h = new r_({
                        life: this._maxTime, loop: this._loop, delay: this._delay, onframe: function (t) {
                            n._started = 2;
                            var e = n._additiveAnimators;
                            if (e) {
                                for (var r = !1, o = 0; o < e.length; o++) if (e[o]._clip) {
                                    r = !0;
                                    break
                                }
                                r || (n._additiveAnimators = null)
                            }
                            for (var o = 0; o < i.length; o++) i[o].step(n._target, t);
                            var a = n._onframeCbs;
                            if (a) for (var o = 0; o < a.length; o++) a[o](n._target, t)
                        }, ondestroy: function () {
                            n._doneCallback()
                        }
                    });
                    this._clip = h, this.animation && this.animation.addClip(h), t && "spline" !== t && (h.easing = t)
                } else this._doneCallback();
                return this
            }
        }, t.prototype.stop = function (t) {
            if (this._clip) {
                var e = this._clip;
                t && e.onframe(1), this._abortedCallback()
            }
        }, t.prototype.delay = function (t) {
            return this._delay = t, this
        }, t.prototype.during = function (t) {
            return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this
        }, t.prototype.done = function (t) {
            return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this
        }, t.prototype.aborted = function (t) {
            return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this
        }, t.prototype.getClip = function () {
            return this._clip
        }, t.prototype.getTrack = function (t) {
            return this._tracks[t]
        }, t.prototype.stopTracks = function (t, e) {
            if (!t.length || !this._clip) return !0;
            for (var n = this._tracks, i = this._trackKeys, r = 0; r < t.length; r++) {
                var o = n[t[r]];
                o && (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0), o.setFinished())
            }
            for (var a = !0, r = 0; r < i.length; r++) if (!n[i[r]].isFinished()) {
                a = !1;
                break
            }
            return a && this._abortedCallback(), a
        }, t.prototype.saveFinalToTarget = function (t, e) {
            if (t) {
                e = e || this._trackKeys;
                for (var n = 0; n < e.length; n++) {
                    var i = e[n], r = this._tracks[i];
                    if (r && !r.isFinished()) {
                        var o = r.keyframes, a = o[o.length - 1];
                        if (a) {
                            var s = Dn(a.value);
                            r.isValueColor && (s = kn(s)), t[i] = s
                        }
                    }
                }
            }
        }, t.prototype.__changeFinalValue = function (t, e) {
            e = e || b(t);
            for (var n = 0; n < e.length; n++) {
                var i = e[n], r = this._tracks[i];
                if (r) {
                    var o = r.keyframes;
                    if (o.length > 1) {
                        var a = o.pop();
                        r.addKeyframe(a.time, t[i]), r.prepare(r.getAdditiveTrack())
                    }
                }
            }
        }, t
    }(), m_ = function (t) {
        function n(e) {
            var n = t.call(this) || this;
            return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n.onframe = e.onframe || function () {
            }, n
        }

        return e(n, t), n.prototype.addClip = function (t) {
            t.animation && this.removeClip(t), this._clipsHead ? (this._clipsTail.next = t, t.prev = this._clipsTail, t.next = null, this._clipsTail = t) : this._clipsHead = this._clipsTail = t, t.animation = this
        }, n.prototype.addAnimator = function (t) {
            t.animation = this;
            var e = t.getClip();
            e && this.addClip(e)
        }, n.prototype.removeClip = function (t) {
            if (t.animation) {
                var e = t.prev, n = t.next;
                e ? e.next = n : this._clipsHead = n, n ? n.prev = e : this._clipsTail = e, t.next = t.prev = t.animation = null
            }
        }, n.prototype.removeAnimator = function (t) {
            var e = t.getClip();
            e && this.removeClip(e), t.animation = null
        }, n.prototype.update = function (t) {
            for (var e = (new Date).getTime() - this._pausedTime, n = e - this._time, i = this._clipsHead; i;) {
                var r = i.next, o = i.step(e, n);
                o ? (i.ondestroy && i.ondestroy(), this.removeClip(i), i = r) : i = r
            }
            this._time = e, t || (this.onframe(n), this.trigger("frame", n), this.stage.update && this.stage.update())
        }, n.prototype._startLoop = function () {
            function t() {
                e._running && (n_(t), !e._paused && e.update())
            }

            var e = this;
            this._running = !0, n_(t)
        }, n.prototype.start = function () {
            this._running || (this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop())
        }, n.prototype.stop = function () {
            this._running = !1
        }, n.prototype.pause = function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, n.prototype.resume = function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, n.prototype.clear = function () {
            for (var t = this._clipsHead; t;) {
                var e = t.next;
                t.prev = t.next = t.animation = null, t = e
            }
            this._clipsHead = this._clipsTail = null
        }, n.prototype.isFinished = function () {
            return null == this._clipsHead
        }, n.prototype.animate = function (t, e) {
            e = e || {}, this.start();
            var n = new v_(t, e.loop);
            return this.addAnimator(n), n
        }, n
    }(Om), __ = 300, x_ = sm.domSupported, b_ = function () {
        var t = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            e = ["touchstart", "touchend", "touchmove"],
            n = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, i = v(t, function (t) {
                var e = t.replace("mouse", "pointer");
                return n.hasOwnProperty(e) ? e : t
            });
        return {mouse: t, touch: e, pointer: i}
    }(), w_ = {mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"]}, S_ = !1, M_ = function () {
        function t(t, e) {
            this.stopPropagation = K, this.stopImmediatePropagation = K, this.preventDefault = K, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
        }

        return t
    }(), T_ = {
        mousedown: function (t) {
            t = De(this.dom, t), this.__mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t)
        }, mousemove: function (t) {
            t = De(this.dom, t);
            var e = this.__mayPointerCapture;
            !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0), this.trigger("mousemove", t)
        }, mouseup: function (t) {
            t = De(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t)
        }, mouseout: function (t) {
            t = De(this.dom, t);
            var e = t.toElement || t.relatedTarget;
            zn(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), this.trigger("mouseout", t))
        }, wheel: function (t) {
            S_ = !0, t = De(this.dom, t), this.trigger("mousewheel", t)
        }, mousewheel: function (t) {
            S_ || (t = De(this.dom, t), this.trigger("mousewheel", t))
        }, touchstart: function (t) {
            t = De(this.dom, t), On(t), this.__lastTouchMoment = new Date, this.handler.processGesture(t, "start"), T_.mousemove.call(this, t), T_.mousedown.call(this, t)
        }, touchmove: function (t) {
            t = De(this.dom, t), On(t), this.handler.processGesture(t, "change"), T_.mousemove.call(this, t)
        }, touchend: function (t) {
            t = De(this.dom, t), On(t), this.handler.processGesture(t, "end"), T_.mouseup.call(this, t), +new Date - +this.__lastTouchMoment < __ && T_.click.call(this, t)
        }, pointerdown: function (t) {
            T_.mousedown.call(this, t)
        }, pointermove: function (t) {
            Pn(t) || T_.mousemove.call(this, t)
        }, pointerup: function (t) {
            T_.mouseup.call(this, t)
        }, pointerout: function (t) {
            Pn(t) || T_.mouseout.call(this, t)
        }
    };
    y(["click", "dblclick", "contextmenu"], function (t) {
        T_[t] = function (e) {
            e = De(this.dom, e), this.trigger(t, e)
        }
    });
    var C_ = {
        pointermove: function (t) {
            Pn(t) || C_.mousemove.call(this, t)
        }, pointerup: function (t) {
            C_.mouseup.call(this, t)
        }, mousemove: function (t) {
            this.trigger("mousemove", t)
        }, mouseup: function (t) {
            var e = this.__pointerCapturing;
            this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t))
        }
    }, I_ = function () {
        function t(t, e) {
            this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e
        }

        return t
    }(), D_ = function (t) {
        function n(e, n) {
            var i = t.call(this) || this;
            return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new I_(e, T_), x_ && (i._globalHandlerScope = new I_(document, C_)), En(i, i._localHandlerScope), i
        }

        return e(n, t), n.prototype.dispose = function () {
            Fn(this._localHandlerScope), x_ && Fn(this._globalHandlerScope)
        }, n.prototype.setCursor = function (t) {
            this.dom.style && (this.dom.style.cursor = t || "default")
        }, n.prototype.__togglePointerCapture = function (t) {
            if (this.__mayPointerCapture = null, x_ && +this.__pointerCapturing ^ +t) {
                this.__pointerCapturing = t;
                var e = this._globalHandlerScope;
                t ? Nn(this, e) : Fn(e)
            }
        }, n
    }(Om), k_ = 1;
    "undefined" != typeof window && (k_ = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
    var A_, P_, L_ = k_, O_ = .4, R_ = "#333", z_ = "#ccc", E_ = "#eee", N_ = (Object.freeze || Object)({
            create: Vn,
            identity: Hn,
            copy: Gn,
            mul: Wn,
            translate: Un,
            rotate: Xn,
            scale: Yn,
            invert: jn,
            clone: qn
        }), B_ = Hn, F_ = 5e-5, V_ = [], H_ = [], G_ = Vn(), W_ = Math.abs, U_ = function () {
            function t() {
            }

            return t.prototype.getLocalTransform = function (e) {
                return t.getLocalTransform(this, e)
            }, t.prototype.setPosition = function (t) {
                this.x = t[0], this.y = t[1]
            }, t.prototype.setScale = function (t) {
                this.scaleX = t[0], this.scaleY = t[1]
            }, t.prototype.setSkew = function (t) {
                this.skewX = t[0], this.skewY = t[1]
            }, t.prototype.setOrigin = function (t) {
                this.originX = t[0], this.originY = t[1]
            }, t.prototype.needLocalTransform = function () {
                return Zn(this.rotation) || Zn(this.x) || Zn(this.y) || Zn(this.scaleX - 1) || Zn(this.scaleY - 1)
            }, t.prototype.updateTransform = function () {
                var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
                return e || t ? (n = n || Vn(), e ? this.getLocalTransform(n) : B_(n), t && (e ? Wn(n, t, n) : Gn(n, t)), this.transform = n, void this._resolveGlobalScaleRatio(n)) : void (n && B_(n))
            }, t.prototype._resolveGlobalScaleRatio = function (t) {
                var e = this.globalScaleRatio;
                if (null != e && 1 !== e) {
                    this.getGlobalScale(V_);
                    var n = V_[0] < 0 ? -1 : 1, i = V_[1] < 0 ? -1 : 1, r = ((V_[0] - n) * e + n) / V_[0] || 0,
                        o = ((V_[1] - i) * e + i) / V_[1] || 0;
                    t[0] *= r, t[1] *= r, t[2] *= o, t[3] *= o
                }
                this.invTransform = this.invTransform || Vn(), jn(this.invTransform, t)
            }, t.prototype.getComputedTransform = function () {
                for (var t = this, e = []; t;) e.push(t), t = t.parent;
                for (; t = e.pop();) t.updateTransform();
                return this.transform
            }, t.prototype.setLocalTransform = function (t) {
                if (t) {
                    var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]),
                        r = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
                    n = Math.sqrt(n) * Math.cos(r), e = Math.sqrt(e), this.skewX = r, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, this.originX = 0, this.originY = 0
                }
            }, t.prototype.decomposeTransform = function () {
                if (this.transform) {
                    var t = this.parent, e = this.transform;
                    t && t.transform && (Wn(H_, t.invTransform, e), e = H_);
                    var n = this.originX, i = this.originY;
                    (n || i) && (G_[4] = n, G_[5] = i, Wn(H_, e, G_), H_[4] -= n, H_[5] -= i, e = H_), this.setLocalTransform(e)
                }
            }, t.prototype.getGlobalScale = function (t) {
                var e = this.transform;
                return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
            }, t.prototype.transformCoordToLocal = function (t, e) {
                var n = [t, e], i = this.invTransform;
                return i && ge(n, n, i), n
            }, t.prototype.transformCoordToGlobal = function (t, e) {
                var n = [t, e], i = this.transform;
                return i && ge(n, n, i), n
            }, t.prototype.getLineScale = function () {
                var t = this.transform;
                return t && W_(t[0] - 1) > 1e-10 && W_(t[3] - 1) > 1e-10 ? Math.sqrt(W_(t[0] * t[3] - t[2] * t[1])) : 1
            }, t.prototype.copyTransform = function (t) {
                for (var e = this, n = 0; n < X_.length; n++) {
                    var i = X_[n];
                    e[i] = t[i]
                }
            }, t.getLocalTransform = function (t, e) {
                e = e || [];
                var n = t.originX || 0, i = t.originY || 0, r = t.scaleX, o = t.scaleY, a = t.rotation || 0, s = t.x,
                    l = t.y, u = t.skewX ? Math.tan(t.skewX) : 0, h = t.skewY ? Math.tan(-t.skewY) : 0;
                return n || i ? (e[4] = -n * r - u * i * o, e[5] = -i * o - h * n * r) : e[4] = e[5] = 0, e[0] = r, e[3] = o, e[1] = h * r, e[2] = u * o, a && Xn(e, e, a), e[4] += n + s, e[5] += i + l, e
            }, t.initDefaultProps = function () {
                var e = t.prototype;
                e.x = 0, e.y = 0, e.scaleX = 1, e.scaleY = 1, e.originX = 0, e.originY = 0, e.skewX = 0, e.skewY = 0, e.rotation = 0, e.globalScaleRatio = 1
            }(), t
        }(), X_ = ["x", "y", "originX", "originY", "rotation", "scaleX", "scaleY", "skewX", "skewY"], Y_ = function () {
            function t(t, e) {
                this.x = t || 0, this.y = e || 0
            }

            return t.prototype.copy = function (t) {
                return this.x = t.x, this.y = t.y, this
            }, t.prototype.clone = function () {
                return new t(this.x, this.y)
            }, t.prototype.set = function (t, e) {
                return this.x = t, this.y = e, this
            }, t.prototype.equal = function (t) {
                return t.x === this.x && t.y === this.y
            }, t.prototype.add = function (t) {
                return this.x += t.x, this.y += t.y, this
            }, t.prototype.scale = function (t) {
                this.x *= t, this.y *= t
            }, t.prototype.scaleAndAdd = function (t, e) {
                this.x += t.x * e, this.y += t.y * e
            }, t.prototype.sub = function (t) {
                return this.x -= t.x, this.y -= t.y, this
            }, t.prototype.dot = function (t) {
                return this.x * t.x + this.y * t.y
            }, t.prototype.len = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, t.prototype.lenSquare = function () {
                return this.x * this.x + this.y * this.y
            }, t.prototype.normalize = function () {
                var t = this.len();
                return this.x /= t, this.y /= t, this
            }, t.prototype.distance = function (t) {
                var e = this.x - t.x, n = this.y - t.y;
                return Math.sqrt(e * e + n * n)
            }, t.prototype.distanceSquare = function (t) {
                var e = this.x - t.x, n = this.y - t.y;
                return e * e + n * n
            }, t.prototype.negate = function () {
                return this.x = -this.x, this.y = -this.y, this
            }, t.prototype.transform = function (t) {
                if (t) {
                    var e = this.x, n = this.y;
                    return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this
                }
            }, t.prototype.toArray = function (t) {
                return t[0] = this.x, t[1] = this.y, t
            }, t.prototype.fromArray = function (t) {
                this.x = t[0], this.y = t[1]
            }, t.set = function (t, e, n) {
                t.x = e, t.y = n
            }, t.copy = function (t, e) {
                t.x = e.x, t.y = e.y
            }, t.len = function (t) {
                return Math.sqrt(t.x * t.x + t.y * t.y)
            }, t.lenSquare = function (t) {
                return t.x * t.x + t.y * t.y
            }, t.dot = function (t, e) {
                return t.x * e.x + t.y * e.y
            }, t.add = function (t, e, n) {
                t.x = e.x + n.x, t.y = e.y + n.y
            }, t.sub = function (t, e, n) {
                t.x = e.x - n.x, t.y = e.y - n.y
            }, t.scale = function (t, e, n) {
                t.x = e.x * n, t.y = e.y * n
            }, t.scaleAndAdd = function (t, e, n, i) {
                t.x = e.x + n.x * i, t.y = e.y + n.y * i
            }, t.lerp = function (t, e, n, i) {
                var r = 1 - i;
                t.x = r * e.x + i * n.x, t.y = r * e.y + i * n.y
            }, t
        }(), j_ = Math.min, q_ = Math.max, Z_ = new Y_, K_ = new Y_, $_ = new Y_, J_ = new Y_, Q_ = new Y_, tx = new Y_,
        ex = function () {
            function t(t, e, n, i) {
                0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
            }

            return t.prototype.union = function (t) {
                var e = j_(t.x, this.x), n = j_(t.y, this.y);
                this.width = isFinite(this.x) && isFinite(this.width) ? q_(t.x + t.width, this.x + this.width) - e : t.width, this.height = isFinite(this.y) && isFinite(this.height) ? q_(t.y + t.height, this.y + this.height) - n : t.height, this.x = e, this.y = n
            }, t.prototype.applyTransform = function (e) {
                t.applyTransform(this, this, e)
            }, t.prototype.calculateTransform = function (t) {
                var e = this, n = t.width / e.width, i = t.height / e.height, r = Vn();
                return Un(r, r, [-e.x, -e.y]), Yn(r, r, [n, i]), Un(r, r, [t.x, t.y]), r
            }, t.prototype.intersect = function (e, n) {
                if (!e) return !1;
                e instanceof t || (e = t.create(e));
                var i = this, r = i.x, o = i.x + i.width, a = i.y, s = i.y + i.height, l = e.x, u = e.x + e.width,
                    h = e.y, c = e.y + e.height, p = !(l > o || r > u || h > s || a > c);
                if (n) {
                    var f = 1 / 0, d = 0, g = Math.abs(o - l), y = Math.abs(u - r), v = Math.abs(s - h),
                        m = Math.abs(c - a), _ = Math.min(g, y), x = Math.min(v, m);
                    l > o || r > u ? _ > d && (d = _, y > g ? Y_.set(tx, -g, 0) : Y_.set(tx, y, 0)) : f > _ && (f = _, y > g ? Y_.set(Q_, g, 0) : Y_.set(Q_, -y, 0)), h > s || a > c ? x > d && (d = x, m > v ? Y_.set(tx, 0, -v) : Y_.set(tx, 0, m)) : f > _ && (f = _, m > v ? Y_.set(Q_, 0, v) : Y_.set(Q_, 0, -m))
                }
                return n && Y_.copy(n, p ? Q_ : tx), p
            }, t.prototype.contain = function (t, e) {
                var n = this;
                return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
            }, t.prototype.clone = function () {
                return new t(this.x, this.y, this.width, this.height)
            }, t.prototype.copy = function (e) {
                t.copy(this, e)
            }, t.prototype.plain = function () {
                return {x: this.x, y: this.y, width: this.width, height: this.height}
            }, t.prototype.isFinite = function () {
                return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
            }, t.prototype.isZero = function () {
                return 0 === this.width || 0 === this.height
            }, t.create = function (e) {
                return new t(e.x, e.y, e.width, e.height)
            }, t.copy = function (t, e) {
                t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height
            }, t.applyTransform = function (e, n, i) {
                if (!i) return void (e !== n && t.copy(e, n));
                if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
                    var r = i[0], o = i[3], a = i[4], s = i[5];
                    return e.x = n.x * r + a, e.y = n.y * o + s, e.width = n.width * r, e.height = n.height * o, e.width < 0 && (e.x += e.width, e.width = -e.width), void (e.height < 0 && (e.y += e.height, e.height = -e.height))
                }
                Z_.x = $_.x = n.x, Z_.y = J_.y = n.y, K_.x = J_.x = n.x + n.width, K_.y = $_.y = n.y + n.height, Z_.transform(i), J_.transform(i), K_.transform(i), $_.transform(i), e.x = j_(Z_.x, K_.x, $_.x, J_.x), e.y = j_(Z_.y, K_.y, $_.y, J_.y);
                var l = q_(Z_.x, K_.x, $_.x, J_.x), u = q_(Z_.y, K_.y, $_.y, J_.y);
                e.width = l - e.x, e.height = u - e.y
            }, t
        }(), nx = {}, ix = "12px sans-serif", rx = {measureText: Kn}, ox = "__zr_normal__",
        ax = ["x", "y", "scaleX", "scaleY", "originX", "originY", "rotation", "ignore"],
        sx = {x: !0, y: !0, scaleX: !0, scaleY: !0, originX: !0, originY: !0, rotation: !0, ignore: !1}, lx = {},
        ux = new ex(0, 0, 0, 0), hx = function () {
            function t(t) {
                this.id = o(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t)
            }

            return t.prototype._init = function (t) {
                this.attr(t)
            }, t.prototype.drift = function (t, e) {
                switch (this.draggable) {
                    case"horizontal":
                        e = 0;
                        break;
                    case"vertical":
                        t = 0
                }
                var n = this.transform;
                n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw()
            }, t.prototype.beforeUpdate = function () {
            }, t.prototype.afterUpdate = function () {
            }, t.prototype.update = function () {
                this.updateTransform(), this.__dirty && this.updateInnerText()
            }, t.prototype.updateInnerText = function (t) {
                var e = this._textContent;
                if (e && (!e.ignore || t)) {
                    this.textConfig || (this.textConfig = {});
                    var n = this.textConfig, i = n.local, r = e.innerTransformable, o = void 0, a = void 0, s = !1;
                    r.parent = i ? this : null;
                    var l = !1;
                    if (r.copyTransform(e), null != n.position) {
                        var u = ux;
                        u.copy(n.layoutRect ? n.layoutRect : this.getBoundingRect()), i || u.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(lx, n, u) : ri(lx, n, u), r.x = lx.x, r.y = lx.y, o = lx.align, a = lx.verticalAlign;
                        var h = n.origin;
                        if (h && null != n.rotation) {
                            var c = void 0, p = void 0;
                            "center" === h ? (c = .5 * u.width, p = .5 * u.height) : (c = ii(h[0], u.width), p = ii(h[1], u.height)), l = !0, r.originX = -r.x + c + (i ? 0 : u.x), r.originY = -r.y + p + (i ? 0 : u.y)
                        }
                    }
                    null != n.rotation && (r.rotation = n.rotation);
                    var f = n.offset;
                    f && (r.x += f[0], r.y += f[1], l || (r.originX = -f[0], r.originY = -f[1]));
                    var d = null == n.inside ? "string" == typeof n.position && n.position.indexOf("inside") >= 0 : n.inside,
                        g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, v = void 0,
                        m = void 0;
                    d && this.canBeInsideText() ? (y = n.insideFill, v = n.insideStroke, (null == y || "auto" === y) && (y = this.getInsideTextFill()), (null == v || "auto" === v) && (v = this.getInsideTextStroke(y), m = !0)) : (y = n.outsideFill, v = n.outsideStroke, (null == y || "auto" === y) && (y = this.getOutsideFill()), (null == v || "auto" === v) && (v = this.getOutsideStroke(y), m = !0)), y = y || "#000", (y !== g.fill || v !== g.stroke || m !== g.autoStroke || o !== g.align || a !== g.verticalAlign) && (s = !0, g.fill = y, g.stroke = v, g.autoStroke = m, g.align = o, g.verticalAlign = a, e.setDefaultTextStyle(g)), e.__dirty |= $m, s && e.dirtyStyle(!0)
                }
            }, t.prototype.canBeInsideText = function () {
                return !0
            }, t.prototype.getInsideTextFill = function () {
                return "#fff"
            }, t.prototype.getInsideTextStroke = function () {
                return "#000"
            }, t.prototype.getOutsideFill = function () {
                return this.__zr && this.__zr.isDarkMode() ? z_ : R_
            }, t.prototype.getOutsideStroke = function () {
                var t = this.__zr && this.__zr.getBackgroundColor(), e = "string" == typeof t && on(t);
                e || (e = [255, 255, 255, 1]);
                for (var n = e[3], i = this.__zr.isDarkMode(), r = 0; 3 > r; r++) e[r] = e[r] * n + (i ? 0 : 255) * (1 - n);
                return e[3] = 1, dn(e, "rgba")
            }, t.prototype.traverse = function () {
            }, t.prototype.attrKV = function (t, e) {
                "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {}, h(this.extra, e)) : this[t] = e
            }, t.prototype.hide = function () {
                this.ignore = !0, this.markRedraw()
            }, t.prototype.show = function () {
                this.ignore = !1, this.markRedraw()
            }, t.prototype.attr = function (t, e) {
                if ("string" == typeof t) this.attrKV(t, e); else if (k(t)) for (var n = t, i = b(n), r = 0; r < i.length; r++) {
                    var o = i[r];
                    this.attrKV(o, t[o])
                }
                return this.markRedraw(), this
            }, t.prototype.saveCurrentToNormalState = function (t) {
                this._innerSaveToNormal(t);
                for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
                    var i = this.animators[n], r = i.__fromStateTransition;
                    if (!r || r === ox) {
                        var o = i.targetName, a = o ? e[o] : e;
                        i.saveFinalToTarget(a)
                    }
                }
            }, t.prototype._innerSaveToNormal = function (t) {
                var e = this._normalState;
                e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, ax)
            }, t.prototype._savePrimaryToNormal = function (t, e, n) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    null == t[r] || r in e || (e[r] = this[r])
                }
            }, t.prototype.hasState = function () {
                return this.currentStates.length > 0
            }, t.prototype.getState = function (t) {
                return this.states[t]
            }, t.prototype.ensureState = function (t) {
                var e = this.states;
                return e[t] || (e[t] = {}), e[t]
            }, t.prototype.clearStates = function (t) {
                this.useState(ox, !1, t)
            }, t.prototype.useState = function (t, e, n, i) {
                var r = t === ox, o = this.hasState();
                if (o || !r) {
                    var s = this.currentStates, l = this.stateTransition;
                    if (!(p(s, t) >= 0) || !e && 1 !== s.length) {
                        var u;
                        if (this.stateProxy && !r && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !r) return void a("State " + t + " not exists.");
                        r || this.saveCurrentToNormalState(u);
                        var h = !!(u && u.hoverLayer || i);
                        h && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
                        var c = this._textContent, f = this._textGuide;
                        return c && c.useState(t, e, n, h), f && f.useState(t, e, n, h), r ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~$m), u
                    }
                }
            }, t.prototype.useStates = function (t, e, n) {
                if (t.length) {
                    var i = [], r = this.currentStates, o = t.length, a = o === r.length;
                    if (a) for (var s = 0; o > s; s++) if (t[s] !== r[s]) {
                        a = !1;
                        break
                    }
                    if (a) return;
                    for (var s = 0; o > s; s++) {
                        var l = t[s], u = void 0;
                        this.stateProxy && (u = this.stateProxy(l, t)), u || (u = this.states[l]), u && i.push(u)
                    }
                    var h = i[o - 1], c = !!(h && h.hoverLayer || n);
                    c && this._toggleHoverLayerFlag(!0);
                    var p = this._mergeStates(i), f = this.stateTransition;
                    this.saveCurrentToNormalState(p), this._applyStateObj(t.join(","), p, this._normalState, !1, !e && !this.__inHover && f && f.duration > 0, f);
                    var d = this._textContent, g = this._textGuide;
                    d && d.useStates(t, e, c), g && g.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~$m)
                } else this.clearStates()
            }, t.prototype._updateAnimationTargets = function () {
                for (var t = 0; t < this.animators.length; t++) {
                    var e = this.animators[t];
                    e.targetName && e.changeTarget(this[e.targetName])
                }
            }, t.prototype.removeState = function (t) {
                var e = p(this.currentStates, t);
                if (e >= 0) {
                    var n = this.currentStates.slice();
                    n.splice(e, 1), this.useStates(n)
                }
            }, t.prototype.replaceState = function (t, e, n) {
                var i = this.currentStates.slice(), r = p(i, t), o = p(i, e) >= 0;
                r >= 0 ? o ? i.splice(r, 1) : i[r] = e : n && !o && i.push(e), this.useStates(i)
            }, t.prototype.toggleState = function (t, e) {
                e ? this.useState(t, !0) : this.removeState(t)
            }, t.prototype._mergeStates = function (t) {
                for (var e, n = {}, i = 0; i < t.length; i++) {
                    var r = t[i];
                    h(n, r), r.textConfig && (e = e || {}, h(e, r.textConfig))
                }
                return e && (n.textConfig = e), n
            }, t.prototype._applyStateObj = function (t, e, n, i, r, o) {
                var a = !(e && i);
                e && e.textConfig ? (this.textConfig = h({}, i ? this.textConfig : n.textConfig), h(this.textConfig, e.textConfig)) : a && n.textConfig && (this.textConfig = n.textConfig);
                for (var s = {}, l = !1, u = 0; u < ax.length; u++) {
                    var c = ax[u], p = r && sx[c];
                    e && null != e[c] ? p ? (l = !0, s[c] = e[c]) : this[c] = e[c] : a && null != n[c] && (p ? (l = !0, s[c] = n[c]) : this[c] = n[c])
                }
                if (!r) for (var u = 0; u < this.animators.length; u++) {
                    var f = this.animators[u], d = f.targetName;
                    f.__changeFinalValue(d ? (e || n)[d] : e || n)
                }
                l && this._transitionState(t, s, o)
            }, t.prototype._attachComponent = function (t) {
                if (t.__zr && !t.__hostTarget) throw new Error("Text element has been added to zrender.");
                if (t === this) throw new Error("Recursive component attachment.");
                var e = this.__zr;
                e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this
            }, t.prototype._detachComponent = function (t) {
                t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null
            }, t.prototype.getClipPath = function () {
                return this._clipPath
            }, t.prototype.setClipPath = function (t) {
                this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw()
            }, t.prototype.removeClipPath = function () {
                var t = this._clipPath;
                t && (this._detachComponent(t), this._clipPath = null, this.markRedraw())
            }, t.prototype.getTextContent = function () {
                return this._textContent
            }, t.prototype.setTextContent = function (t) {
                var e = this._textContent;
                if (e !== t) {
                    if (e && e !== t && this.removeTextContent(), t.__zr && !t.__hostTarget) throw new Error("Text element has been added to zrender.");
                    t.innerTransformable = new U_, this._attachComponent(t), this._textContent = t, this.markRedraw()
                }
            }, t.prototype.setTextConfig = function (t) {
                this.textConfig || (this.textConfig = {}), h(this.textConfig, t), this.markRedraw()
            }, t.prototype.removeTextConfig = function () {
                this.textConfig = null, this.markRedraw()
            }, t.prototype.removeTextContent = function () {
                var t = this._textContent;
                t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw())
            }, t.prototype.getTextGuideLine = function () {
                return this._textGuide
            }, t.prototype.setTextGuideLine = function (t) {
                this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw()
            }, t.prototype.removeTextGuideLine = function () {
                var t = this._textGuide;
                t && (this._detachComponent(t), this._textGuide = null, this.markRedraw())
            }, t.prototype.markRedraw = function () {
                this.__dirty |= $m;
                var t = this.__zr;
                t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw()
            }, t.prototype.dirty = function () {
                this.markRedraw()
            }, t.prototype._toggleHoverLayerFlag = function (t) {
                this.__inHover = t;
                var e = this._textContent, n = this._textGuide;
                e && (e.__inHover = t), n && (n.__inHover = t)
            }, t.prototype.addSelfToZr = function (t) {
                if (this.__zr !== t) {
                    this.__zr = t;
                    var e = this.animators;
                    if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
                    this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t)
                }
            }, t.prototype.removeSelfFromZr = function (t) {
                if (this.__zr) {
                    this.__zr = null;
                    var e = this.animators;
                    if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
                    this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t)
                }
            }, t.prototype.animate = function (t, e) {
                var n = t ? this[t] : this;
                if (!n) return void a('Property "' + t + '" is not existed in element ' + this.id);
                var i = new v_(n, e);
                return this.addAnimator(i, t), i
            }, t.prototype.addAnimator = function (t, e) {
                var n = this.__zr, i = this;
                t.during(function () {
                    i.updateDuringAnimation(e)
                }).done(function () {
                    var e = i.animators, n = p(e, t);
                    n >= 0 && e.splice(n, 1)
                }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp()
            }, t.prototype.updateDuringAnimation = function () {
                this.markRedraw()
            }, t.prototype.stopAnimation = function (t, e) {
                for (var n = this.animators, i = n.length, r = [], o = 0; i > o; o++) {
                    var a = n[o];
                    t && t !== a.scope ? r.push(a) : a.stop(e)
                }
                return this.animators = r, this
            }, t.prototype.animateTo = function (t, e, n) {
                oi(this, t, e, n)
            }, t.prototype.animateFrom = function (t, e, n) {
                oi(this, t, e, n, !0)
            }, t.prototype._transitionState = function (t, e, n, i) {
                for (var r = oi(this, e, n, i), o = 0; o < r.length; o++) r[o].__fromStateTransition = t
            }, t.prototype.getBoundingRect = function () {
                return null
            }, t.prototype.getPaintRect = function () {
                return null
            }, t.initDefaultProps = function () {
                function e(t, e, n) {
                    r[t + e + n] || (console.warn("DEPRECATED: '" + t + "' has been deprecated. use '" + e + "', '" + n + "' instead"), r[t + e + n] = !0)
                }

                function n(t, n, r, o) {
                    function a(t, e) {
                        Object.defineProperty(e, 0, {
                            get: function () {
                                return t[r]
                            }, set: function (e) {
                                t[r] = e
                            }
                        }), Object.defineProperty(e, 1, {
                            get: function () {
                                return t[o]
                            }, set: function (e) {
                                t[o] = e
                            }
                        })
                    }

                    Object.defineProperty(i, t, {
                        get: function () {
                            if (e(t, r, o), !this[n]) {
                                var i = this[n] = [];
                                a(this, i)
                            }
                            return this[n]
                        }, set: function (i) {
                            e(t, r, o), this[r] = i[0], this[o] = i[1], this[n] = i, a(this, i)
                        }
                    })
                }

                var i = t.prototype;
                i.type = "element", i.name = "", i.ignore = !1, i.silent = !1, i.isGroup = !1, i.draggable = !1, i.dragging = !1, i.ignoreClip = !1, i.__inHover = !1, i.__dirty = $m;
                var r = {};
                Object.defineProperty && (!sm.browser.ie || sm.browser.version > 8) && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"))
            }(), t
        }();
    d(hx, Om), d(hx, U_);
    var cx = function (t) {
        function n(e) {
            var n = t.call(this) || this;
            return n.isGroup = !0, n._children = [], n.attr(e), n
        }

        return e(n, t), n.prototype.childrenRef = function () {
            return this._children
        }, n.prototype.children = function () {
            return this._children.slice()
        }, n.prototype.childAt = function (t) {
            return this._children[t]
        }, n.prototype.childOfName = function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        }, n.prototype.childCount = function () {
            return this._children.length
        }, n.prototype.add = function (t) {
            if (t && (t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), t.__hostTarget)) throw"This elemenet has been used as an attachment";
            return this
        }, n.prototype.addBefore = function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        }, n.prototype.replace = function (t, e) {
            var n = p(this._children, t);
            return n >= 0 && this.replaceAt(e, n), this
        }, n.prototype.replaceAt = function (t, e) {
            var n = this._children, i = n[e];
            if (t && t !== this && t.parent !== this && t !== i) {
                n[e] = t, i.parent = null;
                var r = this.__zr;
                r && i.removeSelfFromZr(r), this._doAdd(t)
            }
            return this
        }, n.prototype._doAdd = function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__zr;
            e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh()
        }, n.prototype.remove = function (t) {
            var e = this.__zr, n = this._children, i = p(n, t);
            return 0 > i ? this : (n.splice(i, 1), t.parent = null, e && t.removeSelfFromZr(e), e && e.refresh(), this)
        }, n.prototype.removeAll = function () {
            for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
                var i = t[n];
                e && i.removeSelfFromZr(e), i.parent = null
            }
            return t.length = 0, this
        }, n.prototype.eachChild = function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        }, n.prototype.traverse = function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n], r = t.call(e, i);
                i.isGroup && !r && i.traverse(t, e)
            }
            return this
        }, n.prototype.addSelfToZr = function (e) {
            t.prototype.addSelfToZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                i.addSelfToZr(e)
            }
        }, n.prototype.removeSelfFromZr = function (e) {
            t.prototype.removeSelfFromZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                i.removeSelfFromZr(e)
            }
        }, n.prototype.getBoundingRect = function (t) {
            for (var e = new ex(0, 0, 0, 0), n = t || this._children, i = [], r = null, o = 0; o < n.length; o++) {
                var a = n[o];
                if (!a.ignore && !a.invisible) {
                    var s = a.getBoundingRect(), l = a.getLocalTransform(i);
                    l ? (ex.applyTransform(e, s, l), r = r || e.clone(), r.union(e)) : (r = r || s.clone(), r.union(s))
                }
            }
            return r || e
        }, n
    }(hx);
    cx.prototype.type = "group";
    var px = !sm.canvasSupported, fx = {}, dx = {}, gx = function () {
            function t(t, e, n) {
                var i = this;
                this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
                var r = new e_, o = n.renderer || "canvas";
                if (px) throw new Error("IE8 support has been dropped since 5.0");
                if (fx[o] || (o = b(fx)[0]), !fx[o]) throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
                n.useDirtyRect = null == n.useDirtyRect ? !1 : n.useDirtyRect;
                var a = new fx[o](e, r, n, t);
                this.storage = r, this.painter = a;
                var s = sm.node || sm.worker ? null : new D_(a.getViewportRoot(), a.root);
                this.handler = new jm(r, a, s, a.root), this.animation = new m_({
                    stage: {
                        update: function () {
                            return i._flush(!0)
                        }
                    }
                }), this.animation.start()
            }

            return t.prototype.add = function (t) {
                t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
            }, t.prototype.remove = function (t) {
                t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
            }, t.prototype.configLayer = function (t, e) {
                this.painter.configLayer && this.painter.configLayer(t, e), this.refresh()
            }, t.prototype.setBackgroundColor = function (t) {
                this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = ci(t)
            }, t.prototype.getBackgroundColor = function () {
                return this._backgroundColor
            }, t.prototype.setDarkMode = function (t) {
                this._darkMode = t
            }, t.prototype.isDarkMode = function () {
                return this._darkMode
            }, t.prototype.refreshImmediately = function (t) {
                t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, t.prototype.refresh = function () {
                this._needsRefresh = !0, this.animation.start()
            }, t.prototype.flush = function () {
                this._flush(!1)
            }, t.prototype._flush = function (t) {
                var e, n = (new Date).getTime();
                this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
                var i = (new Date).getTime();
                e ? (this._stillFrameAccum = 0, this.trigger("rendered", {elapsedTime: i - n})) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
            }, t.prototype.setSleepAfterStill = function (t) {
                this._sleepAfterStill = t
            }, t.prototype.wakeUp = function () {
                this.animation.start(), this._stillFrameAccum = 0
            }, t.prototype.addHover = function () {
            }, t.prototype.removeHover = function () {
            }, t.prototype.clearHover = function () {
            }, t.prototype.refreshHover = function () {
                this._needsRefreshHover = !0
            }, t.prototype.refreshHoverImmediately = function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover()
            }, t.prototype.resize = function (t) {
                t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
            }, t.prototype.clearAnimation = function () {
                this.animation.clear()
            }, t.prototype.getWidth = function () {
                return this.painter.getWidth()
            }, t.prototype.getHeight = function () {
                return this.painter.getHeight()
            }, t.prototype.pathToImage = function (t, e) {
                return this.painter.pathToImage ? this.painter.pathToImage(t, e) : void 0
            }, t.prototype.setCursorStyle = function (t) {
                this.handler.setCursorStyle(t)
            }, t.prototype.findHover = function (t, e) {
                return this.handler.findHover(t, e)
            }, t.prototype.on = function (t, e, n) {
                return this.handler.on(t, e, n), this
            }, t.prototype.off = function (t, e) {
                this.handler.off(t, e)
            }, t.prototype.trigger = function (t, e) {
                this.handler.trigger(t, e)
            }, t.prototype.clear = function () {
                for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof cx && t[e].removeSelfFromZr(this);
                this.storage.delAllRoots(), this.painter.clear()
            }, t.prototype.dispose = function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, hi(this.id)
            }, t
        }(), yx = "5.2.1", vx = (Object.freeze || Object)({
            init: pi,
            dispose: fi,
            disposeAll: di,
            getInstance: gi,
            registerPainter: yi,
            version: yx
        }), mx = 1e-4, _x = 20, xx = 9007199254740991,
        bx = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Sx = ("undefined" != typeof console && console.warn && console.log, "series\x00"), Mx = "\x00_ec_\x00",
        Tx = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        Cx = Ni(), Ix = {useDefault: !0, enableAll: !1, enableNone: !1}, Dx = ".",
        kx = "___EC__COMPONENT__CONTAINER___", Ax = "___EC__EXTENDED_CLASS___", Px = Math.round(10 * Math.random()),
        Lx = [["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]],
        Ox = Tr(Lx), Rx = function () {
            function t() {
            }

            return t.prototype.getAreaStyle = function (t, e) {
                return Ox(this, t, e)
            }, t
        }(), zx = new s_(50), Ex = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Nx = function () {
            function t() {
            }

            return t
        }(), Bx = function () {
            function t(t) {
                this.tokens = [], t && (this.tokens = t)
            }

            return t
        }(), Fx = function () {
            function t() {
                this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = []
            }

            return t
        }(), Vx = m(",&?/;] ".split(""), function (t, e) {
            return t[e] = !0, t
        }, {}), Hx = "__zr_style_" + Math.round(10 * Math.random()),
        Gx = {shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: "#000", opacity: 1, blend: "source-over"},
        Wx = {style: {shadowBlur: !0, shadowOffsetX: !0, shadowOffsetY: !0, shadowColor: !0, opacity: !0}};
    Gx[Hx] = !0;
    var Ux = ["z", "z2", "invisible"], Xx = ["invisible"], Yx = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype._init = function (e) {
                for (var n = b(e), i = 0; i < n.length; i++) {
                    var r = n[i];
                    "style" === r ? this.useStyle(e[r]) : t.prototype.attrKV.call(this, r, e[r])
                }
                this.style || this.useStyle({})
            }, n.prototype.beforeBrush = function () {
            }, n.prototype.afterBrush = function () {
            }, n.prototype.innerBeforeBrush = function () {
            }, n.prototype.innerAfterBrush = function () {
            }, n.prototype.shouldBePainted = function (t, e, n, i) {
                var r = this.transform;
                if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && Vr(this, t, e) || r && !r[0] && !r[3]) return !1;
                if (n && this.__clipPaths) for (var o = 0; o < this.__clipPaths.length; ++o) if (this.__clipPaths[o].isZeroArea()) return !1;
                if (i && this.parent) for (var a = this.parent; a;) {
                    if (a.ignore) return !1;
                    a = a.parent
                }
                return !0
            }, n.prototype.contain = function (t, e) {
                return this.rectContain(t, e)
            }, n.prototype.traverse = function (t, e) {
                t.call(e, this)
            }, n.prototype.rectContain = function (t, e) {
                var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect();
                return i.contain(n[0], n[1])
            }, n.prototype.getPaintRect = function () {
                var t = this._paintRect;
                if (!this._paintRect || this.__dirty) {
                    var e = this.transform, n = this.getBoundingRect(), i = this.style, r = i.shadowBlur || 0,
                        o = i.shadowOffsetX || 0, a = i.shadowOffsetY || 0;
                    t = this._paintRect || (this._paintRect = new ex(0, 0, 0, 0)), e ? ex.applyTransform(t, n, e) : t.copy(n), (r || o || a) && (t.width += 2 * r + Math.abs(o), t.height += 2 * r + Math.abs(a), t.x = Math.min(t.x, t.x + o - r), t.y = Math.min(t.y, t.y + a - r));
                    var s = this.dirtyRectTolerance;
                    t.isZero() || (t.x = Math.floor(t.x - s), t.y = Math.floor(t.y - s), t.width = Math.ceil(t.width + 1 + 2 * s), t.height = Math.ceil(t.height + 1 + 2 * s))
                }
                return t
            }, n.prototype.setPrevPaintRect = function (t) {
                t ? (this._prevPaintRect = this._prevPaintRect || new ex(0, 0, 0, 0), this._prevPaintRect.copy(t)) : this._prevPaintRect = null
            }, n.prototype.getPrevPaintRect = function () {
                return this._prevPaintRect
            }, n.prototype.animateStyle = function (t) {
                return this.animate("style", t)
            }, n.prototype.updateDuringAnimation = function (t) {
                "style" === t ? this.dirtyStyle() : this.markRedraw()
            }, n.prototype.attrKV = function (e, n) {
                "style" !== e ? t.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n)
            }, n.prototype.setStyle = function (t, e) {
                return "string" == typeof t ? this.style[t] = e : h(this.style, t), this.dirtyStyle(), this
            }, n.prototype.dirtyStyle = function (t) {
                t || this.markRedraw(), this.__dirty |= Jm, this._rect && (this._rect = null)
            }, n.prototype.dirty = function () {
                this.dirtyStyle()
            }, n.prototype.styleChanged = function () {
                return !!(this.__dirty & Jm)
            }, n.prototype.styleUpdated = function () {
                this.__dirty &= ~Jm
            }, n.prototype.createStyle = function (t) {
                return q(Gx, t)
            }, n.prototype.useStyle = function (t) {
                t[Hx] || (t = this.createStyle(t)), this.__inHover ? this.__hoverStyle = t : this.style = t, this.dirtyStyle()
            }, n.prototype.isStyleObject = function (t) {
                return t[Hx]
            }, n.prototype._innerSaveToNormal = function (e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var n = this._normalState;
                e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, Ux)
            }, n.prototype._applyStateObj = function (e, n, i, r, o, a) {
                t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
                var s, l = !(n && r);
                if (n && n.style ? o ? r ? s = n.style : (s = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(s, n.style)) : (s = this._mergeStyle(this.createStyle(), r ? this.style : i.style), this._mergeStyle(s, n.style)) : l && (s = i.style), s) if (o) {
                    var u = this.style;
                    if (this.style = this.createStyle(l ? {} : u), l) for (var h = b(u), c = 0; c < h.length; c++) {
                        var p = h[c];
                        p in s && (s[p] = s[p], this.style[p] = u[p])
                    }
                    for (var f = b(s), c = 0; c < f.length; c++) {
                        var p = f[c];
                        this.style[p] = this.style[p]
                    }
                    this._transitionState(e, {style: s}, a, this.getAnimationStyleProps())
                } else this.useStyle(s);
                for (var d = this.__inHover ? Xx : Ux, c = 0; c < d.length; c++) {
                    var p = d[c];
                    n && null != n[p] ? this[p] = n[p] : l && null != i[p] && (this[p] = i[p])
                }
            }, n.prototype._mergeStates = function (e) {
                for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.style && (n = n || {}, this._mergeStyle(n, o.style))
                }
                return n && (i.style = n), i
            }, n.prototype._mergeStyle = function (t, e) {
                return h(t, e), t
            }, n.prototype.getAnimationStyleProps = function () {
                return Wx
            }, n.initDefaultProps = function () {
                var t = n.prototype;
                t.type = "displayable", t.invisible = !1, t.z = 0, t.z2 = 0, t.zlevel = 0, t.culling = !1, t.cursor = "pointer", t.rectHover = !1, t.incremental = !1, t._rect = null, t.dirtyRectTolerance = 0, t.__dirty = $m | Jm
            }(), n
        }(hx), jx = new ex(0, 0, 0, 0), qx = new ex(0, 0, 0, 0), Zx = Math.pow, Kx = Math.sqrt, $x = 1e-8, Jx = 1e-4,
        Qx = Kx(3), tb = 1 / 3, eb = $(), nb = $(), ib = $(), rb = Math.min, ob = Math.max, ab = Math.sin,
        sb = Math.cos, lb = 2 * Math.PI, ub = $(), hb = $(), cb = $(), pb = [], fb = [],
        db = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, gb = [], yb = [], vb = [], mb = [], _b = [], xb = [],
        bb = Math.min, wb = Math.max, Sb = Math.cos, Mb = Math.sin, Tb = Math.sqrt, Cb = Math.abs, Ib = Math.PI,
        Db = 2 * Ib, kb = "undefined" != typeof Float32Array, Ab = [], Pb = function () {
            function t(t) {
                this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = [])
            }

            return t.prototype.increaseVersion = function () {
                this._version++
            }, t.prototype.getVersion = function () {
                return this._version
            }, t.prototype.setScale = function (t, e, n) {
                n = n || 0, n > 0 && (this._ux = Cb(n / L_ / t) || 0, this._uy = Cb(n / L_ / e) || 0)
            }, t.prototype.setDPR = function (t) {
                this.dpr = t
            }, t.prototype.setContext = function (t) {
                this._ctx = t
            }, t.prototype.getContext = function () {
                return this._ctx
            }, t.prototype.beginPath = function () {
                return this._ctx && this._ctx.beginPath(), this.reset(), this
            }, t.prototype.reset = function () {
                this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++
            }, t.prototype.moveTo = function (t, e) {
                return this._drawPendingPt(), this.addData(db.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            }, t.prototype.lineTo = function (t, e) {
                var n = Cb(t - this._xi), i = Cb(e - this._yi), r = n > this._ux || i > this._uy;
                if (this.addData(db.L, t, e), this._ctx && r && (this._needsDash ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), r) this._xi = t, this._yi = e, this._pendingPtDist = 0; else {
                    var o = n * n + i * i;
                    o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o)
                }
                return this
            }, t.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
                return this._drawPendingPt(), this.addData(db.C, t, e, n, i, r, o), this._ctx && (this._needsDash ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)), this._xi = r, this._yi = o, this
            }, t.prototype.quadraticCurveTo = function (t, e, n, i) {
                return this._drawPendingPt(), this.addData(db.Q, t, e, n, i), this._ctx && (this._needsDash ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
            }, t.prototype.arc = function (t, e, n, i, r, o) {
                this._drawPendingPt(), Ab[0] = i, Ab[1] = r, uo(Ab, o), i = Ab[0], r = Ab[1];
                var a = r - i;
                return this.addData(db.A, t, e, n, n, i, a, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), this._xi = Sb(r) * n + t, this._yi = Mb(r) * n + e, this
            }, t.prototype.arcTo = function (t, e, n, i, r) {
                return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this
            }, t.prototype.rect = function (t, e, n, i) {
                return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(db.R, t, e, n, i), this
            }, t.prototype.closePath = function () {
                this._drawPendingPt(), this.addData(db.Z);
                var t = this._ctx, e = this._x0, n = this._y0;
                return t && (this._needsDash && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
            }, t.prototype.fill = function (t) {
                t && t.fill(), this.toStatic()
            }, t.prototype.stroke = function (t) {
                t && t.stroke(), this.toStatic()
            }, t.prototype.setLineDash = function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                    this._dashSum = e, this._needsDash = !0
                } else this._lineDash = null, this._needsDash = !1;
                return this
            }, t.prototype.setLineDashOffset = function (t) {
                return this._dashOffset = t, this
            }, t.prototype.len = function () {
                return this._len
            }, t.prototype.setData = function (t) {
                var e = t.length;
                this.data && this.data.length === e || !kb || (this.data = new Float32Array(e));
                for (var n = 0; e > n; n++) this.data[n] = t[n];
                this._len = e
            }, t.prototype.appendPath = function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
                kb && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
                for (var r = 0; e > r; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
                this._len = i
            }, t.prototype.addData = function () {
                if (this._saveData) {
                    var t = this.data;
                    this._len + arguments.length > t.length && (this._expandData(), t = this.data);
                    for (var e = 0; e < arguments.length; e++) t[this._len++] = arguments[e]
                }
            }, t.prototype._drawPendingPt = function () {
                this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0)
            }, t.prototype._expandData = function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            }, t.prototype._dashedLineTo = function (t, e) {
                var n, i, r = this._dashSum, o = this._lineDash, a = this._ctx, s = this._dashOffset, l = this._xi,
                    u = this._yi, h = t - l, c = e - u, p = Tb(h * h + c * c), f = l, d = u, g = o.length;
                for (h /= p, c /= p, 0 > s && (s = r + s), s %= r, f -= s * h, d -= s * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= d || 0 > c && d >= e);) i = this._dashIdx, n = o[i], f += h * n, d += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > d || 0 > c && d > u || a[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? bb(f, t) : wb(f, t), c >= 0 ? bb(d, e) : wb(d, e));
                h = f - t, c = d - e, this._dashOffset = -Tb(h * h + c * c)
            }, t.prototype._dashedBezierTo = function (t, e, n, i, r, o) {
                var a, s, l, u, h, c = this._ctx, p = this._dashSum, f = this._dashOffset, d = this._lineDash, g = this._xi,
                    y = this._yi, v = 0, m = this._dashIdx, _ = d.length, x = 0;
                for (0 > f && (f = p + f), f %= p, a = 0; 1 > a; a += .1) s = Wr(g, t, n, r, a + .1) - Wr(g, t, n, r, a), l = Wr(y, e, i, o, a + .1) - Wr(y, e, i, o, a), v += Tb(s * s + l * l);
                for (; _ > m && (x += d[m], !(x > f)); m++) ;
                for (a = (x - f) / v; 1 >= a;) u = Wr(g, t, n, r, a), h = Wr(y, e, i, o, a), m % 2 ? c.moveTo(u, h) : c.lineTo(u, h), a += d[m] / v, m = (m + 1) % _;
                m % 2 !== 0 && c.lineTo(r, o), s = r - u, l = o - h, this._dashOffset = -Tb(s * s + l * l)
            }, t.prototype._dashedQuadraticTo = function (t, e, n, i) {
                var r = n, o = i;
                n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, o)
            }, t.prototype.toStatic = function () {
                if (this._saveData) {
                    this._drawPendingPt();
                    var t = this.data;
                    t instanceof Array && (t.length = this._len, kb && this._len > 11 && (this.data = new Float32Array(t)))
                }
            }, t.prototype.getBoundingRect = function () {
                vb[0] = vb[1] = _b[0] = _b[1] = Number.MAX_VALUE, mb[0] = mb[1] = xb[0] = xb[1] = -Number.MAX_VALUE;
                var t, e = this.data, n = 0, i = 0, r = 0, o = 0;
                for (t = 0; t < this._len;) {
                    var a = e[t++], s = 1 === t;
                    switch (s && (n = e[t], i = e[t + 1], r = n, o = i), a) {
                        case db.M:
                            n = r = e[t++], i = o = e[t++], _b[0] = r, _b[1] = o, xb[0] = r, xb[1] = o;
                            break;
                        case db.L:
                            ro(n, i, e[t], e[t + 1], _b, xb), n = e[t++], i = e[t++];
                            break;
                        case db.C:
                            oo(n, i, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], _b, xb), n = e[t++], i = e[t++];
                            break;
                        case db.Q:
                            ao(n, i, e[t++], e[t++], e[t], e[t + 1], _b, xb), n = e[t++], i = e[t++];
                            break;
                        case db.A:
                            var l = e[t++], u = e[t++], h = e[t++], c = e[t++], p = e[t++], f = e[t++] + p;
                            t += 1;
                            var d = !e[t++];
                            s && (r = Sb(p) * h + l, o = Mb(p) * c + u), so(l, u, h, c, p, f, d, _b, xb), n = Sb(f) * h + l, i = Mb(f) * c + u;
                            break;
                        case db.R:
                            r = n = e[t++], o = i = e[t++];
                            var g = e[t++], y = e[t++];
                            ro(r, o, r + g, o + y, _b, xb);
                            break;
                        case db.Z:
                            n = r, i = o
                    }
                    ye(vb, vb, _b), ve(mb, mb, xb)
                }
                return 0 === t && (vb[0] = vb[1] = mb[0] = mb[1] = 0), new ex(vb[0], vb[1], mb[0] - vb[0], mb[1] - vb[1])
            }, t.prototype._calculateLength = function () {
                var t = this.data, e = this._len, n = this._ux, i = this._uy, r = 0, o = 0, a = 0, s = 0;
                this._pathSegLen || (this._pathSegLen = []);
                for (var l = this._pathSegLen, u = 0, h = 0, c = 0; e > c;) {
                    var p = t[c++], f = 1 === c;
                    f && (r = t[c], o = t[c + 1], a = r, s = o);
                    var d = -1;
                    switch (p) {
                        case db.M:
                            r = a = t[c++], o = s = t[c++];
                            break;
                        case db.L:
                            var g = t[c++], y = t[c++], v = g - r, m = y - o;
                            (Cb(v) > n || Cb(m) > i || c === e - 1) && (d = Math.sqrt(v * v + m * m), r = g, o = y);
                            break;
                        case db.C:
                            var _ = t[c++], x = t[c++], g = t[c++], y = t[c++], b = t[c++], w = t[c++];
                            d = Zr(r, o, _, x, g, y, b, w, 10), r = b, o = w;
                            break;
                        case db.Q:
                            var _ = t[c++], x = t[c++], g = t[c++], y = t[c++];
                            d = no(r, o, _, x, g, y, 10), r = g, o = y;
                            break;
                        case db.A:
                            var S = t[c++], M = t[c++], T = t[c++], C = t[c++], I = t[c++], D = t[c++], k = D + I;
                            c += 1;
                        {
                            !t[c++]
                        }
                            f && (a = Sb(I) * T + S, s = Mb(I) * C + M), d = wb(T, C) * bb(Db, Math.abs(D)), r = Sb(k) * T + S, o = Mb(k) * C + M;
                            break;
                        case db.R:
                            a = r = t[c++], s = o = t[c++];
                            var A = t[c++], P = t[c++];
                            d = 2 * A + 2 * P;
                            break;
                        case db.Z:
                            var v = a - r, m = s - o;
                            d = Math.sqrt(v * v + m * m), r = a, o = s
                    }
                    d >= 0 && (l[h++] = d, u += d)
                }
                return this._pathLen = u, u
            }, t.prototype.rebuildPath = function (t, e) {
                var n, i, r, o, a, s, l, u, h, c, p, f = this.data, d = this._ux, g = this._uy, y = this._len, v = 1 > e,
                    m = 0, _ = 0, x = 0;
                if (!v || (this._pathSegLen || this._calculateLength(), l = this._pathSegLen, u = this._pathLen, h = e * u)) t:for (var b = 0; y > b;) {
                    var w = f[b++], S = 1 === b;
                    switch (S && (r = f[b], o = f[b + 1], n = r, i = o), w !== db.L && x > 0 && (t.lineTo(c, p), x = 0), w) {
                        case db.M:
                            n = r = f[b++], i = o = f[b++], t.moveTo(r, o);
                            break;
                        case db.L:
                            a = f[b++], s = f[b++];
                            var M = Cb(a - r), T = Cb(s - o);
                            if (M > d || T > g) {
                                if (v) {
                                    var C = l[_++];
                                    if (m + C > h) {
                                        var I = (h - m) / C;
                                        t.lineTo(r * (1 - I) + a * I, o * (1 - I) + s * I);
                                        break t
                                    }
                                    m += C
                                }
                                t.lineTo(a, s), r = a, o = s, x = 0
                            } else {
                                var D = M * M + T * T;
                                D > x && (c = a, p = s, x = D)
                            }
                            break;
                        case db.C:
                            var k = f[b++], A = f[b++], P = f[b++], L = f[b++], O = f[b++], R = f[b++];
                            if (v) {
                                var C = l[_++];
                                if (m + C > h) {
                                    var I = (h - m) / C;
                                    jr(r, k, P, O, I, gb), jr(o, A, L, R, I, yb), t.bezierCurveTo(gb[1], yb[1], gb[2], yb[2], gb[3], yb[3]);
                                    break t
                                }
                                m += C
                            }
                            t.bezierCurveTo(k, A, P, L, O, R), r = O, o = R;
                            break;
                        case db.Q:
                            var k = f[b++], A = f[b++], P = f[b++], L = f[b++];
                            if (v) {
                                var C = l[_++];
                                if (m + C > h) {
                                    var I = (h - m) / C;
                                    to(r, k, P, I, gb), to(o, A, L, I, yb), t.quadraticCurveTo(gb[1], yb[1], gb[2], yb[2]);
                                    break t
                                }
                                m += C
                            }
                            t.quadraticCurveTo(k, A, P, L), r = P, o = L;
                            break;
                        case db.A:
                            var z = f[b++], E = f[b++], N = f[b++], B = f[b++], F = f[b++], V = f[b++], H = f[b++],
                                G = !f[b++], W = N > B ? N : B, U = Cb(N - B) > .001, X = F + V, Y = !1;
                            if (v) {
                                var C = l[_++];
                                m + C > h && (X = F + V * (h - m) / C, Y = !0), m += C
                            }
                            if (U && t.ellipse ? t.ellipse(z, E, N, B, H, F, X, G) : t.arc(z, E, W, F, X, G), Y) break t;
                            S && (n = Sb(F) * N + z, i = Mb(F) * B + E), r = Sb(X) * N + z, o = Mb(X) * B + E;
                            break;
                        case db.R:
                            n = r = f[b], i = o = f[b + 1], a = f[b++], s = f[b++];
                            var j = f[b++], q = f[b++];
                            if (v) {
                                var C = l[_++];
                                if (m + C > h) {
                                    var Z = h - m;
                                    t.moveTo(a, s), t.lineTo(a + bb(Z, j), s), Z -= j, Z > 0 && t.lineTo(a + j, s + bb(Z, q)), Z -= q, Z > 0 && t.lineTo(a + wb(j - Z, 0), s + q), Z -= j, Z > 0 && t.lineTo(a, s + wb(q - Z, 0));
                                    break t
                                }
                                m += C
                            }
                            t.rect(a, s, j, q);
                            break;
                        case db.Z:
                            if (v) {
                                var C = l[_++];
                                if (m + C > h) {
                                    var I = (h - m) / C;
                                    t.lineTo(r * (1 - I) + n * I, o * (1 - I) + i * I);
                                    break t
                                }
                                m += C
                            }
                            t.closePath(), r = n, o = i
                    }
                }
            }, t.prototype.clone = function () {
                var e = new t, n = this.data;
                return e.data = n.slice ? n.slice() : Array.prototype.slice.call(n), e._len = this._len, e
            }, t.CMD = db, t.initDefaultProps = function () {
                var e = t.prototype;
                e._saveData = !0, e._needsDash = !1, e._dashOffset = 0, e._dashIdx = 0, e._dashSum = 0, e._ux = 0, e._uy = 0, e._pendingPtDist = 0, e._version = 0
            }(), t
        }(), Lb = 2 * Math.PI, Ob = 2 * Math.PI, Rb = Pb.CMD, zb = 2 * Math.PI, Eb = 1e-4, Nb = [-1, -1, -1], Bb = [-1, -1],
        Fb = c({
            fill: "#000",
            stroke: null,
            strokePercent: 1,
            fillOpacity: 1,
            strokeOpacity: 1,
            lineDashOffset: 0,
            lineWidth: 1,
            lineCap: "butt",
            miterLimit: 10,
            strokeNoScale: !1,
            strokeFirst: !1
        }, Gx), Vb = {
            style: c({
                fill: !0,
                stroke: !0,
                strokePercent: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineDashOffset: !0,
                lineWidth: !0,
                miterLimit: !0
            }, Wx.style)
        },
        Hb = ["x", "y", "rotation", "scaleX", "scaleY", "originX", "originY", "invisible", "culling", "z", "z2", "zlevel", "parent"],
        Gb = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype.update = function () {
                var e = this;
                t.prototype.update.call(this);
                var i = this.style;
                if (i.decal) {
                    var r = this._decalEl = this._decalEl || new n;
                    r.buildPath === n.prototype.buildPath && (r.buildPath = function (t) {
                        e.buildPath(t, e.shape)
                    }), r.silent = !0;
                    var o = r.style;
                    for (var a in i) o[a] !== i[a] && (o[a] = i[a]);
                    o.fill = i.fill ? i.decal : null, o.decal = null, o.shadowColor = null, i.strokeFirst && (o.stroke = null);
                    for (var s = 0; s < Hb.length; ++s) r[Hb[s]] = this[Hb[s]];
                    r.__dirty |= $m
                } else this._decalEl && (this._decalEl = null)
            }, n.prototype.getDecalElement = function () {
                return this._decalEl
            }, n.prototype._init = function (e) {
                var n = b(e);
                this.shape = this.getDefaultShape();
                var i = this.getDefaultStyle();
                i && this.useStyle(i);
                for (var r = 0; r < n.length; r++) {
                    var o = n[r], a = e[o];
                    "style" === o ? this.style ? h(this.style, a) : this.useStyle(a) : "shape" === o ? h(this.shape, a) : t.prototype.attrKV.call(this, o, a)
                }
                this.style || this.useStyle({})
            }, n.prototype.getDefaultStyle = function () {
                return null
            }, n.prototype.getDefaultShape = function () {
                return {}
            }, n.prototype.canBeInsideText = function () {
                return this.hasFill()
            }, n.prototype.getInsideTextFill = function () {
                var t = this.style.fill;
                if ("none" !== t) {
                    if (C(t)) {
                        var e = gn(t, 0);
                        return e > .5 ? R_ : e > .2 ? E_ : z_
                    }
                    if (t) return z_
                }
                return R_
            }, n.prototype.getInsideTextStroke = function (t) {
                var e = this.style.fill;
                if (C(e)) {
                    var n = this.__zr, i = !(!n || !n.isDarkMode()), r = gn(t, 0) < O_;
                    if (i === r) return e
                }
            }, n.prototype.buildPath = function () {
            }, n.prototype.pathUpdated = function () {
                this.__dirty &= ~Qm
            }, n.prototype.getUpdatedPathProxy = function (t) {
                return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, t), this.path
            }, n.prototype.createPathProxy = function () {
                this.path = new Pb(!1)
            }, n.prototype.hasStroke = function () {
                var t = this.style, e = t.stroke;
                return !(null == e || "none" === e || !(t.lineWidth > 0))
            }, n.prototype.hasFill = function () {
                var t = this.style, e = t.fill;
                return null != e && "none" !== e
            }, n.prototype.getBoundingRect = function () {
                var t = this._rect, e = this.style, n = !t;
                if (n) {
                    var i = !1;
                    this.path || (i = !0, this.createPathProxy());
                    var r = this.path;
                    (i || this.__dirty & Qm) && (r.beginPath(), this.buildPath(r, this.shape, !1), this.pathUpdated()), t = r.getBoundingRect()
                }
                if (this._rect = t, this.hasStroke() && this.path && this.path.len() > 0) {
                    var o = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || n) {
                        o.copy(t);
                        var a = e.strokeNoScale ? this.getLineScale() : 1, s = e.lineWidth;
                        if (!this.hasFill()) {
                            var l = this.strokeContainThreshold;
                            s = Math.max(s, null == l ? 4 : l)
                        }
                        a > 1e-10 && (o.width += s / a, o.height += s / a, o.x -= s / a / 2, o.y -= s / a / 2)
                    }
                    return o
                }
                return t
            }, n.prototype.contain = function (t, e) {
                var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
                if (t = n[0], e = n[1], i.contain(t, e)) {
                    var o = this.path;
                    if (this.hasStroke()) {
                        var a = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                        if (s > 1e-10 && (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), Mo(o, a / s, t, e))) return !0
                    }
                    if (this.hasFill()) return So(o, t, e)
                }
                return !1
            }, n.prototype.dirtyShape = function () {
                this.__dirty |= Qm, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw()
            }, n.prototype.dirty = function () {
                this.dirtyStyle(), this.dirtyShape()
            }, n.prototype.animateShape = function (t) {
                return this.animate("shape", t)
            }, n.prototype.updateDuringAnimation = function (t) {
                "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw()
            }, n.prototype.attrKV = function (e, n) {
                "shape" === e ? this.setShape(n) : t.prototype.attrKV.call(this, e, n)
            }, n.prototype.setShape = function (t, e) {
                var n = this.shape;
                return n || (n = this.shape = {}), "string" == typeof t ? n[t] = e : h(n, t), this.dirtyShape(), this
            }, n.prototype.shapeChanged = function () {
                return !!(this.__dirty & Qm)
            }, n.prototype.createStyle = function (t) {
                return q(Fb, t)
            }, n.prototype._innerSaveToNormal = function (e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var n = this._normalState;
                e.shape && !n.shape && (n.shape = h({}, this.shape))
            }, n.prototype._applyStateObj = function (e, n, i, r, o, a) {
                t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
                var s, l = !(n && r);
                if (n && n.shape ? o ? r ? s = n.shape : (s = h({}, i.shape), h(s, n.shape)) : (s = h({}, r ? this.shape : i.shape), h(s, n.shape)) : l && (s = i.shape), s) if (o) {
                    this.shape = h({}, this.shape);
                    for (var u = {}, c = b(s), p = 0; p < c.length; p++) {
                        var f = c[p];
                        "object" == typeof s[f] ? this.shape[f] = s[f] : u[f] = s[f]
                    }
                    this._transitionState(e, {shape: u}, a)
                } else this.shape = s, this.dirtyShape()
            }, n.prototype._mergeStates = function (e) {
                for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.shape && (n = n || {}, this._mergeStyle(n, o.shape))
                }
                return n && (i.shape = n), i
            }, n.prototype.getAnimationStyleProps = function () {
                return Vb
            }, n.prototype.isZeroArea = function () {
                return !1
            }, n.extend = function (t) {
                var i = function (n) {
                    function i(e) {
                        var i = n.call(this, e) || this;
                        return t.init && t.init.call(i, e), i
                    }

                    return e(i, n), i.prototype.getDefaultStyle = function () {
                        return s(t.style)
                    }, i.prototype.getDefaultShape = function () {
                        return s(t.shape)
                    }, i
                }(n);
                for (var r in t) "function" == typeof t[r] && (i.prototype[r] = t[r]);
                return i
            }, n.initDefaultProps = function () {
                var t = n.prototype;
                t.type = "path", t.strokeContainThreshold = 5, t.segmentIgnoreThreshold = 0, t.subPixelOptimize = !1, t.autoBatch = !1, t.__dirty = $m | Jm | Qm
            }(), n
        }(Yx),
        Wb = c({strokeFirst: !0, font: ix, x: 0, y: 0, textAlign: "left", textBaseline: "top", miterLimit: 2}, Fb),
        Ub = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.hasStroke = function () {
                var t = this.style, e = t.stroke;
                return null != e && "none" !== e && t.lineWidth > 0
            }, n.prototype.hasFill = function () {
                var t = this.style, e = t.fill;
                return null != e && "none" !== e
            }, n.prototype.createStyle = function (t) {
                return q(Wb, t)
            }, n.prototype.setBoundingRect = function (t) {
                this._rect = t
            }, n.prototype.getBoundingRect = function () {
                var t = this.style;
                if (!this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var n = Qn(e, t.font, t.textAlign, t.textBaseline);
                    if (n.x += t.x || 0, n.y += t.y || 0, this.hasStroke()) {
                        var i = t.lineWidth;
                        n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                    }
                    this._rect = n
                }
                return this._rect
            }, n.initDefaultProps = function () {
                var t = n.prototype;
                t.dirtyRectTolerance = 10
            }(), n
        }(Yx);
    Ub.prototype.type = "tspan";
    var Xb = c({x: 0, y: 0}, Gx),
        Yb = {style: c({x: !0, y: !0, width: !0, height: !0, sx: !0, sy: !0, sWidth: !0, sHeight: !0}, Wx.style)},
        jb = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.createStyle = function (t) {
                return q(Xb, t)
            }, n.prototype._getSize = function (t) {
                var e = this.style, n = e[t];
                if (null != n) return n;
                var i = To(e.image) ? e.image : this.__image;
                if (!i) return 0;
                var r = "width" === t ? "height" : "width", o = e[r];
                return null == o ? i[t] : i[t] / i[r] * o
            }, n.prototype.getWidth = function () {
                return this._getSize("width")
            }, n.prototype.getHeight = function () {
                return this._getSize("height")
            }, n.prototype.getAnimationStyleProps = function () {
                return Yb
            }, n.prototype.getBoundingRect = function () {
                var t = this.style;
                return this._rect || (this._rect = new ex(t.x || 0, t.y || 0, this.getWidth(), this.getHeight())), this._rect
            }, n
        }(Yx);
    jb.prototype.type = "image";
    var qb = Math.round, Zb = function () {
        function t() {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0
        }

        return t
    }(), Kb = {}, $b = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new Zb
        }, n.prototype.buildPath = function (t, e) {
            var n, i, r, o;
            if (this.subPixelOptimize) {
                var a = Do(Kb, e, this.style);
                n = a.x, i = a.y, r = a.width, o = a.height, a.r = e.r, e = a
            } else n = e.x, i = e.y, r = e.width, o = e.height;
            e.r ? Co(t, e) : t.rect(n, i, r, o)
        }, n.prototype.isZeroArea = function () {
            return !this.shape.width || !this.shape.height
        }, n
    }(Gb);
    $b.prototype.type = "rect";
    var Jb = {fill: "#000"}, Qb = 2, tw = {
            style: c({
                fill: !0,
                stroke: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineWidth: !0,
                fontSize: !0,
                lineHeight: !0,
                width: !0,
                height: !0,
                textShadowColor: !0,
                textShadowBlur: !0,
                textShadowOffsetX: !0,
                textShadowOffsetY: !0,
                backgroundColor: !0,
                padding: !0,
                borderColor: !0,
                borderWidth: !0,
                borderRadius: !0
            }, Wx.style)
        }, ew = function (t) {
            function n(e) {
                var n = t.call(this) || this;
                return n.type = "text", n._children = [], n._defaultStyle = Jb, n.attr(e), n
            }

            return e(n, t), n.prototype.childrenRef = function () {
                return this._children
            }, n.prototype.update = function () {
                t.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
                for (var e = 0; e < this._children.length; e++) {
                    var n = this._children[e];
                    n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible
                }
            }, n.prototype.updateTransform = function () {
                var e = this.innerTransformable;
                e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : t.prototype.updateTransform.call(this)
            }, n.prototype.getLocalTransform = function (e) {
                var n = this.innerTransformable;
                return n ? n.getLocalTransform(e) : t.prototype.getLocalTransform.call(this, e)
            }, n.prototype.getComputedTransform = function () {
                return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), t.prototype.getComputedTransform.call(this)
            }, n.prototype._updateSubTexts = function () {
                this._childCursor = 0, Ao(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated()
            }, n.prototype.addSelfToZr = function (e) {
                t.prototype.addSelfToZr.call(this, e);
                for (var n = 0; n < this._children.length; n++) this._children[n].__zr = e
            }, n.prototype.removeSelfFromZr = function (e) {
                t.prototype.removeSelfFromZr.call(this, e);
                for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null
            }, n.prototype.getBoundingRect = function () {
                if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                    for (var t = new ex(0, 0, 0, 0), e = this._children, n = [], i = null, r = 0; r < e.length; r++) {
                        var o = e[r], a = o.getBoundingRect(), s = o.getLocalTransform(n);
                        s ? (t.copy(a), t.applyTransform(s), i = i || t.clone(), i.union(t)) : (i = i || a.clone(), i.union(a))
                    }
                    this._rect = i || t
                }
                return this._rect
            }, n.prototype.setDefaultTextStyle = function (t) {
                this._defaultStyle = t || Jb
            }, n.prototype.setTextContent = function () {
                throw new Error("Can't attach text on another text")
            }, n.prototype._mergeStyle = function (t, e) {
                if (!e) return t;
                var n = e.rich, i = t.rich || n && {};
                return h(t, e), n && i ? (this._mergeRich(i, n), t.rich = i) : i && (t.rich = i), t
            }, n.prototype._mergeRich = function (t, e) {
                for (var n = b(e), i = 0; i < n.length; i++) {
                    var r = n[i];
                    t[r] = t[r] || {}, h(t[r], e[r])
                }
            }, n.prototype.getAnimationStyleProps = function () {
                return tw
            }, n.prototype._getOrCreateChild = function (t) {
                var e = this._children[this._childCursor];
                return e && e instanceof t || (e = new t), this._children[this._childCursor++] = e, e.__zr = this.__zr, e.parent = this, e
            }, n.prototype._updatePlainTexts = function () {
                var t = this.style, e = t.font || ix, n = t.padding, i = zo(t), r = Rr(i, t), o = Eo(t),
                    a = !!t.backgroundColor, s = r.outerHeight, l = r.lines, u = r.lineHeight, h = this._defaultStyle,
                    c = t.x || 0, p = t.y || 0, f = t.align || h.align || "left",
                    d = t.verticalAlign || h.verticalAlign || "top", g = c, y = ei(p, r.contentHeight, d);
                if (o || n) {
                    var v = r.width;
                    n && (v += n[1] + n[3]);
                    var m = ti(c, v, f), _ = ei(p, s, d);
                    o && this._renderBackground(t, t, m, _, v, s)
                }
                y += u / 2, n && (g = Ro(c, f, n), "top" === d ? y += n[0] : "bottom" === d && (y -= n[2]));
                for (var x = 0, b = !1, w = (Oo("fill" in t ? t.fill : (b = !0, h.fill))), S = (Lo("stroke" in t ? t.stroke : a || h.autoStroke && !b ? null : (x = Qb, h.stroke))), M = t.textShadowBlur > 0, T = null != t.width && ("truncate" === t.overflow || "break" === t.overflow || "breakAll" === t.overflow), C = r.calculatedLineHeight, I = 0; I < l.length; I++) {
                    var D = this._getOrCreateChild(Ub), k = D.createStyle();
                    D.useStyle(k), k.text = l[I], k.x = g, k.y = y, f && (k.textAlign = f), k.textBaseline = "middle", k.opacity = t.opacity, k.strokeFirst = !0, M && (k.shadowBlur = t.textShadowBlur || 0, k.shadowColor = t.textShadowColor || "transparent", k.shadowOffsetX = t.textShadowOffsetX || 0, k.shadowOffsetY = t.textShadowOffsetY || 0), S && (k.stroke = S, k.lineWidth = t.lineWidth || x, k.lineDash = t.lineDash, k.lineDashOffset = t.lineDashOffset || 0), w && (k.fill = w), k.font = e, y += u, T && D.setBoundingRect(new ex(ti(k.x, t.width, k.textAlign), ei(k.y, C, k.textBaseline), t.width, C))
                }
            }, n.prototype._updateRichTexts = function () {
                var t = this.style, e = zo(t), n = zr(e, t), i = n.width, r = n.outerWidth, o = n.outerHeight,
                    a = t.padding, s = t.x || 0, l = t.y || 0, u = this._defaultStyle, h = t.align || u.align,
                    c = t.verticalAlign || u.verticalAlign, p = ti(s, r, h), f = ei(l, o, c), d = p, g = f;
                a && (d += a[3], g += a[0]);
                var y = d + i;
                Eo(t) && this._renderBackground(t, t, p, f, r, o);
                for (var v = !!t.backgroundColor, m = 0; m < n.lines.length; m++) {
                    for (var _ = n.lines[m], x = _.tokens, b = x.length, w = _.lineHeight, S = _.width, M = 0, T = d, C = y, I = b - 1, D = void 0; b > M && (D = x[M], !D.align || "left" === D.align);) this._placeToken(D, t, w, g, T, "left", v), S -= D.width, T += D.width, M++;
                    for (; I >= 0 && (D = x[I], "right" === D.align);) this._placeToken(D, t, w, g, C, "right", v), S -= D.width, C -= D.width, I--;
                    for (T += (i - (T - d) - (y - C) - S) / 2; I >= M;) D = x[M], this._placeToken(D, t, w, g, T + D.width / 2, "center", v), T += D.width, M++;
                    g += w
                }
            }, n.prototype._placeToken = function (t, e, n, i, r, o, a) {
                var s = e.rich[t.styleName] || {};
                s.text = t.text;
                var l = t.verticalAlign, u = i + n / 2;
                "top" === l ? u = i + t.height / 2 : "bottom" === l && (u = i + n - t.height / 2);
                var h = !t.isLineHolder && Eo(s);
                h && this._renderBackground(s, e, "right" === o ? r - t.width : "center" === o ? r - t.width / 2 : r, u - t.height / 2, t.width, t.height);
                var c = !!s.backgroundColor, p = t.textPadding;
                p && (r = Ro(r, o, p), u -= t.height / 2 - p[0] - t.innerHeight / 2);
                var f = this._getOrCreateChild(Ub), d = f.createStyle();
                f.useStyle(d);
                var g = this._defaultStyle, y = !1, v = 0,
                    m = Oo("fill" in s ? s.fill : "fill" in e ? e.fill : (y = !0, g.fill)),
                    _ = Lo("stroke" in s ? s.stroke : "stroke" in e ? e.stroke : c || a || g.autoStroke && !y ? null : (v = Qb, g.stroke)),
                    x = s.textShadowBlur > 0 || e.textShadowBlur > 0;
                d.text = t.text, d.x = r, d.y = u, x && (d.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0, d.shadowColor = s.textShadowColor || e.textShadowColor || "transparent", d.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0, d.shadowOffsetY = s.textShadowOffsetY || e.textShadowOffsetY || 0), d.textAlign = o, d.textBaseline = "middle", d.font = t.font || ix, d.opacity = F(s.opacity, e.opacity, 1), _ && (d.lineWidth = F(s.lineWidth, e.lineWidth, v), d.lineDash = B(s.lineDash, e.lineDash), d.lineDashOffset = e.lineDashOffset || 0, d.stroke = _), m && (d.fill = m);
                var b = t.contentWidth, w = t.contentHeight;
                f.setBoundingRect(new ex(ti(d.x, b, d.textAlign), ei(d.y, w, d.textBaseline), b, w))
            }, n.prototype._renderBackground = function (t, e, n, i, r, o) {
                var a, s, l = t.backgroundColor, u = t.borderWidth, h = t.borderColor, c = l && l.image, p = l && !c,
                    f = t.borderRadius, d = this;
                if (p || t.lineHeight || u && h) {
                    a = this._getOrCreateChild($b), a.useStyle(a.createStyle()), a.style.fill = null;
                    var g = a.shape;
                    g.x = n, g.y = i, g.width = r, g.height = o, g.r = f, a.dirtyShape()
                }
                if (p) {
                    var y = a.style;
                    y.fill = l || null, y.fillOpacity = B(t.fillOpacity, 1)
                } else if (c) {
                    s = this._getOrCreateChild(jb), s.onload = function () {
                        d.dirtyStyle()
                    };
                    var v = s.style;
                    v.image = l.image, v.x = n, v.y = i, v.width = r, v.height = o
                }
                if (u && h) {
                    var y = a.style;
                    y.lineWidth = u, y.stroke = h, y.strokeOpacity = B(t.strokeOpacity, 1), y.lineDash = t.borderDash, y.lineDashOffset = t.borderDashOffset || 0, a.strokeContainThreshold = 0, a.hasFill() && a.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2)
                }
                var m = (a || s).style;
                m.shadowBlur = t.shadowBlur || 0, m.shadowColor = t.shadowColor || "transparent", m.shadowOffsetX = t.shadowOffsetX || 0, m.shadowOffsetY = t.shadowOffsetY || 0, m.opacity = F(t.opacity, e.opacity, 1)
            }, n.makeFont = function (t) {
                var e = "";
                if (t.fontSize || t.fontFamily || t.fontWeight) {
                    var n = "";
                    n = "string" != typeof t.fontSize || -1 === t.fontSize.indexOf("px") && -1 === t.fontSize.indexOf("rem") && -1 === t.fontSize.indexOf("em") ? isNaN(+t.fontSize) ? "12px" : t.fontSize + "px" : t.fontSize, e = [t.fontStyle, t.fontWeight, n, t.fontFamily || "sans-serif"].join(" ")
                }
                return e && W(e) || t.textFont || t.font
            }, n
        }(Yx), nw = {left: !0, right: 1, center: 1}, iw = {top: 1, bottom: 1, middle: 1}, rw = ar(),
        ow = function (t, e, n, i) {
            if (i) {
                var r = rw(i);
                r.dataIndex = n, r.dataType = e, r.seriesIndex = t, "group" === i.type && i.traverse(function (i) {
                    var r = rw(i);
                    r.seriesIndex = t, r.dataIndex = n, r.dataType = e
                })
            }
        }, aw = 1, sw = {}, lw = ar(), uw = 0, hw = 1, cw = 2, pw = ["emphasis", "blur", "select"],
        fw = ["normal", "emphasis", "blur", "select"], dw = 10, gw = 9, yw = "highlight", vw = "downplay",
        mw = "select", _w = "unselect", xw = "toggleSelect", bw = new s_(100), ww = ["emphasis", "blur", "select"],
        Sw = {itemStyle: "getItemStyle", lineStyle: "getLineStyle", areaStyle: "getAreaStyle"}, Mw = Pb.CMD,
        Tw = [[], [], []], Cw = Math.sqrt, Iw = Math.atan2, Dw = Math.sqrt, kw = Math.sin, Aw = Math.cos, Pw = Math.PI,
        Lw = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, Ow = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, Rw = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.applyTransform = function () {
            }, n
        }(Gb), zw = function () {
            function t() {
                this.cx = 0, this.cy = 0, this.r = 0
            }

            return t
        }(), Ew = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new zw
            }, n.prototype.buildPath = function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
            }, n
        }(Gb);
    Ew.prototype.type = "circle";
    var Nw = function () {
        function t() {
            this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0
        }

        return t
    }(), Bw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new Nw
        }, n.prototype.buildPath = function (t, e) {
            var n = .5522848, i = e.cx, r = e.cy, o = e.rx, a = e.ry, s = o * n, l = a * n;
            t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), t.closePath()
        }, n
    }(Gb);
    Bw.prototype.type = "ellipse";
    var Fw = Math.PI, Vw = 2 * Fw, Hw = Math.sin, Gw = Math.cos, Ww = Math.acos, Uw = Math.atan2, Xw = Math.abs,
        Yw = Math.sqrt, jw = Math.max, qw = Math.min, Zw = 1e-4, Kw = function () {
            function t() {
                this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0, this.cornerRadius = 0, this.innerCornerRadius = 0
            }

            return t
        }(), $w = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new Kw
            }, n.prototype.buildPath = function (t, e) {
                Ga(t, e)
            }, n.prototype.isZeroArea = function () {
                return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
            }, n
        }(Gb);
    $w.prototype.type = "sector";
    var Jw = function () {
        function t() {
            this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0
        }

        return t
    }(), Qw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new Jw
        }, n.prototype.buildPath = function (t, e) {
            var n = e.cx, i = e.cy, r = 2 * Math.PI;
            t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
        }, n
    }(Gb);
    Qw.prototype.type = "ring";
    var tS = function () {
        function t() {
            this.points = null, this.smooth = 0, this.smoothConstraint = null
        }

        return t
    }(), eS = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new tS
        }, n.prototype.buildPath = function (t, e) {
            Ya(t, e, !0)
        }, n
    }(Gb);
    eS.prototype.type = "polygon";
    var nS = function () {
        function t() {
            this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null
        }

        return t
    }(), iS = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new nS
        }, n.prototype.buildPath = function (t, e) {
            Ya(t, e, !1)
        }, n
    }(Gb);
    iS.prototype.type = "polyline";
    var rS = {}, oS = function () {
        function t() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1
        }

        return t
    }(), aS = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new oS
        }, n.prototype.buildPath = function (t, e) {
            var n, i, r, o;
            if (this.subPixelOptimize) {
                var a = Io(rS, e, this.style);
                n = a.x1, i = a.y1, r = a.x2, o = a.y2
            } else n = e.x1, i = e.y1, r = e.x2, o = e.y2;
            var s = e.percent;
            0 !== s && (t.moveTo(n, i), 1 > s && (r = n * (1 - s) + r * s, o = i * (1 - s) + o * s), t.lineTo(r, o))
        }, n.prototype.pointAt = function (t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
        }, n
    }(Gb);
    aS.prototype.type = "line";
    var sS = [], lS = function () {
        function t() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1
        }

        return t
    }(), uS = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new lS
        }, n.prototype.buildPath = function (t, e) {
            var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2, h = e.percent;
            0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (to(n, a, r, h, sS), a = sS[1], r = sS[2], to(i, s, o, h, sS), s = sS[1], o = sS[2]), t.quadraticCurveTo(a, s, r, o)) : (1 > h && (jr(n, a, l, r, h, sS), a = sS[1], l = sS[2], r = sS[3], jr(i, s, u, o, h, sS), s = sS[1], u = sS[2], o = sS[3]), t.bezierCurveTo(a, s, l, u, r, o)))
        }, n.prototype.pointAt = function (t) {
            return ja(this.shape, t, !1)
        }, n.prototype.tangentAt = function (t) {
            var e = ja(this.shape, t, !0);
            return he(e, e)
        }, n
    }(Gb);
    uS.prototype.type = "bezier-curve";
    var hS = function () {
        function t() {
            this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0
        }

        return t
    }(), cS = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new hS
        }, n.prototype.buildPath = function (t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise,
                l = Math.cos(o), u = Math.sin(o);
            t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s)
        }, n
    }(Gb);
    cS.prototype.type = "arc";
    var pS = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "compound", e
        }

        return e(n, t), n.prototype._updatePathDirty = function () {
            for (var t = this.shape.paths, e = this.shapeChanged(), n = 0; n < t.length; n++) e = e || t[n].shapeChanged();
            e && this.dirtyShape()
        }, n.prototype.beforeBrush = function () {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold)
        }, n.prototype.buildPath = function (t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
        }, n.prototype.afterBrush = function () {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].pathUpdated()
        }, n.prototype.getBoundingRect = function () {
            return this._updatePathDirty.call(this), Gb.prototype.getBoundingRect.call(this)
        }, n
    }(Gb), fS = function () {
        function t(t) {
            this.colorStops = t || []
        }

        return t.prototype.addColorStop = function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }, t
    }(), dS = function (t) {
        function n(e, n, i, r, o, a) {
            var s = t.call(this, o) || this;
            return s.x = null == e ? 0 : e, s.y = null == n ? 0 : n, s.x2 = null == i ? 1 : i, s.y2 = null == r ? 0 : r, s.type = "linear", s.global = a || !1, s
        }

        return e(n, t), n
    }(fS), gS = function (t) {
        function n(e, n, i, r, o) {
            var a = t.call(this, r) || this;
            return a.x = null == e ? .5 : e, a.y = null == n ? .5 : n, a.r = null == i ? .5 : i, a.type = "radial", a.global = o || !1, a
        }

        return e(n, t), n
    }(fS), yS = [0, 0], vS = [0, 0], mS = new Y_, _S = new Y_, xS = function () {
        function t(t, e) {
            this._corners = [], this._axes = [], this._origin = [0, 0];
            for (var n = 0; 4 > n; n++) this._corners[n] = new Y_;
            for (var n = 0; 2 > n; n++) this._axes[n] = new Y_;
            t && this.fromBoundingRect(t, e)
        }

        return t.prototype.fromBoundingRect = function (t, e) {
            var n = this._corners, i = this._axes, r = t.x, o = t.y, a = r + t.width, s = o + t.height;
            if (n[0].set(r, o), n[1].set(a, o), n[2].set(a, s), n[3].set(r, s), e) for (var l = 0; 4 > l; l++) n[l].transform(e);
            Y_.sub(i[0], n[1], n[0]), Y_.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
            for (var l = 0; 2 > l; l++) this._origin[l] = i[l].dot(n[0])
        }, t.prototype.intersect = function (t, e) {
            var n = !0, i = !e;
            return mS.set(1 / 0, 1 / 0), _S.set(0, 0), !this._intersectCheckOneSide(this, t, mS, _S, i, 1) && (n = !1, i) ? n : !this._intersectCheckOneSide(t, this, mS, _S, i, -1) && (n = !1, i) ? n : (i || Y_.copy(e, n ? mS : _S), n)
        }, t.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
            for (var a = !0, s = 0; 2 > s; s++) {
                var l = this._axes[s];
                if (this._getProjMinMaxOnAxis(s, t._corners, yS), this._getProjMinMaxOnAxis(s, e._corners, vS), yS[1] < vS[0] || yS[0] > vS[1]) {
                    if (a = !1, r) return a;
                    var u = Math.abs(vS[0] - yS[1]), h = Math.abs(yS[0] - vS[1]);
                    Math.min(u, h) > i.len() && (h > u ? Y_.scale(i, l, -u * o) : Y_.scale(i, l, h * o))
                } else if (n) {
                    var u = Math.abs(vS[0] - yS[1]), h = Math.abs(yS[0] - vS[1]);
                    Math.min(u, h) < n.len() && (h > u ? Y_.scale(n, l, u * o) : Y_.scale(n, l, -h * o))
                }
            }
            return a
        }, t.prototype._getProjMinMaxOnAxis = function (t, e, n) {
            for (var i = this._axes[t], r = this._origin, o = e[0].dot(i) + r[t], a = o, s = o, l = 1; l < e.length; l++) {
                var u = e[l].dot(i) + r[t];
                a = Math.min(u, a), s = Math.max(u, s)
            }
            n[0] = a, n[1] = s
        }, t
    }(), bS = [], wS = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e
        }

        return e(n, t), n.prototype.traverse = function (t, e) {
            t.call(e, this)
        }, n.prototype.useStyle = function () {
            this.style = {}
        }, n.prototype.getCursor = function () {
            return this._cursor
        }, n.prototype.innerAfterBrush = function () {
            this._cursor = this._displayables.length
        }, n.prototype.clearDisplaybles = function () {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1
        }, n.prototype.clearTemporalDisplayables = function () {
            this._temporaryDisplayables = []
        }, n.prototype.addDisplayable = function (t, e) {
            e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.markRedraw()
        }, n.prototype.addDisplayables = function (t, e) {
            e = e || !1;
            for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
        }, n.prototype.getDisplayables = function () {
            return this._displayables
        }, n.prototype.getTemporalDisplayables = function () {
            return this._temporaryDisplayables
        }, n.prototype.eachPendingDisplayable = function (t) {
            for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
        }, n.prototype.update = function () {
            this.updateTransform();
            for (var t = this._cursor; t < this._displayables.length; t++) {
                var e = this._displayables[t];
                e.parent = this, e.update(), e.parent = null
            }
            for (var t = 0; t < this._temporaryDisplayables.length; t++) {
                var e = this._temporaryDisplayables[t];
                e.parent = this, e.update(), e.parent = null
            }
        }, n.prototype.getBoundingRect = function () {
            if (!this._rect) {
                for (var t = new ex(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                    var n = this._displayables[e], i = n.getBoundingRect().clone();
                    n.needLocalTransform() && i.applyTransform(n.getLocalTransform(bS)), t.union(i)
                }
                this._rect = t
            }
            return this._rect
        }, n.prototype.contain = function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect();
            if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
                var o = this._displayables[r];
                if (o.contain(t, e)) return !0
            }
            return !1
        }, n
    }(Yx), SS = ar(), MS = Math.max, TS = Math.min, CS = {}, IS = Ba, DS = Fa, kS = ko;
    os("circle", Ew), os("ellipse", Bw), os("sector", $w), os("ring", Qw), os("polygon", eS), os("polyline", iS), os("rect", $b), os("line", aS), os("bezierCurve", uS), os("arc", cS);
    var AS = (Object.freeze || Object)({
            updateProps: Ka,
            initProps: $a,
            removeElement: Qa,
            removeElementWithFadeOut: es,
            isElementRemoved: Ja,
            extendShape: is,
            extendPath: rs,
            registerShape: os,
            getShapeClass: as,
            makePath: ss,
            makeImage: ls,
            mergePath: DS,
            resizePath: hs,
            subPixelOptimizeLine: cs,
            subPixelOptimizeRect: ps,
            subPixelOptimize: kS,
            getTransform: fs,
            applyTransform: ds,
            transformDirection: gs,
            groupTransition: ms,
            clipPointsByRect: _s,
            clipRectByRect: xs,
            createIcon: bs,
            linePolygonIntersect: ws,
            lineLineIntersect: Ss,
            setTooltipConfig: Cs,
            Group: cx,
            Image: jb,
            Text: ew,
            Circle: Ew,
            Ellipse: Bw,
            Sector: $w,
            Ring: Qw,
            Polygon: eS,
            Polyline: iS,
            Rect: $b,
            Line: aS,
            BezierCurve: uS,
            Arc: cS,
            IncrementalDisplayable: wS,
            CompoundPath: pS,
            LinearGradient: dS,
            RadialGradient: gS,
            BoundingRect: ex,
            OrientedBoundingRect: xS,
            Point: Y_,
            Path: Gb
        }), PS = {},
        LS = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
        OS = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"],
        RS = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"],
        zS = ar(), ES = ["textStyle", "color"], NS = new ew, BS = function () {
            function t() {
            }

            return t.prototype.getTextColor = function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(ES) : null)
            }, t.prototype.getFont = function () {
                return Es({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, t.prototype.getTextRect = function (t) {
                return NS.useStyle({
                    text: t,
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily"),
                    verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline"),
                    padding: this.getShallow("padding"),
                    lineHeight: this.getShallow("lineHeight"),
                    rich: this.getShallow("rich")
                }), NS.update(), NS.getBoundingRect()
            }, t
        }(),
        FS = [["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["lineDash", "type"], ["lineDashOffset", "dashOffset"], ["lineCap", "cap"], ["lineJoin", "join"], ["miterLimit"]],
        VS = Tr(FS), HS = function () {
            function t() {
            }

            return t.prototype.getLineStyle = function (t) {
                return VS(this, t)
            }, t
        }(),
        GS = [["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["lineDash", "borderType"], ["lineDashOffset", "borderDashOffset"], ["lineCap", "borderCap"], ["lineJoin", "borderJoin"], ["miterLimit", "borderMiterLimit"]],
        WS = Tr(GS), US = function () {
            function t() {
            }

            return t.prototype.getItemStyle = function (t, e) {
                return WS(this, t, e)
            }, t
        }(), XS = function () {
            function t(t, e, n) {
                this.parentModel = e, this.ecModel = n, this.option = t
            }

            return t.prototype.init = function () {
                for (var t = [], e = 3; e < arguments.length; e++) t[e - 3] = arguments[e]
            }, t.prototype.mergeOption = function (t) {
                l(this.option, t, !0)
            }, t.prototype.get = function (t, e) {
                return null == t ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel)
            }, t.prototype.getShallow = function (t, e) {
                var n = this.option, i = null == n ? n : n[t];
                if (null == i && !e) {
                    var r = this.parentModel;
                    r && (i = r.getShallow(t))
                }
                return i
            }, t.prototype.getModel = function (e, n) {
                var i = null != e, r = i ? this.parsePath(e) : null, o = i ? this._doGet(r) : this.option;
                return n = n || this.parentModel && this.parentModel.getModel(this.resolveParentPath(r)), new t(o, n, this.ecModel)
            }, t.prototype.isEmpty = function () {
                return null == this.option
            }, t.prototype.restoreData = function () {
            }, t.prototype.clone = function () {
                var t = this.constructor;
                return new t(s(this.option))
            }, t.prototype.parsePath = function (t) {
                return "string" == typeof t ? t.split(".") : t
            }, t.prototype.resolveParentPath = function (t) {
                return t
            }, t.prototype.isAnimationEnabled = function () {
                if (!sm.node && this.option) {
                    if (null != this.option.animation) return !!this.option.animation;
                    if (this.parentModel) return this.parentModel.isAnimationEnabled()
                }
            }, t.prototype._doGet = function (t, e) {
                var n = this.option;
                if (!t) return n;
                for (var i = 0; i < t.length && (!t[i] || (n = n && "object" == typeof n ? n[t[i]] : null, null != n)); i++) ;
                return null == n && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n
            }, t
        }();
    mr(XS), br(XS), d(XS, HS), d(XS, US), d(XS, Rx), d(XS, BS);
    var YS = Math.round(10 * Math.random()), jS = {
        time: {
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        legend: {selector: {all: "All", inverse: "Inv"}},
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {title: "Data View", lang: ["Data View", "Close", "Refresh"]},
            dataZoom: {title: {zoom: "Zoom", back: "Zoom Reset"}},
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {title: "Restore"},
            saveAsImage: {title: "Save as Image", lang: ["Right Click to Save Image"]}
        },
        series: {
            typeNames: {
                pie: "Pie chart",
                bar: "Bar chart",
                line: "Line chart",
                scatter: "Scatter plot",
                effectScatter: "Ripple scatter plot",
                radar: "Radar chart",
                tree: "Tree",
                treemap: "Treemap",
                boxplot: "Boxplot",
                candlestick: "Candlestick",
                k: "K line chart",
                heatmap: "Heat map",
                map: "Map",
                parallel: "Parallel coordinate map",
                lines: "Line graph",
                graph: "Relationship graph",
                sankey: "Sankey diagram",
                funnel: "Funnel chart",
                gauge: "Gauge",
                pictorialBar: "Pictorial bar",
                themeRiver: "Theme River Map",
                sunburst: "Sunburst"
            }
        },
        aria: {
            general: {withTitle: 'This is a chart about "{title}"', withoutTitle: "This is a chart"},
            series: {
                single: {
                    prefix: "",
                    withName: " with type {seriesType} named {seriesName}.",
                    withoutName: " with type {seriesType}."
                },
                multiple: {
                    prefix: ". It consists of {seriesCount} series count.",
                    withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                    withoutName: " The {seriesId} series is a {seriesType}.",
                    separator: {middle: "", end: ""}
                }
            },
            data: {
                allData: "The data is as follows: ",
                partialData: "The first {displayCnt} items are: ",
                withName: "the data for {name} is {value}",
                withoutName: "{value}",
                separator: {middle: ", ", end: ". "}
            }
        }
    }, qS = {
        time: {
            month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
        },
        legend: {selector: {all: "全选", inverse: "反选"}},
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {title: "数据视图", lang: ["数据视图", "关闭", "刷新"]},
            dataZoom: {title: {zoom: "区域缩放", back: "区域缩放还原"}},
            magicType: {title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"}},
            restore: {title: "还原"},
            saveAsImage: {title: "保存为图片", lang: ["右键另存为图片"]}
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，"},
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {middle: "；", end: "。"}
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {middle: "，", end: ""}
            }
        }
    }, ZS = "ZH", KS = "EN", $S = KS, JS = {}, QS = {}, tM = sm.domSupported ? function () {
        var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase();
        return t.indexOf(ZS) > -1 ? ZS : $S
    }() : $S;
    Gs(KS, jS), Gs(ZS, qS);
    var eM = 1e3, nM = 60 * eM, iM = 60 * nM, rM = 24 * iM, oM = 365 * rM, aM = {
            year: "{yyyy}",
            month: "{MMM}",
            day: "{d}",
            hour: "{HH}:{mm}",
            minute: "{HH}:{mm}",
            second: "{HH}:{mm}:{ss}",
            millisecond: "{HH}:{mm}:{ss} {SSS}",
            none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
        }, sM = "{yyyy}-{MM}-{dd}", lM = {
            year: "{yyyy}",
            month: "{yyyy}-{MM}",
            day: sM,
            hour: sM + " " + aM.hour,
            minute: sM + " " + aM.minute,
            second: sM + " " + aM.second,
            millisecond: aM.none
        }, uM = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
        hM = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"],
        cM = H, pM = /([&<>"'])/g, fM = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        dM = ["a", "b", "c", "d", "e", "f", "g"], gM = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, yM = y, vM = ["left", "right", "top", "bottom", "width", "height"],
        mM = [["width", "left", "right"], ["height", "top", "bottom"]], _M = Tl,
        xM = (S(Tl, "vertical"), S(Tl, "horizontal"), ar()), bM = function (t) {
            function n(e, n, i) {
                var r = t.call(this, e, n, i) || this;
                return r.uid = Bs("ec_cpt_model"), r
            }

            return e(n, t), n.prototype.init = function (t, e, n) {
                this.mergeDefaultAndTheme(t, n)
            }, n.prototype.mergeDefaultAndTheme = function (t, e) {
                var n = Il(this), i = n ? kl(t) : {}, r = e.getTheme();
                l(t, r.get(this.mainType)), l(t, this.getDefaultOption()), n && Dl(t, i, n)
            }, n.prototype.mergeOption = function (t) {
                l(this.option, t, !0);
                var e = Il(this);
                e && Dl(this.option, t, e)
            }, n.prototype.optionUpdated = function () {
            }, n.prototype.getDefaultOption = function () {
                var t = this.constructor;
                if (!vr(t)) return t.defaultOption;
                var e = xM(this);
                if (!e.defaultOption) {
                    for (var n = [], i = t; i;) {
                        var r = i.prototype.defaultOption;
                        r && n.push(r), i = i.superClass
                    }
                    for (var o = {}, a = n.length - 1; a >= 0; a--) o = l(o, n[a], !0);
                    e.defaultOption = o
                }
                return e.defaultOption
            }, n.prototype.getReferringComponents = function (t, e) {
                var n = t + "Index", i = t + "Id";
                return ur(this.ecModel, t, {index: this.get(n, !0), id: this.get(i, !0)}, e)
            }, n.prototype.getBoxLayoutParams = function () {
                var t = this;
                return {
                    left: t.get("left"),
                    top: t.get("top"),
                    right: t.get("right"),
                    bottom: t.get("bottom"),
                    width: t.get("width"),
                    height: t.get("height")
                }
            }, n.protoInitialize = function () {
                var t = n.prototype;
                t.type = "component", t.id = "", t.name = "", t.mainType = "", t.subType = "", t.componentIndex = 0
            }(), n
        }(XS);
    xr(bM, XS), Mr(bM), Fs(bM), Vs(bM, Pl);
    var wM = "";
    "undefined" != typeof navigator && (wM = navigator.platform || "");
    var SM, MM, TM = "rgba(0, 0, 0, 0.2)", CM = {
            darkMode: "auto",
            colorBy: "series",
            color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            aria: {
                decal: {
                    decals: [{
                        color: TM,
                        dashArrayX: [1, 0],
                        dashArrayY: [2, 5],
                        symbolSize: 1,
                        rotation: Math.PI / 6
                    }, {
                        color: TM,
                        symbol: "circle",
                        dashArrayX: [[8, 8], [0, 8, 8, 0]],
                        dashArrayY: [6, 0],
                        symbolSize: .8
                    }, {color: TM, dashArrayX: [1, 0], dashArrayY: [4, 3], rotation: -Math.PI / 4}, {
                        color: TM,
                        dashArrayX: [[6, 6], [0, 6, 6, 0]],
                        dashArrayY: [6, 0]
                    }, {
                        color: TM,
                        dashArrayX: [[1, 0], [1, 6]],
                        dashArrayY: [1, 0, 6, 0],
                        rotation: Math.PI / 4
                    }, {
                        color: TM,
                        symbol: "triangle",
                        dashArrayX: [[9, 9], [0, 9, 9, 0]],
                        dashArrayY: [7, 2],
                        symbolSize: .75
                    }]
                }
            },
            textStyle: {
                fontFamily: wM.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            stateAnimation: {duration: 300, easing: "cubicOut"},
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut",
            animationEasingUpdate: "cubicInOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, IM = Y(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), DM = "original",
        kM = "arrayRows", AM = "objectRows", PM = "keyedColumns", LM = "typedArray", OM = "unknown", RM = "column",
        zM = "row", EM = {Must: 1, Might: 2, Not: 3}, NM = ar(), BM = Y(), FM = ar(), VM = (ar(), function () {
            function t() {
            }

            return t.prototype.getColorFromPalette = function (t, e, n) {
                var i = Hi(this.get("color", !0)), r = this.get("colorLayer", !0);
                return Hl(this, FM, i, r, t, e, n)
            }, t.prototype.clearColorPalette = function () {
                Gl(this, FM)
            }, t
        }()), HM = "\x00_ec_inner", GM = 1, WM = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.init = function (t, e, n, i, r, o) {
                i = i || {}, this.option = null, this._theme = new XS(i), this._locale = new XS(r), this._optionManager = o
            }, n.prototype.setOption = function (t, e, n) {
                var i = jl(e);
                this._optionManager.setOption(t, n, i), this._resetOption(null, i)
            }, n.prototype.resetOption = function (t, e) {
                return this._resetOption(t, jl(e))
            }, n.prototype._resetOption = function (t, e) {
                var n = !1, i = this._optionManager;
                if (!t || "recreate" === t) {
                    var r = i.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this._mergeOption(r, e)) : MM(this, r), n = !0
                }
                if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var o = i.getTimelineOption(this);
                    o && (n = !0, this._mergeOption(o, e))
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = i.getMediaOption(this);
                    a.length && y(a, function (t) {
                        n = !0, this._mergeOption(t, e)
                    }, this)
                }
                return n
            }, n.prototype.mergeOption = function (t) {
                this._mergeOption(t, null)
            }, n.prototype._mergeOption = function (t, e) {
                function n(e) {
                    var n = Fl(this, e, Hi(t[e])), a = r.get(e),
                        s = a ? c && c.get(e) ? "replaceMerge" : "normalMerge" : "replaceAll", l = Xi(a, n, s);
                    ir(l, e, bM), i[e] = null, r.set(e, null), o.set(e, 0);
                    var u = [], p = [], f = 0;
                    y(l, function (t, n) {
                        var i = t.existing, r = t.newOption;
                        if (r) {
                            var o = "series" === e, a = bM.getClass(e, t.keyInfo.subType, !o);
                            if (!a) return;
                            if (i && i.constructor === a) i.name = t.keyInfo.name, i.mergeOption(r, this), i.optionUpdated(r, !1); else {
                                var s = h({componentIndex: n}, t.keyInfo);
                                i = new a(r, this, this, s), h(i, s), t.brandNew && (i.__requireNewView = !0), i.init(r, this, this), i.optionUpdated(null, !0)
                            }
                        } else i && (i.mergeOption({}, this), i.optionUpdated({}, !1));
                        i ? (u.push(i.option), p.push(i), f++) : (u.push(void 0), p.push(void 0))
                    }, this), i[e] = u, r.set(e, p), o.set(e, f), "series" === e && SM(this)
                }

                var i = this.option, r = this._componentsMap, o = this._componentsCount, a = [], u = Y(),
                    c = e && e.replaceMergeMainTypeMap;
                Ll(this), y(t, function (t, e) {
                    null != t && (bM.hasClass(e) ? e && (a.push(e), u.set(e, !0)) : i[e] = null == i[e] ? s(t) : l(i[e], t, !0))
                }), c && c.each(function (t, e) {
                    bM.hasClass(e) && !u.get(e) && (a.push(e), u.set(e, !0))
                }), bM.topologicalTravel(a, bM.getAllClassMainTypes(), n, this), this._seriesIndices || SM(this)
            }, n.prototype.getOption = function () {
                var t = s(this.option);
                return y(t, function (e, n) {
                    if (bM.hasClass(n)) {
                        for (var i = Hi(e), r = i.length, o = !1, a = r - 1; a >= 0; a--) i[a] && !nr(i[a]) ? o = !0 : (i[a] = null, !o && r--);
                        i.length = r, t[n] = i
                    }
                }), delete t[HM], t
            }, n.prototype.getTheme = function () {
                return this._theme
            }, n.prototype.getLocaleModel = function () {
                return this._locale
            }, n.prototype.setUpdatePayload = function (t) {
                this._payload = t
            }, n.prototype.getUpdatePayload = function () {
                return this._payload
            }, n.prototype.getComponent = function (t, e) {
                var n = this._componentsMap.get(t);
                if (n) {
                    var i = n[e || 0];
                    if (i) return i;
                    if (null == e) for (var r = 0; r < n.length; r++) if (n[r]) return n[r]
                }
            }, n.prototype.queryComponents = function (t) {
                var e = t.mainType;
                if (!e) return [];
                var n = t.index, i = t.id, r = t.name, o = this._componentsMap.get(e);
                if (!o || !o.length) return [];
                var a;
                return null != n ? (a = [], y(Hi(n), function (t) {
                    o[t] && a.push(o[t])
                })) : a = null != i ? Xl("id", i, o) : null != r ? Xl("name", r, o) : _(o, function (t) {
                    return !!t
                }), Yl(a, t)
            }, n.prototype.findComponents = function (t) {
                function e(t) {
                    var e = r + "Index", n = r + "Id", i = r + "Name";
                    return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
                        mainType: r,
                        index: t[e],
                        id: t[n],
                        name: t[i]
                    }
                }

                function n(e) {
                    return t.filter ? _(e, t.filter) : e
                }

                var i = t.query, r = t.mainType, o = e(i),
                    a = o ? this.queryComponents(o) : _(this._componentsMap.get(r), function (t) {
                        return !!t
                    });
                return n(Yl(a, t))
            }, n.prototype.eachComponent = function (t, e, n) {
                var i = this._componentsMap;
                if (T(t)) {
                    var r = e, o = t;
                    i.each(function (t, e) {
                        for (var n = 0; t && n < t.length; n++) {
                            var i = t[n];
                            i && o.call(r, e, i, i.componentIndex)
                        }
                    })
                } else for (var a = C(t) ? i.get(t) : k(t) ? this.findComponents(t) : null, s = 0; a && s < a.length; s++) {
                    var l = a[s];
                    l && e.call(n, l, l.componentIndex)
                }
            }, n.prototype.getSeriesByName = function (t) {
                var e = tr(t, null);
                return _(this._componentsMap.get("series"), function (t) {
                    return !!t && null != e && t.name === e
                })
            }, n.prototype.getSeriesByIndex = function (t) {
                return this._componentsMap.get("series")[t]
            }, n.prototype.getSeriesByType = function (t) {
                return _(this._componentsMap.get("series"), function (e) {
                    return !!e && e.subType === t
                })
            }, n.prototype.getSeries = function () {
                return _(this._componentsMap.get("series"), function (t) {
                    return !!t
                })
            }, n.prototype.getSeriesCount = function () {
                return this._componentsCount.get("series")
            }, n.prototype.eachSeries = function (t, e) {
                y(this._seriesIndices, function (n) {
                    var i = this._componentsMap.get("series")[n];
                    t.call(e, i, n)
                }, this)
            }, n.prototype.eachRawSeries = function (t, e) {
                y(this._componentsMap.get("series"), function (n) {
                    n && t.call(e, n, n.componentIndex)
                })
            }, n.prototype.eachSeriesByType = function (t, e, n) {
                y(this._seriesIndices, function (i) {
                    var r = this._componentsMap.get("series")[i];
                    r.subType === t && e.call(n, r, i)
                }, this)
            }, n.prototype.eachRawSeriesByType = function (t, e, n) {
                return y(this.getSeriesByType(t), e, n)
            }, n.prototype.isSeriesFiltered = function (t) {
                return null == this._seriesIndicesMap.get(t.componentIndex)
            }, n.prototype.getCurrentSeriesIndices = function () {
                return (this._seriesIndices || []).slice()
            }, n.prototype.filterSeries = function (t, e) {
                var n = [];
                y(this._seriesIndices, function (i) {
                    var r = this._componentsMap.get("series")[i];
                    t.call(e, r, i) && n.push(i)
                }, this), this._seriesIndices = n, this._seriesIndicesMap = Y(n)
            }, n.prototype.restoreData = function (t) {
                SM(this);
                var e = this._componentsMap, n = [];
                e.each(function (t, e) {
                    bM.hasClass(e) && n.push(e)
                }), bM.topologicalTravel(n, bM.getAllClassMainTypes(), function (n) {
                    y(e.get(n), function (e) {
                        !e || "series" === n && Wl(e, t) || e.restoreData()
                    })
                })
            }, n.internalField = function () {
                SM = function (t) {
                    var e = t._seriesIndices = [];
                    y(t._componentsMap.get("series"), function (t) {
                        t && e.push(t.componentIndex)
                    }), t._seriesIndicesMap = Y(e)
                }, MM = function (t, e) {
                    t.option = {}, t.option[HM] = GM, t._componentsMap = Y({series: []}), t._componentsCount = Y();
                    var n = e.aria;
                    k(n) && null == n.enabled && (n.enabled = !0), Ul(e, t._theme.option), l(e, CM, !1), t._mergeOption(e, null)
                }
            }(), n
        }(XS);
    d(WM, VM);
    var UM, XM, YM, jM, qM, ZM,
        KM = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"],
        $M = function () {
            function t(t) {
                y(KM, function (e) {
                    this[e] = wm(t[e], t)
                }, this)
            }

            return t
        }(), JM = {}, QM = function () {
            function t() {
                this._coordinateSystems = []
            }

            return t.prototype.create = function (t, e) {
                var n = [];
                y(JM, function (i) {
                    var r = i.create(t, e);
                    n = n.concat(r || [])
                }), this._coordinateSystems = n
            }, t.prototype.update = function (t, e) {
                y(this._coordinateSystems, function (n) {
                    n.update && n.update(t, e)
                })
            }, t.prototype.getCoordinateSystems = function () {
                return this._coordinateSystems.slice()
            }, t.register = function (t, e) {
                JM[t] = e
            }, t.get = function (t) {
                return JM[t]
            }, t
        }(), tT = /^(min|max)?(.+)$/, eT = function () {
            function t(t) {
                this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t
            }

            return t.prototype.setOption = function (t, e) {
                t && (y(Hi(t.series), function (t) {
                    t && t.data && P(t.data) && U(t.data)
                }), y(Hi(t.dataset), function (t) {
                    t && t.source && P(t.source) && U(t.source)
                })), t = s(t);
                var n = this._optionBackup, i = ql(t, e, !n);
                this._newBaseOption = i.baseOption, n ? (i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
            }, t.prototype.mountOption = function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], s(t ? e.baseOption : this._newBaseOption)
            }, t.prototype.getTimelineOption = function (t) {
                var e, n = this._timelineOptions;
                if (n.length) {
                    var i = t.getComponent("timeline");
                    i && (e = s(n[i.getCurrentIndex()]))
                }
                return e
            }, t.prototype.getMediaOption = function () {
                var t = this._api.getWidth(), e = this._api.getHeight(), n = this._mediaList, i = this._mediaDefault,
                    r = [], o = [];
                if (!n.length && !i) return o;
                for (var a = 0, l = n.length; l > a; a++) Zl(n[a].query, t, e) && r.push(a);
                return !r.length && i && (r = [-1]), r.length && !$l(r, this._currentMediaIndices) && (o = v(r, function (t) {
                    return s(-1 === t ? i.option : n[t].option)
                })), this._currentMediaIndices = r, o
            }, t
        }(), nT = y, iT = k, rT = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        oT = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        aT = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        sT = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]],
        lT = function () {
            function t(t) {
                this.data = t.data || (t.sourceFormat === PM ? {} : []), this.sourceFormat = t.sourceFormat || OM, this.seriesLayoutBy = t.seriesLayoutBy || RM, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
                var e = this.dimensionsDefine = t.dimensionsDefine;
                if (e) for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    null == i.type && Nl(this, n) === EM.Must && (i.type = "ordinal")
                }
            }

            return t
        }(), uT = function () {
            function t(t, e) {
                var n = mu(t) ? t : xu(t);
                this._source = n;
                var i = this._data = n.data;
                n.sourceFormat === LM && (this._offset = 0, this._dimSize = e, this._data = i), qM(this, i, n)
            }

            return t.prototype.getSource = function () {
                return this._source
            }, t.prototype.count = function () {
                return 0
            }, t.prototype.getItem = function () {
            }, t.prototype.appendData = function () {
            }, t.prototype.clean = function () {
            }, t.protoInitialize = function () {
                var e = t.prototype;
                e.pure = !1, e.persistent = !0
            }(), t.internalField = function () {
                function t(t) {
                    for (var e = 0; e < t.length; e++) this._data.push(t[e])
                }

                var e;
                qM = function (t, e, o) {
                    var a = o.sourceFormat, s = o.seriesLayoutBy, l = o.startIndex, u = o.dimensionsDefine,
                        c = jM[Pu(a, s)];
                    if (h(t, c), a === LM) t.getItem = n, t.count = r, t.fillStorage = i; else {
                        var p = Du(a, s);
                        t.getItem = wm(p, null, e, l, u);
                        var f = ku(a, s);
                        t.count = wm(f, null, e, l, u)
                    }
                };
                var n = function (t, e) {
                    t -= this._offset, e = e || [];
                    for (var n = this._data, i = this._dimSize, r = i * t, o = 0; i > o; o++) e[o] = n[r + o];
                    return e
                }, i = function (t, e, n, i) {
                    for (var r = this._data, o = this._dimSize, a = 0; o > a; a++) {
                        for (var s = i[a], l = null == s[0] ? 1 / 0 : s[0], u = null == s[1] ? -1 / 0 : s[1], h = e - t, c = n[a], p = 0; h > p; p++) {
                            var f = r[p * o + a];
                            c[t + p] = f, l > f && (l = f), f > u && (u = f)
                        }
                        s[0] = l, s[1] = u
                    }
                }, r = function () {
                    return this._data ? this._data.length / this._dimSize : 0
                };
                e = {}, e[kM + "_" + RM] = {pure: !0, appendData: t}, e[kM + "_" + zM] = {
                    pure: !0,
                    appendData: function () {
                        throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                    }
                }, e[AM] = {pure: !0, appendData: t}, e[PM] = {
                    pure: !0, appendData: function (t) {
                        var e = this._data;
                        y(t, function (t, n) {
                            for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                        })
                    }
                }, e[DM] = {appendData: t}, e[LM] = {
                    persistent: !1, pure: !0, appendData: function (t) {
                        this._data = t
                    }, clean: function () {
                        this._offset += this.count(), this._data = null
                    }
                }, jM = e
            }(), t
        }(), hT = function (t, e, n, i) {
            return t[i]
        }, cT = (UM = {}, UM[kM + "_" + RM] = function (t, e, n, i) {
            return t[i + e]
        }, UM[kM + "_" + zM] = function (t, e, n, i, r) {
            i += e;
            for (var o = r || [], a = t, s = 0; s < a.length; s++) {
                var l = a[s];
                o[s] = l ? l[i] : null
            }
            return o
        }, UM[AM] = hT, UM[PM] = function (t, e, n, i, r) {
            for (var o = r || [], a = 0; a < n.length; a++) {
                var s = n[a].name, l = t[s];
                o[a] = l ? l[i] : null
            }
            return o
        }, UM[DM] = hT, UM), pT = function (t) {
            return t.length
        }, fT = (XM = {}, XM[kM + "_" + RM] = function (t, e) {
            return Math.max(0, t.length - e)
        }, XM[kM + "_" + zM] = function (t, e) {
            var n = t[0];
            return n ? Math.max(0, n.length - e) : 0
        }, XM[AM] = pT, XM[PM] = function (t, e, n) {
            var i = n[0].name, r = t[i];
            return r ? r.length : 0
        }, XM[DM] = pT, XM), dT = function (t, e) {
            return t[e]
        }, gT = (YM = {}, YM[kM] = dT, YM[AM] = function (t, e, n) {
            return t[n]
        }, YM[PM] = dT, YM[DM] = function (t, e) {
            var n = Wi(t);
            return n instanceof Array ? n[e] : n
        }, YM[LM] = dT, YM), yT = /\{@(.+?)\}/g, vT = function () {
            function t() {
            }

            return t.prototype.getDataParams = function (t, e) {
                var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), o = n.getName(t),
                    a = n.getRawDataItem(t), s = n.getItemVisual(t, "style"),
                    l = s && s[n.getItemVisual(t, "drawType") || "fill"], u = s && s.stroke, h = this.mainType,
                    c = "series" === h, p = n.userOutput && n.userOutput.get();
                return {
                    componentType: h,
                    componentSubType: this.subType,
                    componentIndex: this.componentIndex,
                    seriesType: c ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: c ? this.id : null,
                    seriesName: c ? this.name : null,
                    name: o,
                    dataIndex: r,
                    data: a,
                    dataType: e,
                    value: i,
                    color: l,
                    borderColor: u,
                    dimensionNames: p ? p.fullDimensions : null,
                    encode: p ? p.encode : null,
                    $vars: ["seriesName", "name", "value"]
                }
            }, t.prototype.getFormattedLabel = function (t, e, n, i, r, o) {
                e = e || "normal";
                var a = this.getData(n), s = this.getDataParams(t, n);
                if (o && (s.value = o.interpolatedValue), null != i && M(s.value) && (s.value = s.value[i]), !r) {
                    var l = a.getItemModel(t);
                    r = l.get("normal" === e ? ["label", "formatter"] : [e, "label", "formatter"])
                }
                if ("function" == typeof r) return s.status = e, s.dimensionIndex = i, r(s);
                if ("string" == typeof r) {
                    var u = _l(r, s);
                    return u.replace(yT, function (e, n) {
                        var i = n.length, r = n;
                        "[" === r.charAt(0) && "]" === r.charAt(i - 1) && (r = +r.slice(1, i - 1));
                        var s = Lu(a, t, r);
                        if (o && M(o.interpolatedValue)) {
                            var l = a.getDimensionIndex(r);
                            l >= 0 && (s = o.interpolatedValue[l])
                        }
                        return null != s ? s + "" : ""
                    })
                }
            }, t.prototype.getRawValue = function (t, e) {
                return Lu(this.getData(e), t)
            }, t.prototype.formatTooltip = function () {
            }, t
        }(), mT = function () {
            function t(t) {
                t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0
            }

            return t.prototype.perform = function (t) {
                function e(t) {
                    return !(t >= 1) && (t = 1), t
                }

                var n = this._upstream, i = t && t.skip;
                if (this._dirty && n) {
                    var r = this.context;
                    r.data = r.outputData = n.context.outputData
                }
                this.__pipeline && (this.__pipeline.currentTask = this);
                var o;
                this._plan && !i && (o = this._plan(this.context));
                var a = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), u = t && t.modDataCount || 0;
                (a !== l || s !== u) && (o = "reset");
                var h;
                (this._dirty || "reset" === o) && (this._dirty = !1, h = this._doReset(i)), this._modBy = l, this._modDataCount = u;
                var c = t && t.step;
                if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
                    var p = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
                    if (!i && (h || f > p)) {
                        var d = this._progress;
                        if (M(d)) for (var g = 0; g < d.length; g++) this._doProgress(d[g], p, f, l, u); else this._doProgress(d, p, f, l, u)
                    }
                    this._dueIndex = f;
                    var y = null != this._settedOutputEnd ? this._settedOutputEnd : f;
                    this._outputDueEnd = y
                } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
                return this.unfinished()
            }, t.prototype.dirty = function () {
                this._dirty = !0, this._onDirty && this._onDirty(this.context)
            }, t.prototype._doProgress = function (t, e, n, i, r) {
                _T.reset(e, n, i, r), this._callingProgress = t, this._callingProgress({
                    start: e,
                    end: n,
                    count: n - e,
                    next: _T.next
                }, this.context)
            }, t.prototype._doReset = function (t) {
                this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
                var e, n;
                !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), M(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
                var i = this._downstream;
                return i && i.dirty(), n
            }, t.prototype.unfinished = function () {
                return this._progress && this._dueIndex < this._dueEnd
            }, t.prototype.pipe = function (t) {
                (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
            }, t.prototype.dispose = function () {
                this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
            }, t.prototype.getUpstream = function () {
                return this._upstream
            }, t.prototype.getDownstream = function () {
                return this._downstream
            }, t.prototype.setOutputEnd = function (t) {
                this._outputDueEnd = this._settedOutputEnd = t
            }, t
        }(), _T = function () {
            function t() {
                return n > i ? i++ : null
            }

            function e() {
                var t = i % a * r + Math.ceil(i / a), e = i >= n ? null : o > t ? t : i;
                return i++, e
            }

            var n, i, r, o, a, s = {
                reset: function (l, u, h, c) {
                    i = l, n = u, r = h, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t
                }
            };
            return s
        }(), xT = (Y({
            number: function (t) {
                return parseFloat(t)
            }, time: function (t) {
                return +ki(t)
            }, trim: function (t) {
                return "string" == typeof t ? W(t) : t
            }
        }), {
            lt: function (t, e) {
                return e > t
            }, lte: function (t, e) {
                return e >= t
            }, gt: function (t, e) {
                return t > e
            }, gte: function (t, e) {
                return t >= e
            }
        }), bT = (function () {
            function t(t, e) {
                if ("number" != typeof e) {
                    var n = "";
                    Vi(n)
                }
                this._opFn = xT[t], this._rvalFloat = zi(e)
            }

            return t.prototype.evaluate = function (t) {
                return "number" == typeof t ? this._opFn(t, this._rvalFloat) : this._opFn(zi(t), this._rvalFloat)
            }, t
        }(), function () {
            function t(t, e) {
                var n = "desc" === t;
                this._resultLT = n ? 1 : -1, null == e && (e = n ? "min" : "max"), this._incomparable = "min" === e ? -1 / 0 : 1 / 0
            }

            return t.prototype.evaluate = function (t, e) {
                var n = typeof t, i = typeof e, r = "number" === n ? t : zi(t), o = "number" === i ? e : zi(e),
                    a = isNaN(r), s = isNaN(o);
                if (a && (r = this._incomparable), s && (o = this._incomparable), a && s) {
                    var l = "string" === n, u = "string" === i;
                    l && (r = u ? t : 0), u && (o = l ? e : 0)
                }
                return o > r ? this._resultLT : r > o ? -this._resultLT : 0
            }, t
        }()), wT = (function () {
            function t(t, e) {
                this._rval = e, this._isEQ = t, this._rvalTypeof = typeof e, this._rvalFloat = zi(e)
            }

            return t.prototype.evaluate = function (t) {
                var e = t === this._rval;
                if (!e) {
                    var n = typeof t;
                    n === this._rvalTypeof || "number" !== n && "number" !== this._rvalTypeof || (e = zi(t) === this._rvalFloat)
                }
                return this._isEQ ? e : !e
            }, t
        }(), function () {
            function t() {
            }

            return t.prototype.getRawData = function () {
                throw new Error("not supported")
            }, t.prototype.getRawDataItem = function () {
                throw new Error("not supported")
            }, t.prototype.cloneRawData = function () {
            }, t.prototype.getDimensionInfo = function () {
            }, t.prototype.cloneAllDimensionInfo = function () {
            }, t.prototype.count = function () {
            }, t.prototype.retrieveValue = function () {
            }, t.prototype.retrieveValueFromItem = function () {
            }, t.prototype.convertValue = function (t, e) {
                return zu(t, e)
            }, t
        }()), ST = Y(), MT = "undefined", TT = typeof Uint32Array === MT ? Array : Uint32Array,
        CT = typeof Uint16Array === MT ? Array : Uint16Array, IT = typeof Int32Array === MT ? Array : Int32Array,
        DT = typeof Float64Array === MT ? Array : Float64Array,
        kT = {"float": DT, "int": IT, ordinal: Array, number: Array, time: DT}, AT = function () {
            function t() {
                this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Y()
            }

            return t.prototype.initData = function (t, e, n) {
                this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
                var i = t.getSource(), r = this.defaultDimValueGetter = ZM[i.sourceFormat];
                this._dimValueGetter = n || r, this._rawExtent = [];
                Iu(i);
                this._dimensions = v(e, function (t) {
                    return {type: t.type, property: t.property}
                }), this._initDataFromProvider(0, t.count())
            }, t.prototype.getProvider = function () {
                return this._provider
            }, t.prototype.getSource = function () {
                return this._provider.getSource()
            }, t.prototype.ensureCalculationDimension = function (t, e) {
                var n = this._calcDimNameToIdx, i = this._dimensions, r = n.get(t);
                if (null != r) {
                    if (i[r].type === e) return r
                } else r = i.length;
                return i[r] = {type: e}, n.set(t, r), this._chunks[r] = new kT[e || "float"](this._rawCount), this._rawExtent[r] = Yu(), r
            }, t.prototype.collectOrdinalMeta = function (t, e) {
                var n = this._chunks[t], i = this._dimensions[t], r = this._rawExtent, o = i.ordinalOffset || 0,
                    a = n.length;
                0 === o && (r[t] = Yu());
                for (var s = r[t], l = o; a > l; l++) {
                    var u = n[l] = e.parseAndCollect(n[l]);
                    s[0] = Math.min(u, s[0]), s[1] = Math.max(u, s[1])
                }
                i.ordinalMeta = e, i.ordinalOffset = a, i.type = "ordinal"
            }, t.prototype.getOrdinalMeta = function (t) {
                var e = this._dimensions[t], n = e.ordinalMeta;
                return n
            }, t.prototype.getDimensionProperty = function (t) {
                var e = this._dimensions[t];
                return e && e.property
            }, t.prototype.appendData = function (t) {
                var e = this._provider, n = this.count();
                e.appendData(t);
                var i = e.count();
                return e.persistent || (i += n), i > n && this._initDataFromProvider(n, i, !0), [n, i]
            }, t.prototype.appendValues = function (t, e) {
                for (var n = this._chunks, i = this._dimensions, r = i.length, o = this._rawExtent, a = this.count(), s = a + Math.max(t.length, e || 0), l = 0; r > l; l++) {
                    var u = i[l];
                    qu(n, l, u.type, s, !0)
                }
                for (var h = [], c = a; s > c; c++) for (var p = c - a, f = 0; r > f; f++) {
                    var u = i[f], d = ZM.arrayRows.call(this, t[p] || h, u.property, p, f);
                    n[f][c] = d;
                    var g = o[f];
                    d < g[0] && (g[0] = d), d > g[1] && (g[1] = d)
                }
                return this._rawCount = this._count = s, {start: a, end: s}
            }, t.prototype._initDataFromProvider = function (t, e, n) {
                for (var i = this._provider, r = this._chunks, o = this._dimensions, a = o.length, s = this._rawExtent, l = v(o, function (t) {
                    return t.property
                }), u = 0; a > u; u++) {
                    var h = o[u];
                    s[u] || (s[u] = Yu()), qu(r, u, h.type, e, n)
                }
                if (i.fillStorage) i.fillStorage(t, e, r, s); else for (var c = [], p = t; e > p; p++) {
                    c = i.getItem(p, c);
                    for (var f = 0; a > f; f++) {
                        var d = r[f], g = this._dimValueGetter(c, l[f], p, f);
                        d[p] = g;
                        var y = s[f];
                        g < y[0] && (y[0] = g), g > y[1] && (y[1] = g)
                    }
                }
                !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = []
            }, t.prototype.count = function () {
                return this._count
            }, t.prototype.get = function (t, e) {
                if (!(e >= 0 && e < this._count)) return 0 / 0;
                var n = this._chunks[t];
                return n ? n[this.getRawIndex(e)] : 0 / 0
            }, t.prototype.getValues = function (t, e) {
                var n = [], i = [];
                if (null == e) {
                    e = t, t = [];
                    for (var r = 0; r < this._dimensions.length; r++) i.push(r)
                } else i = t;
                for (var r = 0, o = i.length; o > r; r++) n.push(this.get(i[r], e));
                return n
            }, t.prototype.getByRawIndex = function (t, e) {
                if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
                var n = this._chunks[t];
                return n ? n[e] : 0 / 0
            }, t.prototype.getSum = function (t) {
                var e = this._chunks[t], n = 0;
                if (e) for (var i = 0, r = this.count(); r > i; i++) {
                    var o = this.get(t, i);
                    isNaN(o) || (n += o)
                }
                return n
            }, t.prototype.getMedian = function (t) {
                var e = [];
                this.each([t], function (t) {
                    isNaN(t) || e.push(t)
                });
                var n = e.sort(function (t, e) {
                    return t - e
                }), i = this.count();
                return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
            }, t.prototype.indexOfRawIndex = function (t) {
                if (t >= this._rawCount || 0 > t) return -1;
                if (!this._indices) return t;
                var e = this._indices, n = e[t];
                if (null != n && n < this._count && n === t) return t;
                for (var i = 0, r = this._count - 1; r >= i;) {
                    var o = (i + r) / 2 | 0;
                    if (e[o] < t) i = o + 1; else {
                        if (!(e[o] > t)) return o;
                        r = o - 1
                    }
                }
                return -1
            }, t.prototype.indicesOfNearest = function (t, e, n) {
                var i = this._chunks, r = i[t], o = [];
                if (!r) return o;
                null == n && (n = 1 / 0);
                for (var a = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {
                    var c = this.getRawIndex(u), p = e - r[c], f = Math.abs(p);
                    n >= f && ((a > f || f === a && p >= 0 && 0 > s) && (a = f, s = p, l = 0), p === s && (o[l++] = u))
                }
                return o.length = l, o
            }, t.prototype.getIndices = function () {
                var t, e = this._indices;
                if (e) {
                    var n = e.constructor, i = this._count;
                    if (n === Array) {
                        t = new n(i);
                        for (var r = 0; i > r; r++) t[r] = e[r]
                    } else t = new n(e.buffer, 0, i)
                } else {
                    var n = Xu(this._rawCount);
                    t = new n(this.count());
                    for (var r = 0; r < t.length; r++) t[r] = r
                }
                return t
            }, t.prototype.filter = function (t, e) {
                if (!this._count) return this;
                for (var n = this.clone(), i = n.count(), r = Xu(n._rawCount), o = new r(i), a = [], s = t.length, l = 0, u = t[0], h = n._chunks, c = 0; i > c; c++) {
                    var p = void 0, f = n.getRawIndex(c);
                    if (0 === s) p = e(c); else if (1 === s) {
                        var d = h[u][f];
                        p = e(d, c)
                    } else {
                        for (var g = 0; s > g; g++) a[g] = h[t[g]][f];
                        a[g] = c, p = e.apply(null, a)
                    }
                    p && (o[l++] = f)
                }
                return i > l && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n
            }, t.prototype.selectRange = function (t) {
                var e = this.clone(), n = e._count;
                if (!n) return this;
                var i = b(t), r = i.length;
                if (!r) return this;
                var o = e.count(), a = Xu(e._rawCount), s = new a(o), l = 0, u = i[0], h = t[u][0], c = t[u][1],
                    p = e._chunks, f = !1;
                if (!e._indices) {
                    var d = 0;
                    if (1 === r) {
                        for (var g = p[i[0]], y = 0; n > y; y++) {
                            var v = g[y];
                            (v >= h && c >= v || isNaN(v)) && (s[l++] = d), d++
                        }
                        f = !0
                    } else if (2 === r) {
                        for (var g = p[i[0]], m = p[i[1]], _ = t[i[1]][0], x = t[i[1]][1], y = 0; n > y; y++) {
                            var v = g[y], w = m[y];
                            (v >= h && c >= v || isNaN(v)) && (w >= _ && x >= w || isNaN(w)) && (s[l++] = d), d++
                        }
                        f = !0
                    }
                }
                if (!f) if (1 === r) for (var y = 0; o > y; y++) {
                    var S = e.getRawIndex(y), v = p[i[0]][S];
                    (v >= h && c >= v || isNaN(v)) && (s[l++] = S)
                } else for (var y = 0; o > y; y++) {
                    for (var M = !0, S = e.getRawIndex(y), T = 0; r > T; T++) {
                        var C = i[T], v = p[C][S];
                        (v < t[C][0] || v > t[C][1]) && (M = !1)
                    }
                    M && (s[l++] = e.getRawIndex(y))
                }
                return o > l && (e._indices = s), e._count = l, e._extent = [], e._updateGetRawIdx(), e
            }, t.prototype.map = function (t, e) {
                var n = this.clone(t);
                return this._updateDims(n, t, e), n
            }, t.prototype.modify = function (t, e) {
                this._updateDims(this, t, e)
            }, t.prototype._updateDims = function (t, e, n) {
                for (var i = t._chunks, r = [], o = e.length, a = t.count(), s = [], l = t._rawExtent, u = 0; u < e.length; u++) l[e[u]] = Yu();
                for (var h = 0; a > h; h++) {
                    for (var c = t.getRawIndex(h), p = 0; o > p; p++) s[p] = i[e[p]][c];
                    s[o] = h;
                    var f = n && n.apply(null, s);
                    if (null != f) {
                        "object" != typeof f && (r[0] = f, f = r);
                        for (var u = 0; u < f.length; u++) {
                            var d = e[u], g = f[u], y = l[d], v = i[d];
                            v && (v[c] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g)
                        }
                    }
                }
            }, t.prototype.lttbDownSample = function (t, e) {
                var n, i, r, o = this.clone([t], !0), a = o._chunks, s = a[t], l = this.count(), u = 0,
                    h = Math.floor(1 / e), c = this.getRawIndex(0), p = new (Xu(this._rawCount))(Math.ceil(l / h) + 2);
                p[u++] = c;
                for (var f = 1; l - 1 > f; f += h) {
                    for (var d = Math.min(f + h, l - 1), g = Math.min(f + 2 * h, l), y = (g + d) / 2, v = 0, m = d; g > m; m++) {
                        var _ = this.getRawIndex(m), x = s[_];
                        isNaN(x) || (v += x)
                    }
                    v /= g - d;
                    var b = f, w = Math.min(f + h, l), S = f - 1, M = s[c];
                    n = -1, r = b;
                    for (var m = b; w > m; m++) {
                        var _ = this.getRawIndex(m), x = s[_];
                        isNaN(x) || (i = Math.abs((S - y) * (x - M) - (S - m) * (v - M)), i > n && (n = i, r = _))
                    }
                    p[u++] = r, c = r
                }
                return p[u++] = this.getRawIndex(l - 1), o._count = u, o._indices = p, o.getRawIndex = this._getRawIdx, o
            }, t.prototype.downSample = function (t, e, n, i) {
                for (var r = this.clone([t], !0), o = r._chunks, a = [], s = Math.floor(1 / e), l = o[t], u = this.count(), h = r._rawExtent[t] = Yu(), c = new (Xu(this._rawCount))(Math.ceil(u / s)), p = 0, f = 0; u > f; f += s) {
                    s > u - f && (s = u - f, a.length = s);
                    for (var d = 0; s > d; d++) {
                        var g = this.getRawIndex(f + d);
                        a[d] = l[g]
                    }
                    var y = n(a), v = this.getRawIndex(Math.min(f + i(a, y) || 0, u - 1));
                    l[v] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), c[p++] = v
                }
                return r._count = p, r._indices = c, r._updateGetRawIdx(), r
            }, t.prototype.each = function (t, e) {
                if (this._count) for (var n = t.length, i = this._chunks, r = 0, o = this.count(); o > r; r++) {
                    var a = this.getRawIndex(r);
                    switch (n) {
                        case 0:
                            e(r);
                            break;
                        case 1:
                            e(i[t[0]][a], r);
                            break;
                        case 2:
                            e(i[t[0]][a], i[t[1]][a], r);
                            break;
                        default:
                            for (var s = 0, l = []; n > s; s++) l[s] = i[t[s]][a];
                            l[s] = r, e.apply(null, l)
                    }
                }
            }, t.prototype.getDataExtent = function (t) {
                var e = this._chunks[t], n = Yu();
                if (!e) return n;
                var i, r = this.count(), o = !this._indices;
                if (o) return this._rawExtent[t].slice();
                if (i = this._extent[t]) return i.slice();
                i = n;
                for (var a = i[0], s = i[1], l = 0; r > l; l++) {
                    var u = this.getRawIndex(l), h = e[u];
                    a > h && (a = h), h > s && (s = h)
                }
                return i = [a, s], this._extent[t] = i, i
            }, t.prototype.getRawDataItem = function (t) {
                var e = this.getRawIndex(t);
                if (this._provider.persistent) return this._provider.getItem(e);
                for (var n = [], i = this._chunks, r = 0; r < i.length; r++) n.push(i[r][e]);
                return n
            }, t.prototype.clone = function (e, n) {
                var i = new t, r = this._chunks, o = e && m(e, function (t, e) {
                    return t[e] = !0, t
                }, {});
                if (o) for (var a = 0; a < r.length; a++) i._chunks[a] = o[a] ? ju(r[a]) : r[a]; else i._chunks = r;
                return this._copyCommonProps(i), n || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i
            }, t.prototype._copyCommonProps = function (t) {
                t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = s(this._extent), t._rawExtent = s(this._rawExtent)
            }, t.prototype._cloneIndices = function () {
                if (this._indices) {
                    var t = this._indices.constructor, e = void 0;
                    if (t === Array) {
                        var n = this._indices.length;
                        e = new t(n);
                        for (var i = 0; n > i; i++) e[i] = this._indices[i]
                    } else e = new t(this._indices);
                    return e
                }
                return null
            }, t.prototype._getRawIdxIdentity = function (t) {
                return t
            }, t.prototype._getRawIdx = function (t) {
                return t < this._count && t >= 0 ? this._indices[t] : -1
            }, t.prototype._updateGetRawIdx = function () {
                this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity
            }, t.internalField = function () {
                function t(t, e, n, i) {
                    return zu(t[i], this._dimensions[i])
                }

                ZM = {
                    arrayRows: t, objectRows: function (t, e, n, i) {
                        return zu(t[e], this._dimensions[i])
                    }, keyedColumns: t, original: function (t, e, n, i) {
                        var r = t && (null == t.value ? t : t.value);
                        return zu(r instanceof Array ? r[i] : r, this._dimensions[i])
                    }, typedArray: function (t, e, n, i) {
                        return t[i]
                    }
                }
            }(), t
        }(), PT = function () {
            function t(t) {
                this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t
            }

            return t.prototype.dirty = function () {
                this._setLocalSource([], []), this._storeList = [], this._dirty = !0
            }, t.prototype._setLocalSource = function (t, e) {
                this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0)
            }, t.prototype._getVersionSign = function () {
                return this._sourceHost.uid + "_" + this._versionSignBase
            }, t.prototype.prepareSource = function () {
                this._isDirty() && (this._createSource(), this._dirty = !1)
            }, t.prototype._createSource = function () {
                this._setLocalSource([], []);
                var t, e, n = this._sourceHost, i = this._getUpstreamSourceManagers(), r = !!i.length;
                if (Ku(n)) {
                    var o = n, a = void 0, s = void 0, l = void 0;
                    if (r) {
                        var u = i[0];
                        u.prepareSource(), l = u.getSource(), a = l.data, s = l.sourceFormat, e = [u._getVersionSign()]
                    } else a = o.get("data", !0), s = P(a) ? LM : DM, e = [];
                    var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {},
                        p = B(h.seriesLayoutBy, c.seriesLayoutBy) || null, f = B(h.sourceHeader, c.sourceHeader) || null,
                        d = B(h.dimensions, c.dimensions), g = p !== c.seriesLayoutBy || !!f != !!c.sourceHeader || d;
                    t = g ? [_u(a, {seriesLayoutBy: p, sourceHeader: f, dimensions: d}, s)] : []
                } else {
                    var y = n;
                    if (r) {
                        var v = this._applyTransform(i);
                        t = v.sourceList, e = v.upstreamSignList
                    } else {
                        var m = y.get("source", !0);
                        t = [_u(m, this._getSourceMetaRawOption(), null)], e = []
                    }
                }
                this._setLocalSource(t, e)
            }, t.prototype._applyTransform = function (t) {
                var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
                if (null != i) {
                    var r = "";
                    1 !== t.length && $u(r)
                }
                var o, a = [], s = [];
                return y(t, function (t) {
                    t.prepareSource();
                    var e = t.getSource(i || 0), n = "";
                    null == i || e || $u(n), a.push(e), s.push(t._getVersionSign())
                }), n ? o = Gu(n, a, {datasetIndex: e.componentIndex}) : null != i && (o = [bu(a[0])]), {
                    sourceList: o,
                    upstreamSignList: s
                }
            }, t.prototype._isDirty = function () {
                if (this._dirty) return !0;
                for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()) return !0
                }
            }, t.prototype.getSource = function (t) {
                t = t || 0;
                var e = this._sourceList[t];
                if (!e) {
                    var n = this._getUpstreamSourceManagers();
                    return n[0] && n[0].getSource(t)
                }
                return e
            }, t.prototype.getSharedDataStore = function (t) {
                var e = t.makeStoreSchema();
                return this._innerGetDataStore(e.dimensions, t.source, e.hash)
            }, t.prototype._innerGetDataStore = function (t, e, n) {
                var i = 0, r = this._storeList, o = r[i];
                o || (o = r[i] = {});
                var a = o[n];
                if (!a) {
                    var s = this._getUpstreamSourceManagers()[0];
                    Ku(this._sourceHost) && s ? a = s._innerGetDataStore(t, e, n) : (a = new AT, a.initData(new uT(e, t.length), t)), o[n] = a
                }
                return a
            }, t.prototype._getUpstreamSourceManagers = function () {
                var t = this._sourceHost;
                if (Ku(t)) {
                    var e = zl(t);
                    return e ? [e.getSourceManager()] : []
                }
                return v(El(t), function (t) {
                    return t.getSourceManager()
                })
            }, t.prototype._getSourceMetaRawOption = function () {
                var t, e, n, i = this._sourceHost;
                if (Ku(i)) t = i.get("seriesLayoutBy", !0), e = i.get("sourceHeader", !0), n = i.get("dimensions", !0); else if (!this._getUpstreamSourceManagers().length) {
                    var r = i;
                    t = r.get("seriesLayoutBy", !0), e = r.get("sourceHeader", !0), n = r.get("dimensions", !0)
                }
                return {seriesLayoutBy: t, sourceHeader: e, dimensions: n}
            }, t
        }(), LT = "line-height:1", OT = [0, 10, 20, 30], RT = ["", "\n", "\n\n", "\n\n\n"], zT = {
            section: {
                planLayout: function (t) {
                    var e = t.blocks.length, n = e > 1 || e > 0 && !t.noHeader, i = 0;
                    y(t.blocks, function (t) {
                        th(t).planLayout(t);
                        var e = t.__gapLevelBetweenSubBlocks;
                        e >= i && (i = e + (!n || e && ("section" !== t.type || t.noHeader) ? 0 : 1))
                    }), t.__gapLevelBetweenSubBlocks = i
                }, build: function (t, e, n, i) {
                    var r = e.noHeader, o = ih(e), a = eh(t, e, r ? n : o.html, i);
                    if (r) return a;
                    var s = ml(e.header, "ordinal", t.useUTC), l = Ju(i, t.renderMode).nameStyle;
                    return "richText" === t.renderMode ? sh(t, s, l) + o.richText + a : rh('<div style="' + l + ";" + LT + ';">' + vl(s) + "</div>" + a, n)
                }
            }, nameValue: {
                planLayout: function (t) {
                    t.__gapLevelBetweenSubBlocks = 0
                }, build: function (t, e, n, i) {
                    var r = t.renderMode, o = e.noName, a = e.noValue, s = !e.markerType, l = e.name, u = e.value,
                        h = t.useUTC;
                    if (!o || !a) {
                        var c = s ? "" : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || "#333", r),
                            p = o ? "" : ml(l, "ordinal", h), f = e.valueType, d = a ? [] : M(u) ? v(u, function (t, e) {
                                return ml(t, M(f) ? f[e] : f, h)
                            }) : [ml(u, M(f) ? f[0] : f, h)], g = !s || !o, y = !s && o, m = Ju(i, r), _ = m.nameStyle,
                            x = m.valueStyle;
                        return "richText" === r ? (s ? "" : c) + (o ? "" : sh(t, p, _)) + (a ? "" : lh(t, d, g, y, x)) : rh((s ? "" : c) + (o ? "" : oh(p, !s, _)) + (a ? "" : ah(d, g, y, x)), n)
                    }
                }
            }
        }, ET = function () {
            function t() {
                this.richTextStyles = {}, this._nextStyleNameId = Ni()
            }

            return t.prototype._generateStyleName = function () {
                return "__EC_aUTo_" + this._nextStyleNameId++
            }, t.prototype.makeTooltipMarker = function (t, e, n) {
                var i = "richText" === n ? this._generateStyleName() : null,
                    r = xl({color: e, type: t, renderMode: n, markerId: i});
                return C(r) ? r : (this.richTextStyles[i] = r.style, r.content)
            }, t.prototype.wrapRichTextStyle = function (t, e) {
                var n = {};
                M(e) ? y(e, function (t) {
                    return h(n, t)
                }) : h(n, e);
                var i = this._generateStyleName();
                return this.richTextStyles[i] = n, "{" + i + "|" + t + "}"
            }, t
        }(), NT = ar(), BT = "__universalTransitionEnabled", FT = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._selectedDataIndicesMap = {}, e
            }

            return e(n, t), n.prototype.init = function (t, e, n) {
                this.seriesIndex = this.componentIndex, this.dataTask = Ru({
                    count: yh,
                    reset: vh
                }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, n);
                var i = NT(this).sourceManager = new PT(this);
                i.prepareSource();
                var r = this.getInitialData(t, n);
                _h(r, this), this.dataTask.context.data = r, NT(this).dataBeforeProcessed = r, dh(this), this._initSelectedMapFromData(r)
            }, n.prototype.mergeDefaultAndTheme = function (t, e) {
                var n = Il(this), i = n ? kl(t) : {}, r = this.subType;
                bM.hasClass(r) && (r += "Series"), l(t, e.getTheme().get(this.subType)), l(t, this.getDefaultOption()), Gi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && Dl(t, i, n)
            }, n.prototype.mergeOption = function (t, e) {
                t = l(this.option, t, !0), this.fillDataTextStyle(t.data);
                var n = Il(this);
                n && Dl(this.option, t, n);
                var i = NT(this).sourceManager;
                i.dirty(), i.prepareSource();
                var r = this.getInitialData(t, e);
                _h(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, NT(this).dataBeforeProcessed = r, dh(this), this._initSelectedMapFromData(r)
            }, n.prototype.fillDataTextStyle = function (t) {
                if (t && !P(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Gi(t[n], "label", e)
            }, n.prototype.getInitialData = function () {
            }, n.prototype.appendData = function (t) {
                var e = this.getRawData();
                e.appendData(t.data)
            }, n.prototype.getData = function (t) {
                var e = bh(this);
                if (e) {
                    var n = e.context.data;
                    return null == t ? n : n.getLinkedData(t)
                }
                return NT(this).data
            }, n.prototype.getAllData = function () {
                var t = this.getData();
                return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{data: t}]
            }, n.prototype.setData = function (t) {
                var e = bh(this);
                if (e) {
                    var n = e.context;
                    n.outputData = t, e !== this.dataTask && (n.data = t)
                }
                NT(this).data = t
            }, n.prototype.getEncode = function () {
                var t = this.get("encode", !0);
                return t ? Y(t) : void 0
            }, n.prototype.getSourceManager = function () {
                return NT(this).sourceManager
            }, n.prototype.getSource = function () {
                return this.getSourceManager().getSource()
            }, n.prototype.getRawData = function () {
                return NT(this).dataBeforeProcessed
            }, n.prototype.getColorBy = function () {
                var t = this.get("colorBy");
                return t || "series"
            }, n.prototype.isColorBySeries = function () {
                return "series" === this.getColorBy()
            }, n.prototype.getBaseAxis = function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            }, n.prototype.formatTooltip = function (t, e) {
                return ch({series: this, dataIndex: t, multipleSeries: e})
            }, n.prototype.isAnimationEnabled = function () {
                if (sm.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), !!t
            }, n.prototype.restoreData = function () {
                this.dataTask.dirty()
            }, n.prototype.getColorFromPalette = function (t, e, n) {
                var i = this.ecModel, r = VM.prototype.getColorFromPalette.call(this, t, e, n);
                return r || (r = i.getColorFromPalette(t, e, n)), r
            }, n.prototype.coordDimToDataDim = function (t) {
                return this.getRawData().mapDimensionsAll(t)
            }, n.prototype.getProgressive = function () {
                return this.get("progressive")
            }, n.prototype.getProgressiveThreshold = function () {
                return this.get("progressiveThreshold")
            }, n.prototype.select = function (t, e) {
                this._innerSelect(this.getData(e), t)
            }, n.prototype.unselect = function (t, e) {
                var n = this.option.selectedMap;
                if (n) for (var i = this.getData(e), r = 0; r < t.length; r++) {
                    var o = t[r], a = fh(i, o);
                    n[a] = !1, this._selectedDataIndicesMap[a] = -1
                }
            }, n.prototype.toggleSelect = function (t, e) {
                for (var n = [], i = 0; i < t.length; i++) n[0] = t[i], this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e)
            }, n.prototype.getSelectedDataIndices = function () {
                for (var t = this._selectedDataIndicesMap, e = b(t), n = [], i = 0; i < e.length; i++) {
                    var r = t[e[i]];
                    r >= 0 && n.push(r)
                }
                return n
            }, n.prototype.isSelected = function (t, e) {
                var n = this.option.selectedMap;
                if (!n) return !1;
                var i = this.getData(e), r = fh(i, t);
                return n[r] || !1
            }, n.prototype.isUniversalTransitionEnabled = function () {
                if (this[BT]) return !0;
                var t = this.option.universalTransition;
                return t ? t === !0 ? !0 : t && t.enabled : !1
            }, n.prototype._innerSelect = function (t, e) {
                var n, i, r = this.option.selectedMode, o = e.length;
                if (r && o) if ("multiple" === r) for (var a = this.option.selectedMap || (this.option.selectedMap = {}), s = 0; o > s; s++) {
                    var l = e[s], u = fh(t, l);
                    a[u] = !0, this._selectedDataIndicesMap[u] = t.getRawIndex(l)
                } else if ("single" === r || r === !0) {
                    var h = e[o - 1], u = fh(t, h);
                    this.option.selectedMap = (n = {}, n[u] = !0, n), this._selectedDataIndicesMap = (i = {}, i[u] = t.getRawIndex(h), i)
                }
            }, n.prototype._initSelectedMapFromData = function (t) {
                if (!this.option.selectedMap) {
                    var e = [];
                    t.hasItemOption && t.each(function (n) {
                        var i = t.getRawDataItem(n);
                        i && i.selected && e.push(n)
                    }), e.length > 0 && this._innerSelect(t, e)
                }
            }, n.registerClass = function (t) {
                return bM.registerClass(t)
            }, n.protoInitialize = function () {
                var t = n.prototype;
                t.type = "series.__base__", t.seriesIndex = 0, t.ignoreStyleOnData = !1, t.hasSymbolVisual = !1, t.defaultSymbol = "circle", t.visualStyleAccessPath = "itemStyle", t.visualDrawType = "fill"
            }(), n
        }(bM);
    d(FT, vT), d(FT, VM), xr(FT, bM);
    var VT = function () {
        function t() {
            this.group = new cx, this.uid = Bs("viewComponent")
        }

        return t.prototype.init = function () {
        }, t.prototype.render = function () {
        }, t.prototype.dispose = function () {
        }, t.prototype.updateView = function () {
        }, t.prototype.updateLayout = function () {
        }, t.prototype.updateVisual = function () {
        }, t.prototype.blurSeries = function () {
        }, t
    }();
    mr(VT), Mr(VT);
    var HT = ar(), GT = wh(), WT = function () {
        function t() {
            this.group = new cx, this.uid = Bs("viewChart"), this.renderTask = Ru({
                plan: Th,
                reset: Ch
            }), this.renderTask.context = {view: this}
        }

        return t.prototype.init = function () {
        }, t.prototype.render = function () {
        }, t.prototype.highlight = function (t, e, n, i) {
            Mh(t.getData(), i, "emphasis")
        }, t.prototype.downplay = function (t, e, n, i) {
            Mh(t.getData(), i, "normal")
        }, t.prototype.remove = function () {
            this.group.removeAll()
        }, t.prototype.dispose = function () {
        }, t.prototype.updateView = function (t, e, n, i) {
            this.render(t, e, n, i)
        }, t.prototype.updateLayout = function (t, e, n, i) {
            this.render(t, e, n, i)
        }, t.prototype.updateVisual = function (t, e, n, i) {
            this.render(t, e, n, i)
        }, t.markUpdateMethod = function (t, e) {
            HT(t).updateMethod = e
        }, t.protoInitialize = function () {
            var e = t.prototype;
            e.type = "chart"
        }(), t
    }();
    mr(WT, ["dispose"]), Mr(WT);
    var UT, XT = {
            incrementalPrepareRender: {
                progress: function (t, e) {
                    e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
                }
            }, render: {
                forceFirstProgress: !0, progress: function (t, e) {
                    e.view.render(e.model, e.ecModel, e.api, e.payload)
                }
            }
        }, YT = "\x00__throttleOriginMethod", jT = "\x00__throttleRate", qT = "\x00__throttleType", ZT = ar(),
        KT = {itemStyle: Tr(GS, !0), lineStyle: Tr(FS, !0)}, $T = {lineStyle: "stroke", itemStyle: "fill"}, JT = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                var n = t.getData(), i = t.visualStyleAccessPath || "itemStyle", r = t.getModel(i), o = kh(t, i), a = o(r),
                    s = r.getShallow("decal");
                s && (n.setVisual("decal", s), s.dirty = !0);
                var l = Ah(t, i), u = a[l], c = T(u) ? u : null, p = "auto" === a.fill || "auto" === a.stroke;
                if (!a[l] || c || p) {
                    var f = t.getColorFromPalette(t.name, null, e.getSeriesCount());
                    a[l] || (a[l] = f, n.setVisual("colorFromPalette", !0)), a.fill = "auto" === a.fill || "function" == typeof a.fill ? f : a.fill, a.stroke = "auto" === a.stroke || "function" == typeof a.stroke ? f : a.stroke
                }
                return n.setVisual("style", a), n.setVisual("drawType", l), !e.isSeriesFiltered(t) && c ? (n.setVisual("colorFromPalette", !1), {
                    dataEach: function (e, n) {
                        var i = t.getDataParams(n), r = h({}, a);
                        r[l] = c(i), e.setItemVisual(n, "style", r)
                    }
                }) : void 0
            }
        }, QT = new XS, tC = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
                    var n = t.getData(), i = t.visualStyleAccessPath || "itemStyle", r = kh(t, i),
                        o = n.getVisual("drawType");
                    return {
                        dataEach: n.hasItemOption ? function (t, e) {
                            var n = t.getRawDataItem(e);
                            if (n && n[i]) {
                                QT.option = n[i];
                                var a = r(QT), s = t.ensureUniqueItemVisual(e, "style");
                                h(s, a), QT.option.decal && (t.setItemVisual(e, "decal", QT.option.decal), QT.option.decal.dirty = !0), o in a && t.setItemVisual(e, "colorFromPalette", !1)
                            }
                        } : null
                    }
                }
            }
        }, eC = {
            performRawSeries: !0, overallReset: function (t) {
                var e = Y();
                t.eachSeries(function (t) {
                    var n = t.getColorBy();
                    if (!t.isColorBySeries()) {
                        var i = t.type + "-" + n, r = e.get(i);
                        r || (r = {}, e.set(i, r)), ZT(t).scope = r
                    }
                }), t.eachSeries(function (e) {
                    if (!e.isColorBySeries() && !t.isSeriesFiltered(e)) {
                        var n = e.getRawData(), i = {}, r = e.getData(), o = ZT(e).scope,
                            a = e.visualStyleAccessPath || "itemStyle", s = Ah(e, a);
                        r.each(function (t) {
                            var e = r.getRawIndex(t);
                            i[e] = t
                        }), n.each(function (t) {
                            var a = i[t], l = r.getItemVisual(a, "colorFromPalette");
                            if (l) {
                                var u = r.ensureUniqueItemVisual(a, "style"), h = n.getName(t) || t + "", c = n.count();
                                u[s] = e.getColorFromPalette(h, o, c)
                            }
                        })
                    }
                })
            }
        }, nC = Math.PI, iC = function () {
            function t(t, e, n, i) {
                this._stageTaskMap = Y(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i)
            }

            return t.prototype.restoreData = function (t, e) {
                t.restoreData(e), this._stageTaskMap.each(function (t) {
                    var e = t.overallTask;
                    e && e.dirty()
                })
            }, t.prototype.getPerformArgs = function (t, e) {
                if (t.__pipeline) {
                    var n = this._pipelineMap.get(t.__pipeline.id), i = n.context,
                        r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
                        o = r ? n.step : null, a = i && i.modDataCount, s = null != a ? Math.ceil(a / o) : null;
                    return {step: o, modBy: s, modDataCount: a}
                }
            }, t.prototype.getPipeline = function (t) {
                return this._pipelineMap.get(t)
            }, t.prototype.updateStreamModes = function (t, e) {
                var n = this._pipelineMap.get(t.uid), i = t.getData(), r = i.count(),
                    o = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
                    a = t.get("large") && r >= t.get("largeThreshold"),
                    s = "mod" === t.get("progressiveChunkMode") ? r : null;
                t.pipelineContext = n.context = {progressiveRender: o, modDataCount: s, large: a}
            }, t.prototype.restorePipelines = function (t) {
                var e = this, n = e._pipelineMap = Y();
                t.eachSeries(function (t) {
                    var i = t.getProgressive(), r = t.uid;
                    n.set(r, {
                        id: r,
                        head: null,
                        tail: null,
                        threshold: t.getProgressiveThreshold(),
                        progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                        blockIndex: -1,
                        step: Math.round(i || 700),
                        count: 0
                    }), e._pipe(t, t.dataTask)
                })
            }, t.prototype.prepareStageTasks = function () {
                var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
                y(this._allHandlers, function (i) {
                    var r = t.get(i.uid) || t.set(i.uid, {}), o = "";
                    G(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, r, e, n), i.overallReset && this._createOverallStageTask(i, r, e, n)
                }, this)
            }, t.prototype.prepareView = function (t, e, n, i) {
                var r = t.renderTask, o = r.context;
                o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, this._pipe(e, r)
            }, t.prototype.performDataProcessorTasks = function (t, e) {
                this._performStageTasks(this._dataProcessorHandlers, t, e, {block: !0})
            }, t.prototype.performVisualTasks = function (t, e, n) {
                this._performStageTasks(this._visualHandlers, t, e, n)
            }, t.prototype._performStageTasks = function (t, e, n, i) {
                function r(t, e) {
                    return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
                }

                i = i || {};
                var o = !1, a = this;
                y(t, function (t) {
                    if (!i.visualType || i.visualType === t.visualType) {
                        var s = a._stageTaskMap.get(t.uid), l = s.seriesTaskMap, u = s.overallTask;
                        if (u) {
                            var h, c = u.agentStubMap;
                            c.each(function (t) {
                                r(i, t) && (t.dirty(), h = !0)
                            }), h && u.dirty(), a.updatePayload(u, n);
                            var p = a.getPerformArgs(u, i.block);
                            c.each(function (t) {
                                t.perform(p)
                            }), u.perform(p) && (o = !0)
                        } else l && l.each(function (s) {
                            r(i, s) && s.dirty();
                            var l = a.getPerformArgs(s, i.block);
                            l.skip = !t.performRawSeries && e.isSeriesFiltered(s.context.model), a.updatePayload(s, n), s.perform(l) && (o = !0)
                        })
                    }
                }), this.unfinished = o || this.unfinished
            }, t.prototype.performSeriesTasks = function (t) {
                var e;
                t.eachSeries(function (t) {
                    e = t.dataTask.perform() || e
                }), this.unfinished = e || this.unfinished
            }, t.prototype.plan = function () {
                this._pipelineMap.each(function (t) {
                    var e = t.tail;
                    do {
                        if (e.__block) {
                            t.blockIndex = e.__idxInPipeline;
                            break
                        }
                        e = e.getUpstream()
                    } while (e)
                })
            }, t.prototype.updatePayload = function (t, e) {
                "remain" !== e && (t.context.payload = e)
            }, t.prototype._createSeriesStageTask = function (t, e, n, i) {
                function r(e) {
                    var r = e.uid, l = s.set(r, a && a.get(r) || Ru({plan: Eh, reset: Nh, count: Fh}));
                    l.context = {
                        model: e,
                        ecModel: n,
                        api: i,
                        useClearVisual: t.isVisual && !t.isLayout,
                        plan: t.plan,
                        reset: t.reset,
                        scheduler: o
                    }, o._pipe(e, l)
                }

                var o = this, a = e.seriesTaskMap, s = e.seriesTaskMap = Y(), l = t.seriesType, u = t.getTargetSeries;
                t.createOnAllSeries ? n.eachRawSeries(r) : l ? n.eachRawSeriesByType(l, r) : u && u(n, i).each(r)
            }, t.prototype._createOverallStageTask = function (t, e, n, i) {
                function r(t) {
                    var e = t.uid, n = l.set(e, s && s.get(e) || (p = !0, Ru({reset: Oh, onDirty: zh})));
                    n.context = {model: t, overallProgress: c}, n.agent = a, n.__block = c, o._pipe(t, n)
                }

                var o = this, a = e.overallTask = e.overallTask || Ru({reset: Lh});
                a.context = {ecModel: n, api: i, overallReset: t.overallReset, scheduler: o};
                var s = a.agentStubMap, l = a.agentStubMap = Y(), u = t.seriesType, h = t.getTargetSeries, c = !0, p = !1,
                    f = "";
                G(!t.createOnAllSeries, f), u ? n.eachRawSeriesByType(u, r) : h ? h(n, i).each(r) : (c = !1, y(n.getSeries(), r)), p && a.dirty()
            }, t.prototype._pipe = function (t, e) {
                var n = t.uid, i = this._pipelineMap.get(n);
                !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i
            }, t.wrapStageHandler = function (t, e) {
                return T(t) && (t = {
                    overallReset: t,
                    seriesType: Vh(t)
                }), t.uid = Bs("stageHandler"), e && (t.visualType = e), t
            }, t
        }(), rC = Bh(0), oC = {}, aC = {};
    Hh(oC, WM), Hh(aC, $M), oC.eachSeriesByType = oC.eachRawSeriesByType = function (t) {
        UT = t
    }, oC.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (UT = t.subType)
    };
    var sC = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        lC = {
            color: sC,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], sC]
        }, uC = "#B9B8CE", hC = "#100C2A", cC = function () {
            return {
                axisLine: {lineStyle: {color: uC}},
                splitLine: {lineStyle: {color: "#484753"}},
                splitArea: {areaStyle: {color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]}},
                minorSplitLine: {lineStyle: {color: "#20203B"}}
            }
        }, pC = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], fC = {
            darkMode: !0,
            color: pC,
            backgroundColor: hC,
            axisPointer: {lineStyle: {color: "#817f91"}, crossStyle: {color: "#817f91"}, label: {color: "#fff"}},
            legend: {textStyle: {color: uC}},
            textStyle: {color: uC},
            title: {textStyle: {color: "#EEF1FA"}, subtextStyle: {color: "#B9B8CE"}},
            toolbox: {iconStyle: {borderColor: uC}},
            dataZoom: {
                borderColor: "#71708A",
                textStyle: {color: uC},
                brushStyle: {color: "rgba(135,163,206,0.3)"},
                handleStyle: {color: "#353450", borderColor: "#C5CBE3"},
                moveHandleStyle: {color: "#B0B6C3", opacity: .3},
                fillerColor: "rgba(135,163,206,0.2)",
                emphasis: {
                    handleStyle: {borderColor: "#91B7F2", color: "#4D587D"},
                    moveHandleStyle: {color: "#636D9A", opacity: .7}
                },
                dataBackground: {lineStyle: {color: "#71708A", width: 1}, areaStyle: {color: "#71708A"}},
                selectedDataBackground: {lineStyle: {color: "#87A3CE"}, areaStyle: {color: "#87A3CE"}}
            },
            visualMap: {textStyle: {color: uC}},
            timeline: {lineStyle: {color: uC}, label: {color: uC}, controlStyle: {color: uC, borderColor: uC}},
            calendar: {itemStyle: {color: hC}, dayLabel: {color: uC}, monthLabel: {color: uC}, yearLabel: {color: uC}},
            timeAxis: cC(),
            logAxis: cC(),
            valueAxis: cC(),
            categoryAxis: cC(),
            line: {symbol: "circle"},
            graph: {color: pC},
            gauge: {
                title: {color: uC},
                axisLine: {lineStyle: {color: [[1, "rgba(207,212,219,0.2)"]]}},
                axisLabel: {color: uC},
                detail: {color: "#EEF1FA"}
            },
            candlestick: {itemStyle: {color: "#f64e56", color0: "#54ea92", borderColor: "#f64e56", borderColor0: "#54ea92"}}
        };
    fC.categoryAxis.splitLine.show = !1;
    var dC = function () {
            function t() {
            }

            return t.prototype.normalizeQuery = function (t) {
                var e = {}, n = {}, i = {};
                if (C(t)) {
                    var r = gr(t);
                    e.mainType = r.main || null, e.subType = r.sub || null
                } else {
                    var o = ["Index", "Name", "Id"], a = {name: 1, dataIndex: 1, dataType: 1};
                    y(t, function (t, r) {
                        for (var s = !1, l = 0; l < o.length; l++) {
                            var u = o[l], h = r.lastIndexOf(u);
                            if (h > 0 && h === r.length - u.length) {
                                var c = r.slice(0, h);
                                "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
                            }
                        }
                        a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
                    })
                }
                return {cptQuery: e, dataQuery: n, otherQuery: i}
            }, t.prototype.filter = function (t, e) {
                function n(t, e, n, i) {
                    return null == t[n] || e[i || n] === t[n]
                }

                var i = this.eventInfo;
                if (!i) return !0;
                var r = i.targetEl, o = i.packedEvent, a = i.model, s = i.view;
                if (!a || !s) return !0;
                var l = e.cptQuery, u = e.dataQuery;
                return n(l, a, "mainType") && n(l, a, "subType") && n(l, a, "index", "componentIndex") && n(l, a, "name") && n(l, a, "id") && n(u, o, "name") && n(u, o, "dataIndex") && n(u, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o))
            }, t.prototype.afterTrigger = function () {
                this.eventInfo = null
            }, t
        }(), gC = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                function n(e, n) {
                    var i = t.getRawValue(n), a = t.getDataParams(n);
                    u && e.setItemVisual(n, "symbol", r(i, a)), h && e.setItemVisual(n, "symbolSize", o(i, a)), c && e.setItemVisual(n, "symbolRotate", s(i, a)), p && e.setItemVisual(n, "symbolOffset", l(i, a))
                }

                var i = t.getData();
                if (t.legendIcon && i.setVisual("legendIcon", t.legendIcon), t.hasSymbolVisual) {
                    var r = t.get("symbol"), o = t.get("symbolSize"), a = t.get("symbolKeepAspect"),
                        s = t.get("symbolRotate"), l = t.get("symbolOffset"), u = T(r), h = T(o), c = T(s), p = T(l),
                        f = u || h || c || p, d = !u && r ? r : t.defaultSymbol, g = h ? null : o, y = c ? null : s,
                        v = p ? null : l;
                    if (i.setVisual({
                        legendIcon: t.legendIcon || d,
                        symbol: d,
                        symbolSize: g,
                        symbolKeepAspect: a,
                        symbolRotate: y,
                        symbolOffset: v
                    }), !e.isSeriesFiltered(t)) return {dataEach: f ? n : null}
                }
            }
        }, yC = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                function n(t, e) {
                    var n = t.getItemModel(e), i = n.getShallow("symbol", !0), r = n.getShallow("symbolSize", !0),
                        o = n.getShallow("symbolRotate", !0), a = n.getShallow("symbolOffset", !0),
                        s = n.getShallow("symbolKeepAspect", !0);
                    null != i && t.setItemVisual(e, "symbol", i), null != r && t.setItemVisual(e, "symbolSize", r), null != o && t.setItemVisual(e, "symbolRotate", o), null != a && t.setItemVisual(e, "symbolOffset", a), null != s && t.setItemVisual(e, "symbolKeepAspect", s)
                }

                if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) {
                    var i = t.getData();
                    return {dataEach: i.hasItemOption ? n : null}
                }
            }
        }, vC = Math.round(9 * Math.random()), mC = "function" == typeof Object.defineProperty, _C = function () {
            function t() {
                this._id = "__ec_inner_" + vC++
            }

            return t.prototype.get = function (t) {
                return this._guard(t)[this._id]
            }, t.prototype.set = function (t, e) {
                var n = this._guard(t);
                return mC ? Object.defineProperty(n, this._id, {
                    value: e,
                    enumerable: !1,
                    configurable: !0
                }) : n[this._id] = e, this
            }, t.prototype["delete"] = function (t) {
                return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1
            }, t.prototype.has = function (t) {
                return !!this._guard(t)[this._id]
            }, t.prototype._guard = function (t) {
                if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
                return t
            }, t
        }(), xC = Gb.extend({
            type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
                t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath()
            }
        }), bC = Gb.extend({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
                t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath()
            }
        }), wC = Gb.extend({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.x, i = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a),
                    l = i - o + a + s, u = Math.asin(s / a), h = Math.cos(u) * a, c = Math.sin(u), p = Math.cos(u),
                    f = .6 * a, d = .7 * a;
                t.moveTo(n - h, l + s), t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + p * f, n, i - d, n, i), t.bezierCurveTo(n, i - d, n - h + c * f, l + s + p * f, n - h, l + s), t.closePath()
            }
        }), SC = Gb.extend({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.height, i = e.width, r = e.x, o = e.y, a = i / 3 * 2;
                t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), t.lineTo(r, o), t.closePath()
            }
        }), MC = {line: aS, rect: $b, roundRect: $b, square: $b, circle: Ew, diamond: bC, pin: wC, arrow: SC, triangle: xC},
        TC = {
            line: function (t, e, n, i, r) {
                r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
            }, rect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i
            }, roundRect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
            }, square: function (t, e, n, i, r) {
                var o = Math.min(n, i);
                r.x = t, r.y = e, r.width = o, r.height = o
            }, circle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
            }, diamond: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }, pin: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            }, arrow: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            }, triangle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }
        }, CC = {};
    y(MC, function (t, e) {
        CC[e] = new t
    });
    for (var IC, DC = Gb.extend({
        type: "symbol",
        shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
        calculateTextPosition: function (t, e, n) {
            var i = ri(t, e, n), r = this.shape;
            return r && "pin" === r.symbolType && "inside" === e.position && (i.y = n.y + .4 * n.height), i
        },
        buildPath: function (t, e, n) {
            var i = e.symbolType;
            if ("none" !== i) {
                var r = CC[i];
                r || (i = "rect", r = CC[i]), TC[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n)
            }
        }
    }), kC = new Pb(!0), AC = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], PC = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]], LC = 1, OC = 2, RC = 3, zC = 4, EC = new _C, NC = new s_(100), BC = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"], FC = {
        fill: "fill",
        stroke: "stroke",
        "stroke-width": "lineWidth",
        opacity: "opacity",
        "fill-opacity": "fillOpacity",
        "stroke-opacity": "strokeOpacity",
        "stroke-dasharray": "lineDash",
        "stroke-dashoffset": "lineDashOffset",
        "stroke-linecap": "lineCap",
        "stroke-linejoin": "lineJoin",
        "stroke-miterlimit": "miterLimit",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "text-anchor": "textAlign",
        visibility: "visibility",
        display: "display"
    }, VC = b(FC), HC = {
        "alignment-baseline": "textBaseline",
        "stop-color": "stopColor"
    }, GC = b(HC), WC = function () {
        function t() {
            this._defs = {}, this._root = null
        }

        return t.prototype.parse = function (t, e) {
            e = e || {};
            var n = Pc(t);
            if (!n) throw new Error("Illegal svg");
            this._defsUsePending = [];
            var i = new cx;
            this._root = i;
            var r = [], o = n.getAttribute("viewBox") || "", a = parseFloat(n.getAttribute("width") || e.width),
                s = parseFloat(n.getAttribute("height") || e.height);
            isNaN(a) && (a = null), isNaN(s) && (s = null), Ec(n, i, null, !0, !1);
            for (var l = n.firstChild; l;) this._parseNode(l, i, r, null, !1, !1), l = l.nextSibling;
            Fc(this._defs, this._defsUsePending), this._defsUsePending = [];
            var u, h;
            if (o) {
                var c = Vc(o);
                c.length >= 4 && (u = {
                    x: parseFloat(c[0] || 0),
                    y: parseFloat(c[1] || 0),
                    width: parseFloat(c[2]),
                    height: parseFloat(c[3])
                })
            }
            if (u && null != a && null != s && (h = Uc(u, {x: 0, y: 0, width: a, height: s}), !e.ignoreViewBox)) {
                var p = i;
                i = new cx, i.add(p), p.scaleX = p.scaleY = h.scale, p.x = h.x, p.y = h.y
            }
            return e.ignoreRootClip || null == a || null == s || i.setClipPath(new $b({
                shape: {
                    x: 0,
                    y: 0,
                    width: a,
                    height: s
                }
            })), {root: i, width: a, height: s, viewBoxRect: u, viewBoxTransform: h, named: r}
        }, t.prototype._parseNode = function (t, e, n, i, r, o) {
            var a, s = t.nodeName.toLowerCase(), l = i;
            if ("defs" === s && (r = !0), "text" === s && (o = !0), "defs" === s || "switch" === s) a = e; else {
                if (!r) {
                    var u = IC[s];
                    if (u && Z(IC, s)) {
                        a = u.call(this, t, e);
                        var h = t.getAttribute("name");
                        if (h) {
                            var c = {name: h, namedFrom: null, svgNodeTagLower: s, el: a};
                            n.push(c), "g" === s && (l = c)
                        } else i && n.push({name: i.name, namedFrom: i, svgNodeTagLower: s, el: a});
                        e.add(a)
                    }
                }
                var p = UC[s];
                if (p && Z(UC, s)) {
                    var f = p.call(this, t), d = t.getAttribute("id");
                    d && (this._defs[d] = f)
                }
            }
            if (a && a.isGroup) for (var g = t.firstChild; g;) 1 === g.nodeType ? this._parseNode(g, a, n, l, r, o) : 3 === g.nodeType && o && this._parseText(g, a), g = g.nextSibling
        }, t.prototype._parseText = function (t, e) {
            var n = new Ub({style: {text: t.textContent}, silent: !0, x: this._textX || 0, y: this._textY || 0});
            Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), Nc(n, e);
            var i = n.style, r = i.fontSize;
            r && 9 > r && (i.fontSize = 9, n.scaleX *= r / 9, n.scaleY *= r / 9);
            var o = (i.fontSize || i.fontFamily) && [i.fontStyle, i.fontWeight, (i.fontSize || 12) + "px", i.fontFamily || "sans-serif"].join(" ");
            i.font = o;
            var a = n.getBoundingRect();
            return this._textX += a.width, e.add(n), n
        }, t.internalField = function () {
            IC = {
                g: function (t, e) {
                    var n = new cx;
                    return Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), n
                }, rect: function (t, e) {
                    var n = new $b;
                    return Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), n.setShape({
                        x: parseFloat(t.getAttribute("x") || "0"),
                        y: parseFloat(t.getAttribute("y") || "0"),
                        width: parseFloat(t.getAttribute("width") || "0"),
                        height: parseFloat(t.getAttribute("height") || "0")
                    }), n.silent = !0, n
                }, circle: function (t, e) {
                    var n = new Ew;
                    return Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), n.setShape({
                        cx: parseFloat(t.getAttribute("cx") || "0"),
                        cy: parseFloat(t.getAttribute("cy") || "0"),
                        r: parseFloat(t.getAttribute("r") || "0")
                    }), n.silent = !0, n
                }, line: function (t, e) {
                    var n = new aS;
                    return Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), n.setShape({
                        x1: parseFloat(t.getAttribute("x1") || "0"),
                        y1: parseFloat(t.getAttribute("y1") || "0"),
                        x2: parseFloat(t.getAttribute("x2") || "0"),
                        y2: parseFloat(t.getAttribute("y2") || "0")
                    }), n.silent = !0, n
                }, ellipse: function (t, e) {
                    var n = new Bw;
                    return Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), n.setShape({
                        cx: parseFloat(t.getAttribute("cx") || "0"),
                        cy: parseFloat(t.getAttribute("cy") || "0"),
                        rx: parseFloat(t.getAttribute("rx") || "0"),
                        ry: parseFloat(t.getAttribute("ry") || "0")
                    }), n.silent = !0, n
                }, polygon: function (t, e) {
                    var n, i = t.getAttribute("points");
                    i && (n = zc(i));
                    var r = new eS({shape: {points: n || []}, silent: !0});
                    return Rc(e, r), Ec(t, r, this._defsUsePending, !1, !1), r
                }, polyline: function (t, e) {
                    var n, i = t.getAttribute("points");
                    i && (n = zc(i));
                    var r = new iS({shape: {points: n || []}, silent: !0});
                    return Rc(e, r), Ec(t, r, this._defsUsePending, !1, !1), r
                }, image: function (t, e) {
                    var n = new jb;
                    return Rc(e, n), Ec(t, n, this._defsUsePending, !1, !1), n.setStyle({
                        image: t.getAttribute("xlink:href") || t.getAttribute("href"),
                        x: +t.getAttribute("x"),
                        y: +t.getAttribute("y"),
                        width: +t.getAttribute("width"),
                        height: +t.getAttribute("height")
                    }), n.silent = !0, n
                }, text: function (t, e) {
                    var n = t.getAttribute("x") || "0", i = t.getAttribute("y") || "0", r = t.getAttribute("dx") || "0",
                        o = t.getAttribute("dy") || "0";
                    this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(o);
                    var a = new cx;
                    return Rc(e, a), Ec(t, a, this._defsUsePending, !1, !0), a
                }, tspan: function (t, e) {
                    var n = t.getAttribute("x"), i = t.getAttribute("y");
                    null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
                    var r = t.getAttribute("dx") || "0", o = t.getAttribute("dy") || "0", a = new cx;
                    return Rc(e, a), Ec(t, a, this._defsUsePending, !1, !0), this._textX += parseFloat(r), this._textY += parseFloat(o), a
                }, path: function (t, e) {
                    var n = t.getAttribute("d") || "", i = Na(n);
                    return Rc(e, i), Ec(t, i, this._defsUsePending, !1, !1), i.silent = !0, i
                }
            }
        }(), t
    }(), UC = {
        lineargradient: function (t) {
            var e = parseInt(t.getAttribute("x1") || "0", 10), n = parseInt(t.getAttribute("y1") || "0", 10),
                i = parseInt(t.getAttribute("x2") || "10", 10), r = parseInt(t.getAttribute("y2") || "0", 10),
                o = new dS(e, n, i, r);
            return Lc(t, o), Oc(t, o), o
        }, radialgradient: function (t) {
            var e = parseInt(t.getAttribute("cx") || "0", 10), n = parseInt(t.getAttribute("cy") || "0", 10),
                i = parseInt(t.getAttribute("r") || "0", 10), r = new gS(e, n, i);
            return Lc(t, r), Oc(t, r), r
        }
    }, XC = /^url\(\s*#(.*?)\)/, YC = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, jC = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g, qC = Math.PI / 180, ZC = /([^\s:;]+)\s*:\s*([^:;]+)/g, KC = 1e-8, $C = [], JC = function () {
        function t(t) {
            this.name = t
        }

        return t.prototype.getCenter = function () {
        }, t
    }(), QC = function (t) {
        function n(e, n, i) {
            var r = t.call(this, e) || this;
            if (r.type = "geoJSON", r.geometries = n, i) i = [i[0], i[1]]; else {
                var o = r.getBoundingRect();
                i = [o.x + o.width / 2, o.y + o.height / 2]
            }
            return r._center = i, r
        }

        return e(n, t), n.prototype.getBoundingRect = function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], o = [], a = this.geometries, s = 0; s < a.length; s++) if ("polygon" === a[s].type) {
                var l = a[s].exterior;
                io(l, r, o), ye(n, n, r), ve(i, i, o)
            }
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new ex(n[0], n[1], i[0] - n[0], i[1] - n[1])
        }, n.prototype.contain = function (t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var i = 0, r = n.length; r > i; i++) if ("polygon" === n[i].type) {
                var o = n[i].exterior, a = n[i].interiors;
                if (jc(o, t[0], t[1])) {
                    for (var s = 0; s < (a ? a.length : 0); s++) if (jc(a[s], t[0], t[1])) continue t;
                    return !0
                }
            }
            return !1
        }, n.prototype.transformTo = function (t, e, n, i) {
            var r = this.getBoundingRect(), o = r.width / r.height;
            n ? i || (i = n / o) : n = o * i;
            for (var a = new ex(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                for (var h = l[u].exterior, c = l[u].interiors, p = 0; p < h.length; p++) ge(h[p], h[p], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (var p = 0; p < c[f].length; p++) ge(c[f][p], c[f][p], s)
            }
            r = this._rect, r.copy(a), this._center = [r.x + r.width / 2, r.y + r.height / 2]
        }, n.prototype.cloneShallow = function (t) {
            null == t && (t = this.name);
            var e = new n(t, this.geometries, this._center);
            return e._rect = this._rect, e.transformTo = null, e
        }, n.prototype.getCenter = function () {
            return this._center
        }, n.prototype.setCenter = function (t) {
            this._center = t
        }, n
    }(JC), tI = function (t) {
        function n(e, n) {
            var i = t.call(this, e) || this;
            return i.type = "geoSVG", i._elOnlyForCalculate = n, i
        }

        return e(n, t), n.prototype.getCenter = function () {
            var t = this._center;
            return t || (t = this._center = this._calculateCenter()), t
        }, n.prototype._calculateCenter = function () {
            for (var t = this._elOnlyForCalculate, e = t.getBoundingRect(), n = [e.x + e.width / 2, e.y + e.height / 2], i = Hn($C), r = t; r && !r.isGeoSVGGraphicRoot;) Wn(i, r.getLocalTransform(), i), r = r.parent;
            return jn(i, i), ge(n, n, i), n
        }, n
    }(JC), eI = Y(["rect", "circle", "line", "ellipse", "polygon", "polyline", "path", "text", "tspan", "g"]), nI = function () {
        function t(t, e) {
            this.type = "geoSVG", this._usedGraphicMap = Y(), this._freedGraphics = [], this._mapName = t, this._parsedXML = Pc(e)
        }

        return t.prototype.load = function () {
            var t = this._firstGraphic;
            if (!t) {
                t = this._firstGraphic = this._buildGraphic(this._parsedXML), this._freedGraphics.push(t), this._boundingRect = this._firstGraphic.boundingRect.clone();
                var e = Zc(t.named), n = e.regions, i = e.regionsMap;
                this._regions = n, this._regionsMap = i
            }
            return {boundingRect: this._boundingRect, regions: this._regions, regionsMap: this._regionsMap}
        }, t.prototype._buildGraphic = function (t) {
            var e, n;
            try {
                e = t && Xc(t, {ignoreViewBox: !0, ignoreRootClip: !0}) || {}, n = e.root, G(null != n)
            } catch (i) {
                throw new Error("Invalid svg format\n" + i.message)
            }
            var r = new cx;
            r.add(n), r.isGeoSVGGraphicRoot = !0;
            var o = e.width, a = e.height, s = e.viewBoxRect, l = this._boundingRect;
            if (!l) {
                var u = void 0, h = void 0, c = void 0, p = void 0;
                if (null != o ? (u = 0, c = o) : s && (u = s.x, c = s.width), null != a ? (h = 0, p = a) : s && (h = s.y, p = s.height), null == u || null == h) {
                    var f = n.getBoundingRect();
                    null == u && (u = f.x, c = f.width), null == h && (h = f.y, p = f.height)
                }
                l = this._boundingRect = new ex(u, h, c, p)
            }
            if (s) {
                var d = Uc(s, l);
                n.scaleX = n.scaleY = d.scale, n.x = d.x, n.y = d.y
            }
            r.setClipPath(new $b({shape: l.plain()}));
            var g = [];
            return y(e.named, function (t) {
                null != eI.get(t.svgNodeTagLower) && (g.push(t), qc(t.el))
            }), {root: r, boundingRect: l, named: g}
        }, t.prototype.useGraphic = function (t) {
            var e = this._usedGraphicMap, n = e.get(t);
            return n ? n : (n = this._freedGraphics.pop() || this._buildGraphic(this._parsedXML), e.set(t, n), n)
        }, t.prototype.freeGraphic = function (t) {
            var e = this._usedGraphicMap, n = e.get(t);
            n && (e.removeKey(t), this._freedGraphics.push(n))
        }, t
    }(), iI = [126, 25], rI = "南海诸岛", oI = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], aI = 0; aI < oI.length; aI++) for (var sI = 0; sI < oI[aI].length; sI++) oI[aI][sI][0] /= 10.5, oI[aI][sI][1] /= -14, oI[aI][sI][0] += iI[0], oI[aI][sI][1] += iI[1];
    var lI = {"南海诸岛": [32, 80], "广东": [0, -10], "香港": [10, 5], "澳门": [-10, 10], "天津": [5, 5]},
        uI = {Russia: [100, 60], "United States": [-99, 38], "United States of America": [-99, 38]},
        hI = [[[123.45165252685547, 25.73527164402261], [123.49731445312499, 25.73527164402261], [123.49731445312499, 25.750734064600884], [123.45165252685547, 25.750734064600884], [123.45165252685547, 25.73527164402261]]],
        cI = "name", pI = function () {
            function t(t, e, n) {
                this.type = "geoJSON", this._parsedMap = Y(), this._mapName = t, this._specialAreas = n, this._geoJSON = rp(e)
            }

            return t.prototype.load = function (t, e) {
                e = e || cI;
                var n = this._parsedMap.get(e);
                if (!n) {
                    var i = this._parseToRegions(e);
                    n = this._parsedMap.set(e, {regions: i, boundingRect: ip(i)})
                }
                var r = Y(), o = [];
                return y(n.regions, function (e) {
                    var n = e.name;
                    t && t.hasOwnProperty(n) && (e = e.cloneShallow(n = t[n])), o.push(e), r.set(n, e)
                }), {regions: o, boundingRect: n.boundingRect || new ex(0, 0, 0, 0), regionsMap: r}
            }, t.prototype._parseToRegions = function (t) {
                var e, n = this._mapName, i = this._geoJSON;
                try {
                    e = i ? Jc(i, t) : []
                } catch (r) {
                    throw new Error("Invalid geoJson format\n" + r.message)
                }
                return Qc(n, e), y(e, function (t) {
                    var e = t.name;
                    tp(n, t), ep(n, t), np(n, t);
                    var i = this._specialAreas && this._specialAreas[e];
                    i && t.transformTo(i.left, i.top, i.width, i.height)
                }, this), e
            }, t.prototype.getMapForUser = function () {
                return {geoJson: this._geoJSON, geoJSON: this._geoJSON, specialAreas: this._specialAreas}
            }, t
        }(), fI = Y(), dI = {
            registerMap: function (t, e, n) {
                if (e.svg) {
                    var i = new nI(t, e.svg);
                    fI.set(t, i)
                } else {
                    var r = e.geoJson || e.geoJSON;
                    r && !e.features ? n = e.specialAreas : r = e;
                    var i = new pI(t, r, n);
                    fI.set(t, i)
                }
            }, getGeoResource: function (t) {
                return fI.get(t)
            }, getMapForUser: function (t) {
                var e = fI.get(t);
                return e && "geoJSON" === e.type && e.getMapForUser()
            }, load: function (t, e, n) {
                var i = fI.get(t);
                if (i) return i.load(e, n)
            }
        }, gI = new Om, yI = "undefined" != typeof window, vI = "5.2.2", mI = {zrender: "5.2.1"}, _I = 1, xI = 800,
        bI = 900, wI = 1e3, SI = 2e3, MI = 5e3, TI = 1e3, CI = 1100, II = 2e3, DI = 3e3, kI = 4e3, AI = 4500, PI = 4600,
        LI = 5e3, OI = 6e3, RI = 7e3, zI = {
            PROCESSOR: {FILTER: wI, SERIES_FILTER: xI, STATISTIC: MI},
            VISUAL: {
                LAYOUT: TI,
                PROGRESSIVE_LAYOUT: CI,
                GLOBAL: II,
                CHART: DI,
                POST_CHART_LAYOUT: PI,
                COMPONENT: kI,
                BRUSH: LI,
                CHART_ITEM: AI,
                ARIA: OI,
                DECAL: RI
            }
        }, EI = "__flagInMainProcess", NI = "__pendingUpdate", BI = "__needsUpdateStatus", FI = /^[a-zA-Z0-9_]+$/,
        VI = "__connectUpdateStatus", HI = 0, GI = 1, WI = 2, UI = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n
        }(Om), XI = UI.prototype;
    XI.on = ap("on"), XI.off = ap("off");
    var YI, jI, qI, ZI, KI, $I, JI, QI, tD, eD, nD, iD, rD, oD, aD, sD, lD, uD, hD, cD = function (t) {
        function n(e, n, i) {
            function r(t, e) {
                return t.__prio - e.__prio
            }

            var o = t.call(this, new dC) || this;
            o._chartsViews = [], o._chartsMap = {}, o._componentsViews = [], o._componentsMap = {}, o._pendingActions = [], i = i || {}, "string" == typeof n && (n = _D[n]), o._dom = e;
            var a = "canvas", l = !1, u = o._zr = pi(e, {
                renderer: i.renderer || a,
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height,
                useDirtyRect: null == i.useDirtyRect ? l : i.useDirtyRect
            });
            o._throttledZrFlush = Ih(wm(u.flush, u), 17), n = s(n), n && gu(n, !0), o._theme = n, o._locale = Ws(i.locale || tM), o._coordSysMgr = new QM;
            var h = o._api = sD(o);
            return Xe(mD, r), Xe(yD, r), o._scheduler = new iC(o, h, yD, mD), o._messageCenter = new UI, o._initEvents(), o.resize = wm(o.resize, o), u.animation.on("frame", o._onframe, o), eD(u, o), nD(u, o), U(o), o
        }

        return e(n, t), n.prototype._onframe = function () {
            if (!this._disposed) {
                hD(this);
                var t = this._scheduler;
                if (this[NI]) {
                    var e = this[NI].silent;
                    this[EI] = !0, YI(this), ZI.update.call(this, null, this[NI].updateParams), this._zr.flush(), this[EI] = !1, this[NI] = null, QI.call(this, e), tD.call(this, e)
                } else if (t.unfinished) {
                    var n = _I, i = this._model, r = this._api;
                    t.unfinished = !1;
                    do {
                        var o = +new Date;
                        t.performSeriesTasks(i), t.performDataProcessorTasks(i), $I(this, i), t.performVisualTasks(i), aD(this, this._model, r, "remain", {}), n -= +new Date - o
                    } while (n > 0 && t.unfinished);
                    t.unfinished || this._zr.flush()
                }
            }
        }, n.prototype.getDom = function () {
            return this._dom
        }, n.prototype.getId = function () {
            return this.id
        }, n.prototype.getZr = function () {
            return this._zr
        }, n.prototype.setOption = function (t, e, n) {
            if (!this._disposed) {
                var i, r, o;
                if (k(e) && (n = e.lazyUpdate, i = e.silent, r = e.replaceMerge, o = e.transition, e = e.notMerge), this[EI] = !0, !this._model || e) {
                    var a = new eT(this._api), s = this._theme, l = this._model = new WM;
                    l.scheduler = this._scheduler, l.init(null, null, null, s, this._locale, a)
                }
                this._model.setOption(t, {replaceMerge: r}, vD);
                var u = {seriesTransition: o, optionChanged: !0};
                n ? (this[NI] = {
                    silent: i,
                    updateParams: u
                }, this[EI] = !1, this.getZr().wakeUp()) : (YI(this), ZI.update.call(this, null, u), this._zr.flush(), this[NI] = null, this[EI] = !1, QI.call(this, i), tD.call(this, i))
            }
        }, n.prototype.setTheme = function () {
            console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, n.prototype.getModel = function () {
            return this._model
        }, n.prototype.getOption = function () {
            return this._model && this._model.getOption()
        }, n.prototype.getWidth = function () {
            return this._zr.getWidth()
        }, n.prototype.getHeight = function () {
            return this._zr.getHeight()
        }, n.prototype.getDevicePixelRatio = function () {
            return this._zr.painter.dpr || yI && window.devicePixelRatio || 1
        }, n.prototype.getRenderedCanvas = function (t) {
            return sm.canvasSupported ? (t = t || {}, this._zr.painter.getRenderedCanvas({
                backgroundColor: t.backgroundColor || this._model.get("backgroundColor"),
                pixelRatio: t.pixelRatio || this.getDevicePixelRatio()
            })) : void 0
        }, n.prototype.getSvgDataURL = function () {
            if (sm.svgSupported) {
                var t = this._zr, e = t.storage.getDisplayList();
                return y(e, function (t) {
                    t.stopAnimation(null, !0)
                }), t.painter.toDataURL()
            }
        }, n.prototype.getDataURL = function (t) {
            if (!this._disposed) {
                t = t || {};
                var e = t.excludeComponents, n = this._model, i = [], r = this;
                y(e, function (t) {
                    n.eachComponent({mainType: t}, function (t) {
                        var e = r._componentsMap[t.__viewId];
                        e.group.ignore || (i.push(e), e.group.ignore = !0)
                    })
                });
                var o = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
                return y(i, function (t) {
                    t.group.ignore = !1
                }), o
            }
        }, n.prototype.getConnectedDataURL = function (t) {
            if (!this._disposed && sm.canvasSupported) {
                var e = "svg" === t.type, n = this.group, i = Math.min, r = Math.max, o = 1 / 0;
                if (wD[n]) {
                    var a = o, l = o, u = -o, h = -o, c = [], p = t && t.pixelRatio || this.getDevicePixelRatio();
                    y(bD, function (o) {
                        if (o.group === n) {
                            var p = e ? o.getZr().painter.getSvgDom().innerHTML : o.getRenderedCanvas(s(t)),
                                f = o.getDom().getBoundingClientRect();
                            a = i(f.left, a), l = i(f.top, l), u = r(f.right, u), h = r(f.bottom, h), c.push({
                                dom: p,
                                left: f.left,
                                top: f.top
                            })
                        }
                    }), a *= p, l *= p, u *= p, h *= p;
                    var f = u - a, d = h - l, g = bm(), v = pi(g, {renderer: e ? "svg" : "canvas"});
                    if (v.resize({width: f, height: d}), e) {
                        var m = "";
                        return y(c, function (t) {
                            var e = t.left - a, n = t.top - l;
                            m += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>"
                        }), v.painter.getSvgRoot().innerHTML = m, t.connectedBackgroundColor && v.painter.setBackgroundColor(t.connectedBackgroundColor), v.refreshImmediately(), v.painter.toDataURL()
                    }
                    return t.connectedBackgroundColor && v.add(new $b({
                        shape: {x: 0, y: 0, width: f, height: d},
                        style: {fill: t.connectedBackgroundColor}
                    })), y(c, function (t) {
                        var e = new jb({style: {x: t.left * p - a, y: t.top * p - l, image: t.dom}});
                        v.add(e)
                    }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        }, n.prototype.convertToPixel = function (t, e) {
            return KI(this, "convertToPixel", t, e)
        }, n.prototype.convertFromPixel = function (t, e) {
            return KI(this, "convertFromPixel", t, e)
        }, n.prototype.containPixel = function (t, e) {
            if (!this._disposed) {
                var n, i = this._model, r = sr(i, t);
                return y(r, function (t, i) {
                    i.indexOf("Models") >= 0 && y(t, function (t) {
                        var r = t.coordinateSystem;
                        if (r && r.containPoint) n = n || !!r.containPoint(e); else if ("seriesModels" === i) {
                            var o = this._chartsMap[t.__viewId];
                            o && o.containPoint && (n = n || o.containPoint(e, t))
                        }
                    }, this)
                }, this), !!n
            }
        }, n.prototype.getVisual = function (t, e) {
            var n = this._model, i = sr(n, t, {defaultMainType: "series"}), r = i.seriesModel, o = r.getData(),
                a = i.hasOwnProperty("dataIndexInside") ? i.dataIndexInside : i.hasOwnProperty("dataIndex") ? o.indexOfRawIndex(i.dataIndex) : null;
            return null != a ? Gh(o, a, e) : Wh(o, e)
        }, n.prototype.getViewOfComponentModel = function (t) {
            return this._componentsMap[t.__viewId]
        }, n.prototype.getViewOfSeriesModel = function (t) {
            return this._chartsMap[t.__viewId]
        }, n.prototype._initEvents = function () {
            var t = this;
            y(fD, function (e) {
                var n = function (n) {
                    var i, r = t.getModel(), o = n.target, a = "globalout" === e;
                    if (a ? i = {} : o && jh(o, function (t) {
                        var e = rw(t);
                        if (e && null != e.dataIndex) {
                            var n = e.dataModel || r.getSeriesByIndex(e.seriesIndex);
                            return i = n && n.getDataParams(e.dataIndex, e.dataType) || {}, !0
                        }
                        return e.eventData ? (i = h({}, e.eventData), !0) : void 0
                    }, !0), i) {
                        var s = i.componentType, l = i.componentIndex;
                        ("markLine" === s || "markPoint" === s || "markArea" === s) && (s = "series", l = i.seriesIndex);
                        var u = s && null != l && r.getComponent(s, l),
                            c = u && t["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                        i.event = n, i.type = e, t._$eventProcessor.eventInfo = {
                            targetEl: o,
                            packedEvent: i,
                            model: u,
                            view: c
                        }, t.trigger(e, i)
                    }
                };
                n.zrEventfulCallAtLast = !0, t._zr.on(e, n, t)
            }), y(gD, function (e, n) {
                t._messageCenter.on(n, function (t) {
                    this.trigger(n, t)
                }, t)
            }), y(["selectchanged"], function (e) {
                t._messageCenter.on(e, function (t) {
                    this.trigger(e, t)
                }, t)
            }), Yh(this._messageCenter, this, this._api)
        }, n.prototype.isDisposed = function () {
            return this._disposed
        }, n.prototype.clear = function () {
            this._disposed || this.setOption({series: []}, !0)
        }, n.prototype.dispose = function () {
            if (!this._disposed) {
                this._disposed = !0, hr(this.getDom(), TD, "");
                var t = this, e = t._api, n = t._model;
                y(t._componentsViews, function (t) {
                    t.dispose(n, e)
                }), y(t._chartsViews, function (t) {
                    t.dispose(n, e)
                }), t._zr.dispose(), t._dom = t._model = t._chartsMap = t._componentsMap = t._chartsViews = t._componentsViews = t._scheduler = t._api = t._zr = t._throttledZrFlush = t._theme = t._coordSysMgr = t._messageCenter = null, delete bD[t.id]
            }
        }, n.prototype.resize = function (t) {
            if (!this._disposed) {
                this._zr.resize(t);
                var e = this._model;
                if (this._loadingFX && this._loadingFX.resize(), e) {
                    var n = e.resetOption("media"), i = t && t.silent;
                    this[NI] && (null == i && (i = this[NI].silent), n = !0, this[NI] = null), this[EI] = !0, n && YI(this), ZI.update.call(this, {
                        type: "resize",
                        animation: h({duration: 0}, t && t.animation)
                    }), this[EI] = !1, QI.call(this, i), tD.call(this, i)
                }
            }
        }, n.prototype.showLoading = function (t, e) {
            if (!this._disposed && (k(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), xD[t])) {
                var n = xD[t](this._api, e), i = this._zr;
                this._loadingFX = n, i.add(n)
            }
        }, n.prototype.hideLoading = function () {
            this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)
        }, n.prototype.makeActionFromEvent = function (t) {
            var e = h({}, t);
            return e.type = gD[t.type], e
        }, n.prototype.dispatchAction = function (t, e) {
            if (!this._disposed && (k(e) || (e = {silent: !!e}), dD[t.type] && this._model)) {
                if (this[EI]) return void this._pendingActions.push(t);
                var n = e.silent;
                JI.call(this, t, n);
                var i = e.flush;
                i ? this._zr.flush() : i !== !1 && sm.browser.weChat && this._throttledZrFlush(), QI.call(this, n), tD.call(this, n)
            }
        }, n.prototype.updateLabelLayout = function () {
            gI.trigger("series:layoutlabels", this._model, this._api, {updatedSeries: []})
        }, n.prototype.appendData = function (t) {
            if (!this._disposed) {
                var e = t.seriesIndex, n = this.getModel(), i = n.getSeriesByIndex(e);
                i.appendData(t), this._scheduler.unfinished = !0, this.getZr().wakeUp()
            }
        }, n.internalField = function () {
            function t(t) {
                for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
                    var r = n[i];
                    "emphasis" !== r && "blur" !== r && "select" !== r && e.push(r)
                }
                t.selected && t.states.select && e.push("select"), t.hoverState === cw && t.states.emphasis ? e.push("emphasis") : t.hoverState === hw && t.states.blur && e.push("blur"), t.useStates(e)
            }

            function n(t, e) {
                var n = t._zr, i = n.storage, r = 0;
                i.traverse(function (t) {
                    t.isGroup || r++
                }), r > e.get("hoverLayerThreshold") && !sm.node && !sm.worker && e.eachSeries(function (e) {
                    if (!e.preventUsingHoverLayer) {
                        var n = t._chartsMap[e.__viewId];
                        n.__alive && n.group.traverse(function (t) {
                            t.states.emphasis && (t.states.emphasis.hoverLayer = !0)
                        })
                    }
                })
            }

            function i(t, e) {
                var n = t.get("blendMode") || null;
                e.group.traverse(function (t) {
                    t.isGroup || (t.style.blend = n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                        t.style.blend = n
                    })
                })
            }

            function r(t, e) {
                t.preventAutoZ || o(e.group, t.get("z") || 0, t.get("zlevel") || 0, -1 / 0)
            }

            function o(t, e, n, i) {
                var r = t.getTextContent(), a = t.getTextGuideLine(), s = t.isGroup;
                if (s) for (var l = t.childrenRef(), u = 0; u < l.length; u++) i = Math.max(o(l[u], e, n, i), i); else t.z = e, t.zlevel = n, i = Math.max(t.z2, i);
                if (r && (r.z = e, r.zlevel = n, isFinite(i) && (r.z2 = i + 2)), a) {
                    var h = t.textGuideLineConfig;
                    a.z = e, a.zlevel = n, isFinite(i) && (a.z2 = i + (h && h.showAbove ? 1 : -1))
                }
                return i
            }

            function a(t, e) {
                e.group.traverse(function (t) {
                    if (!Ja(t)) {
                        var e = t.getTextContent(), n = t.getTextGuideLine();
                        t.stateTransition && (t.stateTransition = null), e && e.stateTransition && (e.stateTransition = null), n && n.stateTransition && (n.stateTransition = null), t.hasState() ? (t.prevStates = t.currentStates, t.clearStates()) : t.prevStates && (t.prevStates = null)
                    }
                })
            }

            function s(e, n) {
                var i = e.getModel("stateAnimation"), r = e.isAnimationEnabled(), o = i.get("duration"),
                    a = o > 0 ? {duration: o, delay: i.get("delay"), easing: i.get("easing")} : null;
                n.group.traverse(function (e) {
                    if (e.states && e.states.emphasis) {
                        if (Ja(e)) return;
                        if (e instanceof Gb && Da(e), e.__dirty) {
                            var n = e.prevStates;
                            n && e.useStates(n)
                        }
                        if (r) {
                            e.stateTransition = a;
                            var i = e.getTextContent(), o = e.getTextGuideLine();
                            i && (i.stateTransition = a), o && (o.stateTransition = a)
                        }
                        e.__dirty && t(e)
                    }
                })
            }

            YI = function (t) {
                var e = t._scheduler;
                e.restorePipelines(t._model), e.prepareStageTasks(), jI(t, !0), jI(t, !1), e.plan()
            }, jI = function (t, e) {
                function n(t) {
                    var n = t.__requireNewView;
                    t.__requireNewView = !1;
                    var u = "_ec_" + t.id + "_" + t.type, h = !n && a[u];
                    if (!h) {
                        var c = gr(t.type), p = e ? VT.getClass(c.main, c.sub) : WT.getClass(c.sub);
                        h = new p, h.init(i, l), a[u] = h, o.push(h), s.add(h.group)
                    }
                    t.__viewId = h.__id = u, h.__alive = !0, h.__model = t, h.group.__ecComponentInfo = {
                        mainType: t.mainType,
                        index: t.componentIndex
                    }, !e && r.prepareView(h, t, i, l)
                }

                for (var i = t._model, r = t._scheduler, o = e ? t._componentsViews : t._chartsViews, a = e ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
                e ? i.eachComponent(function (t, e) {
                    "series" !== t && n(e)
                }) : i.eachSeries(n);
                for (var u = 0; u < o.length;) {
                    var h = o[u];
                    h.__alive ? u++ : (!e && h.renderTask.dispose(), s.remove(h.group), h.dispose(i, l), o.splice(u, 1), a[h.__id] === h && delete a[h.__id], h.__id = h.group.__ecComponentInfo = null)
                }
            }, qI = function (t, e, n, i, r) {
                function o(i) {
                    i && i.__alive && i[e] && i[e](i.__model, a, t._api, n)
                }

                var a = t._model;
                if (a.setUpdatePayload(n), !i) return void y([].concat(t._componentsViews).concat(t._chartsViews), o);
                var s = {};
                s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
                var l = {mainType: i, query: s};
                r && (l.subType = r);
                var u, h = n.excludeSeriesId;
                null != h && (u = Y(), y(Hi(h), function (t) {
                    var e = tr(t, null);
                    null != e && u.set(e, !0)
                })), Ia(n) && ha(t._api), a && a.eachComponent(l, function (e) {
                    var i = u && null !== u.get(e.id);
                    if (!i) if (Ia(n)) if (e instanceof FT) n.type !== yw || n.notBlur || fa(e, n, t._api); else {
                        var r = da(e.mainType, e.componentIndex, n.name, t._api), o = r.focusSelf, a = r.dispatchers;
                        n.type === yw && o && !n.notBlur && pa(e.mainType, e.componentIndex, t._api), a && y(a, function (t) {
                            n.type === yw ? ia(t) : ra(t)
                        })
                    } else Ca(n) && e instanceof FT && (va(e, n, t._api), ma(e), uD(t))
                }, t), a && a.eachComponent(l, function (e) {
                    var n = u && null !== u.get(e.id);
                    n || o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
                }, t)
            }, ZI = {
                prepareAndUpdate: function (t) {
                    YI(this), ZI.update.call(this, t, {optionChanged: null != t.newOption})
                }, update: function (t, e) {
                    var n = this._model, i = this._api, r = this._zr, o = this._coordSysMgr, a = this._scheduler;
                    if (n) {
                        n.setUpdatePayload(t), a.restoreData(n, t), a.performSeriesTasks(n), o.create(n, i), a.performDataProcessorTasks(n, t), $I(this, n), o.update(n, i), iD(n), a.performVisualTasks(n, t), rD(this, n, i, t, e);
                        var s = n.get("backgroundColor") || "transparent", l = n.get("darkMode");
                        if (sm.canvasSupported) r.setBackgroundColor(s), null != l && "auto" !== l && r.setDarkMode(l); else {
                            var u = on(s);
                            s = dn(u, "rgb"), 0 === u[3] && (s = "transparent")
                        }
                        gI.trigger("afterupdate", n, i)
                    }
                }, updateTransform: function (t) {
                    var e = this, n = this._model, i = this._api;
                    if (n) {
                        n.setUpdatePayload(t);
                        var r = [];
                        n.eachComponent(function (o, a) {
                            if ("series" !== o) {
                                var s = e.getViewOfComponentModel(a);
                                if (s && s.__alive) if (s.updateTransform) {
                                    var l = s.updateTransform(a, n, i, t);
                                    l && l.update && r.push(s)
                                } else r.push(s)
                            }
                        });
                        var o = Y();
                        n.eachSeries(function (r) {
                            var a = e._chartsMap[r.__viewId];
                            if (a.updateTransform) {
                                var s = a.updateTransform(r, n, i, t);
                                s && s.update && o.set(r.uid, 1)
                            } else o.set(r.uid, 1)
                        }), iD(n), this._scheduler.performVisualTasks(n, t, {
                            setDirty: !0,
                            dirtyMap: o
                        }), aD(this, n, i, t, {}, o), gI.trigger("afterupdate", n, i)
                    }
                }, updateView: function (t) {
                    var e = this._model;
                    e && (e.setUpdatePayload(t), WT.markUpdateMethod(t, "updateView"), iD(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), rD(this, e, this._api, t, {}), gI.trigger("afterupdate", e, this._api))
                }, updateVisual: function (t) {
                    var e = this, n = this._model;
                    n && (n.setUpdatePayload(t), n.eachSeries(function (t) {
                        t.getData().clearAllVisual()
                    }), WT.markUpdateMethod(t, "updateVisual"), iD(n), this._scheduler.performVisualTasks(n, t, {
                        visualType: "visual",
                        setDirty: !0
                    }), n.eachComponent(function (i, r) {
                        if ("series" !== i) {
                            var o = e.getViewOfComponentModel(r);
                            o && o.__alive && o.updateVisual(r, n, e._api, t)
                        }
                    }), n.eachSeries(function (i) {
                        var r = e._chartsMap[i.__viewId];
                        r.updateVisual(i, n, e._api, t)
                    }), gI.trigger("afterupdate", n, this._api))
                }, updateLayout: function (t) {
                    ZI.update.call(this, t)
                }
            }, KI = function (t, e, n, i) {
                if (!t._disposed) for (var r, o = t._model, a = t._coordSysMgr.getCoordinateSystems(), s = sr(o, n), l = 0; l < a.length; l++) {
                    var u = a[l];
                    if (u[e] && null != (r = u[e](o, s, i))) return r
                }
            }, $I = function (t, e) {
                var n = t._chartsMap, i = t._scheduler;
                e.eachSeries(function (t) {
                    i.updateStreamModes(t, n[t.__viewId])
                })
            }, JI = function (t, e) {
                var n = this, i = this.getModel(), r = t.type, o = t.escapeConnect, a = dD[r], s = a.actionInfo,
                    l = (s.update || "update").split(":"), u = l.pop(), p = null != l[0] && gr(l[0]);
                this[EI] = !0;
                var f = [t], d = !1;
                t.batch && (d = !0, f = v(t.batch, function (e) {
                    return e = c(h({}, e), t), e.batch = null, e
                }));
                var g, m = [], _ = Ca(t), x = Ia(t);
                if (y(f, function (e) {
                    if (g = a.action(e, n._model, n._api), g = g || h({}, e), g.type = s.event || g.type, m.push(g), x) {
                        var i = lr(t), r = i.queryOptionMap, o = i.mainTypeSpecified, l = o ? r.keys()[0] : "series";
                        qI(n, u, e, l), uD(n)
                    } else _ ? (qI(n, u, e, "series"), uD(n)) : p && qI(n, u, e, p.main, p.sub)
                }), "none" === u || x || _ || p || (this[NI] ? (YI(this), ZI.update.call(this, t), this[NI] = null) : ZI[u].call(this, t)), g = d ? {
                    type: s.event || r,
                    escapeConnect: o,
                    batch: m
                } : m[0], this[EI] = !1, !e) {
                    var b = this._messageCenter;
                    if (b.trigger(g.type, g), _) {
                        var w = {
                            type: "selectchanged",
                            escapeConnect: o,
                            selected: _a(i),
                            isFromClick: t.isFromClick || !1,
                            fromAction: t.type,
                            fromActionPayload: t
                        };
                        b.trigger(w.type, w)
                    }
                }
            }, QI = function (t) {
                for (var e = this._pendingActions; e.length;) {
                    var n = e.shift();
                    JI.call(this, n, t)
                }
            }, tD = function (t) {
                !t && this.trigger("updated")
            }, eD = function (t, e) {
                t.on("rendered", function (n) {
                    e.trigger("rendered", n), !t.animation.isFinished() || e[NI] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
                })
            }, nD = function (t, e) {
                t.on("mouseover", function (t) {
                    var n = t.target, i = jh(n, Ma);
                    i && (ga(i, t, e._api), uD(e))
                }).on("mouseout", function (t) {
                    var n = t.target, i = jh(n, Ma);
                    i && (ya(i, t, e._api), uD(e))
                }).on("click", function (t) {
                    var n = t.target, i = jh(n, function (t) {
                        return null != rw(t).dataIndex
                    }, !0);
                    if (i) {
                        var r = i.selected ? "unselect" : "select", o = rw(i);
                        e._api.dispatchAction({
                            type: r,
                            dataType: o.dataType,
                            dataIndexInside: o.dataIndex,
                            seriesIndex: o.seriesIndex,
                            isFromClick: !0
                        })
                    }
                })
            }, iD = function (t) {
                t.clearColorPalette(), t.eachSeries(function (t) {
                    t.clearColorPalette()
                })
            }, rD = function (t, e, n, i, r) {
                oD(t, e, n, i, r), y(t._chartsViews, function (t) {
                    t.__alive = !1
                }), aD(t, e, n, i, r), y(t._chartsViews, function (t) {
                    t.__alive || t.remove(e, n)
                })
            }, oD = function (t, e, n, i, o, l) {
                y(l || t._componentsViews, function (t) {
                    var o = t.__model;
                    a(o, t), t.render(o, e, n, i), r(o, t), s(o, t)
                })
            }, aD = function (t, e, o, l, u, c) {
                var p = t._scheduler;
                u = h(u || {}, {updatedSeries: e.getSeries()}), gI.trigger("series:beforeupdate", e, o, u);
                var f = !1;
                e.eachSeries(function (e) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive = !0;
                    var r = n.renderTask;
                    p.updatePayload(r, l), a(e, n), c && c.get(e.uid) && r.dirty(), r.perform(p.getPerformArgs(r)) && (f = !0), n.group.silent = !!e.get("silent"), i(e, n), ma(e)
                }), p.unfinished = f || p.unfinished, gI.trigger("series:layoutlabels", e, o, u), gI.trigger("series:transition", e, o, u), e.eachSeries(function (e) {
                    var n = t._chartsMap[e.__viewId];
                    r(e, n), s(e, n)
                }), n(t, e), gI.trigger("series:afterupdate", e, o, u)
            }, uD = function (t) {
                t[BI] = !0, t.getZr().wakeUp()
            }, hD = function (e) {
                e[BI] && (e.getZr().storage.traverse(function (e) {
                    Ja(e) || t(e)
                }), e[BI] = !1)
            }, sD = function (t) {
                return new (function (n) {
                    function i() {
                        return null !== n && n.apply(this, arguments) || this
                    }

                    return e(i, n), i.prototype.getCoordinateSystems = function () {
                        return t._coordSysMgr.getCoordinateSystems()
                    }, i.prototype.getComponentByElement = function (e) {
                        for (; e;) {
                            var n = e.__ecComponentInfo;
                            if (null != n) return t._model.getComponent(n.mainType, n.index);
                            e = e.parent
                        }
                    }, i.prototype.enterEmphasis = function (e, n) {
                        ia(e, n), uD(t)
                    }, i.prototype.leaveEmphasis = function (e, n) {
                        ra(e, n), uD(t)
                    }, i.prototype.enterBlur = function (e) {
                        oa(e), uD(t)
                    }, i.prototype.leaveBlur = function (e) {
                        aa(e), uD(t)
                    }, i.prototype.enterSelect = function (e) {
                        sa(e), uD(t)
                    }, i.prototype.leaveSelect = function (e) {
                        la(e), uD(t)
                    }, i.prototype.getModel = function () {
                        return t.getModel()
                    }, i.prototype.getViewOfComponentModel = function (e) {
                        return t.getViewOfComponentModel(e)
                    }, i.prototype.getViewOfSeriesModel = function (e) {
                        return t.getViewOfSeriesModel(e)
                    }, i
                }($M))(t)
            }, lD = function (t) {
                function e(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i[VI] = e
                    }
                }

                y(gD, function (n, i) {
                    t._messageCenter.on(i, function (n) {
                        if (wD[t.group] && t[VI] !== HI) {
                            if (n && n.escapeConnect) return;
                            var i = t.makeActionFromEvent(n), r = [];
                            y(bD, function (e) {
                                e !== t && e.group === t.group && r.push(e)
                            }), e(r, HI), y(r, function (t) {
                                t[VI] !== GI && t.dispatchAction(i)
                            }), e(r, WI)
                        }
                    })
                })
            }
        }(), n
    }(Om), pD = cD.prototype;
    pD.on = op("on"), pD.off = op("off"), pD.one = function (t, e, n) {
        function i() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            e && e.apply && e.apply(this, n), r.off(t, i)
        }

        var r = this;
        this.on.call(this, t, i, n)
    };
    var fD = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"],
        dD = {}, gD = {}, yD = [], vD = [], mD = [], _D = {}, xD = {}, bD = {}, wD = {}, SD = +new Date - 0,
        MD = +new Date - 0, TD = "_echarts_instance_", CD = hp, ID = [], DD = Hu;
    Mp(II, JT), Mp(AI, tC), Mp(AI, eC), Mp(II, gC), Mp(AI, yC), Mp(RI, Ac), gp(gu), yp(bI, yu), Cp("default", Ph), xp({
        type: yw,
        event: yw,
        update: yw
    }, K), xp({type: vw, event: vw, update: vw}, K), xp({type: mw, event: mw, update: mw}, K), xp({
        type: _w,
        event: _w,
        update: _w
    }, K), xp({type: xw, event: xw, update: xw}, K), dp("light", lC), dp("dark", fC);
    var kD, AD, PD, LD, OD, RD, zD, ED = {}, ND = function () {
            function t(t, e, n, i, r, o) {
                this._old = t, this._new = e, this._oldKeyGetter = n || Pp, this._newKeyGetter = i || Pp, this.context = r, this._diffModeMultiple = "multiple" === o
            }

            return t.prototype.add = function (t) {
                return this._add = t, this
            }, t.prototype.update = function (t) {
                return this._update = t, this
            }, t.prototype.updateManyToOne = function (t) {
                return this._updateManyToOne = t, this
            }, t.prototype.updateOneToMany = function (t) {
                return this._updateOneToMany = t, this
            }, t.prototype.updateManyToMany = function (t) {
                return this._updateManyToMany = t, this
            }, t.prototype.remove = function (t) {
                return this._remove = t, this
            }, t.prototype.execute = function () {
                this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]()
            }, t.prototype._executeOneToOne = function () {
                var t = this._old, e = this._new, n = {}, i = new Array(t.length), r = new Array(e.length);
                this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, r, "_newKeyGetter");
                for (var o = 0; o < t.length; o++) {
                    var a = i[o], s = n[a], l = Ap(s);
                    if (l > 1) {
                        var u = s.shift();
                        1 === s.length && (n[a] = s[0]), this._update && this._update(u, o)
                    } else 1 === l ? (n[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o)
                }
                this._performRestAdd(r, n)
            }, t.prototype._executeMultiple = function () {
                var t = this._old, e = this._new, n = {}, i = {}, r = [], o = [];
                this._initIndexMap(t, n, r, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
                for (var a = 0; a < r.length; a++) {
                    var s = r[a], l = n[s], u = i[s], h = Ap(l), c = Ap(u);
                    if (h > 1 && 1 === c) this._updateManyToOne && this._updateManyToOne(u, l), i[s] = null; else if (1 === h && c > 1) this._updateOneToMany && this._updateOneToMany(u, l), i[s] = null; else if (1 === h && 1 === c) this._update && this._update(u, l), i[s] = null; else if (h > 1 && c > 1) this._updateManyToMany && this._updateManyToMany(u, l), i[s] = null; else if (h > 1) for (var p = 0; h > p; p++) this._remove && this._remove(l[p]); else this._remove && this._remove(l)
                }
                this._performRestAdd(o, i)
            }, t.prototype._performRestAdd = function (t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n], r = e[i], o = Ap(r);
                    if (o > 1) for (var a = 0; o > a; a++) this._add && this._add(r[a]); else 1 === o && this._add && this._add(r);
                    e[i] = null
                }
            }, t.prototype._initIndexMap = function (t, e, n, i) {
                for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
                    var a = "_ec_" + this[i](t[o], o);
                    if (r || (n[o] = a), e) {
                        var s = e[a], l = Ap(s);
                        0 === l ? (e[a] = o, r && n.push(a)) : 1 === l ? e[a] = [s, o] : s.push(o)
                    }
                }
            }, t
        }(), BD = function () {
            function t(t, e) {
                this._encode = t, this._schema = e
            }

            return t.prototype.get = function () {
                return {fullDimensions: this._getFullDimensionNames(), encode: this._encode}
            }, t.prototype._getFullDimensionNames = function () {
                return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames
            }, t
        }(), FD = function () {
            function t(t) {
                this.otherDims = {}, null != t && h(this, t)
            }

            return t
        }(), VD = ar(), HD = {"float": "f", "int": "i", ordinal: "o", number: "n", time: "t"}, GD = function () {
            function t(t) {
                this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted)
            }

            return t.prototype.isDimensionOmitted = function () {
                return this._dimOmitted
            }, t.prototype._updateDimOmitted = function (t) {
                this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Bp(this.source)))
            }, t.prototype.getSourceDimensionIndex = function (t) {
                return B(this._dimNameMap.get(t), -1)
            }, t.prototype.getSourceDimension = function (t) {
                var e = this.source.dimensionsDefine;
                return e ? e[t] : void 0
            }, t.prototype.makeStoreSchema = function () {
                for (var t = this._fullDimCount, e = Iu(this.source), n = !Fp(t), i = "", r = [], o = 0, a = 0; t > o; o++) {
                    var s = void 0, l = void 0, u = void 0, h = this.dimensions[a];
                    if (h && h.storeDimIndex === o) s = e ? h.name : null, l = h.type, u = h.ordinalMeta, a++; else {
                        var c = this.getSourceDimension(o);
                        c && (s = e ? c.name : null, l = c.type)
                    }
                    r.push({
                        property: s,
                        type: l,
                        ordinalMeta: u
                    }), !e || null == s || h && h.isCalculationCoord || (i += n ? s.replace(/\`/g, "`1").replace(/\$/g, "`2") : s), i += "$", i += HD[l] || "f", u && (i += u.uid), i += "$"
                }
                var p = this.source, f = [p.seriesLayoutBy, p.startIndex, i].join("$$");
                return {dimensions: r, hash: f}
            }, t.prototype.makeOutputDimensionNames = function () {
                for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
                    var i = void 0, r = this.dimensions[n];
                    if (r && r.storeDimIndex === e) r.isCalculationCoord || (i = r.name), n++; else {
                        var o = this.getSourceDimension(e);
                        o && (i = o.name)
                    }
                    t.push(i)
                }
                return t
            }, t.prototype.appendCalculationDimension = function (t) {
                this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0)
            }, t
        }(), WD = k, UD = v, XD = "undefined" == typeof Int32Array ? Array : Int32Array, YD = "e\x00\x00", jD = -1,
        qD = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"],
        ZD = ["_approximateExtent"], KD = function () {
            function t(t, e) {
                this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
                var n, i = !1;
                Ep(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
                for (var r = {}, o = [], a = {}, s = !1, l = {}, u = 0; u < n.length; u++) {
                    var h = n[u], c = C(h) ? new FD({name: h}) : h instanceof FD ? h : new FD(h), p = c.name;
                    c.type = c.type || "float", c.coordDim || (c.coordDim = p, c.coordDimIndex = 0);
                    var f = c.otherDims = c.otherDims || {};
                    o.push(p), r[p] = c, null != l[p] && (s = !0), c.createInvertedIndices && (a[p] = []), 0 === f.itemName && (this._nameDimIdx = u), 0 === f.itemId && (this._idDimIdx = u), i && (c.storeDimIndex = u)
                }
                if (this.dimensions = o, this._dimInfos = r, this._initGetDimensionInfo(s), this.hostModel = e, this._invertedIndicesMap = a, this._dimOmitted) {
                    var d = this._dimIdxToName = Y();
                    y(o, function (t) {
                        d.set(r[t].storeDimIndex, t)
                    })
                }
            }

            return t.prototype.getDimension = function (t) {
                var e = this._recognizeDimIndex(t);
                if (null == e) return t;
                if (e = t, !this._dimOmitted) return this.dimensions[e];
                var n = this._dimIdxToName.get(e);
                if (null != n) return n;
                var i = this._schema.getSourceDimension(e);
                return i ? i.name : void 0
            }, t.prototype.getDimensionIndex = function (t) {
                var e = this._recognizeDimIndex(t);
                if (null != e) return e;
                if (null == t) return -1;
                var n = this._getDimInfo(t);
                return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1
            }, t.prototype._recognizeDimIndex = function (t) {
                return "number" == typeof t || null != t && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0) ? +t : void 0
            }, t.prototype._getStoreDimIndex = function (t) {
                var e = this.getDimensionIndex(t);
                return e
            }, t.prototype.getDimensionInfo = function (t) {
                return this._getDimInfo(this.getDimension(t))
            }, t.prototype._initGetDimensionInfo = function (t) {
                var e = this._dimInfos;
                this._getDimInfo = t ? function (t) {
                    return e.hasOwnProperty(t) ? e[t] : void 0
                } : function (t) {
                    return e[t]
                }
            }, t.prototype.getDimensionsOnCoord = function () {
                return this._dimSummary.dataDimsOnCoord.slice()
            }, t.prototype.mapDimension = function (t, e) {
                var n = this._dimSummary;
                if (null == e) return n.encodeFirstDimNotExtra[t];
                var i = n.encode[t];
                return i ? i[e] : null
            }, t.prototype.mapDimensionsAll = function (t) {
                var e = this._dimSummary, n = e.encode[t];
                return (n || []).slice()
            }, t.prototype.getStore = function () {
                return this._store
            }, t.prototype.initData = function (t, e, n) {
                var i, r = this;
                if (t instanceof AT && (i = t), !i) {
                    var o = this.dimensions, a = mu(t) || g(t) ? new uT(t, o.length) : t;
                    i = new AT;
                    var s = UD(o, function (t) {
                        return {type: r._dimInfos[t].type, property: t}
                    });
                    i.initData(a, s, n)
                }
                this._store = i, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i.count()), this._dimSummary = Lp(this, this._schema), this.userOutput = this._dimSummary.userOutput
            }, t.prototype.appendData = function (t) {
                var e = this._store.appendData(t);
                this._doInit(e[0], e[1])
            }, t.prototype.appendValues = function (t, e) {
                var n = this._store.appendValues(t, e.length), i = n.start, r = n.end, o = this._shouldMakeIdFromName();
                if (this._updateOrdinalMeta(), e) for (var a = i; r > a; a++) {
                    var s = a - i;
                    this._nameList[a] = e[s], o && zD(this, a)
                }
            }, t.prototype._updateOrdinalMeta = function () {
                for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
                    var i = this._dimInfos[e[n]];
                    i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta)
                }
            }, t.prototype._shouldMakeIdFromName = function () {
                var t = this._store.getProvider();
                return null == this._idDimIdx && t.getSource().sourceFormat !== LM && !t.fillStorage
            }, t.prototype._doInit = function (t, e) {
                if (!(t >= e)) {
                    var n = this._store, i = n.getProvider();
                    this._updateOrdinalMeta();
                    var r = this._nameList, o = this._idList, a = i.getSource().sourceFormat, s = a === DM;
                    if (s && !i.pure) for (var l = [], u = t; e > u; u++) {
                        var h = i.getItem(u, l);
                        if (!this.hasItemOption && Ui(h) && (this.hasItemOption = !0), h) {
                            var c = h.name;
                            null == r[u] && null != c && (r[u] = tr(c, null));
                            var p = h.id;
                            null == o[u] && null != p && (o[u] = tr(p, null))
                        }
                    }
                    if (this._shouldMakeIdFromName()) for (var u = t; e > u; u++) zD(this, u);
                    kD(this)
                }
            }, t.prototype.getApproximateExtent = function (t) {
                return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t))
            }, t.prototype.setApproximateExtent = function (t, e) {
                e = this.getDimension(e), this._approximateExtent[e] = t.slice()
            }, t.prototype.getCalculationInfo = function (t) {
                return this._calculationInfo[t]
            }, t.prototype.setCalculationInfo = function (t, e) {
                WD(t) ? h(this._calculationInfo, t) : this._calculationInfo[t] = e
            }, t.prototype.getName = function (t) {
                var e = this.getRawIndex(t), n = this._nameList[e];
                return null == n && null != this._nameDimIdx && (n = PD(this, this._nameDimIdx, e)), null == n && (n = ""), n
            }, t.prototype._getCategory = function (t, e) {
                var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
                return i ? i.categories[n] : n
            }, t.prototype.getId = function (t) {
                return AD(this, this.getRawIndex(t))
            }, t.prototype.count = function () {
                return this._store.count()
            }, t.prototype.get = function (t, e) {
                var n = this._store, i = this._dimInfos[t];
                return i ? n.get(i.storeDimIndex, e) : void 0
            }, t.prototype.getByRawIndex = function (t, e) {
                var n = this._store, i = this._dimInfos[t];
                return i ? n.getByRawIndex(i.storeDimIndex, e) : void 0
            }, t.prototype.getIndices = function () {
                return this._store.getIndices()
            }, t.prototype.getDataExtent = function (t) {
                return this._store.getDataExtent(this._getStoreDimIndex(t))
            }, t.prototype.getSum = function (t) {
                return this._store.getSum(this._getStoreDimIndex(t))
            }, t.prototype.getMedian = function (t) {
                return this._store.getMedian(this._getStoreDimIndex(t))
            }, t.prototype.getValues = function (t, e) {
                var n = this, i = this._store;
                return M(t) ? i.getValues(UD(t, function (t) {
                    return n._getStoreDimIndex(t)
                }), e) : i.getValues(t)
            }, t.prototype.hasValue = function (t) {
                for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; i > n; n++) if (isNaN(this._store.get(e[n], t))) return !1;
                return !0
            }, t.prototype.indexOfName = function (t) {
                for (var e = 0, n = this._store.count(); n > e; e++) if (this.getName(e) === t) return e;
                return -1
            }, t.prototype.getRawIndex = function (t) {
                return this._store.getRawIndex(t)
            }, t.prototype.indexOfRawIndex = function (t) {
                return this._store.indexOfRawIndex(t)
            }, t.prototype.rawIndexOf = function (t, e) {
                var n = t && this._invertedIndicesMap[t], i = n[e];
                return null == i || isNaN(i) ? jD : i
            }, t.prototype.indicesOfNearest = function (t, e, n) {
                return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n)
            }, t.prototype.each = function (t, e, n) {
                "function" == typeof t && (n = e, e = t, t = []);
                var i = n || this, r = UD(LD(t), this._getStoreDimIndex, this);
                this._store.each(r, i ? wm(e, i) : e)
            }, t.prototype.filterSelf = function (t, e, n) {
                "function" == typeof t && (n = e, e = t, t = []);
                var i = n || this, r = UD(LD(t), this._getStoreDimIndex, this);
                return this._store = this._store.filter(r, i ? wm(e, i) : e), this
            }, t.prototype.selectRange = function (t) {
                var e = this, n = {}, i = b(t), r = [];
                return y(i, function (i) {
                    var o = e._getStoreDimIndex(i);
                    n[o] = t[i], r.push(o)
                }), this._store = this._store.selectRange(n), this
            }, t.prototype.mapArray = function (t, e, n) {
                "function" == typeof t && (n = e, e = t, t = []), n = n || this;
                var i = [];
                return this.each(t, function () {
                    i.push(e && e.apply(this, arguments))
                }, n), i
            }, t.prototype.map = function (t, e, n, i) {
                var r = n || i || this, o = UD(LD(t), this._getStoreDimIndex, this), a = RD(this);
                return a._store = this._store.map(o, r ? wm(e, r) : e), a
            }, t.prototype.modify = function (t, e, n, i) {
                var r = n || i || this, o = UD(LD(t), this._getStoreDimIndex, this);
                this._store.modify(o, r ? wm(e, r) : e)
            }, t.prototype.downSample = function (t, e, n, i) {
                var r = RD(this);
                return r._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), r
            }, t.prototype.lttbDownSample = function (t, e) {
                var n = RD(this);
                return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n
            }, t.prototype.getRawDataItem = function (t) {
                return this._store.getRawDataItem(t)
            }, t.prototype.getItemModel = function (t) {
                var e = this.hostModel, n = this.getRawDataItem(t);
                return new XS(n, e, e && e.ecModel)
            }, t.prototype.diff = function (t) {
                var e = this;
                return new ND(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function (e) {
                    return AD(t, e)
                }, function (t) {
                    return AD(e, t)
                })
            }, t.prototype.getVisual = function (t) {
                var e = this._visual;
                return e && e[t]
            }, t.prototype.setVisual = function (t, e) {
                this._visual = this._visual || {}, WD(t) ? h(this._visual, t) : this._visual[t] = e
            }, t.prototype.getItemVisual = function (t, e) {
                var n = this._itemVisuals[t], i = n && n[e];
                return null == i ? this.getVisual(e) : i
            }, t.prototype.hasItemVisual = function () {
                return this._itemVisuals.length > 0
            }, t.prototype.ensureUniqueItemVisual = function (t, e) {
                var n = this._itemVisuals, i = n[t];
                i || (i = n[t] = {});
                var r = i[e];
                return null == r && (r = this.getVisual(e), M(r) ? r = r.slice() : WD(r) && (r = h({}, r)), i[e] = r), r
            }, t.prototype.setItemVisual = function (t, e, n) {
                var i = this._itemVisuals[t] || {};
                this._itemVisuals[t] = i, WD(e) ? h(i, e) : i[e] = n
            }, t.prototype.clearAllVisual = function () {
                this._visual = {}, this._itemVisuals = []
            }, t.prototype.setLayout = function (t, e) {
                if (WD(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
            }, t.prototype.getLayout = function (t) {
                return this._layout[t]
            }, t.prototype.getItemLayout = function (t) {
                return this._itemLayouts[t]
            }, t.prototype.setItemLayout = function (t, e, n) {
                this._itemLayouts[t] = n ? h(this._itemLayouts[t] || {}, e) : e
            }, t.prototype.clearItemLayouts = function () {
                this._itemLayouts.length = 0
            }, t.prototype.setItemGraphicEl = function (t, e) {
                var n = this.hostModel && this.hostModel.seriesIndex;
                ow(n, this.dataType, t, e), this._graphicEls[t] = e
            }, t.prototype.getItemGraphicEl = function (t) {
                return this._graphicEls[t]
            }, t.prototype.eachItemGraphicEl = function (t, e) {
                y(this._graphicEls, function (n, i) {
                    n && t && t.call(e, n, i)
                })
            }, t.prototype.cloneShallow = function (e) {
                return e || (e = new t(this._schema ? this._schema : UD(this.dimensions, this._getDimInfo, this), this.hostModel)), OD(e, this), e._store = this._store, e
            }, t.prototype.wrapMethod = function (t, e) {
                var n = this[t];
                "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                    var t = n.apply(this, arguments);
                    return e.apply(this, [t].concat(V(arguments)))
                })
            }, t.internalField = function () {
                kD = function (t) {
                    var e = t._invertedIndicesMap;
                    y(e, function (n, i) {
                        var r = t._dimInfos[i], o = r.ordinalMeta, a = t._store;
                        if (o) {
                            n = e[i] = new XD(o.categories.length);
                            for (var s = 0; s < n.length; s++) n[s] = jD;
                            for (var s = 0; s < a.count(); s++) n[a.get(r.storeDimIndex, s)] = s
                        }
                    })
                }, PD = function (t, e, n) {
                    return tr(t._getCategory(e, n), null)
                }, AD = function (t, e) {
                    var n = t._idList[e];
                    return null == n && null != t._idDimIdx && (n = PD(t, t._idDimIdx, e)), null == n && (n = YD + e), n
                }, LD = function (t) {
                    return M(t) || (t = null != t ? [t] : []), t
                }, RD = function (e) {
                    var n = new t(e._schema ? e._schema : UD(e.dimensions, e._getDimInfo, e), e.hostModel);
                    return OD(n, e), n
                }, OD = function (t, e) {
                    y(qD.concat(e.__wrappedMethods || []), function (n) {
                        e.hasOwnProperty(n) && (t[n] = e[n])
                    }), t.__wrappedMethods = e.__wrappedMethods, y(ZD, function (n) {
                        t[n] = s(e[n])
                    }), t._calculationInfo = h({}, e._calculationInfo)
                }, zD = function (t, e) {
                    var n = t._nameList, i = t._idList, r = t._nameDimIdx, o = t._idDimIdx, a = n[e], s = i[e];
                    if (null == a && null != r && (n[e] = a = PD(t, r, e)), null == s && null != o && (i[e] = s = PD(t, o, e)), null == s && null != a) {
                        var l = t._nameRepeatCount, u = l[a] = (l[a] || 0) + 1;
                        s = a, u > 1 && (s += "__ec__" + u), i[e] = s
                    }
                }
            }(), t
        }(), $D = function () {
            function t(t) {
                this.coordSysDims = [], this.axisMap = Y(), this.categoryAxisMap = Y(), this.coordSysName = t
            }

            return t
        }(), JD = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis", Ix).models[0],
                    o = t.getReferringComponents("yAxis", Ix).models[0];
                e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", o), Yp(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Yp(o) && (i.set("y", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
            }, singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis", Ix).models[0];
                e.coordSysDims = ["single"], n.set("single", r), Yp(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
            }, polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar", Ix).models[0], o = r.findAxisModel("radiusAxis"),
                    a = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", a), Yp(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), Yp(a) && (i.set("angle", a), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
            }, geo: function (t, e) {
                e.coordSysDims = ["lng", "lat"]
            }, parallel: function (t, e, n, i) {
                var r = t.ecModel, o = r.getComponent("parallel", t.get("parallelIndex")),
                    a = e.coordSysDims = o.dimensions.slice();
                y(o.parallelAxisIndex, function (t, o) {
                    var s = r.getComponent("parallelAxis", t), l = a[o];
                    n.set(l, s), Yp(s) && (i.set(l, s), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = o))
                })
            }
        }, QD = function () {
            function t(t) {
                this._setting = t || {}, this._extent = [1 / 0, -1 / 0]
            }

            return t.prototype.getSetting = function (t) {
                return this._setting[t]
            }, t.prototype.unionExtent = function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
            }, t.prototype.unionExtentFromData = function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, t.prototype.getExtent = function () {
                return this._extent.slice()
            }, t.prototype.setExtent = function (t, e) {
                var n = this._extent;
                isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
            }, t.prototype.isInExtentRange = function (t) {
                return this._extent[0] <= t && this._extent[1] >= t
            }, t.prototype.isBlank = function () {
                return this._isBlank
            }, t.prototype.setBlank = function (t) {
                this._isBlank = t
            }, t
        }();
    Mr(QD);
    var tk = 0, ek = function () {
        function t(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++tk
        }

        return t.createByAxisModel = function (e) {
            var n = e.option, i = n.data, r = i && v(i, nf);
            return new t({categories: r, needCollect: !r, deduplication: n.dedplication !== !1})
        }, t.prototype.getOrdinal = function (t) {
            return this._getOrCreateMap().get(t)
        }, t.prototype.parseAndCollect = function (t) {
            var e, n = this._needCollect;
            if ("string" != typeof t && !n) return t;
            if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
            var i = this._getOrCreateMap();
            return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
        }, t.prototype._getOrCreateMap = function () {
            return this._map || (this._map = Y(this.categories))
        }, t
    }(), nk = xi, ik = function (t) {
        function n(e) {
            var n = t.call(this, e) || this;
            n.type = "ordinal";
            var i = n.getSetting("ordinalMeta");
            return i || (i = new ek({})), M(i) && (i = new ek({
                categories: v(i, function (t) {
                    return k(t) ? t.value : t
                })
            })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n
        }

        return e(n, t), n.prototype.parse = function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, n.prototype.contain = function (t) {
            return t = this.parse(t), lf(t, this._extent) && null != this._ordinalMeta.categories[t]
        }, n.prototype.normalize = function (t) {
            return t = this._getTickNumber(this.parse(t)), uf(t, this._extent)
        }, n.prototype.scale = function (t) {
            return t = Math.round(hf(t, this._extent)), this.getRawOrdinalNumber(t)
        }, n.prototype.getTicks = function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push({value: n}), n++;
            return t
        }, n.prototype.getMinorTicks = function () {
        }, n.prototype.setSortInfo = function (t) {
            if (null == t) return void (this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null);
            for (var e = t.ordinalNumbers, n = this._ordinalNumbersByTick = [], i = this._ticksByOrdinalNumber = [], r = 0, o = this._ordinalMeta.categories.length, a = Math.min(o, e.length); a > r; ++r) {
                var s = e[r];
                n[r] = s, i[s] = r
            }
            for (var l = 0; o > r; ++r) {
                for (; null != i[l];) l++;
                n.push(l), i[l] = r
            }
        }, n.prototype._getTickNumber = function (t) {
            var e = this._ticksByOrdinalNumber;
            return e && t >= 0 && t < e.length ? e[t] : t
        }, n.prototype.getRawOrdinalNumber = function (t) {
            var e = this._ordinalNumbersByTick;
            return e && t >= 0 && t < e.length ? e[t] : t
        }, n.prototype.getLabel = function (t) {
            if (!this.isBlank()) {
                var e = this.getRawOrdinalNumber(t.value), n = this._ordinalMeta.categories[e];
                return null == n ? "" : n + ""
            }
        }, n.prototype.count = function () {
            return this._extent[1] - this._extent[0] + 1
        }, n.prototype.unionExtentFromData = function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, n.prototype.isInExtentRange = function (t) {
            return t = this._getTickNumber(t), this._extent[0] <= t && this._extent[1] >= t
        }, n.prototype.getOrdinalMeta = function () {
            return this._ordinalMeta
        }, n.prototype.niceTicks = function () {
        }, n.prototype.niceExtent = function () {
        }, n.type = "ordinal", n
    }(QD);
    QD.registerClass(ik);
    var rk = xi, ok = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e
        }

        return e(n, t), n.prototype.parse = function (t) {
            return t
        }, n.prototype.contain = function (t) {
            return lf(t, this._extent)
        }, n.prototype.normalize = function (t) {
            return uf(t, this._extent)
        }, n.prototype.scale = function (t) {
            return hf(t, this._extent)
        }, n.prototype.setExtent = function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
        }, n.prototype.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), this.setExtent(e[0], e[1])
        }, n.prototype.getInterval = function () {
            return this._interval
        }, n.prototype.setInterval = function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = of(t)
        }, n.prototype.getTicks = function (t) {
            var e = this._interval, n = this._extent, i = this._niceExtent, r = this._intervalPrecision, o = [];
            if (!e) return o;
            var a = 1e4;
            n[0] < i[0] && o.push(t ? {value: rk(i[0] - e, r)} : {value: n[0]});
            for (var s = i[0]; s <= i[1] && (o.push({value: s}), s = rk(s + e, r), s !== o[o.length - 1].value);) if (o.length > a) return [];
            var l = o.length ? o[o.length - 1].value : i[1];
            return n[1] > l && o.push(t ? {value: rk(l + e, r)} : {value: n[1]}), o
        }, n.prototype.getMinorTicks = function (t) {
            for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
                for (var o = e[r], a = e[r - 1], s = 0, l = [], u = o.value - a.value, h = u / t; t - 1 > s;) {
                    var c = rk(a.value + (s + 1) * h);
                    c > i[0] && c < i[1] && l.push(c), s++
                }
                n.push(l)
            }
            return n
        }, n.prototype.getLabel = function (t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            null == n ? n = wi(t.value) || 0 : "auto" === n && (n = this._intervalPrecision);
            var i = rk(t.value, n, !0);
            return gl(i)
        }, n.prototype.niceTicks = function (t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                0 > r && (r = -r, i.reverse());
                var o = rf(i, t, e, n);
                this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
            }
        }, n.prototype.niceExtent = function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = rk(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = rk(Math.ceil(e[1] / r) * r))
        }, n.type = "interval", n
    }(QD);
    QD.registerClass(ok);
    var ak = "__ec_stack_", sk = .5, lk = "undefined" != typeof Float32Array ? Float32Array : Array, uk = ({
            seriesType: "bar", plan: wh(), reset: function (t) {
                if (mf(t) && _f(t)) {
                    var e = t.getData(), n = t.coordinateSystem, i = n.master.getRect(), r = n.getBaseAxis(),
                        o = n.getOtherAxis(r), a = e.getDimensionIndex(e.mapDimension(o.dim)),
                        s = e.getDimensionIndex(e.mapDimension(r.dim)), l = o.isHorizontal(), u = l ? 0 : 1,
                        h = vf(gf([t]), r, t).width;
                    return h > sk || (h = sk), {
                        progress: function (t, e) {
                            for (var c, p = t.count, f = new lk(2 * p), d = new lk(2 * p), g = new lk(p), y = [], v = [], m = 0, _ = 0, x = e.getStore(); null != (c = t.next());) v[u] = x.get(a, c), v[1 - u] = x.get(s, c), y = n.dataToPoint(v, null), d[m] = l ? i.x + i.width : y[0], f[m++] = y[0], d[m] = l ? y[1] : i.y + i.height, f[m++] = y[1], g[_++] = c;
                            e.setLayout({
                                largePoints: f,
                                largeDataIndices: g,
                                largeBackgroundPoints: d,
                                barWidth: h,
                                valueAxisStart: xf(r, o, !1),
                                backgroundStart: l ? i.x : i.y,
                                valueAxisHorizontal: l
                            })
                        }
                    }
                }
            }
        }, function (t, e, n, i) {
            for (; i > n;) {
                var r = n + i >>> 1;
                t[r][1] < e ? n = r + 1 : i = r
            }
            return n
        }), hk = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.type = "time", n
            }

            return e(n, t), n.prototype.getLabel = function (t) {
                var e = this.getSetting("useUTC");
                return Ks(t.value, lM[Zs(js(this._minLevelUnit))] || lM.second, e, this.getSetting("locale"))
            }, n.prototype.getFormattedLabel = function (t, e, n) {
                var i = this.getSetting("useUTC"), r = this.getSetting("locale");
                return $s(t, e, n, r, i)
            }, n.prototype.getTicks = function () {
                var t = this._interval, e = this._extent, n = [];
                if (!t) return n;
                n.push({value: e[0], level: 0});
                var i = this.getSetting("useUTC"), r = Df(this._minLevelUnit, this._approxInterval, i, e);
                return n = n.concat(r), n.push({value: e[1], level: 0}), n
            }, n.prototype.niceExtent = function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= rM, e[1] += rM), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                    var n = new Date;
                    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - rM
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval)
            }, n.prototype.niceTicks = function (t, e, n) {
                t = t || 10;
                var i = this._extent, r = i[1] - i[0];
                this._approxInterval = r / t, null != e && this._approxInterval < e && (this._approxInterval = e), null != n && this._approxInterval > n && (this._approxInterval = n);
                var o = ck.length, a = Math.min(uk(ck, this._approxInterval, 0, o), o - 1);
                this._interval = ck[a][1], this._minLevelUnit = ck[Math.max(a - 1, 0)][0]
            }, n.prototype.parse = function (t) {
                return "number" == typeof t ? t : +ki(t)
            }, n.prototype.contain = function (t) {
                return lf(this.parse(t), this._extent)
            }, n.prototype.normalize = function (t) {
                return uf(this.parse(t), this._extent)
            }, n.prototype.scale = function (t) {
                return hf(t, this._extent)
            }, n.type = "time", n
        }(ok),
        ck = [["second", eM], ["minute", nM], ["hour", iM], ["quarter-day", 6 * iM], ["half-day", 12 * iM], ["day", 1.2 * rM], ["half-week", 3.5 * rM], ["week", 7 * rM], ["month", 31 * rM], ["quarter", 95 * rM], ["half-year", oM / 2], ["year", oM]];
    QD.registerClass(hk);
    var pk = QD.prototype, fk = ok.prototype, dk = xi, gk = Math.floor, yk = Math.ceil, vk = Math.pow, mk = Math.log,
        _k = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "log", e.base = 10, e._originalScale = new ok, e._interval = 0, e
            }

            return e(n, t), n.prototype.getTicks = function (t) {
                var e = this._originalScale, n = this._extent, i = e.getExtent(), r = fk.getTicks.call(this, t);
                return v(r, function (t) {
                    var e = t.value, r = xi(vk(this.base, e));
                    return r = e === n[0] && this._fixMin ? kf(r, i[0]) : r, r = e === n[1] && this._fixMax ? kf(r, i[1]) : r, {value: r}
                }, this)
            }, n.prototype.setExtent = function (t, e) {
                var n = this.base;
                t = mk(t) / mk(n), e = mk(e) / mk(n), fk.setExtent.call(this, t, e)
            }, n.prototype.getExtent = function () {
                var t = this.base, e = pk.getExtent.call(this);
                e[0] = vk(t, e[0]), e[1] = vk(t, e[1]);
                var n = this._originalScale, i = n.getExtent();
                return this._fixMin && (e[0] = kf(e[0], i[0])), this._fixMax && (e[1] = kf(e[1], i[1])), e
            }, n.prototype.unionExtent = function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = mk(t[0]) / mk(e), t[1] = mk(t[1]) / mk(e), pk.unionExtent.call(this, t)
            }, n.prototype.unionExtentFromData = function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, n.prototype.niceTicks = function (t) {
                t = t || 10;
                var e = this._extent, n = e[1] - e[0];
                if (!(1 / 0 === n || 0 >= n)) {
                    var i = Ai(n), r = t / n * i;
                    for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var o = [xi(yk(e[0] / i) * i), xi(gk(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = o
                }
            }, n.prototype.niceExtent = function (t) {
                fk.niceExtent.call(this, t), this._fixMin = t.fixMin, this._fixMax = t.fixMax
            }, n.prototype.parse = function (t) {
                return t
            }, n.prototype.contain = function (t) {
                return t = mk(t) / mk(this.base), lf(t, this._extent)
            }, n.prototype.normalize = function (t) {
                return t = mk(t) / mk(this.base), uf(t, this._extent)
            }, n.prototype.scale = function (t) {
                return t = hf(t, this._extent), vk(this.base, t)
            }, n.type = "log", n
        }(QD), xk = _k.prototype;
    xk.getMinorTicks = fk.getMinorTicks, xk.getLabel = fk.getLabel, QD.registerClass(_k);
    var bk = function () {
            function t(t, e, n) {
                this._prepareParams(t, e, n)
            }

            return t.prototype._prepareParams = function (t, e, n) {
                n[1] < n[0] && (n = [0 / 0, 0 / 0]), this._dataMin = n[0], this._dataMax = n[1];
                var i = this._isOrdinal = "ordinal" === t.type;
                this._needCrossZero = e.getNeedCrossZero && e.getNeedCrossZero();
                var r = this._modelMinRaw = e.get("min", !0);
                T(r) ? this._modelMinNum = Pf(t, r({
                    min: n[0],
                    max: n[1]
                })) : "dataMin" !== r && (this._modelMinNum = Pf(t, r));
                var o = this._modelMaxRaw = e.get("max", !0);
                if (T(o) ? this._modelMaxNum = Pf(t, o({
                    min: n[0],
                    max: n[1]
                })) : "dataMax" !== o && (this._modelMaxNum = Pf(t, o)), i) this._axisDataLen = e.getCategories().length; else {
                    var a = e.get("boundaryGap"), s = M(a) ? a : [a || 0, a || 0];
                    this._boundaryGapInner = "boolean" == typeof s[0] || "boolean" == typeof s[1] ? [0, 0] : [ii(s[0], 1), ii(s[1], 1)]
                }
            }, t.prototype.calculate = function () {
                var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen,
                    r = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e),
                    a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum,
                    s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum, l = null != a, u = null != s;
                null == a && (a = t ? i ? 0 : 0 / 0 : e - r[0] * o), null == s && (s = t ? i ? i - 1 : 0 / 0 : n + r[1] * o), (null == a || !isFinite(a)) && (a = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0);
                var h = E(a) || E(s) || t && !i;
                this._needCrossZero && (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !u && (s = 0));
                var c = this._determinedMin, p = this._determinedMax;
                return null != c && (a = c, l = !0), null != p && (s = p, u = !0), {
                    min: a,
                    max: s,
                    minFixed: l,
                    maxFixed: u,
                    isBlank: h
                }
            }, t.prototype.modifyDataMinMax = function (t, e) {
                this[Sk[t]] = e
            }, t.prototype.setDeterminedMinMax = function (t, e) {
                var n = wk[t];
                this[n] = e
            }, t.prototype.freeze = function () {
                this.frozen = !0
            }, t
        }(), wk = {min: "_determinedMin", max: "_determinedMax"}, Sk = {min: "_dataMin", max: "_dataMax"},
        Mk = function () {
            function t() {
            }

            return t.prototype.getNeedCrossZero = function () {
                var t = this.option;
                return !t.scale
            }, t.prototype.getCoordSysModel = function () {
            }, t
        }(), Tk = {isDimensionStacked: Zp, enableDataStack: jp, getStackedDimension: Kp},
        Ck = (Object.freeze || Object)({
            createList: Uf,
            getLayoutRect: Cl,
            dataStack: Tk,
            createScale: Xf,
            mixinAxisModelCommonMethods: Yf,
            getECData: rw,
            createTextStyle: jf,
            createDimensions: Vp,
            createSymbol: Zh,
            enableHoverEmphasis: xa
        }), Ik = [], Dk = {
            registerPreprocessor: gp,
            registerProcessor: yp,
            registerPostInit: vp,
            registerPostUpdate: mp,
            registerUpdateLifecycle: _p,
            registerAction: xp,
            registerCoordinateSystem: bp,
            registerLayout: Sp,
            registerVisual: Mp,
            registerTransform: DD,
            registerLoading: Cp,
            registerMap: Dp,
            PRIORITY: zI,
            ComponentModel: bM,
            ComponentView: VT,
            SeriesModel: FT,
            ChartView: WT,
            registerComponentModel: function (t) {
                bM.registerClass(t)
            },
            registerComponentView: function (t) {
                VT.registerClass(t)
            },
            registerSeriesModel: function (t) {
                FT.registerClass(t)
            },
            registerChartView: function (t) {
                WT.registerClass(t)
            },
            registerSubTypeDefaulter: function (t, e) {
                bM.registerSubTypeDefaulter(t, e)
            },
            registerPainter: function (t, e) {
                yi(t, e)
            }
        }, kk = (Object.freeze || Object)({
            linearMap: mi,
            round: xi,
            asc: bi,
            getPrecision: wi,
            getPrecisionSafe: Si,
            getPixelPrecision: Mi,
            getPercentWithPrecision: Ti,
            MAX_SAFE_INTEGER: xx,
            remRadian: Ii,
            isRadianAroundZero: Di,
            parseDate: ki,
            quantity: Ai,
            quantityExponent: Pi,
            nice: Li,
            quantile: Oi,
            reformIntervals: Ri,
            isNumeric: Ei,
            numericToNumber: zi
        }), Ak = (Object.freeze || Object)({parse: ki, format: Ks}), Pk = (Object.freeze || Object)({
            extendShape: is,
            extendPath: rs,
            makePath: ss,
            makeImage: ls,
            mergePath: DS,
            resizePath: hs,
            createIcon: bs,
            updateProps: Ka,
            initProps: $a,
            getTransform: fs,
            clipPointsByRect: _s,
            clipRectByRect: xs,
            registerShape: os,
            getShapeClass: as,
            Group: cx,
            Image: jb,
            Text: ew,
            Circle: Ew,
            Ellipse: Bw,
            Sector: $w,
            Ring: Qw,
            Polygon: eS,
            Polyline: iS,
            Rect: $b,
            Line: aS,
            BezierCurve: uS,
            Arc: cS,
            IncrementalDisplayable: wS,
            CompoundPath: pS,
            LinearGradient: dS,
            RadialGradient: gS,
            BoundingRect: ex
        }), Lk = (Object.freeze || Object)({
            addCommas: gl,
            toCamelCase: yl,
            normalizeCssArray: cM,
            encodeHTML: vl,
            formatTpl: _l,
            getTooltipMarker: xl,
            formatTime: bl,
            capitalFirst: wl,
            truncateText: Ar,
            getTextRect: dl
        }), Ok = (Object.freeze || Object)({
            map: v,
            each: y,
            indexOf: p,
            inherits: f,
            reduce: m,
            filter: _,
            bind: wm,
            curry: S,
            isArray: M,
            isString: C,
            isObject: k,
            isFunction: T,
            extend: h,
            defaults: c,
            clone: s,
            merge: l
        }), Rk = ar(), zk = [0, 1], Ek = function () {
            function t(t, e, n) {
                this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0]
            }

            return t.prototype.contain = function (t) {
                var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
                return t >= n && i >= t
            }, t.prototype.containData = function (t) {
                return this.scale.contain(t)
            }, t.prototype.getExtent = function () {
                return this._extent.slice()
            }, t.prototype.getPixelPrecision = function (t) {
                return Mi(t || this.scale.getExtent(), this._extent)
            }, t.prototype.setExtent = function (t, e) {
                var n = this._extent;
                n[0] = t, n[1] = e
            }, t.prototype.dataToCoord = function (t, e) {
                var n = this._extent, i = this.scale;
                return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), ud(n, i.count())), mi(t, zk, n, e)
            }, t.prototype.coordToData = function (t, e) {
                var n = this._extent, i = this.scale;
                this.onBand && "ordinal" === i.type && (n = n.slice(), ud(n, i.count()));
                var r = mi(t, n, zk, e);
                return this.scale.scale(r)
            }, t.prototype.pointToData = function () {
            }, t.prototype.getTicksCoords = function (t) {
                t = t || {};
                var e = t.tickModel || this.getTickModel(), n = Kf(this, e), i = n.ticks, r = v(i, function (t) {
                    return {
                        coord: this.dataToCoord("ordinal" === this.scale.type ? this.scale.getRawOrdinalNumber(t) : t),
                        tickValue: t
                    }
                }, this), o = e.get("alignWithLabel");
                return hd(this, r, o, t.clamp), r
            }, t.prototype.getMinorTicksCoords = function () {
                if ("ordinal" === this.scale.type) return [];
                var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
                e > 0 && 100 > e || (e = 5);
                var n = this.scale.getMinorTicks(e), i = v(n, function (t) {
                    return v(t, function (t) {
                        return {coord: this.dataToCoord(t), tickValue: t}
                    }, this)
                }, this);
                return i
            }, t.prototype.getViewLabels = function () {
                return Zf(this).labels
            }, t.prototype.getLabelModel = function () {
                return this.model.getModel("axisLabel")
            }, t.prototype.getTickModel = function () {
                return this.model.getModel("axisTick")
            }, t.prototype.getBandWidth = function () {
                var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === n && (n = 1);
                var i = Math.abs(t[1] - t[0]);
                return Math.abs(i) / n
            }, t.prototype.calculateCategoryInterval = function () {
                return od(this)
            }, t
        }(), Nk = 2 * Math.PI, Bk = Pb.CMD, Fk = ["top", "right", "bottom", "left"], Vk = [], Hk = new Y_, Gk = new Y_,
        Wk = new Y_, Uk = new Y_, Xk = new Y_, Yk = [], jk = new Y_,
        qk = ["align", "verticalAlign", "width", "height", "fontSize"], Zk = new U_, Kk = ar(), $k = ar(),
        Jk = ["x", "y", "rotation"], Qk = function () {
            function t() {
                this._labelList = [], this._chartViewList = []
            }

            return t.prototype.clearLabels = function () {
                this._labelList = [], this._chartViewList = []
            }, t.prototype._addLabel = function (t, e, n, i, r) {
                var o = i.style, a = i.__hostTarget, s = a.textConfig || {}, l = i.getComputedTransform(),
                    u = i.getBoundingRect().plain();
                ex.applyTransform(u, u, l), l ? Zk.setLocalTransform(l) : (Zk.x = Zk.y = Zk.rotation = Zk.originX = Zk.originY = 0, Zk.scaleX = Zk.scaleY = 1);
                var h, c = i.__hostTarget;
                if (c) {
                    h = c.getBoundingRect().plain();
                    var p = c.getComputedTransform();
                    ex.applyTransform(h, h, p)
                }
                var f = h && c.getTextGuideLine();
                this._labelList.push({
                    label: i,
                    labelLine: f,
                    seriesModel: n,
                    dataIndex: t,
                    dataType: e,
                    layoutOption: r,
                    computedLayoutOption: null,
                    rect: u,
                    hostRect: h,
                    priority: h ? h.width * h.height : 0,
                    defaultAttr: {
                        ignore: i.ignore,
                        labelGuideIgnore: f && f.ignore,
                        x: Zk.x,
                        y: Zk.y,
                        scaleX: Zk.scaleX,
                        scaleY: Zk.scaleY,
                        rotation: Zk.rotation,
                        style: {
                            x: o.x,
                            y: o.y,
                            align: o.align,
                            verticalAlign: o.verticalAlign,
                            width: o.width,
                            height: o.height,
                            fontSize: o.fontSize
                        },
                        cursor: i.cursor,
                        attachedPos: s.position,
                        attachedRot: s.rotation
                    }
                })
            }, t.prototype.addLabelsOfSeries = function (t) {
                var e = this;
                this._chartViewList.push(t);
                var n = t.__model, i = n.get("labelLayout");
                (T(i) || b(i).length) && t.group.traverse(function (t) {
                    if (t.ignore) return !0;
                    var r = t.getTextContent(), o = rw(t);
                    r && !r.disableLabelLayout && e._addLabel(o.dataIndex, o.dataType, n, r, i)
                })
            }, t.prototype.updateLayoutConfig = function (t) {
                function e(t, e) {
                    return function () {
                        bd(t, e)
                    }
                }

                for (var n = t.getWidth(), i = t.getHeight(), r = 0; r < this._labelList.length; r++) {
                    var o = this._labelList[r], a = o.label, s = a.__hostTarget, l = o.defaultAttr, u = void 0;
                    u = "function" == typeof o.layoutOption ? o.layoutOption(Rd(o, s)) : o.layoutOption, u = u || {}, o.computedLayoutOption = u;
                    var h = Math.PI / 180;
                    s && s.setTextConfig({
                        local: !1,
                        position: null != u.x || null != u.y ? null : l.attachedPos,
                        rotation: null != u.rotate ? u.rotate * h : l.attachedRot,
                        offset: [u.dx || 0, u.dy || 0]
                    });
                    var c = !1;
                    if (null != u.x ? (a.x = _i(u.x, n), a.setStyle("x", 0), c = !0) : (a.x = l.x, a.setStyle("x", l.style.x)), null != u.y ? (a.y = _i(u.y, i), a.setStyle("y", 0), c = !0) : (a.y = l.y, a.setStyle("y", l.style.y)), u.labelLinePoints) {
                        var p = s.getTextGuideLine();
                        p && (p.setShape({points: u.labelLinePoints}), c = !1)
                    }
                    var f = Kk(a);
                    f.needsUpdateLabelLine = c, a.rotation = null != u.rotate ? u.rotate * h : l.rotation, a.scaleX = l.scaleX, a.scaleY = l.scaleY;
                    for (var d = 0; d < qk.length; d++) {
                        var g = qk[d];
                        a.setStyle(g, null != u[g] ? u[g] : l.style[g])
                    }
                    if (u.draggable) {
                        if (a.draggable = !0, a.cursor = "move", s) {
                            var y = o.seriesModel;
                            if (null != o.dataIndex) {
                                var v = o.seriesModel.getData(o.dataType);
                                y = v.getItemModel(o.dataIndex)
                            }
                            a.on("drag", e(s, y.getModel("labelLine")))
                        }
                    } else a.off("drag"), a.cursor = l.cursor
                }
            }, t.prototype.layout = function (t) {
                var e = t.getWidth(), n = t.getHeight(), i = Dd(this._labelList), r = _(i, function (t) {
                    return "shiftX" === t.layoutOption.moveOverlap
                }), o = _(i, function (t) {
                    return "shiftY" === t.layoutOption.moveOverlap
                });
                Ad(r, 0, e), Pd(o, 0, n);
                var a = _(i, function (t) {
                    return t.layoutOption.hideOverlap
                });
                Ld(a)
            }, t.prototype.processLabelsOverall = function () {
                var t = this;
                y(this._chartViewList, function (e) {
                    var n = e.__model, i = e.ignoreLabelLineUpdate, r = n.isAnimationEnabled();
                    e.group.traverse(function (e) {
                        if (e.ignore && !e.forceLabelAnimation) return !0;
                        var o = !i, a = e.getTextContent();
                        !o && a && (o = Kk(a).needsUpdateLabelLine), o && t._updateLabelLine(e, n), r && t._animateLabels(e, n)
                    })
                })
            }, t.prototype._updateLabelLine = function (t, e) {
                var n = t.getTextContent(), i = rw(t), r = i.dataIndex;
                if (n && null != r) {
                    var o = e.getData(i.dataType), a = o.getItemModel(r), s = {}, l = o.getItemVisual(r, "style"),
                        u = o.getVisual("drawType");
                    s.stroke = l[u];
                    var h = a.getModel("labelLine");
                    Cd(t, Id(a), s), bd(t, h)
                }
            }, t.prototype._animateLabels = function (t, e) {
                var n = t.getTextContent(), i = t.getTextGuideLine();
                if (n && (t.forceLabelAnimation || !n.ignore && !n.invisible && !t.disableLabelAnimation && !Ja(t))) {
                    var r = Kk(n), o = r.oldLayout, a = rw(t), s = a.dataIndex, l = {x: n.x, y: n.y, rotation: n.rotation},
                        u = e.getData(a.dataType);
                    if (o) {
                        n.attr(o);
                        var h = t.prevStates;
                        h && (p(h, "select") >= 0 && n.attr(r.oldLayoutSelect), p(h, "emphasis") >= 0 && n.attr(r.oldLayoutEmphasis)), Ka(n, l, e, s)
                    } else if (n.attr(l), !zS(n).valueAnimation) {
                        var c = B(n.style.opacity, 1);
                        n.style.opacity = 0, $a(n, {style: {opacity: c}}, e, s)
                    }
                    if (r.oldLayout = l, n.states.select) {
                        var f = r.oldLayoutSelect = {};
                        zd(f, l, Jk), zd(f, n.states.select, Jk)
                    }
                    if (n.states.emphasis) {
                        var d = r.oldLayoutEmphasis = {};
                        zd(d, l, Jk), zd(d, n.states.emphasis, Jk)
                    }
                    Ns(n, s, u, e, e)
                }
                if (i && !i.ignore && !i.invisible) {
                    var r = $k(i), o = r.oldLayout, g = {points: i.shape.points};
                    o ? (i.attr({shape: o}), Ka(i, {shape: g}, e)) : (i.setShape(g), i.style.strokePercent = 0, $a(i, {style: {strokePercent: 1}}, e)), r.oldLayout = g
                }
            }, t
        }(), tA = ar();
    qf(Ed);
    var eA = function (t) {
        function n(e, n, i) {
            var r = t.call(this) || this;
            r.motionBlur = !1, r.lastFrameAlpha = .7, r.dpr = 1, r.virtual = !1, r.config = {}, r.incremental = !1, r.zlevel = 0, r.maxRepaintRectCount = 5, r.__dirty = !0, r.__firstTimePaint = !0, r.__used = !1, r.__drawIndex = 0, r.__startIndex = 0, r.__endIndex = 0, r.__prevStartIndex = null, r.__prevEndIndex = null;
            var o;
            i = i || L_, "string" == typeof e ? o = Bd(e, n, i) : k(e) && (o = e, e = o.id), r.id = e, r.dom = o;
            var a = o.style;
            return a && (o.onselectstart = Nd, a.webkitUserSelect = "none", a.userSelect = "none", a.webkitTapHighlightColor = "rgba(0,0,0,0)", a["-webkit-touch-callout"] = "none", a.padding = "0", a.margin = "0", a.borderWidth = "0"), r.domBack = null, r.ctxBack = null, r.painter = n, r.config = null, r.dpr = i, r
        }

        return e(n, t), n.prototype.getElementCount = function () {
            return this.__endIndex - this.__startIndex
        }, n.prototype.afterBrush = function () {
            this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex
        }, n.prototype.initContext = function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        }, n.prototype.setUnpainted = function () {
            this.__firstTimePaint = !0
        }, n.prototype.createBackBuffer = function () {
            var t = this.dpr;
            this.domBack = Bd("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
        }, n.prototype.createRepaintRects = function (t, e, n, i) {
            function r(t) {
                if (t.isFinite() && !t.isZero()) if (0 === o.length) {
                    var e = new ex(0, 0, 0, 0);
                    e.copy(t), o.push(e)
                } else {
                    for (var n = !1, i = 1 / 0, r = 0, u = 0; u < o.length; ++u) {
                        var h = o[u];
                        if (h.intersect(t)) {
                            var c = new ex(0, 0, 0, 0);
                            c.copy(h), c.union(t), o[u] = c, n = !0;
                            break
                        }
                        if (s) {
                            l.copy(t), l.union(h);
                            var p = t.width * t.height, f = h.width * h.height, d = l.width * l.height, g = d - p - f;
                            i > g && (i = g, r = u)
                        }
                    }
                    if (s && (o[r].union(t), n = !0), !n) {
                        var e = new ex(0, 0, 0, 0);
                        e.copy(t), o.push(e)
                    }
                    s || (s = o.length >= a)
                }
            }

            if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
            for (var o = [], a = this.maxRepaintRectCount, s = !1, l = new ex(0, 0, 0, 0), u = this.__startIndex; u < this.__endIndex; ++u) {
                var h = t[u];
                if (h) {
                    var c = h.shouldBePainted(n, i, !0, !0),
                        p = h.__isRendered && (h.__dirty & $m || !c) ? h.getPrevPaintRect() : null;
                    p && r(p);
                    var f = c && (h.__dirty & $m || !h.__isRendered) ? h.getPaintRect() : null;
                    f && r(f)
                }
            }
            for (var u = this.__prevStartIndex; u < this.__prevEndIndex; ++u) {
                var h = e[u], c = h.shouldBePainted(n, i, !0, !0);
                if (h && (!c || !h.__zr) && h.__isRendered) {
                    var p = h.getPrevPaintRect();
                    p && r(p)
                }
            }
            var d;
            do {
                d = !1;
                for (var u = 0; u < o.length;) if (o[u].isZero()) o.splice(u, 1); else {
                    for (var g = u + 1; g < o.length;) o[u].intersect(o[g]) ? (d = !0, o[u].union(o[g]), o.splice(g, 1)) : g++;
                    u++
                }
            } while (d);
            return this._paintRects = o, o
        }, n.prototype.debugGetPaintRects = function () {
            return (this._paintRects || []).slice()
        }, n.prototype.resize = function (t, e) {
            var n = this.dpr, i = this.dom, r = i.style, o = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n))
        }, n.prototype.clear = function (t, e, n) {
            function i(t, n, i, r) {
                if (o.clearRect(t, n, i, r), e && "transparent" !== e) {
                    var a = void 0;
                    O(e) ? (a = e.__canvasGradient || tc(o, e, {
                        x: 0,
                        y: 0,
                        width: i,
                        height: r
                    }), e.__canvasGradient = a) : R(e) && (a = lc(o, e, {
                        dirty: function () {
                            c.setUnpainted(), c.__painter.refresh()
                        }
                    })), o.save(), o.fillStyle = a || e, o.fillRect(t, n, i, r), o.restore()
                }
                l && (o.save(), o.globalAlpha = u, o.drawImage(p, t, n, i, r), o.restore())
            }

            var r = this.dom, o = this.ctx, a = r.width, s = r.height;
            e = e || this.clearColor;
            var l = this.motionBlur && !t, u = this.lastFrameAlpha, h = this.dpr, c = this;
            l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(r, 0, 0, a / h, s / h));
            var p = this.domBack;
            !n || l ? i(0, 0, a, s) : n.length && y(n, function (t) {
                i(t.x * h, t.y * h, t.width * h, t.height * h)
            })
        }, n
    }(Om), nA = 1e5, iA = 314159, rA = .01, oA = .001, aA = function () {
        function t(t, e, n) {
            this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = n = h({}, n || {}), this.dpr = n.devicePixelRatio || L_, this._singleCanvas = i, this.root = t;
            var r = t.style;
            r && (r.webkitTapHighlightColor = "transparent", r.webkitUserSelect = "none", r.userSelect = "none", r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var o = this._zlevelList;
            this._prevDisplayList = [];
            var a = this._layers;
            if (i) {
                var s = t, l = s.width, u = s.height;
                null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, s.width = l * this.dpr, s.height = u * this.dpr, this._width = l, this._height = u;
                var c = new eA(s, this, this.dpr);
                c.__builtin__ = !0, c.initContext(), a[iA] = c, c.zlevel = iA, o.push(iA), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var p = this._domRoot = Hd(this._width, this._height);
                t.appendChild(p)
            }
        }

        return t.prototype.getType = function () {
            return "canvas"
        }, t.prototype.isSingleCanvas = function () {
            return this._singleCanvas
        }, t.prototype.getViewportRoot = function () {
            return this._domRoot
        }, t.prototype.getViewportRootOffset = function () {
            var t = this.getViewportRoot();
            return t ? {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0} : void 0
        }, t.prototype.refresh = function (t) {
            var e = this.storage.getDisplayList(!0), n = this._prevDisplayList, i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
            for (var r = 0; r < i.length; r++) {
                var o = i[r], a = this._layers[o];
                if (!a.__builtin__ && a.refresh) {
                    var s = 0 === r ? this._backgroundColor : null;
                    a.refresh(s)
                }
            }
            return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
        }, t.prototype.refreshHover = function () {
            this._paintHoverList(this.storage.getDisplayList(!1))
        }, t.prototype._paintHoverList = function (t) {
            var e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                for (var i, r = {inHover: !0, viewWidth: this._width, viewHeight: this._height}, o = 0; e > o; o++) {
                    var a = t[o];
                    a.__inHover && (n || (n = this._hoverlayer = this.getLayer(nA)), i || (i = n.ctx, i.save()), wc(i, a, r, o === e - 1))
                }
                i && i.restore()
            }
        }, t.prototype.getHoverLayer = function () {
            return this.getLayer(nA)
        }, t.prototype.paintOne = function (t, e) {
            bc(t, e)
        }, t.prototype._paintList = function (t, e, n, i) {
            if (this._redrawId === i) {
                n = n || !1, this._updateLayerStatus(t);
                var r = this._doPaintList(t, e, n), o = r.finished, a = r.needsRefreshHover;
                if (this._needsManuallyCompositing && this._compositeManually(), a && this._paintHoverList(t), o) this.eachLayer(function (t) {
                    t.afterBrush && t.afterBrush()
                }); else {
                    var s = this;
                    n_(function () {
                        s._paintList(t, e, n, i)
                    })
                }
            }
        }, t.prototype._compositeManually = function () {
            var t = this.getLayer(iA).ctx, e = this._domRoot.width, n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        }, t.prototype._doPaintList = function (t, e, n) {
            for (var i = this, r = [], o = this._opts.useDirtyRect, a = 0; a < this._zlevelList.length; a++) {
                var s = this._zlevelList[a], l = this._layers[s];
                l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && r.push(l)
            }
            for (var u = !0, h = !1, c = function (a) {
                var s = r[a], l = s.ctx, c = o && s.createRepaintRects(t, e, p._width, p._height),
                    f = n ? s.__startIndex : s.__drawIndex, d = !n && s.incremental && Date.now, g = d && Date.now(),
                    y = s.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, y, c); else if (f === s.__startIndex) {
                    var v = t[f];
                    v.incremental && v.notClear && !n || s.clear(!1, y, c)
                }
                -1 === f && (console.error("For some unknown reason. drawIndex is -1"), f = s.__startIndex);
                var m, _ = function (e) {
                    var n = {inHover: !1, allClipped: !1, prevEl: null, viewWidth: i._width, viewHeight: i._height};
                    for (m = f; m < s.__endIndex; m++) {
                        var r = t[m];
                        if (r.__inHover && (h = !0), i._doPaintEl(r, s, o, e, n, m === s.__endIndex - 1), d) {
                            var a = Date.now() - g;
                            if (a > 15) break
                        }
                    }
                    n.prevElClipPaths && l.restore()
                };
                if (c) if (0 === c.length) m = s.__endIndex; else for (var x = p.dpr, b = 0; b < c.length; ++b) {
                    var w = c[b];
                    l.save(), l.beginPath(), l.rect(w.x * x, w.y * x, w.width * x, w.height * x), l.clip(), _(w), l.restore()
                } else l.save(), _(), l.restore();
                s.__drawIndex = m, s.__drawIndex < s.__endIndex && (u = !1)
            }, p = this, f = 0; f < r.length; f++) c(f);
            return sm.wxa && y(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), {finished: u, needsRefreshHover: h}
        }, t.prototype._doPaintEl = function (t, e, n, i, r, o) {
            var a = e.ctx;
            if (n) {
                var s = t.getPaintRect();
                (!i || s && s.intersect(i)) && (wc(a, t, r, o), t.setPrevPaintRect(s))
            } else wc(a, t, r, o)
        }, t.prototype.getLayer = function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = iA);
            var n = this._layers[t];
            return n || (n = new eA("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? l(n, this._layerConfig[t], !0) : this._layerConfig[t - rA] && l(n, this._layerConfig[t - rA], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
        }, t.prototype.insertLayer = function (t, e) {
            var n = this._layers, i = this._zlevelList, r = i.length, o = this._domRoot, s = null, l = -1;
            if (n[t]) return void a("ZLevel " + t + " has been used already");
            if (!Vd(e)) return void a("Layer of zlevel " + t + " is not valid");
            if (r > 0 && t > i[0]) {
                for (l = 0; r - 1 > l && !(i[l] < t && i[l + 1] > t); l++) ;
                s = n[i[l]]
            }
            if (i.splice(l + 1, 0, t), n[t] = e, !e.virtual) if (s) {
                var u = s.dom;
                u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom)
            } else o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
            e.__painter = this
        }, t.prototype.eachLayer = function (t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, this._layers[r], r)
            }
        }, t.prototype.eachBuiltinLayer = function (t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                o.__builtin__ && t.call(e, o, r)
            }
        }, t.prototype.eachOtherLayer = function (t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                o.__builtin__ || t.call(e, o, r)
            }
        }, t.prototype.getLayers = function () {
            return this._layers
        }, t.prototype._updateLayerStatus = function (t) {
            function e(t) {
                s && (s.__endIndex !== t && (s.__dirty = !0), s.__endIndex = t)
            }

            if (this.eachBuiltinLayer(function (t) {
                t.__dirty = t.__used = !1
            }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
                var i = t[n];
                if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                    this._needsManuallyCompositing = !0;
                    break
                }
            }
            var r, o, s = null, l = 0;
            for (o = 0; o < t.length; o++) {
                var i = t[o], u = i.zlevel, h = void 0;
                r !== u && (r = u, l = 0), i.incremental ? (h = this.getLayer(u + oA, this._needsManuallyCompositing), h.incremental = !0, l = 1) : h = this.getLayer(u + (l > 0 ? rA : 0), this._needsManuallyCompositing), h.__builtin__ || a("ZLevel " + u + " has been used by unkown layer " + h.id), h !== s && (h.__used = !0, h.__startIndex !== o && (h.__dirty = !0), h.__startIndex = o, h.__drawIndex = h.incremental ? -1 : o, e(o), s = h), i.__dirty & $m && !i.__inHover && (h.__dirty = !0, h.incremental && h.__drawIndex < 0 && (h.__drawIndex = o))
            }
            e(o), this.eachBuiltinLayer(function (t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        }, t.prototype.clear = function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, t.prototype._clearLayer = function (t) {
            t.clear()
        }, t.prototype.setBackgroundColor = function (t) {
            this._backgroundColor = t, y(this._layers, function (t) {
                t.setUnpainted()
            })
        }, t.prototype.configLayer = function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? l(n[t], e, !0) : n[t] = e;
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var r = this._zlevelList[i];
                    if (r === t || r === t + rA) {
                        var o = this._layers[r];
                        l(o, n[t], !0)
                    }
                }
            }
        }, t.prototype.delLayer = function (t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(p(n, t), 1))
        }, t.prototype.resize = function (t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
                    n.style.width = t + "px", n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(iA).resize(t, e)
            }
            return this
        }, t.prototype.clearLayer = function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, t.prototype.dispose = function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, t.prototype.getRenderedCanvas = function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[iA].dom;
            var e = new eA("image", this, t.pixelRatio || this.dpr);
            e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
            var n = e.ctx;
            if (t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, r = e.dom.height;
                this.eachLayer(function (t) {
                    t.__builtin__ ? n.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore())
                })
            } else for (var o = {
                inHover: !1,
                viewWidth: this._width,
                viewHeight: this._height
            }, a = this.storage.getDisplayList(!0), s = 0, l = a.length; l > s; s++) {
                var u = a[s];
                wc(n, u, o, s === l - 1)
            }
            return e.dom
        }, t.prototype.getWidth = function () {
            return this._width
        }, t.prototype.getHeight = function () {
            return this._height
        }, t.prototype._getSize = function (t) {
            var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[i] || Fd(s[n]) || Fd(a.style[n])) - (Fd(s[r]) || 0) - (Fd(s[o]) || 0) | 0
        }, t.prototype.pathToImage = function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), o = t.style,
                a = o.shadowBlur * e, s = o.shadowOffsetX * e, l = o.shadowOffsetY * e,
                u = t.hasStroke() ? o.lineWidth : 0, c = Math.max(u / 2, -s + a), p = Math.max(u / 2, s + a),
                f = Math.max(u / 2, -l + a), d = Math.max(u / 2, l + a), g = r.width + c + p, y = r.height + f + d;
            n.width = g * e, n.height = y * e, i.scale(e, e), i.clearRect(0, 0, g, y), i.dpr = e;
            var v = {
                x: t.x,
                y: t.y,
                scaleX: t.scaleX,
                scaleY: t.scaleY,
                rotation: t.rotation,
                originX: t.originX,
                originY: t.originY
            };
            t.x = c - r.x, t.y = f - r.y, t.rotation = 0, t.scaleX = 1, t.scaleY = 1, t.updateTransform(), t && wc(i, t, {
                inHover: !1,
                viewWidth: this._width,
                viewHeight: this._height
            }, !0);
            var m = new jb({style: {x: 0, y: 0, image: n}});
            return h(t, v), m
        }, t
    }(), sA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "dataset", e
        }

        return e(n, t), n.prototype.init = function (e, n, i) {
            t.prototype.init.call(this, e, n, i), this._sourceManager = new PT(this), Zu(this)
        }, n.prototype.mergeOption = function (e, n) {
            t.prototype.mergeOption.call(this, e, n), Zu(this)
        }, n.prototype.optionUpdated = function () {
            this._sourceManager.dirty()
        }, n.prototype.getSourceManager = function () {
            return this._sourceManager
        }, n.type = "dataset", n.defaultOption = {seriesLayoutBy: RM}, n
    }(bM), lA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "dataset", e
        }

        return e(n, t), n.type = "dataset", n
    }(VT);
    qf([Gd, Wd]), qf(Ed);
    var uA = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e.hasSymbolVisual = !0, e
            }

            return e(n, t), n.prototype.getInitialData = function () {
                return Qp(null, this, {useEncodeDefaulter: !0})
            }, n.prototype.getLegendIcon = function (t) {
                var e = new cx, n = Zh("line", 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1);
                e.add(n), n.setStyle(t.lineStyle);
                var i = this.getData().getVisual("symbol"), r = this.getData().getVisual("symbolRotate"),
                    o = "none" === i ? "circle" : i, a = .8 * t.itemHeight,
                    s = Zh(o, (t.itemWidth - a) / 2, (t.itemHeight - a) / 2, a, a, t.itemStyle.fill);
                e.add(s), s.setStyle(t.itemStyle);
                var l = "inherit" === t.iconRotate ? r : t.iconRotate || 0;
                return s.rotation = l * Math.PI / 180, s.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), o.indexOf("empty") > -1 && (s.style.stroke = s.style.fill, s.style.fill = "#fff", s.style.lineWidth = 2), e
            }, n.type = "series.line", n.dependencies = ["grid", "polar"], n.defaultOption = {
                zlevel: 0,
                z: 3,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                clip: !0,
                label: {position: "top"},
                endLabel: {show: !1, valueAnimation: !0, distance: 8},
                lineStyle: {width: 2, type: "solid"},
                emphasis: {scale: !0, lineStyle: {width: "bolder"}},
                step: !1,
                smooth: !1,
                smoothMonotone: null,
                symbol: "emptyCircle",
                symbolSize: 4,
                symbolRotate: null,
                showSymbol: !0,
                showAllSymbol: "auto",
                connectNulls: !1,
                sampling: "none",
                animationEasing: "linear",
                progressive: 0,
                hoverLayerThreshold: 1 / 0,
                universalTransition: {divideShape: "clone"},
                triggerLineEvent: !1
            }, n
        }(FT), hA = function (t) {
            function n(e, n, i, r) {
                var o = t.call(this) || this;
                return o.updateData(e, n, i, r), o
            }

            return e(n, t), n.prototype._createSymbol = function (t, e, n, i, r) {
                this.removeAll();
                var o = Zh(t, -1, -1, 2, 2, null, r);
                o.attr({
                    z2: 100,
                    culling: !0,
                    scaleX: i[0] / 2,
                    scaleY: i[1] / 2
                }), o.drift = Yd, this._symbolType = t, this.add(o)
            }, n.prototype.stopSymbolAnimation = function (t) {
                this.childAt(0).stopAnimation(null, t)
            }, n.prototype.getSymbolType = function () {
                return this._symbolType
            }, n.prototype.getSymbolPath = function () {
                return this.childAt(0)
            }, n.prototype.highlight = function () {
                ia(this.childAt(0))
            }, n.prototype.downplay = function () {
                ra(this.childAt(0))
            }, n.prototype.setZ = function (t, e) {
                var n = this.childAt(0);
                n.zlevel = t, n.z = e
            }, n.prototype.setDraggable = function (t) {
                var e = this.childAt(0);
                e.draggable = t, e.cursor = t ? "move" : e.cursor
            }, n.prototype.updateData = function (t, e, i, r) {
                this.silent = !1;
                var o = t.getItemVisual(e, "symbol") || "circle", a = t.hostModel, s = n.getSymbolSize(t, e),
                    l = o !== this._symbolType, u = r && r.disableAnimation;
                if (l) {
                    var h = t.getItemVisual(e, "symbolKeepAspect");
                    this._createSymbol(o, t, e, s, h)
                } else {
                    var c = this.childAt(0);
                    c.silent = !1;
                    var p = {scaleX: s[0] / 2, scaleY: s[1] / 2};
                    u ? c.attr(p) : Ka(c, p, a, e), ns(c)
                }
                if (this._updateCommon(t, e, s, i, r), l) {
                    var c = this.childAt(0);
                    if (!u) {
                        var p = {scaleX: this._sizeX, scaleY: this._sizeY, style: {opacity: c.style.opacity}};
                        c.scaleX = c.scaleY = 0, c.style.opacity = 0, $a(c, p, a, e)
                    }
                }
                u && this.childAt(0).stopAnimation("remove"), this._seriesModel = a
            }, n.prototype._updateCommon = function (t, e, n, i, r) {
                function o(e) {
                    return C ? t.getName(e) : Ud(t, e)
                }

                var a, s, l, u, c, p, f, d, g = this.childAt(0), y = t.hostModel;
                if (i && (a = i.emphasisItemStyle, s = i.blurItemStyle, l = i.selectItemStyle, u = i.focus, c = i.blurScope, p = i.labelStatesModels, f = i.hoverScale, d = i.cursorStyle), !i || t.hasItemOption) {
                    var v = i && i.itemModel ? i.itemModel : t.getItemModel(e), m = v.getModel("emphasis");
                    a = m.getModel("itemStyle").getItemStyle(), l = v.getModel(["select", "itemStyle"]).getItemStyle(), s = v.getModel(["blur", "itemStyle"]).getItemStyle(), u = m.get("focus"), c = m.get("blurScope"), p = As(v), f = m.getShallow("scale"), d = v.getShallow("cursor")
                }
                var _ = t.getItemVisual(e, "symbolRotate");
                g.attr("rotation", (_ || 0) * Math.PI / 180 || 0);
                var x = $h(t.getItemVisual(e, "symbolOffset"), n);
                x && (g.x = x[0], g.y = x[1]), d && g.attr("cursor", d);
                var b = t.getItemVisual(e, "style"), w = b.fill;
                if (g instanceof jb) {
                    var S = g.style;
                    g.useStyle(h({image: S.image, x: S.x, y: S.y, width: S.width, height: S.height}, b))
                } else g.useStyle(g.__isEmptyBrush ? h({}, b) : b), g.style.decal = null, g.setColor(w, r && r.symbolInnerColor), g.style.strokeNoScale = !0;
                var M = t.getItemVisual(e, "liftZ"), T = this._z2;
                null != M ? null == T && (this._z2 = g.z2, g.z2 += M) : null != T && (g.z2 = T, this._z2 = null);
                var C = r && r.useNameLabel;
                ks(g, p, {
                    labelFetcher: y,
                    labelDataIndex: e,
                    defaultText: o,
                    inheritColor: w,
                    defaultOpacity: b.opacity
                }), this._sizeX = n[0] / 2, this._sizeY = n[1] / 2;
                var I = g.ensureState("emphasis");
                if (I.style = a, g.ensureState("select").style = l, g.ensureState("blur").style = s, f) {
                    var D = Math.max(1.1, 3 / this._sizeY);
                    I.scaleX = this._sizeX * D, I.scaleY = this._sizeY * D
                }
                this.setSymbolScale(1), xa(this, u, c)
            }, n.prototype.setSymbolScale = function (t) {
                this.scaleX = this.scaleY = t
            }, n.prototype.fadeOut = function (t, e) {
                var n = this.childAt(0), i = this._seriesModel, r = rw(this).dataIndex, o = e && e.animation;
                if (this.silent = n.silent = !0, e && e.fadeLabel) {
                    var a = n.getTextContent();
                    a && Qa(a, {style: {opacity: 0}}, i, {
                        dataIndex: r, removeOpt: o, cb: function () {
                            n.removeTextContent()
                        }
                    })
                } else n.removeTextContent();
                Qa(n, {style: {opacity: 0}, scaleX: 0, scaleY: 0}, i, {dataIndex: r, cb: t, removeOpt: o})
            }, n.getSymbolSize = function (t, e) {
                return Kh(t.getItemVisual(e, "symbolSize"))
            }, n
        }(cx), cA = function () {
            function t(t) {
                this.group = new cx, this._SymbolCtor = t || hA
            }

            return t.prototype.updateData = function (t, e) {
                e = qd(e);
                var n = this.group, i = t.hostModel, r = this._data, o = this._SymbolCtor, a = e.disableAnimation,
                    s = Zd(t), l = {disableAnimation: a}, u = e.getSymbolPoint || function (e) {
                        return t.getItemLayout(e)
                    };
                r || n.removeAll(), t.diff(r).add(function (i) {
                    var r = u(i);
                    if (jd(t, r, i, e)) {
                        var a = new o(t, i, s, l);
                        a.setPosition(r), t.setItemGraphicEl(i, a), n.add(a)
                    }
                }).update(function (h, c) {
                    var p = r.getItemGraphicEl(c), f = u(h);
                    if (!jd(t, f, h, e)) return void n.remove(p);
                    var d = t.getItemVisual(h, "symbol") || "circle", g = p && p.getSymbolType && p.getSymbolType();
                    if (!p || g && g !== d) n.remove(p), p = new o(t, h, s, l), p.setPosition(f); else {
                        p.updateData(t, h, s, l);
                        var y = {x: f[0], y: f[1]};
                        a ? p.attr(y) : Ka(p, y, i)
                    }
                    n.add(p), t.setItemGraphicEl(h, p)
                }).remove(function (t) {
                    var e = r.getItemGraphicEl(t);
                    e && e.fadeOut(function () {
                        n.remove(e)
                    })
                }).execute(), this._getSymbolPoint = u, this._data = t
            }, t.prototype.isPersistent = function () {
                return !0
            }, t.prototype.updateLayout = function () {
                var t = this, e = this._data;
                e && e.eachItemGraphicEl(function (e, n) {
                    var i = t._getSymbolPoint(n);
                    e.setPosition(i), e.markRedraw()
                })
            }, t.prototype.incrementalPrepareUpdate = function (t) {
                this._seriesScope = Zd(t), this._data = null, this.group.removeAll()
            }, t.prototype.incrementalUpdate = function (t, e, n) {
                function i(t) {
                    t.isGroup || (t.incremental = !0, t.ensureState("emphasis").hoverLayer = !0)
                }

                n = qd(n);
                for (var r = t.start; r < t.end; r++) {
                    var o = e.getItemLayout(r);
                    if (jd(e, o, r, n)) {
                        var a = new this._SymbolCtor(e, r, this._seriesScope);
                        a.traverse(i), a.setPosition(o), this.group.add(a), e.setItemGraphicEl(r, a)
                    }
                }
            }, t.prototype.remove = function (t) {
                var e = this.group, n = this._data;
                n && t ? n.eachItemGraphicEl(function (t) {
                    t.fadeOut(function () {
                        e.remove(t)
                    })
                }) : e.removeAll()
            }, t
        }(), pA = "undefined" != typeof Float32Array, fA = pA ? Float32Array : Array, dA = Math.min, gA = Math.max,
        yA = function () {
            function t() {
                this.smooth = 0, this.smoothConstraint = !0
            }

            return t
        }(), vA = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.type = "ec-polyline", n
            }

            return e(n, t), n.prototype.getDefaultStyle = function () {
                return {stroke: "#000", fill: null}
            }, n.prototype.getDefaultShape = function () {
                return new yA
            }, n.prototype.buildPath = function (t, e) {
                var n = e.points, i = 0, r = n.length / 2;
                if (e.connectNulls) {
                    for (; r > 0 && ng(n[2 * r - 2], n[2 * r - 1]); r--) ;
                    for (; r > i && ng(n[2 * i], n[2 * i + 1]); i++) ;
                }
                for (; r > i;) i += ig(t, n, i, r, r, 1, e.smooth, e.smoothMonotone, e.connectNulls) + 1
            }, n.prototype.getPointOn = function (t, e) {
                this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
                for (var n, i, r = this.path, o = r.data, a = Pb.CMD, s = "x" === e, l = [], u = 0; u < o.length;) {
                    var h = o[u++], c = void 0, p = void 0, f = void 0, d = void 0, g = void 0, y = void 0, v = void 0;
                    switch (h) {
                        case a.M:
                            n = o[u++], i = o[u++];
                            break;
                        case a.L:
                            if (c = o[u++], p = o[u++], v = s ? (t - n) / (c - n) : (t - i) / (p - i), 1 >= v && v >= 0) {
                                var m = s ? (p - i) * v + i : (c - n) * v + n;
                                return s ? [t, m] : [m, t]
                            }
                            n = c, i = p;
                            break;
                        case a.C:
                            c = o[u++], p = o[u++], f = o[u++], d = o[u++], g = o[u++], y = o[u++];
                            var _ = s ? Xr(n, c, f, g, t, l) : Xr(i, p, d, y, t, l);
                            if (_ > 0) for (var x = 0; _ > x; x++) {
                                var b = l[x];
                                if (1 >= b && b >= 0) {
                                    var m = s ? Wr(i, p, d, y, b) : Wr(n, c, f, g, b);
                                    return s ? [t, m] : [m, t]
                                }
                            }
                            n = g, i = y
                    }
                }
            }, n
        }(Gb), mA = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n
        }(yA), _A = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.type = "ec-polygon", n
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new mA
            }, n.prototype.buildPath = function (t, e) {
                var n = e.points, i = e.stackedOnPoints, r = 0, o = n.length / 2, a = e.smoothMonotone;
                if (e.connectNulls) {
                    for (; o > 0 && ng(n[2 * o - 2], n[2 * o - 1]); o--) ;
                    for (; o > r && ng(n[2 * r], n[2 * r + 1]); r++) ;
                }
                for (; o > r;) {
                    var s = ig(t, n, r, o, o, 1, e.smooth, a, e.connectNulls);
                    ig(t, i, r + s - 1, s, o, -1, e.stackedOnSmooth, a, e.connectNulls), r += s + 1, t.closePath()
                }
            }, n
        }(Gb), xA = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.init = function () {
                var t = new cx, e = new cA;
                this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
            }, n.prototype.render = function (t, e, n) {
                var i = this, r = t.coordinateSystem, o = this.group, a = t.getData(), s = t.getModel("lineStyle"),
                    l = t.getModel("areaStyle"), u = a.getLayout("points") || [], h = "polar" === r.type,
                    p = this._coordSys, f = this._symbolDraw, d = this._polyline, g = this._polygon, y = this._lineGroup,
                    v = t.get("animation"), m = !l.isEmpty(), _ = l.get("origin"), x = Kd(r, a, _), b = m && cg(r, a, x),
                    w = t.get("showSymbol"), S = w && !h && gg(t, a, r), M = this._data;
                M && M.eachItemGraphicEl(function (t, e) {
                    t.__temp && (o.remove(t), M.setItemGraphicEl(e, null))
                }), w || f.remove(), o.add(y);
                var T, C = h ? !1 : t.get("step");
                r && r.getArea && t.get("clip", !0) && (T = r.getArea(), null != T.width ? (T.x -= .1, T.y -= .1, T.width += .2, T.height += .2) : T.r0 && (T.r0 -= .5, T.r += .5)), this._clipShapeForSymbol = T;
                var I = dg(a, r, n) || a.getVisual("style")[a.getVisual("drawType")];
                if (d && p.type === r.type && C === this._step) {
                    m && !g ? g = this._newPolygon(u, b) : g && !m && (y.remove(g), g = this._polygon = null), h || this._initOrUpdateEndLabel(t, r, Sl(I));
                    var D = y.getClipPath();
                    if (D) {
                        var k = wg(this, r, !1, t);
                        $a(D, {shape: k.shape}, t)
                    } else y.setClipPath(wg(this, r, !0, t));
                    w && f.updateData(a, {
                        isIgnore: S, clipShape: T, disableAnimation: !0, getSymbolPoint: function (t) {
                            return [u[2 * t], u[2 * t + 1]]
                        }
                    }), sg(this._stackedOnPoints, b) && sg(this._points, u) || (v ? this._doUpdateAnimation(a, b, r, n, C, _) : (C && (u = pg(u, r, C), b && (b = pg(b, r, C))), d.setShape({points: u}), g && g.setShape({
                        points: u,
                        stackedOnPoints: b
                    })))
                } else w && f.updateData(a, {
                    isIgnore: S, clipShape: T, disableAnimation: !0, getSymbolPoint: function (t) {
                        return [u[2 * t], u[2 * t + 1]]
                    }
                }), v && this._initSymbolLabelAnimation(a, r, T), C && (u = pg(u, r, C), b && (b = pg(b, r, C))), d = this._newPolyline(u), m && (g = this._newPolygon(u, b)), h || this._initOrUpdateEndLabel(t, r, Sl(I)), y.setClipPath(wg(this, r, !0, t));
                var A = t.get(["emphasis", "focus"]), P = t.get(["emphasis", "blurScope"]);
                if (d.useStyle(c(s.getLineStyle(), {
                    fill: "none",
                    stroke: I,
                    lineJoin: "bevel"
                })), wa(d, t, "lineStyle"), d.style.lineWidth > 0 && "bolder" === t.get(["emphasis", "lineStyle", "width"])) {
                    var L = d.getState("emphasis").style;
                    L.lineWidth = +d.style.lineWidth + 1
                }
                rw(d).seriesIndex = t.seriesIndex, xa(d, A, P);
                var O = hg(t.get("smooth")), R = t.get("smoothMonotone"), z = t.get("connectNulls");
                if (d.setShape({smooth: O, smoothMonotone: R, connectNulls: z}), g) {
                    var E = a.getCalculationInfo("stackedOnSeries"), N = 0;
                    g.useStyle(c(l.getAreaStyle(), {
                        fill: I,
                        opacity: .7,
                        lineJoin: "bevel",
                        decal: a.getVisual("style").decal
                    })), E && (N = hg(E.get("smooth"))), g.setShape({
                        smooth: O,
                        stackedOnSmooth: N,
                        smoothMonotone: R,
                        connectNulls: z
                    }), wa(g, t, "areaStyle"), rw(g).seriesIndex = t.seriesIndex, xa(g, A, P)
                }
                var B = function (t) {
                    i._changePolyState(t)
                };
                a.eachItemGraphicEl(function (t) {
                    t && (t.onHoverStateChange = B)
                }), this._polyline.onHoverStateChange = B, this._data = a, this._coordSys = r, this._stackedOnPoints = b, this._points = u, this._step = C, this._valueOrigin = _, t.get("triggerLineEvent") && (this.packEventData(t, d), g && this.packEventData(t, g))
            }, n.prototype.packEventData = function (t, e) {
                rw(e).eventData = {
                    componentType: "series",
                    componentSubType: "line",
                    componentIndex: t.componentIndex,
                    seriesIndex: t.seriesIndex,
                    seriesName: t.name,
                    seriesType: "line"
                }
            }, n.prototype.highlight = function (t, e, n, i) {
                var r = t.getData(), o = or(r, i);
                if (this._changePolyState("emphasis"), !(o instanceof Array) && null != o && o >= 0) {
                    var a = r.getLayout("points"), s = r.getItemGraphicEl(o);
                    if (!s) {
                        var l = a[2 * o], u = a[2 * o + 1];
                        if (isNaN(l) || isNaN(u)) return;
                        if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(l, u)) return;
                        var h = t.get("zlevel"), c = t.get("z");
                        s = new hA(r, o), s.x = l, s.y = u, s.setZ(h, c);
                        var p = s.getSymbolPath().getTextContent();
                        p && (p.zlevel = h, p.z = c, p.z2 = this._polyline.z2 + 1), s.__temp = !0, r.setItemGraphicEl(o, s), s.stopSymbolAnimation(!0), this.group.add(s)
                    }
                    s.highlight()
                } else WT.prototype.highlight.call(this, t, e, n, i)
            }, n.prototype.downplay = function (t, e, n, i) {
                var r = t.getData(), o = or(r, i);
                if (this._changePolyState("normal"), null != o && o >= 0) {
                    var a = r.getItemGraphicEl(o);
                    a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay())
                } else WT.prototype.downplay.call(this, t, e, n, i)
            }, n.prototype._changePolyState = function (t) {
                var e = this._polygon;
                qo(this._polyline, t), e && qo(e, t)
            }, n.prototype._newPolyline = function (t) {
                var e = this._polyline;
                return e && this._lineGroup.remove(e), e = new vA({
                    shape: {points: t},
                    segmentIgnoreThreshold: 2,
                    z2: 10
                }), this._lineGroup.add(e), this._polyline = e, e
            }, n.prototype._newPolygon = function (t, e) {
                var n = this._polygon;
                return n && this._lineGroup.remove(n), n = new _A({
                    shape: {points: t, stackedOnPoints: e},
                    segmentIgnoreThreshold: 2
                }), this._lineGroup.add(n), this._polygon = n, n
            }, n.prototype._initSymbolLabelAnimation = function (t, e, n) {
                var i, r, o = e.getBaseAxis(), a = o.inverse;
                "cartesian2d" === e.type ? (i = o.isHorizontal(), r = !1) : "polar" === e.type && (i = "angle" === o.dim, r = !0);
                var s = t.hostModel, l = s.get("animationDuration");
                "function" == typeof l && (l = l(null));
                var u = s.get("animationDelay") || 0, h = "function" == typeof u ? u(null) : u;
                t.eachItemGraphicEl(function (t, o) {
                    var s = t;
                    if (s) {
                        var c = [t.x, t.y], p = void 0, f = void 0, d = void 0;
                        if (n) if (r) {
                            var g = n, y = e.pointToCoord(c);
                            i ? (p = g.startAngle, f = g.endAngle, d = -y[1] / 180 * Math.PI) : (p = g.r0, f = g.r, d = y[0])
                        } else {
                            var v = n;
                            i ? (p = v.x, f = v.x + v.width, d = t.x) : (p = v.y + v.height, f = v.y, d = t.y)
                        }
                        var m = f === p ? 0 : (d - p) / (f - p);
                        a && (m = 1 - m);
                        var _ = "function" == typeof u ? u(o) : l * m + h, x = s.getSymbolPath(), b = x.getTextContent();
                        s.attr({scaleX: 0, scaleY: 0}), s.animateTo({scaleX: 1, scaleY: 1}, {
                            duration: 200,
                            setToFinal: !0,
                            delay: _
                        }), b && b.animateFrom({style: {opacity: 0}}, {
                            duration: 300,
                            delay: _
                        }), x.disableLabelAnimation = !0
                    }
                })
            }, n.prototype._initOrUpdateEndLabel = function (t, e, n) {
                var i = t.getModel("endLabel");
                if (bg(t)) {
                    var r = t.getData(), o = this._polyline, a = this._endLabel;
                    a || (a = this._endLabel = new ew({z2: 200}), a.ignoreClip = !0, o.setTextContent(this._endLabel), o.disableLabelAnimation = !0);
                    var s = mg(r.getLayout("points"));
                    s >= 0 && (ks(o, As(t, "endLabel"), {
                        inheritColor: n,
                        labelFetcher: t,
                        labelDataIndex: s,
                        defaultText: function (t, e, n) {
                            return null != n ? Xd(r, n) : Ud(r, t)
                        },
                        enableTextSetter: !0
                    }, Sg(i, e)), o.textConfig.position = null)
                } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null)
            }, n.prototype._endLabelOnDuring = function (t, e, n, i, r, o, a) {
                var s = this._endLabel, l = this._polyline;
                if (s) {
                    1 > t && null == i.originalX && (i.originalX = s.x, i.originalY = s.y);
                    var u = n.getLayout("points"), h = n.hostModel, c = h.get("connectNulls"), p = o.get("precision"),
                        f = o.get("distance") || 0, d = a.getBaseAxis(), g = d.isHorizontal(), y = d.inverse, v = e.shape,
                        m = y ? g ? v.x : v.y + v.height : g ? v.x + v.width : v.y, _ = (g ? f : 0) * (y ? -1 : 1),
                        x = (g ? 0 : -f) * (y ? -1 : 1), b = g ? "x" : "y", w = xg(u, m, b), S = w.range, M = S[1] - S[0],
                        T = void 0;
                    if (M >= 1) {
                        if (M > 1 && !c) {
                            var C = _g(u, S[0]);
                            s.attr({x: C[0] + _, y: C[1] + x}), r && (T = h.getRawValue(S[0]))
                        } else {
                            var C = l.getPointOn(m, b);
                            C && s.attr({x: C[0] + _, y: C[1] + x});
                            var I = h.getRawValue(S[0]), D = h.getRawValue(S[1]);
                            r && (T = dr(n, p, I, D, w.t))
                        }
                        i.lastFrameIndex = S[0]
                    } else {
                        var k = 1 === t || i.lastFrameIndex > 0 ? S[0] : 0, C = _g(u, k);
                        r && (T = h.getRawValue(k)), s.attr({x: C[0] + _, y: C[1] + x})
                    }
                    r && zS(s).setLabelText(T)
                }
            }, n.prototype._doUpdateAnimation = function (t, e, n, i, r, o) {
                var a = this._polyline, s = this._polygon, l = t.hostModel,
                    u = eg(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, o), h = u.current,
                    c = u.stackedOnCurrent, p = u.next, f = u.stackedOnNext;
                if (r && (h = pg(u.current, n, r), c = pg(u.stackedOnCurrent, n, r), p = pg(u.next, n, r), f = pg(u.stackedOnNext, n, r)), ug(h, p) > 3e3 || s && ug(c, f) > 3e3) return a.stopAnimation(), a.setShape({points: p}), void (s && (s.stopAnimation(), s.setShape({
                    points: p,
                    stackedOnPoints: f
                })));
                a.shape.__points = u.current, a.shape.points = h;
                var d = {shape: {points: p}};
                u.current !== h && (d.shape.__points = u.next), a.stopAnimation(), Ka(a, d, l), s && (s.setShape({
                    points: h,
                    stackedOnPoints: c
                }), s.stopAnimation(), Ka(s, {shape: {stackedOnPoints: f}}, l), a.shape.points !== s.shape.points && (s.shape.points = a.shape.points));
                for (var g = [], y = u.status, v = 0; v < y.length; v++) {
                    var m = y[v].cmd;
                    if ("=" === m) {
                        var _ = t.getItemGraphicEl(y[v].idx1);
                        _ && g.push({el: _, ptIdx: v})
                    }
                }
                a.animators && a.animators.length && a.animators[0].during(function () {
                    s && s.dirtyShape();
                    for (var t = a.shape.__points, e = 0; e < g.length; e++) {
                        var n = g[e].el, i = 2 * g[e].ptIdx;
                        n.x = t[i], n.y = t[i + 1], n.markRedraw()
                    }
                })
            }, n.prototype.remove = function () {
                var t = this.group, e = this._data;
                this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (n, i) {
                    n.__temp && (t.remove(n), e.setItemGraphicEl(i, null))
                }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null
            }, n.type = "line", n
        }(WT), bA = {
            average: function (t) {
                for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
                return 0 === n ? 0 / 0 : e / n
            }, sum: function (t) {
                for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
                return e
            }, max: function (t) {
                for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
                return isFinite(e) ? e : 0 / 0
            }, min: function (t) {
                for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
                return isFinite(e) ? e : 0 / 0
            }, nearest: function (t) {
                return t[0]
            }
        }, wA = function (t) {
            return Math.round(t.length / 2)
        };
    qf(Cg);
    var SA = 2 * Math.PI, MA = Math.PI / 180, TA = Math.PI / 180, CA = function (t) {
        function n(e, n, i) {
            var r = t.call(this) || this;
            r.z2 = 2;
            var o = new ew;
            return r.setTextContent(o), r.updateData(e, n, i, !0), r
        }

        return e(n, t), n.prototype.updateData = function (t, e, n, i) {
            var r = this, o = t.hostModel, a = t.getItemModel(e), s = a.getModel("emphasis"), l = t.getItemLayout(e),
                u = h(zg(a.getModel("itemStyle"), l, !0), l);
            if (isNaN(u.startAngle)) return void r.setShape(u);
            if (i) {
                r.setShape(u);
                var c = o.getShallow("animationType");
                "scale" === c ? (r.shape.r = l.r0, $a(r, {shape: {r: l.r}}, o, e)) : null != n ? (r.setShape({
                    startAngle: n,
                    endAngle: n
                }), $a(r, {
                    shape: {
                        startAngle: l.startAngle,
                        endAngle: l.endAngle
                    }
                }, o, e)) : (r.shape.endAngle = l.startAngle, Ka(r, {shape: {endAngle: l.endAngle}}, o, e))
            } else ns(r), Ka(r, {shape: u}, o, e);
            r.useStyle(t.getItemVisual(e, "style")), wa(r, a);
            var p = (l.startAngle + l.endAngle) / 2, f = o.get("selectedOffset"), d = Math.cos(p) * f,
                g = Math.sin(p) * f, y = a.getShallow("cursor");
            y && r.attr("cursor", y), this._updateLabel(o, t, e), r.ensureState("emphasis").shape = rm({r: l.r + (s.get("scale") ? s.get("scaleSize") || 0 : 0)}, zg(s.getModel("itemStyle"), l)), h(r.ensureState("select"), {
                x: d,
                y: g,
                shape: zg(a.getModel(["select", "itemStyle"]), l)
            }), h(r.ensureState("blur"), {shape: zg(a.getModel(["blur", "itemStyle"]), l)});
            var v = r.getTextGuideLine(), m = r.getTextContent();
            v && h(v.ensureState("select"), {x: d, y: g}), h(m.ensureState("select"), {
                x: d,
                y: g
            }), xa(this, s.get("focus"), s.get("blurScope"))
        }, n.prototype._updateLabel = function (t, e, n) {
            var i = this, r = e.getItemModel(n), o = r.getModel("labelLine"), a = e.getItemVisual(n, "style"),
                s = a && a.fill, l = a && a.opacity;
            ks(i, As(r), {
                labelFetcher: e.hostModel,
                labelDataIndex: n,
                inheritColor: s,
                defaultOpacity: l,
                defaultText: t.getFormattedLabel(n, "normal") || e.getName(n)
            });
            var u = i.getTextContent();
            i.setTextConfig({position: null, rotation: null}), u.attr({z2: 10});
            var h = t.get(["label", "position"]);
            if ("outside" !== h && "outer" !== h) i.removeTextGuideLine(); else {
                var c = this.getTextGuideLine();
                c || (c = new iS, this.setTextGuideLine(c)), Cd(this, Id(r), {
                    stroke: s,
                    opacity: F(o.get(["lineStyle", "opacity"]), l, 1)
                })
            }
        }, n
    }($w), IA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ignoreLabelLineUpdate = !0, e
        }

        return e(n, t), n.prototype.init = function () {
            var t = new cx;
            this._sectorGroup = t
        }, n.prototype.render = function (t, e, n) {
            var i, r = t.getData(), o = this._data, a = this.group;
            if (!o && r.count() > 0) {
                for (var s = r.getItemLayout(0), l = 1; isNaN(s && s.startAngle) && l < r.count(); ++l) s = r.getItemLayout(l);
                s && (i = s.startAngle)
            }
            if (this._emptyCircleSector && a.remove(this._emptyCircleSector), 0 === r.count() && t.get("showEmptyCircle")) {
                var u = new $w({shape: Dg(t, n)});
                u.useStyle(t.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = u, a.add(u)
            }
            r.diff(o).add(function (t) {
                var e = new CA(r, t, i);
                r.setItemGraphicEl(t, e), a.add(e)
            }).update(function (t, e) {
                var n = o.getItemGraphicEl(e);
                n.updateData(r, t, i), n.off("click"), a.add(n), r.setItemGraphicEl(t, n)
            }).remove(function (e) {
                var n = o.getItemGraphicEl(e);
                es(n, t, e)
            }).execute(), Rg(t), "expansion" !== t.get("animationTypeUpdate") && (this._data = r)
        }, n.prototype.dispose = function () {
        }, n.prototype.containPoint = function (t, e) {
            var n = e.getData(), i = n.getItemLayout(0);
            if (i) {
                var r = t[0] - i.cx, o = t[1] - i.cy, a = Math.sqrt(r * r + o * o);
                return a <= i.r && a >= i.r0
            }
        }, n.type = "pie", n
    }(WT), DA = function () {
        function t(t, e) {
            this._getDataWithEncodedVisual = t, this._getRawData = e
        }

        return t.prototype.getAllNames = function () {
            var t = this._getRawData();
            return t.mapArray(t.getName)
        }, t.prototype.containName = function (t) {
            var e = this._getRawData();
            return e.indexOfName(t) >= 0
        }, t.prototype.indexOfName = function (t) {
            var e = this._getDataWithEncodedVisual();
            return e.indexOfName(t)
        }, t.prototype.getItemVisual = function (t, e) {
            var n = this._getDataWithEncodedVisual();
            return n.getItemVisual(t, e)
        }, t
    }(), kA = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return e(n, t), n.prototype.init = function (e) {
            t.prototype.init.apply(this, arguments), this.legendVisualProvider = new DA(wm(this.getData, this), wm(this.getRawData, this)), this._defaultLabelLine(e)
        }, n.prototype.mergeOption = function () {
            t.prototype.mergeOption.apply(this, arguments)
        }, n.prototype.getInitialData = function () {
            return Eg(this, {coordDimensions: ["value"], encodeDefaulter: S(Rl, this)})
        }, n.prototype.getDataParams = function (e) {
            var n = this.getData(), i = t.prototype.getDataParams.call(this, e), r = [];
            return n.each(n.mapDimension("value"), function (t) {
                r.push(t)
            }), i.percent = Ti(r, e, n.hostModel.get("percentPrecision")), i.$vars.push("percent"), i
        }, n.prototype._defaultLabelLine = function (t) {
            Gi(t, "labelLine", ["show"]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
        }, n.type = "series.pie", n.defaultOption = {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: 0,
                show: !0,
                overflow: "truncate",
                position: "outer",
                alignTo: "none",
                edgeDistance: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: {width: 1, type: "solid"}
            },
            itemStyle: {borderWidth: 1, borderJoin: "round"},
            showEmptyCircle: !0,
            emptyCircleStyle: {color: "lightgray", opacity: 1},
            labelLayout: {hideOverlap: !0},
            emphasis: {scale: !0, scaleSize: 5},
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut"
        }, n
    }(FT);
    qf(Bg);
    var AA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e._layers = [], e
        }

        return e(n, t), n.prototype.render = function (t) {
            function e(t) {
                return t.name
            }

            function n(e, n, s) {
                var l = r._layers;
                if ("remove" === e) return void o.remove(l[n]);
                for (var u, h = [], p = [], f = a[n].indices, d = 0; d < f.length; d++) {
                    var g = i.getItemLayout(f[d]), y = g.x, v = g.y0, m = g.y;
                    h.push(y, v), p.push(y, v + m), u = i.getItemVisual(f[d], "style")
                }
                var _, x = i.getItemLayout(f[0]), b = t.getModel("label"), w = b.get("margin"),
                    S = t.getModel("emphasis");
                if ("add" === e) {
                    var M = c[n] = new cx;
                    _ = new _A({
                        shape: {
                            points: h,
                            stackedOnPoints: p,
                            smooth: .4,
                            stackedOnSmooth: .4,
                            smoothConstraint: !1
                        }, z2: 0
                    }), M.add(_), o.add(M), t.isAnimationEnabled() && _.setClipPath(Fg(_.getBoundingRect(), t, function () {
                        _.removeClipPath()
                    }))
                } else {
                    var M = l[s];
                    _ = M.childAt(0), o.add(M), c[n] = M, Ka(_, {shape: {points: h, stackedOnPoints: p}}, t), ns(_)
                }
                ks(_, As(t), {
                    labelDataIndex: f[d - 1],
                    defaultText: i.getName(f[d - 1]),
                    inheritColor: u.fill
                }, {normal: {verticalAlign: "middle"}}), _.setTextConfig({position: null, local: !0});
                var T = _.getTextContent();
                T && (T.x = x.x - w, T.y = x.y0 + x.y / 2), _.useStyle(u), i.setItemGraphicEl(n, _), wa(_, t), xa(_, S.get("focus"), S.get("blurScope"))
            }

            var i = t.getData(), r = this, o = this.group, a = t.getLayerSeries(), s = i.getLayout("layoutInfo"),
                l = s.rect, u = s.boundaryGap;
            o.x = 0, o.y = l.y + u[0];
            var h = new ND(this._layersSeries || [], a, e, e), c = [];
            h.add(wm(n, this, "add")).update(wm(n, this, "update")).remove(wm(n, this, "remove")).execute(), this._layersSeries = a, this._layers = c
        }, n.type = "themeRiver", n
    }(WT), PA = 2, LA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e
        }

        return e(n, t), n.prototype.init = function () {
            t.prototype.init.apply(this, arguments), this.legendVisualProvider = new DA(wm(this.getData, this), wm(this.getRawData, this))
        }, n.prototype.fixData = function (t) {
            var e = t.length, n = {}, i = fr(t, function (t) {
                return n.hasOwnProperty(t[0] + "") || (n[t[0] + ""] = -1), t[2]
            }), r = [];
            i.buckets.each(function (t, e) {
                r.push({name: e, dataList: t})
            });
            for (var o = r.length, a = 0; o > a; ++a) {
                for (var s = r[a].name, l = 0; l < r[a].dataList.length; ++l) {
                    var u = r[a].dataList[l][0] + "";
                    n[u] = a
                }
                for (var u in n) n.hasOwnProperty(u) && n[u] !== a && (n[u] = a, t[e] = [u, 0, s], e++)
            }
            return t
        }, n.prototype.getInitialData = function (t) {
            for (var e = this.getReferringComponents("singleAxis", Ix).models[0], n = e.get("type"), i = _(t.data, function (t) {
                return void 0 !== t[2]
            }), r = this.fixData(i || []), o = [], a = this.nameMap = Y(), s = 0, l = 0; l < r.length; ++l) o.push(r[l][PA]), a.get(r[l][PA]) || (a.set(r[l][PA], s), s++);
            var u = Hp(r, {
                coordDimensions: ["single"],
                dimensionsDefine: [{name: "time", type: Rp(n)}, {name: "value", type: "float"}, {
                    name: "name",
                    type: "ordinal"
                }],
                encodeDefine: {single: 0, value: 1, itemName: 2}
            }).dimensions, h = new KD(u, this);
            return h.initData(r), h
        }, n.prototype.getLayerSeries = function () {
            for (var t = this.getData(), e = t.count(), n = [], i = 0; e > i; ++i) n[i] = i;
            var r = t.mapDimension("single"), o = fr(n, function (e) {
                return t.get("name", e)
            }), a = [];
            return o.buckets.each(function (e, n) {
                e.sort(function (e, n) {
                    return t.get(r, e) - t.get(r, n)
                }), a.push({name: n, indices: e})
            }), a
        }, n.prototype.getAxisTooltipData = function (t, e) {
            M(t) || (t = t ? [t] : []);
            for (var n, i = this.getData(), r = this.getLayerSeries(), o = [], a = r.length, s = 0; a > s; ++s) {
                for (var l = Number.MAX_VALUE, u = -1, h = r[s].indices.length, c = 0; h > c; ++c) {
                    var p = i.get(t[0], r[s].indices[c]), f = Math.abs(p - e);
                    l >= f && (n = p, l = f, u = r[s].indices[c])
                }
                o.push(u)
            }
            return {dataIndices: o, nestestValue: n}
        }, n.prototype.formatTooltip = function (t) {
            var e = this.getData(), n = e.getName(t), i = e.get(e.mapDimension("value"), t);
            return Qu("nameValue", {name: n, value: i})
        }, n.type = "series.themeRiver", n.dependencies = ["singleAxis"], n.defaultOption = {
            zlevel: 0,
            z: 2,
            colorBy: "data",
            coordinateSystem: "singleAxis",
            boundaryGap: ["10%", "10%"],
            singleAxisIndex: 0,
            animationEasing: "linear",
            label: {margin: 4, show: !0, position: "left", fontSize: 11},
            emphasis: {label: {show: !0}}
        }, n
    }(FT);
    qf(Wg);
    var OA = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return e(n, t), n.type = "grid", n.dependencies = ["xAxis", "yAxis"], n.layoutMode = "box", n.defaultOption = {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 70,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }, n
    }(bM), RA = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return e(n, t), n.prototype.getCoordSysModel = function () {
            return this.getReferringComponents("grid", Ix).models[0]
        }, n.type = "cartesian2dAxis", n
    }(bM);
    d(RA, Mk);
    var zA = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {show: !1},
            axisPointer: {},
            axisLine: {
                show: !0,
                onZero: !0,
                onZeroAxisIndex: null,
                lineStyle: {color: "#6E7079", width: 1, type: "solid"},
                symbol: ["none", "none"],
                symbolSize: [10, 15]
            },
            axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
            axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
            splitLine: {show: !0, lineStyle: {color: ["#E0E6F1"], width: 1, type: "solid"}},
            splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]}}
        }, EA = l({
            boundaryGap: !0,
            deduplication: null,
            splitLine: {show: !1},
            axisTick: {alignWithLabel: !1, interval: "auto"},
            axisLabel: {interval: "auto"}
        }, zA), NA = l({
            boundaryGap: [0, 0],
            axisLine: {show: "auto"},
            axisTick: {show: "auto"},
            splitNumber: 5,
            minorTick: {show: !1, splitNumber: 5, length: 3, lineStyle: {}},
            minorSplitLine: {show: !1, lineStyle: {color: "#F4F7FD", width: 1}}
        }, zA), BA = l({
            scale: !0,
            splitNumber: 6,
            axisLabel: {showMinLabel: !1, showMaxLabel: !1, rich: {primary: {fontWeight: "bold"}}},
            splitLine: {show: !1}
        }, NA), FA = c({scale: !0, logBase: 10}, NA), VA = {category: EA, value: NA, time: BA, log: FA},
        HA = {value: 1, category: 1, time: 1, log: 1}, GA = function () {
            function t(t) {
                this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || ""
            }

            return t.prototype.getAxis = function (t) {
                return this._axes[t]
            }, t.prototype.getAxes = function () {
                return v(this._dimList, function (t) {
                    return this._axes[t]
                }, this)
            }, t.prototype.getAxesByScale = function (t) {
                return t = t.toLowerCase(), _(this.getAxes(), function (e) {
                    return e.scale.type === t
                })
            }, t.prototype.addAxis = function (t) {
                var e = t.dim;
                this._axes[e] = t, this._dimList.push(e)
            }, t
        }(), WA = ["x", "y"], UA = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "cartesian2d", e.dimensions = WA, e
            }

            return e(n, t), n.prototype.calcAffineTransform = function () {
                this._transform = this._invTransform = null;
                var t = this.getAxis("x").scale, e = this.getAxis("y").scale;
                if (Yg(t) && Yg(e)) {
                    var n = t.getExtent(), i = e.getExtent(), r = this.dataToPoint([n[0], i[0]]),
                        o = this.dataToPoint([n[1], i[1]]), a = n[1] - n[0], s = i[1] - i[0];
                    if (a && s) {
                        var l = (o[0] - r[0]) / a, u = (o[1] - r[1]) / s, h = r[0] - n[0] * l, c = r[1] - i[0] * u,
                            p = this._transform = [l, 0, 0, u, h, c];
                        this._invTransform = jn([], p)
                    }
                }
            }, n.prototype.getBaseAxis = function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
            }, n.prototype.containPoint = function (t) {
                var e = this.getAxis("x"), n = this.getAxis("y");
                return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
            }, n.prototype.containData = function (t) {
                return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
            }, n.prototype.dataToPoint = function (t, e, n) {
                n = n || [];
                var i = t[0], r = t[1];
                if (this._transform && null != i && isFinite(i) && null != r && isFinite(r)) return ge(n, t, this._transform);
                var o = this.getAxis("x"), a = this.getAxis("y");
                return n[0] = o.toGlobalCoord(o.dataToCoord(i, e)), n[1] = a.toGlobalCoord(a.dataToCoord(r, e)), n
            }, n.prototype.clampData = function (t, e) {
                var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), o = i.getExtent(),
                    a = n.parse(t[0]), s = i.parse(t[1]);
                return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e
            }, n.prototype.pointToData = function (t, e) {
                var n = [];
                if (this._invTransform) return ge(n, t, this._invTransform);
                var i = this.getAxis("x"), r = this.getAxis("y");
                return n[0] = i.coordToData(i.toLocalCoord(t[0]), e), n[1] = r.coordToData(r.toLocalCoord(t[1]), e), n
            }, n.prototype.getOtherAxis = function (t) {
                return this.getAxis("x" === t.dim ? "y" : "x")
            }, n.prototype.getArea = function () {
                var t = this.getAxis("x").getGlobalExtent(), e = this.getAxis("y").getGlobalExtent(),
                    n = Math.min(t[0], t[1]), i = Math.min(e[0], e[1]), r = Math.max(t[0], t[1]) - n,
                    o = Math.max(e[0], e[1]) - i;
                return new ex(n, i, r, o)
            }, n
        }(GA), XA = function (t) {
            function n(e, n, i, r, o) {
                var a = t.call(this, e, n, i) || this;
                return a.index = 0, a.type = r || "value", a.position = o || "bottom", a
            }

            return e(n, t), n.prototype.isHorizontal = function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, n.prototype.getGlobalExtent = function (t) {
                var e = this.getExtent();
                return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
            }, n.prototype.pointToData = function (t, e) {
                return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
            }, n.prototype.setCategorySortInfo = function (t) {
                return "category" !== this.type ? !1 : (this.model.option.categorySortInfo = t, void this.scale.setSortInfo(t))
            }, n
        }(Ek), YA = function () {
            function t(t, e, n) {
                this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = WA, this._initCartesian(t, e, n), this.model = t
            }

            return t.prototype.getRect = function () {
                return this._rect
            }, t.prototype.update = function (t, e) {
                var n = this._axesMap;
                this._updateScale(t, this.model), y(n.x, function (t) {
                    Rf(t.scale, t.model)
                }), y(n.y, function (t) {
                    Rf(t.scale, t.model)
                });
                var i = {};
                y(n.x, function (t) {
                    $g(n, "y", t, i)
                }), y(n.y, function (t) {
                    $g(n, "x", t, i)
                }), this.resize(this.model, e)
            }, t.prototype.resize = function (t, e, n) {
                function i() {
                    y(s, function (t) {
                        var e = t.isHorizontal(), n = e ? [0, a.width] : [0, a.height], i = t.inverse ? 1 : 0;
                        t.setExtent(n[i], n[1 - i]), Qg(t, e ? a.x : a.y)
                    })
                }

                var r = t.getBoxLayoutParams(), o = !n && t.get("containLabel"),
                    a = Cl(r, {width: e.getWidth(), height: e.getHeight()});
                this._rect = a;
                var s = this._axesList;
                i(), o && (y(s, function (t) {
                    if (!t.model.get(["axisLabel", "inside"])) {
                        var e = Ff(t);
                        if (e) {
                            var n = t.isHorizontal() ? "height" : "width", i = t.model.get(["axisLabel", "margin"]);
                            a[n] -= e[n] + i, "top" === t.position ? a.y += e.height + i : "left" === t.position && (a.x += e.width + i)
                        }
                    }
                }), i()), y(this._coordsList, function (t) {
                    t.calcAffineTransform()
                })
            }, t.prototype.getAxis = function (t, e) {
                var n = this._axesMap[t];
                return null != n ? n[e || 0] : void 0
            }, t.prototype.getAxes = function () {
                return this._axesList.slice()
            }, t.prototype.getCartesian = function (t, e) {
                if (null != t && null != e) {
                    var n = "x" + t + "y" + e;
                    return this._coordsMap[n]
                }
                k(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
                for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
            }, t.prototype.getCartesians = function () {
                return this._coordsList.slice()
            }, t.prototype.convertToPixel = function (t, e, n) {
                var i = this._findConvertTarget(e);
                return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
            }, t.prototype.convertFromPixel = function (t, e, n) {
                var i = this._findConvertTarget(e);
                return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
            }, t.prototype._findConvertTarget = function (t) {
                var e, n, i = t.seriesModel, r = t.xAxisModel || i && i.getReferringComponents("xAxis", Ix).models[0],
                    o = t.yAxisModel || i && i.getReferringComponents("yAxis", Ix).models[0], a = t.gridModel,
                    s = this._coordsList;
                if (i) e = i.coordinateSystem, p(s, e) < 0 && (e = null); else if (r && o) e = this.getCartesian(r.componentIndex, o.componentIndex); else if (r) n = this.getAxis("x", r.componentIndex); else if (o) n = this.getAxis("y", o.componentIndex); else if (a) {
                    var l = a.coordinateSystem;
                    l === this && (e = this._coordsList[0])
                }
                return {cartesian: e, axis: n}
            }, t.prototype.containPoint = function (t) {
                var e = this._coordsList[0];
                return e ? e.containPoint(t) : void 0
            }, t.prototype._initCartesian = function (t, e) {
                function n(e) {
                    return function (n, i) {
                        if (Kg(n, t)) {
                            var l = n.get("position");
                            "x" === e ? "top" !== l && "bottom" !== l && (l = o.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = o.left ? "right" : "left"), o[l] = !0;
                            var u = new XA(e, zf(n), [0, 0], n.get("type"), l), h = "category" === u.type;
                            u.onBand = h && n.get("boundaryGap"), u.inverse = n.get("inverse"), n.axis = u, u.model = n, u.grid = r, u.index = i, r._axesList.push(u), a[e][i] = u, s[e]++
                        }
                    }
                }

                var i = this, r = this, o = {left: !1, right: !1, top: !1, bottom: !1}, a = {x: {}, y: {}},
                    s = {x: 0, y: 0};
                return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), s.x && s.y ? (this._axesMap = a, void y(a.x, function (e, n) {
                    y(a.y, function (r, o) {
                        var a = "x" + n + "y" + o, s = new UA(a);
                        s.master = i, s.model = t, i._coordsMap[a] = s, i._coordsList.push(s), s.addAxis(e), s.addAxis(r)
                    })
                })) : (this._axesMap = {}, void (this._axesList = []))
            }, t.prototype._updateScale = function (t, e) {
                function n(t, e) {
                    y(Wf(t, e.dim), function (n) {
                        e.scale.unionExtentFromData(t, n)
                    })
                }

                y(this._axesList, function (t) {
                    if (t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type) {
                        var e = t.model.get("categorySortInfo");
                        t.scale.setSortInfo(e)
                    }
                }), t.eachSeries(function (t) {
                    if (qg(t)) {
                        var i = Zg(t), r = i.xAxisModel, o = i.yAxisModel;
                        if (!Kg(r, e) || !Kg(o, e)) return;
                        var a = this.getCartesian(r.componentIndex, o.componentIndex), s = t.getData(), l = a.getAxis("x"),
                            u = a.getAxis("y");
                        "list" === s.type && (n(s, l), n(s, u))
                    }
                }, this)
            }, t.prototype.getTooltipAxes = function (t) {
                var e = [], n = [];
                return y(this.getCartesians(), function (i) {
                    var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(r);
                    p(e, r) < 0 && e.push(r), p(n, o) < 0 && n.push(o)
                }), {baseAxes: e, otherAxes: n}
            }, t.create = function (e, n) {
                var i = [];
                return e.eachComponent("grid", function (r, o) {
                    var a = new t(r, e, n);
                    a.name = "grid_" + o, a.resize(r, n, !0), r.coordinateSystem = a, i.push(a)
                }), e.eachSeries(function (t) {
                    if (qg(t)) {
                        var e = Zg(t), n = e.xAxisModel, i = e.yAxisModel, r = n.getCoordSysModel(), o = r.coordinateSystem;
                        t.coordinateSystem = o.getCartesian(n.componentIndex, i.componentIndex)
                    }
                }), i
            }, t.dimensions = WA, t
        }(), jA = Math.PI, qA = function () {
            function t(t, e) {
                this.group = new cx, this.opt = e, this.axisModel = t, c(e, {
                    labelOffset: 0,
                    nameDirection: 1,
                    tickDirection: 1,
                    labelDirection: 1,
                    silent: !0,
                    handleAutoShown: function () {
                        return !0
                    }
                });
                var n = new cx({x: e.position[0], y: e.position[1], rotation: e.rotation});
                n.updateTransform(), this._transformGroup = n
            }

            return t.prototype.hasBuilder = function (t) {
                return !!ZA[t]
            }, t.prototype.add = function (t) {
                ZA[t](this.opt, this.axisModel, this.group, this._transformGroup)
            }, t.prototype.getGroup = function () {
                return this.group
            }, t.innerTextLayout = function (t, e, n) {
                var i, r, o = Ii(e - t);
                return Di(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : Di(o - jA) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = o > 0 && jA > o ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
                    rotation: o,
                    textAlign: i,
                    textVerticalAlign: r
                }
            }, t.makeAxisEventDataBase = function (t) {
                var e = {componentType: t.mainType, componentIndex: t.componentIndex};
                return e[t.mainType + "Index"] = t.componentIndex, e
            }, t.isLabelSilent = function (t) {
                var e = t.get("tooltip");
                return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
            }, t
        }(), ZA = {
            axisLine: function (t, e, n, i) {
                var r = e.get(["axisLine", "show"]);
                if ("auto" === r && t.handleAutoShown && (r = t.handleAutoShown("axisLine")), r) {
                    var o = e.axis.getExtent(), a = i.transform, s = [o[0], 0], l = [o[1], 0];
                    a && (ge(s, s, a), ge(l, l, a));
                    var u = h({lineCap: "round"}, e.getModel(["axisLine", "lineStyle"]).getLineStyle()), c = new aS({
                        subPixelOptimize: !0,
                        shape: {x1: s[0], y1: s[1], x2: l[0], y2: l[1]},
                        style: u,
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    });
                    c.anid = "line", n.add(c);
                    var p = e.get(["axisLine", "symbol"]);
                    if (null != p) {
                        var f = e.get(["axisLine", "symbolSize"]);
                        "string" == typeof p && (p = [p, p]), ("string" == typeof f || "number" == typeof f) && (f = [f, f]);
                        var d = $h(e.get(["axisLine", "symbolOffset"]) || 0, f), g = f[0], v = f[1];
                        y([{rotate: t.rotation + Math.PI / 2, offset: d[0], r: 0}, {
                            rotate: t.rotation - Math.PI / 2,
                            offset: d[1],
                            r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
                        }], function (e, i) {
                            if ("none" !== p[i] && null != p[i]) {
                                var r = Zh(p[i], -g / 2, -v / 2, g, v, u.stroke, !0), o = e.r + e.offset;
                                r.attr({
                                    rotation: e.rotate,
                                    x: s[0] + o * Math.cos(t.rotation),
                                    y: s[1] - o * Math.sin(t.rotation),
                                    silent: !0,
                                    z2: 11
                                }), n.add(r)
                            }
                        })
                    }
                }
            }, axisTickLabel: function (t, e, n, i) {
                var r = ay(n, i, e, t), o = ly(n, i, e, t);
                if (ey(e, o, r), sy(n, i, e, t.tickDirection), e.get(["axisLabel", "hideOverlap"])) {
                    var a = Dd(v(o, function (t) {
                        return {label: t, priority: t.z2, defaultAttr: {ignore: t.ignore}}
                    }));
                    Ld(a)
                }
            }, axisName: function (t, e, n, i) {
                var r = N(t.axisName, e.get("name"));
                if (r) {
                    var o, a = e.get("nameLocation"), s = t.nameDirection, l = e.getModel("nameTextStyle"),
                        u = e.get("nameGap") || 0, h = e.axis.getExtent(), c = h[0] > h[1] ? -1 : 1,
                        p = ["start" === a ? h[0] - c * u : "end" === a ? h[1] + c * u : (h[0] + h[1]) / 2, ry(a) ? t.labelOffset + s * u : 0],
                        f = e.get("nameRotate");
                    null != f && (f = f * jA / 180);
                    var d;
                    ry(a) ? o = qA.innerTextLayout(t.rotation, null != f ? f : t.rotation, s) : (o = ty(t.rotation, a, f || 0, h), d = t.axisNameAvailableWidth, null != d && (d = Math.abs(d / Math.sin(o.rotation)), !isFinite(d) && (d = null)));
                    var g = l.getFont(), y = e.get("nameTruncate", !0) || {}, v = y.ellipsis,
                        m = N(t.nameTruncateMaxWidth, y.maxWidth, d), _ = new ew({
                            x: p[0],
                            y: p[1],
                            rotation: o.rotation,
                            silent: qA.isLabelSilent(e),
                            style: Ps(l, {
                                text: r,
                                font: g,
                                overflow: "truncate",
                                width: m,
                                ellipsis: v,
                                fill: l.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
                                align: l.get("align") || o.textAlign,
                                verticalAlign: l.get("verticalAlign") || o.textVerticalAlign
                            }),
                            z2: 1
                        });
                    if (Cs({
                        el: _,
                        componentModel: e,
                        itemName: r
                    }), _.__fullText = r, _.anid = "name", e.get("triggerEvent")) {
                        var x = qA.makeAxisEventDataBase(e);
                        x.targetType = "axisName", x.name = r, rw(_).eventData = x
                    }
                    i.add(_), _.updateTransform(), n.add(_), _.decomposeTransform()
                }
            }
        }, KA = {}, $A = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.render = function (e, n, i) {
                this.axisPointerClass && gy(e), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0)
            }, n.prototype.updateAxisPointer = function (t, e, n) {
                this._doUpdateAxisPointerClass(t, n, !1)
            }, n.prototype.remove = function (t, e) {
                var n = this._axisPointer;
                n && n.remove(e)
            }, n.prototype.dispose = function (e, n) {
                this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments)
            }, n.prototype._doUpdateAxisPointerClass = function (t, e, i) {
                var r = n.getAxisPointerClass(this.axisPointerClass);
                if (r) {
                    var o = vy(t);
                    o ? (this._axisPointer || (this._axisPointer = new r)).render(t, o, e, i) : this._disposeAxisPointer(e)
                }
            }, n.prototype._disposeAxisPointer = function (t) {
                this._axisPointer && this._axisPointer.dispose(t), this._axisPointer = null
            }, n.registerAxisPointerClass = function (t, e) {
                KA[t] = e
            }, n.getAxisPointerClass = function (t) {
                return t && KA[t]
            }, n.type = "axis", n
        }(VT), JA = ar(), QA = ["axisLine", "axisTickLabel", "axisName"], tP = ["splitArea", "splitLine", "minorSplitLine"],
        eP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e.axisPointerClass = "CartesianAxisPointer", e
            }

            return e(n, t), n.prototype.render = function (e, n, i, r) {
                this.group.removeAll();
                var o = this._axisGroup;
                if (this._axisGroup = new cx, this.group.add(this._axisGroup), e.get("show")) {
                    var a = e.getCoordSysModel(), s = jg(a, e), l = new qA(e, h({
                        handleAutoShown: function () {
                            for (var t = a.coordinateSystem.getCartesians(), n = 0; n < t.length; n++) {
                                var i = t[n].getOtherAxis(e.axis).type;
                                if ("value" === i || "log" === i) return !0
                            }
                            return !1
                        }
                    }, s));
                    y(QA, l.add, l), this._axisGroup.add(l.getGroup()), y(tP, function (t) {
                        e.get([t, "show"]) && nP[t](this, this._axisGroup, e, a)
                    }, this);
                    var u = r && "changeAxisOrder" === r.type && r.isInitSort;
                    u || ms(o, this._axisGroup, e), t.prototype.render.call(this, e, n, i, r)
                }
            }, n.prototype.remove = function () {
                by(this)
            }, n.type = "cartesianAxis", n
        }($A), nP = {
            splitLine: function (t, e, n, i) {
                var r = n.axis;
                if (!r.scale.isBlank()) {
                    var o = n.getModel("splitLine"), a = o.getModel("lineStyle"), s = a.get("color");
                    s = M(s) ? s : [s];
                    for (var l = i.coordinateSystem.getRect(), u = r.isHorizontal(), h = 0, p = r.getTicksCoords({tickModel: o}), f = [], d = [], g = a.getLineStyle(), y = 0; y < p.length; y++) {
                        var v = r.toGlobalCoord(p[y].coord);
                        u ? (f[0] = v, f[1] = l.y, d[0] = v, d[1] = l.y + l.height) : (f[0] = l.x, f[1] = v, d[0] = l.x + l.width, d[1] = v);
                        var m = h++ % s.length, _ = p[y].tickValue;
                        e.add(new aS({
                            anid: null != _ ? "line_" + p[y].tickValue : null,
                            subPixelOptimize: !0,
                            autoBatch: !0,
                            shape: {x1: f[0], y1: f[1], x2: d[0], y2: d[1]},
                            style: c({stroke: s[m]}, g),
                            silent: !0
                        }))
                    }
                }
            }, minorSplitLine: function (t, e, n, i) {
                var r = n.axis, o = n.getModel("minorSplitLine"), a = o.getModel("lineStyle"),
                    s = i.coordinateSystem.getRect(), l = r.isHorizontal(), u = r.getMinorTicksCoords();
                if (u.length) for (var h = [], c = [], p = a.getLineStyle(), f = 0; f < u.length; f++) for (var d = 0; d < u[f].length; d++) {
                    var g = r.toGlobalCoord(u[f][d].coord);
                    l ? (h[0] = g, h[1] = s.y, c[0] = g, c[1] = s.y + s.height) : (h[0] = s.x, h[1] = g, c[0] = s.x + s.width, c[1] = g), e.add(new aS({
                        anid: "minor_line_" + u[f][d].tickValue,
                        subPixelOptimize: !0,
                        autoBatch: !0,
                        shape: {x1: h[0], y1: h[1], x2: c[0], y2: c[1]},
                        style: p,
                        silent: !0
                    }))
                }
            }, splitArea: function (t, e, n, i) {
                xy(t, e, n, i)
            }
        }, iP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.type = "xAxis", n
        }(eP), rP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = iP.type, e
            }

            return e(n, t), n.type = "yAxis", n
        }(eP), oP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "grid", e
            }

            return e(n, t), n.prototype.render = function (t) {
                this.group.removeAll(), t.get("show") && this.group.add(new $b({
                    shape: t.coordinateSystem.getRect(),
                    style: c({fill: t.get("backgroundColor")}, t.getItemStyle()),
                    silent: !0,
                    z2: -1
                }))
            }, n.type = "grid", n
        }(VT), aP = {offset: 0};
    qf(wy);
    var sP = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.layoutMode = {type: "box", ignoreSize: !0}, e
        }

        return e(n, t), n.type = "title", n.defaultOption = {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bold", color: "#464646"},
            subtextStyle: {fontSize: 12, color: "#6E7079"}
        }, n
    }(bM), lP = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e
        }

        return e(n, t), n.prototype.render = function (t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, r = t.getModel("textStyle"), o = t.getModel("subtextStyle"), a = t.get("textAlign"),
                    s = B(t.get("textBaseline"), t.get("textVerticalAlign")),
                    l = new ew({style: Ps(r, {text: t.get("text"), fill: r.getTextColor()}, {disableBox: !0}), z2: 10}),
                    u = l.getBoundingRect(), h = t.get("subtext"), c = new ew({
                        style: Ps(o, {
                            text: h,
                            fill: o.getTextColor(),
                            y: u.height + t.get("itemGap"),
                            verticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), p = t.get("link"), f = t.get("sublink"), d = t.get("triggerEvent", !0);
                l.silent = !p && !d, c.silent = !f && !d, p && l.on("click", function () {
                    Ml(p, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    Ml(f, "_" + t.get("subtarget"))
                }), rw(l).eventData = rw(c).eventData = d ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, i.add(l), h && i.add(c);
                var g = i.getBoundingRect(), y = t.getBoxLayoutParams();
                y.width = g.width, y.height = g.height;
                var v = Cl(y, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                a || (a = t.get("left") || t.get("right"), "middle" === a && (a = "center"), "right" === a ? v.x += v.width : "center" === a && (v.x += v.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.x = v.x, i.y = v.y, i.markRedraw();
                var m = {align: a, verticalAlign: s};
                l.setStyle(m), c.setStyle(m), g = i.getBoundingRect();
                var _ = v.margin, x = t.getItemStyle(["color", "opacity"]);
                x.fill = t.get("backgroundColor");
                var b = new $b({
                    shape: {
                        x: g.x - _[3],
                        y: g.y - _[0],
                        width: g.width + _[1] + _[3],
                        height: g.height + _[0] + _[2],
                        r: t.get("borderRadius")
                    }, style: x, subPixelOptimize: !0, silent: !0
                });
                i.add(b)
            }
        }, n.type = "title", n
    }(VT);
    qf(Sy);
    var uP = function (t, e) {
        return "all" === e ? {
            type: "all",
            title: t.getLocaleModel().get(["legend", "selector", "all"])
        } : "inverse" === e ? {
            type: "inverse",
            title: t.getLocaleModel().get(["legend", "selector", "inverse"])
        } : void 0
    }, hP = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.layoutMode = {type: "box", ignoreSize: !0}, e
        }

        return e(n, t), n.prototype.init = function (t, e, n) {
            this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}, this._updateSelector(t)
        }, n.prototype.mergeOption = function (e, n) {
            t.prototype.mergeOption.call(this, e, n), this._updateSelector(e)
        }, n.prototype._updateSelector = function (t) {
            var e = t.selector, n = this.ecModel;
            e === !0 && (e = t.selector = ["all", "inverse"]), M(e) && y(e, function (t, i) {
                C(t) && (t = {type: t}), e[i] = l(t, uP(n, t.type))
            })
        }, n.prototype.optionUpdated = function () {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, n = 0; n < t.length; n++) {
                    var i = t[n].get("name");
                    if (this.isSelected(i)) {
                        this.select(i), e = !0;
                        break
                    }
                }
                !e && this.select(t[0].get("name"))
            }
        }, n.prototype._updateData = function (t) {
            var e = [], n = [];
            t.eachRawSeries(function (i) {
                var r = i.name;
                n.push(r);
                var o;
                if (i.legendVisualProvider) {
                    var a = i.legendVisualProvider, s = a.getAllNames();
                    t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0
                } else o = !0;
                o && er(i) && e.push(i.name)
            }), this._availableNames = n;
            var i = this.get("data") || e, r = v(i, function (t) {
                return ("string" == typeof t || "number" == typeof t) && (t = {name: t}), new XS(t, this, this.ecModel)
            }, this);
            this._data = r
        }, n.prototype.getData = function () {
            return this._data
        }, n.prototype.select = function (t) {
            var e = this.option.selected, n = this.get("selectedMode");
            if ("single" === n) {
                var i = this._data;
                y(i, function (t) {
                    e[t.get("name")] = !1
                })
            }
            e[t] = !0
        }, n.prototype.unSelect = function (t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        }, n.prototype.toggleSelected = function (t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
        }, n.prototype.allSelect = function () {
            var t = this._data, e = this.option.selected;
            y(t, function (t) {
                e[t.get("name", !0)] = !0
            })
        }, n.prototype.inverseSelect = function () {
            var t = this._data, e = this.option.selected;
            y(t, function (t) {
                var n = t.get("name", !0);
                e.hasOwnProperty(n) || (e[n] = !0), e[n] = !e[n]
            })
        }, n.prototype.isSelected = function (t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && p(this._availableNames, t) >= 0
        }, n.prototype.getOrient = function () {
            return "vertical" === this.get("orient") ? {index: 1, name: "vertical"} : {index: 0, name: "horizontal"}
        }, n.type = "legend.plain", n.dependencies = ["series"], n.defaultOption = {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            symbolRotate: "inherit",
            symbolKeepAspect: !0,
            inactiveColor: "#ccc",
            inactiveBorderColor: "#ccc",
            inactiveBorderWidth: "auto",
            itemStyle: {
                color: "inherit",
                opacity: "inherit",
                borderColor: "inherit",
                borderWidth: "auto",
                borderCap: "inherit",
                borderJoin: "inherit",
                borderDashOffset: "inherit",
                borderMiterLimit: "inherit"
            },
            lineStyle: {
                width: "auto",
                color: "inherit",
                inactiveColor: "#ccc",
                inactiveWidth: 2,
                opacity: "inherit",
                type: "inherit",
                cap: "inherit",
                join: "inherit",
                dashOffset: "inherit",
                miterLimit: "inherit"
            },
            textStyle: {color: "#333"},
            selectedMode: !0,
            selector: !1,
            selectorLabel: {
                show: !0,
                borderRadius: 10,
                padding: [3, 5, 3, 5],
                fontSize: 12,
                fontFamily: "sans-serif",
                color: "#666",
                borderWidth: 1,
                borderColor: "#666"
            },
            emphasis: {selectorLabel: {show: !0, color: "#eee", backgroundColor: "#666"}},
            selectorPosition: "auto",
            selectorItemGap: 7,
            selectorButtonGap: 10,
            tooltip: {show: !1}
        }, n
    }(bM), cP = S, pP = y, fP = cx, dP = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.newlineDisabled = !1, e
        }

        return e(n, t), n.prototype.init = function () {
            this.group.add(this._contentGroup = new fP), this.group.add(this._selectorGroup = new fP), this._isFirstRender = !0
        }, n.prototype.getContentGroup = function () {
            return this._contentGroup
        }, n.prototype.getSelectorGroup = function () {
            return this._selectorGroup
        }, n.prototype.render = function (t, e, n) {
            var i = this._isFirstRender;
            if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
                var r = t.get("align"), o = t.get("orient");
                r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === o ? "right" : "left");
                var a = t.get("selector", !0), s = t.get("selectorPosition", !0);
                !a || s && "auto" !== s || (s = "horizontal" === o ? "end" : "start"), this.renderInner(r, t, e, n, a, o, s);
                var l = t.getBoxLayoutParams(), u = {width: n.getWidth(), height: n.getHeight()}, h = t.get("padding"),
                    p = Cl(l, u, h), f = this.layoutInner(t, r, p, i, a, s),
                    d = Cl(c({width: f.width, height: f.height}, l), u, h);
                this.group.x = d.x - f.x, this.group.y = d.y - f.y, this.group.markRedraw(), this.group.add(this._backgroundEl = My(f, t))
            }
        }, n.prototype.resetInner = function () {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll()
        }, n.prototype.renderInner = function (t, e, n, i, r, o, a) {
            var s = this.getContentGroup(), l = Y(), u = e.get("selectedMode"), h = [];
            n.eachRawSeries(function (t) {
                !t.get("legendHoverLink") && h.push(t.id)
            }), pP(e.getData(), function (r, o) {
                var a = r.get("name");
                if (!this.newlineDisabled && ("" === a || "\n" === a)) {
                    var c = new fP;
                    return c.newline = !0, void s.add(c)
                }
                var p = n.getSeriesByName(a)[0];
                if (!l.get(a)) if (p) {
                    var f = p.getData(), d = f.getVisual("legendLineStyle") || {}, g = f.getVisual("legendIcon"),
                        y = f.getVisual("style"), v = this._createItem(p, a, o, r, e, t, d, y, g, u);
                    v.on("click", cP(Iy, a, null, i, h)).on("mouseover", cP(ky, p.name, null, i, h)).on("mouseout", cP(Ay, p.name, null, i, h)), l.set(a, !0)
                } else n.eachRawSeries(function (n) {
                    if (!l.get(a) && n.legendVisualProvider) {
                        var s = n.legendVisualProvider;
                        if (!s.containName(a)) return;
                        var c = s.indexOfName(a), p = s.getItemVisual(c, "style"), f = s.getItemVisual(c, "legendIcon"),
                            d = on(p.fill);
                        d && 0 === d[3] && (d[3] = .2, p.fill = dn(d, "rgba"));
                        var g = this._createItem(n, a, o, r, e, t, {}, p, f, u);
                        g.on("click", cP(Iy, null, a, i, h)).on("mouseover", cP(ky, null, a, i, h)).on("mouseout", cP(Ay, null, a, i, h)), l.set(a, !0)
                    }
                }, this)
            }, this), r && this._createSelector(r, e, i, o, a)
        }, n.prototype._createSelector = function (t, e, n) {
            var i = this.getSelectorGroup();
            pP(t, function (t) {
                var r = t.type, o = new ew({
                    style: {x: 0, y: 0, align: "center", verticalAlign: "middle"}, onclick: function () {
                        n.dispatchAction({type: "all" === r ? "legendAllSelect" : "legendInverseSelect"})
                    }
                });
                i.add(o);
                var a = e.getModel("selectorLabel"), s = e.getModel(["emphasis", "selectorLabel"]);
                ks(o, {normal: a, emphasis: s}, {defaultText: t.title}), xa(o)
            })
        }, n.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u) {
            var h = t.visualDrawType, c = r.get("itemWidth"), p = r.get("itemHeight"), f = r.isSelected(e),
                d = i.get("symbolRotate"), g = i.get("symbolKeepAspect"), y = i.get("icon");
            l = y || l || "roundRect";
            var v = Ty(l, i, a, s, h, f), m = new fP, _ = i.getModel("textStyle");
            if ("function" != typeof t.getLegendIcon || y && "inherit" !== y) {
                var x = "inherit" === y && t.getData().getVisual("symbol") ? "inherit" === d ? t.getData().getVisual("symbolRotate") : d : 0;
                m.add(Cy({
                    itemWidth: c,
                    itemHeight: p,
                    icon: l,
                    iconRotate: x,
                    itemStyle: v.itemStyle,
                    lineStyle: v.lineStyle,
                    symbolKeepAspect: g
                }))
            } else m.add(t.getLegendIcon({
                itemWidth: c,
                itemHeight: p,
                icon: l,
                iconRotate: d,
                itemStyle: v.itemStyle,
                lineStyle: v.lineStyle,
                symbolKeepAspect: g
            }));
            var b = "left" === o ? c + 5 : -5, w = o, S = r.get("formatter"), M = e;
            "string" == typeof S && S ? M = S.replace("{name}", null != e ? e : "") : "function" == typeof S && (M = S(e));
            var T = i.get("inactiveColor");
            m.add(new ew({
                style: Ps(_, {
                    text: M,
                    x: b,
                    y: p / 2,
                    fill: f ? _.getTextColor() : T,
                    align: w,
                    verticalAlign: "middle"
                })
            }));
            var C = new $b({shape: m.getBoundingRect(), invisible: !0}), I = i.getModel("tooltip");
            return I.get("show") && Cs({
                el: C,
                componentModel: r,
                itemName: e,
                itemTooltipOption: I.option
            }), m.add(C), m.eachChild(function (t) {
                t.silent = !0
            }), C.silent = !u, this.getContentGroup().add(m), xa(m), m.__legendDataIndex = n, m
        }, n.prototype.layoutInner = function (t, e, n, i, r, o) {
            var a = this.getContentGroup(), s = this.getSelectorGroup();
            _M(t.get("orient"), a, t.get("itemGap"), n.width, n.height);
            var l = a.getBoundingRect(), u = [-l.x, -l.y];
            if (s.markRedraw(), a.markRedraw(), r) {
                _M("horizontal", s, t.get("selectorItemGap", !0));
                var h = s.getBoundingRect(), c = [-h.x, -h.y], p = t.get("selectorButtonGap", !0),
                    f = t.getOrient().index, d = 0 === f ? "width" : "height", g = 0 === f ? "height" : "width",
                    y = 0 === f ? "y" : "x";
                "end" === o ? c[f] += l[d] + p : u[f] += h[d] + p, c[1 - f] += l[g] / 2 - h[g] / 2, s.x = c[0], s.y = c[1], a.x = u[0], a.y = u[1];
                var v = {x: 0, y: 0};
                return v[d] = l[d] + p + h[d], v[g] = Math.max(l[g], h[g]), v[y] = Math.min(0, h[y] + c[1 - f]), v
            }
            return a.x = u[0], a.y = u[1], this.group.getBoundingRect()
        }, n.prototype.remove = function () {
            this.getContentGroup().removeAll(), this._isFirstRender = !0
        }, n.type = "legend.plain", n
    }(VT), gP = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e
        }

        return e(n, t), n.prototype.setScrollDataIndex = function (t) {
            this.option.scrollDataIndex = t
        }, n.prototype.init = function (e, n, i) {
            var r = kl(e);
            t.prototype.init.call(this, e, n, i), zy(this, e, r)
        }, n.prototype.mergeOption = function (e, n) {
            t.prototype.mergeOption.call(this, e, n), zy(this, this.option, e)
        }, n.type = "legend.scroll", n.defaultOption = Hs(hP.defaultOption, {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
                vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {color: "#333"},
            animationDurationUpdate: 800
        }), n
    }(hP), yP = cx, vP = ["width", "height"], mP = ["x", "y"], _P = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.newlineDisabled = !0, e._currentIndex = 0, e
        }

        return e(n, t), n.prototype.init = function () {
            t.prototype.init.call(this), this.group.add(this._containerGroup = new yP), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new yP)
        }, n.prototype.resetInner = function () {
            t.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
        }, n.prototype.renderInner = function (e, n, i, r, o, a, s) {
            function l(t, e) {
                var i = t + "DataIndex",
                    o = bs(n.get("pageIcons", !0)[n.getOrient().name][e], {onclick: wm(u._pageGo, u, i, n, r)}, {
                        x: -p[0] / 2,
                        y: -p[1] / 2,
                        width: p[0],
                        height: p[1]
                    });
                o.name = t, h.add(o)
            }

            var u = this;
            t.prototype.renderInner.call(this, e, n, i, r, o, a, s);
            var h = this._controllerGroup, c = n.get("pageIconSize", !0), p = M(c) ? c : [c, c];
            l("pagePrev", 0);
            var f = n.getModel("pageTextStyle");
            h.add(new ew({
                name: "pageText",
                style: {
                    text: "xx/xx",
                    fill: f.getTextColor(),
                    font: f.getFont(),
                    verticalAlign: "middle",
                    align: "center"
                },
                silent: !0
            })), l("pageNext", 1)
        }, n.prototype.layoutInner = function (t, e, n, i, r, o) {
            var a = this.getSelectorGroup(), l = t.getOrient().index, u = vP[l], h = mP[l], c = vP[1 - l],
                p = mP[1 - l];
            r && _M("horizontal", a, t.get("selectorItemGap", !0));
            var f = t.get("selectorButtonGap", !0), d = a.getBoundingRect(), g = [-d.x, -d.y], y = s(n);
            r && (y[u] = n[u] - d[u] - f);
            var v = this._layoutContentAndController(t, i, y, l, u, c, p, h);
            if (r) {
                if ("end" === o) g[l] += v[u] + f; else {
                    var m = d[u] + f;
                    g[l] -= m, v[h] -= m
                }
                v[u] += d[u] + f, g[1 - l] += v[p] + v[c] / 2 - d[c] / 2, v[c] = Math.max(v[c], d[c]), v[p] = Math.min(v[p], d[p] + g[1 - l]), a.x = g[0], a.y = g[1], a.markRedraw()
            }
            return v
        }, n.prototype._layoutContentAndController = function (t, e, n, i, r, o, a, s) {
            var l = this.getContentGroup(), u = this._containerGroup, h = this._controllerGroup;
            _M(t.get("orient"), l, t.get("itemGap"), i ? n.width : null, i ? null : n.height), _M("horizontal", h, t.get("pageButtonItemGap", !0));
            var c = l.getBoundingRect(), p = h.getBoundingRect(), f = this._showController = c[r] > n[r],
                d = [-c.x, -c.y];
            e || (d[i] = l[s]);
            var g = [0, 0], y = [-p.x, -p.y], v = B(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            if (f) {
                var m = t.get("pageButtonPosition", !0);
                "end" === m ? y[i] += n[r] - p[r] : g[i] += p[r] + v
            }
            y[1 - i] += c[o] / 2 - p[o] / 2, l.setPosition(d), u.setPosition(g), h.setPosition(y);
            var _ = {x: 0, y: 0};
            if (_[r] = f ? n[r] : c[r], _[o] = Math.max(c[o], p[o]), _[a] = Math.min(0, p[a] + y[1 - i]), u.__rectSize = n[r], f) {
                var x = {x: 0, y: 0};
                x[r] = Math.max(n[r] - p[r] - v, 0), x[o] = _[o], u.setClipPath(new $b({shape: x})), u.__rectSize = x[r]
            } else h.eachChild(function (t) {
                t.attr({invisible: !0, silent: !0})
            });
            var b = this._getPageInfo(t);
            return null != b.pageIndex && Ka(l, {
                x: b.contentPosition[0],
                y: b.contentPosition[1]
            }, f ? t : null), this._updatePageInfoView(t, b), _
        }, n.prototype._pageGo = function (t, e, n) {
            var i = this._getPageInfo(e)[t];
            null != i && n.dispatchAction({type: "legendScroll", scrollDataIndex: i, legendId: e.id})
        }, n.prototype._updatePageInfoView = function (t, e) {
            var n = this._controllerGroup;
            y(["pagePrev", "pageNext"], function (i) {
                var r = i + "DataIndex", o = null != e[r], a = n.childOfName(i);
                a && (a.setStyle("fill", o ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = o ? "pointer" : "default")
            });
            var i = n.childOfName("pageText"), r = t.get("pageFormatter"), o = e.pageIndex, a = null != o ? o + 1 : 0,
                s = e.pageCount;
            i && r && i.setStyle("text", C(r) ? r.replace("{current}", null == a ? "" : a + "").replace("{total}", null == s ? "" : s + "") : r({
                current: a,
                total: s
            }))
        }, n.prototype._getPageInfo = function (t) {
            function e(t) {
                if (t) {
                    var e = t.getBoundingRect(), n = e[l] + t[l];
                    return {s: n, e: n + e[s], i: t.__legendDataIndex}
                }
            }

            function n(t, e) {
                return t.e >= e && t.s <= e + o
            }

            var i = t.get("scrollDataIndex", !0), r = this.getContentGroup(), o = this._containerGroup.__rectSize,
                a = t.getOrient().index, s = vP[a], l = mP[a], u = this._findTargetItemIndex(i), h = r.children(),
                c = h[u], p = h.length, f = p ? 1 : 0, d = {
                    contentPosition: [r.x, r.y],
                    pageCount: f,
                    pageIndex: f - 1,
                    pagePrevDataIndex: null,
                    pageNextDataIndex: null
                };
            if (!c) return d;
            var g = e(c);
            d.contentPosition[a] = -g.s;
            for (var y = u + 1, v = g, m = g, _ = null; p >= y; ++y) _ = e(h[y]), (!_ && m.e > v.s + o || _ && !n(_, v.s)) && (v = m.i > v.i ? m : _, v && (null == d.pageNextDataIndex && (d.pageNextDataIndex = v.i), ++d.pageCount)), m = _;
            for (var y = u - 1, v = g, m = g, _ = null; y >= -1; --y) _ = e(h[y]), _ && n(m, _.s) || !(v.i < m.i) || (m = v, null == d.pagePrevDataIndex && (d.pagePrevDataIndex = v.i), ++d.pageCount, ++d.pageIndex), v = _;
            return d
        }, n.prototype._findTargetItemIndex = function (t) {
            if (!this._showController) return 0;
            var e, n, i = this.getContentGroup();
            return i.eachChild(function (i, r) {
                var o = i.__legendDataIndex;
                null == n && null != o && (n = r), o === t && (e = r)
            }), null != e ? e : n
        }, n.type = "legend.scroll", n
    }(dP);
    qf(Ny);
    var xP = ar(), bP = s, wP = wm, SP = function () {
            function t() {
                this._dragging = !1, this.animationThreshold = 15
            }

            return t.prototype.render = function (t, e, n, i) {
                var r = e.get("value"), o = e.get("status");
                if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {
                    this._lastValue = r, this._lastStatus = o;
                    var a = this._group, s = this._handle;
                    if (!o || "hide" === o) return a && a.hide(), void (s && s.hide());
                    a && a.show(), s && s.show();
                    var l = {};
                    this.makeElOption(l, r, t, e, n);
                    var u = l.graphicKey;
                    u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
                    var h = this._moveAnimation = this.determineAnimation(t, e);
                    if (a) {
                        var c = S(By, e, h);
                        this.updatePointerEl(a, l, c), this.updateLabelEl(a, l, c, e)
                    } else a = this._group = new cx, this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), n.getZr().add(a);
                    Gy(a, e, !0), this._renderHandle(r)
                }
            }, t.prototype.remove = function (t) {
                this.clear(t)
            }, t.prototype.dispose = function (t) {
                this.clear(t)
            }, t.prototype.determineAnimation = function (t, e) {
                var n = e.get("animation"), i = t.axis, r = "category" === i.type, o = e.get("snap");
                if (!o && !r) return !1;
                if ("auto" === n || null == n) {
                    var a = this.animationThreshold;
                    if (r && i.getBandWidth() > a) return !0;
                    if (o) {
                        var s = yy(t).seriesDataCount, l = i.getExtent();
                        return Math.abs(l[0] - l[1]) / s > a
                    }
                    return !1
                }
                return n === !0
            }, t.prototype.makeElOption = function () {
            }, t.prototype.createPointerEl = function (t, e) {
                var n = e.pointer;
                if (n) {
                    var i = xP(t).pointerEl = new AS[n.type](bP(e.pointer));
                    t.add(i)
                }
            }, t.prototype.createLabelEl = function (t, e, n, i) {
                if (e.label) {
                    var r = xP(t).labelEl = new ew(bP(e.label));
                    t.add(r), Vy(r, i)
                }
            }, t.prototype.updatePointerEl = function (t, e, n) {
                var i = xP(t).pointerEl;
                i && e.pointer && (i.setStyle(e.pointer.style), n(i, {shape: e.pointer.shape}))
            }, t.prototype.updateLabelEl = function (t, e, n, i) {
                var r = xP(t).labelEl;
                r && (r.setStyle(e.label.style), n(r, {x: e.label.x, y: e.label.y}), Vy(r, i))
            }, t.prototype._renderHandle = function (t) {
                if (!this._dragging && this.updateHandleTransform) {
                    var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"),
                        o = e.get("status");
                    if (!r.get("show") || !o || "hide" === o) return i && n.remove(i), void (this._handle = null);
                    var a;
                    this._handle || (a = !0, i = this._handle = bs(r.get("icon"), {
                        cursor: "move",
                        draggable: !0,
                        onmousemove: function (t) {
                            Vm(t.event)
                        },
                        onmousedown: wP(this._onHandleDragMove, this, 0, 0),
                        drift: wP(this._onHandleDragMove, this),
                        ondragend: wP(this._onHandleDragEnd, this)
                    }), n.add(i)), Gy(i, e, !1), i.setStyle(r.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
                    var s = r.get("size");
                    M(s) || (s = [s, s]), i.scaleX = s[0] / 2, i.scaleY = s[1] / 2, Dh(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, a)
                }
            }, t.prototype._moveHandleToValue = function (t, e) {
                By(this._axisPointerModel, !e && this._moveAnimation, this._handle, Hy(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
            }, t.prototype._onHandleDragMove = function (t, e) {
                var n = this._handle;
                if (n) {
                    this._dragging = !0;
                    var i = this.updateHandleTransform(Hy(n), [t, e], this._axisModel, this._axisPointerModel);
                    this._payloadInfo = i, n.stopAnimation(), n.attr(Hy(i)), xP(n).lastProp = null, this._doDispatchAxisPointer()
                }
            }, t.prototype._doDispatchAxisPointer = function () {
                var t = this._handle;
                if (t) {
                    var e = this._payloadInfo, n = this._axisModel;
                    this._api.dispatchAction({
                        type: "updateAxisPointer",
                        x: e.cursorPoint[0],
                        y: e.cursorPoint[1],
                        tooltipOption: e.tooltipOption,
                        axesInfo: [{axisDim: n.axis.dim, axisIndex: n.componentIndex}]
                    })
                }
            }, t.prototype._onHandleDragEnd = function () {
                this._dragging = !1;
                var t = this._handle;
                if (t) {
                    var e = this._axisPointerModel.get("value");
                    this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
                }
            }, t.prototype.clear = function (t) {
                this._lastValue = null, this._lastStatus = null;
                var e = t.getZr(), n = this._group, i = this._handle;
                e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
            }, t.prototype.doClear = function () {
            }, t.prototype.buildLabel = function (t, e, n) {
                return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
            }, t
        }(), MP = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.makeElOption = function (t, e, n, i, r) {
                var o = n.axis, a = o.grid, s = i.get("type"), l = $y(a, o).getOtherAxis(o).getGlobalExtent(),
                    u = o.toGlobalCoord(o.dataToCoord(e, !0));
                if (s && "none" !== s) {
                    var h = Wy(i), c = TP[s](o, u, l);
                    c.style = h, t.graphicKey = c.type, t.pointer = c
                }
                var p = jg(a.model, n);
                qy(e, t, p, n, i, r)
            }, n.prototype.getHandleTransform = function (t, e, n) {
                var i = jg(e.axis.grid.model, e, {labelInside: !1});
                i.labelMargin = n.get(["handle", "margin"]);
                var r = jy(e.axis, t, i);
                return {x: r[0], y: r[1], rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)}
            }, n.prototype.updateHandleTransform = function (t, e, n) {
                var i = n.axis, r = i.grid, o = i.getGlobalExtent(!0), a = $y(r, i).getOtherAxis(i).getGlobalExtent(),
                    s = "x" === i.dim ? 0 : 1, l = [t.x, t.y];
                l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);
                var u = (a[1] + a[0]) / 2, h = [u, u];
                h[s] = l[s];
                var c = [{verticalAlign: "middle"}, {align: "center"}];
                return {x: l[0], y: l[1], rotation: t.rotation, cursorPoint: h, tooltipOption: c[s]}
            }, n
        }(SP), TP = {
            line: function (t, e, n) {
                var i = Zy([e, n[0]], [e, n[1]], Jy(t));
                return {type: "Line", subPixelOptimize: !0, shape: i}
            }, shadow: function (t, e, n) {
                var i = Math.max(1, t.getBandWidth()), r = n[1] - n[0];
                return {type: "Rect", shape: Ky([e - i / 2, n[0]], [i, r], Jy(t))}
            }
        }, CP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.type = "axisPointer", n.defaultOption = {
                show: "auto",
                zlevel: 0,
                z: 50,
                type: "line",
                snap: !1,
                triggerTooltip: !0,
                value: null,
                status: null,
                link: [],
                animation: null,
                animationDurationUpdate: 200,
                lineStyle: {color: "#B9BEC9", width: 1, type: "dashed"},
                shadowStyle: {color: "rgba(210,219,238,0.2)"},
                label: {
                    show: !0,
                    formatter: null,
                    precision: "auto",
                    margin: 3,
                    color: "#fff",
                    padding: [5, 7, 5, 7],
                    backgroundColor: "auto",
                    borderColor: null,
                    borderWidth: 0,
                    borderRadius: 3
                },
                handle: {
                    show: !1,
                    icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                    size: 45,
                    margin: 50,
                    color: "#333",
                    shadowBlur: 3,
                    shadowColor: "#aaa",
                    shadowOffsetX: 0,
                    shadowOffsetY: 2,
                    throttle: 40
                }
            }, n
        }(bM), IP = ar(), DP = y, kP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.render = function (t, e, n) {
                var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
                Qy("axisPointer", n, function (t, e, n) {
                    "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                        type: "updateAxisPointer",
                        currTrigger: t,
                        x: e && e.offsetX,
                        y: e && e.offsetY
                    })
                })
            }, n.prototype.remove = function (t, e) {
                ov("axisPointer", e)
            }, n.prototype.dispose = function (t, e) {
                ov("axisPointer", e)
            }, n.type = "axisPointer", n
        }(VT), AP = ar(), PP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.type = "tooltip", n.dependencies = ["axisPointer"], n.defaultOption = {
                zlevel: 0,
                z: 60,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove|click",
                alwaysShowContent: !1,
                displayMode: "single",
                renderMode: "auto",
                confine: null,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "#fff",
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, .2)",
                shadowOffsetX: 1,
                shadowOffsetY: 2,
                borderRadius: 4,
                borderWidth: 1,
                padding: null,
                extraCssText: "",
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: "auto",
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
                },
                textStyle: {color: "#666", fontSize: 14}
            }, n
        }(bM), LP = xv(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        OP = xv(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        RP = bv(OP, "transition"), zP = bv(LP, "transform"),
        EP = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (sm.transform3dSupported ? "will-change:transform;" : ""),
        NP = function () {
            function t(t, e, n) {
                if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._firstShow = !0, this._longHide = !0, sm.wxa) return null;
                var i = document.createElement("div");
                i.domBelongToZr = !0, this.el = i;
                var r = this._zr = e.getZr(), o = this._appendToBody = n && n.appendToBody;
                kv(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t;
                var a = this;
                i.onmouseenter = function () {
                    a._enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0
                }, i.onmousemove = function (t) {
                    if (t = t || window.event, !a._enterable) {
                        var e = r.handler, n = r.painter.getViewportRoot();
                        De(n, t, !0), e.dispatch("mousemove", t)
                    }
                }, i.onmouseleave = function () {
                    a._inContent = !1, a._enterable && a._show && a.hideLater(a._hideDelay)
                }
            }

            return t.prototype.update = function (t) {
                var e = this._container, n = wv(e, "position"), i = e.style;
                "absolute" !== i.position && "absolute" !== n && (i.position = "relative");
                var r = t.get("alwaysShowContent");
                r && this._moveIfResized(), this.el.className = t.get("className") || ""
            }, t.prototype.show = function (t, e) {
                clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
                var n = this.el, i = n.style, r = this._styleCoord;
                n.innerHTML ? i.cssText = EP + Dv(t, !this._firstShow, this._longHide) + Cv(r[0], r[1], !0) + ("border-color:" + Sl(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1
            }, t.prototype.setContent = function (t, e, n, i, r) {
                var o = this.el;
                if (null == t) return void (o.innerHTML = "");
                var a = "";
                if (C(r) && "item" === n.get("trigger") && !_v(n) && (a = Mv(n, i, r)), C(t)) o.innerHTML = t + a; else if (t) {
                    o.innerHTML = "", M(t) || (t = [t]);
                    for (var s = 0; s < t.length; s++) L(t[s]) && t[s].parentNode !== o && o.appendChild(t[s]);
                    if (a && o.childNodes.length) {
                        var l = document.createElement("div");
                        l.innerHTML = a, o.appendChild(l)
                    }
                }
            }, t.prototype.setEnterable = function (t) {
                this._enterable = t
            }, t.prototype.getSize = function () {
                var t = this.el;
                return [t.offsetWidth, t.offsetHeight]
            }, t.prototype.moveTo = function (t, e) {
                var n = this._styleCoord;
                if (kv(n, this._zr, this._appendToBody, t, e), null != n[0] && null != n[1]) {
                    var i = this.el.style, r = Cv(n[0], n[1]);
                    y(r, function (t) {
                        i[t[0]] = t[1]
                    })
                }
            }, t.prototype._moveIfResized = function () {
                var t = this._styleCoord[2], e = this._styleCoord[3];
                this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
            }, t.prototype.hide = function () {
                var t = this, e = this.el.style;
                e.visibility = "hidden", e.opacity = "0", sm.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function () {
                    return t._longHide = !0
                }, 500)
            }, t.prototype.hideLater = function (t) {
                !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(wm(this.hide, this), t)) : this.hide())
            }, t.prototype.isShow = function () {
                return this._show
            }, t.prototype.dispose = function () {
                // Jaina 总是报错,所以注释
                //this.el.parentNode.removeChild(this.el)
            }, t
        }(), BP = function () {
            function t(t) {
                this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._zr = t.getZr(), Lv(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
            }

            return t.prototype.update = function (t) {
                var e = t.get("alwaysShowContent");
                e && this._moveIfResized()
            }, t.prototype.show = function () {
                this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0
            }, t.prototype.setContent = function (t, e, n, i) {
                k(t) && Vi(""), this.el && this._zr.remove(this.el);
                var r = n.getModel("textStyle");
                this.el = new ew({
                    style: {
                        rich: e.richTextStyles,
                        text: t,
                        lineHeight: 22,
                        backgroundColor: n.get("backgroundColor"),
                        borderRadius: n.get("borderRadius"),
                        borderWidth: 1,
                        borderColor: i,
                        shadowColor: n.get("shadowColor"),
                        shadowBlur: n.get("shadowBlur"),
                        shadowOffsetX: n.get("shadowOffsetX"),
                        shadowOffsetY: n.get("shadowOffsetY"),
                        textShadowColor: r.get("textShadowColor"),
                        textShadowBlur: r.get("textShadowBlur") || 0,
                        textShadowOffsetX: r.get("textShadowOffsetX") || 0,
                        textShadowOffsetY: r.get("textShadowOffsetY") || 0,
                        fill: n.get(["textStyle", "color"]),
                        padding: hh(n, "richText"),
                        verticalAlign: "top",
                        align: "left"
                    }, z: n.get("z")
                }), this._zr.add(this.el);
                var o = this;
                this.el.on("mouseover", function () {
                    o._enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0
                }), this.el.on("mouseout", function () {
                    o._enterable && o._show && o.hideLater(o._hideDelay), o._inContent = !1
                })
            }, t.prototype.setEnterable = function (t) {
                this._enterable = t
            }, t.prototype.getSize = function () {
                var t = this.el, e = this.el.getBoundingRect(), n = Pv(t.style);
                return [e.width + n.left + n.right, e.height + n.top + n.bottom]
            }, t.prototype.moveTo = function (t, e) {
                var n = this.el;
                if (n) {
                    var i = this._styleCoord;
                    Lv(i, this._zr, t, e), t = i[0], e = i[1];
                    var r = n.style, o = Av(r.borderWidth || 0), a = Pv(r);
                    n.x = t + o + a.left, n.y = e + o + a.top, n.markRedraw()
                }
            }, t.prototype._moveIfResized = function () {
                var t = this._styleCoord[2], e = this._styleCoord[3];
                this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
            }, t.prototype.hide = function () {
                this.el && this.el.hide(), this._show = !1
            }, t.prototype.hideLater = function (t) {
                !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(wm(this.hide, this), t)) : this.hide())
            }, t.prototype.isShow = function () {
                return this._show
            }, t.prototype.dispose = function () {
                this._zr.remove(this.el)
            }, t
        }(), FP = wm, VP = y, HP = _i, GP = new $b({shape: {x: -1, y: -1, width: 2, height: 2}}), WP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.init = function (t, e) {
                if (!sm.node) {
                    var n = t.getComponent("tooltip"), i = n.get("renderMode");
                    this._renderMode = pr(i), this._tooltipContent = "richText" === this._renderMode ? new BP(e) : new NP(e.getDom(), e, {appendToBody: n.get("appendToBody", !0)})
                }
            }, n.prototype.render = function (t, e, n) {
                if (!sm.node) {
                    this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._alwaysShowContent = t.get("alwaysShowContent");
                    var i = this._tooltipContent;
                    i.update(t), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow(), this._updatePosition = "html" === this._renderMode ? Ih(FP(this._doUpdatePosition, this), 50) : this._doUpdatePosition
                }
            }, n.prototype._initGlobalListener = function () {
                var t = this._tooltipModel, e = t.get("triggerOn");
                Qy("itemTooltip", this._api, FP(function (t, n, i) {
                    "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
                }, this))
            }, n.prototype._keepShow = function () {
                var t = this._tooltipModel, e = this._ecModel, n = this._api;
                if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                    var i = this;
                    clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                        !n.isDisposed() && i.manuallyShowTip(t, e, n, {
                            x: i._lastX,
                            y: i._lastY,
                            dataByCoordSys: i._lastDataByCoordSys
                        })
                    })
                }
            }, n.prototype.manuallyShowTip = function (t, e, n, i) {
                if (i.from !== this.uid && !sm.node) {
                    var r = Rv(i, n);
                    this._ticket = "";
                    var o = i.dataByCoordSys, a = Fv(i, e, n);
                    if (a) {
                        var s = a.el.getBoundingRect().clone();
                        s.applyTransform(a.el.transform), this._tryShow({
                            offsetX: s.x + s.width / 2,
                            offsetY: s.y + s.height / 2,
                            target: a.el,
                            position: i.position,
                            positionDefault: "bottom"
                        }, r)
                    } else if (i.tooltip && null != i.x && null != i.y) {
                        var l = GP;
                        l.x = i.x, l.y = i.y, l.update(), rw(l).tooltipConfig = {
                            name: null,
                            option: i.tooltip
                        }, this._tryShow({offsetX: i.x, offsetY: i.y, target: l}, r)
                    } else if (o) this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        dataByCoordSys: o,
                        tooltipOption: i.tooltipOption
                    }, r); else if (null != i.seriesIndex) {
                        if (this._manuallyAxisShowTip(t, e, n, i)) return;
                        var u = av(i, e), h = u.point[0], c = u.point[1];
                        null != h && null != c && this._tryShow({
                            offsetX: h,
                            offsetY: c,
                            target: u.el,
                            position: i.position,
                            positionDefault: "bottom"
                        }, r)
                    } else null != i.x && null != i.y && (n.dispatchAction({
                        type: "updateAxisPointer",
                        x: i.x,
                        y: i.y
                    }), this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        target: n.getZr().findHover(i.x, i.y).target
                    }, r))
                }
            }, n.prototype.manuallyHideTip = function (t, e, n, i) {
                var r = this._tooltipContent;
                !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, i.from !== this.uid && this._hide(Rv(i, n))
            }, n.prototype._manuallyAxisShowTip = function (t, e, n, i) {
                var r = i.seriesIndex, o = i.dataIndex, a = e.getComponent("axisPointer").coordSysAxesInfo;
                if (null != r && null != o && null != a) {
                    var s = e.getSeriesByIndex(r);
                    if (s) {
                        var l = s.getData(),
                            u = Ov([l.getItemModel(o), s, (s.coordinateSystem || {}).model], this._tooltipModel);
                        if ("axis" === u.get("trigger")) return n.dispatchAction({
                            type: "updateAxisPointer",
                            seriesIndex: r,
                            dataIndex: o,
                            position: i.position
                        }), !0
                    }
                }
            }, n.prototype._tryShow = function (t, e) {
                var n = t.target, i = this._tooltipModel;
                if (i) {
                    this._lastX = t.offsetX, this._lastY = t.offsetY;
                    var r = t.dataByCoordSys;
                    if (r && r.length) this._showAxisTooltip(r, t); else if (n) {
                        this._lastDataByCoordSys = null;
                        var o, a;
                        jh(n, function (t) {
                            return null != rw(t).dataIndex ? (o = t, !0) : null != rw(t).tooltipConfig ? (a = t, !0) : void 0
                        }, !0), o ? this._showSeriesItemTooltip(t, o, e) : a ? this._showComponentItemTooltip(t, a, e) : this._hide(e)
                    } else this._lastDataByCoordSys = null, this._hide(e)
                }
            }, n.prototype._showOrMove = function (t, e) {
                var n = t.get("showDelay");
                e = wm(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
            }, n.prototype._showAxisTooltip = function (t, e) {
                var n = this._ecModel, i = this._tooltipModel, r = [e.offsetX, e.offsetY], o = Ov([e.tooltipOption], i),
                    a = this._renderMode, s = [], l = Qu("section", {blocks: [], noHeader: !0}), u = [], h = new ET;
                VP(t, function (t) {
                    VP(t.dataByAxis, function (t) {
                        var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), i = t.value;
                        if (e && null != i) {
                            var r = Yy(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt),
                                o = Qu("section", {header: r, noHeader: !W(r), sortBlocks: !0, blocks: []});
                            l.blocks.push(o), y(t.seriesDataIndices, function (l) {
                                var c = n.getSeriesByIndex(l.seriesIndex), p = l.dataIndexInside, f = c.getDataParams(p);
                                if (!(f.dataIndex < 0)) {
                                    f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = Bf(e.axis, {value: i}), f.axisValueLabel = r, f.marker = h.makeTooltipMarker("item", Sl(f.color), a);
                                    var d = Ou(c.formatTooltip(p, !0, null));
                                    d.markupFragment && o.blocks.push(d.markupFragment), d.markupText && u.push(d.markupText), s.push(f)
                                }
                            })
                        }
                    })
                }), l.blocks.reverse(), u.reverse();
                var c = e.position, p = o.get("order"), f = nh(l, h, a, p, n.get("useUTC"), o.get("textStyle"));
                f && u.unshift(f);
                var d = "richText" === a ? "\n\n" : "<br/>", g = u.join(d);
                this._showOrMove(o, function () {
                    this._updateContentNotChangedOnAxis(t, s) ? this._updatePosition(o, c, r[0], r[1], this._tooltipContent, s) : this._showTooltipContent(o, g, s, Math.random() + "", r[0], r[1], c, null, h)
                })
            }, n.prototype._showSeriesItemTooltip = function (t, e, n) {
                var i = this._ecModel, r = rw(e), o = r.seriesIndex, a = i.getSeriesByIndex(o), s = r.dataModel || a,
                    l = r.dataIndex, u = r.dataType, h = s.getData(u), c = this._renderMode, p = t.positionDefault,
                    f = Ov([h.getItemModel(l), s, a && (a.coordinateSystem || {}).model], this._tooltipModel, p ? {position: p} : null),
                    d = f.get("trigger");
                if (null == d || "item" === d) {
                    var g = s.getDataParams(l, u), y = new ET;
                    g.marker = y.makeTooltipMarker("item", Sl(g.color), c);
                    var v = Ou(s.formatTooltip(l, !1, u)), m = f.get("order"),
                        _ = v.markupFragment ? nh(v.markupFragment, y, c, m, i.get("useUTC"), f.get("textStyle")) : v.markupText,
                        x = "item_" + s.name + "_" + l;
                    this._showOrMove(f, function () {
                        this._showTooltipContent(f, _, g, x, t.offsetX, t.offsetY, t.position, t.target, y)
                    }), n({
                        type: "showTip",
                        dataIndexInside: l,
                        dataIndex: h.getRawIndex(l),
                        seriesIndex: o,
                        from: this.uid
                    })
                }
            }, n.prototype._showComponentItemTooltip = function (t, e, n) {
                var i = rw(e), r = i.tooltipConfig, o = r.option || {};
                if (C(o)) {
                    var a = o;
                    o = {content: a, formatter: a}
                }
                var l = [o], u = this._ecModel.getComponent(i.componentMainType, i.componentIndex);
                u && l.push(u), l.push({formatter: o.content});
                var h = t.positionDefault, c = Ov(l, this._tooltipModel, h ? {position: h} : null), p = c.get("content"),
                    f = Math.random() + "", d = new ET;
                this._showOrMove(c, function () {
                    var n = s(c.get("formatterParams") || {});
                    this._showTooltipContent(c, p, n, f, t.offsetX, t.offsetY, t.position, e, d)
                }), n({type: "showTip", from: this.uid})
            }, n.prototype._showTooltipContent = function (t, e, n, i, r, o, a, s, l) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var u = this._tooltipContent, h = t.get("formatter");
                    a = a || t.get("position");
                    var c = e, p = this._getNearestPoint([r, o], n, t.get("trigger"), t.get("borderColor")), f = p.color;
                    if (h) if (C(h)) {
                        var d = t.ecModel.get("useUTC"), g = M(n) ? n[0] : n,
                            y = g && g.axisType && g.axisType.indexOf("time") >= 0;
                        c = h, y && (c = Ks(g.axisValue, c, d)), c = _l(c, n, !0)
                    } else if (T(h)) {
                        var v = FP(function (e, i) {
                            e === this._ticket && (u.setContent(i, l, t, f, a), this._updatePosition(t, a, r, o, u, n, s))
                        }, this);
                        this._ticket = i, c = h(n, i, v)
                    } else c = h;
                    u.setContent(c, l, t, f, a), u.show(t, f), this._updatePosition(t, a, r, o, u, n, s)
                }
            }, n.prototype._getNearestPoint = function (t, e, n, i) {
                return "axis" === n || M(e) ? {color: i || ("html" === this._renderMode ? "#fff" : "none")} : M(e) ? void 0 : {color: i || e.color || e.borderColor}
            }, n.prototype._doUpdatePosition = function (t, e, n, i, r, o, a) {
                var s = this._api.getWidth(), l = this._api.getHeight();
                e = e || t.get("position");
                var u = r.getSize(), h = t.get("align"), c = t.get("verticalAlign"), p = a && a.getBoundingRect().clone();
                if (a && p.applyTransform(a.transform), T(e) && (e = e([n, i], o, r.el, p, {
                    viewSize: [s, l],
                    contentSize: u.slice()
                })), M(e)) n = HP(e[0], s), i = HP(e[1], l); else if (k(e)) {
                    var f = e;
                    f.width = u[0], f.height = u[1];
                    var d = Cl(f, {width: s, height: l});
                    n = d.x, i = d.y, h = null, c = null
                } else if (C(e) && a) {
                    var g = Nv(e, p, u, t.get("borderWidth"));
                    n = g[0], i = g[1]
                } else {
                    var g = zv(n, i, r, s, l, h ? null : 20, c ? null : 20);
                    n = g[0], i = g[1]
                }
                if (h && (n -= Bv(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Bv(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), _v(t)) {
                    var g = Ev(n, i, r, s, l);
                    n = g[0], i = g[1]
                }
                r.moveTo(n, i)
            }, n.prototype._updateContentNotChangedOnAxis = function (t, e) {
                var n = this._lastDataByCoordSys, i = this._cbParamsList, r = !!n && n.length === t.length;
                return r && VP(n, function (n, o) {
                    var a = n.dataByAxis || [], s = t[o] || {}, l = s.dataByAxis || [];
                    r = r && a.length === l.length, r && VP(a, function (t, n) {
                        var o = l[n] || {}, a = t.seriesDataIndices || [], s = o.seriesDataIndices || [];
                        r = r && t.value === o.value && t.axisType === o.axisType && t.axisId === o.axisId && a.length === s.length, r && VP(a, function (t, e) {
                            var n = s[e];
                            r = r && t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex
                        }), i && y(t.seriesDataIndices, function (t) {
                            var n = t.seriesIndex, o = e[n], a = i[n];
                            o && a && a.data !== o.data && (r = !1)
                        })
                    })
                }), this._lastDataByCoordSys = t, this._cbParamsList = e, !!r
            }, n.prototype._hide = function (t) {
                this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
            }, n.prototype.dispose = function (t, e) {
                sm.node || (this._tooltipContent.dispose(), ov("itemTooltip", e))
            }, n.type = "tooltip", n
        }(VT);
    qf(Vv);
    var UP = ar(), XP = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.createdBySelf = !1, e
        }

        return e(n, t), n.prototype.init = function (t, e, n) {
            this.mergeDefaultAndTheme(t, n), this._mergeOption(t, n, !1, !0)
        }, n.prototype.isAnimationEnabled = function () {
            if (sm.node) return !1;
            var t = this.__hostSeries;
            return this.getShallow("animation") && t && t.isAnimationEnabled()
        }, n.prototype.mergeOption = function (t, e) {
            this._mergeOption(t, e, !1, !1)
        }, n.prototype._mergeOption = function (t, e, n, i) {
            var r = this.mainType;
            n || e.eachSeries(function (t) {
                var n = t.get(this.mainType, !0), o = UP(t)[r];
                return n && n.data ? (o ? o._mergeOption(n, e, !0) : (i && Gv(n), y(n.data, function (t) {
                    t instanceof Array ? (Gv(t[0]), Gv(t[1])) : Gv(t)
                }), o = this.createMarkerModelFromSeries(n, this, e), h(o, {
                    mainType: this.mainType,
                    seriesIndex: t.seriesIndex,
                    name: t.name,
                    createdBySelf: !0
                }), o.__hostSeries = t), void (UP(t)[r] = o)) : void (UP(t)[r] = null)
            }, this)
        }, n.prototype.formatTooltip = function (t) {
            var e = this.getData(), n = this.getRawValue(t), i = e.getName(t);
            return Qu("section", {
                header: this.name,
                blocks: [Qu("nameValue", {name: i, value: n, noName: !i, noValue: null == n})]
            })
        }, n.prototype.getData = function () {
            return this._data
        }, n.prototype.setData = function (t) {
            this._data = t
        }, n.getMarkerModelFromSeries = function (t, e) {
            return UP(t)[e]
        }, n.type = "marker", n.dependencies = ["series", "grid", "polar", "geo"], n
    }(bM);
    d(XP, vT.prototype);
    var YP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.createMarkerModelFromSeries = function (t, e, i) {
                return new n(t, e, i)
            }, n.type = "markArea", n.defaultOption = {
                zlevel: 0,
                z: 1,
                tooltip: {trigger: "item"},
                animation: !1,
                label: {show: !0, position: "top"},
                itemStyle: {borderWidth: 0},
                emphasis: {label: {show: !0, position: "top"}}
            }, n
        }(XP), jP = {min: S(Xv, "min"), max: S(Xv, "max"), average: S(Xv, "average"), median: S(Xv, "median")}, qP = ar(),
        ZP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.init = function () {
                this.markerGroupMap = Y()
            }, n.prototype.render = function (t, e, n) {
                var i = this, r = this.markerGroupMap;
                r.each(function (t) {
                    qP(t).keep = !1
                }), e.eachSeries(function (t) {
                    var r = XP.getMarkerModelFromSeries(t, i.type);
                    r && i.renderSeries(t, r, e, n)
                }), r.each(function (t) {
                    !qP(t).keep && i.group.remove(t.group)
                })
            }, n.prototype.markKeep = function (t) {
                qP(t).keep = !0
            }, n.prototype.blurSeries = function (t) {
                var e = this;
                y(t, function (t) {
                    var n = XP.getMarkerModelFromSeries(t, e.type);
                    if (n) {
                        var i = n.getData();
                        i.eachItemGraphicEl(function (t) {
                            t && oa(t)
                        })
                    }
                })
            }, n.type = "marker", n
        }(VT), KP = ar(), $P = function (t, e, n, i) {
            var r = Yv(t, i[0]), o = Yv(t, i[1]), a = r.coord, s = o.coord;
            a[0] = N(a[0], -1 / 0), a[1] = N(a[1], -1 / 0), s[0] = N(s[0], 1 / 0), s[1] = N(s[1], 1 / 0);
            var l = u([{}, r, o]);
            return l.coord = [r.coord, o.coord], l.x0 = r.x, l.y0 = r.y, l.x1 = o.x, l.y1 = o.y, l
        }, JP = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]], QP = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.updateTransform = function (t, e, n) {
                e.eachSeries(function (t) {
                    var e = XP.getMarkerModelFromSeries(t, "markArea");
                    if (e) {
                        var i = e.getData();
                        i.each(function (e) {
                            var r = v(JP, function (r) {
                                return tm(i, e, r, t, n)
                            });
                            i.setItemLayout(e, r);
                            var o = i.getItemGraphicEl(e);
                            o.setShape("points", r)
                        })
                    }
                }, this)
            }, n.prototype.renderSeries = function (t, e, n, i) {
                var r = t.coordinateSystem, o = t.id, a = t.getData(), s = this.markerGroupMap,
                    l = s.get(o) || s.set(o, {group: new cx});
                this.group.add(l.group), this.markKeep(l);
                var u = em(r, t, e);
                e.setData(u), u.each(function (e) {
                    var n = v(JP, function (n) {
                            return tm(u, e, n, t, i)
                        }), o = r.getAxis("x").scale, s = r.getAxis("y").scale, l = o.getExtent(), h = s.getExtent(),
                        c = [o.parse(u.get("x0", e)), o.parse(u.get("x1", e))],
                        p = [s.parse(u.get("y0", e)), s.parse(u.get("y1", e))];
                    bi(c), bi(p);
                    var f = !(l[0] > c[1] || l[1] < c[0] || h[0] > p[1] || h[1] < p[0]), d = !f;
                    u.setItemLayout(e, {points: n, allClipped: d});
                    var g = u.getItemModel(e).getModel("itemStyle").getItemStyle(), y = Wh(a, "color");
                    g.fill || (g.fill = y, "string" == typeof g.fill && (g.fill = fn(g.fill, .4))), g.stroke || (g.stroke = y), u.setItemVisual(e, "style", g)
                }), u.diff(KP(l).data).add(function (t) {
                    var e = u.getItemLayout(t);
                    if (!e.allClipped) {
                        var n = new eS({shape: {points: e.points}});
                        u.setItemGraphicEl(t, n), l.group.add(n)
                    }
                }).update(function (t, n) {
                    var i = KP(l).data.getItemGraphicEl(n), r = u.getItemLayout(t);
                    r.allClipped ? i && l.group.remove(i) : (i ? Ka(i, {shape: {points: r.points}}, e, t) : i = new eS({shape: {points: r.points}}), u.setItemGraphicEl(t, i), l.group.add(i))
                }).remove(function (t) {
                    var e = KP(l).data.getItemGraphicEl(t);
                    l.group.remove(e)
                }).execute(), u.eachItemGraphicEl(function (t, n) {
                    var i = u.getItemModel(n), r = u.getItemVisual(n, "style");
                    t.useStyle(u.getItemVisual(n, "style")), ks(t, As(i), {
                        labelFetcher: e,
                        labelDataIndex: n,
                        defaultText: u.getName(n) || "",
                        inheritColor: "string" == typeof r.fill ? fn(r.fill, 1) : "#000"
                    }), wa(t, i), xa(t), rw(t).dataModel = e
                }), KP(l).data = u, l.group.silent = e.get("silent") || t.get("silent")
            }, n.type = "markArea", n
        }(ZP);
    qf(nm), t.version = vI, t.dependencies = mI, t.PRIORITY = zI, t.init = lp, t.connect = up, t.disConnect = hp, t.disconnect = CD, t.dispose = cp, t.getInstanceByDom = pp, t.getInstanceById = fp, t.registerTheme = dp, t.registerPreprocessor = gp, t.registerProcessor = yp, t.registerPostInit = vp, t.registerPostUpdate = mp, t.registerUpdateLifecycle = _p, t.registerAction = xp, t.registerCoordinateSystem = bp, t.getCoordinateSystemDimensions = wp, t.registerLayout = Sp, t.registerVisual = Mp, t.registerLoading = Cp, t.setCanvasCreator = Ip, t.registerMap = Dp, t.getMap = kp, t.registerTransform = DD, t.dataTool = ED, t.registerLocale = Gs, t.zrender = vx, t.matrix = N_, t.vector = Am, t.zrUtil = Tm, t.color = f_, t.helper = Ck, t.number = kk, t.time = Ak, t.graphic = Pk, t.format = Lk, t.util = Ok, t.List = KD, t.ComponentModel = bM, t.ComponentView = VT, t.SeriesModel = FT, t.ChartView = WT, t.extendComponentModel = cd, t.extendComponentView = pd, t.extendSeriesModel = fd, t.extendChartView = dd, t.throttle = Ih, t.use = qf, t.parseGeoJSON = Jc, t.parseGeoJson = Jc, t.env = sm, t.Model = XS, t.Axis = Ek, t.innerDrawElementOnCanvas = bc
});