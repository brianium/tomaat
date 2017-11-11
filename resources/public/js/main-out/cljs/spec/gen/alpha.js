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
var len__31349__auto___34443 = arguments.length;
var i__31350__auto___34444 = (0);
while(true){
if((i__31350__auto___34444 < len__31349__auto___34443)){
args__31356__auto__.push((arguments[i__31350__auto___34444]));

var G__34447 = (i__31350__auto___34444 + (1));
i__31350__auto___34444 = G__34447;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq34442){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34442));
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
var len__31349__auto___34457 = arguments.length;
var i__31350__auto___34458 = (0);
while(true){
if((i__31350__auto___34458 < len__31349__auto___34457)){
args__31356__auto__.push((arguments[i__31350__auto___34458]));

var G__34459 = (i__31350__auto___34458 + (1));
i__31350__auto___34458 = G__34459;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq34452){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34452));
});

var g_QMARK__34474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_34475 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34474){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__34474))
,null));
var mkg_34476 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34474,g_34475){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__34474,g_34475))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__34474,g_34475,mkg_34476){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34474).call(null,x);
});})(g_QMARK__34474,g_34475,mkg_34476))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__34474,g_34475,mkg_34476){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_34476).call(null,gfn);
});})(g_QMARK__34474,g_34475,mkg_34476))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__34474,g_34475,mkg_34476){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_34475).call(null,generator);
});})(g_QMARK__34474,g_34475,mkg_34476))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31452__auto___34646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31452__auto___34646){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34649 = arguments.length;
var i__31350__auto___34650 = (0);
while(true){
if((i__31350__auto___34650 < len__31349__auto___34649)){
args__31356__auto__.push((arguments[i__31350__auto___34650]));

var G__34652 = (i__31350__auto___34650 + (1));
i__31350__auto___34650 = G__34652;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34646))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34646),args);
});})(g__31452__auto___34646))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31452__auto___34646){
return (function (seq34495){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34495));
});})(g__31452__auto___34646))
;


var g__31452__auto___34677 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31452__auto___34677){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34683 = arguments.length;
var i__31350__auto___34684 = (0);
while(true){
if((i__31350__auto___34684 < len__31349__auto___34683)){
args__31356__auto__.push((arguments[i__31350__auto___34684]));

var G__34686 = (i__31350__auto___34684 + (1));
i__31350__auto___34684 = G__34686;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34677))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34677),args);
});})(g__31452__auto___34677))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31452__auto___34677){
return (function (seq34501){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34501));
});})(g__31452__auto___34677))
;


var g__31452__auto___34692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31452__auto___34692){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34695 = arguments.length;
var i__31350__auto___34696 = (0);
while(true){
if((i__31350__auto___34696 < len__31349__auto___34695)){
args__31356__auto__.push((arguments[i__31350__auto___34696]));

var G__34699 = (i__31350__auto___34696 + (1));
i__31350__auto___34696 = G__34699;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34692))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34692){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34692),args);
});})(g__31452__auto___34692))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31452__auto___34692){
return (function (seq34508){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34508));
});})(g__31452__auto___34692))
;


var g__31452__auto___34703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31452__auto___34703){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34707 = arguments.length;
var i__31350__auto___34708 = (0);
while(true){
if((i__31350__auto___34708 < len__31349__auto___34707)){
args__31356__auto__.push((arguments[i__31350__auto___34708]));

var G__34713 = (i__31350__auto___34708 + (1));
i__31350__auto___34708 = G__34713;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34703))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34703),args);
});})(g__31452__auto___34703))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31452__auto___34703){
return (function (seq34523){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34523));
});})(g__31452__auto___34703))
;


var g__31452__auto___34715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31452__auto___34715){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34717 = arguments.length;
var i__31350__auto___34718 = (0);
while(true){
if((i__31350__auto___34718 < len__31349__auto___34717)){
args__31356__auto__.push((arguments[i__31350__auto___34718]));

var G__34720 = (i__31350__auto___34718 + (1));
i__31350__auto___34718 = G__34720;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34715))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34715),args);
});})(g__31452__auto___34715))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31452__auto___34715){
return (function (seq34533){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34533));
});})(g__31452__auto___34715))
;


var g__31452__auto___34727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31452__auto___34727){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34729 = arguments.length;
var i__31350__auto___34730 = (0);
while(true){
if((i__31350__auto___34730 < len__31349__auto___34729)){
args__31356__auto__.push((arguments[i__31350__auto___34730]));

var G__34732 = (i__31350__auto___34730 + (1));
i__31350__auto___34730 = G__34732;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34727))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34727),args);
});})(g__31452__auto___34727))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31452__auto___34727){
return (function (seq34536){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34536));
});})(g__31452__auto___34727))
;


var g__31452__auto___34741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31452__auto___34741){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34749 = arguments.length;
var i__31350__auto___34750 = (0);
while(true){
if((i__31350__auto___34750 < len__31349__auto___34749)){
args__31356__auto__.push((arguments[i__31350__auto___34750]));

var G__34756 = (i__31350__auto___34750 + (1));
i__31350__auto___34750 = G__34756;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34741))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34741),args);
});})(g__31452__auto___34741))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31452__auto___34741){
return (function (seq34543){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34543));
});})(g__31452__auto___34741))
;


var g__31452__auto___34760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31452__auto___34760){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34765 = arguments.length;
var i__31350__auto___34766 = (0);
while(true){
if((i__31350__auto___34766 < len__31349__auto___34765)){
args__31356__auto__.push((arguments[i__31350__auto___34766]));

var G__34767 = (i__31350__auto___34766 + (1));
i__31350__auto___34766 = G__34767;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34760))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34760),args);
});})(g__31452__auto___34760))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31452__auto___34760){
return (function (seq34548){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34548));
});})(g__31452__auto___34760))
;


var g__31452__auto___34775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31452__auto___34775){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34779 = arguments.length;
var i__31350__auto___34780 = (0);
while(true){
if((i__31350__auto___34780 < len__31349__auto___34779)){
args__31356__auto__.push((arguments[i__31350__auto___34780]));

var G__34782 = (i__31350__auto___34780 + (1));
i__31350__auto___34780 = G__34782;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34775))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34775),args);
});})(g__31452__auto___34775))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31452__auto___34775){
return (function (seq34552){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34552));
});})(g__31452__auto___34775))
;


var g__31452__auto___34783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31452__auto___34783){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34787 = arguments.length;
var i__31350__auto___34788 = (0);
while(true){
if((i__31350__auto___34788 < len__31349__auto___34787)){
args__31356__auto__.push((arguments[i__31350__auto___34788]));

var G__34789 = (i__31350__auto___34788 + (1));
i__31350__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34783))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34783),args);
});})(g__31452__auto___34783))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31452__auto___34783){
return (function (seq34580){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34580));
});})(g__31452__auto___34783))
;


var g__31452__auto___34795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31452__auto___34795){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34796 = arguments.length;
var i__31350__auto___34797 = (0);
while(true){
if((i__31350__auto___34797 < len__31349__auto___34796)){
args__31356__auto__.push((arguments[i__31350__auto___34797]));

var G__34800 = (i__31350__auto___34797 + (1));
i__31350__auto___34797 = G__34800;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34795))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34795),args);
});})(g__31452__auto___34795))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31452__auto___34795){
return (function (seq34589){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34589));
});})(g__31452__auto___34795))
;


var g__31452__auto___34816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31452__auto___34816){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34829 = arguments.length;
var i__31350__auto___34830 = (0);
while(true){
if((i__31350__auto___34830 < len__31349__auto___34829)){
args__31356__auto__.push((arguments[i__31350__auto___34830]));

var G__34833 = (i__31350__auto___34830 + (1));
i__31350__auto___34830 = G__34833;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34816))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34816),args);
});})(g__31452__auto___34816))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31452__auto___34816){
return (function (seq34597){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34597));
});})(g__31452__auto___34816))
;


var g__31452__auto___34837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31452__auto___34837){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34842 = arguments.length;
var i__31350__auto___34843 = (0);
while(true){
if((i__31350__auto___34843 < len__31349__auto___34842)){
args__31356__auto__.push((arguments[i__31350__auto___34843]));

var G__34846 = (i__31350__auto___34843 + (1));
i__31350__auto___34843 = G__34846;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34837))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34837){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34837),args);
});})(g__31452__auto___34837))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31452__auto___34837){
return (function (seq34605){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34605));
});})(g__31452__auto___34837))
;


var g__31452__auto___34851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31452__auto___34851){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34855 = arguments.length;
var i__31350__auto___34856 = (0);
while(true){
if((i__31350__auto___34856 < len__31349__auto___34855)){
args__31356__auto__.push((arguments[i__31350__auto___34856]));

var G__34858 = (i__31350__auto___34856 + (1));
i__31350__auto___34856 = G__34858;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34851))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34851),args);
});})(g__31452__auto___34851))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31452__auto___34851){
return (function (seq34609){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34609));
});})(g__31452__auto___34851))
;


var g__31452__auto___34860 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31452__auto___34860){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34861 = arguments.length;
var i__31350__auto___34862 = (0);
while(true){
if((i__31350__auto___34862 < len__31349__auto___34861)){
args__31356__auto__.push((arguments[i__31350__auto___34862]));

var G__34866 = (i__31350__auto___34862 + (1));
i__31350__auto___34862 = G__34866;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34860))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34860){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34860),args);
});})(g__31452__auto___34860))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31452__auto___34860){
return (function (seq34615){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34615));
});})(g__31452__auto___34860))
;


var g__31452__auto___34872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31452__auto___34872){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34875 = arguments.length;
var i__31350__auto___34876 = (0);
while(true){
if((i__31350__auto___34876 < len__31349__auto___34875)){
args__31356__auto__.push((arguments[i__31350__auto___34876]));

var G__34879 = (i__31350__auto___34876 + (1));
i__31350__auto___34876 = G__34879;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34872))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34872){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34872),args);
});})(g__31452__auto___34872))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31452__auto___34872){
return (function (seq34622){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34622));
});})(g__31452__auto___34872))
;


var g__31452__auto___34886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31452__auto___34886){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34896 = arguments.length;
var i__31350__auto___34897 = (0);
while(true){
if((i__31350__auto___34897 < len__31349__auto___34896)){
args__31356__auto__.push((arguments[i__31350__auto___34897]));

var G__34901 = (i__31350__auto___34897 + (1));
i__31350__auto___34897 = G__34901;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34886))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34886),args);
});})(g__31452__auto___34886))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31452__auto___34886){
return (function (seq34628){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34628));
});})(g__31452__auto___34886))
;


var g__31452__auto___34909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31452__auto___34909){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34913 = arguments.length;
var i__31350__auto___34914 = (0);
while(true){
if((i__31350__auto___34914 < len__31349__auto___34913)){
args__31356__auto__.push((arguments[i__31350__auto___34914]));

var G__34915 = (i__31350__auto___34914 + (1));
i__31350__auto___34914 = G__34915;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34909))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34909){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34909),args);
});})(g__31452__auto___34909))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31452__auto___34909){
return (function (seq34640){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34640));
});})(g__31452__auto___34909))
;


var g__31452__auto___34917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31452__auto___34917){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31356__auto__ = [];
var len__31349__auto___34920 = arguments.length;
var i__31350__auto___34921 = (0);
while(true){
if((i__31350__auto___34921 < len__31349__auto___34920)){
args__31356__auto__.push((arguments[i__31350__auto___34921]));

var G__34922 = (i__31350__auto___34921 + (1));
i__31350__auto___34921 = G__34922;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31452__auto___34917))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31452__auto___34917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31452__auto___34917),args);
});})(g__31452__auto___34917))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31452__auto___34917){
return (function (seq34643){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34643));
});})(g__31452__auto___34917))
;

var g__31465__auto___35266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31465__auto___35266){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35269 = arguments.length;
var i__31350__auto___35271 = (0);
while(true){
if((i__31350__auto___35271 < len__31349__auto___35269)){
args__31356__auto__.push((arguments[i__31350__auto___35271]));

var G__35273 = (i__31350__auto___35271 + (1));
i__31350__auto___35271 = G__35273;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35266))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35266){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35266);
});})(g__31465__auto___35266))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31465__auto___35266){
return (function (seq34927){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34927));
});})(g__31465__auto___35266))
;


var g__31465__auto___35281 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31465__auto___35281){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35284 = arguments.length;
var i__31350__auto___35286 = (0);
while(true){
if((i__31350__auto___35286 < len__31349__auto___35284)){
args__31356__auto__.push((arguments[i__31350__auto___35286]));

var G__35289 = (i__31350__auto___35286 + (1));
i__31350__auto___35286 = G__35289;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35281))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35281){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35281);
});})(g__31465__auto___35281))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31465__auto___35281){
return (function (seq34934){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34934));
});})(g__31465__auto___35281))
;


var g__31465__auto___35294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31465__auto___35294){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35297 = arguments.length;
var i__31350__auto___35298 = (0);
while(true){
if((i__31350__auto___35298 < len__31349__auto___35297)){
args__31356__auto__.push((arguments[i__31350__auto___35298]));

var G__35300 = (i__31350__auto___35298 + (1));
i__31350__auto___35298 = G__35300;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35294))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35294){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35294);
});})(g__31465__auto___35294))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31465__auto___35294){
return (function (seq34935){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34935));
});})(g__31465__auto___35294))
;


var g__31465__auto___35301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31465__auto___35301){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35307 = arguments.length;
var i__31350__auto___35308 = (0);
while(true){
if((i__31350__auto___35308 < len__31349__auto___35307)){
args__31356__auto__.push((arguments[i__31350__auto___35308]));

var G__35309 = (i__31350__auto___35308 + (1));
i__31350__auto___35308 = G__35309;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35301))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35301){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35301);
});})(g__31465__auto___35301))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31465__auto___35301){
return (function (seq34936){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34936));
});})(g__31465__auto___35301))
;


var g__31465__auto___35311 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31465__auto___35311){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35312 = arguments.length;
var i__31350__auto___35313 = (0);
while(true){
if((i__31350__auto___35313 < len__31349__auto___35312)){
args__31356__auto__.push((arguments[i__31350__auto___35313]));

var G__35314 = (i__31350__auto___35313 + (1));
i__31350__auto___35313 = G__35314;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35311))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35311){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35311);
});})(g__31465__auto___35311))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31465__auto___35311){
return (function (seq34938){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34938));
});})(g__31465__auto___35311))
;


var g__31465__auto___35316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31465__auto___35316){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35318 = arguments.length;
var i__31350__auto___35319 = (0);
while(true){
if((i__31350__auto___35319 < len__31349__auto___35318)){
args__31356__auto__.push((arguments[i__31350__auto___35319]));

var G__35320 = (i__31350__auto___35319 + (1));
i__31350__auto___35319 = G__35320;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35316))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35316){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35316);
});})(g__31465__auto___35316))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31465__auto___35316){
return (function (seq34940){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34940));
});})(g__31465__auto___35316))
;


var g__31465__auto___35326 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31465__auto___35326){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35330 = arguments.length;
var i__31350__auto___35331 = (0);
while(true){
if((i__31350__auto___35331 < len__31349__auto___35330)){
args__31356__auto__.push((arguments[i__31350__auto___35331]));

var G__35332 = (i__31350__auto___35331 + (1));
i__31350__auto___35331 = G__35332;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35326))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35326){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35326);
});})(g__31465__auto___35326))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31465__auto___35326){
return (function (seq34948){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34948));
});})(g__31465__auto___35326))
;


var g__31465__auto___35335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31465__auto___35335){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35337 = arguments.length;
var i__31350__auto___35339 = (0);
while(true){
if((i__31350__auto___35339 < len__31349__auto___35337)){
args__31356__auto__.push((arguments[i__31350__auto___35339]));

var G__35341 = (i__31350__auto___35339 + (1));
i__31350__auto___35339 = G__35341;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35335))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35335){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35335);
});})(g__31465__auto___35335))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31465__auto___35335){
return (function (seq34949){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34949));
});})(g__31465__auto___35335))
;


var g__31465__auto___35342 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31465__auto___35342){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35346 = arguments.length;
var i__31350__auto___35347 = (0);
while(true){
if((i__31350__auto___35347 < len__31349__auto___35346)){
args__31356__auto__.push((arguments[i__31350__auto___35347]));

var G__35349 = (i__31350__auto___35347 + (1));
i__31350__auto___35347 = G__35349;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35342))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35342){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35342);
});})(g__31465__auto___35342))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31465__auto___35342){
return (function (seq34988){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34988));
});})(g__31465__auto___35342))
;


var g__31465__auto___35351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31465__auto___35351){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35352 = arguments.length;
var i__31350__auto___35353 = (0);
while(true){
if((i__31350__auto___35353 < len__31349__auto___35352)){
args__31356__auto__.push((arguments[i__31350__auto___35353]));

var G__35354 = (i__31350__auto___35353 + (1));
i__31350__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35351))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35351){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35351);
});})(g__31465__auto___35351))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31465__auto___35351){
return (function (seq35053){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35053));
});})(g__31465__auto___35351))
;


var g__31465__auto___35356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31465__auto___35356){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35359 = arguments.length;
var i__31350__auto___35360 = (0);
while(true){
if((i__31350__auto___35360 < len__31349__auto___35359)){
args__31356__auto__.push((arguments[i__31350__auto___35360]));

var G__35362 = (i__31350__auto___35360 + (1));
i__31350__auto___35360 = G__35362;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35356))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35356){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35356);
});})(g__31465__auto___35356))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31465__auto___35356){
return (function (seq35118){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35118));
});})(g__31465__auto___35356))
;


var g__31465__auto___35365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31465__auto___35365){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35368 = arguments.length;
var i__31350__auto___35369 = (0);
while(true){
if((i__31350__auto___35369 < len__31349__auto___35368)){
args__31356__auto__.push((arguments[i__31350__auto___35369]));

var G__35371 = (i__31350__auto___35369 + (1));
i__31350__auto___35369 = G__35371;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35365))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35365){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35365);
});})(g__31465__auto___35365))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31465__auto___35365){
return (function (seq35142){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35142));
});})(g__31465__auto___35365))
;


var g__31465__auto___35376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31465__auto___35376){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35382 = arguments.length;
var i__31350__auto___35383 = (0);
while(true){
if((i__31350__auto___35383 < len__31349__auto___35382)){
args__31356__auto__.push((arguments[i__31350__auto___35383]));

var G__35384 = (i__31350__auto___35383 + (1));
i__31350__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35376))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35376){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35376);
});})(g__31465__auto___35376))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31465__auto___35376){
return (function (seq35171){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35171));
});})(g__31465__auto___35376))
;


var g__31465__auto___35388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31465__auto___35388){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35394 = arguments.length;
var i__31350__auto___35395 = (0);
while(true){
if((i__31350__auto___35395 < len__31349__auto___35394)){
args__31356__auto__.push((arguments[i__31350__auto___35395]));

var G__35396 = (i__31350__auto___35395 + (1));
i__31350__auto___35395 = G__35396;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35388))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35388){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35388);
});})(g__31465__auto___35388))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31465__auto___35388){
return (function (seq35190){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35190));
});})(g__31465__auto___35388))
;


var g__31465__auto___35403 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31465__auto___35403){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35407 = arguments.length;
var i__31350__auto___35408 = (0);
while(true){
if((i__31350__auto___35408 < len__31349__auto___35407)){
args__31356__auto__.push((arguments[i__31350__auto___35408]));

var G__35410 = (i__31350__auto___35408 + (1));
i__31350__auto___35408 = G__35410;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35403))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35403){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35403);
});})(g__31465__auto___35403))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31465__auto___35403){
return (function (seq35202){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35202));
});})(g__31465__auto___35403))
;


var g__31465__auto___35413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31465__auto___35413){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35416 = arguments.length;
var i__31350__auto___35417 = (0);
while(true){
if((i__31350__auto___35417 < len__31349__auto___35416)){
args__31356__auto__.push((arguments[i__31350__auto___35417]));

var G__35418 = (i__31350__auto___35417 + (1));
i__31350__auto___35417 = G__35418;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35413))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35413){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35413);
});})(g__31465__auto___35413))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31465__auto___35413){
return (function (seq35212){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35212));
});})(g__31465__auto___35413))
;


var g__31465__auto___35428 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31465__auto___35428){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35432 = arguments.length;
var i__31350__auto___35433 = (0);
while(true){
if((i__31350__auto___35433 < len__31349__auto___35432)){
args__31356__auto__.push((arguments[i__31350__auto___35433]));

var G__35434 = (i__31350__auto___35433 + (1));
i__31350__auto___35433 = G__35434;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35428))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35428){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35428);
});})(g__31465__auto___35428))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31465__auto___35428){
return (function (seq35224){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35224));
});})(g__31465__auto___35428))
;


var g__31465__auto___35439 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31465__auto___35439){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35440 = arguments.length;
var i__31350__auto___35441 = (0);
while(true){
if((i__31350__auto___35441 < len__31349__auto___35440)){
args__31356__auto__.push((arguments[i__31350__auto___35441]));

var G__35443 = (i__31350__auto___35441 + (1));
i__31350__auto___35441 = G__35443;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35439))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35439){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35439);
});})(g__31465__auto___35439))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31465__auto___35439){
return (function (seq35235){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35235));
});})(g__31465__auto___35439))
;


var g__31465__auto___35447 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31465__auto___35447){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35453 = arguments.length;
var i__31350__auto___35454 = (0);
while(true){
if((i__31350__auto___35454 < len__31349__auto___35453)){
args__31356__auto__.push((arguments[i__31350__auto___35454]));

var G__35456 = (i__31350__auto___35454 + (1));
i__31350__auto___35454 = G__35456;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35447))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35447){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35447);
});})(g__31465__auto___35447))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31465__auto___35447){
return (function (seq35244){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35244));
});})(g__31465__auto___35447))
;


var g__31465__auto___35462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31465__auto___35462){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35467 = arguments.length;
var i__31350__auto___35468 = (0);
while(true){
if((i__31350__auto___35468 < len__31349__auto___35467)){
args__31356__auto__.push((arguments[i__31350__auto___35468]));

var G__35469 = (i__31350__auto___35468 + (1));
i__31350__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35462))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35462){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35462);
});})(g__31465__auto___35462))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31465__auto___35462){
return (function (seq35251){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35251));
});})(g__31465__auto___35462))
;


var g__31465__auto___35473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31465__auto___35473){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35475 = arguments.length;
var i__31350__auto___35477 = (0);
while(true){
if((i__31350__auto___35477 < len__31349__auto___35475)){
args__31356__auto__.push((arguments[i__31350__auto___35477]));

var G__35478 = (i__31350__auto___35477 + (1));
i__31350__auto___35477 = G__35478;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});})(g__31465__auto___35473))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___35473){
return (function (args){
return cljs.core.deref.call(null,g__31465__auto___35473);
});})(g__31465__auto___35473))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31465__auto___35473){
return (function (seq35260){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35260));
});})(g__31465__auto___35473))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31356__auto__ = [];
var len__31349__auto___35486 = arguments.length;
var i__31350__auto___35487 = (0);
while(true){
if((i__31350__auto___35487 < len__31349__auto___35486)){
args__31356__auto__.push((arguments[i__31350__auto___35487]));

var G__35489 = (i__31350__auto___35487 + (1));
i__31350__auto___35487 = G__35489;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35483_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35483_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35484){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35484));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35493_SHARP_){
return (new Date(p1__35493_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1510360380672
