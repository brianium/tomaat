goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59809__i = 0, G__59809__a = new Array(arguments.length -  0);
while (G__59809__i < G__59809__a.length) {G__59809__a[G__59809__i] = arguments[G__59809__i + 0]; ++G__59809__i;}
  args = new cljs.core.IndexedSeq(G__59809__a,0,null);
} 
return G__59808__delegate.call(this,args);};
G__59808.cljs$lang$maxFixedArity = 0;
G__59808.cljs$lang$applyTo = (function (arglist__59810){
var args = cljs.core.seq(arglist__59810);
return G__59808__delegate(args);
});
G__59808.cljs$core$IFn$_invoke$arity$variadic = G__59808__delegate;
return G__59808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59812__i = 0, G__59812__a = new Array(arguments.length -  0);
while (G__59812__i < G__59812__a.length) {G__59812__a[G__59812__i] = arguments[G__59812__i + 0]; ++G__59812__i;}
  args = new cljs.core.IndexedSeq(G__59812__a,0,null);
} 
return G__59811__delegate.call(this,args);};
G__59811.cljs$lang$maxFixedArity = 0;
G__59811.cljs$lang$applyTo = (function (arglist__59813){
var args = cljs.core.seq(arglist__59813);
return G__59811__delegate(args);
});
G__59811.cljs$core$IFn$_invoke$arity$variadic = G__59811__delegate;
return G__59811;
})()
;

return null;
});
