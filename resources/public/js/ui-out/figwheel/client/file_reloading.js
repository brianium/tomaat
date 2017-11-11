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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52184_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52184_SHARP_));
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
var seq__52185 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52186 = null;
var count__52187 = (0);
var i__52188 = (0);
while(true){
if((i__52188 < count__52187)){
var n = cljs.core._nth.call(null,chunk__52186,i__52188);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52189 = seq__52185;
var G__52190 = chunk__52186;
var G__52191 = count__52187;
var G__52192 = (i__52188 + (1));
seq__52185 = G__52189;
chunk__52186 = G__52190;
count__52187 = G__52191;
i__52188 = G__52192;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__52185);
if(temp__5278__auto__){
var seq__52185__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52185__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__52185__$1);
var G__52193 = cljs.core.chunk_rest.call(null,seq__52185__$1);
var G__52194 = c__31003__auto__;
var G__52195 = cljs.core.count.call(null,c__31003__auto__);
var G__52196 = (0);
seq__52185 = G__52193;
chunk__52186 = G__52194;
count__52187 = G__52195;
i__52188 = G__52196;
continue;
} else {
var n = cljs.core.first.call(null,seq__52185__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52197 = cljs.core.next.call(null,seq__52185__$1);
var G__52198 = null;
var G__52199 = (0);
var G__52200 = (0);
seq__52185 = G__52197;
chunk__52186 = G__52198;
count__52187 = G__52199;
i__52188 = G__52200;
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
return cljs.core.some.call(null,(function (p__52201){
var vec__52202 = p__52201;
var _ = cljs.core.nth.call(null,vec__52202,(0),null);
var v = cljs.core.nth.call(null,vec__52202,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__52205){
var vec__52206 = p__52205;
var k = cljs.core.nth.call(null,vec__52206,(0),null);
var v = cljs.core.nth.call(null,vec__52206,(1),null);
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

var seq__52231_52253 = cljs.core.seq.call(null,deps);
var chunk__52232_52254 = null;
var count__52233_52255 = (0);
var i__52234_52256 = (0);
while(true){
if((i__52234_52256 < count__52233_52255)){
var dep_52262 = cljs.core._nth.call(null,chunk__52232_52254,i__52234_52256);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_52262;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_52262));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_52262,(depth + (1)),state);
} else {
}

var G__52268 = seq__52231_52253;
var G__52269 = chunk__52232_52254;
var G__52270 = count__52233_52255;
var G__52271 = (i__52234_52256 + (1));
seq__52231_52253 = G__52268;
chunk__52232_52254 = G__52269;
count__52233_52255 = G__52270;
i__52234_52256 = G__52271;
continue;
} else {
var temp__5278__auto___52276 = cljs.core.seq.call(null,seq__52231_52253);
if(temp__5278__auto___52276){
var seq__52231_52278__$1 = temp__5278__auto___52276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52231_52278__$1)){
var c__31003__auto___52279 = cljs.core.chunk_first.call(null,seq__52231_52278__$1);
var G__52284 = cljs.core.chunk_rest.call(null,seq__52231_52278__$1);
var G__52285 = c__31003__auto___52279;
var G__52286 = cljs.core.count.call(null,c__31003__auto___52279);
var G__52287 = (0);
seq__52231_52253 = G__52284;
chunk__52232_52254 = G__52285;
count__52233_52255 = G__52286;
i__52234_52256 = G__52287;
continue;
} else {
var dep_52290 = cljs.core.first.call(null,seq__52231_52278__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_52290;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_52290));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_52290,(depth + (1)),state);
} else {
}

var G__52297 = cljs.core.next.call(null,seq__52231_52278__$1);
var G__52298 = null;
var G__52299 = (0);
var G__52300 = (0);
seq__52231_52253 = G__52297;
chunk__52232_52254 = G__52298;
count__52233_52255 = G__52299;
i__52234_52256 = G__52300;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52237){
var vec__52239 = p__52237;
var seq__52240 = cljs.core.seq.call(null,vec__52239);
var first__52241 = cljs.core.first.call(null,seq__52240);
var seq__52240__$1 = cljs.core.next.call(null,seq__52240);
var x = first__52241;
var xs = seq__52240__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52239,seq__52240,first__52241,seq__52240__$1,x,xs,get_deps__$1){
return (function (p1__52209_SHARP_){
return clojure.set.difference.call(null,p1__52209_SHARP_,x);
});})(vec__52239,seq__52240,first__52241,seq__52240__$1,x,xs,get_deps__$1))
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
var seq__52305 = cljs.core.seq.call(null,provides);
var chunk__52306 = null;
var count__52307 = (0);
var i__52308 = (0);
while(true){
if((i__52308 < count__52307)){
var prov = cljs.core._nth.call(null,chunk__52306,i__52308);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52309_52318 = cljs.core.seq.call(null,requires);
var chunk__52310_52319 = null;
var count__52311_52320 = (0);
var i__52312_52321 = (0);
while(true){
if((i__52312_52321 < count__52311_52320)){
var req_52322 = cljs.core._nth.call(null,chunk__52310_52319,i__52312_52321);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52322,prov);

var G__52323 = seq__52309_52318;
var G__52324 = chunk__52310_52319;
var G__52325 = count__52311_52320;
var G__52326 = (i__52312_52321 + (1));
seq__52309_52318 = G__52323;
chunk__52310_52319 = G__52324;
count__52311_52320 = G__52325;
i__52312_52321 = G__52326;
continue;
} else {
var temp__5278__auto___52327 = cljs.core.seq.call(null,seq__52309_52318);
if(temp__5278__auto___52327){
var seq__52309_52328__$1 = temp__5278__auto___52327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52309_52328__$1)){
var c__31003__auto___52329 = cljs.core.chunk_first.call(null,seq__52309_52328__$1);
var G__52331 = cljs.core.chunk_rest.call(null,seq__52309_52328__$1);
var G__52332 = c__31003__auto___52329;
var G__52333 = cljs.core.count.call(null,c__31003__auto___52329);
var G__52334 = (0);
seq__52309_52318 = G__52331;
chunk__52310_52319 = G__52332;
count__52311_52320 = G__52333;
i__52312_52321 = G__52334;
continue;
} else {
var req_52337 = cljs.core.first.call(null,seq__52309_52328__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52337,prov);

var G__52338 = cljs.core.next.call(null,seq__52309_52328__$1);
var G__52339 = null;
var G__52340 = (0);
var G__52341 = (0);
seq__52309_52318 = G__52338;
chunk__52310_52319 = G__52339;
count__52311_52320 = G__52340;
i__52312_52321 = G__52341;
continue;
}
} else {
}
}
break;
}

var G__52346 = seq__52305;
var G__52347 = chunk__52306;
var G__52348 = count__52307;
var G__52349 = (i__52308 + (1));
seq__52305 = G__52346;
chunk__52306 = G__52347;
count__52307 = G__52348;
i__52308 = G__52349;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__52305);
if(temp__5278__auto__){
var seq__52305__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52305__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__52305__$1);
var G__52350 = cljs.core.chunk_rest.call(null,seq__52305__$1);
var G__52351 = c__31003__auto__;
var G__52352 = cljs.core.count.call(null,c__31003__auto__);
var G__52353 = (0);
seq__52305 = G__52350;
chunk__52306 = G__52351;
count__52307 = G__52352;
i__52308 = G__52353;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52305__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52313_52354 = cljs.core.seq.call(null,requires);
var chunk__52314_52355 = null;
var count__52315_52356 = (0);
var i__52316_52357 = (0);
while(true){
if((i__52316_52357 < count__52315_52356)){
var req_52358 = cljs.core._nth.call(null,chunk__52314_52355,i__52316_52357);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52358,prov);

var G__52361 = seq__52313_52354;
var G__52362 = chunk__52314_52355;
var G__52363 = count__52315_52356;
var G__52364 = (i__52316_52357 + (1));
seq__52313_52354 = G__52361;
chunk__52314_52355 = G__52362;
count__52315_52356 = G__52363;
i__52316_52357 = G__52364;
continue;
} else {
var temp__5278__auto___52366__$1 = cljs.core.seq.call(null,seq__52313_52354);
if(temp__5278__auto___52366__$1){
var seq__52313_52367__$1 = temp__5278__auto___52366__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52313_52367__$1)){
var c__31003__auto___52368 = cljs.core.chunk_first.call(null,seq__52313_52367__$1);
var G__52369 = cljs.core.chunk_rest.call(null,seq__52313_52367__$1);
var G__52370 = c__31003__auto___52368;
var G__52371 = cljs.core.count.call(null,c__31003__auto___52368);
var G__52372 = (0);
seq__52313_52354 = G__52369;
chunk__52314_52355 = G__52370;
count__52315_52356 = G__52371;
i__52316_52357 = G__52372;
continue;
} else {
var req_52373 = cljs.core.first.call(null,seq__52313_52367__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52373,prov);

var G__52374 = cljs.core.next.call(null,seq__52313_52367__$1);
var G__52375 = null;
var G__52376 = (0);
var G__52377 = (0);
seq__52313_52354 = G__52374;
chunk__52314_52355 = G__52375;
count__52315_52356 = G__52376;
i__52316_52357 = G__52377;
continue;
}
} else {
}
}
break;
}

var G__52378 = cljs.core.next.call(null,seq__52305__$1);
var G__52379 = null;
var G__52380 = (0);
var G__52381 = (0);
seq__52305 = G__52378;
chunk__52306 = G__52379;
count__52307 = G__52380;
i__52308 = G__52381;
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
var seq__52385_52389 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52386_52390 = null;
var count__52387_52391 = (0);
var i__52388_52392 = (0);
while(true){
if((i__52388_52392 < count__52387_52391)){
var ns_52400 = cljs.core._nth.call(null,chunk__52386_52390,i__52388_52392);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52400);

var G__52411 = seq__52385_52389;
var G__52412 = chunk__52386_52390;
var G__52413 = count__52387_52391;
var G__52414 = (i__52388_52392 + (1));
seq__52385_52389 = G__52411;
chunk__52386_52390 = G__52412;
count__52387_52391 = G__52413;
i__52388_52392 = G__52414;
continue;
} else {
var temp__5278__auto___52415 = cljs.core.seq.call(null,seq__52385_52389);
if(temp__5278__auto___52415){
var seq__52385_52416__$1 = temp__5278__auto___52415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52385_52416__$1)){
var c__31003__auto___52417 = cljs.core.chunk_first.call(null,seq__52385_52416__$1);
var G__52418 = cljs.core.chunk_rest.call(null,seq__52385_52416__$1);
var G__52419 = c__31003__auto___52417;
var G__52420 = cljs.core.count.call(null,c__31003__auto___52417);
var G__52421 = (0);
seq__52385_52389 = G__52418;
chunk__52386_52390 = G__52419;
count__52387_52391 = G__52420;
i__52388_52392 = G__52421;
continue;
} else {
var ns_52423 = cljs.core.first.call(null,seq__52385_52416__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52423);

var G__52424 = cljs.core.next.call(null,seq__52385_52416__$1);
var G__52425 = null;
var G__52426 = (0);
var G__52427 = (0);
seq__52385_52389 = G__52424;
chunk__52386_52390 = G__52425;
count__52387_52391 = G__52426;
i__52388_52392 = G__52427;
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
var G__52433__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52434__i = 0, G__52434__a = new Array(arguments.length -  0);
while (G__52434__i < G__52434__a.length) {G__52434__a[G__52434__i] = arguments[G__52434__i + 0]; ++G__52434__i;}
  args = new cljs.core.IndexedSeq(G__52434__a,0,null);
} 
return G__52433__delegate.call(this,args);};
G__52433.cljs$lang$maxFixedArity = 0;
G__52433.cljs$lang$applyTo = (function (arglist__52435){
var args = cljs.core.seq(arglist__52435);
return G__52433__delegate(args);
});
G__52433.cljs$core$IFn$_invoke$arity$variadic = G__52433__delegate;
return G__52433;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__52436_SHARP_,p2__52437_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52436_SHARP_)].join('')),p2__52437_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__52438_SHARP_,p2__52439_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52438_SHARP_)].join(''),p2__52439_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__52441 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__52441.addCallback(((function (G__52441){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__52441))
);

G__52441.addErrback(((function (G__52441){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__52441))
);

return G__52441;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e52445){if((e52445 instanceof Error)){
var e = e52445;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52445;

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
}catch (e52448){if((e52448 instanceof Error)){
var e = e52448;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52448;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52451 = cljs.core._EQ_;
var expr__52452 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52451.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52452))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__52451.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52452))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__52451.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__52452))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__52451,expr__52452){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52451,expr__52452))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52454,callback){
var map__52455 = p__52454;
var map__52455__$1 = ((((!((map__52455 == null)))?((((map__52455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52455):map__52455);
var file_msg = map__52455__$1;
var request_url = cljs.core.get.call(null,map__52455__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__52455,map__52455__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52455,map__52455__$1,file_msg,request_url))
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
return (function (state_52509){
var state_val_52510 = (state_52509[(1)]);
if((state_val_52510 === (7))){
var inst_52505 = (state_52509[(2)]);
var state_52509__$1 = state_52509;
var statearr_52511_52538 = state_52509__$1;
(statearr_52511_52538[(2)] = inst_52505);

(statearr_52511_52538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (1))){
var state_52509__$1 = state_52509;
var statearr_52512_52541 = state_52509__$1;
(statearr_52512_52541[(2)] = null);

(statearr_52512_52541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (4))){
var inst_52470 = (state_52509[(7)]);
var inst_52470__$1 = (state_52509[(2)]);
var state_52509__$1 = (function (){var statearr_52513 = state_52509;
(statearr_52513[(7)] = inst_52470__$1);

return statearr_52513;
})();
if(cljs.core.truth_(inst_52470__$1)){
var statearr_52514_52543 = state_52509__$1;
(statearr_52514_52543[(1)] = (5));

} else {
var statearr_52515_52544 = state_52509__$1;
(statearr_52515_52544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (15))){
var inst_52490 = (state_52509[(8)]);
var inst_52487 = (state_52509[(9)]);
var inst_52492 = inst_52490.call(null,inst_52487);
var state_52509__$1 = state_52509;
var statearr_52516_52545 = state_52509__$1;
(statearr_52516_52545[(2)] = inst_52492);

(statearr_52516_52545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (13))){
var inst_52499 = (state_52509[(2)]);
var state_52509__$1 = state_52509;
var statearr_52517_52546 = state_52509__$1;
(statearr_52517_52546[(2)] = inst_52499);

(statearr_52517_52546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (6))){
var state_52509__$1 = state_52509;
var statearr_52518_52548 = state_52509__$1;
(statearr_52518_52548[(2)] = null);

(statearr_52518_52548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (17))){
var inst_52496 = (state_52509[(2)]);
var state_52509__$1 = state_52509;
var statearr_52519_52551 = state_52509__$1;
(statearr_52519_52551[(2)] = inst_52496);

(statearr_52519_52551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (3))){
var inst_52507 = (state_52509[(2)]);
var state_52509__$1 = state_52509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52509__$1,inst_52507);
} else {
if((state_val_52510 === (12))){
var state_52509__$1 = state_52509;
var statearr_52520_52552 = state_52509__$1;
(statearr_52520_52552[(2)] = null);

(statearr_52520_52552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (2))){
var state_52509__$1 = state_52509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52509__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52510 === (11))){
var inst_52476 = (state_52509[(10)]);
var inst_52485 = figwheel.client.file_reloading.blocking_load.call(null,inst_52476);
var state_52509__$1 = state_52509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52509__$1,(14),inst_52485);
} else {
if((state_val_52510 === (9))){
var inst_52476 = (state_52509[(10)]);
var state_52509__$1 = state_52509;
if(cljs.core.truth_(inst_52476)){
var statearr_52521_52553 = state_52509__$1;
(statearr_52521_52553[(1)] = (11));

} else {
var statearr_52522_52554 = state_52509__$1;
(statearr_52522_52554[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (5))){
var inst_52470 = (state_52509[(7)]);
var inst_52478 = (state_52509[(11)]);
var inst_52476 = cljs.core.nth.call(null,inst_52470,(0),null);
var inst_52478__$1 = cljs.core.nth.call(null,inst_52470,(1),null);
var state_52509__$1 = (function (){var statearr_52523 = state_52509;
(statearr_52523[(11)] = inst_52478__$1);

(statearr_52523[(10)] = inst_52476);

return statearr_52523;
})();
if(cljs.core.truth_(inst_52478__$1)){
var statearr_52524_52555 = state_52509__$1;
(statearr_52524_52555[(1)] = (8));

} else {
var statearr_52525_52557 = state_52509__$1;
(statearr_52525_52557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (14))){
var inst_52490 = (state_52509[(8)]);
var inst_52476 = (state_52509[(10)]);
var inst_52487 = (state_52509[(2)]);
var inst_52488 = console.log("Loading!",inst_52476);
var inst_52489 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52490__$1 = cljs.core.get.call(null,inst_52489,inst_52476);
var state_52509__$1 = (function (){var statearr_52526 = state_52509;
(statearr_52526[(8)] = inst_52490__$1);

(statearr_52526[(12)] = inst_52488);

(statearr_52526[(9)] = inst_52487);

return statearr_52526;
})();
if(cljs.core.truth_(inst_52490__$1)){
var statearr_52527_52561 = state_52509__$1;
(statearr_52527_52561[(1)] = (15));

} else {
var statearr_52528_52562 = state_52509__$1;
(statearr_52528_52562[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (16))){
var inst_52487 = (state_52509[(9)]);
var inst_52494 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52487);
var state_52509__$1 = state_52509;
var statearr_52529_52563 = state_52509__$1;
(statearr_52529_52563[(2)] = inst_52494);

(statearr_52529_52563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (10))){
var inst_52501 = (state_52509[(2)]);
var state_52509__$1 = (function (){var statearr_52530 = state_52509;
(statearr_52530[(13)] = inst_52501);

return statearr_52530;
})();
var statearr_52531_52564 = state_52509__$1;
(statearr_52531_52564[(2)] = null);

(statearr_52531_52564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52510 === (8))){
var inst_52478 = (state_52509[(11)]);
var inst_52480 = console.log("Evaling!",inst_52478);
var inst_52481 = eval(inst_52478);
var state_52509__$1 = (function (){var statearr_52532 = state_52509;
(statearr_52532[(14)] = inst_52480);

return statearr_52532;
})();
var statearr_52533_52565 = state_52509__$1;
(statearr_52533_52565[(2)] = inst_52481);

(statearr_52533_52565[(1)] = (10));


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
var statearr_52534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52534[(0)] = figwheel$client$file_reloading$state_machine__33608__auto__);

(statearr_52534[(1)] = (1));

return statearr_52534;
});
var figwheel$client$file_reloading$state_machine__33608__auto____1 = (function (state_52509){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_52509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e52535){if((e52535 instanceof Object)){
var ex__33611__auto__ = e52535;
var statearr_52536_52566 = state_52509;
(statearr_52536_52566[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52567 = state_52509;
state_52509 = G__52567;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33608__auto__ = function(state_52509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33608__auto____1.call(this,state_52509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33608__auto____0;
figwheel$client$file_reloading$state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33608__auto____1;
return figwheel$client$file_reloading$state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__))
})();
var state__33954__auto__ = (function (){var statearr_52537 = f__33953__auto__.call(null);
(statearr_52537[(6)] = c__33952__auto__);

return statearr_52537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__))
);

return c__33952__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__52570 = arguments.length;
switch (G__52570) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52573,callback){
var map__52574 = p__52573;
var map__52574__$1 = ((((!((map__52574 == null)))?((((map__52574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52574):map__52574);
var file_msg = map__52574__$1;
var namespace = cljs.core.get.call(null,map__52574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52574,map__52574__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52574,map__52574__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__52580){
var map__52581 = p__52580;
var map__52581__$1 = ((((!((map__52581 == null)))?((((map__52581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52581):map__52581);
var file_msg = map__52581__$1;
var namespace = cljs.core.get.call(null,map__52581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52586){
var map__52587 = p__52586;
var map__52587__$1 = ((((!((map__52587 == null)))?((((map__52587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52587):map__52587);
var file_msg = map__52587__$1;
var namespace = cljs.core.get.call(null,map__52587__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52591,callback){
var map__52592 = p__52591;
var map__52592__$1 = ((((!((map__52592 == null)))?((((map__52592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52592):map__52592);
var file_msg = map__52592__$1;
var request_url = cljs.core.get.call(null,map__52592__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33952__auto___52668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto___52668,out){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto___52668,out){
return (function (state_52649){
var state_val_52650 = (state_52649[(1)]);
if((state_val_52650 === (1))){
var inst_52622 = cljs.core.seq.call(null,files);
var inst_52623 = cljs.core.first.call(null,inst_52622);
var inst_52624 = cljs.core.next.call(null,inst_52622);
var inst_52625 = files;
var state_52649__$1 = (function (){var statearr_52654 = state_52649;
(statearr_52654[(7)] = inst_52624);

(statearr_52654[(8)] = inst_52625);

(statearr_52654[(9)] = inst_52623);

return statearr_52654;
})();
var statearr_52655_52669 = state_52649__$1;
(statearr_52655_52669[(2)] = null);

(statearr_52655_52669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (2))){
var inst_52625 = (state_52649[(8)]);
var inst_52631 = (state_52649[(10)]);
var inst_52630 = cljs.core.seq.call(null,inst_52625);
var inst_52631__$1 = cljs.core.first.call(null,inst_52630);
var inst_52632 = cljs.core.next.call(null,inst_52630);
var inst_52633 = (inst_52631__$1 == null);
var inst_52634 = cljs.core.not.call(null,inst_52633);
var state_52649__$1 = (function (){var statearr_52657 = state_52649;
(statearr_52657[(11)] = inst_52632);

(statearr_52657[(10)] = inst_52631__$1);

return statearr_52657;
})();
if(inst_52634){
var statearr_52658_52672 = state_52649__$1;
(statearr_52658_52672[(1)] = (4));

} else {
var statearr_52659_52673 = state_52649__$1;
(statearr_52659_52673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (3))){
var inst_52647 = (state_52649[(2)]);
var state_52649__$1 = state_52649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52649__$1,inst_52647);
} else {
if((state_val_52650 === (4))){
var inst_52631 = (state_52649[(10)]);
var inst_52637 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52631);
var state_52649__$1 = state_52649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52649__$1,(7),inst_52637);
} else {
if((state_val_52650 === (5))){
var inst_52643 = cljs.core.async.close_BANG_.call(null,out);
var state_52649__$1 = state_52649;
var statearr_52660_52674 = state_52649__$1;
(statearr_52660_52674[(2)] = inst_52643);

(statearr_52660_52674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (6))){
var inst_52645 = (state_52649[(2)]);
var state_52649__$1 = state_52649;
var statearr_52661_52687 = state_52649__$1;
(statearr_52661_52687[(2)] = inst_52645);

(statearr_52661_52687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (7))){
var inst_52632 = (state_52649[(11)]);
var inst_52639 = (state_52649[(2)]);
var inst_52640 = cljs.core.async.put_BANG_.call(null,out,inst_52639);
var inst_52625 = inst_52632;
var state_52649__$1 = (function (){var statearr_52662 = state_52649;
(statearr_52662[(8)] = inst_52625);

(statearr_52662[(12)] = inst_52640);

return statearr_52662;
})();
var statearr_52663_52690 = state_52649__$1;
(statearr_52663_52690[(2)] = null);

(statearr_52663_52690[(1)] = (2));


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
});})(c__33952__auto___52668,out))
;
return ((function (switch__33607__auto__,c__33952__auto___52668,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0 = (function (){
var statearr_52664 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52664[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__);

(statearr_52664[(1)] = (1));

return statearr_52664;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1 = (function (state_52649){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_52649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e52665){if((e52665 instanceof Object)){
var ex__33611__auto__ = e52665;
var statearr_52666_52695 = state_52649;
(statearr_52666_52695[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52696 = state_52649;
state_52649 = G__52696;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__ = function(state_52649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1.call(this,state_52649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto___52668,out))
})();
var state__33954__auto__ = (function (){var statearr_52667 = f__33953__auto__.call(null);
(statearr_52667[(6)] = c__33952__auto___52668);

return statearr_52667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto___52668,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52697,opts){
var map__52698 = p__52697;
var map__52698__$1 = ((((!((map__52698 == null)))?((((map__52698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52698):map__52698);
var eval_body = cljs.core.get.call(null,map__52698__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e52700){var e = e52700;
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
return (function (p1__52703_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52703_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__52704){
var vec__52705 = p__52704;
var k = cljs.core.nth.call(null,vec__52705,(0),null);
var v = cljs.core.nth.call(null,vec__52705,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52708){
var vec__52709 = p__52708;
var k = cljs.core.nth.call(null,vec__52709,(0),null);
var v = cljs.core.nth.call(null,vec__52709,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52715,p__52716){
var map__52717 = p__52715;
var map__52717__$1 = ((((!((map__52717 == null)))?((((map__52717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52717):map__52717);
var opts = map__52717__$1;
var before_jsload = cljs.core.get.call(null,map__52717__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52717__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52717__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52718 = p__52716;
var map__52718__$1 = ((((!((map__52718 == null)))?((((map__52718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52718):map__52718);
var msg = map__52718__$1;
var files = cljs.core.get.call(null,map__52718__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52718__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52718__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33953__auto__ = (function (){var switch__33607__auto__ = ((function (c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52872){
var state_val_52873 = (state_52872[(1)]);
if((state_val_52873 === (7))){
var inst_52732 = (state_52872[(7)]);
var inst_52733 = (state_52872[(8)]);
var inst_52734 = (state_52872[(9)]);
var inst_52735 = (state_52872[(10)]);
var inst_52740 = cljs.core._nth.call(null,inst_52733,inst_52735);
var inst_52741 = figwheel.client.file_reloading.eval_body.call(null,inst_52740,opts);
var inst_52742 = (inst_52735 + (1));
var tmp52874 = inst_52732;
var tmp52875 = inst_52733;
var tmp52876 = inst_52734;
var inst_52732__$1 = tmp52874;
var inst_52733__$1 = tmp52875;
var inst_52734__$1 = tmp52876;
var inst_52735__$1 = inst_52742;
var state_52872__$1 = (function (){var statearr_52877 = state_52872;
(statearr_52877[(7)] = inst_52732__$1);

(statearr_52877[(11)] = inst_52741);

(statearr_52877[(8)] = inst_52733__$1);

(statearr_52877[(9)] = inst_52734__$1);

(statearr_52877[(10)] = inst_52735__$1);

return statearr_52877;
})();
var statearr_52878_52961 = state_52872__$1;
(statearr_52878_52961[(2)] = null);

(statearr_52878_52961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (20))){
var inst_52775 = (state_52872[(12)]);
var inst_52783 = figwheel.client.file_reloading.sort_files.call(null,inst_52775);
var state_52872__$1 = state_52872;
var statearr_52879_52962 = state_52872__$1;
(statearr_52879_52962[(2)] = inst_52783);

(statearr_52879_52962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (27))){
var state_52872__$1 = state_52872;
var statearr_52880_52963 = state_52872__$1;
(statearr_52880_52963[(2)] = null);

(statearr_52880_52963[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (1))){
var inst_52724 = (state_52872[(13)]);
var inst_52721 = before_jsload.call(null,files);
var inst_52722 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52723 = (function (){return ((function (inst_52724,inst_52721,inst_52722,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52712_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52712_SHARP_);
});
;})(inst_52724,inst_52721,inst_52722,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52724__$1 = cljs.core.filter.call(null,inst_52723,files);
var inst_52725 = cljs.core.not_empty.call(null,inst_52724__$1);
var state_52872__$1 = (function (){var statearr_52881 = state_52872;
(statearr_52881[(14)] = inst_52721);

(statearr_52881[(15)] = inst_52722);

(statearr_52881[(13)] = inst_52724__$1);

return statearr_52881;
})();
if(cljs.core.truth_(inst_52725)){
var statearr_52882_52964 = state_52872__$1;
(statearr_52882_52964[(1)] = (2));

} else {
var statearr_52883_52965 = state_52872__$1;
(statearr_52883_52965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (24))){
var state_52872__$1 = state_52872;
var statearr_52884_52966 = state_52872__$1;
(statearr_52884_52966[(2)] = null);

(statearr_52884_52966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (39))){
var inst_52825 = (state_52872[(16)]);
var state_52872__$1 = state_52872;
var statearr_52885_52967 = state_52872__$1;
(statearr_52885_52967[(2)] = inst_52825);

(statearr_52885_52967[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (46))){
var inst_52867 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52886_52968 = state_52872__$1;
(statearr_52886_52968[(2)] = inst_52867);

(statearr_52886_52968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (4))){
var inst_52769 = (state_52872[(2)]);
var inst_52770 = cljs.core.List.EMPTY;
var inst_52771 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52770);
var inst_52772 = (function (){return ((function (inst_52769,inst_52770,inst_52771,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52713_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52713_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52713_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__52713_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_52769,inst_52770,inst_52771,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52773 = cljs.core.filter.call(null,inst_52772,files);
var inst_52774 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52775 = cljs.core.concat.call(null,inst_52773,inst_52774);
var state_52872__$1 = (function (){var statearr_52887 = state_52872;
(statearr_52887[(12)] = inst_52775);

(statearr_52887[(17)] = inst_52769);

(statearr_52887[(18)] = inst_52771);

return statearr_52887;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52888_52969 = state_52872__$1;
(statearr_52888_52969[(1)] = (16));

} else {
var statearr_52889_52970 = state_52872__$1;
(statearr_52889_52970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (15))){
var inst_52759 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52890_52971 = state_52872__$1;
(statearr_52890_52971[(2)] = inst_52759);

(statearr_52890_52971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (21))){
var inst_52785 = (state_52872[(19)]);
var inst_52785__$1 = (state_52872[(2)]);
var inst_52786 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52785__$1);
var state_52872__$1 = (function (){var statearr_52891 = state_52872;
(statearr_52891[(19)] = inst_52785__$1);

return statearr_52891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52872__$1,(22),inst_52786);
} else {
if((state_val_52873 === (31))){
var inst_52870 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52872__$1,inst_52870);
} else {
if((state_val_52873 === (32))){
var inst_52825 = (state_52872[(16)]);
var inst_52830 = inst_52825.cljs$lang$protocol_mask$partition0$;
var inst_52831 = (inst_52830 & (64));
var inst_52832 = inst_52825.cljs$core$ISeq$;
var inst_52833 = (cljs.core.PROTOCOL_SENTINEL === inst_52832);
var inst_52834 = (inst_52831) || (inst_52833);
var state_52872__$1 = state_52872;
if(cljs.core.truth_(inst_52834)){
var statearr_52892_52972 = state_52872__$1;
(statearr_52892_52972[(1)] = (35));

} else {
var statearr_52893_52973 = state_52872__$1;
(statearr_52893_52973[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (40))){
var inst_52847 = (state_52872[(20)]);
var inst_52846 = (state_52872[(2)]);
var inst_52847__$1 = cljs.core.get.call(null,inst_52846,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52848 = cljs.core.get.call(null,inst_52846,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52849 = cljs.core.not_empty.call(null,inst_52847__$1);
var state_52872__$1 = (function (){var statearr_52894 = state_52872;
(statearr_52894[(21)] = inst_52848);

(statearr_52894[(20)] = inst_52847__$1);

return statearr_52894;
})();
if(cljs.core.truth_(inst_52849)){
var statearr_52895_52974 = state_52872__$1;
(statearr_52895_52974[(1)] = (41));

} else {
var statearr_52896_52975 = state_52872__$1;
(statearr_52896_52975[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (33))){
var state_52872__$1 = state_52872;
var statearr_52897_52976 = state_52872__$1;
(statearr_52897_52976[(2)] = false);

(statearr_52897_52976[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (13))){
var inst_52745 = (state_52872[(22)]);
var inst_52749 = cljs.core.chunk_first.call(null,inst_52745);
var inst_52750 = cljs.core.chunk_rest.call(null,inst_52745);
var inst_52751 = cljs.core.count.call(null,inst_52749);
var inst_52732 = inst_52750;
var inst_52733 = inst_52749;
var inst_52734 = inst_52751;
var inst_52735 = (0);
var state_52872__$1 = (function (){var statearr_52898 = state_52872;
(statearr_52898[(7)] = inst_52732);

(statearr_52898[(8)] = inst_52733);

(statearr_52898[(9)] = inst_52734);

(statearr_52898[(10)] = inst_52735);

return statearr_52898;
})();
var statearr_52899_52977 = state_52872__$1;
(statearr_52899_52977[(2)] = null);

(statearr_52899_52977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (22))){
var inst_52789 = (state_52872[(23)]);
var inst_52788 = (state_52872[(24)]);
var inst_52793 = (state_52872[(25)]);
var inst_52785 = (state_52872[(19)]);
var inst_52788__$1 = (state_52872[(2)]);
var inst_52789__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52788__$1);
var inst_52790 = (function (){var all_files = inst_52785;
var res_SINGLEQUOTE_ = inst_52788__$1;
var res = inst_52789__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52789,inst_52788,inst_52793,inst_52785,inst_52788__$1,inst_52789__$1,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52714_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52714_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52789,inst_52788,inst_52793,inst_52785,inst_52788__$1,inst_52789__$1,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52791 = cljs.core.filter.call(null,inst_52790,inst_52788__$1);
var inst_52792 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52793__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52792);
var inst_52794 = cljs.core.not_empty.call(null,inst_52793__$1);
var state_52872__$1 = (function (){var statearr_52900 = state_52872;
(statearr_52900[(23)] = inst_52789__$1);

(statearr_52900[(26)] = inst_52791);

(statearr_52900[(24)] = inst_52788__$1);

(statearr_52900[(25)] = inst_52793__$1);

return statearr_52900;
})();
if(cljs.core.truth_(inst_52794)){
var statearr_52901_52978 = state_52872__$1;
(statearr_52901_52978[(1)] = (23));

} else {
var statearr_52902_52979 = state_52872__$1;
(statearr_52902_52979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (36))){
var state_52872__$1 = state_52872;
var statearr_52903_52980 = state_52872__$1;
(statearr_52903_52980[(2)] = false);

(statearr_52903_52980[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (41))){
var inst_52847 = (state_52872[(20)]);
var inst_52851 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52852 = cljs.core.map.call(null,inst_52851,inst_52847);
var inst_52853 = cljs.core.pr_str.call(null,inst_52852);
var inst_52854 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52853)].join('');
var inst_52855 = figwheel.client.utils.log.call(null,inst_52854);
var state_52872__$1 = state_52872;
var statearr_52904_52981 = state_52872__$1;
(statearr_52904_52981[(2)] = inst_52855);

(statearr_52904_52981[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (43))){
var inst_52848 = (state_52872[(21)]);
var inst_52858 = (state_52872[(2)]);
var inst_52859 = cljs.core.not_empty.call(null,inst_52848);
var state_52872__$1 = (function (){var statearr_52905 = state_52872;
(statearr_52905[(27)] = inst_52858);

return statearr_52905;
})();
if(cljs.core.truth_(inst_52859)){
var statearr_52906_52982 = state_52872__$1;
(statearr_52906_52982[(1)] = (44));

} else {
var statearr_52907_52983 = state_52872__$1;
(statearr_52907_52983[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (29))){
var inst_52789 = (state_52872[(23)]);
var inst_52791 = (state_52872[(26)]);
var inst_52788 = (state_52872[(24)]);
var inst_52825 = (state_52872[(16)]);
var inst_52793 = (state_52872[(25)]);
var inst_52785 = (state_52872[(19)]);
var inst_52821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52824 = (function (){var all_files = inst_52785;
var res_SINGLEQUOTE_ = inst_52788;
var res = inst_52789;
var files_not_loaded = inst_52791;
var dependencies_that_loaded = inst_52793;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52825,inst_52793,inst_52785,inst_52821,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52823){
var map__52908 = p__52823;
var map__52908__$1 = ((((!((map__52908 == null)))?((((map__52908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52908):map__52908);
var namespace = cljs.core.get.call(null,map__52908__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52825,inst_52793,inst_52785,inst_52821,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52825__$1 = cljs.core.group_by.call(null,inst_52824,inst_52791);
var inst_52827 = (inst_52825__$1 == null);
var inst_52828 = cljs.core.not.call(null,inst_52827);
var state_52872__$1 = (function (){var statearr_52910 = state_52872;
(statearr_52910[(28)] = inst_52821);

(statearr_52910[(16)] = inst_52825__$1);

return statearr_52910;
})();
if(inst_52828){
var statearr_52911_52984 = state_52872__$1;
(statearr_52911_52984[(1)] = (32));

} else {
var statearr_52912_52985 = state_52872__$1;
(statearr_52912_52985[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (44))){
var inst_52848 = (state_52872[(21)]);
var inst_52861 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52848);
var inst_52862 = cljs.core.pr_str.call(null,inst_52861);
var inst_52863 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52862)].join('');
var inst_52864 = figwheel.client.utils.log.call(null,inst_52863);
var state_52872__$1 = state_52872;
var statearr_52913_52986 = state_52872__$1;
(statearr_52913_52986[(2)] = inst_52864);

(statearr_52913_52986[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (6))){
var inst_52766 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52914_52987 = state_52872__$1;
(statearr_52914_52987[(2)] = inst_52766);

(statearr_52914_52987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (28))){
var inst_52791 = (state_52872[(26)]);
var inst_52818 = (state_52872[(2)]);
var inst_52819 = cljs.core.not_empty.call(null,inst_52791);
var state_52872__$1 = (function (){var statearr_52915 = state_52872;
(statearr_52915[(29)] = inst_52818);

return statearr_52915;
})();
if(cljs.core.truth_(inst_52819)){
var statearr_52916_52988 = state_52872__$1;
(statearr_52916_52988[(1)] = (29));

} else {
var statearr_52917_52989 = state_52872__$1;
(statearr_52917_52989[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (25))){
var inst_52789 = (state_52872[(23)]);
var inst_52805 = (state_52872[(2)]);
var inst_52806 = cljs.core.not_empty.call(null,inst_52789);
var state_52872__$1 = (function (){var statearr_52918 = state_52872;
(statearr_52918[(30)] = inst_52805);

return statearr_52918;
})();
if(cljs.core.truth_(inst_52806)){
var statearr_52919_52990 = state_52872__$1;
(statearr_52919_52990[(1)] = (26));

} else {
var statearr_52920_52991 = state_52872__$1;
(statearr_52920_52991[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (34))){
var inst_52841 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
if(cljs.core.truth_(inst_52841)){
var statearr_52921_52992 = state_52872__$1;
(statearr_52921_52992[(1)] = (38));

} else {
var statearr_52922_52993 = state_52872__$1;
(statearr_52922_52993[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (17))){
var state_52872__$1 = state_52872;
var statearr_52923_52994 = state_52872__$1;
(statearr_52923_52994[(2)] = recompile_dependents);

(statearr_52923_52994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (3))){
var state_52872__$1 = state_52872;
var statearr_52924_52995 = state_52872__$1;
(statearr_52924_52995[(2)] = null);

(statearr_52924_52995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (12))){
var inst_52762 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52925_52996 = state_52872__$1;
(statearr_52925_52996[(2)] = inst_52762);

(statearr_52925_52996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (2))){
var inst_52724 = (state_52872[(13)]);
var inst_52731 = cljs.core.seq.call(null,inst_52724);
var inst_52732 = inst_52731;
var inst_52733 = null;
var inst_52734 = (0);
var inst_52735 = (0);
var state_52872__$1 = (function (){var statearr_52926 = state_52872;
(statearr_52926[(7)] = inst_52732);

(statearr_52926[(8)] = inst_52733);

(statearr_52926[(9)] = inst_52734);

(statearr_52926[(10)] = inst_52735);

return statearr_52926;
})();
var statearr_52927_52997 = state_52872__$1;
(statearr_52927_52997[(2)] = null);

(statearr_52927_52997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (23))){
var inst_52789 = (state_52872[(23)]);
var inst_52791 = (state_52872[(26)]);
var inst_52788 = (state_52872[(24)]);
var inst_52793 = (state_52872[(25)]);
var inst_52785 = (state_52872[(19)]);
var inst_52796 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52798 = (function (){var all_files = inst_52785;
var res_SINGLEQUOTE_ = inst_52788;
var res = inst_52789;
var files_not_loaded = inst_52791;
var dependencies_that_loaded = inst_52793;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52793,inst_52785,inst_52796,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52797){
var map__52928 = p__52797;
var map__52928__$1 = ((((!((map__52928 == null)))?((((map__52928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52928):map__52928);
var request_url = cljs.core.get.call(null,map__52928__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52793,inst_52785,inst_52796,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52799 = cljs.core.reverse.call(null,inst_52793);
var inst_52800 = cljs.core.map.call(null,inst_52798,inst_52799);
var inst_52801 = cljs.core.pr_str.call(null,inst_52800);
var inst_52802 = figwheel.client.utils.log.call(null,inst_52801);
var state_52872__$1 = (function (){var statearr_52930 = state_52872;
(statearr_52930[(31)] = inst_52796);

return statearr_52930;
})();
var statearr_52931_52998 = state_52872__$1;
(statearr_52931_52998[(2)] = inst_52802);

(statearr_52931_52998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (35))){
var state_52872__$1 = state_52872;
var statearr_52932_52999 = state_52872__$1;
(statearr_52932_52999[(2)] = true);

(statearr_52932_52999[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (19))){
var inst_52775 = (state_52872[(12)]);
var inst_52781 = figwheel.client.file_reloading.expand_files.call(null,inst_52775);
var state_52872__$1 = state_52872;
var statearr_52933_53000 = state_52872__$1;
(statearr_52933_53000[(2)] = inst_52781);

(statearr_52933_53000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (11))){
var state_52872__$1 = state_52872;
var statearr_52934_53001 = state_52872__$1;
(statearr_52934_53001[(2)] = null);

(statearr_52934_53001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (9))){
var inst_52764 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52935_53002 = state_52872__$1;
(statearr_52935_53002[(2)] = inst_52764);

(statearr_52935_53002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (5))){
var inst_52734 = (state_52872[(9)]);
var inst_52735 = (state_52872[(10)]);
var inst_52737 = (inst_52735 < inst_52734);
var inst_52738 = inst_52737;
var state_52872__$1 = state_52872;
if(cljs.core.truth_(inst_52738)){
var statearr_52936_53003 = state_52872__$1;
(statearr_52936_53003[(1)] = (7));

} else {
var statearr_52937_53004 = state_52872__$1;
(statearr_52937_53004[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (14))){
var inst_52745 = (state_52872[(22)]);
var inst_52754 = cljs.core.first.call(null,inst_52745);
var inst_52755 = figwheel.client.file_reloading.eval_body.call(null,inst_52754,opts);
var inst_52756 = cljs.core.next.call(null,inst_52745);
var inst_52732 = inst_52756;
var inst_52733 = null;
var inst_52734 = (0);
var inst_52735 = (0);
var state_52872__$1 = (function (){var statearr_52938 = state_52872;
(statearr_52938[(7)] = inst_52732);

(statearr_52938[(32)] = inst_52755);

(statearr_52938[(8)] = inst_52733);

(statearr_52938[(9)] = inst_52734);

(statearr_52938[(10)] = inst_52735);

return statearr_52938;
})();
var statearr_52939_53005 = state_52872__$1;
(statearr_52939_53005[(2)] = null);

(statearr_52939_53005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (45))){
var state_52872__$1 = state_52872;
var statearr_52940_53006 = state_52872__$1;
(statearr_52940_53006[(2)] = null);

(statearr_52940_53006[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (26))){
var inst_52789 = (state_52872[(23)]);
var inst_52791 = (state_52872[(26)]);
var inst_52788 = (state_52872[(24)]);
var inst_52793 = (state_52872[(25)]);
var inst_52785 = (state_52872[(19)]);
var inst_52808 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52810 = (function (){var all_files = inst_52785;
var res_SINGLEQUOTE_ = inst_52788;
var res = inst_52789;
var files_not_loaded = inst_52791;
var dependencies_that_loaded = inst_52793;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52793,inst_52785,inst_52808,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52809){
var map__52941 = p__52809;
var map__52941__$1 = ((((!((map__52941 == null)))?((((map__52941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52941):map__52941);
var namespace = cljs.core.get.call(null,map__52941__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52793,inst_52785,inst_52808,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52811 = cljs.core.map.call(null,inst_52810,inst_52789);
var inst_52812 = cljs.core.pr_str.call(null,inst_52811);
var inst_52813 = figwheel.client.utils.log.call(null,inst_52812);
var inst_52814 = (function (){var all_files = inst_52785;
var res_SINGLEQUOTE_ = inst_52788;
var res = inst_52789;
var files_not_loaded = inst_52791;
var dependencies_that_loaded = inst_52793;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52793,inst_52785,inst_52808,inst_52810,inst_52811,inst_52812,inst_52813,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52789,inst_52791,inst_52788,inst_52793,inst_52785,inst_52808,inst_52810,inst_52811,inst_52812,inst_52813,state_val_52873,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52815 = setTimeout(inst_52814,(10));
var state_52872__$1 = (function (){var statearr_52943 = state_52872;
(statearr_52943[(33)] = inst_52808);

(statearr_52943[(34)] = inst_52813);

return statearr_52943;
})();
var statearr_52944_53007 = state_52872__$1;
(statearr_52944_53007[(2)] = inst_52815);

(statearr_52944_53007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (16))){
var state_52872__$1 = state_52872;
var statearr_52945_53008 = state_52872__$1;
(statearr_52945_53008[(2)] = reload_dependents);

(statearr_52945_53008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (38))){
var inst_52825 = (state_52872[(16)]);
var inst_52843 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52825);
var state_52872__$1 = state_52872;
var statearr_52946_53009 = state_52872__$1;
(statearr_52946_53009[(2)] = inst_52843);

(statearr_52946_53009[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (30))){
var state_52872__$1 = state_52872;
var statearr_52947_53010 = state_52872__$1;
(statearr_52947_53010[(2)] = null);

(statearr_52947_53010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (10))){
var inst_52745 = (state_52872[(22)]);
var inst_52747 = cljs.core.chunked_seq_QMARK_.call(null,inst_52745);
var state_52872__$1 = state_52872;
if(inst_52747){
var statearr_52948_53011 = state_52872__$1;
(statearr_52948_53011[(1)] = (13));

} else {
var statearr_52949_53012 = state_52872__$1;
(statearr_52949_53012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (18))){
var inst_52779 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
if(cljs.core.truth_(inst_52779)){
var statearr_52950_53013 = state_52872__$1;
(statearr_52950_53013[(1)] = (19));

} else {
var statearr_52951_53014 = state_52872__$1;
(statearr_52951_53014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (42))){
var state_52872__$1 = state_52872;
var statearr_52952_53015 = state_52872__$1;
(statearr_52952_53015[(2)] = null);

(statearr_52952_53015[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (37))){
var inst_52838 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52953_53016 = state_52872__$1;
(statearr_52953_53016[(2)] = inst_52838);

(statearr_52953_53016[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52873 === (8))){
var inst_52745 = (state_52872[(22)]);
var inst_52732 = (state_52872[(7)]);
var inst_52745__$1 = cljs.core.seq.call(null,inst_52732);
var state_52872__$1 = (function (){var statearr_52954 = state_52872;
(statearr_52954[(22)] = inst_52745__$1);

return statearr_52954;
})();
if(inst_52745__$1){
var statearr_52955_53017 = state_52872__$1;
(statearr_52955_53017[(1)] = (10));

} else {
var statearr_52956_53018 = state_52872__$1;
(statearr_52956_53018[(1)] = (11));

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
});})(c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33607__auto__,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0 = (function (){
var statearr_52957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52957[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__);

(statearr_52957[(1)] = (1));

return statearr_52957;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1 = (function (state_52872){
while(true){
var ret_value__33609__auto__ = (function (){try{while(true){
var result__33610__auto__ = switch__33607__auto__.call(null,state_52872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33610__auto__;
}
break;
}
}catch (e52958){if((e52958 instanceof Object)){
var ex__33611__auto__ = e52958;
var statearr_52959_53019 = state_52872;
(statearr_52959_53019[(5)] = ex__33611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53020 = state_52872;
state_52872 = G__53020;
continue;
} else {
return ret_value__33609__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__ = function(state_52872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1.call(this,state_52872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33608__auto__;
})()
;})(switch__33607__auto__,c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33954__auto__ = (function (){var statearr_52960 = f__33953__auto__.call(null);
(statearr_52960[(6)] = c__33952__auto__);

return statearr_52960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33954__auto__);
});})(c__33952__auto__,map__52717,map__52717__$1,opts,before_jsload,on_jsload,reload_dependents,map__52718,map__52718__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53023,link){
var map__53024 = p__53023;
var map__53024__$1 = ((((!((map__53024 == null)))?((((map__53024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53024):map__53024);
var file = cljs.core.get.call(null,map__53024__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__53024,map__53024__$1,file){
return (function (p1__53021_SHARP_,p2__53022_SHARP_){
if(cljs.core._EQ_.call(null,p1__53021_SHARP_,p2__53022_SHARP_)){
return p1__53021_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__53024,map__53024__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53027){
var map__53028 = p__53027;
var map__53028__$1 = ((((!((map__53028 == null)))?((((map__53028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53028):map__53028);
var match_length = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53026_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53026_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53030_SHARP_,p2__53031_SHARP_){
return cljs.core.assoc.call(null,p1__53030_SHARP_,cljs.core.get.call(null,p2__53031_SHARP_,key),p2__53031_SHARP_);
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
var loaded_f_datas_53032 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53032);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53032);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53033,p__53034){
var map__53035 = p__53033;
var map__53035__$1 = ((((!((map__53035 == null)))?((((map__53035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53035):map__53035);
var on_cssload = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53036 = p__53034;
var map__53036__$1 = ((((!((map__53036 == null)))?((((map__53036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53036):map__53036);
var files_msg = map__53036__$1;
var files = cljs.core.get.call(null,map__53036__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510360407454
