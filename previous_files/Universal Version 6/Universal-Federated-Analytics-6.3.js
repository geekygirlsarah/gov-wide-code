var tObjectCheck, oCONFIG = {
        GWT_UAID: ["UA-33523145-1"],
        GWT_GA4ID: "G-9TNNMGP8WJ",
        FORCE_SSL: !0,
        ANONYMIZE_IP: !0,
        AGENCY: "",
        SUB_AGENCY: "",
        VERSION: "20210628 v6.3 - Dual Tracked Analytics",
        SITE_TOPIC: "",
        SITE_PLATFORM: "",
        SCRIPT_SOURCE: "",
        URL_PROTOCOL: location.protocol,
        USE_MAIN_CUSTOM_DIMENSIONS: !0,
        MAIN_AGENCY_CUSTOM_DIMENSION_SLOT: "dimension1",
        MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT: "dimension2",
        MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT: "dimension3",
        MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT: "dimension4",
        MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT: "dimension5",
        MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT: "dimension6",
        MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT: "dimension7",
        MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT: "dimension8",
        USE_PARALLEL_CUSTOM_DIMENSIONS: !1,
        PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT: "dimension1",
        PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT: "dimension2",
        PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT: "dimension3",
        PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT: "dimension4",
        PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT: "dimension5",
        PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT: "dimension6",
        PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT: "dimension7",
        PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT: "dimension8",
        COOKIE_DOMAIN: location.hostname.replace("www.", "").toLowerCase(),
        COOKIE_TIMEOUT: 63072e3,
        SEARCH_PARAMS: "q|querytext|nasaInclude|k|qt",
        YOUTUBE: !1,
        AUTOTRACKER: !0,
        EXTS: "doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar",
        SUBDOMAIN_BASED: !0,
        //DOUBLECLICK_LINK: !1,
        ENHANCED_LINK: !1,
        OPTOUT_PAGE: !1,
        TRANSPORT: "xhr",
        PUA_NAME: "GSA_ENOR"
    },
    script = document.createElement("script");

function gtag() {
    dataLayer.push(arguments)
}

function _onEveryPage() {
    _updateConfig(), _defineCookieDomain(), _defineAgencyCDsValues(), setSecureCookie()
}

function _defineCookieDomain() {
    /(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/.test(oCONFIG.SUBDOMAIN_BASED.toString()) ? (oCONFIG.COOKIE_DOMAIN = oCONFIG.SUBDOMAIN_BASED.toLowerCase().replace("www.", ""), oCONFIG.SUBDOMAIN_BASED = !0) : !1 === oCONFIG.SUBDOMAIN_BASED ? (oCONFIG.COOKIE_DOMAIN = document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1], oCONFIG.SUBDOMAIN_BASED = !0) : (oCONFIG.COOKIE_DOMAIN = location.hostname.toLowerCase().replace("www.", ""), oCONFIG.SUBDOMAIN_BASED = !1)
}

function _defineAgencyCDsValues() {
    oCONFIG.AGENCY = oCONFIG.AGENCY || "unspecified:" + oCONFIG.COOKIE_DOMAIN, oCONFIG.SUB_AGENCY = oCONFIG.SUB_AGENCY || "" + oCONFIG.COOKIE_DOMAIN, oCONFIG.SUB_AGENCY = oCONFIG.AGENCY + " - " + oCONFIG.SUB_AGENCY, oCONFIG.SITE_TOPIC = oCONFIG.SITE_TOPIC || "unspecified:" + oCONFIG.COOKIE_DOMAIN, oCONFIG.SITE_PLATFORM = oCONFIG.SITE_PLATFORM || "unspecified:" + oCONFIG.COOKIE_DOMAIN
}

function _cleanBooleanParam(e) {
    switch (e.toString().toLowerCase()) {
        case "true":
        case "on":
        case "yes":
        case "1":
            return !0;
        case "false":
        case "off":
        case "no":
        case "0":
            return !1;
        default:
            return e
    }
}

function _isValidUANum(e) {
    return null != (e = (e = e.toLowerCase()).match(/^ua\-([0-9]+)\-[0-9]+$/)) && 0 < e.length
}

function _cleanDimensionValue(e) {
    try {
        if (pattern = /^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/, pattern.test(e)) return e;
        if (null !== e.match(/\d+$/g)) {
            var o = "dimension" + e.match(/\d+$/g)[0];
            if (pattern.test(o)) return o
        }
        return ""
    } catch (e) {}
}

function setSecureCookie() {
    oCONFIG.SECURE_COOKIE = (oCONFIG.SECURE_COOKIE == "false") ? "null" : "secure;samesite=none";
}

function _updateConfig() {
    if ("undefined" != typeof _fedParmsGTM) {
        var e = _fedParmsGTM.toLowerCase().split("&");
        oCONFIG.SCRIPT_SOURCE = "GTM"
    } else {
        var o = document.getElementById("_fed_an_ua_tag");
        _fullParams = o.src.match(/^([^\?]*)(.*)$/i)[2].replace("?", ""), e = _fullParams.split("&"), oCONFIG.SCRIPT_SOURCE = o.src.split("?")[0]
    }
    for (o = 0; o < e.length; o++) switch (_keyValuePair = decodeURIComponent(e[o].toLowerCase()), _key = _keyValuePair.split("=")[0], _value = _keyValuePair.split("=")[1], _key) {
    case "pua":
        for (var t = _value.split(","), a = 0; a < t.length; a++) _isValidUANum(t[a]) && oCONFIG.GWT_UAID.push(t[a].toUpperCase());
        break;
    case "agency":
        oCONFIG.AGENCY = _value.toUpperCase();
        break;
    case "subagency":
        oCONFIG.SUB_AGENCY = _value.toUpperCase();
        break;
    case "sitetopic":
        oCONFIG.SITE_TOPIC = _value;
        break;
    case "siteplatform":
        oCONFIG.SITE_PLATFORM = _value;
        break;
    case "parallelcd":
        _value = _cleanBooleanParam(_value), !0 !== _value && !1 !== _value || (oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS = _value);
        break;
    case "palagencydim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "palsubagencydim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "palversiondim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "paltopicdim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "palplatformdim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "palscriptsrcdim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "palurlprotocoldim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "palinteractiontypedim":
        _value = _cleanDimensionValue(_value), "" !== _value && (oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT = _value);
        break;
    case "cto":
        oCONFIG.COOKIE_TIMEOUT = 2628e3 * parseInt(_value);
        break;
    case "sp":
        oCONFIG.SEARCH_PARAMS += "|" + _value.replace(/,/g, "|");
        break;
    case "exts":
        oCONFIG.EXTS += "|" + _value.replace(/,/g, "|");
        break;
    case "yt":
        _value = _cleanBooleanParam(_value), !0 !== _value && !1 !== _value || (oCONFIG.YOUTUBE = _value);
        break;
    case "autotracker":
        _value = _cleanBooleanParam(_value), !0 !== _value && !1 !== _value || (oCONFIG.AUTOTRACKER = _value);
        break;
    case "sdor":
        oCONFIG.SUBDOMAIN_BASED = _cleanBooleanParam(_value);
        break;
    //case "dclink":
        //_value = _cleanBooleanParam(_value), !0 !== _value && !1 !== _value || (oCONFIG.DOUBLECLICK_LINK = _value);
        //break;
    case "enhlink":
        _value = _cleanBooleanParam(_value), !0 !== _value && !1 !== _value || (oCONFIG.ENHANCED_LINK = _value);
        break;
    case "optout":
        _value = _cleanBooleanParam(_value), !0 !== _value && !1 !== _value || (oCONFIG.OPTOUT_PAGE = _value);
        break;
    case "transport":
        "xhr" !== _value && "beacon" !== _value && "image" !== _value || (oCONFIG.TRANSPORT = _value);
        break;
    case "scookie":
        oCONFIG.SECURE_COOKIE = _value.toUpperCase();
    }
}

function _sendCustomDimensions(e, o) {
    if (0 < e.length && "" !== o && void 0 !== o) {
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var t = 0; t < oCONFIG.GWT_UAID.length; t++)
            if ("dimension0" !== e[t]) try {
                window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + t + ".set", e[t], o)
            } catch (e) {}
    }
}

function _sendCustomMetrics(e, o) {
    if (0 < e.length && "" !== o && void 0 !== o) {
        tObjectCheck != window.GoogleAnalyticsObject && createTracker(!1);
        for (var t = 0; t < oCONFIG.GWT_UAID.length; t++)
            if ("metric0" !== e[t]) try {
                window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + t + ".set", e[t], o)
            } catch (e) {}
    }
}

function _sendEvent(e, o, t, a, n, i) {
    if ("" !== e && void 0 !== e && "" !== o && void 0 !== o) {
        var _ = oCONFIG.MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var O = 0; O < oCONFIG.GWT_UAID.length; O++) try {
            0 < O && (!0 === oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS ? _ = oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT : i = void 0), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + O + ".set", _, i), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + O + ".send", "event", e, o, void 0 !== t ? t : "", "" === a && isNaN(a) && void 0 === a ? 0 : parseInt(a), {
                nonInteraction: n
            }), gtag("event", e.toLowerCase(), {
                event_action: o.toLowerCase(),
                event_label: t.toLowerCase(),
                agency: oCONFIG.AGENCY.toLowerCase(),
                subagency: oCONFIG.SUB_AGENCY.toLowerCase(),
                version: oCONFIG.VERSION,
                site_topic: oCONFIG.SITE_TOPIC.toLowerCase(),
                site_platform: oCONFIG.SITE_PLATFORM.toLowerCase(),
                script_source: oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                url_protocol: oCONFIG.URL_PROTOCOL.toLowerCase(),
                interaction_type: i
            })
        } catch (e) {}
    }
}

function _sendCustomEvent(e, o, t, a, n, i) {
    if ("" !== e && void 0 !== e && "" !== o && void 0 !== o) {
        var _ = oCONFIG.MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var O = 0; O < oCONFIG.GWT_UAID.length; O++) try {
            0 < O && (!0 === oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS ? _ = oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT : i = void 0), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + O + ".set", _, i), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + O + ".send", "event", e, o, void 0 !== t ? t : "", "" === a && isNaN(a) && void 0 === a ? 0 : parseInt(a), {
                nonInteraction: n
            }), gtag("event", "dap_event", {
                event_category: e.toLowerCase(),
                event_action: o.toLowerCase(),
                event_label: t.toLowerCase(),
                agency: oCONFIG.AGENCY.toLowerCase(),
                subagency: oCONFIG.SUB_AGENCY.toLowerCase(),
                version: oCONFIG.VERSION,
                site_topic: oCONFIG.SITE_TOPIC.toLowerCase(),
                site_platform: oCONFIG.SITE_PLATFORM.toLowerCase(),
                script_source: oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                url_protocol: oCONFIG.URL_PROTOCOL.toLowerCase(),
                interaction_type: i
            })
        } catch (e) {}
    }
}

function _sendPageview(e, o) {
    if ("" !== e && void 0 !== e) {
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
        for (var t = 0; t < oCONFIG.GWT_UAID.length; t++) try {
            window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + t + ".send", "pageview", {
                page: e,
                title: "" !== o || void 0 !== o ? o : document.title
            }),
            gtag('set', 'allow_google_signals', false);
            gtag("config", oCONFIG.GWT_GA4ID, {
                agency: oCONFIG.AGENCY.toLowerCase(),
                subagency: oCONFIG.SUB_AGENCY.toLowerCase(),
                version: oCONFIG.VERSION,
                site_topic: oCONFIG.SITE_TOPIC.toLowerCase(),
                site_platform: oCONFIG.SITE_PLATFORM.toLowerCase(),
                script_source: oCONFIG.SCRIPT_SOURCE.toLowerCase(),
                url_protocol: oCONFIG.URL_PROTOCOL.toLowerCase(),
                cookie_flags: oCONFIG.SECURE_COOKIE,
            });
        } catch (e) {}
    }
}

function gas(e, o, t, a, n, i, _) {
    if (void 0 !== e && "" !== e && void 0 !== o && "" !== o && void 0 !== t && "" !== t)
        if ("pageview" === o.toLowerCase()) try {
            _sendPageview(t, void 0 === a || "" === a ? document.title : a)
        } catch (e) {} else if ("event" === o.toLowerCase() && void 0 !== a && "" !== a) try {
            var O = !1;
            void 0 !== _ && "boolean" == typeof _cleanBooleanParam(_) && (O = _cleanBooleanParam(_)), _sendCustomEvent(t, a, void 0 === n ? "" : n, void 0 === i || "" === i || isNaN(i) ? 0 : parseInt(i), O)
        } catch (e) {} else if (-1 != o.toLowerCase().indexOf("dimension")) try {
            O = o.toLowerCase().split(",");
            var r = [];
            dimsPattern = /^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
            for (var s = 0; s < O.length; s++)
                if (dimsPattern.test(O[s])) r.push(O[s]);
                else {
                    var I = "dimension" + O[s].match(/\d+$/g)[0];
                    (dimsPattern.test(I) || "dimension0" === I) && r.push(I)
                } 0 < r.length && _sendCustomDimensions(r, void 0 === t ? "" : t)
        } catch (e) {} else if (-1 != o.toLowerCase().indexOf("metric")) try {
            for (r = o.toLowerCase().split(","), O = [], mtrcsPattern = /^metric([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/, I = 0; I < r.length; I++) mtrcsPattern.test(r[I]) ? O.push(r[I]) : (s = "metric" + r[I].match(/\d+$/g)[0], (mtrcsPattern.test(s) || "metric0" === s) && O.push(s));
            0 < O.length && _sendCustomMetrics(O, void 0 === t || "" === t || isNaN(t) ? 1 : parseFloat(t))
        } catch (e) {}
}

function _URIHandler(e) {
    var o = new RegExp("([?&])(" + oCONFIG.SEARCH_PARAMS + ")(=[^&]*)", "i");
    return o.test(e) && (e = e.replace(o, "$1query$3")), e
}

function _isExcludedReferrer() {
    if ("" !== document.referrer) {
        var e = document.referrer.replace(/https?:\/\//, "").split("/")[0].replace("www.", "");
        return oCONFIG.SUBDOMAIN_BASED ? -1 != e.indexOf(oCONFIG.COOKIE_DOMAIN) : e === oCONFIG.COOKIE_DOMAIN
    }
}

function createTracker(e) {
    for (var o = 0; o < oCONFIG.GWT_UAID.length; o++) {
        var t = _URIHandler(document.location.pathname + document.location.search + document.location.hash);
        oCONFIG.OPTOUT_PAGE && (window["ga-disable-" + oCONFIG.GWT_UAID[o]] = !0), window[window.GoogleAnalyticsObject]("create", oCONFIG.GWT_UAID[o], oCONFIG.COOKIE_DOMAIN, {
            name: oCONFIG.PUA_NAME + o,
            allowLinker: !0,
            cookieExpires: parseInt(oCONFIG.COOKIE_TIMEOUT)
        }), oCONFIG.TRANSPORT && window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", "transport", oCONFIG.TRANSPORT), oCONFIG.ANONYMIZE_IP && window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", "anonymizeIp", oCONFIG.ANONYMIZE_IP), /*oCONFIG.DOUBLECLICK_LINK && window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".require", "displayfeatures"),*/ oCONFIG.ENHANCED_LINK && window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".require", "linkid", "linkid.js"), oCONFIG.FORCE_SSL && window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", "forceSSL", !0), _isExcludedReferrer() && window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", "referrer", ""), oCONFIG.USE_MAIN_CUSTOM_DIMENSIONS && 0 === o && (window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.SUB_AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT, oCONFIG.VERSION), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_TOPIC), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_PLATFORM), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT, oCONFIG.SCRIPT_SOURCE), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT, oCONFIG.URL_PROTOCOL)), oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS && 0 < o && (window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT, oCONFIG.SUB_AGENCY), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT, oCONFIG.VERSION), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_TOPIC), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT, oCONFIG.SITE_PLATFORM), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT, oCONFIG.SCRIPT_SOURCE), window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".set", oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT, oCONFIG.URL_PROTOCOL)), -1 !== document.title.search(/404|not found/i) && (t = ("/vpv404/" + t).replace(/\/\//g, "/") + "/" + document.referrer), e && (window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME + o + ".send", "pageview", t), gtag("config", oCONFIG.GWT_GA4ID, {
            agency: oCONFIG.AGENCY.toLowerCase(),
            subagency: oCONFIG.SUB_AGENCY.toLowerCase(),
            version: oCONFIG.VERSION,
            site_topic: oCONFIG.SITE_TOPIC.toLowerCase(),
            site_platform: oCONFIG.SITE_PLATFORM.toLowerCase(),
            script_source: oCONFIG.SCRIPT_SOURCE.toLowerCase(),
            url_protocol: oCONFIG.URL_PROTOCOL.toLowerCase(),
            cookieFlags: oCONFIG.SECURE_COOKIE
        }));
    ga('set', 'allowAdFeatures', false);
    }
}

function _initAutoTracker(e) {
    var o = oCONFIG.COOKIE_DOMAIN,
        t = oCONFIG.EXTS.split("|");
    for (e = e || document.getElementsByTagName("a"), i = 0; i < e.length; i++) {
        var a = 0,
            n = "",
            _ = /^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i,
            O = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i,
            r = /^(tel:)(.*)$/i;
        if (_.test(e[i].href) || O.test(e[i].href) || r.test(e[i].href)) {
            try {
                O.test(e[i].href) ? n = e[i].hostname.toLowerCase().replace("www.", "") : _.test(e[i].href) ? n = e[i].href.split("@")[1].toLowerCase() : r.test(e[i].href) && (n = (n = e[i].href).toLowerCase())
            } catch (e) {
                continue
            }
            if (oCONFIG.SUBDOMAIN_BASED ? -1 !== n.indexOf(o) : n === o) {
                if (-1 !== e[i].href.toLowerCase().indexOf("mailto:") && -1 === e[i].href.toLowerCase().indexOf("tel:")) _ = e[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/), _tagClicks(e[i], "Mailto", _[0], "", 0);
                else if (-1 === e[i].href.toLowerCase().indexOf("mailto:") && -1 !== e[i].href.toLowerCase().indexOf("tel:")) _tagClicks(e[i], "Telephone Clicks", e[i].href.split("tel:")[1], "", 0);
                else if (-1 === e[i].href.toLowerCase().indexOf("mailto:") && -1 === e[i].href.toLowerCase().indexOf("tel:"))
                    for (a = 0; a < t.length; a++)
                        if ((_ = (_ = e[i].href.split("."))[_.length - 1].split(/[#?&?]/))[0].toLowerCase() === t[a]) {
                            _tagClicks(e[i], "Download", _[0].toLowerCase(), e[i].href.split(/[#?&?]/)[0], 0);
                            break
                        }
            } else
                for (n = 0; n < t.length; n++) {
                    if ((_ = (_ = e[i].href.split("."))[_.length - 1].split(/[#?]/))[0].toLowerCase() === t[n]) {
                        e[i].href.split(t[n]), _tagClicks(e[i], "Outbound Downloads", _[0].toLowerCase(), e[i].href.split(/[#?&?]/)[0], 0);
                        break
                    }
                    _[0].toLowerCase() !== t[n] && (++a === t.length && (-1 === e[i].href.toLowerCase().indexOf("mailto:") && -1 === e[i].href.toLowerCase().indexOf("tel:") ? _tagClicks(e[i], "Outbound", e[i].hostname, e[i].pathname, 0) : t.length && -1 !== e[i].href.toLowerCase().indexOf("mailto:") && -1 === e[i].href.toLowerCase().indexOf("tel:") ? (_ = e[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i), _tagClicks(e[i], "Outbound MailTo", _[0], "", 0)) : t.length && -1 === e[i].href.toLowerCase().indexOf("mailto:") && -1 !== e[i].href.toLowerCase().indexOf("tel:") && _tagClicks(e[i], "Telephone Clicks", e[i].href.split("tel:")[1], "", 0)))
                }
        }
    }
}
if (script.src = "https://www.googletagmanager.com/gtag/js?id=" + oCONFIG.GWT_GA4ID, document.getElementsByTagName("head")[0].appendChild(script), window.dataLayer = window.dataLayer || [], gtag("js", new Date), _onEveryPage(), void 0 === window.GoogleAnalyticsObject && function(e, o, t, a, n, i, _) {
        e.GoogleAnalyticsObject = n, e.ga = e.ga || function() {
            (e.ga.q = e.ga.q || []).push(arguments)
        }, e.ga.l = 1 * new Date, i = o.createElement(t), _ = o.getElementsByTagName(t)[0], i.async = 1, i.src = "https://www.google-analytics.com/analytics.js", _.parentNode.insertBefore(i, _)
    }(window, document, "script", 0, "ga"), tObjectCheck = window.GoogleAnalyticsObject, createTracker(!0), oCONFIG.YOUTUBE) {
    var videoArray_fed = [],
        playerArray_fed = [],
        _f33 = !1,
        _f66 = !1,
        _f90 = !1,
        tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var youtube_parser_fed = function(e) {
            if ((e = e.match(/^(https?:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?=)?([^#&\?\/]{11}).*$/)) && 11 === e[9].length) return e[9]
        },
        IsYouTube_fed = function(e) {
            return !!/^(https?:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?=)?([^#&\?\/]{11}).*$/.test(e.toString())
        },
        YTUrlHandler_fed = function(e) {
            return e = e.replace(/origin=(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})&?/gi, "origin=" + document.location.protocol + "//" + document.location.host), stAdd = "", adFlag = !1, -1 === e.indexOf("https") && (e = e.replace("http", "https")), -1 === e.indexOf("?") && (stAdd = "?flag=1"), -1 === e.indexOf("enablejsapi") && (stAdd += "&enablejsapi=1", adFlag = !0), -1 === e.indexOf("html5") && (stAdd += "&html5=1", adFlag = !0), -1 === e.indexOf("origin") && (stAdd += "&origin=" + document.location.protocol + "//" + document.location.host, adFlag = !0), !0 === adFlag ? e + stAdd : e
        },
        _initYouTubeTracker = function() {
            for (var e = document.getElementsByTagName("iframe"), o = 0, t = 0; t < e.length; t++) {
                _thisVideoObj = e[t];
                var a = _thisVideoObj.src;
                IsYouTube_fed(a) && (_thisVideoObj.src = YTUrlHandler_fed(a), a = youtube_parser_fed(a), _thisVideoObj.setAttribute("id", a), videoArray_fed[o] = a, o++)
            }
        },
        onYouTubePlayerAPIReady = function() {
            for (var e = 0; e < videoArray_fed.length; e++) playerArray_fed[e] = new YT.Player(videoArray_fed[e], {
                events: {
                    onReady: onFedPlayerReady,
                    onStateChange: onFedPlayerStateChange
                }
            })
        },
        onFedPlayerReady = function(e) {},
        onFedPlayerStateChange = function(e) {
            var o = e.target.getIframe().getAttribute("src");
            youtube_parser_fed(o), _thisDuration = (parseInt(e.target.getCurrentTime()) / parseInt(e.target.getDuration()) * 100).toFixed(), "undefined" != typeof onPlayerStateChange && onPlayerStateChange(e), parseInt(e.data) === parseInt(YT.PlayerState.PLAYING) ? (0 === _thisDuration && (_f90 = _f66 = _f33 = !1), _sendEvent("YouTube Video", "play", o, 0)) : e.data === YT.PlayerState.ENDED ? _sendEvent("YouTube Video", "finish", o, 0) : e.data === YT.PlayerState.PAUSED && (_sendEvent("YouTube Video", "pause", o, 0), 100 > _thisDuration && (0 < (e = _thisDuration) && 33 >= e && !1 === _f33 ? (_sendEvent("YouTube Video", "33%", o, 0), _f33 = !0) : 33 < e && 66 >= e && !1 === _f66 ? (_sendEvent("YouTube Video", "66%", o, 0), _f66 = !0) : 66 < e && 90 >= e && !1 === _f90 && (_sendEvent("YouTube Video", "90%", o, 0), _f90 = !0)))
        }
}

function _initIdAssigner() {
    for (var e = document.getElementsByTagName("a"), o = 0; o < e.length; o++) {
        var t = e[o].getAttribute("id");
        null !== t && "" !== t && void 0 !== t || e[o].setAttribute("id", "anch_" + o)
    }
}

function _tagClicks(e, o, t, a, n) {
    e.addEventListener ? (e.addEventListener("mousedown", function() {
        _sendEvent(o, t, a, n, !1, "Mouse Click")
    }), e.addEventListener("keydown", function(e) {
        13 === e.keyCode && _sendEvent(o, t, a, n, !1, "Enter Key Keystroke")
    })) : e.attachEvent && (e.attachEvent("onmousedown", function() {
        _sendEvent(o, t, a, n, !1, "Mouse Click")
    }), e.attachEvent("onkeydown", function(e) {
        13 === e.keyCode && _sendEvent(o, t, a, n, !1, "Enter Key Keystroke")
    }))
}

function _setUpTrackers() {
    tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1), oCONFIG.ENHANCED_LINK && _initIdAssigner(), oCONFIG.AUTOTRACKER && _initAutoTracker(), oCONFIG.YOUTUBE && _initYouTubeTracker()
}

function _setUpTrackersIfReady() {
    return ("interactive" === document.readyState || "complete" === document.readyState) && (_setUpTrackers(), !0)
}
_setUpTrackersIfReady() || (document.addEventListener ? document.addEventListener("DOMContentLoaded", _setUpTrackers) : document.attachEvent && document.attachEvent("onreadystatechange", _setUpTrackersIfReady));