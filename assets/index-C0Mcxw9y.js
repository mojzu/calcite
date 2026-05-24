(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);
        new MutationObserver((o)=>{
            for (const r of o)if (r.type === "childList") for (const a of r.addedNodes)a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(o) {
            const r = {};
            return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
        }
        function s(o) {
            if (o.ep) return;
            o.ep = !0;
            const r = n(o);
            fetch(o.href, r);
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
    let P = null;
    function z() {
        return (P === null || P.byteLength === 0) && (P = new Uint8Array(c.memory.buffer)), P;
    }
    function W(t, e) {
        return t = t >>> 0, _e.decode(z().subarray(t, t + e));
    }
    function Ae(t, e) {
        return t = t >>> 0, z().subarray(t / 1, t / 1 + e);
    }
    function Re(t) {
        const e = c.__externref_table_alloc();
        return c.__wbindgen_export_3.set(e, t), e;
    }
    function me(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const s = Re(n);
            c.__wbindgen_exn_store(s);
        }
    }
    let v = 0;
    const J = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
        encode: ()=>{
            throw Error("TextEncoder not available");
        }
    }, Me = typeof J.encodeInto == "function" ? function(t, e) {
        return J.encodeInto(t, e);
    } : function(t, e) {
        const n = J.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    };
    function B(t, e, n) {
        if (n === void 0) {
            const i = J.encode(t), l = e(i.length, 1) >>> 0;
            return z().subarray(l, l + i.length).set(i), v = i.length, l;
        }
        let s = t.length, o = e(s, 1) >>> 0;
        const r = z();
        let a = 0;
        for(; a < s; a++){
            const i = t.charCodeAt(a);
            if (i > 127) break;
            r[o + a] = i;
        }
        if (a !== s) {
            a !== 0 && (t = t.slice(a)), o = n(o, s, s = a + t.length * 3, 1) >>> 0;
            const i = z().subarray(o + a, o + s), l = Me(t, i);
            a += l.written, o = n(o, s, a, 1) >>> 0;
        }
        return v = a, o;
    }
    let T = null;
    function F() {
        return (T === null || T.buffer.detached === !0 || T.buffer.detached === void 0 && T.buffer !== c.memory.buffer) && (T = new DataView(c.memory.buffer)), T;
    }
    function De(t) {
        return t == null;
    }
    function de(t, e) {
        t = t >>> 0;
        const n = F(), s = [];
        for(let o = t; o < t + 4 * e; o += 4)s.push(c.__wbindgen_export_3.get(n.getUint32(o, !0)));
        return c.__externref_drop_slice(t, e), s;
    }
    const Oe = Object.freeze({
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
                const s = c.commandresult_output(this.__wbg_ptr);
                return e = s[0], n = s[1], W(s[0], s[1]);
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
                const s = c.interpreteroutput_output(this.__wbg_ptr);
                return e = s[0], n = s[1], W(s[0], s[1]);
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
            const n = B(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v;
            return c.numbat_print_info(this.__wbg_ptr, n, s);
        }
        try_run_command(e) {
            const n = B(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_try_run_command(this.__wbg_ptr, n, s);
            return ie.__wrap(o);
        }
        set_exchange_rates(e) {
            const n = B(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v;
            c.numbat_set_exchange_rates(this.__wbg_ptr, n, s);
        }
        get_completions_for(e) {
            const n = B(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_get_completions_for(this.__wbg_ptr, n, s);
            var r = de(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), r;
        }
        get_unicode_completion(e) {
            const n = B(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_get_unicode_completion(this.__wbg_ptr, n, s);
            var r = de(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), r;
        }
        static new(e, n, s) {
            const o = c.numbat_new(e, n, s);
            return X.__wrap(o);
        }
        help() {
            return c.numbat_help(this.__wbg_ptr);
        }
        interpret(e) {
            const n = B(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_interpret(this.__wbg_ptr, n, s);
            return re.__wrap(o);
        }
    }
    async function He(t, e) {
        if (typeof Response == "function" && t instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(t, e);
            } catch (s) {
                if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
                else throw s;
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
    function Pe() {
        const t = {};
        return t.wbg = {}, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
            let s, o;
            try {
                s = e, o = n, console.error(W(e, n));
            } finally{
                c.__wbindgen_free(s, o, 1);
            }
        }, t.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
            return me(function(e, n) {
                globalThis.crypto.getRandomValues(Ae(e, n));
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
            const s = n.stack, o = B(s, c.__wbindgen_malloc, c.__wbindgen_realloc), r = v;
            F().setInt32(e + 4, r, !0), F().setInt32(e + 0, o, !0);
        }, t.wbg.__wbindgen_init_externref_table = function() {
            const e = c.__wbindgen_export_3, n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
        }, t.wbg.__wbindgen_number_new = function(e) {
            return e;
        }, t.wbg.__wbindgen_string_get = function(e, n) {
            const s = n, o = typeof s == "string" ? s : void 0;
            var r = De(o) ? 0 : B(o, c.__wbindgen_malloc, c.__wbindgen_realloc), a = v;
            F().setInt32(e + 4, a, !0), F().setInt32(e + 0, r, !0);
        }, t.wbg.__wbindgen_string_new = function(e, n) {
            return W(e, n);
        }, t.wbg.__wbindgen_throw = function(e, n) {
            throw new Error(W(e, n));
        }, t;
    }
    function Fe(t, e) {
        return c = t.exports, he.__wbindgen_wasm_module = e, T = null, P = null, c.__wbindgen_start(), c;
    }
    async function he(t) {
        if (c !== void 0) return c;
        typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/assets/numbat_wasm_bg-BTss0vKK.wasm", import.meta.url));
        const e = Pe();
        (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
        const { instance: n, module: s } = await He(await t, e);
        return Fe(n, s);
    }
    const Ue = "modulepreload", ze = function(t) {
        return "/" + t;
    }, fe = {}, We = function(e, n, s) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            let a = function(m) {
                return Promise.all(m.map((d)=>Promise.resolve(d).then((b)=>({
                            status: "fulfilled",
                            value: b
                        }), (b)=>({
                            status: "rejected",
                            reason: b
                        }))));
            };
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), l = i?.nonce || i?.getAttribute("nonce");
            o = a(n.map((m)=>{
                if (m = ze(m), m in fe) return;
                fe[m] = !0;
                const d = m.endsWith(".css"), b = d ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${m}"]${b}`)) return;
                const u = document.createElement("link");
                if (u.rel = d ? "stylesheet" : Ue, d || (u.as = "script"), u.crossOrigin = "", u.href = m, l && u.setAttribute("nonce", l), document.head.appendChild(u), d) return new Promise((h, w)=>{
                    u.addEventListener("load", h), u.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${m}`)));
                });
            }));
        }
        function r(a) {
            const i = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (i.payload = a, window.dispatchEvent(i), !i.defaultPrevented) throw a;
        }
        return o.then((a)=>{
            for (const i of a || [])i.status === "rejected" && r(i.reason);
            return e().catch(r);
        });
    };
    function qe(t = {}) {
        const { immediate: e = !1, onNeedRefresh: n, onOfflineReady: s, onRegistered: o, onRegisteredSW: r, onRegisterError: a } = t;
        let i, l, m;
        const d = async (u = !0)=>{
            await l, m?.();
        };
        async function b() {
            if ("serviceWorker" in navigator) {
                if (i = await We(async ()=>{
                    const { Workbox: u } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: u
                    };
                }, []).then(({ Workbox: u })=>new u("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((u)=>{
                    a?.(u);
                }), !i) return;
                m = ()=>{
                    i?.messageSkipWaiting();
                };
                {
                    let u = !1;
                    const h = ()=>{
                        u = !0, i?.addEventListener("controlling", (w)=>{
                            w.isUpdate && window.location.reload();
                        }), n?.();
                    };
                    i.addEventListener("installed", (w)=>{
                        typeof w.isUpdate > "u" ? typeof w.isExternal < "u" && w.isExternal ? h() : !u && s?.() : w.isUpdate || s?.();
                    }), i.addEventListener("waiting", h);
                }
                i.register({
                    immediate: e
                }).then((u)=>{
                    r ? r("/sw.js", u) : o?.(u);
                }).catch((u)=>{
                    a?.(u);
                });
            }
        }
        return l = b(), d;
    }
    function oe() {
        const t = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${t}px`), window.scrollTo(0, 0);
    }
    oe();
    window.visualViewport ? window.visualViewport.addEventListener("resize", oe) : window.addEventListener("resize", oe);
    const E = document.getElementById("output"), Ve = document.getElementById("form"), p = document.getElementById("input"), te = document.getElementById("variables-list"), O = document.getElementById("tabs-scroll"), M = document.getElementById("session-select"), $e = document.getElementById("sidebar-middle"), G = document.getElementById("scripts-file-input"), Ee = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/, we = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/, ve = "calcite-sessions", je = 10, C = new Set, L = new Map;
    let x, q = null, f, y = -1, U = "";
    function ke(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function Ke(t) {
        let e = "";
        for(; e !== t;)e = t, t = t.replace(/\[\[[^\]]*\]([\s\S]*?)\]/g, "$1");
        return t;
    }
    function Ce(t) {
        return Ke(t).replace(/\n/g, "<br>");
    }
    function Le() {
        document.getElementById("variables").classList.remove("mobile-open");
    }
    const xe = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    function Ze(t, e) {
        const n = Array.from(e.querySelectorAll(xe));
        if (n.length === 0) return;
        const s = n[0], o = n[n.length - 1];
        t.shiftKey ? document.activeElement === s && (t.preventDefault(), o.focus()) : document.activeElement === o && (t.preventDefault(), s.focus());
    }
    function Q(t, e) {
        t.setAttribute("role", "button"), t.tabIndex = 0, t.addEventListener("click", e), t.addEventListener("keydown", (n)=>{
            (n.key === "Enter" || n.key === " ") && (n.preventDefault(), e());
        });
    }
    function I(t) {
        const e = p.value.length, n = document.activeElement === p, s = n ? p.selectionStart ?? e : e, o = n ? p.selectionEnd ?? e : e;
        p.setRangeText(t, s, o, "end"), p.focus();
    }
    function K() {
        y = -1, U = "";
    }
    function Ie(t, e, n) {
        const s = document.createElement("div");
        s.className = "entry" + (n ? " error" : "");
        const o = document.createElement("div");
        o.className = "query", o.textContent = t, o.title = "Re-use this expression", Q(o, ()=>I(t));
        const r = document.createElement("div");
        r.className = "result", r.innerHTML = e, s.appendChild(o), s.appendChild(r), E.appendChild(s), E.scrollTop = E.scrollHeight;
    }
    function $() {
        if (C.size === 0) {
            te.innerHTML = '<p class="no-vars">No variables yet</p>';
            return;
        }
        te.innerHTML = "";
        for (const t of C)try {
            const e = x.interpret(t);
            if (!e.is_error) {
                const n = document.createElement("div");
                n.className = "var-item", n.title = `Insert "${t}"`, Q(n, ()=>{
                    I(t), Le();
                });
                const s = document.createElement("span");
                s.className = "var-name", s.textContent = t;
                const o = document.createElement("span");
                o.className = "var-value", o.innerHTML = e.output, n.appendChild(s), n.appendChild(o), te.appendChild(n);
            }
        } catch  {}
    }
    function j() {
        const t = document.getElementById("functions-list");
        if (L.size === 0) {
            t.innerHTML = '<p class="no-vars">No functions yet</p>';
            return;
        }
        t.innerHTML = "";
        for (const [e, n] of L){
            const s = document.createElement("div");
            s.className = "fn-item", s.title = `Insert "${e}("`, Q(s, ()=>{
                I(e + "("), g("functions-popup");
            });
            const o = document.createElement("span");
            o.className = "fn-name", o.textContent = e;
            const r = document.createElement("span");
            r.className = "fn-params", r.textContent = n, s.appendChild(o), s.appendChild(r), t.appendChild(s);
        }
    }
    function Y(t, e, n, s) {
        const o = document.getElementById("scripts-list"), r = o.querySelector(".no-vars");
        r && o.removeChild(r);
        const a = document.createElement("div");
        a.className = "script-item" + (s ? " error" : "");
        const i = document.createElement("span");
        i.className = "script-name", i.textContent = t;
        const l = document.createElement("span");
        if (l.className = "script-meta", s) l.textContent = "failed to load";
        else {
            const m = [];
            e > 0 && m.push(`${e} function${e !== 1 ? "s" : ""}`), n > 0 && m.push(`${n} variable${n !== 1 ? "s" : ""}`), l.textContent = m.length > 0 ? m.join(", ") : "loaded";
        }
        a.appendChild(i), a.appendChild(l), o.appendChild(a);
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
        const t = S(), e = t.findIndex((o)=>o.id === f.id);
        e >= 0 ? t[e] = f : t.unshift(f);
        let n = 0;
        const s = t.filter((o)=>o.named ? !0 : (n++, n <= je));
        Z(s);
    }
    function D() {
        const e = [
            ...S()
        ].reverse();
        O.innerHTML = "", O.setAttribute("role", "tablist"), O.setAttribute("aria-label", "Sessions");
        for (const a of e){
            const i = a.id === f.id, l = document.createElement("div");
            l.className = "tab" + (i ? " active" : "") + (a.named ? " named" : ""), l.setAttribute("role", "tab"), l.setAttribute("aria-selected", i ? "true" : "false"), l.setAttribute("aria-controls", "output");
            const m = document.createElement("span");
            m.className = "tab-label", m.textContent = a.label, i || (m.tabIndex = 0, m.addEventListener("click", ()=>V(a.id)), m.addEventListener("keydown", (b)=>{
                (b.key === "Enter" || b.key === " ") && (b.preventDefault(), V(a.id));
            })), m.addEventListener("dblclick", (b)=>{
                b.stopPropagation(), Ge(a, m);
            }), l.appendChild(m);
            const d = document.createElement("button");
            d.className = "tab-close", d.textContent = "×", d.title = "Close session", d.addEventListener("click", (b)=>{
                b.stopPropagation();
                const h = S().filter((w)=>w.id !== a.id);
                Z(h), i ? (f.inputs = [], h.length > 0 ? V(h[0].id) : Be()) : D();
            }), l.appendChild(d), O.appendChild(l);
        }
        const n = O.querySelector(".tab.active");
        n && n.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }), M.innerHTML = "";
        const s = e.filter((a)=>a.named), o = e.filter((a)=>!a.named);
        function r(a, i) {
            const l = document.createElement("option");
            l.value = String(a.id), l.textContent = a.label, l.selected = a.id === f.id, i.appendChild(l);
        }
        if (s.length > 0 && o.length > 0) {
            const a = document.createElement("optgroup");
            a.label = "Saved", s.forEach((l)=>r(l, a)), M.appendChild(a);
            const i = document.createElement("optgroup");
            i.label = "Recent", o.forEach((l)=>r(l, i)), M.appendChild(i);
        } else e.forEach((a)=>r(a, M));
    }
    function Ge(t, e) {
        const n = document.createElement("input");
        n.type = "text", n.className = "tab-rename-input", n.value = t.label, e.replaceWith(n), n.focus(), n.select();
        function s() {
            const o = n.value.trim();
            if (o && o !== t.label) {
                t.label = o, t.named = !0, t.id === f.id && (f = t);
                const r = S(), a = r.findIndex((i)=>i.id === t.id);
                a >= 0 && (r[a] = t, Z(r));
            }
            D();
        }
        n.addEventListener("blur", s), n.addEventListener("keydown", (o)=>{
            o.key === "Enter" && (o.preventDefault(), n.blur()), o.key === "Escape" && (n.value = t.label, n.blur());
        });
    }
    function Be() {
        f && (f.inputs.length === 0 ? Z(S().filter((t)=>t.id !== f.id)) : k()), ee(), C.clear(), L.clear(), E.innerHTML = "", document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', $(), j(), f = ce(), k(), D(), K(), p.value = "", p.focus();
    }
    async function V(t) {
        const n = S().find((s)=>s.id === t);
        if (n) {
            f && (f.inputs.length === 0 ? Z(S().filter((s)=>s.id !== f.id)) : k()), ee(), C.clear(), L.clear(), E.innerHTML = "", document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', f = n, K(), D();
            for (const s of n.inputs){
                let o = "", r = !1;
                try {
                    const a = x.try_run_command(s);
                    if (a.is_command) a.should_reset ? (E.innerHTML = "", C.clear(), L.clear()) : a.should_clear ? E.innerHTML = "" : o = Ce(a.output ?? "(command executed)");
                    else {
                        const i = x.interpret(s);
                        if (o = i.output, r = i.is_error, !r) {
                            for (const l of s.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm))C.add(l[1]);
                            for (const l of s.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm))L.set(l[1], l[2]);
                        }
                    }
                } catch (a) {
                    o = ke(a instanceof Error ? a.message : String(a)), r = !0;
                }
                o && Ie(s, o, r);
            }
            $(), j();
            for (const s of n.scripts ?? [])Y(s.name, s.fnCount, s.letCount, !1);
            p.focus();
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
            const s = document.createElement("h4");
            s.textContent = e.name, n.appendChild(s);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const r of e.units){
                const a = document.createElement("button");
                a.type = "button", a.className = "unit-chip", a.textContent = r.symbol, a.title = r.name, a.addEventListener("click", ()=>{
                    I(r.symbol), g("units-popup");
                }), o.appendChild(a);
            }
            n.appendChild(o), t.appendChild(n);
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
            const s = document.createElement("h4");
            s.textContent = e.name, n.appendChild(s);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const r of e.dimensions){
                const a = document.createElement("button");
                a.type = "button", a.className = "unit-chip", a.textContent = r, a.addEventListener("click", ()=>{
                    I(r), g("dimensions-popup");
                }), o.appendChild(a);
            }
            n.appendChild(o), t.appendChild(n);
        }
    }
    const et = [
        {
            name: "Trigonometry",
            fns: [
                {
                    name: "sin",
                    params: "(x)"
                },
                {
                    name: "cos",
                    params: "(x)"
                },
                {
                    name: "tan",
                    params: "(x)"
                },
                {
                    name: "asin",
                    params: "(x)"
                },
                {
                    name: "acos",
                    params: "(x)"
                },
                {
                    name: "atan",
                    params: "(x)"
                },
                {
                    name: "atan2",
                    params: "(y, x)"
                },
                {
                    name: "sinh",
                    params: "(x)"
                },
                {
                    name: "cosh",
                    params: "(x)"
                },
                {
                    name: "tanh",
                    params: "(x)"
                },
                {
                    name: "asinh",
                    params: "(x)"
                },
                {
                    name: "acosh",
                    params: "(x)"
                },
                {
                    name: "atanh",
                    params: "(x)"
                }
            ]
        },
        {
            name: "Numeric",
            fns: [
                {
                    name: "abs",
                    params: "(x)"
                },
                {
                    name: "round",
                    params: "(x)"
                },
                {
                    name: "floor",
                    params: "(x)"
                },
                {
                    name: "ceil",
                    params: "(x)"
                },
                {
                    name: "sqrt",
                    params: "(x)"
                },
                {
                    name: "cbrt",
                    params: "(x)"
                },
                {
                    name: "sqr",
                    params: "(x)"
                },
                {
                    name: "mod",
                    params: "(x, y)"
                },
                {
                    name: "gcd",
                    params: "(x, y)"
                },
                {
                    name: "lcm",
                    params: "(x, y)"
                }
            ]
        },
        {
            name: "Exponential",
            fns: [
                {
                    name: "exp",
                    params: "(x)"
                },
                {
                    name: "ln",
                    params: "(x)"
                },
                {
                    name: "log",
                    params: "(x)"
                },
                {
                    name: "log2",
                    params: "(x)"
                },
                {
                    name: "log10",
                    params: "(x)"
                },
                {
                    name: "pow",
                    params: "(base, exp)"
                }
            ]
        }
    ], tt = [
        "pi",
        "tau",
        "e",
        "c",
        "g",
        "G",
        "k_B",
        "N_A"
    ];
    function nt() {
        const t = document.getElementById("functions-list"), e = document.createElement("hr");
        e.className = "builtin-separator", t.appendChild(e);
        const n = document.createElement("div");
        n.id = "builtin-functions-section";
        const s = document.createElement("button");
        s.type = "button", s.className = "section-header-btn", s.id = "builtin-functions-toggle";
        const o = document.createElement("span");
        o.textContent = "Built-in functions";
        const r = document.createElement("span");
        r.className = "section-toggle-icon", r.setAttribute("aria-hidden", "true"), r.textContent = "›", s.appendChild(o), s.appendChild(r), s.addEventListener("click", ()=>n.classList.toggle("open"));
        const a = document.createElement("div");
        a.id = "builtin-functions-body", a.className = "section-body";
        for (const i of et){
            const l = document.createElement("div");
            l.className = "unit-category";
            const m = document.createElement("h4");
            m.textContent = i.name, l.appendChild(m);
            const d = document.createElement("div");
            d.className = "unit-chips";
            for (const b of i.fns){
                const u = document.createElement("button");
                u.type = "button", u.className = "unit-chip", u.textContent = b.name, u.title = b.name + b.params, u.addEventListener("click", ()=>{
                    I(b.name + "("), g("functions-popup");
                }), d.appendChild(u);
            }
            l.appendChild(d), a.appendChild(l);
        }
        n.appendChild(s), n.appendChild(a), t.appendChild(n);
    }
    function st() {
        const t = document.querySelector("#variables-section .section-body"), e = document.createElement("hr");
        e.className = "builtin-separator", t.appendChild(e);
        const n = document.createElement("div");
        n.id = "builtin-constants-section";
        const s = document.createElement("button");
        s.type = "button", s.className = "section-header-btn", s.id = "builtin-constants-toggle";
        const o = document.createElement("span");
        o.textContent = "Built-in constants";
        const r = document.createElement("span");
        r.className = "section-toggle-icon", r.setAttribute("aria-hidden", "true"), r.textContent = "›", s.appendChild(o), s.appendChild(r), s.addEventListener("click", ()=>n.classList.toggle("open"));
        const a = document.createElement("div");
        a.id = "builtin-constants-body", a.className = "section-body";
        for (const i of tt)try {
            const l = x.interpret(i);
            if (l.is_error) continue;
            const m = document.createElement("div");
            m.className = "var-item", m.title = `Insert "${i}"`, Q(m, ()=>{
                I(i), Le();
            });
            const d = document.createElement("span");
            d.className = "var-name", d.textContent = i;
            const b = document.createElement("span");
            b.className = "var-value", b.innerHTML = l.output, m.appendChild(d), m.appendChild(b), a.appendChild(m);
        } catch  {}
        n.appendChild(s), n.appendChild(a), t.appendChild(n);
    }
    function ot() {
        const e = f.inputs.filter((a)=>!a.includes(`
`) && (Ee.test(a) || we.test(a))).join(`
`), n = new Blob([
            e
        ], {
            type: "text/plain"
        }), s = URL.createObjectURL(n), o = document.createElement("a");
        o.href = s;
        const r = f.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        o.download = `${r || "session"}.nbt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(s);
    }
    function Ne() {
        if (!q) return;
        const t = [
            ...q.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)
        ];
        for (const [, e, n] of t)x.interpret(`unit ${e} : Money = (1 / ${n}) EUR`);
    }
    function ee() {
        x = X.new(!0, !0, Oe.Html), Ne();
    }
    const at = {
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
    function it(t) {
        const e = document.getElementById("currencies-list");
        e.innerHTML = "";
        const n = [
            "EUR",
            ...new Set([
                ...t.matchAll(/currency='([A-Z]{3})'/g)
            ].map((o)=>o[1]))
        ];
        n.sort();
        const s = document.createElement("div");
        s.className = "unit-chips";
        for (const o of n){
            const r = document.createElement("button");
            r.type = "button", r.className = "unit-chip currency-chip", r.addEventListener("click", ()=>{
                I(o), g("currencies-popup");
            });
            const a = document.createElement("span");
            a.className = "chip-symbol", a.textContent = at[o] ?? o;
            const i = document.createElement("span");
            i.className = "chip-code", i.textContent = o, r.appendChild(a), r.appendChild(i), s.appendChild(r);
        }
        e.appendChild(s);
    }
    async function rt() {
        const t = document.getElementById("currencies-status");
        t.textContent = "Loading…", t.className = "currencies-loading";
        try {
            const e = await fetch("/ecb-rates.xml");
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            q = await e.text(), Ne();
            const n = q.match(/time='(\d{4}-\d{2}-\d{2})'/), s = n ? new Date(n[1]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "unknown date";
            t.textContent = `European Central Bank rates · ${s}`, t.className = "", it(q);
        } catch  {
            t.textContent = "Unavailable", t.className = "currencies-error";
        }
    }
    function ge() {
        ee(), E.innerHTML = "", C.clear(), L.clear(), $(), j(), document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', f = ce(), k(), D(), p.value = "", K();
    }
    function ye() {
        E.innerHTML = "", f.inputs = [], k(), p.value = "", K();
    }
    let ae = null;
    const N = [];
    function _(t) {
        N.length === 0 && (ae = document.activeElement), N.push(t);
        const e = document.getElementById(t);
        e.classList.add("visible"), document.getElementById(t + "-backdrop").classList.add("visible"), e.querySelector(xe)?.focus();
    }
    function g(t) {
        document.getElementById(t).classList.remove("visible"), document.getElementById(t + "-backdrop").classList.remove("visible");
        const e = N.lastIndexOf(t);
        e >= 0 && N.splice(e, 1), N.length === 0 && (ae?.focus(), ae = null);
    }
    let le = null;
    function ne(t, e, n, s = "Confirm") {
        document.getElementById("confirm-popup-title").textContent = t, document.getElementById("confirm-popup-message").textContent = e, document.getElementById("confirm-popup-ok").textContent = s, le = n, _("confirm-popup");
    }
    function H() {
        g("confirm-popup"), le = null;
    }
    function A(t, e, n) {
        document.getElementById("info-popup-title").textContent = t, document.getElementById("info-popup-message").textContent = e;
        const s = document.getElementById("info-popup-link");
        n ? (s.href = n, s.hidden = !1) : s.hidden = !0, _("info-popup");
    }
    function se() {
        g("info-popup");
    }
    async function ct() {
        const t = document.createElement("div");
        t.className = "entry init-msg", t.textContent = "Loading…", E.appendChild(t);
        try {
            await he();
        } catch (a) {
            t.textContent = "Failed to load: " + (a instanceof Error ? a.message : String(a)), t.classList.add("error");
            return;
        }
        ee(), E.removeChild(t), nt(), st(), await rt();
        const e = S();
        e.length > 0 ? await V(e[0].id) : (f = ce(), k(), D()), Ye(), document.getElementById("units-panel-btn").addEventListener("click", ()=>_("units-popup")), document.getElementById("units-popup-close").addEventListener("click", ()=>g("units-popup")), document.getElementById("units-popup-backdrop").addEventListener("click", ()=>g("units-popup")), Qe(), document.getElementById("dimensions-panel-btn").addEventListener("click", ()=>_("dimensions-popup")), document.getElementById("dimensions-popup-close").addEventListener("click", ()=>g("dimensions-popup")), document.getElementById("dimensions-popup-backdrop").addEventListener("click", ()=>g("dimensions-popup")), document.getElementById("functions-panel-btn").addEventListener("click", ()=>_("functions-popup")), document.getElementById("functions-popup-close").addEventListener("click", ()=>g("functions-popup")), document.getElementById("functions-popup-backdrop").addEventListener("click", ()=>g("functions-popup")), document.getElementById("scripts-panel-btn").addEventListener("click", ()=>_("scripts-popup")), document.getElementById("scripts-popup-close").addEventListener("click", ()=>g("scripts-popup")), document.getElementById("scripts-popup-backdrop").addEventListener("click", ()=>g("scripts-popup")), document.getElementById("scripts-upload-btn").addEventListener("click", ()=>G.click()), document.getElementById("scripts-download-btn").addEventListener("click", ot), G.addEventListener("change", async ()=>{
            const a = G.files?.[0];
            if (a) {
                try {
                    const i = await a.text();
                    if (x.interpret(i).is_error) Y(a.name, 0, 0, !0);
                    else {
                        const m = [
                            ...i.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm)
                        ], d = [
                            ...i.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm)
                        ];
                        for (const b of m)L.set(b[1], b[2]);
                        for (const b of d)C.add(b[1]);
                        f.inputs.push(i), f.scripts.push({
                            name: a.name,
                            fnCount: m.length,
                            letCount: d.length
                        }), k(), $(), j(), Y(a.name, m.length, d.length, !1);
                    }
                } catch  {
                    Y(a.name, 0, 0, !0);
                }
                G.value = "";
            }
        }), document.getElementById("currencies-panel-btn").addEventListener("click", ()=>_("currencies-popup")), document.getElementById("currencies-popup-close").addEventListener("click", ()=>g("currencies-popup")), document.getElementById("currencies-popup-backdrop").addEventListener("click", ()=>g("currencies-popup")), document.getElementById("info-popup-close").addEventListener("click", se), document.getElementById("info-popup-backdrop").addEventListener("click", se), document.getElementById("vars-help-btn").addEventListener("click", ()=>{
            A("Variables", "Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.", "https://numbat.dev/docs/basics/variables/");
        }), document.getElementById("functions-help-btn").addEventListener("click", ()=>{
            A("Functions", "Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.", "https://numbat.dev/docs/basics/functions/");
        }), document.getElementById("currencies-help-btn").addEventListener("click", ()=>{
            A("Currencies", 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".');
        }), document.getElementById("units-help-btn").addEventListener("click", ()=>{
            A("Units", 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.', "https://numbat.dev/docs/prelude/list-units/");
        }), document.getElementById("dimensions-help-btn").addEventListener("click", ()=>{
            A("Dimensions", 'Dimensions are physical quantity types used in type annotations — for example "let x: Length = 5 m" or "fn speed(d: Length, t: Time) -> Velocity = d / t". Tap a dimension to insert it at the cursor.', "https://numbat.dev/docs/advanced/dimension-definitions/");
        }), document.getElementById("scripts-help-btn").addEventListener("click", ()=>{
            A("Scripts", "Upload Numbat script files (.nbt) to load function and variable definitions into the current session. Uploaded scripts appear here; their functions appear in the Functions panel.", "https://numbat.dev/docs/examples/example-numbat_syntax/");
        }), document.getElementById("confirm-popup-close").addEventListener("click", H), document.getElementById("confirm-popup-backdrop").addEventListener("click", H), document.getElementById("confirm-popup-cancel").addEventListener("click", H), document.getElementById("confirm-popup-ok").addEventListener("click", ()=>{
            const a = le;
            H(), a && a();
        }), document.getElementById("about-btn").addEventListener("click", ()=>_("about-popup")), document.getElementById("about-popup-close").addEventListener("click", ()=>g("about-popup")), document.getElementById("about-popup-backdrop").addEventListener("click", ()=>g("about-popup")), document.getElementById("about-reset-btn").addEventListener("click", ()=>{
            ne("Reset app data", "This will erase all sessions, variables, and cached data. The app will reload.", mt, "Reset");
        }), document.getElementById("clear-btn").addEventListener("click", ()=>{
            ne("Clear session", "Clear all output and history for this session?", ye, "Clear");
        }), document.getElementById("reset-btn").addEventListener("click", ()=>{
            ne("Reset", "Clear all output, variables, and functions, and start fresh?", ge, "Reset");
        }), document.addEventListener("keydown", (a)=>{
            if (a.key === "Escape" && (H(), se(), g("about-popup"), g("units-popup"), g("dimensions-popup"), g("functions-popup"), g("currencies-popup"), g("scripts-popup")), a.key === "Tab" && N.length > 0) {
                const i = N[N.length - 1];
                Ze(a, document.getElementById(i));
            }
        });
        const n = document.getElementById("variables");
        document.getElementById("mobile-vars-btn").addEventListener("click", ()=>{
            n.classList.add("mobile-open"), $e.scrollTop = 0;
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
        const s = document.getElementById("app"), o = document.getElementById("sidebar-collapse-btn");
        o.addEventListener("click", ()=>{
            n.classList.toggle("collapsed"), s.classList.toggle("sidebar-collapsed");
            const a = n.classList.contains("collapsed");
            o.textContent = a ? "‹" : "›", o.title = a ? "Expand sidebar" : "Collapse sidebar", o.setAttribute("aria-label", a ? "Expand sidebar" : "Collapse sidebar");
        });
        function r(a) {
            const i = a.target.closest(".shortcut");
            i && I(i.dataset.insert ?? "");
        }
        document.getElementById("numpad").addEventListener("click", r), document.getElementById("shortcuts").addEventListener("click", r), document.getElementById("new-session-btn").addEventListener("click", ()=>Be()), M.addEventListener("change", ()=>{
            V(parseInt(M.value));
        }), p.addEventListener("keydown", (a)=>{
            const i = f.inputs;
            if (a.key === "ArrowUp") {
                if (i.length === 0) return;
                a.preventDefault(), y === -1 && (U = p.value), y = Math.min(y + 1, i.length - 1), p.value = i[i.length - 1 - y], p.setSelectionRange(p.value.length, p.value.length);
            } else if (a.key === "ArrowDown") {
                if (y === -1) return;
                a.preventDefault(), y--, p.value = y === -1 ? U : i[i.length - 1 - y], p.setSelectionRange(p.value.length, p.value.length);
            } else y = -1;
        }), document.getElementById("history-prev").addEventListener("click", ()=>{
            const a = f.inputs;
            a.length !== 0 && (y === -1 && (U = p.value), y = Math.min(y + 1, a.length - 1), p.value = a[a.length - 1 - y], p.focus(), p.setSelectionRange(p.value.length, p.value.length));
        }), document.getElementById("history-next").addEventListener("click", ()=>{
            y !== -1 && (y--, p.value = y === -1 ? U : f.inputs[f.inputs.length - 1 - y], p.focus(), p.setSelectionRange(p.value.length, p.value.length));
        }), Ve.addEventListener("submit", (a)=>{
            a.preventDefault();
            const i = p.value.trim();
            if (!i) return;
            K();
            let l = "", m = !1;
            try {
                const d = x.try_run_command(i);
                if (d.is_command) {
                    if (d.should_reset) {
                        ge();
                        return;
                    }
                    if (d.should_clear) {
                        ye();
                        return;
                    }
                    l = Ce(d.output ?? "(command executed)"), f.inputs.push(i), k();
                } else {
                    f.inputs.push(i), k();
                    const b = x.interpret(i);
                    if (l = b.output, m = b.is_error, !m) {
                        const u = i.match(Ee);
                        u && (C.add(u[1]), $());
                        const h = i.match(we);
                        h && (L.set(h[1], h[2]), j());
                    }
                }
            } catch (d) {
                l = ke(d instanceof Error ? d.message : String(d)), m = !0;
            }
            Ie(i, l, m), p.value = "";
        }), p.focus();
    }
    const R = document.getElementById("about-check-btn"), Se = document.getElementById("about-update-btn");
    document.getElementById("about-version").textContent = "0.3.5";
    let Te = !1;
    const lt = qe({
        onNeedRefresh () {
            Te = !0, R.hidden = !0, Se.hidden = !1;
        }
    });
    R.addEventListener("click", async ()=>{
        R.textContent = "Checking…", R.disabled = !0, await (await navigator.serviceWorker.getRegistration())?.update(), Te || (R.textContent = "Check for update", R.disabled = !1);
    });
    Se.addEventListener("click", ()=>{
        lt(!0);
    });
    function mt() {
        (async ()=>{
            localStorage.clear();
            const t = await navigator.serviceWorker.getRegistrations();
            await Promise.all(t.map((n)=>n.unregister()));
            const e = await caches.keys();
            await Promise.all(e.map((n)=>caches.delete(n))), location.reload();
        })();
    }
    ct();
})();
