// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return (v > (0));
} else {
return and__30060__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__38568_SHARP_,p2__38563_SHARP_){
var vec__38570 = clojure.string.split.call(null,p2__38563_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__38570,(0),null);
var v = cljs.core.nth.call(null,vec__38570,(1),null);
return cljs.core.assoc.call(null,p1__38568_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__38598_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__38598_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__38601){
var vec__38602 = p__38601;
var k = cljs.core.nth.call(null,vec__38602,(0),null);
var v = cljs.core.nth.call(null,vec__38602,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__38607_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38607_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__30060__auto__){
var and__30060__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__30060__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__38627_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38627_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38637 = arguments.length;
var i__31350__auto___38638 = (0);
while(true){
if((i__31350__auto___38638 < len__31349__auto___38637)){
args__31356__auto__.push((arguments[i__31350__auto___38638]));

var G__38639 = (i__31350__auto___38638 + (1));
i__31350__auto___38638 = G__38639;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38633){
var vec__38634 = p__38633;
var default_headers = cljs.core.nth.call(null,vec__38634,(0),null);
return ((function (vec__38634,default_headers){
return (function (request){
var temp__5276__auto__ = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var default_headers__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__38634,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq38631){
var G__38632 = cljs.core.first.call(null,seq38631);
var seq38631__$1 = cljs.core.next.call(null,seq38631);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__38632,seq38631__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38650 = arguments.length;
var i__31350__auto___38652 = (0);
while(true){
if((i__31350__auto___38652 < len__31349__auto___38650)){
args__31356__auto__.push((arguments[i__31350__auto___38652]));

var G__38663 = (i__31350__auto___38652 + (1));
i__31350__auto___38652 = G__38663;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38645){
var vec__38646 = p__38645;
var accept = cljs.core.nth.call(null,vec__38646,(0),null);
return ((function (vec__38646,accept){
return (function (request){
var temp__5276__auto__ = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var accept__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__38646,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq38643){
var G__38644 = cljs.core.first.call(null,seq38643);
var seq38643__$1 = cljs.core.next.call(null,seq38643);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__38644,seq38643__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38721 = arguments.length;
var i__31350__auto___38723 = (0);
while(true){
if((i__31350__auto___38723 < len__31349__auto___38721)){
args__31356__auto__.push((arguments[i__31350__auto___38723]));

var G__38726 = (i__31350__auto___38723 + (1));
i__31350__auto___38723 = G__38726;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38710){
var vec__38713 = p__38710;
var content_type = cljs.core.nth.call(null,vec__38713,(0),null);
return ((function (vec__38713,content_type){
return (function (request){
var temp__5276__auto__ = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var content_type__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__38713,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq38703){
var G__38704 = cljs.core.first.call(null,seq38703);
var seq38703__$1 = cljs.core.next.call(null,seq38703);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__38704,seq38703__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var map__38746 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__38746__$1 = ((((!((map__38746 == null)))?((((map__38746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38746):map__38746);
var encoding = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__38755 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__38755__$1 = ((((!((map__38755 == null)))?((((map__38755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38755):map__38755);
var decoding = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__38755,map__38755__$1,decoding,decoding_opts){
return (function (p1__38752_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__38752_SHARP_,decoding,decoding_opts);
});})(map__38755,map__38755__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__38755,map__38755__$1,decoding,decoding_opts,transit_decode){
return (function (p1__38753_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38753_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__38755,map__38755__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__38769_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38769_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__38776){
var map__38777 = p__38776;
var map__38777__$1 = ((((!((map__38777 == null)))?((((map__38777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38777):map__38777);
var req = map__38777__$1;
var query_params = cljs.core.get.call(null,map__38777__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__38782){
var map__38783 = p__38782;
var map__38783__$1 = ((((!((map__38783 == null)))?((((map__38783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38783):map__38783);
var request = map__38783__$1;
var form_params = cljs.core.get.call(null,map__38783__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__38783__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__38783__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__30060__auto__ = form_params;
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__30060__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__38796_38807 = cljs.core.seq.call(null,params);
var chunk__38797_38808 = null;
var count__38798_38809 = (0);
var i__38799_38810 = (0);
while(true){
if((i__38799_38810 < count__38798_38809)){
var vec__38800_38812 = cljs.core._nth.call(null,chunk__38797_38808,i__38799_38810);
var k_38813 = cljs.core.nth.call(null,vec__38800_38812,(0),null);
var v_38814 = cljs.core.nth.call(null,vec__38800_38812,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_38814)){
form_data.append(cljs.core.name.call(null,k_38813),cljs.core.first.call(null,v_38814),cljs.core.second.call(null,v_38814));
} else {
form_data.append(cljs.core.name.call(null,k_38813),v_38814);
}

var G__38826 = seq__38796_38807;
var G__38827 = chunk__38797_38808;
var G__38828 = count__38798_38809;
var G__38829 = (i__38799_38810 + (1));
seq__38796_38807 = G__38826;
chunk__38797_38808 = G__38827;
count__38798_38809 = G__38828;
i__38799_38810 = G__38829;
continue;
} else {
var temp__5278__auto___38840 = cljs.core.seq.call(null,seq__38796_38807);
if(temp__5278__auto___38840){
var seq__38796_38841__$1 = temp__5278__auto___38840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38796_38841__$1)){
var c__31003__auto___38842 = cljs.core.chunk_first.call(null,seq__38796_38841__$1);
var G__38843 = cljs.core.chunk_rest.call(null,seq__38796_38841__$1);
var G__38844 = c__31003__auto___38842;
var G__38845 = cljs.core.count.call(null,c__31003__auto___38842);
var G__38846 = (0);
seq__38796_38807 = G__38843;
chunk__38797_38808 = G__38844;
count__38798_38809 = G__38845;
i__38799_38810 = G__38846;
continue;
} else {
var vec__38804_38848 = cljs.core.first.call(null,seq__38796_38841__$1);
var k_38849 = cljs.core.nth.call(null,vec__38804_38848,(0),null);
var v_38850 = cljs.core.nth.call(null,vec__38804_38848,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_38850)){
form_data.append(cljs.core.name.call(null,k_38849),cljs.core.first.call(null,v_38850),cljs.core.second.call(null,v_38850));
} else {
form_data.append(cljs.core.name.call(null,k_38849),v_38850);
}

var G__38852 = cljs.core.next.call(null,seq__38796_38841__$1);
var G__38853 = null;
var G__38854 = (0);
var G__38855 = (0);
seq__38796_38807 = G__38852;
chunk__38797_38808 = G__38853;
count__38798_38809 = G__38854;
i__38799_38810 = G__38855;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__38862){
var map__38863 = p__38862;
var map__38863__$1 = ((((!((map__38863 == null)))?((((map__38863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38863):map__38863);
var request = map__38863__$1;
var multipart_params = cljs.core.get.call(null,map__38863__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__38863__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__30060__auto__ = multipart_params;
if(cljs.core.truth_(and__30060__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__30060__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5276__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var m = temp__5276__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__38870_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__38870_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__38872){
var map__38873 = p__38872;
var map__38873__$1 = ((((!((map__38873 == null)))?((((map__38873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38873):map__38873);
var req = map__38873__$1;
var query_params = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5276__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5276__auto__,map__38873,map__38873__$1,req,query_params){
return (function (p1__38871_SHARP_){
return cljs.core.merge.call(null,p1__38871_SHARP_,query_params);
});})(spec,temp__5276__auto__,map__38873,map__38873__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38936 = arguments.length;
var i__31350__auto___38939 = (0);
while(true){
if((i__31350__auto___38939 < len__31349__auto___38936)){
args__31356__auto__.push((arguments[i__31350__auto___38939]));

var G__38943 = (i__31350__auto___38939 + (1));
i__31350__auto___38939 = G__38943;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38898){
var vec__38899 = p__38898;
var credentials = cljs.core.nth.call(null,vec__38899,(0),null);
return ((function (vec__38899,credentials){
return (function (req){
var credentials__$1 = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__38899,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq38886){
var G__38887 = cljs.core.first.call(null,seq38886);
var seq38886__$1 = cljs.core.next.call(null,seq38886);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__38887,seq38886__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5276__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var oauth_token = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var custom_channel = temp__5276__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38970 = arguments.length;
var i__31350__auto___38971 = (0);
while(true){
if((i__31350__auto___38971 < len__31349__auto___38970)){
args__31356__auto__.push((arguments[i__31350__auto___38971]));

var G__38974 = (i__31350__auto___38971 + (1));
i__31350__auto___38971 = G__38974;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38966){
var vec__38967 = p__38966;
var req = cljs.core.nth.call(null,vec__38967,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq38962){
var G__38963 = cljs.core.first.call(null,seq38962);
var seq38962__$1 = cljs.core.next.call(null,seq38962);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__38963,seq38962__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38987 = arguments.length;
var i__31350__auto___38989 = (0);
while(true){
if((i__31350__auto___38989 < len__31349__auto___38987)){
args__31356__auto__.push((arguments[i__31350__auto___38989]));

var G__38990 = (i__31350__auto___38989 + (1));
i__31350__auto___38989 = G__38990;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38982){
var vec__38983 = p__38982;
var req = cljs.core.nth.call(null,vec__38983,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq38980){
var G__38981 = cljs.core.first.call(null,seq38980);
var seq38980__$1 = cljs.core.next.call(null,seq38980);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__38981,seq38980__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39004 = arguments.length;
var i__31350__auto___39005 = (0);
while(true){
if((i__31350__auto___39005 < len__31349__auto___39004)){
args__31356__auto__.push((arguments[i__31350__auto___39005]));

var G__39006 = (i__31350__auto___39005 + (1));
i__31350__auto___39005 = G__39006;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39000){
var vec__39001 = p__39000;
var req = cljs.core.nth.call(null,vec__39001,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq38998){
var G__38999 = cljs.core.first.call(null,seq38998);
var seq38998__$1 = cljs.core.next.call(null,seq38998);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__38999,seq38998__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39017 = arguments.length;
var i__31350__auto___39018 = (0);
while(true){
if((i__31350__auto___39018 < len__31349__auto___39017)){
args__31356__auto__.push((arguments[i__31350__auto___39018]));

var G__39019 = (i__31350__auto___39018 + (1));
i__31350__auto___39018 = G__39019;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39013){
var vec__39014 = p__39013;
var req = cljs.core.nth.call(null,vec__39014,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq39008){
var G__39009 = cljs.core.first.call(null,seq39008);
var seq39008__$1 = cljs.core.next.call(null,seq39008);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__39009,seq39008__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39043 = arguments.length;
var i__31350__auto___39044 = (0);
while(true){
if((i__31350__auto___39044 < len__31349__auto___39043)){
args__31356__auto__.push((arguments[i__31350__auto___39044]));

var G__39051 = (i__31350__auto___39044 + (1));
i__31350__auto___39044 = G__39051;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39038){
var vec__39039 = p__39038;
var req = cljs.core.nth.call(null,vec__39039,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq39031){
var G__39032 = cljs.core.first.call(null,seq39031);
var seq39031__$1 = cljs.core.next.call(null,seq39031);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__39032,seq39031__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39214 = arguments.length;
var i__31350__auto___39215 = (0);
while(true){
if((i__31350__auto___39215 < len__31349__auto___39214)){
args__31356__auto__.push((arguments[i__31350__auto___39215]));

var G__39217 = (i__31350__auto___39215 + (1));
i__31350__auto___39215 = G__39217;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39202){
var vec__39203 = p__39202;
var req = cljs.core.nth.call(null,vec__39203,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq39155){
var G__39156 = cljs.core.first.call(null,seq39155);
var seq39155__$1 = cljs.core.next.call(null,seq39155);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__39156,seq39155__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39236 = arguments.length;
var i__31350__auto___39238 = (0);
while(true){
if((i__31350__auto___39238 < len__31349__auto___39236)){
args__31356__auto__.push((arguments[i__31350__auto___39238]));

var G__39240 = (i__31350__auto___39238 + (1));
i__31350__auto___39238 = G__39240;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39231){
var vec__39232 = p__39231;
var req = cljs.core.nth.call(null,vec__39232,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq39227){
var G__39228 = cljs.core.first.call(null,seq39227);
var seq39227__$1 = cljs.core.next.call(null,seq39227);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__39228,seq39227__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39258 = arguments.length;
var i__31350__auto___39260 = (0);
while(true){
if((i__31350__auto___39260 < len__31349__auto___39258)){
args__31356__auto__.push((arguments[i__31350__auto___39260]));

var G__39261 = (i__31350__auto___39260 + (1));
i__31350__auto___39260 = G__39261;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39251){
var vec__39252 = p__39251;
var req = cljs.core.nth.call(null,vec__39252,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq39245){
var G__39246 = cljs.core.first.call(null,seq39245);
var seq39245__$1 = cljs.core.next.call(null,seq39245);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__39246,seq39245__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39278 = arguments.length;
var i__31350__auto___39279 = (0);
while(true){
if((i__31350__auto___39279 < len__31349__auto___39278)){
args__31356__auto__.push((arguments[i__31350__auto___39279]));

var G__39280 = (i__31350__auto___39279 + (1));
i__31350__auto___39279 = G__39280;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__39272){
var vec__39273 = p__39272;
var req = cljs.core.nth.call(null,vec__39273,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq39267){
var G__39268 = cljs.core.first.call(null,seq39267);
var seq39267__$1 = cljs.core.next.call(null,seq39267);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__39268,seq39267__$1);
});


//# sourceMappingURL=client.js.map?rel=1510360382776
