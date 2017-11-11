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
}catch (e46260){if((e46260 instanceof Error)){
var e = e46260;
return "Error: Unable to stringify";
} else {
throw e46260;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46263 = arguments.length;
switch (G__46263) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46261_SHARP_){
if(typeof p1__46261_SHARP_ === 'string'){
return p1__46261_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46261_SHARP_);
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
var len__31349__auto___46267 = arguments.length;
var i__31350__auto___46268 = (0);
while(true){
if((i__31350__auto___46268 < len__31349__auto___46267)){
args__31356__auto__.push((arguments[i__31350__auto___46268]));

var G__46270 = (i__31350__auto___46268 + (1));
i__31350__auto___46268 = G__46270;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46265){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46265));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___46278 = arguments.length;
var i__31350__auto___46279 = (0);
while(true){
if((i__31350__auto___46279 < len__31349__auto___46278)){
args__31356__auto__.push((arguments[i__31350__auto___46279]));

var G__46280 = (i__31350__auto___46279 + (1));
i__31350__auto___46279 = G__46280;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46277){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46277));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46288){
var map__46289 = p__46288;
var map__46289__$1 = ((((!((map__46289 == null)))?((((map__46289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46289):map__46289);
var message = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33952__auto___46374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___46374,ch){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___46374,ch){
return (function (state_46343){
var state_val_46344 = (state_46343[(1)]);
if((state_val_46344 === (7))){
var inst_46339 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46345_46379 = state_46343__$1;
(statearr_46345_46379[(2)] = inst_46339);

(statearr_46345_46379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (1))){
var state_46343__$1 = state_46343;
var statearr_46347_46380 = state_46343__$1;
(statearr_46347_46380[(2)] = null);

(statearr_46347_46380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (4))){
var inst_46296 = (state_46343[(7)]);
var inst_46296__$1 = (state_46343[(2)]);
var state_46343__$1 = (function (){var statearr_46348 = state_46343;
(statearr_46348[(7)] = inst_46296__$1);

return statearr_46348;
})();
if(cljs.core.truth_(inst_46296__$1)){
var statearr_46349_46381 = state_46343__$1;
(statearr_46349_46381[(1)] = (5));

} else {
var statearr_46351_46382 = state_46343__$1;
(statearr_46351_46382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (15))){
var inst_46303 = (state_46343[(8)]);
var inst_46318 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46303);
var inst_46319 = cljs.core.first.call(null,inst_46318);
var inst_46320 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46319);
var inst_46321 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46320)].join('');
var inst_46322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46321);
var state_46343__$1 = state_46343;
var statearr_46352_46387 = state_46343__$1;
(statearr_46352_46387[(2)] = inst_46322);

(statearr_46352_46387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (13))){
var inst_46327 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46353_46388 = state_46343__$1;
(statearr_46353_46388[(2)] = inst_46327);

(statearr_46353_46388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (6))){
var state_46343__$1 = state_46343;
var statearr_46354_46389 = state_46343__$1;
(statearr_46354_46389[(2)] = null);

(statearr_46354_46389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (17))){
var inst_46325 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46356_46392 = state_46343__$1;
(statearr_46356_46392[(2)] = inst_46325);

(statearr_46356_46392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (3))){
var inst_46341 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46343__$1,inst_46341);
} else {
if((state_val_46344 === (12))){
var inst_46302 = (state_46343[(9)]);
var inst_46316 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46302,opts);
var state_46343__$1 = state_46343;
if(cljs.core.truth_(inst_46316)){
var statearr_46357_46393 = state_46343__$1;
(statearr_46357_46393[(1)] = (15));

} else {
var statearr_46358_46394 = state_46343__$1;
(statearr_46358_46394[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (2))){
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46343__$1,(4),ch);
} else {
if((state_val_46344 === (11))){
var inst_46303 = (state_46343[(8)]);
var inst_46308 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46309 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46303);
var inst_46310 = cljs.core.async.timeout.call(null,(1000));
var inst_46311 = [inst_46309,inst_46310];
var inst_46312 = (new cljs.core.PersistentVector(null,2,(5),inst_46308,inst_46311,null));
var state_46343__$1 = state_46343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46343__$1,(14),inst_46312);
} else {
if((state_val_46344 === (9))){
var inst_46303 = (state_46343[(8)]);
var inst_46329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46330 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46303);
var inst_46331 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46330);
var inst_46332 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46331)].join('');
var inst_46333 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46332);
var state_46343__$1 = (function (){var statearr_46359 = state_46343;
(statearr_46359[(10)] = inst_46329);

return statearr_46359;
})();
var statearr_46360_46400 = state_46343__$1;
(statearr_46360_46400[(2)] = inst_46333);

(statearr_46360_46400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (5))){
var inst_46296 = (state_46343[(7)]);
var inst_46298 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46299 = (new cljs.core.PersistentArrayMap(null,2,inst_46298,null));
var inst_46300 = (new cljs.core.PersistentHashSet(null,inst_46299,null));
var inst_46301 = figwheel.client.focus_msgs.call(null,inst_46300,inst_46296);
var inst_46302 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46301);
var inst_46303 = cljs.core.first.call(null,inst_46301);
var inst_46304 = figwheel.client.autoload_QMARK_.call(null);
var state_46343__$1 = (function (){var statearr_46361 = state_46343;
(statearr_46361[(8)] = inst_46303);

(statearr_46361[(9)] = inst_46302);

return statearr_46361;
})();
if(cljs.core.truth_(inst_46304)){
var statearr_46362_46403 = state_46343__$1;
(statearr_46362_46403[(1)] = (8));

} else {
var statearr_46363_46405 = state_46343__$1;
(statearr_46363_46405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (14))){
var inst_46314 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46364_46406 = state_46343__$1;
(statearr_46364_46406[(2)] = inst_46314);

(statearr_46364_46406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (16))){
var state_46343__$1 = state_46343;
var statearr_46365_46407 = state_46343__$1;
(statearr_46365_46407[(2)] = null);

(statearr_46365_46407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (10))){
var inst_46335 = (state_46343[(2)]);
var state_46343__$1 = (function (){var statearr_46366 = state_46343;
(statearr_46366[(11)] = inst_46335);

return statearr_46366;
})();
var statearr_46367_46408 = state_46343__$1;
(statearr_46367_46408[(2)] = null);

(statearr_46367_46408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (8))){
var inst_46302 = (state_46343[(9)]);
var inst_46306 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46302,opts);
var state_46343__$1 = state_46343;
if(cljs.core.truth_(inst_46306)){
var statearr_46368_46412 = state_46343__$1;
(statearr_46368_46412[(1)] = (11));

} else {
var statearr_46369_46413 = state_46343__$1;
(statearr_46369_46413[(1)] = (12));

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
});})(c__33952__auto___46374,ch))
;
return ((function (switch__33607__auto__,c__33952__auto___46374,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_46370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46370[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__);

(statearr_46370[(1)] = (1));

return statearr_46370;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1 = (function (state_46343){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_46343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e46371){if((e46371 instanceof Object)){
var ex__33611__auto__ = e46371;
var statearr_46372_46414 = state_46343;
(statearr_46372_46414[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46418 = state_46343;
state_46343 = G__46418;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__ = function(state_46343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1.call(this,state_46343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33608__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___46374,ch))
})();
var state__33954__auto__ = (function (){var statearr_46373 = f__33953__auto__.call(null);
(statearr_46373[(6)] = c__33952__auto___46374);

return statearr_46373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___46374,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46419_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46419_SHARP_));
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
var base_path_46426 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46426){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46424){if((e46424 instanceof Error)){
var e = e46424;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46426], null));
} else {
var e = e46424;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46426))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46431){
var map__46432 = p__46431;
var map__46432__$1 = ((((!((map__46432 == null)))?((((map__46432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46432):map__46432);
var opts = map__46432__$1;
var build_id = cljs.core.get.call(null,map__46432__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46432,map__46432__$1,opts,build_id){
return (function (p__46434){
var vec__46435 = p__46434;
var seq__46436 = cljs.core.seq.call(null,vec__46435);
var first__46437 = cljs.core.first.call(null,seq__46436);
var seq__46436__$1 = cljs.core.next.call(null,seq__46436);
var map__46438 = first__46437;
var map__46438__$1 = ((((!((map__46438 == null)))?((((map__46438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46438):map__46438);
var msg = map__46438__$1;
var msg_name = cljs.core.get.call(null,map__46438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46436__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46435,seq__46436,first__46437,seq__46436__$1,map__46438,map__46438__$1,msg,msg_name,_,map__46432,map__46432__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46435,seq__46436,first__46437,seq__46436__$1,map__46438,map__46438__$1,msg,msg_name,_,map__46432,map__46432__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46432,map__46432__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46443){
var vec__46444 = p__46443;
var seq__46445 = cljs.core.seq.call(null,vec__46444);
var first__46446 = cljs.core.first.call(null,seq__46445);
var seq__46445__$1 = cljs.core.next.call(null,seq__46445);
var map__46447 = first__46446;
var map__46447__$1 = ((((!((map__46447 == null)))?((((map__46447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46447):map__46447);
var msg = map__46447__$1;
var msg_name = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46445__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46452){
var map__46453 = p__46452;
var map__46453__$1 = ((((!((map__46453 == null)))?((((map__46453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46453):map__46453);
var on_compile_warning = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46453,map__46453__$1,on_compile_warning,on_compile_fail){
return (function (p__46455){
var vec__46456 = p__46455;
var seq__46457 = cljs.core.seq.call(null,vec__46456);
var first__46458 = cljs.core.first.call(null,seq__46457);
var seq__46457__$1 = cljs.core.next.call(null,seq__46457);
var map__46459 = first__46458;
var map__46459__$1 = ((((!((map__46459 == null)))?((((map__46459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46459):map__46459);
var msg = map__46459__$1;
var msg_name = cljs.core.get.call(null,map__46459__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46457__$1;
var pred__46461 = cljs.core._EQ_;
var expr__46462 = msg_name;
if(cljs.core.truth_(pred__46461.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46462))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46461.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46462))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46453,map__46453__$1,on_compile_warning,on_compile_fail))
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
return (function (state_46551){
var state_val_46552 = (state_46551[(1)]);
if((state_val_46552 === (7))){
var inst_46471 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46471)){
var statearr_46553_46602 = state_46551__$1;
(statearr_46553_46602[(1)] = (8));

} else {
var statearr_46554_46603 = state_46551__$1;
(statearr_46554_46603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (20))){
var inst_46545 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46555_46604 = state_46551__$1;
(statearr_46555_46604[(2)] = inst_46545);

(statearr_46555_46604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (27))){
var inst_46541 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46556_46605 = state_46551__$1;
(statearr_46556_46605[(2)] = inst_46541);

(statearr_46556_46605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (1))){
var inst_46464 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46464)){
var statearr_46557_46608 = state_46551__$1;
(statearr_46557_46608[(1)] = (2));

} else {
var statearr_46558_46609 = state_46551__$1;
(statearr_46558_46609[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (24))){
var inst_46543 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46559_46610 = state_46551__$1;
(statearr_46559_46610[(2)] = inst_46543);

(statearr_46559_46610[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (4))){
var inst_46549 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46551__$1,inst_46549);
} else {
if((state_val_46552 === (15))){
var inst_46547 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46560_46611 = state_46551__$1;
(statearr_46560_46611[(2)] = inst_46547);

(statearr_46560_46611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (21))){
var inst_46500 = (state_46551[(2)]);
var inst_46501 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46502 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46501);
var state_46551__$1 = (function (){var statearr_46561 = state_46551;
(statearr_46561[(7)] = inst_46500);

return statearr_46561;
})();
var statearr_46562_46612 = state_46551__$1;
(statearr_46562_46612[(2)] = inst_46502);

(statearr_46562_46612[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (31))){
var inst_46530 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46530)){
var statearr_46563_46613 = state_46551__$1;
(statearr_46563_46613[(1)] = (34));

} else {
var statearr_46564_46614 = state_46551__$1;
(statearr_46564_46614[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (32))){
var inst_46539 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46565_46615 = state_46551__$1;
(statearr_46565_46615[(2)] = inst_46539);

(statearr_46565_46615[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (33))){
var inst_46526 = (state_46551[(2)]);
var inst_46527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46528 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46527);
var state_46551__$1 = (function (){var statearr_46566 = state_46551;
(statearr_46566[(8)] = inst_46526);

return statearr_46566;
})();
var statearr_46567_46616 = state_46551__$1;
(statearr_46567_46616[(2)] = inst_46528);

(statearr_46567_46616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (13))){
var inst_46485 = figwheel.client.heads_up.clear.call(null);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(16),inst_46485);
} else {
if((state_val_46552 === (22))){
var inst_46506 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46507 = figwheel.client.heads_up.append_warning_message.call(null,inst_46506);
var state_46551__$1 = state_46551;
var statearr_46568_46617 = state_46551__$1;
(statearr_46568_46617[(2)] = inst_46507);

(statearr_46568_46617[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (36))){
var inst_46537 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46569_46618 = state_46551__$1;
(statearr_46569_46618[(2)] = inst_46537);

(statearr_46569_46618[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (29))){
var inst_46517 = (state_46551[(2)]);
var inst_46518 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46519 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46518);
var state_46551__$1 = (function (){var statearr_46570 = state_46551;
(statearr_46570[(9)] = inst_46517);

return statearr_46570;
})();
var statearr_46571_46619 = state_46551__$1;
(statearr_46571_46619[(2)] = inst_46519);

(statearr_46571_46619[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (6))){
var inst_46466 = (state_46551[(10)]);
var state_46551__$1 = state_46551;
var statearr_46572_46620 = state_46551__$1;
(statearr_46572_46620[(2)] = inst_46466);

(statearr_46572_46620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (28))){
var inst_46513 = (state_46551[(2)]);
var inst_46514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46515 = figwheel.client.heads_up.display_warning.call(null,inst_46514);
var state_46551__$1 = (function (){var statearr_46573 = state_46551;
(statearr_46573[(11)] = inst_46513);

return statearr_46573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(29),inst_46515);
} else {
if((state_val_46552 === (25))){
var inst_46511 = figwheel.client.heads_up.clear.call(null);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(28),inst_46511);
} else {
if((state_val_46552 === (34))){
var inst_46532 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(37),inst_46532);
} else {
if((state_val_46552 === (17))){
var inst_46491 = (state_46551[(2)]);
var inst_46492 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46493 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46492);
var state_46551__$1 = (function (){var statearr_46574 = state_46551;
(statearr_46574[(12)] = inst_46491);

return statearr_46574;
})();
var statearr_46575_46621 = state_46551__$1;
(statearr_46575_46621[(2)] = inst_46493);

(statearr_46575_46621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (3))){
var inst_46483 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46483)){
var statearr_46576_46622 = state_46551__$1;
(statearr_46576_46622[(1)] = (13));

} else {
var statearr_46577_46623 = state_46551__$1;
(statearr_46577_46623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (12))){
var inst_46479 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46578_46624 = state_46551__$1;
(statearr_46578_46624[(2)] = inst_46479);

(statearr_46578_46624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (2))){
var inst_46466 = (state_46551[(10)]);
var inst_46466__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46551__$1 = (function (){var statearr_46579 = state_46551;
(statearr_46579[(10)] = inst_46466__$1);

return statearr_46579;
})();
if(cljs.core.truth_(inst_46466__$1)){
var statearr_46580_46625 = state_46551__$1;
(statearr_46580_46625[(1)] = (5));

} else {
var statearr_46581_46626 = state_46551__$1;
(statearr_46581_46626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (23))){
var inst_46509 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46509)){
var statearr_46582_46627 = state_46551__$1;
(statearr_46582_46627[(1)] = (25));

} else {
var statearr_46583_46628 = state_46551__$1;
(statearr_46583_46628[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (35))){
var state_46551__$1 = state_46551;
var statearr_46584_46629 = state_46551__$1;
(statearr_46584_46629[(2)] = null);

(statearr_46584_46629[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (19))){
var inst_46504 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46504)){
var statearr_46585_46630 = state_46551__$1;
(statearr_46585_46630[(1)] = (22));

} else {
var statearr_46586_46631 = state_46551__$1;
(statearr_46586_46631[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (11))){
var inst_46475 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46587_46632 = state_46551__$1;
(statearr_46587_46632[(2)] = inst_46475);

(statearr_46587_46632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (9))){
var inst_46477 = figwheel.client.heads_up.clear.call(null);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(12),inst_46477);
} else {
if((state_val_46552 === (5))){
var inst_46468 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46551__$1 = state_46551;
var statearr_46588_46633 = state_46551__$1;
(statearr_46588_46633[(2)] = inst_46468);

(statearr_46588_46633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (14))){
var inst_46495 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46495)){
var statearr_46589_46634 = state_46551__$1;
(statearr_46589_46634[(1)] = (18));

} else {
var statearr_46590_46635 = state_46551__$1;
(statearr_46590_46635[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (26))){
var inst_46521 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46551__$1 = state_46551;
if(cljs.core.truth_(inst_46521)){
var statearr_46591_46636 = state_46551__$1;
(statearr_46591_46636[(1)] = (30));

} else {
var statearr_46592_46637 = state_46551__$1;
(statearr_46592_46637[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (16))){
var inst_46487 = (state_46551[(2)]);
var inst_46488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46489 = figwheel.client.heads_up.display_exception.call(null,inst_46488);
var state_46551__$1 = (function (){var statearr_46593 = state_46551;
(statearr_46593[(13)] = inst_46487);

return statearr_46593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(17),inst_46489);
} else {
if((state_val_46552 === (30))){
var inst_46523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46524 = figwheel.client.heads_up.display_warning.call(null,inst_46523);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(33),inst_46524);
} else {
if((state_val_46552 === (10))){
var inst_46481 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46594_46638 = state_46551__$1;
(statearr_46594_46638[(2)] = inst_46481);

(statearr_46594_46638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (18))){
var inst_46497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46498 = figwheel.client.heads_up.display_exception.call(null,inst_46497);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(21),inst_46498);
} else {
if((state_val_46552 === (37))){
var inst_46534 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46595_46639 = state_46551__$1;
(statearr_46595_46639[(2)] = inst_46534);

(statearr_46595_46639[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (8))){
var inst_46473 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(11),inst_46473);
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
var statearr_46598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46598[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__);

(statearr_46598[(1)] = (1));

return statearr_46598;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1 = (function (state_46551){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_46551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e46599){if((e46599 instanceof Object)){
var ex__33611__auto__ = e46599;
var statearr_46600_46640 = state_46551;
(statearr_46600_46640[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46641 = state_46551;
state_46551 = G__46641;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__ = function(state_46551){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1.call(this,state_46551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,msg_hist,msg_names,msg))
})();
var state__33954__auto__ = (function (){var statearr_46601 = f__33953__auto__.call(null);
(statearr_46601[(6)] = c__33952__auto__);

return statearr_46601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,msg_hist,msg_names,msg))
);

return c__33952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33952__auto___46670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___46670,ch){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___46670,ch){
return (function (state_46656){
var state_val_46657 = (state_46656[(1)]);
if((state_val_46657 === (1))){
var state_46656__$1 = state_46656;
var statearr_46658_46671 = state_46656__$1;
(statearr_46658_46671[(2)] = null);

(statearr_46658_46671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (2))){
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46656__$1,(4),ch);
} else {
if((state_val_46657 === (3))){
var inst_46654 = (state_46656[(2)]);
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46656__$1,inst_46654);
} else {
if((state_val_46657 === (4))){
var inst_46644 = (state_46656[(7)]);
var inst_46644__$1 = (state_46656[(2)]);
var state_46656__$1 = (function (){var statearr_46659 = state_46656;
(statearr_46659[(7)] = inst_46644__$1);

return statearr_46659;
})();
if(cljs.core.truth_(inst_46644__$1)){
var statearr_46660_46672 = state_46656__$1;
(statearr_46660_46672[(1)] = (5));

} else {
var statearr_46661_46673 = state_46656__$1;
(statearr_46661_46673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (5))){
var inst_46644 = (state_46656[(7)]);
var inst_46646 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46644);
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46656__$1,(8),inst_46646);
} else {
if((state_val_46657 === (6))){
var state_46656__$1 = state_46656;
var statearr_46662_46674 = state_46656__$1;
(statearr_46662_46674[(2)] = null);

(statearr_46662_46674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (7))){
var inst_46652 = (state_46656[(2)]);
var state_46656__$1 = state_46656;
var statearr_46663_46675 = state_46656__$1;
(statearr_46663_46675[(2)] = inst_46652);

(statearr_46663_46675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46657 === (8))){
var inst_46648 = (state_46656[(2)]);
var state_46656__$1 = (function (){var statearr_46664 = state_46656;
(statearr_46664[(8)] = inst_46648);

return statearr_46664;
})();
var statearr_46665_46676 = state_46656__$1;
(statearr_46665_46676[(2)] = null);

(statearr_46665_46676[(1)] = (2));


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
});})(c__33952__auto___46670,ch))
;
return ((function (switch__33607__auto__,c__33952__auto___46670,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0 = (function (){
var statearr_46666 = [null,null,null,null,null,null,null,null,null];
(statearr_46666[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33608__auto__);

(statearr_46666[(1)] = (1));

return statearr_46666;
});
var figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1 = (function (state_46656){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_46656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e46667){if((e46667 instanceof Object)){
var ex__33611__auto__ = e46667;
var statearr_46668_46677 = state_46656;
(statearr_46668_46677[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46678 = state_46656;
state_46656 = G__46678;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__ = function(state_46656){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1.call(this,state_46656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33608__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33608__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___46670,ch))
})();
var state__33954__auto__ = (function (){var statearr_46669 = f__33953__auto__.call(null);
(statearr_46669[(6)] = c__33952__auto___46670);

return statearr_46669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___46670,ch))
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
return (function (state_46684){
var state_val_46685 = (state_46684[(1)]);
if((state_val_46685 === (1))){
var inst_46679 = cljs.core.async.timeout.call(null,(3000));
var state_46684__$1 = state_46684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46684__$1,(2),inst_46679);
} else {
if((state_val_46685 === (2))){
var inst_46681 = (state_46684[(2)]);
var inst_46682 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46684__$1 = (function (){var statearr_46686 = state_46684;
(statearr_46686[(7)] = inst_46681);

return statearr_46686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46684__$1,inst_46682);
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
var statearr_46687 = [null,null,null,null,null,null,null,null];
(statearr_46687[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__);

(statearr_46687[(1)] = (1));

return statearr_46687;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1 = (function (state_46684){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_46684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e46688){if((e46688 instanceof Object)){
var ex__33611__auto__ = e46688;
var statearr_46689_46691 = state_46684;
(statearr_46689_46691[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46692 = state_46684;
state_46684 = G__46692;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__ = function(state_46684){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1.call(this,state_46684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33608__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_46690 = f__33953__auto__.call(null);
(statearr_46690[(6)] = c__33952__auto__);

return statearr_46690;
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
return (function (state_46699){
var state_val_46700 = (state_46699[(1)]);
if((state_val_46700 === (1))){
var inst_46693 = cljs.core.async.timeout.call(null,(2000));
var state_46699__$1 = state_46699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46699__$1,(2),inst_46693);
} else {
if((state_val_46700 === (2))){
var inst_46695 = (state_46699[(2)]);
var inst_46696 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46697 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46696);
var state_46699__$1 = (function (){var statearr_46701 = state_46699;
(statearr_46701[(7)] = inst_46695);

return statearr_46701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46699__$1,inst_46697);
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
var statearr_46702 = [null,null,null,null,null,null,null,null];
(statearr_46702[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__);

(statearr_46702[(1)] = (1));

return statearr_46702;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1 = (function (state_46699){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_46699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e46703){if((e46703 instanceof Object)){
var ex__33611__auto__ = e46703;
var statearr_46704_46706 = state_46699;
(statearr_46704_46706[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46707 = state_46699;
state_46699 = G__46707;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__ = function(state_46699){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1.call(this,state_46699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33954__auto__ = (function (){var statearr_46705 = f__33953__auto__.call(null);
(statearr_46705[(6)] = c__33952__auto__);

return statearr_46705;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46708){
var map__46709 = p__46708;
var map__46709__$1 = ((((!((map__46709 == null)))?((((map__46709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46709):map__46709);
var file = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46711 = "";
var G__46711__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46711),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46711);
var G__46711__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46711__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46711__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46711__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46711__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46712){
var map__46713 = p__46712;
var map__46713__$1 = ((((!((map__46713 == null)))?((((map__46713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46713):map__46713);
var ed = map__46713__$1;
var formatted_exception = cljs.core.get.call(null,map__46713__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46713__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46713__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46715_46719 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46716_46720 = null;
var count__46717_46721 = (0);
var i__46718_46722 = (0);
while(true){
if((i__46718_46722 < count__46717_46721)){
var msg_46723 = cljs.core._nth.call(null,chunk__46716_46720,i__46718_46722);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46723);

var G__46724 = seq__46715_46719;
var G__46725 = chunk__46716_46720;
var G__46726 = count__46717_46721;
var G__46727 = (i__46718_46722 + (1));
seq__46715_46719 = G__46724;
chunk__46716_46720 = G__46725;
count__46717_46721 = G__46726;
i__46718_46722 = G__46727;
continue;
} else {
var temp__5278__auto___46728 = cljs.core.seq.call(null,seq__46715_46719);
if(temp__5278__auto___46728){
var seq__46715_46729__$1 = temp__5278__auto___46728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46715_46729__$1)){
var c__31003__auto___46730 = cljs.core.chunk_first.call(null,seq__46715_46729__$1);
var G__46731 = cljs.core.chunk_rest.call(null,seq__46715_46729__$1);
var G__46732 = c__31003__auto___46730;
var G__46733 = cljs.core.count.call(null,c__31003__auto___46730);
var G__46734 = (0);
seq__46715_46719 = G__46731;
chunk__46716_46720 = G__46732;
count__46717_46721 = G__46733;
i__46718_46722 = G__46734;
continue;
} else {
var msg_46735 = cljs.core.first.call(null,seq__46715_46729__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46735);

var G__46736 = cljs.core.next.call(null,seq__46715_46729__$1);
var G__46737 = null;
var G__46738 = (0);
var G__46739 = (0);
seq__46715_46719 = G__46736;
chunk__46716_46720 = G__46737;
count__46717_46721 = G__46738;
i__46718_46722 = G__46739;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46740){
var map__46741 = p__46740;
var map__46741__$1 = ((((!((map__46741 == null)))?((((map__46741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46741):map__46741);
var w = map__46741__$1;
var message = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__46743 = cljs.core.seq.call(null,plugins);
var chunk__46744 = null;
var count__46745 = (0);
var i__46746 = (0);
while(true){
if((i__46746 < count__46745)){
var vec__46747 = cljs.core._nth.call(null,chunk__46744,i__46746);
var k = cljs.core.nth.call(null,vec__46747,(0),null);
var plugin = cljs.core.nth.call(null,vec__46747,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46753 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46743,chunk__46744,count__46745,i__46746,pl_46753,vec__46747,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46753.call(null,msg_hist);
});})(seq__46743,chunk__46744,count__46745,i__46746,pl_46753,vec__46747,k,plugin))
);
} else {
}

var G__46754 = seq__46743;
var G__46755 = chunk__46744;
var G__46756 = count__46745;
var G__46757 = (i__46746 + (1));
seq__46743 = G__46754;
chunk__46744 = G__46755;
count__46745 = G__46756;
i__46746 = G__46757;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__46743);
if(temp__5278__auto__){
var seq__46743__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46743__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__46743__$1);
var G__46758 = cljs.core.chunk_rest.call(null,seq__46743__$1);
var G__46759 = c__31003__auto__;
var G__46760 = cljs.core.count.call(null,c__31003__auto__);
var G__46761 = (0);
seq__46743 = G__46758;
chunk__46744 = G__46759;
count__46745 = G__46760;
i__46746 = G__46761;
continue;
} else {
var vec__46750 = cljs.core.first.call(null,seq__46743__$1);
var k = cljs.core.nth.call(null,vec__46750,(0),null);
var plugin = cljs.core.nth.call(null,vec__46750,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46762 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46743,chunk__46744,count__46745,i__46746,pl_46762,vec__46750,k,plugin,seq__46743__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46762.call(null,msg_hist);
});})(seq__46743,chunk__46744,count__46745,i__46746,pl_46762,vec__46750,k,plugin,seq__46743__$1,temp__5278__auto__))
);
} else {
}

var G__46763 = cljs.core.next.call(null,seq__46743__$1);
var G__46764 = null;
var G__46765 = (0);
var G__46766 = (0);
seq__46743 = G__46763;
chunk__46744 = G__46764;
count__46745 = G__46765;
i__46746 = G__46766;
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
var G__46768 = arguments.length;
switch (G__46768) {
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

var seq__46769_46774 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46770_46775 = null;
var count__46771_46776 = (0);
var i__46772_46777 = (0);
while(true){
if((i__46772_46777 < count__46771_46776)){
var msg_46778 = cljs.core._nth.call(null,chunk__46770_46775,i__46772_46777);
figwheel.client.socket.handle_incoming_message.call(null,msg_46778);

var G__46779 = seq__46769_46774;
var G__46780 = chunk__46770_46775;
var G__46781 = count__46771_46776;
var G__46782 = (i__46772_46777 + (1));
seq__46769_46774 = G__46779;
chunk__46770_46775 = G__46780;
count__46771_46776 = G__46781;
i__46772_46777 = G__46782;
continue;
} else {
var temp__5278__auto___46783 = cljs.core.seq.call(null,seq__46769_46774);
if(temp__5278__auto___46783){
var seq__46769_46784__$1 = temp__5278__auto___46783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46769_46784__$1)){
var c__31003__auto___46785 = cljs.core.chunk_first.call(null,seq__46769_46784__$1);
var G__46786 = cljs.core.chunk_rest.call(null,seq__46769_46784__$1);
var G__46787 = c__31003__auto___46785;
var G__46788 = cljs.core.count.call(null,c__31003__auto___46785);
var G__46789 = (0);
seq__46769_46774 = G__46786;
chunk__46770_46775 = G__46787;
count__46771_46776 = G__46788;
i__46772_46777 = G__46789;
continue;
} else {
var msg_46790 = cljs.core.first.call(null,seq__46769_46784__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46790);

var G__46791 = cljs.core.next.call(null,seq__46769_46784__$1);
var G__46792 = null;
var G__46793 = (0);
var G__46794 = (0);
seq__46769_46774 = G__46791;
chunk__46770_46775 = G__46792;
count__46771_46776 = G__46793;
i__46772_46777 = G__46794;
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
var len__31349__auto___46799 = arguments.length;
var i__31350__auto___46800 = (0);
while(true){
if((i__31350__auto___46800 < len__31349__auto___46799)){
args__31356__auto__.push((arguments[i__31350__auto___46800]));

var G__46801 = (i__31350__auto___46800 + (1));
i__31350__auto___46800 = G__46801;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46796){
var map__46797 = p__46796;
var map__46797__$1 = ((((!((map__46797 == null)))?((((map__46797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46797):map__46797);
var opts = map__46797__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46795){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46795));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46802){if((e46802 instanceof Error)){
var e = e46802;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46802;

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
return (function (p__46803){
var map__46804 = p__46803;
var map__46804__$1 = ((((!((map__46804 == null)))?((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46804):map__46804);
var msg_name = cljs.core.get.call(null,map__46804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510360396007
