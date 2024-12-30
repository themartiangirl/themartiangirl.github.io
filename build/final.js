!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return Z.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (at.test(t))
                return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(dt) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1),
        Z.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = Z.expando + a.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(bt, "-$1").toLowerCase(),
            n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                yt.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function h(e) {
        var t = Pt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }
    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e),
            s = vt.set(t, o),
            l = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; r > n; n++)
                        Z.event.add(t, i, l[i][n])
            }
            yt.hasData(e) && (a = yt.access(e),
            u = Z.extend({}, a),
            yt.set(t, u))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Nt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(),
        o
    }
    function b(e) {
        var t = J
          , n = $t[e];
        return n || (n = x(e, t),
        "none" !== n && n || (Wt = (Wt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Wt[0].contentDocument,
        t.write(),
        t.close(),
        n = x(e, t),
        Wt.detach()),
        $t[e] = n),
        n
    }
    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _t(e),
        n && (s = n.getPropertyValue(t) || n[t]),
        n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)),
        Bt.test(s) && It.test(t) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function T(e, t) {
        return {
            get: function() {
                return e() ? (delete this.get,
                void 0) : (this.get = t).apply(this, arguments)
            }
        }
    }
    function C(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--; )
            if (t = Gt[i] + n,
            t in e)
                return t;
        return r
    }
    function N(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += Z.css(e, n + Tt[o], !0, i)),
            r ? ("content" === n && (s -= Z.css(e, "padding" + Tt[o], !0, i)),
            "margin" !== n && (s -= Z.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Tt[o], !0, i),
            "padding" !== n && (s += Z.css(e, "border" + Tt[o] + "Width", !0, i)));
        return s
    }
    function E(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = _t(e)
          , s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Bt.test(i))
                return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
            r = e[s],
            r.style && (o[s] = vt.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Ct(r) && (o[s] = vt.access(r, "olddisplay", b(r.nodeName)))) : (i = Ct(r),
            "none" === n && i || vt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = e[s],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function D(e, t, n, r, i) {
        return new D.prototype.init(e,t,n,r,i)
    }
    function j() {
        return setTimeout(function() {
            Qt = void 0
        }),
        Qt = Z.now()
    }
    function A(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Tt[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function L(e, t, n) {
        for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ct(e), g = vt.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        u = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || u()
        }
        ),
        a.unqueued++,
        f.always(function() {
            f.always(function() {
                a.unqueued--,
                Z.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        l = Z.css(e, "display"),
        c = "none" === l ? vt.get(e, "olddisplay") || b(e.nodeName) : l,
        "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Kt.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else
                l = void 0;
        if (Z.isEmptyObject(p))
            "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = vt.access(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }),
            f.done(function() {
                var t;
                vt.remove(e, "fxshow");
                for (t in p)
                    Z.style(e, t, p[t])
            });
            for (r in p)
                s = L(h ? g[r] : 0, r, f),
                r in g || (g[r] = s.start,
                h && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n),
            i = t[r],
            o = e[n],
            Z.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            s = Z.cssHooks[r],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function O(e, t, n) {
        var r, i, o = 0, s = tn.length, a = Z.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = Qt || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)
                l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
            1 > o && u ? n : (a.resolveWith(e, [l]),
            !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qt || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)
            if (r = tn[o].call(l, e, c, l.opts))
                return r;
        return Z.map(c, L, l),
        Z.isFunction(l.opts.start) && l.opts.start.call(e, l),
        Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(dt) || [];
            if (Z.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                i(l),
                !1)
            }),
            u
        }
        var o = {}
          , s = e === bn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r),
        e
    }
    function M(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o),
        n[o]) : void 0
    }
    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o],
                    !s)
                        for (i in l)
                            if (a = i.split(" "),
                            a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t))
            Z.each(t, function(t, i) {
                n || kn.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== Z.type(t))
            r(e, t);
        else
            for (i in t)
                $(e + "[" + i + "]", t[i], n, r)
    }
    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = []
      , _ = B.slice
      , z = B.concat
      , X = B.push
      , U = B.indexOf
      , V = {}
      , Y = V.toString
      , G = V.hasOwnProperty
      , Q = {}
      , J = e.document
      , K = "2.1.3"
      , Z = function(e, t) {
        return new Z.fn.init(e,t)
    }
      , et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , tt = /^-ms-/
      , nt = /-([\da-z])/gi
      , rt = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: B.sort,
        splice: B.splice
    },
    Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || Z.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    r = e[t],
                    s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1,
                    o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {},
                    s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"),
            t.text = e,
            J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, rt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0, s = e.length, a = n(e);
            if (r) {
                if (a)
                    for (; s > o && (i = t.apply(e[o], r),
                    i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.apply(e[o], r),
                        i === !1)
                            break
            } else if (a)
                for (; s > o && (i = t.call(e[o], o, e[o]),
                i !== !1); o++)
                    ;
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]),
                    i === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)
                r = !t(e[o], o),
                r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0, s = e.length, a = n(e), u = [];
            if (a)
                for (; s > o; o++)
                    i = t(e[o], o, r),
                    null != i && u.push(i);
            else
                for (o in e)
                    i = t(e[o], o, r),
                    null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            Z.isFunction(e) ? (r = _.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || Z.guid++,
            i) : void 0
        },
        now: Date.now,
        support: Q
    }),
    Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var it = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t),
            t = t || q,
            n = n || [],
            a = t.nodeType,
            "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
                return n;
            if (!r && O) {
                if (11 !== a && (i = yt.exec(e)))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s)
                            return n.push(o),
                            n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = i[3]) && w.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W,
                    h = t,
                    g = 1 !== a && e,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e),
                        (f = t.getAttribute("id")) ? d = f.replace(bt, "\\$&") : t.setAttribute("id", d),
                        d = "[id='" + d + "'] ",
                        u = l.length; u--; )
                            l[u] = d + p(l[u]);
                        h = xt.test(e) && c(t.parentNode) || t,
                        g = l.join(",")
                    }
                    if (g)
                        try {
                            return K.apply(n, h.querySelectorAll(g)),
                            n
                        } catch (m) {} finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(ut, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[W] = !0,
            e
        }
        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, u, l = [I, o];
                if (s) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}),
                            (a = u[r]) && a[0] === I && a[1] === o)
                                return l[2] = a[2];
                            if (u[r] = l,
                            l[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
                l && t.push(a));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)),
            o && !o[W] && (o = v(o, s)),
            r(function(r, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u),
                i)
                    for (l = m(x, d),
                    i(l, [], a, u),
                    c = l.length; c--; )
                        (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = x.length; c--; )
                                (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--; )
                            (f = x[c]) && (l = o ? et(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else
                    x = m(x === s ? x.splice(h, x.length) : x),
                    o ? o(null, s, x, u) : K.apply(s, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, s, !0), l = d(function(e) {
                return et(t, e) > -1
            }, s, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                i
            }
            ]; i > a; a++)
                if (n = T.relative[e[a].type])
                    c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches),
                    n[W]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++)
                            ;
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ut, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , s = function(r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = D, x = r || o && T.find.TAG("*", l), b = I += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = e[f++]; )
                            if (p(c, s, a)) {
                                u.push(c);
                                break
                            }
                        l && (I = b)
                    }
                    i && ((c = !p && c) && d--,
                    r && g.push(c))
                }
                if (d += h,
                i && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(g, v, s, a);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = Q.call(u));
                        v = m(v)
                    }
                    K.apply(u, v),
                    l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (I = b,
                D = y),
                g
            };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date, $ = e.document, I = 0, B = 0, _ = n(), z = n(), X = n(), U = function(e, t) {
            return e === t && (A = !0),
            0
        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, et = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"), ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", at = new RegExp(nt + "+","g"), ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), pt = new RegExp(st), dt = new RegExp("^" + it + "$"), ht = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + tt + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, gt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /[+~]/, bt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), Tt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ct = function() {
            L()
        };
        try {
            K.apply(G = Z.call($.childNodes), $.childNodes),
            G[$.childNodes.length].nodeType
        } catch (Nt) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r,
            H = r.documentElement,
            n = r.defaultView,
            n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)),
            O = !N(r),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = vt.test(r.getElementsByClassName),
            w.getById = i(function(e) {
                return H.appendChild(e).id = W,
                !r.getElementsByName || !r.getElementsByName(W).length
            }),
            w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }
            ,
            P = [],
            F = [],
            (w.qsa = vt.test(r.querySelectorAll)) && (i(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"),
                e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (w.matchesSelector = vt.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                P.push("!=", st)
            }),
            F = F.length && new RegExp(F.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = vt.test(H.compareDocumentPosition),
            M = t || vt.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? et(j, e) - et(j, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (!o || !a)
                    return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? et(j, e) - et(j, t) : 0;
                if (o === a)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; u[i] === l[i]; )
                    i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }
            ,
            r) : q
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e),
            n = n.replace(ft, "='$1']"),
            !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n)))
                try {
                    var r = R.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e),
            M(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates,
            j = !w.sortStable && e.slice(0),
            e.sort(U),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return j = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }
        ,
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, Tt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (c = m[W] || (m[W] = {}),
                                l = c[e] || [],
                                d = l[0] === I && l[1],
                                p = l[0] === I && l[2],
                                f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [I, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I)
                                p = l[1];
                            else
                                for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]),
                                f !== t)); )
                                    ;
                            return p -= i,
                            p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                            r = et(e, i[s]),
                            e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = E(e.replace(ut, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(wt, Tt),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return dt.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(wt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return mt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = e,
            u = [],
            l = T.preFilter; a; ) {
                (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                u.push(o = [])),
                r = !1,
                (i = ct.exec(a)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }),
                a = a.slice(r.length));
                for (s in T.filter)
                    !(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }
        ,
        E = t.compile = function(e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)),
                o.selector = e
            }
            return o
        }
        ,
        S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
            if (n = n || [],
            1 === f.length) {
                if (o = f[0] = f[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(wt, Tt), t) || [])[0],
                    !t)
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !T.relative[a = s.type]); )
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(wt, Tt), xt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && p(o),
                        !e)
                            return K.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || E(e, f))(r, t, !O, n, xt.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = W.split("").sort(U).join("") === W,
        w.detectDuplicates = !!A,
        L(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    Z.find = it,
    Z.expr = it.selectors,
    Z.expr[":"] = Z.expr.pseudos,
    Z.unique = it.uniqueSort,
    Z.text = it.getText,
    Z.isXMLDoc = it.isXML,
    Z.contains = it.contains;
    var ot = Z.expr.match.needsContext
      , st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , at = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    Z.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(i[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = Z.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t,
                Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                st.test(n[1]) && Z.isPlainObject(t))
                    for (n in t)
                        Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]),
            r && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        Z.makeArray(e, this))
    }
    ;
    ct.prototype = Z.fn,
    ut = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/
      , pt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    Z.fn.extend({
        has: function(e) {
            var t = Z(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = Z.filter(r, i)),
            this.length > 1 && (pt[e] || Z.unique(i),
            ft.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var dt = /\S+/g
      , ht = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function(o) {
            for (t = e.memory && o,
            n = !0,
            a = i || 0,
            i = 0,
            s = u.length,
            r = !0; u && s > a; a++)
                if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        Z.each(t, function(t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments),
                    r ? s = u.length : t && (i = n,
                    c(t))
                }
                return this
            },
            remove: function() {
                return u && Z.each(arguments, function(e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        r && (s >= n && s--,
                        a >= n && a--)
                }),
                this
            },
            has: function(e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                s = 0,
                this
            },
            disable: function() {
                return u = l = t = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                t || f.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return !u || n && !l || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                r ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }
    ,
    Z.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return Z.Deferred(function(n) {
                        Z.each(t, function(t, o) {
                            var s = Z.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? Z.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            Z.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = _.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? _.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                r = new Array(s); s > i; i++)
                    o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    });
    var gt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e),
        this
    }
    ,
    Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0,
            e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]),
            Z.fn.triggerHandler && (Z(J).triggerHandler("ready"),
            Z(J).off("ready"))))
        }
    }),
    Z.ready.promise = function(t) {
        return gt || (gt = Z.Deferred(),
        "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1),
        e.addEventListener("load", s, !1))),
        gt.promise(t)
    }
    ,
    Z.ready.promise();
    var mt = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0
          , u = e.length
          , l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n)
                Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0,
        Z.isFunction(r) || (s = !0),
        l && (s ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(Z(e), n)
        }
        )),
        t))
            for (; u > a; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
    ;
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ,
    a.uid = 1,
    a.accepts = Z.acceptData,
    a.prototype = {
        key: function(e) {
            if (!a.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)
                o[t] = n;
            else if (Z.isEmptyObject(o))
                Z.extend(this.cache[i], t);
            else
                for (r in t)
                    o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
            void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t),
                t in s ? r = [t, i] : (r = i,
                r = r in s ? [r] : r.match(dt) || [])),
                n = r.length;
                for (; n--; )
                    delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var vt = new a
      , yt = new a
      , xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , bt = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return yt.hasData(e) || vt.hasData(e)
        },
        data: function(e, t, n) {
            return yt.access(e, t, n)
        },
        removeData: function(e, t) {
            yt.remove(e, t)
        },
        _data: function(e, t, n) {
            return vt.access(e, t, n)
        },
        _removeData: function(e, t) {
            vt.remove(e, t)
        }
    }),
    Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = yt.get(o),
                1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (r = s[n].name,
                        0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)),
                        u(o, r, i[r])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                yt.set(this, e)
            }) : mt(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e),
                    void 0 !== n)
                        return n;
                    if (n = yt.get(o, r),
                    void 0 !== n)
                        return n;
                    if (n = u(o, r, void 0),
                    void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        var n = yt.get(this, r);
                        yt.set(this, r, t),
                        -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                yt.remove(this, e)
            })
        }
    }),
    Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = vt.get(e, t),
            n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = Z._queueHooks(e, t)
              , s = function() {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                n = vt.get(o[s], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Tt = ["Top", "Right", "Bottom", "Left"]
      , Ct = function(e, t) {
        return e = t || e,
        "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }
      , Nt = /^(?:checkbox|radio)$/i;
    !function() {
        var e = J.createDocumentFragment()
          , t = e.appendChild(J.createElement("div"))
          , n = J.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    Q.focusinBubbles = "onfocusin"in e;
    var Et = /^key/
      , St = /^(?:mouse|pointer|contextmenu)|click/
      , Dt = /^(?:focusinfocus|focusoutblur)$/
      , jt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.get(e);
            if (m)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                n.guid || (n.guid = Z.guid++),
                (u = m.events) || (u = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(dt) || [""],
                l = t.length; l--; )
                    a = jt.exec(t[l]) || [],
                    d = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d && (f = Z.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = Z.event.special[d] || {},
                    c = Z.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && Z.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || (p = u[d] = [],
                    p.delegateCount = 0,
                    f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.hasData(e) && vt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(dt) || [""],
                l = t.length; l--; )
                    if (a = jt.exec(t[l]) || [],
                    d = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = Z.event.special[d] || {},
                        d = (r ? f.delegateType : f.bindType) || d,
                        p = u[d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle,
                vt.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J,
            3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            l = d.indexOf(":") < 0 && "on" + d,
            t = t[Z.expando] ? t : new Z.Event(d,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : Z.makeArray(n, [t]),
            f = Z.event.special[d] || {},
            i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d,
                    Dt.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || d,
                    c = (vt.get(s, "events") || {})[t.type] && vt.get(s, "handle"),
                    c && c.apply(s, n),
                    c = l && s[l],
                    c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n),
                    t.result === !1 && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l],
                a && (r[l] = null),
                Z.event.triggered = d,
                r[d](),
                Z.event.triggered = void 0,
                a && (r[l] = a)),
                t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (vt.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u),
                t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [],
                        n = 0; a > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[Z.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new Z.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e,
        t && Z.extend(this, t),
        this.timeStamp = e && e.timeStamp || Z.now(),
        this[Z.expando] = !0,
        void 0) : new Z.Event(e,t)
    }
    ,
    Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = vt.access(r, t);
                i || r.addEventListener(e, n, !0),
                vt.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = vt.access(r, t) - 1;
                i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0),
                vt.remove(r, t))
            }
        }
    }),
    Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (s in e)
                    this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            r === !1)
                r = c;
            else if (!r)
                return this;
            return 1 === i && (o = r,
            r = function(e) {
                return Z().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = Z.guid++)),
            this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = c),
            this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Lt = /<([\w:]+)/
      , qt = /<|&#?\w+;/
      , Ht = /<(?:script|style|link)/i
      , Ot = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ft = /^$|\/(?:java|ecma)script/i
      , Pt = /^true\/(.*)/
      , Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Mt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mt.optgroup = Mt.option,
    Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead,
    Mt.th = Mt.td,
    Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a),
                o = v(e),
                r = 0,
                i = o.length; i > r; r++)
                    y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e),
                    s = s || v(a),
                    r = 0,
                    i = o.length; i > r; r++)
                        m(o[r], s[r]);
                else
                    m(e, a);
            return s = v(a, "script"),
            s.length > 0 && g(s, !u && v(e, "script")),
            a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p],
                i || 0 === i)
                    if ("object" === Z.type(i))
                        Z.merge(f, i.nodeType ? [i] : i);
                    else if (qt.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")),
                        s = (Lt.exec(i) || ["", ""])[1].toLowerCase(),
                        a = Mt[s] || Mt._default,
                        o.innerHTML = a[1] + i.replace(At, "<$1></$2>") + a[2],
                        l = a[0]; l--; )
                            o = o.lastChild;
                        Z.merge(f, o.childNodes),
                        o = c.firstChild,
                        o.textContent = ""
                    } else
                        f.push(t.createTextNode(i));
            for (c.textContent = "",
            p = 0; i = f[p++]; )
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i),
                o = v(c.appendChild(i), "script"),
                u && g(o),
                n))
                    for (l = 0; i = o[l++]; )
                        Ft.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[vt.expando],
                i && (t = vt.cache[i]))) {
                    if (t.events)
                        for (r in t.events)
                            o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    vt.cache[i] && delete vt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }),
    Z.fn.extend({
        text: function(e) {
            return mt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || Z.cleanData(v(n)),
                n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (Z.cleanData(v(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return mt(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ht.test(e) && !Mt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(At, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (Z.cleanData(v(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                Z.cleanData(v(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Ot.test(p))
                return this.each(function(n) {
                    var r = c.eq(n);
                    g && (e[0] = p.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this),
            r = n.firstChild,
            1 === n.childNodes.length && (n = r),
            r)) {
                for (i = Z.map(v(n, "script"), d),
                o = i.length; l > u; u++)
                    s = n,
                    u !== f && (s = Z.clone(s, !0, !0),
                    o && Z.merge(i, v(s, "script"))),
                    t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument,
                    Z.map(i, h),
                    u = 0; o > u; u++)
                        s = i[u],
                        Ft.test(s.type || "") && !vt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Rt, "")))
            }
            return this
        }
    }),
    Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++)
                n = s === o ? this : this.clone(!0),
                Z(i[s])[t](n),
                X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Wt, $t = {}, It = /^margin/, Bt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$","i"), _t = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            s.innerHTML = "",
            i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top,
            r = "4px" === t.width,
            i.removeChild(o)
        }
        var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        Q.clearCloneStyle = "content-box" === s.style.backgroundClip,
        o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        o.appendChild(s),
        e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                s.style.width = "1px",
                i.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                i.removeChild(o),
                s.removeChild(n),
                t
            }
        }))
    }(),
    Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = s[o];
        return i
    }
    ;
    var zt = /^(none|table(?!-c[ea]).+)/
      , Xt = new RegExp("^(" + wt + ")(.*)$","i")
      , Ut = new RegExp("^([+-])=(" + wt + ")","i")
      , Vt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Yt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Gt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)),
                s = Z.cssHooks[t] || Z.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                "string" === o && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)),
                o = "number"),
                null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"),
                Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)),
                void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)),
            s = Z.cssHooks[t] || Z.cssHooks[a],
            s && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = w(e, t, r)),
            "normal" === i && t in Yt && (i = Yt[t]),
            "" === n || n ? (o = parseFloat(i),
            n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }),
    Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? zt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Vt, function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _t(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }),
    Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        It.test(e) || (Z.cssHooks[e + t].set = N)
    }),
    Z.fn.extend({
        css: function(e, t) {
            return mt(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Z.isArray(t)) {
                    for (r = _t(e),
                    i = t.length; i > s; s++)
                        o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }),
    Z.Tween = D,
    D.prototype = {
        constructor: D,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : D.propHooks._default.set(this),
            this
        }
    },
    D.prototype.init.prototype = D.prototype,
    D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    Z.fx = D.prototype.init,
    Z.fx.step = {};
    var Qt, Jt, Kt = /^(?:toggle|show|hide)$/, Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$","i"), en = /queueHooks$/, tn = [q], nn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Zt.exec(t)
              , o = i && i[3] || (Z.cssNumber[e] ? "" : "px")
              , s = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e))
              , a = 1
              , u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                i = i || [],
                s = +r || 1;
                do
                    a = a || ".5",
                    s /= a,
                    Z.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            return i && (s = n.start = +s || +r || 0,
            n.unit = o,
            n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    Z.Animation = Z.extend(O, {
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                nn[n] = nn[n] || [],
                nn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }
    }),
    Z.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this),
            r.queue && Z.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    Z.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ct).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = Z.isEmptyObject(e)
              , o = Z.speed(t, n, r)
              , s = function() {
                var t = O(this, Z.extend({}, e), o);
                (i || vt.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = Z.timers
                  , s = vt.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && en.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = vt.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                Z.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    Z.each(["toggle", "show", "hide"], function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }),
    Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        Z.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    Z.timers = [],
    Z.fx.tick = function() {
        var e, t = 0, n = Z.timers;
        for (Qt = Z.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(),
        Qt = void 0
    }
    ,
    Z.fx.timer = function(e) {
        Z.timers.push(e),
        e() ? Z.fx.start() : Z.timers.pop()
    }
    ,
    Z.fx.interval = 13,
    Z.fx.start = function() {
        Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
    }
    ,
    Z.fx.stop = function() {
        clearInterval(Jt),
        Jt = null
    }
    ,
    Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = J.createElement("input")
          , t = J.createElement("select")
          , n = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        Q.checkOn = "" !== e.value,
        Q.optSelected = n.selected,
        t.disabled = !0,
        Q.optDisabled = !n.disabled,
        e = J.createElement("input"),
        e.value = "t",
        e.type = "radio",
        Q.radioValue = "t" === e.value
    }();
    var rn, on, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return mt(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }),
    Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === kt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(),
                r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)),
                void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t),
                null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : (Z.removeAttr(e, t),
                void 0))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(dt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = Z.propFix[n] || n,
                    Z.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    on = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = sn[t] || Z.find.attr;
        sn[t] = function(e, t, r) {
            var i, o;
            return r || (o = sn[t],
            sn[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            sn[t] = o),
            i
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return mt(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }),
    Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !Z.isXMLDoc(e),
                o && (t = Z.propFix[t] || t,
                i = Z.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(dt) || []; l > u; u++)
                    if (n = this[u],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r),
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(dt) || []; l > u; u++)
                    if (n = this[u],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "",
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(dt) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = Z.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }),
    Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u],
                        !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--; )
                        r = i[s],
                        (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        },
        Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = Z.now()
      , fn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e),
        t
    }
    ;
    var pn = /#.*$/
      , dn = /([?&])_=[^&]*/
      , hn = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , mn = /^(?:GET|HEAD)$/
      , vn = /^\/\//
      , yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , xn = {}
      , bn = {}
      , wn = "*/".concat("*")
      , Tn = e.location.href
      , Cn = yn.exec(Tn.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tn,
            type: "GET",
            isLocal: gn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(xn),
        ajaxTransport: F(bn),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2,
                a && clearTimeout(a),
                r = void 0,
                o = s || "",
                w.readyState = e > 0 ? 4 : 0,
                u = e >= 200 && 300 > e || 304 === e,
                n && (y = M(f, w, n)),
                y = W(f, y, w, u),
                u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"),
                b && (Z.lastModified[i] = b),
                b = w.getResponseHeader("etag"),
                b && (Z.etag[i] = b)),
                204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                c = y.data,
                v = y.error,
                u = !v)) : (v = T,
                (e || !T) && (T = "error",
                0 > e && (e = 0))),
                w.status = e,
                w.statusText = (t || T) + "",
                u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]),
                w.statusCode(m),
                m = void 0,
                l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]),
                g.fireWith(p, [w, T]),
                l && (d.trigger("ajaxComplete", [w, f]),
                --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s)
                            for (s = {}; t = hn.exec(o); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = g.add,
            w.success = w.done,
            w.error = w.fail,
            f.url = ((e || f.url || Tn) + "").replace(pn, "").replace(vn, Cn[1] + "//"),
            f.type = t.method || t.type || f.method || f.type,
            f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(dt) || [""],
            null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()),
            f.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)),
            P(xn, f, t, w),
            2 === x)
                return w;
            l = Z.event && f.global,
            l && 0 === Z.active++ && Z.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !mn.test(f.type),
            i = f.url,
            f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = dn.test(i) ? i.replace(dn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)),
            f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]),
            Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])),
            (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
            w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))
                return w.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[c](f[c]);
            if (r = P(bn, f, t, w)) {
                w.readyState = 1,
                l && d.trigger("ajaxSend", [w, f]),
                f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1,
                    r.send(v, n)
                } catch (T) {
                    if (!(2 > x))
                        throw T;
                    n(-1, T)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }),
    Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Z(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    }
    ;
    var Nn = /%20/g
      , kn = /\[\]$/
      , En = /\r?\n/g
      , Sn = /^(?:submit|button|image|reset|file)$/i
      , Dn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
        Z.isArray(e) || e.jquery && !Z.isPlainObject(e))
            Z.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                $(n, e[n], t, i);
        return r.join("&").replace(Nn, "+")
    }
    ,
    Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !Sn.test(e) && (this.checked || !Nt.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(En, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }),
    Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    }
    ;
    var jn = 0
      , An = {}
      , Ln = {
        0: 200,
        1223: 204
    }
      , qn = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in An)
            An[e]()
    }),
    Q.cors = !!qn && "withCredentials"in qn,
    Q.ajax = qn = !!qn,
    Z.ajaxTransport(function(e) {
        var t;
        return Q.cors || qn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(), s = ++jn;
                if (o.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
                    for (i in e.xhrFields)
                        o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)
                    o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete An[s],
                        t = o.onload = o.onerror = null,
                        "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ln[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }
                ,
                o.onload = t(),
                o.onerror = t("error"),
                t = An[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t)
                        throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }),
    Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e),
                e
            }
        }
    }),
    Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Hn = []
      , On = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Hn.pop() || Z.expando + "_" + cn++;
            return this[e] = !0,
            e
        }
    }),
    Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (On.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(On, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            s = arguments
        }
        ,
        r.always(function() {
            e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            Hn.push(i)),
            s && Z.isFunction(o) && o(s[0]),
            s = o = void 0
        }),
        "script") : void 0
    }),
    Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || J;
        var r = st.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i),
        i && i.length && Z(i).remove(),
        Z.merge([], r.childNodes))
    }
    ;
    var Fn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Fn)
            return Fn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)),
        e = e.slice(0, a)),
        Z.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var Pn = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"),
            a = f.offset(),
            o = Z.css(e, "top"),
            u = Z.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
            l ? (r = f.position(),
            s = r.top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            Z.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    Z.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            if (o)
                return t = o.documentElement,
                Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()),
                n = I(o),
                {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                Z.nodeName(e[0], "html") || (r = e.offset()),
                r.top += Z.css(e[0], "borderTopWidth", !0),
                r.left += Z.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Pn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position"); )
                    e = e.offsetParent;
                return e || Pn
            })
        }
    }),
    Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return mt(this, function(t, i, o) {
                var s = I(t);
                return void 0 === o ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o,
                void 0)
            }, t, i, arguments.length, null)
        }
    }),
    Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
            return n ? (n = w(e, t),
            Bt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }),
    Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (r === !0 || i === !0 ? "margin" : "border");
                return mt(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    Z.fn.size = function() {
        return this.length
    }
    ,
    Z.fn.andSelf = Z.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Rn = e.jQuery
      , Mn = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Mn),
        t && e.jQuery === Z && (e.jQuery = Rn),
        Z
    }
    ,
    typeof t === kt && (e.jQuery = e.$ = Z),
    Z
});
(function() {
    var n = this
      , t = n._
      , r = Array.prototype
      , e = Object.prototype
      , u = Function.prototype
      , i = r.push
      , a = r.slice
      , o = r.concat
      , l = e.toString
      , c = e.hasOwnProperty
      , f = Array.isArray
      , s = Object.keys
      , p = u.bind
      , h = function(n) {
        return n instanceof h ? n : this instanceof h ? (this._wrapped = n,
        void 0) : new h(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h),
    exports._ = h) : n._ = h,
    h.VERSION = "1.7.0";
    var g = function(n, t, r) {
        if (void 0 === t)
            return n;
        switch (null == r ? 3 : r) {
        case 1:
            return function(r) {
                return n.call(t, r)
            }
            ;
        case 2:
            return function(r, e) {
                return n.call(t, r, e)
            }
            ;
        case 3:
            return function(r, e, u) {
                return n.call(t, r, e, u)
            }
            ;
        case 4:
            return function(r, e, u, i) {
                return n.call(t, r, e, u, i)
            }
        }
        return function() {
            return n.apply(t, arguments)
        }
    };
    h.iteratee = function(n, t, r) {
        return null == n ? h.identity : h.isFunction(n) ? g(n, t, r) : h.isObject(n) ? h.matches(n) : h.property(n)
    }
    ,
    h.each = h.forEach = function(n, t, r) {
        if (null == n)
            return n;
        t = g(t, r);
        var e, u = n.length;
        if (u === +u)
            for (e = 0; u > e; e++)
                t(n[e], e, n);
        else {
            var i = h.keys(n);
            for (e = 0,
            u = i.length; u > e; e++)
                t(n[i[e]], i[e], n)
        }
        return n
    }
    ,
    h.map = h.collect = function(n, t, r) {
        if (null == n)
            return [];
        t = h.iteratee(t, r);
        for (var e, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++)
            e = u ? u[o] : o,
            a[o] = t(n[e], e, n);
        return a
    }
    ;
    var v = "Reduce of empty array with no initial value";
    h.reduce = h.foldl = h.inject = function(n, t, r, e) {
        null == n && (n = []),
        t = g(t, e, 4);
        var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length, o = 0;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(v);
            r = n[i ? i[o++] : o++]
        }
        for (; a > o; o++)
            u = i ? i[o] : o,
            r = t(r, n[u], u, n);
        return r
    }
    ,
    h.reduceRight = h.foldr = function(n, t, r, e) {
        null == n && (n = []),
        t = g(t, e, 4);
        var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(v);
            r = n[i ? i[--a] : --a]
        }
        for (; a--; )
            u = i ? i[a] : a,
            r = t(r, n[u], u, n);
        return r
    }
    ,
    h.find = h.detect = function(n, t, r) {
        var e;
        return t = h.iteratee(t, r),
        h.some(n, function(n, r, u) {
            return t(n, r, u) ? (e = n,
            !0) : void 0
        }),
        e
    }
    ,
    h.filter = h.select = function(n, t, r) {
        var e = [];
        return null == n ? e : (t = h.iteratee(t, r),
        h.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n)
        }),
        e)
    }
    ,
    h.reject = function(n, t, r) {
        return h.filter(n, h.negate(h.iteratee(t)), r)
    }
    ,
    h.every = h.all = function(n, t, r) {
        if (null == n)
            return !0;
        t = h.iteratee(t, r);
        var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length;
        for (e = 0; a > e; e++)
            if (u = i ? i[e] : e,
            !t(n[u], u, n))
                return !1;
        return !0
    }
    ,
    h.some = h.any = function(n, t, r) {
        if (null == n)
            return !1;
        t = h.iteratee(t, r);
        var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length;
        for (e = 0; a > e; e++)
            if (u = i ? i[e] : e,
            t(n[u], u, n))
                return !0;
        return !1
    }
    ,
    h.contains = h.include = function(n, t) {
        return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)),
        h.indexOf(n, t) >= 0)
    }
    ,
    h.invoke = function(n, t) {
        var r = a.call(arguments, 2)
          , e = h.isFunction(t);
        return h.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }
    ,
    h.pluck = function(n, t) {
        return h.map(n, h.property(t))
    }
    ,
    h.where = function(n, t) {
        return h.filter(n, h.matches(t))
    }
    ,
    h.findWhere = function(n, t) {
        return h.find(n, h.matches(t))
    }
    ,
    h.max = function(n, t, r) {
        var e, u, i = -1 / 0, a = -1 / 0;
        if (null == t && null != n) {
            n = n.length === +n.length ? n : h.values(n);
            for (var o = 0, l = n.length; l > o; o++)
                e = n[o],
                e > i && (i = e)
        } else
            t = h.iteratee(t, r),
            h.each(n, function(n, r, e) {
                u = t(n, r, e),
                (u > a || u === -1 / 0 && i === -1 / 0) && (i = n,
                a = u)
            });
        return i
    }
    ,
    h.min = function(n, t, r) {
        var e, u, i = 1 / 0, a = 1 / 0;
        if (null == t && null != n) {
            n = n.length === +n.length ? n : h.values(n);
            for (var o = 0, l = n.length; l > o; o++)
                e = n[o],
                i > e && (i = e)
        } else
            t = h.iteratee(t, r),
            h.each(n, function(n, r, e) {
                u = t(n, r, e),
                (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n,
                a = u)
            });
        return i
    }
    ,
    h.shuffle = function(n) {
        for (var t, r = n && n.length === +n.length ? n : h.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
            t = h.random(0, i),
            t !== i && (u[i] = u[t]),
            u[t] = r[i];
        return u
    }
    ,
    h.sample = function(n, t, r) {
        return null == t || r ? (n.length !== +n.length && (n = h.values(n)),
        n[h.random(n.length - 1)]) : h.shuffle(n).slice(0, Math.max(0, t))
    }
    ,
    h.sortBy = function(n, t, r) {
        return t = h.iteratee(t, r),
        h.pluck(h.map(n, function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }).sort(function(n, t) {
            var r = n.criteria
              , e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r)
                    return 1;
                if (e > r || void 0 === e)
                    return -1
            }
            return n.index - t.index
        }), "value")
    }
    ;
    var m = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = h.iteratee(r, e),
            h.each(t, function(e, i) {
                var a = r(e, i, t);
                n(u, e, a)
            }),
            u
        }
    };
    h.groupBy = m(function(n, t, r) {
        h.has(n, r) ? n[r].push(t) : n[r] = [t]
    }),
    h.indexBy = m(function(n, t, r) {
        n[r] = t
    }),
    h.countBy = m(function(n, t, r) {
        h.has(n, r) ? n[r]++ : n[r] = 1
    }),
    h.sortedIndex = function(n, t, r, e) {
        r = h.iteratee(r, e, 1);
        for (var u = r(t), i = 0, a = n.length; a > i; ) {
            var o = i + a >>> 1;
            r(n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }
    ,
    h.toArray = function(n) {
        return n ? h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n) : []
    }
    ,
    h.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : h.keys(n).length
    }
    ,
    h.partition = function(n, t, r) {
        t = h.iteratee(t, r);
        var e = []
          , u = [];
        return h.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }),
        [e, u]
    }
    ,
    h.first = h.head = h.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : a.call(n, 0, t)
    }
    ,
    h.initial = function(n, t, r) {
        return a.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }
    ,
    h.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0))
    }
    ,
    h.rest = h.tail = h.drop = function(n, t, r) {
        return a.call(n, null == t || r ? 1 : t)
    }
    ,
    h.compact = function(n) {
        return h.filter(n, h.identity)
    }
    ;
    var y = function(n, t, r, e) {
        if (t && h.every(n, h.isArray))
            return o.apply(e, n);
        for (var u = 0, a = n.length; a > u; u++) {
            var l = n[u];
            h.isArray(l) || h.isArguments(l) ? t ? i.apply(e, l) : y(l, t, r, e) : r || e.push(l)
        }
        return e
    };
    h.flatten = function(n, t) {
        return y(n, t, !1, [])
    }
    ,
    h.without = function(n) {
        return h.difference(n, a.call(arguments, 1))
    }
    ,
    h.uniq = h.unique = function(n, t, r, e) {
        if (null == n)
            return [];
        h.isBoolean(t) || (e = r,
        r = t,
        t = !1),
        null != r && (r = h.iteratee(r, e));
        for (var u = [], i = [], a = 0, o = n.length; o > a; a++) {
            var l = n[a];
            if (t)
                a && i === l || u.push(l),
                i = l;
            else if (r) {
                var c = r(l, a, n);
                h.indexOf(i, c) < 0 && (i.push(c),
                u.push(l))
            } else
                h.indexOf(u, l) < 0 && u.push(l)
        }
        return u
    }
    ,
    h.union = function() {
        return h.uniq(y(arguments, !0, !0, []))
    }
    ,
    h.intersection = function(n) {
        if (null == n)
            return [];
        for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
            var i = n[e];
            if (!h.contains(t, i)) {
                for (var a = 1; r > a && h.contains(arguments[a], i); a++)
                    ;
                a === r && t.push(i)
            }
        }
        return t
    }
    ,
    h.difference = function(n) {
        var t = y(a.call(arguments, 1), !0, !0, []);
        return h.filter(n, function(n) {
            return !h.contains(t, n)
        })
    }
    ,
    h.zip = function(n) {
        if (null == n)
            return [];
        for (var t = h.max(arguments, "length").length, r = Array(t), e = 0; t > e; e++)
            r[e] = h.pluck(arguments, e);
        return r
    }
    ,
    h.object = function(n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }
    ,
    h.indexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = 0
          , u = n.length;
        if (r) {
            if ("number" != typeof r)
                return e = h.sortedIndex(n, t),
                n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return -1
    }
    ,
    h.lastIndexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = n.length;
        for ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)); --e >= 0; )
            if (n[e] === t)
                return e;
        return -1
    }
    ,
    h.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0,
        n = 0),
        r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++,
        n += r)
            u[i] = n;
        return u
    }
    ;
    var d = function() {};
    h.bind = function(n, t) {
        var r, e;
        if (p && n.bind === p)
            return p.apply(n, a.call(arguments, 1));
        if (!h.isFunction(n))
            throw new TypeError("Bind must be called on a function");
        return r = a.call(arguments, 2),
        e = function() {
            if (!(this instanceof e))
                return n.apply(t, r.concat(a.call(arguments)));
            d.prototype = n.prototype;
            var u = new d;
            d.prototype = null;
            var i = n.apply(u, r.concat(a.call(arguments)));
            return h.isObject(i) ? i : u
        }
    }
    ,
    h.partial = function(n) {
        var t = a.call(arguments, 1);
        return function() {
            for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++)
                e[u] === h && (e[u] = arguments[r++]);
            for (; r < arguments.length; )
                e.push(arguments[r++]);
            return n.apply(this, e)
        }
    }
    ,
    h.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e)
            throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++)
            r = arguments[t],
            n[r] = h.bind(n[r], n);
        return n
    }
    ,
    h.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache
              , i = t ? t.apply(this, arguments) : e;
            return h.has(u, i) || (u[i] = n.apply(this, arguments)),
            u[i]
        };
        return r.cache = {},
        r
    }
    ,
    h.delay = function(n, t) {
        var r = a.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }
    ,
    h.defer = function(n) {
        return h.delay.apply(h, [n, 1].concat(a.call(arguments, 1)))
    }
    ,
    h.throttle = function(n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var l = function() {
            o = r.leading === !1 ? 0 : h.now(),
            a = null,
            i = n.apply(e, u),
            a || (e = u = null)
        };
        return function() {
            var c = h.now();
            o || r.leading !== !1 || (o = c);
            var f = t - (c - o);
            return e = this,
            u = arguments,
            0 >= f || f > t ? (clearTimeout(a),
            a = null,
            o = c,
            i = n.apply(e, u),
            a || (e = u = null)) : a || r.trailing === !1 || (a = setTimeout(l, f)),
            i
        }
    }
    ,
    h.debounce = function(n, t, r) {
        var e, u, i, a, o, l = function() {
            var c = h.now() - a;
            t > c && c > 0 ? e = setTimeout(l, t - c) : (e = null,
            r || (o = n.apply(i, u),
            e || (i = u = null)))
        };
        return function() {
            i = this,
            u = arguments,
            a = h.now();
            var c = r && !e;
            return e || (e = setTimeout(l, t)),
            c && (o = n.apply(i, u),
            i = u = null),
            o
        }
    }
    ,
    h.wrap = function(n, t) {
        return h.partial(t, n)
    }
    ,
    h.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }
    ,
    h.compose = function() {
        var n = arguments
          , t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--; )
                e = n[r].call(this, e);
            return e
        }
    }
    ,
    h.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }
    ,
    h.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 ? r = t.apply(this, arguments) : t = null,
            r
        }
    }
    ,
    h.once = h.partial(h.before, 2),
    h.keys = function(n) {
        if (!h.isObject(n))
            return [];
        if (s)
            return s(n);
        var t = [];
        for (var r in n)
            h.has(n, r) && t.push(r);
        return t
    }
    ,
    h.values = function(n) {
        for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = n[t[u]];
        return e
    }
    ,
    h.pairs = function(n) {
        for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = [t[u], n[t[u]]];
        return e
    }
    ,
    h.invert = function(n) {
        for (var t = {}, r = h.keys(n), e = 0, u = r.length; u > e; e++)
            t[n[r[e]]] = r[e];
        return t
    }
    ,
    h.functions = h.methods = function(n) {
        var t = [];
        for (var r in n)
            h.isFunction(n[r]) && t.push(r);
        return t.sort()
    }
    ,
    h.extend = function(n) {
        if (!h.isObject(n))
            return n;
        for (var t, r, e = 1, u = arguments.length; u > e; e++) {
            t = arguments[e];
            for (r in t)
                c.call(t, r) && (n[r] = t[r])
        }
        return n
    }
    ,
    h.pick = function(n, t, r) {
        var e, u = {};
        if (null == n)
            return u;
        if (h.isFunction(t)) {
            t = g(t, r);
            for (e in n) {
                var i = n[e];
                t(i, e, n) && (u[e] = i)
            }
        } else {
            var l = o.apply([], a.call(arguments, 1));
            n = new Object(n);
            for (var c = 0, f = l.length; f > c; c++)
                e = l[c],
                e in n && (u[e] = n[e])
        }
        return u
    }
    ,
    h.omit = function(n, t, r) {
        if (h.isFunction(t))
            t = h.negate(t);
        else {
            var e = h.map(o.apply([], a.call(arguments, 1)), String);
            t = function(n, t) {
                return !h.contains(e, t)
            }
        }
        return h.pick(n, t, r)
    }
    ,
    h.defaults = function(n) {
        if (!h.isObject(n))
            return n;
        for (var t = 1, r = arguments.length; r > t; t++) {
            var e = arguments[t];
            for (var u in e)
                void 0 === n[u] && (n[u] = e[u])
        }
        return n
    }
    ,
    h.clone = function(n) {
        return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n
    }
    ,
    h.tap = function(n, t) {
        return t(n),
        n
    }
    ;
    var b = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof h && (n = n._wrapped),
        t instanceof h && (t = t._wrapped);
        var u = l.call(n);
        if (u !== l.call(t))
            return !1;
        switch (u) {
        case "[object RegExp]":
        case "[object String]":
            return "" + n == "" + t;
        case "[object Number]":
            return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n === +t
        }
        if ("object" != typeof n || "object" != typeof t)
            return !1;
        for (var i = r.length; i--; )
            if (r[i] === n)
                return e[i] === t;
        var a = n.constructor
          , o = t.constructor;
        if (a !== o && "constructor"in n && "constructor"in t && !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o))
            return !1;
        r.push(n),
        e.push(t);
        var c, f;
        if ("[object Array]" === u) {
            if (c = n.length,
            f = c === t.length)
                for (; c-- && (f = b(n[c], t[c], r, e)); )
                    ;
        } else {
            var s, p = h.keys(n);
            if (c = p.length,
            f = h.keys(t).length === c)
                for (; c-- && (s = p[c],
                f = h.has(t, s) && b(n[s], t[s], r, e)); )
                    ;
        }
        return r.pop(),
        e.pop(),
        f
    };
    h.isEqual = function(n, t) {
        return b(n, t, [], [])
    }
    ,
    h.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (h.isArray(n) || h.isString(n) || h.isArguments(n))
            return 0 === n.length;
        for (var t in n)
            if (h.has(n, t))
                return !1;
        return !0
    }
    ,
    h.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }
    ,
    h.isArray = f || function(n) {
        return "[object Array]" === l.call(n)
    }
    ,
    h.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }
    ,
    h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        h["is" + n] = function(t) {
            return l.call(t) === "[object " + n + "]"
        }
    }),
    h.isArguments(arguments) || (h.isArguments = function(n) {
        return h.has(n, "callee")
    }
    ),
    "function" != typeof /./ && (h.isFunction = function(n) {
        return "function" == typeof n || !1
    }
    ),
    h.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }
    ,
    h.isNaN = function(n) {
        return h.isNumber(n) && n !== +n
    }
    ,
    h.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === l.call(n)
    }
    ,
    h.isNull = function(n) {
        return null === n
    }
    ,
    h.isUndefined = function(n) {
        return void 0 === n
    }
    ,
    h.has = function(n, t) {
        return null != n && c.call(n, t)
    }
    ,
    h.noConflict = function() {
        return n._ = t,
        this
    }
    ,
    h.identity = function(n) {
        return n
    }
    ,
    h.constant = function(n) {
        return function() {
            return n
        }
    }
    ,
    h.noop = function() {}
    ,
    h.property = function(n) {
        return function(t) {
            return t[n]
        }
    }
    ,
    h.matches = function(n) {
        var t = h.pairs(n)
          , r = t.length;
        return function(n) {
            if (null == n)
                return !r;
            n = new Object(n);
            for (var e = 0; r > e; e++) {
                var u = t[e]
                  , i = u[0];
                if (u[1] !== n[i] || !(i in n))
                    return !1
            }
            return !0
        }
    }
    ,
    h.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = g(t, r, 1);
        for (var u = 0; n > u; u++)
            e[u] = t(u);
        return e
    }
    ,
    h.random = function(n, t) {
        return null == t && (t = n,
        n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    }
    ,
    h.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var _ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , w = h.invert(_)
      , j = function(n) {
        var t = function(t) {
            return n[t]
        }
          , r = "(?:" + h.keys(n).join("|") + ")"
          , e = RegExp(r)
          , u = RegExp(r, "g");
        return function(n) {
            return n = null == n ? "" : "" + n,
            e.test(n) ? n.replace(u, t) : n
        }
    };
    h.escape = j(_),
    h.unescape = j(w),
    h.result = function(n, t) {
        if (null == n)
            return void 0;
        var r = n[t];
        return h.isFunction(r) ? n[t]() : r
    }
    ;
    var x = 0;
    h.uniqueId = function(n) {
        var t = ++x + "";
        return n ? n + t : t
    }
    ,
    h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var A = /(.)^/
      , k = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , O = /\\|'|\r|\n|\u2028|\u2029/g
      , F = function(n) {
        return "\\" + k[n]
    };
    h.template = function(n, t, r) {
        !t && r && (t = r),
        t = h.defaults({}, t, h.templateSettings);
        var e = RegExp([(t.escape || A).source, (t.interpolate || A).source, (t.evaluate || A).source].join("|") + "|$", "g")
          , u = 0
          , i = "__p+='";
        n.replace(e, function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(O, F),
            u = o + t.length,
            r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"),
            t
        }),
        i += "';\n",
        t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj","_",i)
        } catch (o) {
            throw o.source = i,
            o
        }
        var l = function(n) {
            return a.call(this, n, h)
        }
          , c = t.variable || "obj";
        return l.source = "function(" + c + "){\n" + i + "}",
        l
    }
    ,
    h.chain = function(n) {
        var t = h(n);
        return t._chain = !0,
        t
    }
    ;
    var E = function(n) {
        return this._chain ? h(n).chain() : n
    };
    h.mixin = function(n) {
        h.each(h.functions(n), function(t) {
            var r = h[t] = n[t];
            h.prototype[t] = function() {
                var n = [this._wrapped];
                return i.apply(n, arguments),
                E.call(this, r.apply(h, n))
            }
        })
    }
    ,
    h.mixin(h),
    h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = r[n];
        h.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
            E.call(this, r)
        }
    }),
    h.each(["concat", "join", "slice"], function(n) {
        var t = r[n];
        h.prototype[n] = function() {
            return E.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    h.prototype.value = function() {
        return this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return h
    })
}
).call(this);
!function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(i, n, s) {
            t.Backbone = e(t, s, i, n)
        });
    else if ("undefined" != typeof exports) {
        var i = require("underscore");
        e(t, exports, i)
    } else
        t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(this, function(t, e, i, n) {
    {
        var s = t.Backbone
          , r = []
          , a = (r.push,
        r.slice);
        r.splice
    }
    e.VERSION = "1.1.2",
    e.$ = n,
    e.noConflict = function() {
        return t.Backbone = s,
        this
    }
    ,
    e.emulateHTTP = !1,
    e.emulateJSON = !1;
    var o = e.Events = {
        on: function(t, e, i) {
            if (!u(this, "on", t, [e, i]) || !e)
                return this;
            this._events || (this._events = {});
            var n = this._events[t] || (this._events[t] = []);
            return n.push({
                callback: e,
                context: i,
                ctx: i || this
            }),
            this
        },
        once: function(t, e, n) {
            if (!u(this, "once", t, [e, n]) || !e)
                return this;
            var s = this
              , r = i.once(function() {
                s.off(t, r),
                e.apply(this, arguments)
            });
            return r._callback = e,
            this.on(t, r, n)
        },
        off: function(t, e, n) {
            var s, r, a, o, h, c, l, d;
            if (!this._events || !u(this, "off", t, [e, n]))
                return this;
            if (!t && !e && !n)
                return this._events = void 0,
                this;
            for (o = t ? [t] : i.keys(this._events),
            h = 0,
            c = o.length; c > h; h++)
                if (t = o[h],
                a = this._events[t]) {
                    if (this._events[t] = s = [],
                    e || n)
                        for (l = 0,
                        d = a.length; d > l; l++)
                            r = a[l],
                            (e && e !== r.callback && e !== r.callback._callback || n && n !== r.context) && s.push(r);
                    s.length || delete this._events[t]
                }
            return this
        },
        trigger: function(t) {
            if (!this._events)
                return this;
            var e = a.call(arguments, 1);
            if (!u(this, "trigger", t, e))
                return this;
            var i = this._events[t]
              , n = this._events.all;
            return i && c(i, e),
            n && c(n, arguments),
            this
        },
        stopListening: function(t, e, n) {
            var s = this._listeningTo;
            if (!s)
                return this;
            var r = !e && !n;
            n || "object" != typeof e || (n = this),
            t && ((s = {})[t._listenId] = t);
            for (var a in s)
                t = s[a],
                t.off(e, n, this),
                (r || i.isEmpty(t._events)) && delete this._listeningTo[a];
            return this
        }
    }
      , h = /\s+/
      , u = function(t, e, i, n) {
        if (!i)
            return !0;
        if ("object" == typeof i) {
            for (var s in i)
                t[e].apply(t, [s, i[s]].concat(n));
            return !1
        }
        if (h.test(i)) {
            for (var r = i.split(h), a = 0, o = r.length; o > a; a++)
                t[e].apply(t, [r[a]].concat(n));
            return !1
        }
        return !0
    }
      , c = function(t, e) {
        var i, n = -1, s = t.length, r = e[0], a = e[1], o = e[2];
        switch (e.length) {
        case 0:
            for (; ++n < s; )
                (i = t[n]).callback.call(i.ctx);
            return;
        case 1:
            for (; ++n < s; )
                (i = t[n]).callback.call(i.ctx, r);
            return;
        case 2:
            for (; ++n < s; )
                (i = t[n]).callback.call(i.ctx, r, a);
            return;
        case 3:
            for (; ++n < s; )
                (i = t[n]).callback.call(i.ctx, r, a, o);
            return;
        default:
            for (; ++n < s; )
                (i = t[n]).callback.apply(i.ctx, e);
            return
        }
    }
      , l = {
        listenTo: "on",
        listenToOnce: "once"
    };
    i.each(l, function(t, e) {
        o[e] = function(e, n, s) {
            var r = this._listeningTo || (this._listeningTo = {})
              , a = e._listenId || (e._listenId = i.uniqueId("l"));
            return r[a] = e,
            s || "object" != typeof n || (s = this),
            e[t](n, s, this),
            this
        }
    }),
    o.bind = o.on,
    o.unbind = o.off,
    i.extend(e, o);
    var d = e.Model = function(t, e) {
        var n = t || {};
        e || (e = {}),
        this.cid = i.uniqueId("c"),
        this.attributes = {},
        e.collection && (this.collection = e.collection),
        e.parse && (n = this.parse(n, e) || {}),
        n = i.defaults({}, n, i.result(this, "defaults")),
        this.set(n, e),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    i.extend(d.prototype, o, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return i.clone(this.attributes)
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return i.escape(this.get(t))
        },
        has: function(t) {
            return null != this.get(t)
        },
        set: function(t, e, n) {
            var s, r, a, o, h, u, c, l;
            if (null == t)
                return this;
            if ("object" == typeof t ? (r = t,
            n = e) : (r = {})[t] = e,
            n || (n = {}),
            !this._validate(r, n))
                return !1;
            a = n.unset,
            h = n.silent,
            o = [],
            u = this._changing,
            this._changing = !0,
            u || (this._previousAttributes = i.clone(this.attributes),
            this.changed = {}),
            l = this.attributes,
            c = this._previousAttributes,
            this.idAttribute in r && (this.id = r[this.idAttribute]);
            for (s in r)
                e = r[s],
                i.isEqual(l[s], e) || o.push(s),
                i.isEqual(c[s], e) ? delete this.changed[s] : this.changed[s] = e,
                a ? delete l[s] : l[s] = e;
            if (!h) {
                o.length && (this._pending = n);
                for (var d = 0, f = o.length; f > d; d++)
                    this.trigger("change:" + o[d], this, l[o[d]], n)
            }
            if (u)
                return this;
            if (!h)
                for (; this._pending; )
                    n = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, n);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(t, e) {
            return this.set(t, void 0, i.extend({}, e, {
                unset: !0
            }))
        },
        clear: function(t) {
            var e = {};
            for (var n in this.attributes)
                e[n] = void 0;
            return this.set(e, i.extend({}, t, {
                unset: !0
            }))
        },
        hasChanged: function(t) {
            return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t)
                return this.hasChanged() ? i.clone(this.changed) : !1;
            var e, n = !1, s = this._changing ? this._previousAttributes : this.attributes;
            for (var r in t)
                i.isEqual(s[r], e = t[r]) || ((n || (n = {}))[r] = e);
            return n
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
            return i.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = t ? i.clone(t) : {},
            void 0 === t.parse && (t.parse = !0);
            var e = this
              , n = t.success;
            return t.success = function(i) {
                return e.set(e.parse(i, t), t) ? (n && n(e, i, t),
                e.trigger("sync", e, i, t),
                void 0) : !1
            }
            ,
            U(this, t),
            this.sync("read", this, t)
        },
        save: function(t, e, n) {
            var s, r, a, o = this.attributes;
            if (null == t || "object" == typeof t ? (s = t,
            n = e) : (s = {})[t] = e,
            n = i.extend({
                validate: !0
            }, n),
            s && !n.wait) {
                if (!this.set(s, n))
                    return !1
            } else if (!this._validate(s, n))
                return !1;
            s && n.wait && (this.attributes = i.extend({}, o, s)),
            void 0 === n.parse && (n.parse = !0);
            var h = this
              , u = n.success;
            return n.success = function(t) {
                h.attributes = o;
                var e = h.parse(t, n);
                return n.wait && (e = i.extend(s || {}, e)),
                i.isObject(e) && !h.set(e, n) ? !1 : (u && u(h, t, n),
                h.trigger("sync", h, t, n),
                void 0)
            }
            ,
            U(this, n),
            r = this.isNew() ? "create" : n.patch ? "patch" : "update",
            "patch" === r && (n.attrs = s),
            a = this.sync(r, this, n),
            s && n.wait && (this.attributes = o),
            a
        },
        destroy: function(t) {
            t = t ? i.clone(t) : {};
            var e = this
              , n = t.success
              , s = function() {
                e.trigger("destroy", e, e.collection, t)
            };
            if (t.success = function(i) {
                (t.wait || e.isNew()) && s(),
                n && n(e, i, t),
                e.isNew() || e.trigger("sync", e, i, t)
            }
            ,
            this.isNew())
                return t.success(),
                !1;
            U(this, t);
            var r = this.sync("delete", this, t);
            return t.wait || s(),
            r
        },
        url: function() {
            var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || j();
            return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(t) {
            return this._validate({}, i.extend(t || {}, {
                validate: !0
            }))
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate)
                return !0;
            t = i.extend({}, this.attributes, t);
            var n = this.validationError = this.validate(t, e) || null;
            return n ? (this.trigger("invalid", this, n, i.extend(e, {
                validationError: n
            })),
            !1) : !0
        }
    });
    var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
    i.each(f, function(t) {
        d.prototype[t] = function() {
            var e = a.call(arguments);
            return e.unshift(this.attributes),
            i[t].apply(i, e)
        }
    });
    var p = e.Collection = function(t, e) {
        e || (e = {}),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, i.extend({
            silent: !0
        }, e))
    }
      , g = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , v = {
        add: !0,
        remove: !1
    };
    i.extend(p.prototype, o, {
        model: d,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, i.extend({
                merge: !1
            }, e, v))
        },
        remove: function(t, e) {
            var n = !i.isArray(t);
            t = n ? [t] : i.clone(t),
            e || (e = {});
            var s, r, a, o;
            for (s = 0,
            r = t.length; r > s; s++)
                o = t[s] = this.get(t[s]),
                o && (delete this._byId[o.id],
                delete this._byId[o.cid],
                a = this.indexOf(o),
                this.models.splice(a, 1),
                this.length--,
                e.silent || (e.index = a,
                o.trigger("remove", o, this, e)),
                this._removeReference(o, e));
            return n ? t[0] : t
        },
        set: function(t, e) {
            e = i.defaults({}, e, g),
            e.parse && (t = this.parse(t, e));
            var n = !i.isArray(t);
            t = n ? t ? [t] : [] : i.clone(t);
            var s, r, a, o, h, u, c, l = e.at, f = this.model, p = this.comparator && null == l && e.sort !== !1, v = i.isString(this.comparator) ? this.comparator : null, m = [], y = [], _ = {}, b = e.add, w = e.merge, x = e.remove, E = !p && b && x ? [] : !1;
            for (s = 0,
            r = t.length; r > s; s++) {
                if (h = t[s] || {},
                a = h instanceof d ? o = h : h[f.prototype.idAttribute || "id"],
                u = this.get(a))
                    x && (_[u.cid] = !0),
                    w && (h = h === o ? o.attributes : h,
                    e.parse && (h = u.parse(h, e)),
                    u.set(h, e),
                    p && !c && u.hasChanged(v) && (c = !0)),
                    t[s] = u;
                else if (b) {
                    if (o = t[s] = this._prepareModel(h, e),
                    !o)
                        continue;
                    m.push(o),
                    this._addReference(o, e)
                }
                o = u || o,
                !E || !o.isNew() && _[o.id] || E.push(o),
                _[o.id] = !0
            }
            if (x) {
                for (s = 0,
                r = this.length; r > s; ++s)
                    _[(o = this.models[s]).cid] || y.push(o);
                y.length && this.remove(y, e)
            }
            if (m.length || E && E.length)
                if (p && (c = !0),
                this.length += m.length,
                null != l)
                    for (s = 0,
                    r = m.length; r > s; s++)
                        this.models.splice(l + s, 0, m[s]);
                else {
                    E && (this.models.length = 0);
                    var k = E || m;
                    for (s = 0,
                    r = k.length; r > s; s++)
                        this.models.push(k[s])
                }
            if (c && this.sort({
                silent: !0
            }),
            !e.silent) {
                for (s = 0,
                r = m.length; r > s; s++)
                    (o = m[s]).trigger("add", o, this, e);
                (c || E && E.length) && this.trigger("sort", this, e)
            }
            return n ? t[0] : t
        },
        reset: function(t, e) {
            e || (e = {});
            for (var n = 0, s = this.models.length; s > n; n++)
                this._removeReference(this.models[n], e);
            return e.previousModels = this.models,
            this._reset(),
            t = this.add(t, i.extend({
                silent: !0
            }, e)),
            e.silent || this.trigger("reset", this, e),
            t
        },
        push: function(t, e) {
            return this.add(t, i.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t),
            e
        },
        unshift: function(t, e) {
            return this.add(t, i.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t),
            e
        },
        slice: function() {
            return a.apply(this.models, arguments)
        },
        get: function(t) {
            return null == t ? void 0 : this._byId[t] || this._byId[t.id] || this._byId[t.cid]
        },
        at: function(t) {
            return this.models[t]
        },
        where: function(t, e) {
            return i.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                for (var i in t)
                    if (t[i] !== e.get(i))
                        return !1;
                return !0
            })
        },
        findWhere: function(t) {
            return this.where(t, !0)
        },
        sort: function(t) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}),
            i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)),
            t.silent || this.trigger("sort", this, t),
            this
        },
        pluck: function(t) {
            return i.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            t = t ? i.clone(t) : {},
            void 0 === t.parse && (t.parse = !0);
            var e = t.success
              , n = this;
            return t.success = function(i) {
                var s = t.reset ? "reset" : "set";
                n[s](i, t),
                e && e(n, i, t),
                n.trigger("sync", n, i, t)
            }
            ,
            U(this, t),
            this.sync("read", this, t)
        },
        create: function(t, e) {
            if (e = e ? i.clone(e) : {},
            !(t = this._prepareModel(t, e)))
                return !1;
            e.wait || this.add(t, e);
            var n = this
              , s = e.success;
            return e.success = function(t, i) {
                e.wait && n.add(t, e),
                s && s(t, i, e)
            }
            ,
            t.save(null, e),
            t
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (t instanceof d)
                return t;
            e = e ? i.clone(e) : {},
            e.collection = this;
            var n = new this.model(t,e);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, e),
            !1) : n
        },
        _addReference: function(t) {
            this._byId[t.cid] = t,
            null != t.id && (this._byId[t.id] = t),
            t.collection || (t.collection = this),
            t.on("all", this._onModelEvent, this)
        },
        _removeReference: function(t) {
            this === t.collection && delete t.collection,
            t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, i, n) {
            ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n),
            e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)],
            null != e.id && (this._byId[e.id] = e)),
            this.trigger.apply(this, arguments))
        }
    });
    var m = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    i.each(m, function(t) {
        p.prototype[t] = function() {
            var e = a.call(arguments);
            return e.unshift(this.models),
            i[t].apply(i, e)
        }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    i.each(y, function(t) {
        p.prototype[t] = function(e, n) {
            var s = i.isFunction(e) ? e : function(t) {
                return t.get(e)
            }
            ;
            return i[t](this.models, s, n)
        }
    });
    var _ = e.View = function(t) {
        this.cid = i.uniqueId("view"),
        t || (t = {}),
        i.extend(this, i.pick(t, w)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , b = /^(\S+)\s*(.*)$/
      , w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    i.extend(_.prototype, o, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(t, i) {
            return this.$el && this.undelegateEvents(),
            this.$el = t instanceof e.$ ? t : e.$(t),
            this.el = this.$el[0],
            i !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(t) {
            if (!t && !(t = i.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var e in t) {
                var n = t[e];
                if (i.isFunction(n) || (n = this[t[e]]),
                n) {
                    var s = e.match(b)
                      , r = s[1]
                      , a = s[2];
                    n = i.bind(n, this),
                    r += ".delegateEvents" + this.cid,
                    "" === a ? this.$el.on(r, n) : this.$el.on(r, a, n)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(i.result(this, "el"), !1);
            else {
                var t = i.extend({}, i.result(this, "attributes"));
                this.id && (t.id = i.result(this, "id")),
                this.className && (t["class"] = i.result(this, "className"));
                var n = e.$("<" + i.result(this, "tagName") + ">").attr(t);
                this.setElement(n, !1)
            }
        }
    }),
    e.sync = function(t, n, s) {
        var r = E[t];
        i.defaults(s || (s = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var a = {
            type: r,
            dataType: "json"
        };
        if (s.url || (a.url = i.result(n, "url") || j()),
        null != s.data || !n || "create" !== t && "update" !== t && "patch" !== t || (a.contentType = "application/json",
        a.data = JSON.stringify(s.attrs || n.toJSON(s))),
        s.emulateJSON && (a.contentType = "application/x-www-form-urlencoded",
        a.data = a.data ? {
            model: a.data
        } : {}),
        s.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
            a.type = "POST",
            s.emulateJSON && (a.data._method = r);
            var o = s.beforeSend;
            s.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", r),
                o ? o.apply(this, arguments) : void 0
            }
        }
        "GET" === a.type || s.emulateJSON || (a.processData = !1),
        "PATCH" === a.type && x && (a.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var h = s.xhr = e.ajax(i.extend(a, s));
        return n.trigger("request", n, h, s),
        h
    }
    ;
    var x = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
      , E = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments)
    }
    ;
    var k = e.Router = function(t) {
        t || (t = {}),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , T = /\((.*?)\)/g
      , $ = /(\(\?)?:\w+/g
      , S = /\*\w+/g
      , H = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    i.extend(k.prototype, o, {
        initialize: function() {},
        route: function(t, n, s) {
            i.isRegExp(t) || (t = this._routeToRegExp(t)),
            i.isFunction(n) && (s = n,
            n = ""),
            s || (s = this[n]);
            var r = this;
            return e.history.route(t, function(i) {
                var a = r._extractParameters(t, i);
                r.execute(s, a),
                r.trigger.apply(r, ["route:" + n].concat(a)),
                r.trigger("route", n, a),
                e.history.trigger("route", r, n, a)
            }),
            this
        },
        execute: function(t, e) {
            t && t.apply(this, e)
        },
        navigate: function(t, i) {
            return e.history.navigate(t, i),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = i.result(this, "routes");
                for (var t, e = i.keys(this.routes); null != (t = e.pop()); )
                    this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(H, "\\$&").replace(T, "(?:$1)?").replace($, function(t, e) {
                return e ? t : "([^/?]+)"
            }).replace(S, "([^?]*?)"),
            new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(t, e) {
            var n = t.exec(e).slice(1);
            return i.map(n, function(t, e) {
                return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
            })
        }
    });
    var A = e.History = function() {
        this.handlers = [],
        i.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , I = /^[#\/]|\s+$/g
      , N = /^\/+|\/+$/g
      , R = /msie [\w.]+/
      , O = /\/$/
      , P = /#.*$/;
    A.started = !1,
    i.extend(A.prototype, o, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getFragment: function(t, e) {
            if (null == t)
                if (this._hasPushState || !this._wantsHashChange || e) {
                    t = decodeURI(this.location.pathname + this.location.search);
                    var i = this.root.replace(O, "");
                    t.indexOf(i) || (t = t.slice(i.length))
                } else
                    t = this.getHash();
            return t.replace(I, "")
        },
        start: function(t) {
            if (A.started)
                throw new Error("Backbone.history has already been started");
            A.started = !0,
            this.options = i.extend({
                root: "/"
            }, this.options, t),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var n = this.getFragment()
              , s = document.documentMode
              , r = R.exec(navigator.userAgent.toLowerCase()) && (!s || 7 >= s);
            if (this.root = ("/" + this.root + "/").replace(N, "/"),
            r && this._wantsHashChange) {
                var a = e.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = a.hide().appendTo("body")[0].contentWindow,
                this.navigate(n)
            }
            this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !r ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = n;
            var o = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
                this._hasPushState && this.atRoot() && o.hash && (this.fragment = this.getHash().replace(I, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            A.started = !1
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function() {
            var t = this.getFragment();
            return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
            t === this.fragment ? !1 : (this.iframe && this.navigate(t),
            this.loadUrl(),
            void 0)
        },
        loadUrl: function(t) {
            return t = this.fragment = this.getFragment(t),
            i.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t),
                !0) : void 0
            })
        },
        navigate: function(t, e) {
            if (!A.started)
                return !1;
            e && e !== !0 || (e = {
                trigger: !!e
            });
            var i = this.root + (t = this.getFragment(t || ""));
            if (t = t.replace(P, ""),
            this.fragment !== t) {
                if (this.fragment = t,
                "" === t && "/" !== i && (i = i.slice(0, -1)),
                this._hasPushState)
                    this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(i);
                    this._updateHash(this.location, t, e.replace),
                    this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, t, e.replace))
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        },
        _updateHash: function(t, e, i) {
            if (i) {
                var n = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(n + "#" + e)
            } else
                t.hash = "#" + e
        }
    }),
    e.history = new A;
    var C = function(t, e) {
        var n, s = this;
        n = t && i.has(t, "constructor") ? t.constructor : function() {
            return s.apply(this, arguments)
        }
        ,
        i.extend(n, s, e);
        var r = function() {
            this.constructor = n
        };
        return r.prototype = s.prototype,
        n.prototype = new r,
        t && i.extend(n.prototype, t),
        n.__super__ = s.prototype,
        n
    };
    d.extend = p.extend = k.extend = _.extend = A.extend = C;
    var j = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , U = function(t, e) {
        var i = e.error;
        e.error = function(n) {
            i && i(t, n, e),
            t.trigger("error", t, n, e)
        }
    };
    return e
});
!function(t, n, i) {
    var e = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = i(e) : "function" == typeof define && define.amd ? define(function() {
        return n[t] = i(e)
    }) : n[t] = i(e)
}("enquire", this, function(t) {
    "use strict";
    function n(t, n) {
        var i, e = 0, s = t.length;
        for (e; s > e && (i = n(t[e], e),
        i !== !1); e++)
            ;
    }
    function i(t) {
        return "[object Array]" === Object.prototype.toString.apply(t)
    }
    function e(t) {
        return "function" == typeof t
    }
    function s(t) {
        this.options = t,
        !t.deferSetup && this.setup()
    }
    function o(n, i) {
        this.query = n,
        this.isUnconditional = i,
        this.handlers = [],
        this.mql = t(n);
        var e = this;
        this.listener = function(t) {
            e.mql = t,
            e.assess()
        }
        ,
        this.mql.addListener(this.listener)
    }
    function r() {
        if (!t)
            throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {},
        this.browserIsIncapable = !t("only all").matches
    }
    return s.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(),
            this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(),
            this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    },
    o.prototype = {
        addHandler: function(t) {
            var n = new s(t);
            this.handlers.push(n),
            this.matches() && n.on()
        },
        removeHandler: function(t) {
            var i = this.handlers;
            n(i, function(n, e) {
                return n.equals(t) ? (n.destroy(),
                !i.splice(e, 1)) : void 0
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            n(this.handlers, function(t) {
                t.destroy()
            }),
            this.mql.removeListener(this.listener),
            this.handlers.length = 0
        },
        assess: function() {
            var t = this.matches() ? "on" : "off";
            n(this.handlers, function(n) {
                n[t]()
            })
        }
    },
    r.prototype = {
        register: function(t, s, r) {
            var h = this.queries
              , u = r && this.browserIsIncapable;
            return h[t] || (h[t] = new o(t,u)),
            e(s) && (s = {
                match: s
            }),
            i(s) || (s = [s]),
            n(s, function(n) {
                e(n) && (n = {
                    match: n
                }),
                h[t].addHandler(n)
            }),
            this
        },
        unregister: function(t, n) {
            var i = this.queries[t];
            return i && (n ? i.removeHandler(n) : (i.clear(),
            delete this.queries[t])),
            this
        }
    },
    new r
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]))
                ;
            return i
        }
          , r = function(t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = r.prototype.render
        }
          , n = 1e-10
          , a = i._internals
          , o = a.isSelector
          , h = a.isArray
          , l = r.prototype = i.to({}, .1, {})
          , _ = [];
        r.version = "1.16.1",
        l.constructor = r,
        l.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        l.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        l.updateTo = function(t, e) {
            var s, r = this.ratio, n = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t)
                this.vars[s] = t[s];
            if (this._initted || n)
                if (e)
                    this._initted = !1,
                    n && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var a = this._time;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(a, !0, !1)
                } else if (this._time > 0 || n) {
                    this._initted = !1,
                    this._init();
                    for (var o, h = 1 / (1 - r), l = this._firstPT; l; )
                        o = l.s + l.c,
                        l.c *= h,
                        l.s = o - l.c,
                        l = l._next
                }
            return this
        }
        ,
        l.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, d = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= f ? (this._totalTime = f,
            this._cycle = this._repeat,
            this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (s = !0,
            r = "onComplete",
            i = i || this._timeline.autoRemoveChildren),
            0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (0 === t || 0 > y || y === n) && y !== t && (i = !0,
            y > n && (r = "onReverseComplete")),
            this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== d || 0 === v && y > 0) && (r = "onReverseComplete",
            s = this._reversed),
            0 > t && (this._active = !1,
            0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0),
            this._rawPrevTime = c = !e || t || y === t ? t : n)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (h = v + this._repeatDelay,
            this._cycle = this._totalTime / h >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--,
            this._time = this._totalTime - this._cycle * h,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time),
            this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
            this._easeType ? (l = this._time / v,
            u = this._easeType,
            p = this._easePower,
            (1 === u || 3 === u && l >= .5) && (l = 1 - l),
            3 === u && (l *= 2),
            1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l),
            this.ratio = 1 === u ? 1 - l : 2 === u ? l : this._time / v < .5 ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)),
            m === this._time && !i && g === this._cycle)
                return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)),
                void 0;
            if (!this._initted) {
                if (this._init(),
                !this._initted || this._gc)
                    return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                    return this._time = m,
                    this._totalTime = d,
                    this._rawPrevTime = y,
                    this._cycle = g,
                    a.lazyTweens.push(this),
                    this._lazy = [t, e],
                    void 0;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1),
            this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0),
            0 === d && (2 === this._initted && t > 0 && this._init(),
            this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
            this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))),
            o = this._firstPT; o; )
                o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
            e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)),
            this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)),
            r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
            s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _),
            0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
        }
        ,
        r.to = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t,e,i)
        }
        ,
        r.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new r(t,e,s)
        }
        ,
        r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) {
            a = a || 0;
            var c, f, m, d, g = n.delay || 0, v = [], y = function() {
                n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments),
                l.apply(p || this, u || _)
            };
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t),
            o(t) && (t = s(t))),
            t = t || [],
            0 > a && (t = s(t),
            t.reverse(),
            a *= -1),
            c = t.length - 1,
            m = 0; c >= m; m++) {
                f = {};
                for (d in n)
                    f[d] = n[d];
                f.delay = g,
                m === c && l && (f.onComplete = y),
                v[m] = new r(t[m],e,f),
                g += a
            }
            return v
        }
        ,
        r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, s, n, a, o)
        }
        ,
        r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, s, n, a, o, h)
        }
        ,
        r.delayedCall = function(t, e, i, s, n) {
            return new r(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        r.set = function(t, e) {
            return new r(t,0,e)
        }
        ,
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var u = function(t, e) {
            for (var s = [], r = 0, n = t._first; n; )
                n instanceof i ? s[r++] = n : (e && (s[r++] = n),
                s = s.concat(u(n, e)),
                r = s.length),
                n = n._next;
            return s
        }
          , p = r.getAllTweens = function(e) {
            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
        }
        ;
        r.killAll = function(t, i, s, r) {
            null == i && (i = !0),
            null == s && (s = !0);
            var n, a, o, h = p(0 != r), l = h.length, _ = i && s && r;
            for (o = 0; l > o; o++)
                a = h[o],
                (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var n, l, _, u, p, c = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                o(t) && (t = s(t)),
                h(t))
                    for (u = t.length; --u > -1; )
                        r.killChildTweensOf(t[u], e);
                else {
                    n = [];
                    for (_ in c)
                        for (l = c[_].target.parentNode; l; )
                            l === t && (n = n.concat(c[_].tweens)),
                            l = l.parentNode;
                    for (p = n.length,
                    u = 0; p > u; u++)
                        e && n[u].totalTime(n[u].totalDuration()),
                        n[u]._enabled(!1, !1)
                }
            }
        }
        ;
        var c = function(t, i, s, r) {
            i = i !== !1,
            s = s !== !1,
            r = r !== !1;
            for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1; )
                a = o[l],
                (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            c(!0, t, e, i)
        }
        ,
        r.resumeAll = function(t, e, i) {
            c(!1, t, e, i)
        }
        ,
        r.globalTimeScale = function(e) {
            var s = t._rootTimeline
              , r = i.ticker.time;
            return arguments.length ? (e = e || n,
            s._startTime = r - (r - s._startTime) * s._timeScale / e,
            s = t._rootFramesTimeline,
            r = i.ticker.frame,
            s._startTime = r - (r - s._startTime) * s._timeScale / e,
            s._timeScale = t._rootTimeline._timeScale = e,
            e) : s._timeScale
        }
        ,
        l.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        l.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        l.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        l.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        l.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        l.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        l.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        l.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r)
                i = r[s],
                h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }
          , r = 1e-10
          , n = i._internals
          , a = s._internals = {}
          , o = n.isSelector
          , h = n.isArray
          , l = n.lazyTweens
          , _ = n.lazyRender
          , u = []
          , p = _gsScope._gsDefine.globals
          , c = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , f = a.pauseCallback = function(t, e, i, s) {
            var n, a = t._timeline, o = a._totalTime, h = t._startTime, l = t._rawPrevTime < 0 || 0 === t._rawPrevTime && a._reversed, _ = l ? 0 : r, p = l ? r : 0;
            if (e || !this._forcingPlayhead) {
                for (a.pause(h),
                n = t._prev; n && n._startTime === h; )
                    n._rawPrevTime = p,
                    n = n._prev;
                for (n = t._next; n && n._startTime === h; )
                    n._rawPrevTime = _,
                    n = n._next;
                e && e.apply(s || a, i || u),
                (this._forcingPlayhead || !a._paused) && a.seek(o)
            }
        }
          , m = function(t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]))
                ;
            return i
        }
          , d = s.prototype = new e;
        return s.version = "1.16.1",
        d.constructor = s,
        d.kill()._gc = d._forcingPlayhead = !1,
        d.to = function(t, e, s, r) {
            var n = s.repeat && p.TweenMax || i;
            return e ? this.add(new n(t,e,s), r) : this.set(t, s, r)
        }
        ,
        d.from = function(t, e, s, r) {
            return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r)
        }
        ,
        d.fromTo = function(t, e, s, r, n) {
            var a = r.repeat && p.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }
        ,
        d.staggerTo = function(t, e, r, n, a, h, l, _) {
            var u, p = new s({
                onComplete: h,
                onCompleteParams: l,
                onCompleteScope: _,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = i.selector(t) || t),
            t = t || [],
            o(t) && (t = m(t)),
            n = n || 0,
            0 > n && (t = m(t),
            t.reverse(),
            n *= -1),
            u = 0; u < t.length; u++)
                r.startAt && (r.startAt = c(r.startAt)),
                p.to(t[u], e, c(r), u * n);
            return this.add(p, a)
        }
        ,
        d.staggerFrom = function(t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, s, r, n, a, o)
        }
        ,
        d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, s, r, n, a, o, h)
        }
        ,
        d.call = function(t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }
        ,
        d.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
            this.add(new i(t,0,e), s)
        }
        ,
        s.exportRoot = function(t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0),
            o._remove(a, !0),
            a._startTime = 0,
            a._rawPrevTime = a._time = a._totalTime = o._time,
            r = o._first; r; )
                n = r._next,
                e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
                r = n;
            return o.add(a, 0),
            a
        }
        ,
        d.add = function(r, n, a, o) {
            var l, _, u, p, c, f;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)),
            !(r instanceof t)) {
                if (r instanceof Array || r && r.push && h(r)) {
                    for (a = a || "normal",
                    o = o || 0,
                    l = n,
                    _ = r.length,
                    u = 0; _ > u; u++)
                        h(p = r[u]) && (p = new s({
                            tweens: p
                        })),
                        this.add(p, l),
                        "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())),
                        l += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, n);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (c = this,
                f = c.rawTime() > r._startTime; c._timeline; )
                    f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1),
                    c = c._timeline;
            return this
        }
        ,
        d.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array || e && e.push && h(e)) {
                for (var i = e.length; --i > -1; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        d._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        d.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        d.insert = d.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }
        ,
        d.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }
        ,
        d.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        d.addPause = function(t, e, s, r) {
            var n = i.delayedCall(0, f, ["{self}", e, s, r], this);
            return n.data = "isPause",
            this.add(n, t)
        }
        ,
        d.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        d.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        d._parseTimeOrLabel = function(e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && h(r)))
                for (n = r.length; --n > -1; )
                    r[n]instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="),
                -1 === n)
                    return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }
        ,
        d.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }
        ,
        d.stop = function() {
            return this.paused(!0)
        }
        ,
        d.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        d.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        d.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, h, p = this._dirty ? this.totalDuration() : this._totalDuration, c = this._time, f = this._startTime, m = this._timeScale, d = this._paused;
            if (t >= p)
                this._totalTime = this._time = p,
                this._reversed || this._hasPausedChild() || (n = !0,
                o = "onComplete",
                h = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0,
                this._rawPrevTime > r && (o = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                t = p + 1e-4;
            else if (1e-7 > t)
                if (this._totalTime = this._time = 0,
                (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete",
                n = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0,
                    o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                    0 === t && n)
                        for (s = this._first; s && 0 === s._startTime; )
                            s._duration || (n = !1),
                            s = s._next;
                    t = 0,
                    this._initted || (h = !0)
                }
            else
                this._totalTime = this._time = this._rawPrevTime = t;
            if (this._time !== c && this._first || i || h) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0),
                0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)),
                this._time >= c)
                    for (s = this._first; s && (a = s._next,
                    !this._paused || d); )
                        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = a;
                else
                    for (s = this._last; s && (a = s._prev,
                    !this._paused || d); )
                        (s._active || s._startTime <= c && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = a;
                this._onUpdate && (e || (l.length && _(),
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))),
                o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
            }
        }
        ,
        d._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof s && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        d.getChildren = function(t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
                a._startTime < r || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a),
                t !== !1 && (n = n.concat(a.getChildren(!0, e, s)),
                o = n.length))),
                a = a._next;
            return n
        }
        ,
        d.getTweensOf = function(t, e) {
            var s, r, n = this._gc, a = [], o = 0;
            for (n && this._enabled(!0, !0),
            s = i.getTweensOf(t),
            r = s.length; --r > -1; )
                (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            return n && this._enabled(!1, !0),
            a
        }
        ,
        d.recent = function() {
            return this._recent
        }
        ,
        d._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        d.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
                r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e)
                for (s in n)
                    n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }
        ,
        d._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1; )
                i[s]._kill(t, e) && (r = !0);
            return r
        }
        ,
        d.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        d.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        d._enabled = function(t, i) {
            if (t === this._gc)
                for (var s = this._first; s; )
                    s._enabled(t, !0),
                    s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        d.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        }
        ,
        d.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        d.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                        e = r._prev,
                        r._dirty && r.totalDuration(),
                        r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                        r._startTime < 0 && !r._paused && (s -= r._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        n = 0),
                        i = r._startTime + r._totalDuration / r._timeScale,
                        i > s && (s = i),
                        r = e;
                    this._duration = this._totalDuration = s,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
            this
        }
        ,
        d.paused = function(e) {
            if (!e)
                for (var i = this._first, s = this._time; i; )
                    i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        d.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        d.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        s
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var s = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        }
          , r = 1e-10
          , n = []
          , a = e._internals
          , o = a.lazyTweens
          , h = a.lazyRender
          , l = new i(null,null,1,0)
          , _ = s.prototype = new t;
        return _.constructor = s,
        _.kill()._gc = !1,
        s.version = "1.16.1",
        _.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        _.addCallback = function(t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }
        ,
        _.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1; )
                        i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }
        ,
        _.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        _.tweenTo = function(t, i) {
            i = i || {};
            var s, r, a, o = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (r in i)
                o[r] = i[r];
            return o.time = this._parseTimeOrLabel(t),
            s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            a = new e(this,s,o),
            o.onStart = function() {
                a.target.paused(!0),
                a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
                i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
            }
            ,
            a
        }
        ,
        _.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            },
            i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }
        ,
        _.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration, f = this._duration, m = this._time, d = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, T = this._paused, x = this._cycle;
            if (t >= c)
                this._locked || (this._totalTime = c,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (a = !0,
                _ = "onComplete",
                u = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0,
                y > r && (_ = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f,
                t = f + 1e-4);
            else if (1e-7 > t)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete",
                a = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (u = a = !0,
                    _ = "onReverseComplete") : y >= 0 && this._first && (u = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r,
                    0 === t && a)
                        for (s = this._first; s && 0 === s._startTime; )
                            s._duration || (a = !1),
                            s = s._next;
                    t = 0,
                    this._initted || (u = !0)
                }
            else
                0 === f && 0 > y && (u = !0),
                this._time = this._rawPrevTime = t,
                this._locked || (this._totalTime = t,
                0 !== this._repeat && (p = f + this._repeatDelay,
                this._cycle = this._totalTime / p >> 0,
                0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--,
                this._time = this._totalTime - this._cycle * p,
                this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time),
                this._time > f ? (this._time = f,
                t = f + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
            if (this._cycle !== x && !this._locked) {
                var w = this._yoyo && 0 !== (1 & x)
                  , b = w === (this._yoyo && 0 !== (1 & this._cycle))
                  , P = this._totalTime
                  , S = this._cycle
                  , R = this._rawPrevTime
                  , O = this._time;
                if (this._totalTime = x * f,
                this._cycle < x ? w = !w : this._totalTime += f,
                this._time = m,
                this._rawPrevTime = 0 === f ? y - 1e-4 : y,
                this._cycle = x,
                this._locked = !0,
                m = w ? 0 : f,
                this.render(m, e, 0 === f),
                e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n),
                b && (m = w ? f + 1e-4 : -1e-4,
                this.render(m, !0, !1)),
                this._locked = !1,
                this._paused && !T)
                    return;
                this._time = O,
                this._totalTime = P,
                this._cycle = S,
                this._rawPrevTime = R
            }
            if (!(this._time !== m && this._first || i || u))
                return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)),
                void 0;
            if (this._initted || (this._initted = !0),
            this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0),
            0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)),
            this._time >= m)
                for (s = this._first; s && (l = s._next,
                !this._paused || T); )
                    (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = l;
            else
                for (s = this._last; s && (l = s._prev,
                !this._paused || T); )
                    (s._active || s._startTime <= m && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = l;
            this._onUpdate && (e || (o.length && h(),
            this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))),
            _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(),
            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
        }
        ,
        _.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var s, r, n = [], a = this.getChildren(t, e, i), o = 0, h = a.length;
            for (s = 0; h > s; s++)
                r = a[s],
                r.isActive() && (n[o++] = r);
            return n
        }
        ,
        _.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        _.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (e[i].time < t)
                    return e[i].name;
            return null
        }
        ,
        _.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        _.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        _.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        _.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        _.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        _.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        _.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        _.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        _.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        s
    }, !0),
    function() {
        var t = 180 / Math.PI
          , e = []
          , i = []
          , s = []
          , r = {}
          , n = _gsScope._gsDefine.globals
          , a = function(t, e, i, s) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        }
          , o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
          , h = function(t, e, i, s) {
            var r = {
                a: t
            }
              , n = {}
              , a = {}
              , o = {
                c: s
            }
              , h = (t + e) / 2
              , l = (e + i) / 2
              , _ = (i + s) / 2
              , u = (h + l) / 2
              , p = (l + _) / 2
              , c = (p - u) / 8;
            return r.b = h + (t - h) / 4,
            n.b = u + c,
            r.c = n.a = (r.b + n.b) / 2,
            n.c = a.a = (u + p) / 2,
            a.b = p - c,
            o.b = _ + (s - _) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, n, a, o]
        }
          , l = function(t, r, n, a, o) {
            var l, _, u, p, c, f, m, d, g, v, y, T, x, w = t.length - 1, b = 0, P = t[0].a;
            for (l = 0; w > l; l++)
                c = t[b],
                _ = c.a,
                u = c.d,
                p = t[b + 1].d,
                o ? (y = e[l],
                T = i[l],
                x = (T + y) * r * .25 / (a ? .5 : s[l] || .5),
                f = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0),
                m = u + (p - u) * (a ? .5 * r : 0 !== T ? x / T : 0),
                d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - (u - _) * r * .5,
                m = u + (p - u) * r * .5,
                d = u - (f + m) / 2),
                f += d,
                m += d,
                c.c = g = f,
                c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a),
                c.da = u - _,
                c.ca = g - _,
                c.ba = P - _,
                n ? (v = h(_, P, g, u),
                t.splice(b, 1, v[0], v[1], v[2], v[3]),
                b += 4) : b++,
                P = m;
            c = t[b],
            c.b = P,
            c.c = P + .4 * (c.d - P),
            c.da = c.d - c.a,
            c.ca = c.c - c.a,
            c.ba = P - c.a,
            n && (v = h(c.a, P, c.c, c.d),
            t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }
          , _ = function(t, s, r, n) {
            var o, h, l, _, u, p, c = [];
            if (n)
                for (t = [n].concat(t),
                h = t.length; --h > -1; )
                    "string" == typeof (p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2,
            0 > o)
                return c[0] = new a(t[0][s],0,0,t[-1 > o ? 0 : 1][s]),
                c;
            for (h = 0; o > h; h++)
                l = t[h][s],
                _ = t[h + 1][s],
                c[h] = new a(l,0,0,_),
                r && (u = t[h + 2][s],
                e[h] = (e[h] || 0) + (_ - l) * (_ - l),
                i[h] = (i[h] || 0) + (u - _) * (u - _));
            return c[h] = new a(t[h][s],0,0,t[h + 1][s]),
            c
        }
          , u = function(t, n, a, h, u, p) {
            var c, f, m, d, g, v, y, T, x = {}, w = [], b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : o,
            null == n && (n = 1);
            for (f in t[0])
                w.push(f);
            if (t.length > 1) {
                for (T = t[t.length - 1],
                y = !0,
                c = w.length; --c > -1; )
                    if (f = w[c],
                    Math.abs(b[f] - T[f]) > .05) {
                        y = !1;
                        break
                    }
                y && (t = t.concat(),
                p && t.unshift(p),
                t.push(t[1]),
                p = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0,
            c = w.length; --c > -1; )
                f = w[c],
                r[f] = -1 !== u.indexOf("," + f + ","),
                x[f] = _(t, f, r[f], p);
            for (c = e.length; --c > -1; )
                e[c] = Math.sqrt(e[c]),
                i[c] = Math.sqrt(i[c]);
            if (!h) {
                for (c = w.length; --c > -1; )
                    if (r[f])
                        for (m = x[w[c]],
                        v = m.length - 1,
                        d = 0; v > d; d++)
                            g = m[d + 1].da / i[d] + m[d].da / e[d],
                            s[d] = (s[d] || 0) + g * g;
                for (c = s.length; --c > -1; )
                    s[c] = Math.sqrt(s[c])
            }
            for (c = w.length,
            d = a ? 4 : 1; --c > -1; )
                f = w[c],
                m = x[f],
                l(m, n, a, h, r[f]),
                y && (m.splice(0, d),
                m.splice(m.length - d, d));
            return x
        }
          , p = function(t, e, i) {
            e = e || "soft";
            var s, r, n, o, h, l, _, u, p, c, f, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)),
            null == t || t.length < d + 1)
                throw "invalid Bezier data";
            for (p in t[0])
                v.push(p);
            for (l = v.length; --l > -1; ) {
                for (p = v[l],
                m[p] = h = [],
                c = 0,
                u = t.length,
                _ = 0; u > _; _++)
                    s = null == i ? t[_][p] : "string" == typeof (f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                    g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2),
                    h[c++] = s;
                for (u = c - d + 1,
                c = 0,
                _ = 0; u > _; _ += d)
                    s = h[_],
                    r = h[_ + 1],
                    n = h[_ + 2],
                    o = 2 === d ? 0 : h[_ + 3],
                    h[c++] = f = 3 === d ? new a(s,r,n,o) : new a(s,(2 * r + s) / 3,(2 * r + n) / 3,n);
                h.length = c
            }
            return m
        }
          , c = function(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1; )
                for (p = t[m],
                n = p.a,
                a = p.d - n,
                o = p.c - n,
                h = p.b - n,
                s = r = 0,
                _ = 1; i >= _; _++)
                    l = f * _,
                    u = 1 - l,
                    s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l),
                    c = m * i + _ - 1,
                    e[c] = (e[c] || 0) + s * s
        }
          , f = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [], o = [], h = 0, l = 0, _ = e - 1, u = [], p = [];
            for (i in t)
                c(t[i], a, e);
            for (r = a.length,
            s = 0; r > s; s++)
                h += Math.sqrt(a[s]),
                n = s % e,
                p[n] = h,
                n === _ && (l += h,
                n = s / e >> 0,
                u[n] = p,
                o[n] = l,
                h = 0,
                p = []);
            return {
                length: l,
                lengths: o,
                segments: u
            }
        }
          , m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, h = e.values || [], l = {}, _ = h[0], c = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]] : null;
                for (s in _)
                    this._props.push(s);
                for (n = this._props.length; --n > -1; )
                    s = this._props[n],
                    this._overwriteProps.push(s),
                    r = this._func[s] = "function" == typeof t[s],
                    l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                    o || l[s] !== h[0][s] && (o = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l),
                this._segCount = this._beziers[s].length,
                this._timeRes) {
                    var m = f(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (c = this._autoRotate)
                    for (this._initialRotations = [],
                    c[0]instanceof Array || (this._autoRotate = c = [c]),
                    n = c.length; --n > -1; ) {
                        for (a = 0; 3 > a; a++)
                            s = c[n][a],
                            this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                        s = c[n][2],
                        this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, s, r, n, a, o, h, l, _, u, p = this._segCount, c = this._func, f = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (_ = this._lengths,
                    u = this._curSeg,
                    e *= this._length,
                    r = this._li,
                    e > this._l2 && p - 1 > r) {
                        for (l = p - 1; l > r && (this._l2 = _[++r]) <= e; )
                            ;
                        this._l1 = _[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e; )
                            ;
                        0 === r && e < this._l1 ? this._l1 = 0 : r++,
                        this._l2 = _[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r,
                    e -= this._l1,
                    r = this._si,
                    e > this._s2 && r < u.length - 1) {
                        for (l = u.length - 1; l > r && (this._s2 = u[++r]) <= e; )
                            ;
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (e < this._s1 && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && e < this._s1 ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                    o = (e - i * (1 / p)) * p;
                for (s = 1 - o,
                r = this._props.length; --r > -1; )
                    n = this._props[r],
                    a = this._beziers[n][i],
                    h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                    this._round[n] && (h = Math.round(h)),
                    c[n] ? f[n](h) : f[n] = h;
                if (this._autoRotate) {
                    var d, g, v, y, T, x, w, b = this._autoRotate;
                    for (r = b.length; --r > -1; )
                        n = b[r][2],
                        x = b[r][3] || 0,
                        w = b[r][4] === !0 ? 1 : t,
                        a = this._beziers[b[r][0]],
                        d = this._beziers[b[r][1]],
                        a && d && (a = a[i],
                        d = d[i],
                        g = a.a + (a.b - a.a) * o,
                        y = a.b + (a.c - a.b) * o,
                        g += (y - g) * o,
                        y += (a.c + (a.d - a.c) * o - y) * o,
                        v = d.a + (d.b - d.a) * o,
                        T = d.b + (d.c - d.b) * o,
                        v += (T - v) * o,
                        T += (d.c + (d.d - d.c) * o - T) * o,
                        h = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r],
                        c[n] ? f[n](h) : f[n] = h)
                }
            }
        })
          , d = m.prototype;
        m.bezierThrough = u,
        m.cubicToQuadratic = h,
        m._autoCSS = !0,
        m.quadraticToCubic = function(t, e, i) {
            return new a(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
        }
        ,
        m._cssRegister = function() {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals
                  , i = e._parseToProxy
                  , s = e._setPluginRatio
                  , r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, n, a, o, h) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        h = new m;
                        var l, _, u, p = e.values, c = p.length - 1, f = [], d = {};
                        if (0 > c)
                            return o;
                        for (l = 0; c >= l; l++)
                            u = i(t, p[l], a, o, h, c !== l),
                            f[l] = u.end;
                        for (_ in e)
                            d[_] = e[_];
                        return d.values = f,
                        o = new r(t,"bezier",0,0,u.pt,2),
                        o.data = u,
                        o.plugin = h,
                        o.setRatio = s,
                        0 === d.autoRotate && (d.autoRotate = !0),
                        !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate),
                        d.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x ? [["x", "y", "rotation", l, !1]] : !1),
                        d.autoRotate && (a._transform || a._enableTransforms(!1),
                        u.autoRotate = a._target._gsTransform),
                        h._onInitTween(u.proxy, d, a._tween),
                        o
                    }
                })
            }
        }
        ,
        d._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1; )
                (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }
        ,
        d._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e],
                    delete this._func[e],
                    i = s.length; --i > -1; )
                        s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, h = {}, l = a.prototype = new t("css");
        l.constructor = a,
        a.version = "1.16.1",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        l = "px",
        a.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
        };
        var _, u, p, c, f, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g, g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, T = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, b = /alpha\(opacity *=.+?\)/i, P = /^(rgb|hsl)/, S = /([A-Z])/g, R = /-([a-z])/gi, O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, M = /,(?=[^\)]*(?:\(|$))/gi, z = Math.PI / 180, F = 180 / Math.PI, I = {}, N = document, X = function(t) {
            return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
        }, L = X("div"), E = X("img"), Y = a._internals = {
            _specialProps: h
        }, B = navigator.userAgent, U = function() {
            var t = B.indexOf("Android")
              , e = X("a");
            return p = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3),
            f = p && Number(B.substr(B.indexOf("Version/") + 8, 1)) < 6,
            c = -1 !== B.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (m = parseFloat(RegExp.$1)),
            e ? (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity)) : !1
        }(), j = function(t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, V = function(t) {
            window.console && console.log(t)
        }, q = "", W = "", Z = function(t, e) {
            e = e || L;
            var i, s, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            s = 5; --s > -1 && void 0 === r[i[s] + t]; )
                ;
            return s >= 0 ? (W = 3 === s ? "ms" : i[s],
            q = "-" + W.toLowerCase() + "-",
            W + t) : null
        }, G = N.defaultView ? N.defaultView.getComputedStyle : function() {}
        , $ = a.getStyle = function(t, e, i, s, r) {
            var n;
            return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || G(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]),
            null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t)
        }
        , Q = Y.convertToPixels = function(t, i, s, r, n) {
            if ("px" === r || !r)
                return s;
            if ("auto" === r || !s)
                return 0;
            var o, h, l, _ = A.test(i), u = t, p = L.style, c = 0 > s;
            if (c && (s = -s),
            "%" === r && -1 !== i.indexOf("border"))
                o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
            else {
                if (p.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;",
                "%" !== r && u.appendChild)
                    p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                else {
                    if (u = t.parentNode || N.body,
                    h = u._gsCache,
                    l = e.ticker.frame,
                    h && _ && h.time === l)
                        return h.width * s / 100;
                    p[_ ? "width" : "height"] = s + r
                }
                u.appendChild(L),
                o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(L),
                _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {},
                h.time = l,
                h.width = o / s * 100),
                0 !== o || n || (o = Q(t, i, s, r, !0))
            }
            return c ? -o : o
        }
        , H = Y.calculateOffset = function(t, e, i) {
            if ("absolute" !== $(t, "position", i))
                return 0;
            var s = "left" === e ? "Left" : "Top"
              , r = $(t, "margin" + s, i);
            return t["offset" + s] - (Q(t, e, parseFloat(r), r.replace(T, "")) || 0)
        }
        , K = function(t, e) {
            var i, s, r, n = {};
            if (e = e || G(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        r = e[i],
                        (-1 === r.indexOf("-transform") || be === r) && (n[r.replace(R, k)] = e.getPropertyValue(r));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || we === i) && (n[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === n[i] && (n[i.replace(R, k)] = e[i]);
            return U || (n.opacity = j(t)),
            s = Me(t, e, !1),
            n.rotation = s.rotation,
            n.skewX = s.skewX,
            n.scaleX = s.scaleX,
            n.scaleY = s.scaleY,
            n.x = s.x,
            n.y = s.y,
            Se && (n.z = s.z,
            n.rotationX = s.rotationX,
            n.rotationY = s.rotationY,
            n.scaleZ = s.scaleZ),
            n.filters && delete n.filters,
            n
        }, J = function(t, e, i, s, r) {
            var n, a, o, h = {}, l = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a),
                void 0 !== l[a] && (o = new ce(l,a,l[a],o)));
            if (s)
                for (a in s)
                    "className" !== a && (h[a] = s[a]);
            return {
                difs: h,
                firstMPT: o
            }
        }, te = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ie = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , r = te[e]
              , n = r.length;
            for (i = i || G(t, null); --n > -1; )
                s -= parseFloat($(t, "padding" + r[n], i, !0)) || 0,
                s -= parseFloat($(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, se = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" ")
              , s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            t = s + " " + r + (i.length > 2 ? " " + i[2] : ""),
            e && (e.oxp = -1 !== s.indexOf("%"),
            e.oyp = -1 !== r.indexOf("%"),
            e.oxr = "=" === s.charAt(1),
            e.oyr = "=" === r.charAt(1),
            e.ox = parseFloat(s.replace(y, "")),
            e.oy = parseFloat(r.replace(y, "")),
            e.v = t),
            e || t
        }, re = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, ne = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, ae = function(t, e, i, s) {
            var r, n, a, o, h, l = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360,
            n = t.split("_"),
            h = "=" === t.charAt(1),
            a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (h ? 0 : e),
            n.length && (s && (s[i] = e + a),
            -1 !== t.indexOf("short") && (a %= r,
            a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)),
            o = e + a),
            l > o && o > -l && (o = 0),
            o
        }, oe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, he = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, le = a.parseColor = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
            oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1),
            i = t.charAt(2),
            s = t.charAt(3),
            t = "#" + e + e + i + i + s + s),
            t = parseInt(t.substr(1), 16),
            [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d),
            r = Number(t[0]) % 360 / 360,
            n = Number(t[1]) / 100,
            a = Number(t[2]) / 100,
            i = .5 >= a ? a * (n + 1) : a + n - a * n,
            e = 2 * a - i,
            t.length > 3 && (t[3] = Number(t[3])),
            t[0] = he(r + 1 / 3, e, i),
            t[1] = he(r, e, i),
            t[2] = he(r - 1 / 3, e, i),
            t) : (t = t.match(d) || oe.transparent,
            t[0] = Number(t[0]),
            t[1] = Number(t[1]),
            t[2] = Number(t[2]),
            t.length > 3 && (t[3] = Number(t[3])),
            t)) : oe.black
        }
        , _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in oe)
            _e += "|" + l + "\\b";
        _e = new RegExp(_e + ")","gi");
        var ue = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var r, n = e ? (t.match(_e) || [""])[0] : "", a = t.split(n).join("").match(v) || [], o = t.substr(0, t.indexOf(a[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(d, "") : "";
            return _ ? r = e ? function(t) {
                var e, p, c, f;
                if ("number" == typeof t)
                    t += u;
                else if (s && M.test(t)) {
                    for (f = t.replace(M, "|").split("|"),
                    c = 0; c < f.length; c++)
                        f[c] = r(f[c]);
                    return f.join(",")
                }
                if (e = (t.match(_e) || [n])[0],
                p = t.split(e).join("").match(v) || [],
                c = p.length,
                _ > c--)
                    for (; ++c < _; )
                        p[c] = i ? p[(c - 1) / 2 | 0] : a[c];
                return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, n, p;
                if ("number" == typeof t)
                    t += u;
                else if (s && M.test(t)) {
                    for (n = t.replace(M, "|").split("|"),
                    p = 0; p < n.length; p++)
                        n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(v) || [],
                p = e.length,
                _ > p--)
                    for (; ++p < _; )
                        e[p] = i ? e[(p - 1) / 2 | 0] : a[p];
                return o + e.join(l) + h
            }
            : function(t) {
                return t
            }
        }
          , pe = function(t) {
            return t = t.split(","),
            function(e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {},
                h = 0; 4 > h; h++)
                    o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }
          , ce = (Y._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o; )
                e = a[o.v],
                o.r ? e = Math.round(e) : h > e && e > -h && (e = 0),
                o.t[o.p] = e,
                o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation),
            1 === t)
                for (o = n.firstMPT; o; ) {
                    if (i = o.t,
                    i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            s = 1; s < i.l; s++)
                                r += i["xn" + s] + i["xs" + (s + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }
        ,
        function(t, e, i, s, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            s && (s._prev = this,
            this._next = s)
        }
        )
          , fe = (Y._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u = s, p = {}, c = {}, f = i._transform, m = I;
            for (i._transform = null,
            I = e,
            s = _ = i.parse(t, e, s, r),
            I = m,
            n && (i._transform = f,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); s && s !== u; ) {
                if (s.type <= 1 && (o = s.p,
                c[o] = s.s + s.c,
                p[o] = s.s,
                n || (l = new ce(s,"s",o,l,s.r),
                s.c = 0),
                1 === s.type))
                    for (a = s.l; --a > 0; )
                        h = "xn" + a,
                        o = s.p + "_" + h,
                        c[o] = s.data[h],
                        p[o] = s[h],
                        n || (l = new ce(s,h,o,l,s.rxp[h]));
                s = s._next
            }
            return {
                proxy: p,
                end: c,
                firstMPT: l,
                pt: _
            }
        }
        ,
        Y.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = r,
            this.n = h || e,
            t instanceof fe || n.push(this.n),
            this.r = l,
            this.type = o || 0,
            _ && (this.pr = _,
            i = !0),
            this.b = void 0 === u ? s : u,
            this.e = void 0 === p ? s + r : p,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , me = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
            i = i || n || "",
            a = new fe(t,e,0,0,a,l ? 2 : 1,null,!1,o,i,s),
            s += "";
            var u, p, c, f, m, v, y, T, x, w, b, S, R = i.split(", ").join(",").split(" "), O = s.split(", ").join(",").split(" "), k = R.length, A = _ !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(M, ", ").split(" "),
            O = O.join(" ").replace(M, ", ").split(" "),
            k = R.length),
            k !== O.length && (R = (n || "").split(" "),
            k = R.length),
            a.plugin = h,
            a.setRatio = l,
            u = 0; k > u; u++)
                if (f = R[u],
                m = O[u],
                T = parseFloat(f),
                T || 0 === T)
                    a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f)))
                    S = "," === m.charAt(m.length - 1) ? ")," : ")",
                    f = le(f),
                    m = le(m),
                    x = f.length + m.length > 6,
                    x && !U && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(O[u]).join("transparent")) : (U || (x = !1),
                    a.appendXtra(x ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], x ? "," : S, !0),
                    x && (f = f.length < 4 ? 1 : f[3],
                    a.appendXtra("", f, (m.length < 4 ? 1 : m[3]) - f, S, !1)));
                else if (v = f.match(d)) {
                    if (y = m.match(g),
                    !y || y.length !== v.length)
                        return a;
                    for (c = 0,
                    p = 0; p < v.length; p++)
                        b = v[p],
                        w = f.indexOf(b, c),
                        a.appendXtra(f.substr(c, w - c), Number(b), re(y[p], b), "", A && "px" === f.substr(w + b.length, 2), 0 === p),
                        c = w + b.length;
                    a["xs" + a.l] += f.substr(c)
                } else
                    a["xs" + a.l] += a.l ? " " + f : f;
            if (-1 !== s.indexOf("=") && a.data) {
                for (S = a.xs0 + a.data.s,
                u = 1; u < a.l; u++)
                    S += a["xs" + u] + a.data["xn" + u];
                a.e = S + a["xs" + u]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , de = 9;
        for (l = fe.prototype,
        l.l = l.pr = 0; --de > 0; )
            l["xn" + de] = 0,
            l["xs" + de] = "";
        l.xs0 = "",
        l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null,
        l.appendXtra = function(t, e, i, s, r, n) {
            var a = this
              , o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "",
            i || 0 === o || a.plugin ? (a.l++,
            a.type = a.setRatio ? 2 : 1,
            a["xs" + a.l] = s || "",
            o > 0 ? (a.data["xn" + o] = e + i,
            a.rxp["xn" + o] = r,
            a["xn" + o] = e,
            a.plugin || (a.xfirst = new fe(a,"xn" + o,e,i,a.xfirst || a,0,a.n,r,a.pr),
            a.xfirst.xs0 = 0),
            a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e,
            a.c = i,
            a.r = r,
            a)) : (a["xs" + o] += e + (s || ""),
            a)
        }
        ;
        var ge = function(t, e) {
            e = e || {},
            this.p = e.prefix ? Z(t) || t : t,
            h[t] = h[this.p] = this,
            this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , ve = Y._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a],
            s = 0; s < n.length; s++)
                e.prefix = 0 === s && e.prefix,
                e.defaultValue = i[s] || a,
                r = new ge(n[s],e)
        }
          , ye = function(t) {
            if (!h[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                ve(t, {
                    parser: function(t, i, s, r, n, a, l) {
                        var _ = o.com.greensock.plugins[e];
                        return _ ? (_._cssRegister(),
                        h[s].parse(t, i, s, r, n, a, l)) : (V("Error: " + e + " js file not loaded."),
                        n)
                    }
                })
            }
        };
        l = ge.prototype,
        l.parseComplex = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u, p = this.keyword;
            if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"),
            h = i.replace(M, "|").split("|")) : p && (o = [e],
            h = [i])),
            h) {
                for (l = h.length > o.length ? h.length : o.length,
                a = 0; l > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = h[a] = h[a] || this.dflt,
                    p && (_ = e.indexOf(p),
                    u = i.indexOf(p),
                    _ !== u && (-1 === u ? o[a] = o[a].split(p).join("") : -1 === _ && (o[a] += " " + p)));
                e = o.join(", "),
                i = h.join(", ")
            }
            return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }
        ,
        l.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format($(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            ve(t, {
                parser: function(t, s, r, n, a, o) {
                    var h = new fe(t,r,0,0,a,2,r,!1,i);
                    return h.plugin = o,
                    h.setRatio = e(t, s, n._tween, r),
                    h
                },
                priority: i
            })
        }
        ,
        a.useSVGTransformAttr = p;
        var Te, xe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), we = Z("transform"), be = q + "transform", Pe = Z("transformOrigin"), Se = null !== Z("perspective"), Re = Y.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
        }
        , Oe = window.SVGElement, ke = function(t, e, i) {
            var s, r = N.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
            for (s in i)
                r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r),
            r
        }, Ae = N.documentElement, Ce = function() {
            var t, e, i, s = m || /Android/i.test(B) && !window.chrome;
            return N.createElementNS && !s && (t = ke("svg", Ae),
            e = ke("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }),
            i = e.getBoundingClientRect().width,
            e.style[Pe] = "50% 50%",
            e.style[we] = "scaleX(0.5)",
            s = i === e.getBoundingClientRect().width && !(c && Se),
            Ae.removeChild(t)),
            s
        }(), De = function(t, e, i, s) {
            var r, n;
            s && (n = s.split(" ")).length || (r = t.getBBox(),
            e = se(e).split(" "),
            n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y]),
            i.xOrigin = parseFloat(n[0]),
            i.yOrigin = parseFloat(n[1]),
            t.setAttribute("data-svg-origin", n.join(" "))
        }, Me = Y.getTransform = function(t, e, i, s) {
            if (t._gsTransform && i && !s)
                return t._gsTransform;
            var n, o, h, l, _, u, p, c, f, m, d = i ? t._gsTransform || new Re : new Re, g = d.scaleX < 0, v = 2e-5, y = 1e5, T = Se ? parseFloat($(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0, x = parseFloat(a.defaultTransformPerspective) || 0;
            if (we ? o = $(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(C),
            o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""),
            n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o,
            d.svg = !!(Oe && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)),
            d.svg && (n && -1 !== (t.style[we] + "").indexOf("matrix") && (o = t.style[we],
            n = !1),
            De(t, $(t, Pe, r, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")),
            Te = a.useSVGTransformAttr || Ce,
            h = t.getAttribute("transform"),
            n && h && -1 !== h.indexOf("matrix") && (o = h,
            n = 0)),
            !n) {
                for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                l = h.length; --l > -1; )
                    _ = Number(h[l]),
                    h[l] = (u = _ - (_ |= 0)) ? (u * y + (0 > u ? -.5 : .5) | 0) / y + _ : _;
                if (16 === h.length) {
                    var w, b, P, S, R, O = h[0], k = h[1], A = h[2], D = h[3], M = h[4], z = h[5], I = h[6], N = h[7], X = h[8], L = h[9], E = h[10], Y = h[12], B = h[13], U = h[14], j = h[11], V = Math.atan2(I, E);
                    d.zOrigin && (U = -d.zOrigin,
                    Y = X * U - h[12],
                    B = L * U - h[13],
                    U = E * U + d.zOrigin - h[14]),
                    d.rotationX = V * F,
                    V && (S = Math.cos(-V),
                    R = Math.sin(-V),
                    w = M * S + X * R,
                    b = z * S + L * R,
                    P = I * S + E * R,
                    X = M * -R + X * S,
                    L = z * -R + L * S,
                    E = I * -R + E * S,
                    j = N * -R + j * S,
                    M = w,
                    z = b,
                    I = P),
                    V = Math.atan2(X, E),
                    d.rotationY = V * F,
                    V && (S = Math.cos(-V),
                    R = Math.sin(-V),
                    w = O * S - X * R,
                    b = k * S - L * R,
                    P = A * S - E * R,
                    L = k * R + L * S,
                    E = A * R + E * S,
                    j = D * R + j * S,
                    O = w,
                    k = b,
                    A = P),
                    V = Math.atan2(k, O),
                    d.rotation = V * F,
                    V && (S = Math.cos(-V),
                    R = Math.sin(-V),
                    O = O * S + M * R,
                    b = k * S + z * R,
                    z = k * -R + z * S,
                    I = A * -R + I * S,
                    k = b),
                    d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0,
                    d.rotationY += 180),
                    d.scaleX = (Math.sqrt(O * O + k * k) * y + .5 | 0) / y,
                    d.scaleY = (Math.sqrt(z * z + L * L) * y + .5 | 0) / y,
                    d.scaleZ = (Math.sqrt(I * I + E * E) * y + .5 | 0) / y,
                    d.skewX = 0,
                    d.perspective = j ? 1 / (0 > j ? -j : j) : 0,
                    d.x = Y,
                    d.y = B,
                    d.z = U,
                    d.svg && (d.x -= d.xOrigin - (d.xOrigin * O - d.yOrigin * M),
                    d.y -= d.yOrigin - (d.yOrigin * k - d.xOrigin * z))
                } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === $(t, "display", e))) {
                    var q = h.length >= 6
                      , W = q ? h[0] : 1
                      , Z = h[1] || 0
                      , G = h[2] || 0
                      , Q = q ? h[3] : 1;
                    d.x = h[4] || 0,
                    d.y = h[5] || 0,
                    p = Math.sqrt(W * W + Z * Z),
                    c = Math.sqrt(Q * Q + G * G),
                    f = W || Z ? Math.atan2(Z, W) * F : d.rotation || 0,
                    m = G || Q ? Math.atan2(G, Q) * F + f : d.skewX || 0,
                    Math.abs(m) > 90 && Math.abs(m) < 270 && (g ? (p *= -1,
                    m += 0 >= f ? 180 : -180,
                    f += 0 >= f ? 180 : -180) : (c *= -1,
                    m += 0 >= m ? 180 : -180)),
                    d.scaleX = p,
                    d.scaleY = c,
                    d.rotation = f,
                    d.skewX = m,
                    Se && (d.rotationX = d.rotationY = d.z = 0,
                    d.perspective = x,
                    d.scaleZ = 1),
                    d.svg && (d.x -= d.xOrigin - (d.xOrigin * W - d.yOrigin * Z),
                    d.y -= d.yOrigin - (d.yOrigin * Q - d.xOrigin * G))
                }
                d.zOrigin = T;
                for (l in d)
                    d[l] < v && d[l] > -v && (d[l] = 0)
            }
            return i && (t._gsTransform = d,
            d.svg && (Te && t.style[we] ? Ne(t.style, we) : !Te && t.getAttribute("transform") && t.removeAttribute("transform"))),
            d
        }
        , ze = function(t) {
            var e, i, s = this.data, r = -s.rotation * z, n = r + s.skewX * z, a = 1e5, o = (Math.cos(r) * s.scaleX * a | 0) / a, h = (Math.sin(r) * s.scaleX * a | 0) / a, l = (Math.sin(n) * -s.scaleY * a | 0) / a, _ = (Math.cos(n) * s.scaleY * a | 0) / a, u = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = h,
                h = -l,
                l = -i,
                e = p.filter,
                u.filter = "";
                var c, f, d = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _, w = s.x + d * s.xPercent / 100, b = s.y + g * s.yPercent / 100;
                if (null != s.ox && (c = (s.oxp ? d * s.ox * .01 : s.ox) - d / 2,
                f = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2,
                w += c - (c * o + f * h),
                b += f - (c * l + f * _)),
                v ? (c = d / 2,
                f = g / 2,
                y += ", Dx=" + (c - (c * o + f * h) + w) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')",
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e,
                (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")),
                !v) {
                    var P, S, R, O = 8 > m ? 1 : -1;
                    for (c = s.ieOffsetX || 0,
                    f = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w),
                    s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b),
                    de = 0; 4 > de; de++)
                        S = ee[de],
                        P = p[S],
                        i = -1 !== P.indexOf("px") ? parseFloat(P) : Q(this.t, S, parseFloat(P), P.replace(T, "")) || 0,
                        R = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY,
                        u[S] = (s[S] = Math.round(i - R * (0 === de || 2 === de ? 1 : O))) + "px"
                }
            }
        }, Fe = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
            var e, i, s, r, n, a, o, h, l, _, u, p, f, m, d, g, v, y, T, x, w, b, P, S = this.data, R = this.t.style, O = S.rotation, k = S.rotationX, A = S.rotationY, C = S.scaleX, D = S.scaleY, M = S.scaleZ, F = S.x, I = S.y, N = S.z, X = S.svg, L = S.perspective, E = S.force3D;
            if (!(((1 !== t && 0 !== t || "auto" !== E || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && E || N || L || A || k) && (!Te || !X) && Se))
                return O || S.skewX || X ? (O *= z,
                b = S.skewX * z,
                P = 1e5,
                e = Math.cos(O) * C,
                r = Math.sin(O) * C,
                i = Math.sin(O - b) * -D,
                n = Math.cos(O - b) * D,
                b && "simple" === S.skewType && (v = Math.tan(b),
                v = Math.sqrt(1 + v * v),
                i *= v,
                n *= v,
                S.skewY && (e *= v,
                r *= v)),
                X && (F += S.xOrigin - (S.xOrigin * e + S.yOrigin * i),
                I += S.yOrigin - (S.xOrigin * r + S.yOrigin * n),
                m = 1e-6,
                m > F && F > -m && (F = 0),
                m > I && I > -m && (I = 0)),
                T = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (i * P | 0) / P + "," + (n * P | 0) / P + "," + F + "," + I + ")",
                X && Te ? this.t.setAttribute("transform", "matrix(" + T) : R[we] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + T) : R[we] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + I + ")",
                void 0;
            if (c && (m = 1e-4,
            m > C && C > -m && (C = M = 2e-5),
            m > D && D > -m && (D = M = 2e-5),
            !L || S.z || S.rotationX || S.rotationY || (L = 0)),
            O || S.skewX)
                O *= z,
                d = e = Math.cos(O),
                g = r = Math.sin(O),
                S.skewX && (O -= S.skewX * z,
                d = Math.cos(O),
                g = Math.sin(O),
                "simple" === S.skewType && (v = Math.tan(S.skewX * z),
                v = Math.sqrt(1 + v * v),
                d *= v,
                g *= v,
                S.skewY && (e *= v,
                r *= v))),
                i = -g,
                n = d;
            else {
                if (!(A || k || 1 !== M || L || X))
                    return R[we] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + I + "px," + N + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""),
                    void 0;
                e = n = 1,
                i = r = 0
            }
            l = 1,
            s = a = o = h = _ = u = 0,
            p = L ? -1 / L : 0,
            f = S.zOrigin,
            m = 1e-6,
            x = ",",
            w = "0",
            O = A * z,
            O && (d = Math.cos(O),
            g = Math.sin(O),
            o = -g,
            _ = p * -g,
            s = e * g,
            a = r * g,
            l = d,
            p *= d,
            e *= d,
            r *= d),
            O = k * z,
            O && (d = Math.cos(O),
            g = Math.sin(O),
            v = i * d + s * g,
            y = n * d + a * g,
            h = l * g,
            u = p * g,
            s = i * -g + s * d,
            a = n * -g + a * d,
            l *= d,
            p *= d,
            i = v,
            n = y),
            1 !== M && (s *= M,
            a *= M,
            l *= M,
            p *= M),
            1 !== D && (i *= D,
            n *= D,
            h *= D,
            u *= D),
            1 !== C && (e *= C,
            r *= C,
            o *= C,
            _ *= C),
            (f || X) && (f && (F += s * -f,
            I += a * -f,
            N += l * -f + f),
            X && (F += S.xOrigin - (S.xOrigin * e + S.yOrigin * i),
            I += S.yOrigin - (S.xOrigin * r + S.yOrigin * n)),
            m > F && F > -m && (F = w),
            m > I && I > -m && (I = w),
            m > N && N > -m && (N = 0)),
            T = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
            T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o),
            T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n),
            k || A ? (T += x + (m > h && h > -m ? w : h) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s),
            T += x + (m > a && a > -m ? w : a) + x + (m > l && l > -m ? w : l) + x + (m > p && p > -m ? w : p) + x) : T += ",0,0,0,0,1,0,",
            T += F + x + I + x + N + x + (L ? 1 + -N / L : 1) + ")",
            R[we] = T
        }
        ;
        l = Re.prototype,
        l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0,
        l.scaleX = l.scaleY = l.scaleZ = 1,
        ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function(t, e, i, s, n, o, h) {
                if (s._lastParsedTransform === h)
                    return n;
                s._lastParsedTransform = h;
                var l, _, u, p, c, f, m, d = s._transform = Me(t, r, !0, h.parseTransform), g = t.style, v = 1e-6, y = xe.length, T = h, x = {};
                if ("string" == typeof T.transform && we)
                    u = L.style,
                    u[we] = T.transform,
                    u.display = "block",
                    u.position = "absolute",
                    N.body.appendChild(L),
                    l = Me(L, null, !1),
                    N.body.removeChild(L);
                else if ("object" == typeof T) {
                    if (l = {
                        scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                        scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                        scaleZ: ne(T.scaleZ, d.scaleZ),
                        x: ne(T.x, d.x),
                        y: ne(T.y, d.y),
                        z: ne(T.z, d.z),
                        xPercent: ne(T.xPercent, d.xPercent),
                        yPercent: ne(T.yPercent, d.yPercent),
                        perspective: ne(T.transformPerspective, d.perspective)
                    },
                    m = T.directionalRotation,
                    null != m)
                        if ("object" == typeof m)
                            for (u in m)
                                T[u] = m[u];
                        else
                            T.rotation = m;
                    "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0,
                    l.xPercent = ne(T.x, d.xPercent)),
                    "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0,
                    l.yPercent = ne(T.y, d.yPercent)),
                    l.rotation = ae("rotation"in T ? T.rotation : "shortRotation"in T ? T.shortRotation + "_short" : "rotationZ"in T ? T.rotationZ : d.rotation, d.rotation, "rotation", x),
                    Se && (l.rotationX = ae("rotationX"in T ? T.rotationX : "shortRotationX"in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", x),
                    l.rotationY = ae("rotationY"in T ? T.rotationY : "shortRotationY"in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", x)),
                    l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX),
                    l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY),
                    (_ = l.skewY - d.skewY) && (l.skewX += _,
                    l.rotation += _)
                }
                for (Se && null != T.force3D && (d.force3D = T.force3D,
                f = !0),
                d.skewType = T.skewType || d.skewType || a.defaultSkewType,
                c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective,
                c || null == T.scale || (l.scaleZ = 1); --y > -1; )
                    i = xe[y],
                    p = l[i] - d[i],
                    (p > v || -v > p || null != T[i] || null != I[i]) && (f = !0,
                    n = new fe(d,i,d[i],p,n),
                    i in x && (n.e = x[i]),
                    n.xs0 = 0,
                    n.plugin = o,
                    s._overwriteProps.push(n.n));
                return p = T.transformOrigin,
                d.svg && (p || T.svgOrigin) && (De(t, se(p), l, T.svgOrigin),
                n = new fe(d,"xOrigin",d.xOrigin,l.xOrigin - d.xOrigin,n,-1,"transformOrigin"),
                n.b = d.xOrigin,
                n.e = n.xs0 = l.xOrigin,
                n = new fe(d,"yOrigin",d.yOrigin,l.yOrigin - d.yOrigin,n,-1,"transformOrigin"),
                n.b = d.yOrigin,
                n.e = n.xs0 = l.yOrigin,
                p = Te ? null : "0px 0px"),
                (p || Se && c && d.zOrigin) && (we ? (f = !0,
                i = Pe,
                p = (p || $(t, i, r, !1, "50% 50%")) + "",
                n = new fe(g,i,0,0,n,-1,"transformOrigin"),
                n.b = g[i],
                n.plugin = o,
                Se ? (u = d.zOrigin,
                p = p.split(" "),
                d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0,
                n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px",
                n = new fe(d,"zOrigin",0,0,n,-1,n.n),
                n.b = u,
                n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)),
                f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3),
                n
            },
            prefix: !0
        }),
        ve("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        ve("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, h, l, _, u, p, c, f, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth),
                d = parseFloat(t.offsetHeight),
                o = e.split(" "),
                h = 0; h < b.length; h++)
                    this.p.indexOf("border") && (b[h] = Z(b[h])),
                    u = _ = $(t, b[h], r, !1, "0px"),
                    -1 !== u.indexOf(" ") && (_ = u.split(" "),
                    u = _[0],
                    _ = _[1]),
                    p = l = o[h],
                    c = parseFloat(u),
                    v = u.substr((c + "").length),
                    y = "=" === p.charAt(1),
                    y ? (f = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    f *= parseFloat(p),
                    g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p),
                    g = p.substr((f + "").length)),
                    "" === g && (g = s[i] || v),
                    g !== v && (T = Q(t, "borderLeft", c, v),
                    x = Q(t, "borderTop", c, v),
                    "%" === g ? (u = T / m * 100 + "%",
                    _ = x / d * 100 + "%") : "em" === g ? (w = Q(t, "borderLeft", 1, "em"),
                    u = T / w + "em",
                    _ = x / w + "em") : (u = T + "px",
                    _ = x + "px"),
                    y && (p = parseFloat(u) + f + g,
                    l = parseFloat(_) + f + g)),
                    a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: ue("0px 0px 0px 0px", !1, !0)
        }),
        ve("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, h, l, _, u, p, c = "background-position", f = r || G(t, null), d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = $(t, "backgroundImage").replace(O, ""),
                p && "none" !== p)) {
                    for (o = d.split(" "),
                    h = g.split(" "),
                    E.setAttribute("src", p),
                    l = 2; --l > -1; )
                        d = o[l],
                        _ = -1 !== d.indexOf("%"),
                        _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - E.width : t.offsetHeight - E.height,
                        o[l] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            },
            formatter: se
        }),
        ve("backgroundSize", {
            defaultValue: "0 0",
            formatter: se
        }),
        ve("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        ve("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        ve("transformStyle", {
            prefix: !0
        }),
        ve("backfaceVisibility", {
            prefix: !0
        }),
        ve("userSelect", {
            prefix: !0
        }),
        ve("margin", {
            parser: pe("marginTop,marginRight,marginBottom,marginLeft")
        }),
        ve("padding", {
            parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        ve("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, h, l;
                return 9 > m ? (h = t.currentStyle,
                l = 8 > m ? " " : ",",
                o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")",
                e = this.format(e).split(",").join(l)) : (o = this.format($(t, this.p, r, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        ve("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        ve("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }),
        ve("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format($(t, "borderTopWidth", r, !1, "0px") + " " + $(t, "borderTopStyle", r, !1, "solid") + " " + $(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0]
            }
        }),
        ve("borderWidth", {
            parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        ve("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style
                  , a = "cssFloat"in n ? "cssFloat" : "styleFloat";
                return new fe(n,a,0,0,r,-1,i,!1,0,n[a],e)
            }
        });
        var Ie = function(t) {
            var e, i = this.t, s = i.filter || $(this.data, "filter") || "", r = this.s + this.c * t | 0;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !$(this.data, "filter")) : (i.filter = s.replace(b, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
            -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
        };
        ve("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat($(t, "opacity", r, !1, "1"))
                  , h = t.style
                  , l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                l && 1 === o && "hidden" === $(t, "visibility", r) && 0 !== e && (o = 0),
                U ? n = new fe(h,"opacity",o,e - o,n) : (n = new fe(h,"opacity",100 * o,100 * (e - o),n),
                n.xn1 = l ? 1 : 0,
                h.zoom = 1,
                n.type = 2,
                n.b = "alpha(opacity=" + n.s + ")",
                n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                n.data = t,
                n.plugin = a,
                n.setRatio = Ie),
                l && (n = new fe(h,"visibility",0,0,n,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                n.xs0 = "inherit",
                s._overwriteProps.push(n.n),
                s._overwriteProps.push(i)),
                n
            }
        });
        var Ne = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Xe = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Ne(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        ve("className", {
            parser: function(t, e, s, n, a, o, h) {
                var l, _, u, p, c, f = t.getAttribute("class") || "", m = t.style.cssText;
                if (a = n._classNamePT = new fe(t,s,0,0,a,2),
                a.setRatio = Xe,
                a.pr = -11,
                i = !0,
                a.b = f,
                _ = K(t, r),
                u = t._gsClassPT) {
                    for (p = {},
                    c = u.data; c; )
                        p[c.p] = 1,
                        c = c._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", a.e),
                l = J(t, _, K(t), h, p),
                t.setAttribute("class", f),
                a.data = l.firstMPT,
                t.style.cssText = m,
                a = a.xfirst = n.parse(t, l.difs, a, o)
            }
        });
        var Le = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n, a = this.t.style, o = h.transform.parse;
                if ("all" === this.e)
                    a.cssText = "",
                    r = !0;
                else
                    for (e = this.e.split(" ").join("").split(","),
                    s = e.length; --s > -1; )
                        i = e[s],
                        h[i] && (h[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p),
                        Ne(a, i);
                r && (Ne(a, we),
                n = this.t._gsTransform,
                n && (n.svg && this.t.removeAttribute("data-svg-origin"),
                delete this.t._gsTransform))
            }
        };
        for (ve("clearProps", {
            parser: function(t, e, s, r, n) {
                return n = new fe(t,s,0,0,n,2),
                n.setRatio = Le,
                n.e = e,
                n.pr = -10,
                n.data = r._tween,
                i = !0,
                n
            }
        }),
        l = "bezier,throwProps,physicsProps,physics2D".split(","),
        de = l.length; de--; )
            ye(l[de]);
        l = a.prototype,
        l._firstPT = l._lastParsedTransform = l._transform = null,
        l._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            _ = e.autoRound,
            i = !1,
            s = e.suffixMap || a.suffixMap,
            r = G(t, ""),
            n = this._overwriteProps;
            var l, c, m, d, g, v, y, T, x, b = t.style;
            if (u && "" === b.zIndex && (l = $(t, "zIndex", r),
            ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)),
            "string" == typeof e && (d = b.cssText,
            l = K(t, r),
            b.cssText = d + ";" + e,
            l = J(t, l, K(t)).difs,
            !U && w.test(e) && (l.opacity = parseFloat(RegExp.$1)),
            e = l,
            b.cssText = d),
            this._firstPT = c = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null),
            this._transformType) {
                for (x = 3 === this._transformType,
                we ? p && (u = !0,
                "" === b.zIndex && (y = $(t, "zIndex", r),
                ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)),
                f && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1,
                m = c; m && m._next; )
                    m = m._next;
                T = new fe(t,"transform",0,0,null,2),
                this._linkCSSP(T, null, m),
                T.setRatio = we ? Fe : ze,
                T.data = this._transform || Me(t, r, !0),
                T.tween = o,
                T.pr = -1,
                n.pop()
            }
            if (i) {
                for (; c; ) {
                    for (v = c._next,
                    m = d; m && m.pr > c.pr; )
                        m = m._next;
                    (c._prev = m ? m._prev : g) ? c._prev._next = c : d = c,
                    (c._next = m) ? m._prev = c : g = c,
                    c = v
                }
                this._firstPT = d
            }
            return !0
        }
        ,
        l.parse = function(t, e, i, n) {
            var a, o, l, u, p, c, f, m, d, g, v = t.style;
            for (a in e)
                c = e[a],
                o = h[a],
                o ? i = o.parse(t, c, a, this, i, n, e) : (p = $(t, a, r) + "",
                d = "string" == typeof c,
                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c),
                c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"),
                i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p),
                f = l || 0 === l ? p.substr((l + "").length) : "",
                ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r),
                f = "px") : "left" === a || "top" === a ? (l = H(t, a, r),
                f = "px") : (l = "opacity" !== a ? 0 : 1,
                f = "")),
                g = d && "=" === c.charAt(1),
                g ? (u = parseInt(c.charAt(0) + "1", 10),
                c = c.substr(2),
                u *= parseFloat(c),
                m = c.replace(T, "")) : (u = parseFloat(c),
                m = d ? c.replace(T, "") : ""),
                "" === m && (m = a in s ? s[a] : f),
                c = u || 0 === u ? (g ? u + l : u) + m : e[a],
                f !== m && "" !== m && (u || 0 === u) && l && (l = Q(t, a, l, f),
                "%" === m ? (l /= Q(t, a, 100, "%") / 100,
                e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= Q(t, a, 1, "em") : "px" !== m && (u = Q(t, a, u, m),
                m = "px"),
                g && (u || 0 === u) && (c = u + l + m)),
                g && (u += l),
                !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || c + "" != "NaN" && null != c) ? (i = new fe(v,a,u || l || 0,0,i,-1,a,!1,0,p,c),
                i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : V("invalid " + a + " tween value: " + e[a]) : (i = new fe(v,a,l,u - l,i,0,a,_ !== !1 && ("px" === m || "zIndex" === a),0,p,c),
                i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)),
                n && i && !i.plugin && (i.plugin = n);
            return i
        }
        ,
        l.setRatio = function(t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = Math.round(e) : n > e && e > -n && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (s = r.l,
                                2 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1,
                                    s = 1; s < r.l; s++)
                                        i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t),
                    r = r._next
        }
        ,
        l._enableTransforms = function(t) {
            this._transform = this._transform || Me(this._target, r, !0),
            this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Ee = function() {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function(t, e, i) {
            var s = this._firstPT = new fe(t,e,0,0,this._firstPT,2);
            s.e = i,
            s.setRatio = Ee,
            s.data = this
        }
        ,
        l._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            s = !0),
            i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        l._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e)
                    n[s] = e[s];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst,
            r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, r._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, n)
        }
        ;
        var Ye = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > -1; )
                    Ye(t[r], e, i);
            else
                for (s = t.childNodes,
                r = s.length; --r > -1; )
                    n = s[r],
                    a = n.type,
                    n.style && (e.push(K(n)),
                    i && i.push(n)),
                    1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o, h = e.to(t, i, s), l = [h], _ = [], u = [], p = [], c = e._internals.reservedProps;
            for (t = h._targets || h.target,
            Ye(t, _, p),
            h.render(i, !0, !0),
            Ye(t, u),
            h.render(0, !0, !0),
            h._enabled(!0),
            r = p.length; --r > -1; )
                if (n = J(p[r], _[r], u[r]),
                n.firstMPT) {
                    n = n.difs;
                    for (a in s)
                        c[a] && (n[a] = s[a]);
                    o = {};
                    for (a in n)
                        o[a] = _[r][a];
                    l.push(e.fromTo(p[r], i, o, n))
                }
            return l
        }
        ,
        t.activate([a]),
        a
    }, !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        })
          , e = t.prototype;
        e._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1; )
                a[r[n]] = 1;
            for (n = r.length; --n > -1; )
                for (t = r[n],
                e = s._firstPT; e; )
                    i = e._next,
                    e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c),
                    i && (i._prev = e._prev),
                    e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i),
                    e._next = e._prev = null,
                    s._propLookup[t] = o),
                    e = i;
            return !1
        }
        ,
        e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function(t, e) {
            var i, s, r;
            if ("function" != typeof t.setAttribute)
                return !1;
            this._target = t,
            this._proxy = {},
            this._start = {},
            this._end = {};
            for (i in e)
                this._start[i] = this._proxy[i] = s = t.getAttribute(i),
                r = this._addTween(this._proxy, i, parseFloat(s), e[i], i),
                this._end[i] = r ? r.s + r.c : e[i],
                this._overwriteProps.push(i);
            return !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1; )
                e = i[s],
                this._target.setAttribute(e, r[e] + "")
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for (i in e)
                "useRadians" !== i && (o = (e[i] + "").split("_"),
                s = o[0],
                r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()),
                n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0,
                a = n - r,
                o.length && (s = o.join("_"),
                -1 !== s.indexOf("short") && (a %= h,
                a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)),
                -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (a / h | 0) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (a / h | 0) * h)),
                (a > l || -l > a) && (this._addTween(t, i, r, r + a, i),
                this._overwriteProps.push(i)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {}, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        }, _ = t.register || function() {}
        , u = function(t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            }, !0);
            return _(r, t),
            r
        }, p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, c = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t) {
                return new s(t)
            }
            ,
            s
        }, f = u("Back", c("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), c("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), c("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m,
        d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        d.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        e = h("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0),
        d = e.prototype = new t,
        d.constructor = e,
        d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        d.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1; )
                i = f ? Math.random() : 1 / u * c,
                s = d ? d.getRatio(i) : i,
                "none" === h ? r = g : "out" === h ? (n = 1 - i,
                r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i,
                r = n * n * .5 * g) : (n = 2 * (1 - i),
                r = n * n * .5 * g),
                f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r,
                m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                l[_++] = {
                    x: i,
                    y: s
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new p(1,1,null),
            c = u; --c > -1; )
                a = l[c],
                o = new p(a.x,a.y,o);
            this._prev = new p(0,0,0 !== o.t ? o : o.next)
        }, !0),
        d = i.prototype = new t,
        d.constructor = i,
        d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        d.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || s) / (1 > t ? t : 1),
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                this._p2 = a / this._p2
            }, !0)
              , n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t, e) {
                return new r(t,e)
            }
            ,
            r
        }
        ,
        u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)),
        u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        f
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, r, n, a, o, h = function(t) {
            var e, s = t.split("."), r = i;
            for (e = 0; e < s.length; e++)
                r[s[e]] = r = r[s[e]] || {};
            return r
        }, l = h("com.greensock"), _ = 1e-10, u = function(t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]))
                ;
            return i
        }, p = function() {}, c = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), f = {}, m = function(s, r, n, a) {
            this.sc = f[s] ? f[s].sc : [],
            f[s] = this,
            this.gsClass = null,
            this.func = n;
            var o = [];
            this.check = function(l) {
                for (var _, u, p, c, d = r.length, g = d; --d > -1; )
                    (_ = f[r[d]] || new m(r[d],[])).gsClass ? (o[d] = _.gsClass,
                    g--) : l && _.sc.push(this);
                if (0 === g && n)
                    for (u = ("com.greensock." + s).split("."),
                    p = u.pop(),
                    c = h(u.join("."))[p] = this.gsClass = n.apply(n, o),
                    a && (i[p] = c,
                    "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                        return c
                    }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)),
                    d = 0; d < this.sc.length; d++)
                        this.sc[d].check()
            }
            ,
            this.check(!0)
        }, d = t._gsDefine = function(t, e, i, s) {
            return new m(t,e,i,s)
        }
        , g = l._class = function(t, e, i) {
            return e = e || function() {}
            ,
            d(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        d.globals = i;
        var v = [0, 0, 1, 1]
          , y = []
          , T = g("easing.Ease", function(t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? v.concat(e) : v
        }, !0)
          , x = T.map = {}
          , w = T.register = function(t, e, i, s) {
            for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1; )
                for (n = h[_],
                r = s ? g("easing." + n, null, !0) : l.easing[n] || {},
                a = u.length; --a > -1; )
                    o = u[a],
                    x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        }
        ;
        for (n = T.prototype,
        n._calcEnd = !1,
        n.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }
        ,
        s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        r = s.length; --r > -1; )
            n = s[r] + ",Power" + r,
            w(new T(null,null,1,r), n, "easeOut", !0),
            w(new T(null,null,2,r), n, "easeIn" + (0 === r ? ",easeNone" : "")),
            w(new T(null,null,3,r), n, "easeInOut");
        x.linear = l.easing.Linear.easeIn,
        x.swing = l.easing.Quad.easeInOut;
        var b = g("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        n = b.prototype,
        n.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var n, h, l = this._listeners[t], _ = 0;
            for (null == l && (this._listeners[t] = l = []),
            h = l.length; --h > -1; )
                n = l[h],
                n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && n.pr < r && (_ = h + 1);
            l.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }),
            this !== a || o || a.wake()
        }
        ,
        n.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1; )
                    if (s[i].c === e)
                        return s.splice(i, 1),
                        void 0
        }
        ,
        n.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length,
                i = this._eventTarget; --e > -1; )
                    s = r[e],
                    s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
        }
        ;
        var P = t.requestAnimationFrame
          , S = t.cancelAnimationFrame
          , R = Date.now || function() {
            return (new Date).getTime()
        }
          , O = R();
        for (s = ["ms", "moz", "webkit", "o"],
        r = s.length; --r > -1 && !P; )
            P = t[s[r] + "RequestAnimationFrame"],
            S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
        g("Ticker", function(t, e) {
            var i, s, r, n, h, l = this, u = R(), c = e !== !1 && P, f = 500, m = 33, d = "tick", g = function(t) {
                var e, a, o = R() - O;
                o > f && (u += o - m),
                O += o,
                l.time = (O - u) / 1e3,
                e = l.time - h,
                (!i || e > 0 || t === !0) && (l.frame++,
                h += e + (e >= n ? .004 : n - e),
                a = !0),
                t !== !0 && (r = s(g)),
                a && l.dispatchEvent(d)
            };
            b.call(l),
            l.time = l.frame = 0,
            l.tick = function() {
                g(!0)
            }
            ,
            l.lagSmoothing = function(t, e) {
                f = t || 1 / _,
                m = Math.min(e, f, 0)
            }
            ,
            l.sleep = function() {
                null != r && (c && S ? S(r) : clearTimeout(r),
                s = p,
                r = null,
                l === a && (o = !1))
            }
            ,
            l.wake = function() {
                null !== r ? l.sleep() : l.frame > 10 && (O = R() - f + 5),
                s = 0 === i ? p : c && P ? P : function(t) {
                    return setTimeout(t, 1e3 * (h - l.time) + 1 | 0)
                }
                ,
                l === a && (o = !0),
                g(2)
            }
            ,
            l.fps = function(t) {
                return arguments.length ? (i = t,
                n = 1 / (i || 60),
                h = this.time + n,
                l.wake(),
                void 0) : i
            }
            ,
            l.useRAF = function(t) {
                return arguments.length ? (l.sleep(),
                c = t,
                l.fps(i),
                void 0) : c
            }
            ,
            l.fps(t),
            setTimeout(function() {
                c && l.frame < 5 && l.useRAF(!1)
            }, 1500)
        }),
        n = l.Ticker.prototype = new l.events.EventDispatcher,
        n.constructor = l.Ticker;
        var k = g("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = e.immediateRender === !0,
            this.data = e.data,
            this._reversed = e.reversed === !0,
            j) {
                o || a.wake();
                var i = this.vars.useFrames ? U : j;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        a = k.ticker = new l.Ticker,
        n = k.prototype,
        n._dirty = n._gc = n._initted = n._paused = !1,
        n._totalTime = n._time = 0,
        n._rawPrevTime = -1,
        n._next = n._last = n._onUpdate = n._timeline = n.timeline = null,
        n._paused = !1;
        var A = function() {
            o && R() - O > 2e3 && a.wake(),
            setTimeout(A, 2e3)
        };
        A(),
        n.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        n.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        n.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        n.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }
        ,
        n.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }
        ,
        n.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        n.render = function() {}
        ,
        n.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        n.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }
        ,
        n._enabled = function(t, e) {
            return o || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        n._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        n.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        n._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        n._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        n.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e,
                r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                r[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        n.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        n.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        n.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        n.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        n.totalTime = function(t, e, i) {
            if (o || a.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration
                      , r = this._timeline;
                    if (t > s && !i && (t = s),
                    this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale,
                    r._dirty || this._uncache(!1),
                    r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                            r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1),
                F.length && q())
            }
            return this
        }
        ,
        n.progress = n.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }
        ,
        n.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        n.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        n.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || _,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        n.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        n.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (o || t || a.wake(),
            e = s.rawTime(),
            i = e - this._pauseTime,
            !t && s.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = t ? e : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)),
            this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var C = g("core.SimpleTimeline", function(t) {
            k.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        n = C.prototype = new k,
        n.constructor = C,
        n.kill()._gc = !1,
        n._first = n._last = n._recent = null,
        n._sortChildren = !1,
        n.add = n.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            i = this._last,
            this._sortChildren)
                for (s = t._startTime; i && i._startTime > s; )
                    i = i._prev;
            return i ? (t._next = i._next,
            i._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        n._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        n.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                s = r._next,
                (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                r = s
        }
        ,
        n.rawTime = function() {
            return o || a.wake(),
            this._totalTime
        }
        ;
        var D = g("TweenLite", function(e, i, s) {
            if (k.call(this, i, s),
            this.render = D.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), h = this.vars.overwrite;
            if (this._overwrite = h = null == h ? B[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : B[h],
            (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                for (this._targets = a = u(e),
                this._propLookup = [],
                this._siblings = [],
                r = 0; r < a.length; r++)
                    n = a[r],
                    n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1),
                    this._targets = a = a.concat(u(n))) : (this._siblings[r] = W(n, this, !1),
                    1 === h && this._siblings[r].length > 1 && G(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n),
                    "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            else
                this._propLookup = {},
                this._siblings = W(e, this, !1),
                1 === h && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_,
            this.render(-this._delay))
        }, !0)
          , M = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }
          , z = function(t, e) {
            var i, s = {};
            for (i in t)
                Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (s[i] = t[i],
                delete t[i]);
            t.css = s
        };
        n = D.prototype = new k,
        n.constructor = D,
        n.kill()._gc = !1,
        n.ratio = 0,
        n._firstPT = n._targets = n._overwrittenProps = n._startAt = null,
        n._notifyPluginsOfEnabled = n._lazy = !1,
        D.version = "1.16.1",
        D.defaultEase = n._ease = new T(null,null,1,1),
        D.defaultOverwrite = "auto",
        D.ticker = a,
        D.autoSleep = 120,
        D.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }
        ,
        D.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (D.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var F = []
          , I = {}
          , N = D._internals = {
            isArray: c,
            isSelector: M,
            lazyTweens: F
        }
          , X = D._plugins = {}
          , L = N.tweenLookup = {}
          , E = 0
          , Y = N.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1
        }
          , B = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , U = k._rootFramesTimeline = new C
          , j = k._rootTimeline = new C
          , V = 30
          , q = N.lazyRender = function() {
            var t, e = F.length;
            for (I = {}; --e > -1; )
                t = F[e],
                t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            F.length = 0
        }
        ;
        j._startTime = a.time,
        U._startTime = a.frame,
        j._active = U._active = !0,
        setTimeout(q, 1),
        k._updateRoot = D.render = function() {
            var t, e, i;
            if (F.length && q(),
            j.render((a.time - j._startTime) * j._timeScale, !1, !1),
            U.render((a.frame - U._startTime) * U._timeScale, !1, !1),
            F.length && q(),
            a.frame >= V) {
                V = a.frame + (parseInt(D.autoSleep, 10) || 120);
                for (i in L) {
                    for (e = L[i].tweens,
                    t = e.length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete L[i]
                }
                if (i = j._first,
                (!i || i._paused) && D.autoSleep && !U._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || a.sleep()
                }
            }
        }
        ,
        a.addEventListener("tick", k._updateRoot);
        var W = function(t, e, i) {
            var s, r, n = t._gsTweenID;
            if (L[n || (t._gsTweenID = n = "t" + E++)] || (L[n] = {
                target: t,
                tweens: []
            }),
            e && (s = L[n].tweens,
            s[r = s.length] = e,
            i))
                for (; --r > -1; )
                    s[r] === e && s.splice(r, 1);
            return L[n].tweens
        }
          , Z = function(t, e, i, s) {
            var r, n, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, s)),
            a = D.onOverwrite,
            a && (n = a(t, e, i, s)),
            r !== !1 && n !== !1
        }
          , G = function(t, e, i, s, r) {
            var n, a, o, h;
            if (1 === s || s >= 4) {
                for (h = r.length,
                n = 0; h > n; n++)
                    if ((o = r[n]) !== e)
                        o._gc || Z(o, e) && o._enabled(!1, !1) && (a = !0);
                    else if (5 === s)
                        break;
                return a
            }
            var l, u = e._startTime + _, p = [], c = 0, f = 0 === e._duration;
            for (n = r.length; --n > -1; )
                (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || $(e, 0, f),
                0 === $(o, l, f) && (p[c++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && u - o._startTime <= 2e-10 || (p[c++] = o)));
            for (n = c; --n > -1; )
                if (o = p[n],
                2 === s && o._kill(i, t, e) && (a = !0),
                2 !== s || !o._firstPT && o._initted) {
                    if (2 !== s && !Z(o, e))
                        continue;
                    o._enabled(!1, !1) && (a = !0)
                }
            return a
        }
          , $ = function(t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline; ) {
                if (n += s._startTime,
                r *= s._timeScale,
                s._paused)
                    return -100;
                s = s._timeline
            }
            return n /= r,
            n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
        };
        n._init = function() {
            var t, e, i, s, r, n = this.vars, a = this._overwrittenProps, o = this._duration, h = !!n.immediateRender, l = n.ease;
            if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                r = {};
                for (s in n.startAt)
                    r[s] = n.startAt[s];
                if (r.overwrite = !1,
                r.immediateRender = !0,
                r.lazy = h && n.lazy !== !1,
                r.startAt = r.delay = null,
                this._startAt = D.to(this.target, 0, r),
                h)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== o)
                        return
            } else if (n.runBackwards && 0 !== o)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    0 !== this._time && (h = !1),
                    i = {};
                    for (s in n)
                        Y[s] && "autoCSS" !== s || (i[s] = n[s]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = h && n.lazy !== !1,
                    i.immediateRender = h,
                    this._startAt = D.to(this.target, 0, i),
                    h) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l,n.easeParams) : x[l] || D.defaultEase : D.defaultEase,
            n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && D._onPluginEvent("_onInitAllProps", this),
            a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            n.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = n.onUpdate,
            this._initted = !0
        }
        ,
        n._initProps = function(e, i, s, r) {
            var n, a, o, h, l, _;
            if (null == e)
                return !1;
            I[e._gsTweenID] && q(),
            this.vars.css || e.style && e !== t && e.nodeType && X.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n],
                Y[n])
                    _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (X[n] && (h = new X[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: h._priority
                    },
                    a = h._overwriteProps.length; --a > -1; )
                        i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0),
                    (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    },
                    l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                    l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && G(e, this, i, this._overwrite, s) ? (this._kill(i, e),
            this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0),
            o)
        }
        ,
        n.render = function(t, e, i) {
            var s, r, n, a, o = this._time, h = this._duration, l = this._rawPrevTime;
            if (t >= h)
                this._totalTime = this._time = h,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (s = !0,
                r = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0,
                l > _ && (r = "onReverseComplete")),
                this._rawPrevTime = a = !e || t || l === t ? t : _);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === h && l > 0) && (r = "onReverseComplete",
                s = this._reversed),
                0 > t && (this._active = !1,
                0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = a = !e || t || l === t ? t : _)),
                this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var u = t / h
                  , p = this._easeType
                  , c = this._easePower;
                (1 === p || 3 === p && u >= .5) && (u = 1 - u),
                3 === p && (u *= 2),
                1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u),
                this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
            } else
                this.ratio = this._ease.getRatio(t / h);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o,
                        this._rawPrevTime = l,
                        F.push(this),
                        this._lazy = [t, e],
                        void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))),
                n = this._firstPT; n; )
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                    n = n._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i),
                e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i),
                s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y),
                0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }
        ,
        n._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var s, r, n, a, o, h, l, _, u;
            if ((c(e) || M(e)) && "number" != typeof e[0])
                for (s = e.length; --s > -1; )
                    this._kill(t, e[s]) && (h = !0);
            else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1; )
                        if (e === this._targets[s]) {
                            o = this._propLookup[s] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    o = this._propLookup,
                    r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (l = t || o,
                    _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill),
                    i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in l)
                            o[n] && (u || (u = []),
                            u.push(n));
                        if (!Z(this, i, e, u))
                            return !1
                    }
                    for (n in l)
                        (a = o[n]) && (a.pg && a.t._kill(l) && (h = !0),
                        a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        a._next = a._prev = null),
                        delete o[n]),
                        _ && (r[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }
        ,
        n.invalidate = function() {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            k.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -_,
            this.render(-this._delay)),
            this
        }
        ,
        n._enabled = function(t, e) {
            if (o || a.wake(),
            t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1; )
                        this._siblings[i] = W(s[i], this, !0);
                else
                    this._siblings = W(this.target, this, !0)
            }
            return k.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        D.to = function(t, e, i) {
            return new D(t,e,i)
        }
        ,
        D.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new D(t,e,i)
        }
        ,
        D.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new D(t,e,s)
        }
        ,
        D.delayedCall = function(t, e, i, s, r) {
            return new D(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        D.set = function(t, e) {
            return new D(t,0,e)
        }
        ,
        D.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((c(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                s = []; --i > -1; )
                    s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1; )
                    for (n = s[i],
                    r = i; --r > -1; )
                        n === s[r] && s.splice(i, 1)
            } else
                for (s = W(t).concat(),
                i = s.length; --i > -1; )
                    (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }
        ,
        D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1; )
                s[r]._kill(i, t)
        }
        ;
        var Q = g("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = Q.prototype
        }, !0);
        if (n = Q.prototype,
        Q.version = "1.10.1",
        Q.API = 2,
        n._firstPT = null,
        n._addTween = function(t, e, i, s, r, n) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: n
            },
            o._next && (o._next._prev = o),
            o) : void 0
        }
        ,
        n.setRatio = function(t) {
            for (var e, i = this._firstPT, s = 1e-6; i; )
                e = i.c * t + i.s,
                i.r ? e = Math.round(e) : s > e && e > -s && (e = 0),
                i.f ? i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
        ,
        n._kill = function(t) {
            var e, i = this._overwriteProps, s = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; s; )
                null != t[s.n] && (s._next && (s._next._prev = s._prev),
                s._prev ? (s._prev._next = s._next,
                s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
                s = s._next;
            return !1
        }
        ,
        n._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        D._onPluginEvent = function(t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o; ) {
                    for (a = o._next,
                    s = r; s && s.pr > o.pr; )
                        s = s._next;
                    (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                    (o._next = s) ? s._prev = o : n = o,
                    o = a
                }
                o = e._firstPT = r
            }
            for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                o = o._next;
            return i
        }
        ,
        Q.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === Q.API && (X[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        d.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                Q.call(this, i, s),
                this._overwriteProps = r || []
            }, t.global === !0), o = a.prototype = new Q(i);
            o.constructor = a,
            a.API = t.API;
            for (e in n)
                "function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version,
            Q.activate([a]),
            a
        }
        ,
        s = t._gsQueue) {
            for (r = 0; r < s.length; r++)
                s[r]();
            for (n in f)
                f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement
      , s = window
      , i = function(i, e) {
        var o = "x" === e ? "Width" : "Height"
          , l = "scroll" + o
          , h = "client" + o
          , r = document.body;
        return i === s || i === t || i === r ? Math.max(t[l], r[l]) - (s["inner" + o] || t[h] || r[h]) : i[l] - i["offset" + o]
    }
      , e = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.7.5",
        init: function(t, e, o) {
            return this._wdw = t === s,
            this._target = t,
            this._tween = o,
            "object" != typeof e && (e = {
                y: e
            }),
            this.vars = e,
            this._autoKill = e.autoKill !== !1,
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != e.x ? (this._addTween(this, "x", this.x, "max" === e.x ? i(t, "x") : e.x, "scrollTo_x", !0),
            this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
            null != e.y ? (this._addTween(this, "y", this.y, "max" === e.y ? i(t, "y") : e.y, "scrollTo_y", !0),
            this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
            !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            var e = this._wdw || !this.skipX ? this.getX() : this.xPrev
              , o = this._wdw || !this.skipY ? this.getY() : this.yPrev
              , l = o - this.yPrev
              , h = e - this.xPrev;
            this._autoKill && (!this.skipX && (h > 7 || -7 > h) && e < i(this._target, "x") && (this.skipX = !0),
            !this.skipY && (l > 7 || -7 > l) && o < i(this._target, "y") && (this.skipY = !0),
            this.skipX && this.skipY && (this._tween.kill(),
            this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? s.scrollTo(this.skipX ? e : this.x, this.skipY ? o : this.y) : (this.skipY || (this._target.scrollTop = this.y),
            this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    })
      , o = e.prototype;
    e.max = i,
    o.getX = function() {
        return this._wdw ? null != s.pageXOffset ? s.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }
    ,
    o.getY = function() {
        return this._wdw ? null != s.pageYOffset ? s.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }
    ,
    o._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0),
        t.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, t)
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite"], function(e, t) {
        var o, n, r, i, l, a = {
            css: {}
        }, s = {
            css: {}
        }, c = {
            css: {}
        }, f = {
            css: {}
        }, d = _gsScope._gsDefine.globals, p = {}, u = document, h = u.documentElement || {}, g = [], m = function() {
            return !1
        }, v = 180 / Math.PI, x = 999999999999999, y = Date.now || function() {
            return (new Date).getTime()
        }
        , w = !(u.addEventListener || !u.all), b = u.createElement("div"), T = [], S = {}, L = 0, N = /^(?:a|input|textarea|button|select)$/i, D = 0, M = -1 !== navigator.userAgent.toLowerCase().indexOf("android"), C = 0, k = {}, _ = function(e) {
            if ("string" == typeof e && (e = t.selector(e)),
            !e || e.nodeType)
                return [e];
            var o, n = [], r = e.length;
            for (o = 0; o !== r; n.push(e[o++]))
                ;
            return n
        }, P = function() {
            for (var e = T.length; --e > -1; )
                T[e]()
        }, X = function(e) {
            T.push(e),
            1 === T.length && t.ticker.addEventListener("tick", P, this, !1, 1)
        }, Y = function(e) {
            for (var o = T.length; --o > -1; )
                T[o] === e && T.splice(o, 1);
            t.to(E, 0, {
                overwrite: "all",
                delay: 15,
                onComplete: E
            })
        }, E = function() {
            T.length || t.ticker.removeEventListener("tick", P)
        }, A = function(e, t) {
            var o;
            for (o in t)
                void 0 === e[o] && (e[o] = t[o]);
            return e
        }, O = function() {
            return null != window.pageYOffset ? window.pageYOffset : null != u.scrollTop ? u.scrollTop : h.scrollTop || u.body.scrollTop || 0
        }, R = function() {
            return null != window.pageXOffset ? window.pageXOffset : null != u.scrollLeft ? u.scrollLeft : h.scrollLeft || u.body.scrollLeft || 0
        }, B = function(e, t) {
            St(e, "scroll", t),
            H(e.parentNode) || B(e.parentNode, t)
        }, W = function(e, t) {
            Lt(e, "scroll", t),
            H(e.parentNode) || W(e.parentNode, t)
        }, H = function(e) {
            return !(e && e !== h && e !== u && e !== u.body && e !== window && e.nodeType && e.parentNode)
        }, I = function(e, t) {
            var o = "x" === t ? "Width" : "Height"
              , n = "scroll" + o
              , r = "client" + o
              , i = u.body;
            return Math.max(0, H(e) ? Math.max(h[n], i[n]) - (window["inner" + o] || h[r] || i[r]) : e[n] - e[r])
        }, V = function(e) {
            var t = H(e)
              , o = I(e, "x")
              , n = I(e, "y");
            t ? e = k : V(e.parentNode),
            e._gsMaxScrollX = o,
            e._gsMaxScrollY = n,
            e._gsScrollX = e.scrollLeft || 0,
            e._gsScrollY = e.scrollTop || 0
        }, U = function(e, t) {
            return e = e || window.event,
            p.pageX = e.clientX + u.body.scrollLeft + h.scrollLeft,
            p.pageY = e.clientY + u.body.scrollTop + h.scrollTop,
            t && (e.returnValue = !1),
            p
        }, F = function(e) {
            return e ? ("string" == typeof e && (e = t.selector(e)),
            e.length && e !== window && e[0] && e[0].style && !e.nodeType && (e = e[0]),
            e === window || e.nodeType && e.style ? e : null) : e
        }, G = function(e, t) {
            var n, r, i, l = e.style;
            if (void 0 === l[t]) {
                for (i = ["O", "Moz", "ms", "Ms", "Webkit"],
                r = 5,
                n = t.charAt(0).toUpperCase() + t.substr(1); --r > -1 && void 0 === l[i[r] + n]; )
                    ;
                if (0 > r)
                    return "";
                o = 3 === r ? "ms" : i[r],
                t = o + n
            }
            return t
        }, z = function(e, t, o) {
            var n = e.style;
            n && (void 0 === n[t] && (t = G(e, t)),
            null == o ? n.removeProperty ? n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(t) : void 0 !== n[t] && (n[t] = o))
        }, K = u.defaultView ? u.defaultView.getComputedStyle : m, $ = /(?:Left|Right|Width)/i, j = /(?:\d|\-|\+|=|#|\.)*/g, Z = function(e, t, o, n, r) {
            if ("px" === n || !n)
                return o;
            if ("auto" === n || !o)
                return 0;
            var i, l = $.test(t), a = e, s = tt.style, c = 0 > o;
            return c && (o = -o),
            "%" === n && -1 !== t.indexOf("border") ? i = o / 100 * (l ? e.clientWidth : e.clientHeight) : (s.cssText = "border:0 solid red;position:" + Q(e, "position", !0) + ";line-height:0;",
            "%" !== n && a.appendChild ? s[l ? "borderLeftWidth" : "borderTopWidth"] = o + n : (a = e.parentNode || u.body,
            s[l ? "width" : "height"] = o + n),
            a.appendChild(tt),
            i = parseFloat(tt[l ? "offsetWidth" : "offsetHeight"]),
            a.removeChild(tt),
            0 !== i || r || (i = Z(e, t, o, n, !0))),
            c ? -i : i
        }, q = function(e, t) {
            if ("absolute" !== Q(e, "position", !0))
                return 0;
            var o = "left" === t ? "Left" : "Top"
              , n = Q(e, "margin" + o, !0);
            return e["offset" + o] - (Z(e, t, parseFloat(n), (n + "").replace(j, "")) || 0)
        }, Q = function(e, t, o) {
            var n, r = (e._gsTransform || {})[t];
            return r || 0 === r ? r : (e.style[t] ? r = e.style[t] : (n = K(e)) ? (r = n.getPropertyValue(t.replace(/([A-Z])/g, "-$1").toLowerCase()),
            r = r || n.length ? r : n[t]) : e.currentStyle && (r = e.currentStyle[t]),
            "auto" !== r || "top" !== t && "left" !== t || (r = q(e, t)),
            o ? r : parseFloat(r) || 0)
        }, J = function(e, t, o) {
            var n = e.vars
              , r = n[o]
              , i = e._listeners[t];
            "function" == typeof r && r.apply(n[o + "Scope"] || e, n[o + "Params"] || [e.pointerEvent]),
            i && e.dispatchEvent(t)
        }, et = function(e, t) {
            var o, n, r, i = F(e);
            return i ? xt(i, t) : void 0 !== e.left ? (r = ut(t),
            {
                left: e.left - r.x,
                top: e.top - r.y,
                width: e.width,
                height: e.height
            }) : (n = e.min || e.minX || e.minRotation || 0,
            o = e.min || e.minY || 0,
            {
                left: n,
                top: o,
                width: (e.max || e.maxX || e.maxRotation || 0) - n,
                height: (e.max || e.maxY || 0) - o
            })
        }, tt = u.createElement("div"), ot = "" !== G(tt, "perspective"), nt = G(tt, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), rt = G(tt, "transform"), it = rt.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), lt = {}, at = {}, st = function() {
            if (!w) {
                var e = "http://www.w3.org/2000/svg"
                  , t = u.createElementNS(e, "svg")
                  , o = u.createElementNS(e, "rect");
                return o.setAttributeNS(null, "width", "10"),
                o.setAttributeNS(null, "height", "10"),
                t.appendChild(o),
                t
            }
        }(), ct = window.SVGElement, ft = function(e) {
            return !!(ct && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
        }, dt = ["class", "viewBox", "width", "height", "xml:space"], pt = function(e) {
            if (!e.getBoundingClientRect || !e.parentNode)
                return {
                    offsetTop: 0,
                    offsetLeft: 0,
                    scaleX: 1,
                    scaleY: 1,
                    offsetParent: h
                };
            if (e._gsSVGData && e._gsSVGData.lastUpdate === t.ticker.frame)
                return e._gsSVGData;
            var o, n, r, i, l, a, s = e, c = e.style.cssText, f = e._gsSVGData = e._gsSVGData || {};
            if ("svg" !== (e.nodeName + "").toLowerCase() && e.getBBox) {
                for (s = e.parentNode,
                o = e.getBBox(); s && "svg" !== (s.nodeName + "").toLowerCase(); )
                    s = s.parentNode;
                return f = pt(s),
                {
                    offsetTop: o.y * f.scaleY,
                    offsetLeft: o.x * f.scaleX,
                    scaleX: f.scaleX,
                    scaleY: f.scaleY,
                    offsetParent: s || h
                }
            }
            for (; !s.offsetParent && s.parentNode; )
                s = s.parentNode;
            for (e.parentNode.insertBefore(st, e),
            e.parentNode.removeChild(e),
            st.style.cssText = c,
            st.style[rt] = "none",
            l = dt.length; --l > -1; )
                a = e.getAttribute(dt[l]),
                a ? st.setAttribute(dt[l], a) : st.removeAttribute(dt[l]);
            return o = st.getBoundingClientRect(),
            i = st.firstChild.getBoundingClientRect(),
            r = s.offsetParent,
            r ? (r === u.body && h && (r = h),
            n = r.getBoundingClientRect()) : n = {
                top: -O(),
                left: -R()
            },
            st.parentNode.insertBefore(e, st),
            e.parentNode.removeChild(st),
            f.scaleX = i.width / 10,
            f.scaleY = i.height / 10,
            f.offsetLeft = o.left - n.left,
            f.offsetTop = o.top - n.top,
            f.offsetParent = s.offsetParent || h,
            f.lastUpdate = t.ticker.frame,
            f
        }, ut = function(e, o) {
            if (o = o || {},
            !e || e === h || !e.parentNode)
                return {
                    x: 0,
                    y: 0
                };
            var n = K(e)
              , r = nt && n ? n.getPropertyValue(nt) : "50% 50%"
              , i = r.split(" ")
              , l = -1 !== r.indexOf("left") ? "0%" : -1 !== r.indexOf("right") ? "100%" : i[0]
              , a = -1 !== r.indexOf("top") ? "0%" : -1 !== r.indexOf("bottom") ? "100%" : i[1];
            return ("center" === a || null == a) && (a = "50%"),
            ("center" === l || isNaN(parseFloat(l))) && (l = "50%"),
            e.getBBox && ft(e) ? (e._gsTransform || (t.set(e, {
                x: "+=0",
                overwrite: !1
            }),
            void 0 === e._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.16.1")),
            r = e.getBBox(),
            i = pt(e),
            o.x = (e._gsTransform.xOrigin - r.x) * i.scaleX,
            o.y = (e._gsTransform.yOrigin - r.y) * i.scaleY) : (o.x = -1 !== l.indexOf("%") ? e.offsetWidth * parseFloat(l) / 100 : parseFloat(l),
            o.y = -1 !== a.indexOf("%") ? e.offsetHeight * parseFloat(a) / 100 : parseFloat(a)),
            o
        }, ht = function(e, t, o) {
            var n, r, l, a, s, c;
            return e !== window && e && e.parentNode ? (n = K(e),
            r = n ? n.getPropertyValue(it) : e.currentStyle ? e.currentStyle[rt] : "1,0,0,1,0,0",
            r = (r + "").match(/(?:\-|\b)[\d\-\.e]+\b/g) || [1, 0, 0, 1, 0, 0],
            r.length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]),
            t && (l = e.parentNode,
            c = e.getBBox && ft(e) || void 0 === e.offsetLeft && "svg" === (e.nodeName + "").toLowerCase() ? pt(e) : e,
            a = c.offsetParent,
            s = l === h || l === u.body,
            void 0 === i && u.body && rt && (i = function() {
                var e, t, o = u.createElement("div"), n = u.createElement("div");
                return n.style.position = "absolute",
                u.body.appendChild(o),
                o.appendChild(n),
                e = n.offsetParent,
                o.style[rt] = "rotate(1deg)",
                t = n.offsetParent === e,
                u.body.removeChild(o),
                t
            }()),
            r[4] = Number(r[4]) + t.x + (c.offsetLeft || 0) - o.x - (s ? 0 : l.scrollLeft) + (a ? parseInt(Q(a, "borderLeftWidth"), 10) || 0 : 0),
            r[5] = Number(r[5]) + t.y + (c.offsetTop || 0) - o.y - (s ? 0 : l.scrollTop) + (a ? parseInt(Q(a, "borderTopWidth"), 10) || 0 : 0),
            !l || l.offsetParent !== a || i && "100100" !== ht(l).join("") || (r[4] -= l.offsetLeft || 0,
            r[5] -= l.offsetTop || 0),
            l && "fixed" === Q(e, "position", !0) && (r[4] += R(),
            r[5] += O())),
            r) : [1, 0, 0, 1, 0, 0]
        }, gt = function(e, t) {
            if (!e || e === window || !e.parentNode)
                return [1, 0, 0, 1, 0, 0];
            for (var o, n, r, i, l, a, s, c, f = ut(e, lt), d = ut(e.parentNode, at), p = ht(e, f, d); (e = e.parentNode) && e.parentNode && e !== h; )
                f = d,
                d = ut(e.parentNode, f === lt ? at : lt),
                s = ht(e, f, d),
                o = p[0],
                n = p[1],
                r = p[2],
                i = p[3],
                l = p[4],
                a = p[5],
                p[0] = o * s[0] + n * s[2],
                p[1] = o * s[1] + n * s[3],
                p[2] = r * s[0] + i * s[2],
                p[3] = r * s[1] + i * s[3],
                p[4] = l * s[0] + a * s[2] + s[4],
                p[5] = l * s[1] + a * s[3] + s[5];
            return t && (o = p[0],
            n = p[1],
            r = p[2],
            i = p[3],
            l = p[4],
            a = p[5],
            c = o * i - n * r,
            p[0] = i / c,
            p[1] = -n / c,
            p[2] = -r / c,
            p[3] = o / c,
            p[4] = (r * a - i * l) / c,
            p[5] = -(o * a - n * l) / c),
            p
        }, mt = function(e, t, o) {
            var n = gt(e)
              , r = t.x
              , i = t.y;
            return o = o === !0 ? t : o || {},
            o.x = r * n[0] + i * n[2] + n[4],
            o.y = r * n[1] + i * n[3] + n[5],
            o
        }, vt = function(e, t, o) {
            var n = e.x * t[0] + e.y * t[2] + t[4]
              , r = e.x * t[1] + e.y * t[3] + t[5];
            return e.x = n * o[0] + r * o[2] + o[4],
            e.y = n * o[1] + r * o[3] + o[5],
            e
        }, xt = function(e, t) {
            var o, n, r, i, l, a, s, c, f, d, p;
            return e === window ? (i = O(),
            n = R(),
            r = n + (h.clientWidth || e.innerWidth || u.body.clientWidth || 0),
            l = i + ((e.innerHeight || 0) - 20 < h.clientHeight ? h.clientHeight : e.innerHeight || u.body.clientHeight || 0)) : (o = ut(e),
            n = -o.x,
            r = n + e.offsetWidth,
            i = -o.y,
            l = i + e.offsetHeight),
            e === t ? {
                left: n,
                top: i,
                width: r - n,
                height: l - i
            } : (a = gt(e),
            s = gt(t, !0),
            c = vt({
                x: n,
                y: i
            }, a, s),
            f = vt({
                x: r,
                y: i
            }, a, s),
            d = vt({
                x: r,
                y: l
            }, a, s),
            p = vt({
                x: n,
                y: l
            }, a, s),
            n = Math.min(c.x, f.x, d.x, p.x),
            i = Math.min(c.y, f.y, d.y, p.y),
            {
                left: n,
                top: i,
                width: Math.max(c.x, f.x, d.x, p.x) - n,
                height: Math.max(c.y, f.y, d.y, p.y) - i
            })
        }, yt = function(e) {
            return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? !0 : !1
        }, wt = function(e) {
            var t, o, n, r = [], i = e.length;
            for (t = 0; i > t; t++)
                if (o = e[t],
                yt(o))
                    for (n = o.length,
                    n = 0; n < o.length; n++)
                        r.push(o[n]);
                else
                    r.push(o);
            return r
        }, bt = "ontouchstart"in h && "orientation"in window, Tt = function(e) {
            for (var t = e.split(","), o = (void 0 !== tt.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== tt.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), n = {}, r = 8; --r > -1; )
                n[t[r]] = o[r],
                n[o[r]] = t[r];
            return n
        }("touchstart,touchmove,touchend,touchcancel"), St = function(e, t, o, n) {
            e.addEventListener ? e.addEventListener(Tt[t] || t, o, n) : e.attachEvent && e.attachEvent("on" + t, o)
        }, Lt = function(e, t, o) {
            e.removeEventListener ? e.removeEventListener(Tt[t] || t, o) : e.detachEvent && e.detachEvent("on" + t, o)
        }, Nt = function(e) {
            n = e.touches && D < e.touches.length,
            Lt(e.target, "touchend", Nt)
        }, Dt = function(e) {
            n = e.touches && D < e.touches.length,
            St(e.target, "touchend", Nt)
        }, Mt = function(e, t, o, n, r, i) {
            var l, a, s, c = {};
            if (t)
                if (1 !== r && t instanceof Array) {
                    for (c.end = l = [],
                    s = t.length,
                    a = 0; s > a; a++)
                        l[a] = t[a] * r;
                    o += 1.1,
                    n -= 1.1
                } else
                    c.end = "function" == typeof t ? function(o) {
                        return t.call(e, o) * r
                    }
                    : t;
            return (o || 0 === o) && (c.max = o),
            (n || 0 === n) && (c.min = n),
            i && (c.velocity = 0),
            c
        }, Ct = function(e) {
            var t;
            return e && e.getAttribute && "BODY" !== e.nodeName ? "true" === (t = e.getAttribute("data-clickable")) || "false" !== t && (e.onclick || N.test(e.nodeName + "") || "true" === e.getAttribute("contentEditable")) ? !0 : Ct(e.parentNode) : !1
        }, kt = function(e, t) {
            for (var o, n = e.length; --n > -1; )
                o = e[n],
                o.ondragstart = o.onselectstart = t ? null : m,
                z(o, "userSelect", t ? "text" : "none")
        }, _t = function() {
            var e, t = u.createElement("div"), o = u.createElement("div"), n = o.style, r = u.body || tt;
            return n.display = "inline-block",
            n.position = "relative",
            t.style.cssText = o.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",
            t.appendChild(o),
            r.appendChild(t),
            l = o.offsetHeight + 18 > t.scrollHeight,
            n.width = "100%",
            rt || (n.paddingRight = "500px",
            e = t.scrollLeft = t.scrollWidth - t.clientWidth,
            n.left = "-90px",
            e = e !== t.scrollLeft),
            r.removeChild(t),
            e
        }(), Pt = function(e, o) {
            e = F(e),
            o = o || {};
            var n, r, i, a, s, c, f = u.createElement("div"), d = f.style, p = e.firstChild, h = 0, g = 0, m = e.scrollTop, v = e.scrollLeft, x = e.scrollWidth, y = e.scrollHeight, b = 0, T = 0, S = 0;
            ot && o.force3D !== !1 ? (s = "translate3d(",
            c = "px,0px)") : rt && (s = "translate(",
            c = "px)"),
            this.scrollTop = function(e, t) {
                return arguments.length ? (this.top(-e, t),
                void 0) : -this.top()
            }
            ,
            this.scrollLeft = function(e, t) {
                return arguments.length ? (this.left(-e, t),
                void 0) : -this.left()
            }
            ,
            this.left = function(n, r) {
                if (!arguments.length)
                    return -(e.scrollLeft + g);
                var i = e.scrollLeft - v
                  , l = g;
                return (i > 2 || -2 > i) && !r ? (v = e.scrollLeft,
                t.killTweensOf(this, !0, {
                    left: 1,
                    scrollLeft: 1
                }),
                this.left(-v),
                o.onKill && o.onKill(),
                void 0) : (n = -n,
                0 > n ? (g = n - .5 | 0,
                n = 0) : n > T ? (g = n - T | 0,
                n = T) : g = 0,
                (g || l) && (s ? this._suspendTransforms || (d[rt] = s + -g + "px," + -h + c) : d.left = -g + "px",
                _t && g + b >= 0 && (d.paddingRight = g + b + "px")),
                e.scrollLeft = 0 | n,
                v = e.scrollLeft,
                void 0)
            }
            ,
            this.top = function(n, r) {
                if (!arguments.length)
                    return -(e.scrollTop + h);
                var i = e.scrollTop - m
                  , l = h;
                return (i > 2 || -2 > i) && !r ? (m = e.scrollTop,
                t.killTweensOf(this, !0, {
                    top: 1,
                    scrollTop: 1
                }),
                this.top(-m),
                o.onKill && o.onKill(),
                void 0) : (n = -n,
                0 > n ? (h = n - .5 | 0,
                n = 0) : n > S ? (h = n - S | 0,
                n = S) : h = 0,
                (h || l) && (s ? this._suspendTransforms || (d[rt] = s + -g + "px," + -h + c) : d.top = -h + "px"),
                e.scrollTop = 0 | n,
                m = e.scrollTop,
                void 0)
            }
            ,
            this.maxScrollTop = function() {
                return S
            }
            ,
            this.maxScrollLeft = function() {
                return T
            }
            ,
            this.disable = function() {
                for (p = f.firstChild; p; )
                    a = p.nextSibling,
                    e.appendChild(p),
                    p = a;
                e === f.parentNode && e.removeChild(f)
            }
            ,
            this.enable = function() {
                if (p = e.firstChild,
                p !== f) {
                    for (; p; )
                        a = p.nextSibling,
                        f.appendChild(p),
                        p = a;
                    e.appendChild(f),
                    this.calibrate()
                }
            }
            ,
            this.calibrate = function(t) {
                var o, a, s = e.clientWidth === n;
                m = e.scrollTop,
                v = e.scrollLeft,
                (!s || e.clientHeight !== r || f.offsetHeight !== i || x !== e.scrollWidth || y !== e.scrollHeight || t) && ((h || g) && (o = this.left(),
                a = this.top(),
                this.left(-e.scrollLeft),
                this.top(-e.scrollTop)),
                (!s || t) && (d.display = "block",
                d.width = "auto",
                d.paddingRight = "0px",
                b = Math.max(0, e.scrollWidth - e.clientWidth),
                b && (b += Q(e, "paddingLeft") + (l ? Q(e, "paddingRight") : 0))),
                d.display = "inline-block",
                d.position = "relative",
                d.overflow = "visible",
                d.verticalAlign = "top",
                d.width = "100%",
                d.paddingRight = b + "px",
                l && (d.paddingBottom = Q(e, "paddingBottom", !0)),
                w && (d.zoom = "1"),
                n = e.clientWidth,
                r = e.clientHeight,
                x = e.scrollWidth,
                y = e.scrollHeight,
                T = e.scrollWidth - n,
                S = e.scrollHeight - r,
                i = f.offsetHeight,
                d.display = "block",
                (o || a) && (this.left(o),
                this.top(a)))
            }
            ,
            this.content = f,
            this.element = e,
            this._suspendTransforms = !1,
            this.enable()
        }, Xt = function(o, i) {
            e.call(this, o),
            o = F(o),
            r || (r = d.com.greensock.plugins.ThrowPropsPlugin),
            this.vars = i = i || {},
            this.target = o,
            this.x = this.y = this.rotation = 0,
            this.dragResistance = parseFloat(i.dragResistance) || 0,
            this.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0,
            this.lockAxis = i.lockAxis,
            this.autoScroll = i.autoScroll || 0,
            this.lockedAxis = null,
            this.allowEventDefault = !!i.allowEventDefault;
            var l, p, m, T, N, P, E, O, R, I, G, K, $, j, Z, q, tt, ot, nt, rt, it, lt, at, st, ct, ft, dt, pt, ut, ht, vt, xt = (i.type || (w ? "top,left" : "x,y")).toLowerCase(), yt = -1 !== xt.indexOf("x") || -1 !== xt.indexOf("y"), wt = -1 !== xt.indexOf("rotation"), Nt = wt ? "rotation" : yt ? "x" : "left", _t = yt ? "y" : "top", Yt = -1 !== xt.indexOf("x") || -1 !== xt.indexOf("left") || "scroll" === xt, At = -1 !== xt.indexOf("y") || -1 !== xt.indexOf("top") || "scroll" === xt, Ot = i.minimumMovement || 2, Rt = this, Bt = _(i.trigger || i.handle || o), Wt = {}, Ht = 0, It = !1, Vt = i.clickableTest || Ct, Ut = function(e) {
                if (Rt.autoScroll && Rt.isDragging && (ot || It)) {
                    var t, n, r, i, l, a, s, c, f = o, d = 15 * Rt.autoScroll;
                    for (It = !1,
                    k.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != h.scrollTop ? h.scrollTop : u.body.scrollTop,
                    k.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != h.scrollLeft ? h.scrollLeft : u.body.scrollLeft,
                    i = Rt.pointerX - k.scrollLeft,
                    l = Rt.pointerY - k.scrollTop; f && !n; )
                        n = H(f.parentNode),
                        t = n ? k : f.parentNode,
                        r = n ? {
                            bottom: Math.max(h.clientHeight, window.innerHeight || 0),
                            right: Math.max(h.clientWidth, window.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : t.getBoundingClientRect(),
                        a = s = 0,
                        At && (l > r.bottom - 40 && (c = t._gsMaxScrollY - t.scrollTop) ? (It = !0,
                        s = Math.min(c, d * (1 - Math.max(0, r.bottom - l) / 40) | 0)) : l < r.top + 40 && t.scrollTop && (It = !0,
                        s = -Math.min(t.scrollTop, d * (1 - Math.max(0, l - r.top) / 40) | 0)),
                        s && (t.scrollTop += s)),
                        Yt && (i > r.right - 40 && (c = t._gsMaxScrollX - t.scrollLeft) ? (It = !0,
                        a = Math.min(c, d * (1 - Math.max(0, r.right - i) / 40) | 0)) : i < r.left + 40 && t.scrollLeft && (It = !0,
                        a = -Math.min(t.scrollLeft, d * (1 - Math.max(0, i - r.left) / 40) | 0)),
                        a && (t.scrollLeft += a)),
                        n && (a || s) && (window.scrollTo(t.scrollLeft, t.scrollTop),
                        Jt(Rt.pointerX + a, Rt.pointerY + s)),
                        f = t
                }
                if (ot) {
                    var g = Rt.x
                      , m = Rt.y
                      , v = 1e-6;
                    v > g && g > -v && (g = 0),
                    v > m && m > -v && (m = 0),
                    wt ? (ut.data.rotation = Rt.rotation = g,
                    ut.setRatio(1)) : p ? (At && p.top(m),
                    Yt && p.left(g)) : yt ? (At && (ut.data.y = m),
                    Yt && (ut.data.x = g),
                    ut.setRatio(1)) : (At && (o.style.top = m + "px"),
                    Yt && (o.style.left = g + "px")),
                    O && !e && J(Rt, "drag", "onDrag")
                }
                ot = !1
            }, Ft = function(e, n) {
                var r;
                o._gsTransform || !yt && !wt || t.set(o, {
                    x: "+=0",
                    overwrite: !1
                }),
                yt ? (Rt.y = o._gsTransform.y,
                Rt.x = o._gsTransform.x) : wt ? Rt.x = Rt.rotation = o._gsTransform.rotation : p ? (Rt.y = p.top(),
                Rt.x = p.left()) : (Rt.y = parseInt(o.style.top, 10) || 0,
                Rt.x = parseInt(o.style.left, 10) || 0),
                !rt && !it || n || (rt && (r = rt(Rt.x),
                r !== Rt.x && (Rt.x = r,
                wt && (Rt.rotation = r),
                ot = !0)),
                it && (r = it(Rt.y),
                r !== Rt.y && (Rt.y = r,
                ot = !0)),
                ot && Ut(!0)),
                i.onThrowUpdate && !e && i.onThrowUpdate.apply(i.onThrowUpdateScope || Rt, i.onThrowUpdateParams || g)
            }, Gt = function() {
                var e, t, n, r;
                E = !1,
                p ? (p.calibrate(),
                Rt.minX = I = -p.maxScrollLeft(),
                Rt.minY = K = -p.maxScrollTop(),
                Rt.maxX = R = Rt.maxY = G = 0,
                E = !0) : i.bounds && (e = et(i.bounds, o.parentNode),
                wt ? (Rt.minX = I = e.left,
                Rt.maxX = R = e.left + e.width,
                Rt.minY = K = Rt.maxY = G = 0) : void 0 !== i.bounds.maxX || void 0 !== i.bounds.maxY ? (e = i.bounds,
                Rt.minX = I = e.minX,
                Rt.minY = K = e.minY,
                Rt.maxX = R = e.maxX,
                Rt.maxY = G = e.maxY) : (t = et(o, o.parentNode),
                Rt.minX = I = Q(o, Nt) + e.left - t.left,
                Rt.minY = K = Q(o, _t) + e.top - t.top,
                Rt.maxX = R = I + (e.width - t.width),
                Rt.maxY = G = K + (e.height - t.height)),
                I > R && (Rt.minX = R,
                Rt.maxX = R = I,
                I = Rt.minX),
                K > G && (Rt.minY = G,
                Rt.maxY = G = K,
                K = Rt.minY),
                wt && (Rt.minRotation = I,
                Rt.maxRotation = R),
                E = !0),
                i.liveSnap && (n = i.liveSnap === !0 ? i.snap || {} : i.liveSnap,
                r = n instanceof Array || "function" == typeof n,
                wt ? (rt = Zt(r ? n : n.rotation, I, R, 1),
                it = null) : (Yt && (rt = Zt(r ? n : n.x || n.left || n.scrollLeft, I, R, p ? -1 : 1)),
                At && (it = Zt(r ? n : n.y || n.top || n.scrollTop, K, G, p ? -1 : 1))))
            }, zt = function(e, t) {
                var n, l, a;
                e && r ? (e === !0 && (n = i.snap || {},
                l = n instanceof Array || "function" == typeof n,
                e = {
                    resistance: (i.throwResistance || i.resistance || 1e3) / (wt ? 10 : 1)
                },
                wt ? e.rotation = Mt(Rt, l ? n : n.rotation, R, I, 1, t) : (Yt && (e[Nt] = Mt(Rt, l ? n : n.x || n.left || n.scrollLeft, R, I, p ? -1 : 1, t || "x" === Rt.lockedAxis)),
                At && (e[_t] = Mt(Rt, l ? n : n.y || n.top || n.scrollTop, G, K, p ? -1 : 1, t || "y" === Rt.lockedAxis)))),
                Rt.tween = a = r.to(p || o, {
                    throwProps: e,
                    ease: i.ease || d.Power3.easeOut,
                    onComplete: i.onThrowComplete,
                    onCompleteParams: i.onThrowCompleteParams,
                    onCompleteScope: i.onThrowCompleteScope || Rt,
                    onUpdate: i.fastMode ? i.onThrowUpdate : Ft,
                    onUpdateParams: i.fastMode ? i.onThrowUpdateParams : null,
                    onUpdateScope: i.onThrowUpdateScope || Rt
                }, isNaN(i.maxDuration) ? 2 : i.maxDuration, isNaN(i.minDuration) ? .5 : i.minDuration, isNaN(i.overshootTolerance) ? 1 - Rt.edgeResistance + .2 : i.overshootTolerance),
                i.fastMode || (p && (p._suspendTransforms = !0),
                a.render(a.duration(), !0, !0),
                Ft(!0, !0),
                Rt.endX = Rt.x,
                Rt.endY = Rt.y,
                wt && (Rt.endRotation = Rt.x),
                a.play(0),
                Ft(!0, !0),
                p && (p._suspendTransforms = !1))) : E && Rt.applyBounds()
            }, Kt = function() {
                st = gt(o.parentNode, !0),
                st[1] || st[2] || 1 != st[0] || 1 != st[3] || 0 != st[4] || 0 != st[5] || (st = null)
            }, $t = function() {
                var e = 1 - Rt.edgeResistance;
                Kt(),
                p ? (Gt(),
                P = p.top(),
                N = p.left()) : (jt() ? (Ft(!0, !0),
                Gt()) : Rt.applyBounds(),
                wt ? (tt = mt(o, {
                    x: 0,
                    y: 0
                }),
                Ft(!0, !0),
                N = Rt.x,
                P = Rt.y = Math.atan2(tt.y - T, m - tt.x) * v) : (dt = o.parentNode ? o.parentNode.scrollTop || 0 : 0,
                pt = o.parentNode ? o.parentNode.scrollLeft || 0 : 0,
                P = Q(o, _t),
                N = Q(o, Nt))),
                E && e && (N > R ? N = R + (N - R) / e : I > N && (N = I - (I - N) / e),
                wt || (P > G ? P = G + (P - G) / e : K > P && (P = K - (K - P) / e)))
            }, jt = function() {
                return Rt.tween && Rt.tween.isActive()
            }, Zt = function(e, t, o, n) {
                return "function" == typeof e ? function(r) {
                    var i = Rt.isPressed ? 1 - Rt.edgeResistance : 1;
                    return e.call(Rt, r > o ? o + (r - o) * i : t > r ? t + (r - t) * i : r) * n
                }
                : e instanceof Array ? function(n) {
                    for (var r, i, l = e.length, a = 0, s = x; --l > -1; )
                        r = e[l],
                        i = r - n,
                        0 > i && (i = -i),
                        s > i && r >= t && o >= r && (a = l,
                        s = i);
                    return e[a]
                }
                : isNaN(e) ? function(e) {
                    return e
                }
                : function() {
                    return e * n
                }
            }, qt = function(e) {
                var n, r;
                if (l && !Rt.isPressed && e && !("mousedown" === e.type && y() - ft < 30 && Tt[Rt.pointerEvent.type])) {
                    if (ct = jt(),
                    Rt.pointerEvent = e,
                    Tt[e.type] ? (at = -1 !== e.type.indexOf("touch") ? e.currentTarget : u,
                    St(at, "touchend", eo),
                    St(at, "touchmove", Qt),
                    St(at, "touchcancel", eo),
                    St(u, "touchstart", Dt)) : (at = null,
                    St(u, "mousemove", Qt)),
                    vt = null,
                    St(u, "mouseup", eo),
                    e && e.target && St(e.target, "mouseup", eo),
                    lt = Vt.call(Rt, e.target) && !i.dragClickables)
                        return St(e.target, "change", eo),
                        J(Rt, "press", "onPress"),
                        kt(Bt, !0),
                        void 0;
                    if (ht = !at || Yt === At || p || Rt.vars.allowNativeTouchScrolling === !1 ? !1 : Yt ? "y" : "x",
                    w ? e = U(e, !0) : ht || Rt.allowEventDefault || (e.preventDefault(),
                    e.preventManipulation && e.preventManipulation()),
                    e.changedTouches ? (e = Z = e.changedTouches[0],
                    q = e.identifier) : e.pointerId ? q = e.pointerId : Z = null,
                    D++,
                    X(Ut),
                    T = Rt.pointerY = e.pageY,
                    m = Rt.pointerX = e.pageX,
                    (ht || Rt.autoScroll) && V(o.parentNode),
                    !Rt.autoScroll || wt || p || !o.parentNode || o.getBBox || !o.parentNode._gsMaxScrollX || b.parentNode || (b.style.width = o.parentNode.scrollWidth + "px",
                    o.parentNode.appendChild(b)),
                    $t(),
                    st && (n = m * st[0] + T * st[2] + st[4],
                    T = m * st[1] + T * st[3] + st[5],
                    m = n),
                    Rt.tween && Rt.tween.kill(),
                    t.killTweensOf(p || o, !0, Wt),
                    p && t.killTweensOf(o, !0, {
                        scrollTo: 1
                    }),
                    Rt.tween = Rt.lockedAxis = null,
                    (i.zIndexBoost || !wt && !p && i.zIndexBoost !== !1) && (o.style.zIndex = Xt.zIndex++),
                    Rt.isPressed = !0,
                    O = !(!i.onDrag && !Rt._listeners.drag),
                    !wt)
                        for (r = Bt.length; --r > -1; )
                            z(Bt[r], "cursor", i.cursor || "move");
                    J(Rt, "press", "onPress")
                }
            }, Qt = function(e) {
                var t, o, r, i, a = e;
                if (l && !n && Rt.isPressed && e) {
                    if (Rt.pointerEvent = e,
                    t = e.changedTouches) {
                        if (e = t[0],
                        e !== Z && e.identifier !== q) {
                            for (i = t.length; --i > -1 && (e = t[i]).identifier !== q; )
                                ;
                            if (0 > i)
                                return
                        }
                    } else if (e.pointerId && q && e.pointerId !== q)
                        return;
                    if (w)
                        e = U(e, !0);
                    else {
                        if (at && ht && !vt && (o = e.pageX,
                        r = e.pageY,
                        st && (i = o * st[0] + r * st[2] + st[4],
                        r = o * st[1] + r * st[3] + st[5],
                        o = i),
                        vt = Math.abs(o - m) > Math.abs(r - T) && Yt ? "x" : "y",
                        Rt.vars.lockAxisOnTouchScroll !== !1 && (Rt.lockedAxis = "x" === vt ? "y" : "x",
                        "function" == typeof Rt.vars.onLockAxis && Rt.vars.onLockAxis.call(Rt, a)),
                        M && ht === vt))
                            return eo(a),
                            void 0;
                        Rt.allowEventDefault || ht && (!vt || ht === vt) || a.cancelable === !1 || (a.preventDefault(),
                        a.preventManipulation && a.preventManipulation())
                    }
                    Rt.autoScroll && (It = !0),
                    Jt(e.pageX, e.pageY)
                }
            }, Jt = function(e, t) {
                var o, n, r, i, l, a, s = 1 - Rt.dragResistance, c = 1 - Rt.edgeResistance;
                Rt.pointerX = e,
                Rt.pointerY = t,
                wt ? (i = Math.atan2(tt.y - t, e - tt.x) * v,
                l = Rt.y - i,
                Rt.y = i,
                l > 180 ? P -= 360 : -180 > l && (P += 360),
                r = N + (P - i) * s) : (st && (a = e * st[0] + t * st[2] + st[4],
                t = e * st[1] + t * st[3] + st[5],
                e = a),
                n = t - T,
                o = e - m,
                Ot > n && n > -Ot && (n = 0),
                Ot > o && o > -Ot && (o = 0),
                (Rt.lockAxis || Rt.lockedAxis) && (o || n) && (a = Rt.lockedAxis,
                a || (Rt.lockedAxis = a = Yt && Math.abs(o) > Math.abs(n) ? "y" : At ? "x" : null,
                a && "function" == typeof Rt.vars.onLockAxis && Rt.vars.onLockAxis.call(Rt, Rt.pointerEvent)),
                "y" === a ? n = 0 : "x" === a && (o = 0)),
                r = N + o * s,
                i = P + n * s),
                rt || it ? (rt && (r = rt(r)),
                it && (i = it(i))) : E && (r > R ? r = R + (r - R) * c : I > r && (r = I + (r - I) * c),
                wt || (i > G ? i = G + (i - G) * c : K > i && (i = K + (i - K) * c))),
                wt || (r = Math.round(r),
                i = Math.round(i)),
                (Rt.x !== r || Rt.y !== i && !wt) && (Rt.x = Rt.endX = r,
                wt ? Rt.endRotation = r : Rt.y = Rt.endY = i,
                ot = !0,
                Rt.isDragging || (Rt.isDragging = !0,
                J(Rt, "dragstart", "onDragStart")))
            }, eo = function(e, t) {
                if (l && Rt.isPressed && (!e || !q || t || !e.pointerId || e.pointerId === q)) {
                    Rt.isPressed = !1;
                    var n, r, a, s, c = e, f = Rt.isDragging;
                    if (at ? (Lt(at, "touchend", eo),
                    Lt(at, "touchmove", Qt),
                    Lt(at, "touchcancel", eo),
                    Lt(u, "touchstart", Dt)) : Lt(u, "mousemove", Qt),
                    Lt(u, "mouseup", eo),
                    e && e.target && Lt(e.target, "mouseup", eo),
                    ot = !1,
                    b.parentNode && b.parentNode.removeChild(b),
                    lt)
                        return e && Lt(e.target, "change", eo),
                        kt(Bt, !1),
                        J(Rt, "release", "onRelease"),
                        J(Rt, "click", "onClick"),
                        lt = !1,
                        void 0;
                    if (Y(Ut),
                    !wt)
                        for (r = Bt.length; --r > -1; )
                            z(Bt[r], "cursor", i.cursor || "move");
                    if (f && (Ht = C = y(),
                    Rt.isDragging = !1),
                    D--,
                    e) {
                        if (w && (e = U(e, !1)),
                        n = e.changedTouches,
                        n && (e = n[0],
                        e !== Z && e.identifier !== q)) {
                            for (r = n.length; --r > -1 && (e = n[r]).identifier !== q; )
                                ;
                            if (0 > r)
                                return
                        }
                        Rt.pointerEvent = c,
                        Rt.pointerX = e.pageX,
                        Rt.pointerY = e.pageY
                    }
                    return c && !f ? (ct && (i.snap || i.bounds) && zt(i.throwProps),
                    J(Rt, "release", "onRelease"),
                    M && "touchmove" === c.type || (J(Rt, "click", "onClick"),
                    s = c.target || c.srcElement || o,
                    s.click ? s.click() : u.createEvent && (a = u.createEvent("MouseEvents"),
                    a.initEvent("click", !0, !0),
                    s.dispatchEvent(a)),
                    ft = y())) : (zt(i.throwProps),
                    w || Rt.allowEventDefault || !c || !i.dragClickables && Vt.call(Rt, c.target) || !f || ht && (!vt || ht !== vt) || c.cancelable === !1 || (c.preventDefault(),
                    c.preventManipulation && c.preventManipulation()),
                    J(Rt, "release", "onRelease")),
                    f && J(Rt, "dragend", "onDragEnd"),
                    !0
                }
            }, to = function(e) {
                if (e && Rt.isDragging) {
                    var t = e.target || e.srcElement || o.parentNode
                      , n = t.scrollLeft - t._gsScrollX
                      , r = t.scrollTop - t._gsScrollY;
                    (n || r) && (m -= n,
                    T -= r,
                    t._gsScrollX += n,
                    t._gsScrollY += r,
                    Jt(Rt.pointerX, Rt.pointerY))
                }
            }, oo = function(e) {
                var t = y()
                  , o = 40 > t - ft
                  , n = 40 > t - Ht;
                (Rt.isPressed || n || o) && (e.preventDefault ? (e.preventDefault(),
                (o || n && Rt.vars.suppressClickOnDrag !== !1) && e.stopImmediatePropagation()) : e.returnValue = !1,
                e.preventManipulation && e.preventManipulation())
            };
            nt = Xt.get(this.target),
            nt && nt.kill(),
            this.startDrag = function(e) {
                qt(e),
                Rt.isDragging || (Rt.isDragging = !0,
                J(Rt, "dragstart", "onDragStart"))
            }
            ,
            this.drag = Qt,
            this.endDrag = function(e) {
                eo(e, !0)
            }
            ,
            this.timeSinceDrag = function() {
                return Rt.isDragging ? 0 : (y() - Ht) / 1e3
            }
            ,
            this.hitTest = function(e, t) {
                return Xt.hitTest(Rt.target, e, t)
            }
            ,
            this.getDirection = function(e, t) {
                var o, n, i, l, a, s, c = "velocity" === e && r ? e : "object" != typeof e || wt ? "start" : "element";
                return "element" === c && (a = Et(Rt.target),
                s = Et(e)),
                o = "start" === c ? Rt.x - N : "velocity" === c ? r.getVelocity(this.target, Nt) : a.left + a.width / 2 - (s.left + s.width / 2),
                wt ? 0 > o ? "counter-clockwise" : "clockwise" : (t = t || 2,
                n = "start" === c ? Rt.y - P : "velocity" === c ? r.getVelocity(this.target, _t) : a.top + a.height / 2 - (s.top + s.height / 2),
                i = Math.abs(o / n),
                l = 1 / t > i ? "" : 0 > o ? "left" : "right",
                t > i && ("" !== l && (l += "-"),
                l += 0 > n ? "up" : "down"),
                l)
            }
            ,
            this.applyBounds = function(e) {
                var t, o;
                return e && i.bounds !== e ? (i.bounds = e,
                Rt.update(!0)) : (Ft(!0),
                Gt(),
                E && (t = Rt.x,
                o = Rt.y,
                E && (t > R ? t = R : I > t && (t = I),
                o > G ? o = G : K > o && (o = K)),
                (Rt.x !== t || Rt.y !== o) && (Rt.x = Rt.endX = t,
                wt ? Rt.endRotation = t : Rt.y = Rt.endY = o,
                ot = !0,
                Ut())),
                Rt)
            }
            ,
            this.update = function(e) {
                var t = Rt.x
                  , o = Rt.y;
                return Kt(),
                e ? Rt.applyBounds() : (ot && Ut(),
                Ft(!0)),
                Rt.isPressed && (Yt && Math.abs(t - Rt.x) > .01 || At && Math.abs(o - Rt.y) > .01 && !wt) && $t(),
                Rt
            }
            ,
            this.enable = function(e) {
                var n, a, s;
                if ("soft" !== e) {
                    for (a = Bt.length; --a > -1; )
                        s = Bt[a],
                        St(s, "mousedown", qt),
                        St(s, "touchstart", qt),
                        St(s, "click", oo, !0),
                        wt || z(s, "cursor", i.cursor || "move"),
                        z(s, "touchCallout", "none"),
                        z(s, "touchAction", Yt === At || p ? "none" : Yt ? "pan-y" : "pan-x");
                    kt(Bt, !1)
                }
                return B(Rt.target, to),
                l = !0,
                r && "soft" !== e && r.track(p || o, yt ? "x,y" : wt ? "rotation" : "top,left"),
                p && p.enable(),
                o._gsDragID = n = "d" + L++,
                S[n] = this,
                p && (p.element._gsDragID = n),
                t.set(o, {
                    x: "+=0",
                    overwrite: !1
                }),
                ut = {
                    t: o,
                    data: w ? j : o._gsTransform,
                    tween: {},
                    setRatio: w ? function() {
                        t.set(o, $)
                    }
                    : CSSPlugin._internals.setTransformRatio || CSSPlugin._internals.set3DTransformRatio
                },
                this.update(!0),
                Rt
            }
            ,
            this.disable = function(e) {
                var t, n, i = this.isDragging;
                if (!wt)
                    for (t = Bt.length; --t > -1; )
                        z(Bt[t], "cursor", null);
                if ("soft" !== e) {
                    for (t = Bt.length; --t > -1; )
                        n = Bt[t],
                        z(n, "touchCallout", null),
                        z(n, "touchAction", null),
                        Lt(n, "mousedown", qt),
                        Lt(n, "touchstart", qt),
                        Lt(n, "click", oo);
                    kt(Bt, !0),
                    at && (Lt(at, "touchcancel", eo),
                    Lt(at, "touchend", eo),
                    Lt(at, "touchmove", Qt)),
                    Lt(u, "mouseup", eo),
                    Lt(u, "mousemove", Qt)
                }
                return W(o, to),
                l = !1,
                r && "soft" !== e && r.untrack(p || o, yt ? "x,y" : wt ? "rotation" : "top,left"),
                p && p.disable(),
                Y(Ut),
                this.isDragging = this.isPressed = lt = !1,
                i && J(this, "dragend", "onDragEnd"),
                Rt
            }
            ,
            this.enabled = function(e, t) {
                return arguments.length ? e ? this.enable(t) : this.disable(t) : l
            }
            ,
            this.kill = function() {
                return t.killTweensOf(p || o, !0, Wt),
                Rt.disable(),
                delete S[o._gsDragID],
                Rt
            }
            ,
            -1 !== xt.indexOf("scroll") && (p = this.scrollProxy = new Pt(o,A({
                onKill: function() {
                    Rt.isPressed && eo(null)
                }
            }, i)),
            o.style.overflowY = At && !bt ? "auto" : "hidden",
            o.style.overflowX = Yt && !bt ? "auto" : "hidden",
            o = p.content),
            i.force3D !== !1 && t.set(o, {
                force3D: !0
            }),
            wt ? Wt.rotation = 1 : (Yt && (Wt[Nt] = 1),
            At && (Wt[_t] = 1)),
            wt ? ($ = f,
            j = $.css,
            $.overwrite = !1) : yt && ($ = Yt && At ? a : Yt ? s : c,
            j = $.css,
            $.overwrite = !1),
            this.enable()
        }, Yt = Xt.prototype = new e;
        Yt.constructor = Xt,
        Yt.pointerX = Yt.pointerY = 0,
        Yt.isDragging = Yt.isPressed = !1,
        Xt.version = "0.13.0",
        Xt.zIndex = 1e3,
        St(u, "touchcancel", function() {}),
        St(u, "contextmenu", function() {
            var e;
            for (e in S)
                S[e].isPressed && S[e].endDrag()
        }),
        Xt.create = function(e, o) {
            "string" == typeof e && (e = t.selector(e));
            for (var n = yt(e) ? wt(e) : [e], r = n.length; --r > -1; )
                n[r] = new Xt(n[r],o);
            return n
        }
        ,
        Xt.get = function(e) {
            return S[(F(e) || {})._gsDragID]
        }
        ,
        Xt.timeSinceDrag = function() {
            return (y() - C) / 1e3
        }
        ;
        var Et = function(e, t) {
            var o = e.pageX !== t ? {
                left: e.pageX,
                top: e.pageY,
                right: e.pageX + 1,
                bottom: e.pageY + 1
            } : e.nodeType || e.left === t || e.top === t ? F(e).getBoundingClientRect() : e;
            return o.right === t && o.width !== t ? (o.right = o.left + o.width,
            o.bottom = o.top + o.height) : o.width === t && (o = {
                width: o.right - o.left,
                height: o.bottom - o.top,
                right: o.right,
                left: o.left,
                bottom: o.bottom,
                top: o.top
            }),
            o
        };
        return Xt.hitTest = function(e, t, o) {
            if (e === t)
                return !1;
            var n, r, i, l = Et(e), a = Et(t), s = a.left > l.right || a.right < l.left || a.top > l.bottom || a.bottom < l.top;
            return s || !o ? !s : (i = -1 !== (o + "").indexOf("%"),
            o = parseFloat(o) || 0,
            n = {
                left: Math.max(l.left, a.left),
                top: Math.max(l.top, a.top)
            },
            n.width = Math.min(l.right, a.right) - n.left,
            n.height = Math.min(l.bottom, a.bottom) - n.top,
            n.width < 0 || n.height < 0 ? !1 : i ? (o *= .01,
            r = n.width * n.height,
            r >= l.width * l.height * o || r >= a.width * a.height * o) : n.width > o && n.height > o)
        }
        ,
        b.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",
        Xt
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[e]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    require("../plugins/CSSPlugin.js"),
    module.exports = t())
}("Draggable");
var dat = dat || {};
dat.gui = dat.gui || {},
dat.utils = dat.utils || {},
dat.controllers = dat.controllers || {},
dat.dom = dat.dom || {},
dat.color = dat.color || {},
dat.utils.css = function() {
    return {
        load: function(e, t) {
            t = t || document;
            var n = t.createElement("link");
            n.type = "text/css",
            n.rel = "stylesheet",
            n.href = e,
            t.getElementsByTagName("head")[0].appendChild(n)
        },
        inject: function(e, t) {
            t = t || document;
            var n = document.createElement("style");
            n.type = "text/css",
            n.innerHTML = e,
            t.getElementsByTagName("head")[0].appendChild(n)
        }
    }
}(),
dat.utils.common = function() {
    var e = Array.prototype.forEach
      , t = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function(e) {
            return this.each(t.call(arguments, 1), function(t) {
                for (var n in t)
                    this.isUndefined(t[n]) || (e[n] = t[n])
            }, this),
            e
        },
        defaults: function(e) {
            return this.each(t.call(arguments, 1), function(t) {
                for (var n in t)
                    this.isUndefined(e[n]) && (e[n] = t[n])
            }, this),
            e
        },
        compose: function() {
            var e = t.call(arguments);
            return function() {
                for (var n = t.call(arguments), o = e.length - 1; o >= 0; o--)
                    n = [e[o].apply(this, n)];
                return n[0]
            }
        },
        each: function(t, n, o) {
            if (t)
                if (e && t.forEach && t.forEach === e)
                    t.forEach(n, o);
                else if (t.length === t.length + 0) {
                    for (var i = 0, r = t.length; r > i; i++)
                        if (i in t && n.call(o, t[i], i) === this.BREAK)
                            return
                } else
                    for (var i in t)
                        if (n.call(o, t[i], i) === this.BREAK)
                            return
        },
        defer: function(e) {
            setTimeout(e, 0)
        },
        toArray: function(e) {
            return e.toArray ? e.toArray() : t.call(e)
        },
        isUndefined: function(e) {
            return void 0 === e
        },
        isNull: function(e) {
            return null === e
        },
        isNaN: function(e) {
            return e !== e
        },
        isArray: Array.isArray || function(e) {
            return e.constructor === Array
        }
        ,
        isObject: function(e) {
            return e === Object(e)
        },
        isNumber: function(e) {
            return e === e + 0
        },
        isString: function(e) {
            return e === e + ""
        },
        isBoolean: function(e) {
            return e === !1 || e === !0
        },
        isFunction: function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }
}(),
dat.controllers.Controller = function(e) {
    var t = function(e, t) {
        this.initialValue = e[t],
        this.domElement = document.createElement("div"),
        this.object = e,
        this.property = t,
        this.__onChange = void 0,
        this.__onFinishChange = void 0
    };
    return e.extend(t.prototype, {
        onChange: function(e) {
            return this.__onChange = e,
            this
        },
        onFinishChange: function(e) {
            return this.__onFinishChange = e,
            this
        },
        setValue: function(e) {
            return this.object[this.property] = e,
            this.__onChange && this.__onChange.call(this, e),
            this.updateDisplay(),
            this
        },
        getValue: function() {
            return this.object[this.property]
        },
        updateDisplay: function() {
            return this
        },
        isModified: function() {
            return this.initialValue !== this.getValue()
        }
    }),
    t
}(dat.utils.common),
dat.dom.dom = function(e) {
    function t(t) {
        if ("0" === t || e.isUndefined(t))
            return 0;
        var n = t.match(i);
        return e.isNull(n) ? 0 : parseFloat(n[1])
    }
    var n = {
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }
      , o = {};
    e.each(n, function(t, n) {
        e.each(t, function(e) {
            o[e] = n
        })
    });
    var i = /(\d+(\.\d+)?)px/
      , r = {
        makeSelectable: function(e, t) {
            void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                return !1
            }
            : function() {}
            ,
            e.style.MozUserSelect = t ? "auto" : "none",
            e.style.KhtmlUserSelect = t ? "auto" : "none",
            e.unselectable = t ? "on" : "off")
        },
        makeFullscreen: function(t, n, o) {
            e.isUndefined(n) && (n = !0),
            e.isUndefined(o) && (o = !0),
            t.style.position = "absolute",
            n && (t.style.left = 0,
            t.style.right = 0),
            o && (t.style.top = 0,
            t.style.bottom = 0)
        },
        fakeEvent: function(t, n, i, r) {
            i = i || {};
            var s = o[n];
            if (!s)
                throw new Error("Event type " + n + " not supported.");
            var a = document.createEvent(s);
            switch (s) {
            case "MouseEvents":
                var l = i.x || i.clientX || 0
                  , d = i.y || i.clientY || 0;
                a.initMouseEvent(n, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, l, d, !1, !1, !1, !1, 0, null);
                break;
            case "KeyboardEvents":
                var c = a.initKeyboardEvent || a.initKeyEvent;
                e.defaults(i, {
                    cancelable: !0,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !1,
                    keyCode: void 0,
                    charCode: void 0
                }),
                c(n, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                break;
            default:
                a.initEvent(n, i.bubbles || !1, i.cancelable || !0)
            }
            e.defaults(a, r),
            t.dispatchEvent(a)
        },
        bind: function(e, t, n, o) {
            return o = o || !1,
            e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on" + t, n),
            r
        },
        unbind: function(e, t, n, o) {
            return o = o || !1,
            e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent && e.detachEvent("on" + t, n),
            r
        },
        addClass: function(e, t) {
            if (void 0 === e.className)
                e.className = t;
            else if (e.className !== t) {
                var n = e.className.split(/ +/);
                -1 == n.indexOf(t) && (n.push(t),
                e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
            }
            return r
        },
        removeClass: function(e, t) {
            if (t)
                if (void 0 === e.className)
                    ;
                else if (e.className === t)
                    e.removeAttribute("class");
                else {
                    var n = e.className.split(/ +/)
                      , o = n.indexOf(t);
                    -1 != o && (n.splice(o, 1),
                    e.className = n.join(" "))
                }
            else
                e.className = void 0;
            return r
        },
        hasClass: function(e, t) {
            return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
        },
        getWidth: function(e) {
            var n = getComputedStyle(e);
            return t(n["border-left-width"]) + t(n["border-right-width"]) + t(n["padding-left"]) + t(n["padding-right"]) + t(n.width)
        },
        getHeight: function(e) {
            var n = getComputedStyle(e);
            return t(n["border-top-width"]) + t(n["border-bottom-width"]) + t(n["padding-top"]) + t(n["padding-bottom"]) + t(n.height)
        },
        getOffset: function(e) {
            var t = {
                left: 0,
                top: 0
            };
            if (e.offsetParent)
                do
                    t.left += e.offsetLeft,
                    t.top += e.offsetTop;
                while (e = e.offsetParent);
            return t
        },
        isActive: function(e) {
            return e === document.activeElement && (e.type || e.href)
        }
    };
    return r
}(dat.utils.common),
dat.controllers.OptionController = function(e, t, n) {
    var o = function(e, i, r) {
        o.superclass.call(this, e, i);
        var s = this;
        if (this.__select = document.createElement("select"),
        n.isArray(r)) {
            var a = {};
            n.each(r, function(e) {
                a[e] = e
            }),
            r = a
        }
        n.each(r, function(e, t) {
            var n = document.createElement("option");
            n.innerHTML = t,
            n.setAttribute("value", e),
            s.__select.appendChild(n)
        }),
        this.updateDisplay(),
        t.bind(this.__select, "change", function() {
            var e = this.options[this.selectedIndex].value;
            s.setValue(e)
        }),
        this.domElement.appendChild(this.__select)
    };
    return o.superclass = e,
    n.extend(o.prototype, e.prototype, {
        setValue: function(e) {
            var t = o.superclass.prototype.setValue.call(this, e);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
            t
        },
        updateDisplay: function() {
            return this.__select.value = this.getValue(),
            o.superclass.prototype.updateDisplay.call(this)
        }
    }),
    o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common),
dat.controllers.NumberController = function(e, t) {
    function n(e) {
        return e = e.toString(),
        e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
    }
    var o = function(e, i, r) {
        o.superclass.call(this, e, i),
        r = r || {},
        this.__min = r.min,
        this.__max = r.max,
        this.__step = r.step,
        this.__impliedStep = t.isUndefined(this.__step) ? 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__step,
        this.__precision = n(this.__impliedStep)
    };
    return o.superclass = e,
    t.extend(o.prototype, e.prototype, {
        setValue: function(e) {
            return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max),
            void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step),
            o.superclass.prototype.setValue.call(this, e)
        },
        min: function(e) {
            return this.__min = e,
            this
        },
        max: function(e) {
            return this.__max = e,
            this
        },
        step: function(e) {
            return this.__step = e,
            this.__impliedStep = e,
            this.__precision = n(e),
            this
        }
    }),
    o
}(dat.controllers.Controller, dat.utils.common),
dat.controllers.NumberControllerBox = function(e, t, n) {
    function o(e, t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n
    }
    var i = function(e, o, r) {
        function s() {
            var e = parseFloat(h.__input.value);
            n.isNaN(e) || h.setValue(e)
        }
        function a() {
            s(),
            h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
        }
        function l(e) {
            t.bind(window, "mousemove", d),
            t.bind(window, "mouseup", c),
            u = e.clientY
        }
        function d(e) {
            var t = u - e.clientY;
            h.setValue(h.getValue() + t * h.__impliedStep),
            u = e.clientY
        }
        function c() {
            t.unbind(window, "mousemove", d),
            t.unbind(window, "mouseup", c)
        }
        this.__truncationSuspended = !1,
        i.superclass.call(this, e, o, r);
        var u, h = this;
        this.__input = document.createElement("input"),
        this.__input.setAttribute("type", "text"),
        t.bind(this.__input, "change", s),
        t.bind(this.__input, "blur", a),
        t.bind(this.__input, "mousedown", l),
        t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && (h.__truncationSuspended = !0,
            this.blur(),
            h.__truncationSuspended = !1)
        }),
        this.updateDisplay(),
        this.domElement.appendChild(this.__input)
    };
    return i.superclass = e,
    n.extend(i.prototype, e.prototype, {
        updateDisplay: function() {
            return this.__input.value = this.__truncationSuspended ? this.getValue() : o(this.getValue(), this.__precision),
            i.superclass.prototype.updateDisplay.call(this)
        }
    }),
    i
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common),
dat.controllers.NumberControllerSlider = function(e, t, n, o, i) {
    function r(e, t, n, o, i) {
        return o + (i - o) * ((e - t) / (n - t))
    }
    var s = function(e, n, o, i, a) {
        function l(e) {
            t.bind(window, "mousemove", d),
            t.bind(window, "mouseup", c),
            d(e)
        }
        function d(e) {
            e.preventDefault();
            var n = t.getOffset(u.__background)
              , o = t.getWidth(u.__background);
            return u.setValue(r(e.clientX, n.left, n.left + o, u.__min, u.__max)),
            !1
        }
        function c() {
            t.unbind(window, "mousemove", d),
            t.unbind(window, "mouseup", c),
            u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
        }
        s.superclass.call(this, e, n, {
            min: o,
            max: i,
            step: a
        });
        var u = this;
        this.__background = document.createElement("div"),
        this.__foreground = document.createElement("div"),
        t.bind(this.__background, "mousedown", l),
        t.addClass(this.__background, "slider"),
        t.addClass(this.__foreground, "slider-fg"),
        this.updateDisplay(),
        this.__background.appendChild(this.__foreground),
        this.domElement.appendChild(this.__background)
    };
    return s.superclass = e,
    s.useDefaultStyles = function() {
        n.inject(i)
    }
    ,
    o.extend(s.prototype, e.prototype, {
        updateDisplay: function() {
            var e = (this.getValue() - this.__min) / (this.__max - this.__min);
            return this.__foreground.style.width = 100 * e + "%",
            s.superclass.prototype.updateDisplay.call(this)
        }
    }),
    s
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"),
dat.controllers.FunctionController = function(e, t, n) {
    var o = function(e, n, i) {
        o.superclass.call(this, e, n);
        var r = this;
        this.__button = document.createElement("div"),
        this.__button.innerHTML = void 0 === i ? "Fire" : i,
        t.bind(this.__button, "click", function(e) {
            return e.preventDefault(),
            r.fire(),
            !1
        }),
        t.addClass(this.__button, "button"),
        this.domElement.appendChild(this.__button)
    };
    return o.superclass = e,
    n.extend(o.prototype, e.prototype, {
        fire: function() {
            this.__onChange && this.__onChange.call(this),
            this.getValue().call(this.object),
            this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
        }
    }),
    o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common),
dat.controllers.BooleanController = function(e, t, n) {
    var o = function(e, n) {
        function i() {
            r.setValue(!r.__prev)
        }
        o.superclass.call(this, e, n);
        var r = this;
        this.__prev = this.getValue(),
        this.__checkbox = document.createElement("input"),
        this.__checkbox.setAttribute("type", "checkbox"),
        t.bind(this.__checkbox, "change", i, !1),
        this.domElement.appendChild(this.__checkbox),
        this.updateDisplay()
    };
    return o.superclass = e,
    n.extend(o.prototype, e.prototype, {
        setValue: function(e) {
            var t = o.superclass.prototype.setValue.call(this, e);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
            this.__prev = this.getValue(),
            t
        },
        updateDisplay: function() {
            return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"),
            this.__checkbox.checked = !0) : this.__checkbox.checked = !1,
            o.superclass.prototype.updateDisplay.call(this)
        }
    }),
    o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common),
dat.color.toString = function(e) {
    return function(t) {
        if (1 == t.a || e.isUndefined(t.a)) {
            for (var n = t.hex.toString(16); n.length < 6; )
                n = "0" + n;
            return "#" + n
        }
        return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
    }
}(dat.utils.common),
dat.color.interpret = function(e, t) {
    var n, o, i = function() {
        o = !1;
        var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
        return t.each(r, function(i) {
            return i.litmus(e) ? (t.each(i.conversions, function(i, r) {
                return n = i.read(e),
                o === !1 && n !== !1 ? (o = n,
                n.conversionName = r,
                n.conversion = i,
                t.BREAK) : void 0
            }),
            t.BREAK) : void 0
        }),
        o
    }, r = [{
        litmus: t.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function(e) {
                    var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return null === t ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                    }
                },
                write: e
            },
            SIX_CHAR_HEX: {
                read: function(e) {
                    var t = e.match(/^#([A-F0-9]{6})$/i);
                    return null === t ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString())
                    }
                },
                write: e
            },
            CSS_RGB: {
                read: function(e) {
                    var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return null === t ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3])
                    }
                },
                write: e
            },
            CSS_RGBA: {
                read: function(e) {
                    var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                    return null === t ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3]),
                        a: parseFloat(t[4])
                    }
                },
                write: e
            }
        }
    }, {
        litmus: t.isNumber,
        conversions: {
            HEX: {
                read: function(e) {
                    return {
                        space: "HEX",
                        hex: e,
                        conversionName: "HEX"
                    }
                },
                write: function(e) {
                    return e.hex
                }
            }
        }
    }, {
        litmus: t.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function(e) {
                    return 3 != e.length ? !1 : {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2]
                    }
                },
                write: function(e) {
                    return [e.r, e.g, e.b]
                }
            },
            RGBA_ARRAY: {
                read: function(e) {
                    return 4 != e.length ? !1 : {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: e[3]
                    }
                },
                write: function(e) {
                    return [e.r, e.g, e.b, e.a]
                }
            }
        }
    }, {
        litmus: t.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function(e) {
                    return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    } : !1
                },
                write: function(e) {
                    return {
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    }
                }
            },
            RGB_OBJ: {
                read: function(e) {
                    return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b
                    } : !1
                },
                write: function(e) {
                    return {
                        r: e.r,
                        g: e.g,
                        b: e.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function(e) {
                    return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    } : !1
                },
                write: function(e) {
                    return {
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    }
                }
            },
            HSV_OBJ: {
                read: function(e) {
                    return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v
                    } : !1
                },
                write: function(e) {
                    return {
                        h: e.h,
                        s: e.s,
                        v: e.v
                    }
                }
            }
        }
    }];
    return i
}(dat.color.toString, dat.utils.common),
dat.GUI = dat.gui.GUI = function(e, t, n, o, i, r, s, a, l, d, c, u, h, p, _) {
    function f(e, t, n, r) {
        if (void 0 === t[n])
            throw new Error("Object " + t + ' has no property "' + n + '"');
        var s;
        if (r.color)
            s = new c(t,n);
        else {
            var a = [t, n].concat(r.factoryArgs);
            s = o.apply(e, a)
        }
        r.before instanceof i && (r.before = r.before.__li),
        b(e, s),
        p.addClass(s.domElement, "c");
        var l = document.createElement("span");
        p.addClass(l, "property-name"),
        l.innerHTML = s.property;
        var d = document.createElement("div");
        d.appendChild(l),
        d.appendChild(s.domElement);
        var u = m(e, d, r.before);
        return p.addClass(u, H.CLASS_CONTROLLER_ROW),
        p.addClass(u, typeof s.getValue()),
        g(e, u, s),
        e.__controllers.push(s),
        s
    }
    function m(e, t, n) {
        var o = document.createElement("li");
        return t && o.appendChild(t),
        n ? e.__ul.insertBefore(o, params.before) : e.__ul.appendChild(o),
        e.onResize(),
        o
    }
    function g(e, t, n) {
        if (n.__li = t,
        n.__gui = e,
        _.extend(n, {
            options: function(t) {
                return arguments.length > 1 ? (n.remove(),
                f(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [_.toArray(arguments)]
                })) : _.isArray(t) || _.isObject(t) ? (n.remove(),
                f(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [t]
                })) : void 0
            },
            name: function(e) {
                return n.__li.firstElementChild.firstElementChild.innerHTML = e,
                n
            },
            listen: function() {
                return n.__gui.listen(n),
                n
            },
            remove: function() {
                return n.__gui.remove(n),
                n
            }
        }),
        n instanceof l) {
            var o = new a(n.object,n.property,{
                min: n.__min,
                max: n.__max,
                step: n.__step
            });
            _.each(["updateDisplay", "onChange", "onFinishChange"], function(e) {
                var t = n[e]
                  , i = o[e];
                n[e] = o[e] = function() {
                    var e = Array.prototype.slice.call(arguments);
                    return t.apply(n, e),
                    i.apply(o, e)
                }
            }),
            p.addClass(t, "has-slider"),
            n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild)
        } else if (n instanceof a) {
            var i = function(t) {
                return _.isNumber(n.__min) && _.isNumber(n.__max) ? (n.remove(),
                f(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [n.__min, n.__max, n.__step]
                })) : t
            };
            n.min = _.compose(i, n.min),
            n.max = _.compose(i, n.max)
        } else
            n instanceof r ? (p.bind(t, "click", function() {
                p.fakeEvent(n.__checkbox, "click")
            }),
            p.bind(n.__checkbox, "click", function(e) {
                e.stopPropagation()
            })) : n instanceof s ? (p.bind(t, "click", function() {
                p.fakeEvent(n.__button, "click")
            }),
            p.bind(t, "mouseover", function() {
                p.addClass(n.__button, "hover")
            }),
            p.bind(t, "mouseout", function() {
                p.removeClass(n.__button, "hover")
            })) : n instanceof c && (p.addClass(t, "color"),
            n.updateDisplay = _.compose(function(e) {
                return t.style.borderLeftColor = n.__color.toString(),
                e
            }, n.updateDisplay),
            n.updateDisplay());
        n.setValue = _.compose(function(t) {
            return e.getRoot().__preset_select && n.isModified() && k(e.getRoot(), !0),
            t
        }, n.setValue)
    }
    function b(e, t) {
        var n = e.getRoot()
          , o = n.__rememberedObjects.indexOf(t.object);
        if (-1 != o) {
            var i = n.__rememberedObjectIndecesToControllers[o];
            if (void 0 === i && (i = {},
            n.__rememberedObjectIndecesToControllers[o] = i),
            i[t.property] = t,
            n.load && n.load.remembered) {
                var r, s = n.load.remembered;
                if (s[e.preset])
                    r = s[e.preset];
                else {
                    if (!s[B])
                        return;
                    r = s[B]
                }
                if (r[o] && void 0 !== r[o][t.property]) {
                    var a = r[o][t.property];
                    t.initialValue = a,
                    t.setValue(a)
                }
            }
        }
    }
    function v(e, t) {
        return document.location.href + "." + t
    }
    function y(e) {
        function t() {
            d.style.display = e.useLocalStorage ? "block" : "none"
        }
        var n = e.__save_row = document.createElement("li");
        p.addClass(e.domElement, "has-save"),
        e.__ul.insertBefore(n, e.__ul.firstChild),
        p.addClass(n, "save-row");
        var o = document.createElement("span");
        o.innerHTML = "&nbsp;",
        p.addClass(o, "button gears");
        var i = document.createElement("span");
        i.innerHTML = "Save",
        p.addClass(i, "button"),
        p.addClass(i, "save");
        var r = document.createElement("span");
        r.innerHTML = "New",
        p.addClass(r, "button"),
        p.addClass(r, "save-as");
        var s = document.createElement("span");
        s.innerHTML = "Revert",
        p.addClass(s, "button"),
        p.addClass(s, "revert");
        var a = e.__preset_select = document.createElement("select");
        if (e.load && e.load.remembered ? _.each(e.load.remembered, function(t, n) {
            E(e, n, n == e.preset)
        }) : E(e, B, !1),
        p.bind(a, "change", function() {
            for (var t = 0; t < e.__preset_select.length; t++)
                e.__preset_select[t].innerHTML = e.__preset_select[t].value;
            e.preset = this.value
        }),
        n.appendChild(a),
        n.appendChild(o),
        n.appendChild(i),
        n.appendChild(r),
        n.appendChild(s),
        D) {
            var l = document.getElementById("dg-save-locally")
              , d = document.getElementById("dg-local-explain");
            l.style.display = "block";
            var c = document.getElementById("dg-local-storage");
            "true" === localStorage.getItem(v(e, "isLocal")) && c.setAttribute("checked", "checked"),
            t(),
            p.bind(c, "change", function() {
                e.useLocalStorage = !e.useLocalStorage,
                t()
            })
        }
        var u = document.getElementById("dg-new-constructor");
        p.bind(u, "keydown", function(e) {
            !e.metaKey || 67 !== e.which && 67 != e.keyCode || O.hide()
        }),
        p.bind(o, "click", function() {
            u.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2),
            O.show(),
            u.focus(),
            u.select()
        }),
        p.bind(i, "click", function() {
            e.save()
        }),
        p.bind(r, "click", function() {
            var t = prompt("Enter a new preset name.");
            t && e.saveAs(t)
        }),
        p.bind(s, "click", function() {
            e.revert()
        })
    }
    function x(e) {
        function t(t) {
            return t.preventDefault(),
            i = t.clientX,
            p.addClass(e.__closeButton, H.CLASS_DRAG),
            p.bind(window, "mousemove", n),
            p.bind(window, "mouseup", o),
            !1
        }
        function n(t) {
            return t.preventDefault(),
            e.width += i - t.clientX,
            e.onResize(),
            i = t.clientX,
            !1
        }
        function o() {
            p.removeClass(e.__closeButton, H.CLASS_DRAG),
            p.unbind(window, "mousemove", n),
            p.unbind(window, "mouseup", o)
        }
        e.__resize_handle = document.createElement("div"),
        _.extend(e.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var i;
        p.bind(e.__resize_handle, "mousedown", t),
        p.bind(e.__closeButton, "mousedown", t),
        e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
    }
    function w(e, t) {
        e.domElement.style.width = t + "px",
        e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"),
        e.__closeButton && (e.__closeButton.style.width = t + "px")
    }
    function C(e, t) {
        var n = {};
        return _.each(e.__rememberedObjects, function(o, i) {
            var r = {}
              , s = e.__rememberedObjectIndecesToControllers[i];
            _.each(s, function(e, n) {
                r[n] = t ? e.initialValue : e.getValue()
            }),
            n[i] = r
        }),
        n
    }
    function E(e, t, n) {
        var o = document.createElement("option");
        o.innerHTML = t,
        o.value = t,
        e.__preset_select.appendChild(o),
        n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
    }
    function A(e) {
        for (var t = 0; t < e.__preset_select.length; t++)
            e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t)
    }
    function k(e, t) {
        var n = e.__preset_select[e.__preset_select.selectedIndex];
        n.innerHTML = t ? n.value + "*" : n.value
    }
    function S(e) {
        0 != e.length && u(function() {
            S(e)
        }),
        _.each(e, function(e) {
            e.updateDisplay()
        })
    }
    e.inject(n);
    var O, T, L = "dg", N = 72, R = 20, B = "Default", D = function() {
        try {
            return "localStorage"in window && null !== window.localStorage
        } catch (e) {
            return !1
        }
    }(), F = !0, V = !1, I = [], H = function(e) {
        function t() {
            var e = n.getRoot();
            e.width += 1,
            _.defer(function() {
                e.width -= 1
            })
        }
        var n = this;
        this.domElement = document.createElement("div"),
        this.__ul = document.createElement("ul"),
        this.domElement.appendChild(this.__ul),
        p.addClass(this.domElement, L),
        this.__folders = {},
        this.__controllers = [],
        this.__rememberedObjects = [],
        this.__rememberedObjectIndecesToControllers = [],
        this.__listening = [],
        e = e || {},
        e = _.defaults(e, {
            autoPlace: !0,
            width: H.DEFAULT_WIDTH
        }),
        e = _.defaults(e, {
            resizable: e.autoPlace,
            hideable: e.autoPlace
        }),
        _.isUndefined(e.load) ? e.load = {
            preset: B
        } : e.preset && (e.load.preset = e.preset),
        _.isUndefined(e.parent) && e.hideable && I.push(this),
        e.resizable = _.isUndefined(e.parent) && e.resizable,
        e.autoPlace && _.isUndefined(e.scrollable) && (e.scrollable = !0);
        var o, i = D && "true" === localStorage.getItem(v(this, "isLocal"));
        if (Object.defineProperties(this, {
            parent: {
                get: function() {
                    return e.parent
                }
            },
            scrollable: {
                get: function() {
                    return e.scrollable
                }
            },
            autoPlace: {
                get: function() {
                    return e.autoPlace
                }
            },
            preset: {
                get: function() {
                    return n.parent ? n.getRoot().preset : e.load.preset
                },
                set: function(t) {
                    n.parent ? n.getRoot().preset = t : e.load.preset = t,
                    A(this),
                    n.revert()
                }
            },
            width: {
                get: function() {
                    return e.width
                },
                set: function(t) {
                    e.width = t,
                    w(n, t)
                }
            },
            name: {
                get: function() {
                    return e.name
                },
                set: function(t) {
                    e.name = t,
                    s && (s.innerHTML = e.name)
                }
            },
            closed: {
                get: function() {
                    return e.closed
                },
                set: function(t) {
                    e.closed = t,
                    e.closed ? p.addClass(n.__ul, H.CLASS_CLOSED) : p.removeClass(n.__ul, H.CLASS_CLOSED),
                    this.onResize(),
                    n.__closeButton && (n.__closeButton.innerHTML = t ? H.TEXT_OPEN : H.TEXT_CLOSED)
                }
            },
            load: {
                get: function() {
                    return e.load
                }
            },
            useLocalStorage: {
                get: function() {
                    return i
                },
                set: function(e) {
                    D && (i = e,
                    e ? p.bind(window, "unload", o) : p.unbind(window, "unload", o),
                    localStorage.setItem(v(n, "isLocal"), e))
                }
            }
        }),
        _.isUndefined(e.parent)) {
            if (e.closed = !1,
            p.addClass(this.domElement, H.CLASS_MAIN),
            p.makeSelectable(this.domElement, !1),
            D && i) {
                n.useLocalStorage = !0;
                var r = localStorage.getItem(v(this, "gui"));
                r && (e.load = JSON.parse(r))
            }
            this.__closeButton = document.createElement("div"),
            this.__closeButton.innerHTML = H.TEXT_CLOSED,
            p.addClass(this.__closeButton, H.CLASS_CLOSE_BUTTON),
            this.domElement.appendChild(this.__closeButton),
            p.bind(this.__closeButton, "click", function() {
                n.closed = !n.closed
            })
        } else {
            void 0 === e.closed && (e.closed = !0);
            var s = document.createTextNode(e.name);
            p.addClass(s, "controller-name");
            var a = m(n, s)
              , l = function(e) {
                return e.preventDefault(),
                n.closed = !n.closed,
                !1
            };
            p.addClass(this.__ul, H.CLASS_CLOSED),
            p.addClass(a, "title"),
            p.bind(a, "click", l),
            e.closed || (this.closed = !1)
        }
        e.autoPlace && (_.isUndefined(e.parent) && (F && (T = document.createElement("div"),
        p.addClass(T, L),
        p.addClass(T, H.CLASS_AUTO_PLACE_CONTAINER),
        document.body.appendChild(T),
        F = !1),
        T.appendChild(this.domElement),
        p.addClass(this.domElement, H.CLASS_AUTO_PLACE)),
        this.parent || w(n, e.width)),
        p.bind(window, "resize", function() {
            n.onResize()
        }),
        p.bind(this.__ul, "webkitTransitionEnd", function() {
            n.onResize()
        }),
        p.bind(this.__ul, "transitionend", function() {
            n.onResize()
        }),
        p.bind(this.__ul, "oTransitionEnd", function() {
            n.onResize()
        }),
        this.onResize(),
        e.resizable && x(this),
        o = function() {
            D && "true" === localStorage.getItem(v(n, "isLocal")) && localStorage.setItem(v(n, "gui"), JSON.stringify(n.getSaveObject()))
        }
        ,
        this.saveToLocalStorageIfPossible = o;
        n.getRoot();
        e.parent || t()
    };
    return H.toggleHide = function() {
        V = !V,
        _.each(I, function(e) {
            e.domElement.style.zIndex = V ? -999 : 999,
            e.domElement.style.opacity = V ? 0 : 1
        })
    }
    ,
    H.CLASS_AUTO_PLACE = "a",
    H.CLASS_AUTO_PLACE_CONTAINER = "ac",
    H.CLASS_MAIN = "main",
    H.CLASS_CONTROLLER_ROW = "cr",
    H.CLASS_TOO_TALL = "taller-than-window",
    H.CLASS_CLOSED = "closed",
    H.CLASS_CLOSE_BUTTON = "close-button",
    H.CLASS_DRAG = "drag",
    H.DEFAULT_WIDTH = 245,
    H.TEXT_CLOSED = "Close Controls",
    H.TEXT_OPEN = "Open Controls",
    p.bind(window, "keydown", function(e) {
        "text" === document.activeElement.type || e.which !== N && e.keyCode != N || H.toggleHide()
    }, !1),
    _.extend(H.prototype, {
        add: function(e, t) {
            return f(this, e, t, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function(e, t) {
            return f(this, e, t, {
                color: !0
            })
        },
        remove: function(e) {
            this.__ul.removeChild(e.__li),
            this.__controllers.splice(this.__controllers.indexOf(e), 1);
            var t = this;
            _.defer(function() {
                t.onResize()
            })
        },
        destroy: function() {
            this.autoPlace && T.removeChild(this.domElement)
        },
        addFolder: function(e) {
            if (void 0 !== this.__folders[e])
                throw new Error('You already have a folder in this GUI by the name "' + e + '"');
            var t = {
                name: e,
                parent: this
            };
            t.autoPlace = this.autoPlace,
            this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed,
            t.load = this.load.folders[e]);
            var n = new H(t);
            this.__folders[e] = n;
            var o = m(this, n.domElement);
            return p.addClass(o, "folder"),
            n
        },
        open: function() {
            this.closed = !1
        },
        close: function() {
            this.closed = !0
        },
        onResize: function() {
            var e = this.getRoot();
            if (e.scrollable) {
                var t = p.getOffset(e.__ul).top
                  , n = 0;
                _.each(e.__ul.childNodes, function(t) {
                    e.autoPlace && t === e.__save_row || (n += p.getHeight(t))
                }),
                window.innerHeight - t - R < n ? (p.addClass(e.domElement, H.CLASS_TOO_TALL),
                e.__ul.style.height = window.innerHeight - t - R + "px") : (p.removeClass(e.domElement, H.CLASS_TOO_TALL),
                e.__ul.style.height = "auto")
            }
            e.__resize_handle && _.defer(function() {
                e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
            }),
            e.__closeButton && (e.__closeButton.style.width = e.width + "px")
        },
        remember: function() {
            if (_.isUndefined(O) && (O = new h,
            O.domElement.innerHTML = t),
            this.parent)
                throw new Error("You can only call remember on a top level GUI.");
            var e = this;
            _.each(Array.prototype.slice.call(arguments), function(t) {
                0 == e.__rememberedObjects.length && y(e),
                -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
            }),
            this.autoPlace && w(this, this.width)
        },
        getRoot: function() {
            for (var e = this; e.parent; )
                e = e.parent;
            return e
        },
        getSaveObject: function() {
            var e = this.load;
            return e.closed = this.closed,
            this.__rememberedObjects.length > 0 && (e.preset = this.preset,
            e.remembered || (e.remembered = {}),
            e.remembered[this.preset] = C(this)),
            e.folders = {},
            _.each(this.__folders, function(t, n) {
                e.folders[n] = t.getSaveObject()
            }),
            e
        },
        save: function() {
            this.load.remembered || (this.load.remembered = {}),
            this.load.remembered[this.preset] = C(this),
            k(this, !1),
            this.saveToLocalStorageIfPossible()
        },
        saveAs: function(e) {
            this.load.remembered || (this.load.remembered = {},
            this.load.remembered[B] = C(this, !0)),
            this.load.remembered[e] = C(this),
            this.preset = e,
            E(this, e, !0),
            this.saveToLocalStorageIfPossible()
        },
        revert: function(e) {
            _.each(this.__controllers, function(t) {
                this.getRoot().load.remembered ? b(e || this.getRoot(), t) : t.setValue(t.initialValue)
            }, this),
            _.each(this.__folders, function(e) {
                e.revert(e)
            }),
            e || k(this.getRoot(), !1)
        },
        listen: function(e) {
            var t = 0 == this.__listening.length;
            this.__listening.push(e),
            t && S(this.__listening)
        }
    }),
    H
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", dat.controllers.factory = function(e, t, n, o, i, r, s) {
    return function(a, l) {
        var d = a[l];
        return s.isArray(arguments[2]) || s.isObject(arguments[2]) ? new e(a,l,arguments[2]) : s.isNumber(d) ? s.isNumber(arguments[2]) && s.isNumber(arguments[3]) ? new n(a,l,arguments[2],arguments[3]) : new t(a,l,{
            min: arguments[2],
            max: arguments[3]
        }) : s.isString(d) ? new o(a,l) : s.isFunction(d) ? new i(a,l,"") : s.isBoolean(d) ? new r(a,l) : void 0
    }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function(e, t, n) {
    var o = function(e, n) {
        function i() {
            s.setValue(s.__input.value)
        }
        function r() {
            s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
        }
        o.superclass.call(this, e, n);
        var s = this;
        this.__input = document.createElement("input"),
        this.__input.setAttribute("type", "text"),
        t.bind(this.__input, "keyup", i),
        t.bind(this.__input, "change", i),
        t.bind(this.__input, "blur", r),
        t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && this.blur()
        }),
        this.updateDisplay(),
        this.domElement.appendChild(this.__input)
    };
    return o.superclass = e,
    n.extend(o.prototype, e.prototype, {
        updateDisplay: function() {
            return t.isActive(this.__input) || (this.__input.value = this.getValue()),
            o.superclass.prototype.updateDisplay.call(this)
        }
    }),
    o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function(e, t, n, o, i) {
    function r(e, t, n, o) {
        e.style.background = "",
        i.each(l, function(i) {
            e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); "
        })
    }
    function s(e) {
        e.style.background = "",
        e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",
        e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
        e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
        e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
        e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var a = function(e, l) {
        function d(e) {
            p(e),
            t.bind(window, "mousemove", p),
            t.bind(window, "mouseup", c)
        }
        function c() {
            t.unbind(window, "mousemove", p),
            t.unbind(window, "mouseup", c)
        }
        function u() {
            var e = o(this.value);
            e !== !1 ? (f.__color.__state = e,
            f.setValue(f.__color.toOriginal())) : this.value = f.__color.toString()
        }
        function h() {
            t.unbind(window, "mousemove", _),
            t.unbind(window, "mouseup", h)
        }
        function p(e) {
            e.preventDefault();
            var n = t.getWidth(f.__saturation_field)
              , o = t.getOffset(f.__saturation_field)
              , i = (e.clientX - o.left + document.body.scrollLeft) / n
              , r = 1 - (e.clientY - o.top + document.body.scrollTop) / n;
            return r > 1 ? r = 1 : 0 > r && (r = 0),
            i > 1 ? i = 1 : 0 > i && (i = 0),
            f.__color.v = r,
            f.__color.s = i,
            f.setValue(f.__color.toOriginal()),
            !1
        }
        function _(e) {
            e.preventDefault();
            var n = t.getHeight(f.__hue_field)
              , o = t.getOffset(f.__hue_field)
              , i = 1 - (e.clientY - o.top + document.body.scrollTop) / n;
            return i > 1 ? i = 1 : 0 > i && (i = 0),
            f.__color.h = 360 * i,
            f.setValue(f.__color.toOriginal()),
            !1
        }
        a.superclass.call(this, e, l),
        this.__color = new n(this.getValue()),
        this.__temp = new n(0);
        var f = this;
        this.domElement = document.createElement("div"),
        t.makeSelectable(this.domElement, !1),
        this.__selector = document.createElement("div"),
        this.__selector.className = "selector",
        this.__saturation_field = document.createElement("div"),
        this.__saturation_field.className = "saturation-field",
        this.__field_knob = document.createElement("div"),
        this.__field_knob.className = "field-knob",
        this.__field_knob_border = "2px solid ",
        this.__hue_knob = document.createElement("div"),
        this.__hue_knob.className = "hue-knob",
        this.__hue_field = document.createElement("div"),
        this.__hue_field.className = "hue-field",
        this.__input = document.createElement("input"),
        this.__input.type = "text",
        this.__input_textShadow = "0 1px 1px ",
        t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && u.call(this)
        }),
        t.bind(this.__input, "blur", u),
        t.bind(this.__selector, "mousedown", function() {
            t.addClass(this, "drag").bind(window, "mouseup", function() {
                t.removeClass(f.__selector, "drag")
            })
        });
        var m = document.createElement("div");
        i.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }),
        i.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }),
        i.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }),
        i.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }),
        i.extend(m.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }),
        r(m, "top", "rgba(0,0,0,0)", "#000"),
        i.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        }),
        s(this.__hue_field),
        i.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }),
        t.bind(this.__saturation_field, "mousedown", d),
        t.bind(this.__field_knob, "mousedown", d),
        t.bind(this.__hue_field, "mousedown", function(e) {
            _(e),
            t.bind(window, "mousemove", _),
            t.bind(window, "mouseup", h)
        }),
        this.__saturation_field.appendChild(m),
        this.__selector.appendChild(this.__field_knob),
        this.__selector.appendChild(this.__saturation_field),
        this.__selector.appendChild(this.__hue_field),
        this.__hue_field.appendChild(this.__hue_knob),
        this.domElement.appendChild(this.__input),
        this.domElement.appendChild(this.__selector),
        this.updateDisplay()
    };
    a.superclass = e,
    i.extend(a.prototype, e.prototype, {
        updateDisplay: function() {
            var e = o(this.getValue());
            if (e !== !1) {
                var t = !1;
                i.each(n.COMPONENTS, function(n) {
                    return i.isUndefined(e[n]) || i.isUndefined(this.__color.__state[n]) || e[n] === this.__color.__state[n] ? void 0 : (t = !0,
                    {})
                }, this),
                t && i.extend(this.__color.__state, e)
            }
            i.extend(this.__temp.__state, this.__color.__state),
            this.__temp.a = 1;
            var s = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0
              , a = 255 - s;
            i.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
            }),
            this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px",
            this.__temp.s = 1,
            this.__temp.v = 1,
            r(this.__saturation_field, "left", "#fff", this.__temp.toString()),
            i.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + s + "," + s + "," + s + ")",
                textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
            })
        }
    });
    var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return a
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function(e, t, n, o) {
    function i(e, t, n) {
        Object.defineProperty(e, t, {
            get: function() {
                return "RGB" === this.__state.space ? this.__state[t] : (s(this, t, n),
                this.__state[t])
            },
            set: function(e) {
                "RGB" !== this.__state.space && (s(this, t, n),
                this.__state.space = "RGB"),
                this.__state[t] = e
            }
        })
    }
    function r(e, t) {
        Object.defineProperty(e, t, {
            get: function() {
                return "HSV" === this.__state.space ? this.__state[t] : (a(this),
                this.__state[t])
            },
            set: function(e) {
                "HSV" !== this.__state.space && (a(this),
                this.__state.space = "HSV"),
                this.__state[t] = e
            }
        })
    }
    function s(e, n, i) {
        if ("HEX" === e.__state.space)
            e.__state[n] = t.component_from_hex(e.__state.hex, i);
        else {
            if ("HSV" !== e.__state.space)
                throw "Corrupted color state";
            o.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
        }
    }
    function a(e) {
        var n = t.rgb_to_hsv(e.r, e.g, e.b);
        o.extend(e.__state, {
            s: n.s,
            v: n.v
        }),
        o.isNaN(n.h) ? o.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
    }
    var l = function() {
        if (this.__state = e.apply(this, arguments),
        this.__state === !1)
            throw "Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    return l.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"],
    o.extend(l.prototype, {
        toString: function() {
            return n(this)
        },
        toOriginal: function() {
            return this.__state.conversion.write(this)
        }
    }),
    i(l.prototype, "r", 2),
    i(l.prototype, "g", 1),
    i(l.prototype, "b", 0),
    r(l.prototype, "h"),
    r(l.prototype, "s"),
    r(l.prototype, "v"),
    Object.defineProperty(l.prototype, "a", {
        get: function() {
            return this.__state.a
        },
        set: function(e) {
            this.__state.a = e
        }
    }),
    Object.defineProperty(l.prototype, "hex", {
        get: function() {
            return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)),
            this.__state.hex
        },
        set: function(e) {
            this.__state.space = "HEX",
            this.__state.hex = e
        }
    }),
    l
}(dat.color.interpret, dat.color.math = function() {
    var e;
    return {
        hsv_to_rgb: function(e, t, n) {
            var o = Math.floor(e / 60) % 6
              , i = e / 60 - Math.floor(e / 60)
              , r = n * (1 - t)
              , s = n * (1 - i * t)
              , a = n * (1 - (1 - i) * t)
              , l = [[n, a, r], [s, n, r], [r, n, a], [r, s, n], [a, r, n], [n, r, s]][o];
            return {
                r: 255 * l[0],
                g: 255 * l[1],
                b: 255 * l[2]
            }
        },
        rgb_to_hsv: function(e, t, n) {
            var o, i, r = Math.min(e, t, n), s = Math.max(e, t, n), a = s - r;
            return 0 == s ? {
                h: 0 / 0,
                s: 0,
                v: 0
            } : (i = a / s,
            o = e == s ? (t - n) / a : t == s ? 2 + (n - e) / a : 4 + (e - t) / a,
            o /= 6,
            0 > o && (o += 1),
            {
                h: 360 * o,
                s: i,
                v: s / 255
            })
        },
        rgb_to_hex: function(e, t, n) {
            var o = this.hex_with_component(0, 2, e);
            return o = this.hex_with_component(o, 1, t),
            o = this.hex_with_component(o, 0, n)
        },
        component_from_hex: function(e, t) {
            return e >> 8 * t & 255
        },
        hex_with_component: function(t, n, o) {
            return o << (e = 8 * n) | t & ~(255 << e)
        }
    }
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), dat.dom.CenteredDiv = function(e, t) {
    var n = function() {
        this.backgroundElement = document.createElement("div"),
        t.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear",
            transition: "opacity 0.2s linear"
        }),
        e.makeFullscreen(this.backgroundElement),
        this.backgroundElement.style.position = "fixed",
        this.domElement = document.createElement("div"),
        t.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
            transition: "transform 0.2s ease-out, opacity 0.2s linear"
        }),
        document.body.appendChild(this.backgroundElement),
        document.body.appendChild(this.domElement);
        var n = this;
        e.bind(this.backgroundElement, "click", function() {
            n.hide()
        })
    };
    return n.prototype.show = function() {
        var e = this;
        this.backgroundElement.style.display = "block",
        this.domElement.style.display = "block",
        this.domElement.style.opacity = 0,
        this.domElement.style.webkitTransform = "scale(1.1)",
        this.layout(),
        t.defer(function() {
            e.backgroundElement.style.opacity = 1,
            e.domElement.style.opacity = 1,
            e.domElement.style.webkitTransform = "scale(1)"
        })
    }
    ,
    n.prototype.hide = function() {
        var t = this
          , n = function() {
            t.domElement.style.display = "none",
            t.backgroundElement.style.display = "none",
            e.unbind(t.domElement, "webkitTransitionEnd", n),
            e.unbind(t.domElement, "transitionend", n),
            e.unbind(t.domElement, "oTransitionEnd", n)
        };
        e.bind(this.domElement, "webkitTransitionEnd", n),
        e.bind(this.domElement, "transitionend", n),
        e.bind(this.domElement, "oTransitionEnd", n),
        this.backgroundElement.style.opacity = 0,
        this.domElement.style.opacity = 0,
        this.domElement.style.webkitTransform = "scale(1.1)"
    }
    ,
    n.prototype.layout = function() {
        this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px",
        this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
    }
    ,
    n
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
!function() {
    window.site = {
        routers: {},
        views: {},
        models: {},
        collections: {},
        utils: {},
        globals: {},
        settings: {
            minFrequency: 1200,
            deltaFrequency: 1500,
            detune: -1600,
            stagger: .05,
            outDuration: .25,
            inDuration: 1,
            easeParam0: 1.5,
            easeParam1: .5
        }
    }
}();
!function() {
    window.site.init = function() {
        site.$document = $(document),
        site.$window = $(window),
        site.events = _.clone(Backbone.Events),
        site.$window.on("resize", function() {
            site.events.trigger("resize")
        }),
        site.$window.on("scroll", function() {
            site.events.trigger("scroll")
        }),
        TweenMax.ticker.addEventListener("tick", function() {
            site.events.trigger("tick")
        });
        try {
            site.globals.audioContext = new (window.AudioContext || window.webkitAudioContext)
        } catch (e) {
            site.globals.audioContext = !1
        }
        new site.views.Loader,
        new site.views.Main,
        new site.routers.Main,
        site.events.trigger("loader.hide")
    }
    ,
    $(window.site.init)
}();
site.views.Content = Backbone.View.extend({
    events: {
        "click .back-button": "backButtonHandler"
    },
    loaded: !1,
    backButtonHandler: function(e) {
        e.preventDefault(),
        TweenMax.to(window, .75, {
            scrollTo: 0,
            ease: Power1.easeInOut,
            onComplete: function() {
                window.location.hash = ""
            }
        })
    },
    show: function() {
        return TweenMax.fromTo(this.el, .5, {
            y: 100,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            ease: Power3.easeOut,
            onComplete: this.showComplete,
            onCompleteScope: this
        })
    },
    hide: function() {
        return TweenMax.fromTo(this.el, .5, {
            y: 0,
            alpha: 1
        }, {
            y: 50,
            alpha: 0,
            ease: Power3.easeIn,
            onComplete: this.hideComplete,
            onCompleteScope: this
        })
    },
    loadComplete: function() {
        this.loaded = !0,
        site.events.trigger("content.loaded")
    },
    showComplete: function() {},
    hideComplete: function() {},
    detach: function() {
        this.$el.detach()
    },
    extend: function(e) {
        var t = Backbone.View.extend.apply(this, arguments);
        return t.prototype.events = _.extend({}, this.prototype.events, e.events),
        t
    }
});
site.views.ContentItem = Backbone.View.extend({
    events: {
        "click .toggle-button": "toggleButtonHandler"
    },
    collapsedHeight: 370,
    buttonPadding: 48,
    initialize: function() {
        TweenMax.set(this.$el, {
            height: this.collapsedHeight + "px"
        }),
        this.collapsed = !0
    },
    toggleButtonHandler: function(e) {
        e.preventDefault();
        var t = new TimelineMax;
        this.collapsed ? (t.set(this.$el, {
            height: "auto"
        }),
        t.from(this.$el, .25, {
            height: this.collapsedHeight + "px",
            ease: Power2.easeIn
        }),
        t.to(this.$el, .25, {
            paddingBottom: this.buttonPadding + "px",
            ease: Power2.easeOut
        }),
        t.to(this.$(".toggle-button"), .5, {
            rotation: 180,
            ease: Power2.easeInOut
        }, 0)) : (t.to(this.$el, .25, {
            paddingBottom: 0,
            ease: Power2.easeIn
        }),
        t.to(this.$el, .25, {
            height: this.collapsedHeight + "px",
            ease: Power2.easeOut
        }),
        t.to(this.$(".toggle-button"), .5, {
            rotation: 0,
            ease: Power2.easeInOut
        }, 0)),
        this.collapsed = !this.collapsed
    },
    extend: function(e) {
        var t = Backbone.View.extend.apply(this, arguments);
        return t.prototype.events = _.extend({}, this.prototype.events, e.events),
        t
    }
});
!function(t, n) {
    "function" == typeof define && define.amd ? define(["exports"], n) : "object" == typeof exports ? n(exports) : n(t.commonJsStrict = {})
}(this, function(t) {
    function n(t, n, o) {
        this.obj = t,
        this.left = null,
        this.right = null,
        this.parent = o,
        this.dimension = n
    }
    function o(t, o, e) {
        function r(t, o, i) {
            var l, u, h = o % e.length;
            return 0 === t.length ? null : 1 === t.length ? new n(t[0],h,i) : (t.sort(function(t, n) {
                return t[e[h]] - n[e[h]]
            }),
            l = Math.floor(t.length / 2),
            u = new n(t[l],h,i),
            u.left = r(t.slice(0, l), o + 1, u),
            u.right = r(t.slice(l + 1), o + 1, u),
            u)
        }
        function l(t) {
            function n(t) {
                t.left && (t.left.parent = t,
                n(t.left)),
                t.right && (t.right.parent = t,
                n(t.right))
            }
            u.root = t,
            n(u.root)
        }
        var u = this;
        Array.isArray(t) ? this.root = r(t, 0, null) : l(t, o, e),
        this.toJSON = function(t) {
            t || (t = this.root);
            var o = new n(t.obj,t.dimension,null);
            return t.left && (o.left = u.toJSON(t.left)),
            t.right && (o.right = u.toJSON(t.right)),
            o
        }
        ,
        this.insert = function(t) {
            function o(n, i) {
                if (null === n)
                    return i;
                var r = e[n.dimension];
                return t[r] < n.obj[r] ? o(n.left, n) : o(n.right, n)
            }
            var i, r, l = o(this.root, null);
            return null === l ? (this.root = new n(t,0,null),
            void 0) : (i = new n(t,(l.dimension + 1) % e.length,l),
            r = e[l.dimension],
            t[r] < l.obj[r] ? l.left = i : l.right = i,
            void 0)
        }
        ,
        this.remove = function(t) {
            function n(o) {
                if (null === o)
                    return null;
                if (o.obj === t)
                    return o;
                var i = e[o.dimension];
                return t[i] < o.obj[i] ? n(o.left, o) : n(o.right, o)
            }
            function o(t) {
                function n(t, o) {
                    var i, r, l, u, h;
                    return null === t ? null : (i = e[o],
                    t.dimension === o ? null !== t.left ? n(t.left, o) : t : (r = t.obj[i],
                    l = n(t.left, o),
                    u = n(t.right, o),
                    h = t,
                    null !== l && l.obj[i] < r && (h = l),
                    null !== u && u.obj[i] < h.obj[i] && (h = u),
                    h))
                }
                var i, r, l;
                return null === t.left && null === t.right ? null === t.parent ? (u.root = null,
                void 0) : (l = e[t.parent.dimension],
                t.obj[l] < t.parent.obj[l] ? t.parent.left = null : t.parent.right = null,
                void 0) : (null !== t.right ? (i = n(t.right, t.dimension),
                r = i.obj,
                o(i),
                t.obj = r) : (i = n(t.left, t.dimension),
                r = i.obj,
                o(i),
                t.right = t.left,
                t.left = null,
                t.obj = r),
                void 0)
            }
            var i;
            i = n(u.root),
            null !== i && o(i)
        }
        ,
        this.nearest = function(t, n, r) {
            function l(i) {
                function r(t, o) {
                    c.push([t, o]),
                    c.size() > n && c.pop()
                }
                var u, h, s, f, a = e[i.dimension], g = o(t, i.obj), p = {};
                for (f = 0; f < e.length; f += 1)
                    p[e[f]] = f === i.dimension ? t[e[f]] : i.obj[e[f]];
                return h = o(p, i.obj),
                null === i.right && null === i.left ? ((c.size() < n || g < c.peek()[1]) && r(i, g),
                void 0) : (u = null === i.right ? i.left : null === i.left ? i.right : t[a] < i.obj[a] ? i.left : i.right,
                l(u),
                (c.size() < n || g < c.peek()[1]) && r(i, g),
                (c.size() < n || Math.abs(h) < c.peek()[1]) && (s = u === i.left ? i.right : i.left,
                null !== s && l(s)),
                void 0)
            }
            var h, s, c;
            if (c = new i(function(t) {
                return -t[1]
            }
            ),
            r)
                for (h = 0; n > h; h += 1)
                    c.push([null, r]);
            for (u.root && l(u.root),
            s = [],
            h = 0; h < Math.min(n, c.content.length); h += 1)
                c.content[h][0] && s.push([c.content[h][0].obj, c.content[h][1]]);
            return s
        }
        ,
        this.balanceFactor = function() {
            function t(n) {
                return null === n ? 0 : Math.max(t(n.left), t(n.right)) + 1
            }
            function n(t) {
                return null === t ? 0 : n(t.left) + n(t.right) + 1
            }
            return t(u.root) / (Math.log(n(u.root)) / Math.log(2))
        }
    }
    function i(t) {
        this.content = [],
        this.scoreFunction = t
    }
    i.prototype = {
        push: function(t) {
            this.content.push(t),
            this.bubbleUp(this.content.length - 1)
        },
        pop: function() {
            var t = this.content[0]
              , n = this.content.pop();
            return this.content.length > 0 && (this.content[0] = n,
            this.sinkDown(0)),
            t
        },
        peek: function() {
            return this.content[0]
        },
        remove: function(t) {
            for (var n = this.content.length, o = 0; n > o; o++)
                if (this.content[o] == t) {
                    var i = this.content.pop();
                    return o != n - 1 && (this.content[o] = i,
                    this.scoreFunction(i) < this.scoreFunction(t) ? this.bubbleUp(o) : this.sinkDown(o)),
                    void 0
                }
            throw new Error("Node not found.")
        },
        size: function() {
            return this.content.length
        },
        bubbleUp: function(t) {
            for (var n = this.content[t]; t > 0; ) {
                var o = Math.floor((t + 1) / 2) - 1
                  , i = this.content[o];
                if (!(this.scoreFunction(n) < this.scoreFunction(i)))
                    break;
                this.content[o] = n,
                this.content[t] = i,
                t = o
            }
        },
        sinkDown: function(t) {
            for (var n = this.content.length, o = this.content[t], i = this.scoreFunction(o); ; ) {
                var e = 2 * (t + 1)
                  , r = e - 1
                  , l = null;
                if (n > r) {
                    var u = this.content[r]
                      , h = this.scoreFunction(u);
                    i > h && (l = r)
                }
                if (n > e) {
                    var s = this.content[e]
                      , c = this.scoreFunction(s);
                    (null == l ? i : h) > c && (l = e)
                }
                if (null == l)
                    break;
                this.content[t] = this.content[l],
                this.content[l] = o,
                t = l
            }
        }
    },
    this.kdTree = o,
    t.kdTree = o,
    t.BinaryHeap = i
});
site.models.Pen = Backbone.Model.extend({}),
site.collections.Pens = Backbone.Collection.extend({
    model: site.models.Pen,
    url: "data/pens.json"
});
site.models.Project = Backbone.Model.extend({}),
site.collections.Projects = Backbone.Collection.extend({
    model: site.models.Project,
    url: "data/projects.json"
});
site.models.Article = Backbone.Model.extend({}),
site.collections.Writing = Backbone.Collection.extend({
    model: site.models.Article,
    url: "data/writing.json"
});
site.routers.Main = Backbone.Router.extend({
    routes: {
        "": "showMainMenu",
        projects: "showProjects",
        lab: "showLab",
        writing: "showWriting",
        about: "showAbout"
    },
    initialize: function() {
        if (window.location.hash) {
            var o = window.location.hash.split("/")[1];
            o in this.routes ? (site.globals.fromDeeplink = !0,
            window.location.hash = "/" + o) : (site.globals.fromDeeplink = !1,
            window.location.hash = "")
        } else
            site.globals.fromDeeplink = !1;
        Backbone.history.start()
    },
    showMainMenu: function() {
        site.events.trigger("router.showMainMenu")
    },
    showProjects: function() {
        site.events.trigger("router.showProjectsView")
    },
    showLab: function() {
        site.events.trigger("router.showLabView")
    },
    showWriting: function() {
        site.events.trigger("router.showWritingView")
    },
    showAbout: function() {
        site.events.trigger("router.showAboutView")
    }
});
site.utils.ImageLoader = function() {}
,
site.utils.ImageLoader.prototype = {
    load: function(t, i) {
        this.img = document.createElement("img"),
        this.img.onload = i,
        this.img.src = t
    }
};
site.math = {},
site.math.intersect = function() {
    var t = {
        intersects: !1,
        x: 0,
        y: 0
    };
    return function(n, i, r, s) {
        var e = (s.x - r.x) * (n.y - r.y) - (s.y - r.y) * (n.x - r.x)
          , a = (i.x - n.x) * (n.y - r.y) - (i.y - n.y) * (n.x - r.x)
          , h = (s.y - r.y) * (i.x - n.x) - (s.x - r.x) * (i.y - n.y);
        if (t.intersects = !1,
        t.x = 0,
        t.y = 0,
        0 != h) {
            var u = e / h
              , o = a / h;
            u >= 0 && 1 >= u && o >= 0 && 1 >= o && (t.intersects = !0,
            t.x = n.x + u * (i.x - n.x),
            t.y = n.y + u * (i.y - n.y))
        }
        return t
    }
}(),
site.math.cubicBezier = function() {
    var t = {
        x: 0,
        y: 0
    };
    return function(n, i, r, s, e) {
        var a = 1 - e;
        return t.x = a * a * a * n.x + 3 * a * a * e * i.x + 3 * a * e * e * r.x + e * e * e * s.x,
        t.y = a * a * a * n.y + 3 * a * a * e * i.y + 3 * a * e * e * r.y + e * e * e * s.y,
        t
    }
}(),
site.math.clamp = function(t, n, i) {
    return n > t ? n : t > i ? i : t
}
,
site.math.map = function(t, n, i, r, s) {
    return (t - n) / (i - n) * (s - r) + r
}
,
site.math.wrap = function(t, n, i) {
    return ((t - n) % (i - n) + (i - n)) % (i - n) + n
}
,
site.math.easeInQuad = function(t, n, i, r) {
    return i * (t /= r) * t + n
}
,
site.math.easeOutQuad = function(t, n, i, r) {
    return -i * (t /= r) * (t - 2) + n
}
,
site.math.easeInCubic = function(t, n, i, r) {
    return i * (t /= r) * t * t + n
}
,
site.math.easeOutQuart = function(t, n, i, r) {
    return -i * ((t = t / r - 1) * t * t * t - 1) + n
}
,
site.math.Point = function(t, n) {
    this.x = t || 0,
    this.y = n || 0
}
,
site.math.Point.prototype = {
    sub: function(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this
    },
    copy: function(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    normalize: function() {
        var t = this.length();
        return this.x /= t,
        this.y /= t,
        this
    }
},
site.math.Range = function(t, n) {
    this.min = t,
    this.max = n
}
,
site.math.Range.random = function(t, n) {
    return t + (n - t) * Math.random()
}
,
site.math.Range.clamp = function(t, n, i) {
    return n > t ? n : t > i ? i : t
}
,
site.math.Range.wrap = function(t, n, i) {
    return ((t - n) % (i - n) + (i - n)) % (i - n) + n
}
,
site.math.Range.map = function(t, n, i, r, s) {
    return (t - n) / (i - n) * (s - r) + r
}
,
site.math.Range.prototype = {
    constructor: site.math.Range,
    random: function() {
        return this.constructor.random.call(this, this.min, this.max)
    },
    clamp: function(t) {
        return this.constructor.clamp.call(this, t, this.min, this.max)
    },
    wrap: function(t) {
        return this.constructor.wrap.call(this, t, this.min, this.max)
    },
    map: function(t, n) {
        return this.constructor.map.call(this, t, this.min, this.max, n.min, n.max)
    }
},
site.math.Color = function(t, n, i, r) {
    this.h = t,
    this.s = n,
    this.l = i,
    this.a = r
}
,
site.math.Color.prototype = {
    toString: function() {
        var t = this.l < 0 ? -this.l : this.l;
        return "hsla(" + this.h + "," + this.s + "%," + t + "%," + this.a + ")"
    }
};
site.utils.PointerTracker = function(t, i, e) {
    this.el = t,
    this.callback = _.bind(i, e),
    this.p0 = new site.math.Point(1 / 0,1 / 0),
    this.p1 = new site.math.Point,
    this.direction = new site.math.Point,
    this.velocity = 0,
    this.enabled = !0,
    site.$window.blur(_.bind(this.reset, this)),
    site.$window.on("touchend touchstart", _.bind(this.reset, this)),
    site.$window.on("mousemove", _.bind(this.mouseMoveHandler, this)),
    site.$window.on("touchmove", _.bind(this.touchMoveHandler, this)),
    site.globals.audioContext && (this._iOSHackTouchStartHandler = _.bind(this.iOSHackTouchStartHandler, this),
    window.addEventListener("touchstart", this._iOSHackTouchStartHandler))
}
,
site.utils.PointerTracker.prototype = {
    iOSHackTouchStartHandler: function() {
        var t = site.globals.audioContext.createGain()
          , i = site.globals.audioContext.createOscillator();
        t.gain.value = 0,
        i.connect(t),
        t.connect(site.globals.audioContext.destination),
        i.start(0),
        setTimeout(function() {
            t.disconnect(site.globals.audioContext.destination),
            i.disconnect(t),
            i.stop(0)
        }, 100),
        window.removeEventListener("touchstart", this._iOSHackTouchStartHandler)
    },
    touchMoveHandler: function(t) {
        this.enabled && t.preventDefault();
        var i = t.originalEvent.touches[0];
        this.update(i.pageX, i.pageY)
    },
    mouseMoveHandler: function(t) {
        this.update(t.clientX, t.clientY)
    },
    update: function(t, i) {
        var e = this.el.getBoundingClientRect();
        this.p0.x = this.p1.x,
        this.p0.y = this.p1.y,
        this.p1.x = t - e.left,
        this.p1.y = i - e.top,
        this.enabled !== !1 && (this.direction.x = this.p1.x - this.p0.x,
        this.direction.y = this.p1.y - this.p0.y,
        this.velocity = this.direction.length(),
        0 !== this.velocity && this.direction.normalize(),
        this.callback())
    },
    reset: function() {
        this.p1.x = 1 / 0,
        this.p1.y = 1 / 0
    },
    debugDraw: function(t) {
        t.lineWidth = 2,
        t.strokeStyle = "#f00",
        t.beginPath(),
        t.moveTo(this.p0.x, this.p0.y),
        t.lineTo(this.p1.x, this.p1.y),
        t.stroke()
    }
};
site.views.About = site.views.Content.extend({
    el: $("#about-view-template").html(),
    initialize: function() {
        this.settings = {
            width: 400,
            height: 400,
            threshold: 160,
            sampleScale: .5,
            maxWeight: 12,
            frameStep: 20,
            lineWidth: .1
        },
        this.initTitle(),
        this.initCanvas(),
        this.imageLoader = new site.utils.ImageLoader,
        this.imageLoader.load("img/me.jpg", _.bind(this.imageLoadedHandler, this))
    },
    initTitle: function() {
        var t = this.$("h1")
          , s = new Date
          , e = s.getHours()
          , i = "";
        switch (!0) {
        case 6 > e:
            i = "evening!";
            break;
        case 12 > e:
            i = "morning!";
            break;
        case 18 > e:
            i = "afternoon!";
            break;
        default:
            i = "evening!"
        }
        t.html("Good " + i)
    },
    initCanvas: function() {
        this.canvas = new site.views.Canvas({
            el: this.$("canvas")
        }),
        this.canvas.ctx.save(),
        this.osCanvas = new site.views.Canvas({
            autoResize: !1
        }),
        this.osCanvas.resize(this.settings.width, this.settings.height)
    },
    imageLoadedHandler: function() {
        this.loadComplete()
    },
    showComplete: function() {
        this.canvas.resize(),
        this.processImage(),
        this.resize(),
        site.events.on("tick", this.update, this),
        site.events.on("resize", this.resize, this)
    },
    hideComplete: function() {
        this.osCanvas.clear(),
        this.canvas.clear(),
        site.events.off("tick", this.update, this),
        site.events.off("resize", this.resize, this)
    },
    processImage: function() {
        var t = this.getPointsFromImage(this.imageLoader.img);
        this.generatePathFromPoints(t),
        this.osCanvas.clear(),
        this.frame = 0
    },
    getPointsFromImage: function(t) {
        var s = this.settings.threshold
          , e = this.settings.sampleScale
          , i = this.settings.maxWeight
          , a = 1 / e
          , n = this.osCanvas.height * e | 0;
        this.osCanvas.ctx.drawImage(t, 0, 0, n, n);
        for (var h = this.osCanvas.ctx.getImageData(0, 0, n, n), o = h.data, r = [], c = 0; c < o.length; c += 4) {
            var g = o[c]
              , v = o[c + 1]
              , m = o[c + 2]
              , d = (g + v + m) / 3 | 0
              , l = c / 4 % n * a
              , f = (c / 4 / n | 0) * a;
            if (d > s) {
                var u = {
                    x: l + site.math.Range.random(-.1, .1),
                    y: f + site.math.Range.random(-.1, .1),
                    weight: 0 | site.math.Range.map(d, s, 255, 1, i)
                };
                r.push(u)
            }
        }
        return r
    },
    generatePathFromPoints: function(t) {
        for (var s, e = (this.settings,
        Math.random), i = function(t, s) {
            var i = (t.x - s.x) * (e() - .5)
              , a = (t.y - s.y) * (e() - .5);
            return i * i + a * a
        }, a = ["x", "y"], n = new kdTree(t,i,a), h = new kdTree(t,i,a), o = [], r = t[0], c = t.length; c; )
            s = n.nearest(r, 1)[0][0],
            r = s,
            n.remove(r),
            o.push(r),
            c--;
        this.path = o,
        this.tree = h
    },
    update: function() {
        this.updateDrawing(),
        this.drawToCanvas()
    },
    updateDrawing: function() {
        var t, s = this.path[this.frame], e = 0, i = this.settings.frameStep, a = this.frame % 360, n = 80, h = 0;
        for (this.osCanvas.ctx.lineWidth = this.settings.lineWidth,
        this.osCanvas.ctx.strokeStyle = "hsl(" + a + "," + n + "%," + h + "%)"; ++e <= i && s; )
            this.osCanvas.ctx.beginPath(),
            this.osCanvas.ctx.moveTo(s.x, s.y),
            t = this.tree.nearest(s, s.weight),
            t.forEach(function(t) {
                this.osCanvas.ctx.lineTo(t[0].x, t[0].y)
            }, this),
            this.osCanvas.ctx.stroke(),
            s = this.path[++this.frame]
    },
    drawToCanvas: function() {
        this.canvas.ctx.clearRect(-1e3, 0, 3e3, this.canvas.height),
        this.canvas.ctx.drawImage(this.osCanvas.el, 0, 0, this.settings.width, this.settings.height)
    },
    resize: function() {
        this.canvas.ctx.restore(),
        this.canvas.ctx.translate(.5 * (this.canvas.width - this.settings.width), 0)
    }
});
site.views.Lab = site.views.Content.extend({
    el: $("#lab-view-template").html(),
    initialize: function() {
        this.$section = this.$(".article-container"),
        this.views = [],
        this.collection = new site.collections.Pens,
        this.listenTo(this.collection, "reset", this.renderPens),
        this.collection.fetch({
            reset: !0
        })
    },
    renderPens: function() {
        this.collection.each(function(e) {
            var t = new site.views.Pen({
                model: e
            });
            this.$section.append(t.render().el),
            this.views.push(t)
        }, this),
        this.loadComplete()
    },
    showComplete: function() {
        this.views.forEach(function(e) {
            e.showComplete()
        })
    },
    hideComplete: function() {
        this.views.forEach(function(e) {
            e.hideComplete()
        })
    }
});
site.views.Pen = site.views.ContentItem.extend({
    tagName: "article",
    className: "lab item",
    template: _.template($("#pen-view-template").html()),
    collapsedHeight: 420,
    render: function() {
        return this.$el.html(this.template(this.model.attributes)),
        this.$iframe = this.$("iframe"),
        this.iframeLoaded = !1,
        this
    },
    showComplete: function() {
        site.events.on("scroll", this.scrollHandler, this),
        site.events.on("resize", this.resizeHandler, this),
        this.loadOrUnloadIframe()
    },
    hideComplete: function() {
        site.events.off("scroll", this.scrollHandler, this),
        site.events.off("resize", this.resizeHandler, this),
        this.unloadIFrame()
    },
    scrollHandler: function() {
        this.loadOrUnloadIframe()
    },
    resizeHandler: function() {
        this.loadOrUnloadIframe()
    },
    loadOrUnloadIframe: function() {
        this.iframeLoaded === !0 && site.globals.windowWidthState < 3 ? this.unloadIFrame() : this.iframeLoaded === !1 && site.globals.windowWidthState >= 3 && this.$el.offset().top - site.$window.scrollTop() < window.innerHeight && this.loadIFrame()
    },
    loadIFrame: function() {
        this.$iframe.attr("src", this.formatIframeUrl(this.model.attributes.hash)),
        this.iframeLoaded = !0
    },
    unloadIFrame: function() {
        this.$iframe.attr("src", ""),
        this.iframeLoaded = !1
    },
    formatIframeUrl: function(e) {
        return "//codepen.io/x/embed/" + e + "/?height=350&theme-id=13864"
    }
});
site.views.Main = Backbone.View.extend({
    el: $("#main-view"),
    initialize: function() {
        this.$contentContainer = this.$("#content-container"),
        this.menuView = new site.views.Menu,
        this.contentView = null,
        this.viewCache = {},
        site.globals.audioContext ? this.guiView = new site.views.GUI : this.$(".gui-container").remove(),
        site.events.on("router.showMainMenu", this.showMainMenu, this),
        site.events.on("router.showProjectsView", this.showProjectsView, this),
        site.events.on("router.showWritingView", this.showWritingView, this),
        site.events.on("router.showLabView", this.showLabView, this),
        site.events.on("router.showAboutView", this.showAboutView, this),
        this.enquire()
    },
    getContentView: function(e) {
        return this.viewCache[e] || (this.viewCache[e] = new site.views[e]),
        this.viewCache[e]
    },
    showProjectsView: function() {
        this.contentView = this.getContentView("Projects"),
        this.showContentView(0)
    },
    showLabView: function() {
        this.contentView = this.getContentView("Lab"),
        this.showContentView(1)
    },
    showWritingView: function() {
        this.contentView = this.getContentView("Writing"),
        this.showContentView(2)
    },
    showAboutView: function() {
        this.contentView = this.getContentView("About"),
        this.showContentView(3)
    },
    showContentView: function(e) {
        this.$contentContainer.html(this.contentView.el);
        var t = new TimelineMax;
        t.set(this.el, {
            autoAlpha: 1
        }),
        this.guiView && t.add(this.guiView.hide()),
        t.add(this.menuView.setContentState(e), 0),
        this.contentView.loaded ? (t.add(this.contentView.show(), "-=0.5"),
        t.add(this.menuView.showCloseButton(), "-=0.5")) : (t.addPause("+=0", function() {
            this.contentView.loaded ? t.resume() : (site.events.trigger("loader.show"),
            site.events.once("content.loaded", t.resume, t))
        }, null, this),
        t.addCallback(function() {
            site.events.trigger("loader.hide")
        }),
        t.add(this.contentView.show()),
        t.add(this.menuView.showCloseButton(), "-=0.5")),
        site.globals.fromDeeplink && (t.progress(1),
        site.globals.fromDeeplink = !1)
    },
    showMainMenu: function() {
        var e = new TimelineMax;
        this.contentView ? (e.add(this.menuView.hideCloseButton()),
        e.add(this.contentView.hide(), "-=0.5"),
        e.call(_.bind(this.contentView.detach, this.contentView)),
        e.add(this.menuView.setMenuState())) : (e.to(this.el, .5, {
            autoAlpha: 1
        }, .5),
        e.add(this.menuView.animateMenuItems())),
        this.guiView && e.add(this.guiView.show())
    },
    enquire: function() {
        var e = [0, 40]
          , t = [40.063, 50]
          , i = [50.063, 90];
        enquire.register("(max-width: " + e[1] + "em)", {
            match: function() {
                site.globals.windowWidthState = 1,
                site.globals.menuContentStateTop = 32,
                site.events.trigger("resize")
            }
        }),
        enquire.register("(min-width: " + t[0] + "em) and (max-width: " + t[1] + "em)", {
            match: function() {
                site.globals.windowWidthState = 2,
                site.globals.menuContentStateTop = 48,
                site.events.trigger("resize")
            }
        }),
        enquire.register("(min-width: " + i[0] + "em)", {
            match: function() {
                site.globals.windowWidthState = 3,
                site.globals.menuContentStateTop = 80,
                site.events.trigger("resize")
            }
        })
    }
});
site.views.Menu = Backbone.View.extend({
    el: $("#menu-view"),
    initialize: function() {
        this.$closeButton = this.$el.find(".close-button"),
        this.closeButtonClasses = ["projects", "lab", "writing", "about"],
        this.lineSpacing = 120,
        this.initMenuCanvas(),
        this.initMenuItems(),
        this.initPointerTracker(),
        site.globals.audioContext && (site.events.on("gui.change", this.applyAudioSettings, this),
        site.events.on("gui.animate", this.animateMenuItems, this),
        this.applyAudioSettings()),
        site.events.on("tick", _.bind(this.update, this)),
        site.events.on("resize", _.bind(this.resize, this)),
        this.disable()
    },
    initMenuCanvas: function() {
        this.menuCanvas = new site.views.Canvas({
            el: "#menu-canvas"
        })
    },
    initMenuItems: function() {
        var e = this.$el.find(".main-menu .border-button")
          , t = [10, 160, 200, 270];
        this.menuItems = [];
        for (var i = 0; i < e.length; i++) {
            var n = new site.views.MenuItem({
                el: e[i]
            });
            n.color.h = t[i],
            site.globals.audioContext && n.initAudioNodes(),
            this.menuItems.push(n)
        }
    },
    applyAudioSettings: function() {
        for (var e, t = 0; t < this.menuItems.length; t++)
            e = this.menuItems[t],
            e.oscillatorNode.frequency.value = site.settings.minFrequency + site.settings.deltaFrequency * t,
            e.oscillatorNode.detune.value = site.settings.detune
    },
    initPointerTracker: function() {
        this.pointerTracker = new site.utils.PointerTracker(this.menuCanvas.el,this.pointerMoveHandler,this)
    },
    animateMenuItems: function() {
        var e = new TimelineMax({
            onComplete: this.enable,
            onCompleteScope: this
        })
          , t = 100
          , i = new site.math.Point(0,1)
          , n = site.settings.stagger;
        return this.menuItems.forEach(function(s, a) {
            var o = s.stretch(i, t);
            o && e.add(o, n * a)
        }),
        e
    },
    enable: function() {
        _.invoke(this.menuItems, "enable"),
        this.pointerTracker.enabled = !0
    },
    disable: function() {
        _.invoke(this.menuItems, "disable"),
        this.pointerTracker.enabled = !1
    },
    pointerMoveHandler: function() {
        this.menuItems.forEach(function(e) {
            var t = site.math.intersect(e.p0, e.p1, this.pointerTracker.p0, this.pointerTracker.p1);
            t.intersects && e.stretch(this.pointerTracker.direction, this.pointerTracker.velocity)
        }, this)
    },
    update: function() {
        this.menuCanvas.clear(),
        this.menuItems.forEach(function(e) {
            e.render(this.menuCanvas.ctx)
        }, this)
    },
    setContentState: function(e) {
        this.activeIndex = e,
        this.$closeButton.removeClass(this.closeButtonClasses.join(" ")),
        this.$closeButton.addClass(this.closeButtonClasses[e]),
        this.disable();
        for (var t = new TimelineMax, i = .3, n = 0; n < this.menuItems.length; n++)
            n === e ? t.add(this.menuItems[n].animateTop(site.globals.menuContentStateTop), i) : t.add(this.menuItems[n].hide(), 0);
        return t
    },
    setMenuState: function() {
        var e = new TimelineMax
          , t = this.lineSpacing * this.activeIndex + this.menuTop;
        e.add(this.menuItems[this.activeIndex].animateTop(t)),
        e.add("hide-active-complete");
        for (var i = 0; i < this.menuItems.length; i++)
            i !== this.activeIndex && e.add(this.menuItems[i].show(), "hide-active-complete-=0.2");
        return e.call(this.enable, null, this),
        this.activeIndex = -1,
        e
    },
    showCloseButton: function() {
        var e = new TimelineMax;
        return e.set(this.$closeButton, {
            autoAlpha: 1
        }),
        e.fromTo(this.$closeButton, .4, {
            y: -120
        }, {
            y: 0,
            ease: Power3.easeOut
        }),
        e
    },
    hideCloseButton: function() {
        var e = new TimelineMax;
        return e.fromTo(this.$closeButton, .4, {
            y: 0
        }, {
            y: -120,
            ease: Power3.easeIn
        }),
        e.set(this.$closeButton, {
            autoAlpha: 0
        }),
        e
    },
    resize: function() {
        this.menuHeight = (this.menuItems.length - 1) * this.lineSpacing,
        this.menuTop = .5 * (this.el.clientHeight - this.menuHeight);
        for (var e = 0; e < this.menuItems.length; e++) {
            var t = this.menuItems[e];
            t.top = e === this.activeIndex ? site.globals.menuContentStateTop : this.menuTop + this.lineSpacing * e,
            t.width = this.el.clientWidth,
            t.resize()
        }
    }
});
site.views.MenuItem = Backbone.View.extend({
    initialize: function() {
        this.el.style.marginLeft = Math.floor(this.el.clientWidth * -.5) + "px",
        this.el.style.marginTop = Math.floor(this.el.clientHeight * -.5) + "px",
        this.width = 0,
        this.top = 0,
        this.p0 = new site.math.Point,
        this.p1 = new site.math.Point,
        this.control = new site.math.Point,
        this.anchor = new site.math.Point,
        this.color = new site.math.Color(0,75,0,1),
        this.maxLightness = 60,
        this.maxVolume = .2,
        this.dragDistance = 0,
        this.locked = !1,
        site.events.on("gui.change", this.updateEaseParams, this),
        this.updateEaseParams(),
        this.makeDraggable()
    },
    updateEaseParams: function() {
        this.elasticParams = [site.settings.easeParam0, site.settings.easeParam1]
    },
    makeDraggable: function() {
        this.draggable = Draggable.create(this.el, {
            type: "x,y",
            cursor: "pointer",
            dragClickables: !0,
            minimumMovement: 4,
            onDragStart: function() {
                TweenMax.killTweensOf(this.el),
                TweenMax.killTweensOf(this.control),
                TweenMax.killTweensOf(this.color),
                this.gainNode && (this.gainNode.gain.value = 0,
                TweenMax.killTweensOf(this.gainNode.gain)),
                this.locked = !0
            },
            onDragStartScope: this,
            onDrag: function(t) {
                var e = this.el._gsTransform.x - this.anchor.x
                  , i = this.el._gsTransform.y - this.anchor.y
                  , s = 1.3;
                this.dragDistance = Math.sqrt(e * e + i * i),
                this.control.x = this.anchor.x + e * s,
                this.control.y = this.anchor.y + i * s,
                this.color.l = site.math.easeOutQuart(this.dragDistance, 0, this.maxLightness, this.maxDragDistance),
                this.dragDistance > this.maxDragDistance && this.draggable.endDrag(t)
            },
            onDragScope: this,
            onDragEnd: function() {
                if (this.snapBackTween = new TimelineMax({
                    onComplete: function() {
                        this.locked = !1
                    },
                    onCompleteScope: this
                }),
                this.snapBackTween.to(this.el, site.settings.inDuration, {
                    x: this.anchor.x,
                    y: this.anchor.y,
                    ease: Elastic.easeOut,
                    easeParams: this.easeParams
                }, 0),
                this.snapBackTween.to(this.control, site.settings.inDuration, {
                    x: this.anchor.x,
                    y: this.anchor.y,
                    ease: Elastic.easeOut,
                    easeParams: this.easeParams
                }, 0),
                this.snapBackTween.to(this.color, site.settings.inDuration, {
                    l: 0,
                    ease: Elastic.easeOut,
                    easeParams: this.easeParams
                }, 0),
                this.gainNode) {
                    var t = site.math.easeInQuad(this.dragDistance, 0, .15, this.maxDragDistance);
                    this.snapBackTween.fromTo(this.gainNode.gain, site.settings.inDuration, {
                        value: t
                    }, {
                        value: 0,
                        ease: Elastic.easeOut,
                        easeParams: this.easeParams
                    }, 0)
                }
            },
            onDragEndScope: this
        })[0]
    },
    initAudioNodes: function() {
        this.oscillatorNode = site.globals.audioContext.createOscillator(),
        this.oscillatorNode.type = "sine",
        this.oscillatorNode.start(0),
        this.gainNode = site.globals.audioContext.createGain(),
        this.gainNode.gain.value = 0,
        this.oscillatorNode.connect(this.gainNode),
        this.gainNode.connect(site.globals.audioContext.destination)
    },
    makeClickSound: function() {
        return TweenMax.fromTo(this.gainNode.gain, 1, {
            value: .15
        }, {
            value: 0,
            ease: Elastic.easeOut
        })
    },
    resize: function() {
        this.p0.x = 0,
        this.p0.y = this.top,
        this.p1.x = this.width,
        this.p1.y = this.top,
        this.anchor.x = this.control.x = .5 * this.width,
        this.anchor.y = this.control.y = this.top,
        this.maxDragDistance = .25 * window.innerHeight,
        this.maxPointerVelocity = .2 * window.innerHeight
    },
    stretch: function(t, e) {
        if (this.locked)
            return null;
        var i = 1
          , s = this.maxPointerVelocity;
        e = site.math.clamp(e, i, s);
        var a = new TimelineMax
          , n = this.anchor.x + t.x * e
          , o = this.anchor.y + t.y * e
          , h = site.math.easeOutQuart(e, 0, this.maxLightness, s)
          , r = site.settings.outDuration
          , l = site.settings.inDuration;
        if (a.to(this.control, r, {
            x: n,
            y: o,
            ease: Cubic.easeOut
        }, 0),
        a.to(this.control, l, {
            x: this.anchor.x,
            y: this.anchor.y,
            ease: Elastic.easeOut,
            easeParams: this.elasticParams
        }, r),
        a.to(this.color, r, {
            l: h,
            ease: Cubic.easeOut
        }, 0),
        a.to(this.color, l, {
            l: 0,
            ease: Elastic.easeOut,
            easeParams: this.elasticParams
        }, r),
        this.gainNode) {
            var c = site.math.easeInQuad(e, 0, this.maxVolume, s);
            a.to(this.gainNode.gain, r, {
                value: c,
                ease: Cubic.easeOut
            }, 0),
            a.to(this.gainNode.gain, l, {
                value: 0,
                ease: Elastic.easeOut,
                easeParams: this.elasticParams
            }, r)
        }
        return a
    },
    animateTop: function(t) {
        var e = new TimelineMax
          , i = Math.abs(this.anchor.y - t)
          , s = 600
          , a = Math.max(.6, i / s);
        return this.anchor.y = t,
        e.to(this.p0, .5 * a, {
            y: t,
            ease: Cubic.easeInOut
        }, 0),
        e.to(this.p1, .5 * a, {
            y: t,
            ease: Cubic.easeInOut
        }, 0),
        e.to(this.control, a, {
            y: t,
            ease: Elastic.easeOut
        }, .25 * a),
        e
    },
    show: function() {
        var t = new TimelineMax({
            onStart: function() {
                TweenMax.set(this.el, {
                    autoAlpha: 1
                })
            },
            onStartScope: this
        });
        return t.to(this.color, .25, {
            a: 1
        }, 0),
        t.to(this.el, .25, {
            color: "#000000"
        }, 0),
        t
    },
    hide: function() {
        var t = new TimelineMax;
        return t.to(this.color, .25, {
            a: 0
        }, 0),
        t.to(this.el, .25, {
            color: "#f1f1f1"
        }, 0),
        t.set(this.el, {
            autoAlpha: 0
        }),
        t
    },
    enable: function() {
        this.$el.toggleClass("disabled", !1),
        this.draggable.enable()
    },
    disable: function() {
        this.$el.toggleClass("disabled", !0),
        this.draggable.disable()
    },
    render: function(t) {
        t.fillStyle = t.strokeStyle = this.color.toString(),
        t.lineWidth = 2,
        t.beginPath(),
        t.moveTo(this.p0.x, this.p0.y),
        t.bezierCurveTo(this.control.x, this.control.y, this.control.x, this.control.y, this.p1.x, this.p1.y),
        t.stroke();
        var e = 8
          , i = .5 * e;
        t.fillRect(this.p0.x, this.p0.y - i, e, e),
        t.fillRect(this.p1.x - e, this.p1.y - i, e, e),
        this.el.style.outlineColor = this.color;
        var s = site.math.cubicBezier(this.p0, this.control, this.control, this.p1, .5);
        TweenMax.set(this.el, {
            x: 0 | s.x,
            y: 0 | s.y
        })
    }
});
site.views.Canvas = Backbone.View.extend({
    tagName: "canvas",
    initialize: function(i) {
        this.ctx = this.el.getContext("2d"),
        this.ctx.save(),
        this.pixelRatio = window.devicePixelRatio,
        this.resize = _.bind(this.resize, this),
        this.autoResize(i.autoResize !== !1)
    },
    autoResize: function(i) {
        return void 0 === i ? this._autoResize : (this._autoResize = i,
        i ? (site.events.on("resize", this.resize),
        this.resize()) : site.events.off("resize", this.resize),
        void 0)
    },
    clear: function() {
        this.ctx.clearRect(0, 0, this.el.width, this.el.height)
    },
    resize: function(i, t) {
        this.width = this.el.width = (i || this.el.clientWidth) * this.pixelRatio,
        this.height = this.el.height = (t || this.el.clientHeight) * this.pixelRatio,
        this.ctx.restore(),
        this.ctx.scale(this.pixelRatio, this.pixelRatio),
        this.ctx.save()
    }
});
site.views.GUI = Backbone.View.extend({
    el: ".gui-container",
    events: {
        "click .settings-button": "toggleOpen"
    },
    initialize: function() {
        this.gui = new dat.GUI,
        this.gui.add(site.settings, "minFrequency", 100, 1e4).step(1).name("min frequency").onChange(_.bind(this.dispatchChange, this)),
        this.gui.add(site.settings, "deltaFrequency", 100, 2e3).step(1).name("delta frequency").onChange(_.bind(this.dispatchChange, this)),
        this.gui.add(site.settings, "detune", -5e3, 5e3).step(1).name("detune").onChange(_.bind(this.dispatchChange, this)),
        this.gui.add(site.settings, "stagger", 0, 1).name("stagger"),
        this.gui.add(site.settings, "outDuration", .1, 5).name("out duration"),
        this.gui.add(site.settings, "inDuration", .1, 5).name("back duration"),
        this.gui.add(site.settings, "easeParam0", .01, 5).name("ease amplitude").onChange(_.bind(this.dispatchChange, this)),
        this.gui.add(site.settings, "easeParam1", .01, 5).name("ease period").onChange(_.bind(this.dispatchChange, this)),
        this.gui.add(this, "dispatchAnimate").name("animate!"),
        this.gui.width = 289,
        this.$el.append(this.gui.domElement)
    },
    dispatchChange: function() {
        site.events.trigger("gui.change")
    },
    dispatchAnimate: function() {
        site.events.trigger("gui.animate")
    },
    toggleOpen: function(e) {
        e.preventDefault(),
        this.$el.toggleClass("gui-container-open")
    },
    show: function() {
        return TweenMax.fromTo(this.el, .25, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        })
    },
    hide: function() {
        return TweenMax.fromTo(this.el, .25, {
            autoAlpha: 1
        }, {
            autoAlpha: 0
        })
    }
});
site.views.Loader = Backbone.View.extend({
    el: ".loader-container",
    initialize: function() {
        site.events.on("loader.show", this.show, this),
        site.events.on("loader.hide", this.hide, this)
    },
    show: function() {
        this.$el.show()
    },
    hide: function() {
        this.$el.hide()
    }
});
site.views.Project = site.views.ContentItem.extend({
    tagName: "article",
    className: "projects item",
    template: _.template($("#project-view-template").html()),
    render: function() {
        return this.$el.html(this.template(this.model.attributes)),
        this.model.attributes.banner || this.$(".banner").remove(),
        this
    }
});
site.views.Projects = site.views.Content.extend({
    el: $("#projects-view-template").html(),
    initialize: function() {
        this.$section = this.$(".article-container"),
        this.collection = new site.collections.Projects,
        this.listenTo(this.collection, "reset", this.renderProjects),
        this.collection.fetch({
            reset: !0
        })
    },
    renderProjects: function() {
        this.collection.each(function(e) {
            var t = new site.views.Project({
                model: e
            });
            this.$section.append(t.render().el)
        }, this),
        this.loadComplete()
    }
});
site.views.Article = site.views.ContentItem.extend({
    tagName: "article",
    className: "writing item",
    template: _.template($("#article-view-template").html()),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        var t, e = this.model.attributes.links;
        if (e.length > 1) {
            var i = $("<ul>");
            this.$("p").append(i);
            for (var a = 0; a < e.length; a++)
                t = this.formatLink(e[a]),
                i.append("<li>" + t + "</li>")
        } else
            t = this.formatLink(e[0]),
            this.$("small").append(" | " + t);
        return this
    },
    formatLink: function(t) {
        return '<a target="_blank" href="' + t.url + '">' + t.text + "</a>"
    }
});
site.views.Writing = site.views.Content.extend({
    el: $("#writing-view-template").html(),
    initialize: function() {
        this.$section = this.$(".article-container"),
        this.collection = new site.collections.Writing,
        this.listenTo(this.collection, "reset", this.renderArticles),
        this.collection.fetch({
            reset: !0
        })
    },
    renderArticles: function() {
        this.collection.each(function(e) {
            var i = new site.views.Article({
                model: e
            });
            this.$section.append(i.render().el)
        }, this),
        this.loadComplete()
    }
});
