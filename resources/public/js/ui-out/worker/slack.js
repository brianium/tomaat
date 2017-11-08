// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.slack');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.uri.utils');
goog.require('data.core');
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
return cljs_http.client.get.call(null,worker.slack.url.call(null,action,params));
});
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
worker.slack.update_profile = (function worker$slack$update_profile(text,emoji){
return worker.slack.with_token.call(null,(function (p1__54058_SHARP_){
return worker.slack.request.call(null,"users.profile.set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),worker.slack.encode_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status_text","status_text",1311012961),text,new cljs.core.Keyword(null,"status_emoji","status_emoji",-223752679),emoji], null)),new cljs.core.Keyword(null,"token","token",-1211463215),p1__54058_SHARP_], null));
}));
});
worker.slack.start_pomodoro = (function worker$slack$start_pomodoro(event,id){
return worker.slack.update_profile.call(null,"pom party",":tomato:");
});
worker.slack.stop_pomodoro = (function worker$slack$stop_pomodoro(var_args){
var G__54060 = arguments.length;
switch (G__54060) {
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

worker.slack.notify = (function worker$slack$notify(){
return worker.slack.with_token.call(null,(function (token){
console.log(token);

var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_54077){
var state_val_54078 = (state_54077[(1)]);
if((state_val_54078 === (1))){
var inst_54062 = [new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_54063 = [token];
var inst_54064 = cljs.core.PersistentHashMap.fromArrays(inst_54062,inst_54063);
var inst_54065 = worker.slack.request.call(null,"auth.test",inst_54064);
var state_54077__$1 = state_54077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54077__$1,(2),inst_54065);
} else {
if((state_val_54078 === (2))){
var inst_54067 = (state_54077[(2)]);
var inst_54068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54069 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"user_id","user_id",993497112)];
var inst_54070 = (new cljs.core.PersistentVector(null,2,(5),inst_54068,inst_54069,null));
var inst_54071 = cljs.core.get_in.call(null,inst_54067,inst_54070);
var inst_54072 = [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"as_user","as_user",854393931),new cljs.core.Keyword(null,"icon_emoji","icon_emoji",106950163),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_54073 = [token,inst_54071,false,":tomato:","Pom complete! Time to take a break :sweat_smile:"];
var inst_54074 = cljs.core.PersistentHashMap.fromArrays(inst_54072,inst_54073);
var inst_54075 = worker.slack.request.call(null,"chat.postMessage",inst_54074);
var state_54077__$1 = state_54077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54077__$1,inst_54075);
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
var statearr_54079 = [null,null,null,null,null,null,null];
(statearr_54079[(0)] = worker$slack$notify_$_state_machine__33335__auto__);

(statearr_54079[(1)] = (1));

return statearr_54079;
});
var worker$slack$notify_$_state_machine__33335__auto____1 = (function (state_54077){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_54077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e54080){if((e54080 instanceof Object)){
var ex__33338__auto__ = e54080;
var statearr_54081_54083 = state_54077;
(statearr_54081_54083[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54084 = state_54077;
state_54077 = G__54084;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
worker$slack$notify_$_state_machine__33335__auto__ = function(state_54077){
switch(arguments.length){
case 0:
return worker$slack$notify_$_state_machine__33335__auto____0.call(this);
case 1:
return worker$slack$notify_$_state_machine__33335__auto____1.call(this,state_54077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
worker$slack$notify_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = worker$slack$notify_$_state_machine__33335__auto____0;
worker$slack$notify_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = worker$slack$notify_$_state_machine__33335__auto____1;
return worker$slack$notify_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_54082 = f__33729__auto__.call(null);
(statearr_54082[(6)] = c__33728__auto__);

return statearr_54082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
}));
});
worker.slack.complete_pomodoro = cljs.core.juxt.call(null,worker.slack.stop_pomodoro,worker.slack.notify);

//# sourceMappingURL=slack.js.map?rel=1510146015946
