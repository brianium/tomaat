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
var len__31349__auto___49691 = arguments.length;
var i__31350__auto___49692 = (0);
while(true){
if((i__31350__auto___49692 < len__31349__auto___49691)){
args__31356__auto__.push((arguments[i__31350__auto___49692]));

var G__49694 = (i__31350__auto___49692 + (1));
i__31350__auto___49692 = G__49694;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49685){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49685));
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
var len__31349__auto___49700 = arguments.length;
var i__31350__auto___49701 = (0);
while(true){
if((i__31350__auto___49701 < len__31349__auto___49700)){
args__31356__auto__.push((arguments[i__31350__auto___49701]));

var G__49702 = (i__31350__auto___49701 + (1));
i__31350__auto___49701 = G__49702;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49698){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49698));
});

var g_QMARK__49707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_49708 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49707){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__49707))
,null));
var mkg_49709 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49707,g_49708){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__49707,g_49708))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49707,g_49708,mkg_49709){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49707).call(null,x);
});})(g_QMARK__49707,g_49708,mkg_49709))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49707,g_49708,mkg_49709){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49709).call(null,gfn);
});})(g_QMARK__49707,g_49708,mkg_49709))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49707,g_49708,mkg_49709){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49708).call(null,generator);
});})(g_QMARK__49707,g_49708,mkg_49709))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31452__auto___49884 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31452__auto___49884){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49892 = arguments.length;
var i__31350__auto___49898 = (0);
while(true){
if((i__31350__auto___49898 < len__31349__auto___49892)){
args__31356__auto__.push((arguments[i__31350__auto___49898]));

var G__49913 = (i__31350__auto___49898 + (1));
i__31350__auto___49898 = G__49913;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49884))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49884){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49884),args);
});})(g__31452__auto___49884))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31452__auto___49884){
return (function (seq49783){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49783));
});})(g__31452__auto___49884))
;


var g__31452__auto___49917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31452__auto___49917){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49922 = arguments.length;
var i__31350__auto___49924 = (0);
while(true){
if((i__31350__auto___49924 < len__31349__auto___49922)){
args__31356__auto__.push((arguments[i__31350__auto___49924]));

var G__49925 = (i__31350__auto___49924 + (1));
i__31350__auto___49924 = G__49925;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49917))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49917),args);
});})(g__31452__auto___49917))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31452__auto___49917){
return (function (seq49794){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49794));
});})(g__31452__auto___49917))
;


var g__31452__auto___49932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31452__auto___49932){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49936 = arguments.length;
var i__31350__auto___49938 = (0);
while(true){
if((i__31350__auto___49938 < len__31349__auto___49936)){
args__31356__auto__.push((arguments[i__31350__auto___49938]));

var G__49940 = (i__31350__auto___49938 + (1));
i__31350__auto___49938 = G__49940;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49932))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49932),args);
});})(g__31452__auto___49932))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31452__auto___49932){
return (function (seq49800){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49800));
});})(g__31452__auto___49932))
;


var g__31452__auto___49942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31452__auto___49942){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49944 = arguments.length;
var i__31350__auto___49945 = (0);
while(true){
if((i__31350__auto___49945 < len__31349__auto___49944)){
args__31356__auto__.push((arguments[i__31350__auto___49945]));

var G__49947 = (i__31350__auto___49945 + (1));
i__31350__auto___49945 = G__49947;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49942))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49942),args);
});})(g__31452__auto___49942))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31452__auto___49942){
return (function (seq49811){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49811));
});})(g__31452__auto___49942))
;


var g__31452__auto___49949 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31452__auto___49949){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49951 = arguments.length;
var i__31350__auto___49952 = (0);
while(true){
if((i__31350__auto___49952 < len__31349__auto___49951)){
args__31356__auto__.push((arguments[i__31350__auto___49952]));

var G__49953 = (i__31350__auto___49952 + (1));
i__31350__auto___49952 = G__49953;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49949))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49949),args);
});})(g__31452__auto___49949))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31452__auto___49949){
return (function (seq49819){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49819));
});})(g__31452__auto___49949))
;


var g__31452__auto___49957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31452__auto___49957){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49958 = arguments.length;
var i__31350__auto___49959 = (0);
while(true){
if((i__31350__auto___49959 < len__31349__auto___49958)){
args__31356__auto__.push((arguments[i__31350__auto___49959]));

var G__49960 = (i__31350__auto___49959 + (1));
i__31350__auto___49959 = G__49960;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49957))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49957),args);
});})(g__31452__auto___49957))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31452__auto___49957){
return (function (seq49826){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49826));
});})(g__31452__auto___49957))
;


var g__31452__auto___49966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31452__auto___49966){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49970 = arguments.length;
var i__31350__auto___49971 = (0);
while(true){
if((i__31350__auto___49971 < len__31349__auto___49970)){
args__31356__auto__.push((arguments[i__31350__auto___49971]));

var G__49974 = (i__31350__auto___49971 + (1));
i__31350__auto___49971 = G__49974;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49966))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49966){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49966),args);
});})(g__31452__auto___49966))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31452__auto___49966){
return (function (seq49829){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49829));
});})(g__31452__auto___49966))
;


var g__31452__auto___49976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31452__auto___49976){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49977 = arguments.length;
var i__31350__auto___49978 = (0);
while(true){
if((i__31350__auto___49978 < len__31349__auto___49977)){
args__31356__auto__.push((arguments[i__31350__auto___49978]));

var G__49979 = (i__31350__auto___49978 + (1));
i__31350__auto___49978 = G__49979;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49976))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49976),args);
});})(g__31452__auto___49976))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31452__auto___49976){
return (function (seq49832){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49832));
});})(g__31452__auto___49976))
;


var g__31452__auto___49982 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31452__auto___49982){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31356__auto__ = [];
var len__31349__auto___49983 = arguments.length;
var i__31350__auto___49984 = (0);
while(true){
if((i__31350__auto___49984 < len__31349__auto___49983)){
args__31356__auto__.push((arguments[i__31350__auto___49984]));

var G__49985 = (i__31350__auto___49984 + (1));
i__31350__auto___49984 = G__49985;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49982))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49982){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49982),args);
});})(g__31452__auto___49982))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31452__auto___49982){
return (function (seq49837){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49837));
});})(g__31452__auto___49982))
;


var g__31452__auto___49997 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31452__auto___49997){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50031 = arguments.length;
var i__31350__auto___50032 = (0);
while(true){
if((i__31350__auto___50032 < len__31349__auto___50031)){
args__31356__auto__.push((arguments[i__31350__auto___50032]));

var G__50033 = (i__31350__auto___50032 + (1));
i__31350__auto___50032 = G__50033;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___49997))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___49997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___49997),args);
});})(g__31452__auto___49997))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31452__auto___49997){
return (function (seq49840){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49840));
});})(g__31452__auto___49997))
;


var g__31452__auto___50040 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31452__auto___50040){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50045 = arguments.length;
var i__31350__auto___50046 = (0);
while(true){
if((i__31350__auto___50046 < len__31349__auto___50045)){
args__31356__auto__.push((arguments[i__31350__auto___50046]));

var G__50047 = (i__31350__auto___50046 + (1));
i__31350__auto___50046 = G__50047;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50040))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50040){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50040),args);
});})(g__31452__auto___50040))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31452__auto___50040){
return (function (seq49842){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49842));
});})(g__31452__auto___50040))
;


var g__31452__auto___50052 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31452__auto___50052){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50059 = arguments.length;
var i__31350__auto___50060 = (0);
while(true){
if((i__31350__auto___50060 < len__31349__auto___50059)){
args__31356__auto__.push((arguments[i__31350__auto___50060]));

var G__50063 = (i__31350__auto___50060 + (1));
i__31350__auto___50060 = G__50063;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50052))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50052){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50052),args);
});})(g__31452__auto___50052))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31452__auto___50052){
return (function (seq49845){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49845));
});})(g__31452__auto___50052))
;


var g__31452__auto___50066 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31452__auto___50066){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50068 = arguments.length;
var i__31350__auto___50069 = (0);
while(true){
if((i__31350__auto___50069 < len__31349__auto___50068)){
args__31356__auto__.push((arguments[i__31350__auto___50069]));

var G__50070 = (i__31350__auto___50069 + (1));
i__31350__auto___50069 = G__50070;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50066))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50066),args);
});})(g__31452__auto___50066))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31452__auto___50066){
return (function (seq49848){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49848));
});})(g__31452__auto___50066))
;


var g__31452__auto___50073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31452__auto___50073){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50074 = arguments.length;
var i__31350__auto___50075 = (0);
while(true){
if((i__31350__auto___50075 < len__31349__auto___50074)){
args__31356__auto__.push((arguments[i__31350__auto___50075]));

var G__50077 = (i__31350__auto___50075 + (1));
i__31350__auto___50075 = G__50077;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50073))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50073),args);
});})(g__31452__auto___50073))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31452__auto___50073){
return (function (seq49853){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49853));
});})(g__31452__auto___50073))
;


var g__31452__auto___50079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31452__auto___50079){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50081 = arguments.length;
var i__31350__auto___50082 = (0);
while(true){
if((i__31350__auto___50082 < len__31349__auto___50081)){
args__31356__auto__.push((arguments[i__31350__auto___50082]));

var G__50083 = (i__31350__auto___50082 + (1));
i__31350__auto___50082 = G__50083;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50079))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50079),args);
});})(g__31452__auto___50079))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31452__auto___50079){
return (function (seq49863){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49863));
});})(g__31452__auto___50079))
;


var g__31452__auto___50087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31452__auto___50087){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50091 = arguments.length;
var i__31350__auto___50092 = (0);
while(true){
if((i__31350__auto___50092 < len__31349__auto___50091)){
args__31356__auto__.push((arguments[i__31350__auto___50092]));

var G__50093 = (i__31350__auto___50092 + (1));
i__31350__auto___50092 = G__50093;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50087))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50087),args);
});})(g__31452__auto___50087))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31452__auto___50087){
return (function (seq49867){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49867));
});})(g__31452__auto___50087))
;


var g__31452__auto___50094 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31452__auto___50094){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50100 = arguments.length;
var i__31350__auto___50101 = (0);
while(true){
if((i__31350__auto___50101 < len__31349__auto___50100)){
args__31356__auto__.push((arguments[i__31350__auto___50101]));

var G__50103 = (i__31350__auto___50101 + (1));
i__31350__auto___50101 = G__50103;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50094))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50094),args);
});})(g__31452__auto___50094))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31452__auto___50094){
return (function (seq49870){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49870));
});})(g__31452__auto___50094))
;


var g__31452__auto___50107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31452__auto___50107){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50109 = arguments.length;
var i__31350__auto___50110 = (0);
while(true){
if((i__31350__auto___50110 < len__31349__auto___50109)){
args__31356__auto__.push((arguments[i__31350__auto___50110]));

var G__50111 = (i__31350__auto___50110 + (1));
i__31350__auto___50110 = G__50111;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50107))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50107),args);
});})(g__31452__auto___50107))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31452__auto___50107){
return (function (seq49873){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49873));
});})(g__31452__auto___50107))
;


var g__31452__auto___50114 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31452__auto___50114){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50115 = arguments.length;
var i__31350__auto___50116 = (0);
while(true){
if((i__31350__auto___50116 < len__31349__auto___50115)){
args__31356__auto__.push((arguments[i__31350__auto___50116]));

var G__50117 = (i__31350__auto___50116 + (1));
i__31350__auto___50116 = G__50117;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___50114))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___50114){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___50114),args);
});})(g__31452__auto___50114))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31452__auto___50114){
return (function (seq49880){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49880));
});})(g__31452__auto___50114))
;

var g__31465__auto___50246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31465__auto___50246){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50251 = arguments.length;
var i__31350__auto___50252 = (0);
while(true){
if((i__31350__auto___50252 < len__31349__auto___50251)){
args__31356__auto__.push((arguments[i__31350__auto___50252]));

var G__50253 = (i__31350__auto___50252 + (1));
i__31350__auto___50252 = G__50253;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50246))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50246){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50246);
});})(g__31465__auto___50246))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31465__auto___50246){
return (function (seq50120){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50120));
});})(g__31465__auto___50246))
;


var g__31465__auto___50254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31465__auto___50254){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50255 = arguments.length;
var i__31350__auto___50256 = (0);
while(true){
if((i__31350__auto___50256 < len__31349__auto___50255)){
args__31356__auto__.push((arguments[i__31350__auto___50256]));

var G__50257 = (i__31350__auto___50256 + (1));
i__31350__auto___50256 = G__50257;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50254))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50254){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50254);
});})(g__31465__auto___50254))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31465__auto___50254){
return (function (seq50136){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50136));
});})(g__31465__auto___50254))
;


var g__31465__auto___50260 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31465__auto___50260){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50262 = arguments.length;
var i__31350__auto___50263 = (0);
while(true){
if((i__31350__auto___50263 < len__31349__auto___50262)){
args__31356__auto__.push((arguments[i__31350__auto___50263]));

var G__50264 = (i__31350__auto___50263 + (1));
i__31350__auto___50263 = G__50264;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50260))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50260){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50260);
});})(g__31465__auto___50260))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31465__auto___50260){
return (function (seq50173){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50173));
});})(g__31465__auto___50260))
;


var g__31465__auto___50273 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31465__auto___50273){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50275 = arguments.length;
var i__31350__auto___50276 = (0);
while(true){
if((i__31350__auto___50276 < len__31349__auto___50275)){
args__31356__auto__.push((arguments[i__31350__auto___50276]));

var G__50278 = (i__31350__auto___50276 + (1));
i__31350__auto___50276 = G__50278;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50273))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50273){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50273);
});})(g__31465__auto___50273))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31465__auto___50273){
return (function (seq50181){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50181));
});})(g__31465__auto___50273))
;


var g__31465__auto___50280 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31465__auto___50280){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50285 = arguments.length;
var i__31350__auto___50286 = (0);
while(true){
if((i__31350__auto___50286 < len__31349__auto___50285)){
args__31356__auto__.push((arguments[i__31350__auto___50286]));

var G__50287 = (i__31350__auto___50286 + (1));
i__31350__auto___50286 = G__50287;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50280))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50280){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50280);
});})(g__31465__auto___50280))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31465__auto___50280){
return (function (seq50185){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50185));
});})(g__31465__auto___50280))
;


var g__31465__auto___50288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31465__auto___50288){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50289 = arguments.length;
var i__31350__auto___50290 = (0);
while(true){
if((i__31350__auto___50290 < len__31349__auto___50289)){
args__31356__auto__.push((arguments[i__31350__auto___50290]));

var G__50291 = (i__31350__auto___50290 + (1));
i__31350__auto___50290 = G__50291;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50288))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50288){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50288);
});})(g__31465__auto___50288))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31465__auto___50288){
return (function (seq50194){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50194));
});})(g__31465__auto___50288))
;


var g__31465__auto___50292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31465__auto___50292){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50293 = arguments.length;
var i__31350__auto___50294 = (0);
while(true){
if((i__31350__auto___50294 < len__31349__auto___50293)){
args__31356__auto__.push((arguments[i__31350__auto___50294]));

var G__50295 = (i__31350__auto___50294 + (1));
i__31350__auto___50294 = G__50295;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50292))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50292){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50292);
});})(g__31465__auto___50292))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31465__auto___50292){
return (function (seq50200){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50200));
});})(g__31465__auto___50292))
;


var g__31465__auto___50296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31465__auto___50296){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50297 = arguments.length;
var i__31350__auto___50298 = (0);
while(true){
if((i__31350__auto___50298 < len__31349__auto___50297)){
args__31356__auto__.push((arguments[i__31350__auto___50298]));

var G__50299 = (i__31350__auto___50298 + (1));
i__31350__auto___50298 = G__50299;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50296))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50296){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50296);
});})(g__31465__auto___50296))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31465__auto___50296){
return (function (seq50203){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50203));
});})(g__31465__auto___50296))
;


var g__31465__auto___50300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31465__auto___50300){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50301 = arguments.length;
var i__31350__auto___50302 = (0);
while(true){
if((i__31350__auto___50302 < len__31349__auto___50301)){
args__31356__auto__.push((arguments[i__31350__auto___50302]));

var G__50303 = (i__31350__auto___50302 + (1));
i__31350__auto___50302 = G__50303;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50300))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50300){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50300);
});})(g__31465__auto___50300))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31465__auto___50300){
return (function (seq50206){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50206));
});})(g__31465__auto___50300))
;


var g__31465__auto___50304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31465__auto___50304){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50305 = arguments.length;
var i__31350__auto___50306 = (0);
while(true){
if((i__31350__auto___50306 < len__31349__auto___50305)){
args__31356__auto__.push((arguments[i__31350__auto___50306]));

var G__50308 = (i__31350__auto___50306 + (1));
i__31350__auto___50306 = G__50308;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50304))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50304){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50304);
});})(g__31465__auto___50304))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31465__auto___50304){
return (function (seq50211){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50211));
});})(g__31465__auto___50304))
;


var g__31465__auto___50309 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31465__auto___50309){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50310 = arguments.length;
var i__31350__auto___50311 = (0);
while(true){
if((i__31350__auto___50311 < len__31349__auto___50310)){
args__31356__auto__.push((arguments[i__31350__auto___50311]));

var G__50312 = (i__31350__auto___50311 + (1));
i__31350__auto___50311 = G__50312;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50309))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50309){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50309);
});})(g__31465__auto___50309))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31465__auto___50309){
return (function (seq50214){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50214));
});})(g__31465__auto___50309))
;


var g__31465__auto___50314 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31465__auto___50314){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50315 = arguments.length;
var i__31350__auto___50316 = (0);
while(true){
if((i__31350__auto___50316 < len__31349__auto___50315)){
args__31356__auto__.push((arguments[i__31350__auto___50316]));

var G__50317 = (i__31350__auto___50316 + (1));
i__31350__auto___50316 = G__50317;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50314))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50314){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50314);
});})(g__31465__auto___50314))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31465__auto___50314){
return (function (seq50216){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50216));
});})(g__31465__auto___50314))
;


var g__31465__auto___50318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31465__auto___50318){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50320 = arguments.length;
var i__31350__auto___50321 = (0);
while(true){
if((i__31350__auto___50321 < len__31349__auto___50320)){
args__31356__auto__.push((arguments[i__31350__auto___50321]));

var G__50322 = (i__31350__auto___50321 + (1));
i__31350__auto___50321 = G__50322;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50318))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50318){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50318);
});})(g__31465__auto___50318))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31465__auto___50318){
return (function (seq50219){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50219));
});})(g__31465__auto___50318))
;


var g__31465__auto___50323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31465__auto___50323){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50324 = arguments.length;
var i__31350__auto___50325 = (0);
while(true){
if((i__31350__auto___50325 < len__31349__auto___50324)){
args__31356__auto__.push((arguments[i__31350__auto___50325]));

var G__50327 = (i__31350__auto___50325 + (1));
i__31350__auto___50325 = G__50327;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50323))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50323){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50323);
});})(g__31465__auto___50323))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31465__auto___50323){
return (function (seq50222){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50222));
});})(g__31465__auto___50323))
;


var g__31465__auto___50329 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31465__auto___50329){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50330 = arguments.length;
var i__31350__auto___50331 = (0);
while(true){
if((i__31350__auto___50331 < len__31349__auto___50330)){
args__31356__auto__.push((arguments[i__31350__auto___50331]));

var G__50332 = (i__31350__auto___50331 + (1));
i__31350__auto___50331 = G__50332;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50329))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50329){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50329);
});})(g__31465__auto___50329))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31465__auto___50329){
return (function (seq50226){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50226));
});})(g__31465__auto___50329))
;


var g__31465__auto___50339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31465__auto___50339){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50340 = arguments.length;
var i__31350__auto___50341 = (0);
while(true){
if((i__31350__auto___50341 < len__31349__auto___50340)){
args__31356__auto__.push((arguments[i__31350__auto___50341]));

var G__50342 = (i__31350__auto___50341 + (1));
i__31350__auto___50341 = G__50342;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50339))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50339){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50339);
});})(g__31465__auto___50339))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31465__auto___50339){
return (function (seq50229){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50229));
});})(g__31465__auto___50339))
;


var g__31465__auto___50343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31465__auto___50343){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50344 = arguments.length;
var i__31350__auto___50345 = (0);
while(true){
if((i__31350__auto___50345 < len__31349__auto___50344)){
args__31356__auto__.push((arguments[i__31350__auto___50345]));

var G__50346 = (i__31350__auto___50345 + (1));
i__31350__auto___50345 = G__50346;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50343))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50343){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50343);
});})(g__31465__auto___50343))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31465__auto___50343){
return (function (seq50234){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50234));
});})(g__31465__auto___50343))
;


var g__31465__auto___50348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31465__auto___50348){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50349 = arguments.length;
var i__31350__auto___50350 = (0);
while(true){
if((i__31350__auto___50350 < len__31349__auto___50349)){
args__31356__auto__.push((arguments[i__31350__auto___50350]));

var G__50351 = (i__31350__auto___50350 + (1));
i__31350__auto___50350 = G__50351;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50348))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50348){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50348);
});})(g__31465__auto___50348))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31465__auto___50348){
return (function (seq50237){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50237));
});})(g__31465__auto___50348))
;


var g__31465__auto___50352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31465__auto___50352){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50353 = arguments.length;
var i__31350__auto___50354 = (0);
while(true){
if((i__31350__auto___50354 < len__31349__auto___50353)){
args__31356__auto__.push((arguments[i__31350__auto___50354]));

var G__50355 = (i__31350__auto___50354 + (1));
i__31350__auto___50354 = G__50355;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50352))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50352){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50352);
});})(g__31465__auto___50352))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31465__auto___50352){
return (function (seq50241){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50241));
});})(g__31465__auto___50352))
;


var g__31465__auto___50356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31465__auto___50356){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50357 = arguments.length;
var i__31350__auto___50358 = (0);
while(true){
if((i__31350__auto___50358 < len__31349__auto___50357)){
args__31356__auto__.push((arguments[i__31350__auto___50358]));

var G__50359 = (i__31350__auto___50358 + (1));
i__31350__auto___50358 = G__50359;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50356))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50356){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50356);
});})(g__31465__auto___50356))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31465__auto___50356){
return (function (seq50242){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50242));
});})(g__31465__auto___50356))
;


var g__31465__auto___50364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31465__auto___50364){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50365 = arguments.length;
var i__31350__auto___50366 = (0);
while(true){
if((i__31350__auto___50366 < len__31349__auto___50365)){
args__31356__auto__.push((arguments[i__31350__auto___50366]));

var G__50367 = (i__31350__auto___50366 + (1));
i__31350__auto___50366 = G__50367;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___50364))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___50364){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___50364);
});})(g__31465__auto___50364))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31465__auto___50364){
return (function (seq50243){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50243));
});})(g__31465__auto___50364))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31356__auto__ = [];
var len__31349__auto___50372 = arguments.length;
var i__31350__auto___50377 = (0);
while(true){
if((i__31350__auto___50377 < len__31349__auto___50372)){
args__31356__auto__.push((arguments[i__31350__auto___50377]));

var G__50378 = (i__31350__auto___50377 + (1));
i__31350__auto___50377 = G__50378;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__50368_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50368_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq50369){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50369));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__50392_SHARP_){
return (new Date(p1__50392_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1510360405918
