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
return tomaat.worker.slack.with_token.call(null,(function (p1__51101_SHARP_){
return tomaat.worker.slack.request.call(null,"users.profile.set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),tomaat.worker.slack.encode_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status_text","status_text",1311012961),text,new cljs.core.Keyword(null,"status_emoji","status_emoji",-223752679),emoji], null)),new cljs.core.Keyword(null,"token","token",-1211463215),p1__51101_SHARP_], null));
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
var G__51108 = arguments.length;
switch (G__51108) {
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
return (function (state_51128){
var state_val_51129 = (state_51128[(1)]);
if((state_val_51129 === (1))){
var inst_51110 = [new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_51111 = [token];
var inst_51112 = cljs.core.PersistentHashMap.fromArrays(inst_51110,inst_51111);
var inst_51113 = tomaat.worker.slack.request.call(null,"auth.test",inst_51112);
var state_51128__$1 = state_51128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51128__$1,(2),inst_51113);
} else {
if((state_val_51129 === (2))){
var inst_51115 = (state_51128[(2)]);
var inst_51116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51120 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"user_id","user_id",993497112)];
var inst_51121 = (new cljs.core.PersistentVector(null,2,(5),inst_51116,inst_51120,null));
var inst_51122 = cljs.core.get_in.call(null,inst_51115,inst_51121);
var inst_51123 = [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"as_user","as_user",854393931),new cljs.core.Keyword(null,"icon_emoji","icon_emoji",106950163),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_51124 = [token,inst_51122,false,":tomato:","Pom complete! Time to take a break :sweat_smile:"];
var inst_51125 = cljs.core.PersistentHashMap.fromArrays(inst_51123,inst_51124);
var inst_51126 = tomaat.worker.slack.request.call(null,"chat.postMessage",inst_51125);
var state_51128__$1 = state_51128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51128__$1,inst_51126);
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
var statearr_51143 = [null,null,null,null,null,null,null];
(statearr_51143[(0)] = tomaat$worker$slack$notify_$_state_machine__33608__auto__);

(statearr_51143[(1)] = (1));

return statearr_51143;
});
var tomaat$worker$slack$notify_$_state_machine__33608__auto____1 = (function (state_51128){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_51128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e51144){if((e51144 instanceof Object)){
var ex__33611__auto__ = e51144;
var statearr_51145_51155 = state_51128;
(statearr_51145_51155[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51176 = state_51128;
state_51128 = G__51176;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
tomaat$worker$slack$notify_$_state_machine__33608__auto__ = function(state_51128){
switch(arguments.length){
case 0:
return tomaat$worker$slack$notify_$_state_machine__33608__auto____0.call(this);
case 1:
return tomaat$worker$slack$notify_$_state_machine__33608__auto____1.call(this,state_51128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tomaat$worker$slack$notify_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = tomaat$worker$slack$notify_$_state_machine__33608__auto____0;
tomaat$worker$slack$notify_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = tomaat$worker$slack$notify_$_state_machine__33608__auto____1;
return tomaat$worker$slack$notify_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_51146 = f__33953__auto__.call(null);
(statearr_51146[(6)] = c__33952__auto__);

return statearr_51146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
}));
});
tomaat.worker.slack.complete_pomodoro = cljs.core.juxt.call(null,tomaat.worker.slack.stop_pomodoro,tomaat.worker.slack.notify);

//# sourceMappingURL=slack.js.map?rel=1510360406286
