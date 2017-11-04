// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__32844__auto__,writer__32845__auto__,opt__32846__auto__){
return cljs.core._write.call(null,writer__32845__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36749 = arguments.length;
var i__33451__auto___36750 = (0);
while(true){
if((i__33451__auto___36750 < len__33450__auto___36749)){
args__33457__auto__.push((arguments[i__33451__auto___36750]));

var G__36751 = (i__33451__auto___36750 + (1));
i__33451__auto___36750 = G__36751;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36748){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36748));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36753 = arguments.length;
var i__33451__auto___36754 = (0);
while(true){
if((i__33451__auto___36754 < len__33450__auto___36753)){
args__33457__auto__.push((arguments[i__33451__auto___36754]));

var G__36755 = (i__33451__auto___36754 + (1));
i__33451__auto___36754 = G__36755;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq36752){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36752));
});

var g_QMARK__36756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_36757 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36756){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__36756))
,null));
var mkg_36758 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36756,g_36757){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__36756,g_36757))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__36756,g_36757,mkg_36758){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36756).call(null,x);
});})(g_QMARK__36756,g_36757,mkg_36758))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__36756,g_36757,mkg_36758){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_36758).call(null,gfn);
});})(g_QMARK__36756,g_36757,mkg_36758))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__36756,g_36757,mkg_36758){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_36757).call(null,generator);
});})(g_QMARK__36756,g_36757,mkg_36758))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33553__auto___36778 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__33553__auto___36778){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36779 = arguments.length;
var i__33451__auto___36780 = (0);
while(true){
if((i__33451__auto___36780 < len__33450__auto___36779)){
args__33457__auto__.push((arguments[i__33451__auto___36780]));

var G__36781 = (i__33451__auto___36780 + (1));
i__33451__auto___36780 = G__36781;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36778))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36778){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36778),args);
});})(g__33553__auto___36778))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__33553__auto___36778){
return (function (seq36759){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36759));
});})(g__33553__auto___36778))
;


var g__33553__auto___36782 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__33553__auto___36782){
return (function cljs$spec$gen$alpha$list(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36783 = arguments.length;
var i__33451__auto___36784 = (0);
while(true){
if((i__33451__auto___36784 < len__33450__auto___36783)){
args__33457__auto__.push((arguments[i__33451__auto___36784]));

var G__36785 = (i__33451__auto___36784 + (1));
i__33451__auto___36784 = G__36785;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36782))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36782){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36782),args);
});})(g__33553__auto___36782))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__33553__auto___36782){
return (function (seq36760){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36760));
});})(g__33553__auto___36782))
;


var g__33553__auto___36786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__33553__auto___36786){
return (function cljs$spec$gen$alpha$map(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36787 = arguments.length;
var i__33451__auto___36788 = (0);
while(true){
if((i__33451__auto___36788 < len__33450__auto___36787)){
args__33457__auto__.push((arguments[i__33451__auto___36788]));

var G__36789 = (i__33451__auto___36788 + (1));
i__33451__auto___36788 = G__36789;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36786))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36786){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36786),args);
});})(g__33553__auto___36786))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__33553__auto___36786){
return (function (seq36761){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36761));
});})(g__33553__auto___36786))
;


var g__33553__auto___36790 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__33553__auto___36790){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36791 = arguments.length;
var i__33451__auto___36792 = (0);
while(true){
if((i__33451__auto___36792 < len__33450__auto___36791)){
args__33457__auto__.push((arguments[i__33451__auto___36792]));

var G__36793 = (i__33451__auto___36792 + (1));
i__33451__auto___36792 = G__36793;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36790))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36790){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36790),args);
});})(g__33553__auto___36790))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__33553__auto___36790){
return (function (seq36762){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36762));
});})(g__33553__auto___36790))
;


var g__33553__auto___36794 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__33553__auto___36794){
return (function cljs$spec$gen$alpha$set(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36795 = arguments.length;
var i__33451__auto___36796 = (0);
while(true){
if((i__33451__auto___36796 < len__33450__auto___36795)){
args__33457__auto__.push((arguments[i__33451__auto___36796]));

var G__36797 = (i__33451__auto___36796 + (1));
i__33451__auto___36796 = G__36797;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36794))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36794){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36794),args);
});})(g__33553__auto___36794))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__33553__auto___36794){
return (function (seq36763){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36763));
});})(g__33553__auto___36794))
;


var g__33553__auto___36798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__33553__auto___36798){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36799 = arguments.length;
var i__33451__auto___36800 = (0);
while(true){
if((i__33451__auto___36800 < len__33450__auto___36799)){
args__33457__auto__.push((arguments[i__33451__auto___36800]));

var G__36801 = (i__33451__auto___36800 + (1));
i__33451__auto___36800 = G__36801;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36798))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36798){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36798),args);
});})(g__33553__auto___36798))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__33553__auto___36798){
return (function (seq36764){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36764));
});})(g__33553__auto___36798))
;


var g__33553__auto___36802 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__33553__auto___36802){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36803 = arguments.length;
var i__33451__auto___36804 = (0);
while(true){
if((i__33451__auto___36804 < len__33450__auto___36803)){
args__33457__auto__.push((arguments[i__33451__auto___36804]));

var G__36805 = (i__33451__auto___36804 + (1));
i__33451__auto___36804 = G__36805;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36802))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36802){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36802),args);
});})(g__33553__auto___36802))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__33553__auto___36802){
return (function (seq36765){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36765));
});})(g__33553__auto___36802))
;


var g__33553__auto___36806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__33553__auto___36806){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36807 = arguments.length;
var i__33451__auto___36808 = (0);
while(true){
if((i__33451__auto___36808 < len__33450__auto___36807)){
args__33457__auto__.push((arguments[i__33451__auto___36808]));

var G__36809 = (i__33451__auto___36808 + (1));
i__33451__auto___36808 = G__36809;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36806))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36806),args);
});})(g__33553__auto___36806))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__33553__auto___36806){
return (function (seq36766){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36766));
});})(g__33553__auto___36806))
;


var g__33553__auto___36810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__33553__auto___36810){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36811 = arguments.length;
var i__33451__auto___36812 = (0);
while(true){
if((i__33451__auto___36812 < len__33450__auto___36811)){
args__33457__auto__.push((arguments[i__33451__auto___36812]));

var G__36813 = (i__33451__auto___36812 + (1));
i__33451__auto___36812 = G__36813;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36810))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36810),args);
});})(g__33553__auto___36810))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__33553__auto___36810){
return (function (seq36767){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36767));
});})(g__33553__auto___36810))
;


var g__33553__auto___36814 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__33553__auto___36814){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36815 = arguments.length;
var i__33451__auto___36816 = (0);
while(true){
if((i__33451__auto___36816 < len__33450__auto___36815)){
args__33457__auto__.push((arguments[i__33451__auto___36816]));

var G__36817 = (i__33451__auto___36816 + (1));
i__33451__auto___36816 = G__36817;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36814))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36814),args);
});})(g__33553__auto___36814))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__33553__auto___36814){
return (function (seq36768){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36768));
});})(g__33553__auto___36814))
;


var g__33553__auto___36818 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__33553__auto___36818){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36819 = arguments.length;
var i__33451__auto___36820 = (0);
while(true){
if((i__33451__auto___36820 < len__33450__auto___36819)){
args__33457__auto__.push((arguments[i__33451__auto___36820]));

var G__36821 = (i__33451__auto___36820 + (1));
i__33451__auto___36820 = G__36821;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36818))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36818){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36818),args);
});})(g__33553__auto___36818))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__33553__auto___36818){
return (function (seq36769){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36769));
});})(g__33553__auto___36818))
;


var g__33553__auto___36822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__33553__auto___36822){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36823 = arguments.length;
var i__33451__auto___36824 = (0);
while(true){
if((i__33451__auto___36824 < len__33450__auto___36823)){
args__33457__auto__.push((arguments[i__33451__auto___36824]));

var G__36825 = (i__33451__auto___36824 + (1));
i__33451__auto___36824 = G__36825;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36822))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36822){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36822),args);
});})(g__33553__auto___36822))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__33553__auto___36822){
return (function (seq36770){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36770));
});})(g__33553__auto___36822))
;


var g__33553__auto___36826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__33553__auto___36826){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36827 = arguments.length;
var i__33451__auto___36828 = (0);
while(true){
if((i__33451__auto___36828 < len__33450__auto___36827)){
args__33457__auto__.push((arguments[i__33451__auto___36828]));

var G__36829 = (i__33451__auto___36828 + (1));
i__33451__auto___36828 = G__36829;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36826))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36826){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36826),args);
});})(g__33553__auto___36826))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__33553__auto___36826){
return (function (seq36771){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36771));
});})(g__33553__auto___36826))
;


var g__33553__auto___36830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__33553__auto___36830){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36831 = arguments.length;
var i__33451__auto___36832 = (0);
while(true){
if((i__33451__auto___36832 < len__33450__auto___36831)){
args__33457__auto__.push((arguments[i__33451__auto___36832]));

var G__36833 = (i__33451__auto___36832 + (1));
i__33451__auto___36832 = G__36833;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36830))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36830),args);
});})(g__33553__auto___36830))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__33553__auto___36830){
return (function (seq36772){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36772));
});})(g__33553__auto___36830))
;


var g__33553__auto___36834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__33553__auto___36834){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36835 = arguments.length;
var i__33451__auto___36836 = (0);
while(true){
if((i__33451__auto___36836 < len__33450__auto___36835)){
args__33457__auto__.push((arguments[i__33451__auto___36836]));

var G__36837 = (i__33451__auto___36836 + (1));
i__33451__auto___36836 = G__36837;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36834))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36834),args);
});})(g__33553__auto___36834))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__33553__auto___36834){
return (function (seq36773){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36773));
});})(g__33553__auto___36834))
;


var g__33553__auto___36838 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__33553__auto___36838){
return (function cljs$spec$gen$alpha$return(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36839 = arguments.length;
var i__33451__auto___36840 = (0);
while(true){
if((i__33451__auto___36840 < len__33450__auto___36839)){
args__33457__auto__.push((arguments[i__33451__auto___36840]));

var G__36841 = (i__33451__auto___36840 + (1));
i__33451__auto___36840 = G__36841;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36838))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36838),args);
});})(g__33553__auto___36838))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__33553__auto___36838){
return (function (seq36774){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36774));
});})(g__33553__auto___36838))
;


var g__33553__auto___36842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__33553__auto___36842){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36843 = arguments.length;
var i__33451__auto___36844 = (0);
while(true){
if((i__33451__auto___36844 < len__33450__auto___36843)){
args__33457__auto__.push((arguments[i__33451__auto___36844]));

var G__36845 = (i__33451__auto___36844 + (1));
i__33451__auto___36844 = G__36845;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36842))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36842),args);
});})(g__33553__auto___36842))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33553__auto___36842){
return (function (seq36775){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36775));
});})(g__33553__auto___36842))
;


var g__33553__auto___36846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__33553__auto___36846){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36847 = arguments.length;
var i__33451__auto___36848 = (0);
while(true){
if((i__33451__auto___36848 < len__33450__auto___36847)){
args__33457__auto__.push((arguments[i__33451__auto___36848]));

var G__36849 = (i__33451__auto___36848 + (1));
i__33451__auto___36848 = G__36849;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36846))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36846),args);
});})(g__33553__auto___36846))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__33553__auto___36846){
return (function (seq36776){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36776));
});})(g__33553__auto___36846))
;


var g__33553__auto___36850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__33553__auto___36850){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36851 = arguments.length;
var i__33451__auto___36852 = (0);
while(true){
if((i__33451__auto___36852 < len__33450__auto___36851)){
args__33457__auto__.push((arguments[i__33451__auto___36852]));

var G__36853 = (i__33451__auto___36852 + (1));
i__33451__auto___36852 = G__36853;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33553__auto___36850))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33553__auto___36850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33553__auto___36850),args);
});})(g__33553__auto___36850))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__33553__auto___36850){
return (function (seq36777){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36777));
});})(g__33553__auto___36850))
;

var g__33566__auto___36875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__33566__auto___36875){
return (function cljs$spec$gen$alpha$any(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36876 = arguments.length;
var i__33451__auto___36877 = (0);
while(true){
if((i__33451__auto___36877 < len__33450__auto___36876)){
args__33457__auto__.push((arguments[i__33451__auto___36877]));

var G__36878 = (i__33451__auto___36877 + (1));
i__33451__auto___36877 = G__36878;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36875))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36875){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36875);
});})(g__33566__auto___36875))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__33566__auto___36875){
return (function (seq36854){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36854));
});})(g__33566__auto___36875))
;


var g__33566__auto___36879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__33566__auto___36879){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36880 = arguments.length;
var i__33451__auto___36881 = (0);
while(true){
if((i__33451__auto___36881 < len__33450__auto___36880)){
args__33457__auto__.push((arguments[i__33451__auto___36881]));

var G__36882 = (i__33451__auto___36881 + (1));
i__33451__auto___36881 = G__36882;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36879))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36879){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36879);
});})(g__33566__auto___36879))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__33566__auto___36879){
return (function (seq36855){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36855));
});})(g__33566__auto___36879))
;


var g__33566__auto___36883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__33566__auto___36883){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36884 = arguments.length;
var i__33451__auto___36885 = (0);
while(true){
if((i__33451__auto___36885 < len__33450__auto___36884)){
args__33457__auto__.push((arguments[i__33451__auto___36885]));

var G__36886 = (i__33451__auto___36885 + (1));
i__33451__auto___36885 = G__36886;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36883))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36883){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36883);
});})(g__33566__auto___36883))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__33566__auto___36883){
return (function (seq36856){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36856));
});})(g__33566__auto___36883))
;


var g__33566__auto___36887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__33566__auto___36887){
return (function cljs$spec$gen$alpha$char(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36888 = arguments.length;
var i__33451__auto___36889 = (0);
while(true){
if((i__33451__auto___36889 < len__33450__auto___36888)){
args__33457__auto__.push((arguments[i__33451__auto___36889]));

var G__36890 = (i__33451__auto___36889 + (1));
i__33451__auto___36889 = G__36890;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36887))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36887){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36887);
});})(g__33566__auto___36887))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__33566__auto___36887){
return (function (seq36857){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36857));
});})(g__33566__auto___36887))
;


var g__33566__auto___36891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__33566__auto___36891){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36892 = arguments.length;
var i__33451__auto___36893 = (0);
while(true){
if((i__33451__auto___36893 < len__33450__auto___36892)){
args__33457__auto__.push((arguments[i__33451__auto___36893]));

var G__36894 = (i__33451__auto___36893 + (1));
i__33451__auto___36893 = G__36894;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36891))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36891){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36891);
});})(g__33566__auto___36891))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__33566__auto___36891){
return (function (seq36858){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36858));
});})(g__33566__auto___36891))
;


var g__33566__auto___36895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__33566__auto___36895){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36896 = arguments.length;
var i__33451__auto___36897 = (0);
while(true){
if((i__33451__auto___36897 < len__33450__auto___36896)){
args__33457__auto__.push((arguments[i__33451__auto___36897]));

var G__36898 = (i__33451__auto___36897 + (1));
i__33451__auto___36897 = G__36898;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36895))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36895){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36895);
});})(g__33566__auto___36895))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__33566__auto___36895){
return (function (seq36859){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36859));
});})(g__33566__auto___36895))
;


var g__33566__auto___36899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__33566__auto___36899){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36900 = arguments.length;
var i__33451__auto___36901 = (0);
while(true){
if((i__33451__auto___36901 < len__33450__auto___36900)){
args__33457__auto__.push((arguments[i__33451__auto___36901]));

var G__36902 = (i__33451__auto___36901 + (1));
i__33451__auto___36901 = G__36902;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36899))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36899){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36899);
});})(g__33566__auto___36899))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__33566__auto___36899){
return (function (seq36860){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36860));
});})(g__33566__auto___36899))
;


var g__33566__auto___36903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__33566__auto___36903){
return (function cljs$spec$gen$alpha$double(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36904 = arguments.length;
var i__33451__auto___36905 = (0);
while(true){
if((i__33451__auto___36905 < len__33450__auto___36904)){
args__33457__auto__.push((arguments[i__33451__auto___36905]));

var G__36906 = (i__33451__auto___36905 + (1));
i__33451__auto___36905 = G__36906;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36903))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36903){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36903);
});})(g__33566__auto___36903))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__33566__auto___36903){
return (function (seq36861){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36861));
});})(g__33566__auto___36903))
;


var g__33566__auto___36907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__33566__auto___36907){
return (function cljs$spec$gen$alpha$int(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36908 = arguments.length;
var i__33451__auto___36909 = (0);
while(true){
if((i__33451__auto___36909 < len__33450__auto___36908)){
args__33457__auto__.push((arguments[i__33451__auto___36909]));

var G__36910 = (i__33451__auto___36909 + (1));
i__33451__auto___36909 = G__36910;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36907))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36907){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36907);
});})(g__33566__auto___36907))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__33566__auto___36907){
return (function (seq36862){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36862));
});})(g__33566__auto___36907))
;


var g__33566__auto___36911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__33566__auto___36911){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36912 = arguments.length;
var i__33451__auto___36913 = (0);
while(true){
if((i__33451__auto___36913 < len__33450__auto___36912)){
args__33457__auto__.push((arguments[i__33451__auto___36913]));

var G__36914 = (i__33451__auto___36913 + (1));
i__33451__auto___36913 = G__36914;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36911))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36911){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36911);
});})(g__33566__auto___36911))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__33566__auto___36911){
return (function (seq36863){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36863));
});})(g__33566__auto___36911))
;


var g__33566__auto___36915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__33566__auto___36915){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36916 = arguments.length;
var i__33451__auto___36917 = (0);
while(true){
if((i__33451__auto___36917 < len__33450__auto___36916)){
args__33457__auto__.push((arguments[i__33451__auto___36917]));

var G__36918 = (i__33451__auto___36917 + (1));
i__33451__auto___36917 = G__36918;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36915))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36915){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36915);
});})(g__33566__auto___36915))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__33566__auto___36915){
return (function (seq36864){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36864));
});})(g__33566__auto___36915))
;


var g__33566__auto___36919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__33566__auto___36919){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36920 = arguments.length;
var i__33451__auto___36921 = (0);
while(true){
if((i__33451__auto___36921 < len__33450__auto___36920)){
args__33457__auto__.push((arguments[i__33451__auto___36921]));

var G__36922 = (i__33451__auto___36921 + (1));
i__33451__auto___36921 = G__36922;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36919))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36919){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36919);
});})(g__33566__auto___36919))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__33566__auto___36919){
return (function (seq36865){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36865));
});})(g__33566__auto___36919))
;


var g__33566__auto___36923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__33566__auto___36923){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36924 = arguments.length;
var i__33451__auto___36925 = (0);
while(true){
if((i__33451__auto___36925 < len__33450__auto___36924)){
args__33457__auto__.push((arguments[i__33451__auto___36925]));

var G__36926 = (i__33451__auto___36925 + (1));
i__33451__auto___36925 = G__36926;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36923))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36923){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36923);
});})(g__33566__auto___36923))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__33566__auto___36923){
return (function (seq36866){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36866));
});})(g__33566__auto___36923))
;


var g__33566__auto___36927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__33566__auto___36927){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36928 = arguments.length;
var i__33451__auto___36929 = (0);
while(true){
if((i__33451__auto___36929 < len__33450__auto___36928)){
args__33457__auto__.push((arguments[i__33451__auto___36929]));

var G__36930 = (i__33451__auto___36929 + (1));
i__33451__auto___36929 = G__36930;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36927))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36927){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36927);
});})(g__33566__auto___36927))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__33566__auto___36927){
return (function (seq36867){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36867));
});})(g__33566__auto___36927))
;


var g__33566__auto___36931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__33566__auto___36931){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36932 = arguments.length;
var i__33451__auto___36933 = (0);
while(true){
if((i__33451__auto___36933 < len__33450__auto___36932)){
args__33457__auto__.push((arguments[i__33451__auto___36933]));

var G__36934 = (i__33451__auto___36933 + (1));
i__33451__auto___36933 = G__36934;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36931))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36931){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36931);
});})(g__33566__auto___36931))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__33566__auto___36931){
return (function (seq36868){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36868));
});})(g__33566__auto___36931))
;


var g__33566__auto___36935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__33566__auto___36935){
return (function cljs$spec$gen$alpha$string(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36936 = arguments.length;
var i__33451__auto___36937 = (0);
while(true){
if((i__33451__auto___36937 < len__33450__auto___36936)){
args__33457__auto__.push((arguments[i__33451__auto___36937]));

var G__36938 = (i__33451__auto___36937 + (1));
i__33451__auto___36937 = G__36938;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36935))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36935){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36935);
});})(g__33566__auto___36935))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__33566__auto___36935){
return (function (seq36869){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36869));
});})(g__33566__auto___36935))
;


var g__33566__auto___36939 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__33566__auto___36939){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36940 = arguments.length;
var i__33451__auto___36941 = (0);
while(true){
if((i__33451__auto___36941 < len__33450__auto___36940)){
args__33457__auto__.push((arguments[i__33451__auto___36941]));

var G__36942 = (i__33451__auto___36941 + (1));
i__33451__auto___36941 = G__36942;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36939))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36939){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36939);
});})(g__33566__auto___36939))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__33566__auto___36939){
return (function (seq36870){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36870));
});})(g__33566__auto___36939))
;


var g__33566__auto___36943 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__33566__auto___36943){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36944 = arguments.length;
var i__33451__auto___36945 = (0);
while(true){
if((i__33451__auto___36945 < len__33450__auto___36944)){
args__33457__auto__.push((arguments[i__33451__auto___36945]));

var G__36946 = (i__33451__auto___36945 + (1));
i__33451__auto___36945 = G__36946;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36943))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36943){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36943);
});})(g__33566__auto___36943))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__33566__auto___36943){
return (function (seq36871){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36871));
});})(g__33566__auto___36943))
;


var g__33566__auto___36947 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__33566__auto___36947){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36948 = arguments.length;
var i__33451__auto___36949 = (0);
while(true){
if((i__33451__auto___36949 < len__33450__auto___36948)){
args__33457__auto__.push((arguments[i__33451__auto___36949]));

var G__36950 = (i__33451__auto___36949 + (1));
i__33451__auto___36949 = G__36950;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36947))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36947){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36947);
});})(g__33566__auto___36947))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__33566__auto___36947){
return (function (seq36872){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36872));
});})(g__33566__auto___36947))
;


var g__33566__auto___36951 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__33566__auto___36951){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36952 = arguments.length;
var i__33451__auto___36953 = (0);
while(true){
if((i__33451__auto___36953 < len__33450__auto___36952)){
args__33457__auto__.push((arguments[i__33451__auto___36953]));

var G__36954 = (i__33451__auto___36953 + (1));
i__33451__auto___36953 = G__36954;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36951))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36951){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36951);
});})(g__33566__auto___36951))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__33566__auto___36951){
return (function (seq36873){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36873));
});})(g__33566__auto___36951))
;


var g__33566__auto___36955 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__33566__auto___36955){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36956 = arguments.length;
var i__33451__auto___36957 = (0);
while(true){
if((i__33451__auto___36957 < len__33450__auto___36956)){
args__33457__auto__.push((arguments[i__33451__auto___36957]));

var G__36958 = (i__33451__auto___36957 + (1));
i__33451__auto___36957 = G__36958;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});})(g__33566__auto___36955))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33566__auto___36955){
return (function (args){
return cljs.core.deref.call(null,g__33566__auto___36955);
});})(g__33566__auto___36955))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__33566__auto___36955){
return (function (seq36874){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36874));
});})(g__33566__auto___36955))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__33457__auto__ = [];
var len__33450__auto___36961 = arguments.length;
var i__33451__auto___36962 = (0);
while(true){
if((i__33451__auto___36962 < len__33450__auto___36961)){
args__33457__auto__.push((arguments[i__33451__auto___36962]));

var G__36963 = (i__33451__auto___36962 + (1));
i__33451__auto___36962 = G__36963;
continue;
} else {
}
break;
}

var argseq__33458__auto__ = ((((0) < args__33457__auto__.length))?(new cljs.core.IndexedSeq(args__33457__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__33458__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36959_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36959_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36960){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36960));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36964_SHARP_){
return (new Date(p1__36964_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
