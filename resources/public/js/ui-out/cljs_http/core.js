// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5278__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5278__auto__)){
var req = temp__5278__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__52807){
var vec__52808 = p__52807;
var k = cljs.core.nth.call(null,vec__52808,(0),null);
var v = cljs.core.nth.call(null,vec__52808,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__52811 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__52811)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__52811)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__52811)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__52811)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__52811)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__52811)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52811)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__52812){
var map__52813 = p__52812;
var map__52813__$1 = ((((!((map__52813 == null)))?((((map__52813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52813):map__52813);
var request = map__52813__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__52813__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__52813__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__52813__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__30072__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__52815 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__52815,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__52815,response_type);

G__52815.setTimeoutInterval(timeout);

G__52815.setWithCredentials(send_credentials);

return G__52815;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__52816){
var map__52817 = p__52816;
var map__52817__$1 = ((((!((map__52817 == null)))?((((map__52817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52817):map__52817);
var request = map__52817__$1;
var request_method = cljs.core.get.call(null,map__52817__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__52817__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__52817__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__52817__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__52817__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__52817__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__30072__auto__ = request_method;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_52841 = ((function (channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__52819_52842 = xhr;
G__52819_52842.setProgressEventsEnabled(true);

G__52819_52842.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_52841,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__52819_52842.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_52841,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__33728__auto___52843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___52843,channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___52843,channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_52830){
var state_val_52831 = (state_52830[(1)]);
if((state_val_52831 === (1))){
var state_52830__$1 = state_52830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52830__$1,(2),cancel);
} else {
if((state_val_52831 === (2))){
var inst_52821 = (state_52830[(2)]);
var inst_52822 = xhr.isComplete();
var inst_52823 = cljs.core.not.call(null,inst_52822);
var state_52830__$1 = (function (){var statearr_52832 = state_52830;
(statearr_52832[(7)] = inst_52821);

return statearr_52832;
})();
if(inst_52823){
var statearr_52833_52844 = state_52830__$1;
(statearr_52833_52844[(1)] = (3));

} else {
var statearr_52834_52845 = state_52830__$1;
(statearr_52834_52845[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52831 === (3))){
var inst_52825 = xhr.abort();
var state_52830__$1 = state_52830;
var statearr_52835_52846 = state_52830__$1;
(statearr_52835_52846[(2)] = inst_52825);

(statearr_52835_52846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52831 === (4))){
var state_52830__$1 = state_52830;
var statearr_52836_52847 = state_52830__$1;
(statearr_52836_52847[(2)] = null);

(statearr_52836_52847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52831 === (5))){
var inst_52828 = (state_52830[(2)]);
var state_52830__$1 = state_52830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52830__$1,inst_52828);
} else {
return null;
}
}
}
}
}
});})(c__33728__auto___52843,channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__33334__auto__,c__33728__auto___52843,channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__33335__auto__ = null;
var cljs_http$core$xhr_$_state_machine__33335__auto____0 = (function (){
var statearr_52837 = [null,null,null,null,null,null,null,null];
(statearr_52837[(0)] = cljs_http$core$xhr_$_state_machine__33335__auto__);

(statearr_52837[(1)] = (1));

return statearr_52837;
});
var cljs_http$core$xhr_$_state_machine__33335__auto____1 = (function (state_52830){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_52830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e52838){if((e52838 instanceof Object)){
var ex__33338__auto__ = e52838;
var statearr_52839_52848 = state_52830;
(statearr_52839_52848[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52849 = state_52830;
state_52830 = G__52849;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__33335__auto__ = function(state_52830){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__33335__auto____1.call(this,state_52830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__33335__auto____0;
cljs_http$core$xhr_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__33335__auto____1;
return cljs_http$core$xhr_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___52843,channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__33730__auto__ = (function (){var statearr_52840 = f__33729__auto__.call(null);
(statearr_52840[(6)] = c__33728__auto___52843);

return statearr_52840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___52843,channel,request_url,method,headers__$1,xhr,map__52817,map__52817__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__52850){
var map__52851 = p__52850;
var map__52851__$1 = ((((!((map__52851 == null)))?((((map__52851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52851):map__52851);
var request = map__52851__$1;
var timeout = cljs.core.get.call(null,map__52851__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__52851__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__52851__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__52851__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_52864 = jsonp.send(null,((function (channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data__$1){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_52864], null));

if(cljs.core.truth_(cancel)){
var c__33728__auto___52865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___52865,req_52864,channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___52865,req_52864,channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_52857){
var state_val_52858 = (state_52857[(1)]);
if((state_val_52858 === (1))){
var state_52857__$1 = state_52857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52857__$1,(2),cancel);
} else {
if((state_val_52858 === (2))){
var inst_52854 = (state_52857[(2)]);
var inst_52855 = jsonp.cancel(req_52864);
var state_52857__$1 = (function (){var statearr_52859 = state_52857;
(statearr_52859[(7)] = inst_52854);

return statearr_52859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52857__$1,inst_52855);
} else {
return null;
}
}
});})(c__33728__auto___52865,req_52864,channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__33334__auto__,c__33728__auto___52865,req_52864,channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__33335__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__33335__auto____0 = (function (){
var statearr_52860 = [null,null,null,null,null,null,null,null];
(statearr_52860[(0)] = cljs_http$core$jsonp_$_state_machine__33335__auto__);

(statearr_52860[(1)] = (1));

return statearr_52860;
});
var cljs_http$core$jsonp_$_state_machine__33335__auto____1 = (function (state_52857){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_52857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e52861){if((e52861 instanceof Object)){
var ex__33338__auto__ = e52861;
var statearr_52862_52866 = state_52857;
(statearr_52862_52866[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52867 = state_52857;
state_52857 = G__52867;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__33335__auto__ = function(state_52857){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__33335__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__33335__auto____1.call(this,state_52857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__33335__auto____0;
cljs_http$core$jsonp_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__33335__auto____1;
return cljs_http$core$jsonp_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___52865,req_52864,channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__33730__auto__ = (function (){var statearr_52863 = f__33729__auto__.call(null);
(statearr_52863[(6)] = c__33728__auto___52865);

return statearr_52863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___52865,req_52864,channel,jsonp,map__52851,map__52851__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__52868){
var map__52869 = p__52868;
var map__52869__$1 = ((((!((map__52869 == null)))?((((map__52869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52869):map__52869);
var request = map__52869__$1;
var request_method = cljs.core.get.call(null,map__52869__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1510143496582
