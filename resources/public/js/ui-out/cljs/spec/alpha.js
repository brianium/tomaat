// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__30805__auto__ = (((spec == null))?null:spec);
var m__30806__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,spec,x);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__30805__auto__ = (((spec == null))?null:spec);
var m__30806__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,spec,y);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__30805__auto__ = (((spec == null))?null:spec);
var m__30806__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,spec,path,via,in$,x);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__30805__auto__ = (((spec == null))?null:spec);
var m__30806__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__30805__auto__ = (((spec == null))?null:spec);
var m__30806__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,spec,gfn);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__30805__auto__ = (((spec == null))?null:spec);
var m__30806__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,spec);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__50477 = cljs.core.get.call(null,reg,spec);
spec = G__50477;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__30072__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__30060__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__30060__auto__)){
return x;
} else {
return and__30060__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__30072__auto__ = (function (){var and__30060__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__30060__auto__){
return cljs.spec.alpha.reg_resolve.call(null,spec_or_k);
} else {
return and__30060__auto__;
}
})();
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
var or__30072__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__30072__auto____$2)){
return or__30072__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__30072__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__50499 = arguments.length;
switch (G__50499) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__30805__auto__ = (((_ == null))?null:_);
var m__30806__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,_);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__30805__auto__ = (((_ == null))?null:_);
var m__30806__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__30805__auto__)]);
if(!((m__30806__auto__ == null))){
return m__30806__auto__.call(null,_,form);
} else {
var m__30806__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__30806__auto____$1 == null))){
return m__30806__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__50528 = null;
var G__50528__1 = (function (o){
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
});
var G__50528__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__50528 = function(o,form){
switch(arguments.length){
case 1:
return G__50528__1.call(this,o);
case 2:
return G__50528__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__50528.cljs$core$IFn$_invoke$arity$1 = G__50528__1;
G__50528.cljs$core$IFn$_invoke$arity$2 = G__50528__2;
return G__50528;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__50531 = arguments.length;
switch (G__50531) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__30072__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__30072__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__30060__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__30060__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__30060__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = (form instanceof cljs.core.Symbol);
if(and__30060__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__30060__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5278__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__5278__auto__)){
var probs = temp__5278__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5276__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.call(null,(function (p1__50542_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__50542_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.call(null,(function (){var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50543_50593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50544_50594 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50543_50593,_STAR_print_fn_STAR_50544_50594,sb__31197__auto__,problems){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_50543_50593,_STAR_print_fn_STAR_50544_50594,sb__31197__auto__,problems))
;

try{var seq__50545_50596 = cljs.core.seq.call(null,problems);
var chunk__50546_50597 = null;
var count__50547_50598 = (0);
var i__50548_50599 = (0);
while(true){
if((i__50548_50599 < count__50547_50598)){
var map__50549_50600 = cljs.core._nth.call(null,chunk__50546_50597,i__50548_50599);
var map__50549_50601__$1 = ((((!((map__50549_50600 == null)))?((((map__50549_50600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50549_50600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50549_50600):map__50549_50600);
var prob_50602 = map__50549_50601__$1;
var path_50603 = cljs.core.get.call(null,map__50549_50601__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_50604 = cljs.core.get.call(null,map__50549_50601__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_50605 = cljs.core.get.call(null,map__50549_50601__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_50606 = cljs.core.get.call(null,map__50549_50601__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_50607 = cljs.core.get.call(null,map__50549_50601__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_50608 = cljs.core.get.call(null,map__50549_50601__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_50608)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_50608),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_50605);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_50607)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_50607)));
}

if(cljs.core.empty_QMARK_.call(null,path_50603)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_50603));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_50604));

if(cljs.core.truth_(reason_50606)){
cljs.core.print.call(null,", ",reason_50606);
} else {
}

var seq__50551_50619 = cljs.core.seq.call(null,prob_50602);
var chunk__50552_50620 = null;
var count__50553_50621 = (0);
var i__50554_50622 = (0);
while(true){
if((i__50554_50622 < count__50553_50621)){
var vec__50555_50623 = cljs.core._nth.call(null,chunk__50552_50620,i__50554_50622);
var k_50624 = cljs.core.nth.call(null,vec__50555_50623,(0),null);
var v_50625 = cljs.core.nth.call(null,vec__50555_50623,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_50624))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_50624)," ");

cljs.core.pr.call(null,v_50625);
}

var G__50627 = seq__50551_50619;
var G__50628 = chunk__50552_50620;
var G__50629 = count__50553_50621;
var G__50630 = (i__50554_50622 + (1));
seq__50551_50619 = G__50627;
chunk__50552_50620 = G__50628;
count__50553_50621 = G__50629;
i__50554_50622 = G__50630;
continue;
} else {
var temp__5278__auto___50631 = cljs.core.seq.call(null,seq__50551_50619);
if(temp__5278__auto___50631){
var seq__50551_50632__$1 = temp__5278__auto___50631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50551_50632__$1)){
var c__31003__auto___50633 = cljs.core.chunk_first.call(null,seq__50551_50632__$1);
var G__50634 = cljs.core.chunk_rest.call(null,seq__50551_50632__$1);
var G__50635 = c__31003__auto___50633;
var G__50636 = cljs.core.count.call(null,c__31003__auto___50633);
var G__50637 = (0);
seq__50551_50619 = G__50634;
chunk__50552_50620 = G__50635;
count__50553_50621 = G__50636;
i__50554_50622 = G__50637;
continue;
} else {
var vec__50560_50638 = cljs.core.first.call(null,seq__50551_50632__$1);
var k_50639 = cljs.core.nth.call(null,vec__50560_50638,(0),null);
var v_50640 = cljs.core.nth.call(null,vec__50560_50638,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_50639))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_50639)," ");

cljs.core.pr.call(null,v_50640);
}

var G__50641 = cljs.core.next.call(null,seq__50551_50632__$1);
var G__50642 = null;
var G__50643 = (0);
var G__50644 = (0);
seq__50551_50619 = G__50641;
chunk__50552_50620 = G__50642;
count__50553_50621 = G__50643;
i__50554_50622 = G__50644;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__50645 = seq__50545_50596;
var G__50646 = chunk__50546_50597;
var G__50647 = count__50547_50598;
var G__50648 = (i__50548_50599 + (1));
seq__50545_50596 = G__50645;
chunk__50546_50597 = G__50646;
count__50547_50598 = G__50647;
i__50548_50599 = G__50648;
continue;
} else {
var temp__5278__auto___50649 = cljs.core.seq.call(null,seq__50545_50596);
if(temp__5278__auto___50649){
var seq__50545_50650__$1 = temp__5278__auto___50649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50545_50650__$1)){
var c__31003__auto___50651 = cljs.core.chunk_first.call(null,seq__50545_50650__$1);
var G__50652 = cljs.core.chunk_rest.call(null,seq__50545_50650__$1);
var G__50653 = c__31003__auto___50651;
var G__50654 = cljs.core.count.call(null,c__31003__auto___50651);
var G__50655 = (0);
seq__50545_50596 = G__50652;
chunk__50546_50597 = G__50653;
count__50547_50598 = G__50654;
i__50548_50599 = G__50655;
continue;
} else {
var map__50565_50659 = cljs.core.first.call(null,seq__50545_50650__$1);
var map__50565_50660__$1 = ((((!((map__50565_50659 == null)))?((((map__50565_50659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50565_50659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50565_50659):map__50565_50659);
var prob_50661 = map__50565_50660__$1;
var path_50662 = cljs.core.get.call(null,map__50565_50660__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_50663 = cljs.core.get.call(null,map__50565_50660__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_50664 = cljs.core.get.call(null,map__50565_50660__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_50665 = cljs.core.get.call(null,map__50565_50660__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_50666 = cljs.core.get.call(null,map__50565_50660__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_50667 = cljs.core.get.call(null,map__50565_50660__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_50667)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_50667),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_50664);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_50666)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_50666)));
}

if(cljs.core.empty_QMARK_.call(null,path_50662)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_50662));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_50663));

if(cljs.core.truth_(reason_50665)){
cljs.core.print.call(null,", ",reason_50665);
} else {
}

var seq__50570_50675 = cljs.core.seq.call(null,prob_50661);
var chunk__50571_50676 = null;
var count__50572_50677 = (0);
var i__50573_50678 = (0);
while(true){
if((i__50573_50678 < count__50572_50677)){
var vec__50574_50679 = cljs.core._nth.call(null,chunk__50571_50676,i__50573_50678);
var k_50680 = cljs.core.nth.call(null,vec__50574_50679,(0),null);
var v_50681 = cljs.core.nth.call(null,vec__50574_50679,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_50680))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_50680)," ");

cljs.core.pr.call(null,v_50681);
}

var G__50686 = seq__50570_50675;
var G__50687 = chunk__50571_50676;
var G__50688 = count__50572_50677;
var G__50689 = (i__50573_50678 + (1));
seq__50570_50675 = G__50686;
chunk__50571_50676 = G__50687;
count__50572_50677 = G__50688;
i__50573_50678 = G__50689;
continue;
} else {
var temp__5278__auto___50690__$1 = cljs.core.seq.call(null,seq__50570_50675);
if(temp__5278__auto___50690__$1){
var seq__50570_50691__$1 = temp__5278__auto___50690__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50570_50691__$1)){
var c__31003__auto___50692 = cljs.core.chunk_first.call(null,seq__50570_50691__$1);
var G__50693 = cljs.core.chunk_rest.call(null,seq__50570_50691__$1);
var G__50694 = c__31003__auto___50692;
var G__50695 = cljs.core.count.call(null,c__31003__auto___50692);
var G__50696 = (0);
seq__50570_50675 = G__50693;
chunk__50571_50676 = G__50694;
count__50572_50677 = G__50695;
i__50573_50678 = G__50696;
continue;
} else {
var vec__50577_50697 = cljs.core.first.call(null,seq__50570_50691__$1);
var k_50698 = cljs.core.nth.call(null,vec__50577_50697,(0),null);
var v_50699 = cljs.core.nth.call(null,vec__50577_50697,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_50698))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_50698)," ");

cljs.core.pr.call(null,v_50699);
}

var G__50702 = cljs.core.next.call(null,seq__50570_50691__$1);
var G__50703 = null;
var G__50704 = (0);
var G__50705 = (0);
seq__50570_50675 = G__50702;
chunk__50571_50676 = G__50703;
count__50572_50677 = G__50704;
i__50573_50678 = G__50705;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__50706 = cljs.core.next.call(null,seq__50545_50650__$1);
var G__50707 = null;
var G__50708 = (0);
var G__50709 = (0);
seq__50545_50596 = G__50706;
chunk__50546_50597 = G__50707;
count__50547_50598 = G__50708;
i__50548_50599 = G__50709;
continue;
}
} else {
}
}
break;
}

var seq__50580_50714 = cljs.core.seq.call(null,ed);
var chunk__50581_50715 = null;
var count__50582_50716 = (0);
var i__50583_50717 = (0);
while(true){
if((i__50583_50717 < count__50582_50716)){
var vec__50584_50718 = cljs.core._nth.call(null,chunk__50581_50715,i__50583_50717);
var k_50719 = cljs.core.nth.call(null,vec__50584_50718,(0),null);
var v_50720 = cljs.core.nth.call(null,vec__50584_50718,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_50719))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_50719)," ");

cljs.core.pr.call(null,v_50720);

cljs.core.newline.call(null);
}

var G__50724 = seq__50580_50714;
var G__50725 = chunk__50581_50715;
var G__50726 = count__50582_50716;
var G__50727 = (i__50583_50717 + (1));
seq__50580_50714 = G__50724;
chunk__50581_50715 = G__50725;
count__50582_50716 = G__50726;
i__50583_50717 = G__50727;
continue;
} else {
var temp__5278__auto___50728 = cljs.core.seq.call(null,seq__50580_50714);
if(temp__5278__auto___50728){
var seq__50580_50729__$1 = temp__5278__auto___50728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50580_50729__$1)){
var c__31003__auto___50730 = cljs.core.chunk_first.call(null,seq__50580_50729__$1);
var G__50731 = cljs.core.chunk_rest.call(null,seq__50580_50729__$1);
var G__50732 = c__31003__auto___50730;
var G__50733 = cljs.core.count.call(null,c__31003__auto___50730);
var G__50734 = (0);
seq__50580_50714 = G__50731;
chunk__50581_50715 = G__50732;
count__50582_50716 = G__50733;
i__50583_50717 = G__50734;
continue;
} else {
var vec__50590_50735 = cljs.core.first.call(null,seq__50580_50729__$1);
var k_50736 = cljs.core.nth.call(null,vec__50590_50735,(0),null);
var v_50737 = cljs.core.nth.call(null,vec__50590_50735,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_50736))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_50736)," ");

cljs.core.pr.call(null,v_50737);

cljs.core.newline.call(null);
}

var G__50738 = cljs.core.next.call(null,seq__50580_50729__$1);
var G__50739 = null;
var G__50740 = (0);
var G__50741 = (0);
seq__50580_50714 = G__50738;
chunk__50581_50715 = G__50739;
count__50582_50716 = G__50740;
i__50583_50717 = G__50741;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50544_50594;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50543_50593;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50748_50753 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50749_50754 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50748_50753,_STAR_print_fn_STAR_50749_50754,sb__31197__auto__){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_50748_50753,_STAR_print_fn_STAR_50749_50754,sb__31197__auto__))
;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50749_50754;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50748_50753;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__5276__auto__ = (function (){var or__30072__auto__ = (function (){var temp__5278__auto__ = (function (){var or__30072__auto__ = cljs.core.get.call(null,overrides,(function (){var or__30072__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var gfn = temp__5278__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var g = temp__5276__auto__;
return cljs.spec.gen.alpha.such_that.call(null,((function (g,temp__5276__auto__,spec__$1){
return (function (p1__50755_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__50755_SHARP_);
});})(g,temp__5276__auto__,spec__$1))
,g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__50769 = arguments.length;
switch (G__50769) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__30060__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__30060__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__30072__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__5278__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5278__auto__)){
var arg_spec = temp__5278__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__5276__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50785_50791 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50786_50792 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50785_50791,_STAR_print_fn_STAR_50786_50792,sb__31197__auto__,ed,arg_spec,temp__5278__auto__,specs){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_50785_50791,_STAR_print_fn_STAR_50786_50792,sb__31197__auto__,ed,arg_spec,temp__5278__auto__,specs))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50786_50792;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50785_50791;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__30072__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__50802 = arguments.length;
switch (G__50802) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5276__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__50833 = arguments.length;
switch (G__50833) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__50849 = arguments.length;
switch (G__50849) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__5276__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__50859){
var map__50860 = p__50859;
var map__50860__$1 = ((((!((map__50860 == null)))?((((map__50860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50860):map__50860);
var argm = map__50860__$1;
var opt = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__50856_SHARP_){
var or__30072__auto__ = k__GT_s.call(null,p1__50856_SHARP_);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p1__50856_SHARP_;
}
});})(k__GT_s,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha50864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha50864 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,p__50859,req_specs,map__50860,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta50865){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.p__50859 = p__50859;
this.req_specs = req_specs;
this.map__50860 = map__50860;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta50865 = meta50865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_50866,meta50865__$1){
var self__ = this;
var _50866__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha50864(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.p__50859,self__.req_specs,self__.map__50860,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta50865__$1));
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_50866){
var self__ = this;
var _50866__$1 = this;
return self__.meta50865;
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__50880 = m;
var vec__50881 = G__50880;
var seq__50882 = cljs.core.seq.call(null,vec__50881);
var first__50883 = cljs.core.first.call(null,seq__50882);
var seq__50882__$1 = cljs.core.next.call(null,seq__50882);
var vec__50884 = first__50883;
var k = cljs.core.nth.call(null,vec__50884,(0),null);
var v = cljs.core.nth.call(null,vec__50884,(1),null);
var ks = seq__50882__$1;
var keys = vec__50881;
var ret__$1 = ret;
var G__50880__$1 = G__50880;
while(true){
var ret__$2 = ret__$1;
var vec__50887 = G__50880__$1;
var seq__50888 = cljs.core.seq.call(null,vec__50887);
var first__50889 = cljs.core.first.call(null,seq__50888);
var seq__50888__$1 = cljs.core.next.call(null,seq__50888);
var vec__50890 = first__50889;
var k__$1 = cljs.core.nth.call(null,vec__50890,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__50890,(1),null);
var ks__$1 = seq__50888__$1;
var keys__$1 = vec__50887;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5276__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5276__auto__)){
var s = temp__5276__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__50959 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__50960 = ks__$1;
ret__$1 = G__50959;
G__50880__$1 = G__50960;
continue;
}
} else {
var G__50965 = ret__$2;
var G__50966 = ks__$1;
ret__$1 = G__50965;
G__50880__$1 = G__50966;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__50900 = cljs.core.keys.call(null,m);
var vec__50901 = G__50900;
var seq__50902 = cljs.core.seq.call(null,vec__50901);
var first__50903 = cljs.core.first.call(null,seq__50902);
var seq__50902__$1 = cljs.core.next.call(null,seq__50902);
var k = first__50903;
var ks = seq__50902__$1;
var keys = vec__50901;
var ret__$1 = ret;
var G__50900__$1 = G__50900;
while(true){
var ret__$2 = ret__$1;
var vec__50907 = G__50900__$1;
var seq__50908 = cljs.core.seq.call(null,vec__50907);
var first__50909 = cljs.core.first.call(null,seq__50908);
var seq__50908__$1 = cljs.core.next.call(null,seq__50908);
var k__$1 = first__50909;
var ks__$1 = seq__50908__$1;
var keys__$1 = vec__50907;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__50981 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__50982 = ks__$1;
ret__$1 = G__50981;
G__50900__$1 = G__50982;
continue;
} else {
var G__50985 = ret__$2;
var G__50986 = ks__$1;
ret__$1 = G__50985;
G__50900__$1 = G__50986;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5278__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5278__auto__){
var probs = temp__5278__auto__;
return cljs.core.map.call(null,((function (probs,temp__5278__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__50857_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__50857_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5278__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__50912){
var vec__50913 = p__50912;
var k = cljs.core.nth.call(null,vec__50913,(0),null);
var v = cljs.core.nth.call(null,vec__50913,(1),null);
if(cljs.core.truth_((function (){var or__30072__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__50858_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__50858_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__50918 = cljs.core.PersistentVector.EMPTY;
var G__50918__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__50918,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__50918);
var G__50918__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__50918__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__50918__$1);
var G__50918__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__50918__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__50918__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__50918__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__50918__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"p__50859","p__50859",401798703,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"map__50860","map__50860",-1452773614,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta50865","meta50865",-875906003,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha50864.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha50864.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha50864";

cljs.spec.alpha.t_cljs$spec$alpha50864.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha50864");
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha50864 = ((function (k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha50864(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__50859__$1,req_specs__$1,map__50860__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta50865){
return (new cljs.spec.alpha.t_cljs$spec$alpha50864(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__50859__$1,req_specs__$1,map__50860__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta50865));
});})(k__GT_s,keys__GT_specnames,id,map__50860,map__50860__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha50864(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,p__50859,req_specs,map__50860__$1,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__51054 = arguments.length;
switch (G__51054) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
var G__51055 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__51055,gfn);
} else {
return G__51055;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__51056 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__51056,gfn);
} else {
return G__51056;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51057 = (function (form,pred,gfn,cpred_QMARK_,unc,meta51058){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta51058 = meta51058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51059,meta51058__$1){
var self__ = this;
var _51059__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51057(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta51058__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51059){
var self__ = this;
var _51059__$1 = this;
return self__.meta51058;
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha51057.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha51057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta51058","meta51058",20199115,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha51057.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51057.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51057";

cljs.spec.alpha.t_cljs$spec$alpha51057.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51057");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha51057 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha51057(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta51058){
return (new cljs.spec.alpha.t_cljs$spec$alpha51057(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta51058));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51057(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__51074 = arguments.length;
switch (G__51074) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__51068_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__30060__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__51068_SHARP_));
if(cljs.core.truth_(and__30060__auto__)){
return mm.call(null,p1__51068_SHARP_);
} else {
return and__30060__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__51069_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__51069_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__51070_SHARP_,p2__51071_SHARP_){
return cljs.core.assoc.call(null,p1__51070_SHARP_,retag,p2__51071_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51075 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta51076){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta51076 = meta51076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_51077,meta51076__$1){
var self__ = this;
var _51077__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51075(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta51076__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_51077){
var self__ = this;
var _51077__$1 = this;
return self__.meta51076;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5276__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5276__auto__)){
var pred = temp__5276__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5276__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5276__auto__)){
var pred = temp__5276__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__5276__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5276__auto__)){
var pred = temp__5276__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__51090){
var vec__51091 = p__51090;
var k = cljs.core.nth.call(null,vec__51091,(0),null);
var f = cljs.core.nth.call(null,vec__51091,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__51091,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__51091,k,f,___$1,id,predx,dval,tag){
return (function (p1__51072_SHARP_){
return self__.tag.call(null,p1__51072_SHARP_,k);
});})(rmap__$1,p,vec__51091,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__31026__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__31026__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto____$1);
})(),x__31026__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__51091,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__51095){
var vec__51097 = p__51095;
var k = cljs.core.nth.call(null,vec__51097,(0),null);
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null)),(function (){var x__31026__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),(function (){var x__31026__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta51076","meta51076",-209930837,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha51075.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51075.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51075";

cljs.spec.alpha.t_cljs$spec$alpha51075.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51075");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51075 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha51075(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta51076){
return (new cljs.spec.alpha.t_cljs$spec$alpha51075(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta51076));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51075(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__51183 = arguments.length;
switch (G__51183) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51185 = (function (forms,preds,gfn,specs,cnt,meta51186){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta51186 = meta51186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_51187,meta51186__$1){
var self__ = this;
var _51187__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51185(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta51186__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_51187){
var self__ = this;
var _51187__$1 = this;
return self__.meta51186;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__51215 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__51216 = (i + (1));
ret = G__51215;
i = G__51216;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
var G__51217 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__51218 = (i + (1));
ret = G__51217;
i = G__51218;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__31026__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),(function (){var x__31026__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta51186","meta51186",2123713693,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha51185.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51185.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51185";

cljs.spec.alpha.t_cljs$spec$alpha51185.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51185");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51185 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha51185(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta51186){
return (new cljs.spec.alpha.t_cljs$spec$alpha51185(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta51186));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51185(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
var x51236 = v;
x51236.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x51236.cljs$core$IMapEntry$_key$arity$1 = ((function (x51236){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x51236))
;

x51236.cljs$core$IMapEntry$_val$arity$1 = ((function (x51236){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x51236))
;

return x51236;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__51239 = cljs.core.count.call(null,preds);
switch (G__51239) {
case (2):
return ((function (G__51239,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__51239,id,kps,specs))

break;
case (3):
return ((function (G__51239,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(2)),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__51239,id,kps,specs))

break;
default:
return ((function (G__51239,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var G__51262 = (i + (1));
i = G__51262;
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
;})(G__51239,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51243 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta51244){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta51244 = meta51244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_51245,meta51244__$1){
var self__ = this;
var _51245__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51243(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta51244__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_51245){
var self__ = this;
var _51245__$1 = this;
return self__.meta51244;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__51252){
var self__ = this;
var vec__51253 = p__51252;
var k = cljs.core.nth.call(null,vec__51253,(0),null);
var x = cljs.core.nth.call(null,vec__51253,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta51244","meta51244",-225552381,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51243.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51243.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51243";

cljs.spec.alpha.t_cljs$spec$alpha51243.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51243");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51243 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha51243(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta51244){
return (new cljs.spec.alpha.t_cljs$spec$alpha51243(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta51244));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51243(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__51284 = preds;
var vec__51286 = G__51284;
var seq__51287 = cljs.core.seq.call(null,vec__51286);
var first__51288 = cljs.core.first.call(null,seq__51287);
var seq__51287__$1 = cljs.core.next.call(null,seq__51287);
var pred = first__51288;
var preds__$1 = seq__51287__$1;
var G__51285 = forms;
var vec__51289 = G__51285;
var seq__51290 = cljs.core.seq.call(null,vec__51289);
var first__51291 = cljs.core.first.call(null,seq__51290);
var seq__51290__$1 = cljs.core.next.call(null,seq__51290);
var form = first__51291;
var forms__$1 = seq__51290__$1;
var ret__$1 = ret;
var G__51284__$1 = G__51284;
var G__51285__$1 = G__51285;
while(true){
var ret__$2 = ret__$1;
var vec__51292 = G__51284__$1;
var seq__51293 = cljs.core.seq.call(null,vec__51292);
var first__51294 = cljs.core.first.call(null,seq__51293);
var seq__51293__$1 = cljs.core.next.call(null,seq__51293);
var pred__$1 = first__51294;
var preds__$2 = seq__51293__$1;
var vec__51295 = G__51285__$1;
var seq__51296 = cljs.core.seq.call(null,vec__51295);
var first__51297 = cljs.core.first.call(null,seq__51296);
var seq__51296__$1 = cljs.core.next.call(null,seq__51296);
var form__$1 = first__51297;
var forms__$2 = seq__51296__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__51313 = nret;
var G__51314 = preds__$2;
var G__51315 = forms__$2;
ret__$1 = G__51313;
G__51284__$1 = G__51314;
G__51285__$1 = G__51315;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__51322 = forms;
var vec__51324 = G__51322;
var seq__51325 = cljs.core.seq.call(null,vec__51324);
var first__51326 = cljs.core.first.call(null,seq__51325);
var seq__51325__$1 = cljs.core.next.call(null,seq__51325);
var form = first__51326;
var forms__$1 = seq__51325__$1;
var G__51323 = preds;
var vec__51327 = G__51323;
var seq__51328 = cljs.core.seq.call(null,vec__51327);
var first__51329 = cljs.core.first.call(null,seq__51328);
var seq__51328__$1 = cljs.core.next.call(null,seq__51328);
var pred = first__51329;
var preds__$1 = seq__51328__$1;
var ret__$1 = ret;
var G__51322__$1 = G__51322;
var G__51323__$1 = G__51323;
while(true){
var ret__$2 = ret__$1;
var vec__51330 = G__51322__$1;
var seq__51331 = cljs.core.seq.call(null,vec__51330);
var first__51332 = cljs.core.first.call(null,seq__51331);
var seq__51331__$1 = cljs.core.next.call(null,seq__51331);
var form__$1 = first__51332;
var forms__$2 = seq__51331__$1;
var vec__51333 = G__51323__$1;
var seq__51334 = cljs.core.seq.call(null,vec__51333);
var first__51335 = cljs.core.first.call(null,seq__51334);
var seq__51334__$1 = cljs.core.next.call(null,seq__51334);
var pred__$1 = first__51335;
var preds__$2 = seq__51334__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__51336 = nret;
var G__51337 = forms__$2;
var G__51338 = preds__$2;
ret__$1 = G__51336;
G__51322__$1 = G__51337;
G__51323__$1 = G__51338;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__51341 = cljs.core.count.call(null,preds);
switch (G__51341) {
case (2):
return ((function (G__51341,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__51341,specs))

break;
case (3):
return ((function (G__51341,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__51341,specs))

break;
default:
return ((function (G__51341,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__51360 = nret;
var G__51361 = (i + (1));
ret = G__51360;
i = G__51361;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__51341,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51342 = (function (forms,preds,gfn,specs,cform,meta51343){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta51343 = meta51343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_51344,meta51343__$1){
var self__ = this;
var _51344__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51342(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta51343__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_51344){
var self__ = this;
var _51344__$1 = this;
return self__.meta51343;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__51340_SHARP_,p2__51339_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__51339_SHARP_,p1__51340_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta51343","meta51343",-607876197,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha51342.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51342.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51342";

cljs.spec.alpha.t_cljs$spec$alpha51342.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51342");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51342 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha51342(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta51343){
return (new cljs.spec.alpha.t_cljs$spec$alpha51342(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta51343));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51342(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__30072__auto__ = kfn;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__30072__auto__ = kform;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = count;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__30060__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__31026__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),(function (){var x__31026__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = (function (){var or__30072__auto__ = min_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__30060__auto__)){
return !((((function (){var or__30072__auto__ = min_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__30072__auto__ = max_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__30060__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__31026__auto__ = (function (){var or__30072__auto__ = min_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),(function (){var x__31026__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),(function (){var x__31026__auto__ = (function (){var or__30072__auto__ = max_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = distinct;
if(cljs.core.truth_(and__30060__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__30060__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51382 = (function (forms,preds,gfn,meta51383){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta51383 = meta51383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51384,meta51383__$1){
var self__ = this;
var _51384__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51382(self__.forms,self__.preds,self__.gfn,meta51383__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51384){
var self__ = this;
var _51384__$1 = this;
return self__.meta51383;
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__51374_SHARP_,p2__51375_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__51374_SHARP_,x,p2__51375_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__51376_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__51376_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__51377_SHARP_,p2__51378_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__51377_SHARP_,p2__51378_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
return (function (p1__51379_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__51379_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__51380_SHARP_,p2__51381_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__51380_SHARP_,overrides,path,rmap,p2__51381_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha51382.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha51382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta51383","meta51383",-1313495184,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha51382.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51382.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51382";

cljs.spec.alpha.t_cljs$spec$alpha51382.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51382");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha51382 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha51382(forms__$1,preds__$1,gfn__$1,meta51383){
return (new cljs.spec.alpha.t_cljs$spec$alpha51382(forms__$1,preds__$1,gfn__$1,meta51383));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51382(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__51397 = arguments.length;
switch (G__51397) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__51398,gfn){
var map__51399 = p__51398;
var map__51399__$1 = ((((!((map__51399 == null)))?((((map__51399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51399):map__51399);
var opts = map__51399__$1;
var max_count = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var gen_into = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var count = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__51399__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(conform_into,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__51391_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__51391_SHARP_);
});})(conform_into,spec,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__30072__auto__ = kfn;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return ((function (or__30072__auto__,conform_into,spec,check_QMARK_,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__30072__auto__,conform_into,spec,check_QMARK_,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__30060__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__30060__auto__){
var or__30072__auto__ = (function (){var and__30060__auto____$1 = kind;
if(cljs.core.truth_(and__30060__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__30060__auto____$1;
}
})();
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__30060__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__51393_SHARP_){
return cljs.core.empty.call(null,(function (){var or__30072__auto__ = conform_into;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p1__51393_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51406 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,p__51398,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,map__51399,conform_all,conform_into,meta51407){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.p__51398 = p__51398;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.map__51399 = map__51399;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta51407 = meta51407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_51408,meta51407__$1){
var self__ = this;
var _51408__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51406(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.p__51398,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.map__51399,self__.conform_all,self__.conform_into,meta51407__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_51408){
var self__ = this;
var _51408__$1 = this;
return self__.meta51407;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__51414 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__51414,(0),null);
var add = cljs.core.nth.call(null,vec__51414,(1),null);
var complete = cljs.core.nth.call(null,vec__51414,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__51420 = cljs.core.seq.call(null,x);
var vec__51421 = G__51420;
var seq__51422 = cljs.core.seq.call(null,vec__51421);
var first__51423 = cljs.core.first.call(null,seq__51422);
var seq__51422__$1 = cljs.core.next.call(null,seq__51422);
var v = first__51423;
var vs = seq__51422__$1;
var vseq = vec__51421;
var ret__$1 = ret;
var i__$1 = i;
var G__51420__$1 = G__51420;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__51427 = G__51420__$1;
var seq__51428 = cljs.core.seq.call(null,vec__51427);
var first__51429 = cljs.core.first.call(null,seq__51428);
var seq__51428__$1 = cljs.core.next.call(null,seq__51428);
var v__$1 = first__51429;
var vs__$1 = seq__51428__$1;
var vseq__$1 = vec__51427;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__51518 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__51519 = (i__$2 + (1));
var G__51520 = vs__$1;
ret__$1 = G__51518;
i__$1 = G__51519;
G__51420__$1 = G__51520;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__30424__auto__ = (1);
var y__30425__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__51521 = (i + step);
i = G__51521;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__51435 = cljs.core.seq.call(null,x);
var vec__51436 = G__51435;
var seq__51437 = cljs.core.seq.call(null,vec__51436);
var first__51438 = cljs.core.first.call(null,seq__51437);
var seq__51437__$1 = cljs.core.next.call(null,seq__51437);
var v = first__51438;
var vs = seq__51437__$1;
var vseq = vec__51436;
var i__$1 = i;
var G__51435__$1 = G__51435;
while(true){
var i__$2 = i__$1;
var vec__51439 = G__51435__$1;
var seq__51440 = cljs.core.seq.call(null,vec__51439);
var first__51441 = cljs.core.first.call(null,seq__51440);
var seq__51440__$1 = cljs.core.next.call(null,seq__51440);
var v__$1 = first__51441;
var vs__$1 = seq__51440__$1;
var vseq__$1 = vec__51439;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__51522 = (i__$2 + (1));
var G__51523 = vs__$1;
i__$1 = G__51522;
G__51435__$1 = G__51523;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__51442 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__51442,(0),null);
var add = cljs.core.nth.call(null,vec__51442,(1),null);
var complete = cljs.core.nth.call(null,vec__51442,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__51448 = cljs.core.seq.call(null,x);
var vec__51449 = G__51448;
var seq__51450 = cljs.core.seq.call(null,vec__51449);
var first__51451 = cljs.core.first.call(null,seq__51450);
var seq__51450__$1 = cljs.core.next.call(null,seq__51450);
var v = first__51451;
var vs = seq__51450__$1;
var vseq = vec__51449;
var ret__$1 = ret;
var i__$1 = i;
var G__51448__$1 = G__51448;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__51452 = G__51448__$1;
var seq__51453 = cljs.core.seq.call(null,vec__51452);
var first__51454 = cljs.core.first.call(null,seq__51453);
var seq__51453__$1 = cljs.core.next.call(null,seq__51453);
var v__$1 = first__51454;
var vs__$1 = seq__51453__$1;
var vseq__$1 = vec__51452;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__51524 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__51525 = (i__$2 + (1));
var G__51526 = vs__$1;
ret__$1 = G__51524;
i__$1 = G__51525;
G__51448__$1 = G__51526;
continue;
}
break;
}
} else {
return x;
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__30072__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__30072__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__30072__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__51394_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__51394_SHARP_)){
return p1__51394_SHARP_;
} else {
return cljs.core.empty.call(null,p1__51394_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__51395_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__51395_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__51395_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__30072__auto__ = self__.min_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__30072__auto__ = self__.max_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var x__30424__auto__ = self__.gen_max;
var y__30425__auto__ = ((2) * (function (){var or__30072__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return (0);
}
})());
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__30072__auto__ = self__.min_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__30072__auto__ = self__.min_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (0);
}
})(),(function (){var or__30072__auto__ = self__.max_count;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var x__30424__auto__ = self__.gen_max;
var y__30425__auto__ = ((2) * (function (){var or__30072__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return (0);
}
})());
return ((x__30424__auto__ > y__30425__auto__) ? x__30424__auto__ : y__30425__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__30072__auto__ = self__.describe_form;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null)),(function (){var x__31026__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"p__51398","p__51398",1588945745,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"map__51399","map__51399",-577571044,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta51407","meta51407",-916609305,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha51406.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51406.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51406";

cljs.spec.alpha.t_cljs$spec$alpha51406.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51406");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51406 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha51406(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,p__51398__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,map__51399__$2,conform_all__$1,conform_into__$1,meta51407){
return (new cljs.spec.alpha.t_cljs$spec$alpha51406(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,p__51398__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,map__51399__$2,conform_all__$1,conform_into__$1,meta51407));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__51399,map__51399__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51406(form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,p__51398,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,map__51399__$1,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__51537){
var map__51538 = p__51537;
var map__51538__$1 = ((((!((map__51538 == null)))?((((map__51538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51538):map__51538);
var op = cljs.core.get.call(null,map__51538__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__51540){
var map__51541 = p__51540;
var map__51541__$1 = ((((!((map__51541 == null)))?((((map__51541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51541):map__51541);
var vec__51542 = cljs.core.get.call(null,map__51541__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__51543 = cljs.core.seq.call(null,vec__51542);
var first__51544 = cljs.core.first.call(null,seq__51543);
var seq__51543__$1 = cljs.core.next.call(null,seq__51543);
var p1 = first__51544;
var pr = seq__51543__$1;
var ps = vec__51542;
var vec__51545 = cljs.core.get.call(null,map__51541__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__51546 = cljs.core.seq.call(null,vec__51545);
var first__51547 = cljs.core.first.call(null,seq__51546);
var seq__51546__$1 = cljs.core.next.call(null,seq__51546);
var k1 = first__51547;
var kr = seq__51546__$1;
var ks = vec__51545;
var vec__51548 = cljs.core.get.call(null,map__51541__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__51549 = cljs.core.seq.call(null,vec__51548);
var first__51550 = cljs.core.first.call(null,seq__51549);
var seq__51549__$1 = cljs.core.next.call(null,seq__51549);
var f1 = first__51550;
var fr = seq__51549__$1;
var forms = vec__51548;
var ret = cljs.core.get.call(null,map__51541__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__51541__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51553 = arguments.length;
var i__31350__auto___51554 = (0);
while(true){
if((i__31350__auto___51554 < len__31349__auto___51553)){
args__31356__auto__.push((arguments[i__31350__auto___51554]));

var G__51555 = (i__31350__auto___51554 + (1));
i__31350__auto___51554 = G__51555;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq51552){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51552));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31026__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),(function (){var x__31026__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(function (){var x__31026__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__30072__auto__ = ks;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__51556_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__51556_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__30072__auto__ = cljs.core.seq.call(null,ks);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__30072__auto__ = cljs.core.seq.call(null,forms);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__51557_SHARP_){
return cljs.core.nth.call(null,p1__51557_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__51562 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__51565 = cljs.core.nth.call(null,vec__51562,(0),null);
var seq__51566 = cljs.core.seq.call(null,vec__51565);
var first__51567 = cljs.core.first.call(null,seq__51566);
var seq__51566__$1 = cljs.core.next.call(null,seq__51566);
var p1 = first__51567;
var pr = seq__51566__$1;
var ps__$1 = vec__51565;
var vec__51568 = cljs.core.nth.call(null,vec__51562,(1),null);
var k1 = cljs.core.nth.call(null,vec__51568,(0),null);
var ks__$1 = vec__51568;
var forms__$1 = cljs.core.nth.call(null,vec__51562,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p1))){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__31356__auto__ = [];
var len__31349__auto___51580 = arguments.length;
var i__31350__auto___51581 = (0);
while(true){
if((i__31350__auto___51581 < len__31349__auto___51580)){
args__31356__auto__.push((arguments[i__31350__auto___51581]));

var G__51582 = (i__31350__auto___51581 + (1));
i__31350__auto___51581 = G__51582;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((0) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__31357__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq51575){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51575));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__30060__auto__ = p1;
if(cljs.core.truth_(and__30060__auto__)){
return p2;
} else {
return and__30060__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__30072__auto__ = p1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__30072__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__30072__auto__){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = (function (){var and__30060__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__30060__auto__;
}
})();
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__51583 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51583__$1 = ((((!((map__51583 == null)))?((((map__51583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51583):map__51583);
var p__$1 = map__51583__$1;
var op = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__51585 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51585)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__51585)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51585)){
var and__30060__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__30060__auto__)){
var or__30072__auto__ = cljs.spec.alpha.noret_QMARK_.call(null,p1,cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,ret));
}
} else {
return and__30060__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51585)){
var or__30072__auto__ = (p1 === p2);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51585)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51585)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51585)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__51607 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51607__$1 = ((((!((map__51607 == null)))?((((map__51607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51607):map__51607);
var p__$1 = map__51607__$1;
var vec__51608 = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__51609 = cljs.core.seq.call(null,vec__51608);
var first__51610 = cljs.core.first.call(null,seq__51609);
var seq__51609__$1 = cljs.core.next.call(null,seq__51609);
var p0 = first__51610;
var pr = seq__51609__$1;
var ps = vec__51608;
var vec__51611 = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__51611,(0),null);
var ks = vec__51611;
var op = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__51615 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51615)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__51615)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51615)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51615)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51615)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51615)){
var vec__51616 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__51619 = cljs.core.nth.call(null,vec__51616,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__51619,(0),null);
var vec__51622 = cljs.core.nth.call(null,vec__51616,(1),null);
var k0 = cljs.core.nth.call(null,vec__51622,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51615)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__51642 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51642__$1 = ((((!((map__51642 == null)))?((((map__51642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51642):map__51642);
var p__$1 = map__51642__$1;
var vec__51643 = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__51644 = cljs.core.seq.call(null,vec__51643);
var first__51645 = cljs.core.first.call(null,seq__51644);
var seq__51644__$1 = cljs.core.next.call(null,seq__51644);
var p0 = first__51645;
var pr = seq__51644__$1;
var ps = vec__51643;
var vec__51646 = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__51646,(0),null);
var ks = vec__51646;
var op = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__51650 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51650)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__51650)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51650)){
var px = cljs.core.reduce.call(null,((function (G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__51639_SHARP_,p2__51638_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__51638_SHARP_,p1__51639_SHARP_);
});})(G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51650)){
return cljs.core.mapcat.call(null,((function (G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__51640_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__51640_SHARP_);
});})(G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51650)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__51641_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__51641_SHARP_);
});})(G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__51650,map__51642,map__51642__$1,p__$1,vec__51643,seq__51644,first__51645,seq__51644__$1,p0,pr,ps,vec__51646,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51650)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__51651 = x;
var k__$1 = cljs.core.nth.call(null,vec__51651,(0),null);
var v = cljs.core.nth.call(null,vec__51651,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51650)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__51657 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51657__$1 = ((((!((map__51657 == null)))?((((map__51657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51657):map__51657);
var p__$1 = map__51657__$1;
var op = cljs.core.get.call(null,map__51657__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__51657__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__51657__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__51657,map__51657__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__51657,map__51657__$1,p__$1,op,ps,splice))
;
var G__51659 = op;
if(cljs.core._EQ_.call(null,null,G__51659)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51659)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51659)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51659)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51659)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51659)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51659)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__51671 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51671__$1 = ((((!((map__51671 == null)))?((((map__51671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51671):map__51671);
var p__$1 = map__51671__$1;
var vec__51672 = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__51673 = cljs.core.seq.call(null,vec__51672);
var first__51674 = cljs.core.first.call(null,seq__51673);
var seq__51673__$1 = cljs.core.next.call(null,seq__51673);
var p0 = first__51674;
var pr = seq__51673__$1;
var ps = vec__51672;
var vec__51675 = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__51676 = cljs.core.seq.call(null,vec__51675);
var first__51677 = cljs.core.first.call(null,seq__51676);
var seq__51676__$1 = cljs.core.next.call(null,seq__51676);
var k0 = first__51677;
var kr = seq__51676__$1;
var ks = vec__51675;
var op = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__51679 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51679)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__51679)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51679)){
var temp__5278__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5278__auto__)){
var p1__$1 = temp__5278__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51679)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51679)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__51679,map__51671,map__51671__$1,p__$1,vec__51672,seq__51673,first__51674,seq__51673__$1,p0,pr,ps,vec__51675,seq__51676,first__51677,seq__51676__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__51670_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__51670_SHARP_,x);
});})(G__51679,map__51671,map__51671__$1,p__$1,vec__51672,seq__51673,first__51674,seq__51673__$1,p0,pr,ps,vec__51675,seq__51676,first__51677,seq__51676__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51679)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51679)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__51689 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51689__$1 = ((((!((map__51689 == null)))?((((map__51689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51689):map__51689);
var p__$1 = map__51689__$1;
var op = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__51689__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__51697 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51697)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__51697)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51697)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),cljs.spec.alpha.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51697)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__31026__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__30072__auto__ = cljs.core.seq.call(null,ks);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51697)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__31026__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51697)){
var x__31026__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null));
return cljs.core._conj.call(null,(function (){var x__31026__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto____$1);
})(),x__31026__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51697)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__51699 = input;
var x = cljs.core.nth.call(null,vec__51699,(0),null);
var input__$1 = vec__51699;
var map__51702 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51702__$1 = ((((!((map__51702 == null)))?((((map__51702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51702):map__51702);
var p__$1 = map__51702__$1;
var op = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__51702__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5276__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__51699,x,input__$1,map__51702,map__51702__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__51699,x,input__$1,map__51702,map__51702__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__51707 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51707)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__51707)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51707)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p1));
}
} else {
var temp__5276__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5276__auto__)){
var p1__$1 = temp__5276__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51707)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__30072__auto__ = cljs.core.seq.call(null,ks);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__30072__auto__ = cljs.core.seq.call(null,forms);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__51708 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__51707,vec__51699,x,input__$1,map__51702,map__51702__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__51715){
var vec__51716 = p__51715;
var p__$2 = cljs.core.nth.call(null,vec__51716,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__51707,vec__51699,x,input__$1,map__51702,map__51702__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__51708,(0),null);
var k = cljs.core.nth.call(null,vec__51708,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__51708,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__30072__auto__ = form__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51707)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__51707,vec__51699,x,input__$1,map__51702,map__51702__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__30072__auto__ = form__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__51707,vec__51699,x,input__$1,map__51702,map__51702__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__30072__auto__ = cljs.core.seq.call(null,ks);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__30072__auto__ = cljs.core.seq.call(null,forms);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51707)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51707)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__51748 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__51748__$1 = ((((!((map__51748 == null)))?((((map__51748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51748):map__51748);
var p__$1 = map__51748__$1;
var ps = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__30060__auto__ = rmap__$1;
if(cljs.core.truth_(and__30060__auto__)){
var and__30060__auto____$1 = id;
if(cljs.core.truth_(and__30060__auto____$1)){
var and__30060__auto____$2 = k;
if(cljs.core.truth_(and__30060__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__30060__auto____$2;
}
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__30072__auto__ = f__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p__$2;
}
})());
});})(map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__30072__auto__ = f__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__30072__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__30072__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__30072__auto__ = (function (){var temp__5278__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5278__auto__)){
var g = temp__5278__auto__;
var G__51754 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__51754)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__51754)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__51757 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__51757)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__51757)){
var temp__5278__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5278__auto__)){
var g = temp__5278__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__51757)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__51757)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__51757)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__51757)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5278__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5278__auto__)){
var g = temp__5278__auto__;
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5278__auto__,G__51757,or__30072__auto____$1,or__30072__auto__,map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__51747_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__51747_SHARP_);
});})(g,temp__5278__auto__,G__51757,or__30072__auto____$1,or__30072__auto__,map__51748,map__51748__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51757)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__51768){
while(true){
var vec__51769 = p__51768;
var seq__51770 = cljs.core.seq.call(null,vec__51769);
var first__51771 = cljs.core.first.call(null,seq__51770);
var seq__51770__$1 = cljs.core.next.call(null,seq__51770);
var x = first__51771;
var xs = seq__51770__$1;
var data = vec__51769;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5276__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__5276__auto__)){
var dp = temp__5276__auto__;
var G__51772 = dp;
var G__51773 = xs;
p = G__51772;
p__51768 = G__51773;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__51777 = input;
var vec__51778 = G__51777;
var seq__51779 = cljs.core.seq.call(null,vec__51778);
var first__51780 = cljs.core.first.call(null,seq__51779);
var seq__51779__$1 = cljs.core.next.call(null,seq__51779);
var x = first__51780;
var xs = seq__51779__$1;
var data = vec__51778;
var i = (0);
var p__$1 = p;
var G__51777__$1 = G__51777;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__51787 = G__51777__$1;
var seq__51788 = cljs.core.seq.call(null,vec__51787);
var first__51789 = cljs.core.first.call(null,seq__51788);
var seq__51788__$1 = cljs.core.next.call(null,seq__51788);
var x__$1 = first__51789;
var xs__$1 = seq__51788__$1;
var data__$1 = vec__51787;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5276__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var dp = temp__5276__auto__;
var G__51800 = dp;
var G__51801 = xs__$1;
var G__51802 = (i__$2 + (1));
p__$1 = G__51800;
G__51777__$1 = G__51801;
i__$1 = G__51802;
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__30072__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51805 = (function (re,gfn,meta51806){
this.re = re;
this.gfn = gfn;
this.meta51806 = meta51806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51807,meta51806__$1){
var self__ = this;
var _51807__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51805(self__.re,self__.gfn,meta51806__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51807){
var self__ = this;
var _51807__$1 = this;
return self__.meta51806;
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,self__.re),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha51805.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha51805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta51806","meta51806",1576754619,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha51805.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51805.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51805";

cljs.spec.alpha.t_cljs$spec$alpha51805.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51805");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha51805 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha51805(re__$1,gfn__$1,meta51806){
return (new cljs.spec.alpha.t_cljs$spec$alpha51805(re__$1,gfn__$1,meta51806));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51805(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__30060__auto__ = cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cret));
if(and__30060__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__30060__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__51838_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__51838_SHARP_);
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5276__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5276__auto__)){
var vec__51841 = temp__5276__auto__;
var smallest = cljs.core.nth.call(null,vec__51841,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha51856 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta51857){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta51857 = meta51857;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_51858,meta51857__$1){
var self__ = this;
var _51858__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51856(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta51857__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_51858){
var self__ = this;
var _51858__$1 = this;
return self__.meta51857;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e51859){if((e51859 instanceof Error)){
var t = e51859;
return t;
} else {
throw e51859;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cret))){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
var G__51883__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51862_51885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51863_51886 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51862_51885,_STAR_print_fn_STAR_51863_51886,sb__31197__auto__,___$3,specs){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_51862_51885,_STAR_print_fn_STAR_51863_51886,sb__31197__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51863_51886;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51862_51885;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__51883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51890__i = 0, G__51890__a = new Array(arguments.length -  0);
while (G__51890__i < G__51890__a.length) {G__51890__a[G__51890__i] = arguments[G__51890__i + 0]; ++G__51890__i;}
  args = new cljs.core.IndexedSeq(G__51890__a,0,null);
} 
return G__51883__delegate.call(this,args);};
G__51883.cljs$lang$maxFixedArity = 0;
G__51883.cljs$lang$applyTo = (function (arglist__51892){
var args = cljs.core.seq(arglist__51892);
return G__51883__delegate(args);
});
G__51883.cljs$core$IFn$_invoke$arity$variadic = G__51883__delegate;
return G__51883;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__31026__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__31026__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__31026__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta51857","meta51857",958942196,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha51856.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51856.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51856";

cljs.spec.alpha.t_cljs$spec$alpha51856.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51856");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51856 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha51856(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta51857){
return (new cljs.spec.alpha.t_cljs$spec$alpha51856(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta51857));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51856(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__51908#","p1__51908#",-83754355,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__51908#","p1__51908#",-83754355,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__51908#","p1__51908#",-83754355,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__51909#","p1__51909#",-147007394,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__51909#","p1__51909#",-147007394,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__51908_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__51908_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__51908_SHARP_));
}),null,true,(function (p1__51909_SHARP_){
return cljs.core.map.call(null,(function (p__51910){
var vec__51911 = p__51910;
var k = cljs.core.nth.call(null,vec__51911,(0),null);
var v = cljs.core.nth.call(null,vec__51911,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__51909_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51919 = (function (spec,meta51920){
this.spec = spec;
this.meta51920 = meta51920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_51921,meta51920__$1){
var self__ = this;
var _51921__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51919(self__.spec,meta51920__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_51921){
var self__ = this;
var _51921__$1 = this;
return self__.meta51920;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null)),(function (){var x__31026__auto__ = cljs.spec.alpha.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta51920","meta51920",585953271,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha51919.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51919.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51919";

cljs.spec.alpha.t_cljs$spec$alpha51919.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51919");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51919 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha51919(spec__$2,meta51920){
return (new cljs.spec.alpha.t_cljs$spec$alpha51919(spec__$2,meta51920));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51919(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.call(null,pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha51941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha51941 = (function (form,pred,gfn,spec,meta51942){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta51942 = meta51942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_51943,meta51942__$1){
var self__ = this;
var _51943__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha51941(self__.form,self__.pred,self__.gfn,self__.spec,meta51942__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_51943){
var self__ = this;
var _51943__$1 = this;
return self__.meta51942;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__30072__auto__ = cljs.spec.alpha.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null)),(function (){var x__31026__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta51942","meta51942",1156591473,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha51941.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha51941.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha51941";

cljs.spec.alpha.t_cljs$spec$alpha51941.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha51941");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha51941 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha51941(form__$1,pred__$1,gfn__$1,spec__$1,meta51942){
return (new cljs.spec.alpha.t_cljs$spec$alpha51941(form__$1,pred__$1,gfn__$1,spec__$1,meta51942));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha51941(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__51977 = arguments.length;
switch (G__51977) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__51970_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__51970_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__51970_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__30060__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__30060__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__30060__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__30060__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__30060__auto__)){
return val.lessThan(end);
} else {
return and__30060__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__30060__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__30060__auto__)){
return val.lessThan(end);
} else {
return and__30060__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51993_51998 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51994_51999 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51993_51998,_STAR_print_fn_STAR_51994_51999,sb__31197__auto__,ed){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_51993_51998,_STAR_print_fn_STAR_51994_51999,sb__31197__auto__,ed))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51994_51999;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51993_51998;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=alpha.js.map?rel=1510360406847
