goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59875__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59876__i = 0, G__59876__a = new Array(arguments.length -  0);
while (G__59876__i < G__59876__a.length) {G__59876__a[G__59876__i] = arguments[G__59876__i + 0]; ++G__59876__i;}
  args = new cljs.core.IndexedSeq(G__59876__a,0,null);
} 
return G__59875__delegate.call(this,args);};
G__59875.cljs$lang$maxFixedArity = 0;
G__59875.cljs$lang$applyTo = (function (arglist__59877){
var args = cljs.core.seq(arglist__59877);
return G__59875__delegate(args);
});
G__59875.cljs$core$IFn$_invoke$arity$variadic = G__59875__delegate;
return G__59875;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59878__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59879__i = 0, G__59879__a = new Array(arguments.length -  0);
while (G__59879__i < G__59879__a.length) {G__59879__a[G__59879__i] = arguments[G__59879__i + 0]; ++G__59879__i;}
  args = new cljs.core.IndexedSeq(G__59879__a,0,null);
} 
return G__59878__delegate.call(this,args);};
G__59878.cljs$lang$maxFixedArity = 0;
G__59878.cljs$lang$applyTo = (function (arglist__59880){
var args = cljs.core.seq(arglist__59880);
return G__59878__delegate(args);
});
G__59878.cljs$core$IFn$_invoke$arity$variadic = G__59878__delegate;
return G__59878;
})()
;

return null;
});
