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
}catch (e39595){if((e39595 instanceof Error)){
var e = e39595;
return "Error: Unable to stringify";
} else {
throw e39595;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39598 = arguments.length;
switch (G__39598) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39596_SHARP_){
if(typeof p1__39596_SHARP_ === 'string'){
return p1__39596_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39596_SHARP_);
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
var len__31349__auto___39606 = arguments.length;
var i__31350__auto___39607 = (0);
while(true){
if((i__31350__auto___39607 < len__31349__auto___39606)){
args__31356__auto__.push((arguments[i__31350__auto___39607]));

var G__39608 = (i__31350__auto___39607 + (1));
i__31350__auto___39607 = G__39608;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39605){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39605));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39610 = arguments.length;
var i__31350__auto___39611 = (0);
while(true){
if((i__31350__auto___39611 < len__31349__auto___39610)){
args__31356__auto__.push((arguments[i__31350__auto___39611]));

var G__39612 = (i__31350__auto___39611 + (1));
i__31350__auto___39611 = G__39612;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39609){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39609));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39613){
var map__39614 = p__39613;
var map__39614__$1 = ((((!((map__39614 == null)))?((((map__39614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39614):map__39614);
var message = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33952__auto___39697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___39697,ch){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___39697,ch){
return (function (state_39669){
var state_val_39670 = (state_39669[(1)]);
if((state_val_39670 === (7))){
var inst_39665 = (state_39669[(2)]);
var state_39669__$1 = state_39669;
var statearr_39671_39698 = state_39669__$1;
(statearr_39671_39698[(2)] = inst_39665);

(statearr_39671_39698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (1))){
var state_39669__$1 = state_39669;
var statearr_39672_39699 = state_39669__$1;
(statearr_39672_39699[(2)] = null);

(statearr_39672_39699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (4))){
var inst_39622 = (state_39669[(7)]);
var inst_39622__$1 = (state_39669[(2)]);
var state_39669__$1 = (function (){var statearr_39673 = state_39669;
(statearr_39673[(7)] = inst_39622__$1);

return statearr_39673;
})();
if(cljs.core.truth_(inst_39622__$1)){
var statearr_39674_39700 = state_39669__$1;
(statearr_39674_39700[(1)] = (5));

} else {
var statearr_39675_39701 = state_39669__$1;
(statearr_39675_39701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (15))){
var inst_39629 = (state_39669[(8)]);
var inst_39644 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39629);
var inst_39645 = cljs.core.first.call(null,inst_39644);
var inst_39646 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39645);
var inst_39647 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39646)].join('');
var inst_39648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39647);
var state_39669__$1 = state_39669;
var statearr_39676_39702 = state_39669__$1;
(statearr_39676_39702[(2)] = inst_39648);

(statearr_39676_39702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (13))){
var inst_39653 = (state_39669[(2)]);
var state_39669__$1 = state_39669;
var statearr_39677_39703 = state_39669__$1;
(statearr_39677_39703[(2)] = inst_39653);

(statearr_39677_39703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (6))){
var state_39669__$1 = state_39669;
var statearr_39678_39704 = state_39669__$1;
(statearr_39678_39704[(2)] = null);

(statearr_39678_39704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (17))){
var inst_39651 = (state_39669[(2)]);
var state_39669__$1 = state_39669;
var statearr_39679_39705 = state_39669__$1;
(statearr_39679_39705[(2)] = inst_39651);

(statearr_39679_39705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (3))){
var inst_39667 = (state_39669[(2)]);
var state_39669__$1 = state_39669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39669__$1,inst_39667);
} else {
if((state_val_39670 === (12))){
var inst_39628 = (state_39669[(9)]);
var inst_39642 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39628,opts);
var state_39669__$1 = state_39669;
if(cljs.core.truth_(inst_39642)){
var statearr_39680_39706 = state_39669__$1;
(statearr_39680_39706[(1)] = (15));

} else {
var statearr_39681_39707 = state_39669__$1;
(statearr_39681_39707[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (2))){
var state_39669__$1 = state_39669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39669__$1,(4),ch);
} else {
if((state_val_39670 === (11))){
var inst_39629 = (state_39669[(8)]);
var inst_39634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39635 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39629);
var inst_39636 = cljs.core.async.timeout.call(null,(1000));
var inst_39637 = [inst_39635,inst_39636];
var inst_39638 = (new cljs.core.PersistentVector(null,2,(5),inst_39634,inst_39637,null));
var state_39669__$1 = state_39669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39669__$1,(14),inst_39638);
} else {
if((state_val_39670 === (9))){
var inst_39629 = (state_39669[(8)]);
var inst_39655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39656 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39629);
var inst_39657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39656);
var inst_39658 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39657)].join('');
var inst_39659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39658);
var state_39669__$1 = (function (){var statearr_39682 = state_39669;
(statearr_39682[(10)] = inst_39655);

return statearr_39682;
})();
var statearr_39683_39708 = state_39669__$1;
(statearr_39683_39708[(2)] = inst_39659);

(statearr_39683_39708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (5))){
var inst_39622 = (state_39669[(7)]);
var inst_39624 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39625 = (new cljs.core.PersistentArrayMap(null,2,inst_39624,null));
var inst_39626 = (new cljs.core.PersistentHashSet(null,inst_39625,null));
var inst_39627 = figwheel.client.focus_msgs.call(null,inst_39626,inst_39622);
var inst_39628 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39627);
var inst_39629 = cljs.core.first.call(null,inst_39627);
var inst_39630 = figwheel.client.autoload_QMARK_.call(null);
var state_39669__$1 = (function (){var statearr_39684 = state_39669;
(statearr_39684[(9)] = inst_39628);

(statearr_39684[(8)] = inst_39629);

return statearr_39684;
})();
if(cljs.core.truth_(inst_39630)){
var statearr_39685_39709 = state_39669__$1;
(statearr_39685_39709[(1)] = (8));

} else {
var statearr_39686_39710 = state_39669__$1;
(statearr_39686_39710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (14))){
var inst_39640 = (state_39669[(2)]);
var state_39669__$1 = state_39669;
var statearr_39687_39711 = state_39669__$1;
(statearr_39687_39711[(2)] = inst_39640);

(statearr_39687_39711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (16))){
var state_39669__$1 = state_39669;
var statearr_39688_39712 = state_39669__$1;
(statearr_39688_39712[(2)] = null);

(statearr_39688_39712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (10))){
var inst_39661 = (state_39669[(2)]);
var state_39669__$1 = (function (){var statearr_39689 = state_39669;
(statearr_39689[(11)] = inst_39661);

return statearr_39689;
})();
var statearr_39690_39713 = state_39669__$1;
(statearr_39690_39713[(2)] = null);

(statearr_39690_39713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39670 === (8))){
var inst_39628 = (state_39669[(9)]);
var inst_39632 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39628,opts);
var state_39669__$1 = state_39669;
if(cljs.core.truth_(inst_39632)){
var statearr_39691_39714 = state_39669__$1;
(statearr_39691_39714[(1)] = (11));

} else {
var statearr_39692_39715 = state_39669__$1;
(statearr_39692_39715[(1)] = (12));

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
});})(c__33952__auto___39697,ch))
;
return ((function (switch__33607__auto__,c__33952__auto___39697,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_39693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39693[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__);

(statearr_39693[(1)] = (1));

return statearr_39693;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1 = (function (state_39669){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39694){if((e39694 instanceof Object)){
var ex__33611__auto__ = e39694;
var statearr_39695_39716 = state_39669;
(statearr_39695_39716[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39717 = state_39669;
state_39669 = G__39717;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__ = function(state_39669){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1.call(this,state_39669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___39697,ch))
})();
var state__33954__auto__ = (function (){var statearr_39696 = f__33953__auto__.call(null);
(statearr_39696[(6)] = c__33952__auto___39697);

return statearr_39696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___39697,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39718_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39718_SHARP_));
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
var base_path_39720 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39720){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39719){if((e39719 instanceof Error)){
var e = e39719;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39720], null));
} else {
var e = e39719;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39720))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39721){
var map__39722 = p__39721;
var map__39722__$1 = ((((!((map__39722 == null)))?((((map__39722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39722):map__39722);
var opts = map__39722__$1;
var build_id = cljs.core.get.call(null,map__39722__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39722,map__39722__$1,opts,build_id){
return (function (p__39724){
var vec__39725 = p__39724;
var seq__39726 = cljs.core.seq.call(null,vec__39725);
var first__39727 = cljs.core.first.call(null,seq__39726);
var seq__39726__$1 = cljs.core.next.call(null,seq__39726);
var map__39728 = first__39727;
var map__39728__$1 = ((((!((map__39728 == null)))?((((map__39728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39728):map__39728);
var msg = map__39728__$1;
var msg_name = cljs.core.get.call(null,map__39728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39726__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39725,seq__39726,first__39727,seq__39726__$1,map__39728,map__39728__$1,msg,msg_name,_,map__39722,map__39722__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39725,seq__39726,first__39727,seq__39726__$1,map__39728,map__39728__$1,msg,msg_name,_,map__39722,map__39722__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39722,map__39722__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39730){
var vec__39731 = p__39730;
var seq__39732 = cljs.core.seq.call(null,vec__39731);
var first__39733 = cljs.core.first.call(null,seq__39732);
var seq__39732__$1 = cljs.core.next.call(null,seq__39732);
var map__39734 = first__39733;
var map__39734__$1 = ((((!((map__39734 == null)))?((((map__39734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39734):map__39734);
var msg = map__39734__$1;
var msg_name = cljs.core.get.call(null,map__39734__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39732__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39736){
var map__39737 = p__39736;
var map__39737__$1 = ((((!((map__39737 == null)))?((((map__39737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39737):map__39737);
var on_compile_warning = cljs.core.get.call(null,map__39737__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39737__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39737,map__39737__$1,on_compile_warning,on_compile_fail){
return (function (p__39739){
var vec__39740 = p__39739;
var seq__39741 = cljs.core.seq.call(null,vec__39740);
var first__39742 = cljs.core.first.call(null,seq__39741);
var seq__39741__$1 = cljs.core.next.call(null,seq__39741);
var map__39743 = first__39742;
var map__39743__$1 = ((((!((map__39743 == null)))?((((map__39743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39743):map__39743);
var msg = map__39743__$1;
var msg_name = cljs.core.get.call(null,map__39743__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39741__$1;
var pred__39745 = cljs.core._EQ_;
var expr__39746 = msg_name;
if(cljs.core.truth_(pred__39745.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39746))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39745.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39746))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39737,map__39737__$1,on_compile_warning,on_compile_fail))
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
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,msg_hist,msg_names,msg){
return (function (state_39835){
var state_val_39836 = (state_39835[(1)]);
if((state_val_39836 === (7))){
var inst_39755 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39755)){
var statearr_39837_39884 = state_39835__$1;
(statearr_39837_39884[(1)] = (8));

} else {
var statearr_39838_39885 = state_39835__$1;
(statearr_39838_39885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (20))){
var inst_39829 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39839_39886 = state_39835__$1;
(statearr_39839_39886[(2)] = inst_39829);

(statearr_39839_39886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (27))){
var inst_39825 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39840_39887 = state_39835__$1;
(statearr_39840_39887[(2)] = inst_39825);

(statearr_39840_39887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (1))){
var inst_39748 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39748)){
var statearr_39841_39888 = state_39835__$1;
(statearr_39841_39888[(1)] = (2));

} else {
var statearr_39842_39889 = state_39835__$1;
(statearr_39842_39889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (24))){
var inst_39827 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39843_39890 = state_39835__$1;
(statearr_39843_39890[(2)] = inst_39827);

(statearr_39843_39890[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (4))){
var inst_39833 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39835__$1,inst_39833);
} else {
if((state_val_39836 === (15))){
var inst_39831 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39844_39891 = state_39835__$1;
(statearr_39844_39891[(2)] = inst_39831);

(statearr_39844_39891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (21))){
var inst_39784 = (state_39835[(2)]);
var inst_39785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39786 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39785);
var state_39835__$1 = (function (){var statearr_39845 = state_39835;
(statearr_39845[(7)] = inst_39784);

return statearr_39845;
})();
var statearr_39846_39892 = state_39835__$1;
(statearr_39846_39892[(2)] = inst_39786);

(statearr_39846_39892[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (31))){
var inst_39814 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39814)){
var statearr_39847_39893 = state_39835__$1;
(statearr_39847_39893[(1)] = (34));

} else {
var statearr_39848_39894 = state_39835__$1;
(statearr_39848_39894[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (32))){
var inst_39823 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39849_39895 = state_39835__$1;
(statearr_39849_39895[(2)] = inst_39823);

(statearr_39849_39895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (33))){
var inst_39810 = (state_39835[(2)]);
var inst_39811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39812 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39811);
var state_39835__$1 = (function (){var statearr_39850 = state_39835;
(statearr_39850[(8)] = inst_39810);

return statearr_39850;
})();
var statearr_39851_39896 = state_39835__$1;
(statearr_39851_39896[(2)] = inst_39812);

(statearr_39851_39896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (13))){
var inst_39769 = figwheel.client.heads_up.clear.call(null);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(16),inst_39769);
} else {
if((state_val_39836 === (22))){
var inst_39790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39791 = figwheel.client.heads_up.append_warning_message.call(null,inst_39790);
var state_39835__$1 = state_39835;
var statearr_39852_39897 = state_39835__$1;
(statearr_39852_39897[(2)] = inst_39791);

(statearr_39852_39897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (36))){
var inst_39821 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39853_39898 = state_39835__$1;
(statearr_39853_39898[(2)] = inst_39821);

(statearr_39853_39898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (29))){
var inst_39801 = (state_39835[(2)]);
var inst_39802 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39803 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39802);
var state_39835__$1 = (function (){var statearr_39854 = state_39835;
(statearr_39854[(9)] = inst_39801);

return statearr_39854;
})();
var statearr_39855_39899 = state_39835__$1;
(statearr_39855_39899[(2)] = inst_39803);

(statearr_39855_39899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (6))){
var inst_39750 = (state_39835[(10)]);
var state_39835__$1 = state_39835;
var statearr_39856_39900 = state_39835__$1;
(statearr_39856_39900[(2)] = inst_39750);

(statearr_39856_39900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (28))){
var inst_39797 = (state_39835[(2)]);
var inst_39798 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39799 = figwheel.client.heads_up.display_warning.call(null,inst_39798);
var state_39835__$1 = (function (){var statearr_39857 = state_39835;
(statearr_39857[(11)] = inst_39797);

return statearr_39857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(29),inst_39799);
} else {
if((state_val_39836 === (25))){
var inst_39795 = figwheel.client.heads_up.clear.call(null);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(28),inst_39795);
} else {
if((state_val_39836 === (34))){
var inst_39816 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(37),inst_39816);
} else {
if((state_val_39836 === (17))){
var inst_39775 = (state_39835[(2)]);
var inst_39776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39777 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39776);
var state_39835__$1 = (function (){var statearr_39858 = state_39835;
(statearr_39858[(12)] = inst_39775);

return statearr_39858;
})();
var statearr_39859_39901 = state_39835__$1;
(statearr_39859_39901[(2)] = inst_39777);

(statearr_39859_39901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (3))){
var inst_39767 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39767)){
var statearr_39860_39902 = state_39835__$1;
(statearr_39860_39902[(1)] = (13));

} else {
var statearr_39861_39903 = state_39835__$1;
(statearr_39861_39903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (12))){
var inst_39763 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39862_39904 = state_39835__$1;
(statearr_39862_39904[(2)] = inst_39763);

(statearr_39862_39904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (2))){
var inst_39750 = (state_39835[(10)]);
var inst_39750__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39835__$1 = (function (){var statearr_39863 = state_39835;
(statearr_39863[(10)] = inst_39750__$1);

return statearr_39863;
})();
if(cljs.core.truth_(inst_39750__$1)){
var statearr_39864_39905 = state_39835__$1;
(statearr_39864_39905[(1)] = (5));

} else {
var statearr_39865_39906 = state_39835__$1;
(statearr_39865_39906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (23))){
var inst_39793 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39793)){
var statearr_39866_39907 = state_39835__$1;
(statearr_39866_39907[(1)] = (25));

} else {
var statearr_39867_39908 = state_39835__$1;
(statearr_39867_39908[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (35))){
var state_39835__$1 = state_39835;
var statearr_39868_39909 = state_39835__$1;
(statearr_39868_39909[(2)] = null);

(statearr_39868_39909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (19))){
var inst_39788 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39788)){
var statearr_39869_39910 = state_39835__$1;
(statearr_39869_39910[(1)] = (22));

} else {
var statearr_39870_39911 = state_39835__$1;
(statearr_39870_39911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (11))){
var inst_39759 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39871_39912 = state_39835__$1;
(statearr_39871_39912[(2)] = inst_39759);

(statearr_39871_39912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (9))){
var inst_39761 = figwheel.client.heads_up.clear.call(null);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(12),inst_39761);
} else {
if((state_val_39836 === (5))){
var inst_39752 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39835__$1 = state_39835;
var statearr_39872_39913 = state_39835__$1;
(statearr_39872_39913[(2)] = inst_39752);

(statearr_39872_39913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (14))){
var inst_39779 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39779)){
var statearr_39873_39914 = state_39835__$1;
(statearr_39873_39914[(1)] = (18));

} else {
var statearr_39874_39915 = state_39835__$1;
(statearr_39874_39915[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (26))){
var inst_39805 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39835__$1 = state_39835;
if(cljs.core.truth_(inst_39805)){
var statearr_39875_39916 = state_39835__$1;
(statearr_39875_39916[(1)] = (30));

} else {
var statearr_39876_39917 = state_39835__$1;
(statearr_39876_39917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (16))){
var inst_39771 = (state_39835[(2)]);
var inst_39772 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39773 = figwheel.client.heads_up.display_exception.call(null,inst_39772);
var state_39835__$1 = (function (){var statearr_39877 = state_39835;
(statearr_39877[(13)] = inst_39771);

return statearr_39877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(17),inst_39773);
} else {
if((state_val_39836 === (30))){
var inst_39807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39808 = figwheel.client.heads_up.display_warning.call(null,inst_39807);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(33),inst_39808);
} else {
if((state_val_39836 === (10))){
var inst_39765 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39878_39918 = state_39835__$1;
(statearr_39878_39918[(2)] = inst_39765);

(statearr_39878_39918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (18))){
var inst_39781 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39782 = figwheel.client.heads_up.display_exception.call(null,inst_39781);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(21),inst_39782);
} else {
if((state_val_39836 === (37))){
var inst_39818 = (state_39835[(2)]);
var state_39835__$1 = state_39835;
var statearr_39879_39919 = state_39835__$1;
(statearr_39879_39919[(2)] = inst_39818);

(statearr_39879_39919[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39836 === (8))){
var inst_39757 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(11),inst_39757);
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
});})(c__33952__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33607__auto__,c__33952__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0 = (function (){
var statearr_39880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39880[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__);

(statearr_39880[(1)] = (1));

return statearr_39880;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1 = (function (state_39835){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39881){if((e39881 instanceof Object)){
var ex__33611__auto__ = e39881;
var statearr_39882_39920 = state_39835;
(statearr_39882_39920[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39921 = state_39835;
state_39835 = G__39921;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__ = function(state_39835){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1.call(this,state_39835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,msg_hist,msg_names,msg))
})();
var state__33954__auto__ = (function (){var statearr_39883 = f__33953__auto__.call(null);
(statearr_39883[(6)] = c__33952__auto__);

return statearr_39883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,msg_hist,msg_names,msg))
);

return c__33952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33952__auto___39950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___39950,ch){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___39950,ch){
return (function (state_39936){
var state_val_39937 = (state_39936[(1)]);
if((state_val_39937 === (1))){
var state_39936__$1 = state_39936;
var statearr_39938_39951 = state_39936__$1;
(statearr_39938_39951[(2)] = null);

(statearr_39938_39951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39937 === (2))){
var state_39936__$1 = state_39936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39936__$1,(4),ch);
} else {
if((state_val_39937 === (3))){
var inst_39934 = (state_39936[(2)]);
var state_39936__$1 = state_39936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39936__$1,inst_39934);
} else {
if((state_val_39937 === (4))){
var inst_39924 = (state_39936[(7)]);
var inst_39924__$1 = (state_39936[(2)]);
var state_39936__$1 = (function (){var statearr_39939 = state_39936;
(statearr_39939[(7)] = inst_39924__$1);

return statearr_39939;
})();
if(cljs.core.truth_(inst_39924__$1)){
var statearr_39940_39952 = state_39936__$1;
(statearr_39940_39952[(1)] = (5));

} else {
var statearr_39941_39953 = state_39936__$1;
(statearr_39941_39953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39937 === (5))){
var inst_39924 = (state_39936[(7)]);
var inst_39926 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39924);
var state_39936__$1 = state_39936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39936__$1,(8),inst_39926);
} else {
if((state_val_39937 === (6))){
var state_39936__$1 = state_39936;
var statearr_39942_39954 = state_39936__$1;
(statearr_39942_39954[(2)] = null);

(statearr_39942_39954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39937 === (7))){
var inst_39932 = (state_39936[(2)]);
var state_39936__$1 = state_39936;
var statearr_39943_39955 = state_39936__$1;
(statearr_39943_39955[(2)] = inst_39932);

(statearr_39943_39955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39937 === (8))){
var inst_39928 = (state_39936[(2)]);
var state_39936__$1 = (function (){var statearr_39944 = state_39936;
(statearr_39944[(8)] = inst_39928);

return statearr_39944;
})();
var statearr_39945_39956 = state_39936__$1;
(statearr_39945_39956[(2)] = null);

(statearr_39945_39956[(1)] = (2));


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
});})(c__33952__auto___39950,ch))
;
return ((function (switch__33607__auto__,c__33952__auto___39950,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_39946 = [null,null,null,null,null,null,null,null,null];
(statearr_39946[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33608__auto__);

(statearr_39946[(1)] = (1));

return statearr_39946;
});
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1 = (function (state_39936){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39947){if((e39947 instanceof Object)){
var ex__33611__auto__ = e39947;
var statearr_39948_39957 = state_39936;
(statearr_39948_39957[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39958 = state_39936;
state_39936 = G__39958;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__ = function(state_39936){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1.call(this,state_39936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___39950,ch))
})();
var state__33954__auto__ = (function (){var statearr_39949 = f__33953__auto__.call(null);
(statearr_39949[(6)] = c__33952__auto___39950);

return statearr_39949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___39950,ch))
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
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__){
return (function (state_39964){
var state_val_39965 = (state_39964[(1)]);
if((state_val_39965 === (1))){
var inst_39959 = cljs.core.async.timeout.call(null,(3000));
var state_39964__$1 = state_39964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39964__$1,(2),inst_39959);
} else {
if((state_val_39965 === (2))){
var inst_39961 = (state_39964[(2)]);
var inst_39962 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39964__$1 = (function (){var statearr_39966 = state_39964;
(statearr_39966[(7)] = inst_39961);

return statearr_39966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39964__$1,inst_39962);
} else {
return null;
}
}
});})(c__33952__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_39967 = [null,null,null,null,null,null,null,null];
(statearr_39967[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__);

(statearr_39967[(1)] = (1));

return statearr_39967;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1 = (function (state_39964){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39968){if((e39968 instanceof Object)){
var ex__33611__auto__ = e39968;
var statearr_39969_39971 = state_39964;
(statearr_39969_39971[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39972 = state_39964;
state_39964 = G__39972;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__ = function(state_39964){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1.call(this,state_39964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_39970 = f__33953__auto__.call(null);
(statearr_39970[(6)] = c__33952__auto__);

return statearr_39970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
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
var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,figwheel_version,temp__5278__auto__){
return (function (state_39979){
var state_val_39980 = (state_39979[(1)]);
if((state_val_39980 === (1))){
var inst_39973 = cljs.core.async.timeout.call(null,(2000));
var state_39979__$1 = state_39979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39979__$1,(2),inst_39973);
} else {
if((state_val_39980 === (2))){
var inst_39975 = (state_39979[(2)]);
var inst_39976 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39977 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39976);
var state_39979__$1 = (function (){var statearr_39981 = state_39979;
(statearr_39981[(7)] = inst_39975);

return statearr_39981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39979__$1,inst_39977);
} else {
return null;
}
}
});})(c__33952__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_39982 = [null,null,null,null,null,null,null,null];
(statearr_39982[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__);

(statearr_39982[(1)] = (1));

return statearr_39982;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1 = (function (state_39979){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39983){if((e39983 instanceof Object)){
var ex__33611__auto__ = e39983;
var statearr_39984_39986 = state_39979;
(statearr_39984_39986[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39987 = state_39979;
state_39979 = G__39987;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__ = function(state_39979){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1.call(this,state_39979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33954__auto__ = (function (){var statearr_39985 = f__33953__auto__.call(null);
(statearr_39985[(6)] = c__33952__auto__);

return statearr_39985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,figwheel_version,temp__5278__auto__))
);

return c__33952__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39988){
var map__39989 = p__39988;
var map__39989__$1 = ((((!((map__39989 == null)))?((((map__39989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39989):map__39989);
var file = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39991 = "";
var G__39991__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39991),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39991);
var G__39991__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39991__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39991__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39991__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39991__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39992){
var map__39993 = p__39992;
var map__39993__$1 = ((((!((map__39993 == null)))?((((map__39993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39993):map__39993);
var ed = map__39993__$1;
var formatted_exception = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39995_39999 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39996_40000 = null;
var count__39997_40001 = (0);
var i__39998_40002 = (0);
while(true){
if((i__39998_40002 < count__39997_40001)){
var msg_40003 = cljs.core._nth.call(null,chunk__39996_40000,i__39998_40002);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40003);

var G__40004 = seq__39995_39999;
var G__40005 = chunk__39996_40000;
var G__40006 = count__39997_40001;
var G__40007 = (i__39998_40002 + (1));
seq__39995_39999 = G__40004;
chunk__39996_40000 = G__40005;
count__39997_40001 = G__40006;
i__39998_40002 = G__40007;
continue;
} else {
var temp__5278__auto___40008 = cljs.core.seq.call(null,seq__39995_39999);
if(temp__5278__auto___40008){
var seq__39995_40009__$1 = temp__5278__auto___40008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39995_40009__$1)){
var c__31003__auto___40010 = cljs.core.chunk_first.call(null,seq__39995_40009__$1);
var G__40011 = cljs.core.chunk_rest.call(null,seq__39995_40009__$1);
var G__40012 = c__31003__auto___40010;
var G__40013 = cljs.core.count.call(null,c__31003__auto___40010);
var G__40014 = (0);
seq__39995_39999 = G__40011;
chunk__39996_40000 = G__40012;
count__39997_40001 = G__40013;
i__39998_40002 = G__40014;
continue;
} else {
var msg_40015 = cljs.core.first.call(null,seq__39995_40009__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40015);

var G__40016 = cljs.core.next.call(null,seq__39995_40009__$1);
var G__40017 = null;
var G__40018 = (0);
var G__40019 = (0);
seq__39995_39999 = G__40016;
chunk__39996_40000 = G__40017;
count__39997_40001 = G__40018;
i__39998_40002 = G__40019;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40020){
var map__40021 = p__40020;
var map__40021__$1 = ((((!((map__40021 == null)))?((((map__40021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40021):map__40021);
var w = map__40021__$1;
var message = cljs.core.get.call(null,map__40021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40023 = cljs.core.seq.call(null,plugins);
var chunk__40024 = null;
var count__40025 = (0);
var i__40026 = (0);
while(true){
if((i__40026 < count__40025)){
var vec__40027 = cljs.core._nth.call(null,chunk__40024,i__40026);
var k = cljs.core.nth.call(null,vec__40027,(0),null);
var plugin = cljs.core.nth.call(null,vec__40027,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40033 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40023,chunk__40024,count__40025,i__40026,pl_40033,vec__40027,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40033.call(null,msg_hist);
});})(seq__40023,chunk__40024,count__40025,i__40026,pl_40033,vec__40027,k,plugin))
);
} else {
}

var G__40034 = seq__40023;
var G__40035 = chunk__40024;
var G__40036 = count__40025;
var G__40037 = (i__40026 + (1));
seq__40023 = G__40034;
chunk__40024 = G__40035;
count__40025 = G__40036;
i__40026 = G__40037;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__40023);
if(temp__5278__auto__){
var seq__40023__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40023__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__40023__$1);
var G__40038 = cljs.core.chunk_rest.call(null,seq__40023__$1);
var G__40039 = c__31003__auto__;
var G__40040 = cljs.core.count.call(null,c__31003__auto__);
var G__40041 = (0);
seq__40023 = G__40038;
chunk__40024 = G__40039;
count__40025 = G__40040;
i__40026 = G__40041;
continue;
} else {
var vec__40030 = cljs.core.first.call(null,seq__40023__$1);
var k = cljs.core.nth.call(null,vec__40030,(0),null);
var plugin = cljs.core.nth.call(null,vec__40030,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40042 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40023,chunk__40024,count__40025,i__40026,pl_40042,vec__40030,k,plugin,seq__40023__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40042.call(null,msg_hist);
});})(seq__40023,chunk__40024,count__40025,i__40026,pl_40042,vec__40030,k,plugin,seq__40023__$1,temp__5278__auto__))
);
} else {
}

var G__40043 = cljs.core.next.call(null,seq__40023__$1);
var G__40044 = null;
var G__40045 = (0);
var G__40046 = (0);
seq__40023 = G__40043;
chunk__40024 = G__40044;
count__40025 = G__40045;
i__40026 = G__40046;
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
var G__40048 = arguments.length;
switch (G__40048) {
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

var seq__40049_40054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40050_40055 = null;
var count__40051_40056 = (0);
var i__40052_40057 = (0);
while(true){
if((i__40052_40057 < count__40051_40056)){
var msg_40058 = cljs.core._nth.call(null,chunk__40050_40055,i__40052_40057);
figwheel.client.socket.handle_incoming_message.call(null,msg_40058);

var G__40059 = seq__40049_40054;
var G__40060 = chunk__40050_40055;
var G__40061 = count__40051_40056;
var G__40062 = (i__40052_40057 + (1));
seq__40049_40054 = G__40059;
chunk__40050_40055 = G__40060;
count__40051_40056 = G__40061;
i__40052_40057 = G__40062;
continue;
} else {
var temp__5278__auto___40063 = cljs.core.seq.call(null,seq__40049_40054);
if(temp__5278__auto___40063){
var seq__40049_40064__$1 = temp__5278__auto___40063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40049_40064__$1)){
var c__31003__auto___40065 = cljs.core.chunk_first.call(null,seq__40049_40064__$1);
var G__40066 = cljs.core.chunk_rest.call(null,seq__40049_40064__$1);
var G__40067 = c__31003__auto___40065;
var G__40068 = cljs.core.count.call(null,c__31003__auto___40065);
var G__40069 = (0);
seq__40049_40054 = G__40066;
chunk__40050_40055 = G__40067;
count__40051_40056 = G__40068;
i__40052_40057 = G__40069;
continue;
} else {
var msg_40070 = cljs.core.first.call(null,seq__40049_40064__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40070);

var G__40071 = cljs.core.next.call(null,seq__40049_40064__$1);
var G__40072 = null;
var G__40073 = (0);
var G__40074 = (0);
seq__40049_40054 = G__40071;
chunk__40050_40055 = G__40072;
count__40051_40056 = G__40073;
i__40052_40057 = G__40074;
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
var len__31349__auto___40079 = arguments.length;
var i__31350__auto___40080 = (0);
while(true){
if((i__31350__auto___40080 < len__31349__auto___40079)){
args__31356__auto__.push((arguments[i__31350__auto___40080]));

var G__40081 = (i__31350__auto___40080 + (1));
i__31350__auto___40080 = G__40081;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40076){
var map__40077 = p__40076;
var map__40077__$1 = ((((!((map__40077 == null)))?((((map__40077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40077):map__40077);
var opts = map__40077__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40075){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40075));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40082){if((e40082 instanceof Error)){
var e = e40082;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40082;

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
return (function (p__40083){
var map__40084 = p__40083;
var map__40084__$1 = ((((!((map__40084 == null)))?((((map__40084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40084):map__40084);
var msg_name = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510360383330
