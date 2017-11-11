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
return cljs.core.reduce.call(null,(function (p1__44316_SHARP_,p2__44315_SHARP_){
var vec__44318 = clojure.string.split.call(null,p2__44315_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__44318,(0),null);
var v = cljs.core.nth.call(null,vec__44318,(1),null);
return cljs.core.assoc.call(null,p1__44316_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__44329_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__44329_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__44332){
var vec__44333 = p__44332;
var k = cljs.core.nth.call(null,vec__44333,(0),null);
var v = cljs.core.nth.call(null,vec__44333,(1),null);
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
return (function (p1__44336_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44336_SHARP_)].join('');
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
return cljs.core.async.map.call(null,(function (p1__44349_SHARP_){
return cljs_http.client.decode_body.call(null,p1__44349_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44362 = arguments.length;
var i__31350__auto___44363 = (0);
while(true){
if((i__31350__auto___44363 < len__31349__auto___44362)){
args__31356__auto__.push((arguments[i__31350__auto___44363]));

var G__44365 = (i__31350__auto___44363 + (1));
i__31350__auto___44363 = G__44365;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44353){
var vec__44354 = p__44353;
var default_headers = cljs.core.nth.call(null,vec__44354,(0),null);
return ((function (vec__44354,default_headers){
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
;})(vec__44354,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq44351){
var G__44352 = cljs.core.first.call(null,seq44351);
var seq44351__$1 = cljs.core.next.call(null,seq44351);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__44352,seq44351__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44375 = arguments.length;
var i__31350__auto___44376 = (0);
while(true){
if((i__31350__auto___44376 < len__31349__auto___44375)){
args__31356__auto__.push((arguments[i__31350__auto___44376]));

var G__44377 = (i__31350__auto___44376 + (1));
i__31350__auto___44376 = G__44377;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44371){
var vec__44372 = p__44371;
var accept = cljs.core.nth.call(null,vec__44372,(0),null);
return ((function (vec__44372,accept){
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
;})(vec__44372,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq44366){
var G__44367 = cljs.core.first.call(null,seq44366);
var seq44366__$1 = cljs.core.next.call(null,seq44366);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__44367,seq44366__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44392 = arguments.length;
var i__31350__auto___44393 = (0);
while(true){
if((i__31350__auto___44393 < len__31349__auto___44392)){
args__31356__auto__.push((arguments[i__31350__auto___44393]));

var G__44394 = (i__31350__auto___44393 + (1));
i__31350__auto___44393 = G__44394;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44386){
var vec__44387 = p__44386;
var content_type = cljs.core.nth.call(null,vec__44387,(0),null);
return ((function (vec__44387,content_type){
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
;})(vec__44387,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq44378){
var G__44379 = cljs.core.first.call(null,seq44378);
var seq44378__$1 = cljs.core.next.call(null,seq44378);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__44379,seq44378__$1);
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
var map__44403 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__44403__$1 = ((((!((map__44403 == null)))?((((map__44403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44403):map__44403);
var encoding = cljs.core.get.call(null,map__44403__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__44403__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__44412 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__44412__$1 = ((((!((map__44412 == null)))?((((map__44412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44412):map__44412);
var decoding = cljs.core.get.call(null,map__44412__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__44412__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__44412,map__44412__$1,decoding,decoding_opts){
return (function (p1__44409_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__44409_SHARP_,decoding,decoding_opts);
});})(map__44412,map__44412__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__44412,map__44412__$1,decoding,decoding_opts,transit_decode){
return (function (p1__44410_SHARP_){
return cljs_http.client.decode_body.call(null,p1__44410_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__44412,map__44412__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__44431_SHARP_){
return cljs_http.client.decode_body.call(null,p1__44431_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__44437){
var map__44438 = p__44437;
var map__44438__$1 = ((((!((map__44438 == null)))?((((map__44438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44438):map__44438);
var req = map__44438__$1;
var query_params = cljs.core.get.call(null,map__44438__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__44456){
var map__44457 = p__44456;
var map__44457__$1 = ((((!((map__44457 == null)))?((((map__44457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44457):map__44457);
var request = map__44457__$1;
var form_params = cljs.core.get.call(null,map__44457__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__44457__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__44457__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var seq__44466_44488 = cljs.core.seq.call(null,params);
var chunk__44467_44489 = null;
var count__44468_44490 = (0);
var i__44469_44491 = (0);
while(true){
if((i__44469_44491 < count__44468_44490)){
var vec__44479_44492 = cljs.core._nth.call(null,chunk__44467_44489,i__44469_44491);
var k_44493 = cljs.core.nth.call(null,vec__44479_44492,(0),null);
var v_44494 = cljs.core.nth.call(null,vec__44479_44492,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_44494)){
form_data.append(cljs.core.name.call(null,k_44493),cljs.core.first.call(null,v_44494),cljs.core.second.call(null,v_44494));
} else {
form_data.append(cljs.core.name.call(null,k_44493),v_44494);
}

var G__44498 = seq__44466_44488;
var G__44499 = chunk__44467_44489;
var G__44500 = count__44468_44490;
var G__44501 = (i__44469_44491 + (1));
seq__44466_44488 = G__44498;
chunk__44467_44489 = G__44499;
count__44468_44490 = G__44500;
i__44469_44491 = G__44501;
continue;
} else {
var temp__5278__auto___44502 = cljs.core.seq.call(null,seq__44466_44488);
if(temp__5278__auto___44502){
var seq__44466_44503__$1 = temp__5278__auto___44502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44466_44503__$1)){
var c__31003__auto___44504 = cljs.core.chunk_first.call(null,seq__44466_44503__$1);
var G__44505 = cljs.core.chunk_rest.call(null,seq__44466_44503__$1);
var G__44506 = c__31003__auto___44504;
var G__44507 = cljs.core.count.call(null,c__31003__auto___44504);
var G__44508 = (0);
seq__44466_44488 = G__44505;
chunk__44467_44489 = G__44506;
count__44468_44490 = G__44507;
i__44469_44491 = G__44508;
continue;
} else {
var vec__44485_44509 = cljs.core.first.call(null,seq__44466_44503__$1);
var k_44510 = cljs.core.nth.call(null,vec__44485_44509,(0),null);
var v_44511 = cljs.core.nth.call(null,vec__44485_44509,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_44511)){
form_data.append(cljs.core.name.call(null,k_44510),cljs.core.first.call(null,v_44511),cljs.core.second.call(null,v_44511));
} else {
form_data.append(cljs.core.name.call(null,k_44510),v_44511);
}

var G__44512 = cljs.core.next.call(null,seq__44466_44503__$1);
var G__44513 = null;
var G__44514 = (0);
var G__44515 = (0);
seq__44466_44488 = G__44512;
chunk__44467_44489 = G__44513;
count__44468_44490 = G__44514;
i__44469_44491 = G__44515;
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
return (function (p__44518){
var map__44519 = p__44518;
var map__44519__$1 = ((((!((map__44519 == null)))?((((map__44519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44519):map__44519);
var request = map__44519__$1;
var multipart_params = cljs.core.get.call(null,map__44519__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__44519__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
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
return (function (p1__44527_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__44527_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__44532){
var map__44533 = p__44532;
var map__44533__$1 = ((((!((map__44533 == null)))?((((map__44533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44533):map__44533);
var req = map__44533__$1;
var query_params = cljs.core.get.call(null,map__44533__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5276__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5276__auto__,map__44533,map__44533__$1,req,query_params){
return (function (p1__44530_SHARP_){
return cljs.core.merge.call(null,p1__44530_SHARP_,query_params);
});})(spec,temp__5276__auto__,map__44533,map__44533__$1,req,query_params))
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
var len__31349__auto___44561 = arguments.length;
var i__31350__auto___44563 = (0);
while(true){
if((i__31350__auto___44563 < len__31349__auto___44561)){
args__31356__auto__.push((arguments[i__31350__auto___44563]));

var G__44564 = (i__31350__auto___44563 + (1));
i__31350__auto___44563 = G__44564;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__44546){
var vec__44547 = p__44546;
var credentials = cljs.core.nth.call(null,vec__44547,(0),null);
return ((function (vec__44547,credentials){
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
;})(vec__44547,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq44544){
var G__44545 = cljs.core.first.call(null,seq44544);
var seq44544__$1 = cljs.core.next.call(null,seq44544);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__44545,seq44544__$1);
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
var len__31349__auto___44595 = arguments.length;
var i__31350__auto___44596 = (0);
while(true){
if((i__31350__auto___44596 < len__31349__auto___44595)){
args__31356__auto__.push((arguments[i__31350__auto___44596]));

var G__44597 = (i__31350__auto___44596 + (1));
i__31350__auto___44596 = G__44597;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44591){
var vec__44592 = p__44591;
var req = cljs.core.nth.call(null,vec__44592,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq44589){
var G__44590 = cljs.core.first.call(null,seq44589);
var seq44589__$1 = cljs.core.next.call(null,seq44589);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__44590,seq44589__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44615 = arguments.length;
var i__31350__auto___44616 = (0);
while(true){
if((i__31350__auto___44616 < len__31349__auto___44615)){
args__31356__auto__.push((arguments[i__31350__auto___44616]));

var G__44617 = (i__31350__auto___44616 + (1));
i__31350__auto___44616 = G__44617;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44609){
var vec__44610 = p__44609;
var req = cljs.core.nth.call(null,vec__44610,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq44605){
var G__44606 = cljs.core.first.call(null,seq44605);
var seq44605__$1 = cljs.core.next.call(null,seq44605);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__44606,seq44605__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44632 = arguments.length;
var i__31350__auto___44633 = (0);
while(true){
if((i__31350__auto___44633 < len__31349__auto___44632)){
args__31356__auto__.push((arguments[i__31350__auto___44633]));

var G__44641 = (i__31350__auto___44633 + (1));
i__31350__auto___44633 = G__44641;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44625){
var vec__44626 = p__44625;
var req = cljs.core.nth.call(null,vec__44626,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq44621){
var G__44622 = cljs.core.first.call(null,seq44621);
var seq44621__$1 = cljs.core.next.call(null,seq44621);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__44622,seq44621__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44665 = arguments.length;
var i__31350__auto___44666 = (0);
while(true){
if((i__31350__auto___44666 < len__31349__auto___44665)){
args__31356__auto__.push((arguments[i__31350__auto___44666]));

var G__44669 = (i__31350__auto___44666 + (1));
i__31350__auto___44666 = G__44669;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44661){
var vec__44662 = p__44661;
var req = cljs.core.nth.call(null,vec__44662,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq44657){
var G__44658 = cljs.core.first.call(null,seq44657);
var seq44657__$1 = cljs.core.next.call(null,seq44657);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__44658,seq44657__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44684 = arguments.length;
var i__31350__auto___44685 = (0);
while(true){
if((i__31350__auto___44685 < len__31349__auto___44684)){
args__31356__auto__.push((arguments[i__31350__auto___44685]));

var G__44693 = (i__31350__auto___44685 + (1));
i__31350__auto___44685 = G__44693;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44674){
var vec__44675 = p__44674;
var req = cljs.core.nth.call(null,vec__44675,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq44672){
var G__44673 = cljs.core.first.call(null,seq44672);
var seq44672__$1 = cljs.core.next.call(null,seq44672);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__44673,seq44672__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44711 = arguments.length;
var i__31350__auto___44712 = (0);
while(true){
if((i__31350__auto___44712 < len__31349__auto___44711)){
args__31356__auto__.push((arguments[i__31350__auto___44712]));

var G__44714 = (i__31350__auto___44712 + (1));
i__31350__auto___44712 = G__44714;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44707){
var vec__44708 = p__44707;
var req = cljs.core.nth.call(null,vec__44708,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq44700){
var G__44701 = cljs.core.first.call(null,seq44700);
var seq44700__$1 = cljs.core.next.call(null,seq44700);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__44701,seq44700__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44728 = arguments.length;
var i__31350__auto___44729 = (0);
while(true){
if((i__31350__auto___44729 < len__31349__auto___44728)){
args__31356__auto__.push((arguments[i__31350__auto___44729]));

var G__44730 = (i__31350__auto___44729 + (1));
i__31350__auto___44729 = G__44730;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44724){
var vec__44725 = p__44724;
var req = cljs.core.nth.call(null,vec__44725,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq44719){
var G__44720 = cljs.core.first.call(null,seq44719);
var seq44719__$1 = cljs.core.next.call(null,seq44719);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__44720,seq44719__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44743 = arguments.length;
var i__31350__auto___44744 = (0);
while(true){
if((i__31350__auto___44744 < len__31349__auto___44743)){
args__31356__auto__.push((arguments[i__31350__auto___44744]));

var G__44749 = (i__31350__auto___44744 + (1));
i__31350__auto___44744 = G__44749;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44739){
var vec__44740 = p__44739;
var req = cljs.core.nth.call(null,vec__44740,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq44735){
var G__44736 = cljs.core.first.call(null,seq44735);
var seq44735__$1 = cljs.core.next.call(null,seq44735);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__44736,seq44735__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44762 = arguments.length;
var i__31350__auto___44763 = (0);
while(true){
if((i__31350__auto___44763 < len__31349__auto___44762)){
args__31356__auto__.push((arguments[i__31350__auto___44763]));

var G__44766 = (i__31350__auto___44763 + (1));
i__31350__auto___44763 = G__44766;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__44758){
var vec__44759 = p__44758;
var req = cljs.core.nth.call(null,vec__44759,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq44756){
var G__44757 = cljs.core.first.call(null,seq44756);
var seq44756__$1 = cljs.core.next.call(null,seq44756);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__44757,seq44756__$1);
});


//# sourceMappingURL=client.js.map?rel=1510360394848
