(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);
        new MutationObserver((o)=>{
            for (const a of o)if (a.type === "childList") for (const s of a.addedNodes)s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(o) {
            const a = {};
            return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function i(o) {
            if (o.ep) return;
            o.ep = !0;
            const a = n(o);
            fetch(o.href, a);
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
    let H = null;
    function U() {
        return (H === null || H.byteLength === 0) && (H = new Uint8Array(c.memory.buffer)), H;
    }
    function W(t, e) {
        return t = t >>> 0, _e.decode(U().subarray(t, t + e));
    }
    function Se(t, e) {
        return t = t >>> 0, U().subarray(t / 1, t / 1 + e);
    }
    function Te(t) {
        const e = c.__externref_table_alloc();
        return c.__wbindgen_export_3.set(e, t), e;
    }
    function me(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const i = Te(n);
            c.__wbindgen_exn_store(i);
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
        let i = t.length, o = e(i, 1) >>> 0;
        const a = U();
        let s = 0;
        for(; s < i; s++){
            const r = t.charCodeAt(s);
            if (r > 127) break;
            a[o + s] = r;
        }
        if (s !== i) {
            s !== 0 && (t = t.slice(s)), o = n(o, i, i = s + t.length * 3, 1) >>> 0;
            const r = U().subarray(o + s, o + i), l = Ae(t, r);
            s += l.written, o = n(o, i, s, 1) >>> 0;
        }
        return v = s, o;
    }
    let T = null;
    function O() {
        return (T === null || T.buffer.detached === !0 || T.buffer.detached === void 0 && T.buffer !== c.memory.buffer) && (T = new DataView(c.memory.buffer)), T;
    }
    function Re(t) {
        return t == null;
    }
    function de(t, e) {
        t = t >>> 0;
        const n = O(), i = [];
        for(let o = t; o < t + 4 * e; o += 4)i.push(c.__wbindgen_export_3.get(n.getUint32(o, !0)));
        return c.__externref_drop_slice(t, e), i;
    }
    const Ne = Object.freeze({
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
                const i = c.commandresult_output(this.__wbg_ptr);
                return e = i[0], n = i[1], W(i[0], i[1]);
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
                const i = c.interpreteroutput_output(this.__wbg_ptr);
                return e = i[0], n = i[1], W(i[0], i[1]);
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
    class Y {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(Y.prototype);
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
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v;
            return c.numbat_print_info(this.__wbg_ptr, n, i);
        }
        try_run_command(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v, o = c.numbat_try_run_command(this.__wbg_ptr, n, i);
            return ie.__wrap(o);
        }
        set_exchange_rates(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v;
            c.numbat_set_exchange_rates(this.__wbg_ptr, n, i);
        }
        get_completions_for(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v, o = c.numbat_get_completions_for(this.__wbg_ptr, n, i);
            var a = de(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), a;
        }
        get_unicode_completion(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v, o = c.numbat_get_unicode_completion(this.__wbg_ptr, n, i);
            var a = de(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), a;
        }
        static new(e, n, i) {
            const o = c.numbat_new(e, n, i);
            return Y.__wrap(o);
        }
        help() {
            return c.numbat_help(this.__wbg_ptr);
        }
        interpret(e) {
            const n = C(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v, o = c.numbat_interpret(this.__wbg_ptr, n, i);
            return re.__wrap(o);
        }
    }
    async function Me(t, e) {
        if (typeof Response == "function" && t instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(t, e);
            } catch (i) {
                if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
                else throw i;
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
    function De() {
        const t = {};
        return t.wbg = {}, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
            let i, o;
            try {
                i = e, o = n, console.error(W(e, n));
            } finally{
                c.__wbindgen_free(i, o, 1);
            }
        }, t.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
            return me(function(e, n) {
                globalThis.crypto.getRandomValues(Se(e, n));
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
            const i = n.stack, o = C(i, c.__wbindgen_malloc, c.__wbindgen_realloc), a = v;
            O().setInt32(e + 4, a, !0), O().setInt32(e + 0, o, !0);
        }, t.wbg.__wbindgen_init_externref_table = function() {
            const e = c.__wbindgen_export_3, n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
        }, t.wbg.__wbindgen_number_new = function(e) {
            return e;
        }, t.wbg.__wbindgen_string_get = function(e, n) {
            const i = n, o = typeof i == "string" ? i : void 0;
            var a = Re(o) ? 0 : C(o, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v;
            O().setInt32(e + 4, s, !0), O().setInt32(e + 0, a, !0);
        }, t.wbg.__wbindgen_string_new = function(e, n) {
            return W(e, n);
        }, t.wbg.__wbindgen_throw = function(e, n) {
            throw new Error(W(e, n));
        }, t;
    }
    function Pe(t, e) {
        return c = t.exports, he.__wbindgen_wasm_module = e, T = null, H = null, c.__wbindgen_start(), c;
    }
    async function he(t) {
        if (c !== void 0) return c;
        typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/assets/numbat_wasm_bg-BTss0vKK.wasm", import.meta.url));
        const e = De();
        (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
        const { instance: n, module: i } = await Me(await t, e);
        return Pe(n, i);
    }
    const Fe = "modulepreload", He = function(t) {
        return "/" + t;
    }, fe = {}, Oe = function(e, n, i) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            let s = function(m) {
                return Promise.all(m.map((p)=>Promise.resolve(p).then((g)=>({
                            status: "fulfilled",
                            value: g
                        }), (g)=>({
                            status: "rejected",
                            reason: g
                        }))));
            };
            document.getElementsByTagName("link");
            const r = document.querySelector("meta[property=csp-nonce]"), l = r?.nonce || r?.getAttribute("nonce");
            o = s(n.map((m)=>{
                if (m = He(m), m in fe) return;
                fe[m] = !0;
                const p = m.endsWith(".css"), g = p ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${m}"]${g}`)) return;
                const u = document.createElement("link");
                if (u.rel = p ? "stylesheet" : Fe, p || (u.as = "script"), u.crossOrigin = "", u.href = m, l && u.setAttribute("nonce", l), document.head.appendChild(u), p) return new Promise((h, w)=>{
                    u.addEventListener("load", h), u.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${m}`)));
                });
            }));
        }
        function a(s) {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = s, window.dispatchEvent(r), !r.defaultPrevented) throw s;
        }
        return o.then((s)=>{
            for (const r of s || [])r.status === "rejected" && a(r.reason);
            return e().catch(a);
        });
    };
    function ze(t = {}) {
        const { immediate: e = !1, onNeedRefresh: n, onOfflineReady: i, onRegistered: o, onRegisteredSW: a, onRegisterError: s } = t;
        let r, l, m;
        const p = async (u = !0)=>{
            await l, m?.();
        };
        async function g() {
            if ("serviceWorker" in navigator) {
                if (r = await Oe(async ()=>{
                    const { Workbox: u } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: u
                    };
                }, []).then(({ Workbox: u })=>new u("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((u)=>{
                    s?.(u);
                }), !r) return;
                m = ()=>{
                    r?.messageSkipWaiting();
                };
                {
                    let u = !1;
                    const h = ()=>{
                        u = !0, r?.addEventListener("controlling", (w)=>{
                            w.isUpdate && window.location.reload();
                        }), n?.();
                    };
                    r.addEventListener("installed", (w)=>{
                        typeof w.isUpdate > "u" ? typeof w.isExternal < "u" && w.isExternal ? h() : !u && i?.() : w.isUpdate || i?.();
                    }), r.addEventListener("waiting", h);
                }
                r.register({
                    immediate: e
                }).then((u)=>{
                    a ? a("/sw.js", u) : o?.(u);
                }).catch((u)=>{
                    s?.(u);
                });
            }
        }
        return l = g(), p;
    }
    function oe() {
        const t = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${t}px`), window.scrollTo(0, 0);
    }
    oe();
    window.visualViewport ? window.visualViewport.addEventListener("resize", oe) : window.addEventListener("resize", oe);
    const E = document.getElementById("output"), Ue = document.getElementById("form"), d = document.getElementById("input"), Q = document.getElementById("variables-list"), P = document.getElementById("tabs-scroll"), M = document.getElementById("session-select"), We = document.getElementById("sidebar-middle"), G = document.getElementById("scripts-file-input"), qe = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/, Ve = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/, Ee = "calcite-sessions", $e = 10, L = new Set, I = new Map;
    let B, q = null, b, y = -1, z = "";
    function we(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function je(t) {
        let e = "";
        for(; e !== t;)e = t, t = t.replace(/\[\[[^\]]*\]([\s\S]*?)\]/g, "$1");
        return t;
    }
    function ve(t) {
        return je(t).replace(/\n/g, "<br>");
    }
    function Ke() {
        document.getElementById("variables").classList.remove("mobile-open");
    }
    const ke = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    function Ze(t, e) {
        const n = Array.from(e.querySelectorAll(ke));
        if (n.length === 0) return;
        const i = n[0], o = n[n.length - 1];
        t.shiftKey ? document.activeElement === i && (t.preventDefault(), o.focus()) : document.activeElement === o && (t.preventDefault(), i.focus());
    }
    function ae(t, e) {
        t.setAttribute("role", "button"), t.tabIndex = 0, t.addEventListener("click", e), t.addEventListener("keydown", (n)=>{
            (n.key === "Enter" || n.key === " ") && (n.preventDefault(), e());
        });
    }
    function A(t) {
        const e = d.value.length, n = document.activeElement === d, i = n ? d.selectionStart ?? e : e, o = n ? d.selectionEnd ?? e : e;
        d.setRangeText(t, i, o, "end"), d.focus();
    }
    function K() {
        y = -1, z = "";
    }
    function Le(t, e, n) {
        const i = document.createElement("div");
        i.className = "entry" + (n ? " error" : "");
        const o = document.createElement("div");
        o.className = "query", o.textContent = t, o.title = "Re-use this expression", ae(o, ()=>A(t));
        const a = document.createElement("div");
        a.className = "result", a.innerHTML = e, i.appendChild(o), i.appendChild(a), E.appendChild(i), E.scrollTop = E.scrollHeight;
    }
    function $() {
        if (L.size === 0) {
            Q.innerHTML = '<p class="no-vars">No variables yet</p>';
            return;
        }
        Q.innerHTML = "";
        for (const t of L)try {
            const e = B.interpret(t);
            if (!e.is_error) {
                const n = document.createElement("div");
                n.className = "var-item", n.title = `Insert "${t}"`, ae(n, ()=>{
                    A(t), Ke();
                });
                const i = document.createElement("span");
                i.className = "var-name", i.textContent = t;
                const o = document.createElement("span");
                o.className = "var-value", o.innerHTML = e.output, n.appendChild(i), n.appendChild(o), Q.appendChild(n);
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
            const i = document.createElement("div");
            i.className = "fn-item", i.title = `Insert "${e}("`, ae(i, ()=>{
                A(e + "("), f("functions-popup");
            });
            const o = document.createElement("span");
            o.className = "fn-name", o.textContent = e;
            const a = document.createElement("span");
            a.className = "fn-params", a.textContent = n, i.appendChild(o), i.appendChild(a), t.appendChild(i);
        }
    }
    function ee(t, e, n, i) {
        const o = document.getElementById("scripts-list"), a = o.querySelector(".no-vars");
        a && o.removeChild(a);
        const s = document.createElement("div");
        s.className = "script-item" + (i ? " error" : "");
        const r = document.createElement("span");
        r.className = "script-name", r.textContent = t;
        const l = document.createElement("span");
        if (l.className = "script-meta", i) l.textContent = "failed to load";
        else {
            const m = [];
            e > 0 && m.push(`${e} function${e !== 1 ? "s" : ""}`), n > 0 && m.push(`${n} variable${n !== 1 ? "s" : ""}`), l.textContent = m.length > 0 ? m.join(", ") : "loaded";
        }
        s.appendChild(r), s.appendChild(l), o.appendChild(s);
    }
    function S() {
        try {
            return JSON.parse(localStorage.getItem(Ee) ?? "[]");
        } catch  {
            return [];
        }
    }
    function Z(t) {
        localStorage.setItem(Ee, JSON.stringify(t));
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
            inputs: []
        };
    }
    function k() {
        const t = S(), e = t.findIndex((o)=>o.id === b.id);
        e >= 0 ? t[e] = b : t.unshift(b);
        let n = 0;
        const i = t.filter((o)=>o.named ? !0 : (n++, n <= $e));
        Z(i);
    }
    function D() {
        const e = [
            ...S()
        ].reverse();
        P.innerHTML = "", P.setAttribute("role", "tablist"), P.setAttribute("aria-label", "Sessions");
        for (const s of e){
            const r = s.id === b.id, l = document.createElement("div");
            l.className = "tab" + (r ? " active" : "") + (s.named ? " named" : ""), l.setAttribute("role", "tab"), l.setAttribute("aria-selected", r ? "true" : "false"), l.setAttribute("aria-controls", "output");
            const m = document.createElement("span");
            m.className = "tab-label", m.textContent = s.label, r || (m.tabIndex = 0, m.addEventListener("click", ()=>V(s.id)), m.addEventListener("keydown", (g)=>{
                (g.key === "Enter" || g.key === " ") && (g.preventDefault(), V(s.id));
            })), m.addEventListener("dblclick", (g)=>{
                g.stopPropagation(), Ge(s, m);
            }), l.appendChild(m);
            const p = document.createElement("button");
            p.className = "tab-close", p.textContent = "×", p.title = "Close session", p.addEventListener("click", (g)=>{
                g.stopPropagation();
                const h = S().filter((w)=>w.id !== s.id);
                Z(h), r ? (b.inputs = [], h.length > 0 ? V(h[0].id) : Ie()) : D();
            }), l.appendChild(p), P.appendChild(l);
        }
        const n = P.querySelector(".tab.active");
        n && n.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }), M.innerHTML = "";
        const i = e.filter((s)=>s.named), o = e.filter((s)=>!s.named);
        function a(s, r) {
            const l = document.createElement("option");
            l.value = String(s.id), l.textContent = s.label, l.selected = s.id === b.id, r.appendChild(l);
        }
        if (i.length > 0 && o.length > 0) {
            const s = document.createElement("optgroup");
            s.label = "Saved", i.forEach((l)=>a(l, s)), M.appendChild(s);
            const r = document.createElement("optgroup");
            r.label = "Recent", o.forEach((l)=>a(l, r)), M.appendChild(r);
        } else e.forEach((s)=>a(s, M));
    }
    function Ge(t, e) {
        const n = document.createElement("input");
        n.type = "text", n.className = "tab-rename-input", n.value = t.label, e.replaceWith(n), n.focus(), n.select();
        function i() {
            const o = n.value.trim();
            if (o && o !== t.label) {
                t.label = o, t.named = !0, t.id === b.id && (b = t);
                const a = S(), s = a.findIndex((r)=>r.id === t.id);
                s >= 0 && (a[s] = t, Z(a));
            }
            D();
        }
        n.addEventListener("blur", i), n.addEventListener("keydown", (o)=>{
            o.key === "Enter" && (o.preventDefault(), n.blur()), o.key === "Escape" && (n.value = t.label, n.blur());
        });
    }
    function Ie() {
        b && (b.inputs.length === 0 ? Z(S().filter((t)=>t.id !== b.id)) : k()), X(), L.clear(), I.clear(), E.innerHTML = "", $(), j(), b = ce(), k(), D(), K(), d.value = "", d.focus();
    }
    async function V(t) {
        const n = S().find((i)=>i.id === t);
        if (n) {
            b && (b.inputs.length === 0 ? Z(S().filter((i)=>i.id !== b.id)) : k()), X(), L.clear(), I.clear(), E.innerHTML = "", b = n, K(), D();
            for (const i of n.inputs){
                let o = "", a = !1;
                try {
                    const s = B.try_run_command(i);
                    if (s.is_command) s.should_reset ? (E.innerHTML = "", L.clear(), I.clear()) : s.should_clear ? E.innerHTML = "" : o = ve(s.output ?? "(command executed)");
                    else {
                        const r = B.interpret(i);
                        if (o = r.output, a = r.is_error, !a) {
                            for (const l of i.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm))L.add(l[1]);
                            for (const l of i.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm))I.set(l[1], l[2]);
                        }
                    }
                } catch (s) {
                    o = we(s instanceof Error ? s.message : String(s)), a = !0;
                }
                o && Le(i, o, a);
            }
            $(), j(), d.focus();
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
            const i = document.createElement("h4");
            i.textContent = e.name, n.appendChild(i);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const a of e.units){
                const s = document.createElement("button");
                s.type = "button", s.className = "unit-chip", s.textContent = a.symbol, s.title = a.name, s.addEventListener("click", ()=>{
                    A(a.symbol), f("units-popup");
                }), o.appendChild(s);
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
            const i = document.createElement("h4");
            i.textContent = e.name, n.appendChild(i);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const a of e.dimensions){
                const s = document.createElement("button");
                s.type = "button", s.className = "unit-chip", s.textContent = a, s.addEventListener("click", ()=>{
                    A(a), f("dimensions-popup");
                }), o.appendChild(s);
            }
            n.appendChild(o), t.appendChild(n);
        }
    }
    function Ce() {
        if (!q) return;
        const t = [
            ...q.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)
        ];
        for (const [, e, n] of t)B.interpret(`unit ${e} : Money = (1 / ${n}) EUR`);
    }
    function X() {
        B = Y.new(!0, !0, Ne.Html), Ce();
    }
    const et = {
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
    function tt(t) {
        const e = document.getElementById("currencies-list");
        e.innerHTML = "";
        const n = [
            "EUR",
            ...new Set([
                ...t.matchAll(/currency='([A-Z]{3})'/g)
            ].map((o)=>o[1]))
        ];
        n.sort();
        const i = document.createElement("div");
        i.className = "unit-chips";
        for (const o of n){
            const a = document.createElement("button");
            a.type = "button", a.className = "unit-chip currency-chip", a.addEventListener("click", ()=>{
                A(o), f("currencies-popup");
            });
            const s = document.createElement("span");
            s.className = "chip-symbol", s.textContent = et[o] ?? o;
            const r = document.createElement("span");
            r.className = "chip-code", r.textContent = o, a.appendChild(s), a.appendChild(r), i.appendChild(a);
        }
        e.appendChild(i);
    }
    async function nt() {
        const t = document.getElementById("currencies-status");
        t.textContent = "Loading…", t.className = "currencies-loading";
        try {
            const e = await fetch("/ecb-rates.xml");
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            q = await e.text(), Ce();
            const n = q.match(/time='(\d{4}-\d{2}-\d{2})'/), i = n ? new Date(n[1]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "unknown date";
            t.textContent = `European Central Bank rates · ${i}`, t.className = "", tt(q);
        } catch  {
            t.textContent = "Unavailable", t.className = "currencies-error";
        }
    }
    function ge() {
        X(), E.innerHTML = "", L.clear(), I.clear(), $(), j(), document.getElementById("scripts-list").innerHTML = '<p class="no-vars">No scripts loaded</p>', b = ce(), k(), D(), d.value = "", K();
    }
    function ye() {
        E.innerHTML = "", b.inputs = [], k(), d.value = "", K();
    }
    let se = null;
    const x = [];
    function _(t) {
        x.length === 0 && (se = document.activeElement), x.push(t);
        const e = document.getElementById(t);
        e.classList.add("visible"), document.getElementById(t + "-backdrop").classList.add("visible"), e.querySelector(ke)?.focus();
    }
    function f(t) {
        document.getElementById(t).classList.remove("visible"), document.getElementById(t + "-backdrop").classList.remove("visible");
        const e = x.lastIndexOf(t);
        e >= 0 && x.splice(e, 1), x.length === 0 && (se?.focus(), se = null);
    }
    let le = null;
    function te(t, e, n, i = "Confirm") {
        document.getElementById("confirm-popup-title").textContent = t, document.getElementById("confirm-popup-message").textContent = e, document.getElementById("confirm-popup-ok").textContent = i, le = n, _("confirm-popup");
    }
    function F() {
        f("confirm-popup"), le = null;
    }
    function R(t, e) {
        document.getElementById("info-popup-title").textContent = t, document.getElementById("info-popup-message").textContent = e, _("info-popup");
    }
    function ne() {
        f("info-popup");
    }
    async function ot() {
        const t = document.createElement("div");
        t.className = "entry init-msg", t.textContent = "Loading…", E.appendChild(t);
        try {
            await he();
        } catch (s) {
            t.textContent = "Failed to load: " + (s instanceof Error ? s.message : String(s)), t.classList.add("error");
            return;
        }
        X(), E.removeChild(t), await nt();
        const e = S();
        e.length > 0 ? await V(e[0].id) : (b = ce(), k(), D()), Ye(), document.getElementById("units-panel-btn").addEventListener("click", ()=>_("units-popup")), document.getElementById("units-popup-close").addEventListener("click", ()=>f("units-popup")), document.getElementById("units-popup-backdrop").addEventListener("click", ()=>f("units-popup")), Qe(), document.getElementById("dimensions-panel-btn").addEventListener("click", ()=>_("dimensions-popup")), document.getElementById("dimensions-popup-close").addEventListener("click", ()=>f("dimensions-popup")), document.getElementById("dimensions-popup-backdrop").addEventListener("click", ()=>f("dimensions-popup")), document.getElementById("functions-panel-btn").addEventListener("click", ()=>_("functions-popup")), document.getElementById("functions-popup-close").addEventListener("click", ()=>f("functions-popup")), document.getElementById("functions-popup-backdrop").addEventListener("click", ()=>f("functions-popup")), document.getElementById("scripts-panel-btn").addEventListener("click", ()=>_("scripts-popup")), document.getElementById("scripts-popup-close").addEventListener("click", ()=>f("scripts-popup")), document.getElementById("scripts-popup-backdrop").addEventListener("click", ()=>f("scripts-popup")), document.getElementById("scripts-upload-btn").addEventListener("click", ()=>G.click()), G.addEventListener("change", async ()=>{
            const s = G.files?.[0];
            if (s) {
                try {
                    const r = await s.text();
                    if (B.interpret(r).is_error) ee(s.name, 0, 0, !0);
                    else {
                        const m = [
                            ...r.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm)
                        ], p = [
                            ...r.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm)
                        ];
                        for (const g of m)I.set(g[1], g[2]);
                        for (const g of p)L.add(g[1]);
                        b.inputs.push(r), k(), $(), j(), ee(s.name, m.length, p.length, !1);
                    }
                } catch  {
                    ee(s.name, 0, 0, !0);
                }
                G.value = "";
            }
        }), document.getElementById("currencies-panel-btn").addEventListener("click", ()=>_("currencies-popup")), document.getElementById("currencies-popup-close").addEventListener("click", ()=>f("currencies-popup")), document.getElementById("currencies-popup-backdrop").addEventListener("click", ()=>f("currencies-popup")), document.getElementById("info-popup-close").addEventListener("click", ne), document.getElementById("info-popup-backdrop").addEventListener("click", ne), document.getElementById("vars-help-btn").addEventListener("click", ()=>{
            R("Variables", "Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.");
        }), document.getElementById("functions-help-btn").addEventListener("click", ()=>{
            R("Functions", "Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.");
        }), document.getElementById("currencies-help-btn").addEventListener("click", ()=>{
            R("Currencies", 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".');
        }), document.getElementById("units-help-btn").addEventListener("click", ()=>{
            R("Units", 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.');
        }), document.getElementById("dimensions-help-btn").addEventListener("click", ()=>{
            R("Dimensions", 'Dimensions are physical quantity types used in type annotations — for example "let x: Length = 5 m" or "fn speed(d: Length, t: Time) -> Velocity = d / t". Tap a dimension to insert it at the cursor.');
        }), document.getElementById("scripts-help-btn").addEventListener("click", ()=>{
            R("Scripts", "Upload Numbat script files (.nbt) to load function and variable definitions into the current session. Uploaded scripts appear here; their functions appear in the Functions panel.");
        }), document.getElementById("confirm-popup-close").addEventListener("click", F), document.getElementById("confirm-popup-backdrop").addEventListener("click", F), document.getElementById("confirm-popup-cancel").addEventListener("click", F), document.getElementById("confirm-popup-ok").addEventListener("click", ()=>{
            const s = le;
            F(), s && s();
        }), document.getElementById("about-btn").addEventListener("click", ()=>_("about-popup")), document.getElementById("about-popup-close").addEventListener("click", ()=>f("about-popup")), document.getElementById("about-popup-backdrop").addEventListener("click", ()=>f("about-popup")), document.getElementById("about-reset-btn").addEventListener("click", ()=>{
            te("Reset app data", "This will erase all sessions, variables, and cached data. The app will reload.", it, "Reset");
        }), document.getElementById("clear-btn").addEventListener("click", ()=>{
            te("Clear session", "Clear all output and history for this session?", ye, "Clear");
        }), document.getElementById("reset-btn").addEventListener("click", ()=>{
            te("Reset", "Clear all output, variables, and functions, and start fresh?", ge, "Reset");
        }), document.addEventListener("keydown", (s)=>{
            if (s.key === "Escape" && (F(), ne(), f("about-popup"), f("units-popup"), f("dimensions-popup"), f("functions-popup"), f("currencies-popup"), f("scripts-popup")), s.key === "Tab" && x.length > 0) {
                const r = x[x.length - 1];
                Ze(s, document.getElementById(r));
            }
        });
        const n = document.getElementById("variables");
        document.getElementById("mobile-vars-btn").addEventListener("click", ()=>{
            n.classList.add("mobile-open"), We.scrollTop = 0;
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
        const i = document.getElementById("app"), o = document.getElementById("sidebar-collapse-btn");
        o.addEventListener("click", ()=>{
            n.classList.toggle("collapsed"), i.classList.toggle("sidebar-collapsed");
            const s = n.classList.contains("collapsed");
            o.textContent = s ? "‹" : "›", o.title = s ? "Expand sidebar" : "Collapse sidebar", o.setAttribute("aria-label", s ? "Expand sidebar" : "Collapse sidebar");
        });
        function a(s) {
            const r = s.target.closest(".shortcut");
            r && A(r.dataset.insert ?? "");
        }
        document.getElementById("numpad").addEventListener("click", a), document.getElementById("shortcuts").addEventListener("click", a), document.getElementById("new-session-btn").addEventListener("click", ()=>Ie()), M.addEventListener("change", ()=>{
            V(parseInt(M.value));
        }), d.addEventListener("keydown", (s)=>{
            const r = b.inputs;
            if (s.key === "ArrowUp") {
                if (r.length === 0) return;
                s.preventDefault(), y === -1 && (z = d.value), y = Math.min(y + 1, r.length - 1), d.value = r[r.length - 1 - y], d.setSelectionRange(d.value.length, d.value.length);
            } else if (s.key === "ArrowDown") {
                if (y === -1) return;
                s.preventDefault(), y--, d.value = y === -1 ? z : r[r.length - 1 - y], d.setSelectionRange(d.value.length, d.value.length);
            } else y = -1;
        }), document.getElementById("history-prev").addEventListener("click", ()=>{
            const s = b.inputs;
            s.length !== 0 && (y === -1 && (z = d.value), y = Math.min(y + 1, s.length - 1), d.value = s[s.length - 1 - y], d.focus(), d.setSelectionRange(d.value.length, d.value.length));
        }), document.getElementById("history-next").addEventListener("click", ()=>{
            y !== -1 && (y--, d.value = y === -1 ? z : b.inputs[b.inputs.length - 1 - y], d.focus(), d.setSelectionRange(d.value.length, d.value.length));
        }), Ue.addEventListener("submit", (s)=>{
            s.preventDefault();
            const r = d.value.trim();
            if (!r) return;
            K();
            let l = "", m = !1;
            try {
                const p = B.try_run_command(r);
                if (p.is_command) {
                    if (p.should_reset) {
                        ge();
                        return;
                    }
                    if (p.should_clear) {
                        ye();
                        return;
                    }
                    l = ve(p.output ?? "(command executed)"), b.inputs.push(r), k();
                } else {
                    b.inputs.push(r), k();
                    const g = B.interpret(r);
                    if (l = g.output, m = g.is_error, !m) {
                        const u = r.match(qe);
                        u && (L.add(u[1]), $());
                        const h = r.match(Ve);
                        h && (I.set(h[1], h[2]), j());
                    }
                }
            } catch (p) {
                l = we(p instanceof Error ? p.message : String(p)), m = !0;
            }
            Le(r, l, m), d.value = "";
        }), d.focus();
    }
    const N = document.getElementById("about-check-btn"), Be = document.getElementById("about-update-btn");
    document.getElementById("about-version").textContent = "0.3.1";
    let xe = !1;
    const st = ze({
        onNeedRefresh () {
            xe = !0, N.hidden = !0, Be.hidden = !1;
        }
    });
    N.addEventListener("click", async ()=>{
        N.textContent = "Checking…", N.disabled = !0, await (await navigator.serviceWorker.getRegistration())?.update(), xe || (N.textContent = "Check for update", N.disabled = !1);
    });
    Be.addEventListener("click", ()=>{
        st(!0);
    });
    function it() {
        (async ()=>{
            localStorage.clear();
            const t = await navigator.serviceWorker.getRegistrations();
            await Promise.all(t.map((n)=>n.unregister()));
            const e = await caches.keys();
            await Promise.all(e.map((n)=>caches.delete(n))), location.reload();
        })();
    }
    ot();
})();
