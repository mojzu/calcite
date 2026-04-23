(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);
        new MutationObserver((s)=>{
            for (const a of s)if (a.type === "childList") for (const i of a.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(s) {
            const a = {};
            return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function o(s) {
            if (s.ep) return;
            s.ep = !0;
            const a = n(s);
            fetch(s.href, a);
        }
    })();
    let c;
    const _e = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: ()=>{
            throw Error("TextDecoder not available");
        }
    };
    typeof TextDecoder < "u" && _e.decode();
    let O = null;
    function U() {
        return (O === null || O.byteLength === 0) && (O = new Uint8Array(c.memory.buffer)), O;
    }
    function W(t, e) {
        return t = t >>> 0, _e.decode(U().subarray(t, t + e));
    }
    function Re(t, e) {
        return t = t >>> 0, U().subarray(t / 1, t / 1 + e);
    }
    function Ne(t) {
        const e = c.__externref_table_alloc();
        return c.__wbindgen_export_3.set(e, t), e;
    }
    function me(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const o = Ne(n);
            c.__wbindgen_exn_store(o);
        }
    }
    let v = 0;
    const J = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
        encode: ()=>{
            throw Error("TextEncoder not available");
        }
    }, Ae = typeof J.encodeInto == "function" ? function(t, e) {
        return J.encodeInto(t, e);
    } : function(t, e) {
        const n = J.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    };
    function C(t, e, n) {
        if (n === void 0) {
            const r = J.encode(t), l = e(r.length, 1) >>> 0;
            return U().subarray(l, l + r.length).set(r), v = r.length, l;
        }
        let o = t.length, s = e(o, 1) >>> 0;
        const a = U();
        let i = 0;
        for(; i < o; i++){
            const r = t.charCodeAt(i);
            if (r > 127) break;
            a[s + i] = r;
        }
        if (i !== o) {
            i !== 0 && (t = t.slice(i)), s = n(s, o, o = i + t.length * 3, 1) >>> 0;
            const r = U().subarray(s + i, s + o), l = Ae(t, r);
            i += l.written, s = n(s, o, i, 1) >>> 0;
        }
        return v = i, s;
    }
    let T = null;
    function z() {
        return (T === null || T.buffer.detached === !0 || T.buffer.detached === void 0 && T.buffer !== c.memory.buffer) && (T = new DataView(c.memory.buffer)), T;
    }
    function Me(t) {
        return t == null;
    }
    function de(t, e) {
        t = t >>> 0;
        const n = z(), o = [];
        for(let s = t; s < t + 4 * e; s += 4)o.push(c.__wbindgen_export_3.get(n.getUint32(s, !0)));
        return c.__externref_drop_slice(t, e), o;
    }
    const De = Object.freeze({
        JqueryTerminal: 0,
        0: "JqueryTerminal",
        Html: 1,
        1: "Html"
    }), ue = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_commandresult_free(t >>> 0, 1));
    class ie {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(ie.prototype);
            return n.__wbg_ptr = e, ue.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, ue.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_commandresult_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const o = c.commandresult_output(this.__wbg_ptr);
                return e = o[0], n = o[1], W(o[0], o[1]);
            } finally{
                c.__wbindgen_free(e, n, 1);
            }
        }
        get is_command() {
            return c.__wbg_get_commandresult_is_command(this.__wbg_ptr) !== 0;
        }
        set is_command(e) {
            c.__wbg_set_commandresult_is_command(this.__wbg_ptr, e);
        }
        get should_clear() {
            return c.__wbg_get_commandresult_should_clear(this.__wbg_ptr) !== 0;
        }
        set should_clear(e) {
            c.__wbg_set_commandresult_should_clear(this.__wbg_ptr, e);
        }
        get should_reset() {
            return c.__wbg_get_commandresult_should_reset(this.__wbg_ptr) !== 0;
        }
        set should_reset(e) {
            c.__wbg_set_commandresult_should_reset(this.__wbg_ptr, e);
        }
    }
    const pe = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_interpreteroutput_free(t >>> 0, 1));
    class re {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(re.prototype);
            return n.__wbg_ptr = e, pe.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, pe.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_interpreteroutput_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const o = c.interpreteroutput_output(this.__wbg_ptr);
                return e = o[0], n = o[1], W(o[0], o[1]);
            } finally{
                c.__wbindgen_free(e, n, 1);
            }
        }
        get is_error() {
            return c.__wbg_get_commandresult_is_command(this.__wbg_ptr) !== 0;
        }
        set is_error(e) {
            c.__wbg_set_commandresult_is_command(this.__wbg_ptr, e);
        }
    }
    const be = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_numbat_free(t >>> 0, 1));
    class X {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(X.prototype);
            return n.__wbg_ptr = e, be.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, be.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_numbat_free(e, 0);
        }
        print_info(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = v;
            return c.numbat_print_info(this.__wbg_ptr, n, o);
        }
        try_run_command(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = v, s = c.numbat_try_run_command(this.__wbg_ptr, n, o);
            return ie.__wrap(s);
        }
        set_exchange_rates(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = v;
            c.numbat_set_exchange_rates(this.__wbg_ptr, n, o);
        }
        get_completions_for(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = v, s = c.numbat_get_completions_for(this.__wbg_ptr, n, o);
            var a = de(s[0], s[1]).slice();
            return c.__wbindgen_free(s[0], s[1] * 4, 4), a;
        }
        get_unicode_completion(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = v, s = c.numbat_get_unicode_completion(this.__wbg_ptr, n, o);
            var a = de(s[0], s[1]).slice();
            return c.__wbindgen_free(s[0], s[1] * 4, 4), a;
        }
        static new(e, n, o) {
            const s = c.numbat_new(e, n, o);
            return X.__wrap(s);
        }
        help() {
            return c.numbat_help(this.__wbg_ptr);
        }
        interpret(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), o = v, s = c.numbat_interpret(this.__wbg_ptr, n, o);
            return re.__wrap(s);
        }
    }
    async function Pe(t, e) {
        if (typeof Response == "function" && t instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(t, e);
            } catch (o) {
                if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
                else throw o;
            }
            const n = await t.arrayBuffer();
            return await WebAssembly.instantiate(n, e);
        } else {
            const n = await WebAssembly.instantiate(t, e);
            return n instanceof WebAssembly.Instance ? {
                instance: n,
                module: t
            } : n;
        }
    }
    function He() {
        const t = {};
        return t.wbg = {}, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
            let o, s;
            try {
                o = e, s = n, console.error(W(e, n));
            } finally{
                c.__wbindgen_free(o, s, 1);
            }
        }, t.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
            return me(function(e, n) {
                globalThis.crypto.getRandomValues(Re(e, n));
            }, arguments);
        }, t.wbg.__wbg_getTime_46267b1c24877e30 = function(e) {
            return e.getTime();
        }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
            return me(function(e, n) {
                return Reflect.get(e, n);
            }, arguments);
        }, t.wbg.__wbg_new0_f788a2397c7ca929 = function() {
            return new Date;
        }, t.wbg.__wbg_new_405e22f390576ce2 = function() {
            return new Object;
        }, t.wbg.__wbg_new_78feb108b6472713 = function() {
            return new Array;
        }, t.wbg.__wbg_new_8a6f238a6ece86ea = function() {
            return new Error;
        }, t.wbg.__wbg_new_a84b4fa486a621ad = function(e, n) {
            return new Intl.DateTimeFormat(e, n);
        }, t.wbg.__wbg_resolvedOptions_d495c21c27a8f865 = function(e) {
            return e.resolvedOptions();
        }, t.wbg.__wbg_stack_0ed75d68575b0f3c = function(e, n) {
            const o = n.stack, s = C(o, c.__wbindgen_malloc, c.__wbindgen_realloc), a = v;
            z().setInt32(e + 4, a, !0), z().setInt32(e + 0, s, !0);
        }, t.wbg.__wbindgen_init_externref_table = function() {
            const e = c.__wbindgen_export_3, n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
        }, t.wbg.__wbindgen_number_new = function(e) {
            return e;
        }, t.wbg.__wbindgen_string_get = function(e, n) {
            const o = n, s = typeof o == "string" ? o : void 0;
            var a = Me(s) ? 0 : C(s, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v;
            z().setInt32(e + 4, i, !0), z().setInt32(e + 0, a, !0);
        }, t.wbg.__wbindgen_string_new = function(e, n) {
            return W(e, n);
        }, t.wbg.__wbindgen_throw = function(e, n) {
            throw new Error(W(e, n));
        }, t;
    }
    function Oe(t, e) {
        return c = t.exports, he.__wbindgen_wasm_module = e, T = null, O = null, c.__wbindgen_start(), c;
    }
    async function he(t) {
        if (c !== void 0) return c;
        typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/assets/numbat_wasm_bg-BTss0vKK.wasm", import.meta.url));
        const e = He();
        (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
        const { instance: n, module: o } = await Pe(await t, e);
        return Oe(n, o);
    }
    const ze = "modulepreload", Fe = function(t) {
        return "/" + t;
    }, fe = {}, Ue = function(e, n, o) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            let i = function(m) {
                return Promise.all(m.map((b)=>Promise.resolve(b).then((g)=>({
                            status: "fulfilled",
                            value: g
                        }), (g)=>({
                            status: "rejected",
                            reason: g
                        }))));
            };
            document.getElementsByTagName("link");
            const r = document.querySelector("meta[property=csp-nonce]"), l = r?.nonce || r?.getAttribute("nonce");
            s = i(n.map((m)=>{
                if (m = Fe(m), m in fe) return;
                fe[m] = !0;
                const b = m.endsWith(".css"), g = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${m}"]${g}`)) return;
                const p = document.createElement("link");
                if (p.rel = b ? "stylesheet" : ze, b || (p.as = "script"), p.crossOrigin = "", p.href = m, l && p.setAttribute("nonce", l), document.head.appendChild(p), b) return new Promise((h, w)=>{
                    p.addEventListener("load", h), p.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${m}`)));
                });
            }));
        }
        function a(i) {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = i, window.dispatchEvent(r), !r.defaultPrevented) throw i;
        }
        return s.then((i)=>{
            for (const r of i || [])r.status === "rejected" && a(r.reason);
            return e().catch(a);
        });
    };
    function We(t = {}) {
        const { immediate: e = !1, onNeedRefresh: n, onOfflineReady: o, onRegistered: s, onRegisteredSW: a, onRegisterError: i } = t;
        let r, l, m;
        const b = async (p = !0)=>{
            await l, m?.();
        };
        async function g() {
            if ("serviceWorker" in navigator) {
                if (r = await Ue(async ()=>{
                    const { Workbox: p } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: p
                    };
                }, []).then(({ Workbox: p })=>new p("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((p)=>{
                    i?.(p);
                }), !r) return;
                m = ()=>{
                    r?.messageSkipWaiting();
                };
                {
                    let p = !1;
                    const h = ()=>{
                        p = !0, r?.addEventListener("controlling", (w)=>{
                            w.isUpdate && window.location.reload();
                        }), n?.();
                    };
                    r.addEventListener("installed", (w)=>{
                        typeof w.isUpdate > "u" ? typeof w.isExternal < "u" && w.isExternal ? h() : !p && o?.() : w.isUpdate || o?.();
                    }), r.addEventListener("waiting", h);
                }
                r.register({
                    immediate: e
                }).then((p)=>{
                    a ? a("/sw.js", p) : s?.(p);
                }).catch((p)=>{
                    i?.(p);
                });
            }
        }
        return l = g(), b;
    }
    function oe() {
        const t = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${t}px`), window.scrollTo(0, 0);
    }
    oe();
    window.visualViewport ? window.visualViewport.addEventListener("resize", oe) : window.addEventListener("resize", oe);
    const E = document.getElementById("output"), qe = document.getElementById("form"), d = document.getElementById("input"), ee = document.getElementById("variables-list"), P = document.getElementById("tabs-scroll"), M = document.getElementById("session-select"), Ve = document.getElementById("sidebar-middle"), G = document.getElementById("scripts-file-input"), Ee = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/, we = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/, ve = "calcite-sessions", $e = 10, L = new Set, I = new Map;
    let B, q = null, u, y = -1, F = "";
    function ke(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function je(t) {
        let e = "";
        for(; e !== t;)e = t, t = t.replace(/\[\[[^\]]*\]([\s\S]*?)\]/g, "$1");
        return t;
    }
    function Le(t) {
        return je(t).replace(/\n/g, "<br>");
    }
    function Ke() {
        document.getElementById("variables").classList.remove("mobile-open");
    }
    const Ie = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    function Ze(t, e) {
        const n = Array.from(e.querySelectorAll(Ie));
        if (n.length === 0) return;
        const o = n[0], s = n[n.length - 1];
        t.shiftKey ? document.activeElement === o && (t.preventDefault(), s.focus()) : document.activeElement === s && (t.preventDefault(), o.focus());
    }
    function ae(t, e) {
        t.setAttribute("role", "button"), t.tabIndex = 0, t.addEventListener("click", e), t.addEventListener("keydown", (n)=>{
            (n.key === "Enter" || n.key === " ") && (n.preventDefault(), e());
        });
    }
    function R(t) {
        const e = d.value.length, n = document.activeElement === d, o = n ? d.selectionStart ?? e : e, s = n ? d.selectionEnd ?? e : e;
        d.setRangeText(t, o, s, "end"), d.focus();
    }
    function K() {
        y = -1, F = "";
    }
    function Ce(t, e, n) {
        const o = document.createElement("div");
        o.className = "entry" + (n ? " error" : "");
        const s = document.createElement("div");
        s.className = "query", s.textContent = t, s.title = "Re-use this expression", ae(s, ()=>R(t));
        const a = document.createElement("div");
        a.className = "result", a.innerHTML = e, o.appendChild(s), o.appendChild(a), E.appendChild(o), E.scrollTop = E.scrollHeight;
    }
    function $() {
        if (L.size === 0) {
            ee.innerHTML = '<p class="no-vars">No variables yet</p>';
            return;
        }
        ee.innerHTML = "";
        for (const t of L)try {
            const e = B.interpret(t);
            if (!e.is_error) {
                const n = document.createElement("div");
                n.className = "var-item", n.title = `Insert "${t}"`, ae(n, ()=>{
                    R(t), Ke();
                });
                const o = document.createElement("span");
                o.className = "var-name", o.textContent = t;
                const s = document.createElement("span");
                s.className = "var-value", s.innerHTML = e.output, n.appendChild(o), n.appendChild(s), ee.appendChild(n);
            }
        } catch  {}
    }
    function j() {
        const t = document.getElementById("functions-list");
        if (I.size === 0) {
            t.innerHTML = '<p class="no-vars">No functions yet</p>';
            return;
        }
        t.innerHTML = "";
        for (const [e, n] of I){
            const o = document.createElement("div");
            o.className = "fn-item", o.title = `Insert "${e}("`, ae(o, ()=>{
                R(e + "("), f("functions-popup");
            });
            const s = document.createElement("span");
            s.className = "fn-name", s.textContent = e;
            const a = document.createElement("span");
            a.className = "fn-params", a.textContent = n, o.appendChild(s), o.appendChild(a), t.appendChild(o);
        }
    }
    function Y(t, e, n, o) {
        const s = document.getElementById("scripts-list"), a = s.querySelector(".no-vars");
        a && s.removeChild(a);
        const i = document.createElement("div");
        i.className = "script-item" + (o ? " error" : "");
        const r = document.createElement("span");
        r.className = "script-name", r.textContent = t;
        const l = document.createElement("span");
        if (l.className = "script-meta", o) l.textContent = "failed to load";
        else {
            const m = [];
            e > 0 && m.push(`${e} function${e !== 1 ? "s" : ""}`), n > 0 && m.push(`${n} variable${n !== 1 ? "s" : ""}`), l.textContent = m.length > 0 ? m.join(", ") : "loaded";
        }
        i.appendChild(r), i.appendChild(l), s.appendChild(i);
    }
    function S() {
        try {
            return JSON.parse(localStorage.getItem(ve) ?? "[]");
        } catch  {
            return [];
        }
    }
    function Z(t) {
        localStorage.setItem(ve, JSON.stringify(t));
    }
    function ce() {
        return {
            id: Date.now(),
            label: new Date().toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit"
            }),
            named: !1,
            inputs: [],
            scripts: []
        };
    }
    function k() {
        const t = S(), e = t.findIndex((s)=>s.id === u.id);
        e >= 0 ? t[e] = u : t.unshift(u);
        let n = 0;
        const o = t.filter((s)=>s.named ? !0 : (n++, n <= $e));
        Z(o);
    }
    function D() {
        const e = [
            ...S()
        ].reverse();
        P.innerHTML = "", P.setAttribute("role", "tablist"), P.setAttribute("aria-label", "Sessions");
        for (const i of e){
            const r = i.id === u.id, l = document.createElement("div");
            l.className = "tab" + (r ? " active" : "") + (i.named ? " named" : ""), l.setAttribute("role", "tab"), l.setAttribute("aria-selected", r ? "true" : "false"), l.setAttribute("aria-controls", "output");
            const m = document.createElement("span");
            m.className = "tab-label", m.textContent = i.label, r || (m.tabIndex = 0, m.addEventListener("click", ()=>V(i.id)), m.addEventListener("keydown", (g)=>{
                (g.key === "Enter" || g.key === " ") && (g.preventDefault(), V(i.id));
            })), m.addEventListener("dblclick", (g)=>{
                g.stopPropagation(), Ge(i, m);
            }), l.appendChild(m);
            const b = document.createElement("button");
            b.className = "tab-close", b.textContent = "×", b.title = "Close session", b.addEventListener("click", (g)=>{
                g.stopPropagation();
                const h = S().filter((w)=>w.id !== i.id);
                Z(h), r ? (u.inputs = [], h.length > 0 ? V(h[0].id) : Be()) : D();
            }), l.appendChild(b), P.appendChild(l);
        }
        const n = P.querySelector(".tab.active");
        n && n.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }), M.innerHTML = "";
        const o = e.filter((i)=>i.named), s = e.filter((i)=>!i.named);
        function a(i, r) {
            const l = document.createElement("option");
            l.value = String(i.id), l.textContent = i.label, l.selected = i.id === u.id, r.appendChild(l);
        }
        if (o.length > 0 && s.length > 0) {
            const i = document.createElement("optgroup");
            i.label = "Saved", o.forEach((l)=>a(l, i)), M.appendChild(i);
            const r = document.createElement("optgroup");
            r.label = "Recent", s.forEach((l)=>a(l, r)), M.appendChild(r);
        } else e.forEach((i)=>a(i, M));
    }
    function Ge(t, e) {
        const n = document.createElement("input");
        n.type = "text", n.className = "tab-rename-input", n.value = t.label, e.replaceWith(n), n.focus(), n.select();
        function o() {
            const s = n.value.trim();
            if (s && s !== t.label) {
                t.label = s, t.named = !0, t.id === u.id && (u = t);
                const a = S(), i = a.findIndex((r)=>r.id === t.id);
                i >= 0 && (a[i] = t, Z(a));
            }
            D();
        }
        n.addEventListener("blur", o), n.addEventListener("keydown", (s)=>{
            s.key === "Enter" && (s.preventDefault(), n.blur()), s.key === "Escape" && (n.value = t.label, n.blur());
        });
    }
    function Be() {
        u && (u.inputs.length === 0 ? Z(S().filter((t)=>t.id !== u.id)) : k()), Q(), L.clear(), I.clear(), E.innerHTML = "", document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', $(), j(), u = ce(), k(), D(), K(), d.value = "", d.focus();
    }
    async function V(t) {
        const n = S().find((o)=>o.id === t);
        if (n) {
            u && (u.inputs.length === 0 ? Z(S().filter((o)=>o.id !== u.id)) : k()), Q(), L.clear(), I.clear(), E.innerHTML = "", document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', u = n, K(), D();
            for (const o of n.inputs){
                let s = "", a = !1;
                try {
                    const i = B.try_run_command(o);
                    if (i.is_command) i.should_reset ? (E.innerHTML = "", L.clear(), I.clear()) : i.should_clear ? E.innerHTML = "" : s = Le(i.output ?? "(command executed)");
                    else {
                        const r = B.interpret(o);
                        if (s = r.output, a = r.is_error, !a) {
                            for (const l of o.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm))L.add(l[1]);
                            for (const l of o.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm))I.set(l[1], l[2]);
                        }
                    }
                } catch (i) {
                    s = ke(i instanceof Error ? i.message : String(i)), a = !0;
                }
                s && Ce(o, s, a);
            }
            $(), j();
            for (const o of n.scripts ?? [])Y(o.name, o.fnCount, o.letCount, !1);
            d.focus();
        }
    }
    const Je = [
        {
            name: "Length",
            units: [
                {
                    symbol: "m",
                    name: "metre"
                },
                {
                    symbol: "km",
                    name: "kilometre"
                },
                {
                    symbol: "cm",
                    name: "centimetre"
                },
                {
                    symbol: "mm",
                    name: "millimetre"
                },
                {
                    symbol: "μm",
                    name: "micrometre"
                },
                {
                    symbol: "nm",
                    name: "nanometre"
                },
                {
                    symbol: "ft",
                    name: "foot"
                },
                {
                    symbol: "in",
                    name: "inch"
                },
                {
                    symbol: "yd",
                    name: "yard"
                },
                {
                    symbol: "mi",
                    name: "mile"
                },
                {
                    symbol: "nmi",
                    name: "nautical mile"
                },
                {
                    symbol: "ly",
                    name: "light year"
                },
                {
                    symbol: "AU",
                    name: "astronomical unit"
                },
                {
                    symbol: "pc",
                    name: "parsec"
                }
            ]
        },
        {
            name: "Mass",
            units: [
                {
                    symbol: "kg",
                    name: "kilogram"
                },
                {
                    symbol: "g",
                    name: "gram"
                },
                {
                    symbol: "mg",
                    name: "milligram"
                },
                {
                    symbol: "μg",
                    name: "microgram"
                },
                {
                    symbol: "t",
                    name: "metric tonne"
                },
                {
                    symbol: "lb",
                    name: "pound"
                },
                {
                    symbol: "oz",
                    name: "ounce"
                },
                {
                    symbol: "st",
                    name: "stone"
                }
            ]
        },
        {
            name: "Time",
            units: [
                {
                    symbol: "s",
                    name: "second"
                },
                {
                    symbol: "ms",
                    name: "millisecond"
                },
                {
                    symbol: "μs",
                    name: "microsecond"
                },
                {
                    symbol: "ns",
                    name: "nanosecond"
                },
                {
                    symbol: "min",
                    name: "minute"
                },
                {
                    symbol: "h",
                    name: "hour"
                },
                {
                    symbol: "day",
                    name: "day"
                },
                {
                    symbol: "week",
                    name: "week"
                },
                {
                    symbol: "month",
                    name: "month"
                },
                {
                    symbol: "year",
                    name: "year"
                }
            ]
        },
        {
            name: "Temperature",
            units: [
                {
                    symbol: "K",
                    name: "kelvin"
                },
                {
                    symbol: "celsius",
                    name: "degrees Celsius (°C)"
                },
                {
                    symbol: "fahrenheit",
                    name: "degrees Fahrenheit (°F)"
                }
            ]
        },
        {
            name: "Area",
            units: [
                {
                    symbol: "m²",
                    name: "square metre"
                },
                {
                    symbol: "km²",
                    name: "square kilometre"
                },
                {
                    symbol: "cm²",
                    name: "square centimetre"
                },
                {
                    symbol: "ft²",
                    name: "square foot"
                },
                {
                    symbol: "in²",
                    name: "square inch"
                },
                {
                    symbol: "ha",
                    name: "hectare"
                },
                {
                    symbol: "acre",
                    name: "acre"
                }
            ]
        },
        {
            name: "Volume",
            units: [
                {
                    symbol: "m³",
                    name: "cubic metre"
                },
                {
                    symbol: "L",
                    name: "litre"
                },
                {
                    symbol: "mL",
                    name: "millilitre"
                },
                {
                    symbol: "μL",
                    name: "microlitre"
                },
                {
                    symbol: "gal",
                    name: "gallon"
                },
                {
                    symbol: "qt",
                    name: "quart"
                },
                {
                    symbol: "pt",
                    name: "pint"
                },
                {
                    symbol: "cup",
                    name: "cup"
                },
                {
                    symbol: "floz",
                    name: "fluid ounce"
                }
            ]
        },
        {
            name: "Speed",
            units: [
                {
                    symbol: "km/h",
                    name: "kilometre per hour"
                },
                {
                    symbol: "mph",
                    name: "mile per hour"
                },
                {
                    symbol: "knot",
                    name: "knot"
                },
                {
                    symbol: "c",
                    name: "speed of light"
                }
            ]
        },
        {
            name: "Force",
            units: [
                {
                    symbol: "N",
                    name: "newton"
                },
                {
                    symbol: "kN",
                    name: "kilonewton"
                },
                {
                    symbol: "MN",
                    name: "meganewton"
                },
                {
                    symbol: "lbf",
                    name: "pound-force"
                }
            ]
        },
        {
            name: "Energy",
            units: [
                {
                    symbol: "J",
                    name: "joule"
                },
                {
                    symbol: "kJ",
                    name: "kilojoule"
                },
                {
                    symbol: "MJ",
                    name: "megajoule"
                },
                {
                    symbol: "cal",
                    name: "calorie"
                },
                {
                    symbol: "kcal",
                    name: "kilocalorie"
                },
                {
                    symbol: "Wh",
                    name: "watt-hour"
                },
                {
                    symbol: "kWh",
                    name: "kilowatt-hour"
                },
                {
                    symbol: "eV",
                    name: "electronvolt"
                },
                {
                    symbol: "BTU",
                    name: "British thermal unit"
                }
            ]
        },
        {
            name: "Power",
            units: [
                {
                    symbol: "mW",
                    name: "milliwatt"
                },
                {
                    symbol: "W",
                    name: "watt"
                },
                {
                    symbol: "kW",
                    name: "kilowatt"
                },
                {
                    symbol: "MW",
                    name: "megawatt"
                },
                {
                    symbol: "GW",
                    name: "gigawatt"
                },
                {
                    symbol: "hp",
                    name: "horsepower"
                }
            ]
        },
        {
            name: "Pressure",
            units: [
                {
                    symbol: "Pa",
                    name: "pascal"
                },
                {
                    symbol: "kPa",
                    name: "kilopascal"
                },
                {
                    symbol: "MPa",
                    name: "megapascal"
                },
                {
                    symbol: "bar",
                    name: "bar"
                },
                {
                    symbol: "mbar",
                    name: "millibar"
                },
                {
                    symbol: "atm",
                    name: "atmosphere"
                },
                {
                    symbol: "psi",
                    name: "pounds per square inch"
                },
                {
                    symbol: "mmHg",
                    name: "millimetre of mercury"
                }
            ]
        },
        {
            name: "Electrical",
            units: [
                {
                    symbol: "V",
                    name: "volt"
                },
                {
                    symbol: "mV",
                    name: "millivolt"
                },
                {
                    symbol: "kV",
                    name: "kilovolt"
                },
                {
                    symbol: "A",
                    name: "ampere"
                },
                {
                    symbol: "mA",
                    name: "milliampere"
                },
                {
                    symbol: "Ω",
                    name: "ohm"
                },
                {
                    symbol: "kΩ",
                    name: "kiloohm"
                },
                {
                    symbol: "MΩ",
                    name: "megaohm"
                },
                {
                    symbol: "F",
                    name: "farad"
                },
                {
                    symbol: "μF",
                    name: "microfarad"
                },
                {
                    symbol: "nF",
                    name: "nanofarad"
                },
                {
                    symbol: "H",
                    name: "henry"
                },
                {
                    symbol: "T",
                    name: "tesla"
                },
                {
                    symbol: "C",
                    name: "coulomb"
                }
            ]
        },
        {
            name: "Digital",
            units: [
                {
                    symbol: "bit",
                    name: "bit"
                },
                {
                    symbol: "B",
                    name: "byte"
                },
                {
                    symbol: "kB",
                    name: "kilobyte"
                },
                {
                    symbol: "MB",
                    name: "megabyte"
                },
                {
                    symbol: "GB",
                    name: "gigabyte"
                },
                {
                    symbol: "TB",
                    name: "terabyte"
                },
                {
                    symbol: "KiB",
                    name: "kibibyte"
                },
                {
                    symbol: "MiB",
                    name: "mebibyte"
                },
                {
                    symbol: "GiB",
                    name: "gibibyte"
                },
                {
                    symbol: "TiB",
                    name: "tebibyte"
                }
            ]
        },
        {
            name: "Frequency",
            units: [
                {
                    symbol: "Hz",
                    name: "hertz"
                },
                {
                    symbol: "kHz",
                    name: "kilohertz"
                },
                {
                    symbol: "MHz",
                    name: "megahertz"
                },
                {
                    symbol: "GHz",
                    name: "gigahertz"
                },
                {
                    symbol: "THz",
                    name: "terahertz"
                },
                {
                    symbol: "rpm",
                    name: "revolutions per minute"
                }
            ]
        },
        {
            name: "Angle",
            units: [
                {
                    symbol: "rad",
                    name: "radian"
                },
                {
                    symbol: "degree",
                    name: "degree (°)"
                },
                {
                    symbol: "arcmin",
                    name: "arcminute"
                },
                {
                    symbol: "arcsec",
                    name: "arcsecond"
                }
            ]
        },
        {
            name: "Luminosity",
            units: [
                {
                    symbol: "cd",
                    name: "candela"
                },
                {
                    symbol: "lm",
                    name: "lumen"
                },
                {
                    symbol: "lx",
                    name: "lux"
                }
            ]
        }
    ];
    function Ye() {
        const t = document.getElementById("units-section-body");
        for (const e of Je){
            const n = document.createElement("div");
            n.className = "unit-category";
            const o = document.createElement("h4");
            o.textContent = e.name, n.appendChild(o);
            const s = document.createElement("div");
            s.className = "unit-chips";
            for (const a of e.units){
                const i = document.createElement("button");
                i.type = "button", i.className = "unit-chip", i.textContent = a.symbol, i.title = a.name, i.addEventListener("click", ()=>{
                    R(a.symbol), f("units-popup");
                }), s.appendChild(i);
            }
            n.appendChild(s), t.appendChild(n);
        }
    }
    const Xe = [
        {
            name: "Base",
            dimensions: [
                "Length",
                "Mass",
                "Time",
                "ElectricCurrent",
                "Temperature",
                "AmountOfSubstance",
                "LuminousIntensity"
            ]
        },
        {
            name: "Geometry",
            dimensions: [
                "Area",
                "Volume",
                "Angle",
                "SolidAngle",
                "Wavenumber"
            ]
        },
        {
            name: "Mechanics",
            dimensions: [
                "Velocity",
                "Acceleration",
                "Jerk",
                "Frequency",
                "Force",
                "Pressure",
                "Energy",
                "Power",
                "Momentum",
                "Torque",
                "Action",
                "SurfaceTension",
                "DynamicViscosity",
                "KinematicViscosity"
            ]
        },
        {
            name: "Electricity & Magnetism",
            dimensions: [
                "ElectricCharge",
                "ElectricPotential",
                "ElectricResistance",
                "ElectricConductance",
                "ElectricCapacitance",
                "ElectricInductance",
                "MagneticFlux",
                "MagneticFluxDensity"
            ]
        },
        {
            name: "Thermodynamics",
            dimensions: [
                "Entropy",
                "HeatCapacity",
                "SpecificHeatCapacity",
                "ThermalConductivity",
                "Irradiance"
            ]
        },
        {
            name: "Light",
            dimensions: [
                "LuminousFlux",
                "Illuminance",
                "Luminance"
            ]
        },
        {
            name: "Chemistry",
            dimensions: [
                "MolarMass",
                "MolarEnergy",
                "MolarHeatCapacity",
                "MolarConcentration",
                "MolarVolume",
                "CatalyticActivity"
            ]
        },
        {
            name: "Radiation",
            dimensions: [
                "AbsorbedDose",
                "EquivalentDose",
                "Radioactivity"
            ]
        },
        {
            name: "Other",
            dimensions: [
                "Density",
                "Information",
                "Money"
            ]
        }
    ];
    function Qe() {
        const t = document.getElementById("dimensions-section-body");
        for (const e of Xe){
            const n = document.createElement("div");
            n.className = "unit-category";
            const o = document.createElement("h4");
            o.textContent = e.name, n.appendChild(o);
            const s = document.createElement("div");
            s.className = "unit-chips";
            for (const a of e.dimensions){
                const i = document.createElement("button");
                i.type = "button", i.className = "unit-chip", i.textContent = a, i.addEventListener("click", ()=>{
                    R(a), f("dimensions-popup");
                }), s.appendChild(i);
            }
            n.appendChild(s), t.appendChild(n);
        }
    }
    function et() {
        const e = u.inputs.filter((i)=>!i.includes(`
`) && (Ee.test(i) || we.test(i))).join(`
`), n = new Blob([
            e
        ], {
            type: "text/plain"
        }), o = URL.createObjectURL(n), s = document.createElement("a");
        s.href = o;
        const a = u.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        s.download = `${a || "session"}.nbt`, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o);
    }
    function xe() {
        if (!q) return;
        const t = [
            ...q.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)
        ];
        for (const [, e, n] of t)B.interpret(`unit ${e} : Money = (1 / ${n}) EUR`);
    }
    function Q() {
        B = X.new(!0, !0, De.Html), xe();
    }
    const tt = {
        AUD: "A$",
        BGN: "лв",
        BRL: "R$",
        CAD: "C$",
        CHF: "Fr",
        CNY: "¥",
        CZK: "Kč",
        DKK: "kr",
        EUR: "€",
        GBP: "£",
        HKD: "HK$",
        HUF: "Ft",
        IDR: "Rp",
        ILS: "₪",
        INR: "₹",
        ISK: "kr",
        JPY: "¥",
        KRW: "₩",
        MXN: "$",
        MYR: "RM",
        NOK: "kr",
        NZD: "NZ$",
        PHP: "₱",
        PLN: "zł",
        RON: "lei",
        SEK: "kr",
        SGD: "S$",
        THB: "฿",
        TRY: "₺",
        USD: "$",
        ZAR: "R"
    };
    function nt(t) {
        const e = document.getElementById("currencies-list");
        e.innerHTML = "";
        const n = [
            "EUR",
            ...new Set([
                ...t.matchAll(/currency='([A-Z]{3})'/g)
            ].map((s)=>s[1]))
        ];
        n.sort();
        const o = document.createElement("div");
        o.className = "unit-chips";
        for (const s of n){
            const a = document.createElement("button");
            a.type = "button", a.className = "unit-chip currency-chip", a.addEventListener("click", ()=>{
                R(s), f("currencies-popup");
            });
            const i = document.createElement("span");
            i.className = "chip-symbol", i.textContent = tt[s] ?? s;
            const r = document.createElement("span");
            r.className = "chip-code", r.textContent = s, a.appendChild(i), a.appendChild(r), o.appendChild(a);
        }
        e.appendChild(o);
    }
    async function ot() {
        const t = document.getElementById("currencies-status");
        t.textContent = "Loading…", t.className = "currencies-loading";
        try {
            const e = await fetch("/ecb-rates.xml");
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            q = await e.text(), xe();
            const n = q.match(/time='(\d{4}-\d{2}-\d{2})'/), o = n ? new Date(n[1]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "unknown date";
            t.textContent = `European Central Bank rates · ${o}`, t.className = "", nt(q);
        } catch  {
            t.textContent = "Unavailable", t.className = "currencies-error";
        }
    }
    function ge() {
        Q(), E.innerHTML = "", L.clear(), I.clear(), $(), j(), document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', u = ce(), k(), D(), d.value = "", K();
    }
    function ye() {
        E.innerHTML = "", u.inputs = [], k(), d.value = "", K();
    }
    let se = null;
    const x = [];
    function _(t) {
        x.length === 0 && (se = document.activeElement), x.push(t);
        const e = document.getElementById(t);
        e.classList.add("visible"), document.getElementById(t + "-backdrop").classList.add("visible"), e.querySelector(Ie)?.focus();
    }
    function f(t) {
        document.getElementById(t).classList.remove("visible"), document.getElementById(t + "-backdrop").classList.remove("visible");
        const e = x.lastIndexOf(t);
        e >= 0 && x.splice(e, 1), x.length === 0 && (se?.focus(), se = null);
    }
    let le = null;
    function te(t, e, n, o = "Confirm") {
        document.getElementById("confirm-popup-title").textContent = t, document.getElementById("confirm-popup-message").textContent = e, document.getElementById("confirm-popup-ok").textContent = o, le = n, _("confirm-popup");
    }
    function H() {
        f("confirm-popup"), le = null;
    }
    function N(t, e, n) {
        document.getElementById("info-popup-title").textContent = t, document.getElementById("info-popup-message").textContent = e;
        const o = document.getElementById("info-popup-link");
        n ? (o.href = n, o.hidden = !1) : o.hidden = !0, _("info-popup");
    }
    function ne() {
        f("info-popup");
    }
    async function st() {
        const t = document.createElement("div");
        t.className = "entry init-msg", t.textContent = "Loading…", E.appendChild(t);
        try {
            await he();
        } catch (i) {
            t.textContent = "Failed to load: " + (i instanceof Error ? i.message : String(i)), t.classList.add("error");
            return;
        }
        Q(), E.removeChild(t), await ot();
        const e = S();
        e.length > 0 ? await V(e[0].id) : (u = ce(), k(), D()), Ye(), document.getElementById("units-panel-btn").addEventListener("click", ()=>_("units-popup")), document.getElementById("units-popup-close").addEventListener("click", ()=>f("units-popup")), document.getElementById("units-popup-backdrop").addEventListener("click", ()=>f("units-popup")), Qe(), document.getElementById("dimensions-panel-btn").addEventListener("click", ()=>_("dimensions-popup")), document.getElementById("dimensions-popup-close").addEventListener("click", ()=>f("dimensions-popup")), document.getElementById("dimensions-popup-backdrop").addEventListener("click", ()=>f("dimensions-popup")), document.getElementById("functions-panel-btn").addEventListener("click", ()=>_("functions-popup")), document.getElementById("functions-popup-close").addEventListener("click", ()=>f("functions-popup")), document.getElementById("functions-popup-backdrop").addEventListener("click", ()=>f("functions-popup")), document.getElementById("scripts-panel-btn").addEventListener("click", ()=>_("scripts-popup")), document.getElementById("scripts-popup-close").addEventListener("click", ()=>f("scripts-popup")), document.getElementById("scripts-popup-backdrop").addEventListener("click", ()=>f("scripts-popup")), document.getElementById("scripts-upload-btn").addEventListener("click", ()=>G.click()), document.getElementById("scripts-download-btn").addEventListener("click", et), G.addEventListener("change", async ()=>{
            const i = G.files?.[0];
            if (i) {
                try {
                    const r = await i.text();
                    if (B.interpret(r).is_error) Y(i.name, 0, 0, !0);
                    else {
                        const m = [
                            ...r.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm)
                        ], b = [
                            ...r.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm)
                        ];
                        for (const g of m)I.set(g[1], g[2]);
                        for (const g of b)L.add(g[1]);
                        u.inputs.push(r), u.scripts.push({
                            name: i.name,
                            fnCount: m.length,
                            letCount: b.length
                        }), k(), $(), j(), Y(i.name, m.length, b.length, !1);
                    }
                } catch  {
                    Y(i.name, 0, 0, !0);
                }
                G.value = "";
            }
        }), document.getElementById("currencies-panel-btn").addEventListener("click", ()=>_("currencies-popup")), document.getElementById("currencies-popup-close").addEventListener("click", ()=>f("currencies-popup")), document.getElementById("currencies-popup-backdrop").addEventListener("click", ()=>f("currencies-popup")), document.getElementById("info-popup-close").addEventListener("click", ne), document.getElementById("info-popup-backdrop").addEventListener("click", ne), document.getElementById("vars-help-btn").addEventListener("click", ()=>{
            N("Variables", "Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.", "https://numbat.dev/docs/basics/variables/");
        }), document.getElementById("functions-help-btn").addEventListener("click", ()=>{
            N("Functions", "Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.", "https://numbat.dev/docs/basics/functions/");
        }), document.getElementById("currencies-help-btn").addEventListener("click", ()=>{
            N("Currencies", 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".');
        }), document.getElementById("units-help-btn").addEventListener("click", ()=>{
            N("Units", 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.', "https://numbat.dev/docs/prelude/list-units/");
        }), document.getElementById("dimensions-help-btn").addEventListener("click", ()=>{
            N("Dimensions", 'Dimensions are physical quantity types used in type annotations — for example "let x: Length = 5 m" or "fn speed(d: Length, t: Time) -> Velocity = d / t". Tap a dimension to insert it at the cursor.', "https://numbat.dev/docs/advanced/dimension-definitions/");
        }), document.getElementById("scripts-help-btn").addEventListener("click", ()=>{
            N("Scripts", "Upload Numbat script files (.nbt) to load function and variable definitions into the current session. Uploaded scripts appear here; their functions appear in the Functions panel.", "https://numbat.dev/docs/examples/example-numbat_syntax/");
        }), document.getElementById("confirm-popup-close").addEventListener("click", H), document.getElementById("confirm-popup-backdrop").addEventListener("click", H), document.getElementById("confirm-popup-cancel").addEventListener("click", H), document.getElementById("confirm-popup-ok").addEventListener("click", ()=>{
            const i = le;
            H(), i && i();
        }), document.getElementById("about-btn").addEventListener("click", ()=>_("about-popup")), document.getElementById("about-popup-close").addEventListener("click", ()=>f("about-popup")), document.getElementById("about-popup-backdrop").addEventListener("click", ()=>f("about-popup")), document.getElementById("about-reset-btn").addEventListener("click", ()=>{
            te("Reset app data", "This will erase all sessions, variables, and cached data. The app will reload.", rt, "Reset");
        }), document.getElementById("clear-btn").addEventListener("click", ()=>{
            te("Clear session", "Clear all output and history for this session?", ye, "Clear");
        }), document.getElementById("reset-btn").addEventListener("click", ()=>{
            te("Reset", "Clear all output, variables, and functions, and start fresh?", ge, "Reset");
        }), document.addEventListener("keydown", (i)=>{
            if (i.key === "Escape" && (H(), ne(), f("about-popup"), f("units-popup"), f("dimensions-popup"), f("functions-popup"), f("currencies-popup"), f("scripts-popup")), i.key === "Tab" && x.length > 0) {
                const r = x[x.length - 1];
                Ze(i, document.getElementById(r));
            }
        });
        const n = document.getElementById("variables");
        document.getElementById("mobile-vars-btn").addEventListener("click", ()=>{
            n.classList.add("mobile-open"), Ve.scrollTop = 0;
        }), document.getElementById("mobile-units-btn").addEventListener("click", ()=>{
            _("units-popup");
        }), document.getElementById("mobile-dimensions-btn").addEventListener("click", ()=>{
            _("dimensions-popup");
        }), document.getElementById("mobile-functions-btn").addEventListener("click", ()=>{
            _("functions-popup");
        }), document.getElementById("mobile-scripts-btn").addEventListener("click", ()=>{
            _("scripts-popup");
        }), document.getElementById("mobile-currencies-btn").addEventListener("click", ()=>{
            _("currencies-popup");
        }), document.getElementById("mobile-sidebar-close").addEventListener("click", ()=>{
            n.classList.remove("mobile-open");
        });
        const o = document.getElementById("app"), s = document.getElementById("sidebar-collapse-btn");
        s.addEventListener("click", ()=>{
            n.classList.toggle("collapsed"), o.classList.toggle("sidebar-collapsed");
            const i = n.classList.contains("collapsed");
            s.textContent = i ? "‹" : "›", s.title = i ? "Expand sidebar" : "Collapse sidebar", s.setAttribute("aria-label", i ? "Expand sidebar" : "Collapse sidebar");
        });
        function a(i) {
            const r = i.target.closest(".shortcut");
            r && R(r.dataset.insert ?? "");
        }
        document.getElementById("numpad").addEventListener("click", a), document.getElementById("shortcuts").addEventListener("click", a), document.getElementById("new-session-btn").addEventListener("click", ()=>Be()), M.addEventListener("change", ()=>{
            V(parseInt(M.value));
        }), d.addEventListener("keydown", (i)=>{
            const r = u.inputs;
            if (i.key === "ArrowUp") {
                if (r.length === 0) return;
                i.preventDefault(), y === -1 && (F = d.value), y = Math.min(y + 1, r.length - 1), d.value = r[r.length - 1 - y], d.setSelectionRange(d.value.length, d.value.length);
            } else if (i.key === "ArrowDown") {
                if (y === -1) return;
                i.preventDefault(), y--, d.value = y === -1 ? F : r[r.length - 1 - y], d.setSelectionRange(d.value.length, d.value.length);
            } else y = -1;
        }), document.getElementById("history-prev").addEventListener("click", ()=>{
            const i = u.inputs;
            i.length !== 0 && (y === -1 && (F = d.value), y = Math.min(y + 1, i.length - 1), d.value = i[i.length - 1 - y], d.focus(), d.setSelectionRange(d.value.length, d.value.length));
        }), document.getElementById("history-next").addEventListener("click", ()=>{
            y !== -1 && (y--, d.value = y === -1 ? F : u.inputs[u.inputs.length - 1 - y], d.focus(), d.setSelectionRange(d.value.length, d.value.length));
        }), qe.addEventListener("submit", (i)=>{
            i.preventDefault();
            const r = d.value.trim();
            if (!r) return;
            K();
            let l = "", m = !1;
            try {
                const b = B.try_run_command(r);
                if (b.is_command) {
                    if (b.should_reset) {
                        ge();
                        return;
                    }
                    if (b.should_clear) {
                        ye();
                        return;
                    }
                    l = Le(b.output ?? "(command executed)"), u.inputs.push(r), k();
                } else {
                    u.inputs.push(r), k();
                    const g = B.interpret(r);
                    if (l = g.output, m = g.is_error, !m) {
                        const p = r.match(Ee);
                        p && (L.add(p[1]), $());
                        const h = r.match(we);
                        h && (I.set(h[1], h[2]), j());
                    }
                }
            } catch (b) {
                l = ke(b instanceof Error ? b.message : String(b)), m = !0;
            }
            Ce(r, l, m), d.value = "";
        }), d.focus();
    }
    const A = document.getElementById("about-check-btn"), Se = document.getElementById("about-update-btn");
    document.getElementById("about-version").textContent = "0.3.2";
    let Te = !1;
    const it = We({
        onNeedRefresh () {
            Te = !0, A.hidden = !0, Se.hidden = !1;
        }
    });
    A.addEventListener("click", async ()=>{
        A.textContent = "Checking…", A.disabled = !0, await (await navigator.serviceWorker.getRegistration())?.update(), Te || (A.textContent = "Check for update", A.disabled = !1);
    });
    Se.addEventListener("click", ()=>{
        it(!0);
    });
    function rt() {
        (async ()=>{
            localStorage.clear();
            const t = await navigator.serviceWorker.getRegistrations();
            await Promise.all(t.map((n)=>n.unregister()));
            const e = await caches.keys();
            await Promise.all(e.map((n)=>caches.delete(n))), location.reload();
        })();
    }
    st();
})();
