// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38516){if((e38516 instanceof Error)){
var e = e38516;
return "Error: Unable to stringify";
} else {
throw e38516;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38519 = arguments.length;
switch (G__38519) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38517_SHARP_){
if(typeof p1__38517_SHARP_ === 'string'){
return p1__38517_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38517_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38522 = arguments.length;
var i__31350__auto___38523 = (0);
while(true){
if((i__31350__auto___38523 < len__31349__auto___38522)){
args__31356__auto__.push((arguments[i__31350__auto___38523]));

var G__38524 = (i__31350__auto___38523 + (1));
i__31350__auto___38523 = G__38524;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38521){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38521));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38526 = arguments.length;
var i__31350__auto___38527 = (0);
while(true){
if((i__31350__auto___38527 < len__31349__auto___38526)){
args__31356__auto__.push((arguments[i__31350__auto___38527]));

var G__38528 = (i__31350__auto___38527 + (1));
i__31350__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38525){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38529){
var map__38530 = p__38529;
var map__38530__$1 = ((((!((map__38530 == null)))?((((map__38530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38530):map__38530);
var message = cljs.core.get.call(null,map__38530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38530__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30072__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30060__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30060__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30060__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33665__auto___38609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___38609,ch){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___38609,ch){
return (function (state_38581){
var state_val_38582 = (state_38581[(1)]);
if((state_val_38582 === (7))){
var inst_38577 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38583_38610 = state_38581__$1;
(statearr_38583_38610[(2)] = inst_38577);

(statearr_38583_38610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (1))){
var state_38581__$1 = state_38581;
var statearr_38584_38611 = state_38581__$1;
(statearr_38584_38611[(2)] = null);

(statearr_38584_38611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (4))){
var inst_38534 = (state_38581[(7)]);
var inst_38534__$1 = (state_38581[(2)]);
var state_38581__$1 = (function (){var statearr_38585 = state_38581;
(statearr_38585[(7)] = inst_38534__$1);

return statearr_38585;
})();
if(cljs.core.truth_(inst_38534__$1)){
var statearr_38586_38612 = state_38581__$1;
(statearr_38586_38612[(1)] = (5));

} else {
var statearr_38587_38613 = state_38581__$1;
(statearr_38587_38613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (15))){
var inst_38541 = (state_38581[(8)]);
var inst_38556 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38541);
var inst_38557 = cljs.core.first.call(null,inst_38556);
var inst_38558 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38557);
var inst_38559 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38558)].join('');
var inst_38560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38559);
var state_38581__$1 = state_38581;
var statearr_38588_38614 = state_38581__$1;
(statearr_38588_38614[(2)] = inst_38560);

(statearr_38588_38614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (13))){
var inst_38565 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38589_38615 = state_38581__$1;
(statearr_38589_38615[(2)] = inst_38565);

(statearr_38589_38615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (6))){
var state_38581__$1 = state_38581;
var statearr_38590_38616 = state_38581__$1;
(statearr_38590_38616[(2)] = null);

(statearr_38590_38616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (17))){
var inst_38563 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38591_38617 = state_38581__$1;
(statearr_38591_38617[(2)] = inst_38563);

(statearr_38591_38617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (3))){
var inst_38579 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38581__$1,inst_38579);
} else {
if((state_val_38582 === (12))){
var inst_38540 = (state_38581[(9)]);
var inst_38554 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38540,opts);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38554)){
var statearr_38592_38618 = state_38581__$1;
(statearr_38592_38618[(1)] = (15));

} else {
var statearr_38593_38619 = state_38581__$1;
(statearr_38593_38619[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (2))){
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(4),ch);
} else {
if((state_val_38582 === (11))){
var inst_38541 = (state_38581[(8)]);
var inst_38546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38547 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38541);
var inst_38548 = cljs.core.async.timeout.call(null,(1000));
var inst_38549 = [inst_38547,inst_38548];
var inst_38550 = (new cljs.core.PersistentVector(null,2,(5),inst_38546,inst_38549,null));
var state_38581__$1 = state_38581;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38581__$1,(14),inst_38550);
} else {
if((state_val_38582 === (9))){
var inst_38541 = (state_38581[(8)]);
var inst_38567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38568 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38541);
var inst_38569 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38568);
var inst_38570 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38569)].join('');
var inst_38571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38570);
var state_38581__$1 = (function (){var statearr_38594 = state_38581;
(statearr_38594[(10)] = inst_38567);

return statearr_38594;
})();
var statearr_38595_38620 = state_38581__$1;
(statearr_38595_38620[(2)] = inst_38571);

(statearr_38595_38620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (5))){
var inst_38534 = (state_38581[(7)]);
var inst_38536 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38537 = (new cljs.core.PersistentArrayMap(null,2,inst_38536,null));
var inst_38538 = (new cljs.core.PersistentHashSet(null,inst_38537,null));
var inst_38539 = figwheel.client.focus_msgs.call(null,inst_38538,inst_38534);
var inst_38540 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38539);
var inst_38541 = cljs.core.first.call(null,inst_38539);
var inst_38542 = figwheel.client.autoload_QMARK_.call(null);
var state_38581__$1 = (function (){var statearr_38596 = state_38581;
(statearr_38596[(8)] = inst_38541);

(statearr_38596[(9)] = inst_38540);

return statearr_38596;
})();
if(cljs.core.truth_(inst_38542)){
var statearr_38597_38621 = state_38581__$1;
(statearr_38597_38621[(1)] = (8));

} else {
var statearr_38598_38622 = state_38581__$1;
(statearr_38598_38622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (14))){
var inst_38552 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38599_38623 = state_38581__$1;
(statearr_38599_38623[(2)] = inst_38552);

(statearr_38599_38623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (16))){
var state_38581__$1 = state_38581;
var statearr_38600_38624 = state_38581__$1;
(statearr_38600_38624[(2)] = null);

(statearr_38600_38624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (10))){
var inst_38573 = (state_38581[(2)]);
var state_38581__$1 = (function (){var statearr_38601 = state_38581;
(statearr_38601[(11)] = inst_38573);

return statearr_38601;
})();
var statearr_38602_38625 = state_38581__$1;
(statearr_38602_38625[(2)] = null);

(statearr_38602_38625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (8))){
var inst_38540 = (state_38581[(9)]);
var inst_38544 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38540,opts);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38544)){
var statearr_38603_38626 = state_38581__$1;
(statearr_38603_38626[(1)] = (11));

} else {
var statearr_38604_38627 = state_38581__$1;
(statearr_38604_38627[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33665__auto___38609,ch))
;
return ((function (switch__33280__auto__,c__33665__auto___38609,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_38605 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38605[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__);

(statearr_38605[(1)] = (1));

return statearr_38605;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1 = (function (state_38581){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38606){if((e38606 instanceof Object)){
var ex__33284__auto__ = e38606;
var statearr_38607_38628 = state_38581;
(statearr_38607_38628[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38629 = state_38581;
state_38581 = G__38629;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__ = function(state_38581){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1.call(this,state_38581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___38609,ch))
})();
var state__33667__auto__ = (function (){var statearr_38608 = f__33666__auto__.call(null);
(statearr_38608[(6)] = c__33665__auto___38609);

return statearr_38608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___38609,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38630_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38630_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38632 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38632){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38631){if((e38631 instanceof Error)){
var e = e38631;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38632], null));
} else {
var e = e38631;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38632))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38633){
var map__38634 = p__38633;
var map__38634__$1 = ((((!((map__38634 == null)))?((((map__38634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38634):map__38634);
var opts = map__38634__$1;
var build_id = cljs.core.get.call(null,map__38634__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38634,map__38634__$1,opts,build_id){
return (function (p__38636){
var vec__38637 = p__38636;
var seq__38638 = cljs.core.seq.call(null,vec__38637);
var first__38639 = cljs.core.first.call(null,seq__38638);
var seq__38638__$1 = cljs.core.next.call(null,seq__38638);
var map__38640 = first__38639;
var map__38640__$1 = ((((!((map__38640 == null)))?((((map__38640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38640):map__38640);
var msg = map__38640__$1;
var msg_name = cljs.core.get.call(null,map__38640__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38638__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38637,seq__38638,first__38639,seq__38638__$1,map__38640,map__38640__$1,msg,msg_name,_,map__38634,map__38634__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38637,seq__38638,first__38639,seq__38638__$1,map__38640,map__38640__$1,msg,msg_name,_,map__38634,map__38634__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38634,map__38634__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38642){
var vec__38643 = p__38642;
var seq__38644 = cljs.core.seq.call(null,vec__38643);
var first__38645 = cljs.core.first.call(null,seq__38644);
var seq__38644__$1 = cljs.core.next.call(null,seq__38644);
var map__38646 = first__38645;
var map__38646__$1 = ((((!((map__38646 == null)))?((((map__38646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38646):map__38646);
var msg = map__38646__$1;
var msg_name = cljs.core.get.call(null,map__38646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38644__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38648){
var map__38649 = p__38648;
var map__38649__$1 = ((((!((map__38649 == null)))?((((map__38649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38649):map__38649);
var on_compile_warning = cljs.core.get.call(null,map__38649__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38649__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38649,map__38649__$1,on_compile_warning,on_compile_fail){
return (function (p__38651){
var vec__38652 = p__38651;
var seq__38653 = cljs.core.seq.call(null,vec__38652);
var first__38654 = cljs.core.first.call(null,seq__38653);
var seq__38653__$1 = cljs.core.next.call(null,seq__38653);
var map__38655 = first__38654;
var map__38655__$1 = ((((!((map__38655 == null)))?((((map__38655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38655):map__38655);
var msg = map__38655__$1;
var msg_name = cljs.core.get.call(null,map__38655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38653__$1;
var pred__38657 = cljs.core._EQ_;
var expr__38658 = msg_name;
if(cljs.core.truth_(pred__38657.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38658))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38657.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38658))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38649,map__38649__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,msg_hist,msg_names,msg){
return (function (state_38747){
var state_val_38748 = (state_38747[(1)]);
if((state_val_38748 === (7))){
var inst_38667 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38667)){
var statearr_38749_38796 = state_38747__$1;
(statearr_38749_38796[(1)] = (8));

} else {
var statearr_38750_38797 = state_38747__$1;
(statearr_38750_38797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (20))){
var inst_38741 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38751_38798 = state_38747__$1;
(statearr_38751_38798[(2)] = inst_38741);

(statearr_38751_38798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (27))){
var inst_38737 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38752_38799 = state_38747__$1;
(statearr_38752_38799[(2)] = inst_38737);

(statearr_38752_38799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (1))){
var inst_38660 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38660)){
var statearr_38753_38800 = state_38747__$1;
(statearr_38753_38800[(1)] = (2));

} else {
var statearr_38754_38801 = state_38747__$1;
(statearr_38754_38801[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (24))){
var inst_38739 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38755_38802 = state_38747__$1;
(statearr_38755_38802[(2)] = inst_38739);

(statearr_38755_38802[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (4))){
var inst_38745 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38747__$1,inst_38745);
} else {
if((state_val_38748 === (15))){
var inst_38743 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38756_38803 = state_38747__$1;
(statearr_38756_38803[(2)] = inst_38743);

(statearr_38756_38803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (21))){
var inst_38696 = (state_38747[(2)]);
var inst_38697 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38698 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38697);
var state_38747__$1 = (function (){var statearr_38757 = state_38747;
(statearr_38757[(7)] = inst_38696);

return statearr_38757;
})();
var statearr_38758_38804 = state_38747__$1;
(statearr_38758_38804[(2)] = inst_38698);

(statearr_38758_38804[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (31))){
var inst_38726 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38726)){
var statearr_38759_38805 = state_38747__$1;
(statearr_38759_38805[(1)] = (34));

} else {
var statearr_38760_38806 = state_38747__$1;
(statearr_38760_38806[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (32))){
var inst_38735 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38761_38807 = state_38747__$1;
(statearr_38761_38807[(2)] = inst_38735);

(statearr_38761_38807[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (33))){
var inst_38722 = (state_38747[(2)]);
var inst_38723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38724 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38723);
var state_38747__$1 = (function (){var statearr_38762 = state_38747;
(statearr_38762[(8)] = inst_38722);

return statearr_38762;
})();
var statearr_38763_38808 = state_38747__$1;
(statearr_38763_38808[(2)] = inst_38724);

(statearr_38763_38808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (13))){
var inst_38681 = figwheel.client.heads_up.clear.call(null);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(16),inst_38681);
} else {
if((state_val_38748 === (22))){
var inst_38702 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38703 = figwheel.client.heads_up.append_warning_message.call(null,inst_38702);
var state_38747__$1 = state_38747;
var statearr_38764_38809 = state_38747__$1;
(statearr_38764_38809[(2)] = inst_38703);

(statearr_38764_38809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (36))){
var inst_38733 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38765_38810 = state_38747__$1;
(statearr_38765_38810[(2)] = inst_38733);

(statearr_38765_38810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (29))){
var inst_38713 = (state_38747[(2)]);
var inst_38714 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38715 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38714);
var state_38747__$1 = (function (){var statearr_38766 = state_38747;
(statearr_38766[(9)] = inst_38713);

return statearr_38766;
})();
var statearr_38767_38811 = state_38747__$1;
(statearr_38767_38811[(2)] = inst_38715);

(statearr_38767_38811[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (6))){
var inst_38662 = (state_38747[(10)]);
var state_38747__$1 = state_38747;
var statearr_38768_38812 = state_38747__$1;
(statearr_38768_38812[(2)] = inst_38662);

(statearr_38768_38812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (28))){
var inst_38709 = (state_38747[(2)]);
var inst_38710 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38711 = figwheel.client.heads_up.display_warning.call(null,inst_38710);
var state_38747__$1 = (function (){var statearr_38769 = state_38747;
(statearr_38769[(11)] = inst_38709);

return statearr_38769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(29),inst_38711);
} else {
if((state_val_38748 === (25))){
var inst_38707 = figwheel.client.heads_up.clear.call(null);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(28),inst_38707);
} else {
if((state_val_38748 === (34))){
var inst_38728 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(37),inst_38728);
} else {
if((state_val_38748 === (17))){
var inst_38687 = (state_38747[(2)]);
var inst_38688 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38688);
var state_38747__$1 = (function (){var statearr_38770 = state_38747;
(statearr_38770[(12)] = inst_38687);

return statearr_38770;
})();
var statearr_38771_38813 = state_38747__$1;
(statearr_38771_38813[(2)] = inst_38689);

(statearr_38771_38813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (3))){
var inst_38679 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38679)){
var statearr_38772_38814 = state_38747__$1;
(statearr_38772_38814[(1)] = (13));

} else {
var statearr_38773_38815 = state_38747__$1;
(statearr_38773_38815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (12))){
var inst_38675 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38774_38816 = state_38747__$1;
(statearr_38774_38816[(2)] = inst_38675);

(statearr_38774_38816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (2))){
var inst_38662 = (state_38747[(10)]);
var inst_38662__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38747__$1 = (function (){var statearr_38775 = state_38747;
(statearr_38775[(10)] = inst_38662__$1);

return statearr_38775;
})();
if(cljs.core.truth_(inst_38662__$1)){
var statearr_38776_38817 = state_38747__$1;
(statearr_38776_38817[(1)] = (5));

} else {
var statearr_38777_38818 = state_38747__$1;
(statearr_38777_38818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (23))){
var inst_38705 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38705)){
var statearr_38778_38819 = state_38747__$1;
(statearr_38778_38819[(1)] = (25));

} else {
var statearr_38779_38820 = state_38747__$1;
(statearr_38779_38820[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (35))){
var state_38747__$1 = state_38747;
var statearr_38780_38821 = state_38747__$1;
(statearr_38780_38821[(2)] = null);

(statearr_38780_38821[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (19))){
var inst_38700 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38700)){
var statearr_38781_38822 = state_38747__$1;
(statearr_38781_38822[(1)] = (22));

} else {
var statearr_38782_38823 = state_38747__$1;
(statearr_38782_38823[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (11))){
var inst_38671 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38783_38824 = state_38747__$1;
(statearr_38783_38824[(2)] = inst_38671);

(statearr_38783_38824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (9))){
var inst_38673 = figwheel.client.heads_up.clear.call(null);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(12),inst_38673);
} else {
if((state_val_38748 === (5))){
var inst_38664 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38747__$1 = state_38747;
var statearr_38784_38825 = state_38747__$1;
(statearr_38784_38825[(2)] = inst_38664);

(statearr_38784_38825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (14))){
var inst_38691 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38691)){
var statearr_38785_38826 = state_38747__$1;
(statearr_38785_38826[(1)] = (18));

} else {
var statearr_38786_38827 = state_38747__$1;
(statearr_38786_38827[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (26))){
var inst_38717 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38747__$1 = state_38747;
if(cljs.core.truth_(inst_38717)){
var statearr_38787_38828 = state_38747__$1;
(statearr_38787_38828[(1)] = (30));

} else {
var statearr_38788_38829 = state_38747__$1;
(statearr_38788_38829[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (16))){
var inst_38683 = (state_38747[(2)]);
var inst_38684 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38685 = figwheel.client.heads_up.display_exception.call(null,inst_38684);
var state_38747__$1 = (function (){var statearr_38789 = state_38747;
(statearr_38789[(13)] = inst_38683);

return statearr_38789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(17),inst_38685);
} else {
if((state_val_38748 === (30))){
var inst_38719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38720 = figwheel.client.heads_up.display_warning.call(null,inst_38719);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(33),inst_38720);
} else {
if((state_val_38748 === (10))){
var inst_38677 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38790_38830 = state_38747__$1;
(statearr_38790_38830[(2)] = inst_38677);

(statearr_38790_38830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (18))){
var inst_38693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38694 = figwheel.client.heads_up.display_exception.call(null,inst_38693);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(21),inst_38694);
} else {
if((state_val_38748 === (37))){
var inst_38730 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38791_38831 = state_38747__$1;
(statearr_38791_38831[(2)] = inst_38730);

(statearr_38791_38831[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (8))){
var inst_38669 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(11),inst_38669);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33665__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33280__auto__,c__33665__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0 = (function (){
var statearr_38792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38792[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__);

(statearr_38792[(1)] = (1));

return statearr_38792;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1 = (function (state_38747){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38793){if((e38793 instanceof Object)){
var ex__33284__auto__ = e38793;
var statearr_38794_38832 = state_38747;
(statearr_38794_38832[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38833 = state_38747;
state_38747 = G__38833;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__ = function(state_38747){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1.call(this,state_38747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,msg_hist,msg_names,msg))
})();
var state__33667__auto__ = (function (){var statearr_38795 = f__33666__auto__.call(null);
(statearr_38795[(6)] = c__33665__auto__);

return statearr_38795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,msg_hist,msg_names,msg))
);

return c__33665__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33665__auto___38862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___38862,ch){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___38862,ch){
return (function (state_38848){
var state_val_38849 = (state_38848[(1)]);
if((state_val_38849 === (1))){
var state_38848__$1 = state_38848;
var statearr_38850_38863 = state_38848__$1;
(statearr_38850_38863[(2)] = null);

(statearr_38850_38863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (2))){
var state_38848__$1 = state_38848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38848__$1,(4),ch);
} else {
if((state_val_38849 === (3))){
var inst_38846 = (state_38848[(2)]);
var state_38848__$1 = state_38848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38848__$1,inst_38846);
} else {
if((state_val_38849 === (4))){
var inst_38836 = (state_38848[(7)]);
var inst_38836__$1 = (state_38848[(2)]);
var state_38848__$1 = (function (){var statearr_38851 = state_38848;
(statearr_38851[(7)] = inst_38836__$1);

return statearr_38851;
})();
if(cljs.core.truth_(inst_38836__$1)){
var statearr_38852_38864 = state_38848__$1;
(statearr_38852_38864[(1)] = (5));

} else {
var statearr_38853_38865 = state_38848__$1;
(statearr_38853_38865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (5))){
var inst_38836 = (state_38848[(7)]);
var inst_38838 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38836);
var state_38848__$1 = state_38848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38848__$1,(8),inst_38838);
} else {
if((state_val_38849 === (6))){
var state_38848__$1 = state_38848;
var statearr_38854_38866 = state_38848__$1;
(statearr_38854_38866[(2)] = null);

(statearr_38854_38866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (7))){
var inst_38844 = (state_38848[(2)]);
var state_38848__$1 = state_38848;
var statearr_38855_38867 = state_38848__$1;
(statearr_38855_38867[(2)] = inst_38844);

(statearr_38855_38867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (8))){
var inst_38840 = (state_38848[(2)]);
var state_38848__$1 = (function (){var statearr_38856 = state_38848;
(statearr_38856[(8)] = inst_38840);

return statearr_38856;
})();
var statearr_38857_38868 = state_38848__$1;
(statearr_38857_38868[(2)] = null);

(statearr_38857_38868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33665__auto___38862,ch))
;
return ((function (switch__33280__auto__,c__33665__auto___38862,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_38858 = [null,null,null,null,null,null,null,null,null];
(statearr_38858[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33281__auto__);

(statearr_38858[(1)] = (1));

return statearr_38858;
});
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1 = (function (state_38848){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38859){if((e38859 instanceof Object)){
var ex__33284__auto__ = e38859;
var statearr_38860_38869 = state_38848;
(statearr_38860_38869[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38870 = state_38848;
state_38848 = G__38870;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__ = function(state_38848){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1.call(this,state_38848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___38862,ch))
})();
var state__33667__auto__ = (function (){var statearr_38861 = f__33666__auto__.call(null);
(statearr_38861[(6)] = c__33665__auto___38862);

return statearr_38861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___38862,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__){
return (function (state_38876){
var state_val_38877 = (state_38876[(1)]);
if((state_val_38877 === (1))){
var inst_38871 = cljs.core.async.timeout.call(null,(3000));
var state_38876__$1 = state_38876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38876__$1,(2),inst_38871);
} else {
if((state_val_38877 === (2))){
var inst_38873 = (state_38876[(2)]);
var inst_38874 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38876__$1 = (function (){var statearr_38878 = state_38876;
(statearr_38878[(7)] = inst_38873);

return statearr_38878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38876__$1,inst_38874);
} else {
return null;
}
}
});})(c__33665__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_38879 = [null,null,null,null,null,null,null,null];
(statearr_38879[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__);

(statearr_38879[(1)] = (1));

return statearr_38879;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1 = (function (state_38876){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38880){if((e38880 instanceof Object)){
var ex__33284__auto__ = e38880;
var statearr_38881_38883 = state_38876;
(statearr_38881_38883[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38884 = state_38876;
state_38876 = G__38884;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__ = function(state_38876){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1.call(this,state_38876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_38882 = f__33666__auto__.call(null);
(statearr_38882[(6)] = c__33665__auto__);

return statearr_38882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,figwheel_version,temp__5278__auto__){
return (function (state_38891){
var state_val_38892 = (state_38891[(1)]);
if((state_val_38892 === (1))){
var inst_38885 = cljs.core.async.timeout.call(null,(2000));
var state_38891__$1 = state_38891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38891__$1,(2),inst_38885);
} else {
if((state_val_38892 === (2))){
var inst_38887 = (state_38891[(2)]);
var inst_38888 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38889 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38888);
var state_38891__$1 = (function (){var statearr_38893 = state_38891;
(statearr_38893[(7)] = inst_38887);

return statearr_38893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38891__$1,inst_38889);
} else {
return null;
}
}
});})(c__33665__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_38894 = [null,null,null,null,null,null,null,null];
(statearr_38894[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__);

(statearr_38894[(1)] = (1));

return statearr_38894;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1 = (function (state_38891){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38895){if((e38895 instanceof Object)){
var ex__33284__auto__ = e38895;
var statearr_38896_38898 = state_38891;
(statearr_38896_38898[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38899 = state_38891;
state_38891 = G__38899;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__ = function(state_38891){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1.call(this,state_38891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33667__auto__ = (function (){var statearr_38897 = f__33666__auto__.call(null);
(statearr_38897[(6)] = c__33665__auto__);

return statearr_38897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,figwheel_version,temp__5278__auto__))
);

return c__33665__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38900){
var map__38901 = p__38900;
var map__38901__$1 = ((((!((map__38901 == null)))?((((map__38901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38901):map__38901);
var file = cljs.core.get.call(null,map__38901__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38901__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38901__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38903 = "";
var G__38903__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38903),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38903);
var G__38903__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38903__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38903__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38903__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38903__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38904){
var map__38905 = p__38904;
var map__38905__$1 = ((((!((map__38905 == null)))?((((map__38905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38905):map__38905);
var ed = map__38905__$1;
var formatted_exception = cljs.core.get.call(null,map__38905__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38905__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38905__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38907_38911 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38908_38912 = null;
var count__38909_38913 = (0);
var i__38910_38914 = (0);
while(true){
if((i__38910_38914 < count__38909_38913)){
var msg_38915 = cljs.core._nth.call(null,chunk__38908_38912,i__38910_38914);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38915);

var G__38916 = seq__38907_38911;
var G__38917 = chunk__38908_38912;
var G__38918 = count__38909_38913;
var G__38919 = (i__38910_38914 + (1));
seq__38907_38911 = G__38916;
chunk__38908_38912 = G__38917;
count__38909_38913 = G__38918;
i__38910_38914 = G__38919;
continue;
} else {
var temp__5278__auto___38920 = cljs.core.seq.call(null,seq__38907_38911);
if(temp__5278__auto___38920){
var seq__38907_38921__$1 = temp__5278__auto___38920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38907_38921__$1)){
var c__31003__auto___38922 = cljs.core.chunk_first.call(null,seq__38907_38921__$1);
var G__38923 = cljs.core.chunk_rest.call(null,seq__38907_38921__$1);
var G__38924 = c__31003__auto___38922;
var G__38925 = cljs.core.count.call(null,c__31003__auto___38922);
var G__38926 = (0);
seq__38907_38911 = G__38923;
chunk__38908_38912 = G__38924;
count__38909_38913 = G__38925;
i__38910_38914 = G__38926;
continue;
} else {
var msg_38927 = cljs.core.first.call(null,seq__38907_38921__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38927);

var G__38928 = cljs.core.next.call(null,seq__38907_38921__$1);
var G__38929 = null;
var G__38930 = (0);
var G__38931 = (0);
seq__38907_38911 = G__38928;
chunk__38908_38912 = G__38929;
count__38909_38913 = G__38930;
i__38910_38914 = G__38931;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38932){
var map__38933 = p__38932;
var map__38933__$1 = ((((!((map__38933 == null)))?((((map__38933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38933):map__38933);
var w = map__38933__$1;
var message = cljs.core.get.call(null,map__38933__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/main-out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/main-out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30060__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30060__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38935 = cljs.core.seq.call(null,plugins);
var chunk__38936 = null;
var count__38937 = (0);
var i__38938 = (0);
while(true){
if((i__38938 < count__38937)){
var vec__38939 = cljs.core._nth.call(null,chunk__38936,i__38938);
var k = cljs.core.nth.call(null,vec__38939,(0),null);
var plugin = cljs.core.nth.call(null,vec__38939,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38945 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38935,chunk__38936,count__38937,i__38938,pl_38945,vec__38939,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38945.call(null,msg_hist);
});})(seq__38935,chunk__38936,count__38937,i__38938,pl_38945,vec__38939,k,plugin))
);
} else {
}

var G__38946 = seq__38935;
var G__38947 = chunk__38936;
var G__38948 = count__38937;
var G__38949 = (i__38938 + (1));
seq__38935 = G__38946;
chunk__38936 = G__38947;
count__38937 = G__38948;
i__38938 = G__38949;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38935);
if(temp__5278__auto__){
var seq__38935__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38935__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__38935__$1);
var G__38950 = cljs.core.chunk_rest.call(null,seq__38935__$1);
var G__38951 = c__31003__auto__;
var G__38952 = cljs.core.count.call(null,c__31003__auto__);
var G__38953 = (0);
seq__38935 = G__38950;
chunk__38936 = G__38951;
count__38937 = G__38952;
i__38938 = G__38953;
continue;
} else {
var vec__38942 = cljs.core.first.call(null,seq__38935__$1);
var k = cljs.core.nth.call(null,vec__38942,(0),null);
var plugin = cljs.core.nth.call(null,vec__38942,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38954 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38935,chunk__38936,count__38937,i__38938,pl_38954,vec__38942,k,plugin,seq__38935__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38954.call(null,msg_hist);
});})(seq__38935,chunk__38936,count__38937,i__38938,pl_38954,vec__38942,k,plugin,seq__38935__$1,temp__5278__auto__))
);
} else {
}

var G__38955 = cljs.core.next.call(null,seq__38935__$1);
var G__38956 = null;
var G__38957 = (0);
var G__38958 = (0);
seq__38935 = G__38955;
chunk__38936 = G__38956;
count__38937 = G__38957;
i__38938 = G__38958;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38960 = arguments.length;
switch (G__38960) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38961_38966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38962_38967 = null;
var count__38963_38968 = (0);
var i__38964_38969 = (0);
while(true){
if((i__38964_38969 < count__38963_38968)){
var msg_38970 = cljs.core._nth.call(null,chunk__38962_38967,i__38964_38969);
figwheel.client.socket.handle_incoming_message.call(null,msg_38970);

var G__38971 = seq__38961_38966;
var G__38972 = chunk__38962_38967;
var G__38973 = count__38963_38968;
var G__38974 = (i__38964_38969 + (1));
seq__38961_38966 = G__38971;
chunk__38962_38967 = G__38972;
count__38963_38968 = G__38973;
i__38964_38969 = G__38974;
continue;
} else {
var temp__5278__auto___38975 = cljs.core.seq.call(null,seq__38961_38966);
if(temp__5278__auto___38975){
var seq__38961_38976__$1 = temp__5278__auto___38975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38961_38976__$1)){
var c__31003__auto___38977 = cljs.core.chunk_first.call(null,seq__38961_38976__$1);
var G__38978 = cljs.core.chunk_rest.call(null,seq__38961_38976__$1);
var G__38979 = c__31003__auto___38977;
var G__38980 = cljs.core.count.call(null,c__31003__auto___38977);
var G__38981 = (0);
seq__38961_38966 = G__38978;
chunk__38962_38967 = G__38979;
count__38963_38968 = G__38980;
i__38964_38969 = G__38981;
continue;
} else {
var msg_38982 = cljs.core.first.call(null,seq__38961_38976__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38982);

var G__38983 = cljs.core.next.call(null,seq__38961_38976__$1);
var G__38984 = null;
var G__38985 = (0);
var G__38986 = (0);
seq__38961_38966 = G__38983;
chunk__38962_38967 = G__38984;
count__38963_38968 = G__38985;
i__38964_38969 = G__38986;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38991 = arguments.length;
var i__31350__auto___38992 = (0);
while(true){
if((i__31350__auto___38992 < len__31349__auto___38991)){
args__31356__auto__.push((arguments[i__31350__auto___38992]));

var G__38993 = (i__31350__auto___38992 + (1));
i__31350__auto___38992 = G__38993;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38988){
var map__38989 = p__38988;
var map__38989__$1 = ((((!((map__38989 == null)))?((((map__38989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38989):map__38989);
var opts = map__38989__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38987){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38987));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38994){if((e38994 instanceof Error)){
var e = e38994;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38994;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38995){
var map__38996 = p__38995;
var map__38996__$1 = ((((!((map__38996 == null)))?((((map__38996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38996):map__38996);
var msg_name = cljs.core.get.call(null,map__38996__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510229216673
