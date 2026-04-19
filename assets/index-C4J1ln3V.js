(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);
        new MutationObserver((o)=>{
            for (const a of o)if (a.type === "childList") for (const s of a.addedNodes)s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(o) {
            const a = {};
            return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function r(o) {
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
    let z = null;
    function W() {
        return (z === null || z.byteLength === 0) && (z = new Uint8Array(c.memory.buffer)), z;
    }
    function U(t, e) {
        return t = t >>> 0, _e.decode(W().subarray(t, t + e));
    }
    function Be(t, e) {
        return t = t >>> 0, W().subarray(t / 1, t / 1 + e);
    }
    function Se(t) {
        const e = c.__externref_table_alloc();
        return c.__wbindgen_export_3.set(e, t), e;
    }
    function ae(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const r = Se(n);
            c.__wbindgen_exn_store(r);
        }
    }
    let E = 0;
    const $ = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
        encode: ()=>{
            throw Error("TextEncoder not available");
        }
    }, Te = typeof $.encodeInto == "function" ? function(t, e) {
        return $.encodeInto(t, e);
    } : function(t, e) {
        const n = $.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    };
    function v(t, e, n) {
        if (n === void 0) {
            const i = $.encode(t), l = e(i.length, 1) >>> 0;
            return W().subarray(l, l + i.length).set(i), E = i.length, l;
        }
        let r = t.length, o = e(r, 1) >>> 0;
        const a = W();
        let s = 0;
        for(; s < r; s++){
            const i = t.charCodeAt(s);
            if (i > 127) break;
            a[o + s] = i;
        }
        if (s !== r) {
            s !== 0 && (t = t.slice(s)), o = n(o, r, r = s + t.length * 3, 1) >>> 0;
            const i = W().subarray(o + s, o + r), l = Te(t, i);
            s += l.written, o = n(o, r, s, 1) >>> 0;
        }
        return E = s, o;
    }
    let S = null;
    function F() {
        return (S === null || S.buffer.detached === !0 || S.buffer.detached === void 0 && S.buffer !== c.memory.buffer) && (S = new DataView(c.memory.buffer)), S;
    }
    function Re(t) {
        return t == null;
    }
    function ce(t, e) {
        t = t >>> 0;
        const n = F(), r = [];
        for(let o = t; o < t + 4 * e; o += 4)r.push(c.__wbindgen_export_3.get(n.getUint32(o, !0)));
        return c.__externref_drop_slice(t, e), r;
    }
    const Ne = Object.freeze({
        JqueryTerminal: 0,
        0: "JqueryTerminal",
        Html: 1,
        1: "Html"
    }), le = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_commandresult_free(t >>> 0, 1));
    class ne {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(ne.prototype);
            return n.__wbg_ptr = e, le.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, le.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_commandresult_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const r = c.commandresult_output(this.__wbg_ptr);
                return e = r[0], n = r[1], U(r[0], r[1]);
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
    const me = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_interpreteroutput_free(t >>> 0, 1));
    class oe {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(oe.prototype);
            return n.__wbg_ptr = e, me.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, me.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_interpreteroutput_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const r = c.interpreteroutput_output(this.__wbg_ptr);
                return e = r[0], n = r[1], U(r[0], r[1]);
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
    const ue = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_numbat_free(t >>> 0, 1));
    class J {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(J.prototype);
            return n.__wbg_ptr = e, ue.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, ue.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_numbat_free(e, 0);
        }
        print_info(e) {
            const n = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), r = E;
            return c.numbat_print_info(this.__wbg_ptr, n, r);
        }
        try_run_command(e) {
            const n = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), r = E, o = c.numbat_try_run_command(this.__wbg_ptr, n, r);
            return ne.__wrap(o);
        }
        set_exchange_rates(e) {
            const n = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), r = E;
            c.numbat_set_exchange_rates(this.__wbg_ptr, n, r);
        }
        get_completions_for(e) {
            const n = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), r = E, o = c.numbat_get_completions_for(this.__wbg_ptr, n, r);
            var a = ce(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), a;
        }
        get_unicode_completion(e) {
            const n = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), r = E, o = c.numbat_get_unicode_completion(this.__wbg_ptr, n, r);
            var a = ce(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), a;
        }
        static new(e, n, r) {
            const o = c.numbat_new(e, n, r);
            return J.__wrap(o);
        }
        help() {
            return c.numbat_help(this.__wbg_ptr);
        }
        interpret(e) {
            const n = v(e, c.__wbindgen_malloc, c.__wbindgen_realloc), r = E, o = c.numbat_interpret(this.__wbg_ptr, n, r);
            return oe.__wrap(o);
        }
    }
    async function Ae(t, e) {
        if (typeof Response == "function" && t instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(t, e);
            } catch (r) {
                if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
                else throw r;
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
    function Me() {
        const t = {};
        return t.wbg = {}, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
            let r, o;
            try {
                r = e, o = n, console.error(U(e, n));
            } finally{
                c.__wbindgen_free(r, o, 1);
            }
        }, t.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
            return ae(function(e, n) {
                globalThis.crypto.getRandomValues(Be(e, n));
            }, arguments);
        }, t.wbg.__wbg_getTime_46267b1c24877e30 = function(e) {
            return e.getTime();
        }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
            return ae(function(e, n) {
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
            const r = n.stack, o = v(r, c.__wbindgen_malloc, c.__wbindgen_realloc), a = E;
            F().setInt32(e + 4, a, !0), F().setInt32(e + 0, o, !0);
        }, t.wbg.__wbindgen_init_externref_table = function() {
            const e = c.__wbindgen_export_3, n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
        }, t.wbg.__wbindgen_number_new = function(e) {
            return e;
        }, t.wbg.__wbindgen_string_get = function(e, n) {
            const r = n, o = typeof r == "string" ? r : void 0;
            var a = Re(o) ? 0 : v(o, c.__wbindgen_malloc, c.__wbindgen_realloc), s = E;
            F().setInt32(e + 4, s, !0), F().setInt32(e + 0, a, !0);
        }, t.wbg.__wbindgen_string_new = function(e, n) {
            return U(e, n);
        }, t.wbg.__wbindgen_throw = function(e, n) {
            throw new Error(U(e, n));
        }, t;
    }
    function Pe(t, e) {
        return c = t.exports, ge.__wbindgen_wasm_module = e, S = null, z = null, c.__wbindgen_start(), c;
    }
    async function ge(t) {
        if (c !== void 0) return c;
        typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/assets/numbat_wasm_bg-BTss0vKK.wasm", import.meta.url));
        const e = Me();
        (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
        const { instance: n, module: r } = await Ae(await t, e);
        return Pe(n, r);
    }
    const Oe = "modulepreload", ze = function(t) {
        return "/" + t;
    }, de = {}, Fe = function(e, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            let s = function(u) {
                return Promise.all(u.map((f)=>Promise.resolve(f).then((b)=>({
                            status: "fulfilled",
                            value: b
                        }), (b)=>({
                            status: "rejected",
                            reason: b
                        }))));
            };
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), l = i?.nonce || i?.getAttribute("nonce");
            o = s(n.map((u)=>{
                if (u = ze(u), u in de) return;
                de[u] = !0;
                const f = u.endsWith(".css"), b = f ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${b}`)) return;
                const d = document.createElement("link");
                if (d.rel = f ? "stylesheet" : Oe, f || (d.as = "script"), d.crossOrigin = "", d.href = u, l && d.setAttribute("nonce", l), document.head.appendChild(d), f) return new Promise((y, w)=>{
                    d.addEventListener("load", y), d.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${u}`)));
                });
            }));
        }
        function a(s) {
            const i = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (i.payload = s, window.dispatchEvent(i), !i.defaultPrevented) throw s;
        }
        return o.then((s)=>{
            for (const i of s || [])i.status === "rejected" && a(i.reason);
            return e().catch(a);
        });
    };
    function He(t = {}) {
        const { immediate: e = !1, onNeedRefresh: n, onOfflineReady: r, onRegistered: o, onRegisteredSW: a, onRegisterError: s } = t;
        let i, l, u;
        const f = async (d = !0)=>{
            await l, u?.();
        };
        async function b() {
            if ("serviceWorker" in navigator) {
                if (i = await Fe(async ()=>{
                    const { Workbox: d } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: d
                    };
                }, []).then(({ Workbox: d })=>new d("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((d)=>{
                    s?.(d);
                }), !i) return;
                u = ()=>{
                    i?.messageSkipWaiting();
                };
                {
                    let d = !1;
                    const y = ()=>{
                        d = !0, i?.addEventListener("controlling", (w)=>{
                            w.isUpdate && window.location.reload();
                        }), n?.();
                    };
                    i.addEventListener("installed", (w)=>{
                        typeof w.isUpdate > "u" ? typeof w.isExternal < "u" && w.isExternal ? y() : !d && r?.() : w.isUpdate || r?.();
                    }), i.addEventListener("waiting", y);
                }
                i.register({
                    immediate: e
                }).then((d)=>{
                    a ? a("/sw.js", d) : o?.(d);
                }).catch((d)=>{
                    s?.(d);
                });
            }
        }
        return l = b(), f;
    }
    function ee() {
        const t = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${t}px`), window.scrollTo(0, 0);
    }
    ee();
    window.visualViewport ? window.visualViewport.addEventListener("resize", ee) : window.addEventListener("resize", ee);
    const h = document.getElementById("output"), We = document.getElementById("form"), m = document.getElementById("input"), Y = document.getElementById("variables-list"), P = document.getElementById("tabs-scroll"), N = document.getElementById("session-select"), Ue = document.getElementById("sidebar-middle"), ye = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/, he = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/, we = "calcite-sessions", De = 10, L = new Set, I = new Map;
    let T, D = null, p, _ = -1, H = "";
    function Ee(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function qe() {
        document.getElementById("variables").classList.remove("mobile-open");
    }
    const ve = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    function Ve(t, e) {
        const n = Array.from(e.querySelectorAll(ve));
        if (n.length === 0) return;
        const r = n[0], o = n[n.length - 1];
        t.shiftKey ? document.activeElement === r && (t.preventDefault(), o.focus()) : document.activeElement === o && (t.preventDefault(), r.focus());
    }
    function re(t, e) {
        t.setAttribute("role", "button"), t.tabIndex = 0, t.addEventListener("click", e), t.addEventListener("keydown", (n)=>{
            (n.key === "Enter" || n.key === " ") && (n.preventDefault(), e());
        });
    }
    function A(t) {
        const e = document.activeElement === m;
        m.setRangeText(t, m.selectionStart ?? m.value.length, m.selectionEnd ?? m.value.length, "end"), e && m.focus();
    }
    function V() {
        _ = -1, H = "";
    }
    function ke(t, e, n) {
        const r = document.createElement("div");
        r.className = "entry" + (n ? " error" : "");
        const o = document.createElement("div");
        o.className = "query", o.textContent = t, o.title = "Re-use this expression", re(o, ()=>A(t));
        const a = document.createElement("div");
        a.className = "result", a.innerHTML = e, r.appendChild(o), r.appendChild(a), h.appendChild(r), h.scrollTop = h.scrollHeight;
    }
    function K() {
        if (L.size === 0) {
            Y.innerHTML = '<p class="no-vars">No variables yet</p>';
            return;
        }
        Y.innerHTML = "";
        for (const t of L)try {
            const e = T.interpret(t);
            if (!e.is_error) {
                const n = document.createElement("div");
                n.className = "var-item", n.title = `Insert "${t}"`, re(n, ()=>{
                    A(t), qe();
                });
                const r = document.createElement("span");
                r.className = "var-name", r.textContent = t;
                const o = document.createElement("span");
                o.className = "var-value", o.innerHTML = e.output, n.appendChild(r), n.appendChild(o), Y.appendChild(n);
            }
        } catch  {}
    }
    function Z() {
        const t = document.getElementById("functions-list");
        if (I.size === 0) {
            t.innerHTML = '<p class="no-vars">No functions yet</p>';
            return;
        }
        t.innerHTML = "";
        for (const [e, n] of I){
            const r = document.createElement("div");
            r.className = "fn-item", r.title = `Insert "${e}("`, re(r, ()=>{
                A(e + "("), g("functions-popup");
            });
            const o = document.createElement("span");
            o.className = "fn-name", o.textContent = e;
            const a = document.createElement("span");
            a.className = "fn-params", a.textContent = n, r.appendChild(o), r.appendChild(a), t.appendChild(r);
        }
    }
    function B() {
        try {
            return JSON.parse(localStorage.getItem(we) ?? "[]");
        } catch  {
            return [];
        }
    }
    function j(t) {
        localStorage.setItem(we, JSON.stringify(t));
    }
    function se() {
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
    function x() {
        const t = B(), e = t.findIndex((o)=>o.id === p.id);
        e >= 0 ? t[e] = p : t.unshift(p);
        let n = 0;
        const r = t.filter((o)=>o.named ? !0 : (n++, n <= De));
        j(r);
    }
    function M() {
        const e = [
            ...B()
        ].reverse();
        P.innerHTML = "", P.setAttribute("role", "tablist"), P.setAttribute("aria-label", "Sessions");
        for (const s of e){
            const i = s.id === p.id, l = document.createElement("div");
            l.className = "tab" + (i ? " active" : "") + (s.named ? " named" : ""), l.setAttribute("role", "tab"), l.setAttribute("aria-selected", i ? "true" : "false"), l.setAttribute("aria-controls", "output");
            const u = document.createElement("span");
            u.className = "tab-label", u.textContent = s.label, i || (u.tabIndex = 0, u.addEventListener("click", ()=>q(s.id)), u.addEventListener("keydown", (b)=>{
                (b.key === "Enter" || b.key === " ") && (b.preventDefault(), q(s.id));
            })), u.addEventListener("dblclick", (b)=>{
                b.stopPropagation(), je(s, u);
            }), l.appendChild(u);
            const f = document.createElement("button");
            f.className = "tab-close", f.textContent = "×", f.title = "Close session", f.addEventListener("click", (b)=>{
                b.stopPropagation();
                const y = B().filter((w)=>w.id !== s.id);
                j(y), i ? (p.inputs = [], y.length > 0 ? q(y[0].id) : Le()) : M();
            }), l.appendChild(f), P.appendChild(l);
        }
        const n = P.querySelector(".tab.active");
        n && n.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }), N.innerHTML = "";
        const r = e.filter((s)=>s.named), o = e.filter((s)=>!s.named);
        function a(s, i) {
            const l = document.createElement("option");
            l.value = String(s.id), l.textContent = s.label, l.selected = s.id === p.id, i.appendChild(l);
        }
        if (r.length > 0 && o.length > 0) {
            const s = document.createElement("optgroup");
            s.label = "Saved", r.forEach((l)=>a(l, s)), N.appendChild(s);
            const i = document.createElement("optgroup");
            i.label = "Recent", o.forEach((l)=>a(l, i)), N.appendChild(i);
        } else e.forEach((s)=>a(s, N));
    }
    function je(t, e) {
        const n = document.createElement("input");
        n.type = "text", n.className = "tab-rename-input", n.value = t.label, e.replaceWith(n), n.focus(), n.select();
        function r() {
            const o = n.value.trim();
            if (o && o !== t.label) {
                t.label = o, t.named = !0, t.id === p.id && (p = t);
                const a = B(), s = a.findIndex((i)=>i.id === t.id);
                s >= 0 && (a[s] = t, j(a));
            }
            M();
        }
        n.addEventListener("blur", r), n.addEventListener("keydown", (o)=>{
            o.key === "Enter" && (o.preventDefault(), n.blur()), o.key === "Escape" && (n.value = t.label, n.blur());
        });
    }
    function Le() {
        p && (p.inputs.length === 0 ? j(B().filter((t)=>t.id !== p.id)) : x()), X(), L.clear(), I.clear(), h.innerHTML = "", K(), Z(), p = se(), x(), M(), V(), m.value = "", m.focus();
    }
    async function q(t) {
        const n = B().find((r)=>r.id === t);
        if (n) {
            p && (p.inputs.length === 0 ? j(B().filter((r)=>r.id !== p.id)) : x()), X(), L.clear(), I.clear(), h.innerHTML = "", p = n, V(), M();
            for (const r of n.inputs){
                let o = "", a = !1;
                try {
                    const s = T.try_run_command(r);
                    if (s.is_command) s.should_reset ? (h.innerHTML = "", L.clear(), I.clear()) : s.should_clear ? h.innerHTML = "" : o = s.output ?? "(command executed)";
                    else {
                        const i = T.interpret(r);
                        if (o = i.output, a = i.is_error, !a) {
                            const l = r.match(ye);
                            l && L.add(l[1]);
                            const u = r.match(he);
                            u && I.set(u[1], u[2]);
                        }
                    }
                } catch (s) {
                    o = Ee(s instanceof Error ? s.message : String(s)), a = !0;
                }
                o && ke(r, o, a);
            }
            K(), Z(), m.focus();
        }
    }
    const Ge = [
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
    function $e() {
        const t = document.getElementById("units-section-body");
        for (const e of Ge){
            const n = document.createElement("div");
            n.className = "unit-category";
            const r = document.createElement("h4");
            r.textContent = e.name, n.appendChild(r);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const a of e.units){
                const s = document.createElement("button");
                s.type = "button", s.className = "unit-chip", s.textContent = a.symbol, s.title = a.name, s.addEventListener("click", ()=>{
                    A(a.symbol), g("units-popup");
                }), o.appendChild(s);
            }
            n.appendChild(o), t.appendChild(n);
        }
    }
    function Ie() {
        if (!D) return;
        const t = [
            ...D.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)
        ];
        for (const [, e, n] of t)T.interpret(`unit ${e} : Money = (1 / ${n}) EUR`);
    }
    function X() {
        T = J.new(!0, !0, Ne.Html), Ie();
    }
    function Je(t) {
        const e = document.getElementById("currencies-list");
        e.innerHTML = "";
        const n = [
            "EUR",
            ...new Set([
                ...t.matchAll(/currency='([A-Z]{3})'/g)
            ].map((o)=>o[1]))
        ];
        n.sort();
        const r = document.createElement("div");
        r.className = "unit-chips";
        for (const o of n){
            const a = document.createElement("button");
            a.type = "button", a.className = "unit-chip", a.textContent = o, a.addEventListener("click", ()=>{
                A(o), g("currencies-popup");
            }), r.appendChild(a);
        }
        e.appendChild(r);
    }
    async function Ke() {
        const t = document.getElementById("currencies-status");
        t.textContent = "Loading…", t.className = "currencies-loading";
        try {
            const e = await fetch("/ecb-rates.xml");
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            D = await e.text(), Ie();
            const n = D.match(/time='(\d{4}-\d{2}-\d{2})'/), r = n ? new Date(n[1]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "unknown date";
            t.textContent = `Rates · ${r}`, t.className = "", Je(D);
        } catch  {
            t.textContent = "Unavailable", t.className = "currencies-error";
        }
    }
    function pe() {
        X(), h.innerHTML = "", L.clear(), I.clear(), K(), Z(), p = se(), x(), M(), m.value = "", V();
    }
    function fe() {
        h.innerHTML = "", p.inputs = [], x(), m.value = "", V();
    }
    let te = null;
    const C = [];
    function k(t) {
        C.length === 0 && (te = document.activeElement), C.push(t);
        const e = document.getElementById(t);
        e.classList.add("visible"), document.getElementById(t + "-backdrop").classList.add("visible"), e.querySelector(ve)?.focus();
    }
    function g(t) {
        document.getElementById(t).classList.remove("visible"), document.getElementById(t + "-backdrop").classList.remove("visible");
        const e = C.lastIndexOf(t);
        e >= 0 && C.splice(e, 1), C.length === 0 && (te?.focus(), te = null);
    }
    let ie = null;
    function be(t, e, n, r = "Confirm") {
        document.getElementById("confirm-popup-title").textContent = t, document.getElementById("confirm-popup-message").textContent = e, document.getElementById("confirm-popup-ok").textContent = r, ie = n, k("confirm-popup");
    }
    function O() {
        g("confirm-popup"), ie = null;
    }
    function G(t, e) {
        document.getElementById("info-popup-title").textContent = t, document.getElementById("info-popup-message").textContent = e, k("info-popup");
    }
    function Q() {
        g("info-popup");
    }
    async function Ze() {
        const t = document.createElement("div");
        t.className = "entry init-msg", t.textContent = "Loading…", h.appendChild(t);
        try {
            await ge();
        } catch (s) {
            t.textContent = "Failed to load: " + (s instanceof Error ? s.message : String(s)), t.classList.add("error");
            return;
        }
        X(), h.removeChild(t), await Ke();
        const e = B();
        e.length > 0 ? await q(e[0].id) : (p = se(), x(), M()), $e(), document.getElementById("units-panel-btn").addEventListener("click", ()=>k("units-popup")), document.getElementById("units-popup-close").addEventListener("click", ()=>g("units-popup")), document.getElementById("units-popup-backdrop").addEventListener("click", ()=>g("units-popup")), document.getElementById("functions-panel-btn").addEventListener("click", ()=>k("functions-popup")), document.getElementById("functions-popup-close").addEventListener("click", ()=>g("functions-popup")), document.getElementById("functions-popup-backdrop").addEventListener("click", ()=>g("functions-popup")), document.getElementById("currencies-panel-btn").addEventListener("click", ()=>k("currencies-popup")), document.getElementById("currencies-popup-close").addEventListener("click", ()=>g("currencies-popup")), document.getElementById("currencies-popup-backdrop").addEventListener("click", ()=>g("currencies-popup")), document.getElementById("info-popup-close").addEventListener("click", Q), document.getElementById("info-popup-backdrop").addEventListener("click", Q), document.getElementById("vars-help-btn").addEventListener("click", ()=>{
            G("Variables", "Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.");
        }), document.getElementById("functions-help-btn").addEventListener("click", ()=>{
            G("Functions", "Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.");
        }), document.getElementById("currencies-help-btn").addEventListener("click", ()=>{
            G("Currencies", 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".');
        }), document.getElementById("units-help-btn").addEventListener("click", ()=>{
            G("Units", 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.');
        }), document.getElementById("confirm-popup-close").addEventListener("click", O), document.getElementById("confirm-popup-backdrop").addEventListener("click", O), document.getElementById("confirm-popup-cancel").addEventListener("click", O), document.getElementById("confirm-popup-ok").addEventListener("click", ()=>{
            const s = ie;
            O(), s && s();
        }), document.getElementById("clear-btn").addEventListener("click", ()=>{
            be("Clear session", "Clear all output and history for this session?", fe, "Clear");
        }), document.getElementById("reset-btn").addEventListener("click", ()=>{
            be("Reset", "Clear all output, variables, and functions, and start fresh?", pe, "Reset");
        }), document.addEventListener("keydown", (s)=>{
            if (s.key === "Escape" && (O(), Q(), g("units-popup"), g("functions-popup"), g("currencies-popup")), s.key === "Tab" && C.length > 0) {
                const i = C[C.length - 1];
                Ve(s, document.getElementById(i));
            }
        });
        const n = document.getElementById("variables");
        document.getElementById("mobile-vars-btn").addEventListener("click", ()=>{
            n.classList.add("mobile-open"), Ue.scrollTop = 0;
        }), document.getElementById("mobile-units-btn").addEventListener("click", ()=>{
            k("units-popup");
        }), document.getElementById("mobile-functions-btn").addEventListener("click", ()=>{
            k("functions-popup");
        }), document.getElementById("mobile-currencies-btn").addEventListener("click", ()=>{
            k("currencies-popup");
        }), document.getElementById("mobile-sidebar-close").addEventListener("click", ()=>{
            n.classList.remove("mobile-open");
        });
        const r = document.getElementById("app"), o = document.getElementById("sidebar-collapse-btn");
        o.addEventListener("click", ()=>{
            n.classList.toggle("collapsed"), r.classList.toggle("sidebar-collapsed");
            const s = n.classList.contains("collapsed");
            o.textContent = s ? "‹" : "›", o.title = s ? "Expand sidebar" : "Collapse sidebar", o.setAttribute("aria-label", s ? "Expand sidebar" : "Collapse sidebar");
        });
        function a(s) {
            const i = s.target.closest(".shortcut");
            i && A(i.dataset.insert ?? "");
        }
        document.getElementById("numpad").addEventListener("click", a), document.getElementById("shortcuts").addEventListener("click", a), document.getElementById("new-session-btn").addEventListener("click", ()=>Le()), N.addEventListener("change", ()=>{
            q(parseInt(N.value));
        }), m.addEventListener("keydown", (s)=>{
            const i = p.inputs;
            if (s.key === "ArrowUp") {
                if (i.length === 0) return;
                s.preventDefault(), _ === -1 && (H = m.value), _ = Math.min(_ + 1, i.length - 1), m.value = i[i.length - 1 - _], m.setSelectionRange(m.value.length, m.value.length);
            } else if (s.key === "ArrowDown") {
                if (_ === -1) return;
                s.preventDefault(), _--, m.value = _ === -1 ? H : i[i.length - 1 - _], m.setSelectionRange(m.value.length, m.value.length);
            } else _ = -1;
        }), document.getElementById("history-prev").addEventListener("click", ()=>{
            const s = p.inputs;
            s.length !== 0 && (_ === -1 && (H = m.value), _ = Math.min(_ + 1, s.length - 1), m.value = s[s.length - 1 - _], m.focus(), m.setSelectionRange(m.value.length, m.value.length));
        }), document.getElementById("history-next").addEventListener("click", ()=>{
            _ !== -1 && (_--, m.value = _ === -1 ? H : p.inputs[p.inputs.length - 1 - _], m.focus(), m.setSelectionRange(m.value.length, m.value.length));
        }), We.addEventListener("submit", (s)=>{
            s.preventDefault();
            const i = m.value.trim();
            if (!i) return;
            V();
            let l = "", u = !1;
            try {
                const f = T.try_run_command(i);
                if (f.is_command) {
                    if (f.should_reset) {
                        pe();
                        return;
                    }
                    if (f.should_clear) {
                        fe();
                        return;
                    }
                    l = f.output ?? "(command executed)", p.inputs.push(i), x();
                } else {
                    p.inputs.push(i), x();
                    const b = T.interpret(i);
                    if (l = b.output, u = b.is_error, !u) {
                        const d = i.match(ye);
                        d && (L.add(d[1]), K());
                        const y = i.match(he);
                        y && (I.set(y[1], y[2]), Z());
                    }
                }
            } catch (f) {
                l = Ee(f instanceof Error ? f.message : String(f)), u = !0;
            }
            ke(i, l, u), m.value = "";
        }), m.focus();
    }
    const R = document.getElementById("pwa-check-btn"), xe = document.getElementById("pwa-update-btn");
    let Ce = !1;
    const Xe = He({
        onNeedRefresh () {
            Ce = !0, R.hidden = !0, xe.hidden = !1;
        }
    });
    R.addEventListener("click", async ()=>{
        R.textContent = "Checking…", R.disabled = !0, await (await navigator.serviceWorker.getRegistration())?.update(), Ce || (R.textContent = "Check for update", R.disabled = !1);
    });
    xe.addEventListener("click", ()=>{
        Xe(!0);
    });
    Ze();
})();
