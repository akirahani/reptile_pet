/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) { "use strict"; var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.6.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) { var t = !!e && "length" in e && e.length,
            n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }
    S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return S.each(this, e) }, map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                a = []; if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: v }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function(n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) { return e === t && (l = !0), 0 },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) { var n = e.length,
                        r = 0; while (e[n++] = t[r++]);
                    e.length = n - 1 } } }

        function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace(B, "$1"), e, n, r) }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { var n = e.split("|"),
                r = n.length; while (r--) b.attrHandle[n[r]] = t }

        function pe(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ye(a) { return le(function(o) { return o = +o, le(function(e, t) { var n, r = a([], e.length, o),
                        i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ve(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function(e) { var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function(e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0; while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1 }, j = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return l = !0, 0; var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t);
                    n = e; while (n = n.parentNode) a.unshift(n);
                    n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), v(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, n = [],
                    r = 0,
                    i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function(e) { var t, n = "",
                    r = 0,
                    i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(h, e, t, g, y) { var v = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e; return 1 === g && 0 === y ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1; if (c) { if (v) { while (l) { a = e; while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= y) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) { var n, r = a(e, o),
                                i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function(e) { var r = [],
                            i = [],
                            s = f(e.replace(B, "$1")); return s[S] ? le(function(e, t, n, r) { var i, o = s(e, null, r, []),
                                a = e.length; while (a--)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function(t) { return function(e) { return 0 < se(t, e).length } }), contains: le(function(t) { return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function(n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) { var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === a }, focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return J.test(e.nodeName) }, input: function(e) { return Q.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ye(function() { return [0] }), last: ye(function(e, t) { return [t - 1] }), eq: ye(function(e, t, n) { return [n < 0 ? n + t : n] }), even: ye(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: ye(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: ye(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }), gt: ye(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) { var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++; return e.first ? function(e, t, n) { while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1 } : function(e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } }

        function we(i) { return 1 < i.length ? function(e, t, n) { var r = i.length; while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0 } : i[0] }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, y, v, e) { return y && !y[S] && (y = Ce(y)), v && !v[S] && (v = Ce(v, e)), le(function(e, t, n, r) { var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f; if (g && g(f, p, n, r), y) { i = Te(p, u), y(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (v || d) { if (v) { i = [], o = p.length; while (o--)(a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r) }
                        o = p.length; while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p) }) }

        function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) }
                    c.push(t) }
            return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function(e, t) { var n, y, v, m, x, r, i = [],
                o = [],
                a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function(e, t, n, r, i) { var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = y[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h) }
                        m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = v[a++]) s(c, f, t, n); if (e) { if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f) }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t), n }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function(e, t, n) { var r = [],
                i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) { if (i && S(e).is(n)) break;
                    r.push(e) }
            return r },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function() { for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(j(this, e || [], !1)) }, not: function(e) { return this.pushStack(j(this, e || [], !0)) }, is: function(e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || D, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, D = S(E); var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({ has: function(e) { var t = S(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e); if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) { var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, S.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, "catch": function(e) { return a.then(null, e) }, pipe: function() { var i = arguments; return S.Deferred(function(r) { S.each(o, function(e, t) { var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function(t, n, r) { var u = 0;

                        function l(i, o, a, s) { return function() { var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function(e) { return null != e ? S.extend(e, a) : a } },
                s = {}; return S.each(o, function(e, t) { var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) }; var F = S.Deferred();

    function $() { E.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $)); var B = function(e, t, n, r, i, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === w(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n) } else n = void 0;
        return n }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function(n, e) { var t, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : B(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { Q.remove(this, e) }) } }), S.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ye(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ve(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0; while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^([^.]*)(?:\.(.+)|)/;

    function we() { return !0 }

    function Te() { return !1 }

    function Ce(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ee(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) }) }

    function Se(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function(e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, we) }
    S.event = { global: {}, add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e); if (y && (u = y.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle), delete u[d]) } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(t, e) { S.event.special[t] = { setup: function() { return Se(this, t, Ce), !1 }, trigger: function() { return Se(this, t), !0 }, _default: function(e) { return Y.get(e.target, t) }, delegateType: e } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function(e) { var t, n = e.relatedTarget,
                    r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function(e, t, n, r) { return Ee(this, e, t, n, r) }, one: function(e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() { S.event.remove(this, e, n, t) }) } }); var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Le(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } }

    function He(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d); if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function(e) { var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ye(u, "script"))), i.call(n[c], u, c); if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l)) } return n }

    function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e); if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c }, cleanData: function(e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) { if (t = n[Y.expando]) { if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0 }
                    n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function(e) { return Oe(this, e, !0) }, remove: function(e) { return Oe(this, e) }, text: function(e) { return B(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return He(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) }, prepend: function() { return He(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = je(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return He(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return He(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ye(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) }, html: function(e) { return B(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return He(this, arguments, function(e) { var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ye(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Ie = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) { var r, i, o, a, s = Re.test(t),
            u = e.style; return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && (a = a.replace($e, "$1")), "" !== a || ie(e) || (a = S.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a }

    function _e(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } }

        function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(v, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } })) }(); var ze = ["Webkit", "Moz", "ms"],
        Ue = E.createElement("div").style,
        Xe = {};

    function Ve(e) { var t = S.cssProps[e] || Xe[e]; return t || (e in Ue ? e : Xe[e] = function(e) { var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length; while (n--)
                if ((e = ze[n] + t) in Ue) return e }(e) || e) } var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function Ze(e, t, n) { var r = Me(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (Pe.test(a)) { if (!n) return a;
            a = "auto" } return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t),
                    u = Re.test(t),
                    l = e.style; if (u || (t = Ve(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = X(t); return Re.test(t) || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function(e, u) { S.cssHooks[u] = { get: function(e, t, n) { if (t) return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() { return Ze(e, u, n) }) }, set: function(e, t, n) { var r, i = Me(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s) } } }), S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({ css: function(e, t) { return B(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {}; var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ct(e, t, n) { for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function ft(o, e, t) { var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || ut(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }),
            c = l.props; for (! function(e, t) { var n, r, i, o, a; for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l }
    S.Animation = S.extend(ft, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                y = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !y || void 0 === y[r]) continue;
                        g = !0 }
                    d[r] = y && y[r] || S.style(e, r) }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) } }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(t, e, n, r) { var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() { var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(i, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() { var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]); for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || S.dequeue(this, i) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), S.each(["toggle", "show", "hide"], function(e, r) { var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) } }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() { var e, t = 0,
            n = S.timers; for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0 }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) { var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) } }) }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value; var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return B(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!v.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(P); if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n) } }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) { var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r } }); var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) { return (e.match(P) || []).join(" ") }

    function vt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return B(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), v.optSelected || (S.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function(t) { var e, n, r, i, o, a; return m(t) ? this.each(function(e) { S(this).addClass(t.call(this, e, vt(this))) }) : (e = mt(t)).length ? this.each(function() { if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") { for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a) } }) : this }, removeClass: function(t) { var e, n, r, i, o, a; return m(t) ? this.each(function(e) { S(this).removeClass(t.call(this, e, vt(this))) }) : arguments.length ? (e = mt(t)).length ? this.each(function() { if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") { for (o = 0; o < e.length; o++) { i = e[o]; while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ") }
                    a = yt(n), r !== a && this.setAttribute("class", a) } }) : this : this.attr("class", "") }, toggleClass: function(t, n) { var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t); return m(t) ? this.each(function(e) { S(this).toggleClass(t.call(this, e, vt(this), n), n) }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function() { if (s)
                    for (o = S(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || "")) })) }, hasClass: function(e) { var t, n, r = 0;
            t = " " + e + " "; while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1 } }); var xt = /\r/g;
    S.fn.extend({ val: function(n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : yt(S.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length; while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, v.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), v.focusin = "onfocusin" in C; var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, { trigger: function(e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E],
                d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) }
                i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function(e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), v.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) { var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = { setup: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) {} return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) { return e.textContent }).join("\n") : e)), t }; var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) jt(n + "[" + t + "]", e[t], r, i) }
    S.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) jt(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } }); var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0,
                i = e.toLowerCase().match(P) || []; if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function $t(t, i, o, a) { var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") }

    function Bt(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e) }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, y = S.ajaxSetup({}, t),
                v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = y.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return h ? p : null }, setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == h && (y.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) { r = E.createElement("a"); try { r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { y.crossDomain = !0 } } if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T; for (i in (g = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]); if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort(); if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, y.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, r) { var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { var r, i, o, a, s = e.contents,
                        u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i) }
                        o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(y, T, n)), !i && -1 < S.inArray("script", y.dataTypes) && S.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}), s = function(e, t, n, r) { var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift(); while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return S.get(e, t, n, "json") }, getScript: function(e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} }; var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, S.ajaxTransport(function(i) { var o, a; if (v.cors || zt && !i.crossDomain) return { send: function(e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } }); var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), v.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, S.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) { var o = "pageYOffset" === i;
        S.fn[t] = function(e) { return B(this, function(e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = _e(v.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) { S.fn[o] = function(e, t) { var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border"); return B(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "$1") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S }); var Yt = C.jQuery,
        Qt = C.$; return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });
/* Sticky Plugin v1.0.4 for jQuery */
! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) { var e = Array.prototype.slice,
        i = Array.prototype.splice,
        n = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", widthFromWrapper: !0, responsiveWidth: !1, zIndex: "inherit" },
        r = t(window),
        s = t(document),
        o = [],
        c = r.height(),
        p = function() { for (var e = r.scrollTop(), i = s.height(), n = i - c, p = e > n ? n - e : 0, a = 0, d = o.length; a < d; a++) { var l = o[a],
                    h = l.stickyWrapper.offset().top - l.topSpacing - p; if (l.stickyWrapper.css("height", l.stickyElement.outerHeight()), e <= h) null !== l.currentTop && (l.stickyElement.css({ width: "", position: "", top: "", "z-index": "999" }), l.stickyElement.parent().removeClass(l.className), l.stickyElement.trigger("sticky-end", [l]), l.currentTop = null);
                else { var u, g = i - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - p; if (g < 0 ? g += l.topSpacing : g = l.topSpacing, l.currentTop !== g) l.getWidthFrom ? (padding = l.stickyElement.innerWidth() - l.stickyElement.width(), u = t(l.getWidthFrom).width() - padding || null) : l.widthFromWrapper && (u = l.stickyWrapper.width()), null == u && (u = l.stickyElement.width()), l.stickyElement.css("width", u).css("position", "fixed").css("top", g).css("z-index", l.zIndex), l.stickyElement.parent().addClass(l.className), null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]), l.currentTop === l.topSpacing && l.currentTop > g || null === l.currentTop && g < l.topSpacing ? l.stickyElement.trigger("sticky-bottom-reached", [l]) : null !== l.currentTop && g === l.topSpacing && l.currentTop < g && l.stickyElement.trigger("sticky-bottom-unreached", [l]), l.currentTop = g; var m = l.stickyWrapper.parent();
                    l.stickyElement.offset().top + l.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && l.stickyElement.offset().top <= l.topSpacing ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : l.stickyElement.css("position", "fixed").css("top", g).css("bottom", "").css("z-index", l.zIndex) } } },
        a = function() { c = r.height(); for (var e = 0, i = o.length; e < i; e++) { var n = o[e],
                    s = null;
                n.getWidthFrom ? n.responsiveWidth && (s = t(n.getWidthFrom).width()) : n.widthFromWrapper && (s = n.stickyWrapper.width()), null != s && n.stickyElement.css("width", s) } },
        d = { init: function(e) { return this.each(function() { var i = t.extend({}, n, e),
                        r = t(this),
                        s = r.attr("id"),
                        c = s ? s + "-" + n.wrapperClassName : n.wrapperClassName,
                        p = t("<div></div>").attr("id", c).addClass(i.wrapperClassName);
                    r.wrapAll(function() { if (0 == t(this).parent("#" + c).length) return p }); var a = r.parent();
                    i.center && a.css({ width: r.outerWidth(), marginLeft: "auto", marginRight: "auto" }), "right" === r.css("float") && r.css({ float: "none" }).parent().css({ float: "right" }), i.stickyElement = r, i.stickyWrapper = a, i.currentTop = null, o.push(i), d.setWrapperHeight(this), d.setupChangeListeners(this) }) }, setWrapperHeight: function(e) { var i = t(e),
                    n = i.parent();
                n && n.css("height", i.outerHeight()) }, setupChangeListeners: function(t) { window.MutationObserver ? new window.MutationObserver(function(e) {
                    (e[0].addedNodes.length || e[0].removedNodes.length) && d.setWrapperHeight(t) }).observe(t, { subtree: !0, childList: !0 }) : window.addEventListener ? (t.addEventListener("DOMNodeInserted", function() { d.setWrapperHeight(t) }, !1), t.addEventListener("DOMNodeRemoved", function() { d.setWrapperHeight(t) }, !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", function() { d.setWrapperHeight(t) }), t.attachEvent("onDOMNodeRemoved", function() { d.setWrapperHeight(t) })) }, update: p, unstick: function(e) { return this.each(function() { for (var e = t(this), n = -1, r = o.length; r-- > 0;) o[r].stickyElement.get(0) === this && (i.call(o, r, 1), n = r); - 1 !== n && (e.unwrap(), e.css({ width: "", position: "", top: "", float: "", "z-index": "" })) }) } };
    window.addEventListener ? (window.addEventListener("scroll", p, !1), window.addEventListener("resize", a, !1)) : window.attachEvent && (window.attachEvent("onscroll", p), window.attachEvent("onresize", a)), t.fn.sticky = function(i) { return d[i] ? d[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : d.init.apply(this, arguments) }, t.fn.unstick = function(i) { return d[i] ? d[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : d.unstick.apply(this, arguments) }, t(function() { setTimeout(p, 0) }) });
/*! Lazy Load XT 1.1.0 | MIT License !*/
! function(a, b, c, d) {
    function e(a, b) { return a[b] === d ? t[b] : a[b] }

    function f() { var a = b.pageYOffset; return a === d ? r.scrollTop : a }

    function g(a, b) { var c = t["on" + a];
        c && (w(c) ? c.call(b[0]) : (c.addClass && b.addClass(c.addClass), c.removeClass && b.removeClass(c.removeClass))), b.trigger("lazy" + a, [b]), k() }

    function h(b) { g(b.type, a(this).off(p, h)) }

    function i(c) { if (z.length) { c = c || t.forceLoad, A = 1 / 0; var d, e, i = f(),
                j = b.innerHeight || r.clientHeight,
                k = b.innerWidth || r.clientWidth; for (d = 0, e = z.length; e > d; d++) { var l, m = z[d],
                    q = m[0],
                    s = m[n],
                    u = !1,
                    v = c || y(q, o) < 0; if (a.contains(r, q)) { if (c || !s.visibleOnly || q.offsetWidth || q.offsetHeight) { if (!v) { var x = q.getBoundingClientRect(),
                                B = s.edgeX,
                                C = s.edgeY;
                            l = x.top + i - C - j, v = i >= l && x.bottom > -C && x.left <= k + B && x.right > -B } if (v) { m.on(p, h), g("show", m); var D = s.srcAttr,
                                E = w(D) ? D(m) : q.getAttribute(D);
                            E && (q.src = E), u = !0 } else A > l && (A = l) } } else u = !0;
                u && (y(q, o, 0), z.splice(d--, 1), e--) }
            e || g("complete", a(r)) } }

    function j() { B > 1 ? (B = 1, i(), setTimeout(j, t.throttle)) : B = 0 }

    function k(a) { z.length && (a && "scroll" === a.type && a.currentTarget === b && A >= f() || (B || setTimeout(j, 0), B = 2)) }

    function l() { v.lazyLoadXT() }

    function m() { i(!0) } var n = "lazyLoadXT",
        o = "lazied",
        p = "load error",
        q = "lazy-hidden",
        r = c.documentElement || c.body,
        s = b.onscroll === d || !!b.operamini || !r.getBoundingClientRect,
        t = { autoInit: !0, selector: "img[data-src]", blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", throttle: 99, forceLoad: s, loadEvent: "pageshow", updateEvent: "load orientationchange resize scroll touchmove focus", forceEvent: "lazyloadall", oninit: { removeClass: "lazy" }, onshow: { addClass: q }, onload: { removeClass: q, addClass: "lazy-loaded" }, onerror: { removeClass: q }, checkDuplicates: !0 },
        u = { srcAttr: "data-src", edgeX: 0, edgeY: 0, visibleOnly: !0 },
        v = a(b),
        w = a.isFunction,
        x = a.extend,
        y = a.data || function(b, c) { return a(b).data(c) },
        z = [],
        A = 0,
        B = 0;
    a[n] = x(t, u, a[n]), a.fn[n] = function(c) { c = c || {}; var d, f = e(c, "blankImage"),
            h = e(c, "checkDuplicates"),
            i = e(c, "scrollContainer"),
            j = e(c, "show"),
            l = {};
        a(i).on("scroll", k); for (d in u) l[d] = e(c, d); return this.each(function(d, e) { if (e === b) a(t.selector).lazyLoadXT(c);
            else { var i = h && y(e, o),
                    m = a(e).data(o, j ? -1 : 1); if (i) return void k();
                f && "IMG" === e.tagName && !e.src && (e.src = f), m[n] = x({}, l), g("init", m), z.push(m), k() } }) }, a(c).ready(function() { g("start", v), v.on(t.updateEvent, k).on(t.forceEvent, m), a(c).on(t.updateEvent, k), t.autoInit && (v.on(t.loadEvent, l), l()) }) }(window.jQuery || window.Zepto || window.$, window, document);
/* socket.io */
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e() }(this, function() {
    return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports } var n = {}; return e.m = t, e.c = n, e.p = "", e(0) }([function(t, e, n) { "use strict";

        function r(t, e) { "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {}; var n, r = i(t),
                s = r.source,
                u = r.id,
                h = r.path,
                f = p[u] && h in p[u].nsps,
                l = e.forceNew || e["force new connection"] || !1 === e.multiplex || f; return l ? (c("ignoring socket cache for %s", s), n = a(s, e)) : (p[u] || (c("new io instance for %s", s), p[u] = a(s, e)), n = p[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e) } var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(1),
            s = n(7),
            a = n(13),
            c = n(3)("socket.io-client");
        t.exports = e = r; var p = e.managers = {};
        e.protocol = s.protocol, e.connect = r, e.Manager = n(13), e.Socket = n(39) }, function(t, e, n) {
        (function(e) { "use strict";

            function r(t, n) { var r = t;
                n = n || e.location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof n ? n.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/"; var s = r.host.indexOf(":") !== -1,
                    a = s ? "[" + r.host + "]" : r.host; return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port), r } var o = n(2),
                i = n(3)("socket.io-client:url");
            t.exports = r }).call(e, function() { return this }()) }, function(t, e) { var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t) { var e = t,
                o = t.indexOf("["),
                i = t.indexOf("]");
            o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length)); for (var s = n.exec(t || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || ""; return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a } }, function(t, e, n) {
        (function(r) {
            function o() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

            function i(t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) { var r = "color: " + this.color;
                    t.splice(1, 0, r, "color: inherit"); var o = 0,
                        i = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function(t) { "%%" !== t && (o++, "%c" === t && (i = o)) }), t.splice(i, 0, r) } }

            function s() { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments) }

            function a(t) { try { null == t ? e.storage.removeItem("debug") : e.storage.debug = t } catch (n) {} }

            function c() { var t; try { t = e.storage.debug } catch (n) {} return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t }

            function p() { try { return window.localStorage } catch (t) {} }
            e = t.exports = n(5), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : p(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) { try { return JSON.stringify(t) } catch (e) { return "[UnexpectedJSONParseError]: " + e.message } }, e.enable(c()) }).call(e, n(4)) }, function(t, e) {
        function n() { throw new Error("setTimeout has not been defined") }

        function r() { throw new Error("clearTimeout has not been defined") }

        function o(t) { if (u === setTimeout) return setTimeout(t, 0); if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0); try { return u(t, 0) } catch (e) { try { return u.call(null, t, 0) } catch (e) { return u.call(this, t, 0) } } }

        function i(t) { if (h === clearTimeout) return clearTimeout(t); if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t); try { return h(t) } catch (e) { try { return h.call(null, t) } catch (e) { return h.call(this, t) } } }

        function s() { y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a()) }

        function a() { if (!y) { var t = o(s);
                y = !0; for (var e = d.length; e;) { for (l = d, d = []; ++m < e;) l && l[m].run();
                    m = -1, e = d.length }
                l = null, y = !1, i(t) } }

        function c(t, e) { this.fun = t, this.array = e }

        function p() {} var u, h, f = t.exports = {};! function() { try { u = "function" == typeof setTimeout ? setTimeout : n } catch (t) { u = n } try { h = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { h = r } }(); var l, d = [],
            y = !1,
            m = -1;
        f.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            d.push(new c(t, e)), 1 !== d.length || y || o(a) }, c.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = p, f.addListener = p, f.once = p, f.off = p, f.removeListener = p, f.removeAllListeners = p, f.emit = p, f.prependListener = p, f.prependOnceListener = p, f.listeners = function(t) { return [] }, f.binding = function(t) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(t) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 } }, function(t, e, n) {
        function r(t) { var n, r = 0; for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0; return e.colors[Math.abs(r) % e.colors.length] }

        function o(t) {
            function n() { if (n.enabled) { var t = n,
                        r = +new Date,
                        o = r - (p || r);
                    t.diff = o, t.prev = p, t.curr = r, p = r; for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
                    i[0] = e.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O"); var a = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) { if ("%%" === n) return n;
                        a++; var o = e.formatters[r]; if ("function" == typeof o) { var s = i[a];
                            n = o.call(t, s), i.splice(a, 1), a-- } return n }), e.formatArgs.call(t, i); var c = n.log || e.log || console.log.bind(console);
                    c.apply(t, i) } } return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), "function" == typeof e.init && e.init(n), n }

        function i(t) { e.save(t), e.names = [], e.skips = []; for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (t = n[o].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))) }

        function s() { e.enable("") }

        function a(t) { var n, r; for (n = 0, r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t)) return !1;
            for (n = 0, r = e.names.length; n < r; n++)
                if (e.names[n].test(t)) return !0;
            return !1 }

        function c(t) { return t instanceof Error ? t.stack || t.message : t }
        e = t.exports = o.debug = o["default"] = o, e.coerce = c, e.disable = s, e.enable = i, e.enabled = a, e.humanize = n(6), e.names = [], e.skips = [], e.formatters = {}; var p }, function(t, e) {
        function n(t) { if (t = String(t), !(t.length > 100)) { var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t); if (e) { var n = parseFloat(e[1]),
                        r = (e[2] || "ms").toLowerCase(); switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * u;
                        case "days":
                        case "day":
                        case "d":
                            return n * p;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * c;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * a;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * s;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return } } } }

        function r(t) { return t >= p ? Math.round(t / p) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms" }

        function o(t) { return i(t, p, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms" }

        function i(t, e, n) { if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s" } var s = 1e3,
            a = 60 * s,
            c = 60 * a,
            p = 24 * c,
            u = 365.25 * p;
        t.exports = function(t, e) { e = e || {}; var i = typeof t; if ("string" === i && t.length > 0) return n(t); if ("number" === i && isNaN(t) === !1) return e["long"] ? o(t) : r(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)) } }, function(t, e, n) {
        function r() {}

        function o(t) { var n = "" + t.type; return e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data && (n += JSON.stringify(t.data)), h("encoded %j as %s", t, n), n }

        function i(t, e) {
            function n(t) { var n = d.deconstructPacket(t),
                    r = o(n.packet),
                    i = n.buffers;
                i.unshift(r), e(i) }
            d.removeBlobs(t, n) }

        function s() { this.reconstructor = null }

        function a(t) { var n = 0,
                r = { type: Number(t.charAt(0)) }; if (null == e.types[r.type]) return u(); if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) { for (var o = "";
                    "-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length);); if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                r.attachments = Number(o) } if ("/" === t.charAt(n + 1))
                for (r.nsp = ""; ++n;) { var i = t.charAt(n); if ("," === i) break; if (r.nsp += i, n === t.length) break } else r.nsp = "/"; var s = t.charAt(n + 1); if ("" !== s && Number(s) == s) { for (r.id = ""; ++n;) { var i = t.charAt(n); if (null == i || Number(i) != i) {--n; break } if (r.id += t.charAt(n), n === t.length) break }
                r.id = Number(r.id) } return t.charAt(++n) && (r = c(r, t.substr(n))), h("decoded %s as %j", t, r), r }

        function c(t, e) { try { t.data = JSON.parse(e) } catch (n) { return u() } return t }

        function p(t) { this.reconPack = t, this.buffers = [] }

        function u() { return { type: e.ERROR, data: "parser error" } } var h = n(3)("socket.io-parser"),
            f = n(8),
            l = n(9),
            d = n(11),
            y = n(12);
        e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = s, r.prototype.encode = function(t, n) { if (t.type !== e.EVENT && t.type !== e.ACK || !l(t.data) || (t.type = t.type === e.EVENT ? e.BINARY_EVENT : e.BINARY_ACK), h("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) i(t, n);
            else { var r = o(t);
                n([r]) } }, f(s.prototype), s.prototype.add = function(t) { var n; if ("string" == typeof t) n = a(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
            else { if (!y(t) && !t.base64) throw new Error("Unknown type: " + t); if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n)) } }, s.prototype.destroy = function() { this.reconstructor && this.reconstructor.finishedReconstruction() }, p.prototype.takeBinaryData = function(t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) { var e = d.reconstructPacket(this.reconPack, this.buffers); return this.finishedReconstruction(), e } return null }, p.prototype.finishedReconstruction = function() { this.reconPack = null, this.buffers = [] } }, function(t, e, n) {
        function r(t) { if (t) return o(t) }

        function o(t) { for (var e in r.prototype) t[e] = r.prototype[e]; return t }
        t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, r.prototype.once = function(t, e) {
            function n() { this.off(t, n), e.apply(this, arguments) } return n.fn = e, this.on(t, n), this }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var n = this._callbacks["$" + t]; if (!n) return this; if (1 == arguments.length) return delete this._callbacks["$" + t], this; for (var r, o = 0; o < n.length; o++)
                if (r = n[o], r === e || r.fn === e) { n.splice(o, 1); break }
            return this }, r.prototype.emit = function(t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1),
                n = this._callbacks["$" + t]; if (n) { n = n.slice(0); for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e) } return this }, r.prototype.listeners = function(t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, r.prototype.hasListeners = function(t) { return !!this.listeners(t).length } }, function(t, e, n) {
        (function(e) {
            function r(t) { if (!t || "object" != typeof t) return !1; if (o(t)) { for (var n = 0, i = t.length; n < i; n++)
                        if (r(t[n])) return !0;
                    return !1 } if ("function" == typeof e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || "function" == typeof e.ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || a && t instanceof File) return !0; if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return r(t.toJSON(), !0); for (var c in t)
                    if (Object.prototype.hasOwnProperty.call(t, c) && r(t[c])) return !0;
                return !1 } var o = n(10),
                i = Object.prototype.toString,
                s = "function" == typeof e.Blob || "[object BlobConstructor]" === i.call(e.Blob),
                a = "function" == typeof e.File || "[object FileConstructor]" === i.call(e.File);
            t.exports = r }).call(e, function() { return this }()) }, function(t, e) { var n = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, function(t, e, n) {
        (function(t) {
            function r(t, e) { if (!t) return t; if (s(t)) { var n = { _placeholder: !0, num: e.length }; return e.push(t), n } if (i(t)) { for (var o = new Array(t.length), a = 0; a < t.length; a++) o[a] = r(t[a], e); return o } if ("object" == typeof t && !(t instanceof Date)) { var o = {}; for (var c in t) o[c] = r(t[c], e); return o } return t }

            function o(t, e) { if (!t) return t; if (t && t._placeholder) return e[t.num]; if (i(t))
                    for (var n = 0; n < t.length; n++) t[n] = o(t[n], e);
                else if ("object" == typeof t)
                    for (var r in t) t[r] = o(t[r], e); return t } var i = n(10),
                s = n(12),
                a = Object.prototype.toString,
                c = "function" == typeof t.Blob || "[object BlobConstructor]" === a.call(t.Blob),
                p = "function" == typeof t.File || "[object FileConstructor]" === a.call(t.File);
            e.deconstructPacket = function(t) { var e = [],
                    n = t.data,
                    o = t; return o.data = r(n, e), o.attachments = e.length, { packet: o, buffers: e } }, e.reconstructPacket = function(t, e) { return t.data = o(t.data, e), t.attachments = void 0, t }, e.removeBlobs = function(t, e) {
                function n(t, a, u) { if (!t) return t; if (c && t instanceof Blob || p && t instanceof File) { r++; var h = new FileReader;
                        h.onload = function() { u ? u[a] = this.result : o = this.result, --r || e(o) }, h.readAsArrayBuffer(t) } else if (i(t))
                        for (var f = 0; f < t.length; f++) n(t[f], f, t);
                    else if ("object" == typeof t && !s(t))
                        for (var l in t) n(t[l], l, t) } var r = 0,
                    o = t;
                n(o), r || e(o) } }).call(e, function() { return this }()) }, function(t, e) {
        (function(e) {
            function n(t) { return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer }
            t.exports = n }).call(e, function() { return this }()) }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(this instanceof r)) return new r(t, e);
            t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = []; var n = e.parser || c;
            this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open() } var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(14),
            s = n(39),
            a = n(8),
            c = n(7),
            p = n(41),
            u = n(42),
            h = n(3)("socket.io-client:manager"),
            f = n(37),
            l = n(43),
            d = Object.prototype.hasOwnProperty;
        t.exports = r, r.prototype.emitAll = function() { this.emit.apply(this, arguments); for (var t in this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments) }, r.prototype.updateSocketIds = function() { for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t)) }, r.prototype.generateId = function(t) { return ("/" === t ? "" : t + "#") + this.engine.id }, a(r.prototype), r.prototype.reconnection = function(t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection }, r.prototype.reconnectionAttempts = function(t) { return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts }, r.prototype.reconnectionDelay = function(t) { return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay }, r.prototype.randomizationFactor = function(t) { return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor }, r.prototype.reconnectionDelayMax = function(t) { return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax }, r.prototype.timeout = function(t) { return arguments.length ? (this._timeout = t, this) : this._timeout }, r.prototype.maybeReconnectOnOpen = function() {!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect() }, r.prototype.open = r.prototype.connect = function(t, e) { if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
            h("opening %s", this.uri), this.engine = i(this.uri, this.opts); var n = this.engine,
                r = this;
            this.readyState = "opening", this.skipReconnect = !1; var o = p(n, "open", function() { r.onopen(), t && t() }),
                s = p(n, "error", function(e) { if (h("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) { var n = new Error("Connection error");
                        n.data = e, t(n) } else r.maybeReconnectOnOpen() }); if (!1 !== this._timeout) { var a = this._timeout;
                h("connect attempt will timeout after %d", a); var c = setTimeout(function() { h("connect attempt timed out after %d", a), o.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a) }, a);
                this.subs.push({ destroy: function() { clearTimeout(c) } }) } return this.subs.push(o), this.subs.push(s), this }, r.prototype.onopen = function() { h("open"), this.cleanup(), this.readyState = "open", this.emit("open"); var t = this.engine;
            this.subs.push(p(t, "data", u(this, "ondata"))), this.subs.push(p(t, "ping", u(this, "onping"))), this.subs.push(p(t, "pong", u(this, "onpong"))), this.subs.push(p(t, "error", u(this, "onerror"))), this.subs.push(p(t, "close", u(this, "onclose"))), this.subs.push(p(this.decoder, "decoded", u(this, "ondecoded"))) }, r.prototype.onping = function() { this.lastPing = new Date, this.emitAll("ping") }, r.prototype.onpong = function() { this.emitAll("pong", new Date - this.lastPing) }, r.prototype.ondata = function(t) { this.decoder.add(t) }, r.prototype.ondecoded = function(t) { this.emit("packet", t) }, r.prototype.onerror = function(t) { h("error", t), this.emitAll("error", t) }, r.prototype.socket = function(t, e) {
            function n() {~f(o.connecting, r) || o.connecting.push(r) } var r = this.nsps[t]; if (!r) { r = new s(this, t, e), this.nsps[t] = r; var o = this;
                r.on("connecting", n), r.on("connect", function() { r.id = o.generateId(t) }), this.autoConnect && n() } return r }, r.prototype.destroy = function(t) { var e = f(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close() }, r.prototype.packet = function(t) { h("writing packet %j", t); var e = this;
            t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function(n) { for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                e.encoding = !1, e.processPacketQueue() })) }, r.prototype.processPacketQueue = function() { if (this.packetBuffer.length > 0 && !this.encoding) { var t = this.packetBuffer.shift();
                this.packet(t) } }, r.prototype.cleanup = function() { h("cleanup"); for (var t = this.subs.length, e = 0; e < t; e++) { var n = this.subs.shift();
                n.destroy() }
            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy() }, r.prototype.close = r.prototype.disconnect = function() { h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close() }, r.prototype.onclose = function(t) { h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect() }, r.prototype.reconnect = function() { if (this.reconnecting || this.skipReconnect) return this; var t = this; if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
            else { var e = this.backoff.duration();
                h("will wait %dms before reconnect attempt", e), this.reconnecting = !0; var n = setTimeout(function() { t.skipReconnect || (h("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) { e ? (h("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (h("reconnect success"), t.onreconnect()) })) }, e);
                this.subs.push({ destroy: function() { clearTimeout(n) } }) } }, r.prototype.onreconnect = function() { var t = this.backoff.attempts;
            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t) } }, function(t, e, n) { t.exports = n(15) }, function(t, e, n) { t.exports = n(16), t.exports.parser = n(23) }, function(t, e, n) {
        (function(e) {
            function r(t, n) { if (!(this instanceof r)) return new r(t, n);
                n = n || {}, t && "object" == typeof t && (n = t, t = null), t ? (t = u(t), n.hostname = t.host, n.secure = "https" === t.protocol || "wss" === t.protocol, n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = u(n.host).host), this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (e.location ? location.hostname : "localhost"), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = f.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.transportOptions = n.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, this.forceNode = !!n.forceNode; var o = "object" == typeof e && e;
                o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open() }

            function o(t) { var e = {}; for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e } var i = n(17),
                s = n(8),
                a = n(3)("engine.io-client:socket"),
                c = n(37),
                p = n(23),
                u = n(2),
                h = n(38),
                f = n(31);
            t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = p.protocol, r.Socket = r, r.Transport = n(22), r.transports = n(17), r.parser = n(23), r.prototype.createTransport = function(t) { a('creating transport "%s"', t); var e = o(this.query);
                e.EIO = p.protocol, e.transport = t; var n = this.transportOptions[t] || {};
                this.id && (e.sid = this.id); var r = new i[t]({ query: e, socket: this, agent: n.agent || this.agent, hostname: n.hostname || this.hostname, port: n.port || this.port, secure: n.secure || this.secure, path: n.path || this.path, forceJSONP: n.forceJSONP || this.forceJSONP, jsonp: n.jsonp || this.jsonp, forceBase64: n.forceBase64 || this.forceBase64, enablesXDR: n.enablesXDR || this.enablesXDR, timestampRequests: n.timestampRequests || this.timestampRequests, timestampParam: n.timestampParam || this.timestampParam, policyPort: n.policyPort || this.policyPort, pfx: n.pfx || this.pfx, key: n.key || this.key, passphrase: n.passphrase || this.passphrase, cert: n.cert || this.cert, ca: n.ca || this.ca, ciphers: n.ciphers || this.ciphers, rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate, extraHeaders: n.extraHeaders || this.extraHeaders, forceNode: n.forceNode || this.forceNode, localAddress: n.localAddress || this.localAddress, requestTimeout: n.requestTimeout || this.requestTimeout, protocols: n.protocols || void 0 }); return r }, r.prototype.open = function() { var t; if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
                else { if (0 === this.transports.length) { var e = this; return void setTimeout(function() { e.emit("error", "No transports available") }, 0) }
                    t = this.transports[0] }
                this.readyState = "opening"; try { t = this.createTransport(t) } catch (n) { return this.transports.shift(), void this.open() }
                t.open(), this.setTransport(t) }, r.prototype.setTransport = function(t) { a("setting transport %s", t.name); var e = this;
                this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function() { e.onDrain() }).on("packet", function(t) { e.onPacket(t) }).on("error", function(t) { e.onError(t) }).on("close", function() { e.onClose("transport close") }) }, r.prototype.probe = function(t) {
                function e() { if (f.onlyBinaryUpgrades) { var e = !this.supportsBinary && f.transport.supportsBinary;
                        h = h || e }
                    h || (a('probe transport "%s" opened', t), u.send([{ type: "ping", data: "probe" }]), u.once("packet", function(e) { if (!h)
                            if ("pong" === e.type && "probe" === e.data) { if (a('probe transport "%s" pong', t), f.upgrading = !0, f.emit("upgrading", u), !u) return;
                                r.priorWebsocketSuccess = "websocket" === u.name, a('pausing current transport "%s"', f.transport.name), f.transport.pause(function() { h || "closed" !== f.readyState && (a("changing transport and sending upgrade packet"), p(), f.setTransport(u), u.send([{ type: "upgrade" }]), f.emit("upgrade", u), u = null, f.upgrading = !1, f.flush()) }) } else { a('probe transport "%s" failed', t); var n = new Error("probe error");
                                n.transport = u.name, f.emit("upgradeError", n) } })) }

                function n() { h || (h = !0, p(), u.close(), u = null) }

                function o(e) { var r = new Error("probe error: " + e);
                    r.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), f.emit("upgradeError", r) }

                function i() { o("transport closed") }

                function s() { o("socket closed") }

                function c(t) { u && t.name !== u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n()) }

                function p() { u.removeListener("open", e), u.removeListener("error", o), u.removeListener("close", i), f.removeListener("close", s), f.removeListener("upgrading", c) }
                a('probing transport "%s"', t); var u = this.createTransport(t, { probe: 1 }),
                    h = !1,
                    f = this;
                r.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", o), u.once("close", i), this.once("close", s), this.once("upgrading", c), u.open() }, r.prototype.onOpen = function() { if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) { a("starting upgrade probes"); for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]) } }, r.prototype.onPacket = function(t) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                    case "open":
                        this.onHandshake(h(t.data)); break;
                    case "pong":
                        this.setPing(), this.emit("pong"); break;
                    case "error":
                        var e = new Error("server error");
                        e.code = t.data, this.onError(e); break;
                    case "message":
                        this.emit("data", t.data), this.emit("message", t.data) } else a('packet received with socket readyState "%s"', this.readyState) }, r.prototype.onHandshake = function(t) { this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat)) }, r.prototype.onHeartbeat = function(t) { clearTimeout(this.pingTimeoutTimer); var e = this;
                e.pingTimeoutTimer = setTimeout(function() { "closed" !== e.readyState && e.onClose("ping timeout") }, t || e.pingInterval + e.pingTimeout) }, r.prototype.setPing = function() { var t = this;
                clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() { a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout) }, t.pingInterval) }, r.prototype.ping = function() { var t = this;
                this.sendPacket("ping", function() { t.emit("ping") }) }, r.prototype.onDrain = function() { this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush() }, r.prototype.flush = function() { "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush")) }, r.prototype.write = r.prototype.send = function(t, e, n) { return this.sendPacket("message", t, e, n), this }, r.prototype.sendPacket = function(t, e, n, r) { if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) { n = n || {}, n.compress = !1 !== n.compress; var o = { type: t, data: e, options: n };
                    this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush() } }, r.prototype.close = function() {
                function t() { r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close() }

                function e() { r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t() }

                function n() { r.once("upgrade", e), r.once("upgradeError", e) } if ("opening" === this.readyState || "open" === this.readyState) { this.readyState = "closing"; var r = this;
                    this.writeBuffer.length ? this.once("drain", function() { this.upgrading ? n() : t() }) : this.upgrading ? n() : t() } return this }, r.prototype.onError = function(t) { a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t) }, r.prototype.onClose = function(t, e) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) { a('socket close with reason: "%s"', t); var n = this;
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0 } }, r.prototype.filterUpgrades = function(t) { for (var e = [], n = 0, r = t.length; n < r; n++) ~c(this.transports, t[n]) && e.push(t[n]); return e } }).call(e, function() { return this }()) }, function(t, e, n) {
        (function(t) {
            function r(e) { var n, r = !1,
                    a = !1,
                    c = !1 !== e.jsonp; if (t.location) { var p = "https:" === location.protocol,
                        u = location.port;
                    u || (u = p ? 443 : 80), r = e.hostname !== location.hostname || u !== e.port, a = e.secure !== p } if (e.xdomain = r, e.xscheme = a, n = new o(e), "open" in n && !e.forceJSONP) return new i(e); if (!c) throw new Error("JSONP disabled"); return new s(e) } var o = n(18),
                i = n(20),
                s = n(34),
                a = n(35);
            e.polling = r, e.websocket = a }).call(e, function() { return this }()) }, function(t, e, n) {
        (function(e) {
            var r = n(19);
            t.exports = function(t) {
                var n = t.xdomain,
                    o = t.xscheme,
                    i = t.enablesXDR;
                try { if ("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest } catch (s) {}
                try { if ("undefined" != typeof XDomainRequest && !o && i) return new XDomainRequest } catch (s) {}
                if (!n) try {
                    return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (s) {}
            }
        }).call(e, function() { return this }())
    }, function(t, e) { try { t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest } catch (n) { t.exports = !1 } }, function(t, e, n) {
        (function(e) {
            function r() {}

            function o(t) { if (c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, e.location) { var n = "https:" === location.protocol,
                        r = location.port;
                    r || (r = n ? 443 : 80), this.xd = t.hostname !== e.location.hostname || r !== t.port, this.xs = t.secure !== n } }

            function i(t) { this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create() }

            function s() { for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort() } var a = n(18),
                c = n(21),
                p = n(8),
                u = n(32),
                h = n(3)("engine.io-client:polling-xhr");
            t.exports = o, t.exports.Request = i, u(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function(t) { return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t) }, o.prototype.doWrite = function(t, e) { var n = "string" != typeof t && void 0 !== t,
                    r = this.request({ method: "POST", data: t, isBinary: n }),
                    o = this;
                r.on("success", e), r.on("error", function(t) { o.onError("xhr post error", t) }), this.sendXhr = r }, o.prototype.doPoll = function() { h("xhr poll"); var t = this.request(),
                    e = this;
                t.on("data", function(t) { e.onData(t) }), t.on("error", function(t) { e.onError("xhr poll error", t) }), this.pollXhr = t }, p(i.prototype), i.prototype.create = function() { var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
                t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized; var n = this.xhr = new a(t),
                    r = this; try { h("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async); try { if (this.extraHeaders) { n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0); for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o]) } } catch (s) {} if ("POST" === this.method) try { this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") } catch (s) {}
                    try { n.setRequestHeader("Accept", "*/*") } catch (s) {} "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function() { r.onLoad() }, n.onerror = function() { r.onError(n.responseText) }) : n.onreadystatechange = function() { if (2 === n.readyState) { var t; try { t = n.getResponseHeader("Content-Type") } catch (e) {} "application/octet-stream" === t && (n.responseType = "arraybuffer") }
                        4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function() { r.onError(n.status) }, 0)) }, h("xhr data %s", this.data), n.send(this.data) } catch (s) { return void setTimeout(function() { r.onError(s) }, 0) }
                e.document && (this.index = i.requestsCount++, i.requests[this.index] = this) }, i.prototype.onSuccess = function() { this.emit("success"), this.cleanup() }, i.prototype.onData = function(t) { this.emit("data", t), this.onSuccess() }, i.prototype.onError = function(t) { this.emit("error", t), this.cleanup(!0) }, i.prototype.cleanup = function(t) { if ("undefined" != typeof this.xhr && null !== this.xhr) { if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try { this.xhr.abort() } catch (n) {}
                    e.document && delete i.requests[this.index], this.xhr = null } }, i.prototype.onLoad = function() { var t; try { var e; try { e = this.xhr.getResponseHeader("Content-Type") } catch (n) {}
                    t = "application/octet-stream" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText } catch (n) { this.onError(n) }
                null != t && this.onData(t) }, i.prototype.hasXDR = function() { return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR }, i.prototype.abort = function() { this.cleanup() }, i.requestsCount = 0, i.requests = {}, e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1)) }).call(e, function() { return this }()) }, function(t, e, n) {
        function r(t) { var e = t && t.forceBase64;
            u && !e || (this.supportsBinary = !1), o.call(this, t) } var o = n(22),
            i = n(31),
            s = n(23),
            a = n(32),
            c = n(33),
            p = n(3)("engine.io-client:polling");
        t.exports = r; var u = function() { var t = n(18),
                e = new t({ xdomain: !1 }); return null != e.responseType }();
        a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function() { this.poll() }, r.prototype.pause = function(t) {
            function e() { p("paused"), n.readyState = "paused", t() } var n = this; if (this.readyState = "pausing", this.polling || !this.writable) { var r = 0;
                this.polling && (p("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() { p("pre-pause polling complete"), --r || e() })), this.writable || (p("we are currently writing - waiting to pause"), r++, this.once("drain", function() { p("pre-pause writing complete"), --r || e() })) } else e() }, r.prototype.poll = function() { p("polling"), this.polling = !0, this.doPoll(), this.emit("poll") }, r.prototype.onData = function(t) { var e = this;
            p("polling got data %s", t); var n = function(t, n, r) { return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t) };
            s.decodePayload(t, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState)) }, r.prototype.doClose = function() {
            function t() { p("writing close packet"), e.write([{ type: "close" }]) } var e = this; "open" === this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t)) }, r.prototype.write = function(t) { var e = this;
            this.writable = !1; var n = function() { e.writable = !0, e.emit("drain") };
            s.encodePayload(t, this.supportsBinary, function(t) { e.doWrite(t, n) }) }, r.prototype.uri = function() { var t = this.query || {},
                e = this.secure ? "https" : "http",
                n = "";!1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t); var r = this.hostname.indexOf(":") !== -1; return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t } }, function(t, e, n) {
        function r(t) { this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress } var o = n(23),
            i = n(8);
        t.exports = r, i(r.prototype), r.prototype.onError = function(t, e) { var n = new Error(t); return n.type = "TransportError", n.description = e, this.emit("error", n), this }, r.prototype.open = function() { return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this }, r.prototype.close = function() { return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this }, r.prototype.send = function(t) { if ("open" !== this.readyState) throw new Error("Transport not open");
            this.write(t) }, r.prototype.onOpen = function() { this.readyState = "open", this.writable = !0, this.emit("open") }, r.prototype.onData = function(t) { var e = o.decodePacket(t, this.socket.binaryType);
            this.onPacket(e) }, r.prototype.onPacket = function(t) { this.emit("packet", t) }, r.prototype.onClose = function() { this.readyState = "closed", this.emit("close") } }, function(t, e, n) {
        (function(t) {
            function r(t, n) { var r = "b" + e.packets[t.type] + t.data.data; return n(r) }

            function o(t, n, r) { if (!n) return e.encodeBase64Packet(t, r); var o = t.data,
                    i = new Uint8Array(o),
                    s = new Uint8Array(1 + o.byteLength);
                s[0] = v[t.type]; for (var a = 0; a < i.length; a++) s[a + 1] = i[a]; return r(s.buffer) }

            function i(t, n, r) { if (!n) return e.encodeBase64Packet(t, r); var o = new FileReader; return o.onload = function() { t.data = o.result, e.encodePacket(t, n, !0, r) }, o.readAsArrayBuffer(t.data) }

            function s(t, n, r) { if (!n) return e.encodeBase64Packet(t, r); if (g) return i(t, n, r); var o = new Uint8Array(1);
                o[0] = v[t.type]; var s = new k([o.buffer, t.data]); return r(s) }

            function a(t) { try { t = d.decode(t, { strict: !1 }) } catch (e) { return !1 } return t }

            function c(t, e, n) { for (var r = new Array(t.length), o = l(t.length, n), i = function(t, n, o) { e(n, function(e, n) { r[t] = n, o(e, r) }) }, s = 0; s < t.length; s++) i(s, t[s], o) } var p, u = n(24),
                h = n(9),
                f = n(25),
                l = n(26),
                d = n(27);
            t && t.ArrayBuffer && (p = n(29)); var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                g = y || m;
            e.protocol = 3; var v = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
                b = u(v),
                w = { type: "error", data: "parser error" },
                k = n(30);
            e.encodePacket = function(e, n, i, a) { "function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null); var c = void 0 === e.data ? void 0 : e.data.buffer || e.data; if (t.ArrayBuffer && c instanceof ArrayBuffer) return o(e, n, a); if (k && c instanceof t.Blob) return s(e, n, a); if (c && c.base64) return r(e, a); var p = v[e.type]; return void 0 !== e.data && (p += i ? d.encode(String(e.data), { strict: !1 }) : String(e.data)), a("" + p) }, e.encodeBase64Packet = function(n, r) { var o = "b" + e.packets[n.type]; if (k && n.data instanceof t.Blob) { var i = new FileReader; return i.onload = function() { var t = i.result.split(",")[1];
                        r(o + t) }, i.readAsDataURL(n.data) } var s; try { s = String.fromCharCode.apply(null, new Uint8Array(n.data)) } catch (a) { for (var c = new Uint8Array(n.data), p = new Array(c.length), u = 0; u < c.length; u++) p[u] = c[u];
                    s = String.fromCharCode.apply(null, p) } return o += t.btoa(s), r(o) }, e.decodePacket = function(t, n, r) { if (void 0 === t) return w; if ("string" == typeof t) { if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n); if (r && (t = a(t), t === !1)) return w; var o = t.charAt(0); return Number(o) == o && b[o] ? t.length > 1 ? { type: b[o], data: t.substring(1) } : { type: b[o] } : w } var i = new Uint8Array(t),
                    o = i[0],
                    s = f(t, 1); return k && "blob" === n && (s = new k([s])), { type: b[o], data: s } }, e.decodeBase64Packet = function(t, e) { var n = b[t.charAt(0)]; if (!p) return { type: n, data: { base64: !0, data: t.substr(1) } }; var r = p.decode(t.substr(1)); return "blob" === e && k && (r = new k([r])), { type: n, data: r } }, e.encodePayload = function(t, n, r) {
                function o(t) { return t.length + ":" + t }

                function i(t, r) { e.encodePacket(t, !!s && n, !1, function(t) { r(null, o(t)) }) } "function" == typeof n && (r = n, n = null); var s = h(t); return n && s ? k && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function(t, e) { return r(e.join("")) }) : r("0:") }, e.decodePayload = function(t, n, r) { if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r); "function" == typeof n && (r = n, n = null); var o; if ("" === t) return r(w, 0, 1); for (var i, s, a = "", c = 0, p = t.length; c < p; c++) { var u = t.charAt(c); if (":" === u) { if ("" === a || a != (i = Number(a))) return r(w, 0, 1); if (s = t.substr(c + 1, i), a != s.length) return r(w, 0, 1); if (s.length) { if (o = e.decodePacket(s, n, !1), w.type === o.type && w.data === o.data) return r(w, 0, 1); var h = r(o, c + i, p); if (!1 === h) return }
                        c += i, a = "" } else a += u } return "" !== a ? r(w, 0, 1) : void 0 }, e.encodePayloadAsArrayBuffer = function(t, n) {
                function r(t, n) { e.encodePacket(t, !0, !0, function(t) { return n(null, t) }) } return t.length ? void c(t, r, function(t, e) { var r = e.reduce(function(t, e) { var n; return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2 }, 0),
                        o = new Uint8Array(r),
                        i = 0; return e.forEach(function(t) { var e = "string" == typeof t,
                            n = t; if (e) { for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
                            n = r.buffer }
                        e ? o[i++] = 0 : o[i++] = 1; for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                        o[i++] = 255; for (var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s] }), n(o.buffer) }) : n(new ArrayBuffer(0)) }, e.encodePayloadAsBlob = function(t, n) {
                function r(t, n) { e.encodePacket(t, !0, !0, function(t) { var e = new Uint8Array(1); if (e[0] = 1, "string" == typeof t) { for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                            t = r.buffer, e[0] = 0 } for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]); if (a[s.length] = 255, k) { var c = new k([e.buffer, a.buffer, t]);
                            n(null, c) } }) }
                c(t, r, function(t, e) { return n(new k(e)) }) }, e.decodePayloadAsBinary = function(t, n, r) { "function" == typeof n && (r = n, n = null); for (var o = t, i = []; o.byteLength > 0;) { for (var s = new Uint8Array(o), a = 0 === s[0], c = "", p = 1; 255 !== s[p]; p++) { if (c.length > 310) return r(w, 0, 1);
                        c += s[p] }
                    o = f(o, 2 + c.length), c = parseInt(c); var u = f(o, 0, c); if (a) try { u = String.fromCharCode.apply(null, new Uint8Array(u)) } catch (h) { var l = new Uint8Array(u);
                        u = ""; for (var p = 0; p < l.length; p++) u += String.fromCharCode(l[p]) }
                    i.push(u), o = f(o, c) } var d = i.length;
                i.forEach(function(t, o) { r(e.decodePacket(t, n, !0), o, d) }) } }).call(e, function() { return this }()) }, function(t, e) { t.exports = Object.keys || function(t) { var e = [],
                n = Object.prototype.hasOwnProperty; for (var r in t) n.call(t, r) && e.push(r); return e } }, function(t, e) { t.exports = function(t, e, n) { var r = t.byteLength; if (e = e || 0, n = n || r, t.slice) return t.slice(e, n); if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0); for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s]; return i.buffer } }, function(t, e) {
        function n(t, e, n) {
            function o(t, r) { if (o.count <= 0) throw new Error("after called too many times");--o.count, t ? (i = !0, e(t), e = n) : 0 !== o.count || i || e(null, r) } var i = !1; return n = n || r, o.count = t, 0 === t ? e() : o }

        function r() {}
        t.exports = n }, function(t, e, n) { var r;
        (function(t, o) {! function(i) {
                function s(t) { for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e); return r }

                function a(t) { for (var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e); return o }

                function c(t, e) { if (t >= 55296 && t <= 57343) { if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value"); return !1 } return !0 }

                function p(t, e) { return w(t >> e & 63 | 128) }

                function u(t, e) { if (0 == (4294967168 & t)) return w(t); var n = ""; return 0 == (4294965248 & t) ? n = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (c(t, e) || (t = 65533), n = w(t >> 12 & 15 | 224), n += p(t, 6)) : 0 == (4292870144 & t) && (n = w(t >> 18 & 7 | 240), n += p(t, 12), n += p(t, 6)), n += w(63 & t | 128) }

                function h(t, e) { e = e || {}; for (var n, r = !1 !== e.strict, o = s(t), i = o.length, a = -1, c = ""; ++a < i;) n = o[a], c += u(n, r); return c }

                function f() { if (b >= v) throw Error("Invalid byte index"); var t = 255 & g[b]; if (b++, 128 == (192 & t)) return 63 & t; throw Error("Invalid continuation byte") }

                function l(t) { var e, n, r, o, i; if (b > v) throw Error("Invalid byte index"); if (b == v) return !1; if (e = 255 & g[b], b++, 0 == (128 & e)) return e; if (192 == (224 & e)) { if (n = f(), i = (31 & e) << 6 | n, i >= 128) return i; throw Error("Invalid continuation byte") } if (224 == (240 & e)) { if (n = f(), r = f(), i = (15 & e) << 12 | n << 6 | r, i >= 2048) return c(i, t) ? i : 65533; throw Error("Invalid continuation byte") } if (240 == (248 & e) && (n = f(), r = f(), o = f(), i = (7 & e) << 18 | n << 12 | r << 6 | o, i >= 65536 && i <= 1114111)) return i; throw Error("Invalid UTF-8 detected") }

                function d(t, e) { e = e || {}; var n = !1 !== e.strict;
                    g = s(t), v = g.length, b = 0; for (var r, o = [];
                        (r = l(n)) !== !1;) o.push(r); return a(o) } var y = "object" == typeof e && e,
                    m = ("object" == typeof t && t && t.exports == y && t, "object" == typeof o && o);
                m.global !== m && m.window !== m || (i = m); var g, v, b, w = String.fromCharCode,
                    k = { version: "2.1.2", encode: h, decode: d };
                r = function() { return k }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)) }(this) }).call(e, n(28)(t), function() { return this }()) }, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t } }, function(t, e) {! function() { "use strict"; for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
            e.encode = function(e) { var n, r = new Uint8Array(e),
                    o = r.length,
                    i = ""; for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]]; return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i }, e.decode = function(t) { var e, r, o, i, s, a = .75 * t.length,
                    c = t.length,
                    p = 0; "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--); var u = new ArrayBuffer(a),
                    h = new Uint8Array(u); for (e = 0; e < c; e += 4) r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[p++] = r << 2 | o >> 4, h[p++] = (15 & o) << 4 | i >> 2, h[p++] = (3 & i) << 6 | 63 & s; return u } }() }, function(t, e) {
        (function(e) {
            function n(t) { for (var e = 0; e < t.length; e++) { var n = t[e]; if (n.buffer instanceof ArrayBuffer) { var r = n.buffer; if (n.byteLength !== r.byteLength) { var o = new Uint8Array(n.byteLength);
                            o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer }
                        t[e] = r } } }

            function r(t, e) { e = e || {}; var r = new i;
                n(t); for (var o = 0; o < t.length; o++) r.append(t[o]); return e.type ? r.getBlob(e.type) : r.getBlob() }

            function o(t, e) { return n(t), new Blob(t, e || {}) } var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
                s = function() { try { var t = new Blob(["hi"]); return 2 === t.size } catch (e) { return !1 } }(),
                a = s && function() { try { var t = new Blob([new Uint8Array([1, 2])]); return 2 === t.size } catch (e) { return !1 } }(),
                c = i && i.prototype.append && i.prototype.getBlob;
            t.exports = function() { return s ? a ? e.Blob : o : c ? r : void 0 }() }).call(e, function() { return this }()) }, function(t, e) { e.encode = function(t) { var e = ""; for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])); return e }, e.decode = function(t) { for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) { var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]) } return e } }, function(t, e) { t.exports = function(t, e) { var n = function() {};
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t } }, function(t, e) { "use strict";

        function n(t) { var e = "";
            do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0); return e }

        function r(t) { var e = 0; for (u = 0; u < t.length; u++) e = e * a + c[t.charAt(u)]; return e }

        function o() { var t = n(+new Date); return t !== i ? (p = 0, i = t) : t + "." + n(p++) } for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, p = 0, u = 0; u < a; u++) c[s[u]] = u;
        o.encode = n, o.decode = r, t.exports = o }, function(t, e, n) {
        (function(e) {
            function r() {}

            function o(t) { i.call(this, t), this.query = this.query || {}, a || (e.___eio || (e.___eio = []), a = e.___eio), this.index = a.length; var n = this;
                a.push(function(t) { n.onData(t) }), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener("beforeunload", function() { n.script && (n.script.onerror = r) }, !1) } var i = n(21),
                s = n(32);
            t.exports = o; var a, c = /\n/g,
                p = /\\n/g;
            s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function() { this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this) }, o.prototype.doPoll = function() { var t = this,
                    e = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) { t.onError("jsonp poll error", e) }; var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e; var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                r && setTimeout(function() { var t = document.createElement("iframe");
                    document.body.appendChild(t), document.body.removeChild(t) }, 100) }, o.prototype.doWrite = function(t, e) {
                function n() { r(), e() }

                function r() { if (o.iframe) try { o.form.removeChild(o.iframe) } catch (t) { o.onError("jsonp polling iframe removal error", t) }
                    try { var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(e) } catch (t) { i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0" }
                    i.id = o.iframeId, o.form.appendChild(i), o.iframe = i } var o = this; if (!this.form) { var i, s = document.createElement("form"),
                        a = document.createElement("textarea"),
                        u = this.iframeId = "eio_iframe_" + this.index;
                    s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = u, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a }
                this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(c, "\\n"); try { this.form.submit() } catch (h) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() { "complete" === o.iframe.readyState && n() } : this.iframe.onload = n } }).call(e, function() { return this }()) }, function(t, e, n) {
        (function(e) {
            function r(t) { var e = t && t.forceBase64;
                e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = o), i.call(this, t) } var o, i = n(22),
                s = n(23),
                a = n(31),
                c = n(32),
                p = n(33),
                u = n(3)("engine.io-client:websocket"),
                h = e.WebSocket || e.MozWebSocket; if ("undefined" == typeof window) try { o = n(36) } catch (f) {}
            var l = h;
            l || "undefined" != typeof window || (l = o), t.exports = r, c(r, i), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function() { if (this.check()) { var t = this.uri(),
                        e = this.protocols,
                        n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };
                    n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress); try { this.ws = this.usingBrowserWebSocket ? e ? new l(t, e) : new l(t) : new l(t, e, n) } catch (r) { return this.emit("error", r) }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners() } }, r.prototype.addEventListeners = function() { var t = this;
                this.ws.onopen = function() { t.onOpen() }, this.ws.onclose = function() { t.onClose() }, this.ws.onmessage = function(e) { t.onData(e.data) }, this.ws.onerror = function(e) { t.onError("websocket error", e) } }, r.prototype.write = function(t) {
                function n() { r.emit("flush"), setTimeout(function() { r.writable = !0, r.emit("drain") }, 0) } var r = this;
                this.writable = !1; for (var o = t.length, i = 0, a = o; i < a; i++) ! function(t) { s.encodePacket(t, r.supportsBinary, function(i) { if (!r.usingBrowserWebSocket) { var s = {}; if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) { var a = "string" == typeof i ? e.Buffer.byteLength(i) : i.length;
                                a < r.perMessageDeflate.threshold && (s.compress = !1) } } try { r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, s) } catch (c) { u("websocket closed before onclose event") }--o || n() }) }(t[i]) }, r.prototype.onClose = function() { i.prototype.onClose.call(this) }, r.prototype.doClose = function() { "undefined" != typeof this.ws && this.ws.close() }, r.prototype.uri = function() { var t = this.query || {},
                    e = this.secure ? "wss" : "ws",
                    n = "";
                this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = p()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = "?" + t); var r = this.hostname.indexOf(":") !== -1; return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t }, r.prototype.check = function() { return !(!l || "__initialize" in l && this.name === r.prototype.name) } }).call(e, function() { return this }()) }, function(t, e) {}, function(t, e) { var n = [].indexOf;
        t.exports = function(t, e) { if (n) return t.indexOf(e); for (var r = 0; r < t.length; ++r)
                if (t[r] === e) return r;
            return -1 } }, function(t, e) {
        (function(e) { var n = /^[\],:{}\s]*$/,
                r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                i = /(?:^|:|,)(?:\s*\[)+/g,
                s = /^\s+/,
                a = /\s+$/;
            t.exports = function(t) { return "string" == typeof t && t ? (t = t.replace(s, "").replace(a, ""), e.JSON && JSON.parse ? JSON.parse(t) : n.test(t.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + t)() : void 0) : null } }).call(e, function() { return this }()) }, function(t, e, n) { "use strict";

        function r(t, e, n) { this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open() } var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(7),
            s = n(8),
            a = n(40),
            c = n(41),
            p = n(42),
            u = n(3)("socket.io-client:socket"),
            h = n(31);
        t.exports = e = r; var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
            l = s.prototype.emit;
        s(r.prototype), r.prototype.subEvents = function() { if (!this.subs) { var t = this.io;
                this.subs = [c(t, "open", p(this, "onopen")), c(t, "packet", p(this, "onpacket")), c(t, "close", p(this, "onclose"))] } }, r.prototype.open = r.prototype.connect = function() { return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this) }, r.prototype.send = function() { var t = a(arguments); return t.unshift("message"), this.emit.apply(this, t), this }, r.prototype.emit = function(t) { if (f.hasOwnProperty(t)) return l.apply(this, arguments), this; var e = a(arguments),
                n = { type: i.EVENT, data: e }; return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), delete this.flags, this }, r.prototype.packet = function(t) { t.nsp = this.nsp, this.io.packet(t) }, r.prototype.onopen = function() { if (u("transport is open - connecting"), "/" !== this.nsp)
                if (this.query) { var t = "object" === o(this.query) ? h.encode(this.query) : this.query;
                    u("sending connect packet with query %s", t), this.packet({ type: i.CONNECT, query: t }) } else this.packet({ type: i.CONNECT }) }, r.prototype.onclose = function(t) { u("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t) }, r.prototype.onpacket = function(t) { if (t.nsp === this.nsp) switch (t.type) {
                case i.CONNECT:
                    this.onconnect(); break;
                case i.EVENT:
                    this.onevent(t); break;
                case i.BINARY_EVENT:
                    this.onevent(t); break;
                case i.ACK:
                    this.onack(t); break;
                case i.BINARY_ACK:
                    this.onack(t); break;
                case i.DISCONNECT:
                    this.ondisconnect(); break;
                case i.ERROR:
                    this.emit("error", t.data) } }, r.prototype.onevent = function(t) { var e = t.data || [];
            u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e) }, r.prototype.ack = function(t) { var e = this,
                n = !1; return function() { if (!n) { n = !0; var r = a(arguments);
                    u("sending ack %j", r), e.packet({ type: i.ACK, id: t, data: r }) } } }, r.prototype.onack = function(t) { var e = this.acks[t.id]; "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u("bad ack %s", t.id) }, r.prototype.onconnect = function() { this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered() }, r.prototype.emitBuffered = function() { var t; for (t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]); for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
            this.sendBuffer = [] }, r.prototype.ondisconnect = function() { u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect") }, r.prototype.destroy = function() { if (this.subs) { for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                this.subs = null }
            this.io.destroy(this) }, r.prototype.close = r.prototype.disconnect = function() { return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({ type: i.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this }, r.prototype.compress = function(t) { return this.flags = this.flags || {}, this.flags.compress = t, this } }, function(t, e) {
        function n(t, e) { var n = [];
            e = e || 0; for (var r = e || 0; r < t.length; r++) n[r - e] = t[r]; return n }
        t.exports = n }, function(t, e) { "use strict";

        function n(t, e, n) { return t.on(e, n), { destroy: function() { t.removeListener(e, n) } } }
        t.exports = n }, function(t, e) { var n = [].slice;
        t.exports = function(t, e) { if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function"); var r = n.call(arguments, 2); return function() { return e.apply(t, r.concat(n.call(arguments))) } } }, function(t, e) {
        function n(t) { t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0 }
        t.exports = n, n.prototype.duration = function() { var t = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) { var e = Math.random(),
                    n = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n } return 0 | Math.min(t, this.max) }, n.prototype.reset = function() { this.attempts = 0 }, n.prototype.setMin = function(t) { this.ms = t }, n.prototype.setMax = function(t) { this.max = t }, n.prototype.setJitter = function(t) { this.jitter = t } }])
});
/* SweetAlert2 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t() }(this, function() { "use strict"; const q = "SweetAlert2:",
        H = e => e.charAt(0).toUpperCase() + e.slice(1),
        i = e => Array.prototype.slice.call(e),
        a = e => { console.warn("".concat(q, " ").concat("object" == typeof e ? e.join(" ") : e)) },
        l = e => { console.error("".concat(q, " ").concat(e)) },
        V = [],
        N = (e, t) => { e = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), V.includes(e) || (V.push(e), a(e)) },
        R = e => "function" == typeof e ? e() : e,
        F = e => e && "function" == typeof e.toPromise,
        u = e => F(e) ? e.toPromise() : Promise.resolve(e),
        U = e => e && Promise.resolve(e) === e,
        r = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconColor: void 0, iconHtml: void 0, template: void 0, toast: !1, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: {}, target: "body", color: void 0, backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showDenyButton: !1, showCancelButton: !1, preConfirm: void 0, preDeny: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, denyButtonText: "No", denyButtonAriaLabel: "", denyButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusDeny: !1, focusCancel: !1, returnFocus: !0, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", loaderHtml: "", showLoaderOnConfirm: !1, showLoaderOnDeny: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputLabel: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, returnInputValueOnDeny: !1, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, willOpen: void 0, didOpen: void 0, didRender: void 0, willClose: void 0, didClose: void 0, didDestroy: void 0, scrollbarPadding: !0 },
        W = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        z = {},
        _ = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
        K = e => Object.prototype.hasOwnProperty.call(r, e),
        Y = e => -1 !== W.indexOf(e),
        Z = e => z[e],
        J = e => {!e.backdrop && e.allowOutsideClick && a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'); for (const n in e) t = n, K(t) || a('Unknown parameter "'.concat(t, '"')), e.toast && (t = n, _.includes(t) && a('The parameter "'.concat(t, '" is incompatible with toasts'))), t = n, Z(t) && N(t, Z(t)); var t }; var e = e => { const t = {}; for (const n in e) t[e[n]] = "swal2-" + e[n]; return t }; const p = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        o = e(["success", "warning", "info", "question", "error"]),
        m = () => document.body.querySelector(".".concat(p.container)),
        t = e => { const t = m(); return t ? t.querySelector(e) : null },
        n = e => t(".".concat(e)),
        g = () => n(p.popup),
        s = () => n(p.icon),
        X = () => n(p.title),
        $ = () => n(p["html-container"]),
        G = () => n(p.image),
        Q = () => n(p["progress-steps"]),
        ee = () => n(p["validation-message"]),
        h = () => t(".".concat(p.actions, " .").concat(p.confirm)),
        f = () => t(".".concat(p.actions, " .").concat(p.deny)); const d = () => t(".".concat(p.loader)),
        b = () => t(".".concat(p.actions, " .").concat(p.cancel)),
        v = () => n(p.actions),
        te = () => n(p.footer),
        ne = () => n(p["timer-progress-bar"]),
        oe = () => n(p.close),
        ie = () => { const e = i(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e, t) => { e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex")); return t < e ? 1 : e < t ? -1 : 0 }); var t = i(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e => "-1" !== e.getAttribute("tabindex")); return (t => { const n = []; for (let e = 0; e < t.length; e++) - 1 === n.indexOf(t[e]) && n.push(t[e]); return n })(e.concat(t)).filter(e => E(e)) },
        ae = () => w(document.body, p.shown) && !w(document.body, p["toast-shown"]) && !w(document.body, p["no-backdrop"]),
        re = () => g() && w(g(), p.toast);

    function se(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]; const n = ne();
        E(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => { n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%" }, 10)) } const c = { previousBodyPadding: null },
        y = (t, e) => { if (t.textContent = "", e) { const n = new DOMParser,
                    o = n.parseFromString(e, "text/html");
                i(o.querySelector("head").childNodes).forEach(e => { t.appendChild(e) }), i(o.querySelector("body").childNodes).forEach(e => { t.appendChild(e) }) } },
        w = (t, e) => { if (!e) return !1; var n = e.split(/\s+/); for (let e = 0; e < n.length; e++)
                if (!t.classList.contains(n[e])) return !1;
            return !0 },
        ce = (t, n) => { i(t.classList).forEach(e => { Object.values(p).includes(e) || Object.values(o).includes(e) || Object.values(n.showClass).includes(e) || t.classList.remove(e) }) },
        C = (e, t, n) => { if (ce(e, t), t.customClass && t.customClass[n]) { if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return a("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
                A(e, t.customClass[n]) } },
        le = (e, t) => { if (!t) return null; switch (t) {
                case "select":
                case "textarea":
                case "file":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p[t]));
                case "checkbox":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.checkbox, " input"));
                case "radio":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:checked")) || e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:first-child"));
                case "range":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.range, " input"));
                default:
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.input)) } },
        ue = e => { var t;
            e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t) },
        de = (e, t, n) => { e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(t => { Array.isArray(e) ? e.forEach(e => { n ? e.classList.add(t) : e.classList.remove(t) }) : n ? e.classList.add(t) : e.classList.remove(t) }) },
        A = (e, t) => { de(e, t, !0) },
        k = (e, t) => { de(e, t, !1) },
        P = (e, t) => { var n = i(e.childNodes); for (let e = 0; e < n.length; e++)
                if (w(n[e], t)) return n[e] },
        pe = (e, t, n) => {
            (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t) },
        B = function(e) { e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex" },
        x = e => { e.style.display = "none" },
        me = (e, t, n, o) => { const i = e.querySelector(t);
            i && (i.style[n] = o) },
        ge = (e, t, n) => { t ? B(e, n) : x(e) },
        E = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
        he = () => !E(h()) && !E(f()) && !E(b()),
        fe = e => !!(e.scrollHeight > e.clientHeight),
        be = e => { const t = window.getComputedStyle(e); var e = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                n = parseFloat(t.getPropertyValue("transition-duration") || "0"); return 0 < e || 0 < n },
        ve = () => "undefined" == typeof window || "undefined" == typeof document,
        ye = 100,
        T = {},
        we = () => { T.previousActiveElement && T.previousActiveElement.focus ? (T.previousActiveElement.focus(), T.previousActiveElement = null) : document.body && document.body.focus() },
        Ce = o => new Promise(e => { if (!o) return e(); var t = window.scrollX,
                n = window.scrollY;
            T.restoreFocusTimeout = setTimeout(() => { we(), e() }, ye), window.scrollTo(t, n) }),
        Ae = '\n <div aria-labelledby="'.concat(p.title, '" aria-describedby="').concat(p["html-container"], '" class="').concat(p.popup, '" tabindex="-1">\n   <button type="button" class="').concat(p.close, '"></button>\n   <ul class="').concat(p["progress-steps"], '"></ul>\n   <div class="').concat(p.icon, '"></div>\n   <img class="').concat(p.image, '" />\n   <h2 class="').concat(p.title, '" id="').concat(p.title, '"></h2>\n   <div class="').concat(p["html-container"], '" id="').concat(p["html-container"], '"></div>\n   <input class="').concat(p.input, '" />\n   <input type="file" class="').concat(p.file, '" />\n   <div class="').concat(p.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select, '"></select>\n   <div class="').concat(p.radio, '"></div>\n   <label for="').concat(p.checkbox, '" class="').concat(p.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(p.label, '"></span>\n   </label>\n   <textarea class="').concat(p.textarea, '"></textarea>\n   <div class="').concat(p["validation-message"], '" id="').concat(p["validation-message"], '"></div>\n   <div class="').concat(p.actions, '">\n     <div class="').concat(p.loader, '"></div>\n     <button type="button" class="').concat(p.confirm, '"></button>\n     <button type="button" class="').concat(p.deny, '"></button>\n     <button type="button" class="').concat(p.cancel, '"></button>\n   </div>\n   <div class="').concat(p.footer, '"></div>\n   <div class="').concat(p["timer-progress-bar-container"], '">\n     <div class="').concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        ke = () => { const e = m(); return !!e && (e.remove(), k([document.documentElement, document.body], [p["no-backdrop"], p["toast-shown"], p["has-column"]]), !0) },
        S = () => { T.currentInstance.resetValidationMessage() },
        Pe = () => { const e = g(),
                t = P(e, p.input),
                n = P(e, p.file),
                o = e.querySelector(".".concat(p.range, " input")),
                i = e.querySelector(".".concat(p.range, " output")),
                a = P(e, p.select),
                r = e.querySelector(".".concat(p.checkbox, " input")),
                s = P(e, p.textarea);
            t.oninput = S, n.onchange = S, a.onchange = S, r.onchange = S, s.oninput = S, o.oninput = () => { S(), i.value = o.value }, o.onchange = () => { S(), o.nextSibling.value = o.value } },
        Be = e => "string" == typeof e ? document.querySelector(e) : e,
        xe = e => { const t = g();
            t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true") },
        Ee = e => { "rtl" === window.getComputedStyle(e).direction && A(m(), p.rtl) },
        Te = (e, t) => { if (e instanceof HTMLElement) t.appendChild(e);
            else if ("object" == typeof e) { var n = e,
                    o = t; if (n.jquery) Se(o, n);
                else y(o, n.toString()) } else e && y(t, e) },
        Se = (t, n) => { if (t.textContent = "", 0 in n)
                for (let e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0));
            else t.appendChild(n.cloneNode(!0)) },
        Le = (() => { if (ve()) return !1; var e = document.createElement("div"),
                t = { WebkitAnimation: "webkitAnimationEnd", animation: "animationend" }; for (const n in t)
                if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
            return !1 })(),
        Oe = (e, t) => { var n, o, i, a, r, s = v(),
                c = d();
            (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? B : x)(s), C(s, t, "actions"), s = s, n = c, o = t, i = h(), a = f(), r = b(), je(i, "confirm", o), je(a, "deny", o), je(r, "cancel", o),
                function(e, t, n, o) { if (!o.buttonsStyling) return k([e, t, n], p.styled);
                    A([e, t, n], p.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, A(e, p["default-outline"]));
                    o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, A(t, p["default-outline"]));
                    o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, A(n, p["default-outline"])) }(i, a, r, o), o.reverseButtons && (o.toast ? (s.insertBefore(r, i), s.insertBefore(a, i)) : (s.insertBefore(r, n), s.insertBefore(a, n), s.insertBefore(i, n))), y(c, t.loaderHtml), C(c, t, "loader") };

    function je(e, t, n) { ge(e, n["show".concat(H(t), "Button")], "inline-block"), y(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = p[t], C(e, n, "".concat(t, "Button")), A(e, n["".concat(t, "ButtonClass")]) } const Me = (e, t) => { var n, o, i = m();
        i && (o = i, "string" == typeof(n = t.backdrop) ? o.style.background = n : n || A([document.documentElement, document.body], p["no-backdrop"]), o = i, (n = t.position) in p ? A(o, p[n]) : (a('The "position" parameter is not valid, defaulting to "center"'), A(o, p.center)), n = i, (o = t.grow) && "string" == typeof o && (o = "grow-".concat(o)) in p && A(n, p[o]), C(i, t, "container")) }; var L = { awaitingPromise: new WeakMap, promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap }; const De = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        Ie = (e, r) => { const s = g(); var t, e = L.innerParams.get(e); const c = !e || r.input !== e.input;
            De.forEach(e => { var t = p[e]; const n = P(s, t); { var o = r.inputAttributes; const i = le(g(), e); if (i) { qe(i); for (const a in o) i.setAttribute(a, o[a]) } }
                n.className = t, c && x(n) }), r.input && (c && (e => { if (!O[e.input]) return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"')); const t = Ne(e.input),
                    n = O[e.input](t, e);
                B(n), setTimeout(() => { ue(n) }) })(r), e = r, t = Ne(e.input), e.customClass && A(t, e.customClass.input)) },
        qe = t => { for (let e = 0; e < t.attributes.length; e++) { var n = t.attributes[e].name;
                ["type", "value", "style"].includes(n) || t.removeAttribute(n) } },
        He = (e, t) => { e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder) },
        Ve = (e, t, n) => { if (n.inputLabel) { e.id = p.input; const i = document.createElement("label"); var o = p["input-label"];
                i.setAttribute("for", e.id), i.className = o, A(i, n.customClass.inputLabel), i.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", i) } },
        Ne = e => { e = p[e] || p.input; return P(g(), e) },
        O = {},
        Re = (O.text = O.email = O.password = O.number = O.tel = O.url = (e, t) => ("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : U(t.inputValue) || a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), Ve(e, e, t), He(e, t), e.type = t.input, e), O.file = (e, t) => (Ve(e, e, t), He(e, t), e), O.range = (e, t) => { const n = e.querySelector("input"),
                o = e.querySelector("output"); return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, Ve(n, e, t), e }, O.select = (e, t) => { if (e.textContent = "", t.inputPlaceholder) { const n = document.createElement("option");
                y(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n) } return Ve(e, e, t), e }, O.radio = e => (e.textContent = "", e), O.checkbox = (e, t) => { const n = le(g(), "checkbox");
            n.value = "1", n.id = p.checkbox, n.checked = Boolean(t.inputValue); var o = e.querySelector("span"); return y(o, t.inputPlaceholder), e }, O.textarea = (n, e) => { n.value = e.inputValue, He(n, e), Ve(n, n, e); return setTimeout(() => { if ("MutationObserver" in window) { const t = parseInt(window.getComputedStyle(g()).width);
                    new MutationObserver(() => { var e = n.offsetWidth + (e = n, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
                        e > t ? g().style.width = "".concat(e, "px") : g().style.width = null }).observe(n, { attributes: !0, attributeFilter: ["style"] }) } }), n }, (e, t) => { const n = $();
            C(n, t, "htmlContainer"), t.html ? (Te(t.html, n), B(n, "block")) : t.text ? (n.textContent = t.text, B(n, "block")) : x(n), Ie(e, t) }),
        Fe = (e, t) => { var n = te();
            ge(n, t.footer), t.footer && Te(t.footer, n), C(n, t, "footer") },
        Ue = (e, t) => { const n = oe();
            y(n, t.closeButtonHtml), C(n, t, "closeButton"), ge(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel) },
        We = (e, t) => { var e = L.innerParams.get(e),
                n = s(); return e && t.icon === e.icon ? (Ze(n, t), void ze(n, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(o).indexOf(t.icon) ? (l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), x(n)) : (B(n), Ze(n, t), ze(n, t), void A(n, t.showClass.icon)) : x(n) },
        ze = (e, t) => { for (const n in o) t.icon !== n && k(e, o[n]);
            A(e, o[t.icon]), Je(e, t), _e(), C(e, t, "icon") },
        _e = () => { const e = g(); var t = window.getComputedStyle(e).getPropertyValue("background-color"); const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"); for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t },
        Ke = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
        Ye = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
        Ze = (e, t) => { var n;
            e.textContent = "", t.iconHtml ? y(e, Xe(t.iconHtml)) : "success" === t.icon ? y(e, Ke) : "error" === t.icon ? y(e, Ye) : (n = { question: "?", warning: "!", info: "i" }, y(e, Xe(n[t.icon]))) },
        Je = (e, t) => { if (t.iconColor) { e.style.color = t.iconColor, e.style.borderColor = t.iconColor; for (const n of[".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) me(e, n, "backgroundColor", t.iconColor);
                me(e, ".swal2-success-ring", "borderColor", t.iconColor) } },
        Xe = e => '<div class="'.concat(p["icon-content"], '">').concat(e, "</div>"),
        $e = (e, t) => { const n = G(); if (!t.imageUrl) return x(n);
            B(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), pe(n, "width", t.imageWidth), pe(n, "height", t.imageHeight), n.className = p.image, C(n, t, "image") },
        Ge = (e, o) => { const i = Q(); if (!o.progressSteps || 0 === o.progressSteps.length) return x(i);
            B(i), i.textContent = "", o.currentProgressStep >= o.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach((e, t) => { e = e, n = document.createElement("li"), A(n, p["progress-step"]), y(n, e); var n, e = n;
                i.appendChild(e), t === o.currentProgressStep && A(e, p["active-progress-step"]), t !== o.progressSteps.length - 1 && (n = (e => { const t = document.createElement("li"); return A(t, p["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t })(o), i.appendChild(n)) }) },
        Qe = (e, t) => { const n = X();
            ge(n, t.title || t.titleText, "block"), t.title && Te(t.title, n), t.titleText && (n.innerText = t.titleText), C(n, t, "title") },
        et = (e, t) => { var n = m(); const o = g();
            t.toast ? (pe(n, "width", t.width), o.style.width = "100%", o.insertBefore(d(), s())) : pe(o, "width", t.width), pe(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), x(ee());
            n = o;
            (n.className = "".concat(p.popup, " ").concat(E(n) ? t.showClass.popup : ""), t.toast) ? (A([document.documentElement, document.body], p["toast-shown"]), A(n, p.toast)) : A(n, p.modal);
            C(n, t, "popup"), "string" == typeof t.customClass && A(n, t.customClass);
            t.icon && A(n, p["icon-".concat(t.icon)]) },
        tt = (e, t) => { et(e, t), Me(e, t), Ge(e, t), We(e, t), $e(e, t), Qe(e, t), Ue(e, t), Re(e, t), Oe(e, t), Fe(e, t), "function" == typeof t.didRender && t.didRender(g()) },
        j = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
        nt = () => { const e = i(document.body.children);
            e.forEach(e => { e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true")) }) },
        ot = () => { const e = i(document.body.children);
            e.forEach(e => { e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden") }) },
        it = ["swal-title", "swal-html", "swal-footer"],
        at = e => { const n = {}; return i(e.querySelectorAll("swal-param")).forEach(e => { M(e, ["name", "value"]); var t = e.getAttribute("name"),
                    e = e.getAttribute("value"); "boolean" == typeof r[t] && "false" === e && (n[t] = !1), "object" == typeof r[t] && (n[t] = JSON.parse(e)) }), n },
        rt = e => { const n = {}; return i(e.querySelectorAll("swal-button")).forEach(e => { M(e, ["type", "color", "aria-label"]); var t = e.getAttribute("type");
                n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(H(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label")) }), n },
        st = e => { const t = {},
                n = e.querySelector("swal-image"); return n && (M(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t },
        ct = e => { const t = {},
                n = e.querySelector("swal-icon"); return n && (M(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t },
        lt = e => { const n = {},
                t = e.querySelector("swal-input");
            t && (M(t, ["type", "label", "placeholder", "value"]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
            e = e.querySelectorAll("swal-input-option"); return e.length && (n.inputOptions = {}, i(e).forEach(e => { M(e, ["value"]); var t = e.getAttribute("value"),
                    e = e.innerHTML;
                n.inputOptions[t] = e })), n },
        ut = (e, t) => { const n = {}; for (const o in t) { const i = t[o],
                    a = e.querySelector(i);
                a && (M(a, []), n[i.replace(/^swal-/, "")] = a.innerHTML.trim()) } return n },
        dt = e => { const t = it.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            i(e.children).forEach(e => { e = e.tagName.toLowerCase(); - 1 === t.indexOf(e) && a("Unrecognized element <".concat(e, ">")) }) },
        M = (t, n) => { i(t.attributes).forEach(e => {-1 === n.indexOf(e.name) && a(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")]) }) }; var pt = { email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"), url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL") };

    function mt(e) {
        (t = e).inputValidator || Object.keys(pt).forEach(e => { t.input === e && (t.inputValidator = pt[e]) }), e.showLoaderOnConfirm && !e.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (a('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")); var t, n = e,
            e = ke(); if (ve()) l("SweetAlert2 requires document to initialize");
        else { const o = document.createElement("div"),
                i = (o.className = p.container, e && A(o, p["no-transition"]), y(o, Ae), Be(n.target));
            i.appendChild(o), xe(n), Ee(i), Pe() } }
    class gt { constructor(e, t) { this.callback = e, this.remaining = t, this.running = !1, this.start() }
        start() { return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining }
        stop() { return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining }
        increase(e) { var t = this.running; return t && this.stop(), this.remaining += e, t && this.start(), this.remaining }
        getTimerLeft() { return this.running && (this.stop(), this.start()), this.remaining }
        isRunning() { return this.running } } const ht = () => { null === c.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (c.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(c.previousBodyPadding + (() => { const e = document.createElement("div");
                e.className = p["scrollbar-measure"], document.body.appendChild(e); var t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t })(), "px")) },
        ft = () => { null !== c.previousBodyPadding && (document.body.style.paddingRight = "".concat(c.previousBodyPadding, "px"), c.previousBodyPadding = null) },
        bt = () => { if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !w(document.body, p.iosfix)) { var e, t = document.body.scrollTop;
                document.body.style.top = "".concat(-1 * t, "px"), A(document.body, p.iosfix); { const n = m(); let t;
                    n.ontouchstart = e => { t = vt(e) }, n.ontouchmove = e => { t && (e.preventDefault(), e.stopPropagation()) } } { const o = navigator.userAgent,
                        i = !!o.match(/iPad/i) || !!o.match(/iPhone/i),
                        a = !!o.match(/WebKit/i),
                        r = i && a && !o.match(/CriOS/i);
                    r && (e = 44, g().scrollHeight > window.innerHeight - 44 && (m().style.paddingBottom = "".concat(44, "px"))) } } },
        vt = e => { var t, n = e.target,
                o = m(); return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (t = e).touches && 1 < t.touches.length) && (n === o || !(fe(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || fe($()) && $().contains(n))) },
        yt = () => { var e;
            w(document.body, p.iosfix) && (e = parseInt(document.body.style.top, 10), k(document.body, p.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e) },
        wt = 10,
        Ct = e => { const t = g(); if (e.target === t) { const n = m();
                t.removeEventListener(Le, Ct), n.style.overflowY = "auto" } },
        At = (e, t) => { Le && be(t) ? (e.style.overflowY = "hidden", t.addEventListener(Le, Ct)) : e.style.overflowY = "auto" },
        kt = (e, t, n) => { bt(), t && "hidden" !== n && ht(), setTimeout(() => { e.scrollTop = 0 }) },
        Pt = (e, t, n) => { A(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), B(t, "grid"), setTimeout(() => { A(t, n.showClass.popup), t.style.removeProperty("opacity") }, wt), A([document.documentElement, document.body], p.shown), n.heightAuto && n.backdrop && !n.toast && A([document.documentElement, document.body], p["height-auto"]) },
        D = e => { let t = g();
            t || new wn, t = g(); var n = d(); if (re()) x(s());
            else { var o = t; const i = v(),
                    a = d();!e && E(h()) && (e = h());
                B(i), e && (x(e), a.setAttribute("data-button-to-replace", e.className));
                a.parentNode.insertBefore(a, e), A([o, i], p.loading) }
            B(n), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus() },
        Bt = (t, n) => { const o = g(),
                i = e => Et[n.input](o, Tt(e), n);
            F(n.inputOptions) || U(n.inputOptions) ? (D(h()), u(n.inputOptions).then(e => { t.hideLoading(), i(e) })) : "object" == typeof n.inputOptions ? i(n.inputOptions) : l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions)) },
        xt = (t, n) => { const o = t.getInput();
            x(o), u(n.inputValue).then(e => { o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), B(o), o.focus(), t.hideLoading() }).catch(e => { l("Error in inputValue promise: ".concat(e)), o.value = "", B(o), o.focus(), t.hideLoading() }) },
        Et = { select: (e, t, i) => { const a = P(e, p.select),
                    r = (e, t, n) => { const o = document.createElement("option");
                        o.value = n, y(o, t), o.selected = St(n, i.inputValue), e.appendChild(o) };
                t.forEach(e => { var t = e[0]; const n = e[1]; if (Array.isArray(n)) { const o = document.createElement("optgroup");
                        o.label = t, o.disabled = !1, a.appendChild(o), n.forEach(e => r(o, e[1], e[0])) } else r(a, n, t) }), a.focus() }, radio: (e, t, a) => { const r = P(e, p.radio),
                    n = (t.forEach(e => { var t = e[0],
                            e = e[1]; const n = document.createElement("input"),
                            o = document.createElement("label"),
                            i = (n.type = "radio", n.name = p.radio, n.value = t, St(t, a.inputValue) && (n.checked = !0), document.createElement("span"));
                        y(i, e), i.className = p.label, o.appendChild(n), o.appendChild(i), r.appendChild(o) }), r.querySelectorAll("input"));
                n.length && n[0].focus() } },
        Tt = n => { const o = []; return "undefined" != typeof Map && n instanceof Map ? n.forEach((e, t) => { let n = e; "object" == typeof n && (n = Tt(n)), o.push([t, n]) }) : Object.keys(n).forEach(e => { let t = n[e]; "object" == typeof t && (t = Tt(t)), o.push([e, t]) }), o },
        St = (e, t) => t && t.toString() === e.toString();

    function Lt() { var e, t = L.innerParams.get(this); if (t) { const n = L.domCache.get(this);
            x(n.loader), re() ? t.icon && B(s()) : (t = n, (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? B(e[0], "inline-block") : he() && x(t.actions)), k([n.popup, n.actions], p.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.denyButton.disabled = !1, n.cancelButton.disabled = !1 } } var Ot = { swalPromiseResolve: new WeakMap, swalPromiseReject: new WeakMap }; const jt = () => h() && h().click(); const Mt = e => { e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, { capture: e.keydownListenerCapture }), e.keydownHandlerAdded = !1) },
        Dt = (e, t, n) => { const o = ie(); if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
            g().focus() },
        It = ["ArrowRight", "ArrowDown"],
        qt = ["ArrowLeft", "ArrowUp"],
        Ht = (e, n, t) => { var o = L.innerParams.get(e); if (o && (!n.isComposing && 229 !== n.keyCode))
                if (o.stopKeydownPropagation && n.stopPropagation(), "Enter" === n.key) e = e, s = n, i = o, R(i.allowEnterKey) && s.target && e.getInput() && s.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(i.input) || (jt(), s.preventDefault()));
                else if ("Tab" === n.key) { e = n; var i = o; var a = e.target,
                    r = ie(); let t = -1; for (let e = 0; e < r.length; e++)
                    if (a === r[e]) { t = e; break }
                e.shiftKey ? Dt(i, t, -1) : Dt(i, t, 1);
                e.stopPropagation(), e.preventDefault() } else if ([...It, ...qt].includes(n.key)) { var s = n.key; const l = h(),
                    u = f(),
                    d = b(); if ([l, u, d].includes(document.activeElement)) { var c = It.includes(s) ? "nextElementSibling" : "previousElementSibling"; let t = document.activeElement; for (let e = 0; e < v().children.length; e++) { if (!(t = t[c])) return; if (E(t) && t instanceof HTMLButtonElement) break }
                    t instanceof HTMLButtonElement && t.focus() } } else if ("Escape" === n.key) { e = n, n = o, o = t; if (R(n.allowEscapeKey)) { e.preventDefault();
                    o(j.esc) } } };

    function Vt(e, t, n, o) { re() ? Ut(e, o) : (Ce(n).then(() => Ut(e, o)), Mt(T)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), ae() && (ft(), yt(), ot()), k([document.documentElement, document.body], [p.shown, p["height-auto"], p["no-backdrop"], p["toast-shown"]]) }

    function Nt(e) { e = void 0 !== (n = e) ? Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, n) : { isConfirmed: !1, isDenied: !1, isDismissed: !0 }; const t = Ot.swalPromiseResolve.get(this); var n = (e => { const t = g(); if (!t) return false; const n = L.innerParams.get(e); if (!n || w(t, n.hideClass.popup)) return false;
            k(t, n.showClass.popup), A(t, n.hideClass.popup); const o = m(); return k(o, n.showClass.backdrop), A(o, n.hideClass.backdrop), Ft(e, t, n), true })(this);
        this.isAwaitingPromise() ? e.isDismissed || (Rt(this), t(e)) : n && t(e) } const Rt = e => { e.isAwaitingPromise() && (L.awaitingPromise.delete(e), L.innerParams.get(e) || e._destroy()) },
        Ft = (e, t, n) => { var o, i, a, r = m(),
                s = Le && be(t); "function" == typeof n.willClose && n.willClose(t), s ? (s = e, o = t, t = r, i = n.returnFocus, a = n.didClose, T.swalCloseEventFinishedCallback = Vt.bind(null, s, t, i, a), o.addEventListener(Le, function(e) { e.target === o && (T.swalCloseEventFinishedCallback(), delete T.swalCloseEventFinishedCallback) })) : Vt(e, r, n.returnFocus, n.didClose) },
        Ut = (e, t) => { setTimeout(() => { "function" == typeof t && t.bind(e.params)(), e._destroy() }) };

    function Wt(e, t, n) { const o = L.domCache.get(e);
        t.forEach(e => { o[e].disabled = n }) }

    function zt(e, t) { if (!e) return !1; if ("radio" === e.type) { const n = e.parentNode.parentNode,
                o = n.querySelectorAll("input"); for (let e = 0; e < o.length; e++) o[e].disabled = t } else e.disabled = t } const _t = e => { e.isAwaitingPromise() ? (Kt(L, e), L.awaitingPromise.set(e, !0)) : (Kt(Ot, e), Kt(L, e)) },
        Kt = (e, t) => { for (const n in e) e[n].delete(t) };
    e = Object.freeze({ hideLoading: Lt, disableLoading: Lt, getInput: function(e) { var t = L.innerParams.get(e || this); return (e = L.domCache.get(e || this)) ? le(e.popup, t.input) : null }, close: Nt, isAwaitingPromise: function() { return !!L.awaitingPromise.get(this) }, rejectPromise: function(e) { const t = Ot.swalPromiseReject.get(this);
            Rt(this), t && t(e) }, handleAwaitingPromise: Rt, closePopup: Nt, closeModal: Nt, closeToast: Nt, enableButtons: function() { Wt(this, ["confirmButton", "denyButton", "cancelButton"], !1) }, disableButtons: function() { Wt(this, ["confirmButton", "denyButton", "cancelButton"], !0) }, enableInput: function() { return zt(this.getInput(), !1) }, disableInput: function() { return zt(this.getInput(), !0) }, showValidationMessage: function(e) { const t = L.domCache.get(this); var n = L.innerParams.get(this);
            y(t.validationMessage, e), t.validationMessage.className = p["validation-message"], n.customClass && n.customClass.validationMessage && A(t.validationMessage, n.customClass.validationMessage), B(t.validationMessage); const o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", p["validation-message"]), ue(o), A(o, p.inputerror)) }, resetValidationMessage: function() { var e = L.domCache.get(this);
            e.validationMessage && x(e.validationMessage); const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), k(t, p.inputerror)) }, getProgressSteps: function() { return L.domCache.get(this).progressSteps }, update: function(e) { var t = g(),
                n = L.innerParams.get(this); if (!t || w(t, n.hideClass.popup)) return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            t = (t => { const n = {}; return Object.keys(t).forEach(e => { if (Y(e)) n[e] = t[e];
                    else a('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md')) }), n })(e), n = Object.assign({}, n, t), tt(this, n), L.innerParams.set(this, n), Object.defineProperties(this, { params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 } }) }, _destroy: function() { var e = L.domCache.get(this); const t = L.innerParams.get(this);
            t ? (e.popup && T.swalCloseEventFinishedCallback && (T.swalCloseEventFinishedCallback(), delete T.swalCloseEventFinishedCallback), T.deferDisposalTimer && (clearTimeout(T.deferDisposalTimer), delete T.deferDisposalTimer), "function" == typeof t.didDestroy && t.didDestroy(), e = this, _t(e), delete e.params, delete T.keydownHandler, delete T.keydownTarget, delete T.currentInstance) : _t(this) } }); const Yt = (e, t) => { var n = L.innerParams.get(e); if (!n.input) return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(H(t))); var o = ((e, t) => { const n = e.getInput(); if (!n) return null; switch (t.input) {
                    case "checkbox":
                        return n.checked ? 1 : 0;
                    case "radio":
                        return (o = n).checked ? o.value : null;
                    case "file":
                        return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;
                    default:
                        return t.inputAutoTrim ? n.value.trim() : n.value } var o })(e, n); if (n.inputValidator) { var i = e; var a = o; var r = t; const s = L.innerParams.get(i),
                    c = (i.disableInput(), Promise.resolve().then(() => u(s.inputValidator(a, s.validationMessage))));
                c.then(e => { i.enableButtons(), i.enableInput(), e ? i.showValidationMessage(e) : ("deny" === r ? Zt : $t)(i, a) }) } else e.getInput().checkValidity() ? ("deny" === t ? Zt : $t)(e, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage)) },
        Zt = (t, n) => { const e = L.innerParams.get(t || void 0); if (e.showLoaderOnDeny && D(f()), e.preDeny) { L.awaitingPromise.set(t || void 0, !0); const o = Promise.resolve().then(() => u(e.preDeny(n, e.validationMessage)));
                o.then(e => {!1 === e ? (t.hideLoading(), Rt(t)) : t.closePopup({ isDenied: !0, value: void 0 === e ? n : e }) }).catch(e => Xt(t || void 0, e)) } else t.closePopup({ isDenied: !0, value: n }) },
        Jt = (e, t) => { e.closePopup({ isConfirmed: !0, value: t }) },
        Xt = (e, t) => { e.rejectPromise(t) },
        $t = (t, n) => { const e = L.innerParams.get(t || void 0); if (e.showLoaderOnConfirm && D(), e.preConfirm) { t.resetValidationMessage(), L.awaitingPromise.set(t || void 0, !0); const o = Promise.resolve().then(() => u(e.preConfirm(n, e.validationMessage)));
                o.then(e => { E(ee()) || !1 === e ? (t.hideLoading(), Rt(t)) : Jt(t, void 0 === e ? n : e) }).catch(e => Xt(t || void 0, e)) } else Jt(t, n) },
        Gt = (n, e, o) => { e.popup.onclick = () => { var e, t = L.innerParams.get(n);
                t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o(j.close) } }; let Qt = !1; const en = t => { t.popup.onmousedown = () => { t.container.onmouseup = function(e) { t.container.onmouseup = void 0, e.target === t.container && (Qt = !0) } } },
        tn = t => { t.container.onmousedown = () => { t.popup.onmouseup = function(e) { t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (Qt = !0) } } },
        nn = (n, o, i) => { o.container.onclick = e => { var t = L.innerParams.get(n);
                Qt ? Qt = !1 : e.target === o.container && R(t.allowOutsideClick) && i(j.backdrop) } },
        on = e => "object" == typeof e && e.jquery,
        an = e => e instanceof Element || on(e); const rn = () => { if (T.timeout) {
                { const n = ne(); var e = parseInt(window.getComputedStyle(n).width),
                        t = (n.style.removeProperty("transition"), n.style.width = "100%", parseInt(window.getComputedStyle(n).width)),
                        e = e / t * 100;
                    n.style.removeProperty("transition"), n.style.width = "".concat(e, "%") } return T.timeout.stop() } },
        sn = () => { var e; if (T.timeout) return e = T.timeout.start(), se(e), e }; let cn = !1; const ln = {}; const un = t => { for (let e = t.target; e && e !== document; e = e.parentNode)
            for (const o in ln) { var n = e.getAttribute(o); if (n) return void ln[o].fire({ template: n }) } }; var dn = Object.freeze({ isValidParameter: K, isUpdatableParameter: Y, isDeprecatedParameter: Z, argsToParams: n => { const o = {}; return "object" != typeof n[0] || an(n[0]) ? ["title", "html", "icon"].forEach((e, t) => { t = n[t]; "string" == typeof t || an(t) ? o[e] = t : void 0 !== t && l("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t)) }) : Object.assign(o, n[0]), o }, isVisible: () => E(g()), clickConfirm: jt, clickDeny: () => f() && f().click(), clickCancel: () => b() && b().click(), getContainer: m, getPopup: g, getTitle: X, getHtmlContainer: $, getImage: G, getIcon: s, getInputLabel: () => n(p["input-label"]), getCloseButton: oe, getActions: v, getConfirmButton: h, getDenyButton: f, getCancelButton: b, getLoader: d, getFooter: te, getTimerProgressBar: ne, getFocusableElements: ie, getValidationMessage: ee, isLoading: () => g().hasAttribute("data-loading"), fire: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new this(...t) }, mixin: function(n) { class e extends this { _main(e, t) { return super._main(e, Object.assign({}, n, t)) } } return e }, showLoading: D, enableLoading: D, getTimerLeft: () => T.timeout && T.timeout.getTimerLeft(), stopTimer: rn, resumeTimer: sn, toggleTimer: () => { var e = T.timeout; return e && (e.running ? rn : sn)() }, increaseTimer: e => { if (T.timeout) return e = T.timeout.increase(e), se(e, !0), e }, isTimerRunning: () => T.timeout && T.timeout.isRunning(), bindClickHandler: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
            ln[e] = this, cn || (document.body.addEventListener("click", un), cn = !0) } }); let pn;
    class I { constructor() { if ("undefined" != typeof window) { pn = this; for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var o = Object.freeze(this.constructor.argsToParams(t)),
                    o = (Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0, configurable: !0 } }), this._main(this.params));
                L.promise.set(this, o) } }
        _main(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                e = (J(Object.assign({}, t, e)), T.currentInstance && (T.currentInstance._destroy(), ae() && ot()), T.currentInstance = this, gn(e, t)),
                t = (mt(e), Object.freeze(e), T.timeout && (T.timeout.stop(), delete T.timeout), clearTimeout(T.restoreFocusTimeout), hn(this)); return tt(this, e), L.innerParams.set(this, e), mn(this, t, e) }
        then(e) { const t = L.promise.get(this); return t.then(e) } finally(e) { const t = L.promise.get(this); return t.finally(e) } } const mn = (l, u, d) => new Promise((e, t) => { const n = e => { l.closePopup({ isDismissed: !0, dismiss: e }) }; var o, i, a;
            Ot.swalPromiseResolve.set(l, e), Ot.swalPromiseReject.set(l, t), u.confirmButton.onclick = () => { var e = l,
                    t = L.innerParams.get(e);
                e.disableButtons(), t.input ? Yt(e, "confirm") : $t(e, !0) }, u.denyButton.onclick = () => { var e = l,
                    t = L.innerParams.get(e);
                e.disableButtons(), t.returnInputValueOnDeny ? Yt(e, "deny") : Zt(e, !1) }, u.cancelButton.onclick = () => { var e = l,
                    t = n;
                e.disableButtons(), t(j.cancel) }, u.closeButton.onclick = () => n(j.close), e = l, t = u, a = n, L.innerParams.get(e).toast ? Gt(e, t, a) : (en(t), tn(t), nn(e, t, a)), o = l, e = T, t = d, i = n, Mt(e), t.toast || (e.keydownHandler = e => Ht(o, e, i), e.keydownTarget = t.keydownListenerCapture ? window : g(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, { capture: e.keydownListenerCapture }), e.keydownHandlerAdded = !0), a = l, "select" === (t = d).input || "radio" === t.input ? Bt(a, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (F(t.inputValue) || U(t.inputValue)) && (D(h()), xt(a, t)); { var r = d; const s = m(),
                    c = g(); "function" == typeof r.willOpen && r.willOpen(c), e = window.getComputedStyle(document.body).overflowY, Pt(s, c, r), setTimeout(() => { At(s, c) }, wt), ae() && (kt(s, r.scrollbarPadding, e), nt()), re() || T.previousActiveElement || (T.previousActiveElement = document.activeElement), "function" == typeof r.didOpen && setTimeout(() => r.didOpen(c)), k(s, p["no-transition"]) }
            fn(T, d, n), bn(u, d), setTimeout(() => { u.container.scrollTop = 0 }) }),
        gn = (e, t) => { var n = (e => { e = "string" == typeof e.template ? document.querySelector(e.template) : e.template; if (!e) return {};
                e = e.content, dt(e), e = Object.assign(at(e), rt(e), st(e), ct(e), lt(e), ut(e, it)); return e })(e); const o = Object.assign({}, r, t, n, e); return o.showClass = Object.assign({}, r.showClass, o.showClass), o.hideClass = Object.assign({}, r.hideClass, o.hideClass), o },
        hn = e => { var t = { popup: g(), container: m(), actions: v(), confirmButton: h(), denyButton: f(), cancelButton: b(), loader: d(), closeButton: oe(), validationMessage: ee(), progressSteps: Q() }; return L.domCache.set(e, t), t },
        fn = (e, t, n) => { var o = ne();
            x(o), t.timer && (e.timeout = new gt(() => { n("timer"), delete e.timeout }, t.timer), t.timerProgressBar && (B(o), C(o, t, "timerProgressBar"), setTimeout(() => { e.timeout && e.timeout.running && se(t.timer) }))) },
        bn = (e, t) => { if (!t.toast) return R(t.allowEnterKey) ? void(vn(e, t) || Dt(t, -1, 1)) : yn() },
        vn = (e, t) => t.focusDeny && E(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && E(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !E(e.confirmButton)) && (e.confirmButton.focus(), !0),
        yn = () => { document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur() },
        wn = (Object.assign(I.prototype, e), Object.assign(I, dn), Object.keys(e).forEach(e => { I[e] = function() { if (pn) return pn[e](...arguments) } }), I.DismissReason = j, I.version = "11.4.8", I); return wn.default = wn }), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) { var n = e.createElement("style"); if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try { n.innerHTML = t } catch (e) { n.innerText = t } }(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");
// /*Owl-Carousel 1.3*/
// eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))
/* Owl v2.3.4 */
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }
    e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function(a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = []; for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f } }, { filter: ["items", "settings"], run: function() { var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = ""; for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function() { var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children(); if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center") } }], e.prototype.initializeStage = function() { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, e.prototype.initializeItems = function() { var b = this.$element.find(".owl-item"); if (b.length) return this._items = b.get().map(function(b) { return a(b) }), this._mergers = this._items.map(function() { return 1 }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass) }, e.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var a, b, c;
            a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a) }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) { var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) { var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function(a) { var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function(b) { var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function(b, c) { var e = -1,
            f = 30,
            g = this.width(),
            h = this.coordinates(); return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) { return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e }, e.prototype.animate = function(b) { var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) { var c = this._items.length,
            e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = this.settings,
            f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) { if (b = this._items.length)
                for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
            f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c, e = 1,
            f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) { var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated") }, e.prototype.viewport = function() { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) { var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function() { var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() { var a, c;
        b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) { var c = this._core.settings,
                        e = c.center && Math.ceil(c.items / 2) || c.items,
                        f = c.center && -1 * e || 0,
                        g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                        h = this._core.clones().length,
                        i = a.proxy(function(a, b) { this.load(b) }, this); for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, e.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() { this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(c) { this._core = c, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null; var d = this;
        a(b).on("load", function() { d._core.settings.autoHeight && d.update() }), a(b).resize(function() { d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() { d.update() }, 250)) }) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(b, c),
            f = [],
            g = 0;
        a.each(e, function(b, c) { f.push(a(c).height()) }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) { var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar" }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(c) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" }), b.after(d), b.after(e) }; if (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1; "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } }) }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) { var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype._next = function(d) { this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed) }, e.prototype.read = function() { return (new Date).getTime() - this._time }, e.prototype.play = function(c, d) { var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e) }, e.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call)) }, e.prototype.destroy = function() { var a, b;
        this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() { var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function() { var a, b, c, d, e;
        e = this._core.settings; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() { var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c }
                b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function() { var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return;
                    this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function(c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) { var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) { var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { if (g[b] !== d) return e = !c || b, !1 }), e }

    function f(a) { return e(a, !0) } var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);
/* Fix Does not use passive listeners to improve scrolling performance */
jQuery.event.special.touchstart = { setup: function(_, ns, handle) { this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") }); } };
jQuery.event.special.touchmove = { setup: function(_, ns, handle) { this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") }); } };
jQuery.event.special.wheel = { setup: function(_, ns, handle) { this.addEventListener("wheel", handle, { passive: true }); } };
jQuery.event.special.mousewheel = { setup: function(_, ns, handle) { this.addEventListener("mousewheel", handle, { passive: true }); } };

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;
(function($, window, document, undefined) {

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from being retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };

        $.each(['onResize', 'onThrottledResize'], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        checkVisibility: true,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',
        slideTransition: '',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };

            !grid && this.$stage.children().css(css);

            cache.css = css;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];

            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

                cache.items.merge = merge > 1 || cache.items.merge;

                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                // TODO: Should be computed from number of min width items in stage
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';

            repeat /= 2;

            while (repeat > 0) {
                // Switch to only using appended clones
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                repeat -= 1;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();

            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: ['items'],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) ||
                    (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            this.$stage.children('.center').removeClass('center');
            if (this.settings.center) {
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];

    /**
     * Create the stage DOM element
     */
    Owl.prototype.initializeStage = function() {
        this.$stage = this.$element.find('.' + this.settings.stageClass);

        // if the stage is already in the DOM, grab it and skip stage initialization
        if (this.$stage.length) {
            return;
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $('<' + this.settings.stageElement + '>', {
            "class": this.settings.stageClass
        }).wrap($('<div/>', {
            "class": this.settings.stageOuterClass
        }));

        // append stage
        this.$element.append(this.$stage.parent());
    };

    /**
     * Create item DOM elements
     */
    Owl.prototype.initializeItems = function() {
        var $items = this.$element.find('.owl-item');

        // if the items are already in the DOM, grab them and skip item initialization
        if ($items.length) {
            this._items = $items.get().map(function(item) {
                return $(item);
            });

            this._mergers = this._items.map(function() {
                return 1;
            });

            this.refresh();

            return;
        }

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.isVisible()) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
    };

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.initializeStage();
        this.initializeItems();

        // register event handlers
        this.registerEventHandlers();

        this.leave('initializing');
        this.trigger('initialized');
    };

    /**
     * @returns {Boolean} visibility of $element
     *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
     *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
     */
    Owl.prototype.isVisible = function() {
        return this.settings.checkVisibility ?
            this.$element.is(':visible') :
            true;
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        this.trigger('change', { property: { name: 'settings', value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }

        this.trigger('prepared', { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) { return this[p] }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is('valid') && this.enter('valid');
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave('refreshing');
        this.trigger('refreshed');
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.isVisible()) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');

        this.refresh();

        this.leave('resizing');
        this.trigger('resized');
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
        }

        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));

            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();

            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);

        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();

            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() { return false; });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function(index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value) &&
                    this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();

        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's' + (
                    this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
                )
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function(v, i) { return i });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(['translate', 'translated']);

        this.animate(this.coordinates(position));

        this.release(['translate', 'translated']);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
                reciprocalItemsWidth = this._items[--iterator].width();
                elementWidth = this.$element.width();
                while (iterator--) {
                    reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                    if (reciprocalItemsWidth > elementWidth) {
                        break;
                    }
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

        if (position === undefined) {
            return $.map(this._clones, function(v, i) { return map(i) });
        }

        return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.isVisible()) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function(event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);

        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger('add', { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate('items');

        this.trigger('added', { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {

        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
                item: { count: this._items.length, index: this.current() }
            },
            handler = $.camelCase(
                $.grep(['on', name, namespace], function(v) { return v })
                .join('-').toLowerCase()
            ),
            event = $.Event(
                [name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );

        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }

            this._states.current[name]++;
        }, this));
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--;
        }, this));
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
            event.changedTouches[0] : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');

            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);

                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function(i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return;
        }

        this._visible = this._core.isVisible();
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function() {
        if (this._core.isVisible() === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass('owl-hidden', !this._visible);

        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function() {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) { this.load(v) }, this);
                    //TODO: Need documentation for this new option
                    if (settings.lazyLoadEager > 0) {
                        n += settings.lazyLoadEager;
                        // If the carousel is looping also preload images that are to the "left"
                        if (settings.loop) {
                            position -= settings.lazyLoadEager;
                            n++;
                        }
                    }

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function(index, element) {
            var $element = $(element),
                image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

            this._core.trigger('load', { element: $element, url: url }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        this._previousHeight = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight &&
                    e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var refThis = this;

        // These changes have been taken from a PR by gavrochelegnou proposed in #1575
        // and have been made compatible with the latest jQuery version
        $(window).on('load', function() {
            if (refThis._core.settings.autoHeight) {
                refThis.update();
            }
        });

        // Autoresize the height of the carousel when window is resized
        // When carousel has images, the height is dependent on the width
        // and should also change on resize
        $(window).resize(function() {
            if (refThis._core.settings.autoHeight) {
                if (refThis._intervalId != null) {
                    clearTimeout(refThis._intervalId);
                }

                refThis._intervalId = setTimeout(function() {
                    refThis.update();
                }, 250);
            }
        });

    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            lazyLoadEnabled = this._core.settings.lazyLoad,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
        }

        this._previousHeight = maxheight;

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube';
                }
            })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {

            /*
            		Parses the id's out of the following urls (and probably more):
            		https://www.youtube.com/watch?v=:id
            		https://youtu.be/:id
            		https://vimeo.com/:id
            		https://vimeo.com/channels/:channel/:id
            		https://vimeo.com/groups/:group/videos/:id
            		https://app.vzaar.com/videos/:id

            		Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
            */

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = $('<div/>', {
                        "class": 'owl-video-tn ' + lazyClass,
                        "srcType": path
                    });
                } else {
                    tnLink = $('<div/>', {
                        "class": "owl-video-tn",
                        "style": 'opacity:1;background-image:url(' + path + ')'
                    });
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap($('<div/>', {
            "class": "owl-video-wrapper",
            "style": dimensions
        }));

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html,
            iframe;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
        html.attr('height', height);
        html.attr('width', width);
        if (video.type === 'youtube') {
            html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
        } else if (video.type === 'vimeo') {
            html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
        } else if (video.type === 'vzaar') {
            html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
        }

        iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

        this._playing = item.addClass('owl-video-playing');
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return element && $(element).parent().hasClass('owl-video-frame');
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {

        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css({ 'left': left + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function(e) {
        $(e.target).css({ 'left': '' })
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout id.
         * @type {Number}
         */
        this._call = null;

        /**
         * Depending on the state of the plugin, this variable contains either
         * the start time of the timer or the current timer value if it's
         * paused. Since we start in a paused state we initialize the timer
         * value.
         * @type {Number}
         */
        this._time = 0;

        /**
         * Stores the timeout currently used.
         * @type {Number}
         */
        this._timeout = 0;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = true;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position' && this._paused) {
                    // Reset the timer. This code is triggered when the position
                    // of the carousel was changed through user interaction.
                    this._time = 0;
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Transition to the next slide and set a timeout for the next transition.
     * @private
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype._next = function(speed) {
        this._call = window.setTimeout(
            $.proxy(this._next, this, speed),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        );

        if (this._core.is('interacting') || document.hidden) {
            return;
        }
        this._core.next(speed || this._core.settings.autoplaySpeed);
    }

    /**
     * Reads the current timer value when the timer is playing.
     * @public
     */
    Autoplay.prototype.read = function() {
        return new Date().getTime() - this._time;
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function(timeout, speed) {
        var elapsed;

        if (!this._core.is('rotating')) {
            this._core.enter('rotating');
        }

        timeout = timeout || this._core.settings.autoplayTimeout;

        // Calculate the elapsed time since the last transition. If the carousel
        // wasn't playing this calculation will yield zero.
        elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

        if (this._paused) {
            // Start the clock.
            this._time = this.read();
            this._paused = false;
        } else {
            // Clear the active timeout to allow replacement.
            window.clearTimeout(this._call);
        }

        // Adjust the origin of the timer to match the new timeout value.
        this._time += this.read() % timeout - elapsed;

        this._timeout = timeout;
        this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
        if (this._core.is('rotating')) {
            // Reset the clock.
            this._time = 0;
            this._paused = true;

            window.clearTimeout(this._call);
            this._core.leave('rotating');
        }
    };

    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
        if (this._core.is('rotating') && !this._paused) {
            // Pause the clock.
            this._time = this.read();
            this._paused = true;

            window.clearTimeout(this._call);
        }
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [
            '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
            '<span aria-label="' + 'Next' + '">&#x203a;</span>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) :
            $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [$('<button role="button">')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML')
            ];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) :
            $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ?
                $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, settings.dotsSpeed);
        }, this));

        /*$el.on('focusin', function() {
        	$(document).off(".carousel");

        	$(document).on('keydown.carousel', function(e) {
        		if(e.keyCode == 37) {
        			$el.trigger('prev.owl')
        		}
        		if(e.keyCode == 39) {
        			$el.trigger('next.owl')
        		}
        	});
        });*/

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
        var handler, control, property, override, settings;
        settings = this._core.settings;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            if (control === '$relative' && settings.navContainer) {
                this._controls[control].html('');
            } else {
                this._controls[control].remove();
            }
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ?
            1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ?
                1 : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
        var position, length,
            settings = this._core.settings;

        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);

            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {

    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test('transform');
            },
            csstransforms3d: function() {
                return !!test('perspective');
            },
            csstransitions: function() {
                return !!test('transition');
            },
            cssanimations: function() {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[$.support.transition];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[$.support.animation];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }

})(window.Zepto || window.jQuery, window, document);
// 

! function(t) {
    t.fn.recliner = function(n) {
        function i(i) {
            var a = t(i),
                e = a.attr(n.attrib),
                r = a.prop("tagName");
            e ? (a.addClass("lazy-loading"), /^(IMG|IFRAME|AUDIO|EMBED|SOURCE|TRACK|VIDEO)$/.test(r) ? (a.attr("src", e), a[0].onload = function(t) { o(a) }) : !0 === n.getScript ? t.getScript(e, function(t) { o(a) }) : a.load(e, function(t) { o(a) })) : o(a)
        }

        function o(t) { t.removeClass("lazy-loading"), t.addClass("lazy-loaded"), t.trigger("lazyshow") }

        function a() {
            var i = c.filter(function() {
                var i = t(this);
                if ("none" != i.css("display")) {
                    var o = void 0 !== window.innerHeight ? window.innerHeight : d.height(),
                        a = d.scrollTop(),
                        e = a + o,
                        r = i.offset().top;
                    return r + i.height() >= a - n.threshold && r <= e + n.threshold
                }
            });
            r = i.trigger("lazyload"), c = c.not(r)
        }

        function e(t) { t.one("lazyload", function() { i(this) }), a() }
        var r, l, d = t(window),
            c = this,
            s = this.selector,
            n = t.extend({ attrib: "data-src", throttle: 300, threshold: 100, printable: !0, live: !0, getScript: !1 }, n);
        return d.on("scroll.lazy resize.lazy lookup.lazy", function(t) { l && clearTimeout(l), l = setTimeout(function() { d.trigger("lazyupdate") }, n.throttle) }), d.on("lazyupdate", function(t) { a() }), n.live && t(document).ajaxSuccess(function(n, i, o) {
            var a = t(s).not(".lazy-loaded").not(".lazy-loading");
            c = c.add(a), e(a)
        }), n.printable && window.matchMedia && window.matchMedia("print").addListener(function(n) { n.matches && t(s).trigger("lazyload") }), e(this), this
    }
}(jQuery);

/* SweetAlert2 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t() }(this, function() {
    "use strict";
    const q = "SweetAlert2:",
        H = e => e.charAt(0).toUpperCase() + e.slice(1),
        i = e => Array.prototype.slice.call(e),
        a = e => { console.warn("".concat(q, " ").concat("object" == typeof e ? e.join(" ") : e)) },
        l = e => { console.error("".concat(q, " ").concat(e)) },
        V = [],
        N = (e, t) => { e = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), V.includes(e) || (V.push(e), a(e)) },
        R = e => "function" == typeof e ? e() : e,
        F = e => e && "function" == typeof e.toPromise,
        u = e => F(e) ? e.toPromise() : Promise.resolve(e),
        U = e => e && Promise.resolve(e) === e,
        r = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconColor: void 0, iconHtml: void 0, template: void 0, toast: !1, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: {}, target: "body", color: void 0, backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showDenyButton: !1, showCancelButton: !1, preConfirm: void 0, preDeny: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, denyButtonText: "No", denyButtonAriaLabel: "", denyButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusDeny: !1, focusCancel: !1, returnFocus: !0, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", loaderHtml: "", showLoaderOnConfirm: !1, showLoaderOnDeny: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputLabel: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, returnInputValueOnDeny: !1, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, willOpen: void 0, didOpen: void 0, didRender: void 0, willClose: void 0, didClose: void 0, didDestroy: void 0, scrollbarPadding: !0 },
        W = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        z = {},
        _ = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
        K = e => Object.prototype.hasOwnProperty.call(r, e),
        Y = e => -1 !== W.indexOf(e),
        Z = e => z[e],
        J = e => {!e.backdrop && e.allowOutsideClick && a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'); for (const n in e) t = n, K(t) || a('Unknown parameter "'.concat(t, '"')), e.toast && (t = n, _.includes(t) && a('The parameter "'.concat(t, '" is incompatible with toasts'))), t = n, Z(t) && N(t, Z(t)); var t };
    var e = e => { const t = {}; for (const n in e) t[e[n]] = "swal2-" + e[n]; return t };
    const p = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        o = e(["success", "warning", "info", "question", "error"]),
        m = () => document.body.querySelector(".".concat(p.container)),
        t = e => { const t = m(); return t ? t.querySelector(e) : null },
        n = e => t(".".concat(e)),
        g = () => n(p.popup),
        s = () => n(p.icon),
        X = () => n(p.title),
        $ = () => n(p["html-container"]),
        G = () => n(p.image),
        Q = () => n(p["progress-steps"]),
        ee = () => n(p["validation-message"]),
        h = () => t(".".concat(p.actions, " .").concat(p.confirm)),
        f = () => t(".".concat(p.actions, " .").concat(p.deny));
    const d = () => t(".".concat(p.loader)),
        b = () => t(".".concat(p.actions, " .").concat(p.cancel)),
        v = () => n(p.actions),
        te = () => n(p.footer),
        ne = () => n(p["timer-progress-bar"]),
        oe = () => n(p.close),
        ie = () => { const e = i(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e, t) => { e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex")); return t < e ? 1 : e < t ? -1 : 0 }); var t = i(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e => "-1" !== e.getAttribute("tabindex")); return (t => { const n = []; for (let e = 0; e < t.length; e++) - 1 === n.indexOf(t[e]) && n.push(t[e]); return n })(e.concat(t)).filter(e => E(e)) },
        ae = () => w(document.body, p.shown) && !w(document.body, p["toast-shown"]) && !w(document.body, p["no-backdrop"]),
        re = () => g() && w(g(), p.toast);

    function se(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        const n = ne();
        E(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => { n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%" }, 10))
    }
    const c = { previousBodyPadding: null },
        y = (t, e) => {
            if (t.textContent = "", e) {
                const n = new DOMParser,
                    o = n.parseFromString(e, "text/html");
                i(o.querySelector("head").childNodes).forEach(e => { t.appendChild(e) }), i(o.querySelector("body").childNodes).forEach(e => { t.appendChild(e) })
            }
        },
        w = (t, e) => {
            if (!e) return !1;
            var n = e.split(/\s+/);
            for (let e = 0; e < n.length; e++)
                if (!t.classList.contains(n[e])) return !1;
            return !0
        },
        ce = (t, n) => { i(t.classList).forEach(e => { Object.values(p).includes(e) || Object.values(o).includes(e) || Object.values(n.showClass).includes(e) || t.classList.remove(e) }) },
        C = (e, t, n) => {
            if (ce(e, t), t.customClass && t.customClass[n]) {
                if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return a("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
                A(e, t.customClass[n])
            }
        },
        le = (e, t) => {
            if (!t) return null;
            switch (t) {
                case "select":
                case "textarea":
                case "file":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p[t]));
                case "checkbox":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.checkbox, " input"));
                case "radio":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:checked")) || e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:first-child"));
                case "range":
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.range, " input"));
                default:
                    return e.querySelector(".".concat(p.popup, " > .").concat(p.input))
            }
        },
        ue = e => {
            var t;
            e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t)
        },
        de = (e, t, n) => { e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(t => { Array.isArray(e) ? e.forEach(e => { n ? e.classList.add(t) : e.classList.remove(t) }) : n ? e.classList.add(t) : e.classList.remove(t) }) },
        A = (e, t) => { de(e, t, !0) },
        k = (e, t) => { de(e, t, !1) },
        P = (e, t) => {
            var n = i(e.childNodes);
            for (let e = 0; e < n.length; e++)
                if (w(n[e], t)) return n[e]
        },
        pe = (e, t, n) => {
            (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t)
        },
        B = function(e) { e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex" },
        x = e => { e.style.display = "none" },
        me = (e, t, n, o) => {
            const i = e.querySelector(t);
            i && (i.style[n] = o)
        },
        ge = (e, t, n) => { t ? B(e, n) : x(e) },
        E = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
        he = () => !E(h()) && !E(f()) && !E(b()),
        fe = e => !!(e.scrollHeight > e.clientHeight),
        be = e => {
            const t = window.getComputedStyle(e);
            var e = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                n = parseFloat(t.getPropertyValue("transition-duration") || "0");
            return 0 < e || 0 < n
        },
        ve = () => "undefined" == typeof window || "undefined" == typeof document,
        ye = 100,
        T = {},
        we = () => { T.previousActiveElement && T.previousActiveElement.focus ? (T.previousActiveElement.focus(), T.previousActiveElement = null) : document.body && document.body.focus() },
        Ce = o => new Promise(e => {
            if (!o) return e();
            var t = window.scrollX,
                n = window.scrollY;
            T.restoreFocusTimeout = setTimeout(() => { we(), e() }, ye), window.scrollTo(t, n)
        }),
        Ae = '\n <div aria-labelledby="'.concat(p.title, '" aria-describedby="').concat(p["html-container"], '" class="').concat(p.popup, '" tabindex="-1">\n   <button type="button" class="').concat(p.close, '"></button>\n   <ul class="').concat(p["progress-steps"], '"></ul>\n   <div class="').concat(p.icon, '"></div>\n   <img class="').concat(p.image, '" />\n   <h2 class="').concat(p.title, '" id="').concat(p.title, '"></h2>\n   <div class="').concat(p["html-container"], '" id="').concat(p["html-container"], '"></div>\n   <input class="').concat(p.input, '" />\n   <input type="file" class="').concat(p.file, '" />\n   <div class="').concat(p.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select, '"></select>\n   <div class="').concat(p.radio, '"></div>\n   <label for="').concat(p.checkbox, '" class="').concat(p.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(p.label, '"></span>\n   </label>\n   <textarea class="').concat(p.textarea, '"></textarea>\n   <div class="').concat(p["validation-message"], '" id="').concat(p["validation-message"], '"></div>\n   <div class="').concat(p.actions, '">\n     <div class="').concat(p.loader, '"></div>\n     <button type="button" class="').concat(p.confirm, '"></button>\n     <button type="button" class="').concat(p.deny, '"></button>\n     <button type="button" class="').concat(p.cancel, '"></button>\n   </div>\n   <div class="').concat(p.footer, '"></div>\n   <div class="').concat(p["timer-progress-bar-container"], '">\n     <div class="').concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        ke = () => { const e = m(); return !!e && (e.remove(), k([document.documentElement, document.body], [p["no-backdrop"], p["toast-shown"], p["has-column"]]), !0) },
        S = () => { T.currentInstance.resetValidationMessage() },
        Pe = () => {
            const e = g(),
                t = P(e, p.input),
                n = P(e, p.file),
                o = e.querySelector(".".concat(p.range, " input")),
                i = e.querySelector(".".concat(p.range, " output")),
                a = P(e, p.select),
                r = e.querySelector(".".concat(p.checkbox, " input")),
                s = P(e, p.textarea);
            t.oninput = S, n.onchange = S, a.onchange = S, r.onchange = S, s.oninput = S, o.oninput = () => { S(), i.value = o.value }, o.onchange = () => { S(), o.nextSibling.value = o.value }
        },
        Be = e => "string" == typeof e ? document.querySelector(e) : e,
        xe = e => {
            const t = g();
            t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true")
        },
        Ee = e => { "rtl" === window.getComputedStyle(e).direction && A(m(), p.rtl) },
        Te = (e, t) => {
            if (e instanceof HTMLElement) t.appendChild(e);
            else if ("object" == typeof e) {
                var n = e,
                    o = t;
                if (n.jquery) Se(o, n);
                else y(o, n.toString())
            } else e && y(t, e)
        },
        Se = (t, n) => {
            if (t.textContent = "", 0 in n)
                for (let e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0));
            else t.appendChild(n.cloneNode(!0))
        },
        Le = (() => {
            if (ve()) return !1;
            var e = document.createElement("div"),
                t = { WebkitAnimation: "webkitAnimationEnd", animation: "animationend" };
            for (const n in t)
                if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
            return !1
        })(),
        Oe = (e, t) => {
            var n, o, i, a, r, s = v(),
                c = d();
            (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? B : x)(s), C(s, t, "actions"), s = s, n = c, o = t, i = h(), a = f(), r = b(), je(i, "confirm", o), je(a, "deny", o), je(r, "cancel", o),
                function(e, t, n, o) {
                    if (!o.buttonsStyling) return k([e, t, n], p.styled);
                    A([e, t, n], p.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, A(e, p["default-outline"]));
                    o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, A(t, p["default-outline"]));
                    o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, A(n, p["default-outline"]))
                }(i, a, r, o), o.reverseButtons && (o.toast ? (s.insertBefore(r, i), s.insertBefore(a, i)) : (s.insertBefore(r, n), s.insertBefore(a, n), s.insertBefore(i, n))), y(c, t.loaderHtml), C(c, t, "loader")
        };

    function je(e, t, n) { ge(e, n["show".concat(H(t), "Button")], "inline-block"), y(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = p[t], C(e, n, "".concat(t, "Button")), A(e, n["".concat(t, "ButtonClass")]) }
    const Me = (e, t) => {
        var n, o, i = m();
        i && (o = i, "string" == typeof(n = t.backdrop) ? o.style.background = n : n || A([document.documentElement, document.body], p["no-backdrop"]), o = i, (n = t.position) in p ? A(o, p[n]) : (a('The "position" parameter is not valid, defaulting to "center"'), A(o, p.center)), n = i, (o = t.grow) && "string" == typeof o && (o = "grow-".concat(o)) in p && A(n, p[o]), C(i, t, "container"))
    };
    var L = { awaitingPromise: new WeakMap, promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap };
    const De = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        Ie = (e, r) => {
            const s = g();
            var t, e = L.innerParams.get(e);
            const c = !e || r.input !== e.input;
            De.forEach(e => {
                var t = p[e];
                const n = P(s, t); { var o = r.inputAttributes; const i = le(g(), e); if (i) { qe(i); for (const a in o) i.setAttribute(a, o[a]) } }
                n.className = t, c && x(n)
            }), r.input && (c && (e => {
                if (!O[e.input]) return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
                const t = Ne(e.input),
                    n = O[e.input](t, e);
                B(n), setTimeout(() => { ue(n) })
            })(r), e = r, t = Ne(e.input), e.customClass && A(t, e.customClass.input))
        },
        qe = t => {
            for (let e = 0; e < t.attributes.length; e++) {
                var n = t.attributes[e].name;
                ["type", "value", "style"].includes(n) || t.removeAttribute(n)
            }
        },
        He = (e, t) => { e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder) },
        Ve = (e, t, n) => {
            if (n.inputLabel) {
                e.id = p.input;
                const i = document.createElement("label");
                var o = p["input-label"];
                i.setAttribute("for", e.id), i.className = o, A(i, n.customClass.inputLabel), i.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", i)
            }
        },
        Ne = e => { e = p[e] || p.input; return P(g(), e) },
        O = {},
        Re = (O.text = O.email = O.password = O.number = O.tel = O.url = (e, t) => ("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : U(t.inputValue) || a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), Ve(e, e, t), He(e, t), e.type = t.input, e), O.file = (e, t) => (Ve(e, e, t), He(e, t), e), O.range = (e, t) => {
            const n = e.querySelector("input"),
                o = e.querySelector("output");
            return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, Ve(n, e, t), e
        }, O.select = (e, t) => {
            if (e.textContent = "", t.inputPlaceholder) {
                const n = document.createElement("option");
                y(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n)
            }
            return Ve(e, e, t), e
        }, O.radio = e => (e.textContent = "", e), O.checkbox = (e, t) => {
            const n = le(g(), "checkbox");
            n.value = "1", n.id = p.checkbox, n.checked = Boolean(t.inputValue);
            var o = e.querySelector("span");
            return y(o, t.inputPlaceholder), e
        }, O.textarea = (n, e) => {
            n.value = e.inputValue, He(n, e), Ve(n, n, e);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const t = parseInt(window.getComputedStyle(g()).width);
                    new MutationObserver(() => {
                        var e = n.offsetWidth + (e = n, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
                        e > t ? g().style.width = "".concat(e, "px") : g().style.width = null
                    }).observe(n, { attributes: !0, attributeFilter: ["style"] })
                }
            }), n
        }, (e, t) => {
            const n = $();
            C(n, t, "htmlContainer"), t.html ? (Te(t.html, n), B(n, "block")) : t.text ? (n.textContent = t.text, B(n, "block")) : x(n), Ie(e, t)
        }),
        Fe = (e, t) => {
            var n = te();
            ge(n, t.footer), t.footer && Te(t.footer, n), C(n, t, "footer")
        },
        Ue = (e, t) => {
            const n = oe();
            y(n, t.closeButtonHtml), C(n, t, "closeButton"), ge(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel)
        },
        We = (e, t) => {
            var e = L.innerParams.get(e),
                n = s();
            return e && t.icon === e.icon ? (Ze(n, t), void ze(n, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(o).indexOf(t.icon) ? (l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), x(n)) : (B(n), Ze(n, t), ze(n, t), void A(n, t.showClass.icon)) : x(n)
        },
        ze = (e, t) => {
            for (const n in o) t.icon !== n && k(e, o[n]);
            A(e, o[t.icon]), Je(e, t), _e(), C(e, t, "icon")
        },
        _e = () => { const e = g(); var t = window.getComputedStyle(e).getPropertyValue("background-color"); const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"); for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t },
        Ke = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
        Ye = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
        Ze = (e, t) => {
            var n;
            e.textContent = "", t.iconHtml ? y(e, Xe(t.iconHtml)) : "success" === t.icon ? y(e, Ke) : "error" === t.icon ? y(e, Ye) : (n = { question: "?", warning: "!", info: "i" }, y(e, Xe(n[t.icon])))
        },
        Je = (e, t) => {
            if (t.iconColor) {
                e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
                for (const n of[".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) me(e, n, "backgroundColor", t.iconColor);
                me(e, ".swal2-success-ring", "borderColor", t.iconColor)
            }
        },
        Xe = e => '<div class="'.concat(p["icon-content"], '">').concat(e, "</div>"),
        $e = (e, t) => {
            const n = G();
            if (!t.imageUrl) return x(n);
            B(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), pe(n, "width", t.imageWidth), pe(n, "height", t.imageHeight), n.className = p.image, C(n, t, "image")
        },
        Ge = (e, o) => {
            const i = Q();
            if (!o.progressSteps || 0 === o.progressSteps.length) return x(i);
            B(i), i.textContent = "", o.currentProgressStep >= o.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach((e, t) => {
                e = e, n = document.createElement("li"), A(n, p["progress-step"]), y(n, e);
                var n, e = n;
                i.appendChild(e), t === o.currentProgressStep && A(e, p["active-progress-step"]), t !== o.progressSteps.length - 1 && (n = (e => { const t = document.createElement("li"); return A(t, p["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t })(o), i.appendChild(n))
            })
        },
        Qe = (e, t) => {
            const n = X();
            ge(n, t.title || t.titleText, "block"), t.title && Te(t.title, n), t.titleText && (n.innerText = t.titleText), C(n, t, "title")
        },
        et = (e, t) => {
            var n = m();
            const o = g();
            t.toast ? (pe(n, "width", t.width), o.style.width = "100%", o.insertBefore(d(), s())) : pe(o, "width", t.width), pe(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), x(ee());
            n = o;
            (n.className = "".concat(p.popup, " ").concat(E(n) ? t.showClass.popup : ""), t.toast) ? (A([document.documentElement, document.body], p["toast-shown"]), A(n, p.toast)) : A(n, p.modal);
            C(n, t, "popup"), "string" == typeof t.customClass && A(n, t.customClass);
            t.icon && A(n, p["icon-".concat(t.icon)])
        },
        tt = (e, t) => { et(e, t), Me(e, t), Ge(e, t), We(e, t), $e(e, t), Qe(e, t), Ue(e, t), Re(e, t), Oe(e, t), Fe(e, t), "function" == typeof t.didRender && t.didRender(g()) },
        j = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
        nt = () => {
            const e = i(document.body.children);
            e.forEach(e => { e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true")) })
        },
        ot = () => {
            const e = i(document.body.children);
            e.forEach(e => { e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden") })
        },
        it = ["swal-title", "swal-html", "swal-footer"],
        at = e => {
            const n = {};
            return i(e.querySelectorAll("swal-param")).forEach(e => {
                M(e, ["name", "value"]);
                var t = e.getAttribute("name"),
                    e = e.getAttribute("value");
                "boolean" == typeof r[t] && "false" === e && (n[t] = !1), "object" == typeof r[t] && (n[t] = JSON.parse(e))
            }), n
        },
        rt = e => {
            const n = {};
            return i(e.querySelectorAll("swal-button")).forEach(e => {
                M(e, ["type", "color", "aria-label"]);
                var t = e.getAttribute("type");
                n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(H(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"))
            }), n
        },
        st = e => {
            const t = {},
                n = e.querySelector("swal-image");
            return n && (M(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t
        },
        ct = e => {
            const t = {},
                n = e.querySelector("swal-icon");
            return n && (M(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t
        },
        lt = e => {
            const n = {},
                t = e.querySelector("swal-input");
            t && (M(t, ["type", "label", "placeholder", "value"]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
            e = e.querySelectorAll("swal-input-option");
            return e.length && (n.inputOptions = {}, i(e).forEach(e => {
                M(e, ["value"]);
                var t = e.getAttribute("value"),
                    e = e.innerHTML;
                n.inputOptions[t] = e
            })), n
        },
        ut = (e, t) => {
            const n = {};
            for (const o in t) {
                const i = t[o],
                    a = e.querySelector(i);
                a && (M(a, []), n[i.replace(/^swal-/, "")] = a.innerHTML.trim())
            }
            return n
        },
        dt = e => {
            const t = it.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            i(e.children).forEach(e => { e = e.tagName.toLowerCase(); - 1 === t.indexOf(e) && a("Unrecognized element <".concat(e, ">")) })
        },
        M = (t, n) => { i(t.attributes).forEach(e => {-1 === n.indexOf(e.name) && a(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")]) }) };
    var pt = { email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"), url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL") };

    function mt(e) {
        (t = e).inputValidator || Object.keys(pt).forEach(e => { t.input === e && (t.inputValidator = pt[e]) }), e.showLoaderOnConfirm && !e.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (a('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />"));
        var t, n = e,
            e = ke();
        if (ve()) l("SweetAlert2 requires document to initialize");
        else {
            const o = document.createElement("div"),
                i = (o.className = p.container, e && A(o, p["no-transition"]), y(o, Ae), Be(n.target));
            i.appendChild(o), xe(n), Ee(i), Pe()
        }
    }
    class gt {
        constructor(e, t) { this.callback = e, this.remaining = t, this.running = !1, this.start() }
        start() { return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining }
        stop() { return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining }
        increase(e) { var t = this.running; return t && this.stop(), this.remaining += e, t && this.start(), this.remaining }
        getTimerLeft() { return this.running && (this.stop(), this.start()), this.remaining }
        isRunning() { return this.running }
    }
    const ht = () => {
            null === c.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (c.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(c.previousBodyPadding + (() => {
                const e = document.createElement("div");
                e.className = p["scrollbar-measure"], document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            })(), "px"))
        },
        ft = () => { null !== c.previousBodyPadding && (document.body.style.paddingRight = "".concat(c.previousBodyPadding, "px"), c.previousBodyPadding = null) },
        bt = () => {
            if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !w(document.body, p.iosfix)) {
                var e, t = document.body.scrollTop;
                document.body.style.top = "".concat(-1 * t, "px"), A(document.body, p.iosfix); {
                    const n = m();
                    let t;
                    n.ontouchstart = e => { t = vt(e) }, n.ontouchmove = e => { t && (e.preventDefault(), e.stopPropagation()) }
                } {
                    const o = navigator.userAgent,
                        i = !!o.match(/iPad/i) || !!o.match(/iPhone/i),
                        a = !!o.match(/WebKit/i),
                        r = i && a && !o.match(/CriOS/i);
                    r && (e = 44, g().scrollHeight > window.innerHeight - 44 && (m().style.paddingBottom = "".concat(44, "px")))
                }
            }
        },
        vt = e => {
            var t, n = e.target,
                o = m();
            return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (t = e).touches && 1 < t.touches.length) && (n === o || !(fe(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || fe($()) && $().contains(n)))
        },
        yt = () => {
            var e;
            w(document.body, p.iosfix) && (e = parseInt(document.body.style.top, 10), k(document.body, p.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e)
        },
        wt = 10,
        Ct = e => {
            const t = g();
            if (e.target === t) {
                const n = m();
                t.removeEventListener(Le, Ct), n.style.overflowY = "auto"
            }
        },
        At = (e, t) => { Le && be(t) ? (e.style.overflowY = "hidden", t.addEventListener(Le, Ct)) : e.style.overflowY = "auto" },
        kt = (e, t, n) => { bt(), t && "hidden" !== n && ht(), setTimeout(() => { e.scrollTop = 0 }) },
        Pt = (e, t, n) => { A(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), B(t, "grid"), setTimeout(() => { A(t, n.showClass.popup), t.style.removeProperty("opacity") }, wt), A([document.documentElement, document.body], p.shown), n.heightAuto && n.backdrop && !n.toast && A([document.documentElement, document.body], p["height-auto"]) },
        D = e => {
            let t = g();
            t || new wn, t = g();
            var n = d();
            if (re()) x(s());
            else {
                var o = t;
                const i = v(),
                    a = d();
                !e && E(h()) && (e = h());
                B(i), e && (x(e), a.setAttribute("data-button-to-replace", e.className));
                a.parentNode.insertBefore(a, e), A([o, i], p.loading)
            }
            B(n), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
        },
        Bt = (t, n) => {
            const o = g(),
                i = e => Et[n.input](o, Tt(e), n);
            F(n.inputOptions) || U(n.inputOptions) ? (D(h()), u(n.inputOptions).then(e => { t.hideLoading(), i(e) })) : "object" == typeof n.inputOptions ? i(n.inputOptions) : l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))
        },
        xt = (t, n) => {
            const o = t.getInput();
            x(o), u(n.inputValue).then(e => { o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), B(o), o.focus(), t.hideLoading() }).catch(e => { l("Error in inputValue promise: ".concat(e)), o.value = "", B(o), o.focus(), t.hideLoading() })
        },
        Et = {
            select: (e, t, i) => {
                const a = P(e, p.select),
                    r = (e, t, n) => {
                        const o = document.createElement("option");
                        o.value = n, y(o, t), o.selected = St(n, i.inputValue), e.appendChild(o)
                    };
                t.forEach(e => {
                    var t = e[0];
                    const n = e[1];
                    if (Array.isArray(n)) {
                        const o = document.createElement("optgroup");
                        o.label = t, o.disabled = !1, a.appendChild(o), n.forEach(e => r(o, e[1], e[0]))
                    } else r(a, n, t)
                }), a.focus()
            },
            radio: (e, t, a) => {
                const r = P(e, p.radio),
                    n = (t.forEach(e => {
                        var t = e[0],
                            e = e[1];
                        const n = document.createElement("input"),
                            o = document.createElement("label"),
                            i = (n.type = "radio", n.name = p.radio, n.value = t, St(t, a.inputValue) && (n.checked = !0), document.createElement("span"));
                        y(i, e), i.className = p.label, o.appendChild(n), o.appendChild(i), r.appendChild(o)
                    }), r.querySelectorAll("input"));
                n.length && n[0].focus()
            }
        },
        Tt = n => { const o = []; return "undefined" != typeof Map && n instanceof Map ? n.forEach((e, t) => { let n = e; "object" == typeof n && (n = Tt(n)), o.push([t, n]) }) : Object.keys(n).forEach(e => { let t = n[e]; "object" == typeof t && (t = Tt(t)), o.push([e, t]) }), o },
        St = (e, t) => t && t.toString() === e.toString();

    function Lt() {
        var e, t = L.innerParams.get(this);
        if (t) {
            const n = L.domCache.get(this);
            x(n.loader), re() ? t.icon && B(s()) : (t = n, (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? B(e[0], "inline-block") : he() && x(t.actions)), k([n.popup, n.actions], p.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.denyButton.disabled = !1, n.cancelButton.disabled = !1
        }
    }
    var Ot = { swalPromiseResolve: new WeakMap, swalPromiseReject: new WeakMap };
    const jt = () => h() && h().click();
    const Mt = e => { e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, { capture: e.keydownListenerCapture }), e.keydownHandlerAdded = !1) },
        Dt = (e, t, n) => {
            const o = ie();
            if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
            g().focus()
        },
        It = ["ArrowRight", "ArrowDown"],
        qt = ["ArrowLeft", "ArrowUp"],
        Ht = (e, n, t) => {
            var o = L.innerParams.get(e);
            if (o && (!n.isComposing && 229 !== n.keyCode))
                if (o.stopKeydownPropagation && n.stopPropagation(), "Enter" === n.key) e = e, s = n, i = o, R(i.allowEnterKey) && s.target && e.getInput() && s.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(i.input) || (jt(), s.preventDefault()));
                else if ("Tab" === n.key) {
                e = n;
                var i = o;
                var a = e.target,
                    r = ie();
                let t = -1;
                for (let e = 0; e < r.length; e++)
                    if (a === r[e]) { t = e; break }
                e.shiftKey ? Dt(i, t, -1) : Dt(i, t, 1);
                e.stopPropagation(), e.preventDefault()
            } else if ([...It, ...qt].includes(n.key)) {
                var s = n.key;
                const l = h(),
                    u = f(),
                    d = b();
                if ([l, u, d].includes(document.activeElement)) {
                    var c = It.includes(s) ? "nextElementSibling" : "previousElementSibling";
                    let t = document.activeElement;
                    for (let e = 0; e < v().children.length; e++) { if (!(t = t[c])) return; if (E(t) && t instanceof HTMLButtonElement) break }
                    t instanceof HTMLButtonElement && t.focus()
                }
            } else if ("Escape" === n.key) {
                e = n, n = o, o = t;
                if (R(n.allowEscapeKey)) {
                    e.preventDefault();
                    o(j.esc)
                }
            }
        };

    function Vt(e, t, n, o) { re() ? Ut(e, o) : (Ce(n).then(() => Ut(e, o)), Mt(T)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), ae() && (ft(), yt(), ot()), k([document.documentElement, document.body], [p.shown, p["height-auto"], p["no-backdrop"], p["toast-shown"]]) }

    function Nt(e) {
        e = void 0 !== (n = e) ? Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, n) : { isConfirmed: !1, isDenied: !1, isDismissed: !0 };
        const t = Ot.swalPromiseResolve.get(this);
        var n = (e => {
            const t = g();
            if (!t) return false;
            const n = L.innerParams.get(e);
            if (!n || w(t, n.hideClass.popup)) return false;
            k(t, n.showClass.popup), A(t, n.hideClass.popup);
            const o = m();
            return k(o, n.showClass.backdrop), A(o, n.hideClass.backdrop), Ft(e, t, n), true
        })(this);
        this.isAwaitingPromise() ? e.isDismissed || (Rt(this), t(e)) : n && t(e)
    }
    const Rt = e => { e.isAwaitingPromise() && (L.awaitingPromise.delete(e), L.innerParams.get(e) || e._destroy()) },
        Ft = (e, t, n) => {
            var o, i, a, r = m(),
                s = Le && be(t);
            "function" == typeof n.willClose && n.willClose(t), s ? (s = e, o = t, t = r, i = n.returnFocus, a = n.didClose, T.swalCloseEventFinishedCallback = Vt.bind(null, s, t, i, a), o.addEventListener(Le, function(e) { e.target === o && (T.swalCloseEventFinishedCallback(), delete T.swalCloseEventFinishedCallback) })) : Vt(e, r, n.returnFocus, n.didClose)
        },
        Ut = (e, t) => { setTimeout(() => { "function" == typeof t && t.bind(e.params)(), e._destroy() }) };

    function Wt(e, t, n) {
        const o = L.domCache.get(e);
        t.forEach(e => { o[e].disabled = n })
    }

    function zt(e, t) {
        if (!e) return !1;
        if ("radio" === e.type) {
            const n = e.parentNode.parentNode,
                o = n.querySelectorAll("input");
            for (let e = 0; e < o.length; e++) o[e].disabled = t
        } else e.disabled = t
    }
    const _t = e => { e.isAwaitingPromise() ? (Kt(L, e), L.awaitingPromise.set(e, !0)) : (Kt(Ot, e), Kt(L, e)) },
        Kt = (e, t) => { for (const n in e) e[n].delete(t) };
    e = Object.freeze({
        hideLoading: Lt,
        disableLoading: Lt,
        getInput: function(e) { var t = L.innerParams.get(e || this); return (e = L.domCache.get(e || this)) ? le(e.popup, t.input) : null },
        close: Nt,
        isAwaitingPromise: function() { return !!L.awaitingPromise.get(this) },
        rejectPromise: function(e) {
            const t = Ot.swalPromiseReject.get(this);
            Rt(this), t && t(e)
        },
        handleAwaitingPromise: Rt,
        closePopup: Nt,
        closeModal: Nt,
        closeToast: Nt,
        enableButtons: function() { Wt(this, ["confirmButton", "denyButton", "cancelButton"], !1) },
        disableButtons: function() { Wt(this, ["confirmButton", "denyButton", "cancelButton"], !0) },
        enableInput: function() { return zt(this.getInput(), !1) },
        disableInput: function() { return zt(this.getInput(), !0) },
        showValidationMessage: function(e) {
            const t = L.domCache.get(this);
            var n = L.innerParams.get(this);
            y(t.validationMessage, e), t.validationMessage.className = p["validation-message"], n.customClass && n.customClass.validationMessage && A(t.validationMessage, n.customClass.validationMessage), B(t.validationMessage);
            const o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", p["validation-message"]), ue(o), A(o, p.inputerror))
        },
        resetValidationMessage: function() {
            var e = L.domCache.get(this);
            e.validationMessage && x(e.validationMessage);
            const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), k(t, p.inputerror))
        },
        getProgressSteps: function() { return L.domCache.get(this).progressSteps },
        update: function(e) {
            var t = g(),
                n = L.innerParams.get(this);
            if (!t || w(t, n.hideClass.popup)) return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            t = (t => {
                const n = {};
                return Object.keys(t).forEach(e => {
                    if (Y(e)) n[e] = t[e];
                    else a('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
                }), n
            })(e), n = Object.assign({}, n, t), tt(this, n), L.innerParams.set(this, n), Object.defineProperties(this, { params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 } })
        },
        _destroy: function() {
            var e = L.domCache.get(this);
            const t = L.innerParams.get(this);
            t ? (e.popup && T.swalCloseEventFinishedCallback && (T.swalCloseEventFinishedCallback(), delete T.swalCloseEventFinishedCallback), T.deferDisposalTimer && (clearTimeout(T.deferDisposalTimer), delete T.deferDisposalTimer), "function" == typeof t.didDestroy && t.didDestroy(), e = this, _t(e), delete e.params, delete T.keydownHandler, delete T.keydownTarget, delete T.currentInstance) : _t(this)
        }
    });
    const Yt = (e, t) => {
            var n = L.innerParams.get(e);
            if (!n.input) return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(H(t)));
            var o = ((e, t) => {
                const n = e.getInput();
                if (!n) return null;
                switch (t.input) {
                    case "checkbox":
                        return n.checked ? 1 : 0;
                    case "radio":
                        return (o = n).checked ? o.value : null;
                    case "file":
                        return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;
                    default:
                        return t.inputAutoTrim ? n.value.trim() : n.value
                }
                var o
            })(e, n);
            if (n.inputValidator) {
                var i = e;
                var a = o;
                var r = t;
                const s = L.innerParams.get(i),
                    c = (i.disableInput(), Promise.resolve().then(() => u(s.inputValidator(a, s.validationMessage))));
                c.then(e => { i.enableButtons(), i.enableInput(), e ? i.showValidationMessage(e) : ("deny" === r ? Zt : $t)(i, a) })
            } else e.getInput().checkValidity() ? ("deny" === t ? Zt : $t)(e, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage))
        },
        Zt = (t, n) => {
            const e = L.innerParams.get(t || void 0);
            if (e.showLoaderOnDeny && D(f()), e.preDeny) {
                L.awaitingPromise.set(t || void 0, !0);
                const o = Promise.resolve().then(() => u(e.preDeny(n, e.validationMessage)));
                o.then(e => {!1 === e ? (t.hideLoading(), Rt(t)) : t.closePopup({ isDenied: !0, value: void 0 === e ? n : e }) }).catch(e => Xt(t || void 0, e))
            } else t.closePopup({ isDenied: !0, value: n })
        },
        Jt = (e, t) => { e.closePopup({ isConfirmed: !0, value: t }) },
        Xt = (e, t) => { e.rejectPromise(t) },
        $t = (t, n) => {
            const e = L.innerParams.get(t || void 0);
            if (e.showLoaderOnConfirm && D(), e.preConfirm) {
                t.resetValidationMessage(), L.awaitingPromise.set(t || void 0, !0);
                const o = Promise.resolve().then(() => u(e.preConfirm(n, e.validationMessage)));
                o.then(e => { E(ee()) || !1 === e ? (t.hideLoading(), Rt(t)) : Jt(t, void 0 === e ? n : e) }).catch(e => Xt(t || void 0, e))
            } else Jt(t, n)
        },
        Gt = (n, e, o) => {
            e.popup.onclick = () => {
                var e, t = L.innerParams.get(n);
                t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o(j.close)
            }
        };
    let Qt = !1;
    const en = t => { t.popup.onmousedown = () => { t.container.onmouseup = function(e) { t.container.onmouseup = void 0, e.target === t.container && (Qt = !0) } } },
        tn = t => { t.container.onmousedown = () => { t.popup.onmouseup = function(e) { t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (Qt = !0) } } },
        nn = (n, o, i) => {
            o.container.onclick = e => {
                var t = L.innerParams.get(n);
                Qt ? Qt = !1 : e.target === o.container && R(t.allowOutsideClick) && i(j.backdrop)
            }
        },
        on = e => "object" == typeof e && e.jquery,
        an = e => e instanceof Element || on(e);
    const rn = () => {
            if (T.timeout) {
                {
                    const n = ne();
                    var e = parseInt(window.getComputedStyle(n).width),
                        t = (n.style.removeProperty("transition"), n.style.width = "100%", parseInt(window.getComputedStyle(n).width)),
                        e = e / t * 100;
                    n.style.removeProperty("transition"), n.style.width = "".concat(e, "%")
                }
                return T.timeout.stop()
            }
        },
        sn = () => { var e; if (T.timeout) return e = T.timeout.start(), se(e), e };
    let cn = !1;
    const ln = {};
    const un = t => {
        for (let e = t.target; e && e !== document; e = e.parentNode)
            for (const o in ln) { var n = e.getAttribute(o); if (n) return void ln[o].fire({ template: n }) }
    };
    var dn = Object.freeze({
        isValidParameter: K,
        isUpdatableParameter: Y,
        isDeprecatedParameter: Z,
        argsToParams: n => { const o = {}; return "object" != typeof n[0] || an(n[0]) ? ["title", "html", "icon"].forEach((e, t) => { t = n[t]; "string" == typeof t || an(t) ? o[e] = t : void 0 !== t && l("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t)) }) : Object.assign(o, n[0]), o },
        isVisible: () => E(g()),
        clickConfirm: jt,
        clickDeny: () => f() && f().click(),
        clickCancel: () => b() && b().click(),
        getContainer: m,
        getPopup: g,
        getTitle: X,
        getHtmlContainer: $,
        getImage: G,
        getIcon: s,
        getInputLabel: () => n(p["input-label"]),
        getCloseButton: oe,
        getActions: v,
        getConfirmButton: h,
        getDenyButton: f,
        getCancelButton: b,
        getLoader: d,
        getFooter: te,
        getTimerProgressBar: ne,
        getFocusableElements: ie,
        getValidationMessage: ee,
        isLoading: () => g().hasAttribute("data-loading"),
        fire: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new this(...t) },
        mixin: function(n) { class e extends this { _main(e, t) { return super._main(e, Object.assign({}, n, t)) } } return e },
        showLoading: D,
        enableLoading: D,
        getTimerLeft: () => T.timeout && T.timeout.getTimerLeft(),
        stopTimer: rn,
        resumeTimer: sn,
        toggleTimer: () => { var e = T.timeout; return e && (e.running ? rn : sn)() },
        increaseTimer: e => { if (T.timeout) return e = T.timeout.increase(e), se(e, !0), e },
        isTimerRunning: () => T.timeout && T.timeout.isRunning(),
        bindClickHandler: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
            ln[e] = this, cn || (document.body.addEventListener("click", un), cn = !0)
        }
    });
    let pn;
    class I {
        constructor() {
            if ("undefined" != typeof window) {
                pn = this;
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var o = Object.freeze(this.constructor.argsToParams(t)),
                    o = (Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0, configurable: !0 } }), this._main(this.params));
                L.promise.set(this, o)
            }
        }
        _main(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                e = (J(Object.assign({}, t, e)), T.currentInstance && (T.currentInstance._destroy(), ae() && ot()), T.currentInstance = this, gn(e, t)),
                t = (mt(e), Object.freeze(e), T.timeout && (T.timeout.stop(), delete T.timeout), clearTimeout(T.restoreFocusTimeout), hn(this));
            return tt(this, e), L.innerParams.set(this, e), mn(this, t, e)
        }
        then(e) { const t = L.promise.get(this); return t.then(e) } finally(e) { const t = L.promise.get(this); return t.finally(e) }
    }
    const mn = (l, u, d) => new Promise((e, t) => {
            const n = e => { l.closePopup({ isDismissed: !0, dismiss: e }) };
            var o, i, a;
            Ot.swalPromiseResolve.set(l, e), Ot.swalPromiseReject.set(l, t), u.confirmButton.onclick = () => {
                var e = l,
                    t = L.innerParams.get(e);
                e.disableButtons(), t.input ? Yt(e, "confirm") : $t(e, !0)
            }, u.denyButton.onclick = () => {
                var e = l,
                    t = L.innerParams.get(e);
                e.disableButtons(), t.returnInputValueOnDeny ? Yt(e, "deny") : Zt(e, !1)
            }, u.cancelButton.onclick = () => {
                var e = l,
                    t = n;
                e.disableButtons(), t(j.cancel)
            }, u.closeButton.onclick = () => n(j.close), e = l, t = u, a = n, L.innerParams.get(e).toast ? Gt(e, t, a) : (en(t), tn(t), nn(e, t, a)), o = l, e = T, t = d, i = n, Mt(e), t.toast || (e.keydownHandler = e => Ht(o, e, i), e.keydownTarget = t.keydownListenerCapture ? window : g(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, { capture: e.keydownListenerCapture }), e.keydownHandlerAdded = !0), a = l, "select" === (t = d).input || "radio" === t.input ? Bt(a, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (F(t.inputValue) || U(t.inputValue)) && (D(h()), xt(a, t)); {
                var r = d;
                const s = m(),
                    c = g();
                "function" == typeof r.willOpen && r.willOpen(c), e = window.getComputedStyle(document.body).overflowY, Pt(s, c, r), setTimeout(() => { At(s, c) }, wt), ae() && (kt(s, r.scrollbarPadding, e), nt()), re() || T.previousActiveElement || (T.previousActiveElement = document.activeElement), "function" == typeof r.didOpen && setTimeout(() => r.didOpen(c)), k(s, p["no-transition"])
            }
            fn(T, d, n), bn(u, d), setTimeout(() => { u.container.scrollTop = 0 })
        }),
        gn = (e, t) => {
            var n = (e => {
                e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
                if (!e) return {};
                e = e.content, dt(e), e = Object.assign(at(e), rt(e), st(e), ct(e), lt(e), ut(e, it));
                return e
            })(e);
            const o = Object.assign({}, r, t, n, e);
            return o.showClass = Object.assign({}, r.showClass, o.showClass), o.hideClass = Object.assign({}, r.hideClass, o.hideClass), o
        },
        hn = e => { var t = { popup: g(), container: m(), actions: v(), confirmButton: h(), denyButton: f(), cancelButton: b(), loader: d(), closeButton: oe(), validationMessage: ee(), progressSteps: Q() }; return L.domCache.set(e, t), t },
        fn = (e, t, n) => {
            var o = ne();
            x(o), t.timer && (e.timeout = new gt(() => { n("timer"), delete e.timeout }, t.timer), t.timerProgressBar && (B(o), C(o, t, "timerProgressBar"), setTimeout(() => { e.timeout && e.timeout.running && se(t.timer) })))
        },
        bn = (e, t) => { if (!t.toast) return R(t.allowEnterKey) ? void(vn(e, t) || Dt(t, -1, 1)) : yn() },
        vn = (e, t) => t.focusDeny && E(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && E(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !E(e.confirmButton)) && (e.confirmButton.focus(), !0),
        yn = () => { document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur() },
        wn = (Object.assign(I.prototype, e), Object.assign(I, dn), Object.keys(e).forEach(e => { I[e] = function() { if (pn) return pn[e](...arguments) } }), I.DismissReason = j, I.version = "11.4.8", I);
    return wn.default = wn
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try { n.innerHTML = t } catch (e) { n.innerText = t }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/*! Lazy Load 1.9.1 - MIT license - Copyright 2010-2013 Mika Tuupola */
! function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible"))
                    if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                    else if (a.belowthefold(this, j) || a.rightoffold(this, j)) { if (++b > j.failure_limit) return !1 } else c.trigger("appear"), b = 0
            })
        }
        var h, i = this,
            j = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !0, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() { return g() }), this.each(function() {
            var b = this,
                c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function(a) { return !a.loaded });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() { b.loaded || c.trigger("appear") })
        }), e.bind("resize", function() { g() }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) { b.originalEvent && b.originalEvent.persisted && i.each(function() { a(this).trigger("appear") }) }), a(c).ready(function() { g() }), this
    }, a.belowthefold = function(c, f) { var g; return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold }, a.rightoffold = function(c, f) { var g; return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold }, a.abovethetop = function(c, f) { var g; return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height() }, a.leftofbegin = function(c, f) { var g; return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width() }, a.inviewport = function(b, c) { return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c)) }, a.extend(a.expr[":"], { "below-the-fold": function(b) { return a.belowthefold(b, { threshold: 0 }) }, "above-the-top": function(b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-screen": function(b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-screen": function(b) { return !a.rightoffold(b, { threshold: 0 }) }, "in-viewport": function(b) { return a.inviewport(b, { threshold: 0 }) }, "above-the-fold": function(b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-fold": function(b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-fold": function(b) { return !a.rightoffold(b, { threshold: 0 }) } })
}(jQuery, window, document);