goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53357__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53358__i = 0, G__53358__a = new Array(arguments.length -  0);
while (G__53358__i < G__53358__a.length) {G__53358__a[G__53358__i] = arguments[G__53358__i + 0]; ++G__53358__i;}
  args = new cljs.core.IndexedSeq(G__53358__a,0,null);
} 
return G__53357__delegate.call(this,args);};
G__53357.cljs$lang$maxFixedArity = 0;
G__53357.cljs$lang$applyTo = (function (arglist__53359){
var args = cljs.core.seq(arglist__53359);
return G__53357__delegate(args);
});
G__53357.cljs$core$IFn$_invoke$arity$variadic = G__53357__delegate;
return G__53357;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53360__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53361__i = 0, G__53361__a = new Array(arguments.length -  0);
while (G__53361__i < G__53361__a.length) {G__53361__a[G__53361__i] = arguments[G__53361__i + 0]; ++G__53361__i;}
  args = new cljs.core.IndexedSeq(G__53361__a,0,null);
} 
return G__53360__delegate.call(this,args);};
G__53360.cljs$lang$maxFixedArity = 0;
G__53360.cljs$lang$applyTo = (function (arglist__53362){
var args = cljs.core.seq(arglist__53362);
return G__53360__delegate(args);
});
G__53360.cljs$core$IFn$_invoke$arity$variadic = G__53360__delegate;
return G__53360;
})()
;

return null;
});
