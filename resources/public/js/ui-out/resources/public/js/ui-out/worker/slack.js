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
return worker.slack.with_token.call(null,(function (p1__54286_SHARP_){
return worker.slack.request.call(null,"users.profile.set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),worker.slack.encode_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status_text","status_text",1311012961),text,new cljs.core.Keyword(null,"status_emoji","status_emoji",-223752679),emoji], null)),new cljs.core.Keyword(null,"token","token",-1211463215),p1__54286_SHARP_], null));
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
var G__54288 = arguments.length;
switch (G__54288) {
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

var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_54305){
var state_val_54306 = (state_54305[(1)]);
if((state_val_54306 === (1))){
var inst_54290 = [new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_54291 = [token];
var inst_54292 = cljs.core.PersistentHashMap.fromArrays(inst_54290,inst_54291);
var inst_54293 = worker.slack.request.call(null,"auth.test",inst_54292);
var state_54305__$1 = state_54305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54305__$1,(2),inst_54293);
} else {
if((state_val_54306 === (2))){
var inst_54295 = (state_54305[(2)]);
var inst_54296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54297 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"user_id","user_id",993497112)];
var inst_54298 = (new cljs.core.PersistentVector(null,2,(5),inst_54296,inst_54297,null));
var inst_54299 = cljs.core.get_in.call(null,inst_54295,inst_54298);
var inst_54300 = [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"as_user","as_user",854393931),new cljs.core.Keyword(null,"icon_emoji","icon_emoji",106950163),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_54301 = [token,inst_54299,false,":tomato:","Pom complete! Time to take a break :sweat_smile:"];
var inst_54302 = cljs.core.PersistentHashMap.fromArrays(inst_54300,inst_54301);
var inst_54303 = worker.slack.request.call(null,"chat.postMessage",inst_54302);
var state_54305__$1 = state_54305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54305__$1,inst_54303);
} else {
return null;
}
}
});})(c__33728__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__){
return (function() {
var worker$slack$notify_$_state_machine__33335__auto__ = null;
var worker$slack$notify_$_state_machine__33335__auto____0 = (function (){
var statearr_54307 = [null,null,null,null,null,null,null];
(statearr_54307[(0)] = worker$slack$notify_$_state_machine__33335__auto__);

(statearr_54307[(1)] = (1));

return statearr_54307;
});
var worker$slack$notify_$_state_machine__33335__auto____1 = (function (state_54305){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_54305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e54308){if((e54308 instanceof Object)){
var ex__33338__auto__ = e54308;
var statearr_54309_54311 = state_54305;
(statearr_54309_54311[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54312 = state_54305;
state_54305 = G__54312;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
worker$slack$notify_$_state_machine__33335__auto__ = function(state_54305){
switch(arguments.length){
case 0:
return worker$slack$notify_$_state_machine__33335__auto____0.call(this);
case 1:
return worker$slack$notify_$_state_machine__33335__auto____1.call(this,state_54305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
worker$slack$notify_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = worker$slack$notify_$_state_machine__33335__auto____0;
worker$slack$notify_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = worker$slack$notify_$_state_machine__33335__auto____1;
return worker$slack$notify_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_54310 = f__33729__auto__.call(null);
(statearr_54310[(6)] = c__33728__auto__);

return statearr_54310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
}));
});
worker.slack.complete_pomodoro = cljs.core.juxt.call(null,worker.slack.stop_pomodoro,worker.slack.notify);

//# sourceMappingURL=slack.js.map?rel=1510147135180
