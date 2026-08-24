//#region node_modules/dompurify/dist/purify.es.mjs
function e(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function t(e) {
	if (Array.isArray(e)) return e;
}
function n(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function r() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function i(e, i) {
	return t(e) || n(e, i) || a(e, i) || r();
}
function a(t, n) {
	if (t) {
		if (typeof t == "string") return e(t, n);
		var r = {}.toString.call(t).slice(8, -1);
		return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, n) : void 0;
	}
}
var o = Object.entries, s = Object.setPrototypeOf, c = Object.isFrozen, l = Object.getPrototypeOf, u = Object.getOwnPropertyDescriptor, d = Object.freeze, f = Object.seal, p = Object.create, m = typeof Reflect < "u" && Reflect, h = m.apply, ee = m.construct;
d ||= function(e) {
	return e;
}, f ||= function(e) {
	return e;
}, h ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, ee ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var te = C(Array.prototype.forEach), ne = C(Array.prototype.lastIndexOf), re = C(Array.prototype.pop), ie = C(Array.prototype.push), ae = C(Array.prototype.splice), g = Array.isArray, oe = C(String.prototype.toLowerCase), se = C(String.prototype.toString), ce = C(String.prototype.match), le = C(String.prototype.replace), ue = C(String.prototype.indexOf), de = C(String.prototype.trim), fe = C(Number.prototype.toString), pe = C(Boolean.prototype.toString), _ = typeof BigInt > "u" ? null : C(BigInt.prototype.toString), v = typeof Symbol > "u" ? null : C(Symbol.prototype.toString), y = C(Object.prototype.hasOwnProperty), b = C(Object.prototype.toString), x = C(RegExp.prototype.test), S = w(TypeError);
function C(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return h(e, t, n);
	};
}
function w(e) {
	return function() {
		return ee(e, [...arguments]);
	};
}
function T(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oe;
	if (s && s(e, null), !g(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (c(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function E(e) {
	for (let t = 0; t < e.length; t++) y(e, t) || (e[t] = null);
	return e;
}
function D(e) {
	let t = p(null);
	for (let r of o(e)) {
		var n = i(r, 2);
		let a = n[0], o = n[1];
		y(e, a) && (t[a] = g(o) ? E(o) : o && typeof o == "object" && o.constructor === Object ? D(o) : o);
	}
	return t;
}
function me(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return fe(e);
		case "boolean": return pe(e);
		case "bigint": return _ ? _(e) : "0";
		case "symbol": return v ? v(e) : "Symbol()";
		case "undefined": return b(e);
		case "function":
		case "object": {
			if (e === null) return b(e);
			let t = e, n = O(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : b(e);
			}
			return b(e);
		}
		default: return b(e);
	}
}
function O(e, t) {
	for (; e !== null;) {
		let n = u(e, t);
		if (n) {
			if (n.get) return C(n.get);
			if (typeof n.value == "function") return C(n.value);
		}
		e = l(e);
	}
	function n() {
		return null;
	}
	return n;
}
function he(e) {
	try {
		return x(e, ""), !0;
	} catch {
		return !1;
	}
}
var ge = d(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), _e = d(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), ve = d([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), ye = d([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), be = d(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), xe = d([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Se = d(["#text"]), Ce = d(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), we = d(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Te = d(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Ee = d([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), De = f(/{{[\w\W]*|^[\w\W]*}}/g), Oe = f(/<%[\w\W]*|^[\w\W]*%>/g), ke = f(/\${[\w\W]*/g), Ae = f(/^data-[\-\w.\u00B7-\uFFFF]+$/), je = f(/^aria-[\-\w]+$/), Me = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ne = f(/^(?:\w+script|data):/i), Pe = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Fe = f(/^html$/i), Ie = f(/^[a-z][.\w]*(-[.\w]+)+$/i), Le = f(/<[/\w!]/g), Re = f(/<[/\w]/g), ze = f(/<\/no(script|embed|frames)/i), Be = f(/\/>/i), k = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, Ve = function() {
	return typeof window > "u" ? null : window;
}, He = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, Ue = function() {
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
}, A = function(e, t, n, r) {
	return y(e, t) && g(e[t]) ? T(r.base ? D(r.base) : {}, e[t], r.transform) : n;
};
function We() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ve(), t = (e) => We(e);
	if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== k.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, s = e.Node, c = e.Element, l = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let u = e.DOMParser, m = e.trustedTypes, h = c.prototype, ee = O(h, "cloneNode"), fe = O(h, "remove"), pe = O(h, "nextSibling"), _ = O(h, "childNodes"), v = O(h, "parentNode"), b = O(h, "shadowRoot"), C = O(h, "attributes"), w = s && s.prototype ? O(s.prototype, "nodeType") : null, E = s && s.prototype ? O(s.prototype, "nodeName") : null, Ge = s && s.prototype ? O(s.prototype, "ownerDocument") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let j, M = "", N, P = !1, F = 0, I = function() {
		if (F > 0) throw S("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, L = function(e) {
		I(), F++;
		try {
			return j.createHTML(e);
		} finally {
			F--;
		}
	}, Ke = function(e) {
		I(), F++;
		try {
			return j.createScriptURL(e);
		} finally {
			F--;
		}
	}, R = function() {
		return P ||= (N = He(m, i), !0), N;
	}, z = n, qe = z.implementation, Je = z.createNodeIterator, Ye = z.createDocumentFragment, Xe = z.getElementsByTagName, Ze = r.importNode, B = Ue();
	t.isSupported = typeof o == "function" && typeof v == "function" && qe && qe.createHTMLDocument !== void 0;
	let Qe = De, $e = Oe, et = ke, tt = Ae, nt = je, rt = Ne, it = Pe, at = Ie, ot = Me, V = null, st = T({}, [
		...ge,
		..._e,
		...ve,
		...be,
		...Se
	]), H = null, ct = T({}, [
		...Ce,
		...we,
		...Te,
		...Ee
	]), U = Object.seal(p(null, {
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
	})), lt = null, ut = null, W = Object.seal(p(null, {
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
	})), dt = !0, ft = !0, pt = !1, mt = !0, G = !1, K = !0, q = !1, ht = !1, gt = null, _t = null, vt = !1, yt = !1, bt = !1, xt = !1, St = !0, Ct = !1, wt = "user-content-", Tt = !0, Et = !1, Dt = {}, J = null, Ot = T({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), kt = null, At = T({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), jt = null, Mt = T({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Nt = "http://www.w3.org/1998/Math/MathML", Pt = "http://www.w3.org/2000/svg", Y = "http://www.w3.org/1999/xhtml", Ft = Y, It = !1, Lt = null, Rt = T({}, [
		Nt,
		Pt,
		Y
	], se), zt = d([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Bt = T({}, zt), Vt = d(["annotation-xml"]), Ht = T({}, Vt), Ut = T({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Wt = null, Gt = ["application/xhtml+xml", "text/html"], X = null, Kt = null, qt = n.createElement("form"), Jt = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Yt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Kt && Kt === e) return;
		(!e || typeof e != "object") && (e = {}), e = D(e), Wt = Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, X = Wt === "application/xhtml+xml" ? se : oe, V = A(e, "ALLOWED_TAGS", st, { transform: X }), H = A(e, "ALLOWED_ATTR", ct, { transform: X }), Lt = A(e, "ALLOWED_NAMESPACES", Rt, { transform: se }), jt = A(e, "ADD_URI_SAFE_ATTR", Mt, {
			transform: X,
			base: Mt
		}), kt = A(e, "ADD_DATA_URI_TAGS", At, {
			transform: X,
			base: At
		}), J = A(e, "FORBID_CONTENTS", Ot, { transform: X }), lt = A(e, "FORBID_TAGS", D({}), { transform: X }), ut = A(e, "FORBID_ATTR", D({}), { transform: X }), Dt = y(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? D(e.USE_PROFILES) : e.USE_PROFILES : !1, dt = e.ALLOW_ARIA_ATTR !== !1, ft = e.ALLOW_DATA_ATTR !== !1, pt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, mt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = e.SAFE_FOR_TEMPLATES || !1, K = e.SAFE_FOR_XML !== !1, q = e.WHOLE_DOCUMENT || !1, yt = e.RETURN_DOM || !1, bt = e.RETURN_DOM_FRAGMENT || !1, xt = e.RETURN_TRUSTED_TYPE || !1, vt = e.FORCE_BODY || !1, St = e.SANITIZE_DOM !== !1, Ct = e.SANITIZE_NAMED_PROPS || !1, Tt = e.KEEP_CONTENT !== !1, Et = e.IN_PLACE || !1, ot = he(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Me, Ft = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Y, Bt = y(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? D(e.MATHML_TEXT_INTEGRATION_POINTS) : T({}, zt), Ht = y(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? D(e.HTML_INTEGRATION_POINTS) : T({}, Vt);
		let t = y(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? D(e.CUSTOM_ELEMENT_HANDLING) : p(null);
		if (U = p(null), y(t, "tagNameCheck") && Jt(t.tagNameCheck) && (U.tagNameCheck = t.tagNameCheck), y(t, "attributeNameCheck") && Jt(t.attributeNameCheck) && (U.attributeNameCheck = t.attributeNameCheck), y(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), f(U), G && (ft = !1), bt && (yt = !0), Dt && (V = T({}, Se), H = p(null), Dt.html === !0 && (T(V, ge), T(H, Ce)), Dt.svg === !0 && (T(V, _e), T(H, we), T(H, Ee)), Dt.svgFilters === !0 && (T(V, ve), T(H, we), T(H, Ee)), Dt.mathMl === !0 && (T(V, be), T(H, Te), T(H, Ee))), W.tagCheck = null, W.attributeCheck = null, y(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? W.tagCheck = e.ADD_TAGS : g(e.ADD_TAGS) && (V === st && (V = D(V)), T(V, e.ADD_TAGS, X))), y(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? W.attributeCheck = e.ADD_ATTR : g(e.ADD_ATTR) && (H === ct && (H = D(H)), T(H, e.ADD_ATTR, X))), y(e, "ADD_URI_SAFE_ATTR") && g(e.ADD_URI_SAFE_ATTR) && T(jt, e.ADD_URI_SAFE_ATTR, X), y(e, "FORBID_CONTENTS") && g(e.FORBID_CONTENTS) && (J === Ot && (J = D(J)), T(J, e.FORBID_CONTENTS, X)), y(e, "ADD_FORBID_CONTENTS") && g(e.ADD_FORBID_CONTENTS) && (J === Ot && (J = D(J)), T(J, e.ADD_FORBID_CONTENTS, X)), Tt && (V["#text"] = !0), q && T(V, [
			"html",
			"head",
			"body"
		]), V.table && (T(V, ["tbody"]), delete lt.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw S("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw S("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = j;
			j = e.TRUSTED_TYPES_POLICY;
			try {
				M = L("");
			} catch (e) {
				throw j = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (j = void 0, M = "") : (j === void 0 && (j = R()), j && typeof M == "string" && (M = L("")));
		d && d(e), Kt = e;
	}, Xt = T({}, [
		..._e,
		...ve,
		...ye
	]), Zt = T({}, [...be, ...xe]), Qt = function(e, t, n) {
		return t.namespaceURI === Y ? e === "svg" : t.namespaceURI === Nt ? e === "svg" && (n === "annotation-xml" || Bt[n]) : !!Xt[e];
	}, $t = function(e, t, n) {
		return t.namespaceURI === Y ? e === "math" : t.namespaceURI === Pt ? e === "math" && Ht[n] : !!Zt[e];
	}, en = function(e, t, n) {
		return t.namespaceURI === Pt && !Ht[n] || t.namespaceURI === Nt && !Bt[n] ? !1 : !Zt[e] && (Ut[e] || !Xt[e]);
	}, tn = function(e) {
		let t = v(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Ft,
			tagName: "template"
		});
		let n = oe(e.tagName), r = oe(t.tagName);
		return Lt[e.namespaceURI] ? e.namespaceURI === Pt ? Qt(n, t, r) : e.namespaceURI === Nt ? $t(n, t, r) : e.namespaceURI === Y ? en(n, t, r) : !!(Wt === "application/xhtml+xml" && Lt[e.namespaceURI]) : !1;
	}, Z = function(e) {
		ie(t.removed, { element: e });
		try {
			v(e).removeChild(e);
		} catch {
			if (fe(e), !v(e)) throw S("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, nn = function(e) {
		an(e);
		let t = _(e);
		if (t) {
			let e = [];
			te(t, (t) => {
				ie(e, t);
			}), te(e, (e) => {
				try {
					fe(e);
				} catch {}
			});
		}
		let n = C(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, Q = function(e, n) {
		try {
			ie(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			ie(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") {
			if (yt || bt) try {
				Z(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, rn = function(e) {
		let t = C(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (!(typeof i != "string" || H[X(i)])) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, an = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(w ? w(e) : e.nodeType) === k.element && rn(e);
			let n = _(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, on = function(e) {
		if (!K) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = w ? w(e) : e.nodeType;
			if (n === k.processingInstruction || n === k.comment && x(Re, e.data)) {
				try {
					fe(e);
				} catch {}
				continue;
			}
			if (n === k.element) {
				let t = e, n = X(E ? E(e) : e.nodeName);
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && n !== "label" && n !== "output" && t.removeAttribute("for");
				} catch {}
			}
			let r = _(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, sn = function(e) {
		let t = null, r = null;
		if (vt) e = "<remove></remove>" + e;
		else {
			let t = ce(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Wt === "application/xhtml+xml" && Ft === Y && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = j ? L(e) : e;
		if (Ft === Y) try {
			t = new u().parseFromString(i, Wt);
		} catch {}
		if (!t || !t.documentElement) {
			t = qe.createDocument(Ft, "template", null);
			try {
				t.documentElement.innerHTML = It ? M : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Ft === Y ? Xe.call(t, q ? "html" : "body")[0] : q ? t.documentElement : a;
	}, cn = function(e) {
		let t = Ge ? Ge(e) : e.ownerDocument;
		return Je.call(t || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, ln = function(e) {
		return e = le(e, Qe, " "), e = le(e, $e, " "), e = le(e, et, " "), e;
	}, un = function(e) {
		e.normalize();
		let t = Ge ? Ge(e) : e.ownerDocument, n = Je.call(t || e, e, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = ln(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && te(i, (e) => {
			fn(e.content) && un(e.content);
		});
	}, dn = function(e) {
		let t = E ? E(e) : null;
		return typeof t != "string" || X(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== C(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== w(e) || e.childNodes !== _(e);
	}, fn = function(e) {
		if (!w || typeof e != "object" || !e) return !1;
		try {
			return w(e) === k.documentFragment;
		} catch {
			return !1;
		}
	}, pn = function(e) {
		if (!w || typeof e != "object" || !e) return !1;
		try {
			return typeof w(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && te(e, (e) => {
			e.call(t, n, r, Kt);
		});
	}
	let mn = function(e, t) {
		return !!(K && e.hasChildNodes() && !pn(e.firstElementChild) && x(Le, e.textContent) && x(Le, e.innerHTML) || K && e.namespaceURI === Y && t === "style" && pn(e.firstElementChild) || e.nodeType === k.processingInstruction || K && e.nodeType === k.comment && x(Re, e.data));
	}, hn = function(e, t, n) {
		if (!lt[t] && bn(t) && (U.tagNameCheck instanceof RegExp && x(U.tagNameCheck, t) || U.tagNameCheck instanceof Function && U.tagNameCheck(t))) return !1;
		if (Tt && !J[t]) {
			let t = v(e), r = _(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? ee(r[a], !0) : r[a];
					t.insertBefore(i, pe(e));
				}
			}
		}
		return Z(e), !0;
	}, gn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? D(t) : t;
	}, _n = function(e, n) {
		if ($(B.beforeSanitizeElements, e, null), e !== n && v(e) === null) return Et && an(e), !0;
		if (dn(e)) return Z(e), !0;
		let r = X(E ? E(e) : e.nodeName);
		if (V = gn(B.uponSanitizeElement, V, st, gt), $(B.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: V
		}), e !== n && v(e) === null) return Et && an(e), !0;
		if (mn(e, r)) return Z(e), !0;
		if (lt[r] || !(W.tagCheck instanceof Function && W.tagCheck(r)) && !V[r]) {
			let t = hn(e, r, n);
			return t === !1 && $(B.afterSanitizeElements, e, null), t;
		}
		if ((w ? w(e) : e.nodeType) === k.element && !tn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && x(ze, e.innerHTML)) return Z(e), !0;
		if (G && e.nodeType === k.text) {
			let n = ln(e.textContent);
			e.textContent !== n && (ie(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(B.afterSanitizeElements, e, null), !1;
	}, vn = function(e, t, r) {
		if (ut[t] || K && t === "patchsrc" || K && t === "for" && e !== "label" && e !== "output" || St && (t === "id" || t === "name") && (r in n || r in qt)) return !1;
		let i = H[t] || W.attributeCheck instanceof Function && W.attributeCheck(t, e);
		if (!(ft && x(tt, t)) && !(dt && x(nt, t))) {
			if (!i) {
				if (!(bn(e) && (U.tagNameCheck instanceof RegExp && x(U.tagNameCheck, e) || U.tagNameCheck instanceof Function && U.tagNameCheck(e)) && (U.attributeNameCheck instanceof RegExp && x(U.attributeNameCheck, t) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(t, e)) || t === "is" && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && x(U.tagNameCheck, r) || U.tagNameCheck instanceof Function && U.tagNameCheck(r)))) return !1;
			} else if (!jt[t] && !x(ot, le(r, it, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && ue(r, "data:") === 0 && kt[e]) && !(pt && !x(rt, le(r, it, ""))) && r) return !1;
		}
		return !0;
	}, yn = T({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), bn = function(e) {
		return !yn[oe(e)] && x(at, e);
	}, xn = function(e, t, n, r) {
		if (j && typeof m == "object" && typeof m.getAttributeType == "function" && !n) switch (m.getAttributeType(e, t)) {
			case "TrustedHTML": return L(r);
			case "TrustedScriptURL": return Ke(r);
		}
		return r;
	}, Sn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), dn(e) ? Z(e) : re(t.removed);
		} catch {
			Q(n, e);
		}
	}, Cn = function(e) {
		$(B.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || dn(e)) return;
		H = gn(B.uponSanitizeAttribute, H, ct, _t);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: H,
			forceKeepAttr: void 0
		}, r = t.length, i = X(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = X(o), u = c, d = o === "value" ? u : de(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, $(B.uponSanitizeAttribute, e, n), d = n.attrValue, Ct && (l === "id" || l === "name") && ue(d, wt) !== 0 && (Q(o, e), d = wt + d), K && x(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Q(o, e);
				continue;
			}
			if (l === "attributename" && ce(d, "href")) {
				Q(o, e);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					Q(o, e);
					continue;
				}
				if (!mt && x(Be, d)) {
					Q(o, e);
					continue;
				}
				if (G && (d = ln(d)), !vn(i, l, d)) {
					Q(o, e);
					continue;
				}
				d = xn(i, l, s, d), d !== u && Sn(e, o, s, d);
			}
		}
		$(B.afterSanitizeAttributes, e, null);
	}, wn = function(e) {
		let t = null, n = cn(e);
		for ($(B.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(B.uponSanitizeShadowNode, t, null), _n(t, e), Cn(t), fn(t.content) && wn(t.content), (w ? w(t) : t.nodeType) === k.element) {
			let e = b(t);
			fn(e) && (Tn(e), wn(e));
		}
		$(B.afterSanitizeShadowDOM, e, null);
	}, Tn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				wn(e.shadow);
				continue;
			}
			let n = e.node, r = (w ? w(n) : n.nodeType) === k.element, i = _(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = E ? E(n) : null;
				if (typeof e == "string" && X(e) === "template") {
					let e = n.content;
					fn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = b(n);
				fn(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (It = !e, It && (e = "<!-->"), typeof e != "string" && !pn(e) && (e = me(e), typeof e != "string")) throw S("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		ht ? (V = gt, H = _t) : Yt(n), (B.uponSanitizeElement.length > 0 || B.uponSanitizeAttribute.length > 0) && (V = D(V)), B.uponSanitizeAttribute.length > 0 && (H = D(H)), t.removed = [];
		let c = Et && typeof e != "string" && pn(e);
		if (c) {
			on(e);
			let t = E ? E(e) : e.nodeName;
			if (typeof t == "string") {
				let n = X(t);
				if (!V[n] || lt[n]) throw nn(e), S("root node is forbidden and cannot be sanitized in-place");
			}
			if (dn(e)) throw nn(e), S("root node is clobbered and cannot be sanitized in-place");
			try {
				Tn(e);
			} catch (t) {
				throw nn(e), t;
			}
		} else if (pn(e)) i = sn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === k.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Tn(a);
		else {
			if (!yt && !G && !q && e.indexOf("<") === -1) return j && xt ? L(e) : e;
			if (i = sn(e), !i) return yt ? null : xt ? M : "";
		}
		i && vt && Z(i.firstChild);
		let l = c ? e : i;
		try {
			let e = cn(l);
			for (; o = e.nextNode();) _n(o, l), Cn(o), fn(o.content) && wn(o.content);
		} catch (n) {
			throw c && (nn(e), te(t.removed, (e) => {
				e.element && an(e.element);
			})), n;
		}
		if (c) return te(t.removed, (e) => {
			e.element && an(e.element);
		}), G && un(e), e;
		if (yt) {
			if (G && un(i), bt) for (s = Ye.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (H.shadowroot || H.shadowrootmode) && (s = Ze.call(r, s, !0)), s;
		}
		let u = q ? i.outerHTML : i.innerHTML;
		return q && V["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && x(Fe, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), G && (u = ln(u)), j && xt ? L(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Yt(e), ht = !0, gt = V, _t = H;
	}, t.clearConfig = function() {
		Kt = null, ht = !1, gt = null, _t = null, j = N, M = "";
	}, t.isValidAttribute = function(e, t, n) {
		Kt || Yt({});
		let r = X(e), i = X(t);
		return vn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && y(B, e) && ie(B[e], t);
	}, t.removeHook = function(e, t) {
		if (y(B, e)) {
			if (t !== void 0) {
				let n = ne(B[e], t);
				return n === -1 ? void 0 : ae(B[e], n, 1)[0];
			}
			return re(B[e]);
		}
	}, t.removeHooks = function(e) {
		y(B, e) && (B[e] = []);
	}, t.removeAllHooks = function() {
		B = Ue();
	}, t;
}
var Ge = We(), j = [
	"a",
	"abbr",
	"b",
	"br",
	"code",
	"em",
	"li",
	"ol",
	"p",
	"span",
	"strong",
	"ul"
], M = [
	"href",
	"title",
	"target",
	"rel",
	"class"
];
function N(e, t, n) {
	let r = document.createElement(e);
	return t && (r.className = t), n != null && (r.textContent = String(n)), r;
}
function P(e, t) {
	if (t && typeof t == "object" && "__html__" in t) {
		let n = String(t.__html__), r = Ge.sanitize(n, {
			ALLOWED_TAGS: j,
			ALLOWED_ATTR: M
		}), i = N("div");
		for (i.innerHTML = r; i.firstChild;) e.append(i.firstChild);
		return;
	}
	t != null && e.append(document.createTextNode(String(t)));
}
function F(e) {
	let t = String(e ?? "#").trim();
	return /^(https?:|mailto:|tel:|\/|#)/i.test(t) ? t : "#";
}
function I(e, t, n = "govuk-link", r = !1) {
	let i = N("a", `${n}${r ? " st-gds-external" : ""}`, String(e ?? ""));
	return i.href = F(t), r && (i.target = "_blank", i.rel = "noopener noreferrer"), i;
}
function L(e, t = "field") {
	return `st-gds-${String(e._key ?? "gds").replace(/[^a-zA-Z0-9_-]/g, "-")}-${t}`;
}
function Ke(e, t, n) {
	let r = [];
	if (t.hint) {
		let i = `${n}-hint`, a = N("div", "govuk-hint", t.hint);
		a.id = i, e.append(a), r.push(i);
	}
	if (t.error) {
		let i = `${n}-error`, a = N("p", "govuk-error-message");
		a.id = i;
		let o = N("span", "govuk-visually-hidden", "Error:");
		a.append(o, document.createTextNode(` ${String(t.error)}`)), e.append(a), r.push(i);
	}
	return r;
}
function R(e, t, n = "label") {
	let r = N("div", `govuk-form-group${e.error ? " govuk-form-group--error" : ""}`), i = N(n, n === "legend" ? "govuk-fieldset__legend govuk-fieldset__legend--m" : "govuk-label", e.label);
	if (i instanceof HTMLLabelElement && (i.htmlFor = t), e.required) {
		let e = N("span", "govuk-visually-hidden", " required");
		i.append(e);
	}
	return r.append(i), {
		group: r,
		label: i,
		describedBy: Ke(r, e, t)
	};
}
function z(e, t) {
	t.length && e.setAttribute("aria-describedby", t.join(" "));
}
function qe(e) {
	return e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && [
		"text",
		"search",
		"tel",
		"url",
		"password"
	].includes(e.type);
}
function Je(e, t, n) {
	if (!t) return;
	let r = e.ownerDocument.getElementById(t);
	!r || !e.contains(r) || (r.focus({ preventScroll: !0 }), n && qe(r) && r.setSelectionRange(n[0], n[1]));
}
function Ye(e, t, n, r = !1) {
	let i = L(t), { group: a, describedBy: o } = R(t, i), s = N("input", `govuk-input${t.error ? " govuk-input--error" : ""} st-gds-width-${String(t.width ?? "full")}`);
	s.id = i, s.name = i, s.type = r && !t.visible ? "password" : String(t.input_type ?? "text"), s.value = String(t.value ?? ""), s.disabled = !!t.disabled, s.required = !!t.required, t.autocomplete && s.setAttribute("autocomplete", String(t.autocomplete)), t.inputmode && (s.inputMode = String(t.inputmode)), z(s, o), s.addEventListener("change", () => n.setStateValue("value", s.value));
	let c = s;
	if (t.prefix || t.suffix) {
		let e = N("div", "govuk-input__wrapper");
		t.prefix && e.append(N("div", "govuk-input__prefix", t.prefix)), e.append(s), t.suffix && e.append(N("div", "govuk-input__suffix", t.suffix)), c = e;
	}
	if (r) {
		let e = N("div", "st-gds-password-wrapper");
		e.append(s);
		let r = N("button", "govuk-button govuk-button--secondary st-gds-password-toggle", t.visible ? String(t.hide_label ?? "Hide") : String(t.show_label ?? "Show"));
		r.type = "button", r.setAttribute("aria-controls", i), r.addEventListener("click", () => n.setStateValue("visible", !t.visible)), e.append(r), c = e;
	}
	a.append(c), e.append(a);
}
function Xe(e, t, n, r = !1) {
	let i = L(t), { group: a, describedBy: o } = R(t, i), s = N("textarea", `govuk-textarea${t.error ? " govuk-textarea--error" : ""}`);
	s.id = i, s.name = i, s.rows = Number(t.rows ?? 5), s.value = String(t.value ?? ""), s.disabled = !!t.disabled, s.required = !!t.required, z(s, o);
	let c = () => {};
	if (s.addEventListener("input", () => {
		r && c();
	}), s.addEventListener("change", () => n.setStateValue("value", s.value)), a.append(s), r) {
		let e = Number(t.max_characters), n = N("div", "govuk-character-count__message govuk-hint", "");
		n.id = `${i}-info`, n.setAttribute("aria-live", "polite"), o.push(n.id), z(s, o), a.append(n), c = () => {
			let t = e - s.value.length;
			n.textContent = t >= 0 ? `You have ${t} character${t === 1 ? "" : "s"} remaining` : `You have ${Math.abs(t)} character${t === -1 ? "" : "s"} too many`, n.classList.toggle("govuk-error-message", t < 0);
		}, c();
	}
	e.append(a);
}
function Ze(e, t, n) {
	let r = N("section", "st-gds-chatbot");
	r.setAttribute("aria-label", String(t.label)), r.append(N("h2", "govuk-heading-m st-gds-chatbot__title", t.label));
	let i = N("div", "st-gds-chatbot__transcript");
	i.setAttribute("role", "log"), i.setAttribute("aria-label", `${String(t.label)} messages`), i.setAttribute("aria-live", "polite"), i.setAttribute("aria-relevant", "additions text"), i.tabIndex = 0;
	let a = t.messages ?? [];
	a.length || i.append(N("p", "govuk-body st-gds-chatbot__empty", t.empty_text));
	for (let e of a) {
		let n = e.name || (e.role === "user" ? t.user_name : t.assistant_name), r = N("article", `st-gds-chat-message st-gds-chat-message--${e.role}`);
		r.setAttribute("aria-label", `${String(n)} message`);
		let a = N("p", "st-gds-chat-message__meta");
		a.append(N("strong", "st-gds-chat-message__name", n)), e.timestamp && (a.append(document.createTextNode(" ")), a.append(N("time", "st-gds-chat-message__time", e.timestamp)));
		let o = N("div", "st-gds-chat-message__body");
		P(o, e.content), r.append(a, o), i.append(r);
	}
	if (t.waiting) {
		let e = N("p", "govuk-body st-gds-chatbot__status", `${String(t.assistant_name)} is responding`);
		e.setAttribute("role", "status"), i.append(e);
	}
	r.append(i);
	let o = N("form", "st-gds-chatbot__composer"), s = L(t, "message"), { group: c, describedBy: l } = R({
		...t,
		label: t.input_label,
		required: !0
	}, s), u = N("textarea", `govuk-textarea${t.error ? " govuk-textarea--error" : ""}`);
	u.id = s, u.name = s, u.rows = 3, u.value = String(t.draft ?? ""), u.required = !0, u.disabled = !!(t.disabled || t.waiting), t.placeholder && (u.placeholder = String(t.placeholder)), z(u, l), c.append(u);
	let d = N("button", "govuk-button st-gds-chatbot__send", t.send_label);
	d.type = "submit", d.disabled = u.disabled || !u.value.trim(), u.addEventListener("input", () => {
		d.disabled = u.disabled || !u.value.trim(), n.setStateValue("draft", u.value);
	}), u.addEventListener("keydown", (e) => {
		e.key === "Enter" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), o.requestSubmit());
	}), o.addEventListener("submit", (e) => {
		e.preventDefault();
		let t = u.value.trim();
		!t || u.disabled || (u.value = "", d.disabled = !0, n.setStateValue("draft", ""), n.setTriggerValue("submitted", t));
	}), o.append(c, d), r.append(o), e.append(r);
}
function B(e, t, n, r) {
	let i = L(t), a = N("fieldset", "govuk-fieldset"), { group: o, label: s, describedBy: c } = R(t, i, "legend");
	a.setAttribute("aria-describedby", c.join(" ")), a.append(s);
	for (let e of [...o.children].slice(1)) a.append(e);
	let l = N("div", r ? `govuk-checkboxes${t.small ? " govuk-checkboxes--small" : ""}` : `govuk-radios${t.inline ? " govuk-radios--inline" : ""}`), u = t.options ?? [], d = r ? t.value ?? [] : [t.value];
	u.forEach((e, a) => {
		let o = N("div", r ? "govuk-checkboxes__item" : "govuk-radios__item"), s = N("input", r ? "govuk-checkboxes__input" : "govuk-radios__input");
		s.type = r ? "checkbox" : "radio", s.name = i, s.id = `${i}-${a}`, s.value = String(a), s.disabled = !!t.disabled || !!e.disabled, s.checked = d.some((t) => JSON.stringify(t) === JSON.stringify(e.value));
		let c = N("label", r ? "govuk-label govuk-checkboxes__label" : "govuk-label govuk-radios__label", e.label);
		c.htmlFor = s.id, o.append(s, c), e.hint && o.append(N("div", "govuk-hint govuk-checkboxes__hint", e.hint)), l.append(o);
		let f = null;
		e.conditional && (f = N("div", "st-gds-conditional"), P(f, e.conditional), f.hidden = !s.checked, l.append(f)), s.addEventListener("change", () => {
			if (f && (f.hidden = !s.checked), r) {
				let e = [...l.querySelectorAll("input:checked")].map((e) => u[Number(e.value)].value);
				n.setStateValue("value", e);
			} else n.setStateValue("value", e.value);
		});
	}), a.append(l), o.replaceChildren(a), e.append(o);
}
function Qe(e, t, n) {
	let r = L(t), { group: i, describedBy: a } = R(t, r), o = N("select", "govuk-select");
	o.id = r, o.name = r, o.disabled = !!t.disabled, o.required = !!t.required, z(o, a);
	let s = t.options ?? [];
	t.required || o.append(N("option", void 0, "Select an option")), s.forEach((e, n) => {
		let r = N("option", void 0, e.label);
		r.value = String(n), r.disabled = !!e.disabled, r.selected = JSON.stringify(e.value) === JSON.stringify(t.value), o.append(r);
	}), o.addEventListener("change", () => {
		n.setStateValue("value", o.value === "" ? null : s[Number(o.value)].value);
	}), i.append(o), e.append(i);
}
function $e(e, t, n) {
	let r = L(t), { group: i, label: a, describedBy: o } = R(t, r, "legend"), s = N("fieldset", "govuk-fieldset");
	s.append(a);
	for (let e of [...i.children].slice(1)) s.append(e);
	let c = String(t.value ?? "").split("-"), l = N("div", "st-gds-date-row"), u = [
		[
			"day",
			c[2] ?? "",
			2
		],
		[
			"month",
			c[1] ?? "",
			2
		],
		[
			"year",
			c[0] ?? "",
			4
		]
	], d = [];
	u.forEach(([e, n, i]) => {
		let a = N("div", "govuk-form-group"), s = `${r}-${e}`, c = N("label", "govuk-label", e[0].toUpperCase() + e.slice(1));
		c.htmlFor = s;
		let u = N("input", `govuk-input${e === "year" ? " st-gds-date-year" : ""}`);
		u.id = s, u.name = s, u.inputMode = "numeric", u.pattern = "[0-9]*", u.maxLength = i, u.value = n, u.disabled = !!t.disabled, z(u, o), a.append(c, u), l.append(a), d.push(u);
	});
	let f = () => {
		let [e, t, r] = d.map((e) => e.value.padStart(2, "0")), i = e && t && r;
		n.setStateValue("value", i ? `${r}-${t}-${e}` : null);
	};
	d.forEach((e) => e.addEventListener("change", f)), s.append(l), i.replaceChildren(s), e.append(i);
}
function et(e, t, n) {
	let r = L(t), { group: i, describedBy: a } = R(t, r), o = N("input", `govuk-file-upload${t.error ? " govuk-file-upload--error" : ""}`);
	o.type = "file", o.id = r, o.name = r, o.disabled = !!t.disabled, o.required = !!t.required, o.accept = (t.accept ?? []).join(","), z(o, a);
	let s = N("p", "st-gds-file-meta");
	o.addEventListener("change", async () => {
		let e = o.files?.[0];
		if (!e) {
			n.setStateValue("file", null), s.textContent = "";
			return;
		}
		let r = Number(t.max_size_mb) * 1024 * 1024;
		if (e.size > r) {
			s.className = "govuk-error-message", s.textContent = `The selected file must be smaller than ${String(t.max_size_mb)} MB`, o.value = "";
			return;
		}
		let i = new Uint8Array(await e.arrayBuffer());
		s.className = "st-gds-file-meta", s.textContent = `${e.name} (${Math.ceil(e.size / 1024)} KB)`, n.setStateValue("file", {
			name: e.name,
			type: e.type,
			size: e.size,
			data: i
		});
	}), i.append(o, s), e.append(i);
}
function tt(e, t, n) {
	let r = String(t.kind ?? "primary"), i = N("button", `govuk-button${{
		secondary: " govuk-button--secondary",
		warning: " govuk-button--warning"
	}[r] ?? ""}${t.width === "full" ? " st-gds-button-full" : ""}`, t.label);
	i.type = "button", i.disabled = !!t.disabled, r === "start" && (i.classList.add("govuk-button--start"), i.append(document.createTextNode("  →"))), i.addEventListener("click", () => n.setTriggerValue("clicked", !0)), e.append(i);
}
function nt(e, t, n) {
	let r = t.items ?? [], i = new Set(t.open ?? []), a = N("div", "govuk-accordion");
	r.forEach((e, r) => {
		let o = N("div", "govuk-accordion__section"), s = N("h2", "govuk-accordion__section-heading"), c = N("button", "govuk-accordion__section-button", e.heading);
		c.type = "button";
		let l = L(t, `accordion-${r}`);
		c.setAttribute("aria-controls", l), c.setAttribute("aria-expanded", String(i.has(r) || e.expanded));
		let u = N("div", "govuk-accordion__section-content");
		u.id = l, u.hidden = !(i.has(r) || e.expanded), P(u, e.content), c.addEventListener("click", () => {
			u.hidden = !u.hidden, c.setAttribute("aria-expanded", String(!u.hidden)), u.hidden ? i.delete(r) : i.add(r), n.setStateValue("open", [...i]);
		}), s.append(c), o.append(s, u), a.append(o);
	}), e.append(a);
}
function rt(e, t, n) {
	let r = t.items ?? [], i = Number(t.selected ?? 0), a = N("div", "govuk-tabs"), o = N("h2", "govuk-tabs__title", "Contents"), s = N("ul", "govuk-tabs__list");
	s.setAttribute("role", "tablist");
	let c = [], l = [], u = (e) => {
		i = e, l.forEach((t, n) => {
			t.parentElement?.classList.toggle("govuk-tabs__list-item--selected", n === e), t.setAttribute("aria-selected", String(n === e));
		}), c.forEach((t, n) => {
			t.hidden = n !== e;
		}), n.setStateValue("selected", e);
	};
	r.forEach((e, n) => {
		let r = N("li", `govuk-tabs__list-item${n === i ? " govuk-tabs__list-item--selected" : ""}`);
		r.setAttribute("role", "presentation");
		let a = I(e.label, `#${L(t, `panel-${n}`)}`, "govuk-tabs__tab");
		a.id = L(t, `tab-${n}`), a.setAttribute("role", "tab"), a.setAttribute("aria-selected", String(n === i)), a.addEventListener("click", (e) => {
			e.preventDefault(), u(n);
		}), r.append(a), s.append(r), l.push(a);
		let o = N("div", "govuk-tabs__panel");
		o.id = L(t, `panel-${n}`), o.setAttribute("role", "tabpanel"), o.setAttribute("aria-labelledby", a.id), o.hidden = n !== i, P(o, e.content), c.push(o);
	}), a.append(o, s, ...c), e.append(a);
}
function it(e, t, n, r) {
	switch (t) {
		case "bootstrap": {
			document.documentElement.style.setProperty("--st-gds-brand", String(n.brand_colour)), document.body.classList.toggle("st-gds-minimal-chrome", n.chrome === "minimal");
			let e = "streamlit-gds-host-styles", t = document.getElementById(e);
			t || (t = document.createElement("style"), t.id = e, document.head.append(t)), t.textContent = "\n        .stMainBlockContainer { max-width: 1020px; padding-left: 30px; padding-right: 30px; }\n        body, [data-testid=\"stAppViewContainer\"] { background: #fff; color: #0b0c0c; font-family: Arial, Helvetica, sans-serif; }\n        .st-gds-minimal-chrome [data-testid=\"stHeader\"], .st-gds-minimal-chrome [data-testid=\"stToolbar\"] { display: none; }\n        [class*=\"st-key-gds-width-one-quarter-\"] { width: 25%; }\n        [class*=\"st-key-gds-width-one-third-\"] { width: 33.333%; }\n        [class*=\"st-key-gds-width-one-half-\"] { width: 50%; }\n        [class*=\"st-key-gds-width-two-thirds-\"] { width: 66.666%; }\n        [class*=\"st-key-gds-width-three-quarters-\"] { width: 75%; }\n        @media(max-width: 640px) { .stMainBlockContainer { padding-left: 15px; padding-right: 15px; } [class*=\"st-key-gds-width-\"] { width: 100%; } }\n      ";
			return;
		}
		case "space": {
			let t = N("span", "st-gds-space");
			t.style.height = `${Number(n.size ?? 4) * 5}px`, e.append(t);
			return;
		}
		case "heading": {
			let t = {
				xl: "govuk-heading-xl",
				l: "govuk-heading-l",
				m: "govuk-heading-m",
				s: "govuk-heading-s"
			}, r = N("h2", t[String(n.size)] ?? t.l);
			n.caption && r.append(N("span", "govuk-caption-l st-gds-heading-caption", n.caption)), r.append(document.createTextNode(String(n.text ?? ""))), e.append(r);
			return;
		}
		case "paragraph": {
			let t = N("p", n.lead ? "govuk-body-l" : "govuk-body");
			P(t, n.content), e.append(t);
			return;
		}
		case "link":
			e.append(I(n.label, n.href, "govuk-link", !!n.external));
			return;
		case "list": {
			let t = N(n.ordered ? "ol" : "ul", `govuk-list${n.ordered ? " govuk-list--number" : n.bullet ? " govuk-list--bullet" : ""}`);
			for (let e of n.items ?? []) t.append(N("li", void 0, e));
			e.append(t);
			return;
		}
		case "image": {
			let t = N("figure"), r = N("img", "govuk-image");
			r.src = F(n.src), r.alt = String(n.alt ?? ""), n.width && (r.width = Number(n.width)), t.append(r), n.caption && t.append(N("figcaption", "govuk-body-s", n.caption)), e.append(t);
			return;
		}
		case "section_break":
			e.append(N("hr", `govuk-section-break govuk-section-break--${String(n.size ?? 3)}${n.visible ? " govuk-section-break--visible" : ""}`));
			return;
		case "back_link":
			e.append(I(n.label, n.href, "govuk-back-link"));
			return;
		case "breadcrumbs": {
			let t = N("nav", `govuk-breadcrumbs${n.collapse_on_mobile ? " govuk-breadcrumbs--collapse-on-mobile" : ""}`);
			t.setAttribute("aria-label", "Breadcrumb");
			let r = N("ol", "govuk-breadcrumbs__list");
			for (let e of n.items ?? []) {
				let t = N("li", "govuk-breadcrumbs__list-item");
				e.href ? t.append(I(e.label, e.href, "govuk-breadcrumbs__link")) : t.append(document.createTextNode(e.label)), r.append(t);
			}
			t.append(r), e.append(t);
			return;
		}
		case "details": {
			let t = N("details", "govuk-details");
			t.open = !!n.open, t.append(N("summary", "govuk-details__summary", n.summary));
			let r = N("div", "govuk-details__text");
			P(r, n.content), t.append(r), e.append(t);
			return;
		}
		case "inset_text": {
			let t = N("div", "govuk-inset-text");
			P(t, n.content), e.append(t);
			return;
		}
		case "error_message": {
			let t = N("p", "govuk-error-message");
			t.append(N("span", "govuk-visually-hidden", "Error:"), document.createTextNode(` ${String(n.text)}`)), e.append(t);
			return;
		}
		case "error_summary": {
			let t = N("div", "govuk-error-summary");
			t.tabIndex = -1, t.setAttribute("role", "alert"), t.append(N("h2", "govuk-error-summary__title", n.title)), n.description && t.append(N("p", "govuk-body", n.description));
			let r = N("ul", "govuk-list govuk-error-summary__list");
			for (let e of n.errors ?? []) {
				let t = N("li");
				t.append(I(e.text, e.href)), r.append(t);
			}
			t.append(r), e.append(t), n.focus && queueMicrotask(() => t.focus());
			return;
		}
		case "fieldset": {
			let t = N("fieldset", "govuk-fieldset");
			t.append(N("legend", `govuk-fieldset__legend govuk-fieldset__legend--${String(n.heading_size)}`, n.legend));
			let r = N("div");
			P(r, n.content), t.append(r), e.append(t);
			return;
		}
		case "header": {
			let t = N("header", "st-gds-generic-header");
			t.style.setProperty("--st-gds-brand", String(n.brand_colour ?? "#1d70b8"));
			let r = N("div", "st-gds-generic-header__inner"), i = I(n.organisation, n.home_url, "st-gds-generic-header__organisation");
			r.append(i), n.service_name && r.append(N("span", "st-gds-generic-header__service", n.service_name));
			let a = n.navigation;
			if (a?.length) {
				let e = N("nav");
				e.setAttribute("aria-label", "Primary navigation");
				let t = N("ul", "st-gds-generic-header__nav");
				a.forEach((e) => {
					let n = N("li"), r = I(e.label, e.href);
					e.active && r.setAttribute("aria-current", "page"), n.append(r), t.append(n);
				}), e.append(t), r.append(e);
			}
			t.append(r), e.append(t);
			return;
		}
		case "footer": {
			let t = N("footer", "st-gds-neutral-footer"), r = N("div", "st-gds-neutral-footer__inner");
			n.organisation && r.append(N("h2", "govuk-heading-s", n.organisation)), n.text && r.append(N("p", "govuk-body-s", n.text));
			let i = n.links;
			if (i?.length) {
				let e = N("ul", "st-gds-neutral-footer__links");
				i.forEach((t) => {
					let n = N("li");
					n.append(I(t.label, t.href, "govuk-link", t.external)), e.append(n);
				}), r.append(e);
			}
			t.append(r), e.append(t);
			return;
		}
		case "notification_banner": {
			let t = N("div", `govuk-notification-banner${n.success ? " govuk-notification-banner--success" : ""}`);
			t.setAttribute("role", String(n.role ?? "region"));
			let r = N("div", "govuk-notification-banner__header");
			r.append(N("h2", "govuk-notification-banner__title", n.title)), t.append(r);
			let i = N("div", "govuk-notification-banner__content");
			P(i, n.content), t.append(i), e.append(t);
			return;
		}
		case "pagination": {
			let t = N("nav", "govuk-pagination");
			t.setAttribute("aria-label", "Pagination");
			let r = N("ul", "govuk-pagination__list"), i = (e, t) => {
				if (!e) return;
				let n = e, i = N("li", `govuk-pagination__${t}`);
				i.append(I(`${t === "prev" ? "← " : ""}${n.label}${t === "next" ? " →" : ""}`, n.href, "govuk-link govuk-pagination__link")), r.append(i);
			};
			i(n.previous, "prev");
			for (let e of n.items ?? []) {
				let t = N("li", `govuk-pagination__item${e.current ? " govuk-pagination__item--current" : ""}`), n = I(e.label, e.href, "govuk-link govuk-pagination__link");
				e.current && n.setAttribute("aria-current", "page"), t.append(n), r.append(t);
			}
			i(n.next, "next"), t.append(r), e.append(t);
			return;
		}
		case "phase_banner": {
			let t = N("div", "govuk-phase-banner"), r = N("p", "govuk-phase-banner__content");
			r.append(N("strong", "govuk-tag govuk-phase-banner__content__tag", n.phase));
			let i = N("span", "govuk-phase-banner__text");
			P(i, n.content), r.append(i), t.append(r), e.append(t);
			return;
		}
		case "service_navigation": {
			let t = N("nav", "govuk-service-navigation");
			t.setAttribute("aria-label", "Service information");
			let r = N("div", "govuk-width-container");
			n.service_name && r.append(I(n.service_name, n.service_url, "govuk-service-navigation__service-name"));
			let i = N("ul", "govuk-service-navigation__list");
			for (let e of n.items ?? []) {
				let t = N("li", `govuk-service-navigation__item${e.active ? " govuk-service-navigation__item--active" : ""}`), n = I(e.label, e.href, "govuk-service-navigation__link");
				e.active && n.setAttribute("aria-current", "page"), t.append(n), i.append(t);
			}
			r.append(i), t.append(r), e.append(t);
			return;
		}
		case "skip_link":
			e.append(I(n.label, n.href, "govuk-skip-link"));
			return;
		case "panel": {
			let t = n.variant === "interruption", r = N("div", t ? "st-gds-panel--interruption" : "govuk-panel govuk-panel--confirmation");
			if (r.append(N("h1", t ? "govuk-heading-xl" : "govuk-panel__title", n.title)), n.content) {
				let e = N("div", t ? "govuk-body-l" : "govuk-panel__body");
				P(e, n.content), r.append(e);
			}
			e.append(r);
			return;
		}
		case "kpi_card": {
			let t = N("section", "st-gds-kpi-card");
			if (t.setAttribute("aria-label", String(n.label)), t.append(N("h3", "st-gds-kpi-card__label", n.label)), t.append(N("p", "st-gds-kpi-card__value", n.value)), n.change !== void 0 && n.change !== null) {
				let e = String(n.trend ?? "neutral"), r = N("p", `st-gds-kpi-card__change st-gds-kpi-card__change--${e}`), i = {
					up: {
						arrow: "↑",
						label: "Increased by"
					},
					down: {
						arrow: "↓",
						label: "Decreased by"
					},
					neutral: {
						arrow: "",
						label: "Change:"
					}
				}, a = i[e] ?? i.neutral;
				if (a.arrow) {
					let e = N("span", "st-gds-kpi-card__arrow", a.arrow);
					e.setAttribute("aria-hidden", "true"), r.append(e);
				}
				r.append(N("span", "govuk-visually-hidden", `${a.label} `)), r.append(N("strong", "st-gds-kpi-card__change-value", n.change)), n.comparison && (r.append(document.createTextNode(" ")), r.append(N("span", "st-gds-kpi-card__comparison", n.comparison))), t.append(r);
			}
			n.supporting_text && t.append(N("p", "st-gds-kpi-card__supporting", n.supporting_text)), e.append(t);
			return;
		}
		case "summary_list": {
			let t = n.card_title ? N("div", "govuk-summary-card") : e;
			if (n.card_title) {
				let e = N("div", "govuk-summary-card__title-wrapper");
				e.append(N("h2", "govuk-summary-card__title", n.card_title)), t.append(e);
			}
			let r = N("dl", `govuk-summary-list${n.card_title ? " govuk-summary-card__content" : ""}`);
			for (let e of n.rows ?? []) {
				let t = N("div", "govuk-summary-list__row");
				t.append(N("dt", "govuk-summary-list__key", e.key));
				let n = N("dd", "govuk-summary-list__value");
				if (P(n, e.value), t.append(n), e.actions?.length) {
					let n = N("dd", "govuk-summary-list__actions");
					e.actions.forEach((e, t) => {
						t && n.append(document.createTextNode(" "));
						let r = I(e.label, e.href);
						e.visually_hidden_text && r.append(N("span", "govuk-visually-hidden", ` ${e.visually_hidden_text}`)), n.append(r);
					}), t.append(n);
				}
				r.append(t);
			}
			t.append(r), t !== e && e.append(t);
			return;
		}
		case "table": {
			let t = N("table", `govuk-table${n.responsive ? " st-gds-table-responsive" : ""}`);
			n.caption && t.append(N("caption", "govuk-table__caption govuk-table__caption--m", n.caption));
			let r = n.columns, i = N("thead", "govuk-table__head"), a = N("tr", "govuk-table__row");
			r.forEach((e) => a.append(N("th", `govuk-table__header${e.numeric ? " govuk-table__header--numeric" : ""}`, e.heading))), i.append(a), t.append(i);
			let o = N("tbody", "govuk-table__body");
			for (let e of n.rows) {
				let t = N("tr", "govuk-table__row");
				r.forEach((n, r) => {
					let i = N(r === 0 ? "th" : "td", `${r === 0 ? "govuk-table__header" : "govuk-table__cell"}${n.numeric ? ` ${r === 0 ? "govuk-table__header" : "govuk-table__cell"}--numeric` : ""}`, e[n.key]);
					i.setAttribute("data-label", n.heading), r === 0 && i.setAttribute("scope", "row"), t.append(i);
				}), o.append(t);
			}
			t.append(o), e.append(t);
			return;
		}
		case "tag":
			e.append(N("strong", `govuk-tag govuk-tag--${String(n.colour)}`, n.text));
			return;
		case "task_list": {
			n.title && e.append(N("h2", "govuk-heading-m", n.title));
			let t = N("ol", "st-gds-task-list"), r = {
				not_started: "Not started",
				in_progress: "In progress",
				completed: "Completed",
				cannot_start: "Cannot start yet",
				optional: "Optional"
			};
			for (let e of n.items ?? []) {
				let n = N("li", "st-gds-task-list__item"), i = N("div", "st-gds-task-list__row");
				i.append(e.href ? I(e.title, e.href) : N("span", void 0, e.title));
				let a = e.status === "completed" ? "green" : e.status === "in_progress" ? "blue" : "grey";
				i.append(N("strong", `govuk-tag govuk-tag--${a}`, r[e.status] ?? e.status)), n.append(i), e.hint && n.append(N("p", "st-gds-task-list__hint", e.hint)), t.append(n);
			}
			e.append(t);
			return;
		}
		case "warning_text": {
			let t = N("div", "govuk-warning-text");
			t.append(N("span", "govuk-warning-text__icon", "!"));
			let r = N("strong", "govuk-warning-text__text");
			r.append(N("span", "govuk-visually-hidden", `${String(n.icon_fallback)}:`), document.createTextNode(` ${String(n.text)}`)), t.append(r), e.append(t);
			return;
		}
		case "cookie_banner": {
			if (n.hidden) return;
			let t = N("div", "govuk-cookie-banner");
			t.setAttribute("role", "region");
			let i = N("div", "govuk-cookie-banner__message govuk-width-container");
			i.append(N("h2", "govuk-cookie-banner__heading govuk-heading-m", n.title));
			let a = N("div", "govuk-cookie-banner__content");
			P(a, n.content), i.append(a);
			let o = N("div", "govuk-button-group");
			for (let e of n.actions ?? []) if (e.kind === "link") o.append(I(e.label, e.href, "govuk-link"));
			else {
				let t = N("button", "govuk-button", e.label);
				t.type = "button", t.addEventListener("click", () => r.setTriggerValue("action", e.value)), o.append(t);
			}
			i.append(o), t.append(i), e.append(t);
			return;
		}
		case "exit_this_page": {
			let t = I(n.label, n.href, "govuk-exit-this-page__button govuk-button govuk-button--warning"), i = (e) => {
				e.key === "Escape" && (r.setTriggerValue("exited", !0), window.location.assign(F(n.href)));
			};
			return t.addEventListener("click", () => r.setTriggerValue("exited", !0)), document.addEventListener("keydown", i), e.append(t), () => document.removeEventListener("keydown", i);
		}
	}
}
var at = (e) => {
	let t = e.data, n = e.parentElement.querySelector(".st-gds-root");
	if (!n) return;
	let r = document.activeElement, i = r && n.contains(r) ? r.id : null, a = i && r && qe(r) ? [r.selectionStart, r.selectionEnd] : null;
	n.replaceChildren();
	let o = t.props ?? {}, s;
	switch (t.component) {
		case "button":
			tt(n, o, e);
			break;
		case "text_input":
			Ye(n, o, e);
			break;
		case "password_input":
			Ye(n, o, e, !0);
			break;
		case "textarea":
			Xe(n, o, e);
			break;
		case "character_count":
			Xe(n, o, e, !0);
			break;
		case "select":
			Qe(n, o, e);
			break;
		case "radios":
			B(n, o, e, !1);
			break;
		case "checkboxes":
			B(n, o, e, !0);
			break;
		case "date_input":
			$e(n, o, e);
			break;
		case "file_upload":
			et(n, o, e);
			break;
		case "accordion":
			nt(n, o, e);
			break;
		case "tabs":
			rt(n, o, e);
			break;
		case "chatbot":
			Ze(n, o, e);
			break;
		default: s = it(n, t.component, o, e);
	}
	return Je(n, i, a), s;
};
//#endregion
export { P as appendContent, at as default, Je as restoreFocus, F as safeHref };
