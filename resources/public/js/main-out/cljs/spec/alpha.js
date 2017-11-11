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
var G__35774 = cljs.core.get.call(null,reg,spec);
spec = G__35774;
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
var G__35819 = arguments.length;
switch (G__35819) {
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
var G__35856 = null;
var G__35856__1 = (function (o){
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
});
var G__35856__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__35856 = function(o,form){
switch(arguments.length){
case 1:
return G__35856__1.call(this,o);
case 2:
return G__35856__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35856.cljs$core$IFn$_invoke$arity$1 = G__35856__1;
G__35856.cljs$core$IFn$_invoke$arity$2 = G__35856__2;
return G__35856;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__35859 = arguments.length;
switch (G__35859) {
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
var problems = cljs.core.sort_by.call(null,(function (p1__35876_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__35876_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.call(null,(function (){var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35880_35939 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35881_35940 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35880_35939,_STAR_print_fn_STAR_35881_35940,sb__31197__auto__,problems){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_35880_35939,_STAR_print_fn_STAR_35881_35940,sb__31197__auto__,problems))
;

try{var seq__35882_35941 = cljs.core.seq.call(null,problems);
var chunk__35883_35942 = null;
var count__35884_35943 = (0);
var i__35885_35944 = (0);
while(true){
if((i__35885_35944 < count__35884_35943)){
var map__35886_35945 = cljs.core._nth.call(null,chunk__35883_35942,i__35885_35944);
var map__35886_35946__$1 = ((((!((map__35886_35945 == null)))?((((map__35886_35945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35886_35945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35886_35945):map__35886_35945);
var prob_35947 = map__35886_35946__$1;
var path_35948 = cljs.core.get.call(null,map__35886_35946__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_35949 = cljs.core.get.call(null,map__35886_35946__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_35950 = cljs.core.get.call(null,map__35886_35946__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_35951 = cljs.core.get.call(null,map__35886_35946__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_35952 = cljs.core.get.call(null,map__35886_35946__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_35953 = cljs.core.get.call(null,map__35886_35946__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_35953)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_35953),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_35950);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_35952)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_35952)));
}

if(cljs.core.empty_QMARK_.call(null,path_35948)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_35948));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_35949));

if(cljs.core.truth_(reason_35951)){
cljs.core.print.call(null,", ",reason_35951);
} else {
}

var seq__35888_36025 = cljs.core.seq.call(null,prob_35947);
var chunk__35889_36026 = null;
var count__35890_36027 = (0);
var i__35891_36028 = (0);
while(true){
if((i__35891_36028 < count__35890_36027)){
var vec__35893_36031 = cljs.core._nth.call(null,chunk__35889_36026,i__35891_36028);
var k_36032 = cljs.core.nth.call(null,vec__35893_36031,(0),null);
var v_36033 = cljs.core.nth.call(null,vec__35893_36031,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_36032))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_36032)," ");

cljs.core.pr.call(null,v_36033);
}

var G__36043 = seq__35888_36025;
var G__36044 = chunk__35889_36026;
var G__36045 = count__35890_36027;
var G__36046 = (i__35891_36028 + (1));
seq__35888_36025 = G__36043;
chunk__35889_36026 = G__36044;
count__35890_36027 = G__36045;
i__35891_36028 = G__36046;
continue;
} else {
var temp__5278__auto___36048 = cljs.core.seq.call(null,seq__35888_36025);
if(temp__5278__auto___36048){
var seq__35888_36050__$1 = temp__5278__auto___36048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35888_36050__$1)){
var c__31003__auto___36052 = cljs.core.chunk_first.call(null,seq__35888_36050__$1);
var G__36053 = cljs.core.chunk_rest.call(null,seq__35888_36050__$1);
var G__36054 = c__31003__auto___36052;
var G__36055 = cljs.core.count.call(null,c__31003__auto___36052);
var G__36056 = (0);
seq__35888_36025 = G__36053;
chunk__35889_36026 = G__36054;
count__35890_36027 = G__36055;
i__35891_36028 = G__36056;
continue;
} else {
var vec__35896_36058 = cljs.core.first.call(null,seq__35888_36050__$1);
var k_36059 = cljs.core.nth.call(null,vec__35896_36058,(0),null);
var v_36060 = cljs.core.nth.call(null,vec__35896_36058,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_36059))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_36059)," ");

cljs.core.pr.call(null,v_36060);
}

var G__36067 = cljs.core.next.call(null,seq__35888_36050__$1);
var G__36068 = null;
var G__36069 = (0);
var G__36070 = (0);
seq__35888_36025 = G__36067;
chunk__35889_36026 = G__36068;
count__35890_36027 = G__36069;
i__35891_36028 = G__36070;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__36078 = seq__35882_35941;
var G__36079 = chunk__35883_35942;
var G__36080 = count__35884_35943;
var G__36081 = (i__35885_35944 + (1));
seq__35882_35941 = G__36078;
chunk__35883_35942 = G__36079;
count__35884_35943 = G__36080;
i__35885_35944 = G__36081;
continue;
} else {
var temp__5278__auto___36088 = cljs.core.seq.call(null,seq__35882_35941);
if(temp__5278__auto___36088){
var seq__35882_36092__$1 = temp__5278__auto___36088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35882_36092__$1)){
var c__31003__auto___36097 = cljs.core.chunk_first.call(null,seq__35882_36092__$1);
var G__36098 = cljs.core.chunk_rest.call(null,seq__35882_36092__$1);
var G__36099 = c__31003__auto___36097;
var G__36100 = cljs.core.count.call(null,c__31003__auto___36097);
var G__36101 = (0);
seq__35882_35941 = G__36098;
chunk__35883_35942 = G__36099;
count__35884_35943 = G__36100;
i__35885_35944 = G__36101;
continue;
} else {
var map__35899_36103 = cljs.core.first.call(null,seq__35882_36092__$1);
var map__35899_36104__$1 = ((((!((map__35899_36103 == null)))?((((map__35899_36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35899_36103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35899_36103):map__35899_36103);
var prob_36105 = map__35899_36104__$1;
var path_36106 = cljs.core.get.call(null,map__35899_36104__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_36107 = cljs.core.get.call(null,map__35899_36104__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_36108 = cljs.core.get.call(null,map__35899_36104__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_36109 = cljs.core.get.call(null,map__35899_36104__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_36110 = cljs.core.get.call(null,map__35899_36104__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_36111 = cljs.core.get.call(null,map__35899_36104__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_36111)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_36111),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_36108);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_36110)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_36110)));
}

if(cljs.core.empty_QMARK_.call(null,path_36106)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_36106));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_36107));

if(cljs.core.truth_(reason_36109)){
cljs.core.print.call(null,", ",reason_36109);
} else {
}

var seq__35914_36120 = cljs.core.seq.call(null,prob_36105);
var chunk__35915_36121 = null;
var count__35916_36122 = (0);
var i__35917_36123 = (0);
while(true){
if((i__35917_36123 < count__35916_36122)){
var vec__35919_36128 = cljs.core._nth.call(null,chunk__35915_36121,i__35917_36123);
var k_36129 = cljs.core.nth.call(null,vec__35919_36128,(0),null);
var v_36130 = cljs.core.nth.call(null,vec__35919_36128,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_36129))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_36129)," ");

cljs.core.pr.call(null,v_36130);
}

var G__36134 = seq__35914_36120;
var G__36135 = chunk__35915_36121;
var G__36136 = count__35916_36122;
var G__36137 = (i__35917_36123 + (1));
seq__35914_36120 = G__36134;
chunk__35915_36121 = G__36135;
count__35916_36122 = G__36136;
i__35917_36123 = G__36137;
continue;
} else {
var temp__5278__auto___36139__$1 = cljs.core.seq.call(null,seq__35914_36120);
if(temp__5278__auto___36139__$1){
var seq__35914_36141__$1 = temp__5278__auto___36139__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35914_36141__$1)){
var c__31003__auto___36146 = cljs.core.chunk_first.call(null,seq__35914_36141__$1);
var G__36147 = cljs.core.chunk_rest.call(null,seq__35914_36141__$1);
var G__36148 = c__31003__auto___36146;
var G__36149 = cljs.core.count.call(null,c__31003__auto___36146);
var G__36150 = (0);
seq__35914_36120 = G__36147;
chunk__35915_36121 = G__36148;
count__35916_36122 = G__36149;
i__35917_36123 = G__36150;
continue;
} else {
var vec__35923_36152 = cljs.core.first.call(null,seq__35914_36141__$1);
var k_36153 = cljs.core.nth.call(null,vec__35923_36152,(0),null);
var v_36154 = cljs.core.nth.call(null,vec__35923_36152,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_36153))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_36153)," ");

cljs.core.pr.call(null,v_36154);
}

var G__36184 = cljs.core.next.call(null,seq__35914_36141__$1);
var G__36185 = null;
var G__36186 = (0);
var G__36187 = (0);
seq__35914_36120 = G__36184;
chunk__35915_36121 = G__36185;
count__35916_36122 = G__36186;
i__35917_36123 = G__36187;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__36188 = cljs.core.next.call(null,seq__35882_36092__$1);
var G__36189 = null;
var G__36190 = (0);
var G__36191 = (0);
seq__35882_35941 = G__36188;
chunk__35883_35942 = G__36189;
count__35884_35943 = G__36190;
i__35885_35944 = G__36191;
continue;
}
} else {
}
}
break;
}

var seq__35926_36193 = cljs.core.seq.call(null,ed);
var chunk__35927_36194 = null;
var count__35928_36195 = (0);
var i__35929_36196 = (0);
while(true){
if((i__35929_36196 < count__35928_36195)){
var vec__35933_36197 = cljs.core._nth.call(null,chunk__35927_36194,i__35929_36196);
var k_36198 = cljs.core.nth.call(null,vec__35933_36197,(0),null);
var v_36199 = cljs.core.nth.call(null,vec__35933_36197,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_36198))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_36198)," ");

cljs.core.pr.call(null,v_36199);

cljs.core.newline.call(null);
}

var G__36201 = seq__35926_36193;
var G__36202 = chunk__35927_36194;
var G__36203 = count__35928_36195;
var G__36204 = (i__35929_36196 + (1));
seq__35926_36193 = G__36201;
chunk__35927_36194 = G__36202;
count__35928_36195 = G__36203;
i__35929_36196 = G__36204;
continue;
} else {
var temp__5278__auto___36205 = cljs.core.seq.call(null,seq__35926_36193);
if(temp__5278__auto___36205){
var seq__35926_36206__$1 = temp__5278__auto___36205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35926_36206__$1)){
var c__31003__auto___36207 = cljs.core.chunk_first.call(null,seq__35926_36206__$1);
var G__36208 = cljs.core.chunk_rest.call(null,seq__35926_36206__$1);
var G__36209 = c__31003__auto___36207;
var G__36210 = cljs.core.count.call(null,c__31003__auto___36207);
var G__36211 = (0);
seq__35926_36193 = G__36208;
chunk__35927_36194 = G__36209;
count__35928_36195 = G__36210;
i__35929_36196 = G__36211;
continue;
} else {
var vec__35936_36212 = cljs.core.first.call(null,seq__35926_36206__$1);
var k_36213 = cljs.core.nth.call(null,vec__35936_36212,(0),null);
var v_36214 = cljs.core.nth.call(null,vec__35936_36212,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_36213))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_36213)," ");

cljs.core.pr.call(null,v_36214);

cljs.core.newline.call(null);
}

var G__36220 = cljs.core.next.call(null,seq__35926_36206__$1);
var G__36221 = null;
var G__36222 = (0);
var G__36223 = (0);
seq__35926_36193 = G__36220;
chunk__35927_36194 = G__36221;
count__35928_36195 = G__36222;
i__35929_36196 = G__36223;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35881_35940;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35880_35939;
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
var _STAR_print_newline_STAR_36224_36227 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36225_36228 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36224_36227,_STAR_print_fn_STAR_36225_36228,sb__31197__auto__){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_36224_36227,_STAR_print_fn_STAR_36225_36228,sb__31197__auto__))
;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36225_36228;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36224_36227;
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
return (function (p1__36235_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__36235_SHARP_);
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
var G__36244 = arguments.length;
switch (G__36244) {
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
var _STAR_print_newline_STAR_36270_36277 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36271_36278 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36270_36277,_STAR_print_fn_STAR_36271_36278,sb__31197__auto__,ed,arg_spec,temp__5278__auto__,specs){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_36270_36277,_STAR_print_fn_STAR_36271_36278,sb__31197__auto__,ed,arg_spec,temp__5278__auto__,specs))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36271_36278;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36270_36277;
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
var G__36289 = arguments.length;
switch (G__36289) {
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
var G__36304 = arguments.length;
switch (G__36304) {
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
var G__36319 = arguments.length;
switch (G__36319) {
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
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__36372){
var map__36373 = p__36372;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var argm = map__36373__$1;
var opt = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__36332_SHARP_){
var or__30072__auto__ = k__GT_s.call(null,p1__36332_SHARP_);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p1__36332_SHARP_;
}
});})(k__GT_s,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha36381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha36381 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,p__36372,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,map__36373,req_keys,opt_specs,k__GT_s,pred_forms,meta36382){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.p__36372 = p__36372;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.map__36373 = map__36373;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta36382 = meta36382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_36383,meta36382__$1){
var self__ = this;
var _36383__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha36381(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.p__36372,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.map__36373,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta36382__$1));
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_36383){
var self__ = this;
var _36383__$1 = this;
return self__.meta36382;
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__36391 = m;
var vec__36392 = G__36391;
var seq__36393 = cljs.core.seq.call(null,vec__36392);
var first__36394 = cljs.core.first.call(null,seq__36393);
var seq__36393__$1 = cljs.core.next.call(null,seq__36393);
var vec__36395 = first__36394;
var k = cljs.core.nth.call(null,vec__36395,(0),null);
var v = cljs.core.nth.call(null,vec__36395,(1),null);
var ks = seq__36393__$1;
var keys = vec__36392;
var ret__$1 = ret;
var G__36391__$1 = G__36391;
while(true){
var ret__$2 = ret__$1;
var vec__36401 = G__36391__$1;
var seq__36402 = cljs.core.seq.call(null,vec__36401);
var first__36403 = cljs.core.first.call(null,seq__36402);
var seq__36402__$1 = cljs.core.next.call(null,seq__36402);
var vec__36404 = first__36403;
var k__$1 = cljs.core.nth.call(null,vec__36404,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__36404,(1),null);
var ks__$1 = seq__36402__$1;
var keys__$1 = vec__36401;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5276__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5276__auto__)){
var s = temp__5276__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__36483 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__36484 = ks__$1;
ret__$1 = G__36483;
G__36391__$1 = G__36484;
continue;
}
} else {
var G__36485 = ret__$2;
var G__36486 = ks__$1;
ret__$1 = G__36485;
G__36391__$1 = G__36486;
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
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__36420 = cljs.core.keys.call(null,m);
var vec__36421 = G__36420;
var seq__36422 = cljs.core.seq.call(null,vec__36421);
var first__36423 = cljs.core.first.call(null,seq__36422);
var seq__36422__$1 = cljs.core.next.call(null,seq__36422);
var k = first__36423;
var ks = seq__36422__$1;
var keys = vec__36421;
var ret__$1 = ret;
var G__36420__$1 = G__36420;
while(true){
var ret__$2 = ret__$1;
var vec__36425 = G__36420__$1;
var seq__36426 = cljs.core.seq.call(null,vec__36425);
var first__36427 = cljs.core.first.call(null,seq__36426);
var seq__36426__$1 = cljs.core.next.call(null,seq__36426);
var k__$1 = first__36427;
var ks__$1 = seq__36426__$1;
var keys__$1 = vec__36425;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__36490 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__36491 = ks__$1;
ret__$1 = G__36490;
G__36420__$1 = G__36491;
continue;
} else {
var G__36492 = ret__$2;
var G__36493 = ks__$1;
ret__$1 = G__36492;
G__36420__$1 = G__36493;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5278__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5278__auto__){
var probs = temp__5278__auto__;
return cljs.core.map.call(null,((function (probs,temp__5278__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__36346_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__36346_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5278__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__36434){
var vec__36435 = p__36434;
var k = cljs.core.nth.call(null,vec__36435,(0),null);
var v = cljs.core.nth.call(null,vec__36435,(1),null);
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
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__36370_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__36370_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__36446 = cljs.core.PersistentVector.EMPTY;
var G__36446__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__36446,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__36446);
var G__36446__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__36446__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__36446__$1);
var G__36446__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__36446__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__36446__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__36446__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__36446__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"p__36372","p__36372",-163386358,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"map__36373","map__36373",-853396420,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta36382","meta36382",1356888983,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha36381.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha36381.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha36381";

cljs.spec.alpha.t_cljs$spec$alpha36381.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha36381");
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha36381 = ((function (k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha36381(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,p__36372__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,map__36373__$2,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta36382){
return (new cljs.spec.alpha.t_cljs$spec$alpha36381(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,p__36372__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,map__36373__$2,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta36382));
});})(k__GT_s,keys__GT_specnames,id,map__36373,map__36373__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha36381(keys__GT_specnames,opt,req_un,opt_un,gfn,p__36372,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,map__36373__$1,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__36582 = arguments.length;
switch (G__36582) {
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
var G__36584 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__36584,gfn);
} else {
return G__36584;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__36585 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__36585,gfn);
} else {
return G__36585;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha36587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha36587 = (function (form,pred,gfn,cpred_QMARK_,unc,meta36588){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta36588 = meta36588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36589,meta36588__$1){
var self__ = this;
var _36589__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha36587(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta36588__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36589){
var self__ = this;
var _36589__$1 = this;
return self__.meta36588;
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
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

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
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

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha36587.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha36587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta36588","meta36588",441374178,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha36587.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha36587.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha36587";

cljs.spec.alpha.t_cljs$spec$alpha36587.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha36587");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha36587 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha36587(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta36588){
return (new cljs.spec.alpha.t_cljs$spec$alpha36587(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta36588));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha36587(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__36660 = arguments.length;
switch (G__36660) {
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
return (function (p1__36653_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__30060__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__36653_SHARP_));
if(cljs.core.truth_(and__30060__auto__)){
return mm.call(null,p1__36653_SHARP_);
} else {
return and__30060__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__36654_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__36654_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__36655_SHARP_,p2__36656_SHARP_){
return cljs.core.assoc.call(null,p1__36655_SHARP_,retag,p2__36656_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha36663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha36663 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta36664){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta36664 = meta36664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_36665,meta36664__$1){
var self__ = this;
var _36665__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha36663(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta36664__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_36665){
var self__ = this;
var _36665__$1 = this;
return self__.meta36664;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__36671){
var vec__36672 = p__36671;
var k = cljs.core.nth.call(null,vec__36672,(0),null);
var f = cljs.core.nth.call(null,vec__36672,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__36672,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__36672,k,f,___$1,id,predx,dval,tag){
return (function (p1__36657_SHARP_){
return self__.tag.call(null,p1__36657_SHARP_,k);
});})(rmap__$1,p,vec__36672,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__31026__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__31026__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto____$1);
})(),x__31026__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__36672,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__36676){
var vec__36677 = p__36676;
var k = cljs.core.nth.call(null,vec__36677,(0),null);
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

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha36663.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha36663.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta36664","meta36664",-1083598805,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha36663.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha36663.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha36663";

cljs.spec.alpha.t_cljs$spec$alpha36663.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha36663");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha36663 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha36663(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta36664){
return (new cljs.spec.alpha.t_cljs$spec$alpha36663(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta36664));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha36663(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__36749 = arguments.length;
switch (G__36749) {
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
if(typeof cljs.spec.alpha.t_cljs$spec$alpha36753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha36753 = (function (forms,preds,gfn,specs,cnt,meta36754){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta36754 = meta36754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_36755,meta36754__$1){
var self__ = this;
var _36755__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha36753(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta36754__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_36755){
var self__ = this;
var _36755__$1 = this;
return self__.meta36754;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
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
var G__36789 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__36790 = (i + (1));
ret = G__36789;
i = G__36790;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
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
var G__36797 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__36798 = (i + (1));
ret = G__36797;
i = G__36798;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
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

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
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

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta36754","meta36754",-520077578,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha36753.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha36753.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha36753";

cljs.spec.alpha.t_cljs$spec$alpha36753.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha36753");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha36753 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha36753(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta36754){
return (new cljs.spec.alpha.t_cljs$spec$alpha36753(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta36754));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha36753(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
var x36832 = v;
x36832.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x36832.cljs$core$IMapEntry$_key$arity$1 = ((function (x36832){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x36832))
;

x36832.cljs$core$IMapEntry$_val$arity$1 = ((function (x36832){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x36832))
;

return x36832;
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
var cform = (function (){var G__36837 = cljs.core.count.call(null,preds);
switch (G__36837) {
case (2):
return ((function (G__36837,id,kps,specs){
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
;})(G__36837,id,kps,specs))

break;
case (3):
return ((function (G__36837,id,kps,specs){
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
;})(G__36837,id,kps,specs))

break;
default:
return ((function (G__36837,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var G__36935 = (i + (1));
i = G__36935;
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
;})(G__36837,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha36841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha36841 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta36842){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta36842 = meta36842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_36843,meta36842__$1){
var self__ = this;
var _36843__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha36841(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta36842__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_36843){
var self__ = this;
var _36843__$1 = this;
return self__.meta36842;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__36868){
var self__ = this;
var vec__36871 = p__36868;
var k = cljs.core.nth.call(null,vec__36871,(0),null);
var x = cljs.core.nth.call(null,vec__36871,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
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

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
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

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta36842","meta36842",-803883445,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha36841.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha36841.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha36841";

cljs.spec.alpha.t_cljs$spec$alpha36841.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha36841");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha36841 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha36841(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta36842){
return (new cljs.spec.alpha.t_cljs$spec$alpha36841(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta36842));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha36841(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__36976 = preds;
var vec__36978 = G__36976;
var seq__36979 = cljs.core.seq.call(null,vec__36978);
var first__36980 = cljs.core.first.call(null,seq__36979);
var seq__36979__$1 = cljs.core.next.call(null,seq__36979);
var pred = first__36980;
var preds__$1 = seq__36979__$1;
var G__36977 = forms;
var vec__36981 = G__36977;
var seq__36982 = cljs.core.seq.call(null,vec__36981);
var first__36983 = cljs.core.first.call(null,seq__36982);
var seq__36982__$1 = cljs.core.next.call(null,seq__36982);
var form = first__36983;
var forms__$1 = seq__36982__$1;
var ret__$1 = ret;
var G__36976__$1 = G__36976;
var G__36977__$1 = G__36977;
while(true){
var ret__$2 = ret__$1;
var vec__36984 = G__36976__$1;
var seq__36985 = cljs.core.seq.call(null,vec__36984);
var first__36986 = cljs.core.first.call(null,seq__36985);
var seq__36985__$1 = cljs.core.next.call(null,seq__36985);
var pred__$1 = first__36986;
var preds__$2 = seq__36985__$1;
var vec__36987 = G__36977__$1;
var seq__36988 = cljs.core.seq.call(null,vec__36987);
var first__36989 = cljs.core.first.call(null,seq__36988);
var seq__36988__$1 = cljs.core.next.call(null,seq__36988);
var form__$1 = first__36989;
var forms__$2 = seq__36988__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__36994 = nret;
var G__36995 = preds__$2;
var G__36996 = forms__$2;
ret__$1 = G__36994;
G__36976__$1 = G__36995;
G__36977__$1 = G__36996;
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
var G__37004 = forms;
var vec__37006 = G__37004;
var seq__37007 = cljs.core.seq.call(null,vec__37006);
var first__37008 = cljs.core.first.call(null,seq__37007);
var seq__37007__$1 = cljs.core.next.call(null,seq__37007);
var form = first__37008;
var forms__$1 = seq__37007__$1;
var G__37005 = preds;
var vec__37009 = G__37005;
var seq__37010 = cljs.core.seq.call(null,vec__37009);
var first__37011 = cljs.core.first.call(null,seq__37010);
var seq__37010__$1 = cljs.core.next.call(null,seq__37010);
var pred = first__37011;
var preds__$1 = seq__37010__$1;
var ret__$1 = ret;
var G__37004__$1 = G__37004;
var G__37005__$1 = G__37005;
while(true){
var ret__$2 = ret__$1;
var vec__37012 = G__37004__$1;
var seq__37013 = cljs.core.seq.call(null,vec__37012);
var first__37014 = cljs.core.first.call(null,seq__37013);
var seq__37013__$1 = cljs.core.next.call(null,seq__37013);
var form__$1 = first__37014;
var forms__$2 = seq__37013__$1;
var vec__37015 = G__37005__$1;
var seq__37016 = cljs.core.seq.call(null,vec__37015);
var first__37017 = cljs.core.first.call(null,seq__37016);
var seq__37016__$1 = cljs.core.next.call(null,seq__37016);
var pred__$1 = first__37017;
var preds__$2 = seq__37016__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__37026 = nret;
var G__37027 = forms__$2;
var G__37028 = preds__$2;
ret__$1 = G__37026;
G__37004__$1 = G__37027;
G__37005__$1 = G__37028;
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
var cform = (function (){var G__37031 = cljs.core.count.call(null,preds);
switch (G__37031) {
case (2):
return ((function (G__37031,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__37031,specs))

break;
case (3):
return ((function (G__37031,specs){
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
;})(G__37031,specs))

break;
default:
return ((function (G__37031,specs){
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
var G__37046 = nret;
var G__37047 = (i + (1));
ret = G__37046;
i = G__37047;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__37031,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha37034 = (function (forms,preds,gfn,specs,cform,meta37035){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta37035 = meta37035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_37036,meta37035__$1){
var self__ = this;
var _37036__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37034(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta37035__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_37036){
var self__ = this;
var _37036__$1 = this;
return self__.meta37035;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__37030_SHARP_,p2__37029_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__37029_SHARP_,p1__37030_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
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

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta37035","meta37035",113673384,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha37034.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37034.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37034";

cljs.spec.alpha.t_cljs$spec$alpha37034.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37034");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha37034 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha37034(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta37035){
return (new cljs.spec.alpha.t_cljs$spec$alpha37034(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta37035));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37034(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha37175 = (function (forms,preds,gfn,meta37176){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta37176 = meta37176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37177,meta37176__$1){
var self__ = this;
var _37177__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37175(self__.forms,self__.preds,self__.gfn,meta37176__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37177){
var self__ = this;
var _37177__$1 = this;
return self__.meta37176;
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__37153_SHARP_,p2__37154_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__37153_SHARP_,x,p2__37154_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__37167_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__37167_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__37168_SHARP_,p2__37169_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__37168_SHARP_,p2__37169_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
return (function (p1__37170_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__37170_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__37171_SHARP_,p2__37172_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__37171_SHARP_,overrides,path,rmap,p2__37172_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha37175.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha37175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta37176","meta37176",1826995178,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha37175.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37175.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37175";

cljs.spec.alpha.t_cljs$spec$alpha37175.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37175");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha37175 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha37175(forms__$1,preds__$1,gfn__$1,meta37176){
return (new cljs.spec.alpha.t_cljs$spec$alpha37175(forms__$1,preds__$1,gfn__$1,meta37176));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37175(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__37247 = arguments.length;
switch (G__37247) {
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

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__37249,gfn){
var map__37250 = p__37249;
var map__37250__$1 = ((((!((map__37250 == null)))?((((map__37250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37250):map__37250);
var opts = map__37250__$1;
var max_count = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var gen_into = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var count = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__37250__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(conform_into,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__37240_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__37240_SHARP_);
});})(conform_into,spec,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__30072__auto__ = kfn;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return ((function (or__30072__auto__,conform_into,spec,check_QMARK_,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__30072__auto__,conform_into,spec,check_QMARK_,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__37243_SHARP_){
return cljs.core.empty.call(null,(function (){var or__30072__auto__ = conform_into;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p1__37243_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha37260 = (function (form,max_count,check_QMARK_,p__37249,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,map__37250,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta37261){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.p__37249 = p__37249;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.map__37250 = map__37250;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta37261 = meta37261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_37262,meta37261__$1){
var self__ = this;
var _37262__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37260(self__.form,self__.max_count,self__.check_QMARK_,self__.p__37249,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.map__37250,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta37261__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_37262){
var self__ = this;
var _37262__$1 = this;
return self__.meta37261;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__37267 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__37267,(0),null);
var add = cljs.core.nth.call(null,vec__37267,(1),null);
var complete = cljs.core.nth.call(null,vec__37267,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__37273 = cljs.core.seq.call(null,x);
var vec__37274 = G__37273;
var seq__37275 = cljs.core.seq.call(null,vec__37274);
var first__37276 = cljs.core.first.call(null,seq__37275);
var seq__37275__$1 = cljs.core.next.call(null,seq__37275);
var v = first__37276;
var vs = seq__37275__$1;
var vseq = vec__37274;
var ret__$1 = ret;
var i__$1 = i;
var G__37273__$1 = G__37273;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__37277 = G__37273__$1;
var seq__37278 = cljs.core.seq.call(null,vec__37277);
var first__37279 = cljs.core.first.call(null,seq__37278);
var seq__37278__$1 = cljs.core.next.call(null,seq__37278);
var v__$1 = first__37279;
var vs__$1 = seq__37278__$1;
var vseq__$1 = vec__37277;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__37416 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__37417 = (i__$2 + (1));
var G__37418 = vs__$1;
ret__$1 = G__37416;
i__$1 = G__37417;
G__37273__$1 = G__37418;
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
var G__37419 = (i + step);
i = G__37419;
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
var G__37324 = cljs.core.seq.call(null,x);
var vec__37325 = G__37324;
var seq__37326 = cljs.core.seq.call(null,vec__37325);
var first__37327 = cljs.core.first.call(null,seq__37326);
var seq__37326__$1 = cljs.core.next.call(null,seq__37326);
var v = first__37327;
var vs = seq__37326__$1;
var vseq = vec__37325;
var i__$1 = i;
var G__37324__$1 = G__37324;
while(true){
var i__$2 = i__$1;
var vec__37330 = G__37324__$1;
var seq__37331 = cljs.core.seq.call(null,vec__37330);
var first__37332 = cljs.core.first.call(null,seq__37331);
var seq__37331__$1 = cljs.core.next.call(null,seq__37331);
var v__$1 = first__37332;
var vs__$1 = seq__37331__$1;
var vseq__$1 = vec__37330;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__37420 = (i__$2 + (1));
var G__37421 = vs__$1;
i__$1 = G__37420;
G__37324__$1 = G__37421;
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
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__37336 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__37336,(0),null);
var add = cljs.core.nth.call(null,vec__37336,(1),null);
var complete = cljs.core.nth.call(null,vec__37336,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__37343 = cljs.core.seq.call(null,x);
var vec__37344 = G__37343;
var seq__37345 = cljs.core.seq.call(null,vec__37344);
var first__37346 = cljs.core.first.call(null,seq__37345);
var seq__37345__$1 = cljs.core.next.call(null,seq__37345);
var v = first__37346;
var vs = seq__37345__$1;
var vseq = vec__37344;
var ret__$1 = ret;
var i__$1 = i;
var G__37343__$1 = G__37343;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__37349 = G__37343__$1;
var seq__37350 = cljs.core.seq.call(null,vec__37349);
var first__37351 = cljs.core.first.call(null,seq__37350);
var seq__37350__$1 = cljs.core.next.call(null,seq__37350);
var v__$1 = first__37351;
var vs__$1 = seq__37350__$1;
var vseq__$1 = vec__37349;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__37427 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__37428 = (i__$2 + (1));
var G__37429 = vs__$1;
ret__$1 = G__37427;
i__$1 = G__37428;
G__37343__$1 = G__37429;
continue;
}
break;
}
} else {
return x;
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__30072__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__30072__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__30072__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__37244_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__37244_SHARP_)){
return p1__37244_SHARP_;
} else {
return cljs.core.empty.call(null,p1__37244_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__37245_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__37245_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__37245_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
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
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
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
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"p__37249","p__37249",-1959903416,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"map__37250","map__37250",928348567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta37261","meta37261",1566689201,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha37260.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37260.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37260";

cljs.spec.alpha.t_cljs$spec$alpha37260.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37260");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha37260 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha37260(form__$1,max_count__$1,check_QMARK___$1,p__37249__$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,map__37250__$2,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta37261){
return (new cljs.spec.alpha.t_cljs$spec$alpha37260(form__$1,max_count__$1,check_QMARK___$1,p__37249__$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,map__37250__$2,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta37261));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__37250,map__37250__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37260(form,max_count,check_QMARK_,p__37249,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,map__37250__$1,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__37462){
var map__37463 = p__37462;
var map__37463__$1 = ((((!((map__37463 == null)))?((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37463):map__37463);
var op = cljs.core.get.call(null,map__37463__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__37468){
var map__37469 = p__37468;
var map__37469__$1 = ((((!((map__37469 == null)))?((((map__37469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37469):map__37469);
var vec__37470 = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__37471 = cljs.core.seq.call(null,vec__37470);
var first__37472 = cljs.core.first.call(null,seq__37471);
var seq__37471__$1 = cljs.core.next.call(null,seq__37471);
var p1 = first__37472;
var pr = seq__37471__$1;
var ps = vec__37470;
var vec__37473 = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__37474 = cljs.core.seq.call(null,vec__37473);
var first__37475 = cljs.core.first.call(null,seq__37474);
var seq__37474__$1 = cljs.core.next.call(null,seq__37474);
var k1 = first__37475;
var kr = seq__37474__$1;
var ks = vec__37473;
var vec__37476 = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__37477 = cljs.core.seq.call(null,vec__37476);
var first__37478 = cljs.core.first.call(null,seq__37477);
var seq__37477__$1 = cljs.core.next.call(null,seq__37477);
var f1 = first__37478;
var fr = seq__37477__$1;
var forms = vec__37476;
var ret = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
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
var len__31349__auto___37487 = arguments.length;
var i__31350__auto___37488 = (0);
while(true){
if((i__31350__auto___37488 < len__31349__auto___37487)){
args__31356__auto__.push((arguments[i__31350__auto___37488]));

var G__37489 = (i__31350__auto___37488 + (1));
i__31350__auto___37488 = G__37489;
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

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq37486){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37486));
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
var pks = cljs.core.filter.call(null,(function (p1__37494_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__37494_SHARP_));
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
return (function (p1__37501_SHARP_){
return cljs.core.nth.call(null,p1__37501_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__37512 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__37515 = cljs.core.nth.call(null,vec__37512,(0),null);
var seq__37516 = cljs.core.seq.call(null,vec__37515);
var first__37517 = cljs.core.first.call(null,seq__37516);
var seq__37516__$1 = cljs.core.next.call(null,seq__37516);
var p1 = first__37517;
var pr = seq__37516__$1;
var ps__$1 = vec__37515;
var vec__37518 = cljs.core.nth.call(null,vec__37512,(1),null);
var k1 = cljs.core.nth.call(null,vec__37518,(0),null);
var ks__$1 = vec__37518;
var forms__$1 = cljs.core.nth.call(null,vec__37512,(2),null);
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
var len__31349__auto___37528 = arguments.length;
var i__31350__auto___37529 = (0);
while(true){
if((i__31350__auto___37529 < len__31349__auto___37528)){
args__31356__auto__.push((arguments[i__31350__auto___37529]));

var G__37531 = (i__31350__auto___37529 + (1));
i__31350__auto___37529 = G__37531;
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

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq37523){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37523));
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
var map__37550 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37550__$1 = ((((!((map__37550 == null)))?((((map__37550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37550):map__37550);
var p__$1 = map__37550__$1;
var op = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__37555 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37555)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__37555)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37555)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37555)){
var or__30072__auto__ = (p1 === p2);
if(or__30072__auto__){
return or__30072__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37555)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37555)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37555)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__37572 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37572__$1 = ((((!((map__37572 == null)))?((((map__37572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37572):map__37572);
var p__$1 = map__37572__$1;
var vec__37575 = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__37576 = cljs.core.seq.call(null,vec__37575);
var first__37577 = cljs.core.first.call(null,seq__37576);
var seq__37576__$1 = cljs.core.next.call(null,seq__37576);
var p0 = first__37577;
var pr = seq__37576__$1;
var ps = vec__37575;
var vec__37578 = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__37578,(0),null);
var ks = vec__37578;
var op = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__37582 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37582)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__37582)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37582)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37582)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37582)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37582)){
var vec__37583 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__37586 = cljs.core.nth.call(null,vec__37583,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__37586,(0),null);
var vec__37589 = cljs.core.nth.call(null,vec__37583,(1),null);
var k0 = cljs.core.nth.call(null,vec__37589,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37582)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__37601 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37601__$1 = ((((!((map__37601 == null)))?((((map__37601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37601):map__37601);
var p__$1 = map__37601__$1;
var vec__37602 = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__37603 = cljs.core.seq.call(null,vec__37602);
var first__37604 = cljs.core.first.call(null,seq__37603);
var seq__37603__$1 = cljs.core.next.call(null,seq__37603);
var p0 = first__37604;
var pr = seq__37603__$1;
var ps = vec__37602;
var vec__37605 = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__37605,(0),null);
var ks = vec__37605;
var op = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__37612 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37612)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__37612)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37612)){
var px = cljs.core.reduce.call(null,((function (G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__37598_SHARP_,p2__37597_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__37597_SHARP_,p1__37598_SHARP_);
});})(G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37612)){
return cljs.core.mapcat.call(null,((function (G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__37599_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__37599_SHARP_);
});})(G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37612)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__37600_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__37600_SHARP_);
});})(G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__37612,map__37601,map__37601__$1,p__$1,vec__37602,seq__37603,first__37604,seq__37603__$1,p0,pr,ps,vec__37605,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37612)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__37614 = x;
var k__$1 = cljs.core.nth.call(null,vec__37614,(0),null);
var v = cljs.core.nth.call(null,vec__37614,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37612)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__37635 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37635__$1 = ((((!((map__37635 == null)))?((((map__37635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37635):map__37635);
var p__$1 = map__37635__$1;
var op = cljs.core.get.call(null,map__37635__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__37635__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__37635__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__37635,map__37635__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__37635,map__37635__$1,p__$1,op,ps,splice))
;
var G__37638 = op;
if(cljs.core._EQ_.call(null,null,G__37638)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37638)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37638)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37638)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37638)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37638)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37638)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__37655 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37655__$1 = ((((!((map__37655 == null)))?((((map__37655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37655):map__37655);
var p__$1 = map__37655__$1;
var vec__37656 = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__37657 = cljs.core.seq.call(null,vec__37656);
var first__37658 = cljs.core.first.call(null,seq__37657);
var seq__37657__$1 = cljs.core.next.call(null,seq__37657);
var p0 = first__37658;
var pr = seq__37657__$1;
var ps = vec__37656;
var vec__37659 = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__37660 = cljs.core.seq.call(null,vec__37659);
var first__37661 = cljs.core.first.call(null,seq__37660);
var seq__37660__$1 = cljs.core.next.call(null,seq__37660);
var k0 = first__37661;
var kr = seq__37660__$1;
var ks = vec__37659;
var op = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__37666 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37666)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__37666)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37666)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37666)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37666)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__37666,map__37655,map__37655__$1,p__$1,vec__37656,seq__37657,first__37658,seq__37657__$1,p0,pr,ps,vec__37659,seq__37660,first__37661,seq__37660__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__37652_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__37652_SHARP_,x);
});})(G__37666,map__37655,map__37655__$1,p__$1,vec__37656,seq__37657,first__37658,seq__37657__$1,p0,pr,ps,vec__37659,seq__37660,first__37661,seq__37660__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37666)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37666)].join('')));

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
var map__37703 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37703__$1 = ((((!((map__37703 == null)))?((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37703):map__37703);
var p__$1 = map__37703__$1;
var op = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__37705 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37705)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__37705)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37705)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),cljs.spec.alpha.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37705)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37705)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__31026__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37705)){
var x__31026__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null));
return cljs.core._conj.call(null,(function (){var x__31026__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto____$1);
})(),x__31026__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37705)].join('')));

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
var vec__37744 = input;
var x = cljs.core.nth.call(null,vec__37744,(0),null);
var input__$1 = vec__37744;
var map__37747 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37747__$1 = ((((!((map__37747 == null)))?((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37747):map__37747);
var p__$1 = map__37747__$1;
var op = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5276__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__37744,x,input__$1,map__37747,map__37747__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__37744,x,input__$1,map__37747,map__37747__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__37756 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37756)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__37756)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37756)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37756)){
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
var vec__37765 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__37756,vec__37744,x,input__$1,map__37747,map__37747__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__37768){
var vec__37769 = p__37768;
var p__$2 = cljs.core.nth.call(null,vec__37769,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__37756,vec__37744,x,input__$1,map__37747,map__37747__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__37765,(0),null);
var k = cljs.core.nth.call(null,vec__37765,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__37765,(2),null);
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37756)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__37756,vec__37744,x,input__$1,map__37747,map__37747__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__30072__auto__ = form__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__37756,vec__37744,x,input__$1,map__37747,map__37747__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37756)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37756)].join('')));

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
var map__37816 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__37816__$1 = ((((!((map__37816 == null)))?((((map__37816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37816):map__37816);
var p__$1 = map__37816__$1;
var ps = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
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
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__30072__auto__ = f__$1;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return p__$2;
}
})());
});})(map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
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
});})(map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
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
});})(map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__30072__auto__ = (function (){var temp__5278__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5278__auto__)){
var g = temp__5278__auto__;
var G__37833 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__37833)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__37833)){
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
var G__37838 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__37838)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__37838)){
var temp__5278__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5278__auto__)){
var g = temp__5278__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__37838)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__37838)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__37838)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__37838)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5278__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5278__auto__)){
var g = temp__5278__auto__;
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5278__auto__,G__37838,or__30072__auto____$1,or__30072__auto__,map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__37814_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37814_SHARP_);
});})(g,temp__5278__auto__,G__37838,or__30072__auto____$1,or__30072__auto__,map__37816,map__37816__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37838)].join('')));

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
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__37850){
while(true){
var vec__37851 = p__37850;
var seq__37852 = cljs.core.seq.call(null,vec__37851);
var first__37853 = cljs.core.first.call(null,seq__37852);
var seq__37852__$1 = cljs.core.next.call(null,seq__37852);
var x = first__37853;
var xs = seq__37852__$1;
var data = vec__37851;
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
var G__37854 = dp;
var G__37855 = xs;
p = G__37854;
p__37850 = G__37855;
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
var G__37859 = input;
var vec__37860 = G__37859;
var seq__37861 = cljs.core.seq.call(null,vec__37860);
var first__37862 = cljs.core.first.call(null,seq__37861);
var seq__37861__$1 = cljs.core.next.call(null,seq__37861);
var x = first__37862;
var xs = seq__37861__$1;
var data = vec__37860;
var i = (0);
var p__$1 = p;
var G__37859__$1 = G__37859;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__37863 = G__37859__$1;
var seq__37864 = cljs.core.seq.call(null,vec__37863);
var first__37865 = cljs.core.first.call(null,seq__37864);
var seq__37864__$1 = cljs.core.next.call(null,seq__37864);
var x__$1 = first__37865;
var xs__$1 = seq__37864__$1;
var data__$1 = vec__37863;
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
var G__37873 = dp;
var G__37874 = xs__$1;
var G__37875 = (i__$2 + (1));
p__$1 = G__37873;
G__37859__$1 = G__37874;
i__$1 = G__37875;
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
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha37887 = (function (re,gfn,meta37888){
this.re = re;
this.gfn = gfn;
this.meta37888 = meta37888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37889,meta37888__$1){
var self__ = this;
var _37889__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37887(self__.re,self__.gfn,meta37888__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37889){
var self__ = this;
var _37889__$1 = this;
return self__.meta37888;
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,self__.re),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha37887.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha37887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta37888","meta37888",1035912557,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha37887.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37887.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37887";

cljs.spec.alpha.t_cljs$spec$alpha37887.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37887");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha37887 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha37887(re__$1,gfn__$1,meta37888){
return (new cljs.spec.alpha.t_cljs$spec$alpha37887(re__$1,gfn__$1,meta37888));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37887(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37913_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__37913_SHARP_);
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5276__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5276__auto__)){
var vec__37914 = temp__5276__auto__;
var smallest = cljs.core.nth.call(null,vec__37914,(0),null);
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
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha37917 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta37918){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta37918 = meta37918;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_37919,meta37918__$1){
var self__ = this;
var _37919__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37917(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta37918__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_37919){
var self__ = this;
var _37919__$1 = this;
return self__.meta37918;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
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

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e37920){if((e37920 instanceof Error)){
var t = e37920;
return t;
} else {
throw e37920;

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

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
var G__37940__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__31197__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37921_37941 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37922_37942 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37921_37941,_STAR_print_fn_STAR_37922_37942,sb__31197__auto__,___$3,specs){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_37921_37941,_STAR_print_fn_STAR_37922_37942,sb__31197__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37922_37942;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37921_37941;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__37940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37950__i = 0, G__37950__a = new Array(arguments.length -  0);
while (G__37950__i < G__37950__a.length) {G__37950__a[G__37950__i] = arguments[G__37950__i + 0]; ++G__37950__i;}
  args = new cljs.core.IndexedSeq(G__37950__a,0,null);
} 
return G__37940__delegate.call(this,args);};
G__37940.cljs$lang$maxFixedArity = 0;
G__37940.cljs$lang$applyTo = (function (arglist__37951){
var args = cljs.core.seq(arglist__37951);
return G__37940__delegate(args);
});
G__37940.cljs$core$IFn$_invoke$arity$variadic = G__37940__delegate;
return G__37940;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
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

cljs.spec.alpha.t_cljs$spec$alpha37917.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta37918","meta37918",704225931,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha37917.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37917.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37917";

cljs.spec.alpha.t_cljs$spec$alpha37917.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37917");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha37917 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha37917(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta37918){
return (new cljs.spec.alpha.t_cljs$spec$alpha37917(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta37918));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37917(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37963#","p1__37963#",-1939034159,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__37963#","p1__37963#",-1939034159,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__37963#","p1__37963#",-1939034159,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37965#","p1__37965#",-492868422,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__37965#","p1__37965#",-492868422,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__37963_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__37963_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__37963_SHARP_));
}),null,true,(function (p1__37965_SHARP_){
return cljs.core.map.call(null,(function (p__37967){
var vec__37968 = p__37967;
var k = cljs.core.nth.call(null,vec__37968,(0),null);
var v = cljs.core.nth.call(null,vec__37968,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__37965_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha37973 = (function (spec,meta37974){
this.spec = spec;
this.meta37974 = meta37974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_37975,meta37974__$1){
var self__ = this;
var _37975__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37973(self__.spec,meta37974__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_37975){
var self__ = this;
var _37975__$1 = this;
return self__.meta37974;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
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

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null)),(function (){var x__31026__auto__ = cljs.spec.alpha.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta37974","meta37974",-654925198,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha37973.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37973.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37973";

cljs.spec.alpha.t_cljs$spec$alpha37973.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37973");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha37973 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha37973(spec__$2,meta37974){
return (new cljs.spec.alpha.t_cljs$spec$alpha37973(spec__$2,meta37974));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37973(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.call(null,pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha37984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha37984 = (function (form,pred,gfn,spec,meta37985){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta37985 = meta37985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_37986,meta37985__$1){
var self__ = this;
var _37986__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha37984(self__.form,self__.pred,self__.gfn,self__.spec,meta37985__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_37986){
var self__ = this;
var _37986__$1 = this;
return self__.meta37985;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null)),(function (){var x__31026__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31026__auto__);
})())));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta37985","meta37985",-832355425,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha37984.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha37984.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha37984";

cljs.spec.alpha.t_cljs$spec$alpha37984.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"cljs.spec.alpha/t_cljs$spec$alpha37984");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha37984 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha37984(form__$1,pred__$1,gfn__$1,spec__$1,meta37985){
return (new cljs.spec.alpha.t_cljs$spec$alpha37984(form__$1,pred__$1,gfn__$1,spec__$1,meta37985));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha37984(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__37996 = arguments.length;
switch (G__37996) {
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
return cljs.core.map.call(null,(function (p1__37994_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__37994_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__37994_SHARP_)],null));
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
var _STAR_print_newline_STAR_38007_38009 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38008_38010 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38007_38009,_STAR_print_fn_STAR_38008_38010,sb__31197__auto__,ed){
return (function (x__31198__auto__){
return sb__31197__auto__.append(x__31198__auto__);
});})(_STAR_print_newline_STAR_38007_38009,_STAR_print_fn_STAR_38008_38010,sb__31197__auto__,ed))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38008_38010;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38007_38009;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31197__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=alpha.js.map?rel=1510360382112
