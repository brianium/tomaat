goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14079__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14080__i = 0, G__14080__a = new Array(arguments.length -  0);
while (G__14080__i < G__14080__a.length) {G__14080__a[G__14080__i] = arguments[G__14080__i + 0]; ++G__14080__i;}
  args = new cljs.core.IndexedSeq(G__14080__a,0,null);
} 
return G__14079__delegate.call(this,args);};
G__14079.cljs$lang$maxFixedArity = 0;
G__14079.cljs$lang$applyTo = (function (arglist__14081){
var args = cljs.core.seq(arglist__14081);
return G__14079__delegate(args);
});
G__14079.cljs$core$IFn$_invoke$arity$variadic = G__14079__delegate;
return G__14079;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14082__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14083__i = 0, G__14083__a = new Array(arguments.length -  0);
while (G__14083__i < G__14083__a.length) {G__14083__a[G__14083__i] = arguments[G__14083__i + 0]; ++G__14083__i;}
  args = new cljs.core.IndexedSeq(G__14083__a,0,null);
} 
return G__14082__delegate.call(this,args);};
G__14082.cljs$lang$maxFixedArity = 0;
G__14082.cljs$lang$applyTo = (function (arglist__14084){
var args = cljs.core.seq(arglist__14084);
return G__14082__delegate(args);
});
G__14082.cljs$core$IFn$_invoke$arity$variadic = G__14082__delegate;
return G__14082;
})()
;

return null;
});
