function Wt(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var t = 0, c = Array(n); t < n; t++) c[t] = i[t];
  return c;
}
function Bn(i) {
  if (Array.isArray(i)) return i;
}
function Hn(i, n) {
  var t = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (t != null) {
    var c, a, l, s, u = [], f = !0, g = !1;
    try {
      if (l = (t = t.call(i)).next, n !== 0) for (; !(f = (c = l.call(t)).done) && (u.push(c.value), u.length !== n); f = !0) ;
    } catch (h) {
      g = !0, a = h;
    } finally {
      try {
        if (!f && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (g) throw a;
      }
    }
    return u;
  }
}
function Gn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wn(i, n) {
  return Bn(i) || Hn(i, n) || jn(i, n) || Gn();
}
function jn(i, n) {
  if (i) {
    if (typeof i == "string") return Wt(i, n);
    var t = {}.toString.call(i).slice(8, -1);
    return t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set" ? Array.from(i) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Wt(i, n) : void 0;
  }
}
const cn = Object.entries, jt = Object.setPrototypeOf, Vn = Object.isFrozen, Yn = Object.getPrototypeOf, qn = Object.getOwnPropertyDescriptor;
let z = Object.freeze, B = Object.seal, ye = Object.create, un = typeof Reflect < "u" && Reflect, gt = un.apply, mt = un.construct;
z || (z = function(n) {
  return n;
});
B || (B = function(n) {
  return n;
});
gt || (gt = function(n, t) {
  for (var c = arguments.length, a = new Array(c > 2 ? c - 2 : 0), l = 2; l < c; l++)
    a[l - 2] = arguments[l];
  return n.apply(t, a);
});
mt || (mt = function(n) {
  for (var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    c[a - 1] = arguments[a];
  return new n(...c);
});
const Te = C(Array.prototype.forEach), Xn = C(Array.prototype.lastIndexOf), Vt = C(Array.prototype.pop), ke = C(Array.prototype.push), Kn = C(Array.prototype.splice), se = Array.isArray, Le = C(String.prototype.toLowerCase), ct = C(String.prototype.toString), Yt = C(String.prototype.match), Ne = C(String.prototype.replace), qt = C(String.prototype.indexOf), Zn = C(String.prototype.trim), Jn = C(Number.prototype.toString), Qn = C(Boolean.prototype.toString), Xt = typeof BigInt > "u" ? null : C(BigInt.prototype.toString), Kt = typeof Symbol > "u" ? null : C(Symbol.prototype.toString), U = C(Object.prototype.hasOwnProperty), Re = C(Object.prototype.toString), P = C(RegExp.prototype.test), de = ea(TypeError);
function C(i) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      c[a - 1] = arguments[a];
    return gt(i, n, c);
  };
}
function ea(i) {
  return function() {
    for (var n = arguments.length, t = new Array(n), c = 0; c < n; c++)
      t[c] = arguments[c];
    return mt(i, t);
  };
}
function E(i, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le;
  if (jt && jt(i, null), !se(n))
    return i;
  let c = n.length;
  for (; c--; ) {
    let a = n[c];
    if (typeof a == "string") {
      const l = t(a);
      l !== a && (Vn(n) || (n[c] = l), a = l);
    }
    i[a] = !0;
  }
  return i;
}
function ta(i) {
  for (let n = 0; n < i.length; n++)
    U(i, n) || (i[n] = null);
  return i;
}
function H(i) {
  const n = ye(null);
  for (const c of cn(i)) {
    var t = Wn(c, 2);
    const a = t[0], l = t[1];
    U(i, a) && (se(l) ? n[a] = ta(l) : l && typeof l == "object" && l.constructor === Object ? n[a] = H(l) : n[a] = l);
  }
  return n;
}
function na(i) {
  switch (typeof i) {
    case "string":
      return i;
    case "number":
      return Jn(i);
    case "boolean":
      return Qn(i);
    case "bigint":
      return Xt ? Xt(i) : "0";
    case "symbol":
      return Kt ? Kt(i) : "Symbol()";
    case "undefined":
      return Re(i);
    case "function":
    case "object": {
      if (i === null)
        return Re(i);
      const n = i, t = K(n, "toString");
      if (typeof t == "function") {
        const c = t(n);
        return typeof c == "string" ? c : Re(c);
      }
      return Re(i);
    }
    default:
      return Re(i);
  }
}
function K(i, n) {
  for (; i !== null; ) {
    const c = qn(i, n);
    if (c) {
      if (c.get)
        return C(c.get);
      if (typeof c.value == "function")
        return C(c.value);
    }
    i = Yn(i);
  }
  function t() {
    return null;
  }
  return t;
}
function aa(i) {
  try {
    return P(i, ""), !0;
  } catch {
    return !1;
  }
}
const Zt = z(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ut = z(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), dt = z(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ia = z(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ft = z(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), oa = z(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jt = z(["#text"]), Qt = z(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pt = z(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), en = z(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), We = z(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ra = B(/{{[\w\W]*|^[\w\W]*}}/g), sa = B(/<%[\w\W]*|^[\w\W]*%>/g), la = B(/\${[\w\W]*/g), ca = B(/^data-[\-\w.\u00B7-\uFFFF]+$/), ua = B(/^aria-[\-\w]+$/), tn = B(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), da = B(/^(?:\w+script|data):/i), fa = B(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pa = B(/^html$/i), ga = B(/^[a-z][.\w]*(-[.\w]+)+$/i), nn = B(/<[/\w!]/g), an = B(/<[/\w]/g), ma = B(/<\/no(script|embed|frames)/i), _a = B(/\/>/i), q = {
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
}, ha = function() {
  return typeof window > "u" ? null : window;
}, ba = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let c = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (c = t.getAttribute(a));
  const l = "dompurify" + (c ? "#" + c : "");
  try {
    return n.createPolicy(l, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
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
}, re = function(n, t, c, a) {
  return U(n, t) && se(n[t]) ? E(a.base ? H(a.base) : {}, n[t], a.transform) : c;
};
function dn() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ha();
  const n = (p) => dn(p);
  if (n.version = "3.4.13", n.removed = [], !i || !i.document || i.document.nodeType !== q.document || !i.Element)
    return n.isSupported = !1, n;
  let t = i.document;
  const c = t, a = c.currentScript;
  i.DocumentFragment;
  const l = i.HTMLTemplateElement, s = i.Node, u = i.Element, f = i.NodeFilter, g = i.NamedNodeMap;
  g === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const h = i.DOMParser, m = i.trustedTypes, v = u.prototype, k = K(v, "cloneNode"), y = K(v, "remove"), R = K(v, "nextSibling"), A = K(v, "childNodes"), D = K(v, "parentNode"), G = K(v, "shadowRoot"), M = K(v, "attributes"), $ = s && s.prototype ? K(s.prototype, "nodeType") : null, J = s && s.prototype ? K(s.prototype, "nodeName") : null, xe = s && s.prototype ? K(s.prototype, "ownerDocument") : null;
  if (typeof l == "function") {
    const p = t.createElement("template");
    p.content && p.content.ownerDocument && (t = p.content.ownerDocument);
  }
  let j, le = "", je, ht = !1, Ee = 0;
  const bt = function() {
    if (Ee > 0)
      throw de('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ge = function(e) {
    bt(), Ee++;
    try {
      return j.createHTML(e);
    } finally {
      Ee--;
    }
  }, pn = function(e) {
    bt(), Ee++;
    try {
      return j.createScriptURL(e);
    } finally {
      Ee--;
    }
  }, gn = function() {
    return ht || (je = ba(m, a), ht = !0), je;
  }, Ie = t, Ve = Ie.implementation, vt = Ie.createNodeIterator, mn = Ie.createDocumentFragment, _n = Ie.getElementsByTagName, hn = c.importNode;
  let w = on();
  n.isSupported = typeof cn == "function" && typeof D == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const bn = ra, vn = sa, Tn = la, kn = ca, yn = ua, En = da, Tt = fa, An = ga;
  let kt = tn, O = null;
  const Ye = E({}, [...Zt, ...ut, ...dt, ...ft, ...Jt]);
  let N = null;
  const qe = E({}, [...Qt, ...pt, ...en, ...We]);
  let I = Object.seal(ye(null, {
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
  const ne = Object.seal(ye(null, {
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
  let Et = !0, Xe = !0, At = !1, St = !0, ae = !1, ie = !0, ce = !1, Ke = !1, De = null, Ce = null, Ze = !1, me = !1, Me = !1, Pe = !1, wt = !0, Ot = !1;
  const Nt = "user-content-";
  let Je = !0, Ue = !1, _e = {}, Q = null;
  const Qe = E({}, [
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
  const Lt = E({}, ["audio", "video", "img", "source", "image", "track"]);
  let et = null;
  const xt = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $e = "http://www.w3.org/1998/Math/MathML", Fe = "http://www.w3.org/2000/svg", ee = "http://www.w3.org/1999/xhtml";
  let he = ee, tt = !1, nt = null;
  const Sn = E({}, [$e, Fe, ee], ct), It = z(["mi", "mo", "mn", "ms", "mtext"]);
  let at = E({}, It);
  const Dt = z(["annotation-xml"]);
  let it = E({}, Dt);
  const wn = E({}, ["title", "style", "font", "a", "script"]);
  let Se = null;
  const On = ["application/xhtml+xml", "text/html"], Nn = "text/html";
  let L = null, be = null;
  const Rn = t.createElement("form"), Ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ot = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (be && be === e)
      return;
    (!e || typeof e != "object") && (e = {}), e = H(e), Se = // eslint-disable-next-line unicorn/prefer-includes
    On.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Nn : e.PARSER_MEDIA_TYPE, L = Se === "application/xhtml+xml" ? ct : Le, O = re(e, "ALLOWED_TAGS", Ye, {
      transform: L
    }), N = re(e, "ALLOWED_ATTR", qe, {
      transform: L
    }), nt = re(e, "ALLOWED_NAMESPACES", Sn, {
      transform: ct
    }), et = re(e, "ADD_URI_SAFE_ATTR", xt, {
      transform: L,
      base: xt
    }), Rt = re(e, "ADD_DATA_URI_TAGS", Lt, {
      transform: L,
      base: Lt
    }), Q = re(e, "FORBID_CONTENTS", Qe, {
      transform: L
    }), Ae = re(e, "FORBID_TAGS", H({}), {
      transform: L
    }), yt = re(e, "FORBID_ATTR", H({}), {
      transform: L
    }), _e = U(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? H(e.USE_PROFILES) : e.USE_PROFILES : !1, Et = e.ALLOW_ARIA_ATTR !== !1, Xe = e.ALLOW_DATA_ATTR !== !1, At = e.ALLOW_UNKNOWN_PROTOCOLS || !1, St = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = e.SAFE_FOR_TEMPLATES || !1, ie = e.SAFE_FOR_XML !== !1, ce = e.WHOLE_DOCUMENT || !1, me = e.RETURN_DOM || !1, Me = e.RETURN_DOM_FRAGMENT || !1, Pe = e.RETURN_TRUSTED_TYPE || !1, Ze = e.FORCE_BODY || !1, wt = e.SANITIZE_DOM !== !1, Ot = e.SANITIZE_NAMED_PROPS || !1, Je = e.KEEP_CONTENT !== !1, Ue = e.IN_PLACE || !1, kt = aa(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : tn, he = typeof e.NAMESPACE == "string" ? e.NAMESPACE : ee, at = U(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? H(e.MATHML_TEXT_INTEGRATION_POINTS) : E({}, It), it = U(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? H(e.HTML_INTEGRATION_POINTS) : E({}, Dt);
    const r = U(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? H(e.CUSTOM_ELEMENT_HANDLING) : ye(null);
    if (I = ye(null), U(r, "tagNameCheck") && Ct(r.tagNameCheck) && (I.tagNameCheck = r.tagNameCheck), U(r, "attributeNameCheck") && Ct(r.attributeNameCheck) && (I.attributeNameCheck = r.attributeNameCheck), U(r, "allowCustomizedBuiltInElements") && typeof r.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = r.allowCustomizedBuiltInElements), B(I), ae && (Xe = !1), Me && (me = !0), _e && (O = E({}, Jt), N = ye(null), _e.html === !0 && (E(O, Zt), E(N, Qt)), _e.svg === !0 && (E(O, ut), E(N, pt), E(N, We)), _e.svgFilters === !0 && (E(O, dt), E(N, pt), E(N, We)), _e.mathMl === !0 && (E(O, ft), E(N, en), E(N, We))), ne.tagCheck = null, ne.attributeCheck = null, U(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? ne.tagCheck = e.ADD_TAGS : se(e.ADD_TAGS) && (O === Ye && (O = H(O)), E(O, e.ADD_TAGS, L))), U(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? ne.attributeCheck = e.ADD_ATTR : se(e.ADD_ATTR) && (N === qe && (N = H(N)), E(N, e.ADD_ATTR, L))), U(e, "ADD_URI_SAFE_ATTR") && se(e.ADD_URI_SAFE_ATTR) && E(et, e.ADD_URI_SAFE_ATTR, L), U(e, "FORBID_CONTENTS") && se(e.FORBID_CONTENTS) && (Q === Qe && (Q = H(Q)), E(Q, e.FORBID_CONTENTS, L)), U(e, "ADD_FORBID_CONTENTS") && se(e.ADD_FORBID_CONTENTS) && (Q === Qe && (Q = H(Q)), E(Q, e.ADD_FORBID_CONTENTS, L)), Je && (O["#text"] = !0), ce && E(O, ["html", "head", "body"]), O.table && (E(O, ["tbody"]), delete Ae.tbody), e.TRUSTED_TYPES_POLICY) {
      if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const d = j;
      j = e.TRUSTED_TYPES_POLICY;
      try {
        le = ge("");
      } catch (_) {
        throw j = d, _;
      }
    } else e.TRUSTED_TYPES_POLICY === null ? (j = void 0, le = "") : (j === void 0 && (j = gn()), j && typeof le == "string" && (le = ge("")));
    z && z(e), be = e;
  }, Mt = E({}, [...ut, ...dt, ...ia]), Pt = E({}, [...ft, ...oa]), Ln = function(e, r, d) {
    return r.namespaceURI === ee ? e === "svg" : r.namespaceURI === $e ? e === "svg" && (d === "annotation-xml" || at[d]) : !!Mt[e];
  }, xn = function(e, r, d) {
    return r.namespaceURI === ee ? e === "math" : r.namespaceURI === Fe ? e === "math" && it[d] : !!Pt[e];
  }, In = function(e, r, d) {
    return r.namespaceURI === Fe && !it[d] || r.namespaceURI === $e && !at[d] ? !1 : !Pt[e] && (wn[e] || !Mt[e]);
  }, Dn = function(e) {
    let r = D(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: he,
      tagName: "template"
    });
    const d = Le(e.tagName), _ = Le(r.tagName);
    return nt[e.namespaceURI] ? e.namespaceURI === Fe ? Ln(d, r, _) : e.namespaceURI === $e ? xn(d, r, _) : e.namespaceURI === ee ? In(d, r, _) : !!(Se === "application/xhtml+xml" && nt[e.namespaceURI]) : !1;
  }, oe = function(e) {
    ke(n.removed, {
      element: e
    });
    try {
      D(e).removeChild(e);
    } catch {
      if (y(e), !D(e))
        throw de("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ze = function(e) {
    we(e);
    const r = A(e);
    if (r) {
      const _ = [];
      Te(r, (b) => {
        ke(_, b);
      }), Te(_, (b) => {
        try {
          y(b);
        } catch {
        }
      });
    }
    const d = M(e);
    if (d)
      for (let _ = d.length - 1; _ >= 0; --_) {
        const b = d[_], T = b && b.name;
        if (typeof T == "string")
          try {
            e.removeAttribute(T);
          } catch {
          }
      }
  }, ue = function(e, r) {
    try {
      ke(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      ke(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is")
      if (me || Me)
        try {
          oe(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, Cn = function(e) {
    const r = M(e);
    if (r)
      for (let d = r.length - 1; d >= 0; --d) {
        const _ = r[d], b = _ && _.name;
        if (!(typeof b != "string" || N[L(b)]))
          try {
            e.removeAttribute(b);
          } catch {
          }
      }
  }, we = function(e) {
    const r = [e];
    for (; r.length > 0; ) {
      const d = r.pop();
      ($ ? $(d) : d.nodeType) === q.element && Cn(d);
      const b = A(d);
      if (b)
        for (let T = b.length - 1; T >= 0; --T)
          r.push(b[T]);
    }
  }, Mn = function(e) {
    if (!ie)
      return;
    const r = [e];
    for (; r.length > 0; ) {
      const d = r.pop(), _ = $ ? $(d) : d.nodeType;
      if (_ === q.processingInstruction || _ === q.comment && P(an, d.data)) {
        try {
          y(d);
        } catch {
        }
        continue;
      }
      if (_ === q.element) {
        const T = d, S = L(J ? J(d) : d.nodeName);
        try {
          T.hasAttribute && T.hasAttribute("patchsrc") && T.removeAttribute("patchsrc"), T.hasAttribute && T.hasAttribute("for") && S !== "label" && S !== "output" && T.removeAttribute("for");
        } catch {
        }
      }
      const b = A(d);
      if (b)
        for (let T = b.length - 1; T >= 0; --T)
          r.push(b[T]);
    }
  }, Ut = function(e) {
    let r = null, d = null;
    if (Ze)
      e = "<remove></remove>" + e;
    else {
      const T = Yt(e, /^[\r\n\t ]+/);
      d = T && T[0];
    }
    Se === "application/xhtml+xml" && he === ee && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const _ = j ? ge(e) : e;
    if (he === ee)
      try {
        r = new h().parseFromString(_, Se);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Ve.createDocument(he, "template", null);
      try {
        r.documentElement.innerHTML = tt ? le : _;
      } catch {
      }
    }
    const b = r.body || r.documentElement;
    return e && d && b.insertBefore(t.createTextNode(d), b.childNodes[0] || null), he === ee ? _n.call(r, ce ? "html" : "body")[0] : ce ? r.documentElement : b;
  }, $t = function(e) {
    const r = xe ? xe(e) : e.ownerDocument;
    return vt.call(
      r || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Be = function(e) {
    return e = Ne(e, bn, " "), e = Ne(e, vn, " "), e = Ne(e, Tn, " "), e;
  }, rt = function(e) {
    var r;
    e.normalize();
    const d = xe ? xe(e) : e.ownerDocument, _ = vt.call(
      d || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let b = _.nextNode();
    for (; b; )
      b.data = Be(b.data), b = _.nextNode();
    const T = (r = e.querySelectorAll) === null || r === void 0 ? void 0 : r.call(e, "template");
    T && Te(T, (S) => {
      ve(S.content) && rt(S.content);
    });
  }, He = function(e) {
    const r = J ? J(e) : null;
    return typeof r != "string" || L(r) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    e.attributes !== M(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    e.nodeType !== $(e) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, ve = function(e) {
    if (!$ || typeof e != "object" || e === null)
      return !1;
    try {
      return $(e) === q.documentFragment;
    } catch {
      return !1;
    }
  }, Oe = function(e) {
    if (!$ || typeof e != "object" || e === null)
      return !1;
    try {
      return typeof $(e) == "number";
    } catch {
      return !1;
    }
  };
  function te(p, e, r) {
    p.length !== 0 && Te(p, (d) => {
      d.call(n, e, r, be);
    });
  }
  const Pn = function(e, r) {
    return !!(ie && e.hasChildNodes() && !Oe(e.firstElementChild) && P(nn, e.textContent) && P(nn, e.innerHTML) || ie && e.namespaceURI === ee && r === "style" && Oe(e.firstElementChild) || e.nodeType === q.processingInstruction || ie && e.nodeType === q.comment && P(an, e.data));
  }, Un = function(e, r, d) {
    if (!Ae[r] && Ht(r) && (I.tagNameCheck instanceof RegExp && P(I.tagNameCheck, r) || I.tagNameCheck instanceof Function && I.tagNameCheck(r)))
      return !1;
    if (Je && !Q[r]) {
      const _ = D(e), b = A(e);
      if (b && _) {
        const T = b.length;
        for (let S = T - 1; S >= 0; --S) {
          const x = e === d ? k(b[S], !0) : b[S];
          _.insertBefore(x, R(e));
        }
      }
    }
    return oe(e), !0;
  }, Ft = function(e, r, d, _) {
    return e.length === 0 ? r : r === d || r === _ ? H(r) : r;
  }, zt = function(e, r) {
    if (te(w.beforeSanitizeElements, e, null), e !== r && D(e) === null)
      return Ue && we(e), !0;
    if (He(e))
      return oe(e), !0;
    const d = L(J ? J(e) : e.nodeName);
    if (O = Ft(w.uponSanitizeElement, O, Ye, De), te(w.uponSanitizeElement, e, {
      tagName: d,
      allowedTags: O
    }), e !== r && D(e) === null)
      return Ue && we(e), !0;
    if (Pn(e, d))
      return oe(e), !0;
    if (Ae[d] || !(ne.tagCheck instanceof Function && ne.tagCheck(d)) && !O[d]) {
      const b = Un(e, d, r);
      return b === !1 && te(w.afterSanitizeElements, e, null), b;
    }
    if (($ ? $(e) : e.nodeType) === q.element && !Dn(e) || (d === "noscript" || d === "noembed" || d === "noframes") && P(ma, e.innerHTML))
      return oe(e), !0;
    if (ae && e.nodeType === q.text) {
      const b = Be(e.textContent);
      e.textContent !== b && (ke(n.removed, {
        element: e.cloneNode()
      }), e.textContent = b);
    }
    return te(w.afterSanitizeElements, e, null), !1;
  }, Bt = function(e, r, d) {
    if (yt[r] || ie && r === "patchsrc" || ie && r === "for" && e !== "label" && e !== "output" || wt && (r === "id" || r === "name") && (d in t || d in Rn))
      return !1;
    const _ = N[r] || ne.attributeCheck instanceof Function && ne.attributeCheck(r, e);
    if (!(Xe && P(kn, r))) {
      if (!(Et && P(yn, r))) {
        if (_) {
          if (!et[r]) {
            if (!P(kt, Ne(d, Tt, ""))) {
              if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && qt(d, "data:") === 0 && Rt[e])) {
                if (!(At && !P(En, Ne(d, Tt, "")))) {
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
          !(Ht(e) && (I.tagNameCheck instanceof RegExp && P(I.tagNameCheck, e) || I.tagNameCheck instanceof Function && I.tagNameCheck(e)) && (I.attributeNameCheck instanceof RegExp && P(I.attributeNameCheck, r) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(r, e)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          r === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && P(I.tagNameCheck, d) || I.tagNameCheck instanceof Function && I.tagNameCheck(d)))
        ) return !1;
      }
    }
    return !0;
  }, $n = E({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ht = function(e) {
    return !$n[Le(e)] && P(An, e);
  }, Fn = function(e, r, d, _) {
    if (j && typeof m == "object" && typeof m.getAttributeType == "function" && !d)
      switch (m.getAttributeType(e, r)) {
        case "TrustedHTML":
          return ge(_);
        case "TrustedScriptURL":
          return pn(_);
      }
    return _;
  }, zn = function(e, r, d, _) {
    try {
      d ? e.setAttributeNS(d, r, _) : e.setAttribute(r, _), He(e) ? oe(e) : Vt(n.removed);
    } catch {
      ue(r, e);
    }
  }, Gt = function(e) {
    te(w.beforeSanitizeAttributes, e, null);
    const r = e.attributes;
    if (!r || He(e))
      return;
    N = Ft(w.uponSanitizeAttribute, N, qe, Ce);
    const d = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let _ = r.length;
    const b = L(e.nodeName);
    for (; _--; ) {
      const T = r[_], S = T.name, x = T.namespaceURI, V = T.value, Y = L(S), lt = V;
      let W = S === "value" ? lt : Zn(lt);
      if (d.attrName = Y, d.attrValue = W, d.keepAttr = !0, d.forceKeepAttr = void 0, te(w.uponSanitizeAttribute, e, d), W = d.attrValue, Ot && (Y === "id" || Y === "name") && qt(W, Nt) !== 0 && (ue(S, e), W = Nt + W), ie && P(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, W)) {
        ue(S, e);
        continue;
      }
      if (Y === "attributename" && Yt(W, "href")) {
        ue(S, e);
        continue;
      }
      if (!d.forceKeepAttr) {
        if (!d.keepAttr) {
          ue(S, e);
          continue;
        }
        if (!St && P(_a, W)) {
          ue(S, e);
          continue;
        }
        if (ae && (W = Be(W)), !Bt(b, Y, W)) {
          ue(S, e);
          continue;
        }
        W = Fn(b, Y, x, W), W !== lt && zn(e, S, x, W);
      }
    }
    te(w.afterSanitizeAttributes, e, null);
  }, Ge = function(e) {
    let r = null;
    const d = $t(e);
    for (te(w.beforeSanitizeShadowDOM, e, null); r = d.nextNode(); )
      if (te(w.uponSanitizeShadowNode, r, null), zt(r, e), Gt(r), ve(r.content) && Ge(r.content), ($ ? $(r) : r.nodeType) === q.element) {
        const b = G(r);
        ve(b) && (st(b), Ge(b));
      }
    te(w.afterSanitizeShadowDOM, e, null);
  }, st = function(e) {
    const r = [{
      node: e,
      shadow: null
    }];
    for (; r.length > 0; ) {
      const d = r.pop();
      if (d.shadow) {
        Ge(d.shadow);
        continue;
      }
      const _ = d.node, T = ($ ? $(_) : _.nodeType) === q.element, S = A(_);
      if (S)
        for (let x = S.length - 1; x >= 0; --x)
          r.push({
            node: S[x],
            shadow: null
          });
      if (T) {
        const x = J ? J(_) : null;
        if (typeof x == "string" && L(x) === "template") {
          const V = _.content;
          ve(V) && r.push({
            node: V,
            shadow: null
          });
        }
      }
      if (T) {
        const x = G(_);
        ve(x) && r.push({
          node: null,
          shadow: x
        }, {
          node: x,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(p) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = null, d = null, _ = null, b = null;
    if (tt = !p, tt && (p = "<!-->"), typeof p != "string" && !Oe(p) && (p = na(p), typeof p != "string"))
      throw de("dirty is not a string, aborting");
    if (!n.isSupported)
      return p;
    Ke ? (O = De, N = Ce) : ot(e), (w.uponSanitizeElement.length > 0 || w.uponSanitizeAttribute.length > 0) && (O = H(O)), w.uponSanitizeAttribute.length > 0 && (N = H(N)), n.removed = [];
    const T = Ue && typeof p != "string" && Oe(p);
    if (T) {
      Mn(p);
      const V = J ? J(p) : p.nodeName;
      if (typeof V == "string") {
        const Y = L(V);
        if (!O[Y] || Ae[Y])
          throw ze(p), de("root node is forbidden and cannot be sanitized in-place");
      }
      if (He(p))
        throw ze(p), de("root node is clobbered and cannot be sanitized in-place");
      try {
        st(p);
      } catch (Y) {
        throw ze(p), Y;
      }
    } else if (Oe(p))
      r = Ut("<!---->"), d = r.ownerDocument.importNode(p, !0), d.nodeType === q.element && d.nodeName === "BODY" || d.nodeName === "HTML" ? r = d : r.appendChild(d), st(d);
    else {
      if (!me && !ae && !ce && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return j && Pe ? ge(p) : p;
      if (r = Ut(p), !r)
        return me ? null : Pe ? le : "";
    }
    r && Ze && oe(r.firstChild);
    const S = T ? p : r;
    try {
      const V = $t(S);
      for (; _ = V.nextNode(); )
        zt(_, S), Gt(_), ve(_.content) && Ge(_.content);
    } catch (V) {
      throw T && (ze(p), Te(n.removed, (Y) => {
        Y.element && we(Y.element);
      })), V;
    }
    if (T)
      return Te(n.removed, (V) => {
        V.element && we(V.element);
      }), ae && rt(p), p;
    if (me) {
      if (ae && rt(r), Me)
        for (b = mn.call(r.ownerDocument); r.firstChild; )
          b.appendChild(r.firstChild);
      else
        b = r;
      return (N.shadowroot || N.shadowrootmode) && (b = hn.call(c, b, !0)), b;
    }
    let x = ce ? r.outerHTML : r.innerHTML;
    return ce && O["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && P(pa, r.ownerDocument.doctype.name) && (x = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + x), ae && (x = Be(x)), j && Pe ? ge(x) : x;
  }, n.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ot(p), Ke = !0, De = O, Ce = N;
  }, n.clearConfig = function() {
    be = null, Ke = !1, De = null, Ce = null, j = je, le = "";
  }, n.isValidAttribute = function(p, e, r) {
    be || ot({});
    const d = L(p), _ = L(e);
    return Bt(d, _, r);
  }, n.addHook = function(p, e) {
    typeof e == "function" && U(w, p) && ke(w[p], e);
  }, n.removeHook = function(p, e) {
    if (U(w, p)) {
      if (e !== void 0) {
        const r = Xn(w[p], e);
        return r === -1 ? void 0 : Kn(w[p], r, 1)[0];
      }
      return Vt(w[p]);
    }
  }, n.removeHooks = function(p) {
    U(w, p) && (w[p] = []);
  }, n.removeAllHooks = function() {
    w = on();
  }, n;
}
var va = dn();
const Ta = ["a", "abbr", "b", "br", "code", "em", "li", "ol", "p", "span", "strong", "ul"], ka = ["href", "title", "target", "rel", "class"];
function o(i, n, t) {
  const c = document.createElement(i);
  return n && (c.className = n), t != null && (c.textContent = String(t)), c;
}
function X(i, n) {
  if (n && typeof n == "object" && "__html__" in n) {
    const t = String(n.__html__), c = va.sanitize(t, { ALLOWED_TAGS: Ta, ALLOWED_ATTR: ka }), a = o("div");
    for (a.innerHTML = c; a.firstChild; ) i.append(a.firstChild);
    return;
  }
  n != null && i.append(document.createTextNode(String(n)));
}
function _t(i) {
  const n = String(i ?? "#").trim();
  return /^(https?:|mailto:|tel:|\/|#)/i.test(n) ? n : "#";
}
function F(i, n, t = "govuk-link", c = !1) {
  const a = o("a", `${t}${c ? " st-gds-external" : ""}`, String(i ?? ""));
  return a.href = _t(n), c && (a.target = "_blank", a.rel = "noopener noreferrer"), a;
}
function Z(i, n = "field") {
  return `st-gds-${String(i._key ?? "gds").replace(/[^a-zA-Z0-9_-]/g, "-")}-${n}`;
}
function ya(i, n, t) {
  const c = [];
  if (n.hint) {
    const a = `${t}-hint`, l = o("div", "govuk-hint", n.hint);
    l.id = a, i.append(l), c.push(a);
  }
  if (n.error) {
    const a = `${t}-error`, l = o("p", "govuk-error-message");
    l.id = a;
    const s = o("span", "govuk-visually-hidden", "Error:");
    l.append(s, document.createTextNode(` ${String(n.error)}`)), i.append(l), c.push(a);
  }
  return c;
}
function pe(i, n, t = "label") {
  const c = o("div", `govuk-form-group${i.error ? " govuk-form-group--error" : ""}`), a = o(t, t === "legend" ? "govuk-fieldset__legend govuk-fieldset__legend--m" : "govuk-label", i.label);
  if (a instanceof HTMLLabelElement && (a.htmlFor = n), i.required) {
    const s = o("span", "govuk-visually-hidden", " required");
    a.append(s);
  }
  c.append(a);
  const l = ya(c, i, n);
  return { group: c, label: a, describedBy: l };
}
function fe(i, n) {
  n.length && i.setAttribute("aria-describedby", n.join(" "));
}
function fn(i) {
  return i instanceof HTMLTextAreaElement ? !0 : i instanceof HTMLInputElement ? ["text", "search", "tel", "url", "password"].includes(i.type) : !1;
}
function Ea(i, n, t) {
  if (!n) return;
  const c = i.ownerDocument.getElementById(n);
  !c || !i.contains(c) || (c.focus({ preventScroll: !0 }), t && fn(c) && c.setSelectionRange(t[0], t[1]));
}
function rn(i, n, t, c = !1) {
  const a = Z(n), { group: l, describedBy: s } = pe(n, a), u = o("input", `govuk-input${n.error ? " govuk-input--error" : ""} st-gds-width-${String(n.width ?? "full")}`);
  u.id = a, u.name = a, u.type = c && !n.visible ? "password" : String(n.input_type ?? "text"), u.value = String(n.value ?? ""), u.disabled = !!n.disabled, u.required = !!n.required, n.autocomplete && u.setAttribute("autocomplete", String(n.autocomplete)), n.inputmode && (u.inputMode = String(n.inputmode)), fe(u, s), u.addEventListener("change", () => t.setStateValue("value", u.value));
  let f = u;
  if (n.prefix || n.suffix) {
    const g = o("div", "govuk-input__wrapper");
    n.prefix && g.append(o("div", "govuk-input__prefix", n.prefix)), g.append(u), n.suffix && g.append(o("div", "govuk-input__suffix", n.suffix)), f = g;
  }
  if (c) {
    const g = o("div", "st-gds-password-wrapper");
    g.append(u);
    const h = o(
      "button",
      "govuk-button govuk-button--secondary st-gds-password-toggle",
      n.visible ? String(n.hide_label ?? "Hide") : String(n.show_label ?? "Show")
    );
    h.type = "button", h.setAttribute("aria-controls", a), h.addEventListener("click", () => t.setStateValue("visible", !n.visible)), g.append(h), f = g;
  }
  l.append(f), i.append(l);
}
function sn(i, n, t, c = !1) {
  const a = Z(n), { group: l, describedBy: s } = pe(n, a), u = o("textarea", `govuk-textarea${n.error ? " govuk-textarea--error" : ""}`);
  u.id = a, u.name = a, u.rows = Number(n.rows ?? 5), u.value = String(n.value ?? ""), u.disabled = !!n.disabled, u.required = !!n.required, fe(u, s);
  let f = () => {
  };
  if (u.addEventListener("input", () => {
    c && f();
  }), u.addEventListener("change", () => t.setStateValue("value", u.value)), l.append(u), c) {
    const g = Number(n.max_characters), h = o("div", "govuk-character-count__message govuk-hint", "");
    h.id = `${a}-info`, h.setAttribute("aria-live", "polite"), s.push(h.id), fe(u, s), l.append(h), f = () => {
      const m = g - u.value.length;
      h.textContent = m >= 0 ? `You have ${m} character${m === 1 ? "" : "s"} remaining` : `You have ${Math.abs(m)} character${m === -1 ? "" : "s"} too many`, h.classList.toggle("govuk-error-message", m < 0);
    }, f();
  }
  i.append(l);
}
function Aa(i, n, t) {
  const c = o("section", "st-gds-chatbot");
  c.setAttribute("aria-label", String(n.label)), c.append(o("h2", "govuk-heading-m st-gds-chatbot__title", n.label));
  const a = o("div", "st-gds-chatbot__transcript");
  a.setAttribute("role", "log"), a.setAttribute("aria-label", `${String(n.label)} messages`), a.setAttribute("aria-live", "polite"), a.setAttribute("aria-relevant", "additions text"), a.tabIndex = 0;
  const l = n.messages ?? [];
  l.length || a.append(o("p", "govuk-body st-gds-chatbot__empty", n.empty_text));
  for (const y of l) {
    const R = y.name || (y.role === "user" ? n.user_name : n.assistant_name), A = o("article", `st-gds-chat-message st-gds-chat-message--${y.role}`);
    A.setAttribute("aria-label", `${String(R)} message`);
    const D = o("p", "st-gds-chat-message__meta");
    D.append(o("strong", "st-gds-chat-message__name", R)), y.timestamp && (D.append(document.createTextNode(" ")), D.append(o("time", "st-gds-chat-message__time", y.timestamp)));
    const G = o("div", "st-gds-chat-message__body");
    X(G, y.content), A.append(D, G), a.append(A);
  }
  if (n.waiting) {
    const y = o("p", "govuk-body st-gds-chatbot__status", `${String(n.assistant_name)} is responding`);
    y.setAttribute("role", "status"), a.append(y);
  }
  c.append(a);
  const s = o("form", "st-gds-chatbot__composer"), u = Z(n, "message"), f = { ...n, label: n.input_label, required: !0 }, { group: g, describedBy: h } = pe(f, u), m = o("textarea", `govuk-textarea${n.error ? " govuk-textarea--error" : ""}`);
  m.id = u, m.name = u, m.rows = 3, m.value = String(n.draft ?? ""), m.required = !0, m.disabled = !!(n.disabled || n.waiting), n.placeholder && (m.placeholder = String(n.placeholder)), fe(m, h), g.append(m);
  const v = o("button", "govuk-button st-gds-chatbot__send", n.send_label);
  v.type = "submit", v.disabled = m.disabled || !m.value.trim();
  const k = () => {
    v.disabled = m.disabled || !m.value.trim(), t.setStateValue("draft", m.value);
  };
  m.addEventListener("input", k), m.addEventListener("keydown", (y) => {
    y.key === "Enter" && (y.ctrlKey || y.metaKey) && (y.preventDefault(), s.requestSubmit());
  }), s.addEventListener("submit", (y) => {
    y.preventDefault();
    const R = m.value.trim();
    !R || m.disabled || (m.value = "", v.disabled = !0, t.setStateValue("draft", ""), t.setTriggerValue("submitted", R));
  }), s.append(g, v), c.append(s), i.append(c);
}
function ln(i, n, t, c) {
  const a = Z(n), l = o("fieldset", "govuk-fieldset"), { group: s, label: u, describedBy: f } = pe(n, a, "legend");
  l.setAttribute("aria-describedby", f.join(" ")), l.append(u);
  for (const k of [...s.children].slice(1)) l.append(k);
  const g = c ? `govuk-checkboxes${n.small ? " govuk-checkboxes--small" : ""}` : `govuk-radios${n.inline ? " govuk-radios--inline" : ""}`, h = o("div", g), m = n.options ?? [], v = c ? n.value ?? [] : [n.value];
  m.forEach((k, y) => {
    const R = o("div", c ? "govuk-checkboxes__item" : "govuk-radios__item"), A = o("input", c ? "govuk-checkboxes__input" : "govuk-radios__input");
    A.type = c ? "checkbox" : "radio", A.name = a, A.id = `${a}-${y}`, A.value = String(y), A.disabled = !!n.disabled || !!k.disabled, A.checked = v.some((M) => JSON.stringify(M) === JSON.stringify(k.value));
    const D = o("label", c ? "govuk-label govuk-checkboxes__label" : "govuk-label govuk-radios__label", k.label);
    D.htmlFor = A.id, R.append(A, D), k.hint && R.append(o("div", "govuk-hint govuk-checkboxes__hint", k.hint)), h.append(R);
    let G = null;
    k.conditional && (G = o("div", "st-gds-conditional"), X(G, k.conditional), G.hidden = !A.checked, h.append(G)), A.addEventListener("change", () => {
      if (G && (G.hidden = !A.checked), c) {
        const M = [...h.querySelectorAll("input:checked")].map(($) => m[Number($.value)].value);
        t.setStateValue("value", M);
      } else
        t.setStateValue("value", k.value);
    });
  }), l.append(h), s.replaceChildren(l), i.append(s);
}
function Sa(i, n, t) {
  const c = Z(n), { group: a, describedBy: l } = pe(n, c), s = o("select", "govuk-select");
  s.id = c, s.name = c, s.disabled = !!n.disabled, s.required = !!n.required, fe(s, l);
  const u = n.options ?? [];
  n.required || s.append(o("option", void 0, "Select an option")), u.forEach((f, g) => {
    const h = o("option", void 0, f.label);
    h.value = String(g), h.disabled = !!f.disabled, h.selected = JSON.stringify(f.value) === JSON.stringify(n.value), s.append(h);
  }), s.addEventListener("change", () => {
    t.setStateValue("value", s.value === "" ? null : u[Number(s.value)].value);
  }), a.append(s), i.append(a);
}
function wa(i, n, t) {
  const c = Z(n), { group: a, label: l, describedBy: s } = pe(n, c, "legend"), u = o("fieldset", "govuk-fieldset");
  u.append(l);
  for (const k of [...a.children].slice(1)) u.append(k);
  const f = String(n.value ?? "").split("-"), g = o("div", "st-gds-date-row"), h = [["day", f[2] ?? "", 2], ["month", f[1] ?? "", 2], ["year", f[0] ?? "", 4]], m = [];
  h.forEach(([k, y, R]) => {
    const A = o("div", "govuk-form-group"), D = `${c}-${k}`, G = o("label", "govuk-label", k[0].toUpperCase() + k.slice(1));
    G.htmlFor = D;
    const M = o("input", `govuk-input${k === "year" ? " st-gds-date-year" : ""}`);
    M.id = D, M.name = D, M.inputMode = "numeric", M.pattern = "[0-9]*", M.maxLength = R, M.value = y, M.disabled = !!n.disabled, fe(M, s), A.append(G, M), g.append(A), m.push(M);
  });
  const v = () => {
    const [k, y, R] = m.map((D) => D.value.padStart(2, "0")), A = k && y && R;
    t.setStateValue("value", A ? `${R}-${y}-${k}` : null);
  };
  m.forEach((k) => k.addEventListener("change", v)), u.append(g), a.replaceChildren(u), i.append(a);
}
function Oa(i, n, t) {
  const c = Z(n), { group: a, describedBy: l } = pe(n, c), s = o("input", `govuk-file-upload${n.error ? " govuk-file-upload--error" : ""}`);
  s.type = "file", s.id = c, s.name = c, s.disabled = !!n.disabled, s.required = !!n.required, s.accept = (n.accept ?? []).join(","), fe(s, l);
  const u = o("p", "st-gds-file-meta");
  s.addEventListener("change", async () => {
    const f = s.files?.[0];
    if (!f) {
      t.setStateValue("file", null), u.textContent = "";
      return;
    }
    const g = Number(n.max_size_mb) * 1024 * 1024;
    if (f.size > g) {
      u.className = "govuk-error-message", u.textContent = `The selected file must be smaller than ${String(n.max_size_mb)} MB`, s.value = "";
      return;
    }
    const h = new Uint8Array(await f.arrayBuffer());
    u.className = "st-gds-file-meta", u.textContent = `${f.name} (${Math.ceil(f.size / 1024)} KB)`, t.setStateValue("file", { name: f.name, type: f.type, size: f.size, data: h });
  }), a.append(s, u), i.append(a);
}
function Na(i, n, t) {
  const c = String(n.kind ?? "primary"), l = o("button", `govuk-button${{ secondary: " govuk-button--secondary", warning: " govuk-button--warning" }[c] ?? ""}${n.width === "full" ? " st-gds-button-full" : ""}`, n.label);
  l.type = "button", l.disabled = !!n.disabled, c === "start" && (l.classList.add("govuk-button--start"), l.append(document.createTextNode("  →"))), l.addEventListener("click", () => t.setTriggerValue("clicked", !0)), i.append(l);
}
function Ra(i, n = "text") {
  if (n === "base64") {
    if (typeof i != "string") throw new TypeError("Base64 download data must be text");
    const t = window.atob(i);
    return Uint8Array.from(t, (c) => c.charCodeAt(0));
  }
  if (typeof i == "string") return i;
  if (i instanceof Uint8Array) return new Uint8Array(i);
  if (i instanceof ArrayBuffer) return new Uint8Array(i);
  if (Array.isArray(i) && i.every((t) => Number.isInteger(t)))
    return new Uint8Array(i);
  throw new TypeError("Download data must be text or bytes");
}
function La(i, n, t) {
  const a = String(n.kind ?? "secondary") === "secondary" ? " govuk-button--secondary" : "", l = n.width === "full" ? " st-gds-button-full" : "", s = o("button", `govuk-button${a}${l}`, n.label);
  s.type = "button", s.disabled = !!n.disabled, n.help && (s.title = String(n.help)), s.addEventListener("click", () => {
    const u = new Blob([Ra(n.data, String(n.encoding))], {
      type: String(n.mime)
    }), f = URL.createObjectURL(u), g = o("a");
    g.href = f, g.download = String(n.file_name), g.hidden = !0, i.append(g), g.click(), g.remove(), window.setTimeout(() => URL.revokeObjectURL(f), 0), t.setTriggerValue("clicked", !0);
  }), i.append(s);
}
function xa(i, n, t) {
  const c = n.items ?? [], a = new Set(n.open ?? []), l = o("div", "govuk-accordion");
  c.forEach((s, u) => {
    const f = o("div", "govuk-accordion__section"), g = o("h2", "govuk-accordion__section-heading"), h = o("button", "govuk-accordion__section-button", s.heading);
    h.type = "button";
    const m = Z(n, `accordion-${u}`);
    h.setAttribute("aria-controls", m), h.setAttribute("aria-expanded", String(a.has(u) || s.expanded));
    const v = o("div", "govuk-accordion__section-content");
    v.id = m, v.hidden = !(a.has(u) || s.expanded), X(v, s.content), h.addEventListener("click", () => {
      v.hidden = !v.hidden, h.setAttribute("aria-expanded", String(!v.hidden)), v.hidden ? a.delete(u) : a.add(u), t.setStateValue("open", [...a]);
    }), g.append(h), f.append(g, v), l.append(f);
  }), i.append(l);
}
function Ia(i, n, t) {
  const c = n.items ?? [];
  let a = Number(n.selected ?? 0);
  const l = o("div", "govuk-tabs"), s = o("h2", "govuk-tabs__title", "Contents"), u = o("ul", "govuk-tabs__list");
  u.setAttribute("role", "tablist");
  const f = [], g = [], h = (m) => {
    a = m, g.forEach((v, k) => {
      v.parentElement?.classList.toggle("govuk-tabs__list-item--selected", k === m), v.setAttribute("aria-selected", String(k === m));
    }), f.forEach((v, k) => {
      v.hidden = k !== m;
    }), t.setStateValue("selected", m);
  };
  c.forEach((m, v) => {
    const k = o("li", `govuk-tabs__list-item${v === a ? " govuk-tabs__list-item--selected" : ""}`);
    k.setAttribute("role", "presentation");
    const y = F(m.label, `#${Z(n, `panel-${v}`)}`, "govuk-tabs__tab");
    y.id = Z(n, `tab-${v}`), y.setAttribute("role", "tab"), y.setAttribute("aria-selected", String(v === a)), y.addEventListener("click", (A) => {
      A.preventDefault(), h(v);
    }), k.append(y), u.append(k), g.push(y);
    const R = o("div", "govuk-tabs__panel");
    R.id = Z(n, `panel-${v}`), R.setAttribute("role", "tabpanel"), R.setAttribute("aria-labelledby", y.id), R.hidden = v !== a, X(R, m.content), f.push(R);
  }), l.append(s, u, ...f), i.append(l);
}
function Da(i, n, t, c) {
  switch (n) {
    case "bootstrap": {
      document.documentElement.style.setProperty("--st-gds-brand", String(t.brand_colour)), document.body.classList.toggle("st-gds-minimal-chrome", t.chrome === "minimal");
      const a = "streamlit-gds-host-styles";
      let l = document.getElementById(a);
      l || (l = document.createElement("style"), l.id = a, document.head.append(l)), l.textContent = `
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
      const a = o("span", "st-gds-space");
      a.style.height = `${Number(t.size ?? 4) * 5}px`, i.append(a);
      return;
    }
    case "heading": {
      const a = { xl: "govuk-heading-xl", l: "govuk-heading-l", m: "govuk-heading-m", s: "govuk-heading-s" }, l = o("h2", a[String(t.size)] ?? a.l);
      t.caption && l.append(o("span", "govuk-caption-l st-gds-heading-caption", t.caption)), l.append(document.createTextNode(String(t.text ?? ""))), i.append(l);
      return;
    }
    case "paragraph": {
      const a = o("p", t.lead ? "govuk-body-l" : "govuk-body");
      X(a, t.content), i.append(a);
      return;
    }
    case "link":
      i.append(F(t.label, t.href, "govuk-link", !!t.external));
      return;
    case "list": {
      const a = o(t.ordered ? "ol" : "ul", `govuk-list${t.ordered ? " govuk-list--number" : t.bullet ? " govuk-list--bullet" : ""}`);
      for (const l of t.items ?? []) a.append(o("li", void 0, l));
      i.append(a);
      return;
    }
    case "image": {
      const a = o("figure"), l = o("img", "govuk-image");
      l.src = _t(t.src), l.alt = String(t.alt ?? ""), t.width && (l.width = Number(t.width)), a.append(l), t.caption && a.append(o("figcaption", "govuk-body-s", t.caption)), i.append(a);
      return;
    }
    case "section_break": {
      i.append(o("hr", `govuk-section-break govuk-section-break--${String(t.size ?? 3)}${t.visible ? " govuk-section-break--visible" : ""}`));
      return;
    }
    case "back_link":
      i.append(F(t.label, t.href, "govuk-back-link"));
      return;
    case "breadcrumbs": {
      const a = o("nav", `govuk-breadcrumbs${t.collapse_on_mobile ? " govuk-breadcrumbs--collapse-on-mobile" : ""}`);
      a.setAttribute("aria-label", "Breadcrumb");
      const l = o("ol", "govuk-breadcrumbs__list");
      for (const s of t.items ?? []) {
        const u = o("li", "govuk-breadcrumbs__list-item");
        s.href ? u.append(F(s.label, s.href, "govuk-breadcrumbs__link")) : u.append(document.createTextNode(s.label)), l.append(u);
      }
      a.append(l), i.append(a);
      return;
    }
    case "details": {
      const a = o("details", "govuk-details");
      a.open = !!t.open, a.append(o("summary", "govuk-details__summary", t.summary));
      const l = o("div", "govuk-details__text");
      X(l, t.content), a.append(l), i.append(a);
      return;
    }
    case "inset_text": {
      const a = o("div", "govuk-inset-text");
      X(a, t.content), i.append(a);
      return;
    }
    case "error_message": {
      const a = o("p", "govuk-error-message");
      a.append(o("span", "govuk-visually-hidden", "Error:"), document.createTextNode(` ${String(t.text)}`)), i.append(a);
      return;
    }
    case "error_summary": {
      const a = o("div", "govuk-error-summary");
      a.tabIndex = -1, a.setAttribute("role", "alert"), a.append(o("h2", "govuk-error-summary__title", t.title)), t.description && a.append(o("p", "govuk-body", t.description));
      const l = o("ul", "govuk-list govuk-error-summary__list");
      for (const s of t.errors ?? []) {
        const u = o("li");
        u.append(F(s.text, s.href)), l.append(u);
      }
      a.append(l), i.append(a), t.focus && queueMicrotask(() => a.focus());
      return;
    }
    case "fieldset": {
      const a = o("fieldset", "govuk-fieldset");
      a.append(o("legend", `govuk-fieldset__legend govuk-fieldset__legend--${String(t.heading_size)}`, t.legend));
      const l = o("div");
      X(l, t.content), a.append(l), i.append(a);
      return;
    }
    case "header": {
      const a = o("header", "st-gds-generic-header");
      a.style.setProperty("--st-gds-brand", String(t.brand_colour ?? "#1d70b8"));
      const l = o("div", "st-gds-generic-header__inner"), s = F(t.organisation, t.home_url, "st-gds-generic-header__organisation");
      l.append(s), t.service_name && l.append(o("span", "st-gds-generic-header__service", t.service_name));
      const u = t.navigation;
      if (u?.length) {
        const f = o("nav");
        f.setAttribute("aria-label", "Primary navigation");
        const g = o("ul", "st-gds-generic-header__nav");
        u.forEach((h) => {
          const m = o("li"), v = F(h.label, h.href);
          h.active && v.setAttribute("aria-current", "page"), m.append(v), g.append(m);
        }), f.append(g), l.append(f);
      }
      a.append(l), i.append(a);
      return;
    }
    case "footer": {
      const a = o("footer", "st-gds-neutral-footer"), l = o("div", "st-gds-neutral-footer__inner");
      t.organisation && l.append(o("h2", "govuk-heading-s", t.organisation)), t.text && l.append(o("p", "govuk-body-s", t.text));
      const s = t.links;
      if (s?.length) {
        const u = o("ul", "st-gds-neutral-footer__links");
        s.forEach((f) => {
          const g = o("li");
          g.append(F(f.label, f.href, "govuk-link", f.external)), u.append(g);
        }), l.append(u);
      }
      a.append(l), i.append(a);
      return;
    }
    case "notification_banner": {
      const a = o("div", `govuk-notification-banner${t.success ? " govuk-notification-banner--success" : ""}`);
      a.setAttribute("role", String(t.role ?? "region"));
      const l = o("div", "govuk-notification-banner__header");
      l.append(o("h2", "govuk-notification-banner__title", t.title)), a.append(l);
      const s = o("div", "govuk-notification-banner__content");
      X(s, t.content), a.append(s), i.append(a);
      return;
    }
    case "pagination": {
      const a = o("nav", "govuk-pagination");
      a.setAttribute("aria-label", "Pagination");
      const l = o("ul", "govuk-pagination__list"), s = (u, f) => {
        if (!u) return;
        const g = u, h = o("li", `govuk-pagination__${f}`);
        h.append(F(`${f === "prev" ? "← " : ""}${g.label}${f === "next" ? " →" : ""}`, g.href, "govuk-link govuk-pagination__link")), l.append(h);
      };
      s(t.previous, "prev");
      for (const u of t.items ?? []) {
        const f = o("li", `govuk-pagination__item${u.current ? " govuk-pagination__item--current" : ""}`), g = F(u.label, u.href, "govuk-link govuk-pagination__link");
        u.current && g.setAttribute("aria-current", "page"), f.append(g), l.append(f);
      }
      s(t.next, "next"), a.append(l), i.append(a);
      return;
    }
    case "phase_banner": {
      const a = o("div", "govuk-phase-banner"), l = o("p", "govuk-phase-banner__content");
      l.append(o("strong", "govuk-tag govuk-phase-banner__content__tag", t.phase));
      const s = o("span", "govuk-phase-banner__text");
      X(s, t.content), l.append(s), a.append(l), i.append(a);
      return;
    }
    case "service_navigation": {
      const a = o("nav", "govuk-service-navigation");
      a.setAttribute("aria-label", "Service information");
      const l = o("div", "govuk-width-container");
      t.service_name && l.append(F(t.service_name, t.service_url, "govuk-service-navigation__service-name"));
      const s = o("ul", "govuk-service-navigation__list");
      for (const u of t.items ?? []) {
        const f = o("li", `govuk-service-navigation__item${u.active ? " govuk-service-navigation__item--active" : ""}`), g = F(u.label, u.href, "govuk-service-navigation__link");
        u.active && g.setAttribute("aria-current", "page"), f.append(g), s.append(f);
      }
      l.append(s), a.append(l), i.append(a);
      return;
    }
    case "skip_link":
      i.append(F(t.label, t.href, "govuk-skip-link"));
      return;
    case "panel": {
      const a = t.variant === "interruption", l = o("div", a ? "st-gds-panel--interruption" : "govuk-panel govuk-panel--confirmation");
      if (l.append(o("h1", a ? "govuk-heading-xl" : "govuk-panel__title", t.title)), t.content) {
        const s = o("div", a ? "govuk-body-l" : "govuk-panel__body");
        X(s, t.content), l.append(s);
      }
      i.append(l);
      return;
    }
    case "kpi_card": {
      const a = t.rag_status ? String(t.rag_status) : null, l = a ? ` st-gds-kpi-card--rag st-gds-kpi-card--rag-${a}` : "", s = o("section", `st-gds-kpi-card${l}`);
      if (s.setAttribute("aria-label", String(t.label)), s.append(o("h3", "st-gds-kpi-card__label", t.label)), a) {
        const u = {
          red: "Red status",
          amber: "Amber status",
          green: "Green status"
        }, f = o("p", "st-gds-kpi-card__status"), g = o("span", "st-gds-kpi-card__status-marker");
        g.setAttribute("aria-hidden", "true"), f.append(g, document.createTextNode(u[a] ?? `${a} status`)), s.append(f);
      }
      if (s.append(o("p", "st-gds-kpi-card__value", t.value)), t.change !== void 0 && t.change !== null) {
        const u = String(t.trend ?? "neutral"), f = o("p", `st-gds-kpi-card__change st-gds-kpi-card__change--${u}`), g = {
          up: { arrow: "↑", label: "Increased by" },
          down: { arrow: "↓", label: "Decreased by" },
          neutral: { arrow: "", label: "Change:" }
        }, h = g[u] ?? g.neutral;
        if (h.arrow) {
          const m = o("span", "st-gds-kpi-card__arrow", h.arrow);
          m.setAttribute("aria-hidden", "true"), f.append(m);
        }
        f.append(o("span", "govuk-visually-hidden", `${h.label} `)), f.append(o("strong", "st-gds-kpi-card__change-value", t.change)), t.comparison && (f.append(document.createTextNode(" ")), f.append(o("span", "st-gds-kpi-card__comparison", t.comparison))), s.append(f);
      }
      t.supporting_text && s.append(o("p", "st-gds-kpi-card__supporting", t.supporting_text)), i.append(s);
      return;
    }
    case "summary_list": {
      const a = t.card_title ? o("div", "govuk-summary-card") : i;
      if (t.card_title) {
        const s = o("div", "govuk-summary-card__title-wrapper");
        s.append(o("h2", "govuk-summary-card__title", t.card_title)), a.append(s);
      }
      const l = o("dl", `govuk-summary-list${t.card_title ? " govuk-summary-card__content" : ""}`);
      for (const s of t.rows ?? []) {
        const u = o("div", "govuk-summary-list__row");
        u.append(o("dt", "govuk-summary-list__key", s.key));
        const f = o("dd", "govuk-summary-list__value");
        if (X(f, s.value), u.append(f), s.actions?.length) {
          const g = o("dd", "govuk-summary-list__actions");
          s.actions.forEach((h, m) => {
            m && g.append(document.createTextNode(" "));
            const v = F(h.label, h.href);
            h.visually_hidden_text && v.append(o("span", "govuk-visually-hidden", ` ${h.visually_hidden_text}`)), g.append(v);
          }), u.append(g);
        }
        l.append(u);
      }
      a.append(l), a !== i && i.append(a);
      return;
    }
    case "table": {
      const a = o("table", `govuk-table${t.responsive ? " st-gds-table-responsive" : ""}`);
      t.caption && a.append(o("caption", "govuk-table__caption govuk-table__caption--m", t.caption));
      const l = t.columns, s = o("thead", "govuk-table__head"), u = o("tr", "govuk-table__row");
      l.forEach((g) => u.append(o("th", `govuk-table__header${g.numeric ? " govuk-table__header--numeric" : ""}`, g.heading))), s.append(u), a.append(s);
      const f = o("tbody", "govuk-table__body");
      for (const g of t.rows) {
        const h = o("tr", "govuk-table__row");
        l.forEach((m, v) => {
          const k = o(v === 0 ? "th" : "td", `${v === 0 ? "govuk-table__header" : "govuk-table__cell"}${m.numeric ? ` ${v === 0 ? "govuk-table__header" : "govuk-table__cell"}--numeric` : ""}`, g[m.key]);
          k.setAttribute("data-label", m.heading), v === 0 && k.setAttribute("scope", "row"), h.append(k);
        }), f.append(h);
      }
      a.append(f), i.append(a);
      return;
    }
    case "tag":
      i.append(o("strong", `govuk-tag govuk-tag--${String(t.colour)}`, t.text));
      return;
    case "task_list": {
      t.title && i.append(o("h2", "govuk-heading-m", t.title));
      const a = o("ol", "st-gds-task-list"), l = { not_started: "Not started", in_progress: "In progress", completed: "Completed", cannot_start: "Cannot start yet", optional: "Optional" };
      for (const s of t.items ?? []) {
        const u = o("li", "st-gds-task-list__item"), f = o("div", "st-gds-task-list__row");
        f.append(s.href ? F(s.title, s.href) : o("span", void 0, s.title));
        const g = s.status === "completed" ? "green" : s.status === "in_progress" ? "blue" : "grey";
        f.append(o("strong", `govuk-tag govuk-tag--${g}`, l[s.status] ?? s.status)), u.append(f), s.hint && u.append(o("p", "st-gds-task-list__hint", s.hint)), a.append(u);
      }
      i.append(a);
      return;
    }
    case "warning_text": {
      const a = o("div", "govuk-warning-text");
      a.append(o("span", "govuk-warning-text__icon", "!"));
      const l = o("strong", "govuk-warning-text__text");
      l.append(o("span", "govuk-visually-hidden", `${String(t.icon_fallback)}:`), document.createTextNode(` ${String(t.text)}`)), a.append(l), i.append(a);
      return;
    }
    case "cookie_banner": {
      if (t.hidden) return;
      const a = o("div", "govuk-cookie-banner");
      a.setAttribute("role", "region");
      const l = o("div", "govuk-cookie-banner__message govuk-width-container");
      l.append(o("h2", "govuk-cookie-banner__heading govuk-heading-m", t.title));
      const s = o("div", "govuk-cookie-banner__content");
      X(s, t.content), l.append(s);
      const u = o("div", "govuk-button-group");
      for (const f of t.actions ?? [])
        if (f.kind === "link") u.append(F(f.label, f.href, "govuk-link"));
        else {
          const g = o("button", "govuk-button", f.label);
          g.type = "button", g.addEventListener("click", () => c.setTriggerValue("action", f.value)), u.append(g);
        }
      l.append(u), a.append(l), i.append(a);
      return;
    }
    case "exit_this_page": {
      const a = F(t.label, t.href, "govuk-exit-this-page__button govuk-button govuk-button--warning"), l = (s) => {
        s.key === "Escape" && (c.setTriggerValue("exited", !0), window.location.assign(_t(t.href)));
      };
      return a.addEventListener("click", () => c.setTriggerValue("exited", !0)), document.addEventListener("keydown", l), i.append(a), () => document.removeEventListener("keydown", l);
    }
  }
}
const Ca = (i) => {
  const n = i.data, t = i.parentElement.querySelector(".st-gds-root");
  if (!t) return;
  const c = document.activeElement, a = c && t.contains(c) ? c.id : null, l = a && c && fn(c) ? [c.selectionStart, c.selectionEnd] : null;
  t.replaceChildren();
  const s = n.props ?? {};
  let u;
  switch (n.component) {
    case "button":
      Na(t, s, i);
      break;
    case "download_button":
      La(t, s, i);
      break;
    case "text_input":
      rn(t, s, i);
      break;
    case "password_input":
      rn(t, s, i, !0);
      break;
    case "textarea":
      sn(t, s, i);
      break;
    case "character_count":
      sn(t, s, i, !0);
      break;
    case "select":
      Sa(t, s, i);
      break;
    case "radios":
      ln(t, s, i, !1);
      break;
    case "checkboxes":
      ln(t, s, i, !0);
      break;
    case "date_input":
      wa(t, s, i);
      break;
    case "file_upload":
      Oa(t, s, i);
      break;
    case "accordion":
      xa(t, s, i);
      break;
    case "tabs":
      Ia(t, s, i);
      break;
    case "chatbot":
      Aa(t, s, i);
      break;
    default:
      u = Da(t, n.component, s, i);
  }
  return Ea(t, a, l), u;
};
export {
  X as appendContent,
  Ca as default,
  Ra as downloadBody,
  Ea as restoreFocus,
  _t as safeHref
};
