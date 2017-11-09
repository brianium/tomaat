goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58361__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58362__i = 0, G__58362__a = new Array(arguments.length -  0);
while (G__58362__i < G__58362__a.length) {G__58362__a[G__58362__i] = arguments[G__58362__i + 0]; ++G__58362__i;}
  args = new cljs.core.IndexedSeq(G__58362__a,0,null);
} 
return G__58361__delegate.call(this,args);};
G__58361.cljs$lang$maxFixedArity = 0;
G__58361.cljs$lang$applyTo = (function (arglist__58363){
var args = cljs.core.seq(arglist__58363);
return G__58361__delegate(args);
});
G__58361.cljs$core$IFn$_invoke$arity$variadic = G__58361__delegate;
return G__58361;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58364__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58365__i = 0, G__58365__a = new Array(arguments.length -  0);
while (G__58365__i < G__58365__a.length) {G__58365__a[G__58365__i] = arguments[G__58365__i + 0]; ++G__58365__i;}
  args = new cljs.core.IndexedSeq(G__58365__a,0,null);
} 
return G__58364__delegate.call(this,args);};
G__58364.cljs$lang$maxFixedArity = 0;
G__58364.cljs$lang$applyTo = (function (arglist__58366){
var args = cljs.core.seq(arglist__58366);
return G__58364__delegate(args);
});
G__58364.cljs$core$IFn$_invoke$arity$variadic = G__58364__delegate;
return G__58364;
})()
;

return null;
});
