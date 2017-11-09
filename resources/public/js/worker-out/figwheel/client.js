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
}catch (e44824){if((e44824 instanceof Error)){
var e = e44824;
return "Error: Unable to stringify";
} else {
throw e44824;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__44827 = arguments.length;
switch (G__44827) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__44825_SHARP_){
if(typeof p1__44825_SHARP_ === 'string'){
return p1__44825_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__44825_SHARP_);
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
var len__31349__auto___44830 = arguments.length;
var i__31350__auto___44831 = (0);
while(true){
if((i__31350__auto___44831 < len__31349__auto___44830)){
args__31356__auto__.push((arguments[i__31350__auto___44831]));

var G__44832 = (i__31350__auto___44831 + (1));
i__31350__auto___44831 = G__44832;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44829){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44829));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44834 = arguments.length;
var i__31350__auto___44835 = (0);
while(true){
if((i__31350__auto___44835 < len__31349__auto___44834)){
args__31356__auto__.push((arguments[i__31350__auto___44835]));

var G__44836 = (i__31350__auto___44835 + (1));
i__31350__auto___44835 = G__44836;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44833){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44833));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44837){
var map__44838 = p__44837;
var map__44838__$1 = ((((!((map__44838 == null)))?((((map__44838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44838):map__44838);
var message = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33665__auto___44917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___44917,ch){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___44917,ch){
return (function (state_44889){
var state_val_44890 = (state_44889[(1)]);
if((state_val_44890 === (7))){
var inst_44885 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44891_44918 = state_44889__$1;
(statearr_44891_44918[(2)] = inst_44885);

(statearr_44891_44918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (1))){
var state_44889__$1 = state_44889;
var statearr_44892_44919 = state_44889__$1;
(statearr_44892_44919[(2)] = null);

(statearr_44892_44919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (4))){
var inst_44842 = (state_44889[(7)]);
var inst_44842__$1 = (state_44889[(2)]);
var state_44889__$1 = (function (){var statearr_44893 = state_44889;
(statearr_44893[(7)] = inst_44842__$1);

return statearr_44893;
})();
if(cljs.core.truth_(inst_44842__$1)){
var statearr_44894_44920 = state_44889__$1;
(statearr_44894_44920[(1)] = (5));

} else {
var statearr_44895_44921 = state_44889__$1;
(statearr_44895_44921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (15))){
var inst_44849 = (state_44889[(8)]);
var inst_44864 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44849);
var inst_44865 = cljs.core.first.call(null,inst_44864);
var inst_44866 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44865);
var inst_44867 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44866)].join('');
var inst_44868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44867);
var state_44889__$1 = state_44889;
var statearr_44896_44922 = state_44889__$1;
(statearr_44896_44922[(2)] = inst_44868);

(statearr_44896_44922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (13))){
var inst_44873 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44897_44923 = state_44889__$1;
(statearr_44897_44923[(2)] = inst_44873);

(statearr_44897_44923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (6))){
var state_44889__$1 = state_44889;
var statearr_44898_44924 = state_44889__$1;
(statearr_44898_44924[(2)] = null);

(statearr_44898_44924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (17))){
var inst_44871 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44899_44925 = state_44889__$1;
(statearr_44899_44925[(2)] = inst_44871);

(statearr_44899_44925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (3))){
var inst_44887 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44889__$1,inst_44887);
} else {
if((state_val_44890 === (12))){
var inst_44848 = (state_44889[(9)]);
var inst_44862 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44848,opts);
var state_44889__$1 = state_44889;
if(cljs.core.truth_(inst_44862)){
var statearr_44900_44926 = state_44889__$1;
(statearr_44900_44926[(1)] = (15));

} else {
var statearr_44901_44927 = state_44889__$1;
(statearr_44901_44927[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (2))){
var state_44889__$1 = state_44889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44889__$1,(4),ch);
} else {
if((state_val_44890 === (11))){
var inst_44849 = (state_44889[(8)]);
var inst_44854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44855 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44849);
var inst_44856 = cljs.core.async.timeout.call(null,(1000));
var inst_44857 = [inst_44855,inst_44856];
var inst_44858 = (new cljs.core.PersistentVector(null,2,(5),inst_44854,inst_44857,null));
var state_44889__$1 = state_44889;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44889__$1,(14),inst_44858);
} else {
if((state_val_44890 === (9))){
var inst_44849 = (state_44889[(8)]);
var inst_44875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44876 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44849);
var inst_44877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44876);
var inst_44878 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44877)].join('');
var inst_44879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44878);
var state_44889__$1 = (function (){var statearr_44902 = state_44889;
(statearr_44902[(10)] = inst_44875);

return statearr_44902;
})();
var statearr_44903_44928 = state_44889__$1;
(statearr_44903_44928[(2)] = inst_44879);

(statearr_44903_44928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (5))){
var inst_44842 = (state_44889[(7)]);
var inst_44844 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44845 = (new cljs.core.PersistentArrayMap(null,2,inst_44844,null));
var inst_44846 = (new cljs.core.PersistentHashSet(null,inst_44845,null));
var inst_44847 = figwheel.client.focus_msgs.call(null,inst_44846,inst_44842);
var inst_44848 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44847);
var inst_44849 = cljs.core.first.call(null,inst_44847);
var inst_44850 = figwheel.client.autoload_QMARK_.call(null);
var state_44889__$1 = (function (){var statearr_44904 = state_44889;
(statearr_44904[(8)] = inst_44849);

(statearr_44904[(9)] = inst_44848);

return statearr_44904;
})();
if(cljs.core.truth_(inst_44850)){
var statearr_44905_44929 = state_44889__$1;
(statearr_44905_44929[(1)] = (8));

} else {
var statearr_44906_44930 = state_44889__$1;
(statearr_44906_44930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (14))){
var inst_44860 = (state_44889[(2)]);
var state_44889__$1 = state_44889;
var statearr_44907_44931 = state_44889__$1;
(statearr_44907_44931[(2)] = inst_44860);

(statearr_44907_44931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (16))){
var state_44889__$1 = state_44889;
var statearr_44908_44932 = state_44889__$1;
(statearr_44908_44932[(2)] = null);

(statearr_44908_44932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (10))){
var inst_44881 = (state_44889[(2)]);
var state_44889__$1 = (function (){var statearr_44909 = state_44889;
(statearr_44909[(11)] = inst_44881);

return statearr_44909;
})();
var statearr_44910_44933 = state_44889__$1;
(statearr_44910_44933[(2)] = null);

(statearr_44910_44933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44890 === (8))){
var inst_44848 = (state_44889[(9)]);
var inst_44852 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44848,opts);
var state_44889__$1 = state_44889;
if(cljs.core.truth_(inst_44852)){
var statearr_44911_44934 = state_44889__$1;
(statearr_44911_44934[(1)] = (11));

} else {
var statearr_44912_44935 = state_44889__$1;
(statearr_44912_44935[(1)] = (12));

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
});})(c__33665__auto___44917,ch))
;
return ((function (switch__33280__auto__,c__33665__auto___44917,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_44913 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44913[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__);

(statearr_44913[(1)] = (1));

return statearr_44913;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1 = (function (state_44889){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_44889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e44914){if((e44914 instanceof Object)){
var ex__33284__auto__ = e44914;
var statearr_44915_44936 = state_44889;
(statearr_44915_44936[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44937 = state_44889;
state_44889 = G__44937;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__ = function(state_44889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1.call(this,state_44889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___44917,ch))
})();
var state__33667__auto__ = (function (){var statearr_44916 = f__33666__auto__.call(null);
(statearr_44916[(6)] = c__33665__auto___44917);

return statearr_44916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___44917,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44938_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44938_SHARP_));
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
var base_path_44940 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44940){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44939){if((e44939 instanceof Error)){
var e = e44939;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44940], null));
} else {
var e = e44939;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44940))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44941){
var map__44942 = p__44941;
var map__44942__$1 = ((((!((map__44942 == null)))?((((map__44942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44942):map__44942);
var opts = map__44942__$1;
var build_id = cljs.core.get.call(null,map__44942__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44942,map__44942__$1,opts,build_id){
return (function (p__44944){
var vec__44945 = p__44944;
var seq__44946 = cljs.core.seq.call(null,vec__44945);
var first__44947 = cljs.core.first.call(null,seq__44946);
var seq__44946__$1 = cljs.core.next.call(null,seq__44946);
var map__44948 = first__44947;
var map__44948__$1 = ((((!((map__44948 == null)))?((((map__44948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44948):map__44948);
var msg = map__44948__$1;
var msg_name = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44946__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44945,seq__44946,first__44947,seq__44946__$1,map__44948,map__44948__$1,msg,msg_name,_,map__44942,map__44942__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44945,seq__44946,first__44947,seq__44946__$1,map__44948,map__44948__$1,msg,msg_name,_,map__44942,map__44942__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44942,map__44942__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44950){
var vec__44951 = p__44950;
var seq__44952 = cljs.core.seq.call(null,vec__44951);
var first__44953 = cljs.core.first.call(null,seq__44952);
var seq__44952__$1 = cljs.core.next.call(null,seq__44952);
var map__44954 = first__44953;
var map__44954__$1 = ((((!((map__44954 == null)))?((((map__44954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44954):map__44954);
var msg = map__44954__$1;
var msg_name = cljs.core.get.call(null,map__44954__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44952__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44956){
var map__44957 = p__44956;
var map__44957__$1 = ((((!((map__44957 == null)))?((((map__44957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44957):map__44957);
var on_compile_warning = cljs.core.get.call(null,map__44957__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44957__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44957,map__44957__$1,on_compile_warning,on_compile_fail){
return (function (p__44959){
var vec__44960 = p__44959;
var seq__44961 = cljs.core.seq.call(null,vec__44960);
var first__44962 = cljs.core.first.call(null,seq__44961);
var seq__44961__$1 = cljs.core.next.call(null,seq__44961);
var map__44963 = first__44962;
var map__44963__$1 = ((((!((map__44963 == null)))?((((map__44963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44963):map__44963);
var msg = map__44963__$1;
var msg_name = cljs.core.get.call(null,map__44963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44961__$1;
var pred__44965 = cljs.core._EQ_;
var expr__44966 = msg_name;
if(cljs.core.truth_(pred__44965.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44966))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44965.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44966))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44957,map__44957__$1,on_compile_warning,on_compile_fail))
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
return (function (state_45055){
var state_val_45056 = (state_45055[(1)]);
if((state_val_45056 === (7))){
var inst_44975 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_44975)){
var statearr_45057_45104 = state_45055__$1;
(statearr_45057_45104[(1)] = (8));

} else {
var statearr_45058_45105 = state_45055__$1;
(statearr_45058_45105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (20))){
var inst_45049 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45059_45106 = state_45055__$1;
(statearr_45059_45106[(2)] = inst_45049);

(statearr_45059_45106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (27))){
var inst_45045 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45060_45107 = state_45055__$1;
(statearr_45060_45107[(2)] = inst_45045);

(statearr_45060_45107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (1))){
var inst_44968 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_44968)){
var statearr_45061_45108 = state_45055__$1;
(statearr_45061_45108[(1)] = (2));

} else {
var statearr_45062_45109 = state_45055__$1;
(statearr_45062_45109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (24))){
var inst_45047 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45063_45110 = state_45055__$1;
(statearr_45063_45110[(2)] = inst_45047);

(statearr_45063_45110[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (4))){
var inst_45053 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45055__$1,inst_45053);
} else {
if((state_val_45056 === (15))){
var inst_45051 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45064_45111 = state_45055__$1;
(statearr_45064_45111[(2)] = inst_45051);

(statearr_45064_45111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (21))){
var inst_45004 = (state_45055[(2)]);
var inst_45005 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45006 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45005);
var state_45055__$1 = (function (){var statearr_45065 = state_45055;
(statearr_45065[(7)] = inst_45004);

return statearr_45065;
})();
var statearr_45066_45112 = state_45055__$1;
(statearr_45066_45112[(2)] = inst_45006);

(statearr_45066_45112[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (31))){
var inst_45034 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_45034)){
var statearr_45067_45113 = state_45055__$1;
(statearr_45067_45113[(1)] = (34));

} else {
var statearr_45068_45114 = state_45055__$1;
(statearr_45068_45114[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (32))){
var inst_45043 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45069_45115 = state_45055__$1;
(statearr_45069_45115[(2)] = inst_45043);

(statearr_45069_45115[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (33))){
var inst_45030 = (state_45055[(2)]);
var inst_45031 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45032 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45031);
var state_45055__$1 = (function (){var statearr_45070 = state_45055;
(statearr_45070[(8)] = inst_45030);

return statearr_45070;
})();
var statearr_45071_45116 = state_45055__$1;
(statearr_45071_45116[(2)] = inst_45032);

(statearr_45071_45116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (13))){
var inst_44989 = figwheel.client.heads_up.clear.call(null);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(16),inst_44989);
} else {
if((state_val_45056 === (22))){
var inst_45010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45011 = figwheel.client.heads_up.append_warning_message.call(null,inst_45010);
var state_45055__$1 = state_45055;
var statearr_45072_45117 = state_45055__$1;
(statearr_45072_45117[(2)] = inst_45011);

(statearr_45072_45117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (36))){
var inst_45041 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45073_45118 = state_45055__$1;
(statearr_45073_45118[(2)] = inst_45041);

(statearr_45073_45118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (29))){
var inst_45021 = (state_45055[(2)]);
var inst_45022 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45023 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45022);
var state_45055__$1 = (function (){var statearr_45074 = state_45055;
(statearr_45074[(9)] = inst_45021);

return statearr_45074;
})();
var statearr_45075_45119 = state_45055__$1;
(statearr_45075_45119[(2)] = inst_45023);

(statearr_45075_45119[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (6))){
var inst_44970 = (state_45055[(10)]);
var state_45055__$1 = state_45055;
var statearr_45076_45120 = state_45055__$1;
(statearr_45076_45120[(2)] = inst_44970);

(statearr_45076_45120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (28))){
var inst_45017 = (state_45055[(2)]);
var inst_45018 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45019 = figwheel.client.heads_up.display_warning.call(null,inst_45018);
var state_45055__$1 = (function (){var statearr_45077 = state_45055;
(statearr_45077[(11)] = inst_45017);

return statearr_45077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(29),inst_45019);
} else {
if((state_val_45056 === (25))){
var inst_45015 = figwheel.client.heads_up.clear.call(null);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(28),inst_45015);
} else {
if((state_val_45056 === (34))){
var inst_45036 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(37),inst_45036);
} else {
if((state_val_45056 === (17))){
var inst_44995 = (state_45055[(2)]);
var inst_44996 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44997 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44996);
var state_45055__$1 = (function (){var statearr_45078 = state_45055;
(statearr_45078[(12)] = inst_44995);

return statearr_45078;
})();
var statearr_45079_45121 = state_45055__$1;
(statearr_45079_45121[(2)] = inst_44997);

(statearr_45079_45121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (3))){
var inst_44987 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_44987)){
var statearr_45080_45122 = state_45055__$1;
(statearr_45080_45122[(1)] = (13));

} else {
var statearr_45081_45123 = state_45055__$1;
(statearr_45081_45123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (12))){
var inst_44983 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45082_45124 = state_45055__$1;
(statearr_45082_45124[(2)] = inst_44983);

(statearr_45082_45124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (2))){
var inst_44970 = (state_45055[(10)]);
var inst_44970__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45055__$1 = (function (){var statearr_45083 = state_45055;
(statearr_45083[(10)] = inst_44970__$1);

return statearr_45083;
})();
if(cljs.core.truth_(inst_44970__$1)){
var statearr_45084_45125 = state_45055__$1;
(statearr_45084_45125[(1)] = (5));

} else {
var statearr_45085_45126 = state_45055__$1;
(statearr_45085_45126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (23))){
var inst_45013 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_45013)){
var statearr_45086_45127 = state_45055__$1;
(statearr_45086_45127[(1)] = (25));

} else {
var statearr_45087_45128 = state_45055__$1;
(statearr_45087_45128[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (35))){
var state_45055__$1 = state_45055;
var statearr_45088_45129 = state_45055__$1;
(statearr_45088_45129[(2)] = null);

(statearr_45088_45129[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (19))){
var inst_45008 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_45008)){
var statearr_45089_45130 = state_45055__$1;
(statearr_45089_45130[(1)] = (22));

} else {
var statearr_45090_45131 = state_45055__$1;
(statearr_45090_45131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (11))){
var inst_44979 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45091_45132 = state_45055__$1;
(statearr_45091_45132[(2)] = inst_44979);

(statearr_45091_45132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (9))){
var inst_44981 = figwheel.client.heads_up.clear.call(null);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(12),inst_44981);
} else {
if((state_val_45056 === (5))){
var inst_44972 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45055__$1 = state_45055;
var statearr_45092_45133 = state_45055__$1;
(statearr_45092_45133[(2)] = inst_44972);

(statearr_45092_45133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (14))){
var inst_44999 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_44999)){
var statearr_45093_45134 = state_45055__$1;
(statearr_45093_45134[(1)] = (18));

} else {
var statearr_45094_45135 = state_45055__$1;
(statearr_45094_45135[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (26))){
var inst_45025 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45055__$1 = state_45055;
if(cljs.core.truth_(inst_45025)){
var statearr_45095_45136 = state_45055__$1;
(statearr_45095_45136[(1)] = (30));

} else {
var statearr_45096_45137 = state_45055__$1;
(statearr_45096_45137[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (16))){
var inst_44991 = (state_45055[(2)]);
var inst_44992 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44993 = figwheel.client.heads_up.display_exception.call(null,inst_44992);
var state_45055__$1 = (function (){var statearr_45097 = state_45055;
(statearr_45097[(13)] = inst_44991);

return statearr_45097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(17),inst_44993);
} else {
if((state_val_45056 === (30))){
var inst_45027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45028 = figwheel.client.heads_up.display_warning.call(null,inst_45027);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(33),inst_45028);
} else {
if((state_val_45056 === (10))){
var inst_44985 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45098_45138 = state_45055__$1;
(statearr_45098_45138[(2)] = inst_44985);

(statearr_45098_45138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (18))){
var inst_45001 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45002 = figwheel.client.heads_up.display_exception.call(null,inst_45001);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(21),inst_45002);
} else {
if((state_val_45056 === (37))){
var inst_45038 = (state_45055[(2)]);
var state_45055__$1 = state_45055;
var statearr_45099_45139 = state_45055__$1;
(statearr_45099_45139[(2)] = inst_45038);

(statearr_45099_45139[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45056 === (8))){
var inst_44977 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45055__$1 = state_45055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45055__$1,(11),inst_44977);
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
var statearr_45100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45100[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__);

(statearr_45100[(1)] = (1));

return statearr_45100;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1 = (function (state_45055){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_45055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e45101){if((e45101 instanceof Object)){
var ex__33284__auto__ = e45101;
var statearr_45102_45140 = state_45055;
(statearr_45102_45140[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45141 = state_45055;
state_45055 = G__45141;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__ = function(state_45055){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1.call(this,state_45055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,msg_hist,msg_names,msg))
})();
var state__33667__auto__ = (function (){var statearr_45103 = f__33666__auto__.call(null);
(statearr_45103[(6)] = c__33665__auto__);

return statearr_45103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,msg_hist,msg_names,msg))
);

return c__33665__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33665__auto___45170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___45170,ch){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___45170,ch){
return (function (state_45156){
var state_val_45157 = (state_45156[(1)]);
if((state_val_45157 === (1))){
var state_45156__$1 = state_45156;
var statearr_45158_45171 = state_45156__$1;
(statearr_45158_45171[(2)] = null);

(statearr_45158_45171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (2))){
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45156__$1,(4),ch);
} else {
if((state_val_45157 === (3))){
var inst_45154 = (state_45156[(2)]);
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45156__$1,inst_45154);
} else {
if((state_val_45157 === (4))){
var inst_45144 = (state_45156[(7)]);
var inst_45144__$1 = (state_45156[(2)]);
var state_45156__$1 = (function (){var statearr_45159 = state_45156;
(statearr_45159[(7)] = inst_45144__$1);

return statearr_45159;
})();
if(cljs.core.truth_(inst_45144__$1)){
var statearr_45160_45172 = state_45156__$1;
(statearr_45160_45172[(1)] = (5));

} else {
var statearr_45161_45173 = state_45156__$1;
(statearr_45161_45173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (5))){
var inst_45144 = (state_45156[(7)]);
var inst_45146 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45144);
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45156__$1,(8),inst_45146);
} else {
if((state_val_45157 === (6))){
var state_45156__$1 = state_45156;
var statearr_45162_45174 = state_45156__$1;
(statearr_45162_45174[(2)] = null);

(statearr_45162_45174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (7))){
var inst_45152 = (state_45156[(2)]);
var state_45156__$1 = state_45156;
var statearr_45163_45175 = state_45156__$1;
(statearr_45163_45175[(2)] = inst_45152);

(statearr_45163_45175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (8))){
var inst_45148 = (state_45156[(2)]);
var state_45156__$1 = (function (){var statearr_45164 = state_45156;
(statearr_45164[(8)] = inst_45148);

return statearr_45164;
})();
var statearr_45165_45176 = state_45156__$1;
(statearr_45165_45176[(2)] = null);

(statearr_45165_45176[(1)] = (2));


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
});})(c__33665__auto___45170,ch))
;
return ((function (switch__33280__auto__,c__33665__auto___45170,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_45166 = [null,null,null,null,null,null,null,null,null];
(statearr_45166[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33281__auto__);

(statearr_45166[(1)] = (1));

return statearr_45166;
});
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1 = (function (state_45156){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_45156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e45167){if((e45167 instanceof Object)){
var ex__33284__auto__ = e45167;
var statearr_45168_45177 = state_45156;
(statearr_45168_45177[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45178 = state_45156;
state_45156 = G__45178;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__ = function(state_45156){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1.call(this,state_45156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___45170,ch))
})();
var state__33667__auto__ = (function (){var statearr_45169 = f__33666__auto__.call(null);
(statearr_45169[(6)] = c__33665__auto___45170);

return statearr_45169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___45170,ch))
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
return (function (state_45184){
var state_val_45185 = (state_45184[(1)]);
if((state_val_45185 === (1))){
var inst_45179 = cljs.core.async.timeout.call(null,(3000));
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45184__$1,(2),inst_45179);
} else {
if((state_val_45185 === (2))){
var inst_45181 = (state_45184[(2)]);
var inst_45182 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45184__$1 = (function (){var statearr_45186 = state_45184;
(statearr_45186[(7)] = inst_45181);

return statearr_45186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45184__$1,inst_45182);
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
var statearr_45187 = [null,null,null,null,null,null,null,null];
(statearr_45187[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__);

(statearr_45187[(1)] = (1));

return statearr_45187;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1 = (function (state_45184){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_45184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e45188){if((e45188 instanceof Object)){
var ex__33284__auto__ = e45188;
var statearr_45189_45191 = state_45184;
(statearr_45189_45191[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45192 = state_45184;
state_45184 = G__45192;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__ = function(state_45184){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1.call(this,state_45184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_45190 = f__33666__auto__.call(null);
(statearr_45190[(6)] = c__33665__auto__);

return statearr_45190;
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
return (function (state_45199){
var state_val_45200 = (state_45199[(1)]);
if((state_val_45200 === (1))){
var inst_45193 = cljs.core.async.timeout.call(null,(2000));
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45199__$1,(2),inst_45193);
} else {
if((state_val_45200 === (2))){
var inst_45195 = (state_45199[(2)]);
var inst_45196 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_45197 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_45196);
var state_45199__$1 = (function (){var statearr_45201 = state_45199;
(statearr_45201[(7)] = inst_45195);

return statearr_45201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45199__$1,inst_45197);
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
var statearr_45202 = [null,null,null,null,null,null,null,null];
(statearr_45202[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__);

(statearr_45202[(1)] = (1));

return statearr_45202;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1 = (function (state_45199){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_45199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e45203){if((e45203 instanceof Object)){
var ex__33284__auto__ = e45203;
var statearr_45204_45206 = state_45199;
(statearr_45204_45206[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45207 = state_45199;
state_45199 = G__45207;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__ = function(state_45199){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1.call(this,state_45199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33667__auto__ = (function (){var statearr_45205 = f__33666__auto__.call(null);
(statearr_45205[(6)] = c__33665__auto__);

return statearr_45205;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__45208){
var map__45209 = p__45208;
var map__45209__$1 = ((((!((map__45209 == null)))?((((map__45209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45209):map__45209);
var file = cljs.core.get.call(null,map__45209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45211 = "";
var G__45211__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45211),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__45211);
var G__45211__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45211__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__45211__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45211__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__45211__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45212){
var map__45213 = p__45212;
var map__45213__$1 = ((((!((map__45213 == null)))?((((map__45213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45213):map__45213);
var ed = map__45213__$1;
var formatted_exception = cljs.core.get.call(null,map__45213__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45213__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45213__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45215_45219 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45216_45220 = null;
var count__45217_45221 = (0);
var i__45218_45222 = (0);
while(true){
if((i__45218_45222 < count__45217_45221)){
var msg_45223 = cljs.core._nth.call(null,chunk__45216_45220,i__45218_45222);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45223);

var G__45224 = seq__45215_45219;
var G__45225 = chunk__45216_45220;
var G__45226 = count__45217_45221;
var G__45227 = (i__45218_45222 + (1));
seq__45215_45219 = G__45224;
chunk__45216_45220 = G__45225;
count__45217_45221 = G__45226;
i__45218_45222 = G__45227;
continue;
} else {
var temp__5278__auto___45228 = cljs.core.seq.call(null,seq__45215_45219);
if(temp__5278__auto___45228){
var seq__45215_45229__$1 = temp__5278__auto___45228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45215_45229__$1)){
var c__31003__auto___45230 = cljs.core.chunk_first.call(null,seq__45215_45229__$1);
var G__45231 = cljs.core.chunk_rest.call(null,seq__45215_45229__$1);
var G__45232 = c__31003__auto___45230;
var G__45233 = cljs.core.count.call(null,c__31003__auto___45230);
var G__45234 = (0);
seq__45215_45219 = G__45231;
chunk__45216_45220 = G__45232;
count__45217_45221 = G__45233;
i__45218_45222 = G__45234;
continue;
} else {
var msg_45235 = cljs.core.first.call(null,seq__45215_45229__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45235);

var G__45236 = cljs.core.next.call(null,seq__45215_45229__$1);
var G__45237 = null;
var G__45238 = (0);
var G__45239 = (0);
seq__45215_45219 = G__45236;
chunk__45216_45220 = G__45237;
count__45217_45221 = G__45238;
i__45218_45222 = G__45239;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45240){
var map__45241 = p__45240;
var map__45241__$1 = ((((!((map__45241 == null)))?((((map__45241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45241):map__45241);
var w = map__45241__$1;
var message = cljs.core.get.call(null,map__45241__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__45243 = cljs.core.seq.call(null,plugins);
var chunk__45244 = null;
var count__45245 = (0);
var i__45246 = (0);
while(true){
if((i__45246 < count__45245)){
var vec__45247 = cljs.core._nth.call(null,chunk__45244,i__45246);
var k = cljs.core.nth.call(null,vec__45247,(0),null);
var plugin = cljs.core.nth.call(null,vec__45247,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45253 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45243,chunk__45244,count__45245,i__45246,pl_45253,vec__45247,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45253.call(null,msg_hist);
});})(seq__45243,chunk__45244,count__45245,i__45246,pl_45253,vec__45247,k,plugin))
);
} else {
}

var G__45254 = seq__45243;
var G__45255 = chunk__45244;
var G__45256 = count__45245;
var G__45257 = (i__45246 + (1));
seq__45243 = G__45254;
chunk__45244 = G__45255;
count__45245 = G__45256;
i__45246 = G__45257;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45243);
if(temp__5278__auto__){
var seq__45243__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45243__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__45243__$1);
var G__45258 = cljs.core.chunk_rest.call(null,seq__45243__$1);
var G__45259 = c__31003__auto__;
var G__45260 = cljs.core.count.call(null,c__31003__auto__);
var G__45261 = (0);
seq__45243 = G__45258;
chunk__45244 = G__45259;
count__45245 = G__45260;
i__45246 = G__45261;
continue;
} else {
var vec__45250 = cljs.core.first.call(null,seq__45243__$1);
var k = cljs.core.nth.call(null,vec__45250,(0),null);
var plugin = cljs.core.nth.call(null,vec__45250,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45262 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45243,chunk__45244,count__45245,i__45246,pl_45262,vec__45250,k,plugin,seq__45243__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45262.call(null,msg_hist);
});})(seq__45243,chunk__45244,count__45245,i__45246,pl_45262,vec__45250,k,plugin,seq__45243__$1,temp__5278__auto__))
);
} else {
}

var G__45263 = cljs.core.next.call(null,seq__45243__$1);
var G__45264 = null;
var G__45265 = (0);
var G__45266 = (0);
seq__45243 = G__45263;
chunk__45244 = G__45264;
count__45245 = G__45265;
i__45246 = G__45266;
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
var G__45268 = arguments.length;
switch (G__45268) {
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

var seq__45269_45274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45270_45275 = null;
var count__45271_45276 = (0);
var i__45272_45277 = (0);
while(true){
if((i__45272_45277 < count__45271_45276)){
var msg_45278 = cljs.core._nth.call(null,chunk__45270_45275,i__45272_45277);
figwheel.client.socket.handle_incoming_message.call(null,msg_45278);

var G__45279 = seq__45269_45274;
var G__45280 = chunk__45270_45275;
var G__45281 = count__45271_45276;
var G__45282 = (i__45272_45277 + (1));
seq__45269_45274 = G__45279;
chunk__45270_45275 = G__45280;
count__45271_45276 = G__45281;
i__45272_45277 = G__45282;
continue;
} else {
var temp__5278__auto___45283 = cljs.core.seq.call(null,seq__45269_45274);
if(temp__5278__auto___45283){
var seq__45269_45284__$1 = temp__5278__auto___45283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45269_45284__$1)){
var c__31003__auto___45285 = cljs.core.chunk_first.call(null,seq__45269_45284__$1);
var G__45286 = cljs.core.chunk_rest.call(null,seq__45269_45284__$1);
var G__45287 = c__31003__auto___45285;
var G__45288 = cljs.core.count.call(null,c__31003__auto___45285);
var G__45289 = (0);
seq__45269_45274 = G__45286;
chunk__45270_45275 = G__45287;
count__45271_45276 = G__45288;
i__45272_45277 = G__45289;
continue;
} else {
var msg_45290 = cljs.core.first.call(null,seq__45269_45284__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45290);

var G__45291 = cljs.core.next.call(null,seq__45269_45284__$1);
var G__45292 = null;
var G__45293 = (0);
var G__45294 = (0);
seq__45269_45274 = G__45291;
chunk__45270_45275 = G__45292;
count__45271_45276 = G__45293;
i__45272_45277 = G__45294;
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
var len__31349__auto___45299 = arguments.length;
var i__31350__auto___45300 = (0);
while(true){
if((i__31350__auto___45300 < len__31349__auto___45299)){
args__31356__auto__.push((arguments[i__31350__auto___45300]));

var G__45301 = (i__31350__auto___45300 + (1));
i__31350__auto___45300 = G__45301;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45296){
var map__45297 = p__45296;
var map__45297__$1 = ((((!((map__45297 == null)))?((((map__45297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45297):map__45297);
var opts = map__45297__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45295){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45295));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45302){if((e45302 instanceof Error)){
var e = e45302;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45302;

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
return (function (p__45303){
var map__45304 = p__45303;
var map__45304__$1 = ((((!((map__45304 == null)))?((((map__45304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45304):map__45304);
var msg_name = cljs.core.get.call(null,map__45304__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510229224992
