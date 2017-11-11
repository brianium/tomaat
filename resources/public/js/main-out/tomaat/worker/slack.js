// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.worker.slack');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.uri.utils');
goog.require('tomaat.data');
/**
 * Creates encoded query string params from a hash map
 */
tomaat.worker.slack.query = (function tomaat$worker$slack$query(params){
return goog.uri.utils.appendParamsFromMap("",cljs.core.clj__GT_js.call(null,params));
});
/**
 * Converts a hash map to json and encodes the whole structure
 */
tomaat.worker.slack.encode_json = (function tomaat$worker$slack$encode_json(data){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data));
});
/**
 * Create a slack api url
 */
tomaat.worker.slack.url = (function tomaat$worker$slack$url(action,params){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(["https://slack.com/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tomaat.worker.slack.query.call(null,params))].join('');
});
/**
 * Performs an http get request and returns a core.async channel
 */
tomaat.worker.slack.request = (function tomaat$worker$slack$request(action,params){
return cljs_http.client.get.call(null,tomaat.worker.slack.url.call(null,action,params));
});
/**
 * Executes the given function if a slack token has been stored
 */
tomaat.worker.slack.with_token = (function tomaat$worker$slack$with_token(fn_request){
var settings = tomaat.data.read.call(null);
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
tomaat.worker.slack.update_profile = (function tomaat$worker$slack$update_profile(text,emoji){
return tomaat.worker.slack.with_token.call(null,(function (p1__39373_SHARP_){
return tomaat.worker.slack.request.call(null,"users.profile.set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),tomaat.worker.slack.encode_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status_text","status_text",1311012961),text,new cljs.core.Keyword(null,"status_emoji","status_emoji",-223752679),emoji], null)),new cljs.core.Keyword(null,"token","token",-1211463215),p1__39373_SHARP_], null));
}));
});
/**
 * Updates the token user's profile with pom text and a tomato!
 */
tomaat.worker.slack.start_pomodoro = (function tomaat$worker$slack$start_pomodoro(event,id){
return tomaat.worker.slack.update_profile.call(null,"pom party",":tomato:");
});
/**
 * Stopping the pomodoro clears the user profile of any pom related business
 */
tomaat.worker.slack.stop_pomodoro = (function tomaat$worker$slack$stop_pomodoro(var_args){
var G__39376 = arguments.length;
switch (G__39376) {
case 0:
return tomaat.worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return tomaat.worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tomaat.worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$0 = (function (){
return tomaat.worker.slack.update_profile.call(null,"","");
});

tomaat.worker.slack.stop_pomodoro.cljs$core$IFn$_invoke$arity$2 = (function (event,id){
return tomaat.worker.slack.stop_pomodoro.call(null);
});

tomaat.worker.slack.stop_pomodoro.cljs$lang$maxFixedArity = 2;

/**
 * Notifies the user's slackbot channel that the pom is complete and it's time
 *   to take a break from all their labors.
 */
tomaat.worker.slack.notify = (function tomaat$worker$slack$notify(){
return tomaat.worker.slack.with_token.call(null,(function (token){
console.log(token);

var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__){
return (function (state_39401){
var state_val_39402 = (state_39401[(1)]);
if((state_val_39402 === (1))){
var inst_39386 = [new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_39387 = [token];
var inst_39388 = cljs.core.PersistentHashMap.fromArrays(inst_39386,inst_39387);
var inst_39389 = tomaat.worker.slack.request.call(null,"auth.test",inst_39388);
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39401__$1,(2),inst_39389);
} else {
if((state_val_39402 === (2))){
var inst_39391 = (state_39401[(2)]);
var inst_39392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39393 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"user_id","user_id",993497112)];
var inst_39394 = (new cljs.core.PersistentVector(null,2,(5),inst_39392,inst_39393,null));
var inst_39395 = cljs.core.get_in.call(null,inst_39391,inst_39394);
var inst_39396 = [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"as_user","as_user",854393931),new cljs.core.Keyword(null,"icon_emoji","icon_emoji",106950163),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_39397 = [token,inst_39395,false,":tomato:","Pom complete! Time to take a break :sweat_smile:"];
var inst_39398 = cljs.core.PersistentHashMap.fromArrays(inst_39396,inst_39397);
var inst_39399 = tomaat.worker.slack.request.call(null,"chat.postMessage",inst_39398);
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39401__$1,inst_39399);
} else {
return null;
}
}
});})(c__33952__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__){
return (function() {
var tomaat$worker$slack$notify_$_state_machine__33608__auto__ = null;
var tomaat$worker$slack$notify_$_state_machine__33608__auto____0 = (function (){
var statearr_39407 = [null,null,null,null,null,null,null];
(statearr_39407[(0)] = tomaat$worker$slack$notify_$_state_machine__33608__auto__);

(statearr_39407[(1)] = (1));

return statearr_39407;
});
var tomaat$worker$slack$notify_$_state_machine__33608__auto____1 = (function (state_39401){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39409){if((e39409 instanceof Object)){
var ex__33611__auto__ = e39409;
var statearr_39410_39423 = state_39401;
(statearr_39410_39423[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39424 = state_39401;
state_39401 = G__39424;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
tomaat$worker$slack$notify_$_state_machine__33608__auto__ = function(state_39401){
switch(arguments.length){
case 0:
return tomaat$worker$slack$notify_$_state_machine__33608__auto____0.call(this);
case 1:
return tomaat$worker$slack$notify_$_state_machine__33608__auto____1.call(this,state_39401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tomaat$worker$slack$notify_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = tomaat$worker$slack$notify_$_state_machine__33608__auto____0;
tomaat$worker$slack$notify_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = tomaat$worker$slack$notify_$_state_machine__33608__auto____1;
return tomaat$worker$slack$notify_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_39414 = f__33953__auto__.call(null);
(statearr_39414[(6)] = c__33952__auto__);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
}));
});
tomaat.worker.slack.complete_pomodoro = cljs.core.juxt.call(null,tomaat.worker.slack.stop_pomodoro,tomaat.worker.slack.notify);

//# sourceMappingURL=slack.js.map?rel=1510360382862
