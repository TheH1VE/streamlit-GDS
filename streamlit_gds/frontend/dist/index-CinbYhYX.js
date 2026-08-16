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
    var c, a, s, l, u = [], f = !0, g = !1;
    try {
      if (s = (t = t.call(i)).next, n !== 0) for (; !(f = (c = s.call(t)).done) && (u.push(c.value), u.length !== n); f = !0) ;
    } catch (h) {
      g = !0, a = h;
    } finally {
      try {
        if (!f && t.return != null && (l = t.return(), Object(l) !== l)) return;
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
  return Bn(i) || Hn(i, n) || Vn(i, n) || Gn();
}
function Vn(i, n) {
  if (i) {
    if (typeof i == "string") return Wt(i, n);
    var t = {}.toString.call(i).slice(8, -1);
    return t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set" ? Array.from(i) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Wt(i, n) : void 0;
  }
}
const cn = Object.entries, Vt = Object.setPrototypeOf, Yn = Object.isFrozen, jn = Object.getPrototypeOf, qn = Object.getOwnPropertyDescriptor;
let z = Object.freeze, B = Object.seal, ye = Object.create, un = typeof Reflect < "u" && Reflect, gt = un.apply, mt = un.construct;
z || (z = function(n) {
  return n;
});
B || (B = function(n) {
  return n;
});
gt || (gt = function(n, t) {
  for (var c = arguments.length, a = new Array(c > 2 ? c - 2 : 0), s = 2; s < c; s++)
    a[s - 2] = arguments[s];
  return n.apply(t, a);
});
mt || (mt = function(n) {
  for (var t = arguments.length, c = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    c[a - 1] = arguments[a];
  return new n(...c);
});
const Te = C(Array.prototype.forEach), Xn = C(Array.prototype.lastIndexOf), Yt = C(Array.prototype.pop), ke = C(Array.prototype.push), Kn = C(Array.prototype.splice), se = Array.isArray, xe = C(String.prototype.toLowerCase), ct = C(String.prototype.toString), jt = C(String.prototype.match), Ne = C(String.prototype.replace), qt = C(String.prototype.indexOf), Zn = C(String.prototype.trim), Jn = C(Number.prototype.toString), Qn = C(Boolean.prototype.toString), Xt = typeof BigInt > "u" ? null : C(BigInt.prototype.toString), Kt = typeof Symbol > "u" ? null : C(Symbol.prototype.toString), U = C(Object.prototype.hasOwnProperty), Re = C(Object.prototype.toString), P = C(RegExp.prototype.test), de = ea(TypeError);
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
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xe;
  if (Vt && Vt(i, null), !se(n))
    return i;
  let c = n.length;
  for (; c--; ) {
    let a = n[c];
    if (typeof a == "string") {
      const s = t(a);
      s !== a && (Yn(n) || (n[c] = s), a = s);
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
    const a = t[0], s = t[1];
    U(i, a) && (se(s) ? n[a] = ta(s) : s && typeof s == "object" && s.constructor === Object ? n[a] = H(s) : n[a] = s);
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
    i = jn(i);
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
  const s = "dompurify" + (c ? "#" + c : "");
  try {
    return n.createPolicy(s, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
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
  const s = i.HTMLTemplateElement, l = i.Node, u = i.Element, f = i.NodeFilter, g = i.NamedNodeMap;
  g === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const h = i.DOMParser, _ = i.trustedTypes, v = u.prototype, k = K(v, "cloneNode"), y = K(v, "remove"), R = K(v, "nextSibling"), A = K(v, "childNodes"), D = K(v, "parentNode"), G = K(v, "shadowRoot"), M = K(v, "attributes"), F = l && l.prototype ? K(l.prototype, "nodeType") : null, J = l && l.prototype ? K(l.prototype, "nodeName") : null, Le = l && l.prototype ? K(l.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const p = t.createElement("template");
    p.content && p.content.ownerDocument && (t = p.content.ownerDocument);
  }
  let V, le = "", Ve, ht = !1, Ee = 0;
  const bt = function() {
    if (Ee > 0)
      throw de('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ge = function(e) {
    bt(), Ee++;
    try {
      return V.createHTML(e);
    } finally {
      Ee--;
    }
  }, pn = function(e) {
    bt(), Ee++;
    try {
      return V.createScriptURL(e);
    } finally {
      Ee--;
    }
  }, gn = function() {
    return ht || (Ve = ba(_, a), ht = !0), Ve;
  }, Ie = t, Ye = Ie.implementation, vt = Ie.createNodeIterator, mn = Ie.createDocumentFragment, _n = Ie.getElementsByTagName, hn = c.importNode;
  let w = on();
  n.isSupported = typeof cn == "function" && typeof D == "function" && Ye && Ye.createHTMLDocument !== void 0;
  const bn = ra, vn = sa, Tn = la, kn = ca, yn = ua, En = da, Tt = fa, An = ga;
  let kt = tn, O = null;
  const je = E({}, [...Zt, ...ut, ...dt, ...ft, ...Jt]);
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
  const xt = E({}, ["audio", "video", "img", "source", "image", "track"]);
  let et = null;
  const Lt = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fe = "http://www.w3.org/1998/Math/MathML", $e = "http://www.w3.org/2000/svg", ee = "http://www.w3.org/1999/xhtml";
  let he = ee, tt = !1, nt = null;
  const Sn = E({}, [Fe, $e, ee], ct), It = z(["mi", "mo", "mn", "ms", "mtext"]);
  let at = E({}, It);
  const Dt = z(["annotation-xml"]);
  let it = E({}, Dt);
  const wn = E({}, ["title", "style", "font", "a", "script"]);
  let Se = null;
  const On = ["application/xhtml+xml", "text/html"], Nn = "text/html";
  let x = null, be = null;
  const Rn = t.createElement("form"), Ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ot = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (be && be === e)
      return;
    (!e || typeof e != "object") && (e = {}), e = H(e), Se = // eslint-disable-next-line unicorn/prefer-includes
    On.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Nn : e.PARSER_MEDIA_TYPE, x = Se === "application/xhtml+xml" ? ct : xe, O = re(e, "ALLOWED_TAGS", je, {
      transform: x
    }), N = re(e, "ALLOWED_ATTR", qe, {
      transform: x
    }), nt = re(e, "ALLOWED_NAMESPACES", Sn, {
      transform: ct
    }), et = re(e, "ADD_URI_SAFE_ATTR", Lt, {
      transform: x,
      base: Lt
    }), Rt = re(e, "ADD_DATA_URI_TAGS", xt, {
      transform: x,
      base: xt
    }), Q = re(e, "FORBID_CONTENTS", Qe, {
      transform: x
    }), Ae = re(e, "FORBID_TAGS", H({}), {
      transform: x
    }), yt = re(e, "FORBID_ATTR", H({}), {
      transform: x
    }), _e = U(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? H(e.USE_PROFILES) : e.USE_PROFILES : !1, Et = e.ALLOW_ARIA_ATTR !== !1, Xe = e.ALLOW_DATA_ATTR !== !1, At = e.ALLOW_UNKNOWN_PROTOCOLS || !1, St = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = e.SAFE_FOR_TEMPLATES || !1, ie = e.SAFE_FOR_XML !== !1, ce = e.WHOLE_DOCUMENT || !1, me = e.RETURN_DOM || !1, Me = e.RETURN_DOM_FRAGMENT || !1, Pe = e.RETURN_TRUSTED_TYPE || !1, Ze = e.FORCE_BODY || !1, wt = e.SANITIZE_DOM !== !1, Ot = e.SANITIZE_NAMED_PROPS || !1, Je = e.KEEP_CONTENT !== !1, Ue = e.IN_PLACE || !1, kt = aa(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : tn, he = typeof e.NAMESPACE == "string" ? e.NAMESPACE : ee, at = U(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? H(e.MATHML_TEXT_INTEGRATION_POINTS) : E({}, It), it = U(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? H(e.HTML_INTEGRATION_POINTS) : E({}, Dt);
    const o = U(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? H(e.CUSTOM_ELEMENT_HANDLING) : ye(null);
    if (I = ye(null), U(o, "tagNameCheck") && Ct(o.tagNameCheck) && (I.tagNameCheck = o.tagNameCheck), U(o, "attributeNameCheck") && Ct(o.attributeNameCheck) && (I.attributeNameCheck = o.attributeNameCheck), U(o, "allowCustomizedBuiltInElements") && typeof o.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = o.allowCustomizedBuiltInElements), B(I), ae && (Xe = !1), Me && (me = !0), _e && (O = E({}, Jt), N = ye(null), _e.html === !0 && (E(O, Zt), E(N, Qt)), _e.svg === !0 && (E(O, ut), E(N, pt), E(N, We)), _e.svgFilters === !0 && (E(O, dt), E(N, pt), E(N, We)), _e.mathMl === !0 && (E(O, ft), E(N, en), E(N, We))), ne.tagCheck = null, ne.attributeCheck = null, U(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? ne.tagCheck = e.ADD_TAGS : se(e.ADD_TAGS) && (O === je && (O = H(O)), E(O, e.ADD_TAGS, x))), U(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? ne.attributeCheck = e.ADD_ATTR : se(e.ADD_ATTR) && (N === qe && (N = H(N)), E(N, e.ADD_ATTR, x))), U(e, "ADD_URI_SAFE_ATTR") && se(e.ADD_URI_SAFE_ATTR) && E(et, e.ADD_URI_SAFE_ATTR, x), U(e, "FORBID_CONTENTS") && se(e.FORBID_CONTENTS) && (Q === Qe && (Q = H(Q)), E(Q, e.FORBID_CONTENTS, x)), U(e, "ADD_FORBID_CONTENTS") && se(e.ADD_FORBID_CONTENTS) && (Q === Qe && (Q = H(Q)), E(Q, e.ADD_FORBID_CONTENTS, x)), Je && (O["#text"] = !0), ce && E(O, ["html", "head", "body"]), O.table && (E(O, ["tbody"]), delete Ae.tbody), e.TRUSTED_TYPES_POLICY) {
      if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const d = V;
      V = e.TRUSTED_TYPES_POLICY;
      try {
        le = ge("");
      } catch (m) {
        throw V = d, m;
      }
    } else e.TRUSTED_TYPES_POLICY === null ? (V = void 0, le = "") : (V === void 0 && (V = gn()), V && typeof le == "string" && (le = ge("")));
    z && z(e), be = e;
  }, Mt = E({}, [...ut, ...dt, ...ia]), Pt = E({}, [...ft, ...oa]), xn = function(e, o, d) {
    return o.namespaceURI === ee ? e === "svg" : o.namespaceURI === Fe ? e === "svg" && (d === "annotation-xml" || at[d]) : !!Mt[e];
  }, Ln = function(e, o, d) {
    return o.namespaceURI === ee ? e === "math" : o.namespaceURI === $e ? e === "math" && it[d] : !!Pt[e];
  }, In = function(e, o, d) {
    return o.namespaceURI === $e && !it[d] || o.namespaceURI === Fe && !at[d] ? !1 : !Pt[e] && (wn[e] || !Mt[e]);
  }, Dn = function(e) {
    let o = D(e);
    (!o || !o.tagName) && (o = {
      namespaceURI: he,
      tagName: "template"
    });
    const d = xe(e.tagName), m = xe(o.tagName);
    return nt[e.namespaceURI] ? e.namespaceURI === $e ? xn(d, o, m) : e.namespaceURI === Fe ? Ln(d, o, m) : e.namespaceURI === ee ? In(d, o, m) : !!(Se === "application/xhtml+xml" && nt[e.namespaceURI]) : !1;
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
    const o = A(e);
    if (o) {
      const m = [];
      Te(o, (b) => {
        ke(m, b);
      }), Te(m, (b) => {
        try {
          y(b);
        } catch {
        }
      });
    }
    const d = M(e);
    if (d)
      for (let m = d.length - 1; m >= 0; --m) {
        const b = d[m], T = b && b.name;
        if (typeof T == "string")
          try {
            e.removeAttribute(T);
          } catch {
          }
      }
  }, ue = function(e, o) {
    try {
      ke(n.removed, {
        attribute: o.getAttributeNode(e),
        from: o
      });
    } catch {
      ke(n.removed, {
        attribute: null,
        from: o
      });
    }
    if (o.removeAttribute(e), e === "is")
      if (me || Me)
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
    const o = M(e);
    if (o)
      for (let d = o.length - 1; d >= 0; --d) {
        const m = o[d], b = m && m.name;
        if (!(typeof b != "string" || N[x(b)]))
          try {
            e.removeAttribute(b);
          } catch {
          }
      }
  }, we = function(e) {
    const o = [e];
    for (; o.length > 0; ) {
      const d = o.pop();
      (F ? F(d) : d.nodeType) === q.element && Cn(d);
      const b = A(d);
      if (b)
        for (let T = b.length - 1; T >= 0; --T)
          o.push(b[T]);
    }
  }, Mn = function(e) {
    if (!ie)
      return;
    const o = [e];
    for (; o.length > 0; ) {
      const d = o.pop(), m = F ? F(d) : d.nodeType;
      if (m === q.processingInstruction || m === q.comment && P(an, d.data)) {
        try {
          y(d);
        } catch {
        }
        continue;
      }
      if (m === q.element) {
        const T = d, S = x(J ? J(d) : d.nodeName);
        try {
          T.hasAttribute && T.hasAttribute("patchsrc") && T.removeAttribute("patchsrc"), T.hasAttribute && T.hasAttribute("for") && S !== "label" && S !== "output" && T.removeAttribute("for");
        } catch {
        }
      }
      const b = A(d);
      if (b)
        for (let T = b.length - 1; T >= 0; --T)
          o.push(b[T]);
    }
  }, Ut = function(e) {
    let o = null, d = null;
    if (Ze)
      e = "<remove></remove>" + e;
    else {
      const T = jt(e, /^[\r\n\t ]+/);
      d = T && T[0];
    }
    Se === "application/xhtml+xml" && he === ee && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const m = V ? ge(e) : e;
    if (he === ee)
      try {
        o = new h().parseFromString(m, Se);
      } catch {
      }
    if (!o || !o.documentElement) {
      o = Ye.createDocument(he, "template", null);
      try {
        o.documentElement.innerHTML = tt ? le : m;
      } catch {
      }
    }
    const b = o.body || o.documentElement;
    return e && d && b.insertBefore(t.createTextNode(d), b.childNodes[0] || null), he === ee ? _n.call(o, ce ? "html" : "body")[0] : ce ? o.documentElement : b;
  }, Ft = function(e) {
    const o = Le ? Le(e) : e.ownerDocument;
    return vt.call(
      o || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Be = function(e) {
    return e = Ne(e, bn, " "), e = Ne(e, vn, " "), e = Ne(e, Tn, " "), e;
  }, rt = function(e) {
    var o;
    e.normalize();
    const d = Le ? Le(e) : e.ownerDocument, m = vt.call(
      d || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let b = m.nextNode();
    for (; b; )
      b.data = Be(b.data), b = m.nextNode();
    const T = (o = e.querySelectorAll) === null || o === void 0 ? void 0 : o.call(e, "template");
    T && Te(T, (S) => {
      ve(S.content) && rt(S.content);
    });
  }, He = function(e) {
    const o = J ? J(e) : null;
    return typeof o != "string" || x(o) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    e.nodeType !== F(e) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!F || typeof e != "object" || e === null)
      return !1;
    try {
      return F(e) === q.documentFragment;
    } catch {
      return !1;
    }
  }, Oe = function(e) {
    if (!F || typeof e != "object" || e === null)
      return !1;
    try {
      return typeof F(e) == "number";
    } catch {
      return !1;
    }
  };
  function te(p, e, o) {
    p.length !== 0 && Te(p, (d) => {
      d.call(n, e, o, be);
    });
  }
  const Pn = function(e, o) {
    return !!(ie && e.hasChildNodes() && !Oe(e.firstElementChild) && P(nn, e.textContent) && P(nn, e.innerHTML) || ie && e.namespaceURI === ee && o === "style" && Oe(e.firstElementChild) || e.nodeType === q.processingInstruction || ie && e.nodeType === q.comment && P(an, e.data));
  }, Un = function(e, o, d) {
    if (!Ae[o] && Ht(o) && (I.tagNameCheck instanceof RegExp && P(I.tagNameCheck, o) || I.tagNameCheck instanceof Function && I.tagNameCheck(o)))
      return !1;
    if (Je && !Q[o]) {
      const m = D(e), b = A(e);
      if (b && m) {
        const T = b.length;
        for (let S = T - 1; S >= 0; --S) {
          const L = e === d ? k(b[S], !0) : b[S];
          m.insertBefore(L, R(e));
        }
      }
    }
    return oe(e), !0;
  }, $t = function(e, o, d, m) {
    return e.length === 0 ? o : o === d || o === m ? H(o) : o;
  }, zt = function(e, o) {
    if (te(w.beforeSanitizeElements, e, null), e !== o && D(e) === null)
      return Ue && we(e), !0;
    if (He(e))
      return oe(e), !0;
    const d = x(J ? J(e) : e.nodeName);
    if (O = $t(w.uponSanitizeElement, O, je, De), te(w.uponSanitizeElement, e, {
      tagName: d,
      allowedTags: O
    }), e !== o && D(e) === null)
      return Ue && we(e), !0;
    if (Pn(e, d))
      return oe(e), !0;
    if (Ae[d] || !(ne.tagCheck instanceof Function && ne.tagCheck(d)) && !O[d]) {
      const b = Un(e, d, o);
      return b === !1 && te(w.afterSanitizeElements, e, null), b;
    }
    if ((F ? F(e) : e.nodeType) === q.element && !Dn(e) || (d === "noscript" || d === "noembed" || d === "noframes") && P(ma, e.innerHTML))
      return oe(e), !0;
    if (ae && e.nodeType === q.text) {
      const b = Be(e.textContent);
      e.textContent !== b && (ke(n.removed, {
        element: e.cloneNode()
      }), e.textContent = b);
    }
    return te(w.afterSanitizeElements, e, null), !1;
  }, Bt = function(e, o, d) {
    if (yt[o] || ie && o === "patchsrc" || ie && o === "for" && e !== "label" && e !== "output" || wt && (o === "id" || o === "name") && (d in t || d in Rn))
      return !1;
    const m = N[o] || ne.attributeCheck instanceof Function && ne.attributeCheck(o, e);
    if (!(Xe && P(kn, o))) {
      if (!(Et && P(yn, o))) {
        if (m) {
          if (!et[o]) {
            if (!P(kt, Ne(d, Tt, ""))) {
              if (!((o === "src" || o === "xlink:href" || o === "href") && e !== "script" && qt(d, "data:") === 0 && Rt[e])) {
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
          !(Ht(e) && (I.tagNameCheck instanceof RegExp && P(I.tagNameCheck, e) || I.tagNameCheck instanceof Function && I.tagNameCheck(e)) && (I.attributeNameCheck instanceof RegExp && P(I.attributeNameCheck, o) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(o, e)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          o === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && P(I.tagNameCheck, d) || I.tagNameCheck instanceof Function && I.tagNameCheck(d)))
        ) return !1;
      }
    }
    return !0;
  }, Fn = E({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ht = function(e) {
    return !Fn[xe(e)] && P(An, e);
  }, $n = function(e, o, d, m) {
    if (V && typeof _ == "object" && typeof _.getAttributeType == "function" && !d)
      switch (_.getAttributeType(e, o)) {
        case "TrustedHTML":
          return ge(m);
        case "TrustedScriptURL":
          return pn(m);
      }
    return m;
  }, zn = function(e, o, d, m) {
    try {
      d ? e.setAttributeNS(d, o, m) : e.setAttribute(o, m), He(e) ? oe(e) : Yt(n.removed);
    } catch {
      ue(o, e);
    }
  }, Gt = function(e) {
    te(w.beforeSanitizeAttributes, e, null);
    const o = e.attributes;
    if (!o || He(e))
      return;
    N = $t(w.uponSanitizeAttribute, N, qe, Ce);
    const d = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let m = o.length;
    const b = x(e.nodeName);
    for (; m--; ) {
      const T = o[m], S = T.name, L = T.namespaceURI, Y = T.value, j = x(S), lt = Y;
      let W = S === "value" ? lt : Zn(lt);
      if (d.attrName = j, d.attrValue = W, d.keepAttr = !0, d.forceKeepAttr = void 0, te(w.uponSanitizeAttribute, e, d), W = d.attrValue, Ot && (j === "id" || j === "name") && qt(W, Nt) !== 0 && (ue(S, e), W = Nt + W), ie && P(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, W)) {
        ue(S, e);
        continue;
      }
      if (j === "attributename" && jt(W, "href")) {
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
        if (ae && (W = Be(W)), !Bt(b, j, W)) {
          ue(S, e);
          continue;
        }
        W = $n(b, j, L, W), W !== lt && zn(e, S, L, W);
      }
    }
    te(w.afterSanitizeAttributes, e, null);
  }, Ge = function(e) {
    let o = null;
    const d = Ft(e);
    for (te(w.beforeSanitizeShadowDOM, e, null); o = d.nextNode(); )
      if (te(w.uponSanitizeShadowNode, o, null), zt(o, e), Gt(o), ve(o.content) && Ge(o.content), (F ? F(o) : o.nodeType) === q.element) {
        const b = G(o);
        ve(b) && (st(b), Ge(b));
      }
    te(w.afterSanitizeShadowDOM, e, null);
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
      const m = d.node, T = (F ? F(m) : m.nodeType) === q.element, S = A(m);
      if (S)
        for (let L = S.length - 1; L >= 0; --L)
          o.push({
            node: S[L],
            shadow: null
          });
      if (T) {
        const L = J ? J(m) : null;
        if (typeof L == "string" && x(L) === "template") {
          const Y = m.content;
          ve(Y) && o.push({
            node: Y,
            shadow: null
          });
        }
      }
      if (T) {
        const L = G(m);
        ve(L) && o.push({
          node: null,
          shadow: L
        }, {
          node: L,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(p) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = null, d = null, m = null, b = null;
    if (tt = !p, tt && (p = "<!-->"), typeof p != "string" && !Oe(p) && (p = na(p), typeof p != "string"))
      throw de("dirty is not a string, aborting");
    if (!n.isSupported)
      return p;
    Ke ? (O = De, N = Ce) : ot(e), (w.uponSanitizeElement.length > 0 || w.uponSanitizeAttribute.length > 0) && (O = H(O)), w.uponSanitizeAttribute.length > 0 && (N = H(N)), n.removed = [];
    const T = Ue && typeof p != "string" && Oe(p);
    if (T) {
      Mn(p);
      const Y = J ? J(p) : p.nodeName;
      if (typeof Y == "string") {
        const j = x(Y);
        if (!O[j] || Ae[j])
          throw ze(p), de("root node is forbidden and cannot be sanitized in-place");
      }
      if (He(p))
        throw ze(p), de("root node is clobbered and cannot be sanitized in-place");
      try {
        st(p);
      } catch (j) {
        throw ze(p), j;
      }
    } else if (Oe(p))
      o = Ut("<!---->"), d = o.ownerDocument.importNode(p, !0), d.nodeType === q.element && d.nodeName === "BODY" || d.nodeName === "HTML" ? o = d : o.appendChild(d), st(d);
    else {
      if (!me && !ae && !ce && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return V && Pe ? ge(p) : p;
      if (o = Ut(p), !o)
        return me ? null : Pe ? le : "";
    }
    o && Ze && oe(o.firstChild);
    const S = T ? p : o;
    try {
      const Y = Ft(S);
      for (; m = Y.nextNode(); )
        zt(m, S), Gt(m), ve(m.content) && Ge(m.content);
    } catch (Y) {
      throw T && (ze(p), Te(n.removed, (j) => {
        j.element && we(j.element);
      })), Y;
    }
    if (T)
      return Te(n.removed, (Y) => {
        Y.element && we(Y.element);
      }), ae && rt(p), p;
    if (me) {
      if (ae && rt(o), Me)
        for (b = mn.call(o.ownerDocument); o.firstChild; )
          b.appendChild(o.firstChild);
      else
        b = o;
      return (N.shadowroot || N.shadowrootmode) && (b = hn.call(c, b, !0)), b;
    }
    let L = ce ? o.outerHTML : o.innerHTML;
    return ce && O["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && P(pa, o.ownerDocument.doctype.name) && (L = "<!DOCTYPE " + o.ownerDocument.doctype.name + `>
` + L), ae && (L = Be(L)), V && Pe ? ge(L) : L;
  }, n.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ot(p), Ke = !0, De = O, Ce = N;
  }, n.clearConfig = function() {
    be = null, Ke = !1, De = null, Ce = null, V = Ve, le = "";
  }, n.isValidAttribute = function(p, e, o) {
    be || ot({});
    const d = x(p), m = x(e);
    return Bt(d, m, o);
  }, n.addHook = function(p, e) {
    typeof e == "function" && U(w, p) && ke(w[p], e);
  }, n.removeHook = function(p, e) {
    if (U(w, p)) {
      if (e !== void 0) {
        const o = Xn(w[p], e);
        return o === -1 ? void 0 : Kn(w[p], o, 1)[0];
      }
      return Yt(w[p]);
    }
  }, n.removeHooks = function(p) {
    U(w, p) && (w[p] = []);
  }, n.removeAllHooks = function() {
    w = on();
  }, n;
}
var va = dn();
const Ta = ["a", "abbr", "b", "br", "code", "em", "li", "ol", "p", "span", "strong", "ul"], ka = ["href", "title", "target", "rel", "class"];
function r(i, n, t) {
  const c = document.createElement(i);
  return n && (c.className = n), t != null && (c.textContent = String(t)), c;
}
function X(i, n) {
  if (n && typeof n == "object" && "__html__" in n) {
    const t = String(n.__html__), c = va.sanitize(t, { ALLOWED_TAGS: Ta, ALLOWED_ATTR: ka }), a = r("div");
    for (a.innerHTML = c; a.firstChild; ) i.append(a.firstChild);
    return;
  }
  n != null && i.append(document.createTextNode(String(n)));
}
function _t(i) {
  const n = String(i ?? "#").trim();
  return /^(https?:|mailto:|tel:|\/|#)/i.test(n) ? n : "#";
}
function $(i, n, t = "govuk-link", c = !1) {
  const a = r("a", `${t}${c ? " st-gds-external" : ""}`, String(i ?? ""));
  return a.href = _t(n), c && (a.target = "_blank", a.rel = "noopener noreferrer"), a;
}
function Z(i, n = "field") {
  return `st-gds-${String(i._key ?? "gds").replace(/[^a-zA-Z0-9_-]/g, "-")}-${n}`;
}
function ya(i, n, t) {
  const c = [];
  if (n.hint) {
    const a = `${t}-hint`, s = r("div", "govuk-hint", n.hint);
    s.id = a, i.append(s), c.push(a);
  }
  if (n.error) {
    const a = `${t}-error`, s = r("p", "govuk-error-message");
    s.id = a;
    const l = r("span", "govuk-visually-hidden", "Error:");
    s.append(l, document.createTextNode(` ${String(n.error)}`)), i.append(s), c.push(a);
  }
  return c;
}
function pe(i, n, t = "label") {
  const c = r("div", `govuk-form-group${i.error ? " govuk-form-group--error" : ""}`), a = r(t, t === "legend" ? "govuk-fieldset__legend govuk-fieldset__legend--m" : "govuk-label", i.label);
  if (a instanceof HTMLLabelElement && (a.htmlFor = n), i.required) {
    const l = r("span", "govuk-visually-hidden", " required");
    a.append(l);
  }
  c.append(a);
  const s = ya(c, i, n);
  return { group: c, label: a, describedBy: s };
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
  const a = Z(n), { group: s, describedBy: l } = pe(n, a), u = r("input", `govuk-input${n.error ? " govuk-input--error" : ""} st-gds-width-${String(n.width ?? "full")}`);
  u.id = a, u.name = a, u.type = c && !n.visible ? "password" : String(n.input_type ?? "text"), u.value = String(n.value ?? ""), u.disabled = !!n.disabled, u.required = !!n.required, n.autocomplete && u.setAttribute("autocomplete", String(n.autocomplete)), n.inputmode && (u.inputMode = String(n.inputmode)), fe(u, l), u.addEventListener("change", () => t.setStateValue("value", u.value));
  let f = u;
  if (n.prefix || n.suffix) {
    const g = r("div", "govuk-input__wrapper");
    n.prefix && g.append(r("div", "govuk-input__prefix", n.prefix)), g.append(u), n.suffix && g.append(r("div", "govuk-input__suffix", n.suffix)), f = g;
  }
  if (c) {
    const g = r("div", "st-gds-password-wrapper");
    g.append(u);
    const h = r(
      "button",
      "govuk-button govuk-button--secondary st-gds-password-toggle",
      n.visible ? String(n.hide_label ?? "Hide") : String(n.show_label ?? "Show")
    );
    h.type = "button", h.setAttribute("aria-controls", a), h.addEventListener("click", () => t.setStateValue("visible", !n.visible)), g.append(h), f = g;
  }
  s.append(f), i.append(s);
}
function sn(i, n, t, c = !1) {
  const a = Z(n), { group: s, describedBy: l } = pe(n, a), u = r("textarea", `govuk-textarea${n.error ? " govuk-textarea--error" : ""}`);
  u.id = a, u.name = a, u.rows = Number(n.rows ?? 5), u.value = String(n.value ?? ""), u.disabled = !!n.disabled, u.required = !!n.required, fe(u, l);
  let f = () => {
  };
  if (u.addEventListener("input", () => {
    c && f();
  }), u.addEventListener("change", () => t.setStateValue("value", u.value)), s.append(u), c) {
    const g = Number(n.max_characters), h = r("div", "govuk-character-count__message govuk-hint", "");
    h.id = `${a}-info`, h.setAttribute("aria-live", "polite"), l.push(h.id), fe(u, l), s.append(h), f = () => {
      const _ = g - u.value.length;
      h.textContent = _ >= 0 ? `You have ${_} character${_ === 1 ? "" : "s"} remaining` : `You have ${Math.abs(_)} character${_ === -1 ? "" : "s"} too many`, h.classList.toggle("govuk-error-message", _ < 0);
    }, f();
  }
  i.append(s);
}
function Aa(i, n, t) {
  const c = r("section", "st-gds-chatbot");
  c.setAttribute("aria-label", String(n.label)), c.append(r("h2", "govuk-heading-m st-gds-chatbot__title", n.label));
  const a = r("div", "st-gds-chatbot__transcript");
  a.setAttribute("role", "log"), a.setAttribute("aria-label", `${String(n.label)} messages`), a.setAttribute("aria-live", "polite"), a.setAttribute("aria-relevant", "additions text"), a.tabIndex = 0;
  const s = n.messages ?? [];
  s.length || a.append(r("p", "govuk-body st-gds-chatbot__empty", n.empty_text));
  for (const y of s) {
    const R = y.name || (y.role === "user" ? n.user_name : n.assistant_name), A = r("article", `st-gds-chat-message st-gds-chat-message--${y.role}`);
    A.setAttribute("aria-label", `${String(R)} message`);
    const D = r("p", "st-gds-chat-message__meta");
    D.append(r("strong", "st-gds-chat-message__name", R)), y.timestamp && (D.append(document.createTextNode(" ")), D.append(r("time", "st-gds-chat-message__time", y.timestamp)));
    const G = r("div", "st-gds-chat-message__body");
    X(G, y.content), A.append(D, G), a.append(A);
  }
  if (n.waiting) {
    const y = r("p", "govuk-body st-gds-chatbot__status", `${String(n.assistant_name)} is responding`);
    y.setAttribute("role", "status"), a.append(y);
  }
  c.append(a);
  const l = r("form", "st-gds-chatbot__composer"), u = Z(n, "message"), f = { ...n, label: n.input_label, required: !0 }, { group: g, describedBy: h } = pe(f, u), _ = r("textarea", `govuk-textarea${n.error ? " govuk-textarea--error" : ""}`);
  _.id = u, _.name = u, _.rows = 3, _.value = String(n.draft ?? ""), _.required = !0, _.disabled = !!(n.disabled || n.waiting), n.placeholder && (_.placeholder = String(n.placeholder)), fe(_, h), g.append(_);
  const v = r("button", "govuk-button st-gds-chatbot__send", n.send_label);
  v.type = "submit", v.disabled = _.disabled || !_.value.trim();
  const k = () => {
    v.disabled = _.disabled || !_.value.trim(), t.setStateValue("draft", _.value);
  };
  _.addEventListener("input", k), _.addEventListener("keydown", (y) => {
    y.key === "Enter" && (y.ctrlKey || y.metaKey) && (y.preventDefault(), l.requestSubmit());
  }), l.addEventListener("submit", (y) => {
    y.preventDefault();
    const R = _.value.trim();
    !R || _.disabled || (_.value = "", v.disabled = !0, t.setStateValue("draft", ""), t.setTriggerValue("submitted", R));
  }), l.append(g, v), c.append(l), i.append(c);
}
function ln(i, n, t, c) {
  const a = Z(n), s = r("fieldset", "govuk-fieldset"), { group: l, label: u, describedBy: f } = pe(n, a, "legend");
  s.setAttribute("aria-describedby", f.join(" ")), s.append(u);
  for (const k of [...l.children].slice(1)) s.append(k);
  const g = c ? `govuk-checkboxes${n.small ? " govuk-checkboxes--small" : ""}` : `govuk-radios${n.inline ? " govuk-radios--inline" : ""}`, h = r("div", g), _ = n.options ?? [], v = c ? n.value ?? [] : [n.value];
  _.forEach((k, y) => {
    const R = r("div", c ? "govuk-checkboxes__item" : "govuk-radios__item"), A = r("input", c ? "govuk-checkboxes__input" : "govuk-radios__input");
    A.type = c ? "checkbox" : "radio", A.name = a, A.id = `${a}-${y}`, A.value = String(y), A.disabled = !!n.disabled || !!k.disabled, A.checked = v.some((M) => JSON.stringify(M) === JSON.stringify(k.value));
    const D = r("label", c ? "govuk-label govuk-checkboxes__label" : "govuk-label govuk-radios__label", k.label);
    D.htmlFor = A.id, R.append(A, D), k.hint && R.append(r("div", "govuk-hint govuk-checkboxes__hint", k.hint)), h.append(R);
    let G = null;
    k.conditional && (G = r("div", "st-gds-conditional"), X(G, k.conditional), G.hidden = !A.checked, h.append(G)), A.addEventListener("change", () => {
      if (G && (G.hidden = !A.checked), c) {
        const M = [...h.querySelectorAll("input:checked")].map((F) => _[Number(F.value)].value);
        t.setStateValue("value", M);
      } else
        t.setStateValue("value", k.value);
    });
  }), s.append(h), l.replaceChildren(s), i.append(l);
}
function Sa(i, n, t) {
  const c = Z(n), { group: a, describedBy: s } = pe(n, c), l = r("select", "govuk-select");
  l.id = c, l.name = c, l.disabled = !!n.disabled, l.required = !!n.required, fe(l, s);
  const u = n.options ?? [];
  n.required || l.append(r("option", void 0, "Select an option")), u.forEach((f, g) => {
    const h = r("option", void 0, f.label);
    h.value = String(g), h.disabled = !!f.disabled, h.selected = JSON.stringify(f.value) === JSON.stringify(n.value), l.append(h);
  }), l.addEventListener("change", () => {
    t.setStateValue("value", l.value === "" ? null : u[Number(l.value)].value);
  }), a.append(l), i.append(a);
}
function wa(i, n, t) {
  const c = Z(n), { group: a, label: s, describedBy: l } = pe(n, c, "legend"), u = r("fieldset", "govuk-fieldset");
  u.append(s);
  for (const k of [...a.children].slice(1)) u.append(k);
  const f = String(n.value ?? "").split("-"), g = r("div", "st-gds-date-row"), h = [["day", f[2] ?? "", 2], ["month", f[1] ?? "", 2], ["year", f[0] ?? "", 4]], _ = [];
  h.forEach(([k, y, R]) => {
    const A = r("div", "govuk-form-group"), D = `${c}-${k}`, G = r("label", "govuk-label", k[0].toUpperCase() + k.slice(1));
    G.htmlFor = D;
    const M = r("input", `govuk-input${k === "year" ? " st-gds-date-year" : ""}`);
    M.id = D, M.name = D, M.inputMode = "numeric", M.pattern = "[0-9]*", M.maxLength = R, M.value = y, M.disabled = !!n.disabled, fe(M, l), A.append(G, M), g.append(A), _.push(M);
  });
  const v = () => {
    const [k, y, R] = _.map((D) => D.value.padStart(2, "0")), A = k && y && R;
    t.setStateValue("value", A ? `${R}-${y}-${k}` : null);
  };
  _.forEach((k) => k.addEventListener("change", v)), u.append(g), a.replaceChildren(u), i.append(a);
}
function Oa(i, n, t) {
  const c = Z(n), { group: a, describedBy: s } = pe(n, c), l = r("input", `govuk-file-upload${n.error ? " govuk-file-upload--error" : ""}`);
  l.type = "file", l.id = c, l.name = c, l.disabled = !!n.disabled, l.required = !!n.required, l.accept = (n.accept ?? []).join(","), fe(l, s);
  const u = r("p", "st-gds-file-meta");
  l.addEventListener("change", async () => {
    const f = l.files?.[0];
    if (!f) {
      t.setStateValue("file", null), u.textContent = "";
      return;
    }
    const g = Number(n.max_size_mb) * 1024 * 1024;
    if (f.size > g) {
      u.className = "govuk-error-message", u.textContent = `The selected file must be smaller than ${String(n.max_size_mb)} MB`, l.value = "";
      return;
    }
    const h = new Uint8Array(await f.arrayBuffer());
    u.className = "st-gds-file-meta", u.textContent = `${f.name} (${Math.ceil(f.size / 1024)} KB)`, t.setStateValue("file", { name: f.name, type: f.type, size: f.size, data: h });
  }), a.append(l, u), i.append(a);
}
function Na(i, n, t) {
  const c = String(n.kind ?? "primary"), s = r("button", `govuk-button${{ secondary: " govuk-button--secondary", warning: " govuk-button--warning" }[c] ?? ""}${n.width === "full" ? " st-gds-button-full" : ""}`, n.label);
  s.type = "button", s.disabled = !!n.disabled, c === "start" && (s.classList.add("govuk-button--start"), s.append(document.createTextNode("  →"))), s.addEventListener("click", () => t.setTriggerValue("clicked", !0)), i.append(s);
}
function Ra(i, n, t) {
  const c = n.items ?? [], a = new Set(n.open ?? []), s = r("div", "govuk-accordion");
  c.forEach((l, u) => {
    const f = r("div", "govuk-accordion__section"), g = r("h2", "govuk-accordion__section-heading"), h = r("button", "govuk-accordion__section-button", l.heading);
    h.type = "button";
    const _ = Z(n, `accordion-${u}`);
    h.setAttribute("aria-controls", _), h.setAttribute("aria-expanded", String(a.has(u) || l.expanded));
    const v = r("div", "govuk-accordion__section-content");
    v.id = _, v.hidden = !(a.has(u) || l.expanded), X(v, l.content), h.addEventListener("click", () => {
      v.hidden = !v.hidden, h.setAttribute("aria-expanded", String(!v.hidden)), v.hidden ? a.delete(u) : a.add(u), t.setStateValue("open", [...a]);
    }), g.append(h), f.append(g, v), s.append(f);
  }), i.append(s);
}
function xa(i, n, t) {
  const c = n.items ?? [];
  let a = Number(n.selected ?? 0);
  const s = r("div", "govuk-tabs"), l = r("h2", "govuk-tabs__title", "Contents"), u = r("ul", "govuk-tabs__list");
  u.setAttribute("role", "tablist");
  const f = [], g = [], h = (_) => {
    a = _, g.forEach((v, k) => {
      v.parentElement?.classList.toggle("govuk-tabs__list-item--selected", k === _), v.setAttribute("aria-selected", String(k === _));
    }), f.forEach((v, k) => {
      v.hidden = k !== _;
    }), t.setStateValue("selected", _);
  };
  c.forEach((_, v) => {
    const k = r("li", `govuk-tabs__list-item${v === a ? " govuk-tabs__list-item--selected" : ""}`);
    k.setAttribute("role", "presentation");
    const y = $(_.label, `#${Z(n, `panel-${v}`)}`, "govuk-tabs__tab");
    y.id = Z(n, `tab-${v}`), y.setAttribute("role", "tab"), y.setAttribute("aria-selected", String(v === a)), y.addEventListener("click", (A) => {
      A.preventDefault(), h(v);
    }), k.append(y), u.append(k), g.push(y);
    const R = r("div", "govuk-tabs__panel");
    R.id = Z(n, `panel-${v}`), R.setAttribute("role", "tabpanel"), R.setAttribute("aria-labelledby", y.id), R.hidden = v !== a, X(R, _.content), f.push(R);
  }), s.append(l, u, ...f), i.append(s);
}
function La(i, n, t, c) {
  switch (n) {
    case "bootstrap": {
      document.documentElement.style.setProperty("--st-gds-brand", String(t.brand_colour)), document.body.classList.toggle("st-gds-minimal-chrome", t.chrome === "minimal");
      const a = "streamlit-gds-host-styles";
      let s = document.getElementById(a);
      s || (s = document.createElement("style"), s.id = a, document.head.append(s)), s.textContent = `
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
      const a = r("span", "st-gds-space");
      a.style.height = `${Number(t.size ?? 4) * 5}px`, i.append(a);
      return;
    }
    case "heading": {
      const a = { xl: "govuk-heading-xl", l: "govuk-heading-l", m: "govuk-heading-m", s: "govuk-heading-s" }, s = r("h2", a[String(t.size)] ?? a.l);
      t.caption && s.append(r("span", "govuk-caption-l st-gds-heading-caption", t.caption)), s.append(document.createTextNode(String(t.text ?? ""))), i.append(s);
      return;
    }
    case "paragraph": {
      const a = r("p", t.lead ? "govuk-body-l" : "govuk-body");
      X(a, t.content), i.append(a);
      return;
    }
    case "link":
      i.append($(t.label, t.href, "govuk-link", !!t.external));
      return;
    case "list": {
      const a = r(t.ordered ? "ol" : "ul", `govuk-list${t.ordered ? " govuk-list--number" : t.bullet ? " govuk-list--bullet" : ""}`);
      for (const s of t.items ?? []) a.append(r("li", void 0, s));
      i.append(a);
      return;
    }
    case "image": {
      const a = r("figure"), s = r("img", "govuk-image");
      s.src = _t(t.src), s.alt = String(t.alt ?? ""), t.width && (s.width = Number(t.width)), a.append(s), t.caption && a.append(r("figcaption", "govuk-body-s", t.caption)), i.append(a);
      return;
    }
    case "section_break": {
      i.append(r("hr", `govuk-section-break govuk-section-break--${String(t.size ?? 3)}${t.visible ? " govuk-section-break--visible" : ""}`));
      return;
    }
    case "back_link":
      i.append($(t.label, t.href, "govuk-back-link"));
      return;
    case "breadcrumbs": {
      const a = r("nav", `govuk-breadcrumbs${t.collapse_on_mobile ? " govuk-breadcrumbs--collapse-on-mobile" : ""}`);
      a.setAttribute("aria-label", "Breadcrumb");
      const s = r("ol", "govuk-breadcrumbs__list");
      for (const l of t.items ?? []) {
        const u = r("li", "govuk-breadcrumbs__list-item");
        l.href ? u.append($(l.label, l.href, "govuk-breadcrumbs__link")) : u.append(document.createTextNode(l.label)), s.append(u);
      }
      a.append(s), i.append(a);
      return;
    }
    case "details": {
      const a = r("details", "govuk-details");
      a.open = !!t.open, a.append(r("summary", "govuk-details__summary", t.summary));
      const s = r("div", "govuk-details__text");
      X(s, t.content), a.append(s), i.append(a);
      return;
    }
    case "inset_text": {
      const a = r("div", "govuk-inset-text");
      X(a, t.content), i.append(a);
      return;
    }
    case "error_message": {
      const a = r("p", "govuk-error-message");
      a.append(r("span", "govuk-visually-hidden", "Error:"), document.createTextNode(` ${String(t.text)}`)), i.append(a);
      return;
    }
    case "error_summary": {
      const a = r("div", "govuk-error-summary");
      a.tabIndex = -1, a.setAttribute("role", "alert"), a.append(r("h2", "govuk-error-summary__title", t.title)), t.description && a.append(r("p", "govuk-body", t.description));
      const s = r("ul", "govuk-list govuk-error-summary__list");
      for (const l of t.errors ?? []) {
        const u = r("li");
        u.append($(l.text, l.href)), s.append(u);
      }
      a.append(s), i.append(a), t.focus && queueMicrotask(() => a.focus());
      return;
    }
    case "fieldset": {
      const a = r("fieldset", "govuk-fieldset");
      a.append(r("legend", `govuk-fieldset__legend govuk-fieldset__legend--${String(t.heading_size)}`, t.legend));
      const s = r("div");
      X(s, t.content), a.append(s), i.append(a);
      return;
    }
    case "header": {
      const a = r("header", "st-gds-generic-header");
      a.style.setProperty("--st-gds-brand", String(t.brand_colour ?? "#1d70b8"));
      const s = r("div", "st-gds-generic-header__inner"), l = $(t.organisation, t.home_url, "st-gds-generic-header__organisation");
      s.append(l), t.service_name && s.append(r("span", "st-gds-generic-header__service", t.service_name));
      const u = t.navigation;
      if (u?.length) {
        const f = r("nav");
        f.setAttribute("aria-label", "Primary navigation");
        const g = r("ul", "st-gds-generic-header__nav");
        u.forEach((h) => {
          const _ = r("li"), v = $(h.label, h.href);
          h.active && v.setAttribute("aria-current", "page"), _.append(v), g.append(_);
        }), f.append(g), s.append(f);
      }
      a.append(s), i.append(a);
      return;
    }
    case "footer": {
      const a = r("footer", "st-gds-neutral-footer"), s = r("div", "st-gds-neutral-footer__inner");
      t.organisation && s.append(r("h2", "govuk-heading-s", t.organisation)), t.text && s.append(r("p", "govuk-body-s", t.text));
      const l = t.links;
      if (l?.length) {
        const u = r("ul", "st-gds-neutral-footer__links");
        l.forEach((f) => {
          const g = r("li");
          g.append($(f.label, f.href, "govuk-link", f.external)), u.append(g);
        }), s.append(u);
      }
      a.append(s), i.append(a);
      return;
    }
    case "notification_banner": {
      const a = r("div", `govuk-notification-banner${t.success ? " govuk-notification-banner--success" : ""}`);
      a.setAttribute("role", String(t.role ?? "region"));
      const s = r("div", "govuk-notification-banner__header");
      s.append(r("h2", "govuk-notification-banner__title", t.title)), a.append(s);
      const l = r("div", "govuk-notification-banner__content");
      X(l, t.content), a.append(l), i.append(a);
      return;
    }
    case "pagination": {
      const a = r("nav", "govuk-pagination");
      a.setAttribute("aria-label", "Pagination");
      const s = r("ul", "govuk-pagination__list"), l = (u, f) => {
        if (!u) return;
        const g = u, h = r("li", `govuk-pagination__${f}`);
        h.append($(`${f === "prev" ? "← " : ""}${g.label}${f === "next" ? " →" : ""}`, g.href, "govuk-link govuk-pagination__link")), s.append(h);
      };
      l(t.previous, "prev");
      for (const u of t.items ?? []) {
        const f = r("li", `govuk-pagination__item${u.current ? " govuk-pagination__item--current" : ""}`), g = $(u.label, u.href, "govuk-link govuk-pagination__link");
        u.current && g.setAttribute("aria-current", "page"), f.append(g), s.append(f);
      }
      l(t.next, "next"), a.append(s), i.append(a);
      return;
    }
    case "phase_banner": {
      const a = r("div", "govuk-phase-banner"), s = r("p", "govuk-phase-banner__content");
      s.append(r("strong", "govuk-tag govuk-phase-banner__content__tag", t.phase));
      const l = r("span", "govuk-phase-banner__text");
      X(l, t.content), s.append(l), a.append(s), i.append(a);
      return;
    }
    case "service_navigation": {
      const a = r("nav", "govuk-service-navigation");
      a.setAttribute("aria-label", "Service information");
      const s = r("div", "govuk-width-container");
      t.service_name && s.append($(t.service_name, t.service_url, "govuk-service-navigation__service-name"));
      const l = r("ul", "govuk-service-navigation__list");
      for (const u of t.items ?? []) {
        const f = r("li", `govuk-service-navigation__item${u.active ? " govuk-service-navigation__item--active" : ""}`), g = $(u.label, u.href, "govuk-service-navigation__link");
        u.active && g.setAttribute("aria-current", "page"), f.append(g), l.append(f);
      }
      s.append(l), a.append(s), i.append(a);
      return;
    }
    case "skip_link":
      i.append($(t.label, t.href, "govuk-skip-link"));
      return;
    case "panel": {
      const a = t.variant === "interruption", s = r("div", a ? "st-gds-panel--interruption" : "govuk-panel govuk-panel--confirmation");
      if (s.append(r("h1", a ? "govuk-heading-xl" : "govuk-panel__title", t.title)), t.content) {
        const l = r("div", a ? "govuk-body-l" : "govuk-panel__body");
        X(l, t.content), s.append(l);
      }
      i.append(s);
      return;
    }
    case "kpi_card": {
      const a = r("section", "st-gds-kpi-card");
      if (a.setAttribute("aria-label", String(t.label)), a.append(r("h3", "st-gds-kpi-card__label", t.label)), a.append(r("p", "st-gds-kpi-card__value", t.value)), t.change !== void 0 && t.change !== null) {
        const s = String(t.trend ?? "neutral"), l = r("p", `st-gds-kpi-card__change st-gds-kpi-card__change--${s}`), u = {
          up: { arrow: "↑", label: "Increased by" },
          down: { arrow: "↓", label: "Decreased by" },
          neutral: { arrow: "", label: "Change:" }
        }, f = u[s] ?? u.neutral;
        if (f.arrow) {
          const g = r("span", "st-gds-kpi-card__arrow", f.arrow);
          g.setAttribute("aria-hidden", "true"), l.append(g);
        }
        l.append(r("span", "govuk-visually-hidden", `${f.label} `)), l.append(r("strong", "st-gds-kpi-card__change-value", t.change)), t.comparison && (l.append(document.createTextNode(" ")), l.append(r("span", "st-gds-kpi-card__comparison", t.comparison))), a.append(l);
      }
      t.supporting_text && a.append(r("p", "st-gds-kpi-card__supporting", t.supporting_text)), i.append(a);
      return;
    }
    case "summary_list": {
      const a = t.card_title ? r("div", "govuk-summary-card") : i;
      if (t.card_title) {
        const l = r("div", "govuk-summary-card__title-wrapper");
        l.append(r("h2", "govuk-summary-card__title", t.card_title)), a.append(l);
      }
      const s = r("dl", `govuk-summary-list${t.card_title ? " govuk-summary-card__content" : ""}`);
      for (const l of t.rows ?? []) {
        const u = r("div", "govuk-summary-list__row");
        u.append(r("dt", "govuk-summary-list__key", l.key));
        const f = r("dd", "govuk-summary-list__value");
        if (X(f, l.value), u.append(f), l.actions?.length) {
          const g = r("dd", "govuk-summary-list__actions");
          l.actions.forEach((h, _) => {
            _ && g.append(document.createTextNode(" "));
            const v = $(h.label, h.href);
            h.visually_hidden_text && v.append(r("span", "govuk-visually-hidden", ` ${h.visually_hidden_text}`)), g.append(v);
          }), u.append(g);
        }
        s.append(u);
      }
      a.append(s), a !== i && i.append(a);
      return;
    }
    case "table": {
      const a = r("table", `govuk-table${t.responsive ? " st-gds-table-responsive" : ""}`);
      t.caption && a.append(r("caption", "govuk-table__caption govuk-table__caption--m", t.caption));
      const s = t.columns, l = r("thead", "govuk-table__head"), u = r("tr", "govuk-table__row");
      s.forEach((g) => u.append(r("th", `govuk-table__header${g.numeric ? " govuk-table__header--numeric" : ""}`, g.heading))), l.append(u), a.append(l);
      const f = r("tbody", "govuk-table__body");
      for (const g of t.rows) {
        const h = r("tr", "govuk-table__row");
        s.forEach((_, v) => {
          const k = r(v === 0 ? "th" : "td", `${v === 0 ? "govuk-table__header" : "govuk-table__cell"}${_.numeric ? ` ${v === 0 ? "govuk-table__header" : "govuk-table__cell"}--numeric` : ""}`, g[_.key]);
          k.setAttribute("data-label", _.heading), v === 0 && k.setAttribute("scope", "row"), h.append(k);
        }), f.append(h);
      }
      a.append(f), i.append(a);
      return;
    }
    case "tag":
      i.append(r("strong", `govuk-tag govuk-tag--${String(t.colour)}`, t.text));
      return;
    case "task_list": {
      t.title && i.append(r("h2", "govuk-heading-m", t.title));
      const a = r("ol", "st-gds-task-list"), s = { not_started: "Not started", in_progress: "In progress", completed: "Completed", cannot_start: "Cannot start yet", optional: "Optional" };
      for (const l of t.items ?? []) {
        const u = r("li", "st-gds-task-list__item"), f = r("div", "st-gds-task-list__row");
        f.append(l.href ? $(l.title, l.href) : r("span", void 0, l.title));
        const g = l.status === "completed" ? "green" : l.status === "in_progress" ? "blue" : "grey";
        f.append(r("strong", `govuk-tag govuk-tag--${g}`, s[l.status] ?? l.status)), u.append(f), l.hint && u.append(r("p", "st-gds-task-list__hint", l.hint)), a.append(u);
      }
      i.append(a);
      return;
    }
    case "warning_text": {
      const a = r("div", "govuk-warning-text");
      a.append(r("span", "govuk-warning-text__icon", "!"));
      const s = r("strong", "govuk-warning-text__text");
      s.append(r("span", "govuk-visually-hidden", `${String(t.icon_fallback)}:`), document.createTextNode(` ${String(t.text)}`)), a.append(s), i.append(a);
      return;
    }
    case "cookie_banner": {
      if (t.hidden) return;
      const a = r("div", "govuk-cookie-banner");
      a.setAttribute("role", "region");
      const s = r("div", "govuk-cookie-banner__message govuk-width-container");
      s.append(r("h2", "govuk-cookie-banner__heading govuk-heading-m", t.title));
      const l = r("div", "govuk-cookie-banner__content");
      X(l, t.content), s.append(l);
      const u = r("div", "govuk-button-group");
      for (const f of t.actions ?? [])
        if (f.kind === "link") u.append($(f.label, f.href, "govuk-link"));
        else {
          const g = r("button", "govuk-button", f.label);
          g.type = "button", g.addEventListener("click", () => c.setTriggerValue("action", f.value)), u.append(g);
        }
      s.append(u), a.append(s), i.append(a);
      return;
    }
    case "exit_this_page": {
      const a = $(t.label, t.href, "govuk-exit-this-page__button govuk-button govuk-button--warning"), s = (l) => {
        l.key === "Escape" && (c.setTriggerValue("exited", !0), window.location.assign(_t(t.href)));
      };
      return a.addEventListener("click", () => c.setTriggerValue("exited", !0)), document.addEventListener("keydown", s), i.append(a), () => document.removeEventListener("keydown", s);
    }
  }
}
const Ia = (i) => {
  const n = i.data, t = i.parentElement.querySelector(".st-gds-root");
  if (!t) return;
  const c = document.activeElement, a = c && t.contains(c) ? c.id : null, s = a && c && fn(c) ? [c.selectionStart, c.selectionEnd] : null;
  t.replaceChildren();
  const l = n.props ?? {};
  let u;
  switch (n.component) {
    case "button":
      Na(t, l, i);
      break;
    case "text_input":
      rn(t, l, i);
      break;
    case "password_input":
      rn(t, l, i, !0);
      break;
    case "textarea":
      sn(t, l, i);
      break;
    case "character_count":
      sn(t, l, i, !0);
      break;
    case "select":
      Sa(t, l, i);
      break;
    case "radios":
      ln(t, l, i, !1);
      break;
    case "checkboxes":
      ln(t, l, i, !0);
      break;
    case "date_input":
      wa(t, l, i);
      break;
    case "file_upload":
      Oa(t, l, i);
      break;
    case "accordion":
      Ra(t, l, i);
      break;
    case "tabs":
      xa(t, l, i);
      break;
    case "chatbot":
      Aa(t, l, i);
      break;
    default:
      u = La(t, n.component, l, i);
  }
  return Ea(t, a, s), u;
};
export {
  X as appendContent,
  Ia as default,
  Ea as restoreFocus,
  _t as safeHref
};
