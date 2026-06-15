/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!(function(a, b, c, d) {
  "use strict";
  function e(a2, b2, c2) {
    return setTimeout(j(a2, c2), b2);
  }
  function f(a2, b2, c2) {
    return Array.isArray(a2) ? (g(a2, c2[b2], c2), true) : false;
  }
  function g(a2, b2, c2) {
    var e2;
    if (a2) if (a2.forEach) a2.forEach(b2, c2);
    else if (a2.length !== d) for (e2 = 0; e2 < a2.length; ) b2.call(c2, a2[e2], e2, a2), e2++;
    else for (e2 in a2) a2.hasOwnProperty(e2) && b2.call(c2, a2[e2], e2, a2);
  }
  function h(b2, c2, d2) {
    var e2 = "DEPRECATED METHOD: " + c2 + "\n" + d2 + " AT \n";
    return function() {
      var c3 = new Error("get-stack-trace"), d3 = c3 && c3.stack ? c3.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", f2 = a.console && (a.console.warn || a.console.log);
      return f2 && f2.call(a.console, e2, d3), b2.apply(this, arguments);
    };
  }
  function i(a2, b2, c2) {
    var d2, e2 = b2.prototype;
    d2 = a2.prototype = Object.create(e2), d2.constructor = a2, d2._super = e2, c2 && la(d2, c2);
  }
  function j(a2, b2) {
    return function() {
      return a2.apply(b2, arguments);
    };
  }
  function k(a2, b2) {
    return typeof a2 == oa ? a2.apply(b2 ? b2[0] || d : d, b2) : a2;
  }
  function l(a2, b2) {
    return a2 === d ? b2 : a2;
  }
  function m(a2, b2, c2) {
    g(q(b2), function(b3) {
      a2.addEventListener(b3, c2, false);
    });
  }
  function n(a2, b2, c2) {
    g(q(b2), function(b3) {
      a2.removeEventListener(b3, c2, false);
    });
  }
  function o(a2, b2) {
    for (; a2; ) {
      if (a2 == b2) return true;
      a2 = a2.parentNode;
    }
    return false;
  }
  function p(a2, b2) {
    return a2.indexOf(b2) > -1;
  }
  function q(a2) {
    return a2.trim().split(/\s+/g);
  }
  function r(a2, b2, c2) {
    if (a2.indexOf && !c2) return a2.indexOf(b2);
    for (var d2 = 0; d2 < a2.length; ) {
      if (c2 && a2[d2][c2] == b2 || !c2 && a2[d2] === b2) return d2;
      d2++;
    }
    return -1;
  }
  function s(a2) {
    return Array.prototype.slice.call(a2, 0);
  }
  function t(a2, b2, c2) {
    for (var d2 = [], e2 = [], f2 = 0; f2 < a2.length; ) {
      var g2 = b2 ? a2[f2][b2] : a2[f2];
      r(e2, g2) < 0 && d2.push(a2[f2]), e2[f2] = g2, f2++;
    }
    return c2 && (d2 = b2 ? d2.sort(function(a3, c3) {
      return a3[b2] > c3[b2];
    }) : d2.sort()), d2;
  }
  function u(a2, b2) {
    for (var c2, e2, f2 = b2[0].toUpperCase() + b2.slice(1), g2 = 0; g2 < ma.length; ) {
      if (c2 = ma[g2], e2 = c2 ? c2 + f2 : b2, e2 in a2) return e2;
      g2++;
    }
    return d;
  }
  function v() {
    return ua++;
  }
  function w(b2) {
    var c2 = b2.ownerDocument || b2;
    return c2.defaultView || c2.parentWindow || a;
  }
  function x(a2, b2) {
    var c2 = this;
    this.manager = a2, this.callback = b2, this.element = a2.element, this.target = a2.options.inputTarget, this.domHandler = function(b3) {
      k(a2.options.enable, [a2]) && c2.handler(b3);
    }, this.init();
  }
  function y(a2) {
    var b2, c2 = a2.options.inputClass;
    return new (b2 = c2 ? c2 : xa ? M : ya ? P : wa ? R : L)(a2, z);
  }
  function z(a2, b2, c2) {
    var d2 = c2.pointers.length, e2 = c2.changedPointers.length, f2 = b2 & Ea && d2 - e2 === 0, g2 = b2 & (Ga | Ha) && d2 - e2 === 0;
    c2.isFirst = !!f2, c2.isFinal = !!g2, f2 && (a2.session = {}), c2.eventType = b2, A(a2, c2), a2.emit("hammer.input", c2), a2.recognize(c2), a2.session.prevInput = c2;
  }
  function A(a2, b2) {
    var c2 = a2.session, d2 = b2.pointers, e2 = d2.length;
    c2.firstInput || (c2.firstInput = D(b2)), e2 > 1 && !c2.firstMultiple ? c2.firstMultiple = D(b2) : 1 === e2 && (c2.firstMultiple = false);
    var f2 = c2.firstInput, g2 = c2.firstMultiple, h2 = g2 ? g2.center : f2.center, i2 = b2.center = E(d2);
    b2.timeStamp = ra(), b2.deltaTime = b2.timeStamp - f2.timeStamp, b2.angle = I(h2, i2), b2.distance = H(h2, i2), B(c2, b2), b2.offsetDirection = G(b2.deltaX, b2.deltaY);
    var j2 = F(b2.deltaTime, b2.deltaX, b2.deltaY);
    b2.overallVelocityX = j2.x, b2.overallVelocityY = j2.y, b2.overallVelocity = qa(j2.x) > qa(j2.y) ? j2.x : j2.y, b2.scale = g2 ? K(g2.pointers, d2) : 1, b2.rotation = g2 ? J(g2.pointers, d2) : 0, b2.maxPointers = c2.prevInput ? b2.pointers.length > c2.prevInput.maxPointers ? b2.pointers.length : c2.prevInput.maxPointers : b2.pointers.length, C(c2, b2);
    var k2 = a2.element;
    o(b2.srcEvent.target, k2) && (k2 = b2.srcEvent.target), b2.target = k2;
  }
  function B(a2, b2) {
    var c2 = b2.center, d2 = a2.offsetDelta || {}, e2 = a2.prevDelta || {}, f2 = a2.prevInput || {};
    b2.eventType !== Ea && f2.eventType !== Ga || (e2 = a2.prevDelta = { x: f2.deltaX || 0, y: f2.deltaY || 0 }, d2 = a2.offsetDelta = { x: c2.x, y: c2.y }), b2.deltaX = e2.x + (c2.x - d2.x), b2.deltaY = e2.y + (c2.y - d2.y);
  }
  function C(a2, b2) {
    var c2, e2, f2, g2, h2 = a2.lastInterval || b2, i2 = b2.timeStamp - h2.timeStamp;
    if (b2.eventType != Ha && (i2 > Da || h2.velocity === d)) {
      var j2 = b2.deltaX - h2.deltaX, k2 = b2.deltaY - h2.deltaY, l2 = F(i2, j2, k2);
      e2 = l2.x, f2 = l2.y, c2 = qa(l2.x) > qa(l2.y) ? l2.x : l2.y, g2 = G(j2, k2), a2.lastInterval = b2;
    } else c2 = h2.velocity, e2 = h2.velocityX, f2 = h2.velocityY, g2 = h2.direction;
    b2.velocity = c2, b2.velocityX = e2, b2.velocityY = f2, b2.direction = g2;
  }
  function D(a2) {
    for (var b2 = [], c2 = 0; c2 < a2.pointers.length; ) b2[c2] = { clientX: pa(a2.pointers[c2].clientX), clientY: pa(a2.pointers[c2].clientY) }, c2++;
    return { timeStamp: ra(), pointers: b2, center: E(b2), deltaX: a2.deltaX, deltaY: a2.deltaY };
  }
  function E(a2) {
    var b2 = a2.length;
    if (1 === b2) return { x: pa(a2[0].clientX), y: pa(a2[0].clientY) };
    for (var c2 = 0, d2 = 0, e2 = 0; b2 > e2; ) c2 += a2[e2].clientX, d2 += a2[e2].clientY, e2++;
    return { x: pa(c2 / b2), y: pa(d2 / b2) };
  }
  function F(a2, b2, c2) {
    return { x: b2 / a2 || 0, y: c2 / a2 || 0 };
  }
  function G(a2, b2) {
    return a2 === b2 ? Ia : qa(a2) >= qa(b2) ? 0 > a2 ? Ja : Ka : 0 > b2 ? La : Ma;
  }
  function H(a2, b2, c2) {
    c2 || (c2 = Qa);
    var d2 = b2[c2[0]] - a2[c2[0]], e2 = b2[c2[1]] - a2[c2[1]];
    return Math.sqrt(d2 * d2 + e2 * e2);
  }
  function I(a2, b2, c2) {
    c2 || (c2 = Qa);
    var d2 = b2[c2[0]] - a2[c2[0]], e2 = b2[c2[1]] - a2[c2[1]];
    return 180 * Math.atan2(e2, d2) / Math.PI;
  }
  function J(a2, b2) {
    return I(b2[1], b2[0], Ra) + I(a2[1], a2[0], Ra);
  }
  function K(a2, b2) {
    return H(b2[0], b2[1], Ra) / H(a2[0], a2[1], Ra);
  }
  function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = false, x.apply(this, arguments);
  }
  function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }
  function N() {
    this.evTarget = $a, this.evWin = _a, this.started = false, x.apply(this, arguments);
  }
  function O(a2, b2) {
    var c2 = s(a2.touches), d2 = s(a2.changedTouches);
    return b2 & (Ga | Ha) && (c2 = t(c2.concat(d2), "identifier", true)), [c2, d2];
  }
  function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }
  function Q(a2, b2) {
    var c2 = s(a2.touches), d2 = this.targetIds;
    if (b2 & (Ea | Fa) && 1 === c2.length) return d2[c2[0].identifier] = true, [c2, c2];
    var e2, f2, g2 = s(a2.changedTouches), h2 = [], i2 = this.target;
    if (f2 = c2.filter(function(a3) {
      return o(a3.target, i2);
    }), b2 === Ea) for (e2 = 0; e2 < f2.length; ) d2[f2[e2].identifier] = true, e2++;
    for (e2 = 0; e2 < g2.length; ) d2[g2[e2].identifier] && h2.push(g2[e2]), b2 & (Ga | Ha) && delete d2[g2[e2].identifier], e2++;
    return h2.length ? [t(f2.concat(h2), "identifier", true), h2] : void 0;
  }
  function R() {
    x.apply(this, arguments);
    var a2 = j(this.handler, this);
    this.touch = new P(this.manager, a2), this.mouse = new L(this.manager, a2), this.primaryTouch = null, this.lastTouches = [];
  }
  function S(a2, b2) {
    a2 & Ea ? (this.primaryTouch = b2.changedPointers[0].identifier, T.call(this, b2)) : a2 & (Ga | Ha) && T.call(this, b2);
  }
  function T(a2) {
    var b2 = a2.changedPointers[0];
    if (b2.identifier === this.primaryTouch) {
      var c2 = { x: b2.clientX, y: b2.clientY };
      this.lastTouches.push(c2);
      var d2 = this.lastTouches, e2 = function() {
        var a3 = d2.indexOf(c2);
        a3 > -1 && d2.splice(a3, 1);
      };
      setTimeout(e2, cb);
    }
  }
  function U(a2) {
    for (var b2 = a2.srcEvent.clientX, c2 = a2.srcEvent.clientY, d2 = 0; d2 < this.lastTouches.length; d2++) {
      var e2 = this.lastTouches[d2], f2 = Math.abs(b2 - e2.x), g2 = Math.abs(c2 - e2.y);
      if (db >= f2 && db >= g2) return true;
    }
    return false;
  }
  function V(a2, b2) {
    this.manager = a2, this.set(b2);
  }
  function W(a2) {
    if (p(a2, jb)) return jb;
    var b2 = p(a2, kb), c2 = p(a2, lb);
    return b2 && c2 ? jb : b2 || c2 ? b2 ? kb : lb : p(a2, ib) ? ib : hb;
  }
  function X() {
    if (!fb) return false;
    var b2 = {}, c2 = a.CSS && a.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d2) {
      b2[d2] = c2 ? a.CSS.supports("touch-action", d2) : true;
    }), b2;
  }
  function Y(a2) {
    this.options = la({}, this.defaults, a2 || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, true), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }
  function Z(a2) {
    return a2 & sb ? "cancel" : a2 & qb ? "end" : a2 & pb ? "move" : a2 & ob ? "start" : "";
  }
  function $(a2) {
    return a2 == Ma ? "down" : a2 == La ? "up" : a2 == Ja ? "left" : a2 == Ka ? "right" : "";
  }
  function _(a2, b2) {
    var c2 = b2.manager;
    return c2 ? c2.get(a2) : a2;
  }
  function aa() {
    Y.apply(this, arguments);
  }
  function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }
  function ca() {
    aa.apply(this, arguments);
  }
  function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }
  function ea() {
    aa.apply(this, arguments);
  }
  function fa() {
    aa.apply(this, arguments);
  }
  function ga() {
    Y.apply(this, arguments), this.pTime = false, this.pCenter = false, this._timer = null, this._input = null, this.count = 0;
  }
  function ha(a2, b2) {
    return b2 = b2 || {}, b2.recognizers = l(b2.recognizers, ha.defaults.preset), new ia(a2, b2);
  }
  function ia(a2, b2) {
    this.options = la({}, ha.defaults, b2 || {}), this.options.inputTarget = this.options.inputTarget || a2, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a2, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, true), g(this.options.recognizers, function(a3) {
      var b3 = this.add(new a3[0](a3[1]));
      a3[2] && b3.recognizeWith(a3[2]), a3[3] && b3.requireFailure(a3[3]);
    }, this);
  }
  function ja(a2, b2) {
    var c2 = a2.element;
    if (c2.style) {
      var d2;
      g(a2.options.cssProps, function(e2, f2) {
        d2 = u(c2.style, f2), b2 ? (a2.oldCssProps[d2] = c2.style[d2], c2.style[d2] = e2) : c2.style[d2] = a2.oldCssProps[d2] || "";
      }), b2 || (a2.oldCssProps = {});
    }
  }
  function ka(a2, c2) {
    var d2 = b.createEvent("Event");
    d2.initEvent(a2, true, true), d2.gesture = c2, c2.target.dispatchEvent(d2);
  }
  var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function", pa = Math.round, qa = Math.abs, ra = Date.now;
  la = "function" != typeof Object.assign ? function(a2) {
    if (a2 === d || null === a2) throw new TypeError("Cannot convert undefined or null to object");
    for (var b2 = Object(a2), c2 = 1; c2 < arguments.length; c2++) {
      var e2 = arguments[c2];
      if (e2 !== d && null !== e2) for (var f2 in e2) e2.hasOwnProperty(f2) && (b2[f2] = e2[f2]);
    }
    return b2;
  } : Object.assign;
  var sa = h(function(a2, b2, c2) {
    for (var e2 = Object.keys(b2), f2 = 0; f2 < e2.length; ) (!c2 || c2 && a2[e2[f2]] === d) && (a2[e2[f2]] = b2[e2[f2]]), f2++;
    return a2;
  }, "extend", "Use `assign`."), ta = h(function(a2, b2) {
    return sa(a2, b2, true);
  }, "merge", "Use `assign`."), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i, wa = "ontouchstart" in a, xa = u(a, "PointerEvent") !== d, ya = wa && va.test(navigator.userAgent), za = "touch", Aa = "pen", Ba = "mouse", Ca = "kinect", Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1, Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = ["x", "y"], Ra = ["clientX", "clientY"];
  x.prototype = { handler: function() {
  }, init: function() {
    this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
  }, destroy: function() {
    this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
  } };
  var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga }, Ta = "mousedown", Ua = "mousemove mouseup";
  i(L, x, { handler: function(a2) {
    var b2 = Sa[a2.type];
    b2 & Ea && 0 === a2.button && (this.pressed = true), b2 & Fa && 1 !== a2.which && (b2 = Ga), this.pressed && (b2 & Ga && (this.pressed = false), this.callback(this.manager, b2, { pointers: [a2], changedPointers: [a2], pointerType: Ba, srcEvent: a2 }));
  } });
  var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha }, Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca }, Xa = "pointerdown", Ya = "pointermove pointerup pointercancel";
  a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function(a2) {
    var b2 = this.store, c2 = false, d2 = a2.type.toLowerCase().replace("ms", ""), e2 = Va[d2], f2 = Wa[a2.pointerType] || a2.pointerType, g2 = f2 == za, h2 = r(b2, a2.pointerId, "pointerId");
    e2 & Ea && (0 === a2.button || g2) ? 0 > h2 && (b2.push(a2), h2 = b2.length - 1) : e2 & (Ga | Ha) && (c2 = true), 0 > h2 || (b2[h2] = a2, this.callback(this.manager, e2, { pointers: b2, changedPointers: [a2], pointerType: f2, srcEvent: a2 }), c2 && b2.splice(h2, 1));
  } });
  var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha }, $a = "touchstart", _a = "touchstart touchmove touchend touchcancel";
  i(N, x, { handler: function(a2) {
    var b2 = Za[a2.type];
    if (b2 === Ea && (this.started = true), this.started) {
      var c2 = O.call(this, a2, b2);
      b2 & (Ga | Ha) && c2[0].length - c2[1].length === 0 && (this.started = false), this.callback(this.manager, b2, { pointers: c2[0], changedPointers: c2[1], pointerType: za, srcEvent: a2 });
    }
  } });
  var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha }, bb = "touchstart touchmove touchend touchcancel";
  i(P, x, { handler: function(a2) {
    var b2 = ab[a2.type], c2 = Q.call(this, a2, b2);
    c2 && this.callback(this.manager, b2, { pointers: c2[0], changedPointers: c2[1], pointerType: za, srcEvent: a2 });
  } });
  var cb = 2500, db = 25;
  i(R, x, { handler: function(a2, b2, c2) {
    var d2 = c2.pointerType == za, e2 = c2.pointerType == Ba;
    if (!(e2 && c2.sourceCapabilities && c2.sourceCapabilities.firesTouchEvents)) {
      if (d2) S.call(this, b2, c2);
      else if (e2 && U.call(this, c2)) return;
      this.callback(a2, b2, c2);
    }
  }, destroy: function() {
    this.touch.destroy(), this.mouse.destroy();
  } });
  var eb = u(na.style, "touchAction"), fb = eb !== d, gb = "compute", hb = "auto", ib = "manipulation", jb = "none", kb = "pan-x", lb = "pan-y", mb = X();
  V.prototype = { set: function(a2) {
    a2 == gb && (a2 = this.compute()), fb && this.manager.element.style && mb[a2] && (this.manager.element.style[eb] = a2), this.actions = a2.toLowerCase().trim();
  }, update: function() {
    this.set(this.manager.options.touchAction);
  }, compute: function() {
    var a2 = [];
    return g(this.manager.recognizers, function(b2) {
      k(b2.options.enable, [b2]) && (a2 = a2.concat(b2.getTouchAction()));
    }), W(a2.join(" "));
  }, preventDefaults: function(a2) {
    var b2 = a2.srcEvent, c2 = a2.offsetDirection;
    if (this.manager.session.prevented) return void b2.preventDefault();
    var d2 = this.actions, e2 = p(d2, jb) && !mb[jb], f2 = p(d2, lb) && !mb[lb], g2 = p(d2, kb) && !mb[kb];
    if (e2) {
      var h2 = 1 === a2.pointers.length, i2 = a2.distance < 2, j2 = a2.deltaTime < 250;
      if (h2 && i2 && j2) return;
    }
    return g2 && f2 ? void 0 : e2 || f2 && c2 & Na || g2 && c2 & Oa ? this.preventSrc(b2) : void 0;
  }, preventSrc: function(a2) {
    this.manager.session.prevented = true, a2.preventDefault();
  } };
  var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32;
  Y.prototype = { defaults: {}, set: function(a2) {
    return la(this.options, a2), this.manager && this.manager.touchAction.update(), this;
  }, recognizeWith: function(a2) {
    if (f(a2, "recognizeWith", this)) return this;
    var b2 = this.simultaneous;
    return a2 = _(a2, this), b2[a2.id] || (b2[a2.id] = a2, a2.recognizeWith(this)), this;
  }, dropRecognizeWith: function(a2) {
    return f(a2, "dropRecognizeWith", this) ? this : (a2 = _(a2, this), delete this.simultaneous[a2.id], this);
  }, requireFailure: function(a2) {
    if (f(a2, "requireFailure", this)) return this;
    var b2 = this.requireFail;
    return a2 = _(a2, this), -1 === r(b2, a2) && (b2.push(a2), a2.requireFailure(this)), this;
  }, dropRequireFailure: function(a2) {
    if (f(a2, "dropRequireFailure", this)) return this;
    a2 = _(a2, this);
    var b2 = r(this.requireFail, a2);
    return b2 > -1 && this.requireFail.splice(b2, 1), this;
  }, hasRequireFailures: function() {
    return this.requireFail.length > 0;
  }, canRecognizeWith: function(a2) {
    return !!this.simultaneous[a2.id];
  }, emit: function(a2) {
    function b2(b3) {
      c2.manager.emit(b3, a2);
    }
    var c2 = this, d2 = this.state;
    qb > d2 && b2(c2.options.event + Z(d2)), b2(c2.options.event), a2.additionalEvent && b2(a2.additionalEvent), d2 >= qb && b2(c2.options.event + Z(d2));
  }, tryEmit: function(a2) {
    return this.canEmit() ? this.emit(a2) : void (this.state = tb);
  }, canEmit: function() {
    for (var a2 = 0; a2 < this.requireFail.length; ) {
      if (!(this.requireFail[a2].state & (tb | nb))) return false;
      a2++;
    }
    return true;
  }, recognize: function(a2) {
    var b2 = la({}, a2);
    return k(this.options.enable, [this, b2]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b2), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b2))) : (this.reset(), void (this.state = tb));
  }, process: function(a2) {
  }, getTouchAction: function() {
  }, reset: function() {
  } }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function(a2) {
    var b2 = this.options.pointers;
    return 0 === b2 || a2.pointers.length === b2;
  }, process: function(a2) {
    var b2 = this.state, c2 = a2.eventType, d2 = b2 & (ob | pb), e2 = this.attrTest(a2);
    return d2 && (c2 & Ha || !e2) ? b2 | sb : d2 || e2 ? c2 & Ga ? b2 | qb : b2 & ob ? b2 | pb : ob : tb;
  } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function() {
    var a2 = this.options.direction, b2 = [];
    return a2 & Na && b2.push(lb), a2 & Oa && b2.push(kb), b2;
  }, directionTest: function(a2) {
    var b2 = this.options, c2 = true, d2 = a2.distance, e2 = a2.direction, f2 = a2.deltaX, g2 = a2.deltaY;
    return e2 & b2.direction || (b2.direction & Na ? (e2 = 0 === f2 ? Ia : 0 > f2 ? Ja : Ka, c2 = f2 != this.pX, d2 = Math.abs(a2.deltaX)) : (e2 = 0 === g2 ? Ia : 0 > g2 ? La : Ma, c2 = g2 != this.pY, d2 = Math.abs(a2.deltaY))), a2.direction = e2, c2 && d2 > b2.threshold && e2 & b2.direction;
  }, attrTest: function(a2) {
    return aa.prototype.attrTest.call(this, a2) && (this.state & ob || !(this.state & ob) && this.directionTest(a2));
  }, emit: function(a2) {
    this.pX = a2.deltaX, this.pY = a2.deltaY;
    var b2 = $(a2.direction);
    b2 && (a2.additionalEvent = this.options.event + b2), this._super.emit.call(this, a2);
  } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() {
    return [jb];
  }, attrTest: function(a2) {
    return this._super.attrTest.call(this, a2) && (Math.abs(a2.scale - 1) > this.options.threshold || this.state & ob);
  }, emit: function(a2) {
    if (1 !== a2.scale) {
      var b2 = a2.scale < 1 ? "in" : "out";
      a2.additionalEvent = this.options.event + b2;
    }
    this._super.emit.call(this, a2);
  } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function() {
    return [hb];
  }, process: function(a2) {
    var b2 = this.options, c2 = a2.pointers.length === b2.pointers, d2 = a2.distance < b2.threshold, f2 = a2.deltaTime > b2.time;
    if (this._input = a2, !d2 || !c2 || a2.eventType & (Ga | Ha) && !f2) this.reset();
    else if (a2.eventType & Ea) this.reset(), this._timer = e(function() {
      this.state = rb, this.tryEmit();
    }, b2.time, this);
    else if (a2.eventType & Ga) return rb;
    return tb;
  }, reset: function() {
    clearTimeout(this._timer);
  }, emit: function(a2) {
    this.state === rb && (a2 && a2.eventType & Ga ? this.manager.emit(this.options.event + "up", a2) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
  } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() {
    return [jb];
  }, attrTest: function(a2) {
    return this._super.attrTest.call(this, a2) && (Math.abs(a2.rotation) > this.options.threshold || this.state & ob);
  } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: Na | Oa, pointers: 1 }, getTouchAction: function() {
    return ba.prototype.getTouchAction.call(this);
  }, attrTest: function(a2) {
    var b2, c2 = this.options.direction;
    return c2 & (Na | Oa) ? b2 = a2.overallVelocity : c2 & Na ? b2 = a2.overallVelocityX : c2 & Oa && (b2 = a2.overallVelocityY), this._super.attrTest.call(this, a2) && c2 & a2.offsetDirection && a2.distance > this.options.threshold && a2.maxPointers == this.options.pointers && qa(b2) > this.options.velocity && a2.eventType & Ga;
  }, emit: function(a2) {
    var b2 = $(a2.offsetDirection);
    b2 && this.manager.emit(this.options.event + b2, a2), this.manager.emit(this.options.event, a2);
  } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function() {
    return [ib];
  }, process: function(a2) {
    var b2 = this.options, c2 = a2.pointers.length === b2.pointers, d2 = a2.distance < b2.threshold, f2 = a2.deltaTime < b2.time;
    if (this.reset(), a2.eventType & Ea && 0 === this.count) return this.failTimeout();
    if (d2 && f2 && c2) {
      if (a2.eventType != Ga) return this.failTimeout();
      var g2 = this.pTime ? a2.timeStamp - this.pTime < b2.interval : true, h2 = !this.pCenter || H(this.pCenter, a2.center) < b2.posThreshold;
      this.pTime = a2.timeStamp, this.pCenter = a2.center, h2 && g2 ? this.count += 1 : this.count = 1, this._input = a2;
      var i2 = this.count % b2.taps;
      if (0 === i2) return this.hasRequireFailures() ? (this._timer = e(function() {
        this.state = rb, this.tryEmit();
      }, b2.interval, this), ob) : rb;
    }
    return tb;
  }, failTimeout: function() {
    return this._timer = e(function() {
      this.state = tb;
    }, this.options.interval, this), tb;
  }, reset: function() {
    clearTimeout(this._timer);
  }, emit: function() {
    this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
  } }), ha.VERSION = "2.0.7", ha.defaults = { domEvents: false, touchAction: gb, enable: true, inputTarget: null, inputClass: null, preset: [[ea, { enable: false }], [ca, { enable: false }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };
  var ub = 1, vb = 2;
  ia.prototype = { set: function(a2) {
    return la(this.options, a2), a2.touchAction && this.touchAction.update(), a2.inputTarget && (this.input.destroy(), this.input.target = a2.inputTarget, this.input.init()), this;
  }, stop: function(a2) {
    this.session.stopped = a2 ? vb : ub;
  }, recognize: function(a2) {
    var b2 = this.session;
    if (!b2.stopped) {
      this.touchAction.preventDefaults(a2);
      var c2, d2 = this.recognizers, e2 = b2.curRecognizer;
      (!e2 || e2 && e2.state & rb) && (e2 = b2.curRecognizer = null);
      for (var f2 = 0; f2 < d2.length; ) c2 = d2[f2], b2.stopped === vb || e2 && c2 != e2 && !c2.canRecognizeWith(e2) ? c2.reset() : c2.recognize(a2), !e2 && c2.state & (ob | pb | qb) && (e2 = b2.curRecognizer = c2), f2++;
    }
  }, get: function(a2) {
    if (a2 instanceof Y) return a2;
    for (var b2 = this.recognizers, c2 = 0; c2 < b2.length; c2++) if (b2[c2].options.event == a2) return b2[c2];
    return null;
  }, add: function(a2) {
    if (f(a2, "add", this)) return this;
    var b2 = this.get(a2.options.event);
    return b2 && this.remove(b2), this.recognizers.push(a2), a2.manager = this, this.touchAction.update(), a2;
  }, remove: function(a2) {
    if (f(a2, "remove", this)) return this;
    if (a2 = this.get(a2)) {
      var b2 = this.recognizers, c2 = r(b2, a2);
      -1 !== c2 && (b2.splice(c2, 1), this.touchAction.update());
    }
    return this;
  }, on: function(a2, b2) {
    if (a2 !== d && b2 !== d) {
      var c2 = this.handlers;
      return g(q(a2), function(a3) {
        c2[a3] = c2[a3] || [], c2[a3].push(b2);
      }), this;
    }
  }, off: function(a2, b2) {
    if (a2 !== d) {
      var c2 = this.handlers;
      return g(q(a2), function(a3) {
        b2 ? c2[a3] && c2[a3].splice(r(c2[a3], b2), 1) : delete c2[a3];
      }), this;
    }
  }, emit: function(a2, b2) {
    this.options.domEvents && ka(a2, b2);
    var c2 = this.handlers[a2] && this.handlers[a2].slice();
    if (c2 && c2.length) {
      b2.type = a2, b2.preventDefault = function() {
        b2.srcEvent.preventDefault();
      };
      for (var d2 = 0; d2 < c2.length; ) c2[d2](b2), d2++;
    }
  }, destroy: function() {
    this.element && ja(this, false), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
  } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });
  var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
  wb.Hammer = ha, "function" == typeof define && define.amd ? define(function() {
    return ha;
  }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
})(window, document, "Hammer");
/*!
 * ApexCharts v5.15.0
 * (c) 2018-2026 ApexCharts
 */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ApexCharts = e();
})(this, function() {
  "use strict";
  var t = Object.defineProperty, e = Object.defineProperties, s = Object.getOwnPropertyDescriptors, i = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable, r = (e2, s2, i2) => s2 in e2 ? t(e2, s2, { enumerable: true, configurable: true, writable: true, value: i2 }) : e2[s2] = i2, n = (t2, e2) => {
    for (var s2 in e2 || (e2 = {})) a.call(e2, s2) && r(t2, s2, e2[s2]);
    if (i) for (var s2 of i(e2)) o.call(e2, s2) && r(t2, s2, e2[s2]);
    return t2;
  }, l = (t2, i2) => e(t2, s(i2)), h = (t2, e2, s2) => r(t2, "symbol" != typeof e2 ? e2 + "" : e2, s2);
  class c {
    static isSSR() {
      return "undefined" == typeof window || "undefined" == typeof document;
    }
    static isBrowser() {
      return !this.isSSR();
    }
    static hasAPI(t2) {
      return !this.isSSR() && void 0 !== window[t2];
    }
    static getApex() {
      return "undefined" != typeof window && window.Apex ? window.Apex : "undefined" != typeof global && global.Apex ? global.Apex : {};
    }
  }
  class d {
    constructor(t2, e2 = null) {
      this.nodeName = t2, this.namespaceURI = e2, this.attributes = /* @__PURE__ */ new Map(), this.children = [], this.textContent = "", this.style = {}, this.classList = new g(), this.parentNode = null, this._ssrWidth = void 0, this._ssrHeight = void 0, this._ssrMode = void 0;
    }
    setAttribute(t2, e2) {
      this.attributes.set(t2, e2);
    }
    getAttribute(t2) {
      return this.attributes.get(t2);
    }
    removeAttribute(t2) {
      this.attributes.delete(t2);
    }
    hasAttribute(t2) {
      return this.attributes.has(t2);
    }
    appendChild(t2) {
      if (t2 && t2 !== this) {
        if (t2.parentNode && t2.parentNode !== this) t2.parentNode.removeChild(t2);
        else if (t2.parentNode === this) {
          const e2 = this.children.indexOf(t2);
          -1 !== e2 && this.children.splice(e2, 1);
        }
        t2.parentNode = this, this.children.push(t2);
      }
      return t2;
    }
    removeChild(t2) {
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (this.children.splice(e2, 1), t2.parentNode = null), t2;
    }
    insertBefore(t2, e2) {
      if (!e2) return this.appendChild(t2);
      if (t2.parentNode && t2.parentNode !== this) t2.parentNode.removeChild(t2);
      else if (t2.parentNode === this) {
        const e3 = this.children.indexOf(t2);
        -1 !== e3 && this.children.splice(e3, 1);
      }
      const s2 = this.children.indexOf(e2);
      return -1 !== s2 && (t2.parentNode = this, this.children.splice(s2, 0, t2)), t2;
    }
    cloneNode(t2 = false) {
      const e2 = new d(this.nodeName, this.namespaceURI);
      return e2.textContent = this.textContent, this.attributes.forEach((t3, s2) => {
        e2.attributes.set(s2, t3);
      }), Object.assign(e2.style, this.style), t2 && this.children.forEach((t3) => {
        t3.cloneNode && e2.appendChild(t3.cloneNode(true));
      }), e2;
    }
    getBoundingClientRect() {
      return { width: this._ssrWidth || 0, height: this._ssrHeight || 0, top: 0, left: 0, right: this._ssrWidth || 0, bottom: this._ssrHeight || 0, x: 0, y: 0 };
    }
    getRootNode() {
      let t2 = this;
      for (; t2.parentNode; ) t2 = t2.parentNode;
      return t2;
    }
    querySelector() {
      return null;
    }
    querySelectorAll() {
      return [];
    }
    getElementsByClassName() {
      return [];
    }
    addEventListener() {
    }
    removeEventListener() {
    }
    get childNodes() {
      return this.children;
    }
    toString() {
      let t2 = "";
      if (this.attributes.forEach((e3, s2) => {
        t2 += ` ${s2}="${e3}"`;
      }), 0 === this.children.length && !this.textContent) return `<${this.nodeName}${t2}/>`;
      const e2 = this.children.map((t3) => t3.toString()).join("");
      return `<${this.nodeName}${t2}>${this.textContent}${e2}</${this.nodeName}>`;
    }
    get innerHTML() {
      return this.children.map((t2) => t2.toString()).join("");
    }
    set innerHTML(t2) {
      this.children = [], this.textContent = t2;
    }
    get outerHTML() {
      return this.toString();
    }
    get isConnected() {
      return true;
    }
  }
  class g {
    constructor() {
      this.classes = /* @__PURE__ */ new Set();
    }
    add(...t2) {
      t2.forEach((t3) => this.classes.add(t3));
    }
    remove(...t2) {
      t2.forEach((t3) => this.classes.delete(t3));
    }
    contains(t2) {
      return this.classes.has(t2);
    }
    toggle(t2, e2) {
      return true === e2 ? (this.classes.add(t2), true) : false === e2 || this.classes.has(t2) ? (this.classes.delete(t2), false) : (this.classes.add(t2), true);
    }
    toString() {
      return Array.from(this.classes).join(" ");
    }
  }
  class p {
    constructor() {
      this.SVGNS = "http://www.w3.org/2000/svg", this.XLINKNS = "http://www.w3.org/1999/xlink";
    }
    createElementNS(t2, e2) {
      return new d(e2, t2);
    }
    createTextNode(t2) {
      const e2 = { nodeName: "#text", nodeType: 3, textContent: t2, toString: () => e2.textContent };
      return e2;
    }
    querySelector() {
      return null;
    }
    querySelectorAll() {
      return [];
    }
    getComputedStyle() {
      return {};
    }
    getBoundingClientRect(t2) {
      return t2 && t2.getBoundingClientRect ? t2.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, x: 0, y: 0 };
    }
    createXMLSerializer() {
      return { serializeToString: (t2) => t2.toString ? t2.toString() : "" };
    }
    createDOMParser() {
      return { parseFromString(t2, e2) {
        const s2 = new d("root");
        return s2.innerHTML = t2, { documentElement: s2 };
      } };
    }
  }
  let u = null, x = null, f = null;
  class b {
    static init() {
      c.isSSR() && !u && (u = new p());
    }
    static createElement(t2) {
      return c.isSSR() ? (u || this.init(), u.createElementNS(null, t2)) : document.createElement(t2);
    }
    static createElementNS(t2, e2) {
      return c.isSSR() ? (u || this.init(), u.createElementNS(t2, e2)) : document.createElementNS(t2, e2);
    }
    static createTextNode(t2) {
      return c.isSSR() ? (u || this.init(), u.createTextNode(t2)) : document.createTextNode(t2);
    }
    static querySelector(t2) {
      return c.isSSR() ? null : document.querySelector(t2);
    }
    static querySelectorAll(t2) {
      return c.isSSR() ? [] : document.querySelectorAll(t2);
    }
    static getComputedStyle(t2) {
      return c.isSSR() ? {} : window.getComputedStyle(t2);
    }
    static getBoundingClientRect(t2) {
      return c.isSSR() ? (u || this.init(), u.getBoundingClientRect(t2)) : t2 ? t2.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, x: 0, y: 0 };
    }
    static getXMLSerializer() {
      return c.isSSR() ? (u || this.init(), x || (x = u.createXMLSerializer()), x) : (x || (x = new XMLSerializer()), x);
    }
    static getDOMParser() {
      return c.isSSR() ? (u || this.init(), f || (f = u.createDOMParser()), f) : (f || (f = new DOMParser()), f);
    }
    static addWindowEventListener(t2, e2, s2) {
      c.isBrowser() && window.addEventListener(t2, e2, s2);
    }
    static removeWindowEventListener(t2, e2, s2) {
      c.isBrowser() && window.removeEventListener(t2, e2, s2);
    }
    static requestAnimationFrame(t2) {
      return c.isBrowser() ? window.requestAnimationFrame(t2) : (t2(0), null);
    }
    static cancelAnimationFrame(t2) {
      c.isBrowser() && t2 && window.cancelAnimationFrame(t2);
    }
    static elementExists(t2) {
      return !!t2 && (c.isSSR() ? true === t2._ssrMode || void 0 !== t2.nodeName : !!t2.getRootNode && (t2.getRootNode({ composed: true }) === document || t2.isConnected));
    }
    static getWindow() {
      return c.isBrowser() ? window : null;
    }
    static getDocument() {
      return c.isBrowser() ? document : null;
    }
    static _getShim() {
      return u;
    }
    static _resetShim() {
      u = null, x = null, f = null;
    }
  }
  let m = class t2 {
    static isObject(t3) {
      return t3 && "object" == typeof t3 && !Array.isArray(t3);
    }
    static is(t3, e2) {
      return Object.prototype.toString.call(e2) === "[object " + t3 + "]";
    }
    static isSafari() {
      return c.isBrowser() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    static extend(t3, e2) {
      const s2 = Object.assign({}, t3);
      return this.isObject(t3) && this.isObject(e2) && Object.keys(e2).forEach((i2) => {
        this.isObject(e2[i2]) ? i2 in t3 ? s2[i2] = this.extend(t3[i2], e2[i2]) : Object.assign(s2, { [i2]: e2[i2] }) : Object.assign(s2, { [i2]: e2[i2] });
      }), s2;
    }
    static extendArray(e2, s2) {
      const i2 = [];
      return e2.map((e3) => {
        i2.push(t2.extend(s2, e3));
      }), e2 = i2;
    }
    static monthMod(t3) {
      return t3 % 12;
    }
    static clone(t3, e2 = /* @__PURE__ */ new WeakMap(), s2 = false) {
      if (null === t3 || "object" != typeof t3) return t3;
      if (e2.has(t3)) return e2.get(t3);
      let i2;
      if (Array.isArray(t3)) if (s2) i2 = t3.slice();
      else {
        i2 = [], e2.set(t3, i2);
        for (let s3 = 0; s3 < t3.length; s3++) i2[s3] = this.clone(t3[s3], e2, false);
      }
      else if (t3 instanceof Date) i2 = new Date(t3.getTime());
      else if (s2) i2 = Object.assign({}, t3);
      else {
        i2 = {}, e2.set(t3, i2);
        for (const s3 in t3) Object.prototype.hasOwnProperty.call(t3, s3) && (i2[s3] = this.clone(t3[s3], e2, false));
      }
      return i2;
    }
    static shallowClone(t3) {
      return null === t3 || "object" != typeof t3 ? t3 : Array.isArray(t3) ? t3.slice() : Object.assign({}, t3);
    }
    static shallowEqual(t3, e2) {
      if (t3 === e2) return true;
      if (!t3 || !e2) return false;
      if ("object" != typeof t3 || "object" != typeof e2) return t3 === e2;
      const s2 = Object.keys(t3), i2 = Object.keys(e2);
      if (s2.length !== i2.length) return false;
      for (const i3 of s2) if (t3[i3] !== e2[i3]) return false;
      return true;
    }
    static log10(t3) {
      return Math.log(t3) / Math.LN10;
    }
    static roundToBase10(t3) {
      return Math.pow(10, Math.floor(Math.log10(t3)));
    }
    static roundToBase(t3, e2) {
      return Math.pow(e2, Math.floor(Math.log(t3) / Math.log(e2)));
    }
    static parseNumber(t3) {
      return "number" == typeof t3 || null === t3 ? t3 : parseFloat(t3);
    }
    static stripNumber(t3, e2 = 2) {
      return Number.isInteger(t3) ? t3 : parseFloat(t3.toPrecision(e2));
    }
    static randomId() {
      return (Math.random() + 1).toString(36).substring(4);
    }
    static noExponents(t3) {
      return t3.toString().includes("e") ? Math.round(t3) : t3;
    }
    static elementExists(t3) {
      return !(!t3 || !t3.isConnected);
    }
    static isInShadowDOM(e2) {
      if (!e2 || !e2.getRootNode) return false;
      const s2 = e2.getRootNode();
      return s2 && s2 !== document && t2.is("ShadowRoot", s2);
    }
    static getShadowRootHost(e2) {
      if (!t2.isInShadowDOM(e2)) return null;
      return e2.getRootNode().host || null;
    }
    static getDimensions(t3) {
      if (!t3) return [0, 0];
      if (c.isSSR()) return [t3._ssrWidth || 400, t3._ssrHeight || 300];
      let e2;
      try {
        e2 = getComputedStyle(t3, null);
      } catch (e3) {
        return [t3.clientWidth || 0, t3.clientHeight || 0];
      }
      let s2 = t3.clientWidth, i2 = t3.clientHeight;
      if (!s2 || !i2) {
        const e3 = t3.getBoundingClientRect();
        s2 = s2 || e3.width, i2 = i2 || e3.height;
      }
      return i2 -= parseFloat(e2.paddingTop) + parseFloat(e2.paddingBottom), s2 -= parseFloat(e2.paddingLeft) + parseFloat(e2.paddingRight), [s2, i2];
    }
    static getBoundingClientRect(t3) {
      if (!t3) return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, x: 0, y: 0 };
      if (c.isSSR()) return b.getBoundingClientRect(t3);
      const e2 = t3.getBoundingClientRect();
      return { top: e2.top, right: e2.right, bottom: e2.bottom, left: e2.left, width: t3.clientWidth, height: t3.clientHeight, x: e2.left, y: e2.top };
    }
    static getLargestStringFromArr(t3) {
      return t3.reduce((t4, e2) => (Array.isArray(e2) && (e2 = e2.reduce((t5, e3) => t5.length > e3.length ? t5 : e3)), t4.length > e2.length ? t4 : e2), 0);
    }
    static hexToRgba(t3 = "#999999", e2 = 0.6) {
      "#" !== t3.substring(0, 1) && (t3 = "#999999");
      const s2 = t3.replace("#", ""), i2 = s2.match(new RegExp("(.{" + s2.length / 3 + "})", "g")) || [];
      for (let t4 = 0; t4 < i2.length; t4++) i2[t4] = parseInt(1 === i2[t4].length ? i2[t4] + i2[t4] : i2[t4], 16);
      return void 0 !== e2 && i2.push(e2), "rgba(" + i2.join(",") + ")";
    }
    static getOpacityFromRGBA(t3) {
      return parseFloat(t3.replace(/^.*,(.+)\)/, "$1"));
    }
    static parseHex(t3) {
      if ("string" != typeof t3) return null;
      let e2 = t3.trim().replace("#", "");
      return 3 === e2.length && (e2 = e2.split("").map((t4) => t4 + t4).join("")), /^[0-9a-fA-F]{6}$/.test(e2) ? [parseInt(e2.slice(0, 2), 16), parseInt(e2.slice(2, 4), 16), parseInt(e2.slice(4, 6), 16)] : null;
    }
    static relativeLuminance([t3, e2, s2]) {
      const i2 = (t4) => {
        const e3 = t4 / 255;
        return e3 <= 0.03928 ? e3 / 12.92 : Math.pow((e3 + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * i2(t3) + 0.7152 * i2(e2) + 0.0722 * i2(s2);
    }
    static getContrastRatio(e2, s2) {
      const i2 = t2.parseHex(e2), a2 = t2.parseHex(s2);
      if (!i2 || !a2) return 0;
      const o2 = t2.relativeLuminance(i2), r2 = t2.relativeLuminance(a2);
      return (Math.max(o2, r2) + 0.05) / (Math.min(o2, r2) + 0.05);
    }
    static rgb2hex(t3) {
      return (t3 = t3.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t3.length ? "#" + ("0" + parseInt(t3[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[3], 10).toString(16)).slice(-2) : "";
    }
    shadeRGBColor(t3, e2) {
      const s2 = e2.split(","), i2 = t3 < 0 ? 0 : 255, a2 = t3 < 0 ? -1 * t3 : t3, o2 = parseInt(s2[0].slice(4), 10), r2 = parseInt(s2[1], 10), n2 = parseInt(s2[2], 10);
      return "rgb(" + (Math.round((i2 - o2) * a2) + o2) + "," + (Math.round((i2 - r2) * a2) + r2) + "," + (Math.round((i2 - n2) * a2) + n2) + ")";
    }
    shadeHexColor(t3, e2) {
      const s2 = parseInt(e2.slice(1), 16), i2 = t3 < 0 ? 0 : 255, a2 = t3 < 0 ? -1 * t3 : t3, o2 = s2 >> 16, r2 = s2 >> 8 & 255, n2 = 255 & s2;
      return "#" + (16777216 + 65536 * (Math.round((i2 - o2) * a2) + o2) + 256 * (Math.round((i2 - r2) * a2) + r2) + (Math.round((i2 - n2) * a2) + n2)).toString(16).slice(1);
    }
    shadeColor(e2, s2) {
      return t2.isColorHex(s2) ? this.shadeHexColor(e2, s2) : this.shadeRGBColor(e2, s2);
    }
    static isColorHex(t3) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t3);
    }
    static isCSSVariable(t3) {
      if ("string" != typeof t3) return false;
      const e2 = t3.trim();
      return e2.startsWith("var(") && e2.endsWith(")");
    }
    static getThemeColor(e2) {
      if (!t2.isCSSVariable(e2)) return e2;
      if (c.isSSR()) return e2;
      const s2 = document.createElement("div");
      let i2;
      s2.style.cssText = "position:fixed; left: -9999px; visibility:hidden;", s2.style.color = e2, document.body.appendChild(s2);
      try {
        i2 = window.getComputedStyle(s2).color;
      } finally {
        s2.parentNode && s2.parentNode.removeChild(s2);
      }
      return i2;
    }
    static applyOpacityToColor(t3, e2) {
      const s2 = Number(e2);
      if (!Number.isFinite(s2)) return t3;
      if (s2 <= 0) return "transparent";
      if (s2 >= 1) return t3;
      return `color-mix(in srgb, ${t3} ${Math.round(100 * s2)}%, transparent)`;
    }
    static getPolygonPos(t3, e2) {
      const s2 = [], i2 = 2 * Math.PI / e2;
      for (let a2 = 0; a2 < e2; a2++) {
        const e3 = {};
        e3.x = t3 * Math.sin(a2 * i2), e3.y = -t3 * Math.cos(a2 * i2), s2.push(e3);
      }
      return s2;
    }
    static polarToCartesian(t3, e2, s2, i2) {
      const a2 = (i2 - 90) * Math.PI / 180;
      return { x: t3 + s2 * Math.cos(a2), y: e2 + s2 * Math.sin(a2) };
    }
    static escapeString(t3, e2 = "x") {
      let s2 = t3.toString().slice();
      return s2 = s2.replace(/[` ~!@#$%^&*()|+=?;:'",.<>{}[\]\\/]/gi, e2), s2;
    }
    static negToZero(t3) {
      return t3 < 0 ? 0 : t3;
    }
    static moveIndexInArray(t3, e2, s2) {
      if (s2 >= t3.length) {
        let e3 = s2 - t3.length + 1;
        for (; e3--; ) t3.push(void 0);
      }
      return t3.splice(s2, 0, t3.splice(e2, 1)[0]), t3;
    }
    static extractNumber(t3) {
      return parseFloat(t3.replace(/[^\d.]*/g, ""));
    }
    static findAncestor(t3, e2) {
      for (; (t3 = t3.parentElement) && !t3.classList.contains(e2); ) ;
      return t3;
    }
    static setELstyles(t3, e2) {
      for (const s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && (t3.style.key = e2[s2]);
    }
    static preciseAddition(t3, e2) {
      const s2 = (String(t3).split(".")[1] || "").length, i2 = (String(e2).split(".")[1] || "").length, a2 = Math.pow(10, Math.max(s2, i2));
      return (Math.round(t3 * a2) + Math.round(e2 * a2)) / a2;
    }
    static isNumber(t3) {
      return !isNaN(t3) && parseFloat(String(Number(t3))) === t3 && !isNaN(parseInt(t3, 10));
    }
    static isFloat(t3) {
      return Number(t3) === t3 && t3 % 1 != 0;
    }
    static isMsEdge() {
      if (c.isSSR()) return false;
      const t3 = window.navigator.userAgent, e2 = t3.indexOf("Edge/");
      return e2 > 0 && parseInt(t3.substring(e2 + 5, t3.indexOf(".", e2)), 10);
    }
    static getGCD(t3, e2, s2 = 7) {
      let i2 = Math.pow(10, s2 - Math.floor(Math.log10(Math.max(t3, e2))));
      for (i2 > 1 ? (t3 = Math.round(Math.abs(t3) * i2), e2 = Math.round(Math.abs(e2) * i2)) : i2 = 1; e2; ) {
        const s3 = e2;
        e2 = t3 % e2, t3 = s3;
      }
      return t3 / i2;
    }
    static getPrimeFactors(t3) {
      const e2 = [];
      let s2 = 2;
      for (; t3 >= 2; ) t3 % s2 == 0 ? (e2.push(s2), t3 /= s2) : s2++;
      return e2;
    }
    static mod(t3, e2, s2 = 7) {
      const i2 = Math.pow(10, s2 - Math.floor(Math.log10(Math.max(t3, e2))));
      return (t3 = Math.round(Math.abs(t3) * i2)) % (e2 = Math.round(Math.abs(e2) * i2)) / i2;
    }
  };
  class y {
    constructor(t2) {
      this.w = t2, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    isValidDate(t2) {
      return "number" != typeof t2 && !isNaN(this.parseDate(t2));
    }
    getTimeStamp(t2) {
      if (!Date.parse(t2)) return t2;
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t2).toISOString().substr(0, 25)).getTime() : new Date(t2).getTime();
    }
    getDate(t2) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t2).toUTCString()) : new Date(t2);
    }
    parseDate(t2) {
      const e2 = Date.parse(t2);
      if (!isNaN(e2)) return this.getTimeStamp(t2);
      let s2 = Date.parse(t2.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return s2 = this.getTimeStamp(s2), s2;
    }
    parseDateWithTimezone(t2) {
      return Date.parse(t2.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    }
    formatDate(t2, e2) {
      const s2 = this.w.globals.locale, i2 = this.w.config.xaxis.labels.datetimeUTC, a2 = ["\0", ...s2.months], o2 = ["", ...s2.shortMonths], r2 = ["", ...s2.days], n2 = ["", ...s2.shortDays];
      function l2(t3, e3 = 2) {
        let s3 = t3 + "";
        for (; s3.length < e3; ) s3 = "0" + s3;
        return s3;
      }
      const h2 = i2 ? t2.getUTCFullYear() : t2.getFullYear();
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])yyyy+/g, "$1" + h2)).replace(/(^|[^\\])yy/g, "$1" + h2.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h2);
      const c2 = (i2 ? t2.getUTCMonth() : t2.getMonth()) + 1;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])MMMM+/g, "$1" + a2[0])).replace(/(^|[^\\])MMM/g, "$1" + o2[0])).replace(/(^|[^\\])MM/g, "$1" + l2(c2))).replace(/(^|[^\\])M/g, "$1" + c2);
      const d2 = i2 ? t2.getUTCDate() : t2.getDate();
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])dddd+/g, "$1" + r2[0])).replace(/(^|[^\\])ddd/g, "$1" + n2[0])).replace(/(^|[^\\])dd/g, "$1" + l2(d2))).replace(/(^|[^\\])d/g, "$1" + d2);
      const g2 = i2 ? t2.getUTCHours() : t2.getHours(), p2 = g2 > 12 ? g2 - 12 : 0 === g2 ? 12 : g2;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])HH+/g, "$1" + l2(g2))).replace(/(^|[^\\])H/g, "$1" + g2)).replace(/(^|[^\\])hh+/g, "$1" + l2(p2))).replace(/(^|[^\\])h/g, "$1" + p2);
      const u2 = i2 ? t2.getUTCMinutes() : t2.getMinutes();
      e2 = (e2 = e2.replace(/(^|[^\\])mm+/g, "$1" + l2(u2))).replace(/(^|[^\\])m/g, "$1" + u2);
      const x2 = i2 ? t2.getUTCSeconds() : t2.getSeconds();
      e2 = (e2 = e2.replace(/(^|[^\\])ss+/g, "$1" + l2(x2))).replace(/(^|[^\\])s/g, "$1" + x2);
      let f2 = i2 ? t2.getUTCMilliseconds() : t2.getMilliseconds();
      e2 = e2.replace(/(^|[^\\])fff+/g, "$1" + l2(f2, 3)), f2 = Math.round(f2 / 10), e2 = e2.replace(/(^|[^\\])ff/g, "$1" + l2(f2)), f2 = Math.round(f2 / 10);
      const b2 = g2 < 12 ? "AM" : "PM";
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])f/g, "$1" + f2)).replace(/(^|[^\\])TT+/g, "$1" + b2)).replace(/(^|[^\\])T/g, "$1" + b2.charAt(0));
      const m2 = b2.toLowerCase();
      e2 = (e2 = e2.replace(/(^|[^\\])tt+/g, "$1" + m2)).replace(/(^|[^\\])t/g, "$1" + m2.charAt(0));
      let y2 = -t2.getTimezoneOffset(), w2 = i2 || !y2 ? "Z" : y2 > 0 ? "+" : "-";
      if (!i2) {
        y2 = Math.abs(y2);
        const t3 = y2 % 60;
        w2 += l2(Math.floor(y2 / 60)) + ":" + l2(t3);
      }
      e2 = e2.replace(/(^|[^\\])K/g, "$1" + w2);
      const v2 = (i2 ? t2.getUTCDay() : t2.getDay()) + 1;
      return e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(new RegExp(r2[0], "g"), r2[v2])).replace(new RegExp(n2[0], "g"), n2[v2])).replace(new RegExp(a2[0], "g"), a2[c2])).replace(new RegExp(o2[0], "g"), o2[c2])).replace(/\\(.)/g, "$1");
    }
    getTimeUnitsfromTimestamp(t2, e2) {
      const s2 = this.w;
      void 0 !== s2.config.xaxis.min && (t2 = s2.config.xaxis.min), void 0 !== s2.config.xaxis.max && (e2 = s2.config.xaxis.max);
      const i2 = this.getDate(t2), a2 = this.getDate(e2), o2 = this.formatDate(i2, "yyyy MM dd HH mm ss fff").split(" "), r2 = this.formatDate(a2, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(o2[6], 10), maxMillisecond: parseInt(r2[6], 10), minSecond: parseInt(o2[5], 10), maxSecond: parseInt(r2[5], 10), minMinute: parseInt(o2[4], 10), maxMinute: parseInt(r2[4], 10), minHour: parseInt(o2[3], 10), maxHour: parseInt(r2[3], 10), minDate: parseInt(o2[2], 10), maxDate: parseInt(r2[2], 10), minMonth: parseInt(o2[1], 10) - 1, maxMonth: parseInt(r2[1], 10) - 1, minYear: parseInt(o2[0], 10), maxYear: parseInt(r2[0], 10) };
    }
    isLeapYear(t2) {
      return t2 % 4 == 0 && t2 % 100 != 0 || t2 % 400 == 0;
    }
    calculcateLastDaysOfMonth(t2, e2, s2) {
      return this.determineDaysOfMonths(t2, e2) - s2;
    }
    determineDaysOfYear(t2) {
      let e2 = 365;
      return this.isLeapYear(t2) && (e2 = 366), e2;
    }
    determineRemainingDaysOfYear(t2, e2, s2) {
      let i2 = this.daysCntOfYear[e2] + s2;
      return e2 > 1 && this.isLeapYear(t2) && i2++, i2;
    }
    determineDaysOfMonths(t2, e2) {
      let s2 = 30;
      switch (t2 = m.monthMod(t2), true) {
        case this.months30.indexOf(t2) > -1:
          2 === t2 && (s2 = this.isLeapYear(e2) ? 29 : 28);
          break;
        case this.months31.indexOf(t2) > -1:
        default:
          s2 = 31;
      }
      return s2;
    }
    getDateFields(t2, e2) {
      const s2 = new Date(t2);
      return e2 ? { year: s2.getUTCFullYear(), month: s2.getUTCMonth(), date: s2.getUTCDate(), hour: s2.getUTCHours(), minute: s2.getUTCMinutes(), second: s2.getUTCSeconds(), ms: s2.getUTCMilliseconds(), weekday: s2.getUTCDay() } : { year: s2.getFullYear(), month: s2.getMonth(), date: s2.getDate(), hour: s2.getHours(), minute: s2.getMinutes(), second: s2.getSeconds(), ms: s2.getMilliseconds(), weekday: s2.getDay() };
    }
    addInterval(t2, e2, s2, i2) {
      const a2 = new Date(t2);
      if (i2) switch (e2) {
        case "year":
          a2.setUTCFullYear(a2.getUTCFullYear() + s2);
          break;
        case "month":
          a2.setUTCMonth(a2.getUTCMonth() + s2);
          break;
        case "week":
          a2.setUTCDate(a2.getUTCDate() + 7 * s2);
          break;
        case "day":
          a2.setUTCDate(a2.getUTCDate() + s2);
          break;
        case "hour":
          a2.setUTCHours(a2.getUTCHours() + s2);
          break;
        case "minute":
          a2.setUTCMinutes(a2.getUTCMinutes() + s2);
          break;
        case "second":
          a2.setUTCSeconds(a2.getUTCSeconds() + s2);
      }
      else switch (e2) {
        case "year":
          a2.setFullYear(a2.getFullYear() + s2);
          break;
        case "month":
          a2.setMonth(a2.getMonth() + s2);
          break;
        case "week":
          a2.setDate(a2.getDate() + 7 * s2);
          break;
        case "day":
          a2.setDate(a2.getDate() + s2);
          break;
        case "hour":
          a2.setHours(a2.getHours() + s2);
          break;
        case "minute":
          a2.setMinutes(a2.getMinutes() + s2);
          break;
        case "second":
          a2.setSeconds(a2.getSeconds() + s2);
      }
      return a2.getTime();
    }
    ceilToBoundary(t2, e2, s2, i2) {
      const a2 = new Date(t2);
      if (i2) switch (e2) {
        case "second": {
          const e3 = a2.getUTCSeconds(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getUTCMilliseconds() ? t2 : (a2.setUTCMilliseconds(0), a2.setUTCSeconds(i3), a2.getTime());
        }
        case "minute": {
          const e3 = a2.getUTCMinutes(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getUTCSeconds() && 0 === a2.getUTCMilliseconds() ? t2 : (a2.setUTCMilliseconds(0), a2.setUTCSeconds(0), a2.setUTCMinutes(i3), a2.getTime());
        }
        case "hour": {
          const e3 = a2.getUTCHours(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getUTCMinutes() && 0 === a2.getUTCSeconds() && 0 === a2.getUTCMilliseconds() ? t2 : (a2.setUTCMilliseconds(0), a2.setUTCSeconds(0), a2.setUTCMinutes(0), a2.setUTCHours(i3), a2.getTime());
        }
        case "day":
          return 0 === a2.getUTCHours() && 0 === a2.getUTCMinutes() && 0 === a2.getUTCSeconds() && 0 === a2.getUTCMilliseconds() ? t2 : (a2.setUTCMilliseconds(0), a2.setUTCSeconds(0), a2.setUTCMinutes(0), a2.setUTCHours(0), a2.setUTCDate(a2.getUTCDate() + 1), a2.getTime());
        case "week": {
          const e3 = 6048e5, i3 = Date.UTC(1970, 0, 5);
          a2.setUTCMilliseconds(0), a2.setUTCSeconds(0), a2.setUTCMinutes(0), a2.setUTCHours(0);
          const o2 = a2.getTime(), r2 = Math.ceil((o2 - i3) / e3), n2 = i3 + Math.ceil(r2 / s2) * s2 * e3;
          return n2 >= t2 ? n2 : n2 + s2 * e3;
        }
        case "month": {
          const e3 = a2.getUTCMonth(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 1 === a2.getUTCDate() && 0 === a2.getUTCHours() && 0 === a2.getUTCMinutes() && 0 === a2.getUTCSeconds() && 0 === a2.getUTCMilliseconds() ? t2 : (a2.setUTCMilliseconds(0), a2.setUTCSeconds(0), a2.setUTCMinutes(0), a2.setUTCHours(0), a2.setUTCDate(1), a2.setUTCMonth(i3), a2.getTime());
        }
        case "year": {
          const e3 = a2.getUTCFullYear(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getUTCMonth() && 1 === a2.getUTCDate() && 0 === a2.getUTCHours() && 0 === a2.getUTCMinutes() && 0 === a2.getUTCSeconds() && 0 === a2.getUTCMilliseconds() ? t2 : Date.UTC(i3, 0, 1);
        }
      }
      else switch (e2) {
        case "second": {
          const e3 = a2.getSeconds(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getMilliseconds() ? t2 : (a2.setMilliseconds(0), a2.setSeconds(i3), a2.getTime());
        }
        case "minute": {
          const e3 = a2.getMinutes(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getSeconds() && 0 === a2.getMilliseconds() ? t2 : (a2.setMilliseconds(0), a2.setSeconds(0), a2.setMinutes(i3), a2.getTime());
        }
        case "hour": {
          const e3 = a2.getHours(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getMinutes() && 0 === a2.getSeconds() && 0 === a2.getMilliseconds() ? t2 : (a2.setMilliseconds(0), a2.setSeconds(0), a2.setMinutes(0), a2.setHours(i3), a2.getTime());
        }
        case "day":
          return 0 === a2.getHours() && 0 === a2.getMinutes() && 0 === a2.getSeconds() && 0 === a2.getMilliseconds() ? t2 : (a2.setMilliseconds(0), a2.setSeconds(0), a2.setMinutes(0), a2.setHours(0), a2.setDate(a2.getDate() + 1), a2.getTime());
        case "week": {
          const e3 = 6048e5, i3 = new Date(1970, 0, 5).getTime();
          a2.setMilliseconds(0), a2.setSeconds(0), a2.setMinutes(0), a2.setHours(0);
          const o2 = a2.getTime(), r2 = Math.ceil((o2 - i3) / e3), n2 = i3 + Math.ceil(r2 / s2) * s2 * e3;
          return n2 >= t2 ? n2 : n2 + s2 * e3;
        }
        case "month": {
          const e3 = a2.getMonth(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 1 === a2.getDate() && 0 === a2.getHours() && 0 === a2.getMinutes() && 0 === a2.getSeconds() && 0 === a2.getMilliseconds() ? t2 : (a2.setMilliseconds(0), a2.setSeconds(0), a2.setMinutes(0), a2.setHours(0), a2.setDate(1), a2.setMonth(i3), a2.getTime());
        }
        case "year": {
          const e3 = a2.getFullYear(), i3 = Math.ceil(e3 / s2) * s2;
          return i3 === e3 && 0 === a2.getMonth() && 1 === a2.getDate() && 0 === a2.getHours() && 0 === a2.getMinutes() && 0 === a2.getSeconds() && 0 === a2.getMilliseconds() ? t2 : new Date(i3, 0, 1).getTime();
        }
      }
      return t2;
    }
    isAtBoundary(t2, e2, s2) {
      const i2 = this.getDateFields(t2, s2);
      switch (e2) {
        case "year":
          return 0 === i2.month && 1 === i2.date && 0 === i2.hour && 0 === i2.minute && 0 === i2.second && 0 === i2.ms;
        case "month":
          return 1 === i2.date && 0 === i2.hour && 0 === i2.minute && 0 === i2.second && 0 === i2.ms;
        case "day":
          return 0 === i2.hour && 0 === i2.minute && 0 === i2.second && 0 === i2.ms;
        case "hour":
          return 0 === i2.minute && 0 === i2.second && 0 === i2.ms;
        case "minute":
          return 0 === i2.second && 0 === i2.ms;
        case "second":
          return 0 === i2.ms;
      }
      return false;
    }
  }
  class w {
    constructor(t2) {
      this.w = t2, this.tooltipKeyFormat = "dd MMM";
    }
    xLabelFormat(t2, e2, s2, i2) {
      const a2 = this.w;
      if ("datetime" === a2.config.xaxis.type && void 0 === a2.config.xaxis.labels.formatter && void 0 === a2.config.tooltip.x.formatter) {
        const t3 = new y(this.w);
        return t3.formatDate(t3.getDate(e2), a2.config.tooltip.x.format);
      }
      return t2(e2, s2, i2);
    }
    defaultGeneralFormatter(t2) {
      return Array.isArray(t2) ? t2.map((t3) => t3) : t2;
    }
    defaultYFormatter(t2, e2) {
      const s2 = this.w;
      if (m.isNumber(t2)) if (0 !== s2.globals.yValueDecimal) t2 = t2.toFixed(void 0 !== e2.decimalsInFloat ? e2.decimalsInFloat : s2.globals.yValueDecimal);
      else {
        const e3 = t2.toFixed(0);
        t2 = Number(e3) === t2 ? e3 : t2.toFixed(1);
      }
      return t2;
    }
    setLabelFormatters() {
      const t2 = this.w, e2 = t2.formatters;
      return e2.xaxisTooltipFormatter = (t3) => this.defaultGeneralFormatter(t3), e2.ttKeyFormatter = (t3) => this.defaultGeneralFormatter(t3), e2.ttZFormatter = (t3) => t3, e2.legendFormatter = (t3) => this.defaultGeneralFormatter(t3), void 0 !== t2.config.xaxis.labels.formatter ? e2.xLabelFormatter = t2.config.xaxis.labels.formatter : e2.xLabelFormatter = (e3) => {
        if (m.isNumber(e3)) {
          if (!t2.config.xaxis.convertedCatToNumeric && "numeric" === t2.config.xaxis.type) {
            if (m.isNumber(t2.config.xaxis.decimalsInFloat)) return e3.toFixed(t2.config.xaxis.decimalsInFloat);
            {
              const s2 = t2.globals.maxX - t2.globals.minX;
              if (s2 > 0) {
                const t3 = s2 / 10, i2 = Math.max(0, -Math.floor(Math.log10(t3)));
                return e3.toFixed(i2);
              }
              return e3.toFixed(0);
            }
          }
          if (t2.globals.isBarHorizontal) {
            if (t2.globals.maxY - t2.globals.minYArr < 4) return e3.toFixed(1);
          }
          return e3.toFixed(0);
        }
        return e3;
      }, "function" == typeof t2.config.tooltip.x.formatter ? e2.ttKeyFormatter = t2.config.tooltip.x.formatter : e2.ttKeyFormatter = e2.xLabelFormatter, "function" == typeof t2.config.xaxis.tooltip.formatter && (e2.xaxisTooltipFormatter = t2.config.xaxis.tooltip.formatter), (Array.isArray(t2.config.tooltip.y) || void 0 !== t2.config.tooltip.y.formatter) && (e2.ttVal = t2.config.tooltip.y), void 0 !== t2.config.tooltip.z.formatter && (e2.ttZFormatter = t2.config.tooltip.z.formatter), void 0 !== t2.config.legend.formatter && (e2.legendFormatter = t2.config.legend.formatter), e2.yLabelFormatters = [], t2.config.yaxis.forEach((s2, i2) => {
        if (void 0 !== s2.labels.formatter) e2.yLabelFormatters[i2] = s2.labels.formatter;
        else if ("violin" === t2.config.chart.type) {
          const s3 = (t3) => "number" == typeof t3 && isFinite(t3) ? "" + Math.round(100 * t3) / 100 : t3;
          e2.yLabelFormatters[i2] = (e3) => t2.globals.xyCharts ? Array.isArray(e3) ? e3.map(s3) : s3(e3) : e3;
        } else e2.yLabelFormatters[i2] = (e3) => t2.globals.xyCharts ? Array.isArray(e3) ? e3.map((t3) => this.defaultYFormatter(t3, s2)) : this.defaultYFormatter(e3, s2) : e3;
      }), t2.globals;
    }
    heatmapLabelFormatters() {
      const t2 = this.w;
      if ("heatmap" === t2.config.chart.type) {
        t2.globals.yAxisScale[0].result = t2.seriesData.seriesNames.slice();
        const e2 = t2.seriesData.seriesNames.reduce((t3, e3) => t3.length > e3.length ? t3 : e3, 0);
        t2.globals.yAxisScale[0].niceMax = e2, t2.globals.yAxisScale[0].niceMin = e2;
      }
    }
  }
  const v = ({ isTimeline: t2, seriesIndex: e2, dataPointIndex: s2, y1: i2, y2: a2, w: o2 }) => {
    var r2;
    let n2 = o2.rangeData.seriesRangeStart[e2][s2], l2 = o2.rangeData.seriesRangeEnd[e2][s2], h2 = o2.labelData.labels[s2], c2 = o2.config.series[e2].name ? o2.config.series[e2].name : "";
    const d2 = o2.formatters.ttKeyFormatter, g2 = o2.config.tooltip.y.title.formatter, p2 = { w: o2, seriesIndex: e2, dataPointIndex: s2, start: n2, end: l2 };
    if ("function" == typeof g2 && (c2 = g2(c2, p2)), (null == (r2 = o2.config.series[e2].data[s2]) ? void 0 : r2.x) && (h2 = o2.config.series[e2].data[s2].x), !t2 && "datetime" === o2.config.xaxis.type) {
      h2 = new w(o2).xLabelFormat(o2.formatters.ttKeyFormatter, h2, h2, { i: void 0, dateFormatter: new y(o2).formatDate, w: o2 });
    }
    "function" == typeof d2 && (h2 = d2(h2, p2)), Number.isFinite(i2) && Number.isFinite(a2) && (n2 = i2, l2 = a2);
    let u2 = "", x2 = "";
    const f2 = o2.globals.colors[e2];
    if (void 0 === o2.config.tooltip.x.formatter) if ("datetime" === o2.config.xaxis.type) {
      const t3 = new y(o2);
      u2 = t3.formatDate(t3.getDate(n2), o2.config.tooltip.x.format), x2 = t3.formatDate(t3.getDate(l2), o2.config.tooltip.x.format);
    } else u2 = n2, x2 = l2;
    else u2 = o2.config.tooltip.x.formatter(n2), x2 = o2.config.tooltip.x.formatter(l2);
    return { start: n2, end: l2, startVal: u2, endVal: x2, ylabel: h2, color: f2, seriesName: c2 };
  }, A = (t2) => {
    let { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2, seriesIndex: r2, dataPointIndex: n2 } = t2;
    const l2 = t2.w.globals.tooltip.tooltipLabels.getFormatters(r2);
    a2 = l2.yLbFormatter(a2), o2 = l2.yLbFormatter(o2);
    const h2 = l2.yLbFormatter(t2.w.seriesData.series[r2][n2]);
    let c2 = "";
    const d2 = `<span class="value start-value">
  ${a2}
  </span> <span class="separator">-</span> <span class="value end-value">
  ${o2}
  </span>`;
    return c2 = t2.w.globals.comboCharts ? "rangeArea" === t2.w.config.series[r2].type || "rangeBar" === t2.w.config.series[r2].type ? d2 : `<span>${h2}</span>` : d2, '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e2 + '">' + (s2 || "") + '</span></div><div> <span class="category">' + i2 + ": </span> " + c2 + " </div></div>";
  };
  class C {
    constructor(t2) {
      this.opts = t2;
    }
    hideYAxis() {
      this.opts.yaxis[0].show = false, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = false, this.opts.yaxis[0].axisTicks.show = false, this.opts.yaxis[0].floating = true;
    }
    line() {
      return { dataLabels: { enabled: false }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    }
    sparkline(t2) {
      this.hideYAxis();
      return m.extend(t2, { grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: false }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } }, chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false } });
    }
    slope() {
      return this.hideYAxis(), { chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: true, formatter(t2, e2) {
        const s2 = e2.w.config.series[e2.seriesIndex].name;
        return null !== t2 ? s2 + ": " + t2 : "";
      }, background: { enabled: false }, offsetX: -5 }, grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: false }, crosshairs: { show: false } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: false }, tooltip: { shared: false, intersect: true, followCursor: true }, stroke: { width: 5, curve: "straight" } };
    }
    bar() {
      return { chart: { stacked: false }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: false } }, stroke: { width: 0, lineCap: "square" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: false, intersect: true }, xaxis: { tooltip: { enabled: false }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: false }, stroke: { width: 0 } } } };
    }
    funnel() {
      return this.hideYAxis(), l(n({}, this.bar()), { chart: { animations: { speed: 800, animateGradually: { enabled: false } } }, plotOptions: { bar: { horizontal: true, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: false, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } } });
    }
    pyramid() {
      return this.funnel();
    }
    gauge() {
      const t2 = this.radialBar();
      return l(n({}, t2), { plotOptions: { radialBar: { startAngle: -135, endAngle: 135, hollow: { margin: 0, size: "60%" }, track: { background: "#e7e7e7", strokeWidth: "100%", margin: 5 }, dataLabels: { name: { show: false }, value: { show: true, fontSize: "32px", fontWeight: 600, offsetY: 8 } } } } });
    }
    candlestick() {
      return { stroke: { width: 1 }, fill: { opacity: 1 }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: ({ seriesIndex: t2, dataPointIndex: e2, w: s2 }) => this._getBoxTooltip(s2, t2, e2, ["Open", "High", "", "Low", "Close"], "candlestick") }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    }
    boxPlot() {
      return { chart: { animations: { dynamicAnimation: { enabled: false } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: ({ seriesIndex: t2, dataPointIndex: e2, w: s2 }) => this._getBoxTooltip(s2, t2, e2, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot") }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    }
    violin() {
      return { chart: { zoom: { enabled: false }, animations: { dynamicAnimation: { enabled: false } } }, stroke: { width: 1, colors: ["#24292e"] }, fill: { opacity: 0.7 }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: ({ seriesIndex: t2, dataPointIndex: e2, w: s2 }) => this._getViolinTooltip(s2, t2, e2) }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    }
    rangeBar() {
      return { chart: { animations: { animateGradually: false } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: false, formatter(t2, { seriesIndex: e2, dataPointIndex: s2, w: i2 }) {
        const a2 = () => {
          const t3 = i2.rangeData.seriesRangeStart[e2][s2];
          return i2.rangeData.seriesRangeEnd[e2][s2] - t3;
        };
        return i2.globals.comboCharts ? "rangeBar" === i2.config.series[e2].type || "rangeArea" === i2.config.series[e2].type ? a2() : t2 : a2();
      }, background: { enabled: false }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: false, followCursor: true, custom: (t2) => t2.w.config.plotOptions && t2.w.config.plotOptions.bar && t2.w.config.plotOptions.bar.horizontal ? ((t3) => {
        const { color: e2, seriesName: s2, ylabel: i2, startVal: a2, endVal: o2 } = v(l(n({}, t3), { isTimeline: true }));
        return A(l(n({}, t3), { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 }));
      })(t2) : ((t3) => {
        const { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 } = v(t3);
        return A(l(n({}, t3), { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 }));
      })(t2) }, xaxis: { tickPlacement: "between", tooltip: { enabled: false }, crosshairs: { stroke: { width: 0 } } } };
    }
    dumbbell(t2) {
      var e2, s2;
      return (null == (e2 = t2.plotOptions.bar) ? void 0 : e2.barHeight) || (t2.plotOptions.bar.barHeight = 2), (null == (s2 = t2.plotOptions.bar) ? void 0 : s2.columnWidth) || (t2.plotOptions.bar.columnWidth = 2), t2;
    }
    area() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: false } };
    }
    rangeArea() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: false, shared: true, followCursor: true, custom: (t2) => ((t3) => {
        const { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 } = v(t3);
        return A(l(n({}, t3), { color: e2, seriesName: s2, ylabel: i2, start: a2, end: o2 }));
      })(t2) } };
    }
    brush(t2) {
      return m.extend(t2, { chart: { toolbar: { autoSelected: "selection", show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false }, stroke: { width: 1 }, tooltip: { enabled: false }, xaxis: { tooltip: { enabled: false } } });
    }
    stacked100(t2) {
      t2.dataLabels = t2.dataLabels || {}, t2.dataLabels.formatter = t2.dataLabels.formatter || void 0;
      const e2 = t2.dataLabels.formatter;
      t2.yaxis.forEach((e3, s2) => {
        t2.yaxis[s2].min = 0, t2.yaxis[s2].max = 100;
      });
      return "bar" === t2.chart.type && (t2.dataLabels.formatter = e2 || function(t3) {
        return "number" == typeof t3 && t3 ? t3.toFixed(0) + "%" : t3;
      }), t2;
    }
    stackedBars() {
      const t2 = this.bar();
      return l(n({}, t2), { plotOptions: l(n({}, t2.plotOptions), { bar: l(n({}, t2.plotOptions.bar), { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    }
    convertCatToNumeric(t2) {
      return t2.xaxis.convertedCatToNumeric = true, t2;
    }
    convertCatToNumericXaxis(t2, e2) {
      t2.xaxis.type = "numeric", t2.xaxis.labels = t2.xaxis.labels || {}, t2.xaxis.labels.formatter = t2.xaxis.labels.formatter || function(t3) {
        return m.isNumber(t3) ? Math.floor(t3) : t3;
      };
      const s2 = t2.xaxis.labels.formatter;
      let i2 = t2.xaxis.categories && t2.xaxis.categories.length ? t2.xaxis.categories : t2.labels;
      return e2 && e2.length && (i2 = e2.map((t3) => Array.isArray(t3) ? t3 : String(t3))), i2 && i2.length && (t2.xaxis.labels.formatter = function(t3) {
        return m.isNumber(t3) ? s2(i2[Math.floor(t3) - 1]) : s2(t3);
      }), t2.xaxis.categories = [], t2.labels = [], t2.xaxis.tickAmount = t2.xaxis.tickAmount || "dataPoints", t2;
    }
    bubble() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: false, intersect: true }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: true, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    }
    scatter() {
      return { dataLabels: { enabled: false }, tooltip: { shared: false, intersect: true }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    }
    heatmap() {
      return { chart: { stacked: false }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: true, marker: { show: false }, x: { show: false } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
    }
    treemap() {
      return { chart: { zoom: { enabled: false } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: true, width: 2, colors: ["#fff"] }, legend: { show: false }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: true, x: { show: false } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: false }, tooltip: { enabled: false } } };
    }
    pie() {
      return { chart: { toolbar: { show: false } }, plotOptions: { pie: { donut: { labels: { show: false } } } }, dataLabels: { formatter: (t2) => t2.toFixed(1) + "%", style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    donut() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: (t2) => t2.toFixed(1) + "%", style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    polarArea() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: (t2) => t2.toFixed(1) + "%", enabled: false }, stroke: { show: true, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    radar() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: false, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: false, intersect: true, followCursor: true }, grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: (t2) => t2, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: false }, crosshairs: { show: false } } };
    }
    radialBar() {
      return { chart: { animations: { dynamicAnimation: { enabled: true, speed: 800 } }, toolbar: { show: false } }, stroke: { lineCap: "butt" }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: false, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: false, position: "right" }, tooltip: { enabled: false, fillSeriesColor: true }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    }
    _getBoxTooltip(t2, e2, s2, i2, a2) {
      const o2 = t2.candleData.seriesCandleO[e2][s2], r2 = t2.candleData.seriesCandleH[e2][s2], n2 = t2.candleData.seriesCandleM[e2][s2], l2 = t2.candleData.seriesCandleL[e2][s2], h2 = t2.candleData.seriesCandleC[e2][s2], c2 = t2.config.series[e2];
      return c2.type && c2.type !== a2 ? `<div class="apexcharts-custom-tooltip">
          ${c2.name ? c2.name : "series-" + (e2 + 1)}: <strong>${t2.seriesData.series[e2][s2]}</strong>
        </div>` : `<div class="apexcharts-tooltip-box apexcharts-tooltip-${t2.config.chart.type}"><div>${i2[0]}: <span class="value">` + o2 + `</span></div><div>${i2[1]}: <span class="value">` + r2 + "</span></div>" + (n2 ? `<div>${i2[2]}: <span class="value">` + n2 + "</span></div>" : "") + `<div>${i2[3]}: <span class="value">` + l2 + `</span></div><div>${i2[4]}: <span class="value">` + h2 + "</span></div></div>";
    }
    _getViolinTooltip(t2, e2, s2) {
      var i2, a2, o2;
      const r2 = null == (i2 = t2.violinData.seriesViolinMin[e2]) ? void 0 : i2[s2], n2 = null == (a2 = t2.violinData.seriesViolinMax[e2]) ? void 0 : a2[s2], l2 = (null == (o2 = t2.violinData.seriesViolinPoints[e2]) ? void 0 : o2[s2]) || [], h2 = t2.config.series[e2].name || "series-" + (e2 + 1);
      return `<div class="apexcharts-tooltip-box apexcharts-tooltip-${t2.config.chart.type}"><div class="apexcharts-tooltip-violin-name">${h2}</div><div>Min: <span class="value">${r2}</span></div><div>Max: <span class="value">${n2}</span></div><div>Observations: <span class="value">${l2.length}</span></div></div>`;
    }
  }
  const S = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } };
  class k {
    constructor() {
      this.yAxis = { show: true, showAlways: false, showForNullSeries: true, seriesName: void 0, opposite: false, reversed: false, logarithmic: false, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: false, alignZero: false, max: void 0, min: void 0, floating: false, decimalsInFloat: void 0, labels: { show: true, showDuplicates: false, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: false, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: false, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: false, offsetX: 0 }, crosshairs: { show: true, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    init() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: true, speed: 800, animateGradually: { delay: 150, enabled: true }, dynamicAnimation: { enabled: true, speed: 350 }, chartTypeMorph: { enabled: true, speed: 600 }, respectReducedMotion: true, largeDatasetThreshold: 1e3 }, background: "", locales: [S], defaultLocale: "en", dropShadow: { enabled: false, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.7 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0, keyDown: void 0, keyUp: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: true, redrawOnWindowResize: true, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, injectStyleSheet: true, selection: { enabled: false, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: false }, brush: { enabled: false, autoScaleYaxis: true, target: void 0, targets: void 0 }, stacked: false, stackOnlyBar: true, stackType: "normal", toolbar: { show: true, offsetX: 0, offsetY: 0, tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: true, type: "x", autoScaleYaxis: false, allowMouseWheelZoom: true, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } }, accessibility: { enabled: true, description: void 0, announcements: { enabled: true }, keyboard: { enabled: true, navigation: { enabled: true, wrapAround: false } } }, dataReducer: { enabled: false, algorithm: "lttb", targetPoints: 250, threshold: 500 } }, parsing: { x: void 0, y: void 0 }, plotOptions: { line: { isSlopeChart: false, colors: { threshold: 0, colorAboveThreshold: void 0, colorBelowThreshold: void 0 } }, area: { fillTo: "origin" }, bar: { horizontal: false, columnWidth: "70%", barHeight: "70%", distributed: false, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: true, rangeBarGroupRows: false, hideZeroBarsWhenGrouped: false, isDumbbell: false, dumbbellColors: void 0, isFunnel: false, isFunnel3d: true, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: true, orientation: "horizontal", total: { enabled: false, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: true, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: true } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" }, points: { show: false, shape: "circle", size: 2.5, jitter: 0.5, maxPoints: 3e3, opacity: 0.9, fillColor: "series-dark", strokeColor: "#fff", strokeWidth: 1 } }, violin: { bandwidthScale: 1, normalize: "individual", points: { show: true, shape: "circle", size: 2.5, jitter: 0.5, constrainToViolin: true, maxPoints: 3e3, opacity: 0.9, fillColor: "series-dark", strokeColor: "#fff", strokeWidth: 1 } }, heatmap: { radius: 2, enableShades: true, shadeIntensity: 0.5, reverseNegativeShade: false, distributed: false, useFillColorAsStroke: false, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0, gradientLegend: { enabled: false, width: "70%", height: "70%", thickness: 12, align: "center", stops: 16, showLabels: true, showHoverValue: true, labelStyle: { fontSize: "11px", fontFamily: void 0, colors: void 0 }, arrow: { size: 8, color: void 0 }, formatter: void 0 } } }, funnel: { shape: "rectangle", lastShape: "flat" }, treemap: { enableShades: true, shadeIntensity: 0.5, distributed: false, reverseNegativeShade: false, useFillColorAsStroke: false, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 }, seriesTitle: { show: true, offsetY: 1, offsetX: 1, borderColor: "#000", borderWidth: 1, borderRadius: 2, style: { background: "rgba(0, 0, 0, 0.6)", color: "#fff", fontSize: "12px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 6, right: 6, top: 2, bottom: 2 } } } }, radialBar: { inverseOrder: false, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, shape: "arc", min: 0, max: 100, bands: [], bandsStyle: { strokeWidth: "40%", gap: 0, hideTrackWhenPresent: true }, ticks: { show: false, major: { count: 11, length: 10, width: 2, color: "#666", placement: "outside" }, minor: { count: 4, length: 5, width: 1, color: "#999", placement: "outside" }, labels: { show: false, offset: 6, fontSize: "11px", fontFamily: void 0, fontWeight: 400, color: "#666", formatter: (t2) => String(t2) } }, needle: { color: "#333", length: "85%", baseWidth: 4, tipWidth: 1, offsetY: 0, showValueArc: false, animation: { enabled: true, duration: 800, easing: "ease-out" } }, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: true, position: "front", stroke: void 0, strokeWidth: 1, strokeDasharray: void 0, dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: true, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: true, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: (t2) => t2 }, value: { show: true, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: (t2) => t2 + "%" }, total: { show: false, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: (t2) => t2.globals.seriesTotals.reduce((t3, e2) => t3 + e2, 0) / t2.seriesData.series.length + "%" } }, barLabels: { enabled: false, offsetX: 0, offsetY: 0, useSeriesColors: true, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: (t2) => t2, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: true, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: false, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: (t2) => t2 }, value: { show: true, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: (t2) => t2 }, total: { show: false, showAlways: false, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: (t2) => t2.globals.seriesTotals.reduce((t3, e2) => t3 + e2, 0) } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: true, enabledOnSeries: void 0, formatter: (t2) => null !== t2 ? t2 : "", textAnchor: "middle", distributed: false, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: true, foreColor: "#fff", backgroundColor: void 0, borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: true, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: true, showForSingleSeries: false, showForNullSeries: true, showForZeroSeries: true, floating: false, position: "bottom", horizontalAlign: "center", inverseOrder: false, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], clusterGroupedSeries: true, clusterGroupedSeriesOrientation: "vertical", labels: { colors: void 0, useSeriesColors: false }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: true }, onItemHover: { highlightDataSeries: true } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: true, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { hover: { filter: { type: "lighten" } }, active: { allowMultipleDataPointsSelection: false, filter: { type: "darken" } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: false, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: false, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: true, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: true, enabledOnSeries: void 0, shared: true, hideEmptySeries: false, followCursor: false, intersect: false, inverseOrder: false, arrow: true, custom: void 0, fillSeriesColor: false, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0, background: void 0 }, onDatasetHover: { highlightDataSeries: false }, x: { show: true, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: (t2) => t2 ? t2 + ": " : "" } }, z: { formatter: void 0, title: "Size: " }, marker: { show: true, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: false, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: false, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, trim: false, minHeight: void 0, maxHeight: 120, showDuplicates: true, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: true, datetimeFormatter: { year: "yyyy", month: "MMM", day: "dd MMM", hour: "HH:mm", minute: "HH:mm", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: true, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: true, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: false, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: true, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: false, left: 0, top: 0, blur: 1, opacity: 0.8 } }, tooltip: { enabled: true, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: false, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 }, accessibility: { colorBlindMode: "" } } };
    }
  }
  class D {
    constructor(t2) {
      this.opts = t2;
    }
    init({ responsiveOverride: t2 }) {
      var e2, s2, i2, a2, o2, r2, n2, l2, h2, d2;
      let g2 = this.opts;
      const p2 = new k(), u2 = new C(g2);
      g2 = this.normalizeAliasedChartType(g2), this.chartType = g2.chart.type, g2 = this.extendYAxis(g2), g2 = this.extendAnnotations(g2);
      let x2 = p2.init(), f2 = {};
      if (g2 && "object" == typeof g2) {
        let p3 = {};
        const b3 = ["line", "area", "bar", "candlestick", "boxPlot", "violin", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"], y2 = g2.chart.requestedType;
        p3 = "funnel" === y2 || "pyramid" === y2 ? u2[y2]() : "gauge" === y2 ? u2.gauge() : -1 !== b3.indexOf(g2.chart.type) ? u2[g2.chart.type]() : u2.line(), (null == (s2 = null == (e2 = g2.plotOptions) ? void 0 : e2.bar) ? void 0 : s2.isFunnel) && (p3 = u2.funnel()), g2.chart.stacked && "bar" === g2.chart.type && (p3 = u2.stackedBars()), (null == (i2 = g2.chart.brush) ? void 0 : i2.enabled) && (p3 = u2.brush(p3)), (null == (o2 = null == (a2 = g2.plotOptions) ? void 0 : a2.line) ? void 0 : o2.isSlopeChart) && (p3 = u2.slope()), g2.chart.stacked && "100%" === g2.chart.stackType && (g2 = u2.stacked100(g2)), (null == (n2 = null == (r2 = g2.plotOptions) ? void 0 : r2.bar) ? void 0 : n2.isDumbbell) && (g2 = u2.dumbbell(g2)), this.checkForDarkTheme(c.getApex()), this.checkForDarkTheme(g2), g2.xaxis = g2.xaxis || c.getApex().xaxis || {}, t2 || (g2.xaxis.convertedCatToNumeric = false), g2 = this.checkForCatToNumericXAxis(this.chartType, p3, g2), ((null == (l2 = g2.chart.sparkline) ? void 0 : l2.enabled) || (null == (d2 = null == (h2 = c.getApex().chart) ? void 0 : h2.sparkline) ? void 0 : d2.enabled)) && (p3 = u2.sparkline(p3)), f2 = m.extend(x2, p3);
      }
      const b2 = m.extend(f2, c.getApex());
      return x2 = m.extend(b2, g2), x2 = this.handleUserInputErrors(x2), x2;
    }
    normalizeAliasedChartType(t2) {
      if (!t2 || !t2.chart) return t2;
      const e2 = t2.chart.type;
      return "funnel" !== e2 && "pyramid" !== e2 && "gauge" !== e2 || (t2.chart.requestedType = e2, "funnel" === e2 || "pyramid" === e2 ? (t2.plotOptions = t2.plotOptions || {}, t2.plotOptions.bar = t2.plotOptions.bar || {}, t2.plotOptions.bar.isFunnel = true, t2.plotOptions.bar.horizontal = true, t2.chart.type = "bar", t2.plotOptions.bar.isPyramid = "pyramid" === e2) : "gauge" === e2 && (t2.chart.type = "radialBar")), t2;
    }
    checkForCatToNumericXAxis(t2, e2, s2) {
      var i2, a2;
      const o2 = new C(s2), r2 = ("bar" === t2 || "boxPlot" === t2 || "violin" === t2) && (null == (a2 = null == (i2 = s2.plotOptions) ? void 0 : i2.bar) ? void 0 : a2.horizontal), n2 = "pie" === t2 || "polarArea" === t2 || "donut" === t2 || "radar" === t2 || "radialBar" === t2 || "heatmap" === t2, l2 = "datetime" !== s2.xaxis.type && "numeric" !== s2.xaxis.type, h2 = s2.xaxis.tickPlacement ? s2.xaxis.tickPlacement : e2.xaxis && e2.xaxis.tickPlacement;
      return r2 || n2 || !l2 || "between" === h2 || (s2 = o2.convertCatToNumeric(s2)), s2;
    }
    extendYAxis(t2, e2) {
      const s2 = new k();
      (void 0 === t2.yaxis || !t2.yaxis || Array.isArray(t2.yaxis) && 0 === t2.yaxis.length) && (t2.yaxis = {});
      const i2 = c.getApex();
      t2.yaxis.constructor !== Array && i2.yaxis && i2.yaxis.constructor !== Array && (t2.yaxis = m.extend(t2.yaxis, i2.yaxis)), t2.yaxis.constructor !== Array ? t2.yaxis = [m.extend(s2.yAxis, t2.yaxis)] : t2.yaxis = m.extendArray(t2.yaxis, s2.yAxis);
      let a2 = false;
      t2.yaxis.forEach((t3) => {
        t3.logarithmic && (a2 = true);
      });
      let o2 = t2.series;
      return e2 && !o2 && (o2 = e2.config.series), a2 && o2.length !== t2.yaxis.length && o2.length && (t2.yaxis = o2.map((e3, i3) => {
        if (e3.name || (o2[i3].name = `series-${i3 + 1}`), t2.yaxis[i3]) return t2.yaxis[i3].seriesName = o2[i3].name, t2.yaxis[i3];
        {
          const e4 = m.extend(s2.yAxis, t2.yaxis[0]);
          return e4.show = false, e4;
        }
      })), a2 && o2.length > 1 && (o2.length, t2.yaxis.length), t2;
    }
    extendAnnotations(t2) {
      return void 0 === t2.annotations && (t2.annotations = {}, t2.annotations.yaxis = [], t2.annotations.xaxis = [], t2.annotations.points = []), t2 = this.extendYAxisAnnotations(t2), t2 = this.extendXAxisAnnotations(t2), t2 = this.extendPointAnnotations(t2);
    }
    extendYAxisAnnotations(t2) {
      const e2 = new k();
      return t2.annotations.yaxis = m.extendArray(void 0 !== t2.annotations.yaxis ? t2.annotations.yaxis : [], e2.yAxisAnnotation), t2;
    }
    extendXAxisAnnotations(t2) {
      const e2 = new k();
      return t2.annotations.xaxis = m.extendArray(void 0 !== t2.annotations.xaxis ? t2.annotations.xaxis : [], e2.xAxisAnnotation), t2;
    }
    extendPointAnnotations(t2) {
      const e2 = new k();
      return t2.annotations.points = m.extendArray(void 0 !== t2.annotations.points ? t2.annotations.points : [], e2.pointAnnotation), t2;
    }
    checkForDarkTheme(t2) {
      t2.theme && "dark" === t2.theme.mode && (t2.tooltip || (t2.tooltip = {}), "light" !== t2.tooltip.theme && (t2.tooltip.theme = "dark"), t2.chart.foreColor || (t2.chart.foreColor = "#f6f7f8"), t2.theme.palette || (t2.theme.palette = "palette4"));
    }
    handleUserInputErrors(t2) {
      const e2 = t2;
      if (e2.tooltip.shared && e2.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if ("bar" === e2.chart.type && e2.plotOptions.bar.horizontal) {
        if (e2.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        e2.yaxis[0].reversed && (e2.yaxis[0].opposite = true), e2.xaxis.tooltip.enabled = false, e2.yaxis[0].tooltip.enabled = false, e2.chart.zoom.enabled = false;
      }
      return "bar" !== e2.chart.type && "rangeBar" !== e2.chart.type || e2.tooltip.shared && "barWidth" === e2.xaxis.crosshairs.width && e2.series.length > 1 && (e2.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e2.chart.type && "boxPlot" !== e2.chart.type || e2.yaxis[0].reversed && (e2.yaxis[0].reversed = false), e2;
    }
  }
  const L = [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], M = [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24];
  class P {
    initGlobalVars(t2) {
      t2.series = [], t2.seriesCandleO = [], t2.seriesCandleH = [], t2.seriesCandleM = [], t2.seriesCandleL = [], t2.seriesCandleC = [], t2.seriesRangeStart = [], t2.seriesRangeEnd = [], t2.seriesRange = [], t2.seriesPercent = [], t2.seriesGoals = [], t2.seriesX = [], t2.seriesZ = [], t2.seriesNames = [], t2.seriesTotals = [], t2.seriesLog = [], t2.seriesColors = [], t2.stackedSeriesTotals = [], t2.seriesXvalues = [], t2.seriesYvalues = [], t2.dataWasParsed = false, t2.originalSeries = null, t2.maxValsInArrayIndex = 0, t2.yValueDecimal = 0, t2.allSeriesHasEqualX = true, t2.labels = [], t2.hasXaxisGroups = false, t2.groups = [], t2.barGroups = [], t2.lineGroups = [], t2.areaGroups = [], t2.hasSeriesGroups = false, t2.seriesGroups = [], t2.categoryLabels = [], t2.timescaleLabels = [], t2.noLabelsProvided = false, t2.isXNumeric = false, t2.skipLastTimelinelabel = false, t2.skipFirstTimelinelabel = false, t2.isDataXYZ = false, t2.isMultiLineX = false, t2.isMultipleYAxis = false, t2.maxY = -Number.MAX_VALUE, t2.minY = Number.MIN_VALUE, t2.minYArr = [], t2.maxYArr = [], t2.maxX = -Number.MAX_VALUE, t2.minX = Number.MAX_VALUE, t2.initialMaxX = -Number.MAX_VALUE, t2.initialMinX = Number.MAX_VALUE, t2.maxDate = 0, t2.minDate = Number.MAX_VALUE, t2.minZ = Number.MAX_VALUE, t2.maxZ = -Number.MAX_VALUE, t2.minXDiff = Number.MAX_VALUE, t2.yAxisScale = [], t2.xAxisScale = null, t2.xAxisTicksPositions = [], t2.xRange = 0, t2.yRange = [], t2.zRange = 0, t2.dataPoints = 0, t2.xTickAmount = 0, t2.multiAxisTickAmount = 0, t2.disableZoomIn = false, t2.disableZoomOut = false, t2.yLabelsCoords = [], t2.yTitleCoords = [], t2.barPadForNumericAxis = 0, t2.padHorizontal = 0, t2.rotateXLabels = false, t2.overlappingXLabels = false, t2.radialSize = 0, t2.barHeight = 0, t2.barWidth = 0, t2.animationEnded = false, t2.bulkRevealScheduled = false, t2.resizeTimer = null, t2.selectionResizeTimer = null, t2.lastWheelExecution = 0, t2.delayedElements = [], t2.pointsArray = [], t2.dataLabelsRects = [], t2.lastDrawnDataLabelsIndexes = [], t2.textRectsCache = /* @__PURE__ */ new Map(), t2.domCache = /* @__PURE__ */ new Map(), t2.dimensionCache = {}, t2.cachedSelectors = {}, t2.seriesNS || this._attachNamespaces(t2);
    }
    _attachNamespaces(t2) {
      const e2 = (e3, s3, i3 = s3) => {
        Object.defineProperty(e3, i3, { get: () => t2[s3], set(e4) {
          t2[s3] = e4;
        }, enumerable: true, configurable: true });
      }, s2 = {};
      e2(s2, "series", "data");
      for (const t3 of ["seriesNames", "seriesX", "seriesZ", "seriesXvalues", "seriesYvalues", "seriesGoals", "seriesLog", "seriesColors", "seriesPercent", "seriesTotals", "stackedSeriesTotals", "seriesCandleO", "seriesCandleH", "seriesCandleM", "seriesCandleL", "seriesCandleC", "seriesRangeStart", "seriesRangeEnd", "seriesRange", "seriesYAxisMap", "seriesYAxisReverseMap", "seriesGroups", "barGroups", "lineGroups", "areaGroups", "originalSeries", "collapsedSeries", "collapsedSeriesIndices", "ancillaryCollapsedSeries", "ancillaryCollapsedSeriesIndices", "allSeriesCollapsed", "risingSeries", "previousPaths", "ignoreYAxisIndexes", "labels", "categoryLabels", "timescaleLabels", "groups"]) e2(s2, t3);
      Object.defineProperty(t2, "seriesNS", { value: s2, writable: false, enumerable: false, configurable: true });
      const i2 = {};
      for (const t3 of ["minX", "maxX", "initialMinX", "initialMaxX", "minY", "maxY", "minYArr", "maxYArr", "minZ", "maxZ", "minDate", "maxDate", "minXDiff", "xRange", "yRange", "zRange", "xAxisScale", "yAxisScale", "xAxisTicksPositions", "xTickAmount", "multiAxisTickAmount", "dataPoints", "maxValsInArrayIndex", "isXNumeric", "isMultipleYAxis", "isMultiLineX", "isDataXYZ", "dataFormatXNumeric", "allSeriesHasEqualX", "hasNullValues", "dataWasParsed", "hasXaxisGroups", "hasSeriesGroups", "skipFirstTimelinelabel", "skipLastTimelinelabel", "yValueDecimal", "invalidLogScale", "noLabelsProvided"]) e2(i2, t3);
      Object.defineProperty(t2, "axes", { value: i2, writable: false, enumerable: false, configurable: true });
      const a2 = {};
      for (const t3 of ["svgWidth", "svgHeight", "gridWidth", "gridHeight", "translateX", "translateY", "translateXAxisX", "translateXAxisY", "translateYAxisX", "xAxisLabelsHeight", "xAxisGroupLabelsHeight", "xAxisLabelsWidth", "yAxisLabelsWidth", "yAxisWidths", "yLabelsCoords", "yTitleCoords", "padHorizontal", "barPadForNumericAxis", "rotateXLabels", "scaleX", "scaleY", "radialSize", "defaultLabels", "overlappingXLabels"]) e2(a2, t3);
      Object.defineProperty(t2, "layout", { value: a2, writable: false, enumerable: false, configurable: true });
      const o2 = {};
      for (const t3 of ["domCache", "dimensionCache", "cachedSelectors", "textRectsCache", "pointsArray", "dataLabelsRects", "lastDrawnDataLabelsIndexes", "delayedElements", "resizeTimer", "selectionResizeTimer", "resizeObserver"]) e2(o2, t3);
      Object.defineProperty(t2, "cache", { value: o2, writable: false, enumerable: false, configurable: true });
    }
    globalVars(t2) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t2.markers.size, largestSize: 0 }, LINE_HEIGHT_RATIO: 1.618, axisCharts: true, isSlopeChart: t2.plotOptions.line.isSlopeChart, comboCharts: false, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], allSeriesCollapsed: false, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], ignoreYAxisIndexes: [], isDirty: false, isExecCalled: false, dataChanged: false, resized: false, invalidLogScale: false, hasNullValues: false, columnSeries: null, yaxis: null, total: 0, shouldAnimate: true, previousPaths: [], svgWidth: 0, svgHeight: 0, defaultLabels: false, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateYAxisX: [], yAxisWidths: [], tooltip: null, resizeObserver: null, locale: {}, memory: { methodsToExec: [] }, niceScaleAllowedMagMsd: L, niceScaleDefaultTicks: M, seriesYAxisMap: [], seriesYAxisReverseMap: [], noData: false };
    }
    init(t2) {
      const e2 = this.globalVars(t2);
      return this.initGlobalVars(e2), e2.initialConfig = m.extend({}, t2), e2.initialSeries = m.clone(t2.series), e2.lastXAxis = m.clone(e2.initialConfig.xaxis), e2.lastYAxis = m.clone(e2.initialConfig.yaxis), e2;
    }
  }
  class T {
    constructor(t2) {
      this.opts = t2;
    }
    init() {
      const t2 = new D(this.opts).init({ responsiveOverride: false }), e2 = new P().init(t2), s2 = { config: t2, globals: e2, dom: {}, interact: { zoomEnabled: "zoom" === t2.chart.toolbar.autoSelected && t2.chart.toolbar.tools.zoom && t2.chart.zoom.enabled, panEnabled: "pan" === t2.chart.toolbar.autoSelected && t2.chart.toolbar.tools.pan, selectionEnabled: "selection" === t2.chart.toolbar.autoSelected && t2.chart.toolbar.tools.selection, zoomed: false, selection: void 0, visibleXRange: void 0, selectedDataPoints: [], mousedown: false, clientX: null, clientY: null, lastClientPosition: {}, lastWheelExecution: 0, capturedSeriesIndex: -1, capturedDataPointIndex: -1, disableZoomIn: false, disableZoomOut: false, isTouchDevice: !!c.isBrowser() && ("ontouchstart" in window || navigator.maxTouchPoints > 0) }, formatters: { xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, legendFormatter: void 0 }, candleData: { seriesCandleO: [], seriesCandleH: [], seriesCandleM: [], seriesCandleL: [], seriesCandleC: [], seriesBoxPoints: [] }, rangeData: { seriesRangeStart: [], seriesRangeEnd: [], seriesRange: [] }, violinData: { seriesViolinDensity: [], seriesViolinPoints: [], seriesViolinMin: [], seriesViolinMax: [] }, labelData: { labels: [], categoryLabels: [], timescaleLabels: [], hasXaxisGroups: false, groups: [], seriesGroups: [] }, axisFlags: { isXNumeric: false, dataFormatXNumeric: false, isDataXYZ: false, isRangeData: false, isRangeBar: false, isMultiLineX: false, noLabelsProvided: false, dataWasParsed: false }, seriesData: { series: [], seriesNames: [], seriesX: [], seriesZ: [], seriesColors: [], seriesGoals: [], stackedSeriesTotals: [], stackedSeriesTotalsByGroups: [] }, layout: { gridHeight: 0, gridWidth: 0, translateX: 0, translateY: 0, translateXAxisX: 0, translateXAxisY: 0, rotateXLabels: false, xAxisHeight: 0, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yLabelsCoords: [], yTitleCoords: [] } };
      Object.defineProperty(e2, "dom", { get: () => s2.dom, set(t3) {
        s2.dom = t3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["xLabelFormatter", "yLabelFormatters", "xaxisTooltipFormatter", "ttKeyFormatter", "ttVal", "ttZFormatter", "legendFormatter"]) Object.defineProperty(e2, t3, { get: () => s2.formatters[t3], set(e3) {
        s2.formatters[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["zoomEnabled", "panEnabled", "selectionEnabled", "zoomed", "selection", "visibleXRange", "selectedDataPoints", "mousedown", "clientX", "clientY", "lastClientPosition", "lastWheelExecution", "capturedSeriesIndex", "capturedDataPointIndex", "disableZoomIn", "disableZoomOut", "isTouchDevice"]) Object.defineProperty(e2, t3, { get: () => s2.interact[t3], set(e3) {
        s2.interact[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["gridHeight", "gridWidth", "translateX", "translateY", "translateXAxisX", "translateXAxisY", "rotateXLabels", "xAxisHeight", "xAxisLabelsHeight", "xAxisGroupLabelsHeight", "xAxisLabelsWidth", "yLabelsCoords", "yTitleCoords"]) Object.defineProperty(e2, t3, { get: () => s2.layout[t3], set(e3) {
        s2.layout[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["series", "seriesNames", "seriesX", "seriesZ", "seriesColors", "seriesGoals", "stackedSeriesTotals", "stackedSeriesTotalsByGroups"]) Object.defineProperty(e2, t3, { get: () => s2.seriesData[t3], set(e3) {
        s2.seriesData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["isXNumeric", "dataFormatXNumeric", "isDataXYZ", "isRangeData", "isRangeBar", "isMultiLineX", "noLabelsProvided", "dataWasParsed"]) Object.defineProperty(e2, t3, { get: () => s2.axisFlags[t3], set(e3) {
        s2.axisFlags[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["labels", "categoryLabels", "timescaleLabels", "hasXaxisGroups", "groups", "seriesGroups"]) Object.defineProperty(e2, t3, { get: () => s2.labelData[t3], set(e3) {
        s2.labelData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["seriesRangeStart", "seriesRangeEnd", "seriesRange"]) Object.defineProperty(e2, t3, { get: () => s2.rangeData[t3], set(e3) {
        s2.rangeData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["seriesCandleO", "seriesCandleH", "seriesCandleM", "seriesCandleL", "seriesCandleC"]) Object.defineProperty(e2, t3, { get: () => s2.candleData[t3], set(e3) {
        s2.candleData[t3] = e3;
      }, enumerable: false, configurable: true });
      for (const t3 of ["seriesViolinDensity", "seriesViolinPoints", "seriesViolinMin", "seriesViolinMax"]) Object.defineProperty(e2, t3, { get: () => s2.violinData[t3], set(e3) {
        s2.violinData[t3] = e3;
      }, enumerable: false, configurable: true });
      return s2;
    }
  }
  class F {
    constructor(t2) {
      this.w = t2;
    }
    static checkComboSeries(t2, e2) {
      let s2 = false, i2 = 0, a2 = 0;
      return void 0 === e2 && (e2 = "line"), t2.length && void 0 !== t2[0].type && t2.forEach((t3) => {
        "bar" !== t3.type && "column" !== t3.type && "candlestick" !== t3.type && "boxPlot" !== t3.type && "violin" !== t3.type || i2++, void 0 !== t3.type && t3.type !== e2 && a2++;
      }), a2 > 0 && (s2 = true), { comboBarCount: i2, comboCharts: s2 };
    }
    getStackedSeriesTotals(t2 = []) {
      const e2 = this.w, s2 = [];
      if (0 === e2.seriesData.series.length) return s2;
      for (let i2 = 0; i2 < e2.seriesData.series[e2.globals.maxValsInArrayIndex].length; i2++) {
        let a2 = 0;
        for (let s3 = 0; s3 < e2.seriesData.series.length; s3++) void 0 !== e2.seriesData.series[s3][i2] && -1 === t2.indexOf(s3) && (a2 += e2.seriesData.series[s3][i2]);
        s2.push(a2);
      }
      return s2;
    }
    getSeriesTotalByIndex(t2 = null) {
      if (null === t2) return this.w.config.series.reduce((t3, e2) => t3 + e2, 0);
      {
        const e2 = this.w.seriesData.series[t2];
        return Array.isArray(e2) ? e2.reduce((t3, e3) => t3 + e3, 0) : null != e2 ? e2 : 0;
      }
    }
    getStackedSeriesTotalsByGroups() {
      const t2 = this.w, e2 = [];
      return t2.labelData.seriesGroups.forEach((s2) => {
        const i2 = [];
        t2.config.series.forEach((e3, a3) => {
          s2.indexOf(t2.seriesData.seriesNames[a3]) > -1 && i2.push(a3);
        });
        const a2 = t2.seriesData.series.map((t3, e3) => -1 === i2.indexOf(e3) ? e3 : -1).filter((t3) => -1 !== t3);
        e2.push(this.getStackedSeriesTotals(a2));
      }), e2;
    }
    setSeriesYAxisMappings() {
      const t2 = this.w.globals, e2 = this.w.config;
      let s2 = [];
      const i2 = [], a2 = [], o2 = this.w.seriesData.series.length > e2.yaxis.length || e2.yaxis.some((t3) => Array.isArray(t3.seriesName));
      e2.series.forEach((t3, e3) => {
        a2.push(e3), i2.push(null);
      }), e2.yaxis.forEach((t3, e3) => {
        s2[e3] = [];
      });
      const r2 = [];
      e2.yaxis.forEach((t3, i3) => {
        let n3 = false;
        if (t3.seriesName) {
          let r3 = [];
          Array.isArray(t3.seriesName) ? r3 = t3.seriesName : r3.push(t3.seriesName), r3.forEach((t4) => {
            e2.series.forEach((e3, r4) => {
              if (e3.name === t4) {
                let t5 = r4;
                i3 === r4 || o2 ? (!o2 || a2.indexOf(r4) > -1) && s2[i3].push([i3, r4]) : (s2[r4].push([r4, i3]), t5 = i3), n3 = true, t5 = a2.indexOf(t5), -1 !== t5 && a2.splice(t5, 1);
              }
            });
          });
        }
        n3 || r2.push(i3);
      }), s2 = s2.map((t3) => {
        const e3 = [];
        return t3.forEach((t4) => {
          i2[t4[1]] = t4[0], e3.push(t4[1]);
        }), e3;
      });
      let n2 = e2.yaxis.length - 1;
      for (let t3 = 0; t3 < r2.length && (n2 = r2[t3], s2[n2] = [], a2); t3++) {
        const t4 = a2[0];
        a2.shift(), s2[n2].push(t4), i2[t4] = n2;
      }
      a2.forEach((t3) => {
        s2[n2].push(t3), i2[t3] = n2;
      }), t2.seriesYAxisMap = s2.map((t3) => t3), t2.seriesYAxisReverseMap = i2.map((t3) => t3), t2.seriesYAxisMap.forEach((t3, s3) => {
        t3.forEach((t4) => {
          if (e2.series[t4] && void 0 === e2.series[t4].group) {
            e2.series[t4].group = "apexcharts-axis-".concat(s3.toString());
          }
        });
      });
    }
    isSeriesNull(t2 = null) {
      let e2 = [];
      const s2 = this.w.config.series;
      return e2 = null === t2 ? s2.filter((t3) => null !== t3) : s2[t2] && Array.isArray(s2[t2].data) ? s2[t2].data.filter((t3) => null !== t3) : null !== s2[t2] && void 0 !== s2[t2] ? [s2[t2]] : [], 0 === e2.length;
    }
    seriesHaveSameValues(t2) {
      const e2 = this.w.seriesData.series[t2];
      return !Array.isArray(e2) || e2.every((t3, e3, s2) => t3 === s2[0]);
    }
    getCategoryLabels(t2) {
      const e2 = this.w;
      let s2 = t2.slice();
      return e2.config.xaxis.convertedCatToNumeric && (s2 = t2.map((t3) => e2.config.xaxis.labels.formatter(t3 - e2.globals.minX + 1))), s2;
    }
    getLargestSeries() {
      const t2 = this.w;
      t2.globals.maxValsInArrayIndex = t2.seriesData.series.map((t3) => t3.length).indexOf(Math.max.apply(Math, t2.seriesData.series.map((t3) => t3.length)));
    }
    getLargestMarkerSize() {
      const t2 = this.w;
      let e2 = 0;
      return t2.globals.markers.size.forEach((t3) => {
        e2 = Math.max(e2, t3);
      }), t2.config.markers.discrete && t2.config.markers.discrete.length && t2.config.markers.discrete.forEach((t3) => {
        e2 = Math.max(e2, t3.size);
      }), e2 > 0 && (t2.config.markers.hover.size > 0 ? e2 = t2.config.markers.hover.size : e2 += t2.config.markers.hover.sizeOffset), t2.globals.markers.largestSize = e2, e2;
    }
    getSeriesTotals() {
      const t2 = this.w;
      t2.globals.seriesTotals = t2.seriesData.series.map((t3) => {
        let e2 = 0;
        if (Array.isArray(t3)) for (let s2 = 0; s2 < t3.length; s2++) e2 += t3[s2];
        else e2 += t3;
        return e2;
      });
    }
    getSeriesTotalsXRange(t2, e2) {
      const s2 = this.w;
      return s2.seriesData.series.map((i2, a2) => {
        let o2 = 0;
        for (let r2 = 0; r2 < i2.length; r2++) s2.seriesData.seriesX[a2][r2] > t2 && s2.seriesData.seriesX[a2][r2] < e2 && (o2 += i2[r2]);
        return o2;
      });
    }
    getPercentSeries() {
      const t2 = this.w;
      t2.globals.seriesPercent = t2.seriesData.series.map((e2) => {
        const s2 = [];
        if (Array.isArray(e2)) for (let i2 = 0; i2 < e2.length; i2++) {
          const a2 = t2.seriesData.stackedSeriesTotals[i2];
          let o2 = 0;
          a2 && (o2 = 100 * e2[i2] / a2), s2.push(o2);
        }
        else {
          const i2 = 100 * e2 / t2.globals.seriesTotals.reduce((t3, e3) => t3 + e3, 0);
          s2.push(i2);
        }
        return s2;
      });
    }
    getCalculatedRatios() {
      const t2 = this.w, e2 = t2.globals, s2 = [];
      let i2 = 0, a2 = 0, o2 = 0, r2 = 0, n2 = [], l2 = 0.1, h2 = 0;
      if (e2.yRange = [], e2.isMultipleYAxis) for (let t3 = 0; t3 < e2.minYArr.length; t3++) e2.yRange.push(Math.abs(e2.minYArr[t3] - e2.maxYArr[t3])), n2.push(0);
      else e2.yRange.push(Math.abs(e2.minY - e2.maxY));
      e2.xRange = Math.abs(e2.maxX - e2.minX), e2.zRange = Math.abs(e2.maxZ - e2.minZ);
      for (let t3 = 0; t3 < e2.yRange.length; t3++) s2.push(e2.yRange[t3] / this.w.layout.gridHeight);
      if (a2 = e2.xRange / this.w.layout.gridWidth, i2 = e2.yRange / this.w.layout.gridWidth, o2 = e2.xRange / this.w.layout.gridHeight, r2 = e2.zRange / this.w.layout.gridHeight * 16, r2 || (r2 = 1), e2.minY !== Number.MIN_VALUE && 0 !== Math.abs(e2.minY)) {
        e2.hasNegs = true;
      }
      if (t2.globals.seriesYAxisReverseMap.length > 0) {
        const o3 = (e3, i3) => {
          const a3 = t2.config.yaxis[t2.globals.seriesYAxisReverseMap[i3]], o4 = e3 < 0 ? -1 : 1;
          return e3 = Math.abs(e3), a3.logarithmic && (e3 = this.getBaseLog(a3.logBase, e3)), -o4 * e3 / s2[i3];
        };
        if (e2.isMultipleYAxis) {
          n2 = [];
          for (let t3 = 0; t3 < s2.length; t3++) n2.push(o3(e2.minYArr[t3], t3));
        } else n2 = [], n2.push(o3(e2.minY, 0)), e2.minY !== Number.MIN_VALUE && 0 !== Math.abs(e2.minY) && (l2 = -e2.minY / i2, h2 = e2.minX / a2);
      } else n2 = [], n2.push(0), l2 = 0, h2 = 0;
      return { yRatio: s2, invertedYRatio: i2, zRatio: r2, xRatio: a2, invertedXRatio: o2, baseLineInvertedY: l2, baseLineY: n2, baseLineX: h2 };
    }
    getLogSeries(t2) {
      const e2 = this.w;
      return e2.globals.seriesLog = t2.map((t3, s2) => {
        const i2 = e2.globals.seriesYAxisReverseMap[s2];
        return e2.config.yaxis[i2] && e2.config.yaxis[i2].logarithmic ? t3.map((t4) => null === t4 ? null : this.getLogVal(e2.config.yaxis[i2].logBase, t4, s2)) : t3;
      }), e2.globals.invalidLogScale ? t2 : e2.globals.seriesLog;
    }
    getLogValAtSeriesIndex(t2, e2) {
      if (null === t2) return null;
      const s2 = this.w, i2 = s2.globals.seriesYAxisReverseMap[e2];
      return s2.config.yaxis[i2] && s2.config.yaxis[i2].logarithmic ? this.getLogVal(s2.config.yaxis[i2].logBase, t2, e2) : t2;
    }
    getBaseLog(t2, e2) {
      return Math.log(e2) / Math.log(t2);
    }
    getLogVal(t2, e2, s2) {
      if (e2 <= 0) return 0;
      const i2 = this.w, a2 = 0 === i2.globals.minYArr[s2] ? -1 : this.getBaseLog(t2, i2.globals.minYArr[s2]), o2 = (0 === i2.globals.maxYArr[s2] ? 0 : this.getBaseLog(t2, i2.globals.maxYArr[s2])) - a2;
      if (e2 < 1) return e2 / o2;
      return (this.getBaseLog(t2, e2) - a2) / o2;
    }
    getLogYRatios(t2) {
      const e2 = this.w, s2 = this.w.globals, i2 = s2;
      return i2.yLogRatio = t2.slice(), i2.logYRange = s2.yRange.map((t3, a2) => {
        const o2 = e2.globals.seriesYAxisReverseMap[a2];
        if (e2.config.yaxis[o2] && this.w.config.yaxis[o2].logarithmic) {
          let t4 = -Number.MAX_VALUE, o3 = Number.MIN_VALUE, r2 = 1;
          return s2.seriesLog.forEach((s3, i3) => {
            s3.forEach((s4) => {
              e2.config.yaxis[i3] && e2.config.yaxis[i3].logarithmic && (t4 = Math.max(s4, t4), o3 = Math.min(s4, o3));
            });
          }), r2 = Math.pow(s2.yRange[a2], Math.abs(o3 - t4) / s2.yRange[a2]), i2.yLogRatio[a2] = r2 / this.w.layout.gridHeight, r2;
        }
      }), i2.invalidLogScale ? t2.slice() : i2.yLogRatio;
    }
    static extendArrayProps(t2, e2, s2) {
      var i2, a2;
      return (null == e2 ? void 0 : e2.yaxis) && (e2 = t2.extendYAxis(e2, s2)), (null == e2 ? void 0 : e2.annotations) && (e2.annotations.yaxis && (e2 = t2.extendYAxisAnnotations(e2)), (null == (i2 = null == e2 ? void 0 : e2.annotations) ? void 0 : i2.xaxis) && (e2 = t2.extendXAxisAnnotations(e2)), (null == (a2 = null == e2 ? void 0 : e2.annotations) ? void 0 : a2.points) && (e2 = t2.extendPointAnnotations(e2))), e2;
    }
    drawSeriesByGroup(t2, e2, s2, i2) {
      const a2 = this.w, o2 = [];
      return t2.series.length > 0 && e2.forEach((e3) => {
        const r2 = [], n2 = [];
        t2.i.forEach((s3, i3) => {
          a2.config.series[s3].group === e3 && (r2.push(t2.series[i3]), n2.push(s3));
        }), r2.length > 0 && o2.push(i2.draw(r2, s2, n2));
      }), o2;
    }
  }
  const E = "http://www.w3.org/2000/svg";
  function I(t2) {
    return 1 - Math.pow(1 - t2, 3);
  }
  let X = null;
  function R() {
    if (!c.isBrowser()) return false;
    try {
      return X || (X = window.matchMedia("(prefers-reduced-motion: reduce)")), !!X.matches;
    } catch (t2) {
      return false;
    }
  }
  function z(t2, e2, s2) {
    if (!c.isBrowser()) return false;
    if (s2.globals.dataChanged || s2.globals.resized) return false;
    const i2 = s2.config.chart.animations;
    if (!i2 || false === i2.enabled) return false;
    const a2 = s2.config.chart.type;
    if ("line" !== a2 && "area" !== a2 && "rangeArea" !== a2) return false;
    if (!(s2.layout.gridWidth > 0)) return false;
    const o2 = 2 * (i2.speed || 800), r2 = Math.max(0, Math.min(1, e2 / s2.layout.gridWidth)), n2 = (1 - Math.cbrt(1 - r2)) * o2, l2 = t2.node.style;
    l2.opacity = "0";
    let h2 = null;
    const d2 = (t3) => {
      null === h2 && (h2 = t3), t3 - h2 >= n2 ? l2.opacity = "" : b.requestAnimationFrame(d2);
    };
    return b.requestAnimationFrame(d2), true;
  }
  function Y(t2) {
    const e2 = t2.style, s2 = t2.index || 0, i2 = "number" == typeof t2.baseDelay ? t2.baseDelay : 40, a2 = t2.row || 0, o2 = t2.col || 0, r2 = t2.groupIndex || 0, n2 = t2.perGroup || 1, l2 = t2.centerDistance || 0;
    switch (e2) {
      case "none":
        return 0;
      case "diagonal":
        return (a2 + o2) * i2;
      case "group":
        return r2 * i2 + s2 % n2 * (i2 / 4);
      case "centroid":
        return l2 * i2 * (s2 + 1);
      default:
        return s2 * i2;
    }
  }
  class B {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    animateLine(t2, e2, s2, i2) {
      t2.attr(e2).animate(i2).attr(s2);
    }
    animateMarker(t2, e2, s2, i2) {
      t2.attr({ opacity: 0 }).animate(e2).attr({ opacity: 1 }).after(() => {
        i2();
      });
    }
    animatePop(t2, { speed: e2, delay: s2 = 0, onComplete: i2 }) {
      const a2 = this.w;
      if (!c.isBrowser() || !a2.globals.shouldAnimate || e2 < 1) return void (i2 && i2());
      const o2 = t2.node.style;
      o2.transformBox = "fill-box", o2.transformOrigin = "center", o2.transform = "scale(0)", o2.opacity = "0";
      const r2 = performance.now() + s2, n2 = (t3) => {
        const s3 = Math.max(0, Math.min(1, (t3 - r2) / e2));
        o2.transform = `scale(${(function(t4) {
          const e3 = 1.70158;
          return 1 + 2.70158 * Math.pow(t4 - 1, 3) + e3 * Math.pow(t4 - 1, 2);
        })(s3)})`, o2.opacity = String(Math.min(1, 2 * s3)), s3 < 1 ? b.requestAnimationFrame(n2) : (o2.transform = "", o2.transformOrigin = "", o2.transformBox = "", o2.opacity = "", i2 && i2());
      };
      b.requestAnimationFrame(n2);
    }
    animateRect(t2, e2, s2, i2, a2, o2 = 0) {
      t2.attr(e2).animate(i2, o2).attr(s2).after(() => a2());
    }
    animatePathsGradually(t2) {
      const { el: e2, realIndex: s2, j: i2, fill: a2, pathFrom: o2, pathTo: r2, speed: n2, delay: l2 } = t2, h2 = this.w;
      let c2 = 0;
      h2.config.chart.animations.animateGradually.enabled && (c2 = h2.config.chart.animations.animateGradually.delay), h2.config.chart.animations.dynamicAnimation.enabled && h2.globals.dataChanged && "bar" !== h2.config.chart.type && (c2 = 0), this.morphSVG(e2, s2, i2, "line" !== h2.config.chart.type || h2.globals.comboCharts ? a2 : "stroke", o2, r2, n2, l2 * c2);
    }
    revealBulk(t2) {
      const e2 = this.w;
      t2.node.classList.add("apexcharts-element-hidden"), e2.globals.delayedElements.push({ el: t2.node }), c.isBrowser() && e2.globals.shouldAnimate ? e2.globals.bulkRevealScheduled || (e2.globals.bulkRevealScheduled = true, b.requestAnimationFrame(() => {
        e2.globals.bulkRevealScheduled = false, this.animationCompleted(t2);
      })) : this.animationCompleted(t2);
    }
    showDelayedElements() {
      this.w.globals.delayedElements.forEach((t2) => {
        const e2 = t2.el;
        e2.classList.remove("apexcharts-element-hidden"), e2.classList.add("apexcharts-hidden-element-shown");
      });
    }
    animationCompleted(t2) {
      const e2 = this.w;
      e2.globals.animationEnded || (e2.globals.animationEnded = true, this.showDelayedElements(), "function" == typeof e2.config.chart.events.animationEnd && e2.config.chart.events.animationEnd(this.ctx, { el: t2, w: e2 }));
    }
    animateDraw(t2, { realIndex: e2, j: s2, isFill: i2, isLast: a2, speed: o2, delay: r2, mask: n2 }) {
      const l2 = this.w, h2 = this, d2 = () => {
        a2 && l2.globals.shouldAnimate && h2.animationCompleted(t2), h2.showDelayedElements();
      };
      if (!c.isBrowser() || !l2.globals.shouldAnimate || o2 < 1) return void d2();
      const g2 = t2.node, p2 = () => {
        const t3 = n2 && "radial" === n2.type, a3 = l2.layout.gridWidth + 8, h3 = n2 && n2.cx || 0, c2 = n2 && n2.cy || 0, p3 = (n2 && n2.r || l2.layout.gridWidth / 2) + 4, u2 = `apexDrawMask${l2.globals.cuid}-${e2}-${null != s2 ? s2 : 0}-${i2 ? "f" : "s"}`, x2 = b.createElementNS(E, "mask");
        let f2;
        if (x2.setAttribute("id", u2), x2.setAttribute("maskUnits", "userSpaceOnUse"), t3) {
          const t4 = p3;
          x2.setAttribute("x", String(h3 - t4)), x2.setAttribute("y", String(c2 - t4)), x2.setAttribute("width", String(2 * t4)), x2.setAttribute("height", String(2 * t4)), f2 = b.createElementNS(E, "circle"), f2.setAttribute("cx", String(h3)), f2.setAttribute("cy", String(c2)), f2.setAttribute("r", "0"), f2.setAttribute("fill", "#fff");
        } else x2.setAttribute("x", String(-4)), x2.setAttribute("y", String(-4)), x2.setAttribute("width", String(a3)), x2.setAttribute("height", String(l2.layout.gridHeight + 8)), f2 = b.createElementNS(E, "rect"), f2.setAttribute("x", String(-4)), f2.setAttribute("y", String(-4)), f2.setAttribute("width", "0"), f2.setAttribute("height", String(l2.layout.gridHeight + 8)), f2.setAttribute("fill", "#fff");
        x2.appendChild(f2), l2.dom.elDefs.node.appendChild(x2), g2.setAttribute("mask", `url(#${u2})`);
        const m2 = performance.now() + (r2 || 0), y2 = (e3) => {
          const s3 = Math.max(0, Math.min(1, (e3 - m2) / o2)), i3 = I(s3);
          t3 ? f2.setAttribute("r", String(i3 * p3)) : f2.setAttribute("width", String(i3 * a3)), s3 < 1 ? b.requestAnimationFrame(y2) : (g2.removeAttribute("mask"), x2.parentNode && x2.parentNode.removeChild(x2), d2());
        };
        b.requestAnimationFrame(y2);
      };
      b.requestAnimationFrame(() => {
        if (i2) return void p2();
        const t3 = g2.getAttribute("stroke-dasharray");
        if (!!t3 && "0" !== t3 && "" !== t3) return void p2();
        let e3 = 0;
        try {
          "function" == typeof g2.getTotalLength && (e3 = g2.getTotalLength());
        } catch (t4) {
          e3 = 0;
        }
        e3 ? ((t4) => {
          g2.setAttribute("stroke-dasharray", String(t4)), g2.setAttribute("stroke-dashoffset", String(t4));
          const e4 = performance.now() + (r2 || 0), s3 = (i3) => {
            const a3 = Math.max(0, Math.min(1, (i3 - e4) / o2));
            g2.setAttribute("stroke-dashoffset", String(t4 * (1 - I(a3)))), a3 < 1 ? b.requestAnimationFrame(s3) : (g2.removeAttribute("stroke-dasharray"), g2.removeAttribute("stroke-dashoffset"), d2());
          };
          b.requestAnimationFrame(s3);
        })(e3) : d2();
      });
    }
    morphSVG(t2, e2, s2, i2, a2, o2, r2, n2) {
      var l2, h2;
      const c2 = this.w;
      a2 || (a2 = t2.attr("pathFrom")), o2 || (o2 = t2.attr("pathTo"));
      const d2 = () => ("radar" === c2.config.chart.type && (r2 = 1), `M 0 ${c2.layout.gridHeight}`);
      (!a2 || a2.indexOf("undefined") > -1 || a2.indexOf("NaN") > -1) && (a2 = d2()), (!o2.trim() || o2.indexOf("undefined") > -1 || o2.indexOf("NaN") > -1) && (o2 = d2()), c2.globals.shouldAnimate || (r2 = 1);
      const g2 = true === (null == (h2 = null == (l2 = this.ctx) ? void 0 : l2.morphTypeChange) ? void 0 : h2.isActive()) ? "polygons" : "commands";
      t2.plot(a2).animate(1, n2).plot(a2).animate(r2, n2).plot(o2, g2).after(() => {
        m.isNumber(s2) ? s2 === c2.seriesData.series[c2.globals.maxValsInArrayIndex].length - 2 && c2.globals.shouldAnimate && this.animationCompleted(t2) : "none" !== i2 && c2.globals.shouldAnimate && (!c2.globals.comboCharts && e2 === c2.seriesData.series.length - 1 || c2.globals.comboCharts) && this.animationCompleted(t2), this.showDelayedElements();
      });
    }
  }
  class H {
    constructor(t2) {
      this.w = t2;
    }
    getDefaultFilter(t2, e2) {
      const s2 = this.w;
      t2.unfilter && t2.unfilter(true), s2.config.chart.dropShadow.enabled && this.dropShadow(t2, s2.config.chart.dropShadow, e2);
    }
    applyFilter(t2, e2, s2) {
      var i2, a2, o2;
      const r2 = this.w;
      if (t2.unfilter && t2.unfilter(true), "none" === s2) return void this.getDefaultFilter(t2, e2);
      const n2 = r2.config.chart.dropShadow, l2 = "lighten" === s2 ? 2 : 0.3;
      t2.filterWith && (t2.filterWith((t3) => {
        t3.colorMatrix({ type: "matrix", values: `
            ${l2} 0 0 0 0
            0 ${l2} 0 0 0
            0 0 ${l2} 0 0
            0 0 0 1 0
          `, in: "SourceGraphic", result: "brightness" }), n2.enabled && this.addShadow(t3, e2, n2, "brightness");
      }), n2.noUserSpaceOnUse || null == (a2 = null == (i2 = t2.filterer()) ? void 0 : i2.node) || a2.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(null == (o2 = t2.filterer()) ? void 0 : o2.node));
    }
    addShadow(t2, e2, s2, i2) {
      var a2;
      const o2 = this.w;
      let { blur: r2, top: n2, left: l2, color: h2, opacity: c2 } = s2;
      if (h2 = Array.isArray(h2) ? h2[e2] : h2, (null == (a2 = o2.config.chart.dropShadow.enabledOnSeries) ? void 0 : a2.length) > 0 && -1 === o2.config.chart.dropShadow.enabledOnSeries.indexOf(e2)) return t2;
      t2.offset({ in: i2, dx: l2, dy: n2, result: "offset" }), t2.gaussianBlur({ in: "offset", stdDeviation: r2, result: "blur" }), t2.flood({ "flood-color": h2, "flood-opacity": c2, result: "flood" }), t2.composite({ in: "flood", in2: "blur", operator: "in", result: "shadow" }), t2.merge(["shadow", i2]);
    }
    dropShadow(t2, e2, s2 = 0) {
      var i2, a2, o2, r2, n2;
      const l2 = this.w;
      return t2.unfilter && t2.unfilter(true), m.isMsEdge() && "radialBar" === l2.config.chart.type || (null == (i2 = l2.config.chart.dropShadow.enabledOnSeries) ? void 0 : i2.length) > 0 && -1 === (null == (a2 = l2.config.chart.dropShadow.enabledOnSeries) ? void 0 : a2.indexOf(s2)) || t2.filterWith && (t2.filterWith((t3) => {
        this.addShadow(t3, s2, e2, "SourceGraphic");
      }), e2.noUserSpaceOnUse || null == (r2 = null == (o2 = t2.filterer()) ? void 0 : o2.node) || r2.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(null == (n2 = t2.filterer()) ? void 0 : n2.node)), t2;
    }
    setSelectionFilter(t2, e2, s2) {
      const i2 = this.w;
      if (void 0 !== i2.interact.selectedDataPoints[e2] && i2.interact.selectedDataPoints[e2].indexOf(s2) > -1) {
        t2.node.setAttribute("selected", true);
        const s3 = i2.config.states.active.filter;
        "none" !== s3 && this.applyFilter(t2, e2, s3.type);
      }
    }
    _scaleFilterSize(t2) {
      if (!t2) return;
      ((e2) => {
        for (const s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && t2.setAttribute(s2, e2[s2]);
      })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    }
  }
  class N {
    constructor(t2, e2 = null) {
      this.w = t2, this.ctx = e2;
    }
    roundPathCorners(t2, e2) {
      function s2(t3, e3, s3) {
        var a3 = e3.x - t3.x, o3 = e3.y - t3.y, r3 = Math.sqrt(a3 * a3 + o3 * o3);
        return i2(t3, e3, Math.min(1, s3 / r3));
      }
      function i2(t3, e3, s3) {
        return { x: t3.x + (e3.x - t3.x) * s3, y: t3.y + (e3.y - t3.y) * s3 };
      }
      function a2(t3, e3) {
        t3.length > 2 && (t3[t3.length - 2] = e3.x, t3[t3.length - 1] = e3.y);
      }
      function o2(t3) {
        return { x: parseFloat(t3[t3.length - 2]), y: parseFloat(t3[t3.length - 1]) };
      }
      t2.indexOf("NaN") > -1 && (t2 = "");
      var r2 = t2.split(/[,\s]/).reduce(function(t3, e3) {
        var s3 = e3.match(/^([a-zA-Z])(.+)/);
        return s3 ? (t3.push(s3[1]), t3.push(s3[2])) : t3.push(e3), t3;
      }, []).reduce(function(t3, e3) {
        return parseFloat(e3) == e3 && t3.length ? t3[t3.length - 1].push(e3) : t3.push([e3]), t3;
      }, []), n2 = [];
      if (r2.length > 1) {
        var l2 = o2(r2[0]), h2 = null;
        "Z" == r2[r2.length - 1][0] && r2[0].length > 2 && (h2 = ["L", l2.x, l2.y], r2[r2.length - 1] = h2), n2.push(r2[0]);
        for (var c2 = 1; c2 < r2.length; c2++) {
          var d2 = n2[n2.length - 1], g2 = r2[c2], p2 = g2 == h2 ? r2[1] : r2[c2 + 1];
          if (p2 && d2 && d2.length > 2 && "L" == g2[0] && p2.length > 2 && "L" == p2[0]) {
            var u2, x2, f2 = o2(d2), b2 = o2(g2), m2 = o2(p2);
            u2 = s2(b2, f2, e2), x2 = s2(b2, m2, e2), a2(g2, u2), g2.origPoint = b2, n2.push(g2);
            var y2 = i2(u2, b2, 0.5), w2 = i2(b2, x2, 0.5), v2 = ["C", y2.x, y2.y, w2.x, w2.y, x2.x, x2.y];
            v2.origPoint = b2, n2.push(v2);
          } else n2.push(g2);
        }
        if (h2) {
          var A2 = o2(n2[n2.length - 1]);
          n2.push(["Z"]), a2(n2[0], A2);
        }
      } else n2 = r2;
      return n2.reduce(function(t3, e3) {
        return t3 + e3.join(" ") + " ";
      }, "");
    }
    drawLine(t2, e2, s2, i2, a2 = "#a8a8a8", o2 = 0, r2 = null, n2 = "butt") {
      return this.w.dom.Paper.line().attr({ x1: t2, y1: e2, x2: s2, y2: i2, stroke: a2, "stroke-dasharray": o2, "stroke-width": r2, "stroke-linecap": n2 });
    }
    drawRect(t2 = 0, e2 = 0, s2 = 0, i2 = 0, a2 = 0, o2 = "#fefefe", r2 = 1, n2 = null, l2 = null, h2 = 0) {
      const c2 = this.w.dom.Paper.rect();
      return c2.attr({ x: t2, y: e2, width: s2 > 0 ? s2 : 0, height: i2 > 0 ? i2 : 0, rx: a2, ry: a2, opacity: r2, "stroke-width": null !== n2 ? n2 : 0, stroke: null !== l2 ? l2 : "none", "stroke-dasharray": h2 }), c2.node.setAttribute("fill", o2), c2;
    }
    drawPolygon(t2, e2 = "#e1e1e1", s2 = 1, i2 = "none") {
      return this.w.dom.Paper.polygon(t2).attr({ fill: i2, stroke: e2, "stroke-width": s2 });
    }
    drawCircle(t2, e2 = null) {
      t2 < 0 && (t2 = 0);
      const s2 = this.w.dom.Paper.circle(2 * t2);
      return null !== e2 && s2.attr(e2), s2;
    }
    drawPath({ d: t2 = "", stroke: e2 = "#a8a8a8", strokeWidth: s2 = 1, fill: i2, fillOpacity: a2 = 1, strokeOpacity: o2 = 1, classes: r2, strokeLinecap: n2 = null, strokeDashArray: l2 = 0 }) {
      const h2 = this.w;
      null === n2 && (n2 = h2.config.stroke.lineCap), (t2.indexOf("undefined") > -1 || t2.indexOf("NaN") > -1) && (t2 = `M 0 ${h2.layout.gridHeight}`);
      return h2.dom.Paper.path(t2).attr({ fill: i2, "fill-opacity": a2, stroke: e2, "stroke-opacity": o2, "stroke-linecap": n2, "stroke-width": s2, "stroke-dasharray": l2, class: r2 });
    }
    group(t2 = null) {
      const e2 = this.w.dom.Paper.group();
      return null !== t2 && e2.attr(t2), e2;
    }
    move(t2, e2) {
      return ["M", t2, e2].join(" ");
    }
    line(t2, e2, s2 = null) {
      return "H" === s2 ? [" H", t2].join(" ") : "V" === s2 ? [" V", e2].join(" ") : [" L", t2, e2].join(" ");
    }
    curve(t2, e2, s2, i2, a2, o2) {
      return ["C", t2, e2, s2, i2, a2, o2].join(" ");
    }
    quadraticCurve(t2, e2, s2, i2) {
      return ["Q", t2, e2, s2, i2].join(" ");
    }
    arc(t2, e2, s2, i2, a2, o2, r2, n2 = false) {
      let l2 = "A";
      n2 && (l2 = "a");
      return [l2, t2, e2, s2, i2, a2, o2, r2].join(" ");
    }
    renderPaths({ j: t2, realIndex: e2, pathFrom: s2, pathTo: i2, stroke: a2, strokeWidth: o2, strokeLinecap: r2, fill: h2, animationDelay: c2, initialSpeed: d2, dataChangeSpeed: g2, className: p2, chartType: u2, shouldClipToGrid: x2 = true, bindEventsOnPaths: f2 = true, drawShadow: b2 = true, drawMask: m2 = null }) {
      var y2, w2;
      const v2 = this.w, A2 = new H(this.w), C2 = new B(this.w, null != (y2 = this.ctx) ? y2 : void 0), S2 = this.w.config.chart.animations.enabled, k2 = S2 && this.w.config.chart.animations.dynamicAnimation.enabled;
      if (s2 && s2.startsWith("M 0 0 ") && i2) {
        const t3 = i2.match(/^M\s+[\d.-]+\s+[\d.-]+/);
        t3 && (s2 = s2.replace(/^M\s+0\s+0/, t3[0]));
      }
      let D2;
      const L2 = !!(S2 && !v2.globals.resized || k2 && v2.globals.dataChanged && v2.globals.shouldAnimate), M2 = "string" == typeof p2 && (p2.indexOf("apexcharts-line") > -1 || p2.indexOf("apexcharts-area") > -1 || p2.indexOf("apexcharts-rangeArea") > -1 || p2.indexOf("apexcharts-radar") > -1), P2 = !(!S2 || v2.globals.resized || v2.globals.dataChanged || !M2), T2 = null != (w2 = v2.config.chart.animations.largeDatasetThreshold) ? w2 : 0, F2 = !!(L2 && !P2 && T2 > 0 && v2.globals.dataPoints > T2), E2 = !(!("candlestick" === u2 || "boxPlot" === u2) || !L2 || P2 || !v2.globals.dataChanged), I2 = F2 || E2;
      !L2 || P2 || I2 ? (D2 = i2, L2 || (v2.globals.animationEnded = true)) : D2 = s2;
      const X2 = v2.config.stroke.dashArray;
      let R2 = 0;
      R2 = Array.isArray(X2) ? X2[e2] : v2.config.stroke.dashArray;
      const z2 = this.drawPath({ d: D2, stroke: a2, strokeWidth: o2, fill: h2, fillOpacity: 1, classes: p2, strokeLinecap: r2, strokeDashArray: R2 });
      z2.attr("index", e2), x2 && ("bar" === u2 && !v2.globals.isBarHorizontal || v2.globals.comboCharts ? z2.attr({ "clip-path": `url(#gridRectBarMask${v2.globals.cuid})` }) : z2.attr({ "clip-path": `url(#gridRectMask${v2.globals.cuid})` })), v2.config.chart.dropShadow.enabled && b2 && A2.dropShadow(z2, v2.config.chart.dropShadow, e2), f2 && (z2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, z2)), z2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, z2)), z2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, z2))), z2.attr({ pathTo: i2, pathFrom: s2 });
      const Y2 = { el: z2, j: t2, realIndex: e2, pathFrom: s2, pathTo: i2, fill: h2, strokeWidth: o2, delay: c2 };
      if (!S2 || v2.globals.resized || v2.globals.dataChanged) !v2.globals.resized && v2.globals.dataChanged || I2 || C2.showDelayedElements();
      else if (P2) {
        const s3 = 2 * d2, i3 = "none" === a2 || 0 === o2, r3 = v2.seriesData.series.length, n2 = !!v2.globals.comboCharts || e2 === r3 - 1;
        C2.animateDraw(z2, { realIndex: e2, j: t2, isFill: i3, isLast: n2, speed: s3, delay: 0, mask: m2 });
      } else I2 || C2.animatePathsGradually(l(n({}, Y2), { speed: d2 }));
      return v2.globals.dataChanged && k2 && L2 && !I2 && C2.animatePathsGradually(l(n({}, Y2), { speed: g2 })), I2 && C2.revealBulk(z2), z2;
    }
    drawPattern(t2, e2, s2, i2 = "#a8a8a8", a2 = 0) {
      return this.w.dom.Paper.pattern(e2, s2, (o2) => {
        "horizontalLines" === t2 ? o2.line(0, 0, s2, 0).stroke({ color: i2, width: a2 + 1 }) : "verticalLines" === t2 ? o2.line(0, 0, 0, e2).stroke({ color: i2, width: a2 + 1 }) : "slantedLines" === t2 ? o2.line(0, 0, e2, s2).stroke({ color: i2, width: a2 }) : "squares" === t2 ? o2.rect(e2, s2).fill("none").stroke({ color: i2, width: a2 }) : "circles" === t2 && o2.circle(e2).fill("none").stroke({ color: i2, width: a2 });
      });
    }
    drawGradient(t2, e2, s2, i2, a2, o2 = null, r2 = null, n2 = [], l2 = 0) {
      const h2 = this.w;
      let c2;
      e2.length < 9 && 0 === e2.indexOf("#") && (e2 = m.hexToRgba(e2, i2)), s2.length < 9 && 0 === s2.indexOf("#") && (s2 = m.hexToRgba(s2, a2));
      let d2 = 0, g2 = 1, p2 = 1, u2 = null;
      null !== r2 && (d2 = void 0 !== r2[0] ? r2[0] / 100 : 0, g2 = void 0 !== r2[1] ? r2[1] / 100 : 1, p2 = void 0 !== r2[2] ? r2[2] / 100 : 1, u2 = void 0 !== r2[3] ? r2[3] / 100 : null);
      const x2 = !("donut" !== h2.config.chart.type && "pie" !== h2.config.chart.type && "polarArea" !== h2.config.chart.type && "bubble" !== h2.config.chart.type);
      if (c2 = n2 && 0 !== n2.length ? h2.dom.Paper.gradient(x2 ? "radial" : "linear", (t3) => {
        (Array.isArray(n2[l2]) ? n2[l2] : n2).forEach((e3) => {
          t3.stop(e3.offset / 100, e3.color, e3.opacity);
        });
      }) : h2.dom.Paper.gradient(x2 ? "radial" : "linear", (t3) => {
        t3.stop(d2, e2, i2), t3.stop(g2, s2, a2), t3.stop(p2, s2, a2), null !== u2 && t3.stop(u2, e2, i2);
      }), x2) {
        const t3 = h2.layout.gridWidth / 2, e3 = h2.layout.gridHeight / 2;
        "bubble" !== h2.config.chart.type ? c2.attr({ gradientUnits: "userSpaceOnUse", cx: t3, cy: e3, r: o2 }) : c2.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else "vertical" === t2 ? c2.from(0, 0).to(0, 1) : "diagonal" === t2 ? c2.from(0, 0).to(1, 1) : "horizontal" === t2 ? c2.from(0, 1).to(1, 1) : "diagonal2" === t2 && c2.from(1, 0).to(0, 1);
      return c2;
    }
    getTextBasedOnMaxWidth({ text: t2, maxWidth: e2, fontSize: s2, fontFamily: i2 }) {
      const a2 = this.getTextRects(t2, s2, i2, ""), o2 = a2.width / t2.length, r2 = Math.floor(e2 / o2);
      return e2 < a2.width ? t2.slice(0, r2 - 3) + "..." : t2;
    }
    drawText({ x: t2, y: e2, text: s2, textAnchor: i2, fontSize: a2, fontFamily: o2, fontWeight: r2, foreColor: l2, opacity: h2, maxWidth: c2, cssClass: d2 = "", isPlainText: g2 = true, dominantBaseline: p2 = "auto" }) {
      const u2 = this.w;
      void 0 === s2 && (s2 = "");
      let x2 = s2;
      i2 || (i2 = "start"), l2 && l2.length || (l2 = u2.config.chart.foreColor), o2 = o2 || u2.config.chart.fontFamily, r2 = r2 || "regular";
      const f2 = { maxWidth: c2, fontSize: a2 = a2 || "11px", fontFamily: o2 };
      let b2;
      return Array.isArray(s2) ? b2 = u2.dom.Paper.text((t3) => {
        for (let e3 = 0; e3 < s2.length; e3++) x2 = s2[e3], c2 && (x2 = this.getTextBasedOnMaxWidth(n({ text: s2[e3] }, f2))), 0 === e3 ? t3.tspan(x2) : t3.tspan(x2).newLine();
      }) : (c2 && (x2 = this.getTextBasedOnMaxWidth(n({ text: s2 }, f2))), b2 = g2 ? u2.dom.Paper.plain(s2) : u2.dom.Paper.text((t3) => t3.tspan(x2))), b2.attr({ x: t2, y: e2, "text-anchor": i2, "dominant-baseline": p2, "font-size": a2, "font-family": o2, "font-weight": r2, fill: l2, class: "apexcharts-text " + d2 }), b2.node.style.fontFamily = o2, b2.node.style.opacity = h2, b2;
    }
    getMarkerPath(t2, e2, s2, i2) {
      let a2 = "";
      switch (s2) {
        case "cross":
          a2 = `M ${t2 - (i2 /= 1.4)} ${e2 - i2} L ${t2 + i2} ${e2 + i2}  M ${t2 - i2} ${e2 + i2} L ${t2 + i2} ${e2 - i2}`;
          break;
        case "plus":
          a2 = `M ${t2 - (i2 /= 1.12)} ${e2} L ${t2 + i2} ${e2}  M ${t2} ${e2 - i2} L ${t2} ${e2 + i2}`;
          break;
        case "star":
        case "sparkle": {
          let o2 = 5;
          i2 *= 1.15, "sparkle" === s2 && (i2 /= 1.1, o2 = 4);
          const r2 = Math.PI / o2;
          for (let s3 = 0; s3 <= 2 * o2; s3++) {
            const o3 = s3 * r2, n2 = s3 % 2 == 0 ? i2 : i2 / 2;
            a2 += (0 === s3 ? "M" : "L") + (t2 + n2 * Math.sin(o3)) + "," + (e2 - n2 * Math.cos(o3));
          }
          a2 += "Z";
          break;
        }
        case "triangle":
          a2 = `M ${t2} ${e2 - i2} 
             L ${t2 + i2} ${e2 + i2} 
             L ${t2 - i2} ${e2 + i2} 
             Z`;
          break;
        case "square":
        case "rect":
          a2 = `M ${t2 - (i2 /= 1.125)} ${e2 - i2} 
           L ${t2 + i2} ${e2 - i2} 
           L ${t2 + i2} ${e2 + i2} 
           L ${t2 - i2} ${e2 + i2} 
           Z`;
          break;
        case "diamond":
          a2 = `M ${t2} ${e2 - (i2 *= 1.05)} 
             L ${t2 + i2} ${e2} 
             L ${t2} ${e2 + i2} 
             L ${t2 - i2} ${e2} 
            Z`;
          break;
        case "line":
          a2 = `M ${t2 - (i2 /= 1.1)} ${e2} 
           L ${t2 + i2} ${e2}`;
          break;
        default:
          a2 = `M ${t2}, ${e2} 
           m -${(i2 *= 2) / 2}, 0 
           a ${i2 / 2},${i2 / 2} 0 1,0 ${i2},0 
           a ${i2 / 2},${i2 / 2} 0 1,0 -${i2},0`;
      }
      return a2;
    }
    drawMarkerShape(t2, e2, s2, i2, a2) {
      const o2 = this.drawPath({ d: this.getMarkerPath(t2, e2, s2, i2), stroke: a2.pointStrokeColor, strokeDashArray: a2.pointStrokeDashArray, strokeWidth: a2.pointStrokeWidth, fill: a2.pointFillColor, fillOpacity: a2.pointFillOpacity, strokeOpacity: a2.pointStrokeOpacity });
      return o2.attr({ cx: t2, cy: e2, shape: a2.shape, class: a2.class ? a2.class : "" }), o2;
    }
    drawMarker(t2, e2, s2) {
      t2 = t2 || 0;
      let i2 = s2.pSize || 0;
      return m.isNumber(e2) || (i2 = 0, e2 = 0), this.drawMarkerShape(t2, e2, null == s2 ? void 0 : s2.shape, i2, n(n({}, s2), "line" === s2.shape || "plus" === s2.shape || "cross" === s2.shape ? { pointStrokeColor: s2.pointFillColor, pointStrokeOpacity: s2.pointFillOpacity } : {}));
    }
    pathMouseEnter(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = new H(this.w), r2 = parseInt(null != (s2 = t2.node.getAttribute("index")) ? s2 : "", 10), n2 = parseInt(null != (i2 = t2.node.getAttribute("j")) ? i2 : "", 10);
      if (!(isNaN(r2) || isNaN(n2) || ("function" == typeof a2.config.chart.events.dataPointMouseEnter && a2.config.chart.events.dataPointMouseEnter(e2, this.ctx, { seriesIndex: r2, dataPointIndex: n2, w: a2 }), N._fireEvent(a2, "dataPointMouseEnter", [e2, this.ctx, { seriesIndex: r2, dataPointIndex: n2, w: a2 }]), "none" !== a2.config.states.active.filter.type && "true" === t2.node.getAttribute("selected") || "none" === a2.config.states.hover.filter.type || a2.interact.isTouchDevice))) {
        const e3 = a2.config.states.hover.filter;
        o2.applyFilter(t2, r2, e3.type);
      }
    }
    pathMouseLeave(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = new H(this.w), r2 = parseInt(null != (s2 = t2.node.getAttribute("index")) ? s2 : "", 10), n2 = parseInt(null != (i2 = t2.node.getAttribute("j")) ? i2 : "", 10);
      isNaN(r2) || isNaN(n2) || ("function" == typeof a2.config.chart.events.dataPointMouseLeave && a2.config.chart.events.dataPointMouseLeave(e2, this.ctx, { seriesIndex: r2, dataPointIndex: n2, w: a2 }), N._fireEvent(a2, "dataPointMouseLeave", [e2, this.ctx, { seriesIndex: r2, dataPointIndex: n2, w: a2 }]), "none" !== a2.config.states.active.filter.type && "true" === t2.node.getAttribute("selected") || "none" !== a2.config.states.hover.filter.type && o2.getDefaultFilter(t2, r2));
    }
    pathMouseDown(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = new H(this.w), r2 = parseInt(null != (s2 = t2.node.getAttribute("index")) ? s2 : "", 10), n2 = parseInt(null != (i2 = t2.node.getAttribute("j")) ? i2 : "", 10);
      if (isNaN(r2) || isNaN(n2)) return;
      let l2 = "false";
      if ("true" === t2.node.getAttribute("selected")) {
        t2.node.setAttribute("selected", "false");
        const e3 = a2.interact.selectedDataPoints[r2].indexOf(n2);
        e3 > -1 && a2.interact.selectedDataPoints[r2].splice(e3, 1);
      } else {
        if (!a2.config.states.active.allowMultipleDataPointsSelection && a2.interact.selectedDataPoints.length > 0) {
          a2.interact.selectedDataPoints = [];
          const t3 = a2.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), e3 = a2.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), s3 = (t4) => {
            Array.prototype.forEach.call(t4, (t5) => {
              t5.node.setAttribute("selected", "false"), o2.getDefaultFilter(t5, r2);
            });
          };
          s3(t3), s3(e3);
        }
        t2.node.setAttribute("selected", "true"), l2 = "true", void 0 === a2.interact.selectedDataPoints[r2] && (a2.interact.selectedDataPoints[r2] = []), a2.interact.selectedDataPoints[r2].push(n2);
      }
      if ("true" === l2) {
        const e3 = a2.config.states.active.filter;
        if ("none" !== e3) o2.applyFilter(t2, r2, e3.type);
        else if ("none" !== a2.config.states.hover.filter && !a2.interact.isTouchDevice) {
          const e4 = a2.config.states.hover.filter;
          o2.applyFilter(t2, r2, e4.type);
        }
      } else if ("none" !== a2.config.states.active.filter.type) if ("none" === a2.config.states.hover.filter.type || a2.interact.isTouchDevice) o2.getDefaultFilter(t2, r2);
      else {
        const e3 = a2.config.states.hover.filter;
        o2.applyFilter(t2, r2, e3.type);
      }
      "function" == typeof a2.config.chart.events.dataPointSelection && a2.config.chart.events.dataPointSelection(e2, this.ctx, { selectedDataPoints: a2.interact.selectedDataPoints, seriesIndex: r2, dataPointIndex: n2, w: a2 }), e2 && N._fireEvent(a2, "dataPointSelection", [e2, this.ctx, { selectedDataPoints: a2.interact.selectedDataPoints, seriesIndex: r2, dataPointIndex: n2, w: a2 }]);
    }
    rotateAroundCenter(t2) {
      let e2 = {};
      t2 && "function" == typeof t2.getBBox && (e2 = t2.getBBox());
      return { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 };
    }
    setupEventDelegation(t2, e2) {
      let s2 = null;
      t2.node.addEventListener("mouseover", (i2) => {
        const a2 = N._findDelegateTarget(i2.target, t2.node, e2);
        a2 && a2 !== s2 && (s2 && s2.instance && this.pathMouseLeave(s2.instance, i2), s2 = a2, a2.instance && this.pathMouseEnter(a2.instance, i2));
      }), t2.node.addEventListener("mouseout", (i2) => {
        if (!s2) return;
        (i2.relatedTarget ? N._findDelegateTarget(i2.relatedTarget, t2.node, e2) : null) !== s2 && (s2 && s2.instance && this.pathMouseLeave(s2.instance, i2), s2 = null);
      }), t2.node.addEventListener("mousedown", (s3) => {
        const i2 = N._findDelegateTarget(s3.target, t2.node, e2);
        i2 && i2.instance && this.pathMouseDown(i2.instance, s3);
      });
    }
    static _fireEvent(t2, e2, s2) {
      const i2 = t2.globals.events;
      if (!i2 || !Object.prototype.hasOwnProperty.call(i2, e2)) return;
      const a2 = i2[e2];
      for (let t3 = 0; t3 < a2.length; t3++) a2[t3].apply(null, s2);
    }
    static _findDelegateTarget(t2, e2, s2) {
      for (; t2 && t2 !== e2 && t2 !== document; ) {
        if (t2.matches && t2.matches(s2)) return t2;
        t2 = t2.parentNode;
      }
      return null;
    }
    static setAttrs(t2, e2) {
      for (const s2 in e2) Object.prototype.hasOwnProperty.call(e2, s2) && t2.setAttribute(s2, e2[s2]);
    }
    getTextRects(t2, e2, s2, i2, a2 = true) {
      const o2 = this.w, r2 = [t2, e2, s2, i2, a2].join("\0"), n2 = o2.globals.textRectsCache;
      if (n2 && n2.has(r2)) return n2.get(r2);
      const l2 = this.drawText({ x: -200, y: -200, text: t2, textAnchor: "start", fontSize: e2, fontFamily: s2, foreColor: "#fff", opacity: 0 });
      i2 && l2.attr("transform", i2), o2.dom.Paper.add(l2);
      let h2 = l2.bbox();
      const c2 = h2.y;
      a2 || (h2 = l2.node.getBoundingClientRect()), l2.remove();
      const d2 = { width: h2.width, height: h2.height, centerOffset: a2 ? c2 + h2.height / 2 - -200 : 0 };
      return n2 && n2.set(r2, d2), d2;
    }
    placeTextWithEllipsis(t2, e2, s2) {
      if ("function" == typeof t2.getComputedTextLength && (t2.textContent = e2, e2.length > 0 && t2.getComputedTextLength() >= s2 / 1.1)) {
        for (let i2 = e2.length - 3; i2 > 0; i2 -= 3) if (t2.getSubStringLength(0, i2) <= s2 / 1.1) return void (t2.textContent = e2.substring(0, i2) + "...");
        t2.textContent = ".";
      }
    }
  }
  const W = "http://www.w3.org/2000/svg";
  class O {
    constructor(t2, e2) {
      "object" == typeof t2 ? (this.x = t2.x, this.y = t2.y) : (this.x = t2 || 0, this.y = e2 || 0);
    }
    transform(t2) {
      return t2.apply(this);
    }
    clone() {
      return new O(this.x, this.y);
    }
  }
  class _ {
    constructor(t2, e2, s2, i2, a2, o2) {
      this.a = null != t2 ? t2 : 1, this.b = null != e2 ? e2 : 0, this.c = null != s2 ? s2 : 0, this.d = null != i2 ? i2 : 1, this.e = null != a2 ? a2 : 0, this.f = null != o2 ? o2 : 0;
    }
    rotate(t2) {
      const e2 = t2 * Math.PI / 180, s2 = Math.cos(e2), i2 = Math.sin(e2);
      return this.multiply(new _(s2, i2, -i2, s2, 0, 0));
    }
    scale(t2, e2) {
      return this.multiply(new _(t2, 0, 0, null != e2 ? e2 : t2, 0, 0));
    }
    multiply(t2) {
      return new _(this.a * t2.a + this.c * t2.b, this.b * t2.a + this.d * t2.b, this.a * t2.c + this.c * t2.d, this.b * t2.c + this.d * t2.d, this.a * t2.e + this.c * t2.f + this.e, this.b * t2.e + this.d * t2.f + this.f);
    }
    apply(t2) {
      return new O(this.a * t2.x + this.c * t2.y + this.e, this.b * t2.x + this.d * t2.y + this.f);
    }
  }
  class $ {
    constructor(t2, e2, s2, i2) {
      this.x = t2, this.y = e2, this.w = s2, this.h = i2, this.width = s2, this.height = i2, this.x2 = t2 + s2, this.y2 = e2 + i2;
    }
  }
  class G {
    constructor(t2) {
      this.w = t2, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
    }
    clippedImgArea(t2) {
      const e2 = this.w, s2 = e2.config, i2 = parseInt(String(e2.layout.gridWidth), 10), a2 = parseInt(String(e2.layout.gridHeight), 10), o2 = i2 > a2 ? i2 : a2, r2 = t2.image;
      let n2 = 0, l2 = 0;
      void 0 === t2.width && void 0 === t2.height ? void 0 !== s2.fill.image.width && void 0 !== s2.fill.image.height ? (n2 = s2.fill.image.width + 1, l2 = s2.fill.image.height) : (n2 = o2 + 1, l2 = o2) : (n2 = t2.width, l2 = t2.height);
      const h2 = b.createElementNS(W, "pattern");
      N.setAttrs(h2, { id: t2.patternID, patternUnits: t2.patternUnits ? t2.patternUnits : "userSpaceOnUse", width: n2 + "px", height: l2 + "px" });
      const d2 = b.createElementNS(W, "image");
      h2.appendChild(d2);
      const g2 = c.isBrowser() ? window.SVG : global.SVG;
      d2.setAttributeNS(g2.xlink, "href", r2), N.setAttrs(d2, { x: 0, y: 0, preserveAspectRatio: "none", width: n2 + "px", height: l2 + "px" }), d2.style.opacity = t2.opacity, e2.dom.elDefs.node.appendChild(h2);
    }
    getSeriesIndex(t2) {
      const e2 = this.w, s2 = e2.config.chart.type;
      return ("bar" === s2 || "rangeBar" === s2) && e2.config.plotOptions.bar.distributed || "heatmap" === s2 || "treemap" === s2 ? this.seriesIndex = t2.seriesNumber : this.seriesIndex = t2.seriesNumber % e2.seriesData.series.length, this.seriesIndex;
    }
    computeColorStops(t2, e2) {
      const s2 = this.w;
      let i2 = null, a2 = null;
      for (const s3 of t2) s3 >= e2.threshold ? (null === i2 || s3 > i2) && (i2 = s3) : (null === a2 || s3 < a2) && (a2 = s3);
      null === i2 && (i2 = e2.threshold), null === a2 && (a2 = e2.threshold);
      let o2 = i2 - e2.threshold + (e2.threshold - a2);
      0 === o2 && (o2 = 1);
      let r2 = 100 - (e2.threshold - a2) / o2 * 100;
      return r2 = Math.max(0, Math.min(r2, 100)), [{ offset: r2, color: e2.colorAboveThreshold, opacity: s2.config.fill.opacity }, { offset: 0, color: e2.colorBelowThreshold, opacity: s2.config.fill.opacity }];
    }
    fillPath(t2) {
      var e2, s2, i2, a2;
      const o2 = this.w;
      this.opts = t2;
      const r2 = this.w.config;
      let n2, l2, h2;
      this.seriesIndex = this.getSeriesIndex(t2);
      const c2 = r2.plotOptions.line.colors.colorAboveThreshold && r2.plotOptions.line.colors.colorBelowThreshold;
      let d2 = this.getFillColors()[this.seriesIndex];
      void 0 !== o2.seriesData.seriesColors[this.seriesIndex] && (d2 = o2.seriesData.seriesColors[this.seriesIndex]), "function" == typeof d2 && (d2 = d2({ seriesIndex: this.seriesIndex, dataPointIndex: t2.dataPointIndex, value: t2.value, w: o2 }));
      const g2 = t2.fillType ? t2.fillType : this.getFillType(this.seriesIndex);
      let p2 = Array.isArray(r2.fill.opacity) ? r2.fill.opacity[this.seriesIndex] : r2.fill.opacity;
      const u2 = "gradient" === g2 || c2;
      t2.color && (d2 = t2.color);
      const x2 = o2.config.series[this.seriesIndex];
      (null == (s2 = null == (e2 = null == x2 ? void 0 : x2.data) ? void 0 : e2[t2.dataPointIndex]) ? void 0 : s2.fillColor) && (d2 = null == (a2 = null == (i2 = null == x2 ? void 0 : x2.data) ? void 0 : i2[t2.dataPointIndex]) ? void 0 : a2.fillColor), d2 || (d2 = "#fff"), void 0 !== t2.opacity && null !== t2.opacity && (p2 = t2.opacity);
      let f2 = d2;
      m.isCSSVariable(d2) ? f2 = m.applyOpacityToColor(d2, p2) : -1 === d2.indexOf("rgb") ? -1 === d2.indexOf("#") ? f2 = d2 : d2.length < 9 && (f2 = m.hexToRgba(d2, p2)) : d2.indexOf("rgba") > -1 ? p2 = m.getOpacityFromRGBA(d2) : f2 = m.hexToRgba(m.rgb2hex(d2), p2);
      const b2 = m.isCSSVariable(d2) ? m.getThemeColor(d2) : d2;
      if ("pattern" === g2 && (l2 = this.handlePatternFill({ fillConfig: t2.fillConfig, patternFill: l2, fillColor: b2, defaultColor: f2 })), u2) {
        const e3 = r2.fill.gradient.colorStops ? [...r2.fill.gradient.colorStops] : [];
        let s3 = r2.fill.gradient.type;
        c2 && (e3[this.seriesIndex] = this.computeColorStops(o2.seriesData.series[this.seriesIndex], r2.plotOptions.line.colors), s3 = "vertical"), h2 = this.handleGradientFill({ type: s3, fillConfig: t2.fillConfig, fillColor: b2, fillOpacity: p2, colorStops: e3, i: this.seriesIndex });
      }
      if ("image" === g2) {
        const e3 = r2.fill.image.src, s3 = t2.patternID ? t2.patternID : "", i3 = `pattern${o2.globals.cuid}${t2.seriesNumber + 1}${s3}`;
        -1 === this.patternIDs.indexOf(i3) && (this.clippedImgArea({ opacity: p2, image: Array.isArray(e3) ? t2.seriesNumber < e3.length ? e3[t2.seriesNumber] : e3[0] : e3, width: t2.width ? t2.width : void 0, height: t2.height ? t2.height : void 0, patternUnits: t2.patternUnits, patternID: i3 }), this.patternIDs.push(i3)), n2 = `url(#${i3})`;
      } else n2 = u2 ? h2 : "pattern" === g2 ? l2 : f2;
      return t2.solid && (n2 = f2), n2;
    }
    getFillType(t2) {
      const e2 = this.w;
      return Array.isArray(e2.config.fill.type) ? e2.config.fill.type[t2] : e2.config.fill.type;
    }
    getFillColors() {
      const t2 = this.w, e2 = t2.config, s2 = this.opts;
      let i2 = [];
      return t2.globals.comboCharts ? "line" === t2.config.series[this.seriesIndex].type ? Array.isArray(t2.globals.stroke.colors) ? i2 = t2.globals.stroke.colors : i2.push(t2.globals.stroke.colors) : Array.isArray(t2.globals.fill.colors) ? i2 = t2.globals.fill.colors : i2.push(t2.globals.fill.colors) : "line" === e2.chart.type ? Array.isArray(t2.globals.stroke.colors) ? i2 = t2.globals.stroke.colors : i2.push(t2.globals.stroke.colors) : Array.isArray(t2.globals.fill.colors) ? i2 = t2.globals.fill.colors : i2.push(t2.globals.fill.colors), void 0 !== s2.fillColors && (i2 = [], Array.isArray(s2.fillColors) ? i2 = s2.fillColors.slice() : i2.push(s2.fillColors)), i2;
    }
    handlePatternFill({ fillConfig: t2, patternFill: e2, fillColor: s2, defaultColor: i2 }) {
      let a2 = this.w.config.fill;
      t2 && (a2 = t2);
      const o2 = this.opts, r2 = new N(this.w), n2 = Array.isArray(a2.pattern.strokeWidth) ? a2.pattern.strokeWidth[this.seriesIndex] : a2.pattern.strokeWidth, l2 = s2;
      if (Array.isArray(a2.pattern.style)) if (void 0 !== a2.pattern.style[o2.seriesNumber]) {
        e2 = r2.drawPattern(a2.pattern.style[o2.seriesNumber], a2.pattern.width, a2.pattern.height, l2, n2);
      } else e2 = i2;
      else e2 = r2.drawPattern(a2.pattern.style, a2.pattern.width, a2.pattern.height, l2, n2);
      return e2;
    }
    handleGradientFill({ type: t2, fillColor: e2, fillOpacity: s2, fillConfig: i2, colorStops: a2, i: o2 }) {
      let r2 = this.w.config.fill;
      i2 && (r2 = n(n({}, r2), i2));
      const l2 = this.opts, h2 = new N(this.w), c2 = new m();
      t2 = t2 || r2.gradient.type;
      let d2, g2 = e2, p2 = void 0 === r2.gradient.opacityFrom ? s2 : Array.isArray(r2.gradient.opacityFrom) ? r2.gradient.opacityFrom[o2] : r2.gradient.opacityFrom;
      g2.indexOf("rgba") > -1 && (p2 = m.getOpacityFromRGBA(g2));
      let u2 = void 0 === r2.gradient.opacityTo ? s2 : Array.isArray(r2.gradient.opacityTo) ? r2.gradient.opacityTo[o2] : r2.gradient.opacityTo;
      if (void 0 === r2.gradient.gradientToColors || 0 === r2.gradient.gradientToColors.length) d2 = "dark" === r2.gradient.shade ? c2.shadeColor(-1 * parseFloat(r2.gradient.shadeIntensity), e2.indexOf("rgb") > -1 ? m.rgb2hex(e2) : e2) : c2.shadeColor(parseFloat(r2.gradient.shadeIntensity), e2.indexOf("rgb") > -1 ? m.rgb2hex(e2) : e2);
      else if (r2.gradient.gradientToColors[l2.seriesNumber]) {
        const t3 = r2.gradient.gradientToColors[l2.seriesNumber];
        d2 = t3, t3.indexOf("rgba") > -1 && (u2 = m.getOpacityFromRGBA(t3));
      } else d2 = e2;
      if (r2.gradient.gradientFrom && (g2 = r2.gradient.gradientFrom), r2.gradient.gradientTo && (d2 = r2.gradient.gradientTo), r2.gradient.inverseColors) {
        const t3 = g2;
        g2 = d2, d2 = t3;
      }
      return g2.indexOf("rgb") > -1 && (g2 = m.rgb2hex(g2)), d2.indexOf("rgb") > -1 && (d2 = m.rgb2hex(d2)), h2.drawGradient(t2, g2, d2, p2, u2, l2.size, r2.gradient.stops, a2, o2);
    }
  }
  class j {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this._filters = new H(this.w), this._graphics = new N(this.w, this.ctx);
    }
    setGlobalMarkerSize() {
      const t2 = this.w;
      if (t2.globals.markers.size = Array.isArray(t2.config.markers.size) ? t2.config.markers.size : [t2.config.markers.size], t2.globals.markers.size.length > 0) {
        if (t2.globals.markers.size.length < t2.seriesData.series.length + 1) for (let e2 = 0; e2 <= t2.seriesData.series.length; e2++) void 0 === t2.globals.markers.size[e2] && t2.globals.markers.size.push(t2.globals.markers.size[0]);
      } else t2.globals.markers.size = t2.config.series.map(() => t2.config.markers.size);
    }
    plotChartMarkers({ pointsPos: t2, seriesIndex: e2, j: s2, pSize: i2, alwaysDrawMarker: a2 = false, isVirtualPoint: o2 = false }) {
      const r2 = this.w, n2 = e2, l2 = t2;
      let h2 = null;
      const c2 = new N(this.w), d2 = r2.config.markers.discrete && r2.config.markers.discrete.length;
      if (Array.isArray(l2.x)) for (let t3 = 0; t3 < l2.x.length; t3++) {
        let g2, p2 = s2, u2 = !m.isNumber(l2.y[t3]);
        0 === r2.globals.markers.largestSize && r2.globals.hasNullValues && null !== r2.seriesData.series[n2][s2 + 1] && !o2 && (u2 = true), 1 === s2 && 0 === t3 && (p2 = 0), 1 === s2 && 1 === t3 && (p2 = 1);
        let x2 = "apexcharts-marker";
        "line" !== r2.config.chart.type && "area" !== r2.config.chart.type || r2.globals.comboCharts || r2.config.tooltip.intersect || (x2 += " no-pointer-events");
        if ((Array.isArray(r2.config.markers.size) ? r2.globals.markers.size[e2] > 0 : r2.config.markers.size > 0) || a2 || d2) {
          u2 || (x2 += ` w${m.randomId()}`);
          const s3 = this.getMarkerConfig({ cssClass: x2, seriesIndex: e2, dataPointIndex: p2 }), o3 = r2.config.series[n2];
          if (o3.data[p2] && (o3.data[p2].fillColor && (s3.pointFillColor = o3.data[p2].fillColor), o3.data[p2].strokeColor && (s3.pointStrokeColor = o3.data[p2].strokeColor)), void 0 !== i2 && (s3.pSize = i2), (l2.x[t3] < -r2.globals.markers.largestSize || l2.x[t3] > r2.layout.gridWidth + r2.globals.markers.largestSize || l2.y[t3] < -r2.globals.markers.largestSize || l2.y[t3] > r2.layout.gridHeight + r2.globals.markers.largestSize) && (s3.pSize = 0), !u2) {
            (r2.globals.markers.size[e2] > 0 || a2 || d2) && !h2 && (h2 = c2.group({ class: a2 || d2 ? "" : "apexcharts-series-markers" }), h2.attr("clip-path", `url(#gridRectMarkerMask${r2.globals.cuid})`), this.setupMarkerDelegation(h2)), g2 = c2.drawMarker(l2.x[t3], l2.y[t3], s3), g2.attr("rel", p2), g2.attr("j", p2), g2.attr("index", e2), g2.node.setAttribute("default-marker-size", s3.pSize), z(g2, l2.x[t3], r2), this._filters.setSelectionFilter(g2, e2, p2), h2 && h2.add(g2);
          }
        } else void 0 === r2.globals.pointsArray[e2] && (r2.globals.pointsArray[e2] = []), r2.globals.pointsArray[e2].push([l2.x[t3], l2.y[t3]]);
      }
      return h2;
    }
    getMarkerConfig({ cssClass: t2, seriesIndex: e2, dataPointIndex: s2 = null, radius: i2 = null, size: a2 = null, strokeWidth: o2 = null }) {
      const r2 = this.w, n2 = this.getMarkerStyle(e2);
      let l2 = null === a2 ? r2.globals.markers.size[e2] : a2;
      const h2 = r2.config.markers;
      return null !== s2 && h2.discrete.length && h2.discrete.map((t3) => {
        t3.seriesIndex === e2 && t3.dataPointIndex === s2 && (n2.pointStrokeColor = t3.strokeColor, n2.pointFillColor = t3.fillColor, l2 = t3.size, n2.pointShape = t3.shape);
      }), { pSize: null === i2 ? l2 : i2, pRadius: null !== i2 ? i2 : h2.radius, pointStrokeWidth: null !== o2 ? o2 : Array.isArray(h2.strokeWidth) ? h2.strokeWidth[e2] : h2.strokeWidth, pointStrokeColor: n2.pointStrokeColor, pointFillColor: n2.pointFillColor, shape: n2.pointShape || (Array.isArray(h2.shape) ? h2.shape[e2] : h2.shape), class: t2, pointStrokeOpacity: Array.isArray(h2.strokeOpacity) ? h2.strokeOpacity[e2] : h2.strokeOpacity, pointStrokeDashArray: Array.isArray(h2.strokeDashArray) ? h2.strokeDashArray[e2] : h2.strokeDashArray, pointFillOpacity: Array.isArray(h2.fillOpacity) ? h2.fillOpacity[e2] : h2.fillOpacity, seriesIndex: e2 };
    }
    setupMarkerDelegation(t2) {
      const e2 = this.w, s2 = ".apexcharts-marker";
      this._graphics.setupEventDelegation(t2, s2), t2.node.addEventListener("click", (i2) => {
        if (e2.config.markers.onClick) {
          N._findDelegateTarget(i2.target, t2.node, s2) && e2.config.markers.onClick(i2);
        }
      }), t2.node.addEventListener("dblclick", (i2) => {
        if (e2.config.markers.onDblClick) {
          N._findDelegateTarget(i2.target, t2.node, s2) && e2.config.markers.onDblClick(i2);
        }
      }), t2.node.addEventListener("touchstart", (e3) => {
        const i2 = N._findDelegateTarget(e3.target, t2.node, s2);
        i2 && i2.instance && this._graphics.pathMouseDown(i2.instance, e3);
      }, { passive: true });
    }
    addEvents(t2) {
      const e2 = this.w;
      t2.node.addEventListener("mouseenter", this._graphics.pathMouseEnter.bind(this.ctx, t2)), t2.node.addEventListener("mouseleave", this._graphics.pathMouseLeave.bind(this.ctx, t2)), t2.node.addEventListener("mousedown", this._graphics.pathMouseDown.bind(this.ctx, t2)), t2.node.addEventListener("click", e2.config.markers.onClick), t2.node.addEventListener("dblclick", e2.config.markers.onDblClick), t2.node.addEventListener("touchstart", this._graphics.pathMouseDown.bind(this.ctx, t2), { passive: true });
    }
    getMarkerStyle(t2) {
      const e2 = this.w, s2 = e2.globals.markers.colors, i2 = e2.config.markers.strokeColor || e2.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(i2) ? i2[t2] : i2, pointFillColor: Array.isArray(s2) ? s2[t2] : s2 };
    }
  }
  class V {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.initialAnim = this.w.config.chart.animations.enabled, this.anim = new B(this.w), this.filters = new H(this.w), this.fill = new G(this.w), this.markers = new j(this.w, this.ctx), this.graphics = new N(this.w);
    }
    draw(t2, e2, s2) {
      const i2 = this.w, a2 = this.graphics, o2 = s2.realIndex, r2 = s2.pointsPos, n2 = s2.zRatio, l2 = s2.elParent, h2 = a2.group({ class: `apexcharts-series-markers apexcharts-series-${i2.config.chart.type}` });
      if (h2.attr("clip-path", `url(#gridRectMarkerMask${i2.globals.cuid})`), this.markers.setupMarkerDelegation(h2), Array.isArray(r2.x)) for (let t3 = 0; t3 < r2.x.length; t3++) {
        let s3 = e2 + 1, a3 = true;
        0 === e2 && 0 === t3 && (s3 = 0), 0 === e2 && 1 === t3 && (s3 = 1);
        let c2 = i2.globals.markers.size[o2];
        if (n2 !== 1 / 0) {
          const t4 = i2.config.plotOptions.bubble;
          c2 = i2.seriesData.seriesZ[o2][s3], t4.zScaling && (c2 /= n2), t4.minBubbleRadius && c2 < t4.minBubbleRadius && (c2 = t4.minBubbleRadius), t4.maxBubbleRadius && c2 > t4.maxBubbleRadius && (c2 = t4.maxBubbleRadius);
        }
        const d2 = r2.x[t3], g2 = r2.y[t3];
        if (c2 = c2 || 0, null !== g2 && void 0 !== i2.seriesData.series[o2][s3] || (a3 = false), a3) {
          const t4 = this.drawPoint(d2, g2, c2, o2, s3, e2);
          h2.add(t4);
        }
        l2.add(h2);
      }
    }
    drawPoint(t2, e2, s2, i2, a2, o2) {
      const r2 = this.w, n2 = i2, l2 = this.anim, h2 = this.filters, c2 = this.fill, d2 = this.markers, g2 = this.graphics, p2 = d2.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n2, dataPointIndex: a2, radius: "bubble" === r2.config.chart.type || r2.globals.comboCharts && r2.config.series[i2] && "bubble" === r2.config.series[i2].type ? s2 : null });
      let u2 = c2.fillPath({ seriesNumber: i2, dataPointIndex: a2, color: p2.pointFillColor, patternUnits: "objectBoundingBox", value: r2.seriesData.series[i2][o2] });
      const x2 = g2.drawMarker(t2, e2, p2), f2 = r2.config.series[n2];
      if (f2.data[a2] && f2.data[a2].fillColor && (u2 = f2.data[a2].fillColor), x2.attr({ fill: u2 }), r2.config.chart.dropShadow.enabled) {
        const t3 = r2.config.chart.dropShadow;
        h2.dropShadow(x2, t3, i2);
      }
      if (!this.initialAnim || r2.globals.dataChanged || r2.globals.resized) r2.globals.animationEnded = true;
      else {
        const t3 = r2.config.chart.animations, e3 = t3.speed, s3 = r2.globals.dataPoints || 1, i3 = t3.animateGradually, o3 = i3 && false !== i3.enabled ? Math.min(20, 0.5 * e3 / Math.max(1, s3)) : 0, n3 = Y({ style: o3 > 0 ? "sequential" : "none", index: a2, baseDelay: o3 });
        l2.animatePop(x2, { speed: e3, delay: n3, onComplete: () => l2.animationCompleted(x2) });
      }
      return x2.attr({ rel: a2, j: a2, index: i2, "default-marker-size": p2.pSize }), h2.setSelectionFilter(x2, i2, a2), x2.node.classList.add("apexcharts-marker"), x2;
    }
    centerTextInBubble(t2) {
      const e2 = this.w;
      return { y: t2 += parseInt(e2.config.dataLabels.style.fontSize, 10) / 4 };
    }
  }
  class U {
    constructor(t2, e2 = null) {
      this.w = t2, this.ctx = e2;
    }
    dataLabelsCorrection(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = this.w;
      let l2 = false;
      const h2 = new N(this.w).getTextRects(s2, r2), c2 = h2.width, d2 = h2.height;
      e2 < 0 && (e2 = 0), e2 > n2.layout.gridHeight + d2 && (e2 = n2.layout.gridHeight + d2 / 2), void 0 === n2.globals.dataLabelsRects[i2] && (n2.globals.dataLabelsRects[i2] = []), n2.globals.dataLabelsRects[i2].push({ x: t2, y: e2, width: c2, height: d2 });
      const g2 = n2.globals.dataLabelsRects[i2].length - 2, p2 = void 0 !== n2.globals.lastDrawnDataLabelsIndexes[i2] ? n2.globals.lastDrawnDataLabelsIndexes[i2][n2.globals.lastDrawnDataLabelsIndexes[i2].length - 1] : 0;
      if (void 0 !== n2.globals.dataLabelsRects[i2][g2]) {
        const s3 = n2.globals.dataLabelsRects[i2][p2];
        (t2 > s3.x + s3.width || e2 > s3.y + s3.height || e2 + d2 < s3.y || t2 + c2 < s3.x) && (l2 = true);
      }
      return (0 === a2 || o2) && (l2 = true), { x: t2, y: e2, textRects: h2, drawnextLabel: l2 };
    }
    drawDataLabel({ type: t2, pos: e2, i: s2, j: i2, isRangeStart: a2, strokeWidth: o2 = 2 }) {
      const r2 = this.w, n2 = new N(this.w), l2 = r2.config.dataLabels;
      let h2 = 0, c2 = 0, d2 = i2, g2 = null;
      if (-1 !== r2.globals.collapsedSeriesIndices.indexOf(s2) || !l2.enabled || !Array.isArray(e2.x)) return g2;
      g2 = n2.group({ class: "apexcharts-data-labels" });
      for (let n3 = 0; n3 < e2.x.length; n3++) if (h2 = e2.x[n3] + l2.offsetX, c2 = e2.y[n3] + l2.offsetY + o2, !isNaN(h2)) {
        1 === i2 && 0 === n3 && (d2 = 0), 1 === i2 && 1 === n3 && (d2 = 1);
        let o3 = r2.seriesData.series[s2][d2];
        "rangeArea" === t2 && (o3 = a2 ? r2.rangeData.seriesRangeStart[s2][d2] : r2.rangeData.seriesRangeEnd[s2][d2]);
        let l3 = "";
        const p2 = (t3) => r2.config.dataLabels.formatter(t3, { seriesIndex: s2, dataPointIndex: d2, w: r2 });
        if ("bubble" === r2.config.chart.type) {
          o3 = r2.seriesData.seriesZ[s2][d2], l3 = p2(o3), c2 = e2.y[n3];
          c2 = new V(this.w, this.ctx).centerTextInBubble(c2).y;
        } else void 0 !== o3 && (l3 = p2(o3));
        let u2 = r2.config.dataLabels.textAnchor;
        r2.globals.isSlopeChart && (u2 = 0 === d2 ? "end" : d2 === r2.config.series[s2].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: h2, y: c2, text: l3, i: s2, j: d2, parent: g2, offsetCorrection: true, dataLabelsConfig: r2.config.dataLabels, textAnchor: u2 });
      }
      return g2;
    }
    plotDataLabelsText(t2) {
      const e2 = this.w, s2 = new N(this.w);
      let { x: i2, y: a2, i: o2, j: r2, text: n2, textAnchor: l2, fontSize: h2, parent: c2, dataLabelsConfig: d2, color: g2, alwaysDrawDataLabel: p2, offsetCorrection: u2, className: x2 } = t2, f2 = null;
      if (Array.isArray(e2.config.dataLabels.enabledOnSeries) && e2.config.dataLabels.enabledOnSeries.indexOf(o2) < 0) return f2;
      let b2 = { x: i2, y: a2, drawnextLabel: true, textRects: null };
      if (u2 && (b2 = this.dataLabelsCorrection(i2, a2, n2, o2, r2, p2, parseInt(d2.style.fontSize, 10).toString())), e2.interact.zoomed || (i2 = b2.x, a2 = b2.y), b2.textRects) {
        const t3 = e2.globals.barPadForNumericAxis || 0;
        (i2 < -(t3 + 20) - b2.textRects.width || i2 > e2.layout.gridWidth + b2.textRects.width + t3 + 30) && (n2 = "");
      }
      let m2 = e2.globals.dataLabels.style.colors[o2];
      (("bar" === e2.config.chart.type || "rangeBar" === e2.config.chart.type) && e2.config.plotOptions.bar.distributed || e2.config.dataLabels.distributed) && (m2 = e2.globals.dataLabels.style.colors[r2]), "function" == typeof m2 && (m2 = m2({ series: e2.seriesData.series, seriesIndex: o2, dataPointIndex: r2, w: e2 })), g2 && (m2 = g2);
      let y2 = d2.offsetX, w2 = d2.offsetY;
      if ("bar" !== e2.config.chart.type && "rangeBar" !== e2.config.chart.type || (y2 = 0, w2 = 0), e2.globals.isSlopeChart && (0 !== r2 && (y2 = -2 * d2.offsetX + 5), 0 !== r2 && r2 !== e2.config.series[o2].data.length - 1 && (y2 = 0)), b2.drawnextLabel) {
        if ("middle" === l2 && i2 === e2.layout.gridWidth && (l2 = "end"), f2 = s2.drawText({ x: i2 + y2, y: a2 + w2, foreColor: m2, textAnchor: l2 || d2.textAnchor, text: n2, fontSize: h2 || d2.style.fontSize, fontFamily: d2.style.fontFamily, fontWeight: d2.style.fontWeight || "normal" }), f2.attr({ class: x2 || "apexcharts-datalabel", cx: i2, cy: a2 }), d2.dropShadow.enabled) {
          const t3 = d2.dropShadow;
          new H(this.w).dropShadow(f2, t3);
        }
        c2.add(f2), z(f2, i2, e2), void 0 === e2.globals.lastDrawnDataLabelsIndexes[o2] && (e2.globals.lastDrawnDataLabelsIndexes[o2] = []), e2.globals.lastDrawnDataLabelsIndexes[o2].push(r2);
      }
      return f2;
    }
    addBackgroundToDataLabel(t2, e2) {
      const s2 = this.w, i2 = s2.config.dataLabels.background, a2 = i2.padding, o2 = i2.padding / 2, r2 = e2.width, n2 = e2.height, l2 = new N(this.w).drawRect(e2.x - a2, e2.y - o2 / 2, r2 + 2 * a2, n2 + o2, i2.borderRadius, "transparent" !== s2.config.chart.background && s2.config.chart.background ? s2.config.chart.background : "#fff", i2.opacity, i2.borderWidth, i2.borderColor);
      if (i2.dropShadow.enabled) {
        new H(this.w).dropShadow(l2, i2.dropShadow);
      }
      return l2;
    }
    dataLabelsBackground() {
      var t2;
      const e2 = this.w;
      if ("bubble" === e2.config.chart.type) return;
      const s2 = e2.dom.baseEl.querySelectorAll(".apexcharts-datalabels text");
      for (let i2 = 0; i2 < s2.length; i2++) {
        const a2 = s2[i2], o2 = a2.getBBox();
        let r2 = null;
        if (o2.width && o2.height && (r2 = this.addBackgroundToDataLabel(a2, o2)), r2) {
          null == (t2 = a2.parentNode) || t2.insertBefore(r2.node, a2);
          const s3 = e2.config.dataLabels.background.backgroundColor || a2.getAttribute("fill");
          e2.config.chart.animations.enabled && !e2.globals.resized && !e2.globals.dataChanged ? r2.animate().attr({ fill: s3 }) : r2.attr({ fill: s3 }), a2.setAttribute("fill", e2.config.dataLabels.background.foreColor);
          const i3 = a2.getAttribute("cx");
          null !== i3 && z(r2, parseFloat(i3), e2);
        }
      }
    }
    bringForward() {
      const t2 = this.w, e2 = t2.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), s2 = t2.dom.baseEl.querySelector(".apexcharts-plot-series:last-child");
      for (let t3 = 0; t3 < e2.length; t3++) s2 && s2.insertBefore(e2[t3], s2.nextSibling);
    }
  }
  class q {
    static invalidateAll(t2) {
      t2 && t2.globals && (t2.globals.cachedSelectors && (t2.globals.cachedSelectors = {}), t2.globals.domCache && t2.globals.domCache.clear(), t2.globals.dimensionCache = {});
    }
    static invalidateDimensions(t2) {
      t2 && t2.globals && (t2.globals.dimensionCache = {});
    }
    static invalidateSelectors(t2) {
      t2 && t2.globals && t2.globals.cachedSelectors && (t2.globals.cachedSelectors = {});
    }
    static getCachedSelector(t2, e2, s2) {
      return t2 && t2.globals ? (t2.globals.cachedSelectors || (t2.globals.cachedSelectors = {}), t2.globals.cachedSelectors[e2] || (t2.globals.cachedSelectors[e2] = s2()), t2.globals.cachedSelectors[e2]) : s2();
    }
    static getCachedDimension(t2, e2, s2, i2 = 1e3) {
      if (!t2 || !t2.globals) return s2();
      t2.globals.dimensionCache || (t2.globals.dimensionCache = {});
      const a2 = t2.globals.dimensionCache[e2], o2 = Date.now();
      if (a2 && a2.lastUpdate && o2 - a2.lastUpdate < i2) return a2.value;
      const r2 = s2();
      return t2.globals.dimensionCache[e2] = { value: r2, lastUpdate: o2 }, r2;
    }
    static cacheDOMElement(t2, e2, s2) {
      t2 && t2.globals && (t2.globals.domCache || (t2.globals.domCache = /* @__PURE__ */ new Map()), t2.globals.domCache.set(e2, s2));
    }
    static getCachedDOMElement(t2, e2) {
      return t2 && t2.globals && t2.globals.domCache && t2.globals.domCache.get(e2) || null;
    }
  }
  class Z {
    constructor(t2, { theme: e2 = null, timeScale: s2 = null } = {}) {
      this.w = t2, this.theme = e2, this.timeScale = s2;
    }
    getLabel(t2, e2, s2, i2, a2 = [], o2 = "12px", r2 = true) {
      const n2 = this.w, l2 = void 0 === t2[i2] ? "" : t2[i2];
      let h2 = l2;
      const c2 = n2.formatters.xLabelFormatter, d2 = n2.config.xaxis.labels.formatter, g2 = new w(this.w), p2 = l2;
      r2 && (h2 = g2.xLabelFormat(c2, l2, p2, { i: i2, dateFormatter: new y(this.w).formatDate, w: n2 }), void 0 !== d2 && (h2 = d2(l2, t2[i2], { i: i2, dateFormatter: new y(this.w).formatDate, w: n2 }))), e2.length > 0 ? (s2 = e2[i2].position, h2 = e2[i2].value) : "datetime" === n2.config.xaxis.type && void 0 === d2 && (h2 = ""), void 0 === h2 && (h2 = ""), h2 = Array.isArray(h2) ? h2 : h2.toString();
      const u2 = new N(this.w);
      let x2 = {};
      x2 = n2.layout.rotateXLabels && r2 ? u2.getTextRects(h2, parseInt(o2, 10).toString(), null, `rotate(${n2.config.xaxis.labels.rotate} 0 0)`, false) : u2.getTextRects(h2, parseInt(o2, 10).toString());
      const f2 = !n2.config.xaxis.labels.showDuplicates && this.timeScale;
      return !Array.isArray(h2) && ("NaN" === String(h2) || a2.indexOf(h2) >= 0 && f2) && (h2 = ""), { x: s2, text: h2, textRect: x2 };
    }
    checkLabelBasedOnTickamount(t2, e2, s2) {
      const i2 = this.w;
      let a2 = i2.config.xaxis.tickAmount;
      if ("dataPoints" === a2 && (a2 = Math.round(i2.layout.gridWidth / 120)), a2 > s2) return e2;
      return t2 % Math.round(s2 / (a2 + 1)) === 0 || (e2.text = ""), e2;
    }
    checkForOverflowingLabels(t2, e2, s2, i2, a2) {
      const o2 = this.w;
      if (0 === t2 && o2.globals.skipFirstTimelinelabel && (e2.text = ""), t2 === s2 - 1 && o2.globals.skipLastTimelinelabel && (e2.text = ""), o2.config.xaxis.labels.hideOverlappingLabels && i2.length > 0) {
        const t3 = a2[a2.length - 1];
        if (o2.config.xaxis.labels.trim && "datetime" !== o2.config.xaxis.type) return e2;
        e2.x < t3.textRect.width / (o2.layout.rotateXLabels ? Math.abs(o2.config.xaxis.labels.rotate) / 12 : 1.01) + t3.x && (e2.text = "");
      }
      return e2;
    }
    checkForReversedLabels(t2, e2) {
      const s2 = this.w;
      return s2.config.yaxis[t2] && s2.config.yaxis[t2].reversed && e2.reverse(), e2;
    }
    yAxisAllSeriesCollapsed(t2) {
      const e2 = this.w.globals;
      return !e2.seriesYAxisMap[t2].some((t3) => -1 === e2.collapsedSeriesIndices.indexOf(t3));
    }
    translateYAxisIndex(t2) {
      const e2 = this.w, s2 = e2.globals, i2 = e2.config.yaxis;
      return e2.seriesData.series.length > i2.length || i2.some((t3) => Array.isArray(t3.seriesName)) ? t2 : s2.seriesYAxisReverseMap[t2];
    }
    isYAxisHidden(t2) {
      const e2 = this.w, s2 = e2.config.yaxis[t2];
      if (!s2.show || this.yAxisAllSeriesCollapsed(t2)) return true;
      if (!s2.showForNullSeries) {
        const s3 = e2.globals.seriesYAxisMap[t2], i2 = new F(this.w);
        return s3.every((t3) => i2.isSeriesNull(t3));
      }
      return false;
    }
    getYAxisForeColor(t2, e2) {
      var s2;
      const i2 = this.w;
      return Array.isArray(t2) && i2.globals.yAxisScale[e2] && (null == (s2 = this.theme) || s2.pushExtraColors(t2, i2.globals.yAxisScale[e2].result.length, false)), t2;
    }
    drawYAxisTicks(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = this.w, l2 = new N(this.w);
      let h2 = n2.layout.translateY + n2.config.yaxis[a2].labels.offsetY;
      if (n2.globals.isBarHorizontal ? h2 = 0 : "heatmap" === n2.config.chart.type && (h2 += o2 / 2), i2.show && e2 > 0) {
        true === n2.config.yaxis[a2].opposite && (t2 += i2.width);
        for (let a3 = e2; a3 >= 0; a3--) {
          const e3 = l2.drawLine(t2 + s2.offsetX - i2.width + i2.offsetX, h2 + i2.offsetY, t2 + s2.offsetX + i2.offsetX, h2 + i2.offsetY, i2.color);
          r2.add(e3), h2 += o2;
        }
      }
    }
  }
  class K {
    constructor(t2, e2, s2) {
      this.w = t2, this.ctx = e2, this.elgrid = s2, this.axesUtils = new Z(t2, { theme: e2.theme, timeScale: e2.timeScale }), this.xaxisLabels = t2.labelData.labels.slice(), t2.labelData.timescaleLabels.length > 0 && !t2.globals.isBarHorizontal && (this.xaxisLabels = t2.labelData.timescaleLabels.slice()), t2.config.xaxis.overwriteCategories && (this.xaxisLabels = t2.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === t2.config.xaxis.position ? this.offY = 0 : this.offY = t2.layout.gridHeight, this.offY = this.offY + t2.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === t2.config.chart.type && t2.config.plotOptions.bar.horizontal, this.xaxisFontSize = t2.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = t2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = t2.config.xaxis.labels.style.colors, this.xaxisBorderWidth = t2.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = t2.config.yaxis[0].axisBorder.width.toString()), String(this.xaxisBorderWidth).indexOf("%") > -1 ? this.xaxisBorderWidth = t2.layout.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = t2.config.xaxis.axisBorder.height, this.yaxis = t2.config.yaxis[0];
    }
    drawXaxis() {
      const t2 = this.w, e2 = new N(this.w), s2 = e2.group({ class: "apexcharts-xaxis", transform: `translate(${t2.config.xaxis.offsetX}, ${t2.config.xaxis.offsetY})` }), i2 = e2.group({ class: "apexcharts-xaxis-texts-g", transform: `translate(${t2.layout.translateXAxisX}, ${t2.layout.translateXAxisY})` });
      s2.add(i2);
      let a2 = [];
      for (let t3 = 0; t3 < this.xaxisLabels.length; t3++) a2.push(this.xaxisLabels[t3]);
      if (this.drawXAxisLabelAndGroup(true, e2, i2, a2, t2.axisFlags.isXNumeric, (t3, e3) => e3), t2.labelData.hasXaxisGroups) {
        const s3 = t2.labelData.groups;
        a2 = [];
        for (let t3 = 0; t3 < s3.length; t3++) a2.push(s3[t3].title);
        const o2 = {};
        t2.config.xaxis.group.style && (o2.xaxisFontSize = t2.config.xaxis.group.style.fontSize, o2.xaxisFontFamily = t2.config.xaxis.group.style.fontFamily, o2.xaxisForeColors = t2.config.xaxis.group.style.colors, o2.fontWeight = t2.config.xaxis.group.style.fontWeight, o2.cssClass = t2.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(false, e2, i2, a2, false, (t3, e3) => s3[t3].cols * e3, o2);
      }
      if (void 0 !== t2.config.xaxis.title.text) {
        const i3 = e2.group({ class: "apexcharts-xaxis-title" }), a3 = e2.drawText({ x: t2.layout.gridWidth / 2 + t2.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t2.config.xaxis.position ? t2.layout.xAxisLabelsHeight : -t2.layout.xAxisLabelsHeight - 10) + t2.config.xaxis.title.offsetY, text: t2.config.xaxis.title.text, textAnchor: "middle", fontSize: t2.config.xaxis.title.style.fontSize, fontFamily: t2.config.xaxis.title.style.fontFamily, fontWeight: t2.config.xaxis.title.style.fontWeight, foreColor: t2.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t2.config.xaxis.title.style.cssClass });
        i3.add(a3), s2.add(i3);
      }
      if (t2.config.xaxis.axisBorder.show) {
        const i3 = t2.globals.barPadForNumericAxis, a3 = e2.drawLine(t2.globals.padHorizontal + t2.config.xaxis.axisBorder.offsetX - i3, this.offY, this.xaxisBorderWidth + i3, this.offY, t2.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t2.config.grid.show ? this.elgrid.elGridBorders.add(a3) : s2.add(a3);
      }
      return s2;
    }
    drawXAxisLabelAndGroup(t2, e2, s2, i2, a2, o2, r2 = {}) {
      var n2, l2;
      const h2 = [], c2 = [], d2 = this.w, g2 = r2.xaxisFontSize || this.xaxisFontSize, p2 = r2.xaxisFontFamily || this.xaxisFontFamily, u2 = r2.xaxisForeColors || this.xaxisForeColors, x2 = r2.fontWeight || d2.config.xaxis.labels.style.fontWeight, f2 = r2.cssClass || d2.config.xaxis.labels.style.cssClass;
      let m2, y2 = d2.globals.padHorizontal;
      const w2 = i2.length;
      let v2 = "category" === d2.config.xaxis.type ? d2.globals.dataPoints : w2;
      if (0 === v2 && w2 > v2 && (v2 = w2), a2) {
        const t3 = Math.max(Number(d2.config.xaxis.tickAmount) || 1, v2 > 1 ? v2 - 1 : v2);
        m2 = d2.layout.gridWidth / Math.min(t3, w2 - 1), y2 = y2 + o2(0, m2) / 2 + d2.config.xaxis.labels.offsetX;
      } else m2 = d2.layout.gridWidth / v2, y2 = y2 + o2(0, m2) + d2.config.xaxis.labels.offsetX;
      for (let a3 = 0; a3 <= w2 - 1; a3++) {
        let r3 = y2 - o2(a3, m2) / 2 + d2.config.xaxis.labels.offsetX;
        0 === a3 && 1 === w2 && m2 / 2 === y2 && 1 === v2 && (r3 = d2.layout.gridWidth / 2);
        let A2 = this.axesUtils.getLabel(i2, d2.labelData.timescaleLabels, r3, a3, h2, g2, t2), C2 = 28;
        d2.layout.rotateXLabels && t2 && (C2 = 22), d2.config.xaxis.title.text && "top" === d2.config.xaxis.position && (C2 += parseFloat(d2.config.xaxis.title.style.fontSize) + 2), t2 || (C2 = C2 + parseFloat(g2) + (d2.layout.xAxisLabelsHeight - d2.layout.xAxisGroupLabelsHeight) + (d2.layout.rotateXLabels ? 10 : 0));
        A2 = void 0 !== d2.config.xaxis.tickAmount && "dataPoints" !== d2.config.xaxis.tickAmount && "datetime" !== d2.config.xaxis.type ? this.axesUtils.checkLabelBasedOnTickamount(a3, A2, w2) : this.axesUtils.checkForOverflowingLabels(a3, A2, w2, h2, c2);
        const S2 = () => t2 && d2.config.xaxis.convertedCatToNumeric ? u2[d2.globals.minX + a3 - 1] : u2[a3], k2 = (null != (l2 = null == (n2 = A2.textRect) ? void 0 : n2.width) ? l2 : 0) / 2, D2 = A2.x + k2 < 0;
        if (d2.config.xaxis.labels.show && !D2) {
          const i3 = e2.drawText({ x: A2.x, y: this.offY + d2.config.xaxis.labels.offsetY + C2 - ("top" === d2.config.xaxis.position ? d2.layout.xAxisHeight + d2.config.xaxis.axisTicks.height - 2 : 0), text: A2.text, textAnchor: "middle", fontWeight: x2, fontSize: g2, fontFamily: p2, foreColor: Array.isArray(u2) ? S2() : u2, isPlainText: false, cssClass: (t2 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + f2 });
          if (s2.add(i3), i3.on("click", (t3) => {
            if ("function" == typeof d2.config.chart.events.xAxisLabelClick) {
              const e3 = Object.assign({}, d2, { labelIndex: a3 });
              d2.config.chart.events.xAxisLabelClick(t3, this.ctx, e3);
            }
          }), t2) {
            const t3 = b.createElementNS(W, "title");
            t3.textContent = Array.isArray(A2.text) ? A2.text.join(" ") : A2.text, i3.node.appendChild(t3), "" !== A2.text && (h2.push(A2.text), c2.push(A2));
          }
        }
        a3 < w2 - 1 && (y2 += o2(a3 + 1, m2));
      }
    }
    drawXaxisInversed(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = e2.config.yaxis[0].opposite ? e2.globals.translateYAxisX[t2] : 0, a2 = s2.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t2 }), o2 = s2.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + i2 + ", 0)" });
      a2.add(o2);
      const r2 = [];
      if (e2.config.yaxis[t2].show) for (let t3 = 0; t3 < this.xaxisLabels.length; t3++) r2.push(this.xaxisLabels[t3]);
      const n2 = e2.layout.gridHeight / r2.length;
      let l2 = -n2 / 2.2;
      const h2 = e2.formatters.yLabelFormatters[0], c2 = e2.config.yaxis[0].labels;
      if (c2.show) for (let i3 = 0; i3 <= r2.length - 1; i3++) {
        let a3 = void 0 === r2[i3] ? "" : r2[i3];
        a3 = h2(a3, { seriesIndex: t2, dataPointIndex: i3, w: e2 });
        const d3 = this.axesUtils.getYAxisForeColor(c2.style.colors, t2), g3 = () => Array.isArray(d3) ? d3[i3] : d3;
        let p2 = 0;
        Array.isArray(a3) && (p2 = a3.length / 2 * parseInt(c2.style.fontSize, 10));
        let u2 = c2.offsetX - 15, x2 = "end";
        this.yaxis.opposite && (x2 = "start"), "left" === e2.config.yaxis[0].labels.align ? (u2 = c2.offsetX, x2 = "start") : "center" === e2.config.yaxis[0].labels.align ? (u2 = c2.offsetX, x2 = "middle") : "right" === e2.config.yaxis[0].labels.align && (x2 = "end");
        const f2 = s2.drawText({ x: u2, y: l2 + n2 + c2.offsetY - p2, text: a3, textAnchor: x2, foreColor: g3(), fontSize: c2.style.fontSize, fontFamily: c2.style.fontFamily, fontWeight: c2.style.fontWeight, isPlainText: false, cssClass: "apexcharts-yaxis-label " + c2.style.cssClass, maxWidth: c2.maxWidth });
        o2.add(f2), f2.on("click", (t3) => {
          if ("function" == typeof e2.config.chart.events.xAxisLabelClick) {
            const s3 = Object.assign({}, e2, { labelIndex: i3 });
            e2.config.chart.events.xAxisLabelClick(t3, this.ctx, s3);
          }
        });
        const m2 = b.createElementNS(W, "title");
        if (m2.textContent = Array.isArray(a3) ? a3.join(" ") : a3, f2.node.appendChild(m2), 0 !== e2.config.yaxis[t2].labels.rotate) {
          const i4 = s2.rotateAroundCenter(f2.node);
          f2.node.setAttribute("transform", `rotate(${e2.config.yaxis[t2].labels.rotate} 0 ${i4.y})`);
        }
        l2 += n2;
      }
      if (void 0 !== e2.config.yaxis[0].title.text) {
        const t3 = s2.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + i2 + ", 0)" }), o3 = s2.drawText({ x: e2.config.yaxis[0].title.offsetX, y: e2.layout.gridHeight / 2 + e2.config.yaxis[0].title.offsetY, text: e2.config.yaxis[0].title.text, textAnchor: "middle", foreColor: e2.config.yaxis[0].title.style.color, fontSize: e2.config.yaxis[0].title.style.fontSize, fontWeight: e2.config.yaxis[0].title.style.fontWeight, fontFamily: e2.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + e2.config.yaxis[0].title.style.cssClass });
        t3.add(o3), a2.add(t3);
      }
      let d2 = 0;
      this.isCategoryBarHorizontal && e2.config.yaxis[0].opposite && (d2 = e2.layout.gridWidth);
      const g2 = e2.config.xaxis.axisBorder;
      if (g2.show) {
        const t3 = s2.drawLine(e2.globals.padHorizontal + g2.offsetX + d2, 1 + g2.offsetY, e2.globals.padHorizontal + g2.offsetX + d2, e2.layout.gridHeight + g2.offsetY, g2.color, 0);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(t3) : a2.add(t3);
      }
      return e2.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(d2, r2.length, e2.config.yaxis[0].axisBorder, e2.config.yaxis[0].axisTicks, 0, n2, a2), a2;
    }
    drawXaxisTicks(t2, e2, s2) {
      const i2 = this.w, a2 = t2;
      if (t2 < 0 || t2 - 2 > i2.layout.gridWidth) return;
      const o2 = this.offY + i2.config.xaxis.axisTicks.offsetY;
      if (e2 = e2 + o2 + i2.config.xaxis.axisTicks.height, "top" === i2.config.xaxis.position && (e2 = o2 - i2.config.xaxis.axisTicks.height), i2.config.xaxis.axisTicks.show) {
        const r2 = new N(this.w).drawLine(t2 + i2.config.xaxis.axisTicks.offsetX, o2 + i2.config.xaxis.offsetY, a2 + i2.config.xaxis.axisTicks.offsetX, e2 + i2.config.xaxis.offsetY, i2.config.xaxis.axisTicks.color);
        s2.add(r2), r2.node.classList.add("apexcharts-xaxis-tick");
      }
    }
    getXAxisTicksPositions() {
      const t2 = this.w, e2 = [], s2 = this.xaxisLabels.length;
      let i2 = t2.globals.padHorizontal;
      if (t2.labelData.timescaleLabels.length > 0) for (let t3 = 0; t3 < s2; t3++) i2 = this.xaxisLabels[t3].position, e2.push(i2);
      else {
        const a2 = s2;
        for (let s3 = 0; s3 < a2; s3++) {
          let s4 = a2;
          t2.axisFlags.isXNumeric && "bar" !== t2.config.chart.type && (s4 -= 1), i2 += t2.layout.gridWidth / s4, e2.push(i2);
        }
      }
      return e2;
    }
    xAxisLabelCorrections() {
      var t2, e2, s2;
      const i2 = this.w, a2 = new N(this.w), o2 = i2.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), r2 = i2.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), n2 = i2.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), l2 = i2.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (i2.layout.rotateXLabels || i2.config.xaxis.labels.rotateAlways) for (let t3 = 0; t3 < r2.length; t3++) {
        const e3 = a2.rotateAroundCenter(r2[t3]);
        e3.y = e3.y - 1, e3.x = e3.x + 1, r2[t3].setAttribute("transform", `rotate(${i2.config.xaxis.labels.rotate} ${e3.x} ${e3.y})`), r2[t3].setAttribute("text-anchor", "end"), null == o2 || o2.setAttribute("transform", "translate(0, -10)");
        const s3 = r2[t3].childNodes;
        i2.config.xaxis.labels.trim && Array.prototype.forEach.call(s3, (t4) => {
          a2.placeTextWithEllipsis(t4, t4.textContent, i2.layout.xAxisLabelsHeight - ("bottom" === i2.config.legend.position ? 20 : 10));
        });
      }
      else {
        const t3 = i2.layout.gridWidth / (i2.labelData.labels.length + 1);
        for (let e3 = 0; e3 < r2.length; e3++) {
          const s3 = r2[e3].childNodes;
          i2.config.xaxis.labels.trim && "datetime" !== i2.config.xaxis.type && Array.prototype.forEach.call(s3, (e4) => {
            a2.placeTextWithEllipsis(e4, e4.textContent, t3);
          });
        }
      }
      if (n2.length > 0) {
        const o3 = n2[n2.length - 1].getBBox(), r3 = n2[0].getBBox();
        o3.x < -20 && (null == (t2 = n2[n2.length - 1].parentNode) || t2.removeChild(n2[n2.length - 1])), r3.x + r3.width > i2.layout.gridWidth && !i2.globals.isBarHorizontal && (null == (e2 = n2[0].parentNode) || e2.removeChild(n2[0]));
        for (let t3 = 0; t3 < l2.length; t3++) a2.placeTextWithEllipsis(l2[t3], null != (s2 = l2[t3].textContent) ? s2 : "", i2.config.yaxis[0].labels.maxWidth - (i2.config.yaxis[0].title.text ? 2 * parseFloat(i2.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    }
  }
  class J {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.xaxisLabels = t2.labelData.labels.slice(), this.axesUtils = new Z(e2.w, { theme: e2.theme, timeScale: e2.timeScale }), this.isRangeBar = t2.rangeData.seriesRange.length && t2.globals.isBarHorizontal, t2.labelData.timescaleLabels.length > 0 && (this.xaxisLabels = t2.labelData.timescaleLabels.slice());
    }
    drawGridArea(t2 = null) {
      const e2 = this.w, s2 = new N(this.w);
      t2 || (t2 = s2.group({ class: "apexcharts-grid" }));
      const i2 = s2.drawLine(e2.globals.padHorizontal, 1, e2.globals.padHorizontal, e2.layout.gridHeight, "transparent"), a2 = s2.drawLine(e2.globals.padHorizontal, e2.layout.gridHeight, e2.layout.gridWidth, e2.layout.gridHeight, "transparent");
      return t2.add(a2), t2.add(i2), t2;
    }
    drawGrid() {
      if (this.w.globals.axisCharts) {
        const t2 = this.renderGrid();
        return this.drawGridArea(t2.el), t2;
      }
      return null;
    }
    createGridMask() {
      const t2 = this.w, e2 = t2.globals, s2 = new N(this.w), i2 = Array.isArray(t2.config.stroke.width) ? Math.max(...t2.config.stroke.width) : t2.config.stroke.width, a2 = (t3) => {
        const e3 = b.createElementNS(W, "clipPath");
        return e3.setAttribute("id", t3), e3;
      };
      t2.dom.elGridRectMask = a2(`gridRectMask${e2.cuid}`), t2.dom.elGridRectBarMask = a2(`gridRectBarMask${e2.cuid}`), t2.dom.elGridRectMarkerMask = a2(`gridRectMarkerMask${e2.cuid}`), t2.dom.elForecastMask = a2(`forecastMask${e2.cuid}`), t2.dom.elNonForecastMask = a2(`nonForecastMask${e2.cuid}`);
      let o2 = 0, r2 = 0;
      (["bar", "rangeBar", "candlestick", "boxPlot", "violin"].includes(t2.config.chart.type) || t2.globals.comboBarCount > 0) && t2.axisFlags.isXNumeric && !t2.globals.isBarHorizontal && (o2 = Math.max(t2.config.grid.padding.left, e2.barPadForNumericAxis), r2 = Math.max(t2.config.grid.padding.right, e2.barPadForNumericAxis)), t2.dom.elGridRect = s2.drawRect(-i2 / 2 - 2, -i2 / 2 - 2, t2.layout.gridWidth + i2 + 4, t2.layout.gridHeight + i2 + 4, 0, "#fff"), t2.dom.elGridRectBar = s2.drawRect(-i2 / 2 - o2 - 2, -i2 / 2 - 2, t2.layout.gridWidth + i2 + r2 + o2 + 4, t2.layout.gridHeight + i2 + 4, 0, "#fff");
      const n2 = t2.globals.markers.largestSize;
      t2.dom.elGridRectMarker = s2.drawRect(Math.min(-i2 / 2 - o2 - 2, -n2), -n2, t2.layout.gridWidth + Math.max(i2 + r2 + o2 + 4, 2 * n2), t2.layout.gridHeight + 2 * n2, 0, "#fff"), t2.dom.elGridRectMask.appendChild(t2.dom.elGridRect.node), t2.dom.elGridRectBarMask.appendChild(t2.dom.elGridRectBar.node), t2.dom.elGridRectMarkerMask.appendChild(t2.dom.elGridRectMarker.node);
      const l2 = t2.dom.elDefs.node;
      l2.appendChild(t2.dom.elGridRectMask), l2.appendChild(t2.dom.elGridRectBarMask), l2.appendChild(t2.dom.elGridRectMarkerMask), l2.appendChild(t2.dom.elForecastMask), l2.appendChild(t2.dom.elNonForecastMask);
    }
    _drawGridLines({ i: t2, x1: e2, y1: s2, x2: i2, y2: a2, xCount: o2, parent: r2 }) {
      const n2 = this.w;
      if (!(0 === t2 && n2.globals.skipFirstTimelinelabel || t2 === o2 - 1 && n2.globals.skipLastTimelinelabel && !n2.config.xaxis.labels.formatter || "radar" === n2.config.chart.type)) {
        n2.config.grid.xaxis.lines.show && this._drawGridLine({ i: t2, x1: e2, y1: s2, x2: i2, y2: a2, xCount: o2, parent: r2 });
        let l2 = 0;
        if (n2.labelData.hasXaxisGroups && "between" === n2.config.xaxis.tickPlacement) {
          const e3 = n2.labelData.groups;
          if (e3) {
            let s3 = 0;
            for (let i3 = 0; s3 < t2 && i3 < e3.length; i3++) s3 += e3[i3].cols;
            s3 === t2 && (l2 = 0.6 * n2.layout.xAxisLabelsHeight);
          }
        }
        new K(this.w, this.ctx).drawXaxisTicks(e2, l2, n2.dom.elGraphical);
      }
    }
    _drawGridLine({ i: t2, x1: e2, y1: s2, x2: i2, y2: a2, xCount: o2, parent: r2 }) {
      const n2 = this.w, l2 = r2.node.classList.contains("apexcharts-gridlines-horizontal"), h2 = n2.globals.barPadForNumericAxis, c2 = 0 === s2 && 0 === a2 || 0 === e2 && 0 === i2 || s2 === n2.layout.gridHeight && a2 === n2.layout.gridHeight || n2.globals.isBarHorizontal && (0 === t2 || t2 === o2 - 1), d2 = new N(this.w).drawLine(e2 - (l2 ? h2 : 0), s2, i2 + (l2 ? h2 : 0), a2, n2.config.grid.borderColor, n2.config.grid.strokeDashArray);
      d2.node.classList.add("apexcharts-gridline"), c2 && n2.config.grid.show ? this.elGridBorders.add(d2) : r2.add(d2);
    }
    _drawGridBandRect({ c: t2, x1: e2, y1: s2, x2: i2, y2: a2, type: o2 }) {
      const r2 = this.w, n2 = new N(this.w), l2 = r2.globals.barPadForNumericAxis, h2 = r2.config.grid[o2].colors[t2], c2 = n2.drawRect(e2 - ("row" === o2 ? l2 : 0), s2, i2 + ("row" === o2 ? 2 * l2 : 0), a2, 0, h2, r2.config.grid[o2].opacity);
      this.elg.add(c2), c2.attr("clip-path", `url(#gridRectMask${r2.globals.cuid})`), c2.node.classList.add(`apexcharts-grid-${o2}`);
    }
    _drawXYLines({ xCount: t2, tickAmount: e2 }) {
      var s2;
      const i2 = this.w, a2 = ({ xC: e3, x1: s3, y1: i3, x2: a3, y2: o3 }) => {
        for (let r2 = 0; r2 < e3; r2++) s3 = this.xaxisLabels[r2].position, a3 = this.xaxisLabels[r2].position, this._drawGridLines({ i: r2, x1: s3, y1: i3, x2: a3, y2: o3, xCount: t2, parent: this.elgridLinesV });
      }, o2 = ({ xC: e3, x1: s3, y1: a3, x2: o3, y2: r2 }) => {
        for (let n2 = 0; n2 < e3 + (i2.axisFlags.isXNumeric ? 0 : 1); n2++) 0 === n2 && 1 === e3 && 1 === i2.globals.dataPoints && (o3 = s3 = i2.layout.gridWidth / 2), this._drawGridLines({ i: n2, x1: s3, y1: a3, x2: o3, y2: r2, xCount: t2, parent: this.elgridLinesV }), o3 = s3 += i2.layout.gridWidth / (i2.axisFlags.isXNumeric ? e3 - 1 : e3);
      };
      if (i2.config.grid.xaxis.lines.show || i2.config.xaxis.axisTicks.show) {
        const e3 = i2.globals.padHorizontal, r2 = 0;
        let n2;
        const l2 = i2.layout.gridHeight;
        i2.labelData.timescaleLabels.length ? a2({ xC: t2, x1: e3, y1: r2, x2: n2, y2: l2 }) : (i2.axisFlags.isXNumeric && (t2 = null == (s2 = i2.globals.xAxisScale) ? void 0 : s2.result.length), o2({ xC: t2, x1: e3, y1: r2, x2: n2, y2: l2 }));
      }
      if (i2.config.grid.yaxis.lines.show) {
        const t3 = 0;
        let s3 = 0, a3 = 0;
        const o3 = i2.layout.gridWidth;
        let r2 = e2 + 1;
        this.isRangeBar && (r2 = i2.labelData.labels.length);
        for (let n2 = 0; n2 < r2 + (this.isRangeBar ? 1 : 0); n2++) this._drawGridLine({ i: n2, xCount: r2 + (this.isRangeBar ? 1 : 0), x1: t3, y1: s3, x2: o3, y2: a3, parent: this.elgridLinesH }), s3 += i2.layout.gridHeight / (this.isRangeBar ? r2 : e2), a3 = s3;
      }
    }
    _drawInvertedXYLines({ xCount: t2 }) {
      const e2 = this.w;
      if (e2.config.grid.xaxis.lines.show || e2.config.xaxis.axisTicks.show) {
        let s2 = e2.globals.padHorizontal;
        const i2 = 0;
        let a2;
        const o2 = e2.layout.gridHeight;
        for (let r2 = 0; r2 < t2 + 1; r2++) {
          e2.config.grid.xaxis.lines.show && this._drawGridLine({ i: r2, xCount: t2 + 1, x1: s2, y1: i2, x2: a2, y2: o2, parent: this.elgridLinesV });
          new K(this.w, this.ctx).drawXaxisTicks(s2, 0, e2.dom.elGraphical), s2 += e2.layout.gridWidth / t2, a2 = s2;
        }
      }
      if (e2.config.grid.yaxis.lines.show) {
        const t3 = 0;
        let s2 = 0, i2 = 0;
        const a2 = e2.layout.gridWidth;
        for (let o2 = 0; o2 < e2.globals.dataPoints + 1; o2++) this._drawGridLine({ i: o2, xCount: e2.globals.dataPoints + 1, x1: t3, y1: s2, x2: a2, y2: i2, parent: this.elgridLinesH }), s2 += e2.layout.gridHeight / e2.globals.dataPoints, i2 = s2;
      }
    }
    renderGrid() {
      var t2, e2, s2;
      const i2 = this.w, a2 = i2.globals, o2 = new N(this.w);
      this.elg = o2.group({ class: "apexcharts-grid" }), this.elgridLinesH = o2.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = o2.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = o2.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), i2.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      let r2 = 0;
      for (; r2 < a2.seriesYAxisMap.length && a2.ignoreYAxisIndexes.includes(r2); ) r2++;
      r2 === a2.seriesYAxisMap.length && (r2 = 0);
      let n2, l2 = a2.yAxisScale[r2].result.length - 1;
      return !a2.isBarHorizontal || this.isRangeBar ? (n2 = this.xaxisLabels.length, this.isRangeBar && (l2 = i2.labelData.labels.length, i2.config.xaxis.tickAmount && i2.config.xaxis.labels.formatter && (n2 = i2.config.xaxis.tickAmount), (null == (s2 = null == (e2 = null == (t2 = a2.yAxisScale) ? void 0 : t2[r2]) ? void 0 : e2.result) ? void 0 : s2.length) > 0 && "datetime" !== i2.config.xaxis.type && (n2 = a2.yAxisScale[r2].result.length - 1)), this._drawXYLines({ xCount: n2, tickAmount: l2 })) : (n2 = l2, l2 = a2.xTickAmount, this._drawInvertedXYLines({ xCount: n2, tickAmount: l2 })), this.drawGridBands(n2, l2), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: i2.layout.gridWidth / n2 };
    }
    drawGridBands(t2, e2) {
      var s2, i2, a2, o2, r2;
      const n2 = this.w, l2 = (t3, s3, i3, a3, o3, r3) => {
        for (let l3 = 0, h2 = 0; l3 < s3; l3++, h2++) h2 >= n2.config.grid[t3].colors.length && (h2 = 0), this._drawGridBandRect({ c: h2, x1: i3, y1: a3, x2: o3, y2: r3, type: t3 }), a3 += n2.layout.gridHeight / e2;
      };
      if ((null == (s2 = n2.config.grid.row.colors) ? void 0 : s2.length) > 0 && l2("row", e2, 0, 0, n2.layout.gridWidth, n2.layout.gridHeight / e2), (null == (i2 = n2.config.grid.column.colors) ? void 0 : i2.length) > 0) {
        let e3 = n2.globals.isBarHorizontal || "on" !== n2.config.xaxis.tickPlacement || "category" !== n2.config.xaxis.type && !n2.config.xaxis.convertedCatToNumeric ? t2 : t2 - 1;
        n2.axisFlags.isXNumeric && (e3 = (null != (o2 = null == (a2 = n2.globals.xAxisScale) ? void 0 : a2.result.length) ? o2 : 1) - 1);
        let s3 = n2.globals.padHorizontal;
        const i3 = 0;
        let l3 = n2.globals.padHorizontal + n2.layout.gridWidth / e3;
        const h2 = n2.layout.gridHeight;
        for (let a3 = 0, o3 = 0; a3 < t2; a3++, o3++) o3 >= n2.config.grid.column.colors.length && (o3 = 0), "datetime" === n2.config.xaxis.type && (s3 = this.xaxisLabels[a3].position, l3 = ((null == (r2 = this.xaxisLabels[a3 + 1]) ? void 0 : r2.position) || n2.layout.gridWidth) - this.xaxisLabels[a3].position), this._drawGridBandRect({ c: o3, x1: s3, y1: i3, x2: l3, y2: h2, type: "column" }), s3 += n2.layout.gridWidth / e3;
      }
    }
  }
  class Q {
    constructor(t2) {
      this.w = t2, this.coreUtils = new F(this.w);
    }
    niceScale(t2, e2, s2 = 0) {
      const i2 = 1e-11, a2 = this.w, o2 = a2.globals;
      let r2, n2, l2, h2;
      o2.isBarHorizontal ? (r2 = a2.config.xaxis, n2 = Math.max((o2.svgWidth - 100) / 25, 2)) : (r2 = a2.config.yaxis[s2], n2 = Math.max((o2.svgHeight - 100) / 15, 2)), m.isNumber(n2) || (n2 = 10), l2 = void 0 !== r2.min && null !== r2.min, h2 = void 0 !== r2.max && null !== r2.min;
      let c2 = void 0 !== r2.stepSize && null !== r2.stepSize, d2 = void 0 !== r2.tickAmount && null !== r2.tickAmount, g2 = d2 ? r2.tickAmount : M[Math.min(Math.round(n2 / 2), M.length - 1)];
      if (o2.isMultipleYAxis && !d2 && o2.multiAxisTickAmount > 0 && (g2 = o2.multiAxisTickAmount, d2 = true), g2 = "dataPoints" === g2 ? o2.dataPoints - 1 : Math.abs(Math.round(g2)), (t2 === Number.MIN_VALUE && 0 === e2 || !m.isNumber(t2) && !m.isNumber(e2) || t2 === Number.MIN_VALUE && e2 === -Number.MAX_VALUE) && (t2 = m.isNumber(r2.min) ? r2.min : 0, e2 = m.isNumber(r2.max) ? r2.max : t2 + g2, o2.allSeriesCollapsed = false), t2 > e2) {
        const s3 = e2;
        e2 = t2, t2 = s3;
      } else t2 === e2 && (t2 = 0 === t2 ? 0 : t2 - 1, e2 = 0 === e2 ? 2 : e2 + 1);
      const p2 = [];
      g2 < 1 && (g2 = 1);
      let u2 = g2, x2 = Math.abs(e2 - t2);
      !l2 && t2 > 0 && t2 / x2 < 0.15 && (t2 = 0, l2 = true), !h2 && e2 < 0 && -e2 / x2 < 0.15 && (e2 = 0, h2 = true), x2 = Math.abs(e2 - t2);
      let f2 = x2 / u2, b2 = f2;
      const y2 = Math.floor(Math.log10(b2)), w2 = Math.pow(10, y2);
      let v2 = Math.ceil(b2 / w2);
      if (v2 = L[0 === o2.yValueDecimal ? 0 : 1][v2], b2 = v2 * w2, f2 = b2, o2.isBarHorizontal && r2.stepSize && "datetime" !== r2.type ? (f2 = r2.stepSize, c2 = true) : c2 && (f2 = r2.stepSize), c2 && r2.forceNiceScale) {
        const t3 = Math.floor(Math.log10(f2));
        f2 *= Math.pow(10, y2 - t3);
      }
      if (l2 && h2) {
        let t3 = x2 / u2;
        if (d2) if (c2) if (0 != m.mod(x2, f2)) {
          const e3 = m.getGCD(f2, t3);
          f2 = t3 / e3 < 10 ? e3 : t3;
        } else 0 == m.mod(f2, t3) ? f2 = t3 : (t3 = f2, d2 = false);
        else f2 = t3;
        else if (c2) 0 == m.mod(x2, f2) ? t3 = f2 : f2 = t3;
        else if (0 == m.mod(x2, f2)) t3 = f2;
        else {
          u2 = Math.ceil(x2 / f2), t3 = x2 / u2;
          const e3 = m.getGCD(x2, f2);
          x2 / e3 < n2 && (t3 = e3), f2 = t3;
        }
        u2 = Math.round(x2 / f2);
      } else {
        if (l2 || h2) {
          if (h2) if (d2) t2 = e2 - f2 * u2;
          else {
            const s3 = t2;
            t2 = f2 * Math.floor(t2 / f2), Math.abs(e2 - t2) / m.getGCD(x2, f2) > n2 && (t2 = e2 - f2 * g2, t2 += f2 * Math.floor((s3 - t2) / f2));
          }
          else if (l2) if (d2) e2 = t2 + f2 * u2;
          else {
            const s3 = e2;
            e2 = f2 * Math.ceil(e2 / f2), Math.abs(e2 - t2) / m.getGCD(x2, f2) > n2 && (e2 = t2 + f2 * g2, e2 += f2 * Math.ceil((s3 - e2) / f2));
          }
        } else if (o2.isMultipleYAxis && d2) {
          const s3 = f2 * Math.floor(t2 / f2);
          let i3 = s3 + f2 * u2;
          i3 < e2 && (f2 *= 2), i3 = e2, e2 = (t2 = s3) + f2 * u2, x2 = Math.abs(e2 - t2), t2 > 0 && t2 < Math.abs(i3 - e2) && (t2 = 0, e2 = f2 * u2), e2 < 0 && -e2 < Math.abs(s3 - t2) && (e2 = 0, t2 = -f2 * u2);
        } else t2 = f2 * Math.floor(t2 / f2), e2 = f2 * Math.ceil(e2 / f2);
        x2 = Math.abs(e2 - t2), f2 = m.getGCD(x2, f2), u2 = Math.round(x2 / f2);
      }
      if (d2 || l2 || h2 || (u2 = Math.ceil((x2 - i2) / (f2 + i2)), u2 > 16 && m.getPrimeFactors(u2).length < 2 && u2++), !d2 && r2.forceNiceScale && 0 === o2.yValueDecimal && u2 > x2 && (u2 = x2, f2 = Math.round(x2 / u2)), u2 > n2 && (!d2 && !c2 || r2.forceNiceScale)) {
        const t3 = m.getPrimeFactors(u2), e3 = t3.length - 1;
        let s3 = u2;
        t: for (var A2 = 0; A2 < e3; A2++) for (var C2 = 0; C2 <= e3 - A2; C2++) {
          const i3 = Math.min(C2 + A2, e3);
          let a3 = s3, o3 = 1;
          for (var S2 = C2; S2 <= i3; S2++) o3 *= t3[S2];
          if (a3 /= o3, a3 < n2) {
            s3 = a3;
            break t;
          }
        }
        f2 = s3 === u2 ? x2 : x2 / s3, u2 = Math.round(x2 / f2);
      }
      o2.isMultipleYAxis && 0 == o2.multiAxisTickAmount && o2.ignoreYAxisIndexes.indexOf(s2) < 0 && (o2.multiAxisTickAmount = u2);
      let k2 = t2 - f2;
      const D2 = f2 * i2;
      do {
        k2 += f2, p2.push(m.stripNumber(k2, 7));
      } while (e2 - k2 > D2);
      return { result: p2, niceMin: p2[0], niceMax: p2[p2.length - 1] };
    }
    linearScale(t2, e2, s2 = 10, i2 = 0, a2 = void 0) {
      const o2 = Math.abs(e2 - t2);
      let r2 = [];
      if (t2 === e2) return r2 = [t2], { result: r2, niceMin: r2[0], niceMax: r2[r2.length - 1] };
      "dataPoints" === (s2 = this._adjustTicksForSmallRange(s2, i2, o2)) && (s2 = this.w.globals.dataPoints - 1);
      const n2 = s2;
      a2 || (a2 = o2 / n2);
      if (0 !== a2 && isFinite(a2)) {
        const t3 = Math.floor(Math.log10(Math.abs(a2))), e3 = Math.max(2, 2 - t3), s3 = Math.pow(10, e3);
        a2 = Math.round((a2 + Number.EPSILON) * s3) / s3;
      }
      let l2 = s2 === Number.MAX_VALUE ? 5 : n2;
      s2 === Number.MAX_VALUE && (a2 = 1);
      let h2 = t2;
      for (; l2 >= 0; ) r2.push(h2), h2 = m.preciseAddition(h2, a2), l2 -= 1;
      return { result: r2, niceMin: r2[0], niceMax: r2[r2.length - 1] };
    }
    logarithmicScaleNice(t2, e2, s2) {
      e2 <= 0 && (e2 = Math.max(t2, s2)), t2 <= 0 && (t2 = Math.min(e2, s2));
      const i2 = [], a2 = Math.ceil(Math.log(e2) / Math.log(s2) + 1);
      for (let e3 = Math.floor(Math.log(t2) / Math.log(s2)); e3 < a2; e3++) i2.push(Math.pow(s2, e3));
      return { result: i2, niceMin: i2[0], niceMax: i2[i2.length - 1] };
    }
    logarithmicScale(t2, e2, s2) {
      e2 <= 0 && (e2 = Math.max(t2, s2)), t2 <= 0 && (t2 = Math.min(e2, s2));
      const i2 = [], a2 = Math.log(e2) / Math.log(s2), o2 = Math.log(t2) / Math.log(s2), r2 = a2 - o2, n2 = Math.round(r2), l2 = r2 / n2;
      for (let t3 = 0, e3 = o2; t3 < n2; t3++, e3 += l2) i2.push(Math.pow(s2, e3));
      return i2.push(Math.pow(s2, a2)), { result: i2, niceMin: t2, niceMax: e2 };
    }
    _adjustTicksForSmallRange(t2, e2, s2) {
      let i2 = t2;
      if (void 0 !== e2 && this.w.config.yaxis[e2].labels.formatter && void 0 === this.w.config.yaxis[e2].tickAmount) {
        const t3 = Number(this.w.config.yaxis[e2].labels.formatter(1));
        m.isNumber(t3) && 0 === this.w.globals.yValueDecimal && (i2 = Math.ceil(s2));
      }
      return i2 < t2 ? i2 : t2;
    }
    setYScaleForIndex(t2, e2, s2) {
      const i2 = this.w.globals, a2 = this.w.config, o2 = i2.isBarHorizontal ? a2.xaxis : a2.yaxis[t2];
      void 0 === i2.yAxisScale[t2] && (i2.yAxisScale[t2] = []);
      const r2 = Math.abs(s2 - e2);
      o2.logarithmic && r2 <= 5 && (i2.invalidLogScale = true), o2.logarithmic && r2 > 5 ? (i2.allSeriesCollapsed = false, i2.yAxisScale[t2] = o2.forceNiceScale ? this.logarithmicScaleNice(e2, s2, o2.logBase) : this.logarithmicScale(e2, s2, o2.logBase)) : s2 !== -Number.MAX_VALUE && m.isNumber(s2) && e2 !== Number.MAX_VALUE && m.isNumber(e2) ? (i2.allSeriesCollapsed = false, i2.yAxisScale[t2] = this.niceScale(e2, s2, t2)) : i2.yAxisScale[t2] = this.niceScale(Number.MIN_VALUE, 0, t2);
    }
    setXScale(t2, e2) {
      const s2 = this.w, i2 = s2.globals;
      if (e2 !== -Number.MAX_VALUE && m.isNumber(e2)) {
        const a2 = i2.xTickAmount;
        i2.xAxisScale = this.linearScale(t2, e2, a2, 0, void 0 === s2.config.xaxis.max ? s2.config.xaxis.stepSize : void 0);
      } else i2.xAxisScale = this.linearScale(0, 10, 10);
      return i2.xAxisScale;
    }
    scaleMultipleYAxes() {
      const t2 = this.w.config, e2 = this.w.globals;
      this.coreUtils.setSeriesYAxisMappings();
      const s2 = e2.seriesYAxisMap, i2 = e2.minYArr, a2 = e2.maxYArr, o2 = [], r2 = !e2.isBarHorizontal;
      if (e2.allSeriesCollapsed = true, e2.barGroups = [], s2.forEach((s3, n2) => {
        const l2 = [];
        if (s3.forEach((e3) => {
          var s4;
          const i3 = null == (s4 = t2.series[e3]) ? void 0 : s4.group;
          l2.indexOf(i3) < 0 && l2.push(i3);
        }), s3.length > 0) {
          let h2, c2, d2 = Number.MAX_VALUE, g2 = -Number.MAX_VALUE, p2 = d2, u2 = g2;
          if (t2.chart.stacked) {
            const i3 = new Array(e2.dataPoints).fill(0), a3 = [], o3 = [], r3 = [];
            l2.forEach(() => {
              a3.push(i3.map(() => Number.MIN_VALUE)), o3.push(i3.map(() => Number.MIN_VALUE)), r3.push(i3.map(() => Number.MIN_VALUE));
            });
            for (let i4 = 0; i4 < s3.length; i4++) {
              !h2 && t2.series[s3[i4]].type && (h2 = t2.series[s3[i4]].type);
              const d3 = s3[i4];
              c2 = t2.series[d3].group ? t2.series[d3].group : "axis-".concat(n2.toString());
              !(e2.collapsedSeriesIndices.indexOf(d3) < 0 && e2.ancillaryCollapsedSeriesIndices.indexOf(d3) < 0) || (e2.allSeriesCollapsed = false, l2.forEach((e3, s4) => {
                if (t2.series[d3].group === e3) for (let t3 = 0; t3 < this.w.seriesData.series[d3].length; t3++) {
                  const e4 = this.w.seriesData.series[d3][t3];
                  e4 >= 0 ? o3[s4][t3] += e4 : r3[s4][t3] += e4, a3[s4][t3] += e4, p2 = Math.min(p2, e4), u2 = Math.max(u2, e4);
                }
              })), "bar" !== h2 && "column" !== h2 || e2.barGroups.push(c2);
            }
            h2 || (h2 = t2.chart.type), "bar" === h2 || "column" === h2 ? l2.forEach((t3, e3) => {
              d2 = Math.min(d2, Math.min.apply(null, r3[e3])), g2 = Math.max(g2, Math.max.apply(null, o3[e3]));
            }) : (l2.forEach((t3, e3) => {
              p2 = Math.min(p2, Math.min.apply(null, a3[e3])), u2 = Math.max(u2, Math.max.apply(null, a3[e3]));
            }), d2 = p2, g2 = u2), d2 === Number.MIN_VALUE && g2 === Number.MIN_VALUE && (g2 = -Number.MAX_VALUE);
          } else for (let t3 = 0; t3 < s3.length; t3++) {
            const o3 = s3[t3];
            d2 = Math.min(d2, i2[o3]), g2 = Math.max(g2, a2[o3]);
            !(e2.collapsedSeriesIndices.indexOf(o3) < 0 && e2.ancillaryCollapsedSeriesIndices.indexOf(o3) < 0) || (e2.allSeriesCollapsed = false);
          }
          void 0 !== t2.yaxis[n2].min && (d2 = "function" == typeof t2.yaxis[n2].min ? t2.yaxis[n2].min(d2) : t2.yaxis[n2].min), void 0 !== t2.yaxis[n2].max && (g2 = "function" == typeof t2.yaxis[n2].max ? t2.yaxis[n2].max(g2) : t2.yaxis[n2].max), e2.barGroups = e2.barGroups.filter((t3, e3, s4) => s4.indexOf(t3) === e3);
          const x2 = t2.yaxis[n2];
          r2 && true === x2.alignZero && !x2.logarithmic && void 0 === x2.min && void 0 === x2.max && e2.ignoreYAxisIndexes.indexOf(n2) < 0 && m.isNumber(d2) && m.isNumber(g2) ? o2.push({ ai: n2, minY: d2, maxY: g2 }) : (this.setYScaleForIndex(n2, d2, g2), s3.forEach((t3) => {
            i2[t3] = e2.yAxisScale[n2].niceMin, a2[t3] = e2.yAxisScale[n2].niceMax;
          }));
        } else this.setYScaleForIndex(n2, 0, -Number.MAX_VALUE);
      }), o2.length >= 2) {
        o2.forEach((t4) => {
          this.setYScaleForIndex(t4.ai, t4.minY, t4.maxY), s2[t4.ai].forEach((s3) => {
            i2[s3] = e2.yAxisScale[t4.ai].niceMin, a2[s3] = e2.yAxisScale[t4.ai].niceMax;
          });
        });
        let t3 = 0;
        o2.forEach((s3) => {
          const i3 = e2.yAxisScale[s3.ai], a3 = i3.niceMax - i3.niceMin;
          if (a3 > 0) {
            const e3 = -i3.niceMin / a3;
            e3 > t3 && (t3 = e3);
          }
        }), t3 > 1 && (t3 = 1), t3 < 0 && (t3 = 0);
        const r3 = (t4) => {
          if (t4 <= 0) return 1;
          const e3 = Math.floor(Math.log10(t4)), s3 = Math.pow(10, e3), i3 = t4 / s3;
          let a3;
          return a3 = i3 <= 1 + 1e-9 ? 1 : i3 <= 2 + 1e-9 ? 2 : i3 <= 2.5 + 1e-9 ? 2.5 : i3 <= 5 + 1e-9 ? 5 : 10, a3 * s3;
        };
        o2.forEach((o3) => {
          const n2 = e2.yAxisScale[o3.ai];
          if (!n2.result || n2.result.length < 2) return;
          const l2 = n2.niceMax - n2.niceMin;
          if (l2 <= 0) return;
          const h2 = -n2.niceMin / l2;
          if (Math.abs(h2 - t3) <= 1e-9) return;
          const c2 = h2 < t3 && t3 < 1 - 1e-9, d2 = !c2 && h2 > t3 && t3 > 1e-9;
          if (!c2 && !d2) return;
          const g2 = c2 ? -t3 * n2.niceMax / (1 - t3) : n2.niceMin, p2 = d2 ? -n2.niceMin * (1 - t3) / t3 : n2.niceMax, u2 = p2 - g2;
          if (u2 <= 0) return;
          const x2 = Math.max(n2.result.length, 5), f2 = r3(u2 / Math.max(x2 - 1, 1));
          if (f2 <= 0) return;
          let b2, y2;
          if (c2) {
            b2 = Math.floor(g2 / f2 + 1e-9) * f2;
            const e3 = t3 > 1e-9 ? b2 * (t3 - 1) / t3 : n2.niceMax, s3 = Math.max(e3, n2.niceMax);
            y2 = Math.ceil(s3 / f2 - 1e-9) * f2;
          } else {
            y2 = Math.ceil(p2 / f2 - 1e-9) * f2;
            const e3 = t3 < 1 - 1e-9 ? -t3 * y2 / (1 - t3) : n2.niceMin, s3 = Math.min(e3, n2.niceMin);
            b2 = Math.floor(s3 / f2 + 1e-9) * f2;
          }
          n2.result = [];
          for (let t4 = b2; t4 <= y2 + 1e-9 * f2; t4 = m.preciseAddition(t4, f2)) n2.result.push(m.stripNumber(t4, 7));
          n2.niceMin = b2, n2.niceMax = y2, s2[o3.ai].forEach((t4) => {
            i2[t4] = n2.niceMin, a2[t4] = n2.niceMax;
          });
        });
      } else if (1 === o2.length) {
        const t3 = o2[0];
        this.setYScaleForIndex(t3.ai, t3.minY, t3.maxY), s2[t3.ai].forEach((s3) => {
          i2[s3] = e2.yAxisScale[t3.ai].niceMin, a2[s3] = e2.yAxisScale[t3.ai].niceMax;
        });
      }
    }
  }
  class tt {
    constructor(t2) {
      this.w = t2, this.scales = new Q(this.w);
    }
    init() {
      this.setYRange(), this.setXRange(), this.setZRange();
    }
    getMinYMaxY(t2, e2 = Number.MAX_VALUE, s2 = -Number.MAX_VALUE, i2 = null) {
      var a2, o2, r2, n2, l2, h2, c2, d2;
      const g2 = this.w.config, p2 = this.w.globals;
      let u2 = -Number.MAX_VALUE, x2 = Number.MIN_VALUE;
      null === i2 && (i2 = t2 + 1);
      const f2 = this.w.seriesData.series;
      let b2 = f2, y2 = f2;
      "candlestick" === g2.chart.type ? (b2 = this.w.candleData.seriesCandleL, y2 = this.w.candleData.seriesCandleH) : "boxPlot" === g2.chart.type ? (b2 = this.w.candleData.seriesCandleO, y2 = this.w.candleData.seriesCandleC) : "violin" === g2.chart.type ? (b2 = this.w.violinData.seriesViolinMin, y2 = this.w.violinData.seriesViolinMax) : this.w.axisFlags.isRangeData && (b2 = this.w.rangeData.seriesRangeStart, y2 = this.w.rangeData.seriesRangeEnd);
      let w2 = false;
      if (this.w.seriesData.seriesX.length >= i2) {
        const t3 = null == (a2 = p2.brushSource) ? void 0 : a2.w.config.chart.brush;
        (g2.chart.zoom.enabled && g2.chart.zoom.autoScaleYaxis || (null == t3 ? void 0 : t3.enabled) && (null == t3 ? void 0 : t3.autoScaleYaxis)) && (w2 = true);
      }
      for (let a3 = t2; a3 < i2; a3++) {
        p2.dataPoints = Math.max(p2.dataPoints, f2[a3].length);
        const t3 = g2.series[a3].type;
        this.w.labelData.categoryLabels.length && (p2.dataPoints = this.w.labelData.categoryLabels.filter((t4) => void 0 !== t4).length), this.w.labelData.labels.length && "datetime" !== g2.xaxis.type && 0 !== this.w.seriesData.series.reduce((t4, e3) => t4 + e3.length, 0) && (p2.dataPoints = Math.max(p2.dataPoints, this.w.labelData.labels.length));
        let i3 = 0, v2 = f2[a3].length - 1;
        if (w2) {
          if (g2.xaxis.min) for (; i3 < v2 && this.w.seriesData.seriesX[a3][i3] < g2.xaxis.min; i3++) ;
          if (g2.xaxis.max) for (; v2 > i3 && this.w.seriesData.seriesX[a3][v2] > g2.xaxis.max; v2--) ;
        }
        for (let g3 = i3; g3 <= v2 && g3 < this.w.seriesData.series[a3].length; g3++) {
          let i4 = f2[a3][g3];
          if (null !== i4 && m.isNumber(i4)) {
            switch (void 0 !== (null == (o2 = y2[a3]) ? void 0 : o2[g3]) && (u2 = Math.max(u2, y2[a3][g3]), e2 = Math.min(e2, y2[a3][g3])), void 0 !== (null == (r2 = b2[a3]) ? void 0 : r2[g3]) && (e2 = Math.min(e2, b2[a3][g3]), s2 = Math.max(s2, b2[a3][g3])), t3) {
              case "candlestick":
                void 0 !== this.w.candleData.seriesCandleC[a3][g3] && (u2 = Math.max(u2, this.w.candleData.seriesCandleH[a3][g3]), e2 = Math.min(e2, this.w.candleData.seriesCandleL[a3][g3]));
                break;
              case "boxPlot":
                void 0 !== this.w.candleData.seriesCandleC[a3][g3] && (u2 = Math.max(u2, this.w.candleData.seriesCandleC[a3][g3]), e2 = Math.min(e2, this.w.candleData.seriesCandleO[a3][g3]));
                break;
              case "violin":
                void 0 !== (null == (n2 = this.w.violinData.seriesViolinMax[a3]) ? void 0 : n2[g3]) && (u2 = Math.max(u2, this.w.violinData.seriesViolinMax[a3][g3]), e2 = Math.min(e2, this.w.violinData.seriesViolinMin[a3][g3]));
            }
            if (t3 && "candlestick" !== t3 && "boxPlot" !== t3 && "violin" !== t3 && "rangeArea" !== t3 && "rangeBar" !== t3 && (u2 = Math.max(u2, this.w.seriesData.series[a3][g3]), e2 = Math.min(e2, this.w.seriesData.series[a3][g3])), this.w.seriesData.seriesGoals[a3] && this.w.seriesData.seriesGoals[a3][g3] && Array.isArray(this.w.seriesData.seriesGoals[a3][g3]) && this.w.seriesData.seriesGoals[a3][g3].forEach((t4) => {
              u2 = Math.max(u2, t4.value), e2 = Math.min(e2, t4.value);
            }), "boxPlot" === this.w.config.chart.type || "boxPlot" === t3) {
              const t4 = null == (h2 = null == (l2 = this.w.candleData.seriesBoxPoints) ? void 0 : l2[a3]) ? void 0 : h2[g3];
              if (t4) for (let s3 = 0; s3 < t4.length; s3++) {
                const i5 = t4[s3];
                "number" == typeof i5 && (u2 = Math.max(u2, i5), e2 = Math.min(e2, i5));
              }
            }
            s2 = u2, i4 = m.noExponents(i4), m.isFloat(i4) && (p2.yValueDecimal = Math.max(p2.yValueDecimal, i4.toString().split(".")[1].length)), x2 > (null == (c2 = b2[a3]) ? void 0 : c2[g3]) && (null == (d2 = b2[a3]) ? void 0 : d2[g3]) < 0 && (x2 = b2[a3][g3]);
          } else p2.hasNullValues = true;
        }
        "bar" !== t3 && "column" !== t3 || (x2 < 0 && u2 < 0 && (u2 = 0, s2 = Math.max(s2, 0)), x2 === Number.MIN_VALUE && (x2 = 0, e2 = Math.min(e2, 0)));
      }
      return "rangeBar" === g2.chart.type && this.w.rangeData.seriesRangeStart.length && p2.isBarHorizontal && (x2 = e2), "bar" === g2.chart.type && (x2 < 0 && u2 < 0 && (u2 = 0), x2 === Number.MIN_VALUE && (x2 = 0)), { minY: x2, maxY: u2, lowestY: e2, highestY: s2 };
    }
    setYRange() {
      const t2 = this.w.globals, e2 = this.w.config;
      t2.maxY = -Number.MAX_VALUE, t2.minY = Number.MIN_VALUE;
      let s2, i2 = Number.MAX_VALUE;
      if (t2.isMultipleYAxis) {
        i2 = Number.MAX_VALUE;
        for (let e3 = 0; e3 < this.w.seriesData.series.length; e3++) s2 = this.getMinYMaxY(e3), t2.minYArr[e3] = s2.lowestY, t2.maxYArr[e3] = s2.highestY, i2 = Math.min(i2, s2.lowestY);
      }
      if (s2 = this.getMinYMaxY(0, i2, void 0, this.w.seriesData.series.length), "bar" === e2.chart.type ? (t2.minY = s2.minY, t2.maxY = s2.maxY) : (t2.minY = s2.lowestY, t2.maxY = s2.highestY), i2 = s2.lowestY, e2.chart.stacked && this._setStackedMinMax(), "line" === e2.chart.type || "area" === e2.chart.type || "scatter" === e2.chart.type || "candlestick" === e2.chart.type || "boxPlot" === e2.chart.type || "violin" === e2.chart.type || "rangeBar" === e2.chart.type && !t2.isBarHorizontal ? t2.minY === Number.MIN_VALUE && i2 !== -Number.MAX_VALUE && i2 !== t2.maxY && (t2.minY = i2) : t2.minY = t2.minY !== Number.MIN_VALUE ? Math.min(s2.minY, t2.minY) : s2.minY, e2.yaxis.forEach((e3, s3) => {
        void 0 !== e3.max && ("number" == typeof e3.max ? t2.maxYArr[s3] = e3.max : "function" == typeof e3.max && (t2.maxYArr[s3] = e3.max(t2.isMultipleYAxis ? t2.maxYArr[s3] : t2.maxY)), t2.maxY = t2.maxYArr[s3]), void 0 !== e3.min && ("number" == typeof e3.min ? t2.minYArr[s3] = e3.min : "function" == typeof e3.min && (t2.minYArr[s3] = e3.min(t2.isMultipleYAxis ? t2.minYArr[s3] === Number.MIN_VALUE ? 0 : t2.minYArr[s3] : t2.minY)), t2.minY = t2.minYArr[s3]);
      }), t2.isBarHorizontal) {
        ["min", "max"].forEach((s3) => {
          void 0 !== e2.xaxis[s3] && "number" == typeof e2.xaxis[s3] && ("min" === s3 ? t2.minY = e2.xaxis[s3] : t2.maxY = e2.xaxis[s3]);
        });
      }
      return t2.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t2.minY = i2) : (this.scales.setYScaleForIndex(0, t2.minY, t2.maxY), t2.minY = t2.yAxisScale[0].niceMin, t2.maxY = t2.yAxisScale[0].niceMax, t2.minYArr[0] = t2.minY, t2.maxYArr[0] = t2.maxY), t2.barGroups = [], t2.lineGroups = [], t2.areaGroups = [], e2.series.forEach((s3) => {
        const i3 = s3;
        switch (i3.type || e2.chart.type) {
          case "bar":
          case "column":
            t2.barGroups.push(i3.group);
            break;
          case "line":
            t2.lineGroups.push(i3.group);
            break;
          case "area":
            t2.areaGroups.push(i3.group);
        }
      }), t2.barGroups = t2.barGroups.filter((t3, e3, s3) => s3.indexOf(t3) === e3), t2.lineGroups = t2.lineGroups.filter((t3, e3, s3) => s3.indexOf(t3) === e3), t2.areaGroups = t2.areaGroups.filter((t3, e3, s3) => s3.indexOf(t3) === e3), { minY: t2.minY, maxY: t2.maxY, minYArr: t2.minYArr, maxYArr: t2.maxYArr, yAxisScale: t2.yAxisScale };
    }
    setXRange() {
      const t2 = this.w.globals, e2 = this.w.config, s2 = "numeric" === e2.xaxis.type || "datetime" === e2.xaxis.type || "category" === e2.xaxis.type && !this.w.axisFlags.noLabelsProvided || this.w.axisFlags.noLabelsProvided || this.w.axisFlags.isXNumeric, i2 = () => {
        for (let e3 = 0; e3 < this.w.seriesData.series.length; e3++) if (this.w.labelData.labels[e3]) for (let s3 = 0; s3 < this.w.labelData.labels[e3].length; s3++) null !== this.w.labelData.labels[e3][s3] && m.isNumber(this.w.labelData.labels[e3][s3]) && (t2.maxX = Math.max(t2.maxX, this.w.labelData.labels[e3][s3]), t2.initialMaxX = Math.max(t2.maxX, this.w.labelData.labels[e3][s3]), t2.minX = Math.min(t2.minX, this.w.labelData.labels[e3][s3]), t2.initialMinX = Math.min(t2.minX, this.w.labelData.labels[e3][s3]));
      };
      if (this.w.axisFlags.isXNumeric && i2(), this.w.axisFlags.noLabelsProvided && 0 === e2.xaxis.categories.length && (t2.maxX = this.w.labelData.labels[this.w.labelData.labels.length - 1], t2.initialMaxX = this.w.labelData.labels[this.w.labelData.labels.length - 1], t2.minX = 1, t2.initialMinX = 1), this.w.axisFlags.isXNumeric || this.w.axisFlags.noLabelsProvided || this.w.axisFlags.dataFormatXNumeric) {
        let i3 = 10;
        if (void 0 === e2.xaxis.tickAmount) i3 = Math.round(t2.svgWidth / 150), "numeric" === e2.xaxis.type && t2.dataPoints < 30 && (i3 = t2.dataPoints - 1), i3 > t2.dataPoints && 0 !== t2.dataPoints && (i3 = t2.dataPoints - 1);
        else if ("dataPoints" === e2.xaxis.tickAmount) {
          if (this.w.seriesData.series.length > 1 && (i3 = this.w.seriesData.series[t2.maxValsInArrayIndex].length - 1), this.w.axisFlags.isXNumeric) {
            const e3 = Math.round(t2.maxX - t2.minX);
            e3 < 30 && (i3 = e3);
          }
        } else i3 = e2.xaxis.tickAmount;
        if (t2.xTickAmount = i3, void 0 !== e2.xaxis.max && "number" == typeof e2.xaxis.max && (t2.maxX = e2.xaxis.max), void 0 !== e2.xaxis.min && "number" == typeof e2.xaxis.min && (t2.minX = e2.xaxis.min), void 0 !== e2.xaxis.range && (t2.minX = t2.maxX - e2.xaxis.range), t2.minX !== Number.MAX_VALUE && t2.maxX !== -Number.MAX_VALUE) if (e2.xaxis.convertedCatToNumeric && !this.w.axisFlags.dataFormatXNumeric) {
          const e3 = [];
          for (let s3 = t2.minX - 1; s3 < t2.maxX; s3++) e3.push(s3 + 1);
          t2.xAxisScale = { result: e3, niceMin: e3[0], niceMax: e3[e3.length - 1] };
        } else t2.xAxisScale = this.scales.setXScale(t2.minX, t2.maxX);
        else t2.xAxisScale = this.scales.linearScale(0, i3, i3, 0, e2.xaxis.stepSize), this.w.axisFlags.noLabelsProvided && this.w.labelData.labels.length > 0 && (t2.xAxisScale = this.scales.linearScale(1, this.w.labelData.labels.length, i3 - 1, 0, e2.xaxis.stepSize), this.w.seriesData.seriesX = this.w.labelData.labels.slice());
        s2 && (this.w.labelData.labels = t2.xAxisScale.result.slice());
      }
      return t2.isBarHorizontal && this.w.labelData.labels.length && (t2.xTickAmount = this.w.labelData.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t2.minX, maxX: t2.maxX };
    }
    setZRange() {
      const t2 = this.w.globals;
      if (this.w.axisFlags.isDataXYZ) {
        for (let e2 = 0; e2 < this.w.seriesData.series.length; e2++) if (void 0 !== this.w.seriesData.seriesZ[e2]) for (let s2 = 0; s2 < this.w.seriesData.seriesZ[e2].length; s2++) null !== this.w.seriesData.seriesZ[e2][s2] && m.isNumber(this.w.seriesData.seriesZ[e2][s2]) && (t2.maxZ = Math.max(t2.maxZ, this.w.seriesData.seriesZ[e2][s2]), t2.minZ = Math.min(t2.minZ, this.w.seriesData.seriesZ[e2][s2]));
      }
    }
    _handleSingleDataPoint() {
      const t2 = this.w.globals, e2 = this.w.config;
      if (t2.minX === t2.maxX) {
        const s2 = new y(this.w);
        if ("datetime" === e2.xaxis.type) {
          const i2 = s2.getDate(t2.minX);
          e2.xaxis.labels.datetimeUTC ? i2.setUTCDate(i2.getUTCDate() - 2) : i2.setDate(i2.getDate() - 2), t2.minX = new Date(i2).getTime();
          const a2 = s2.getDate(t2.maxX);
          e2.xaxis.labels.datetimeUTC ? a2.setUTCDate(a2.getUTCDate() + 2) : a2.setDate(a2.getDate() + 2), t2.maxX = new Date(a2).getTime();
        } else ("numeric" === e2.xaxis.type || "category" === e2.xaxis.type && !this.w.axisFlags.noLabelsProvided) && (t2.minX = t2.minX - 2, t2.initialMinX = t2.minX, t2.maxX = t2.maxX + 2, t2.initialMaxX = t2.maxX);
      }
    }
    _getMinXDiff() {
      const t2 = this.w.globals;
      this.w.axisFlags.isXNumeric && this.w.seriesData.seriesX.forEach((e2) => {
        if (e2.length) {
          1 === e2.length && e2.push(this.w.seriesData.seriesX[t2.maxValsInArrayIndex][this.w.seriesData.seriesX[t2.maxValsInArrayIndex].length - 1]);
          const s2 = e2.slice();
          s2.sort((t3, e3) => t3 - e3), s2.forEach((e3, i2) => {
            if (i2 > 0) {
              const a2 = e3 - s2[i2 - 1];
              a2 > 0 && (t2.minXDiff = Math.min(a2, t2.minXDiff));
            }
          }), 1 !== t2.dataPoints && t2.minXDiff !== Number.MAX_VALUE || (t2.minXDiff = 0.5);
        }
      });
    }
    _setStackedMinMax() {
      const t2 = this.w.globals;
      if (!this.w.seriesData.series.length) return;
      let e2 = this.w.labelData.seriesGroups;
      e2.length || (e2 = [this.w.seriesData.seriesNames.map((t3) => t3)]);
      const s2 = {}, i2 = {};
      e2.forEach((e3) => {
        s2[e3] = [], i2[e3] = [];
        this.w.config.series.map((t3, s3) => e3.indexOf(this.w.seriesData.seriesNames[s3]) > -1 ? s3 : null).filter((t3) => null !== t3).forEach((a2) => {
          var o2, r2, n2, l2;
          for (let h2 = 0; h2 < this.w.seriesData.series[t2.maxValsInArrayIndex].length; h2++) {
            void 0 === s2[e3][h2] && (s2[e3][h2] = 0, i2[e3][h2] = 0);
            (this.w.config.chart.stacked && !t2.comboCharts || this.w.config.chart.stacked && t2.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null == (r2 = null == (o2 = this.w.config.series) ? void 0 : o2[a2]) ? void 0 : r2.type) || "column" === (null == (l2 = null == (n2 = this.w.config.series) ? void 0 : n2[a2]) ? void 0 : l2.type))) && null !== this.w.seriesData.series[a2][h2] && m.isNumber(this.w.seriesData.series[a2][h2]) && (this.w.seriesData.series[a2][h2] > 0 ? s2[e3][h2] += parseFloat(String(this.w.seriesData.series[a2][h2])) + 1e-4 : i2[e3][h2] += parseFloat(String(this.w.seriesData.series[a2][h2])));
          }
        });
      }), Object.entries(s2).forEach(([e3]) => {
        s2[e3].forEach((a2, o2) => {
          t2.maxY = Math.max(t2.maxY, s2[e3][o2]), t2.minY = Math.min(t2.minY, i2[e3][o2]);
        });
      });
    }
  }
  class et {
    constructor(t2, { theme: e2 = null, timeScale: s2 = null } = {}, i2) {
      this.w = t2, this.elgrid = i2, this.xaxisFontSize = t2.config.xaxis.labels.style.fontSize, this.axisFontFamily = t2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = t2.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === t2.config.chart.type && t2.config.plotOptions.bar.horizontal, this.xAxisoffX = "bottom" === t2.config.xaxis.position ? t2.layout.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new Z(t2, { theme: e2, timeScale: s2 });
    }
    drawYaxis(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = e2.config.yaxis[t2].labels.style, { fontSize: a2, fontFamily: o2, fontWeight: r2 } = i2, n2 = s2.group({ class: "apexcharts-yaxis", rel: t2, transform: `translate(${e2.globals.translateYAxisX[t2]}, 0)` });
      if (this.axesUtils.isYAxisHidden(t2)) return n2;
      const l2 = s2.group({ class: "apexcharts-yaxis-texts-g" });
      n2.add(l2);
      const h2 = e2.globals.yAxisScale[t2].result.length - 1, c2 = e2.layout.gridHeight / h2, d2 = e2.formatters.yLabelFormatters[t2], g2 = this.axesUtils.checkForReversedLabels(t2, e2.globals.yAxisScale[t2].result.slice());
      if (e2.config.yaxis[t2].labels.show) {
        let n3 = e2.layout.translateY + e2.config.yaxis[t2].labels.offsetY;
        e2.globals.isBarHorizontal ? n3 = 0 : "heatmap" === e2.config.chart.type && (n3 -= c2 / 2), n3 += parseInt(a2, 10) / 3;
        let p2 = null;
        for (let u2 = h2; u2 >= 0; u2--) {
          const h3 = d2(g2[u2], u2, e2);
          let x2 = e2.config.yaxis[t2].labels.padding;
          e2.config.yaxis[t2].opposite && 0 !== e2.config.yaxis.length && (x2 *= -1);
          const f2 = this.getTextAnchor(e2.config.yaxis[t2].labels.align, e2.config.yaxis[t2].opposite), b2 = this.axesUtils.getYAxisForeColor(i2.colors, t2), m2 = Array.isArray(b2) ? b2[u2] : b2, y2 = Array.from(e2.dom.baseEl.querySelectorAll(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-label tspan`)).map((t3) => t3.textContent), w2 = s2.drawText({ x: x2, y: n3, text: y2.includes(h3) && !e2.config.yaxis[t2].labels.showDuplicates ? "" : h3, textAnchor: f2, fontSize: a2, fontFamily: o2, fontWeight: r2, maxWidth: e2.config.yaxis[t2].labels.maxWidth, foreColor: m2, isPlainText: false, cssClass: `apexcharts-yaxis-label ${i2.cssClass}` });
          l2.add(w2), this.addTooltip(w2, h3), null === p2 && (p2 = w2), 0 !== e2.config.yaxis[t2].labels.rotate && this.rotateLabel(s2, w2, p2, e2.config.yaxis[t2].labels.rotate), n3 += c2;
        }
      }
      return this.addYAxisTitle(s2, n2, t2), this.addAxisBorder(s2, n2, t2, h2, c2), n2;
    }
    getTextAnchor(t2, e2) {
      return "left" === t2 ? "start" : "center" === t2 ? "middle" : "right" === t2 ? "end" : e2 ? "start" : "end";
    }
    addTooltip(t2, e2) {
      const s2 = b.createElementNS(W, "title");
      s2.textContent = Array.isArray(e2) ? e2.join(" ") : e2, t2.node.appendChild(s2);
    }
    rotateLabel(t2, e2, s2, i2) {
      const a2 = t2.rotateAroundCenter(s2.node), o2 = t2.rotateAroundCenter(e2.node);
      e2.node.setAttribute("transform", `rotate(${i2} ${a2.x} ${o2.y})`);
    }
    addYAxisTitle(t2, e2, s2) {
      const i2 = this.w;
      if (void 0 !== i2.config.yaxis[s2].title.text) {
        const a2 = t2.group({ class: "apexcharts-yaxis-title" }), o2 = i2.config.yaxis[s2].opposite ? i2.globals.translateYAxisX[s2] : 0, r2 = t2.drawText({ x: o2, y: i2.layout.gridHeight / 2 + i2.layout.translateY + i2.config.yaxis[s2].title.offsetY, text: i2.config.yaxis[s2].title.text, textAnchor: "end", foreColor: i2.config.yaxis[s2].title.style.color, fontSize: i2.config.yaxis[s2].title.style.fontSize, fontWeight: i2.config.yaxis[s2].title.style.fontWeight, fontFamily: i2.config.yaxis[s2].title.style.fontFamily, cssClass: `apexcharts-yaxis-title-text ${i2.config.yaxis[s2].title.style.cssClass}` });
        a2.add(r2), e2.add(a2);
      }
    }
    addAxisBorder(t2, e2, s2, i2, a2) {
      const o2 = this.w, r2 = o2.config.yaxis[s2].axisBorder;
      let n2 = 31 + r2.offsetX;
      if (o2.config.yaxis[s2].opposite && (n2 = -31 - r2.offsetX), r2.show) {
        const s3 = t2.drawLine(n2, o2.layout.translateY + r2.offsetY - 2, n2, o2.layout.gridHeight + o2.layout.translateY + r2.offsetY + 2, r2.color, 0, r2.width);
        e2.add(s3);
      }
      o2.config.yaxis[s2].axisTicks.show && this.axesUtils.drawYAxisTicks(n2, i2, r2, o2.config.yaxis[s2].axisTicks, s2, a2, e2);
    }
    drawYaxisInversed(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = s2.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), a2 = s2.group({ class: "apexcharts-xaxis-texts-g", transform: `translate(${e2.layout.translateXAxisX}, ${e2.layout.translateXAxisY})` });
      i2.add(a2);
      let o2 = e2.globals.yAxisScale[t2].result.length - 1;
      const r2 = e2.layout.gridWidth / o2 + 0.1;
      let n2 = r2 + e2.config.xaxis.labels.offsetX;
      const l2 = e2.formatters.xLabelFormatter;
      let h2 = this.axesUtils.checkForReversedLabels(t2, e2.globals.yAxisScale[t2].result.slice());
      const c2 = e2.labelData.timescaleLabels;
      if (c2.length > 0 && (this.xaxisLabels = c2.slice(), h2 = c2.slice(), o2 = h2.length), e2.config.xaxis.labels.show) for (let i3 = c2.length ? 0 : o2; c2.length ? i3 < c2.length : i3 >= 0; c2.length ? i3++ : i3--) {
        let o3 = null == l2 ? void 0 : l2(h2[i3], i3, e2), d2 = e2.layout.gridWidth + e2.globals.padHorizontal - (n2 - r2 + e2.config.xaxis.labels.offsetX);
        if (c2.length) {
          const t3 = this.axesUtils.getLabel(h2, c2, d2, i3, this.drawnLabels, this.xaxisFontSize);
          d2 = t3.x, o3 = t3.text, this.drawnLabels.push(t3.text), 0 === i3 && e2.globals.skipFirstTimelinelabel && (o3 = ""), i3 === h2.length - 1 && e2.globals.skipLastTimelinelabel && (o3 = "");
        }
        const g2 = s2.drawText({ x: d2, y: this.xAxisoffX + e2.config.xaxis.labels.offsetY + 30 - ("top" === e2.config.xaxis.position ? e2.layout.xAxisHeight + e2.config.xaxis.axisTicks.height - 2 : 0), text: o3, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t2] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.axisFontFamily, fontWeight: e2.config.xaxis.labels.style.fontWeight, isPlainText: false, cssClass: `apexcharts-xaxis-label ${e2.config.xaxis.labels.style.cssClass}` });
        a2.add(g2), this.addTooltip(g2, o3), n2 += r2;
      }
      return this.inversedYAxisTitleText(i2), this.inversedYAxisBorder(i2), i2;
    }
    inversedYAxisBorder(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = e2.config.xaxis.axisBorder;
      if (i2.show) {
        let a2 = 0;
        "bar" === e2.config.chart.type && e2.axisFlags.isXNumeric && (a2 -= 15);
        const o2 = s2.drawLine(e2.globals.padHorizontal + a2 + i2.offsetX, this.xAxisoffX, e2.layout.gridWidth, this.xAxisoffX, i2.color, 0, i2.height);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(o2) : t2.add(o2);
      }
    }
    inversedYAxisTitleText(t2) {
      const e2 = this.w, s2 = new N(this.w);
      if (void 0 !== e2.config.xaxis.title.text) {
        const i2 = s2.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), a2 = s2.drawText({ x: e2.layout.gridWidth / 2 + e2.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e2.config.xaxis.title.style.fontSize) + e2.config.xaxis.title.offsetY + 20, text: e2.config.xaxis.title.text, textAnchor: "middle", fontSize: e2.config.xaxis.title.style.fontSize, fontFamily: e2.config.xaxis.title.style.fontFamily, fontWeight: e2.config.xaxis.title.style.fontWeight, foreColor: e2.config.xaxis.title.style.color, cssClass: `apexcharts-xaxis-title-text ${e2.config.xaxis.title.style.cssClass}` });
        i2.add(a2), t2.add(i2);
      }
    }
    yAxisTitleRotate(t2, e2) {
      const s2 = this.w, i2 = new N(this.w), a2 = s2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-texts-g`), o2 = a2 ? a2.getBoundingClientRect() : { width: 0, height: 0 }, r2 = s2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-title text`), n2 = r2 ? r2.getBoundingClientRect() : { width: 0, height: 0 };
      if (r2) {
        const a3 = this.xPaddingForYAxisTitle(t2, o2, n2, e2);
        r2.setAttribute("x", String(a3.xPos - (e2 ? 10 : 0)));
        const l2 = i2.rotateAroundCenter(r2);
        r2.setAttribute("transform", `rotate(${e2 ? -1 * s2.config.yaxis[t2].title.rotate : s2.config.yaxis[t2].title.rotate} ${l2.x} ${l2.y})`);
      }
    }
    xPaddingForYAxisTitle(t2, e2, s2, i2) {
      const a2 = this.w;
      let o2 = 0, r2 = 10;
      return void 0 === a2.config.yaxis[t2].title.text || t2 < 0 ? { xPos: o2, padd: 0 } : (i2 ? o2 = e2.width + a2.config.yaxis[t2].title.offsetX + s2.width / 2 + r2 / 2 : (o2 = -1 * e2.width + a2.config.yaxis[t2].title.offsetX + r2 / 2 + s2.width / 2, a2.globals.isBarHorizontal && (r2 = 25, o2 = -1 * e2.width - a2.config.yaxis[t2].title.offsetX - r2)), { xPos: o2, padd: r2 });
    }
    setYAxisXPosition(t2, e2) {
      const s2 = this.w;
      let i2 = 0, a2 = 0, o2 = 18, r2 = 1;
      s2.config.yaxis.length > 1 && (this.multipleYs = true), s2.config.yaxis.forEach((n2, l2) => {
        const h2 = s2.globals.ignoreYAxisIndexes.includes(l2) || !n2.show || n2.floating || 0 === t2[l2].width, c2 = t2[l2].width + e2[l2].width;
        n2.opposite ? s2.globals.isBarHorizontal ? (a2 = s2.layout.gridWidth + s2.layout.translateX - 1, s2.globals.translateYAxisX[l2] = a2 - n2.labels.offsetX) : (a2 = s2.layout.gridWidth + s2.layout.translateX + r2, h2 || (r2 += c2 + 20), s2.globals.translateYAxisX[l2] = a2 - n2.labels.offsetX + 20) : (i2 = s2.layout.translateX - o2, h2 || (o2 += c2 + 20), s2.globals.translateYAxisX[l2] = i2 + n2.labels.offsetX);
      });
    }
    setYAxisTextAlignments() {
      const t2 = this.w;
      Array.from(t2.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((e2, s2) => {
        const i2 = t2.config.yaxis[s2];
        if (i2 && !i2.floating && void 0 !== i2.labels.align) {
          const e3 = t2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${s2}'] .apexcharts-yaxis-texts-g`), a2 = Array.from(t2.dom.baseEl.querySelectorAll(`.apexcharts-yaxis[rel='${s2}'] .apexcharts-yaxis-label`)), o2 = e3.getBoundingClientRect();
          a2.forEach((t3) => {
            t3.setAttribute("text-anchor", i2.labels.align);
          }), "left" !== i2.labels.align || i2.opposite ? "center" === i2.labels.align ? e3.setAttribute("transform", `translate(${o2.width / 2 * (i2.opposite ? 1 : -1)}, 0)`) : "right" === i2.labels.align && i2.opposite && e3.setAttribute("transform", `translate(${o2.width}, 0)`) : e3.setAttribute("transform", `translate(-${o2.width}, 0)`);
        }
      });
    }
  }
  class st {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.documentEvent = this.documentEvent.bind(this);
    }
    addEventListener(t2, e2) {
      const s2 = this.w;
      Object.prototype.hasOwnProperty.call(s2.globals.events, t2) ? s2.globals.events[t2].push(e2) : s2.globals.events[t2] = [e2];
    }
    removeEventListener(t2, e2) {
      const s2 = this.w;
      if (!Object.prototype.hasOwnProperty.call(s2.globals.events, t2)) return;
      const i2 = s2.globals.events[t2].indexOf(e2);
      -1 !== i2 && s2.globals.events[t2].splice(i2, 1);
    }
    fireEvent(t2, e2) {
      const s2 = this.w;
      if (!Object.prototype.hasOwnProperty.call(s2.globals.events, t2)) return;
      e2 && e2.length || (e2 = []);
      const i2 = s2.globals.events[t2], a2 = i2.length;
      for (let t3 = 0; t3 < a2; t3++) i2[t3].apply(null, e2);
    }
    setupEventHandlers() {
      const t2 = this.w, e2 = this.ctx, s2 = t2.dom.baseEl.querySelector(t2.globals.chartClass);
      this.ctx.eventList.forEach((i2) => {
        null == s2 || s2.addEventListener(i2, (s3) => {
          const i3 = null === s3.target.getAttribute("i") && -1 !== t2.interact.capturedSeriesIndex ? t2.interact.capturedSeriesIndex : s3.target.getAttribute("i"), a2 = null === s3.target.getAttribute("j") && -1 !== t2.interact.capturedDataPointIndex ? t2.interact.capturedDataPointIndex : s3.target.getAttribute("j"), o2 = Object.assign({}, t2, { seriesIndex: t2.globals.axisCharts ? i3 : 0, dataPointIndex: a2 });
          "keydown" === s3.type ? t2.config.chart.accessibility.enabled && t2.config.chart.accessibility.keyboard.enabled && (e2.ctx.keyboardNavigation && e2.ctx.keyboardNavigation.handleKey(s3), "function" == typeof t2.config.chart.events.keyDown && t2.config.chart.events.keyDown(s3, e2, o2), e2.ctx.events.fireEvent("keydown", [s3, e2, o2])) : "keyup" === s3.type ? t2.config.chart.accessibility.enabled && t2.config.chart.accessibility.keyboard.enabled && ("function" == typeof t2.config.chart.events.keyUp && t2.config.chart.events.keyUp(s3, e2, o2), e2.ctx.events.fireEvent("keyup", [s3, e2, o2])) : "mousemove" === s3.type || "touchmove" === s3.type ? "function" == typeof t2.config.chart.events.mouseMove && t2.config.chart.events.mouseMove(s3, e2, o2) : "mouseleave" === s3.type || "touchleave" === s3.type ? "function" == typeof t2.config.chart.events.mouseLeave && t2.config.chart.events.mouseLeave(s3, e2, o2) : ("mouseup" === s3.type && 1 === s3.which || "touchend" === s3.type) && ("function" == typeof t2.config.chart.events.click && t2.config.chart.events.click(s3, e2, o2), e2.ctx.events.fireEvent("click", [s3, e2, o2]));
        }, { capture: false, passive: true });
      }), this.ctx.eventList.forEach((e3) => {
        t2.dom.baseEl.addEventListener(e3, this.documentEvent, { passive: true });
      }), this.ctx.core.setupBrushHandler();
    }
    documentEvent(t2) {
      const e2 = this.w, s2 = t2.target.className;
      if ("click" === t2.type) {
        const t3 = e2.dom.baseEl.querySelector(".apexcharts-menu");
        t3 && t3.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== s2 && t3.classList.remove("apexcharts-menu-open");
      }
      e2.interact.clientX = "touchmove" === t2.type ? t2.touches[0].clientX : t2.clientX, e2.interact.clientY = "touchmove" === t2.type ? t2.touches[0].clientY : t2.clientY;
    }
  }
  class it {
    constructor(t2) {
      this.w = t2;
    }
    setCurrentLocaleValues(t2) {
      let e2 = this.w.config.chart.locales;
      const s2 = c.getApex();
      s2.chart && s2.chart.locales && s2.chart.locales.length > 0 && (e2 = this.w.config.chart.locales.concat(s2.chart.locales));
      const i2 = e2.filter((e3) => e3.name === t2)[0];
      if (!i2) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      {
        const t3 = m.extend(S, i2);
        this.w.globals.locale = t3.options;
      }
    }
  }
  class at {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    drawAxis(t2, e2) {
      const s2 = this.w.globals, i2 = this.w.config, a2 = new K(this.w, this.ctx, e2), o2 = new et(this.w, { theme: this.ctx.theme, timeScale: this.ctx.timeScale }, e2);
      if (s2.axisCharts && "radar" !== t2) {
        let t3, e3;
        s2.isBarHorizontal ? (e3 = o2.drawYaxisInversed(0), t3 = a2.drawXaxisInversed(0), this.w.dom.elGraphical.add(t3), this.w.dom.elGraphical.add(e3)) : (t3 = a2.drawXaxis(), this.w.dom.elGraphical.add(t3), i2.yaxis.map((t4, i3) => {
          if (-1 === s2.ignoreYAxisIndexes.indexOf(i3) && (e3 = o2.drawYaxis(i3), this.w.dom.Paper.add(e3), "back" === this.w.config.grid.position)) {
            const t5 = this.w.dom.Paper.children()[1];
            t5 && (t5.remove(), this.w.dom.Paper.add(t5));
          }
        }));
      }
    }
  }
  class ot {
    constructor(t2) {
      this.w = t2;
    }
    drawXCrosshairs() {
      const t2 = this.w, e2 = new N(this.w), s2 = new H(this.w), i2 = t2.config.xaxis.crosshairs.fill.gradient, a2 = t2.config.xaxis.crosshairs.dropShadow, o2 = t2.config.xaxis.crosshairs.fill.type, r2 = i2.colorFrom, n2 = i2.colorTo, l2 = i2.opacityFrom, h2 = i2.opacityTo, c2 = i2.stops, d2 = a2.enabled, g2 = a2.left, p2 = a2.top, u2 = a2.blur, x2 = a2.color, f2 = a2.opacity;
      let b2 = t2.config.xaxis.crosshairs.fill.color;
      if (t2.config.xaxis.crosshairs.show) {
        "gradient" === o2 && (b2 = e2.drawGradient("vertical", r2, n2, l2, h2, null, c2, []));
        let i3 = e2.drawRect();
        1 === t2.config.xaxis.crosshairs.width && (i3 = e2.drawLine(0, 0, 0, 0));
        let a3 = t2.layout.gridHeight;
        (!m.isNumber(a3) || a3 < 0) && (a3 = 0);
        let y2 = t2.config.xaxis.crosshairs.width;
        (!m.isNumber(y2) || Number(y2) < 0) && (y2 = 0), i3.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: a3, width: y2, height: a3, fill: b2, filter: "none", "fill-opacity": t2.config.xaxis.crosshairs.opacity, stroke: t2.config.xaxis.crosshairs.stroke.color, "stroke-width": t2.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t2.config.xaxis.crosshairs.stroke.dashArray }), d2 && (i3 = s2.dropShadow(i3, { left: g2, top: p2, blur: u2, color: x2, opacity: f2 })), t2.dom.elGraphical.add(i3);
      }
    }
    drawYCrosshairs() {
      const t2 = this.w, e2 = new N(this.w), s2 = t2.config.yaxis[0].crosshairs, i2 = t2.globals.barPadForNumericAxis;
      if (t2.config.yaxis[0].crosshairs.show) {
        const a3 = e2.drawLine(-i2, 0, t2.layout.gridWidth + i2, 0, s2.stroke.color, s2.stroke.dashArray, s2.stroke.width);
        a3.attr({ class: "apexcharts-ycrosshairs" }), t2.dom.elGraphical.add(a3);
      }
      const a2 = e2.drawLine(-i2, 0, t2.layout.gridWidth + i2, 0, s2.stroke.color, 0, 0);
      a2.attr({ class: "apexcharts-ycrosshairs-hidden" }), t2.dom.elGraphical.add(a2);
    }
  }
  function rt(t2, e2) {
    if (!m.isObject(t2) || !m.isObject(e2)) return void 0 !== e2 ? e2 : t2;
    const s2 = n({}, t2);
    for (const i2 of Object.keys(e2)) {
      const a2 = e2[i2];
      void 0 !== a2 && (m.isObject(a2) && m.isObject(t2[i2]) ? s2[i2] = rt(t2[i2], a2) : s2[i2] = a2);
    }
    return s2;
  }
  class nt {
    constructor(t2) {
      this.w = t2, this._activeBreakpoint = null;
    }
    checkResponsiveConfig(t2) {
      const e2 = this.w, s2 = e2.config;
      if (0 === s2.responsive.length) return;
      const i2 = s2.responsive.slice();
      i2.sort((t3, e3) => t3.breakpoint > e3.breakpoint ? 1 : e3.breakpoint > t3.breakpoint ? -1 : 0).reverse();
      const a2 = new D({}), o2 = (t3 = {}) => {
        var s3;
        const o3 = i2[0].breakpoint, r2 = c.isBrowser() ? window.innerWidth > 0 ? window.innerWidth : screen.width : 0;
        if (r2 > o3) {
          if (null !== this._activeBreakpoint) {
            if (!e2.globals.initialConfig) return;
            const s4 = m.clone(e2.globals.initialConfig);
            s4.series = m.clone(e2.config.series);
            const i3 = F.extendArrayProps(a2, s4, e2);
            t3 = m.extend(i3, t3), this.overrideResponsiveOptions(t3), this._activeBreakpoint = null;
          }
        } else for (let o4 = 0; o4 < i2.length; o4++) if (r2 < i2[o4].breakpoint) {
          const r3 = (null == (s3 = i2[o4].options) ? void 0 : s3.yaxis) ? m.clone(i2[o4].options.yaxis) : null;
          if (t3 = F.extendArrayProps(a2, i2[o4].options, e2), t3 = m.extend(e2.config, t3), Array.isArray(e2.config.yaxis) && r3) {
            const s4 = Array.isArray(r3) ? r3 : [r3];
            t3 = l(n({}, t3), { yaxis: e2.config.yaxis.map((t4, e3) => rt(t4, s4[e3])) });
          }
          this.overrideResponsiveOptions(t3), this._activeBreakpoint = i2[o4].breakpoint;
        }
      };
      if (t2) {
        let s3 = F.extendArrayProps(a2, t2, e2);
        s3 = m.extend(e2.config, s3), s3 = m.extend(s3, t2), o2(s3);
      } else o2({});
    }
    overrideResponsiveOptions(t2) {
      const e2 = new D(t2).init({ responsiveOverride: true });
      this.w.config = e2;
    }
  }
  class lt {
    constructor(t2, { toggleDataSeries: e2, revertDefaultAxisMinMax: s2, updateSeries: i2 } = {}) {
      this.w = t2, this._toggleDataSeries = e2 || null, this._revertDefaultAxisMinMax = s2 || null, this._updateSeries = i2 || null, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    clearSeriesCache() {
      const t2 = this.w;
      t2.globals.cachedSelectors && (delete t2.globals.cachedSelectors.allSeriesEls, delete t2.globals.cachedSelectors.highlightSeriesEls);
    }
    getAllSeriesEls() {
      const t2 = this.w, e2 = "allSeriesEls";
      return t2.globals.cachedSelectors[e2] || (t2.globals.cachedSelectors[e2] = t2.dom.baseEl.getElementsByClassName("apexcharts-series")), t2.globals.cachedSelectors[e2];
    }
    getSeriesByName(t2) {
      return this.w.dom.baseEl.querySelector(`.apexcharts-inner .apexcharts-series[seriesName='${m.escapeString(t2)}']`);
    }
    isSeriesHidden(t2) {
      var e2;
      const s2 = this.getSeriesByName(t2), i2 = parseInt(null != (e2 = s2.getAttribute("data:realIndex")) ? e2 : "0", 10);
      return { isHidden: s2.classList.contains("apexcharts-series-collapsed"), realIndex: i2 };
    }
    addCollapsedClassToSeries(t2, e2) {
      lt.addCollapsedClassToSeries(this.w, t2, e2);
    }
    static addCollapsedClassToSeries(t2, e2, s2) {
      function i2(t3) {
        for (let i3 = 0; i3 < t3.length; i3++) t3[i3].index === s2 && e2.node.classList.add("apexcharts-series-collapsed");
      }
      i2(t2.globals.collapsedSeries), i2(t2.globals.ancillaryCollapsedSeries);
    }
    toggleSeries(t2) {
      var e2;
      const s2 = this.isSeriesHidden(t2);
      return null == (e2 = this._toggleDataSeries) || e2.call(this, s2.realIndex, s2.isHidden), s2.isHidden;
    }
    showSeries(t2) {
      var e2;
      const s2 = this.isSeriesHidden(t2);
      s2.isHidden && (null == (e2 = this._toggleDataSeries) || e2.call(this, s2.realIndex, true));
    }
    hideSeries(t2) {
      var e2;
      const s2 = this.isSeriesHidden(t2);
      s2.isHidden || null == (e2 = this._toggleDataSeries) || e2.call(this, s2.realIndex, false);
    }
    resetSeries(t2 = true, e2 = true, s2 = true) {
      var i2, a2;
      const o2 = this.w;
      this.clearSeriesCache();
      let r2 = m.clone(o2.globals.initialSeries);
      o2.globals.previousPaths = [], s2 ? (o2.globals.collapsedSeries = [], o2.globals.ancillaryCollapsedSeries = [], o2.globals.collapsedSeriesIndices = [], o2.globals.ancillaryCollapsedSeriesIndices = []) : r2 = this.emptyCollapsedSeries(r2), o2.config.series = r2, t2 && (e2 && (o2.interact.zoomed = false, null == (i2 = this._revertDefaultAxisMinMax) || i2.call(this)), null == (a2 = this._updateSeries) || a2.call(this, r2, o2.config.chart.animations.dynamicAnimation.enabled));
    }
    emptyCollapsedSeries(t2) {
      const e2 = this.w;
      for (let s2 = 0; s2 < t2.length; s2++) e2.globals.collapsedSeriesIndices.indexOf(s2) > -1 && (t2[s2].data = []);
      return t2;
    }
    highlightSeries(t2) {
      var e2;
      const s2 = this.w, i2 = this.getSeriesByName(t2), a2 = parseInt(null != (e2 = null == i2 ? void 0 : i2.getAttribute("data:realIndex")) ? e2 : "", 10), o2 = "highlightSeriesEls";
      let r2 = s2.globals.cachedSelectors[o2];
      r2 || (r2 = s2.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), s2.globals.cachedSelectors[o2] = r2);
      let n2 = null, l2 = null, h2 = null;
      if (s2.globals.axisCharts || "radialBar" === s2.config.chart.type) if (s2.globals.axisCharts) {
        n2 = s2.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${a2}']`), l2 = s2.dom.baseEl.querySelector(`.apexcharts-datalabels[data\\:realIndex='${a2}']`);
        const t3 = s2.globals.seriesYAxisReverseMap[a2];
        h2 = s2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t3}']`);
      } else n2 = s2.dom.baseEl.querySelector(`.apexcharts-series[rel='${a2 + 1}']`);
      else n2 = s2.dom.baseEl.querySelector(`.apexcharts-series[rel='${a2 + 1}'] path`);
      for (let t3 = 0; t3 < r2.length; t3++) {
        r2[t3].classList.add(this.legendInactiveClass);
      }
      if (n2) {
        if (!s2.globals.axisCharts) {
          const t3 = n2.parentNode;
          null == t3 || t3.classList.remove(this.legendInactiveClass);
        }
        n2.classList.remove(this.legendInactiveClass), null !== l2 && l2.classList.remove(this.legendInactiveClass), null !== h2 && h2.classList.remove(this.legendInactiveClass);
      } else for (let t3 = 0; t3 < r2.length; t3++) {
        r2[t3].classList.remove(this.legendInactiveClass);
      }
    }
    toggleSeriesOnHover(t2, e2) {
      const s2 = this.w;
      e2 || (e2 = t2.target);
      const i2 = s2.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
      if ("mousemove" === t2.type) {
        const t3 = parseInt(e2.getAttribute("rel"), 10) - 1;
        this.highlightSeries(s2.seriesData.seriesNames[t3]);
      } else if ("mouseout" === t2.type) for (let t3 = 0; t3 < i2.length; t3++) i2[t3].classList.remove(this.legendInactiveClass);
    }
    highlightRangeInSeries(t2, e2) {
      const s2 = this.w, i2 = s2.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), a2 = (t3) => {
        for (let e3 = 0; e3 < i2.length; e3++) {
          const s3 = i2[e3].classList;
          "function" == typeof s3[t3] && s3[t3](this.legendInactiveClass);
        }
      };
      if ("reset" === e2) return void a2("remove");
      const o2 = s2.config.plotOptions.heatmap.colorScale.ranges, r2 = o2 && o2[t2];
      if (r2) {
        a2("add");
        for (let t3 = 0; t3 < i2.length; t3++) {
          const e3 = Number(i2[t3].getAttribute("val"));
          e3 >= r2.from && e3 <= r2.to && i2[t3].classList.remove(this.legendInactiveClass);
        }
      }
    }
    getActiveConfigSeriesIndex(t2 = "asc", e2 = []) {
      const s2 = this.w;
      let i2 = 0;
      if (s2.config.series.length > 1) {
        const a2 = s2.config.series.map((t3, i3) => t3.data && t3.data.length > 0 && -1 === s2.globals.collapsedSeriesIndices.indexOf(i3) && (!s2.globals.comboCharts || 0 === e2.length || e2.length && e2.indexOf(s2.config.series[i3].type) > -1) ? i3 : -1);
        for (let e3 = "asc" === t2 ? 0 : a2.length - 1; "asc" === t2 ? e3 < a2.length : e3 >= 0; "asc" === t2 ? e3++ : e3--) if (-1 !== a2[e3]) {
          i2 = a2[e3];
          break;
        }
      }
      return i2;
    }
    getBarSeriesIndices() {
      return this.w.globals.comboCharts ? this.w.config.series.map((t2, e2) => "bar" === t2.type || "column" === t2.type ? e2 : -1).filter((t2) => -1 !== t2) : this.w.config.series.map((t2, e2) => e2);
    }
    getPreviousPaths() {
      var t2, e2, s2, i2;
      const a2 = this.w;
      if (!a2.globals.axisCharts) return void (a2.globals.previousPaths = a2.seriesData.series);
      function o2(t3, e3, s3) {
        const i3 = t3[e3].childNodes, o3 = { type: s3, paths: [], realIndex: t3[e3].getAttribute("data:realIndex") };
        for (let t4 = 0; t4 < i3.length; t4++) if (i3[t4].hasAttribute("pathTo")) {
          const e4 = i3[t4].getAttribute("pathTo");
          o3.paths.push({ d: e4 });
        }
        a2.globals.previousPaths.push(o3);
      }
      a2.globals.previousPaths = [];
      ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach((t3) => {
        const e3 = (s3 = t3, a2.dom.baseEl.querySelectorAll(`.apexcharts-${s3}-series .apexcharts-series`));
        var s3;
        for (let s4 = 0; s4 < e3.length; s4++) o2(e3, s4, t3);
      });
      const r2 = a2.dom.baseEl.querySelectorAll(`.apexcharts-${a2.config.chart.type} .apexcharts-series`);
      if (r2.length > 0) for (let o3 = 0; o3 < r2.length; o3++) {
        const r3 = a2.dom.baseEl.querySelectorAll(`.apexcharts-${a2.config.chart.type} .apexcharts-series[data\\:realIndex='${o3}'] rect`), n2 = [];
        for (let a3 = 0; a3 < r3.length; a3++) {
          const o4 = (t3) => r3[a3].getAttribute(t3), l2 = { x: parseFloat(null != (t2 = o4("x")) ? t2 : "0"), y: parseFloat(null != (e2 = o4("y")) ? e2 : "0"), width: parseFloat(null != (s2 = o4("width")) ? s2 : "0"), height: parseFloat(null != (i2 = o4("height")) ? i2 : "0") };
          n2.push({ rect: l2, color: r3[a3].getAttribute("color") });
        }
        a2.globals.previousPaths.push(n2);
      }
    }
    clearPreviousPaths() {
      const t2 = this.w;
      t2.globals.previousPaths = [], t2.globals.allSeriesCollapsed = false;
    }
    handleNoData() {
      const t2 = this.w, e2 = t2.config.noData, s2 = new N(this.w);
      let i2 = t2.globals.svgWidth / 2, a2 = t2.globals.svgHeight / 2, o2 = "middle";
      if (t2.globals.noData = true, t2.globals.animationEnded = true, "left" === e2.align ? (i2 = 10, o2 = "start") : "right" === e2.align && (i2 = t2.globals.svgWidth - 10, o2 = "end"), "top" === e2.verticalAlign ? a2 = 50 : "bottom" === e2.verticalAlign && (a2 = t2.globals.svgHeight - 50), i2 += e2.offsetX, a2 = a2 + parseInt(e2.style.fontSize, 10) + 2 + e2.offsetY, void 0 !== e2.text && "" !== e2.text) {
        const r2 = s2.drawText({ x: i2, y: a2, text: e2.text, textAnchor: o2, fontSize: e2.style.fontSize, fontFamily: e2.style.fontFamily, foreColor: e2.style.color, opacity: 1, cssClass: "apexcharts-text-nodata" });
        t2.dom.Paper.add(r2);
      }
    }
    setNullSeriesToZeroValues(t2) {
      const e2 = this.w;
      for (let s2 = 0; s2 < t2.length; s2++) if (0 === t2[s2].length) for (let i2 = 0; i2 < t2[e2.globals.maxValsInArrayIndex].length; i2++) t2[s2].push(0);
      return t2;
    }
    hasAllSeriesEqualX() {
      let t2 = true;
      const e2 = this.w, s2 = this.filteredSeriesX();
      for (let e3 = 0; e3 < s2.length - 1; e3++) if (s2[e3][0] !== s2[e3 + 1][0]) {
        t2 = false;
        break;
      }
      return e2.globals.allSeriesHasEqualX = t2, t2;
    }
    filteredSeriesX() {
      return this.w.seriesData.seriesX.map((t2) => t2.length > 0 ? t2 : []);
    }
  }
  class ht {
    constructor(t2) {
      this.w = t2, this.colors = [], this.isColorFn = false, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
    }
    checkHeatmapDistributed() {
      const { chart: t2, plotOptions: e2 } = this.w.config;
      return "treemap" === t2.type && e2.treemap && e2.treemap.distributed || "heatmap" === t2.type && e2.heatmap && e2.heatmap.distributed;
    }
    checkBarDistributed() {
      const { chart: t2, plotOptions: e2 } = this.w.config;
      return e2.bar && e2.bar.distributed && ("bar" === t2.type || "rangeBar" === t2.type);
    }
    init() {
      this.setDefaultColors();
    }
    setDefaultColors() {
      var t2;
      const e2 = this.w, s2 = new m();
      e2.dom.elWrap.classList.add(`apexcharts-theme-${e2.config.theme.mode || "light"}`);
      const i2 = null == (t2 = e2.config.theme.accessibility) ? void 0 : t2.colorBlindMode;
      if (i2) {
        e2.globals.colors = this.getColorBlindColors(i2), this.applySeriesColors(e2.seriesData.seriesColors, e2.globals.colors);
        const t3 = e2.globals.colors.slice();
        return this.pushExtraColors(e2.globals.colors), this.applyColorTypes(["fill", "stroke"], t3), this.applyDataLabelsColors(t3), this.applyRadarPolygonsColors(), this.applyMarkersColors(t3), void ("highContrast" === i2 && e2.dom.elWrap.classList.add("apexcharts-high-contrast"));
      }
      const a2 = [...e2.config.colors || e2.config.fill.colors || []];
      e2.globals.colors = this.getColors(a2), this.applySeriesColors(e2.seriesData.seriesColors, e2.globals.colors), e2.config.theme.monochrome.enabled && (e2.globals.colors = this.getMonochromeColors(e2.config.theme.monochrome, e2.seriesData.series, s2));
      const o2 = e2.globals.colors.slice();
      this.pushExtraColors(e2.globals.colors), this.applyColorTypes(["fill", "stroke"], o2), this.applyDataLabelsColors(o2), this.applyRadarPolygonsColors(), this.applyMarkersColors(o2);
    }
    getColors(t2) {
      const e2 = this.w;
      return t2 && 0 !== t2.length ? Array.isArray(t2) && t2.length > 0 && "function" == typeof t2[0] ? (this.isColorFn = true, e2.config.series.map((s2, i2) => {
        const a2 = t2[i2] || t2[0];
        return "function" == typeof a2 ? a2({ value: e2.globals.axisCharts ? e2.seriesData.series[i2][0] || 0 : e2.seriesData.series[i2], seriesIndex: i2, dataPointIndex: i2, w: this.w }) : a2;
      })) : t2 : this.predefined();
    }
    applySeriesColors(t2, e2) {
      t2.forEach((t3, s2) => {
        t3 && (e2[s2] = t3);
      });
    }
    getMonochromeColors(t2, e2, s2) {
      const { color: i2, shadeIntensity: a2, shadeTo: o2 } = t2, r2 = this.isBarDistributed || this.isHeatmapDistributed ? e2[0].length * e2.length : e2.length, n2 = 1 / (r2 / a2);
      let l2 = 0;
      return Array.from({ length: r2 }, () => {
        const t3 = "dark" === o2 ? s2.shadeColor(-1 * l2, i2) : s2.shadeColor(l2, i2);
        return l2 += n2, t3;
      });
    }
    applyColorTypes(t2, e2) {
      const s2 = this.w;
      t2.forEach((t3) => {
        s2.globals[t3].colors = void 0 === s2.config[t3].colors ? this.isColorFn ? s2.config.colors : e2 : s2.config[t3].colors.slice(), this.pushExtraColors(s2.globals[t3].colors);
      });
    }
    applyDataLabelsColors(t2) {
      const e2 = this.w;
      e2.globals.dataLabels.style.colors = void 0 === e2.config.dataLabels.style.colors ? t2 : e2.config.dataLabels.style.colors.slice(), this.pushExtraColors(e2.globals.dataLabels.style.colors, 50);
    }
    applyRadarPolygonsColors() {
      const t2 = this.w;
      t2.globals.radarPolygons.fill.colors = void 0 === t2.config.plotOptions.radar.polygons.fill.colors ? ["dark" === t2.config.theme.mode ? "#343A3F" : "none"] : t2.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(t2.globals.radarPolygons.fill.colors, 20);
    }
    applyMarkersColors(t2) {
      const e2 = this.w;
      e2.globals.markers.colors = void 0 === e2.config.markers.colors ? t2 : e2.config.markers.colors.slice(), this.pushExtraColors(e2.globals.markers.colors);
    }
    pushExtraColors(t2, e2, s2 = null) {
      const i2 = this.w;
      let a2 = e2 || i2.seriesData.series.length;
      if (null === s2 && (s2 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === i2.config.chart.type && i2.config.plotOptions.heatmap && i2.config.plotOptions.heatmap.colorScale.inverse), s2 && i2.seriesData.series.length && (a2 = i2.seriesData.series[i2.globals.maxValsInArrayIndex].length * i2.seriesData.series.length), t2.length < a2) {
        const e3 = a2 - t2.length;
        for (let s3 = 0; s3 < e3; s3++) t2.push(t2[s3]);
      }
    }
    getColorBlindColors(t2) {
      const e2 = { palette1: ["#008FFB", "#00A86F", "#CA8501", "#FF4560", "#846DD5"], palette2: ["#6978CB", "#039DE2", "#49A84D", "#B39105", "#D68000"], palette3: ["#209FCC", "#648291", "#D4526E", "#0FA783", "#A19285"], palette4: ["#2FA59D", "#73A20B", "#099DE1", "#FD5D5D", "#648291"], palette5: ["#2B908F", "#F56566", "#2EAB16", "#FA4443", "#1EA2BD"], palette6: ["#449DD1", "#F86624", "#EA3A4A", "#9C63D1", "#899E2A"], palette7: ["#DF475B", "#1B998B", "#7E75B7", "#F46036", "#B1911B"], palette8: ["#9C63D1", "#F86624", "#B38F04", "#EA3A4A", "#2FA2B3"], palette9: ["#98776F", "#A19285", "#A8705E", "#BA6560", "#A0927F"], palette10: ["#C91EFF", "#A94BFD", "#6C6AFE", "#2983FF", "#009ED8"], cvdDeuteranopia: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7"], cvdProtanopia: ["#0077BB", "#EE7733", "#009988", "#EE3377", "#BBBBBB", "#33BBEE", "#CC3311"], cvdTritanopia: ["#CC3311", "#009988", "#EE7733", "#0077BB", "#EE3377", "#BBBBBB", "#33BBEE"], highContrast: ["#005A9C", "#C00000", "#007A33", "#6C3483", "#7B3F00", "#0097A7", "#4A235A"] };
      return ({ deuteranopia: e2.cvdDeuteranopia, protanopia: e2.cvdProtanopia, tritanopia: e2.cvdTritanopia, highContrast: e2.highContrast }[t2] || e2.palette1).slice();
    }
    updateThemeOptions(t2) {
      t2.chart = t2.chart || {}, t2.tooltip = t2.tooltip || {};
      const e2 = t2.theme.mode, s2 = "dark" === e2 ? "palette4" : "light" === e2 ? "palette1" : t2.theme.palette || "palette1", i2 = "dark" === e2 ? "#f6f7f8" : "light" === e2 ? "#373d3f" : t2.chart.foreColor || "#373d3f";
      return t2.tooltip.theme = e2 || "light", t2.chart.foreColor = i2, t2.theme.palette = s2, t2;
    }
    predefined() {
      const t2 = { palette1: ["#008FFB", "#00A86F", "#CA8501", "#FF4560", "#846DD5"], palette2: ["#6978CB", "#039DE2", "#49A84D", "#B39105", "#D68000"], palette3: ["#209FCC", "#648291", "#D4526E", "#0FA783", "#A19285"], palette4: ["#2FA59D", "#73A20B", "#099DE1", "#FD5D5D", "#648291"], palette5: ["#2B908F", "#F56566", "#2EAB16", "#FA4443", "#1EA2BD"], palette6: ["#449DD1", "#F86624", "#EA3A4A", "#9C63D1", "#899E2A"], palette7: ["#DF475B", "#1B998B", "#7E75B7", "#F46036", "#B1911B"], palette8: ["#9C63D1", "#F86624", "#B38F04", "#EA3A4A", "#2FA2B3"], palette9: ["#98776F", "#A19285", "#A8705E", "#BA6560", "#A0927F"], palette10: ["#C91EFF", "#A94BFD", "#6C6AFE", "#2983FF", "#009ED8"], cvdDeuteranopia: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7"], cvdProtanopia: ["#0077BB", "#EE7733", "#009988", "#EE3377", "#BBBBBB", "#33BBEE", "#CC3311"], cvdTritanopia: ["#CC3311", "#009988", "#EE7733", "#0077BB", "#EE3377", "#BBBBBB", "#33BBEE"], highContrast: ["#005A9C", "#C00000", "#007A33", "#6C3483", "#7B3F00", "#0097A7", "#4A235A"] };
      return t2[this.w.config.theme.palette] || t2.palette1;
    }
  }
  class ct {
    constructor(t2) {
      this.w = t2;
    }
    draw() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    }
    drawTitleSubtitle(t2) {
      const e2 = this.w, s2 = "title" === t2 ? e2.config.title : e2.config.subtitle;
      let i2 = e2.globals.svgWidth / 2, a2 = s2.offsetY, o2 = "middle";
      if ("left" === s2.align ? (i2 = 10, o2 = "start") : "right" === s2.align && (i2 = e2.globals.svgWidth - 10, o2 = "end"), i2 += s2.offsetX, a2 = a2 + parseInt(s2.style.fontSize, 10) + s2.margin / 2, void 0 !== s2.text) {
        const r2 = new N(this.w).drawText({ x: i2, y: a2, text: s2.text, textAnchor: o2, fontSize: s2.style.fontSize, fontFamily: s2.style.fontFamily, fontWeight: s2.style.fontWeight, foreColor: s2.style.color, opacity: 1 });
        r2.node.setAttribute("class", `apexcharts-${t2}-text`), e2.dom.Paper.add(r2);
      }
    }
  }
  let dt = class {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    getTitleSubtitleCoords(t2) {
      const e2 = this.w;
      let s2 = 0, i2 = 0;
      const a2 = "title" === t2 ? e2.config.title.floating : e2.config.subtitle.floating, o2 = e2.dom.baseEl.querySelector(`.apexcharts-${t2}-text`);
      if (null !== o2 && !a2) {
        const t3 = o2.getBoundingClientRect();
        s2 = t3.width, i2 = e2.globals.axisCharts ? t3.height + 5 : t3.height;
      }
      return { width: s2, height: i2 };
    }
    getLegendsRect() {
      const t2 = this.w, e2 = t2.dom.elLegendWrap;
      t2.config.legend.height || "top" !== t2.config.legend.position && "bottom" !== t2.config.legend.position || e2 && (e2.style.maxHeight = t2.globals.svgHeight / 2 + "px");
      const s2 = Object.assign({}, m.getBoundingClientRect(e2));
      return null !== e2 && !t2.config.legend.floating && t2.config.legend.show ? this.dCtx.lgRect = { x: s2.x, y: s2.y, height: s2.height, width: 0 === s2.height ? 0 : s2.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t2.config.legend.position && "right" !== t2.config.legend.position || 1.5 * this.dCtx.lgRect.width > t2.globals.svgWidth && (this.dCtx.lgRect.width = t2.globals.svgWidth / 1.5), this.dCtx.lgRect;
    }
    getDatalabelsRect() {
      const t2 = this.w, e2 = [];
      t2.config.series.forEach((s3, i3) => {
        s3.data.forEach((s4, a3) => {
          const o3 = (r2 = t2.seriesData.series[i3][a3], t2.config.dataLabels.formatter(r2, { seriesIndex: i3, dataPointIndex: a3, w: t2 }));
          var r2;
          e2.push(o3);
        });
      });
      const s2 = m.getLargestStringFromArr(e2), i2 = new N(this.w), a2 = t2.config.dataLabels.style, o2 = i2.getTextRects(s2, parseInt(a2.fontSize).toString(), a2.fontFamily);
      return { width: 1.05 * o2.width, height: o2.height };
    }
    getLargestStringFromMultiArr(t2, e2) {
      let s2 = t2;
      if (this.w.axisFlags.isMultiLineX) {
        const t3 = e2.map((t4) => Array.isArray(t4) ? t4.length : 1), i2 = Math.max(...t3);
        s2 = e2[t3.indexOf(i2)];
      }
      return s2;
    }
  };
  class gt {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    getxAxisLabelsCoords() {
      const t2 = this.w;
      let e2, s2 = t2.labelData.labels.slice();
      if (t2.config.xaxis.convertedCatToNumeric && 0 === s2.length && (s2 = t2.labelData.categoryLabels), t2.labelData.timescaleLabels.length > 0) {
        const s3 = this.getxAxisTimeScaleLabelsCoords();
        e2 = { width: s3.width, height: s3.height }, t2.layout.rotateXLabels = false;
      } else {
        this.dCtx.lgWidthForSideLegends = "left" !== t2.config.legend.position && "right" !== t2.config.legend.position || t2.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        const i2 = t2.formatters.xLabelFormatter;
        let a2 = m.getLargestStringFromArr(s2), o2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(a2, s2);
        t2.globals.isBarHorizontal && (a2 = t2.globals.yAxisScale[0].result.reduce((t3, e3) => t3.length > e3.length ? t3 : e3, 0), o2 = a2);
        const r2 = new w(this.w), n2 = a2;
        a2 = r2.xLabelFormat(i2, a2, n2, { i: void 0, dateFormatter: new y(this.w).formatDate, w: t2 }), o2 = r2.xLabelFormat(i2, o2, n2, { i: void 0, dateFormatter: new y(this.w).formatDate, w: t2 }), (t2.config.xaxis.convertedCatToNumeric && void 0 === a2 || "" === String(a2).trim()) && (a2 = "1", o2 = a2);
        const l2 = new N(this.w);
        let h2 = l2.getTextRects(a2, t2.config.xaxis.labels.style.fontSize), c2 = h2;
        if (a2 !== o2 && (c2 = l2.getTextRects(o2, t2.config.xaxis.labels.style.fontSize)), e2 = { width: h2.width >= c2.width ? h2.width : c2.width, height: h2.height >= c2.height ? h2.height : c2.height }, e2.width * s2.length > t2.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== t2.config.xaxis.labels.rotate || t2.config.xaxis.labels.rotateAlways) {
          if (!t2.globals.isBarHorizontal) {
            t2.layout.rotateXLabels = true;
            const s3 = (e3) => l2.getTextRects(e3, t2.config.xaxis.labels.style.fontSize, t2.config.xaxis.labels.style.fontFamily, `rotate(${t2.config.xaxis.labels.rotate} 0 0)`, false);
            h2 = s3(a2), a2 !== o2 && (c2 = s3(o2)), e2.height = (h2.height > c2.height ? h2.height : c2.height) / 1.5, e2.width = h2.width > c2.width ? h2.width : c2.width;
          }
        } else t2.layout.rotateXLabels = false;
      }
      return t2.config.xaxis.labels.show || (e2 = { width: 0, height: 0 }), { width: e2.width, height: e2.height };
    }
    getxAxisGroupLabelsCoords() {
      var t2;
      const e2 = this.w;
      if (!e2.labelData.hasXaxisGroups) return { width: 0, height: 0 };
      const s2 = (null == (t2 = e2.config.xaxis.group.style) ? void 0 : t2.fontSize) || e2.config.xaxis.labels.style.fontSize, i2 = e2.labelData.groups.map((t3) => t3.title);
      let a2;
      const o2 = m.getLargestStringFromArr(i2), r2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(o2, i2), n2 = new N(this.w), l2 = n2.getTextRects(o2, s2);
      let h2 = l2;
      return o2 !== r2 && (h2 = n2.getTextRects(r2, s2)), a2 = { width: l2.width >= h2.width ? l2.width : h2.width, height: l2.height >= h2.height ? l2.height : h2.height }, e2.config.xaxis.labels.show || (a2 = { width: 0, height: 0 }), { width: a2.width, height: a2.height };
    }
    getxAxisTitleCoords() {
      const t2 = this.w;
      let e2 = 0, s2 = 0;
      if (void 0 !== t2.config.xaxis.title.text) {
        const i2 = new N(this.w).getTextRects(t2.config.xaxis.title.text, t2.config.xaxis.title.style.fontSize);
        e2 = i2.width, s2 = i2.height;
      }
      return { width: e2, height: s2 };
    }
    getxAxisTimeScaleLabelsCoords() {
      const t2 = this.w;
      this.dCtx.timescaleLabels = t2.labelData.timescaleLabels.slice();
      const e2 = this.dCtx.timescaleLabels.map((t3) => t3.value), s2 = e2.reduce((t3, e3) => void 0 === t3 ? 0 : t3.length > e3.length ? t3 : e3, 0), i2 = new N(this.w).getTextRects(s2, t2.config.xaxis.labels.style.fontSize);
      return 1.05 * i2.width * e2.length > t2.layout.gridWidth && 0 !== t2.config.xaxis.labels.rotate && (t2.globals.overlappingXLabels = true), i2;
    }
    additionalPaddingXLabels(t2) {
      const e2 = this.w, s2 = e2.globals, i2 = e2.config, a2 = i2.xaxis.type, o2 = t2.width;
      s2.skipLastTimelinelabel = false, s2.skipFirstTimelinelabel = false;
      const r2 = e2.config.yaxis[0].opposite && e2.globals.isBarHorizontal, n2 = (t3) => {
        if (this.dCtx.timescaleLabels && this.dCtx.timescaleLabels.length) {
          const a3 = this.dCtx.timescaleLabels[0], r3 = this.dCtx.timescaleLabels[this.dCtx.timescaleLabels.length - 1].position + o2 / 1.75 - this.dCtx.yAxisWidthRight, n3 = a3.position - o2 / 1.75 + this.dCtx.yAxisWidthLeft, l3 = "right" === e2.config.legend.position && this.dCtx.lgRect.width > 0 ? this.dCtx.lgRect.width : 0;
          r3 > s2.svgWidth - e2.layout.translateX - l3 && (s2.skipLastTimelinelabel = true), n3 < -(t3.show && !t3.floating || "bar" !== i2.chart.type && "candlestick" !== i2.chart.type && "rangeBar" !== i2.chart.type && "boxPlot" !== i2.chart.type && "violin" !== i2.chart.type ? 10 : o2 / 1.75) && (s2.skipFirstTimelinelabel = true);
        } else "datetime" === a2 ? this.dCtx.gridPad.right < o2 && !e2.layout.rotateXLabels && (s2.skipLastTimelinelabel = true) : "datetime" !== a2 && this.dCtx.gridPad.right < o2 / 2 - this.dCtx.yAxisWidthRight && !e2.layout.rotateXLabels && !e2.config.xaxis.labels.trim && (this.dCtx.xPadRight = o2 / 2 + 1);
      }, l2 = (t3, e3) => {
        i2.yaxis.length > 1 && ((t4) => -1 !== s2.collapsedSeriesIndices.indexOf(t4))(e3) || n2(t3);
      };
      i2.yaxis.forEach((t3, e3) => {
        r2 ? (this.dCtx.gridPad.left < o2 && (this.dCtx.xPadLeft = o2 / 2 + 1), this.dCtx.xPadRight = o2 / 2 + 1) : l2(t3, e3);
      });
    }
  }
  class pt {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    getyAxisLabelsCoords() {
      const t2 = this.w, e2 = [];
      let s2 = 10;
      const i2 = new Z(this.w, { theme: this.dCtx.theme, timeScale: this.dCtx.timeScale });
      return t2.config.yaxis.map((a2, o2) => {
        const r2 = { seriesIndex: o2, dataPointIndex: -1, w: t2 }, n2 = t2.globals.yAxisScale[o2];
        let l2 = 0;
        if (!i2.isYAxisHidden(o2) && a2.labels.show && void 0 !== a2.labels.minWidth && (l2 = a2.labels.minWidth), !i2.isYAxisHidden(o2) && a2.labels.show && n2.result.length) {
          const i3 = t2.formatters.yLabelFormatters[o2], h2 = n2.niceMin === Number.MIN_VALUE ? 0 : n2.niceMin;
          let c2 = n2.result.reduce((t3, e3) => {
            var s3, a3;
            return (null == (s3 = String(i3(t3, r2))) ? void 0 : s3.length) > (null == (a3 = String(i3(e3, r2))) ? void 0 : a3.length) ? t3 : e3;
          }, h2);
          c2 = i3(c2, r2);
          let d2 = c2;
          if (void 0 !== c2 && 0 !== c2.length || (c2 = n2.niceMax), 1 === String(c2).length && (c2 += ".0", d2 = c2), t2.globals.isBarHorizontal) {
            s2 = 0;
            const e3 = t2.labelData.labels.slice();
            c2 = m.getLargestStringFromArr(e3), c2 = i3(c2, { seriesIndex: o2, dataPointIndex: -1, w: t2 }), d2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(c2, e3);
          }
          const g2 = new N(this.w), p2 = "rotate(".concat(a2.labels.rotate, " 0 0)"), u2 = g2.getTextRects(c2, a2.labels.style.fontSize, a2.labels.style.fontFamily, p2, false);
          let x2 = u2;
          c2 !== d2 && (x2 = g2.getTextRects(d2, a2.labels.style.fontSize, a2.labels.style.fontFamily, p2, false)), e2.push({ width: (l2 > x2.width || l2 > u2.width ? l2 : x2.width > u2.width ? x2.width : u2.width) + s2, height: x2.height > u2.height ? x2.height : u2.height });
        } else e2.push({ width: 0, height: 0 });
      }), e2;
    }
    getyAxisTitleCoords() {
      const t2 = this.w, e2 = [];
      return t2.config.yaxis.map((t3) => {
        if (t3.show && void 0 !== t3.title.text) {
          const s2 = new N(this.w), i2 = "rotate(".concat(t3.title.rotate, " 0 0)"), a2 = s2.getTextRects(t3.title.text, t3.title.style.fontSize, t3.title.style.fontFamily, i2, false);
          e2.push({ width: a2.width, height: a2.height });
        } else e2.push({ width: 0, height: 0 });
      }), e2;
    }
    getTotalYAxisWidth() {
      const t2 = this.w;
      let e2 = 0, s2 = 0, i2 = 0;
      const a2 = t2.globals.yAxisScale.length > 1 ? 10 : 0, o2 = new Z(this.w, { theme: this.dCtx.theme, timeScale: this.dCtx.timeScale }), r2 = (r3, n2) => {
        const l2 = t2.config.yaxis[n2].floating;
        let h2 = 0;
        r3.width > 0 && !l2 ? (h2 = r3.width + a2, (function(e3) {
          return t2.globals.ignoreYAxisIndexes.indexOf(e3) > -1;
        })(n2) && (h2 = h2 - r3.width - a2)) : h2 = l2 || o2.isYAxisHidden(n2) ? 0 : 5, t2.config.yaxis[n2].opposite ? i2 += h2 : s2 += h2, e2 += h2;
      };
      return t2.layout.yLabelsCoords.map((t3, e3) => {
        r2(t3, e3);
      }), t2.layout.yTitleCoords.map((t3, e3) => {
        r2(t3, e3);
      }), t2.globals.isBarHorizontal && !t2.config.yaxis[0].floating && (e2 = t2.layout.yLabelsCoords[0].width + t2.layout.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = s2, this.dCtx.yAxisWidthRight = i2, e2;
    }
  }
  class ut {
    constructor(t2) {
      this.w = t2.w, this.dCtx = t2;
    }
    gridPadForColumnsInNumericAxis(t2) {
      const { w: e2 } = this, { config: s2, globals: i2 } = e2;
      if (i2.noData || i2.collapsedSeries.length + i2.ancillaryCollapsedSeries.length === s2.series.length) return 0;
      const a2 = (t3) => ["bar", "rangeBar", "candlestick", "boxPlot", "violin"].includes(t3), o2 = s2.chart.type;
      let r2 = 0, n2 = a2(o2) ? s2.series.length : 1;
      i2.comboBarCount > 0 && (n2 = i2.comboBarCount), i2.collapsedSeries.forEach((t3) => {
        a2(t3.type) && (n2 -= 1);
      }), s2.chart.stacked && (n2 = 1);
      const l2 = a2(o2) || i2.comboBarCount > 0;
      let h2 = Math.abs(i2.initialMaxX - i2.initialMinX);
      if (l2 && e2.axisFlags.isXNumeric && !i2.isBarHorizontal && n2 > 0 && 0 !== h2) {
        h2 <= 3 && (h2 = i2.dataPoints);
        const e3 = h2 / t2;
        let a3 = i2.minXDiff && i2.minXDiff / e3 > 0 ? i2.minXDiff / e3 : 0;
        a3 > t2 / 2 && (a3 /= 2), r2 = a3 * parseInt(s2.plotOptions.bar.columnWidth, 10) / 100, r2 < 1 && (r2 = 1), i2.barPadForNumericAxis = r2;
      }
      return r2;
    }
    gridPadFortitleSubtitle() {
      const { w: t2 } = this, { globals: e2 } = t2;
      let s2 = this.dCtx.isSparkline || !e2.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach((i3) => {
        void 0 !== t2.config[i3].text ? s2 += t2.config[i3].margin : s2 += this.dCtx.isSparkline || !e2.axisCharts ? 0 : 5;
      }), !t2.config.legend.show || "bottom" !== t2.config.legend.position || t2.config.legend.floating || e2.axisCharts || (s2 += 10);
      const i2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), a2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      t2.layout.gridHeight -= i2.height + a2.height + s2, t2.layout.translateY += i2.height + a2.height + s2;
    }
    setGridXPosForDualYAxis(t2, e2) {
      const { w: s2 } = this, i2 = new Z(this.w, { theme: this.dCtx.theme, timeScale: this.dCtx.timeScale });
      s2.config.yaxis.forEach((a2, o2) => {
        -1 !== s2.globals.ignoreYAxisIndexes.indexOf(o2) || a2.floating || i2.isYAxisHidden(o2) || (a2.opposite && (s2.layout.translateX -= e2[o2].width + t2[o2].width + parseInt(a2.labels.style.fontSize, 10) / 1.2 + 12), s2.layout.translateX < 2 && (s2.layout.translateX = 2));
      });
    }
  }
  class xt {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.theme = e2.theme, this.timeScale = e2.timeScale, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new dt(this), this.dimYAxis = new pt(this), this.dimXAxis = new gt(this), this.dimGrid = new ut(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0, this.datalabelsCoords = { width: 0, height: 0 }, this.xAxisWidth = 0, this.timescaleLabels = [];
    }
    plotCoords() {
      const t2 = this.w, e2 = t2.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
      const s2 = Array.isArray(t2.config.stroke.width) ? Math.max(...t2.config.stroke.width) : t2.config.stroke.width;
      this.isSparkline && ((t2.config.markers.discrete.length > 0 || t2.config.markers.size > 0) && Object.entries(this.gridPad).forEach(([t3, e3]) => {
        this.gridPad[t3] = Math.max(e3, this.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(s2 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(s2 / 2, this.gridPad.bottom)), e2.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), t2.layout.gridHeight = t2.layout.gridHeight - this.gridPad.top - this.gridPad.bottom, t2.layout.gridWidth = t2.layout.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      const i2 = this.dimGrid.gridPadForColumnsInNumericAxis(t2.layout.gridWidth);
      return t2.layout.gridWidth = t2.layout.gridWidth - 2 * i2, t2.layout.translateX = t2.layout.translateX + this.gridPad.left + this.xPadLeft + (i2 > 0 ? i2 : 0), t2.layout.translateY = t2.layout.translateY + this.gridPad.top, { layout: { gridHeight: t2.layout.gridHeight, gridWidth: t2.layout.gridWidth, translateX: t2.layout.translateX, translateY: t2.layout.translateY, translateXAxisX: t2.layout.translateXAxisX, translateXAxisY: t2.layout.translateXAxisY, rotateXLabels: t2.layout.rotateXLabels, xAxisHeight: t2.layout.xAxisHeight, xAxisLabelsHeight: t2.layout.xAxisLabelsHeight, xAxisGroupLabelsHeight: t2.layout.xAxisGroupLabelsHeight, xAxisLabelsWidth: t2.layout.xAxisLabelsWidth, yLabelsCoords: t2.layout.yLabelsCoords, yTitleCoords: t2.layout.yTitleCoords } };
    }
    setDimensionsForAxisCharts() {
      const t2 = this.w, e2 = t2.globals, s2 = this.dimYAxis.getyAxisLabelsCoords(), i2 = this.dimYAxis.getyAxisTitleCoords();
      e2.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), t2.layout.yLabelsCoords = [], t2.layout.yTitleCoords = [], t2.config.yaxis.map((e3, a3) => {
        t2.layout.yLabelsCoords.push({ width: s2[a3].width, index: a3 }), t2.layout.yTitleCoords.push({ width: i2[a3].width, index: a3 });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      const a2 = this.dimXAxis.getxAxisLabelsCoords(), o2 = this.dimXAxis.getxAxisGroupLabelsCoords(), r2 = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(a2, r2, o2), t2.layout.translateXAxisY = t2.layout.rotateXLabels ? this.xAxisHeight / 8 : -4, t2.layout.translateXAxisX = t2.layout.rotateXLabels && t2.axisFlags.isXNumeric && t2.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, t2.globals.isBarHorizontal && (t2.layout.rotateXLabels = false, t2.layout.translateXAxisY = parseInt(t2.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), t2.layout.translateXAxisY = t2.layout.translateXAxisY + t2.config.xaxis.labels.offsetY, t2.layout.translateXAxisX = t2.layout.translateXAxisX + t2.config.xaxis.labels.offsetX;
      let n2 = this.yAxisWidth, l2 = this.xAxisHeight;
      t2.layout.xAxisLabelsHeight = this.xAxisHeight - r2.height, t2.layout.xAxisGroupLabelsHeight = t2.layout.xAxisLabelsHeight - a2.height, t2.layout.xAxisLabelsWidth = this.xAxisWidth, t2.layout.xAxisHeight = this.xAxisHeight;
      let h2 = 10;
      ("radar" === t2.config.chart.type || this.isSparkline) && (n2 = 0, l2 = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === t2.config.chart.type) && (n2 = 0, l2 = 0, h2 = 0), this.isSparkline || "treemap" === t2.config.chart.type || this.dimXAxis.additionalPaddingXLabels(a2);
      const c2 = () => {
        t2.layout.translateX = n2 + this.datalabelsCoords.width, t2.layout.gridHeight = e2.svgHeight - this.lgRect.height - l2 - (this.isSparkline || "treemap" === t2.config.chart.type ? 0 : t2.layout.rotateXLabels ? 10 : 15), t2.layout.gridWidth = e2.svgWidth - n2 - 2 * this.datalabelsCoords.width;
      };
      switch ("top" === t2.config.xaxis.position && (h2 = t2.layout.xAxisHeight - t2.config.xaxis.axisTicks.height - 5), t2.config.legend.position) {
        case "bottom":
          t2.layout.translateY = h2, c2();
          break;
        case "top":
          t2.layout.translateY = this.lgRect.height + h2, c2();
          break;
        case "left":
          t2.layout.translateY = h2, t2.layout.translateX = this.lgRect.width + n2 + this.datalabelsCoords.width, t2.layout.gridHeight = e2.svgHeight - l2 - 12, t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - n2 - 2 * this.datalabelsCoords.width;
          break;
        case "right":
          t2.layout.translateY = h2, t2.layout.translateX = n2 + this.datalabelsCoords.width, t2.layout.gridHeight = e2.svgHeight - l2 - 12, t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - n2 - 2 * this.datalabelsCoords.width - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(i2, s2);
      new et(this.w, { theme: this.theme, timeScale: this.timeScale }).setYAxisXPosition(s2, i2);
    }
    setDimensionsForNonAxisCharts() {
      const t2 = this.w, e2 = t2.globals, s2 = t2.config;
      let i2 = 0;
      t2.config.legend.show && !t2.config.legend.floating && (i2 = 20);
      const a2 = "pie" === s2.chart.type || "polarArea" === s2.chart.type || "donut" === s2.chart.type ? "pie" : "radialBar", o2 = s2.plotOptions[a2].offsetY, r2 = s2.plotOptions[a2].offsetX;
      if (!s2.legend.show || s2.legend.floating) {
        t2.layout.gridHeight = e2.svgHeight;
        const s3 = t2.dom.elWrap.getBoundingClientRect().width;
        return t2.layout.gridWidth = Math.min(s3, t2.layout.gridHeight), t2.layout.translateY = o2, void (t2.layout.translateX = r2 + (e2.svgWidth - t2.layout.gridWidth) / 2);
      }
      switch (s2.legend.position) {
        case "bottom":
          t2.layout.gridHeight = e2.svgHeight - this.lgRect.height, t2.layout.gridWidth = e2.svgWidth, t2.layout.translateY = o2 - 10, t2.layout.translateX = r2 + (e2.svgWidth - t2.layout.gridWidth) / 2;
          break;
        case "top":
          t2.layout.gridHeight = e2.svgHeight - this.lgRect.height, t2.layout.gridWidth = e2.svgWidth, t2.layout.translateY = this.lgRect.height + o2 + 10, t2.layout.translateX = r2 + (e2.svgWidth - t2.layout.gridWidth) / 2;
          break;
        case "left":
          t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - i2, t2.layout.gridHeight = "auto" !== s2.chart.height ? e2.svgHeight : t2.layout.gridWidth, t2.layout.translateY = o2, t2.layout.translateX = r2 + this.lgRect.width + i2;
          break;
        case "right":
          t2.layout.gridWidth = e2.svgWidth - this.lgRect.width - i2 - 5, t2.layout.gridHeight = "auto" !== s2.chart.height ? e2.svgHeight : t2.layout.gridWidth, t2.layout.translateY = o2, t2.layout.translateX = r2 + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    }
    conditionalChecksForAxisCoords(t2, e2, s2) {
      const i2 = this.w, a2 = i2.labelData.hasXaxisGroups ? 2 : 1, o2 = s2.height + t2.height + e2.height, r2 = i2.axisFlags.isMultiLineX ? 1.2 : 1.618, n2 = i2.layout.rotateXLabels ? 22 : 10, l2 = i2.layout.rotateXLabels && "bottom" === i2.config.legend.position ? 10 : 0;
      this.xAxisHeight = o2 * r2 + a2 * n2 + l2, this.xAxisWidth = t2.width, this.xAxisHeight - e2.height > i2.config.xaxis.labels.maxHeight && (this.xAxisHeight = i2.config.xaxis.labels.maxHeight), i2.config.xaxis.labels.minHeight && this.xAxisHeight < i2.config.xaxis.labels.minHeight && (this.xAxisHeight = i2.config.xaxis.labels.minHeight), i2.config.xaxis.floating && (this.xAxisHeight = 0);
      let h2 = 0, c2 = 0;
      i2.config.yaxis.forEach((t3) => {
        h2 += t3.labels.minWidth, c2 += t3.labels.maxWidth;
      }), this.yAxisWidth < h2 && (this.yAxisWidth = h2), this.yAxisWidth > c2 && (this.yAxisWidth = c2);
    }
  }
  const ft = 1e3, bt = 6e4, mt = 36e5, yt = 24 * mt, wt = 7 * yt, vt = 30 * yt, At = 365 * yt, Ct = 10 / 86400, St = [{ unit: "second", step: 1, approxMs: ft }, { unit: "second", step: 5, approxMs: 5e3 }, { unit: "second", step: 15, approxMs: 15e3 }, { unit: "second", step: 30, approxMs: 3e4 }, { unit: "minute", step: 1, approxMs: bt }, { unit: "minute", step: 5, approxMs: 3e5 }, { unit: "minute", step: 15, approxMs: 9e5 }, { unit: "minute", step: 30, approxMs: 18e5 }, { unit: "hour", step: 1, approxMs: mt }, { unit: "hour", step: 3, approxMs: 3 * mt }, { unit: "hour", step: 6, approxMs: 6 * mt }, { unit: "hour", step: 12, approxMs: 12 * mt }, { unit: "day", step: 1, approxMs: yt }, { unit: "day", step: 2, approxMs: 2 * yt }, { unit: "week", step: 1, approxMs: wt }, { unit: "week", step: 2, approxMs: 2 * wt }, { unit: "month", step: 1, approxMs: vt }, { unit: "month", step: 3, approxMs: 7776e6 }, { unit: "month", step: 6, approxMs: 15552e6 }, { unit: "year", step: 1, approxMs: At }, { unit: "year", step: 2, approxMs: 63072e6 }, { unit: "year", step: 5, approxMs: 15768e7 }, { unit: "year", step: 10, approxMs: 31536e7 }, { unit: "year", step: 25, approxMs: 7884e8 }, { unit: "year", step: 50, approxMs: 15768e8 }, { unit: "year", step: 100, approxMs: 31536e8 }];
  class kt {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.tickInterval = null, this.timeScaleArray = [], this.utc = t2.config.xaxis.labels.datetimeUTC;
    }
    calculateTimeScaleTicks(t2, e2) {
      const s2 = this.w;
      if (s2.globals.allSeriesCollapsed) return s2.labelData.labels = [], s2.labelData.timescaleLabels = [], this.timeScaleArray = [], [];
      const i2 = e2 - t2, a2 = i2 / yt;
      s2.interact.disableZoomIn = false, s2.interact.disableZoomOut = false, a2 < Ct ? s2.interact.disableZoomIn = true : a2 > 5e4 && (s2.interact.disableZoomOut = true);
      const o2 = Number.isFinite(s2.config.xaxis.tickAmount) ? s2.config.xaxis.tickAmount : 10;
      this.tickInterval = (function(t3, e3) {
        (!Number.isFinite(e3) || e3 <= 0) && (e3 = 10);
        if (t3 <= 0) return St[0];
        const s3 = t3 / e3;
        let i3 = St[0], a3 = 1 / 0;
        for (const t4 of St) {
          const e4 = Math.abs(Math.log(t4.approxMs / s3));
          e4 < a3 && (a3 = e4, i3 = t4);
        }
        return i3;
      })(i2, o2);
      const r2 = this.generateBaseTicks(t2, e2, this.tickInterval);
      return this.timeScaleArray = r2, r2;
    }
    generateBaseTicks(t2, e2, s2) {
      const i2 = this.w, a2 = new y(i2), o2 = this.utc, r2 = i2.layout.gridWidth, n2 = e2 - t2, l2 = [];
      let h2 = a2.ceilToBoundary(t2, s2.unit, s2.step, o2), c2 = 0;
      for (; h2 <= e2 && c2 < 5e3; ) {
        const e3 = a2.getDateFields(h2, o2), i3 = n2 > 0 ? (h2 - t2) / n2 * r2 : 0;
        l2.push({ timestamp: h2, position: i3, unit: s2.unit, year: e3.year, month: e3.month + 1, day: e3.date, hour: e3.hour, minute: e3.minute, second: e3.second, value: h2 }), h2 = a2.addInterval(h2, s2.unit, s2.step, o2), c2++;
      }
      return l2;
    }
    recalcDimensionsBasedOnFormat(t2) {
      const e2 = this.w, s2 = this.formatDates(t2), i2 = this.removeOverlappingTS(s2);
      e2.labelData.timescaleLabels = i2.slice();
      const a2 = new xt(this.w, this.ctx).plotCoords();
      this.ctx._writeLayoutCoords(a2.layout);
    }
    formatDates(t2) {
      const e2 = this.w, s2 = new y(e2), i2 = e2.config.xaxis.labels.format, a2 = e2.config.xaxis.labels.datetimeFormatter, o2 = this.utc, r2 = (t3, e3 = 2) => String(t3).padStart(e3, "0"), n2 = i2 || this._effectiveFormat(t2, a2);
      return t2.map((t3) => {
        const e3 = s2.getDate(t3.timestamp), i3 = s2.formatDate(e3, n2);
        return { dateString: `${t3.year}-${r2(t3.month)}-${r2(t3.day)}T${r2(t3.hour)}:${r2(t3.minute)}:${r2(t3.second)}.000${o2 ? "Z" : ""}`, position: t3.position, value: i3, unit: t3.unit, year: t3.year, month: t3.month };
      });
    }
    _effectiveFormat(t2, e2) {
      if (0 === t2.length) return e2.day || "dd MMM";
      const s2 = this.tickInterval && this.tickInterval.unit || t2[0].unit, i2 = e2["week" === s2 ? "day" : s2] || e2.day || "dd MMM", a2 = t2[0], o2 = t2[t2.length - 1], r2 = a2.year !== o2.year, n2 = r2 || a2.month !== o2.month || a2.day !== o2.day, l2 = /y/i.test(i2), h2 = /M/.test(i2), c2 = /d/i.test(i2);
      if ("month" === s2 || "week" === s2) return r2 && !l2 ? i2 + " yyyy" : i2;
      if ("day" === s2) return r2 && !l2 ? i2 + " yyyy" : i2;
      if ("hour" === s2 || "minute" === s2 || "second" === s2) {
        if (n2 && !c2 && !h2) {
          return (r2 ? "dd MMM yyyy" : "dd MMM") + " " + i2;
        }
        return i2;
      }
      return i2;
    }
    removeOverlappingTS(t2) {
      if (0 === t2.length) return [];
      const e2 = this.w, s2 = new N(e2);
      let i2, a2 = false;
      t2[0].value && t2.every((e3) => e3.value.length === t2[0].value.length) && (a2 = true, i2 = s2.getTextRects(t2[0].value, e2.config.xaxis.labels.style.fontSize).width);
      let o2 = 0;
      return t2.map((r2, n2) => {
        if (0 === n2) return r2;
        if (!e2.config.xaxis.labels.hideOverlappingLabels) return r2;
        const l2 = a2 ? i2 : s2.getTextRects(t2[o2].value, e2.config.xaxis.labels.style.fontSize).width, h2 = t2[o2].position;
        return r2.position > h2 + l2 + 10 ? (o2 = n2, r2) : null;
      }).filter((t3) => null !== t3);
    }
  }
  const Dt = "__apexcharts_registry__";
  function Lt() {
    return globalThis[Dt];
  }
  function Mt(t2) {
    const e2 = Lt()[t2];
    if (!e2) throw new Error(`ApexCharts: chart type "${t2}" is not registered. Import it via ApexCharts.use() or use the full apexcharts bundle.`);
    return e2;
  }
  globalThis[Dt] || (globalThis[Dt] = {});
  class Pt {
    constructor(t2, e2, s2) {
      this.w = e2, this.ctx = s2, this.el = t2;
    }
    setupElements() {
      const { globals: t2, config: e2 } = this.w, s2 = e2.chart.type, i2 = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "violin", "scatter", "bubble"], a2 = [...i2, "radar", "heatmap", "treemap"];
      t2.axisCharts = a2.includes(s2), t2.xyCharts = i2.includes(s2), t2.isBarHorizontal = ["bar", "rangeBar", "boxPlot", "violin"].includes(s2) && e2.plotOptions.bar.horizontal, t2.chartClass = `.apexcharts${t2.chartID}`, this.w.dom.baseEl = this.el, this.w.dom.elWrap = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), N.setAttrs(this.w.dom.elWrap, { id: t2.chartClass.substring(1), class: `apexcharts-canvas ${t2.chartClass.substring(1)}` }), this.el.appendChild(this.w.dom.elWrap);
      const o2 = globalThis.SVG;
      if (this.w.dom.Paper = o2().addTo(this.w.dom.elWrap), this.w.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: `translate(${e2.chart.offsetX}, ${e2.chart.offsetY})` }), this.w.dom.Paper.node.style.background = "dark" !== e2.theme.mode || e2.chart.background ? "light" !== e2.theme.mode || e2.chart.background ? e2.chart.background : "#fff" : "#343A3F", this.setSVGDimensions(), this.w.dom.elLegendForeign = b.createElementNS(W, "foreignObject"), N.setAttrs(this.w.dom.elLegendForeign, { x: 0, y: 0, width: t2.svgWidth, height: t2.svgHeight }), this.w.dom.elLegendWrap = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), this.w.dom.elLegendWrap.classList.add("apexcharts-legend"), this.w.dom.elWrap.appendChild(this.w.dom.elLegendWrap), this.w.dom.Paper.node.appendChild(this.w.dom.elLegendForeign), e2.chart.accessibility.enabled && e2.chart.accessibility.announcements.enabled) {
        const t3 = b.createElement("div");
        t3.className = "apexcharts-sr-status", t3.setAttribute("role", "status"), t3.setAttribute("aria-live", "polite"), t3.setAttribute("aria-atomic", "true"), this.w.dom.elWrap.appendChild(t3);
      }
      if (e2.chart.accessibility.enabled) {
        const t3 = this.getAccessibleChartLabel(), s3 = e2.chart.accessibility.keyboard.enabled && e2.chart.accessibility.keyboard.navigation.enabled ? "application" : "img";
        if (this.w.dom.Paper.attr({ role: s3, "aria-label": t3 }), e2.chart.accessibility.description) {
          const t4 = b.createElementNS(W, "desc");
          t4.textContent = e2.chart.accessibility.description, this.w.dom.Paper.node.insertBefore(t4, this.w.dom.elLegendForeign.nextSibling);
        }
      }
      this.w.dom.elGraphical = this.w.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), this.w.dom.elDefs = this.w.dom.Paper.defs(), this.w.dom.Paper.add(this.w.dom.elGraphical), this.w.dom.elGraphical.add(this.w.dom.elDefs);
    }
    plotChartType(t2, e2) {
      const { w: s2, ctx: i2 } = this, { config: a2, globals: o2 } = s2, r2 = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, bar: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, violin: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, n2 = a2.chart.type || "line";
      let l2 = null, h2 = 0;
      this.w.seriesData.series.forEach((e3, i3) => {
        var a3, o3;
        const c3 = "column" === (null == (a3 = t2[i3]) ? void 0 : a3.type) ? "bar" : (null == (o3 = t2[i3]) ? void 0 : o3.type) || ("column" === n2 ? "bar" : n2), d3 = r2;
        d3[c3] ? ("rangeArea" === c3 ? (d3[c3].series.push(this.w.rangeData.seriesRangeStart[i3]), d3[c3].seriesRangeEnd.push(this.w.rangeData.seriesRangeEnd[i3])) : d3[c3].series.push(e3), d3[c3].i.push(i3), "bar" === c3 && (s2.globals.columnSeries = r2.bar)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(c3) && (l2 = c3), n2 !== c3 && "scatter" !== c3 && h2++;
      }), h2 > 0 && r2.bar.series.length > 0 && a2.plotOptions.bar.horizontal && (h2 -= r2.bar.series.length, r2.bar = { series: [], i: [] }, s2.globals.columnSeries = { series: [], i: [] }), o2.comboCharts || (o2.comboCharts = h2 > 0);
      const c2 = r2.line.series.length > 0 || r2.area.series.length > 0 || r2.scatter.series.length > 0 || r2.bubble.series.length > 0 || r2.rangeArea.series.length > 0 || !o2.comboCharts && ["line", "area", "scatter", "bubble", "rangeArea"].includes(a2.chart.type) ? new (Mt("line"))(i2.w, i2, e2) : null, d2 = r2.candlestick.series.length > 0 || r2.boxPlot.series.length > 0 || !o2.comboCharts && ["candlestick", "boxPlot"].includes(a2.chart.type) ? new (Mt("candlestick"))(i2.w, i2, e2) : null, g2 = r2.violin.series.length > 0 || !o2.comboCharts && "violin" === a2.chart.type ? new (Mt("violin"))(i2.w, i2, e2) : null, p2 = !o2.comboCharts && ["pie", "donut", "polarArea"].includes(a2.chart.type);
      i2.pie = p2 ? new (Mt("pie"))(i2.w, i2) : null;
      const u2 = r2.rangeBar.series.length > 0 || !o2.comboCharts && "rangeBar" === a2.chart.type;
      i2.rangeBar = u2 ? new (Mt("rangeBar"))(i2.w, i2, e2) : null;
      let x2 = [];
      if (o2.comboCharts) {
        const t3 = new F(this.w);
        if (r2.area.series.length > 0 && x2.push(...t3.drawSeriesByGroup(r2.area, o2.areaGroups, "area", c2)), r2.bar.series.length > 0) if (a2.chart.stacked) {
          const t4 = new (Mt("barStacked"))(i2.w, i2, e2);
          x2.push(t4.draw(r2.bar.series, r2.bar.i));
        } else i2.bar = new (Mt("bar"))(i2.w, i2, e2), x2.push(i2.bar.draw(r2.bar.series, r2.bar.i));
        if (r2.rangeArea.series.length > 0 && x2.push(c2.draw(r2.rangeArea.series, "rangeArea", r2.rangeArea.i, r2.rangeArea.seriesRangeEnd)), r2.line.series.length > 0 && x2.push(...t3.drawSeriesByGroup(r2.line, o2.lineGroups, "line", c2)), r2.candlestick.series.length > 0 && x2.push(d2.draw(r2.candlestick.series, "candlestick", r2.candlestick.i)), r2.boxPlot.series.length > 0 && x2.push(d2.draw(r2.boxPlot.series, "boxPlot", r2.boxPlot.i)), r2.violin.series.length > 0 && x2.push(g2.draw(r2.violin.series, "violin", r2.violin.i)), r2.rangeBar.series.length > 0 && x2.push(i2.rangeBar.draw(r2.rangeBar.series, r2.rangeBar.i)), r2.scatter.series.length > 0) {
          const t4 = new (Mt("line"))(i2.w, i2, e2, true);
          x2.push(t4.draw(r2.scatter.series, "scatter", r2.scatter.i));
        }
        if (r2.bubble.series.length > 0) {
          const t4 = new (Mt("line"))(i2.w, i2, e2, true);
          x2.push(t4.draw(r2.bubble.series, "bubble", r2.bubble.i));
        }
      } else {
        const t3 = a2.chart.type;
        switch (t3) {
          case "line":
            x2 = c2.draw(this.w.seriesData.series, "line");
            break;
          case "area":
            x2 = c2.draw(this.w.seriesData.series, "area");
            break;
          case "bar":
            if (a2.chart.stacked) {
              x2 = new (Mt("barStacked"))(i2.w, i2, e2).draw(this.w.seriesData.series);
            } else i2.bar = new (Mt("bar"))(i2.w, i2, e2), x2 = i2.bar.draw(this.w.seriesData.series);
            break;
          case "candlestick":
            x2 = d2.draw(this.w.seriesData.series, "candlestick");
            break;
          case "boxPlot":
            x2 = d2.draw(this.w.seriesData.series, t3);
            break;
          case "violin":
            x2 = g2.draw(this.w.seriesData.series, "violin");
            break;
          case "rangeBar":
            x2 = i2.rangeBar.draw(this.w.seriesData.series);
            break;
          case "rangeArea":
            x2 = c2.draw(this.w.rangeData.seriesRangeStart, "rangeArea", void 0, this.w.rangeData.seriesRangeEnd);
            break;
          case "heatmap":
            x2 = new (Mt("heatmap"))(i2.w, i2, e2).draw(this.w.seriesData.series);
            break;
          case "treemap":
            x2 = new (Mt("treemap"))(i2.w, i2).draw(this.w.seriesData.series);
            break;
          case "pie":
          case "donut":
          case "polarArea":
            x2 = i2.pie.draw(this.w.seriesData.series);
            break;
          case "radialBar":
            x2 = new (Mt("radialBar"))(i2.w, i2).draw(this.w.seriesData.series);
            break;
          case "radar":
            x2 = new (Mt("radar"))(i2.w, i2).draw(this.w.seriesData.series);
            break;
          default:
            x2 = c2.draw(this.w.seriesData.series);
        }
      }
      return x2;
    }
    setSVGDimensions() {
      var t2;
      const { globals: e2, config: s2 } = this.w;
      s2.chart.width = s2.chart.width || "100%", s2.chart.height = s2.chart.height || "auto";
      const i2 = s2.chart.width, a2 = s2.chart.height;
      e2.svgWidth = NaN, e2.svgHeight = NaN;
      let o2 = m.getDimensions(this.el);
      const r2 = i2.toString().split(/[0-9]+/g).pop();
      "%" === r2 ? m.isNumber(o2[0]) && (0 === o2[0].width && (o2 = m.getDimensions(this.el.parentNode)), e2.svgWidth = o2[0] * parseInt(i2, 10) / 100) : "px" !== r2 && "" !== r2 || (e2.svgWidth = parseInt(i2, 10));
      const n2 = String(a2).toString().split(/[0-9]+/g).pop();
      if ("auto" !== a2 && "" !== a2) if ("%" === n2) {
        const t3 = m.getDimensions(this.el.parentNode);
        e2.svgHeight = t3[1] * parseInt(a2, 10) / 100;
      } else e2.svgHeight = parseInt(a2, 10);
      else e2.svgHeight = e2.axisCharts ? e2.svgWidth / 1.61 : e2.svgWidth / 1.2;
      if (e2.svgWidth = Math.max(e2.svgWidth, 0), e2.svgHeight = Math.max(e2.svgHeight, 0), N.setAttrs(this.w.dom.Paper.node, { width: e2.svgWidth, height: e2.svgHeight }), "%" !== n2 && c.isBrowser()) {
        const i3 = e2.axisCharts && (s2.grid.show || s2.dataLabels.enabled || s2.xaxis.labels.show || s2.xaxis.axisBorder.show || s2.xaxis.axisTicks.show || s2.yaxis.some((t3) => t3.show && (t3.labels.show || t3.axisBorder.show || t3.axisTicks.show))), a3 = s2.chart.sparkline.enabled || !i3 ? 0 : s2.chart.parentHeightOffset, o3 = this.w.dom.Paper.node;
        (null == (t2 = o3.parentNode) ? void 0 : t2.parentNode) && (o3.parentNode.parentNode.style.minHeight = `${e2.svgHeight + a3}px`);
      }
      this.w.dom.elWrap.style.width = `${e2.svgWidth}px`, this.w.dom.elWrap.style.height = `${e2.svgHeight}px`;
    }
    shiftGraphPosition() {
      const { globals: t2 } = this.w, { translateY: e2, translateX: s2 } = t2;
      N.setAttrs(this.w.dom.elGraphical.node, { transform: `translate(${s2}, ${e2})` });
    }
    resizeNonAxisCharts() {
      var t2, e2, s2, i2, a2, o2;
      const { w: r2 } = this, n2 = r2.config.chart.height ? String(r2.config.chart.height) : "", l2 = "" !== n2 && "auto" !== n2, h2 = n2.includes("%");
      let d2 = 0, g2 = r2.config.chart.sparkline.enabled ? 1 : 15;
      g2 += r2.config.grid.padding.bottom, ["top", "bottom"].includes(r2.config.legend.position) && r2.config.legend.show && !r2.config.legend.floating && (d2 = (null != (e2 = null == (t2 = this.ctx.legend) ? void 0 : t2.legendHelpers.getLegendDimensions().clwh) ? e2 : 0) + 7);
      const p2 = r2.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie");
      let u2 = 2.05 * r2.globals.radialSize;
      const x2 = Math.abs(r2.config.plotOptions.radialBar.endAngle - r2.config.plotOptions.radialBar.startAngle);
      if (p2 && !r2.config.chart.sparkline.enabled && x2 < 360) {
        const t3 = m.getBoundingClientRect(this.w.dom.Paper.node);
        let e3 = 1 / 0, n3 = -1 / 0;
        const l3 = (s3) => {
          var i3, a3, o3, r3;
          if (null == (i3 = s3.classList) ? void 0 : i3.contains("apexcharts-radialbar-hollow")) return;
          const h3 = null == (o3 = null == (a3 = s3.tagName) ? void 0 : a3.toLowerCase) ? void 0 : o3.call(a3);
          if ("text" === h3 || "tspan" === h3) return;
          const c2 = Array.from(null != (r3 = s3.children) ? r3 : []);
          if (c2.length > 0) return void c2.forEach((t4) => l3(t4));
          const d3 = m.getBoundingClientRect(s3);
          if (d3.bottom - d3.top > 0) {
            const s4 = d3.top - t3.top, i4 = d3.bottom - t3.top;
            s4 < e3 && (e3 = s4), i4 > n3 && (n3 = i4);
          }
        };
        if (Array.from(null != (s2 = p2.children) ? s2 : []).forEach((t4) => l3(t4)), Number.isFinite(e3) || (e3 = 0), !Number.isFinite(n3)) {
          const e4 = m.getBoundingClientRect(p2);
          n3 = e4.bottom - t3.top;
        }
        const x3 = Math.max(g2, 0.2 * r2.globals.radialSize), f3 = Math.max(x3 - e3, 0);
        0 !== f3 && (r2.layout.translateY = (null != (i2 = r2.layout.translateY) ? i2 : 0) + f3, N.setAttrs(this.w.dom.elGraphical.node, { transform: `translate(${null != (a2 = r2.layout.translateX) ? a2 : 0}, ${r2.layout.translateY})` }), n3 += f3), u2 = n3 > 0 ? n3 : 2.05 * r2.globals.radialSize;
        const b2 = Math.max(x3, e3), y2 = Math.ceil(u2 + d2 + b2), w2 = null != (o2 = r2.config.chart.offsetY) ? o2 : 0, v2 = y2 + Math.max(w2, 0);
        return void (h2 || (this.w.dom.elLegendForeign && this.w.dom.elLegendForeign.setAttribute("height", String(v2)), this.w.dom.elWrap.style.height = `${v2}px`, N.setAttrs(this.w.dom.Paper.node, { height: y2 }), c.isBrowser() && (this.w.dom.Paper.node.parentNode.parentNode.style.minHeight = `${v2}px`)));
      }
      const f2 = Math.ceil(u2 + this.w.layout.translateY + d2 + g2);
      l2 || (this.w.dom.elLegendForeign && this.w.dom.elLegendForeign.setAttribute("height", String(f2)), this.w.dom.elWrap.style.height = `${f2}px`, N.setAttrs(this.w.dom.Paper.node, { height: f2 }), c.isBrowser() && (this.w.dom.Paper.node.parentNode.parentNode.style.minHeight = `${f2}px`));
    }
    coreCalculations() {
      new tt(this.w).init();
    }
    resetGlobals() {
      const t2 = () => this.w.config.series.map(() => []), e2 = new P(), { globals: s2 } = this.w, i2 = { dataWasParsed: this.w.axisFlags.dataWasParsed, originalSeries: s2.originalSeries };
      e2.initGlobalVars(s2), s2.seriesXvalues = t2(), s2.seriesYvalues = t2(), i2.dataWasParsed && (this.w.axisFlags.dataWasParsed = i2.dataWasParsed, s2.originalSeries = i2.originalSeries);
    }
    isMultipleY() {
      return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = true, true);
    }
    xySettings() {
      const { w: t2 } = this;
      let e2 = null;
      if (t2.globals.axisCharts) {
        if ("back" === t2.config.xaxis.crosshairs.position && new ot(this.w).drawXCrosshairs(), "back" === t2.config.yaxis[0].crosshairs.position && new ot(this.w).drawYCrosshairs(), "datetime" === t2.config.xaxis.type && void 0 === t2.config.xaxis.labels.formatter) {
          this.ctx.timeScale = new kt(this.w, this.ctx);
          let e3 = [];
          isFinite(t2.globals.minX) && isFinite(t2.globals.maxX) && !t2.globals.isBarHorizontal ? e3 = this.ctx.timeScale.calculateTimeScaleTicks(t2.globals.minX, t2.globals.maxX) : t2.globals.isBarHorizontal && (e3 = this.ctx.timeScale.calculateTimeScaleTicks(t2.globals.minY, t2.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(e3);
        }
        e2 = new F(this.w).getCalculatedRatios();
      }
      return e2;
    }
    updateSourceChart(t2) {
      this.ctx.w.interact.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t2.w.globals.minX, max: t2.w.globals.maxX } } } }, false, false);
    }
    setupBrushHandler() {
      const { ctx: t2, w: e2 } = this;
      if (e2.config.chart.brush.enabled && "function" != typeof e2.config.chart.events.selection) {
        const s2 = Array.isArray(e2.config.chart.brush.targets) ? e2.config.chart.brush.targets : [e2.config.chart.brush.target];
        s2.forEach((e3) => {
          const s3 = t2.constructor.getChartByID(e3);
          s3.w.globals.brushSource = this.ctx, "function" != typeof s3.w.config.chart.events.zoomed && (s3.w.config.chart.events.zoomed = () => this.updateSourceChart(s3)), "function" != typeof s3.w.config.chart.events.scrolled && (s3.w.config.chart.events.scrolled = () => this.updateSourceChart(s3));
        }), e2.config.chart.events.selection = (e3, i2) => {
          s2.forEach((e4) => {
            t2.constructor.getChartByID(e4).ctx.updateHelpers._updateOptions({ xaxis: { min: i2.xaxis.min, max: i2.xaxis.max } }, false, false, false, false);
          });
        };
      }
    }
    getAccessibleChartLabel() {
      const t2 = this.w, e2 = t2.config;
      if (e2.chart.accessibility && e2.chart.accessibility.description) return e2.chart.accessibility.description;
      const s2 = e2.chart.type, i2 = [];
      if (e2.title.text) i2.push(`${e2.title.text}. ${s2} chart`), e2.subtitle.text && i2.push(e2.subtitle.text);
      else {
        const a2 = Array.isArray(t2.seriesData.seriesNames) && t2.seriesData.seriesNames.length ? t2.seriesData.seriesNames.filter(Boolean) : Array.isArray(e2.series) ? e2.series.map((t3) => "object" == typeof t3 && null !== t3 ? t3.name : null).filter(Boolean) : [], o2 = t2.seriesData.series.length || (e2.series ? e2.series.length : 0);
        a2.length ? i2.push(`${s2} chart with ${o2} data series: ${a2.join(", ")}`) : i2.push(`${s2} chart with ${o2} data series`);
      }
      return i2.join(". ");
    }
  }
  class Tt {
    constructor(t2, { resetGlobals: e2 = () => {
    }, isMultipleY: s2 = () => {
    } } = {}) {
      this.w = t2, this.resetGlobals = e2, this.isMultipleY = s2, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new F(this.w), this.activeSeriesIndex = 0;
    }
    getFirstDataPoint() {
      const t2 = this.w.config.series, e2 = new lt(this.w);
      this.activeSeriesIndex = e2.getActiveConfigSeriesIndex();
      const s2 = t2[this.activeSeriesIndex];
      return s2 && s2.data && s2.data.length > 0 && null !== s2.data[0] && void 0 !== s2.data[0] ? s2.data[0] : null;
    }
    isMultiFormat() {
      return this.isFormatXY() || this.isFormat2DArray();
    }
    isFormatXY() {
      var t2;
      const e2 = this.getFirstDataPoint();
      if (!e2 || void 0 === e2.x) return false;
      const s2 = null == (t2 = this.w.config.series[this.activeSeriesIndex]) ? void 0 : t2.data;
      if (s2) {
        const t3 = (t4) => t4 && void 0 !== t4.x;
        for (let e3 = 1; e3 < Math.min(3, s2.length) && true === t3(s2[e3]); e3++) ;
      }
      return true;
    }
    isFormat2DArray() {
      const t2 = this.getFirstDataPoint();
      return t2 && Array.isArray(t2);
    }
    handleFormat2DArray(t2, e2) {
      const s2 = this.w.config, i2 = t2[e2].data, a2 = "boxPlot" === s2.chart.type || "boxPlot" === s2.series[e2].type;
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e3 = i2[t3], o2 = e3[0], r2 = e3[1], n2 = e3[2];
        if (void 0 !== r2 && (Array.isArray(r2) && 4 === r2.length && !a2 ? this.twoDSeries.push(m.parseNumber(r2[3])) : e3.length >= 5 ? this.twoDSeries.push(m.parseNumber(e3[4])) : this.twoDSeries.push(m.parseNumber(r2)), this.w.axisFlags.dataFormatXNumeric = true), "datetime" === s2.xaxis.type) {
          const t4 = new Date(o2).getTime();
          this.twoDSeriesX.push(t4);
        } else this.twoDSeriesX.push(o2);
        void 0 !== n2 && (this.threeDSeries.push(n2), this.w.axisFlags.isDataXYZ = true);
      }
    }
    handleFormatXY(t2, e2) {
      const s2 = this.w.config, i2 = this.w.globals, a2 = new y(this.w), o2 = t2[e2].data;
      let r2 = e2;
      i2.collapsedSeriesIndices.indexOf(e2) > -1 && (r2 = this.activeSeriesIndex);
      const n2 = t2[r2].data;
      for (let t3 = 0; t3 < o2.length; t3++) {
        const s3 = o2[t3];
        if (void 0 !== s3.y) {
          const t4 = Array.isArray(s3.y) ? m.parseNumber(s3.y[s3.y.length - 1]) : m.parseNumber(s3.y);
          this.twoDSeries.push(t4);
        }
        void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), void 0 !== s3.goals && Array.isArray(s3.goals) ? this.seriesGoals[e2].push(s3.goals) : this.seriesGoals[e2].push(null), void 0 !== s3.z && (this.threeDSeries.push(s3.z), this.w.axisFlags.isDataXYZ = true);
      }
      for (let t3 = 0; t3 < n2.length; t3++) {
        const e3 = n2[t3].x, o3 = "string" == typeof e3, r3 = Array.isArray(e3), l2 = !r3 && !!a2.isValidDate(e3);
        if (o3 || l2) if (o3 || s2.xaxis.convertedCatToNumeric) {
          const t4 = i2.isBarHorizontal && this.w.axisFlags.isRangeData;
          "datetime" !== s2.xaxis.type || t4 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(e3), isNaN(e3) || "category" === this.w.config.xaxis.type || "string" == typeof e3 || (this.w.axisFlags.isXNumeric = true)) : this.twoDSeriesX.push(a2.parseDate(e3));
        } else "datetime" === s2.xaxis.type ? this.twoDSeriesX.push(a2.parseDate(e3.toString())) : (this.w.axisFlags.dataFormatXNumeric = true, this.w.axisFlags.isXNumeric = true, this.twoDSeriesX.push(parseFloat(e3)));
        else r3 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(e3)) : (this.w.axisFlags.isXNumeric = true, this.w.axisFlags.dataFormatXNumeric = true, this.twoDSeriesX.push(e3));
      }
    }
    handleRangeData(t2, e2) {
      let s2 = { start: [], end: [], rangeUniques: [] };
      return this.isFormat2DArray() ? s2 = this.handleRangeDataFormat("array", t2, e2) : this.isFormatXY() && (s2 = this.handleRangeDataFormat("xy", t2, e2)), this.w.rangeData.seriesRangeStart[e2] = void 0 === s2.start ? [] : s2.start, this.w.rangeData.seriesRangeEnd[e2] = void 0 === s2.end ? [] : s2.end, this.w.rangeData.seriesRange[e2] = s2.rangeUniques, this.w.rangeData.seriesRange.forEach((t3) => {
        t3 && t3.forEach((t4) => {
          const e3 = t4.y, s3 = e3.length;
          if (!(s3 <= 1)) for (let i2 = 0; i2 < s3; i2++) {
            const a2 = e3[i2], o2 = a2.y1, r2 = a2.y2;
            for (let n2 = i2 + 1; n2 < s3; n2++) {
              const s4 = e3[n2], i3 = s4.y1;
              if (o2 <= s4.y2 && i3 <= r2) {
                const e4 = t4;
                e4.overlaps.add(a2.rangeName), e4.overlaps.add(s4.rangeName);
              }
            }
          }
        });
      }), s2;
    }
    handleCandleStickBoxData(t2, e2) {
      let s2 = { o: [], h: [], m: [], l: [], c: [] };
      return this.isFormat2DArray() ? s2 = this.handleCandleStickBoxDataFormat("array", t2, e2) : this.isFormatXY() && (s2 = this.handleCandleStickBoxDataFormat("xy", t2, e2)), this.w.candleData.seriesCandleO[e2] = s2.o, this.w.candleData.seriesCandleH[e2] = s2.h, this.w.candleData.seriesCandleM[e2] = s2.m, this.w.candleData.seriesCandleL[e2] = s2.l, this.w.candleData.seriesCandleC[e2] = s2.c, this.w.candleData.seriesBoxPoints[e2] = s2.points || [], s2;
    }
    handleViolinData(t2, e2) {
      var s2, i2, a2, o2, r2, n2;
      const l2 = this.w, h2 = t2[e2].data, c2 = [], d2 = [], g2 = [], p2 = [], u2 = [];
      for (let t3 = 0; t3 < h2.length; t3++) {
        const e3 = h2[t3], l3 = null != (a2 = null != (i2 = null == (s2 = null == e3 ? void 0 : e3.y) ? void 0 : s2.density) ? i2 : null == e3 ? void 0 : e3[1]) ? a2 : [], x2 = null != (n2 = null != (r2 = null == (o2 = null == e3 ? void 0 : e3.y) ? void 0 : o2.points) ? r2 : null == e3 ? void 0 : e3[2]) ? n2 : [], f2 = [], b2 = [];
        let y2 = 0, w2 = null, v2 = 1 / 0, A2 = -1 / 0;
        for (let t4 = 0; t4 < l3.length; t4++) {
          const e4 = m.parseNumber(l3[t4][0]), s3 = m.parseNumber(l3[t4][1]);
          null !== e4 && null !== s3 && (f2.push(e4), b2.push(s3), s3 > y2 && (y2 = s3, w2 = e4), e4 < v2 && (v2 = e4), e4 > A2 && (A2 = e4));
        }
        const C2 = [];
        for (let t4 = 0; t4 < x2.length; t4++) {
          const e4 = m.parseNumber(x2[t4]);
          null !== e4 && (C2.push(e4), e4 < v2 && (v2 = e4), e4 > A2 && (A2 = e4));
        }
        c2.push({ values: f2, weights: b2, maxWeight: y2 }), d2.push(C2), g2.push(v2 === 1 / 0 ? 0 : v2), p2.push(A2 === -1 / 0 ? 0 : A2), u2.push(null !== w2 ? w2 : C2.length ? C2[Math.floor(C2.length / 2)] : 0);
      }
      l2.violinData.seriesViolinDensity[e2] = c2, l2.violinData.seriesViolinPoints[e2] = d2, l2.violinData.seriesViolinMin[e2] = g2, l2.violinData.seriesViolinMax[e2] = p2, this.twoDSeries = u2;
    }
    handleRangeDataFormat(t2, e2, s2) {
      const i2 = [], a2 = [], o2 = /* @__PURE__ */ new Map(), r2 = [];
      if (e2[s2].data.forEach((t3) => {
        if (!o2.has(t3.x)) {
          const e3 = { x: t3.x, overlaps: /* @__PURE__ */ new Set(), y: [] };
          o2.set(t3.x, e3), r2.push(e3);
        }
      }), "array" === t2) for (let t3 = 0; t3 < e2[s2].data.length; t3++) Array.isArray(e2[s2].data[t3]) ? (i2.push(e2[s2].data[t3][1][0]), a2.push(e2[s2].data[t3][1][1])) : (i2.push(e2[s2].data[t3]), a2.push(e2[s2].data[t3]));
      else if ("xy" === t2) for (let t3 = 0; t3 < e2[s2].data.length; t3++) {
        const r3 = Array.isArray(e2[s2].data[t3].y), n2 = m.randomId(), l2 = e2[s2].data[t3].x, h2 = { y1: r3 ? e2[s2].data[t3].y[0] : e2[s2].data[t3].y, y2: r3 ? e2[s2].data[t3].y[1] : e2[s2].data[t3].y, rangeName: n2 };
        e2[s2].data[t3].rangeName = n2;
        const c2 = o2.get(l2);
        c2 && c2.y.push(h2), i2.push(h2.y1), a2.push(h2.y2);
      }
      return { start: i2, end: a2, rangeUniques: r2 };
    }
    handleCandleStickBoxDataFormat(t2, e2, s2) {
      const i2 = this.w, a2 = "boxPlot" === i2.config.chart.type || "boxPlot" === i2.config.series[s2].type, o2 = [], r2 = [], n2 = [], l2 = [], h2 = [], c2 = [], d2 = e2[s2].data;
      let g2;
      if ("array" === t2) {
        g2 = a2 && 6 === d2[0].length || !a2 && 5 === d2[0].length ? (t3) => t3.slice(1) : (t3) => Array.isArray(t3[1]) ? t3[1] : [];
      } else g2 = (t3) => Array.isArray(t3.y) ? t3.y : [];
      for (let t3 = 0; t3 < d2.length; t3++) {
        const e3 = g2(d2[t3]);
        e3 && e3.length >= 2 && (o2.push(e3[0]), r2.push(e3[1]), a2 ? (n2.push(e3[2]), l2.push(e3[3]), h2.push(e3[4])) : (l2.push(e3[2]), h2.push(e3[3])));
        const s3 = d2[t3] && d2[t3].points;
        c2.push(Array.isArray(s3) ? s3 : []);
      }
      return { o: o2, h: r2, m: n2, l: l2, c: h2, points: c2 };
    }
    parseDataAxisCharts(t2) {
      var e2, s2, i2, a2, o2, r2;
      const h2 = this.w.config, c2 = this.w.globals, d2 = new y(this.w), g2 = h2.labels.length > 0 ? h2.labels.slice() : h2.xaxis.categories.slice();
      this.w.axisFlags.isRangeBar = "rangeBar" === h2.chart.type && c2.isBarHorizontal, this.w.labelData.hasXaxisGroups = "category" === h2.xaxis.type && h2.xaxis.group.groups.length > 0, this.w.labelData.hasXaxisGroups && (this.w.labelData.groups = h2.xaxis.group.groups), t2.forEach((t3, e3) => {
        void 0 !== t3.name ? this.w.seriesData.seriesNames.push(t3.name) : this.w.seriesData.seriesNames.push("series-" + parseInt(String(e3 + 1), 10));
      }), this.coreUtils.setSeriesYAxisMappings();
      const p2 = [], u2 = [...new Set(h2.series.map((t3) => t3.group))];
      h2.series.forEach((t3, e3) => {
        const s3 = u2.indexOf(t3.group);
        p2[s3] || (p2[s3] = []), p2[s3].push(this.w.seriesData.seriesNames[e3]);
      }), this.w.labelData.seriesGroups = p2;
      const x2 = () => {
        for (let t3 = 0; t3 < g2.length; t3++) if ("string" == typeof g2[t3]) {
          if (!d2.isValidDate(g2[t3])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
          this.twoDSeriesX.push(d2.parseDate(g2[t3]));
        } else this.twoDSeriesX.push(g2[t3]);
      };
      for (let d3 = 0; d3 < t2.length; d3++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t2[d3].data) return;
        const p3 = h2.chart.dataReducer, u3 = null == (s2 = null == (e2 = c2.dataReducerRawSeries) ? void 0 : e2[d3]) ? void 0 : s2.data;
        if ((null == p3 ? void 0 : p3.enabled) && this.isMultiFormat() && Array.isArray(u3) && u3.length > (null != (i2 = p3.threshold) ? i2 : 500)) {
          const e3 = null != (a2 = p3.targetPoints) ? a2 : 250, s3 = h2.xaxis.min, i3 = h2.xaxis.max, c3 = null == s3 && null == i3 ? u3 : Tt.sliceByXRange(u3, s3, i3);
          let g3 = c3;
          if (c3.length > e3) {
            const t3 = Array.isArray(c3[0]) ? null == (r2 = c3[0]) ? void 0 : r2[1] : null == (o2 = c3[0]) ? void 0 : o2.y;
            Array.isArray(t3) ? 4 === t3.length && (g3 = Tt.ohlcAggregate(c3, e3)) : g3 = Tt.lttbDownsample(c3, e3);
          }
          t2[d3] = l(n({}, t2[d3]), { data: g3 });
        }
        if ("rangeBar" !== h2.chart.type && "rangeArea" !== h2.chart.type && "rangeBar" !== t2[d3].type && "rangeArea" !== t2[d3].type || (this.w.axisFlags.isRangeData = true, this.handleRangeData(t2, d3)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t2, d3) : this.isFormatXY() && this.handleFormatXY(t2, d3), "candlestick" !== h2.chart.type && "candlestick" !== t2[d3].type && "boxPlot" !== h2.chart.type && "boxPlot" !== t2[d3].type || this.handleCandleStickBoxData(t2, d3), "violin" !== h2.chart.type && "violin" !== t2[d3].type || this.handleViolinData(t2, d3), this.w.seriesData.series.push(this.twoDSeries), this.w.labelData.labels.push(this.twoDSeriesX), this.w.seriesData.seriesX.push(this.twoDSeriesX), this.w.seriesData.seriesGoals = this.seriesGoals, d3 !== this.activeSeriesIndex || this.fallbackToCategory || (this.w.axisFlags.isXNumeric = true);
        else {
          "datetime" === h2.xaxis.type ? (this.w.axisFlags.isXNumeric = true, x2(), this.w.seriesData.seriesX.push(this.twoDSeriesX)) : "numeric" === h2.xaxis.type && (this.w.axisFlags.isXNumeric = true, g2.length > 0 && (this.twoDSeriesX = g2, this.w.seriesData.seriesX.push(this.twoDSeriesX))), this.w.labelData.labels.push(this.twoDSeriesX);
          const e3 = t2[d3].data.map((t3) => m.parseNumber(t3));
          this.w.seriesData.series.push(e3);
        }
        this.w.seriesData.seriesZ.push(this.threeDSeries), void 0 !== t2[d3].color ? this.w.seriesData.seriesColors.push(t2[d3].color) : this.w.seriesData.seriesColors.push(void 0);
      }
      return this.w;
    }
    parseDataNonAxisCharts(t2) {
      const e2 = this.w.config, s2 = Array.isArray(t2) && t2.every((t3) => "number" == typeof t3) && e2.labels.length > 0;
      Array.isArray(t2) && t2.some((t3) => t3 && "object" == typeof t3 && t3.data || t3 && "object" == typeof t3 && t3.parsing);
      if (s2) {
        this.w.seriesData.series = t2.slice(), this.w.seriesData.seriesNames = e2.labels.slice();
        for (let t3 = 0; t3 < this.w.seriesData.series.length; t3++) void 0 === this.w.seriesData.seriesNames[t3] && this.w.seriesData.seriesNames.push("series-" + (t3 + 1));
        return this.w;
      }
      if (Array.isArray(t2) && t2.every((t3) => "number" == typeof t3)) {
        this.w.seriesData.series = t2.slice(), this.w.seriesData.seriesNames = [];
        for (let t3 = 0; t3 < this.w.seriesData.series.length; t3++) this.w.seriesData.seriesNames.push(e2.labels[t3] || `series-${t3 + 1}`);
        return this.w;
      }
      const i2 = this.extractPieDataFromSeries(t2);
      this.w.seriesData.series = i2.values, this.w.seriesData.seriesNames = i2.labels, "radialBar" === e2.chart.type && (this.w.seriesData.series = this.w.seriesData.series.map((t3) => {
        const e3 = m.parseNumber(t3);
        return e3;
      }));
      for (let t3 = 0; t3 < this.w.seriesData.series.length; t3++) void 0 === this.w.seriesData.seriesNames[t3] && this.w.seriesData.seriesNames.push("series-" + (t3 + 1));
      return this.w;
    }
    resetParsingFlags() {
      const t2 = this.w;
      t2.axisFlags.dataWasParsed = false, t2.globals.originalSeries = null, t2.config.series && t2.config.series.forEach((t3) => {
        t3.__apexParsed && delete t3.__apexParsed;
      });
    }
    extractPieDataFromSeries(t2) {
      const e2 = [], s2 = [];
      if (!Array.isArray(t2)) return { values: [], labels: [] };
      if (0 === t2.length) return { values: [], labels: [] };
      const i2 = t2[0];
      return "object" == typeof i2 && null !== i2 && i2.data ? (this.extractPieDataFromSeriesObjects(t2, e2, s2), { values: e2, labels: s2 }) : { values: [], labels: [] };
    }
    extractPieDataFromSeriesObjects(t2, e2, s2) {
      t2.forEach((t3, i2) => {
        t3.data && Array.isArray(t3.data) && t3.data.forEach((t4) => {
          "object" == typeof t4 && null !== t4 && void 0 !== t4.x && void 0 !== t4.y && (s2.push(String(t4.x)), e2.push(m.parseNumber(t4.y)));
        });
      });
    }
    handleExternalLabelsData(t2) {
      const e2 = this.w.config;
      if (e2.xaxis.categories.length > 0) this.w.labelData.labels = e2.xaxis.categories;
      else if (e2.labels.length > 0) this.w.labelData.labels = e2.labels.slice();
      else if (this.fallbackToCategory) {
        if (this.w.labelData.labels = this.w.labelData.labels[0], this.w.rangeData.seriesRange.length) {
          this.w.rangeData.seriesRange.map((t4) => {
            t4.forEach((t5) => {
              this.w.labelData.labels.indexOf(t5.x) < 0 && t5.x && this.w.labelData.labels.push(t5.x);
            });
          });
          const t3 = this.w.labelData.labels;
          if (t3.length > 0 && ("number" == typeof t3[0] || "string" == typeof t3[0])) this.w.labelData.labels = [...new Set(t3)];
          else {
            const e3 = /* @__PURE__ */ new Map();
            for (const s2 of t3) {
              const t4 = JSON.stringify(s2);
              e3.has(t4) || e3.set(t4, s2);
            }
            this.w.labelData.labels = Array.from(e3.values());
          }
        }
        if (e2.xaxis.convertedCatToNumeric) {
          new C(e2).convertCatToNumericXaxis(e2, this.w.seriesData.seriesX[0]), this._generateExternalLabels(t2);
        }
      } else this._generateExternalLabels(t2);
    }
    _generateExternalLabels(t2) {
      const e2 = this.w.globals, s2 = this.w.config;
      let i2 = [];
      if (e2.axisCharts) {
        if (this.w.seriesData.series.length > 0) if (this.isFormatXY()) {
          const t3 = s2.series.map((t4) => {
            const e4 = /* @__PURE__ */ new Map();
            for (const s3 of t4.data) e4.has(s3.x) || e4.set(s3.x, s3);
            return Array.from(e4.values());
          }), e3 = t3.reduce((t4, e4, s3, i3) => i3[t4].length > e4.length ? t4 : s3, 0);
          for (let s3 = 0; s3 < t3[e3].length; s3++) i2.push(s3 + 1);
        } else for (let t3 = 0; t3 < this.w.seriesData.series[e2.maxValsInArrayIndex].length; t3++) i2.push(t3 + 1);
        this.w.seriesData.seriesX = [];
        for (let e3 = 0; e3 < t2.length; e3++) this.w.seriesData.seriesX.push(i2);
        this.w.globals.isBarHorizontal || (this.w.axisFlags.isXNumeric = true);
      }
      if (0 === i2.length) {
        i2 = e2.axisCharts ? [] : this.w.seriesData.series.map((t3, e3) => e3 + 1);
        for (let e3 = 0; e3 < t2.length; e3++) this.w.seriesData.seriesX.push(i2);
      }
      this.w.labelData.labels = i2, s2.xaxis.convertedCatToNumeric && (this.w.labelData.categoryLabels = i2.map((t3) => s2.xaxis.labels.formatter(t3))), this.w.axisFlags.noLabelsProvided = true;
    }
    parseRawDataIfNeeded(t2) {
      const e2 = this.w.config, s2 = this.w.globals, i2 = e2.parsing;
      if (this.w.axisFlags.dataWasParsed) return t2;
      if (!i2 && !t2.some((t3) => t3.parsing)) return t2;
      const a2 = t2.map((t3, e3) => {
        var s3, a3, o2;
        if (!t3.data || !Array.isArray(t3.data) || 0 === t3.data.length) return t3;
        const r2 = { x: (null == (s3 = t3.parsing) ? void 0 : s3.x) || (null == i2 ? void 0 : i2.x), y: (null == (a3 = t3.parsing) ? void 0 : a3.y) || (null == i2 ? void 0 : i2.y), z: (null == (o2 = t3.parsing) ? void 0 : o2.z) || (null == i2 ? void 0 : i2.z) };
        if (!r2.x && !r2.y) return t3;
        const h2 = t3.data[0];
        if ("object" == typeof h2 && null !== h2 && (Object.prototype.hasOwnProperty.call(h2, "x") || Object.prototype.hasOwnProperty.call(h2, "y")) || Array.isArray(h2)) return t3;
        if (!r2.x || !r2.y || Array.isArray(r2.y) && 0 === r2.y.length) return t3;
        const c2 = t3.data.map((t4, e4) => {
          if ("object" != typeof t4 || null === t4) return t4;
          const s4 = this.getNestedValue(t4, r2.x);
          let i3, a4;
          if (Array.isArray(r2.y)) {
            const e5 = r2.y.map((e6) => this.getNestedValue(t4, e6));
            "bubble" === this.w.config.chart.type ? (e5.length, i3 = e5[0]) : i3 = e5;
          } else i3 = this.getNestedValue(t4, r2.y);
          r2.z && (a4 = this.getNestedValue(t4, r2.z));
          const o3 = { x: s4, y: i3, z: void 0 };
          if ("bubble" === this.w.config.chart.type && Array.isArray(r2.y) && 2 === r2.y.length) {
            const e5 = this.getNestedValue(t4, r2.y[1]);
            void 0 !== e5 && (o3.z = e5);
          }
          return void 0 !== a4 && (o3.z = a4), o3;
        });
        return l(n({}, t3), { data: c2, __apexParsed: true });
      });
      return this.w.axisFlags.dataWasParsed = true, s2.originalSeries || (s2.originalSeries = m.clone(t2)), a2;
    }
    getNestedValue(t2, e2) {
      if (!t2 || "object" != typeof t2 || !e2) return;
      if (-1 === e2.indexOf(".")) return t2[e2];
      const s2 = e2.split(".");
      let i2 = t2;
      for (let t3 = 0; t3 < s2.length; t3++) {
        if (null == i2 || "object" != typeof i2) return;
        i2 = i2[s2[t3]];
      }
      return i2;
    }
    parseData(t2) {
      var e2, s2, i2, a2, o2, r2;
      const h2 = this.w, c2 = h2.config, d2 = h2.globals;
      if (t2 = this.parseRawDataIfNeeded(t2), (null == (e2 = c2.chart.dataReducer) ? void 0 : e2.enabled) && d2.axisCharts && !d2.dataReducerRawSeries) {
        d2.dataReducerRawSeries = t2.map((t3) => ({ data: Array.isArray(null == t3 ? void 0 : t3.data) ? t3.data.slice() : null == t3 ? void 0 : t3.data }));
        let e3 = 1 / 0, r3 = -1 / 0;
        for (const n2 of t2) {
          const t3 = null == n2 ? void 0 : n2.data;
          if (!Array.isArray(t3) || 0 === t3.length) continue;
          const l2 = !Array.isArray(t3[0]), h3 = l2 ? null == (s2 = t3[0]) ? void 0 : s2.x : null == (i2 = t3[0]) ? void 0 : i2[0], c3 = l2 ? null == (a2 = t3[t3.length - 1]) ? void 0 : a2.x : null == (o2 = t3[t3.length - 1]) ? void 0 : o2[0];
          "number" == typeof h3 && (e3 = Math.min(e3, h3)), "number" == typeof c3 && (r3 = Math.max(r3, c3));
        }
        e3 !== 1 / 0 && (d2.dataReducerRawMinX = e3, d2.dataReducerRawMaxX = r3);
      }
      if (c2.series = t2, d2.dataReducerRawSeries && (null == (r2 = c2.chart.dataReducer) ? void 0 : r2.enabled)) {
        const e3 = d2.dataReducerRawSeries;
        d2.initialSeries = t2.map((t3, s3) => {
          var i3, a3, o3;
          return l(n({}, t3), { data: null != (o3 = null == (a3 = null == (i3 = e3[s3]) ? void 0 : i3.data) ? void 0 : a3.slice()) ? o3 : t3.data });
        });
      } else d2.initialSeries = m.clone(t2);
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = false, this.resetGlobals(), this.isMultipleY(), d2.axisCharts ? (this.parseDataAxisCharts(t2), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t2), c2.chart.stacked) {
        const t3 = new lt(this.w);
        this.w.seriesData.series = t3.setNullSeriesToZeroValues(this.w.seriesData.series);
      }
      this.coreUtils.getSeriesTotals(), d2.axisCharts && (this.w.seriesData.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), this.w.seriesData.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), this.w.axisFlags.dataFormatXNumeric || this.w.axisFlags.isXNumeric && ("numeric" !== c2.xaxis.type || 0 !== c2.labels.length || 0 !== c2.xaxis.categories.length) || this.handleExternalLabelsData(t2);
      const g2 = this.coreUtils.getCategoryLabels(this.w.labelData.labels);
      for (let t3 = 0; t3 < g2.length; t3++) if (Array.isArray(g2[t3])) {
        this.w.axisFlags.isMultiLineX = true;
        break;
      }
      return { seriesData: { series: this.w.seriesData.series, seriesNames: this.w.seriesData.seriesNames, seriesX: this.w.seriesData.seriesX, seriesZ: this.w.seriesData.seriesZ, seriesColors: this.w.seriesData.seriesColors, seriesGoals: this.w.seriesData.seriesGoals, initialSeries: d2.initialSeries, originalSeries: d2.originalSeries, stackedSeriesTotals: this.w.seriesData.stackedSeriesTotals, stackedSeriesTotalsByGroups: this.w.seriesData.stackedSeriesTotalsByGroups, noLabelsProvided: this.w.axisFlags.noLabelsProvided }, rangeData: { seriesRangeStart: this.w.rangeData.seriesRangeStart, seriesRangeEnd: this.w.rangeData.seriesRangeEnd, seriesRange: this.w.rangeData.seriesRange }, candleData: { seriesCandleO: this.w.candleData.seriesCandleO, seriesCandleH: this.w.candleData.seriesCandleH, seriesCandleM: this.w.candleData.seriesCandleM, seriesCandleL: this.w.candleData.seriesCandleL, seriesCandleC: this.w.candleData.seriesCandleC, seriesBoxPoints: this.w.candleData.seriesBoxPoints }, labelData: { labels: this.w.labelData.labels, categoryLabels: this.w.labelData.categoryLabels }, axisFlags: { isXNumeric: this.w.axisFlags.isXNumeric, dataFormatXNumeric: this.w.axisFlags.dataFormatXNumeric, isDataXYZ: this.w.axisFlags.isDataXYZ, isRangeData: this.w.axisFlags.isRangeData, isRangeBar: this.w.axisFlags.isRangeBar, isMultiLineX: this.w.axisFlags.isMultiLineX, dataWasParsed: this.w.axisFlags.dataWasParsed, hasXaxisGroups: this.w.labelData.hasXaxisGroups, groups: this.w.labelData.groups, seriesGroups: this.w.labelData.seriesGroups } };
    }
    static sliceByXRange(t2, e2, s2) {
      const i2 = t2.length;
      if (0 === i2) return t2;
      const a2 = !Array.isArray(t2[0]) ? (t3) => t3.x : (t3) => t3[0];
      let o2 = 0;
      if (null != e2) {
        let s3 = 0, r3 = i2 - 1;
        for (; s3 <= r3; ) {
          const i3 = s3 + r3 >> 1;
          a2(t2[i3]) < e2 ? s3 = i3 + 1 : r3 = i3 - 1;
        }
        o2 = Math.max(0, s3 - 1);
      }
      let r2 = i2;
      if (null != s2) {
        let e3 = 0, o3 = i2 - 1;
        for (; e3 <= o3; ) {
          const i3 = e3 + o3 >> 1;
          a2(t2[i3]) > s2 ? o3 = i3 - 1 : e3 = i3 + 1;
        }
        r2 = Math.min(i2, e3 + 1);
      }
      return 0 === o2 && r2 === i2 ? t2.slice() : t2.slice(o2, r2);
    }
    static lttbDownsample(t2, e2) {
      const s2 = t2.length;
      if (e2 >= s2 || e2 < 3) return t2;
      const i2 = !Array.isArray(t2[0]), a2 = i2 ? (t3) => t3.x : (t3) => t3[0], o2 = i2 ? (t3) => t3.y : (t3) => t3[1], r2 = [];
      r2.push(t2[0]);
      const n2 = (s2 - 2) / (e2 - 2);
      let l2 = 0;
      for (let i3 = 0; i3 < e2 - 2; i3++) {
        const e3 = Math.floor((i3 + 1) * n2) + 1, h2 = Math.min(Math.floor((i3 + 2) * n2) + 1, s2);
        let c2 = 0, d2 = 0;
        const g2 = h2 - e3;
        for (let s3 = e3; s3 < h2; s3++) c2 += a2(t2[s3]), d2 += o2(t2[s3]);
        c2 /= g2, d2 /= g2;
        const p2 = Math.floor(i3 * n2) + 1, u2 = Math.min(Math.floor((i3 + 1) * n2) + 1, s2), x2 = a2(t2[l2]), f2 = o2(t2[l2]);
        let b2 = -1, m2 = p2;
        for (let e4 = p2; e4 < u2; e4++) {
          const s3 = 0.5 * Math.abs((x2 - c2) * (o2(t2[e4]) - f2) - (x2 - a2(t2[e4])) * (d2 - f2));
          s3 > b2 && (b2 = s3, m2 = e4);
        }
        r2.push(t2[m2]), l2 = m2;
      }
      return r2.push(t2[s2 - 1]), r2;
    }
    static ohlcAggregate(t2, e2) {
      const s2 = t2.length;
      if (e2 >= s2 || e2 < 1) return t2;
      const i2 = !Array.isArray(t2[0]), a2 = i2 ? (t3) => t3.x : (t3) => t3[0], o2 = i2 ? (t3) => t3.y : (t3) => t3[1], r2 = i2 ? (t3, e3) => ({ x: t3, y: e3 }) : (t3, e3) => [t3, e3], n2 = [], l2 = s2 / e2;
      for (let i3 = 0; i3 < e2; i3++) {
        const h2 = Math.floor(i3 * l2), c2 = i3 === e2 - 1 ? s2 : Math.floor((i3 + 1) * l2);
        if (c2 <= h2) continue;
        const d2 = o2(t2[h2]), g2 = d2[0];
        let p2 = d2[1], u2 = d2[2], x2 = d2[3];
        for (let e3 = h2 + 1; e3 < c2; e3++) {
          const s3 = o2(t2[e3]);
          s3[1] > p2 && (p2 = s3[1]), s3[2] < u2 && (u2 = s3[2]), x2 = s3[3];
        }
        n2.push(r2(a2(t2[h2]), [g2, p2, u2, x2]));
      }
      return n2;
    }
    excludeCollapsedSeriesInYAxis() {
      const t2 = this.w, e2 = [];
      t2.globals.seriesYAxisMap.forEach((s2, i2) => {
        let a2 = 0;
        s2.forEach((e3) => {
          -1 !== t2.globals.collapsedSeriesIndices.indexOf(e3) && a2++;
        }), a2 > 0 && a2 == s2.length && e2.push(i2);
      }), t2.globals.ignoreYAxisIndexes = e2.map((t3) => t3);
    }
  }
  class Ft {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    _updateOptions(t2, e2 = false, s2 = true, i2 = true, a2 = false) {
      return new Promise((o2) => {
        let r2 = [this.ctx];
        i2 && (r2 = this.ctx.getSyncedCharts()), this.w.globals.isExecCalled && (r2 = [this.ctx], this.w.globals.isExecCalled = false), r2.forEach((i3, n2) => {
          var l2, h2;
          const c2 = i3.w;
          if (c2.globals.shouldAnimate = s2, e2 || (c2.globals.resized = true, c2.globals.dataChanged = true, s2 && i3.series.getPreviousPaths()), s2 && t2 && "object" == typeof t2) {
            const e3 = null == (l2 = null == t2 ? void 0 : t2.chart) ? void 0 : l2.type, s3 = c2.config.chart.requestedType || c2.config.chart.type;
            e3 && e3 !== s3 && (null == (h2 = i3.morphTypeChange) || h2.captureBeforeDestroy({ fromType: s3, toType: e3, newSeries: t2.series || c2.config.series }));
          }
          if (t2 && "object" == typeof t2) {
            i3.config = new D(t2);
            const e3 = t2.chart && t2.chart.type, s3 = "funnel" === e3 || "pyramid" === e3 || "gauge" === e3, o3 = !!c2.config.chart.requestedType;
            if (e3 && !s3 && o3) {
              t2.chart = t2.chart || {}, t2.chart.requestedType = e3;
              const s4 = c2.config.chart.requestedType;
              "funnel" !== s4 && "pyramid" !== s4 || (t2.plotOptions = t2.plotOptions || {}, t2.plotOptions.bar = t2.plotOptions.bar || {}, void 0 === t2.plotOptions.bar.isFunnel && (t2.plotOptions.bar.isFunnel = false), void 0 === t2.plotOptions.bar.isPyramid && (t2.plotOptions.bar.isPyramid = false));
            }
            if (i3.config.normalizeAliasedChartType(t2), t2 = F.extendArrayProps(i3.config, t2, c2), i3.w.globals.chartID !== this.w.globals.chartID && delete t2.series, c2.config = m.extend(c2.config, t2), a2 && (c2.globals.lastXAxis = t2.xaxis ? m.clone(t2.xaxis) : [], c2.globals.lastYAxis = t2.yaxis ? m.clone(t2.yaxis) : [], c2.globals.initialConfig = m.extend({}, c2.config), c2.globals.initialSeries = m.clone(c2.config.series), t2.series)) {
              for (let t3 = 0; t3 < c2.globals.collapsedSeriesIndices.length; t3++) {
                const e4 = c2.config.series[c2.globals.collapsedSeriesIndices[t3]];
                c2.globals.collapsedSeries[t3].data = c2.globals.axisCharts ? e4.data.slice() : e4;
              }
              for (let t3 = 0; t3 < c2.globals.ancillaryCollapsedSeriesIndices.length; t3++) {
                const e4 = c2.config.series[c2.globals.ancillaryCollapsedSeriesIndices[t3]];
                c2.globals.ancillaryCollapsedSeries[t3].data = c2.globals.axisCharts ? e4.data.slice() : e4;
              }
              i3.series.emptyCollapsedSeries(c2.config.series);
            }
          }
          return i3.update(t2).then(() => {
            n2 === r2.length - 1 && o2(i3);
          });
        });
      });
    }
    _updateSeries(t2, e2, s2 = false) {
      return new Promise((i2) => {
        const a2 = this.w;
        a2.globals.shouldAnimate = e2, a2.globals.dataChanged = true, q.invalidateSelectors(a2), e2 && this.ctx.series.getPreviousPaths();
        const o2 = a2.config.series.length;
        a2.globals.dataReducerRawSeries = null, this.ctx.data.resetParsingFlags();
        const r2 = this.ctx.data.parseData(t2);
        return this.ctx._writeParsedSeriesData(r2.seriesData), this.ctx._writeParsedRangeData(r2.rangeData), this.ctx._writeParsedCandleData(r2.candleData), this.ctx._writeParsedLabelData(r2.labelData), this.ctx._writeParsedAxisFlags(r2.axisFlags), s2 && (a2.globals.initialConfig && (a2.globals.initialConfig.series = m.clone(a2.config.series)), a2.globals.initialSeries = m.clone(a2.config.series)), this._canUseFastPath(t2, o2, a2) ? this.ctx.fastUpdate(e2).then(() => {
          i2(this.ctx);
        }) : this.ctx.update().then(() => {
          i2(this.ctx);
        });
      });
    }
    _canUseFastPath(t2, e2, s2) {
      return !!s2.dom.elGraphical && (!!s2.globals.axisCharts && (t2.length === e2 && (!(s2.globals.collapsedSeries.length > 0) && (!(s2.globals.ancillaryCollapsedSeries.length > 0) && (!(s2.globals.risingSeries.length > 0) && (!s2.globals.comboCharts && !s2.interact.zoomed))))));
    }
    _extendSeries(t2, e2) {
      const s2 = this.w, i2 = s2.config.series[e2];
      return l(n({}, s2.config.series[e2]), { name: t2.name ? t2.name : null == i2 ? void 0 : i2.name, color: t2.color ? t2.color : null == i2 ? void 0 : i2.color, type: t2.type ? t2.type : null == i2 ? void 0 : i2.type, group: t2.group ? t2.group : null == i2 ? void 0 : i2.group, hidden: void 0 !== t2.hidden ? t2.hidden : null == i2 ? void 0 : i2.hidden, data: t2.data ? t2.data : null == i2 ? void 0 : i2.data, zIndex: void 0 !== t2.zIndex ? t2.zIndex : e2 });
    }
    toggleDataPointSelection(t2, e2) {
      const s2 = this.w;
      let i2 = null;
      const a2 = `.apexcharts-series[data\\:realIndex='${t2}']`;
      if (s2.globals.axisCharts ? i2 = s2.dom.Paper.findOne(`${a2} path[j='${e2}'], ${a2} circle[j='${e2}'], ${a2} rect[j='${e2}']`) : void 0 === e2 && (i2 = s2.dom.Paper.findOne(`${a2} path[j='${t2}']`), "pie" !== s2.config.chart.type && "polarArea" !== s2.config.chart.type && "donut" !== s2.config.chart.type || this.ctx.pie.pieClicked(t2)), !i2) return null;
      new N(this.w).pathMouseDown(i2, null);
      return i2.node ? i2.node : null;
    }
    forceXAxisUpdate(t2) {
      const e2 = this.w;
      if (["min", "max"].forEach((s2) => {
        void 0 !== t2.xaxis[s2] && (e2.config.xaxis[s2] = t2.xaxis[s2], e2.globals.lastXAxis[s2] = t2.xaxis[s2]);
      }), t2.xaxis.categories && t2.xaxis.categories.length && (e2.config.xaxis.categories = t2.xaxis.categories), e2.config.xaxis.convertedCatToNumeric) {
        const e3 = new C(t2);
        t2 = e3.convertCatToNumericXaxis(t2, this.ctx);
      }
      return t2;
    }
    forceYAxisUpdate(t2) {
      return t2.chart && t2.chart.stacked && "100%" === t2.chart.stackType && (Array.isArray(t2.yaxis) ? t2.yaxis.forEach((e2, s2) => {
        t2.yaxis[s2].min = 0, t2.yaxis[s2].max = 100;
      }) : (t2.yaxis.min = 0, t2.yaxis.max = 100)), t2;
    }
    revertDefaultAxisMinMax(t2) {
      const e2 = this.w;
      let s2 = e2.globals.lastXAxis, i2 = e2.globals.lastYAxis;
      t2 && t2.xaxis && (s2 = t2.xaxis), t2 && t2.yaxis && (i2 = t2.yaxis);
      const a2 = s2;
      e2.config.xaxis.min = a2.min, e2.config.xaxis.max = a2.max;
      const o2 = (t3) => {
        if (void 0 !== i2[t3]) {
          const s3 = i2[t3];
          e2.config.yaxis[t3].min = s3.min, e2.config.yaxis[t3].max = s3.max;
        }
      };
      e2.config.yaxis.map((t3, s3) => {
        e2.interact.zoomed || void 0 !== i2[s3] ? o2(s3) : void 0 !== this.ctx.opts.yaxis[s3] && (t3.min = this.ctx.opts.yaxis[s3].min, t3.max = this.ctx.opts.yaxis[s3].max);
      });
    }
  }
  class Et {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2;
    }
    getNearestValues({ hoverArea: t2, elGrid: e2, clientX: s2, clientY: i2 }) {
      var a2, o2;
      const r2 = this.w, n2 = e2.getBoundingClientRect(), l2 = n2.width, h2 = n2.height;
      let c2 = l2 / (r2.globals.dataPoints - 1);
      const d2 = h2 / r2.globals.dataPoints, g2 = this.hasBars();
      !r2.globals.comboCharts && !g2 || r2.config.xaxis.convertedCatToNumeric || (c2 = l2 / r2.globals.dataPoints);
      const p2 = s2 - n2.left - r2.globals.barPadForNumericAxis, u2 = i2 - n2.top;
      p2 < 0 || u2 < 0 || p2 > l2 || u2 > h2 ? (t2.classList.remove("hovering-zoom"), t2.classList.remove("hovering-pan")) : r2.interact.zoomEnabled ? (t2.classList.remove("hovering-pan"), t2.classList.add("hovering-zoom")) : r2.interact.panEnabled && (t2.classList.remove("hovering-zoom"), t2.classList.add("hovering-pan"));
      let x2 = Math.round(p2 / c2);
      const f2 = Math.floor(u2 / d2);
      g2 && !r2.config.xaxis.convertedCatToNumeric && (x2 = Math.ceil(p2 / c2), x2 -= 1);
      let b2 = null, y2 = null, w2 = r2.globals.seriesXvalues.map((t3) => t3.filter((t4) => m.isNumber(t4)));
      const v2 = r2.globals.seriesYvalues.map((t3) => t3.filter((t4) => m.isNumber(t4)));
      if (r2.axisFlags.isXNumeric) {
        const t3 = this.ttCtx.getElGrid();
        if (!t3) return { hoverX: p2, hoverY: u2 };
        const e3 = t3.getBoundingClientRect(), s3 = p2 * (e3.width / l2), i3 = u2 * (e3.height / h2);
        y2 = this.closestInMultiArray(s3, i3, w2, v2), b2 = y2.index, x2 = null != (a2 = y2.j) ? a2 : 0, null !== b2 && r2.globals.hasNullValues && (w2 = r2.globals.seriesXvalues[b2], y2 = this.closestInArray(s3, w2), x2 = null != (o2 = y2.j) ? o2 : 0);
      }
      return r2.interact.capturedSeriesIndex = null === b2 ? -1 : b2, (!x2 || x2 < 1) && (x2 = 0), r2.globals.isBarHorizontal ? r2.interact.capturedDataPointIndex = f2 : r2.interact.capturedDataPointIndex = x2, { capturedSeries: b2, j: r2.globals.isBarHorizontal ? f2 : x2, hoverX: p2, hoverY: u2 };
    }
    getFirstActiveXArray(t2) {
      const e2 = this.w;
      let s2 = 0;
      const i2 = t2.map((t3, e3) => t3.length > 0 ? e3 : -1);
      for (let t3 = 0; t3 < i2.length; t3++) if (-1 !== i2[t3] && -1 === e2.globals.collapsedSeriesIndices.indexOf(t3) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(t3)) {
        s2 = i2[t3];
        break;
      }
      return s2;
    }
    closestInMultiArray(t2, e2, s2, i2) {
      const a2 = this.w, o2 = (t3) => -1 === a2.globals.collapsedSeriesIndices.indexOf(t3) && -1 === a2.globals.ancillaryCollapsedSeriesIndices.indexOf(t3), r2 = a2.config.chart.type, n2 = !a2.globals.comboCharts && ("line" === r2 || "area" === r2);
      let l2 = 1 / 0, h2 = null, c2 = null;
      if (a2.globals.allSeriesHasEqualX) {
        let a3 = 1 / 0;
        for (let e3 = 0; e3 < s2.length; e3++) {
          if (!o2(e3)) continue;
          const r3 = s2[e3], n3 = i2[e3], l3 = Math.min(r3.length, n3.length);
          for (let e4 = 0; e4 < l3; e4++) {
            const s3 = Math.abs(t2 - r3[e4]);
            s3 < a3 && (a3 = s3, c2 = e4);
          }
        }
        if (null !== c2) if (n2) {
          let a4 = 1 / 0;
          for (let r3 = 0; r3 < s2.length; r3++) {
            if (!o2(r3)) continue;
            const n3 = s2[r3], l3 = i2[r3], d2 = Math.min(n3.length, l3.length);
            if (d2 < 2) {
              const t3 = l3[c2];
              if ("number" != typeof t3) continue;
              const s3 = Math.abs(e2 - t3);
              s3 < a4 && (a4 = s3, h2 = r3);
              continue;
            }
            for (let s3 = 0; s3 < d2 - 1; s3++) {
              const i3 = this._distanceToSegment(t2, e2, n3[s3], l3[s3], n3[s3 + 1], l3[s3 + 1]);
              i3.dist < a4 && (a4 = i3.dist, h2 = r3);
            }
          }
        } else {
          let t3 = 1 / 0;
          for (let a4 = 0; a4 < s2.length; a4++) {
            if (!o2(a4)) continue;
            const s3 = i2[a4][c2];
            if ("number" != typeof s3) continue;
            const r3 = Math.abs(e2 - s3);
            r3 < t3 && (t3 = r3, h2 = a4);
          }
        }
        return { index: h2, j: c2 };
      }
      for (let a3 = 0; a3 < s2.length; a3++) {
        if (!o2(a3)) continue;
        const r3 = s2[a3], d2 = i2[a3], g2 = Math.min(r3.length, d2.length);
        if (n2 && g2 >= 2) for (let s3 = 0; s3 < g2 - 1; s3++) {
          const i3 = this._distanceToSegment(t2, e2, r3[s3], d2[s3], r3[s3 + 1], d2[s3 + 1]);
          i3.dist < l2 && (l2 = i3.dist, h2 = a3, c2 = i3.t < 0.5 ? s3 : s3 + 1);
        }
        else for (let s3 = 0; s3 < g2; s3++) {
          const i3 = t2 - r3[s3], o3 = e2 - d2[s3], n3 = Math.sqrt(i3 * i3 + o3 * o3);
          n3 < l2 && (l2 = n3, h2 = a3, c2 = s3);
        }
      }
      return { index: h2, j: c2 };
    }
    _distanceToSegment(t2, e2, s2, i2, a2, o2) {
      const r2 = a2 - s2, n2 = o2 - i2, l2 = r2 * r2 + n2 * n2;
      let h2 = 0 === l2 ? 0 : ((t2 - s2) * r2 + (e2 - i2) * n2) / l2;
      h2 < 0 ? h2 = 0 : h2 > 1 && (h2 = 1);
      const c2 = t2 - (s2 + h2 * r2), d2 = e2 - (i2 + h2 * n2);
      return { dist: Math.sqrt(c2 * c2 + d2 * d2), t: h2 };
    }
    closestInArray(t2, e2) {
      const s2 = e2[0];
      let i2 = null, a2 = Math.abs(t2 - s2);
      for (let s3 = 0; s3 < e2.length; s3++) {
        const o2 = Math.abs(t2 - e2[s3]);
        o2 < a2 && (a2 = o2, i2 = s3);
      }
      return { j: i2 };
    }
    isXoverlap(t2) {
      const e2 = [], s2 = this.w.seriesData.seriesX.filter((t3) => void 0 !== t3[0]);
      if (s2.length > 0) for (let i2 = 0; i2 < s2.length - 1; i2++) void 0 !== s2[i2][t2] && void 0 !== s2[i2 + 1][t2] && s2[i2][t2] !== s2[i2 + 1][t2] && e2.push("unEqual");
      return 0 === e2.length;
    }
    isInitialSeriesSameLen() {
      var t2, e2, s2;
      let i2 = true;
      const a2 = (null == (t2 = this.w.globals.initialSeries) ? void 0 : t2.filter((t3, e3) => {
        var s3;
        return !(null == (s3 = this.w.globals.collapsedSeriesIndices) ? void 0 : s3.includes(e3));
      })) || [];
      for (let t3 = 0; t3 < a2.length - 1; t3++) {
        if (!(null == (e2 = a2[t3]) ? void 0 : e2.data) || !(null == (s2 = a2[t3 + 1]) ? void 0 : s2.data)) return true;
        if (a2[t3].data.length !== a2[t3 + 1].data.length) {
          i2 = false;
          break;
        }
      }
      return i2;
    }
    getBarsHeight(t2) {
      return [...t2].reduce((t3, e2) => t3 + e2.getBBox().height, 0);
    }
    getElMarkers(t2) {
      return "number" == typeof t2 ? this.w.dom.baseEl.querySelectorAll(`.apexcharts-series[data\\:realIndex='${t2}'] .apexcharts-series-markers-wrap > *`) : this.w.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    }
    getAllMarkers(t2 = false) {
      let e2 = [...this.w.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap")];
      t2 && (e2 = e2.filter((t3) => {
        const e3 = Number(t3.getAttribute("data:realIndex"));
        return -1 === this.w.globals.collapsedSeriesIndices.indexOf(e3);
      })), e2.sort((t3, e3) => {
        var s3 = Number(t3.getAttribute("data:realIndex")), i2 = Number(e3.getAttribute("data:realIndex"));
        return i2 < s3 ? 1 : i2 > s3 ? -1 : 0;
      });
      const s2 = [];
      return e2.forEach((t3) => {
        s2.push(t3.querySelector(".apexcharts-marker"));
      }), s2;
    }
    hasMarkers(t2) {
      return this.getElMarkers(t2).length > 0;
    }
    getPathFromPoint(t2, e2) {
      const s2 = Number(t2.getAttribute("cx")), i2 = Number(t2.getAttribute("cy")), a2 = t2.getAttribute("shape");
      return new N(this.w).getMarkerPath(s2, i2, a2, e2);
    }
    getElBars() {
      return this.w.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-violin-series, .apexcharts-rangebar-series");
    }
    hasBars() {
      return this.getElBars().length > 0;
    }
    getHoverMarkerSize(t2) {
      const e2 = this.w;
      let s2 = e2.config.markers.hover.size;
      return void 0 === s2 && (s2 = e2.globals.markers.size[t2] + e2.config.markers.hover.sizeOffset), s2;
    }
    toggleAllTooltipSeriesGroups(t2) {
      const e2 = this.w, s2 = this.ttCtx;
      0 === s2.allTooltipSeriesGroups.length && (s2.allTooltipSeriesGroups = e2.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      const i2 = s2.allTooltipSeriesGroups;
      for (let s3 = 0; s3 < i2.length; s3++) "enable" === t2 ? (i2[s3].classList.add("apexcharts-active"), i2[s3].style.display = e2.config.tooltip.items.display) : (i2[s3].classList.remove("apexcharts-active"), i2[s3].style.display = "none");
    }
  }
  class It {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2, this.tooltipUtil = new Et(t2);
    }
    drawSeriesTexts({ shared: t2 = true, ttItems: e2, i: s2 = 0, j: i2 = null, y1: a2, y2: o2, e: r2 }) {
      const n2 = this.w;
      void 0 !== n2.config.tooltip.custom ? this.handleCustomTooltip({ i: s2, j: i2, y1: a2, y2: o2, w: n2 }) : this.toggleActiveInactiveSeries(t2, s2);
      const l2 = this.getValuesToPrint({ i: s2, j: i2 });
      this.printLabels({ i: s2, j: i2, values: l2, ttItems: e2, shared: t2, e: r2 });
      const h2 = this.ttCtx.getElTooltip();
      h2 && (this.ttCtx.tooltipRect.ttWidth = h2.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = h2.getBoundingClientRect().height);
    }
    printLabels({ i: t2, j: e2, values: s2, ttItems: i2, shared: a2, e: o2 }) {
      const r2 = this.w, { xVal: n2, zVal: l2, xAxisTTVal: h2 } = s2, c2 = r2.seriesData.series.length, d2 = null !== e2 && r2.config.plotOptions.bar.distributed ? r2.globals.colors[e2] : r2.globals.colors[t2];
      for (let s3 = 0; s3 < c2; s3++) {
        const g2 = r2.config.tooltip.inverseOrder ? c2 - 1 - s3 : s3, p2 = this.computeSeriesRow({ i: t2, j: e2, t: s3, tIndex: g2, shared: a2, e: o2, basePColor: d2 });
        this.DOMHandling({ i: t2, t: g2, j: e2, ttItems: i2, values: { val: p2.val, goalVals: p2.goalVals, xVal: n2, xAxisTTVal: h2, zVal: l2 }, seriesName: p2.seriesName, shared: a2, pColor: p2.pColor });
      }
    }
    computeSeriesRow({ i: t2, j: e2, tIndex: s2, shared: i2, e: a2, basePColor: o2 }) {
      const r2 = this.w;
      let h2, c2 = this.getFormatters(t2), d2 = o2, g2 = [], p2 = "treemap" === r2.config.chart.type ? c2.yLbTitleFormatter(String(r2.config.series[t2].data[e2].x), { series: r2.seriesData.series, seriesIndex: t2, dataPointIndex: e2, w: r2 }) : this.getSeriesName({ fn: c2.yLbTitleFormatter, index: t2, seriesIndex: t2, j: e2 });
      return r2.globals.axisCharts && (i2 ? (c2 = this.getFormatters(s2), p2 = this.getSeriesName({ fn: c2.yLbTitleFormatter, index: s2, seriesIndex: t2, j: e2 }), d2 = r2.globals.colors[s2], h2 = this.formatYValue(c2, s2, e2), g2 = this.formatGoalVals(c2, s2, e2)) : (d2 = this.resolvePatternColor(a2, d2), h2 = this.formatYValue(c2, t2, e2), g2 = this.formatGoalVals(c2, t2, e2))), null === e2 && (h2 = c2.yLbFormatter(r2.seriesData.series[t2], l(n({}, r2), { seriesIndex: t2, dataPointIndex: t2 }))), { seriesName: p2, val: h2, goalVals: g2, pColor: d2 };
    }
    formatYValue(t2, e2, s2) {
      var i2, a2, o2, r2;
      const n2 = this.w;
      return n2.axisFlags.isRangeData ? t2.yLbFormatter(null == (a2 = null == (i2 = n2.rangeData.seriesRangeStart) ? void 0 : i2[e2]) ? void 0 : a2[s2], { series: n2.rangeData.seriesRangeStart, seriesIndex: e2, dataPointIndex: s2, w: n2 }) + " - " + t2.yLbFormatter(null == (r2 = null == (o2 = n2.rangeData.seriesRangeEnd) ? void 0 : o2[e2]) ? void 0 : r2[s2], { series: n2.rangeData.seriesRangeEnd, seriesIndex: e2, dataPointIndex: s2, w: n2 }) : t2.yLbFormatter(n2.seriesData.series[e2][s2], { series: n2.seriesData.series, seriesIndex: e2, dataPointIndex: s2, w: n2 });
    }
    formatGoalVals(t2, e2, s2) {
      var i2;
      const a2 = this.w, o2 = null == (i2 = a2.seriesData.seriesGoals[e2]) ? void 0 : i2[s2];
      return Array.isArray(o2) ? o2.map((i3) => ({ attrs: i3, val: t2.yLbFormatter(i3.value, { seriesIndex: e2, dataPointIndex: s2, w: a2 }) })) : [];
    }
    resolvePatternColor(t2, e2) {
      var s2, i2, a2;
      const o2 = this.w, r2 = null == (s2 = null == t2 ? void 0 : t2.target) ? void 0 : s2.getAttribute("fill");
      if (!r2) return e2;
      if (-1 === r2.indexOf("url")) return r2;
      if (-1 === r2.indexOf("Pattern")) return e2;
      const n2 = o2.dom.baseEl.querySelector(r2.substr(4).slice(0, -1));
      return null != (a2 = null == (i2 = null == n2 ? void 0 : n2.childNodes[0]) ? void 0 : i2.getAttribute("stroke")) ? a2 : e2;
    }
    getFormatters(t2) {
      const e2 = this.w;
      let s2, i2 = e2.formatters.yLabelFormatters[t2];
      return void 0 !== e2.formatters.ttVal ? Array.isArray(e2.formatters.ttVal) ? (i2 = e2.formatters.ttVal[t2] && e2.formatters.ttVal[t2].formatter, s2 = e2.formatters.ttVal[t2] && e2.formatters.ttVal[t2].title && e2.formatters.ttVal[t2].title.formatter) : (i2 = e2.formatters.ttVal.formatter, "function" == typeof e2.formatters.ttVal.title.formatter && (s2 = e2.formatters.ttVal.title.formatter)) : s2 = e2.config.tooltip.y.title.formatter, "function" != typeof i2 && (i2 = e2.formatters.yLabelFormatters[0] ? e2.formatters.yLabelFormatters[0] : function(t3) {
        return t3;
      }), "function" != typeof s2 && (s2 = function(t3) {
        return t3 ? t3 + ": " : "";
      }), { yLbFormatter: i2, yLbTitleFormatter: s2 };
    }
    getSeriesName({ fn: t2, index: e2, seriesIndex: s2, j: i2 }) {
      const a2 = this.w;
      return t2(String(a2.seriesData.seriesNames[e2]), { series: a2.seriesData.series, seriesIndex: s2, dataPointIndex: i2, w: a2 });
    }
    DOMHandling({ t: t2, j: e2, ttItems: s2, values: i2, seriesName: a2, shared: o2, pColor: r2 }) {
      const n2 = this.w, l2 = this.ttCtx, { val: h2, goalVals: c2, xVal: d2, xAxisTTVal: g2, zVal: p2 } = i2;
      let u2 = null;
      u2 = s2[t2].children, n2.config.tooltip.fillSeriesColor && (s2[t2].style.backgroundColor = r2, u2[0].style.display = "none"), l2.showTooltipTitle && (null === l2.tooltipTitle && (l2.tooltipTitle = n2.dom.baseEl.querySelector(".apexcharts-tooltip-title")), l2.tooltipTitle && (l2.tooltipTitle.innerHTML = d2)), l2.isXAxisTooltipEnabled && l2.xaxisTooltipText && (l2.xaxisTooltipText.innerHTML = "" !== g2 ? g2 : d2);
      const x2 = s2[t2].querySelector(".apexcharts-tooltip-text-y-label");
      x2 && (x2.innerHTML = a2 || "");
      const f2 = s2[t2].querySelector(".apexcharts-tooltip-text-y-value");
      f2 && (f2.innerHTML = void 0 !== h2 ? h2 : ""), u2[0] && u2[0].classList.contains("apexcharts-tooltip-marker") && (n2.config.tooltip.marker.fillColors && Array.isArray(n2.config.tooltip.marker.fillColors) && (r2 = n2.config.tooltip.marker.fillColors[t2]), n2.config.tooltip.fillSeriesColor ? u2[0].style.backgroundColor = r2 : u2[0].style.color = r2), n2.config.tooltip.marker.show || (u2[0].style.display = "none");
      const b2 = s2[t2].querySelector(".apexcharts-tooltip-text-goals-label"), m2 = s2[t2].querySelector(".apexcharts-tooltip-text-goals-value");
      if (c2.length && n2.seriesData.seriesGoals[t2]) {
        const s3 = () => {
          let t3 = "<div>", e3 = "<div>";
          c2.forEach((s4) => {
            t3 += ` <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: ${s4.attrs.strokeColor}; height: 3px; border-radius: 0; top: 5px;"></span> ${s4.attrs.name}</div>`, e3 += `<div>${s4.val}</div>`;
          }), b2.innerHTML = t3 + "</div>", m2.innerHTML = e3 + "</div>";
        };
        o2 ? n2.seriesData.seriesGoals[t2][e2] && Array.isArray(n2.seriesData.seriesGoals[t2][e2]) ? s3() : (b2.innerHTML = "", m2.innerHTML = "") : s3();
      } else b2.innerHTML = "", m2.innerHTML = "";
      if (null !== p2) {
        s2[t2].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = n2.config.tooltip.z.title;
        s2[t2].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== p2 ? p2 : "";
      }
      if (o2 && u2[0]) {
        if (n2.config.tooltip.hideEmptySeries) {
          const e3 = s2[t2].querySelector(".apexcharts-tooltip-marker"), i3 = s2[t2].querySelector(".apexcharts-tooltip-text");
          0 == parseFloat(h2) ? (e3.style.display = "none", i3.style.display = "none") : (e3.style.display = "block", i3.style.display = "block");
        }
        null == h2 || n2.globals.ancillaryCollapsedSeriesIndices.indexOf(t2) > -1 || n2.globals.collapsedSeriesIndices.indexOf(t2) > -1 || Array.isArray(l2.tConfig.enabledOnSeries) && -1 === l2.tConfig.enabledOnSeries.indexOf(t2) ? u2[0].parentNode.style.display = "none" : u2[0].parentNode.style.display = n2.config.tooltip.items.display;
      } else Array.isArray(l2.tConfig.enabledOnSeries) && -1 === l2.tConfig.enabledOnSeries.indexOf(t2) && (u2[0].parentNode.style.display = "none");
    }
    toggleActiveInactiveSeries(t2, e2) {
      const s2 = this.w;
      if (t2) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        const t3 = s2.dom.baseEl.querySelector(`.apexcharts-tooltip-series-group-${e2}`);
        if (t3) {
          const e3 = t3;
          e3.classList.add("apexcharts-active"), e3.style.display = s2.config.tooltip.items.display;
        }
      }
    }
    getValuesToPrint({ i: t2, j: e2 }) {
      var s2, i2, a2, o2, r2, n2, l2, h2;
      const c2 = this.w, d2 = c2.seriesData.seriesX.map((t3) => t3.length > 0 ? t3 : []);
      let g2 = "", p2 = "", u2 = null, x2 = null;
      const f2 = { series: c2.seriesData.series, seriesIndex: t2, dataPointIndex: e2, w: c2 }, b2 = c2.formatters.ttZFormatter;
      if (null === e2) x2 = c2.seriesData.series[t2];
      else if (c2.axisFlags.isXNumeric && "treemap" !== c2.config.chart.type) {
        if (g2 = d2[t2][e2], 0 === d2[t2].length) {
          g2 = d2[this.tooltipUtil.getFirstActiveXArray(d2)][e2];
        }
      } else {
        g2 = new Tt(this.w).isFormatXY() ? void 0 !== c2.config.series[t2].data[e2] ? c2.config.series[t2].data[e2].x : "" : void 0 !== c2.labelData.labels[e2] ? c2.labelData.labels[e2] : "";
      }
      const m2 = g2;
      if (c2.axisFlags.isXNumeric && "datetime" === c2.config.xaxis.type) {
        g2 = new w(this.w).xLabelFormat(c2.formatters.ttKeyFormatter, m2, m2, { i: void 0, dateFormatter: new y(this.w).formatDate, w: this.w });
      } else g2 = c2.globals.isBarHorizontal ? c2.formatters.yLabelFormatters[0](m2, f2) : null != (a2 = null == (i2 = (s2 = c2.formatters).xLabelFormatter) ? void 0 : i2.call(s2, m2, f2)) ? a2 : m2;
      return void 0 !== c2.config.tooltip.x.formatter && (g2 = null != (n2 = null == (r2 = (o2 = c2.formatters).ttKeyFormatter) ? void 0 : r2.call(o2, m2, f2)) ? n2 : m2), c2.seriesData.seriesZ.length > 0 && c2.seriesData.seriesZ[t2].length > 0 && (u2 = null == b2 ? void 0 : b2(c2.seriesData.seriesZ[t2][e2], c2)), p2 = "function" == typeof c2.config.xaxis.tooltip.formatter ? null == (h2 = (l2 = c2.formatters).xaxisTooltipFormatter) ? void 0 : h2.call(l2, m2, f2) : g2, { val: Array.isArray(x2) ? x2.join(" ") : x2, xVal: Array.isArray(g2) ? g2.join(" ") : g2, xAxisTTVal: Array.isArray(p2) ? p2.join(" ") : p2, zVal: u2 };
    }
    handleCustomTooltip({ i: t2, j: e2, y1: s2, y2: i2, w: a2 }) {
      const o2 = this.ttCtx.getElTooltip();
      let r2 = a2.config.tooltip.custom;
      Array.isArray(r2) && r2[t2] && (r2 = r2[t2]);
      const n2 = r2({ series: a2.seriesData.series, seriesIndex: t2, dataPointIndex: e2, y1: s2, y2: i2, w: a2 });
      o2 && ("string" == typeof n2 || "number" == typeof n2 ? o2.innerHTML = String(n2) : (n2 instanceof Element || "string" == typeof n2.nodeName) && (o2.innerHTML = "", o2.appendChild(n2.cloneNode(true))));
    }
  }
  class Xt {
    constructor(t2) {
      this.ttCtx = t2, this.w = t2.w;
    }
    moveXCrosshairs(t2, e2 = null) {
      const s2 = this.ttCtx, i2 = this.w, a2 = s2.getElXCrosshairs();
      let o2 = t2 - s2.xcrosshairsWidth / 2;
      const r2 = i2.labelData.labels.slice().length;
      if (null !== e2 && (o2 = i2.layout.gridWidth / r2 * e2), null === a2 || i2.globals.isBarHorizontal || (a2.setAttribute("x", String(o2)), a2.setAttribute("x1", String(o2)), a2.setAttribute("x2", String(o2)), a2.setAttribute("y2", String(i2.layout.gridHeight)), a2.classList.add("apexcharts-active")), o2 < 0 && (o2 = 0), o2 > i2.layout.gridWidth && (o2 = i2.layout.gridWidth), s2.isXAxisTooltipEnabled) {
        let t3 = o2;
        "tickWidth" !== i2.config.xaxis.crosshairs.width && "barWidth" !== i2.config.xaxis.crosshairs.width || (t3 = o2 + s2.xcrosshairsWidth / 2), this.moveXAxisTooltip(t3);
      }
    }
    moveYCrosshairs(t2) {
      const e2 = this.ttCtx;
      null !== e2.ycrosshairs && N.setAttrs(e2.ycrosshairs, { y1: t2, y2: t2 }), null !== e2.ycrosshairsHidden && N.setAttrs(e2.ycrosshairsHidden, { y1: t2, y2: t2 });
    }
    moveXAxisTooltip(t2) {
      var e2, s2;
      const i2 = this.w, a2 = this.ttCtx;
      if (null !== a2.xaxisTooltip && 0 !== a2.xcrosshairsWidth) {
        a2.xaxisTooltip.classList.add("apexcharts-active");
        const o2 = a2.xaxisOffY + i2.config.xaxis.tooltip.offsetY + i2.layout.translateY + 5 + i2.config.xaxis.offsetY;
        if (t2 -= a2.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t2)) {
          t2 += i2.layout.translateX;
          const r2 = new N(this.w).getTextRects(null != (s2 = null == (e2 = a2.xaxisTooltipText) ? void 0 : e2.innerHTML) ? s2 : "", i2.config.xaxis.labels.style.fontSize);
          a2.xaxisTooltipText && (a2.xaxisTooltipText.style.minWidth = r2.width + "px"), a2.xaxisTooltip.style.left = t2 + "px", a2.xaxisTooltip.style.top = o2 + "px";
        }
      }
    }
    moveYAxisTooltip(t2) {
      var e2, s2;
      const i2 = this.w, a2 = this.ttCtx;
      null === a2.yaxisTTEls && (a2.yaxisTTEls = [...i2.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")]);
      const o2 = parseInt(null != (s2 = null == (e2 = a2.ycrosshairsHidden) ? void 0 : e2.getAttribute("y1")) ? s2 : "0", 10);
      let r2 = i2.layout.translateY + o2;
      if (a2.yaxisTTEls) {
        const e3 = a2.yaxisTTEls[t2].getBoundingClientRect(), s3 = e3.height;
        let o3;
        const n2 = i2.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${t2}'] .apexcharts-yaxis-texts-g`), l2 = i2.dom.elWrap.getBoundingClientRect();
        if (n2) {
          const t3 = n2.getBoundingClientRect();
          if (t3.width > 0) {
            o3 = t3.left + t3.width / 2 - l2.left - e3.width / 2;
          }
        }
        if (null == o3) {
          const s4 = 4;
          o3 = i2.config.yaxis[t2].opposite ? i2.globals.translateYAxisX[t2] + s4 : i2.globals.translateYAxisX[t2] - e3.width - s4;
        }
        r2 -= s3 / 2, -1 === i2.globals.ignoreYAxisIndexes.indexOf(t2) && r2 > 0 && r2 < i2.layout.gridHeight ? (a2.yaxisTTEls[t2].classList.add("apexcharts-active"), a2.yaxisTTEls[t2].style.top = r2 + "px", a2.yaxisTTEls[t2].style.left = o3 + i2.config.yaxis[t2].tooltip.offsetX + "px") : a2.yaxisTTEls[t2].classList.remove("apexcharts-active");
      }
    }
    moveTooltip(t2, e2, s2 = null) {
      const i2 = this.ttCtx.getElTooltip();
      if (!i2) return;
      const a2 = this.computeTooltipPosition(t2, e2, s2);
      null !== a2 && this.applyTooltipPosition(i2, a2);
    }
    computeTooltipPosition(t2, e2, s2 = null) {
      var i2, a2, o2, r2, n2, l2, h2;
      const c2 = this.w, d2 = this.ttCtx, g2 = d2.tooltipRect, p2 = !!c2.config.tooltip.arrow, u2 = null !== s2 ? parseFloat(String(s2)) : 1, x2 = g2.ttHeight || 0, f2 = g2.ttWidth || 0, b2 = parseFloat(String(t2)), m2 = parseFloat(String(e2));
      if (isNaN(b2)) return null;
      let y2 = b2 + u2 + 5;
      const w2 = m2 + c2.layout.translateY;
      let v2 = p2 ? w2 - x2 / 2 + u2 / 2 : m2 + u2 / 2, A2 = "right";
      if (y2 > c2.layout.gridWidth / 2 && (y2 = y2 - f2 - u2 - 10, A2 = "left"), y2 > c2.layout.gridWidth - f2 - 10 && (y2 = c2.layout.gridWidth - f2), y2 < -20 && (y2 = -20), c2.config.tooltip.followCursor) {
        const t3 = d2.getElGrid();
        if (!t3) return null;
        const e3 = t3.getBoundingClientRect();
        y2 = d2.e.clientX - e3.left, y2 > c2.layout.gridWidth / 2 ? (y2 -= f2, A2 = "left") : A2 = "right", v2 = d2.e.clientY + c2.layout.translateY - e3.top, v2 > c2.layout.gridHeight / 2 && (v2 -= x2);
      } else if (!c2.globals.isBarHorizontal) if (p2) {
        const t3 = c2.layout.translateY, e3 = c2.layout.translateY + c2.layout.gridHeight;
        v2 + x2 > e3 && (v2 = e3 - x2), v2 < t3 && (v2 = t3);
      } else x2 / 2 + v2 > c2.layout.gridHeight && (v2 = c2.layout.gridHeight - x2 + c2.layout.translateY);
      if (isNaN(y2)) return null;
      y2 += c2.layout.translateX;
      const C2 = null == (a2 = null == (i2 = c2.config) ? void 0 : i2.chart) ? void 0 : a2.accessibility;
      if ((null == C2 ? void 0 : C2.enabled) && (null == (r2 = null == (o2 = null == C2 ? void 0 : C2.keyboard) ? void 0 : o2.navigation) ? void 0 : r2.enabled) && (null == (h2 = null == (l2 = null == (n2 = c2.dom) ? void 0 : n2.baseEl) ? void 0 : l2.querySelector) ? void 0 : h2.call(l2, ".apexcharts-keyboard-focused"))) {
        const t3 = p2 ? w2 : m2, e3 = (u2 || 1) + 12, s3 = v2, i3 = v2 + x2;
        !isNaN(t3) && x2 > 0 && s3 < t3 + e3 && i3 > t3 - e3 && (v2 = t3 - x2 - e3, v2 < 0 && (v2 = t3 + e3));
      }
      let S2 = null;
      if (p2 && x2 > 0) {
        const t3 = w2 - v2, e3 = 10, s3 = x2 - 10;
        S2 = Math.max(e3, Math.min(s3, t3));
      }
      return { x: y2, y: v2, placement: A2, arrowY: S2 };
    }
    applyTooltipPosition(t2, e2) {
      if (!t2) return;
      const s2 = "true" !== t2.dataset.positioned;
      s2 && (t2.style.transitionProperty = "none"), t2.style.left = e2.x + "px", t2.style.top = e2.y + "px", e2.placement && (t2.dataset.placement = e2.placement), null != e2.arrowY && t2.style.setProperty("--apx-tt-arrow-y", e2.arrowY + "px"), null != e2.arrowX && t2.style.setProperty("--apx-tt-arrow-x", e2.arrowX + "px"), s2 && (t2.offsetWidth, t2.dataset.positioned = "true", requestAnimationFrame(() => {
        t2.style.transitionProperty = "";
      }));
    }
    moveMarkers(t2, e2) {
      var s2;
      const i2 = this.w, a2 = this.ttCtx;
      if (i2.globals.markers.size[t2] > 0) {
        const o2 = i2.dom.baseEl.querySelectorAll(` .apexcharts-series[data\\:realIndex='${t2}'] .apexcharts-marker`);
        for (let t3 = 0; t3 < o2.length; t3++) parseInt(null != (s2 = o2[t3].getAttribute("rel")) ? s2 : "0", 10) === e2 && (a2.marker.resetPointsSize(), a2.marker.enlargeCurrentPoint(e2, o2[t3]));
      } else a2.marker.resetPointsSize(), this.moveDynamicPointOnHover(e2, t2);
    }
    moveDynamicPointOnHover(t2, e2) {
      var s2, i2, a2, o2, r2;
      const n2 = this.w, l2 = this.ttCtx;
      let h2 = 0, c2 = 0;
      const d2 = new N(this.w), g2 = n2.globals.pointsArray, p2 = l2.tooltipUtil.getHoverMarkerSize(e2), u2 = n2.config.series[e2].type;
      if (u2 && ("column" === u2 || "candlestick" === u2 || "boxPlot" === u2 || "violin" === u2)) return;
      h2 = null == (i2 = null == (s2 = g2[e2]) ? void 0 : s2[t2]) ? void 0 : i2[0], c2 = (null == (o2 = null == (a2 = g2[e2]) ? void 0 : a2[t2]) ? void 0 : o2[1]) || 0;
      const x2 = n2.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${e2}'] .apexcharts-series-markers path`);
      if (x2 && c2 < n2.layout.gridHeight && c2 > 0) {
        const t3 = null != (r2 = x2.getAttribute("shape")) ? r2 : "circle", e3 = d2.getMarkerPath(h2, c2, t3, 1.5 * p2);
        x2.setAttribute("d", e3);
      }
      this.moveXCrosshairs(h2), l2.fixedTooltip || this.moveTooltip(h2, c2, p2);
    }
    moveDynamicPointsOnHover(t2) {
      var e2, s2;
      const i2 = this.ttCtx, a2 = i2.w;
      let o2 = 0, r2 = 0, n2 = 0;
      const l2 = a2.globals.pointsArray, h2 = new lt(this.w), c2 = new N(this.w);
      n2 = h2.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      const d2 = i2.tooltipUtil.getHoverMarkerSize(n2);
      if ((null == (e2 = l2[n2]) ? void 0 : e2[t2]) && (o2 = l2[n2][t2][0], r2 = l2[n2][t2][1]), isNaN(o2)) return;
      const g2 = i2.tooltipUtil.getAllMarkers();
      if (g2.length) for (let e3 = 0; e3 < a2.seriesData.series.length; e3++) {
        const i3 = l2[e3];
        if (a2.globals.comboCharts && void 0 === i3 && g2.splice(e3, 0, null), i3 && i3.length) {
          let i4, r3 = l2[e3][t2][1];
          g2[e3].setAttribute("cx", o2);
          const n3 = null != (s2 = g2[e3].getAttribute("shape")) ? s2 : "circle";
          if ("rangeArea" === a2.config.chart.type && !a2.globals.comboCharts) {
            const s3 = t2 + a2.seriesData.series[e3].length;
            i4 = l2[e3][s3][1];
            r3 -= Math.abs(r3 - i4) / 2;
          }
          if (null !== r3 && !isNaN(r3) && r3 < a2.layout.gridHeight + d2 && r3 + d2 > 0) {
            const t3 = c2.getMarkerPath(o2, r3, n3, d2);
            g2[e3].setAttribute("d", t3);
          } else g2[e3].setAttribute("d", "");
        }
      }
      this.moveXCrosshairs(o2), i2.fixedTooltip || this.moveTooltip(o2, r2 || a2.layout.gridHeight, d2);
    }
    moveStickyTooltipOverBars(t2, e2) {
      var s2, i2, a2;
      const o2 = this.w, r2 = this.ttCtx;
      let n2 = o2.globals.columnSeries ? o2.globals.columnSeries.length : o2.seriesData.series.length;
      o2.config.chart.stacked && (n2 = o2.globals.barGroups.length);
      let l2 = n2 >= 2 && n2 % 2 == 0 ? Math.floor(n2 / 2) : Math.floor(n2 / 2) + 1;
      if (o2.globals.isBarHorizontal) {
        l2 = new lt(this.w).getActiveConfigSeriesIndex("desc") + 1;
      }
      let h2 = o2.dom.baseEl.querySelector(`.apexcharts-bar-series .apexcharts-series[rel='${l2}'] path[j='${t2}'], .apexcharts-candlestick-series .apexcharts-series[rel='${l2}'] path[j='${t2}'], .apexcharts-boxPlot-series .apexcharts-series[rel='${l2}'] path[j='${t2}'], .apexcharts-violin-series .apexcharts-series[rel='${l2}'] path[j='${t2}'], .apexcharts-rangebar-series .apexcharts-series[rel='${l2}'] path[j='${t2}']`);
      h2 || "number" != typeof e2 || (h2 = o2.dom.baseEl.querySelector(`.apexcharts-bar-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-violin-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='${e2}'] path[j='${t2}']`));
      let c2 = h2 ? parseFloat(null != (s2 = h2.getAttribute("cx")) ? s2 : "0") : 0, d2 = h2 ? parseFloat(null != (i2 = h2.getAttribute("cy")) ? i2 : "0") : 0;
      const g2 = h2 ? parseFloat(null != (a2 = h2.getAttribute("barWidth")) ? a2 : "0") : 0, p2 = r2.getElGrid();
      if (!p2) return;
      const u2 = p2.getBoundingClientRect(), x2 = h2 && (h2.classList.contains("apexcharts-candlestick-area") || h2.classList.contains("apexcharts-boxPlot-area"));
      if (o2.axisFlags.isXNumeric) {
        if (h2 && !x2) {
          const e3 = this._datapointCenterXFromBars(t2, u2);
          null != e3 ? c2 = e3 : c2 -= n2 % 2 != 0 ? g2 / 2 : 0;
        }
        h2 && x2 && (c2 -= g2 / 2);
      } else o2.globals.isBarHorizontal || (c2 = r2.xAxisTicksPositions[t2 - 1] + r2.dataPointsDividedWidth / 2, isNaN(c2) && (c2 = r2.xAxisTicksPositions[t2] - r2.dataPointsDividedWidth / 2));
      if (o2.globals.isBarHorizontal ? d2 -= r2.tooltipRect.ttHeight : o2.config.tooltip.followCursor ? d2 = r2.e.clientY - u2.top - r2.tooltipRect.ttHeight / 2 : d2 + r2.tooltipRect.ttHeight + 15 > o2.layout.gridHeight && (d2 = o2.layout.gridHeight), o2.globals.isBarHorizontal || this.moveXCrosshairs(c2), !r2.fixedTooltip) {
        if (o2.globals.isBarHorizontal && !o2.config.tooltip.followCursor) {
          if (this.placeHorizontalSharedTooltip(t2)) return;
        }
        this.moveTooltip(c2, d2 || o2.layout.gridHeight);
      }
    }
    _datapointCenterXFromBars(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = a2.dom.baseEl.querySelectorAll(`.apexcharts-bar-series path[j='${t2}'],.apexcharts-rangebar-series path[j='${t2}']`);
      if (!o2.length) return null;
      let r2 = 1 / 0, n2 = -1 / 0;
      for (const t3 of o2) {
        const e3 = t3.parentNode;
        if (null == (i2 = null == (s2 = null == e3 ? void 0 : e3.classList) ? void 0 : s2.contains) ? void 0 : i2.call(s2, "apexcharts-series-collapsed")) continue;
        const a3 = t3.getBoundingClientRect();
        0 === a3.width && 0 === a3.height || (a3.left < r2 && (r2 = a3.left), a3.right > n2 && (n2 = a3.right));
      }
      return isFinite(r2) ? (r2 + n2) / 2 - e2.left - (a2.globals.barPadForNumericAxis || 0) : null;
    }
    placeHorizontalSharedTooltip(t2) {
      var e2, s2;
      const i2 = this.w, a2 = this.ttCtx, o2 = a2.getElTooltip();
      if (!o2) return false;
      const r2 = a2.getElGrid();
      if (!r2) return false;
      const n2 = r2.getBoundingClientRect(), l2 = i2.dom.baseEl.querySelectorAll(`.apexcharts-bar-series path[j='${t2}'],.apexcharts-rangebar-series path[j='${t2}'],.apexcharts-boxPlot-series path[j='${t2}']`);
      if (!l2.length) return false;
      let h2 = 1 / 0, c2 = -1 / 0, d2 = 1 / 0, g2 = -1 / 0;
      for (const t3 of l2) {
        const i3 = t3.parentNode;
        if (null == (s2 = null == (e2 = null == i3 ? void 0 : i3.classList) ? void 0 : e2.contains) ? void 0 : s2.call(e2, "apexcharts-series-collapsed")) continue;
        const a3 = t3.getBoundingClientRect();
        0 === a3.width && 0 === a3.height || (a3.left < h2 && (h2 = a3.left), a3.right > c2 && (c2 = a3.right), a3.top < d2 && (d2 = a3.top), a3.bottom > g2 && (g2 = a3.bottom));
      }
      if (!isFinite(h2)) return false;
      const p2 = a2.tooltipRect.ttWidth || 0, u2 = a2.tooltipRect.ttHeight || 0, x2 = (h2 + c2) / 2 - n2.left + i2.layout.translateX, f2 = d2 - n2.top + i2.layout.translateY, b2 = g2 - n2.top + i2.layout.translateY, m2 = i2.layout.translateY, y2 = i2.layout.translateY + i2.layout.gridHeight, w2 = i2.layout.translateX, v2 = i2.layout.translateX + i2.layout.gridWidth;
      let A2 = "top", C2 = f2 - u2 - 7;
      if (C2 < m2) {
        const t3 = b2 + 7;
        t3 + u2 <= y2 && (A2 = "bottom", C2 = t3);
      }
      let S2 = x2 - p2 / 2;
      S2 < w2 && (S2 = w2), S2 + p2 > v2 && (S2 = v2 - p2);
      const k2 = Math.max(10, Math.min(p2 - 10, x2 - S2));
      return this.applyTooltipPosition(o2, { x: S2, y: C2, placement: A2, arrowY: null, arrowX: k2 }), true;
    }
  }
  function Rt(t2) {
    const e2 = (t3) => `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${t3}</svg>`;
    switch (t2) {
      case "square":
      case "rect":
        return e2('<rect x="1" y="1" width="10" height="10" rx="1" fill="currentColor"/>');
      case "line":
        return e2('<rect x="0" y="5" width="12" height="2" rx="1" fill="currentColor"/>');
      case "diamond":
        return e2('<path d="M6 0.5 L11.5 6 L6 11.5 L0.5 6 Z" fill="currentColor"/>');
      case "triangle":
        return e2('<path d="M6 1 L11.2 10.5 L0.8 10.5 Z" fill="currentColor"/>');
      case "cross":
        return e2('<path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>');
      case "plus":
        return e2('<path d="M6 1 L6 11 M1 6 L11 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>');
      case "star":
        return e2('<path d="M6 0.5 L7.5 4.4 L11.5 4.7 L8.4 7.2 L9.5 11.1 L6 8.9 L2.5 11.1 L3.6 7.2 L0.5 4.7 L4.5 4.4 Z" fill="currentColor"/>');
      case "sparkle":
        return e2('<path d="M6 0.5 L7 5 L11.5 6 L7 7 L6 11.5 L5 7 L0.5 6 L5 5 Z" fill="currentColor"/>');
      default:
        return e2('<circle cx="6" cy="6" r="5" fill="currentColor"/>');
    }
  }
  class zt {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2, this.ctx = t2.ctx, this.tooltipPosition = new Xt(t2);
    }
    drawDynamicPoints() {
      const t2 = this.w, e2 = new N(this.w), s2 = new j(this.w, this.ctx), i2 = [...t2.dom.baseEl.querySelectorAll(".apexcharts-series")];
      t2.config.chart.stacked && i2.sort((t3, e3) => parseFloat(t3.getAttribute("data:realIndex")) - parseFloat(e3.getAttribute("data:realIndex")));
      for (let a2 = 0; a2 < i2.length; a2++) {
        const o2 = i2[a2].querySelector(".apexcharts-series-markers-wrap");
        if (null !== o2) {
          let i3 = `apexcharts-marker w${(Math.random() + 1).toString(36).substring(4)}`;
          "line" !== t2.config.chart.type && "area" !== t2.config.chart.type || t2.globals.comboCharts || t2.config.tooltip.intersect || (i3 += " no-pointer-events");
          const a3 = s2.getMarkerConfig({ cssClass: i3, seriesIndex: Number(o2.getAttribute("data:realIndex")) }), r2 = e2.drawMarker(0, 0, a3);
          r2.node.setAttribute("default-marker-size", 0);
          const n2 = b.createElementNS(W, "g");
          n2.classList.add("apexcharts-series-markers"), n2.appendChild(r2.node), o2.appendChild(n2);
        }
      }
    }
    enlargeCurrentPoint(t2, e2, s2 = null, i2 = null) {
      const a2 = this.w;
      "bubble" !== a2.config.chart.type && this.newPointSize(t2, e2);
      let o2 = e2.getAttribute("cx"), r2 = e2.getAttribute("cy");
      if (null !== s2 && null !== i2 && (o2 = s2, r2 = i2), this.tooltipPosition.moveXCrosshairs(o2), !this.fixedTooltip) {
        if ("radar" === a2.config.chart.type) {
          const t3 = this.ttCtx.getElGrid();
          if (!t3) return;
          const e3 = t3.getBoundingClientRect();
          o2 = this.ttCtx.e.clientX - e3.left;
        }
        this.tooltipPosition.moveTooltip(o2, r2, a2.config.markers.hover.size);
      }
    }
    enlargePoints(t2) {
      var e2, s2;
      const i2 = this.w, a2 = this, o2 = this.ttCtx, r2 = t2, n2 = i2.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker");
      let l2 = i2.config.markers.hover.size;
      for (let t3 = 0; t3 < n2.length; t3++) {
        const h2 = n2[t3].getAttribute("rel"), c2 = n2[t3].getAttribute("index");
        if (void 0 === l2 && (l2 = i2.globals.markers.size[c2] + i2.config.markers.hover.sizeOffset), r2 === parseInt(null != h2 ? h2 : "0", 10)) {
          a2.newPointSize(r2, n2[t3]);
          const i3 = null != (e2 = n2[t3].getAttribute("cx")) ? e2 : "0", h3 = null != (s2 = n2[t3].getAttribute("cy")) ? s2 : "0";
          a2.tooltipPosition.moveXCrosshairs(parseFloat(i3)), o2.fixedTooltip || a2.tooltipPosition.moveTooltip(parseFloat(i3), parseFloat(h3), l2);
        } else a2.oldPointSize(n2[t3]);
      }
    }
    newPointSize(t2, e2) {
      const s2 = this.w;
      let i2 = s2.config.markers.hover.size;
      const a2 = 0 === t2 ? e2.parentNode.firstChild : e2.parentNode.lastChild;
      if ("0" !== a2.getAttribute("default-marker-size")) {
        const t3 = parseInt(a2.getAttribute("index"), 10);
        void 0 === i2 && (i2 = s2.globals.markers.size[t3] + s2.config.markers.hover.sizeOffset), i2 < 0 && (i2 = 0);
        const o2 = this.ttCtx.tooltipUtil.getPathFromPoint(e2, i2);
        e2.setAttribute("d", o2);
      }
    }
    oldPointSize(t2) {
      const e2 = parseFloat(t2.getAttribute("default-marker-size")), s2 = this.ttCtx.tooltipUtil.getPathFromPoint(t2, e2);
      t2.setAttribute("d", s2);
    }
    resetPointsSize() {
      var t2;
      const e2 = this.w.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker");
      for (let s2 = 0; s2 < e2.length; s2++) {
        const i2 = parseFloat(null != (t2 = e2[s2].getAttribute("default-marker-size")) ? t2 : "0");
        if (m.isNumber(i2) && i2 > 0) {
          const t3 = this.ttCtx.tooltipUtil.getPathFromPoint(e2[s2], i2);
          e2[s2].setAttribute("d", t3);
        } else e2[s2].setAttribute("d", "M0,0");
      }
    }
  }
  class Yt {
    constructor(t2) {
      this.w = t2.w;
      const e2 = this.w;
      this.ttCtx = t2, this.isVerticalGroupedRangeBar = !e2.globals.isBarHorizontal && "rangeBar" === e2.config.chart.type && e2.config.plotOptions.bar.rangeBarGroupRows;
    }
    getAttr(t2, e2) {
      var s2;
      return parseFloat(null != (s2 = t2.target.getAttribute(e2)) ? s2 : "");
    }
    handleHeatTreeTooltip({ e: t2, opt: e2, x: s2, y: i2, type: a2 }) {
      var o2, r2;
      const n2 = this.ttCtx, l2 = this.w;
      if (t2.target.classList.contains(`apexcharts-${a2}-rect`)) {
        const a3 = this.getAttr(t2, "i"), h2 = this.getAttr(t2, "j"), c2 = this.getAttr(t2, "cx"), d2 = this.getAttr(t2, "cy"), g2 = this.getAttr(t2, "width"), p2 = this.getAttr(t2, "height");
        if (n2.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: a3, j: h2, shared: false, e: t2 }), l2.interact.capturedSeriesIndex = a3, l2.interact.capturedDataPointIndex = h2, s2 = c2 + n2.tooltipRect.ttWidth / 2 + g2, i2 = d2 + n2.tooltipRect.ttHeight / 2 - p2 / 2, n2.tooltipPosition.moveXCrosshairs(c2 + g2 / 2), s2 > l2.layout.gridWidth / 2 && (s2 = c2 - n2.tooltipRect.ttWidth / 2 + g2), n2.w.config.tooltip.followCursor) {
          const t3 = l2.dom.elWrap.getBoundingClientRect();
          s2 = (null != (o2 = l2.interact.clientX) ? o2 : 0) - t3.left - (s2 > l2.layout.gridWidth / 2 ? n2.tooltipRect.ttWidth : 0), i2 = (null != (r2 = l2.interact.clientY) ? r2 : 0) - t3.top - (i2 > l2.layout.gridHeight / 2 ? n2.tooltipRect.ttHeight : 0);
        }
      }
      return { x: s2, y: i2 };
    }
    handleMarkerTooltip({ e: t2, opt: e2, x: s2, y: i2 }) {
      const a2 = this.w, o2 = this.ttCtx;
      let r2, n2;
      if (t2.target.classList.contains("apexcharts-marker")) {
        const l2 = parseInt(e2.paths.getAttribute("cx"), 10), h2 = parseInt(e2.paths.getAttribute("cy"), 10), c2 = parseFloat(e2.paths.getAttribute("val"));
        if (n2 = parseInt(e2.paths.getAttribute("rel"), 10), r2 = parseInt(e2.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, o2.intersect) {
          const t3 = m.findAncestor(e2.paths, "apexcharts-series");
          t3 && (r2 = parseInt(t3.getAttribute("data:realIndex"), 10));
        }
        o2.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: r2, j: n2, shared: !o2.showOnIntersect && a2.config.tooltip.shared, e: t2 }), "mouseup" === t2.type && o2.markerClick(t2, r2, n2), a2.interact.capturedSeriesIndex = r2, a2.interact.capturedDataPointIndex = n2;
        if (s2 = l2, !!a2.config.tooltip.arrow ? i2 = h2 : (i2 = h2 + a2.layout.translateY - 1.4 * o2.tooltipRect.ttHeight, c2 < 0 && (i2 = h2)), o2.w.config.tooltip.followCursor) {
          const t3 = o2.getElGrid();
          if (!t3) return { x: s2, y: i2 };
          const e3 = t3.getBoundingClientRect();
          i2 = o2.e.clientY + a2.layout.translateY - e3.top;
        }
        o2.marker.enlargeCurrentPoint(n2, e2.paths, s2, i2);
      }
      return { x: s2, y: i2 };
    }
    handleBarTooltip({ e: t2, opt: e2 }) {
      var s2, i2, a2;
      const o2 = this.w, r2 = this.ttCtx, n2 = r2.getElTooltip();
      let l2, h2 = 0, c2 = 0, d2 = 0, g2 = 0;
      const p2 = this.getBarTooltipXY({ e: t2, opt: e2 });
      if (null === p2.j && 0 === p2.barHeight && 0 === p2.barWidth) return;
      g2 = p2.i;
      const u2 = p2.j;
      if (o2.interact.capturedSeriesIndex = g2, o2.interact.capturedDataPointIndex = null !== u2 ? u2 : o2.interact.capturedDataPointIndex, o2.globals.isBarHorizontal && r2.tooltipUtil.hasBars() || !o2.config.tooltip.shared ? (c2 = p2.x, d2 = p2.y, l2 = Array.isArray(o2.config.stroke.width) ? o2.config.stroke.width[g2] : o2.config.stroke.width, h2 = c2) : o2.globals.comboCharts || o2.config.tooltip.shared || (h2 /= 2), isNaN(d2) && (d2 = o2.globals.svgHeight - r2.tooltipRect.ttHeight), c2 + r2.tooltipRect.ttWidth > o2.layout.gridWidth ? c2 -= r2.tooltipRect.ttWidth : c2 < 0 && (c2 = 0), r2.w.config.tooltip.followCursor) {
        if (!r2.getElGrid()) return;
      }
      if (null === r2.tooltip && (r2.tooltip = o2.dom.baseEl.querySelector(".apexcharts-tooltip")), o2.config.tooltip.shared || (o2.globals.comboBarCount > 0 ? r2.tooltipPosition.moveXCrosshairs(h2 + l2 / 2) : r2.tooltipPosition.moveXCrosshairs(h2)), !r2.fixedTooltip && (!o2.config.tooltip.shared || o2.globals.isBarHorizontal && r2.tooltipUtil.hasBars()) && (d2 = d2 + o2.layout.translateY - r2.tooltipRect.ttHeight / 2, n2)) {
        const t3 = r2.tooltipRect.ttWidth || 0, e3 = r2.tooltipRect.ttHeight || 0, l3 = !!o2.config.tooltip.arrow, { barAnchorXInGrid: h3, barAnchorYInGrid: g3, barRectInGrid: u3 } = p2, x2 = 7, f2 = null == (s2 = r2.getElGrid()) ? void 0 : s2.getBoundingClientRect(), b2 = o2.dom.elWrap.getBoundingClientRect(), m2 = f2 ? f2.left - b2.left : o2.layout.translateX;
        let y2, w2 = null, v2 = null, A2 = c2 + m2, C2 = d2;
        if (l3 && o2.globals.isBarHorizontal && null != u3) {
          const s3 = o2.layout.translateY, i3 = o2.layout.translateY + o2.layout.gridHeight, a3 = m2, r3 = m2 + o2.layout.gridWidth, n3 = (u3.left + u3.right) / 2 + m2, l4 = u3.top + o2.layout.translateY, h4 = u3.bottom + o2.layout.translateY;
          let c3 = l4 - e3 - x2;
          if (y2 = "top", c3 < s3) {
            const t4 = h4 + x2;
            t4 + e3 <= i3 && (y2 = "bottom", c3 = t4);
          }
          C2 = c3, A2 = n3 - t3 / 2, A2 < a3 && (A2 = a3), A2 + t3 > r3 && (A2 = r3 - t3), v2 = Math.max(10, Math.min(t3 - 10, n3 - A2));
        } else if (l3 && null != h3 && null != g3) {
          const s3 = h3 + m2, r3 = m2 + o2.layout.gridWidth / 2, n3 = (null != (i2 = null == u3 ? void 0 : u3.left) ? i2 : h3) + m2, l4 = (null != (a2 = null == u3 ? void 0 : u3.right) ? a2 : h3) + m2;
          if (s3 < r3 ? (y2 = "right", A2 = l4 + x2) : (y2 = "left", A2 = n3 - t3 - x2), u3) {
            C2 = (u3.top + u3.bottom) / 2 + o2.layout.translateY - e3 / 2;
            const t4 = o2.layout.translateY, s4 = o2.layout.translateY + o2.layout.gridHeight;
            C2 < t4 && (C2 = t4), C2 + e3 > s4 && (C2 = s4 - e3);
          }
          if (e3 > 0 && u3) {
            const t4 = (u3.top + u3.bottom) / 2 + o2.layout.translateY;
            w2 = Math.max(10, Math.min(e3 - 10, t4 - C2));
          }
        }
        r2.tooltipPosition.applyTooltipPosition(n2, { x: A2, y: C2, placement: y2, arrowY: w2, arrowX: v2 });
      }
    }
    getBarTooltipXY({ e: t2, opt: e2 }) {
      const s2 = this.w;
      let i2 = null;
      const a2 = this.ttCtx;
      let o2 = 0, r2 = 0, n2 = 0, l2 = 0, h2 = 0, c2 = null, d2 = null, g2 = null, p2 = null, u2 = null;
      const x2 = t2.target.classList;
      if (x2.contains("apexcharts-bar-area") || x2.contains("apexcharts-candlestick-area") || x2.contains("apexcharts-boxPlot-area") || x2.contains("apexcharts-rangebar-area")) {
        const x3 = t2.target, f2 = x3.getBoundingClientRect(), b2 = e2.elGrid.getBoundingClientRect(), m2 = f2.height;
        h2 = f2.height;
        const y2 = f2.width, w2 = parseInt(x3.getAttribute("cx"), 10), v2 = parseInt(x3.getAttribute("cy"), 10);
        c2 = w2, d2 = v2, l2 = parseFloat(x3.getAttribute("barWidth"));
        const A2 = f2.left - b2.left, C2 = f2.top - b2.top, S2 = C2 + m2 / 2;
        g2 = A2 + y2 / 2, p2 = s2.globals.isBarHorizontal ? S2 : C2, u2 = { left: A2, top: C2, right: A2 + y2, bottom: C2 + m2 };
        const k2 = "touchmove" === t2.type ? t2.touches[0].clientX : t2.clientX;
        i2 = parseInt(x3.getAttribute("j"), 10), o2 = parseInt(x3.parentNode.getAttribute("rel"), 10) - 1;
        const D2 = x3.getAttribute("data-range-y1"), L2 = x3.getAttribute("data-range-y2");
        s2.globals.comboCharts && (o2 = parseInt(x3.parentNode.getAttribute("data:realIndex"), 10));
        const M2 = (t3) => s2.axisFlags.isXNumeric ? w2 - y2 / 2 : this.isVerticalGroupedRangeBar ? w2 + y2 / 2 : w2 - a2.dataPointsDividedWidth + y2 / 2, P2 = () => v2 - a2.dataPointsDividedHeight + m2 / 2 - a2.tooltipRect.ttHeight / 2;
        a2.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: o2, j: i2, y1: D2 ? parseInt(D2, 10) : null, y2: L2 ? parseInt(L2, 10) : null, shared: !a2.showOnIntersect && s2.config.tooltip.shared, e: t2 }), s2.config.tooltip.followCursor ? s2.globals.isBarHorizontal ? (r2 = k2 - b2.left + 15, n2 = P2()) : (r2 = M2(r2), n2 = t2.clientY - b2.top - a2.tooltipRect.ttHeight / 2 - 15) : s2.globals.isBarHorizontal ? (r2 = w2, a2.xyRatios && r2 < a2.xyRatios.baseLineInvertedY && (r2 = w2 - a2.tooltipRect.ttWidth), n2 = P2()) : (r2 = M2(r2), n2 = v2);
      }
      return { x: r2, y: n2, barHeight: h2, barWidth: l2, i: o2, j: i2, barCx: c2, barCy: d2, barAnchorXInGrid: g2, barAnchorYInGrid: p2, barRectInGrid: u2 };
    }
  }
  class Bt {
    constructor(t2) {
      this.w = t2.w, this.ttCtx = t2;
    }
    drawXaxisTooltip() {
      const t2 = this.w, e2 = this.ttCtx, s2 = "bottom" === t2.config.xaxis.position;
      e2.xaxisOffY = s2 ? t2.layout.gridHeight + 1 : -t2.layout.xAxisHeight - t2.config.xaxis.axisTicks.height + 3;
      const i2 = s2 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", a2 = t2.dom.elWrap;
      if (e2.isXAxisTooltipEnabled) {
        null === t2.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e2.xaxisTooltip = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.xaxisTooltip.setAttribute("class", i2 + " apexcharts-theme-" + t2.config.tooltip.theme), a2.appendChild(e2.xaxisTooltip), e2.xaxisTooltipText = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e2.xaxisTooltipText.style.fontFamily = t2.config.xaxis.tooltip.style.fontFamily || t2.config.chart.fontFamily, e2.xaxisTooltipText.style.fontSize = t2.config.xaxis.tooltip.style.fontSize, e2.xaxisTooltip.appendChild(e2.xaxisTooltipText));
      }
    }
    drawYaxisTooltip() {
      const t2 = this.w, e2 = this.ttCtx;
      for (let s2 = 0; s2 < t2.config.yaxis.length; s2++) {
        const i2 = t2.config.yaxis[s2].opposite || t2.config.yaxis[s2].crosshairs.opposite;
        e2.yaxisOffX = i2 ? t2.layout.gridWidth + 1 : 1;
        const a2 = i2 ? `apexcharts-yaxistooltip apexcharts-yaxistooltip-${s2} apexcharts-yaxistooltip-right` : `apexcharts-yaxistooltip apexcharts-yaxistooltip-${s2} apexcharts-yaxistooltip-left`, o2 = t2.dom.elWrap;
        null === t2.dom.baseEl.querySelector(`.apexcharts-yaxistooltip apexcharts-yaxistooltip-${s2}`) && (e2.yaxisTooltip = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.yaxisTooltip.setAttribute("class", a2 + " apexcharts-theme-" + t2.config.tooltip.theme), o2.appendChild(e2.yaxisTooltip), 0 === s2 && (e2.yaxisTooltipText = []), e2.yaxisTooltipText[s2] = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), e2.yaxisTooltipText[s2].classList.add("apexcharts-yaxistooltip-text"), e2.yaxisTooltip.appendChild(e2.yaxisTooltipText[s2]));
      }
    }
    setXCrosshairWidth() {
      var t2, e2;
      const s2 = this.w, i2 = this.ttCtx, a2 = i2.getElXCrosshairs();
      if (i2.xcrosshairsWidth = parseInt(s2.config.xaxis.crosshairs.width, 10), s2.globals.comboCharts) {
        const t3 = s2.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== t3 && "barWidth" === s2.config.xaxis.crosshairs.width) {
          const s3 = parseFloat(null != (e2 = t3.getAttribute("barWidth")) ? e2 : "0");
          i2.xcrosshairsWidth = s3;
        } else if ("tickWidth" === s2.config.xaxis.crosshairs.width) {
          const t4 = s2.labelData.labels.length;
          i2.xcrosshairsWidth = s2.layout.gridWidth / t4;
        }
      } else if ("tickWidth" === s2.config.xaxis.crosshairs.width) {
        const t3 = s2.labelData.labels.length;
        i2.xcrosshairsWidth = s2.layout.gridWidth / t3;
      } else if ("barWidth" === s2.config.xaxis.crosshairs.width) {
        const e3 = s2.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== e3) {
          const s3 = parseFloat(null != (t2 = e3.getAttribute("barWidth")) ? t2 : "0");
          i2.xcrosshairsWidth = s3;
        } else i2.xcrosshairsWidth = 1;
      }
      s2.globals.isBarHorizontal && (i2.xcrosshairsWidth = 0), null !== a2 && i2.xcrosshairsWidth > 0 && a2.setAttribute("width", String(i2.xcrosshairsWidth));
    }
    handleYCrosshair() {
      const t2 = this.w, e2 = this.ttCtx;
      e2.ycrosshairs = t2.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e2.ycrosshairsHidden = t2.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    }
    drawYaxisTooltipText(t2, e2, s2) {
      const i2 = this.ttCtx, a2 = this.w, o2 = a2.globals, r2 = o2.seriesYAxisMap[t2];
      if (i2.yaxisTooltips[t2] && r2.length > 0) {
        const n2 = a2.formatters.yLabelFormatters[t2], l2 = i2.getElGrid();
        if (!l2) return;
        const h2 = l2.getBoundingClientRect(), c2 = r2[0];
        let d2 = 0;
        s2.yRatio.length > 1 && (d2 = c2);
        const g2 = (e2 - h2.top) * s2.yRatio[d2], p2 = o2.maxYArr[c2] - o2.minYArr[c2];
        let u2 = o2.minYArr[c2] + (p2 - g2);
        a2.config.yaxis[t2].reversed && (u2 = o2.maxYArr[c2] - (p2 - g2)), i2.tooltipPosition.moveYCrosshairs(e2 - h2.top), i2.yaxisTooltipText[t2].innerHTML = n2(u2), i2.tooltipPosition.moveYAxisTooltip(t2);
      }
    }
  }
  class Ht {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.tConfig = t2.config.tooltip, this.tooltipUtil = new Et(this), this.tooltipLabels = new It(this), this.tooltipPosition = new Xt(this), this.marker = new zt(this), this.intersect = new Yt(this), this.axesTooltip = new Bt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.xaxisTooltipText = null, this.yaxisTooltip = null, this.yaxisTooltipText = null, this.yaxisTTEls = null, this.xaxisOffY = 0, this.yaxisOffX = 0, this.xcrosshairsWidth = 0, this.ycrosshairs = null, this.ycrosshairsHidden = null, this.tooltip = null, this.e = null, this.isBarShared = !t2.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now(), this.dimensionUpdateScheduled = false, this.xyRatios = null, this.isXAxisTooltipEnabled = false, this.yaxisTooltips = [], this.allTooltipSeriesGroups = [], this.xAxisTicksPositions = null, this.dataPointsDividedHeight = 0, this.dataPointsDividedWidth = 0, this.tooltipTitle = null, this.legendLabels = null, this.ttItems = null, this.seriesBound = null, this.seriesHoverTimeout = void 0, this.clientX = 0, this.clientY = 0, this.barSeriesHeight = 0, this.tooltipRect = { x: 0, y: 0, ttWidth: 0, ttHeight: 0 };
    }
    setupDimensionCache() {
      const t2 = this.w, e2 = this.getElTooltip();
      e2 && (this.updateDimensionCache(), "undefined" == typeof ResizeObserver || t2.globals.resizeObserver || (t2.globals.resizeObserver = new ResizeObserver(() => {
        this.dimensionUpdateScheduled || (this.dimensionUpdateScheduled = true, requestAnimationFrame(() => {
          this.updateDimensionCache(), this.dimensionUpdateScheduled = false;
        }));
      }), t2.globals.resizeObserver.observe(e2)));
    }
    updateDimensionCache() {
      const t2 = this.w, e2 = this.getElTooltip();
      if (!e2) return;
      const s2 = e2.getBoundingClientRect();
      t2.globals.dimensionCache.tooltip = { width: s2.width, height: s2.height, lastUpdate: Date.now() };
    }
    getCachedDimensions() {
      const t2 = this.w;
      if (t2.globals.dimensionCache.tooltip) {
        const e3 = t2.globals.dimensionCache.tooltip;
        if (Date.now() - e3.lastUpdate < 1e3) return { ttWidth: e3.width, ttHeight: e3.height };
      }
      this.updateDimensionCache();
      const e2 = t2.globals.dimensionCache.tooltip;
      return e2 ? { ttWidth: e2.width, ttHeight: e2.height } : { ttWidth: 0, ttHeight: 0 };
    }
    getElTooltip(t2) {
      return t2 || (t2 = this), t2.w.dom.baseEl ? t2.w.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    }
    getElXCrosshairs() {
      return this.w.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    }
    getElGrid() {
      return this.w.dom.baseEl.querySelector(".apexcharts-grid");
    }
    drawTooltip(t2) {
      const e2 = this.w;
      this.xyRatios = t2, this.isXAxisTooltipEnabled = e2.config.xaxis.tooltip.enabled && e2.globals.axisCharts, this.yaxisTooltips = e2.config.yaxis.map((t3) => !!(t3.show && t3.tooltip.enabled && e2.globals.axisCharts)), this.allTooltipSeriesGroups = [], e2.globals.axisCharts || (this.showTooltipTitle = false);
      const s2 = this.getElTooltip();
      (null == s2 ? void 0 : s2.parentNode) && s2.parentNode.removeChild(s2), this.tooltipTitle = null;
      const i2 = b.createElementNS("http://www.w3.org/1999/xhtml", "div");
      i2.classList.add("apexcharts-tooltip"), e2.config.tooltip.cssClass && i2.classList.add(e2.config.tooltip.cssClass), i2.classList.add(`apexcharts-theme-${this.tConfig.theme || "light"}`), this.tConfig.fillSeriesColor && i2.classList.add("apexcharts-tooltip-fill-series"), this.tConfig.style && this.tConfig.style.background && i2.style.setProperty("--apx-tt-bg", this.tConfig.style.background);
      const a2 = this.tConfig.shared && e2.config.series.length > 1 && !e2.globals.isBarHorizontal;
      if (this.tConfig.arrow && !this.tConfig.followCursor && !this.tConfig.fixed.enabled && !a2 && !this.tConfig.fillSeriesColor && e2.globals.axisCharts) {
        const t3 = b.createElementNS("http://www.w3.org/1999/xhtml", "div");
        t3.classList.add("apexcharts-tooltip-arrow"), i2.appendChild(t3);
      }
      if (e2.config.chart.accessibility.enabled && e2.config.chart.accessibility.announcements.enabled && (i2.setAttribute("role", "tooltip"), i2.setAttribute("aria-live", "polite"), i2.setAttribute("aria-atomic", "true"), i2.setAttribute("aria-hidden", "true")), e2.dom.elWrap.appendChild(i2), e2.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        const t3 = new K(this.w, this.ctx, void 0);
        this.xAxisTicksPositions = t3.getXAxisTicksPositions();
      }
      if (!e2.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e2.config.chart.type || this.tConfig.shared || (this.showOnIntersect = true), 0 !== e2.config.markers.size && 0 !== e2.globals.markers.largestSize || this.marker.drawDynamicPoints(), e2.globals.collapsedSeries.length === e2.seriesData.series.length) return;
      this.dataPointsDividedHeight = e2.layout.gridHeight / e2.globals.dataPoints, this.dataPointsDividedWidth = e2.layout.gridWidth / e2.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = b.createElementNS("http://www.w3.org/1999/xhtml", "div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i2.appendChild(this.tooltipTitle));
      let o2 = e2.seriesData.series.length;
      (e2.globals.xyCharts || e2.globals.comboCharts) && this.tConfig.shared && (o2 = this.showOnIntersect ? 1 : e2.seriesData.series.length), this.legendLabels = e2.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(o2), this.addSVGEvents(), this.setupDimensionCache();
    }
    createTTElements(t2) {
      const e2 = this.w, s2 = [], i2 = this.getElTooltip();
      if (!i2) return s2;
      for (let a2 = 0; a2 < t2; a2++) {
        const o2 = b.createElementNS("http://www.w3.org/1999/xhtml", "div");
        o2.classList.add("apexcharts-tooltip-series-group", `apexcharts-tooltip-series-group-${a2}`), o2.style.order = String(e2.config.tooltip.inverseOrder ? t2 - a2 : a2 + 1);
        const r2 = b.createElementNS("http://www.w3.org/1999/xhtml", "span");
        r2.classList.add("apexcharts-tooltip-marker"), e2.config.tooltip.fillSeriesColor ? r2.style.backgroundColor = e2.globals.colors[a2] : r2.style.color = e2.globals.colors[a2];
        const n2 = e2.config.markers.shape;
        let l2 = n2;
        Array.isArray(n2) && (l2 = n2[a2]), r2.setAttribute("shape", l2), r2.innerHTML = Rt(l2), o2.appendChild(r2);
        const h2 = b.createElementNS("http://www.w3.org/1999/xhtml", "div");
        h2.classList.add("apexcharts-tooltip-text"), h2.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, h2.style.fontSize = this.tConfig.style.fontSize, ["y", "goals", "z"].forEach((t3) => {
          const e3 = b.createElementNS("http://www.w3.org/1999/xhtml", "div");
          e3.classList.add(`apexcharts-tooltip-${t3}-group`);
          const s3 = b.createElementNS("http://www.w3.org/1999/xhtml", "span");
          s3.classList.add(`apexcharts-tooltip-text-${t3}-label`), e3.appendChild(s3);
          const i3 = b.createElementNS("http://www.w3.org/1999/xhtml", "span");
          i3.classList.add(`apexcharts-tooltip-text-${t3}-value`), e3.appendChild(i3), h2.appendChild(e3);
        }), o2.appendChild(h2), i2.appendChild(o2), s2.push(o2);
      }
      return s2;
    }
    addSVGEvents() {
      const t2 = this.w, e2 = t2.config.chart.type, s2 = this.getElTooltip();
      if (!s2) return;
      const i2 = !("bar" !== e2 && "candlestick" !== e2 && "boxPlot" !== e2 && "violin" !== e2 && "rangeBar" !== e2), a2 = "area" === e2 || "line" === e2 || "scatter" === e2 || "bubble" === e2 || "radar" === e2, o2 = t2.dom.Paper.node, r2 = this.getElGrid();
      r2 && (this.seriesBound = r2.getBoundingClientRect());
      const n2 = [], l2 = [], h2 = { hoverArea: o2, elGrid: r2, tooltipEl: s2, tooltipY: n2, tooltipX: l2, ttItems: this.ttItems };
      let c2;
      if (t2.globals.axisCharts && (a2 ? c2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : i2 ? c2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-violin-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e2 && "treemap" !== e2 || (c2 = t2.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), c2 && c2.length)) for (let t3 = 0; t3 < c2.length; t3++) n2.push(c2[t3].getAttribute("cy")), l2.push(c2[t3].getAttribute("cx"));
      if (t2.globals.xyCharts && !this.showOnIntersect || t2.globals.comboCharts && !this.showOnIntersect || i2 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([o2], h2);
      else if (i2 && !t2.globals.comboCharts || a2 && this.showOnIntersect) this.addDatapointEventsListeners(h2);
      else if (!t2.globals.axisCharts || "heatmap" === e2 || "treemap" === e2) {
        const e3 = t2.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(e3, h2);
      }
      if (this.showOnIntersect) {
        const e3 = t2.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        e3.length > 0 && this.addPathsEventListeners(e3, h2), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(h2);
      }
    }
    drawFixedTooltipRect() {
      const t2 = this.w, e2 = this.getElTooltip();
      if (!e2) return { x: 0, y: 0, ttWidth: 0, ttHeight: 0 };
      const s2 = e2.getBoundingClientRect(), i2 = s2.width + 10, a2 = s2.height + 10;
      let o2 = this.tConfig.fixed.offsetX, r2 = this.tConfig.fixed.offsetY;
      const n2 = this.tConfig.fixed.position.toLowerCase();
      return n2.indexOf("right") > -1 && (o2 = o2 + t2.globals.svgWidth - i2 + 10), n2.indexOf("bottom") > -1 && (r2 = r2 + t2.globals.svgHeight - a2 - 10), this.tooltipPosition.applyTooltipPosition(e2, { x: o2, y: r2 }), { x: o2, y: r2, ttWidth: i2, ttHeight: a2 };
    }
    addDatapointEventsListeners(t2) {
      const e2 = this.w.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e2, t2);
    }
    addPathsEventListeners(t2, e2) {
      const s2 = this;
      for (let i2 = 0; i2 < t2.length; i2++) {
        const a2 = { paths: t2[i2], tooltipEl: e2.tooltipEl, tooltipY: e2.tooltipY, tooltipX: e2.tooltipX, elGrid: e2.elGrid, hoverArea: e2.hoverArea, ttItems: e2.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((e3) => t2[i2].addEventListener(e3, s2.onSeriesHover.bind(s2, a2), { capture: false, passive: true }));
      }
    }
    onSeriesHover(t2, e2) {
      const s2 = Date.now() - this.lastHoverTime;
      s2 >= 20 ? this.seriesHover(t2, e2) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(() => {
        this.seriesHover(t2, e2);
      }, 20 - s2));
    }
    seriesHover(t2, e2) {
      this.lastHoverTime = Date.now();
      let s2 = [];
      const i2 = this.w;
      i2.config.chart.group && (s2 = this.ctx.getGroupedCharts()), i2.globals.axisCharts && (i2.globals.minX === -1 / 0 && i2.globals.maxX === 1 / 0 || 0 === i2.globals.dataPoints) || (s2.length ? s2.forEach((s3) => {
        const i3 = this.getElTooltip(s3), a2 = { paths: t2.paths, tooltipEl: i3, tooltipY: t2.tooltipY, tooltipX: t2.tooltipX, elGrid: t2.elGrid, hoverArea: t2.hoverArea, ttItems: s3.w.globals.tooltip.ttItems };
        s3.w.globals.minX === this.w.globals.minX && s3.w.globals.maxX === this.w.globals.maxX && s3.w.globals.tooltip.seriesHoverByContext({ chartCtx: s3, ttCtx: s3.w.globals.tooltip, opt: a2, e: e2 });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t2, e: e2 }));
    }
    seriesHoverByContext({ chartCtx: t2, ttCtx: e2, opt: s2, e: i2 }) {
      const a2 = t2.w;
      if (!this.getElTooltip(t2)) return;
      const o2 = e2.getCachedDimensions();
      if (e2.tooltipRect = { x: 0, y: 0, ttWidth: o2.ttWidth, ttHeight: o2.ttHeight }, e2.e = i2, e2.tooltipUtil.hasBars() && !a2.globals.comboCharts && !e2.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries) {
        new lt(t2.w).toggleSeriesOnHover(i2, i2.target.parentNode);
      }
      a2.globals.axisCharts ? e2.axisChartsTooltips({ e: i2, opt: s2, tooltipRect: e2.tooltipRect }) : e2.nonAxisChartsTooltips({ e: i2, opt: s2, tooltipRect: e2.tooltipRect }), e2.fixedTooltip && e2.drawFixedTooltipRect();
    }
    axisChartsTooltips({ e: t2, opt: e2 }) {
      var s2;
      const i2 = this.w;
      let a2, o2;
      const r2 = e2.elGrid.getBoundingClientRect(), n2 = "touchmove" === t2.type ? t2.touches[0].clientX : t2.clientX, l2 = "touchmove" === t2.type ? t2.touches[0].clientY : t2.clientY;
      if (this.clientY = l2, this.clientX = n2, i2.interact.capturedSeriesIndex = -1, i2.interact.capturedDataPointIndex = -1, l2 < r2.top || l2 > r2.top + r2.height) return void this.handleMouseOut(e2);
      if (Array.isArray(this.tConfig.enabledOnSeries) && !i2.config.tooltip.shared) {
        const t3 = parseInt(e2.paths.getAttribute("index"), 10);
        if (this.tConfig.enabledOnSeries.indexOf(t3) < 0) return void this.handleMouseOut(e2);
      }
      const h2 = this.getElTooltip();
      if (!h2) return;
      const c2 = this.getElXCrosshairs();
      let d2 = [];
      i2.config.chart.group && (d2 = this.ctx.getSyncedCharts());
      const g2 = i2.globals.xyCharts || "bar" === i2.config.chart.type && !i2.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || i2.globals.comboCharts && this.tooltipUtil.hasBars();
      if ("mousemove" === t2.type || "touchmove" === t2.type || "mouseup" === t2.type) {
        if (i2.globals.collapsedSeries.length + i2.globals.ancillaryCollapsedSeries.length === i2.seriesData.series.length) return;
        null !== c2 && c2.classList.add("apexcharts-active");
        const r3 = null == (s2 = this.yaxisTooltips) ? void 0 : s2.filter((t3) => true === t3), p2 = this.ycrosshairs;
        if (null !== p2 && (null == r3 ? void 0 : r3.length) && p2.classList.add("apexcharts-active"), g2 && !this.showOnIntersect || d2.length > 1) this.handleStickyTooltip(t2, n2, l2, e2);
        else if ("heatmap" === i2.config.chart.type || "treemap" === i2.config.chart.type) {
          const s3 = this.intersect.handleHeatTreeTooltip({ e: t2, opt: e2, x: a2, y: o2, type: i2.config.chart.type });
          a2 = s3.x, o2 = s3.y, h2.style.left = a2 + "px", h2.style.top = o2 + "px";
        } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: t2, opt: e2 }), this.tooltipUtil.hasMarkers(0) && this.intersect.handleMarkerTooltip({ e: t2, opt: e2, x: a2, y: o2 });
        if (this.yaxisTooltips && this.yaxisTooltips.length) for (let t3 = 0; t3 < i2.config.yaxis.length; t3++) this.axesTooltip.drawYaxisTooltipText(t3, l2, this.xyRatios);
        i2.dom.baseEl.classList.add("apexcharts-tooltip-active"), e2.tooltipEl.classList.add("apexcharts-active"), i2.config.chart.accessibility.enabled && i2.config.chart.accessibility.announcements.enabled && e2.tooltipEl.removeAttribute("aria-hidden");
      } else "mouseout" !== t2.type && "touchend" !== t2.type || this.handleMouseOut(e2);
    }
    nonAxisChartsTooltips({ e: t2, opt: e2, tooltipRect: s2 }) {
      var i2, a2, o2, r2;
      const n2 = this.w, l2 = e2.paths.getAttribute("rel"), h2 = this.getElTooltip();
      if (!h2) return;
      const c2 = n2.dom.elWrap.getBoundingClientRect();
      if ("mousemove" === t2.type || "touchmove" === t2.type) {
        let t3, r3;
        n2.dom.baseEl.classList.add("apexcharts-tooltip-active"), h2.classList.add("apexcharts-active"), n2.config.chart.accessibility.enabled && n2.config.chart.accessibility.announcements.enabled && h2.removeAttribute("aria-hidden"), this.tooltipLabels.drawSeriesTexts({ ttItems: e2.ttItems, i: parseInt(l2, 10) - 1, shared: false });
        const d2 = e2.paths.querySelector("path[data\\:cx]") || e2.paths;
        if (n2.config.tooltip.intersect && d2.hasAttribute("data:cx") && d2.hasAttribute("data:cy")) {
          const e3 = n2.dom.Paper.node.getBoundingClientRect();
          t3 = e3.left - c2.left + parseFloat(d2.getAttribute("data:cx")) - s2.ttWidth / 2, r3 = e3.top - c2.top + parseFloat(d2.getAttribute("data:cy")) - s2.ttHeight - 10;
        } else t3 = (null != (i2 = n2.interact.clientX) ? i2 : 0) - c2.left - s2.ttWidth / 2, r3 = (null != (a2 = n2.interact.clientY) ? a2 : 0) - c2.top - s2.ttHeight - 10;
        if (h2.style.left = t3 + "px", h2.style.top = r3 + "px", n2.config.legend.tooltipHoverFormatter) {
          const t4 = n2.config.legend.tooltipHoverFormatter, e3 = l2 - 1, s3 = null == (o2 = this.legendLabels) ? void 0 : o2[e3];
          if (!s3) return;
          const i3 = t4(s3.getAttribute("data:default-text"), { seriesIndex: e3, dataPointIndex: e3, w: n2 });
          s3.innerHTML = i3;
        }
      } else "mouseout" !== t2.type && "touchend" !== t2.type || (h2.classList.remove("apexcharts-active"), n2.dom.baseEl.classList.remove("apexcharts-tooltip-active"), n2.config.legend.tooltipHoverFormatter && (null == (r2 = this.legendLabels) || r2.forEach((t3) => {
        const e3 = t3.getAttribute("data:default-text");
        t3.innerHTML = decodeURIComponent(null != e3 ? e3 : "");
      })));
    }
    handleStickyTooltip(t2, e2, s2, i2) {
      const a2 = this.w, o2 = this.tooltipUtil.getNearestValues({ context: this, hoverArea: i2.hoverArea, elGrid: i2.elGrid, clientX: e2, clientY: s2 }), r2 = o2.j;
      let n2 = o2.capturedSeries;
      null !== n2 && a2.globals.collapsedSeriesIndices.includes(null != n2 ? n2 : -1) && (n2 = null);
      const l2 = i2.elGrid.getBoundingClientRect();
      if (o2.hoverX < 0 || o2.hoverX > l2.width) this.handleMouseOut(i2);
      else if (null !== n2) this.handleStickyCapturedSeries(t2, null != n2 ? n2 : -1, i2, null != r2 ? r2 : 0);
      else if (this.tooltipUtil.isXoverlap(null != r2 ? r2 : 0) || a2.globals.isBarHorizontal) {
        const e3 = a2.seriesData.series.findIndex((t3, e4) => !a2.globals.collapsedSeriesIndices.includes(e4));
        this.create(t2, this, e3, null != r2 ? r2 : 0, i2.ttItems);
      }
    }
    handleStickyCapturedSeries(t2, e2, s2, i2) {
      const a2 = this.w;
      if (!this.tConfig.shared) {
        if (null === a2.seriesData.series[e2][i2]) return void this.handleMouseOut(s2);
      }
      if (void 0 !== a2.seriesData.series[e2][i2]) this.tConfig.shared && this.tooltipUtil.isXoverlap(i2) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t2, this, e2, i2, s2.ttItems) : this.create(t2, this, e2, i2, s2.ttItems, false);
      else if (this.tooltipUtil.isXoverlap(i2)) {
        const e3 = a2.seriesData.series.findIndex((t3, e4) => !a2.globals.collapsedSeriesIndices.includes(e4));
        this.create(t2, this, e3, i2, s2.ttItems);
      }
    }
    deactivateHoverFilter() {
      const t2 = this.w, e2 = new N(this.w, this.ctx), s2 = t2.dom.Paper.find(".apexcharts-bar-area");
      for (let t3 = 0; t3 < s2.length; t3++) e2.pathMouseLeave(s2[t3], void 0);
    }
    handleMouseOut(t2) {
      var e2, s2;
      const i2 = this.w, a2 = this.getElXCrosshairs();
      i2.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t2.tooltipEl.classList.remove("apexcharts-active"), delete t2.tooltipEl.dataset.positioned, i2.config.chart.accessibility.enabled && i2.config.chart.accessibility.announcements.enabled && t2.tooltipEl.setAttribute("aria-hidden", "true"), this.deactivateHoverFilter(), "bubble" !== i2.config.chart.type && this.marker.resetPointsSize(), null !== a2 && a2.classList.remove("apexcharts-active");
      const o2 = this.ycrosshairs;
      if (null !== o2 && o2.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && (null == (e2 = this.xaxisTooltip) || e2.classList.remove("apexcharts-active")), this.yaxisTooltips && this.yaxisTooltips.length) {
        null === this.yaxisTTEls && (this.yaxisTTEls = [...i2.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip")]);
        for (let t3 = 0; t3 < this.yaxisTTEls.length; t3++) this.yaxisTTEls[t3].classList.remove("apexcharts-active");
      }
      i2.config.legend.tooltipHoverFormatter && (null == (s2 = this.legendLabels) || s2.forEach((t3) => {
        const e3 = t3.getAttribute("data:default-text");
        t3.innerHTML = decodeURIComponent(null != e3 ? e3 : "");
      }));
    }
    markerClick(t2, e2, s2) {
      const i2 = this.w;
      "function" == typeof i2.config.chart.events.markerClick && i2.config.chart.events.markerClick(t2, this.ctx, { seriesIndex: e2, dataPointIndex: s2, w: i2 }), this.ctx.events.fireEvent("markerClick", [t2, this.ctx, { seriesIndex: e2, dataPointIndex: s2, w: i2 }]);
    }
    create(t2, e2, s2, i2, a2, o2 = null) {
      var r2, h2, c2, d2, g2, p2, u2, x2, f2, b2, m2, y2, w2, v2, A2, C2, S2, k2, D2;
      const L2 = this.w, M2 = e2;
      "mouseup" === t2.type && this.markerClick(t2, s2, i2), null === o2 && (o2 = this.tConfig.shared);
      const P2 = this.tooltipUtil.hasMarkers(s2), T2 = this.tooltipUtil.getElBars(), F2 = () => {
        L2.globals.markers.largestSize > 0 ? M2.marker.enlargePoints(i2) : M2.tooltipPosition.moveDynamicPointsOnHover(i2);
      };
      if (L2.config.legend.tooltipHoverFormatter) {
        const t3 = L2.config.legend.tooltipHoverFormatter, e3 = Array.from(null != (r2 = this.legendLabels) ? r2 : []);
        e3.forEach((t4) => {
          const e4 = t4.getAttribute("data:default-text");
          t4.innerHTML = decodeURIComponent(null != e4 ? e4 : "");
        });
        for (let a3 = 0; a3 < e3.length; a3++) {
          const r3 = e3[a3], n2 = parseInt(null != (h2 = r3.getAttribute("i")) ? h2 : "", 10), l2 = decodeURIComponent(null != (c2 = r3.getAttribute("data:default-text")) ? c2 : ""), d3 = t3(l2, { seriesIndex: o2 ? n2 : s2, dataPointIndex: i2, w: L2 });
          if (o2) r3.innerHTML = L2.globals.collapsedSeriesIndices.indexOf(n2) < 0 ? d3 : l2;
          else if (r3.innerHTML = n2 === s2 ? d3 : l2, s2 === n2) break;
        }
      }
      const E2 = L2.rangeData, I2 = n(n({ ttItems: a2, i: s2, j: i2 }, void 0 !== (null == (u2 = null == (p2 = null == (g2 = null == (d2 = E2.seriesRange) ? void 0 : d2[s2]) ? void 0 : g2[i2]) ? void 0 : p2.y[0]) ? void 0 : u2.y1) && { y1: null == (m2 = null == (b2 = null == (f2 = null == (x2 = E2.seriesRange) ? void 0 : x2[s2]) ? void 0 : f2[i2]) ? void 0 : b2.y[0]) ? void 0 : m2.y1 }), void 0 !== (null == (A2 = null == (v2 = null == (w2 = null == (y2 = E2.seriesRange) ? void 0 : y2[s2]) ? void 0 : w2[i2]) ? void 0 : v2.y[0]) ? void 0 : A2.y2) && { y2: null == (D2 = null == (k2 = null == (S2 = null == (C2 = E2.seriesRange) ? void 0 : C2[s2]) ? void 0 : S2[i2]) ? void 0 : k2.y[0]) ? void 0 : D2.y2 });
      if (o2) {
        if (M2.tooltipLabels.drawSeriesTexts(l(n({}, I2), { shared: !this.showOnIntersect && this.tConfig.shared })), P2) F2();
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight([...T2]), this.barSeriesHeight > 0)) {
          const t3 = new N(this.w, this.ctx), e3 = L2.dom.Paper.find(`.apexcharts-bar-area[j='${i2}']`);
          this.deactivateHoverFilter();
          M2.tooltipUtil.getAllMarkers(true).length && !this.barSeriesHeight && F2(), M2.tooltipPosition.moveStickyTooltipOverBars(i2, s2);
          for (let s3 = 0; s3 < e3.length; s3++) t3.pathMouseEnter(e3[s3], void 0);
        }
      } else M2.tooltipLabels.drawSeriesTexts(n({ shared: false }, I2)), this.tooltipUtil.hasBars() && M2.tooltipPosition.moveStickyTooltipOverBars(i2, s2), P2 && M2.tooltipPosition.moveMarkers(s2, i2);
    }
  }
  class Nt {
    constructor(t2) {
      this.node = t2, t2 && (t2.instance = this), this._listeners = [], this._filter = null;
    }
    attr(t2, e2) {
      if ("string" == typeof t2 && void 0 === e2) return this.node.getAttribute(t2);
      const s2 = "string" == typeof t2 ? { [t2]: e2 } : t2;
      for (const t3 in s2) {
        let e3 = s2[t3];
        null === e3 ? this.node.removeAttribute(t3) : void 0 !== e3 && ("number" == typeof e3 && isNaN(e3) && (e3 = 0), this.node.setAttribute(t3, e3));
      }
      if ("text" === this.node.nodeName && null != s2.x) {
        const t3 = this.node.querySelectorAll("tspan[data-newline]");
        for (let e3 = 0; e3 < t3.length; e3++) t3[e3].setAttribute("x", s2.x);
      }
      return this;
    }
    css(t2) {
      for (const e2 in t2) this.node.style[e2] = t2[e2];
      return this;
    }
    fill(t2) {
      return "object" == typeof t2 ? this.attr(t2) : this.attr("fill", t2);
    }
    stroke(t2) {
      return "object" == typeof t2 ? (void 0 !== t2.color && this.attr("stroke", t2.color), void 0 !== t2.width && this.attr("stroke-width", t2.width), void 0 !== t2.dasharray && this.attr("stroke-dasharray", t2.dasharray), void 0 !== t2.linecap && this.attr("stroke-linecap", t2.linecap), void 0 !== t2.opacity && this.attr("stroke-opacity", t2.opacity), this) : this.attr("stroke", t2);
    }
    size(t2, e2) {
      return this.attr({ width: t2, height: e2 });
    }
    move(t2, e2) {
      return this.attr({ x: t2, y: e2 });
    }
    center(t2, e2) {
      if ("g" === this.node.nodeName) {
        const s2 = this.bbox(), i2 = t2 - (s2.x + s2.width / 2), a2 = e2 - (s2.y + s2.height / 2);
        return this.attr("transform", `translate(${i2}, ${a2})`);
      }
      return this.attr({ cx: t2, cy: e2 });
    }
    add(t2) {
      return this.node.appendChild(t2.node || t2), this;
    }
    addTo(t2) {
      return (t2.node || t2).appendChild(this.node), this;
    }
    remove() {
      return this.node.parentNode && this.node.parentNode.removeChild(this.node), this;
    }
    clear() {
      for (; this.node.firstChild; ) this.node.removeChild(this.node.firstChild);
      return this;
    }
    find(t2) {
      return Array.from(this.node.querySelectorAll(t2)).map((t3) => t3.instance || new Nt(t3));
    }
    findOne(t2) {
      const e2 = this.node.querySelector(t2);
      return e2 ? e2.instance || new Nt(e2) : null;
    }
    on(t2, e2) {
      const s2 = t2.split(".")[0];
      return this._listeners.push({ event: t2, eventType: s2, handler: e2 }), this.node.addEventListener(s2, e2), this;
    }
    off(t2, e2) {
      if (t2 || e2) if (t2 && !e2) {
        const e3 = t2.split(".")[0];
        this._listeners = this._listeners.filter((t3) => t3.eventType !== e3 || (this.node.removeEventListener(t3.eventType, t3.handler), false));
      } else {
        const s2 = t2.split(".")[0];
        this._listeners = this._listeners.filter((t3) => t3.eventType !== s2 || t3.handler !== e2 || (this.node.removeEventListener(t3.eventType, t3.handler), false));
      }
      else this._listeners.forEach((t3) => {
        this.node.removeEventListener(t3.eventType, t3.handler);
      }), this._listeners = [];
      return this;
    }
    each(t2, e2) {
      return Array.from(this.node.children).forEach((s2) => {
        const i2 = s2.instance || new Nt(s2);
        t2.call(i2), e2 && i2.each(t2, e2);
      }), this;
    }
    removeClass(t2) {
      return "*" === t2 ? this.node.removeAttribute("class") : this.node.classList.remove(t2), this;
    }
    children() {
      return Array.from(this.node.childNodes).filter((t2) => 1 === t2.nodeType).map((t2) => t2.instance || new Nt(t2));
    }
    hide() {
      return this.node.style.display = "none", this;
    }
    show() {
      return this.node.style.display = "", this;
    }
    bbox() {
      if ("function" == typeof this.node.getBBox) try {
        return this.node.getBBox();
      } catch (t2) {
      }
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    tspan(t2) {
      const e2 = b.createElementNS("http://www.w3.org/2000/svg", "tspan");
      return e2.textContent = t2, this.node.appendChild(e2), new Nt(e2);
    }
    plot(t2) {
      return "string" == typeof t2 && this.attr("d", t2), this;
    }
    animate() {
      throw new Error("Animation module not loaded");
    }
    filterWith() {
      throw new Error("Filter module not loaded");
    }
    unfilter(t2) {
      return this._filter && (this.node.removeAttribute("filter"), t2 && this._filter.node && this._filter.node.parentNode && this._filter.node.parentNode.removeChild(this._filter.node), this._filter = null), this;
    }
    filterer() {
      return this._filter;
    }
  }
  let Wt = 0;
  class Ot extends Nt {
    constructor(t2, e2, s2) {
      const i2 = "radial" === e2 ? "radialGradient" : "linearGradient";
      super(b.createElementNS(W, i2)), this._id = "SvgjsGradient" + ++Wt, this.attr("id", this._id), "function" == typeof s2 && s2(new _t(this));
      let a2 = t2.node.querySelector("defs");
      a2 || (a2 = b.createElementNS(W, "defs"), t2.node.appendChild(a2)), a2.appendChild(this.node);
    }
    stop(t2, e2, s2) {
      const i2 = b.createElementNS(W, "stop");
      return i2.setAttribute("offset", t2), i2.setAttribute("stop-color", e2), void 0 !== s2 && i2.setAttribute("stop-opacity", String(s2)), this.node.appendChild(i2), this;
    }
    from(t2, e2) {
      return this.attr({ x1: t2, y1: e2 });
    }
    to(t2, e2) {
      return this.attr({ x2: t2, y2: e2 });
    }
    url() {
      return "url(#" + this._id + ")";
    }
    toString() {
      return this.url();
    }
    valueOf() {
      return this.url();
    }
    fill() {
      return this.url();
    }
  }
  class _t {
    constructor(t2) {
      this.gradient = t2;
    }
    stop(t2, e2, s2) {
      return this.gradient.stop(t2, e2, s2), this;
    }
  }
  let $t = 0;
  class Gt extends Nt {
    constructor(t2, e2, s2, i2) {
      if (super(b.createElementNS(W, "pattern")), this._id = "SvgjsPattern" + ++$t, this.attr({ id: this._id, width: e2, height: s2, patternUnits: "userSpaceOnUse" }), "function" == typeof i2) {
        i2(new jt(this.node));
      }
      let a2 = t2.node.querySelector("defs");
      a2 || (a2 = b.createElementNS(W, "defs"), t2.node.appendChild(a2)), a2.appendChild(this.node);
    }
    url() {
      return "url(#" + this._id + ")";
    }
    toString() {
      return this.url();
    }
    valueOf() {
      return this.url();
    }
    fill() {
      return this.url();
    }
  }
  class jt extends Nt {
    line(t2, e2, s2, i2) {
      const a2 = this._make("line");
      return void 0 !== t2 && a2.attr({ x1: t2, y1: e2, x2: s2, y2: i2 }), a2;
    }
    rect(t2, e2) {
      const s2 = this._make("rect");
      return void 0 !== t2 && s2.attr({ width: t2, height: e2 }), s2;
    }
    circle(t2) {
      const e2 = this._make("circle");
      return void 0 !== t2 && e2.attr({ r: t2 / 2, cx: t2 / 2, cy: t2 / 2 }), e2;
    }
    path(t2) {
      const e2 = this._make("path");
      return t2 && e2.attr("d", t2), e2;
    }
    polygon(t2) {
      const e2 = this._make("polygon");
      return t2 && e2.attr("points", t2), e2;
    }
    group() {
      return this._makeContainer("g");
    }
    defs() {
      return this._makeContainer("defs");
    }
    plain(t2) {
      const e2 = b.createElementNS(W, "text");
      e2.textContent = t2;
      const s2 = new Nt(e2);
      return this.node.appendChild(e2), s2;
    }
    text(t2) {
      const e2 = b.createElementNS(W, "text"), s2 = new Nt(e2);
      return this.node.appendChild(e2), "function" == typeof t2 && t2(new Vt(e2)), s2;
    }
    image(t2, e2) {
      const s2 = b.createElementNS(W, "image");
      s2.setAttributeNS("http://www.w3.org/1999/xlink", "href", t2);
      const i2 = new Nt(s2);
      if (this.node.appendChild(s2), "function" == typeof e2) {
        const s3 = new Image();
        s3.onload = function() {
          i2.size(s3.width, s3.height), e2.call(i2, { width: s3.width, height: s3.height });
        }, s3.src = t2;
      }
      return i2;
    }
    gradient(t2, e2) {
      return new Ot(this, t2, e2);
    }
    pattern(t2, e2, s2) {
      return new Gt(this, t2, e2, s2);
    }
    _make(t2) {
      const e2 = b.createElementNS(W, t2);
      return this.node.appendChild(e2), new Nt(e2);
    }
    _makeContainer(t2) {
      const e2 = b.createElementNS(W, t2);
      return this.node.appendChild(e2), new jt(e2);
    }
  }
  class Vt {
    constructor(t2) {
      this.textNode = t2;
    }
    tspan(t2) {
      const e2 = b.createElementNS(W, "tspan");
      return e2.textContent = t2, this.textNode.appendChild(e2), new Ut(e2, this.textNode);
    }
  }
  class Ut {
    constructor(t2, e2) {
      this.node = t2, this.textNode = e2;
    }
    newLine() {
      return this.node.setAttribute("dy", "1.1em"), this.node.dataset.newline = "1", this;
    }
  }
  let qt = 0;
  class Zt extends Nt {
    constructor() {
      super(b.createElementNS(W, "filter")), this._id = "SvgjsFilter" + ++qt, this.attr("id", this._id);
    }
    size(t2, e2, s2, i2) {
      return this.attr({ width: t2, height: e2, x: s2, y: i2 });
    }
  }
  class Kt {
    constructor(t2) {
      this.filter = t2;
    }
    colorMatrix(t2) {
      return this._primitive("feColorMatrix", t2);
    }
    offset(t2) {
      return this._primitive("feOffset", t2);
    }
    gaussianBlur(t2) {
      return this._primitive("feGaussianBlur", t2);
    }
    flood(t2) {
      return this._primitive("feFlood", t2);
    }
    composite(t2) {
      return this._primitive("feComposite", t2);
    }
    merge(t2) {
      const e2 = b.createElementNS(W, "feMerge");
      return t2.forEach((t3) => {
        const s2 = b.createElementNS(W, "feMergeNode");
        s2.setAttribute("in", t3), e2.appendChild(s2);
      }), this.filter.node.appendChild(e2), new Nt(e2);
    }
    _primitive(t2, e2) {
      const s2 = b.createElementNS(W, t2);
      for (const t3 in e2) s2.setAttribute(t3, e2[t3]);
      return this.filter.node.appendChild(s2), new Nt(s2);
    }
  }
  function Jt(t2) {
    if (!t2 || "string" != typeof t2) return [["M", 0, 0]];
    const e2 = [], s2 = /([MmLlHhVvCcSsQqTtAaZz])\s*/g, i2 = /[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/gi;
    let a2;
    const o2 = [], r2 = [];
    for (; null !== (a2 = s2.exec(t2)); ) o2.push(a2[1]), r2.push(a2.index);
    for (let s3 = 0; s3 < o2.length; s3++) {
      const a3 = r2[s3] + o2[s3].length, n2 = s3 + 1 < r2.length ? r2[s3 + 1] : t2.length, l2 = t2.substring(a3, n2), h2 = [];
      let c2;
      for (i2.lastIndex = 0; null !== (c2 = i2.exec(l2)); ) h2.push(parseFloat(c2[0]));
      const d2 = o2[s3].toUpperCase();
      if ("Z" === d2) e2.push(["Z"]);
      else if ("M" === d2 || "L" === d2 || "T" === d2) for (let t3 = 0; t3 < h2.length; t3 += 2) e2.push([d2, h2[t3], h2[t3 + 1]]);
      else if ("H" === d2) for (let t3 = 0; t3 < h2.length; t3++) e2.push([d2, h2[t3]]);
      else if ("V" === d2) for (let t3 = 0; t3 < h2.length; t3++) e2.push([d2, h2[t3]]);
      else if ("C" === d2) for (let t3 = 0; t3 < h2.length; t3 += 6) e2.push([d2, h2[t3], h2[t3 + 1], h2[t3 + 2], h2[t3 + 3], h2[t3 + 4], h2[t3 + 5]]);
      else if ("S" === d2 || "Q" === d2) for (let t3 = 0; t3 < h2.length; t3 += 4) e2.push([d2, h2[t3], h2[t3 + 1], h2[t3 + 2], h2[t3 + 3]]);
      else if ("A" === d2) for (let t3 = 0; t3 < h2.length; t3 += 7) e2.push([d2, h2[t3], h2[t3 + 1], h2[t3 + 2], h2[t3 + 3], h2[t3 + 4], h2[t3 + 5], h2[t3 + 6]]);
    }
    return 0 === e2.length && e2.push(["M", 0, 0]), e2;
  }
  function Qt(t2) {
    let e2 = 1 / 0, s2 = 1 / 0, i2 = -1 / 0, a2 = -1 / 0;
    return t2.forEach((t3) => {
      for (let o2 = 1; o2 < t3.length; o2 += 2) if (o2 + 1 <= t3.length) {
        const r2 = t3[o2], n2 = t3[o2 + 1];
        "number" == typeof r2 && "number" == typeof n2 && (r2 < e2 && (e2 = r2), r2 > i2 && (i2 = r2), n2 < s2 && (s2 = n2), n2 > a2 && (a2 = n2));
      }
    }), e2 === 1 / 0 ? { x: 0, y: 0, width: 0, height: 0 } : { x: e2, y: s2, width: i2 - e2, height: a2 - s2 };
  }
  function te(t2) {
    switch (t2[0]) {
      case "z":
      case "Z":
        t2[0] = "L", t2[1] = this.start[0], t2[2] = this.start[1];
        break;
      case "H":
        t2[0] = "L", t2[2] = this.pos[1];
        break;
      case "V":
        t2[0] = "L", t2[2] = t2[1], t2[1] = this.pos[0];
        break;
      case "T":
        t2[0] = "Q", t2[3] = t2[1], t2[4] = t2[2], t2[1] = this.reflection[1], t2[2] = this.reflection[0];
        break;
      case "S":
        t2[0] = "C", t2[6] = t2[4], t2[5] = t2[3], t2[4] = t2[2], t2[3] = t2[1], t2[2] = this.reflection[1], t2[1] = this.reflection[0];
    }
    return t2;
  }
  function ee(t2) {
    var e2 = t2.length;
    return this.pos = [t2[e2 - 2], t2[e2 - 1]], -1 != "SCQT".indexOf(t2[0]) && (this.reflection = [2 * this.pos[0] - t2[e2 - 4], 2 * this.pos[1] - t2[e2 - 3]]), t2;
  }
  function se(t2) {
    var e2, s2 = [t2];
    switch (t2[0]) {
      case "M":
        return this.pos = this.start = [t2[1], t2[2]], s2;
      case "L":
        t2[5] = t2[3] = t2[1], t2[6] = t2[4] = t2[2], t2[1] = this.pos[0], t2[2] = this.pos[1];
        break;
      case "Q":
        t2[6] = t2[4], t2[5] = t2[3], t2[4] = 1 * t2[4] / 3 + 2 * t2[2] / 3, t2[3] = 1 * t2[3] / 3 + 2 * t2[1] / 3, t2[2] = 1 * this.pos[1] / 3 + 2 * t2[2] / 3, t2[1] = 1 * this.pos[0] / 3 + 2 * t2[1] / 3;
        break;
      case "A":
        s2 = (function(t3, e3) {
          var s3, i2, a2, o2, r2, n2, l2, h2, c2, d2, g2, p2, u2, x2, f2, b2, m2, y2, w2, v2, A2, C2, S2, k2, D2, L2, M2 = Math.abs(e3[1]), P2 = Math.abs(e3[2]), T2 = e3[3] % 360, F2 = e3[4], E2 = e3[5], I2 = e3[6], X2 = e3[7], R2 = new O(t3[0], t3[1]), z2 = new O(I2, X2), Y2 = [];
          if (0 === M2 || 0 === P2 || R2.x === z2.x && R2.y === z2.y) return [["C", R2.x, R2.y, z2.x, z2.y, z2.x, z2.y]];
          s3 = new O((R2.x - z2.x) / 2, (R2.y - z2.y) / 2).transform(new _().rotate(T2)), (i2 = s3.x * s3.x / (M2 * M2) + s3.y * s3.y / (P2 * P2)) > 1 && (M2 *= i2 = Math.sqrt(i2), P2 *= i2);
          a2 = new _().rotate(T2).scale(1 / M2, 1 / P2).rotate(-T2), R2 = R2.transform(a2), z2 = z2.transform(a2), o2 = [z2.x - R2.x, z2.y - R2.y], n2 = o2[0] * o2[0] + o2[1] * o2[1], r2 = Math.sqrt(n2), o2[0] /= r2, o2[1] /= r2, l2 = n2 < 4 ? Math.sqrt(1 - n2 / 4) : 0, F2 === E2 && (l2 *= -1);
          h2 = new O((z2.x + R2.x) / 2 + l2 * -o2[1], (z2.y + R2.y) / 2 + l2 * o2[0]), c2 = new O(R2.x - h2.x, R2.y - h2.y), d2 = new O(z2.x - h2.x, z2.y - h2.y), g2 = Math.acos(c2.x / Math.sqrt(c2.x * c2.x + c2.y * c2.y)), c2.y < 0 && (g2 *= -1);
          p2 = Math.acos(d2.x / Math.sqrt(d2.x * d2.x + d2.y * d2.y)), d2.y < 0 && (p2 *= -1);
          E2 && g2 > p2 && (p2 += 2 * Math.PI);
          !E2 && g2 < p2 && (p2 -= 2 * Math.PI);
          for (x2 = Math.ceil(2 * Math.abs(g2 - p2) / Math.PI), b2 = [], m2 = g2, u2 = (p2 - g2) / x2, f2 = 4 * Math.tan(u2 / 4) / 3, A2 = 0; A2 <= x2; A2++) w2 = Math.cos(m2), y2 = Math.sin(m2), v2 = new O(h2.x + w2, h2.y + y2), b2[A2] = [new O(v2.x + f2 * y2, v2.y - f2 * w2), v2, new O(v2.x - f2 * y2, v2.y + f2 * w2)], m2 += u2;
          for (b2[0][0] = b2[0][1].clone(), b2[b2.length - 1][2] = b2[b2.length - 1][1].clone(), a2 = new _().rotate(T2).scale(M2, P2).rotate(-T2), A2 = 0, C2 = b2.length; A2 < C2; A2++) b2[A2][0] = b2[A2][0].transform(a2), b2[A2][1] = b2[A2][1].transform(a2), b2[A2][2] = b2[A2][2].transform(a2);
          for (A2 = 1, C2 = b2.length; A2 < C2; A2++) S2 = (v2 = b2[A2 - 1][2]).x, k2 = v2.y, D2 = (v2 = b2[A2][0]).x, L2 = v2.y, I2 = (v2 = b2[A2][1]).x, X2 = v2.y, Y2.push(["C", S2, k2, D2, L2, I2, X2]);
          return Y2;
        })(null != (e2 = this.pos) ? e2 : [], t2), t2 = s2[0];
    }
    return t2[0] = "C", this.pos = [t2[5], t2[6]], this.reflection = [2 * t2[5] - t2[3], 2 * t2[6] - t2[4]], s2;
  }
  function ie(t2, e2) {
    if (false === e2) return false;
    for (var s2 = e2, i2 = t2.length; s2 < i2; ++s2) if ("M" == t2[s2][0]) return s2;
    return false;
  }
  function ae(t2, e2, s2, i2, a2, o2) {
    for (var r2 = t2.slice(e2, s2 || void 0), n2 = i2.slice(a2, o2 || void 0), l2 = 0, h2 = { pos: [0, 0], start: [0, 0] }, c2 = { pos: [0, 0], start: [0, 0] }; r2[l2] = te.call(h2, r2[l2]), n2[l2] = te.call(c2, n2[l2]), r2[l2][0] != n2[l2][0] || "M" == r2[l2][0] || "A" == r2[l2][0] && (r2[l2][4] != n2[l2][4] || r2[l2][5] != n2[l2][5]) ? (Array.prototype.splice.apply(r2, [l2, 1].concat(se.call(h2, r2[l2]))), Array.prototype.splice.apply(n2, [l2, 1].concat(se.call(c2, n2[l2])))) : (r2[l2] = ee.call(h2, r2[l2]), n2[l2] = ee.call(c2, n2[l2])), ++l2 != r2.length || l2 != n2.length; ) l2 == r2.length && r2.push(["C", h2.pos[0], h2.pos[1], h2.pos[0], h2.pos[1], h2.pos[0], h2.pos[1]]), l2 == n2.length && n2.push(["C", c2.pos[0], c2.pos[1], c2.pos[0], c2.pos[1], c2.pos[0], c2.pos[1]]);
    return { start: r2, dest: n2 };
  }
  function oe(t2, e2) {
    var s2 = (function(t3, e3) {
      for (var s3, i3 = Jt(t3), a3 = Jt(e3), o2 = 0, r2 = 0, n2 = false, l2 = false; false !== o2 || false !== r2; ) {
        if (n2 = ie(i3, false !== o2 && o2 + 1), l2 = ie(a3, false !== r2 && r2 + 1), false === o2) {
          const t4 = Qt(s3.start);
          o2 = 0 == t4.height || 0 == t4.width ? i3.push(i3[0]) - 1 : i3.push(["M", t4.x + t4.width / 2, t4.y + t4.height / 2]) - 1;
        }
        if (false === r2) {
          const t4 = Qt(s3.dest);
          r2 = 0 == t4.height || 0 == t4.width ? a3.push(a3[0]) - 1 : a3.push(["M", t4.x + t4.width / 2, t4.y + t4.height / 2]) - 1;
        }
        s3 = ae(i3, o2, n2, a3, r2, l2), i3 = i3.slice(0, o2).concat(s3.start, false === n2 ? [] : i3.slice(n2)), a3 = a3.slice(0, r2).concat(s3.dest, false === l2 ? [] : a3.slice(l2)), o2 = false !== n2 && o2 + s3.start.length, r2 = false !== l2 && r2 + s3.dest.length;
      }
      return { start: i3, dest: a3 };
    })(t2, e2), i2 = s2.start, a2 = s2.dest;
    return function(t3) {
      var e3 = i2.map(function(e4, s3) {
        return a2[s3].map(function(i3, o2) {
          return 0 === o2 ? i3 : e4[o2] + (a2[s3][o2] - e4[o2]) * t3;
        });
      });
      return e3.map((t4) => t4.join(" ")).join(" ");
    };
  }
  let re = null, ne = null;
  function le(t2, e2) {
    const s2 = new Array(e2);
    if (!c.isBrowser()) {
      const i3 = Qt(Jt(t2)), a2 = i3.x + i3.width / 2, o2 = i3.y + i3.height / 2;
      for (let t3 = 0; t3 < e2; t3++) s2[t3] = { x: a2, y: o2 };
      return s2;
    }
    re || (re = document.createElementNS("http://www.w3.org/2000/svg", "svg"), re.setAttribute("width", "0"), re.setAttribute("height", "0"), re.setAttribute("style", "position:absolute;width:0;height:0;visibility:hidden;pointer-events:none;"), ne = document.createElementNS("http://www.w3.org/2000/svg", "path"), re.appendChild(ne), document.body.appendChild(re)), ne.setAttribute("d", t2 || "M0 0");
    let i2 = 0;
    try {
      i2 = ne.getTotalLength();
    } catch (t3) {
      i2 = 0;
    }
    if (!i2 || !isFinite(i2)) {
      const i3 = Qt(Jt(t2)), a2 = i3.x + i3.width / 2, o2 = i3.y + i3.height / 2;
      for (let t3 = 0; t3 < e2; t3++) s2[t3] = { x: a2, y: o2 };
      return s2;
    }
    for (let t3 = 0; t3 < e2; t3++) try {
      const a2 = ne.getPointAtLength(t3 / e2 * i2);
      s2[t3] = { x: a2.x, y: a2.y };
    } catch (e3) {
      s2[t3] = { x: 0, y: 0 };
    }
    return s2;
  }
  function he(t2) {
    if (!t2 || "string" != typeof t2) return null;
    if ("#" === t2[0]) {
      let e3 = t2.slice(1);
      3 === e3.length && (e3 = e3[0] + e3[0] + e3[1] + e3[1] + e3[2] + e3[2]);
      const s2 = parseInt(e3, 16);
      return [s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2, 1];
    }
    const e2 = t2.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
    return e2 ? [+e2[1], +e2[2], +e2[3], void 0 !== e2[4] ? +e2[4] : 1] : null;
  }
  function ce(t2, e2, s2) {
    return `rgba(${Math.round(t2[0] + (e2[0] - t2[0]) * s2)},${Math.round(t2[1] + (e2[1] - t2[1]) * s2)},${Math.round(t2[2] + (e2[2] - t2[2]) * s2)},${t2[3] + (e2[3] - t2[3]) * s2})`;
  }
  class de {
    constructor(t2, e2, s2) {
      this.el = t2, this.duration = null != e2 ? e2 : 300, this.delay = s2 || 0, this._attrTarget = null, this._plotTarget = null, this._plotAlgorithm = "commands", this._afterCb = null, this._duringCb = null, this._next = null, this._root = null, this._scheduled = false;
    }
    attr(t2) {
      return this._attrTarget = t2, this._schedule(), this;
    }
    plot(t2, e2) {
      return this._plotTarget = t2, e2 && (this._plotAlgorithm = e2), this._schedule(), this;
    }
    after(t2) {
      return this._afterCb = t2, this._schedule(), this;
    }
    during(t2) {
      return this._duringCb = t2, this._schedule(), this;
    }
    animate(t2, e2) {
      const s2 = new de(this.el, t2, e2);
      return this._next = s2, s2._root = this._root || this, s2;
    }
    _schedule() {
      const t2 = this._root || this;
      t2._scheduled || (t2._scheduled = true, queueMicrotask(() => t2._executeChain()));
    }
    _executeChain() {
      const t2 = [];
      let e2 = this;
      for (; e2; ) t2.push(e2), e2 = e2._next;
      let s2 = 0;
      t2.forEach((t3) => {
        s2 += t3.delay, t3._execute(s2), s2 += t3.duration;
      });
    }
    _execute(t2) {
      const e2 = this.el, s2 = this.duration;
      if (s2 <= 1) {
        const s3 = () => {
          this._attrTarget && e2.attr(this._attrTarget), this._plotTarget && e2.plot(this._plotTarget), this._afterCb && this._afterCb.call(e2);
        };
        return void (t2 > 0 ? setTimeout(s3, t2) : s3());
      }
      const i2 = () => {
        const t3 = {}, i3 = {}, a2 = {};
        if (this._attrTarget) for (const s3 of Object.keys(this._attrTarget)) {
          const o3 = e2.attr(s3);
          t3[s3] = o3;
          const r3 = he(o3), n3 = he(String(this._attrTarget[s3]));
          r3 && n3 && (i3[s3] = r3, a2[s3] = n3);
        }
        let o2 = null;
        if (this._plotTarget) {
          const t4 = e2.attr("d") || "";
          try {
            o2 = "polygons" === this._plotAlgorithm ? (function(t5, e3, s3 = 96) {
              const i4 = le(t5, s3), a3 = le(e3, s3);
              let o3 = 0, r3 = 1 / 0;
              for (let t6 = 0; t6 < s3; t6++) {
                let e4 = 0;
                for (let o4 = 0; o4 < s3; o4++) {
                  const n4 = i4[(o4 + t6) % s3], l2 = a3[o4], h2 = n4.x - l2.x, c2 = n4.y - l2.y;
                  if (e4 += h2 * h2 + c2 * c2, e4 >= r3) break;
                }
                e4 < r3 && (r3 = e4, o3 = t6);
              }
              const n3 = new Array(s3);
              for (let t6 = 0; t6 < s3; t6++) n3[t6] = i4[(t6 + o3) % s3];
              return function(t6) {
                let e4 = "";
                for (let i5 = 0; i5 < s3; i5++) {
                  const s4 = n3[i5], o4 = a3[i5], r4 = s4.x + (o4.x - s4.x) * t6, l2 = s4.y + (o4.y - s4.y) * t6;
                  e4 += (0 === i5 ? "M" : "L") + r4.toFixed(3) + " " + l2.toFixed(3) + " ";
                }
                return e4 + "Z";
              };
            })(t4, this._plotTarget) : oe(t4, this._plotTarget);
          } catch (t5) {
            o2 = null;
          }
        }
        const r2 = performance.now(), n2 = (l2) => {
          const h2 = l2 - r2, c2 = Math.min(h2 / s2, 1), d2 = (g2 = c2, -Math.cos(g2 * Math.PI) / 2 + 0.5);
          var g2;
          if (this._attrTarget) if (c2 >= 1) e2.attr(this._attrTarget);
          else {
            const s3 = {};
            for (const e3 of Object.keys(this._attrTarget)) if (i3[e3] && a2[e3]) s3[e3] = ce(i3[e3], a2[e3], d2);
            else {
              const i4 = parseFloat(t3[e3]), a3 = parseFloat(this._attrTarget[e3]);
              isNaN(i4) || isNaN(a3) || (s3[e3] = i4 + (a3 - i4) * d2);
            }
            e2.attr(s3);
          }
          o2 && c2 < 1 && e2.attr("d", o2(d2)), this._duringCb && this._duringCb(d2), c2 < 1 ? b.requestAnimationFrame(n2) : (this._plotTarget && e2.attr("d", this._plotTarget), this._afterCb && this._afterCb.call(e2));
        };
        b.requestAnimationFrame(n2);
      };
      t2 > 0 ? setTimeout(i2, t2) : i2();
    }
  }
  var ge;
  function pe() {
    const t2 = b.createElementNS(W, "svg"), e2 = new jt(t2);
    return e2.attr({ xmlns: W }), e2;
  }
  (ge = Nt).prototype.filterWith = function(t2) {
    const e2 = new Zt();
    this._filter = e2;
    let s2 = this.node;
    for (; s2 && "svg" !== s2.nodeName; ) s2 = s2.parentNode;
    if (s2) {
      let t3 = s2.querySelector("defs");
      t3 || (t3 = b.createElementNS(W, "defs"), s2.insertBefore(t3, s2.firstChild)), t3.appendChild(e2.node);
    }
    return t2(new Kt(e2)), this.attr("filter", "url(#" + e2._id + ")"), this;
  }, ge.prototype.unfilter = function(t2) {
    return this._filter && (this.node.removeAttribute("filter"), t2 && this._filter.node && this._filter.node.parentNode && this._filter.node.parentNode.removeChild(this._filter.node), this._filter = null), this;
  }, ge.prototype.filterer = function() {
    return this._filter;
  }, (function(t2) {
    t2.prototype.animate = function(t3, e2) {
      return new de(this, t3, e2);
    };
  })(Nt), (function(t2) {
    t2.prototype.draggable = function(t3) {
      if (false === t3) return this._dragCleanup && (this._dragCleanup(), this._dragCleanup = null), this;
      const e2 = this, s2 = t3 || {}, i2 = (t4) => {
        if (t4.button && 0 !== t4.button) return;
        t4.stopPropagation();
        const i3 = "touchstart" === t4.type ? t4.touches[0] : t4, a2 = e2.node, o2 = parseFloat(a2.getAttribute("x")) || 0, r2 = parseFloat(a2.getAttribute("y")) || 0, n2 = i3.clientX, l2 = i3.clientY, h2 = a2.ownerSVGElement;
        let d2 = null;
        h2 && (d2 = h2.getScreenCTM());
        const g2 = (t5) => {
          const e3 = "touchmove" === t5.type ? t5.touches[0] : t5;
          let i4 = e3.clientX - n2, h3 = e3.clientY - l2;
          d2 && (i4 /= d2.a, h3 /= d2.d);
          let c2 = o2 + i4, g3 = r2 + h3;
          const p3 = parseFloat(a2.getAttribute("width")) || 0, u2 = parseFloat(a2.getAttribute("height")) || 0;
          void 0 !== s2.minX && c2 < s2.minX && (c2 = s2.minX), void 0 !== s2.minY && g3 < s2.minY && (g3 = s2.minY), void 0 !== s2.maxX && c2 + p3 > s2.maxX && (c2 = s2.maxX - p3), void 0 !== s2.maxY && g3 + u2 > s2.maxY && (g3 = s2.maxY - u2);
          const x2 = new CustomEvent("dragmove", { detail: { handler: { move: function(t6, e4) {
            a2.setAttribute("x", t6), a2.setAttribute("y", e4);
          } }, box: { x: c2, y: g3, w: p3, h: u2, x2: c2 + p3, y2: g3 + u2 } } });
          a2.dispatchEvent(x2);
        }, p2 = () => {
          c.isBrowser() && (document.removeEventListener("mousemove", g2), document.removeEventListener("touchmove", g2), document.removeEventListener("mouseup", p2), document.removeEventListener("touchend", p2));
        };
        c.isBrowser() && (document.addEventListener("mousemove", g2), document.addEventListener("touchmove", g2), document.addEventListener("mouseup", p2), document.addEventListener("touchend", p2));
      };
      return e2.node.addEventListener("mousedown", i2), e2.node.addEventListener("touchstart", i2), e2._dragCleanup = () => {
        e2.node.removeEventListener("mousedown", i2), e2.node.removeEventListener("touchstart", i2);
      }, e2;
    };
  })(Nt), (function(t2) {
    t2.prototype.select = function(t3) {
      if (false === t3) return this._selectCleanup && (this._selectCleanup(), this._selectCleanup = null), this;
      const e2 = this, { createHandle: s2, updateHandle: i2 } = t3, a2 = document.createElementNS(W, "g");
      a2.setAttribute("class", "svg_select_points");
      const o2 = e2.node.parentNode;
      o2 && o2.appendChild(a2);
      const r2 = {}, n2 = ["t", "b", "l", "r", "lt", "rt", "lb", "rb"];
      n2.forEach((t4, e3) => {
        const i3 = new jt(document.createElementNS(W, "g"));
        a2.appendChild(i3.node);
        const o3 = s2(i3, [0, 0], e3, [], t4);
        r2[t4] = { group: i3, handle: o3 };
      });
      const l2 = () => {
        const t4 = parseFloat(e2.attr("x")) || 0, s3 = parseFloat(e2.attr("y")) || 0, o3 = parseFloat(e2.attr("width")) || 0, l3 = parseFloat(e2.attr("height")) || 0, h2 = e2.node.getAttribute("transform");
        h2 ? a2.setAttribute("transform", h2) : a2.removeAttribute("transform");
        const c2 = { t: [t4 + o3 / 2, s3], b: [t4 + o3 / 2, s3 + l3], l: [t4, s3 + l3 / 2], r: [t4 + o3, s3 + l3 / 2], lt: [t4, s3], rt: [t4 + o3, s3], lb: [t4, s3 + l3], rb: [t4 + o3, s3 + l3] };
        n2.forEach((t5) => {
          r2[t5] && c2[t5] && i2(r2[t5].group, c2[t5]);
        });
      };
      return l2(), e2._selectHandles = a2, e2._selectHandlesMap = r2, e2._updateSelectPositions = l2, e2._selectCleanup = () => {
        a2.parentNode && a2.parentNode.removeChild(a2), e2._selectHandles = null, e2._selectHandlesMap = null, e2._updateSelectPositions = null;
      }, e2;
    }, t2.prototype.resize = function(t3) {
      if (false === t3) return this._resizeCleanup && (this._resizeCleanup(), this._resizeCleanup = null), this;
      const e2 = this, s2 = e2._selectHandlesMap;
      if (!s2) return e2;
      const i2 = [], a2 = (t4) => {
        const a3 = s2[t4];
        if (!a3 || !a3.group || !a3.group.node) return;
        const o2 = a3.group.node, r2 = (s3) => {
          if (s3.button && 0 !== s3.button) return;
          s3.stopPropagation();
          const i3 = ("touchstart" === s3.type ? s3.touches[0] : s3).clientX, a4 = e2.node.ownerSVGElement;
          let o3 = null;
          a4 && (o3 = a4.getScreenCTM());
          const r3 = parseFloat(e2.attr("x")) || 0, n2 = parseFloat(e2.attr("width")) || 0, l2 = (s4) => {
            let a5 = ("touchmove" === s4.type ? s4.touches[0] : s4).clientX - i3;
            o3 && (a5 /= o3.a);
            let l3 = r3, h3 = n2;
            "l" === t4 ? (l3 = r3 + a5, h3 = n2 - a5) : "r" === t4 && (h3 = n2 + a5), h3 < 0 && (h3 = 0), e2.attr({ x: l3, width: h3 }), e2._updateSelectPositions && e2._updateSelectPositions();
            const c2 = new CustomEvent("resize", { detail: { el: e2 } });
            e2.node.dispatchEvent(c2);
          }, h2 = () => {
            c.isBrowser() && (document.removeEventListener("mousemove", l2), document.removeEventListener("touchmove", l2), document.removeEventListener("mouseup", h2), document.removeEventListener("touchend", h2));
            const t5 = new CustomEvent("resize", { detail: { el: e2 } });
            e2.node.dispatchEvent(t5);
          };
          c.isBrowser() && (document.addEventListener("mousemove", l2), document.addEventListener("touchmove", l2), document.addEventListener("mouseup", h2), document.addEventListener("touchend", h2));
        };
        o2.addEventListener("mousedown", r2), o2.addEventListener("touchstart", r2), i2.push(() => {
          o2.removeEventListener("mousedown", r2), o2.removeEventListener("touchstart", r2);
        });
      };
      return a2("l"), a2("r"), e2._resizeCleanup = () => {
        i2.forEach((t4) => t4());
      }, e2;
    };
  })(Nt), pe.xlink = "http://www.w3.org/1999/xlink", c.isBrowser() && void 0 === window.SVG && (window.SVG = pe), c.isBrowser() ? (void 0 === window.SVG && (window.SVG = pe), void 0 === window.Apex && (window.Apex = {})) : "undefined" != typeof global && (void 0 === global.Apex && (global.Apex = {}), void 0 === global.SVG && (global.SVG = pe));
  const ue = class t2 {
    static registerFeatures(e2) {
      for (const [s2, i2] of Object.entries(e2)) t2._featureRegistry.set(s2, i2);
    }
    constructor(t3) {
      this.ctx = t3, this.w = t3.w;
    }
    initModules() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend", "keydown", "keyup"], this.ctx.animations = new B(this.w, this.ctx), this.ctx.axes = new at(this.w, this.ctx), this.ctx.core = new Pt(this.ctx.el, this.w, this.ctx), this.ctx.config = new D({}), this.ctx.data = new Tt(this.w, { resetGlobals: () => this.ctx.core.resetGlobals(), isMultipleY: () => this.ctx.core.isMultipleY() }), this.ctx.grid = new J(this.w, this.ctx), this.ctx.graphics = new N(this.w, this.ctx), this.ctx.coreUtils = new F(this.w), this.ctx.crosshairs = new ot(this.w), this.ctx.events = new st(this.w, this.ctx), this.ctx.fill = new G(this.w), this.ctx.localization = new it(this.w), this.ctx.options = new k(), this.ctx.responsive = new nt(this.w), this.ctx.series = new lt(this.w, { toggleDataSeries: (...t4) => {
        var e2;
        return null == (e2 = this.ctx.legend) ? void 0 : e2.legendHelpers.toggleDataSeries(...t4);
      }, revertDefaultAxisMinMax: () => this.ctx.updateHelpers.revertDefaultAxisMinMax(), updateSeries: (...t4) => this.ctx.updateHelpers._updateSeries(...t4) }), this.ctx.theme = new ht(this.w), this.ctx.formatters = new w(this.w), this.ctx.titleSubtitle = new ct(this.w), this.ctx.dimensions = new xt(this.w, this.ctx), this.ctx.updateHelpers = new Ft(this.w, this.ctx);
      const t3 = new Ht(this.w, this.ctx);
      this.w.globals.tooltip = t3, Object.defineProperty(this.ctx, "tooltip", { get() {
        return this.w.globals.tooltip;
      }, configurable: true }), this._initOptionalModules();
    }
    _initOptionalModules() {
      const e2 = t2._featureRegistry, s2 = this.w, i2 = this.ctx, a2 = e2.get("exports");
      i2.exports = a2 ? new a2(s2, i2) : null;
      const o2 = e2.get("legend");
      i2.legend = o2 ? new o2(s2, i2) : null;
      const r2 = e2.get("morphTypeChange");
      i2.morphTypeChange = r2 ? new r2(s2, i2) : null;
      const n2 = e2.get("toolbar");
      Object.defineProperty(i2, "toolbar", { get() {
        var t3;
        return !this._toolbar && n2 && (this._toolbar = new n2(s2, this)), null != (t3 = this._toolbar) ? t3 : null;
      }, configurable: true });
      const l2 = e2.get("zoomPanSelection");
      Object.defineProperty(i2, "zoomPanSelection", { get() {
        var t3;
        return !this._zoomPanSelection && l2 && (this._zoomPanSelection = new l2(s2, this)), null != (t3 = this._zoomPanSelection) ? t3 : null;
      }, configurable: true });
      const h2 = e2.get("keyboardNavigation");
      Object.defineProperty(i2, "keyboardNavigation", { get() {
        var t3;
        return !this._keyboardNavigation && h2 && (this._keyboardNavigation = new h2(s2, this)), null != (t3 = this._keyboardNavigation) ? t3 : null;
      }, configurable: true });
    }
  };
  h(ue, "_featureRegistry", /* @__PURE__ */ new Map());
  let xe = ue;
  class fe {
    constructor(t2) {
      this.ctx = t2, this.w = t2.w;
    }
    clear({ isUpdating: t2 }) {
      this.ctx._zoomPanSelection && this.ctx._zoomPanSelection.destroy(), this.ctx._toolbar && this.ctx._toolbar.destroy(), this.w.globals.resizeObserver && "function" == typeof this.w.globals.resizeObserver.disconnect && (this.w.globals.resizeObserver.disconnect(), this.w.globals.resizeObserver = null), q.invalidateAll(this.w), t2 ? (this.ctx._zoomPanSelection = null, this.ctx._toolbar = null, this.ctx._keyboardNavigation = null) : (this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx._zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx._toolbar = null, this.ctx.localization = null, this.ctx._keyboardNavigation = null, this.ctx.w.globals.tooltip = null), this.clearDomElements({ isUpdating: t2 });
    }
    killSVG(t2) {
      t2.each(function() {
        this.removeClass("*"), this.off();
      }, true), t2.clear();
    }
    clearDomElements({ isUpdating: t2 }) {
      const e2 = this.w.dom;
      if (c.isBrowser()) {
        const s2 = e2.Paper.node;
        s2.parentNode && s2.parentNode.parentNode && !t2 && (s2.parentNode.parentNode.style.minHeight = "unset");
        const i2 = e2.baseEl;
        if (i2 && this.ctx.eventList.forEach((t3) => {
          i2.removeEventListener(t3, this.ctx.events.documentEvent);
        }), null !== this.ctx.el) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
        this.killSVG(e2.Paper), e2.Paper.remove();
      }
      e2.elWrap = null, e2.elGraphical = null, e2.elLegendWrap = null, e2.elLegendForeign = null, e2.baseEl = null, e2.elGridRect = null, e2.elGridRectMask = null, e2.elGridRectBarMask = null, e2.elGridRectMarkerMask = null, e2.elForecastMask = null, e2.elNonForecastMask = null, e2.elDefs = null;
    }
  }
  const be = /* @__PURE__ */ new WeakMap();
  class me {
    constructor(t2, e2) {
      h(this, "core"), h(this, "responsive"), h(this, "axes"), h(this, "grid"), h(this, "graphics"), h(this, "coreUtils"), h(this, "crosshairs"), h(this, "events"), h(this, "fill"), h(this, "localization"), h(this, "options"), h(this, "series"), h(this, "theme"), h(this, "formatters"), h(this, "titleSubtitle"), h(this, "dimensions"), h(this, "updateHelpers"), h(this, "tooltip"), h(this, "data"), h(this, "animations"), h(this, "exports"), h(this, "legend"), h(this, "toolbar"), h(this, "zoomPanSelection"), h(this, "keyboardNavigation"), h(this, "annotations"), h(this, "morphTypeChange"), h(this, "timeScale"), h(this, "_keyboardNavigation"), h(this, "windowResizeHandler"), h(this, "parentResizeHandler"), h(this, "publicMethods", []), h(this, "eventList", []), h(this, "config"), this.opts = e2, this.ctx = this, this.w = new T(e2).init(), this.el = t2, this.w.globals.cuid = m.randomId(), this.w.globals.chartID = this.w.config.chart.id ? m.escapeString(this.w.config.chart.id) : this.w.globals.cuid, (function(t3) {
        const e3 = t3.config.chart.animations;
        e3 && false !== e3.respectReducedMotion && R() && (e3.enabled = false, e3.dynamicAnimation && (e3.dynamicAnimation.enabled = false));
      })(this.w);
      new xe(this).initModules(), this.lastUpdateOptions = null, this.create = this.create.bind(this), c.isBrowser() && (this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this));
    }
    render() {
      var t2, e2;
      return (null == (e2 = null == (t2 = this.w) ? void 0 : t2.config) ? void 0 : e2.chart) ? new Promise((t3, e3) => {
        var s2;
        if (m.elementExists(this.el)) {
          void 0 === Apex._chartInstances && (Apex._chartInstances = []), this.w.config.chart.id && Apex._chartInstances.push({ id: this.w.globals.chartID, group: this.w.config.chart.group, chart: this }), this.setLocale(this.w.config.chart.defaultLocale);
          const i2 = this.w.config.chart.events.beforeMount;
          if ("function" == typeof i2 && i2(this, this.w), this.events.fireEvent("beforeMount", [this, this.w]), c.isBrowser()) {
            window.addEventListener("resize", this.windowResizeHandler), (function(t5, e5) {
              if (c.isSSR()) return;
              let s3 = false;
              if (t5.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                const e6 = t5.getBoundingClientRect();
                "none" !== t5.style.display && 0 !== e6.width || (s3 = true);
              }
              const i4 = new ResizeObserver((i5) => {
                s3 && e5.call(t5, i5), s3 = true;
              });
              t5.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t5.children).forEach((t6) => i4.observe(t6)) : i4.observe(t5), be.set(e5, i4);
            })(this.el.parentNode, this.parentResizeHandler);
            const t4 = this.el.getRootNode && this.el.getRootNode(), e4 = m.is("ShadowRoot", t4), i3 = this.el.ownerDocument;
            let a3 = e4 ? t4.getElementById("apexcharts-css") : i3.getElementById("apexcharts-css");
            if (!a3) {
              a3 = b.createElementNS("http://www.w3.org/1999/xhtml", "style"), a3.id = "apexcharts-css", a3.textContent = '@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none;\n  /* Focus indicator colour. Themes override below. */\n  --apexcharts-focus-color: #008FFB;\n}\n\n/* Dark theme & high-contrast: brighter focus colour for sufficient contrast. */\n.apexcharts-canvas .apexcharts-theme-dark,\n.apexcharts-theme-dark.apexcharts-canvas {\n  --apexcharts-focus-color: #FFD500;\n}\n.apexcharts-canvas.apexcharts-high-contrast,\n.apexcharts-high-contrast.apexcharts-canvas {\n  --apexcharts-focus-color: #FFFF00;\n}\n\n/* Visually-hidden aria-live status region (WCAG 4.1.3 Status Messages). */\n.apexcharts-sr-status {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n/* Respect OS-level reduced-motion preference (WCAG 2.3.3). */\n@media (prefers-reduced-motion: reduce) {\n  .apexcharts-canvas *,\n  .apexcharts-canvas *::before,\n  .apexcharts-canvas *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-legend-series[role="button"]:focus {\n  outline: 2px solid var(--apexcharts-focus-color, #008FFB);\n  outline-offset: 2px;\n}\n\n.apexcharts-legend-series[role="button"]:focus:not(:focus-visible) {\n  outline: none;\n}\n\n.apexcharts-legend-series[role="button"]:focus-visible {\n  outline: 2px solid var(--apexcharts-focus-color, #008FFB);\n  outline-offset: 2px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-canvas svg:focus:not(:focus-visible) {\n  outline: none;\n}\n\n/* Keyboard navigation focus indicator on SVG data elements.\n   SVG elements don\'t support CSS outline, so we use stroke. */\n.apexcharts-bar-area.apexcharts-keyboard-focused,\n.apexcharts-candlestick-area.apexcharts-keyboard-focused,\n.apexcharts-boxPlot-area.apexcharts-keyboard-focused,\n.apexcharts-rangebar-area.apexcharts-keyboard-focused,\n.apexcharts-pie-area.apexcharts-keyboard-focused,\n.apexcharts-heatmap-rect.apexcharts-keyboard-focused,\n.apexcharts-treemap-rect.apexcharts-keyboard-focused {\n  stroke: var(--apexcharts-focus-color, #008FFB);\n  stroke-width: 2;\n  stroke-opacity: 1;\n}\n\n.apexcharts-tooltip {\n  --apx-tt-bg: #ffffff;\n  --apx-tt-border: rgba(15, 23, 42, 0.06);\n  /* Layered shadow: tight inner contact + soft outer drop. The two Y\n   * offsets are exposed as variables so they flip in sync with the\n   * arrow when the tooltip is below the data point \u2014 see the\n   * `[data-placement="bottom"]` rule further down. */\n  --apx-tt-shadow-y-mid: 8px;\n  --apx-tt-shadow-y-far: 16px;\n  --apx-tt-shadow: 0 0 0 1px rgba(15, 23, 42, 0.04), 0 var(--apx-tt-shadow-y-mid) 16px -6px rgba(15, 23, 42, 0.12), 0 var(--apx-tt-shadow-y-far) 36px -12px rgba(15, 23, 42, 0.18);\n  --apx-tt-arrow-bg: var(--apx-tt-bg);\n  /* Two stacked drop-shadows: the first is a tight contact halo for\n   * edge definition against light chart backgrounds; the second is a\n   * softer directional drop that lifts the arrow off the surface.\n   * `--apx-tt-arrow-drop-y` is the Y offset of the directional drop;\n   * a per-placement rule below flips it to negative when the tooltip\n   * is below the data point (arrow on top) so the shadow always\n   * casts outward instead of into the tooltip body. */\n  --apx-tt-arrow-drop-y: 2px;\n  --apx-tt-arrow-shadow: drop-shadow(0 0 0.5px rgba(15, 23, 42, 0.2)) drop-shadow(0 var(--apx-tt-arrow-drop-y) 4px rgba(15, 23, 42, 0.2));\n  --apx-tt-color: #0f172a;\n  --apx-tt-color-muted: rgba(15, 23, 42, 0.55);\n  border-radius: 8px;\n  background: var(--apx-tt-bg);\n  border: 1px solid var(--apx-tt-border);\n  box-shadow: var(--apx-tt-shadow);\n  color: var(--apx-tt-color);\n  cursor: default;\n  font-size: 13px;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  padding: 2px 0;\n  white-space: nowrap;\n  z-index: 12;\n  transition: opacity .12s ease\n}\n\n/* While the tooltip is visible, smoothly animate position changes\n * between data points. Kept short (160 ms) and ease-out so it stays\n * responsive \u2014 too long would feel laggy when sweeping across many\n * points fast. The position transition is only attached after the\n * first paint (Position.applyTooltipPosition flips `data-positioned`\n * once the tooltip has been placed) so the *first* show doesn\'t slide\n * the tooltip in from the previously-stale (0,0) coordinates. */\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: opacity .12s ease\n}\n.apexcharts-tooltip.apexcharts-active[data-positioned="true"] {\n  transition: opacity .12s ease, left .16s ease-out, top .16s ease-out\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  /* defaults already set above; class kept for backward-compat selectors */\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  --apx-tt-bg: #1c1c1f;\n  --apx-tt-border: rgba(255, 255, 255, 0.08);\n  --apx-tt-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 var(--apx-tt-shadow-y-mid) 16px -6px rgba(0, 0, 0, 0.45), 0 var(--apx-tt-shadow-y-far) 36px -12px rgba(0, 0, 0, 0.55);\n  --apx-tt-arrow-shadow: drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.55)) drop-shadow(0 var(--apx-tt-arrow-drop-y) 4px rgba(0, 0, 0, 0.45));\n  --apx-tt-color: #f3f4f6;\n  --apx-tt-color-muted: rgba(243, 244, 246, 0.55);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 8px 12px 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  color: var(--apx-tt-color-muted);\n  background: transparent;\n  border-bottom: none;\n  margin-bottom: 0\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title,\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: transparent;\n  border-bottom: none\n}\n\n/* `fillSeriesColor`: each series-group already paints itself with the\n * series colour. Drop the glass body entirely (transparent bg, no\n * border, no backdrop-filter, no padding) and clip the coloured\n * series-group(s) to the tooltip\'s rounded corners so they fill the\n * shell edge-to-edge. Text inside the coloured group is forced to\n * white for contrast. */\n.apexcharts-tooltip.apexcharts-tooltip-fill-series {\n  background: transparent;\n  -webkit-backdrop-filter: none;\n  backdrop-filter: none;\n  border: none;\n  padding: 0;\n  overflow: hidden;\n  color: #fff\n}\n\n.apexcharts-tooltip.apexcharts-tooltip-fill-series .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.22);\n  color: #fff;\n  opacity: 1;\n  padding: 6px 12px\n}\n\n.apexcharts-tooltip.apexcharts-tooltip-fill-series .apexcharts-tooltip-series-group {\n  color: #fff\n}\n\n/* Arrow connector \u2014 sits *entirely outside* the tooltip body. Shares\n * the body\'s solid fill so it reads as a single shape. `filter:\n * drop-shadow` traces the clipped triangle outline (a regular\n * `box-shadow` would be erased by the `clip-path`). */\n.apexcharts-tooltip-arrow {\n  position: absolute;\n  width: 7px;\n  height: 14px;\n  background: var(--apx-tt-arrow-bg);\n  /* The variable already contains the full `drop-shadow(...) ...` filter\n   * chain (stacked shadows) so it\'s applied raw. */\n  -webkit-filter: var(--apx-tt-arrow-shadow);\n  filter: var(--apx-tt-arrow-shadow);\n  pointer-events: none;\n  top: calc(var(--apx-tt-arrow-y, 50%) - 7px)\n}\n\n.apexcharts-tooltip[data-placement="right"] .apexcharts-tooltip-arrow {\n  left: -7px;\n  clip-path: polygon(0 50%, 100% 0, 100% 100%)\n}\n\n.apexcharts-tooltip[data-placement="left"] .apexcharts-tooltip-arrow {\n  right: -7px;\n  clip-path: polygon(100% 50%, 0 0, 0 100%)\n}\n\n/* Vertical arrow variants: tooltip is above/below the data point and the\n * arrow points down/up. The base rule above uses `--apx-tt-arrow-y` for\n * left/right placement; for top/bottom we re-orient the rectangle and\n * use `--apx-tt-arrow-x` (set by applyTooltipPosition). */\n.apexcharts-tooltip[data-placement="top"] .apexcharts-tooltip-arrow,\n.apexcharts-tooltip[data-placement="bottom"] .apexcharts-tooltip-arrow {\n  width: 14px;\n  height: 7px;\n  top: auto;\n  left: calc(var(--apx-tt-arrow-x, 50%) - 7px)\n}\n\n.apexcharts-tooltip[data-placement="top"] .apexcharts-tooltip-arrow {\n  bottom: -7px;\n  clip-path: polygon(50% 100%, 0 0, 100% 0)\n}\n\n.apexcharts-tooltip[data-placement="bottom"] .apexcharts-tooltip-arrow {\n  top: -7px;\n  clip-path: polygon(50% 0, 0 100%, 100% 100%)\n}\n\n/* When the tooltip is flipped below the data point (arrow on top\n * pointing up), the default downward-biased shadows leave the top\n * edge of both the body *and* the arrow undefined. Flipping every\n * Y offset to negative casts the entire elevation upward so the\n * shadow falls between the tooltip and the bar above. */\n.apexcharts-tooltip[data-placement="bottom"] {\n  --apx-tt-shadow-y-mid: -8px;\n  --apx-tt-shadow-y-far: -16px;\n  --apx-tt-arrow-drop-y: -2px\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  margin-right: 6px;\n  vertical-align: middle;\n  color: inherit;\n}\n\n.apexcharts-tooltip-marker svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 4px 12px;\n  display: none;\n  gap: 8px;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active:last-child,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 8px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n/* X/Y axis tooltips \u2014 small popovers that label the crosshair on the\n * axes. Restyled to match the modern data-tooltip palette: solid white\n * body with a subtle border + soft drop-shadow, smaller font, rounded\n * corners. The arrows still use the CSS border-triangle technique\n * (cheap, crisp at small sizes); their colours flow from CSS variables\n * so light/dark themes only need one override per axis. */\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  --apx-axt-bg: #ffffff;\n  --apx-axt-border: rgba(15, 23, 42, 0.08);\n  --apx-axt-color: #0f172a;\n  --apx-axt-shadow: 0 4px 12px -4px rgba(15, 23, 42, 0.18), 0 1px 3px -1px rgba(15, 23, 42, 0.12);\n  opacity: 0;\n  pointer-events: none;\n  color: var(--apx-axt-color);\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 10;\n  background: var(--apx-axt-bg);\n  border: 1px solid var(--apx-axt-border);\n  box-shadow: var(--apx-axt-shadow)\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark,\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  --apx-axt-bg: #1c1c1f;\n  --apx-axt-border: rgba(255, 255, 255, 0.1);\n  --apx-axt-color: #f3f4f6;\n  --apx-axt-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.55), 0 1px 3px -1px rgba(0, 0, 0, 0.45)\n}\n\n.apexcharts-xaxistooltip {\n  padding: 4px 8px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n/* :before paints the 1px border outline of the triangle (slightly larger\n * than :after); :after sits inside and paints the fill \u2014 leaves a 1px\n * ring of :before visible at the edges. */\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 5px;\n  margin-left: -5px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: var(--apx-axt-bg)\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: var(--apx-axt-border)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: var(--apx-axt-bg)\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: var(--apx-axt-border)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 3px 8px\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 5px;\n  margin-top: -5px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: var(--apx-axt-bg)\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: var(--apx-axt-border)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: var(--apx-axt-bg)\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: var(--apx-axt-border)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_shape {\n  stroke-width: 1;\n  stroke-dasharray: 10 10;\n  stroke: black;\n  stroke-opacity: 0.1;\n  pointer-events: none;\n  fill: none;\n}\n\n.svg_select_handle {\n  stroke-width: 3;\n  stroke: black;\n  fill: none;\n}\n\n.svg_select_handle_r {\n  cursor: e-resize;\n}\n\n.svg_select_handle_l {\n  cursor: w-resize;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  /* WCAG 2.5.8 Target Size (Minimum): 24\xD724 CSS px hit target. */\n  width: 26px;\n  height: 24px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center;\n  /* Reset native <button> chrome \u2014 these are styled via SVG icons. */\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: 0;\n  border-radius: 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color .12s ease, color .12s ease;\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-pan-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-selection-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon,\n.apexcharts-theme-dark .apexcharts-pan-icon,\n.apexcharts-theme-dark .apexcharts-reset-icon,\n.apexcharts-theme-dark .apexcharts-selection-icon,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon,\n.apexcharts-theme-dark .apexcharts-zoom-icon,\n.apexcharts-theme-dark .apexcharts-zoomin-icon,\n.apexcharts-theme-dark .apexcharts-zoomout-icon {\n  color: #d4d6dc\n}\n\n.apexcharts-canvas .apexcharts-pan-icon.apexcharts-selected,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected {\n  background: rgba(0, 143, 251, 0.12);\n  color: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover,\n.apexcharts-theme-light .apexcharts-pan-icon:not(.apexcharts-selected):hover,\n.apexcharts-theme-light .apexcharts-reset-icon:hover,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover {\n  background: rgba(15, 23, 42, 0.06);\n  color: #1f2937\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon:hover,\n.apexcharts-theme-dark .apexcharts-pan-icon:not(.apexcharts-selected):hover,\n.apexcharts-theme-dark .apexcharts-reset-icon:hover,\n.apexcharts-theme-dark .apexcharts-selection-icon:not(.apexcharts-selected):hover,\n.apexcharts-theme-dark .apexcharts-zoom-icon:not(.apexcharts-selected):hover,\n.apexcharts-theme-dark .apexcharts-zoomin-icon:hover,\n.apexcharts-theme-dark .apexcharts-zoomout-icon:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n  padding: 3px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n}\n\n.apexcharts-theme-dark .apexcharts-toolbar {\n  background: rgba(28, 28, 31, 0.82);\n}\n\n.apexcharts-menu {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  position: absolute;\n  top: calc(100% + 4px);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 8px;\n  padding: 4px;\n  right: 0;\n  opacity: 0;\n  min-width: 120px;\n  transition: opacity .15s ease, transform .15s ease;\n  transform: translateY(-2px);\n  pointer-events: none;\n  box-shadow: 0 4px 16px -4px rgba(15, 23, 42, 0.12), 0 2px 4px -1px rgba(15, 23, 42, 0.06)\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 9px;\n  font-size: 12px;\n  border-radius: 5px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: rgba(15, 23, 42, 0.06)\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(28, 28, 31, 0.92);\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #f3f4f6;\n  box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-item:hover {\n  background: rgba(255, 255, 255, 0.08)\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n/* Toolbar keyboard accessibility: show toolbar when any button inside it is focused */\n.apexcharts-toolbar:focus-within {\n  opacity: 1\n}\n\n/* Focus indicator for toolbar icon buttons */\n.apexcharts-menu-icon:focus-visible,\n.apexcharts-pan-icon:focus-visible,\n.apexcharts-reset-icon:focus-visible,\n.apexcharts-selection-icon:focus-visible,\n.apexcharts-toolbar-custom-icon:focus-visible,\n.apexcharts-zoom-icon:focus-visible,\n.apexcharts-zoomin-icon:focus-visible,\n.apexcharts-zoomout-icon:focus-visible {\n  outline: 2px solid var(--apexcharts-focus-color, #008FFB);\n  outline-offset: 1px;\n  border-radius: 5px\n}\n\n/* Focus indicator for hamburger menu items */\n.apexcharts-menu-item:focus-visible {\n  outline: 2px solid var(--apexcharts-focus-color, #008FFB);\n  outline-offset: -2px;\n  background: #eee\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect,\n.no-pointer-events {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.apexcharts-radar-series .apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-disable-transitions * {\n  transition: none !important;\n}';
              const o2 = (null == (s2 = this.opts.chart) ? void 0 : s2.nonce) || this.w.config.chart.nonce;
              o2 && a3.setAttribute("nonce", o2), e4 ? t4.prepend(a3) : false !== this.w.config.chart.injectStyleSheet && i3.head.appendChild(a3);
            }
          }
          const a2 = this.create(this.w.config.series, {});
          if (!a2) return t3(this);
          this.mount(a2).then(() => {
            "function" == typeof this.w.config.chart.events.mounted && this.w.config.chart.events.mounted(this, this.w), this.events.fireEvent("mounted", [this, this.w]), t3(a2);
          }).catch((t4) => {
            var s3, i3;
            const a3 = t4 instanceof Error ? t4 : new Error(String(t4)), o2 = a3;
            o2.chartId = null == (i3 = null == (s3 = this.w) ? void 0 : s3.globals) ? void 0 : i3.chartID, o2.el = this.el, e3(a3);
          });
        } else e3(new Error("Element not found"));
      }) : Promise.reject(new Error("ApexCharts: chart configuration is missing or invalid. Ensure the options object includes a `chart` property."));
    }
    create(t2, e2) {
      var s2, i2, a2;
      const o2 = this.w;
      if (!this.core) {
        new xe(this).initModules();
      }
      const r2 = this.w.globals;
      if (r2.noData = false, r2.animationEnded = false, !m.elementExists(this.el)) return r2.animationEnded = true, null;
      if (this.responsive.checkResponsiveConfig(e2), o2.config.xaxis.convertedCatToNumeric) {
        new C(o2.config).convertCatToNumericXaxis(o2.config, this.ctx);
      }
      if (this.core.setupElements(), "treemap" === o2.config.chart.type && (o2.config.grid.show = false, o2.config.yaxis[0].show = false), 0 === r2.svgWidth) return r2.animationEnded = true, null;
      let n2 = t2;
      t2.forEach((t3, e3) => {
        t3.hidden && (n2 = this.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: e3 }));
      });
      const l2 = F.checkComboSeries(n2, o2.config.chart.type);
      r2.comboCharts = l2.comboCharts, r2.comboBarCount = l2.comboBarCount;
      const h2 = n2.every((t3) => t3.data && 0 === t3.data.length);
      (0 === n2.length || h2 && r2.collapsedSeries.length < 1) && this.series.handleNoData(), c.isBrowser() && this.events.setupEventHandlers();
      const d2 = this.data.parseData(n2);
      this._writeParsedSeriesData(d2.seriesData), this._writeParsedRangeData(d2.rangeData), this._writeParsedCandleData(d2.candleData), this._writeParsedLabelData(d2.labelData), this._writeParsedAxisFlags(d2.axisFlags), this.theme.init();
      new j(this.w, this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), r2.noData && r2.collapsedSeries.length !== o2.seriesData.series.length && !o2.config.legend.showForSingleSeries || null == (s2 = this.legend) || s2.init(), this.series.hasAllSeriesEqualX(), r2.axisCharts && (this.core.coreCalculations(), "category" !== o2.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar && (this.ctx.toolbar.minX = o2.globals.minX, this.ctx.toolbar.maxX = o2.globals.maxX)), this.formatters.heatmapLabelFormatters();
      new F(this.w).getLargestMarkerSize();
      const g2 = this.dimensions.plotCoords();
      this._writeLayoutCoords(g2.layout);
      const p2 = this.core.xySettings();
      this.grid.createGridMask();
      const u2 = this.core.plotChartType(n2, p2), x2 = new U(this.w, this);
      x2.bringForward(), o2.config.dataLabels.background.enabled && x2.dataLabelsBackground(), this.core.shiftGraphPosition(), null == (a2 = null == (i2 = this.legend) ? void 0 : i2.heatmapGradientLegend) || a2.repositionToPlot(), o2.globals.dataPoints > 50 && o2.dom.elWrap.classList.add("apexcharts-disable-transitions");
      return { elGraph: u2, xyRatios: p2, dimensions: { plot: { left: o2.layout.translateX, top: o2.layout.translateY, width: o2.layout.gridWidth, height: o2.layout.gridHeight } } };
    }
    mount(t2 = null) {
      const e2 = this, s2 = e2.w;
      return new Promise((i2, a2) => {
        var o2, r2, n2, l2, h2, d2, g2, p2, u2;
        if (null === e2.el) return a2(new Error("Not enough data to display or target element not found"));
        (null === t2 || s2.globals.allSeriesCollapsed) && e2.series.handleNoData(), e2.grid = new J(e2.w, e2);
        const x2 = e2.grid.drawGrid(), f2 = xe._featureRegistry.get("annotations");
        if (e2.annotations = f2 ? new f2(e2.w, { theme: e2.theme, timeScale: e2.timeScale }) : null, null == (o2 = e2.annotations) || o2.drawImageAnnos(), null == (r2 = e2.annotations) || r2.drawTextAnnos(), "back" === s2.config.grid.position && (x2 && s2.dom.elGraphical.add(x2.el), (null == (n2 = null == x2 ? void 0 : x2.elGridBorders) ? void 0 : n2.node) && s2.dom.elGraphical.add(x2.elGridBorders)), Array.isArray(t2.elGraph)) for (let e3 = 0; e3 < t2.elGraph.length; e3++) s2.dom.elGraphical.add(t2.elGraph[e3]);
        else s2.dom.elGraphical.add(t2.elGraph);
        "front" === s2.config.grid.position && (x2 && s2.dom.elGraphical.add(x2.el), (null == (l2 = null == x2 ? void 0 : x2.elGridBorders) ? void 0 : l2.node) && s2.dom.elGraphical.add(x2.elGridBorders)), "front" === s2.config.xaxis.crosshairs.position && e2.crosshairs.drawXCrosshairs(), "front" === s2.config.yaxis[0].crosshairs.position && e2.crosshairs.drawYCrosshairs(), "treemap" !== s2.config.chart.type && e2.axes.drawAxis(s2.config.chart.type, x2);
        const b2 = new K(this.w, this.ctx, x2), m2 = new et(this.w, { theme: this.theme, timeScale: this.timeScale }, x2);
        if (null !== x2 && (b2.xAxisLabelCorrections(), m2.setYAxisTextAlignments(), s2.config.yaxis.map((t3, e3) => {
          -1 === s2.globals.ignoreYAxisIndexes.indexOf(e3) && m2.yAxisTitleRotate(e3, t3.opposite);
        })), null == (h2 = e2.annotations) || h2.drawAxesAnnotations(), !s2.globals.noData) {
          if (c.isBrowser() && s2.config.tooltip.enabled && !s2.globals.noData && (null == (d2 = e2.w.globals.tooltip) || d2.drawTooltip(t2.xyRatios)), s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.keyboard.enabled && s2.config.chart.accessibility.keyboard.navigation.enabled && (null == (g2 = e2.keyboardNavigation) || g2.init()), c.isBrowser() && s2.globals.axisCharts && (s2.axisFlags.isXNumeric || s2.config.xaxis.convertedCatToNumeric || s2.axisFlags.isRangeBar)) (s2.config.chart.zoom.enabled || s2.config.chart.selection && s2.config.chart.selection.enabled || s2.config.chart.pan && s2.config.chart.pan.enabled) && (null == (p2 = e2.zoomPanSelection) || p2.init({ xyRatios: t2.xyRatios }));
          else {
            const t3 = s2.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((e3) => {
              t3[e3] = false;
            });
          }
          s2.config.chart.toolbar.show && !s2.globals.allSeriesCollapsed && (null == (u2 = e2.toolbar) || u2.createToolbar());
        }
        s2.globals.memory.methodsToExec.length > 0 && s2.globals.memory.methodsToExec.forEach((t3) => {
          t3.method(t3.params, false, t3.context);
        }), s2.globals.axisCharts || s2.globals.noData || e2.core.resizeNonAxisCharts(), i2(e2);
      });
    }
    destroy() {
      c.isBrowser() && (window.removeEventListener("resize", this.windowResizeHandler), (function(t3, e2) {
        if (c.isSSR()) return;
        const s2 = be.get(e2);
        s2 && (s2.disconnect(), be.delete(e2));
      })(this.el.parentNode, this.parentResizeHandler));
      const t2 = this.w.config.chart.id;
      t2 && Apex._chartInstances.forEach((e2, s2) => {
        e2.id === m.escapeString(t2) && Apex._chartInstances.splice(s2, 1);
      }), this._keyboardNavigation && this._keyboardNavigation.destroy(), new fe(this.ctx).clear({ isUpdating: false });
    }
    updateOptions(t2, e2 = false, s2 = true, i2 = true, a2 = true) {
      const o2 = this.w;
      if (o2.interact.selection = void 0, this.lastUpdateOptions) {
        if (m.shallowEqual(this.lastUpdateOptions, t2)) return Promise.resolve(this);
        if (t2.series && this.lastUpdateOptions.series && JSON.stringify(this.lastUpdateOptions.series) === JSON.stringify(t2.series)) {
          const e3 = n({}, t2), s3 = n({}, this.lastUpdateOptions);
          if (delete e3.series, delete s3.series, m.shallowEqual(e3, s3)) return Promise.resolve(this);
        }
      }
      return t2.series && (this.data.resetParsingFlags(), this.series.resetSeries(false, true, false), t2.series.length && t2.series[0].data && (t2.series = t2.series.map((t3, e3) => this.updateHelpers._extendSeries(t3, e3))), this.updateHelpers.revertDefaultAxisMinMax()), t2.xaxis && (t2 = this.updateHelpers.forceXAxisUpdate(t2)), t2.yaxis && (t2 = this.updateHelpers.forceYAxisUpdate(t2)), o2.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t2.theme && (t2 = this.theme.updateThemeOptions(t2)), this.updateHelpers._updateOptions(t2, e2, s2, i2, a2);
    }
    updateSeries(t2 = [], e2 = true, s2 = true) {
      return this.data.resetParsingFlags(), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t2, e2, s2);
    }
    appendSeries(t2, e2 = true, s2 = true) {
      this.data.resetParsingFlags();
      const i2 = this.w.config.series.slice();
      return i2.push(t2), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(i2, e2, s2);
    }
    appendData(t2, e2 = true) {
      const s2 = this;
      s2.data.resetParsingFlags(), s2.w.globals.dataChanged = true, s2.series.getPreviousPaths();
      const i2 = s2.w.config.series.slice();
      for (let e3 = 0; e3 < i2.length; e3++) if (null !== t2[e3] && void 0 !== t2[e3]) {
        const s3 = t2[e3], a2 = i2[e3];
        for (let t3 = 0; t3 < s3.data.length; t3++) a2.data.push(s3.data[t3]);
      }
      return s2.w.config.series = i2, e2 && (s2.w.globals.initialSeries = m.clone(s2.w.config.series)), this.update();
    }
    update(t2) {
      return new Promise((e2, s2) => {
        if (this.lastUpdateOptions && JSON.stringify(this.lastUpdateOptions) === JSON.stringify(t2)) return e2(this);
        this.lastUpdateOptions = m.clone(t2), new fe(this.ctx).clear({ isUpdating: true });
        const i2 = this.create(this.w.config.series, null != t2 ? t2 : {});
        if (!i2) return e2(this);
        this.mount(i2).then(() => {
          var t3;
          null == (t3 = this.morphTypeChange) || t3.applyChromeFade(), "function" == typeof this.w.config.chart.events.updated && this.w.config.chart.events.updated(this, this.w), this.events.fireEvent("updated", [this, this.w]), this.w.globals.isDirty = true, e2(this);
        }).catch((t3) => {
          s2(t3);
        });
      });
    }
    fastUpdate(t2) {
      return new Promise((e2, s2) => {
        var i2;
        try {
          const s3 = this.w, a2 = s3.globals;
          a2.shouldAnimate = t2, a2.dataChanged = true, a2.animationEnded = false, q.invalidateSelectors(s3);
          const o2 = s3.globals;
          o2.maxY = -Number.MAX_VALUE, o2.minY = Number.MIN_VALUE, o2.minYArr = [], o2.maxYArr = [], o2.maxX = -Number.MAX_VALUE, o2.minX = Number.MAX_VALUE, o2.initialMaxX = -Number.MAX_VALUE, o2.initialMinX = Number.MAX_VALUE, o2.yAxisScale = [], o2.xAxisScale = null, o2.xAxisTicksPositions = [], o2.xRange = 0, o2.yRange = [], o2.zRange = 0, o2.xTickAmount = 0, o2.multiAxisTickAmount = 0, o2.pointsArray = [], o2.dataLabelsRects = [], o2.lastDrawnDataLabelsIndexes = [], o2.textRectsCache = /* @__PURE__ */ new Map(), o2.domCache = /* @__PURE__ */ new Map(), o2.cachedSelectors = {}, o2.disableZoomIn = false, o2.disableZoomOut = false, a2.axisCharts && (this.core.coreCalculations(), "category" !== s3.config.xaxis.type && this.formatters.setLabelFormatters());
          const r2 = this.core.xySettings(), n2 = s3.dom.elGraphical.node;
          n2.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-datalabels-background").forEach((t3) => {
            var e3;
            return null == (e3 = t3.parentNode) ? void 0 : e3.removeChild(t3);
          });
          const l2 = this.core.plotChartType(s3.config.series, r2), h2 = n2.querySelector(".apexcharts-grid"), d2 = Array.isArray(l2) ? l2 : [l2];
          h2 && "front" === s3.config.grid.position ? d2.forEach((t3) => {
            const e3 = t3 && t3.node ? t3.node : t3;
            e3 && n2.insertBefore(e3, h2);
          }) : d2.forEach((t3) => {
            s3.dom.elGraphical.add(t3);
          });
          const g2 = new U(s3, this);
          g2.bringForward(), s3.config.dataLabels.background.enabled && g2.dataLabelsBackground(), c.isBrowser() && s3.config.tooltip.enabled && !a2.noData && (null == (i2 = s3.globals.tooltip) || i2.drawTooltip(r2)), "function" == typeof s3.config.chart.events.updated && s3.config.chart.events.updated(this, s3), this.events.fireEvent("updated", [this, s3]), a2.isDirty = true, e2(this);
        } catch (t3) {
          s2(t3);
        }
      });
    }
    getSyncedCharts() {
      const t2 = this.getGroupedCharts();
      let e2 = [this];
      return t2.length && (e2 = [], t2.forEach((t3) => {
        e2.push(t3);
      })), e2;
    }
    getGroupedCharts() {
      return Apex._chartInstances.filter((t2) => {
        if (t2.group) return true;
      }).map((t2) => this.w.config.chart.group === t2.group ? t2.chart : this);
    }
    static getChartByID(t2) {
      const e2 = m.escapeString(t2);
      if (!Apex._chartInstances) return;
      const s2 = Apex._chartInstances.filter((t3) => t3.id === e2)[0];
      return s2 && s2.chart;
    }
    static initOnLoad() {
      var t2;
      const e2 = document.querySelectorAll("[data-apexcharts]");
      for (let s2 = 0; s2 < e2.length; s2++) {
        const i2 = e2[s2], a2 = JSON.parse(null != (t2 = e2[s2].getAttribute("data-options")) ? t2 : "");
        new me(i2, a2).render();
      }
    }
    static exec(t2, e2, ...s2) {
      const i2 = this.getChartByID(t2);
      if (!i2) return;
      i2.w.globals.isExecCalled = true;
      let a2 = null;
      return -1 !== i2.publicMethods.indexOf(e2) && (a2 = i2[e2](...s2)), a2;
    }
    static merge(t2, e2) {
      return m.extend(t2, e2);
    }
    static getThemePalettes() {
      return { palette1: ["#008FFB", "#00A86F", "#CA8501", "#FF4560", "#846DD5"], palette2: ["#6978CB", "#039DE2", "#49A84D", "#B39105", "#D68000"], palette3: ["#209FCC", "#648291", "#D4526E", "#0FA783", "#A19285"], palette4: ["#2FA59D", "#73A20B", "#099DE1", "#FD5D5D", "#648291"], palette5: ["#2B908F", "#F56566", "#2EAB16", "#FA4443", "#1EA2BD"], palette6: ["#449DD1", "#F86624", "#EA3A4A", "#9C63D1", "#899E2A"], palette7: ["#DF475B", "#1B998B", "#7E75B7", "#F46036", "#B1911B"], palette8: ["#9C63D1", "#F86624", "#B38F04", "#EA3A4A", "#2FA2B3"], palette9: ["#98776F", "#A19285", "#A8705E", "#BA6560", "#A0927F"], palette10: ["#C91EFF", "#A94BFD", "#6C6AFE", "#2983FF", "#009ED8"], cvdDeuteranopia: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7"], cvdProtanopia: ["#0077BB", "#EE7733", "#009988", "#EE3377", "#BBBBBB", "#33BBEE", "#CC3311"], cvdTritanopia: ["#CC3311", "#009988", "#EE7733", "#0077BB", "#EE3377", "#BBBBBB", "#33BBEE"], highContrast: ["#005A9C", "#C00000", "#007A33", "#6C3483", "#7B3F00", "#0097A7", "#4A235A"] };
    }
    static use(t2) {
      !(function(t3) {
        Object.assign(Lt(), t3);
      })(t2);
    }
    static registerFeatures(t2) {
      xe.registerFeatures(t2);
    }
    toggleSeries(t2) {
      return this.series.toggleSeries(t2);
    }
    highlightSeriesOnLegendHover(t2, e2) {
      return this.series.toggleSeriesOnHover(t2, e2);
    }
    showSeries(t2) {
      this.series.showSeries(t2);
    }
    hideSeries(t2) {
      this.series.hideSeries(t2);
    }
    highlightSeries(t2) {
      this.series.highlightSeries(t2);
    }
    isSeriesHidden(t2) {
      return this.series.isSeriesHidden(t2);
    }
    resetSeries(t2 = true, e2 = true) {
      this.series.resetSeries(t2, e2);
    }
    addEventListener(t2, e2) {
      this.events.addEventListener(t2, e2);
    }
    removeEventListener(t2, e2) {
      this.events.removeEventListener(t2, e2);
    }
    addXaxisAnnotation(t2, e2 = true, s2 = void 0) {
      var i2;
      let a2 = this;
      s2 && (a2 = s2), null == (i2 = a2.annotations) || i2.addXaxisAnnotationExternal(t2, e2, a2);
    }
    addYaxisAnnotation(t2, e2 = true, s2 = void 0) {
      var i2;
      let a2 = this;
      s2 && (a2 = s2), null == (i2 = a2.annotations) || i2.addYaxisAnnotationExternal(t2, e2, a2);
    }
    addPointAnnotation(t2, e2 = true, s2 = void 0) {
      var i2;
      let a2 = this;
      s2 && (a2 = s2), null == (i2 = a2.annotations) || i2.addPointAnnotationExternal(t2, e2, a2);
    }
    clearAnnotations(t2 = void 0) {
      var e2;
      let s2 = this;
      t2 && (s2 = t2), null == (e2 = s2.annotations) || e2.clearAnnotations(s2);
    }
    removeAnnotation(t2, e2 = void 0) {
      var s2;
      let i2 = this;
      e2 && (i2 = e2), null == (s2 = i2.annotations) || s2.removeAnnotation(i2, t2);
    }
    getChartArea() {
      return this.w.dom.baseEl.querySelector(".apexcharts-inner");
    }
    getSeriesTotalXRange(t2, e2) {
      return this.coreUtils.getSeriesTotalsXRange(t2, e2);
    }
    getHighestValueInSeries(t2 = 0) {
      return new tt(this.w).getMinYMaxY(t2).highestY;
    }
    getLowestValueInSeries(t2 = 0) {
      return new tt(this.w).getMinYMaxY(t2).lowestY;
    }
    getSeriesTotal() {
      return this.w.globals.seriesTotals;
    }
    getState() {
      const t2 = this.w, e2 = t2.globals;
      return { series: t2.seriesData.series, seriesNames: t2.seriesData.seriesNames, colors: e2.colors, labels: t2.labelData.labels, seriesTotals: e2.seriesTotals, seriesPercent: e2.seriesPercent, seriesXvalues: e2.seriesXvalues, seriesYvalues: e2.seriesYvalues, minX: e2.minX, maxX: e2.maxX, minY: e2.minY, maxY: e2.maxY, minYArr: e2.minYArr, maxYArr: e2.maxYArr, minXDiff: e2.minXDiff, dataPoints: e2.dataPoints, xAxisScale: e2.xAxisScale, yAxisScale: e2.yAxisScale, xTickAmount: e2.xTickAmount, isXNumeric: t2.axisFlags.isXNumeric, seriesYAxisMap: e2.seriesYAxisMap, seriesYAxisReverseMap: e2.seriesYAxisReverseMap, svgWidth: e2.svgWidth, svgHeight: e2.svgHeight, gridWidth: t2.layout.gridWidth, gridHeight: t2.layout.gridHeight, selectedDataPoints: t2.interact.selectedDataPoints, collapsedSeriesIndices: e2.collapsedSeriesIndices, zoomed: t2.interact.zoomed, seriesX: t2.seriesData.seriesX, seriesZ: t2.seriesData.seriesZ, seriesCandleO: t2.candleData.seriesCandleO, seriesCandleH: t2.candleData.seriesCandleH, seriesCandleM: t2.candleData.seriesCandleM, seriesCandleL: t2.candleData.seriesCandleL, seriesCandleC: t2.candleData.seriesCandleC, seriesRangeStart: t2.rangeData.seriesRangeStart, seriesRangeEnd: t2.rangeData.seriesRangeEnd, seriesGoals: t2.seriesData.seriesGoals };
    }
    toggleDataPointSelection(t2, e2) {
      return this.updateHelpers.toggleDataPointSelection(t2, e2);
    }
    zoomX(t2, e2) {
      var s2;
      null == (s2 = this.ctx.toolbar) || s2.zoomUpdateOptions(t2, e2);
    }
    setLocale(t2) {
      this.localization.setCurrentLocaleValues(t2);
    }
    dataURI(t2) {
      if (!this.ctx.exports) throw new Error("apexcharts: Exports feature is not registered. Import apexcharts/features/exports.");
      return this.ctx.exports.dataURI(t2);
    }
    getSvgString(t2) {
      if (!this.ctx.exports) throw new Error("apexcharts: Exports feature is not registered. Import apexcharts/features/exports.");
      return this.ctx.exports.getSvgString(t2);
    }
    exportToCSV(t2 = {}) {
      if (!this.ctx.exports) throw new Error("apexcharts: Exports feature is not registered. Import apexcharts/features/exports.");
      return this.ctx.exports.exportToCSV(t2);
    }
    paper() {
      return this.w.dom.Paper;
    }
    _writeParsedSeriesData(t2) {
      Object.assign(this.w.seriesData, t2);
    }
    _writeParsedRangeData(t2) {
      Object.assign(this.w.rangeData, t2);
    }
    _writeParsedCandleData(t2) {
      Object.assign(this.w.candleData, t2);
    }
    _writeParsedLabelData(t2) {
      Object.assign(this.w.labelData, t2);
    }
    _writeParsedAxisFlags(t2) {
      Object.assign(this.w.axisFlags, t2);
    }
    _writeLayoutCoords(t2) {
      Object.assign(this.w.layout, t2);
    }
    _parentResizeCallback() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    }
    _windowResize() {
      this.w.globals.resizeTimer = window.setTimeout(() => {
        this.w.globals.resized = true, this.w.globals.dataChanged = false, this.ctx.update();
      }, 150);
    }
    _windowResizeHandler() {
      var t2;
      clearTimeout(null != (t2 = this.w.globals.resizeTimer) ? t2 : void 0);
      let { redrawOnWindowResize: e2 } = this.w.config.chart;
      "function" == typeof e2 && (e2 = e2()), e2 && this._windowResize();
    }
  }
  const ye = ".apexcharts-flip-y {\n  transform: scaleY(-1) translateY(-100%);\n  transform-origin: top;\n  transform-box: fill-box;\n}\n.apexcharts-flip-x {\n  transform: scaleX(-1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.apexcharts-legend {\n  display: flex;\n  overflow: auto;\n  padding: 0 10px;\n}\n.apexcharts-legend.apexcharts-legend-group-horizontal {\n  flex-direction: column;\n}\n.apexcharts-legend-group {\n  display: flex;\n}\n.apexcharts-legend-group-vertical {\n  flex-direction: column-reverse;\n}\n.apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n  flex-wrap: wrap\n}\n.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  flex-direction: column;\n  bottom: 0;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n  justify-content: center;\n  align-items: center;\n}\n.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.apexcharts-legend-series {\n  cursor: pointer;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n}\n.apexcharts-legend-text {\n  position: relative;\n  font-size: 14px;\n}\n.apexcharts-legend-text *, .apexcharts-legend-marker * {\n  pointer-events: none;\n}\n.apexcharts-legend-marker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 1px;\n}\n\n.apexcharts-legend-series.apexcharts-no-click {\n  cursor: auto;\n}\n.apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n  display: none !important;\n}\n.apexcharts-inactive-legend {\n  opacity: 0.45;\n} ";
  class we {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2;
    }
    svgStringToNode(t2) {
      return new DOMParser().parseFromString(t2, "image/svg+xml").documentElement;
    }
    scaleSvgNode(t2, e2) {
      const s2 = parseFloat(t2.getAttributeNS(null, "width")), i2 = parseFloat(t2.getAttributeNS(null, "height"));
      t2.setAttributeNS(null, "width", s2 * e2), t2.setAttributeNS(null, "height", i2 * e2), t2.setAttributeNS(null, "viewBox", "0 0 " + s2 + " " + i2);
    }
    getSvgString(t2) {
      return new Promise((e2) => {
        const s2 = this.w;
        let i2 = t2 || s2.config.chart.toolbar.export.scale || s2.config.chart.toolbar.export.width / s2.globals.svgWidth;
        i2 || (i2 = 1);
        const a2 = s2.globals.svgWidth * i2, o2 = s2.globals.svgHeight * i2, r2 = s2.dom.elWrap.cloneNode(true);
        r2.style.width = a2 + "px", r2.style.height = o2 + "px";
        const n2 = new XMLSerializer().serializeToString(r2);
        let l2 = "\n        .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {\n          display: none;\n        }\n      ";
        s2.config.legend.show && s2.dom.elLegendWrap && s2.dom.elLegendWrap.children.length > 0 && (l2 += ye);
        let h2 = `
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="apexcharts-svg"
          xmlns:data="ApexChartsNS"
          transform="translate(0, 0)"
          width="${s2.globals.svgWidth}px" height="${s2.globals.svgHeight}px">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="width:${a2}px; height:${o2}px;">
            <style type="text/css">
              ${l2}
            </style>
              ${n2}
            </div>
          </foreignObject>
        </svg>
      `;
        const c2 = this.svgStringToNode(h2);
        1 !== i2 && this.scaleSvgNode(c2, i2), this.convertImagesToBase64(c2).then(() => {
          h2 = new XMLSerializer().serializeToString(c2), e2(h2.replace(/&nbsp;/g, "&#160;"));
        });
      });
    }
    convertImagesToBase64(t2) {
      const e2 = t2.getElementsByTagName("image"), s2 = Array.from(e2).map((t3) => {
        const e3 = t3.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        return e3 && !e3.startsWith("data:") ? this.getBase64FromUrl(e3).then((e4) => {
          t3.setAttributeNS("http://www.w3.org/1999/xlink", "href", e4);
        }).catch((t4) => {
        }) : Promise.resolve();
      });
      return Promise.all(s2);
    }
    getBase64FromUrl(t2) {
      return c.isSSR() ? Promise.resolve(t2) : new Promise((e2, s2) => {
        const i2 = new Image();
        i2.crossOrigin = "Anonymous", i2.onload = () => {
          const t3 = document.createElement("canvas");
          t3.width = i2.width, t3.height = i2.height;
          const s3 = t3.getContext("2d");
          s3 && s3.drawImage(i2, 0, 0), e2(t3.toDataURL());
        }, i2.onerror = s2, i2.src = t2;
      });
    }
    svgUrl() {
      return new Promise((t2) => {
        this.getSvgString().then((e2) => {
          const s2 = new Blob([e2], { type: "image/svg+xml;charset=utf-8" });
          t2(URL.createObjectURL(s2));
        });
      });
    }
    dataURI(t2) {
      return c.isSSR() ? Promise.resolve({ imgURI: "" }) : new Promise((e2) => {
        const s2 = this.w, i2 = t2 ? t2.scale || t2.width / s2.globals.svgWidth : 1, a2 = document.createElement("canvas");
        a2.width = s2.globals.svgWidth * i2, a2.height = parseInt(s2.dom.elWrap.style.height, 10) * i2;
        const o2 = "transparent" !== s2.config.chart.background && s2.config.chart.background ? s2.config.chart.background : "#fff", r2 = a2.getContext("2d");
        r2 && (r2.fillStyle = o2, r2.fillRect(0, 0, a2.width * i2, a2.height * i2), this.getSvgString(i2).then((t3) => {
          const s3 = "data:image/svg+xml," + encodeURIComponent(t3), i3 = new Image();
          i3.crossOrigin = "anonymous", i3.onload = () => {
            r2.drawImage(i3, 0, 0);
            const t4 = a2;
            if (t4.msToBlob) {
              const s4 = t4.msToBlob();
              e2({ blob: s4 });
            } else {
              const t5 = a2.toDataURL("image/png");
              e2({ imgURI: t5 });
            }
          }, i3.src = s3;
        }));
      });
    }
    exportToSVG() {
      this.svgUrl().then((t2) => {
        this.triggerDownload(t2, this.w.config.chart.toolbar.export.svg.filename, ".svg");
      });
    }
    exportToPng() {
      const t2 = this.w.config.chart.toolbar.export.scale, e2 = this.w.config.chart.toolbar.export.width, s2 = t2 ? { scale: t2 } : e2 ? { width: e2 } : void 0;
      this.dataURI(s2).then(({ imgURI: t3, blob: e3 }) => {
        e3 ? navigator.msSaveOrOpenBlob(e3, this.w.globals.chartID + ".png") : this.triggerDownload(t3, this.w.config.chart.toolbar.export.png.filename, ".png");
      });
    }
    exportToCSV({ series: t2, fileName: e2, columnDelimiter: s2 = ",", lineDelimiter: i2 = "\n" }) {
      const a2 = this.w;
      t2 || (t2 = a2.config.series);
      let o2 = [];
      const r2 = [];
      let n2 = "";
      const l2 = a2.seriesData.series.map((t3, e3) => -1 === a2.globals.collapsedSeriesIndices.indexOf(e3) ? t3 : []), h2 = (t3) => "function" == typeof a2.config.chart.toolbar.export.csv.categoryFormatter ? a2.config.chart.toolbar.export.csv.categoryFormatter(t3) : "datetime" === a2.config.xaxis.type && String(t3).length >= 10 ? new Date(t3).toDateString() : m.isNumber(t3) ? t3 : t3.split(s2).join(""), c2 = (t3) => "function" == typeof a2.config.chart.toolbar.export.csv.valueFormatter ? a2.config.chart.toolbar.export.csv.valueFormatter(t3) : t3, d2 = Math.max(...t2.map((t3) => t3.data ? t3.data.length : 0)), g2 = new Tt(this.w), p2 = new Z(this.w, { theme: this.ctx.theme, timeScale: this.ctx.timeScale }), u2 = (t3) => {
        let e3 = "";
        if (a2.globals.axisCharts) {
          if ("category" === a2.config.xaxis.type || a2.config.xaxis.convertedCatToNumeric) if (a2.globals.isBarHorizontal) {
            const s3 = a2.formatters.yLabelFormatters[0], i3 = new lt(this.ctx.w).getActiveConfigSeriesIndex();
            e3 = s3(a2.labelData.labels[t3], { seriesIndex: i3, dataPointIndex: t3, w: a2 });
          } else e3 = p2.getLabel(a2.labelData.labels, a2.labelData.timescaleLabels, 0, t3).text;
          "datetime" === a2.config.xaxis.type && (a2.config.xaxis.categories.length ? e3 = a2.config.xaxis.categories[t3] : a2.config.labels.length && (e3 = a2.config.labels[t3]));
        } else e3 = a2.config.labels[t3];
        return null === e3 ? "nullvalue" : (Array.isArray(e3) && (e3 = e3.join(" ")), m.isNumber(e3) ? e3 : e3.split(s2).join(""));
      }, x2 = (e3, i3) => {
        var n3, p3, x3, f2, b2, m2;
        if (o2.length && 0 === i3 && r2.push(o2.join(s2)), e3.data) {
          e3.data = e3.data.length && e3.data || [...Array(d2)].map(() => "");
          for (let d3 = 0; d3 < e3.data.length; d3++) {
            o2 = [];
            let y2 = u2(d3);
            if ("nullvalue" !== y2) {
              if (y2 || (g2.isFormatXY() ? y2 = t2[i3].data[d3].x : g2.isFormat2DArray() && (y2 = t2[i3].data[d3] ? t2[i3].data[d3][0] : "")), 0 === i3) {
                o2.push(h2(y2));
                for (let e4 = 0; e4 < a2.seriesData.series.length; e4++) {
                  const s3 = g2.isFormatXY() ? null == (n3 = t2[e4].data[d3]) ? void 0 : n3.y : l2[e4][d3];
                  o2.push(c2(s3));
                }
              }
              ("candlestick" === a2.config.chart.type || e3.type && "candlestick" === e3.type) && (o2.pop(), o2.push(a2.candleData.seriesCandleO[i3][d3]), o2.push(a2.candleData.seriesCandleH[i3][d3]), o2.push(a2.candleData.seriesCandleL[i3][d3]), o2.push(a2.candleData.seriesCandleC[i3][d3])), ("boxPlot" === a2.config.chart.type || e3.type && "boxPlot" === e3.type) && (o2.pop(), o2.push(a2.candleData.seriesCandleO[i3][d3]), o2.push(a2.candleData.seriesCandleH[i3][d3]), o2.push(a2.candleData.seriesCandleM[i3][d3]), o2.push(a2.candleData.seriesCandleL[i3][d3]), o2.push(a2.candleData.seriesCandleC[i3][d3])), "rangeBar" === a2.config.chart.type && (o2.pop(), o2.push(a2.rangeData.seriesRangeStart[i3][d3]), o2.push(a2.rangeData.seriesRangeEnd[i3][d3])), ("violin" === a2.config.chart.type || e3.type && "violin" === e3.type) && (o2.pop(), o2.push(null == (p3 = a2.violinData.seriesViolinMin[i3]) ? void 0 : p3[d3]), o2.push(null == (x3 = a2.violinData.seriesViolinMax[i3]) ? void 0 : x3[d3]), o2.push(null != (m2 = null == (b2 = null == (f2 = a2.violinData.seriesViolinPoints[i3]) ? void 0 : f2[d3]) ? void 0 : b2.length) ? m2 : 0)), o2.length && r2.push(o2.join(s2));
            }
          }
        }
      };
      o2.push(a2.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === a2.config.chart.type ? (o2.push("minimum"), o2.push("q1"), o2.push("median"), o2.push("q3"), o2.push("maximum")) : "candlestick" === a2.config.chart.type ? (o2.push("open"), o2.push("high"), o2.push("low"), o2.push("close")) : "rangeBar" === a2.config.chart.type ? (o2.push("minimum"), o2.push("maximum")) : "violin" === a2.config.chart.type ? (o2.push("minimum"), o2.push("maximum"), o2.push("observations")) : t2.map((t3, e3) => {
        const i3 = (t3.name ? t3.name : `series-${e3}`) + "";
        a2.globals.axisCharts && o2.push(i3.split(s2).join("") ? i3.split(s2).join("") : `series-${e3}`);
      }), a2.globals.axisCharts || (o2.push(a2.config.chart.toolbar.export.csv.headerValue), r2.push(o2.join(s2))), a2.globals.allSeriesHasEqualX || !a2.globals.axisCharts || a2.config.xaxis.categories.length || a2.config.labels.length ? t2.map((t3, e3) => {
        a2.globals.axisCharts ? x2(t3, e3) : (o2 = [], o2.push(h2(a2.labelData.labels[e3])), o2.push(c2(l2[e3])), r2.push(o2.join(s2)));
      }) : (() => {
        const e3 = /* @__PURE__ */ new Set(), i3 = {};
        t2.forEach((s3, a3) => {
          null == s3 || s3.data.forEach((s4) => {
            let o3, r3;
            if (g2.isFormatXY()) o3 = s4.x, r3 = s4.y;
            else {
              if (!g2.isFormat2DArray()) return;
              o3 = s4[0], r3 = s4[1];
            }
            i3[o3] || (i3[o3] = Array(t2.length).fill("")), i3[o3][a3] = c2(r3), e3.add(o3);
          });
        }), o2.length && r2.push(o2.join(s2)), Array.from(e3).sort().forEach((t3) => {
          r2.push([h2(t3), i3[t3].join(s2)]);
        });
      })(), n2 += r2.join(i2), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + n2), e2 || a2.config.chart.toolbar.export.csv.filename, ".csv");
    }
    triggerDownload(t2, e2, s2) {
      if (c.isSSR()) return;
      const i2 = document.createElement("a");
      i2.href = t2, i2.download = (e2 || this.w.globals.chartID) + s2, document.body.appendChild(i2), i2.click(), document.body.removeChild(i2);
    }
  }
  me.registerFeatures({ exports: we });
  let ve = class {
    constructor(t2) {
      this.w = t2.w, this.lgCtx = t2;
    }
    getLegendStyles() {
      if (c.isSSR()) return null;
      const t2 = document.createElement("style");
      t2.setAttribute("type", "text/css");
      const e2 = this.w.config.chart.nonce;
      e2 && t2.setAttribute("nonce", e2);
      const s2 = document.createTextNode(ye);
      return t2.appendChild(s2), t2;
    }
    getLegendDimensions() {
      const t2 = this.w.dom.baseEl.querySelector(".apexcharts-legend");
      if (!t2) return { clwh: 0, clww: 0 };
      const { width: e2, height: s2 } = t2.getBoundingClientRect();
      return { clwh: s2, clww: e2 };
    }
    appendToForeignObject() {
      var t2;
      const e2 = this.getLegendStyles();
      false !== this.w.config.chart.injectStyleSheet && e2 && (null == (t2 = this.w.dom.elLegendForeign) || t2.appendChild(e2));
    }
    toggleDataSeries(t2, e2) {
      var s2, i2;
      const a2 = this.w;
      if (a2.globals.axisCharts || "radialBar" === a2.config.chart.type) {
        a2.globals.resized = true;
        let o2 = null, r2 = null;
        if (a2.globals.risingSeries = [], a2.globals.axisCharts) {
          if (o2 = a2.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${t2}']`), !o2) return;
          r2 = parseInt(null != (s2 = o2.getAttribute("data:realIndex")) ? s2 : "", 10);
        } else {
          if (o2 = a2.dom.baseEl.querySelector(`.apexcharts-series[rel='${t2 + 1}']`), !o2) return;
          r2 = parseInt(null != (i2 = o2.getAttribute("rel")) ? i2 : "", 10) - 1;
        }
        if (e2) {
          [{ cs: a2.globals.collapsedSeries, csi: a2.globals.collapsedSeriesIndices }, { cs: a2.globals.ancillaryCollapsedSeries, csi: a2.globals.ancillaryCollapsedSeriesIndices }].forEach((t3) => {
            const e3 = t3.cs, s3 = t3.csi;
            this.riseCollapsedSeries(e3, s3, r2);
          });
        } else this.hideSeries({ seriesEl: o2, realIndex: r2 });
        if (a2.config.chart.accessibility.enabled) {
          const e3 = a2.dom.baseEl.querySelector(`.apexcharts-legend-series[rel="${t2 + 1}"]`);
          if (e3) {
            const s3 = a2.globals.collapsedSeriesIndices.includes(r2) || a2.globals.ancillaryCollapsedSeriesIndices.includes(r2);
            e3.setAttribute("aria-pressed", s3 ? "true" : "false");
            const i3 = e3.querySelector(".apexcharts-legend-text"), o3 = i3 ? i3.textContent : a2.seriesData.seriesNames[t2], n2 = s3 ? "hidden" : "visible";
            e3.setAttribute("aria-label", `${o3}, ${n2}. Press Enter or Space to toggle.`);
          }
        }
      } else {
        const e3 = a2.dom.Paper.findOne(` .apexcharts-series[rel='${t2 + 1}'] path`), s3 = a2.config.chart.type;
        if ("pie" === s3 || "polarArea" === s3 || "donut" === s3) {
          const t3 = a2.config.plotOptions.pie.donut.labels;
          new N(this.w).pathMouseDown(e3, null), this.lgCtx.printDataLabelsInner(e3.node, t3);
        }
        if (a2.config.chart.accessibility.enabled) {
          const e4 = a2.dom.baseEl.querySelector(`.apexcharts-legend-series[rel="${t2 + 1}"]`);
          if (e4) {
            const s4 = a2.globals.collapsedSeriesIndices.includes(t2);
            e4.setAttribute("aria-pressed", s4 ? "true" : "false");
            const i3 = e4.querySelector(".apexcharts-legend-text"), o2 = i3 ? i3.textContent : a2.seriesData.seriesNames[t2], r2 = s4 ? "hidden" : "visible";
            e4.setAttribute("aria-label", `${o2}, ${r2}. Press Enter or Space to toggle.`);
          }
        }
      }
    }
    getSeriesAfterCollapsing({ realIndex: t2 }) {
      var e2;
      const s2 = this.w, i2 = s2.globals, a2 = m.clone(s2.config.series);
      if (i2.axisCharts) {
        const e3 = s2.config.yaxis[i2.seriesYAxisReverseMap[t2]], o2 = { index: t2, data: a2[t2].data.slice(), type: a2[t2].type || s2.config.chart.type };
        if (e3 && e3.show && e3.showAlways) i2.ancillaryCollapsedSeriesIndices.indexOf(t2) < 0 && (i2.ancillaryCollapsedSeries.push(o2), i2.ancillaryCollapsedSeriesIndices.push(t2));
        else if (i2.collapsedSeriesIndices.indexOf(t2) < 0) {
          i2.collapsedSeries.push(o2), i2.collapsedSeriesIndices.push(t2);
          const e4 = i2.risingSeries.indexOf(t2);
          i2.risingSeries.splice(e4, 1);
        }
      } else i2.collapsedSeries.push({ index: t2, data: a2[t2], type: null != (e2 = s2.config.series[t2].type) ? e2 : "line" }), i2.collapsedSeriesIndices.push(t2);
      return i2.allSeriesCollapsed = i2.collapsedSeries.length + i2.ancillaryCollapsedSeries.length === s2.config.series.length, this._getSeriesBasedOnCollapsedState(a2);
    }
    hideSeries({ seriesEl: t2, realIndex: e2 }) {
      const s2 = this.w, i2 = this.getSeriesAfterCollapsing({ realIndex: e2 }), a2 = t2.childNodes;
      for (let t3 = 0; t3 < a2.length; t3++) a2[t3].classList.contains("apexcharts-series-markers-wrap") && (a2[t3].classList.contains("apexcharts-hide") ? a2[t3].classList.remove("apexcharts-hide") : a2[t3].classList.add("apexcharts-hide"));
      this.lgCtx.updateSeries(i2, s2.config.chart.animations.dynamicAnimation.enabled);
    }
    riseCollapsedSeries(t2, e2, s2) {
      const i2 = this.w;
      let a2 = m.clone(i2.config.series);
      if (t2.length > 0) {
        for (let o2 = 0; o2 < t2.length; o2++) t2[o2].index === s2 && (i2.globals.axisCharts ? a2[s2].data = t2[o2].data.slice() : a2[s2] = t2[o2].data, "number" != typeof a2[s2] && (a2[s2].hidden = false), t2.splice(o2, 1), e2.splice(o2, 1), i2.globals.risingSeries.push(s2), o2--);
        a2 = this._getSeriesBasedOnCollapsedState(a2), this.lgCtx.updateSeries(a2, i2.config.chart.animations.dynamicAnimation.enabled);
      }
    }
    _getSeriesBasedOnCollapsedState(t2) {
      const e2 = this.w;
      let s2 = 0;
      return e2.globals.axisCharts ? t2.forEach((i2, a2) => {
        e2.globals.collapsedSeriesIndices.indexOf(a2) < 0 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(a2) < 0 || (t2[a2].data = [], s2++);
      }) : t2.forEach((i2, a2) => {
        e2.globals.collapsedSeriesIndices.indexOf(a2) < 0 || (t2[a2] = 0, s2++);
      }), e2.globals.allSeriesCollapsed = s2 === t2.length, t2;
    }
  };
  const Ae = "http://www.w3.org/2000/svg";
  class Ce {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.svgEl = null, this.arrowEl = null, this.hoverValueEl = null, this._min = 0, this._max = 0, this._geom = null, this._bandHitEls = [], this._activeBandIndex = -1, this._onCellEnter = this._onCellEnter.bind(this), this._onCellLeave = this._onCellLeave.bind(this), this._onBandEnter = this._onBandEnter.bind(this), this._onBandLeave = this._onBandLeave.bind(this);
    }
    _getFormatter() {
      const t2 = this.w.config.plotOptions.heatmap.colorScale.gradientLegend;
      return "function" == typeof t2.formatter ? t2.formatter : (t3) => {
        if (!Number.isFinite(t3)) return String(t3);
        const e2 = Math.abs(t3);
        return e2 >= 1e3 ? t3.toFixed(0) : e2 >= 10 ? t3.toFixed(1) : t3.toFixed(2);
      };
    }
    static isEnabled(t2) {
      var e2, s2, i2, a2;
      const o2 = null == (a2 = null == (i2 = null == (s2 = null == (e2 = null == t2 ? void 0 : t2.config) ? void 0 : e2.plotOptions) ? void 0 : s2.heatmap) ? void 0 : i2.colorScale) ? void 0 : a2.gradientLegend;
      return !(!o2 || !o2.enabled);
    }
    draw() {
      var t2, e2, s2, i2, a2, o2, r2, n2;
      const l2 = this.w, h2 = l2.dom.elLegendWrap;
      if (!h2) return;
      const c2 = l2.config.plotOptions.heatmap.colorScale.gradientLegend, d2 = l2.config.legend.position, g2 = "left" === d2 || "right" === d2, p2 = null != (e2 = null == (t2 = c2.arrow) ? void 0 : t2.size) ? e2 : 8, u2 = p2 + 4, x2 = c2.showLabels ? 28 : 4, f2 = c2.showLabels ? 20 : 4, m2 = c2.showLabels ? 44 : 0, y2 = this._resolveStripLength(g2 ? c2.height : c2.width, g2), w2 = c2.thickness, v2 = g2 ? Math.max(w2 + u2 + 4, m2) : y2 + 2 * x2, A2 = g2 ? y2 + 2 * f2 : w2 + u2 + 4, C2 = (v2 - (w2 + u2)) / 2, S2 = g2 ? "left" === d2 ? C2 : C2 + u2 : x2, k2 = g2 ? f2 : "top" === d2 ? u2 : 4, D2 = b.createElementNS(Ae, "svg");
      D2.setAttribute("class", "apexcharts-heatmap-gradient-legend"), D2.setAttribute("width", String(v2)), D2.setAttribute("height", String(A2)), D2.setAttribute("overflow", "visible");
      const L2 = b.createElementNS(Ae, "defs"), M2 = `apexcharts-heatmap-gradient-${l2.globals.cuid}`, P2 = b.createElementNS(Ae, "linearGradient");
      P2.setAttribute("id", M2), g2 ? (P2.setAttribute("x1", "0"), P2.setAttribute("y1", "1"), P2.setAttribute("x2", "0"), P2.setAttribute("y2", "0")) : (P2.setAttribute("x1", "0"), P2.setAttribute("y1", "0"), P2.setAttribute("x2", "1"), P2.setAttribute("y2", "0"));
      const { min: T2, max: F2, stops: E2, bands: I2 } = this._computeStops();
      this._min = T2, this._max = F2, E2.forEach((t3) => {
        const e3 = b.createElementNS(Ae, "stop");
        e3.setAttribute("offset", `${(100 * t3.percent).toFixed(2)}%`), e3.setAttribute("stop-color", t3.color), P2.appendChild(e3);
      }), L2.appendChild(P2), D2.appendChild(L2);
      const X2 = b.createElementNS(Ae, "rect");
      if (X2.setAttribute("x", String(S2)), X2.setAttribute("y", String(k2)), X2.setAttribute("width", String(g2 ? w2 : y2)), X2.setAttribute("height", String(g2 ? y2 : w2)), X2.setAttribute("rx", "2"), X2.setAttribute("fill", `url(#${M2})`), D2.appendChild(X2), c2.showLabels) {
        const t3 = (null == (s2 = c2.labelStyle) ? void 0 : s2.colors) || (Array.isArray(l2.config.legend.labels.colors) ? l2.config.legend.labels.colors[0] : l2.config.legend.labels.colors) || l2.config.chart.foreColor, e3 = (null == (i2 = c2.labelStyle) ? void 0 : i2.fontSize) || "11px", o3 = (null == (a2 = c2.labelStyle) ? void 0 : a2.fontFamily) || l2.config.chart.fontFamily, r3 = this._getFormatter(), n3 = (s3, i3, a3, r4) => {
          const n4 = b.createElementNS(Ae, "text");
          return n4.setAttribute("x", String(i3)), n4.setAttribute("y", String(a3)), n4.setAttribute("text-anchor", r4), n4.setAttribute("dominant-baseline", "middle"), n4.setAttribute("fill", t3), n4.setAttribute("font-size", e3), o3 && n4.setAttribute("font-family", o3), n4.textContent = String(s3), n4;
        };
        if (g2) {
          const t4 = S2 + w2 / 2;
          D2.appendChild(n3(r3(T2), t4, k2 + y2 + 10, "middle")), D2.appendChild(n3(r3(F2), t4, k2 - 10, "middle"));
        } else {
          const t4 = k2 + w2 / 2;
          D2.appendChild(n3(r3(T2), S2 - 6, t4, "end")), D2.appendChild(n3(r3(F2), S2 + y2 + 6, t4, "start"));
        }
      }
      const R2 = (null == (o2 = c2.arrow) ? void 0 : o2.color) || l2.config.chart.foreColor, z2 = this._buildArrow(p2, R2, d2);
      if (D2.appendChild(z2), this.arrowEl = z2, this._bandHitEls = [], l2.config.legend.onItemHover.highlightDataSeries && I2.length > 0 && I2.forEach((t3) => {
        const e3 = b.createElementNS(Ae, "rect");
        if (g2) {
          const s3 = k2 + y2 - t3.p2 * y2, i3 = k2 + y2 - t3.p1 * y2;
          e3.setAttribute("x", String(S2)), e3.setAttribute("y", String(s3)), e3.setAttribute("width", String(w2)), e3.setAttribute("height", String(Math.max(0, i3 - s3)));
        } else e3.setAttribute("x", String(S2 + t3.p1 * y2)), e3.setAttribute("y", String(k2)), e3.setAttribute("width", String(Math.max(0, (t3.p2 - t3.p1) * y2))), e3.setAttribute("height", String(w2));
        e3.setAttribute("fill", "transparent"), e3.setAttribute("class", "apexcharts-heatmap-gradient-band"), e3.setAttribute("data:range-index", String(t3.index)), e3.style.cursor = "pointer", D2.appendChild(e3), this._bandHitEls.push(e3);
      }), this._geom = { isVertical: g2, position: d2, stripX: S2, stripY: k2, stripLength: y2, stripThickness: w2, arrowSize: p2, svgWidth: v2, svgHeight: A2 }, c2.showHoverValue) {
        const t3 = b.createElement("div");
        t3.classList.add("apexcharts-heatmap-gradient-legend-value"), t3.style.position = "absolute", t3.style.fontSize = (null == (r2 = c2.labelStyle) ? void 0 : r2.fontSize) || "11px", t3.style.fontFamily = (null == (n2 = c2.labelStyle) ? void 0 : n2.fontFamily) || l2.config.chart.fontFamily || "", t3.style.color = l2.config.chart.foreColor, t3.style.background = "rgba(0,0,0,0.65)", t3.style.color = "#fff", t3.style.padding = "2px 6px", t3.style.borderRadius = "3px", t3.style.pointerEvents = "none", t3.style.whiteSpace = "nowrap", t3.style.opacity = "0", t3.style.transition = "opacity 120ms ease", this.hoverValueEl = t3;
      }
      h2.classList.add("apexcharts-heatmap-gradient-legend-wrap"), h2.classList.add("apx-legend-position-" + d2), h2.appendChild(D2), this.hoverValueEl && h2.appendChild(this.hoverValueEl), this.svgEl = D2, this._applyWrapAlignment(h2, d2, g2, v2, A2), this._attachHoverListeners(), this._attachBandHoverListeners();
    }
    _resolveStripLength(t2, e2) {
      const s2 = this.w, i2 = e2 ? s2.globals.svgHeight || s2.config.chart.height || 300 : s2.globals.svgWidth || s2.config.chart.width || 600;
      if ("string" == typeof t2) {
        const e3 = t2.trim();
        if (e3.endsWith("%")) {
          const t3 = parseFloat(e3) || 0;
          return Math.max(20, i2 * t3 / 100);
        }
        const s3 = parseFloat(e3);
        return Number.isFinite(s3) ? s3 : 200;
      }
      return "number" == typeof t2 && Number.isFinite(t2) ? t2 : 200;
    }
    _applyWrapAlignment(t2, e2, s2, i2, a2) {
      const o2 = this.w, r2 = o2.config.plotOptions.heatmap.colorScale.gradientLegend.align || "center", n2 = 12, l2 = o2.globals.svgWidth || o2.config.chart.width || 600, h2 = o2.globals.svgHeight || o2.config.chart.height || 300, c2 = o2.config.legend.offsetX || 0, d2 = o2.config.legend.offsetY || 0;
      if (t2.style.position = "absolute", t2.style.display = "block", t2.style.overflow = "visible", t2.style.padding = "0", t2.style.width = i2 + "px", t2.style.height = a2 + "px", t2.style.right = "auto", t2.style.bottom = "auto", s2) {
        const s3 = h2 - a2 - 24;
        let o3;
        o3 = "start" === r2 ? n2 : "end" === r2 ? n2 + Math.max(0, s3) : n2 + Math.max(0, s3) / 2, t2.style.top = o3 + d2 + "px", t2.style.left = "left" === e2 ? n2 + c2 + "px" : l2 - i2 - n2 + c2 + "px";
      } else {
        const s3 = l2 - i2 - 24;
        let o3;
        o3 = "start" === r2 ? n2 : "end" === r2 ? n2 + Math.max(0, s3) : n2 + Math.max(0, s3) / 2, t2.style.left = o3 + c2 + "px", t2.style.top = "top" === e2 ? n2 + d2 + "px" : h2 - a2 - n2 + d2 + "px";
      }
    }
    repositionToPlot() {
      var t2, e2;
      if (!c.isBrowser()) return;
      const s2 = this.w, i2 = s2.globals, a2 = s2.dom.elLegendWrap;
      if (!a2 || !this._geom) return;
      if (!Number.isFinite(i2.gridWidth) || !Number.isFinite(i2.gridHeight)) return;
      const { isVertical: o2, position: r2, svgWidth: n2, svgHeight: l2, stripX: h2, stripY: d2, stripThickness: g2 } = this._geom, p2 = s2.config.plotOptions.heatmap.colorScale.gradientLegend.align || "center", u2 = s2.config.legend.offsetX || 0, x2 = s2.config.legend.offsetY || 0, f2 = null == (e2 = null == (t2 = this.ctx) ? void 0 : t2.dimensions) ? void 0 : e2.dimHelpers, m2 = f2 ? f2.getTitleSubtitleCoords("title").height + f2.getTitleSubtitleCoords("subtitle").height : 0, y2 = s2.layout.xAxisHeight || 0, w2 = (t3, e3) => {
        const s3 = Math.max(0, t3 - e3);
        return "start" === p2 ? 0 : "end" === p2 ? s3 : s3 / 2;
      };
      if (o2) {
        a2.style.top = i2.translateY + w2(i2.gridHeight, l2) + x2 + "px";
        const t3 = (("left" === r2 ? 0 : i2.translateX + i2.gridWidth) + ("left" === r2 ? i2.translateX : i2.svgWidth)) / 2;
        a2.style.left = t3 - h2 - g2 / 2 + u2 + "px";
      } else {
        a2.style.left = i2.translateX + w2(i2.gridWidth, n2) + u2 + "px";
        const t3 = (("top" === r2 ? m2 : i2.translateY + i2.gridHeight + y2) + ("top" === r2 ? i2.translateY : i2.svgHeight)) / 2;
        a2.style.top = t3 - d2 - g2 / 2 + x2 + "px";
      }
      b.requestAnimationFrame(() => this._enforceMinPlotGap());
    }
    _enforceMinPlotGap() {
      const t2 = this.w, e2 = t2.dom.elLegendWrap, s2 = this.svgEl && this.svgEl.querySelector("rect"), i2 = t2.dom.baseEl.querySelector(".apexcharts-grid");
      if (!(e2 && s2 && i2 && this._geom)) return;
      const a2 = s2.getBoundingClientRect(), o2 = i2.getBoundingClientRect();
      if (!(a2.width && a2.height && o2.width && o2.height)) return;
      const { isVertical: r2, position: n2 } = this._geom;
      if (r2) {
        const t3 = "left" === n2 ? o2.left - a2.right : a2.left - o2.right;
        if (t3 < 16) {
          const s3 = parseFloat(e2.style.left) || 0, i3 = 16 - t3;
          e2.style.left = s3 + ("left" === n2 ? -i3 : i3) + "px";
        }
      } else {
        const t3 = "top" === n2 ? o2.top - a2.bottom : a2.top - o2.bottom;
        if (t3 < 16) {
          const s3 = parseFloat(e2.style.top) || 0, i3 = 16 - t3;
          e2.style.top = s3 + ("top" === n2 ? -i3 : i3) + "px";
        }
      }
    }
    destroy() {
      var t2, e2, s2, i2, a2, o2, r2;
      for (let s3 = 0; s3 < this._bandHitEls.length; s3++) {
        const i3 = this._bandHitEls[s3];
        null == (t2 = i3.removeEventListener) || t2.call(i3, "mousemove", this._onBandEnter), null == (e2 = i3.removeEventListener) || e2.call(i3, "mouseout", this._onBandLeave);
      }
      if (this._bandHitEls = [], this._activeBandIndex = -1, null == (s2 = this.ctx) ? void 0 : s2.events) try {
        null == (a2 = (i2 = this.ctx.events).removeEventListener) || a2.call(i2, "dataPointMouseEnter", this._onCellEnter), null == (r2 = (o2 = this.ctx.events).removeEventListener) || r2.call(o2, "dataPointMouseLeave", this._onCellLeave);
      } catch (t3) {
      }
    }
    _attachBandHoverListeners() {
      if (c.isBrowser()) for (let t2 = 0; t2 < this._bandHitEls.length; t2++) {
        const e2 = this._bandHitEls[t2];
        e2.addEventListener("mousemove", this._onBandEnter), e2.addEventListener("mouseout", this._onBandLeave);
      }
    }
    _onBandEnter(t2) {
      var e2, s2, i2, a2;
      const o2 = this.w, r2 = t2.currentTarget, n2 = parseInt(null != (e2 = r2.getAttribute("data:range-index")) ? e2 : "-1", 10);
      n2 < 0 || n2 === this._activeBandIndex || (this._activeBandIndex = n2, null == (a2 = null == (i2 = null == (s2 = this.ctx) ? void 0 : s2.events) ? void 0 : i2.fireEvent) || a2.call(i2, "legendHover", [this.ctx, n2, o2]), new lt(o2).highlightRangeInSeries(n2, "highlight"));
    }
    _onBandLeave() {
      if (this._activeBandIndex < 0) return;
      const t2 = this._activeBandIndex;
      this._activeBandIndex = -1, new lt(this.w).highlightRangeInSeries(t2, "reset");
    }
    _attachHoverListeners() {
      var t2, e2;
      c.isBrowser() && (null == (e2 = null == (t2 = this.ctx) ? void 0 : t2.events) ? void 0 : e2.addEventListener) && (this.ctx.events.addEventListener("dataPointMouseEnter", this._onCellEnter), this.ctx.events.addEventListener("dataPointMouseLeave", this._onCellLeave));
    }
    _onCellEnter(...t2) {
      var e2, s2;
      const i2 = this.w;
      if (!this.arrowEl) return;
      const a2 = t2[t2.length - 1];
      if (!a2 || "object" != typeof a2) return;
      const o2 = a2.seriesIndex, r2 = a2.dataPointIndex;
      if ("number" != typeof o2 || "number" != typeof r2) return;
      if ("heatmap" !== i2.config.chart.type) return;
      const n2 = null == (s2 = null == (e2 = i2.seriesData) ? void 0 : e2.series) ? void 0 : s2[o2], l2 = null == n2 ? void 0 : n2[r2];
      null == l2 || Number.isNaN(l2) || this._positionArrow(l2);
    }
    _onCellLeave() {
      this.arrowEl && (this.arrowEl.setAttribute("opacity", "0"), this.hoverValueEl && (this.hoverValueEl.style.opacity = "0"));
    }
    _positionArrow(t2) {
      if (!this.arrowEl || !this._geom) return;
      const { isVertical: e2, position: s2, stripX: i2, stripY: a2, stripLength: o2, stripThickness: r2, arrowSize: n2 } = this._geom, l2 = this._min, h2 = this._max - l2;
      let c2;
      if (c2 = 0 === h2 ? 0.5 : (t2 - l2) / h2, c2 < 0 && (c2 = 0), c2 > 1 && (c2 = 1), e2) {
        const t3 = a2 + o2 - c2 * o2;
        let e3, l3;
        "left" === s2 ? (e3 = i2 + r2, l3 = e3 + n2) : (e3 = i2, l3 = e3 - n2);
        const h3 = [`${e3},${t3}`, `${l3},${t3 - n2 / 2}`, `${l3},${t3 + n2 / 2}`].join(" ");
        this.arrowEl.setAttribute("points", h3);
      } else {
        const t3 = i2 + c2 * o2;
        let e3, l3;
        "top" === s2 ? (e3 = a2 + r2, l3 = e3 + n2) : (e3 = a2, l3 = e3 - n2);
        const h3 = [`${t3},${e3}`, `${t3 - n2 / 2},${l3}`, `${t3 + n2 / 2},${l3}`].join(" ");
        this.arrowEl.setAttribute("points", h3);
      }
      if (this.arrowEl.setAttribute("opacity", "1"), this.hoverValueEl) {
        const l3 = this._getFormatter();
        if (this.hoverValueEl.textContent = l3(t2), e2) {
          const t3 = a2 + o2 - c2 * o2;
          "left" === s2 ? this.hoverValueEl.style.left = `${i2 + r2 + n2 + 8}px` : (this.hoverValueEl.style.left = i2 - n2 - 8 + "px", this.hoverValueEl.style.transform = "translateX(-100%)"), this.hoverValueEl.style.top = t3 - 9 + "px";
        } else {
          const t3 = i2 + c2 * o2;
          this.hoverValueEl.style.left = `${t3}px`, this.hoverValueEl.style.transform = "translateX(-50%)", this.hoverValueEl.style.top = "top" === s2 ? `${a2 + r2 + n2 + 8}px` : a2 - n2 - 18 + "px";
        }
        this.hoverValueEl.style.opacity = "1";
      }
    }
    _buildArrow(t2, e2, s2) {
      const i2 = b.createElementNS(Ae, "polygon");
      return i2.setAttribute("fill", e2), i2.setAttribute("opacity", "0"), i2.setAttribute("class", "apexcharts-heatmap-gradient-arrow"), i2.setAttribute("points", "0,0 0,0 0,0"), i2.setAttribute("pointer-events", "none"), i2;
    }
    _computeStops() {
      var t2, e2;
      const s2 = this.w, i2 = s2.config.plotOptions.heatmap.colorScale, a2 = i2.gradientLegend;
      let o2 = 1 / 0, r2 = -1 / 0;
      const h2 = (null == (t2 = s2.seriesData) ? void 0 : t2.series) || [];
      for (let t3 = 0; t3 < h2.length; t3++) {
        const e3 = h2[t3];
        if (e3) for (let t4 = 0; t4 < e3.length; t4++) {
          const s3 = e3[t4];
          null == s3 || Number.isNaN(s3) || (s3 < o2 && (o2 = s3), s3 > r2 && (r2 = s3));
        }
      }
      Number.isFinite(o2) || (o2 = 0), Number.isFinite(r2) || (r2 = 0);
      let c2 = o2, d2 = r2;
      void 0 !== i2.min && (c2 = i2.min < o2 ? i2.min : o2), void 0 !== i2.max && (d2 = i2.max > r2 ? i2.max : r2);
      const g2 = [], p2 = [];
      if (i2.ranges && i2.ranges.length > 0) {
        const t3 = i2.ranges.map((t4, e4) => l(n({}, t4), { _originalIndex: e4 })).sort((t4, e4) => t4.from - e4.from), e3 = t3[0].from, s3 = t3[t3.length - 1].to;
        c2 = e3, d2 = s3;
        const a3 = s3 - e3 || 1;
        t3.forEach((t4) => {
          const s4 = (t4.from - e3) / a3, i3 = (t4.to - e3) / a3;
          g2.push({ percent: (s4 + i3) / 2, color: t4.color }), p2.push({ index: t4._originalIndex, p1: s4, p2: i3 });
        });
      } else {
        const t3 = s2.globals.colors[0] || "#008FFB", i3 = new m(), o3 = null != (e2 = s2.config.plotOptions.heatmap.shadeIntensity) ? e2 : 0.5, r3 = s2.globals.hasNegs, n2 = Math.max(2, a2.stops || 16);
        for (let e3 = 0; e3 < n2; e3++) {
          const a3 = e3 / (n2 - 1), l2 = c2 + a3 * (d2 - c2), h3 = Math.abs(d2) + Math.abs(c2), p3 = 0 === h3 ? 0 : 100 * l2 / h3;
          let u2;
          u2 = r3 ? s2.config.plotOptions.heatmap.reverseNegativeShade ? p3 < 0 ? p3 / 100 * (1.25 * o3) : 1.25 * o3 * (1 - p3 / 100) : p3 <= 0 ? 1 - (1 + p3 / 100) * o3 : (1 - p3 / 100) * o3 : 1 - p3 / 100, u2 > 1 && (u2 = 1), u2 < -1 && (u2 = -1);
          const x2 = s2.config.plotOptions.heatmap.enableShades ? i3.shadeColor("dark" === s2.config.theme.mode ? -1 * u2 : u2, t3) : t3;
          g2.push({ percent: a3, color: x2 });
        }
      }
      return { min: c2, max: d2, stops: g2, bands: p2 };
    }
  }
  me.registerFeatures({ legend: class {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.printDataLabelsInner = (...t3) => {
        var s2;
        return null == (s2 = e2.pie) ? void 0 : s2.printDataLabelsInner(...t3);
      }, this.updateSeries = (...t3) => e2.updateHelpers._updateSeries(...t3), this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ve(this);
    }
    init() {
      const t2 = this.w, e2 = t2.globals, s2 = t2.config, i2 = s2.legend.showForSingleSeries && 1 === this.w.seriesData.series.length || this.isBarsDistributed || "heatmap" === s2.chart.type || this.w.seriesData.series.length > 1;
      if (this.legendHelpers.appendToForeignObject(), (i2 || !e2.axisCharts) && s2.legend.show) {
        const e3 = t2.dom.elLegendWrap;
        for (; e3.firstChild; ) e3.removeChild(e3.firstChild);
        this.heatmapGradientLegend && (this.heatmapGradientLegend.destroy(), this.heatmapGradientLegend = null), "heatmap" === s2.chart.type && Ce.isEnabled(t2) ? (this.heatmapGradientLegend = new Ce(t2, this.ctx), this.heatmapGradientLegend.draw()) : (this.drawLegends(), "bottom" === s2.legend.position || "top" === s2.legend.position ? this.legendAlignHorizontal() : "right" !== s2.legend.position && "left" !== s2.legend.position || this.legendAlignVertical());
      }
    }
    createLegendMarker({ i: t2, fillcolor: e2 }) {
      const s2 = this.w, i2 = b.createElement("span");
      i2.classList.add("apexcharts-legend-marker");
      const a2 = s2.config.legend.markers.shape || s2.config.markers.shape;
      let o2 = a2;
      Array.isArray(a2) && (o2 = a2[t2]);
      const r2 = Array.isArray(s2.config.legend.markers.size) ? parseFloat(s2.config.legend.markers.size[t2]) : parseFloat(s2.config.legend.markers.size), h2 = Array.isArray(s2.config.legend.markers.offsetX) ? parseFloat(s2.config.legend.markers.offsetX[t2]) : parseFloat(s2.config.legend.markers.offsetX), d2 = Array.isArray(s2.config.legend.markers.offsetY) ? parseFloat(s2.config.legend.markers.offsetY[t2]) : parseFloat(s2.config.legend.markers.offsetY), g2 = Array.isArray(s2.config.legend.markers.strokeWidth) ? parseFloat(s2.config.legend.markers.strokeWidth[t2]) : parseFloat(s2.config.legend.markers.strokeWidth), p2 = i2.style;
      if (p2.height = 2 * (r2 + g2) + "px", p2.width = 2 * (r2 + g2) + "px", p2.left = h2 + "px", p2.top = d2 + "px", s2.config.legend.markers.customHTML) p2.background = "transparent", p2.color = e2[t2], Array.isArray(s2.config.legend.markers.customHTML) ? s2.config.legend.markers.customHTML[t2] && (i2.innerHTML = s2.config.legend.markers.customHTML[t2]()) : i2.innerHTML = s2.config.legend.markers.customHTML();
      else {
        const a3 = new j(this.ctx.w, this.ctx).getMarkerConfig({ cssClass: `apexcharts-legend-marker apexcharts-marker apexcharts-marker-${o2}`, seriesIndex: t2, strokeWidth: g2, size: r2 }), h3 = (c.isBrowser() ? window.SVG : global.SVG)().addTo(i2).size("100%", "100%"), d3 = new N(this.w).drawMarker(0, 0, l(n({}, a3), { pointFillColor: Array.isArray(e2) ? e2[t2] : a3.pointFillColor, shape: o2 }));
        s2.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach((t3) => {
          t3.node.classList.contains("apexcharts-marker-triangle") ? t3.node.style.transform = "translate(50%, 45%)" : t3.node.style.transform = "translate(50%, 50%)";
        }), h3.add(d3);
      }
      return i2;
    }
    drawLegends() {
      var t2;
      const e2 = this, s2 = this.w, i2 = s2.dom.elLegendWrap, a2 = s2.config.legend.fontFamily;
      let o2 = s2.seriesData.seriesNames, r2 = s2.config.legend.markers.fillColors ? s2.config.legend.markers.fillColors.slice() : s2.globals.colors.slice();
      if ("heatmap" === s2.config.chart.type) {
        const t3 = s2.config.plotOptions.heatmap.colorScale.ranges;
        o2 = t3.map((t4) => t4.name ? t4.name : t4.from + " - " + t4.to), r2 = t3.map((t4) => t4.color);
      } else this.isBarsDistributed && (o2 = s2.labelData.labels.slice());
      s2.config.legend.customLegendItems.length && (o2 = s2.config.legend.customLegendItems);
      const n2 = s2.formatters.legendFormatter, l2 = s2.config.legend.inverseOrder, h2 = [];
      s2.labelData.seriesGroups.length > 1 && s2.config.legend.clusterGroupedSeries && s2.labelData.seriesGroups.forEach((t3, e3) => {
        h2[e3] = b.createElement("div"), h2[e3].classList.add("apexcharts-legend-group", `apexcharts-legend-group-${e3}`), "horizontal" === s2.config.legend.clusterGroupedSeriesOrientation ? i2.classList.add("apexcharts-legend-group-horizontal") : h2[e3].classList.add("apexcharts-legend-group-vertical");
      });
      for (let e3 = l2 ? o2.length - 1 : 0; l2 ? e3 >= 0 : e3 <= o2.length - 1; l2 ? e3-- : e3++) {
        const l3 = n2(o2[e3], { seriesIndex: e3, w: s2 });
        let c2 = false, d2 = false;
        if (s2.globals.collapsedSeries.length > 0) for (let t3 = 0; t3 < s2.globals.collapsedSeries.length; t3++) s2.globals.collapsedSeries[t3].index === e3 && (c2 = true);
        if (s2.globals.ancillaryCollapsedSeriesIndices.length > 0) for (let t3 = 0; t3 < s2.globals.ancillaryCollapsedSeriesIndices.length; t3++) s2.globals.ancillaryCollapsedSeriesIndices[t3] === e3 && (d2 = true);
        const g2 = this.createLegendMarker({ i: e3, fillcolor: r2 });
        N.setAttrs(g2, { rel: e3 + 1, "data:collapsed": c2 || d2 }), (c2 || d2) && g2.classList.add("apexcharts-inactive-legend");
        const p2 = b.createElement("div");
        if (s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.keyboard.enabled) {
          p2.setAttribute("role", "button"), p2.setAttribute("tabindex", "0");
          const t3 = Array.isArray(l3) ? l3.join(" ") : l3, e4 = c2 || d2, s3 = e4 ? "hidden" : "visible";
          p2.setAttribute("aria-label", `${t3}, ${s3}. Press Enter or Space to toggle.`), p2.setAttribute("aria-pressed", e4 ? "true" : "false");
        }
        const u2 = b.createElement("span");
        u2.classList.add("apexcharts-legend-text"), u2.innerHTML = Array.isArray(l3) ? l3.join(" ") : l3;
        let x2 = s2.config.legend.labels.useSeriesColors ? s2.globals.colors[e3] : Array.isArray(s2.config.legend.labels.colors) ? null == (t2 = s2.config.legend.labels.colors) ? void 0 : t2[e3] : s2.config.legend.labels.colors;
        x2 || (x2 = s2.config.chart.foreColor), u2.style.color = x2, u2.style.fontSize = s2.config.legend.fontSize, u2.style.fontWeight = s2.config.legend.fontWeight, u2.style.fontFamily = a2 || s2.config.chart.fontFamily, N.setAttrs(u2, { rel: e3 + 1, i: e3, "data:default-text": encodeURIComponent(l3), "data:collapsed": c2 || d2 }), p2.appendChild(g2), p2.appendChild(u2);
        const f2 = new F(this.w);
        if (!s2.config.legend.showForZeroSeries) {
          0 === f2.getSeriesTotalByIndex(e3) && f2.seriesHaveSameValues(e3) && !f2.isSeriesNull(e3) && -1 === s2.globals.collapsedSeriesIndices.indexOf(e3) && -1 === s2.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && p2.classList.add("apexcharts-hidden-zero-series");
        }
        s2.config.legend.showForNullSeries || f2.isSeriesNull(e3) && -1 === s2.globals.collapsedSeriesIndices.indexOf(e3) && -1 === s2.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && p2.classList.add("apexcharts-hidden-null-series"), h2.length ? s2.labelData.seriesGroups.forEach((t3, a3) => {
          var o3, r3;
          t3.includes(null != (r3 = null == (o3 = s2.config.series[e3]) ? void 0 : o3.name) ? r3 : "") && (i2.appendChild(h2[a3]), h2[a3].appendChild(p2));
        }) : i2.appendChild(p2), i2.classList.add(`apexcharts-align-${s2.config.legend.horizontalAlign}`), i2.classList.add("apx-legend-position-" + s2.config.legend.position), p2.classList.add("apexcharts-legend-series"), p2.style.margin = `${s2.config.legend.itemMargin.vertical}px ${s2.config.legend.itemMargin.horizontal}px`, i2.style.width = s2.config.legend.width ? s2.config.legend.width + "px" : "", i2.style.height = s2.config.legend.height ? s2.config.legend.height + "px" : "", N.setAttrs(p2, { rel: e3 + 1, seriesName: m.escapeString(o2[e3]), "data:collapsed": c2 || d2 }), (c2 || d2) && p2.classList.add("apexcharts-inactive-legend"), s2.config.legend.onItemClick.toggleDataSeries || p2.classList.add("apexcharts-no-click");
      }
      s2.dom.elWrap.addEventListener("click", e2.onLegendClick, true), s2.config.legend.onItemHover.highlightDataSeries && 0 === s2.config.legend.customLegendItems.length && (s2.dom.elWrap.addEventListener("mousemove", e2.onLegendHovered, true), s2.dom.elWrap.addEventListener("mouseout", e2.onLegendHovered, true)), s2.config.chart.accessibility.enabled && s2.config.chart.accessibility.keyboard.enabled && s2.dom.elWrap.addEventListener("keydown", e2.onLegendKeyDown.bind(e2), true);
    }
    setLegendWrapXY(t2, e2) {
      const s2 = this.w, i2 = s2.dom.elLegendWrap, a2 = i2.clientHeight;
      let o2 = 0, r2 = 0;
      if ("bottom" === s2.config.legend.position) r2 = s2.globals.svgHeight - Math.min(a2, s2.globals.svgHeight / 2) - 5;
      else if ("top" === s2.config.legend.position) {
        const t3 = new xt(this.w, this.ctx), e3 = t3.dimHelpers.getTitleSubtitleCoords("title").height, s3 = t3.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        r2 = (e3 > 0 ? e3 - 10 : 0) + (s3 > 0 ? s3 - 10 : 0);
      }
      i2.style.position = "absolute", o2 = o2 + t2 + s2.config.legend.offsetX, r2 = r2 + e2 + s2.config.legend.offsetY, i2.style.left = o2 + "px", i2.style.top = r2 + "px", "right" === s2.config.legend.position && (i2.style.left = "auto", i2.style.right = 25 + s2.config.legend.offsetX + "px");
      ["width", "height"].forEach((t3) => {
        i2 && i2.style[t3] && (i2.style[t3] = parseInt(String(s2.config.legend[t3]), 10) + "px");
      });
    }
    legendAlignHorizontal() {
      const t2 = this.w;
      t2.dom.elLegendWrap.style.right = "0";
      const e2 = new xt(this.w, this.ctx), s2 = e2.dimHelpers.getTitleSubtitleCoords("title"), i2 = e2.dimHelpers.getTitleSubtitleCoords("subtitle");
      let a2 = 0;
      "top" === t2.config.legend.position && (a2 = s2.height + i2.height + t2.config.title.margin + t2.config.subtitle.margin - 10), this.setLegendWrapXY(20, a2);
    }
    legendAlignVertical() {
      const t2 = this.w, e2 = this.legendHelpers.getLegendDimensions();
      let s2 = 0;
      "left" === t2.config.legend.position && (s2 = 20), "right" === t2.config.legend.position && (s2 = t2.globals.svgWidth - e2.clww - 10), this.setLegendWrapXY(s2, 20);
    }
    onLegendHovered(t2) {
      var e2;
      const s2 = this.w, i2 = t2.target, a2 = i2.classList.contains("apexcharts-legend-series") || i2.classList.contains("apexcharts-legend-text") || i2.classList.contains("apexcharts-legend-marker");
      if ("heatmap" === s2.config.chart.type || this.isBarsDistributed) {
        if (a2) {
          const s3 = parseInt(null != (e2 = i2.getAttribute("rel")) ? e2 : "0", 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, s3, this.w]);
          const a3 = new lt(this.ctx.w);
          "mousemove" === t2.type ? a3.highlightRangeInSeries(s3, "highlight") : "mouseout" === t2.type && a3.highlightRangeInSeries(s3, "reset");
        }
      } else if (!i2.classList.contains("apexcharts-inactive-legend") && a2) {
        new lt(this.ctx.w).toggleSeriesOnHover(t2, i2);
      }
    }
    onLegendKeyDown(t2) {
      const e2 = this, s2 = this.w, i2 = t2.target;
      if ((i2.classList.contains("apexcharts-legend-series") || i2.classList.contains("apexcharts-legend-text") || i2.classList.contains("apexcharts-legend-marker")) && ("Enter" === t2.key || " " === t2.key)) {
        t2.preventDefault();
        const a2 = i2.getAttribute("rel");
        e2.onLegendClick(t2), null !== a2 && s2.config.legend.onItemClick.toggleDataSeries && requestAnimationFrame(() => {
          const t3 = s2.dom.baseEl.querySelector(`.apexcharts-legend-series[rel="${a2}"]`);
          t3 && t3.focus();
        });
      }
    }
    onLegendClick(t2) {
      var e2;
      const s2 = this.w, i2 = t2.target;
      if (!s2.config.legend.customLegendItems.length && (i2.classList.contains("apexcharts-legend-series") || i2.classList.contains("apexcharts-legend-text") || i2.classList.contains("apexcharts-legend-marker"))) {
        const t3 = parseInt(null != (e2 = i2.getAttribute("rel")) ? e2 : "0", 10) - 1, a2 = "true" === i2.getAttribute("data:collapsed"), o2 = this.w.config.chart.events.legendClick;
        "function" == typeof o2 && o2(this.ctx, t3, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, t3, this.w]);
        const r2 = this.w.config.legend.markers.onClick;
        "function" == typeof r2 && i2.classList.contains("apexcharts-legend-marker") && (r2(this.ctx, t3, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, t3, this.w]));
        "treemap" !== s2.config.chart.type && "heatmap" !== s2.config.chart.type && !this.isBarsDistributed && s2.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(t3, a2);
      }
    }
  } });
  class Se {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t2.globals.minX, this.maxX = t2.globals.maxX, this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null, this.elMenu = null, this.elMenuItems = [], this.t = null;
    }
    createToolbar() {
      const t2 = this.w, e2 = () => b.createElementNS("http://www.w3.org/1999/xhtml", "div"), s2 = () => {
        const t3 = b.createElementNS("http://www.w3.org/1999/xhtml", "button");
        return t3.setAttribute("type", "button"), t3;
      }, i2 = e2();
      if (i2.setAttribute("class", "apexcharts-toolbar"), i2.style.top = t2.config.chart.toolbar.offsetY + "px", i2.style.right = 3 - t2.config.chart.toolbar.offsetX + "px", t2.dom.elWrap.appendChild(i2), this.elZoom = s2(), this.elZoomIn = s2(), this.elZoomOut = s2(), this.elPan = s2(), this.elSelection = s2(), this.elZoomReset = s2(), this.elMenuIcon = s2(), this.elMenu = e2(), this.elCustomIcons = [], this.t = t2.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (let t3 = 0; t3 < this.t.customIcons.length; t3++) this.elCustomIcons.push(s2());
      const a2 = [], o2 = (e3, s3, i3) => {
        const o3 = e3.toLowerCase();
        this.t[o3] && t2.config.chart.zoom.enabled && a2.push({ el: s3, icon: "string" == typeof this.t[o3] ? this.t[o3] : i3, title: this.localeValues[e3], class: `apexcharts-${o3}-icon` });
      };
      o2("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12 5v14M5 12h14"/>\n</svg>\n'), o2("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M5 12h14"/>\n</svg>\n');
      const r2 = (e3) => {
        this.t[e3] && t2.config.chart[e3].enabled && a2.push({ el: "zoom" === e3 ? this.elZoom : this.elSelection, icon: "string" == typeof this.t[e3] ? this.t[e3] : "zoom" === e3 ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="11" cy="11" r="7"/>\n    <path d="m21 21-4.3-4.3M8 11h6M11 8v6"/>\n</svg>\n' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M5 3a2 2 0 0 0-2 2"/>\n    <path d="M19 3a2 2 0 0 1 2 2"/>\n    <path d="M21 19a2 2 0 0 1-2 2"/>\n    <path d="M5 21a2 2 0 0 1-2-2"/>\n    <path d="M9 3h1M14 3h1M9 21h1M14 21h1M3 9v1M3 14v1M21 9v1M21 14v1"/>\n</svg>\n', title: this.localeValues["zoom" === e3 ? "selectionZoom" : "selection"], class: `apexcharts-${e3}-icon` });
      };
      r2("zoom"), r2("selection"), this.t.pan && t2.config.chart.zoom.enabled && a2.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M5 9 2 12l3 3"/>\n    <path d="M9 5l3-3 3 3"/>\n    <path d="M15 19l-3 3-3-3"/>\n    <path d="M19 9l3 3-3 3"/>\n    <path d="M2 12h20"/>\n    <path d="M12 2v20"/>\n</svg>\n', title: this.localeValues.pan, class: "apexcharts-pan-icon" }), o2("reset", this.elZoomReset, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>\n    <path d="M3 3v5h5"/>\n</svg>\n'), this.t.download && a2.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M4 6h16M4 12h16M4 18h16"/>\n</svg>\n', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (let t3 = 0; t3 < this.elCustomIcons.length; t3++) a2.push({ el: this.elCustomIcons[t3], icon: this.t.customIcons[t3].icon, title: this.t.customIcons[t3].title, index: this.t.customIcons[t3].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[t3].class });
      a2.forEach((t3, e3) => {
        t3.index && m.moveIndexInArray(a2, e3, t3.index);
      });
      for (let t3 = 0; t3 < a2.length; t3++) N.setAttrs(a2[t3].el, { class: a2[t3].class, title: a2[t3].title, "aria-label": a2[t3].title }), a2[t3].el.innerHTML = a2[t3].icon, i2.appendChild(a2[t3].el);
      this.elZoom.parentNode && this.elZoom.setAttribute("aria-pressed", String(!!t2.interact.zoomEnabled)), this.elSelection.parentNode && this.elSelection.setAttribute("aria-pressed", String(!!t2.interact.selectionEnabled)), this.elPan.parentNode && this.elPan.setAttribute("aria-pressed", String(!!t2.interact.panEnabled)), this.elMenuIcon.parentNode && (this.elMenuIcon.setAttribute("aria-haspopup", "true"), this.elMenuIcon.setAttribute("aria-expanded", "false")), this._createHamburgerMenu(i2), t2.interact.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : t2.interact.panEnabled ? this.elPan.classList.add(this.selectedClass) : t2.interact.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    }
    _createHamburgerMenu(t2) {
      this.elMenuItems = [], t2.appendChild(this.elMenu), N.setAttrs(this.elMenu, { class: "apexcharts-menu", role: "menu" });
      const e2 = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }];
      for (let t3 = 0; t3 < e2.length; t3++) this.elMenuItems.push(b.createElementNS("http://www.w3.org/1999/xhtml", "div")), this.elMenuItems[t3].innerHTML = e2[t3].title, N.setAttrs(this.elMenuItems[t3], { class: `apexcharts-menu-item ${e2[t3].name}`, title: e2[t3].title, role: "menuitem", tabindex: "-1" }), this.elMenu.appendChild(this.elMenuItems[t3]);
    }
    addToolbarEventListeners() {
      var t2, e2, s2, i2, a2, o2, r2, n2;
      null == (t2 = this.elZoomReset) || t2.addEventListener("click", this.handleZoomReset.bind(this)), null == (e2 = this.elSelection) || e2.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), null == (s2 = this.elZoom) || s2.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), null == (i2 = this.elZoomIn) || i2.addEventListener("click", this.handleZoomIn.bind(this)), null == (a2 = this.elZoomOut) || a2.addEventListener("click", this.handleZoomOut.bind(this)), null == (o2 = this.elPan) || o2.addEventListener("click", this.togglePanning.bind(this)), null == (r2 = this.elMenuIcon) || r2.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((t3) => {
        t3.classList.contains("exportSVG") ? t3.addEventListener("click", this.handleDownload.bind(this, "svg")) : t3.classList.contains("exportPNG") ? t3.addEventListener("click", this.handleDownload.bind(this, "png")) : t3.classList.contains("exportCSV") && t3.addEventListener("click", this.handleDownload.bind(this, "csv"));
      });
      for (let t3 = 0; t3 < this.t.customIcons.length; t3++) this.elCustomIcons[t3].addEventListener("click", this.t.customIcons[t3].click.bind(this, this.ctx, this.ctx.w));
      [this.elZoomReset, this.elSelection, this.elZoom, this.elZoomIn, this.elZoomOut, this.elPan, this.elMenuIcon, ...this.elCustomIcons].forEach((t3) => {
        t3.addEventListener("keydown", (e3) => {
          if ("Enter" === e3.key || " " === e3.key) {
            e3.preventDefault();
            const s3 = t3.className;
            t3.click(), requestAnimationFrame(() => {
              const t4 = this.w.dom.baseEl;
              if (!t4) return;
              const e4 = s3.split(" ").find((t5) => t5.startsWith("apexcharts-"));
              if (!e4) return;
              const i3 = t4.querySelector(`.${e4}`);
              i3 && i3.focus();
            });
          }
        });
      }), null == (n2 = this.elMenuIcon) || n2.addEventListener("keydown", (t3) => {
        var e3;
        "ArrowDown" !== t3.key && "ArrowUp" !== t3.key || (t3.preventDefault(), (null == (e3 = this.elMenu) ? void 0 : e3.classList.contains("apexcharts-menu-open")) || this.toggleMenu(), window.setTimeout(() => {
          const e4 = "ArrowDown" === t3.key ? 0 : this.elMenuItems.length - 1;
          this.elMenuItems[e4] && this.elMenuItems[e4].focus();
        }, 20));
      }), this.elMenuItems.forEach((t3, e3) => {
        t3.addEventListener("keydown", (s3) => {
          var i3;
          if ("ArrowDown" === s3.key) {
            s3.preventDefault();
            (this.elMenuItems[e3 + 1] || this.elMenuItems[0]).focus();
          } else if ("ArrowUp" === s3.key) {
            s3.preventDefault();
            (this.elMenuItems[e3 - 1] || this.elMenuItems[this.elMenuItems.length - 1]).focus();
          } else "Escape" === s3.key || "Tab" === s3.key ? (this._closeMenu(), null == (i3 = this.elMenuIcon) || i3.focus(), "Tab" === s3.key || s3.preventDefault()) : "Enter" !== s3.key && " " !== s3.key || (s3.preventDefault(), t3.click());
        });
      });
    }
    toggleZoomSelection(t2) {
      this.ctx.getSyncedCharts().forEach((e2) => {
        e2.ctx.toolbar.toggleOtherControls();
        const s2 = "selection" === t2 ? e2.ctx.toolbar.elSelection : e2.ctx.toolbar.elZoom, i2 = "selection" === t2 ? "selectionEnabled" : "zoomEnabled";
        e2.w.globals[i2] = !e2.w.globals[i2], s2.classList.contains(e2.ctx.toolbar.selectedClass) ? s2.classList.remove(e2.ctx.toolbar.selectedClass) : s2.classList.add(e2.ctx.toolbar.selectedClass), s2.setAttribute("aria-pressed", String(e2.w.globals[i2]));
      });
    }
    getToolbarIconsReference() {
      const t2 = this.w;
      this.elZoom || (this.elZoom = t2.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t2.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t2.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    }
    enableZoomPanFromToolbar(t2) {
      this.toggleOtherControls(), "pan" === t2 ? this.w.interact.panEnabled = true : this.w.interact.zoomEnabled = true;
      const e2 = "pan" === t2 ? this.elPan : this.elZoom, s2 = "pan" === t2 ? this.elZoom : this.elPan;
      e2 && e2.classList.add(this.selectedClass), s2 && s2.classList.remove(this.selectedClass);
    }
    togglePanning() {
      this.ctx.getSyncedCharts().forEach((t2) => {
        t2.ctx.toolbar.toggleOtherControls(), t2.w.interact.panEnabled = !t2.w.interact.panEnabled, t2.ctx.toolbar.elPan.classList.contains(t2.ctx.toolbar.selectedClass) ? t2.ctx.toolbar.elPan.classList.remove(t2.ctx.toolbar.selectedClass) : t2.ctx.toolbar.elPan.classList.add(t2.ctx.toolbar.selectedClass), t2.ctx.toolbar.elPan.setAttribute("aria-pressed", String(t2.w.interact.panEnabled));
      });
    }
    toggleOtherControls() {
      const t2 = this.w;
      t2.interact.panEnabled = false, t2.interact.zoomEnabled = false, t2.interact.selectionEnabled = false, this.getToolbarIconsReference();
      [this.elPan, this.elSelection, this.elZoom].forEach((t3) => {
        t3 && t3.classList.remove(this.selectedClass);
      });
    }
    _currentXRange() {
      const t2 = this.w;
      return t2.axisFlags.isRangeBar ? { minX: t2.globals.minY, maxX: t2.globals.maxY } : { minX: t2.globals.minX, maxX: t2.globals.maxX };
    }
    handleZoomIn() {
      const t2 = this.w, { minX: e2, maxX: s2 } = this._currentXRange();
      this.minX = e2, this.maxX = s2;
      const i2 = (e2 + s2) / 2, a2 = (e2 + i2) / 2, o2 = (s2 + i2) / 2, r2 = this._getNewMinXMaxX(a2, o2);
      t2.interact.disableZoomIn || this.zoomUpdateOptions(r2.minX, r2.maxX);
    }
    handleZoomOut() {
      const t2 = this.w, { minX: e2, maxX: s2 } = this._currentXRange();
      if (this.minX = e2, this.maxX = s2, "datetime" === t2.config.xaxis.type && new Date(e2).getUTCFullYear() < 1e3) return;
      const i2 = (e2 + s2) / 2, a2 = e2 - (i2 - e2), o2 = s2 - (i2 - s2), r2 = this._getNewMinXMaxX(a2, o2);
      t2.interact.disableZoomOut || this.zoomUpdateOptions(r2.minX, r2.maxX);
    }
    _getNewMinXMaxX(t2, e2) {
      const s2 = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: s2 ? Math.floor(t2) : t2, maxX: s2 ? Math.floor(e2) : e2 };
    }
    zoomUpdateOptions(t2, e2) {
      const s2 = this.w;
      if (void 0 === t2 && void 0 === e2) return void this.handleZoomReset();
      if (s2.config.xaxis.convertedCatToNumeric && (t2 < 1 && (t2 = 1, e2 = s2.globals.dataPoints), e2 - t2 < 2)) return;
      let i2 = { min: t2, max: e2 };
      const a2 = this.getBeforeZoomRange(i2, void 0);
      a2 && (i2 = a2.xaxis);
      const o2 = { xaxis: i2 };
      if (!s2.globals.initialConfig) return;
      const r2 = m.clone(s2.globals.initialConfig.yaxis);
      s2.config.chart.group || (o2.yaxis = r2), this.w.interact.zoomed = true, this.ctx.updateHelpers._updateOptions(o2, false, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(i2, r2);
    }
    zoomCallback(t2, e2) {
      "function" == typeof this.ev.zoomed && (this.ev.zoomed(this.ctx, { xaxis: t2, yaxis: e2 }), this.ctx.events.fireEvent("zoomed", { xaxis: t2, yaxis: e2 }));
    }
    getBeforeZoomRange(t2, e2) {
      let s2 = null;
      return "function" == typeof this.ev.beforeZoom && (s2 = this.ev.beforeZoom(this, { xaxis: t2, yaxis: e2 })), s2;
    }
    toggleMenu() {
      window.setTimeout(() => {
        var t2, e2, s2;
        (null == (t2 = this.elMenu) ? void 0 : t2.classList.contains("apexcharts-menu-open")) ? this._closeMenu() : (null == (e2 = this.elMenu) || e2.classList.add("apexcharts-menu-open"), null == (s2 = this.elMenuIcon) || s2.setAttribute("aria-expanded", "true"));
      }, 0);
    }
    _closeMenu() {
      var t2, e2;
      null == (t2 = this.elMenu) || t2.classList.remove("apexcharts-menu-open"), null == (e2 = this.elMenuIcon) || e2.setAttribute("aria-expanded", "false");
    }
    handleDownload(t2) {
      const e2 = this.w, s2 = new we(this.w, this.ctx);
      switch (t2) {
        case "svg":
          s2.exportToSVG();
          break;
        case "png":
          s2.exportToPng();
          break;
        case "csv":
          s2.exportToCSV({ series: e2.config.series, columnDelimiter: e2.config.chart.toolbar.export.csv.columnDelimiter });
      }
    }
    handleZoomReset() {
      this.ctx.getSyncedCharts().forEach((t2) => {
        const e2 = t2.w;
        if (!e2.interact.zoomed) return;
        if (e2.globals.lastXAxis.min = e2.globals.initialConfig.xaxis.min, e2.globals.lastXAxis.max = e2.globals.initialConfig.xaxis.max, t2.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e2.config.chart.events.beforeResetZoom) {
          const s3 = e2.config.chart.events.beforeResetZoom(t2, e2);
          s3 && t2.updateHelpers.revertDefaultAxisMinMax(s3);
        }
        "function" == typeof e2.config.chart.events.zoomed && t2.ctx.toolbar.zoomCallback({ min: e2.config.xaxis.min, max: e2.config.xaxis.max });
        const s2 = t2.ctx.series.emptyCollapsedSeries(m.clone(e2.globals.initialSeries));
        t2.updateHelpers._updateSeries(s2, e2.config.chart.animations.dynamicAnimation.enabled), e2.interact.zoomed = false;
      });
    }
    destroy() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    }
  }
  me.registerFeatures({ toolbar: Se, zoomPanSelection: class extends Se {
    constructor(t2, e2) {
      super(t2, e2), this.w = t2, this.ctx = e2, this.dragged = false, this.graphics = new N(this.w), this.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], this.clientX = 0, this.clientY = 0, this.startX = 0, this.endX = 0, this.dragX = 0, this.startY = 0, this.endY = 0, this.dragY = 0, this.moveDirection = "none", this.debounceTimer = null, this.debounceDelay = 100, this.wheelDelay = 400;
    }
    init({ xyRatios: t2 }) {
      const e2 = this.w, s2 = this;
      this.xyRatios = t2, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = e2.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new $(0, 0, e2.layout.gridWidth, e2.layout.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), e2.dom.Paper.add(this.zoomRect), e2.dom.Paper.add(this.selectionRect), "x" === e2.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: e2.layout.gridWidth, maxY: e2.layout.gridHeight }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : "y" === e2.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: e2.layout.gridWidth }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = e2.dom.baseEl.querySelector(`${e2.globals.chartClass} .apexcharts-svg`), this.hoverArea && (this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((e3) => {
        var i2;
        null == (i2 = this.hoverArea) || i2.addEventListener(e3, s2.svgMouseEvents.bind(s2, t2), { capture: false, passive: true });
      }), e2.config.chart.zoom.enabled && e2.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", s2.mouseWheelEvent.bind(s2), { capture: false, passive: false }));
    }
    destroy() {
      this.slDraggableRect && (this.slDraggableRect.draggable(false), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    }
    svgMouseEvents(t2, e2) {
      var s2;
      const i2 = this.w, a2 = this.ctx.toolbar, o2 = i2.interact.zoomEnabled ? i2.config.chart.zoom.type : i2.config.chart.selection.type, r2 = i2.config.chart.toolbar.autoSelected;
      if (e2.shiftKey ? (this.shiftWasPressed = true, a2.enableZoomPanFromToolbar("pan" === r2 ? "zoom" : "pan")) : this.shiftWasPressed && (a2.enableZoomPanFromToolbar(r2), this.shiftWasPressed = false), !e2.target) return;
      const n2 = e2.target.classList;
      let l2;
      e2.target.parentNode && null !== e2.target.parentNode && (l2 = e2.target.parentNode.classList);
      if (!(n2.contains("apexcharts-legend-marker") || n2.contains("apexcharts-legend-text") || l2 && l2.contains("apexcharts-toolbar"))) {
        if (this.clientX = "touchmove" === e2.type || "touchstart" === e2.type ? e2.touches[0].clientX : "touchend" === e2.type ? e2.changedTouches[0].clientX : e2.clientX, this.clientY = "touchmove" === e2.type || "touchstart" === e2.type ? e2.touches[0].clientY : "touchend" === e2.type ? e2.changedTouches[0].clientY : e2.clientY, "mousedown" === e2.type && 1 === e2.which || "touchstart" === e2.type) {
          const t3 = null == (s2 = this.gridRect) ? void 0 : s2.getBoundingClientRect();
          if (!t3) return;
          this.startX = this.clientX - t3.left - i2.globals.barPadForNumericAxis, this.startY = this.clientY - t3.top, this.dragged = false, this.w.interact.mousedown = true;
        }
        ("mousemove" === e2.type && 1 === e2.which || "touchmove" === e2.type) && (this.dragged = true, i2.interact.panEnabled ? (i2.interact.selection = null, this.w.interact.mousedown && this.panDragging({ context: this, zoomtype: o2, xyRatios: t2 })) : (this.w.interact.mousedown && i2.interact.zoomEnabled || this.w.interact.mousedown && i2.interact.selectionEnabled) && (this.selection = this.selectionDrawing({ context: this, zoomtype: o2 }))), "mouseup" !== e2.type && "touchend" !== e2.type && "mouseleave" !== e2.type || this.handleMouseUp({ zoomtype: o2 }), this.makeSelectionRectDraggable();
      }
    }
    handleMouseUp({ zoomtype: t2, isResized: e2 }) {
      var s2;
      const i2 = this.w, a2 = null == (s2 = this.gridRect) ? void 0 : s2.getBoundingClientRect();
      a2 && (this.w.interact.mousedown || e2) && (this.endX = this.clientX - a2.left - i2.globals.barPadForNumericAxis, this.endY = this.clientY - a2.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (i2.interact.zoomEnabled || i2.interact.selectionEnabled) && this.selectionDrawn({ context: this, zoomtype: t2 })), i2.interact.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = false, this.w.interact.mousedown = false;
    }
    mouseWheelEvent(t2) {
      const e2 = this.w;
      t2.preventDefault();
      const s2 = Date.now();
      s2 - e2.interact.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t2), e2.interact.lastWheelExecution = s2), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
        s2 - e2.interact.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t2), e2.interact.lastWheelExecution = s2);
      }, this.debounceDelay);
    }
    executeMouseWheelZoom(t2) {
      var e2, s2, i2;
      const a2 = this.w;
      this.minX = a2.axisFlags.isRangeBar ? a2.globals.minY : a2.globals.minX, this.maxX = a2.axisFlags.isRangeBar ? a2.globals.maxY : a2.globals.maxX;
      const o2 = null == (e2 = this.gridRect) ? void 0 : e2.getBoundingClientRect();
      if (!o2) return;
      const r2 = (t2.clientX - o2.left) / o2.width, n2 = this.minX, l2 = this.maxX, h2 = l2 - n2;
      let c2, d2, g2;
      if (t2.deltaY < 0) {
        c2 = 0.5 * h2;
        const t3 = n2 + r2 * h2;
        d2 = t3 - c2 / 2, g2 = t3 + c2 / 2;
      } else c2 = 1.5 * h2, d2 = n2 - c2 / 2, g2 = l2 + c2 / 2;
      if (!a2.axisFlags.isRangeBar) {
        const t3 = null != (s2 = a2.globals.dataReducerRawMinX) ? s2 : a2.globals.initialMinX, e3 = null != (i2 = a2.globals.dataReducerRawMaxX) ? i2 : a2.globals.initialMaxX;
        d2 = Math.max(d2, t3), g2 = Math.min(g2, e3);
        const o3 = a2.globals.minXDiff > 0 && isFinite(a2.globals.minXDiff) ? a2.globals.minXDiff : 0, r3 = Math.max(2 * o3, 1e-6 * (e3 - t3));
        if (g2 - d2 < r3) {
          const t4 = (d2 + g2) / 2;
          d2 = t4 - r3 / 2, g2 = t4 + r3 / 2;
        }
      }
      const p2 = this._getNewMinXMaxX(d2, g2);
      isNaN(p2.minX) || isNaN(p2.maxX) || this.zoomUpdateOptions(p2.minX, p2.maxX);
    }
    makeSelectionRectDraggable() {
      const t2 = this.w;
      if (!this.selectionRect) return;
      const e2 = this.selectionRect.node.getBoundingClientRect();
      e2.width > 0 && e2.height > 0 && (this.selectionRect.select(false).resize(false), this.selectionRect.select({ createRot: () => {
      }, updateRot: () => {
      }, createHandle: (t3, e3, s2, i2, a2) => "l" === a2 || "r" === a2 ? t3.circle(8).css({ "stroke-width": 1, stroke: "#333", fill: "#fff" }) : t3.circle(0), updateHandle: (t3, e3) => t3.center(e3[0], e3[1]) }).resize().on("resize", () => {
        const e3 = t2.interact.zoomEnabled ? t2.config.chart.zoom.type : t2.config.chart.selection.type;
        this.handleMouseUp({ zoomtype: e3, isResized: true });
      }));
    }
    preselectedSelection() {
      const t2 = this.w, e2 = this.xyRatios;
      if (!t2.interact.zoomEnabled) {
        if (void 0 !== t2.interact.selection && null !== t2.interact.selection) this.drawSelectionRect(l(n({}, t2.interact.selection), { translateX: t2.layout.translateX, translateY: t2.layout.translateY }));
        else if (void 0 !== t2.config.chart.selection.xaxis.min && void 0 !== t2.config.chart.selection.xaxis.max) {
          let s2 = (t2.config.chart.selection.xaxis.min - t2.globals.minX) / e2.xRatio, i2 = t2.layout.gridWidth - (t2.globals.maxX - t2.config.chart.selection.xaxis.max) / e2.xRatio - s2;
          t2.axisFlags.isRangeBar && (s2 = (t2.config.chart.selection.xaxis.min - t2.globals.yAxisScale[0].niceMin) / e2.invertedYRatio, i2 = (t2.config.chart.selection.xaxis.max - t2.config.chart.selection.xaxis.min) / e2.invertedYRatio);
          const a2 = { x: s2, y: 0, width: i2, height: t2.layout.gridHeight, translateX: t2.layout.translateX, translateY: t2.layout.translateY, selectionEnabled: true };
          this.drawSelectionRect(a2), this.makeSelectionRectDraggable(), "function" == typeof t2.config.chart.events.selection && t2.config.chart.events.selection(this.ctx, { xaxis: { min: t2.config.chart.selection.xaxis.min, max: t2.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    }
    drawSelectionRect({ x: t2, y: e2, width: s2, height: i2, translateX: a2 = 0, translateY: o2 = 0 }) {
      const r2 = this.w, n2 = this.zoomRect, l2 = this.selectionRect;
      if (this.dragged || null !== r2.interact.selection) {
        const h2 = { transform: "translate(" + a2 + ", " + o2 + ")" };
        r2.interact.zoomEnabled && this.dragged && (s2 < 0 && (s2 = 1), n2.attr({ x: t2, y: e2, width: s2, height: i2, fill: r2.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": r2.config.chart.zoom.zoomedArea.fill.opacity, stroke: r2.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": r2.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": r2.config.chart.zoom.zoomedArea.stroke.opacity }), N.setAttrs(n2.node, h2)), r2.interact.selectionEnabled && (l2.attr({ x: t2, y: e2, width: s2 > 0 ? s2 : 0, height: i2 > 0 ? i2 : 0, fill: r2.config.chart.selection.fill.color, "fill-opacity": r2.config.chart.selection.fill.opacity, stroke: r2.config.chart.selection.stroke.color, "stroke-width": r2.config.chart.selection.stroke.width, "stroke-dasharray": r2.config.chart.selection.stroke.dashArray, "stroke-opacity": r2.config.chart.selection.stroke.opacity }), N.setAttrs(l2.node, h2));
      }
    }
    hideSelectionRect(t2) {
      t2 && t2.attr({ x: 0, y: 0, width: 0, height: 0 });
    }
    selectionDrawing({ context: t2, zoomtype: e2 }) {
      var s2;
      const i2 = this.w, a2 = t2, o2 = null == (s2 = this.gridRect) ? void 0 : s2.getBoundingClientRect();
      if (!o2) return;
      const r2 = a2.startX - 1, h2 = a2.startY;
      let c2 = false, d2 = false;
      const g2 = a2.clientX - o2.left - i2.globals.barPadForNumericAxis, p2 = a2.clientY - o2.top;
      let u2 = g2 - r2, x2 = p2 - h2, f2 = { translateX: i2.layout.translateX, translateY: i2.layout.translateY };
      return Math.abs(u2 + r2) > i2.layout.gridWidth ? u2 = i2.layout.gridWidth - r2 : g2 < 0 && (u2 = r2), r2 > g2 && (c2 = true, u2 = Math.abs(u2)), h2 > p2 && (d2 = true, x2 = Math.abs(x2)), f2 = "x" === e2 ? { x: c2 ? r2 - u2 : r2, y: 0, width: u2, height: i2.layout.gridHeight } : "y" === e2 ? { x: 0, y: d2 ? h2 - x2 : h2, width: i2.layout.gridWidth, height: x2 } : { x: c2 ? r2 - u2 : r2, y: d2 ? h2 - x2 : h2, width: u2, height: x2 }, f2 = l(n({}, f2), { translateX: i2.layout.translateX, translateY: i2.layout.translateY }), a2.drawSelectionRect(f2), a2.selectionDragging("resizing"), f2;
    }
    selectionDragging(t2, e2) {
      var s2;
      const i2 = this.w;
      if (!e2) return;
      e2.preventDefault();
      const { handler: a2, box: o2 } = e2.detail, r2 = this.constraints;
      let { x: n2, y: l2 } = o2;
      n2 < r2.x && (n2 = r2.x), l2 < r2.y && (l2 = r2.y), o2.x2 > r2.x2 && (n2 = r2.x2 - o2.w), o2.y2 > r2.y2 && (l2 = r2.y2 - o2.h), a2.move(n2, l2);
      const h2 = this.xyRatios, c2 = this.selectionRect;
      let d2 = 0;
      "resizing" === t2 && (d2 = 30);
      const g2 = (t3) => parseFloat(c2.node.getAttribute(t3)), p2 = { x: g2("x"), y: g2("y"), width: g2("width"), height: g2("height") };
      i2.interact.selection = p2, "function" == typeof i2.config.chart.events.selection && i2.interact.selectionEnabled && (clearTimeout(null != (s2 = this.w.globals.selectionResizeTimer) ? s2 : void 0), this.w.globals.selectionResizeTimer = window.setTimeout(() => {
        var t3;
        const e3 = null == (t3 = this.gridRect) ? void 0 : t3.getBoundingClientRect();
        if (!e3) return;
        const s3 = c2.node.getBoundingClientRect();
        let a3, o3, r3, n3;
        if (i2.axisFlags.isRangeBar) a3 = i2.globals.yAxisScale[0].niceMin + (s3.left - e3.left) * h2.invertedYRatio, o3 = i2.globals.yAxisScale[0].niceMin + (s3.right - e3.left) * h2.invertedYRatio, r3 = 0, n3 = 1;
        else {
          if (!i2.globals.xAxisScale) return;
          a3 = i2.globals.xAxisScale.niceMin + (s3.left - e3.left) * h2.xRatio, o3 = i2.globals.xAxisScale.niceMin + (s3.right - e3.left) * h2.xRatio, r3 = i2.globals.yAxisScale[0].niceMin + (e3.bottom - s3.bottom) * h2.yRatio[0], n3 = i2.globals.yAxisScale[0].niceMax - (s3.top - e3.top) * h2.yRatio[0];
        }
        const l3 = { xaxis: { min: a3, max: o3 }, yaxis: { min: r3, max: n3 } };
        i2.config.chart.events.selection(this.ctx, l3), i2.config.chart.brush.enabled && void 0 !== i2.config.chart.events.brushScrolled && i2.config.chart.events.brushScrolled(this.ctx, l3);
      }, d2));
    }
    selectionDrawn({ context: t2, zoomtype: e2 }) {
      var s2, i2;
      const a2 = this.w, o2 = t2, r2 = this.xyRatios, n2 = this.ctx.toolbar, l2 = a2.interact.zoomEnabled ? o2.zoomRect.node.getBoundingClientRect() : o2.selectionRect.node.getBoundingClientRect(), h2 = o2.gridRect.getBoundingClientRect(), c2 = l2.left - h2.left - a2.globals.barPadForNumericAxis, d2 = l2.right - h2.left - a2.globals.barPadForNumericAxis, g2 = l2.top - h2.top, p2 = l2.bottom - h2.top;
      let u2, x2;
      if (a2.axisFlags.isRangeBar) u2 = a2.globals.yAxisScale[0].niceMin + c2 * r2.invertedYRatio, x2 = a2.globals.yAxisScale[0].niceMin + d2 * r2.invertedYRatio;
      else {
        const t3 = null != (i2 = null == (s2 = a2.globals.xAxisScale) ? void 0 : s2.niceMin) ? i2 : 0;
        u2 = t3 + c2 * r2.xRatio, x2 = t3 + d2 * r2.xRatio;
      }
      const f2 = [], b2 = [];
      if (a2.config.yaxis.forEach((t3, e3) => {
        const s3 = a2.globals.seriesYAxisMap[e3][0], i3 = a2.globals.yAxisScale[e3].niceMax - r2.yRatio[s3] * g2, o3 = a2.globals.yAxisScale[e3].niceMax - r2.yRatio[s3] * p2;
        f2.push(i3), b2.push(o3);
      }), o2.dragged && (o2.dragX > 10 || o2.dragY > 10) && u2 !== x2) {
        if (a2.interact.zoomEnabled) {
          if (!a2.globals.initialConfig) return;
          let t3 = m.clone(a2.globals.initialConfig.yaxis), s3 = m.clone(a2.globals.initialConfig.xaxis);
          if (a2.interact.zoomed = true, a2.config.xaxis.convertedCatToNumeric && (u2 = Math.floor(u2), x2 = Math.floor(x2), u2 < 1 && (u2 = 1, x2 = a2.globals.dataPoints), x2 - u2 < 2 && (x2 = u2 + 1)), "xy" !== e2 && "x" !== e2 || (s3 = { min: u2, max: x2 }), "xy" !== e2 && "y" !== e2 || t3.forEach((e3, s4) => {
            t3[s4].min = b2[s4], t3[s4].max = f2[s4];
          }), n2) {
            const e3 = n2.getBeforeZoomRange(s3, t3);
            e3 && (s3 = e3.xaxis ? e3.xaxis : s3, t3 = e3.yaxis ? e3.yaxis : t3);
          }
          const i3 = { xaxis: s3 };
          a2.config.chart.group || (i3.yaxis = t3), o2.ctx.updateHelpers._updateOptions(i3, false, o2.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a2.config.chart.events.zoomed && n2.zoomCallback(s3, t3);
        } else if (a2.interact.selectionEnabled) {
          let t3 = null, s3 = null;
          if (s3 = { min: u2, max: x2 }, "xy" === e2 || "y" === e2) {
            const e3 = m.clone(a2.config.yaxis);
            t3 = e3, e3.forEach((t4, s4) => {
              e3[s4].min = b2[s4], e3[s4].max = f2[s4];
            });
          }
          a2.interact.selection = o2.selection, "function" == typeof a2.config.chart.events.selection && a2.config.chart.events.selection(o2.ctx, { xaxis: s3, yaxis: t3 });
        }
      }
    }
    panDragging({ context: t2 }) {
      var e2;
      const s2 = this.w, i2 = t2;
      if (void 0 !== s2.interact.lastClientPosition.x) {
        const t3 = s2.interact.lastClientPosition.x - i2.clientX, a3 = (null != (e2 = s2.interact.lastClientPosition.y) ? e2 : 0) - i2.clientY;
        Math.abs(t3) > Math.abs(a3) && t3 > 0 ? this.moveDirection = "left" : Math.abs(t3) > Math.abs(a3) && t3 < 0 ? this.moveDirection = "right" : Math.abs(a3) > Math.abs(t3) && a3 > 0 ? this.moveDirection = "up" : Math.abs(a3) > Math.abs(t3) && a3 < 0 && (this.moveDirection = "down");
      }
      s2.interact.lastClientPosition = { x: i2.clientX, y: i2.clientY };
      const a2 = s2.axisFlags.isRangeBar ? s2.globals.minY : s2.globals.minX, o2 = s2.axisFlags.isRangeBar ? s2.globals.maxY : s2.globals.maxX;
      i2.panScrolled(a2, o2);
    }
    panScrolled(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = this.xyRatios;
      if (!a2.globals.initialConfig) return;
      const r2 = m.clone(a2.globals.initialConfig.yaxis);
      let n2 = o2.xRatio, l2 = a2.globals.minX, h2 = a2.globals.maxX;
      if (a2.axisFlags.isRangeBar && (n2 = o2.invertedYRatio, l2 = a2.globals.minY, h2 = a2.globals.maxY), "left" === this.moveDirection ? (t2 = l2 + a2.layout.gridWidth / 15 * n2, e2 = h2 + a2.layout.gridWidth / 15 * n2) : "right" === this.moveDirection && (t2 = l2 - a2.layout.gridWidth / 15 * n2, e2 = h2 - a2.layout.gridWidth / 15 * n2), !a2.axisFlags.isRangeBar) {
        const o3 = null != (s2 = a2.globals.dataReducerRawMinX) ? s2 : a2.globals.initialMinX, r3 = null != (i2 = a2.globals.dataReducerRawMaxX) ? i2 : a2.globals.initialMaxX;
        (t2 < o3 || e2 > r3) && (t2 = l2, e2 = h2);
      }
      const c2 = { xaxis: { min: t2, max: e2 } };
      a2.config.chart.group || (c2.yaxis = r2), this.updateScrolledChart(c2, t2, e2);
    }
    updateScrolledChart(t2, e2, s2) {
      const i2 = this.w;
      if (this.ctx.updateHelpers._updateOptions(t2, false, false), "function" == typeof i2.config.chart.events.scrolled) {
        const t3 = { xaxis: { min: e2, max: s2 } };
        i2.config.chart.events.scrolled(this.ctx, t3), this.ctx.events.fireEvent("scrolled", t3);
      }
    }
  } });
  let ke = class {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2;
    }
    setOrientations(t2, e2 = null) {
      var s2, i2;
      const a2 = this.w;
      if ("vertical" === t2.label.orientation) {
        const o2 = null !== e2 ? e2 : 0, r2 = a2.dom.baseEl.querySelector(`.apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='${o2}']`);
        if (null !== r2) {
          const e3 = r2.getBBox();
          r2.setAttribute("x", String(parseFloat(null != (s2 = r2.getAttribute("x")) ? s2 : "0") - e3.height + 4));
          const a3 = "top" === t2.label.position ? e3.width : -e3.width;
          r2.setAttribute("y", String(parseFloat(null != (i2 = r2.getAttribute("y")) ? i2 : "0") + a3));
          const { x: o3, y: n2 } = this.annoCtx.graphics.rotateAroundCenter(r2);
          r2.setAttribute("transform", `rotate(-90 ${o3} ${n2})`);
        }
      }
    }
    addBackgroundToAnno(t2, e2) {
      const s2 = this.w;
      if (!t2 || !e2.label.text || !String(e2.label.text).trim()) return null;
      const i2 = s2.dom.baseEl.querySelector(".apexcharts-grid");
      if (!i2) return null;
      const a2 = i2.getBoundingClientRect(), o2 = i2.getBBox(), r2 = a2.width / o2.width || 1, n2 = t2.getBoundingClientRect();
      let { left: l2, right: h2, top: c2, bottom: d2 } = e2.label.style.padding;
      "vertical" === e2.label.orientation && ([c2, d2, l2, h2] = [l2, h2, c2, d2]);
      const g2 = (n2.left - a2.left) / r2 - l2, p2 = (n2.top - a2.top) / r2 - c2, u2 = this.annoCtx.graphics.drawRect(g2 - s2.globals.barPadForNumericAxis, p2, n2.width / r2 + l2 + h2, n2.height / r2 + c2 + d2, e2.label.borderRadius, e2.label.style.background, 1, e2.label.borderWidth, e2.label.borderColor, 0);
      return e2.id && u2.node.classList.add(e2.id), u2;
    }
    annotationsBackground() {
      const t2 = this.w, e2 = (e3, s2, i2) => {
        const a2 = t2.dom.baseEl.querySelector(`.apexcharts-${i2}-annotations .apexcharts-${i2}-annotation-label[rel='${s2}']`);
        if (a2) {
          const s3 = a2.parentNode, i3 = this.addBackgroundToAnno(a2, e3);
          if (i3) {
            null == s3 || s3.insertBefore(i3.node, a2);
            const o2 = a2.getAttribute("x");
            null !== o2 && z(i3, parseFloat(o2), t2), e3.label.mouseEnter && i3.node.addEventListener("mouseenter", e3.label.mouseEnter.bind(this, e3)), e3.label.mouseLeave && i3.node.addEventListener("mouseleave", e3.label.mouseLeave.bind(this, e3)), e3.label.click && i3.node.addEventListener("click", e3.label.click.bind(this, e3));
          }
        }
      };
      t2.config.annotations.xaxis.forEach((t3, s2) => e2(t3, s2, "xaxis")), t2.config.annotations.yaxis.forEach((t3, s2) => e2(t3, s2, "yaxis")), t2.config.annotations.points.forEach((t3, s2) => e2(t3, s2, "point"));
    }
    getY1Y2(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = "y1" === t2 ? e2.y : e2.y2;
      let r2, n2 = false;
      if (this.annoCtx.invertAxis) {
        const t3 = a2.config.xaxis.convertedCatToNumeric ? a2.labelData.categoryLabels : a2.labelData.labels, i3 = t3.indexOf(o2), n3 = a2.dom.baseEl.querySelector(`.apexcharts-yaxis-texts-g text:nth-child(${i3 + 1})`);
        r2 = n3 ? parseFloat(null != (s2 = n3.getAttribute("y")) ? s2 : "0") : (a2.layout.gridHeight / t3.length - 1) * (i3 + 1) - a2.globals.barHeight, void 0 !== e2.seriesIndex && a2.globals.barHeight && (r2 -= a2.globals.barHeight / 2 * (a2.seriesData.series.length - 1) - a2.globals.barHeight * e2.seriesIndex);
      } else {
        const t3 = a2.globals.seriesYAxisMap[e2.yAxisIndex][0], s3 = a2.config.yaxis[e2.yAxisIndex].logarithmic ? new F(this.w).getLogVal(a2.config.yaxis[e2.yAxisIndex].logBase, o2, t3) / a2.globals.yLogRatio[t3] : (o2 - a2.globals.minYArr[t3]) / (a2.globals.yRange[t3] / a2.layout.gridHeight);
        r2 = a2.layout.gridHeight - Math.min(Math.max(s3, 0), a2.layout.gridHeight), n2 = s3 > a2.layout.gridHeight || s3 < 0, !e2.marker || void 0 !== e2.y && null !== e2.y || (r2 = 0), (null == (i2 = a2.config.yaxis[e2.yAxisIndex]) ? void 0 : i2.reversed) && (r2 = s3);
      }
      return "string" == typeof o2 && o2.includes("px") && (r2 = parseFloat(o2)), { yP: r2, clipped: n2 };
    }
    getX1X2(t2, e2) {
      const s2 = this.w, i2 = "x1" === t2 ? e2.x : e2.x2, a2 = this.annoCtx.invertAxis ? s2.globals.minY : s2.globals.minX, o2 = this.annoCtx.invertAxis ? s2.globals.maxY : s2.globals.maxX, r2 = this.annoCtx.invertAxis ? s2.globals.yRange[0] : s2.globals.xRange;
      let n2 = false, l2 = this.annoCtx.inversedReversedAxis ? (o2 - i2) / (r2 / s2.layout.gridWidth) : (i2 - a2) / (r2 / s2.layout.gridWidth);
      return "category" !== s2.config.xaxis.type && !s2.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || s2.axisFlags.dataFormatXNumeric || s2.config.chart.sparkline.enabled || (l2 = this.getStringX(i2)), "string" == typeof i2 && i2.includes("px") && (l2 = parseFloat(i2)), null == i2 && e2.marker && (l2 = s2.layout.gridWidth), void 0 !== e2.seriesIndex && s2.globals.barWidth && !this.annoCtx.invertAxis && (l2 -= s2.globals.barWidth / 2 * (s2.seriesData.series.length - 1) - s2.globals.barWidth * e2.seriesIndex), "number" != typeof l2 && (l2 = 0, n2 = true), parseFloat(l2.toFixed(10)) > parseFloat(s2.layout.gridWidth.toFixed(10)) ? (l2 = s2.layout.gridWidth, n2 = true) : l2 < 0 && (l2 = 0, n2 = true), { x: l2, clipped: n2 };
    }
    getStringX(t2) {
      var e2;
      const s2 = this.w;
      let i2 = t2;
      if (s2.config.xaxis.convertedCatToNumeric && s2.labelData.categoryLabels.length) {
        const e3 = String(t2);
        t2 = s2.labelData.categoryLabels.findIndex((t3) => String(t3) === e3) + 1;
      }
      const a2 = s2.labelData.labels.map((t3) => Array.isArray(t3) ? t3.join(" ") : t3).indexOf(t2), o2 = s2.dom.baseEl.querySelector(`.apexcharts-xaxis-texts-g text:nth-child(${a2 + 1})`);
      return o2 && (i2 = parseFloat(null != (e2 = o2.getAttribute("x")) ? e2 : "0")), i2;
    }
  };
  class De {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new ke(this.annoCtx);
    }
    addXaxisAnnotation(t2, e2, s2) {
      const i2 = this.w, a2 = this.helpers.getX1X2("x1", t2);
      let o2 = a2.x;
      const r2 = a2.clipped;
      let n2, l2 = true;
      const h2 = t2.label.text, c2 = t2.strokeDashArray;
      if (m.isNumber(o2)) {
        if (null === t2.x2 || void 0 === t2.x2) {
          if (!r2) {
            const s3 = this.annoCtx.graphics.drawLine(o2 + t2.offsetX, 0 + t2.offsetY, o2 + t2.offsetX, i2.layout.gridHeight + t2.offsetY, t2.borderColor, c2, t2.borderWidth);
            e2.appendChild(s3.node), t2.id && s3.node.classList.add(t2.id), z(s3, o2 + t2.offsetX, i2);
          }
        } else {
          const s3 = this.helpers.getX1X2("x2", t2);
          if (n2 = s3.x, l2 = s3.clipped, n2 < o2) {
            const t3 = o2;
            o2 = n2, n2 = t3;
          }
          const a3 = this.annoCtx.graphics.drawRect(o2 + t2.offsetX, 0 + t2.offsetY, n2 - o2, i2.layout.gridHeight + t2.offsetY, 0, t2.fillColor, t2.opacity, 1, t2.borderColor, c2);
          a3.node.classList.add("apexcharts-annotation-rect"), a3.attr("clip-path", `url(#gridRectMask${i2.globals.cuid})`), e2.appendChild(a3.node), t2.id && a3.node.classList.add(t2.id), z(a3, o2 + t2.offsetX, i2);
        }
        if (!r2 || !l2) {
          const a3 = this.annoCtx.graphics.getTextRects(h2, t2.label.style.fontSize), r3 = "top" === t2.label.position ? 4 : "center" === t2.label.position ? i2.layout.gridHeight / 2 + ("vertical" === t2.label.orientation ? a3.width / 2 : 0) : i2.layout.gridHeight, n3 = this.annoCtx.graphics.drawText({ x: o2 + t2.label.offsetX, y: r3 + t2.label.offsetY - ("vertical" === t2.label.orientation ? "top" === t2.label.position ? a3.width / 2 - 12 : -a3.width / 2 : 0), text: h2, textAnchor: t2.label.textAnchor, fontSize: t2.label.style.fontSize, fontFamily: t2.label.style.fontFamily, fontWeight: t2.label.style.fontWeight, foreColor: t2.label.style.color, cssClass: `apexcharts-xaxis-annotation-label ${t2.label.style.cssClass} ${t2.id ? t2.id : ""}` });
          n3.attr({ rel: s2 }), e2.appendChild(n3.node), z(n3, o2 + t2.label.offsetX, i2), this.annoCtx.helpers.setOrientations(t2, s2);
        }
      }
    }
    drawXAxisAnnotations() {
      const t2 = this.w, e2 = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return t2.config.annotations.xaxis.map((t3, s2) => {
        this.addXaxisAnnotation(t3, e2.node, s2);
      }), e2;
    }
  }
  class Le {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2, this.helpers = new ke(this.annoCtx), this.axesUtils = new Z(this.annoCtx.w, { theme: this.annoCtx.theme, timeScale: this.annoCtx.timeScale });
    }
    addYaxisAnnotation(t2, e2, s2) {
      const i2 = this.w, a2 = t2.strokeDashArray;
      let o2 = this.helpers.getY1Y2("y1", t2), r2 = o2.yP;
      const n2 = o2.clipped;
      let l2, h2 = true, c2 = false;
      const d2 = t2.label.text;
      if (null === t2.y2 || void 0 === t2.y2) {
        if (!n2) {
          c2 = true;
          const s3 = this.annoCtx.graphics.drawLine(0 + t2.offsetX, r2 + t2.offsetY, this._getYAxisAnnotationWidth(t2), r2 + t2.offsetY, t2.borderColor, a2, t2.borderWidth);
          e2.appendChild(s3.node), t2.id && s3.node.classList.add(t2.id);
        }
      } else {
        if (o2 = this.helpers.getY1Y2("y2", t2), l2 = o2.yP, h2 = o2.clipped, l2 > r2) {
          const t3 = r2;
          r2 = l2, l2 = t3;
        }
        if (!n2 || !h2) {
          c2 = true;
          const s3 = this.annoCtx.graphics.drawRect(0 + t2.offsetX, l2 + t2.offsetY, this._getYAxisAnnotationWidth(t2), r2 - l2, 0, t2.fillColor, t2.opacity, 1, t2.borderColor, a2);
          s3.node.classList.add("apexcharts-annotation-rect"), s3.attr("clip-path", `url(#gridRectMask${i2.globals.cuid})`), e2.appendChild(s3.node), t2.id && s3.node.classList.add(t2.id);
        }
      }
      if (c2) {
        const a3 = "right" === t2.label.position ? i2.layout.gridWidth : "center" === t2.label.position ? i2.layout.gridWidth / 2 : 0, o3 = this.annoCtx.graphics.drawText({ x: a3 + t2.label.offsetX, y: (null != l2 ? l2 : r2) + t2.label.offsetY - 3, text: d2, textAnchor: t2.label.textAnchor, fontSize: t2.label.style.fontSize, fontFamily: t2.label.style.fontFamily, fontWeight: t2.label.style.fontWeight, foreColor: t2.label.style.color, cssClass: `apexcharts-yaxis-annotation-label ${t2.label.style.cssClass} ${t2.id ? t2.id : ""}` });
        o3.attr({ rel: s2 }), e2.appendChild(o3.node);
      }
    }
    _getYAxisAnnotationWidth(t2) {
      const e2 = this.w;
      let s2 = e2.layout.gridWidth;
      return s2 = t2.width.indexOf("%") > -1 ? e2.layout.gridWidth * parseInt(t2.width, 10) / 100 : parseInt(t2.width, 10), s2 + t2.offsetX;
    }
    drawYAxisAnnotations() {
      const t2 = this.w, e2 = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return t2.config.annotations.yaxis.forEach((t3, s2) => {
        t3.yAxisIndex = this.axesUtils.translateYAxisIndex(t3.yAxisIndex), this.axesUtils.isYAxisHidden(t3.yAxisIndex) && this.axesUtils.yAxisAllSeriesCollapsed(t3.yAxisIndex) || this.addYaxisAnnotation(t3, e2.node, s2);
      }), e2;
    }
  }
  class Me {
    constructor(t2) {
      this.w = t2.w, this.annoCtx = t2, this.helpers = new ke(this.annoCtx);
    }
    addPointAnnotation(t2, e2, s2) {
      const i2 = this.w;
      if (i2.globals.collapsedSeriesIndices.indexOf(t2.seriesIndex) > -1) return;
      const a2 = this.helpers.getX1X2("x1", t2), o2 = a2.x, r2 = a2.clipped, n2 = this.helpers.getY1Y2("y1", t2), l2 = n2.yP, h2 = n2.clipped;
      if (m.isNumber(o2) && !h2 && !r2) {
        const a3 = { pSize: t2.marker.size, pointStrokeWidth: t2.marker.strokeWidth, pointFillColor: t2.marker.fillColor, pointStrokeColor: t2.marker.strokeColor, shape: t2.marker.shape, pRadius: t2.marker.radius, class: `apexcharts-point-annotation-marker ${t2.marker.cssClass} ${t2.id ? t2.id : ""}` };
        let r3 = this.annoCtx.graphics.drawMarker(o2 + t2.marker.offsetX, l2 + t2.marker.offsetY, a3);
        e2.appendChild(r3.node), z(r3, o2, i2);
        const n3 = t2.label.text ? t2.label.text : "", h3 = this.annoCtx.graphics.drawText({ x: o2 + t2.label.offsetX, y: l2 + t2.label.offsetY - t2.marker.size - parseFloat(t2.label.style.fontSize) / 1.6, text: n3, textAnchor: t2.label.textAnchor, fontSize: t2.label.style.fontSize, fontFamily: t2.label.style.fontFamily, fontWeight: t2.label.style.fontWeight, foreColor: t2.label.style.color, cssClass: `apexcharts-point-annotation-label ${t2.label.style.cssClass} ${t2.id ? t2.id : ""}` });
        if (h3.attr({ rel: s2 }), e2.appendChild(h3.node), z(h3, o2, i2), t2.customSVG.SVG) {
          const s3 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t2.customSVG.cssClass });
          s3.attr({ transform: `translate(${o2 + t2.customSVG.offsetX}, ${l2 + t2.customSVG.offsetY})` }), s3.node.innerHTML = t2.customSVG.SVG, e2.appendChild(s3.node);
        }
        if (t2.image.path) {
          const e3 = t2.image.width ? t2.image.width : 20, s3 = t2.image.height ? t2.image.height : 20;
          r3 = this.annoCtx.addImage({ x: o2 + t2.image.offsetX - e3 / 2, y: l2 + t2.image.offsetY - s3 / 2, width: e3, height: s3, path: t2.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        t2.mouseEnter && r3.node.addEventListener("mouseenter", t2.mouseEnter.bind(this, t2)), t2.mouseLeave && r3.node.addEventListener("mouseleave", t2.mouseLeave.bind(this, t2)), t2.click && r3.node.addEventListener("click", t2.click.bind(this, t2));
      }
    }
    drawPointAnnotations() {
      const t2 = this.w, e2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return t2.config.annotations.points.map((t3, s2) => {
        this.addPointAnnotation(t3, e2.node, s2);
      }), e2;
    }
  }
  me.registerFeatures({ annotations: class {
    constructor(t2, { theme: e2 = null, timeScale: s2 = null } = {}) {
      this.w = t2, this.theme = e2, this.timeScale = s2, this.invertAxis = void 0, this.inversedReversedAxis = void 0, this.graphics = new N(this.w), this.w.globals.isBarHorizontal && (this.invertAxis = true), this.helpers = new ke(this), this.xAxisAnnotations = new De(this), this.yAxisAnnotations = new Le(this), this.pointsAnnotations = new Me(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = true), this.xDivision = this.w.layout.gridWidth / this.w.globals.dataPoints;
    }
    drawAxesAnnotations() {
      const t2 = this.w;
      if (t2.globals.axisCharts && t2.globals.dataPoints) {
        const e2 = this.yAxisAnnotations.drawYAxisAnnotations(), s2 = this.xAxisAnnotations.drawXAxisAnnotations(), i2 = this.pointsAnnotations.drawPointAnnotations(), a2 = t2.config.chart.animations.enabled, o2 = [e2, s2, i2], r2 = [s2.node, e2.node, i2.node], n2 = "line" === t2.config.chart.type || "area" === t2.config.chart.type || "rangeArea" === t2.config.chart.type, l2 = [n2, false, n2];
        for (let e3 = 0; e3 < 3; e3++) t2.dom.elGraphical.add(o2[e3]), !a2 || t2.globals.resized || t2.globals.dataChanged || "scatter" !== t2.config.chart.type && "bubble" !== t2.config.chart.type && t2.globals.dataPoints > 1 && !l2[e3] && r2[e3].classList.add("apexcharts-element-hidden"), t2.globals.delayedElements.push({ el: r2[e3], index: 0 });
        this.helpers.annotationsBackground();
      }
    }
    drawImageAnnos() {
      this.w.config.annotations.images.map((t2) => {
        this.addImage(t2);
      });
    }
    drawTextAnnos() {
      this.w.config.annotations.texts.map((t2) => {
        this.addText(t2);
      });
    }
    addXaxisAnnotation(t2, e2, s2) {
      this.xAxisAnnotations.addXaxisAnnotation(t2, e2, s2);
    }
    addYaxisAnnotation(t2, e2, s2) {
      this.yAxisAnnotations.addYaxisAnnotation(t2, e2, s2);
    }
    addPointAnnotation(t2, e2, s2) {
      this.pointsAnnotations.addPointAnnotation(t2, e2, s2);
    }
    addText(t2) {
      const { x: e2, y: s2, text: i2, textAnchor: a2, foreColor: o2, fontSize: r2, fontFamily: n2, fontWeight: l2, cssClass: h2, backgroundColor: c2, borderWidth: d2, strokeDashArray: g2, borderRadius: p2, borderColor: u2, appendTo: x2 = ".apexcharts-svg", paddingLeft: f2 = 4, paddingRight: b2 = 4, paddingBottom: m2 = 2, paddingTop: y2 = 2 } = t2, w2 = this.w, v2 = this.graphics.drawText({ x: e2, y: s2, text: i2, textAnchor: a2 || "start", fontSize: r2 || "12px", fontWeight: l2 || "regular", fontFamily: n2 || w2.config.chart.fontFamily, foreColor: o2 || w2.config.chart.foreColor, cssClass: h2 }), A2 = w2.dom.baseEl.querySelector(x2);
      A2 && A2.appendChild(v2.node);
      const C2 = v2.bbox();
      if (i2) {
        const t3 = this.graphics.drawRect(C2.x - f2, C2.y - y2, C2.width + f2 + b2, C2.height + m2 + y2, p2, c2 || "transparent", 1, d2, u2, g2);
        A2.insertBefore(t3.node, v2.node);
      }
    }
    addImage(t2) {
      const e2 = this.w, { path: s2, x: i2 = 0, y: a2 = 0, width: o2 = 20, height: r2 = 20, appendTo: n2 = ".apexcharts-svg" } = t2, l2 = e2.dom.Paper.image(s2);
      l2.size(o2, r2).move(i2, a2);
      const h2 = e2.dom.baseEl.querySelector(n2);
      return h2 && h2.appendChild(l2.node), l2;
    }
    addXaxisAnnotationExternal(t2, e2, s2) {
      return this.addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: "xaxis", contextMethod: s2.addXaxisAnnotation }), s2;
    }
    addYaxisAnnotationExternal(t2, e2, s2) {
      return this.addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: "yaxis", contextMethod: s2.addYaxisAnnotation }), s2;
    }
    addPointAnnotationExternal(t2, e2, s2) {
      return void 0 === this.invertAxis && (this.invertAxis = s2.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: "point", contextMethod: s2.addPointAnnotation }), s2;
    }
    addAnnotationExternal({ params: t2, pushToMemory: e2, context: s2, type: i2, contextMethod: a2 }) {
      const o2 = s2, r2 = o2.w, n2 = r2.dom.baseEl.querySelector(`.apexcharts-${i2}-annotations`), l2 = n2.childNodes.length + 1, h2 = new k(), c2 = Object.assign({}, "xaxis" === i2 ? h2.xAxisAnnotation : "yaxis" === i2 ? h2.yAxisAnnotation : h2.pointAnnotation), d2 = m.extend(c2, t2);
      switch (i2) {
        case "xaxis":
          this.addXaxisAnnotation(d2, n2, l2);
          break;
        case "yaxis":
          this.addYaxisAnnotation(d2, n2, l2);
          break;
        case "point":
          this.addPointAnnotation(d2, n2, l2);
      }
      const g2 = r2.dom.baseEl.querySelector(`.apexcharts-${i2}-annotations .apexcharts-${i2}-annotation-label[rel='${l2}']`), p2 = this.helpers.addBackgroundToAnno(g2, d2);
      return p2 && n2.insertBefore(p2.node, g2), e2 && r2.globals.memory.methodsToExec.push({ context: o2, id: d2.id ? d2.id : m.randomId(), method: a2, label: "addAnnotation", params: t2 }), s2;
    }
    clearAnnotations(t2) {
      const e2 = t2.w, s2 = e2.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
      for (let t3 = e2.globals.memory.methodsToExec.length - 1; t3 >= 0; t3--) "addText" !== e2.globals.memory.methodsToExec[t3].label && "addAnnotation" !== e2.globals.memory.methodsToExec[t3].label || e2.globals.memory.methodsToExec.splice(t3, 1);
      Array.prototype.forEach.call(s2, (t3) => {
        for (; t3.firstChild; ) t3.removeChild(t3.firstChild);
      });
    }
    removeAnnotation(t2, e2) {
      const s2 = t2.w, i2 = s2.dom.baseEl.querySelectorAll(`.${e2}`);
      i2 && (s2.globals.memory.methodsToExec.map((t3, i3) => {
        t3.id === e2 && s2.globals.memory.methodsToExec.splice(i3, 1);
      }), Object.keys(s2.config.annotations).forEach((t3) => {
        const i3 = s2.config.annotations[t3];
        Array.isArray(i3) && (s2.config.annotations[t3] = i3.filter((t4) => t4.id !== e2));
      }), Array.prototype.forEach.call(i2, (t3) => {
        t3.parentElement.removeChild(t3);
      }));
    }
  } });
  me.registerFeatures({ keyboardNavigation: class {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this.seriesIndex = 0, this.dataPointIndex = 0, this.active = false, this._tooltipDismissed = false, this._focusedEl = null, this._hoveredBarEl = null, this._enlargedScatterMarker = null, this._onKeyDown = this._onKeyDown.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onLegendClick = this._onLegendClick.bind(this), this._onPointerDown = this._onPointerDown.bind(this), this._lastPointerDownAt = 0;
    }
    init() {
      const t2 = this.w.dom.Paper.node;
      t2 && (t2.setAttribute("tabindex", "0"), t2.addEventListener("focus", this._onFocus), t2.addEventListener("blur", this._onBlur), t2.addEventListener("mousedown", this._onPointerDown, { capture: true }), t2.addEventListener("pointerdown", this._onPointerDown, { capture: true }), t2.addEventListener("touchstart", this._onPointerDown, { capture: true, passive: true }), t2.addEventListener("keydown", this._onKeyDown, { passive: false }), this.ctx.events.addEventListener("legendClick", this._onLegendClick));
    }
    destroy() {
      const t2 = this.w, e2 = t2.dom.Paper && t2.dom.Paper.node;
      e2 && (e2.removeEventListener("focus", this._onFocus), e2.removeEventListener("blur", this._onBlur), e2.removeEventListener("keydown", this._onKeyDown), e2.removeEventListener("mousedown", this._onPointerDown, { capture: true }), e2.removeEventListener("pointerdown", this._onPointerDown, { capture: true }), e2.removeEventListener("touchstart", this._onPointerDown, { capture: true }), this.ctx.events.removeEventListener("legendClick", this._onLegendClick));
    }
    _onPointerDown() {
      this._lastPointerDownAt = Date.now();
    }
    handleKey(t2) {
    }
    _onFocus() {
      this._isNavEnabled() && (Date.now() - this._lastPointerDownAt < 100 || (this.active = true, this._clampCursor(), this._snapToVisibleRange(), this._showCurrentPoint()));
    }
    _onBlur() {
      this.active = false, this._tooltipDismissed = false, this._hideFocus();
    }
    _onLegendClick() {
      this.active && (this.active = false, this._hideFocus());
    }
    _onKeyDown(t2) {
      var e2, s2, i2;
      if (this._isNavEnabled() && this.active) {
        if (t2.shiftKey && ("ArrowRight" === t2.key || "ArrowLeft" === t2.key) && this._canPan()) return t2.preventDefault(), void this._panBy("ArrowRight" === t2.key ? 1 : -1);
        switch (t2.key) {
          case "ArrowRight":
            t2.preventDefault(), this._move(0, 1);
            break;
          case "ArrowLeft":
            t2.preventDefault(), this._move(0, -1);
            break;
          case "ArrowUp":
            t2.preventDefault(), this._move(-1, 0);
            break;
          case "ArrowDown":
            t2.preventDefault(), this._move(1, 0);
            break;
          case "Home":
            t2.preventDefault(), this.dataPointIndex = 0, this._skipNullForward(), this._showCurrentPoint();
            break;
          case "End":
            t2.preventDefault(), this.dataPointIndex = this._getDataPointCount(this.seriesIndex) - 1, this._skipNullBackward(), this._showCurrentPoint();
            break;
          case "Enter":
          case " ":
            t2.preventDefault(), this._fireClick();
            break;
          case "+":
          case "=":
            this._canZoom() && (t2.preventDefault(), null == (e2 = this.ctx.toolbar) || e2.handleZoomIn(), this._announce("Zoomed in"));
            break;
          case "-":
          case "_":
            this._canZoom() && (t2.preventDefault(), null == (s2 = this.ctx.toolbar) || s2.handleZoomOut(), this._announce("Zoomed out"));
            break;
          case "0":
            this._canZoom() && this.w.interact.zoomed && (t2.preventDefault(), null == (i2 = this.ctx.toolbar) || i2.handleZoomReset(), this._announce("Zoom reset"));
            break;
          case "Escape":
            t2.preventDefault(), this._tooltipDismissed ? (this.active = false, this._tooltipDismissed = false, this._hideFocus()) : (this._tooltipDismissed = true, this._hideFocus());
        }
      }
    }
    _canZoom() {
      const t2 = this.w;
      return Boolean(t2.globals.axisCharts && t2.config.chart.zoom && t2.config.chart.zoom.enabled);
    }
    _canPan() {
      return this._canZoom();
    }
    _panBy(t2) {
      const e2 = this.w, s2 = this.ctx.toolbar;
      if (!s2) return;
      const i2 = Number(e2.globals.minX), a2 = Number(e2.globals.maxX);
      if (!isFinite(i2) || !isFinite(a2) || i2 === a2) return;
      const o2 = 0.1 * (a2 - i2) * t2;
      s2.zoomUpdateOptions(i2 + o2, a2 + o2), this._announce(t2 > 0 ? "Panned right" : "Panned left");
    }
    _move(t2, e2) {
      const s2 = this.w, i2 = s2.config.chart.accessibility.keyboard.navigation.wrapAround;
      if (0 !== t2) {
        const e3 = this.w.globals.tooltip;
        if (e3 && e3.tConfig && e3.tConfig.shared) {
          const t3 = this.dataPointIndex;
          if (e3.tooltipUtil && e3.tooltipUtil.isXoverlap(t3) && e3.tooltipUtil.isInitialSeriesSameLen()) return;
        }
        const a2 = this._getSeriesCount();
        let o2 = this.seriesIndex + t2, r2 = 0;
        for (; r2 < a2 && (o2 < 0 && (o2 = i2 ? a2 - 1 : 0), o2 >= a2 && (o2 = i2 ? 0 : a2 - 1), s2.globals.collapsedSeriesIndices.includes(o2)); ) o2 += t2, r2++;
        this.seriesIndex = o2;
        const n2 = this._getDataPointCount(o2);
        this.dataPointIndex >= n2 && (this.dataPointIndex = n2 - 1);
      }
      if (0 !== e2) {
        const t3 = this._getDataPointCount(this.seriesIndex);
        let s3 = this.dataPointIndex + e2;
        s3 < 0 && (s3 = i2 ? t3 - 1 : 0), s3 >= t3 && (s3 = i2 ? 0 : t3 - 1), this.dataPointIndex = s3, e2 > 0 ? this._skipNullForward() : this._skipNullBackward(), this._isDataPointVisible(this.seriesIndex, this.dataPointIndex) || this._snapToVisibleRangeInDirection(e2);
      }
      this._showCurrentPoint();
    }
    _skipNullForward() {
      const t2 = this.w, e2 = this.seriesIndex, s2 = this._getDataPointCount(e2);
      let i2 = this.dataPointIndex, a2 = 0;
      if (Array.isArray(t2.seriesData.series[e2])) {
        for (; a2 < s2 && null === t2.seriesData.series[e2][i2]; ) i2 = (i2 + 1) % s2, a2++;
        this.dataPointIndex = i2;
      }
    }
    _skipNullBackward() {
      const t2 = this.w, e2 = this.seriesIndex, s2 = this._getDataPointCount(e2);
      let i2 = this.dataPointIndex, a2 = 0;
      if (Array.isArray(t2.seriesData.series[e2])) {
        for (; a2 < s2 && null === t2.seriesData.series[e2][i2]; ) i2 = (i2 - 1 + s2) % s2, a2++;
        this.dataPointIndex = i2;
      }
    }
    _showCurrentPoint() {
      const { seriesIndex: t2, dataPointIndex: e2 } = this, s2 = this.w, i2 = s2.globals.tooltip;
      i2 && i2.ttItems && (s2.interact.capturedSeriesIndex = t2, s2.interact.capturedDataPointIndex = e2, this._applyFocusClass(t2, e2), this._showTooltip(t2, e2, i2));
    }
    _hideFocus() {
      const t2 = this.w, e2 = t2.globals.tooltip;
      if (this._removeFocusClass(), this._leaveHoveredBar(), !e2) return;
      e2.marker && e2.marker.resetPointsSize(), this._enlargedScatterMarker = null;
      const s2 = e2.getElTooltip();
      s2 && (s2.classList.remove("apexcharts-active"), t2.config.chart.accessibility.enabled && t2.config.chart.accessibility.announcements.enabled && s2.setAttribute("aria-hidden", "true")), t2.dom.baseEl.classList.remove("apexcharts-tooltip-active");
      const i2 = e2.getElXCrosshairs();
      i2 && i2.classList.remove("apexcharts-active");
    }
    _showTooltip(t2, e2, s2) {
      const i2 = this.w, a2 = i2.config.chart.type, o2 = s2.getElTooltip();
      if (!o2) return;
      const r2 = s2.getCachedDimensions();
      s2.tooltipRect = { x: 0, y: 0, ttWidth: r2.ttWidth || 0, ttHeight: r2.ttHeight || 0 }, this._setSyntheticEvent(t2, e2, s2), i2.dom.baseEl.classList.add("apexcharts-tooltip-active"), o2.classList.add("apexcharts-active"), i2.config.chart.accessibility.enabled && i2.config.chart.accessibility.announcements.enabled && o2.removeAttribute("aria-hidden"), "pie" === a2 || "donut" === a2 || "polarArea" === a2 ? this._showTooltipNonAxis(t2, e2, s2, o2) : "radialBar" === a2 ? this._showTooltipRadialBar(t2, e2, s2, o2) : "heatmap" === a2 || "treemap" === a2 ? this._showTooltipHeatTree(t2, e2, s2, o2, a2) : "bar" === a2 || "candlestick" === a2 || "boxPlot" === a2 || "violin" === a2 || "rangeBar" === a2 ? this._showTooltipBar(t2, e2, s2) : this._showTooltipAxisLine(t2, e2, s2);
    }
    _setSyntheticEvent(t2, e2, s2) {
      const i2 = this.w, a2 = i2.config.chart.type;
      let o2 = 0, r2 = 0;
      const n2 = this._getFocusableElement(t2, e2);
      if (n2) {
        const t3 = n2.getBoundingClientRect();
        o2 = t3.left + t3.width / 2, r2 = t3.top + t3.height / 2;
      } else if (i2.globals.pointsArray && i2.globals.pointsArray[t2] && i2.globals.pointsArray[t2][e2]) {
        const a3 = i2.globals.pointsArray[t2][e2], n3 = s2.getElGrid && s2.getElGrid();
        if (n3) {
          const t3 = n3.getBoundingClientRect();
          o2 = t3.left + (a3[0] || 0), r2 = t3.top + (a3[1] || 0);
        }
      } else {
        const t3 = i2.dom.Paper && i2.dom.Paper.node;
        if (t3) {
          const e3 = t3.getBoundingClientRect();
          o2 = e3.left + e3.width / 2, r2 = e3.top + e3.height / 2;
        }
      }
      if (("line" === a2 || "area" === a2 || "rangeArea" === a2 || "scatter" === a2 || "bubble" === a2 || "radar" === a2) && i2.globals.pointsArray && i2.globals.pointsArray[t2] && i2.globals.pointsArray[t2][e2]) {
        const a3 = i2.globals.pointsArray[t2][e2], n3 = s2.getElGrid && s2.getElGrid();
        if (n3) {
          const t3 = n3.getBoundingClientRect();
          o2 = t3.left + (a3[0] || 0), r2 = t3.top + (a3[1] || 0);
        }
      }
      s2.e = { type: "mousemove", clientX: o2, clientY: r2 };
    }
    _showTooltipBar(t2, e2, s2) {
      var i2, a2, o2, r2;
      const h2 = this.w, c2 = s2.tConfig.shared && (s2.tooltipUtil.isXoverlap(e2) || h2.globals.isBarHorizontal) && s2.tooltipUtil.isInitialSeriesSameLen(), d2 = null == (r2 = null == (o2 = null == (a2 = null == (i2 = h2.rangeData.seriesRange) ? void 0 : i2[t2]) ? void 0 : a2[e2]) ? void 0 : o2.y) ? void 0 : r2[0];
      s2.tooltipLabels.drawSeriesTexts(l(n(n({ ttItems: s2.ttItems, i: t2, j: e2 }, void 0 !== (null == d2 ? void 0 : d2.y1) && { y1: d2.y1 }), void 0 !== (null == d2 ? void 0 : d2.y2) && { y2: d2.y2 }), { shared: c2 }));
      const g2 = `.apexcharts-series[data\\:realIndex='${t2}']`, p2 = h2.dom.Paper.findOne(`${g2} path[j='${e2}'], ${g2} circle[j='${e2}'], ${g2} rect[j='${e2}']`);
      if (p2) {
        this._leaveHoveredBar();
        new N(this.w, this.ctx).pathMouseEnter(p2, null), this._hoveredBarEl = p2;
      }
      if (h2.globals.isBarHorizontal) {
        const t3 = p2 && p2.node;
        if (t3) {
          const e3 = h2.dom.elWrap.getBoundingClientRect(), i3 = t3.getBoundingClientRect(), a3 = i3.left - e3.left, o3 = i3.top - e3.top, r3 = i3.height, n2 = i3.width, l2 = s2.tooltipRect.ttWidth || 0, c3 = o3 + r3 / 2 - (s2.tooltipRect.ttHeight || 0) / 2;
          let d3 = a3 + n2;
          a3 < (s2.xyRatios && null != s2.xyRatios.baseLineInvertedY ? s2.xyRatios.baseLineInvertedY : e3.width / 2) && (d3 = a3 - l2);
          const g3 = s2.getElTooltip();
          g3 && (g3.style.left = d3 + "px", g3.style.top = c3 + "px");
        }
      } else s2.tooltipPosition.moveStickyTooltipOverBars(e2, t2);
    }
    _showTooltipAxisLine(t2, e2, s2) {
      const i2 = this.w, a2 = i2.config.chart.type, o2 = s2.tConfig.shared && s2.tooltipUtil.isXoverlap(e2) && s2.tooltipUtil.isInitialSeriesSameLen();
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: t2, j: e2, shared: o2 });
      const r2 = "scatter" === a2 || "bubble" === a2, n2 = i2.globals.markers.largestSize > 0;
      r2 ? this._showScatterBubblePoint(t2, e2, s2) : n2 ? o2 ? s2.marker.enlargePoints(e2) : s2.tooltipPosition.moveDynamicPointOnHover(e2, t2) : o2 ? s2.tooltipPosition.moveDynamicPointsOnHover(e2) : s2.tooltipPosition.moveDynamicPointOnHover(e2, t2);
    }
    _showScatterBubblePoint(t2, e2, s2) {
      const i2 = this.w.dom.baseEl;
      this._enlargedScatterMarker && (s2.marker.oldPointSize(this._enlargedScatterMarker), this._enlargedScatterMarker = null);
      const a2 = i2.querySelector(`.apexcharts-series[data\\:realIndex='${t2}']`);
      if (!a2) return;
      const o2 = a2.querySelector(`.apexcharts-marker[rel='${e2}']`);
      o2 && (s2.marker.enlargeCurrentPoint(e2, o2), this._enlargedScatterMarker = o2);
    }
    _showTooltipNonAxis(t2, e2, s2, i2) {
      var a2, o2;
      const r2 = this.w;
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: e2, shared: false });
      const n2 = i2.getBoundingClientRect(), l2 = n2.width || s2.tooltipRect.ttWidth || 0, h2 = n2.height || s2.tooltipRect.ttHeight || 0, c2 = r2.dom.baseEl.querySelector(`.apexcharts-pie-area[j='${e2}']`);
      if (c2) {
        const t3 = parseFloat(null != (a2 = c2.getAttribute("data:cx")) ? a2 : ""), e3 = parseFloat(null != (o2 = c2.getAttribute("data:cy")) ? o2 : "");
        if (!isNaN(t3) && !isNaN(e3)) {
          const s3 = r2.dom.Paper.node.getBoundingClientRect(), a3 = r2.dom.elWrap.getBoundingClientRect(), o3 = s3.left - a3.left, n3 = s3.top - a3.top;
          i2.style.left = o3 + t3 - l2 / 2 + "px", i2.style.top = n3 + e3 - h2 - 10 + "px";
        }
      }
    }
    _showTooltipRadialBar(t2, e2, s2, i2) {
      var a2;
      const o2 = this.w;
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: t2, shared: false });
      const { ttWidth: r2 = 0, ttHeight: n2 = 0 } = s2.getCachedDimensions(), l2 = o2.dom.baseEl.querySelector(`.apexcharts-radialbar-series[data\\:realIndex='${t2}'] path`);
      if (l2) {
        const e3 = parseFloat(null != (a2 = l2.getAttribute("data:angle")) ? a2 : "") || 0, s3 = (o2.config.plotOptions.radialBar.startAngle || 0) + e3 / 2, h2 = o2.layout.gridWidth / 2, c2 = o2.layout.gridHeight / 2, d2 = o2.globals.radialSize || Math.min(o2.layout.gridWidth, o2.layout.gridHeight) / 2, g2 = o2.seriesData.series.length, p2 = d2 / Math.max(g2, 1), u2 = d2 - t2 * p2, x2 = (u2 + (u2 - p2)) / 2, f2 = m.polarToCartesian(h2, c2, x2, s3), b2 = f2.x + (o2.layout.translateX || 0), y2 = f2.y + (o2.layout.translateY || 0);
        i2.style.left = b2 - r2 / 2 + "px", i2.style.top = y2 - n2 - 10 + "px";
      }
    }
    _showTooltipHeatTree(t2, e2, s2, i2, a2) {
      var o2, r2;
      const n2 = this.w;
      s2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: t2, j: e2, shared: false });
      const l2 = i2.getBoundingClientRect(), h2 = l2.width || s2.tooltipRect.ttWidth || 0, c2 = l2.height || s2.tooltipRect.ttHeight || 0, d2 = "heatmap" === a2 ? "apexcharts-heatmap-rect" : "apexcharts-treemap-rect", g2 = n2.dom.baseEl.querySelector(`.${d2}[i='${t2}'][j='${e2}']`);
      if (g2) {
        const t3 = n2.dom.elWrap.getBoundingClientRect(), e3 = g2.getBoundingClientRect(), a3 = e3.left - t3.left, l3 = e3.top - t3.top, d3 = e3.width, p2 = e3.height, u2 = parseFloat(null != (o2 = g2.getAttribute("cx")) ? o2 : ""), x2 = parseFloat(null != (r2 = g2.getAttribute("width")) ? r2 : "");
        s2.tooltipPosition.moveXCrosshairs(u2 + x2 / 2);
        let f2 = a3 + d3 + h2 / 2;
        const b2 = l3 + p2 / 2 - c2 / 2;
        a3 + d3 > n2.layout.gridWidth / 2 && (f2 = a3 - h2 / 2), i2.style.left = f2 + "px", i2.style.top = b2 + "px";
      }
    }
    _applyFocusClass(t2, e2) {
      this._removeFocusClass();
      const s2 = this._getFocusableElement(t2, e2);
      if (s2) {
        s2.classList.add("apexcharts-keyboard-focused"), s2.setAttribute("role", "img");
        const i2 = this._buildPointLabel(t2, e2);
        i2 && s2.setAttribute("aria-label", i2), this._focusedEl = s2;
      }
    }
    _removeFocusClass() {
      this._focusedEl && (this._focusedEl.classList.remove("apexcharts-keyboard-focused"), this._focusedEl.removeAttribute("role"), this._focusedEl.removeAttribute("aria-label"), this._focusedEl = null);
    }
    _buildPointLabel(t2, e2) {
      var s2, i2, a2, o2, r2, n2, l2, h2;
      const c2 = this.w, d2 = c2.config.chart.type, g2 = c2.seriesData.seriesNames || [], p2 = c2.seriesData.series || [];
      if ("pie" === d2 || "donut" === d2 || "polarArea" === d2) {
        const t3 = null != (i2 = (null == (s2 = c2.labelData) ? void 0 : s2.labels) && c2.labelData.labels[e2]) ? i2 : "", a3 = Array.isArray(p2) ? p2[e2] : "";
        return t3 ? `${t3}: ${a3}` : `${a3}`;
      }
      if ("radialBar" === d2) {
        return `${g2[t2] || `Series ${t2 + 1}`}: ${Array.isArray(p2) ? p2[t2] : ""}`;
      }
      const u2 = g2[t2] || `Series ${t2 + 1}`, x2 = (Array.isArray(p2[t2]) ? p2[t2] : [])[e2];
      let f2 = null == x2 ? "" : String(x2);
      const b2 = null == (o2 = null == (a2 = c2.formatters) ? void 0 : a2.yLabelFormatters) ? void 0 : o2[t2];
      if ("function" == typeof b2) try {
        f2 = b2(x2, { seriesIndex: t2, dataPointIndex: e2, w: c2 });
      } catch (t3) {
      }
      let m2 = "";
      const y2 = null == (r2 = c2.labelData) ? void 0 : r2.categoryLabels, w2 = null == (l2 = null == (n2 = c2.seriesData) ? void 0 : n2.seriesX) ? void 0 : l2[t2];
      if (Array.isArray(y2) && null != y2[e2]) m2 = String(y2[e2]);
      else if (Array.isArray(w2) && null != w2[e2]) {
        const s3 = null == (h2 = c2.formatters) ? void 0 : h2.xLabelFormatter;
        if ("function" == typeof s3) try {
          m2 = String(s3(w2[e2], { seriesIndex: t2, dataPointIndex: e2, w: c2 }));
        } catch (t3) {
          m2 = String(w2[e2]);
        }
        else m2 = String(w2[e2]);
      }
      return m2 ? `${u2}: ${f2}, ${m2}` : `${u2}: ${f2}`;
    }
    _leaveHoveredBar() {
      if (this._hoveredBarEl) {
        new N(this.w, this.ctx).pathMouseLeave(this._hoveredBarEl, null), this._hoveredBarEl = null;
      }
    }
    _getFocusableElement(t2, e2) {
      const s2 = this.w, i2 = s2.config.chart.type, a2 = s2.dom.baseEl;
      if ("pie" === i2 || "donut" === i2 || "polarArea" === i2) return a2.querySelector(`.apexcharts-pie-area[j='${e2}']`);
      if ("heatmap" === i2) return a2.querySelector(`.apexcharts-heatmap-rect[i='${t2}'][j='${e2}']`);
      if ("treemap" === i2) return a2.querySelector(`.apexcharts-treemap-rect[i='${t2}'][j='${e2}']`);
      if ("radialBar" === i2) return a2.querySelector(`.apexcharts-radialbar-series[data\\:realIndex='${t2}'] path`);
      if ("bar" === i2 || "candlestick" === i2 || "boxPlot" === i2 || "violin" === i2 || "rangeBar" === i2) return a2.querySelector(`.apexcharts-series[data\\:realIndex='${t2}'] path[j='${e2}']`);
      return a2.querySelector(`.apexcharts-series[data\\:realIndex='${t2}'] .apexcharts-marker[rel='${e2}']`) || null;
    }
    _fireClick() {
      const t2 = this.w.globals.tooltip;
      if (!t2) return;
      t2.markerClick({ type: "mouseup", clientX: 0, clientY: 0 }, this.seriesIndex, this.dataPointIndex);
    }
    _isNavEnabled() {
      const t2 = this.w.config.chart.accessibility;
      return t2.enabled && t2.keyboard.enabled && t2.keyboard.navigation.enabled;
    }
    _getSeriesCount() {
      const t2 = this.w, e2 = t2.config.chart.type;
      return "pie" === e2 || "donut" === e2 || "polarArea" === e2 ? 1 : t2.seriesData.series.length;
    }
    _getDataPointCount(t2) {
      const e2 = this.w, s2 = e2.config.chart.type;
      if ("pie" === s2 || "donut" === s2 || "polarArea" === s2) return e2.seriesData.series.length;
      const i2 = e2.seriesData.series;
      return i2[t2] && Array.isArray(i2[t2]) ? i2[t2].length : 0;
    }
    _clampCursor() {
      const t2 = this._getSeriesCount();
      this.seriesIndex >= t2 && (this.seriesIndex = t2 - 1), this.seriesIndex < 0 && (this.seriesIndex = 0);
      const e2 = this._getDataPointCount(this.seriesIndex);
      this.dataPointIndex >= e2 && (this.dataPointIndex = e2 - 1), this.dataPointIndex < 0 && (this.dataPointIndex = 0);
    }
    _snapToVisibleRange() {
      const t2 = this.w, e2 = t2.globals, s2 = this.seriesIndex;
      if (!t2.interact.zoomed) return;
      const i2 = t2.seriesData.seriesX && t2.seriesData.seriesX[s2];
      if (!i2 || !i2.length) return;
      const a2 = e2.minX, o2 = e2.maxX;
      if (void 0 === a2 || void 0 === o2) return;
      const r2 = i2[this.dataPointIndex];
      if (r2 >= a2 && r2 <= o2) return;
      const n2 = i2.length;
      for (let t3 = 0; t3 < n2; t3++) if (i2[t3] >= a2 && i2[t3] <= o2) return void (this.dataPointIndex = t3);
    }
    _snapToVisibleRangeInDirection(t2) {
      const e2 = this.w, s2 = e2.globals, i2 = this.seriesIndex, a2 = e2.seriesData.seriesX && e2.seriesData.seriesX[i2];
      if (!a2 || !a2.length) return;
      const o2 = s2.minX, r2 = s2.maxX;
      if (void 0 === o2 || void 0 === r2) return;
      const n2 = a2.length;
      if (t2 >= 0) {
        for (let t3 = 0; t3 < n2; t3++) if (a2[t3] >= o2 && a2[t3] <= r2) return void (this.dataPointIndex = t3);
      } else for (let t3 = n2 - 1; t3 >= 0; t3--) if (a2[t3] >= o2 && a2[t3] <= r2) return void (this.dataPointIndex = t3);
    }
    _isDataPointVisible(t2, e2) {
      const s2 = this.w, i2 = s2.globals;
      if (!s2.interact.zoomed) return true;
      const a2 = s2.seriesData.seriesX && s2.seriesData.seriesX[t2];
      if (!a2) return true;
      const o2 = a2[e2];
      return void 0 === o2 || o2 >= i2.minX && o2 <= i2.maxX;
    }
    _announce(t2) {
      const e2 = this.w;
      if (!e2.config.chart.accessibility.announcements.enabled) return;
      const s2 = e2.dom.baseEl;
      if (!s2) return;
      const i2 = s2.querySelector(".apexcharts-sr-status");
      i2 && (i2.textContent = "", setTimeout(() => {
        i2.textContent = t2;
      }, 0));
    }
  } });
  const Pe = /* @__PURE__ */ new Set(["bar", "funnel", "pyramid"]), Te = /* @__PURE__ */ new Set(["pie", "donut", "polarArea", "radialBar", "gauge"]);
  function Fe(t2) {
    return Pe.has(t2) ? "bar" : Te.has(t2) ? "radial" : null;
  }
  me.registerFeatures({ morphTypeChange: class {
    constructor(t2, e2) {
      this.w = t2, this.ctx = e2, this._snapshot = null;
    }
    canMorphTypes(t2, e2) {
      if (t2 === e2) return false;
      const s2 = Fe(t2), i2 = Fe(e2);
      return !(!s2 || !i2);
    }
    isCompatibleSeriesShape(t2, e2, s2) {
      if (!Array.isArray(s2) || 0 === s2.length) return false;
      const i2 = Fe(t2), a2 = Fe(e2);
      return "radial" === a2 ? s2.every((t3) => "number" == typeof t3) : "bar" === a2 ? s2.every((t3) => t3 && "object" == typeof t3 && Array.isArray(t3.data)) : null !== i2 && null !== a2;
    }
    captureBeforeDestroy({ fromType: t2, toType: e2, newSeries: s2 }) {
      if (this._snapshot = null, !c.isBrowser()) return false;
      const i2 = this.w.config.chart.animations;
      if (!i2 || false === i2.enabled) return false;
      if (i2.chartTypeMorph && false === i2.chartTypeMorph.enabled) return false;
      if (i2.respectReducedMotion && R()) return false;
      if (!this.canMorphTypes(t2, e2)) return false;
      if (!this.isCompatibleSeriesShape(t2, e2, s2)) return false;
      const a2 = this._captureFromDOM(t2);
      if (!a2.length) return false;
      const o2 = this._buildMapping(a2, t2, e2, s2);
      return 0 !== o2.size && (this._snapshot = { fromType: t2, toType: e2, mapping: o2, oldLayout: { translateX: this.w.layout.translateX || 0, translateY: this.w.layout.translateY || 0 } }, this.w.globals.previousPaths = [], true);
    }
    _captureFromDOM(t2) {
      var e2;
      const s2 = null == (e2 = this.w.globals.dom) ? void 0 : e2.baseEl;
      if (!s2) return [];
      const i2 = [], a2 = Fe(t2);
      if ("bar" === a2) {
        s2.querySelectorAll(".apexcharts-bar-series .apexcharts-series").forEach((t3) => {
          var e3;
          const s3 = parseInt(null != (e3 = t3.getAttribute("data:realIndex")) ? e3 : "0", 10);
          t3.querySelectorAll("path[pathTo]").forEach((t4, e4) => {
            const a3 = t4.getAttribute("pathTo") || t4.getAttribute("d");
            a3 && i2.push({ realIndex: s3, j: e4, d: a3, fill: t4.getAttribute("fill") });
          });
        });
      } else if ("radial" === a2) if ("radialBar" === t2 || "gauge" === t2) {
        const t3 = this.w.layout.gridWidth / 2, e3 = Math.min(this.w.layout.gridWidth, this.w.layout.gridHeight) / 2;
        s2.querySelectorAll(".apexcharts-radial-series .apexcharts-radialbar-area").forEach((s3) => {
          var a3;
          const o2 = s3.parentElement, r2 = parseInt(null != (a3 = null == o2 ? void 0 : o2.getAttribute("data:realIndex")) ? a3 : "0", 10), n2 = s3.getAttribute("d");
          if (!n2) return;
          const l2 = parseFloat(s3.getAttribute("stroke-width") || "0"), h2 = l2 > 1 && this._radialArcToFilledSegment(n2, l2, t3, e3) || n2;
          i2.push({ realIndex: r2, j: 0, d: h2, fill: s3.getAttribute("stroke") });
        });
      } else {
        s2.querySelectorAll(".apexcharts-pie-series .apexcharts-pie-area").forEach((t3, e3) => {
          const s3 = t3.getAttribute("d");
          s3 && i2.push({ realIndex: e3, j: 0, d: s3, fill: t3.getAttribute("fill") });
        });
      }
      return i2;
    }
    _radialArcToFilledSegment(t2, e2, s2, i2) {
      const a2 = t2.match(/M\s*(-?[\d.]+)\s+(-?[\d.]+)\s+A\s*(-?[\d.]+)\s+(?:-?[\d.]+)\s+(?:-?[\d.]+)\s+(\d)\s+(\d)\s+(-?[\d.]+)\s+(-?[\d.]+)/);
      if (!a2) return null;
      const o2 = parseFloat(a2[1]), r2 = parseFloat(a2[2]), n2 = parseFloat(a2[3]), l2 = parseInt(a2[4], 10), h2 = parseInt(a2[5], 10), c2 = parseFloat(a2[6]), d2 = parseFloat(a2[7]);
      if (!isFinite(n2) || n2 <= 0) return null;
      const g2 = e2 / 2, p2 = n2 + g2, u2 = Math.max(0, n2 - g2), x2 = (t3, e3, a3) => {
        const o3 = t3 - s2, r3 = e3 - i2, n3 = Math.sqrt(o3 * o3 + r3 * r3);
        if (0 === n3) return { x: s2, y: i2 };
        const l3 = a3 / n3;
        return { x: s2 + o3 * l3, y: i2 + r3 * l3 };
      }, f2 = x2(o2, r2, p2), b2 = x2(c2, d2, p2), m2 = x2(o2, r2, u2), y2 = x2(c2, d2, u2), w2 = h2 ? 0 : 1;
      return `M ${f2.x} ${f2.y} A ${p2} ${p2} 0 ${l2} ${h2} ${b2.x} ${b2.y} L ${y2.x} ${y2.y} A ${u2} ${u2} 0 ${l2} ${w2} ${m2.x} ${m2.y} Z`;
    }
    buildRingSegmentPath(t2, e2, s2, i2, a2, o2) {
      const r2 = i2 / 2, n2 = s2 + r2, l2 = Math.max(0, s2 - r2), h2 = (a2 - 90) * Math.PI / 180, c2 = (o2 - 90) * Math.PI / 180, d2 = t2 + n2 * Math.cos(h2), g2 = e2 + n2 * Math.sin(h2), p2 = t2 + n2 * Math.cos(c2), u2 = e2 + n2 * Math.sin(c2), x2 = t2 + l2 * Math.cos(h2), f2 = e2 + l2 * Math.sin(h2), b2 = t2 + l2 * Math.cos(c2), m2 = e2 + l2 * Math.sin(c2), y2 = o2 > a2 ? 1 : 0, w2 = Math.abs(o2 - a2) > 180 ? 1 : 0;
      return `M ${d2} ${g2} A ${n2} ${n2} 0 ${w2} ${y2} ${p2} ${u2} L ${b2} ${m2} A ${l2} ${l2} 0 ${w2} ${1 - y2} ${x2} ${f2} Z`;
    }
    getFromType() {
      return this._snapshot ? this._snapshot.fromType : null;
    }
    _buildMapping(t2, e2, s2, i2) {
      const a2 = /* @__PURE__ */ new Map(), o2 = Fe(s2), r2 = t2.slice().sort((t3, e3) => t3.realIndex - e3.realIndex || t3.j - e3.j);
      if ("radial" === o2) return r2.forEach((t3, e3) => {
        a2.set(`${e3}:0`, { d: t3.d, fill: t3.fill });
      }), a2;
      if ("bar" === o2) {
        const t3 = [];
        return (Array.isArray(i2) ? i2 : []).forEach((e3, s3) => {
          const i3 = e3 && Array.isArray(e3.data) ? e3.data : [];
          for (let e4 = 0; e4 < i3.length; e4++) t3.push({ realIndex: s3, j: e4 });
        }), r2.forEach((e3, s3) => {
          const i3 = t3[s3];
          i3 && a2.set(`${i3.realIndex}:${i3.j}`, { d: e3.d, fill: e3.fill });
        }), a2;
      }
      return a2;
    }
    isActive() {
      return null !== this._snapshot;
    }
    getInitialPathFor(t2, e2) {
      if (!this._snapshot) return null;
      const s2 = this._snapshot.mapping.get(`${t2}:${e2}`);
      if (!s2) return null;
      const i2 = this._snapshot.oldLayout.translateX - (this.w.layout.translateX || 0), a2 = this._snapshot.oldLayout.translateY - (this.w.layout.translateY || 0);
      return 0 === i2 && 0 === a2 ? s2.d : this._translatePathD(s2.d, i2, a2);
    }
    _translatePathD(t2, e2, s2) {
      if (0 === e2 && 0 === s2) return t2;
      return Jt(t2).map((t3) => {
        const i2 = t3[0];
        return "Z" === i2 ? "Z" : "M" === i2 || "L" === i2 || "T" === i2 ? `${i2} ${t3[1] + e2} ${t3[2] + s2}` : "H" === i2 ? `${i2} ${t3[1] + e2}` : "V" === i2 ? `${i2} ${t3[1] + s2}` : "C" === i2 ? `${i2} ${t3[1] + e2} ${t3[2] + s2} ${t3[3] + e2} ${t3[4] + s2} ${t3[5] + e2} ${t3[6] + s2}` : "S" === i2 || "Q" === i2 ? `${i2} ${t3[1] + e2} ${t3[2] + s2} ${t3[3] + e2} ${t3[4] + s2}` : "A" === i2 ? `${i2} ${t3[1]} ${t3[2]} ${t3[3]} ${t3[4]} ${t3[5]} ${t3[6] + e2} ${t3[7] + s2}` : t3.join(" ");
      }).join(" ");
    }
    getInitialFillFor(t2, e2) {
      if (!this._snapshot) return null;
      const s2 = this._snapshot.mapping.get(`${t2}:${e2}`);
      return s2 ? s2.fill : null;
    }
    getSpeed() {
      const t2 = this.w.config.chart.animations;
      return t2.chartTypeMorph && t2.chartTypeMorph.speed || t2.speed || 600;
    }
    applyChromeFade() {
      var t2;
      if (!this._snapshot || !c.isBrowser()) return;
      const e2 = null == (t2 = this.w.globals.dom) ? void 0 : t2.baseEl;
      if (!e2) return;
      const s2 = this.getSpeed();
      [".apexcharts-xaxis", ".apexcharts-yaxis", ".apexcharts-grid", ".apexcharts-gridlines-horizontal", ".apexcharts-gridlines-vertical", ".apexcharts-legend", ".apexcharts-title-text", ".apexcharts-subtitle-text"].forEach((t3) => {
        e2.querySelectorAll(t3).forEach((t4) => {
          t4.style && (t4.style.opacity = "0", t4.style.transition = `opacity ${s2}ms ease-out`, b.requestAnimationFrame(() => {
            t4.style.opacity = "1";
          }), setTimeout(() => {
            t4.style.transition = "", t4.style.opacity = "";
          }, s2 + 80));
        });
      }), setTimeout(() => this.cleanup(), s2 + 100);
    }
    cleanup() {
      this._snapshot = null;
    }
  } });
  class Ee {
    constructor(t2) {
      this.w = t2.w, this.barCtx = t2, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    handleBarDataLabels(t2) {
      const { x: e2, y: s2, y1: i2, y2: a2, i: o2, j: r2, realIndex: h2, columnGroupIndex: c2, series: d2, barHeight: g2, barWidth: p2, barXPosition: u2, barYPosition: x2, visibleSeries: f2 } = t2, b2 = this.w, m2 = new N(this.barCtx.w), y2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h2] : this.barCtx.strokeWidth;
      let w2, v2;
      b2.axisFlags.isXNumeric && !b2.globals.isBarHorizontal ? (w2 = e2 + p2 * (f2 + 1), v2 = s2 + g2 * (f2 + 1) - y2) : (w2 = e2 + p2 * f2, v2 = s2 + g2 * f2);
      let A2 = null, C2 = null, S2 = e2, k2 = s2, D2 = {};
      const L2 = b2.config.dataLabels, M2 = this.barCtx.barOptions.dataLabels, P2 = this.barCtx.barOptions.dataLabels.total;
      void 0 !== x2 && (this.barCtx.isRangeBar || this.barCtx.isPyramid) && (v2 = x2, k2 = x2), void 0 !== u2 && this.barCtx.isVerticalGroupedRangeBar && (w2 = u2, S2 = u2);
      const T2 = L2.offsetX, F2 = L2.offsetY;
      let E2 = { width: 0, height: 0 };
      if (b2.config.dataLabels.enabled) {
        const t3 = b2.seriesData.series[o2][r2];
        E2 = m2.getTextRects(b2.config.dataLabels.formatter ? b2.config.dataLabels.formatter(t3, l(n({}, b2), { seriesIndex: o2, dataPointIndex: r2, w: b2 })) : b2.formatters.yLabelFormatters[0](t3), parseFloat(L2.style.fontSize).toString());
      }
      const I2 = { x: e2, y: s2, i: o2, j: r2, realIndex: h2, columnGroupIndex: c2, bcx: w2, bcy: v2, barHeight: g2, barWidth: p2, textRects: E2, strokeWidth: y2, dataLabelsX: S2, dataLabelsY: k2, dataLabelsConfig: L2, barDataLabelsConfig: M2, barTotalDataLabelsConfig: P2, offX: T2, offY: F2 };
      return D2 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(I2) : this.calculateColumnsDataLabelsPosition(I2), A2 = this.drawCalculatedDataLabels({ x: D2.dataLabelsX, y: D2.dataLabelsY, val: this.barCtx.isRangeBar ? [i2, a2] : "100%" === b2.config.chart.stackType ? d2[h2][r2] : b2.seriesData.series[h2][r2], i: h2, j: r2, barWidth: p2, barHeight: g2, textRects: E2, dataLabelsConfig: L2 }), b2.config.chart.stacked && P2.enabled && (C2 = this.drawTotalDataLabels({ x: D2.totalDataLabelsX, y: D2.totalDataLabelsY, barWidth: p2, barHeight: g2, realIndex: h2, textAnchor: D2.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h2, j: r2 }), dataLabelsConfig: L2, barTotalDataLabelsConfig: P2 })), { dataLabelsPos: D2, dataLabels: A2, totalDataLabels: C2 };
    }
    getStackedTotalDataLabel({ realIndex: t2, j: e2 }) {
      const s2 = this.w;
      let i2 = this.barCtx.stackedSeriesTotals[e2];
      return this.totalFormatter && (i2 = this.totalFormatter(i2, l(n({}, s2), { seriesIndex: t2, dataPointIndex: e2, w: s2 }))), i2;
    }
    calculateColumnsDataLabelsPosition(t2) {
      const e2 = this.w;
      let s2, i2, { i: a2, j: o2, realIndex: r2, y: n2, bcx: l2, barWidth: h2, barHeight: c2, textRects: d2, dataLabelsX: g2, dataLabelsY: p2, dataLabelsConfig: u2, barDataLabelsConfig: x2, barTotalDataLabelsConfig: f2, strokeWidth: b2, offX: m2, offY: y2 } = t2;
      const w2 = l2;
      c2 = Math.abs(c2);
      const v2 = "vertical" === e2.config.plotOptions.bar.dataLabels.orientation, { zeroEncounters: A2 } = this.barCtx.barHelpers.getZeroValueEncounters({ i: a2, j: o2 });
      l2 -= b2 / 2;
      const C2 = e2.layout.gridWidth / e2.globals.dataPoints;
      if (this.barCtx.isVerticalGroupedRangeBar ? g2 += h2 / 2 : (g2 = e2.axisFlags.isXNumeric ? l2 - h2 / 2 + m2 : l2 - C2 + h2 / 2 + m2, !e2.config.chart.stacked && A2 > 0 && e2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g2 -= h2 * A2)), v2) {
        const t3 = 2;
        g2 = g2 + d2.height / 2 - b2 / 2 - t3;
      }
      const S2 = e2.seriesData.series[a2][o2] < 0;
      let k2 = n2;
      switch (this.barCtx.isReversed && (k2 = n2 + (S2 ? c2 : -c2)), x2.position) {
        case "center":
          p2 = v2 ? S2 ? k2 - c2 / 2 + y2 : k2 + c2 / 2 - y2 : S2 ? k2 - c2 / 2 + d2.height / 2 + y2 : k2 + c2 / 2 + d2.height / 2 - y2;
          break;
        case "bottom":
          p2 = v2 ? S2 ? k2 - c2 + y2 : k2 + c2 - y2 : S2 ? k2 - c2 + d2.height + b2 + y2 : k2 + c2 - d2.height / 2 + b2 - y2;
          break;
        case "top":
          p2 = v2 ? S2 ? k2 + y2 : k2 - y2 : S2 ? k2 - d2.height / 2 - y2 : k2 + d2.height + y2;
      }
      let D2 = k2;
      if (e2.labelData.seriesGroups.forEach((t3) => {
        var e3;
        null == (e3 = this.barCtx[t3.join(",")]) || e3.prevY.forEach((t4) => {
          D2 = S2 ? Math.max(t4[o2], D2) : Math.min(t4[o2], D2);
        });
      }), this.barCtx.lastActiveBarSerieIndex === r2 && f2.enabled) {
        const t3 = 18, a3 = new N(this.barCtx.w).getTextRects(this.getStackedTotalDataLabel({ realIndex: r2, j: o2 }), u2.fontSize);
        s2 = S2 ? D2 - a3.height / 2 - y2 - f2.offsetY + t3 : D2 + a3.height + y2 + f2.offsetY - t3;
        const n3 = C2;
        i2 = w2 + (e2.axisFlags.isXNumeric ? -h2 * e2.globals.barGroups.length / 2 : e2.globals.barGroups.length * h2 / 2 - (e2.globals.barGroups.length - 1) * h2 - n3) + f2.offsetX;
      }
      return e2.config.chart.stacked || (p2 < 0 ? p2 = 0 + b2 : p2 + d2.height / 3 > e2.layout.gridHeight && (p2 = e2.layout.gridHeight - b2)), { bcx: l2, bcy: n2, dataLabelsX: g2, dataLabelsY: p2, totalDataLabelsX: i2, totalDataLabelsY: s2, totalDataLabelsAnchor: "middle" };
    }
    calculateBarsDataLabelsPosition(t2) {
      var e2;
      const s2 = this.w;
      let { x: i2, i: a2, j: o2, realIndex: r2, bcy: n2, barHeight: l2, barWidth: h2, textRects: c2, dataLabelsX: d2, strokeWidth: g2, dataLabelsConfig: p2, barDataLabelsConfig: u2, barTotalDataLabelsConfig: x2, offX: f2, offY: b2 } = t2;
      const m2 = s2.layout.gridHeight / s2.globals.dataPoints, { zeroEncounters: y2 } = this.barCtx.barHelpers.getZeroValueEncounters({ i: a2, j: o2 });
      let w2, v2, A2;
      if (h2 = Math.abs(h2), this.barCtx.isPyramid) {
        w2 = n2 + l2 / 2 + b2 - (null != (e2 = c2.centerOffset) ? e2 : 0);
      } else w2 = n2 - (this.barCtx.isRangeBar ? 0 : m2) + l2 / 2 + c2.height / 2 + b2 - 3;
      !s2.config.chart.stacked && y2 > 0 && s2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (w2 -= l2 * y2);
      let C2 = "start";
      const S2 = s2.seriesData.series[a2][o2] < 0;
      let k2 = i2;
      if (this.barCtx.isReversed && (k2 = i2 + (S2 ? -h2 : h2), C2 = S2 ? "start" : "end"), this.barCtx.isPyramid) d2 = s2.layout.gridWidth / 2 + f2;
      else switch (u2.position) {
        case "center":
          d2 = S2 ? k2 + h2 / 2 - f2 : Math.max(c2.width / 2, k2 - h2 / 2) + f2;
          break;
        case "bottom":
          d2 = S2 ? k2 + h2 - g2 - f2 : k2 - h2 + g2 + f2;
          break;
        case "top":
          d2 = S2 ? k2 - g2 - f2 : k2 - g2 + f2;
      }
      let D2 = k2;
      if (s2.labelData.seriesGroups.forEach((t3) => {
        var e3;
        null == (e3 = this.barCtx[t3.join(",")]) || e3.prevX.forEach((t4) => {
          D2 = S2 ? Math.min(t4[o2], D2) : Math.max(t4[o2], D2);
        });
      }), this.barCtx.lastActiveBarSerieIndex === r2 && x2.enabled) {
        const t3 = new N(this.barCtx.w).getTextRects(this.getStackedTotalDataLabel({ realIndex: r2, j: o2 }), p2.fontSize);
        S2 ? (v2 = D2 - g2 - f2 - x2.offsetX, C2 = "end") : v2 = D2 + f2 + x2.offsetX + (this.barCtx.isReversed ? -(h2 + g2) : g2), A2 = w2 - c2.height / 2 + t3.height / 2 + x2.offsetY + g2, s2.globals.barGroups.length > 1 && (A2 -= s2.globals.barGroups.length / 2 * (l2 / 2));
      }
      return s2.config.chart.stacked || ("start" === p2.textAnchor ? d2 - c2.width < 0 ? d2 = S2 ? c2.width + g2 : g2 : d2 + c2.width > s2.layout.gridWidth && (d2 = S2 ? s2.layout.gridWidth - g2 : s2.layout.gridWidth - c2.width - g2) : "middle" === p2.textAnchor ? d2 - c2.width / 2 < 0 ? d2 = c2.width / 2 + g2 : d2 + c2.width / 2 > s2.layout.gridWidth && (d2 = s2.layout.gridWidth - c2.width / 2 - g2) : "end" === p2.textAnchor && (d2 < 1 ? d2 = c2.width + g2 : d2 + 1 > s2.layout.gridWidth && (d2 = s2.layout.gridWidth - c2.width - g2))), { bcx: i2, bcy: n2, dataLabelsX: d2, dataLabelsY: w2, totalDataLabelsX: v2, totalDataLabelsY: A2, totalDataLabelsAnchor: C2 };
    }
    drawCalculatedDataLabels({ x: t2, y: e2, val: s2, i: i2, j: a2, textRects: o2, barHeight: r2, barWidth: h2, dataLabelsConfig: c2 }) {
      const d2 = this.w;
      let g2 = "rotate(0)";
      "vertical" === d2.config.plotOptions.bar.dataLabels.orientation && (g2 = `rotate(-90, ${t2}, ${e2})`);
      const p2 = new U(this.barCtx.w, this.barCtx.ctx), u2 = new N(this.barCtx.w), x2 = c2.formatter;
      let f2 = null;
      const b2 = d2.globals.collapsedSeriesIndices.indexOf(i2) > -1;
      if (c2.enabled && !b2) {
        f2 = u2.group({ class: "apexcharts-data-labels", transform: g2 });
        let b3 = "";
        void 0 !== s2 && (b3 = x2(s2, l(n({}, d2), { seriesIndex: i2, dataPointIndex: a2, w: d2 }))), !s2 && d2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (b3 = "");
        const m2 = d2.seriesData.series[i2][a2] < 0, y2 = d2.config.plotOptions.bar.dataLabels.position;
        if ("vertical" === d2.config.plotOptions.bar.dataLabels.orientation && ("top" === y2 && (c2.textAnchor = m2 ? "end" : "start"), "center" === y2 && (c2.textAnchor = "middle"), "bottom" === y2 && (c2.textAnchor = m2 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) {
          h2 < u2.getTextRects(b3, parseFloat(c2.style.fontSize).toString()).width && (b3 = "");
        }
        d2.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o2.width / 1.6 > Math.abs(h2) && (b3 = "") : o2.height / 1.6 > Math.abs(r2) && (b3 = ""));
        const w2 = n({}, c2);
        this.barCtx.isHorizontal && s2 < 0 && ("start" === c2.textAnchor ? w2.textAnchor = "end" : "end" === c2.textAnchor && (w2.textAnchor = "start")), p2.plotDataLabelsText({ x: t2, y: e2, text: b3, i: i2, j: a2, parent: f2, dataLabelsConfig: w2, alwaysDrawDataLabel: true, offsetCorrection: true });
      }
      return f2;
    }
    drawTotalDataLabels({ x: t2, y: e2, val: s2, realIndex: i2, textAnchor: a2, barTotalDataLabelsConfig: o2 }) {
      const r2 = new N(this.barCtx.w);
      let n2;
      return o2.enabled && void 0 !== t2 && void 0 !== e2 && this.barCtx.lastActiveBarSerieIndex === i2 && (n2 = r2.drawText({ x: t2, y: e2, foreColor: o2.style.color, text: s2, textAnchor: a2, fontFamily: o2.style.fontFamily, fontSize: o2.style.fontSize, fontWeight: o2.style.fontWeight })), n2;
    }
  }
  let Ie = class {
    constructor(t2) {
      this.w = t2.w, this.barCtx = t2;
    }
    initVariables(t2) {
      const e2 = this.w;
      this.barCtx.series = t2, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (let s2 = 0; s2 < t2.length; s2++) if (t2[s2].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t2[s2].length), e2.axisFlags.isXNumeric) for (let i2 = 0; i2 < t2[s2].length; i2++) e2.seriesData.seriesX[s2][i2] > e2.globals.minX && e2.seriesData.seriesX[s2][i2] < e2.globals.maxX && this.barCtx.visibleItems++;
      else this.barCtx.visibleItems = e2.globals.dataPoints;
      this.arrBorderRadius = this.createBorderRadiusArr(e2.seriesData.series), m.isSafari() && (this.arrBorderRadius = this.arrBorderRadius.map((t3) => t3.map((t4) => "none"))), 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e2.globals.comboCharts || this.checkZeroSeries({ series: t2 });
    }
    initialPositions(t2) {
      const e2 = this.w;
      let s2, i2, a2, o2, r2, n2, l2, h2, c2 = e2.globals.dataPoints;
      this.barCtx.isRangeBar && (c2 = e2.labelData.labels.length);
      let d2 = this.barCtx.seriesLen;
      if (e2.config.plotOptions.bar.rangeBarGroupRows && (d2 = 1), this.barCtx.isHorizontal) a2 = e2.layout.gridHeight / c2, r2 = a2 / d2, e2.axisFlags.isXNumeric && (a2 = e2.layout.gridHeight / this.barCtx.totalItems, r2 = a2 / this.barCtx.seriesLen), r2 = r2 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (r2 = parseInt(this.barCtx.barOptions.barHeight, 10)), h2 = this.barCtx.baseLineInvertedY + e2.globals.padHorizontal + (this.barCtx.isReversed ? e2.layout.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (h2 = e2.layout.gridWidth / 2), i2 = (a2 - r2 * this.barCtx.seriesLen) / 2;
      else {
        if (o2 = e2.layout.gridWidth / this.barCtx.visibleItems, e2.config.xaxis.convertedCatToNumeric && (o2 = e2.layout.gridWidth / e2.globals.dataPoints), n2 = o2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, e2.axisFlags.isXNumeric) {
          const t3 = this.barCtx.xRatio;
          e2.globals.minXDiff && 0.5 !== e2.globals.minXDiff && e2.globals.minXDiff / t3 > 0 && (o2 = e2.globals.minXDiff / t3), n2 = o2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, n2 < 1 && (n2 = 1);
        }
        if (-1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (n2 = parseInt(this.barCtx.barOptions.columnWidth, 10)), l2 = e2.layout.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? e2.layout.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), e2.axisFlags.isXNumeric) {
          s2 = this.barCtx.getBarXForNumericXAxis({ x: s2, j: 0, realIndex: t2, barWidth: n2 }).x;
        } else s2 = e2.globals.padHorizontal + m.noExponents(o2 - n2 * this.barCtx.seriesLen) / 2;
      }
      return e2.globals.barHeight = r2, e2.globals.barWidth = n2, { x: s2, y: i2, yDivision: a2, xDivision: o2, barHeight: r2, barWidth: n2, zeroH: l2, zeroW: h2 };
    }
    initializeStackedPrevVars(t2) {
      t2.w.labelData.seriesGroups.forEach((e2) => {
        t2[e2] || (t2[e2] = {}), t2[e2].prevY = [], t2[e2].prevX = [], t2[e2].prevYF = [], t2[e2].prevXF = [], t2[e2].prevYVal = [], t2[e2].prevXVal = [];
      });
    }
    initializeStackedXYVars(t2) {
      t2.w.labelData.seriesGroups.forEach((e2) => {
        t2[e2] || (t2[e2] = {}), t2[e2].xArrj = [], t2[e2].xArrjF = [], t2[e2].xArrjVal = [], t2[e2].yArrj = [], t2[e2].yArrjF = [], t2[e2].yArrjVal = [];
      });
    }
    getPathFillColor(t2, e2, s2, i2) {
      var a2, o2, r2, n2;
      const l2 = this.w, h2 = new G(this.barCtx.w);
      let c2 = null;
      const d2 = this.barCtx.barOptions.distributed ? s2 : e2;
      let g2 = false;
      if (this.barCtx.barOptions.colors.ranges.length > 0) {
        this.barCtx.barOptions.colors.ranges.map((i3) => {
          t2[e2][s2] >= i3.from && t2[e2][s2] <= i3.to && (c2 = i3.color, g2 = true);
        });
      }
      return { color: h2.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? d2 : i2, dataPointIndex: s2, color: c2, value: t2[e2][s2], fillConfig: null == (a2 = l2.config.series[e2].data[s2]) ? void 0 : a2.fill, fillType: (null == (r2 = null == (o2 = l2.config.series[e2].data[s2]) ? void 0 : o2.fill) ? void 0 : r2.type) ? null == (n2 = l2.config.series[e2].data[s2]) ? void 0 : n2.fill.type : Array.isArray(l2.config.fill.type) ? l2.config.fill.type[i2] : l2.config.fill.type }), useRangeColor: g2 };
    }
    getStrokeWidth(t2, e2, s2) {
      let i2 = 0;
      const a2 = this.w;
      return void 0 === this.barCtx.series[t2][e2] || null === this.barCtx.series[t2][e2] || "bar" === a2.config.chart.type && !this.barCtx.series[t2][e2] ? this.barCtx.isNullValue = true : this.barCtx.isNullValue = false, a2.config.stroke.show && (this.barCtx.isNullValue || (i2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[s2] : this.barCtx.strokeWidth)), i2;
    }
    createBorderRadiusArr(t2) {
      var e2;
      const s2 = this.w, i2 = !this.w.config.chart.stacked || s2.config.plotOptions.bar.borderRadius <= 0, a2 = t2.length, o2 = 0 | (null == (e2 = t2[0]) ? void 0 : e2.length), r2 = Array.from({ length: a2 }, () => Array(o2).fill(i2 ? "top" : "none"));
      if (i2) return r2;
      const n2 = this.w.config.chart.type;
      for (let e3 = 0; e3 < o2; e3++) {
        const s3 = [], i3 = [];
        let l2 = 0;
        for (let o3 = 0; o3 < a2; o3++) {
          const a3 = t2[o3][e3];
          a3 > 0 ? (s3.push(o3), l2++) : a3 < 0 && (i3.push(o3), l2++);
        }
        if (s3.length > 0 && 0 === i3.length) if (1 === s3.length) r2[s3[0]][e3] = "bar" === n2 && 1 === o2 ? "top" : "both";
        else {
          const t3 = s3[0], i4 = s3[s3.length - 1];
          for (const a3 of s3) r2[a3][e3] = a3 === t3 ? "bar" === n2 && 1 === o2 ? "top" : "bottom" : a3 === i4 ? "top" : "none";
        }
        else if (i3.length > 0 && 0 === s3.length) if (1 === i3.length) r2[i3[0]][e3] = "both";
        else {
          const t3 = Math.max(...i3), s4 = Math.min(...i3);
          for (const a3 of i3) r2[a3][e3] = a3 === t3 ? "bottom" : a3 === s4 ? "top" : "none";
        }
        else if (s3.length > 0 && i3.length > 0) {
          const t3 = s3[s3.length - 1];
          for (const i4 of s3) r2[i4][e3] = i4 === t3 ? "top" : "none";
          const a3 = Math.max(...i3);
          for (const t4 of i3) r2[t4][e3] = t4 === a3 ? "bottom" : "none";
        } else if (1 === l2) {
          r2[s3[0] || i3[0]][e3] = "both";
        }
      }
      return r2;
    }
    barBackground({ j: t2, i: e2, x1: s2, x2: i2, y1: a2, y2: o2, elSeries: r2 }) {
      const n2 = this.w, l2 = new N(this.barCtx.w), h2 = new lt(this.barCtx.w).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && h2 === e2) {
        t2 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (t2 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        const e3 = this.barCtx.barOptions.colors.backgroundBarColors[t2], h3 = l2.drawRect(void 0 !== s2 ? s2 : 0, void 0 !== a2 ? a2 : 0, void 0 !== i2 ? i2 : n2.layout.gridWidth, void 0 !== o2 ? o2 : n2.layout.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, e3, this.barCtx.barOptions.colors.backgroundBarOpacity);
        r2.add(h3), h3.node.classList.add("apexcharts-backgroundBar");
      }
    }
    getColumnPaths({ barWidth: t2, barXPosition: e2, y1: s2, y2: i2, strokeWidth: a2, isReversed: o2, series: r2, seriesGroup: n2, realIndex: l2, i: h2, j: c2, w: d2 }) {
      var g2, p2, u2;
      const x2 = new N(this.barCtx.w);
      (a2 = Array.isArray(a2) ? a2[l2] : a2) || (a2 = 0);
      let f2 = t2, b2 = e2;
      (null == (g2 = d2.config.series[l2].data[c2]) ? void 0 : g2.columnWidthOffset) && (b2 = e2 - d2.config.series[l2].data[c2].columnWidthOffset / 2, f2 = t2 + d2.config.series[l2].data[c2].columnWidthOffset);
      const m2 = a2 / 2, y2 = b2 + m2, w2 = b2 + f2 - m2, v2 = (r2[h2][c2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 - m2 * v2, i2 += 1e-3 + m2 * v2;
      const A2 = x2.line(w2, s2), C2 = "around" === d2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[l2][c2] ? " Z" : " z";
      let S2, k2 = x2.move(y2, s2) + x2.line(y2, i2) + x2.line(w2, i2) + A2 + C2;
      "none" !== this.arrBorderRadius[l2][c2] && (k2 = x2.roundPathCorners(k2, d2.config.plotOptions.bar.borderRadius));
      const D2 = null == (u2 = null == (p2 = this.barCtx.ctx) ? void 0 : p2.morphTypeChange) ? void 0 : u2.getInitialPathFor(l2, c2);
      if (S2 = D2 || (d2.globals.previousPaths.length > 0 ? this.barCtx.getPreviousPath(l2, c2, k2) : x2.move(y2, s2) + x2.line(y2, s2) + A2 + A2 + A2 + A2 + A2 + x2.line(y2, s2) + C2), d2.config.chart.stacked) {
        let t3 = this.barCtx;
        t3 = this.barCtx[n2], t3.yArrj.push(i2 - m2 * v2), t3.yArrjF.push(Math.abs(s2 - i2 + a2 * v2)), t3.yArrjVal.push(this.barCtx.series[h2][c2]);
      }
      return { pathTo: k2, pathFrom: S2 };
    }
    getFunnelTrapezoidPaths({ barYPosition: t2, barHeight: e2, series: s2, i: i2, j: a2, realIndex: o2, strokeWidth: r2, w: n2 }) {
      var l2, h2;
      const c2 = new N(this.barCtx.w), d2 = n2.layout.gridWidth / 2, g2 = (t3) => Math.abs(t3 / this.barCtx.invertedYRatio) / 2, p2 = g2(s2[i2][a2]), u2 = a2 === s2[i2].length - 1, x2 = "taper" === n2.config.plotOptions.funnel.lastShape ? "taper" : "flat";
      let f2;
      f2 = u2 ? "taper" === x2 ? 0 : p2 : g2(s2[i2][a2 + 1]);
      const b2 = r2 / 2, m2 = t2 + b2, y2 = t2 + e2 - b2, w2 = d2 - p2, v2 = d2 + p2, A2 = d2 - f2, C2 = d2 + f2, S2 = c2.move(w2, m2) + c2.line(v2, m2) + c2.line(C2, y2) + c2.line(A2, y2) + " Z";
      let k2;
      const D2 = null == (h2 = null == (l2 = this.barCtx.ctx) ? void 0 : l2.morphTypeChange) ? void 0 : h2.getInitialPathFor(o2, a2);
      return k2 = D2 || (n2.globals.previousPaths.length > 0 ? this.barCtx.getPreviousPath(o2, a2, S2) : c2.move(d2, m2) + c2.line(d2, m2) + c2.line(d2, y2) + c2.line(d2, y2) + " Z"), { pathTo: S2, pathFrom: k2, x: v2, x1: w2, barXPosition: d2 };
    }
    computePyramidLayout(t2) {
      const e2 = this.w, s2 = e2.layout.gridHeight, i2 = e2.layout.gridWidth, a2 = t2.map((t3) => Math.abs(Number(t3) || 0)), o2 = a2.reduce((t3, e3) => t3 + e3, 0);
      if (0 === o2 || s2 <= 0) return a2.map(() => ({ y: 0, height: 0, topHalf: 0, bottomHalf: 0 }));
      const r2 = i2 / 2;
      let n2 = 0;
      const l2 = [];
      for (let t3 = 0; t3 < a2.length; t3++) {
        const e3 = n2 / o2;
        n2 += a2[t3];
        const i3 = n2 / o2, h2 = e3 * s2, c2 = i3 * s2;
        l2.push({ y: h2, height: c2 - h2, topHalf: e3 * r2, bottomHalf: i3 * r2 });
      }
      return l2;
    }
    getPyramidPaths({ barYPosition: t2, barHeight: e2, topHalf: s2, bottomHalf: i2, realIndex: a2, j: o2, strokeWidth: r2, w: n2 }) {
      var l2, h2;
      const c2 = new N(this.barCtx.w), d2 = n2.layout.gridWidth / 2, g2 = r2 / 2, p2 = t2 + g2, u2 = t2 + e2 - g2, x2 = d2 - s2, f2 = d2 + s2, b2 = d2 - i2, m2 = d2 + i2, y2 = c2.move(x2, p2) + c2.line(f2, p2) + c2.line(m2, u2) + c2.line(b2, u2) + " Z";
      let w2;
      const v2 = null == (h2 = null == (l2 = this.barCtx.ctx) ? void 0 : l2.morphTypeChange) ? void 0 : h2.getInitialPathFor(a2, o2);
      return w2 = v2 || (n2.globals.previousPaths.length > 0 ? this.barCtx.getPreviousPath(a2, o2, y2) : c2.move(d2, p2) + c2.line(d2, p2) + c2.line(d2, u2) + c2.line(d2, u2) + " Z"), { pathTo: y2, pathFrom: w2, x: f2, x1: x2, barXPosition: d2 };
    }
    getBarpaths({ barYPosition: t2, barHeight: e2, x1: s2, x2: i2, strokeWidth: a2, isReversed: o2, series: r2, seriesGroup: n2, realIndex: l2, i: h2, j: c2, w: d2 }) {
      var g2, p2, u2;
      const x2 = new N(this.barCtx.w);
      (a2 = Array.isArray(a2) ? a2[l2] : a2) || (a2 = 0);
      let f2 = t2, b2 = e2;
      (null == (g2 = d2.config.series[l2].data[c2]) ? void 0 : g2.barHeightOffset) && (f2 = t2 - d2.config.series[l2].data[c2].barHeightOffset / 2, b2 = e2 + d2.config.series[l2].data[c2].barHeightOffset);
      const m2 = a2 / 2, y2 = f2 + m2, w2 = f2 + b2 - m2, v2 = (r2[h2][c2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 + m2 * v2, i2 += 1e-3 - m2 * v2;
      const A2 = this.barCtx.isFunnel, C2 = A2 ? (s2 + i2) / 2 : s2, S2 = x2.line(s2, w2), k2 = "around" === d2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[l2][c2] ? " Z" : " z";
      let D2, L2 = x2.move(s2, y2) + x2.line(i2, y2) + x2.line(i2, w2) + S2 + k2;
      "none" !== this.arrBorderRadius[l2][c2] && (L2 = x2.roundPathCorners(L2, d2.config.plotOptions.bar.borderRadius));
      const M2 = null == (u2 = null == (p2 = this.barCtx.ctx) ? void 0 : p2.morphTypeChange) ? void 0 : u2.getInitialPathFor(l2, c2);
      if (M2) D2 = M2;
      else if (d2.globals.previousPaths.length > 0) D2 = this.barCtx.getPreviousPath(l2, c2, L2);
      else {
        const t3 = A2 ? x2.line(C2, w2) : S2;
        D2 = x2.move(C2, y2) + x2.line(C2, y2) + t3 + t3 + t3 + t3 + t3 + x2.line(C2, y2) + k2;
      }
      if (d2.config.chart.stacked) {
        let t3 = this.barCtx;
        t3 = this.barCtx[n2], t3.xArrj.push(i2 + m2 * v2), t3.xArrjF.push(Math.abs(s2 - i2 - a2 * v2)), t3.xArrjVal.push(this.barCtx.series[h2][c2]);
      }
      return { pathTo: L2, pathFrom: D2 };
    }
    checkZeroSeries({ series: t2 }) {
      const e2 = this.w;
      for (let s2 = 0; s2 < t2.length; s2++) {
        let i2 = 0;
        for (let a2 = 0; a2 < t2[e2.globals.maxValsInArrayIndex].length; a2++) i2 += t2[s2][a2];
        0 === i2 && this.barCtx.zeroSerieses.push(s2);
      }
    }
    getXForValue(t2, e2, s2 = true) {
      let i2 = s2 ? e2 : null;
      return null != t2 && (i2 = e2 + t2 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t2 / this.barCtx.invertedYRatio : 0)), i2;
    }
    getYForValue(t2, e2, s2, i2 = true) {
      let a2 = i2 ? e2 : null;
      return null != t2 && (a2 = e2 - t2 / this.barCtx.yRatio[s2] + 2 * (this.barCtx.isReversed ? t2 / this.barCtx.yRatio[s2] : 0)), a2;
    }
    getGoalValues(t2, e2, s2, i2, a2, o2) {
      const r2 = this.w, h2 = [], c2 = (i3, a3) => {
        h2.push({ [t2]: "x" === t2 ? this.getXForValue(i3, e2, false) : this.getYForValue(i3, s2, o2, false), attrs: a3 });
      };
      if (r2.seriesData.seriesGoals[i2] && r2.seriesData.seriesGoals[i2][a2] && Array.isArray(r2.seriesData.seriesGoals[i2][a2]) && r2.seriesData.seriesGoals[i2][a2].forEach((t3) => {
        c2(t3.value, t3);
      }), this.barCtx.barOptions.isDumbbell && r2.rangeData.seriesRange.length) {
        const e3 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : r2.globals.colors, s3 = { strokeHeight: "x" === t2 ? 0 : r2.globals.markers.size[i2], strokeWidth: "x" === t2 ? r2.globals.markers.size[i2] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(e3[i2]) ? e3[i2][0] : e3[i2] };
        c2(r2.rangeData.seriesRangeStart[i2][a2], s3), c2(r2.rangeData.seriesRangeEnd[i2][a2], l(n({}, s3), { strokeColor: Array.isArray(e3[i2]) ? e3[i2][1] : e3[i2] }));
      }
      return h2;
    }
    drawGoalLine({ barXPosition: t2, barYPosition: e2, goalX: s2, goalY: i2, barWidth: a2, barHeight: o2 }) {
      const r2 = new N(this.barCtx.w), n2 = r2.group({ className: "apexcharts-bar-goals-groups" });
      n2.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: n2.node }), n2.attr("clip-path", `url(#gridRectMarkerMask${this.barCtx.w.globals.cuid})`);
      let l2 = null;
      return this.barCtx.isHorizontal ? Array.isArray(s2) && s2.forEach((t3) => {
        if (t3.x >= -1 && t3.x <= r2.w.layout.gridWidth + 1) {
          const s3 = void 0 !== t3.attrs.strokeHeight ? t3.attrs.strokeHeight : o2 / 2, i3 = e2 + s3 + o2 / 2;
          l2 = r2.drawLine(t3.x, i3 - 2 * s3, t3.x, i3, t3.attrs.strokeColor ? t3.attrs.strokeColor : void 0, t3.attrs.strokeDashArray, t3.attrs.strokeWidth ? t3.attrs.strokeWidth : 2, t3.attrs.strokeLineCap), n2.add(l2);
        }
      }) : Array.isArray(i2) && i2.forEach((e3) => {
        if (e3.y >= -1 && e3.y <= r2.w.layout.gridHeight + 1) {
          const s3 = void 0 !== e3.attrs.strokeWidth ? e3.attrs.strokeWidth : a2 / 2, i3 = t2 + s3 + a2 / 2;
          l2 = r2.drawLine(i3 - 2 * s3, e3.y, i3, e3.y, e3.attrs.strokeColor ? e3.attrs.strokeColor : void 0, e3.attrs.strokeDashArray, e3.attrs.strokeHeight ? e3.attrs.strokeHeight : 2, e3.attrs.strokeLineCap), n2.add(l2);
        }
      }), n2;
    }
    drawBarShadow({ prevPaths: t2, currPaths: e2, color: s2, realIndex: i2, j: a2 }) {
      const o2 = this.w, { x: r2, x1: n2, barYPosition: l2 } = t2, { x: h2, x1: c2, barYPosition: d2 } = e2, g2 = l2 + e2.barHeight, p2 = new N(this.barCtx.w), u2 = new m(), x2 = p2.move(n2, g2) + p2.line(r2, g2) + p2.line(h2, d2) + p2.line(c2, d2) + p2.line(n2, g2) + ("around" === o2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[i2][a2] ? " Z" : " z");
      return p2.drawPath({ d: x2, fill: u2.shadeColor(0.5, m.rgb2hex(s2)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadow apexcharts-decoration-element" });
    }
    getZeroValueEncounters({ i: t2, j: e2 }) {
      var s2;
      const i2 = this.w;
      let a2 = 0, o2 = 0;
      return (i2.config.plotOptions.bar.horizontal ? i2.seriesData.series.map((t3, e3) => e3) : (null == (s2 = i2.globals.columnSeries) ? void 0 : s2.i.map((t3) => t3)) || []).forEach((s3) => {
        const r2 = i2.globals.seriesPercent[s3][e2];
        r2 && a2++, s3 < t2 && 0 === r2 && o2++;
      }), { nonZeroColumns: a2, zeroEncounters: o2 };
    }
    getGroupIndex(t2) {
      const e2 = this.w, s2 = e2.labelData.seriesGroups.findIndex((s3) => s3.indexOf(e2.seriesData.seriesNames[t2]) > -1), i2 = this.barCtx.columnGroupIndices;
      let a2 = i2.indexOf(s2);
      return a2 < 0 && (i2.push(s2), a2 = i2.length - 1), { groupIndex: s2, columnGroupIndex: a2 };
    }
  };
  class Xe {
    constructor(t2, e2, s2) {
      this.ctx = e2, this.w = t2, this.barOptions = t2.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = t2.config.stroke.width, this.isNullValue = false, this.isRangeBar = t2.rangeData.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !t2.globals.isBarHorizontal && t2.rangeData.seriesRange.length && t2.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.isPyramid = this.barOptions.isPyramid, this.pyramidLayout = null, this.xyRatios = s2, this.xRatio = 0, this.yRatio = [], this.invertedXRatio = 0, this.invertedYRatio = 0, this.baseLineY = [], this.baseLineInvertedY = 0, null !== this.xyRatios && (this.xRatio = s2.xRatio, this.yRatio = s2.yRatio, this.invertedXRatio = s2.invertedXRatio, this.invertedYRatio = s2.invertedYRatio, this.baseLineY = s2.baseLineY, this.baseLineInvertedY = s2.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [], this.series = [], this.elSeries = null, this.visibleI = 0, this.isReversed = false;
      const i2 = new lt(this.w);
      this.lastActiveBarSerieIndex = i2.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
      const a2 = i2.getBarSeriesIndices(), o2 = new F(this.w);
      this.stackedSeriesTotals = o2.getStackedSeriesTotals(this.w.config.series.map((t3, e3) => -1 === a2.indexOf(e3) ? e3 : -1).filter((t3) => -1 !== t3)), this.barHelpers = new Ie(this);
    }
    draw(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = new N(this.w), r2 = new F(this.w);
      t2 = r2.getLogSeries(t2), this.series = t2, this.yRatio = r2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2);
      const h2 = o2.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      a2.config.dataLabels.enabled && (this.totalItems, this.barOptions.dataLabels.maxItems);
      for (let r3 = 0, c2 = 0; r3 < t2.length; r3++, c2++) {
        let d2, g2;
        const p2 = [], u2 = [], x2 = a2.globals.comboCharts ? e2[r3] : r3, { columnGroupIndex: f2 } = this.barHelpers.getGroupIndex(x2), b2 = o2.group({ class: "apexcharts-series", rel: r3 + 1, seriesName: m.escapeString(a2.seriesData.seriesNames[x2]), "data:realIndex": x2 });
        lt.addCollapsedClassToSeries(this.w, b2, x2), t2[r3].length > 0 && (this.visibleI = this.visibleI + 1), this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[x2], this.translationsIndex = x2);
        const y2 = this.translationsIndex;
        this.isReversed = a2.config.yaxis[this.yaxisIndex] && a2.config.yaxis[this.yaxisIndex].reversed, this.isPyramid && (this.pyramidLayout = this.barHelpers.computePyramidLayout(t2[r3]));
        const w2 = this.barHelpers.initialPositions(x2), { y: v2, yDivision: A2, zeroW: C2, x: S2, xDivision: k2, zeroH: D2 } = w2;
        let L2 = w2.barHeight, M2 = w2.barWidth;
        g2 = v2, d2 = S2, this.isHorizontal || u2.push(d2 + (null != M2 ? M2 : 0) / 2);
        const P2 = o2.group({ class: "apexcharts-datalabels", "data:realIndex": x2 });
        a2.globals.delayedElements.push({ el: P2.node }), P2.node.classList.add("apexcharts-element-hidden");
        const T2 = o2.group({ class: "apexcharts-bar-goals-markers" }), F2 = o2.group({ class: "apexcharts-bar-shadows" });
        a2.globals.delayedElements.push({ el: F2.node }), F2.node.classList.add("apexcharts-element-hidden");
        for (let e3 = 0; e3 < t2[r3].length; e3++) {
          const o3 = this.barHelpers.getStrokeWidth(r3, e3, x2);
          let h3 = null;
          const w3 = { indexes: { i: r3, j: e3, realIndex: x2, translationsIndex: y2, bc: c2 }, x: d2, y: g2, strokeWidth: o3, elSeries: b2 };
          this.isHorizontal ? (h3 = this.drawBarPaths(l(n({}, w3), { barHeight: L2, zeroW: C2, yDivision: A2 })), M2 = this.series[r3][e3] / this.invertedYRatio) : (h3 = this.drawColumnPaths(l(n({}, w3), { xDivision: k2, barWidth: M2, zeroH: D2 })), L2 = this.series[r3][e3] / this.yRatio[y2]);
          const v3 = this.barHelpers.getPathFillColor(t2, r3, e3, x2);
          if (this.isFunnel && !this.isPyramid && this.barOptions.isFunnel3d && "trapezoid" !== (null == (s2 = a2.config.plotOptions.funnel) ? void 0 : s2.shape) && this.pathArr.length && e3 > 0) {
            const t3 = this.barHelpers.drawBarShadow({ color: "string" == typeof v3.color && -1 === (null == (i2 = v3.color) ? void 0 : i2.indexOf("url")) ? v3.color : m.hexToRgba(a2.globals.colors[r3]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: h3, realIndex: x2, j: e3 });
            if (F2.add(t3), a2.config.chart.dropShadow.enabled) {
              new H(this.w).dropShadow(t3, a2.config.chart.dropShadow, x2);
            }
          }
          this.pathArr.push(h3);
          const S3 = this.barHelpers.drawGoalLine({ barXPosition: h3.barXPosition, barYPosition: h3.barYPosition, goalX: h3.goalX, goalY: h3.goalY, barHeight: L2, barWidth: M2 });
          S3 && T2.add(S3), g2 = h3.y, d2 = h3.x, e3 > 0 && u2.push(d2 + (null != M2 ? M2 : 0) / 2), p2.push(g2), this.renderSeries(l(n({ realIndex: x2, pathFill: v3.color }, v3.useRangeColor ? { lineFill: v3.color } : {}), { j: e3, i: r3, columnGroupIndex: f2, pathFrom: h3.pathFrom, pathTo: h3.pathTo, strokeWidth: o3, elSeries: b2, x: d2, y: g2, series: t2, barHeight: Math.abs(h3.barHeight ? h3.barHeight : L2), barWidth: Math.abs(h3.barWidth ? h3.barWidth : M2), elDataLabelsWrap: P2, elGoalsMarkers: T2, elBarShadows: F2, visibleSeries: this.visibleI, type: "bar" }));
        }
        a2.globals.seriesXvalues[x2] = u2, a2.globals.seriesYvalues[x2] = p2, h2.add(b2);
      }
      return h2;
    }
    renderSeries({ realIndex: t2, pathFill: e2, lineFill: s2, j: i2, i: a2, columnGroupIndex: o2, pathFrom: r2, pathTo: n2, strokeWidth: l2, elSeries: h2, x: c2, y: d2, y1: g2, y2: p2, series: u2, barHeight: x2, barWidth: f2, barXPosition: b2, barYPosition: m2, elDataLabelsWrap: y2, elGoalsMarkers: w2, elBarShadows: v2, visibleSeries: A2, type: C2, classes: S2 }) {
      var k2;
      const D2 = this.w, L2 = new N(this.w, this.ctx);
      let M2 = false;
      if (h2._bindingsDelegated || (h2._bindingsDelegated = true, L2.setupEventDelegation(h2, `.apexcharts-${C2}-area`)), !s2) {
        let e3 = function(t3) {
          const e4 = D2.config.stroke.colors;
          let s3;
          return Array.isArray(e4) && e4.length > 0 && (s3 = e4[t3], s3 || (s3 = ""), "function" == typeof s3) ? s3({ value: D2.seriesData.series[t3][i2], dataPointIndex: i2, w: D2 }) : s3;
        };
        const a3 = "function" == typeof D2.globals.stroke.colors[t2] ? e3(t2) : D2.globals.stroke.colors[t2];
        s2 = this.barOptions.distributed ? D2.globals.stroke.colors[i2] : a3;
      }
      const P2 = new Ee(this).handleBarDataLabels({ x: c2, y: d2, y1: g2, y2: p2, i: a2, j: i2, series: u2, realIndex: t2, columnGroupIndex: o2, barHeight: x2, barWidth: f2, barXPosition: b2, barYPosition: m2, visibleSeries: A2 });
      D2.globals.isBarHorizontal || (P2.dataLabelsPos.dataLabelsX + Math.max(f2, D2.globals.barPadForNumericAxis) < 0 || P2.dataLabelsPos.dataLabelsX - Math.max(f2, D2.globals.barPadForNumericAxis) > D2.layout.gridWidth) && (M2 = true), D2.config.series[a2].data[i2] && D2.config.series[a2].data[i2].strokeColor && (s2 = D2.config.series[a2].data[i2].strokeColor), this.isNullValue && (e2 = "none");
      const T2 = D2.config.chart.animations, F2 = T2.animateGradually;
      let E2 = 0;
      if (F2 && false !== F2.enabled) {
        const t3 = D2.globals.dataPoints || 1, e3 = F2.delay || 0, s3 = Math.min(e3, 0.5 * T2.speed / Math.max(1, t3));
        let o3 = Y({ style: "sequential", index: i2, baseDelay: s3 });
        D2.config.chart.stacked && (o3 += a2 * s3 * 0.5);
        E2 = o3 / (e3 || 1);
      }
      if (!M2) {
        const o3 = true === (null == (k2 = this.ctx.morphTypeChange) ? void 0 : k2.isActive()) ? this.ctx.morphTypeChange.getSpeed() : D2.config.chart.animations.dynamicAnimation.speed, c3 = L2.renderPaths({ i: a2, j: i2, realIndex: t2, pathFrom: r2, pathTo: n2, stroke: s2, strokeWidth: l2, strokeLineCap: D2.config.stroke.lineCap, fill: e2, animationDelay: E2, initialSpeed: D2.config.chart.animations.speed, dataChangeSpeed: o3, className: `apexcharts-${C2}-area ${S2}`, chartType: C2, bindEventsOnPaths: false });
        c3.attr("clip-path", `url(#gridRectBarMask${D2.globals.cuid})`);
        const d3 = D2.config.forecastDataPoints;
        d3.count > 0 && i2 >= D2.globals.dataPoints - d3.count && (c3.node.setAttribute("stroke-dasharray", d3.dashArray), c3.node.setAttribute("stroke-width", d3.strokeWidth), c3.node.setAttribute("fill-opacity", d3.fillOpacity)), void 0 !== g2 && void 0 !== p2 && (c3.attr("data-range-y1", g2), c3.attr("data-range-y2", p2));
        new H(this.w).setSelectionFilter(c3, t2, i2), h2.add(c3), c3.attr({ cy: P2.dataLabelsPos.bcy, cx: P2.dataLabelsPos.bcx, j: i2, val: D2.seriesData.series[a2][i2], barHeight: x2, barWidth: f2 }), null !== P2.dataLabels && y2.add(P2.dataLabels), P2.totalDataLabels && y2.add(P2.totalDataLabels), h2.add(y2), w2 && h2.add(w2), v2 && h2.add(v2);
      }
      return h2;
    }
    drawBarPaths({ indexes: t2, barHeight: e2, strokeWidth: s2, zeroW: i2, x: a2, y: o2, yDivision: r2, elSeries: n2 }) {
      const l2 = this.w, h2 = t2.i, c2 = t2.j;
      let d2;
      if (l2.axisFlags.isXNumeric) d2 = (o2 = (l2.seriesData.seriesX[h2][c2] - l2.globals.minX) / this.invertedXRatio - e2) + e2 * this.visibleI;
      else if (l2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        const { nonZeroColumns: t3, zeroEncounters: s3 } = this.barHelpers.getZeroValueEncounters({ i: h2, j: c2 });
        t3 > 0 && (e2 = this.seriesLen * e2 / t3), d2 = o2 + e2 * this.visibleI, d2 -= e2 * s3;
      } else d2 = o2 + e2 * this.visibleI;
      const g2 = this.isFunnel && "trapezoid" === l2.config.plotOptions.funnel.shape, p2 = this.isPyramid && this.pyramidLayout ? this.pyramidLayout[c2] : null, u2 = !!p2;
      if (p2) d2 = p2.y, e2 = p2.height;
      else if (this.isFunnel && !g2) {
        const t3 = null != i2 ? i2 : 0;
        i2 = t3 - (this.barHelpers.getXForValue(this.series[h2][c2], t3) - t3) / 2;
      }
      let x2;
      return a2 = this.barHelpers.getXForValue(this.series[h2][c2], null != i2 ? i2 : 0), x2 = p2 ? this.barHelpers.getPyramidPaths({ barYPosition: d2, barHeight: e2, topHalf: p2.topHalf, bottomHalf: p2.bottomHalf, realIndex: t2.realIndex, j: c2, strokeWidth: s2, w: l2 }) : g2 ? this.barHelpers.getFunnelTrapezoidPaths({ barYPosition: d2, barHeight: e2, series: this.series, i: h2, j: c2, realIndex: t2.realIndex, strokeWidth: s2, w: l2 }) : this.barHelpers.getBarpaths({ barYPosition: d2, barHeight: e2, x1: i2, x2: a2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: t2.realIndex, i: h2, j: c2, w: l2 }), (g2 || u2) && (i2 = x2.x1, a2 = x2.x), l2.axisFlags.isXNumeric || u2 || (o2 += r2), u2 && (o2 = d2), this.barHelpers.barBackground({ j: c2, i: h2, y1: d2 - e2 * this.visibleI, y2: e2 * this.seriesLen, elSeries: n2 }), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, x1: i2, x: a2, y: o2, goalX: this.barHelpers.getGoalValues("x", i2, null, h2, c2, 0), barYPosition: d2, barHeight: e2 };
    }
    drawColumnPaths({ indexes: t2, x: e2, y: s2, xDivision: i2, barWidth: a2, zeroH: o2, strokeWidth: r2, elSeries: n2 }) {
      const l2 = this.w, h2 = t2.realIndex, c2 = t2.translationsIndex, d2 = t2.i, g2 = t2.j, p2 = t2.bc;
      let u2;
      if (l2.axisFlags.isXNumeric) {
        const t3 = this.getBarXForNumericXAxis({ x: e2, j: g2, realIndex: h2, barWidth: a2 });
        e2 = t3.x, u2 = t3.barXPosition;
      } else if (l2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        const { nonZeroColumns: t3, zeroEncounters: s3 } = this.barHelpers.getZeroValueEncounters({ i: d2, j: g2 });
        t3 > 0 && (a2 = this.seriesLen * a2 / t3), u2 = e2 + a2 * this.visibleI, u2 -= a2 * s3;
      } else u2 = e2 + a2 * this.visibleI;
      s2 = this.barHelpers.getYForValue(this.series[d2][g2], o2, c2);
      const x2 = this.barHelpers.getColumnPaths({ barXPosition: u2, barWidth: a2, y1: o2, y2: s2, strokeWidth: r2, isReversed: this.isReversed, series: this.series, realIndex: h2, i: d2, j: g2, w: l2 });
      return l2.axisFlags.isXNumeric || (e2 += i2), this.barHelpers.barBackground({ bc: p2, j: g2, i: d2, x1: u2 - r2 / 2 - a2 * this.visibleI, x2: a2 * this.seriesLen + r2 / 2, elSeries: n2 }), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, x: e2, y: s2, goalY: this.barHelpers.getGoalValues("y", null, o2, d2, g2, c2), barXPosition: u2, barWidth: a2 };
    }
    getBarXForNumericXAxis({ x: t2, barWidth: e2, realIndex: s2, j: i2 }) {
      const a2 = this.w;
      let o2 = s2;
      return a2.seriesData.seriesX[s2].length || (o2 = a2.globals.maxValsInArrayIndex), m.isNumber(a2.seriesData.seriesX[o2][i2]) && (t2 = (a2.seriesData.seriesX[o2][i2] - a2.globals.minX) / this.xRatio - e2 * this.seriesLen / 2), { barXPosition: t2 + e2 * this.visibleI, x: t2 };
    }
    getPreviousPath(t2, e2, s2) {
      const i2 = this.w;
      let a2 = null;
      for (let s3 = 0; s3 < i2.globals.previousPaths.length; s3++) {
        const o2 = i2.globals.previousPaths[s3];
        o2.paths && o2.paths.length > 0 && parseInt(o2.realIndex, 10) === parseInt(String(t2), 10) && void 0 !== o2.paths[e2] && (a2 = o2.paths[e2].d);
      }
      return a2 && Xe.pathCommandCount(a2) === Xe.pathCommandCount(s2) ? a2 : s2;
    }
    static pathCommandCount(t2) {
      if (!t2) return 0;
      const e2 = t2.match(/[A-Za-z]/g);
      return e2 ? e2.length : 0;
    }
  }
  function Re({ w: t2, points: e2, seedA: s2, seedB: i2, center: a2, halfExtent: o2, alongFn: r2, isHorizontal: n2, options: l2, clampAt: h2 }) {
    const c2 = l2;
    if (!c2 || false === c2.show) return [];
    if (!e2 || !e2.length) return [];
    const d2 = c2.maxPoints || 3e3, g2 = e2.length > d2 ? Math.ceil(e2.length / d2) : 1, p2 = null != c2.size ? c2.size : 2.5, u2 = o2 * (null != c2.jitter ? c2.jitter : 0.5), x2 = false !== c2.constrainToViolin && "function" == typeof h2, f2 = "square" === c2.shape, b2 = c2.colorScale, m2 = b2 && Array.isArray(b2.colors) && b2.colors.length > 0, y2 = m2 ? Math.max(2, b2.steps || 24) : 1, w2 = m2 && null != b2.min ? b2.min : t2.globals.minY, v2 = (m2 && null != b2.max ? b2.max : t2.globals.maxY) - w2 || 1, A2 = m2 ? new Array(y2).fill("") : [""];
    for (let t3 = 0; t3 < e2.length; t3 += g2) {
      const o3 = e2[t3], l3 = r2(o3);
      let c3 = 2 * (He(7919 * s2 + 100003 * i2 + t3) - 0.5) * u2;
      if (x2) {
        const t4 = h2(o3);
        c3 > t4 && (c3 = t4), c3 < -t4 && (c3 = -t4);
      }
      const d3 = n2 ? l3 : a2 + c3, g3 = n2 ? a2 + c3 : l3, b3 = f2 ? We(d3, g3, p2) : Ne(d3, g3, p2);
      if (m2) {
        let t4 = (o3 - w2) / v2;
        t4 < 0 && (t4 = 0), t4 > 1 && (t4 = 1), A2[Math.round(t4 * (y2 - 1))] += b3;
      } else A2[0] += b3;
    }
    if (!m2) return A2[0] ? [{ fill: null, d: A2[0] }] : [];
    const C2 = [];
    for (let t3 = 0; t3 < y2; t3++) A2[t3] && C2.push({ fill: Be(b2.colors, t3 / (y2 - 1)), d: A2[t3] });
    return C2;
  }
  function ze({ graphics: t2, w: e2, elSeries: s2, pointsByCat: i2, options: a2, distributed: o2, realIndex: r2, wrapClass: n2, pointClass: l2 }) {
    if (!a2 || false === a2.show || !i2.length) return;
    const h2 = null != a2.opacity ? a2.opacity : 0.9, c2 = null != a2.strokeColor ? a2.strokeColor : "#fff", d2 = null != a2.strokeWidth ? a2.strokeWidth : 1, g2 = e2.config.chart.animations.enabled && !e2.globals.resized && !e2.globals.dataChanged, p2 = t2.group({ class: g2 ? `${n2} apexcharts-element-hidden` : n2 });
    g2 && e2.globals.delayedElements.push({ el: p2.node }), i2.forEach(({ groups: s3, j: i3 }) => {
      const n3 = o2 ? e2.globals.colors[i3] : e2.globals.colors[r2], g3 = a2.fillColor, u2 = "series" === g3 ? n3 : "series-dark" === g3 ? Ye(n3, 0.45) : g3 || Ye(n3, 0.45);
      s3.forEach((s4) => {
        const a3 = t2.drawPath({ d: s4.d, fill: null != s4.fill ? s4.fill : u2, stroke: d2 > 0 ? c2 : "none", strokeWidth: d2, fillOpacity: h2, classes: l2 });
        a3.attr("data:realIndex", r2), a3.attr("j", i3), a3.attr("clip-path", `url(#gridRectBarMask${e2.globals.cuid})`), a3.node.style.pointerEvents = "none", p2.add(a3);
      });
    }), s2.add(p2);
  }
  function Ye(t2, e2) {
    const s2 = m.parseHex(t2);
    if (!s2) return t2;
    const i2 = Math.max(0, 1 - e2);
    return `rgb(${Math.round(s2[0] * i2)},${Math.round(s2[1] * i2)},${Math.round(s2[2] * i2)})`;
  }
  function Be(t2, e2) {
    if (!t2.length) return "#000";
    if (1 === t2.length) return t2[0];
    const s2 = Math.max(0, Math.min(1, e2)) * (t2.length - 1), i2 = Math.floor(s2), a2 = s2 - i2, o2 = m.parseHex(t2[i2]) || [0, 0, 0], r2 = m.parseHex(t2[Math.min(i2 + 1, t2.length - 1)]) || o2, n2 = (t3, e3) => Math.round(t3 + (e3 - t3) * a2);
    return `rgb(${n2(o2[0], r2[0])},${n2(o2[1], r2[1])},${n2(o2[2], r2[2])})`;
  }
  function He(t2) {
    let e2 = (2654435769 ^ t2) >>> 0;
    return e2 = Math.imul(e2 ^ e2 >>> 16, 73244475), e2 = Math.imul(e2 ^ e2 >>> 16, 73244475), ((e2 ^ e2 >>> 16) >>> 0) / 4294967296;
  }
  function Ne(t2, e2, s2) {
    return `M ${t2 - s2} ${e2} a ${s2} ${s2} 0 1 0 ${2 * s2} 0 a ${s2} ${s2} 0 1 0 ${-2 * s2} 0 `;
  }
  function We(t2, e2, s2) {
    return `M ${t2 - s2} ${e2 - s2} h ${2 * s2} v ${2 * s2} h ${-2 * s2} z `;
  }
  class Oe extends Xe {
    draw(t2, e2, s2) {
      var i2;
      const a2 = this.w, o2 = new N(this.w), r2 = a2.globals.comboCharts ? e2 : a2.config.chart.type, h2 = new G(this.w);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = a2.config.plotOptions.bar.horizontal, this.isOHLC = this.candlestickOptions && "ohlc" === this.candlestickOptions.type, this.coreUtils = new F(this.w), t2 = this.coreUtils.getLogSeries(t2), this.series = t2, this.yRatio = this.coreUtils.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2);
      const c2 = o2.group({ class: `apexcharts-${r2}-series apexcharts-plot-series` });
      for (let e3 = 0; e3 < t2.length; e3++) {
        let r3, d2;
        this.isBoxPlot = "boxPlot" === a2.config.chart.type || "boxPlot" === a2.config.series[e3].type;
        const g2 = [], p2 = [], u2 = a2.globals.comboCharts ? s2[e3] : e3, { columnGroupIndex: x2 } = this.barHelpers.getGroupIndex(u2), f2 = o2.group({ class: "apexcharts-series", seriesName: m.escapeString(a2.seriesData.seriesNames[u2]), rel: e3 + 1, "data:realIndex": u2 });
        lt.addCollapsedClassToSeries(this.w, f2, u2), t2[e3].length > 0 && (this.visibleI = this.visibleI + 1);
        let b2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[u2][0], b2 = u2);
        const y2 = this.barHelpers.initialPositions(u2), { y: w2, barHeight: v2, yDivision: A2, zeroW: C2, x: S2, barWidth: k2, xDivision: D2, zeroH: L2 } = y2;
        d2 = w2, r3 = S2, p2.push(r3 + (null != k2 ? k2 : 0) / 2);
        const M2 = o2.group({ class: "apexcharts-datalabels", "data:realIndex": u2 }), P2 = o2.group({ class: "apexcharts-bar-goals-markers" }), T2 = this.isBoxPlot ? this.boxOptions.points : null, F2 = [], E2 = a2.layout.gridWidth, I2 = null != k2 ? k2 : 0;
        for (let s3 = 0; s3 < a2.globals.dataPoints; s3++) {
          const o3 = this.barHelpers.getStrokeWidth(e3, s3, u2);
          let c3 = null;
          const m2 = { indexes: { i: e3, j: s3, realIndex: u2, translationsIndex: b2 }, x: r3, y: d2, strokeWidth: o3, elSeries: f2 };
          if (c3 = this.isHorizontal ? this.drawHorizontalBoxPaths(l(n({}, m2), { yDivision: A2, barHeight: v2, zeroW: C2 })) : this.drawVerticalBoxPaths(l(n({}, m2), { xDivision: D2, barWidth: k2, zeroH: L2, cullBounds: { lo: -I2, hi: E2 + I2 } })), d2 = c3.y, r3 = c3.x, s3 > 0 && p2.push(r3 + (null != k2 ? k2 : 0) / 2), g2.push(d2), c3.culled) continue;
          const y3 = this.barHelpers.drawGoalLine({ barXPosition: c3.barXPosition, barYPosition: c3.barYPosition, goalX: c3.goalX, goalY: c3.goalY, barHeight: v2, barWidth: k2 });
          if (y3 && P2.add(y3), c3.pathTo.forEach((i3, n2) => {
            const l2 = !this.isBoxPlot && this.candlestickOptions.wick.useFillColor ? c3.color[n2] : a2.globals.stroke.colors[e3], g3 = h2.fillPath({ seriesNumber: u2, dataPointIndex: s3, color: c3.color[n2], value: t2[e3][s3] });
            this.renderSeries({ realIndex: u2, pathFill: g3, lineFill: l2, j: s3, i: e3, pathFrom: c3.pathFrom, pathTo: i3, strokeWidth: o3, elSeries: f2, x: r3, y: d2, series: t2, columnGroupIndex: x2, barHeight: v2, barWidth: k2, elDataLabelsWrap: M2, elGoalsMarkers: P2, visibleSeries: this.visibleI, type: a2.config.chart.type });
          }), T2 && false !== T2.show) {
            const t3 = null == (i2 = a2.candleData.seriesBoxPoints[u2]) ? void 0 : i2[s3];
            if (t3 && t3.length) {
              const e4 = (t4) => this.coreUtils.getLogValAtSeriesIndex(t4, u2);
              let i3, o4, r4;
              if (this.isHorizontal) {
                const t4 = this.invertedYRatio, s4 = null != v2 ? v2 : 0, a3 = null != C2 ? C2 : 0;
                i3 = c3.barYPosition + s4 / 2, o4 = s4 / 2, r4 = (s5) => a3 + e4(s5) / t4;
              } else {
                const t4 = this.yRatio[b2], s4 = null != k2 ? k2 : 0, a3 = null != L2 ? L2 : 0;
                i3 = c3.barXPosition + s4 / 2, o4 = s4 / 2, r4 = (s5) => a3 - e4(s5) / t4;
              }
              const n2 = Re({ w: a2, points: t3, seedA: u2, seedB: s3, center: i3, halfExtent: o4, alongFn: r4, isHorizontal: this.isHorizontal, options: T2 });
              n2.length && F2.push({ groups: n2, j: s3 });
            }
          }
        }
        T2 && ze({ graphics: o2, w: a2, elSeries: f2, pointsByCat: F2, options: T2, distributed: a2.config.plotOptions.bar.distributed, realIndex: u2, wrapClass: "apexcharts-boxPlot-points-wrap", pointClass: "apexcharts-boxPlot-points" }), a2.globals.seriesXvalues[u2] = p2, a2.globals.seriesYvalues[u2] = g2, c2.add(f2);
      }
      return c2;
    }
    drawVerticalBoxPaths({ indexes: t2, x: e2, xDivision: s2, barWidth: i2, zeroH: a2, strokeWidth: o2, cullBounds: r2 = null }) {
      var n2, l2;
      const h2 = this.w, c2 = new N(this.w), d2 = t2.i, g2 = t2.j, { colors: p2 } = h2.config.plotOptions.candlestick, { colors: u2 } = this.boxOptions, x2 = t2.realIndex, f2 = (t3) => Array.isArray(t3) ? t3[x2] : t3, b2 = f2(p2.upward), m2 = f2(p2.downward), y2 = this.yRatio[t2.translationsIndex], w2 = this.getOHLCValue(x2, g2);
      let v2 = a2, A2 = a2, C2 = w2.o < w2.c ? [b2] : [m2];
      this.isBoxPlot && (C2 = [f2(u2.lower), f2(u2.upper)]);
      let S2 = Math.min(w2.o, w2.c), k2 = Math.max(w2.o, w2.c), D2 = w2.m;
      h2.axisFlags.isXNumeric && (e2 = (h2.seriesData.seriesX[x2][g2] - h2.globals.minX) / this.xRatio - i2 / 2);
      const L2 = e2 + i2 * this.visibleI;
      if (void 0 === (null == (n2 = this.series[d2]) ? void 0 : n2[g2]) || null === (null == (l2 = this.series[d2]) ? void 0 : l2[g2]) ? (S2 = a2, k2 = a2) : (S2 = a2 - S2 / y2, k2 = a2 - k2 / y2, v2 = a2 - w2.h / y2, A2 = a2 - w2.l / y2, D2 = a2 - w2.m / y2), r2 && (L2 + i2 < r2.lo || L2 > r2.hi)) return { pathTo: null, pathFrom: null, x: h2.axisFlags.isXNumeric ? e2 : e2 + s2, y: k2, barXPosition: L2, color: C2, culled: true };
      let M2, P2;
      if (this.isOHLC) {
        const t3 = L2 + i2 / 2, e3 = a2 - w2.o / y2, s3 = a2 - w2.c / y2;
        M2 = [c2.move(t3, v2) + c2.line(t3, A2) + c2.move(t3, e3) + c2.line(L2, e3) + c2.move(t3, s3) + c2.line(L2 + i2, s3)];
      } else M2 = this.isBoxPlot ? [c2.move(L2, S2) + c2.line(L2 + i2 / 2, S2) + c2.line(L2 + i2 / 2, v2) + c2.line(L2 + i2 / 4, v2) + c2.line(L2 + i2 - i2 / 4, v2) + c2.line(L2 + i2 / 2, v2) + c2.line(L2 + i2 / 2, S2) + c2.line(L2 + i2, S2) + c2.line(L2 + i2, D2) + c2.line(L2, D2) + c2.line(L2, S2 + o2 / 2), c2.move(L2, D2) + c2.line(L2 + i2, D2) + c2.line(L2 + i2, k2) + c2.line(L2 + i2 / 2, k2) + c2.line(L2 + i2 / 2, A2) + c2.line(L2 + i2 - i2 / 4, A2) + c2.line(L2 + i2 / 4, A2) + c2.line(L2 + i2 / 2, A2) + c2.line(L2 + i2 / 2, k2) + c2.line(L2, k2) + c2.line(L2, D2) + "z"] : [c2.move(L2, k2) + c2.line(L2 + i2 / 2, k2) + c2.line(L2 + i2 / 2, v2) + c2.line(L2 + i2 / 2, k2) + c2.line(L2 + i2, k2) + c2.line(L2 + i2, S2) + c2.line(L2 + i2 / 2, S2) + c2.line(L2 + i2 / 2, A2) + c2.line(L2 + i2 / 2, S2) + c2.line(L2, S2) + c2.line(L2, k2 - o2 / 2)];
      return P2 = h2.globals.previousPaths.length > 0 ? this.getPreviousPath(x2, g2, M2[0]) : c2.move(L2 + i2 / 2, S2) + c2.move(L2, S2), h2.axisFlags.isXNumeric || (e2 += s2), { pathTo: M2, pathFrom: P2, x: e2, y: k2, goalY: this.barHelpers.getGoalValues("y", null, a2, d2, g2, t2.translationsIndex), barXPosition: L2, color: C2 };
    }
    drawHorizontalBoxPaths({ indexes: t2, y: e2, yDivision: s2, barHeight: i2, zeroW: a2, strokeWidth: o2 }) {
      var r2, n2;
      const l2 = this.w, h2 = new N(this.w), c2 = t2.i, d2 = t2.j, g2 = t2.realIndex, { colors: p2 } = l2.config.plotOptions.candlestick, { colors: u2 } = this.boxOptions, x2 = (t3) => Array.isArray(t3) ? t3[g2] : t3, f2 = this.invertedYRatio, b2 = this.getOHLCValue(g2, d2);
      let m2 = b2.o < b2.c ? [x2(p2.upward)] : [x2(p2.downward)];
      this.isBoxPlot && (m2 = [x2(u2.lower), x2(u2.upper)]);
      let y2 = a2, w2 = a2, v2 = Math.min(b2.o, b2.c), A2 = Math.max(b2.o, b2.c), C2 = b2.m;
      l2.axisFlags.isXNumeric && (e2 = (l2.seriesData.seriesX[g2][d2] - l2.globals.minX) / this.invertedXRatio - i2 / 2);
      const S2 = e2 + i2 * this.visibleI;
      void 0 === (null == (r2 = this.series[c2]) ? void 0 : r2[d2]) || null === (null == (n2 = this.series[c2]) ? void 0 : n2[d2]) ? (v2 = a2, A2 = a2) : (v2 = a2 + v2 / f2, A2 = a2 + A2 / f2, y2 = a2 + b2.h / f2, w2 = a2 + b2.l / f2, C2 = a2 + b2.m / f2);
      const k2 = [h2.move(v2, S2) + h2.line(v2, S2 + i2 / 2) + h2.line(y2, S2 + i2 / 2) + h2.line(y2, S2 + i2 / 2 - i2 / 4) + h2.line(y2, S2 + i2 / 2 + i2 / 4) + h2.line(y2, S2 + i2 / 2) + h2.line(v2, S2 + i2 / 2) + h2.line(v2, S2 + i2) + h2.line(C2, S2 + i2) + h2.line(C2, S2) + h2.line(v2 + o2 / 2, S2), h2.move(C2, S2) + h2.line(C2, S2 + i2) + h2.line(A2, S2 + i2) + h2.line(A2, S2 + i2 / 2) + h2.line(w2, S2 + i2 / 2) + h2.line(w2, S2 + i2 - i2 / 4) + h2.line(w2, S2 + i2 / 4) + h2.line(w2, S2 + i2 / 2) + h2.line(A2, S2 + i2 / 2) + h2.line(A2, S2) + h2.line(C2, S2) + "z"];
      let D2;
      return D2 = l2.globals.previousPaths.length > 0 ? this.getPreviousPath(g2, d2, k2[0]) : h2.move(v2, S2 + i2 / 2) + h2.move(v2, S2), l2.axisFlags.isXNumeric || (e2 += s2), { pathTo: k2, pathFrom: D2, x: A2, y: e2, goalX: this.barHelpers.getGoalValues("x", a2, null, c2, d2, 0), barYPosition: S2, color: m2 };
    }
    getOHLCValue(t2, e2) {
      const s2 = this.w, i2 = this.coreUtils, a2 = (s3) => s3[t2] && null != s3[t2][e2] ? i2.getLogValAtSeriesIndex(s3[t2][e2], t2) : 0, o2 = a2(s2.candleData.seriesCandleH), r2 = a2(s2.candleData.seriesCandleO), n2 = a2(s2.candleData.seriesCandleM), l2 = a2(s2.candleData.seriesCandleC), h2 = a2(s2.candleData.seriesCandleL);
      return { o: this.isBoxPlot ? o2 : r2, h: this.isBoxPlot ? r2 : o2, m: n2, l: this.isBoxPlot ? l2 : h2, c: this.isBoxPlot ? h2 : l2 };
    }
  }
  const _e = (t2) => {
    const e2 = (function(t3) {
      const e3 = [];
      let s3 = t3[0], i3 = t3[1], a3 = e3[0] = je(s3, i3), o3 = 1;
      for (let r3 = t3.length - 1; o3 < r3; o3++) s3 = i3, i3 = t3[o3 + 1], e3[o3] = 0.5 * (a3 + (a3 = je(s3, i3)));
      return e3[o3] = a3, e3;
    })(t2), s2 = t2.length - 1, i2 = [];
    let a2, o2, r2, n2;
    for (let i3 = 0; i3 < s2; i3++) r2 = je(t2[i3], t2[i3 + 1]), Math.abs(r2) < 1e-6 ? e2[i3] = e2[i3 + 1] = 0 : (a2 = e2[i3] / r2, o2 = e2[i3 + 1] / r2, n2 = a2 * a2 + o2 * o2, n2 > 9 && (n2 = 3 * r2 / Math.sqrt(n2), e2[i3] = n2 * a2, e2[i3 + 1] = n2 * o2));
    for (let a3 = 0; a3 <= s2; a3++) n2 = (t2[Math.min(s2, a3 + 1)][0] - t2[Math.max(0, a3 - 1)][0]) / (6 * (1 + e2[a3] * e2[a3])), i2.push([n2 || 0, e2[a3] * n2 || 0]);
    return i2;
  }, $e = (t2) => {
    let e2 = "";
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i2 = t2[s2], a2 = i2.length;
      a2 > 4 ? (e2 += `C${i2[0]}, ${i2[1]}`, e2 += `, ${i2[2]}, ${i2[3]}`, e2 += `, ${i2[4]}, ${i2[5]}`) : a2 > 2 && (e2 += `S${i2[0]}, ${i2[1]}`, e2 += `, ${i2[2]}, ${i2[3]}`);
    }
    return e2;
  }, Ge = { points(t2) {
    const e2 = _e(t2), s2 = t2[1], i2 = t2[0], a2 = [], o2 = e2[1], r2 = e2[0];
    a2.push(i2, [i2[0] + r2[0], i2[1] + r2[1], s2[0] - o2[0], s2[1] - o2[1], s2[0], s2[1]]);
    for (let s3 = 2, i3 = e2.length; s3 < i3; s3++) {
      const i4 = t2[s3], o3 = e2[s3];
      a2.push([i4[0] - o3[0], i4[1] - o3[1], i4[0], i4[1]]);
    }
    return a2;
  }, slice(t2, e2, s2) {
    const i2 = t2.slice(e2, s2);
    if (e2) {
      if (s2 - e2 > 1 && i2[1].length < 6) {
        const t3 = i2[0].length;
        i2[1] = [2 * i2[0][t3 - 2] - i2[0][t3 - 4], 2 * i2[0][t3 - 1] - i2[0][t3 - 3]].concat(i2[1]);
      }
      i2[0] = i2[0].slice(-2);
    }
    return i2;
  } };
  function je(t2, e2) {
    return (e2[1] - t2[1]) / (e2[0] - t2[0]);
  }
  function Ve(t2) {
    const e2 = [];
    for (let s2 = 0; s2 < t2.length; s2 += 2) e2.push(t2[s2 + 1], t2[s2]);
    return e2;
  }
  class Ue {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2;
    }
    checkColorRange() {
      const t2 = this.w;
      let e2 = false;
      const s2 = t2.config.plotOptions[t2.config.chart.type];
      return s2.colorScale.ranges.length > 0 && s2.colorScale.ranges.map((t3) => {
        t3.from <= 0 && (e2 = true);
      }), e2;
    }
    getShadeColor(t2, e2, s2, i2) {
      const a2 = this.w;
      let o2 = 1;
      const r2 = a2.config.plotOptions[t2].shadeIntensity, n2 = this.determineColor(t2, e2, s2);
      a2.globals.hasNegs || i2 ? o2 = a2.config.plotOptions[t2].reverseNegativeShade ? n2.percent < 0 ? n2.percent / 100 * (1.25 * r2) : (1 - n2.percent / 100) * (1.25 * r2) : n2.percent <= 0 ? 1 - (1 + n2.percent / 100) * r2 : (1 - n2.percent / 100) * r2 : (o2 = 1 - n2.percent / 100, "treemap" === t2 && (o2 = (1 - n2.percent / 100) * (1.25 * r2)));
      let l2 = n2.color;
      const h2 = new m();
      if (a2.config.plotOptions[t2].enableShades) if ("dark" === this.w.config.theme.mode) {
        const t3 = h2.shadeColor(-1 * o2, n2.color);
        l2 = m.hexToRgba(m.isColorHex(t3) ? t3 : m.rgb2hex(t3), a2.config.fill.opacity);
      } else {
        const t3 = h2.shadeColor(o2, n2.color);
        l2 = m.hexToRgba(m.isColorHex(t3) ? t3 : m.rgb2hex(t3), a2.config.fill.opacity);
      }
      return { color: l2, colorProps: n2 };
    }
    determineColor(t2, e2, s2) {
      const i2 = this.w, a2 = i2.seriesData.series[e2][s2], o2 = i2.config.plotOptions[t2];
      let r2 = o2.colorScale.inverse ? s2 : e2;
      o2.distributed && "treemap" === i2.config.chart.type && (r2 = s2);
      let n2 = i2.globals.colors[r2], l2 = null, h2 = Math.min(...i2.seriesData.series[e2]), c2 = Math.max(...i2.seriesData.series[e2]);
      o2.distributed || "heatmap" !== t2 || (h2 = i2.globals.minY, c2 = i2.globals.maxY), void 0 !== o2.colorScale.min && (h2 = o2.colorScale.min < i2.globals.minY ? o2.colorScale.min : i2.globals.minY, c2 = o2.colorScale.max > i2.globals.maxY ? o2.colorScale.max : i2.globals.maxY);
      const d2 = Math.abs(c2) + Math.abs(h2);
      let g2 = 0 === d2 ? 0 : 100 * a2 / d2;
      if (o2.colorScale.ranges.length > 0) {
        o2.colorScale.ranges.map((t3) => {
          if (a2 >= t3.from && a2 <= t3.to) {
            n2 = t3.color, l2 = t3.foreColor ? t3.foreColor : null, h2 = t3.from, c2 = t3.to;
            const e3 = Math.abs(c2) + Math.abs(h2);
            g2 = 0 === e3 ? 0 : 100 * a2 / e3;
          }
        });
      }
      return { color: n2, foreColor: l2, percent: g2 };
    }
    calculateDataLabels({ text: t2, x: e2, y: s2, i: i2, j: a2, colorProps: o2, fontSize: r2 }) {
      const n2 = this.w.config.dataLabels, l2 = new N(this.w), h2 = new U(this.w, this.ctx);
      let c2 = null;
      if (n2.enabled) {
        c2 = l2.group({ class: "apexcharts-data-labels" });
        const d2 = n2.offsetX, g2 = n2.offsetY, p2 = e2 + d2, u2 = s2 + parseFloat(n2.style.fontSize) / 3 + g2;
        h2.plotDataLabelsText({ x: p2, y: u2, text: t2, i: i2, j: a2, color: o2.foreColor, parent: c2, fontSize: r2, dataLabelsConfig: n2 });
      }
      return c2;
    }
  }
  class qe {
    constructor(t2) {
      this.w = t2.w, this.lineCtx = t2;
    }
    sameValueSeriesFix(t2, e2) {
      const s2 = this.w;
      if ("gradient" === s2.config.fill.type || "gradient" === s2.config.fill.type[t2]) {
        if (new F(this.lineCtx.w).seriesHaveSameValues(t2)) {
          const s3 = e2[t2].slice();
          s3[s3.length - 1] = s3[s3.length - 1] + 1e-6, e2[t2] = s3;
        }
      }
      return e2;
    }
    calculatePoints({ series: t2, realIndex: e2, x: s2, y: i2, i: a2, j: o2, prevY: r2 }) {
      const n2 = this.w, l2 = [], h2 = [];
      let c2 = this.lineCtx.categoryAxisCorrection + n2.config.markers.offsetX;
      return n2.axisFlags.isXNumeric && (c2 = (n2.seriesData.seriesX[e2][0] - n2.globals.minX) / this.lineCtx.xRatio + n2.config.markers.offsetX), 0 === o2 && (l2.push(c2), h2.push(m.isNumber(t2[a2][0]) ? r2 + n2.config.markers.offsetY : null)), l2.push(s2 + n2.config.markers.offsetX), h2.push(m.isNumber(t2[a2][o2 + 1]) ? i2 + n2.config.markers.offsetY : null), { x: l2, y: h2 };
    }
    checkPreviousPaths({ pathFromLine: t2, pathFromArea: e2, realIndex: s2 }) {
      const i2 = this.w;
      for (let a2 = 0; a2 < i2.globals.previousPaths.length; a2++) {
        const o2 = i2.globals.previousPaths[a2];
        ("line" === o2.type || "area" === o2.type) && o2.paths.length > 0 && parseInt(o2.realIndex, 10) === parseInt(s2, 10) && ("line" === o2.type ? (this.lineCtx.appendPathFrom = false, t2 = i2.globals.previousPaths[a2].paths[0].d) : "area" === o2.type && (this.lineCtx.appendPathFrom = false, e2 = i2.globals.previousPaths[a2].paths[0].d, i2.config.stroke.show && i2.globals.previousPaths[a2].paths[1] && (t2 = i2.globals.previousPaths[a2].paths[1].d)));
      }
      return { pathFromLine: t2, pathFromArea: e2 };
    }
    determineFirstPrevY({ i: t2, realIndex: e2, series: s2, prevY: i2, lineYPosition: a2, translationsIndex: o2 }) {
      var r2, n2, l2;
      const h2 = this.w, c2 = h2.config.chart.stacked && !h2.globals.comboCharts || h2.config.chart.stacked && h2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null == (r2 = this.w.config.series[e2]) ? void 0 : r2.type) || "column" === (null == (n2 = this.w.config.series[e2]) ? void 0 : n2.type));
      if (void 0 !== (null == (l2 = s2[t2]) ? void 0 : l2[0])) i2 = (a2 = c2 && t2 > 0 ? this.lineCtx.prevSeriesY[t2 - 1][0] : this.lineCtx.zeroY) - s2[t2][0] / this.lineCtx.yRatio[o2] + 2 * (this.lineCtx.isReversed ? s2[t2][0] / this.lineCtx.yRatio[o2] : 0);
      else if (c2 && t2 > 0 && void 0 === s2[t2][0]) {
        for (let e3 = t2 - 1; e3 >= 0; e3--) if (null !== s2[e3][0] && void 0 !== s2[e3][0]) {
          i2 = a2 = this.lineCtx.prevSeriesY[e3][0];
          break;
        }
      }
      return { prevY: i2, lineYPosition: a2 };
    }
  }
  class Ze {
    constructor(t2, e2, s2, i2) {
      this.ctx = e2, this.w = t2, this.xyRatios = s2, this.xRatio = 0, this.yRatio = [], this.zRatio = 0, this.baseLineY = [], this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i2, this.scatter = new V(this.w, this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new qe(this), this.markers = new j(this.w, this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0, this.xDivision = 0, this.zeroY = 0, this.areaBottomY = 0, this.strokeWidth = 0, this.isReversed = false, this.appendPathFrom = false, this.elSeries = null, this.elPointsMain = null, this.elDataLabelsWrap = null;
    }
    draw(t2, e2, s2, i2) {
      var a2;
      const o2 = this.w, r2 = new N(this.w), h2 = o2.globals.comboCharts ? e2 : o2.config.chart.type, c2 = r2.group({ class: `apexcharts-${h2}-series apexcharts-plot-series` }), d2 = new F(this.w);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t2 = d2.getLogSeries(t2), this.yRatio = d2.getLogYRatios(this.yRatio), this.prevSeriesY = [];
      const g2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        t2 = this.lineHelpers.sameValueSeriesFix(e3, t2);
        const a3 = o2.globals.comboCharts ? s2[e3] : e3, r3 = this.yRatio.length > 1 ? a3 : 0;
        this._initSerieVariables(t2, e3, a3);
        const c3 = [], d3 = [], p2 = [];
        let u2 = o2.globals.padHorizontal + this.categoryAxisCorrection;
        const x2 = 1, f2 = [], b2 = [];
        lt.addCollapsedClassToSeries(this.w, this.elSeries, a3), o2.axisFlags.isXNumeric && o2.seriesData.seriesX.length > 0 && (u2 = (o2.seriesData.seriesX[a3][0] - o2.globals.minX) / this.xRatio), p2.push(u2);
        const m2 = u2;
        let y2;
        const w2 = m2;
        let v2 = this.zeroY, A2 = this.zeroY;
        const C2 = 0;
        v2 = this.lineHelpers.determineFirstPrevY({ i: e3, realIndex: a3, series: t2, prevY: v2, lineYPosition: C2, translationsIndex: r3 }).prevY, "monotoneCubic" === o2.config.stroke.curve && null === t2[e3][0] ? c3.push(null) : c3.push(v2);
        const S2 = v2;
        let k2;
        "rangeArea" === h2 && (k2 = this.lineHelpers.determineFirstPrevY({ i: e3, realIndex: a3, series: i2, prevY: A2, lineYPosition: C2, translationsIndex: r3 }), A2 = k2.prevY, y2 = A2, d3.push(null !== c3[0] ? A2 : null));
        const D2 = this._calculatePathsFrom({ type: h2, series: t2, i: e3, realIndex: a3, translationsIndex: r3, prevX: w2, prevY: v2, prevY2: A2 }), L2 = [c3[0]], M2 = [d3[0]], P2 = { type: h2, series: t2, realIndex: a3, translationsIndex: r3, i: e3, x: u2, y: x2, pX: m2, pY: S2, pathsFrom: D2, linePaths: f2, areaPaths: b2, seriesIndex: s2, lineYPosition: C2, xArrj: p2, yArrj: c3, y2Arrj: d3, seriesRangeEnd: i2 }, T2 = this._iterateOverDataPoints(l(n({}, P2), { iterations: "rangeArea" === h2 ? t2[e3].length - 1 : void 0, isRangeStart: true }));
        if ("rangeArea" === h2) {
          const t3 = this._calculatePathsFrom({ series: i2, i: e3, realIndex: a3, prevX: w2, prevY: A2 }), s3 = this._iterateOverDataPoints(l(n({}, P2), { series: i2, xArrj: [u2], yArrj: L2, y2Arrj: M2, pY: y2, areaPaths: T2.areaPaths, pathsFrom: t3, iterations: i2[e3].length - 1, isRangeStart: false })), o3 = T2.linePaths.length / 2;
          for (let t4 = 0; t4 < o3; t4++) T2.linePaths[t4] = s3.linePaths[t4 + o3] + T2.linePaths[t4];
          T2.linePaths.splice(o3), T2.pathFromLine = s3.pathFromLine + T2.pathFromLine;
        } else T2.pathFromArea += "z";
        this._handlePaths({ type: h2, realIndex: a3, i: e3, paths: T2 }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), g2.push(this.elSeries);
      }
      if (void 0 !== (null == (a2 = o2.config.series[0]) ? void 0 : a2.zIndex) && g2.sort((t3, e3) => Number(t3.node.getAttribute("zIndex")) - Number(e3.node.getAttribute("zIndex"))), o2.config.chart.stacked) for (let t3 = g2.length - 1; t3 >= 0; t3--) c2.add(g2[t3]);
      else for (let t3 = 0; t3 < g2.length; t3++) c2.add(g2[t3]);
      return c2;
    }
    _initSerieVariables(t2, e2, s2) {
      const i2 = this.w, a2 = new N(this.w);
      this.xDivision = i2.layout.gridWidth / (i2.globals.dataPoints - ("on" === i2.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(i2.config.stroke.width) ? i2.config.stroke.width[s2] : i2.config.stroke.width;
      let o2 = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[s2], o2 = s2), this.isReversed = i2.config.yaxis[this.yaxisIndex] && i2.config.yaxis[this.yaxisIndex].reversed, this.zeroY = i2.layout.gridHeight - this.baseLineY[o2] - (this.isReversed ? i2.layout.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[o2] : 0), this.areaBottomY = this.zeroY, (this.zeroY > i2.layout.gridHeight || "end" === i2.config.plotOptions.area.fillTo) && (this.areaBottomY = i2.layout.gridHeight), this.categoryAxisCorrection = this.xDivision / 2;
      const r2 = i2.config.series[s2];
      if (this.elSeries = a2.group({ class: "apexcharts-series", zIndex: void 0 !== r2.zIndex ? r2.zIndex : s2, seriesName: m.escapeString(i2.seriesData.seriesNames[s2]) }), this.elPointsMain = a2.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": s2 }), i2.globals.hasNullValues) {
        const t3 = this.markers.plotChartMarkers({ pointsPos: { x: [0], y: [i2.layout.gridHeight + i2.globals.markers.largestSize] }, seriesIndex: e2, j: 0, pSize: 0.1, alwaysDrawMarker: true, isVirtualPoint: true });
        null !== t3 && this.elPointsMain.add(t3);
      }
      this.elDataLabelsWrap = a2.group({ class: "apexcharts-datalabels", "data:realIndex": s2 });
      const n2 = t2[e2].length === i2.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": n2, rel: e2 + 1, "data:realIndex": s2 }), this.appendPathFrom = true;
    }
    _calculatePathsFrom({ type: t2, series: e2, i: s2, realIndex: i2, translationsIndex: a2, prevX: o2, prevY: r2, prevY2: n2 }) {
      const l2 = this.w, h2 = new N(this.w);
      let c2, d2, g2, p2;
      if (null === e2[s2][0]) {
        for (let t3 = 0; t3 < e2[s2].length; t3++) if (null !== e2[s2][t3]) {
          o2 = this.xDivision * t3, r2 = this.zeroY - e2[s2][t3] / this.yRatio[a2], c2 = h2.move(o2, r2), d2 = h2.move(o2, this.areaBottomY);
          break;
        }
      } else c2 = h2.move(o2, r2), "rangeArea" === t2 && (c2 = h2.move(o2, n2) + h2.line(o2, r2)), d2 = h2.move(o2, this.areaBottomY) + h2.line(o2, r2);
      if (g2 = h2.move(0, this.areaBottomY) + h2.line(0, this.areaBottomY), p2 = h2.move(0, this.areaBottomY) + h2.line(0, this.areaBottomY), l2.globals.previousPaths.length > 0) {
        const t3 = this.lineHelpers.checkPreviousPaths({ pathFromLine: g2, pathFromArea: p2, realIndex: i2 });
        g2 = t3.pathFromLine, p2 = t3.pathFromArea;
      }
      return { prevX: o2, prevY: r2, linePath: c2, areaPath: d2, pathFromLine: g2, pathFromArea: p2 };
    }
    _handlePaths({ type: t2, realIndex: e2, i: s2, paths: i2 }) {
      const a2 = this.w, o2 = new N(this.w), r2 = new G(this.w);
      this.prevSeriesY.push(i2.yArrj), a2.globals.seriesXvalues[e2] = i2.xArrj, a2.globals.seriesYvalues[e2] = i2.yArrj;
      const h2 = a2.config.forecastDataPoints;
      if (h2.count > 0 && "rangeArea" !== t2) {
        const t3 = a2.globals.seriesXvalues[e2][a2.globals.seriesXvalues[e2].length - h2.count - 1], s3 = o2.drawRect(t3, 0, a2.layout.gridWidth, a2.layout.gridHeight, 0);
        a2.dom.elForecastMask.appendChild(s3.node);
        const i3 = o2.drawRect(0, 0, t3, a2.layout.gridHeight, 0);
        a2.dom.elNonForecastMask.appendChild(i3.node);
      }
      this.pointsChart || a2.globals.delayedElements.push({ el: this.elPointsMain.node, index: e2 });
      const c2 = { i: s2, realIndex: e2, animationDelay: s2, initialSpeed: a2.config.chart.animations.speed, dataChangeSpeed: a2.config.chart.animations.dynamicAnimation.speed, className: `apexcharts-${t2}` };
      if ("area" === t2) {
        const t3 = r2.fillPath({ seriesNumber: e2 });
        for (let e3 = 0; e3 < i2.areaPaths.length; e3++) {
          const s3 = o2.renderPaths(l(n({}, c2), { pathFrom: i2.pathFromArea, pathTo: i2.areaPaths[e3], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: t3 }));
          this.elSeries.add(s3);
        }
      }
      if (a2.config.stroke.show && !this.pointsChart) {
        let d2 = null;
        if ("line" === t2) d2 = r2.fillPath({ seriesNumber: e2, i: s2 });
        else if ("solid" === a2.config.stroke.fill.type) d2 = a2.globals.stroke.colors[e2];
        else {
          const t3 = a2.config.fill;
          a2.config.fill = a2.config.stroke.fill, d2 = r2.fillPath({ seriesNumber: e2, i: s2 }), a2.config.fill = t3;
        }
        for (let s3 = 0; s3 < i2.linePaths.length; s3++) {
          let g2 = d2;
          "rangeArea" === t2 && (g2 = r2.fillPath({ seriesNumber: e2 }));
          const p2 = l(n({}, c2), { pathFrom: i2.pathFromLine, pathTo: i2.linePaths[s3], stroke: d2, strokeWidth: this.strokeWidth, strokeLineCap: a2.config.stroke.lineCap, fill: "rangeArea" === t2 ? g2 : "none" }), u2 = o2.renderPaths(p2);
          if (this.elSeries.add(u2), u2.attr("fill-rule", "evenodd"), h2.count > 0 && "rangeArea" !== t2) {
            const t3 = o2.renderPaths(p2);
            t3.node.setAttribute("stroke-dasharray", h2.dashArray), h2.strokeWidth && t3.node.setAttribute("stroke-width", h2.strokeWidth), this.elSeries.add(t3), t3.attr("clip-path", `url(#forecastMask${a2.globals.cuid})`), u2.attr("clip-path", `url(#nonForecastMask${a2.globals.cuid})`);
          }
        }
      }
    }
    _iterateOverDataPoints({ type: t2, series: e2, iterations: s2, realIndex: i2, translationsIndex: a2, i: o2, x: r2, y: n2, pX: l2, pY: h2, pathsFrom: c2, linePaths: d2, areaPaths: g2, seriesIndex: p2, lineYPosition: u2, xArrj: x2, yArrj: f2, y2Arrj: b2, isRangeStart: y2, seriesRangeEnd: w2 }) {
      var v2, A2;
      const C2 = this.w, S2 = new N(this.w), k2 = this.yRatio;
      let { prevY: D2, linePath: L2, areaPath: M2, pathFromLine: P2, pathFromArea: T2 } = c2;
      const F2 = m.isNumber(C2.globals.minYArr[i2]) ? C2.globals.minYArr[i2] : C2.globals.minY;
      s2 || (s2 = C2.globals.dataPoints > 1 ? C2.globals.dataPoints - 1 : C2.globals.dataPoints);
      const E2 = (t3, e3) => e3 - t3 / k2[a2] + 2 * (this.isReversed ? t3 / k2[a2] : 0);
      let I2 = n2;
      const X2 = C2.config.chart.stacked && !C2.globals.comboCharts || C2.config.chart.stacked && C2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null == (v2 = this.w.config.series[i2]) ? void 0 : v2.type) || "column" === (null == (A2 = this.w.config.series[i2]) ? void 0 : A2.type));
      let R2 = C2.config.stroke.curve;
      Array.isArray(R2) && (R2 = Array.isArray(p2) ? R2[p2[o2]] : R2[o2]);
      let z2, Y2 = 0;
      for (let a3 = 0; a3 < s2 && 0 !== e2[o2].length; a3++) {
        const c3 = void 0 === e2[o2][a3 + 1] || null === e2[o2][a3 + 1];
        if (C2.axisFlags.isXNumeric) {
          let t3 = C2.seriesData.seriesX[i2][a3 + 1];
          void 0 === C2.seriesData.seriesX[i2][a3 + 1] && (t3 = C2.seriesData.seriesX[i2][s2 - 1]), r2 = (t3 - C2.globals.minX) / this.xRatio;
        } else r2 += this.xDivision;
        if (X2) if (o2 > 0 && C2.globals.collapsedSeries.length < C2.config.series.length - 1) {
          const t3 = (t4) => {
            for (let e3 = t4; e3 > 0; e3--) {
              if (!(C2.globals.collapsedSeriesIndices.indexOf((null == p2 ? void 0 : p2[e3]) || e3) > -1)) return e3;
              e3--;
            }
            return 0;
          };
          u2 = this.prevSeriesY[t3(o2 - 1)][a3 + 1];
        } else u2 = this.zeroY;
        else u2 = this.zeroY;
        c3 ? n2 = E2(F2, u2) : (n2 = E2(e2[o2][a3 + 1], u2), "rangeArea" === t2 && (I2 = E2(w2[o2][a3 + 1], u2))), x2.push(null === e2[o2][a3 + 1] ? null : r2), !c3 || "smooth" !== C2.config.stroke.curve && "monotoneCubic" !== C2.config.stroke.curve ? (f2.push(n2), b2.push(I2)) : (f2.push(null), b2.push(null));
        const m2 = this.lineHelpers.calculatePoints({ series: e2, x: r2, y: n2, realIndex: i2, i: o2, j: a3, prevY: D2 }), v3 = this._createPaths({ type: t2, series: e2, i: o2, j: a3, x: r2, y: n2, y2: I2, xArrj: x2, yArrj: f2, y2Arrj: b2, pX: l2, pY: h2, pathState: Y2, segmentStartX: z2, linePath: L2, areaPath: M2, linePaths: d2, areaPaths: g2, curve: R2, isRangeStart: y2 });
        g2 = v3.areaPaths, d2 = v3.linePaths, l2 = v3.pX, h2 = v3.pY, Y2 = v3.pathState, z2 = v3.segmentStartX, M2 = v3.areaPath, L2 = v3.linePath, !this.appendPathFrom || C2.globals.hasNullValues || "monotoneCubic" === R2 && "rangeArea" === t2 || (P2 += S2.line(r2, this.areaBottomY), T2 += S2.line(r2, this.areaBottomY)), this.handleNullDataPoints(e2, m2, o2, a3, i2), this._handleMarkersAndLabels({ type: t2, pointsPos: m2, i: o2, j: a3, realIndex: i2, isRangeStart: y2 });
      }
      return { yArrj: f2, xArrj: x2, pathFromArea: T2, areaPaths: g2, pathFromLine: P2, linePaths: d2, linePath: L2, areaPath: M2 };
    }
    _handleMarkersAndLabels({ type: t2, pointsPos: e2, isRangeStart: s2, i: i2, j: a2, realIndex: o2 }) {
      const r2 = this.w, n2 = new U(this.w, this.ctx);
      if (this.pointsChart) this.scatter.draw(this.elSeries, a2, { realIndex: o2, pointsPos: e2, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        !(!r2.globals.dataChanged && !r2.globals.resized) && r2.seriesData.series[i2].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        const t3 = this.markers.plotChartMarkers({ pointsPos: e2, seriesIndex: o2, j: a2 + 1 });
        null !== t3 && this.elPointsMain.add(t3);
      }
      const l2 = n2.drawDataLabel({ type: t2, isRangeStart: s2, pos: e2, i: o2, j: a2 + 1 });
      null !== l2 && this.elDataLabelsWrap.add(l2);
    }
    _createPaths({ type: t2, series: e2, i: s2, j: i2, x: a2, y: o2, xArrj: r2, yArrj: n2, y2: l2, y2Arrj: h2, pX: c2, pY: d2, pathState: g2, segmentStartX: p2, linePath: u2, areaPath: x2, linePaths: f2, areaPaths: b2, curve: m2, isRangeStart: y2 }) {
      const w2 = new N(this.w), v2 = this.areaBottomY, A2 = "rangeArea" === t2, C2 = "rangeArea" === t2 && y2;
      switch (m2) {
        case "monotoneCubic": {
          const t3 = y2 ? n2 : h2, a3 = (t4, e3) => t4.map((t5, s3) => [t5, e3[s3]]).filter((t5) => null !== t5[1]), o3 = (t4) => {
            const e3 = [];
            let s3 = 0;
            return t4.forEach((t5) => {
              null !== t5 ? s3++ : s3 > 0 && (e3.push(s3), s3 = 0);
            }), s3 > 0 && e3.push(s3), e3;
          }, l3 = (t4, e3) => {
            const s3 = o3(t4), i3 = [];
            for (let t5 = 0, a4 = 0; t5 < s3.length; a4 += s3[t5++]) i3[t5] = Ge.slice(e3, a4, a4 + s3[t5]);
            return i3;
          };
          switch (g2) {
            case 0:
              if (null === t3[i2 + 1]) break;
              g2 = 1;
            case 1:
              if (!(A2 ? r2.length === e2[s2].length : i2 === e2[s2].length - 2)) break;
            case 2: {
              const e3 = y2 ? r2 : r2.slice().reverse(), s3 = y2 ? t3 : t3.slice().reverse(), i3 = a3(e3, s3), o4 = i3.length > 1 ? Ge.points(i3) : i3;
              let n3 = [];
              A2 && (C2 ? b2 = i3 : n3 = b2.reverse());
              let h3 = 0, c3 = 0;
              if (l3(s3, o4).forEach((t4) => {
                h3++;
                const e4 = $e(t4), s4 = c3;
                c3 += t4.length;
                const a4 = c3 - 1;
                C2 ? u2 = w2.move(i3[s4][0], i3[s4][1]) + e4 : A2 ? u2 = w2.move(n3[s4][0], n3[s4][1]) + w2.line(i3[s4][0], i3[s4][1]) + e4 + w2.line(n3[a4][0], n3[a4][1]) : (u2 = w2.move(i3[s4][0], i3[s4][1]) + e4, x2 = u2 + w2.line(i3[a4][0], v2) + w2.line(i3[s4][0], v2) + "z", b2.push(x2)), f2.push(u2);
              }), A2 && h3 > 1 && !C2) {
                const t4 = f2.slice(h3).reverse();
                f2.splice(h3), t4.forEach((t5) => f2.push(t5));
              }
              g2 = 0;
              break;
            }
          }
          break;
        }
        case "smooth": {
          const t3 = 0.35 * (a2 - c2);
          if (null === e2[s2][i2]) g2 = 0;
          else switch (g2) {
            case 0:
              if (p2 = c2, u2 = C2 ? w2.move(c2, h2[i2]) + w2.line(c2, d2) : w2.move(c2, d2), x2 = w2.move(c2, d2), null === e2[s2][i2 + 1] || void 0 === e2[s2][i2 + 1]) {
                f2.push(u2), b2.push(x2);
                break;
              }
              if (g2 = 1, i2 < e2[s2].length - 2) {
                const e3 = w2.curve(c2 + t3, d2, a2 - t3, o2, a2, o2);
                u2 += e3, x2 += e3;
                break;
              }
            case 1:
              if (null === e2[s2][i2 + 1]) u2 += C2 ? w2.line(c2, l2) : w2.move(c2, d2), x2 += w2.line(c2, v2) + w2.line(p2, v2) + "z", f2.push(u2), b2.push(x2), g2 = -1;
              else {
                const r3 = w2.curve(c2 + t3, d2, a2 - t3, o2, a2, o2);
                u2 += r3, x2 += r3, i2 >= e2[s2].length - 2 && (C2 && (u2 += w2.curve(a2, o2, a2, o2, a2, l2) + w2.move(a2, l2)), x2 += w2.curve(a2, o2, a2, o2, a2, v2) + w2.line(p2, v2) + "z", f2.push(u2), b2.push(x2), g2 = -1);
              }
          }
          c2 = a2, d2 = o2;
          break;
        }
        default: {
          const t3 = (t4, e3, s3) => {
            let i3 = "";
            switch (t4) {
              case "stepline":
                i3 = w2.line(e3, null, "H") + w2.line(null, s3, "V");
                break;
              case "linestep":
                i3 = w2.line(null, s3, "V") + w2.line(e3, null, "H");
                break;
              case "straight":
                i3 = w2.line(e3, s3);
            }
            return i3;
          };
          if (null === e2[s2][i2]) g2 = 0;
          else switch (g2) {
            case 0:
              if (p2 = c2, u2 = C2 ? w2.move(c2, h2[i2]) + w2.line(c2, d2) : w2.move(c2, d2), x2 = w2.move(c2, d2), null === e2[s2][i2 + 1] || void 0 === e2[s2][i2 + 1]) {
                f2.push(u2), b2.push(x2);
                break;
              }
              if (g2 = 1, i2 < e2[s2].length - 2) {
                const e3 = t3(m2, a2, o2);
                u2 += e3, x2 += e3;
                break;
              }
            case 1:
              if (null === e2[s2][i2 + 1]) u2 += C2 ? w2.line(c2, l2) : w2.move(c2, d2), x2 += w2.line(c2, v2) + w2.line(p2, v2) + "z", f2.push(u2), b2.push(x2), g2 = -1;
              else {
                const r3 = t3(m2, a2, o2);
                u2 += r3, x2 += r3, i2 >= e2[s2].length - 2 && (C2 && (u2 += w2.line(a2, l2)), x2 += w2.line(a2, v2) + w2.line(p2, v2) + "z", f2.push(u2), b2.push(x2), g2 = -1);
              }
          }
          c2 = a2, d2 = o2;
          break;
        }
      }
      return { linePaths: f2, areaPaths: b2, pX: c2, pY: d2, pathState: g2, segmentStartX: p2, linePath: u2, areaPath: x2 };
    }
    handleNullDataPoints(t2, e2, s2, i2, a2) {
      const o2 = this.w;
      if (null === t2[s2][i2] && o2.config.markers.showNullDataPoints || 1 === t2[s2].length) {
        let t3 = this.strokeWidth - o2.config.markers.strokeWidth / 2;
        t3 > 0 || (t3 = 0);
        const s3 = this.markers.plotChartMarkers({ pointsPos: e2, seriesIndex: a2, j: i2 + 1, pSize: t3, alwaysDrawMarker: true });
        null !== s3 && this.elPointsMain.add(s3);
      }
    }
  }
  class Ke {
    constructor(t2) {
      this.w = t2;
    }
    drawYAxisTexts(t2, e2, s2, i2) {
      const a2 = this.w, o2 = a2.config.yaxis[0], r2 = a2.formatters.yLabelFormatters[0];
      return new N(this.w).drawText({ x: t2 + o2.labels.offsetX, y: e2 + o2.labels.offsetY, text: r2(i2, s2), textAnchor: "middle", fontSize: o2.labels.style.fontSize, fontFamily: o2.labels.style.fontFamily, foreColor: Array.isArray(o2.labels.style.colors) ? o2.labels.style.colors[s2] : o2.labels.style.colors });
    }
  }
  class Je {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== t2.globals.stroke.colors ? t2.globals.stroke.colors : t2.globals.colors, this.defaultSize = Math.min(t2.layout.gridWidth, t2.layout.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t2.layout.gridWidth / 2, "radialBar" === t2.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(t2.config.plotOptions.pie.endAngle - t2.config.plotOptions.pie.startAngle), this.initialAngle = t2.config.plotOptions.pie.startAngle % this.fullAngle, t2.globals.radialSize = this.defaultSize / 2.05 - t2.config.stroke.width - (t2.config.chart.sparkline.enabled ? 0 : t2.config.chart.dropShadow.blur), this.donutSize = t2.globals.radialSize * parseInt(t2.config.plotOptions.pie.donut.size, 10) / 100;
      const s2 = t2.config.plotOptions.pie.customScale, i2 = t2.layout.gridWidth / 2, a2 = t2.layout.gridHeight / 2;
      this.translateX = i2 - i2 * s2, this.translateY = a2 - a2 * s2, this.dataLabelsGroup = new N(this.w).group({ class: "apexcharts-datalabels-group", transform: `translate(${this.translateX}, ${this.translateY}) scale(${s2})` }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    draw(t2) {
      var e2;
      const s2 = this.w, i2 = new N(this.w), a2 = i2.group({ class: "apexcharts-pie" });
      if (s2.globals.noData) return a2;
      let o2 = 0;
      for (let e3 = 0; e3 < t2.length; e3++) o2 += m.negToZero(t2[e3]);
      const r2 = [], n2 = i2.group();
      0 === o2 && (o2 = 1e-5), t2.forEach((t3) => {
        this.maxY = Math.max(this.maxY, t3);
      }), s2.config.yaxis[0].max && (this.maxY = s2.config.yaxis[0].max), "back" === s2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(a2);
      for (let e3 = 0; e3 < t2.length; e3++) {
        const i3 = this.fullAngle * m.negToZero(t2[e3]) / o2;
        r2.push(i3), "polarArea" === this.chartType ? (r2[e3] = this.fullAngle / t2.length, this.sliceSizes.push(s2.globals.radialSize * t2[e3] / this.maxY)) : this.sliceSizes.push(s2.globals.radialSize);
      }
      const l2 = true === (null == (e2 = this.ctx.morphTypeChange) ? void 0 : e2.isActive());
      if (s2.globals.dataChanged && !l2) {
        let t3, e3 = 0;
        for (let t4 = 0; t4 < s2.globals.previousPaths.length; t4++) e3 += m.negToZero(s2.globals.previousPaths[t4]);
        for (let i3 = 0; i3 < s2.globals.previousPaths.length; i3++) t3 = this.fullAngle * m.negToZero(s2.globals.previousPaths[i3]) / e3, this.prevSectorAngleArr.push(t3);
      }
      if (this.donutSize < 0 && (this.donutSize = 0), "donut" === this.chartType) {
        const t3 = i2.drawCircle(this.donutSize);
        t3.attr({ cx: this.centerX, cy: this.centerY, fill: s2.config.plotOptions.pie.donut.background ? s2.config.plotOptions.pie.donut.background : "transparent" }), n2.add(t3);
      }
      const h2 = this.drawArcs(r2, t2);
      if (this.sliceLabels.forEach((t3) => {
        h2.add(t3);
      }), n2.attr({ transform: `translate(${this.translateX}, ${this.translateY}) scale(${s2.config.plotOptions.pie.customScale})` }), n2.add(h2), a2.add(n2), this.donutDataLabels.show) {
        const t3 = this.initialAnim && !s2.globals.resized && !s2.globals.dataChanged && this.animDur > 0, e3 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: t3 ? 0 : this.donutDataLabels.show });
        if (t3) {
          const t4 = this.dataLabelsGroup.node;
          t4.style.transition = "opacity 280ms ease-out", setTimeout(() => {
            t4.style.opacity = "1";
          }, this.animDur);
        }
        a2.add(e3);
      }
      return "front" === s2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(a2), a2;
    }
    drawArcs(t2, e2) {
      var s2, i2;
      const a2 = this.w, o2 = new H(this.w), r2 = new N(this.w), n2 = new G(this.w), l2 = r2.group({ class: "apexcharts-slices" });
      let h2 = this.initialAngle, c2 = this.initialAngle, d2 = this.initialAngle, g2 = this.initialAngle;
      this.strokeWidth = a2.config.stroke.show ? a2.config.stroke.width : 0;
      const p2 = true === (null == (s2 = this.ctx.morphTypeChange) ? void 0 : s2.isActive());
      for (let s3 = 0; s3 < t2.length; s3++) {
        const u2 = r2.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: m.escapeString(a2.seriesData.seriesNames[s3]), rel: s3 + 1, "data:realIndex": s3 });
        l2.add(u2), h2 = d2, c2 = g2, d2 = h2 + t2[s3], g2 = c2 + this.prevSectorAngleArr[s3];
        const x2 = d2 < h2 ? this.fullAngle + d2 - h2 : d2 - h2, f2 = n2.fillPath({ seriesNumber: s3, size: this.sliceSizes[s3], value: e2[s3] }), b2 = p2 ? this.ctx.morphTypeChange.getInitialPathFor(s3, 0) : null, y2 = b2 || this.getChangedPath(c2, g2), w2 = r2.drawPath({ d: y2, stroke: Array.isArray(this.lineColorArr) ? null != (i2 = this.lineColorArr[s3]) ? i2 : this.lineColorArr[s3 % this.lineColorArr.length] : this.lineColorArr, strokeWidth: 0, fill: f2, fillOpacity: a2.config.fill.opacity, classes: `apexcharts-pie-area apexcharts-${this.chartType.toLowerCase()}-slice-${s3}` });
        if (w2.attr({ index: 0, j: s3 }), o2.setSelectionFilter(w2, 0, s3), a2.config.chart.dropShadow.enabled) {
          const t3 = a2.config.chart.dropShadow;
          o2.dropShadow(w2, t3, s3);
        }
        this.addListeners(w2, this.donutDataLabels);
        let v2 = { x: 0, y: 0 };
        const A2 = (h2 + x2 / 2) % this.fullAngle;
        let C2 = { x: this.centerX, y: this.centerY };
        "pie" === this.chartType || "polarArea" === this.chartType ? (v2 = m.polarToCartesian(this.centerX, this.centerY, a2.globals.radialSize / 1.25 + a2.config.plotOptions.pie.dataLabels.offset, A2), C2 = m.polarToCartesian(this.centerX, this.centerY, a2.globals.radialSize / 2, A2)) : "donut" === this.chartType && (v2 = m.polarToCartesian(this.centerX, this.centerY, (a2.globals.radialSize + this.donutSize) / 2 + a2.config.plotOptions.pie.dataLabels.offset, A2), C2 = m.polarToCartesian(this.centerX, this.centerY, (a2.globals.radialSize + this.donutSize) / 2, A2)), N.setAttrs(w2.node, { "data:angle": x2, "data:startAngle": h2, "data:strokeWidth": this.strokeWidth, "data:value": e2[s3], "data:cx": C2.x, "data:cy": C2.y }), u2.add(w2);
        let S2 = 0;
        if (!this.initialAnim || a2.globals.resized || a2.globals.dataChanged ? this.animBeginArr.push(0) : (S2 = x2 / this.fullAngle * a2.config.chart.animations.speed, 0 === S2 && (S2 = 1), this.animDur = S2 + this.animDur, this.animBeginArr.push(this.animDur)), p2 && b2) {
          const t3 = this.getPiePath({ me: this, startAngle: h2, angle: x2, size: this.sliceSizes[s3] }), e3 = this.ctx.morphTypeChange.getSpeed();
          w2.node.setAttribute("data:pathOrig", t3), w2.animate(e3).plot(t3, "polygons").attr({ "stroke-width": this.strokeWidth });
        } else this.dynamicAnim && a2.globals.dataChanged ? this.animatePaths(w2, { size: this.sliceSizes[s3], endAngle: d2, startAngle: h2, prevStartAngle: c2, prevEndAngle: g2, animateStartingPos: true, i: s3, animBeginArr: this.animBeginArr, shouldSetPrevPaths: true, dur: a2.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(w2, { size: this.sliceSizes[s3], endAngle: d2, startAngle: h2, i: s3, totalItems: t2.length - 1, animBeginArr: this.animBeginArr, dur: S2 });
        if (a2.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && w2.node.addEventListener("mouseup", this.pieClicked.bind(this, s3)), void 0 !== a2.interact.selectedDataPoints[0] && a2.interact.selectedDataPoints[0].indexOf(s3) > -1) if (this.initialAnim && !a2.globals.resized && !a2.globals.dataChanged && this.animDur > 0) {
          const t3 = this, e3 = s3;
          setTimeout(() => t3.pieClicked(e3), this.animDur);
        } else this.pieClicked(s3);
        if (a2.config.dataLabels.enabled) {
          const e3 = v2.x, i3 = v2.y;
          let n3 = 100 * x2 / this.fullAngle + "%";
          if (0 !== x2 && a2.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t2[s3]) {
            const t3 = a2.config.dataLabels.formatter;
            void 0 !== t3 && (n3 = t3(a2.globals.seriesPercent[s3][0], { seriesIndex: s3, w: a2 }));
            const l3 = a2.globals.dataLabels.style.colors[s3], h3 = r2.group({ class: "apexcharts-datalabels" }), c3 = r2.drawText({ x: e3, y: i3, text: n3, textAnchor: "middle", fontSize: a2.config.dataLabels.style.fontSize, fontFamily: a2.config.dataLabels.style.fontFamily, fontWeight: a2.config.dataLabels.style.fontWeight, foreColor: l3 });
            if (h3.add(c3), a2.config.dataLabels.dropShadow.enabled) {
              const t4 = a2.config.dataLabels.dropShadow;
              o2.dropShadow(c3, t4);
            }
            c3.node.classList.add("apexcharts-pie-label"), a2.config.chart.animations.animate && false === a2.globals.resized && (c3.node.classList.add("apexcharts-pie-label-delay"), c3.node.style.animationDelay = a2.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(h3);
          }
        }
      }
      return l2;
    }
    addListeners(t2, e2) {
      const s2 = new N(this.w);
      t2.node.addEventListener("mouseenter", s2.pathMouseEnter.bind(this, t2)), t2.node.addEventListener("mouseleave", s2.pathMouseLeave.bind(this, t2)), t2.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this)), t2.node.addEventListener("mousedown", s2.pathMouseDown.bind(this, t2)), this.donutDataLabels.total.showAlways || (t2.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t2.node, e2)), t2.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t2.node, e2)));
    }
    animatePaths(t2, e2) {
      const s2 = this.w;
      let i2 = e2.endAngle < e2.startAngle ? this.fullAngle + e2.endAngle - e2.startAngle : e2.endAngle - e2.startAngle, a2 = i2, o2 = e2.startAngle;
      const r2 = e2.startAngle;
      void 0 !== e2.prevStartAngle && void 0 !== e2.prevEndAngle && (o2 = e2.prevEndAngle, a2 = e2.prevEndAngle < e2.prevStartAngle ? this.fullAngle + e2.prevEndAngle - e2.prevStartAngle : e2.prevEndAngle - e2.prevStartAngle), e2.i === s2.config.series.length - 1 && (i2 + r2 > this.fullAngle ? e2.endAngle = e2.endAngle - (i2 + r2) : i2 + r2 < this.fullAngle && (e2.endAngle = e2.endAngle + (this.fullAngle - (i2 + r2)))), i2 === this.fullAngle && (i2 = this.fullAngle - 0.01), this.animateArc(t2, o2, r2, i2, a2, e2);
    }
    animateArc(t2, e2, s2, i2, a2, o2) {
      const r2 = this, n2 = this.w, l2 = new B(this.w), h2 = o2.size;
      let c2;
      (isNaN(e2) || isNaN(a2)) && (e2 = s2, a2 = i2, o2.dur = 0);
      let d2 = i2, g2 = s2;
      const p2 = e2 < s2 ? this.fullAngle + e2 - s2 : e2 - s2;
      n2.globals.dataChanged && o2.shouldSetPrevPaths && o2.prevEndAngle && (c2 = r2.getPiePath({ me: r2, startAngle: o2.prevStartAngle, angle: o2.prevEndAngle < o2.prevStartAngle ? this.fullAngle + o2.prevEndAngle - o2.prevStartAngle : o2.prevEndAngle - o2.prevStartAngle, size: h2 }), t2.attr({ d: c2 })), 0 !== o2.dur ? t2.animate(o2.dur, o2.animBeginArr[o2.i]).after(function() {
        "pie" !== r2.chartType && "donut" !== r2.chartType && "polarArea" !== r2.chartType || this.animate(n2.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": r2.strokeWidth }), o2.i === n2.config.series.length - 1 && l2.animationCompleted(t2);
      }).during((n3) => {
        d2 = p2 + (i2 - p2) * n3, o2.animateStartingPos && (d2 = a2 + (i2 - a2) * n3, g2 = e2 - a2 + (s2 - (e2 - a2)) * n3), c2 = r2.getPiePath({ me: r2, startAngle: g2, angle: d2, size: h2 }), t2.node.setAttribute("data:pathOrig", c2), t2.attr({ d: c2 });
      }) : (c2 = r2.getPiePath({ me: r2, startAngle: g2, angle: i2, size: h2 }), o2.isTrack || (n2.globals.animationEnded = true), t2.node.setAttribute("data:pathOrig", c2), t2.attr({ d: c2, "stroke-width": r2.strokeWidth }));
    }
    pieClicked(t2) {
      const e2 = this.w, s2 = this, i2 = s2.sliceSizes[t2] + (e2.config.plotOptions.pie.expandOnClick ? 4 : 0), a2 = e2.dom.Paper.findOne(`.apexcharts-${s2.chartType.toLowerCase()}-slice-${t2}`);
      if ("true" === a2.attr("data:pieClicked")) {
        a2.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner();
        const t3 = a2.attr("data:pathOrig");
        return void a2.attr({ d: t3 });
      }
      {
        const s3 = e2.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(s3, (t3) => {
          t3.setAttribute("data:pieClicked", "false");
          const e3 = t3.getAttribute("data:pathOrig");
          e3 && t3.setAttribute("d", e3);
        }), e2.interact.capturedDataPointIndex = t2, a2.attr("data:pieClicked", "true");
      }
      const o2 = parseInt(a2.attr("data:startAngle"), 10), r2 = parseInt(a2.attr("data:angle"), 10), n2 = s2.getPiePath({ me: s2, startAngle: o2, angle: r2, size: i2 });
      360 !== r2 && a2.plot(n2);
    }
    getChangedPath(t2, e2) {
      let s2 = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (s2 = this.getPiePath({ me: this, startAngle: t2, angle: e2 - t2, size: this.size })), s2;
    }
    getPiePath({ me: t2, startAngle: e2, angle: s2, size: i2 }) {
      let a2;
      const o2 = new N(this.w), r2 = e2, n2 = Math.PI * (r2 - 90) / 180;
      let l2 = s2 + e2;
      Math.ceil(l2) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (l2 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(l2) > this.fullAngle && (l2 -= this.fullAngle);
      const h2 = Math.PI * (l2 - 90) / 180, c2 = t2.centerX + i2 * Math.cos(n2), d2 = t2.centerY + i2 * Math.sin(n2), g2 = t2.centerX + i2 * Math.cos(h2), p2 = t2.centerY + i2 * Math.sin(h2), u2 = m.polarToCartesian(t2.centerX, t2.centerY, t2.donutSize, l2), x2 = m.polarToCartesian(t2.centerX, t2.centerY, t2.donutSize, r2), f2 = s2 > 180 ? 1 : 0, b2 = ["M", c2, d2, "A", i2, i2, 0, f2, 1, g2, p2];
      return a2 = "donut" === t2.chartType ? [...b2, "L", u2.x, u2.y, "A", t2.donutSize, t2.donutSize, 0, f2, 0, x2.x, x2.y, "L", c2, d2, "z"].join(" ") : "pie" === t2.chartType || "polarArea" === t2.chartType ? [...b2, "L", t2.centerX, t2.centerY, "L", c2, d2].join(" ") : [...b2].join(" "), o2.roundPathCorners(a2, 2 * this.strokeWidth);
    }
    drawPolarElements(t2) {
      const e2 = this.w, s2 = new Q(this.w), i2 = new N(this.w), a2 = new Ke(this.w), o2 = i2.group(), r2 = i2.group(), n2 = s2.niceScale(0, Math.ceil(this.maxY), 0), l2 = n2.result.reverse(), h2 = n2.result.length;
      this.maxY = n2.niceMax;
      let c2 = e2.globals.radialSize;
      const d2 = c2 / (h2 - 1);
      for (let t3 = 0; t3 < h2 - 1; t3++) {
        const s3 = i2.drawCircle(c2);
        if (s3.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e2.config.plotOptions.polarArea.rings.strokeWidth, stroke: e2.config.plotOptions.polarArea.rings.strokeColor }), e2.config.yaxis[0].show) {
          const s4 = a2.drawYAxisTexts(this.centerX, this.centerY - c2 + parseInt(e2.config.yaxis[0].labels.style.fontSize, 10) / 2, t3, l2[t3]);
          r2.add(s4);
        }
        o2.add(s3), c2 -= d2;
      }
      this.drawSpokes(t2), t2.add(o2), t2.add(r2);
    }
    renderInnerDataLabels(t2, e2, s2) {
      const i2 = this.w, a2 = new N(this.w), o2 = e2.total.show;
      t2.node.innerHTML = "", t2.node.style.opacity = s2.opacity;
      const r2 = s2.centerX, n2 = this.donutDataLabels.total.label ? s2.centerY : s2.centerY - s2.centerY / 6;
      let l2, h2;
      l2 = void 0 === e2.name.color ? i2.globals.colors[0] : e2.name.color;
      let c2 = e2.name.fontSize, d2 = e2.name.fontFamily, g2 = e2.name.fontWeight;
      h2 = void 0 === e2.value.color ? i2.config.chart.foreColor : e2.value.color;
      const p2 = e2.value.formatter;
      let u2 = "", x2 = "";
      if (o2 ? (l2 = e2.total.color, c2 = e2.total.fontSize, d2 = e2.total.fontFamily, g2 = e2.total.fontWeight, x2 = this.donutDataLabels.total.label ? e2.total.label : "", u2 = e2.total.formatter(i2)) : 1 === i2.seriesData.series.length && (u2 = p2(i2.seriesData.series[0], i2), x2 = i2.seriesData.seriesNames[0]), x2 && (x2 = e2.name.formatter(x2, e2.total.show, i2)), e2.name.show) {
        const s3 = a2.drawText({ x: r2, y: n2 + parseFloat(e2.name.offsetY), text: x2, textAnchor: "middle", foreColor: l2, fontSize: c2, fontWeight: g2, fontFamily: d2 });
        s3.node.classList.add("apexcharts-datalabel-label"), t2.add(s3);
      }
      if (e2.value.show) {
        const s3 = e2.name.show ? parseFloat(e2.value.offsetY) + 16 : e2.value.offsetY, i3 = a2.drawText({ x: r2, y: n2 + s3, text: u2, textAnchor: "middle", foreColor: h2, fontWeight: e2.value.fontWeight, fontSize: e2.value.fontSize, fontFamily: e2.value.fontFamily });
        i3.node.classList.add("apexcharts-datalabel-value"), t2.add(i3);
      }
      return t2;
    }
    printInnerLabels(t2, e2, s2, i2) {
      const a2 = this.w;
      let o2;
      i2 ? o2 = void 0 === t2.name.color ? a2.globals.colors[parseInt(i2.parentNode.getAttribute("rel"), 10) - 1] : t2.name.color : a2.seriesData.series.length > 1 && t2.total.show && (o2 = t2.total.color);
      const r2 = a2.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n2 = a2.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      s2 = (0, t2.value.formatter)(s2, a2), i2 || "function" != typeof t2.total.formatter || (s2 = t2.total.formatter(a2));
      const l2 = e2 === t2.total.label;
      if (e2 = this.donutDataLabels.total.label ? t2.name.formatter(e2, l2, a2) : "", null !== r2 && (r2.textContent = e2), null !== n2 && (n2.textContent = s2), null !== r2) {
        r2.style.fill = o2;
      }
    }
    printDataLabelsInner(t2, e2) {
      const s2 = this.w, i2 = t2.getAttribute("data:value"), a2 = s2.seriesData.seriesNames[parseInt(t2.parentNode.getAttribute("rel"), 10) - 1];
      s2.seriesData.series.length > 1 && this.printInnerLabels(e2, a2, i2, t2);
      const o2 = s2.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      if (null !== o2) {
        o2.style.opacity = "1";
      }
    }
    drawSpokes(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = e2.config.plotOptions.polarArea.spokes;
      if (0 === i2.strokeWidth) return;
      const a2 = [], o2 = 360 / e2.seriesData.series.length;
      for (let t3 = 0; t3 < e2.seriesData.series.length; t3++) a2.push(m.polarToCartesian(this.centerX, this.centerY, e2.globals.radialSize, e2.config.plotOptions.pie.startAngle + o2 * t3));
      a2.forEach((e3, a3) => {
        const o3 = s2.drawLine(e3.x, e3.y, this.centerX, this.centerY, Array.isArray(i2.connectorColors) ? i2.connectorColors[a3] : i2.connectorColors);
        t2.add(o3);
      });
    }
    revertDataLabelsInner() {
      const t2 = this.w;
      if (this.donutDataLabels.show) {
        const e2 = t2.dom.Paper.findOne(".apexcharts-datalabels-group"), s2 = this.renderInnerDataLabels(e2, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        t2.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(s2);
      }
    }
  }
  function Qe(t2, e2) {
    let s2 = 0;
    for (let e3 = 0; e3 < t2.length; e3++) s2 += t2[e3];
    const i2 = e2 / s2, a2 = new Array(t2.length);
    for (let e3 = 0; e3 < t2.length; e3++) a2[e3] = t2[e3] * i2;
    return a2;
  }
  function ts(t2, e2, s2, i2) {
    const a2 = i2 * i2, o2 = s2 * s2;
    return Math.max(a2 * e2 / o2, o2 / (a2 * t2));
  }
  function es(t2, e2, s2, i2, a2, o2) {
    if (0 === t2) return true;
    return ts(e2, s2, i2, o2) >= ts(Math.min(e2, a2), Math.max(s2, a2), i2 + a2, o2);
  }
  function ss(t2, e2, s2, i2, a2, o2, r2, n2) {
    if (r2 >= n2) {
      const r3 = i2 / n2;
      let l2 = o2;
      for (let i3 = 0; i3 < s2; i3++) {
        const s3 = e2[i3] / r3;
        t2.push([a2, l2, a2 + r3, l2 + s3]), l2 += s3;
      }
    } else {
      const n3 = i2 / r2;
      let l2 = a2;
      for (let i3 = 0; i3 < s2; i3++) {
        const s3 = e2[i3] / n3;
        t2.push([l2, o2, l2 + s3, o2 + n3]), l2 += s3;
      }
    }
  }
  function is(t2, e2, s2, i2, a2) {
    const o2 = [], r2 = t2.length;
    if (0 === r2) return o2;
    const n2 = new Array(r2);
    let l2 = 0, h2 = 0, c2 = 1 / 0, d2 = -1 / 0, g2 = 0;
    for (; g2 < r2; ) {
      const r3 = Math.min(i2, a2), p2 = t2[g2];
      if (es(l2, c2, d2, h2, p2, r3)) n2[l2] = p2, l2++, h2 += p2, p2 < c2 && (c2 = p2), p2 > d2 && (d2 = p2), g2++;
      else {
        if (ss(o2, n2, l2, h2, e2, s2, i2, a2), i2 >= a2) {
          const t3 = h2 / a2;
          e2 += t3, i2 -= t3;
        } else {
          const t3 = h2 / i2;
          s2 += t3, a2 -= t3;
        }
        l2 = 0, h2 = 0, c2 = 1 / 0, d2 = -1 / 0;
      }
    }
    return l2 > 0 && ss(o2, n2, l2, h2, e2, s2, i2, a2), o2;
  }
  const as = { generate: function(t2, e2, s2) {
    const i2 = t2.length, a2 = new Array(i2);
    for (let e3 = 0; e3 < i2; e3++) {
      let s3 = 0;
      const i3 = t2[e3];
      for (let t3 = 0; t3 < i3.length; t3++) s3 += i3[t3];
      a2[e3] = s3;
    }
    const o2 = is(Qe(a2, e2 * s2), 0, 0, e2, s2), r2 = new Array(i2);
    for (let e3 = 0; e3 < i2; e3++) {
      const s3 = o2[e3], i3 = s3[0], a3 = s3[1], n2 = s3[2] - i3, l2 = s3[3] - a3;
      r2[e3] = is(Qe(t2[e3], n2 * l2), i3, a3, n2, l2);
    }
    return r2;
  } };
  return me.use({ line: Ze, area: Ze, scatter: Ze, bubble: Ze, rangeArea: Ze, bar: Xe, column: Xe, barStacked: class extends Xe {
    draw(t2, e2) {
      const s2 = this.w;
      this.graphics = new N(this.w), this.bar = new Xe(this.w, this.ctx, this.xyRatios);
      const i2 = new F(this.w);
      t2 = i2.getLogSeries(t2), this.yRatio = i2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2), "100%" === s2.config.chart.stackType && (t2 = s2.globals.comboCharts ? e2.map((t3) => s2.globals.seriesPercent[t3]) : s2.globals.seriesPercent.slice()), this.series = t2, this.barHelpers.initializeStackedPrevVars(this);
      const a2 = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      let o2 = 0, r2 = 0;
      for (let i3 = 0, h2 = 0; i3 < t2.length; i3++, h2++) {
        const c2 = s2.globals.comboCharts ? e2[i3] : i3, { groupIndex: d2, columnGroupIndex: g2 } = this.barHelpers.getGroupIndex(c2);
        this.groupCtx = this[s2.labelData.seriesGroups[d2]];
        const p2 = [], u2 = [];
        let x2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = s2.globals.seriesYAxisReverseMap[c2][0], x2 = c2), this.isReversed = s2.config.yaxis[this.yaxisIndex] && s2.config.yaxis[this.yaxisIndex].reversed;
        let f2 = this.graphics.group({ class: "apexcharts-series", seriesName: m.escapeString(s2.seriesData.seriesNames[c2]), rel: i3 + 1, "data:realIndex": c2 });
        lt.addCollapsedClassToSeries(this.w, f2, c2);
        const b2 = this.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": c2 }), y2 = this.graphics.group({ class: "apexcharts-bar-goals-markers" }), w2 = this.initialPositions(o2, r2, void 0, void 0, void 0, void 0, x2), { xDivision: v2, yDivision: A2, zeroH: C2, zeroW: S2 } = w2;
        let k2 = w2.barHeight, D2 = w2.barWidth;
        r2 = w2.y, o2 = w2.x, s2.globals.barHeight = k2, s2.globals.barWidth = D2, this.barHelpers.initializeStackedXYVars(this), 1 === this.groupCtx.prevY.length && this.groupCtx.prevY[0].every((t3) => isNaN(t3)) && (this.groupCtx.prevY[0] = this.groupCtx.prevY[0].map(() => C2), this.groupCtx.prevYF[0] = this.groupCtx.prevYF[0].map(() => 0));
        for (let e3 = 0; e3 < s2.globals.dataPoints; e3++) {
          const a3 = this.barHelpers.getStrokeWidth(i3, e3, c2), m2 = { indexes: { i: i3, j: e3, realIndex: c2, translationsIndex: x2, bc: h2 }, strokeWidth: a3, x: o2, y: r2, elSeries: f2, columnGroupIndex: g2, seriesGroup: s2.labelData.seriesGroups[d2] };
          let w3 = null;
          this.isHorizontal ? (w3 = this.drawStackedBarPaths(l(n({}, m2), { zeroW: S2, barHeight: k2, yDivision: A2 })), D2 = this.series[i3][e3] / this.invertedYRatio) : (w3 = this.drawStackedColumnPaths(l(n({}, m2), { xDivision: v2, barWidth: D2, zeroH: C2 })), k2 = this.series[i3][e3] / this.yRatio[x2]);
          const L2 = this.barHelpers.drawGoalLine({ barXPosition: w3.barXPosition, barYPosition: w3.barYPosition, goalX: w3.goalX, goalY: w3.goalY, barHeight: k2, barWidth: D2 });
          L2 && y2.add(L2), r2 = w3.y, o2 = w3.x, p2.push(o2), u2.push(r2);
          const M2 = this.barHelpers.getPathFillColor(t2, i3, e3, c2);
          let P2 = "";
          const T2 = s2.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
          ("bottom" === this.barHelpers.arrBorderRadius[c2][e3] && s2.seriesData.series[c2][e3] > 0 || "top" === this.barHelpers.arrBorderRadius[c2][e3] && s2.seriesData.series[c2][e3] < 0) && (P2 = T2), f2 = this.renderSeries(l(n({ realIndex: c2, pathFill: M2.color }, M2.useRangeColor ? { lineFill: M2.color } : {}), { j: e3, i: i3, columnGroupIndex: g2, pathFrom: w3.pathFrom, pathTo: w3.pathTo, strokeWidth: a3, elSeries: f2, x: o2, y: r2, series: t2, barHeight: k2, barWidth: D2, elDataLabelsWrap: b2, elGoalsMarkers: y2, type: "bar", visibleSeries: g2, classes: P2 }));
        }
        s2.globals.seriesXvalues[c2] = p2, s2.globals.seriesYvalues[c2] = u2, this.groupCtx.prevY.push(this.groupCtx.yArrj), this.groupCtx.prevYF.push(this.groupCtx.yArrjF), this.groupCtx.prevYVal.push(this.groupCtx.yArrjVal), this.groupCtx.prevX.push(this.groupCtx.xArrj), this.groupCtx.prevXF.push(this.groupCtx.xArrjF), this.groupCtx.prevXVal.push(this.groupCtx.xArrjVal), a2.add(f2);
      }
      return a2;
    }
    initialPositions(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = this.w;
      let l2, h2;
      if (this.isHorizontal) {
        i2 = n2.layout.gridHeight / n2.globals.dataPoints;
        const t3 = n2.config.plotOptions.bar.barHeight;
        l2 = -1 === String(t3).indexOf("%") ? parseInt(t3, 10) : i2 * parseInt(t3, 10) / 100, o2 = n2.globals.padHorizontal + (this.isReversed ? n2.layout.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e2 = (i2 - l2) / 2;
      } else {
        h2 = s2 = n2.layout.gridWidth / n2.globals.dataPoints;
        const e3 = n2.config.plotOptions.bar.columnWidth;
        n2.axisFlags.isXNumeric && n2.globals.dataPoints > 1 ? h2 = (s2 = n2.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : -1 === String(e3).indexOf("%") ? h2 = parseInt(e3, 10) : h2 *= parseInt(e3, 10) / 100, a2 = this.isReversed ? this.baseLineY[r2] : n2.layout.gridHeight - this.baseLineY[r2], t2 = n2.globals.padHorizontal + (s2 - h2) / 2;
      }
      const c2 = n2.globals.barGroups.length || 1;
      return { x: t2, y: e2, yDivision: i2, xDivision: s2, barHeight: (null != l2 ? l2 : 0) / c2, barWidth: (null != h2 ? h2 : 0) / c2, zeroH: a2, zeroW: o2 };
    }
    drawStackedBarPaths({ indexes: t2, barHeight: e2, strokeWidth: s2, zeroW: i2, x: a2, y: o2, columnGroupIndex: r2, seriesGroup: n2, yDivision: l2, elSeries: h2 }) {
      var c2, d2, g2, p2, u2;
      const x2 = this.w, f2 = o2 + r2 * e2;
      let b2;
      const m2 = t2.i, y2 = t2.j, w2 = t2.realIndex, v2 = t2.translationsIndex;
      let A2 = 0;
      for (let t3 = 0; t3 < this.groupCtx.prevXF.length; t3++) A2 += this.groupCtx.prevXF[t3][y2];
      let C2 = m2;
      if (x2.config.series[w2].name && (C2 = n2.indexOf(x2.config.series[w2].name)), C2 > 0) {
        let t3 = i2;
        this.groupCtx.prevXVal[C2 - 1][y2] < 0 ? t3 = (null == (c2 = this.series[m2]) ? void 0 : c2[y2]) >= 0 ? this.groupCtx.prevX[C2 - 1][y2] + A2 - 2 * (this.isReversed ? A2 : 0) : this.groupCtx.prevX[C2 - 1][y2] : this.groupCtx.prevXVal[C2 - 1][y2] >= 0 && (t3 = (null == (d2 = this.series[m2]) ? void 0 : d2[y2]) >= 0 ? this.groupCtx.prevX[C2 - 1][y2] : this.groupCtx.prevX[C2 - 1][y2] - A2 + 2 * (this.isReversed ? A2 : 0)), b2 = t3;
      } else b2 = i2;
      a2 = null === (null == (g2 = this.series[m2]) ? void 0 : g2[y2]) ? b2 : b2 + (null == (p2 = this.series[m2]) ? void 0 : p2[y2]) / this.invertedYRatio - 2 * (this.isReversed ? (null == (u2 = this.series[m2]) ? void 0 : u2[y2]) / this.invertedYRatio : 0);
      const S2 = this.barHelpers.getBarpaths({ barYPosition: f2, barHeight: e2, x1: b2, x2: a2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: t2.realIndex, seriesGroup: n2, i: m2, j: y2, w: x2 });
      return this.barHelpers.barBackground({ j: y2, i: m2, y1: f2, y2: e2, elSeries: h2 }), o2 += l2, { pathTo: S2.pathTo, pathFrom: S2.pathFrom, goalX: this.barHelpers.getGoalValues("x", i2, null, m2, y2, v2), barXPosition: b2, barYPosition: f2, x: a2, y: o2 };
    }
    drawStackedColumnPaths({ indexes: t2, x: e2, y: s2, xDivision: i2, barWidth: a2, zeroH: o2, columnGroupIndex: r2, seriesGroup: n2, elSeries: l2 }) {
      var h2, c2, d2, g2, p2, u2, x2, f2, b2;
      const m2 = this.w, y2 = t2.i, w2 = t2.j, v2 = t2.bc, A2 = t2.realIndex, C2 = t2.translationsIndex;
      if (m2.axisFlags.isXNumeric) {
        let t3 = m2.seriesData.seriesX[A2][w2];
        t3 || (t3 = 0), e2 = (t3 - m2.globals.minX) / this.xRatio - a2 / 2 * m2.globals.barGroups.length;
      }
      const S2 = e2 + r2 * a2;
      let k2, D2 = 0;
      for (let t3 = 0; t3 < this.groupCtx.prevYF.length; t3++) D2 += isNaN(this.groupCtx.prevYF[t3][w2]) ? 0 : this.groupCtx.prevYF[t3][w2];
      let L2 = y2;
      if (n2 && (L2 = n2.indexOf(m2.seriesData.seriesNames[A2])), L2 > 0 && !m2.axisFlags.isXNumeric || L2 > 0 && m2.axisFlags.isXNumeric && m2.seriesData.seriesX[A2 - 1][w2] === m2.seriesData.seriesX[A2][w2]) {
        let t3, e3;
        const s3 = Math.min(this.yRatio.length + 1, A2 + 1);
        if (void 0 !== this.groupCtx.prevY[L2 - 1] && this.groupCtx.prevY[L2 - 1].length) {
          for (let t4 = 1; t4 < s3; t4++) if (!isNaN(null == (h2 = this.groupCtx.prevY[L2 - t4]) ? void 0 : h2[w2])) {
            e3 = this.groupCtx.prevY[L2 - t4][w2];
            break;
          }
        }
        for (let i3 = 1; i3 < s3; i3++) {
          if ((null == (c2 = this.groupCtx.prevYVal[L2 - i3]) ? void 0 : c2[w2]) < 0) {
            t3 = (null == (d2 = this.series[y2]) ? void 0 : d2[w2]) >= 0 ? e3 - D2 + 2 * (this.isReversed ? D2 : 0) : e3;
            break;
          }
          if ((null == (g2 = this.groupCtx.prevYVal[L2 - i3]) ? void 0 : g2[w2]) >= 0) {
            t3 = (null == (p2 = this.series[y2]) ? void 0 : p2[w2]) >= 0 ? e3 : e3 + D2 - 2 * (this.isReversed ? D2 : 0);
            break;
          }
        }
        void 0 === t3 && (t3 = m2.layout.gridHeight), k2 = (null == (u2 = this.groupCtx.prevYF[0]) ? void 0 : u2.every((t4) => 0 === t4)) && this.groupCtx.prevYF.slice(1, L2).every((t4) => t4.every((t5) => isNaN(t5))) ? o2 : t3;
      } else k2 = o2;
      s2 = (null == (x2 = this.series[y2]) ? void 0 : x2[w2]) ? k2 - (null == (f2 = this.series[y2]) ? void 0 : f2[w2]) / this.yRatio[C2] + 2 * (this.isReversed ? (null == (b2 = this.series[y2]) ? void 0 : b2[w2]) / this.yRatio[C2] : 0) : k2;
      const M2 = this.barHelpers.getColumnPaths({ barXPosition: S2, barWidth: a2, y1: k2, y2: s2, yRatio: this.yRatio[C2], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: n2, realIndex: t2.realIndex, i: y2, j: w2, w: m2 });
      return this.barHelpers.barBackground({ bc: v2, j: w2, i: y2, x1: S2, x2: a2, elSeries: l2 }), { pathTo: M2.pathTo, pathFrom: M2.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, o2, y2, w2, 0), barXPosition: S2, x: m2.axisFlags.isXNumeric ? e2 : e2 + i2, y: s2 };
    }
  }, rangeBar: class extends Xe {
    draw(t2, e2) {
      var s2, i2, a2, o2, r2, l2, h2, c2, d2;
      const g2 = this.w, p2 = new N(this.w);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t2, this.seriesRangeStart = g2.rangeData.seriesRangeStart, this.seriesRangeEnd = g2.rangeData.seriesRangeEnd, this.barHelpers.initVariables(t2);
      const u2 = p2.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" });
      for (let x2 = 0; x2 < t2.length; x2++) {
        let f2, b2;
        const y2 = g2.globals.comboCharts ? e2[x2] : x2, { columnGroupIndex: w2 } = this.barHelpers.getGroupIndex(y2), v2 = p2.group({ class: "apexcharts-series", seriesName: m.escapeString(g2.seriesData.seriesNames[y2]), rel: x2 + 1, "data:realIndex": y2 });
        lt.addCollapsedClassToSeries(this.w, v2, y2), t2[x2].length > 0 && (this.visibleI = this.visibleI + 1);
        let A2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = g2.globals.seriesYAxisReverseMap[y2][0], A2 = y2);
        const C2 = this.barHelpers.initialPositions(y2), { y: S2, zeroW: k2, x: D2, zeroH: L2 } = C2;
        let M2 = null != (s2 = C2.barWidth) ? s2 : 0, P2 = null != (i2 = C2.barHeight) ? i2 : 0;
        const T2 = null != (a2 = C2.yDivision) ? a2 : 0, F2 = null != (o2 = C2.xDivision) ? o2 : 0;
        b2 = S2, f2 = D2;
        const E2 = p2.group({ class: "apexcharts-datalabels", "data:realIndex": y2 }), I2 = p2.group({ class: "apexcharts-rangebar-goals-markers" });
        for (let e3 = 0; e3 < g2.globals.dataPoints; e3++) {
          const s3 = this.barHelpers.getStrokeWidth(x2, e3, y2), i3 = this.seriesRangeStart[x2][e3], a3 = this.seriesRangeEnd[x2][e3];
          let o3 = null, p3 = null, u3 = null;
          const m2 = { x: f2, y: b2, strokeWidth: s3, elSeries: v2 };
          let S3 = this.seriesLen;
          if (g2.config.plotOptions.bar.rangeBarGroupRows && (S3 = 1), void 0 === (null == (r2 = g2.config.series[x2].data) ? void 0 : r2[e3])) break;
          if (this.isHorizontal) {
            u3 = b2 + P2 * this.visibleI;
            const t3 = (T2 - P2 * S3) / 2;
            if (null == (h2 = null == (l2 = g2.config.series[x2].data) ? void 0 : l2[e3]) ? void 0 : h2.x) {
              const s4 = this.detectOverlappingBars({ i: x2, j: e3, barYPosition: u3, srty: t3, barHeight: P2, yDivision: T2, initPositions: C2 });
              P2 = s4.barHeight, u3 = s4.barYPosition;
            }
            o3 = this.drawRangeBarPaths(n({ indexes: { i: x2, j: e3, realIndex: y2 }, barHeight: P2, barYPosition: u3, zeroW: k2, yDivision: T2, y1: i3, y2: a3 }, m2)), M2 = o3.barWidth;
          } else {
            g2.axisFlags.isXNumeric && (f2 = (g2.seriesData.seriesX[x2][e3] - g2.globals.minX) / this.xRatio - M2 / 2), p3 = f2 + M2 * this.visibleI;
            const t3 = (F2 - M2 * S3) / 2;
            if (null == (d2 = null == (c2 = g2.config.series[x2].data) ? void 0 : c2[e3]) ? void 0 : d2.x) {
              const s4 = this.detectOverlappingBars({ i: x2, j: e3, barXPosition: p3, srtx: t3, barWidth: M2, xDivision: F2, initPositions: C2 });
              M2 = s4.barWidth, p3 = s4.barXPosition;
            }
            o3 = this.drawRangeColumnPaths(n({ indexes: { i: x2, j: e3, realIndex: y2, translationsIndex: A2 }, barWidth: M2, barXPosition: p3, zeroH: L2, xDivision: F2 }, m2)), P2 = o3.barHeight;
          }
          const D3 = this.barHelpers.drawGoalLine({ barXPosition: o3.barXPosition, barYPosition: u3, goalX: o3.goalX, goalY: o3.goalY, barHeight: P2, barWidth: M2 });
          D3 && I2.add(D3), b2 = o3.y, f2 = o3.x;
          const X2 = this.barHelpers.getPathFillColor(t2, x2, e3, y2);
          this.renderSeries({ realIndex: y2, pathFill: X2.color, lineFill: X2.useRangeColor ? X2.color : g2.globals.stroke.colors[y2], j: e3, i: x2, x: f2, y: b2, y1: i3, y2: a3, pathFrom: o3.pathFrom, pathTo: o3.pathTo, strokeWidth: s3, elSeries: v2, series: t2, barHeight: P2, barWidth: M2, barXPosition: p3, barYPosition: u3, columnGroupIndex: w2, elDataLabelsWrap: E2, elGoalsMarkers: I2, visibleSeries: this.visibleI, type: "rangebar" });
        }
        u2.add(v2);
      }
      return u2;
    }
    detectOverlappingBars({ i: t2, j: e2, barYPosition: s2, barXPosition: i2, srty: a2, srtx: o2, barHeight: r2, barWidth: n2, yDivision: l2, xDivision: h2, initPositions: c2 }) {
      var d2, g2, p2, u2;
      const x2 = this.w;
      let f2 = [];
      const b2 = null == (g2 = null == (d2 = x2.config.series[t2].data) ? void 0 : d2[e2]) ? void 0 : g2.rangeName, m2 = null == (u2 = null == (p2 = x2.config.series[t2].data) ? void 0 : p2[e2]) ? void 0 : u2.x, y2 = Array.isArray(m2) ? m2.join(" ") : m2, w2 = x2.labelData.labels.map((t3) => Array.isArray(t3) ? t3.join(" ") : t3).indexOf(y2), v2 = x2.rangeData.seriesRange[t2].findIndex((t3) => {
        var e3;
        return t3.x === y2 && (null == (e3 = t3.overlaps) ? void 0 : e3.size) > 0;
      });
      return this.isHorizontal ? (s2 = x2.config.plotOptions.bar.rangeBarGroupRows ? a2 + l2 * w2 : a2 + r2 * this.visibleI + l2 * w2, v2 > -1 && !x2.config.plotOptions.bar.rangeBarOverlap && (f2 = Array.from(x2.rangeData.seriesRange[t2][v2].overlaps), f2.indexOf(b2) > -1 && (s2 = (r2 = c2.barHeight / f2.length) * this.visibleI + l2 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r2 * (this.visibleI + f2.indexOf(b2)) + l2 * w2))) : (w2 > -1 && !x2.labelData.timescaleLabels.length && (i2 = x2.config.plotOptions.bar.rangeBarGroupRows ? o2 + h2 * w2 : o2 + n2 * this.visibleI + h2 * w2), v2 > -1 && !x2.config.plotOptions.bar.rangeBarOverlap && (f2 = Array.from(x2.rangeData.seriesRange[t2][v2].overlaps), f2.indexOf(b2) > -1 && (i2 = (n2 = c2.barWidth / f2.length) * this.visibleI + h2 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + n2 * (this.visibleI + f2.indexOf(b2)) + h2 * w2))), { barYPosition: s2, barXPosition: i2, barHeight: r2, barWidth: n2 };
    }
    drawRangeColumnPaths({ indexes: t2, x: e2, xDivision: s2, barWidth: i2, barXPosition: a2, zeroH: o2 }) {
      var r2, n2;
      const l2 = this.w, { i: h2, j: c2, realIndex: d2, translationsIndex: g2 } = t2, p2 = this.yRatio[g2], u2 = this.getRangeValue(d2, c2);
      let x2 = Math.min(u2.start, u2.end), f2 = Math.max(u2.start, u2.end);
      void 0 === (null == (r2 = this.series[h2]) ? void 0 : r2[c2]) || null === (null == (n2 = this.series[h2]) ? void 0 : n2[c2]) ? x2 = o2 : (x2 = o2 - x2 / p2, f2 = o2 - f2 / p2);
      const b2 = Math.abs(f2 - x2), m2 = this.barHelpers.getColumnPaths({ barXPosition: a2, barWidth: i2, y1: x2, y2: f2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: d2, i: d2, j: c2, w: l2 });
      if (l2.axisFlags.isXNumeric) {
        const t3 = this.getBarXForNumericXAxis({ x: e2, j: c2, realIndex: d2, barWidth: i2 });
        e2 = t3.x, a2 = t3.barXPosition;
      } else e2 += s2;
      return { pathTo: m2.pathTo, pathFrom: m2.pathFrom, barHeight: b2, x: e2, y: u2.start < 0 && u2.end < 0 ? x2 : f2, goalY: this.barHelpers.getGoalValues("y", null, o2, h2, c2, g2), barXPosition: a2 };
    }
    preventBarOverflow(t2) {
      const e2 = this.w;
      return t2 < 0 && (t2 = 0), t2 > e2.layout.gridWidth && (t2 = e2.layout.gridWidth), t2;
    }
    drawRangeBarPaths({ indexes: t2, y: e2, y1: s2, y2: i2, yDivision: a2, barHeight: o2, barYPosition: r2, zeroW: n2 }) {
      const l2 = this.w, { realIndex: h2, j: c2 } = t2, d2 = this.preventBarOverflow(n2 + s2 / this.invertedYRatio), g2 = this.preventBarOverflow(n2 + i2 / this.invertedYRatio), p2 = this.getRangeValue(h2, c2), u2 = Math.abs(g2 - d2), x2 = this.barHelpers.getBarpaths({ barYPosition: r2, barHeight: o2, x1: d2, x2: g2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: h2, realIndex: h2, j: c2, w: l2 });
      return l2.axisFlags.isXNumeric || (e2 += a2), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, barWidth: u2, x: p2.start < 0 && p2.end < 0 ? d2 : g2, goalX: this.barHelpers.getGoalValues("x", n2, null, h2, c2, 0), y: e2 };
    }
    getRangeValue(t2, e2) {
      const s2 = this.w;
      return { start: s2.rangeData.seriesRangeStart[t2][e2], end: s2.rangeData.seriesRangeEnd[t2][e2] };
    }
  }, candlestick: Oe, boxPlot: Oe, violin: class extends Xe {
    draw(t2, e2, s2) {
      const i2 = this.w, a2 = new N(this.w), o2 = new G(this.w);
      this.violinOptions = i2.config.plotOptions.violin, this.pointsOptions = this.violinOptions.points, this.bandwidthScale = this.violinOptions.bandwidthScale || 1, this.normalize = this.violinOptions.normalize || "individual", this.distributed = i2.config.plotOptions.bar.distributed, this.isHorizontal = i2.config.plotOptions.bar.horizontal, this.coreUtils = new F(this.w), t2 = this.coreUtils.getLogSeries(t2), this.series = t2, this.yRatio = this.coreUtils.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t2);
      const r2 = a2.group({ class: "apexcharts-violin-series apexcharts-plot-series" });
      for (let e3 = 0; e3 < t2.length; e3++) {
        let n2, l2;
        const h2 = [], c2 = [], d2 = i2.globals.comboCharts ? s2[e3] : e3, { columnGroupIndex: g2 } = this.barHelpers.getGroupIndex(d2), p2 = a2.group({ class: "apexcharts-series", seriesName: m.escapeString(i2.seriesData.seriesNames[d2]), rel: e3 + 1, "data:realIndex": d2 });
        lt.addCollapsedClassToSeries(this.w, p2, d2), t2[e3].length > 0 && (this.visibleI = this.visibleI + 1);
        let u2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[d2][0], u2 = d2);
        const x2 = this.barHelpers.initialPositions(d2), { y: f2, barHeight: b2, yDivision: y2, zeroW: w2, x: v2, barWidth: A2, xDivision: C2, zeroH: S2 } = x2;
        l2 = f2, n2 = v2, c2.push(n2 + (null != A2 ? A2 : 0) / 2);
        const k2 = a2.group({ class: "apexcharts-datalabels", "data:realIndex": d2 });
        if (this.seriesMaxWeight = 0, "group" === this.normalize) {
          (i2.violinData.seriesViolinDensity[d2] || []).forEach((t3) => {
            t3 && t3.maxWeight > this.seriesMaxWeight && (this.seriesMaxWeight = t3.maxWeight);
          });
        }
        const D2 = [];
        for (let s3 = 0; s3 < i2.globals.dataPoints; s3++) {
          const a3 = this.barHelpers.getStrokeWidth(e3, s3, d2), r3 = this.isHorizontal ? this.drawHorizontalViolin({ indexes: { i: e3, j: s3, realIndex: d2, translationsIndex: u2 }, y: l2, yDivision: y2, barHeight: b2, zeroW: w2 }) : this.drawVerticalViolin({ indexes: { i: e3, j: s3, realIndex: d2, translationsIndex: u2 }, x: n2, xDivision: C2, barWidth: A2, zeroH: S2 });
          n2 = r3.x, l2 = r3.y, s3 > 0 && c2.push(r3.center), h2.push(r3.alongRepresentative);
          const x3 = this.buildPointsSubPath({ realIndex: d2, j: s3, center: r3.center, halfExtent: r3.halfExtent, alongFn: r3.alongFn, density: r3.density, maxWeight: r3.maxWeight });
          x3.length && D2.push({ groups: x3, j: s3 });
          const f3 = o2.fillPath({ seriesNumber: this.distributed ? s3 : d2, dataPointIndex: s3, color: this.distributed ? i2.globals.colors[s3] : void 0, value: t2[e3][s3] });
          this.renderSeries({ realIndex: d2, pathFill: f3, lineFill: i2.globals.stroke.colors[d2], j: s3, i: e3, pathFrom: r3.pathFrom, pathTo: r3.pathTo, strokeWidth: a3, elSeries: p2, x: n2, y: l2, series: t2, columnGroupIndex: g2, barHeight: b2, barWidth: A2, elDataLabelsWrap: k2, visibleSeries: this.visibleI, type: "violin" });
          const m2 = p2.node.querySelector(`path.apexcharts-violin-area[j='${s3}']`);
          m2 && isFinite(r3.alongRepresentative) && m2.setAttribute(this.isHorizontal ? "cx" : "cy", `${r3.alongRepresentative}`);
        }
        ze({ graphics: a2, w: i2, elSeries: p2, pointsByCat: D2, options: this.pointsOptions, distributed: this.distributed, realIndex: d2, wrapClass: "apexcharts-violin-points-wrap", pointClass: "apexcharts-violin-points" }), i2.globals.seriesXvalues[d2] = c2, i2.globals.seriesYvalues[d2] = h2, r2.add(p2);
      }
      return r2;
    }
    drawVerticalViolin({ indexes: t2, x: e2, xDivision: s2, barWidth: i2, zeroH: a2 }) {
      var o2;
      const r2 = this.w, { realIndex: n2, j: l2, translationsIndex: h2 } = t2, c2 = this.yRatio[h2];
      r2.axisFlags.isXNumeric && (e2 = (r2.seriesData.seriesX[n2][l2] - r2.globals.minX) / this.xRatio - i2 / 2);
      const d2 = e2 + i2 * this.visibleI + i2 / 2, g2 = i2 / 2, p2 = this.getDensity(n2, l2), u2 = this.effectiveMaxWeight(p2), x2 = (t3) => a2 - this.logVal(t3, n2) / c2, f2 = this.buildBodyPath({ nodes: p2.nodes, center: d2, halfExtent: g2, maxWeight: u2, vertical: true, alongFn: x2, collapsed: false });
      let b2;
      return b2 = r2.globals.previousPaths.length > 0 ? this.getPreviousPath(n2, l2, f2) : this.buildBodyPath({ nodes: p2.nodes, center: d2, halfExtent: g2, maxWeight: u2, vertical: true, alongFn: x2, collapsed: true }), r2.axisFlags.isXNumeric || (e2 += s2), { pathTo: f2, pathFrom: b2, x: e2, y: a2, center: d2, halfExtent: g2, alongFn: x2, density: p2, maxWeight: u2, alongRepresentative: x2(null != (o2 = this.series[t2.i][l2]) ? o2 : 0) };
    }
    drawHorizontalViolin({ indexes: t2, y: e2, yDivision: s2, barHeight: i2, zeroW: a2 }) {
      var o2;
      const r2 = this.w, { realIndex: n2, j: l2 } = t2, h2 = this.invertedYRatio;
      r2.axisFlags.isXNumeric && (e2 = (r2.seriesData.seriesX[n2][l2] - r2.globals.minX) / this.invertedXRatio - i2 / 2);
      const c2 = e2 + i2 * this.visibleI + i2 / 2, d2 = i2 / 2, g2 = this.getDensity(n2, l2), p2 = this.effectiveMaxWeight(g2), u2 = (t3) => a2 + this.logVal(t3, n2) / h2, x2 = this.buildBodyPath({ nodes: g2.nodes, center: c2, halfExtent: d2, maxWeight: p2, vertical: false, alongFn: u2, collapsed: false });
      let f2;
      return f2 = r2.globals.previousPaths.length > 0 ? this.getPreviousPath(n2, l2, x2) : this.buildBodyPath({ nodes: g2.nodes, center: c2, halfExtent: d2, maxWeight: p2, vertical: false, alongFn: u2, collapsed: true }), r2.axisFlags.isXNumeric || (e2 += s2), { pathTo: x2, pathFrom: f2, x: a2, y: e2, center: c2, halfExtent: d2, alongFn: u2, maxWeight: p2, density: g2, alongRepresentative: u2(null != (o2 = this.series[t2.i][l2]) ? o2 : 0) };
    }
    getDensity(t2, e2) {
      var s2;
      const i2 = null == (s2 = this.w.violinData.seriesViolinDensity[t2]) ? void 0 : s2[e2];
      if (!i2 || !i2.values.length) return { nodes: [], maxWeight: 0 };
      const a2 = i2.values.map((t3, e3) => e3);
      a2.sort((t3, e3) => i2.values[t3] - i2.values[e3]);
      const o2 = [];
      let r2 = null;
      for (const t3 of a2) {
        const e3 = i2.values[t3];
        null !== r2 && e3 === r2 || (o2.push({ v: e3, w: i2.weights[t3] }), r2 = e3);
      }
      return { nodes: o2, maxWeight: i2.maxWeight };
    }
    effectiveMaxWeight(t2) {
      return "group" === this.normalize && this.seriesMaxWeight > 0 ? this.seriesMaxWeight : t2.maxWeight;
    }
    buildBodyPath({ nodes: t2, center: e2, halfExtent: s2, maxWeight: i2, vertical: a2, alongFn: o2, collapsed: r2 }) {
      const n2 = new N(this.w);
      if (0 === t2.length) {
        const t3 = o2(0);
        return a2 ? n2.move(e2, t3) + n2.line(e2, t3) : n2.move(t3, e2) + n2.line(t3, e2);
      }
      const l2 = (t3) => {
        if (r2 || i2 <= 0) return 0;
        const e3 = t3 / i2 * s2 * this.bandwidthScale;
        return Math.min(s2, Math.max(0, e3));
      }, h2 = [], c2 = [];
      for (let s3 = 0; s3 < t2.length; s3++) {
        const i3 = o2(t2[s3].v), r3 = l2(t2[s3].w);
        a2 ? (h2.push([e2 + r3, i3]), c2.push([e2 - r3, i3])) : (h2.push([i3, e2 + r3]), c2.push([i3, e2 - r3]));
      }
      return c2.reverse(), this.smoothSegment(h2, a2, false) + this.smoothSegment(c2, a2, true) + "z";
    }
    smoothSegment(t2, e2, s2) {
      const i2 = new N(this.w), a2 = t2[0];
      let o2 = s2 ? i2.line(a2[0], a2[1]) : i2.move(a2[0], a2[1]);
      if (t2.length < 3 || !this.strictlyMonotonic(t2, e2)) {
        for (let e3 = 1; e3 < t2.length; e3++) o2 += i2.line(t2[e3][0], t2[e3][1]);
        return o2;
      }
      const r2 = t2.map(([t3, s3]) => e2 ? [s3, t3] : [t3, s3]), n2 = Ge.points(r2), l2 = e2 ? n2.map(Ve) : n2;
      return o2 += $e(l2), o2;
    }
    strictlyMonotonic(t2, e2) {
      const s2 = e2 ? 1 : 0;
      for (let e3 = 1; e3 < t2.length; e3++) if (t2[e3][s2] === t2[e3 - 1][s2]) return false;
      return true;
    }
    buildPointsSubPath({ realIndex: t2, j: e2, center: s2, halfExtent: i2, alongFn: a2, density: o2, maxWeight: r2 }) {
      var n2;
      return Re({ w: this.w, points: null == (n2 = this.w.violinData.seriesViolinPoints[t2]) ? void 0 : n2[e2], seedA: t2, seedB: e2, center: s2, halfExtent: i2, alongFn: a2, isHorizontal: this.isHorizontal, options: this.pointsOptions, clampAt: (t3) => this.halfWidthAtValue(t3, o2, i2, r2) });
    }
    halfWidthAtValue(t2, e2, s2, i2) {
      const { nodes: a2 } = e2, o2 = null != i2 ? i2 : e2.maxWeight;
      if (!a2.length || o2 <= 0) return 0;
      const r2 = (t3) => Math.min(s2, t3 / o2 * s2 * this.bandwidthScale);
      if (t2 <= a2[0].v) return r2(a2[0].w);
      if (t2 >= a2[a2.length - 1].v) return r2(a2[a2.length - 1].w);
      for (let e3 = 1; e3 < a2.length; e3++) if (t2 <= a2[e3].v) {
        const s3 = a2[e3 - 1], i3 = a2[e3], o3 = i3.v === s3.v ? 0 : (t2 - s3.v) / (i3.v - s3.v);
        return r2(s3.w + (i3.w - s3.w) * o3);
      }
      return 0;
    }
    logVal(t2, e2) {
      return this.coreUtils.getLogValAtSeriesIndex(t2, e2);
    }
  }, pie: Je, donut: Je, polarArea: Je, radialBar: class extends Je {
    constructor(t2, e2) {
      super(t2, e2), this.ctx = e2, this.w = t2, this.animBeginArr = [0], this.animDur = 0, this.startAngle = t2.config.plotOptions.radialBar.startAngle, this.endAngle = t2.config.plotOptions.radialBar.endAngle, this.totalAngle = Math.abs(t2.config.plotOptions.radialBar.endAngle - t2.config.plotOptions.radialBar.startAngle), this.trackStartAngle = t2.config.plotOptions.radialBar.track.startAngle, this.trackEndAngle = t2.config.plotOptions.radialBar.track.endAngle, this.barLabels = this.w.config.plotOptions.radialBar.barLabels, this.donutDataLabels = this.w.config.plotOptions.radialBar.dataLabels, this.radialDataLabels = this.donutDataLabels, this.trackStartAngle || (this.trackStartAngle = this.startAngle), this.trackEndAngle || (this.trackEndAngle = this.endAngle), 360 === this.endAngle && (this.endAngle = 359.99), this.margin = parseInt(t2.config.plotOptions.radialBar.track.margin, 10), this.onBarLabelClick = this.onBarLabelClick.bind(this);
    }
    draw(t2) {
      var e2;
      const s2 = this.w, i2 = new N(this.w), a2 = i2.group({ class: "apexcharts-radialbar" });
      if (s2.globals.noData) return a2;
      const o2 = i2.group(), r2 = this.defaultSize / 2, n2 = s2.layout.gridWidth / 2;
      let l2 = this.defaultSize / 2.05;
      s2.config.chart.sparkline.enabled || (l2 = l2 - s2.config.stroke.width - s2.config.chart.dropShadow.blur);
      const h2 = s2.globals.fill.colors, d2 = s2.config.plotOptions.radialBar, g2 = Array.isArray(d2.bands) && d2.bands.length > 0, p2 = g2 && d2.bandsStyle && d2.bandsStyle.hideTrackWhenPresent, u2 = "needle" === d2.shape;
      if (d2.track.show && !p2) {
        const e3 = this.drawTracks({ size: l2, centerX: n2, centerY: r2, colorArr: h2, series: t2 });
        o2.add(e3);
      }
      if (g2) {
        const e3 = this.drawBands({ size: l2, centerX: n2, centerY: r2, series: t2 });
        o2.add(e3);
      }
      const x2 = this.drawArcs({ size: l2, centerX: n2, centerY: r2, colorArr: h2, series: t2, skipValueArc: u2 && !(null == (e2 = d2.needle) ? void 0 : e2.showValueArc) });
      if (d2.ticks && d2.ticks.show) {
        const e3 = this.drawTicks({ size: l2, centerX: n2, centerY: r2, series: t2 });
        if (this.initialAnim && !s2.globals.dataChanged && !s2.globals.resized && c.isBrowser() && s2.globals.shouldAnimate) {
          const t3 = e3.node;
          t3.style.opacity = "0", t3.style.transition = "opacity 280ms ease-out";
          const i3 = s2.config.chart.animations.speed || 800;
          setTimeout(() => {
            t3.style.opacity = "1";
          }, i3);
        }
        o2.add(e3);
      }
      if (u2) {
        const e3 = this.drawNeedle({ size: l2, centerX: n2, centerY: r2, series: t2 });
        o2.add(e3);
      }
      let f2 = 360;
      s2.config.plotOptions.radialBar.startAngle < 0 && (f2 = this.totalAngle);
      const b2 = (360 - f2) / 360;
      if (s2.globals.radialSize = l2 - l2 * b2, this.radialDataLabels.value.show) {
        const t3 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        s2.globals.radialSize += t3 * b2;
      }
      return o2.add(x2.g), "front" === s2.config.plotOptions.radialBar.hollow.position && (x2.g.add(x2.elHollow), x2.dataLabels && x2.g.add(x2.dataLabels)), a2.add(o2), a2;
    }
    drawTracks(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = s2.group({ class: "apexcharts-tracks" }), a2 = new H(this.w), o2 = new G(this.w), r2 = this.getStrokeWidth(t2);
      t2.size = t2.size - r2 / 2;
      for (let n2 = 0; n2 < t2.series.length; n2++) {
        const l2 = s2.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        i2.add(l2), l2.attr({ rel: n2 + 1 }), t2.size = t2.size - r2 - this.margin;
        const h2 = e2.config.plotOptions.radialBar.track, c2 = o2.fillPath({ seriesNumber: 0, size: t2.size, fillColors: Array.isArray(h2.background) ? h2.background[n2] : h2.background, solid: true }), d2 = this.trackStartAngle;
        let g2 = this.trackEndAngle;
        Math.abs(g2) + Math.abs(d2) >= 360 && (g2 = 360 - Math.abs(this.startAngle) - 0.1);
        const p2 = s2.drawPath({ d: "", stroke: c2, strokeWidth: r2 * parseInt(h2.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h2.opacity, classes: "apexcharts-radialbar-area" });
        if (h2.dropShadow.enabled) {
          const t3 = h2.dropShadow;
          a2.dropShadow(p2, t3);
        }
        l2.add(p2), p2.attr("id", "apexcharts-radialbarTrack-" + n2), this.animatePaths(p2, { centerX: t2.centerX, centerY: t2.centerY, endAngle: g2, startAngle: d2, size: t2.size, i: n2, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: true });
      }
      return i2;
    }
    drawArcs(t2) {
      var e2;
      const s2 = this.w, i2 = new N(this.w), a2 = new G(this.w), o2 = new H(this.w), r2 = i2.group(), n2 = this.getStrokeWidth(t2);
      t2.size = t2.size - n2 / 2;
      let l2 = s2.config.plotOptions.radialBar.hollow.background;
      const h2 = t2.size - n2 * t2.series.length - this.margin * t2.series.length - n2 * parseInt(s2.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, c2 = h2 - s2.config.plotOptions.radialBar.hollow.margin;
      void 0 !== s2.config.plotOptions.radialBar.hollow.image && (l2 = this.drawHollowImage(t2, r2, h2, l2));
      const d2 = this.drawHollow({ size: c2, centerX: t2.centerX, centerY: t2.centerY, fill: l2 || "transparent" });
      if (s2.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        const t3 = s2.config.plotOptions.radialBar.hollow.dropShadow;
        o2.dropShadow(d2, t3);
      }
      let g2 = 1;
      !this.radialDataLabels.total.show && s2.seriesData.series.length > 1 && (g2 = 0);
      let p2 = null;
      if (this.radialDataLabels.show) {
        const e3 = s2.dom.Paper.findOne(".apexcharts-datalabels-group");
        p2 = this.renderInnerDataLabels(e3, this.radialDataLabels, { hollowSize: h2, centerX: t2.centerX, centerY: t2.centerY, opacity: g2 });
      }
      "back" === s2.config.plotOptions.radialBar.hollow.position && (r2.add(d2), p2 && r2.add(p2));
      let u2 = false;
      s2.config.plotOptions.radialBar.inverseOrder && (u2 = true);
      const x2 = true === (null == (e2 = this.ctx.morphTypeChange) ? void 0 : e2.isActive());
      for (let e3 = u2 ? t2.series.length - 1 : 0; u2 ? e3 >= 0 : e3 < t2.series.length; u2 ? e3-- : e3++) {
        const l3 = i2.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: m.escapeString(s2.seriesData.seriesNames[e3]) });
        r2.add(l3), l3.attr({ rel: e3 + 1, "data:realIndex": e3 }), lt.addCollapsedClassToSeries(this.w, l3, e3), t2.size = t2.size - n2 - this.margin;
        const h3 = a2.fillPath({ seriesNumber: e3, size: t2.size, value: t2.series[e3] }), c3 = this.startAngle;
        let d3;
        const g3 = s2.config.plotOptions.radialBar, p3 = "number" == typeof g3.min ? g3.min : 0, u3 = "number" == typeof g3.max ? g3.max : 100, f2 = u3 === p3 ? 1 : u3 - p3, b2 = (t3) => {
          const e4 = Math.min(Math.max(t3, p3), u3);
          return Math.max(0, (e4 - p3) / f2);
        }, y2 = b2(m.negToZero(t2.series[e3]));
        let w2, v2 = Math.round(this.totalAngle * y2) + this.startAngle;
        s2.globals.dataChanged && (d3 = this.startAngle, w2 = Math.round(this.totalAngle * b2(m.negToZero(s2.globals.previousPaths[e3]))) + d3);
        Math.abs(v2) + Math.abs(c3) > 360 && (v2 -= 0.01);
        Math.abs(w2) + Math.abs(d3) > 360 && (w2 -= 0.01);
        const A2 = v2 - c3, C2 = Array.isArray(s2.config.stroke.dashArray) ? s2.config.stroke.dashArray[e3] : s2.config.stroke.dashArray, S2 = x2 ? this.ctx.morphTypeChange.getInitialPathFor(e3, 0) : null, k2 = x2 ? this.ctx.morphTypeChange.getFromType() : null, D2 = !!S2 && ("bar" === k2 || "funnel" === k2 || "pyramid" === k2 || "pie" === k2 || "donut" === k2 || "polarArea" === k2), L2 = i2.drawPath({ d: S2 || "", stroke: D2 || t2.skipValueArc ? "transparent" : h3, strokeWidth: D2 || t2.skipValueArc ? 0 : n2, fill: D2 ? h3 : "none", fillOpacity: s2.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + e3, strokeDashArray: C2 }), M2 = c3 + A2 / 2, P2 = m.polarToCartesian(t2.centerX, t2.centerY, t2.size, M2);
        if (N.setAttrs(L2.node, { "data:angle": A2, "data:value": t2.series[e3], "data:cx": P2.x, "data:cy": P2.y }), s2.config.chart.dropShadow.enabled) {
          const t3 = s2.config.chart.dropShadow;
          o2.dropShadow(L2, t3, e3);
        }
        if (o2.setSelectionFilter(L2, 0, e3), this.addListeners(L2, this.radialDataLabels), l3.add(L2), L2.attr({ index: 0, j: e3 }), this.barLabels.enabled) {
          const a3 = m.polarToCartesian(t2.centerX, t2.centerY, t2.size, c3), o3 = this.barLabels.formatter(s2.seriesData.seriesNames[e3], { seriesIndex: e3, w: s2 }), r3 = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || r3.push("apexcharts-no-click");
          let n3 = this.barLabels.useSeriesColors ? s2.globals.colors[e3] : s2.config.chart.foreColor;
          n3 || (n3 = s2.config.chart.foreColor);
          const h4 = a3.x + this.barLabels.offsetX, d4 = a3.y + this.barLabels.offsetY, g4 = i2.drawText({ x: h4, y: d4, text: o3, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: n3, cssClass: r3.join(" ") });
          g4.on("click", this.onBarLabelClick), g4.attr({ rel: e3 + 1 }), 0 !== c3 && g4.attr({ "transform-origin": `${h4} ${d4}`, transform: `rotate(${c3} 0 0)` }), l3.add(g4);
        }
        let T2 = 0;
        if (!this.initialAnim || s2.globals.resized || s2.globals.dataChanged || (T2 = s2.config.chart.animations.speed), s2.globals.dataChanged && (T2 = s2.config.chart.animations.dynamicAnimation.speed), this.animDur = T2 / (1.2 * t2.series.length) + this.animDur, this.animBeginArr.push(this.animDur), x2 && S2) {
          const e4 = this.ctx.morphTypeChange.getSpeed(), s3 = this.getPiePath({ me: this, startAngle: c3, angle: A2, size: t2.size });
          if (D2) {
            const i3 = this.ctx.morphTypeChange.buildRingSegmentPath(t2.centerX, t2.centerY, t2.size, n2, c3, c3 + A2);
            L2.animate(e4).plot(i3, "polygons").after(function() {
              this.attr({ d: s3, fill: "none", stroke: t2.skipValueArc ? "transparent" : h3, "stroke-width": t2.skipValueArc ? 0 : n2 });
            });
          } else L2.animate(e4).plot(s3, "polygons").attr({ "stroke-width": n2 });
        } else this.animatePaths(L2, { centerX: t2.centerX, centerY: t2.centerY, endAngle: v2, startAngle: c3, prevEndAngle: w2, prevStartAngle: d3, size: t2.size, i: e3, totalItems: 2, animBeginArr: this.animBeginArr, dur: T2, shouldSetPrevPaths: true });
      }
      return { g: r2, elHollow: d2, dataLabels: p2 };
    }
    _angleAtValue(t2) {
      const e2 = this.w.config.plotOptions.radialBar, s2 = "number" == typeof e2.min ? e2.min : 0, i2 = "number" == typeof e2.max ? e2.max : 100, a2 = i2 === s2 ? s2 + 1 : i2, o2 = (Math.max(s2, Math.min(a2, Number(t2))) - s2) / (a2 - s2);
      return this.startAngle + o2 * (this.endAngle - this.startAngle);
    }
    _describeArc(t2, e2, s2, i2, a2) {
      const o2 = m.polarToCartesian(t2, e2, s2, a2), r2 = m.polarToCartesian(t2, e2, s2, i2), n2 = a2 - i2, l2 = Math.abs(n2) > 180 ? 1 : 0;
      return `M ${o2.x} ${o2.y} A ${s2} ${s2} 0 ${l2} 0 ${r2.x} ${r2.y}`;
    }
    drawBands(t2) {
      const e2 = this.w, s2 = new N(this.w), i2 = e2.config.plotOptions.radialBar, a2 = i2.bands || [], o2 = s2.group({ class: "apexcharts-gauge-bands" }), r2 = this.getStrokeWidth(t2), n2 = t2.size - r2 / 2 - r2 - this.margin, l2 = r2 * parseInt(i2.bandsStyle.strokeWidth, 10) / 100, h2 = "number" == typeof i2.min ? i2.min : 0, c2 = "number" == typeof i2.max ? i2.max : 100, d2 = c2 === h2 ? 0 : (i2.bandsStyle.gap || 0) * ((this.endAngle - this.startAngle) / (c2 - h2));
      for (let e3 = 0; e3 < a2.length; e3++) {
        const r3 = a2[e3];
        if (void 0 === r3.from || void 0 === r3.to) continue;
        const h3 = this._angleAtValue(r3.from), c3 = this._angleAtValue(r3.to), g2 = Math.min(h3, c3) + d2 / 2, p2 = Math.max(h3, c3) - d2 / 2;
        if (p2 - g2 <= 0) continue;
        const u2 = s2.drawPath({ d: this._describeArc(t2.centerX, t2.centerY, n2, g2, p2), stroke: r3.color || "#ccc", strokeWidth: l2, fill: "none", strokeLinecap: i2.bandsStyle.linecap || "butt", classes: "apexcharts-gauge-band" });
        u2.node.setAttribute("data-band-index", String(e3)), o2.add(u2);
      }
      return o2;
    }
    drawTicks(t2) {
      var e2, s2, i2, a2;
      const o2 = this.w, r2 = new N(this.w), n2 = o2.config.plotOptions.radialBar, l2 = n2.ticks, h2 = r2.group({ class: "apexcharts-gauge-ticks" }), c2 = this.getStrokeWidth(t2), d2 = t2.size - c2 / 2 - c2 - this.margin, g2 = "number" == typeof n2.min ? n2.min : 0, p2 = "number" == typeof n2.max ? n2.max : 100, u2 = Math.max(2, null != (s2 = null == (e2 = l2.major) ? void 0 : e2.count) ? s2 : 11), x2 = Math.max(0, null != (a2 = null == (i2 = l2.minor) ? void 0 : i2.count) ? a2 : 0), f2 = (e3, s3, i3) => {
        var a3, o3, n3;
        const c3 = this._angleAtValue(e3), g3 = null != (a3 = s3.length) ? a3 : 8, p3 = "inside" === s3.placement ? d2 - g3 : d2, u3 = "inside" === s3.placement ? d2 : d2 + g3, x3 = m.polarToCartesian(t2.centerX, t2.centerY, p3, c3), f3 = m.polarToCartesian(t2.centerX, t2.centerY, u3, c3), b2 = r2.drawLine(x3.x, x3.y, f3.x, f3.y, s3.color || (i3 ? "#666" : "#999"), 0, s3.width || (i3 ? 2 : 1));
        if (h2.add(b2), i3 && (null == (o3 = l2.labels) ? void 0 : o3.show)) {
          const i4 = ("inside" === s3.placement ? p3 : u3) + ("inside" === s3.placement ? -1 : 1) * (null != (n3 = l2.labels.offset) ? n3 : 6), a4 = m.polarToCartesian(t2.centerX, t2.centerY, i4, c3), o4 = "function" == typeof l2.labels.formatter ? l2.labels.formatter(e3) : String(e3), d3 = r2.drawText({ x: a4.x, y: a4.y, text: o4, textAnchor: "middle", dominantBaseline: "middle", fontFamily: l2.labels.fontFamily, fontSize: l2.labels.fontSize, fontWeight: l2.labels.fontWeight, foreColor: l2.labels.color, cssClass: "apexcharts-gauge-tick-label" });
          h2.add(d3);
        }
      };
      for (let t3 = 0; t3 < u2; t3++) {
        if (f2(g2 + t3 / (u2 - 1) * (p2 - g2), l2.major || {}, true), t3 < u2 - 1 && x2 > 0) for (let e3 = 1; e3 <= x2; e3++) {
          f2(g2 + (t3 + e3 / (x2 + 1)) / (u2 - 1) * (p2 - g2), l2.minor || {}, false);
        }
      }
      return h2;
    }
    drawNeedle(t2) {
      var e2, s2, i2, a2, o2;
      const r2 = this.w, n2 = new N(this.w), l2 = r2.config.plotOptions.radialBar.needle || {}, h2 = n2.group({ class: "apexcharts-gauge-needle" });
      if (!t2.series || 0 === t2.series.length) return h2;
      const d2 = this.getStrokeWidth(t2), g2 = t2.size - d2 / 2 - d2 - this.margin, p2 = "string" == typeof l2.length && l2.length.endsWith("%") ? g2 * parseInt(l2.length, 10) / 100 : Number(l2.length || 0.85 * g2), u2 = null != (e2 = l2.baseWidth) ? e2 : 4, x2 = null != (s2 = l2.tipWidth) ? s2 : 1, f2 = l2.color || "#333", m2 = t2.centerX, y2 = Number(null != (i2 = l2.offsetY) ? i2 : 0), w2 = t2.centerY + y2, v2 = `M ${m2 + u2 / 2} ${w2} A ${u2 / 2} ${u2 / 2} 0 0 1 ${m2 - u2 / 2} ${w2} L ${m2 - x2 / 2} ${w2 - p2} L ${m2 + x2 / 2} ${w2 - p2} Z`, A2 = n2.drawPath({ d: v2, stroke: f2, strokeWidth: 0, fill: f2, classes: "apexcharts-gauge-needle-shape" });
      h2.add(A2);
      const C2 = Number(t2.series[0]), S2 = this._angleAtValue(C2), k2 = this.initialAnim && !r2.globals.dataChanged && !r2.globals.resized, D2 = this.ctx, L2 = "number" == typeof D2._lastNeedleAngle ? D2._lastNeedleAngle : this.startAngle;
      D2._lastNeedleAngle = S2;
      if (c.isBrowser() && r2.globals.shouldAnimate && (k2 || r2.globals.dataChanged) && L2 !== S2) {
        const t3 = h2.node;
        t3.setAttribute("transform-origin", `${m2} ${w2}`), t3.setAttribute("transform", `rotate(${L2})`);
        const e3 = (null == (a2 = l2.animation) ? void 0 : a2.duration) && Number(l2.animation.duration) || l2.animationSpeed && Number(l2.animationSpeed) || (null == (o2 = r2.config.chart.animations.dynamicAnimation) ? void 0 : o2.speed) || r2.config.chart.animations.speed || 800, s3 = 1.70158, i3 = s3 + 1, n3 = k2 ? (t4) => 1 + i3 * Math.pow(t4 - 1, 3) + s3 * Math.pow(t4 - 1, 2) : (t4) => 1 - Math.pow(1 - t4, 3), c2 = performance.now(), d3 = (s4) => {
          const i4 = Math.max(0, Math.min(1, (s4 - c2) / e3)), a3 = L2 + (S2 - L2) * n3(i4);
          t3.setAttribute("transform", `rotate(${a3})`), i4 < 1 && b.requestAnimationFrame(d3);
        };
        b.requestAnimationFrame(d3);
      } else h2.attr({ "transform-origin": `${m2} ${w2}`, transform: `rotate(${S2})` });
      return h2;
    }
    drawHollow(t2) {
      var e2;
      const s2 = new N(this.w), i2 = this.w.config.plotOptions.radialBar.hollow, a2 = s2.drawCircle(2 * t2.size), o2 = { class: "apexcharts-radialbar-hollow", cx: t2.centerX, cy: t2.centerY, r: t2.size, fill: t2.fill };
      return (i2.stroke || i2.strokeDasharray) && (o2.stroke = i2.stroke || "transparent", o2["stroke-width"] = null != (e2 = i2.strokeWidth) ? e2 : 1, i2.strokeDasharray && (o2["stroke-dasharray"] = i2.strokeDasharray)), a2.attr(o2), a2;
    }
    drawHollowImage(t2, e2, s2, i2) {
      const a2 = this.w, o2 = new G(this.w), r2 = m.randomId(), n2 = a2.config.plotOptions.radialBar.hollow.image;
      if (a2.config.plotOptions.radialBar.hollow.imageClipped) o2.clippedImgArea({ width: s2, height: s2, image: n2, patternID: `pattern${a2.globals.cuid}${r2}` }), i2 = `url(#pattern${a2.globals.cuid}${r2})`;
      else {
        const s3 = a2.config.plotOptions.radialBar.hollow.imageWidth, i3 = a2.config.plotOptions.radialBar.hollow.imageHeight;
        if (void 0 === s3 && void 0 === i3) {
          const s4 = a2.dom.Paper.image(n2, function(e3) {
            this.move(t2.centerX - e3.width / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetX, t2.centerY - e3.height / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          e2.add(s4);
        } else {
          const o3 = a2.dom.Paper.image(n2, function() {
            this.move(t2.centerX - s3 / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetX, t2.centerY - i3 / 2 + a2.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(s3, i3);
          });
          e2.add(o3);
        }
      }
      return i2;
    }
    getStrokeWidth(t2) {
      const e2 = this.w;
      return t2.size * (100 - parseInt(e2.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t2.series.length + 1) - this.margin;
    }
    onBarLabelClick(t2) {
      var e2;
      const s2 = t2.target, i2 = parseInt(null != (e2 = s2.getAttribute("rel")) ? e2 : "", 10) - 1, a2 = this.barLabels.onClick, o2 = this.w;
      a2 && a2(o2.seriesData.seriesNames[i2], { w: o2, seriesIndex: i2 });
    }
  }, radar: class {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0, this.graphics = new N(this.w), this.lineColorArr = void 0 !== t2.globals.stroke.colors ? t2.globals.stroke.colors : t2.globals.colors, this.defaultSize = t2.globals.svgHeight < t2.globals.svgWidth ? t2.layout.gridHeight : t2.layout.gridWidth, this.isLog = t2.config.yaxis[0].logarithmic, this.logBase = t2.config.yaxis[0].logBase, this.coreUtils = new F(this.w), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, t2.globals.maxY, 0) : t2.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : t2.globals.minY, this.polygons = t2.config.plotOptions.radar.polygons, this.strokeWidth = t2.config.stroke.show ? t2.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t2.config.chart.dropShadow.blur, t2.config.xaxis.labels.show && (this.size = this.size - t2.layout.xAxisLabelsWidth / 1.75), void 0 !== t2.config.plotOptions.radar.size && (this.size = t2.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.dataPointsLen = 0, this.disAngle = 0, this.yaxisLabelsTextsPos = [];
    }
    draw(t2) {
      const e2 = this.w, s2 = new G(this.w), i2 = [], a2 = new U(this.w, this.ctx);
      t2.length && (this.dataPointsLen = t2[e2.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      const o2 = e2.layout.gridWidth / 2, r2 = e2.layout.gridHeight / 2, h2 = o2 + e2.config.plotOptions.radar.offsetX, c2 = r2 + e2.config.plotOptions.radar.offsetY, d2 = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: `translate(${h2 || 0}, ${c2 || 0})` });
      let g2 = [], p2 = null, u2 = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t2.forEach((t3, o3) => {
        const r3 = t3.length === e2.globals.dataPoints, h3 = this.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": r3, seriesName: m.escapeString(e2.seriesData.seriesNames[o3]), rel: o3 + 1, "data:realIndex": o3 });
        this.dataRadiusOfPercent[o3] = [], this.dataRadius[o3] = [], this.angleArr[o3] = [], t3.forEach((t4, e3) => {
          const s3 = Math.abs(this.maxValue - this.minValue);
          t4 -= this.minValue, this.isLog && (t4 = this.coreUtils.getLogVal(this.logBase, t4, 0)), this.dataRadiusOfPercent[o3][e3] = t4 / s3, this.dataRadius[o3][e3] = this.dataRadiusOfPercent[o3][e3] * this.size, this.angleArr[o3][e3] = e3 * this.disAngle;
        }), g2 = this.getDataPointsPos(this.dataRadius[o3], this.angleArr[o3]);
        const c3 = this.createPaths(g2, { x: 0, y: 0 });
        p2 = this.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), u2 = this.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": o3 }), e2.globals.delayedElements.push({ el: p2.node, index: o3 });
        const d3 = { i: o3, realIndex: o3, animationDelay: o3, initialSpeed: e2.config.chart.animations.speed, dataChangeSpeed: e2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: false, bindEventsOnPaths: false, stroke: e2.globals.stroke.colors[o3], strokeLineCap: e2.config.stroke.lineCap };
        let x2 = null;
        e2.globals.previousPaths.length > 0 && (x2 = this.getPreviousPath(o3));
        for (let t4 = 0; t4 < c3.linePathsTo.length; t4++) {
          const i3 = this.graphics.renderPaths(l(n({}, d3), { pathFrom: null === x2 ? c3.linePathsFrom[t4] : x2, pathTo: c3.linePathsTo[t4], strokeWidth: Array.isArray(this.strokeWidth) ? this.strokeWidth[o3] : this.strokeWidth, fill: "none", drawShadow: false }));
          h3.add(i3);
          const a3 = s2.fillPath({ seriesNumber: o3 }), r4 = this.graphics.renderPaths(l(n({}, d3), { pathFrom: null === x2 ? c3.areaPathsFrom[t4] : x2, pathTo: c3.areaPathsTo[t4], strokeWidth: 0, fill: a3, drawShadow: false, drawMask: { type: "radial", cx: 0, cy: 0, r: this.size } }));
          if (e2.config.chart.dropShadow.enabled) {
            const t5 = new H(this.w), s3 = e2.config.chart.dropShadow;
            t5.dropShadow(r4, Object.assign({}, s3, { noUserSpaceOnUse: true }), o3);
          }
          h3.add(r4);
        }
        t3.forEach((t4, s3) => {
          const i3 = new j(this.w, this.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: o3, dataPointIndex: s3 }), r4 = this.graphics.drawMarker(g2[s3].x, g2[s3].y, i3);
          r4.attr("rel", s3), r4.attr("j", s3), r4.attr("index", o3), r4.node.setAttribute("default-marker-size", i3.pSize);
          const l2 = this.graphics.group({ class: "apexcharts-series-markers" });
          l2 && l2.add(r4), p2.add(l2), h3.add(p2);
          const c4 = e2.config.dataLabels;
          if (c4.enabled) {
            const t5 = c4.formatter(e2.seriesData.series[o3][s3], { seriesIndex: o3, dataPointIndex: s3, w: e2 });
            a2.plotDataLabelsText({ x: g2[s3].x, y: g2[s3].y, text: t5, textAnchor: "middle", i: o3, j: o3, parent: u2, offsetCorrection: false, dataLabelsConfig: n({}, c4) });
          }
          h3.add(u2);
        }), i2.push(h3);
      }), this.drawPolygons({ parent: d2 }), e2.config.xaxis.labels.show) {
        const t3 = this.drawXAxisTexts();
        d2.add(t3);
      }
      return i2.forEach((t3) => {
        d2.add(t3);
      }), d2.add(this.yaxisLabels), d2;
    }
    drawPolygons(t2) {
      const e2 = this.w, { parent: s2 } = t2, i2 = new Ke(this.w), a2 = e2.globals.yAxisScale[0].result.reverse(), o2 = a2.length, r2 = [], n2 = this.size / (o2 - 1);
      for (let t3 = 0; t3 < o2; t3++) r2[t3] = n2 * t3;
      r2.reverse();
      const l2 = [], h2 = [];
      r2.forEach((t3, e3) => {
        const s3 = m.getPolygonPos(t3, this.dataPointsLen);
        let i3 = "";
        s3.forEach((t4, s4) => {
          if (0 === e3) {
            const e4 = this.graphics.drawLine(t4.x, t4.y, 0, 0, Array.isArray(this.polygons.connectorColors) ? this.polygons.connectorColors[s4] : this.polygons.connectorColors);
            h2.push(e4);
          }
          0 === s4 && this.yaxisLabelsTextsPos.push({ x: t4.x, y: t4.y }), i3 += t4.x + "," + t4.y + " ";
        }), l2.push(i3);
      }), l2.forEach((t3, i3) => {
        const a3 = this.polygons.strokeColors, o3 = this.polygons.strokeWidth, r3 = this.graphics.drawPolygon(t3, Array.isArray(a3) ? a3[i3] : a3, Array.isArray(o3) ? o3[i3] : o3, e2.globals.radarPolygons.fill.colors[i3]);
        s2.add(r3);
      }), h2.forEach((t3) => {
        s2.add(t3);
      }), e2.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((t3, e3) => {
        const s3 = i2.drawYAxisTexts(t3.x, t3.y, e3, a2[e3]);
        this.yaxisLabels.add(s3);
      });
    }
    drawXAxisTexts() {
      const t2 = this.w, e2 = t2.config.xaxis.labels, s2 = this.graphics.group({ class: "apexcharts-xaxis" }), i2 = m.getPolygonPos(this.size, this.dataPointsLen);
      return t2.labelData.labels.forEach((a2, o2) => {
        const r2 = t2.config.xaxis.labels.formatter, l2 = new U(this.w, this.ctx);
        if (i2[o2]) {
          const h2 = this.getTextPos(i2[o2], this.size), c2 = r2(a2, { seriesIndex: -1, dataPointIndex: o2, w: t2 });
          l2.plotDataLabelsText({ x: h2.newX, y: h2.newY, text: c2, textAnchor: h2.textAnchor, i: o2, j: o2, parent: s2, className: "apexcharts-xaxis-label", color: Array.isArray(e2.style.colors) && e2.style.colors[o2] ? e2.style.colors[o2] : "#a8a8a8", dataLabelsConfig: n({ textAnchor: h2.textAnchor, dropShadow: { enabled: false } }, e2), offsetCorrection: false }).on("click", (e3) => {
            if ("function" == typeof t2.config.chart.events.xAxisLabelClick) {
              const s3 = Object.assign({}, t2, { labelIndex: o2 });
              t2.config.chart.events.xAxisLabelClick(e3, this.ctx, s3);
            }
          });
        }
      }), s2;
    }
    createPaths(t2, e2) {
      const s2 = [];
      let i2 = [];
      const a2 = [];
      let o2 = [];
      if (t2.length) {
        i2 = [this.graphics.move(e2.x, e2.y)], o2 = [this.graphics.move(e2.x, e2.y)];
        let r2 = this.graphics.move(t2[0].x, t2[0].y), n2 = this.graphics.move(t2[0].x, t2[0].y);
        t2.forEach((e3, s3) => {
          r2 += this.graphics.line(e3.x, e3.y), n2 += this.graphics.line(e3.x, e3.y), s3 === t2.length - 1 && (r2 += "Z", n2 += "Z");
        }), s2.push(r2), a2.push(n2);
      }
      return { linePathsFrom: i2, linePathsTo: s2, areaPathsFrom: o2, areaPathsTo: a2 };
    }
    getTextPos(t2, e2) {
      let s2 = "middle", i2 = t2.x, a2 = t2.y;
      return Math.abs(t2.x) >= 10 ? t2.x > 0 ? (s2 = "start", i2 += 10) : t2.x < 0 && (s2 = "end", i2 -= 10) : s2 = "middle", Math.abs(t2.y) >= e2 - 10 && (t2.y < 0 ? a2 -= 10 : t2.y > 0 && (a2 += 10)), { textAnchor: s2, newX: i2, newY: a2 };
    }
    getPreviousPath(t2) {
      const e2 = this.w;
      let s2 = null;
      for (let i2 = 0; i2 < e2.globals.previousPaths.length; i2++) {
        const a2 = e2.globals.previousPaths[i2];
        a2.paths.length > 0 && parseInt(a2.realIndex, 10) === parseInt(String(t2), 10) && void 0 !== e2.globals.previousPaths[i2].paths[0] && (s2 = e2.globals.previousPaths[i2].paths[0].d);
      }
      return s2;
    }
    getDataPointsPos(t2, e2, s2 = this.dataPointsLen) {
      t2 = t2 || [], e2 = e2 || [];
      const i2 = [];
      for (let a2 = 0; a2 < s2; a2++) {
        const s3 = {};
        s3.x = t2[a2] * Math.sin(e2[a2]), s3.y = -t2[a2] * Math.cos(e2[a2]), i2.push(s3);
      }
      return i2;
    }
  }, heatmap: class {
    constructor(t2, e2, s2) {
      this.ctx = e2, this.w = t2, this.xRatio = s2.xRatio, this.yRatio = s2.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Ue(t2, e2), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    draw(t2) {
      const e2 = this.w, s2 = new N(this.w, this.ctx), i2 = s2.group({ class: "apexcharts-heatmap" });
      i2.attr("clip-path", `url(#gridRectMask${e2.globals.cuid})`);
      const a2 = e2.layout.gridWidth / e2.globals.dataPoints, o2 = e2.layout.gridHeight / e2.seriesData.series.length;
      let r2 = 0, n2 = false;
      this.negRange = this.helpers.checkColorRange();
      const l2 = t2.slice();
      e2.config.yaxis[0].reversed && (n2 = true, l2.reverse());
      for (let h3 = n2 ? 0 : l2.length - 1; n2 ? h3 < l2.length : h3 >= 0; n2 ? h3++ : h3--) {
        const n3 = s2.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: m.escapeString(e2.seriesData.seriesNames[h3]), rel: h3 + 1, "data:realIndex": h3 });
        if (lt.addCollapsedClassToSeries(this.w, n3, h3), s2.setupEventDelegation(n3, ".apexcharts-heatmap-rect"), e2.config.chart.dropShadow.enabled) {
          const t3 = e2.config.chart.dropShadow;
          new H(this.w).dropShadow(n3, t3, h3);
        }
        let c2 = 0;
        const d2 = e2.config.plotOptions.heatmap.shadeIntensity;
        let g2 = 0;
        for (let i3 = 0; i3 < e2.globals.dataPoints; i3++) {
          if (e2.seriesData.seriesX.length && !e2.globals.allSeriesHasEqualX && e2.globals.minX + e2.globals.minXDiff * i3 < e2.seriesData.seriesX[h3][g2]) {
            c2 += a2;
            continue;
          }
          if (g2 >= l2[h3].length) break;
          const p2 = this.helpers.getShadeColor(e2.config.chart.type, h3, g2, this.negRange);
          let u2 = p2.color;
          const x2 = p2.colorProps;
          if ("image" === e2.config.fill.type) {
            u2 = new G(this.w).fillPath({ seriesNumber: h3, dataPointIndex: g2, opacity: e2.globals.hasNegs ? x2.percent < 0 ? 1 - (1 + x2.percent / 100) : d2 + x2.percent / 100 : x2.percent / 100, patternID: m.randomId(), width: e2.config.fill.image.width ? e2.config.fill.image.width : a2, height: e2.config.fill.image.height ? e2.config.fill.image.height : o2 });
          }
          const f2 = this.rectRadius, b2 = s2.drawRect(c2, r2, a2, o2, f2);
          if (b2.attr({ cx: c2, cy: r2 }), b2.node.classList.add("apexcharts-heatmap-rect"), n3.add(b2), b2.attr({ fill: u2, i: h3, index: h3, j: g2, val: t2[h3][g2], "stroke-width": this.strokeWidth, stroke: e2.config.plotOptions.heatmap.useFillColorAsStroke ? u2 : e2.globals.stroke.colors[0], color: u2 }), e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            let t3 = 1;
            e2.globals.resized || (t3 = e2.config.chart.animations.speed), this.animateHeatMap(b2, c2, r2, a2, o2, t3, h3, g2);
          }
          if (e2.globals.dataChanged) {
            let t3 = 1;
            if (this.dynamicAnim.enabled && e2.globals.shouldAnimate) {
              t3 = this.dynamicAnim.speed;
              let s3 = e2.globals.previousPaths[h3] && e2.globals.previousPaths[h3][g2] && e2.globals.previousPaths[h3][g2].color;
              s3 || (s3 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(b2, m.isColorHex(s3) ? s3 : m.rgb2hex(s3), m.isColorHex(u2) ? u2 : m.rgb2hex(u2), t3);
            }
          }
          const y2 = (0, e2.config.dataLabels.formatter)(e2.seriesData.series[h3][g2], { value: e2.seriesData.series[h3][g2], seriesIndex: h3, dataPointIndex: g2, w: e2 }), w2 = this.helpers.calculateDataLabels({ text: y2, x: c2 + a2 / 2, y: r2 + o2 / 2, i: h3, j: g2, colorProps: x2, series: l2 });
          null !== w2 && n3.add(w2), c2 += a2, g2++;
        }
        r2 += o2, i2.add(n3);
      }
      const h2 = e2.globals.yAxisScale[0].result.slice();
      return e2.config.yaxis[0].reversed ? h2.unshift("") : h2.push(""), e2.globals.yAxisScale[0].result = h2, i2;
    }
    animateHeatMap(t2, e2, s2, i2, a2, o2, r2 = 0, n2 = 0) {
      const l2 = this.w, h2 = new B(this.w), c2 = l2.config.chart.animations.animateGradually;
      let d2 = 0;
      if (c2 && false !== c2.enabled) {
        const t3 = ((l2.seriesData.series || []).length || 1) + (l2.globals.dataPoints || 1) - 2;
        d2 = Y({ style: "diagonal", index: n2, row: r2, col: n2, baseDelay: Math.min(c2.delay || 0, 0.5 * o2 / Math.max(1, t3)) });
      }
      h2.animateRect(t2, { x: e2 + i2 / 2, y: s2 + a2 / 2, width: 0, height: 0 }, { x: e2, y: s2, width: i2, height: a2 }, o2, () => {
        h2.animationCompleted(t2);
      }, d2);
    }
    animateHeatColor(t2, e2, s2, i2) {
      t2.attr({ fill: e2 }).animate(i2).attr({ fill: s2 });
    }
  }, treemap: class {
    constructor(t2, e2) {
      this.ctx = e2, this.w = t2, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Ue(t2, e2), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    draw(t2) {
      const e2 = this.w, s2 = new N(this.w, this.ctx), i2 = new G(this.w), a2 = s2.group({ class: "apexcharts-treemap" });
      if (e2.globals.noData) return a2;
      const o2 = [];
      t2.forEach((t3) => {
        const e3 = t3.map((t4) => Math.abs(t4));
        o2.push(e3);
      }), this.negRange = this.helpers.checkColorRange(), e2.config.series.forEach((t3, e3) => {
        t3.data.forEach((t4) => {
          Array.isArray(this.labels[e3]) || (this.labels[e3] = []), this.labels[e3].push(t4.x);
        });
      });
      return as.generate(o2, e2.layout.gridWidth, e2.layout.gridHeight).forEach((o3, r2) => {
        var n2;
        const l2 = s2.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: m.escapeString(e2.seriesData.seriesNames[r2]), rel: r2 + 1, "data:realIndex": r2 });
        if (s2.setupEventDelegation(l2, ".apexcharts-treemap-rect"), e2.config.chart.dropShadow.enabled) {
          const t3 = e2.config.chart.dropShadow;
          new H(this.w).dropShadow(a2, t3, r2);
        }
        const h2 = s2.group({ class: "apexcharts-data-labels" }), c2 = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 }, d2 = e2.config.chart.animations, g2 = d2.animateGradually, p2 = g2 && false !== g2.enabled, u2 = new Array(o3.length).fill(0);
        if (p2) {
          const t3 = o3.length || 1, e3 = Math.min(g2.delay || 0, 0.5 * d2.speed / t3);
          o3.map((t4, e4) => ({ j: e4, area: (t4[2] - t4[0]) * (t4[3] - t4[1]) })).sort((t4, e4) => e4.area - t4.area).forEach((t4, s3) => {
            u2[t4.j] = s3 * e3;
          });
        }
        o3.forEach((a3, o4) => {
          const n3 = a3[0], h3 = a3[1], d3 = a3[2], g3 = a3[3];
          c2.xMin = Math.min(c2.xMin, n3), c2.yMin = Math.min(c2.yMin, h3), c2.xMax = Math.max(c2.xMax, d3), c2.yMax = Math.max(c2.yMax, g3);
          const p3 = this.helpers.getShadeColor(e2.config.chart.type, r2, o4, this.negRange), x3 = p3.color, f2 = i2.fillPath({ color: x3, seriesNumber: r2, dataPointIndex: o4 }), b2 = s2.drawRect(n3, h3, d3 - n3, g3 - h3, e2.config.plotOptions.treemap.borderRadius, "#fff", 1, this.strokeWidth, e2.config.plotOptions.treemap.useFillColorAsStroke ? x3 : e2.globals.stroke.colors[r2]);
          b2.attr({ cx: n3, cy: h3, index: r2, i: r2, j: o4, width: d3 - n3, height: g3 - h3, fill: f2 }), b2.node.classList.add("apexcharts-treemap-rect");
          let m2 = { x: n3 + (d3 - n3) / 2, y: h3 + (g3 - h3) / 2, width: 0, height: 0 };
          const y2 = { x: n3, y: h3, width: d3 - n3, height: g3 - h3 };
          if (e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            let t3 = 1;
            e2.globals.resized || (t3 = e2.config.chart.animations.speed), this.animateTreemap(b2, m2, y2, t3, u2[o4] || 0);
          }
          if (e2.globals.dataChanged) {
            let t3 = 1;
            this.dynamicAnim.enabled && e2.globals.shouldAnimate && (t3 = this.dynamicAnim.speed, e2.globals.previousPaths[r2] && e2.globals.previousPaths[r2][o4] && e2.globals.previousPaths[r2][o4].rect && (m2 = e2.globals.previousPaths[r2][o4].rect), this.animateTreemap(b2, m2, y2, t3));
          }
          let w2 = this.getFontSize(a3), v2 = e2.config.dataLabels.formatter(this.labels[r2][o4], { value: e2.seriesData.series[r2][o4], seriesIndex: r2, dataPointIndex: o4, w: e2 });
          "truncate" === e2.config.plotOptions.treemap.dataLabels.format && (w2 = parseInt(String(e2.config.dataLabels.style.fontSize), 10), v2 = this.truncateLabels(String(v2), w2, n3, h3, d3, g3));
          let A2 = null;
          e2.seriesData.series[r2][o4] && (A2 = this.helpers.calculateDataLabels({ text: v2, x: (n3 + d3) / 2, y: (h3 + g3) / 2 + this.strokeWidth / 2 + w2 / 3, i: r2, j: o4, colorProps: p3, fontSize: w2, series: t2 })), e2.config.dataLabels.enabled && A2 && this.rotateToFitLabel(A2, w2, v2, n3, h3, d3, g3), l2.add(b2), null !== A2 && l2.add(A2);
        });
        const x2 = e2.config.plotOptions.treemap.seriesTitle;
        if (e2.config.series.length > 1 && x2 && x2.show) {
          const t3 = e2.config.series[r2].name || "";
          if (t3 && c2.xMin < 1 / 0 && c2.yMin < 1 / 0) {
            const { offsetX: i3, offsetY: a3, borderColor: o4, borderWidth: r3, borderRadius: h3, style: d3 } = x2, g3 = d3.color || e2.config.chart.foreColor, p3 = { left: d3.padding.left, right: d3.padding.right, top: d3.padding.top, bottom: d3.padding.bottom }, u3 = s2.getTextRects(t3, d3.fontSize, d3.fontFamily), f2 = u3.width + p3.left + p3.right, b2 = u3.height + p3.top + p3.bottom, m2 = c2.xMin + (i3 || 0), y2 = c2.yMin + (a3 || 0), w2 = s2.drawRect(m2, y2, f2, b2, h3, d3.background, 1, r3, o4), v2 = s2.drawText({ x: m2 + p3.left, y: y2 + p3.top + 0.75 * (null != (n2 = null == u3 ? void 0 : u3.height) ? n2 : 0), text: t3, fontSize: d3.fontSize, fontFamily: d3.fontFamily, fontWeight: d3.fontWeight, foreColor: g3, cssClass: d3.cssClass || "" });
            l2.add(w2), l2.add(v2);
          }
        }
        l2.add(h2), a2.add(l2);
      }), a2;
    }
    getFontSize(t2) {
      const e2 = this.w;
      const s2 = (function t3(e3) {
        let s3, i2 = 0;
        if (Array.isArray(e3[0])) for (s3 = 0; s3 < e3.length; s3++) i2 += t3(e3[s3]);
        else for (s3 = 0; s3 < e3.length; s3++) i2 += e3[s3].length;
        return i2;
      })(this.labels) / (function t3(e3) {
        let s3, i2 = 0;
        if (Array.isArray(e3[0])) for (s3 = 0; s3 < e3.length; s3++) i2 += t3(e3[s3]);
        else for (s3 = 0; s3 < e3.length; s3++) i2 += 1;
        return i2;
      })(this.labels);
      return (function(t3, i2) {
        const a2 = t3 * i2, o2 = Math.pow(a2, 0.5);
        return Math.min(o2 / s2, parseInt(e2.config.dataLabels.style.fontSize, 10));
      })(t2[2] - t2[0], t2[3] - t2[1]);
    }
    rotateToFitLabel(t2, e2, s2, i2, a2, o2, r2) {
      const n2 = new N(this.w), l2 = n2.getTextRects(s2, String(e2));
      if (l2.width + this.w.config.stroke.width + 5 > o2 - i2 && l2.width <= r2 - a2) {
        const e3 = n2.rotateAroundCenter(t2.node);
        t2.node.setAttribute("transform", `rotate(-90 ${e3.x} ${e3.y}) translate(${l2.height / 3})`);
      }
    }
    truncateLabels(t2, e2, s2, i2, a2, o2) {
      const r2 = new N(this.w), n2 = r2.getTextRects(t2, String(e2)).width + this.w.config.stroke.width + 5 > a2 - s2 && o2 - i2 > a2 - s2 ? o2 - i2 : a2 - s2, l2 = r2.getTextBasedOnMaxWidth({ text: t2, maxWidth: n2, fontSize: e2 });
      return t2.length !== l2.length && n2 / e2 < 5 ? "" : l2;
    }
    animateTreemap(t2, e2, s2, i2, a2 = 0) {
      const o2 = new B(this.w);
      o2.animateRect(t2, e2, s2, i2, () => {
        o2.animationCompleted(t2);
      }, a2);
    }
  } }), me;
});
//# sourceMappingURL=scripts.js.map
