(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);
        new MutationObserver((o)=>{
            for (const r of o)if (r.type === "childList") for (const i of r.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
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
    const ge = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: ()=>{
            throw Error("TextDecoder not available");
        }
    };
    typeof TextDecoder < "u" && ge.decode();
    let F = null;
    function z() {
        return (F === null || F.byteLength === 0) && (F = new Uint8Array(c.memory.buffer)), F;
    }
    function U(t, e) {
        return t = t >>> 0, ge.decode(z().subarray(t, t + e));
    }
    function xe(t, e) {
        return t = t >>> 0, z().subarray(t / 1, t / 1 + e);
    }
    function Te(t) {
        const e = c.__externref_table_alloc();
        return c.__wbindgen_export_3.set(e, t), e;
    }
    function ce(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const s = Te(n);
            c.__wbindgen_exn_store(s);
        }
    }
    let v = 0;
    const $ = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
        encode: ()=>{
            throw Error("TextEncoder not available");
        }
    }, Se = typeof $.encodeInto == "function" ? function(t, e) {
        return $.encodeInto(t, e);
    } : function(t, e) {
        const n = $.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    };
    function k(t, e, n) {
        if (n === void 0) {
            const a = $.encode(t), l = e(a.length, 1) >>> 0;
            return z().subarray(l, l + a.length).set(a), v = a.length, l;
        }
        let s = t.length, o = e(s, 1) >>> 0;
        const r = z();
        let i = 0;
        for(; i < s; i++){
            const a = t.charCodeAt(i);
            if (a > 127) break;
            r[o + i] = a;
        }
        if (i !== s) {
            i !== 0 && (t = t.slice(i)), o = n(o, s, s = i + t.length * 3, 1) >>> 0;
            const a = z().subarray(o + i, o + s), l = Se(t, a);
            i += l.written, o = n(o, s, i, 1) >>> 0;
        }
        return v = i, o;
    }
    let T = null;
    function H() {
        return (T === null || T.buffer.detached === !0 || T.buffer.detached === void 0 && T.buffer !== c.memory.buffer) && (T = new DataView(c.memory.buffer)), T;
    }
    function Me(t) {
        return t == null;
    }
    function le(t, e) {
        t = t >>> 0;
        const n = H(), s = [];
        for(let o = t; o < t + 4 * e; o += 4)s.push(c.__wbindgen_export_3.get(n.getUint32(o, !0)));
        return c.__externref_drop_slice(t, e), s;
    }
    const Re = Object.freeze({
        JqueryTerminal: 0,
        0: "JqueryTerminal",
        Html: 1,
        1: "Html"
    }), me = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_commandresult_free(t >>> 0, 1));
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
            c.__wbg_commandresult_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const s = c.commandresult_output(this.__wbg_ptr);
                return e = s[0], n = s[1], U(s[0], s[1]);
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
    const ue = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_interpreteroutput_free(t >>> 0, 1));
    class se {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(se.prototype);
            return n.__wbg_ptr = e, ue.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, ue.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_interpreteroutput_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const s = c.interpreteroutput_output(this.__wbg_ptr);
                return e = s[0], n = s[1], U(s[0], s[1]);
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
    const de = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>c.__wbg_numbat_free(t >>> 0, 1));
    class J {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(J.prototype);
            return n.__wbg_ptr = e, de.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, de.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            c.__wbg_numbat_free(e, 0);
        }
        print_info(e) {
            const n = k(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v;
            return c.numbat_print_info(this.__wbg_ptr, n, s);
        }
        try_run_command(e) {
            const n = k(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_try_run_command(this.__wbg_ptr, n, s);
            return oe.__wrap(o);
        }
        set_exchange_rates(e) {
            const n = k(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v;
            c.numbat_set_exchange_rates(this.__wbg_ptr, n, s);
        }
        get_completions_for(e) {
            const n = k(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_get_completions_for(this.__wbg_ptr, n, s);
            var r = le(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), r;
        }
        get_unicode_completion(e) {
            const n = k(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_get_unicode_completion(this.__wbg_ptr, n, s);
            var r = le(o[0], o[1]).slice();
            return c.__wbindgen_free(o[0], o[1] * 4, 4), r;
        }
        static new(e, n, s) {
            const o = c.numbat_new(e, n, s);
            return J.__wrap(o);
        }
        help() {
            return c.numbat_help(this.__wbg_ptr);
        }
        interpret(e) {
            const n = k(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = v, o = c.numbat_interpret(this.__wbg_ptr, n, s);
            return se.__wrap(o);
        }
    }
    async function Ae(t, e) {
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
    function Ne() {
        const t = {};
        return t.wbg = {}, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
            let s, o;
            try {
                s = e, o = n, console.error(U(e, n));
            } finally{
                c.__wbindgen_free(s, o, 1);
            }
        }, t.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
            return ce(function(e, n) {
                globalThis.crypto.getRandomValues(xe(e, n));
            }, arguments);
        }, t.wbg.__wbg_getTime_46267b1c24877e30 = function(e) {
            return e.getTime();
        }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
            return ce(function(e, n) {
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
            const s = n.stack, o = k(s, c.__wbindgen_malloc, c.__wbindgen_realloc), r = v;
            H().setInt32(e + 4, r, !0), H().setInt32(e + 0, o, !0);
        }, t.wbg.__wbindgen_init_externref_table = function() {
            const e = c.__wbindgen_export_3, n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
        }, t.wbg.__wbindgen_number_new = function(e) {
            return e;
        }, t.wbg.__wbindgen_string_get = function(e, n) {
            const s = n, o = typeof s == "string" ? s : void 0;
            var r = Me(o) ? 0 : k(o, c.__wbindgen_malloc, c.__wbindgen_realloc), i = v;
            H().setInt32(e + 4, i, !0), H().setInt32(e + 0, r, !0);
        }, t.wbg.__wbindgen_string_new = function(e, n) {
            return U(e, n);
        }, t.wbg.__wbindgen_throw = function(e, n) {
            throw new Error(U(e, n));
        }, t;
    }
    function De(t, e) {
        return c = t.exports, ye.__wbindgen_wasm_module = e, T = null, F = null, c.__wbindgen_start(), c;
    }
    async function ye(t) {
        if (c !== void 0) return c;
        typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/assets/numbat_wasm_bg-BTss0vKK.wasm", import.meta.url));
        const e = Ne();
        (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
        const { instance: n, module: s } = await Ae(await t, e);
        return De(n, s);
    }
    const Pe = "modulepreload", Oe = function(t) {
        return "/" + t;
    }, pe = {}, Fe = function(e, n, s) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            let i = function(u) {
                return Promise.all(u.map((b)=>Promise.resolve(b).then((g)=>({
                            status: "fulfilled",
                            value: g
                        }), (g)=>({
                            status: "rejected",
                            reason: g
                        }))));
            };
            document.getElementsByTagName("link");
            const a = document.querySelector("meta[property=csp-nonce]"), l = a?.nonce || a?.getAttribute("nonce");
            o = i(n.map((u)=>{
                if (u = Oe(u), u in pe) return;
                pe[u] = !0;
                const b = u.endsWith(".css"), g = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${g}`)) return;
                const d = document.createElement("link");
                if (d.rel = b ? "stylesheet" : Pe, b || (d.as = "script"), d.crossOrigin = "", d.href = u, l && d.setAttribute("nonce", l), document.head.appendChild(d), b) return new Promise((_, E)=>{
                    d.addEventListener("load", _), d.addEventListener("error", ()=>E(new Error(`Unable to preload CSS for ${u}`)));
                });
            }));
        }
        function r(i) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i;
        }
        return o.then((i)=>{
            for (const a of i || [])a.status === "rejected" && r(a.reason);
            return e().catch(r);
        });
    };
    function He(t = {}) {
        const { immediate: e = !1, onNeedRefresh: n, onOfflineReady: s, onRegistered: o, onRegisteredSW: r, onRegisterError: i } = t;
        let a, l, u;
        const b = async (d = !0)=>{
            await l, u?.();
        };
        async function g() {
            if ("serviceWorker" in navigator) {
                if (a = await Fe(async ()=>{
                    const { Workbox: d } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: d
                    };
                }, []).then(({ Workbox: d })=>new d("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((d)=>{
                    i?.(d);
                }), !a) return;
                u = ()=>{
                    a?.messageSkipWaiting();
                };
                {
                    let d = !1;
                    const _ = ()=>{
                        d = !0, a?.addEventListener("controlling", (E)=>{
                            E.isUpdate && window.location.reload();
                        }), n?.();
                    };
                    a.addEventListener("installed", (E)=>{
                        typeof E.isUpdate > "u" ? typeof E.isExternal < "u" && E.isExternal ? _() : !d && s?.() : E.isUpdate || s?.();
                    }), a.addEventListener("waiting", _);
                }
                a.register({
                    immediate: e
                }).then((d)=>{
                    r ? r("/sw.js", d) : o?.(d);
                }).catch((d)=>{
                    i?.(d);
                });
            }
        }
        return l = g(), b;
    }
    function te() {
        const t = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${t}px`), window.scrollTo(0, 0);
    }
    te();
    window.visualViewport ? window.visualViewport.addEventListener("resize", te) : window.addEventListener("resize", te);
    const w = document.getElementById("output"), We = document.getElementById("form"), m = document.getElementById("input"), Y = document.getElementById("variables-list"), D = document.getElementById("tabs-scroll"), A = document.getElementById("session-select"), ze = document.getElementById("sidebar-middle"), _e = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/, he = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/, we = "calcite-sessions", Ue = 10, L = new Set, I = new Map;
    let S, q = null, p, y = -1, W = "";
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
        const s = n[0], o = n[n.length - 1];
        t.shiftKey ? document.activeElement === s && (t.preventDefault(), o.focus()) : document.activeElement === o && (t.preventDefault(), s.focus());
    }
    function ie(t, e) {
        t.setAttribute("role", "button"), t.tabIndex = 0, t.addEventListener("click", e), t.addEventListener("keydown", (n)=>{
            (n.key === "Enter" || n.key === " ") && (n.preventDefault(), e());
        });
    }
    function M(t) {
        const e = document.activeElement === m;
        m.setRangeText(t, m.selectionStart ?? m.value.length, m.selectionEnd ?? m.value.length, "end"), e && m.focus();
    }
    function j() {
        y = -1, W = "";
    }
    function ke(t, e, n) {
        const s = document.createElement("div");
        s.className = "entry" + (n ? " error" : "");
        const o = document.createElement("div");
        o.className = "query", o.textContent = t, o.title = "Re-use this expression", ie(o, ()=>M(t));
        const r = document.createElement("div");
        r.className = "result", r.innerHTML = e, s.appendChild(o), s.appendChild(r), w.appendChild(s), w.scrollTop = w.scrollHeight;
    }
    function K() {
        if (L.size === 0) {
            Y.innerHTML = '<p class="no-vars">No variables yet</p>';
            return;
        }
        Y.innerHTML = "";
        for (const t of L)try {
            const e = S.interpret(t);
            if (!e.is_error) {
                const n = document.createElement("div");
                n.className = "var-item", n.title = `Insert "${t}"`, ie(n, ()=>{
                    M(t), qe();
                });
                const s = document.createElement("span");
                s.className = "var-name", s.textContent = t;
                const o = document.createElement("span");
                o.className = "var-value", o.innerHTML = e.output, n.appendChild(s), n.appendChild(o), Y.appendChild(n);
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
            const s = document.createElement("div");
            s.className = "fn-item", s.title = `Insert "${e}("`, ie(s, ()=>{
                M(e + "("), f("functions-popup");
            });
            const o = document.createElement("span");
            o.className = "fn-name", o.textContent = e;
            const r = document.createElement("span");
            r.className = "fn-params", r.textContent = n, s.appendChild(o), s.appendChild(r), t.appendChild(s);
        }
    }
    function x() {
        try {
            return JSON.parse(localStorage.getItem(we) ?? "[]");
        } catch  {
            return [];
        }
    }
    function G(t) {
        localStorage.setItem(we, JSON.stringify(t));
    }
    function re() {
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
    function C() {
        const t = x(), e = t.findIndex((o)=>o.id === p.id);
        e >= 0 ? t[e] = p : t.unshift(p);
        let n = 0;
        const s = t.filter((o)=>o.named ? !0 : (n++, n <= Ue));
        G(s);
    }
    function N() {
        const e = [
            ...x()
        ].reverse();
        D.innerHTML = "", D.setAttribute("role", "tablist"), D.setAttribute("aria-label", "Sessions");
        for (const i of e){
            const a = i.id === p.id, l = document.createElement("div");
            l.className = "tab" + (a ? " active" : "") + (i.named ? " named" : ""), l.setAttribute("role", "tab"), l.setAttribute("aria-selected", a ? "true" : "false"), l.setAttribute("aria-controls", "output");
            const u = document.createElement("span");
            u.className = "tab-label", u.textContent = i.label, a || (u.tabIndex = 0, u.addEventListener("click", ()=>V(i.id)), u.addEventListener("keydown", (g)=>{
                (g.key === "Enter" || g.key === " ") && (g.preventDefault(), V(i.id));
            })), u.addEventListener("dblclick", (g)=>{
                g.stopPropagation(), je(i, u);
            }), l.appendChild(u);
            const b = document.createElement("button");
            b.className = "tab-close", b.textContent = "×", b.title = "Close session", b.addEventListener("click", (g)=>{
                g.stopPropagation();
                const _ = x().filter((E)=>E.id !== i.id);
                G(_), a ? (p.inputs = [], _.length > 0 ? V(_[0].id) : Le()) : N();
            }), l.appendChild(b), D.appendChild(l);
        }
        const n = D.querySelector(".tab.active");
        n && n.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }), A.innerHTML = "";
        const s = e.filter((i)=>i.named), o = e.filter((i)=>!i.named);
        function r(i, a) {
            const l = document.createElement("option");
            l.value = String(i.id), l.textContent = i.label, l.selected = i.id === p.id, a.appendChild(l);
        }
        if (s.length > 0 && o.length > 0) {
            const i = document.createElement("optgroup");
            i.label = "Saved", s.forEach((l)=>r(l, i)), A.appendChild(i);
            const a = document.createElement("optgroup");
            a.label = "Recent", o.forEach((l)=>r(l, a)), A.appendChild(a);
        } else e.forEach((i)=>r(i, A));
    }
    function je(t, e) {
        const n = document.createElement("input");
        n.type = "text", n.className = "tab-rename-input", n.value = t.label, e.replaceWith(n), n.focus(), n.select();
        function s() {
            const o = n.value.trim();
            if (o && o !== t.label) {
                t.label = o, t.named = !0, t.id === p.id && (p = t);
                const r = x(), i = r.findIndex((a)=>a.id === t.id);
                i >= 0 && (r[i] = t, G(r));
            }
            N();
        }
        n.addEventListener("blur", s), n.addEventListener("keydown", (o)=>{
            o.key === "Enter" && (o.preventDefault(), n.blur()), o.key === "Escape" && (n.value = t.label, n.blur());
        });
    }
    function Le() {
        p && (p.inputs.length === 0 ? G(x().filter((t)=>t.id !== p.id)) : C()), X(), L.clear(), I.clear(), w.innerHTML = "", K(), Z(), p = re(), C(), N(), j(), m.value = "", m.focus();
    }
    async function V(t) {
        const n = x().find((s)=>s.id === t);
        if (n) {
            p && (p.inputs.length === 0 ? G(x().filter((s)=>s.id !== p.id)) : C()), X(), L.clear(), I.clear(), w.innerHTML = "", p = n, j(), N();
            for (const s of n.inputs){
                let o = "", r = !1;
                try {
                    const i = S.try_run_command(s);
                    if (i.is_command) i.should_reset ? (w.innerHTML = "", L.clear(), I.clear()) : i.should_clear ? w.innerHTML = "" : o = i.output ?? "(command executed)";
                    else {
                        const a = S.interpret(s);
                        if (o = a.output, r = a.is_error, !r) {
                            const l = s.match(_e);
                            l && L.add(l[1]);
                            const u = s.match(he);
                            u && I.set(u[1], u[2]);
                        }
                    }
                } catch (i) {
                    o = Ee(i instanceof Error ? i.message : String(i)), r = !0;
                }
                o && ke(s, o, r);
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
            const s = document.createElement("h4");
            s.textContent = e.name, n.appendChild(s);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const r of e.units){
                const i = document.createElement("button");
                i.type = "button", i.className = "unit-chip", i.textContent = r.symbol, i.title = r.name, i.addEventListener("click", ()=>{
                    M(r.symbol), f("units-popup");
                }), o.appendChild(i);
            }
            n.appendChild(o), t.appendChild(n);
        }
    }
    const Je = [
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
    function Ke() {
        const t = document.getElementById("dimensions-section-body");
        for (const e of Je){
            const n = document.createElement("div");
            n.className = "unit-category";
            const s = document.createElement("h4");
            s.textContent = e.name, n.appendChild(s);
            const o = document.createElement("div");
            o.className = "unit-chips";
            for (const r of e.dimensions){
                const i = document.createElement("button");
                i.type = "button", i.className = "unit-chip", i.textContent = r, i.addEventListener("click", ()=>{
                    M(r), f("dimensions-popup");
                }), o.appendChild(i);
            }
            n.appendChild(o), t.appendChild(n);
        }
    }
    function Ie() {
        if (!q) return;
        const t = [
            ...q.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)
        ];
        for (const [, e, n] of t)S.interpret(`unit ${e} : Money = (1 / ${n}) EUR`);
    }
    function X() {
        S = J.new(!0, !0, Re.Html), Ie();
    }
    function Ze(t) {
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
            r.type = "button", r.className = "unit-chip", r.textContent = o, r.addEventListener("click", ()=>{
                M(o), f("currencies-popup");
            }), s.appendChild(r);
        }
        e.appendChild(s);
    }
    async function Xe() {
        const t = document.getElementById("currencies-status");
        t.textContent = "Loading…", t.className = "currencies-loading";
        try {
            const e = await fetch("/ecb-rates.xml");
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            q = await e.text(), Ie();
            const n = q.match(/time='(\d{4}-\d{2}-\d{2})'/), s = n ? new Date(n[1]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "unknown date";
            t.textContent = `Rates · ${s}`, t.className = "", Ze(q);
        } catch  {
            t.textContent = "Unavailable", t.className = "currencies-error";
        }
    }
    function be() {
        X(), w.innerHTML = "", L.clear(), I.clear(), K(), Z(), p = re(), C(), N(), m.value = "", j();
    }
    function fe() {
        w.innerHTML = "", p.inputs = [], C(), m.value = "", j();
    }
    let ne = null;
    const B = [];
    function h(t) {
        B.length === 0 && (ne = document.activeElement), B.push(t);
        const e = document.getElementById(t);
        e.classList.add("visible"), document.getElementById(t + "-backdrop").classList.add("visible"), e.querySelector(ve)?.focus();
    }
    function f(t) {
        document.getElementById(t).classList.remove("visible"), document.getElementById(t + "-backdrop").classList.remove("visible");
        const e = B.lastIndexOf(t);
        e >= 0 && B.splice(e, 1), B.length === 0 && (ne?.focus(), ne = null);
    }
    let ae = null;
    function Q(t, e, n, s = "Confirm") {
        document.getElementById("confirm-popup-title").textContent = t, document.getElementById("confirm-popup-message").textContent = e, document.getElementById("confirm-popup-ok").textContent = s, ae = n, h("confirm-popup");
    }
    function P() {
        f("confirm-popup"), ae = null;
    }
    function O(t, e) {
        document.getElementById("info-popup-title").textContent = t, document.getElementById("info-popup-message").textContent = e, h("info-popup");
    }
    function ee() {
        f("info-popup");
    }
    async function Ye() {
        const t = document.createElement("div");
        t.className = "entry init-msg", t.textContent = "Loading…", w.appendChild(t);
        try {
            await ye();
        } catch (i) {
            t.textContent = "Failed to load: " + (i instanceof Error ? i.message : String(i)), t.classList.add("error");
            return;
        }
        X(), w.removeChild(t), await Xe();
        const e = x();
        e.length > 0 ? await V(e[0].id) : (p = re(), C(), N()), $e(), document.getElementById("units-panel-btn").addEventListener("click", ()=>h("units-popup")), document.getElementById("units-popup-close").addEventListener("click", ()=>f("units-popup")), document.getElementById("units-popup-backdrop").addEventListener("click", ()=>f("units-popup")), Ke(), document.getElementById("dimensions-panel-btn").addEventListener("click", ()=>h("dimensions-popup")), document.getElementById("dimensions-popup-close").addEventListener("click", ()=>f("dimensions-popup")), document.getElementById("dimensions-popup-backdrop").addEventListener("click", ()=>f("dimensions-popup")), document.getElementById("functions-panel-btn").addEventListener("click", ()=>h("functions-popup")), document.getElementById("functions-popup-close").addEventListener("click", ()=>f("functions-popup")), document.getElementById("functions-popup-backdrop").addEventListener("click", ()=>f("functions-popup")), document.getElementById("currencies-panel-btn").addEventListener("click", ()=>h("currencies-popup")), document.getElementById("currencies-popup-close").addEventListener("click", ()=>f("currencies-popup")), document.getElementById("currencies-popup-backdrop").addEventListener("click", ()=>f("currencies-popup")), document.getElementById("info-popup-close").addEventListener("click", ee), document.getElementById("info-popup-backdrop").addEventListener("click", ee), document.getElementById("vars-help-btn").addEventListener("click", ()=>{
            O("Variables", "Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.");
        }), document.getElementById("functions-help-btn").addEventListener("click", ()=>{
            O("Functions", "Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.");
        }), document.getElementById("currencies-help-btn").addEventListener("click", ()=>{
            O("Currencies", 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".');
        }), document.getElementById("units-help-btn").addEventListener("click", ()=>{
            O("Units", 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.');
        }), document.getElementById("dimensions-help-btn").addEventListener("click", ()=>{
            O("Dimensions", 'Dimensions are physical quantity types used in type annotations — for example "let x: Length = 5 m" or "fn speed(d: Length, t: Time) -> Velocity = d / t". Tap a dimension to insert it at the cursor.');
        }), document.getElementById("confirm-popup-close").addEventListener("click", P), document.getElementById("confirm-popup-backdrop").addEventListener("click", P), document.getElementById("confirm-popup-cancel").addEventListener("click", P), document.getElementById("confirm-popup-ok").addEventListener("click", ()=>{
            const i = ae;
            P(), i && i();
        }), document.getElementById("about-btn").addEventListener("click", ()=>h("about-popup")), document.getElementById("about-popup-close").addEventListener("click", ()=>f("about-popup")), document.getElementById("about-popup-backdrop").addEventListener("click", ()=>f("about-popup")), document.getElementById("about-reset-btn").addEventListener("click", ()=>{
            Q("Reset app data", "This will erase all sessions, variables, and cached data. The app will reload.", et, "Reset");
        }), document.getElementById("clear-btn").addEventListener("click", ()=>{
            Q("Clear session", "Clear all output and history for this session?", fe, "Clear");
        }), document.getElementById("reset-btn").addEventListener("click", ()=>{
            Q("Reset", "Clear all output, variables, and functions, and start fresh?", be, "Reset");
        }), document.addEventListener("keydown", (i)=>{
            if (i.key === "Escape" && (P(), ee(), f("about-popup"), f("units-popup"), f("dimensions-popup"), f("functions-popup"), f("currencies-popup")), i.key === "Tab" && B.length > 0) {
                const a = B[B.length - 1];
                Ve(i, document.getElementById(a));
            }
        });
        const n = document.getElementById("variables");
        document.getElementById("mobile-vars-btn").addEventListener("click", ()=>{
            n.classList.add("mobile-open"), ze.scrollTop = 0;
        }), document.getElementById("mobile-units-btn").addEventListener("click", ()=>{
            h("units-popup");
        }), document.getElementById("mobile-dimensions-btn").addEventListener("click", ()=>{
            h("dimensions-popup");
        }), document.getElementById("mobile-functions-btn").addEventListener("click", ()=>{
            h("functions-popup");
        }), document.getElementById("mobile-currencies-btn").addEventListener("click", ()=>{
            h("currencies-popup");
        }), document.getElementById("mobile-sidebar-close").addEventListener("click", ()=>{
            n.classList.remove("mobile-open");
        });
        const s = document.getElementById("app"), o = document.getElementById("sidebar-collapse-btn");
        o.addEventListener("click", ()=>{
            n.classList.toggle("collapsed"), s.classList.toggle("sidebar-collapsed");
            const i = n.classList.contains("collapsed");
            o.textContent = i ? "‹" : "›", o.title = i ? "Expand sidebar" : "Collapse sidebar", o.setAttribute("aria-label", i ? "Expand sidebar" : "Collapse sidebar");
        });
        function r(i) {
            const a = i.target.closest(".shortcut");
            a && M(a.dataset.insert ?? "");
        }
        document.getElementById("numpad").addEventListener("click", r), document.getElementById("shortcuts").addEventListener("click", r), document.getElementById("new-session-btn").addEventListener("click", ()=>Le()), A.addEventListener("change", ()=>{
            V(parseInt(A.value));
        }), m.addEventListener("keydown", (i)=>{
            const a = p.inputs;
            if (i.key === "ArrowUp") {
                if (a.length === 0) return;
                i.preventDefault(), y === -1 && (W = m.value), y = Math.min(y + 1, a.length - 1), m.value = a[a.length - 1 - y], m.setSelectionRange(m.value.length, m.value.length);
            } else if (i.key === "ArrowDown") {
                if (y === -1) return;
                i.preventDefault(), y--, m.value = y === -1 ? W : a[a.length - 1 - y], m.setSelectionRange(m.value.length, m.value.length);
            } else y = -1;
        }), document.getElementById("history-prev").addEventListener("click", ()=>{
            const i = p.inputs;
            i.length !== 0 && (y === -1 && (W = m.value), y = Math.min(y + 1, i.length - 1), m.value = i[i.length - 1 - y], m.focus(), m.setSelectionRange(m.value.length, m.value.length));
        }), document.getElementById("history-next").addEventListener("click", ()=>{
            y !== -1 && (y--, m.value = y === -1 ? W : p.inputs[p.inputs.length - 1 - y], m.focus(), m.setSelectionRange(m.value.length, m.value.length));
        }), We.addEventListener("submit", (i)=>{
            i.preventDefault();
            const a = m.value.trim();
            if (!a) return;
            j();
            let l = "", u = !1;
            try {
                const b = S.try_run_command(a);
                if (b.is_command) {
                    if (b.should_reset) {
                        be();
                        return;
                    }
                    if (b.should_clear) {
                        fe();
                        return;
                    }
                    l = b.output ?? "(command executed)", p.inputs.push(a), C();
                } else {
                    p.inputs.push(a), C();
                    const g = S.interpret(a);
                    if (l = g.output, u = g.is_error, !u) {
                        const d = a.match(_e);
                        d && (L.add(d[1]), K());
                        const _ = a.match(he);
                        _ && (I.set(_[1], _[2]), Z());
                    }
                }
            } catch (b) {
                l = Ee(b instanceof Error ? b.message : String(b)), u = !0;
            }
            ke(a, l, u), m.value = "";
        }), m.focus();
    }
    const R = document.getElementById("about-check-btn"), Ce = document.getElementById("about-update-btn");
    document.getElementById("about-version").textContent = "0.2.0";
    let Be = !1;
    const Qe = He({
        onNeedRefresh () {
            Be = !0, R.hidden = !0, Ce.hidden = !1;
        }
    });
    R.addEventListener("click", async ()=>{
        R.textContent = "Checking…", R.disabled = !0, await (await navigator.serviceWorker.getRegistration())?.update(), Be || (R.textContent = "Check for update", R.disabled = !1);
    });
    Ce.addEventListener("click", ()=>{
        Qe(!0);
    });
    function et() {
        (async ()=>{
            localStorage.clear();
            const t = await navigator.serviceWorker.getRegistrations();
            await Promise.all(t.map((n)=>n.unregister()));
            const e = await caches.keys();
            await Promise.all(e.map((n)=>caches.delete(n))), location.reload();
        })();
    }
    Ye();
})();
