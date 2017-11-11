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
}catch (e53041){if((e53041 instanceof Error)){
var e = e53041;
return "Error: Unable to stringify";
} else {
throw e53041;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__53044 = arguments.length;
switch (G__53044) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__53042_SHARP_){
if(typeof p1__53042_SHARP_ === 'string'){
return p1__53042_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__53042_SHARP_);
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
var len__31349__auto___53047 = arguments.length;
var i__31350__auto___53048 = (0);
while(true){
if((i__31350__auto___53048 < len__31349__auto___53047)){
args__31356__auto__.push((arguments[i__31350__auto___53048]));

var G__53049 = (i__31350__auto___53048 + (1));
i__31350__auto___53048 = G__53049;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53046){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53046));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___53051 = arguments.length;
var i__31350__auto___53052 = (0);
while(true){
if((i__31350__auto___53052 < len__31349__auto___53051)){
args__31356__auto__.push((arguments[i__31350__auto___53052]));

var G__53053 = (i__31350__auto___53052 + (1));
i__31350__auto___53052 = G__53053;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53050){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53050));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53054){
var map__53055 = p__53054;
var map__53055__$1 = ((((!((map__53055 == null)))?((((map__53055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53055):map__53055);
var message = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33952__auto___53134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___53134,ch){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___53134,ch){
return (function (state_53106){
var state_val_53107 = (state_53106[(1)]);
if((state_val_53107 === (7))){
var inst_53102 = (state_53106[(2)]);
var state_53106__$1 = state_53106;
var statearr_53108_53135 = state_53106__$1;
(statearr_53108_53135[(2)] = inst_53102);

(statearr_53108_53135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (1))){
var state_53106__$1 = state_53106;
var statearr_53109_53136 = state_53106__$1;
(statearr_53109_53136[(2)] = null);

(statearr_53109_53136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (4))){
var inst_53059 = (state_53106[(7)]);
var inst_53059__$1 = (state_53106[(2)]);
var state_53106__$1 = (function (){var statearr_53110 = state_53106;
(statearr_53110[(7)] = inst_53059__$1);

return statearr_53110;
})();
if(cljs.core.truth_(inst_53059__$1)){
var statearr_53111_53137 = state_53106__$1;
(statearr_53111_53137[(1)] = (5));

} else {
var statearr_53112_53138 = state_53106__$1;
(statearr_53112_53138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (15))){
var inst_53066 = (state_53106[(8)]);
var inst_53081 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53066);
var inst_53082 = cljs.core.first.call(null,inst_53081);
var inst_53083 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53082);
var inst_53084 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53083)].join('');
var inst_53085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53084);
var state_53106__$1 = state_53106;
var statearr_53113_53139 = state_53106__$1;
(statearr_53113_53139[(2)] = inst_53085);

(statearr_53113_53139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (13))){
var inst_53090 = (state_53106[(2)]);
var state_53106__$1 = state_53106;
var statearr_53114_53140 = state_53106__$1;
(statearr_53114_53140[(2)] = inst_53090);

(statearr_53114_53140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (6))){
var state_53106__$1 = state_53106;
var statearr_53115_53141 = state_53106__$1;
(statearr_53115_53141[(2)] = null);

(statearr_53115_53141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (17))){
var inst_53088 = (state_53106[(2)]);
var state_53106__$1 = state_53106;
var statearr_53116_53142 = state_53106__$1;
(statearr_53116_53142[(2)] = inst_53088);

(statearr_53116_53142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (3))){
var inst_53104 = (state_53106[(2)]);
var state_53106__$1 = state_53106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53106__$1,inst_53104);
} else {
if((state_val_53107 === (12))){
var inst_53065 = (state_53106[(9)]);
var inst_53079 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53065,opts);
var state_53106__$1 = state_53106;
if(cljs.core.truth_(inst_53079)){
var statearr_53117_53143 = state_53106__$1;
(statearr_53117_53143[(1)] = (15));

} else {
var statearr_53118_53144 = state_53106__$1;
(statearr_53118_53144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (2))){
var state_53106__$1 = state_53106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53106__$1,(4),ch);
} else {
if((state_val_53107 === (11))){
var inst_53066 = (state_53106[(8)]);
var inst_53071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53072 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53066);
var inst_53073 = cljs.core.async.timeout.call(null,(1000));
var inst_53074 = [inst_53072,inst_53073];
var inst_53075 = (new cljs.core.PersistentVector(null,2,(5),inst_53071,inst_53074,null));
var state_53106__$1 = state_53106;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53106__$1,(14),inst_53075);
} else {
if((state_val_53107 === (9))){
var inst_53066 = (state_53106[(8)]);
var inst_53092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53093 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53066);
var inst_53094 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53093);
var inst_53095 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53094)].join('');
var inst_53096 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53095);
var state_53106__$1 = (function (){var statearr_53119 = state_53106;
(statearr_53119[(10)] = inst_53092);

return statearr_53119;
})();
var statearr_53120_53145 = state_53106__$1;
(statearr_53120_53145[(2)] = inst_53096);

(statearr_53120_53145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (5))){
var inst_53059 = (state_53106[(7)]);
var inst_53061 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53062 = (new cljs.core.PersistentArrayMap(null,2,inst_53061,null));
var inst_53063 = (new cljs.core.PersistentHashSet(null,inst_53062,null));
var inst_53064 = figwheel.client.focus_msgs.call(null,inst_53063,inst_53059);
var inst_53065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53064);
var inst_53066 = cljs.core.first.call(null,inst_53064);
var inst_53067 = figwheel.client.autoload_QMARK_.call(null);
var state_53106__$1 = (function (){var statearr_53121 = state_53106;
(statearr_53121[(8)] = inst_53066);

(statearr_53121[(9)] = inst_53065);

return statearr_53121;
})();
if(cljs.core.truth_(inst_53067)){
var statearr_53122_53146 = state_53106__$1;
(statearr_53122_53146[(1)] = (8));

} else {
var statearr_53123_53147 = state_53106__$1;
(statearr_53123_53147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (14))){
var inst_53077 = (state_53106[(2)]);
var state_53106__$1 = state_53106;
var statearr_53124_53148 = state_53106__$1;
(statearr_53124_53148[(2)] = inst_53077);

(statearr_53124_53148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (16))){
var state_53106__$1 = state_53106;
var statearr_53125_53149 = state_53106__$1;
(statearr_53125_53149[(2)] = null);

(statearr_53125_53149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (10))){
var inst_53098 = (state_53106[(2)]);
var state_53106__$1 = (function (){var statearr_53126 = state_53106;
(statearr_53126[(11)] = inst_53098);

return statearr_53126;
})();
var statearr_53127_53150 = state_53106__$1;
(statearr_53127_53150[(2)] = null);

(statearr_53127_53150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53107 === (8))){
var inst_53065 = (state_53106[(9)]);
var inst_53069 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53065,opts);
var state_53106__$1 = state_53106;
if(cljs.core.truth_(inst_53069)){
var statearr_53128_53151 = state_53106__$1;
(statearr_53128_53151[(1)] = (11));

} else {
var statearr_53129_53152 = state_53106__$1;
(statearr_53129_53152[(1)] = (12));

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
});})(c__33952__auto___53134,ch))
;
return ((function (switch__33607__auto__,c__33952__auto___53134,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_53130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53130[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__);

(statearr_53130[(1)] = (1));

return statearr_53130;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1 = (function (state_53106){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_53106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e53131){if((e53131 instanceof Object)){
var ex__33611__auto__ = e53131;
var statearr_53132_53153 = state_53106;
(statearr_53132_53153[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53154 = state_53106;
state_53106 = G__53154;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__ = function(state_53106){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1.call(this,state_53106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___53134,ch))
})();
var state__33954__auto__ = (function (){var statearr_53133 = f__33953__auto__.call(null);
(statearr_53133[(6)] = c__33952__auto___53134);

return statearr_53133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___53134,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53155_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53155_SHARP_));
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
var base_path_53157 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53157){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e53156){if((e53156 instanceof Error)){
var e = e53156;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53157], null));
} else {
var e = e53156;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_53157))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53158){
var map__53159 = p__53158;
var map__53159__$1 = ((((!((map__53159 == null)))?((((map__53159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53159):map__53159);
var opts = map__53159__$1;
var build_id = cljs.core.get.call(null,map__53159__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53159,map__53159__$1,opts,build_id){
return (function (p__53161){
var vec__53162 = p__53161;
var seq__53163 = cljs.core.seq.call(null,vec__53162);
var first__53164 = cljs.core.first.call(null,seq__53163);
var seq__53163__$1 = cljs.core.next.call(null,seq__53163);
var map__53165 = first__53164;
var map__53165__$1 = ((((!((map__53165 == null)))?((((map__53165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53165):map__53165);
var msg = map__53165__$1;
var msg_name = cljs.core.get.call(null,map__53165__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53163__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__53162,seq__53163,first__53164,seq__53163__$1,map__53165,map__53165__$1,msg,msg_name,_,map__53159,map__53159__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__53162,seq__53163,first__53164,seq__53163__$1,map__53165,map__53165__$1,msg,msg_name,_,map__53159,map__53159__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53159,map__53159__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__53167){
var vec__53168 = p__53167;
var seq__53169 = cljs.core.seq.call(null,vec__53168);
var first__53170 = cljs.core.first.call(null,seq__53169);
var seq__53169__$1 = cljs.core.next.call(null,seq__53169);
var map__53171 = first__53170;
var map__53171__$1 = ((((!((map__53171 == null)))?((((map__53171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53171):map__53171);
var msg = map__53171__$1;
var msg_name = cljs.core.get.call(null,map__53171__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53169__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__53173){
var map__53174 = p__53173;
var map__53174__$1 = ((((!((map__53174 == null)))?((((map__53174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53174):map__53174);
var on_compile_warning = cljs.core.get.call(null,map__53174__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__53174__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__53174,map__53174__$1,on_compile_warning,on_compile_fail){
return (function (p__53176){
var vec__53177 = p__53176;
var seq__53178 = cljs.core.seq.call(null,vec__53177);
var first__53179 = cljs.core.first.call(null,seq__53178);
var seq__53178__$1 = cljs.core.next.call(null,seq__53178);
var map__53180 = first__53179;
var map__53180__$1 = ((((!((map__53180 == null)))?((((map__53180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53180):map__53180);
var msg = map__53180__$1;
var msg_name = cljs.core.get.call(null,map__53180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53178__$1;
var pred__53182 = cljs.core._EQ_;
var expr__53183 = msg_name;
if(cljs.core.truth_(pred__53182.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__53183))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__53182.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__53183))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__53174,map__53174__$1,on_compile_warning,on_compile_fail))
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
return (function (state_53272){
var state_val_53273 = (state_53272[(1)]);
if((state_val_53273 === (7))){
var inst_53192 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53192)){
var statearr_53274_53321 = state_53272__$1;
(statearr_53274_53321[(1)] = (8));

} else {
var statearr_53275_53322 = state_53272__$1;
(statearr_53275_53322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (20))){
var inst_53266 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53276_53323 = state_53272__$1;
(statearr_53276_53323[(2)] = inst_53266);

(statearr_53276_53323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (27))){
var inst_53262 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53277_53324 = state_53272__$1;
(statearr_53277_53324[(2)] = inst_53262);

(statearr_53277_53324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (1))){
var inst_53185 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53185)){
var statearr_53278_53325 = state_53272__$1;
(statearr_53278_53325[(1)] = (2));

} else {
var statearr_53279_53326 = state_53272__$1;
(statearr_53279_53326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (24))){
var inst_53264 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53280_53327 = state_53272__$1;
(statearr_53280_53327[(2)] = inst_53264);

(statearr_53280_53327[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (4))){
var inst_53270 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53272__$1,inst_53270);
} else {
if((state_val_53273 === (15))){
var inst_53268 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53281_53328 = state_53272__$1;
(statearr_53281_53328[(2)] = inst_53268);

(statearr_53281_53328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (21))){
var inst_53221 = (state_53272[(2)]);
var inst_53222 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53223 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53222);
var state_53272__$1 = (function (){var statearr_53282 = state_53272;
(statearr_53282[(7)] = inst_53221);

return statearr_53282;
})();
var statearr_53283_53329 = state_53272__$1;
(statearr_53283_53329[(2)] = inst_53223);

(statearr_53283_53329[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (31))){
var inst_53251 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53251)){
var statearr_53284_53330 = state_53272__$1;
(statearr_53284_53330[(1)] = (34));

} else {
var statearr_53285_53331 = state_53272__$1;
(statearr_53285_53331[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (32))){
var inst_53260 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53286_53332 = state_53272__$1;
(statearr_53286_53332[(2)] = inst_53260);

(statearr_53286_53332[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (33))){
var inst_53247 = (state_53272[(2)]);
var inst_53248 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53249 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53248);
var state_53272__$1 = (function (){var statearr_53287 = state_53272;
(statearr_53287[(8)] = inst_53247);

return statearr_53287;
})();
var statearr_53288_53333 = state_53272__$1;
(statearr_53288_53333[(2)] = inst_53249);

(statearr_53288_53333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (13))){
var inst_53206 = figwheel.client.heads_up.clear.call(null);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(16),inst_53206);
} else {
if((state_val_53273 === (22))){
var inst_53227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53228 = figwheel.client.heads_up.append_warning_message.call(null,inst_53227);
var state_53272__$1 = state_53272;
var statearr_53289_53334 = state_53272__$1;
(statearr_53289_53334[(2)] = inst_53228);

(statearr_53289_53334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (36))){
var inst_53258 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53290_53335 = state_53272__$1;
(statearr_53290_53335[(2)] = inst_53258);

(statearr_53290_53335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (29))){
var inst_53238 = (state_53272[(2)]);
var inst_53239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53240 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53239);
var state_53272__$1 = (function (){var statearr_53291 = state_53272;
(statearr_53291[(9)] = inst_53238);

return statearr_53291;
})();
var statearr_53292_53336 = state_53272__$1;
(statearr_53292_53336[(2)] = inst_53240);

(statearr_53292_53336[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (6))){
var inst_53187 = (state_53272[(10)]);
var state_53272__$1 = state_53272;
var statearr_53293_53337 = state_53272__$1;
(statearr_53293_53337[(2)] = inst_53187);

(statearr_53293_53337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (28))){
var inst_53234 = (state_53272[(2)]);
var inst_53235 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53236 = figwheel.client.heads_up.display_warning.call(null,inst_53235);
var state_53272__$1 = (function (){var statearr_53294 = state_53272;
(statearr_53294[(11)] = inst_53234);

return statearr_53294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(29),inst_53236);
} else {
if((state_val_53273 === (25))){
var inst_53232 = figwheel.client.heads_up.clear.call(null);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(28),inst_53232);
} else {
if((state_val_53273 === (34))){
var inst_53253 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(37),inst_53253);
} else {
if((state_val_53273 === (17))){
var inst_53212 = (state_53272[(2)]);
var inst_53213 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53214 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53213);
var state_53272__$1 = (function (){var statearr_53295 = state_53272;
(statearr_53295[(12)] = inst_53212);

return statearr_53295;
})();
var statearr_53296_53338 = state_53272__$1;
(statearr_53296_53338[(2)] = inst_53214);

(statearr_53296_53338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (3))){
var inst_53204 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53204)){
var statearr_53297_53339 = state_53272__$1;
(statearr_53297_53339[(1)] = (13));

} else {
var statearr_53298_53340 = state_53272__$1;
(statearr_53298_53340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (12))){
var inst_53200 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53299_53341 = state_53272__$1;
(statearr_53299_53341[(2)] = inst_53200);

(statearr_53299_53341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (2))){
var inst_53187 = (state_53272[(10)]);
var inst_53187__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_53272__$1 = (function (){var statearr_53300 = state_53272;
(statearr_53300[(10)] = inst_53187__$1);

return statearr_53300;
})();
if(cljs.core.truth_(inst_53187__$1)){
var statearr_53301_53342 = state_53272__$1;
(statearr_53301_53342[(1)] = (5));

} else {
var statearr_53302_53343 = state_53272__$1;
(statearr_53302_53343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (23))){
var inst_53230 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53230)){
var statearr_53303_53344 = state_53272__$1;
(statearr_53303_53344[(1)] = (25));

} else {
var statearr_53304_53345 = state_53272__$1;
(statearr_53304_53345[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (35))){
var state_53272__$1 = state_53272;
var statearr_53305_53346 = state_53272__$1;
(statearr_53305_53346[(2)] = null);

(statearr_53305_53346[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (19))){
var inst_53225 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53225)){
var statearr_53306_53347 = state_53272__$1;
(statearr_53306_53347[(1)] = (22));

} else {
var statearr_53307_53348 = state_53272__$1;
(statearr_53307_53348[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (11))){
var inst_53196 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53308_53349 = state_53272__$1;
(statearr_53308_53349[(2)] = inst_53196);

(statearr_53308_53349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (9))){
var inst_53198 = figwheel.client.heads_up.clear.call(null);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(12),inst_53198);
} else {
if((state_val_53273 === (5))){
var inst_53189 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_53272__$1 = state_53272;
var statearr_53309_53350 = state_53272__$1;
(statearr_53309_53350[(2)] = inst_53189);

(statearr_53309_53350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (14))){
var inst_53216 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53216)){
var statearr_53310_53351 = state_53272__$1;
(statearr_53310_53351[(1)] = (18));

} else {
var statearr_53311_53352 = state_53272__$1;
(statearr_53311_53352[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (26))){
var inst_53242 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_53272__$1 = state_53272;
if(cljs.core.truth_(inst_53242)){
var statearr_53312_53353 = state_53272__$1;
(statearr_53312_53353[(1)] = (30));

} else {
var statearr_53313_53354 = state_53272__$1;
(statearr_53313_53354[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (16))){
var inst_53208 = (state_53272[(2)]);
var inst_53209 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53210 = figwheel.client.heads_up.display_exception.call(null,inst_53209);
var state_53272__$1 = (function (){var statearr_53314 = state_53272;
(statearr_53314[(13)] = inst_53208);

return statearr_53314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(17),inst_53210);
} else {
if((state_val_53273 === (30))){
var inst_53244 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53245 = figwheel.client.heads_up.display_warning.call(null,inst_53244);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(33),inst_53245);
} else {
if((state_val_53273 === (10))){
var inst_53202 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53315_53355 = state_53272__$1;
(statearr_53315_53355[(2)] = inst_53202);

(statearr_53315_53355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (18))){
var inst_53218 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53219 = figwheel.client.heads_up.display_exception.call(null,inst_53218);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(21),inst_53219);
} else {
if((state_val_53273 === (37))){
var inst_53255 = (state_53272[(2)]);
var state_53272__$1 = state_53272;
var statearr_53316_53356 = state_53272__$1;
(statearr_53316_53356[(2)] = inst_53255);

(statearr_53316_53356[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53273 === (8))){
var inst_53194 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53272__$1 = state_53272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53272__$1,(11),inst_53194);
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
var statearr_53317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53317[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__);

(statearr_53317[(1)] = (1));

return statearr_53317;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1 = (function (state_53272){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_53272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e53318){if((e53318 instanceof Object)){
var ex__33611__auto__ = e53318;
var statearr_53319_53357 = state_53272;
(statearr_53319_53357[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53358 = state_53272;
state_53272 = G__53358;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__ = function(state_53272){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1.call(this,state_53272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,msg_hist,msg_names,msg))
})();
var state__33954__auto__ = (function (){var statearr_53320 = f__33953__auto__.call(null);
(statearr_53320[(6)] = c__33952__auto__);

return statearr_53320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,msg_hist,msg_names,msg))
);

return c__33952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33952__auto___53387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___53387,ch){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___53387,ch){
return (function (state_53373){
var state_val_53374 = (state_53373[(1)]);
if((state_val_53374 === (1))){
var state_53373__$1 = state_53373;
var statearr_53375_53388 = state_53373__$1;
(statearr_53375_53388[(2)] = null);

(statearr_53375_53388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53374 === (2))){
var state_53373__$1 = state_53373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53373__$1,(4),ch);
} else {
if((state_val_53374 === (3))){
var inst_53371 = (state_53373[(2)]);
var state_53373__$1 = state_53373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53373__$1,inst_53371);
} else {
if((state_val_53374 === (4))){
var inst_53361 = (state_53373[(7)]);
var inst_53361__$1 = (state_53373[(2)]);
var state_53373__$1 = (function (){var statearr_53376 = state_53373;
(statearr_53376[(7)] = inst_53361__$1);

return statearr_53376;
})();
if(cljs.core.truth_(inst_53361__$1)){
var statearr_53377_53389 = state_53373__$1;
(statearr_53377_53389[(1)] = (5));

} else {
var statearr_53378_53390 = state_53373__$1;
(statearr_53378_53390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53374 === (5))){
var inst_53361 = (state_53373[(7)]);
var inst_53363 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_53361);
var state_53373__$1 = state_53373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53373__$1,(8),inst_53363);
} else {
if((state_val_53374 === (6))){
var state_53373__$1 = state_53373;
var statearr_53379_53391 = state_53373__$1;
(statearr_53379_53391[(2)] = null);

(statearr_53379_53391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53374 === (7))){
var inst_53369 = (state_53373[(2)]);
var state_53373__$1 = state_53373;
var statearr_53380_53392 = state_53373__$1;
(statearr_53380_53392[(2)] = inst_53369);

(statearr_53380_53392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53374 === (8))){
var inst_53365 = (state_53373[(2)]);
var state_53373__$1 = (function (){var statearr_53381 = state_53373;
(statearr_53381[(8)] = inst_53365);

return statearr_53381;
})();
var statearr_53382_53393 = state_53373__$1;
(statearr_53382_53393[(2)] = null);

(statearr_53382_53393[(1)] = (2));


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
});})(c__33952__auto___53387,ch))
;
return ((function (switch__33607__auto__,c__33952__auto___53387,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_53383 = [null,null,null,null,null,null,null,null,null];
(statearr_53383[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33608__auto__);

(statearr_53383[(1)] = (1));

return statearr_53383;
});
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1 = (function (state_53373){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_53373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e53384){if((e53384 instanceof Object)){
var ex__33611__auto__ = e53384;
var statearr_53385_53394 = state_53373;
(statearr_53385_53394[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53395 = state_53373;
state_53373 = G__53395;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__ = function(state_53373){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1.call(this,state_53373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___53387,ch))
})();
var state__33954__auto__ = (function (){var statearr_53386 = f__33953__auto__.call(null);
(statearr_53386[(6)] = c__33952__auto___53387);

return statearr_53386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___53387,ch))
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
return (function (state_53401){
var state_val_53402 = (state_53401[(1)]);
if((state_val_53402 === (1))){
var inst_53396 = cljs.core.async.timeout.call(null,(3000));
var state_53401__$1 = state_53401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53401__$1,(2),inst_53396);
} else {
if((state_val_53402 === (2))){
var inst_53398 = (state_53401[(2)]);
var inst_53399 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_53401__$1 = (function (){var statearr_53403 = state_53401;
(statearr_53403[(7)] = inst_53398);

return statearr_53403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53401__$1,inst_53399);
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
var statearr_53404 = [null,null,null,null,null,null,null,null];
(statearr_53404[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__);

(statearr_53404[(1)] = (1));

return statearr_53404;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1 = (function (state_53401){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_53401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e53405){if((e53405 instanceof Object)){
var ex__33611__auto__ = e53405;
var statearr_53406_53408 = state_53401;
(statearr_53406_53408[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53409 = state_53401;
state_53401 = G__53409;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__ = function(state_53401){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1.call(this,state_53401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_53407 = f__33953__auto__.call(null);
(statearr_53407[(6)] = c__33952__auto__);

return statearr_53407;
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
return (function (state_53416){
var state_val_53417 = (state_53416[(1)]);
if((state_val_53417 === (1))){
var inst_53410 = cljs.core.async.timeout.call(null,(2000));
var state_53416__$1 = state_53416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53416__$1,(2),inst_53410);
} else {
if((state_val_53417 === (2))){
var inst_53412 = (state_53416[(2)]);
var inst_53413 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_53414 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_53413);
var state_53416__$1 = (function (){var statearr_53418 = state_53416;
(statearr_53418[(7)] = inst_53412);

return statearr_53418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53416__$1,inst_53414);
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
var statearr_53419 = [null,null,null,null,null,null,null,null];
(statearr_53419[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__);

(statearr_53419[(1)] = (1));

return statearr_53419;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1 = (function (state_53416){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_53416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e53420){if((e53420 instanceof Object)){
var ex__33611__auto__ = e53420;
var statearr_53421_53423 = state_53416;
(statearr_53421_53423[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53424 = state_53416;
state_53416 = G__53424;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__ = function(state_53416){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1.call(this,state_53416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33954__auto__ = (function (){var statearr_53422 = f__33953__auto__.call(null);
(statearr_53422[(6)] = c__33952__auto__);

return statearr_53422;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__53425){
var map__53426 = p__53425;
var map__53426__$1 = ((((!((map__53426 == null)))?((((map__53426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53426):map__53426);
var file = cljs.core.get.call(null,map__53426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__53426__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53426__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__53428 = "";
var G__53428__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53428),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__53428);
var G__53428__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53428__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__53428__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53428__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__53428__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__53429){
var map__53430 = p__53429;
var map__53430__$1 = ((((!((map__53430 == null)))?((((map__53430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53430):map__53430);
var ed = map__53430__$1;
var formatted_exception = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__53432_53436 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__53433_53437 = null;
var count__53434_53438 = (0);
var i__53435_53439 = (0);
while(true){
if((i__53435_53439 < count__53434_53438)){
var msg_53440 = cljs.core._nth.call(null,chunk__53433_53437,i__53435_53439);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53440);

var G__53441 = seq__53432_53436;
var G__53442 = chunk__53433_53437;
var G__53443 = count__53434_53438;
var G__53444 = (i__53435_53439 + (1));
seq__53432_53436 = G__53441;
chunk__53433_53437 = G__53442;
count__53434_53438 = G__53443;
i__53435_53439 = G__53444;
continue;
} else {
var temp__5278__auto___53445 = cljs.core.seq.call(null,seq__53432_53436);
if(temp__5278__auto___53445){
var seq__53432_53446__$1 = temp__5278__auto___53445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53432_53446__$1)){
var c__31003__auto___53447 = cljs.core.chunk_first.call(null,seq__53432_53446__$1);
var G__53448 = cljs.core.chunk_rest.call(null,seq__53432_53446__$1);
var G__53449 = c__31003__auto___53447;
var G__53450 = cljs.core.count.call(null,c__31003__auto___53447);
var G__53451 = (0);
seq__53432_53436 = G__53448;
chunk__53433_53437 = G__53449;
count__53434_53438 = G__53450;
i__53435_53439 = G__53451;
continue;
} else {
var msg_53452 = cljs.core.first.call(null,seq__53432_53446__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53452);

var G__53453 = cljs.core.next.call(null,seq__53432_53446__$1);
var G__53454 = null;
var G__53455 = (0);
var G__53456 = (0);
seq__53432_53436 = G__53453;
chunk__53433_53437 = G__53454;
count__53434_53438 = G__53455;
i__53435_53439 = G__53456;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__53457){
var map__53458 = p__53457;
var map__53458__$1 = ((((!((map__53458 == null)))?((((map__53458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53458):map__53458);
var w = map__53458__$1;
var message = cljs.core.get.call(null,map__53458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/ui-out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/ui-out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__53460 = cljs.core.seq.call(null,plugins);
var chunk__53461 = null;
var count__53462 = (0);
var i__53463 = (0);
while(true){
if((i__53463 < count__53462)){
var vec__53464 = cljs.core._nth.call(null,chunk__53461,i__53463);
var k = cljs.core.nth.call(null,vec__53464,(0),null);
var plugin = cljs.core.nth.call(null,vec__53464,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53470 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53460,chunk__53461,count__53462,i__53463,pl_53470,vec__53464,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53470.call(null,msg_hist);
});})(seq__53460,chunk__53461,count__53462,i__53463,pl_53470,vec__53464,k,plugin))
);
} else {
}

var G__53471 = seq__53460;
var G__53472 = chunk__53461;
var G__53473 = count__53462;
var G__53474 = (i__53463 + (1));
seq__53460 = G__53471;
chunk__53461 = G__53472;
count__53462 = G__53473;
i__53463 = G__53474;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__53460);
if(temp__5278__auto__){
var seq__53460__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53460__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__53460__$1);
var G__53475 = cljs.core.chunk_rest.call(null,seq__53460__$1);
var G__53476 = c__31003__auto__;
var G__53477 = cljs.core.count.call(null,c__31003__auto__);
var G__53478 = (0);
seq__53460 = G__53475;
chunk__53461 = G__53476;
count__53462 = G__53477;
i__53463 = G__53478;
continue;
} else {
var vec__53467 = cljs.core.first.call(null,seq__53460__$1);
var k = cljs.core.nth.call(null,vec__53467,(0),null);
var plugin = cljs.core.nth.call(null,vec__53467,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53479 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53460,chunk__53461,count__53462,i__53463,pl_53479,vec__53467,k,plugin,seq__53460__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53479.call(null,msg_hist);
});})(seq__53460,chunk__53461,count__53462,i__53463,pl_53479,vec__53467,k,plugin,seq__53460__$1,temp__5278__auto__))
);
} else {
}

var G__53480 = cljs.core.next.call(null,seq__53460__$1);
var G__53481 = null;
var G__53482 = (0);
var G__53483 = (0);
seq__53460 = G__53480;
chunk__53461 = G__53481;
count__53462 = G__53482;
i__53463 = G__53483;
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
var G__53485 = arguments.length;
switch (G__53485) {
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

var seq__53486_53491 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53487_53492 = null;
var count__53488_53493 = (0);
var i__53489_53494 = (0);
while(true){
if((i__53489_53494 < count__53488_53493)){
var msg_53495 = cljs.core._nth.call(null,chunk__53487_53492,i__53489_53494);
figwheel.client.socket.handle_incoming_message.call(null,msg_53495);

var G__53496 = seq__53486_53491;
var G__53497 = chunk__53487_53492;
var G__53498 = count__53488_53493;
var G__53499 = (i__53489_53494 + (1));
seq__53486_53491 = G__53496;
chunk__53487_53492 = G__53497;
count__53488_53493 = G__53498;
i__53489_53494 = G__53499;
continue;
} else {
var temp__5278__auto___53500 = cljs.core.seq.call(null,seq__53486_53491);
if(temp__5278__auto___53500){
var seq__53486_53501__$1 = temp__5278__auto___53500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53486_53501__$1)){
var c__31003__auto___53502 = cljs.core.chunk_first.call(null,seq__53486_53501__$1);
var G__53503 = cljs.core.chunk_rest.call(null,seq__53486_53501__$1);
var G__53504 = c__31003__auto___53502;
var G__53505 = cljs.core.count.call(null,c__31003__auto___53502);
var G__53506 = (0);
seq__53486_53491 = G__53503;
chunk__53487_53492 = G__53504;
count__53488_53493 = G__53505;
i__53489_53494 = G__53506;
continue;
} else {
var msg_53507 = cljs.core.first.call(null,seq__53486_53501__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53507);

var G__53508 = cljs.core.next.call(null,seq__53486_53501__$1);
var G__53509 = null;
var G__53510 = (0);
var G__53511 = (0);
seq__53486_53491 = G__53508;
chunk__53487_53492 = G__53509;
count__53488_53493 = G__53510;
i__53489_53494 = G__53511;
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
var len__31349__auto___53516 = arguments.length;
var i__31350__auto___53517 = (0);
while(true){
if((i__31350__auto___53517 < len__31349__auto___53516)){
args__31356__auto__.push((arguments[i__31350__auto___53517]));

var G__53518 = (i__31350__auto___53517 + (1));
i__31350__auto___53517 = G__53518;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53513){
var map__53514 = p__53513;
var map__53514__$1 = ((((!((map__53514 == null)))?((((map__53514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53514):map__53514);
var opts = map__53514__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53512){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53512));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53519){if((e53519 instanceof Error)){
var e = e53519;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53519;

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
return (function (p__53520){
var map__53521 = p__53520;
var map__53521__$1 = ((((!((map__53521 == null)))?((((map__53521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53521):map__53521);
var msg_name = cljs.core.get.call(null,map__53521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510360407769
