// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30072__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30072__auto__){
return or__30072__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30072__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45122_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45122_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45125 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45127 = null;
var count__45128 = (0);
var i__45129 = (0);
while(true){
if((i__45129 < count__45128)){
var n = cljs.core._nth.call(null,chunk__45127,i__45129);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45137 = seq__45125;
var G__45138 = chunk__45127;
var G__45139 = count__45128;
var G__45140 = (i__45129 + (1));
seq__45125 = G__45137;
chunk__45127 = G__45138;
count__45128 = G__45139;
i__45129 = G__45140;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45125);
if(temp__5278__auto__){
var seq__45125__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45125__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__45125__$1);
var G__45145 = cljs.core.chunk_rest.call(null,seq__45125__$1);
var G__45146 = c__31003__auto__;
var G__45147 = cljs.core.count.call(null,c__31003__auto__);
var G__45148 = (0);
seq__45125 = G__45145;
chunk__45127 = G__45146;
count__45128 = G__45147;
i__45129 = G__45148;
continue;
} else {
var n = cljs.core.first.call(null,seq__45125__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45151 = cljs.core.next.call(null,seq__45125__$1);
var G__45152 = null;
var G__45153 = (0);
var G__45154 = (0);
seq__45125 = G__45151;
chunk__45127 = G__45152;
count__45128 = G__45153;
i__45129 = G__45154;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__45166){
var vec__45167 = p__45166;
var _ = cljs.core.nth.call(null,vec__45167,(0),null);
var v = cljs.core.nth.call(null,vec__45167,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__45171){
var vec__45172 = p__45171;
var k = cljs.core.nth.call(null,vec__45172,(0),null);
var v = cljs.core.nth.call(null,vec__45172,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45205_45254 = cljs.core.seq.call(null,deps);
var chunk__45206_45255 = null;
var count__45207_45256 = (0);
var i__45208_45257 = (0);
while(true){
if((i__45208_45257 < count__45207_45256)){
var dep_45264 = cljs.core._nth.call(null,chunk__45206_45255,i__45208_45257);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_45264;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45264));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45264,(depth + (1)),state);
} else {
}

var G__45278 = seq__45205_45254;
var G__45279 = chunk__45206_45255;
var G__45280 = count__45207_45256;
var G__45281 = (i__45208_45257 + (1));
seq__45205_45254 = G__45278;
chunk__45206_45255 = G__45279;
count__45207_45256 = G__45280;
i__45208_45257 = G__45281;
continue;
} else {
var temp__5278__auto___45283 = cljs.core.seq.call(null,seq__45205_45254);
if(temp__5278__auto___45283){
var seq__45205_45284__$1 = temp__5278__auto___45283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45205_45284__$1)){
var c__31003__auto___45289 = cljs.core.chunk_first.call(null,seq__45205_45284__$1);
var G__45296 = cljs.core.chunk_rest.call(null,seq__45205_45284__$1);
var G__45297 = c__31003__auto___45289;
var G__45298 = cljs.core.count.call(null,c__31003__auto___45289);
var G__45299 = (0);
seq__45205_45254 = G__45296;
chunk__45206_45255 = G__45297;
count__45207_45256 = G__45298;
i__45208_45257 = G__45299;
continue;
} else {
var dep_45303 = cljs.core.first.call(null,seq__45205_45284__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_45303;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45303));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45303,(depth + (1)),state);
} else {
}

var G__45313 = cljs.core.next.call(null,seq__45205_45284__$1);
var G__45314 = null;
var G__45315 = (0);
var G__45316 = (0);
seq__45205_45254 = G__45313;
chunk__45206_45255 = G__45314;
count__45207_45256 = G__45315;
i__45208_45257 = G__45316;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45231){
var vec__45234 = p__45231;
var seq__45235 = cljs.core.seq.call(null,vec__45234);
var first__45236 = cljs.core.first.call(null,seq__45235);
var seq__45235__$1 = cljs.core.next.call(null,seq__45235);
var x = first__45236;
var xs = seq__45235__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45234,seq__45235,first__45236,seq__45235__$1,x,xs,get_deps__$1){
return (function (p1__45183_SHARP_){
return clojure.set.difference.call(null,p1__45183_SHARP_,x);
});})(vec__45234,seq__45235,first__45236,seq__45235__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45354 = cljs.core.seq.call(null,provides);
var chunk__45355 = null;
var count__45356 = (0);
var i__45357 = (0);
while(true){
if((i__45357 < count__45356)){
var prov = cljs.core._nth.call(null,chunk__45355,i__45357);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45358_45370 = cljs.core.seq.call(null,requires);
var chunk__45359_45371 = null;
var count__45360_45372 = (0);
var i__45361_45373 = (0);
while(true){
if((i__45361_45373 < count__45360_45372)){
var req_45374 = cljs.core._nth.call(null,chunk__45359_45371,i__45361_45373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45374,prov);

var G__45379 = seq__45358_45370;
var G__45380 = chunk__45359_45371;
var G__45381 = count__45360_45372;
var G__45382 = (i__45361_45373 + (1));
seq__45358_45370 = G__45379;
chunk__45359_45371 = G__45380;
count__45360_45372 = G__45381;
i__45361_45373 = G__45382;
continue;
} else {
var temp__5278__auto___45383 = cljs.core.seq.call(null,seq__45358_45370);
if(temp__5278__auto___45383){
var seq__45358_45384__$1 = temp__5278__auto___45383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45358_45384__$1)){
var c__31003__auto___45385 = cljs.core.chunk_first.call(null,seq__45358_45384__$1);
var G__45386 = cljs.core.chunk_rest.call(null,seq__45358_45384__$1);
var G__45387 = c__31003__auto___45385;
var G__45388 = cljs.core.count.call(null,c__31003__auto___45385);
var G__45389 = (0);
seq__45358_45370 = G__45386;
chunk__45359_45371 = G__45387;
count__45360_45372 = G__45388;
i__45361_45373 = G__45389;
continue;
} else {
var req_45390 = cljs.core.first.call(null,seq__45358_45384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45390,prov);

var G__45391 = cljs.core.next.call(null,seq__45358_45384__$1);
var G__45392 = null;
var G__45393 = (0);
var G__45394 = (0);
seq__45358_45370 = G__45391;
chunk__45359_45371 = G__45392;
count__45360_45372 = G__45393;
i__45361_45373 = G__45394;
continue;
}
} else {
}
}
break;
}

var G__45395 = seq__45354;
var G__45396 = chunk__45355;
var G__45397 = count__45356;
var G__45398 = (i__45357 + (1));
seq__45354 = G__45395;
chunk__45355 = G__45396;
count__45356 = G__45397;
i__45357 = G__45398;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45354);
if(temp__5278__auto__){
var seq__45354__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45354__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__45354__$1);
var G__45402 = cljs.core.chunk_rest.call(null,seq__45354__$1);
var G__45403 = c__31003__auto__;
var G__45404 = cljs.core.count.call(null,c__31003__auto__);
var G__45405 = (0);
seq__45354 = G__45402;
chunk__45355 = G__45403;
count__45356 = G__45404;
i__45357 = G__45405;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45354__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45362_45406 = cljs.core.seq.call(null,requires);
var chunk__45363_45407 = null;
var count__45364_45408 = (0);
var i__45365_45409 = (0);
while(true){
if((i__45365_45409 < count__45364_45408)){
var req_45410 = cljs.core._nth.call(null,chunk__45363_45407,i__45365_45409);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45410,prov);

var G__45414 = seq__45362_45406;
var G__45415 = chunk__45363_45407;
var G__45416 = count__45364_45408;
var G__45417 = (i__45365_45409 + (1));
seq__45362_45406 = G__45414;
chunk__45363_45407 = G__45415;
count__45364_45408 = G__45416;
i__45365_45409 = G__45417;
continue;
} else {
var temp__5278__auto___45420__$1 = cljs.core.seq.call(null,seq__45362_45406);
if(temp__5278__auto___45420__$1){
var seq__45362_45422__$1 = temp__5278__auto___45420__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45362_45422__$1)){
var c__31003__auto___45423 = cljs.core.chunk_first.call(null,seq__45362_45422__$1);
var G__45424 = cljs.core.chunk_rest.call(null,seq__45362_45422__$1);
var G__45425 = c__31003__auto___45423;
var G__45426 = cljs.core.count.call(null,c__31003__auto___45423);
var G__45427 = (0);
seq__45362_45406 = G__45424;
chunk__45363_45407 = G__45425;
count__45364_45408 = G__45426;
i__45365_45409 = G__45427;
continue;
} else {
var req_45430 = cljs.core.first.call(null,seq__45362_45422__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45430,prov);

var G__45431 = cljs.core.next.call(null,seq__45362_45422__$1);
var G__45432 = null;
var G__45433 = (0);
var G__45434 = (0);
seq__45362_45406 = G__45431;
chunk__45363_45407 = G__45432;
count__45364_45408 = G__45433;
i__45365_45409 = G__45434;
continue;
}
} else {
}
}
break;
}

var G__45435 = cljs.core.next.call(null,seq__45354__$1);
var G__45436 = null;
var G__45437 = (0);
var G__45438 = (0);
seq__45354 = G__45435;
chunk__45355 = G__45436;
count__45356 = G__45437;
i__45357 = G__45438;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45455_45467 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45457_45468 = null;
var count__45458_45469 = (0);
var i__45459_45470 = (0);
while(true){
if((i__45459_45470 < count__45458_45469)){
var ns_45472 = cljs.core._nth.call(null,chunk__45457_45468,i__45459_45470);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45472);

var G__45473 = seq__45455_45467;
var G__45474 = chunk__45457_45468;
var G__45475 = count__45458_45469;
var G__45476 = (i__45459_45470 + (1));
seq__45455_45467 = G__45473;
chunk__45457_45468 = G__45474;
count__45458_45469 = G__45475;
i__45459_45470 = G__45476;
continue;
} else {
var temp__5278__auto___45478 = cljs.core.seq.call(null,seq__45455_45467);
if(temp__5278__auto___45478){
var seq__45455_45479__$1 = temp__5278__auto___45478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45455_45479__$1)){
var c__31003__auto___45481 = cljs.core.chunk_first.call(null,seq__45455_45479__$1);
var G__45483 = cljs.core.chunk_rest.call(null,seq__45455_45479__$1);
var G__45484 = c__31003__auto___45481;
var G__45485 = cljs.core.count.call(null,c__31003__auto___45481);
var G__45486 = (0);
seq__45455_45467 = G__45483;
chunk__45457_45468 = G__45484;
count__45458_45469 = G__45485;
i__45459_45470 = G__45486;
continue;
} else {
var ns_45487 = cljs.core.first.call(null,seq__45455_45479__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45487);

var G__45491 = cljs.core.next.call(null,seq__45455_45479__$1);
var G__45492 = null;
var G__45493 = (0);
var G__45494 = (0);
seq__45455_45467 = G__45491;
chunk__45457_45468 = G__45492;
count__45458_45469 = G__45493;
i__45459_45470 = G__45494;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30072__auto__ = goog.require__;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45496__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45497__i = 0, G__45497__a = new Array(arguments.length -  0);
while (G__45497__i < G__45497__a.length) {G__45497__a[G__45497__i] = arguments[G__45497__i + 0]; ++G__45497__i;}
  args = new cljs.core.IndexedSeq(G__45497__a,0,null);
} 
return G__45496__delegate.call(this,args);};
G__45496.cljs$lang$maxFixedArity = 0;
G__45496.cljs$lang$applyTo = (function (arglist__45498){
var args = cljs.core.seq(arglist__45498);
return G__45496__delegate(args);
});
G__45496.cljs$core$IFn$_invoke$arity$variadic = G__45496__delegate;
return G__45496;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__45500_SHARP_,p2__45501_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45500_SHARP_)].join('')),p2__45501_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__45502_SHARP_,p2__45503_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45502_SHARP_)].join(''),p2__45503_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45508 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45508.addCallback(((function (G__45508){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45508))
);

G__45508.addErrback(((function (G__45508){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45508))
);

return G__45508;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45511){if((e45511 instanceof Error)){
var e = e45511;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45511;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45520){if((e45520 instanceof Error)){
var e = e45520;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45520;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45524 = cljs.core._EQ_;
var expr__45525 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45524.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45525))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45524.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45525))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45524.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45525))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__45524,expr__45525){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45524,expr__45525))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45539,callback){
var map__45540 = p__45539;
var map__45540__$1 = ((((!((map__45540 == null)))?((((map__45540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45540):map__45540);
var file_msg = map__45540__$1;
var request_url = cljs.core.get.call(null,map__45540__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__45540,map__45540__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45540,map__45540__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__){
return (function (state_45594){
var state_val_45595 = (state_45594[(1)]);
if((state_val_45595 === (7))){
var inst_45590 = (state_45594[(2)]);
var state_45594__$1 = state_45594;
var statearr_45596_45638 = state_45594__$1;
(statearr_45596_45638[(2)] = inst_45590);

(statearr_45596_45638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (1))){
var state_45594__$1 = state_45594;
var statearr_45597_45639 = state_45594__$1;
(statearr_45597_45639[(2)] = null);

(statearr_45597_45639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (4))){
var inst_45558 = (state_45594[(7)]);
var inst_45558__$1 = (state_45594[(2)]);
var state_45594__$1 = (function (){var statearr_45598 = state_45594;
(statearr_45598[(7)] = inst_45558__$1);

return statearr_45598;
})();
if(cljs.core.truth_(inst_45558__$1)){
var statearr_45599_45645 = state_45594__$1;
(statearr_45599_45645[(1)] = (5));

} else {
var statearr_45600_45646 = state_45594__$1;
(statearr_45600_45646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (15))){
var inst_45572 = (state_45594[(8)]);
var inst_45575 = (state_45594[(9)]);
var inst_45577 = inst_45575.call(null,inst_45572);
var state_45594__$1 = state_45594;
var statearr_45601_45647 = state_45594__$1;
(statearr_45601_45647[(2)] = inst_45577);

(statearr_45601_45647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (13))){
var inst_45584 = (state_45594[(2)]);
var state_45594__$1 = state_45594;
var statearr_45602_45648 = state_45594__$1;
(statearr_45602_45648[(2)] = inst_45584);

(statearr_45602_45648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (6))){
var state_45594__$1 = state_45594;
var statearr_45603_45649 = state_45594__$1;
(statearr_45603_45649[(2)] = null);

(statearr_45603_45649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (17))){
var inst_45581 = (state_45594[(2)]);
var state_45594__$1 = state_45594;
var statearr_45604_45650 = state_45594__$1;
(statearr_45604_45650[(2)] = inst_45581);

(statearr_45604_45650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (3))){
var inst_45592 = (state_45594[(2)]);
var state_45594__$1 = state_45594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45594__$1,inst_45592);
} else {
if((state_val_45595 === (12))){
var state_45594__$1 = state_45594;
var statearr_45605_45651 = state_45594__$1;
(statearr_45605_45651[(2)] = null);

(statearr_45605_45651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (2))){
var state_45594__$1 = state_45594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45594__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45595 === (11))){
var inst_45563 = (state_45594[(10)]);
var inst_45570 = figwheel.client.file_reloading.blocking_load.call(null,inst_45563);
var state_45594__$1 = state_45594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45594__$1,(14),inst_45570);
} else {
if((state_val_45595 === (9))){
var inst_45563 = (state_45594[(10)]);
var state_45594__$1 = state_45594;
if(cljs.core.truth_(inst_45563)){
var statearr_45608_45657 = state_45594__$1;
(statearr_45608_45657[(1)] = (11));

} else {
var statearr_45609_45658 = state_45594__$1;
(statearr_45609_45658[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (5))){
var inst_45564 = (state_45594[(11)]);
var inst_45558 = (state_45594[(7)]);
var inst_45563 = cljs.core.nth.call(null,inst_45558,(0),null);
var inst_45564__$1 = cljs.core.nth.call(null,inst_45558,(1),null);
var state_45594__$1 = (function (){var statearr_45611 = state_45594;
(statearr_45611[(10)] = inst_45563);

(statearr_45611[(11)] = inst_45564__$1);

return statearr_45611;
})();
if(cljs.core.truth_(inst_45564__$1)){
var statearr_45613_45659 = state_45594__$1;
(statearr_45613_45659[(1)] = (8));

} else {
var statearr_45615_45660 = state_45594__$1;
(statearr_45615_45660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (14))){
var inst_45563 = (state_45594[(10)]);
var inst_45575 = (state_45594[(9)]);
var inst_45572 = (state_45594[(2)]);
var inst_45573 = console.log("Loading!",inst_45563);
var inst_45574 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45575__$1 = cljs.core.get.call(null,inst_45574,inst_45563);
var state_45594__$1 = (function (){var statearr_45618 = state_45594;
(statearr_45618[(12)] = inst_45573);

(statearr_45618[(8)] = inst_45572);

(statearr_45618[(9)] = inst_45575__$1);

return statearr_45618;
})();
if(cljs.core.truth_(inst_45575__$1)){
var statearr_45619_45661 = state_45594__$1;
(statearr_45619_45661[(1)] = (15));

} else {
var statearr_45621_45662 = state_45594__$1;
(statearr_45621_45662[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (16))){
var inst_45572 = (state_45594[(8)]);
var inst_45579 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45572);
var state_45594__$1 = state_45594;
var statearr_45623_45664 = state_45594__$1;
(statearr_45623_45664[(2)] = inst_45579);

(statearr_45623_45664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (10))){
var inst_45586 = (state_45594[(2)]);
var state_45594__$1 = (function (){var statearr_45624 = state_45594;
(statearr_45624[(13)] = inst_45586);

return statearr_45624;
})();
var statearr_45626_45665 = state_45594__$1;
(statearr_45626_45665[(2)] = null);

(statearr_45626_45665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45595 === (8))){
var inst_45564 = (state_45594[(11)]);
var inst_45566 = console.log("Evaling!",inst_45564);
var inst_45567 = eval(inst_45564);
var state_45594__$1 = (function (){var statearr_45627 = state_45594;
(statearr_45627[(14)] = inst_45566);

return statearr_45627;
})();
var statearr_45628_45667 = state_45594__$1;
(statearr_45628_45667[(2)] = inst_45567);

(statearr_45628_45667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto__))
;
return ((function (switch__33607__auto__,c__33952__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$state_machine__33608__auto____0 = (function (){
var statearr_45629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45629[(0)] = figwheel$client$file_reloading$state_machine__33608__auto__);

(statearr_45629[(1)] = (1));

return statearr_45629;
});
var figwheel$client$file_reloading$state_machine__33608__auto____1 = (function (state_45594){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_45594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e45631){if((e45631 instanceof Object)){
var ex__33611__auto__ = e45631;
var statearr_45634_45672 = state_45594;
(statearr_45634_45672[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45673 = state_45594;
state_45594 = G__45673;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33608__auto__ = function(state_45594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33608__auto____1.call(this,state_45594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33608__auto____0;
figwheel$client$file_reloading$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33608__auto____1;
return figwheel$client$file_reloading$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_45636 = f__33953__auto__.call(null);
(statearr_45636[(6)] = c__33952__auto__);

return statearr_45636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45677 = arguments.length;
switch (G__45677) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45679,callback){
var map__45680 = p__45679;
var map__45680__$1 = ((((!((map__45680 == null)))?((((map__45680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45680):map__45680);
var file_msg = map__45680__$1;
var namespace = cljs.core.get.call(null,map__45680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45680,map__45680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45680,map__45680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45687){
var map__45688 = p__45687;
var map__45688__$1 = ((((!((map__45688 == null)))?((((map__45688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45688):map__45688);
var file_msg = map__45688__$1;
var namespace = cljs.core.get.call(null,map__45688__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45695){
var map__45696 = p__45695;
var map__45696__$1 = ((((!((map__45696 == null)))?((((map__45696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45696):map__45696);
var file_msg = map__45696__$1;
var namespace = cljs.core.get.call(null,map__45696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30060__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30060__auto__){
var or__30072__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
var or__30072__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30072__auto____$1)){
return or__30072__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30060__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45701,callback){
var map__45702 = p__45701;
var map__45702__$1 = ((((!((map__45702 == null)))?((((map__45702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45702):map__45702);
var file_msg = map__45702__$1;
var request_url = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33952__auto___45781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___45781,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___45781,out){
return (function (state_45760){
var state_val_45762 = (state_45760[(1)]);
if((state_val_45762 === (1))){
var inst_45733 = cljs.core.seq.call(null,files);
var inst_45734 = cljs.core.first.call(null,inst_45733);
var inst_45735 = cljs.core.next.call(null,inst_45733);
var inst_45736 = files;
var state_45760__$1 = (function (){var statearr_45765 = state_45760;
(statearr_45765[(7)] = inst_45734);

(statearr_45765[(8)] = inst_45736);

(statearr_45765[(9)] = inst_45735);

return statearr_45765;
})();
var statearr_45766_45784 = state_45760__$1;
(statearr_45766_45784[(2)] = null);

(statearr_45766_45784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (2))){
var inst_45742 = (state_45760[(10)]);
var inst_45736 = (state_45760[(8)]);
var inst_45741 = cljs.core.seq.call(null,inst_45736);
var inst_45742__$1 = cljs.core.first.call(null,inst_45741);
var inst_45743 = cljs.core.next.call(null,inst_45741);
var inst_45744 = (inst_45742__$1 == null);
var inst_45745 = cljs.core.not.call(null,inst_45744);
var state_45760__$1 = (function (){var statearr_45767 = state_45760;
(statearr_45767[(11)] = inst_45743);

(statearr_45767[(10)] = inst_45742__$1);

return statearr_45767;
})();
if(inst_45745){
var statearr_45768_45787 = state_45760__$1;
(statearr_45768_45787[(1)] = (4));

} else {
var statearr_45769_45788 = state_45760__$1;
(statearr_45769_45788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (3))){
var inst_45758 = (state_45760[(2)]);
var state_45760__$1 = state_45760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45760__$1,inst_45758);
} else {
if((state_val_45762 === (4))){
var inst_45742 = (state_45760[(10)]);
var inst_45748 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45742);
var state_45760__$1 = state_45760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45760__$1,(7),inst_45748);
} else {
if((state_val_45762 === (5))){
var inst_45754 = cljs.core.async.close_BANG_.call(null,out);
var state_45760__$1 = state_45760;
var statearr_45771_45801 = state_45760__$1;
(statearr_45771_45801[(2)] = inst_45754);

(statearr_45771_45801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (6))){
var inst_45756 = (state_45760[(2)]);
var state_45760__$1 = state_45760;
var statearr_45772_45804 = state_45760__$1;
(statearr_45772_45804[(2)] = inst_45756);

(statearr_45772_45804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (7))){
var inst_45743 = (state_45760[(11)]);
var inst_45750 = (state_45760[(2)]);
var inst_45751 = cljs.core.async.put_BANG_.call(null,out,inst_45750);
var inst_45736 = inst_45743;
var state_45760__$1 = (function (){var statearr_45775 = state_45760;
(statearr_45775[(12)] = inst_45751);

(statearr_45775[(8)] = inst_45736);

return statearr_45775;
})();
var statearr_45776_45811 = state_45760__$1;
(statearr_45776_45811[(2)] = null);

(statearr_45776_45811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33952__auto___45781,out))
;
return ((function (switch__33607__auto__,c__33952__auto___45781,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0 = (function (){
var statearr_45777 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45777[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__);

(statearr_45777[(1)] = (1));

return statearr_45777;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1 = (function (state_45760){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_45760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e45778){if((e45778 instanceof Object)){
var ex__33611__auto__ = e45778;
var statearr_45779_45814 = state_45760;
(statearr_45779_45814[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45818 = state_45760;
state_45760 = G__45818;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__ = function(state_45760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1.call(this,state_45760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___45781,out))
})();
var state__33954__auto__ = (function (){var statearr_45780 = f__33953__auto__.call(null);
(statearr_45780[(6)] = c__33952__auto___45781);

return statearr_45780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___45781,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45821,opts){
var map__45822 = p__45821;
var map__45822__$1 = ((((!((map__45822 == null)))?((((map__45822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45822):map__45822);
var eval_body = cljs.core.get.call(null,map__45822__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45822__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30060__auto__ = eval_body;
if(cljs.core.truth_(and__30060__auto__)){
return typeof eval_body === 'string';
} else {
return and__30060__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45824){var e = e45824;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45828_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45828_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45829){
var vec__45830 = p__45829;
var k = cljs.core.nth.call(null,vec__45830,(0),null);
var v = cljs.core.nth.call(null,vec__45830,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45833){
var vec__45834 = p__45833;
var k = cljs.core.nth.call(null,vec__45834,(0),null);
var v = cljs.core.nth.call(null,vec__45834,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45840,p__45841){
var map__45842 = p__45840;
var map__45842__$1 = ((((!((map__45842 == null)))?((((map__45842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45842):map__45842);
var opts = map__45842__$1;
var before_jsload = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45843 = p__45841;
var map__45843__$1 = ((((!((map__45843 == null)))?((((map__45843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45843):map__45843);
var msg = map__45843__$1;
var files = cljs.core.get.call(null,map__45843__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45843__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45843__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45997){
var state_val_45998 = (state_45997[(1)]);
if((state_val_45998 === (7))){
var inst_45860 = (state_45997[(7)]);
var inst_45859 = (state_45997[(8)]);
var inst_45858 = (state_45997[(9)]);
var inst_45857 = (state_45997[(10)]);
var inst_45865 = cljs.core._nth.call(null,inst_45858,inst_45860);
var inst_45866 = figwheel.client.file_reloading.eval_body.call(null,inst_45865,opts);
var inst_45867 = (inst_45860 + (1));
var tmp45999 = inst_45859;
var tmp46000 = inst_45858;
var tmp46001 = inst_45857;
var inst_45857__$1 = tmp46001;
var inst_45858__$1 = tmp46000;
var inst_45859__$1 = tmp45999;
var inst_45860__$1 = inst_45867;
var state_45997__$1 = (function (){var statearr_46002 = state_45997;
(statearr_46002[(7)] = inst_45860__$1);

(statearr_46002[(8)] = inst_45859__$1);

(statearr_46002[(9)] = inst_45858__$1);

(statearr_46002[(10)] = inst_45857__$1);

(statearr_46002[(11)] = inst_45866);

return statearr_46002;
})();
var statearr_46003_46096 = state_45997__$1;
(statearr_46003_46096[(2)] = null);

(statearr_46003_46096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (20))){
var inst_45900 = (state_45997[(12)]);
var inst_45908 = figwheel.client.file_reloading.sort_files.call(null,inst_45900);
var state_45997__$1 = state_45997;
var statearr_46004_46097 = state_45997__$1;
(statearr_46004_46097[(2)] = inst_45908);

(statearr_46004_46097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (27))){
var state_45997__$1 = state_45997;
var statearr_46005_46098 = state_45997__$1;
(statearr_46005_46098[(2)] = null);

(statearr_46005_46098[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (1))){
var inst_45849 = (state_45997[(13)]);
var inst_45846 = before_jsload.call(null,files);
var inst_45847 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45848 = (function (){return ((function (inst_45849,inst_45846,inst_45847,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45837_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45837_SHARP_);
});
;})(inst_45849,inst_45846,inst_45847,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45849__$1 = cljs.core.filter.call(null,inst_45848,files);
var inst_45850 = cljs.core.not_empty.call(null,inst_45849__$1);
var state_45997__$1 = (function (){var statearr_46006 = state_45997;
(statearr_46006[(14)] = inst_45846);

(statearr_46006[(15)] = inst_45847);

(statearr_46006[(13)] = inst_45849__$1);

return statearr_46006;
})();
if(cljs.core.truth_(inst_45850)){
var statearr_46007_46099 = state_45997__$1;
(statearr_46007_46099[(1)] = (2));

} else {
var statearr_46008_46100 = state_45997__$1;
(statearr_46008_46100[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (24))){
var state_45997__$1 = state_45997;
var statearr_46009_46101 = state_45997__$1;
(statearr_46009_46101[(2)] = null);

(statearr_46009_46101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (39))){
var inst_45950 = (state_45997[(16)]);
var state_45997__$1 = state_45997;
var statearr_46010_46105 = state_45997__$1;
(statearr_46010_46105[(2)] = inst_45950);

(statearr_46010_46105[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (46))){
var inst_45992 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
var statearr_46011_46106 = state_45997__$1;
(statearr_46011_46106[(2)] = inst_45992);

(statearr_46011_46106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (4))){
var inst_45894 = (state_45997[(2)]);
var inst_45895 = cljs.core.List.EMPTY;
var inst_45896 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45895);
var inst_45897 = (function (){return ((function (inst_45894,inst_45895,inst_45896,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45838_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45838_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45838_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45838_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_45894,inst_45895,inst_45896,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45898 = cljs.core.filter.call(null,inst_45897,files);
var inst_45899 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45900 = cljs.core.concat.call(null,inst_45898,inst_45899);
var state_45997__$1 = (function (){var statearr_46012 = state_45997;
(statearr_46012[(12)] = inst_45900);

(statearr_46012[(17)] = inst_45894);

(statearr_46012[(18)] = inst_45896);

return statearr_46012;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46013_46107 = state_45997__$1;
(statearr_46013_46107[(1)] = (16));

} else {
var statearr_46014_46108 = state_45997__$1;
(statearr_46014_46108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (15))){
var inst_45884 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
var statearr_46015_46109 = state_45997__$1;
(statearr_46015_46109[(2)] = inst_45884);

(statearr_46015_46109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (21))){
var inst_45910 = (state_45997[(19)]);
var inst_45910__$1 = (state_45997[(2)]);
var inst_45911 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45910__$1);
var state_45997__$1 = (function (){var statearr_46016 = state_45997;
(statearr_46016[(19)] = inst_45910__$1);

return statearr_46016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45997__$1,(22),inst_45911);
} else {
if((state_val_45998 === (31))){
var inst_45995 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45997__$1,inst_45995);
} else {
if((state_val_45998 === (32))){
var inst_45950 = (state_45997[(16)]);
var inst_45955 = inst_45950.cljs$lang$protocol_mask$partition0$;
var inst_45956 = (inst_45955 & (64));
var inst_45957 = inst_45950.cljs$core$ISeq$;
var inst_45958 = (cljs.core.PROTOCOL_SENTINEL === inst_45957);
var inst_45959 = (inst_45956) || (inst_45958);
var state_45997__$1 = state_45997;
if(cljs.core.truth_(inst_45959)){
var statearr_46017_46110 = state_45997__$1;
(statearr_46017_46110[(1)] = (35));

} else {
var statearr_46018_46111 = state_45997__$1;
(statearr_46018_46111[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (40))){
var inst_45972 = (state_45997[(20)]);
var inst_45971 = (state_45997[(2)]);
var inst_45972__$1 = cljs.core.get.call(null,inst_45971,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45973 = cljs.core.get.call(null,inst_45971,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45974 = cljs.core.not_empty.call(null,inst_45972__$1);
var state_45997__$1 = (function (){var statearr_46019 = state_45997;
(statearr_46019[(21)] = inst_45973);

(statearr_46019[(20)] = inst_45972__$1);

return statearr_46019;
})();
if(cljs.core.truth_(inst_45974)){
var statearr_46020_46112 = state_45997__$1;
(statearr_46020_46112[(1)] = (41));

} else {
var statearr_46021_46113 = state_45997__$1;
(statearr_46021_46113[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (33))){
var state_45997__$1 = state_45997;
var statearr_46022_46114 = state_45997__$1;
(statearr_46022_46114[(2)] = false);

(statearr_46022_46114[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (13))){
var inst_45870 = (state_45997[(22)]);
var inst_45874 = cljs.core.chunk_first.call(null,inst_45870);
var inst_45875 = cljs.core.chunk_rest.call(null,inst_45870);
var inst_45876 = cljs.core.count.call(null,inst_45874);
var inst_45857 = inst_45875;
var inst_45858 = inst_45874;
var inst_45859 = inst_45876;
var inst_45860 = (0);
var state_45997__$1 = (function (){var statearr_46023 = state_45997;
(statearr_46023[(7)] = inst_45860);

(statearr_46023[(8)] = inst_45859);

(statearr_46023[(9)] = inst_45858);

(statearr_46023[(10)] = inst_45857);

return statearr_46023;
})();
var statearr_46024_46118 = state_45997__$1;
(statearr_46024_46118[(2)] = null);

(statearr_46024_46118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (22))){
var inst_45913 = (state_45997[(23)]);
var inst_45910 = (state_45997[(19)]);
var inst_45918 = (state_45997[(24)]);
var inst_45914 = (state_45997[(25)]);
var inst_45913__$1 = (state_45997[(2)]);
var inst_45914__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45913__$1);
var inst_45915 = (function (){var all_files = inst_45910;
var res_SINGLEQUOTE_ = inst_45913__$1;
var res = inst_45914__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45913,inst_45910,inst_45918,inst_45914,inst_45913__$1,inst_45914__$1,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45839_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45839_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45913,inst_45910,inst_45918,inst_45914,inst_45913__$1,inst_45914__$1,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45916 = cljs.core.filter.call(null,inst_45915,inst_45913__$1);
var inst_45917 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45918__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45917);
var inst_45919 = cljs.core.not_empty.call(null,inst_45918__$1);
var state_45997__$1 = (function (){var statearr_46025 = state_45997;
(statearr_46025[(23)] = inst_45913__$1);

(statearr_46025[(26)] = inst_45916);

(statearr_46025[(24)] = inst_45918__$1);

(statearr_46025[(25)] = inst_45914__$1);

return statearr_46025;
})();
if(cljs.core.truth_(inst_45919)){
var statearr_46026_46124 = state_45997__$1;
(statearr_46026_46124[(1)] = (23));

} else {
var statearr_46027_46125 = state_45997__$1;
(statearr_46027_46125[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (36))){
var state_45997__$1 = state_45997;
var statearr_46028_46126 = state_45997__$1;
(statearr_46028_46126[(2)] = false);

(statearr_46028_46126[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (41))){
var inst_45972 = (state_45997[(20)]);
var inst_45976 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45977 = cljs.core.map.call(null,inst_45976,inst_45972);
var inst_45978 = cljs.core.pr_str.call(null,inst_45977);
var inst_45979 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45978)].join('');
var inst_45980 = figwheel.client.utils.log.call(null,inst_45979);
var state_45997__$1 = state_45997;
var statearr_46029_46127 = state_45997__$1;
(statearr_46029_46127[(2)] = inst_45980);

(statearr_46029_46127[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (43))){
var inst_45973 = (state_45997[(21)]);
var inst_45983 = (state_45997[(2)]);
var inst_45984 = cljs.core.not_empty.call(null,inst_45973);
var state_45997__$1 = (function (){var statearr_46030 = state_45997;
(statearr_46030[(27)] = inst_45983);

return statearr_46030;
})();
if(cljs.core.truth_(inst_45984)){
var statearr_46031_46128 = state_45997__$1;
(statearr_46031_46128[(1)] = (44));

} else {
var statearr_46032_46129 = state_45997__$1;
(statearr_46032_46129[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (29))){
var inst_45913 = (state_45997[(23)]);
var inst_45950 = (state_45997[(16)]);
var inst_45910 = (state_45997[(19)]);
var inst_45916 = (state_45997[(26)]);
var inst_45918 = (state_45997[(24)]);
var inst_45914 = (state_45997[(25)]);
var inst_45946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45949 = (function (){var all_files = inst_45910;
var res_SINGLEQUOTE_ = inst_45913;
var res = inst_45914;
var files_not_loaded = inst_45916;
var dependencies_that_loaded = inst_45918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45950,inst_45910,inst_45916,inst_45918,inst_45914,inst_45946,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45948){
var map__46033 = p__45948;
var map__46033__$1 = ((((!((map__46033 == null)))?((((map__46033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46033):map__46033);
var namespace = cljs.core.get.call(null,map__46033__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45950,inst_45910,inst_45916,inst_45918,inst_45914,inst_45946,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45950__$1 = cljs.core.group_by.call(null,inst_45949,inst_45916);
var inst_45952 = (inst_45950__$1 == null);
var inst_45953 = cljs.core.not.call(null,inst_45952);
var state_45997__$1 = (function (){var statearr_46035 = state_45997;
(statearr_46035[(28)] = inst_45946);

(statearr_46035[(16)] = inst_45950__$1);

return statearr_46035;
})();
if(inst_45953){
var statearr_46036_46132 = state_45997__$1;
(statearr_46036_46132[(1)] = (32));

} else {
var statearr_46037_46133 = state_45997__$1;
(statearr_46037_46133[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (44))){
var inst_45973 = (state_45997[(21)]);
var inst_45986 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45973);
var inst_45987 = cljs.core.pr_str.call(null,inst_45986);
var inst_45988 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45987)].join('');
var inst_45989 = figwheel.client.utils.log.call(null,inst_45988);
var state_45997__$1 = state_45997;
var statearr_46038_46134 = state_45997__$1;
(statearr_46038_46134[(2)] = inst_45989);

(statearr_46038_46134[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (6))){
var inst_45891 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
var statearr_46039_46135 = state_45997__$1;
(statearr_46039_46135[(2)] = inst_45891);

(statearr_46039_46135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (28))){
var inst_45916 = (state_45997[(26)]);
var inst_45943 = (state_45997[(2)]);
var inst_45944 = cljs.core.not_empty.call(null,inst_45916);
var state_45997__$1 = (function (){var statearr_46040 = state_45997;
(statearr_46040[(29)] = inst_45943);

return statearr_46040;
})();
if(cljs.core.truth_(inst_45944)){
var statearr_46041_46136 = state_45997__$1;
(statearr_46041_46136[(1)] = (29));

} else {
var statearr_46042_46137 = state_45997__$1;
(statearr_46042_46137[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (25))){
var inst_45914 = (state_45997[(25)]);
var inst_45930 = (state_45997[(2)]);
var inst_45931 = cljs.core.not_empty.call(null,inst_45914);
var state_45997__$1 = (function (){var statearr_46043 = state_45997;
(statearr_46043[(30)] = inst_45930);

return statearr_46043;
})();
if(cljs.core.truth_(inst_45931)){
var statearr_46044_46138 = state_45997__$1;
(statearr_46044_46138[(1)] = (26));

} else {
var statearr_46045_46139 = state_45997__$1;
(statearr_46045_46139[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (34))){
var inst_45966 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
if(cljs.core.truth_(inst_45966)){
var statearr_46046_46140 = state_45997__$1;
(statearr_46046_46140[(1)] = (38));

} else {
var statearr_46047_46141 = state_45997__$1;
(statearr_46047_46141[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (17))){
var state_45997__$1 = state_45997;
var statearr_46049_46142 = state_45997__$1;
(statearr_46049_46142[(2)] = recompile_dependents);

(statearr_46049_46142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (3))){
var state_45997__$1 = state_45997;
var statearr_46051_46146 = state_45997__$1;
(statearr_46051_46146[(2)] = null);

(statearr_46051_46146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (12))){
var inst_45887 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
var statearr_46052_46147 = state_45997__$1;
(statearr_46052_46147[(2)] = inst_45887);

(statearr_46052_46147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (2))){
var inst_45849 = (state_45997[(13)]);
var inst_45856 = cljs.core.seq.call(null,inst_45849);
var inst_45857 = inst_45856;
var inst_45858 = null;
var inst_45859 = (0);
var inst_45860 = (0);
var state_45997__$1 = (function (){var statearr_46053 = state_45997;
(statearr_46053[(7)] = inst_45860);

(statearr_46053[(8)] = inst_45859);

(statearr_46053[(9)] = inst_45858);

(statearr_46053[(10)] = inst_45857);

return statearr_46053;
})();
var statearr_46054_46148 = state_45997__$1;
(statearr_46054_46148[(2)] = null);

(statearr_46054_46148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (23))){
var inst_45913 = (state_45997[(23)]);
var inst_45910 = (state_45997[(19)]);
var inst_45916 = (state_45997[(26)]);
var inst_45918 = (state_45997[(24)]);
var inst_45914 = (state_45997[(25)]);
var inst_45921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45923 = (function (){var all_files = inst_45910;
var res_SINGLEQUOTE_ = inst_45913;
var res = inst_45914;
var files_not_loaded = inst_45916;
var dependencies_that_loaded = inst_45918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45910,inst_45916,inst_45918,inst_45914,inst_45921,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45922){
var map__46055 = p__45922;
var map__46055__$1 = ((((!((map__46055 == null)))?((((map__46055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46055):map__46055);
var request_url = cljs.core.get.call(null,map__46055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45910,inst_45916,inst_45918,inst_45914,inst_45921,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45924 = cljs.core.reverse.call(null,inst_45918);
var inst_45925 = cljs.core.map.call(null,inst_45923,inst_45924);
var inst_45926 = cljs.core.pr_str.call(null,inst_45925);
var inst_45927 = figwheel.client.utils.log.call(null,inst_45926);
var state_45997__$1 = (function (){var statearr_46057 = state_45997;
(statearr_46057[(31)] = inst_45921);

return statearr_46057;
})();
var statearr_46058_46150 = state_45997__$1;
(statearr_46058_46150[(2)] = inst_45927);

(statearr_46058_46150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (35))){
var state_45997__$1 = state_45997;
var statearr_46059_46151 = state_45997__$1;
(statearr_46059_46151[(2)] = true);

(statearr_46059_46151[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (19))){
var inst_45900 = (state_45997[(12)]);
var inst_45906 = figwheel.client.file_reloading.expand_files.call(null,inst_45900);
var state_45997__$1 = state_45997;
var statearr_46060_46152 = state_45997__$1;
(statearr_46060_46152[(2)] = inst_45906);

(statearr_46060_46152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (11))){
var state_45997__$1 = state_45997;
var statearr_46061_46155 = state_45997__$1;
(statearr_46061_46155[(2)] = null);

(statearr_46061_46155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (9))){
var inst_45889 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
var statearr_46062_46157 = state_45997__$1;
(statearr_46062_46157[(2)] = inst_45889);

(statearr_46062_46157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (5))){
var inst_45860 = (state_45997[(7)]);
var inst_45859 = (state_45997[(8)]);
var inst_45862 = (inst_45860 < inst_45859);
var inst_45863 = inst_45862;
var state_45997__$1 = state_45997;
if(cljs.core.truth_(inst_45863)){
var statearr_46063_46162 = state_45997__$1;
(statearr_46063_46162[(1)] = (7));

} else {
var statearr_46064_46163 = state_45997__$1;
(statearr_46064_46163[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (14))){
var inst_45870 = (state_45997[(22)]);
var inst_45879 = cljs.core.first.call(null,inst_45870);
var inst_45880 = figwheel.client.file_reloading.eval_body.call(null,inst_45879,opts);
var inst_45881 = cljs.core.next.call(null,inst_45870);
var inst_45857 = inst_45881;
var inst_45858 = null;
var inst_45859 = (0);
var inst_45860 = (0);
var state_45997__$1 = (function (){var statearr_46065 = state_45997;
(statearr_46065[(7)] = inst_45860);

(statearr_46065[(8)] = inst_45859);

(statearr_46065[(9)] = inst_45858);

(statearr_46065[(10)] = inst_45857);

(statearr_46065[(32)] = inst_45880);

return statearr_46065;
})();
var statearr_46066_46168 = state_45997__$1;
(statearr_46066_46168[(2)] = null);

(statearr_46066_46168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (45))){
var state_45997__$1 = state_45997;
var statearr_46067_46169 = state_45997__$1;
(statearr_46067_46169[(2)] = null);

(statearr_46067_46169[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (26))){
var inst_45913 = (state_45997[(23)]);
var inst_45910 = (state_45997[(19)]);
var inst_45916 = (state_45997[(26)]);
var inst_45918 = (state_45997[(24)]);
var inst_45914 = (state_45997[(25)]);
var inst_45933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45935 = (function (){var all_files = inst_45910;
var res_SINGLEQUOTE_ = inst_45913;
var res = inst_45914;
var files_not_loaded = inst_45916;
var dependencies_that_loaded = inst_45918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45910,inst_45916,inst_45918,inst_45914,inst_45933,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45934){
var map__46068 = p__45934;
var map__46068__$1 = ((((!((map__46068 == null)))?((((map__46068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46068):map__46068);
var namespace = cljs.core.get.call(null,map__46068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45910,inst_45916,inst_45918,inst_45914,inst_45933,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45936 = cljs.core.map.call(null,inst_45935,inst_45914);
var inst_45937 = cljs.core.pr_str.call(null,inst_45936);
var inst_45938 = figwheel.client.utils.log.call(null,inst_45937);
var inst_45939 = (function (){var all_files = inst_45910;
var res_SINGLEQUOTE_ = inst_45913;
var res = inst_45914;
var files_not_loaded = inst_45916;
var dependencies_that_loaded = inst_45918;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45910,inst_45916,inst_45918,inst_45914,inst_45933,inst_45935,inst_45936,inst_45937,inst_45938,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45913,inst_45910,inst_45916,inst_45918,inst_45914,inst_45933,inst_45935,inst_45936,inst_45937,inst_45938,state_val_45998,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45940 = setTimeout(inst_45939,(10));
var state_45997__$1 = (function (){var statearr_46070 = state_45997;
(statearr_46070[(33)] = inst_45938);

(statearr_46070[(34)] = inst_45933);

return statearr_46070;
})();
var statearr_46071_46171 = state_45997__$1;
(statearr_46071_46171[(2)] = inst_45940);

(statearr_46071_46171[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (16))){
var state_45997__$1 = state_45997;
var statearr_46072_46172 = state_45997__$1;
(statearr_46072_46172[(2)] = reload_dependents);

(statearr_46072_46172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (38))){
var inst_45950 = (state_45997[(16)]);
var inst_45968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45950);
var state_45997__$1 = state_45997;
var statearr_46073_46173 = state_45997__$1;
(statearr_46073_46173[(2)] = inst_45968);

(statearr_46073_46173[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (30))){
var state_45997__$1 = state_45997;
var statearr_46075_46174 = state_45997__$1;
(statearr_46075_46174[(2)] = null);

(statearr_46075_46174[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (10))){
var inst_45870 = (state_45997[(22)]);
var inst_45872 = cljs.core.chunked_seq_QMARK_.call(null,inst_45870);
var state_45997__$1 = state_45997;
if(inst_45872){
var statearr_46076_46175 = state_45997__$1;
(statearr_46076_46175[(1)] = (13));

} else {
var statearr_46077_46176 = state_45997__$1;
(statearr_46077_46176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (18))){
var inst_45904 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
if(cljs.core.truth_(inst_45904)){
var statearr_46078_46177 = state_45997__$1;
(statearr_46078_46177[(1)] = (19));

} else {
var statearr_46079_46178 = state_45997__$1;
(statearr_46079_46178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (42))){
var state_45997__$1 = state_45997;
var statearr_46080_46179 = state_45997__$1;
(statearr_46080_46179[(2)] = null);

(statearr_46080_46179[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (37))){
var inst_45963 = (state_45997[(2)]);
var state_45997__$1 = state_45997;
var statearr_46081_46180 = state_45997__$1;
(statearr_46081_46180[(2)] = inst_45963);

(statearr_46081_46180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45998 === (8))){
var inst_45870 = (state_45997[(22)]);
var inst_45857 = (state_45997[(10)]);
var inst_45870__$1 = cljs.core.seq.call(null,inst_45857);
var state_45997__$1 = (function (){var statearr_46082 = state_45997;
(statearr_46082[(22)] = inst_45870__$1);

return statearr_46082;
})();
if(inst_45870__$1){
var statearr_46083_46181 = state_45997__$1;
(statearr_46083_46181[(1)] = (10));

} else {
var statearr_46084_46182 = state_45997__$1;
(statearr_46084_46182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33607__auto__,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0 = (function (){
var statearr_46086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46086[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__);

(statearr_46086[(1)] = (1));

return statearr_46086;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1 = (function (state_45997){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_45997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e46088){if((e46088 instanceof Object)){
var ex__33611__auto__ = e46088;
var statearr_46090_46187 = state_45997;
(statearr_46090_46187[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46188 = state_45997;
state_45997 = G__46188;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__ = function(state_45997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1.call(this,state_45997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33954__auto__ = (function (){var statearr_46092 = f__33953__auto__.call(null);
(statearr_46092[(6)] = c__33952__auto__);

return statearr_46092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,map__45842,map__45842__$1,opts,before_jsload,on_jsload,reload_dependents,map__45843,map__45843__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46195,link){
var map__46196 = p__46195;
var map__46196__$1 = ((((!((map__46196 == null)))?((((map__46196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46196):map__46196);
var file = cljs.core.get.call(null,map__46196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__46196,map__46196__$1,file){
return (function (p1__46192_SHARP_,p2__46193_SHARP_){
if(cljs.core._EQ_.call(null,p1__46192_SHARP_,p2__46193_SHARP_)){
return p1__46192_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__46196,map__46196__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46201){
var map__46202 = p__46201;
var map__46202__$1 = ((((!((map__46202 == null)))?((((map__46202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46202):map__46202);
var match_length = cljs.core.get.call(null,map__46202__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46202__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46200_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46200_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46208_SHARP_,p2__46209_SHARP_){
return cljs.core.assoc.call(null,p1__46208_SHARP_,cljs.core.get.call(null,p2__46209_SHARP_,key),p2__46209_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_46218 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46218);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46218);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46220,p__46221){
var map__46222 = p__46220;
var map__46222__$1 = ((((!((map__46222 == null)))?((((map__46222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46222):map__46222);
var on_cssload = cljs.core.get.call(null,map__46222__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46223 = p__46221;
var map__46223__$1 = ((((!((map__46223 == null)))?((((map__46223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46223):map__46223);
var files_msg = map__46223__$1;
var files = cljs.core.get.call(null,map__46223__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510360395659
