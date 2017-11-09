goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58618__i = 0, G__58618__a = new Array(arguments.length -  0);
while (G__58618__i < G__58618__a.length) {G__58618__a[G__58618__i] = arguments[G__58618__i + 0]; ++G__58618__i;}
  args = new cljs.core.IndexedSeq(G__58618__a,0,null);
} 
return G__58617__delegate.call(this,args);};
G__58617.cljs$lang$maxFixedArity = 0;
G__58617.cljs$lang$applyTo = (function (arglist__58619){
var args = cljs.core.seq(arglist__58619);
return G__58617__delegate(args);
});
G__58617.cljs$core$IFn$_invoke$arity$variadic = G__58617__delegate;
return G__58617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58621__i = 0, G__58621__a = new Array(arguments.length -  0);
while (G__58621__i < G__58621__a.length) {G__58621__a[G__58621__i] = arguments[G__58621__i + 0]; ++G__58621__i;}
  args = new cljs.core.IndexedSeq(G__58621__a,0,null);
} 
return G__58620__delegate.call(this,args);};
G__58620.cljs$lang$maxFixedArity = 0;
G__58620.cljs$lang$applyTo = (function (arglist__58622){
var args = cljs.core.seq(arglist__58622);
return G__58620__delegate(args);
});
G__58620.cljs$core$IFn$_invoke$arity$variadic = G__58620__delegate;
return G__58620;
})()
;

return null;
});
