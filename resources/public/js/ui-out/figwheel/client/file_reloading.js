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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44018_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44018_SHARP_));
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
var seq__44019 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44020 = null;
var count__44021 = (0);
var i__44022 = (0);
while(true){
if((i__44022 < count__44021)){
var n = cljs.core._nth.call(null,chunk__44020,i__44022);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44023 = seq__44019;
var G__44024 = chunk__44020;
var G__44025 = count__44021;
var G__44026 = (i__44022 + (1));
seq__44019 = G__44023;
chunk__44020 = G__44024;
count__44021 = G__44025;
i__44022 = G__44026;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__44019);
if(temp__5278__auto__){
var seq__44019__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44019__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__44019__$1);
var G__44027 = cljs.core.chunk_rest.call(null,seq__44019__$1);
var G__44028 = c__31003__auto__;
var G__44029 = cljs.core.count.call(null,c__31003__auto__);
var G__44030 = (0);
seq__44019 = G__44027;
chunk__44020 = G__44028;
count__44021 = G__44029;
i__44022 = G__44030;
continue;
} else {
var n = cljs.core.first.call(null,seq__44019__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44031 = cljs.core.next.call(null,seq__44019__$1);
var G__44032 = null;
var G__44033 = (0);
var G__44034 = (0);
seq__44019 = G__44031;
chunk__44020 = G__44032;
count__44021 = G__44033;
i__44022 = G__44034;
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
return cljs.core.some.call(null,(function (p__44035){
var vec__44036 = p__44035;
var _ = cljs.core.nth.call(null,vec__44036,(0),null);
var v = cljs.core.nth.call(null,vec__44036,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__44039){
var vec__44040 = p__44039;
var k = cljs.core.nth.call(null,vec__44040,(0),null);
var v = cljs.core.nth.call(null,vec__44040,(1),null);
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

var seq__44054_44075 = cljs.core.seq.call(null,deps);
var chunk__44055_44076 = null;
var count__44056_44077 = (0);
var i__44057_44078 = (0);
while(true){
if((i__44057_44078 < count__44056_44077)){
var dep_44080 = cljs.core._nth.call(null,chunk__44055_44076,i__44057_44078);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_44080;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44080));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44080,(depth + (1)),state);
} else {
}

var G__44081 = seq__44054_44075;
var G__44082 = chunk__44055_44076;
var G__44083 = count__44056_44077;
var G__44084 = (i__44057_44078 + (1));
seq__44054_44075 = G__44081;
chunk__44055_44076 = G__44082;
count__44056_44077 = G__44083;
i__44057_44078 = G__44084;
continue;
} else {
var temp__5278__auto___44089 = cljs.core.seq.call(null,seq__44054_44075);
if(temp__5278__auto___44089){
var seq__44054_44091__$1 = temp__5278__auto___44089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44054_44091__$1)){
var c__31003__auto___44092 = cljs.core.chunk_first.call(null,seq__44054_44091__$1);
var G__44097 = cljs.core.chunk_rest.call(null,seq__44054_44091__$1);
var G__44098 = c__31003__auto___44092;
var G__44099 = cljs.core.count.call(null,c__31003__auto___44092);
var G__44100 = (0);
seq__44054_44075 = G__44097;
chunk__44055_44076 = G__44098;
count__44056_44077 = G__44099;
i__44057_44078 = G__44100;
continue;
} else {
var dep_44102 = cljs.core.first.call(null,seq__44054_44091__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_44102;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44102));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44102,(depth + (1)),state);
} else {
}

var G__44109 = cljs.core.next.call(null,seq__44054_44091__$1);
var G__44110 = null;
var G__44111 = (0);
var G__44112 = (0);
seq__44054_44075 = G__44109;
chunk__44055_44076 = G__44110;
count__44056_44077 = G__44111;
i__44057_44078 = G__44112;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44065){
var vec__44066 = p__44065;
var seq__44067 = cljs.core.seq.call(null,vec__44066);
var first__44068 = cljs.core.first.call(null,seq__44067);
var seq__44067__$1 = cljs.core.next.call(null,seq__44067);
var x = first__44068;
var xs = seq__44067__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44066,seq__44067,first__44068,seq__44067__$1,x,xs,get_deps__$1){
return (function (p1__44043_SHARP_){
return clojure.set.difference.call(null,p1__44043_SHARP_,x);
});})(vec__44066,seq__44067,first__44068,seq__44067__$1,x,xs,get_deps__$1))
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
var seq__44139 = cljs.core.seq.call(null,provides);
var chunk__44140 = null;
var count__44141 = (0);
var i__44142 = (0);
while(true){
if((i__44142 < count__44141)){
var prov = cljs.core._nth.call(null,chunk__44140,i__44142);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44143_44151 = cljs.core.seq.call(null,requires);
var chunk__44144_44152 = null;
var count__44145_44153 = (0);
var i__44146_44154 = (0);
while(true){
if((i__44146_44154 < count__44145_44153)){
var req_44155 = cljs.core._nth.call(null,chunk__44144_44152,i__44146_44154);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44155,prov);

var G__44156 = seq__44143_44151;
var G__44157 = chunk__44144_44152;
var G__44158 = count__44145_44153;
var G__44159 = (i__44146_44154 + (1));
seq__44143_44151 = G__44156;
chunk__44144_44152 = G__44157;
count__44145_44153 = G__44158;
i__44146_44154 = G__44159;
continue;
} else {
var temp__5278__auto___44160 = cljs.core.seq.call(null,seq__44143_44151);
if(temp__5278__auto___44160){
var seq__44143_44161__$1 = temp__5278__auto___44160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44143_44161__$1)){
var c__31003__auto___44162 = cljs.core.chunk_first.call(null,seq__44143_44161__$1);
var G__44163 = cljs.core.chunk_rest.call(null,seq__44143_44161__$1);
var G__44164 = c__31003__auto___44162;
var G__44165 = cljs.core.count.call(null,c__31003__auto___44162);
var G__44166 = (0);
seq__44143_44151 = G__44163;
chunk__44144_44152 = G__44164;
count__44145_44153 = G__44165;
i__44146_44154 = G__44166;
continue;
} else {
var req_44167 = cljs.core.first.call(null,seq__44143_44161__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44167,prov);

var G__44169 = cljs.core.next.call(null,seq__44143_44161__$1);
var G__44170 = null;
var G__44171 = (0);
var G__44172 = (0);
seq__44143_44151 = G__44169;
chunk__44144_44152 = G__44170;
count__44145_44153 = G__44171;
i__44146_44154 = G__44172;
continue;
}
} else {
}
}
break;
}

var G__44173 = seq__44139;
var G__44174 = chunk__44140;
var G__44175 = count__44141;
var G__44176 = (i__44142 + (1));
seq__44139 = G__44173;
chunk__44140 = G__44174;
count__44141 = G__44175;
i__44142 = G__44176;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__44139);
if(temp__5278__auto__){
var seq__44139__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44139__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__44139__$1);
var G__44177 = cljs.core.chunk_rest.call(null,seq__44139__$1);
var G__44178 = c__31003__auto__;
var G__44179 = cljs.core.count.call(null,c__31003__auto__);
var G__44180 = (0);
seq__44139 = G__44177;
chunk__44140 = G__44178;
count__44141 = G__44179;
i__44142 = G__44180;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44139__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44147_44184 = cljs.core.seq.call(null,requires);
var chunk__44148_44185 = null;
var count__44149_44186 = (0);
var i__44150_44187 = (0);
while(true){
if((i__44150_44187 < count__44149_44186)){
var req_44192 = cljs.core._nth.call(null,chunk__44148_44185,i__44150_44187);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44192,prov);

var G__44193 = seq__44147_44184;
var G__44194 = chunk__44148_44185;
var G__44195 = count__44149_44186;
var G__44196 = (i__44150_44187 + (1));
seq__44147_44184 = G__44193;
chunk__44148_44185 = G__44194;
count__44149_44186 = G__44195;
i__44150_44187 = G__44196;
continue;
} else {
var temp__5278__auto___44197__$1 = cljs.core.seq.call(null,seq__44147_44184);
if(temp__5278__auto___44197__$1){
var seq__44147_44198__$1 = temp__5278__auto___44197__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44147_44198__$1)){
var c__31003__auto___44199 = cljs.core.chunk_first.call(null,seq__44147_44198__$1);
var G__44200 = cljs.core.chunk_rest.call(null,seq__44147_44198__$1);
var G__44201 = c__31003__auto___44199;
var G__44202 = cljs.core.count.call(null,c__31003__auto___44199);
var G__44203 = (0);
seq__44147_44184 = G__44200;
chunk__44148_44185 = G__44201;
count__44149_44186 = G__44202;
i__44150_44187 = G__44203;
continue;
} else {
var req_44204 = cljs.core.first.call(null,seq__44147_44198__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44204,prov);

var G__44205 = cljs.core.next.call(null,seq__44147_44198__$1);
var G__44206 = null;
var G__44207 = (0);
var G__44208 = (0);
seq__44147_44184 = G__44205;
chunk__44148_44185 = G__44206;
count__44149_44186 = G__44207;
i__44150_44187 = G__44208;
continue;
}
} else {
}
}
break;
}

var G__44210 = cljs.core.next.call(null,seq__44139__$1);
var G__44211 = null;
var G__44212 = (0);
var G__44213 = (0);
seq__44139 = G__44210;
chunk__44140 = G__44211;
count__44141 = G__44212;
i__44142 = G__44213;
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
var seq__44216_44223 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44217_44224 = null;
var count__44218_44225 = (0);
var i__44219_44226 = (0);
while(true){
if((i__44219_44226 < count__44218_44225)){
var ns_44227 = cljs.core._nth.call(null,chunk__44217_44224,i__44219_44226);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44227);

var G__44228 = seq__44216_44223;
var G__44229 = chunk__44217_44224;
var G__44230 = count__44218_44225;
var G__44231 = (i__44219_44226 + (1));
seq__44216_44223 = G__44228;
chunk__44217_44224 = G__44229;
count__44218_44225 = G__44230;
i__44219_44226 = G__44231;
continue;
} else {
var temp__5278__auto___44232 = cljs.core.seq.call(null,seq__44216_44223);
if(temp__5278__auto___44232){
var seq__44216_44233__$1 = temp__5278__auto___44232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44216_44233__$1)){
var c__31003__auto___44234 = cljs.core.chunk_first.call(null,seq__44216_44233__$1);
var G__44235 = cljs.core.chunk_rest.call(null,seq__44216_44233__$1);
var G__44236 = c__31003__auto___44234;
var G__44237 = cljs.core.count.call(null,c__31003__auto___44234);
var G__44238 = (0);
seq__44216_44223 = G__44235;
chunk__44217_44224 = G__44236;
count__44218_44225 = G__44237;
i__44219_44226 = G__44238;
continue;
} else {
var ns_44239 = cljs.core.first.call(null,seq__44216_44233__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44239);

var G__44241 = cljs.core.next.call(null,seq__44216_44233__$1);
var G__44242 = null;
var G__44243 = (0);
var G__44244 = (0);
seq__44216_44223 = G__44241;
chunk__44217_44224 = G__44242;
count__44218_44225 = G__44243;
i__44219_44226 = G__44244;
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
var G__44266__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44268__i = 0, G__44268__a = new Array(arguments.length -  0);
while (G__44268__i < G__44268__a.length) {G__44268__a[G__44268__i] = arguments[G__44268__i + 0]; ++G__44268__i;}
  args = new cljs.core.IndexedSeq(G__44268__a,0,null);
} 
return G__44266__delegate.call(this,args);};
G__44266.cljs$lang$maxFixedArity = 0;
G__44266.cljs$lang$applyTo = (function (arglist__44269){
var args = cljs.core.seq(arglist__44269);
return G__44266__delegate(args);
});
G__44266.cljs$core$IFn$_invoke$arity$variadic = G__44266__delegate;
return G__44266;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__44270_SHARP_,p2__44271_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44270_SHARP_)].join('')),p2__44271_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__44272_SHARP_,p2__44273_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44272_SHARP_)].join(''),p2__44273_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44274 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44274.addCallback(((function (G__44274){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__44274))
);

G__44274.addErrback(((function (G__44274){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__44274))
);

return G__44274;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44276){if((e44276 instanceof Error)){
var e = e44276;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44276;

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
}catch (e44280){if((e44280 instanceof Error)){
var e = e44280;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44280;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44285 = cljs.core._EQ_;
var expr__44286 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44285.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44286))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__44285.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44286))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__44285.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44286))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__44285,expr__44286){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44285,expr__44286))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44288,callback){
var map__44289 = p__44288;
var map__44289__$1 = ((((!((map__44289 == null)))?((((map__44289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44289):map__44289);
var file_msg = map__44289__$1;
var request_url = cljs.core.get.call(null,map__44289__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__44289,map__44289__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44289,map__44289__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__){
return (function (state_44337){
var state_val_44338 = (state_44337[(1)]);
if((state_val_44338 === (7))){
var inst_44333 = (state_44337[(2)]);
var state_44337__$1 = state_44337;
var statearr_44340_44372 = state_44337__$1;
(statearr_44340_44372[(2)] = inst_44333);

(statearr_44340_44372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (1))){
var state_44337__$1 = state_44337;
var statearr_44341_44373 = state_44337__$1;
(statearr_44341_44373[(2)] = null);

(statearr_44341_44373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (4))){
var inst_44301 = (state_44337[(7)]);
var inst_44301__$1 = (state_44337[(2)]);
var state_44337__$1 = (function (){var statearr_44342 = state_44337;
(statearr_44342[(7)] = inst_44301__$1);

return statearr_44342;
})();
if(cljs.core.truth_(inst_44301__$1)){
var statearr_44344_44374 = state_44337__$1;
(statearr_44344_44374[(1)] = (5));

} else {
var statearr_44345_44375 = state_44337__$1;
(statearr_44345_44375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (15))){
var inst_44315 = (state_44337[(8)]);
var inst_44318 = (state_44337[(9)]);
var inst_44320 = inst_44318.call(null,inst_44315);
var state_44337__$1 = state_44337;
var statearr_44349_44376 = state_44337__$1;
(statearr_44349_44376[(2)] = inst_44320);

(statearr_44349_44376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (13))){
var inst_44327 = (state_44337[(2)]);
var state_44337__$1 = state_44337;
var statearr_44351_44380 = state_44337__$1;
(statearr_44351_44380[(2)] = inst_44327);

(statearr_44351_44380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (6))){
var state_44337__$1 = state_44337;
var statearr_44352_44381 = state_44337__$1;
(statearr_44352_44381[(2)] = null);

(statearr_44352_44381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (17))){
var inst_44324 = (state_44337[(2)]);
var state_44337__$1 = state_44337;
var statearr_44353_44382 = state_44337__$1;
(statearr_44353_44382[(2)] = inst_44324);

(statearr_44353_44382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (3))){
var inst_44335 = (state_44337[(2)]);
var state_44337__$1 = state_44337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44337__$1,inst_44335);
} else {
if((state_val_44338 === (12))){
var state_44337__$1 = state_44337;
var statearr_44354_44383 = state_44337__$1;
(statearr_44354_44383[(2)] = null);

(statearr_44354_44383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (2))){
var state_44337__$1 = state_44337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44337__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44338 === (11))){
var inst_44306 = (state_44337[(10)]);
var inst_44313 = figwheel.client.file_reloading.blocking_load.call(null,inst_44306);
var state_44337__$1 = state_44337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44337__$1,(14),inst_44313);
} else {
if((state_val_44338 === (9))){
var inst_44306 = (state_44337[(10)]);
var state_44337__$1 = state_44337;
if(cljs.core.truth_(inst_44306)){
var statearr_44355_44387 = state_44337__$1;
(statearr_44355_44387[(1)] = (11));

} else {
var statearr_44356_44388 = state_44337__$1;
(statearr_44356_44388[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (5))){
var inst_44301 = (state_44337[(7)]);
var inst_44307 = (state_44337[(11)]);
var inst_44306 = cljs.core.nth.call(null,inst_44301,(0),null);
var inst_44307__$1 = cljs.core.nth.call(null,inst_44301,(1),null);
var state_44337__$1 = (function (){var statearr_44357 = state_44337;
(statearr_44357[(11)] = inst_44307__$1);

(statearr_44357[(10)] = inst_44306);

return statearr_44357;
})();
if(cljs.core.truth_(inst_44307__$1)){
var statearr_44358_44389 = state_44337__$1;
(statearr_44358_44389[(1)] = (8));

} else {
var statearr_44359_44390 = state_44337__$1;
(statearr_44359_44390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (14))){
var inst_44318 = (state_44337[(9)]);
var inst_44306 = (state_44337[(10)]);
var inst_44315 = (state_44337[(2)]);
var inst_44316 = console.log("Loading!",inst_44306);
var inst_44317 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44318__$1 = cljs.core.get.call(null,inst_44317,inst_44306);
var state_44337__$1 = (function (){var statearr_44360 = state_44337;
(statearr_44360[(12)] = inst_44316);

(statearr_44360[(8)] = inst_44315);

(statearr_44360[(9)] = inst_44318__$1);

return statearr_44360;
})();
if(cljs.core.truth_(inst_44318__$1)){
var statearr_44361_44391 = state_44337__$1;
(statearr_44361_44391[(1)] = (15));

} else {
var statearr_44362_44392 = state_44337__$1;
(statearr_44362_44392[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (16))){
var inst_44315 = (state_44337[(8)]);
var inst_44322 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44315);
var state_44337__$1 = state_44337;
var statearr_44363_44396 = state_44337__$1;
(statearr_44363_44396[(2)] = inst_44322);

(statearr_44363_44396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (10))){
var inst_44329 = (state_44337[(2)]);
var state_44337__$1 = (function (){var statearr_44364 = state_44337;
(statearr_44364[(13)] = inst_44329);

return statearr_44364;
})();
var statearr_44365_44398 = state_44337__$1;
(statearr_44365_44398[(2)] = null);

(statearr_44365_44398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44338 === (8))){
var inst_44307 = (state_44337[(11)]);
var inst_44309 = console.log("Evaling!",inst_44307);
var inst_44310 = eval(inst_44307);
var state_44337__$1 = (function (){var statearr_44366 = state_44337;
(statearr_44366[(14)] = inst_44309);

return statearr_44366;
})();
var statearr_44367_44399 = state_44337__$1;
(statearr_44367_44399[(2)] = inst_44310);

(statearr_44367_44399[(1)] = (10));


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
});})(c__33728__auto__))
;
return ((function (switch__33334__auto__,c__33728__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33335__auto__ = null;
var figwheel$client$file_reloading$state_machine__33335__auto____0 = (function (){
var statearr_44368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44368[(0)] = figwheel$client$file_reloading$state_machine__33335__auto__);

(statearr_44368[(1)] = (1));

return statearr_44368;
});
var figwheel$client$file_reloading$state_machine__33335__auto____1 = (function (state_44337){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_44337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e44369){if((e44369 instanceof Object)){
var ex__33338__auto__ = e44369;
var statearr_44370_44400 = state_44337;
(statearr_44370_44400[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44401 = state_44337;
state_44337 = G__44401;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33335__auto__ = function(state_44337){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33335__auto____1.call(this,state_44337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33335__auto____0;
figwheel$client$file_reloading$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33335__auto____1;
return figwheel$client$file_reloading$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_44371 = f__33729__auto__.call(null);
(statearr_44371[(6)] = c__33728__auto__);

return statearr_44371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__44403 = arguments.length;
switch (G__44403) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44407,callback){
var map__44408 = p__44407;
var map__44408__$1 = ((((!((map__44408 == null)))?((((map__44408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44408):map__44408);
var file_msg = map__44408__$1;
var namespace = cljs.core.get.call(null,map__44408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44408,map__44408__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44408,map__44408__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44413){
var map__44414 = p__44413;
var map__44414__$1 = ((((!((map__44414 == null)))?((((map__44414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44414):map__44414);
var file_msg = map__44414__$1;
var namespace = cljs.core.get.call(null,map__44414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44417){
var map__44418 = p__44417;
var map__44418__$1 = ((((!((map__44418 == null)))?((((map__44418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44418):map__44418);
var file_msg = map__44418__$1;
var namespace = cljs.core.get.call(null,map__44418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44425,callback){
var map__44426 = p__44425;
var map__44426__$1 = ((((!((map__44426 == null)))?((((map__44426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44426):map__44426);
var file_msg = map__44426__$1;
var request_url = cljs.core.get.call(null,map__44426__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44426__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33728__auto___44502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___44502,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___44502,out){
return (function (state_44480){
var state_val_44481 = (state_44480[(1)]);
if((state_val_44481 === (1))){
var inst_44440 = cljs.core.seq.call(null,files);
var inst_44441 = cljs.core.first.call(null,inst_44440);
var inst_44443 = cljs.core.next.call(null,inst_44440);
var inst_44446 = files;
var state_44480__$1 = (function (){var statearr_44483 = state_44480;
(statearr_44483[(7)] = inst_44443);

(statearr_44483[(8)] = inst_44446);

(statearr_44483[(9)] = inst_44441);

return statearr_44483;
})();
var statearr_44484_44503 = state_44480__$1;
(statearr_44484_44503[(2)] = null);

(statearr_44484_44503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44481 === (2))){
var inst_44459 = (state_44480[(10)]);
var inst_44446 = (state_44480[(8)]);
var inst_44455 = cljs.core.seq.call(null,inst_44446);
var inst_44459__$1 = cljs.core.first.call(null,inst_44455);
var inst_44462 = cljs.core.next.call(null,inst_44455);
var inst_44464 = (inst_44459__$1 == null);
var inst_44465 = cljs.core.not.call(null,inst_44464);
var state_44480__$1 = (function (){var statearr_44486 = state_44480;
(statearr_44486[(10)] = inst_44459__$1);

(statearr_44486[(11)] = inst_44462);

return statearr_44486;
})();
if(inst_44465){
var statearr_44487_44504 = state_44480__$1;
(statearr_44487_44504[(1)] = (4));

} else {
var statearr_44489_44505 = state_44480__$1;
(statearr_44489_44505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44481 === (3))){
var inst_44478 = (state_44480[(2)]);
var state_44480__$1 = state_44480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44480__$1,inst_44478);
} else {
if((state_val_44481 === (4))){
var inst_44459 = (state_44480[(10)]);
var inst_44468 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44459);
var state_44480__$1 = state_44480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44480__$1,(7),inst_44468);
} else {
if((state_val_44481 === (5))){
var inst_44474 = cljs.core.async.close_BANG_.call(null,out);
var state_44480__$1 = state_44480;
var statearr_44493_44508 = state_44480__$1;
(statearr_44493_44508[(2)] = inst_44474);

(statearr_44493_44508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44481 === (6))){
var inst_44476 = (state_44480[(2)]);
var state_44480__$1 = state_44480;
var statearr_44494_44509 = state_44480__$1;
(statearr_44494_44509[(2)] = inst_44476);

(statearr_44494_44509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44481 === (7))){
var inst_44462 = (state_44480[(11)]);
var inst_44470 = (state_44480[(2)]);
var inst_44471 = cljs.core.async.put_BANG_.call(null,out,inst_44470);
var inst_44446 = inst_44462;
var state_44480__$1 = (function (){var statearr_44496 = state_44480;
(statearr_44496[(8)] = inst_44446);

(statearr_44496[(12)] = inst_44471);

return statearr_44496;
})();
var statearr_44497_44510 = state_44480__$1;
(statearr_44497_44510[(2)] = null);

(statearr_44497_44510[(1)] = (2));


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
});})(c__33728__auto___44502,out))
;
return ((function (switch__33334__auto__,c__33728__auto___44502,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____0 = (function (){
var statearr_44498 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44498[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__);

(statearr_44498[(1)] = (1));

return statearr_44498;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____1 = (function (state_44480){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_44480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e44499){if((e44499 instanceof Object)){
var ex__33338__auto__ = e44499;
var statearr_44500_44526 = state_44480;
(statearr_44500_44526[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44529 = state_44480;
state_44480 = G__44529;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__ = function(state_44480){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____1.call(this,state_44480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___44502,out))
})();
var state__33730__auto__ = (function (){var statearr_44501 = f__33729__auto__.call(null);
(statearr_44501[(6)] = c__33728__auto___44502);

return statearr_44501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___44502,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44531,opts){
var map__44532 = p__44531;
var map__44532__$1 = ((((!((map__44532 == null)))?((((map__44532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44532):map__44532);
var eval_body = cljs.core.get.call(null,map__44532__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44532__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e44534){var e = e44534;
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
return (function (p1__44536_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44536_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__44538){
var vec__44539 = p__44538;
var k = cljs.core.nth.call(null,vec__44539,(0),null);
var v = cljs.core.nth.call(null,vec__44539,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44542){
var vec__44543 = p__44542;
var k = cljs.core.nth.call(null,vec__44543,(0),null);
var v = cljs.core.nth.call(null,vec__44543,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44549,p__44550){
var map__44551 = p__44549;
var map__44551__$1 = ((((!((map__44551 == null)))?((((map__44551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44551):map__44551);
var opts = map__44551__$1;
var before_jsload = cljs.core.get.call(null,map__44551__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44551__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44551__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44552 = p__44550;
var map__44552__$1 = ((((!((map__44552 == null)))?((((map__44552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44552):map__44552);
var msg = map__44552__$1;
var files = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44706){
var state_val_44707 = (state_44706[(1)]);
if((state_val_44707 === (7))){
var inst_44568 = (state_44706[(7)]);
var inst_44567 = (state_44706[(8)]);
var inst_44566 = (state_44706[(9)]);
var inst_44569 = (state_44706[(10)]);
var inst_44574 = cljs.core._nth.call(null,inst_44567,inst_44569);
var inst_44575 = figwheel.client.file_reloading.eval_body.call(null,inst_44574,opts);
var inst_44576 = (inst_44569 + (1));
var tmp44708 = inst_44568;
var tmp44709 = inst_44567;
var tmp44710 = inst_44566;
var inst_44566__$1 = tmp44710;
var inst_44567__$1 = tmp44709;
var inst_44568__$1 = tmp44708;
var inst_44569__$1 = inst_44576;
var state_44706__$1 = (function (){var statearr_44711 = state_44706;
(statearr_44711[(7)] = inst_44568__$1);

(statearr_44711[(8)] = inst_44567__$1);

(statearr_44711[(11)] = inst_44575);

(statearr_44711[(9)] = inst_44566__$1);

(statearr_44711[(10)] = inst_44569__$1);

return statearr_44711;
})();
var statearr_44712_44795 = state_44706__$1;
(statearr_44712_44795[(2)] = null);

(statearr_44712_44795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (20))){
var inst_44609 = (state_44706[(12)]);
var inst_44617 = figwheel.client.file_reloading.sort_files.call(null,inst_44609);
var state_44706__$1 = state_44706;
var statearr_44713_44796 = state_44706__$1;
(statearr_44713_44796[(2)] = inst_44617);

(statearr_44713_44796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (27))){
var state_44706__$1 = state_44706;
var statearr_44714_44797 = state_44706__$1;
(statearr_44714_44797[(2)] = null);

(statearr_44714_44797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (1))){
var inst_44558 = (state_44706[(13)]);
var inst_44555 = before_jsload.call(null,files);
var inst_44556 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44557 = (function (){return ((function (inst_44558,inst_44555,inst_44556,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44546_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44546_SHARP_);
});
;})(inst_44558,inst_44555,inst_44556,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44558__$1 = cljs.core.filter.call(null,inst_44557,files);
var inst_44559 = cljs.core.not_empty.call(null,inst_44558__$1);
var state_44706__$1 = (function (){var statearr_44715 = state_44706;
(statearr_44715[(14)] = inst_44555);

(statearr_44715[(13)] = inst_44558__$1);

(statearr_44715[(15)] = inst_44556);

return statearr_44715;
})();
if(cljs.core.truth_(inst_44559)){
var statearr_44716_44798 = state_44706__$1;
(statearr_44716_44798[(1)] = (2));

} else {
var statearr_44717_44799 = state_44706__$1;
(statearr_44717_44799[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (24))){
var state_44706__$1 = state_44706;
var statearr_44718_44800 = state_44706__$1;
(statearr_44718_44800[(2)] = null);

(statearr_44718_44800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (39))){
var inst_44659 = (state_44706[(16)]);
var state_44706__$1 = state_44706;
var statearr_44719_44801 = state_44706__$1;
(statearr_44719_44801[(2)] = inst_44659);

(statearr_44719_44801[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (46))){
var inst_44701 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44720_44802 = state_44706__$1;
(statearr_44720_44802[(2)] = inst_44701);

(statearr_44720_44802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (4))){
var inst_44603 = (state_44706[(2)]);
var inst_44604 = cljs.core.List.EMPTY;
var inst_44605 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44604);
var inst_44606 = (function (){return ((function (inst_44603,inst_44604,inst_44605,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44547_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44547_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44547_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44547_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_44603,inst_44604,inst_44605,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44607 = cljs.core.filter.call(null,inst_44606,files);
var inst_44608 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44609 = cljs.core.concat.call(null,inst_44607,inst_44608);
var state_44706__$1 = (function (){var statearr_44721 = state_44706;
(statearr_44721[(17)] = inst_44605);

(statearr_44721[(12)] = inst_44609);

(statearr_44721[(18)] = inst_44603);

return statearr_44721;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44722_44803 = state_44706__$1;
(statearr_44722_44803[(1)] = (16));

} else {
var statearr_44723_44804 = state_44706__$1;
(statearr_44723_44804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (15))){
var inst_44593 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44724_44805 = state_44706__$1;
(statearr_44724_44805[(2)] = inst_44593);

(statearr_44724_44805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (21))){
var inst_44619 = (state_44706[(19)]);
var inst_44619__$1 = (state_44706[(2)]);
var inst_44620 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44619__$1);
var state_44706__$1 = (function (){var statearr_44725 = state_44706;
(statearr_44725[(19)] = inst_44619__$1);

return statearr_44725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44706__$1,(22),inst_44620);
} else {
if((state_val_44707 === (31))){
var inst_44704 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44706__$1,inst_44704);
} else {
if((state_val_44707 === (32))){
var inst_44659 = (state_44706[(16)]);
var inst_44664 = inst_44659.cljs$lang$protocol_mask$partition0$;
var inst_44665 = (inst_44664 & (64));
var inst_44666 = inst_44659.cljs$core$ISeq$;
var inst_44667 = (cljs.core.PROTOCOL_SENTINEL === inst_44666);
var inst_44668 = (inst_44665) || (inst_44667);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44668)){
var statearr_44726_44806 = state_44706__$1;
(statearr_44726_44806[(1)] = (35));

} else {
var statearr_44727_44807 = state_44706__$1;
(statearr_44727_44807[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (40))){
var inst_44681 = (state_44706[(20)]);
var inst_44680 = (state_44706[(2)]);
var inst_44681__$1 = cljs.core.get.call(null,inst_44680,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44682 = cljs.core.get.call(null,inst_44680,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44683 = cljs.core.not_empty.call(null,inst_44681__$1);
var state_44706__$1 = (function (){var statearr_44728 = state_44706;
(statearr_44728[(20)] = inst_44681__$1);

(statearr_44728[(21)] = inst_44682);

return statearr_44728;
})();
if(cljs.core.truth_(inst_44683)){
var statearr_44729_44808 = state_44706__$1;
(statearr_44729_44808[(1)] = (41));

} else {
var statearr_44730_44809 = state_44706__$1;
(statearr_44730_44809[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (33))){
var state_44706__$1 = state_44706;
var statearr_44731_44810 = state_44706__$1;
(statearr_44731_44810[(2)] = false);

(statearr_44731_44810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (13))){
var inst_44579 = (state_44706[(22)]);
var inst_44583 = cljs.core.chunk_first.call(null,inst_44579);
var inst_44584 = cljs.core.chunk_rest.call(null,inst_44579);
var inst_44585 = cljs.core.count.call(null,inst_44583);
var inst_44566 = inst_44584;
var inst_44567 = inst_44583;
var inst_44568 = inst_44585;
var inst_44569 = (0);
var state_44706__$1 = (function (){var statearr_44732 = state_44706;
(statearr_44732[(7)] = inst_44568);

(statearr_44732[(8)] = inst_44567);

(statearr_44732[(9)] = inst_44566);

(statearr_44732[(10)] = inst_44569);

return statearr_44732;
})();
var statearr_44733_44811 = state_44706__$1;
(statearr_44733_44811[(2)] = null);

(statearr_44733_44811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (22))){
var inst_44619 = (state_44706[(19)]);
var inst_44627 = (state_44706[(23)]);
var inst_44623 = (state_44706[(24)]);
var inst_44622 = (state_44706[(25)]);
var inst_44622__$1 = (state_44706[(2)]);
var inst_44623__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44622__$1);
var inst_44624 = (function (){var all_files = inst_44619;
var res_SINGLEQUOTE_ = inst_44622__$1;
var res = inst_44623__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44619,inst_44627,inst_44623,inst_44622,inst_44622__$1,inst_44623__$1,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44548_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44548_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44619,inst_44627,inst_44623,inst_44622,inst_44622__$1,inst_44623__$1,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44625 = cljs.core.filter.call(null,inst_44624,inst_44622__$1);
var inst_44626 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44627__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44626);
var inst_44628 = cljs.core.not_empty.call(null,inst_44627__$1);
var state_44706__$1 = (function (){var statearr_44734 = state_44706;
(statearr_44734[(26)] = inst_44625);

(statearr_44734[(23)] = inst_44627__$1);

(statearr_44734[(24)] = inst_44623__$1);

(statearr_44734[(25)] = inst_44622__$1);

return statearr_44734;
})();
if(cljs.core.truth_(inst_44628)){
var statearr_44735_44812 = state_44706__$1;
(statearr_44735_44812[(1)] = (23));

} else {
var statearr_44736_44813 = state_44706__$1;
(statearr_44736_44813[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (36))){
var state_44706__$1 = state_44706;
var statearr_44737_44814 = state_44706__$1;
(statearr_44737_44814[(2)] = false);

(statearr_44737_44814[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (41))){
var inst_44681 = (state_44706[(20)]);
var inst_44685 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44686 = cljs.core.map.call(null,inst_44685,inst_44681);
var inst_44687 = cljs.core.pr_str.call(null,inst_44686);
var inst_44688 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44687)].join('');
var inst_44689 = figwheel.client.utils.log.call(null,inst_44688);
var state_44706__$1 = state_44706;
var statearr_44738_44815 = state_44706__$1;
(statearr_44738_44815[(2)] = inst_44689);

(statearr_44738_44815[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (43))){
var inst_44682 = (state_44706[(21)]);
var inst_44692 = (state_44706[(2)]);
var inst_44693 = cljs.core.not_empty.call(null,inst_44682);
var state_44706__$1 = (function (){var statearr_44739 = state_44706;
(statearr_44739[(27)] = inst_44692);

return statearr_44739;
})();
if(cljs.core.truth_(inst_44693)){
var statearr_44740_44816 = state_44706__$1;
(statearr_44740_44816[(1)] = (44));

} else {
var statearr_44741_44817 = state_44706__$1;
(statearr_44741_44817[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (29))){
var inst_44619 = (state_44706[(19)]);
var inst_44625 = (state_44706[(26)]);
var inst_44627 = (state_44706[(23)]);
var inst_44659 = (state_44706[(16)]);
var inst_44623 = (state_44706[(24)]);
var inst_44622 = (state_44706[(25)]);
var inst_44655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44658 = (function (){var all_files = inst_44619;
var res_SINGLEQUOTE_ = inst_44622;
var res = inst_44623;
var files_not_loaded = inst_44625;
var dependencies_that_loaded = inst_44627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44659,inst_44623,inst_44622,inst_44655,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44657){
var map__44742 = p__44657;
var map__44742__$1 = ((((!((map__44742 == null)))?((((map__44742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44742):map__44742);
var namespace = cljs.core.get.call(null,map__44742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44659,inst_44623,inst_44622,inst_44655,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44659__$1 = cljs.core.group_by.call(null,inst_44658,inst_44625);
var inst_44661 = (inst_44659__$1 == null);
var inst_44662 = cljs.core.not.call(null,inst_44661);
var state_44706__$1 = (function (){var statearr_44744 = state_44706;
(statearr_44744[(16)] = inst_44659__$1);

(statearr_44744[(28)] = inst_44655);

return statearr_44744;
})();
if(inst_44662){
var statearr_44745_44818 = state_44706__$1;
(statearr_44745_44818[(1)] = (32));

} else {
var statearr_44746_44819 = state_44706__$1;
(statearr_44746_44819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (44))){
var inst_44682 = (state_44706[(21)]);
var inst_44695 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44682);
var inst_44696 = cljs.core.pr_str.call(null,inst_44695);
var inst_44697 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44696)].join('');
var inst_44698 = figwheel.client.utils.log.call(null,inst_44697);
var state_44706__$1 = state_44706;
var statearr_44747_44820 = state_44706__$1;
(statearr_44747_44820[(2)] = inst_44698);

(statearr_44747_44820[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (6))){
var inst_44600 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44748_44821 = state_44706__$1;
(statearr_44748_44821[(2)] = inst_44600);

(statearr_44748_44821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (28))){
var inst_44625 = (state_44706[(26)]);
var inst_44652 = (state_44706[(2)]);
var inst_44653 = cljs.core.not_empty.call(null,inst_44625);
var state_44706__$1 = (function (){var statearr_44749 = state_44706;
(statearr_44749[(29)] = inst_44652);

return statearr_44749;
})();
if(cljs.core.truth_(inst_44653)){
var statearr_44750_44822 = state_44706__$1;
(statearr_44750_44822[(1)] = (29));

} else {
var statearr_44751_44823 = state_44706__$1;
(statearr_44751_44823[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (25))){
var inst_44623 = (state_44706[(24)]);
var inst_44639 = (state_44706[(2)]);
var inst_44640 = cljs.core.not_empty.call(null,inst_44623);
var state_44706__$1 = (function (){var statearr_44752 = state_44706;
(statearr_44752[(30)] = inst_44639);

return statearr_44752;
})();
if(cljs.core.truth_(inst_44640)){
var statearr_44753_44824 = state_44706__$1;
(statearr_44753_44824[(1)] = (26));

} else {
var statearr_44754_44825 = state_44706__$1;
(statearr_44754_44825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (34))){
var inst_44675 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44675)){
var statearr_44755_44826 = state_44706__$1;
(statearr_44755_44826[(1)] = (38));

} else {
var statearr_44756_44827 = state_44706__$1;
(statearr_44756_44827[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (17))){
var state_44706__$1 = state_44706;
var statearr_44757_44828 = state_44706__$1;
(statearr_44757_44828[(2)] = recompile_dependents);

(statearr_44757_44828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (3))){
var state_44706__$1 = state_44706;
var statearr_44758_44829 = state_44706__$1;
(statearr_44758_44829[(2)] = null);

(statearr_44758_44829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (12))){
var inst_44596 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44759_44830 = state_44706__$1;
(statearr_44759_44830[(2)] = inst_44596);

(statearr_44759_44830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (2))){
var inst_44558 = (state_44706[(13)]);
var inst_44565 = cljs.core.seq.call(null,inst_44558);
var inst_44566 = inst_44565;
var inst_44567 = null;
var inst_44568 = (0);
var inst_44569 = (0);
var state_44706__$1 = (function (){var statearr_44760 = state_44706;
(statearr_44760[(7)] = inst_44568);

(statearr_44760[(8)] = inst_44567);

(statearr_44760[(9)] = inst_44566);

(statearr_44760[(10)] = inst_44569);

return statearr_44760;
})();
var statearr_44761_44831 = state_44706__$1;
(statearr_44761_44831[(2)] = null);

(statearr_44761_44831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (23))){
var inst_44619 = (state_44706[(19)]);
var inst_44625 = (state_44706[(26)]);
var inst_44627 = (state_44706[(23)]);
var inst_44623 = (state_44706[(24)]);
var inst_44622 = (state_44706[(25)]);
var inst_44630 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44632 = (function (){var all_files = inst_44619;
var res_SINGLEQUOTE_ = inst_44622;
var res = inst_44623;
var files_not_loaded = inst_44625;
var dependencies_that_loaded = inst_44627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44623,inst_44622,inst_44630,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44631){
var map__44762 = p__44631;
var map__44762__$1 = ((((!((map__44762 == null)))?((((map__44762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44762):map__44762);
var request_url = cljs.core.get.call(null,map__44762__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44623,inst_44622,inst_44630,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44633 = cljs.core.reverse.call(null,inst_44627);
var inst_44634 = cljs.core.map.call(null,inst_44632,inst_44633);
var inst_44635 = cljs.core.pr_str.call(null,inst_44634);
var inst_44636 = figwheel.client.utils.log.call(null,inst_44635);
var state_44706__$1 = (function (){var statearr_44764 = state_44706;
(statearr_44764[(31)] = inst_44630);

return statearr_44764;
})();
var statearr_44765_44832 = state_44706__$1;
(statearr_44765_44832[(2)] = inst_44636);

(statearr_44765_44832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (35))){
var state_44706__$1 = state_44706;
var statearr_44766_44833 = state_44706__$1;
(statearr_44766_44833[(2)] = true);

(statearr_44766_44833[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (19))){
var inst_44609 = (state_44706[(12)]);
var inst_44615 = figwheel.client.file_reloading.expand_files.call(null,inst_44609);
var state_44706__$1 = state_44706;
var statearr_44767_44834 = state_44706__$1;
(statearr_44767_44834[(2)] = inst_44615);

(statearr_44767_44834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (11))){
var state_44706__$1 = state_44706;
var statearr_44768_44835 = state_44706__$1;
(statearr_44768_44835[(2)] = null);

(statearr_44768_44835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (9))){
var inst_44598 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44769_44836 = state_44706__$1;
(statearr_44769_44836[(2)] = inst_44598);

(statearr_44769_44836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (5))){
var inst_44568 = (state_44706[(7)]);
var inst_44569 = (state_44706[(10)]);
var inst_44571 = (inst_44569 < inst_44568);
var inst_44572 = inst_44571;
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44572)){
var statearr_44770_44837 = state_44706__$1;
(statearr_44770_44837[(1)] = (7));

} else {
var statearr_44771_44838 = state_44706__$1;
(statearr_44771_44838[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (14))){
var inst_44579 = (state_44706[(22)]);
var inst_44588 = cljs.core.first.call(null,inst_44579);
var inst_44589 = figwheel.client.file_reloading.eval_body.call(null,inst_44588,opts);
var inst_44590 = cljs.core.next.call(null,inst_44579);
var inst_44566 = inst_44590;
var inst_44567 = null;
var inst_44568 = (0);
var inst_44569 = (0);
var state_44706__$1 = (function (){var statearr_44772 = state_44706;
(statearr_44772[(32)] = inst_44589);

(statearr_44772[(7)] = inst_44568);

(statearr_44772[(8)] = inst_44567);

(statearr_44772[(9)] = inst_44566);

(statearr_44772[(10)] = inst_44569);

return statearr_44772;
})();
var statearr_44773_44839 = state_44706__$1;
(statearr_44773_44839[(2)] = null);

(statearr_44773_44839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (45))){
var state_44706__$1 = state_44706;
var statearr_44774_44840 = state_44706__$1;
(statearr_44774_44840[(2)] = null);

(statearr_44774_44840[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (26))){
var inst_44619 = (state_44706[(19)]);
var inst_44625 = (state_44706[(26)]);
var inst_44627 = (state_44706[(23)]);
var inst_44623 = (state_44706[(24)]);
var inst_44622 = (state_44706[(25)]);
var inst_44642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44644 = (function (){var all_files = inst_44619;
var res_SINGLEQUOTE_ = inst_44622;
var res = inst_44623;
var files_not_loaded = inst_44625;
var dependencies_that_loaded = inst_44627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44623,inst_44622,inst_44642,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44643){
var map__44775 = p__44643;
var map__44775__$1 = ((((!((map__44775 == null)))?((((map__44775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44775):map__44775);
var namespace = cljs.core.get.call(null,map__44775__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44623,inst_44622,inst_44642,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44645 = cljs.core.map.call(null,inst_44644,inst_44623);
var inst_44646 = cljs.core.pr_str.call(null,inst_44645);
var inst_44647 = figwheel.client.utils.log.call(null,inst_44646);
var inst_44648 = (function (){var all_files = inst_44619;
var res_SINGLEQUOTE_ = inst_44622;
var res = inst_44623;
var files_not_loaded = inst_44625;
var dependencies_that_loaded = inst_44627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44623,inst_44622,inst_44642,inst_44644,inst_44645,inst_44646,inst_44647,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44619,inst_44625,inst_44627,inst_44623,inst_44622,inst_44642,inst_44644,inst_44645,inst_44646,inst_44647,state_val_44707,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44649 = setTimeout(inst_44648,(10));
var state_44706__$1 = (function (){var statearr_44777 = state_44706;
(statearr_44777[(33)] = inst_44642);

(statearr_44777[(34)] = inst_44647);

return statearr_44777;
})();
var statearr_44778_44841 = state_44706__$1;
(statearr_44778_44841[(2)] = inst_44649);

(statearr_44778_44841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (16))){
var state_44706__$1 = state_44706;
var statearr_44779_44842 = state_44706__$1;
(statearr_44779_44842[(2)] = reload_dependents);

(statearr_44779_44842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (38))){
var inst_44659 = (state_44706[(16)]);
var inst_44677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44659);
var state_44706__$1 = state_44706;
var statearr_44780_44843 = state_44706__$1;
(statearr_44780_44843[(2)] = inst_44677);

(statearr_44780_44843[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (30))){
var state_44706__$1 = state_44706;
var statearr_44781_44844 = state_44706__$1;
(statearr_44781_44844[(2)] = null);

(statearr_44781_44844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (10))){
var inst_44579 = (state_44706[(22)]);
var inst_44581 = cljs.core.chunked_seq_QMARK_.call(null,inst_44579);
var state_44706__$1 = state_44706;
if(inst_44581){
var statearr_44782_44845 = state_44706__$1;
(statearr_44782_44845[(1)] = (13));

} else {
var statearr_44783_44846 = state_44706__$1;
(statearr_44783_44846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (18))){
var inst_44613 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44613)){
var statearr_44784_44847 = state_44706__$1;
(statearr_44784_44847[(1)] = (19));

} else {
var statearr_44785_44848 = state_44706__$1;
(statearr_44785_44848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (42))){
var state_44706__$1 = state_44706;
var statearr_44786_44849 = state_44706__$1;
(statearr_44786_44849[(2)] = null);

(statearr_44786_44849[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (37))){
var inst_44672 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44787_44850 = state_44706__$1;
(statearr_44787_44850[(2)] = inst_44672);

(statearr_44787_44850[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (8))){
var inst_44579 = (state_44706[(22)]);
var inst_44566 = (state_44706[(9)]);
var inst_44579__$1 = cljs.core.seq.call(null,inst_44566);
var state_44706__$1 = (function (){var statearr_44788 = state_44706;
(statearr_44788[(22)] = inst_44579__$1);

return statearr_44788;
})();
if(inst_44579__$1){
var statearr_44789_44851 = state_44706__$1;
(statearr_44789_44851[(1)] = (10));

} else {
var statearr_44790_44852 = state_44706__$1;
(statearr_44790_44852[(1)] = (11));

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
});})(c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33334__auto__,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____0 = (function (){
var statearr_44791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44791[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__);

(statearr_44791[(1)] = (1));

return statearr_44791;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____1 = (function (state_44706){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_44706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e44792){if((e44792 instanceof Object)){
var ex__33338__auto__ = e44792;
var statearr_44793_44853 = state_44706;
(statearr_44793_44853[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44854 = state_44706;
state_44706 = G__44854;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__ = function(state_44706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____1.call(this,state_44706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33730__auto__ = (function (){var statearr_44794 = f__33729__auto__.call(null);
(statearr_44794[(6)] = c__33728__auto__);

return statearr_44794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,map__44551,map__44551__$1,opts,before_jsload,on_jsload,reload_dependents,map__44552,map__44552__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33728__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44857,link){
var map__44858 = p__44857;
var map__44858__$1 = ((((!((map__44858 == null)))?((((map__44858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44858):map__44858);
var file = cljs.core.get.call(null,map__44858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__44858,map__44858__$1,file){
return (function (p1__44855_SHARP_,p2__44856_SHARP_){
if(cljs.core._EQ_.call(null,p1__44855_SHARP_,p2__44856_SHARP_)){
return p1__44855_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__44858,map__44858__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44861){
var map__44862 = p__44861;
var map__44862__$1 = ((((!((map__44862 == null)))?((((map__44862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44862):map__44862);
var match_length = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44860_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44860_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44864_SHARP_,p2__44865_SHARP_){
return cljs.core.assoc.call(null,p1__44864_SHARP_,cljs.core.get.call(null,p2__44865_SHARP_,key),p2__44865_SHARP_);
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
var loaded_f_datas_44866 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44866);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44866);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44867,p__44868){
var map__44869 = p__44867;
var map__44869__$1 = ((((!((map__44869 == null)))?((((map__44869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44869):map__44869);
var on_cssload = cljs.core.get.call(null,map__44869__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44870 = p__44868;
var map__44870__$1 = ((((!((map__44870 == null)))?((((map__44870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44870):map__44870);
var files_msg = map__44870__$1;
var files = cljs.core.get.call(null,map__44870__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510143309084
