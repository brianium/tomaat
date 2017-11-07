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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37314_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37314_SHARP_));
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
var seq__37315 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37316 = null;
var count__37317 = (0);
var i__37318 = (0);
while(true){
if((i__37318 < count__37317)){
var n = cljs.core._nth.call(null,chunk__37316,i__37318);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37319 = seq__37315;
var G__37320 = chunk__37316;
var G__37321 = count__37317;
var G__37322 = (i__37318 + (1));
seq__37315 = G__37319;
chunk__37316 = G__37320;
count__37317 = G__37321;
i__37318 = G__37322;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37315);
if(temp__5278__auto__){
var seq__37315__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37315__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37315__$1);
var G__37323 = cljs.core.chunk_rest.call(null,seq__37315__$1);
var G__37324 = c__31003__auto__;
var G__37325 = cljs.core.count.call(null,c__31003__auto__);
var G__37326 = (0);
seq__37315 = G__37323;
chunk__37316 = G__37324;
count__37317 = G__37325;
i__37318 = G__37326;
continue;
} else {
var n = cljs.core.first.call(null,seq__37315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37327 = cljs.core.next.call(null,seq__37315__$1);
var G__37328 = null;
var G__37329 = (0);
var G__37330 = (0);
seq__37315 = G__37327;
chunk__37316 = G__37328;
count__37317 = G__37329;
i__37318 = G__37330;
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
return cljs.core.some.call(null,(function (p__37331){
var vec__37332 = p__37331;
var _ = cljs.core.nth.call(null,vec__37332,(0),null);
var v = cljs.core.nth.call(null,vec__37332,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__37335){
var vec__37336 = p__37335;
var k = cljs.core.nth.call(null,vec__37336,(0),null);
var v = cljs.core.nth.call(null,vec__37336,(1),null);
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

var seq__37348_37356 = cljs.core.seq.call(null,deps);
var chunk__37349_37357 = null;
var count__37350_37358 = (0);
var i__37351_37359 = (0);
while(true){
if((i__37351_37359 < count__37350_37358)){
var dep_37360 = cljs.core._nth.call(null,chunk__37349_37357,i__37351_37359);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_37360;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37360));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37360,(depth + (1)),state);
} else {
}

var G__37361 = seq__37348_37356;
var G__37362 = chunk__37349_37357;
var G__37363 = count__37350_37358;
var G__37364 = (i__37351_37359 + (1));
seq__37348_37356 = G__37361;
chunk__37349_37357 = G__37362;
count__37350_37358 = G__37363;
i__37351_37359 = G__37364;
continue;
} else {
var temp__5278__auto___37365 = cljs.core.seq.call(null,seq__37348_37356);
if(temp__5278__auto___37365){
var seq__37348_37366__$1 = temp__5278__auto___37365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37348_37366__$1)){
var c__31003__auto___37367 = cljs.core.chunk_first.call(null,seq__37348_37366__$1);
var G__37368 = cljs.core.chunk_rest.call(null,seq__37348_37366__$1);
var G__37369 = c__31003__auto___37367;
var G__37370 = cljs.core.count.call(null,c__31003__auto___37367);
var G__37371 = (0);
seq__37348_37356 = G__37368;
chunk__37349_37357 = G__37369;
count__37350_37358 = G__37370;
i__37351_37359 = G__37371;
continue;
} else {
var dep_37372 = cljs.core.first.call(null,seq__37348_37366__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_37372;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37372));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37372,(depth + (1)),state);
} else {
}

var G__37373 = cljs.core.next.call(null,seq__37348_37366__$1);
var G__37374 = null;
var G__37375 = (0);
var G__37376 = (0);
seq__37348_37356 = G__37373;
chunk__37349_37357 = G__37374;
count__37350_37358 = G__37375;
i__37351_37359 = G__37376;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37352){
var vec__37353 = p__37352;
var seq__37354 = cljs.core.seq.call(null,vec__37353);
var first__37355 = cljs.core.first.call(null,seq__37354);
var seq__37354__$1 = cljs.core.next.call(null,seq__37354);
var x = first__37355;
var xs = seq__37354__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37353,seq__37354,first__37355,seq__37354__$1,x,xs,get_deps__$1){
return (function (p1__37339_SHARP_){
return clojure.set.difference.call(null,p1__37339_SHARP_,x);
});})(vec__37353,seq__37354,first__37355,seq__37354__$1,x,xs,get_deps__$1))
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
var seq__37377 = cljs.core.seq.call(null,provides);
var chunk__37378 = null;
var count__37379 = (0);
var i__37380 = (0);
while(true){
if((i__37380 < count__37379)){
var prov = cljs.core._nth.call(null,chunk__37378,i__37380);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37381_37389 = cljs.core.seq.call(null,requires);
var chunk__37382_37390 = null;
var count__37383_37391 = (0);
var i__37384_37392 = (0);
while(true){
if((i__37384_37392 < count__37383_37391)){
var req_37393 = cljs.core._nth.call(null,chunk__37382_37390,i__37384_37392);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37393,prov);

var G__37394 = seq__37381_37389;
var G__37395 = chunk__37382_37390;
var G__37396 = count__37383_37391;
var G__37397 = (i__37384_37392 + (1));
seq__37381_37389 = G__37394;
chunk__37382_37390 = G__37395;
count__37383_37391 = G__37396;
i__37384_37392 = G__37397;
continue;
} else {
var temp__5278__auto___37398 = cljs.core.seq.call(null,seq__37381_37389);
if(temp__5278__auto___37398){
var seq__37381_37399__$1 = temp__5278__auto___37398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37381_37399__$1)){
var c__31003__auto___37400 = cljs.core.chunk_first.call(null,seq__37381_37399__$1);
var G__37401 = cljs.core.chunk_rest.call(null,seq__37381_37399__$1);
var G__37402 = c__31003__auto___37400;
var G__37403 = cljs.core.count.call(null,c__31003__auto___37400);
var G__37404 = (0);
seq__37381_37389 = G__37401;
chunk__37382_37390 = G__37402;
count__37383_37391 = G__37403;
i__37384_37392 = G__37404;
continue;
} else {
var req_37405 = cljs.core.first.call(null,seq__37381_37399__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37405,prov);

var G__37406 = cljs.core.next.call(null,seq__37381_37399__$1);
var G__37407 = null;
var G__37408 = (0);
var G__37409 = (0);
seq__37381_37389 = G__37406;
chunk__37382_37390 = G__37407;
count__37383_37391 = G__37408;
i__37384_37392 = G__37409;
continue;
}
} else {
}
}
break;
}

var G__37410 = seq__37377;
var G__37411 = chunk__37378;
var G__37412 = count__37379;
var G__37413 = (i__37380 + (1));
seq__37377 = G__37410;
chunk__37378 = G__37411;
count__37379 = G__37412;
i__37380 = G__37413;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37377);
if(temp__5278__auto__){
var seq__37377__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37377__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37377__$1);
var G__37414 = cljs.core.chunk_rest.call(null,seq__37377__$1);
var G__37415 = c__31003__auto__;
var G__37416 = cljs.core.count.call(null,c__31003__auto__);
var G__37417 = (0);
seq__37377 = G__37414;
chunk__37378 = G__37415;
count__37379 = G__37416;
i__37380 = G__37417;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37377__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37385_37418 = cljs.core.seq.call(null,requires);
var chunk__37386_37419 = null;
var count__37387_37420 = (0);
var i__37388_37421 = (0);
while(true){
if((i__37388_37421 < count__37387_37420)){
var req_37422 = cljs.core._nth.call(null,chunk__37386_37419,i__37388_37421);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37422,prov);

var G__37423 = seq__37385_37418;
var G__37424 = chunk__37386_37419;
var G__37425 = count__37387_37420;
var G__37426 = (i__37388_37421 + (1));
seq__37385_37418 = G__37423;
chunk__37386_37419 = G__37424;
count__37387_37420 = G__37425;
i__37388_37421 = G__37426;
continue;
} else {
var temp__5278__auto___37427__$1 = cljs.core.seq.call(null,seq__37385_37418);
if(temp__5278__auto___37427__$1){
var seq__37385_37428__$1 = temp__5278__auto___37427__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37385_37428__$1)){
var c__31003__auto___37429 = cljs.core.chunk_first.call(null,seq__37385_37428__$1);
var G__37430 = cljs.core.chunk_rest.call(null,seq__37385_37428__$1);
var G__37431 = c__31003__auto___37429;
var G__37432 = cljs.core.count.call(null,c__31003__auto___37429);
var G__37433 = (0);
seq__37385_37418 = G__37430;
chunk__37386_37419 = G__37431;
count__37387_37420 = G__37432;
i__37388_37421 = G__37433;
continue;
} else {
var req_37434 = cljs.core.first.call(null,seq__37385_37428__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37434,prov);

var G__37435 = cljs.core.next.call(null,seq__37385_37428__$1);
var G__37436 = null;
var G__37437 = (0);
var G__37438 = (0);
seq__37385_37418 = G__37435;
chunk__37386_37419 = G__37436;
count__37387_37420 = G__37437;
i__37388_37421 = G__37438;
continue;
}
} else {
}
}
break;
}

var G__37439 = cljs.core.next.call(null,seq__37377__$1);
var G__37440 = null;
var G__37441 = (0);
var G__37442 = (0);
seq__37377 = G__37439;
chunk__37378 = G__37440;
count__37379 = G__37441;
i__37380 = G__37442;
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
var seq__37443_37447 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37444_37448 = null;
var count__37445_37449 = (0);
var i__37446_37450 = (0);
while(true){
if((i__37446_37450 < count__37445_37449)){
var ns_37451 = cljs.core._nth.call(null,chunk__37444_37448,i__37446_37450);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37451);

var G__37452 = seq__37443_37447;
var G__37453 = chunk__37444_37448;
var G__37454 = count__37445_37449;
var G__37455 = (i__37446_37450 + (1));
seq__37443_37447 = G__37452;
chunk__37444_37448 = G__37453;
count__37445_37449 = G__37454;
i__37446_37450 = G__37455;
continue;
} else {
var temp__5278__auto___37456 = cljs.core.seq.call(null,seq__37443_37447);
if(temp__5278__auto___37456){
var seq__37443_37457__$1 = temp__5278__auto___37456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37443_37457__$1)){
var c__31003__auto___37458 = cljs.core.chunk_first.call(null,seq__37443_37457__$1);
var G__37459 = cljs.core.chunk_rest.call(null,seq__37443_37457__$1);
var G__37460 = c__31003__auto___37458;
var G__37461 = cljs.core.count.call(null,c__31003__auto___37458);
var G__37462 = (0);
seq__37443_37447 = G__37459;
chunk__37444_37448 = G__37460;
count__37445_37449 = G__37461;
i__37446_37450 = G__37462;
continue;
} else {
var ns_37463 = cljs.core.first.call(null,seq__37443_37457__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37463);

var G__37464 = cljs.core.next.call(null,seq__37443_37457__$1);
var G__37465 = null;
var G__37466 = (0);
var G__37467 = (0);
seq__37443_37447 = G__37464;
chunk__37444_37448 = G__37465;
count__37445_37449 = G__37466;
i__37446_37450 = G__37467;
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
var G__37468__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37469__i = 0, G__37469__a = new Array(arguments.length -  0);
while (G__37469__i < G__37469__a.length) {G__37469__a[G__37469__i] = arguments[G__37469__i + 0]; ++G__37469__i;}
  args = new cljs.core.IndexedSeq(G__37469__a,0,null);
} 
return G__37468__delegate.call(this,args);};
G__37468.cljs$lang$maxFixedArity = 0;
G__37468.cljs$lang$applyTo = (function (arglist__37470){
var args = cljs.core.seq(arglist__37470);
return G__37468__delegate(args);
});
G__37468.cljs$core$IFn$_invoke$arity$variadic = G__37468__delegate;
return G__37468;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37471_SHARP_,p2__37472_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37471_SHARP_)].join('')),p2__37472_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37473_SHARP_,p2__37474_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37473_SHARP_)].join(''),p2__37474_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37475 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37475.addCallback(((function (G__37475){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37475))
);

G__37475.addErrback(((function (G__37475){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37475))
);

return G__37475;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37476){if((e37476 instanceof Error)){
var e = e37476;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37476;

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
}catch (e37477){if((e37477 instanceof Error)){
var e = e37477;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37477;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37478 = cljs.core._EQ_;
var expr__37479 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37478.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37479))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37478.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37479))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37478.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37479))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37478,expr__37479){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37478,expr__37479))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37481,callback){
var map__37482 = p__37481;
var map__37482__$1 = ((((!((map__37482 == null)))?((((map__37482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37482):map__37482);
var file_msg = map__37482__$1;
var request_url = cljs.core.get.call(null,map__37482__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37482,map__37482__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37482,map__37482__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__){
return (function (state_37522){
var state_val_37523 = (state_37522[(1)]);
if((state_val_37523 === (7))){
var inst_37518 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37524_37551 = state_37522__$1;
(statearr_37524_37551[(2)] = inst_37518);

(statearr_37524_37551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (1))){
var state_37522__$1 = state_37522;
var statearr_37525_37552 = state_37522__$1;
(statearr_37525_37552[(2)] = null);

(statearr_37525_37552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (4))){
var inst_37486 = (state_37522[(7)]);
var inst_37486__$1 = (state_37522[(2)]);
var state_37522__$1 = (function (){var statearr_37526 = state_37522;
(statearr_37526[(7)] = inst_37486__$1);

return statearr_37526;
})();
if(cljs.core.truth_(inst_37486__$1)){
var statearr_37527_37553 = state_37522__$1;
(statearr_37527_37553[(1)] = (5));

} else {
var statearr_37528_37554 = state_37522__$1;
(statearr_37528_37554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (15))){
var inst_37500 = (state_37522[(8)]);
var inst_37503 = (state_37522[(9)]);
var inst_37505 = inst_37503.call(null,inst_37500);
var state_37522__$1 = state_37522;
var statearr_37529_37555 = state_37522__$1;
(statearr_37529_37555[(2)] = inst_37505);

(statearr_37529_37555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (13))){
var inst_37512 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37530_37556 = state_37522__$1;
(statearr_37530_37556[(2)] = inst_37512);

(statearr_37530_37556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (6))){
var state_37522__$1 = state_37522;
var statearr_37531_37557 = state_37522__$1;
(statearr_37531_37557[(2)] = null);

(statearr_37531_37557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (17))){
var inst_37509 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37532_37558 = state_37522__$1;
(statearr_37532_37558[(2)] = inst_37509);

(statearr_37532_37558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (3))){
var inst_37520 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37522__$1,inst_37520);
} else {
if((state_val_37523 === (12))){
var state_37522__$1 = state_37522;
var statearr_37533_37559 = state_37522__$1;
(statearr_37533_37559[(2)] = null);

(statearr_37533_37559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (2))){
var state_37522__$1 = state_37522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37522__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37523 === (11))){
var inst_37491 = (state_37522[(10)]);
var inst_37498 = figwheel.client.file_reloading.blocking_load.call(null,inst_37491);
var state_37522__$1 = state_37522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37522__$1,(14),inst_37498);
} else {
if((state_val_37523 === (9))){
var inst_37491 = (state_37522[(10)]);
var state_37522__$1 = state_37522;
if(cljs.core.truth_(inst_37491)){
var statearr_37534_37560 = state_37522__$1;
(statearr_37534_37560[(1)] = (11));

} else {
var statearr_37535_37561 = state_37522__$1;
(statearr_37535_37561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (5))){
var inst_37486 = (state_37522[(7)]);
var inst_37492 = (state_37522[(11)]);
var inst_37491 = cljs.core.nth.call(null,inst_37486,(0),null);
var inst_37492__$1 = cljs.core.nth.call(null,inst_37486,(1),null);
var state_37522__$1 = (function (){var statearr_37536 = state_37522;
(statearr_37536[(11)] = inst_37492__$1);

(statearr_37536[(10)] = inst_37491);

return statearr_37536;
})();
if(cljs.core.truth_(inst_37492__$1)){
var statearr_37537_37562 = state_37522__$1;
(statearr_37537_37562[(1)] = (8));

} else {
var statearr_37538_37563 = state_37522__$1;
(statearr_37538_37563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (14))){
var inst_37503 = (state_37522[(9)]);
var inst_37491 = (state_37522[(10)]);
var inst_37500 = (state_37522[(2)]);
var inst_37501 = console.log("Loading!",inst_37491);
var inst_37502 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37503__$1 = cljs.core.get.call(null,inst_37502,inst_37491);
var state_37522__$1 = (function (){var statearr_37539 = state_37522;
(statearr_37539[(12)] = inst_37501);

(statearr_37539[(8)] = inst_37500);

(statearr_37539[(9)] = inst_37503__$1);

return statearr_37539;
})();
if(cljs.core.truth_(inst_37503__$1)){
var statearr_37540_37564 = state_37522__$1;
(statearr_37540_37564[(1)] = (15));

} else {
var statearr_37541_37565 = state_37522__$1;
(statearr_37541_37565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (16))){
var inst_37500 = (state_37522[(8)]);
var inst_37507 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37500);
var state_37522__$1 = state_37522;
var statearr_37542_37566 = state_37522__$1;
(statearr_37542_37566[(2)] = inst_37507);

(statearr_37542_37566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (10))){
var inst_37514 = (state_37522[(2)]);
var state_37522__$1 = (function (){var statearr_37543 = state_37522;
(statearr_37543[(13)] = inst_37514);

return statearr_37543;
})();
var statearr_37544_37567 = state_37522__$1;
(statearr_37544_37567[(2)] = null);

(statearr_37544_37567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (8))){
var inst_37492 = (state_37522[(11)]);
var inst_37494 = console.log("Evaling!",inst_37492);
var inst_37495 = eval(inst_37492);
var state_37522__$1 = (function (){var statearr_37545 = state_37522;
(statearr_37545[(14)] = inst_37494);

return statearr_37545;
})();
var statearr_37546_37568 = state_37522__$1;
(statearr_37546_37568[(2)] = inst_37495);

(statearr_37546_37568[(1)] = (10));


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
});})(c__34124__auto__))
;
return ((function (switch__34034__auto__,c__34124__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34035__auto__ = null;
var figwheel$client$file_reloading$state_machine__34035__auto____0 = (function (){
var statearr_37547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37547[(0)] = figwheel$client$file_reloading$state_machine__34035__auto__);

(statearr_37547[(1)] = (1));

return statearr_37547;
});
var figwheel$client$file_reloading$state_machine__34035__auto____1 = (function (state_37522){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_37522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e37548){if((e37548 instanceof Object)){
var ex__34038__auto__ = e37548;
var statearr_37549_37569 = state_37522;
(statearr_37549_37569[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37570 = state_37522;
state_37522 = G__37570;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34035__auto__ = function(state_37522){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34035__auto____1.call(this,state_37522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34035__auto____0;
figwheel$client$file_reloading$state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34035__auto____1;
return figwheel$client$file_reloading$state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__))
})();
var state__34126__auto__ = (function (){var statearr_37550 = f__34125__auto__.call(null);
(statearr_37550[(6)] = c__34124__auto__);

return statearr_37550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__))
);

return c__34124__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37572 = arguments.length;
switch (G__37572) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37574,callback){
var map__37575 = p__37574;
var map__37575__$1 = ((((!((map__37575 == null)))?((((map__37575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37575):map__37575);
var file_msg = map__37575__$1;
var namespace = cljs.core.get.call(null,map__37575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37575,map__37575__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37575,map__37575__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37577){
var map__37578 = p__37577;
var map__37578__$1 = ((((!((map__37578 == null)))?((((map__37578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37578):map__37578);
var file_msg = map__37578__$1;
var namespace = cljs.core.get.call(null,map__37578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37580){
var map__37581 = p__37580;
var map__37581__$1 = ((((!((map__37581 == null)))?((((map__37581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37581):map__37581);
var file_msg = map__37581__$1;
var namespace = cljs.core.get.call(null,map__37581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37583,callback){
var map__37584 = p__37583;
var map__37584__$1 = ((((!((map__37584 == null)))?((((map__37584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37584):map__37584);
var file_msg = map__37584__$1;
var request_url = cljs.core.get.call(null,map__37584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37584__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34124__auto___37634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto___37634,out){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto___37634,out){
return (function (state_37619){
var state_val_37620 = (state_37619[(1)]);
if((state_val_37620 === (1))){
var inst_37593 = cljs.core.seq.call(null,files);
var inst_37594 = cljs.core.first.call(null,inst_37593);
var inst_37595 = cljs.core.next.call(null,inst_37593);
var inst_37596 = files;
var state_37619__$1 = (function (){var statearr_37621 = state_37619;
(statearr_37621[(7)] = inst_37596);

(statearr_37621[(8)] = inst_37594);

(statearr_37621[(9)] = inst_37595);

return statearr_37621;
})();
var statearr_37622_37635 = state_37619__$1;
(statearr_37622_37635[(2)] = null);

(statearr_37622_37635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (2))){
var inst_37596 = (state_37619[(7)]);
var inst_37602 = (state_37619[(10)]);
var inst_37601 = cljs.core.seq.call(null,inst_37596);
var inst_37602__$1 = cljs.core.first.call(null,inst_37601);
var inst_37603 = cljs.core.next.call(null,inst_37601);
var inst_37604 = (inst_37602__$1 == null);
var inst_37605 = cljs.core.not.call(null,inst_37604);
var state_37619__$1 = (function (){var statearr_37623 = state_37619;
(statearr_37623[(11)] = inst_37603);

(statearr_37623[(10)] = inst_37602__$1);

return statearr_37623;
})();
if(inst_37605){
var statearr_37624_37636 = state_37619__$1;
(statearr_37624_37636[(1)] = (4));

} else {
var statearr_37625_37637 = state_37619__$1;
(statearr_37625_37637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (3))){
var inst_37617 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37619__$1,inst_37617);
} else {
if((state_val_37620 === (4))){
var inst_37602 = (state_37619[(10)]);
var inst_37607 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37602);
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37619__$1,(7),inst_37607);
} else {
if((state_val_37620 === (5))){
var inst_37613 = cljs.core.async.close_BANG_.call(null,out);
var state_37619__$1 = state_37619;
var statearr_37626_37638 = state_37619__$1;
(statearr_37626_37638[(2)] = inst_37613);

(statearr_37626_37638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (6))){
var inst_37615 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
var statearr_37627_37639 = state_37619__$1;
(statearr_37627_37639[(2)] = inst_37615);

(statearr_37627_37639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (7))){
var inst_37603 = (state_37619[(11)]);
var inst_37609 = (state_37619[(2)]);
var inst_37610 = cljs.core.async.put_BANG_.call(null,out,inst_37609);
var inst_37596 = inst_37603;
var state_37619__$1 = (function (){var statearr_37628 = state_37619;
(statearr_37628[(12)] = inst_37610);

(statearr_37628[(7)] = inst_37596);

return statearr_37628;
})();
var statearr_37629_37640 = state_37619__$1;
(statearr_37629_37640[(2)] = null);

(statearr_37629_37640[(1)] = (2));


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
});})(c__34124__auto___37634,out))
;
return ((function (switch__34034__auto__,c__34124__auto___37634,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto____0 = (function (){
var statearr_37630 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37630[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto__);

(statearr_37630[(1)] = (1));

return statearr_37630;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto____1 = (function (state_37619){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_37619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e37631){if((e37631 instanceof Object)){
var ex__34038__auto__ = e37631;
var statearr_37632_37641 = state_37619;
(statearr_37632_37641[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37642 = state_37619;
state_37619 = G__37642;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto__ = function(state_37619){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto____1.call(this,state_37619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto___37634,out))
})();
var state__34126__auto__ = (function (){var statearr_37633 = f__34125__auto__.call(null);
(statearr_37633[(6)] = c__34124__auto___37634);

return statearr_37633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto___37634,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37643,opts){
var map__37644 = p__37643;
var map__37644__$1 = ((((!((map__37644 == null)))?((((map__37644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37644):map__37644);
var eval_body = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37646){var e = e37646;
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
return (function (p1__37647_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37647_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37648){
var vec__37649 = p__37648;
var k = cljs.core.nth.call(null,vec__37649,(0),null);
var v = cljs.core.nth.call(null,vec__37649,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37652){
var vec__37653 = p__37652;
var k = cljs.core.nth.call(null,vec__37653,(0),null);
var v = cljs.core.nth.call(null,vec__37653,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37659,p__37660){
var map__37661 = p__37659;
var map__37661__$1 = ((((!((map__37661 == null)))?((((map__37661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37661):map__37661);
var opts = map__37661__$1;
var before_jsload = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37662 = p__37660;
var map__37662__$1 = ((((!((map__37662 == null)))?((((map__37662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37662):map__37662);
var msg = map__37662__$1;
var files = cljs.core.get.call(null,map__37662__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37662__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37662__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34125__auto__ = (function (){var switch__34034__auto__ = ((function (c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37816){
var state_val_37817 = (state_37816[(1)]);
if((state_val_37817 === (7))){
var inst_37679 = (state_37816[(7)]);
var inst_37678 = (state_37816[(8)]);
var inst_37676 = (state_37816[(9)]);
var inst_37677 = (state_37816[(10)]);
var inst_37684 = cljs.core._nth.call(null,inst_37677,inst_37679);
var inst_37685 = figwheel.client.file_reloading.eval_body.call(null,inst_37684,opts);
var inst_37686 = (inst_37679 + (1));
var tmp37818 = inst_37678;
var tmp37819 = inst_37676;
var tmp37820 = inst_37677;
var inst_37676__$1 = tmp37819;
var inst_37677__$1 = tmp37820;
var inst_37678__$1 = tmp37818;
var inst_37679__$1 = inst_37686;
var state_37816__$1 = (function (){var statearr_37821 = state_37816;
(statearr_37821[(7)] = inst_37679__$1);

(statearr_37821[(11)] = inst_37685);

(statearr_37821[(8)] = inst_37678__$1);

(statearr_37821[(9)] = inst_37676__$1);

(statearr_37821[(10)] = inst_37677__$1);

return statearr_37821;
})();
var statearr_37822_37905 = state_37816__$1;
(statearr_37822_37905[(2)] = null);

(statearr_37822_37905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (20))){
var inst_37719 = (state_37816[(12)]);
var inst_37727 = figwheel.client.file_reloading.sort_files.call(null,inst_37719);
var state_37816__$1 = state_37816;
var statearr_37823_37906 = state_37816__$1;
(statearr_37823_37906[(2)] = inst_37727);

(statearr_37823_37906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (27))){
var state_37816__$1 = state_37816;
var statearr_37824_37907 = state_37816__$1;
(statearr_37824_37907[(2)] = null);

(statearr_37824_37907[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (1))){
var inst_37668 = (state_37816[(13)]);
var inst_37665 = before_jsload.call(null,files);
var inst_37666 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37667 = (function (){return ((function (inst_37668,inst_37665,inst_37666,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37656_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37656_SHARP_);
});
;})(inst_37668,inst_37665,inst_37666,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37668__$1 = cljs.core.filter.call(null,inst_37667,files);
var inst_37669 = cljs.core.not_empty.call(null,inst_37668__$1);
var state_37816__$1 = (function (){var statearr_37825 = state_37816;
(statearr_37825[(13)] = inst_37668__$1);

(statearr_37825[(14)] = inst_37666);

(statearr_37825[(15)] = inst_37665);

return statearr_37825;
})();
if(cljs.core.truth_(inst_37669)){
var statearr_37826_37908 = state_37816__$1;
(statearr_37826_37908[(1)] = (2));

} else {
var statearr_37827_37909 = state_37816__$1;
(statearr_37827_37909[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (24))){
var state_37816__$1 = state_37816;
var statearr_37828_37910 = state_37816__$1;
(statearr_37828_37910[(2)] = null);

(statearr_37828_37910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (39))){
var inst_37769 = (state_37816[(16)]);
var state_37816__$1 = state_37816;
var statearr_37829_37911 = state_37816__$1;
(statearr_37829_37911[(2)] = inst_37769);

(statearr_37829_37911[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (46))){
var inst_37811 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37830_37912 = state_37816__$1;
(statearr_37830_37912[(2)] = inst_37811);

(statearr_37830_37912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (4))){
var inst_37713 = (state_37816[(2)]);
var inst_37714 = cljs.core.List.EMPTY;
var inst_37715 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37714);
var inst_37716 = (function (){return ((function (inst_37713,inst_37714,inst_37715,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37657_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37657_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37657_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37657_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_37713,inst_37714,inst_37715,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37717 = cljs.core.filter.call(null,inst_37716,files);
var inst_37718 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37719 = cljs.core.concat.call(null,inst_37717,inst_37718);
var state_37816__$1 = (function (){var statearr_37831 = state_37816;
(statearr_37831[(17)] = inst_37713);

(statearr_37831[(12)] = inst_37719);

(statearr_37831[(18)] = inst_37715);

return statearr_37831;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37832_37913 = state_37816__$1;
(statearr_37832_37913[(1)] = (16));

} else {
var statearr_37833_37914 = state_37816__$1;
(statearr_37833_37914[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (15))){
var inst_37703 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37834_37915 = state_37816__$1;
(statearr_37834_37915[(2)] = inst_37703);

(statearr_37834_37915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (21))){
var inst_37729 = (state_37816[(19)]);
var inst_37729__$1 = (state_37816[(2)]);
var inst_37730 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37729__$1);
var state_37816__$1 = (function (){var statearr_37835 = state_37816;
(statearr_37835[(19)] = inst_37729__$1);

return statearr_37835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37816__$1,(22),inst_37730);
} else {
if((state_val_37817 === (31))){
var inst_37814 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37816__$1,inst_37814);
} else {
if((state_val_37817 === (32))){
var inst_37769 = (state_37816[(16)]);
var inst_37774 = inst_37769.cljs$lang$protocol_mask$partition0$;
var inst_37775 = (inst_37774 & (64));
var inst_37776 = inst_37769.cljs$core$ISeq$;
var inst_37777 = (cljs.core.PROTOCOL_SENTINEL === inst_37776);
var inst_37778 = (inst_37775) || (inst_37777);
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37778)){
var statearr_37836_37916 = state_37816__$1;
(statearr_37836_37916[(1)] = (35));

} else {
var statearr_37837_37917 = state_37816__$1;
(statearr_37837_37917[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (40))){
var inst_37791 = (state_37816[(20)]);
var inst_37790 = (state_37816[(2)]);
var inst_37791__$1 = cljs.core.get.call(null,inst_37790,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37792 = cljs.core.get.call(null,inst_37790,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37793 = cljs.core.not_empty.call(null,inst_37791__$1);
var state_37816__$1 = (function (){var statearr_37838 = state_37816;
(statearr_37838[(20)] = inst_37791__$1);

(statearr_37838[(21)] = inst_37792);

return statearr_37838;
})();
if(cljs.core.truth_(inst_37793)){
var statearr_37839_37918 = state_37816__$1;
(statearr_37839_37918[(1)] = (41));

} else {
var statearr_37840_37919 = state_37816__$1;
(statearr_37840_37919[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (33))){
var state_37816__$1 = state_37816;
var statearr_37841_37920 = state_37816__$1;
(statearr_37841_37920[(2)] = false);

(statearr_37841_37920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (13))){
var inst_37689 = (state_37816[(22)]);
var inst_37693 = cljs.core.chunk_first.call(null,inst_37689);
var inst_37694 = cljs.core.chunk_rest.call(null,inst_37689);
var inst_37695 = cljs.core.count.call(null,inst_37693);
var inst_37676 = inst_37694;
var inst_37677 = inst_37693;
var inst_37678 = inst_37695;
var inst_37679 = (0);
var state_37816__$1 = (function (){var statearr_37842 = state_37816;
(statearr_37842[(7)] = inst_37679);

(statearr_37842[(8)] = inst_37678);

(statearr_37842[(9)] = inst_37676);

(statearr_37842[(10)] = inst_37677);

return statearr_37842;
})();
var statearr_37843_37921 = state_37816__$1;
(statearr_37843_37921[(2)] = null);

(statearr_37843_37921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (22))){
var inst_37732 = (state_37816[(23)]);
var inst_37733 = (state_37816[(24)]);
var inst_37729 = (state_37816[(19)]);
var inst_37737 = (state_37816[(25)]);
var inst_37732__$1 = (state_37816[(2)]);
var inst_37733__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37732__$1);
var inst_37734 = (function (){var all_files = inst_37729;
var res_SINGLEQUOTE_ = inst_37732__$1;
var res = inst_37733__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37732,inst_37733,inst_37729,inst_37737,inst_37732__$1,inst_37733__$1,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37658_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37658_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37732,inst_37733,inst_37729,inst_37737,inst_37732__$1,inst_37733__$1,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37735 = cljs.core.filter.call(null,inst_37734,inst_37732__$1);
var inst_37736 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37737__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37736);
var inst_37738 = cljs.core.not_empty.call(null,inst_37737__$1);
var state_37816__$1 = (function (){var statearr_37844 = state_37816;
(statearr_37844[(23)] = inst_37732__$1);

(statearr_37844[(24)] = inst_37733__$1);

(statearr_37844[(26)] = inst_37735);

(statearr_37844[(25)] = inst_37737__$1);

return statearr_37844;
})();
if(cljs.core.truth_(inst_37738)){
var statearr_37845_37922 = state_37816__$1;
(statearr_37845_37922[(1)] = (23));

} else {
var statearr_37846_37923 = state_37816__$1;
(statearr_37846_37923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (36))){
var state_37816__$1 = state_37816;
var statearr_37847_37924 = state_37816__$1;
(statearr_37847_37924[(2)] = false);

(statearr_37847_37924[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (41))){
var inst_37791 = (state_37816[(20)]);
var inst_37795 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37796 = cljs.core.map.call(null,inst_37795,inst_37791);
var inst_37797 = cljs.core.pr_str.call(null,inst_37796);
var inst_37798 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37797)].join('');
var inst_37799 = figwheel.client.utils.log.call(null,inst_37798);
var state_37816__$1 = state_37816;
var statearr_37848_37925 = state_37816__$1;
(statearr_37848_37925[(2)] = inst_37799);

(statearr_37848_37925[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (43))){
var inst_37792 = (state_37816[(21)]);
var inst_37802 = (state_37816[(2)]);
var inst_37803 = cljs.core.not_empty.call(null,inst_37792);
var state_37816__$1 = (function (){var statearr_37849 = state_37816;
(statearr_37849[(27)] = inst_37802);

return statearr_37849;
})();
if(cljs.core.truth_(inst_37803)){
var statearr_37850_37926 = state_37816__$1;
(statearr_37850_37926[(1)] = (44));

} else {
var statearr_37851_37927 = state_37816__$1;
(statearr_37851_37927[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (29))){
var inst_37732 = (state_37816[(23)]);
var inst_37733 = (state_37816[(24)]);
var inst_37729 = (state_37816[(19)]);
var inst_37735 = (state_37816[(26)]);
var inst_37769 = (state_37816[(16)]);
var inst_37737 = (state_37816[(25)]);
var inst_37765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37768 = (function (){var all_files = inst_37729;
var res_SINGLEQUOTE_ = inst_37732;
var res = inst_37733;
var files_not_loaded = inst_37735;
var dependencies_that_loaded = inst_37737;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37769,inst_37737,inst_37765,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37767){
var map__37852 = p__37767;
var map__37852__$1 = ((((!((map__37852 == null)))?((((map__37852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37852):map__37852);
var namespace = cljs.core.get.call(null,map__37852__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37769,inst_37737,inst_37765,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37769__$1 = cljs.core.group_by.call(null,inst_37768,inst_37735);
var inst_37771 = (inst_37769__$1 == null);
var inst_37772 = cljs.core.not.call(null,inst_37771);
var state_37816__$1 = (function (){var statearr_37854 = state_37816;
(statearr_37854[(28)] = inst_37765);

(statearr_37854[(16)] = inst_37769__$1);

return statearr_37854;
})();
if(inst_37772){
var statearr_37855_37928 = state_37816__$1;
(statearr_37855_37928[(1)] = (32));

} else {
var statearr_37856_37929 = state_37816__$1;
(statearr_37856_37929[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (44))){
var inst_37792 = (state_37816[(21)]);
var inst_37805 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37792);
var inst_37806 = cljs.core.pr_str.call(null,inst_37805);
var inst_37807 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37806)].join('');
var inst_37808 = figwheel.client.utils.log.call(null,inst_37807);
var state_37816__$1 = state_37816;
var statearr_37857_37930 = state_37816__$1;
(statearr_37857_37930[(2)] = inst_37808);

(statearr_37857_37930[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (6))){
var inst_37710 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37858_37931 = state_37816__$1;
(statearr_37858_37931[(2)] = inst_37710);

(statearr_37858_37931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (28))){
var inst_37735 = (state_37816[(26)]);
var inst_37762 = (state_37816[(2)]);
var inst_37763 = cljs.core.not_empty.call(null,inst_37735);
var state_37816__$1 = (function (){var statearr_37859 = state_37816;
(statearr_37859[(29)] = inst_37762);

return statearr_37859;
})();
if(cljs.core.truth_(inst_37763)){
var statearr_37860_37932 = state_37816__$1;
(statearr_37860_37932[(1)] = (29));

} else {
var statearr_37861_37933 = state_37816__$1;
(statearr_37861_37933[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (25))){
var inst_37733 = (state_37816[(24)]);
var inst_37749 = (state_37816[(2)]);
var inst_37750 = cljs.core.not_empty.call(null,inst_37733);
var state_37816__$1 = (function (){var statearr_37862 = state_37816;
(statearr_37862[(30)] = inst_37749);

return statearr_37862;
})();
if(cljs.core.truth_(inst_37750)){
var statearr_37863_37934 = state_37816__$1;
(statearr_37863_37934[(1)] = (26));

} else {
var statearr_37864_37935 = state_37816__$1;
(statearr_37864_37935[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (34))){
var inst_37785 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37785)){
var statearr_37865_37936 = state_37816__$1;
(statearr_37865_37936[(1)] = (38));

} else {
var statearr_37866_37937 = state_37816__$1;
(statearr_37866_37937[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (17))){
var state_37816__$1 = state_37816;
var statearr_37867_37938 = state_37816__$1;
(statearr_37867_37938[(2)] = recompile_dependents);

(statearr_37867_37938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (3))){
var state_37816__$1 = state_37816;
var statearr_37868_37939 = state_37816__$1;
(statearr_37868_37939[(2)] = null);

(statearr_37868_37939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (12))){
var inst_37706 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37869_37940 = state_37816__$1;
(statearr_37869_37940[(2)] = inst_37706);

(statearr_37869_37940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (2))){
var inst_37668 = (state_37816[(13)]);
var inst_37675 = cljs.core.seq.call(null,inst_37668);
var inst_37676 = inst_37675;
var inst_37677 = null;
var inst_37678 = (0);
var inst_37679 = (0);
var state_37816__$1 = (function (){var statearr_37870 = state_37816;
(statearr_37870[(7)] = inst_37679);

(statearr_37870[(8)] = inst_37678);

(statearr_37870[(9)] = inst_37676);

(statearr_37870[(10)] = inst_37677);

return statearr_37870;
})();
var statearr_37871_37941 = state_37816__$1;
(statearr_37871_37941[(2)] = null);

(statearr_37871_37941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (23))){
var inst_37732 = (state_37816[(23)]);
var inst_37733 = (state_37816[(24)]);
var inst_37729 = (state_37816[(19)]);
var inst_37735 = (state_37816[(26)]);
var inst_37737 = (state_37816[(25)]);
var inst_37740 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37742 = (function (){var all_files = inst_37729;
var res_SINGLEQUOTE_ = inst_37732;
var res = inst_37733;
var files_not_loaded = inst_37735;
var dependencies_that_loaded = inst_37737;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37737,inst_37740,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37741){
var map__37872 = p__37741;
var map__37872__$1 = ((((!((map__37872 == null)))?((((map__37872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37872):map__37872);
var request_url = cljs.core.get.call(null,map__37872__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37737,inst_37740,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37743 = cljs.core.reverse.call(null,inst_37737);
var inst_37744 = cljs.core.map.call(null,inst_37742,inst_37743);
var inst_37745 = cljs.core.pr_str.call(null,inst_37744);
var inst_37746 = figwheel.client.utils.log.call(null,inst_37745);
var state_37816__$1 = (function (){var statearr_37874 = state_37816;
(statearr_37874[(31)] = inst_37740);

return statearr_37874;
})();
var statearr_37875_37942 = state_37816__$1;
(statearr_37875_37942[(2)] = inst_37746);

(statearr_37875_37942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (35))){
var state_37816__$1 = state_37816;
var statearr_37876_37943 = state_37816__$1;
(statearr_37876_37943[(2)] = true);

(statearr_37876_37943[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (19))){
var inst_37719 = (state_37816[(12)]);
var inst_37725 = figwheel.client.file_reloading.expand_files.call(null,inst_37719);
var state_37816__$1 = state_37816;
var statearr_37877_37944 = state_37816__$1;
(statearr_37877_37944[(2)] = inst_37725);

(statearr_37877_37944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (11))){
var state_37816__$1 = state_37816;
var statearr_37878_37945 = state_37816__$1;
(statearr_37878_37945[(2)] = null);

(statearr_37878_37945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (9))){
var inst_37708 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37879_37946 = state_37816__$1;
(statearr_37879_37946[(2)] = inst_37708);

(statearr_37879_37946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (5))){
var inst_37679 = (state_37816[(7)]);
var inst_37678 = (state_37816[(8)]);
var inst_37681 = (inst_37679 < inst_37678);
var inst_37682 = inst_37681;
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37682)){
var statearr_37880_37947 = state_37816__$1;
(statearr_37880_37947[(1)] = (7));

} else {
var statearr_37881_37948 = state_37816__$1;
(statearr_37881_37948[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (14))){
var inst_37689 = (state_37816[(22)]);
var inst_37698 = cljs.core.first.call(null,inst_37689);
var inst_37699 = figwheel.client.file_reloading.eval_body.call(null,inst_37698,opts);
var inst_37700 = cljs.core.next.call(null,inst_37689);
var inst_37676 = inst_37700;
var inst_37677 = null;
var inst_37678 = (0);
var inst_37679 = (0);
var state_37816__$1 = (function (){var statearr_37882 = state_37816;
(statearr_37882[(7)] = inst_37679);

(statearr_37882[(8)] = inst_37678);

(statearr_37882[(32)] = inst_37699);

(statearr_37882[(9)] = inst_37676);

(statearr_37882[(10)] = inst_37677);

return statearr_37882;
})();
var statearr_37883_37949 = state_37816__$1;
(statearr_37883_37949[(2)] = null);

(statearr_37883_37949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (45))){
var state_37816__$1 = state_37816;
var statearr_37884_37950 = state_37816__$1;
(statearr_37884_37950[(2)] = null);

(statearr_37884_37950[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (26))){
var inst_37732 = (state_37816[(23)]);
var inst_37733 = (state_37816[(24)]);
var inst_37729 = (state_37816[(19)]);
var inst_37735 = (state_37816[(26)]);
var inst_37737 = (state_37816[(25)]);
var inst_37752 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37754 = (function (){var all_files = inst_37729;
var res_SINGLEQUOTE_ = inst_37732;
var res = inst_37733;
var files_not_loaded = inst_37735;
var dependencies_that_loaded = inst_37737;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37737,inst_37752,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37753){
var map__37885 = p__37753;
var map__37885__$1 = ((((!((map__37885 == null)))?((((map__37885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37885):map__37885);
var namespace = cljs.core.get.call(null,map__37885__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37737,inst_37752,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37755 = cljs.core.map.call(null,inst_37754,inst_37733);
var inst_37756 = cljs.core.pr_str.call(null,inst_37755);
var inst_37757 = figwheel.client.utils.log.call(null,inst_37756);
var inst_37758 = (function (){var all_files = inst_37729;
var res_SINGLEQUOTE_ = inst_37732;
var res = inst_37733;
var files_not_loaded = inst_37735;
var dependencies_that_loaded = inst_37737;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37737,inst_37752,inst_37754,inst_37755,inst_37756,inst_37757,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37732,inst_37733,inst_37729,inst_37735,inst_37737,inst_37752,inst_37754,inst_37755,inst_37756,inst_37757,state_val_37817,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37759 = setTimeout(inst_37758,(10));
var state_37816__$1 = (function (){var statearr_37887 = state_37816;
(statearr_37887[(33)] = inst_37752);

(statearr_37887[(34)] = inst_37757);

return statearr_37887;
})();
var statearr_37888_37951 = state_37816__$1;
(statearr_37888_37951[(2)] = inst_37759);

(statearr_37888_37951[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (16))){
var state_37816__$1 = state_37816;
var statearr_37889_37952 = state_37816__$1;
(statearr_37889_37952[(2)] = reload_dependents);

(statearr_37889_37952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (38))){
var inst_37769 = (state_37816[(16)]);
var inst_37787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37769);
var state_37816__$1 = state_37816;
var statearr_37890_37953 = state_37816__$1;
(statearr_37890_37953[(2)] = inst_37787);

(statearr_37890_37953[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (30))){
var state_37816__$1 = state_37816;
var statearr_37891_37954 = state_37816__$1;
(statearr_37891_37954[(2)] = null);

(statearr_37891_37954[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (10))){
var inst_37689 = (state_37816[(22)]);
var inst_37691 = cljs.core.chunked_seq_QMARK_.call(null,inst_37689);
var state_37816__$1 = state_37816;
if(inst_37691){
var statearr_37892_37955 = state_37816__$1;
(statearr_37892_37955[(1)] = (13));

} else {
var statearr_37893_37956 = state_37816__$1;
(statearr_37893_37956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (18))){
var inst_37723 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37723)){
var statearr_37894_37957 = state_37816__$1;
(statearr_37894_37957[(1)] = (19));

} else {
var statearr_37895_37958 = state_37816__$1;
(statearr_37895_37958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (42))){
var state_37816__$1 = state_37816;
var statearr_37896_37959 = state_37816__$1;
(statearr_37896_37959[(2)] = null);

(statearr_37896_37959[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (37))){
var inst_37782 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37897_37960 = state_37816__$1;
(statearr_37897_37960[(2)] = inst_37782);

(statearr_37897_37960[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (8))){
var inst_37676 = (state_37816[(9)]);
var inst_37689 = (state_37816[(22)]);
var inst_37689__$1 = cljs.core.seq.call(null,inst_37676);
var state_37816__$1 = (function (){var statearr_37898 = state_37816;
(statearr_37898[(22)] = inst_37689__$1);

return statearr_37898;
})();
if(inst_37689__$1){
var statearr_37899_37961 = state_37816__$1;
(statearr_37899_37961[(1)] = (10));

} else {
var statearr_37900_37962 = state_37816__$1;
(statearr_37900_37962[(1)] = (11));

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
});})(c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34034__auto__,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto____0 = (function (){
var statearr_37901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37901[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto__);

(statearr_37901[(1)] = (1));

return statearr_37901;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto____1 = (function (state_37816){
while(true){
var ret_value__34036__auto__ = (function (){try{while(true){
var result__34037__auto__ = switch__34034__auto__.call(null,state_37816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34037__auto__;
}
break;
}
}catch (e37902){if((e37902 instanceof Object)){
var ex__34038__auto__ = e37902;
var statearr_37903_37963 = state_37816;
(statearr_37903_37963[(5)] = ex__34038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37964 = state_37816;
state_37816 = G__37964;
continue;
} else {
return ret_value__34036__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto__ = function(state_37816){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto____1.call(this,state_37816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34035__auto__;
})()
;})(switch__34034__auto__,c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34126__auto__ = (function (){var statearr_37904 = f__34125__auto__.call(null);
(statearr_37904[(6)] = c__34124__auto__);

return statearr_37904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34126__auto__);
});})(c__34124__auto__,map__37661,map__37661__$1,opts,before_jsload,on_jsload,reload_dependents,map__37662,map__37662__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34124__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37967,link){
var map__37968 = p__37967;
var map__37968__$1 = ((((!((map__37968 == null)))?((((map__37968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37968):map__37968);
var file = cljs.core.get.call(null,map__37968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__37968,map__37968__$1,file){
return (function (p1__37965_SHARP_,p2__37966_SHARP_){
if(cljs.core._EQ_.call(null,p1__37965_SHARP_,p2__37966_SHARP_)){
return p1__37965_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__37968,map__37968__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37971){
var map__37972 = p__37971;
var map__37972__$1 = ((((!((map__37972 == null)))?((((map__37972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37972):map__37972);
var match_length = cljs.core.get.call(null,map__37972__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37972__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37970_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37970_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37974_SHARP_,p2__37975_SHARP_){
return cljs.core.assoc.call(null,p1__37974_SHARP_,cljs.core.get.call(null,p2__37975_SHARP_,key),p2__37975_SHARP_);
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
var loaded_f_datas_37976 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37976);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37976);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37977,p__37978){
var map__37979 = p__37977;
var map__37979__$1 = ((((!((map__37979 == null)))?((((map__37979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37979):map__37979);
var on_cssload = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37980 = p__37978;
var map__37980__$1 = ((((!((map__37980 == null)))?((((map__37980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37980):map__37980);
var files_msg = map__37980__$1;
var files = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510085335060
