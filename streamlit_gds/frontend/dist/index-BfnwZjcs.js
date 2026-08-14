function Wt(a, n) {
  (n == null || n > a.length) && (n = a.length);
  for (var t = 0, c = Array(n); t < n; t++) c[t] = a[t];
  return c;
}
function Bn(a) {
  if (Array.isArray(a)) return a;
}
function Hn(a, n) {
  var t = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (t != null) {
    var c, i, r, l, u = [], p = !0, m = !1;
    try {
      if (r = (t = t.call(a)).next, n !== 0) for (; !(p = (c = r.call(t)).done) && (u.push(c.value), u.length !== n); p = !0) ;
    } catch (h) {
      m = !0, i = h;
    } finally {
      try {
        if (!p && t.return != null && (l = t.return(), Object(l) !== l)) return;
      } finally {
        if (m) throw i;
      }
    }
    return u;
  }
}
function Gn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wn(a, n) {
  return Bn(a) || Hn(a, n) || Yn(a, n) || Gn();
}
function Yn(a, n) {
  if (a) {
    if (typeof a == "string") return Wt(a, n);
    var t = {}.toString.call(a).slice(8, -1);
    return t === "Object" && a.constructor && (t = a.constructor.name), t === "Map" || t === "Set" ? Array.from(a) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Wt(a, n) : void 0;
  }
}
const cn = Object.entries, Yt = Object.setPrototypeOf, jn = Object.isFrozen, Vn = Object.getPrototypeOf, qn = Object.getOwnPropertyDescriptor;
let z = Object.freeze, $ = Object.seal, Te = Object.create, un = typeof Reflect < "u" && Reflect, mt = un.apply, gt = un.construct;
z || (z = function(n) {
  return n;
});
$ || ($ = function(n) {
  return n;
});
mt || (mt = function(n, t) {
  for (var c = arguments.length, i = new Array(c > 2 ? c - 2 : 0), r = 2; r < c; r++)
    i[r - 2] = arguments[r];
  return n.apply(t, i);
});
gt || (gt = function(n) {
  for (var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    c[i - 1] = arguments[i];
  return new n(...c);
});
const be = x(Array.prototype.forEach), Xn = x(Array.prototype.lastIndexOf), jt = x(Array.prototype.pop), ve = x(Array.prototype.push), Kn = x(Array.prototype.splice), se = Array.isArray, Le = x(String.prototype.toLowerCase), ct = x(String.prototype.toString), Vt = x(String.prototype.match), Ne = x(String.prototype.replace), qt = x(String.prototype.indexOf), Zn = x(String.prototype.trim), Jn = x(Number.prototype.toString), Qn = x(Boolean.prototype.toString), Xt = typeof BigInt > "u" ? null : x(BigInt.prototype.toString), Kt = typeof Symbol > "u" ? null : x(Symbol.prototype.toString), M = x(Object.prototype.hasOwnProperty), Re = x(Object.prototype.toString), C = x(RegExp.prototype.test), de = ei(TypeError);
function x(a) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      c[i - 1] = arguments[i];
    return mt(a, n, c);
  };
}
function ei(a) {
  return function() {
    for (var n = arguments.length, t = new Array(n), c = 0; c < n; c++)
      t[c] = arguments[c];
    return gt(a, t);
  };
}
function y(a, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le;
  if (Yt && Yt(a, null), !se(n))
    return a;
  let c = n.length;
  for (; c--; ) {
    let i = n[c];
    if (typeof i == "string") {
      const r = t(i);
      r !== i && (jn(n) || (n[c] = r), i = r);
    }
    a[i] = !0;
  }
  return a;
}
function ti(a) {
  for (let n = 0; n < a.length; n++)
    M(a, n) || (a[n] = null);
  return a;
}
function H(a) {
  const n = Te(null);
  for (const c of cn(a)) {
    var t = Wn(c, 2);
    const i = t[0], r = t[1];
    M(a, i) && (se(r) ? n[i] = ti(r) : r && typeof r == "object" && r.constructor === Object ? n[i] = H(r) : n[i] = r);
  }
  return n;
}
function ni(a) {
  switch (typeof a) {
    case "string":
      return a;
    case "number":
      return Jn(a);
    case "boolean":
      return Qn(a);
    case "bigint":
      return Xt ? Xt(a) : "0";
    case "symbol":
      return Kt ? Kt(a) : "Symbol()";
    case "undefined":
      return Re(a);
    case "function":
    case "object": {
      if (a === null)
        return Re(a);
      const n = a, t = K(n, "toString");
      if (typeof t == "function") {
        const c = t(n);
        return typeof c == "string" ? c : Re(c);
      }
      return Re(a);
    }
    default:
      return Re(a);
  }
}
function K(a, n) {
  for (; a !== null; ) {
    const c = qn(a, n);
    if (c) {
      if (c.get)
        return x(c.get);
      if (typeof c.value == "function")
        return x(c.value);
    }
    a = Vn(a);
  }
  function t() {
    return null;
  }
  return t;
}
function ii(a) {
  try {
    return C(a, ""), !0;
  } catch {
    return !1;
  }
}
const Zt = z(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ut = z(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), dt = z(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ai = z(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ft = z(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), oi = z(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jt = z(["#text"]), Qt = z(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pt = z(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), en = z(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), We = z(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ri = $(/{{[\w\W]*|^[\w\W]*}}/g), si = $(/<%[\w\W]*|^[\w\W]*%>/g), li = $(/\${[\w\W]*/g), ci = $(/^data-[\-\w.\u00B7-\uFFFF]+$/), ui = $(/^aria-[\-\w]+$/), tn = $(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), di = $(/^(?:\w+script|data):/i), fi = $(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pi = $(/^html$/i), mi = $(/^[a-z][.\w]*(-[.\w]+)+$/i), nn = $(/<[/\w!]/g), an = $(/<[/\w]/g), gi = $(/<\/no(script|embed|frames)/i), _i = $(/\/>/i), V = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, hi = function() {
  return typeof window > "u" ? null : window;
}, bi = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let c = null;
  const i = "data-tt-policy-suffix";
  t && t.hasAttribute(i) && (c = t.getAttribute(i));
  const r = "dompurify" + (c ? "#" + c : "");
  try {
    return n.createPolicy(r, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, on = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, re = function(n, t, c, i) {
  return M(n, t) && se(n[t]) ? y(i.base ? H(i.base) : {}, n[t], i.transform) : c;
};
function dn() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hi();
  const n = (f) => dn(f);
  if (n.version = "3.4.13", n.removed = [], !a || !a.document || a.document.nodeType !== V.document || !a.Element)
    return n.isSupported = !1, n;
  let t = a.document;
  const c = t, i = c.currentScript;
  a.DocumentFragment;
  const r = a.HTMLTemplateElement, l = a.Node, u = a.Element, p = a.NodeFilter, m = a.NamedNodeMap;
  m === void 0 && (a.NamedNodeMap || a.MozNamedAttrMap), a.HTMLFormElement;
  const h = a.DOMParser, T = a.trustedTypes, b = u.prototype, k = K(b, "cloneNode"), I = K(b, "remove"), P = K(b, "nextSibling"), A = K(b, "childNodes"), B = K(b, "parentNode"), q = K(b, "shadowRoot"), D = K(b, "attributes"), U = l && l.prototype ? K(l.prototype, "nodeType") : null, Z = l && l.prototype ? K(l.prototype, "nodeName") : null, xe = l && l.prototype ? K(l.prototype, "ownerDocument") : null;
  if (typeof r == "function") {
    const f = t.createElement("template");
    f.content && f.content.ownerDocument && (t = f.content.ownerDocument);
  }
  let W, le = "", Ye, ht = !1, Ee = 0;
  const bt = function() {
    if (Ee > 0)
      throw de('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, fe = function(e) {
    bt(), Ee++;
    try {
      return W.createHTML(e);
    } finally {
      Ee--;
    }
  }, pn = function(e) {
    bt(), Ee++;
    try {
      return W.createScriptURL(e);
    } finally {
      Ee--;
    }
  }, mn = function() {
    return ht || (Ye = bi(T, i), ht = !0), Ye;
  }, Ie = t, je = Ie.implementation, vt = Ie.createNodeIterator, gn = Ie.createDocumentFragment, _n = Ie.getElementsByTagName, hn = c.importNode;
  let S = on();
  n.isSupported = typeof cn == "function" && typeof B == "function" && je && je.createHTMLDocument !== void 0;
  const bn = ri, vn = si, Tn = li, kn = ci, yn = ui, En = di, Tt = fi, An = mi;
  let kt = tn, w = null;
  const Ve = y({}, [...Zt, ...ut, ...dt, ...ft, ...Jt]);
  let O = null;
  const qe = y({}, [...Qt, ...pt, ...en, ...We]);
  let L = Object.seal(Te(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ae = null, yt = null;
  const ne = Object.seal(Te(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Et = !0, Xe = !0, At = !1, St = !0, ie = !1, ae = !0, ce = !1, Ke = !1, De = null, Ce = null, Ze = !1, pe = !1, Me = !1, Pe = !1, wt = !0, Ot = !1;
  const Nt = "user-content-";
  let Je = !0, Ue = !1, me = {}, J = null;
  const Qe = y({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Rt = null;
  const Lt = y({}, ["audio", "video", "img", "source", "image", "track"]);
  let et = null;
  const xt = y({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fe = "http://www.w3.org/1998/Math/MathML", ze = "http://www.w3.org/2000/svg", Q = "http://www.w3.org/1999/xhtml";
  let ge = Q, tt = !1, nt = null;
  const Sn = y({}, [Fe, ze, Q], ct), It = z(["mi", "mo", "mn", "ms", "mtext"]);
  let it = y({}, It);
  const Dt = z(["annotation-xml"]);
  let at = y({}, Dt);
  const wn = y({}, ["title", "style", "font", "a", "script"]);
  let Se = null;
  const On = ["application/xhtml+xml", "text/html"], Nn = "text/html";
  let N = null, _e = null;
  const Rn = t.createElement("form"), Ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ot = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_e && _e === e)
      return;
    (!e || typeof e != "object") && (e = {}), e = H(e), Se = // eslint-disable-next-line unicorn/prefer-includes
    On.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Nn : e.PARSER_MEDIA_TYPE, N = Se === "application/xhtml+xml" ? ct : Le, w = re(e, "ALLOWED_TAGS", Ve, {
      transform: N
    }), O = re(e, "ALLOWED_ATTR", qe, {
      transform: N
    }), nt = re(e, "ALLOWED_NAMESPACES", Sn, {
      transform: ct
    }), et = re(e, "ADD_URI_SAFE_ATTR", xt, {
      transform: N,
      base: xt
    }), Rt = re(e, "ADD_DATA_URI_TAGS", Lt, {
      transform: N,
      base: Lt
    }), J = re(e, "FORBID_CONTENTS", Qe, {
      transform: N
    }), Ae = re(e, "FORBID_TAGS", H({}), {
      transform: N
    }), yt = re(e, "FORBID_ATTR", H({}), {
      transform: N
    }), me = M(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? H(e.USE_PROFILES) : e.USE_PROFILES : !1, Et = e.ALLOW_ARIA_ATTR !== !1, Xe = e.ALLOW_DATA_ATTR !== !1, At = e.ALLOW_UNKNOWN_PROTOCOLS || !1, St = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ie = e.SAFE_FOR_TEMPLATES || !1, ae = e.SAFE_FOR_XML !== !1, ce = e.WHOLE_DOCUMENT || !1, pe = e.RETURN_DOM || !1, Me = e.RETURN_DOM_FRAGMENT || !1, Pe = e.RETURN_TRUSTED_TYPE || !1, Ze = e.FORCE_BODY || !1, wt = e.SANITIZE_DOM !== !1, Ot = e.SANITIZE_NAMED_PROPS || !1, Je = e.KEEP_CONTENT !== !1, Ue = e.IN_PLACE || !1, kt = ii(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : tn, ge = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Q, it = M(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? H(e.MATHML_TEXT_INTEGRATION_POINTS) : y({}, It), at = M(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? H(e.HTML_INTEGRATION_POINTS) : y({}, Dt);
    const o = M(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? H(e.CUSTOM_ELEMENT_HANDLING) : Te(null);
    if (L = Te(null), M(o, "tagNameCheck") && Ct(o.tagNameCheck) && (L.tagNameCheck = o.tagNameCheck), M(o, "attributeNameCheck") && Ct(o.attributeNameCheck) && (L.attributeNameCheck = o.attributeNameCheck), M(o, "allowCustomizedBuiltInElements") && typeof o.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = o.allowCustomizedBuiltInElements), $(L), ie && (Xe = !1), Me && (pe = !0), me && (w = y({}, Jt), O = Te(null), me.html === !0 && (y(w, Zt), y(O, Qt)), me.svg === !0 && (y(w, ut), y(O, pt), y(O, We)), me.svgFilters === !0 && (y(w, dt), y(O, pt), y(O, We)), me.mathMl === !0 && (y(w, ft), y(O, en), y(O, We))), ne.tagCheck = null, ne.attributeCheck = null, M(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? ne.tagCheck = e.ADD_TAGS : se(e.ADD_TAGS) && (w === Ve && (w = H(w)), y(w, e.ADD_TAGS, N))), M(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? ne.attributeCheck = e.ADD_ATTR : se(e.ADD_ATTR) && (O === qe && (O = H(O)), y(O, e.ADD_ATTR, N))), M(e, "ADD_URI_SAFE_ATTR") && se(e.ADD_URI_SAFE_ATTR) && y(et, e.ADD_URI_SAFE_ATTR, N), M(e, "FORBID_CONTENTS") && se(e.FORBID_CONTENTS) && (J === Qe && (J = H(J)), y(J, e.FORBID_CONTENTS, N)), M(e, "ADD_FORBID_CONTENTS") && se(e.ADD_FORBID_CONTENTS) && (J === Qe && (J = H(J)), y(J, e.ADD_FORBID_CONTENTS, N)), Je && (w["#text"] = !0), ce && y(w, ["html", "head", "body"]), w.table && (y(w, ["tbody"]), delete Ae.tbody), e.TRUSTED_TYPES_POLICY) {
      if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const d = W;
      W = e.TRUSTED_TYPES_POLICY;
      try {
        le = fe("");
      } catch (g) {
        throw W = d, g;
      }
    } else e.TRUSTED_TYPES_POLICY === null ? (W = void 0, le = "") : (W === void 0 && (W = mn()), W && typeof le == "string" && (le = fe("")));
    z && z(e), _e = e;
  }, Mt = y({}, [...ut, ...dt, ...ai]), Pt = y({}, [...ft, ...oi]), Ln = function(e, o, d) {
    return o.namespaceURI === Q ? e === "svg" : o.namespaceURI === Fe ? e === "svg" && (d === "annotation-xml" || it[d]) : !!Mt[e];
  }, xn = function(e, o, d) {
    return o.namespaceURI === Q ? e === "math" : o.namespaceURI === ze ? e === "math" && at[d] : !!Pt[e];
  }, In = function(e, o, d) {
    return o.namespaceURI === ze && !at[d] || o.namespaceURI === Fe && !it[d] ? !1 : !Pt[e] && (wn[e] || !Mt[e]);
  }, Dn = function(e) {
    let o = B(e);
    (!o || !o.tagName) && (o = {
      namespaceURI: ge,
      tagName: "template"
    });
    const d = Le(e.tagName), g = Le(o.tagName);
    return nt[e.namespaceURI] ? e.namespaceURI === ze ? Ln(d, o, g) : e.namespaceURI === Fe ? xn(d, o, g) : e.namespaceURI === Q ? In(d, o, g) : !!(Se === "application/xhtml+xml" && nt[e.namespaceURI]) : !1;
  }, oe = function(e) {
    ve(n.removed, {
      element: e
    });
    try {
      B(e).removeChild(e);
    } catch {
      if (I(e), !B(e))
        throw de("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, $e = function(e) {
    we(e);
    const o = A(e);
    if (o) {
      const g = [];
      be(o, (_) => {
        ve(g, _);
      }), be(g, (_) => {
        try {
          I(_);
        } catch {
        }
      });
    }
    const d = D(e);
    if (d)
      for (let g = d.length - 1; g >= 0; --g) {
        const _ = d[g], v = _ && _.name;
        if (typeof v == "string")
          try {
            e.removeAttribute(v);
          } catch {
          }
      }
  }, ue = function(e, o) {
    try {
      ve(n.removed, {
        attribute: o.getAttributeNode(e),
        from: o
      });
    } catch {
      ve(n.removed, {
        attribute: null,
        from: o
      });
    }
    if (o.removeAttribute(e), e === "is")
      if (pe || Me)
        try {
          oe(o);
        } catch {
        }
      else
        try {
          o.setAttribute(e, "");
        } catch {
        }
  }, Cn = function(e) {
    const o = D(e);
    if (o)
      for (let d = o.length - 1; d >= 0; --d) {
        const g = o[d], _ = g && g.name;
        if (!(typeof _ != "string" || O[N(_)]))
          try {
            e.removeAttribute(_);
          } catch {
          }
      }
  }, we = function(e) {
    const o = [e];
    for (; o.length > 0; ) {
      const d = o.pop();
      (U ? U(d) : d.nodeType) === V.element && Cn(d);
      const _ = A(d);
      if (_)
        for (let v = _.length - 1; v >= 0; --v)
          o.push(_[v]);
    }
  }, Mn = function(e) {
    if (!ae)
      return;
    const o = [e];
    for (; o.length > 0; ) {
      const d = o.pop(), g = U ? U(d) : d.nodeType;
      if (g === V.processingInstruction || g === V.comment && C(an, d.data)) {
        try {
          I(d);
        } catch {
        }
        continue;
      }
      if (g === V.element) {
        const v = d, E = N(Z ? Z(d) : d.nodeName);
        try {
          v.hasAttribute && v.hasAttribute("patchsrc") && v.removeAttribute("patchsrc"), v.hasAttribute && v.hasAttribute("for") && E !== "label" && E !== "output" && v.removeAttribute("for");
        } catch {
        }
      }
      const _ = A(d);
      if (_)
        for (let v = _.length - 1; v >= 0; --v)
          o.push(_[v]);
    }
  }, Ut = function(e) {
    let o = null, d = null;
    if (Ze)
      e = "<remove></remove>" + e;
    else {
      const v = Vt(e, /^[\r\n\t ]+/);
      d = v && v[0];
    }
    Se === "application/xhtml+xml" && ge === Q && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const g = W ? fe(e) : e;
    if (ge === Q)
      try {
        o = new h().parseFromString(g, Se);
      } catch {
      }
    if (!o || !o.documentElement) {
      o = je.createDocument(ge, "template", null);
      try {
        o.documentElement.innerHTML = tt ? le : g;
      } catch {
      }
    }
    const _ = o.body || o.documentElement;
    return e && d && _.insertBefore(t.createTextNode(d), _.childNodes[0] || null), ge === Q ? _n.call(o, ce ? "html" : "body")[0] : ce ? o.documentElement : _;
  }, Ft = function(e) {
    const o = xe ? xe(e) : e.ownerDocument;
    return vt.call(
      o || e,
      e,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Be = function(e) {
    return e = Ne(e, bn, " "), e = Ne(e, vn, " "), e = Ne(e, Tn, " "), e;
  }, rt = function(e) {
    var o;
    e.normalize();
    const d = xe ? xe(e) : e.ownerDocument, g = vt.call(
      d || e,
      e,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let _ = g.nextNode();
    for (; _; )
      _.data = Be(_.data), _ = g.nextNode();
    const v = (o = e.querySelectorAll) === null || o === void 0 ? void 0 : o.call(e, "template");
    v && be(v, (E) => {
      he(E.content) && rt(E.content);
    });
  }, He = function(e) {
    const o = Z ? Z(e) : null;
    return typeof o != "string" || N(o) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    e.attributes !== D(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    e.nodeType !== U(e) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    e.childNodes !== A(e);
  }, he = function(e) {
    if (!U || typeof e != "object" || e === null)
      return !1;
    try {
      return U(e) === V.documentFragment;
    } catch {
      return !1;
    }
  }, Oe = function(e) {
    if (!U || typeof e != "object" || e === null)
      return !1;
    try {
      return typeof U(e) == "number";
    } catch {
      return !1;
    }
  };
  function ee(f, e, o) {
    f.length !== 0 && be(f, (d) => {
      d.call(n, e, o, _e);
    });
  }
  const Pn = function(e, o) {
    return !!(ae && e.hasChildNodes() && !Oe(e.firstElementChild) && C(nn, e.textContent) && C(nn, e.innerHTML) || ae && e.namespaceURI === Q && o === "style" && Oe(e.firstElementChild) || e.nodeType === V.processingInstruction || ae && e.nodeType === V.comment && C(an, e.data));
  }, Un = function(e, o, d) {
    if (!Ae[o] && Ht(o) && (L.tagNameCheck instanceof RegExp && C(L.tagNameCheck, o) || L.tagNameCheck instanceof Function && L.tagNameCheck(o)))
      return !1;
    if (Je && !J[o]) {
      const g = B(e), _ = A(e);
      if (_ && g) {
        const v = _.length;
        for (let E = v - 1; E >= 0; --E) {
          const R = e === d ? k(_[E], !0) : _[E];
          g.insertBefore(R, P(e));
        }
      }
    }
    return oe(e), !0;
  }, zt = function(e, o, d, g) {
    return e.length === 0 ? o : o === d || o === g ? H(o) : o;
  }, $t = function(e, o) {
    if (ee(S.beforeSanitizeElements, e, null), e !== o && B(e) === null)
      return Ue && we(e), !0;
    if (He(e))
      return oe(e), !0;
    const d = N(Z ? Z(e) : e.nodeName);
    if (w = zt(S.uponSanitizeElement, w, Ve, De), ee(S.uponSanitizeElement, e, {
      tagName: d,
      allowedTags: w
    }), e !== o && B(e) === null)
      return Ue && we(e), !0;
    if (Pn(e, d))
      return oe(e), !0;
    if (Ae[d] || !(ne.tagCheck instanceof Function && ne.tagCheck(d)) && !w[d]) {
      const _ = Un(e, d, o);
      return _ === !1 && ee(S.afterSanitizeElements, e, null), _;
    }
    if ((U ? U(e) : e.nodeType) === V.element && !Dn(e) || (d === "noscript" || d === "noembed" || d === "noframes") && C(gi, e.innerHTML))
      return oe(e), !0;
    if (ie && e.nodeType === V.text) {
      const _ = Be(e.textContent);
      e.textContent !== _ && (ve(n.removed, {
        element: e.cloneNode()
      }), e.textContent = _);
    }
    return ee(S.afterSanitizeElements, e, null), !1;
  }, Bt = function(e, o, d) {
    if (yt[o] || ae && o === "patchsrc" || ae && o === "for" && e !== "label" && e !== "output" || wt && (o === "id" || o === "name") && (d in t || d in Rn))
      return !1;
    const g = O[o] || ne.attributeCheck instanceof Function && ne.attributeCheck(o, e);
    if (!(Xe && C(kn, o))) {
      if (!(Et && C(yn, o))) {
        if (g) {
          if (!et[o]) {
            if (!C(kt, Ne(d, Tt, ""))) {
              if (!((o === "src" || o === "xlink:href" || o === "href") && e !== "script" && qt(d, "data:") === 0 && Rt[e])) {
                if (!(At && !C(En, Ne(d, Tt, "")))) {
                  if (d)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ht(e) && (L.tagNameCheck instanceof RegExp && C(L.tagNameCheck, e) || L.tagNameCheck instanceof Function && L.tagNameCheck(e)) && (L.attributeNameCheck instanceof RegExp && C(L.attributeNameCheck, o) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(o, e)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          o === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && C(L.tagNameCheck, d) || L.tagNameCheck instanceof Function && L.tagNameCheck(d)))
        ) return !1;
      }
    }
    return !0;
  }, Fn = y({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ht = function(e) {
    return !Fn[Le(e)] && C(An, e);
  }, zn = function(e, o, d, g) {
    if (W && typeof T == "object" && typeof T.getAttributeType == "function" && !d)
      switch (T.getAttributeType(e, o)) {
        case "TrustedHTML":
          return fe(g);
        case "TrustedScriptURL":
          return pn(g);
      }
    return g;
  }, $n = function(e, o, d, g) {
    try {
      d ? e.setAttributeNS(d, o, g) : e.setAttribute(o, g), He(e) ? oe(e) : jt(n.removed);
    } catch {
      ue(o, e);
    }
  }, Gt = function(e) {
    ee(S.beforeSanitizeAttributes, e, null);
    const o = e.attributes;
    if (!o || He(e))
      return;
    O = zt(S.uponSanitizeAttribute, O, qe, Ce);
    const d = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let g = o.length;
    const _ = N(e.nodeName);
    for (; g--; ) {
      const v = o[g], E = v.name, R = v.namespaceURI, Y = v.value, j = N(E), lt = Y;
      let G = E === "value" ? lt : Zn(lt);
      if (d.attrName = j, d.attrValue = G, d.keepAttr = !0, d.forceKeepAttr = void 0, ee(S.uponSanitizeAttribute, e, d), G = d.attrValue, Ot && (j === "id" || j === "name") && qt(G, Nt) !== 0 && (ue(E, e), G = Nt + G), ae && C(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, G)) {
        ue(E, e);
        continue;
      }
      if (j === "attributename" && Vt(G, "href")) {
        ue(E, e);
        continue;
      }
      if (!d.forceKeepAttr) {
        if (!d.keepAttr) {
          ue(E, e);
          continue;
        }
        if (!St && C(_i, G)) {
          ue(E, e);
          continue;
        }
        if (ie && (G = Be(G)), !Bt(_, j, G)) {
          ue(E, e);
          continue;
        }
        G = zn(_, j, R, G), G !== lt && $n(e, E, R, G);
      }
    }
    ee(S.afterSanitizeAttributes, e, null);
  }, Ge = function(e) {
    let o = null;
    const d = Ft(e);
    for (ee(S.beforeSanitizeShadowDOM, e, null); o = d.nextNode(); )
      if (ee(S.uponSanitizeShadowNode, o, null), $t(o, e), Gt(o), he(o.content) && Ge(o.content), (U ? U(o) : o.nodeType) === V.element) {
        const _ = q(o);
        he(_) && (st(_), Ge(_));
      }
    ee(S.afterSanitizeShadowDOM, e, null);
  }, st = function(e) {
    const o = [{
      node: e,
      shadow: null
    }];
    for (; o.length > 0; ) {
      const d = o.pop();
      if (d.shadow) {
        Ge(d.shadow);
        continue;
      }
      const g = d.node, v = (U ? U(g) : g.nodeType) === V.element, E = A(g);
      if (E)
        for (let R = E.length - 1; R >= 0; --R)
          o.push({
            node: E[R],
            shadow: null
          });
      if (v) {
        const R = Z ? Z(g) : null;
        if (typeof R == "string" && N(R) === "template") {
          const Y = g.content;
          he(Y) && o.push({
            node: Y,
            shadow: null
          });
        }
      }
      if (v) {
        const R = q(g);
        he(R) && o.push({
          node: null,
          shadow: R
        }, {
          node: R,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(f) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = null, d = null, g = null, _ = null;
    if (tt = !f, tt && (f = "<!-->"), typeof f != "string" && !Oe(f) && (f = ni(f), typeof f != "string"))
      throw de("dirty is not a string, aborting");
    if (!n.isSupported)
      return f;
    Ke ? (w = De, O = Ce) : ot(e), (S.uponSanitizeElement.length > 0 || S.uponSanitizeAttribute.length > 0) && (w = H(w)), S.uponSanitizeAttribute.length > 0 && (O = H(O)), n.removed = [];
    const v = Ue && typeof f != "string" && Oe(f);
    if (v) {
      Mn(f);
      const Y = Z ? Z(f) : f.nodeName;
      if (typeof Y == "string") {
        const j = N(Y);
        if (!w[j] || Ae[j])
          throw $e(f), de("root node is forbidden and cannot be sanitized in-place");
      }
      if (He(f))
        throw $e(f), de("root node is clobbered and cannot be sanitized in-place");
      try {
        st(f);
      } catch (j) {
        throw $e(f), j;
      }
    } else if (Oe(f))
      o = Ut("<!---->"), d = o.ownerDocument.importNode(f, !0), d.nodeType === V.element && d.nodeName === "BODY" || d.nodeName === "HTML" ? o = d : o.appendChild(d), st(d);
    else {
      if (!pe && !ie && !ce && // eslint-disable-next-line unicorn/prefer-includes
      f.indexOf("<") === -1)
        return W && Pe ? fe(f) : f;
      if (o = Ut(f), !o)
        return pe ? null : Pe ? le : "";
    }
    o && Ze && oe(o.firstChild);
    const E = v ? f : o;
    try {
      const Y = Ft(E);
      for (; g = Y.nextNode(); )
        $t(g, E), Gt(g), he(g.content) && Ge(g.content);
    } catch (Y) {
      throw v && ($e(f), be(n.removed, (j) => {
        j.element && we(j.element);
      })), Y;
    }
    if (v)
      return be(n.removed, (Y) => {
        Y.element && we(Y.element);
      }), ie && rt(f), f;
    if (pe) {
      if (ie && rt(o), Me)
        for (_ = gn.call(o.ownerDocument); o.firstChild; )
          _.appendChild(o.firstChild);
      else
        _ = o;
      return (O.shadowroot || O.shadowrootmode) && (_ = hn.call(c, _, !0)), _;
    }
    let R = ce ? o.outerHTML : o.innerHTML;
    return ce && w["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && C(pi, o.ownerDocument.doctype.name) && (R = "<!DOCTYPE " + o.ownerDocument.doctype.name + `>
` + R), ie && (R = Be(R)), W && Pe ? fe(R) : R;
  }, n.setConfig = function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ot(f), Ke = !0, De = w, Ce = O;
  }, n.clearConfig = function() {
    _e = null, Ke = !1, De = null, Ce = null, W = Ye, le = "";
  }, n.isValidAttribute = function(f, e, o) {
    _e || ot({});
    const d = N(f), g = N(e);
    return Bt(d, g, o);
  }, n.addHook = function(f, e) {
    typeof e == "function" && M(S, f) && ve(S[f], e);
  }, n.removeHook = function(f, e) {
    if (M(S, f)) {
      if (e !== void 0) {
        const o = Xn(S[f], e);
        return o === -1 ? void 0 : Kn(S[f], o, 1)[0];
      }
      return jt(S[f]);
    }
  }, n.removeHooks = function(f) {
    M(S, f) && (S[f] = []);
  }, n.removeAllHooks = function() {
    S = on();
  }, n;
}
var vi = dn();
const Ti = ["a", "abbr", "b", "br", "code", "em", "li", "ol", "p", "span", "strong", "ul"], ki = ["href", "title", "target", "rel", "class"];
function s(a, n, t) {
  const c = document.createElement(a);
  return n && (c.className = n), t != null && (c.textContent = String(t)), c;
}
function X(a, n) {
  if (n && typeof n == "object" && "__html__" in n) {
    const t = String(n.__html__), c = vi.sanitize(t, { ALLOWED_TAGS: Ti, ALLOWED_ATTR: ki }), i = s("div");
    for (i.innerHTML = c; i.firstChild; ) a.append(i.firstChild);
    return;
  }
  n != null && a.append(document.createTextNode(String(n)));
}
function _t(a) {
  const n = String(a ?? "#").trim();
  return /^(https?:|mailto:|tel:|\/|#)/i.test(n) ? n : "#";
}
function F(a, n, t = "govuk-link", c = !1) {
  const i = s("a", `${t}${c ? " st-gds-external" : ""}`, String(a ?? ""));
  return i.href = _t(n), c && (i.target = "_blank", i.rel = "noopener noreferrer"), i;
}
function te(a, n = "field") {
  return `st-gds-${String(a._key ?? "gds").replace(/[^a-zA-Z0-9_-]/g, "-")}-${n}`;
}
function yi(a, n, t) {
  const c = [];
  if (n.hint) {
    const i = `${t}-hint`, r = s("div", "govuk-hint", n.hint);
    r.id = i, a.append(r), c.push(i);
  }
  if (n.error) {
    const i = `${t}-error`, r = s("p", "govuk-error-message");
    r.id = i;
    const l = s("span", "govuk-visually-hidden", "Error:");
    r.append(l, document.createTextNode(` ${String(n.error)}`)), a.append(r), c.push(i);
  }
  return c;
}
function ye(a, n, t = "label") {
  const c = s("div", `govuk-form-group${a.error ? " govuk-form-group--error" : ""}`), i = s(t, t === "legend" ? "govuk-fieldset__legend govuk-fieldset__legend--m" : "govuk-label", a.label);
  if (i instanceof HTMLLabelElement && (i.htmlFor = n), a.required) {
    const l = s("span", "govuk-visually-hidden", " required");
    i.append(l);
  }
  c.append(i);
  const r = yi(c, a, n);
  return { group: c, label: i, describedBy: r };
}
function ke(a, n) {
  n.length && a.setAttribute("aria-describedby", n.join(" "));
}
function fn(a) {
  return a instanceof HTMLTextAreaElement ? !0 : a instanceof HTMLInputElement ? ["text", "search", "tel", "url", "password"].includes(a.type) : !1;
}
function Ei(a, n, t) {
  if (!n) return;
  const c = a.ownerDocument.getElementById(n);
  !c || !a.contains(c) || (c.focus({ preventScroll: !0 }), t && fn(c) && c.setSelectionRange(t[0], t[1]));
}
function rn(a, n, t, c = !1) {
  const i = te(n), { group: r, describedBy: l } = ye(n, i), u = s("input", `govuk-input${n.error ? " govuk-input--error" : ""} st-gds-width-${String(n.width ?? "full")}`);
  u.id = i, u.name = i, u.type = c && !n.visible ? "password" : String(n.input_type ?? "text"), u.value = String(n.value ?? ""), u.disabled = !!n.disabled, u.required = !!n.required, n.autocomplete && u.setAttribute("autocomplete", String(n.autocomplete)), n.inputmode && (u.inputMode = String(n.inputmode)), ke(u, l), u.addEventListener("change", () => t.setStateValue("value", u.value));
  let p = u;
  if (n.prefix || n.suffix) {
    const m = s("div", "govuk-input__wrapper");
    n.prefix && m.append(s("div", "govuk-input__prefix", n.prefix)), m.append(u), n.suffix && m.append(s("div", "govuk-input__suffix", n.suffix)), p = m;
  }
  if (c) {
    const m = s("div", "st-gds-password-wrapper");
    m.append(u);
    const h = s(
      "button",
      "govuk-button govuk-button--secondary st-gds-password-toggle",
      n.visible ? String(n.hide_label ?? "Hide") : String(n.show_label ?? "Show")
    );
    h.type = "button", h.setAttribute("aria-controls", i), h.addEventListener("click", () => t.setStateValue("visible", !n.visible)), m.append(h), p = m;
  }
  r.append(p), a.append(r);
}
function sn(a, n, t, c = !1) {
  const i = te(n), { group: r, describedBy: l } = ye(n, i), u = s("textarea", `govuk-textarea${n.error ? " govuk-textarea--error" : ""}`);
  u.id = i, u.name = i, u.rows = Number(n.rows ?? 5), u.value = String(n.value ?? ""), u.disabled = !!n.disabled, u.required = !!n.required, ke(u, l);
  let p = () => {
  };
  if (u.addEventListener("input", () => {
    c && p();
  }), u.addEventListener("change", () => t.setStateValue("value", u.value)), r.append(u), c) {
    const m = Number(n.max_characters), h = s("div", "govuk-character-count__message govuk-hint", "");
    h.id = `${i}-info`, h.setAttribute("aria-live", "polite"), l.push(h.id), ke(u, l), r.append(h), p = () => {
      const T = m - u.value.length;
      h.textContent = T >= 0 ? `You have ${T} character${T === 1 ? "" : "s"} remaining` : `You have ${Math.abs(T)} character${T === -1 ? "" : "s"} too many`, h.classList.toggle("govuk-error-message", T < 0);
    }, p();
  }
  a.append(r);
}
function ln(a, n, t, c) {
  const i = te(n), r = s("fieldset", "govuk-fieldset"), { group: l, label: u, describedBy: p } = ye(n, i, "legend");
  r.setAttribute("aria-describedby", p.join(" ")), r.append(u);
  for (const k of [...l.children].slice(1)) r.append(k);
  const m = c ? `govuk-checkboxes${n.small ? " govuk-checkboxes--small" : ""}` : `govuk-radios${n.inline ? " govuk-radios--inline" : ""}`, h = s("div", m), T = n.options ?? [], b = c ? n.value ?? [] : [n.value];
  T.forEach((k, I) => {
    const P = s("div", c ? "govuk-checkboxes__item" : "govuk-radios__item"), A = s("input", c ? "govuk-checkboxes__input" : "govuk-radios__input");
    A.type = c ? "checkbox" : "radio", A.name = i, A.id = `${i}-${I}`, A.value = String(I), A.disabled = !!n.disabled || !!k.disabled, A.checked = b.some((D) => JSON.stringify(D) === JSON.stringify(k.value));
    const B = s("label", c ? "govuk-label govuk-checkboxes__label" : "govuk-label govuk-radios__label", k.label);
    B.htmlFor = A.id, P.append(A, B), k.hint && P.append(s("div", "govuk-hint govuk-checkboxes__hint", k.hint)), h.append(P);
    let q = null;
    k.conditional && (q = s("div", "st-gds-conditional"), X(q, k.conditional), q.hidden = !A.checked, h.append(q)), A.addEventListener("change", () => {
      if (q && (q.hidden = !A.checked), c) {
        const D = [...h.querySelectorAll("input:checked")].map((U) => T[Number(U.value)].value);
        t.setStateValue("value", D);
      } else
        t.setStateValue("value", k.value);
    });
  }), r.append(h), l.replaceChildren(r), a.append(l);
}
function Ai(a, n, t) {
  const c = te(n), { group: i, describedBy: r } = ye(n, c), l = s("select", "govuk-select");
  l.id = c, l.name = c, l.disabled = !!n.disabled, l.required = !!n.required, ke(l, r);
  const u = n.options ?? [];
  n.required || l.append(s("option", void 0, "Select an option")), u.forEach((p, m) => {
    const h = s("option", void 0, p.label);
    h.value = String(m), h.disabled = !!p.disabled, h.selected = JSON.stringify(p.value) === JSON.stringify(n.value), l.append(h);
  }), l.addEventListener("change", () => {
    t.setStateValue("value", l.value === "" ? null : u[Number(l.value)].value);
  }), i.append(l), a.append(i);
}
function Si(a, n, t) {
  const c = te(n), { group: i, label: r, describedBy: l } = ye(n, c, "legend"), u = s("fieldset", "govuk-fieldset");
  u.append(r);
  for (const k of [...i.children].slice(1)) u.append(k);
  const p = String(n.value ?? "").split("-"), m = s("div", "st-gds-date-row"), h = [["day", p[2] ?? "", 2], ["month", p[1] ?? "", 2], ["year", p[0] ?? "", 4]], T = [];
  h.forEach(([k, I, P]) => {
    const A = s("div", "govuk-form-group"), B = `${c}-${k}`, q = s("label", "govuk-label", k[0].toUpperCase() + k.slice(1));
    q.htmlFor = B;
    const D = s("input", `govuk-input${k === "year" ? " st-gds-date-year" : ""}`);
    D.id = B, D.name = B, D.inputMode = "numeric", D.pattern = "[0-9]*", D.maxLength = P, D.value = I, D.disabled = !!n.disabled, ke(D, l), A.append(q, D), m.append(A), T.push(D);
  });
  const b = () => {
    const [k, I, P] = T.map((B) => B.value.padStart(2, "0")), A = k && I && P;
    t.setStateValue("value", A ? `${P}-${I}-${k}` : null);
  };
  T.forEach((k) => k.addEventListener("change", b)), u.append(m), i.replaceChildren(u), a.append(i);
}
function wi(a, n, t) {
  const c = te(n), { group: i, describedBy: r } = ye(n, c), l = s("input", `govuk-file-upload${n.error ? " govuk-file-upload--error" : ""}`);
  l.type = "file", l.id = c, l.name = c, l.disabled = !!n.disabled, l.required = !!n.required, l.accept = (n.accept ?? []).join(","), ke(l, r);
  const u = s("p", "st-gds-file-meta");
  l.addEventListener("change", async () => {
    const p = l.files?.[0];
    if (!p) {
      t.setStateValue("file", null), u.textContent = "";
      return;
    }
    const m = Number(n.max_size_mb) * 1024 * 1024;
    if (p.size > m) {
      u.className = "govuk-error-message", u.textContent = `The selected file must be smaller than ${String(n.max_size_mb)} MB`, l.value = "";
      return;
    }
    const h = new Uint8Array(await p.arrayBuffer());
    u.className = "st-gds-file-meta", u.textContent = `${p.name} (${Math.ceil(p.size / 1024)} KB)`, t.setStateValue("file", { name: p.name, type: p.type, size: p.size, data: h });
  }), i.append(l, u), a.append(i);
}
function Oi(a, n, t) {
  const c = String(n.kind ?? "primary"), r = s("button", `govuk-button${{ secondary: " govuk-button--secondary", warning: " govuk-button--warning" }[c] ?? ""}${n.width === "full" ? " st-gds-button-full" : ""}`, n.label);
  r.type = "button", r.disabled = !!n.disabled, c === "start" && (r.classList.add("govuk-button--start"), r.append(document.createTextNode("  →"))), r.addEventListener("click", () => t.setTriggerValue("clicked", !0)), a.append(r);
}
function Ni(a, n, t) {
  const c = n.items ?? [], i = new Set(n.open ?? []), r = s("div", "govuk-accordion");
  c.forEach((l, u) => {
    const p = s("div", "govuk-accordion__section"), m = s("h2", "govuk-accordion__section-heading"), h = s("button", "govuk-accordion__section-button", l.heading);
    h.type = "button";
    const T = te(n, `accordion-${u}`);
    h.setAttribute("aria-controls", T), h.setAttribute("aria-expanded", String(i.has(u) || l.expanded));
    const b = s("div", "govuk-accordion__section-content");
    b.id = T, b.hidden = !(i.has(u) || l.expanded), X(b, l.content), h.addEventListener("click", () => {
      b.hidden = !b.hidden, h.setAttribute("aria-expanded", String(!b.hidden)), b.hidden ? i.delete(u) : i.add(u), t.setStateValue("open", [...i]);
    }), m.append(h), p.append(m, b), r.append(p);
  }), a.append(r);
}
function Ri(a, n, t) {
  const c = n.items ?? [];
  let i = Number(n.selected ?? 0);
  const r = s("div", "govuk-tabs"), l = s("h2", "govuk-tabs__title", "Contents"), u = s("ul", "govuk-tabs__list");
  u.setAttribute("role", "tablist");
  const p = [], m = [], h = (T) => {
    i = T, m.forEach((b, k) => {
      b.parentElement?.classList.toggle("govuk-tabs__list-item--selected", k === T), b.setAttribute("aria-selected", String(k === T));
    }), p.forEach((b, k) => {
      b.hidden = k !== T;
    }), t.setStateValue("selected", T);
  };
  c.forEach((T, b) => {
    const k = s("li", `govuk-tabs__list-item${b === i ? " govuk-tabs__list-item--selected" : ""}`);
    k.setAttribute("role", "presentation");
    const I = F(T.label, `#${te(n, `panel-${b}`)}`, "govuk-tabs__tab");
    I.id = te(n, `tab-${b}`), I.setAttribute("role", "tab"), I.setAttribute("aria-selected", String(b === i)), I.addEventListener("click", (A) => {
      A.preventDefault(), h(b);
    }), k.append(I), u.append(k), m.push(I);
    const P = s("div", "govuk-tabs__panel");
    P.id = te(n, `panel-${b}`), P.setAttribute("role", "tabpanel"), P.setAttribute("aria-labelledby", I.id), P.hidden = b !== i, X(P, T.content), p.push(P);
  }), r.append(l, u, ...p), a.append(r);
}
function Li(a, n, t, c) {
  switch (n) {
    case "bootstrap": {
      document.documentElement.style.setProperty("--st-gds-brand", String(t.brand_colour)), document.body.classList.toggle("st-gds-minimal-chrome", t.chrome === "minimal");
      const i = "streamlit-gds-host-styles";
      let r = document.getElementById(i);
      r || (r = document.createElement("style"), r.id = i, document.head.append(r)), r.textContent = `
        .stMainBlockContainer { max-width: 1020px; padding-left: 30px; padding-right: 30px; }
        body, [data-testid="stAppViewContainer"] { background: #fff; color: #0b0c0c; font-family: Arial, Helvetica, sans-serif; }
        .st-gds-minimal-chrome [data-testid="stHeader"], .st-gds-minimal-chrome [data-testid="stToolbar"] { display: none; }
        [class*="st-key-gds-width-one-quarter-"] { width: 25%; }
        [class*="st-key-gds-width-one-third-"] { width: 33.333%; }
        [class*="st-key-gds-width-one-half-"] { width: 50%; }
        [class*="st-key-gds-width-two-thirds-"] { width: 66.666%; }
        [class*="st-key-gds-width-three-quarters-"] { width: 75%; }
        @media(max-width: 640px) { .stMainBlockContainer { padding-left: 15px; padding-right: 15px; } [class*="st-key-gds-width-"] { width: 100%; } }
      `;
      return;
    }
    case "space": {
      const i = s("span", "st-gds-space");
      i.style.height = `${Number(t.size ?? 4) * 5}px`, a.append(i);
      return;
    }
    case "heading": {
      const i = { xl: "govuk-heading-xl", l: "govuk-heading-l", m: "govuk-heading-m", s: "govuk-heading-s" }, r = s("h2", i[String(t.size)] ?? i.l);
      t.caption && r.append(s("span", "govuk-caption-l st-gds-heading-caption", t.caption)), r.append(document.createTextNode(String(t.text ?? ""))), a.append(r);
      return;
    }
    case "paragraph": {
      const i = s("p", t.lead ? "govuk-body-l" : "govuk-body");
      X(i, t.content), a.append(i);
      return;
    }
    case "link":
      a.append(F(t.label, t.href, "govuk-link", !!t.external));
      return;
    case "list": {
      const i = s(t.ordered ? "ol" : "ul", `govuk-list${t.ordered ? " govuk-list--number" : t.bullet ? " govuk-list--bullet" : ""}`);
      for (const r of t.items ?? []) i.append(s("li", void 0, r));
      a.append(i);
      return;
    }
    case "image": {
      const i = s("figure"), r = s("img", "govuk-image");
      r.src = _t(t.src), r.alt = String(t.alt ?? ""), t.width && (r.width = Number(t.width)), i.append(r), t.caption && i.append(s("figcaption", "govuk-body-s", t.caption)), a.append(i);
      return;
    }
    case "section_break": {
      a.append(s("hr", `govuk-section-break govuk-section-break--${String(t.size ?? 3)}${t.visible ? " govuk-section-break--visible" : ""}`));
      return;
    }
    case "back_link":
      a.append(F(t.label, t.href, "govuk-back-link"));
      return;
    case "breadcrumbs": {
      const i = s("nav", `govuk-breadcrumbs${t.collapse_on_mobile ? " govuk-breadcrumbs--collapse-on-mobile" : ""}`);
      i.setAttribute("aria-label", "Breadcrumb");
      const r = s("ol", "govuk-breadcrumbs__list");
      for (const l of t.items ?? []) {
        const u = s("li", "govuk-breadcrumbs__list-item");
        l.href ? u.append(F(l.label, l.href, "govuk-breadcrumbs__link")) : u.append(document.createTextNode(l.label)), r.append(u);
      }
      i.append(r), a.append(i);
      return;
    }
    case "details": {
      const i = s("details", "govuk-details");
      i.open = !!t.open, i.append(s("summary", "govuk-details__summary", t.summary));
      const r = s("div", "govuk-details__text");
      X(r, t.content), i.append(r), a.append(i);
      return;
    }
    case "inset_text": {
      const i = s("div", "govuk-inset-text");
      X(i, t.content), a.append(i);
      return;
    }
    case "error_message": {
      const i = s("p", "govuk-error-message");
      i.append(s("span", "govuk-visually-hidden", "Error:"), document.createTextNode(` ${String(t.text)}`)), a.append(i);
      return;
    }
    case "error_summary": {
      const i = s("div", "govuk-error-summary");
      i.tabIndex = -1, i.setAttribute("role", "alert"), i.append(s("h2", "govuk-error-summary__title", t.title)), t.description && i.append(s("p", "govuk-body", t.description));
      const r = s("ul", "govuk-list govuk-error-summary__list");
      for (const l of t.errors ?? []) {
        const u = s("li");
        u.append(F(l.text, l.href)), r.append(u);
      }
      i.append(r), a.append(i), t.focus && queueMicrotask(() => i.focus());
      return;
    }
    case "fieldset": {
      const i = s("fieldset", "govuk-fieldset");
      i.append(s("legend", `govuk-fieldset__legend govuk-fieldset__legend--${String(t.heading_size)}`, t.legend));
      const r = s("div");
      X(r, t.content), i.append(r), a.append(i);
      return;
    }
    case "header": {
      const i = s("header", "st-gds-generic-header");
      i.style.setProperty("--st-gds-brand", String(t.brand_colour ?? "#1d70b8"));
      const r = s("div", "st-gds-generic-header__inner"), l = F(t.organisation, t.home_url, "st-gds-generic-header__organisation");
      r.append(l), t.service_name && r.append(s("span", "st-gds-generic-header__service", t.service_name));
      const u = t.navigation;
      if (u?.length) {
        const p = s("nav");
        p.setAttribute("aria-label", "Primary navigation");
        const m = s("ul", "st-gds-generic-header__nav");
        u.forEach((h) => {
          const T = s("li"), b = F(h.label, h.href);
          h.active && b.setAttribute("aria-current", "page"), T.append(b), m.append(T);
        }), p.append(m), r.append(p);
      }
      i.append(r), a.append(i);
      return;
    }
    case "footer": {
      const i = s("footer", "st-gds-neutral-footer"), r = s("div", "st-gds-neutral-footer__inner");
      t.organisation && r.append(s("h2", "govuk-heading-s", t.organisation)), t.text && r.append(s("p", "govuk-body-s", t.text));
      const l = t.links;
      if (l?.length) {
        const u = s("ul", "st-gds-neutral-footer__links");
        l.forEach((p) => {
          const m = s("li");
          m.append(F(p.label, p.href, "govuk-link", p.external)), u.append(m);
        }), r.append(u);
      }
      i.append(r), a.append(i);
      return;
    }
    case "notification_banner": {
      const i = s("div", `govuk-notification-banner${t.success ? " govuk-notification-banner--success" : ""}`);
      i.setAttribute("role", String(t.role ?? "region"));
      const r = s("div", "govuk-notification-banner__header");
      r.append(s("h2", "govuk-notification-banner__title", t.title)), i.append(r);
      const l = s("div", "govuk-notification-banner__content");
      X(l, t.content), i.append(l), a.append(i);
      return;
    }
    case "pagination": {
      const i = s("nav", "govuk-pagination");
      i.setAttribute("aria-label", "Pagination");
      const r = s("ul", "govuk-pagination__list"), l = (u, p) => {
        if (!u) return;
        const m = u, h = s("li", `govuk-pagination__${p}`);
        h.append(F(`${p === "prev" ? "← " : ""}${m.label}${p === "next" ? " →" : ""}`, m.href, "govuk-link govuk-pagination__link")), r.append(h);
      };
      l(t.previous, "prev");
      for (const u of t.items ?? []) {
        const p = s("li", `govuk-pagination__item${u.current ? " govuk-pagination__item--current" : ""}`), m = F(u.label, u.href, "govuk-link govuk-pagination__link");
        u.current && m.setAttribute("aria-current", "page"), p.append(m), r.append(p);
      }
      l(t.next, "next"), i.append(r), a.append(i);
      return;
    }
    case "phase_banner": {
      const i = s("div", "govuk-phase-banner"), r = s("p", "govuk-phase-banner__content");
      r.append(s("strong", "govuk-tag govuk-phase-banner__content__tag", t.phase));
      const l = s("span", "govuk-phase-banner__text");
      X(l, t.content), r.append(l), i.append(r), a.append(i);
      return;
    }
    case "service_navigation": {
      const i = s("nav", "govuk-service-navigation");
      i.setAttribute("aria-label", "Service information");
      const r = s("div", "govuk-width-container");
      t.service_name && r.append(F(t.service_name, t.service_url, "govuk-service-navigation__service-name"));
      const l = s("ul", "govuk-service-navigation__list");
      for (const u of t.items ?? []) {
        const p = s("li", `govuk-service-navigation__item${u.active ? " govuk-service-navigation__item--active" : ""}`), m = F(u.label, u.href, "govuk-service-navigation__link");
        u.active && m.setAttribute("aria-current", "page"), p.append(m), l.append(p);
      }
      r.append(l), i.append(r), a.append(i);
      return;
    }
    case "skip_link":
      a.append(F(t.label, t.href, "govuk-skip-link"));
      return;
    case "panel": {
      const i = t.variant === "interruption", r = s("div", i ? "st-gds-panel--interruption" : "govuk-panel govuk-panel--confirmation");
      if (r.append(s("h1", i ? "govuk-heading-xl" : "govuk-panel__title", t.title)), t.content) {
        const l = s("div", i ? "govuk-body-l" : "govuk-panel__body");
        X(l, t.content), r.append(l);
      }
      a.append(r);
      return;
    }
    case "summary_list": {
      const i = t.card_title ? s("div", "govuk-summary-card") : a;
      if (t.card_title) {
        const l = s("div", "govuk-summary-card__title-wrapper");
        l.append(s("h2", "govuk-summary-card__title", t.card_title)), i.append(l);
      }
      const r = s("dl", `govuk-summary-list${t.card_title ? " govuk-summary-card__content" : ""}`);
      for (const l of t.rows ?? []) {
        const u = s("div", "govuk-summary-list__row");
        u.append(s("dt", "govuk-summary-list__key", l.key));
        const p = s("dd", "govuk-summary-list__value");
        if (X(p, l.value), u.append(p), l.actions?.length) {
          const m = s("dd", "govuk-summary-list__actions");
          l.actions.forEach((h, T) => {
            T && m.append(document.createTextNode(" "));
            const b = F(h.label, h.href);
            h.visually_hidden_text && b.append(s("span", "govuk-visually-hidden", ` ${h.visually_hidden_text}`)), m.append(b);
          }), u.append(m);
        }
        r.append(u);
      }
      i.append(r), i !== a && a.append(i);
      return;
    }
    case "table": {
      const i = s("table", `govuk-table${t.responsive ? " st-gds-table-responsive" : ""}`);
      t.caption && i.append(s("caption", "govuk-table__caption govuk-table__caption--m", t.caption));
      const r = t.columns, l = s("thead", "govuk-table__head"), u = s("tr", "govuk-table__row");
      r.forEach((m) => u.append(s("th", `govuk-table__header${m.numeric ? " govuk-table__header--numeric" : ""}`, m.heading))), l.append(u), i.append(l);
      const p = s("tbody", "govuk-table__body");
      for (const m of t.rows) {
        const h = s("tr", "govuk-table__row");
        r.forEach((T, b) => {
          const k = s(b === 0 ? "th" : "td", `${b === 0 ? "govuk-table__header" : "govuk-table__cell"}${T.numeric ? ` ${b === 0 ? "govuk-table__header" : "govuk-table__cell"}--numeric` : ""}`, m[T.key]);
          k.setAttribute("data-label", T.heading), b === 0 && k.setAttribute("scope", "row"), h.append(k);
        }), p.append(h);
      }
      i.append(p), a.append(i);
      return;
    }
    case "tag":
      a.append(s("strong", `govuk-tag govuk-tag--${String(t.colour)}`, t.text));
      return;
    case "task_list": {
      t.title && a.append(s("h2", "govuk-heading-m", t.title));
      const i = s("ol", "st-gds-task-list"), r = { not_started: "Not started", in_progress: "In progress", completed: "Completed", cannot_start: "Cannot start yet", optional: "Optional" };
      for (const l of t.items ?? []) {
        const u = s("li", "st-gds-task-list__item"), p = s("div", "st-gds-task-list__row");
        p.append(l.href ? F(l.title, l.href) : s("span", void 0, l.title));
        const m = l.status === "completed" ? "green" : l.status === "in_progress" ? "blue" : "grey";
        p.append(s("strong", `govuk-tag govuk-tag--${m}`, r[l.status] ?? l.status)), u.append(p), l.hint && u.append(s("p", "st-gds-task-list__hint", l.hint)), i.append(u);
      }
      a.append(i);
      return;
    }
    case "warning_text": {
      const i = s("div", "govuk-warning-text");
      i.append(s("span", "govuk-warning-text__icon", "!"));
      const r = s("strong", "govuk-warning-text__text");
      r.append(s("span", "govuk-visually-hidden", `${String(t.icon_fallback)}:`), document.createTextNode(` ${String(t.text)}`)), i.append(r), a.append(i);
      return;
    }
    case "cookie_banner": {
      if (t.hidden) return;
      const i = s("div", "govuk-cookie-banner");
      i.setAttribute("role", "region");
      const r = s("div", "govuk-cookie-banner__message govuk-width-container");
      r.append(s("h2", "govuk-cookie-banner__heading govuk-heading-m", t.title));
      const l = s("div", "govuk-cookie-banner__content");
      X(l, t.content), r.append(l);
      const u = s("div", "govuk-button-group");
      for (const p of t.actions ?? [])
        if (p.kind === "link") u.append(F(p.label, p.href, "govuk-link"));
        else {
          const m = s("button", "govuk-button", p.label);
          m.type = "button", m.addEventListener("click", () => c.setTriggerValue("action", p.value)), u.append(m);
        }
      r.append(u), i.append(r), a.append(i);
      return;
    }
    case "exit_this_page": {
      const i = F(t.label, t.href, "govuk-exit-this-page__button govuk-button govuk-button--warning"), r = (l) => {
        l.key === "Escape" && (c.setTriggerValue("exited", !0), window.location.assign(_t(t.href)));
      };
      return i.addEventListener("click", () => c.setTriggerValue("exited", !0)), document.addEventListener("keydown", r), a.append(i), () => document.removeEventListener("keydown", r);
    }
  }
}
const xi = (a) => {
  const n = a.data, t = a.parentElement.querySelector(".st-gds-root");
  if (!t) return;
  const c = document.activeElement, i = c && t.contains(c) ? c.id : null, r = i && c && fn(c) ? [c.selectionStart, c.selectionEnd] : null;
  t.replaceChildren();
  const l = n.props ?? {};
  let u;
  switch (n.component) {
    case "button":
      Oi(t, l, a);
      break;
    case "text_input":
      rn(t, l, a);
      break;
    case "password_input":
      rn(t, l, a, !0);
      break;
    case "textarea":
      sn(t, l, a);
      break;
    case "character_count":
      sn(t, l, a, !0);
      break;
    case "select":
      Ai(t, l, a);
      break;
    case "radios":
      ln(t, l, a, !1);
      break;
    case "checkboxes":
      ln(t, l, a, !0);
      break;
    case "date_input":
      Si(t, l, a);
      break;
    case "file_upload":
      wi(t, l, a);
      break;
    case "accordion":
      Ni(t, l, a);
      break;
    case "tabs":
      Ri(t, l, a);
      break;
    default:
      u = Li(t, n.component, l, a);
  }
  return Ei(t, i, r), u;
};
export {
  X as appendContent,
  xi as default,
  Ei as restoreFocus,
  _t as safeHref
};
