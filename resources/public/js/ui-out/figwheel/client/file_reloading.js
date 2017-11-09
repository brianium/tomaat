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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50313_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50313_SHARP_));
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
var seq__50314 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50315 = null;
var count__50316 = (0);
var i__50317 = (0);
while(true){
if((i__50317 < count__50316)){
var n = cljs.core._nth.call(null,chunk__50315,i__50317);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50318 = seq__50314;
var G__50319 = chunk__50315;
var G__50320 = count__50316;
var G__50321 = (i__50317 + (1));
seq__50314 = G__50318;
chunk__50315 = G__50319;
count__50316 = G__50320;
i__50317 = G__50321;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__50314);
if(temp__5278__auto__){
var seq__50314__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50314__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__50314__$1);
var G__50322 = cljs.core.chunk_rest.call(null,seq__50314__$1);
var G__50323 = c__31003__auto__;
var G__50324 = cljs.core.count.call(null,c__31003__auto__);
var G__50325 = (0);
seq__50314 = G__50322;
chunk__50315 = G__50323;
count__50316 = G__50324;
i__50317 = G__50325;
continue;
} else {
var n = cljs.core.first.call(null,seq__50314__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50326 = cljs.core.next.call(null,seq__50314__$1);
var G__50327 = null;
var G__50328 = (0);
var G__50329 = (0);
seq__50314 = G__50326;
chunk__50315 = G__50327;
count__50316 = G__50328;
i__50317 = G__50329;
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
return cljs.core.some.call(null,(function (p__50330){
var vec__50331 = p__50330;
var _ = cljs.core.nth.call(null,vec__50331,(0),null);
var v = cljs.core.nth.call(null,vec__50331,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__50334){
var vec__50335 = p__50334;
var k = cljs.core.nth.call(null,vec__50335,(0),null);
var v = cljs.core.nth.call(null,vec__50335,(1),null);
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

var seq__50347_50364 = cljs.core.seq.call(null,deps);
var chunk__50348_50365 = null;
var count__50349_50366 = (0);
var i__50350_50367 = (0);
while(true){
if((i__50350_50367 < count__50349_50366)){
var dep_50368 = cljs.core._nth.call(null,chunk__50348_50365,i__50350_50367);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_50368;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50368));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50368,(depth + (1)),state);
} else {
}

var G__50373 = seq__50347_50364;
var G__50374 = chunk__50348_50365;
var G__50375 = count__50349_50366;
var G__50376 = (i__50350_50367 + (1));
seq__50347_50364 = G__50373;
chunk__50348_50365 = G__50374;
count__50349_50366 = G__50375;
i__50350_50367 = G__50376;
continue;
} else {
var temp__5278__auto___50377 = cljs.core.seq.call(null,seq__50347_50364);
if(temp__5278__auto___50377){
var seq__50347_50378__$1 = temp__5278__auto___50377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50347_50378__$1)){
var c__31003__auto___50379 = cljs.core.chunk_first.call(null,seq__50347_50378__$1);
var G__50380 = cljs.core.chunk_rest.call(null,seq__50347_50378__$1);
var G__50381 = c__31003__auto___50379;
var G__50382 = cljs.core.count.call(null,c__31003__auto___50379);
var G__50383 = (0);
seq__50347_50364 = G__50380;
chunk__50348_50365 = G__50381;
count__50349_50366 = G__50382;
i__50350_50367 = G__50383;
continue;
} else {
var dep_50385 = cljs.core.first.call(null,seq__50347_50378__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_50385;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50385));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50385,(depth + (1)),state);
} else {
}

var G__50388 = cljs.core.next.call(null,seq__50347_50378__$1);
var G__50389 = null;
var G__50390 = (0);
var G__50391 = (0);
seq__50347_50364 = G__50388;
chunk__50348_50365 = G__50389;
count__50349_50366 = G__50390;
i__50350_50367 = G__50391;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50351){
var vec__50352 = p__50351;
var seq__50353 = cljs.core.seq.call(null,vec__50352);
var first__50354 = cljs.core.first.call(null,seq__50353);
var seq__50353__$1 = cljs.core.next.call(null,seq__50353);
var x = first__50354;
var xs = seq__50353__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50352,seq__50353,first__50354,seq__50353__$1,x,xs,get_deps__$1){
return (function (p1__50338_SHARP_){
return clojure.set.difference.call(null,p1__50338_SHARP_,x);
});})(vec__50352,seq__50353,first__50354,seq__50353__$1,x,xs,get_deps__$1))
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
var seq__50434 = cljs.core.seq.call(null,provides);
var chunk__50435 = null;
var count__50436 = (0);
var i__50437 = (0);
while(true){
if((i__50437 < count__50436)){
var prov = cljs.core._nth.call(null,chunk__50435,i__50437);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50438_50446 = cljs.core.seq.call(null,requires);
var chunk__50439_50447 = null;
var count__50440_50448 = (0);
var i__50441_50449 = (0);
while(true){
if((i__50441_50449 < count__50440_50448)){
var req_50450 = cljs.core._nth.call(null,chunk__50439_50447,i__50441_50449);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50450,prov);

var G__50451 = seq__50438_50446;
var G__50452 = chunk__50439_50447;
var G__50453 = count__50440_50448;
var G__50454 = (i__50441_50449 + (1));
seq__50438_50446 = G__50451;
chunk__50439_50447 = G__50452;
count__50440_50448 = G__50453;
i__50441_50449 = G__50454;
continue;
} else {
var temp__5278__auto___50455 = cljs.core.seq.call(null,seq__50438_50446);
if(temp__5278__auto___50455){
var seq__50438_50456__$1 = temp__5278__auto___50455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50438_50456__$1)){
var c__31003__auto___50457 = cljs.core.chunk_first.call(null,seq__50438_50456__$1);
var G__50458 = cljs.core.chunk_rest.call(null,seq__50438_50456__$1);
var G__50459 = c__31003__auto___50457;
var G__50460 = cljs.core.count.call(null,c__31003__auto___50457);
var G__50461 = (0);
seq__50438_50446 = G__50458;
chunk__50439_50447 = G__50459;
count__50440_50448 = G__50460;
i__50441_50449 = G__50461;
continue;
} else {
var req_50462 = cljs.core.first.call(null,seq__50438_50456__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50462,prov);

var G__50463 = cljs.core.next.call(null,seq__50438_50456__$1);
var G__50464 = null;
var G__50465 = (0);
var G__50466 = (0);
seq__50438_50446 = G__50463;
chunk__50439_50447 = G__50464;
count__50440_50448 = G__50465;
i__50441_50449 = G__50466;
continue;
}
} else {
}
}
break;
}

var G__50467 = seq__50434;
var G__50468 = chunk__50435;
var G__50469 = count__50436;
var G__50470 = (i__50437 + (1));
seq__50434 = G__50467;
chunk__50435 = G__50468;
count__50436 = G__50469;
i__50437 = G__50470;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__50434);
if(temp__5278__auto__){
var seq__50434__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50434__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__50434__$1);
var G__50471 = cljs.core.chunk_rest.call(null,seq__50434__$1);
var G__50472 = c__31003__auto__;
var G__50473 = cljs.core.count.call(null,c__31003__auto__);
var G__50474 = (0);
seq__50434 = G__50471;
chunk__50435 = G__50472;
count__50436 = G__50473;
i__50437 = G__50474;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50434__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50442_50475 = cljs.core.seq.call(null,requires);
var chunk__50443_50476 = null;
var count__50444_50477 = (0);
var i__50445_50478 = (0);
while(true){
if((i__50445_50478 < count__50444_50477)){
var req_50479 = cljs.core._nth.call(null,chunk__50443_50476,i__50445_50478);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50479,prov);

var G__50480 = seq__50442_50475;
var G__50481 = chunk__50443_50476;
var G__50482 = count__50444_50477;
var G__50483 = (i__50445_50478 + (1));
seq__50442_50475 = G__50480;
chunk__50443_50476 = G__50481;
count__50444_50477 = G__50482;
i__50445_50478 = G__50483;
continue;
} else {
var temp__5278__auto___50485__$1 = cljs.core.seq.call(null,seq__50442_50475);
if(temp__5278__auto___50485__$1){
var seq__50442_50486__$1 = temp__5278__auto___50485__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50442_50486__$1)){
var c__31003__auto___50487 = cljs.core.chunk_first.call(null,seq__50442_50486__$1);
var G__50488 = cljs.core.chunk_rest.call(null,seq__50442_50486__$1);
var G__50489 = c__31003__auto___50487;
var G__50490 = cljs.core.count.call(null,c__31003__auto___50487);
var G__50491 = (0);
seq__50442_50475 = G__50488;
chunk__50443_50476 = G__50489;
count__50444_50477 = G__50490;
i__50445_50478 = G__50491;
continue;
} else {
var req_50492 = cljs.core.first.call(null,seq__50442_50486__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50492,prov);

var G__50493 = cljs.core.next.call(null,seq__50442_50486__$1);
var G__50494 = null;
var G__50495 = (0);
var G__50496 = (0);
seq__50442_50475 = G__50493;
chunk__50443_50476 = G__50494;
count__50444_50477 = G__50495;
i__50445_50478 = G__50496;
continue;
}
} else {
}
}
break;
}

var G__50500 = cljs.core.next.call(null,seq__50434__$1);
var G__50501 = null;
var G__50502 = (0);
var G__50503 = (0);
seq__50434 = G__50500;
chunk__50435 = G__50501;
count__50436 = G__50502;
i__50437 = G__50503;
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
var seq__50508_50512 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50509_50513 = null;
var count__50510_50514 = (0);
var i__50511_50515 = (0);
while(true){
if((i__50511_50515 < count__50510_50514)){
var ns_50518 = cljs.core._nth.call(null,chunk__50509_50513,i__50511_50515);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50518);

var G__50520 = seq__50508_50512;
var G__50521 = chunk__50509_50513;
var G__50522 = count__50510_50514;
var G__50523 = (i__50511_50515 + (1));
seq__50508_50512 = G__50520;
chunk__50509_50513 = G__50521;
count__50510_50514 = G__50522;
i__50511_50515 = G__50523;
continue;
} else {
var temp__5278__auto___50524 = cljs.core.seq.call(null,seq__50508_50512);
if(temp__5278__auto___50524){
var seq__50508_50525__$1 = temp__5278__auto___50524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50508_50525__$1)){
var c__31003__auto___50526 = cljs.core.chunk_first.call(null,seq__50508_50525__$1);
var G__50527 = cljs.core.chunk_rest.call(null,seq__50508_50525__$1);
var G__50528 = c__31003__auto___50526;
var G__50529 = cljs.core.count.call(null,c__31003__auto___50526);
var G__50530 = (0);
seq__50508_50512 = G__50527;
chunk__50509_50513 = G__50528;
count__50510_50514 = G__50529;
i__50511_50515 = G__50530;
continue;
} else {
var ns_50531 = cljs.core.first.call(null,seq__50508_50525__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50531);

var G__50532 = cljs.core.next.call(null,seq__50508_50525__$1);
var G__50533 = null;
var G__50534 = (0);
var G__50535 = (0);
seq__50508_50512 = G__50532;
chunk__50509_50513 = G__50533;
count__50510_50514 = G__50534;
i__50511_50515 = G__50535;
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
var G__50540__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50557__i = 0, G__50557__a = new Array(arguments.length -  0);
while (G__50557__i < G__50557__a.length) {G__50557__a[G__50557__i] = arguments[G__50557__i + 0]; ++G__50557__i;}
  args = new cljs.core.IndexedSeq(G__50557__a,0,null);
} 
return G__50540__delegate.call(this,args);};
G__50540.cljs$lang$maxFixedArity = 0;
G__50540.cljs$lang$applyTo = (function (arglist__50558){
var args = cljs.core.seq(arglist__50558);
return G__50540__delegate(args);
});
G__50540.cljs$core$IFn$_invoke$arity$variadic = G__50540__delegate;
return G__50540;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__50561_SHARP_,p2__50562_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50561_SHARP_)].join('')),p2__50562_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__50563_SHARP_,p2__50564_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50563_SHARP_)].join(''),p2__50564_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__50569 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__50569.addCallback(((function (G__50569){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__50569))
);

G__50569.addErrback(((function (G__50569){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__50569))
);

return G__50569;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e50570){if((e50570 instanceof Error)){
var e = e50570;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50570;

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
}catch (e50572){if((e50572 instanceof Error)){
var e = e50572;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50572;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50577 = cljs.core._EQ_;
var expr__50578 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50577.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50578))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__50577.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50578))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__50577.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__50578))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__50577,expr__50578){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50577,expr__50578))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50583,callback){
var map__50584 = p__50583;
var map__50584__$1 = ((((!((map__50584 == null)))?((((map__50584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50584):map__50584);
var file_msg = map__50584__$1;
var request_url = cljs.core.get.call(null,map__50584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__50584,map__50584__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50584,map__50584__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__){
return (function (state_50632){
var state_val_50633 = (state_50632[(1)]);
if((state_val_50633 === (7))){
var inst_50627 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50634_50667 = state_50632__$1;
(statearr_50634_50667[(2)] = inst_50627);

(statearr_50634_50667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (1))){
var state_50632__$1 = state_50632;
var statearr_50635_50668 = state_50632__$1;
(statearr_50635_50668[(2)] = null);

(statearr_50635_50668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (4))){
var inst_50595 = (state_50632[(7)]);
var inst_50595__$1 = (state_50632[(2)]);
var state_50632__$1 = (function (){var statearr_50636 = state_50632;
(statearr_50636[(7)] = inst_50595__$1);

return statearr_50636;
})();
if(cljs.core.truth_(inst_50595__$1)){
var statearr_50637_50669 = state_50632__$1;
(statearr_50637_50669[(1)] = (5));

} else {
var statearr_50638_50670 = state_50632__$1;
(statearr_50638_50670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (15))){
var inst_50612 = (state_50632[(8)]);
var inst_50609 = (state_50632[(9)]);
var inst_50614 = inst_50612.call(null,inst_50609);
var state_50632__$1 = state_50632;
var statearr_50639_50671 = state_50632__$1;
(statearr_50639_50671[(2)] = inst_50614);

(statearr_50639_50671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (13))){
var inst_50621 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50640_50672 = state_50632__$1;
(statearr_50640_50672[(2)] = inst_50621);

(statearr_50640_50672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (6))){
var state_50632__$1 = state_50632;
var statearr_50641_50673 = state_50632__$1;
(statearr_50641_50673[(2)] = null);

(statearr_50641_50673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (17))){
var inst_50618 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50642_50674 = state_50632__$1;
(statearr_50642_50674[(2)] = inst_50618);

(statearr_50642_50674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (3))){
var inst_50629 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50632__$1,inst_50629);
} else {
if((state_val_50633 === (12))){
var state_50632__$1 = state_50632;
var statearr_50644_50678 = state_50632__$1;
(statearr_50644_50678[(2)] = null);

(statearr_50644_50678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (2))){
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50632__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50633 === (11))){
var inst_50600 = (state_50632[(10)]);
var inst_50607 = figwheel.client.file_reloading.blocking_load.call(null,inst_50600);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50632__$1,(14),inst_50607);
} else {
if((state_val_50633 === (9))){
var inst_50600 = (state_50632[(10)]);
var state_50632__$1 = state_50632;
if(cljs.core.truth_(inst_50600)){
var statearr_50646_50679 = state_50632__$1;
(statearr_50646_50679[(1)] = (11));

} else {
var statearr_50648_50680 = state_50632__$1;
(statearr_50648_50680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (5))){
var inst_50601 = (state_50632[(11)]);
var inst_50595 = (state_50632[(7)]);
var inst_50600 = cljs.core.nth.call(null,inst_50595,(0),null);
var inst_50601__$1 = cljs.core.nth.call(null,inst_50595,(1),null);
var state_50632__$1 = (function (){var statearr_50652 = state_50632;
(statearr_50652[(11)] = inst_50601__$1);

(statearr_50652[(10)] = inst_50600);

return statearr_50652;
})();
if(cljs.core.truth_(inst_50601__$1)){
var statearr_50653_50683 = state_50632__$1;
(statearr_50653_50683[(1)] = (8));

} else {
var statearr_50654_50685 = state_50632__$1;
(statearr_50654_50685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (14))){
var inst_50600 = (state_50632[(10)]);
var inst_50612 = (state_50632[(8)]);
var inst_50609 = (state_50632[(2)]);
var inst_50610 = console.log("Loading!",inst_50600);
var inst_50611 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50612__$1 = cljs.core.get.call(null,inst_50611,inst_50600);
var state_50632__$1 = (function (){var statearr_50655 = state_50632;
(statearr_50655[(12)] = inst_50610);

(statearr_50655[(8)] = inst_50612__$1);

(statearr_50655[(9)] = inst_50609);

return statearr_50655;
})();
if(cljs.core.truth_(inst_50612__$1)){
var statearr_50656_50686 = state_50632__$1;
(statearr_50656_50686[(1)] = (15));

} else {
var statearr_50657_50687 = state_50632__$1;
(statearr_50657_50687[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (16))){
var inst_50609 = (state_50632[(9)]);
var inst_50616 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50609);
var state_50632__$1 = state_50632;
var statearr_50658_50688 = state_50632__$1;
(statearr_50658_50688[(2)] = inst_50616);

(statearr_50658_50688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (10))){
var inst_50623 = (state_50632[(2)]);
var state_50632__$1 = (function (){var statearr_50659 = state_50632;
(statearr_50659[(13)] = inst_50623);

return statearr_50659;
})();
var statearr_50660_50689 = state_50632__$1;
(statearr_50660_50689[(2)] = null);

(statearr_50660_50689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (8))){
var inst_50601 = (state_50632[(11)]);
var inst_50603 = console.log("Evaling!",inst_50601);
var inst_50604 = eval(inst_50601);
var state_50632__$1 = (function (){var statearr_50661 = state_50632;
(statearr_50661[(14)] = inst_50603);

return statearr_50661;
})();
var statearr_50662_50691 = state_50632__$1;
(statearr_50662_50691[(2)] = inst_50604);

(statearr_50662_50691[(1)] = (10));


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
});})(c__33665__auto__))
;
return ((function (switch__33280__auto__,c__33665__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$state_machine__33281__auto____0 = (function (){
var statearr_50663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50663[(0)] = figwheel$client$file_reloading$state_machine__33281__auto__);

(statearr_50663[(1)] = (1));

return statearr_50663;
});
var figwheel$client$file_reloading$state_machine__33281__auto____1 = (function (state_50632){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_50632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e50664){if((e50664 instanceof Object)){
var ex__33284__auto__ = e50664;
var statearr_50665_50695 = state_50632;
(statearr_50665_50695[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50696 = state_50632;
state_50632 = G__50696;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33281__auto__ = function(state_50632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33281__auto____1.call(this,state_50632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33281__auto____0;
figwheel$client$file_reloading$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33281__auto____1;
return figwheel$client$file_reloading$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_50666 = f__33666__auto__.call(null);
(statearr_50666[(6)] = c__33665__auto__);

return statearr_50666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__50698 = arguments.length;
switch (G__50698) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50700,callback){
var map__50701 = p__50700;
var map__50701__$1 = ((((!((map__50701 == null)))?((((map__50701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50701):map__50701);
var file_msg = map__50701__$1;
var namespace = cljs.core.get.call(null,map__50701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50701,map__50701__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50701,map__50701__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50705){
var map__50706 = p__50705;
var map__50706__$1 = ((((!((map__50706 == null)))?((((map__50706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50706):map__50706);
var file_msg = map__50706__$1;
var namespace = cljs.core.get.call(null,map__50706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50711){
var map__50712 = p__50711;
var map__50712__$1 = ((((!((map__50712 == null)))?((((map__50712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50712):map__50712);
var file_msg = map__50712__$1;
var namespace = cljs.core.get.call(null,map__50712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50718,callback){
var map__50719 = p__50718;
var map__50719__$1 = ((((!((map__50719 == null)))?((((map__50719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50719):map__50719);
var file_msg = map__50719__$1;
var request_url = cljs.core.get.call(null,map__50719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33665__auto___50797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___50797,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___50797,out){
return (function (state_50756){
var state_val_50757 = (state_50756[(1)]);
if((state_val_50757 === (1))){
var inst_50730 = cljs.core.seq.call(null,files);
var inst_50731 = cljs.core.first.call(null,inst_50730);
var inst_50732 = cljs.core.next.call(null,inst_50730);
var inst_50733 = files;
var state_50756__$1 = (function (){var statearr_50758 = state_50756;
(statearr_50758[(7)] = inst_50731);

(statearr_50758[(8)] = inst_50732);

(statearr_50758[(9)] = inst_50733);

return statearr_50758;
})();
var statearr_50759_50798 = state_50756__$1;
(statearr_50759_50798[(2)] = null);

(statearr_50759_50798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (2))){
var inst_50739 = (state_50756[(10)]);
var inst_50733 = (state_50756[(9)]);
var inst_50738 = cljs.core.seq.call(null,inst_50733);
var inst_50739__$1 = cljs.core.first.call(null,inst_50738);
var inst_50740 = cljs.core.next.call(null,inst_50738);
var inst_50741 = (inst_50739__$1 == null);
var inst_50742 = cljs.core.not.call(null,inst_50741);
var state_50756__$1 = (function (){var statearr_50760 = state_50756;
(statearr_50760[(11)] = inst_50740);

(statearr_50760[(10)] = inst_50739__$1);

return statearr_50760;
})();
if(inst_50742){
var statearr_50761_50799 = state_50756__$1;
(statearr_50761_50799[(1)] = (4));

} else {
var statearr_50763_50800 = state_50756__$1;
(statearr_50763_50800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (3))){
var inst_50754 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50756__$1,inst_50754);
} else {
if((state_val_50757 === (4))){
var inst_50739 = (state_50756[(10)]);
var inst_50744 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50739);
var state_50756__$1 = state_50756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50756__$1,(7),inst_50744);
} else {
if((state_val_50757 === (5))){
var inst_50750 = cljs.core.async.close_BANG_.call(null,out);
var state_50756__$1 = state_50756;
var statearr_50782_50801 = state_50756__$1;
(statearr_50782_50801[(2)] = inst_50750);

(statearr_50782_50801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (6))){
var inst_50752 = (state_50756[(2)]);
var state_50756__$1 = state_50756;
var statearr_50783_50802 = state_50756__$1;
(statearr_50783_50802[(2)] = inst_50752);

(statearr_50783_50802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50757 === (7))){
var inst_50740 = (state_50756[(11)]);
var inst_50746 = (state_50756[(2)]);
var inst_50747 = cljs.core.async.put_BANG_.call(null,out,inst_50746);
var inst_50733 = inst_50740;
var state_50756__$1 = (function (){var statearr_50785 = state_50756;
(statearr_50785[(12)] = inst_50747);

(statearr_50785[(9)] = inst_50733);

return statearr_50785;
})();
var statearr_50786_50804 = state_50756__$1;
(statearr_50786_50804[(2)] = null);

(statearr_50786_50804[(1)] = (2));


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
});})(c__33665__auto___50797,out))
;
return ((function (switch__33280__auto__,c__33665__auto___50797,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0 = (function (){
var statearr_50788 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50788[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__);

(statearr_50788[(1)] = (1));

return statearr_50788;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1 = (function (state_50756){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_50756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e50789){if((e50789 instanceof Object)){
var ex__33284__auto__ = e50789;
var statearr_50791_50806 = state_50756;
(statearr_50791_50806[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50817 = state_50756;
state_50756 = G__50817;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__ = function(state_50756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1.call(this,state_50756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___50797,out))
})();
var state__33667__auto__ = (function (){var statearr_50794 = f__33666__auto__.call(null);
(statearr_50794[(6)] = c__33665__auto___50797);

return statearr_50794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___50797,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50822,opts){
var map__50823 = p__50822;
var map__50823__$1 = ((((!((map__50823 == null)))?((((map__50823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50823):map__50823);
var eval_body = cljs.core.get.call(null,map__50823__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e50828){var e = e50828;
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
return (function (p1__50830_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50830_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__50833){
var vec__50834 = p__50833;
var k = cljs.core.nth.call(null,vec__50834,(0),null);
var v = cljs.core.nth.call(null,vec__50834,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50837){
var vec__50838 = p__50837;
var k = cljs.core.nth.call(null,vec__50838,(0),null);
var v = cljs.core.nth.call(null,vec__50838,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50844,p__50845){
var map__50846 = p__50844;
var map__50846__$1 = ((((!((map__50846 == null)))?((((map__50846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50846):map__50846);
var opts = map__50846__$1;
var before_jsload = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50847 = p__50845;
var map__50847__$1 = ((((!((map__50847 == null)))?((((map__50847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50847):map__50847);
var msg = map__50847__$1;
var files = cljs.core.get.call(null,map__50847__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50847__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50847__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_51001){
var state_val_51002 = (state_51001[(1)]);
if((state_val_51002 === (7))){
var inst_50863 = (state_51001[(7)]);
var inst_50862 = (state_51001[(8)]);
var inst_50861 = (state_51001[(9)]);
var inst_50864 = (state_51001[(10)]);
var inst_50869 = cljs.core._nth.call(null,inst_50862,inst_50864);
var inst_50870 = figwheel.client.file_reloading.eval_body.call(null,inst_50869,opts);
var inst_50871 = (inst_50864 + (1));
var tmp51003 = inst_50863;
var tmp51004 = inst_50862;
var tmp51005 = inst_50861;
var inst_50861__$1 = tmp51005;
var inst_50862__$1 = tmp51004;
var inst_50863__$1 = tmp51003;
var inst_50864__$1 = inst_50871;
var state_51001__$1 = (function (){var statearr_51006 = state_51001;
(statearr_51006[(11)] = inst_50870);

(statearr_51006[(7)] = inst_50863__$1);

(statearr_51006[(8)] = inst_50862__$1);

(statearr_51006[(9)] = inst_50861__$1);

(statearr_51006[(10)] = inst_50864__$1);

return statearr_51006;
})();
var statearr_51007_51090 = state_51001__$1;
(statearr_51007_51090[(2)] = null);

(statearr_51007_51090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (20))){
var inst_50904 = (state_51001[(12)]);
var inst_50912 = figwheel.client.file_reloading.sort_files.call(null,inst_50904);
var state_51001__$1 = state_51001;
var statearr_51008_51091 = state_51001__$1;
(statearr_51008_51091[(2)] = inst_50912);

(statearr_51008_51091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (27))){
var state_51001__$1 = state_51001;
var statearr_51009_51092 = state_51001__$1;
(statearr_51009_51092[(2)] = null);

(statearr_51009_51092[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (1))){
var inst_50853 = (state_51001[(13)]);
var inst_50850 = before_jsload.call(null,files);
var inst_50851 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50852 = (function (){return ((function (inst_50853,inst_50850,inst_50851,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50841_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50841_SHARP_);
});
;})(inst_50853,inst_50850,inst_50851,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50853__$1 = cljs.core.filter.call(null,inst_50852,files);
var inst_50854 = cljs.core.not_empty.call(null,inst_50853__$1);
var state_51001__$1 = (function (){var statearr_51010 = state_51001;
(statearr_51010[(14)] = inst_50850);

(statearr_51010[(15)] = inst_50851);

(statearr_51010[(13)] = inst_50853__$1);

return statearr_51010;
})();
if(cljs.core.truth_(inst_50854)){
var statearr_51011_51093 = state_51001__$1;
(statearr_51011_51093[(1)] = (2));

} else {
var statearr_51012_51094 = state_51001__$1;
(statearr_51012_51094[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (24))){
var state_51001__$1 = state_51001;
var statearr_51013_51095 = state_51001__$1;
(statearr_51013_51095[(2)] = null);

(statearr_51013_51095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (39))){
var inst_50954 = (state_51001[(16)]);
var state_51001__$1 = state_51001;
var statearr_51014_51096 = state_51001__$1;
(statearr_51014_51096[(2)] = inst_50954);

(statearr_51014_51096[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (46))){
var inst_50996 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
var statearr_51015_51097 = state_51001__$1;
(statearr_51015_51097[(2)] = inst_50996);

(statearr_51015_51097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (4))){
var inst_50898 = (state_51001[(2)]);
var inst_50899 = cljs.core.List.EMPTY;
var inst_50900 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50899);
var inst_50901 = (function (){return ((function (inst_50898,inst_50899,inst_50900,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50842_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50842_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50842_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50842_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_50898,inst_50899,inst_50900,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50902 = cljs.core.filter.call(null,inst_50901,files);
var inst_50903 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50904 = cljs.core.concat.call(null,inst_50902,inst_50903);
var state_51001__$1 = (function (){var statearr_51016 = state_51001;
(statearr_51016[(17)] = inst_50898);

(statearr_51016[(18)] = inst_50900);

(statearr_51016[(12)] = inst_50904);

return statearr_51016;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_51017_51098 = state_51001__$1;
(statearr_51017_51098[(1)] = (16));

} else {
var statearr_51018_51099 = state_51001__$1;
(statearr_51018_51099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (15))){
var inst_50888 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
var statearr_51019_51100 = state_51001__$1;
(statearr_51019_51100[(2)] = inst_50888);

(statearr_51019_51100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (21))){
var inst_50914 = (state_51001[(19)]);
var inst_50914__$1 = (state_51001[(2)]);
var inst_50915 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50914__$1);
var state_51001__$1 = (function (){var statearr_51020 = state_51001;
(statearr_51020[(19)] = inst_50914__$1);

return statearr_51020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51001__$1,(22),inst_50915);
} else {
if((state_val_51002 === (31))){
var inst_50999 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51001__$1,inst_50999);
} else {
if((state_val_51002 === (32))){
var inst_50954 = (state_51001[(16)]);
var inst_50959 = inst_50954.cljs$lang$protocol_mask$partition0$;
var inst_50960 = (inst_50959 & (64));
var inst_50961 = inst_50954.cljs$core$ISeq$;
var inst_50962 = (cljs.core.PROTOCOL_SENTINEL === inst_50961);
var inst_50963 = (inst_50960) || (inst_50962);
var state_51001__$1 = state_51001;
if(cljs.core.truth_(inst_50963)){
var statearr_51021_51101 = state_51001__$1;
(statearr_51021_51101[(1)] = (35));

} else {
var statearr_51022_51102 = state_51001__$1;
(statearr_51022_51102[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (40))){
var inst_50976 = (state_51001[(20)]);
var inst_50975 = (state_51001[(2)]);
var inst_50976__$1 = cljs.core.get.call(null,inst_50975,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50977 = cljs.core.get.call(null,inst_50975,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50978 = cljs.core.not_empty.call(null,inst_50976__$1);
var state_51001__$1 = (function (){var statearr_51023 = state_51001;
(statearr_51023[(20)] = inst_50976__$1);

(statearr_51023[(21)] = inst_50977);

return statearr_51023;
})();
if(cljs.core.truth_(inst_50978)){
var statearr_51024_51103 = state_51001__$1;
(statearr_51024_51103[(1)] = (41));

} else {
var statearr_51025_51104 = state_51001__$1;
(statearr_51025_51104[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (33))){
var state_51001__$1 = state_51001;
var statearr_51026_51105 = state_51001__$1;
(statearr_51026_51105[(2)] = false);

(statearr_51026_51105[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (13))){
var inst_50874 = (state_51001[(22)]);
var inst_50878 = cljs.core.chunk_first.call(null,inst_50874);
var inst_50879 = cljs.core.chunk_rest.call(null,inst_50874);
var inst_50880 = cljs.core.count.call(null,inst_50878);
var inst_50861 = inst_50879;
var inst_50862 = inst_50878;
var inst_50863 = inst_50880;
var inst_50864 = (0);
var state_51001__$1 = (function (){var statearr_51027 = state_51001;
(statearr_51027[(7)] = inst_50863);

(statearr_51027[(8)] = inst_50862);

(statearr_51027[(9)] = inst_50861);

(statearr_51027[(10)] = inst_50864);

return statearr_51027;
})();
var statearr_51028_51106 = state_51001__$1;
(statearr_51028_51106[(2)] = null);

(statearr_51028_51106[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (22))){
var inst_50914 = (state_51001[(19)]);
var inst_50917 = (state_51001[(23)]);
var inst_50918 = (state_51001[(24)]);
var inst_50922 = (state_51001[(25)]);
var inst_50917__$1 = (state_51001[(2)]);
var inst_50918__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50917__$1);
var inst_50919 = (function (){var all_files = inst_50914;
var res_SINGLEQUOTE_ = inst_50917__$1;
var res = inst_50918__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50914,inst_50917,inst_50918,inst_50922,inst_50917__$1,inst_50918__$1,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50843_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50843_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50914,inst_50917,inst_50918,inst_50922,inst_50917__$1,inst_50918__$1,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50920 = cljs.core.filter.call(null,inst_50919,inst_50917__$1);
var inst_50921 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50922__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50921);
var inst_50923 = cljs.core.not_empty.call(null,inst_50922__$1);
var state_51001__$1 = (function (){var statearr_51029 = state_51001;
(statearr_51029[(26)] = inst_50920);

(statearr_51029[(23)] = inst_50917__$1);

(statearr_51029[(24)] = inst_50918__$1);

(statearr_51029[(25)] = inst_50922__$1);

return statearr_51029;
})();
if(cljs.core.truth_(inst_50923)){
var statearr_51030_51107 = state_51001__$1;
(statearr_51030_51107[(1)] = (23));

} else {
var statearr_51031_51108 = state_51001__$1;
(statearr_51031_51108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (36))){
var state_51001__$1 = state_51001;
var statearr_51032_51109 = state_51001__$1;
(statearr_51032_51109[(2)] = false);

(statearr_51032_51109[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (41))){
var inst_50976 = (state_51001[(20)]);
var inst_50980 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50981 = cljs.core.map.call(null,inst_50980,inst_50976);
var inst_50982 = cljs.core.pr_str.call(null,inst_50981);
var inst_50983 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50982)].join('');
var inst_50984 = figwheel.client.utils.log.call(null,inst_50983);
var state_51001__$1 = state_51001;
var statearr_51033_51110 = state_51001__$1;
(statearr_51033_51110[(2)] = inst_50984);

(statearr_51033_51110[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (43))){
var inst_50977 = (state_51001[(21)]);
var inst_50987 = (state_51001[(2)]);
var inst_50988 = cljs.core.not_empty.call(null,inst_50977);
var state_51001__$1 = (function (){var statearr_51034 = state_51001;
(statearr_51034[(27)] = inst_50987);

return statearr_51034;
})();
if(cljs.core.truth_(inst_50988)){
var statearr_51035_51111 = state_51001__$1;
(statearr_51035_51111[(1)] = (44));

} else {
var statearr_51036_51112 = state_51001__$1;
(statearr_51036_51112[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (29))){
var inst_50914 = (state_51001[(19)]);
var inst_50920 = (state_51001[(26)]);
var inst_50917 = (state_51001[(23)]);
var inst_50918 = (state_51001[(24)]);
var inst_50922 = (state_51001[(25)]);
var inst_50954 = (state_51001[(16)]);
var inst_50950 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50953 = (function (){var all_files = inst_50914;
var res_SINGLEQUOTE_ = inst_50917;
var res = inst_50918;
var files_not_loaded = inst_50920;
var dependencies_that_loaded = inst_50922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50954,inst_50950,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50952){
var map__51037 = p__50952;
var map__51037__$1 = ((((!((map__51037 == null)))?((((map__51037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51037):map__51037);
var namespace = cljs.core.get.call(null,map__51037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50954,inst_50950,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50954__$1 = cljs.core.group_by.call(null,inst_50953,inst_50920);
var inst_50956 = (inst_50954__$1 == null);
var inst_50957 = cljs.core.not.call(null,inst_50956);
var state_51001__$1 = (function (){var statearr_51039 = state_51001;
(statearr_51039[(28)] = inst_50950);

(statearr_51039[(16)] = inst_50954__$1);

return statearr_51039;
})();
if(inst_50957){
var statearr_51040_51113 = state_51001__$1;
(statearr_51040_51113[(1)] = (32));

} else {
var statearr_51041_51114 = state_51001__$1;
(statearr_51041_51114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (44))){
var inst_50977 = (state_51001[(21)]);
var inst_50990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50977);
var inst_50991 = cljs.core.pr_str.call(null,inst_50990);
var inst_50992 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50991)].join('');
var inst_50993 = figwheel.client.utils.log.call(null,inst_50992);
var state_51001__$1 = state_51001;
var statearr_51042_51115 = state_51001__$1;
(statearr_51042_51115[(2)] = inst_50993);

(statearr_51042_51115[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (6))){
var inst_50895 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
var statearr_51043_51116 = state_51001__$1;
(statearr_51043_51116[(2)] = inst_50895);

(statearr_51043_51116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (28))){
var inst_50920 = (state_51001[(26)]);
var inst_50947 = (state_51001[(2)]);
var inst_50948 = cljs.core.not_empty.call(null,inst_50920);
var state_51001__$1 = (function (){var statearr_51044 = state_51001;
(statearr_51044[(29)] = inst_50947);

return statearr_51044;
})();
if(cljs.core.truth_(inst_50948)){
var statearr_51045_51117 = state_51001__$1;
(statearr_51045_51117[(1)] = (29));

} else {
var statearr_51046_51118 = state_51001__$1;
(statearr_51046_51118[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (25))){
var inst_50918 = (state_51001[(24)]);
var inst_50934 = (state_51001[(2)]);
var inst_50935 = cljs.core.not_empty.call(null,inst_50918);
var state_51001__$1 = (function (){var statearr_51047 = state_51001;
(statearr_51047[(30)] = inst_50934);

return statearr_51047;
})();
if(cljs.core.truth_(inst_50935)){
var statearr_51048_51119 = state_51001__$1;
(statearr_51048_51119[(1)] = (26));

} else {
var statearr_51049_51120 = state_51001__$1;
(statearr_51049_51120[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (34))){
var inst_50970 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
if(cljs.core.truth_(inst_50970)){
var statearr_51050_51121 = state_51001__$1;
(statearr_51050_51121[(1)] = (38));

} else {
var statearr_51051_51122 = state_51001__$1;
(statearr_51051_51122[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (17))){
var state_51001__$1 = state_51001;
var statearr_51052_51123 = state_51001__$1;
(statearr_51052_51123[(2)] = recompile_dependents);

(statearr_51052_51123[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (3))){
var state_51001__$1 = state_51001;
var statearr_51053_51124 = state_51001__$1;
(statearr_51053_51124[(2)] = null);

(statearr_51053_51124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (12))){
var inst_50891 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
var statearr_51054_51125 = state_51001__$1;
(statearr_51054_51125[(2)] = inst_50891);

(statearr_51054_51125[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (2))){
var inst_50853 = (state_51001[(13)]);
var inst_50860 = cljs.core.seq.call(null,inst_50853);
var inst_50861 = inst_50860;
var inst_50862 = null;
var inst_50863 = (0);
var inst_50864 = (0);
var state_51001__$1 = (function (){var statearr_51055 = state_51001;
(statearr_51055[(7)] = inst_50863);

(statearr_51055[(8)] = inst_50862);

(statearr_51055[(9)] = inst_50861);

(statearr_51055[(10)] = inst_50864);

return statearr_51055;
})();
var statearr_51056_51126 = state_51001__$1;
(statearr_51056_51126[(2)] = null);

(statearr_51056_51126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (23))){
var inst_50914 = (state_51001[(19)]);
var inst_50920 = (state_51001[(26)]);
var inst_50917 = (state_51001[(23)]);
var inst_50918 = (state_51001[(24)]);
var inst_50922 = (state_51001[(25)]);
var inst_50925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50927 = (function (){var all_files = inst_50914;
var res_SINGLEQUOTE_ = inst_50917;
var res = inst_50918;
var files_not_loaded = inst_50920;
var dependencies_that_loaded = inst_50922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50925,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50926){
var map__51057 = p__50926;
var map__51057__$1 = ((((!((map__51057 == null)))?((((map__51057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51057):map__51057);
var request_url = cljs.core.get.call(null,map__51057__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50925,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50928 = cljs.core.reverse.call(null,inst_50922);
var inst_50929 = cljs.core.map.call(null,inst_50927,inst_50928);
var inst_50930 = cljs.core.pr_str.call(null,inst_50929);
var inst_50931 = figwheel.client.utils.log.call(null,inst_50930);
var state_51001__$1 = (function (){var statearr_51059 = state_51001;
(statearr_51059[(31)] = inst_50925);

return statearr_51059;
})();
var statearr_51060_51127 = state_51001__$1;
(statearr_51060_51127[(2)] = inst_50931);

(statearr_51060_51127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (35))){
var state_51001__$1 = state_51001;
var statearr_51061_51128 = state_51001__$1;
(statearr_51061_51128[(2)] = true);

(statearr_51061_51128[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (19))){
var inst_50904 = (state_51001[(12)]);
var inst_50910 = figwheel.client.file_reloading.expand_files.call(null,inst_50904);
var state_51001__$1 = state_51001;
var statearr_51062_51129 = state_51001__$1;
(statearr_51062_51129[(2)] = inst_50910);

(statearr_51062_51129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (11))){
var state_51001__$1 = state_51001;
var statearr_51063_51130 = state_51001__$1;
(statearr_51063_51130[(2)] = null);

(statearr_51063_51130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (9))){
var inst_50893 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
var statearr_51064_51131 = state_51001__$1;
(statearr_51064_51131[(2)] = inst_50893);

(statearr_51064_51131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (5))){
var inst_50863 = (state_51001[(7)]);
var inst_50864 = (state_51001[(10)]);
var inst_50866 = (inst_50864 < inst_50863);
var inst_50867 = inst_50866;
var state_51001__$1 = state_51001;
if(cljs.core.truth_(inst_50867)){
var statearr_51065_51132 = state_51001__$1;
(statearr_51065_51132[(1)] = (7));

} else {
var statearr_51066_51133 = state_51001__$1;
(statearr_51066_51133[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (14))){
var inst_50874 = (state_51001[(22)]);
var inst_50883 = cljs.core.first.call(null,inst_50874);
var inst_50884 = figwheel.client.file_reloading.eval_body.call(null,inst_50883,opts);
var inst_50885 = cljs.core.next.call(null,inst_50874);
var inst_50861 = inst_50885;
var inst_50862 = null;
var inst_50863 = (0);
var inst_50864 = (0);
var state_51001__$1 = (function (){var statearr_51067 = state_51001;
(statearr_51067[(7)] = inst_50863);

(statearr_51067[(8)] = inst_50862);

(statearr_51067[(9)] = inst_50861);

(statearr_51067[(10)] = inst_50864);

(statearr_51067[(32)] = inst_50884);

return statearr_51067;
})();
var statearr_51068_51134 = state_51001__$1;
(statearr_51068_51134[(2)] = null);

(statearr_51068_51134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (45))){
var state_51001__$1 = state_51001;
var statearr_51069_51135 = state_51001__$1;
(statearr_51069_51135[(2)] = null);

(statearr_51069_51135[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (26))){
var inst_50914 = (state_51001[(19)]);
var inst_50920 = (state_51001[(26)]);
var inst_50917 = (state_51001[(23)]);
var inst_50918 = (state_51001[(24)]);
var inst_50922 = (state_51001[(25)]);
var inst_50937 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50939 = (function (){var all_files = inst_50914;
var res_SINGLEQUOTE_ = inst_50917;
var res = inst_50918;
var files_not_loaded = inst_50920;
var dependencies_that_loaded = inst_50922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50937,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50938){
var map__51070 = p__50938;
var map__51070__$1 = ((((!((map__51070 == null)))?((((map__51070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51070):map__51070);
var namespace = cljs.core.get.call(null,map__51070__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50937,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50940 = cljs.core.map.call(null,inst_50939,inst_50918);
var inst_50941 = cljs.core.pr_str.call(null,inst_50940);
var inst_50942 = figwheel.client.utils.log.call(null,inst_50941);
var inst_50943 = (function (){var all_files = inst_50914;
var res_SINGLEQUOTE_ = inst_50917;
var res = inst_50918;
var files_not_loaded = inst_50920;
var dependencies_that_loaded = inst_50922;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50937,inst_50939,inst_50940,inst_50941,inst_50942,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50914,inst_50920,inst_50917,inst_50918,inst_50922,inst_50937,inst_50939,inst_50940,inst_50941,inst_50942,state_val_51002,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50944 = setTimeout(inst_50943,(10));
var state_51001__$1 = (function (){var statearr_51072 = state_51001;
(statearr_51072[(33)] = inst_50937);

(statearr_51072[(34)] = inst_50942);

return statearr_51072;
})();
var statearr_51073_51136 = state_51001__$1;
(statearr_51073_51136[(2)] = inst_50944);

(statearr_51073_51136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (16))){
var state_51001__$1 = state_51001;
var statearr_51074_51137 = state_51001__$1;
(statearr_51074_51137[(2)] = reload_dependents);

(statearr_51074_51137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (38))){
var inst_50954 = (state_51001[(16)]);
var inst_50972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50954);
var state_51001__$1 = state_51001;
var statearr_51075_51138 = state_51001__$1;
(statearr_51075_51138[(2)] = inst_50972);

(statearr_51075_51138[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (30))){
var state_51001__$1 = state_51001;
var statearr_51076_51139 = state_51001__$1;
(statearr_51076_51139[(2)] = null);

(statearr_51076_51139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (10))){
var inst_50874 = (state_51001[(22)]);
var inst_50876 = cljs.core.chunked_seq_QMARK_.call(null,inst_50874);
var state_51001__$1 = state_51001;
if(inst_50876){
var statearr_51077_51140 = state_51001__$1;
(statearr_51077_51140[(1)] = (13));

} else {
var statearr_51078_51141 = state_51001__$1;
(statearr_51078_51141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (18))){
var inst_50908 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
if(cljs.core.truth_(inst_50908)){
var statearr_51079_51142 = state_51001__$1;
(statearr_51079_51142[(1)] = (19));

} else {
var statearr_51080_51143 = state_51001__$1;
(statearr_51080_51143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (42))){
var state_51001__$1 = state_51001;
var statearr_51081_51144 = state_51001__$1;
(statearr_51081_51144[(2)] = null);

(statearr_51081_51144[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (37))){
var inst_50967 = (state_51001[(2)]);
var state_51001__$1 = state_51001;
var statearr_51082_51145 = state_51001__$1;
(statearr_51082_51145[(2)] = inst_50967);

(statearr_51082_51145[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51002 === (8))){
var inst_50874 = (state_51001[(22)]);
var inst_50861 = (state_51001[(9)]);
var inst_50874__$1 = cljs.core.seq.call(null,inst_50861);
var state_51001__$1 = (function (){var statearr_51083 = state_51001;
(statearr_51083[(22)] = inst_50874__$1);

return statearr_51083;
})();
if(inst_50874__$1){
var statearr_51084_51146 = state_51001__$1;
(statearr_51084_51146[(1)] = (10));

} else {
var statearr_51085_51147 = state_51001__$1;
(statearr_51085_51147[(1)] = (11));

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
});})(c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33280__auto__,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0 = (function (){
var statearr_51086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51086[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__);

(statearr_51086[(1)] = (1));

return statearr_51086;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1 = (function (state_51001){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_51001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e51087){if((e51087 instanceof Object)){
var ex__33284__auto__ = e51087;
var statearr_51088_51148 = state_51001;
(statearr_51088_51148[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51149 = state_51001;
state_51001 = G__51149;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__ = function(state_51001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1.call(this,state_51001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33667__auto__ = (function (){var statearr_51089 = f__33666__auto__.call(null);
(statearr_51089[(6)] = c__33665__auto__);

return statearr_51089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,map__50846,map__50846__$1,opts,before_jsload,on_jsload,reload_dependents,map__50847,map__50847__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33665__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51152,link){
var map__51153 = p__51152;
var map__51153__$1 = ((((!((map__51153 == null)))?((((map__51153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51153):map__51153);
var file = cljs.core.get.call(null,map__51153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__51153,map__51153__$1,file){
return (function (p1__51150_SHARP_,p2__51151_SHARP_){
if(cljs.core._EQ_.call(null,p1__51150_SHARP_,p2__51151_SHARP_)){
return p1__51150_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__51153,map__51153__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51156){
var map__51157 = p__51156;
var map__51157__$1 = ((((!((map__51157 == null)))?((((map__51157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51157):map__51157);
var match_length = cljs.core.get.call(null,map__51157__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51157__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51155_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51155_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51159_SHARP_,p2__51160_SHARP_){
return cljs.core.assoc.call(null,p1__51159_SHARP_,cljs.core.get.call(null,p2__51160_SHARP_,key),p2__51160_SHARP_);
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
var loaded_f_datas_51161 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_51161);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_51161);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__51162,p__51163){
var map__51164 = p__51162;
var map__51164__$1 = ((((!((map__51164 == null)))?((((map__51164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51164):map__51164);
var on_cssload = cljs.core.get.call(null,map__51164__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__51165 = p__51163;
var map__51165__$1 = ((((!((map__51165 == null)))?((((map__51165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51165):map__51165);
var files_msg = map__51165__$1;
var files = cljs.core.get.call(null,map__51165__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510229233111
