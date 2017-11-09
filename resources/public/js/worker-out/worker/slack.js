// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.slack');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.uri.utils');
goog.require('data.core');
/**
 * Creates encoded query string params from a hash map
 */
worker.slack.query = (function worker$slack$query(params){
return goog.uri.utils.appendParamsFromMap("",cljs.core.clj__GT_js.call(null,params));
});
/**
 * Converts a hash map to json and encodes the whole structure
 */
worker.slack.encode_json = (function worker$slack$encode_json(data__$1){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data__$1));
});
/**
 * Create a slack api url
 */
worker.slack.url = (function worker$slack$url(action,params){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(["https://slack.com/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(worker.slack.query.call(null,params))].join('');
});
/**
 * Performs an http get request and returns a core.async channel
 */
worker.slack.request = (function worker$slack$request(action,params){
return cljs_http.client.get.call(null,worker.slack.url.call(null,action,params));
});
/**
 * Executes the given function if a slack token has been stored
 */
worker.slack.with_token = (function worker$slack$with_token(fn_request){
var settings = data.core.read.call(null);
var temp__5278__auto__ = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(settings);
if(cljs.core.truth_(temp__5278__auto__)){
var token = temp__5278__auto__;
return fn_request.call(null,token);
} else {
return null;
}
});
/**
 * Updates token user's profile with the given text and emoji
 */
worker.slack.update_profile = (function worker$slack$update_profile(text,emoji){
return worker.slack.with_token.call(null,(function (p1__43013_SHARP_){
return worker.slack.request.call(null,"users.profile.set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),worker.slack.encode_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status_text","status_text",1311012961),text,new cljs.core.Keyword(null,"status_emoji","status_emoji",-223752679),emoji], null)),new cljs.core.Keyword(null,"token","token",-1211463215),p1__43013_SHARP_], null));
}));
});
/**
 * Updates the token user's profile with pom text and a tomato!
 */
worker.slack.start_pomodoro = (function worker$slack$start_pomodoro(event,id){
return worker.slack.update_profile.call(null,"pom party",":tomato:");
});
/**
 * Stopping the pomodoro clears the user profile of any pom related business
 */
worker.slack.stop_pomodoro = (function worker$slack$stop_pomodoro(var_args){
var G__43031 = arguments.length;
switch (G__43031) {
case 0:
return worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$0 = (function (){
return worker.slack.update_profile.call(null,"","");
});

worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$2 = (function (event,id){
return worker.slack.stop_pomodoro.call(null);
});

worker.slack.stop_pomodoro.cljs$lang$maxFixedArity = 2;

/**
 * Notifies the user's slackbot channel that the pom is complete and it's time
 *   to take a break from all their labors.
 */
worker.slack.notify = (function worker$slack$notify(){
return worker.slack.with_token.call(null,(function (token){
console.log(token);

var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__){
return (function (state_43055){
var state_val_43056 = (state_43055[(1)]);
if((state_val_43056 === (1))){
var inst_43040 = [new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_43041 = [token];
var inst_43042 = cljs.core.PersistentHashMap.fromArrays(inst_43040,inst_43041);
var inst_43043 = worker.slack.request.call(null,"auth.test",inst_43042);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43055__$1,(2),inst_43043);
} else {
if((state_val_43056 === (2))){
var inst_43045 = (state_43055[(2)]);
var inst_43046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43047 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"user_id","user_id",993497112)];
var inst_43048 = (new cljs.core.PersistentVector(null,2,(5),inst_43046,inst_43047,null));
var inst_43049 = cljs.core.get_in.call(null,inst_43045,inst_43048);
var inst_43050 = [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"as_user","as_user",854393931),new cljs.core.Keyword(null,"icon_emoji","icon_emoji",106950163),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_43051 = [token,inst_43049,false,":tomato:","Pom complete! Time to take a break :sweat_smile:"];
var inst_43052 = cljs.core.PersistentHashMap.fromArrays(inst_43050,inst_43051);
var inst_43053 = worker.slack.request.call(null,"chat.postMessage",inst_43052);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43055__$1,inst_43053);
} else {
return null;
}
}
});})(c__33665__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__){
return (function() {
var worker$slack$notify_$_state_machine__33281__auto__ = null;
var worker$slack$notify_$_state_machine__33281__auto____0 = (function (){
var statearr_43057 = [null,null,null,null,null,null,null];
(statearr_43057[(0)] = worker$slack$notify_$_state_machine__33281__auto__);

(statearr_43057[(1)] = (1));

return statearr_43057;
});
var worker$slack$notify_$_state_machine__33281__auto____1 = (function (state_43055){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_43055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e43058){if((e43058 instanceof Object)){
var ex__33284__auto__ = e43058;
var statearr_43059_43062 = state_43055;
(statearr_43059_43062[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43063 = state_43055;
state_43055 = G__43063;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
worker$slack$notify_$_state_machine__33281__auto__ = function(state_43055){
switch(arguments.length){
case 0:
return worker$slack$notify_$_state_machine__33281__auto____0.call(this);
case 1:
return worker$slack$notify_$_state_machine__33281__auto____1.call(this,state_43055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
worker$slack$notify_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = worker$slack$notify_$_state_machine__33281__auto____0;
worker$slack$notify_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = worker$slack$notify_$_state_machine__33281__auto____1;
return worker$slack$notify_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_43060 = f__33666__auto__.call(null);
(statearr_43060[(6)] = c__33665__auto__);

return statearr_43060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
}));
});
worker.slack.complete_pomodoro = cljs.core.juxt.call(null,worker.slack.stop_pomodoro,worker.slack.notify);

//# sourceMappingURL=slack.js.map?rel=1510229223711
