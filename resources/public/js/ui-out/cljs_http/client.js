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
return cljs.core.reduce.call(null,(function (p1__50564_SHARP_,p2__50563_SHARP_){
var vec__50567 = clojure.string.split.call(null,p2__50563_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__50567,(0),null);
var v = cljs.core.nth.call(null,vec__50567,(1),null);
return cljs.core.assoc.call(null,p1__50564_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__50595_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__50595_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__50609){
var vec__50610 = p__50609;
var k = cljs.core.nth.call(null,vec__50610,(0),null);
var v = cljs.core.nth.call(null,vec__50610,(1),null);
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
return (function (p1__50618_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50618_SHARP_)].join('');
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
return cljs.core.async.map.call(null,(function (p1__50668_SHARP_){
return cljs_http.client.decode_body.call(null,p1__50668_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50682 = arguments.length;
var i__31350__auto___50683 = (0);
while(true){
if((i__31350__auto___50683 < len__31349__auto___50682)){
args__31356__auto__.push((arguments[i__31350__auto___50683]));

var G__50684 = (i__31350__auto___50683 + (1));
i__31350__auto___50683 = G__50684;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__50671){
var vec__50672 = p__50671;
var default_headers = cljs.core.nth.call(null,vec__50672,(0),null);
return ((function (vec__50672,default_headers){
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
;})(vec__50672,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq50669){
var G__50670 = cljs.core.first.call(null,seq50669);
var seq50669__$1 = cljs.core.next.call(null,seq50669);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__50670,seq50669__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50721 = arguments.length;
var i__31350__auto___50722 = (0);
while(true){
if((i__31350__auto___50722 < len__31349__auto___50721)){
args__31356__auto__.push((arguments[i__31350__auto___50722]));

var G__50723 = (i__31350__auto___50722 + (1));
i__31350__auto___50722 = G__50723;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__50710){
var vec__50711 = p__50710;
var accept = cljs.core.nth.call(null,vec__50711,(0),null);
return ((function (vec__50711,accept){
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
;})(vec__50711,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq50700){
var G__50701 = cljs.core.first.call(null,seq50700);
var seq50700__$1 = cljs.core.next.call(null,seq50700);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__50701,seq50700__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50750 = arguments.length;
var i__31350__auto___50751 = (0);
while(true){
if((i__31350__auto___50751 < len__31349__auto___50750)){
args__31356__auto__.push((arguments[i__31350__auto___50751]));

var G__50752 = (i__31350__auto___50751 + (1));
i__31350__auto___50751 = G__50752;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__50744){
var vec__50745 = p__50744;
var content_type = cljs.core.nth.call(null,vec__50745,(0),null);
return ((function (vec__50745,content_type){
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
;})(vec__50745,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq50742){
var G__50743 = cljs.core.first.call(null,seq50742);
var seq50742__$1 = cljs.core.next.call(null,seq50742);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__50743,seq50742__$1);
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
var map__50756 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__50756__$1 = ((((!((map__50756 == null)))?((((map__50756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50756):map__50756);
var encoding = cljs.core.get.call(null,map__50756__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__50756__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__50772 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__50772__$1 = ((((!((map__50772 == null)))?((((map__50772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50772):map__50772);
var decoding = cljs.core.get.call(null,map__50772__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__50772__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__50772,map__50772__$1,decoding,decoding_opts){
return (function (p1__50770_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__50770_SHARP_,decoding,decoding_opts);
});})(map__50772,map__50772__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__50772,map__50772__$1,decoding,decoding_opts,transit_decode){
return (function (p1__50771_SHARP_){
return cljs_http.client.decode_body.call(null,p1__50771_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__50772,map__50772__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__50781_SHARP_){
return cljs_http.client.decode_body.call(null,p1__50781_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__50782){
var map__50783 = p__50782;
var map__50783__$1 = ((((!((map__50783 == null)))?((((map__50783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50783):map__50783);
var req = map__50783__$1;
var query_params = cljs.core.get.call(null,map__50783__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__50788){
var map__50789 = p__50788;
var map__50789__$1 = ((((!((map__50789 == null)))?((((map__50789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50789):map__50789);
var request = map__50789__$1;
var form_params = cljs.core.get.call(null,map__50789__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__50789__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__50789__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var seq__50794_50806 = cljs.core.seq.call(null,params);
var chunk__50795_50807 = null;
var count__50796_50808 = (0);
var i__50797_50809 = (0);
while(true){
if((i__50797_50809 < count__50796_50808)){
var vec__50799_50811 = cljs.core._nth.call(null,chunk__50795_50807,i__50797_50809);
var k_50812 = cljs.core.nth.call(null,vec__50799_50811,(0),null);
var v_50813 = cljs.core.nth.call(null,vec__50799_50811,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_50813)){
form_data.append(cljs.core.name.call(null,k_50812),cljs.core.first.call(null,v_50813),cljs.core.second.call(null,v_50813));
} else {
form_data.append(cljs.core.name.call(null,k_50812),v_50813);
}

var G__50818 = seq__50794_50806;
var G__50819 = chunk__50795_50807;
var G__50820 = count__50796_50808;
var G__50821 = (i__50797_50809 + (1));
seq__50794_50806 = G__50818;
chunk__50795_50807 = G__50819;
count__50796_50808 = G__50820;
i__50797_50809 = G__50821;
continue;
} else {
var temp__5278__auto___50822 = cljs.core.seq.call(null,seq__50794_50806);
if(temp__5278__auto___50822){
var seq__50794_50823__$1 = temp__5278__auto___50822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50794_50823__$1)){
var c__31003__auto___50824 = cljs.core.chunk_first.call(null,seq__50794_50823__$1);
var G__50825 = cljs.core.chunk_rest.call(null,seq__50794_50823__$1);
var G__50826 = c__31003__auto___50824;
var G__50827 = cljs.core.count.call(null,c__31003__auto___50824);
var G__50828 = (0);
seq__50794_50806 = G__50825;
chunk__50795_50807 = G__50826;
count__50796_50808 = G__50827;
i__50797_50809 = G__50828;
continue;
} else {
var vec__50803_50830 = cljs.core.first.call(null,seq__50794_50823__$1);
var k_50831 = cljs.core.nth.call(null,vec__50803_50830,(0),null);
var v_50832 = cljs.core.nth.call(null,vec__50803_50830,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_50832)){
form_data.append(cljs.core.name.call(null,k_50831),cljs.core.first.call(null,v_50832),cljs.core.second.call(null,v_50832));
} else {
form_data.append(cljs.core.name.call(null,k_50831),v_50832);
}

var G__50840 = cljs.core.next.call(null,seq__50794_50823__$1);
var G__50841 = null;
var G__50842 = (0);
var G__50843 = (0);
seq__50794_50806 = G__50840;
chunk__50795_50807 = G__50841;
count__50796_50808 = G__50842;
i__50797_50809 = G__50843;
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
return (function (p__50845){
var map__50846 = p__50845;
var map__50846__$1 = ((((!((map__50846 == null)))?((((map__50846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50846):map__50846);
var request = map__50846__$1;
var multipart_params = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
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
return (function (p1__50851_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__50851_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__50853){
var map__50854 = p__50853;
var map__50854__$1 = ((((!((map__50854 == null)))?((((map__50854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50854):map__50854);
var req = map__50854__$1;
var query_params = cljs.core.get.call(null,map__50854__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5276__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5276__auto__,map__50854,map__50854__$1,req,query_params){
return (function (p1__50852_SHARP_){
return cljs.core.merge.call(null,p1__50852_SHARP_,query_params);
});})(spec,temp__5276__auto__,map__50854,map__50854__$1,req,query_params))
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
var len__31349__auto___50871 = arguments.length;
var i__31350__auto___50872 = (0);
while(true){
if((i__31350__auto___50872 < len__31349__auto___50871)){
args__31356__auto__.push((arguments[i__31350__auto___50872]));

var G__50873 = (i__31350__auto___50872 + (1));
i__31350__auto___50872 = G__50873;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__50867){
var vec__50868 = p__50867;
var credentials = cljs.core.nth.call(null,vec__50868,(0),null);
return ((function (vec__50868,credentials){
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
;})(vec__50868,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq50862){
var G__50863 = cljs.core.first.call(null,seq50862);
var seq50862__$1 = cljs.core.next.call(null,seq50862);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__50863,seq50862__$1);
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
var len__31349__auto___50925 = arguments.length;
var i__31350__auto___50926 = (0);
while(true){
if((i__31350__auto___50926 < len__31349__auto___50925)){
args__31356__auto__.push((arguments[i__31350__auto___50926]));

var G__50927 = (i__31350__auto___50926 + (1));
i__31350__auto___50926 = G__50927;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50921){
var vec__50922 = p__50921;
var req = cljs.core.nth.call(null,vec__50922,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq50919){
var G__50920 = cljs.core.first.call(null,seq50919);
var seq50919__$1 = cljs.core.next.call(null,seq50919);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__50920,seq50919__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50937 = arguments.length;
var i__31350__auto___50938 = (0);
while(true){
if((i__31350__auto___50938 < len__31349__auto___50937)){
args__31356__auto__.push((arguments[i__31350__auto___50938]));

var G__50939 = (i__31350__auto___50938 + (1));
i__31350__auto___50938 = G__50939;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50933){
var vec__50934 = p__50933;
var req = cljs.core.nth.call(null,vec__50934,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq50931){
var G__50932 = cljs.core.first.call(null,seq50931);
var seq50931__$1 = cljs.core.next.call(null,seq50931);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__50932,seq50931__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50954 = arguments.length;
var i__31350__auto___50955 = (0);
while(true){
if((i__31350__auto___50955 < len__31349__auto___50954)){
args__31356__auto__.push((arguments[i__31350__auto___50955]));

var G__50956 = (i__31350__auto___50955 + (1));
i__31350__auto___50955 = G__50956;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50947){
var vec__50948 = p__50947;
var req = cljs.core.nth.call(null,vec__50948,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq50945){
var G__50946 = cljs.core.first.call(null,seq50945);
var seq50945__$1 = cljs.core.next.call(null,seq50945);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__50946,seq50945__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50970 = arguments.length;
var i__31350__auto___50971 = (0);
while(true){
if((i__31350__auto___50971 < len__31349__auto___50970)){
args__31356__auto__.push((arguments[i__31350__auto___50971]));

var G__50972 = (i__31350__auto___50971 + (1));
i__31350__auto___50971 = G__50972;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50964){
var vec__50967 = p__50964;
var req = cljs.core.nth.call(null,vec__50967,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq50957){
var G__50958 = cljs.core.first.call(null,seq50957);
var seq50957__$1 = cljs.core.next.call(null,seq50957);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__50958,seq50957__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50991 = arguments.length;
var i__31350__auto___50992 = (0);
while(true){
if((i__31350__auto___50992 < len__31349__auto___50991)){
args__31356__auto__.push((arguments[i__31350__auto___50992]));

var G__50993 = (i__31350__auto___50992 + (1));
i__31350__auto___50992 = G__50993;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50987){
var vec__50988 = p__50987;
var req = cljs.core.nth.call(null,vec__50988,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq50983){
var G__50984 = cljs.core.first.call(null,seq50983);
var seq50983__$1 = cljs.core.next.call(null,seq50983);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__50984,seq50983__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51003 = arguments.length;
var i__31350__auto___51004 = (0);
while(true){
if((i__31350__auto___51004 < len__31349__auto___51003)){
args__31356__auto__.push((arguments[i__31350__auto___51004]));

var G__51005 = (i__31350__auto___51004 + (1));
i__31350__auto___51004 = G__51005;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__50999){
var vec__51000 = p__50999;
var req = cljs.core.nth.call(null,vec__51000,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq50997){
var G__50998 = cljs.core.first.call(null,seq50997);
var seq50997__$1 = cljs.core.next.call(null,seq50997);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__50998,seq50997__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51023 = arguments.length;
var i__31350__auto___51024 = (0);
while(true){
if((i__31350__auto___51024 < len__31349__auto___51023)){
args__31356__auto__.push((arguments[i__31350__auto___51024]));

var G__51025 = (i__31350__auto___51024 + (1));
i__31350__auto___51024 = G__51025;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__51019){
var vec__51020 = p__51019;
var req = cljs.core.nth.call(null,vec__51020,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq51014){
var G__51015 = cljs.core.first.call(null,seq51014);
var seq51014__$1 = cljs.core.next.call(null,seq51014);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__51015,seq51014__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51038 = arguments.length;
var i__31350__auto___51039 = (0);
while(true){
if((i__31350__auto___51039 < len__31349__auto___51038)){
args__31356__auto__.push((arguments[i__31350__auto___51039]));

var G__51040 = (i__31350__auto___51039 + (1));
i__31350__auto___51039 = G__51040;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__51034){
var vec__51035 = p__51034;
var req = cljs.core.nth.call(null,vec__51035,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq51032){
var G__51033 = cljs.core.first.call(null,seq51032);
var seq51032__$1 = cljs.core.next.call(null,seq51032);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__51033,seq51032__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51047 = arguments.length;
var i__31350__auto___51048 = (0);
while(true){
if((i__31350__auto___51048 < len__31349__auto___51047)){
args__31356__auto__.push((arguments[i__31350__auto___51048]));

var G__51049 = (i__31350__auto___51048 + (1));
i__31350__auto___51048 = G__51049;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__51043){
var vec__51044 = p__51043;
var req = cljs.core.nth.call(null,vec__51044,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq51041){
var G__51042 = cljs.core.first.call(null,seq51041);
var seq51041__$1 = cljs.core.next.call(null,seq51041);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__51042,seq51041__$1);
});


//# sourceMappingURL=client.js.map?rel=1510360406225
