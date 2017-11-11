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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__31356__auto__ = [];
var len__31349__auto___41807 = arguments.length;
var i__31350__auto___41808 = (0);
while(true){
if((i__31350__auto___41808 < len__31349__auto___41807)){
args__31356__auto__.push((arguments[i__31350__auto___41808]));

var G__41809 = (i__31350__auto___41808 + (1));
i__31350__auto___41808 = G__41809;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq41805){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41805));
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
var args__31356__auto__ = [];
var len__31349__auto___41819 = arguments.length;
var i__31350__auto___41820 = (0);
while(true){
if((i__31350__auto___41820 < len__31349__auto___41819)){
args__31356__auto__.push((arguments[i__31350__auto___41820]));

var G__41824 = (i__31350__auto___41820 + (1));
i__31350__auto___41820 = G__41824;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq41813){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41813));
});

var g_QMARK__41827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_41828 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__41827){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__41827))
,null));
var mkg_41829 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__41827,g_41828){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__41827,g_41828))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__41827,g_41828,mkg_41829){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41827).call(null,x);
});})(g_QMARK__41827,g_41828,mkg_41829))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__41827,g_41828,mkg_41829){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_41829).call(null,gfn);
});})(g_QMARK__41827,g_41828,mkg_41829))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__41827,g_41828,mkg_41829){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_41828).call(null,generator);
});})(g_QMARK__41827,g_41828,mkg_41829))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31452__auto___42089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31452__auto___42089){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42090 = arguments.length;
var i__31350__auto___42091 = (0);
while(true){
if((i__31350__auto___42091 < len__31349__auto___42090)){
args__31356__auto__.push((arguments[i__31350__auto___42091]));

var G__42093 = (i__31350__auto___42091 + (1));
i__31350__auto___42091 = G__42093;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42089))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42089),args);
});})(g__31452__auto___42089))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31452__auto___42089){
return (function (seq41835){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41835));
});})(g__31452__auto___42089))
;


var g__31452__auto___42096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31452__auto___42096){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42097 = arguments.length;
var i__31350__auto___42098 = (0);
while(true){
if((i__31350__auto___42098 < len__31349__auto___42097)){
args__31356__auto__.push((arguments[i__31350__auto___42098]));

var G__42099 = (i__31350__auto___42098 + (1));
i__31350__auto___42098 = G__42099;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42096))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42096){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42096),args);
});})(g__31452__auto___42096))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31452__auto___42096){
return (function (seq41842){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41842));
});})(g__31452__auto___42096))
;


var g__31452__auto___42100 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31452__auto___42100){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42102 = arguments.length;
var i__31350__auto___42103 = (0);
while(true){
if((i__31350__auto___42103 < len__31349__auto___42102)){
args__31356__auto__.push((arguments[i__31350__auto___42103]));

var G__42105 = (i__31350__auto___42103 + (1));
i__31350__auto___42103 = G__42105;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42100))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42100){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42100),args);
});})(g__31452__auto___42100))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31452__auto___42100){
return (function (seq41849){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41849));
});})(g__31452__auto___42100))
;


var g__31452__auto___42107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31452__auto___42107){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42113 = arguments.length;
var i__31350__auto___42114 = (0);
while(true){
if((i__31350__auto___42114 < len__31349__auto___42113)){
args__31356__auto__.push((arguments[i__31350__auto___42114]));

var G__42115 = (i__31350__auto___42114 + (1));
i__31350__auto___42114 = G__42115;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42107))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42107),args);
});})(g__31452__auto___42107))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31452__auto___42107){
return (function (seq41858){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41858));
});})(g__31452__auto___42107))
;


var g__31452__auto___42116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31452__auto___42116){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42117 = arguments.length;
var i__31350__auto___42118 = (0);
while(true){
if((i__31350__auto___42118 < len__31349__auto___42117)){
args__31356__auto__.push((arguments[i__31350__auto___42118]));

var G__42119 = (i__31350__auto___42118 + (1));
i__31350__auto___42118 = G__42119;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42116))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42116),args);
});})(g__31452__auto___42116))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31452__auto___42116){
return (function (seq41861){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41861));
});})(g__31452__auto___42116))
;


var g__31452__auto___42124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31452__auto___42124){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42129 = arguments.length;
var i__31350__auto___42130 = (0);
while(true){
if((i__31350__auto___42130 < len__31349__auto___42129)){
args__31356__auto__.push((arguments[i__31350__auto___42130]));

var G__42132 = (i__31350__auto___42130 + (1));
i__31350__auto___42130 = G__42132;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42124))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42124),args);
});})(g__31452__auto___42124))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31452__auto___42124){
return (function (seq41874){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41874));
});})(g__31452__auto___42124))
;


var g__31452__auto___42138 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31452__auto___42138){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42140 = arguments.length;
var i__31350__auto___42141 = (0);
while(true){
if((i__31350__auto___42141 < len__31349__auto___42140)){
args__31356__auto__.push((arguments[i__31350__auto___42141]));

var G__42143 = (i__31350__auto___42141 + (1));
i__31350__auto___42141 = G__42143;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42138))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42138){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42138),args);
});})(g__31452__auto___42138))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31452__auto___42138){
return (function (seq41887){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41887));
});})(g__31452__auto___42138))
;


var g__31452__auto___42147 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31452__auto___42147){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42151 = arguments.length;
var i__31350__auto___42152 = (0);
while(true){
if((i__31350__auto___42152 < len__31349__auto___42151)){
args__31356__auto__.push((arguments[i__31350__auto___42152]));

var G__42153 = (i__31350__auto___42152 + (1));
i__31350__auto___42152 = G__42153;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42147))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42147),args);
});})(g__31452__auto___42147))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31452__auto___42147){
return (function (seq41894){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41894));
});})(g__31452__auto___42147))
;


var g__31452__auto___42157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31452__auto___42157){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42158 = arguments.length;
var i__31350__auto___42160 = (0);
while(true){
if((i__31350__auto___42160 < len__31349__auto___42158)){
args__31356__auto__.push((arguments[i__31350__auto___42160]));

var G__42161 = (i__31350__auto___42160 + (1));
i__31350__auto___42160 = G__42161;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42157))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42157),args);
});})(g__31452__auto___42157))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31452__auto___42157){
return (function (seq41958){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41958));
});})(g__31452__auto___42157))
;


var g__31452__auto___42166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31452__auto___42166){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42167 = arguments.length;
var i__31350__auto___42168 = (0);
while(true){
if((i__31350__auto___42168 < len__31349__auto___42167)){
args__31356__auto__.push((arguments[i__31350__auto___42168]));

var G__42170 = (i__31350__auto___42168 + (1));
i__31350__auto___42168 = G__42170;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42166))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42166){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42166),args);
});})(g__31452__auto___42166))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31452__auto___42166){
return (function (seq42004){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42004));
});})(g__31452__auto___42166))
;


var g__31452__auto___42175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31452__auto___42175){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42178 = arguments.length;
var i__31350__auto___42180 = (0);
while(true){
if((i__31350__auto___42180 < len__31349__auto___42178)){
args__31356__auto__.push((arguments[i__31350__auto___42180]));

var G__42181 = (i__31350__auto___42180 + (1));
i__31350__auto___42180 = G__42181;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42175))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42175),args);
});})(g__31452__auto___42175))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31452__auto___42175){
return (function (seq42017){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42017));
});})(g__31452__auto___42175))
;


var g__31452__auto___42184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31452__auto___42184){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42189 = arguments.length;
var i__31350__auto___42190 = (0);
while(true){
if((i__31350__auto___42190 < len__31349__auto___42189)){
args__31356__auto__.push((arguments[i__31350__auto___42190]));

var G__42192 = (i__31350__auto___42190 + (1));
i__31350__auto___42190 = G__42192;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42184))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42184),args);
});})(g__31452__auto___42184))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31452__auto___42184){
return (function (seq42031){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42031));
});})(g__31452__auto___42184))
;


var g__31452__auto___42205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31452__auto___42205){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42210 = arguments.length;
var i__31350__auto___42211 = (0);
while(true){
if((i__31350__auto___42211 < len__31349__auto___42210)){
args__31356__auto__.push((arguments[i__31350__auto___42211]));

var G__42212 = (i__31350__auto___42211 + (1));
i__31350__auto___42211 = G__42212;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42205))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42205),args);
});})(g__31452__auto___42205))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31452__auto___42205){
return (function (seq42043){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42043));
});})(g__31452__auto___42205))
;


var g__31452__auto___42218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31452__auto___42218){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42221 = arguments.length;
var i__31350__auto___42223 = (0);
while(true){
if((i__31350__auto___42223 < len__31349__auto___42221)){
args__31356__auto__.push((arguments[i__31350__auto___42223]));

var G__42226 = (i__31350__auto___42223 + (1));
i__31350__auto___42223 = G__42226;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42218))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42218),args);
});})(g__31452__auto___42218))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31452__auto___42218){
return (function (seq42052){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42052));
});})(g__31452__auto___42218))
;


var g__31452__auto___42230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31452__auto___42230){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42233 = arguments.length;
var i__31350__auto___42234 = (0);
while(true){
if((i__31350__auto___42234 < len__31349__auto___42233)){
args__31356__auto__.push((arguments[i__31350__auto___42234]));

var G__42236 = (i__31350__auto___42234 + (1));
i__31350__auto___42234 = G__42236;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42230))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42230),args);
});})(g__31452__auto___42230))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31452__auto___42230){
return (function (seq42060){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42060));
});})(g__31452__auto___42230))
;


var g__31452__auto___42238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31452__auto___42238){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42239 = arguments.length;
var i__31350__auto___42241 = (0);
while(true){
if((i__31350__auto___42241 < len__31349__auto___42239)){
args__31356__auto__.push((arguments[i__31350__auto___42241]));

var G__42242 = (i__31350__auto___42241 + (1));
i__31350__auto___42241 = G__42242;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42238))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42238),args);
});})(g__31452__auto___42238))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31452__auto___42238){
return (function (seq42068){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42068));
});})(g__31452__auto___42238))
;


var g__31452__auto___42249 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31452__auto___42249){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42251 = arguments.length;
var i__31350__auto___42252 = (0);
while(true){
if((i__31350__auto___42252 < len__31349__auto___42251)){
args__31356__auto__.push((arguments[i__31350__auto___42252]));

var G__42253 = (i__31350__auto___42252 + (1));
i__31350__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42249))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42249){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42249),args);
});})(g__31452__auto___42249))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31452__auto___42249){
return (function (seq42075){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42075));
});})(g__31452__auto___42249))
;


var g__31452__auto___42257 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31452__auto___42257){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42261 = arguments.length;
var i__31350__auto___42262 = (0);
while(true){
if((i__31350__auto___42262 < len__31349__auto___42261)){
args__31356__auto__.push((arguments[i__31350__auto___42262]));

var G__42264 = (i__31350__auto___42262 + (1));
i__31350__auto___42262 = G__42264;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42257))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42257){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42257),args);
});})(g__31452__auto___42257))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31452__auto___42257){
return (function (seq42082){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42082));
});})(g__31452__auto___42257))
;


var g__31452__auto___42266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31452__auto___42266){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42267 = arguments.length;
var i__31350__auto___42268 = (0);
while(true){
if((i__31350__auto___42268 < len__31349__auto___42267)){
args__31356__auto__.push((arguments[i__31350__auto___42268]));

var G__42269 = (i__31350__auto___42268 + (1));
i__31350__auto___42268 = G__42269;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___42266))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___42266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___42266),args);
});})(g__31452__auto___42266))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31452__auto___42266){
return (function (seq42087){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42087));
});})(g__31452__auto___42266))
;

var g__31465__auto___42511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31465__auto___42511){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42515 = arguments.length;
var i__31350__auto___42516 = (0);
while(true){
if((i__31350__auto___42516 < len__31349__auto___42515)){
args__31356__auto__.push((arguments[i__31350__auto___42516]));

var G__42518 = (i__31350__auto___42516 + (1));
i__31350__auto___42516 = G__42518;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42511))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42511){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42511);
});})(g__31465__auto___42511))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31465__auto___42511){
return (function (seq42273){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42273));
});})(g__31465__auto___42511))
;


var g__31465__auto___42520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31465__auto___42520){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42525 = arguments.length;
var i__31350__auto___42526 = (0);
while(true){
if((i__31350__auto___42526 < len__31349__auto___42525)){
args__31356__auto__.push((arguments[i__31350__auto___42526]));

var G__42527 = (i__31350__auto___42526 + (1));
i__31350__auto___42526 = G__42527;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42520))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42520){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42520);
});})(g__31465__auto___42520))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31465__auto___42520){
return (function (seq42277){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42277));
});})(g__31465__auto___42520))
;


var g__31465__auto___42530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31465__auto___42530){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42534 = arguments.length;
var i__31350__auto___42535 = (0);
while(true){
if((i__31350__auto___42535 < len__31349__auto___42534)){
args__31356__auto__.push((arguments[i__31350__auto___42535]));

var G__42540 = (i__31350__auto___42535 + (1));
i__31350__auto___42535 = G__42540;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42530))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42530){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42530);
});})(g__31465__auto___42530))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31465__auto___42530){
return (function (seq42278){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42278));
});})(g__31465__auto___42530))
;


var g__31465__auto___42544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31465__auto___42544){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42549 = arguments.length;
var i__31350__auto___42550 = (0);
while(true){
if((i__31350__auto___42550 < len__31349__auto___42549)){
args__31356__auto__.push((arguments[i__31350__auto___42550]));

var G__42551 = (i__31350__auto___42550 + (1));
i__31350__auto___42550 = G__42551;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42544))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42544){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42544);
});})(g__31465__auto___42544))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31465__auto___42544){
return (function (seq42282){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42282));
});})(g__31465__auto___42544))
;


var g__31465__auto___42554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31465__auto___42554){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42556 = arguments.length;
var i__31350__auto___42557 = (0);
while(true){
if((i__31350__auto___42557 < len__31349__auto___42556)){
args__31356__auto__.push((arguments[i__31350__auto___42557]));

var G__42558 = (i__31350__auto___42557 + (1));
i__31350__auto___42557 = G__42558;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42554))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42554){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42554);
});})(g__31465__auto___42554))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31465__auto___42554){
return (function (seq42284){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42284));
});})(g__31465__auto___42554))
;


var g__31465__auto___42560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31465__auto___42560){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42562 = arguments.length;
var i__31350__auto___42563 = (0);
while(true){
if((i__31350__auto___42563 < len__31349__auto___42562)){
args__31356__auto__.push((arguments[i__31350__auto___42563]));

var G__42568 = (i__31350__auto___42563 + (1));
i__31350__auto___42563 = G__42568;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42560))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42560){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42560);
});})(g__31465__auto___42560))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31465__auto___42560){
return (function (seq42291){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42291));
});})(g__31465__auto___42560))
;


var g__31465__auto___42571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31465__auto___42571){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42573 = arguments.length;
var i__31350__auto___42574 = (0);
while(true){
if((i__31350__auto___42574 < len__31349__auto___42573)){
args__31356__auto__.push((arguments[i__31350__auto___42574]));

var G__42575 = (i__31350__auto___42574 + (1));
i__31350__auto___42574 = G__42575;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42571))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42571){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42571);
});})(g__31465__auto___42571))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31465__auto___42571){
return (function (seq42293){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42293));
});})(g__31465__auto___42571))
;


var g__31465__auto___42578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31465__auto___42578){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42579 = arguments.length;
var i__31350__auto___42580 = (0);
while(true){
if((i__31350__auto___42580 < len__31349__auto___42579)){
args__31356__auto__.push((arguments[i__31350__auto___42580]));

var G__42582 = (i__31350__auto___42580 + (1));
i__31350__auto___42580 = G__42582;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42578))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42578){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42578);
});})(g__31465__auto___42578))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31465__auto___42578){
return (function (seq42305){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42305));
});})(g__31465__auto___42578))
;


var g__31465__auto___42584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31465__auto___42584){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42587 = arguments.length;
var i__31350__auto___42588 = (0);
while(true){
if((i__31350__auto___42588 < len__31349__auto___42587)){
args__31356__auto__.push((arguments[i__31350__auto___42588]));

var G__42589 = (i__31350__auto___42588 + (1));
i__31350__auto___42588 = G__42589;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42584))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42584){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42584);
});})(g__31465__auto___42584))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31465__auto___42584){
return (function (seq42306){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42306));
});})(g__31465__auto___42584))
;


var g__31465__auto___42592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31465__auto___42592){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42593 = arguments.length;
var i__31350__auto___42594 = (0);
while(true){
if((i__31350__auto___42594 < len__31349__auto___42593)){
args__31356__auto__.push((arguments[i__31350__auto___42594]));

var G__42596 = (i__31350__auto___42594 + (1));
i__31350__auto___42594 = G__42596;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42592))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42592){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42592);
});})(g__31465__auto___42592))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31465__auto___42592){
return (function (seq42319){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42319));
});})(g__31465__auto___42592))
;


var g__31465__auto___42598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31465__auto___42598){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42601 = arguments.length;
var i__31350__auto___42602 = (0);
while(true){
if((i__31350__auto___42602 < len__31349__auto___42601)){
args__31356__auto__.push((arguments[i__31350__auto___42602]));

var G__42603 = (i__31350__auto___42602 + (1));
i__31350__auto___42602 = G__42603;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42598))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42598){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42598);
});})(g__31465__auto___42598))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31465__auto___42598){
return (function (seq42388){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42388));
});})(g__31465__auto___42598))
;


var g__31465__auto___42607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31465__auto___42607){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42608 = arguments.length;
var i__31350__auto___42609 = (0);
while(true){
if((i__31350__auto___42609 < len__31349__auto___42608)){
args__31356__auto__.push((arguments[i__31350__auto___42609]));

var G__42610 = (i__31350__auto___42609 + (1));
i__31350__auto___42609 = G__42610;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42607))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42607){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42607);
});})(g__31465__auto___42607))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31465__auto___42607){
return (function (seq42396){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42396));
});})(g__31465__auto___42607))
;


var g__31465__auto___42613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31465__auto___42613){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42615 = arguments.length;
var i__31350__auto___42616 = (0);
while(true){
if((i__31350__auto___42616 < len__31349__auto___42615)){
args__31356__auto__.push((arguments[i__31350__auto___42616]));

var G__42617 = (i__31350__auto___42616 + (1));
i__31350__auto___42616 = G__42617;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42613))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42613){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42613);
});})(g__31465__auto___42613))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31465__auto___42613){
return (function (seq42403){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42403));
});})(g__31465__auto___42613))
;


var g__31465__auto___42620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31465__auto___42620){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42631 = arguments.length;
var i__31350__auto___42632 = (0);
while(true){
if((i__31350__auto___42632 < len__31349__auto___42631)){
args__31356__auto__.push((arguments[i__31350__auto___42632]));

var G__42633 = (i__31350__auto___42632 + (1));
i__31350__auto___42632 = G__42633;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42620))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42620){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42620);
});})(g__31465__auto___42620))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31465__auto___42620){
return (function (seq42421){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42421));
});})(g__31465__auto___42620))
;


var g__31465__auto___42680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31465__auto___42680){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42686 = arguments.length;
var i__31350__auto___42688 = (0);
while(true){
if((i__31350__auto___42688 < len__31349__auto___42686)){
args__31356__auto__.push((arguments[i__31350__auto___42688]));

var G__42693 = (i__31350__auto___42688 + (1));
i__31350__auto___42688 = G__42693;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42680))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42680){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42680);
});})(g__31465__auto___42680))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31465__auto___42680){
return (function (seq42437){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42437));
});})(g__31465__auto___42680))
;


var g__31465__auto___42697 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31465__auto___42697){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42705 = arguments.length;
var i__31350__auto___42706 = (0);
while(true){
if((i__31350__auto___42706 < len__31349__auto___42705)){
args__31356__auto__.push((arguments[i__31350__auto___42706]));

var G__42711 = (i__31350__auto___42706 + (1));
i__31350__auto___42706 = G__42711;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42697))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42697){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42697);
});})(g__31465__auto___42697))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31465__auto___42697){
return (function (seq42463){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42463));
});})(g__31465__auto___42697))
;


var g__31465__auto___42719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31465__auto___42719){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42727 = arguments.length;
var i__31350__auto___42728 = (0);
while(true){
if((i__31350__auto___42728 < len__31349__auto___42727)){
args__31356__auto__.push((arguments[i__31350__auto___42728]));

var G__42730 = (i__31350__auto___42728 + (1));
i__31350__auto___42728 = G__42730;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42719))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42719){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42719);
});})(g__31465__auto___42719))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31465__auto___42719){
return (function (seq42482){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42482));
});})(g__31465__auto___42719))
;


var g__31465__auto___42735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31465__auto___42735){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42739 = arguments.length;
var i__31350__auto___42740 = (0);
while(true){
if((i__31350__auto___42740 < len__31349__auto___42739)){
args__31356__auto__.push((arguments[i__31350__auto___42740]));

var G__42741 = (i__31350__auto___42740 + (1));
i__31350__auto___42740 = G__42741;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42735))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42735){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42735);
});})(g__31465__auto___42735))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31465__auto___42735){
return (function (seq42500){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42500));
});})(g__31465__auto___42735))
;


var g__31465__auto___42745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31465__auto___42745){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42747 = arguments.length;
var i__31350__auto___42748 = (0);
while(true){
if((i__31350__auto___42748 < len__31349__auto___42747)){
args__31356__auto__.push((arguments[i__31350__auto___42748]));

var G__42749 = (i__31350__auto___42748 + (1));
i__31350__auto___42748 = G__42749;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42745))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42745){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42745);
});})(g__31465__auto___42745))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31465__auto___42745){
return (function (seq42502){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42502));
});})(g__31465__auto___42745))
;


var g__31465__auto___42753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31465__auto___42753){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42757 = arguments.length;
var i__31350__auto___42758 = (0);
while(true){
if((i__31350__auto___42758 < len__31349__auto___42757)){
args__31356__auto__.push((arguments[i__31350__auto___42758]));

var G__42759 = (i__31350__auto___42758 + (1));
i__31350__auto___42758 = G__42759;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42753))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42753){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42753);
});})(g__31465__auto___42753))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31465__auto___42753){
return (function (seq42508){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42508));
});})(g__31465__auto___42753))
;


var g__31465__auto___42764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31465__auto___42764){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42768 = arguments.length;
var i__31350__auto___42770 = (0);
while(true){
if((i__31350__auto___42770 < len__31349__auto___42768)){
args__31356__auto__.push((arguments[i__31350__auto___42770]));

var G__42771 = (i__31350__auto___42770 + (1));
i__31350__auto___42770 = G__42771;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___42764))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___42764){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___42764);
});})(g__31465__auto___42764))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31465__auto___42764){
return (function (seq42510){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42510));
});})(g__31465__auto___42764))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31356__auto__ = [];
var len__31349__auto___42790 = arguments.length;
var i__31350__auto___42791 = (0);
while(true){
if((i__31350__auto___42791 < len__31349__auto___42790)){
args__31356__auto__.push((arguments[i__31350__auto___42791]));

var G__42792 = (i__31350__auto___42791 + (1));
i__31350__auto___42791 = G__42792;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__42780_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42780_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq42782){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42782));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__42797_SHARP_){
return (new Date(p1__42797_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1510360394044
