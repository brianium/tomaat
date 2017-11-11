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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38276_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38276_SHARP_));
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
var seq__38289 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38290 = null;
var count__38291 = (0);
var i__38292 = (0);
while(true){
if((i__38292 < count__38291)){
var n = cljs.core._nth.call(null,chunk__38290,i__38292);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38304 = seq__38289;
var G__38305 = chunk__38290;
var G__38306 = count__38291;
var G__38307 = (i__38292 + (1));
seq__38289 = G__38304;
chunk__38290 = G__38305;
count__38291 = G__38306;
i__38292 = G__38307;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38289);
if(temp__5278__auto__){
var seq__38289__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38289__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__38289__$1);
var G__38312 = cljs.core.chunk_rest.call(null,seq__38289__$1);
var G__38313 = c__31003__auto__;
var G__38314 = cljs.core.count.call(null,c__31003__auto__);
var G__38315 = (0);
seq__38289 = G__38312;
chunk__38290 = G__38313;
count__38291 = G__38314;
i__38292 = G__38315;
continue;
} else {
var n = cljs.core.first.call(null,seq__38289__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38316 = cljs.core.next.call(null,seq__38289__$1);
var G__38317 = null;
var G__38318 = (0);
var G__38319 = (0);
seq__38289 = G__38316;
chunk__38290 = G__38317;
count__38291 = G__38318;
i__38292 = G__38319;
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
return cljs.core.some.call(null,(function (p__38329){
var vec__38330 = p__38329;
var _ = cljs.core.nth.call(null,vec__38330,(0),null);
var v = cljs.core.nth.call(null,vec__38330,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__38334){
var vec__38335 = p__38334;
var k = cljs.core.nth.call(null,vec__38335,(0),null);
var v = cljs.core.nth.call(null,vec__38335,(1),null);
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

var seq__38387_38404 = cljs.core.seq.call(null,deps);
var chunk__38388_38405 = null;
var count__38389_38406 = (0);
var i__38390_38407 = (0);
while(true){
if((i__38390_38407 < count__38389_38406)){
var dep_38408 = cljs.core._nth.call(null,chunk__38388_38405,i__38390_38407);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_38408;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38408));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38408,(depth + (1)),state);
} else {
}

var G__38410 = seq__38387_38404;
var G__38411 = chunk__38388_38405;
var G__38412 = count__38389_38406;
var G__38413 = (i__38390_38407 + (1));
seq__38387_38404 = G__38410;
chunk__38388_38405 = G__38411;
count__38389_38406 = G__38412;
i__38390_38407 = G__38413;
continue;
} else {
var temp__5278__auto___38416 = cljs.core.seq.call(null,seq__38387_38404);
if(temp__5278__auto___38416){
var seq__38387_38417__$1 = temp__5278__auto___38416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38387_38417__$1)){
var c__31003__auto___38418 = cljs.core.chunk_first.call(null,seq__38387_38417__$1);
var G__38419 = cljs.core.chunk_rest.call(null,seq__38387_38417__$1);
var G__38420 = c__31003__auto___38418;
var G__38421 = cljs.core.count.call(null,c__31003__auto___38418);
var G__38422 = (0);
seq__38387_38404 = G__38419;
chunk__38388_38405 = G__38420;
count__38389_38406 = G__38421;
i__38390_38407 = G__38422;
continue;
} else {
var dep_38423 = cljs.core.first.call(null,seq__38387_38417__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_38423;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38423));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38423,(depth + (1)),state);
} else {
}

var G__38424 = cljs.core.next.call(null,seq__38387_38417__$1);
var G__38425 = null;
var G__38426 = (0);
var G__38427 = (0);
seq__38387_38404 = G__38424;
chunk__38388_38405 = G__38425;
count__38389_38406 = G__38426;
i__38390_38407 = G__38427;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38397){
var vec__38399 = p__38397;
var seq__38400 = cljs.core.seq.call(null,vec__38399);
var first__38401 = cljs.core.first.call(null,seq__38400);
var seq__38400__$1 = cljs.core.next.call(null,seq__38400);
var x = first__38401;
var xs = seq__38400__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38399,seq__38400,first__38401,seq__38400__$1,x,xs,get_deps__$1){
return (function (p1__38359_SHARP_){
return clojure.set.difference.call(null,p1__38359_SHARP_,x);
});})(vec__38399,seq__38400,first__38401,seq__38400__$1,x,xs,get_deps__$1))
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
var seq__38447 = cljs.core.seq.call(null,provides);
var chunk__38448 = null;
var count__38449 = (0);
var i__38450 = (0);
while(true){
if((i__38450 < count__38449)){
var prov = cljs.core._nth.call(null,chunk__38448,i__38450);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38452_38476 = cljs.core.seq.call(null,requires);
var chunk__38453_38477 = null;
var count__38454_38478 = (0);
var i__38455_38479 = (0);
while(true){
if((i__38455_38479 < count__38454_38478)){
var req_38487 = cljs.core._nth.call(null,chunk__38453_38477,i__38455_38479);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38487,prov);

var G__38488 = seq__38452_38476;
var G__38489 = chunk__38453_38477;
var G__38490 = count__38454_38478;
var G__38491 = (i__38455_38479 + (1));
seq__38452_38476 = G__38488;
chunk__38453_38477 = G__38489;
count__38454_38478 = G__38490;
i__38455_38479 = G__38491;
continue;
} else {
var temp__5278__auto___38492 = cljs.core.seq.call(null,seq__38452_38476);
if(temp__5278__auto___38492){
var seq__38452_38493__$1 = temp__5278__auto___38492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38452_38493__$1)){
var c__31003__auto___38494 = cljs.core.chunk_first.call(null,seq__38452_38493__$1);
var G__38496 = cljs.core.chunk_rest.call(null,seq__38452_38493__$1);
var G__38497 = c__31003__auto___38494;
var G__38498 = cljs.core.count.call(null,c__31003__auto___38494);
var G__38499 = (0);
seq__38452_38476 = G__38496;
chunk__38453_38477 = G__38497;
count__38454_38478 = G__38498;
i__38455_38479 = G__38499;
continue;
} else {
var req_38500 = cljs.core.first.call(null,seq__38452_38493__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38500,prov);

var G__38502 = cljs.core.next.call(null,seq__38452_38493__$1);
var G__38503 = null;
var G__38504 = (0);
var G__38505 = (0);
seq__38452_38476 = G__38502;
chunk__38453_38477 = G__38503;
count__38454_38478 = G__38504;
i__38455_38479 = G__38505;
continue;
}
} else {
}
}
break;
}

var G__38508 = seq__38447;
var G__38509 = chunk__38448;
var G__38510 = count__38449;
var G__38511 = (i__38450 + (1));
seq__38447 = G__38508;
chunk__38448 = G__38509;
count__38449 = G__38510;
i__38450 = G__38511;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38447);
if(temp__5278__auto__){
var seq__38447__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38447__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__38447__$1);
var G__38514 = cljs.core.chunk_rest.call(null,seq__38447__$1);
var G__38515 = c__31003__auto__;
var G__38516 = cljs.core.count.call(null,c__31003__auto__);
var G__38517 = (0);
seq__38447 = G__38514;
chunk__38448 = G__38515;
count__38449 = G__38516;
i__38450 = G__38517;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38447__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38462_38519 = cljs.core.seq.call(null,requires);
var chunk__38463_38520 = null;
var count__38464_38521 = (0);
var i__38465_38522 = (0);
while(true){
if((i__38465_38522 < count__38464_38521)){
var req_38523 = cljs.core._nth.call(null,chunk__38463_38520,i__38465_38522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38523,prov);

var G__38524 = seq__38462_38519;
var G__38525 = chunk__38463_38520;
var G__38526 = count__38464_38521;
var G__38527 = (i__38465_38522 + (1));
seq__38462_38519 = G__38524;
chunk__38463_38520 = G__38525;
count__38464_38521 = G__38526;
i__38465_38522 = G__38527;
continue;
} else {
var temp__5278__auto___38528__$1 = cljs.core.seq.call(null,seq__38462_38519);
if(temp__5278__auto___38528__$1){
var seq__38462_38530__$1 = temp__5278__auto___38528__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38462_38530__$1)){
var c__31003__auto___38531 = cljs.core.chunk_first.call(null,seq__38462_38530__$1);
var G__38532 = cljs.core.chunk_rest.call(null,seq__38462_38530__$1);
var G__38533 = c__31003__auto___38531;
var G__38534 = cljs.core.count.call(null,c__31003__auto___38531);
var G__38535 = (0);
seq__38462_38519 = G__38532;
chunk__38463_38520 = G__38533;
count__38464_38521 = G__38534;
i__38465_38522 = G__38535;
continue;
} else {
var req_38536 = cljs.core.first.call(null,seq__38462_38530__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38536,prov);

var G__38537 = cljs.core.next.call(null,seq__38462_38530__$1);
var G__38538 = null;
var G__38539 = (0);
var G__38540 = (0);
seq__38462_38519 = G__38537;
chunk__38463_38520 = G__38538;
count__38464_38521 = G__38539;
i__38465_38522 = G__38540;
continue;
}
} else {
}
}
break;
}

var G__38541 = cljs.core.next.call(null,seq__38447__$1);
var G__38542 = null;
var G__38543 = (0);
var G__38544 = (0);
seq__38447 = G__38541;
chunk__38448 = G__38542;
count__38449 = G__38543;
i__38450 = G__38544;
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
var seq__38546_38557 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38547_38558 = null;
var count__38548_38559 = (0);
var i__38549_38560 = (0);
while(true){
if((i__38549_38560 < count__38548_38559)){
var ns_38561 = cljs.core._nth.call(null,chunk__38547_38558,i__38549_38560);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38561);

var G__38564 = seq__38546_38557;
var G__38565 = chunk__38547_38558;
var G__38566 = count__38548_38559;
var G__38567 = (i__38549_38560 + (1));
seq__38546_38557 = G__38564;
chunk__38547_38558 = G__38565;
count__38548_38559 = G__38566;
i__38549_38560 = G__38567;
continue;
} else {
var temp__5278__auto___38569 = cljs.core.seq.call(null,seq__38546_38557);
if(temp__5278__auto___38569){
var seq__38546_38573__$1 = temp__5278__auto___38569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38546_38573__$1)){
var c__31003__auto___38574 = cljs.core.chunk_first.call(null,seq__38546_38573__$1);
var G__38575 = cljs.core.chunk_rest.call(null,seq__38546_38573__$1);
var G__38576 = c__31003__auto___38574;
var G__38577 = cljs.core.count.call(null,c__31003__auto___38574);
var G__38578 = (0);
seq__38546_38557 = G__38575;
chunk__38547_38558 = G__38576;
count__38548_38559 = G__38577;
i__38549_38560 = G__38578;
continue;
} else {
var ns_38581 = cljs.core.first.call(null,seq__38546_38573__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38581);

var G__38582 = cljs.core.next.call(null,seq__38546_38573__$1);
var G__38583 = null;
var G__38584 = (0);
var G__38585 = (0);
seq__38546_38557 = G__38582;
chunk__38547_38558 = G__38583;
count__38548_38559 = G__38584;
i__38549_38560 = G__38585;
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
var G__38587__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38591__i = 0, G__38591__a = new Array(arguments.length -  0);
while (G__38591__i < G__38591__a.length) {G__38591__a[G__38591__i] = arguments[G__38591__i + 0]; ++G__38591__i;}
  args = new cljs.core.IndexedSeq(G__38591__a,0,null);
} 
return G__38587__delegate.call(this,args);};
G__38587.cljs$lang$maxFixedArity = 0;
G__38587.cljs$lang$applyTo = (function (arglist__38593){
var args = cljs.core.seq(arglist__38593);
return G__38587__delegate(args);
});
G__38587.cljs$core$IFn$_invoke$arity$variadic = G__38587__delegate;
return G__38587;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__38594_SHARP_,p2__38595_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38594_SHARP_)].join('')),p2__38595_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__38596_SHARP_,p2__38597_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38596_SHARP_)].join(''),p2__38597_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38600 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38600.addCallback(((function (G__38600){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38600))
);

G__38600.addErrback(((function (G__38600){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38600))
);

return G__38600;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38606){if((e38606 instanceof Error)){
var e = e38606;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38606;

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
}catch (e38615){if((e38615 instanceof Error)){
var e = e38615;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38615;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38619 = cljs.core._EQ_;
var expr__38620 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38619.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38620))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38619.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38620))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38619.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38620))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__38619,expr__38620){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38619,expr__38620))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38628,callback){
var map__38629 = p__38628;
var map__38629__$1 = ((((!((map__38629 == null)))?((((map__38629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38629):map__38629);
var file_msg = map__38629__$1;
var request_url = cljs.core.get.call(null,map__38629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__38629,map__38629__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38629,map__38629__$1,file_msg,request_url))
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
return (function (state_38693){
var state_val_38694 = (state_38693[(1)]);
if((state_val_38694 === (7))){
var inst_38687 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
var statearr_38696_38751 = state_38693__$1;
(statearr_38696_38751[(2)] = inst_38687);

(statearr_38696_38751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (1))){
var state_38693__$1 = state_38693;
var statearr_38698_38754 = state_38693__$1;
(statearr_38698_38754[(2)] = null);

(statearr_38698_38754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (4))){
var inst_38654 = (state_38693[(7)]);
var inst_38654__$1 = (state_38693[(2)]);
var state_38693__$1 = (function (){var statearr_38699 = state_38693;
(statearr_38699[(7)] = inst_38654__$1);

return statearr_38699;
})();
if(cljs.core.truth_(inst_38654__$1)){
var statearr_38700_38757 = state_38693__$1;
(statearr_38700_38757[(1)] = (5));

} else {
var statearr_38701_38758 = state_38693__$1;
(statearr_38701_38758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (15))){
var inst_38672 = (state_38693[(8)]);
var inst_38669 = (state_38693[(9)]);
var inst_38674 = inst_38672.call(null,inst_38669);
var state_38693__$1 = state_38693;
var statearr_38702_38759 = state_38693__$1;
(statearr_38702_38759[(2)] = inst_38674);

(statearr_38702_38759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (13))){
var inst_38681 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
var statearr_38705_38760 = state_38693__$1;
(statearr_38705_38760[(2)] = inst_38681);

(statearr_38705_38760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (6))){
var state_38693__$1 = state_38693;
var statearr_38706_38764 = state_38693__$1;
(statearr_38706_38764[(2)] = null);

(statearr_38706_38764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (17))){
var inst_38678 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
var statearr_38707_38765 = state_38693__$1;
(statearr_38707_38765[(2)] = inst_38678);

(statearr_38707_38765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (3))){
var inst_38689 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38693__$1,inst_38689);
} else {
if((state_val_38694 === (12))){
var state_38693__$1 = state_38693;
var statearr_38711_38766 = state_38693__$1;
(statearr_38711_38766[(2)] = null);

(statearr_38711_38766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (2))){
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38693__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38694 === (11))){
var inst_38659 = (state_38693[(10)]);
var inst_38667 = figwheel.client.file_reloading.blocking_load.call(null,inst_38659);
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38693__$1,(14),inst_38667);
} else {
if((state_val_38694 === (9))){
var inst_38659 = (state_38693[(10)]);
var state_38693__$1 = state_38693;
if(cljs.core.truth_(inst_38659)){
var statearr_38717_38767 = state_38693__$1;
(statearr_38717_38767[(1)] = (11));

} else {
var statearr_38718_38768 = state_38693__$1;
(statearr_38718_38768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (5))){
var inst_38654 = (state_38693[(7)]);
var inst_38660 = (state_38693[(11)]);
var inst_38659 = cljs.core.nth.call(null,inst_38654,(0),null);
var inst_38660__$1 = cljs.core.nth.call(null,inst_38654,(1),null);
var state_38693__$1 = (function (){var statearr_38722 = state_38693;
(statearr_38722[(10)] = inst_38659);

(statearr_38722[(11)] = inst_38660__$1);

return statearr_38722;
})();
if(cljs.core.truth_(inst_38660__$1)){
var statearr_38724_38773 = state_38693__$1;
(statearr_38724_38773[(1)] = (8));

} else {
var statearr_38725_38775 = state_38693__$1;
(statearr_38725_38775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (14))){
var inst_38672 = (state_38693[(8)]);
var inst_38659 = (state_38693[(10)]);
var inst_38669 = (state_38693[(2)]);
var inst_38670 = console.log("Loading!",inst_38659);
var inst_38671 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38672__$1 = cljs.core.get.call(null,inst_38671,inst_38659);
var state_38693__$1 = (function (){var statearr_38727 = state_38693;
(statearr_38727[(12)] = inst_38670);

(statearr_38727[(8)] = inst_38672__$1);

(statearr_38727[(9)] = inst_38669);

return statearr_38727;
})();
if(cljs.core.truth_(inst_38672__$1)){
var statearr_38728_38779 = state_38693__$1;
(statearr_38728_38779[(1)] = (15));

} else {
var statearr_38729_38780 = state_38693__$1;
(statearr_38729_38780[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (16))){
var inst_38669 = (state_38693[(9)]);
var inst_38676 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38669);
var state_38693__$1 = state_38693;
var statearr_38730_38781 = state_38693__$1;
(statearr_38730_38781[(2)] = inst_38676);

(statearr_38730_38781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (10))){
var inst_38683 = (state_38693[(2)]);
var state_38693__$1 = (function (){var statearr_38731 = state_38693;
(statearr_38731[(13)] = inst_38683);

return statearr_38731;
})();
var statearr_38732_38784 = state_38693__$1;
(statearr_38732_38784[(2)] = null);

(statearr_38732_38784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (8))){
var inst_38660 = (state_38693[(11)]);
var inst_38662 = console.log("Evaling!",inst_38660);
var inst_38664 = eval(inst_38660);
var state_38693__$1 = (function (){var statearr_38733 = state_38693;
(statearr_38733[(14)] = inst_38662);

return statearr_38733;
})();
var statearr_38734_38789 = state_38693__$1;
(statearr_38734_38789[(2)] = inst_38664);

(statearr_38734_38789[(1)] = (10));


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
var statearr_38744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38744[(0)] = figwheel$client$file_reloading$state_machine__33608__auto__);

(statearr_38744[(1)] = (1));

return statearr_38744;
});
var figwheel$client$file_reloading$state_machine__33608__auto____1 = (function (state_38693){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_38693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e38747){if((e38747 instanceof Object)){
var ex__33611__auto__ = e38747;
var statearr_38749_38792 = state_38693;
(statearr_38749_38792[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38793 = state_38693;
state_38693 = G__38793;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33608__auto__ = function(state_38693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33608__auto____1.call(this,state_38693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33608__auto____0;
figwheel$client$file_reloading$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33608__auto____1;
return figwheel$client$file_reloading$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_38750 = f__33953__auto__.call(null);
(statearr_38750[(6)] = c__33952__auto__);

return statearr_38750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38795 = arguments.length;
switch (G__38795) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38811,callback){
var map__38815 = p__38811;
var map__38815__$1 = ((((!((map__38815 == null)))?((((map__38815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38815):map__38815);
var file_msg = map__38815__$1;
var namespace = cljs.core.get.call(null,map__38815__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38815,map__38815__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38815,map__38815__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38857){
var map__38858 = p__38857;
var map__38858__$1 = ((((!((map__38858 == null)))?((((map__38858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38858):map__38858);
var file_msg = map__38858__$1;
var namespace = cljs.core.get.call(null,map__38858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38867){
var map__38868 = p__38867;
var map__38868__$1 = ((((!((map__38868 == null)))?((((map__38868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38868):map__38868);
var file_msg = map__38868__$1;
var namespace = cljs.core.get.call(null,map__38868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38875,callback){
var map__38876 = p__38875;
var map__38876__$1 = ((((!((map__38876 == null)))?((((map__38876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38876):map__38876);
var file_msg = map__38876__$1;
var request_url = cljs.core.get.call(null,map__38876__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33952__auto___38959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___38959,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___38959,out){
return (function (state_38940){
var state_val_38941 = (state_38940[(1)]);
if((state_val_38941 === (1))){
var inst_38908 = cljs.core.seq.call(null,files);
var inst_38909 = cljs.core.first.call(null,inst_38908);
var inst_38910 = cljs.core.next.call(null,inst_38908);
var inst_38911 = files;
var state_38940__$1 = (function (){var statearr_38944 = state_38940;
(statearr_38944[(7)] = inst_38911);

(statearr_38944[(8)] = inst_38910);

(statearr_38944[(9)] = inst_38909);

return statearr_38944;
})();
var statearr_38945_38960 = state_38940__$1;
(statearr_38945_38960[(2)] = null);

(statearr_38945_38960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38941 === (2))){
var inst_38918 = (state_38940[(10)]);
var inst_38911 = (state_38940[(7)]);
var inst_38917 = cljs.core.seq.call(null,inst_38911);
var inst_38918__$1 = cljs.core.first.call(null,inst_38917);
var inst_38919 = cljs.core.next.call(null,inst_38917);
var inst_38922 = (inst_38918__$1 == null);
var inst_38923 = cljs.core.not.call(null,inst_38922);
var state_38940__$1 = (function (){var statearr_38946 = state_38940;
(statearr_38946[(10)] = inst_38918__$1);

(statearr_38946[(11)] = inst_38919);

return statearr_38946;
})();
if(inst_38923){
var statearr_38947_38964 = state_38940__$1;
(statearr_38947_38964[(1)] = (4));

} else {
var statearr_38948_38965 = state_38940__$1;
(statearr_38948_38965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38941 === (3))){
var inst_38935 = (state_38940[(2)]);
var state_38940__$1 = state_38940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38940__$1,inst_38935);
} else {
if((state_val_38941 === (4))){
var inst_38918 = (state_38940[(10)]);
var inst_38925 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38918);
var state_38940__$1 = state_38940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38940__$1,(7),inst_38925);
} else {
if((state_val_38941 === (5))){
var inst_38931 = cljs.core.async.close_BANG_.call(null,out);
var state_38940__$1 = state_38940;
var statearr_38949_38972 = state_38940__$1;
(statearr_38949_38972[(2)] = inst_38931);

(statearr_38949_38972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38941 === (6))){
var inst_38933 = (state_38940[(2)]);
var state_38940__$1 = state_38940;
var statearr_38950_38976 = state_38940__$1;
(statearr_38950_38976[(2)] = inst_38933);

(statearr_38950_38976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38941 === (7))){
var inst_38919 = (state_38940[(11)]);
var inst_38927 = (state_38940[(2)]);
var inst_38928 = cljs.core.async.put_BANG_.call(null,out,inst_38927);
var inst_38911 = inst_38919;
var state_38940__$1 = (function (){var statearr_38951 = state_38940;
(statearr_38951[(7)] = inst_38911);

(statearr_38951[(12)] = inst_38928);

return statearr_38951;
})();
var statearr_38952_38979 = state_38940__$1;
(statearr_38952_38979[(2)] = null);

(statearr_38952_38979[(1)] = (2));


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
});})(c__33952__auto___38959,out))
;
return ((function (switch__33607__auto__,c__33952__auto___38959,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0 = (function (){
var statearr_38953 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38953[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__);

(statearr_38953[(1)] = (1));

return statearr_38953;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1 = (function (state_38940){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_38940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e38954){if((e38954 instanceof Object)){
var ex__33611__auto__ = e38954;
var statearr_38956_38986 = state_38940;
(statearr_38956_38986[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38988 = state_38940;
state_38940 = G__38988;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__ = function(state_38940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1.call(this,state_38940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___38959,out))
})();
var state__33954__auto__ = (function (){var statearr_38957 = f__33953__auto__.call(null);
(statearr_38957[(6)] = c__33952__auto___38959);

return statearr_38957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___38959,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38991,opts){
var map__38992 = p__38991;
var map__38992__$1 = ((((!((map__38992 == null)))?((((map__38992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38992):map__38992);
var eval_body = cljs.core.get.call(null,map__38992__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38997){var e = e38997;
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
return (function (p1__39007_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39007_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39020){
var vec__39021 = p__39020;
var k = cljs.core.nth.call(null,vec__39021,(0),null);
var v = cljs.core.nth.call(null,vec__39021,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39024){
var vec__39025 = p__39024;
var k = cljs.core.nth.call(null,vec__39025,(0),null);
var v = cljs.core.nth.call(null,vec__39025,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39033,p__39034){
var map__39035 = p__39033;
var map__39035__$1 = ((((!((map__39035 == null)))?((((map__39035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39035):map__39035);
var opts = map__39035__$1;
var before_jsload = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39036 = p__39034;
var map__39036__$1 = ((((!((map__39036 == null)))?((((map__39036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39036):map__39036);
var msg = map__39036__$1;
var files = cljs.core.get.call(null,map__39036__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39036__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39036__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39206){
var state_val_39207 = (state_39206[(1)]);
if((state_val_39207 === (7))){
var inst_39058 = (state_39206[(7)]);
var inst_39059 = (state_39206[(8)]);
var inst_39057 = (state_39206[(9)]);
var inst_39060 = (state_39206[(10)]);
var inst_39065 = cljs.core._nth.call(null,inst_39058,inst_39060);
var inst_39066 = figwheel.client.file_reloading.eval_body.call(null,inst_39065,opts);
var inst_39067 = (inst_39060 + (1));
var tmp39208 = inst_39058;
var tmp39209 = inst_39059;
var tmp39210 = inst_39057;
var inst_39057__$1 = tmp39210;
var inst_39058__$1 = tmp39208;
var inst_39059__$1 = tmp39209;
var inst_39060__$1 = inst_39067;
var state_39206__$1 = (function (){var statearr_39216 = state_39206;
(statearr_39216[(11)] = inst_39066);

(statearr_39216[(7)] = inst_39058__$1);

(statearr_39216[(8)] = inst_39059__$1);

(statearr_39216[(9)] = inst_39057__$1);

(statearr_39216[(10)] = inst_39060__$1);

return statearr_39216;
})();
var statearr_39218_39352 = state_39206__$1;
(statearr_39218_39352[(2)] = null);

(statearr_39218_39352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (20))){
var inst_39100 = (state_39206[(12)]);
var inst_39108 = figwheel.client.file_reloading.sort_files.call(null,inst_39100);
var state_39206__$1 = state_39206;
var statearr_39219_39355 = state_39206__$1;
(statearr_39219_39355[(2)] = inst_39108);

(statearr_39219_39355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (27))){
var state_39206__$1 = state_39206;
var statearr_39220_39359 = state_39206__$1;
(statearr_39220_39359[(2)] = null);

(statearr_39220_39359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (1))){
var inst_39048 = (state_39206[(13)]);
var inst_39045 = before_jsload.call(null,files);
var inst_39046 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39047 = (function (){return ((function (inst_39048,inst_39045,inst_39046,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39028_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39028_SHARP_);
});
;})(inst_39048,inst_39045,inst_39046,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39048__$1 = cljs.core.filter.call(null,inst_39047,files);
var inst_39049 = cljs.core.not_empty.call(null,inst_39048__$1);
var state_39206__$1 = (function (){var statearr_39222 = state_39206;
(statearr_39222[(14)] = inst_39045);

(statearr_39222[(15)] = inst_39046);

(statearr_39222[(13)] = inst_39048__$1);

return statearr_39222;
})();
if(cljs.core.truth_(inst_39049)){
var statearr_39223_39360 = state_39206__$1;
(statearr_39223_39360[(1)] = (2));

} else {
var statearr_39224_39361 = state_39206__$1;
(statearr_39224_39361[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (24))){
var state_39206__$1 = state_39206;
var statearr_39225_39363 = state_39206__$1;
(statearr_39225_39363[(2)] = null);

(statearr_39225_39363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (39))){
var inst_39150 = (state_39206[(16)]);
var state_39206__$1 = state_39206;
var statearr_39229_39364 = state_39206__$1;
(statearr_39229_39364[(2)] = inst_39150);

(statearr_39229_39364[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (46))){
var inst_39196 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39230_39366 = state_39206__$1;
(statearr_39230_39366[(2)] = inst_39196);

(statearr_39230_39366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (4))){
var inst_39094 = (state_39206[(2)]);
var inst_39095 = cljs.core.List.EMPTY;
var inst_39096 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39095);
var inst_39097 = (function (){return ((function (inst_39094,inst_39095,inst_39096,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39029_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39029_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39029_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39029_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_39094,inst_39095,inst_39096,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39098 = cljs.core.filter.call(null,inst_39097,files);
var inst_39099 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39100 = cljs.core.concat.call(null,inst_39098,inst_39099);
var state_39206__$1 = (function (){var statearr_39235 = state_39206;
(statearr_39235[(17)] = inst_39094);

(statearr_39235[(12)] = inst_39100);

(statearr_39235[(18)] = inst_39096);

return statearr_39235;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39237_39370 = state_39206__$1;
(statearr_39237_39370[(1)] = (16));

} else {
var statearr_39239_39371 = state_39206__$1;
(statearr_39239_39371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (15))){
var inst_39084 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39241_39372 = state_39206__$1;
(statearr_39241_39372[(2)] = inst_39084);

(statearr_39241_39372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (21))){
var inst_39110 = (state_39206[(19)]);
var inst_39110__$1 = (state_39206[(2)]);
var inst_39111 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39110__$1);
var state_39206__$1 = (function (){var statearr_39242 = state_39206;
(statearr_39242[(19)] = inst_39110__$1);

return statearr_39242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39206__$1,(22),inst_39111);
} else {
if((state_val_39207 === (31))){
var inst_39199 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39206__$1,inst_39199);
} else {
if((state_val_39207 === (32))){
var inst_39150 = (state_39206[(16)]);
var inst_39157 = inst_39150.cljs$lang$protocol_mask$partition0$;
var inst_39158 = (inst_39157 & (64));
var inst_39159 = inst_39150.cljs$core$ISeq$;
var inst_39160 = (cljs.core.PROTOCOL_SENTINEL === inst_39159);
var inst_39161 = (inst_39158) || (inst_39160);
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39161)){
var statearr_39243_39377 = state_39206__$1;
(statearr_39243_39377[(1)] = (35));

} else {
var statearr_39244_39378 = state_39206__$1;
(statearr_39244_39378[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (40))){
var inst_39174 = (state_39206[(20)]);
var inst_39173 = (state_39206[(2)]);
var inst_39174__$1 = cljs.core.get.call(null,inst_39173,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39175 = cljs.core.get.call(null,inst_39173,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39176 = cljs.core.not_empty.call(null,inst_39174__$1);
var state_39206__$1 = (function (){var statearr_39247 = state_39206;
(statearr_39247[(20)] = inst_39174__$1);

(statearr_39247[(21)] = inst_39175);

return statearr_39247;
})();
if(cljs.core.truth_(inst_39176)){
var statearr_39248_39380 = state_39206__$1;
(statearr_39248_39380[(1)] = (41));

} else {
var statearr_39249_39381 = state_39206__$1;
(statearr_39249_39381[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (33))){
var state_39206__$1 = state_39206;
var statearr_39255_39382 = state_39206__$1;
(statearr_39255_39382[(2)] = false);

(statearr_39255_39382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (13))){
var inst_39070 = (state_39206[(22)]);
var inst_39074 = cljs.core.chunk_first.call(null,inst_39070);
var inst_39075 = cljs.core.chunk_rest.call(null,inst_39070);
var inst_39076 = cljs.core.count.call(null,inst_39074);
var inst_39057 = inst_39075;
var inst_39058 = inst_39074;
var inst_39059 = inst_39076;
var inst_39060 = (0);
var state_39206__$1 = (function (){var statearr_39257 = state_39206;
(statearr_39257[(7)] = inst_39058);

(statearr_39257[(8)] = inst_39059);

(statearr_39257[(9)] = inst_39057);

(statearr_39257[(10)] = inst_39060);

return statearr_39257;
})();
var statearr_39259_39403 = state_39206__$1;
(statearr_39259_39403[(2)] = null);

(statearr_39259_39403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (22))){
var inst_39113 = (state_39206[(23)]);
var inst_39118 = (state_39206[(24)]);
var inst_39110 = (state_39206[(19)]);
var inst_39114 = (state_39206[(25)]);
var inst_39113__$1 = (state_39206[(2)]);
var inst_39114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39113__$1);
var inst_39115 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113__$1;
var res = inst_39114__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39113,inst_39118,inst_39110,inst_39114,inst_39113__$1,inst_39114__$1,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39030_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39030_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39113,inst_39118,inst_39110,inst_39114,inst_39113__$1,inst_39114__$1,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39116 = cljs.core.filter.call(null,inst_39115,inst_39113__$1);
var inst_39117 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39118__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39117);
var inst_39119 = cljs.core.not_empty.call(null,inst_39118__$1);
var state_39206__$1 = (function (){var statearr_39262 = state_39206;
(statearr_39262[(23)] = inst_39113__$1);

(statearr_39262[(24)] = inst_39118__$1);

(statearr_39262[(26)] = inst_39116);

(statearr_39262[(25)] = inst_39114__$1);

return statearr_39262;
})();
if(cljs.core.truth_(inst_39119)){
var statearr_39263_39415 = state_39206__$1;
(statearr_39263_39415[(1)] = (23));

} else {
var statearr_39264_39416 = state_39206__$1;
(statearr_39264_39416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (36))){
var state_39206__$1 = state_39206;
var statearr_39265_39417 = state_39206__$1;
(statearr_39265_39417[(2)] = false);

(statearr_39265_39417[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (41))){
var inst_39174 = (state_39206[(20)]);
var inst_39178 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39179 = cljs.core.map.call(null,inst_39178,inst_39174);
var inst_39180 = cljs.core.pr_str.call(null,inst_39179);
var inst_39181 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39180)].join('');
var inst_39182 = figwheel.client.utils.log.call(null,inst_39181);
var state_39206__$1 = state_39206;
var statearr_39266_39419 = state_39206__$1;
(statearr_39266_39419[(2)] = inst_39182);

(statearr_39266_39419[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (43))){
var inst_39175 = (state_39206[(21)]);
var inst_39185 = (state_39206[(2)]);
var inst_39186 = cljs.core.not_empty.call(null,inst_39175);
var state_39206__$1 = (function (){var statearr_39269 = state_39206;
(statearr_39269[(27)] = inst_39185);

return statearr_39269;
})();
if(cljs.core.truth_(inst_39186)){
var statearr_39270_39421 = state_39206__$1;
(statearr_39270_39421[(1)] = (44));

} else {
var statearr_39271_39422 = state_39206__$1;
(statearr_39271_39422[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (29))){
var inst_39113 = (state_39206[(23)]);
var inst_39150 = (state_39206[(16)]);
var inst_39118 = (state_39206[(24)]);
var inst_39110 = (state_39206[(19)]);
var inst_39116 = (state_39206[(26)]);
var inst_39114 = (state_39206[(25)]);
var inst_39146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39149 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39150,inst_39118,inst_39110,inst_39116,inst_39114,inst_39146,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39148){
var map__39276 = p__39148;
var map__39276__$1 = ((((!((map__39276 == null)))?((((map__39276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39276):map__39276);
var namespace = cljs.core.get.call(null,map__39276__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39150,inst_39118,inst_39110,inst_39116,inst_39114,inst_39146,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39150__$1 = cljs.core.group_by.call(null,inst_39149,inst_39116);
var inst_39152 = (inst_39150__$1 == null);
var inst_39153 = cljs.core.not.call(null,inst_39152);
var state_39206__$1 = (function (){var statearr_39281 = state_39206;
(statearr_39281[(16)] = inst_39150__$1);

(statearr_39281[(28)] = inst_39146);

return statearr_39281;
})();
if(inst_39153){
var statearr_39282_39425 = state_39206__$1;
(statearr_39282_39425[(1)] = (32));

} else {
var statearr_39283_39426 = state_39206__$1;
(statearr_39283_39426[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (44))){
var inst_39175 = (state_39206[(21)]);
var inst_39189 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39175);
var inst_39190 = cljs.core.pr_str.call(null,inst_39189);
var inst_39191 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39190)].join('');
var inst_39192 = figwheel.client.utils.log.call(null,inst_39191);
var state_39206__$1 = state_39206;
var statearr_39287_39427 = state_39206__$1;
(statearr_39287_39427[(2)] = inst_39192);

(statearr_39287_39427[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (6))){
var inst_39091 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39288_39428 = state_39206__$1;
(statearr_39288_39428[(2)] = inst_39091);

(statearr_39288_39428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (28))){
var inst_39116 = (state_39206[(26)]);
var inst_39143 = (state_39206[(2)]);
var inst_39144 = cljs.core.not_empty.call(null,inst_39116);
var state_39206__$1 = (function (){var statearr_39289 = state_39206;
(statearr_39289[(29)] = inst_39143);

return statearr_39289;
})();
if(cljs.core.truth_(inst_39144)){
var statearr_39290_39429 = state_39206__$1;
(statearr_39290_39429[(1)] = (29));

} else {
var statearr_39291_39430 = state_39206__$1;
(statearr_39291_39430[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (25))){
var inst_39114 = (state_39206[(25)]);
var inst_39130 = (state_39206[(2)]);
var inst_39131 = cljs.core.not_empty.call(null,inst_39114);
var state_39206__$1 = (function (){var statearr_39293 = state_39206;
(statearr_39293[(30)] = inst_39130);

return statearr_39293;
})();
if(cljs.core.truth_(inst_39131)){
var statearr_39294_39431 = state_39206__$1;
(statearr_39294_39431[(1)] = (26));

} else {
var statearr_39295_39432 = state_39206__$1;
(statearr_39295_39432[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (34))){
var inst_39168 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39168)){
var statearr_39296_39433 = state_39206__$1;
(statearr_39296_39433[(1)] = (38));

} else {
var statearr_39297_39434 = state_39206__$1;
(statearr_39297_39434[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (17))){
var state_39206__$1 = state_39206;
var statearr_39298_39435 = state_39206__$1;
(statearr_39298_39435[(2)] = recompile_dependents);

(statearr_39298_39435[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (3))){
var state_39206__$1 = state_39206;
var statearr_39299_39436 = state_39206__$1;
(statearr_39299_39436[(2)] = null);

(statearr_39299_39436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (12))){
var inst_39087 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39300_39439 = state_39206__$1;
(statearr_39300_39439[(2)] = inst_39087);

(statearr_39300_39439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (2))){
var inst_39048 = (state_39206[(13)]);
var inst_39056 = cljs.core.seq.call(null,inst_39048);
var inst_39057 = inst_39056;
var inst_39058 = null;
var inst_39059 = (0);
var inst_39060 = (0);
var state_39206__$1 = (function (){var statearr_39301 = state_39206;
(statearr_39301[(7)] = inst_39058);

(statearr_39301[(8)] = inst_39059);

(statearr_39301[(9)] = inst_39057);

(statearr_39301[(10)] = inst_39060);

return statearr_39301;
})();
var statearr_39302_39440 = state_39206__$1;
(statearr_39302_39440[(2)] = null);

(statearr_39302_39440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (23))){
var inst_39113 = (state_39206[(23)]);
var inst_39118 = (state_39206[(24)]);
var inst_39110 = (state_39206[(19)]);
var inst_39116 = (state_39206[(26)]);
var inst_39114 = (state_39206[(25)]);
var inst_39121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39123 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39121,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39122){
var map__39303 = p__39122;
var map__39303__$1 = ((((!((map__39303 == null)))?((((map__39303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39303):map__39303);
var request_url = cljs.core.get.call(null,map__39303__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39121,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39124 = cljs.core.reverse.call(null,inst_39118);
var inst_39125 = cljs.core.map.call(null,inst_39123,inst_39124);
var inst_39126 = cljs.core.pr_str.call(null,inst_39125);
var inst_39127 = figwheel.client.utils.log.call(null,inst_39126);
var state_39206__$1 = (function (){var statearr_39307 = state_39206;
(statearr_39307[(31)] = inst_39121);

return statearr_39307;
})();
var statearr_39308_39444 = state_39206__$1;
(statearr_39308_39444[(2)] = inst_39127);

(statearr_39308_39444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (35))){
var state_39206__$1 = state_39206;
var statearr_39311_39445 = state_39206__$1;
(statearr_39311_39445[(2)] = true);

(statearr_39311_39445[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (19))){
var inst_39100 = (state_39206[(12)]);
var inst_39106 = figwheel.client.file_reloading.expand_files.call(null,inst_39100);
var state_39206__$1 = state_39206;
var statearr_39312_39446 = state_39206__$1;
(statearr_39312_39446[(2)] = inst_39106);

(statearr_39312_39446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (11))){
var state_39206__$1 = state_39206;
var statearr_39314_39447 = state_39206__$1;
(statearr_39314_39447[(2)] = null);

(statearr_39314_39447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (9))){
var inst_39089 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39317_39448 = state_39206__$1;
(statearr_39317_39448[(2)] = inst_39089);

(statearr_39317_39448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (5))){
var inst_39059 = (state_39206[(8)]);
var inst_39060 = (state_39206[(10)]);
var inst_39062 = (inst_39060 < inst_39059);
var inst_39063 = inst_39062;
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39063)){
var statearr_39318_39453 = state_39206__$1;
(statearr_39318_39453[(1)] = (7));

} else {
var statearr_39319_39454 = state_39206__$1;
(statearr_39319_39454[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (14))){
var inst_39070 = (state_39206[(22)]);
var inst_39079 = cljs.core.first.call(null,inst_39070);
var inst_39080 = figwheel.client.file_reloading.eval_body.call(null,inst_39079,opts);
var inst_39081 = cljs.core.next.call(null,inst_39070);
var inst_39057 = inst_39081;
var inst_39058 = null;
var inst_39059 = (0);
var inst_39060 = (0);
var state_39206__$1 = (function (){var statearr_39321 = state_39206;
(statearr_39321[(7)] = inst_39058);

(statearr_39321[(8)] = inst_39059);

(statearr_39321[(32)] = inst_39080);

(statearr_39321[(9)] = inst_39057);

(statearr_39321[(10)] = inst_39060);

return statearr_39321;
})();
var statearr_39323_39455 = state_39206__$1;
(statearr_39323_39455[(2)] = null);

(statearr_39323_39455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (45))){
var state_39206__$1 = state_39206;
var statearr_39326_39456 = state_39206__$1;
(statearr_39326_39456[(2)] = null);

(statearr_39326_39456[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (26))){
var inst_39113 = (state_39206[(23)]);
var inst_39118 = (state_39206[(24)]);
var inst_39110 = (state_39206[(19)]);
var inst_39116 = (state_39206[(26)]);
var inst_39114 = (state_39206[(25)]);
var inst_39133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39135 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39134){
var map__39328 = p__39134;
var map__39328__$1 = ((((!((map__39328 == null)))?((((map__39328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39328):map__39328);
var namespace = cljs.core.get.call(null,map__39328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39136 = cljs.core.map.call(null,inst_39135,inst_39114);
var inst_39137 = cljs.core.pr_str.call(null,inst_39136);
var inst_39138 = figwheel.client.utils.log.call(null,inst_39137);
var inst_39139 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,inst_39135,inst_39136,inst_39137,inst_39138,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,inst_39135,inst_39136,inst_39137,inst_39138,state_val_39207,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39140 = setTimeout(inst_39139,(10));
var state_39206__$1 = (function (){var statearr_39330 = state_39206;
(statearr_39330[(33)] = inst_39133);

(statearr_39330[(34)] = inst_39138);

return statearr_39330;
})();
var statearr_39331_39463 = state_39206__$1;
(statearr_39331_39463[(2)] = inst_39140);

(statearr_39331_39463[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (16))){
var state_39206__$1 = state_39206;
var statearr_39332_39464 = state_39206__$1;
(statearr_39332_39464[(2)] = reload_dependents);

(statearr_39332_39464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (38))){
var inst_39150 = (state_39206[(16)]);
var inst_39170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39150);
var state_39206__$1 = state_39206;
var statearr_39333_39465 = state_39206__$1;
(statearr_39333_39465[(2)] = inst_39170);

(statearr_39333_39465[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (30))){
var state_39206__$1 = state_39206;
var statearr_39334_39467 = state_39206__$1;
(statearr_39334_39467[(2)] = null);

(statearr_39334_39467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (10))){
var inst_39070 = (state_39206[(22)]);
var inst_39072 = cljs.core.chunked_seq_QMARK_.call(null,inst_39070);
var state_39206__$1 = state_39206;
if(inst_39072){
var statearr_39335_39469 = state_39206__$1;
(statearr_39335_39469[(1)] = (13));

} else {
var statearr_39336_39470 = state_39206__$1;
(statearr_39336_39470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (18))){
var inst_39104 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39104)){
var statearr_39337_39472 = state_39206__$1;
(statearr_39337_39472[(1)] = (19));

} else {
var statearr_39338_39473 = state_39206__$1;
(statearr_39338_39473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (42))){
var state_39206__$1 = state_39206;
var statearr_39339_39474 = state_39206__$1;
(statearr_39339_39474[(2)] = null);

(statearr_39339_39474[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (37))){
var inst_39165 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39340_39475 = state_39206__$1;
(statearr_39340_39475[(2)] = inst_39165);

(statearr_39340_39475[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (8))){
var inst_39070 = (state_39206[(22)]);
var inst_39057 = (state_39206[(9)]);
var inst_39070__$1 = cljs.core.seq.call(null,inst_39057);
var state_39206__$1 = (function (){var statearr_39341 = state_39206;
(statearr_39341[(22)] = inst_39070__$1);

return statearr_39341;
})();
if(inst_39070__$1){
var statearr_39342_39476 = state_39206__$1;
(statearr_39342_39476[(1)] = (10));

} else {
var statearr_39343_39477 = state_39206__$1;
(statearr_39343_39477[(1)] = (11));

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
});})(c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33607__auto__,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0 = (function (){
var statearr_39344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39344[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__);

(statearr_39344[(1)] = (1));

return statearr_39344;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1 = (function (state_39206){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_39206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e39345){if((e39345 instanceof Object)){
var ex__33611__auto__ = e39345;
var statearr_39346_39491 = state_39206;
(statearr_39346_39491[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39494 = state_39206;
state_39206 = G__39494;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__ = function(state_39206){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1.call(this,state_39206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33954__auto__ = (function (){var statearr_39347 = f__33953__auto__.call(null);
(statearr_39347[(6)] = c__33952__auto__);

return statearr_39347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,map__39035,map__39035__$1,opts,before_jsload,on_jsload,reload_dependents,map__39036,map__39036__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39507,link){
var map__39508 = p__39507;
var map__39508__$1 = ((((!((map__39508 == null)))?((((map__39508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39508):map__39508);
var file = cljs.core.get.call(null,map__39508__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__39508,map__39508__$1,file){
return (function (p1__39505_SHARP_,p2__39506_SHARP_){
if(cljs.core._EQ_.call(null,p1__39505_SHARP_,p2__39506_SHARP_)){
return p1__39505_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__39508,map__39508__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39511){
var map__39512 = p__39511;
var map__39512__$1 = ((((!((map__39512 == null)))?((((map__39512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39512):map__39512);
var match_length = cljs.core.get.call(null,map__39512__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39512__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39510_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39510_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39520_SHARP_,p2__39521_SHARP_){
return cljs.core.assoc.call(null,p1__39520_SHARP_,cljs.core.get.call(null,p2__39521_SHARP_,key),p2__39521_SHARP_);
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
var loaded_f_datas_39539 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39539);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39539);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39541,p__39542){
var map__39543 = p__39541;
var map__39543__$1 = ((((!((map__39543 == null)))?((((map__39543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39543):map__39543);
var on_cssload = cljs.core.get.call(null,map__39543__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39544 = p__39542;
var map__39544__$1 = ((((!((map__39544 == null)))?((((map__39544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39544):map__39544);
var files_msg = map__39544__$1;
var files = cljs.core.get.call(null,map__39544__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510360382982
