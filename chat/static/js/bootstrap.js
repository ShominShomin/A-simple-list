/*!
 * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(jQuery), + function() {
    function a(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !b || "object" != typeof b && "function" != typeof b ? a : b }

    function b(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b) }

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a },
        e = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d) } }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b } }(),
        f = function(a) {
            function b(a) {
                return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase() }

            function c(a) {
                return (a[0] || a).nodeType }

            function d() {
                return { bindType: h.end, delegateType: h.end, handle: function(b) {
                        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } } }

            function e() {
                if (window.QUnit) return !1;
                var a = document.createElement("bootstrap");
                for (var b in j)
                    if (void 0 !== a.style[b]) return { end: j[b] };
                return !1 }

            function f(b) {
                var c = this,
                    d = !1;
                return a(this).one(k.TRANSITION_END, function() { d = !0 }), setTimeout(function() { d || k.triggerTransitionEnd(c) }, b), this }

            function g() { h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d()) }
            var h = !1,
                i = 1e6,
                j = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
                k = { TRANSITION_END: "bsTransitionEnd", getUID: function(a) { do a += ~~(Math.random() * i); while (document.getElementById(a));
                        return a }, getSelectorFromElement: function(a) {
                        var b = a.getAttribute("data-target");
                        return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b }, reflow: function(a) { new Function("bs", "return bs")(a.offsetHeight) }, triggerTransitionEnd: function(b) { a(b).trigger(h.end) }, supportsTransitionEnd: function() {
                        return Boolean(h) }, typeCheckConfig: function(a, d, e) {
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var g = e[f],
                                    h = d[f],
                                    i = void 0;
                                if (i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i)) throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".')) } } };
            return g(), k }(jQuery),
        g = (function(a) {
            var b = "alert",
                d = "4.0.0-alpha.5",
                g = "bs.alert",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = { DISMISS: '[data-dismiss="alert"]' },
                m = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + i },
                n = { ALERT: "alert", FADE: "fade", IN: "in" },
                o = function() {
                    function b(a) { c(this, b), this._element = a }
                    return b.prototype.close = function(a) { a = a || this._element;
                        var b = this._getRootElement(a),
                            c = this._triggerCloseEvent(b);
                        c.isDefaultPrevented() || this._removeElement(b) }, b.prototype.dispose = function() { a.removeData(this._element, g), this._element = null }, b.prototype._getRootElement = function(b) {
                        var c = f.getSelectorFromElement(b),
                            d = !1;
                        return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d }, b.prototype._triggerCloseEvent = function(b) {
                        var c = a.Event(m.CLOSE);
                        return a(b).trigger(c), c }, b.prototype._removeElement = function(b) {
                        return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b) }, b.prototype._destroyElement = function(b) { a(b).detach().trigger(m.CLOSED).remove() }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this) }) }, b._handleDismiss = function(a) {
                        return function(b) { b && b.preventDefault(), a.close(this) } }, e(b, null, [{ key: "VERSION", get: function() {
                            return d } }]), b }();
            return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface }, o }(jQuery), function(a) {
            var b = "button",
                d = "4.0.0-alpha.5",
                f = "bs.button",
                g = "." + f,
                h = ".data-api",
                i = a.fn[b],
                j = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
                k = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
                l = { CLICK_DATA_API: "click" + g + h, FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h) },
                m = function() {
                    function b(a) { c(this, b), this._element = a }
                    return b.prototype.toggle = function() {
                        var b = !0,
                            c = a(this._element).closest(k.DATA_TOGGLE)[0];
                        if (c) {
                            var d = a(this._element).find(k.INPUT)[0];
                            if (d) {
                                if ("radio" === d.type)
                                    if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;
                                    else {
                                        var e = a(c).find(k.ACTIVE)[0];
                                        e && a(e).removeClass(j.ACTIVE) }
                                b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus() } } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                        b && a(this._element).toggleClass(j.ACTIVE) }, b.prototype.dispose = function() { a.removeData(this._element, f), this._element = null }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(f);
                            d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]() }) }, e(b, null, [{ key: "VERSION", get: function() {
                            return d } }]), b }();
            return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) { b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle") }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type)) }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
                return a.fn[b] = i, m._jQueryInterface }, m }(jQuery), function(a) {
            var b = "carousel",
                g = "4.0.0-alpha.5",
                h = "bs.carousel",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = 37,
                n = 39,
                o = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                p = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                q = { NEXT: "next", PREVIOUS: "prev" },
                r = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, LOAD_DATA_API: "load" + i + j, CLICK_DATA_API: "click" + i + j },
                s = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "right", LEFT: "left", ITEM: "carousel-item" },
                t = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".next, .prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                u = function() {
                    function j(b, d) { c(this, j), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(t.INDICATORS)[0], this._addEventListeners() }
                    return j.prototype.next = function() { this._isSliding || this._slide(q.NEXT) }, j.prototype.nextWhenVisible = function() { document.hidden || this.next() }, j.prototype.prev = function() { this._isSliding || this._slide(q.PREVIOUS) }, j.prototype.pause = function(b) { b || (this._isPaused = !0), a(this._element).find(t.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, j.prototype.cycle = function(b) { b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval)) }, j.prototype.to = function(b) {
                        var c = this;
                        this._activeElement = a(this._element).find(t.ACTIVE_ITEM)[0];
                        var d = this._getItemIndex(this._activeElement);
                        if (!(b > this._items.length - 1 || b < 0)) {
                            if (this._isSliding) return void a(this._element).one(r.SLID, function() {
                                return c.to(b) });
                            if (d === b) return this.pause(), void this.cycle();
                            var e = b > d ? q.NEXT : q.PREVIOUS;
                            this._slide(e, this._items[b]) } }, j.prototype.dispose = function() { a(this._element).off(i), a.removeData(this._element, h), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c }, j.prototype._addEventListeners = function() { this._config.keyboard && a(this._element).on(r.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(r.MOUSEENTER, a.proxy(this.pause, this)).on(r.MOUSELEAVE, a.proxy(this.cycle, this)) }, j.prototype._keydown = function(a) {
                        if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                            case m:
                                this.prev();
                                break;
                            case n:
                                this.next();
                                break;
                            default:
                                return } }, j.prototype._getItemIndex = function(b) {
                        return this._items = a.makeArray(a(b).parent().find(t.ITEM)), this._items.indexOf(b) }, j.prototype._getItemByDirection = function(a, b) {
                        var c = a === q.NEXT,
                            d = a === q.PREVIOUS,
                            e = this._getItemIndex(b),
                            f = this._items.length - 1,
                            g = d && 0 === e || c && e === f;
                        if (g && !this._config.wrap) return b;
                        var h = a === q.PREVIOUS ? -1 : 1,
                            i = (e + h) % this._items.length;
                        return i === -1 ? this._items[this._items.length - 1] : this._items[i] }, j.prototype._triggerSlideEvent = function(b, c) {
                        var d = a.Event(r.SLIDE, { relatedTarget: b, direction: c });
                        return a(this._element).trigger(d), d }, j.prototype._setActiveIndicatorElement = function(b) {
                        if (this._indicatorsElement) { a(this._indicatorsElement).find(t.ACTIVE).removeClass(s.ACTIVE);
                            var c = this._indicatorsElement.children[this._getItemIndex(b)];
                            c && a(c).addClass(s.ACTIVE) } }, j.prototype._slide = function(b, c) {
                        var d = this,
                            e = a(this._element).find(t.ACTIVE_ITEM)[0],
                            g = c || e && this._getItemByDirection(b, e),
                            h = Boolean(this._interval),
                            i = b === q.NEXT ? s.LEFT : s.RIGHT;
                        if (g && a(g).hasClass(s.ACTIVE)) return void(this._isSliding = !1);
                        var j = this._triggerSlideEvent(g, i);
                        if (!j.isDefaultPrevented() && e && g) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                            var k = a.Event(r.SLID, { relatedTarget: g, direction: i });
                            f.supportsTransitionEnd() && a(this._element).hasClass(s.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function() { a(g).removeClass(i).removeClass(b), a(g).addClass(s.ACTIVE), a(e).removeClass(s.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function() {
                                    return a(d._element).trigger(k) }, 0) }).emulateTransitionEnd(l)) : (a(e).removeClass(s.ACTIVE), a(g).addClass(s.ACTIVE), this._isSliding = !1, a(this._element).trigger(k)), h && this.cycle() } }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = a.extend({}, o, a(this).data()); "object" === ("undefined" == typeof b ? "undefined" : d(b)) && a.extend(e, b);
                            var f = "string" == typeof b ? b : e.slide;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "number" == typeof b) c.to(b);
                            else if ("string" == typeof f) {
                                if (void 0 === c[f]) throw new Error('No method named "' + f + '"');
                                c[f]() } else e.interval && (c.pause(), c.cycle()) }) }, j._dataApiClickHandler = function(b) {
                        var c = f.getSelectorFromElement(this);
                        if (c) {
                            var d = a(c)[0];
                            if (d && a(d).hasClass(s.CAROUSEL)) {
                                var e = a.extend({}, a(d).data(), a(this).data()),
                                    g = this.getAttribute("data-slide-to");
                                g && (e.interval = !1), j._jQueryInterface.call(a(d), e), g && a(d).data(h).to(g), b.preventDefault() } } }, e(j, null, [{ key: "VERSION", get: function() {
                            return g } }, { key: "Default", get: function() {
                            return o } }]), j }();
            return a(document).on(r.CLICK_DATA_API, t.DATA_SLIDE, u._dataApiClickHandler), a(window).on(r.LOAD_DATA_API, function() { a(t.DATA_RIDE).each(function() {
                    var b = a(this);
                    u._jQueryInterface.call(b, b.data()) }) }), a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() {
                return a.fn[b] = k, u._jQueryInterface }, u }(jQuery), function(a) {
            var b = "collapse",
                g = "4.0.0-alpha.5",
                h = "bs.collapse",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = { toggle: !0, parent: "" },
                n = { toggle: "boolean", parent: "string" },
                o = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + j },
                p = { IN: "in", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
                q = { WIDTH: "width", HEIGHT: "height" },
                r = { ACTIVES: ".card > .in, .card > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                s = function() {
                    function i(b, d) { c(this, i), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() }
                    return i.prototype.toggle = function() { a(this._element).hasClass(p.IN) ? this.hide() : this.show() }, i.prototype.show = function() {
                        var b = this;
                        if (!this._isTransitioning && !a(this._element).hasClass(p.IN)) {
                            var c = void 0,
                                d = void 0;
                            if (this._parent && (c = a.makeArray(a(r.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(h), d && d._isTransitioning))) {
                                var e = a.Event(o.SHOW);
                                if (a(this._element).trigger(e), !e.isDefaultPrevented()) { c && (i._jQueryInterface.call(a(c), "hide"), d || a(c).data(h, null));
                                    var g = this._getDimension();
                                    a(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[g] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var j = function() { a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), b._element.style[g] = "", b.setTransitioning(!1), a(b._element).trigger(o.SHOWN) };
                                    if (!f.supportsTransitionEnd()) return void j();
                                    var k = g[0].toUpperCase() + g.slice(1),
                                        m = "scroll" + k;
                                    a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(l), this._element.style[g] = this._element[m] + "px" } } } }, i.prototype.hide = function() {
                        var b = this;
                        if (!this._isTransitioning && a(this._element).hasClass(p.IN)) {
                            var c = a.Event(o.HIDE);
                            if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                                var d = this._getDimension(),
                                    e = d === q.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var g = function() { b.setTransitioning(!1), a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(o.HIDDEN) };
                                return this._element.style[d] = "", f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : void g() } } }, i.prototype.setTransitioning = function(a) { this._isTransitioning = a }, i.prototype.dispose = function() { a.removeData(this._element, h), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, i.prototype._getConfig = function(c) {
                        return c = a.extend({}, m, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, n), c }, i.prototype._getDimension = function() {
                        var b = a(this._element).hasClass(q.WIDTH);
                        return b ? q.WIDTH : q.HEIGHT }, i.prototype._getParent = function() {
                        var b = this,
                            c = a(this._config.parent)[0],
                            d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return a(c).find(d).each(function(a, c) { b._addAriaAndCollapsedClass(i._getTargetFromElement(c), [c]) }), c }, i.prototype._addAriaAndCollapsedClass = function(b, c) {
                        if (b) {
                            var d = a(b).hasClass(p.IN);
                            b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(p.COLLAPSED, !d).attr("aria-expanded", d) } }, i._getTargetFromElement = function(b) {
                        var c = f.getSelectorFromElement(b);
                        return c ? a(c)[0] : null }, i._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this),
                                e = c.data(h),
                                f = a.extend({}, m, c.data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                            if (!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || (e = new i(this, f), c.data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b]() } }) }, e(i, null, [{ key: "VERSION", get: function() {
                            return g } }, { key: "Default", get: function() {
                            return m } }]), i }();
            return a(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE, function(b) { b.preventDefault();
                var c = s._getTargetFromElement(this),
                    d = a(c).data(h),
                    e = d ? "toggle" : a(this).data();
                s._jQueryInterface.call(a(c), e) }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() {
                return a.fn[b] = k, s._jQueryInterface }, s }(jQuery), function(a) {
            var b = "dropdown",
                d = "4.0.0-alpha.5",
                g = "bs.dropdown",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 27,
                l = 38,
                m = 40,
                n = 3,
                o = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, CLICK: "click" + h, CLICK_DATA_API: "click" + h + i, KEYDOWN_DATA_API: "keydown" + h + i },
                p = { BACKDROP: "dropdown-backdrop", DISABLED: "disabled", OPEN: "open" },
                q = { BACKDROP: ".dropdown-backdrop", DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", ROLE_MENU: '[role="menu"]', ROLE_LISTBOX: '[role="listbox"]', NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a' },
                r = function() {
                    function b(a) { c(this, b), this._element = a, this._addEventListeners() }
                    return b.prototype.toggle = function() {
                        if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;
                        var c = b._getParentFromElement(this),
                            d = a(c).hasClass(p.OPEN);
                        if (b._clearMenus(), d) return !1;
                        if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                            var e = document.createElement("div");
                            e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus) }
                        var f = { relatedTarget: this },
                            g = a.Event(o.SHOW, f);
                        return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1) }, b.prototype.dispose = function() { a.removeData(this._element, g), a(this._element).off(h), this._element = null }, b.prototype._addEventListeners = function() { a(this._element).on(o.CLICK, this.toggle) }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(g);
                            if (d || a(this).data(g, d = new b(this)), "string" == typeof c) {
                                if (void 0 === d[c]) throw new Error('No method named "' + c + '"');
                                d[c].call(this) } }) }, b._clearMenus = function(c) {
                        if (!c || c.which !== n) {
                            var d = a(q.BACKDROP)[0];
                            d && d.parentNode.removeChild(d);
                            for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                var g = b._getParentFromElement(e[f]),
                                    h = { relatedTarget: e[f] };
                                if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                    var i = a.Event(o.HIDE, h);
                                    a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h))) } } } }, b._getParentFromElement = function(b) {
                        var c = void 0,
                            d = f.getSelectorFromElement(b);
                        return d && (c = a(d)[0]), c || b.parentNode }, b._dataApiKeydownHandler = function(c) {
                        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                            var d = b._getParentFromElement(this),
                                e = a(d).hasClass(p.OPEN);
                            if (!e && c.which !== k || e && c.which === k) {
                                if (c.which === k) {
                                    var f = a(d).find(q.DATA_TOGGLE)[0];
                                    a(f).trigger("focus") }
                                return void a(this).trigger("click") }
                            var g = a.makeArray(a(q.VISIBLE_ITEMS));
                            if (g = g.filter(function(a) {
                                    return a.offsetWidth || a.offsetHeight }), g.length) {
                                var h = g.indexOf(c.target);
                                c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus() } } }, e(b, null, [{ key: "VERSION", get: function() {
                            return d } }]), b }();
            return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) { a.stopPropagation() }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = j, r._jQueryInterface }, r }(jQuery), function(a) {
            var b = "modal",
                g = "4.0.0-alpha.5",
                h = "bs.modal",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 300,
                m = 150,
                n = 27,
                o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                p = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                q = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + j },
                r = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", IN: "in" },
                s = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed" },
                t = function() {
                    function j(b, d) { c(this, j), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(s.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 }
                    return j.prototype.toggle = function(a) {
                        return this._isShown ? this.hide() : this.show(a) }, j.prototype.show = function(b) {
                        var c = this,
                            d = a.Event(q.SHOW, { relatedTarget: b });
                        a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(r.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(q.CLICK_DISMISS, s.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(q.MOUSEDOWN_DISMISS, function() { a(c._element).one(q.MOUSEUP_DISMISS, function(b) { a(b.target).is(c._element) && (c._ignoreBackdropClick = !0) }) }), this._showBackdrop(a.proxy(this._showElement, this, b))) }, j.prototype.hide = function(b) { b && b.preventDefault();
                        var c = a.Event(q.HIDE);
                        a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(q.FOCUSIN), a(this._element).removeClass(r.IN), a(this._element).off(q.CLICK_DISMISS), a(this._dialog).off(q.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(l) : this._hideModal()) }, j.prototype.dispose = function() { a.removeData(this._element, h), a(window).off(i), a(document).off(i), a(this._element).off(i), a(this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c }, j.prototype._showElement = function(b) {
                        var c = this,
                            d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(r.IN), this._config.focus && this._enforceFocus();
                        var e = a.Event(q.SHOWN, { relatedTarget: b }),
                            g = function() { c._config.focus && c._element.focus(), a(c._element).trigger(e) };
                        d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g() }, j.prototype._enforceFocus = function() {
                        var b = this;
                        a(document).off(q.FOCUSIN).on(q.FOCUSIN, function(c) { document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus() }) }, j.prototype._setEscapeEvent = function() {
                        var b = this;
                        this._isShown && this._config.keyboard ? a(this._element).on(q.KEYDOWN_DISMISS, function(a) { a.which === n && b.hide() }) : this._isShown || a(this._element).off(q.KEYDOWN_DISMISS) }, j.prototype._setResizeEvent = function() { this._isShown ? a(window).on(q.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(q.RESIZE) }, j.prototype._hideModal = function() {
                        var b = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() { a(document.body).removeClass(r.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(q.HIDDEN) }) }, j.prototype._removeBackdrop = function() { this._backdrop && (a(this._backdrop).remove(), this._backdrop = null) }, j.prototype._showBackdrop = function(b) {
                        var c = this,
                            d = a(this._element).hasClass(r.FADE) ? r.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var e = f.supportsTransitionEnd() && d;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = r.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(q.CLICK_DISMISS, function(a) {
                                    return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide())) }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(r.IN), !b) return;
                            if (!e) return void b();
                            a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(m) } else if (!this._isShown && this._backdrop) { a(this._backdrop).removeClass(r.IN);
                            var g = function() { c._removeBackdrop(), b && b() };
                            f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(m) : g() } else b && b() }, j.prototype._handleUpdate = function() { this._adjustDialog() }, j.prototype._adjustDialog = function() {
                        var a = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, j.prototype._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, j.prototype._checkScrollbar = function() { this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, j.prototype._setScrollbar = function() {
                        var b = parseInt(a(s.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px") }, j.prototype._resetScrollbar = function() { document.body.style.paddingRight = this._originalBodyPadding }, j.prototype._getScrollbarWidth = function() {
                        var a = document.createElement("div");
                        a.className = r.SCROLLBAR_MEASURER, document.body.appendChild(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return document.body.removeChild(a), b }, j._jQueryInterface = function(b, c) {
                        return this.each(function() {
                            var e = a(this).data(h),
                                f = a.extend({}, j.Default, a(this).data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                            if (e || (e = new j(this, f), a(this).data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b](c) } else f.show && e.show(c) }) }, e(j, null, [{ key: "VERSION", get: function() {
                            return g } }, { key: "Default", get: function() {
                            return o } }]), j }();
            return a(document).on(q.CLICK_DATA_API, s.DATA_TOGGLE, function(b) {
                var c = this,
                    d = void 0,
                    e = f.getSelectorFromElement(this);
                e && (d = a(e)[0]);
                var g = a(d).data(h) ? "toggle" : a.extend({}, a(d).data(), a(this).data()); "A" === this.tagName && b.preventDefault();
                var i = a(d).one(q.SHOW, function(b) { b.isDefaultPrevented() || i.one(q.HIDDEN, function() { a(c).is(":visible") && c.focus() }) });
                t._jQueryInterface.call(a(d), g, this) }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() {
                return a.fn[b] = k, t._jQueryInterface }, t }(jQuery), function(a) {
            var b = "scrollspy",
                g = "4.0.0-alpha.5",
                h = "bs.scrollspy",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = { offset: 10, method: "auto", target: "" },
                m = { offset: "number", method: "string", target: "(string|element)" },
                n = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + j },
                o = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", NAV_LINK: "nav-link", NAV: "nav", ACTIVE: "active" },
                p = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                q = { OFFSET: "offset", POSITION: "position" },
                r = function() {
                    function j(b, d) { c(this, j), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(n.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process() }
                    return j.prototype.refresh = function() {
                        var b = this,
                            c = this._scrollElement !== this._scrollElement.window ? q.POSITION : q.OFFSET,
                            d = "auto" === this._config.method ? c : this._config.method,
                            e = d === q.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var g = a.makeArray(a(this._selector));
                        g.map(function(b) {
                            var c = void 0,
                                g = f.getSelectorFromElement(b);
                            return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null }).filter(function(a) {
                            return a }).sort(function(a, b) {
                            return a[0] - b[0] }).forEach(function(a) { b._offsets.push(a[0]), b._targets.push(a[1]) }) }, j.prototype.dispose = function() { a.removeData(this._element, h), a(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, j.prototype._getConfig = function(c) {
                        if (c = a.extend({}, l, c), "string" != typeof c.target) {
                            var d = a(c.target).attr("id");
                            d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d }
                        return f.typeCheckConfig(b, c, m), c }, j.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop }, j.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, j.prototype._process = function() {
                        var a = this._getScrollTop() + this._config.offset,
                            b = this._getScrollHeight(),
                            c = this._config.offset + b - this._scrollElement.offsetHeight;
                        if (this._scrollHeight !== b && this.refresh(), a >= c) {
                            var d = this._targets[this._targets.length - 1];
                            this._activeTarget !== d && this._activate(d) }
                        if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var e = this._offsets.length; e--;) {
                            var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                            f && this._activate(this._targets[e]) } }, j.prototype._activate = function(b) { this._activeTarget = b, this._clear();
                        var c = this._selector.split(",");
                        c = c.map(function(a) {
                            return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]') });
                        var d = a(c.join(","));
                        d.hasClass(o.DROPDOWN_ITEM) ? (d.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(o.ACTIVE), d.addClass(o.ACTIVE)) : d.parents(p.LI).find(p.NAV_LINKS).addClass(o.ACTIVE), a(this._scrollElement).trigger(n.ACTIVATE, { relatedTarget: b }) }, j.prototype._clear = function() { a(this._selector).filter(p.ACTIVE).removeClass(o.ACTIVE) }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b || null;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]() } }) }, e(j, null, [{ key: "VERSION", get: function() {
                            return g } }, { key: "Default", get: function() {
                            return l } }]), j }();
            return a(window).on(n.LOAD_DATA_API, function() {
                for (var b = a.makeArray(a(p.DATA_SPY)), c = b.length; c--;) {
                    var d = a(b[c]);
                    r._jQueryInterface.call(d, d.data()) } }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = k, r._jQueryInterface }, r }(jQuery), function(a) {
            var b = "tab",
                d = "4.0.0-alpha.5",
                g = "bs.tab",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, CLICK_DATA_API: "click" + h + i },
                m = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", FADE: "fade", IN: "in" },
                n = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    UL: "ul:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                o = function() {
                    function b(a) { c(this, b), this._element = a }
                    return b.prototype.show = function() {
                        var b = this;
                        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                            var c = void 0,
                                d = void 0,
                                e = a(this._element).closest(n.UL)[0],
                                g = f.getSelectorFromElement(this._element);
                            e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                            var h = a.Event(l.HIDE, { relatedTarget: this._element }),
                                i = a.Event(l.SHOW, { relatedTarget: d });
                            if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) { g && (c = a(g)[0]), this._activate(this._element, e);
                                var j = function() {
                                    var c = a.Event(l.HIDDEN, { relatedTarget: b._element }),
                                        e = a.Event(l.SHOWN, { relatedTarget: d });
                                    a(d).trigger(c), a(b._element).trigger(e) };
                                c ? this._activate(c, c.parentNode, j) : j() } } }, b.prototype.dispose = function() { a.removeClass(this._element, g), this._element = null }, b.prototype._activate = function(b, c, d) {
                        var e = a(c).find(n.ACTIVE_CHILD)[0],
                            g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
                            h = a.proxy(this._transitionComplete, this, b, e, g, d);
                        e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN) }, b.prototype._transitionComplete = function(b, c, d, e) {
                        if (c) { a(c).removeClass(m.ACTIVE);
                            var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                            g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1) }
                        if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                            var h = a(b).closest(n.DROPDOWN)[0];
                            h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0) }
                        e && e() }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            if (e || (e = e = new b(this), d.data(g, e)), "string" == typeof c) {
                                if (void 0 === e[c]) throw new Error('No method named "' + c + '"');
                                e[c]() } }) }, e(b, null, [{ key: "VERSION", get: function() {
                            return d } }]), b }();
            return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) { b.preventDefault(), o._jQueryInterface.call(a(this), "show") }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface }, o
        }(jQuery), function(a) {
            var b = "tooltip",
                g = "4.0.0-alpha.5",
                h = "bs.tooltip",
                i = "." + h,
                j = a.fn[b],
                k = 150,
                l = "bs-tether",
                m = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [] },
                n = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array" },
                o = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
                p = { IN: "in", OUT: "out" },
                q = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
                r = { FADE: "fade", IN: "in" },
                s = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
                t = { element: !1, enabled: !1 },
                u = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
                v = function() {
                    function j(a, b) { c(this, j), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners() }
                    return j.prototype.enable = function() { this._isEnabled = !0 }, j.prototype.disable = function() { this._isEnabled = !1 }, j.prototype.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, j.prototype.toggle = function(b) {
                        if (b) {
                            var c = this.constructor.DATA_KEY,
                                d = a(b.currentTarget).data(c);
                            d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d) } else {
                            if (a(this.getTipElement()).hasClass(r.IN)) return void this._leave(null, this);
                            this._enter(null, this) } }, j.prototype.dispose = function() { clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null }, j.prototype.show = function() {
                        var b = this,
                            c = a.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) { a(this.element).trigger(c);
                            var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                            if (c.isDefaultPrevented() || !d) return;
                            var e = this.getTipElement(),
                                g = f.getUID(this.constructor.NAME);
                            e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(r.FADE);
                            var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                                i = this._getAttachment(h);
                            a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: i, element: e, target: this.element, classes: t, classPrefix: l, offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), f.reflow(e), this._tether.position(), a(e).addClass(r.IN);
                            var k = function() {
                                var c = b._hoverState;
                                b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === p.OUT && b._leave(null, b) };
                            if (f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE)) return void a(this.tip).one(f.TRANSITION_END, k).emulateTransitionEnd(j._TRANSITION_DURATION);
                            k() } }, j.prototype.hide = function(b) {
                        var c = this,
                            d = this.getTipElement(),
                            e = a.Event(this.constructor.Event.HIDE),
                            g = function() { c._hoverState !== p.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b() };
                        a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(r.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g(), this._hoverState = "") }, j.prototype.isWithContent = function() {
                        return Boolean(this.getTitle()) }, j.prototype.getTipElement = function() {
                        return this.tip = this.tip || a(this.config.template)[0] }, j.prototype.setContent = function() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()), b.removeClass(r.FADE).removeClass(r.IN), this.cleanupTether() }, j.prototype.setElementContent = function(b, c) {
                        var e = this.config.html; "object" === ("undefined" == typeof c ? "undefined" : d(c)) && (c.nodeType || c.jquery) ? e ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()): b[e ? "html" : "text"](c) }, j.prototype.getTitle = function() {
                        var a = this.element.getAttribute("data-original-title");
                        return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a }, j.prototype.cleanupTether = function() { this._tether && this._tether.destroy() }, j.prototype._getAttachment = function(a) {
                        return o[a.toUpperCase()] }, j.prototype._setListeners = function() {
                        var b = this,
                            c = this.config.trigger.split(" ");
                        c.forEach(function(c) {
                            if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                            else if (c !== u.MANUAL) {
                                var d = c === u.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
                                    e = c === u.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b)) } }), this.config.selector ? this.config = a.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, j.prototype._fixTitle = function() {
                        var a = d(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, j.prototype._enter = function(b, c) {
                        var d = this.constructor.DATA_KEY;
                        return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? u.FOCUS : u.HOVER] = !0), a(c.getTipElement()).hasClass(r.IN) || c._hoverState === p.IN ? void(c._hoverState = p.IN) : (clearTimeout(c._timeout), c._hoverState = p.IN, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() { c._hoverState === p.IN && c.show() }, c.config.delay.show)) : void c.show()) }, j.prototype._leave = function(b, c) {
                        var d = this.constructor.DATA_KEY;
                        if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? u.FOCUS : u.HOVER] = !1), !c._isWithActiveTrigger()) return clearTimeout(c._timeout), c._hoverState = p.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() { c._hoverState === p.OUT && c.hide() }, c.config.delay.hide)) : void c.hide() }, j.prototype._isWithActiveTrigger = function() {
                        for (var a in this._activeTrigger)
                            if (this._activeTrigger[a]) return !0;
                        return !1 }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = { show: c.delay, hide: c.delay }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c }, j.prototype._getDelegateConfig = function() {
                        var a = {};
                        if (this.config)
                            for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                        return a }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) ? b : null;
                            if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b)) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]() } }) }, e(j, null, [{ key: "VERSION", get: function() {
                            return g } }, { key: "Default", get: function() {
                            return m } }, { key: "NAME", get: function() {
                            return b } }, { key: "DATA_KEY", get: function() {
                            return h } }, { key: "Event", get: function() {
                            return q } }, { key: "EVENT_KEY", get: function() {
                            return i } }, { key: "DefaultType", get: function() {
                            return n } }]), j }();
            return a.fn[b] = v._jQueryInterface, a.fn[b].Constructor = v, a.fn[b].noConflict = function() {
                return a.fn[b] = j, v._jQueryInterface }, v }(jQuery));
    (function(f) {
        var h = "popover",
            i = "4.0.0-alpha.5",
            j = "bs.popover",
            k = "." + j,
            l = f.fn[h],
            m = f.extend({}, g.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
            n = f.extend({}, g.DefaultType, { content: "(string|element|function)" }),
            o = { FADE: "fade", IN: "in" },
            p = { TITLE: ".popover-title", CONTENT: ".popover-content" },
            q = { HIDE: "hide" + k, HIDDEN: "hidden" + k, SHOW: "show" + k, SHOWN: "shown" + k, INSERTED: "inserted" + k, CLICK: "click" + k, FOCUSIN: "focusin" + k, FOCUSOUT: "focusout" + k, MOUSEENTER: "mouseenter" + k, MOUSELEAVE: "mouseleave" + k },
            r = function(g) {
                function l() {
                    return c(this, l), a(this, g.apply(this, arguments)) }
                return b(l, g), l.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent() }, l.prototype.getTipElement = function() {
                    return this.tip = this.tip || f(this.config.template)[0] }, l.prototype.setContent = function() {
                    var a = f(this.getTipElement());
                    this.setElementContent(a.find(p.TITLE), this.getTitle()), this.setElementContent(a.find(p.CONTENT), this._getContent()), a.removeClass(o.FADE).removeClass(o.IN), this.cleanupTether() }, l.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content) }, l._jQueryInterface = function(a) {
                    return this.each(function() {
                        var b = f(this).data(j),
                            c = "object" === ("undefined" == typeof a ? "undefined" : d(a)) ? a : null;
                        if ((b || !/destroy|hide/.test(a)) && (b || (b = new l(this, c), f(this).data(j, b)), "string" == typeof a)) {
                            if (void 0 === b[a]) throw new Error('No method named "' + a + '"');
                            b[a]() } }) }, e(l, null, [{ key: "VERSION", get: function() {
                        return i } }, { key: "Default", get: function() {
                        return m } }, { key: "NAME", get: function() {
                        return h } }, { key: "DATA_KEY", get: function() {
                        return j } }, { key: "Event", get: function() {
                        return q } }, { key: "EVENT_KEY", get: function() {
                        return k } }, { key: "DefaultType", get: function() {
                        return n } }]), l }(g);
        return f.fn[h] = r._jQueryInterface, f.fn[h].Constructor = r, f.fn[h].noConflict = function() {
            return f.fn[h] = l, r._jQueryInterface }, r })(jQuery)
}();
