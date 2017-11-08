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
}catch (e38529){if((e38529 instanceof Error)){
var e = e38529;
return "Error: Unable to stringify";
} else {
throw e38529;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38532 = arguments.length;
switch (G__38532) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38530_SHARP_){
if(typeof p1__38530_SHARP_ === 'string'){
return p1__38530_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38530_SHARP_);
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
var len__31349__auto___38535 = arguments.length;
var i__31350__auto___38536 = (0);
while(true){
if((i__31350__auto___38536 < len__31349__auto___38535)){
args__31356__auto__.push((arguments[i__31350__auto___38536]));

var G__38537 = (i__31350__auto___38536 + (1));
i__31350__auto___38536 = G__38537;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38534){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38534));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___38539 = arguments.length;
var i__31350__auto___38540 = (0);
while(true){
if((i__31350__auto___38540 < len__31349__auto___38539)){
args__31356__auto__.push((arguments[i__31350__auto___38540]));

var G__38541 = (i__31350__auto___38540 + (1));
i__31350__auto___38540 = G__38541;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38538){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38538));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38542){
var map__38543 = p__38542;
var map__38543__$1 = ((((!((map__38543 == null)))?((((map__38543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38543):map__38543);
var message = cljs.core.get.call(null,map__38543__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38543__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33728__auto___38622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___38622,ch){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___38622,ch){
return (function (state_38594){
var state_val_38595 = (state_38594[(1)]);
if((state_val_38595 === (7))){
var inst_38590 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
var statearr_38596_38623 = state_38594__$1;
(statearr_38596_38623[(2)] = inst_38590);

(statearr_38596_38623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (1))){
var state_38594__$1 = state_38594;
var statearr_38597_38624 = state_38594__$1;
(statearr_38597_38624[(2)] = null);

(statearr_38597_38624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (4))){
var inst_38547 = (state_38594[(7)]);
var inst_38547__$1 = (state_38594[(2)]);
var state_38594__$1 = (function (){var statearr_38598 = state_38594;
(statearr_38598[(7)] = inst_38547__$1);

return statearr_38598;
})();
if(cljs.core.truth_(inst_38547__$1)){
var statearr_38599_38625 = state_38594__$1;
(statearr_38599_38625[(1)] = (5));

} else {
var statearr_38600_38626 = state_38594__$1;
(statearr_38600_38626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (15))){
var inst_38554 = (state_38594[(8)]);
var inst_38569 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38554);
var inst_38570 = cljs.core.first.call(null,inst_38569);
var inst_38571 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38570);
var inst_38572 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38571)].join('');
var inst_38573 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38572);
var state_38594__$1 = state_38594;
var statearr_38601_38627 = state_38594__$1;
(statearr_38601_38627[(2)] = inst_38573);

(statearr_38601_38627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (13))){
var inst_38578 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
var statearr_38602_38628 = state_38594__$1;
(statearr_38602_38628[(2)] = inst_38578);

(statearr_38602_38628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (6))){
var state_38594__$1 = state_38594;
var statearr_38603_38629 = state_38594__$1;
(statearr_38603_38629[(2)] = null);

(statearr_38603_38629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (17))){
var inst_38576 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
var statearr_38604_38630 = state_38594__$1;
(statearr_38604_38630[(2)] = inst_38576);

(statearr_38604_38630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (3))){
var inst_38592 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38594__$1,inst_38592);
} else {
if((state_val_38595 === (12))){
var inst_38553 = (state_38594[(9)]);
var inst_38567 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38553,opts);
var state_38594__$1 = state_38594;
if(cljs.core.truth_(inst_38567)){
var statearr_38605_38631 = state_38594__$1;
(statearr_38605_38631[(1)] = (15));

} else {
var statearr_38606_38632 = state_38594__$1;
(statearr_38606_38632[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (2))){
var state_38594__$1 = state_38594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38594__$1,(4),ch);
} else {
if((state_val_38595 === (11))){
var inst_38554 = (state_38594[(8)]);
var inst_38559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38560 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38554);
var inst_38561 = cljs.core.async.timeout.call(null,(1000));
var inst_38562 = [inst_38560,inst_38561];
var inst_38563 = (new cljs.core.PersistentVector(null,2,(5),inst_38559,inst_38562,null));
var state_38594__$1 = state_38594;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38594__$1,(14),inst_38563);
} else {
if((state_val_38595 === (9))){
var inst_38554 = (state_38594[(8)]);
var inst_38580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38581 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38554);
var inst_38582 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38581);
var inst_38583 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38582)].join('');
var inst_38584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38583);
var state_38594__$1 = (function (){var statearr_38607 = state_38594;
(statearr_38607[(10)] = inst_38580);

return statearr_38607;
})();
var statearr_38608_38633 = state_38594__$1;
(statearr_38608_38633[(2)] = inst_38584);

(statearr_38608_38633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (5))){
var inst_38547 = (state_38594[(7)]);
var inst_38549 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38550 = (new cljs.core.PersistentArrayMap(null,2,inst_38549,null));
var inst_38551 = (new cljs.core.PersistentHashSet(null,inst_38550,null));
var inst_38552 = figwheel.client.focus_msgs.call(null,inst_38551,inst_38547);
var inst_38553 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38552);
var inst_38554 = cljs.core.first.call(null,inst_38552);
var inst_38555 = figwheel.client.autoload_QMARK_.call(null);
var state_38594__$1 = (function (){var statearr_38609 = state_38594;
(statearr_38609[(9)] = inst_38553);

(statearr_38609[(8)] = inst_38554);

return statearr_38609;
})();
if(cljs.core.truth_(inst_38555)){
var statearr_38610_38634 = state_38594__$1;
(statearr_38610_38634[(1)] = (8));

} else {
var statearr_38611_38635 = state_38594__$1;
(statearr_38611_38635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (14))){
var inst_38565 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
var statearr_38612_38636 = state_38594__$1;
(statearr_38612_38636[(2)] = inst_38565);

(statearr_38612_38636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (16))){
var state_38594__$1 = state_38594;
var statearr_38613_38637 = state_38594__$1;
(statearr_38613_38637[(2)] = null);

(statearr_38613_38637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (10))){
var inst_38586 = (state_38594[(2)]);
var state_38594__$1 = (function (){var statearr_38614 = state_38594;
(statearr_38614[(11)] = inst_38586);

return statearr_38614;
})();
var statearr_38615_38638 = state_38594__$1;
(statearr_38615_38638[(2)] = null);

(statearr_38615_38638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (8))){
var inst_38553 = (state_38594[(9)]);
var inst_38557 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38553,opts);
var state_38594__$1 = state_38594;
if(cljs.core.truth_(inst_38557)){
var statearr_38616_38639 = state_38594__$1;
(statearr_38616_38639[(1)] = (11));

} else {
var statearr_38617_38640 = state_38594__$1;
(statearr_38617_38640[(1)] = (12));

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
});})(c__33728__auto___38622,ch))
;
return ((function (switch__33334__auto__,c__33728__auto___38622,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____0 = (function (){
var statearr_38618 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38618[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__);

(statearr_38618[(1)] = (1));

return statearr_38618;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____1 = (function (state_38594){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38619){if((e38619 instanceof Object)){
var ex__33338__auto__ = e38619;
var statearr_38620_38641 = state_38594;
(statearr_38620_38641[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38642 = state_38594;
state_38594 = G__38642;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__ = function(state_38594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____1.call(this,state_38594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___38622,ch))
})();
var state__33730__auto__ = (function (){var statearr_38621 = f__33729__auto__.call(null);
(statearr_38621[(6)] = c__33728__auto___38622);

return statearr_38621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___38622,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38643_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38643_SHARP_));
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
var base_path_38645 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38645){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38644){if((e38644 instanceof Error)){
var e = e38644;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38645], null));
} else {
var e = e38644;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38645))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38646){
var map__38647 = p__38646;
var map__38647__$1 = ((((!((map__38647 == null)))?((((map__38647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38647):map__38647);
var opts = map__38647__$1;
var build_id = cljs.core.get.call(null,map__38647__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38647,map__38647__$1,opts,build_id){
return (function (p__38649){
var vec__38650 = p__38649;
var seq__38651 = cljs.core.seq.call(null,vec__38650);
var first__38652 = cljs.core.first.call(null,seq__38651);
var seq__38651__$1 = cljs.core.next.call(null,seq__38651);
var map__38653 = first__38652;
var map__38653__$1 = ((((!((map__38653 == null)))?((((map__38653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38653):map__38653);
var msg = map__38653__$1;
var msg_name = cljs.core.get.call(null,map__38653__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38651__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38650,seq__38651,first__38652,seq__38651__$1,map__38653,map__38653__$1,msg,msg_name,_,map__38647,map__38647__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38650,seq__38651,first__38652,seq__38651__$1,map__38653,map__38653__$1,msg,msg_name,_,map__38647,map__38647__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38647,map__38647__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38655){
var vec__38656 = p__38655;
var seq__38657 = cljs.core.seq.call(null,vec__38656);
var first__38658 = cljs.core.first.call(null,seq__38657);
var seq__38657__$1 = cljs.core.next.call(null,seq__38657);
var map__38659 = first__38658;
var map__38659__$1 = ((((!((map__38659 == null)))?((((map__38659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38659):map__38659);
var msg = map__38659__$1;
var msg_name = cljs.core.get.call(null,map__38659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38657__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38661){
var map__38662 = p__38661;
var map__38662__$1 = ((((!((map__38662 == null)))?((((map__38662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38662):map__38662);
var on_compile_warning = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38662,map__38662__$1,on_compile_warning,on_compile_fail){
return (function (p__38664){
var vec__38665 = p__38664;
var seq__38666 = cljs.core.seq.call(null,vec__38665);
var first__38667 = cljs.core.first.call(null,seq__38666);
var seq__38666__$1 = cljs.core.next.call(null,seq__38666);
var map__38668 = first__38667;
var map__38668__$1 = ((((!((map__38668 == null)))?((((map__38668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38668):map__38668);
var msg = map__38668__$1;
var msg_name = cljs.core.get.call(null,map__38668__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38666__$1;
var pred__38670 = cljs.core._EQ_;
var expr__38671 = msg_name;
if(cljs.core.truth_(pred__38670.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38671))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38670.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38671))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38662,map__38662__$1,on_compile_warning,on_compile_fail))
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
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,msg_hist,msg_names,msg){
return (function (state_38760){
var state_val_38761 = (state_38760[(1)]);
if((state_val_38761 === (7))){
var inst_38680 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38680)){
var statearr_38762_38809 = state_38760__$1;
(statearr_38762_38809[(1)] = (8));

} else {
var statearr_38763_38810 = state_38760__$1;
(statearr_38763_38810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (20))){
var inst_38754 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38764_38811 = state_38760__$1;
(statearr_38764_38811[(2)] = inst_38754);

(statearr_38764_38811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (27))){
var inst_38750 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38765_38812 = state_38760__$1;
(statearr_38765_38812[(2)] = inst_38750);

(statearr_38765_38812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (1))){
var inst_38673 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38673)){
var statearr_38766_38813 = state_38760__$1;
(statearr_38766_38813[(1)] = (2));

} else {
var statearr_38767_38814 = state_38760__$1;
(statearr_38767_38814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (24))){
var inst_38752 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38768_38815 = state_38760__$1;
(statearr_38768_38815[(2)] = inst_38752);

(statearr_38768_38815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (4))){
var inst_38758 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38760__$1,inst_38758);
} else {
if((state_val_38761 === (15))){
var inst_38756 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38769_38816 = state_38760__$1;
(statearr_38769_38816[(2)] = inst_38756);

(statearr_38769_38816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (21))){
var inst_38709 = (state_38760[(2)]);
var inst_38710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38711 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38710);
var state_38760__$1 = (function (){var statearr_38770 = state_38760;
(statearr_38770[(7)] = inst_38709);

return statearr_38770;
})();
var statearr_38771_38817 = state_38760__$1;
(statearr_38771_38817[(2)] = inst_38711);

(statearr_38771_38817[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (31))){
var inst_38739 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38739)){
var statearr_38772_38818 = state_38760__$1;
(statearr_38772_38818[(1)] = (34));

} else {
var statearr_38773_38819 = state_38760__$1;
(statearr_38773_38819[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (32))){
var inst_38748 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38774_38820 = state_38760__$1;
(statearr_38774_38820[(2)] = inst_38748);

(statearr_38774_38820[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (33))){
var inst_38735 = (state_38760[(2)]);
var inst_38736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38736);
var state_38760__$1 = (function (){var statearr_38775 = state_38760;
(statearr_38775[(8)] = inst_38735);

return statearr_38775;
})();
var statearr_38776_38821 = state_38760__$1;
(statearr_38776_38821[(2)] = inst_38737);

(statearr_38776_38821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (13))){
var inst_38694 = figwheel.client.heads_up.clear.call(null);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(16),inst_38694);
} else {
if((state_val_38761 === (22))){
var inst_38715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38716 = figwheel.client.heads_up.append_warning_message.call(null,inst_38715);
var state_38760__$1 = state_38760;
var statearr_38777_38822 = state_38760__$1;
(statearr_38777_38822[(2)] = inst_38716);

(statearr_38777_38822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (36))){
var inst_38746 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38778_38823 = state_38760__$1;
(statearr_38778_38823[(2)] = inst_38746);

(statearr_38778_38823[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (29))){
var inst_38726 = (state_38760[(2)]);
var inst_38727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38728 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38727);
var state_38760__$1 = (function (){var statearr_38779 = state_38760;
(statearr_38779[(9)] = inst_38726);

return statearr_38779;
})();
var statearr_38780_38824 = state_38760__$1;
(statearr_38780_38824[(2)] = inst_38728);

(statearr_38780_38824[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (6))){
var inst_38675 = (state_38760[(10)]);
var state_38760__$1 = state_38760;
var statearr_38781_38825 = state_38760__$1;
(statearr_38781_38825[(2)] = inst_38675);

(statearr_38781_38825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (28))){
var inst_38722 = (state_38760[(2)]);
var inst_38723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38724 = figwheel.client.heads_up.display_warning.call(null,inst_38723);
var state_38760__$1 = (function (){var statearr_38782 = state_38760;
(statearr_38782[(11)] = inst_38722);

return statearr_38782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(29),inst_38724);
} else {
if((state_val_38761 === (25))){
var inst_38720 = figwheel.client.heads_up.clear.call(null);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(28),inst_38720);
} else {
if((state_val_38761 === (34))){
var inst_38741 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(37),inst_38741);
} else {
if((state_val_38761 === (17))){
var inst_38700 = (state_38760[(2)]);
var inst_38701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38702 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38701);
var state_38760__$1 = (function (){var statearr_38783 = state_38760;
(statearr_38783[(12)] = inst_38700);

return statearr_38783;
})();
var statearr_38784_38826 = state_38760__$1;
(statearr_38784_38826[(2)] = inst_38702);

(statearr_38784_38826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (3))){
var inst_38692 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38692)){
var statearr_38785_38827 = state_38760__$1;
(statearr_38785_38827[(1)] = (13));

} else {
var statearr_38786_38828 = state_38760__$1;
(statearr_38786_38828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (12))){
var inst_38688 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38787_38829 = state_38760__$1;
(statearr_38787_38829[(2)] = inst_38688);

(statearr_38787_38829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (2))){
var inst_38675 = (state_38760[(10)]);
var inst_38675__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38760__$1 = (function (){var statearr_38788 = state_38760;
(statearr_38788[(10)] = inst_38675__$1);

return statearr_38788;
})();
if(cljs.core.truth_(inst_38675__$1)){
var statearr_38789_38830 = state_38760__$1;
(statearr_38789_38830[(1)] = (5));

} else {
var statearr_38790_38831 = state_38760__$1;
(statearr_38790_38831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (23))){
var inst_38718 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38718)){
var statearr_38791_38832 = state_38760__$1;
(statearr_38791_38832[(1)] = (25));

} else {
var statearr_38792_38833 = state_38760__$1;
(statearr_38792_38833[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (35))){
var state_38760__$1 = state_38760;
var statearr_38793_38834 = state_38760__$1;
(statearr_38793_38834[(2)] = null);

(statearr_38793_38834[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (19))){
var inst_38713 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38713)){
var statearr_38794_38835 = state_38760__$1;
(statearr_38794_38835[(1)] = (22));

} else {
var statearr_38795_38836 = state_38760__$1;
(statearr_38795_38836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (11))){
var inst_38684 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38796_38837 = state_38760__$1;
(statearr_38796_38837[(2)] = inst_38684);

(statearr_38796_38837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (9))){
var inst_38686 = figwheel.client.heads_up.clear.call(null);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(12),inst_38686);
} else {
if((state_val_38761 === (5))){
var inst_38677 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38760__$1 = state_38760;
var statearr_38797_38838 = state_38760__$1;
(statearr_38797_38838[(2)] = inst_38677);

(statearr_38797_38838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (14))){
var inst_38704 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38704)){
var statearr_38798_38839 = state_38760__$1;
(statearr_38798_38839[(1)] = (18));

} else {
var statearr_38799_38840 = state_38760__$1;
(statearr_38799_38840[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (26))){
var inst_38730 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38730)){
var statearr_38800_38841 = state_38760__$1;
(statearr_38800_38841[(1)] = (30));

} else {
var statearr_38801_38842 = state_38760__$1;
(statearr_38801_38842[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (16))){
var inst_38696 = (state_38760[(2)]);
var inst_38697 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38698 = figwheel.client.heads_up.display_exception.call(null,inst_38697);
var state_38760__$1 = (function (){var statearr_38802 = state_38760;
(statearr_38802[(13)] = inst_38696);

return statearr_38802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(17),inst_38698);
} else {
if((state_val_38761 === (30))){
var inst_38732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38733 = figwheel.client.heads_up.display_warning.call(null,inst_38732);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(33),inst_38733);
} else {
if((state_val_38761 === (10))){
var inst_38690 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38803_38843 = state_38760__$1;
(statearr_38803_38843[(2)] = inst_38690);

(statearr_38803_38843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (18))){
var inst_38706 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38707 = figwheel.client.heads_up.display_exception.call(null,inst_38706);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(21),inst_38707);
} else {
if((state_val_38761 === (37))){
var inst_38743 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38804_38844 = state_38760__$1;
(statearr_38804_38844[(2)] = inst_38743);

(statearr_38804_38844[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (8))){
var inst_38682 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(11),inst_38682);
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
});})(c__33728__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33334__auto__,c__33728__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____0 = (function (){
var statearr_38805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38805[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__);

(statearr_38805[(1)] = (1));

return statearr_38805;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____1 = (function (state_38760){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38806){if((e38806 instanceof Object)){
var ex__33338__auto__ = e38806;
var statearr_38807_38845 = state_38760;
(statearr_38807_38845[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38846 = state_38760;
state_38760 = G__38846;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__ = function(state_38760){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____1.call(this,state_38760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,msg_hist,msg_names,msg))
})();
var state__33730__auto__ = (function (){var statearr_38808 = f__33729__auto__.call(null);
(statearr_38808[(6)] = c__33728__auto__);

return statearr_38808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,msg_hist,msg_names,msg))
);

return c__33728__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33728__auto___38875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___38875,ch){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___38875,ch){
return (function (state_38861){
var state_val_38862 = (state_38861[(1)]);
if((state_val_38862 === (1))){
var state_38861__$1 = state_38861;
var statearr_38863_38876 = state_38861__$1;
(statearr_38863_38876[(2)] = null);

(statearr_38863_38876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (2))){
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38861__$1,(4),ch);
} else {
if((state_val_38862 === (3))){
var inst_38859 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38861__$1,inst_38859);
} else {
if((state_val_38862 === (4))){
var inst_38849 = (state_38861[(7)]);
var inst_38849__$1 = (state_38861[(2)]);
var state_38861__$1 = (function (){var statearr_38864 = state_38861;
(statearr_38864[(7)] = inst_38849__$1);

return statearr_38864;
})();
if(cljs.core.truth_(inst_38849__$1)){
var statearr_38865_38877 = state_38861__$1;
(statearr_38865_38877[(1)] = (5));

} else {
var statearr_38866_38878 = state_38861__$1;
(statearr_38866_38878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (5))){
var inst_38849 = (state_38861[(7)]);
var inst_38851 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38849);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38861__$1,(8),inst_38851);
} else {
if((state_val_38862 === (6))){
var state_38861__$1 = state_38861;
var statearr_38867_38879 = state_38861__$1;
(statearr_38867_38879[(2)] = null);

(statearr_38867_38879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (7))){
var inst_38857 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
var statearr_38868_38880 = state_38861__$1;
(statearr_38868_38880[(2)] = inst_38857);

(statearr_38868_38880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (8))){
var inst_38853 = (state_38861[(2)]);
var state_38861__$1 = (function (){var statearr_38869 = state_38861;
(statearr_38869[(8)] = inst_38853);

return statearr_38869;
})();
var statearr_38870_38881 = state_38861__$1;
(statearr_38870_38881[(2)] = null);

(statearr_38870_38881[(1)] = (2));


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
});})(c__33728__auto___38875,ch))
;
return ((function (switch__33334__auto__,c__33728__auto___38875,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33335__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33335__auto____0 = (function (){
var statearr_38871 = [null,null,null,null,null,null,null,null,null];
(statearr_38871[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33335__auto__);

(statearr_38871[(1)] = (1));

return statearr_38871;
});
var figwheel$client$heads_up_plugin_$_state_machine__33335__auto____1 = (function (state_38861){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38872){if((e38872 instanceof Object)){
var ex__33338__auto__ = e38872;
var statearr_38873_38882 = state_38861;
(statearr_38873_38882[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38883 = state_38861;
state_38861 = G__38883;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33335__auto__ = function(state_38861){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33335__auto____1.call(this,state_38861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33335__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33335__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___38875,ch))
})();
var state__33730__auto__ = (function (){var statearr_38874 = f__33729__auto__.call(null);
(statearr_38874[(6)] = c__33728__auto___38875);

return statearr_38874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___38875,ch))
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
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_38889){
var state_val_38890 = (state_38889[(1)]);
if((state_val_38890 === (1))){
var inst_38884 = cljs.core.async.timeout.call(null,(3000));
var state_38889__$1 = state_38889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38889__$1,(2),inst_38884);
} else {
if((state_val_38890 === (2))){
var inst_38886 = (state_38889[(2)]);
var inst_38887 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38889__$1 = (function (){var statearr_38891 = state_38889;
(statearr_38891[(7)] = inst_38886);

return statearr_38891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38889__$1,inst_38887);
} else {
return null;
}
}
});})(c__33728__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____0 = (function (){
var statearr_38892 = [null,null,null,null,null,null,null,null];
(statearr_38892[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__);

(statearr_38892[(1)] = (1));

return statearr_38892;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____1 = (function (state_38889){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38893){if((e38893 instanceof Object)){
var ex__33338__auto__ = e38893;
var statearr_38894_38896 = state_38889;
(statearr_38894_38896[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38897 = state_38889;
state_38889 = G__38897;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__ = function(state_38889){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____1.call(this,state_38889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_38895 = f__33729__auto__.call(null);
(statearr_38895[(6)] = c__33728__auto__);

return statearr_38895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
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
var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,figwheel_version,temp__5278__auto__){
return (function (state_38904){
var state_val_38905 = (state_38904[(1)]);
if((state_val_38905 === (1))){
var inst_38898 = cljs.core.async.timeout.call(null,(2000));
var state_38904__$1 = state_38904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38904__$1,(2),inst_38898);
} else {
if((state_val_38905 === (2))){
var inst_38900 = (state_38904[(2)]);
var inst_38901 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38902 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38901);
var state_38904__$1 = (function (){var statearr_38906 = state_38904;
(statearr_38906[(7)] = inst_38900);

return statearr_38906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38904__$1,inst_38902);
} else {
return null;
}
}
});})(c__33728__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____0 = (function (){
var statearr_38907 = [null,null,null,null,null,null,null,null];
(statearr_38907[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__);

(statearr_38907[(1)] = (1));

return statearr_38907;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____1 = (function (state_38904){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38908){if((e38908 instanceof Object)){
var ex__33338__auto__ = e38908;
var statearr_38909_38911 = state_38904;
(statearr_38909_38911[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38912 = state_38904;
state_38904 = G__38912;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__ = function(state_38904){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____1.call(this,state_38904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33730__auto__ = (function (){var statearr_38910 = f__33729__auto__.call(null);
(statearr_38910[(6)] = c__33728__auto__);

return statearr_38910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,figwheel_version,temp__5278__auto__))
);

return c__33728__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38913){
var map__38914 = p__38913;
var map__38914__$1 = ((((!((map__38914 == null)))?((((map__38914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38914):map__38914);
var file = cljs.core.get.call(null,map__38914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38916 = "";
var G__38916__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38916),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38916);
var G__38916__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38916__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38916__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38916__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38916__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38917){
var map__38918 = p__38917;
var map__38918__$1 = ((((!((map__38918 == null)))?((((map__38918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38918):map__38918);
var ed = map__38918__$1;
var formatted_exception = cljs.core.get.call(null,map__38918__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38918__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38918__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38920_38924 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38921_38925 = null;
var count__38922_38926 = (0);
var i__38923_38927 = (0);
while(true){
if((i__38923_38927 < count__38922_38926)){
var msg_38928 = cljs.core._nth.call(null,chunk__38921_38925,i__38923_38927);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38928);

var G__38929 = seq__38920_38924;
var G__38930 = chunk__38921_38925;
var G__38931 = count__38922_38926;
var G__38932 = (i__38923_38927 + (1));
seq__38920_38924 = G__38929;
chunk__38921_38925 = G__38930;
count__38922_38926 = G__38931;
i__38923_38927 = G__38932;
continue;
} else {
var temp__5278__auto___38933 = cljs.core.seq.call(null,seq__38920_38924);
if(temp__5278__auto___38933){
var seq__38920_38934__$1 = temp__5278__auto___38933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38920_38934__$1)){
var c__31003__auto___38935 = cljs.core.chunk_first.call(null,seq__38920_38934__$1);
var G__38936 = cljs.core.chunk_rest.call(null,seq__38920_38934__$1);
var G__38937 = c__31003__auto___38935;
var G__38938 = cljs.core.count.call(null,c__31003__auto___38935);
var G__38939 = (0);
seq__38920_38924 = G__38936;
chunk__38921_38925 = G__38937;
count__38922_38926 = G__38938;
i__38923_38927 = G__38939;
continue;
} else {
var msg_38940 = cljs.core.first.call(null,seq__38920_38934__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38940);

var G__38941 = cljs.core.next.call(null,seq__38920_38934__$1);
var G__38942 = null;
var G__38943 = (0);
var G__38944 = (0);
seq__38920_38924 = G__38941;
chunk__38921_38925 = G__38942;
count__38922_38926 = G__38943;
i__38923_38927 = G__38944;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38945){
var map__38946 = p__38945;
var map__38946__$1 = ((((!((map__38946 == null)))?((((map__38946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38946):map__38946);
var w = map__38946__$1;
var message = cljs.core.get.call(null,map__38946__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/worker-out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/worker-out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__38948 = cljs.core.seq.call(null,plugins);
var chunk__38949 = null;
var count__38950 = (0);
var i__38951 = (0);
while(true){
if((i__38951 < count__38950)){
var vec__38952 = cljs.core._nth.call(null,chunk__38949,i__38951);
var k = cljs.core.nth.call(null,vec__38952,(0),null);
var plugin = cljs.core.nth.call(null,vec__38952,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38958 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38948,chunk__38949,count__38950,i__38951,pl_38958,vec__38952,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38958.call(null,msg_hist);
});})(seq__38948,chunk__38949,count__38950,i__38951,pl_38958,vec__38952,k,plugin))
);
} else {
}

var G__38959 = seq__38948;
var G__38960 = chunk__38949;
var G__38961 = count__38950;
var G__38962 = (i__38951 + (1));
seq__38948 = G__38959;
chunk__38949 = G__38960;
count__38950 = G__38961;
i__38951 = G__38962;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38948);
if(temp__5278__auto__){
var seq__38948__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38948__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__38948__$1);
var G__38963 = cljs.core.chunk_rest.call(null,seq__38948__$1);
var G__38964 = c__31003__auto__;
var G__38965 = cljs.core.count.call(null,c__31003__auto__);
var G__38966 = (0);
seq__38948 = G__38963;
chunk__38949 = G__38964;
count__38950 = G__38965;
i__38951 = G__38966;
continue;
} else {
var vec__38955 = cljs.core.first.call(null,seq__38948__$1);
var k = cljs.core.nth.call(null,vec__38955,(0),null);
var plugin = cljs.core.nth.call(null,vec__38955,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38967 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38948,chunk__38949,count__38950,i__38951,pl_38967,vec__38955,k,plugin,seq__38948__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38967.call(null,msg_hist);
});})(seq__38948,chunk__38949,count__38950,i__38951,pl_38967,vec__38955,k,plugin,seq__38948__$1,temp__5278__auto__))
);
} else {
}

var G__38968 = cljs.core.next.call(null,seq__38948__$1);
var G__38969 = null;
var G__38970 = (0);
var G__38971 = (0);
seq__38948 = G__38968;
chunk__38949 = G__38969;
count__38950 = G__38970;
i__38951 = G__38971;
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
var G__38973 = arguments.length;
switch (G__38973) {
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

var seq__38974_38979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38975_38980 = null;
var count__38976_38981 = (0);
var i__38977_38982 = (0);
while(true){
if((i__38977_38982 < count__38976_38981)){
var msg_38983 = cljs.core._nth.call(null,chunk__38975_38980,i__38977_38982);
figwheel.client.socket.handle_incoming_message.call(null,msg_38983);

var G__38984 = seq__38974_38979;
var G__38985 = chunk__38975_38980;
var G__38986 = count__38976_38981;
var G__38987 = (i__38977_38982 + (1));
seq__38974_38979 = G__38984;
chunk__38975_38980 = G__38985;
count__38976_38981 = G__38986;
i__38977_38982 = G__38987;
continue;
} else {
var temp__5278__auto___38988 = cljs.core.seq.call(null,seq__38974_38979);
if(temp__5278__auto___38988){
var seq__38974_38989__$1 = temp__5278__auto___38988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38974_38989__$1)){
var c__31003__auto___38990 = cljs.core.chunk_first.call(null,seq__38974_38989__$1);
var G__38991 = cljs.core.chunk_rest.call(null,seq__38974_38989__$1);
var G__38992 = c__31003__auto___38990;
var G__38993 = cljs.core.count.call(null,c__31003__auto___38990);
var G__38994 = (0);
seq__38974_38979 = G__38991;
chunk__38975_38980 = G__38992;
count__38976_38981 = G__38993;
i__38977_38982 = G__38994;
continue;
} else {
var msg_38995 = cljs.core.first.call(null,seq__38974_38989__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38995);

var G__38996 = cljs.core.next.call(null,seq__38974_38989__$1);
var G__38997 = null;
var G__38998 = (0);
var G__38999 = (0);
seq__38974_38979 = G__38996;
chunk__38975_38980 = G__38997;
count__38976_38981 = G__38998;
i__38977_38982 = G__38999;
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
var len__31349__auto___39004 = arguments.length;
var i__31350__auto___39005 = (0);
while(true){
if((i__31350__auto___39005 < len__31349__auto___39004)){
args__31356__auto__.push((arguments[i__31350__auto___39005]));

var G__39006 = (i__31350__auto___39005 + (1));
i__31350__auto___39005 = G__39006;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39001){
var map__39002 = p__39001;
var map__39002__$1 = ((((!((map__39002 == null)))?((((map__39002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39002):map__39002);
var opts = map__39002__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39000){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39000));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39007){if((e39007 instanceof Error)){
var e = e39007;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39007;

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
return (function (p__39008){
var map__39009 = p__39008;
var map__39009__$1 = ((((!((map__39009 == null)))?((((map__39009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39009):map__39009);
var msg_name = cljs.core.get.call(null,map__39009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510143300538
