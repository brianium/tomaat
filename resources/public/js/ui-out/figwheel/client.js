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
}catch (e51170){if((e51170 instanceof Error)){
var e = e51170;
return "Error: Unable to stringify";
} else {
throw e51170;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51173 = arguments.length;
switch (G__51173) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51171_SHARP_){
if(typeof p1__51171_SHARP_ === 'string'){
return p1__51171_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51171_SHARP_);
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
var len__31349__auto___51176 = arguments.length;
var i__31350__auto___51177 = (0);
while(true){
if((i__31350__auto___51177 < len__31349__auto___51176)){
args__31356__auto__.push((arguments[i__31350__auto___51177]));

var G__51178 = (i__31350__auto___51177 + (1));
i__31350__auto___51177 = G__51178;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51175){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51175));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51180 = arguments.length;
var i__31350__auto___51181 = (0);
while(true){
if((i__31350__auto___51181 < len__31349__auto___51180)){
args__31356__auto__.push((arguments[i__31350__auto___51181]));

var G__51182 = (i__31350__auto___51181 + (1));
i__31350__auto___51181 = G__51182;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51179){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51179));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51183){
var map__51184 = p__51183;
var map__51184__$1 = ((((!((map__51184 == null)))?((((map__51184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51184):map__51184);
var message = cljs.core.get.call(null,map__51184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51184__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33665__auto___51263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___51263,ch){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___51263,ch){
return (function (state_51235){
var state_val_51236 = (state_51235[(1)]);
if((state_val_51236 === (7))){
var inst_51231 = (state_51235[(2)]);
var state_51235__$1 = state_51235;
var statearr_51237_51264 = state_51235__$1;
(statearr_51237_51264[(2)] = inst_51231);

(statearr_51237_51264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (1))){
var state_51235__$1 = state_51235;
var statearr_51238_51265 = state_51235__$1;
(statearr_51238_51265[(2)] = null);

(statearr_51238_51265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (4))){
var inst_51188 = (state_51235[(7)]);
var inst_51188__$1 = (state_51235[(2)]);
var state_51235__$1 = (function (){var statearr_51239 = state_51235;
(statearr_51239[(7)] = inst_51188__$1);

return statearr_51239;
})();
if(cljs.core.truth_(inst_51188__$1)){
var statearr_51240_51266 = state_51235__$1;
(statearr_51240_51266[(1)] = (5));

} else {
var statearr_51241_51267 = state_51235__$1;
(statearr_51241_51267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (15))){
var inst_51195 = (state_51235[(8)]);
var inst_51210 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51195);
var inst_51211 = cljs.core.first.call(null,inst_51210);
var inst_51212 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51211);
var inst_51213 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51212)].join('');
var inst_51214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51213);
var state_51235__$1 = state_51235;
var statearr_51242_51268 = state_51235__$1;
(statearr_51242_51268[(2)] = inst_51214);

(statearr_51242_51268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (13))){
var inst_51219 = (state_51235[(2)]);
var state_51235__$1 = state_51235;
var statearr_51243_51269 = state_51235__$1;
(statearr_51243_51269[(2)] = inst_51219);

(statearr_51243_51269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (6))){
var state_51235__$1 = state_51235;
var statearr_51244_51270 = state_51235__$1;
(statearr_51244_51270[(2)] = null);

(statearr_51244_51270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (17))){
var inst_51217 = (state_51235[(2)]);
var state_51235__$1 = state_51235;
var statearr_51245_51271 = state_51235__$1;
(statearr_51245_51271[(2)] = inst_51217);

(statearr_51245_51271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (3))){
var inst_51233 = (state_51235[(2)]);
var state_51235__$1 = state_51235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51235__$1,inst_51233);
} else {
if((state_val_51236 === (12))){
var inst_51194 = (state_51235[(9)]);
var inst_51208 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51194,opts);
var state_51235__$1 = state_51235;
if(cljs.core.truth_(inst_51208)){
var statearr_51246_51272 = state_51235__$1;
(statearr_51246_51272[(1)] = (15));

} else {
var statearr_51247_51273 = state_51235__$1;
(statearr_51247_51273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (2))){
var state_51235__$1 = state_51235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51235__$1,(4),ch);
} else {
if((state_val_51236 === (11))){
var inst_51195 = (state_51235[(8)]);
var inst_51200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51201 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51195);
var inst_51202 = cljs.core.async.timeout.call(null,(1000));
var inst_51203 = [inst_51201,inst_51202];
var inst_51204 = (new cljs.core.PersistentVector(null,2,(5),inst_51200,inst_51203,null));
var state_51235__$1 = state_51235;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51235__$1,(14),inst_51204);
} else {
if((state_val_51236 === (9))){
var inst_51195 = (state_51235[(8)]);
var inst_51221 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51222 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51195);
var inst_51223 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51222);
var inst_51224 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51223)].join('');
var inst_51225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51224);
var state_51235__$1 = (function (){var statearr_51248 = state_51235;
(statearr_51248[(10)] = inst_51221);

return statearr_51248;
})();
var statearr_51249_51274 = state_51235__$1;
(statearr_51249_51274[(2)] = inst_51225);

(statearr_51249_51274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (5))){
var inst_51188 = (state_51235[(7)]);
var inst_51190 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51191 = (new cljs.core.PersistentArrayMap(null,2,inst_51190,null));
var inst_51192 = (new cljs.core.PersistentHashSet(null,inst_51191,null));
var inst_51193 = figwheel.client.focus_msgs.call(null,inst_51192,inst_51188);
var inst_51194 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51193);
var inst_51195 = cljs.core.first.call(null,inst_51193);
var inst_51196 = figwheel.client.autoload_QMARK_.call(null);
var state_51235__$1 = (function (){var statearr_51250 = state_51235;
(statearr_51250[(9)] = inst_51194);

(statearr_51250[(8)] = inst_51195);

return statearr_51250;
})();
if(cljs.core.truth_(inst_51196)){
var statearr_51251_51275 = state_51235__$1;
(statearr_51251_51275[(1)] = (8));

} else {
var statearr_51252_51276 = state_51235__$1;
(statearr_51252_51276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (14))){
var inst_51206 = (state_51235[(2)]);
var state_51235__$1 = state_51235;
var statearr_51253_51277 = state_51235__$1;
(statearr_51253_51277[(2)] = inst_51206);

(statearr_51253_51277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (16))){
var state_51235__$1 = state_51235;
var statearr_51254_51278 = state_51235__$1;
(statearr_51254_51278[(2)] = null);

(statearr_51254_51278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (10))){
var inst_51227 = (state_51235[(2)]);
var state_51235__$1 = (function (){var statearr_51255 = state_51235;
(statearr_51255[(11)] = inst_51227);

return statearr_51255;
})();
var statearr_51256_51279 = state_51235__$1;
(statearr_51256_51279[(2)] = null);

(statearr_51256_51279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51236 === (8))){
var inst_51194 = (state_51235[(9)]);
var inst_51198 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51194,opts);
var state_51235__$1 = state_51235;
if(cljs.core.truth_(inst_51198)){
var statearr_51257_51280 = state_51235__$1;
(statearr_51257_51280[(1)] = (11));

} else {
var statearr_51258_51281 = state_51235__$1;
(statearr_51258_51281[(1)] = (12));

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
});})(c__33665__auto___51263,ch))
;
return ((function (switch__33280__auto__,c__33665__auto___51263,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_51259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51259[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__);

(statearr_51259[(1)] = (1));

return statearr_51259;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1 = (function (state_51235){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_51235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e51260){if((e51260 instanceof Object)){
var ex__33284__auto__ = e51260;
var statearr_51261_51282 = state_51235;
(statearr_51261_51282[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51283 = state_51235;
state_51235 = G__51283;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__ = function(state_51235){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1.call(this,state_51235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33281__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___51263,ch))
})();
var state__33667__auto__ = (function (){var statearr_51262 = f__33666__auto__.call(null);
(statearr_51262[(6)] = c__33665__auto___51263);

return statearr_51262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___51263,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51284_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51284_SHARP_));
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
var base_path_51286 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51286){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51285){if((e51285 instanceof Error)){
var e = e51285;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51286], null));
} else {
var e = e51285;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51286))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51287){
var map__51288 = p__51287;
var map__51288__$1 = ((((!((map__51288 == null)))?((((map__51288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51288):map__51288);
var opts = map__51288__$1;
var build_id = cljs.core.get.call(null,map__51288__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51288,map__51288__$1,opts,build_id){
return (function (p__51290){
var vec__51291 = p__51290;
var seq__51292 = cljs.core.seq.call(null,vec__51291);
var first__51293 = cljs.core.first.call(null,seq__51292);
var seq__51292__$1 = cljs.core.next.call(null,seq__51292);
var map__51294 = first__51293;
var map__51294__$1 = ((((!((map__51294 == null)))?((((map__51294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51294):map__51294);
var msg = map__51294__$1;
var msg_name = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51292__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51291,seq__51292,first__51293,seq__51292__$1,map__51294,map__51294__$1,msg,msg_name,_,map__51288,map__51288__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51291,seq__51292,first__51293,seq__51292__$1,map__51294,map__51294__$1,msg,msg_name,_,map__51288,map__51288__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51288,map__51288__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51296){
var vec__51297 = p__51296;
var seq__51298 = cljs.core.seq.call(null,vec__51297);
var first__51299 = cljs.core.first.call(null,seq__51298);
var seq__51298__$1 = cljs.core.next.call(null,seq__51298);
var map__51300 = first__51299;
var map__51300__$1 = ((((!((map__51300 == null)))?((((map__51300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51300):map__51300);
var msg = map__51300__$1;
var msg_name = cljs.core.get.call(null,map__51300__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51298__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51302){
var map__51303 = p__51302;
var map__51303__$1 = ((((!((map__51303 == null)))?((((map__51303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51303):map__51303);
var on_compile_warning = cljs.core.get.call(null,map__51303__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51303__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51303,map__51303__$1,on_compile_warning,on_compile_fail){
return (function (p__51305){
var vec__51306 = p__51305;
var seq__51307 = cljs.core.seq.call(null,vec__51306);
var first__51308 = cljs.core.first.call(null,seq__51307);
var seq__51307__$1 = cljs.core.next.call(null,seq__51307);
var map__51309 = first__51308;
var map__51309__$1 = ((((!((map__51309 == null)))?((((map__51309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51309):map__51309);
var msg = map__51309__$1;
var msg_name = cljs.core.get.call(null,map__51309__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51307__$1;
var pred__51311 = cljs.core._EQ_;
var expr__51312 = msg_name;
if(cljs.core.truth_(pred__51311.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51312))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51311.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51312))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51303,map__51303__$1,on_compile_warning,on_compile_fail))
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
return (function (state_51401){
var state_val_51402 = (state_51401[(1)]);
if((state_val_51402 === (7))){
var inst_51321 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51321)){
var statearr_51403_51450 = state_51401__$1;
(statearr_51403_51450[(1)] = (8));

} else {
var statearr_51404_51451 = state_51401__$1;
(statearr_51404_51451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (20))){
var inst_51395 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51405_51452 = state_51401__$1;
(statearr_51405_51452[(2)] = inst_51395);

(statearr_51405_51452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (27))){
var inst_51391 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51406_51453 = state_51401__$1;
(statearr_51406_51453[(2)] = inst_51391);

(statearr_51406_51453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (1))){
var inst_51314 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51314)){
var statearr_51407_51454 = state_51401__$1;
(statearr_51407_51454[(1)] = (2));

} else {
var statearr_51408_51455 = state_51401__$1;
(statearr_51408_51455[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (24))){
var inst_51393 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51409_51456 = state_51401__$1;
(statearr_51409_51456[(2)] = inst_51393);

(statearr_51409_51456[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (4))){
var inst_51399 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51401__$1,inst_51399);
} else {
if((state_val_51402 === (15))){
var inst_51397 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51410_51457 = state_51401__$1;
(statearr_51410_51457[(2)] = inst_51397);

(statearr_51410_51457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (21))){
var inst_51350 = (state_51401[(2)]);
var inst_51351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51352 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51351);
var state_51401__$1 = (function (){var statearr_51411 = state_51401;
(statearr_51411[(7)] = inst_51350);

return statearr_51411;
})();
var statearr_51412_51458 = state_51401__$1;
(statearr_51412_51458[(2)] = inst_51352);

(statearr_51412_51458[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (31))){
var inst_51380 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51380)){
var statearr_51413_51459 = state_51401__$1;
(statearr_51413_51459[(1)] = (34));

} else {
var statearr_51414_51460 = state_51401__$1;
(statearr_51414_51460[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (32))){
var inst_51389 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51415_51461 = state_51401__$1;
(statearr_51415_51461[(2)] = inst_51389);

(statearr_51415_51461[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (33))){
var inst_51376 = (state_51401[(2)]);
var inst_51377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51378 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51377);
var state_51401__$1 = (function (){var statearr_51416 = state_51401;
(statearr_51416[(8)] = inst_51376);

return statearr_51416;
})();
var statearr_51417_51462 = state_51401__$1;
(statearr_51417_51462[(2)] = inst_51378);

(statearr_51417_51462[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (13))){
var inst_51335 = figwheel.client.heads_up.clear.call(null);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(16),inst_51335);
} else {
if((state_val_51402 === (22))){
var inst_51356 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51357 = figwheel.client.heads_up.append_warning_message.call(null,inst_51356);
var state_51401__$1 = state_51401;
var statearr_51418_51463 = state_51401__$1;
(statearr_51418_51463[(2)] = inst_51357);

(statearr_51418_51463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (36))){
var inst_51387 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51419_51464 = state_51401__$1;
(statearr_51419_51464[(2)] = inst_51387);

(statearr_51419_51464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (29))){
var inst_51367 = (state_51401[(2)]);
var inst_51368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51369 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51368);
var state_51401__$1 = (function (){var statearr_51420 = state_51401;
(statearr_51420[(9)] = inst_51367);

return statearr_51420;
})();
var statearr_51421_51465 = state_51401__$1;
(statearr_51421_51465[(2)] = inst_51369);

(statearr_51421_51465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (6))){
var inst_51316 = (state_51401[(10)]);
var state_51401__$1 = state_51401;
var statearr_51422_51466 = state_51401__$1;
(statearr_51422_51466[(2)] = inst_51316);

(statearr_51422_51466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (28))){
var inst_51363 = (state_51401[(2)]);
var inst_51364 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51365 = figwheel.client.heads_up.display_warning.call(null,inst_51364);
var state_51401__$1 = (function (){var statearr_51423 = state_51401;
(statearr_51423[(11)] = inst_51363);

return statearr_51423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(29),inst_51365);
} else {
if((state_val_51402 === (25))){
var inst_51361 = figwheel.client.heads_up.clear.call(null);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(28),inst_51361);
} else {
if((state_val_51402 === (34))){
var inst_51382 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(37),inst_51382);
} else {
if((state_val_51402 === (17))){
var inst_51341 = (state_51401[(2)]);
var inst_51342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51343 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51342);
var state_51401__$1 = (function (){var statearr_51424 = state_51401;
(statearr_51424[(12)] = inst_51341);

return statearr_51424;
})();
var statearr_51425_51467 = state_51401__$1;
(statearr_51425_51467[(2)] = inst_51343);

(statearr_51425_51467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (3))){
var inst_51333 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51333)){
var statearr_51426_51468 = state_51401__$1;
(statearr_51426_51468[(1)] = (13));

} else {
var statearr_51427_51469 = state_51401__$1;
(statearr_51427_51469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (12))){
var inst_51329 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51428_51470 = state_51401__$1;
(statearr_51428_51470[(2)] = inst_51329);

(statearr_51428_51470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (2))){
var inst_51316 = (state_51401[(10)]);
var inst_51316__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51401__$1 = (function (){var statearr_51429 = state_51401;
(statearr_51429[(10)] = inst_51316__$1);

return statearr_51429;
})();
if(cljs.core.truth_(inst_51316__$1)){
var statearr_51430_51471 = state_51401__$1;
(statearr_51430_51471[(1)] = (5));

} else {
var statearr_51431_51472 = state_51401__$1;
(statearr_51431_51472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (23))){
var inst_51359 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51359)){
var statearr_51432_51473 = state_51401__$1;
(statearr_51432_51473[(1)] = (25));

} else {
var statearr_51433_51474 = state_51401__$1;
(statearr_51433_51474[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (35))){
var state_51401__$1 = state_51401;
var statearr_51434_51475 = state_51401__$1;
(statearr_51434_51475[(2)] = null);

(statearr_51434_51475[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (19))){
var inst_51354 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51354)){
var statearr_51435_51476 = state_51401__$1;
(statearr_51435_51476[(1)] = (22));

} else {
var statearr_51436_51477 = state_51401__$1;
(statearr_51436_51477[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (11))){
var inst_51325 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51437_51478 = state_51401__$1;
(statearr_51437_51478[(2)] = inst_51325);

(statearr_51437_51478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (9))){
var inst_51327 = figwheel.client.heads_up.clear.call(null);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(12),inst_51327);
} else {
if((state_val_51402 === (5))){
var inst_51318 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51401__$1 = state_51401;
var statearr_51438_51479 = state_51401__$1;
(statearr_51438_51479[(2)] = inst_51318);

(statearr_51438_51479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (14))){
var inst_51345 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51345)){
var statearr_51439_51480 = state_51401__$1;
(statearr_51439_51480[(1)] = (18));

} else {
var statearr_51440_51481 = state_51401__$1;
(statearr_51440_51481[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (26))){
var inst_51371 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51401__$1 = state_51401;
if(cljs.core.truth_(inst_51371)){
var statearr_51441_51482 = state_51401__$1;
(statearr_51441_51482[(1)] = (30));

} else {
var statearr_51442_51483 = state_51401__$1;
(statearr_51442_51483[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (16))){
var inst_51337 = (state_51401[(2)]);
var inst_51338 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51339 = figwheel.client.heads_up.display_exception.call(null,inst_51338);
var state_51401__$1 = (function (){var statearr_51443 = state_51401;
(statearr_51443[(13)] = inst_51337);

return statearr_51443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(17),inst_51339);
} else {
if((state_val_51402 === (30))){
var inst_51373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51374 = figwheel.client.heads_up.display_warning.call(null,inst_51373);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(33),inst_51374);
} else {
if((state_val_51402 === (10))){
var inst_51331 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51444_51484 = state_51401__$1;
(statearr_51444_51484[(2)] = inst_51331);

(statearr_51444_51484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (18))){
var inst_51347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51348 = figwheel.client.heads_up.display_exception.call(null,inst_51347);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(21),inst_51348);
} else {
if((state_val_51402 === (37))){
var inst_51384 = (state_51401[(2)]);
var state_51401__$1 = state_51401;
var statearr_51445_51485 = state_51401__$1;
(statearr_51445_51485[(2)] = inst_51384);

(statearr_51445_51485[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51402 === (8))){
var inst_51323 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51401__$1 = state_51401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51401__$1,(11),inst_51323);
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
var statearr_51446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51446[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__);

(statearr_51446[(1)] = (1));

return statearr_51446;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1 = (function (state_51401){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_51401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e51447){if((e51447 instanceof Object)){
var ex__33284__auto__ = e51447;
var statearr_51448_51486 = state_51401;
(statearr_51448_51486[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51487 = state_51401;
state_51401 = G__51487;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__ = function(state_51401){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1.call(this,state_51401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,msg_hist,msg_names,msg))
})();
var state__33667__auto__ = (function (){var statearr_51449 = f__33666__auto__.call(null);
(statearr_51449[(6)] = c__33665__auto__);

return statearr_51449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,msg_hist,msg_names,msg))
);

return c__33665__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33665__auto___51516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___51516,ch){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___51516,ch){
return (function (state_51502){
var state_val_51503 = (state_51502[(1)]);
if((state_val_51503 === (1))){
var state_51502__$1 = state_51502;
var statearr_51504_51517 = state_51502__$1;
(statearr_51504_51517[(2)] = null);

(statearr_51504_51517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51503 === (2))){
var state_51502__$1 = state_51502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51502__$1,(4),ch);
} else {
if((state_val_51503 === (3))){
var inst_51500 = (state_51502[(2)]);
var state_51502__$1 = state_51502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51502__$1,inst_51500);
} else {
if((state_val_51503 === (4))){
var inst_51490 = (state_51502[(7)]);
var inst_51490__$1 = (state_51502[(2)]);
var state_51502__$1 = (function (){var statearr_51505 = state_51502;
(statearr_51505[(7)] = inst_51490__$1);

return statearr_51505;
})();
if(cljs.core.truth_(inst_51490__$1)){
var statearr_51506_51518 = state_51502__$1;
(statearr_51506_51518[(1)] = (5));

} else {
var statearr_51507_51519 = state_51502__$1;
(statearr_51507_51519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51503 === (5))){
var inst_51490 = (state_51502[(7)]);
var inst_51492 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51490);
var state_51502__$1 = state_51502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51502__$1,(8),inst_51492);
} else {
if((state_val_51503 === (6))){
var state_51502__$1 = state_51502;
var statearr_51508_51520 = state_51502__$1;
(statearr_51508_51520[(2)] = null);

(statearr_51508_51520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51503 === (7))){
var inst_51498 = (state_51502[(2)]);
var state_51502__$1 = state_51502;
var statearr_51509_51521 = state_51502__$1;
(statearr_51509_51521[(2)] = inst_51498);

(statearr_51509_51521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51503 === (8))){
var inst_51494 = (state_51502[(2)]);
var state_51502__$1 = (function (){var statearr_51510 = state_51502;
(statearr_51510[(8)] = inst_51494);

return statearr_51510;
})();
var statearr_51511_51522 = state_51502__$1;
(statearr_51511_51522[(2)] = null);

(statearr_51511_51522[(1)] = (2));


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
});})(c__33665__auto___51516,ch))
;
return ((function (switch__33280__auto__,c__33665__auto___51516,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0 = (function (){
var statearr_51512 = [null,null,null,null,null,null,null,null,null];
(statearr_51512[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33281__auto__);

(statearr_51512[(1)] = (1));

return statearr_51512;
});
var figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1 = (function (state_51502){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_51502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e51513){if((e51513 instanceof Object)){
var ex__33284__auto__ = e51513;
var statearr_51514_51523 = state_51502;
(statearr_51514_51523[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51524 = state_51502;
state_51502 = G__51524;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__ = function(state_51502){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1.call(this,state_51502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33281__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33281__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___51516,ch))
})();
var state__33667__auto__ = (function (){var statearr_51515 = f__33666__auto__.call(null);
(statearr_51515[(6)] = c__33665__auto___51516);

return statearr_51515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___51516,ch))
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
return (function (state_51530){
var state_val_51531 = (state_51530[(1)]);
if((state_val_51531 === (1))){
var inst_51525 = cljs.core.async.timeout.call(null,(3000));
var state_51530__$1 = state_51530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51530__$1,(2),inst_51525);
} else {
if((state_val_51531 === (2))){
var inst_51527 = (state_51530[(2)]);
var inst_51528 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51530__$1 = (function (){var statearr_51532 = state_51530;
(statearr_51532[(7)] = inst_51527);

return statearr_51532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51530__$1,inst_51528);
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
var statearr_51533 = [null,null,null,null,null,null,null,null];
(statearr_51533[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__);

(statearr_51533[(1)] = (1));

return statearr_51533;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1 = (function (state_51530){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_51530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e51534){if((e51534 instanceof Object)){
var ex__33284__auto__ = e51534;
var statearr_51535_51537 = state_51530;
(statearr_51535_51537[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51538 = state_51530;
state_51530 = G__51538;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__ = function(state_51530){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1.call(this,state_51530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33281__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_51536 = f__33666__auto__.call(null);
(statearr_51536[(6)] = c__33665__auto__);

return statearr_51536;
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
return (function (state_51545){
var state_val_51546 = (state_51545[(1)]);
if((state_val_51546 === (1))){
var inst_51539 = cljs.core.async.timeout.call(null,(2000));
var state_51545__$1 = state_51545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51545__$1,(2),inst_51539);
} else {
if((state_val_51546 === (2))){
var inst_51541 = (state_51545[(2)]);
var inst_51542 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51543 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51542);
var state_51545__$1 = (function (){var statearr_51547 = state_51545;
(statearr_51547[(7)] = inst_51541);

return statearr_51547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51545__$1,inst_51543);
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
var statearr_51548 = [null,null,null,null,null,null,null,null];
(statearr_51548[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__);

(statearr_51548[(1)] = (1));

return statearr_51548;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1 = (function (state_51545){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_51545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e51549){if((e51549 instanceof Object)){
var ex__33284__auto__ = e51549;
var statearr_51550_51552 = state_51545;
(statearr_51550_51552[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51553 = state_51545;
state_51545 = G__51553;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__ = function(state_51545){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1.call(this,state_51545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33667__auto__ = (function (){var statearr_51551 = f__33666__auto__.call(null);
(statearr_51551[(6)] = c__33665__auto__);

return statearr_51551;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51554){
var map__51555 = p__51554;
var map__51555__$1 = ((((!((map__51555 == null)))?((((map__51555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51555):map__51555);
var file = cljs.core.get.call(null,map__51555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51555__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51555__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51557 = "";
var G__51557__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51557),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51557);
var G__51557__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51557__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51557__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = line;
if(cljs.core.truth_(and__30060__auto__)){
return column;
} else {
return and__30060__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51557__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51557__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51558){
var map__51559 = p__51558;
var map__51559__$1 = ((((!((map__51559 == null)))?((((map__51559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51559):map__51559);
var ed = map__51559__$1;
var formatted_exception = cljs.core.get.call(null,map__51559__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51559__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51559__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51561_51565 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51562_51566 = null;
var count__51563_51567 = (0);
var i__51564_51568 = (0);
while(true){
if((i__51564_51568 < count__51563_51567)){
var msg_51569 = cljs.core._nth.call(null,chunk__51562_51566,i__51564_51568);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51569);

var G__51570 = seq__51561_51565;
var G__51571 = chunk__51562_51566;
var G__51572 = count__51563_51567;
var G__51573 = (i__51564_51568 + (1));
seq__51561_51565 = G__51570;
chunk__51562_51566 = G__51571;
count__51563_51567 = G__51572;
i__51564_51568 = G__51573;
continue;
} else {
var temp__5278__auto___51574 = cljs.core.seq.call(null,seq__51561_51565);
if(temp__5278__auto___51574){
var seq__51561_51575__$1 = temp__5278__auto___51574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51561_51575__$1)){
var c__31003__auto___51576 = cljs.core.chunk_first.call(null,seq__51561_51575__$1);
var G__51577 = cljs.core.chunk_rest.call(null,seq__51561_51575__$1);
var G__51578 = c__31003__auto___51576;
var G__51579 = cljs.core.count.call(null,c__31003__auto___51576);
var G__51580 = (0);
seq__51561_51565 = G__51577;
chunk__51562_51566 = G__51578;
count__51563_51567 = G__51579;
i__51564_51568 = G__51580;
continue;
} else {
var msg_51581 = cljs.core.first.call(null,seq__51561_51575__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51581);

var G__51582 = cljs.core.next.call(null,seq__51561_51575__$1);
var G__51583 = null;
var G__51584 = (0);
var G__51585 = (0);
seq__51561_51565 = G__51582;
chunk__51562_51566 = G__51583;
count__51563_51567 = G__51584;
i__51564_51568 = G__51585;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51586){
var map__51587 = p__51586;
var map__51587__$1 = ((((!((map__51587 == null)))?((((map__51587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51587):map__51587);
var w = map__51587__$1;
var message = cljs.core.get.call(null,map__51587__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__51589 = cljs.core.seq.call(null,plugins);
var chunk__51590 = null;
var count__51591 = (0);
var i__51592 = (0);
while(true){
if((i__51592 < count__51591)){
var vec__51593 = cljs.core._nth.call(null,chunk__51590,i__51592);
var k = cljs.core.nth.call(null,vec__51593,(0),null);
var plugin = cljs.core.nth.call(null,vec__51593,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51599 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51589,chunk__51590,count__51591,i__51592,pl_51599,vec__51593,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51599.call(null,msg_hist);
});})(seq__51589,chunk__51590,count__51591,i__51592,pl_51599,vec__51593,k,plugin))
);
} else {
}

var G__51600 = seq__51589;
var G__51601 = chunk__51590;
var G__51602 = count__51591;
var G__51603 = (i__51592 + (1));
seq__51589 = G__51600;
chunk__51590 = G__51601;
count__51591 = G__51602;
i__51592 = G__51603;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__51589);
if(temp__5278__auto__){
var seq__51589__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51589__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__51589__$1);
var G__51604 = cljs.core.chunk_rest.call(null,seq__51589__$1);
var G__51605 = c__31003__auto__;
var G__51606 = cljs.core.count.call(null,c__31003__auto__);
var G__51607 = (0);
seq__51589 = G__51604;
chunk__51590 = G__51605;
count__51591 = G__51606;
i__51592 = G__51607;
continue;
} else {
var vec__51596 = cljs.core.first.call(null,seq__51589__$1);
var k = cljs.core.nth.call(null,vec__51596,(0),null);
var plugin = cljs.core.nth.call(null,vec__51596,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51608 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51589,chunk__51590,count__51591,i__51592,pl_51608,vec__51596,k,plugin,seq__51589__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51608.call(null,msg_hist);
});})(seq__51589,chunk__51590,count__51591,i__51592,pl_51608,vec__51596,k,plugin,seq__51589__$1,temp__5278__auto__))
);
} else {
}

var G__51609 = cljs.core.next.call(null,seq__51589__$1);
var G__51610 = null;
var G__51611 = (0);
var G__51612 = (0);
seq__51589 = G__51609;
chunk__51590 = G__51610;
count__51591 = G__51611;
i__51592 = G__51612;
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
var G__51614 = arguments.length;
switch (G__51614) {
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

var seq__51615_51620 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51616_51621 = null;
var count__51617_51622 = (0);
var i__51618_51623 = (0);
while(true){
if((i__51618_51623 < count__51617_51622)){
var msg_51624 = cljs.core._nth.call(null,chunk__51616_51621,i__51618_51623);
figwheel.client.socket.handle_incoming_message.call(null,msg_51624);

var G__51625 = seq__51615_51620;
var G__51626 = chunk__51616_51621;
var G__51627 = count__51617_51622;
var G__51628 = (i__51618_51623 + (1));
seq__51615_51620 = G__51625;
chunk__51616_51621 = G__51626;
count__51617_51622 = G__51627;
i__51618_51623 = G__51628;
continue;
} else {
var temp__5278__auto___51629 = cljs.core.seq.call(null,seq__51615_51620);
if(temp__5278__auto___51629){
var seq__51615_51630__$1 = temp__5278__auto___51629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51615_51630__$1)){
var c__31003__auto___51631 = cljs.core.chunk_first.call(null,seq__51615_51630__$1);
var G__51632 = cljs.core.chunk_rest.call(null,seq__51615_51630__$1);
var G__51633 = c__31003__auto___51631;
var G__51634 = cljs.core.count.call(null,c__31003__auto___51631);
var G__51635 = (0);
seq__51615_51620 = G__51632;
chunk__51616_51621 = G__51633;
count__51617_51622 = G__51634;
i__51618_51623 = G__51635;
continue;
} else {
var msg_51636 = cljs.core.first.call(null,seq__51615_51630__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51636);

var G__51637 = cljs.core.next.call(null,seq__51615_51630__$1);
var G__51638 = null;
var G__51639 = (0);
var G__51640 = (0);
seq__51615_51620 = G__51637;
chunk__51616_51621 = G__51638;
count__51617_51622 = G__51639;
i__51618_51623 = G__51640;
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
var len__31349__auto___51645 = arguments.length;
var i__31350__auto___51646 = (0);
while(true){
if((i__31350__auto___51646 < len__31349__auto___51645)){
args__31356__auto__.push((arguments[i__31350__auto___51646]));

var G__51647 = (i__31350__auto___51646 + (1));
i__31350__auto___51646 = G__51647;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51642){
var map__51643 = p__51642;
var map__51643__$1 = ((((!((map__51643 == null)))?((((map__51643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51643):map__51643);
var opts = map__51643__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51641){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51641));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51648){if((e51648 instanceof Error)){
var e = e51648;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51648;

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
return (function (p__51649){
var map__51650 = p__51649;
var map__51650__$1 = ((((!((map__51650 == null)))?((((map__51650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51650):map__51650);
var msg_name = cljs.core.get.call(null,map__51650__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510229233422
