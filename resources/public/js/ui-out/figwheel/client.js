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
}catch (e44875){if((e44875 instanceof Error)){
var e = e44875;
return "Error: Unable to stringify";
} else {
throw e44875;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__44878 = arguments.length;
switch (G__44878) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__44876_SHARP_){
if(typeof p1__44876_SHARP_ === 'string'){
return p1__44876_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__44876_SHARP_);
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
var len__31349__auto___44881 = arguments.length;
var i__31350__auto___44882 = (0);
while(true){
if((i__31350__auto___44882 < len__31349__auto___44881)){
args__31356__auto__.push((arguments[i__31350__auto___44882]));

var G__44883 = (i__31350__auto___44882 + (1));
i__31350__auto___44882 = G__44883;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44880){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44880));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___44885 = arguments.length;
var i__31350__auto___44886 = (0);
while(true){
if((i__31350__auto___44886 < len__31349__auto___44885)){
args__31356__auto__.push((arguments[i__31350__auto___44886]));

var G__44887 = (i__31350__auto___44886 + (1));
i__31350__auto___44886 = G__44887;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44884){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44884));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44888){
var map__44889 = p__44888;
var map__44889__$1 = ((((!((map__44889 == null)))?((((map__44889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44889):map__44889);
var message = cljs.core.get.call(null,map__44889__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44889__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33728__auto___44968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___44968,ch){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___44968,ch){
return (function (state_44940){
var state_val_44941 = (state_44940[(1)]);
if((state_val_44941 === (7))){
var inst_44936 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44942_44969 = state_44940__$1;
(statearr_44942_44969[(2)] = inst_44936);

(statearr_44942_44969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (1))){
var state_44940__$1 = state_44940;
var statearr_44943_44970 = state_44940__$1;
(statearr_44943_44970[(2)] = null);

(statearr_44943_44970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (4))){
var inst_44893 = (state_44940[(7)]);
var inst_44893__$1 = (state_44940[(2)]);
var state_44940__$1 = (function (){var statearr_44944 = state_44940;
(statearr_44944[(7)] = inst_44893__$1);

return statearr_44944;
})();
if(cljs.core.truth_(inst_44893__$1)){
var statearr_44945_44971 = state_44940__$1;
(statearr_44945_44971[(1)] = (5));

} else {
var statearr_44946_44972 = state_44940__$1;
(statearr_44946_44972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (15))){
var inst_44900 = (state_44940[(8)]);
var inst_44915 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44900);
var inst_44916 = cljs.core.first.call(null,inst_44915);
var inst_44917 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44916);
var inst_44918 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44917)].join('');
var inst_44919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44918);
var state_44940__$1 = state_44940;
var statearr_44947_44973 = state_44940__$1;
(statearr_44947_44973[(2)] = inst_44919);

(statearr_44947_44973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (13))){
var inst_44924 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44948_44974 = state_44940__$1;
(statearr_44948_44974[(2)] = inst_44924);

(statearr_44948_44974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (6))){
var state_44940__$1 = state_44940;
var statearr_44949_44975 = state_44940__$1;
(statearr_44949_44975[(2)] = null);

(statearr_44949_44975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (17))){
var inst_44922 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44950_44976 = state_44940__$1;
(statearr_44950_44976[(2)] = inst_44922);

(statearr_44950_44976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (3))){
var inst_44938 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44940__$1,inst_44938);
} else {
if((state_val_44941 === (12))){
var inst_44899 = (state_44940[(9)]);
var inst_44913 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44899,opts);
var state_44940__$1 = state_44940;
if(cljs.core.truth_(inst_44913)){
var statearr_44951_44977 = state_44940__$1;
(statearr_44951_44977[(1)] = (15));

} else {
var statearr_44952_44978 = state_44940__$1;
(statearr_44952_44978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (2))){
var state_44940__$1 = state_44940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44940__$1,(4),ch);
} else {
if((state_val_44941 === (11))){
var inst_44900 = (state_44940[(8)]);
var inst_44905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44906 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44900);
var inst_44907 = cljs.core.async.timeout.call(null,(1000));
var inst_44908 = [inst_44906,inst_44907];
var inst_44909 = (new cljs.core.PersistentVector(null,2,(5),inst_44905,inst_44908,null));
var state_44940__$1 = state_44940;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44940__$1,(14),inst_44909);
} else {
if((state_val_44941 === (9))){
var inst_44900 = (state_44940[(8)]);
var inst_44926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44927 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44900);
var inst_44928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44927);
var inst_44929 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44928)].join('');
var inst_44930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44929);
var state_44940__$1 = (function (){var statearr_44953 = state_44940;
(statearr_44953[(10)] = inst_44926);

return statearr_44953;
})();
var statearr_44954_44979 = state_44940__$1;
(statearr_44954_44979[(2)] = inst_44930);

(statearr_44954_44979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (5))){
var inst_44893 = (state_44940[(7)]);
var inst_44895 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44896 = (new cljs.core.PersistentArrayMap(null,2,inst_44895,null));
var inst_44897 = (new cljs.core.PersistentHashSet(null,inst_44896,null));
var inst_44898 = figwheel.client.focus_msgs.call(null,inst_44897,inst_44893);
var inst_44899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44898);
var inst_44900 = cljs.core.first.call(null,inst_44898);
var inst_44901 = figwheel.client.autoload_QMARK_.call(null);
var state_44940__$1 = (function (){var statearr_44955 = state_44940;
(statearr_44955[(9)] = inst_44899);

(statearr_44955[(8)] = inst_44900);

return statearr_44955;
})();
if(cljs.core.truth_(inst_44901)){
var statearr_44956_44980 = state_44940__$1;
(statearr_44956_44980[(1)] = (8));

} else {
var statearr_44957_44981 = state_44940__$1;
(statearr_44957_44981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (14))){
var inst_44911 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44958_44982 = state_44940__$1;
(statearr_44958_44982[(2)] = inst_44911);

(statearr_44958_44982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (16))){
var state_44940__$1 = state_44940;
var statearr_44959_44983 = state_44940__$1;
(statearr_44959_44983[(2)] = null);

(statearr_44959_44983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (10))){
var inst_44932 = (state_44940[(2)]);
var state_44940__$1 = (function (){var statearr_44960 = state_44940;
(statearr_44960[(11)] = inst_44932);

return statearr_44960;
})();
var statearr_44961_44984 = state_44940__$1;
(statearr_44961_44984[(2)] = null);

(statearr_44961_44984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (8))){
var inst_44899 = (state_44940[(9)]);
var inst_44903 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44899,opts);
var state_44940__$1 = state_44940;
if(cljs.core.truth_(inst_44903)){
var statearr_44962_44985 = state_44940__$1;
(statearr_44962_44985[(1)] = (11));

} else {
var statearr_44963_44986 = state_44940__$1;
(statearr_44963_44986[(1)] = (12));

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
});})(c__33728__auto___44968,ch))
;
return ((function (switch__33334__auto__,c__33728__auto___44968,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____0 = (function (){
var statearr_44964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44964[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__);

(statearr_44964[(1)] = (1));

return statearr_44964;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____1 = (function (state_44940){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_44940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e44965){if((e44965 instanceof Object)){
var ex__33338__auto__ = e44965;
var statearr_44966_44987 = state_44940;
(statearr_44966_44987[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44988 = state_44940;
state_44940 = G__44988;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__ = function(state_44940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____1.call(this,state_44940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33335__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___44968,ch))
})();
var state__33730__auto__ = (function (){var statearr_44967 = f__33729__auto__.call(null);
(statearr_44967[(6)] = c__33728__auto___44968);

return statearr_44967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___44968,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44989_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44989_SHARP_));
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
var base_path_44991 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44991){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44990){if((e44990 instanceof Error)){
var e = e44990;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44991], null));
} else {
var e = e44990;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44991))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44992){
var map__44993 = p__44992;
var map__44993__$1 = ((((!((map__44993 == null)))?((((map__44993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44993):map__44993);
var opts = map__44993__$1;
var build_id = cljs.core.get.call(null,map__44993__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44993,map__44993__$1,opts,build_id){
return (function (p__44995){
var vec__44996 = p__44995;
var seq__44997 = cljs.core.seq.call(null,vec__44996);
var first__44998 = cljs.core.first.call(null,seq__44997);
var seq__44997__$1 = cljs.core.next.call(null,seq__44997);
var map__44999 = first__44998;
var map__44999__$1 = ((((!((map__44999 == null)))?((((map__44999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44999):map__44999);
var msg = map__44999__$1;
var msg_name = cljs.core.get.call(null,map__44999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44997__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44996,seq__44997,first__44998,seq__44997__$1,map__44999,map__44999__$1,msg,msg_name,_,map__44993,map__44993__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44996,seq__44997,first__44998,seq__44997__$1,map__44999,map__44999__$1,msg,msg_name,_,map__44993,map__44993__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44993,map__44993__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45001){
var vec__45002 = p__45001;
var seq__45003 = cljs.core.seq.call(null,vec__45002);
var first__45004 = cljs.core.first.call(null,seq__45003);
var seq__45003__$1 = cljs.core.next.call(null,seq__45003);
var map__45005 = first__45004;
var map__45005__$1 = ((((!((map__45005 == null)))?((((map__45005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45005):map__45005);
var msg = map__45005__$1;
var msg_name = cljs.core.get.call(null,map__45005__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45003__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45007){
var map__45008 = p__45007;
var map__45008__$1 = ((((!((map__45008 == null)))?((((map__45008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45008):map__45008);
var on_compile_warning = cljs.core.get.call(null,map__45008__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45008__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45008,map__45008__$1,on_compile_warning,on_compile_fail){
return (function (p__45010){
var vec__45011 = p__45010;
var seq__45012 = cljs.core.seq.call(null,vec__45011);
var first__45013 = cljs.core.first.call(null,seq__45012);
var seq__45012__$1 = cljs.core.next.call(null,seq__45012);
var map__45014 = first__45013;
var map__45014__$1 = ((((!((map__45014 == null)))?((((map__45014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45014):map__45014);
var msg = map__45014__$1;
var msg_name = cljs.core.get.call(null,map__45014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45012__$1;
var pred__45016 = cljs.core._EQ_;
var expr__45017 = msg_name;
if(cljs.core.truth_(pred__45016.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45017))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45016.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45017))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45008,map__45008__$1,on_compile_warning,on_compile_fail))
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
return (function (state_45106){
var state_val_45107 = (state_45106[(1)]);
if((state_val_45107 === (7))){
var inst_45026 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45026)){
var statearr_45108_45155 = state_45106__$1;
(statearr_45108_45155[(1)] = (8));

} else {
var statearr_45109_45156 = state_45106__$1;
(statearr_45109_45156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (20))){
var inst_45100 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45110_45157 = state_45106__$1;
(statearr_45110_45157[(2)] = inst_45100);

(statearr_45110_45157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (27))){
var inst_45096 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45111_45158 = state_45106__$1;
(statearr_45111_45158[(2)] = inst_45096);

(statearr_45111_45158[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (1))){
var inst_45019 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45019)){
var statearr_45112_45159 = state_45106__$1;
(statearr_45112_45159[(1)] = (2));

} else {
var statearr_45113_45160 = state_45106__$1;
(statearr_45113_45160[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (24))){
var inst_45098 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45114_45161 = state_45106__$1;
(statearr_45114_45161[(2)] = inst_45098);

(statearr_45114_45161[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (4))){
var inst_45104 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45106__$1,inst_45104);
} else {
if((state_val_45107 === (15))){
var inst_45102 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45115_45162 = state_45106__$1;
(statearr_45115_45162[(2)] = inst_45102);

(statearr_45115_45162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (21))){
var inst_45055 = (state_45106[(2)]);
var inst_45056 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45057 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45056);
var state_45106__$1 = (function (){var statearr_45116 = state_45106;
(statearr_45116[(7)] = inst_45055);

return statearr_45116;
})();
var statearr_45117_45163 = state_45106__$1;
(statearr_45117_45163[(2)] = inst_45057);

(statearr_45117_45163[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (31))){
var inst_45085 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45085)){
var statearr_45118_45164 = state_45106__$1;
(statearr_45118_45164[(1)] = (34));

} else {
var statearr_45119_45165 = state_45106__$1;
(statearr_45119_45165[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (32))){
var inst_45094 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45120_45166 = state_45106__$1;
(statearr_45120_45166[(2)] = inst_45094);

(statearr_45120_45166[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (33))){
var inst_45081 = (state_45106[(2)]);
var inst_45082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45083 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45082);
var state_45106__$1 = (function (){var statearr_45121 = state_45106;
(statearr_45121[(8)] = inst_45081);

return statearr_45121;
})();
var statearr_45122_45167 = state_45106__$1;
(statearr_45122_45167[(2)] = inst_45083);

(statearr_45122_45167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (13))){
var inst_45040 = figwheel.client.heads_up.clear.call(null);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(16),inst_45040);
} else {
if((state_val_45107 === (22))){
var inst_45061 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45062 = figwheel.client.heads_up.append_warning_message.call(null,inst_45061);
var state_45106__$1 = state_45106;
var statearr_45123_45168 = state_45106__$1;
(statearr_45123_45168[(2)] = inst_45062);

(statearr_45123_45168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (36))){
var inst_45092 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45124_45169 = state_45106__$1;
(statearr_45124_45169[(2)] = inst_45092);

(statearr_45124_45169[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (29))){
var inst_45072 = (state_45106[(2)]);
var inst_45073 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45074 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45073);
var state_45106__$1 = (function (){var statearr_45125 = state_45106;
(statearr_45125[(9)] = inst_45072);

return statearr_45125;
})();
var statearr_45126_45170 = state_45106__$1;
(statearr_45126_45170[(2)] = inst_45074);

(statearr_45126_45170[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (6))){
var inst_45021 = (state_45106[(10)]);
var state_45106__$1 = state_45106;
var statearr_45127_45171 = state_45106__$1;
(statearr_45127_45171[(2)] = inst_45021);

(statearr_45127_45171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (28))){
var inst_45068 = (state_45106[(2)]);
var inst_45069 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45070 = figwheel.client.heads_up.display_warning.call(null,inst_45069);
var state_45106__$1 = (function (){var statearr_45128 = state_45106;
(statearr_45128[(11)] = inst_45068);

return statearr_45128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(29),inst_45070);
} else {
if((state_val_45107 === (25))){
var inst_45066 = figwheel.client.heads_up.clear.call(null);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(28),inst_45066);
} else {
if((state_val_45107 === (34))){
var inst_45087 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(37),inst_45087);
} else {
if((state_val_45107 === (17))){
var inst_45046 = (state_45106[(2)]);
var inst_45047 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45048 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45047);
var state_45106__$1 = (function (){var statearr_45129 = state_45106;
(statearr_45129[(12)] = inst_45046);

return statearr_45129;
})();
var statearr_45130_45172 = state_45106__$1;
(statearr_45130_45172[(2)] = inst_45048);

(statearr_45130_45172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (3))){
var inst_45038 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45038)){
var statearr_45131_45173 = state_45106__$1;
(statearr_45131_45173[(1)] = (13));

} else {
var statearr_45132_45174 = state_45106__$1;
(statearr_45132_45174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (12))){
var inst_45034 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45133_45175 = state_45106__$1;
(statearr_45133_45175[(2)] = inst_45034);

(statearr_45133_45175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (2))){
var inst_45021 = (state_45106[(10)]);
var inst_45021__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45106__$1 = (function (){var statearr_45134 = state_45106;
(statearr_45134[(10)] = inst_45021__$1);

return statearr_45134;
})();
if(cljs.core.truth_(inst_45021__$1)){
var statearr_45135_45176 = state_45106__$1;
(statearr_45135_45176[(1)] = (5));

} else {
var statearr_45136_45177 = state_45106__$1;
(statearr_45136_45177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (23))){
var inst_45064 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45064)){
var statearr_45137_45178 = state_45106__$1;
(statearr_45137_45178[(1)] = (25));

} else {
var statearr_45138_45179 = state_45106__$1;
(statearr_45138_45179[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (35))){
var state_45106__$1 = state_45106;
var statearr_45139_45180 = state_45106__$1;
(statearr_45139_45180[(2)] = null);

(statearr_45139_45180[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (19))){
var inst_45059 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45059)){
var statearr_45140_45181 = state_45106__$1;
(statearr_45140_45181[(1)] = (22));

} else {
var statearr_45141_45182 = state_45106__$1;
(statearr_45141_45182[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (11))){
var inst_45030 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45142_45183 = state_45106__$1;
(statearr_45142_45183[(2)] = inst_45030);

(statearr_45142_45183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (9))){
var inst_45032 = figwheel.client.heads_up.clear.call(null);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(12),inst_45032);
} else {
if((state_val_45107 === (5))){
var inst_45023 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45106__$1 = state_45106;
var statearr_45143_45184 = state_45106__$1;
(statearr_45143_45184[(2)] = inst_45023);

(statearr_45143_45184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (14))){
var inst_45050 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45050)){
var statearr_45144_45185 = state_45106__$1;
(statearr_45144_45185[(1)] = (18));

} else {
var statearr_45145_45186 = state_45106__$1;
(statearr_45145_45186[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (26))){
var inst_45076 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45076)){
var statearr_45146_45187 = state_45106__$1;
(statearr_45146_45187[(1)] = (30));

} else {
var statearr_45147_45188 = state_45106__$1;
(statearr_45147_45188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (16))){
var inst_45042 = (state_45106[(2)]);
var inst_45043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45044 = figwheel.client.heads_up.display_exception.call(null,inst_45043);
var state_45106__$1 = (function (){var statearr_45148 = state_45106;
(statearr_45148[(13)] = inst_45042);

return statearr_45148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(17),inst_45044);
} else {
if((state_val_45107 === (30))){
var inst_45078 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45079 = figwheel.client.heads_up.display_warning.call(null,inst_45078);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(33),inst_45079);
} else {
if((state_val_45107 === (10))){
var inst_45036 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45149_45189 = state_45106__$1;
(statearr_45149_45189[(2)] = inst_45036);

(statearr_45149_45189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (18))){
var inst_45052 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45053 = figwheel.client.heads_up.display_exception.call(null,inst_45052);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(21),inst_45053);
} else {
if((state_val_45107 === (37))){
var inst_45089 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45150_45190 = state_45106__$1;
(statearr_45150_45190[(2)] = inst_45089);

(statearr_45150_45190[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (8))){
var inst_45028 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(11),inst_45028);
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
var statearr_45151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45151[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__);

(statearr_45151[(1)] = (1));

return statearr_45151;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____1 = (function (state_45106){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_45106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e45152){if((e45152 instanceof Object)){
var ex__33338__auto__ = e45152;
var statearr_45153_45191 = state_45106;
(statearr_45153_45191[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45192 = state_45106;
state_45106 = G__45192;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__ = function(state_45106){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____1.call(this,state_45106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,msg_hist,msg_names,msg))
})();
var state__33730__auto__ = (function (){var statearr_45154 = f__33729__auto__.call(null);
(statearr_45154[(6)] = c__33728__auto__);

return statearr_45154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,msg_hist,msg_names,msg))
);

return c__33728__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33728__auto___45221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___45221,ch){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___45221,ch){
return (function (state_45207){
var state_val_45208 = (state_45207[(1)]);
if((state_val_45208 === (1))){
var state_45207__$1 = state_45207;
var statearr_45209_45222 = state_45207__$1;
(statearr_45209_45222[(2)] = null);

(statearr_45209_45222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (2))){
var state_45207__$1 = state_45207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45207__$1,(4),ch);
} else {
if((state_val_45208 === (3))){
var inst_45205 = (state_45207[(2)]);
var state_45207__$1 = state_45207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45207__$1,inst_45205);
} else {
if((state_val_45208 === (4))){
var inst_45195 = (state_45207[(7)]);
var inst_45195__$1 = (state_45207[(2)]);
var state_45207__$1 = (function (){var statearr_45210 = state_45207;
(statearr_45210[(7)] = inst_45195__$1);

return statearr_45210;
})();
if(cljs.core.truth_(inst_45195__$1)){
var statearr_45211_45223 = state_45207__$1;
(statearr_45211_45223[(1)] = (5));

} else {
var statearr_45212_45224 = state_45207__$1;
(statearr_45212_45224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (5))){
var inst_45195 = (state_45207[(7)]);
var inst_45197 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45195);
var state_45207__$1 = state_45207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45207__$1,(8),inst_45197);
} else {
if((state_val_45208 === (6))){
var state_45207__$1 = state_45207;
var statearr_45213_45225 = state_45207__$1;
(statearr_45213_45225[(2)] = null);

(statearr_45213_45225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (7))){
var inst_45203 = (state_45207[(2)]);
var state_45207__$1 = state_45207;
var statearr_45214_45226 = state_45207__$1;
(statearr_45214_45226[(2)] = inst_45203);

(statearr_45214_45226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45208 === (8))){
var inst_45199 = (state_45207[(2)]);
var state_45207__$1 = (function (){var statearr_45215 = state_45207;
(statearr_45215[(8)] = inst_45199);

return statearr_45215;
})();
var statearr_45216_45227 = state_45207__$1;
(statearr_45216_45227[(2)] = null);

(statearr_45216_45227[(1)] = (2));


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
});})(c__33728__auto___45221,ch))
;
return ((function (switch__33334__auto__,c__33728__auto___45221,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33335__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33335__auto____0 = (function (){
var statearr_45217 = [null,null,null,null,null,null,null,null,null];
(statearr_45217[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33335__auto__);

(statearr_45217[(1)] = (1));

return statearr_45217;
});
var figwheel$client$heads_up_plugin_$_state_machine__33335__auto____1 = (function (state_45207){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_45207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e45218){if((e45218 instanceof Object)){
var ex__33338__auto__ = e45218;
var statearr_45219_45228 = state_45207;
(statearr_45219_45228[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45229 = state_45207;
state_45207 = G__45229;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33335__auto__ = function(state_45207){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33335__auto____1.call(this,state_45207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33335__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33335__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___45221,ch))
})();
var state__33730__auto__ = (function (){var statearr_45220 = f__33729__auto__.call(null);
(statearr_45220[(6)] = c__33728__auto___45221);

return statearr_45220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___45221,ch))
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
return (function (state_45235){
var state_val_45236 = (state_45235[(1)]);
if((state_val_45236 === (1))){
var inst_45230 = cljs.core.async.timeout.call(null,(3000));
var state_45235__$1 = state_45235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45235__$1,(2),inst_45230);
} else {
if((state_val_45236 === (2))){
var inst_45232 = (state_45235[(2)]);
var inst_45233 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45235__$1 = (function (){var statearr_45237 = state_45235;
(statearr_45237[(7)] = inst_45232);

return statearr_45237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45235__$1,inst_45233);
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
var statearr_45238 = [null,null,null,null,null,null,null,null];
(statearr_45238[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__);

(statearr_45238[(1)] = (1));

return statearr_45238;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____1 = (function (state_45235){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_45235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e45239){if((e45239 instanceof Object)){
var ex__33338__auto__ = e45239;
var statearr_45240_45242 = state_45235;
(statearr_45240_45242[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45243 = state_45235;
state_45235 = G__45243;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__ = function(state_45235){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____1.call(this,state_45235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33335__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_45241 = f__33729__auto__.call(null);
(statearr_45241[(6)] = c__33728__auto__);

return statearr_45241;
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
return (function (state_45250){
var state_val_45251 = (state_45250[(1)]);
if((state_val_45251 === (1))){
var inst_45244 = cljs.core.async.timeout.call(null,(2000));
var state_45250__$1 = state_45250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45250__$1,(2),inst_45244);
} else {
if((state_val_45251 === (2))){
var inst_45246 = (state_45250[(2)]);
var inst_45247 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_45248 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_45247);
var state_45250__$1 = (function (){var statearr_45252 = state_45250;
(statearr_45252[(7)] = inst_45246);

return statearr_45252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45250__$1,inst_45248);
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
var statearr_45253 = [null,null,null,null,null,null,null,null];
(statearr_45253[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__);

(statearr_45253[(1)] = (1));

return statearr_45253;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____1 = (function (state_45250){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_45250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e45254){if((e45254 instanceof Object)){
var ex__33338__auto__ = e45254;
var statearr_45255_45257 = state_45250;
(statearr_45255_45257[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45258 = state_45250;
state_45250 = G__45258;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__ = function(state_45250){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____1.call(this,state_45250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33730__auto__ = (function (){var statearr_45256 = f__33729__auto__.call(null);
(statearr_45256[(6)] = c__33728__auto__);

return statearr_45256;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__45259){
var map__45260 = p__45259;
var map__45260__$1 = ((((!((map__45260 == null)))?((((map__45260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45260):map__45260);
var file = cljs.core.get.call(null,map__45260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45260__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45260__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45262 = "";
var G__45262__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45262),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__45262);
var G__45262__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45262__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__45262__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45262__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__45262__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45263){
var map__45264 = p__45263;
var map__45264__$1 = ((((!((map__45264 == null)))?((((map__45264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45264):map__45264);
var ed = map__45264__$1;
var formatted_exception = cljs.core.get.call(null,map__45264__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45264__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45264__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45266_45270 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45267_45271 = null;
var count__45268_45272 = (0);
var i__45269_45273 = (0);
while(true){
if((i__45269_45273 < count__45268_45272)){
var msg_45274 = cljs.core._nth.call(null,chunk__45267_45271,i__45269_45273);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45274);

var G__45275 = seq__45266_45270;
var G__45276 = chunk__45267_45271;
var G__45277 = count__45268_45272;
var G__45278 = (i__45269_45273 + (1));
seq__45266_45270 = G__45275;
chunk__45267_45271 = G__45276;
count__45268_45272 = G__45277;
i__45269_45273 = G__45278;
continue;
} else {
var temp__5278__auto___45279 = cljs.core.seq.call(null,seq__45266_45270);
if(temp__5278__auto___45279){
var seq__45266_45280__$1 = temp__5278__auto___45279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45266_45280__$1)){
var c__31003__auto___45281 = cljs.core.chunk_first.call(null,seq__45266_45280__$1);
var G__45282 = cljs.core.chunk_rest.call(null,seq__45266_45280__$1);
var G__45283 = c__31003__auto___45281;
var G__45284 = cljs.core.count.call(null,c__31003__auto___45281);
var G__45285 = (0);
seq__45266_45270 = G__45282;
chunk__45267_45271 = G__45283;
count__45268_45272 = G__45284;
i__45269_45273 = G__45285;
continue;
} else {
var msg_45286 = cljs.core.first.call(null,seq__45266_45280__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45286);

var G__45287 = cljs.core.next.call(null,seq__45266_45280__$1);
var G__45288 = null;
var G__45289 = (0);
var G__45290 = (0);
seq__45266_45270 = G__45287;
chunk__45267_45271 = G__45288;
count__45268_45272 = G__45289;
i__45269_45273 = G__45290;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45291){
var map__45292 = p__45291;
var map__45292__$1 = ((((!((map__45292 == null)))?((((map__45292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45292):map__45292);
var w = map__45292__$1;
var message = cljs.core.get.call(null,map__45292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__45294 = cljs.core.seq.call(null,plugins);
var chunk__45295 = null;
var count__45296 = (0);
var i__45297 = (0);
while(true){
if((i__45297 < count__45296)){
var vec__45298 = cljs.core._nth.call(null,chunk__45295,i__45297);
var k = cljs.core.nth.call(null,vec__45298,(0),null);
var plugin = cljs.core.nth.call(null,vec__45298,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45304 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45294,chunk__45295,count__45296,i__45297,pl_45304,vec__45298,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45304.call(null,msg_hist);
});})(seq__45294,chunk__45295,count__45296,i__45297,pl_45304,vec__45298,k,plugin))
);
} else {
}

var G__45305 = seq__45294;
var G__45306 = chunk__45295;
var G__45307 = count__45296;
var G__45308 = (i__45297 + (1));
seq__45294 = G__45305;
chunk__45295 = G__45306;
count__45296 = G__45307;
i__45297 = G__45308;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45294);
if(temp__5278__auto__){
var seq__45294__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45294__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__45294__$1);
var G__45309 = cljs.core.chunk_rest.call(null,seq__45294__$1);
var G__45310 = c__31003__auto__;
var G__45311 = cljs.core.count.call(null,c__31003__auto__);
var G__45312 = (0);
seq__45294 = G__45309;
chunk__45295 = G__45310;
count__45296 = G__45311;
i__45297 = G__45312;
continue;
} else {
var vec__45301 = cljs.core.first.call(null,seq__45294__$1);
var k = cljs.core.nth.call(null,vec__45301,(0),null);
var plugin = cljs.core.nth.call(null,vec__45301,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45313 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45294,chunk__45295,count__45296,i__45297,pl_45313,vec__45301,k,plugin,seq__45294__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45313.call(null,msg_hist);
});})(seq__45294,chunk__45295,count__45296,i__45297,pl_45313,vec__45301,k,plugin,seq__45294__$1,temp__5278__auto__))
);
} else {
}

var G__45314 = cljs.core.next.call(null,seq__45294__$1);
var G__45315 = null;
var G__45316 = (0);
var G__45317 = (0);
seq__45294 = G__45314;
chunk__45295 = G__45315;
count__45296 = G__45316;
i__45297 = G__45317;
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
var G__45319 = arguments.length;
switch (G__45319) {
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

var seq__45320_45325 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45321_45326 = null;
var count__45322_45327 = (0);
var i__45323_45328 = (0);
while(true){
if((i__45323_45328 < count__45322_45327)){
var msg_45329 = cljs.core._nth.call(null,chunk__45321_45326,i__45323_45328);
figwheel.client.socket.handle_incoming_message.call(null,msg_45329);

var G__45330 = seq__45320_45325;
var G__45331 = chunk__45321_45326;
var G__45332 = count__45322_45327;
var G__45333 = (i__45323_45328 + (1));
seq__45320_45325 = G__45330;
chunk__45321_45326 = G__45331;
count__45322_45327 = G__45332;
i__45323_45328 = G__45333;
continue;
} else {
var temp__5278__auto___45334 = cljs.core.seq.call(null,seq__45320_45325);
if(temp__5278__auto___45334){
var seq__45320_45335__$1 = temp__5278__auto___45334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45320_45335__$1)){
var c__31003__auto___45336 = cljs.core.chunk_first.call(null,seq__45320_45335__$1);
var G__45337 = cljs.core.chunk_rest.call(null,seq__45320_45335__$1);
var G__45338 = c__31003__auto___45336;
var G__45339 = cljs.core.count.call(null,c__31003__auto___45336);
var G__45340 = (0);
seq__45320_45325 = G__45337;
chunk__45321_45326 = G__45338;
count__45322_45327 = G__45339;
i__45323_45328 = G__45340;
continue;
} else {
var msg_45341 = cljs.core.first.call(null,seq__45320_45335__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45341);

var G__45342 = cljs.core.next.call(null,seq__45320_45335__$1);
var G__45343 = null;
var G__45344 = (0);
var G__45345 = (0);
seq__45320_45325 = G__45342;
chunk__45321_45326 = G__45343;
count__45322_45327 = G__45344;
i__45323_45328 = G__45345;
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
var len__31349__auto___45350 = arguments.length;
var i__31350__auto___45351 = (0);
while(true){
if((i__31350__auto___45351 < len__31349__auto___45350)){
args__31356__auto__.push((arguments[i__31350__auto___45351]));

var G__45352 = (i__31350__auto___45351 + (1));
i__31350__auto___45351 = G__45352;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45347){
var map__45348 = p__45347;
var map__45348__$1 = ((((!((map__45348 == null)))?((((map__45348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45348):map__45348);
var opts = map__45348__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45346){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45346));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45353){if((e45353 instanceof Error)){
var e = e45353;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45353;

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
return (function (p__45354){
var map__45355 = p__45354;
var map__45355__$1 = ((((!((map__45355 == null)))?((((map__45355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45355):map__45355);
var msg_name = cljs.core.get.call(null,map__45355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510143309365
