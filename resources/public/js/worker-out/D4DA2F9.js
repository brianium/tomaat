goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44958__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44959__i = 0, G__44959__a = new Array(arguments.length -  0);
while (G__44959__i < G__44959__a.length) {G__44959__a[G__44959__i] = arguments[G__44959__i + 0]; ++G__44959__i;}
  args = new cljs.core.IndexedSeq(G__44959__a,0,null);
} 
return G__44958__delegate.call(this,args);};
G__44958.cljs$lang$maxFixedArity = 0;
G__44958.cljs$lang$applyTo = (function (arglist__44960){
var args = cljs.core.seq(arglist__44960);
return G__44958__delegate(args);
});
G__44958.cljs$core$IFn$_invoke$arity$variadic = G__44958__delegate;
return G__44958;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44961__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44962__i = 0, G__44962__a = new Array(arguments.length -  0);
while (G__44962__i < G__44962__a.length) {G__44962__a[G__44962__i] = arguments[G__44962__i + 0]; ++G__44962__i;}
  args = new cljs.core.IndexedSeq(G__44962__a,0,null);
} 
return G__44961__delegate.call(this,args);};
G__44961.cljs$lang$maxFixedArity = 0;
G__44961.cljs$lang$applyTo = (function (arglist__44963){
var args = cljs.core.seq(arglist__44963);
return G__44961__delegate(args);
});
G__44961.cljs$core$IFn$_invoke$arity$variadic = G__44961__delegate;
return G__44961;
})()
;

return null;
});
