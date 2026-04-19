(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);
        new MutationObserver((r)=>{
            for (const i of r)if (i.type === "childList") for (const s of i.addedNodes)s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(r) {
            const i = {};
            return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function o(r) {
            if (r.ep) return;
            r.ep = !0;
            const i = n(r);
            fetch(r.href, i);
        }
    })();
    let a;
    const fe = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: ()=>{
            throw Error("TextDecoder not available");
        }
    };
    typeof TextDecoder < "u" && fe.decode();
    let P = null;
    function W() {
        return (P === null || P.byteLength === 0) && (P = new Uint8Array(a.memory.buffer)), P;
    }
    function O(t, e) {
        return t = t >>> 0, fe.decode(W().subarray(t, t + e));
    }
    function Ie(t, e) {
        return t = t >>> 0, W().subarray(t / 1, t / 1 + e);
    }
    function Ce(t) {
        const e = a.__externref_table_alloc();
        return a.__wbindgen_export_3.set(e, t), e;
    }
    function se(t, e) {
        try {
            return t.apply(this, e);
        } catch (n) {
            const o = Ce(n);
            a.__wbindgen_exn_store(o);
        }
    }
    let w = 0;
    const V = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
        encode: ()=>{
            throw Error("TextEncoder not available");
        }
    }, Be = typeof V.encodeInto == "function" ? function(t, e) {
        return V.encodeInto(t, e);
    } : function(t, e) {
        const n = V.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    };
    function v(t, e, n) {
        if (n === void 0) {
            const c = V.encode(t), m = e(c.length, 1) >>> 0;
            return W().subarray(m, m + c.length).set(c), w = c.length, m;
        }
        let o = t.length, r = e(o, 1) >>> 0;
        const i = W();
        let s = 0;
        for(; s < o; s++){
            const c = t.charCodeAt(s);
            if (c > 127) break;
            i[r + s] = c;
        }
        if (s !== o) {
            s !== 0 && (t = t.slice(s)), r = n(r, o, o = s + t.length * 3, 1) >>> 0;
            const c = W().subarray(r + s, r + o), m = Be(t, c);
            s += m.written, r = n(r, o, s, 1) >>> 0;
        }
        return w = s, r;
    }
    let x = null;
    function z() {
        return (x === null || x.buffer.detached === !0 || x.buffer.detached === void 0 && x.buffer !== a.memory.buffer) && (x = new DataView(a.memory.buffer)), x;
    }
    function xe(t) {
        return t == null;
    }
    function ie(t, e) {
        t = t >>> 0;
        const n = z(), o = [];
        for(let r = t; r < t + 4 * e; r += 4)o.push(a.__wbindgen_export_3.get(n.getUint32(r, !0)));
        return a.__externref_drop_slice(t, e), o;
    }
    const Te = Object.freeze({
        JqueryTerminal: 0,
        0: "JqueryTerminal",
        Html: 1,
        1: "Html"
    }), ae = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>a.__wbg_commandresult_free(t >>> 0, 1));
    class te {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(te.prototype);
            return n.__wbg_ptr = e, ae.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, ae.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            a.__wbg_commandresult_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const o = a.commandresult_output(this.__wbg_ptr);
                return e = o[0], n = o[1], O(o[0], o[1]);
            } finally{
                a.__wbindgen_free(e, n, 1);
            }
        }
        get is_command() {
            return a.__wbg_get_commandresult_is_command(this.__wbg_ptr) !== 0;
        }
        set is_command(e) {
            a.__wbg_set_commandresult_is_command(this.__wbg_ptr, e);
        }
        get should_clear() {
            return a.__wbg_get_commandresult_should_clear(this.__wbg_ptr) !== 0;
        }
        set should_clear(e) {
            a.__wbg_set_commandresult_should_clear(this.__wbg_ptr, e);
        }
        get should_reset() {
            return a.__wbg_get_commandresult_should_reset(this.__wbg_ptr) !== 0;
        }
        set should_reset(e) {
            a.__wbg_set_commandresult_should_reset(this.__wbg_ptr, e);
        }
    }
    const ce = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>a.__wbg_interpreteroutput_free(t >>> 0, 1));
    class ne {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(ne.prototype);
            return n.__wbg_ptr = e, ce.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, ce.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            a.__wbg_interpreteroutput_free(e, 0);
        }
        get output() {
            let e, n;
            try {
                const o = a.interpreteroutput_output(this.__wbg_ptr);
                return e = o[0], n = o[1], O(o[0], o[1]);
            } finally{
                a.__wbindgen_free(e, n, 1);
            }
        }
        get is_error() {
            return a.__wbg_get_commandresult_is_command(this.__wbg_ptr) !== 0;
        }
        set is_error(e) {
            a.__wbg_set_commandresult_is_command(this.__wbg_ptr, e);
        }
    }
    const le = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>a.__wbg_numbat_free(t >>> 0, 1));
    class j {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(j.prototype);
            return n.__wbg_ptr = e, le.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, le.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            a.__wbg_numbat_free(e, 0);
        }
        print_info(e) {
            const n = v(e, a.__wbindgen_malloc, a.__wbindgen_realloc), o = w;
            return a.numbat_print_info(this.__wbg_ptr, n, o);
        }
        try_run_command(e) {
            const n = v(e, a.__wbindgen_malloc, a.__wbindgen_realloc), o = w, r = a.numbat_try_run_command(this.__wbg_ptr, n, o);
            return te.__wrap(r);
        }
        set_exchange_rates(e) {
            const n = v(e, a.__wbindgen_malloc, a.__wbindgen_realloc), o = w;
            a.numbat_set_exchange_rates(this.__wbg_ptr, n, o);
        }
        get_completions_for(e) {
            const n = v(e, a.__wbindgen_malloc, a.__wbindgen_realloc), o = w, r = a.numbat_get_completions_for(this.__wbg_ptr, n, o);
            var i = ie(r[0], r[1]).slice();
            return a.__wbindgen_free(r[0], r[1] * 4, 4), i;
        }
        get_unicode_completion(e) {
            const n = v(e, a.__wbindgen_malloc, a.__wbindgen_realloc), o = w, r = a.numbat_get_unicode_completion(this.__wbg_ptr, n, o);
            var i = ie(r[0], r[1]).slice();
            return a.__wbindgen_free(r[0], r[1] * 4, 4), i;
        }
        static new(e, n, o) {
            const r = a.numbat_new(e, n, o);
            return j.__wrap(r);
        }
        help() {
            return a.numbat_help(this.__wbg_ptr);
        }
        interpret(e) {
            const n = v(e, a.__wbindgen_malloc, a.__wbindgen_realloc), o = w, r = a.numbat_interpret(this.__wbg_ptr, n, o);
            return ne.__wrap(r);
        }
    }
    async function Se(t, e) {
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
    function Re() {
        const t = {};
        return t.wbg = {}, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
            let o, r;
            try {
                o = e, r = n, console.error(O(e, n));
            } finally{
                a.__wbindgen_free(o, r, 1);
            }
        }, t.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
            return se(function(e, n) {
                globalThis.crypto.getRandomValues(Ie(e, n));
            }, arguments);
        }, t.wbg.__wbg_getTime_46267b1c24877e30 = function(e) {
            return e.getTime();
        }, t.wbg.__wbg_get_67b2ba62fc30de12 = function() {
            return se(function(e, n) {
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
            const o = n.stack, r = v(o, a.__wbindgen_malloc, a.__wbindgen_realloc), i = w;
            z().setInt32(e + 4, i, !0), z().setInt32(e + 0, r, !0);
        }, t.wbg.__wbindgen_init_externref_table = function() {
            const e = a.__wbindgen_export_3, n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
        }, t.wbg.__wbindgen_number_new = function(e) {
            return e;
        }, t.wbg.__wbindgen_string_get = function(e, n) {
            const o = n, r = typeof o == "string" ? o : void 0;
            var i = xe(r) ? 0 : v(r, a.__wbindgen_malloc, a.__wbindgen_realloc), s = w;
            z().setInt32(e + 4, s, !0), z().setInt32(e + 0, i, !0);
        }, t.wbg.__wbindgen_string_new = function(e, n) {
            return O(e, n);
        }, t.wbg.__wbindgen_throw = function(e, n) {
            throw new Error(O(e, n));
        }, t;
    }
    function Ne(t, e) {
        return a = t.exports, be.__wbindgen_wasm_module = e, x = null, P = null, a.__wbindgen_start(), a;
    }
    async function be(t) {
        if (a !== void 0) return a;
        typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/assets/numbat_wasm_bg-BTss0vKK.wasm", import.meta.url));
        const e = Re();
        (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
        const { instance: n, module: o } = await Se(await t, e);
        return Ne(n, o);
    }
    const Me = "modulepreload", Ae = function(t) {
        return "/" + t;
    }, me = {}, Pe = function(e, n, o) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
            let s = function(u) {
                return Promise.all(u.map((b)=>Promise.resolve(b).then((_)=>({
                            status: "fulfilled",
                            value: _
                        }), (_)=>({
                            status: "rejected",
                            reason: _
                        }))));
            };
            document.getElementsByTagName("link");
            const c = document.querySelector("meta[property=csp-nonce]"), m = c?.nonce || c?.getAttribute("nonce");
            r = s(n.map((u)=>{
                if (u = Ae(u), u in me) return;
                me[u] = !0;
                const b = u.endsWith(".css"), _ = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${_}`)) return;
                const d = document.createElement("link");
                if (d.rel = b ? "stylesheet" : Me, b || (d.as = "script"), d.crossOrigin = "", d.href = u, m && d.setAttribute("nonce", m), document.head.appendChild(d), b) return new Promise((E, h)=>{
                    d.addEventListener("load", E), d.addEventListener("error", ()=>h(new Error(`Unable to preload CSS for ${u}`)));
                });
            }));
        }
        function i(s) {
            const c = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (c.payload = s, window.dispatchEvent(c), !c.defaultPrevented) throw s;
        }
        return r.then((s)=>{
            for (const c of s || [])c.status === "rejected" && i(c.reason);
            return e().catch(i);
        });
    };
    function ze(t = {}) {
        const { immediate: e = !1, onNeedRefresh: n, onOfflineReady: o, onRegistered: r, onRegisteredSW: i, onRegisterError: s } = t;
        let c, m, u;
        const b = async (d = !0)=>{
            await m, u?.();
        };
        async function _() {
            if ("serviceWorker" in navigator) {
                if (c = await Pe(async ()=>{
                    const { Workbox: d } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
                    return {
                        Workbox: d
                    };
                }, []).then(({ Workbox: d })=>new d("/sw.js", {
                        scope: "/",
                        type: "classic"
                    })).catch((d)=>{
                    s?.(d);
                }), !c) return;
                u = ()=>{
                    c?.messageSkipWaiting();
                };
                {
                    let d = !1;
                    const E = ()=>{
                        d = !0, c?.addEventListener("controlling", (h)=>{
                            h.isUpdate && window.location.reload();
                        }), n?.();
                    };
                    c.addEventListener("installed", (h)=>{
                        typeof h.isUpdate > "u" ? typeof h.isExternal < "u" && h.isExternal ? E() : !d && o?.() : h.isUpdate || o?.();
                    }), c.addEventListener("waiting", E);
                }
                c.register({
                    immediate: e
                }).then((d)=>{
                    i ? i("/sw.js", d) : r?.(d);
                }).catch((d)=>{
                    s?.(d);
                });
            }
        }
        return m = _(), b;
    }
    function Q() {
        const t = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${t}px`), window.scrollTo(0, 0);
    }
    Q();
    window.visualViewport ? window.visualViewport.addEventListener("resize", Q) : window.addEventListener("resize", Q);
    const y = document.getElementById("output"), He = document.getElementById("form"), l = document.getElementById("input"), Z = document.getElementById("variables-list"), X = document.getElementById("tabs-scroll"), R = document.getElementById("session-select"), We = document.getElementById("sidebar-middle"), _e = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/, ge = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/, ye = "calcite-sessions", Oe = 10, L = new Set, I = new Map;
    let T, F = null, p, f = -1, H = "";
    function he(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function Fe() {
        document.getElementById("variables").classList.remove("mobile-open");
    }
    function N(t) {
        const e = document.activeElement === l;
        l.setRangeText(t, l.selectionStart ?? l.value.length, l.selectionEnd ?? l.value.length, "end"), e && l.focus();
    }
    function U() {
        f = -1, H = "";
    }
    function we(t, e, n) {
        const o = document.createElement("div");
        o.className = "entry" + (n ? " error" : "");
        const r = document.createElement("div");
        r.className = "query", r.textContent = t, r.title = "Re-use this expression", r.addEventListener("click", ()=>{
            N(t);
        });
        const i = document.createElement("div");
        i.className = "result", i.innerHTML = e, o.appendChild(r), o.appendChild(i), y.appendChild(o), y.scrollTop = y.scrollHeight;
    }
    function $() {
        if (L.size === 0) {
            Z.innerHTML = '<p class="no-vars">No variables yet</p>';
            return;
        }
        Z.innerHTML = "";
        for (const t of L)try {
            const e = T.interpret(t);
            if (!e.is_error) {
                const n = document.createElement("div");
                n.className = "var-item", n.title = `Insert "${t}"`, n.addEventListener("click", ()=>{
                    N(t), Fe();
                });
                const o = document.createElement("span");
                o.className = "var-name", o.textContent = t;
                const r = document.createElement("span");
                r.className = "var-value", r.innerHTML = e.output, n.appendChild(o), n.appendChild(r), Z.appendChild(n);
            }
        } catch  {}
    }
    function J() {
        const t = document.getElementById("functions-list");
        if (I.size === 0) {
            t.innerHTML = '<p class="no-vars">No functions yet</p>';
            return;
        }
        t.innerHTML = "";
        for (const [e, n] of I){
            const o = document.createElement("div");
            o.className = "fn-item", o.title = `Insert "${e}("`, o.addEventListener("click", ()=>{
                N(e + "("), g("functions-popup");
            });
            const r = document.createElement("span");
            r.className = "fn-name", r.textContent = e;
            const i = document.createElement("span");
            i.className = "fn-params", i.textContent = n, o.appendChild(r), o.appendChild(i), t.appendChild(o);
        }
    }
    function B() {
        try {
            return JSON.parse(localStorage.getItem(ye) ?? "[]");
        } catch  {
            return [];
        }
    }
    function D(t) {
        localStorage.setItem(ye, JSON.stringify(t));
    }
    function oe() {
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
        const t = B(), e = t.findIndex((r)=>r.id === p.id);
        e >= 0 ? t[e] = p : t.unshift(p);
        let n = 0;
        const o = t.filter((r)=>r.named ? !0 : (n++, n <= Oe));
        D(o);
    }
    function M() {
        const e = [
            ...B()
        ].reverse();
        X.innerHTML = "";
        for (const s of e){
            const c = s.id === p.id, m = document.createElement("div");
            m.className = "tab" + (c ? " active" : "") + (s.named ? " named" : "");
            const u = document.createElement("span");
            u.className = "tab-label", u.textContent = s.label, c || u.addEventListener("click", ()=>G(s.id)), u.addEventListener("dblclick", (_)=>{
                _.stopPropagation(), Ue(s, u);
            }), m.appendChild(u);
            const b = document.createElement("button");
            b.className = "tab-close", b.textContent = "×", b.title = "Close session", b.addEventListener("click", (_)=>{
                _.stopPropagation();
                const E = B().filter((h)=>h.id !== s.id);
                D(E), c ? (p.inputs = [], E.length > 0 ? G(E[0].id) : Ee()) : M();
            }), m.appendChild(b), X.appendChild(m);
        }
        const n = X.querySelector(".tab.active");
        n && n.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        }), R.innerHTML = "";
        const o = e.filter((s)=>s.named), r = e.filter((s)=>!s.named);
        function i(s, c) {
            const m = document.createElement("option");
            m.value = String(s.id), m.textContent = s.label, m.selected = s.id === p.id, c.appendChild(m);
        }
        if (o.length > 0 && r.length > 0) {
            const s = document.createElement("optgroup");
            s.label = "Saved", o.forEach((m)=>i(m, s)), R.appendChild(s);
            const c = document.createElement("optgroup");
            c.label = "Recent", r.forEach((m)=>i(m, c)), R.appendChild(c);
        } else e.forEach((s)=>i(s, R));
    }
    function Ue(t, e) {
        const n = document.createElement("input");
        n.type = "text", n.className = "tab-rename-input", n.value = t.label, e.replaceWith(n), n.focus(), n.select();
        function o() {
            const r = n.value.trim();
            if (r && r !== t.label) {
                t.label = r, t.named = !0, t.id === p.id && (p = t);
                const i = B(), s = i.findIndex((c)=>c.id === t.id);
                s >= 0 && (i[s] = t, D(i));
            }
            M();
        }
        n.addEventListener("blur", o), n.addEventListener("keydown", (r)=>{
            r.key === "Enter" && (r.preventDefault(), n.blur()), r.key === "Escape" && (n.value = t.label, n.blur());
        });
    }
    function Ee() {
        p && (p.inputs.length === 0 ? D(B().filter((t)=>t.id !== p.id)) : C()), K(), L.clear(), I.clear(), y.innerHTML = "", $(), J(), p = oe(), C(), M(), U(), l.value = "", l.focus();
    }
    async function G(t) {
        const n = B().find((o)=>o.id === t);
        if (n) {
            p && (p.inputs.length === 0 ? D(B().filter((o)=>o.id !== p.id)) : C()), K(), L.clear(), I.clear(), y.innerHTML = "", p = n, U(), M();
            for (const o of n.inputs){
                let r = "", i = !1;
                try {
                    const s = T.try_run_command(o);
                    if (s.is_command) s.should_reset ? (y.innerHTML = "", L.clear(), I.clear()) : s.should_clear ? y.innerHTML = "" : r = s.output ?? "(command executed)";
                    else {
                        const c = T.interpret(o);
                        if (r = c.output, i = c.is_error, !i) {
                            const m = o.match(_e);
                            m && L.add(m[1]);
                            const u = o.match(ge);
                            u && I.set(u[1], u[2]);
                        }
                    }
                } catch (s) {
                    r = he(s instanceof Error ? s.message : String(s)), i = !0;
                }
                r && we(o, r, i);
            }
            $(), J(), l.focus();
        }
    }
    const De = [
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
    function qe() {
        const t = document.getElementById("units-section-body");
        for (const e of De){
            const n = document.createElement("div");
            n.className = "unit-category";
            const o = document.createElement("h4");
            o.textContent = e.name, n.appendChild(o);
            const r = document.createElement("div");
            r.className = "unit-chips";
            for (const i of e.units){
                const s = document.createElement("button");
                s.type = "button", s.className = "unit-chip", s.textContent = i.symbol, s.title = i.name, s.addEventListener("click", ()=>{
                    N(i.symbol), g("units-popup");
                }), r.appendChild(s);
            }
            n.appendChild(r), t.appendChild(n);
        }
    }
    function ve() {
        if (!F) return;
        const t = [
            ...F.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)
        ];
        for (const [, e, n] of t)T.interpret(`unit ${e} : Money = (1 / ${n}) EUR`);
    }
    function K() {
        T = j.new(!0, !0, Te.Html), ve();
    }
    function Ve(t) {
        const e = document.getElementById("currencies-list");
        e.innerHTML = "";
        const n = [
            "EUR",
            ...new Set([
                ...t.matchAll(/currency='([A-Z]{3})'/g)
            ].map((r)=>r[1]))
        ];
        n.sort();
        const o = document.createElement("div");
        o.className = "unit-chips";
        for (const r of n){
            const i = document.createElement("button");
            i.type = "button", i.className = "unit-chip", i.textContent = r, i.addEventListener("click", ()=>{
                N(r), g("currencies-popup");
            }), o.appendChild(i);
        }
        e.appendChild(o);
    }
    async function je() {
        const t = document.getElementById("currencies-status");
        t.textContent = "Loading…", t.className = "currencies-loading";
        try {
            const e = await fetch("/ecb-rates.xml");
            if (!e.ok) throw new Error(`HTTP ${e.status}`);
            F = await e.text(), ve();
            const n = F.match(/time='(\d{4}-\d{2}-\d{2})'/), o = n ? new Date(n[1]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "unknown date";
            t.textContent = `Rates · ${o}`, t.className = "", Ve(F);
        } catch  {
            t.textContent = "Unavailable", t.className = "currencies-error";
        }
    }
    function ue() {
        K(), y.innerHTML = "", L.clear(), I.clear(), $(), J(), p = oe(), C(), M(), l.value = "", U();
    }
    function de() {
        y.innerHTML = "", p.inputs = [], C(), l.value = "", U();
    }
    let ee = null;
    function k(t) {
        ee = document.activeElement;
        const e = document.getElementById(t);
        e.classList.add("visible"), document.getElementById(t + "-backdrop").classList.add("visible"), e.querySelector("button, [href], input, select, [tabindex]")?.focus();
    }
    function g(t) {
        document.getElementById(t).classList.remove("visible"), document.getElementById(t + "-backdrop").classList.remove("visible"), ee?.focus(), ee = null;
    }
    let re = null;
    function pe(t, e, n, o = "Confirm") {
        document.getElementById("confirm-popup-title").textContent = t, document.getElementById("confirm-popup-message").textContent = e, document.getElementById("confirm-popup-ok").textContent = o, re = n, k("confirm-popup");
    }
    function A() {
        g("confirm-popup"), re = null;
    }
    function q(t, e) {
        document.getElementById("info-popup-title").textContent = t, document.getElementById("info-popup-message").textContent = e, k("info-popup");
    }
    function Y() {
        g("info-popup");
    }
    async function Ge() {
        const t = document.createElement("div");
        t.className = "entry init-msg", t.textContent = "Loading…", y.appendChild(t);
        try {
            await be();
        } catch (i) {
            t.textContent = "Failed to load: " + (i instanceof Error ? i.message : String(i)), t.classList.add("error");
            return;
        }
        K(), y.removeChild(t), await je();
        const e = B();
        e.length > 0 ? await G(e[0].id) : (p = oe(), C(), M()), qe(), document.getElementById("units-panel-btn").addEventListener("click", ()=>k("units-popup")), document.getElementById("units-popup-close").addEventListener("click", ()=>g("units-popup")), document.getElementById("units-popup-backdrop").addEventListener("click", ()=>g("units-popup")), document.getElementById("functions-panel-btn").addEventListener("click", ()=>k("functions-popup")), document.getElementById("functions-popup-close").addEventListener("click", ()=>g("functions-popup")), document.getElementById("functions-popup-backdrop").addEventListener("click", ()=>g("functions-popup")), document.getElementById("currencies-panel-btn").addEventListener("click", ()=>k("currencies-popup")), document.getElementById("currencies-popup-close").addEventListener("click", ()=>g("currencies-popup")), document.getElementById("currencies-popup-backdrop").addEventListener("click", ()=>g("currencies-popup")), document.getElementById("info-popup-close").addEventListener("click", Y), document.getElementById("info-popup-backdrop").addEventListener("click", Y), document.getElementById("vars-help-btn").addEventListener("click", ()=>{
            q("Variables", "Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.");
        }), document.getElementById("functions-help-btn").addEventListener("click", ()=>{
            q("Functions", "Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.");
        }), document.getElementById("currencies-help-btn").addEventListener("click", ()=>{
            q("Currencies", 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".');
        }), document.getElementById("units-help-btn").addEventListener("click", ()=>{
            q("Units", 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.');
        }), document.getElementById("confirm-popup-close").addEventListener("click", A), document.getElementById("confirm-popup-backdrop").addEventListener("click", A), document.getElementById("confirm-popup-cancel").addEventListener("click", A), document.getElementById("confirm-popup-ok").addEventListener("click", ()=>{
            const i = re;
            A(), i && i();
        }), document.getElementById("clear-btn").addEventListener("click", ()=>{
            pe("Clear session", "Clear all output and history for this session?", de, "Clear");
        }), document.getElementById("reset-btn").addEventListener("click", ()=>{
            pe("Reset", "Clear all output, variables, and functions, and start fresh?", ue, "Reset");
        }), document.addEventListener("keydown", (i)=>{
            i.key === "Escape" && (A(), Y(), g("units-popup"), g("functions-popup"), g("currencies-popup"));
        });
        const n = document.getElementById("variables");
        document.getElementById("mobile-vars-btn").addEventListener("click", ()=>{
            n.classList.add("mobile-open"), We.scrollTop = 0;
        }), document.getElementById("mobile-units-btn").addEventListener("click", ()=>{
            k("units-popup");
        }), document.getElementById("mobile-functions-btn").addEventListener("click", ()=>{
            k("functions-popup");
        }), document.getElementById("mobile-currencies-btn").addEventListener("click", ()=>{
            k("currencies-popup");
        }), document.getElementById("mobile-sidebar-close").addEventListener("click", ()=>{
            n.classList.remove("mobile-open");
        });
        const o = document.getElementById("sidebar-collapse-btn");
        o.addEventListener("click", ()=>{
            n.classList.toggle("collapsed"), o.textContent = n.classList.contains("collapsed") ? "‹" : "›", o.title = n.classList.contains("collapsed") ? "Expand sidebar" : "Collapse sidebar";
        });
        function r(i) {
            const s = i.target.closest(".shortcut");
            s && N(s.dataset.insert ?? "");
        }
        document.getElementById("numpad").addEventListener("click", r), document.getElementById("shortcuts").addEventListener("click", r), document.getElementById("new-session-btn").addEventListener("click", ()=>Ee()), R.addEventListener("change", ()=>{
            G(parseInt(R.value));
        }), l.addEventListener("keydown", (i)=>{
            const s = p.inputs;
            if (i.key === "ArrowUp") {
                if (s.length === 0) return;
                i.preventDefault(), f === -1 && (H = l.value), f = Math.min(f + 1, s.length - 1), l.value = s[s.length - 1 - f], l.setSelectionRange(l.value.length, l.value.length);
            } else if (i.key === "ArrowDown") {
                if (f === -1) return;
                i.preventDefault(), f--, l.value = f === -1 ? H : s[s.length - 1 - f], l.setSelectionRange(l.value.length, l.value.length);
            } else f = -1;
        }), document.getElementById("history-prev").addEventListener("click", ()=>{
            const i = p.inputs;
            i.length !== 0 && (f === -1 && (H = l.value), f = Math.min(f + 1, i.length - 1), l.value = i[i.length - 1 - f], l.focus(), l.setSelectionRange(l.value.length, l.value.length));
        }), document.getElementById("history-next").addEventListener("click", ()=>{
            f !== -1 && (f--, l.value = f === -1 ? H : p.inputs[p.inputs.length - 1 - f], l.focus(), l.setSelectionRange(l.value.length, l.value.length));
        }), He.addEventListener("submit", (i)=>{
            i.preventDefault();
            const s = l.value.trim();
            if (!s) return;
            U();
            let c = "", m = !1;
            try {
                const u = T.try_run_command(s);
                if (u.is_command) {
                    if (u.should_reset) {
                        ue();
                        return;
                    }
                    if (u.should_clear) {
                        de();
                        return;
                    }
                    c = u.output ?? "(command executed)", p.inputs.push(s), C();
                } else {
                    p.inputs.push(s), C();
                    const b = T.interpret(s);
                    if (c = b.output, m = b.is_error, !m) {
                        const _ = s.match(_e);
                        _ && (L.add(_[1]), $());
                        const d = s.match(ge);
                        d && (I.set(d[1], d[2]), J());
                    }
                }
            } catch (u) {
                c = he(u instanceof Error ? u.message : String(u)), m = !0;
            }
            we(s, c, m), l.value = "";
        }), l.focus();
    }
    const S = document.getElementById("pwa-check-btn"), ke = document.getElementById("pwa-update-btn");
    let Le = !1;
    const $e = ze({
        onNeedRefresh () {
            Le = !0, S.hidden = !0, ke.hidden = !1;
        }
    });
    S.addEventListener("click", async ()=>{
        S.textContent = "Checking…", S.disabled = !0, await (await navigator.serviceWorker.getRegistration())?.update(), Le || (S.textContent = "Check for update", S.disabled = !1);
    });
    ke.addEventListener("click", ()=>{
        $e(!0);
    });
    Ge();
})();
