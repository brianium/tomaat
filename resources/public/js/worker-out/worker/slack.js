// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.slack');
goog.require('cljs.core');
goog.require('goog.uri.utils');
goog.require('data.core');
worker.slack.node$module$https = require('https');
worker.slack.query = (function worker$slack$query(params){
return goog.uri.utils.appendParamsFromMap("",cljs.core.clj__GT_js.call(null,params));
});
worker.slack.encode_json = (function worker$slack$encode_json(data__$1){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data__$1));
});
worker.slack.url = (function worker$slack$url(action,params){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(["https://slack.com/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(worker.slack.query.call(null,params))].join('');
});
worker.slack.request = (function worker$slack$request(action,params){
return worker.slack.node$module$https.get.call(null,worker.slack.url.call(null,action,params));
});
worker.slack.update_profile = (function worker$slack$update_profile(text,emoji){
var settings = data.core.read.call(null);
var temp__5278__auto__ = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(settings);
if(cljs.core.truth_(temp__5278__auto__)){
var token = temp__5278__auto__;
return worker.slack.request.call(null,"users.profile.set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),worker.slack.encode_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status_text","status_text",1311012961),text,new cljs.core.Keyword(null,"status_emoji","status_emoji",-223752679),emoji], null)),new cljs.core.Keyword(null,"token","token",-1211463215),token], null));
} else {
return null;
}
});
worker.slack.start_pomodoro = (function worker$slack$start_pomodoro(event,id){
return worker.slack.update_profile.call(null,"pom party",":tomato:");
});
worker.slack.stop_pomodoro = (function worker$slack$stop_pomodoro(event,id){
return worker.slack.update_profile.call(null,"","");
});
