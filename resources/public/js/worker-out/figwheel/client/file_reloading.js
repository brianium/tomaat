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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43967_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43967_SHARP_));
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
var seq__43968 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43969 = null;
var count__43970 = (0);
var i__43971 = (0);
while(true){
if((i__43971 < count__43970)){
var n = cljs.core._nth.call(null,chunk__43969,i__43971);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43972 = seq__43968;
var G__43973 = chunk__43969;
var G__43974 = count__43970;
var G__43975 = (i__43971 + (1));
seq__43968 = G__43972;
chunk__43969 = G__43973;
count__43970 = G__43974;
i__43971 = G__43975;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__43968);
if(temp__5278__auto__){
var seq__43968__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43968__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__43968__$1);
var G__43976 = cljs.core.chunk_rest.call(null,seq__43968__$1);
var G__43977 = c__31003__auto__;
var G__43978 = cljs.core.count.call(null,c__31003__auto__);
var G__43979 = (0);
seq__43968 = G__43976;
chunk__43969 = G__43977;
count__43970 = G__43978;
i__43971 = G__43979;
continue;
} else {
var n = cljs.core.first.call(null,seq__43968__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43980 = cljs.core.next.call(null,seq__43968__$1);
var G__43981 = null;
var G__43982 = (0);
var G__43983 = (0);
seq__43968 = G__43980;
chunk__43969 = G__43981;
count__43970 = G__43982;
i__43971 = G__43983;
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
return cljs.core.some.call(null,(function (p__43984){
var vec__43985 = p__43984;
var _ = cljs.core.nth.call(null,vec__43985,(0),null);
var v = cljs.core.nth.call(null,vec__43985,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__43988){
var vec__43989 = p__43988;
var k = cljs.core.nth.call(null,vec__43989,(0),null);
var v = cljs.core.nth.call(null,vec__43989,(1),null);
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

var seq__44001_44009 = cljs.core.seq.call(null,deps);
var chunk__44002_44010 = null;
var count__44003_44011 = (0);
var i__44004_44012 = (0);
while(true){
if((i__44004_44012 < count__44003_44011)){
var dep_44013 = cljs.core._nth.call(null,chunk__44002_44010,i__44004_44012);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_44013;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44013));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44013,(depth + (1)),state);
} else {
}

var G__44015 = seq__44001_44009;
var G__44016 = chunk__44002_44010;
var G__44017 = count__44003_44011;
var G__44018 = (i__44004_44012 + (1));
seq__44001_44009 = G__44015;
chunk__44002_44010 = G__44016;
count__44003_44011 = G__44017;
i__44004_44012 = G__44018;
continue;
} else {
var temp__5278__auto___44020 = cljs.core.seq.call(null,seq__44001_44009);
if(temp__5278__auto___44020){
var seq__44001_44021__$1 = temp__5278__auto___44020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44001_44021__$1)){
var c__31003__auto___44025 = cljs.core.chunk_first.call(null,seq__44001_44021__$1);
var G__44026 = cljs.core.chunk_rest.call(null,seq__44001_44021__$1);
var G__44027 = c__31003__auto___44025;
var G__44028 = cljs.core.count.call(null,c__31003__auto___44025);
var G__44029 = (0);
seq__44001_44009 = G__44026;
chunk__44002_44010 = G__44027;
count__44003_44011 = G__44028;
i__44004_44012 = G__44029;
continue;
} else {
var dep_44030 = cljs.core.first.call(null,seq__44001_44021__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_44030;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44030));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44030,(depth + (1)),state);
} else {
}

var G__44035 = cljs.core.next.call(null,seq__44001_44021__$1);
var G__44036 = null;
var G__44037 = (0);
var G__44038 = (0);
seq__44001_44009 = G__44035;
chunk__44002_44010 = G__44036;
count__44003_44011 = G__44037;
i__44004_44012 = G__44038;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44005){
var vec__44006 = p__44005;
var seq__44007 = cljs.core.seq.call(null,vec__44006);
var first__44008 = cljs.core.first.call(null,seq__44007);
var seq__44007__$1 = cljs.core.next.call(null,seq__44007);
var x = first__44008;
var xs = seq__44007__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44006,seq__44007,first__44008,seq__44007__$1,x,xs,get_deps__$1){
return (function (p1__43992_SHARP_){
return clojure.set.difference.call(null,p1__43992_SHARP_,x);
});})(vec__44006,seq__44007,first__44008,seq__44007__$1,x,xs,get_deps__$1))
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
var seq__44076 = cljs.core.seq.call(null,provides);
var chunk__44077 = null;
var count__44078 = (0);
var i__44079 = (0);
while(true){
if((i__44079 < count__44078)){
var prov = cljs.core._nth.call(null,chunk__44077,i__44079);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44081_44100 = cljs.core.seq.call(null,requires);
var chunk__44082_44101 = null;
var count__44083_44102 = (0);
var i__44084_44103 = (0);
while(true){
if((i__44084_44103 < count__44083_44102)){
var req_44104 = cljs.core._nth.call(null,chunk__44082_44101,i__44084_44103);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44104,prov);

var G__44105 = seq__44081_44100;
var G__44106 = chunk__44082_44101;
var G__44107 = count__44083_44102;
var G__44108 = (i__44084_44103 + (1));
seq__44081_44100 = G__44105;
chunk__44082_44101 = G__44106;
count__44083_44102 = G__44107;
i__44084_44103 = G__44108;
continue;
} else {
var temp__5278__auto___44109 = cljs.core.seq.call(null,seq__44081_44100);
if(temp__5278__auto___44109){
var seq__44081_44110__$1 = temp__5278__auto___44109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44081_44110__$1)){
var c__31003__auto___44111 = cljs.core.chunk_first.call(null,seq__44081_44110__$1);
var G__44112 = cljs.core.chunk_rest.call(null,seq__44081_44110__$1);
var G__44113 = c__31003__auto___44111;
var G__44114 = cljs.core.count.call(null,c__31003__auto___44111);
var G__44115 = (0);
seq__44081_44100 = G__44112;
chunk__44082_44101 = G__44113;
count__44083_44102 = G__44114;
i__44084_44103 = G__44115;
continue;
} else {
var req_44116 = cljs.core.first.call(null,seq__44081_44110__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44116,prov);

var G__44117 = cljs.core.next.call(null,seq__44081_44110__$1);
var G__44118 = null;
var G__44119 = (0);
var G__44120 = (0);
seq__44081_44100 = G__44117;
chunk__44082_44101 = G__44118;
count__44083_44102 = G__44119;
i__44084_44103 = G__44120;
continue;
}
} else {
}
}
break;
}

var G__44121 = seq__44076;
var G__44122 = chunk__44077;
var G__44123 = count__44078;
var G__44124 = (i__44079 + (1));
seq__44076 = G__44121;
chunk__44077 = G__44122;
count__44078 = G__44123;
i__44079 = G__44124;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__44076);
if(temp__5278__auto__){
var seq__44076__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44076__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__44076__$1);
var G__44125 = cljs.core.chunk_rest.call(null,seq__44076__$1);
var G__44126 = c__31003__auto__;
var G__44127 = cljs.core.count.call(null,c__31003__auto__);
var G__44128 = (0);
seq__44076 = G__44125;
chunk__44077 = G__44126;
count__44078 = G__44127;
i__44079 = G__44128;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44076__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44096_44129 = cljs.core.seq.call(null,requires);
var chunk__44097_44130 = null;
var count__44098_44131 = (0);
var i__44099_44132 = (0);
while(true){
if((i__44099_44132 < count__44098_44131)){
var req_44133 = cljs.core._nth.call(null,chunk__44097_44130,i__44099_44132);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44133,prov);

var G__44134 = seq__44096_44129;
var G__44135 = chunk__44097_44130;
var G__44136 = count__44098_44131;
var G__44137 = (i__44099_44132 + (1));
seq__44096_44129 = G__44134;
chunk__44097_44130 = G__44135;
count__44098_44131 = G__44136;
i__44099_44132 = G__44137;
continue;
} else {
var temp__5278__auto___44138__$1 = cljs.core.seq.call(null,seq__44096_44129);
if(temp__5278__auto___44138__$1){
var seq__44096_44139__$1 = temp__5278__auto___44138__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44096_44139__$1)){
var c__31003__auto___44140 = cljs.core.chunk_first.call(null,seq__44096_44139__$1);
var G__44141 = cljs.core.chunk_rest.call(null,seq__44096_44139__$1);
var G__44142 = c__31003__auto___44140;
var G__44143 = cljs.core.count.call(null,c__31003__auto___44140);
var G__44144 = (0);
seq__44096_44129 = G__44141;
chunk__44097_44130 = G__44142;
count__44098_44131 = G__44143;
i__44099_44132 = G__44144;
continue;
} else {
var req_44145 = cljs.core.first.call(null,seq__44096_44139__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44145,prov);

var G__44146 = cljs.core.next.call(null,seq__44096_44139__$1);
var G__44147 = null;
var G__44148 = (0);
var G__44149 = (0);
seq__44096_44129 = G__44146;
chunk__44097_44130 = G__44147;
count__44098_44131 = G__44148;
i__44099_44132 = G__44149;
continue;
}
} else {
}
}
break;
}

var G__44150 = cljs.core.next.call(null,seq__44076__$1);
var G__44151 = null;
var G__44152 = (0);
var G__44153 = (0);
seq__44076 = G__44150;
chunk__44077 = G__44151;
count__44078 = G__44152;
i__44079 = G__44153;
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
var seq__44154_44159 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44155_44160 = null;
var count__44156_44161 = (0);
var i__44157_44162 = (0);
while(true){
if((i__44157_44162 < count__44156_44161)){
var ns_44166 = cljs.core._nth.call(null,chunk__44155_44160,i__44157_44162);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44166);

var G__44167 = seq__44154_44159;
var G__44168 = chunk__44155_44160;
var G__44169 = count__44156_44161;
var G__44170 = (i__44157_44162 + (1));
seq__44154_44159 = G__44167;
chunk__44155_44160 = G__44168;
count__44156_44161 = G__44169;
i__44157_44162 = G__44170;
continue;
} else {
var temp__5278__auto___44175 = cljs.core.seq.call(null,seq__44154_44159);
if(temp__5278__auto___44175){
var seq__44154_44176__$1 = temp__5278__auto___44175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44154_44176__$1)){
var c__31003__auto___44177 = cljs.core.chunk_first.call(null,seq__44154_44176__$1);
var G__44178 = cljs.core.chunk_rest.call(null,seq__44154_44176__$1);
var G__44179 = c__31003__auto___44177;
var G__44180 = cljs.core.count.call(null,c__31003__auto___44177);
var G__44181 = (0);
seq__44154_44159 = G__44178;
chunk__44155_44160 = G__44179;
count__44156_44161 = G__44180;
i__44157_44162 = G__44181;
continue;
} else {
var ns_44182 = cljs.core.first.call(null,seq__44154_44176__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44182);

var G__44183 = cljs.core.next.call(null,seq__44154_44176__$1);
var G__44184 = null;
var G__44185 = (0);
var G__44186 = (0);
seq__44154_44159 = G__44183;
chunk__44155_44160 = G__44184;
count__44156_44161 = G__44185;
i__44157_44162 = G__44186;
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
var G__44190__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44194__i = 0, G__44194__a = new Array(arguments.length -  0);
while (G__44194__i < G__44194__a.length) {G__44194__a[G__44194__i] = arguments[G__44194__i + 0]; ++G__44194__i;}
  args = new cljs.core.IndexedSeq(G__44194__a,0,null);
} 
return G__44190__delegate.call(this,args);};
G__44190.cljs$lang$maxFixedArity = 0;
G__44190.cljs$lang$applyTo = (function (arglist__44195){
var args = cljs.core.seq(arglist__44195);
return G__44190__delegate(args);
});
G__44190.cljs$core$IFn$_invoke$arity$variadic = G__44190__delegate;
return G__44190;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__44196_SHARP_,p2__44197_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44196_SHARP_)].join('')),p2__44197_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__44198_SHARP_,p2__44199_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44198_SHARP_)].join(''),p2__44199_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44217 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44217.addCallback(((function (G__44217){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__44217))
);

G__44217.addErrback(((function (G__44217){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__44217))
);

return G__44217;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44224){if((e44224 instanceof Error)){
var e = e44224;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44224;

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
}catch (e44225){if((e44225 instanceof Error)){
var e = e44225;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44225;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44228 = cljs.core._EQ_;
var expr__44229 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44228.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44229))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__44228.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44229))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__44228.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44229))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__44228,expr__44229){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44228,expr__44229))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44233,callback){
var map__44234 = p__44233;
var map__44234__$1 = ((((!((map__44234 == null)))?((((map__44234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44234):map__44234);
var file_msg = map__44234__$1;
var request_url = cljs.core.get.call(null,map__44234__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__44234,map__44234__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44234,map__44234__$1,file_msg,request_url))
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
return (function (state_44278){
var state_val_44279 = (state_44278[(1)]);
if((state_val_44279 === (7))){
var inst_44274 = (state_44278[(2)]);
var state_44278__$1 = state_44278;
var statearr_44284_44321 = state_44278__$1;
(statearr_44284_44321[(2)] = inst_44274);

(statearr_44284_44321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (1))){
var state_44278__$1 = state_44278;
var statearr_44288_44322 = state_44278__$1;
(statearr_44288_44322[(2)] = null);

(statearr_44288_44322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (4))){
var inst_44242 = (state_44278[(7)]);
var inst_44242__$1 = (state_44278[(2)]);
var state_44278__$1 = (function (){var statearr_44289 = state_44278;
(statearr_44289[(7)] = inst_44242__$1);

return statearr_44289;
})();
if(cljs.core.truth_(inst_44242__$1)){
var statearr_44290_44323 = state_44278__$1;
(statearr_44290_44323[(1)] = (5));

} else {
var statearr_44291_44324 = state_44278__$1;
(statearr_44291_44324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (15))){
var inst_44259 = (state_44278[(8)]);
var inst_44256 = (state_44278[(9)]);
var inst_44261 = inst_44259.call(null,inst_44256);
var state_44278__$1 = state_44278;
var statearr_44292_44325 = state_44278__$1;
(statearr_44292_44325[(2)] = inst_44261);

(statearr_44292_44325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (13))){
var inst_44268 = (state_44278[(2)]);
var state_44278__$1 = state_44278;
var statearr_44293_44326 = state_44278__$1;
(statearr_44293_44326[(2)] = inst_44268);

(statearr_44293_44326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (6))){
var state_44278__$1 = state_44278;
var statearr_44294_44327 = state_44278__$1;
(statearr_44294_44327[(2)] = null);

(statearr_44294_44327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (17))){
var inst_44265 = (state_44278[(2)]);
var state_44278__$1 = state_44278;
var statearr_44295_44328 = state_44278__$1;
(statearr_44295_44328[(2)] = inst_44265);

(statearr_44295_44328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (3))){
var inst_44276 = (state_44278[(2)]);
var state_44278__$1 = state_44278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44278__$1,inst_44276);
} else {
if((state_val_44279 === (12))){
var state_44278__$1 = state_44278;
var statearr_44296_44329 = state_44278__$1;
(statearr_44296_44329[(2)] = null);

(statearr_44296_44329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (2))){
var state_44278__$1 = state_44278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44278__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44279 === (11))){
var inst_44247 = (state_44278[(10)]);
var inst_44254 = figwheel.client.file_reloading.blocking_load.call(null,inst_44247);
var state_44278__$1 = state_44278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44278__$1,(14),inst_44254);
} else {
if((state_val_44279 === (9))){
var inst_44247 = (state_44278[(10)]);
var state_44278__$1 = state_44278;
if(cljs.core.truth_(inst_44247)){
var statearr_44298_44330 = state_44278__$1;
(statearr_44298_44330[(1)] = (11));

} else {
var statearr_44299_44331 = state_44278__$1;
(statearr_44299_44331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (5))){
var inst_44242 = (state_44278[(7)]);
var inst_44248 = (state_44278[(11)]);
var inst_44247 = cljs.core.nth.call(null,inst_44242,(0),null);
var inst_44248__$1 = cljs.core.nth.call(null,inst_44242,(1),null);
var state_44278__$1 = (function (){var statearr_44300 = state_44278;
(statearr_44300[(11)] = inst_44248__$1);

(statearr_44300[(10)] = inst_44247);

return statearr_44300;
})();
if(cljs.core.truth_(inst_44248__$1)){
var statearr_44301_44332 = state_44278__$1;
(statearr_44301_44332[(1)] = (8));

} else {
var statearr_44302_44333 = state_44278__$1;
(statearr_44302_44333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (14))){
var inst_44259 = (state_44278[(8)]);
var inst_44247 = (state_44278[(10)]);
var inst_44256 = (state_44278[(2)]);
var inst_44257 = console.log("Loading!",inst_44247);
var inst_44258 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44259__$1 = cljs.core.get.call(null,inst_44258,inst_44247);
var state_44278__$1 = (function (){var statearr_44303 = state_44278;
(statearr_44303[(12)] = inst_44257);

(statearr_44303[(8)] = inst_44259__$1);

(statearr_44303[(9)] = inst_44256);

return statearr_44303;
})();
if(cljs.core.truth_(inst_44259__$1)){
var statearr_44304_44337 = state_44278__$1;
(statearr_44304_44337[(1)] = (15));

} else {
var statearr_44305_44338 = state_44278__$1;
(statearr_44305_44338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (16))){
var inst_44256 = (state_44278[(9)]);
var inst_44263 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44256);
var state_44278__$1 = state_44278;
var statearr_44306_44339 = state_44278__$1;
(statearr_44306_44339[(2)] = inst_44263);

(statearr_44306_44339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (10))){
var inst_44270 = (state_44278[(2)]);
var state_44278__$1 = (function (){var statearr_44307 = state_44278;
(statearr_44307[(13)] = inst_44270);

return statearr_44307;
})();
var statearr_44309_44341 = state_44278__$1;
(statearr_44309_44341[(2)] = null);

(statearr_44309_44341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44279 === (8))){
var inst_44248 = (state_44278[(11)]);
var inst_44250 = console.log("Evaling!",inst_44248);
var inst_44251 = eval(inst_44248);
var state_44278__$1 = (function (){var statearr_44310 = state_44278;
(statearr_44310[(14)] = inst_44250);

return statearr_44310;
})();
var statearr_44311_44344 = state_44278__$1;
(statearr_44311_44344[(2)] = inst_44251);

(statearr_44311_44344[(1)] = (10));


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
var statearr_44313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44313[(0)] = figwheel$client$file_reloading$state_machine__33281__auto__);

(statearr_44313[(1)] = (1));

return statearr_44313;
});
var figwheel$client$file_reloading$state_machine__33281__auto____1 = (function (state_44278){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_44278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e44315){if((e44315 instanceof Object)){
var ex__33284__auto__ = e44315;
var statearr_44318_44345 = state_44278;
(statearr_44318_44345[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44346 = state_44278;
state_44278 = G__44346;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33281__auto__ = function(state_44278){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33281__auto____1.call(this,state_44278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33281__auto____0;
figwheel$client$file_reloading$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33281__auto____1;
return figwheel$client$file_reloading$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_44320 = f__33666__auto__.call(null);
(statearr_44320[(6)] = c__33665__auto__);

return statearr_44320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__44351 = arguments.length;
switch (G__44351) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44354,callback){
var map__44355 = p__44354;
var map__44355__$1 = ((((!((map__44355 == null)))?((((map__44355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44355):map__44355);
var file_msg = map__44355__$1;
var namespace = cljs.core.get.call(null,map__44355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44355,map__44355__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44355,map__44355__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44357){
var map__44358 = p__44357;
var map__44358__$1 = ((((!((map__44358 == null)))?((((map__44358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44358):map__44358);
var file_msg = map__44358__$1;
var namespace = cljs.core.get.call(null,map__44358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44362){
var map__44363 = p__44362;
var map__44363__$1 = ((((!((map__44363 == null)))?((((map__44363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44363):map__44363);
var file_msg = map__44363__$1;
var namespace = cljs.core.get.call(null,map__44363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44369,callback){
var map__44370 = p__44369;
var map__44370__$1 = ((((!((map__44370 == null)))?((((map__44370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44370):map__44370);
var file_msg = map__44370__$1;
var request_url = cljs.core.get.call(null,map__44370__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33665__auto___44425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___44425,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___44425,out){
return (function (state_44410){
var state_val_44411 = (state_44410[(1)]);
if((state_val_44411 === (1))){
var inst_44384 = cljs.core.seq.call(null,files);
var inst_44385 = cljs.core.first.call(null,inst_44384);
var inst_44386 = cljs.core.next.call(null,inst_44384);
var inst_44387 = files;
var state_44410__$1 = (function (){var statearr_44412 = state_44410;
(statearr_44412[(7)] = inst_44386);

(statearr_44412[(8)] = inst_44385);

(statearr_44412[(9)] = inst_44387);

return statearr_44412;
})();
var statearr_44413_44446 = state_44410__$1;
(statearr_44413_44446[(2)] = null);

(statearr_44413_44446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44411 === (2))){
var inst_44393 = (state_44410[(10)]);
var inst_44387 = (state_44410[(9)]);
var inst_44392 = cljs.core.seq.call(null,inst_44387);
var inst_44393__$1 = cljs.core.first.call(null,inst_44392);
var inst_44394 = cljs.core.next.call(null,inst_44392);
var inst_44395 = (inst_44393__$1 == null);
var inst_44396 = cljs.core.not.call(null,inst_44395);
var state_44410__$1 = (function (){var statearr_44414 = state_44410;
(statearr_44414[(11)] = inst_44394);

(statearr_44414[(10)] = inst_44393__$1);

return statearr_44414;
})();
if(inst_44396){
var statearr_44415_44452 = state_44410__$1;
(statearr_44415_44452[(1)] = (4));

} else {
var statearr_44416_44454 = state_44410__$1;
(statearr_44416_44454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44411 === (3))){
var inst_44408 = (state_44410[(2)]);
var state_44410__$1 = state_44410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44410__$1,inst_44408);
} else {
if((state_val_44411 === (4))){
var inst_44393 = (state_44410[(10)]);
var inst_44398 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44393);
var state_44410__$1 = state_44410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44410__$1,(7),inst_44398);
} else {
if((state_val_44411 === (5))){
var inst_44404 = cljs.core.async.close_BANG_.call(null,out);
var state_44410__$1 = state_44410;
var statearr_44417_44455 = state_44410__$1;
(statearr_44417_44455[(2)] = inst_44404);

(statearr_44417_44455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44411 === (6))){
var inst_44406 = (state_44410[(2)]);
var state_44410__$1 = state_44410;
var statearr_44418_44456 = state_44410__$1;
(statearr_44418_44456[(2)] = inst_44406);

(statearr_44418_44456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44411 === (7))){
var inst_44394 = (state_44410[(11)]);
var inst_44400 = (state_44410[(2)]);
var inst_44401 = cljs.core.async.put_BANG_.call(null,out,inst_44400);
var inst_44387 = inst_44394;
var state_44410__$1 = (function (){var statearr_44419 = state_44410;
(statearr_44419[(12)] = inst_44401);

(statearr_44419[(9)] = inst_44387);

return statearr_44419;
})();
var statearr_44420_44457 = state_44410__$1;
(statearr_44420_44457[(2)] = null);

(statearr_44420_44457[(1)] = (2));


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
});})(c__33665__auto___44425,out))
;
return ((function (switch__33280__auto__,c__33665__auto___44425,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0 = (function (){
var statearr_44421 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44421[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__);

(statearr_44421[(1)] = (1));

return statearr_44421;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1 = (function (state_44410){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_44410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e44422){if((e44422 instanceof Object)){
var ex__33284__auto__ = e44422;
var statearr_44423_44458 = state_44410;
(statearr_44423_44458[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44459 = state_44410;
state_44410 = G__44459;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__ = function(state_44410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1.call(this,state_44410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___44425,out))
})();
var state__33667__auto__ = (function (){var statearr_44424 = f__33666__auto__.call(null);
(statearr_44424[(6)] = c__33665__auto___44425);

return statearr_44424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___44425,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44462,opts){
var map__44463 = p__44462;
var map__44463__$1 = ((((!((map__44463 == null)))?((((map__44463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44463):map__44463);
var eval_body = cljs.core.get.call(null,map__44463__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e44465){var e = e44465;
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
return (function (p1__44481_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44481_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__44485){
var vec__44486 = p__44485;
var k = cljs.core.nth.call(null,vec__44486,(0),null);
var v = cljs.core.nth.call(null,vec__44486,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44489){
var vec__44490 = p__44489;
var k = cljs.core.nth.call(null,vec__44490,(0),null);
var v = cljs.core.nth.call(null,vec__44490,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44498,p__44499){
var map__44500 = p__44498;
var map__44500__$1 = ((((!((map__44500 == null)))?((((map__44500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44500):map__44500);
var opts = map__44500__$1;
var before_jsload = cljs.core.get.call(null,map__44500__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44500__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44500__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44501 = p__44499;
var map__44501__$1 = ((((!((map__44501 == null)))?((((map__44501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44501):map__44501);
var msg = map__44501__$1;
var files = cljs.core.get.call(null,map__44501__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44501__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44501__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44655){
var state_val_44656 = (state_44655[(1)]);
if((state_val_44656 === (7))){
var inst_44517 = (state_44655[(7)]);
var inst_44516 = (state_44655[(8)]);
var inst_44518 = (state_44655[(9)]);
var inst_44515 = (state_44655[(10)]);
var inst_44523 = cljs.core._nth.call(null,inst_44516,inst_44518);
var inst_44524 = figwheel.client.file_reloading.eval_body.call(null,inst_44523,opts);
var inst_44525 = (inst_44518 + (1));
var tmp44657 = inst_44517;
var tmp44658 = inst_44516;
var tmp44659 = inst_44515;
var inst_44515__$1 = tmp44659;
var inst_44516__$1 = tmp44658;
var inst_44517__$1 = tmp44657;
var inst_44518__$1 = inst_44525;
var state_44655__$1 = (function (){var statearr_44660 = state_44655;
(statearr_44660[(11)] = inst_44524);

(statearr_44660[(7)] = inst_44517__$1);

(statearr_44660[(8)] = inst_44516__$1);

(statearr_44660[(9)] = inst_44518__$1);

(statearr_44660[(10)] = inst_44515__$1);

return statearr_44660;
})();
var statearr_44661_44744 = state_44655__$1;
(statearr_44661_44744[(2)] = null);

(statearr_44661_44744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (20))){
var inst_44558 = (state_44655[(12)]);
var inst_44566 = figwheel.client.file_reloading.sort_files.call(null,inst_44558);
var state_44655__$1 = state_44655;
var statearr_44662_44745 = state_44655__$1;
(statearr_44662_44745[(2)] = inst_44566);

(statearr_44662_44745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (27))){
var state_44655__$1 = state_44655;
var statearr_44663_44746 = state_44655__$1;
(statearr_44663_44746[(2)] = null);

(statearr_44663_44746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (1))){
var inst_44507 = (state_44655[(13)]);
var inst_44504 = before_jsload.call(null,files);
var inst_44505 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44506 = (function (){return ((function (inst_44507,inst_44504,inst_44505,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44495_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44495_SHARP_);
});
;})(inst_44507,inst_44504,inst_44505,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44507__$1 = cljs.core.filter.call(null,inst_44506,files);
var inst_44508 = cljs.core.not_empty.call(null,inst_44507__$1);
var state_44655__$1 = (function (){var statearr_44664 = state_44655;
(statearr_44664[(13)] = inst_44507__$1);

(statearr_44664[(14)] = inst_44504);

(statearr_44664[(15)] = inst_44505);

return statearr_44664;
})();
if(cljs.core.truth_(inst_44508)){
var statearr_44665_44747 = state_44655__$1;
(statearr_44665_44747[(1)] = (2));

} else {
var statearr_44666_44748 = state_44655__$1;
(statearr_44666_44748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (24))){
var state_44655__$1 = state_44655;
var statearr_44667_44749 = state_44655__$1;
(statearr_44667_44749[(2)] = null);

(statearr_44667_44749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (39))){
var inst_44608 = (state_44655[(16)]);
var state_44655__$1 = state_44655;
var statearr_44668_44750 = state_44655__$1;
(statearr_44668_44750[(2)] = inst_44608);

(statearr_44668_44750[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (46))){
var inst_44650 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44669_44751 = state_44655__$1;
(statearr_44669_44751[(2)] = inst_44650);

(statearr_44669_44751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (4))){
var inst_44552 = (state_44655[(2)]);
var inst_44553 = cljs.core.List.EMPTY;
var inst_44554 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44553);
var inst_44555 = (function (){return ((function (inst_44552,inst_44553,inst_44554,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44496_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44496_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44496_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44496_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_44552,inst_44553,inst_44554,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44556 = cljs.core.filter.call(null,inst_44555,files);
var inst_44557 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44558 = cljs.core.concat.call(null,inst_44556,inst_44557);
var state_44655__$1 = (function (){var statearr_44670 = state_44655;
(statearr_44670[(17)] = inst_44554);

(statearr_44670[(12)] = inst_44558);

(statearr_44670[(18)] = inst_44552);

return statearr_44670;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44671_44752 = state_44655__$1;
(statearr_44671_44752[(1)] = (16));

} else {
var statearr_44672_44753 = state_44655__$1;
(statearr_44672_44753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (15))){
var inst_44542 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44673_44754 = state_44655__$1;
(statearr_44673_44754[(2)] = inst_44542);

(statearr_44673_44754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (21))){
var inst_44568 = (state_44655[(19)]);
var inst_44568__$1 = (state_44655[(2)]);
var inst_44569 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44568__$1);
var state_44655__$1 = (function (){var statearr_44674 = state_44655;
(statearr_44674[(19)] = inst_44568__$1);

return statearr_44674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44655__$1,(22),inst_44569);
} else {
if((state_val_44656 === (31))){
var inst_44653 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44655__$1,inst_44653);
} else {
if((state_val_44656 === (32))){
var inst_44608 = (state_44655[(16)]);
var inst_44613 = inst_44608.cljs$lang$protocol_mask$partition0$;
var inst_44614 = (inst_44613 & (64));
var inst_44615 = inst_44608.cljs$core$ISeq$;
var inst_44616 = (cljs.core.PROTOCOL_SENTINEL === inst_44615);
var inst_44617 = (inst_44614) || (inst_44616);
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44617)){
var statearr_44675_44755 = state_44655__$1;
(statearr_44675_44755[(1)] = (35));

} else {
var statearr_44676_44756 = state_44655__$1;
(statearr_44676_44756[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (40))){
var inst_44630 = (state_44655[(20)]);
var inst_44629 = (state_44655[(2)]);
var inst_44630__$1 = cljs.core.get.call(null,inst_44629,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44631 = cljs.core.get.call(null,inst_44629,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44632 = cljs.core.not_empty.call(null,inst_44630__$1);
var state_44655__$1 = (function (){var statearr_44677 = state_44655;
(statearr_44677[(21)] = inst_44631);

(statearr_44677[(20)] = inst_44630__$1);

return statearr_44677;
})();
if(cljs.core.truth_(inst_44632)){
var statearr_44678_44757 = state_44655__$1;
(statearr_44678_44757[(1)] = (41));

} else {
var statearr_44679_44758 = state_44655__$1;
(statearr_44679_44758[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (33))){
var state_44655__$1 = state_44655;
var statearr_44680_44759 = state_44655__$1;
(statearr_44680_44759[(2)] = false);

(statearr_44680_44759[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (13))){
var inst_44528 = (state_44655[(22)]);
var inst_44532 = cljs.core.chunk_first.call(null,inst_44528);
var inst_44533 = cljs.core.chunk_rest.call(null,inst_44528);
var inst_44534 = cljs.core.count.call(null,inst_44532);
var inst_44515 = inst_44533;
var inst_44516 = inst_44532;
var inst_44517 = inst_44534;
var inst_44518 = (0);
var state_44655__$1 = (function (){var statearr_44681 = state_44655;
(statearr_44681[(7)] = inst_44517);

(statearr_44681[(8)] = inst_44516);

(statearr_44681[(9)] = inst_44518);

(statearr_44681[(10)] = inst_44515);

return statearr_44681;
})();
var statearr_44682_44760 = state_44655__$1;
(statearr_44682_44760[(2)] = null);

(statearr_44682_44760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (22))){
var inst_44568 = (state_44655[(19)]);
var inst_44576 = (state_44655[(23)]);
var inst_44571 = (state_44655[(24)]);
var inst_44572 = (state_44655[(25)]);
var inst_44571__$1 = (state_44655[(2)]);
var inst_44572__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44571__$1);
var inst_44573 = (function (){var all_files = inst_44568;
var res_SINGLEQUOTE_ = inst_44571__$1;
var res = inst_44572__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44568,inst_44576,inst_44571,inst_44572,inst_44571__$1,inst_44572__$1,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44497_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44497_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44568,inst_44576,inst_44571,inst_44572,inst_44571__$1,inst_44572__$1,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44574 = cljs.core.filter.call(null,inst_44573,inst_44571__$1);
var inst_44575 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44576__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44575);
var inst_44577 = cljs.core.not_empty.call(null,inst_44576__$1);
var state_44655__$1 = (function (){var statearr_44683 = state_44655;
(statearr_44683[(26)] = inst_44574);

(statearr_44683[(23)] = inst_44576__$1);

(statearr_44683[(24)] = inst_44571__$1);

(statearr_44683[(25)] = inst_44572__$1);

return statearr_44683;
})();
if(cljs.core.truth_(inst_44577)){
var statearr_44684_44761 = state_44655__$1;
(statearr_44684_44761[(1)] = (23));

} else {
var statearr_44685_44762 = state_44655__$1;
(statearr_44685_44762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (36))){
var state_44655__$1 = state_44655;
var statearr_44686_44763 = state_44655__$1;
(statearr_44686_44763[(2)] = false);

(statearr_44686_44763[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (41))){
var inst_44630 = (state_44655[(20)]);
var inst_44634 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44635 = cljs.core.map.call(null,inst_44634,inst_44630);
var inst_44636 = cljs.core.pr_str.call(null,inst_44635);
var inst_44637 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44636)].join('');
var inst_44638 = figwheel.client.utils.log.call(null,inst_44637);
var state_44655__$1 = state_44655;
var statearr_44687_44764 = state_44655__$1;
(statearr_44687_44764[(2)] = inst_44638);

(statearr_44687_44764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (43))){
var inst_44631 = (state_44655[(21)]);
var inst_44641 = (state_44655[(2)]);
var inst_44642 = cljs.core.not_empty.call(null,inst_44631);
var state_44655__$1 = (function (){var statearr_44688 = state_44655;
(statearr_44688[(27)] = inst_44641);

return statearr_44688;
})();
if(cljs.core.truth_(inst_44642)){
var statearr_44689_44765 = state_44655__$1;
(statearr_44689_44765[(1)] = (44));

} else {
var statearr_44690_44766 = state_44655__$1;
(statearr_44690_44766[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (29))){
var inst_44568 = (state_44655[(19)]);
var inst_44574 = (state_44655[(26)]);
var inst_44576 = (state_44655[(23)]);
var inst_44571 = (state_44655[(24)]);
var inst_44608 = (state_44655[(16)]);
var inst_44572 = (state_44655[(25)]);
var inst_44604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44607 = (function (){var all_files = inst_44568;
var res_SINGLEQUOTE_ = inst_44571;
var res = inst_44572;
var files_not_loaded = inst_44574;
var dependencies_that_loaded = inst_44576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44608,inst_44572,inst_44604,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44606){
var map__44691 = p__44606;
var map__44691__$1 = ((((!((map__44691 == null)))?((((map__44691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44691):map__44691);
var namespace = cljs.core.get.call(null,map__44691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44608,inst_44572,inst_44604,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44608__$1 = cljs.core.group_by.call(null,inst_44607,inst_44574);
var inst_44610 = (inst_44608__$1 == null);
var inst_44611 = cljs.core.not.call(null,inst_44610);
var state_44655__$1 = (function (){var statearr_44693 = state_44655;
(statearr_44693[(16)] = inst_44608__$1);

(statearr_44693[(28)] = inst_44604);

return statearr_44693;
})();
if(inst_44611){
var statearr_44694_44767 = state_44655__$1;
(statearr_44694_44767[(1)] = (32));

} else {
var statearr_44695_44768 = state_44655__$1;
(statearr_44695_44768[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (44))){
var inst_44631 = (state_44655[(21)]);
var inst_44644 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44631);
var inst_44645 = cljs.core.pr_str.call(null,inst_44644);
var inst_44646 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44645)].join('');
var inst_44647 = figwheel.client.utils.log.call(null,inst_44646);
var state_44655__$1 = state_44655;
var statearr_44696_44769 = state_44655__$1;
(statearr_44696_44769[(2)] = inst_44647);

(statearr_44696_44769[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (6))){
var inst_44549 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44697_44770 = state_44655__$1;
(statearr_44697_44770[(2)] = inst_44549);

(statearr_44697_44770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (28))){
var inst_44574 = (state_44655[(26)]);
var inst_44601 = (state_44655[(2)]);
var inst_44602 = cljs.core.not_empty.call(null,inst_44574);
var state_44655__$1 = (function (){var statearr_44698 = state_44655;
(statearr_44698[(29)] = inst_44601);

return statearr_44698;
})();
if(cljs.core.truth_(inst_44602)){
var statearr_44699_44771 = state_44655__$1;
(statearr_44699_44771[(1)] = (29));

} else {
var statearr_44700_44772 = state_44655__$1;
(statearr_44700_44772[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (25))){
var inst_44572 = (state_44655[(25)]);
var inst_44588 = (state_44655[(2)]);
var inst_44589 = cljs.core.not_empty.call(null,inst_44572);
var state_44655__$1 = (function (){var statearr_44701 = state_44655;
(statearr_44701[(30)] = inst_44588);

return statearr_44701;
})();
if(cljs.core.truth_(inst_44589)){
var statearr_44702_44773 = state_44655__$1;
(statearr_44702_44773[(1)] = (26));

} else {
var statearr_44703_44774 = state_44655__$1;
(statearr_44703_44774[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (34))){
var inst_44624 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44624)){
var statearr_44704_44775 = state_44655__$1;
(statearr_44704_44775[(1)] = (38));

} else {
var statearr_44705_44776 = state_44655__$1;
(statearr_44705_44776[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (17))){
var state_44655__$1 = state_44655;
var statearr_44706_44777 = state_44655__$1;
(statearr_44706_44777[(2)] = recompile_dependents);

(statearr_44706_44777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (3))){
var state_44655__$1 = state_44655;
var statearr_44707_44778 = state_44655__$1;
(statearr_44707_44778[(2)] = null);

(statearr_44707_44778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (12))){
var inst_44545 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44708_44779 = state_44655__$1;
(statearr_44708_44779[(2)] = inst_44545);

(statearr_44708_44779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (2))){
var inst_44507 = (state_44655[(13)]);
var inst_44514 = cljs.core.seq.call(null,inst_44507);
var inst_44515 = inst_44514;
var inst_44516 = null;
var inst_44517 = (0);
var inst_44518 = (0);
var state_44655__$1 = (function (){var statearr_44709 = state_44655;
(statearr_44709[(7)] = inst_44517);

(statearr_44709[(8)] = inst_44516);

(statearr_44709[(9)] = inst_44518);

(statearr_44709[(10)] = inst_44515);

return statearr_44709;
})();
var statearr_44710_44780 = state_44655__$1;
(statearr_44710_44780[(2)] = null);

(statearr_44710_44780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (23))){
var inst_44568 = (state_44655[(19)]);
var inst_44574 = (state_44655[(26)]);
var inst_44576 = (state_44655[(23)]);
var inst_44571 = (state_44655[(24)]);
var inst_44572 = (state_44655[(25)]);
var inst_44579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44581 = (function (){var all_files = inst_44568;
var res_SINGLEQUOTE_ = inst_44571;
var res = inst_44572;
var files_not_loaded = inst_44574;
var dependencies_that_loaded = inst_44576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44572,inst_44579,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44580){
var map__44711 = p__44580;
var map__44711__$1 = ((((!((map__44711 == null)))?((((map__44711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44711):map__44711);
var request_url = cljs.core.get.call(null,map__44711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44572,inst_44579,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44582 = cljs.core.reverse.call(null,inst_44576);
var inst_44583 = cljs.core.map.call(null,inst_44581,inst_44582);
var inst_44584 = cljs.core.pr_str.call(null,inst_44583);
var inst_44585 = figwheel.client.utils.log.call(null,inst_44584);
var state_44655__$1 = (function (){var statearr_44713 = state_44655;
(statearr_44713[(31)] = inst_44579);

return statearr_44713;
})();
var statearr_44714_44781 = state_44655__$1;
(statearr_44714_44781[(2)] = inst_44585);

(statearr_44714_44781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (35))){
var state_44655__$1 = state_44655;
var statearr_44715_44782 = state_44655__$1;
(statearr_44715_44782[(2)] = true);

(statearr_44715_44782[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (19))){
var inst_44558 = (state_44655[(12)]);
var inst_44564 = figwheel.client.file_reloading.expand_files.call(null,inst_44558);
var state_44655__$1 = state_44655;
var statearr_44716_44783 = state_44655__$1;
(statearr_44716_44783[(2)] = inst_44564);

(statearr_44716_44783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (11))){
var state_44655__$1 = state_44655;
var statearr_44717_44784 = state_44655__$1;
(statearr_44717_44784[(2)] = null);

(statearr_44717_44784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (9))){
var inst_44547 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44718_44785 = state_44655__$1;
(statearr_44718_44785[(2)] = inst_44547);

(statearr_44718_44785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (5))){
var inst_44517 = (state_44655[(7)]);
var inst_44518 = (state_44655[(9)]);
var inst_44520 = (inst_44518 < inst_44517);
var inst_44521 = inst_44520;
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44521)){
var statearr_44719_44786 = state_44655__$1;
(statearr_44719_44786[(1)] = (7));

} else {
var statearr_44720_44787 = state_44655__$1;
(statearr_44720_44787[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (14))){
var inst_44528 = (state_44655[(22)]);
var inst_44537 = cljs.core.first.call(null,inst_44528);
var inst_44538 = figwheel.client.file_reloading.eval_body.call(null,inst_44537,opts);
var inst_44539 = cljs.core.next.call(null,inst_44528);
var inst_44515 = inst_44539;
var inst_44516 = null;
var inst_44517 = (0);
var inst_44518 = (0);
var state_44655__$1 = (function (){var statearr_44721 = state_44655;
(statearr_44721[(32)] = inst_44538);

(statearr_44721[(7)] = inst_44517);

(statearr_44721[(8)] = inst_44516);

(statearr_44721[(9)] = inst_44518);

(statearr_44721[(10)] = inst_44515);

return statearr_44721;
})();
var statearr_44722_44788 = state_44655__$1;
(statearr_44722_44788[(2)] = null);

(statearr_44722_44788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (45))){
var state_44655__$1 = state_44655;
var statearr_44723_44789 = state_44655__$1;
(statearr_44723_44789[(2)] = null);

(statearr_44723_44789[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (26))){
var inst_44568 = (state_44655[(19)]);
var inst_44574 = (state_44655[(26)]);
var inst_44576 = (state_44655[(23)]);
var inst_44571 = (state_44655[(24)]);
var inst_44572 = (state_44655[(25)]);
var inst_44591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44593 = (function (){var all_files = inst_44568;
var res_SINGLEQUOTE_ = inst_44571;
var res = inst_44572;
var files_not_loaded = inst_44574;
var dependencies_that_loaded = inst_44576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44572,inst_44591,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44592){
var map__44724 = p__44592;
var map__44724__$1 = ((((!((map__44724 == null)))?((((map__44724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44724):map__44724);
var namespace = cljs.core.get.call(null,map__44724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44572,inst_44591,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44594 = cljs.core.map.call(null,inst_44593,inst_44572);
var inst_44595 = cljs.core.pr_str.call(null,inst_44594);
var inst_44596 = figwheel.client.utils.log.call(null,inst_44595);
var inst_44597 = (function (){var all_files = inst_44568;
var res_SINGLEQUOTE_ = inst_44571;
var res = inst_44572;
var files_not_loaded = inst_44574;
var dependencies_that_loaded = inst_44576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44572,inst_44591,inst_44593,inst_44594,inst_44595,inst_44596,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44568,inst_44574,inst_44576,inst_44571,inst_44572,inst_44591,inst_44593,inst_44594,inst_44595,inst_44596,state_val_44656,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44598 = setTimeout(inst_44597,(10));
var state_44655__$1 = (function (){var statearr_44726 = state_44655;
(statearr_44726[(33)] = inst_44591);

(statearr_44726[(34)] = inst_44596);

return statearr_44726;
})();
var statearr_44727_44790 = state_44655__$1;
(statearr_44727_44790[(2)] = inst_44598);

(statearr_44727_44790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (16))){
var state_44655__$1 = state_44655;
var statearr_44728_44791 = state_44655__$1;
(statearr_44728_44791[(2)] = reload_dependents);

(statearr_44728_44791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (38))){
var inst_44608 = (state_44655[(16)]);
var inst_44626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44608);
var state_44655__$1 = state_44655;
var statearr_44729_44792 = state_44655__$1;
(statearr_44729_44792[(2)] = inst_44626);

(statearr_44729_44792[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (30))){
var state_44655__$1 = state_44655;
var statearr_44730_44793 = state_44655__$1;
(statearr_44730_44793[(2)] = null);

(statearr_44730_44793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (10))){
var inst_44528 = (state_44655[(22)]);
var inst_44530 = cljs.core.chunked_seq_QMARK_.call(null,inst_44528);
var state_44655__$1 = state_44655;
if(inst_44530){
var statearr_44731_44794 = state_44655__$1;
(statearr_44731_44794[(1)] = (13));

} else {
var statearr_44732_44795 = state_44655__$1;
(statearr_44732_44795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (18))){
var inst_44562 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44562)){
var statearr_44733_44796 = state_44655__$1;
(statearr_44733_44796[(1)] = (19));

} else {
var statearr_44734_44797 = state_44655__$1;
(statearr_44734_44797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (42))){
var state_44655__$1 = state_44655;
var statearr_44735_44798 = state_44655__$1;
(statearr_44735_44798[(2)] = null);

(statearr_44735_44798[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (37))){
var inst_44621 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44736_44799 = state_44655__$1;
(statearr_44736_44799[(2)] = inst_44621);

(statearr_44736_44799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (8))){
var inst_44515 = (state_44655[(10)]);
var inst_44528 = (state_44655[(22)]);
var inst_44528__$1 = cljs.core.seq.call(null,inst_44515);
var state_44655__$1 = (function (){var statearr_44737 = state_44655;
(statearr_44737[(22)] = inst_44528__$1);

return statearr_44737;
})();
if(inst_44528__$1){
var statearr_44738_44800 = state_44655__$1;
(statearr_44738_44800[(1)] = (10));

} else {
var statearr_44739_44801 = state_44655__$1;
(statearr_44739_44801[(1)] = (11));

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
});})(c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33280__auto__,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0 = (function (){
var statearr_44740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44740[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__);

(statearr_44740[(1)] = (1));

return statearr_44740;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1 = (function (state_44655){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_44655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e44741){if((e44741 instanceof Object)){
var ex__33284__auto__ = e44741;
var statearr_44742_44802 = state_44655;
(statearr_44742_44802[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44803 = state_44655;
state_44655 = G__44803;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__ = function(state_44655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1.call(this,state_44655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33667__auto__ = (function (){var statearr_44743 = f__33666__auto__.call(null);
(statearr_44743[(6)] = c__33665__auto__);

return statearr_44743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,map__44500,map__44500__$1,opts,before_jsload,on_jsload,reload_dependents,map__44501,map__44501__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33665__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44806,link){
var map__44807 = p__44806;
var map__44807__$1 = ((((!((map__44807 == null)))?((((map__44807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44807):map__44807);
var file = cljs.core.get.call(null,map__44807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__44807,map__44807__$1,file){
return (function (p1__44804_SHARP_,p2__44805_SHARP_){
if(cljs.core._EQ_.call(null,p1__44804_SHARP_,p2__44805_SHARP_)){
return p1__44804_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__44807,map__44807__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44810){
var map__44811 = p__44810;
var map__44811__$1 = ((((!((map__44811 == null)))?((((map__44811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44811):map__44811);
var match_length = cljs.core.get.call(null,map__44811__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44811__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44809_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44809_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44813_SHARP_,p2__44814_SHARP_){
return cljs.core.assoc.call(null,p1__44813_SHARP_,cljs.core.get.call(null,p2__44814_SHARP_,key),p2__44814_SHARP_);
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
var loaded_f_datas_44815 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44815);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44815);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44816,p__44817){
var map__44818 = p__44816;
var map__44818__$1 = ((((!((map__44818 == null)))?((((map__44818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44818):map__44818);
var on_cssload = cljs.core.get.call(null,map__44818__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44819 = p__44817;
var map__44819__$1 = ((((!((map__44819 == null)))?((((map__44819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44819):map__44819);
var files_msg = map__44819__$1;
var files = cljs.core.get.call(null,map__44819__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510229224720
