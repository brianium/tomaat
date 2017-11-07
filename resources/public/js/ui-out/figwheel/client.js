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
}catch (e39069){if((e39069 instanceof Error)){
var e = e39069;
return "Error: Unable to stringify";
} else {
throw e39069;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39072 = arguments.length;
switch (G__39072) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39070_SHARP_){
if(typeof p1__39070_SHARP_ === 'string'){
return p1__39070_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39070_SHARP_);
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
var len__31349__auto___39075 = arguments.length;
var i__31350__auto___39076 = (0);
while(true){
if((i__31350__auto___39076 < len__31349__auto___39075)){
args__31356__auto__.push((arguments[i__31350__auto___39076]));

var G__39077 = (i__31350__auto___39076 + (1));
i__31350__auto___39076 = G__39077;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39074){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39074));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___39079 = arguments.length;
var i__31350__auto___39080 = (0);
while(true){
if((i__31350__auto___39080 < len__31349__auto___39079)){
args__31356__auto__.push((arguments[i__31350__auto___39080]));

var G__39081 = (i__31350__auto___39080 + (1));
i__31350__auto___39080 = G__39081;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39078){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39078));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39082){
var map__39083 = p__39082;
var map__39083__$1 = ((((!((map__39083 == null)))?((((map__39083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39083):map__39083);
var message = cljs.core.get.call(null,map__39083__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34124__auto___39162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___39162,ch){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___39162,ch){
return (function (state_39134){
var state_val_39135 = (state_39134[(1)]);
if((state_val_39135 === (7))){
var inst_39130 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39136_39163 = state_39134__$1;
(statearr_39136_39163[(2)] = inst_39130);

(statearr_39136_39163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (1))){
var state_39134__$1 = state_39134;
var statearr_39137_39164 = state_39134__$1;
(statearr_39137_39164[(2)] = null);

(statearr_39137_39164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (4))){
var inst_39087 = (state_39134[(7)]);
var inst_39087__$1 = (state_39134[(2)]);
var state_39134__$1 = (function (){var statearr_39138 = state_39134;
(statearr_39138[(7)] = inst_39087__$1);

return statearr_39138;
})();
if(cljs.core.truth_(inst_39087__$1)){
var statearr_39139_39165 = state_39134__$1;
(statearr_39139_39165[(1)] = (5));

} else {
var statearr_39140_39166 = state_39134__$1;
(statearr_39140_39166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (15))){
var inst_39094 = (state_39134[(8)]);
var inst_39109 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39094);
var inst_39110 = cljs.core.first.call(null,inst_39109);
var inst_39111 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39110);
var inst_39112 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39111)].join('');
var inst_39113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39112);
var state_39134__$1 = state_39134;
var statearr_39141_39167 = state_39134__$1;
(statearr_39141_39167[(2)] = inst_39113);

(statearr_39141_39167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (13))){
var inst_39118 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39142_39168 = state_39134__$1;
(statearr_39142_39168[(2)] = inst_39118);

(statearr_39142_39168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (6))){
var state_39134__$1 = state_39134;
var statearr_39143_39169 = state_39134__$1;
(statearr_39143_39169[(2)] = null);

(statearr_39143_39169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (17))){
var inst_39116 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39144_39170 = state_39134__$1;
(statearr_39144_39170[(2)] = inst_39116);

(statearr_39144_39170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (3))){
var inst_39132 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39134__$1,inst_39132);
} else {
if((state_val_39135 === (12))){
var inst_39093 = (state_39134[(9)]);
var inst_39107 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39093,opts);
var state_39134__$1 = state_39134;
if(cljs.core.truth_(inst_39107)){
var statearr_39145_39171 = state_39134__$1;
(statearr_39145_39171[(1)] = (15));

} else {
var statearr_39146_39172 = state_39134__$1;
(statearr_39146_39172[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (2))){
var state_39134__$1 = state_39134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39134__$1,(4),ch);
} else {
if((state_val_39135 === (11))){
var inst_39094 = (state_39134[(8)]);
var inst_39099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39100 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39094);
var inst_39101 = cljs.core.async.timeout.call(null,(1000));
var inst_39102 = [inst_39100,inst_39101];
var inst_39103 = (new cljs.core.PersistentVector(null,2,(5),inst_39099,inst_39102,null));
var state_39134__$1 = state_39134;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39134__$1,(14),inst_39103);
} else {
if((state_val_39135 === (9))){
var inst_39094 = (state_39134[(8)]);
var inst_39120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39094);
var inst_39122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39121);
var inst_39123 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39122)].join('');
var inst_39124 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39123);
var state_39134__$1 = (function (){var statearr_39147 = state_39134;
(statearr_39147[(10)] = inst_39120);

return statearr_39147;
})();
var statearr_39148_39173 = state_39134__$1;
(statearr_39148_39173[(2)] = inst_39124);

(statearr_39148_39173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (5))){
var inst_39087 = (state_39134[(7)]);
var inst_39089 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39090 = (new cljs.core.PersistentArrayMap(null,2,inst_39089,null));
var inst_39091 = (new cljs.core.PersistentHashSet(null,inst_39090,null));
var inst_39092 = figwheel.client.focus_msgs.call(null,inst_39091,inst_39087);
var inst_39093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39092);
var inst_39094 = cljs.core.first.call(null,inst_39092);
var inst_39095 = figwheel.client.autoload_QMARK_.call(null);
var state_39134__$1 = (function (){var statearr_39149 = state_39134;
(statearr_39149[(8)] = inst_39094);

(statearr_39149[(9)] = inst_39093);

return statearr_39149;
})();
if(cljs.core.truth_(inst_39095)){
var statearr_39150_39174 = state_39134__$1;
(statearr_39150_39174[(1)] = (8));

} else {
var statearr_39151_39175 = state_39134__$1;
(statearr_39151_39175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (14))){
var inst_39105 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39152_39176 = state_39134__$1;
(statearr_39152_39176[(2)] = inst_39105);

(statearr_39152_39176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (16))){
var state_39134__$1 = state_39134;
var statearr_39153_39177 = state_39134__$1;
(statearr_39153_39177[(2)] = null);

(statearr_39153_39177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (10))){
var inst_39126 = (state_39134[(2)]);
var state_39134__$1 = (function (){var statearr_39154 = state_39134;
(statearr_39154[(11)] = inst_39126);

return statearr_39154;
})();
var statearr_39155_39178 = state_39134__$1;
(statearr_39155_39178[(2)] = null);

(statearr_39155_39178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (8))){
var inst_39093 = (state_39134[(9)]);
var inst_39097 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39093,opts);
var state_39134__$1 = state_39134;
if(cljs.core.truth_(inst_39097)){
var statearr_39156_39179 = state_39134__$1;
(statearr_39156_39179[(1)] = (11));

} else {
var statearr_39157_39180 = state_39134__$1;
(statearr_39157_39180[(1)] = (12));

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
});})(c__34124__auto___39162,ch))
;
return ((function (switch__34034__auto__,c__34124__auto___39162,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34035__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34035__auto____0 = (function (){
var statearr_39158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39158[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34035__auto__);

(statearr_39158[(1)] = (1));

return statearr_39158;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34035__auto____1 = (function (state_39134){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_39134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e39159){if((e39159 instanceof Object)){
var ex__34038__auto__ = e39159;
var statearr_39160_39181 = state_39134;
(statearr_39160_39181[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39182 = state_39134;
state_39134 = G__39182;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34035__auto__ = function(state_39134){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34035__auto____1.call(this,state_39134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34035__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34035__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___39162,ch))
})();
var state__34126__auto__ = (function (){var statearr_39161 = f__34125__auto__.call(null);
(statearr_39161[(6)] = c__34124__auto___39162);

return statearr_39161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___39162,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39183_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39183_SHARP_));
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
var base_path_39185 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39185){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39184){if((e39184 instanceof Error)){
var e = e39184;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39185], null));
} else {
var e = e39184;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39185))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39186){
var map__39187 = p__39186;
var map__39187__$1 = ((((!((map__39187 == null)))?((((map__39187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39187):map__39187);
var opts = map__39187__$1;
var build_id = cljs.core.get.call(null,map__39187__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39187,map__39187__$1,opts,build_id){
return (function (p__39189){
var vec__39190 = p__39189;
var seq__39191 = cljs.core.seq.call(null,vec__39190);
var first__39192 = cljs.core.first.call(null,seq__39191);
var seq__39191__$1 = cljs.core.next.call(null,seq__39191);
var map__39193 = first__39192;
var map__39193__$1 = ((((!((map__39193 == null)))?((((map__39193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39193):map__39193);
var msg = map__39193__$1;
var msg_name = cljs.core.get.call(null,map__39193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39191__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39190,seq__39191,first__39192,seq__39191__$1,map__39193,map__39193__$1,msg,msg_name,_,map__39187,map__39187__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39190,seq__39191,first__39192,seq__39191__$1,map__39193,map__39193__$1,msg,msg_name,_,map__39187,map__39187__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39187,map__39187__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39195){
var vec__39196 = p__39195;
var seq__39197 = cljs.core.seq.call(null,vec__39196);
var first__39198 = cljs.core.first.call(null,seq__39197);
var seq__39197__$1 = cljs.core.next.call(null,seq__39197);
var map__39199 = first__39198;
var map__39199__$1 = ((((!((map__39199 == null)))?((((map__39199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39199):map__39199);
var msg = map__39199__$1;
var msg_name = cljs.core.get.call(null,map__39199__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39197__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39201){
var map__39202 = p__39201;
var map__39202__$1 = ((((!((map__39202 == null)))?((((map__39202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39202):map__39202);
var on_compile_warning = cljs.core.get.call(null,map__39202__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39202__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39202,map__39202__$1,on_compile_warning,on_compile_fail){
return (function (p__39204){
var vec__39205 = p__39204;
var seq__39206 = cljs.core.seq.call(null,vec__39205);
var first__39207 = cljs.core.first.call(null,seq__39206);
var seq__39206__$1 = cljs.core.next.call(null,seq__39206);
var map__39208 = first__39207;
var map__39208__$1 = ((((!((map__39208 == null)))?((((map__39208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39208):map__39208);
var msg = map__39208__$1;
var msg_name = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39206__$1;
var pred__39210 = cljs.core._EQ_;
var expr__39211 = msg_name;
if(cljs.core.truth_(pred__39210.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39211))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39210.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39211))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39202,map__39202__$1,on_compile_warning,on_compile_fail))
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
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__,msg_hist,msg_names,msg){
return (function (state_39300){
var state_val_39301 = (state_39300[(1)]);
if((state_val_39301 === (7))){
var inst_39220 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39220)){
var statearr_39302_39349 = state_39300__$1;
(statearr_39302_39349[(1)] = (8));

} else {
var statearr_39303_39350 = state_39300__$1;
(statearr_39303_39350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (20))){
var inst_39294 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39304_39351 = state_39300__$1;
(statearr_39304_39351[(2)] = inst_39294);

(statearr_39304_39351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (27))){
var inst_39290 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39305_39352 = state_39300__$1;
(statearr_39305_39352[(2)] = inst_39290);

(statearr_39305_39352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (1))){
var inst_39213 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39213)){
var statearr_39306_39353 = state_39300__$1;
(statearr_39306_39353[(1)] = (2));

} else {
var statearr_39307_39354 = state_39300__$1;
(statearr_39307_39354[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (24))){
var inst_39292 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39308_39355 = state_39300__$1;
(statearr_39308_39355[(2)] = inst_39292);

(statearr_39308_39355[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (4))){
var inst_39298 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39300__$1,inst_39298);
} else {
if((state_val_39301 === (15))){
var inst_39296 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39309_39356 = state_39300__$1;
(statearr_39309_39356[(2)] = inst_39296);

(statearr_39309_39356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (21))){
var inst_39249 = (state_39300[(2)]);
var inst_39250 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39251 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39250);
var state_39300__$1 = (function (){var statearr_39310 = state_39300;
(statearr_39310[(7)] = inst_39249);

return statearr_39310;
})();
var statearr_39311_39357 = state_39300__$1;
(statearr_39311_39357[(2)] = inst_39251);

(statearr_39311_39357[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (31))){
var inst_39279 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39279)){
var statearr_39312_39358 = state_39300__$1;
(statearr_39312_39358[(1)] = (34));

} else {
var statearr_39313_39359 = state_39300__$1;
(statearr_39313_39359[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (32))){
var inst_39288 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39314_39360 = state_39300__$1;
(statearr_39314_39360[(2)] = inst_39288);

(statearr_39314_39360[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (33))){
var inst_39275 = (state_39300[(2)]);
var inst_39276 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39277 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39276);
var state_39300__$1 = (function (){var statearr_39315 = state_39300;
(statearr_39315[(8)] = inst_39275);

return statearr_39315;
})();
var statearr_39316_39361 = state_39300__$1;
(statearr_39316_39361[(2)] = inst_39277);

(statearr_39316_39361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (13))){
var inst_39234 = figwheel.client.heads_up.clear.call(null);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(16),inst_39234);
} else {
if((state_val_39301 === (22))){
var inst_39255 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39256 = figwheel.client.heads_up.append_warning_message.call(null,inst_39255);
var state_39300__$1 = state_39300;
var statearr_39317_39362 = state_39300__$1;
(statearr_39317_39362[(2)] = inst_39256);

(statearr_39317_39362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (36))){
var inst_39286 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39318_39363 = state_39300__$1;
(statearr_39318_39363[(2)] = inst_39286);

(statearr_39318_39363[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (29))){
var inst_39266 = (state_39300[(2)]);
var inst_39267 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39268 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39267);
var state_39300__$1 = (function (){var statearr_39319 = state_39300;
(statearr_39319[(9)] = inst_39266);

return statearr_39319;
})();
var statearr_39320_39364 = state_39300__$1;
(statearr_39320_39364[(2)] = inst_39268);

(statearr_39320_39364[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (6))){
var inst_39215 = (state_39300[(10)]);
var state_39300__$1 = state_39300;
var statearr_39321_39365 = state_39300__$1;
(statearr_39321_39365[(2)] = inst_39215);

(statearr_39321_39365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (28))){
var inst_39262 = (state_39300[(2)]);
var inst_39263 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39264 = figwheel.client.heads_up.display_warning.call(null,inst_39263);
var state_39300__$1 = (function (){var statearr_39322 = state_39300;
(statearr_39322[(11)] = inst_39262);

return statearr_39322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(29),inst_39264);
} else {
if((state_val_39301 === (25))){
var inst_39260 = figwheel.client.heads_up.clear.call(null);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(28),inst_39260);
} else {
if((state_val_39301 === (34))){
var inst_39281 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(37),inst_39281);
} else {
if((state_val_39301 === (17))){
var inst_39240 = (state_39300[(2)]);
var inst_39241 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39242 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39241);
var state_39300__$1 = (function (){var statearr_39323 = state_39300;
(statearr_39323[(12)] = inst_39240);

return statearr_39323;
})();
var statearr_39324_39366 = state_39300__$1;
(statearr_39324_39366[(2)] = inst_39242);

(statearr_39324_39366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (3))){
var inst_39232 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39232)){
var statearr_39325_39367 = state_39300__$1;
(statearr_39325_39367[(1)] = (13));

} else {
var statearr_39326_39368 = state_39300__$1;
(statearr_39326_39368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (12))){
var inst_39228 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39327_39369 = state_39300__$1;
(statearr_39327_39369[(2)] = inst_39228);

(statearr_39327_39369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (2))){
var inst_39215 = (state_39300[(10)]);
var inst_39215__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39300__$1 = (function (){var statearr_39328 = state_39300;
(statearr_39328[(10)] = inst_39215__$1);

return statearr_39328;
})();
if(cljs.core.truth_(inst_39215__$1)){
var statearr_39329_39370 = state_39300__$1;
(statearr_39329_39370[(1)] = (5));

} else {
var statearr_39330_39371 = state_39300__$1;
(statearr_39330_39371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (23))){
var inst_39258 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39258)){
var statearr_39331_39372 = state_39300__$1;
(statearr_39331_39372[(1)] = (25));

} else {
var statearr_39332_39373 = state_39300__$1;
(statearr_39332_39373[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (35))){
var state_39300__$1 = state_39300;
var statearr_39333_39374 = state_39300__$1;
(statearr_39333_39374[(2)] = null);

(statearr_39333_39374[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (19))){
var inst_39253 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39253)){
var statearr_39334_39375 = state_39300__$1;
(statearr_39334_39375[(1)] = (22));

} else {
var statearr_39335_39376 = state_39300__$1;
(statearr_39335_39376[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (11))){
var inst_39224 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39336_39377 = state_39300__$1;
(statearr_39336_39377[(2)] = inst_39224);

(statearr_39336_39377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (9))){
var inst_39226 = figwheel.client.heads_up.clear.call(null);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(12),inst_39226);
} else {
if((state_val_39301 === (5))){
var inst_39217 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39300__$1 = state_39300;
var statearr_39337_39378 = state_39300__$1;
(statearr_39337_39378[(2)] = inst_39217);

(statearr_39337_39378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (14))){
var inst_39244 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39244)){
var statearr_39338_39379 = state_39300__$1;
(statearr_39338_39379[(1)] = (18));

} else {
var statearr_39339_39380 = state_39300__$1;
(statearr_39339_39380[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (26))){
var inst_39270 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39300__$1 = state_39300;
if(cljs.core.truth_(inst_39270)){
var statearr_39340_39381 = state_39300__$1;
(statearr_39340_39381[(1)] = (30));

} else {
var statearr_39341_39382 = state_39300__$1;
(statearr_39341_39382[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (16))){
var inst_39236 = (state_39300[(2)]);
var inst_39237 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39238 = figwheel.client.heads_up.display_exception.call(null,inst_39237);
var state_39300__$1 = (function (){var statearr_39342 = state_39300;
(statearr_39342[(13)] = inst_39236);

return statearr_39342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(17),inst_39238);
} else {
if((state_val_39301 === (30))){
var inst_39272 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39273 = figwheel.client.heads_up.display_warning.call(null,inst_39272);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(33),inst_39273);
} else {
if((state_val_39301 === (10))){
var inst_39230 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39343_39383 = state_39300__$1;
(statearr_39343_39383[(2)] = inst_39230);

(statearr_39343_39383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (18))){
var inst_39246 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39247 = figwheel.client.heads_up.display_exception.call(null,inst_39246);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(21),inst_39247);
} else {
if((state_val_39301 === (37))){
var inst_39283 = (state_39300[(2)]);
var state_39300__$1 = state_39300;
var statearr_39344_39384 = state_39300__$1;
(statearr_39344_39384[(2)] = inst_39283);

(statearr_39344_39384[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39301 === (8))){
var inst_39222 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39300__$1 = state_39300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39300__$1,(11),inst_39222);
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
});})(c__34124__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34034__auto__,c__34124__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto____0 = (function (){
var statearr_39345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39345[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto__);

(statearr_39345[(1)] = (1));

return statearr_39345;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto____1 = (function (state_39300){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_39300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e39346){if((e39346 instanceof Object)){
var ex__34038__auto__ = e39346;
var statearr_39347_39385 = state_39300;
(statearr_39347_39385[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39386 = state_39300;
state_39300 = G__39386;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto__ = function(state_39300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto____1.call(this,state_39300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__,msg_hist,msg_names,msg))
})();
var state__34126__auto__ = (function (){var statearr_39348 = f__34125__auto__.call(null);
(statearr_39348[(6)] = c__34124__auto__);

return statearr_39348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__,msg_hist,msg_names,msg))
);

return c__34124__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34124__auto___39415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___39415,ch){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___39415,ch){
return (function (state_39401){
var state_val_39402 = (state_39401[(1)]);
if((state_val_39402 === (1))){
var state_39401__$1 = state_39401;
var statearr_39403_39416 = state_39401__$1;
(statearr_39403_39416[(2)] = null);

(statearr_39403_39416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (2))){
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39401__$1,(4),ch);
} else {
if((state_val_39402 === (3))){
var inst_39399 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39401__$1,inst_39399);
} else {
if((state_val_39402 === (4))){
var inst_39389 = (state_39401[(7)]);
var inst_39389__$1 = (state_39401[(2)]);
var state_39401__$1 = (function (){var statearr_39404 = state_39401;
(statearr_39404[(7)] = inst_39389__$1);

return statearr_39404;
})();
if(cljs.core.truth_(inst_39389__$1)){
var statearr_39405_39417 = state_39401__$1;
(statearr_39405_39417[(1)] = (5));

} else {
var statearr_39406_39418 = state_39401__$1;
(statearr_39406_39418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (5))){
var inst_39389 = (state_39401[(7)]);
var inst_39391 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39389);
var state_39401__$1 = state_39401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39401__$1,(8),inst_39391);
} else {
if((state_val_39402 === (6))){
var state_39401__$1 = state_39401;
var statearr_39407_39419 = state_39401__$1;
(statearr_39407_39419[(2)] = null);

(statearr_39407_39419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (7))){
var inst_39397 = (state_39401[(2)]);
var state_39401__$1 = state_39401;
var statearr_39408_39420 = state_39401__$1;
(statearr_39408_39420[(2)] = inst_39397);

(statearr_39408_39420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39402 === (8))){
var inst_39393 = (state_39401[(2)]);
var state_39401__$1 = (function (){var statearr_39409 = state_39401;
(statearr_39409[(8)] = inst_39393);

return statearr_39409;
})();
var statearr_39410_39421 = state_39401__$1;
(statearr_39410_39421[(2)] = null);

(statearr_39410_39421[(1)] = (2));


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
});})(c__34124__auto___39415,ch))
;
return ((function (switch__34034__auto__,c__34124__auto___39415,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34035__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34035__auto____0 = (function (){
var statearr_39411 = [null,null,null,null,null,null,null,null,null];
(statearr_39411[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34035__auto__);

(statearr_39411[(1)] = (1));

return statearr_39411;
});
var figwheel$client$heads_up_plugin_$_state_machine__34035__auto____1 = (function (state_39401){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_39401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e39412){if((e39412 instanceof Object)){
var ex__34038__auto__ = e39412;
var statearr_39413_39422 = state_39401;
(statearr_39413_39422[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39423 = state_39401;
state_39401 = G__39423;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34035__auto__ = function(state_39401){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34035__auto____1.call(this,state_39401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34035__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34035__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___39415,ch))
})();
var state__34126__auto__ = (function (){var statearr_39414 = f__34125__auto__.call(null);
(statearr_39414[(6)] = c__34124__auto___39415);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___39415,ch))
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
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__){
return (function (state_39429){
var state_val_39430 = (state_39429[(1)]);
if((state_val_39430 === (1))){
var inst_39424 = cljs.core.async.timeout.call(null,(3000));
var state_39429__$1 = state_39429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39429__$1,(2),inst_39424);
} else {
if((state_val_39430 === (2))){
var inst_39426 = (state_39429[(2)]);
var inst_39427 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39429__$1 = (function (){var statearr_39431 = state_39429;
(statearr_39431[(7)] = inst_39426);

return statearr_39431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39429__$1,inst_39427);
} else {
return null;
}
}
});})(c__34124__auto__))
;
return ((function (switch__34034__auto__,c__34124__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34035__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34035__auto____0 = (function (){
var statearr_39432 = [null,null,null,null,null,null,null,null];
(statearr_39432[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34035__auto__);

(statearr_39432[(1)] = (1));

return statearr_39432;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34035__auto____1 = (function (state_39429){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_39429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e39433){if((e39433 instanceof Object)){
var ex__34038__auto__ = e39433;
var statearr_39434_39436 = state_39429;
(statearr_39434_39436[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39437 = state_39429;
state_39429 = G__39437;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34035__auto__ = function(state_39429){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34035__auto____1.call(this,state_39429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34035__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34035__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__))
})();
var state__34126__auto__ = (function (){var statearr_39435 = f__34125__auto__.call(null);
(statearr_39435[(6)] = c__34124__auto__);

return statearr_39435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__))
);

return c__34124__auto__;
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
var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__,figwheel_version,temp__5278__auto__){
return (function (state_39444){
var state_val_39445 = (state_39444[(1)]);
if((state_val_39445 === (1))){
var inst_39438 = cljs.core.async.timeout.call(null,(2000));
var state_39444__$1 = state_39444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39444__$1,(2),inst_39438);
} else {
if((state_val_39445 === (2))){
var inst_39440 = (state_39444[(2)]);
var inst_39441 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39442 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39441);
var state_39444__$1 = (function (){var statearr_39446 = state_39444;
(statearr_39446[(7)] = inst_39440);

return statearr_39446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39444__$1,inst_39442);
} else {
return null;
}
}
});})(c__34124__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__34034__auto__,c__34124__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto____0 = (function (){
var statearr_39447 = [null,null,null,null,null,null,null,null];
(statearr_39447[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto__);

(statearr_39447[(1)] = (1));

return statearr_39447;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto____1 = (function (state_39444){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_39444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e39448){if((e39448 instanceof Object)){
var ex__34038__auto__ = e39448;
var statearr_39449_39451 = state_39444;
(statearr_39449_39451[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39452 = state_39444;
state_39444 = G__39452;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto__ = function(state_39444){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto____1.call(this,state_39444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__,figwheel_version,temp__5278__auto__))
})();
var state__34126__auto__ = (function (){var statearr_39450 = f__34125__auto__.call(null);
(statearr_39450[(6)] = c__34124__auto__);

return statearr_39450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__,figwheel_version,temp__5278__auto__))
);

return c__34124__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39453){
var map__39454 = p__39453;
var map__39454__$1 = ((((!((map__39454 == null)))?((((map__39454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39454):map__39454);
var file = cljs.core.get.call(null,map__39454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39454__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39454__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39456 = "";
var G__39456__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39456),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39456);
var G__39456__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39456__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39456__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39456__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39456__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39457){
var map__39458 = p__39457;
var map__39458__$1 = ((((!((map__39458 == null)))?((((map__39458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39458):map__39458);
var ed = map__39458__$1;
var formatted_exception = cljs.core.get.call(null,map__39458__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39458__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39458__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39460_39464 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39461_39465 = null;
var count__39462_39466 = (0);
var i__39463_39467 = (0);
while(true){
if((i__39463_39467 < count__39462_39466)){
var msg_39468 = cljs.core._nth.call(null,chunk__39461_39465,i__39463_39467);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39468);

var G__39469 = seq__39460_39464;
var G__39470 = chunk__39461_39465;
var G__39471 = count__39462_39466;
var G__39472 = (i__39463_39467 + (1));
seq__39460_39464 = G__39469;
chunk__39461_39465 = G__39470;
count__39462_39466 = G__39471;
i__39463_39467 = G__39472;
continue;
} else {
var temp__5278__auto___39473 = cljs.core.seq.call(null,seq__39460_39464);
if(temp__5278__auto___39473){
var seq__39460_39474__$1 = temp__5278__auto___39473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39460_39474__$1)){
var c__31003__auto___39475 = cljs.core.chunk_first.call(null,seq__39460_39474__$1);
var G__39476 = cljs.core.chunk_rest.call(null,seq__39460_39474__$1);
var G__39477 = c__31003__auto___39475;
var G__39478 = cljs.core.count.call(null,c__31003__auto___39475);
var G__39479 = (0);
seq__39460_39464 = G__39476;
chunk__39461_39465 = G__39477;
count__39462_39466 = G__39478;
i__39463_39467 = G__39479;
continue;
} else {
var msg_39480 = cljs.core.first.call(null,seq__39460_39474__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39480);

var G__39481 = cljs.core.next.call(null,seq__39460_39474__$1);
var G__39482 = null;
var G__39483 = (0);
var G__39484 = (0);
seq__39460_39464 = G__39481;
chunk__39461_39465 = G__39482;
count__39462_39466 = G__39483;
i__39463_39467 = G__39484;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39485){
var map__39486 = p__39485;
var map__39486__$1 = ((((!((map__39486 == null)))?((((map__39486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39486):map__39486);
var w = map__39486__$1;
var message = cljs.core.get.call(null,map__39486__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39488 = cljs.core.seq.call(null,plugins);
var chunk__39489 = null;
var count__39490 = (0);
var i__39491 = (0);
while(true){
if((i__39491 < count__39490)){
var vec__39492 = cljs.core._nth.call(null,chunk__39489,i__39491);
var k = cljs.core.nth.call(null,vec__39492,(0),null);
var plugin = cljs.core.nth.call(null,vec__39492,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39498 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39488,chunk__39489,count__39490,i__39491,pl_39498,vec__39492,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39498.call(null,msg_hist);
});})(seq__39488,chunk__39489,count__39490,i__39491,pl_39498,vec__39492,k,plugin))
);
} else {
}

var G__39499 = seq__39488;
var G__39500 = chunk__39489;
var G__39501 = count__39490;
var G__39502 = (i__39491 + (1));
seq__39488 = G__39499;
chunk__39489 = G__39500;
count__39490 = G__39501;
i__39491 = G__39502;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__39488);
if(temp__5278__auto__){
var seq__39488__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39488__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__39488__$1);
var G__39503 = cljs.core.chunk_rest.call(null,seq__39488__$1);
var G__39504 = c__31003__auto__;
var G__39505 = cljs.core.count.call(null,c__31003__auto__);
var G__39506 = (0);
seq__39488 = G__39503;
chunk__39489 = G__39504;
count__39490 = G__39505;
i__39491 = G__39506;
continue;
} else {
var vec__39495 = cljs.core.first.call(null,seq__39488__$1);
var k = cljs.core.nth.call(null,vec__39495,(0),null);
var plugin = cljs.core.nth.call(null,vec__39495,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39507 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39488,chunk__39489,count__39490,i__39491,pl_39507,vec__39495,k,plugin,seq__39488__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39507.call(null,msg_hist);
});})(seq__39488,chunk__39489,count__39490,i__39491,pl_39507,vec__39495,k,plugin,seq__39488__$1,temp__5278__auto__))
);
} else {
}

var G__39508 = cljs.core.next.call(null,seq__39488__$1);
var G__39509 = null;
var G__39510 = (0);
var G__39511 = (0);
seq__39488 = G__39508;
chunk__39489 = G__39509;
count__39490 = G__39510;
i__39491 = G__39511;
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
var G__39513 = arguments.length;
switch (G__39513) {
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

var seq__39514_39519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39515_39520 = null;
var count__39516_39521 = (0);
var i__39517_39522 = (0);
while(true){
if((i__39517_39522 < count__39516_39521)){
var msg_39523 = cljs.core._nth.call(null,chunk__39515_39520,i__39517_39522);
figwheel.client.socket.handle_incoming_message.call(null,msg_39523);

var G__39524 = seq__39514_39519;
var G__39525 = chunk__39515_39520;
var G__39526 = count__39516_39521;
var G__39527 = (i__39517_39522 + (1));
seq__39514_39519 = G__39524;
chunk__39515_39520 = G__39525;
count__39516_39521 = G__39526;
i__39517_39522 = G__39527;
continue;
} else {
var temp__5278__auto___39528 = cljs.core.seq.call(null,seq__39514_39519);
if(temp__5278__auto___39528){
var seq__39514_39529__$1 = temp__5278__auto___39528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39514_39529__$1)){
var c__31003__auto___39530 = cljs.core.chunk_first.call(null,seq__39514_39529__$1);
var G__39531 = cljs.core.chunk_rest.call(null,seq__39514_39529__$1);
var G__39532 = c__31003__auto___39530;
var G__39533 = cljs.core.count.call(null,c__31003__auto___39530);
var G__39534 = (0);
seq__39514_39519 = G__39531;
chunk__39515_39520 = G__39532;
count__39516_39521 = G__39533;
i__39517_39522 = G__39534;
continue;
} else {
var msg_39535 = cljs.core.first.call(null,seq__39514_39529__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39535);

var G__39536 = cljs.core.next.call(null,seq__39514_39529__$1);
var G__39537 = null;
var G__39538 = (0);
var G__39539 = (0);
seq__39514_39519 = G__39536;
chunk__39515_39520 = G__39537;
count__39516_39521 = G__39538;
i__39517_39522 = G__39539;
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
var len__31349__auto___39544 = arguments.length;
var i__31350__auto___39545 = (0);
while(true){
if((i__31350__auto___39545 < len__31349__auto___39544)){
args__31356__auto__.push((arguments[i__31350__auto___39545]));

var G__39546 = (i__31350__auto___39545 + (1));
i__31350__auto___39545 = G__39546;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39541){
var map__39542 = p__39541;
var map__39542__$1 = ((((!((map__39542 == null)))?((((map__39542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39542):map__39542);
var opts = map__39542__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39540){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39540));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39547){if((e39547 instanceof Error)){
var e = e39547;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39547;

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
return (function (p__39548){
var map__39549 = p__39548;
var map__39549__$1 = ((((!((map__39549 == null)))?((((map__39549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39549):map__39549);
var msg_name = cljs.core.get.call(null,map__39549__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510085336603
